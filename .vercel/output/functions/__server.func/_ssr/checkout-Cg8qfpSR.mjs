import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as require_jsx_runtime } from "../_libs/@react-three/drei+[...].mjs";
import { a as cartSubtotal, c as deliveryFee, d as formatInr, g as useHydrated, h as useCart, i as cartLines, n as Footer, r as Navbar, s as company, t as Button } from "./navbar-BXDXH8X9.mjs";
import { n as useOrders, t as makeOrderId } from "./orders-store-0BEMVjks.mjs";
import { i as string, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-Cg8qfpSR.js
var import_jsx_runtime = require_jsx_runtime();
var schema = object({
	name: string().trim().min(2, "Please enter your name"),
	phone: string().trim().regex(/^[6-9]\d{9}$/, "Enter a 10-digit Indian mobile number"),
	email: string().trim().refine((v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Enter a valid email"),
	address: string().trim().min(8, "Enter a delivery address"),
	landmark: string().trim(),
	city: string().trim().min(2, "Enter a city"),
	pincode: string().trim().regex(/^\d{6}$/, "Enter a 6-digit PIN code"),
	notes: string().trim()
});
function CheckoutPage() {
	const hydrated = useHydrated();
	const navigate = useNavigate();
	const items = useCart((s) => s.items);
	const clear = useCart((s) => s.clear);
	const addOrder = useOrders((s) => s.add);
	const lines = hydrated ? cartLines(items) : [];
	const subtotal = cartSubtotal(items);
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			address: "",
			landmark: company.address.landmark,
			city: company.address.city,
			pincode: "534101",
			notes: ""
		}
	});
	const city = form.watch("city");
	const delivery = deliveryFee(subtotal, city || company.address.city);
	const total = subtotal + delivery;
	if (hydrated && lines.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "light" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-xl px-6 py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-medium",
					children: "Nothing to checkout"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-fg-muted",
					children: "Add a bottle first, then come back."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "mt-8 inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ink",
						children: "Shop collection"
					})
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper font-sans text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { tone: "light" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid max-w-5xl gap-10 px-6 py-12 lg:grid-cols-[1fr_340px] md:px-12 lg:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-medium tracking-tight",
						children: "Place order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-fg-muted",
						children: "Cash on delivery. We call to confirm before the van leaves Ramannagudem."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8 space-y-4",
						onSubmit: form.handleSubmit((values) => {
							const id = makeOrderId();
							addOrder({
								id,
								createdAt: (/* @__PURE__ */ new Date()).toISOString(),
								name: values.name,
								phone: values.phone,
								email: values.email,
								address: values.address,
								landmark: values.landmark,
								city: values.city,
								pincode: values.pincode,
								notes: values.notes,
								items: items.map((l) => ({ ...l })),
								subtotal,
								delivery,
								total,
								payment: "cod"
							});
							clear();
							navigate({
								to: "/order/$id",
								params: { id }
							});
						}),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full name",
								error: form.formState.errors.name?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputClass,
									autoComplete: "name",
									...form.register("name")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Mobile",
									error: form.formState.errors.phone?.message,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										inputMode: "numeric",
										autoComplete: "tel",
										...form.register("phone")
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email (optional)",
									error: form.formState.errors.email?.message,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										type: "email",
										autoComplete: "email",
										...form.register("email")
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Address",
								error: form.formState.errors.address?.message,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: `${inputClass} min-h-24 py-3`,
									...form.register("address")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Landmark",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputClass,
									...form.register("landmark")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City",
									error: form.formState.errors.city?.message,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										...form.register("city")
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "PIN code",
									error: form.formState.errors.pincode?.message,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputClass,
										inputMode: "numeric",
										...form.register("pincode")
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Notes for the rider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: inputClass,
									...form.register("notes")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								variant: "ink",
								className: "mt-4 w-full sm:w-auto",
								children: ["Confirm order · ", formatInr(total)]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "h-fit rounded-xl border border-line bg-cream p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-medium",
							children: "Your bottles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3",
							children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex justify-between gap-3 text-sm",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-5 space-y-2 border-t border-line pt-4 text-sm",
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
									className: "flex justify-between text-base font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "tabular-nums",
										children: formatInr(total)
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-xs leading-relaxed text-fg-subtle",
							children: [
								"Plant: ",
								company.address.building,
								", ",
								company.address.street,
								",",
								" ",
								company.address.city,
								". Pay cash or UPI when the bottle arrives."
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var inputClass = "h-11 w-full rounded-md border border-line-strong bg-cream px-3 text-sm text-fg outline-none ring-water/30 placeholder:text-fg-subtle focus:ring-2";
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mb-1.5 block text-sm font-medium",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-xs text-danger",
				children: error
			}) : null
		]
	});
}
//#endregion
export { CheckoutPage as component };
