"use client";

import { useState } from "react";

export default function GameFrame({
  embedUrl,
  thumb,
  title,
  width,
  height,
}: {
  embedUrl: string;
  thumb: string;
  title: string;
  width: number;
  height: number;
}) {
  const [playing, setPlaying] = useState(false);
  const isRemote = thumb.startsWith("http");

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-700"
      style={{ aspectRatio: `${width} / ${height}`, maxHeight: "72vh" }}
    >
      {playing ? (
        <iframe
          src={embedUrl}
          title={`${title} - Play Free Online`}
          className="absolute inset-0 w-full h-full border-0"
          allow="fullscreen; autoplay; gamepad"
          scrolling="no"
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full group cursor-pointer"
          aria-label={`Play ${title} now`}
        >
          {isRemote ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumb} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumb} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
          )}
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30 group-hover:bg-black/20 transition-colors">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/95 shadow-xl group-hover:scale-110 transition-transform">
              <svg viewBox="0 0 24 24" className="w-7 h-7 ml-1 fill-violet-700" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-white font-bold text-lg drop-shadow">Play Now — Free</span>
            <span className="text-white/85 text-xs">Click to load the game</span>
          </span>
        </button>
      )}
    </div>
  );
}
