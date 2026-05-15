import Link from "next/link";
import {
  brand,
  capabilities,
  hero,
  industries,
  products,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="gradient-mesh relative overflow-hidden px-4 py-24 sm:px-6 lg:py-32 lg:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233d9eff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="section-label mb-6">{brand.tagline}</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-gradient">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-[var(--muted)]">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Partner With Us
            </Link>
            <Link href="/products" className="btn-outline">
              View Prototypes
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="section-label">Capabilities</p>
            <h2 className="mt-4 text-3xl font-bold">What We Engineer</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
              {brand.primaryStatement}
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <article key={cap.title} className="card-glow rounded-xl p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                  <span className="text-lg font-bold">{cap.title.charAt(0)}</span>
                </div>
                <h3 className="text-lg font-semibold">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {cap.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label">Prototype Portfolio</p>
              <h2 className="mt-4 text-3xl font-bold">Products &amp; Prototypes</h2>
            </div>
            <Link href="/products" className="btn-outline shrink-0 self-start lg:self-auto">
              Explore All Products
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <article key={product.name} className="card-glow rounded-xl p-6">
                <h3 className="font-semibold text-[var(--accent)]">{product.name}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="section-label">Industries</p>
          <h2 className="mt-4 text-3xl font-bold">Who We Serve</h2>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-2 text-sm text-[var(--muted)]"
              >
                {industry}
              </span>
            ))}
          </div>
          <Link href="/industries" className="btn-outline mt-10 inline-block">
            View Industries
          </Link>
        </div>
      </section>

      <section className="gradient-mesh border-t border-[var(--border)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Mission &amp; Vision</p>
          <blockquote className="mt-6 text-xl font-medium leading-relaxed">
            &ldquo;{brand.mission}&rdquo;
          </blockquote>
          <p className="mt-8 text-[var(--muted)]">{brand.vision}</p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {brand.taglines.map((tag) => (
              <span key={tag} className="text-sm italic text-[var(--accent)]/80">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--surface-elevated)] to-[var(--surface)] p-10 text-center lg:p-16">
          <h2 className="text-2xl font-bold sm:text-3xl">Build technologies that extend human capability.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]">
            At Flex Human, you won&apos;t optimize ad clicks. You&apos;ll help engineer systems that restore
            movement, improve comfort, augment human performance, and shape the future of human-machine
            interaction.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/careers" className="btn-primary">
              View Careers
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

