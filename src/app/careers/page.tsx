import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { brand, careerCategories } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build technologies that extend human capability. Join Flex Human LLC.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        label="Careers"
        title="Build technologies that extend human capability."
        description="At Flex Human, you won't optimize ad clicks. You'll help engineer systems that restore movement, improve comfort, augment human performance, and shape the future of human-machine interaction. This is a company for builders, thinkers, researchers, designers, engineers, and operators."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">
          {careerCategories.map((category) => (
            <article key={category.name}>
              <h2 className="text-2xl font-bold text-[var(--accent)]">{category.name}</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.roles.map((role) => (
                  <li
                    key={role}
                    className="card-glow rounded-lg px-4 py-3 text-sm text-[var(--muted)]"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--surface)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Join Flex Human</h2>
          <p className="mt-4 text-[var(--muted)]">
            Follow our journey as we engineer the future of human-centered technology.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={brand.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Follow on LinkedIn
            </Link>
            <Link href={brand.social.twitter} target="_blank" rel="noopener noreferrer" className="btn-outline">
              View X Updates
            </Link>
            <Link href={brand.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline">
              Explore Instagram
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8" id="talent">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-8 text-center text-2xl font-bold">Join Talent Community</h2>
          <ContactForm variant="talent" />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8" id="policy">
        <p className="mx-auto max-w-3xl text-center text-xs text-[var(--muted)]">
          Flex Human LLC is a legally registered Texas limited liability company and an equal opportunity
          employer. Texas File Number: {brand.texasFileNumber}
        </p>
      </section>
    </>
  );
}
