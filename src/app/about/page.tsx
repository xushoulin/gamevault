import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About GameVault — who we are and why we built a free browser games portal.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <article className="max-w-3xl mx-auto rounded-xl bg-white border border-slate-200 p-6 sm:p-8 space-y-5 text-slate-600 leading-relaxed">
      <h1 className="text-2xl font-extrabold text-slate-900">About GameVault</h1>
      <p>
        GameVault is a free online games portal. Our mission is simple: instant, no-frills fun.
        Every game on this site loads directly in your browser — no downloads, no installs, no
        forced signups.
      </p>
      <h2 className="text-lg font-bold text-slate-900">What you&apos;ll find here</h2>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>Timeless puzzle classics like 2048, Tetris and Minesweeper</li>
        <li>Arcade favorites such as Snake, Brick Breaker and Flappy Wings</li>
        <li>Word and brain games, memory trainers and relaxing casual titles</li>
        <li>Racing and action games from independent HTML5 developers</li>
      </ul>
      <h2 className="text-lg font-bold text-slate-900">Our content sources</h2>
      <p>
        Classic games on GameVault are implemented by us and served directly from our own servers
        for maximum speed and reliability. Additional titles are provided through official
        partnerships with HTML5 game distribution platforms (such as GameMonetize) under their
        publisher embedding programs — all games are licensed for free public play.
      </p>
      <h2 className="text-lg font-bold text-slate-900">How we stay free</h2>
      <p>
        The site is funded by non-intrusive display advertising (Google AdSense). We deliberately
        keep ad placements limited and clearly separated from gameplay so your experience stays
        smooth. See our Privacy Policy for details on cookies and ad personalization.
      </p>
    </article>
  );
}
