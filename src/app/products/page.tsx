import { ProductsShop } from "@/components/shop/ProductsShop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Prototypes",
  description: "Shop Flex Human prosthetics, wearables, and augmentation products.",
};

export default function ProductsPage() {
  return <ProductsShop />;
}
