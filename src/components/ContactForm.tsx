"use client";

import { brand, contactInquiryTypes, talentInterests } from "@/lib/content";
import { useState } from "react";

type ContactFormProps = {
  variant?: "contact" | "talent";
};

export function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          message: data.get("message"),
          inquiryType: data.get("inquiryType") || undefined,
          interest: data.get("interest") || undefined,
          variant,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error ?? "Failed to send. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Network error. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-glow rounded-xl p-8 text-center">
        <p className="text-lg font-semibold text-[var(--accent)]">Thank you for reaching out.</p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Your message was sent to {brand.email}. Our team will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-glow space-y-6 rounded-xl p-8">
      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">First Name</span>
          <input
            required
            type="text"
            name="firstName"
            disabled={loading}
            className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Last Name</span>
          <input
            required
            type="text"
            name="lastName"
            disabled={loading}
            className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium">Email</span>
        <input
          required
          type="email"
          name="email"
          disabled={loading}
          className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
        />
      </label>

      {variant === "contact" ? (
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Inquiry Type</span>
          <select
            required
            name="inquiryType"
            disabled={loading}
            className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
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
            disabled={loading}
            className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
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
          disabled={loading}
          className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
        />
      </label>

      <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {loading ? "Sending…" : variant === "talent" ? "Join Talent Community" : "Send Message"}
      </button>
    </form>
  );
}

