"use client";

import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { CheckoutModal } from "@/components/shop/CheckoutModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <CheckoutModal />
    </CartProvider>
  );
}
