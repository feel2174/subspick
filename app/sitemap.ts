import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1.0, changeFrequency: "daily" as const },
    { path: "/youtube-premium", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/netflix", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/chatgpt-plus", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/calculator", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/scam-check", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date("2026-09-05"),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
