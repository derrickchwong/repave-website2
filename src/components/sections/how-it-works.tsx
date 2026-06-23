import Link from "next/link";
import {
  ShieldCheck,
  Search,
  LayoutTemplate,
  Code2,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    slug: "define",
    icon: ShieldCheck,
    title: "Define",
    description:
      "Before any code changes, you set the guardrails the whole modernization obeys — the validation rules every AI agent must follow, and your database policy for which schemas and stored procedures to retain versus modernize. Decided once, enforced automatically downstream.",
    sections: ["Validation Rules", "DB Policy"],
    output: "Governance and data policy the AI is bound by",
    color: "from-surface-500 to-surface-600",
  },
  {
    number: "02",
    slug: "discover",
    icon: Search,
    title: "Discover",
    description:
      "AI reads the entire legacy codebase and builds a complete, reviewable inventory of what it actually does — requirements composed into a BRD, features written as legacy-grounded BDD scenarios traced to source lines, plus every screen, API, batch job, data store, and the as-is architecture. Nothing is invented; everything cites source evidence.",
    sections: [
      "Requirements",
      "BRD",
      "Discovered Features",
      "Views",
      "APIs",
      "Data Stores",
      "Batch Jobs",
      "As-Is Architecture",
      "User Journeys",
    ],
    output: "A source-traced map of the legacy system",
    color: "from-surface-600 to-surface-700",
  },
  {
    number: "03",
    slug: "design",
    icon: LayoutTemplate,
    title: "Design",
    description:
      "With the legacy system understood, Repave designs the modern target — the to-be architecture and tech stack, a design system, and a reusable application shell with interactive Figma prototypes — plus to-be catalogs for every API, view, batch job, and table. Stakeholders sign off on architecture and UX before implementation begins.",
    sections: [
      "To-Be Architecture",
      "Design System",
      "Application Shell",
      "UI Prototypes",
      "To-Be Catalogs",
      "Impact Analysis",
    ],
    output: "The agreed modern blueprint, visualized in Figma",
    color: "from-brand-500 to-brand-600",
  },
  {
    number: "04",
    slug: "develop",
    icon: Code2,
    title: "Develop",
    description:
      "Autonomous agents implement the approved scenarios feature-by-feature on the modern stack, each in an isolated worktree with its own tests and regression checks — bound by the rules from Define and the target from Design. The generated code is browsable in an embedded VS Code.",
    sections: ["Develop Features", "View Source Code"],
    output: "Modern, tested code, feature by feature",
    color: "from-brand-600 to-brand-700",
  },
  {
    number: "05",
    slug: "decision",
    icon: ClipboardCheck,
    title: "Decision",
    description:
      "AI does the work, but a person makes the call. Review each completed feature by replay, run UAT, file and triage bugs against fix evidence, then accept the work or send it back with feedback — the accountability gate regulated teams require.",
    sections: ["Completed Features", "UAT Tools", "Bug Reports"],
    output: "Accepted, sign-off-ready modernized features",
    color: "from-brand-700 to-brand-800",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase mb-3">
            The Repave 5D Framework
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Define. Discover. Design. Develop. Decision.
          </h2>
          <p className="text-lg text-surface-500 leading-relaxed">
            You set the rules and make the final call — Repave handles the
            discovery, design, and development in between. Every stage is
            reviewable before the next begins.
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
                      <span className="text-xs font-bold text-brand-600 uppercase tracking-wide">
                        Phase {step.number}
                      </span>
                      <h3 className="text-xl font-bold text-surface-900 mt-1 mb-2">
                        <Link
                          href={`/platform/${step.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {step.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-surface-500 leading-relaxed max-w-md">
                        {step.description}
                      </p>
                      <p className="text-xs text-surface-400 mt-3 max-w-md">
                        <span className="font-semibold text-surface-500">
                          In the app:
                        </span>{" "}
                        {step.sections.join(" · ")}
                      </p>
                      <p className="text-xs text-surface-400 mt-2 max-w-md">
                        <span className="font-semibold text-brand-600">
                          Output:
                        </span>{" "}
                        {step.output}
                      </p>
                      <Link
                        href={`/platform/${step.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 mt-3"
                      >
                        Explore {step.title}
                        <ArrowRight size={12} />
                      </Link>
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
