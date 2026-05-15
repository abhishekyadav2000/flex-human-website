"use client";

import { contactInquiryTypes, talentInterests } from "@/lib/content";
import { useState } from "react";

type ContactFormProps = {
  variant?: "contact" | "talent";
};

export function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-glow rounded-xl p-8 text-center">
        <p className="text-lg font-semibold text-[var(--accent)]">Thank you for reaching out.</p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Our team will review your message and respond at admin@iflexhuman.com.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-glow space-y-6 rounded-xl p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">First Name</span>
          <input
            required
            type="text"
            name="firstName"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Last Name</span>
          <input
            required
            type="text"
            name="lastName"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium">Email</span>
        <input
          required
          type="email"
          name="email"
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
        />
      </label>

      {variant === "contact" ? (
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Inquiry Type</span>
          <select
            required
            name="inquiryType"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
          >
            <option value="">Select an option</option>
            {contactInquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Area of Interest</span>
          <select
            required
            name="interest"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
          >
            <option value="">Select an option</option>
            {talentInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </label>
      )}

      <label className="block">
        <span className="mb-2 block text-sm font-medium">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none"
        />
      </label>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        {variant === "talent" ? "Join Talent Community" : "Send Message"}
      </button>
    </form>
  );
}

