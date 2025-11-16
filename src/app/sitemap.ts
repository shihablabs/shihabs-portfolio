import { siteConfig } from "@/data/site-data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastmod = new Date().toISOString();
  const urls: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/projects`,
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
  return urls;
}
