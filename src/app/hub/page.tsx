import type { Metadata } from "next";
import Link from "next/link";
import { hubs } from "@/content/hubs";

export const metadata: Metadata = {
  title: "Game Hubs — Curated Collections & Strategy Guides",
  description:
    "Browse GameVault's game hubs: block puzzle & logic, arcade & action, racing & driving, and casual games — each with curated games and expert strategy guides.",
  alternates: { canonical: "/hub" },
};

export default function HubIndexPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Game Hubs</h1>
        <p className="text-slate-500 mt-2">
          Curated collections that pair every game with the strategy guide written for it.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {hubs.map((h) => (
          <Link
            key={h.slug}
            href={`/hub/${h.slug}`}
            className="group block rounded-xl bg-white border border-slate-200 p-6 hover:border-violet-400 hover:shadow-lg transition-all"
          >
            <h2 className="text-lg font-bold text-slate-900 group-hover:text-violet-700">
              {h.title}
            </h2>
            <p className="text-sm text-slate-500 mt-2 leading-relaxed">{h.tagline}</p>
            <p className="text-xs text-slate-400 mt-3">
              {h.guideSlugs.length} guides · {h.gameSlugs.length} games
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
