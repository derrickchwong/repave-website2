import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "Repave.ai — Modernize Your Legacy Code with AI" },
  description:
    "Repave.ai uses AI to transform legacy codebases into modern, high-quality code. Ship features in days, not weeks.",
};

const steps = [
  {
    href: "/platform/define",
    title: "Define",
    body: "Set the guardrails up front — the validation rules every AI agent must follow, and your database policy for which schemas and stored procedures to retain versus modernize.",
  },
  {
    href: "/platform/discover",
    title: "Discover",
    body: "AI scans the codebase and builds a complete, source-traced inventory — requirements, features as legacy-grounded BDD, screens, APIs, data, batch jobs, and the as-is architecture.",
  },
  {
    href: "/platform/design",
    title: "Design",
    body: "Design the modern target before implementing — the to-be architecture and tech stack, a design system, and a reusable application shell with interactive Figma prototypes.",
  },
  {
    href: "/platform/develop",
    title: "Develop",
    body: "Autonomous agents implement approved scenarios feature-by-feature on the modern stack, with tests, in isolation — bound by your rules and the agreed design.",
  },
  {
    href: "/platform/decision",
    title: "Decision",
    body: "You make the call: review completed features by replay, run UAT, triage bugs, then accept the work or send it back with feedback.",
  },
];

const benefits = [
  {
    icon: "⚡",
    title: "10x Faster Delivery",
    body: "Features that took weeks now take days. Clean code means your team spends time building, not deciphering.",
  },
  {
    icon: "🛡️",
    title: "Zero-Risk Migration",
    body: "No big-bang rewrites. AI transforms your code incrementally with verified functional equivalence at every step.",
  },
  {
    icon: "🧩",
    title: "Clean Architecture",
    body: "Your modernized codebase follows industry best practices — modular, testable, and easy for any developer to understand.",
  },
  {
    icon: "📈",
    title: "Full Test Coverage",
    body: "AI generates comprehensive tests during transformation, giving your team confidence to move fast without breaking things.",
  },
  {
    icon: "💰",
    title: "Slash Maintenance Costs",
    body: "Stop paying a premium to maintain legacy systems. Modern code costs less to operate, change, and scale.",
  },
  {
    icon: "🧲",
    title: "Attract Top Talent",
    body: "Great engineers want to work with modern tech. A clean codebase helps you hire and retain the best people.",
  },
];

const whyNow = [
  {
    icon: "⏳",
    title: "Manual Rewrites Fail",
    body: "Industry research shows that 70% of large-scale rewrite projects fail or go massively over budget. The all-or-nothing approach is too risky and too slow for today's pace of business.",
  },
  {
    icon: "🤖",
    title: "AI Makes It Possible",
    body: "For the first time, AI can understand entire codebases, apply modern patterns at scale, and verify every transformation — doing in weeks what used to take years.",
  },
];

const sectionLabel = "text-[0.8rem] font-bold uppercase text-secondary mb-3";
const sectionTitle =
  "text-[clamp(2rem,4vw,2.8rem)] font-extrabold leading-[1.2] mb-5 text-foreground";
const sectionSubtitle =
  "text-[1.15rem] text-surface-500 max-w-[640px] mx-auto leading-[1.7]";
