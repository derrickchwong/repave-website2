import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProblemSection } from "@/components/sections/problem";
import { StatsSection } from "@/components/sections/stats";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Why Modernize",
  description:
    "Legacy software is silently killing your business. Discover the true cost of maintaining outdated systems and the ROI of modernization.",
};

export default function WhyModernizePage() {
  return (
    <>
      <PageHero
        label="Why Modernize"
        title="The true cost of legacy software"
        subtitle="Every year you delay modernization, the problem compounds. The codebase grows more complex, talent shrinks, and the gap between what your business needs and what your technology delivers widens."
      />
      <ProblemSection />
      <StatsSection />
      <PageCta />
    </>
  );
}
