import { HeroSection } from "@/components/sections/hero";
import { CostOfInactionSection } from "@/components/sections/cost-of-inaction";
import { AiAmplifierSection } from "@/components/sections/ai-amplifier";
import { CtaSection } from "@/components/sections/cta";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Repave.ai",
  url: "https://repave.io",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cloud",
  description:
    "AI-powered platform that transforms legacy codebases into modern, tested, production-ready software — preserving every business rule while eliminating technical debt.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/OnlineOnly",
  },
  provider: {
    "@type": "Organization",
    name: "Repave.ai",
    url: "https://repave.io",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <CostOfInactionSection />
      <AiAmplifierSection />
      <CtaSection />
    </>
  );
}
