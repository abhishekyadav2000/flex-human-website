import { PageHero } from "@/components/PageHero";
import { industries } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description: "Serving robotics, prosthetics, healthcare, defense, research, and human augmentation.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries Served"
        title="Human Augmentation Across Sectors"
        description="We partner with organizations advancing robotics, rehabilitation, workforce enhancement, and assistive technology."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="card-glow flex items-center rounded-xl px-6 py-5 text-center font-medium"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
