import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SolutionSection } from "@/components/sections/solution";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "See how Repave.ai's AI-powered platform analyzes, understands, and modernizes legacy codebases — step by step.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        label="Platform"
        title="Modernize with confidence, not guesswork"
        subtitle="Our AI-powered platform combines deep codebase analysis, automated feature discovery, and BDD-driven implementation to transform your legacy systems."
      />
      <SolutionSection />
      <HowItWorksSection />
      <PageCta />
    </>
  );
}
