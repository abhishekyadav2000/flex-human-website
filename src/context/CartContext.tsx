"use client";

import { products, type ProductEntry } from "@/lib/content";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  cartOpen: boolean;
  checkoutOpen: boolean;
  itemCount: number;
  subtotal: number;
  addToCart: (productId: string, quantity?: number) => void;
  buyNow: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  getProduct: (productId: string) => ProductEntry | undefined;
  getLineItems: () => { product: ProductEntry; quantity: number; lineTotal: number }[];
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "flex-human-cart";

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const productMap = useMemo(() => new Map(products.map((p) => [p.id, p])), []);

  const getProduct = useCallback(
    (productId: string) => productMap.get(productId),
    [productMap],
  );

  const addToCart = useCallback((productId: string, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...current, { productId, quantity }];
    });
    setCartOpen(true);
  }, []);

  const buyNow = useCallback((productId: string, quantity = 1) => {
    setItems([{ productId, quantity }]);
    setCheckoutOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((current) => current.filter((item) => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) {
      setItems((current) => current.filter((item) => item.productId !== productId));
      return;
    }
    setItems((current) =>
      current.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const getLineItems = useCallback(() => {
    return items
      .map((item) => {
        const product = productMap.get(item.productId);
        if (!product) return null;
        return {
          product,
          quantity: item.quantity,
          lineTotal: product.price * item.quantity,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);
  }, [items, productMap]);

  const subtotal = useMemo(
    () => getLineItems().reduce((sum, item) => sum + item.lineTotal, 0),
    [getLineItems],
  );

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    cartOpen,
    checkoutOpen,
    itemCount,
    subtotal,
    addToCart,
    buyNow,
    removeFromCart,
    updateQuantity,
    clearCart,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    openCheckout: () => {
      setCartOpen(false);
      setCheckoutOpen(true);
    },
    closeCheckout: () => setCheckoutOpen(false),
    getProduct,
    getLineItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
