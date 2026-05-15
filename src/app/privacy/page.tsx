import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Flex Human LLC privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" />
      <article className="legal-prose mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p>
          At <strong>Flex Human LLC</strong>, we value your privacy and are committed to protecting the
          personal information you share with us. When you interact with our website, request consultations,
          purchase products, apply for careers, or communicate with our team, we may collect details such
          as your name, email, phone number, billing information, customization preferences, measurements for
          prosthetic or wearable solutions, and technical website usage data. This information helps us
          provide our services efficiently, improve user experience, process transactions, communicate
          important updates, and support research, innovation, and business operations.
        </p>
        <p>
          Flex Human LLC does <strong>not sell your personal information</strong> to third parties. We may
          share necessary data only with trusted service providers such as manufacturing partners, logistics
          providers, payment processors, clinical collaborators, or technology platforms that help us operate
          our business and deliver services. We use appropriate administrative and technical safeguards to
          protect your data; however, no digital system is completely risk-free. Where applicable, you may
          request access, updates, corrections, or deletion of your personal information by contacting us
          at{" "}
          <a href={`mailto:${brand.email}`} className="font-medium text-[var(--accent)] hover:underline">
            {brand.email}
          </a>
          . Continued use of our website or services indicates acceptance of this Privacy Policy and future
          updates.
        </p>
      </article>
    </>
  );
}
