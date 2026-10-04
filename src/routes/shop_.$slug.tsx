import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { QtyControl } from "@/components/qty-control";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-store";
import { getProduct, products } from "@/lib/products";
import { formatInr } from "@/lib/utils";

export const Route = createFileRoute("/shop_/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);
  const add = useCart((s) => s.add);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-paper">
        <Navbar tone="light" />
        <main className="mx-auto max-w-xl px-6 py-24 text-center">
          <h1 className="text-2xl font-medium">Bottle not found</h1>
          <p className="mt-3 text-fg-muted">That pour has left the collection.</p>
          <Link to="/shop" className="mt-8 inline-flex">
            <Button variant="ink">Back to collection</Button>
          </Link>
        </main>
      </div>
    );
  }

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper font-sans text-fg">
      <Navbar tone="light" />
      <main className="mx-auto max-w-6xl px-6 py-10 md:px-12 lg:px-16">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          Collection
        </Link>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-mist">
            <img
              src={product.image}
              alt={product.name}
              className="h-[min(70vh,560px)] w-full object-contain"
            />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
              {product.packLabel} · {product.size}
            </p>
            <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-medium tabular-nums">
              {formatInr(product.price)}
              {product.compareAt ? (
                <span className="ml-3 text-lg font-normal text-fg-subtle line-through">
                  {formatInr(product.compareAt)}
                </span>
              ) : null}
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fg-muted">
              {product.story}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {product.minerals.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-line bg-cream px-3 py-3"
                >
                  <dt className="text-xs text-fg-subtle">{m.label}</dt>
                  <dd className="mt-1 text-sm font-medium">{m.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <QtyControl value={qty} onChange={setQty} />
              <Button
                variant="ink"
                onClick={() => {
                  add(product.slug, qty);
                  toast.success(`${product.name} added to cart`);
                }}
              >
                Add to cart
              </Button>
              <Link to="/checkout">
                <Button
                  variant="outline"
                  onClick={() => add(product.slug, qty)}
                >
                  Buy now
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-sm text-fg-subtle">Best for {product.bestFor}.</p>

            <ul className="mt-8 space-y-2 text-sm leading-relaxed text-fg-muted">
              {product.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-leaf" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {others.length ? (
          <section className="mt-20">
            <h2 className="text-2xl font-medium tracking-tight">Also on the table</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/shop/$slug"
                  params={{ slug: p.slug }}
                  className="overflow-hidden rounded-xl bg-cream"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="font-medium">{p.name}</p>
                    <p className="mt-1 text-sm tabular-nums text-fg-muted">
                      {formatInr(p.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
