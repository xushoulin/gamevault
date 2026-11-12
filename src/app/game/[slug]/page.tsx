import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GameFrame from "@/components/GameFrame";
import GameCard from "@/components/GameCard";
import AdBanner from "@/components/AdBanner";
import { getGameBySlug, getRelatedGames, getAllGames } from "@/lib/queries";
import { getGuidesByGame } from "@/content/guides";
import { getGameEditorial } from "@/content/game-editorial";

export const revalidate = 600;

export async function generateStaticParams() {
  const games = await getAllGames();
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = await getGameBySlug(slug);
  if (!game) return { title: "Game not found" };
  return {
    title: `${game.title} — Play Free Online, No Download`,
    description: game.description.slice(0, 155),
    alternates: { canonical: `/game/${game.slug}` },
    // Games without original copy are playable but kept out of search indexes
    // to avoid thin/duplicate content (AdSense & SEO quality).
    ...(game.featured ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      title: `${game.title} — Play Free Online | GameVault`,
      description: game.description.slice(0, 155),
      images: [game.thumb],
    },
  };
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = await getGameBySlug(slug);
  if (!game) notFound();

  const related = await getRelatedGames(game.category_slug!, game.slug, 6);
  const editorial = getGameEditorial(game.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: game.title,
    description: game.description,
    url: `/game/${game.slug}`,
    image: game.thumb,
    genre: game.category_name,
    gamePlatform: ["Web Browser", "Desktop", "Mobile"],
    applicationCategory: "Game",
    operatingSystem: "Any (HTML5)",
    playMode: "SinglePlayer",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: game.category_name ?? "Games", item: `/category/${game.category_slug}` },
      { "@type": "ListItem", position: 3, name: game.title, item: `/game/${game.slug}` },
    ],
  };

  const faqLd =
    editorial?.faqs && editorial.faqs.length >= 2
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: editorial.faqs.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }
      : null;

  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-700">Home</Link>
        <span className="mx-1.5">/</span>
        <Link href={`/category/${game.category_slug}`} className="hover:text-violet-700">{game.category_name}</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-800 font-medium">{game.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main column */}
        <div className="flex-1 min-w-0 space-y-5">
          <header>
            <h1 className="text-2xl sm:text-3xl font-extrabold">{game.title} — Play Free Online</h1>
            <p className="text-sm text-slate-500 mt-1">
              {game.category_name} · Instant play · Works on desktop & mobile
            </p>
          </header>

          <GameFrame
            embedUrl={game.embed_url}
            thumb={game.thumb}
            title={game.title}
            width={game.width}
            height={game.height}
          />

          <AdBanner format="inline" />

          <section className="rounded-xl bg-white border border-slate-200 p-5">
            <h2 className="text-lg font-bold mb-2">About {game.title}</h2>
            <p className="text-slate-600 leading-relaxed">{game.description}</p>
            <h2 className="text-lg font-bold mt-4 mb-2">How to Play</h2>
            <p className="text-slate-600 leading-relaxed">{game.instructions}</p>
          </section>

          {editorial && (
            <section className="rounded-xl bg-white border border-slate-200 p-5">
              <h2 className="text-lg font-bold mb-3">{game.title} Tips &amp; Strategy</h2>
              {editorial.background && (
                <p className="text-slate-600 leading-relaxed mb-4">{editorial.background}</p>
              )}
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                {editorial.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>
          )}

          {editorial?.faqs && editorial.faqs.length >= 2 && (
            <section className="rounded-xl bg-white border border-slate-200 p-5">
              <h2 className="text-lg font-bold mb-3">{game.title} — FAQ</h2>
              <dl className="space-y-4 text-slate-600">
                {editorial.faqs.map(([q, a]) => (
                  <div key={q}>
                    <dt className="font-semibold text-slate-800">{q}</dt>
                    <dd className="mt-1">{a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:w-[300px] shrink-0 space-y-5">
          <AdBanner format="sidebar" className="mx-auto" />
          {getGuidesByGame(game.slug).length > 0 && (
            <section className="rounded-xl bg-white border border-slate-200 p-5">
              <h2 className="text-lg font-bold mb-2">{game.title} Strategy</h2>
              <ul className="space-y-2">
                {getGuidesByGame(game.slug).map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="text-sm text-violet-700 hover:underline font-medium">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          <section>
            <h2 className="text-lg font-bold mb-3">Related Games</h2>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
              {related.map((g) => (
                <GameCard key={g.slug} game={g} />
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
