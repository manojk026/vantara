import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { c as Minus, o as Plus } from "../_libs/lucide-react.mjs";
import { o as cn } from "./navbar-BXDXH8X9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/qty-control-f7I6Io2b.js
var import_jsx_runtime = require_jsx_runtime();
function QtyControl({ value, onChange, min = 1, max = 99, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("inline-flex h-11 items-center rounded-md border border-line-strong bg-cream", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex size-11 items-center justify-center text-fg-muted hover:text-fg",
				"aria-label": "Decrease quantity",
				onClick: () => onChange(Math.max(min, value - 1)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-8 text-center text-sm font-medium tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "inline-flex size-11 items-center justify-center text-fg-muted hover:text-fg",
				"aria-label": "Increase quantity",
				onClick: () => onChange(Math.min(max, value + 1)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
			})
		]
	});
}
//#endregion
export { QtyControl as t };
