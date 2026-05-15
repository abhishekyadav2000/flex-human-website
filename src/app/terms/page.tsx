import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Flex Human LLC website, services, and products.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms & Conditions" />
      <article className="legal-prose mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p>
          By accessing or using the Flex Human LLC website, services, products, consultations, recruitment
          portal, or digital platforms, you agree to comply with these Terms &amp; Conditions. These terms
          apply to all visitors, customers, applicants, partners, and users interacting with Flex Human LLC.
          If you do not agree with any part of these terms, please discontinue use of our website and
          services.
        </p>
        <p>
          Flex Human LLC provides services including human augmentation solutions, prosthetic customization,
          wearable technology, 3D-printed products, research and development initiatives, consultations, and
          related digital or physical offerings. Product availability, specifications, customization options,
          and pricing may change without prior notice. We reserve the right to refuse service, cancel orders,
          or limit access where necessary for business, operational, or legal reasons.
        </p>
        <p>
          Users agree to provide accurate and complete information when submitting forms, placing orders,
          requesting consultations, or applying for opportunities through our platform. You may not misuse
          the website, attempt unauthorized access, distribute harmful software, copy proprietary materials,
          or use our systems for unlawful or disruptive activities. All intellectual property, branding,
          designs, and content associated with Flex Human LLC remain protected and may not be reused without
          written permission.
        </p>
        <p>
          While Flex Human LLC aims to provide reliable information, secure systems, and high-quality
          services, we do not guarantee uninterrupted website availability, error-free operation, or outcomes
          beyond reasonable control. Certain services may involve third-party vendors, manufacturing partners,
          logistics providers, or technology platforms, for which separate terms may apply. Flex Human LLC
          shall not be liable for indirect, incidental, or consequential damages arising from use of our
          services where permitted by law.
        </p>
        <p>
          Flex Human LLC may update these Terms &amp; Conditions at any time by publishing revised versions on
          our website. Continued use of our services after updates indicates acceptance of the revised terms.
          Any disputes, claims, or legal matters related to these services shall be governed by the laws of
          the State of Texas, United States. For questions regarding these terms, please contact{" "}
          <a href={`mailto:${brand.email}`} className="font-medium text-[var(--accent)] hover:underline">
            {brand.email}
          </a>
          .
        </p>
      </article>
    </>
  );
}
