import Link from "next/link";

type PageHeroProps = {
  label?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
};

export function PageHero({ label, title, description, cta }: PageHeroProps) {
  return (
    <section className="gradient-mesh border-b border-[var(--border)] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {label && <p className="section-label mb-4">{label}</p>}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gradient">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {description}
          </p>
        )}
        {cta && (
          <Link href={cta.href} className="btn-primary mt-8 inline-block">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