const cardBase =
  "rounded-md bg-card border border-border transition-all hover:border-brand-200 hover:shadow-[0_8px_32px_hsl(165_36%_17%/0.08)]";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-[120px] pb-20 overflow-hidden bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--card))_72%,hsl(var(--background))_100%)]">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="relative z-[2] text-center max-w-[820px] mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[0.85rem] font-semibold bg-brand-50 border border-brand-200 text-primary mb-7">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              AI-Powered Application Modernization
            </div>
            <h1 className="text-[clamp(2.8rem,6vw,4.2rem)] font-extrabold leading-[1.1] mb-6 text-foreground">
              Stop Fighting Your
              <br />
              <span className="gradient-text">Legacy Code.</span>
              <br />
              Modernize It.
            </h1>
            <p className="text-[1.25rem] text-surface-500 max-w-[600px] mx-auto mb-10 leading-[1.7]">
              Repave.ai transforms your old, tangled codebase into clean, modern
              code — so your team ships features in days, not weeks.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-base bg-primary text-white transition-all hover:bg-brand-700 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_hsl(165_36%_17%/0.18)]"
              >
                Book a Demo
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-base bg-transparent text-primary border-[1.5px] border-border transition-all hover:bg-brand-50 hover:border-secondary"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="scroll-mt-20 py-[100px] bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-[60px]">
            <div className={sectionLabel}>The Problem</div>
            <h2 className={sectionTitle}>Legacy Code Is Slowing You Down</h2>
            <p className={sectionSubtitle}>
              Your competitors move fast. But your team is stuck maintaining
              decades-old code that nobody fully understands.
            </p>
          </div>
          <div className="max-w-[640px] mx-auto p-10 rounded-md bg-card border border-[hsl(11_47%_53%/0.28)] transition-all hover:shadow-[0_8px_32px_hsl(165_36%_17%/0.08)]">
            <p className="text-surface-500 leading-[1.7] mb-5">
              Legacy systems create a vicious cycle: the harder they are to
              change, the more workarounds pile up, making them even harder to
              change.
            </p>
            <ul className="list-none flex flex-col gap-3">
              {[
                "Simple features take weeks to ship",
                "Every change risks breaking something else",
                "Top developers leave out of frustration",
                "Technical debt compounds every sprint",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-foreground text-[0.95rem]"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[0.75rem] mt-0.5 bg-[hsl(11_47%_53%/0.12)] text-[hsl(11_47%_53%)]">
                    ✗
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="scroll-mt-20 py-20 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-[760px] mx-auto">
            <div className={sectionLabel}>The Solution</div>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-extrabold leading-[1.3] text-foreground mb-5">
              We use AI to turn your legacy codebase into{" "}
              <span className="gradient-text">clean, modern code</span> — while
              your developers sleep.
            </h2>
            <p className="text-[1.15rem] text-surface-500 leading-[1.8]">
              Repave.ai breaks massive modernization projects into small, safe
              units of work. Our AI orchestrator schedules, executes, and
              verifies each transformation automatically — so you wake up to
              cleaner code, every single day.
            </p>
            <div className="inline-block mt-7 text-[1.05rem] font-semibold text-primary px-7 py-3 rounded-md bg-brand-50 border border-brand-200">
              Quality is speed — clean code ships faster.
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 5D */}
      <section id="how-it-works" className="scroll-mt-20 py-[100px] bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className={sectionLabel}>The Repave 5D Framework</div>
            <h2 className={sectionTitle}>
              Define. Discover. Design. Develop. Decision.
            </h2>
            <p className={sectionSubtitle}>
              You set the rules and make the final call — Repave handles the
              discovery, design, and development in between. Every stage is
              reviewable before the next begins.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-[60px]">
            {steps.map((step, i) => (
              <Link
                key={step.href}
                href={step.href}
                className="block px-6 py-8 rounded-md bg-card border border-border transition-all hover:border-brand-200 hover:shadow-[0_8px_32px_hsl(165_36%_17%/0.08)] hover:-translate-y-1"
              >
                <div className="w-[52px] h-[52px] rounded-md bg-brand-50 flex items-center justify-center text-[1.3rem] font-extrabold text-primary mb-6">
                  {i + 1}
                </div>
                <h3 className="text-[1.25rem] font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-surface-500 text-[0.95rem] leading-[1.7]">
                  {step.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="scroll-mt-20 py-[100px] bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className={sectionLabel}>Benefits</div>
            <h2 className={sectionTitle}>What You Get</h2>
            <p className={sectionSubtitle}>
              Quality is speed. When your code is clean, everything gets faster.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-[60px]">
            {benefits.map((b) => (
              <div key={b.title} className={`px-7 py-9 ${cardBase} group`}>
                <div className="w-14 h-14 rounded-md mb-5 flex items-center justify-center text-[1.6rem] bg-brand-50 transition-colors group-hover:bg-brand-100">
                  {b.icon}
                </div>
                <h3 className="text-[1.1rem] font-bold text-foreground mb-2.5">
                  {b.title}
                </h3>
                <p className="text-surface-500 text-[0.9rem] leading-[1.7]">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section id="why-now" className="scroll-mt-20 py-[100px] bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className={sectionLabel}>Why Now</div>
            <h2 className={sectionTitle}>The Old Way Doesn&apos;t Work Anymore</h2>
            <p className={sectionSubtitle}>
              Manual rewrites take years, cost millions, and often fail. AI
              changes everything.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-[60px]">
            {whyNow.map((c) => (
              <div key={c.title} className={`p-10 ${cardBase}`}>
                <div className="text-[2.2rem] mb-4">{c.icon}</div>
                <h3 className="text-[1.2rem] font-bold text-foreground mb-3">
                  {c.title}
                </h3>
                <p className="text-surface-500 leading-[1.7] text-base">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="scroll-mt-20 py-[100px] bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center px-6 py-20 md:px-12 rounded-md relative overflow-hidden bg-primary text-white">
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold mb-4 text-white">
              Ready to Modernize
              <br />
              Your Codebase?
            </h2>
            <p className="text-[1.15rem] text-[hsl(90_17%_95%/0.82)] mb-9 max-w-[540px] mx-auto leading-[1.7]">
              See how Repave.ai can transform your legacy code into a modern,
              high-quality foundation your team will love.
            </p>
            <a
              href="mailto:info@repave.ai"
              className="inline-flex items-center gap-2 px-11 py-[18px] rounded-md font-semibold text-[1.1rem] bg-secondary text-white transition-all hover:bg-[hsl(158_36%_42%)]"
            >
              Book a Free Assessment
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
