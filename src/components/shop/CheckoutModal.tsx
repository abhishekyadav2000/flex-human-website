"use client";

import { brand } from "@/lib/content";
import { formatPrice, useCart } from "@/context/CartContext";
import { useState } from "react";

export function CheckoutModal() {
  const { checkoutOpen, closeCheckout, getLineItems, subtotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const lineItems = getLineItems();

  if (!checkoutOpen) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          address: data.get("address"),
          city: data.get("city"),
          state: data.get("state"),
          zip: data.get("zip"),
          notes: data.get("notes") || "",
          items: lineItems.map(({ product, quantity }) => ({
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity,
          })),
          subtotal,
        }),
      });

      const result = await res.json();
      if (!res.ok) {
        setError(result.error ?? "Failed to place order.");
        return;
      }

      setSuccess(true);
      clearCart();
      form.reset();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setSuccess(false);
    setError(null);
    closeCheckout();
  }

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close checkout"
        onClick={handleClose}
      />
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white shadow-2xl">
        <div className="sticky top-0 flex items-center justify-between border-b border-[#ddd] bg-white px-6 py-4">
          <h2 className="text-xl font-bold text-[#0f1111]">Place Your Order</h2>
          <button
            type="button"
            onClick={handleClose}
            className="rounded p-1 text-[#565959] hover:bg-[#f0f2f2]"
            aria-label="Close checkout modal"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {success ? (
          <div className="px-6 py-10 text-center">
            <p className="text-xl font-semibold text-[#007600]">Order placed successfully!</p>
            <p className="mt-3 text-sm text-[#565959]">
              Our team will contact you at your email to confirm fitting, customization, and delivery details.
            </p>
            <button type="button" onClick={handleClose} className="amazon-btn-cart mt-6">
              Continue Shopping
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6">
            {error && (
              <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
            )}

            <div className="rounded-lg border border-[#ddd] bg-[#f7fafa] p-4">
              <p className="text-sm font-semibold text-[#0f1111]">Order Summary</p>
              <ul className="mt-3 space-y-2 text-sm text-[#565959]">
                {lineItems.map(({ product, quantity, lineTotal }) => (
                  <li key={product.id} className="flex justify-between gap-4">
                    <span className="line-clamp-1">
                      {product.name} × {quantity}
                    </span>
                    <span className="shrink-0 font-medium text-[#0f1111]">{formatPrice(lineTotal)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex justify-between border-t border-[#ddd] pt-3 text-base font-bold text-[#b12704]">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1 block font-medium">First Name</span>
                <input required name="firstName" disabled={loading} className="amazon-input" />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium">Last Name</span>
                <input required name="lastName" disabled={loading} className="amazon-input" />
              </label>
            </div>

            <label className="block text-sm">
              <span className="mb-1 block font-medium">Email</span>
              <input required type="email" name="email" disabled={loading} className="amazon-input" />
            </label>

            <label className="block text-sm">
              <span className="mb-1 block font-medium">Phone</span>
              <input required type="tel" name="phone" disabled={loading} className="amazon-input" />
            </label>

            <label className="block text-sm">
              <span className="mb-1 block font-medium">Street Address</span>
              <input required name="address" disabled={loading} className="amazon-input" />
            </label>

            <div className="grid gap-4 sm:grid-cols-3">
              <label className="block text-sm sm:col-span-1">
                <span className="mb-1 block font-medium">City</span>
                <input required name="city" disabled={loading} className="amazon-input" />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium">State</span>
                <input required name="state" disabled={loading} className="amazon-input" />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block font-medium">ZIP</span>
                <input required name="zip" disabled={loading} className="amazon-input" />
              </label>
            </div>

            <label className="block text-sm">
              <span className="mb-1 block font-medium">Order Notes (optional)</span>
              <textarea
                name="notes"
                rows={3}
                disabled={loading}
                placeholder="Prosthetic sizing, customization preferences, or delivery instructions"
                className="amazon-input"
              />
            </label>

            <p className="text-xs text-[#565959]">
              Orders are reviewed by our team. Payment and fitting details will be confirmed via {brand.email}.
            </p>

            <button type="submit" disabled={loading || lineItems.length === 0} className="amazon-btn-buy w-full disabled:opacity-50">
              {loading ? "Placing Order…" : "Place Order"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
