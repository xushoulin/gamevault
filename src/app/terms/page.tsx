import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — GameVault",
  description:
    "Terms of Service for GameVault: acceptable use, third-party game content, intellectual property, disclaimers and limitation of liability.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-700">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-800 font-medium">Terms of Service</span>
      </nav>

      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Terms of Service</h1>
        <p className="text-slate-500 mt-2">Last updated: October 30, 2026</p>
      </header>

      <section className="rounded-xl bg-white border border-slate-200 p-6 space-y-5 text-slate-600 leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-1.5">1. Acceptance of terms</h2>
          <p>
            By accessing or using GameVault (&quot;the Site&quot;), you agree to these Terms of Service.
            If you do not agree, please do not use the Site. We may update these terms from time to
            time; continued use of the Site constitutes acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-1.5">2. What GameVault is</h2>
          <p>
            GameVault is a free portal for browser-based games. The Site does not require an
            account, does not charge fees and does not host downloadable game files. Games are
            played directly in your web browser.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-1.5">3. Third-party game content</h2>
          <p>
            Games on the Site are developed and owned by third parties and are embedded via
            official distribution platforms (including GameMonetize and developers&apos; own embed
            feeds) under those platforms&apos; publisher terms. GameVault does not claim ownership of
            any embedded game. All trademarks, characters and game assets belong to their
            respective owners. If you are a rights holder and believe content on the Site
            infringes your rights, contact us via the{" "}
            <Link href="/contact" className="text-violet-700 hover:underline">Contact page</Link> and
            we will remove the content promptly pending review.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-1.5">4. Acceptable use</h2>
          <p>
            You agree not to: interfere with the Site&apos;s operation; scrape or republish the
            Site&apos;s original content (guides, descriptions, editorial material) without
            permission; use the Site for any unlawful purpose; or attempt to bypass any technical
            or access restrictions.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-1.5">5. Advertisements</h2>
          <p>
            The Site is supported by advertising, including ads served by Google AdSense and ads
            embedded by third-party game platforms. Ad content is provided by third parties; we
            do not endorse and are not responsible for advertised products or services. See our{" "}
            <Link href="/privacy" className="text-violet-700 hover:underline">Privacy Policy</Link>{" "}
            for details on cookies and personalized advertising.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-1.5">6. No warranty</h2>
          <p>
            The Site and all content are provided &quot;as is&quot; and &quot;as available&quot; without
            warranties of any kind, express or implied, including availability, accuracy or
            fitness for a particular purpose. Games may change or be removed at any time by
            their developers or platforms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-1.5">7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, GameVault and its operator shall not be liable
            for any indirect, incidental or consequential damages arising from your use of the
            Site or linked third-party content.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-1.5">8. Contact</h2>
          <p>
            Questions about these terms? Reach us at the{" "}
            <Link href="/contact" className="text-violet-700 hover:underline">Contact page</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
