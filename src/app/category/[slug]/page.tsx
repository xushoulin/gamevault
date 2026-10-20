import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GameCard from "@/components/GameCard";
import AdBanner from "@/components/AdBanner";
import { getCategoryBySlug, getGamesByCategory, getCategories } from "@/lib/queries";

export const revalidate = 600;

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = await getCategoryBySlug(slug);
  if (!cat) return { title: "Category not found" };
  return {
    title: `${cat.name} — Play Free Online, No Download`,
    description: cat.description.slice(0, 155),
    alternates: { canonical: `/category/${cat.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cat = await getCategoryBySlug(slug);
  if (!cat) notFound();
  const games = await getGamesByCategory(slug);

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-700">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-800 font-medium">{cat.name}</span>
      </nav>

      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">{cat.name} — Play Free Online</h1>
        <p className="text-slate-600 mt-2 max-w-3xl leading-relaxed">{cat.description}</p>
      </header>

      <AdBanner format="leaderboard" className="mx-auto max-w-3xl" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {games.map((g, i) => (
          <GameCard key={g.slug} game={g} priority={i < 4} />
        ))}
      </div>

      <AdBanner format="inline" className="mx-auto max-w-3xl" />
    </div>
  );
}
