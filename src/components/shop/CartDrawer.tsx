"use client";

import { formatPrice, useCart } from "@/context/CartContext";
import Image from "next/image";

export function CartDrawer() {
  const {
    cartOpen,
    closeCart,
    getLineItems,
    subtotal,
    updateQuantity,
    removeFromCart,
    openCheckout,
  } = useCart();

  const lineItems = getLineItems();

  if (!cartOpen) return null;

  return (
    <div className="fixed inset-0 z-[120]">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#ddd] px-5 py-4">
          <h2 className="text-xl font-bold text-[#0f1111]">Shopping Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="rounded p-1 text-[#565959] hover:bg-[#f0f2f2]"
            aria-label="Close cart panel"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {lineItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <svg className="h-16 w-16 text-[#565959]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h9.75M7.5 14.25L5.106 5.272M7.5 14.25l-2.086 9.048M16.5 14.25l2.086 9.048M16.5 14.25V18a2.25 2.25 0 01-2.25 2.25H9.75A2.25 2.25 0 017.5 18v-3.75" />
            </svg>
            <p className="mt-4 text-lg font-semibold text-[#0f1111]">Your cart is empty</p>
            <p className="mt-2 text-sm text-[#565959]">Add prosthetics and products to get started.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-4">
                {lineItems.map(({ product, quantity, lineTotal }) => (
                  <li key={product.id} className="flex gap-3 border-b border-[#eee] pb-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded bg-[#f7fafa]">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.imageAlt ?? product.name}
                          fill
                          className="object-contain p-1"
                          sizes="80px"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[10px] text-[#565959]">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-medium text-[#0f1111]">{product.name}</p>
                      <p className="mt-1 text-sm font-semibold text-[#b12704]">{formatPrice(lineTotal)}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <label className="text-xs text-[#565959]">
                          Qty
                          <select
                            value={quantity}
                            onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
                            className="ml-1 rounded border border-[#888c8c] px-1 py-0.5 text-xs"
                          >
                            {Array.from({ length: 10 }).map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </label>
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                          className="text-xs text-[#007185] hover:text-[#c7511f] hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-[#ddd] bg-[#f0f2f2] px-5 py-4">
              <div className="flex items-center justify-between text-lg">
                <span className="text-[#0f1111]">Subtotal ({lineItems.reduce((n, i) => n + i.quantity, 0)} items):</span>
                <span className="font-bold text-[#b12704]">{formatPrice(subtotal)}</span>
              </div>
              <button
                type="button"
                onClick={openCheckout}
                className="amazon-btn-cart mt-4 w-full"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
