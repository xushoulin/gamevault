import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug, getRelatedGuides } from "@/content/guides";
import { getSiteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };
  return {
    title: guide.title,
    description: guide.description.slice(0, 155),
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description.slice(0, 155),
      type: "article",
      publishedTime: guide.date,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = getRelatedGuides(guide.slug, 4);
  const siteUrl = getSiteUrl();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    dateModified: guide.date,
    author: { "@type": "Organization", name: "GameVault" },
    publisher: { "@type": "Organization", name: "GameVault" },
    mainEntityOfPage: `${siteUrl}/guides/${guide.slug}`,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "/guides" },
      { "@type": "ListItem", position: 3, name: guide.title, item: `/guides/${guide.slug}` },
    ],
  };

  return (
    <div className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-700">Home</Link>
        <span className="mx-1.5">/</span>
        <Link href="/guides" className="hover:text-violet-700">Guides</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-800 font-medium">{guide.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        <article className="flex-1 min-w-0 rounded-xl bg-white border border-slate-200 p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">{guide.title}</h1>
          <p className="text-slate-500 mt-2">Updated {guide.date} · GameVault Guides</p>

          <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
            {guide.blocks.map((b, i) => {
              if (b.type === "h2") {
                return (
                  <h2 key={i} className="text-xl font-bold text-slate-900 pt-2">{b.text}</h2>
                );
              }
              if (b.type === "p") {
                return <p key={i}>{b.text}</p>;
              }
              if (b.type === "ul") {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-1.5">
                    {b.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                );
              }
              return (
                <ol key={i} className="list-decimal pl-6 space-y-1.5">
                  {b.items.map((item, j) => <li key={j}>{item}</li>)}
                </ol>
              );
            })}
          </div>

          {guide.gameSlug && (
            <div className="mt-8 rounded-lg bg-violet-50 border border-violet-200 p-5 text-center">
              <p className="font-bold text-slate-900">Ready to practice?</p>
              <Link
                href={`/game/${guide.gameSlug}`}
                className="inline-block mt-2 px-5 py-2.5 rounded-lg bg-violet-600 text-white font-semibold hover:bg-violet-700 transition"
              >
                ▶ Play free now — no download
              </Link>
            </div>
          )}
        </article>

        <aside className="lg:w-[300px] shrink-0 space-y-5">
          {guide.gameSlug && (
            <section className="rounded-xl bg-white border border-slate-200 p-5">
              <h2 className="font-bold mb-2">Play the Game</h2>
              <Link
                href={`/game/${guide.gameSlug}`}
                className="block text-violet-700 font-semibold hover:underline"
              >
                {guide.gameSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
              </Link>
            </section>
          )}
          <section className="rounded-xl bg-white border border-slate-200 p-5">
            <h2 className="font-bold mb-3">More Guides</h2>
            <ul className="space-y-2.5">
              {related.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="text-sm text-slate-600 hover:text-violet-700 leading-snug">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
