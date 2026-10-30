import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — GameVault",
  description:
    "Get in touch with the GameVault team: questions, feedback, game submissions, copyright notices or advertising inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-violet-700">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-800 font-medium">Contact</span>
      </nav>

      <header>
        <h1 className="text-2xl sm:text-3xl font-extrabold">Contact Us</h1>
        <p className="text-slate-600 mt-2">
          Questions, feedback or business inquiries — we read everything.
        </p>
      </header>

      <section className="rounded-xl bg-white border border-slate-200 p-6 space-y-4 text-slate-600 leading-relaxed">
        <h2 className="text-lg font-bold text-slate-900">Email</h2>
        <p>
          The fastest way to reach us is by email:
        </p>
        <p className="font-medium text-slate-900">
          <a href="mailto:xushoulin1234@gmail.com" className="text-violet-700 hover:underline">
            xushoulin1234@gmail.com
          </a>
        </p>
        <p>
          We usually reply within 2–3 business days.
        </p>

        <h2 className="text-lg font-bold text-slate-900 pt-2">What you can contact us about</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong>Feedback &amp; bug reports</strong> — a game not loading, a page issue or anything that feels off.</li>
          <li><strong>Game suggestions</strong> — tell us what you would like to see on GameVault.</li>
          <li><strong>Copyright &amp; takedown requests</strong> — games on GameVault are provided by third-party developers and distribution platforms. If you believe any content infringes your rights, email us the details and we will act promptly.</li>
          <li><strong>Advertising &amp; partnerships</strong> — media kits and collaboration proposals are welcome.</li>
        </ul>

        <h2 className="text-lg font-bold text-slate-900 pt-2">Before you write</h2>
        <p>
          Many common questions are answered on our{" "}
          <Link href="/about" className="text-violet-700 hover:underline">About</Link> page and in our{" "}
          <Link href="/privacy" className="text-violet-700 hover:underline">Privacy Policy</Link>. Game rules
          and strategies are covered in our{" "}
          <Link href="/guides" className="text-violet-700 hover:underline">guides section</Link>.
        </p>
      </section>
    </div>
  );
}
