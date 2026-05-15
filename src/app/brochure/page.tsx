import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { brand } from "@/lib/content";

const BROCHURE_PDF = "/brochure.pdf";

export const metadata: Metadata = {
  title: "Brochure",
  description: `${brand.name} corporate brochure.`,
};

export default function BrochurePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-[var(--border)] bg-gradient-to-b from-[#f8fafc] to-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link href="/" className="inline-block">
              <Image
                src="/flex-human-logo.png"
                alt={brand.name}
                width={240}
                height={88}
                className="logo"
                priority
              />
            </Link>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Brochure</p>
              <h1 className="mt-1 text-xl font-bold tracking-tight text-[#0c1e3f] md:text-2xl">{brand.tagline}</h1>
              <p className="sr-only">
                Embedded PDF brochure. Use the download link if the preview does not load in your browser.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={BROCHURE_PDF}
              download="Flex-Human-brochure.pdf"
              className="btn-primary inline-flex items-center justify-center"
            >
              Download PDF
            </a>
            <Link href="/contact" className="btn-outline inline-flex items-center justify-center">
              Contact
            </Link>
            <a
              href={BROCHURE_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-semibold text-[#0c1e3f] shadow-sm transition-colors hover:bg-slate-50"
            >
              Open in new tab
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex min-h-[min(85vh,900px)] flex-1 flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-slate-100 shadow-inner">
          <iframe
            title="Flex Human corporate brochure PDF"
            src={`${BROCHURE_PDF}#view=FitH`}
            className="h-full min-h-[min(85vh,900px)] w-full flex-1 border-0 bg-white"
          />
        </div>
        <p className="mt-4 text-center text-sm text-[var(--muted)]">
          If the brochure does not appear above,{" "}
          <a href={BROCHURE_PDF} className="font-semibold text-[var(--accent)] underline underline-offset-2 hover:no-underline">
            open or download the PDF
          </a>
          .
        </p>
      </main>
    </div>
  );
}
