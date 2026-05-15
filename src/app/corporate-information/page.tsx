import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Information",
  description: "Legal entity information for Flex Human LLC, registered in Texas, USA.",
};

export default function CorporateInformationPage() {
  return (
    <>
      <PageHero
        label="Corporate"
        title="Corporate Information"
        description="Official registration and legal entity details for Flex Human LLC."
      />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl card-glow rounded-xl p-8 space-y-6">
          <div>
            <p className="text-sm text-[var(--muted)]">Legal Entity Name</p>
            <p className="mt-1 font-semibold">{brand.name}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--muted)]">Entity Type</p>
            <p className="mt-1 font-semibold">Limited Liability Company (LLC)</p>
          </div>
          <div>
            <p className="text-sm text-[var(--muted)]">Jurisdiction</p>
            <p className="mt-1 font-semibold">Texas, United States</p>
          </div>
          <div>
            <p className="text-sm text-[var(--muted)]">Texas File Number</p>
            <p className="mt-1 font-semibold">{brand.texasFileNumber}</p>
          </div>
          <div>
            <p className="text-sm text-[var(--muted)]">Contact Email</p>
            <a href={`mailto:${brand.email}`} className="mt-1 block font-semibold text-[var(--accent)]">
              {brand.email}
            </a>
          </div>
          <div>
            <p className="text-sm text-[var(--muted)]">Website</p>
            <a href={brand.website} className="mt-1 block font-semibold text-[var(--accent)]">
              {brand.website}
            </a>
          </div>
          <p className="pt-4 text-sm text-[var(--muted)] border-t border-[var(--border)]">
            A registered limited liability company organized under the laws of the State of Texas, United
            States.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl space-y-8 text-sm text-[var(--muted)]">
          <article id="privacy">
            <h2 className="text-lg font-semibold text-white">Privacy Policy</h2>
            <p className="mt-2">Privacy policy content will be published here. Contact {brand.email} for inquiries.</p>
          </article>
          <article id="terms">
            <h2 className="text-lg font-semibold text-white">Terms of Use</h2>
            <p className="mt-2">Terms of use content will be published here.</p>
          </article>
          <article id="accessibility">
            <h2 className="text-lg font-semibold text-white">Accessibility</h2>
            <p className="mt-2">We are committed to making our website accessible to all users.</p>
          </article>
          <article id="cookies">
            <h2 className="text-lg font-semibold text-white">Cookie Policy</h2>
            <p className="mt-2">Cookie policy content will be published here.</p>
          </article>
          <article id="vendor">
            <h2 className="text-lg font-semibold text-white">Vendor Terms</h2>
            <p className="mt-2">Vendor terms content will be published here.</p>
          </article>
          <article id="research-terms">
            <h2 className="text-lg font-semibold text-white">Research Collaboration Terms</h2>
            <p className="mt-2">Research collaboration terms content will be published here.</p>
          </article>
        </div>
      </section>
    </>
  );
}
