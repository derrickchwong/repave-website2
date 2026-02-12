import { Building2, Factory, Landmark, ShoppingCart } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "CRM & ERP Systems",
    challenge: "Your 15-year-old CRM is too brittle to integrate with modern tools. Sales teams are losing deals because they can't access data on mobile.",
    outcome: "A modern, API-first CRM that integrates with your entire sales stack — delivered incrementally while your team keeps working.",
    tags: ["Java EE", ".NET", "COBOL"],
  },
  {
    icon: Factory,
    title: "Batch Processing & ETL",
    challenge: "Nightly batch jobs running on end-of-life databases are a ticking time bomb. One failure means hours of manual recovery and missed SLAs.",
    outcome: "Containerized, modern batch processing on supported databases — with automated recovery and full observability.",
    tags: ["Informix", "DB2", "Oracle"],
  },
  {
    icon: Landmark,
    title: "Regulated & Mission-Critical",
    challenge: "Auditors are asking questions about systems nobody fully understands anymore. Compliance risk grows with every undocumented business rule.",
    outcome: "Every business rule extracted, documented, and tested. Full traceability from legacy logic to modern implementation for audit confidence.",
    tags: ["Finance", "Government", "Healthcare"],
  },
  {
    icon: ShoppingCart,
    title: "Customer-Facing Applications",
    challenge: "Your competitors ship mobile apps and real-time features while your legacy stack can't support a modern checkout experience.",
    outcome: "A modern application with APIs, mobile-ready architecture, and the ability to ship new features in days instead of months.",
    tags: ["E-Commerce", "Portals", "SaaS"],
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 md:py-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Built for the systems that matter most
          </h2>
          <p className="text-lg text-surface-500 leading-relaxed">
            Whether it&apos;s a revenue-critical application or a compliance
            liability, Repave.ai handles the modernization challenges that keep
            leadership up at night.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-white rounded-2xl p-8 border border-surface-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <useCase.icon size={24} className="text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-surface-900">
                  {useCase.title}
                </h3>
              </div>

              <div className="space-y-4 mb-5">
                <div>
                  <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-1">
                    The Challenge
                  </p>
                  <p className="text-sm text-surface-600 leading-relaxed">
                    {useCase.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
                    The Outcome
                  </p>
                  <p className="text-sm text-surface-600 leading-relaxed">
                    {useCase.outcome}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-surface-100 text-surface-600 text-xs font-medium rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
