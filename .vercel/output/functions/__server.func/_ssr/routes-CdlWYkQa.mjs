import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { a as ShieldCheck, d as Droplets, f as ArrowRight, s as Mountain, u as Leaf } from "../_libs/lucide-react.mjs";
import { f as getFeatured, l as features, n as Footer, r as Navbar, s as company, t as Button } from "./navbar-BXDXH8X9.mjs";
import { t as BottleViewer } from "./bottle-scene-BeZiSt0j.mjs";
import { t as ProductCard } from "./product-card-BTKm6fsB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CdlWYkQa.js
var import_jsx_runtime = require_jsx_runtime();
var featureIcons = {
	pure: Droplets,
	minerals: Leaf,
	safe: ShieldCheck,
	source: Mountain
};
function Home() {
	const featured = getFeatured();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-paper font-sans text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative h-screen w-full overflow-hidden bg-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						poster: "/images/vantara-garden-hero.png",
						className: "hero-video absolute inset-0 h-full w-full object-cover",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: "/videos/hero.mp4",
							type: "video/mp4"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 to-ink/78" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "dark" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-3xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 animate-fade-slide-up delay-200 text-xs text-on-ink-muted sm:mb-6 sm:text-sm",
									children: "Premium Mineral Water"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "animate-fade-slide-up delay-500 text-3xl font-medium leading-[1.1] tracking-tight text-on-ink sm:text-5xl md:text-6xl lg:text-7xl",
									children: [
										"Shaping visual",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"narratives,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"one sip at a time."
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-5 max-w-sm animate-fade-slide-up delay-700 text-sm leading-relaxed text-on-ink-subtle sm:mb-6 sm:max-w-lg sm:text-base md:text-lg",
								children: ["Turning vision into reality through craft, motion, and an endless pursuit of purity. ", company.tagline]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop",
								className: "inline-flex animate-fade-slide-up delay-1000",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "primary",
									size: "md",
									children: ["Explore Work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})
							})] })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line bg-cream px-6 py-16 md:px-12 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4",
					children: features.map((f) => {
						const Icon = featureIcons[f.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-water",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-5",
										strokeWidth: 1.6
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-base font-medium tracking-tight",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-relaxed text-fg-muted",
									children: f.copy
								})
							]
						}, f.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-6 py-20 md:px-12 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottleViewer, {
						kind: "tall",
						className: "h-[min(72vh,620px)] w-full overflow-hidden rounded-xl bg-mist"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle",
							children: "Stay hydrated"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 text-3xl font-medium tracking-tight sm:text-5xl",
							children: [
								"Pure. Healthy.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Refreshing."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-base leading-relaxed text-fg-muted",
							children: "Drag to turn the bottle. Every litre is drawn near Ramannagudem, mineral-balanced, and sealed under a blue cap before it leaves the plant beside Vasavi Engineering College."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/shop/$slug",
								params: { slug: "vantara-1l" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ink",
									children: "Order the litre"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									children: "Our source"
								})
							})]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-mist px-6 py-20 md:px-12 lg:px-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle",
							children: "Collection"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-medium tracking-tight sm:text-4xl",
							children: "Bottles for the table, the bag, the office."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ink",
								children: ["Shop all", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/source-spring.jpg",
					alt: "Morning light over the spring-fed source that feeds Vantara",
					className: "h-full min-h-80 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center bg-ink px-6 py-16 text-on-ink md:px-12 lg:px-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-on-ink-subtle",
							children: "Ramannagudem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-md text-3xl font-medium tracking-tight sm:text-4xl",
							children: "Bottled where it is drawn — not a thousand kilometres away."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-md text-sm leading-relaxed text-on-ink-muted sm:text-base",
							children: [
								"Founded by ",
								company.founders[0].name,
								" with ",
								company.founders[1].name,
								". The plant sits at ",
								company.address.building,
								", ",
								company.address.street,
								", a landmark from ",
								company.address.landmark.toLowerCase(),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "primary",
								children: ["Meet the source", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Home as component };
