import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { f as ArrowRight, p as ArrowLeft } from "../_libs/lucide-react.mjs";
import { d as formatInr, h as useCart, m as products, n as Footer, p as getProduct, r as Navbar, t as Button } from "./navbar-BXDXH8X9.mjs";
import { t as QtyControl } from "./qty-control-f7I6Io2b.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route } from "./router-hO8uzoCM.mjs";
import { t as BottleViewer } from "./bottle-scene-BeZiSt0j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop_._slug-TsoFO5Pq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const product = getProduct(slug);
	const add = useCart((s) => s.add);
	const [qty, setQty] = (0, import_react.useState)(1);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-xl px-6 py-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-medium",
					children: "Bottle not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-fg-muted",
					children: "That pour has left the collection."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "mt-8 inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ink",
						children: "Back to collection"
					})
				})
			]
		})]
	});
	const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper font-sans text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-6 py-10 md:px-12 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						className: "inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Collection"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid items-start gap-10 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "overflow-hidden rounded-xl bg-mist",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottleViewer, {
								kind: product.bottle,
								className: "h-[min(70vh,560px)] w-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: "",
								className: "h-40 w-full object-cover object-center sm:h-52"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle",
								children: [
									product.packLabel,
									" · ",
									product.size
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 text-3xl font-medium tracking-tight sm:text-5xl",
								children: product.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-2xl font-medium tabular-nums",
								children: [formatInr(product.price), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-3 text-lg font-normal text-fg-subtle line-through",
									children: formatInr(product.compareAt)
								}) : null]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-base leading-relaxed text-fg-muted",
								children: product.story
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
								children: product.minerals.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-line bg-cream px-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-fg-subtle",
										children: m.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-sm font-medium",
										children: m.value
									})]
								}, m.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
										value: qty,
										onChange: setQty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "ink",
										onClick: () => {
											add(product.slug, qty);
											toast.success(`${product.name} added to cart`);
										},
										children: "Add to cart"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/checkout",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: "outline",
											onClick: () => add(product.slug, qty),
											children: ["Buy now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm text-fg-subtle",
								children: [
									"Best for ",
									product.bestFor,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-2 text-sm leading-relaxed text-fg-muted",
								children: product.details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-leaf" }), d]
								}, d))
							})
						] })]
					}),
					others.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-medium tracking-tight",
							children: "Also on the table"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-6 sm:grid-cols-3",
							children: others.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop/$slug",
								params: { slug: p.slug },
								className: "overflow-hidden rounded-xl bg-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.name,
									className: "aspect-[4/3] w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm tabular-nums text-fg-muted",
										children: formatInr(p.price)
									})]
								})]
							}, p.slug))
						})]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProductPage as component };
