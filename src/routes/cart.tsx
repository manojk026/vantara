import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { QtyControl } from "@/components/qty-control";
import { Button } from "@/components/ui/button";
import {
  cartLines,
  cartSubtotal,
  deliveryFee,
  useCart,
} from "@/lib/cart-store";
import { company } from "@/lib/company";
import { formatInr } from "@/lib/utils";
import { useHydrated } from "@/lib/use-hydrated";

export const Route = createFileRoute("/cart")({ component: CartPage });

function CartPage() {
  const hydrated = useHydrated();
  const items = useCart((s) => s.items);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const lines = hydrated ? cartLines(items) : [];
  const subtotal = cartSubtotal(items);
  const delivery = deliveryFee(subtotal, company.address.city);
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-paper font-sans text-fg">
      <Navbar tone="light" />
      <main className="mx-auto max-w-5xl px-6 py-12 md:px-12 lg:px-16">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Cart</h1>

        {!hydrated ? (
          <p className="mt-8 text-fg-muted">Loading your bottles…</p>
        ) : lines.length === 0 ? (
          <div className="mt-10 max-w-md">
            <p className="text-base text-fg-muted">
              The cart is empty. The garden table is waiting.
            </p>
            <Link to="/shop" className="mt-6 inline-flex">
              <Button variant="ink">Browse the collection</Button>
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
            <ul className="divide-y divide-line">
              {lines.map((line) => (
                <li key={line.slug} className="flex gap-4 py-5">
                  <img
                    src={line.product.image}
                    alt=""
                    className="size-24 rounded-lg object-cover sm:size-28"
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          to="/shop/$slug"
                          params={{ slug: line.slug }}
                          className="font-medium hover:text-water"
                        >
                          {line.product.name}
                        </Link>
                        <p className="text-sm text-fg-subtle">{line.product.size}</p>
                      </div>
                      <p className="font-medium tabular-nums">
                        {formatInr(line.lineTotal)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <QtyControl
                        value={line.qty}
                        min={0}
                        onChange={(n) => setQty(line.slug, n)}
                      />
                      <button
                        type="button"
                        className="inline-flex size-11 items-center justify-center text-fg-subtle hover:text-danger"
                        aria-label={`Remove ${line.product.name}`}
                        onClick={() => remove(line.slug)}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <aside className="h-fit rounded-xl border border-line bg-cream p-6">
              <h2 className="text-lg font-medium">Summary</h2>
              <dl className="mt-4 space-y-2 text-sm">
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
                <div className="flex justify-between border-t border-line pt-3 text-base font-medium">
                  <dt>Total</dt>
                  <dd className="tabular-nums">{formatInr(total)}</dd>
                </div>
              </dl>
              <p className="mt-3 text-xs text-fg-subtle">
                Free delivery in Tadepalligudem and on orders over {formatInr(500)}.
                Pay on delivery.
              </p>
              <Link to="/checkout" className="mt-6 flex">
                <Button variant="ink" className="w-full">
                  Checkout
                </Button>
              </Link>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
