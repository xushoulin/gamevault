import type { MetadataRoute } from "next";
import { getFeaturedGames, getCategories } from "@/lib/queries";
import { guides } from "@/content/guides";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [games, categories] = await Promise.all([getFeaturedGames(), getCategories()]);

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
    { url: `${siteUrl}/guides`, changeFrequency: "weekly" as const, priority: 0.8 },
    ...guides.map((g) => ({
      url: `${siteUrl}/guides/${g.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteUrl}/terms`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${siteUrl}/privacy`, changeFrequency: "monthly", priority: 0.3 },
  ];
}
