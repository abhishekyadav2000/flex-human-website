"use client";

import type { NewsMosaicItem } from "@/lib/newsMosaicTypes";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";

function resolveLearnMoreHref(item: NewsMosaicItem): string | null {
  return item.learnMoreUrl ?? item.externalUrl ?? item.pdfUrl ?? null;
}

type NewsMosaicProps = {
  pageTitle: string;
  intro: string;
  items: NewsMosaicItem[];
  /** Label before the dropdown (default matches reference style) */
  filterLabel?: string;
  /** Optional row under intro (e.g. social links) */
  topSlot?: ReactNode;
  /** File path hint for editors */
  contentFileLabel: string;
};

export function NewsMosaic({
  pageTitle,
  intro,
  items,
  filterLabel = "Sort by industry:",
  topSlot,
  contentFileLabel,
}: NewsMosaicProps) {
  const industryOptions = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => {
      if (i.industry?.trim()) set.add(i.industry.trim());
    });
    return ["Featured insights", "All industries", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, [items]);

  const [filter, setFilter] = useState("Featured insights");

  const filtered = useMemo(() => {
    if (filter === "All industries") return items;
    if (filter === "Featured insights") {
      const featured = items.filter((i) => i.featured);
      return featured.length ? featured : items;
    }
    return items.filter((i) => (i.industry ?? "").trim() === filter);
  }, [items, filter]);

  return (
    <div className="min-h-screen bg-[#0b0e14] text-white">
      <header className="border-b border-white/10 px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/90">Flex Human</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            {pageTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">{intro}</p>
          {topSlot && <div className="mt-8">{topSlot}</div>}

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <label htmlFor="mosaic-filter" className="text-sm font-semibold text-white sm:shrink-0">
              {filterLabel}
            </label>
            <div className="relative max-w-md sm:min-w-[280px]">
              <select
                id="mosaic-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full appearance-none rounded-lg border border-white/20 bg-[#151a24] py-3 pl-4 pr-10 text-sm font-medium text-white outline-none ring-offset-2 ring-offset-[#0b0e14] focus:ring-2 focus:ring-blue-500"
              >
                {industryOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-[#151a24] text-white">
                    {opt}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {filtered.length === 0 ? (
            <p className="rounded-xl border border-dashed border-white/20 bg-white/[0.03] p-12 text-center text-slate-400">
              No items match this filter. Try &quot;All industries&quot; or add entries in{" "}
              <code className="text-slate-200">{contentFileLabel}</code>.
            </p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => {
                const href = resolveLearnMoreHref(item);
                const openInNewTab = Boolean(
                  href && (href.startsWith("http") || href.toLowerCase().endsWith(".pdf")),
                );
                return (
                  <li key={item.id} className="group relative">
                    <article className="relative flex min-h-[380px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#121722] shadow-lg transition hover:border-white/25 hover:shadow-2xl sm:min-h-[420px]">
                      <div className="absolute inset-0">
                        {item.coverImage ? (
                          <Image
                            src={item.coverImage}
                            alt={item.title}
                            fill
                            className="object-cover transition duration-500 group-hover:scale-[1.03]"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div
                            className="h-full w-full bg-gradient-to-br from-slate-700 via-slate-900 to-black"
                            aria-hidden
                          />
                        )}
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20"
                          aria-hidden
                        />
                      </div>

                      <div className="relative z-[1] mt-auto flex flex-col p-6 sm:p-7">
                        <div className="mb-3 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white/90">
                          {item.kind && (
                            <span className="rounded-full bg-white/15 px-2.5 py-1 backdrop-blur-sm">{item.kind}</span>
                          )}
                          <span className="text-white/70">{item.publishedAt}</span>
                          {item.industry && (
                            <span className="text-white/60">· {item.industry}</span>
                          )}
                        </div>
                        <h2 className="text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
                          {item.title}
                        </h2>
                        <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-white/85">{item.summary}</p>
                        {href ? (
                          openInNewTab ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-6 inline-flex w-fit items-center justify-center rounded border border-white px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0b0e14]"
                            >
                              Learn more
                            </a>
                          ) : (
                            <Link
                              href={href}
                              className="mt-6 inline-flex w-fit items-center justify-center rounded border border-white px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0b0e14]"
                            >
                              Learn more
                            </Link>
                          )
                        ) : (
                          <span className="mt-6 inline-flex w-fit cursor-not-allowed rounded border border-white/30 px-5 py-2.5 text-sm font-semibold text-white/50">
                            Learn more
                          </span>
                        )}
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          )}

          <p className="mt-16 max-w-2xl text-sm leading-relaxed text-slate-500">
            To edit cards, update{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-slate-200">{contentFileLabel}</code>.
            Add <code className="text-xs text-slate-300">coverImage</code>, <code className="text-xs text-slate-300">industry</code>,{" "}
            <code className="text-xs text-slate-300">featured</code>, and a link field (
            <code className="text-xs text-slate-300">learnMoreUrl</code>, <code className="text-xs text-slate-300">externalUrl</code>, or{" "}
            <code className="text-xs text-slate-300">pdfUrl</code>). Put images and PDFs in{" "}
            <code className="text-xs text-slate-300">public/</code>.
          </p>

          <p className="mt-8 text-center text-sm text-slate-500">
            <Link href="/about" className="font-semibold text-blue-400 hover:text-blue-300 hover:underline">
              ← Back to About
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
