import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local sandbox-friendly build dir (Vercel keeps its own default; this only affects local builds)
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "img.gamemonetize.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/games/:path*",
        headers: [
          // Allow our own origin to iframe local games (default same-origin is fine,
          // but be explicit so previews/CDN variants work)
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
