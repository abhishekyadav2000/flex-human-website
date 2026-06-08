"use client";

import { brand } from "@/lib/content";
import { useState } from "react";

export function AppointmentForm() {
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
          phone: data.get("phone"),
          preferredDate: data.get("preferredDate"),
          preferredTime: data.get("preferredTime"),
          message: data.get("message") || "",
          variant: "appointment",
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
        <p className="text-lg font-semibold text-[var(--accent)]">Appointment request received.</p>
        <p className="mt-2 text-sm text-[var(--muted)]">
          We&apos;ll confirm your appointment at {brand.email} shortly.
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

      <label className="block">
        <span className="mb-2 block text-sm font-medium">Phone</span>
        <input
          required
          type="tel"
          name="phone"
          disabled={loading}
          className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
        />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Preferred Date</span>
          <input
            required
            type="date"
            name="preferredDate"
            disabled={loading}
            className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Preferred Time</span>
          <input
            required
            type="time"
            name="preferredTime"
            disabled={loading}
            className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium">Additional Notes</span>
        <textarea
          name="message"
          rows={4}
          disabled={loading}
          placeholder="Tell us what you'd like to discuss."
          className="w-full rounded-lg border border-[var(--border)] bg-white px-4 py-3 text-sm focus:border-[var(--accent)] focus:outline-none disabled:opacity-60"
        />
      </label>

      <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {loading ? "Submitting…" : "Request Appointment"}
      </button>
    </form>
  );
}
