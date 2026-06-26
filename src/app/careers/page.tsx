import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Globe,
  MapPin,
  MessageSquare,
  RefreshCw,
  Sparkles,
  Users,
} from "lucide-react";

const APPLY_EMAIL = "careers@repave.ai";
const APPLY_SUBJECT = "FDE Application — Taipei";
const APPLY_HREF = `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent(
  APPLY_SUBJECT,
)}`;

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Repave.ai as a Forward Deployed Engineer in Taipei. Help enterprises modernize legacy software with AI — embedded with customers, hands-on across the stack.",
};

// Google for Jobs structured data for the open FDE role.
const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Forward Deployed Engineer",
  description:
    "Forward Deployed Engineers embed with enterprise customers to modernize legacy COBOL, Java, and .NET systems into modern, tested applications using Repave's AI platform. Equal parts engineer, consultant, and product partner.",
  datePosted: "2026-06-26",
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "Repave.ai",
    sameAs: "https://repave.ai",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Taipei",
      addressCountry: "TW",
    },
  },
  applicantLocationRequirements: {
    "@type": "Country",
    name: "Taiwan",
  },
  directApply: true,
};

const responsibilities = [
  "Embed directly with enterprise customers — banks, insurers, manufacturers, public-sector agencies — to scope, plan, and drive legacy modernization projects end to end.",
  "Use Repave's AI agents to analyze legacy codebases, extract the business logic locked inside them, and generate modern, tested applications.",
  "Turn messy, decades-old systems into clear modernization plans that customers trust and can sign off on.",
  "Run technical workshops, demos, and architecture reviews with customer engineering teams and stakeholders.",
  "Be the customer's technical advocate inside Repave — turn what you learn in the field into product improvements.",
  "Stay hands-on across the stack: read legacy code (COBOL / Java / .NET), build and review modern code, and validate behavior with BDD.",
];

const requirements = [
  "4+ years building and shipping production software, with strong application development fundamentals.",
  "Genuinely customer-facing: you communicate clearly, build trust with both technical and business stakeholders, and stay calm when projects get messy.",
  "Hands-on experience modernizing, migrating, or re-platforming legacy systems.",
  "Real excitement about AI and LLM-driven development — you already use AI tools daily and want to push how far they go.",
  "Comfortable being on-site with customers in Taipei, with some regional travel.",
  "Fluent in Mandarin — most of our customers are local.",
];

const bonusPoints = [
  "Experience with COBOL, mainframe, or other legacy enterprise stacks.",
  "A background in consulting, solutions engineering, or professional services at an enterprise software company.",
  "Familiarity with Next.js / Spring Boot / .NET Core, cloud platforms (GCP / AWS / Azure), and CI/CD.",
  "You've modernized something genuinely painful — and lived to tell the story.",
];

const values = [
  {
    icon: Users,
    title: "Customer-obsessed",
    body: "We win when our customers ship. FDEs sit on the customer's side of the table and own the outcome, not just the code.",
  },
  {
    icon: Sparkles,
    title: "AI-first, human in control",
    body: "We let AI do the heavy lifting and keep humans on the decisions that matter. Every modernization is reviewable and auditable.",
  },
  {
    icon: RefreshCw,
    title: "High ownership",
    body: "Small, senior team. As an early FDE you'll directly shape both the customer engagement and the product roadmap.",
  },
];

function RoleMeta({
  icon: Icon,
  children,
}: {
  icon: typeof MapPin;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-surface-600 bg-surface-50 border border-surface-200 rounded-md">
      <Icon size={15} className="text-brand-600" />
      {children}
    </span>
  );
}

