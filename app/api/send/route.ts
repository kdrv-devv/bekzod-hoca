export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json()
    const text = `📩 Yangi so'rov:
  
👤 Ism: ${name}
📞 Telefon: ${phone || "Ko'rsatilmagan"}
💬 Xabar: ${message}`

    const response = await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID,
        text,
      }),
    })
    
    if (!response.ok) {
      throw new Error("Failed to send message to Telegram")
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error("Error sending message:", error)
    return Response.json({ success: false, error: "Failed to send message" }, { status: 500 })
  }
}
