import {
  TrendingUp,
  ShieldCheck,
  Zap,
  PiggyBank,
  Users,
  Lock,
} from "lucide-react";

const benefits = [
  {
    icon: PiggyBank,
    title: "Redirect IT Budget to Growth",
    description:
      "Stop spending 60-80% of your IT budget on maintenance. Modernized systems cost a fraction to operate, freeing capital for innovation and new revenue streams.",
  },
  {
    icon: Zap,
    title: "Accelerate Time-to-Market",
    description:
      "New features that took months on legacy systems ship in days on a modern stack. Respond to market changes and customer needs before your competitors do.",
  },
  {
    icon: ShieldCheck,
    title: "Eliminate Compliance Risk",
    description:
      "Every business rule is documented and tested. No more audit anxiety from undocumented systems that nobody fully understands.",
  },
  {
    icon: Users,
    title: "End Talent Dependency",
    description:
      "Stop relying on the one person who understands the legacy system. Modern codebases attract modern developers and reduce key-person risk.",
  },
  {
    icon: TrendingUp,
    title: "Unlock New Revenue",
    description:
      "APIs, mobile experiences, AI integrations, partner ecosystems — none of these are possible on legacy. Modernization opens doors that were permanently closed.",
  },
  {
    icon: Lock,
    title: "Reduce Security Exposure",
    description:
      "Legacy frameworks with no security patches are a breach waiting to happen. Modern stacks receive continuous updates and follow current security standards.",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            Business Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            The ROI your board will understand
          </h2>
          <p className="text-lg text-surface-500 leading-relaxed">
            Legacy modernization isn&apos;t just a technology decision — it&apos;s a
            business decision that affects revenue, risk, talent, and competitive
            position.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 border border-surface-200"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
                <benefit.icon size={24} className="text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-surface-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-surface-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-surface-700 via-surface-800 to-surface-900 rounded-3xl p-10 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-brand-300 mb-2">
                60%
              </p>
              <p className="text-sm font-semibold text-white mb-1">
                Lower TCO
              </p>
              <p className="text-xs text-surface-400">
                vs. maintaining legacy systems
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-brand-300 mb-2">
                10x
              </p>
              <p className="text-sm font-semibold text-white mb-1">
                Faster Delivery
              </p>
              <p className="text-xs text-surface-400">
                New features to market
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-brand-300 mb-2">
                100%
              </p>
              <p className="text-sm font-semibold text-white mb-1">
                Business Rules Preserved
              </p>
              <p className="text-xs text-surface-400">
                Verified with automated tests
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-brand-300 mb-2">
                90%+
              </p>
              <p className="text-sm font-semibold text-white mb-1">
                Test Coverage
              </p>
              <p className="text-xs text-surface-400">
                From day one of the new system
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
