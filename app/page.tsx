import { LandingPage } from "@/components/landing-page"

export const dynamic = "force-static"
export const revalidate = false

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://bekzodhoca.uz/#website",
      url: "https://bekzodhoca.uz/",
      name: "Bekzod Hoca",
      inLanguage: ["uz", "ru", "en"],
    },
    {
      "@type": "Person",
      "@id": "https://bekzodhoca.uz/#bekzod-qosimov",
      name: "Bekzod Qosimov",
      alternateName: "Bekzod Hoca",
      url: "https://bekzodhoca.uz/",
      image: "https://bekzodhoca.uz/ustoz2.png",
      jobTitle: "Turk tili o‘qituvchisi",
      description:
        "TYS sertifikatiga va CEFR C1 darajasiga ega, 7 yildan ortiq onlayn va oflayn ta’lim tajribali turk tili o‘qituvchisi.",
      knowsLanguage: ["uz", "tr", "ru", "en"],
      sameAs: [
        "https://www.instagram.com/bekzod_hoca/",
        "https://t.me/Turktili_Fergana",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "TYS — Türkçe Yeterlik Sınavı",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "language proficiency",
          name: "CEFR C1",
        },
      ],
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://bekzodhoca.uz/#school",
      name: "Bekzod Hoca turk tili kurslari",
      url: "https://bekzodhoca.uz/",
      logo: "https://bekzodhoca.uz/icon",
      image: "https://bekzodhoca.uz/ustoz2.png",
      description:
        "Farg‘onada va onlayn A1–C1 darajalari hamda TYS imtihoni uchun amaliy turk tili kurslari.",
      founder: {
        "@id": "https://bekzodhoca.uz/#bekzod-qosimov",
      },
      employee: {
        "@id": "https://bekzodhoca.uz/#bekzod-qosimov",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Farg‘ona",
        addressRegion: "Farg‘ona viloyati",
        addressCountry: "UZ",
        streetAddress:
          "Tojmahal mehmonxonasi ro‘parasi, NAJOT ILMDA o‘quv markazi",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.38590010165583,
        longitude: 71.78655515844427,
      },
      hasMap:
        "https://www.google.com/maps/search/?api=1&query=40.38590010165583%2C71.78655515844427",
      sameAs: [
        "https://www.instagram.com/bekzod_hoca/",
        "https://t.me/Turktili_Fergana",
      ],
      availableLanguage: ["uz", "ru", "en", "tr"],
      areaServed: [
        {
          "@type": "City",
          name: "Farg‘ona",
        },
        {
          "@type": "Country",
          name: "Uzbekistan",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Turk tili kurslari",
        itemListElement: [
          {
            "@type": "Course",
            name: "A1–A2 turk tili kursi",
            description:
              "Talaffuz, kundalik lug‘at va asosiy grammatika orqali turk tilini noldan o‘rganish.",
            provider: {
              "@id": "https://bekzodhoca.uz/#school",
            },
            inLanguage: "uz",
            educationalLevel: "Beginner",
            timeRequired: "P1M",
          },
          {
            "@type": "Course",
            name: "B1–B2 turk tili kursi",
            description:
              "Tabiiy iboralar, murakkabroq grammatika va faol suhbat orqali erkin muloqotni rivojlantirish.",
            provider: {
              "@id": "https://bekzodhoca.uz/#school",
            },
            inLanguage: "uz",
            educationalLevel: "Intermediate",
            timeRequired: "P2M",
          },
          {
            "@type": "Course",
            name: "C1 va TYS tayyorlov kursi",
            description:
              "Akademik yozuv, murakkab matnlar va TYS imtihon formatiga maqsadli tayyorgarlik.",
            provider: {
              "@id": "https://bekzodhoca.uz/#school",
            },
            inLanguage: "uz",
            educationalLevel: "Advanced",
            timeRequired: "P3M",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://bekzodhoca.uz/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Turk tilini umuman bilmasam ham boshlay olamanmi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ha. A1 bosqichi aynan noldan boshlovchilar uchun. Darslar talaffuz va eng kerakli iboralardan boshlanib, grammatika bosqichma-bosqich qo‘shiladi.",
          },
        },
        {
          "@type": "Question",
          name: "Darslar qayerda va qanday formatda o‘tadi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oflayn darslar Farg‘onadagi NAJOT ILMDA o‘quv markazida, onlayn darslar esa Zoom orqali o‘tadi.",
          },
        },
        {
          "@type": "Question",
          name: "TYS imtihoniga tayyorlaysizmi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ha. Daraja aniqlangach, TYS formati, akademik lug‘at, yozuv, tinglab tushunish va suhbat bo‘yicha alohida reja tuziladi.",
          },
        },
        {
          "@type": "Question",
          name: "Qaysi bosqich menga mosligini qanday bilaman?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Qisqa suhbat va daraja aniqlash orqali boshlash nuqtasi belgilanadi, keyin mos guruh yoki individual yo‘nalish tavsiya qilinadi.",
          },
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage />
    </>
  )
}
