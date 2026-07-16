"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import { resources } from "@/lib/translations"

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: "uz",
    fallbackLng: "uz",
    supportedLngs: ["uz", "ru", "en"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  })
}

export default i18n
