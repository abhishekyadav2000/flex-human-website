/**
 * Insights / News hub (/insights)
 *
 * Edit `insightStories` for blogs, announcements, and milestones.
 * Same fields as research mosaic — use `coverImage`, `industry`, `featured`, and link fields.
 */
import type { NewsMosaicItem } from "@/lib/newsMosaicTypes";

export type InsightItem = NewsMosaicItem;

export const insightStories: InsightItem[] = [
  {
    id: "i-milestone-lab",
    title: "From CAD to print: milestones in our rapid prototyping lab",
    publishedAt: "May 2026",
    summary:
      "What changed in our iteration loop this quarter—and how we are tightening partner feedback cycles.",
    kind: "Story",
    industry: "Company",
    featured: true,
    coverImage: "/flexskin-synthetic-interface.png",
    externalUrl: "https://www.linkedin.com/company/flex-human",
  },
  {
    id: "i-augmentation-future",
    title: "Why responsible augmentation is a product strategy, not a side project",
    publishedAt: "Apr 2026",
    summary:
      "Embedding safety, transparency, and clinical alignment early lets teams ship faster with confidence.",
    kind: "Perspective",
    industry: "Strategy",
    featured: true,
    coverImage: "/prosthetic-identity-wrap.png",
    learnMoreUrl: "/about",
  },
  {
    id: "i-hiring",
    title: "We are hiring: engineering roles across wearables and robotics",
    publishedAt: "Mar 2026",
    summary:
      "New roles in mechanical design, materials, and AI workflow—plus how to apply and what we look for.",
    kind: "News",
    industry: "Careers",
    featured: true,
    coverImage: "/flexforce-human-enhancement-assist.png",
    learnMoreUrl: "/careers",
  },
];
