/**
 * Shared shape for /research and /insights mosaic cards.
 * Edit arrays in `researchContent.ts` or `insightsContent.ts`.
 */
export type NewsMosaicItem = {
  id: string;
  title: string;
  /** Shown on card (e.g. "May 2026") */
  publishedAt: string;
  /** Card body copy (keep concise for the overlay layout) */
  summary: string;
  /** e.g. "Research paper", "News" — shown as a small pill on the card */
  kind?: string;
  /** Used in the "Sort by industry" dropdown (e.g. "Prosthetics", "AI systems") */
  industry?: string;
  /** If true, included in the default "Featured insights" filter */
  featured?: boolean;
  /** Full-bleed card image from /public (e.g. "/images/my-cover.jpg") */
  coverImage?: string;
  /** Primary "Learn more" target when set */
  learnMoreUrl?: string;
  externalUrl?: string;
  pdfUrl?: string;
};
