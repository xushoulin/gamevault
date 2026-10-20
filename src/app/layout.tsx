import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
// Publisher ID is public by design (it appears in every page's ad script),
// but it is only READ server-side here, so a plain env name is enough.
// Priority: ADSENSE_CLIENT > NEXT_PUBLIC_ADSENSE_CLIENT > hardcoded default.
const adsenseClient =
  process.env.ADSENSE_CLIENT ??
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ??
  "ca-pub-2622415797490761";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GameVault — Free Online Games, Play Instantly, No Download",
    template: "%s | GameVault",
  },
  description:
    "Play 100% free online games at GameVault: 2048, Tetris, Snake, Minesweeper, word puzzles, racing and more. Instant play in your browser — no download, no signup.",
  keywords: [
    "free online games",
    "play games online free",
    "browser games no download",
    "2048 online",
    "tetris online free",
    "snake game",
    "minesweeper online",
  ],
  openGraph: {
    type: "website",
    siteName: "GameVault",
    url: siteUrl,
  },
  robots: { index: true, follow: true },
};

const navCategories = [
  { slug: "puzzle", name: "Puzzle" },
  { slug: "arcade", name: "Arcade" },
  { slug: "action", name: "Action" },
  { slug: "casual", name: "Casual" },
  { slug: "sports", name: "Sports & Racing" },
  { slug: "brain", name: "Brain & Word" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* AdSense loader rendered server-side so it appears in raw HTML (required for AdSense site association & review) */}
        {adsenseClient && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-violet-700 shrink-0">
              Game<span className="text-slate-900">Vault</span>
            </Link>
            <nav aria-label="Game categories" className="flex items-center gap-1 overflow-x-auto">
              {navCategories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className="text-sm text-slate-600 hover:text-violet-700 hover:bg-violet-50 px-2.5 py-1.5 rounded-md whitespace-nowrap"
                >
                  {c.name}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">{children}</main>

        <footer className="bg-white border-t border-slate-200 mt-10">
          <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} GameVault — Free online games. Play instantly, no download.</p>
            <nav aria-label="Footer" className="flex gap-4">
              <Link href="/guides" className="hover:text-violet-700">Guides</Link>
              <Link href="/about" className="hover:text-violet-700">About</Link>
              <Link href="/privacy" className="hover:text-violet-700">Privacy Policy</Link>
              <Link href="/sitemap.xml" className="hover:text-violet-700">Sitemap</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
