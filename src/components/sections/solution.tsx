import {
  Brain,
  FileSearch,
  FileCode2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI-Powered Deep Analysis",
    description:
      "Our AI agents analyze your entire legacy codebase — every file, function, database table, and business rule — capturing institutional knowledge before it's lost.",
    highlights: [
      "Automatic architecture extraction (C1-C4 diagrams)",
      "Database schema and ER diagram generation",
      "Business feature discovery and documentation",
      "Complete dependency and call-chain mapping",
    ],
  },
  {
    icon: FileSearch,
    title: "Complete Legacy Understanding",
    description:
      "We map every actor, action, interface, function, and database table in your system — revealing how your codebase truly works so nothing gets lost in translation.",
    highlights: [
      "Full traceability from users to database tables",
      "Business rule extraction and documentation",
      "Multi-language support (Java, COBOL, PHP, .NET, Python)",
      "Visual exploration of system relationships",
    ],
  },
  {
    icon: FileCode2,
    title: "Automated BDD Implementation",
    description:
      "AI agents implement each discovered feature using Behavior-Driven Development with Gherkin scenarios. Every feature is built with comprehensive test coverage from day one.",
    highlights: [
      "Auto-generated Gherkin scenarios from legacy code",
      "AI-driven implementation with 90%+ test coverage",
      "Isolated development per feature with regression testing",
      "Modern stack output (React, Next.js, APIs)",
    ],
  },
];

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            The Repave Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Modernize with confidence, not guesswork
          </h2>
          <p className="text-lg text-surface-500 leading-relaxed">
            Repave.ai combines AI analysis, deep codebase understanding, and
            automated BDD implementation to transform your legacy system into
            modern software — with every business rule preserved and tested.
          </p>
        </div>

        <div className="space-y-12">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-16 items-center`}
            >
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-5">
                  <cap.icon size={28} className="text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-surface-900 mb-3">
                  {cap.title}
                </h3>
                <p className="text-surface-500 leading-relaxed mb-5">
                  {cap.description}
                </p>
                <ul className="space-y-2.5">
                  {cap.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={18}
                        className="text-brand-500 shrink-0 mt-0.5"
                      />
                      <span className="text-sm text-surface-600">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-surface-50 border border-surface-200 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
                  {index === 0 && <AnalysisDiagram />}
                  {index === 1 && <UnderstandingDiagram />}
                  {index === 2 && <BddDiagram />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnalysisDiagram() {
  return (
    <div className="w-full max-w-sm space-y-3 text-sm">
      <div className="bg-white rounded-lg border border-surface-200 p-4 flex items-center gap-3 shadow-sm">
        <div className="w-8 h-8 rounded-md bg-surface-100 flex items-center justify-center text-surface-600 font-mono text-xs font-bold">
          .java
        </div>
        <div>
          <p className="font-medium text-surface-800">Legacy Codebase</p>
          <p className="text-xs text-surface-400">1,200 files analyzed</p>
        </div>
      </div>
      <div className="flex justify-center">
        <ArrowRight size={20} className="text-surface-400 rotate-90" />
      </div>
      <div className="bg-white rounded-lg border border-brand-200 p-4 flex items-center gap-3 shadow-sm border-l-4 border-l-brand-500">
        <Brain size={20} className="text-brand-600" />
        <div>
          <p className="font-medium text-surface-800">AI Analysis Engine</p>
          <p className="text-xs text-surface-400">
            Architecture, DB, Features
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <ArrowRight size={20} className="text-brand-400 rotate-90" />
      </div>
      <div className="bg-white rounded-lg border border-brand-200 p-4 flex items-center gap-3 shadow-sm border-l-4 border-l-brand-300">
        <CheckCircle2 size={20} className="text-brand-500" />
        <div>
          <p className="font-medium text-surface-800">
            Complete Documentation
          </p>
          <p className="text-xs text-surface-400">C4 diagrams, ER, Features</p>
        </div>
      </div>
    </div>
  );
}

function UnderstandingDiagram() {
  return (
    <div className="w-full max-w-xs mx-auto space-y-4">
      <div className="text-center">
        <p className="text-xs font-semibold text-surface-500 uppercase tracking-wider mb-3">
          Full System Traceability
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="w-24 bg-surface-700 text-white text-xs font-medium px-3 py-2 rounded-lg text-center">
            Users
          </div>
          <div className="flex-1 border-t-2 border-dashed border-surface-300" />
          <span className="text-[10px] text-surface-400">performs</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-24 bg-brand-600 text-white text-xs font-medium px-3 py-2 rounded-lg text-center">
            Actions
          </div>
          <div className="flex-1 border-t-2 border-dashed border-surface-300" />
          <span className="text-[10px] text-surface-400">triggers</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-24 bg-brand-400 text-white text-xs font-medium px-3 py-2 rounded-lg text-center">
            Interfaces
          </div>
          <div className="flex-1 border-t-2 border-dashed border-surface-300" />
          <span className="text-[10px] text-surface-400">calls</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-24 bg-brand-100 text-brand-800 text-xs font-medium px-3 py-2 rounded-lg text-center">
            Functions
          </div>
          <div className="flex-1 border-t-2 border-dashed border-surface-300" />
          <span className="text-[10px] text-surface-400">accesses</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-24 bg-surface-200 text-surface-700 text-xs font-medium px-3 py-2 rounded-lg text-center">
            Database
          </div>
          <div className="flex-1" />
        </div>
      </div>
      <p className="text-[11px] text-surface-400 text-center pt-2">
        Every path from user to data — fully mapped
      </p>
    </div>
  );
}

function BddDiagram() {
  return (
    <div className="w-full max-w-sm font-mono text-xs space-y-2">
      <div className="bg-white rounded-lg border border-surface-200 p-4 shadow-sm">
        <p className="text-surface-700 font-semibold mb-1">
          Feature: Order Management
        </p>
        <p className="text-surface-400 mb-2">
          &nbsp;&nbsp;As a sales representative
        </p>
        <div className="border-t border-surface-100 pt-2 space-y-1">
          <p className="text-surface-600">
            &nbsp;&nbsp;Scenario: Create new order
          </p>
          <p className="text-brand-600">
            &nbsp;&nbsp;&nbsp;&nbsp;Given I am on the orders page
          </p>
          <p className="text-brand-600">
            &nbsp;&nbsp;&nbsp;&nbsp;When I fill in order details
          </p>
          <p className="text-brand-600">
            &nbsp;&nbsp;&nbsp;&nbsp;Then the order should be saved
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-center text-surface-400">
        <div className="w-3 h-3 rounded-full bg-brand-400" />
        <span className="font-sans text-xs">12 scenarios passing</span>
        <span className="mx-1">|</span>
        <span className="font-sans text-xs">94% coverage</span>
      </div>
    </div>
  );
}
