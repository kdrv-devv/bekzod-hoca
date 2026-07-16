import type { MetadataRoute } from "next"

const siteUrl = "https://bekzodhoca.uz"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
