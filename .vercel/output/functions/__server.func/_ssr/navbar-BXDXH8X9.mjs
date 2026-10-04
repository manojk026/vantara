import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { i as ShoppingBag, l as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/navbar-BXDXH8X9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatInr(amount) {
	return new Intl.NumberFormat("en-IN", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 0
	}).format(amount);
}
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 48 48",
		className: cn("size-8", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10 28c0-7 7.5-14 10.5-16.5 1.2 3.4 2 8.2-1 13.2-1.6 2.6-4.6 4.4-7.2 4.8C11.2 29.3 10 28.8 10 28Z",
				fill: "currentColor",
				className: "text-leaf"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M38 28c0-7-7.5-14-10.5-16.5-1.2 3.4-2 8.2 1 13.2 1.6 2.6 4.6 4.4 7.2 4.8 1.1-.2 2.3-.7 2.3-1.5Z",
				fill: "currentColor",
				className: "text-leaf"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M24 8c.4 0 8 10.2 8 17.2C32 31.4 28.4 36 24 36s-8-4.6-8-10.8C16 18.2 23.6 8 24 8Z",
				fill: "currentColor",
				className: "text-water"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M21.2 20.5c1.4-2.2 3.1-3.4 4.3-3.8-.6 3.2-2.3 5.4-4.6 6.5 0-1.1.1-1.8.3-2.7Z",
				fill: "currentColor",
				className: "text-cream/70"
			})
		]
	});
}
function Logo({ className, markClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { className: markClassName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-lg font-semibold tracking-tight sm:text-xl",
			children: "Vantara"
		})]
	});
}
var company = {
	name: "Vantara",
	legalName: "Vantara Premium Water",
	tagline: "Pure by Nature, Better for Tomorrow.",
	hours: "Mon–Sat, 8:00 AM – 7:00 PM",
	email: "orders@vantara.in",
	founders: [{
		name: "B.U.V Bhaskar Reddy",
		role: "Founder",
		initials: "BR",
		note: "Built Vantara to bring clean, mineral-balanced water to West Godavari — sourced with care, bottled with pride."
	}, {
		name: "B. Manikanta Reddy",
		role: "Co-Founder",
		initials: "MR",
		note: "Leads craft, quality, and the daily promise that every bottle leaves the line as pure as the source."
	}],
	address: {
		building: "R.S. No. 431/5",
		street: "Ramannagudem",
		locality: "Ramannagudem",
		city: "Tadepalligudem",
		district: "West Godavari",
		state: "Andhra Pradesh",
		landmark: "Near Vasavi Engineering College"
	}
};
function formatAddress() {
	const a = company.address;
	return `${a.building}, ${a.street}, ${a.locality}, ${a.city}, ${a.district}, ${a.state}`;
}
var navLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Collection",
		to: "/shop"
	},
	{
		label: "Source",
		to: "/about"
	},
	{
		label: "Reach Us",
		to: "/contact"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-on-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12 md:px-12 lg:px-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "text-on-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-on-ink-muted",
						children: [company.tagline, " Bottled in Ramannagudem, Tadepalligudem — a short walk from Vasavi Engineering College."]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.18em] text-on-ink-subtle",
						children: "Visit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-sm text-on-ink-muted",
						children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "hover:text-on-ink",
							children: l.label
						}) }, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hover:text-on-ink",
							children: "Order bottles"
						}) })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.18em] text-on-ink-subtle",
							children: "Plant"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm leading-relaxed text-on-ink-muted",
							children: [
								formatAddress(),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								company.address.landmark
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-on-ink-muted",
							children: company.hours
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-on-ink/10 px-6 py-5 text-xs text-on-ink-subtle md:px-12 lg:px-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.legalName
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Founder ",
					company.founders[0].name,
					" · Co-Founder",
					" ",
					company.founders[1].name
				] })]
			})
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium transition-transform duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			primary: "bg-cream text-ink hover:scale-105",
			ink: "bg-ink text-on-ink hover:scale-105",
			water: "bg-water text-on-ink hover:scale-105",
			outline: "border border-line-strong bg-transparent text-fg hover:bg-mist",
			ghost: "bg-transparent text-on-ink-muted hover:text-on-ink",
			darkGhost: "bg-transparent text-fg-muted hover:text-fg"
		},
		size: {
			sm: "rounded-md px-4 py-2 text-sm",
			md: "rounded-lg px-5 py-2.5 text-sm sm:px-6 sm:py-3",
			lg: "rounded-full px-8 py-3.5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var products = [
	{
		slug: "vantara-500ml",
		name: "Vantara 500 ml",
		size: "500 ml",
		packLabel: "Single bottle",
		price: 40,
		image: "/images/bottle-500ml.jpg",
		blurb: "The everyday sip. Pocket-light, mineral-balanced, ready for the road.",
		story: "A slim 500 ml bottle for desks, dashboards, and long walks through Tadepalligudem heat. Same source water, same careful mineral finish.",
		details: [
			"Purified and mineral-balanced drinking water",
			"Food-grade PET with a tamper-evident blue cap",
			"Best chilled, equally clean at room temperature",
			"Recyclable bottle — rinse and return with bulk orders"
		],
		minerals: [
			{
				label: "TDS",
				value: "80–120 ppm"
			},
			{
				label: "pH",
				value: "7.0 – 7.4"
			},
			{
				label: "Calcium",
				value: "Balanced"
			},
			{
				label: "Magnesium",
				value: "Balanced"
			}
		],
		bottle: "slim",
		featured: true,
		category: "single",
		bestFor: "Travel, school, work"
	},
	{
		slug: "vantara-1l",
		name: "Vantara 1 Litre",
		size: "1 L",
		packLabel: "Single bottle",
		price: 70,
		image: "/images/bottle-1l.jpg",
		blurb: "The house favourite. One litre of quiet, cold clarity.",
		story: "Our signature litre — the bottle on the garden table. Generous without being heavy, with the same mountain-still finish in every pour.",
		details: [
			"Signature litre for home and office",
			"Added minerals for a clean, round taste",
			"Spiral-grip PET body, blue hygiene cap",
			"Ideal as a daily pair: one at the desk, one in the kitchen"
		],
		minerals: [
			{
				label: "TDS",
				value: "80–120 ppm"
			},
			{
				label: "pH",
				value: "7.0 – 7.4"
			},
			{
				label: "Calcium",
				value: "Balanced"
			},
			{
				label: "Magnesium",
				value: "Balanced"
			}
		],
		bottle: "tall",
		featured: true,
		category: "single",
		bestFor: "Home, office, dining"
	},
	{
		slug: "vantara-2l",
		name: "Vantara 2 Litre",
		size: "2 L",
		packLabel: "Family bottle",
		price: 110,
		image: "/images/bottle-2l.jpg",
		blurb: "For the table. Share a long lunch without sending anyone to the shop.",
		story: "A two-litre bottle meant to live at the centre of the table — meals, guests, and slow Sundays in Ramannagudem.",
		details: [
			"Family-size PET with a secure blue cap",
			"Same mineral profile as the signature litre",
			"Stays fresh refrigerated for 3 days after opening",
			"A quieter, cheaper way to hydrate a household"
		],
		minerals: [
			{
				label: "TDS",
				value: "80–120 ppm"
			},
			{
				label: "pH",
				value: "7.0 – 7.4"
			},
			{
				label: "Calcium",
				value: "Balanced"
			},
			{
				label: "Magnesium",
				value: "Balanced"
			}
		],
		bottle: "tall",
		featured: true,
		category: "single",
		bestFor: "Family meals"
	},
	{
		slug: "vantara-5l",
		name: "Vantara 5 Litre",
		size: "5 L",
		packLabel: "Handle bottle",
		price: 180,
		image: "/images/bottle-5l.jpg",
		blurb: "Kitchen workhorse with a handle — refill glasses all week.",
		story: "Built for the kitchen counter. A five-litre handle bottle that keeps a family in clean water between larger jar deliveries.",
		details: [
			"Side handle for easy pours",
			"Food-grade PET, hygiene-sealed",
			"Perfect beside the filter-stand or on a pantry shelf",
			"Pairs well with a weekly 20 L jar schedule"
		],
		minerals: [
			{
				label: "TDS",
				value: "80–120 ppm"
			},
			{
				label: "pH",
				value: "7.0 – 7.4"
			},
			{
				label: "Calcium",
				value: "Balanced"
			},
			{
				label: "Magnesium",
				value: "Balanced"
			}
		],
		bottle: "family",
		category: "home",
		bestFor: "Kitchen, pantry"
	},
	{
		slug: "vantara-20l",
		name: "Vantara 20 L Jar",
		size: "20 L",
		packLabel: "Dispenser jar",
		price: 250,
		image: "/images/jar-20l.jpg",
		blurb: "The home and office standard. One jar, a week of clean water.",
		story: "Our 20-litre jar is the quiet engine of homes, hostels, and shops around Vasavi Engineering College. Delivered sealed, collected, washed, and refilled.",
		details: [
			"Food-grade reusable jar",
			"Sealed at the plant in Ramannagudem",
			"Same-day delivery in Tadepalligudem",
			"Empty jars collected on the next drop"
		],
		minerals: [
			{
				label: "TDS",
				value: "80–120 ppm"
			},
			{
				label: "pH",
				value: "7.0 – 7.4"
			},
			{
				label: "Calcium",
				value: "Balanced"
			},
			{
				label: "Magnesium",
				value: "Balanced"
			}
		],
		bottle: "jar",
		featured: true,
		category: "home",
		bestFor: "Home, office, hostel"
	},
	{
		slug: "vantara-500-case",
		name: "Case of 24 × 500 ml",
		size: "24 × 500 ml",
		packLabel: "Wholesale case",
		price: 840,
		compareAt: 960,
		image: "/images/case-500ml.jpg",
		blurb: "A full case for events, shops, and long weeks on the move.",
		story: "Twenty-four pocket bottles, packed in Ramannagudem and ready for kirana shelves, college stalls, and family functions.",
		details: [
			"24 sealed 500 ml bottles",
			"Save versus buying singles",
			"Ideal for shops, events, and offices",
			"Free local delivery on cases"
		],
		minerals: [
			{
				label: "TDS",
				value: "80–120 ppm"
			},
			{
				label: "pH",
				value: "7.0 – 7.4"
			},
			{
				label: "Calcium",
				value: "Balanced"
			},
			{
				label: "Magnesium",
				value: "Balanced"
			}
		],
		bottle: "slim",
		category: "pack",
		bestFor: "Retail, events"
	},
	{
		slug: "vantara-1l-case",
		name: "Case of 12 × 1 L",
		size: "12 × 1 L",
		packLabel: "Wholesale case",
		price: 780,
		compareAt: 840,
		image: "/images/bottle-1l.jpg",
		blurb: "A dozen litres — the easiest way to keep a pantry honest.",
		story: "Twelve signature litres in one drop. The standing order for small offices and joint families who prefer bottles over a jar.",
		details: [
			"12 sealed 1 L bottles",
			"Case pricing versus singles",
			"Stacks cleanly in a crate or car boot",
			"Free local delivery on cases"
		],
		minerals: [
			{
				label: "TDS",
				value: "80–120 ppm"
			},
			{
				label: "pH",
				value: "7.0 – 7.4"
			},
			{
				label: "Calcium",
				value: "Balanced"
			},
			{
				label: "Magnesium",
				value: "Balanced"
			}
		],
		bottle: "tall",
		category: "pack",
		bestFor: "Pantry, office"
	},
	{
		slug: "vantara-gift-crate",
		name: "Garden Gift Crate",
		size: "6 × 500 ml",
		packLabel: "Gift crate",
		price: 399,
		compareAt: 480,
		image: "/images/gift-crate.jpg",
		blurb: "Six bottles in a wooden crate — a small, serious present.",
		story: "Packed by hand in a wooden crate with straw. For housewarmings, festival hampers, and anyone who already has everything except better water.",
		details: [
			"Six 500 ml bottles",
			"Natural wooden crate",
			"Ready to gift — no extra wrapping",
			"Limited weekly packing run"
		],
		minerals: [
			{
				label: "TDS",
				value: "80–120 ppm"
			},
			{
				label: "pH",
				value: "7.0 – 7.4"
			},
			{
				label: "Calcium",
				value: "Balanced"
			},
			{
				label: "Magnesium",
				value: "Balanced"
			}
		],
		bottle: "crate",
		category: "pack",
		bestFor: "Gifting"
	}
];
function getProduct(slug) {
	return products.find((p) => p.slug === slug);
}
function getFeatured() {
	return products.filter((p) => p.featured);
}
var features = [
	{
		id: "pure",
		title: "Pure Water",
		copy: "Multi-stage purification so the glass tastes of nothing but water."
	},
	{
		id: "minerals",
		title: "Added Minerals",
		copy: "Calcium and magnesium returned in balance — not stripped, not spiked."
	},
	{
		id: "safe",
		title: "Safe & Hygienic",
		copy: "Sealed in a clean facility in Ramannagudem. Cap on, seal intact."
	},
	{
		id: "source",
		title: "Natural Source",
		copy: "Drawn from a carefully watched source, minutes from our bottling line."
	}
];
var useCart = create()(persist((set, get) => ({
	items: [],
	add: (slug, qty = 1) => {
		const items = [...get().items];
		const i = items.findIndex((l) => l.slug === slug);
		if (i >= 0) {
			const line = items[i];
			if (line) items[i] = {
				slug,
				qty: line.qty + qty
			};
		} else items.push({
			slug,
			qty
		});
		set({ items });
	},
	setQty: (slug, qty) => {
		if (qty <= 0) {
			set({ items: get().items.filter((l) => l.slug !== slug) });
			return;
		}
		set({ items: get().items.map((l) => l.slug === slug ? {
			slug,
			qty
		} : l) });
	},
	remove: (slug) => set({ items: get().items.filter((l) => l.slug !== slug) }),
	clear: () => set({ items: [] })
}), { name: "vantara-cart" }));
function cartCount(items) {
	return items.reduce((n, l) => n + l.qty, 0);
}
function cartLines(items) {
	return items.map((l) => {
		const product = getProduct(l.slug);
		if (!product) return null;
		return {
			...l,
			product,
			lineTotal: product.price * l.qty
		};
	}).filter((l) => l !== null);
}
function cartSubtotal(items) {
	return cartLines(items).reduce((n, l) => n + l.lineTotal, 0);
}
function deliveryFee(subtotal, city) {
	if (subtotal <= 0) return 0;
	if (subtotal >= 500) return 0;
	const c = city.trim().toLowerCase();
	if (c.includes("tadepalligudem") || c.includes("ramannagudem")) return 0;
	if (c.includes("west godavari") || c.includes("eluru") || c.includes("bhimavaram")) return 40;
	return 80;
}
function useHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setHydrated(true), []);
	return hydrated;
}
function Navbar({ tone = "dark" }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const hydrated = useHydrated();
	const items = useCart((s) => s.items);
	const count = hydrated ? cartCount(items) : 0;
	const onDark = tone === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: cn("relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16", !onDark && "border-b border-line bg-paper/90 backdrop-blur-md"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: cn("text-lg font-semibold tracking-tight sm:text-xl", onDark ? "text-on-ink" : "text-fg"),
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
						className: onDark ? "text-on-ink" : "text-fg",
						markClassName: "size-8"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 md:flex",
					"aria-label": "Primary",
					children: navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: cn("text-sm transition-colors duration-150", onDark ? "text-on-ink-muted hover:text-on-ink" : "text-fg-muted hover:text-fg"),
						children: link.label
					}, link.to))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cart",
						className: cn("relative inline-flex size-11 items-center justify-center rounded-md transition-transform duration-150 active:scale-[0.96]", onDark ? "text-on-ink" : "text-fg"),
						"aria-label": count ? `Cart, ${count} items` : "Cart",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							className: "size-5",
							strokeWidth: 1.75
						}), count > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-xs font-semibold leading-none tabular-nums", onDark ? "bg-cream text-ink" : "bg-ink text-on-ink"),
							children: count
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						className: "hidden md:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: onDark ? "primary" : "ink",
							size: "sm",
							children: "Let's Talk"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cn("relative z-50 inline-flex size-11 items-center justify-center rounded-md md:hidden active:scale-90", onDark ? "text-on-ink" : "text-fg"),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative size-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: cn("absolute inset-0 size-6 transition duration-300", open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: cn("absolute inset-0 size-6 transition duration-300", open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0") })]
						})
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("absolute inset-x-0 top-0 z-20 overflow-hidden bg-ink/98 backdrop-blur-xl transition-[height,opacity] duration-500 md:hidden", open ? "h-screen opacity-100" : "pointer-events-none h-0 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("flex h-full flex-col justify-center px-8 transition duration-500 delay-100", open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col gap-5",
					"aria-label": "Mobile",
					children: [
						navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "text-3xl font-medium text-on-ink-muted hover:text-on-ink",
							onClick: () => setOpen(false),
							children: link.label
						}, link.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/cart",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-3xl font-medium text-on-ink-muted hover:text-on-ink",
								children: ["Cart", count ? ` (${count})` : ""]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/checkout",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "primary",
								size: "lg",
								className: "mt-6",
								children: "Let's Talk"
							})
						})
					]
				})
			})
		})]
	});
}
//#endregion
export { cartSubtotal as a, deliveryFee as c, formatInr as d, getFeatured as f, useHydrated as g, useCart as h, cartLines as i, features as l, products as m, Footer as n, cn as o, getProduct as p, Navbar as r, company as s, Button as t, formatAddress as u };
