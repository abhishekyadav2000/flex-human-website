import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/content";
import Link from "next/link";
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
          <article id="research" className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <Link href="/research" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold text-[#0f172a] group-hover:text-[var(--accent)]">
                  Research &amp; Innovation
                </h2>
                <span className="shrink-0 text-sm font-semibold text-[var(--accent)] group-hover:underline">Open</span>
              </div>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Flex Human operates at the intersection of prosthetics, robotics, synthetic materials, and
                AI-enabled engineering. Our R&amp;D lab focuses on rapid prototyping, materials science, and
                human-centered design for augmentation systems that restore and extend capability.
              </p>
              <p className="mt-3 text-sm font-medium text-[var(--accent)]">View papers, PDFs, and lab updates →</p>
            </Link>
          </article>
          <article id="insights" className="rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <Link href="/insights" className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-bold text-[#0f172a] group-hover:text-[var(--accent)]">
                  Insights / News
                </h2>
                <span className="shrink-0 text-sm font-semibold text-[var(--accent)] group-hover:underline">Open</span>
              </div>
              <p className="mt-4 leading-relaxed text-[var(--muted)]">
                Follow our journey on LinkedIn, X, and Instagram as we share product development milestones,
                research updates, and hiring campaigns — and read longer stories on our insights hub.
              </p>
              <p className="mt-3 text-sm font-medium text-[var(--accent)]">View blogs, news, and announcements →</p>
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
