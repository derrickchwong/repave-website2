import {
  Layers,
  Database,
  Globe,
  Workflow,
  GitBranch,
  Shield,
  FileText,
  BarChart3,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "C4 Architecture Extraction",
    description:
      "Automatically generates C1-C4 architecture diagrams from your codebase — System Context, Containers, Components, and Code-level views.",
  },
  {
    icon: Database,
    title: "Database Schema Discovery",
    description:
      "Extracts complete ER diagrams, foreign key relationships, and data access patterns from your legacy database layer.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Analyzes codebases in Java, COBOL, PHP, .NET, Python, and virtually any language — no matter how old or complex the stack.",
  },
  {
    icon: Workflow,
    title: "Feature Discovery",
    description:
      "AI identifies every user-facing feature and generates Gherkin BDD scenarios that capture exact business behavior with code references.",
  },
  {
    icon: GitBranch,
    title: "Parallel Execution",
    description:
      "Multiple features are modernized simultaneously in isolated branches, dramatically accelerating delivery. Each stream is tested and merged independently.",
  },
  {
    icon: Shield,
    title: "90%+ Test Coverage",
    description:
      "Every implemented feature comes with unit tests, BDD tests, and regression tests. We verify coverage at service, API, and UI layers.",
  },
  {
    icon: FileText,
    title: "Compliance & Audit Trail",
    description:
      "Every business rule is documented and traceable from legacy to modern code. Full audit trail for regulated industries.",
  },
  {
    icon: BarChart3,
    title: "Progress & Cost Visibility",
    description:
      "Real-time dashboards showing modernization progress, processing costs, and time-to-completion for every feature.",
  },
  {
    icon: Gauge,
    title: "Batch Job Conversion",
    description:
      "Specialized pipeline for converting legacy batch jobs from Informix, DB2, and Oracle to modern MySQL and PostgreSQL targets.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            Platform Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Everything you need to modernize
          </h2>
          <p className="text-lg text-surface-500 leading-relaxed">
            A comprehensive platform that handles every aspect of legacy
            modernization — from initial analysis to production-ready code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-6 border border-surface-200 hover:border-brand-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center mb-4 transition-colors">
                <feature.icon size={24} className="text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-surface-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-surface-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
