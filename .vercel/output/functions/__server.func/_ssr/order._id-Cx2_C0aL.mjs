import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { d as formatInr, g as useHydrated, i as cartLines, n as Footer, r as Navbar, s as company, t as Button } from "./navbar-BXDXH8X9.mjs";
import { n as useOrders } from "./orders-store-0BEMVjks.mjs";
import { r as Route$1 } from "./router-hO8uzoCM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order._id-Cx2_C0aL.js
var import_jsx_runtime = require_jsx_runtime();
function OrderPage() {
	const { id } = Route$1.useParams();
	const hydrated = useHydrated();
	const order = useOrders((s) => s.get(id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper font-sans text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-2xl px-6 py-16 md:px-12",
				children: !hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-fg-muted",
					children: "Finding your order…"
				}) : !order ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-medium",
						children: "Order not on this device"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-fg-muted",
						children: "We keep confirmations in this browser. If you placed it here, try the same phone or laptop."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-8 inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							children: "Back to shop"
						})
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-leaf",
						children: "Order confirmed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 text-3xl font-medium tracking-tight",
						children: [
							"Thank you, ",
							order.name.split(" ")[0],
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-base leading-relaxed text-fg-muted",
						children: [
							order.id,
							" is packed next at the Ramannagudem plant. Pay",
							" ",
							formatInr(order.total),
							" on delivery."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 rounded-xl border border-line bg-cream p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "grid gap-4 text-sm sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-fg-subtle",
									children: "Deliver to"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1 leading-relaxed",
									children: [
										order.address,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										order.city,
										" ",
										order.pincode,
										order.landmark ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), order.landmark] }) : null
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-fg-subtle",
									children: "Contact"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
									className: "mt-1",
									children: [order.phone, order.email ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}), order.email] }) : null]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2 border-t border-line pt-4 text-sm",
								children: cartLines(order.items).map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										line.product.name,
										" × ",
										line.qty
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums",
										children: formatInr(line.lineTotal)
									})]
								}, line.slug))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex justify-between text-base font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: formatInr(order.total)
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm text-fg-subtle",
						children: [
							"Questions? Write to ",
							company.email,
							" or visit ",
							company.address.building,
							",",
							" ",
							company.address.landmark,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "mt-8 inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							children: "Back home"
						})
					})
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { OrderPage as component };
