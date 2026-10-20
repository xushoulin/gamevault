import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "GameVault privacy policy: cookies, Google AdSense advertising and your data.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <article className="max-w-3xl mx-auto rounded-xl bg-white border border-slate-200 p-6 sm:p-8 space-y-5 text-slate-600 leading-relaxed">
      <h1 className="text-2xl font-extrabold text-slate-900">Privacy Policy</h1>
      <p>Last updated: October 20, 2026</p>

      <h2 className="text-lg font-bold text-slate-900">Overview</h2>
      <p>
        GameVault (&quot;we&quot;, &quot;our&quot;) operates this free online games website. We respect your privacy.
        This page explains what data is collected when you visit and how it is used.
      </p>

      <h2 className="text-lg font-bold text-slate-900">Cookies</h2>
      <p>
        We use cookies and similar technologies to keep the site working, remember your preferences
        (such as high scores saved locally in your browser) and to support advertising.
      </p>

      <h2 className="text-lg font-bold text-slate-900">Google AdSense &amp; Advertising</h2>
      <p>
        Third-party vendors, including Google, use cookies to serve ads based on your prior visits to
        this and other websites. Google&apos;s use of advertising cookies enables it and its partners to
        serve ads based on your visits to our site and/or other sites on the Internet.
      </p>
      <p>
        You may opt out of personalized advertising by visiting{" "}
        <a
          href="https://www.google.com/settings/ads"
          className="text-violet-700 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google Ads Settings
        </a>
        , or opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
        <a
          href="https://www.aboutads.info"
          className="text-violet-700 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          aboutads.info
        </a>
        .
      </p>
      <p>
        Users in the EEA, UK and Switzerland: we display a consent message that lets you choose
        whether personalized ads may be used, in accordance with Google&apos;s EU user consent policy.
      </p>

      <h2 className="text-lg font-bold text-slate-900">Local Data</h2>
      <p>
        Game high scores and settings are stored locally in your own browser (localStorage). They are
        never uploaded to our servers unless you explicitly choose to share them.
      </p>

      <h2 className="text-lg font-bold text-slate-900">Embedded Games</h2>
      <p>
        Some games are provided by third-party developers and are embedded into our pages. When you
        play these games, the game provider may collect technical data in accordance with their own
        privacy policies. We only work with reputable game distribution partners.
      </p>

      <h2 className="text-lg font-bold text-slate-900">Contact</h2>
      <p>If you have questions about this policy, contact us via the contact details on our About page.</p>
    </article>
  );
}
