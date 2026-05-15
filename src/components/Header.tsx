"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/careers", label: "Careers" },
  { href: "/brochure", label: "Brochure" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/flex-human-logo.png"
            alt="Flex Human LLC"
            width={240}
            height={86}
            className="logo object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex lg:gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black transition-colors hover:text-[var(--accent)] xl:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Link href="/contact" className="btn-primary whitespace-nowrap text-sm xl:text-base">
            Partner With Us
          </Link>
        </div>

        <button
          type="button"
          className="shrink-0 text-[var(--muted)] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-[var(--border)] px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-base font-medium text-black hover:text-[var(--accent)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4 block text-center" onClick={() => setOpen(false)}>
            Partner With Us
          </Link>
        </nav>
      )}
    </header>
  );
}
