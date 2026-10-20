import type { MetadataRoute } from "next";
import { getAllGames, getCategories } from "@/lib/queries";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [games, categories] = await Promise.all([getAllGames(), getCategories()]);

  return [
    { url: siteUrl, changeFrequency: "daily", priority: 1 },
    ...categories.map((c) => ({
      url: `${siteUrl}/category/${c.slug}`,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
    ...games.map((g) => ({
      url: `${siteUrl}/game/${g.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteUrl}/privacy`, changeFrequency: "monthly", priority: 0.3 },
  ];
}
