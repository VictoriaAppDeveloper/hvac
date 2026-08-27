import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy Policy — FlowHVAC" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-4 text-slate-600">
        This is a placeholder privacy policy page. Replace this content with your actual privacy policy before launch.
      </p>
      <Link href="/" className="mt-8 inline-block text-sm font-semibold text-blue-600">
        ← Back to home
      </Link>
    </main>
  );
}
