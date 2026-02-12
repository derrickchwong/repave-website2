import { ArrowRight, Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Ready to repave the road to modern software?
          </h2>
          <p className="text-lg text-surface-500 leading-relaxed mb-10">
            Stop spending millions maintaining the past. Let Repave.ai transform
            your legacy codebase into a modern, tested, maintainable application
            — in a fraction of the time and cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:info@repave.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25"
            >
              <Mail size={18} />
              Request a Demo
            </a>
            <a
              href="mailto:info@repave.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-surface-700 bg-white border border-surface-200 rounded-xl hover:border-surface-300 hover:bg-surface-50 transition-all"
            >
              Talk to Our Team
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-white rounded-xl p-5 border border-surface-200">
              <p className="font-semibold text-surface-900 mb-1">
                Free Assessment
              </p>
              <p className="text-surface-500">
                Upload your codebase and get a free modernization readiness
                report.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-surface-200">
              <p className="font-semibold text-surface-900 mb-1">
                Proof of Concept
              </p>
              <p className="text-surface-500">
                We&apos;ll modernize a subset of your system to prove the
                approach works.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-surface-200">
              <p className="font-semibold text-surface-900 mb-1">
                Full Modernization
              </p>
              <p className="text-surface-500">
                End-to-end transformation with ongoing support and knowledge
                transfer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
