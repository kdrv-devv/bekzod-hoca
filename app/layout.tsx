import type React from "react"
import type { Metadata, Viewport } from "next"
import { Onest, Unbounded } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const siteUrl = new URL("https://bekzodhoca.uz")
const title = "Bekzod Hoca — Farg'onada turk tili kurslari"
const description =
  "TYS sertifikatiga ega, CEFR C1 darajali Bekzod Qosimov bilan Farg'onada yoki onlayn turk tilini o'rganing. A1-C1 darajalari uchun amaliy kurslar."

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-body",
})

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: "%s | Bekzod Hoca",
  },
  description,
  applicationName: "Bekzod Hoca",
  authors: [{ name: "Bekzod Qosimov", url: siteUrl }],
  creator: "Bekzod Qosimov",
  publisher: "Bekzod Hoca",
  category: "education",
  keywords: [
    "turk tili",
    "turk tili kurslari",
    "turk tili o'qituvchisi",
    "Farg'onada turk tili",
    "onlayn turk tili",
    "TYS",
    "CEFR C1",
    "курсы турецкого языка",
    "Turkish language lessons",
    "Bekzod Hoca",
    "Bekzod Qosimov",
  ],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: "Bekzod Hoca",
    locale: "uz_UZ",
    alternateLocale: ["ru_RU", "en_US"],
    countryName: "Uzbekistan",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  appleWebApp: {
    capable: true,
    title: "Bekzod Hoca",
    statusBarStyle: "default",
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#b42332" },
    { media: "(prefers-color-scheme: dark)", color: "#171210" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" dir="ltr">
      <body
        className={`${onest.variable} ${unbounded.variable} ${onest.className} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
