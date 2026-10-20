"use client";

import Script from "next/script";

/**
 * AdSense library loader.
 * - Loads whenever NEXT_PUBLIC_ADSENSE_CLIENT is set (required for the
 *   AdSense site-review crawler to detect the code; the bare loader
 *   renders no ads by itself).
 * - Actual <ins> ad units only render when NEXT_PUBLIC_ADSENSE_ENABLED=1
 *   (set after approval, see AdBanner).
 */
export default function AdSenseScript() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  if (!client) return null;
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
