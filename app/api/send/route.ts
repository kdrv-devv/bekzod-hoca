import { z } from "zod"

export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

const MAX_BODY_BYTES = 16_384
const TELEGRAM_TIMEOUT_MS = 10_000
const CONTROL_CHARACTERS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g
const NO_STORE_HEADERS = {
  "Cache-Control": "no-store, max-age=0",
  "X-Content-Type-Options": "nosniff",
}

class PayloadTooLargeError extends Error {
  constructor() {
    super("Request body is too large")
    this.name = "PayloadTooLargeError"
  }
}

const cleanSingleLine = (value: string) =>
  value.replace(CONTROL_CHARACTERS, " ").replace(/\s+/g, " ").trim()

const cleanMultiline = (value: string) =>
  value
    .replace(CONTROL_CHARACTERS, "")
    .replace(/\r\n?/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()

const leadSchema = z.object({
  name: z
    .string()
    .optional()
    .default("")
    .transform(cleanSingleLine)
    .pipe(z.string().max(80, "Name is too long")),
  phone: z
    .string()
    .transform(cleanSingleLine)
    .pipe(
      z
        .string()
        .min(7, "Phone number is too short")
        .max(32, "Phone number is too long")
        .regex(/^[+\d\s().-]+$/, "Phone number contains invalid characters")
        .refine((value) => {
          const digitCount = value.replace(/\D/g, "").length
          return digitCount >= 7 && digitCount <= 15
        }, "Phone number must contain 7 to 15 digits"),
    ),
  message: z
    .string()
    .optional()
    .default("")
    .transform(cleanMultiline)
    .pipe(z.string().max(1_500, "Message is too long")),
  website: z.string().optional().default("").transform(cleanSingleLine),
})

type TelegramResponse = {
  ok?: boolean
  description?: string
}

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: NO_STORE_HEADERS,
  })
}

async function readLimitedBody(req: Request) {
  if (!req.body) {
    return ""
  }

  const reader = req.body.getReader()
  const chunks: Uint8Array[] = []
  let totalBytes = 0

  try {
    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      totalBytes += value.byteLength

      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel().catch(() => undefined)
        throw new PayloadTooLargeError()
      }

      chunks.push(value)
    }
  } finally {
    reader.releaseLock()
  }

  const body = new Uint8Array(totalBytes)
  let offset = 0

  for (const chunk of chunks) {
    body.set(chunk, offset)
    offset += chunk.byteLength
  }

  return new TextDecoder("utf-8", { fatal: true }).decode(body)
}

function isCrossSiteRequest(req: Request) {
  if (req.headers.get("sec-fetch-site") === "cross-site") {
    return true
  }

  const origin = req.headers.get("origin")

  if (!origin) {
    return false
  }

  try {
    const forwardedHost = req.headers
      .get("x-forwarded-host")
      ?.split(",", 1)[0]
      ?.trim()
    const requestHost =
      forwardedHost || req.headers.get("host") || new URL(req.url).host

    return new URL(origin).host !== requestHost
  } catch {
    return true
  }
}

function loggableError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
    }
  }

  return { name: "UnknownError" }
}

export async function POST(req: Request) {
  if (isCrossSiteRequest(req)) {
    return json(
      {
        success: false,
        code: "CROSS_SITE_REQUEST",
        error: "Cross-site requests are not allowed",
      },
      403,
    )
  }

  const contentType = req.headers
    .get("content-type")
    ?.split(";", 1)[0]
    ?.trim()
    .toLowerCase()

  if (contentType !== "application/json") {
    return json(
      {
        success: false,
        code: "UNSUPPORTED_MEDIA_TYPE",
        error: "Content-Type must be application/json",
      },
      415,
    )
  }

  const declaredLength = Number(req.headers.get("content-length") ?? 0)

  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return json(
      {
        success: false,
        code: "PAYLOAD_TOO_LARGE",
        error: "Request body is too large",
      },
      413,
    )
  }

  let payload: unknown
  let rawBody: string

  try {
    rawBody = await readLimitedBody(req)
  } catch (error) {
    if (error instanceof PayloadTooLargeError) {
      return json(
        {
          success: false,
          code: "PAYLOAD_TOO_LARGE",
          error: "Request body is too large",
        },
        413,
      )
    }

    console.error("[lead-api] Failed to read request body", loggableError(error))
    return json(
      {
        success: false,
        code: "INVALID_REQUEST_BODY",
        error: "Unable to read request body",
      },
      400,
    )
  }

  try {
    payload = JSON.parse(rawBody)
  } catch {
    return json(
      {
        success: false,
        code: "INVALID_JSON",
        error: "Request body must contain valid JSON",
      },
      400,
    )
  }

  const parsed = leadSchema.safeParse(payload)

  if (!parsed.success) {
    return json(
      {
        success: false,
        code: "INVALID_PAYLOAD",
        error: "Please check the submitted fields",
        fields: parsed.error.flatten().fieldErrors,
      },
      400,
    )
  }

  const { name, phone, message, website } = parsed.data

  // Silently accept honeypot submissions so bots do not learn how they failed.
  if (website) {
    return json({ success: true })
  }

  const botToken = process.env.BOT_TOKEN?.trim()
  const chatId = process.env.CHAT_ID?.trim()

  if (!botToken || !chatId) {
    console.error("[lead-api] BOT_TOKEN or CHAT_ID is not configured")
    return json(
      {
        success: false,
        code: "SERVICE_NOT_CONFIGURED",
        error: "Lead delivery service is not configured",
      },
      503,
    )
  }

  const text = [
    "📩 Yangi so'rov:",
    "",
    `👤 Ism: ${name || "Ko'rsatilmagan"}`,
    `📞 Telefon: ${phone}`,
    `💬 Xabar: ${message || "Ko'rsatilmagan"}`,
  ].join("\n")

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(TELEGRAM_TIMEOUT_MS),
      },
    )

    const telegramResult = (await response
      .json()
      .catch(() => null)) as TelegramResponse | null

    if (!response.ok || telegramResult?.ok !== true) {
      console.error("[lead-api] Telegram delivery failed", {
        status: response.status,
        description: telegramResult?.description ?? "Unknown Telegram error",
      })
      return json(
        {
          success: false,
          code: "DELIVERY_FAILED",
          error: "Unable to deliver the lead right now",
        },
        502,
      )
    }

    return json({ success: true })
  } catch (error) {
    const isTimeout =
      error instanceof DOMException &&
      (error.name === "TimeoutError" || error.name === "AbortError")

    console.error(
      isTimeout
        ? "[lead-api] Telegram request timed out"
        : "[lead-api] Unexpected delivery error",
      loggableError(error),
    )

    return json(
      {
        success: false,
        code: isTimeout ? "DELIVERY_TIMEOUT" : "INTERNAL_ERROR",
        error: isTimeout
          ? "Lead delivery timed out"
          : "Unable to process the lead right now",
      },
      isTimeout ? 504 : 500,
    )
  }
}
