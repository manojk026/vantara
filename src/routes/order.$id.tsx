import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { cartLines } from "@/lib/cart-store";
import { company } from "@/lib/company";
import { useOrders } from "@/lib/orders-store";
import { formatInr } from "@/lib/utils";
import { useHydrated } from "@/lib/use-hydrated";

export const Route = createFileRoute("/order/$id")({ component: OrderPage });

function OrderPage() {
  const { id } = Route.useParams();
  const hydrated = useHydrated();
  const order = useOrders((s) => s.get(id));

  return (
    <div className="min-h-screen bg-paper font-sans text-fg">
      <Navbar tone="light" />
      <main className="mx-auto max-w-2xl px-6 py-16 md:px-12">
        {!hydrated ? (
          <p className="text-fg-muted">Finding your order…</p>
        ) : !order ? (
          <>
            <h1 className="text-2xl font-medium">Order not on this device</h1>
            <p className="mt-3 text-fg-muted">
              We keep confirmations in this browser. If you placed it here, try the
              same phone or laptop.
            </p>
            <Link to="/shop" className="mt-8 inline-flex">
              <Button variant="ink">Back to shop</Button>
            </Link>
          </>
        ) : (
          <>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-leaf">
              Order confirmed
            </p>
            <h1 className="mt-3 text-3xl font-medium tracking-tight">
              Thank you, {order.name.split(" ")[0]}.
            </h1>
            <p className="mt-3 text-base leading-relaxed text-fg-muted">
              {order.id} is packed next at the Ramannagudem plant. Pay{" "}
              {formatInr(order.total)} on delivery.
            </p>

            <div className="mt-8 rounded-xl border border-line bg-cream p-6">
              <dl className="grid gap-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-fg-subtle">Deliver to</dt>
                  <dd className="mt-1 leading-relaxed">
                    {order.address}
                    <br />
                    {order.city} {order.pincode}
                    {order.landmark ? (
                      <>
                        <br />
                        {order.landmark}
                      </>
                    ) : null}
                  </dd>
                </div>
                <div>
                  <dt className="text-fg-subtle">Contact</dt>
                  <dd className="mt-1">
                    {order.phone}
                    {order.email ? (
                      <>
                        <br />
                        {order.email}
                      </>
                    ) : null}
                  </dd>
                </div>
              </dl>
              <ul className="mt-6 space-y-2 border-t border-line pt-4 text-sm">
                {cartLines(order.items).map((line) => (
                  <li key={line.slug} className="flex justify-between">
                    <span>
                      {line.product.name} × {line.qty}
                    </span>
                    <span className="tabular-nums">{formatInr(line.lineTotal)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex justify-between text-base font-medium">
                <span>Total</span>
                <span className="tabular-nums">{formatInr(order.total)}</span>
              </p>
            </div>

            <p className="mt-6 text-sm text-fg-subtle">
              Questions? Write to {company.email} or visit {company.address.building},{" "}
              {company.address.landmark}.
            </p>
            <Link to="/" className="mt-8 inline-flex">
              <Button variant="ink">Back home</Button>
            </Link>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
