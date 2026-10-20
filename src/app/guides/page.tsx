import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/content/guides";

export const metadata: Metadata = {
  title: "Game Guides & Strategy Tips",
  description:
    "Free strategy guides for browser classics: how to beat 2048, Tetris tips, Snake high scores, Minesweeper patterns, Wordle starter words and more.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Game Guides &amp; Strategy Tips</h1>
        <p className="text-slate-500 mt-2 max-w-2xl">
          Learn the strategies behind classic browser games — from the 2048 corner technique to
          Minesweeper probability. Every guide pairs with a free playable version, no download.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="group rounded-xl bg-white border border-slate-200 p-5 hover:border-violet-300 hover:shadow-sm transition"
          >
            <h2 className="font-bold text-slate-900 group-hover:text-violet-700">{g.title}</h2>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-3">{g.description}</p>
            {g.gameSlug && (
              <span className="inline-block mt-3 text-xs font-semibold text-violet-700 bg-violet-50 rounded-full px-2.5 py-1">
                Play the game →
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
