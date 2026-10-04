import type { ReactNode } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import {
  cartLines,
  cartSubtotal,
  deliveryFee,
  useCart,
} from "@/lib/cart-store";
import { company } from "@/lib/company";
import { makeOrderId, useOrders } from "@/lib/orders-store";
import { formatInr } from "@/lib/utils";
import { useHydrated } from "@/lib/use-hydrated";

export const Route = createFileRoute("/checkout")({ component: CheckoutPage });

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a 10-digit Indian mobile number"),
  email: z
    .string()
    .trim()
    .refine(
      (v) => v === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      "Enter a valid email",
    ),
  address: z.string().trim().min(8, "Enter a delivery address"),
  landmark: z.string().trim(),
  city: z.string().trim().min(2, "Enter a city"),
  pincode: z.string().trim().regex(/^\d{6}$/, "Enter a 6-digit PIN code"),
  notes: z.string().trim(),
});

type FormValues = z.infer<typeof schema>;

function CheckoutPage() {
  const hydrated = useHydrated();
  const navigate = useNavigate();
  const items = useCart((s) => s.items);
  const clear = useCart((s) => s.clear);
  const addOrder = useOrders((s) => s.add);
  const lines = hydrated ? cartLines(items) : [];
  const subtotal = cartSubtotal(items);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      landmark: company.address.landmark,
      city: company.address.city,
      pincode: "534101",
      notes: "",
    },
  });

  const city = form.watch("city");
  const delivery = deliveryFee(subtotal, city || company.address.city);
  const total = subtotal + delivery;

  if (hydrated && lines.length === 0) {
    return (
      <div className="min-h-screen bg-paper">
        <Navbar tone="light" />
        <main className="mx-auto max-w-xl px-6 py-24">
          <h1 className="text-2xl font-medium">Nothing to checkout</h1>
          <p className="mt-3 text-fg-muted">Add a bottle first, then come back.</p>
          <Link to="/shop" className="mt-8 inline-flex">
            <Button variant="ink">Shop collection</Button>
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper font-sans text-fg">
      <Navbar tone="light" />
      <main className="mx-auto grid max-w-5xl gap-10 px-6 py-12 lg:grid-cols-[1fr_340px] md:px-12 lg:px-16">
        <div>
          <h1 className="text-3xl font-medium tracking-tight">Place order</h1>
          <p className="mt-2 text-sm text-fg-muted">
            Cash on delivery. We call to confirm before the van leaves Ramannagudem.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={form.handleSubmit((values) => {
              const id = makeOrderId();
              addOrder({
                id,
                createdAt: new Date().toISOString(),
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
                payment: "cod",
              });
              clear();
              void navigate({ to: "/order/$id", params: { id } });
            })}
          >
            <Field label="Full name" error={form.formState.errors.name?.message}>
              <input
                className={inputClass}
                autoComplete="name"
                {...form.register("name")}
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Mobile" error={form.formState.errors.phone?.message}>
                <input
                  className={inputClass}
                  inputMode="numeric"
                  autoComplete="tel"
                  {...form.register("phone")}
                />
              </Field>
              <Field
                label="Email (optional)"
                error={form.formState.errors.email?.message}
              >
                <input
                  className={inputClass}
                  type="email"
                  autoComplete="email"
                  {...form.register("email")}
                />
              </Field>
            </div>
            <Field
              label="Address"
              error={form.formState.errors.address?.message}
            >
              <textarea
                className={`${inputClass} min-h-24 py-3`}
                {...form.register("address")}
              />
            </Field>
            <Field label="Landmark">
              <input className={inputClass} {...form.register("landmark")} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="City" error={form.formState.errors.city?.message}>
                <input className={inputClass} {...form.register("city")} />
              </Field>
              <Field
                label="PIN code"
                error={form.formState.errors.pincode?.message}
              >
                <input
                  className={inputClass}
                  inputMode="numeric"
                  {...form.register("pincode")}
                />
              </Field>
            </div>
            <Field label="Notes for the rider">
              <input className={inputClass} {...form.register("notes")} />
            </Field>
            <Button type="submit" variant="ink" className="mt-4 w-full sm:w-auto">
              Confirm order · {formatInr(total)}
            </Button>
          </form>
        </div>

        <aside className="h-fit rounded-xl border border-line bg-cream p-6">
          <h2 className="text-lg font-medium">Your bottles</h2>
          <ul className="mt-4 space-y-3">
            {lines.map((line) => (
              <li key={line.slug} className="flex justify-between gap-3 text-sm">
                <span>
                  {line.product.name} × {line.qty}
                </span>
                <span className="tabular-nums">{formatInr(line.lineTotal)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-2 border-t border-line pt-4 text-sm">
            <div className="flex justify-between">
              <dt className="text-fg-muted">Subtotal</dt>
              <dd className="tabular-nums">{formatInr(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-fg-muted">Delivery</dt>
              <dd className="tabular-nums">
                {delivery === 0 ? "Free" : formatInr(delivery)}
              </dd>
            </div>
            <div className="flex justify-between text-base font-medium">
              <dt>Total</dt>
              <dd className="tabular-nums">{formatInr(total)}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-relaxed text-fg-subtle">
            Plant: {company.address.building}, {company.address.street},{" "}
            {company.address.city}. Pay cash or UPI when the bottle arrives.
          </p>
        </aside>
      </main>
      <Footer />
    </div>
  );
}

const inputClass =
  "h-11 w-full rounded-md border border-line-strong bg-cream px-3 text-sm text-fg outline-none ring-water/30 placeholder:text-fg-subtle focus:ring-2";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-xs text-danger">{error}</span> : null}
    </label>
  );
}
