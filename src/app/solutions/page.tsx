import { PageHero } from "@/components/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

const SOLUTIONS_PDF = "/flex-human-solutions.pdf";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Flex Human solutions overview — human augmentation, robotics, prosthetics, and intelligent wearables.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Engineering the Future of Human Augmentation"
        description="Full solutions overview in the document below. Download or open in a new tab if the preview does not load in your browser."
      />
      <section className="border-t border-[var(--border)] bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col">
          <div className="flex flex-wrap justify-center gap-3 sm:justify-end">
            <a
              href={SOLUTIONS_PDF}
              download="Flex-Human-solutions.pdf"
              className="btn-primary inline-flex items-center justify-center"
            >
              Download PDF
            </a>
            <Link href="/contact" className="btn-outline inline-flex items-center justify-center">
              Contact
            </Link>
            <a
              href={SOLUTIONS_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-semibold text-[#0c1e3f] shadow-sm transition-colors hover:bg-slate-50"
            >
              Open in new tab
            </a>
          </div>

          <div className="mt-6 flex min-h-[min(85vh,900px)] flex-1 flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-slate-100 shadow-inner">
            <iframe
              title="Flex Human solutions overview PDF"
              src={`${SOLUTIONS_PDF}#view=FitH`}
              className="h-full min-h-[min(85vh,900px)] w-full flex-1 border-0 bg-white"
            />
          </div>
          <p className="mt-4 text-center text-sm text-[var(--muted)]">
            If the document does not appear above,{" "}
            <a
              href={SOLUTIONS_PDF}
              className="font-semibold text-[var(--accent)] underline underline-offset-2 hover:no-underline"
            >
              open or download the PDF
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
