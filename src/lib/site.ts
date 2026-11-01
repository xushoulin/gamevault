// Custom production domain (bound in Vercel). Used for all production URLs
// (canonical, sitemap, JSON-LD) regardless of the deployment URL.
export const PRODUCTION_SITE_URL = "https://gamevault.shoulin.shop";

// Resolve the public site URL with a fallback chain:
// 1. PRODUCTION_SITE_URL when running a production build on Vercel
// 2. SITE_URL (manually configured, server-only)
// 3. VERCEL_PROJECT_PRODUCTION_URL (auto-injected by Vercel in production builds)
// 4. VERCEL_URL (auto-injected per-deployment, e.g. project-git-branch.vercel.app)
// 5. localhost fallback for local dev
export function getSiteUrl(): string {
  if (process.env.VERCEL_ENV === "production") {
    return PRODUCTION_SITE_URL;
  }
  const raw = (
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000"
  ).replace(/\/+$/, "");

  if (raw.startsWith("https://")) return raw;
  if (raw.startsWith("http://")) {
    // force https everywhere except local dev
    return raw.startsWith("http://localhost") ? raw : raw.replace("http://", "https://");
  }
  return `https://${raw}`;
}
