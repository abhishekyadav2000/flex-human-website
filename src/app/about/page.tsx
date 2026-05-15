import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: brand.executiveStatement,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Flex Human"
        title="Human Capability, Reengineered."
        description={brand.executiveStatement}
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          <article>
            <h2 className="text-2xl font-bold">Mission</h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">{brand.mission}</p>
          </article>
          <article>
            <h2 className="text-2xl font-bold">Vision</h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">{brand.vision}</p>
          </article>
          <article id="research">
            <h2 className="text-2xl font-bold">Research &amp; Innovation</h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              Flex Human operates at the intersection of prosthetics, robotics, synthetic materials, and
              AI-enabled engineering. Our R&amp;D lab focuses on rapid prototyping, materials science, and
              human-centered design for augmentation systems that restore and extend capability.
            </p>
          </article>
          <article id="insights">
            <h2 className="text-2xl font-bold">Insights / News</h2>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">
              Follow our journey on LinkedIn, X, and Instagram as we share product development milestones,
              research updates, and hiring campaigns.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
