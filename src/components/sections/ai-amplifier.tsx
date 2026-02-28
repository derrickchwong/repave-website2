import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AiAmplifierSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-6">
            AI is an amplifier, not a magic wand
          </h2>

          <div className="space-y-5 text-surface-600 leading-relaxed mb-8">
            <p>
              Google&apos;s DORA research — based on nearly 5,000 technology
              professionals — found a critical truth:{" "}
              <span className="font-semibold text-surface-900">
                &ldquo;AI&apos;s primary role in software development is to amplify. It
                magnifies the strengths of high-performing organizations — and the
                dysfunctions of struggling ones.&rdquo;
              </span>
            </p>
            <p>
              Without the right foundations, AI just helps you produce bugs
              faster. Teams that lack discipline ship 10x the defects, not 10x
              the features. As DORA warns:{" "}
              <span className="font-semibold text-surface-900">
                &ldquo;AI can amplify this dysfunction, leading teams to rapidly build
                features that don&apos;t solve real user problems, resulting in high
                activity but low impact.&rdquo;
              </span>
            </p>
            <p>
              That&apos;s why Repave.ai is built on the engineering practices DORA
              proved matter: BDD test coverage, small batch delivery,
              user-centric focus, and version-controlled traceability.{" "}
              <span className="font-semibold text-surface-900">
                We don&apos;t just apply AI — we apply it correctly.
              </span>
            </p>
          </div>

          <p className="text-xs text-surface-400 mb-8">
            Source: Google DORA,{" "}
            <em>AI Capabilities Model</em> &amp;{" "}
            <em>State of AI-assisted Software Development</em>, 2025
          </p>

          <Link
            href="/platform"
            className="inline-flex items-center gap-2 text-base font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            See how our platform gets AI right
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
