import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct } from "@/lib/products";

export type CartLine = {
  slug: string;
  qty: number;
};

type CartState = {
  items: CartLine[];
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (slug, qty = 1) => {
        const items = [...get().items];
        const i = items.findIndex((l) => l.slug === slug);
        if (i >= 0) {
          const line = items[i];
          if (line) items[i] = { slug, qty: line.qty + qty };
        } else {
          items.push({ slug, qty });
        }
        set({ items });
      },
      setQty: (slug, qty) => {
        if (qty <= 0) {
          set({ items: get().items.filter((l) => l.slug !== slug) });
          return;
        }
        set({
          items: get().items.map((l) => (l.slug === slug ? { slug, qty } : l)),
        });
      },
      remove: (slug) => set({ items: get().items.filter((l) => l.slug !== slug) }),
      clear: () => set({ items: [] }),
    }),
    { name: "vantara-cart" },
  ),
);

export function cartCount(items: CartLine[]) {
  return items.reduce((n, l) => n + l.qty, 0);
}

export function cartLines(items: CartLine[]) {
  return items
    .map((l) => {
      const product = getProduct(l.slug);
      if (!product) return null;
      return { ...l, product, lineTotal: product.price * l.qty };
    })
    .filter((l): l is NonNullable<typeof l> => l !== null);
}

export function cartSubtotal(items: CartLine[]) {
  return cartLines(items).reduce((n, l) => n + l.lineTotal, 0);
}

export function deliveryFee(subtotal: number, city: string) {
  if (subtotal <= 0) return 0;
  if (subtotal >= 500) return 0;
  const c = city.trim().toLowerCase();
  if (c.includes("tadepalligudem") || c.includes("ramannagudem")) return 0;
  if (c.includes("west godavari") || c.includes("eluru") || c.includes("bhimavaram")) {
    return 40;
  }
  return 80;
}
