import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { f as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as formatInr } from "./navbar-BXDXH8X9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-BTKm6fsB.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/shop/$slug",
		params: { slug: product.slug },
		className: "group flex flex-col overflow-hidden rounded-xl bg-cream shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative aspect-[4/5] overflow-hidden bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				className: "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle",
					children: product.size
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-medium tracking-tight",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-relaxed text-fg-muted",
					children: product.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-end justify-between pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-base font-medium tabular-nums",
						children: [formatInr(product.price), product.compareAt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-sm font-normal text-fg-subtle line-through",
							children: formatInr(product.compareAt)
						}) : null]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 text-sm text-water",
						children: ["View", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-150 group-hover:translate-x-0.5" })]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
