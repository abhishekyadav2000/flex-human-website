/**
 * Research & Innovation hub (/research)
 *
 * Edit `researchPublications` to add papers, lab notes, and stories.
 * - `coverImage`: path under /public for the card photo (e.g. "/research/cover-lab.jpg").
 * - `industry`: drives the "Sort by industry" dropdown.
 * - `featured: true`: shows in the default "Featured insights" view.
 * - Links: set `learnMoreUrl`, or `externalUrl`, or `pdfUrl` (PDF opens in a new tab).
 */
import type { NewsMosaicItem } from "@/lib/newsMosaicTypes";

export type ResearchItem = NewsMosaicItem;

export const researchPublications: ResearchItem[] = [
  {
    id: "r-skin-materials",
    title: "Synthetic interface layers for durable prosthetic wear",
    publishedAt: "May 2026",
    summary:
      "How we stack compliant materials for comfort, signal-ready surfaces, and repeatable manufacturing paths.",
    kind: "Lab note",
    industry: "Materials",
    featured: true,
    coverImage: "/flexskin-synthetic-interface.png",
    pdfUrl: "/brochure.pdf",
  },
  {
    id: "r-wrap-identity",
    title: "Identity wraps: comfort, dignity, and personalization at scale",
    publishedAt: "May 2026",
    summary:
      "Designing wrap systems that balance aesthetics, clinical fit checks, and rapid iteration with partners.",
    kind: "Research brief",
    industry: "Prosthetics",
    featured: true,
    coverImage: "/prosthetic-identity-wrap.png",
    learnMoreUrl: "/products",
  },
  {
    id: "r-wearable-assist",
    title: "Wearable assist concepts for industrial movement support",
    publishedAt: "Apr 2026",
    summary:
      "Early exploration of force paths, fatigue reduction, and human-in-the-loop validation for augmentation wearables.",
    kind: "Prototype report",
    industry: "Wearables",
    featured: true,
    coverImage: "/flexforce-human-enhancement-assist.png",
    externalUrl: "https://www.linkedin.com/company/flex-human",
  },
];
