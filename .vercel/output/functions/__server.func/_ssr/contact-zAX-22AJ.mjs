import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { n as Footer, r as Navbar, s as company, t as Button, u as formatAddress } from "./navbar-BXDXH8X9.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-zAX-22AJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper font-sans text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-2 md:px-12 lg:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle",
						children: "Reach us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-3xl font-medium tracking-tight sm:text-5xl",
						children: "Come by, or send a note."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-md text-base leading-relaxed text-fg-muted",
						children: [
							"Bulk orders, hostel contracts, kirana supply, and 20 L jar rounds — the plant answers during ",
							company.hours,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 space-y-5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-fg-subtle",
								children: "Plant"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-1 leading-relaxed",
								children: [
									formatAddress(),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									company.address.landmark
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-fg-subtle",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: company.email
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-fg-subtle",
								children: "Founders"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-1",
								children: [
									company.founders[0].name,
									", ",
									company.founders[0].role,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									company.founders[1].name,
									", ",
									company.founders[1].role
								]
							})] })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					className: "rounded-xl border border-line bg-cream p-6 sm:p-8",
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
						toast.success("Message received — we will reply from the plant.");
					},
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-base leading-relaxed",
						children: "Thank you. The Ramannagudem desk has your note. For bottle orders, the cart is faster."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-sm font-medium",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									name: "name",
									className: "h-11 w-full rounded-md border border-line-strong bg-paper px-3 text-sm outline-none ring-water/30 focus:ring-2"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-sm font-medium",
									children: "Mobile"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									name: "phone",
									inputMode: "numeric",
									className: "h-11 w-full rounded-md border border-line-strong bg-paper px-3 text-sm outline-none ring-water/30 focus:ring-2"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-sm font-medium",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									name: "message",
									className: "min-h-32 w-full rounded-md border border-line-strong bg-paper px-3 py-3 text-sm outline-none ring-water/30 focus:ring-2"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "ink",
								children: "Send message"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
