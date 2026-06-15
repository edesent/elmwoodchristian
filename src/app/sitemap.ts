import type { MetadataRoute } from "next";

const SITE_URL = "https://www.elmwoodchristianacademy.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/academics`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/admissions`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
