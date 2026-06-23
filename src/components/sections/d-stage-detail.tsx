import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import type { DStage, DScreenshot } from "@/lib/five-d";
import { getAdjacentStages } from "@/lib/five-d";
import { FiveDTabs } from "@/components/five-d-tabs";

function BrowserFrame({ shot }: { shot: DScreenshot }) {
  return (
    <div className="rounded-xl border border-border/70 bg-card shadow-xl shadow-surface-900/5 overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/70 bg-surface-50">
        <span className="w-3 h-3 rounded-full bg-surface-300" />
        <span className="w-3 h-3 rounded-full bg-surface-300" />
        <span className="w-3 h-3 rounded-full bg-surface-300" />
      </div>
      <Image
        src={shot.src}
        alt={shot.heading}
        width={shot.width}
        height={shot.height}
        className="w-full h-auto"
      />
    </div>
  );
}

export function DStageDetail({ stage }: { stage: DStage }) {
  const { prev, next } = getAdjacentStages(stage.slug);

  return (
    <>
      <FiveDTabs current={stage.slug} />

      {/* Intro */}
      <section className={stage.process ? "pt-14 md:pt-16 pb-8" : "py-14 md:py-16"}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg md:text-xl text-surface-700 leading-relaxed">
            {stage.intro}
          </p>
        </div>
      </section>

      {/* Process stepper (when the stage explains a process instead of showing screenshots) */}
      {stage.process && stage.process.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-8">
              How a feature gets built
            </h2>
            <ol className="space-y-8">
              {stage.process.map((step, index) => (
                <li key={step.label} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    {index < stage.process!.length - 1 && (
                      <span className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-lg font-bold text-surface-900 mb-1">
                      {step.label}
                    </h3>
                    <p className="text-surface-500 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Screenshot showcase — alternating image / text */}
      {stage.screenshots.map((shot, index) => (
        <section
          key={shot.src}
          className={`py-12 md:py-16 ${
            index % 2 === 1 ? "bg-surface-50" : ""
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className={index % 2 === 1 ? "md:order-2" : ""}>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wide">
                {stage.name} · {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-surface-900 mt-2 mb-4">
                {shot.heading}
              </h2>
              <p className="text-surface-500 leading-relaxed">{shot.caption}</p>
            </div>
            <div className={index % 2 === 1 ? "md:order-1" : ""}>
              <BrowserFrame shot={shot} />
            </div>
          </div>
        </section>
      ))}

      {/* Summary: in-app sections, output, why it de-risks */}
      <section className="py-14 md:py-16 border-t border-border/70 bg-surface-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs font-semibold text-surface-400 uppercase tracking-wide mb-3">
              In the app
            </h3>
            <div className="flex flex-wrap gap-2">
              {stage.sections.map((section) => (
                <span
                  key={section}
                  className="inline-block px-3 py-1 text-xs font-medium text-surface-600 bg-card rounded-full border border-border/70"
                >
                  {section}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border/70 bg-card p-5">
            <h3 className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">
              Output
            </h3>
            <p className="text-sm text-surface-700 leading-relaxed">
              {stage.output}
            </p>
          </div>
          <div className="rounded-lg border border-brand-600/20 bg-brand-50/60 p-5">
            <h3 className="flex items-center gap-2 text-xs font-semibold text-brand-700 uppercase tracking-wide mb-2">
              <ShieldCheck size={14} />
              Why it de-risks
            </h3>
            <p className="text-sm text-surface-700 leading-relaxed">
              {stage.whyDeRisks}
            </p>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="border-t border-border/70">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-4 justify-between">
          {prev ? (
            <Link
              href={`/platform/${prev.slug}`}
              className="group flex-1 rounded-lg border border-border/70 p-5 hover:border-brand-600/40 hover:bg-surface-50 transition-colors"
            >
              <span className="flex items-center gap-2 text-xs text-surface-400 uppercase tracking-wide mb-1">
                <ArrowLeft size={14} /> Previous
              </span>
              <span className="font-semibold text-surface-900 group-hover:text-primary transition-colors">
                {prev.number} · {prev.name}
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/platform/${next.slug}`}
              className="group flex-1 rounded-lg border border-border/70 p-5 text-right hover:border-brand-600/40 hover:bg-surface-50 transition-colors"
            >
              <span className="flex items-center justify-end gap-2 text-xs text-surface-400 uppercase tracking-wide mb-1">
                Next <ArrowRight size={14} />
              </span>
              <span className="font-semibold text-surface-900 group-hover:text-primary transition-colors">
                {next.number} · {next.name}
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </div>
      </section>
    </>
  );
}
