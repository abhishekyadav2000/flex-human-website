import { brand } from "@/lib/content";
import { SocialIcons } from "./SocialIcons";

export function TopBar() {
  return (
    <div className="border-b border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--muted)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <p className="max-w-3xl rounded-md border-l-4 border-[var(--accent)] bg-blue-50/80 px-3 py-1.5 text-sm font-semibold leading-snug text-black">
          Engineering Human Augmentation for the Next Generation of Robotics,
          Prosthetics &amp; Intelligent Wearables
        </p>
        <SocialIcons
          linkedin={brand.social.linkedin}
          twitter={brand.social.twitter}
          instagram={brand.social.instagram}
          contactHref="/contact"
        />
      </div>
    </div>
  );
}
