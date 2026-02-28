interface PageHeroProps {
  title: string;
  subtitle: string;
  label?: string;
}

export function PageHero({ title, subtitle, label }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {label && (
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
              {label}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl font-bold text-surface-900 mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-surface-500 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
