// AdSense ads.txt — required for monetization. pub-2622415797490761
export const dynamic = "force-static";

export function GET() {
  return new Response("google.com, pub-2622415797490761, DIRECT, f08c47fec0942fa0\n", {
    headers: { "Content-Type": "text/plain" },
  });
}
