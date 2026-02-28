import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Repave.ai",
  description:
    "Learn about Repave.ai's mission to modernize legacy software systems with AI-powered transformation.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-surface-600 hover:text-brand-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-surface-900 mb-6">
          About Repave.ai
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-surface-600 leading-relaxed mb-8">
            Our mission: <span className="font-semibold text-surface-900">Transform how the world builds software.</span>
          </p>

          <h2 className="text-2xl font-semibold text-surface-900 mt-12 mb-4">
            Our Vision
          </h2>
          <p className="text-surface-600 leading-relaxed">
            Billions of dollars are trapped in outdated systems that are too
            risky to update and too expensive to replace. Repave.ai uses
            advanced AI to automatically transform legacy codebases into modern,
            maintainable applications — preserving decades of business logic
            while eliminating technical debt.
          </p>

          <h2 className="text-2xl font-semibold text-surface-900 mt-12 mb-4">
            What We Do
          </h2>
          <p className="text-surface-600 leading-relaxed">
            Our AI-powered platform analyzes your existing codebase,
            understanding not just the syntax but the intent behind every
            function. We then automatically rewrite it in modern languages and
            frameworks, generate comprehensive test coverage, and ensure zero
            knowledge loss in the process.
          </p>

          <h2 className="text-2xl font-semibold text-surface-900 mt-12 mb-4">
            Why It Matters
          </h2>
          <p className="text-surface-600 leading-relaxed">
            Legacy systems power critical infrastructure across finance,
            healthcare, government, and enterprise. Manual rewrites take years,
            cost millions, and often fail. Repave.ai makes modernization fast,
            safe, and cost-effective — unlocking innovation that was previously
            impossible.
          </p>

          <div className="bg-surface-50 border border-surface-200 rounded-lg p-8 mt-12">
            <h3 className="text-xl font-semibold text-surface-900 mb-3">
              Ready to modernize your legacy systems?
            </h3>
            <p className="text-surface-600 mb-4">
              Get in touch to learn how Repave.ai can transform your codebase.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
