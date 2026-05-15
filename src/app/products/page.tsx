import { PageHero } from "@/components/PageHero";
import { products } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Prototypes",
  description: "FlexSkin, FlexAssist, FlexForce, and custom prototype engineering.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Prototype Portfolio"
        title="Products & Prototypes"
        description="Concept-to-build engineering across synthetic interfaces, wearables, and AI-enabled workflows."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="card-glow rounded-xl p-8">
              <h2 className="text-lg font-semibold text-[var(--accent)]">{product.name}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{product.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
