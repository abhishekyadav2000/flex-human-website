import { PageHero } from "@/components/PageHero";
import { capabilities } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Human augmentation systems, synthetic skin, prosthetics, robotics, and AI engineering.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Engineering the Future of Human Augmentation"
        description="End-to-end capabilities from concept to prototype to custom R&D collaboration."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-2">
          {capabilities.map((cap) => (
            <article key={cap.title} className="card-glow rounded-xl p-8">
              <h2 className="text-xl font-semibold text-[var(--accent)]">{cap.title}</h2>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">{cap.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