function RequirementList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle2
            size={20}
            className="text-brand-600 shrink-0 mt-0.5"
          />
          <span className="text-surface-600 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 uppercase mb-3">
              Careers
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-surface-900 mb-4 leading-tight">
              Help the world repave its legacy systems
            </h1>
            <p className="text-lg text-surface-500 leading-relaxed">
              Trillions of dollars of business logic is trapped in software
              that&apos;s too risky to change and too expensive to replace.
              We&apos;re building the AI platform that frees it — and we need
              engineers on the ground to make it real for customers.
            </p>
          </div>
        </div>
      </section>

      {/* Values / why join */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-surface-900 mb-4">
              Why join Repave
            </h2>
            <p className="text-surface-500 text-lg leading-relaxed">
              Modernization projects have a reputation for failing — most
              rewrites do. We&apos;re changing that by combining AI that does
              the heavy lifting with engineers who keep humans in control. If
              that mission resonates, you&apos;ll fit right in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface-50 border border-surface-200 rounded-md p-8"
              >
                <div className="w-12 h-12 bg-brand-100 rounded-md flex items-center justify-center mb-4">
                  <value.icon className="text-brand-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-surface-600 leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open role */}
      <section className="py-16 md:py-20 bg-surface-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-3">
            <span className="text-sm font-semibold text-brand-600 uppercase">
              Open Role
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
            Forward Deployed Engineer
          </h2>

          <div className="flex flex-wrap gap-2.5 mb-8">
            <RoleMeta icon={MapPin}>Taipei, Taiwan</RoleMeta>
            <RoleMeta icon={Briefcase}>Full-time</RoleMeta>
            <RoleMeta icon={MessageSquare}>Customer-facing</RoleMeta>
            <RoleMeta icon={Globe}>On-site / hybrid</RoleMeta>
          </div>

          <div className="bg-card border border-surface-200 rounded-md p-8 md:p-10 space-y-10">
            {/* About the role */}
            <div>
              <h3 className="text-xl font-semibold text-surface-900 mb-4 flex items-center gap-2">
                <Code2 size={20} className="text-brand-600" />
                About the role
              </h3>
              <p className="text-surface-600 leading-relaxed">
                Forward Deployed Engineers are the bridge between Repave&apos;s
                AI platform and the enterprises we modernize. You&apos;ll embed
                with customers across Taiwan and the region to take their
                decades-old COBOL, Java, and .NET systems and turn them into
                modern, tested applications. You&apos;re equal parts engineer,
                consultant, and product partner: in the codebase in the morning,
                in front of the customer&apos;s architects in the afternoon, and
                feeding what you learned back into the product by evening.
              </p>
            </div>

            {/* What you'll do */}
            <div>
              <h3 className="text-xl font-semibold text-surface-900 mb-4">
                What you&apos;ll do
              </h3>
              <RequirementList items={responsibilities} />
            </div>

            {/* What we're looking for */}
            <div>
              <h3 className="text-xl font-semibold text-surface-900 mb-4">
                What we&apos;re looking for
              </h3>
              <RequirementList items={requirements} />
            </div>

            {/* Bonus points */}
            <div>
              <h3 className="text-xl font-semibold text-surface-900 mb-4">
                Bonus points
              </h3>
              <RequirementList items={bonusPoints} />
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-surface-900 mb-4">
            Sound like you?
          </h2>
          <p className="text-surface-500 text-lg mb-8 max-w-xl mx-auto">
            Send us your CV or LinkedIn and a few lines on a legacy system
            you&apos;ve helped modernize. We read every application.
          </p>
          <a
            href={APPLY_HREF}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-600/25"
          >
            Apply for this role
            <ArrowRight size={18} />
          </a>
          <p className="text-sm text-surface-500 mt-6">
            Or email us directly at{" "}
            <a
              href={APPLY_HREF}
              className="text-brand-600 hover:text-brand-700 font-medium"
            >
              {APPLY_EMAIL}
            </a>
          </p>
          <p className="text-sm text-surface-500 mt-4">
            Don&apos;t see your exact role?{" "}
            <Link
              href="/contact"
              className="text-brand-600 hover:text-brand-700 font-medium"
            >
              Get in touch
            </Link>{" "}
            — we&apos;re always keen to meet people who love this problem.
          </p>
        </div>
      </section>
    </>
  );
}
