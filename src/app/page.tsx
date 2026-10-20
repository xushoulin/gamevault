import Link from "next/link";
import GameCard from "@/components/GameCard";
import AdBanner from "@/components/AdBanner";
import { getCategories, getGamesByCategory, getPopularGames, getAllGames } from "@/lib/queries";

export const revalidate = 600; // ISR: refresh every 10 min

export default async function Home() {
  const [categories, popular, all] = await Promise.all([
    getCategories(),
    getPopularGames(8),
    getAllGames(),
  ]);

  const sections = await Promise.all(
    categories.map(async (c) => ({ category: c, games: await getGamesByCategory(c.slug) }))
  );

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white p-8 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
          Free Online Games — Play Instantly, No Download
        </h1>
        <p className="mt-3 text-white/85 max-w-2xl">
          {all.length} hand-picked browser games: puzzle, arcade, action, word and racing classics
          like 2048, Tetris, Snake and Minesweeper. Click a game and start playing right now —
          no download, no signup, works on desktop and mobile.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="bg-white/15 hover:bg-white/25 text-white text-sm px-3.5 py-1.5 rounded-full transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </section>

      <AdBanner format="leaderboard" className="mx-auto max-w-3xl" />

      {/* Popular */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔥 Most Popular Games</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {popular.map((g, i) => (
            <GameCard key={g.slug} game={g} priority={i < 4} />
          ))}
        </div>
      </section>

      {/* Category sections */}
      {sections.map(({ category, games }) =>
        games.length === 0 ? null : (
          <section key={category.slug}>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <Link href={`/category/${category.slug}`} className="text-sm text-violet-700 hover:underline">
                View all →
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {games.slice(0, 8).map((g) => (
                <GameCard key={g.slug} game={g} />
              ))}
            </div>
          </section>
        )
      )}

      {/* SEO text block */}
      <section className="rounded-xl bg-white border border-slate-200 p-6 text-slate-600 leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Play Free Browser Games Online</h2>
        <p>
          GameVault is a free online games portal where every title runs directly in your browser.
          Whether you want to <Link href="/game/2048" className="text-violet-700 hover:underline">play 2048 online</Link>,
          enjoy <Link href="/game/tetris" className="text-violet-700 hover:underline">Tetris for free</Link>, try your
          luck in <Link href="/game/minesweeper" className="text-violet-700 hover:underline">Minesweeper</Link>, or
          challenge your vocabulary with{" "}
          <Link href="/game/word-guess" className="text-violet-700 hover:underline">Word Guess</Link>, there is
          something here for every mood. All games are optimized for desktop and mobile browsers, load in
          seconds and require absolutely no download or account. New games are added regularly across our{" "}
          <Link href="/category/puzzle" className="text-violet-700 hover:underline">puzzle</Link>,{" "}
          <Link href="/category/arcade" className="text-violet-700 hover:underline">arcade</Link> and{" "}
          <Link href="/category/action" className="text-violet-700 hover:underline">action</Link> categories.
        </p>
      </section>
    </div>
  );
}
