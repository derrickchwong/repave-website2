import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { UseCasesSection } from "@/components/sections/use-cases";
import { PageCta } from "@/components/page-cta";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "See how Repave.ai modernizes CRM systems, batch processing, regulated applications, and customer-facing platforms.",
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        label="Use Cases"
        title="Built for the systems that matter most"
        subtitle="Whether it's a revenue-critical application or a compliance liability, Repave.ai handles the modernization challenges that keep leadership up at night."
      />
      <UseCasesSection />
      <PageCta />
    </>
  );
}
