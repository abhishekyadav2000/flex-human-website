"use client";

import { formatPrice, useCart } from "@/context/CartContext";
import type { ProductEntry } from "@/lib/content";
import Image from "next/image";
import { StarRating } from "./StarRating";

type ProductCardProps = {
  product: ProductEntry;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, buyNow } = useCart();

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[#ddd] bg-white p-4 shadow-sm">
      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-md bg-[#f7fafa]">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.imageAlt ?? product.name}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[#565959]">
            Product image
          </div>
        )}
        {product.badge && (
          <span className="absolute left-2 top-2 rounded bg-[#cc0c39] px-2 py-0.5 text-xs font-bold text-white">
            {product.badge}
          </span>
        )}
      </div>

      <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-medium leading-snug text-[#0f1111] hover:text-[#c7511f]">
        {product.name}
      </h3>

      <div className="mt-2">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} />
      </div>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-2xl font-normal text-[#0f1111]">{formatPrice(product.price)}</span>
        {product.listPrice && product.listPrice > product.price && (
          <span className="pb-0.5 text-sm text-[#565959] line-through">
            {formatPrice(product.listPrice)}
          </span>
        )}
      </div>

      {product.inStock ? (
        <p className="mt-1 text-xs font-semibold text-[#007600]">In Stock</p>
      ) : (
        <p className="mt-1 text-xs font-semibold text-[#b12704]">Currently unavailable</p>
      )}

      <p className="mt-2 line-clamp-2 text-xs text-[#565959]">{product.description}</p>

      <ul className="mt-3 space-y-1 text-xs text-[#565959]">
        {product.features.slice(0, 2).map((feature) => (
          <li key={feature} className="flex gap-1.5">
            <span className="text-[#007600]">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto space-y-2 pt-4">
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => addToCart(product.id)}
          className="amazon-btn-cart w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add to Cart
        </button>
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => buyNow(product.id)}
          className="amazon-btn-buy w-full disabled:cursor-not-allowed disabled:opacity-50"
        >
          Buy Now
        </button>
      </div>
    </article>
  );
}
