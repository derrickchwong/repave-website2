import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageCta() {
  return (
    <section className="py-16 md:py-20 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-surface-900 mb-4">
          Ready to modernize?
        </h2>
        <p className="text-surface-500 text-lg mb-8 max-w-xl mx-auto">
          Let&apos;s discuss how Repave.ai can transform your legacy systems.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25"
        >
          Talk to our team
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
