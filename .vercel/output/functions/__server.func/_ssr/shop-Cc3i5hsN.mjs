import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { m as products, n as Footer, r as Navbar } from "./navbar-BXDXH8X9.mjs";
import { t as ProductCard } from "./product-card-BTKm6fsB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-Cc3i5hsN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "single",
		label: "Bottles"
	},
	{
		id: "home",
		label: "Home & office"
	},
	{
		id: "pack",
		label: "Cases & gifts"
	}
];
function Shop() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => filter === "all" ? products : products.filter((p) => p.category === filter), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper font-sans text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-6 py-12 md:px-12 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle",
						children: "Collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl",
						children: "Choose your pour."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-base leading-relaxed text-fg-muted",
						children: "From a 500 ml for the road to a 20 L jar for the stand. Packed in Ramannagudem, delivered across West Godavari."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: filters.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(f.id),
							className: filter === f.id ? "h-11 rounded-full bg-ink px-5 text-sm font-medium text-on-ink" : "h-11 rounded-full border border-line px-5 text-sm font-medium text-fg-muted hover:text-fg",
							children: f.label
						}, f.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Shop as component };
