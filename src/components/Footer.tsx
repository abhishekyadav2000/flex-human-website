import Link from "next/link";
import { brand, footerCompany, footerSolutions, legalLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#03060c]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold tracking-wide">FLEX HUMAN LLC</p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              Engineering Human Augmentation, Robotics, Prosthetics, and Wearable Intelligence.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              We build human-centered technologies across prosthetics, synthetic skin systems, wearable
              engineering, robotics materials, AI-enabled workflows, and advanced augmentation systems.
            </p>
          </div>

          <div>
            <p className="section-label mb-4">Solutions</p>
            <ul className="space-y-2">
              {footerSolutions.map((item) => (
                <li key={item}>
                  <Link
                    href="/solutions"
                    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-4">Company</p>
            <ul className="space-y-2">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li>
                Email:{" "}
                <a href={`mailto:${brand.email}`} className="text-[var(--accent)] hover:underline">
                  {brand.email}
                </a>
              </li>
              <li>
                Website:{" "}
                <a href={brand.website} className="text-[var(--accent)] hover:underline">
                  www.iflexhuman.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href={brand.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  Flex Human LinkedIn
                </a>
              </li>
              <li>
                X / Twitter:{" "}
                <a
                  href={brand.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  @FlexHuman_co
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  @flexhumantech26
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--muted)]">
            © 2026 Flex Human LLC. All rights reserved. Registered in Texas, United States. Texas File
            Number: {brand.texasFileNumber}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[var(--muted)] hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
