import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PageCta } from "@/components/page-cta";
import { DStageDetail } from "@/components/sections/d-stage-detail";
import { getStage } from "@/lib/five-d";

const stage = getStage("decision")!;

export const metadata: Metadata = {
  title: `${stage.name} — The 5D Framework`,
  description: stage.tagline,
};

export default function DecisionPage() {
  return (
    <>
      <PageHero
        label={`The 5D Framework · Phase ${stage.number}`}
        title={stage.name}
        subtitle={stage.tagline}
      />
      <DStageDetail stage={stage} />
      <PageCta />
    </>
  );
}
