import Link from "next/link";
import {
  DollarSign,
  AlertTriangle,
  Clock,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const painPoints = [
  {
    icon: DollarSign,
    stat: "60%+ of IT budgets",
    description: "Spent maintaining legacy systems instead of building new capabilities.",
  },
  {
    icon: AlertTriangle,
    stat: "70% of rewrites",
    description: "Fail or get abandoned — costing millions with nothing to show.",
  },
  {
    icon: Clock,
    stat: "Weeks vs. days",
    description: "To ship features your competitors deliver in a fraction of the time.",
  },
  {
    icon: ShieldAlert,
    stat: "Growing security risk",
    description: "From unpatched frameworks that no longer receive updates.",
  },
];

export function CostOfInactionSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Legacy software is silently costing you
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {painPoints.map((point) => (
            <div
              key={point.stat}
              className="bg-white rounded-2xl p-6 border border-surface-200 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-100 flex items-center justify-center mx-auto mb-4">
                <point.icon size={24} className="text-surface-600" />
              </div>
              <p className="text-lg font-bold text-surface-900 mb-1">
                {point.stat}
              </p>
              <p className="text-sm text-surface-500 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/why-modernize"
            className="inline-flex items-center gap-2 text-base font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            See the full business case
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
