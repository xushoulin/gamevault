"use client";

import Script from "next/script";

/**
 * Loads the AdSense library only when ads are enabled via env,
 * so the site stays fast before approval. Set:
 *   NEXT_PUBLIC_ADSENSE_ENABLED=1
 *   NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-2622415797490761
 */
export default function AdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "1" && !!client;
  if (!enabled || !client) return null;
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
