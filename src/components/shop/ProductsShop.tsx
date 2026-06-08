"use client";

import { productCategories, products } from "@/lib/content";
import { useMemo, useState } from "react";
import { CartIconButton } from "./StarRating";
import { ProductCard } from "./ProductCard";

export function ProductsShop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof productCategories)[number]>("All");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc" | "rating">("featured");

  const filteredProducts = useMemo(() => {
    let list = products.filter((product) => product.purchasable);

    if (category !== "All") {
      list = list.filter((product) => product.category === category);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q),
      );
    }

    switch (sort) {
      case "price-asc":
        return [...list].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...list].sort((a, b) => b.price - a.price);
      case "rating":
        return [...list].sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [category, query, sort]);

  return (
    <div className="amazon-shop min-h-screen bg-[#eaeded]">
      <div className="border-b border-[#232f3e] bg-[#131921] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="text-sm">
            <span className="text-[#ccc]">Deliver to</span>
            <p className="font-semibold">United States</p>
          </div>
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex w-full overflow-hidden rounded-md">
              <select
                aria-label="Search category"
                value={category}
                onChange={(e) => setCategory(e.target.value as (typeof productCategories)[number])}
                className="hidden bg-[#f3f3f3] px-3 py-2.5 text-sm text-[#0f1111] sm:block"
              >
                {productCategories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search prosthetics, wearables, and augmentation products"
                className="min-w-0 flex-1 px-4 py-2.5 text-sm text-[#0f1111] outline-none"
              />
              <button
                type="button"
                className="bg-[#febd69] px-5 py-2.5 text-[#0f1111] hover:bg-[#f3a847]"
                aria-label="Search products"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          <CartIconButton className="text-white hover:bg-white/10 [&_svg]:text-white [&_span]:text-white" />
        </div>
      </div>

      <div className="border-b border-[#ddd] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-2 text-sm text-[#0f1111] sm:px-6 lg:px-8">
          <span className="font-semibold">Shop by Category:</span>
          {productCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-3 py-1 transition ${
                category === item
                  ? "bg-[#232f3e] text-white"
                  : "bg-[#f0f2f2] text-[#0f1111] hover:bg-[#e3e6e6]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[220px_1fr] lg:px-8">
        <aside className="hidden h-fit rounded-lg border border-[#ddd] bg-white p-4 lg:block">
          <h2 className="text-base font-bold text-[#0f1111]">Filters</h2>
          <div className="mt-4 space-y-2">
            {productCategories.map((item) => (
              <label key={item} className="flex cursor-pointer items-center gap-2 text-sm text-[#0f1111]">
                <input
                  type="radio"
                  name="category"
                  checked={category === item}
                  onChange={() => setCategory(item)}
                  className="accent-[#e77600]"
                />
                {item}
              </label>
            ))}
          </div>
          <div className="mt-6 border-t border-[#ddd] pt-4">
            <p className="text-sm font-semibold">Sort by</p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="mt-2 w-full rounded border border-[#888c8c] px-2 py-2 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
            </select>
          </div>
        </aside>

        <div>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#ddd] bg-white px-4 py-3">
            <p className="text-sm text-[#0f1111]">
              <span className="font-semibold">{filteredProducts.length} results</span>
              {category !== "All" && <span> in {category}</span>}
              {query && <span> for &quot;{query}&quot;</span>}
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="rounded border border-[#888c8c] px-2 py-1.5 text-sm lg:hidden"
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Avg. Customer Review</option>
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="rounded-lg border border-[#ddd] bg-white p-10 text-center">
              <p className="text-lg font-semibold text-[#0f1111]">No products found</p>
              <p className="mt-2 text-sm text-[#565959]">Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
