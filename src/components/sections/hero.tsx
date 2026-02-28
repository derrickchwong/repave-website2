import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Transform how the world
            <br />
            <span className="gradient-text">builds software.</span>
          </h1>

          <p className="text-lg md:text-xl text-surface-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn how our{" "}
            <Link href="/platform" className="text-brand-600 underline underline-offset-4 hover:text-brand-700 transition-colors">
              platform
            </Link>
            {" "}and{" "}
            <Link href="/features" className="text-brand-600 underline underline-offset-4 hover:text-brand-700 transition-colors">
              features
            </Link>
            {" "}help you modernize legacy systems.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-lg font-medium text-brand-600 hover:text-brand-700 transition-colors"
          >
            About us
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
