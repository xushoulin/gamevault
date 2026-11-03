import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GameCard from "@/components/GameCard";
import { hubs, getHubBySlug, getGuidesForHub } from "@/content/hubs";
import { getGamesBySlugs } from "@/lib/queries";
import { getSiteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return hubs.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHubBySlug(slug);
  if (!hub) return { title: "Hub not found" };
  return {
    title: hub.metaTitle,
    description: hub.description,
    alternates: { canonical: `/hub/${hub.slug}` },
    openGraph: {
      title: hub.metaTitle,
      description: hub.description,
      type: "website",
    },
  };
}

export default async function HubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const hub = getHubBySlug(slug);
  if (!hub) notFound();

  const [games, hubGuides] = await Promise.all([
    getGamesBySlugs(hub.gameSlugs),
    Promise.resolve(getGuidesForHub(hub)),
  ]);
  const siteUrl = getSiteUrl();

  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hub.title,
    description: hub.description,
    url: `${siteUrl}/hub/${hub.slug}`,
    hasPart: [
      ...games.map((g) => ({
        "@type": "VideoGame",
        name: g.title,
        url: `${siteUrl}/game/${g.slug}`,
        genre: g.category_name,
      })),
      ...hubGuides.map((g) => ({
        "@type": "Article",
        headline: g.title,
        url: `${siteUrl}/guides/${g.slug}`,
      })),
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Game Hubs", item: `${siteUrl}/hub` },
      { "@type": "ListItem", position: 3, name: hub.title, item: `${siteUrl}/hub/${hub.slug}` },
    ],
  };

  return (
    <div className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-700">Home</Link>
        <span className="mx-1.5">/</span>
        <Link href="/hub" className="hover:text-violet-700">Game Hubs</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-800 font-medium">{hub.title}</span>
      </nav>

      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">{hub.title}</h1>
        <p className="text-slate-500 mt-2">{hub.tagline}</p>
      </header>

      <section className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 space-y-4 text-slate-700 leading-relaxed">
        {hub.intro.map((p, i) => <p key={i}>{p}</p>)}
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Strategy Guides in this Hub</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {hubGuides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group block rounded-xl bg-white border border-slate-200 p-4 hover:border-violet-400 hover:shadow transition-all"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-violet-700 leading-snug">
                {g.title}
              </h3>
              <p className="text-sm text-slate-500 mt-1 line-clamp-2">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Play the Games — Instant, No Download</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {games.map((g, i) => (
            <GameCard key={g.slug} game={g} priority={i < 4} />
          ))}
        </div>
      </section>

      <nav aria-label="Other hubs" className="rounded-xl bg-slate-50 border border-slate-200 p-5">
        <h2 className="font-bold mb-3">Explore Other Hubs</h2>
        <div className="flex flex-wrap gap-2">
          {hubs
            .filter((h) => h.slug !== hub.slug)
            .map((h) => (
              <Link
                key={h.slug}
                href={`/hub/${h.slug}`}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:border-violet-400 hover:text-violet-700 transition"
              >
                {h.title}
              </Link>
            ))}
        </div>
      </nav>
    </div>
  );
}
