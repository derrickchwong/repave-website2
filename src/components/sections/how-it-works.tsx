import {
  Upload,
  Search,
  Code2,
  TestTubeDiagonal,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Codebase",
    description:
      "Upload your legacy codebase as a ZIP file. We support Java, COBOL, PHP, .NET, Python, and virtually any language or framework.",
    color: "from-surface-500 to-surface-600",
  },
  {
    number: "02",
    icon: Search,
    title: "AI Analyzes Everything",
    description:
      "Our AI pipeline scans every file, maps dependencies, discovers database schemas, identifies user interfaces, and extracts business actions — building a complete knowledge graph.",
    color: "from-surface-600 to-surface-700",
  },
  {
    number: "03",
    icon: Code2,
    title: "Features Are Discovered",
    description:
      "The AI identifies every user-facing feature in your legacy system and generates Gherkin BDD scenarios that capture the exact business behavior.",
    color: "from-brand-500 to-brand-600",
  },
  {
    number: "04",
    icon: TestTubeDiagonal,
    title: "AI Implements & Tests",
    description:
      "Autonomous AI agents implement each feature in a modern stack with comprehensive test coverage. Every feature is built in isolation and regression-tested.",
    color: "from-brand-600 to-brand-700",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Ship with Confidence",
    description:
      "The result is a modern, fully tested application that preserves every business rule from your legacy system. Ready for deployment and future growth.",
    color: "from-brand-700 to-brand-800",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            From legacy to modern in 5 steps
          </h2>
          <p className="text-lg text-surface-500 leading-relaxed">
            Our AI-driven pipeline handles the heavy lifting — from
            understanding your legacy code to delivering tested, modern
            software.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-surface-200 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div key={step.number} className="relative md:pb-16 last:pb-0">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } items-center gap-6 md:gap-12`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`inline-block ${
                        index % 2 === 0
                          ? "md:float-right md:ml-4"
                          : "md:float-left md:mr-4"
                      }`}
                    >
                      <span className="text-xs font-bold text-surface-400 uppercase tracking-widest">
                        Step {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-surface-900 mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-surface-500 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon circle */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <step.icon size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
