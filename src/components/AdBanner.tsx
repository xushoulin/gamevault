"use client";

import { useEffect } from "react";

type AdFormat = "leaderboard" | "sidebar" | "inline";

const SIZES: Record<AdFormat, { className: string; label: string; minHeight: number }> = {
  leaderboard: { className: "w-full", label: "728×90 / Responsive Banner", minHeight: 90 },
  sidebar: { className: "w-[300px] max-w-full", label: "300×250 Medium Rectangle", minHeight: 250 },
  inline: { className: "w-full", label: "In-Content Responsive", minHeight: 100 },
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * AdSense ad slot with reserved space (no CLS).
 * Before the site is approved / ad unit IDs are configured, shows a neutral placeholder.
 * To go live: set NEXT_PUBLIC_ADSENSE_CLIENT and NEXT_PUBLIC_ADSENSE_ENABLED=1,
 * and fill `slot` with the real ad unit ID from the AdSense console.
 */
export default function AdBanner({
  format = "leaderboard",
  slot = "",
  className = "",
}: {
  format?: AdFormat;
  slot?: string;
  className?: string;
}) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const enabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "1" && !!client;
  const size = SIZES[format];

  useEffect(() => {
    if (enabled && slot) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        /* ignore */
      }
    }
  }, [enabled, slot]);

  return (
    <div
      className={`${size.className} ${className}`}
      style={{ minHeight: size.minHeight }}
      aria-label="Advertisement"
    >
      {enabled && slot ? (
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format === "sidebar" ? "rectangle" : "auto"}
          data-full-width-responsive="true"
        />
      ) : (
        <div
          className="w-full h-full rounded-lg border border-dashed border-slate-300 bg-slate-50 flex items-center justify-center text-[11px] text-slate-400 uppercase tracking-wider"
          style={{ minHeight: size.minHeight }}
        >
          Ad space · {size.label}
        </div>
      )}
    </div>
  );
}
