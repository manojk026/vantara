import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { r as Trash2 } from "../_libs/lucide-react.mjs";
import { a as cartSubtotal, c as deliveryFee, d as formatInr, g as useHydrated, h as useCart, i as cartLines, n as Footer, r as Navbar, s as company, t as Button } from "./navbar-BXDXH8X9.mjs";
import { t as QtyControl } from "./qty-control-f7I6Io2b.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-C7MVCf6o.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const hydrated = useHydrated();
	const items = useCart((s) => s.items);
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const lines = hydrated ? cartLines(items) : [];
	const subtotal = cartSubtotal(items);
	const delivery = deliveryFee(subtotal, company.address.city);
	const total = subtotal + delivery;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper font-sans text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-6 py-12 md:px-12 lg:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-3xl font-medium tracking-tight sm:text-4xl",
					children: "Cart"
				}), !hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-fg-muted",
					children: "Loading your bottles…"
				}) : lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base text-fg-muted",
						children: "The cart is empty. The garden table is waiting."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-6 inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							children: "Browse the collection"
						})
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-10 lg:grid-cols-[1fr_320px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "divide-y divide-line",
						children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: line.product.image,
								alt: "",
								className: "size-24 rounded-lg object-cover sm:size-28"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 flex-1 flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/shop/$slug",
										params: { slug: line.slug },
										className: "font-medium hover:text-water",
										children: line.product.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-fg-subtle",
										children: line.product.size
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium tabular-nums",
										children: formatInr(line.lineTotal)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
										value: line.qty,
										min: 0,
										onChange: (n) => setQty(line.slug, n)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex size-11 items-center justify-center text-fg-subtle hover:text-danger",
										"aria-label": `Remove ${line.product.name}`,
										onClick: () => remove(line.slug),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})]
								})]
							})]
						}, line.slug))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "h-fit rounded-xl border border-line bg-cream p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-medium",
								children: "Summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-4 space-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-fg-muted",
											children: "Subtotal"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "tabular-nums",
											children: formatInr(subtotal)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-fg-muted",
											children: "Delivery"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "tabular-nums",
											children: delivery === 0 ? "Free" : formatInr(delivery)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between border-t border-line pt-3 text-base font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "tabular-nums",
											children: formatInr(total)
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-fg-subtle",
								children: [
									"Free delivery in Tadepalligudem and on orders over ",
									formatInr(500),
									". Pay on delivery."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/checkout",
								className: "mt-6 flex",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ink",
									className: "w-full",
									children: "Checkout"
								})
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CartPage as component };
