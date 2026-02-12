import {
  ArrowRight,
  BrainCircuit,
  GitBranch,
  TestTubeDiagonal,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium mb-8">
            <BrainCircuit size={16} />
            AI-Powered Legacy Modernization
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Stop maintaining.
            <br />
            <span className="gradient-text">Start modernizing.</span>
          </h1>

          <p className="text-base md:text-lg text-surface-400 italic max-w-2xl mx-auto mb-6">
            Your developers sleep at night. Rest on weekends.
            <br />
            Repave keeps shipping production-ready code.
          </p>

          <p className="text-lg md:text-xl text-surface-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Repave.ai transforms your legacy codebase into modern, tested,
            production-ready software — preserving every business rule while
            eliminating decades of technical debt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#cta"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-brand-600 rounded-xl hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25"
            >
              Request a Demo
              <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-surface-700 bg-white border border-surface-200 rounded-xl hover:border-surface-300 hover:bg-surface-50 transition-all"
            >
              See How It Works
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-surface-200 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                <BrainCircuit size={20} className="text-brand-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-surface-900">
                  AI Analysis
                </p>
                <p className="text-xs text-surface-500">
                  Deep codebase understanding
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-surface-200 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                <TestTubeDiagonal size={20} className="text-brand-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-surface-900">
                  BDD Testing
                </p>
                <p className="text-xs text-surface-500">
                  90%+ test coverage
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-surface-200 rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-surface-100 flex items-center justify-center shrink-0">
                <GitBranch size={20} className="text-surface-600" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-surface-900">
                  Incremental Migration
                </p>
                <p className="text-xs text-surface-500">
                  Feature-by-feature delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
