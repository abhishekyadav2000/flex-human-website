import { NewsMosaic } from "@/components/newsroom/NewsMosaic";
import { brand } from "@/lib/content";
import { insightStories } from "@/lib/insightsContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & News",
  description: `Stories, milestones, and updates from ${brand.name}.`,
};

function SocialRow() {
  return (
    <div className="flex flex-wrap gap-6 text-sm font-semibold">
      <a
        href={brand.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-white hover:underline"
      >
        LinkedIn
      </a>
      <a
        href={brand.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-white hover:underline"
      >
        X
      </a>
      <a
        href={brand.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:text-white hover:underline"
      >
        Instagram
      </a>
    </div>
  );
}

export default function InsightsPage() {
  return (
    <NewsMosaic
      pageTitle="Industry insights"
      intro="Stories, milestones, and product updates from Flex Human—plus day-to-day highlights we share across our social channels."
      items={insightStories}
      topSlot={<SocialRow />}
      contentFileLabel="src/lib/insightsContent.ts"
    />
  );
}
