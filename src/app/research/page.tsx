import { NewsMosaic } from "@/components/newsroom/NewsMosaic";
import { brand } from "@/lib/content";
import { researchPublications } from "@/lib/researchContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Innovation",
  description: `${brand.name} R&D — prosthetics, robotics, synthetic materials, and AI-enabled engineering.`,
};

export default function ResearchPage() {
  return (
    <NewsMosaic
      pageTitle="Research & innovation"
      intro="Publications, lab notes, and technical updates from our R&D work—prosthetics, robotics, synthetic materials, and AI-enabled engineering for systems that restore and extend human capability."
      items={researchPublications}
      contentFileLabel="src/lib/researchContent.ts"
    />
  );
}
