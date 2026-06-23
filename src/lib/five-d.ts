// Single source of truth for the Repave 5D framework detail pages.
// Order matches the product's own navigation: Define → Discover → Design → Develop → Decision.

export interface DScreenshot {
  src: string;
  width: number;
  height: number;
  heading: string;
  caption: string;
}

export interface DProcessStep {
  label: string;
  text: string;
}

export interface DStage {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  intro: string;
  screenshots: DScreenshot[];
  /** Optional ordered process explanation, rendered as a numbered stepper. */
  process?: DProcessStep[];
  /** The actual in-app sections that live under this stage's menu group. */
  sections: string[];
  output: string;
  whyDeRisks: string;
}

export const FIVE_D: DStage[] = [
  {
    slug: "define",
    number: "01",
    name: "Define",
    tagline:
      "Set the rules of the modernization before a single line of code changes.",
    intro:
      "Rewrites go wrong when an AI makes a thousand silent decisions on your behalf. Define is where you make the decisions that matter — once — and Repave enforces them automatically at every stage that follows.",
    screenshots: [
      {
        src: "/screenshots/define-rules.png",
        width: 1440,
        height: 900,
        heading: "Validation rules the AI must obey",
        caption:
          "Author the project's standards — JWT auth, RBAC on every endpoint, HTTPS-only, no PII in logs — and every agent is checked against them after each implementation, on demand or on a daily cadence.",
      },
    ],
    sections: ["Validation Rules", "DB Policy"],
    output: "Governance and data policy the AI is bound by",
    whyDeRisks:
      "Your non-negotiables — compliance, security, data residency — are encoded up front and checked automatically, instead of being left to chance inside a black-box rewrite.",
  },
  {
    slug: "discover",
    number: "02",
    name: "Discover",
    tagline:
      "Understand the system you're afraid to touch — completely, and with the receipts.",
    intro:
      "You can't safely modernize what you don't understand. Discover reads the entire legacy codebase and turns it into a complete, reviewable inventory — with every finding traced back to the source.",
    screenshots: [
      {
        src: "/screenshots/discover-features.png",
        width: 1440,
        height: 900,
        heading: "Every feature, discovered and reviewable",
        caption:
          "AI extracts each user-facing feature from the legacy code — 56 here — with its scenario count, status, and source evidence, ready for your team to review and approve.",
      },
      {
        src: "/screenshots/discover-scenarios.png",
        width: 1440,
        height: 900,
        heading: "Behavior captured as BDD scenarios",
        caption:
          "Each feature becomes Gherkin scenarios written from the legacy code — the executable contract the rewrite must satisfy, not a guess at what the system might do.",
      },
      {
        src: "/screenshots/discover-mapping.png",
        width: 1440,
        height: 900,
        heading: "Grounded in source — no hallucination",
        caption:
          "Every scenario maps back to the legacy source it came from, classified preserved, modernized, or dropped. Files, tables, views, and APIs are linked so nothing is invented.",
      },
      {
        src: "/screenshots/discover-architecture.png",
        width: 1440,
        height: 1180,
        heading: "The as-is architecture, in C4",
        caption:
          "Repave reconstructs the legacy system across C4 levels 1–4 — system context, containers, components, and code — alongside an ER diagram of the database.",
      },
      {
        src: "/screenshots/discover-journeys.png",
        width: 1440,
        height: 900,
        heading: "How real users move through it",
        caption:
          "Scenarios are stitched into cross-feature user journeys per persona, capturing the end-to-end flows the system actually supports.",
      },
    ],
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
    output: "A source-traced map of everything the legacy system does",
    whyDeRisks:
      "Every behavior cites its source evidence and is reviewed and approved by your team before anything is built on top of it.",
  },
  {
    slug: "design",
    number: "03",
    name: "Design",
    tagline:
      "See the modern product — architecture, data, and UX — before it's built.",
    intro:
      "Design defines the target the rewrite will conform to, so there are no surprises at the end. It turns the discovered system into a concrete modern blueprint — and because the design system, application shell, and prototypes are generated directly in Figma, your designers refine them in the tool they already use.",
    screenshots: [
      {
        src: "/screenshots/design-architecture.png",
        width: 1440,
        height: 900,
        heading: "The modern target architecture",
        caption:
          "A to-be C4 architecture and an explicit stack — here a React SPA frontend with an ASP.NET Core (.NET 8) API on PostgreSQL — designed from the discovered scope.",
      },
      {
        src: "/screenshots/design-catalog.png",
        width: 1440,
        height: 900,
        heading: "To-be catalogs, traced to legacy",
        caption:
          "The modern API surface, views, batch jobs, messaging, and relational schema — each item traced back to the legacy artifact it modernizes.",
      },
      {
        src: "/screenshots/design-prototype.png",
        width: 1476,
        height: 1076,
        heading: "An interactive UI prototype",
        caption:
          "A reusable application shell and prototypes — modernizing the navigation and interaction model instead of cloning the dated legacy UI.",
      },
      {
        src: "/screenshots/design-figma.png",
        width: 2000,
        height: 943,
        heading: "Native Figma integration",
        caption:
          "Repave generates the design directly in your Figma workspace — the clean application shell, an annotated review version, and page templates for every layout — so your team edits and signs off in the tool they already use.",
      },
    ],
    sections: [
      "To-Be Architecture",
      "Design System",
      "Application Shell",
      "UI Prototypes",
      "Figma Integration",
      "To-Be Catalogs",
      "Impact Analysis",
    ],
    output: "The agreed modern blueprint — architecture, schema, and UX",
    whyDeRisks:
      "Stakeholders sign off on the modern target up front, and impact analysis keeps it in sync as the legacy system keeps changing underneath you.",
  },
  {
    slug: "develop",
    number: "04",
    name: "Develop",
    tagline:
      "Implement to the Gherkin spec — feature by feature, test-backed.",
    intro:
      "With the rules set and the target designed, autonomous agents implement the approved scenarios on the modern stack. The Gherkin scenarios from Discover are the spec — the contract every implementation must satisfy — so the output is verified against them at each step, not just generated and hoped for.",
    screenshots: [],
    process: [
      {
        label: "Sequence the approved scenarios",
        text: "Repave orders the scenarios you approved by dependency, so features are built in a sensible sequence rather than all at once.",
      },
      {
        label: "Ground each scenario in legacy evidence",
        text: "Before writing code, the agent reads the exact legacy files and line ranges each scenario's @code-ref points to — so the rewrite reflects real behavior, not assumptions.",
      },
      {
        label: "Implement to the Gherkin spec",
        text: "The Gherkin scenarios are the contract. Agents build each feature on the modern stack so that every scenario is satisfied — the spec, not the prompt, defines what “done” means.",
      },
      {
        label: "Prove it with BDD tests",
        text: "Each scenario becomes an executable Cucumber test that drives the full stack — real browser → API → database — so passing tests mean the behavior actually matches the spec, end to end.",
      },
      {
        label: "Review against every artifact",
        text: "The implementation is checked back against the Gherkin contract, the UI prototype, the API spec, and your DB policy. Anything that drifts is handed back to the agent to fix.",
      },
      {
        label: "Merge only when green",
        text: "Each feature is built in its own isolated git worktree and merges to the modern branch only when the full suite passes — with an automatic fix pass if it doesn't.",
      },
    ],
    sections: ["Develop Features", "Implementation Plan", "View Source Code"],
    output:
      "Modern code that satisfies the Gherkin spec, proven by passing BDD tests",
    whyDeRisks:
      "Behavior is pinned to the Gherkin scenarios and verified by BDD tests at every step; features are built in isolation and nothing merges until the suite is green — so the rewrite can't silently drift from the spec.",
  },
  {
    slug: "decision",
    number: "05",
    name: "Decision",
    tagline: "AI does the work — you make the call.",
    intro:
      "Modernization isn't finished when the code compiles; it's finished when a person accepts it. Decision is the human accountability gate at the end of every feature — review, replay, and sign off.",
    screenshots: [
      {
        src: "/screenshots/decision-features.png",
        width: 1440,
        height: 900,
        heading: "Review completed work by replay",
        caption:
          "Every completed feature shows its scenarios, replay counts, failures, and bugs at a glance — accept the work or send it back with feedback.",
      },
      {
        src: "/screenshots/decision-replay-ui.png",
        width: 1440,
        height: 900,
        heading: "Test Replay — watch the journey run",
        caption:
          "A full Playwright trace of each user journey executing against the modernized app — replay every step against the real rendered screens, with DOM snapshots, network, and console.",
      },
      {
        src: "/screenshots/decision-createbug.png",
        width: 1440,
        height: 900,
        heading: "File a bug straight from the trace",
        caption:
          "Spot an issue in the replay, pick the exact component, describe what's wrong, and report it — the bug is grounded in the real trace action and step.",
      },
      {
        src: "/screenshots/decision-bugs.png",
        width: 1440,
        height: 900,
        heading: "Triage every issue in one place",
        caption:
          "All reported bugs together — severity, status, the scenario they touch, fix status, and the commit that resolved them.",
      },
      {
        src: "/screenshots/decision-bugfix.png",
        width: 1440,
        height: 900,
        heading: "AI investigates and fixes",
        caption:
          "Each bug gets an AI investigation — root cause, the fix, a verification command, the relevant files, and the resolving commit — then you confirm.",
      },
    ],
    sections: ["Completed Features", "Test Replay", "UAT Tools", "Bug Reports"],
    output: "Accepted, sign-off-ready modernized features",
    whyDeRisks:
      "Every feature passes through a human checkpoint with a full audit trail — the accountability regulated teams require before anything ships.",
  },
];

export function getStage(slug: string): DStage | undefined {
  return FIVE_D.find((s) => s.slug === slug);
}

export function getAdjacentStages(slug: string): {
  prev: DStage | null;
  next: DStage | null;
} {
  const index = FIVE_D.findIndex((s) => s.slug === slug);
  return {
    prev: index > 0 ? FIVE_D[index - 1] : null,
    next: index >= 0 && index < FIVE_D.length - 1 ? FIVE_D[index + 1] : null,
  };
}
