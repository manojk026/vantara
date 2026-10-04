import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { l as features, n as Footer, r as Navbar, s as company, t as Button, u as formatAddress } from "./navbar-BXDXH8X9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C1HvnCZe.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper font-sans text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative min-h-[52vh] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/source-spring.jpg",
							alt: "The spring-fed source near Ramannagudem",
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-6 pb-12 pt-24 md:px-12 lg:px-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.18em] text-on-ink-subtle",
								children: "The source"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 max-w-2xl text-3xl font-medium tracking-tight text-on-ink sm:text-5xl",
								children: "A plant in Ramannagudem. A promise in every cap."
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-3xl px-6 py-16 md:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg leading-relaxed text-fg-muted",
						children: [
							"Vantara began as a local answer to a simple want: water that tastes clean, travels a short distance, and is bottled where you can actually visit the people who make it. From ",
							formatAddress(),
							", next to Vasavi Engineering College, we purify, mineralise, and seal every bottle under the same blue cap."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-lg leading-relaxed text-fg-muted",
						children: [company.tagline, " We do not chase distant mountain myths. We watch a nearby source, run a disciplined line, and send riders across Tadepalligudem and West Godavari the same day."]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-mist px-6 py-16 md:px-12 lg:px-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-cream p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-medium",
								children: f.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-fg-muted",
								children: f.copy
							})]
						}, f.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-medium tracking-tight sm:text-3xl",
						children: "Founders"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-2",
						children: company.founders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-line bg-cream p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex size-14 items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-on-ink",
									children: f.initials
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-xl font-medium",
									children: f.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-water",
									children: f.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm leading-relaxed text-fg-muted",
									children: f.note
								})
							]
						}, f.role))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-t border-line px-6 py-16 md:px-12 lg:px-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-medium",
							children: "Visit the plant"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 max-w-lg text-sm leading-relaxed text-fg-muted",
							children: [
								formatAddress(),
								". ",
								company.address.landmark,
								". ",
								company.hours,
								"."
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ink",
								children: "Reach us"
							})
						})]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { AboutPage as component };
