import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { FeaturesSection } from "@/components/sections/features";
import { StatsSection } from "@/components/sections/stats";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the full capabilities of Repave.ai — from C4 architecture extraction to 90%+ test coverage and multi-language support.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        label="Features"
        title="Everything you need to modernize"
        subtitle="A comprehensive platform that handles every aspect of legacy modernization — from initial analysis to production-ready code."
      />
      <FeaturesSection />
      <StatsSection />
      <PageCta />
    </>
  );
}
