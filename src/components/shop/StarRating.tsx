"use client";

import { useCart } from "@/context/CartContext";

export function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex text-[#ffa41c]" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => {
          const filled = index < fullStars || (index === fullStars && hasHalf);
          return (
            <svg key={index} className="h-4 w-4" viewBox="0 0 20 20" fill={filled ? "currentColor" : "none"} stroke="currentColor">
              <path
                strokeWidth={filled ? 0 : 1.2}
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          );
        })}
      </div>
      <a href="#reviews" className="text-sm text-[#007185] hover:text-[#c7511f] hover:underline">
        {reviewCount.toLocaleString()}
      </a>
    </div>
  );
}

export function CartIconButton({ className = "" }: { className?: string }) {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      className={`relative flex items-center gap-1 rounded-md px-2 py-1.5 transition hover:bg-black/5 ${className}`}
      aria-label={`Open cart, ${itemCount} items`}
    >
      <svg className="h-8 w-8 text-[#0f1111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h9.75M7.5 14.25L5.106 5.272M7.5 14.25l-2.086 9.048M16.5 14.25l2.086 9.048M16.5 14.25V18a2.25 2.25 0 01-2.25 2.25H9.75A2.25 2.25 0 017.5 18v-3.75" />
      </svg>
      <span className="hidden text-sm font-semibold text-[#0f1111] sm:inline">Cart</span>
      {itemCount > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f08804] px-1 text-[11px] font-bold text-white">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </button>
  );
}
