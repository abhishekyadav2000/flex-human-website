import Link from "next/link";
import { brand } from "@/lib/content";

export function TopBar() {
  return (
    <div className="border-b border-[var(--border)] bg-[#03060c]/90 text-xs text-[var(--muted)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
        <p className="max-w-2xl leading-snug">
          Engineering Human Augmentation for the Next Generation of Robotics,
          Prosthetics &amp; Intelligent Wearables
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <Link
            href={brand.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            LinkedIn
          </Link>
          <Link
            href={brand.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            X
          </Link>
          <Link
            href={brand.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent)]"
          >
            Instagram
          </Link>
          <Link
            href="/contact"
            className="font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-glow)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
