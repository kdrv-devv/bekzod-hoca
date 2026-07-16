import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Bekzod Hoca — Turk tili kurslari",
    short_name: "Bekzod Hoca",
    description:
      "Bekzod Qosimov bilan Farg'onada va onlayn turk tili kurslari.",
    lang: "uz",
    dir: "ltr",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fbf7ef",
    theme_color: "#b42332",
    categories: ["education"],
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
