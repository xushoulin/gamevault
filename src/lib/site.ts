// Resolve the public site URL with a fallback chain:
// 1. SITE_URL (manually configured, server-only)
// 2. VERCEL_PROJECT_PRODUCTION_URL (auto-injected by Vercel in production builds)
// 3. VERCEL_URL (auto-injected per-deployment, e.g. project-git-branch.vercel.app)
// 4. localhost fallback for local dev
export function getSiteUrl(): string {
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
