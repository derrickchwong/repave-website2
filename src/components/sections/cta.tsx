import Link from "next/link";

export function CtaSection() {
  return (
    <section id="cta" className="py-16 md:py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl font-semibold text-surface-900">
          Ready to modernize?{" "}
          <Link
            href="/contact"
            className="text-brand-600 underline underline-offset-4 hover:text-brand-700 transition-colors"
          >
            Talk to our team.
          </Link>
        </p>
      </div>
    </section>
  );
}
