import Link from "next/link";
import { FIVE_D } from "@/lib/five-d";

// Sticky tab bar for quickly switching between the five D detail pages.
// Sits directly under the fixed navbar (h-16).
export function FiveDTabs({ current }: { current: string }) {
  return (
    <nav
      aria-label="5D framework"
      className="sticky top-16 z-40 bg-card/90 backdrop-blur-md border-b border-border/70"
    >
      <div className="max-w-5xl mx-auto px-6 flex gap-1 overflow-x-auto">
        {FIVE_D.map((stage) => {
          const active = stage.slug === current;
          return (
            <Link
              key={stage.slug}
              href={`/platform/${stage.slug}`}
              aria-current={active ? "page" : undefined}
              className={`flex items-center gap-2 px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                active
                  ? "border-brand-600 text-primary"
                  : "border-transparent text-surface-500 hover:text-primary hover:border-border"
              }`}
            >
              <span
                className={`text-xs font-bold ${
                  active ? "text-brand-600" : "text-surface-400"
                }`}
              >
                {stage.number}
              </span>
              {stage.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
