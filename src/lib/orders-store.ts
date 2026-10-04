import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartLine } from "@/lib/cart-store";

export type Order = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  landmark: string;
  city: string;
  pincode: string;
  notes: string;
  items: CartLine[];
  subtotal: number;
  delivery: number;
  total: number;
  payment: "cod";
};

type OrdersState = {
  orders: Order[];
  add: (order: Order) => void;
  get: (id: string) => Order | undefined;
};

export const useOrders = create<OrdersState>()(
  persist(
    (set, get) => ({
      orders: [],
      add: (order) => set({ orders: [order, ...get().orders] }),
      get: (id) => get().orders.find((o) => o.id === id),
    }),
    { name: "vantara-orders" },
  ),
);

export function makeOrderId() {
  const n = Math.floor(1000 + Math.random() * 9000);
  const t = Date.now().toString(36).toUpperCase().slice(-4);
  return `VAN-${t}${n}`;
}
