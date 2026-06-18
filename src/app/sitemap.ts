import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";

const SITE_URL = "https://www.elmwoodchristianacademy.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths: [string, number][] = [
    ["", 1.0],
    ["/about", 0.9],
    ["/about/beliefs", 0.6],
    ["/about/why-christian-education", 0.7],
    ["/academics", 0.9],
    ["/academics/student-conventions", 0.6],
    ["/admissions", 0.9],
    ["/admissions/apply", 0.8],
    ["/schedule-a-tour", 0.8],
    ["/athletics", 0.7],
    ["/parents", 0.6],
    ["/parents/dress-code", 0.5],
    ["/support", 0.5],
    ["/faq", 0.7],
    ["/news", 0.7],
  ];

  return [
    ...staticPaths.map(([path, priority]) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...ARTICLES.map((a) => ({
      url: `${SITE_URL}/news/${a.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
