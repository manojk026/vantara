import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-store-0BEMVjks.js
var useOrders = create()(persist((set, get) => ({
	orders: [],
	add: (order) => set({ orders: [order, ...get().orders] }),
	get: (id) => get().orders.find((o) => o.id === id)
}), { name: "vantara-orders" }));
function makeOrderId() {
	const n = Math.floor(1e3 + Math.random() * 9e3);
	return `VAN-${Date.now().toString(36).toUpperCase().slice(-4)}${n}`;
}
//#endregion
export { useOrders as n, makeOrderId as t };
