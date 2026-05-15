import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Flex Human for prototypes, collaboration, research, and careers.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Connect With Flex Human"
        description="Whether you're building robotics, exploring prosthetics, researching human augmentation, seeking strategic collaboration, or joining our mission—we're ready to connect."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Headquarters / Digital Presence</h2>
            <ul className="mt-6 space-y-4 text-[var(--muted)]">
              <li>
                <strong className="text-[var(--foreground)]">Flex Human LLC</strong>
              </li>
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
                <Link href={brand.social.linkedin} target="_blank" className="text-[var(--accent)] hover:underline">
                  Flex Human LinkedIn
                </Link>
              </li>
              <li>
                X / Twitter:{" "}
                <Link href={brand.social.twitter} target="_blank" className="text-[var(--accent)] hover:underline">
                  @FlexHuman_co
                </Link>
              </li>
              <li>
                Instagram:{" "}
                <Link href={brand.social.instagram} target="_blank" className="text-[var(--accent)] hover:underline">
                  @flexhumantech26
                </Link>
              </li>
            </ul>
            <div className="mt-10 card-glow rounded-xl p-6">
              <p className="text-sm font-semibold">Strategic Partnerships &amp; Investor Relations</p>
              <p className="mt-2 text-sm text-[var(--muted)]">
                For investor inquiries, contact {brand.email}
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
