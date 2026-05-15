import { PageHero } from "@/components/PageHero";
import { products } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Products & Prototypes",
  description: "FlexSkin, FlexAssist, FlexForce, and custom prototype engineering.",
};

const productsHeroTitle =
  "Engineering Human Augmentation for the Next Generation of Robotics, Prosthetics & Intelligent Wearables";

export default function ProductsPage() {
  return (
    <>
      <PageHero label="Flex Human LLC" title={productsHeroTitle} />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Products &amp; Prototypes</h2>
          <p className="mx-auto -mt-8 mb-12 max-w-2xl text-center text-[var(--muted)]">
            Concept-to-build engineering across synthetic interfaces, wearables, and AI-enabled workflows.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="card-glow overflow-hidden rounded-xl p-8">
                {product.image && (
                  <div className="relative -mx-8 -mt-8 mb-6 aspect-[4/3] w-[calc(100%+4rem)] border-b border-[var(--border)] bg-[var(--surface-elevated)]">
                    <Image
                      src={product.image}
                      alt={product.imageAlt ?? product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-[var(--accent)]">{product.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">{product.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
