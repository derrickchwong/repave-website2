import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { UseCasesSection } from "@/components/sections/use-cases";
import { StatsSection } from "@/components/sections/stats";
import { CtaSection } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <UseCasesSection />
      <StatsSection />
      <CtaSection />
    </>
  );
}
