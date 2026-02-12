import {
  AlertTriangle,
  Clock,
  DollarSign,
  Users,
  ShieldAlert,
  TrendingDown,
} from "lucide-react";

const painPoints = [
  {
    icon: DollarSign,
    title: "Skyrocketing Maintenance Costs",
    description:
      "Over 60% of IT budgets go to maintaining legacy systems instead of building new capabilities. Every year you wait, the cost compounds.",
    color: "text-surface-600",
    bgColor: "bg-surface-100",
  },
  {
    icon: Clock,
    title: "Slow Time-to-Market",
    description:
      "Simple changes take weeks in legacy systems. Your competitors ship features in days while you're stuck debugging 20-year-old code.",
    color: "text-surface-600",
    bgColor: "bg-surface-100",
  },
  {
    icon: Users,
    title: "Vanishing Expertise",
    description:
      "The developers who built your legacy system are retiring. Their institutional knowledge walks out the door with them — undocumented.",
    color: "text-surface-600",
    bgColor: "bg-surface-100",
  },
  {
    icon: ShieldAlert,
    title: "Security Vulnerabilities",
    description:
      "Legacy frameworks no longer receive security patches. Every day your system runs is another day of exposure to known exploits.",
    color: "text-surface-600",
    bgColor: "bg-surface-100",
  },
  {
    icon: TrendingDown,
    title: "Missed Business Opportunities",
    description:
      "Modern integrations, mobile experiences, and AI capabilities are impossible on your legacy stack. Revenue-generating ideas die on the vine.",
    color: "text-surface-600",
    bgColor: "bg-surface-100",
  },
  {
    icon: AlertTriangle,
    title: "Rewrite Risk & Failure",
    description:
      "Manual rewrites take 2-3x longer and cost 3-5x more than estimated. 70% of large-scale rewrite projects fail or are abandoned.",
    color: "text-surface-600",
    bgColor: "bg-surface-100",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-3">
            The Legacy Trap
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Legacy software is silently killing your business
          </h2>
          <p className="text-lg text-surface-500 leading-relaxed">
            Every year you delay modernization, the problem gets worse. The
            codebase grows more complex, the talent pool shrinks, and the gap
            between what your business needs and what your technology can deliver
            widens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-2xl p-6 border border-surface-200 hover:border-surface-300 hover:shadow-lg transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl ${point.bgColor} flex items-center justify-center mb-4`}
              >
                <point.icon size={24} className={point.color} />
              </div>
              <h3 className="text-lg font-semibold text-surface-900 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-surface-500 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-surface-800 to-surface-900 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-3">
            Enterprises spend{" "}
            <span className="text-brand-300">70-80% of their IT budgets</span>
            <br />
            just keeping legacy systems running
          </p>
          <p className="text-surface-400 text-lg mb-4">
            That&apos;s money that could be building your future instead of
            preserving your past.
          </p>
          <p className="text-surface-500 text-xs">
            Source: The Fintech Times
          </p>
        </div>
      </div>
    </section>
  );
}
