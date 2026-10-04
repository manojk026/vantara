import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProductCard } from "@/components/product-card";
import { products, type ProductCategory } from "@/lib/products";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/shop")({ component: Shop });

const filters: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "single", label: "Bottles" },
  { id: "home", label: "Home & office" },
  { id: "pack", label: "Cases & gifts" },
];

function Shop() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const list = useMemo(
    () => (filter === "all" ? products : products.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div className="min-h-screen bg-paper font-sans text-fg">
      <Navbar tone="light" />
      <main className="mx-auto max-w-6xl px-6 py-12 md:px-12 lg:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
          Collection
        </p>
        <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-5xl">
          Choose your pour.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-fg-muted">
          From a 500 ml for the road to a 20 L jar for the stand. Packed in
          Ramannagudem, delivered across West Godavari.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={
                filter === f.id
                  ? "h-11 rounded-full bg-ink px-5 text-sm font-medium text-on-ink"
                  : "h-11 rounded-full border border-line px-5 text-sm font-medium text-fg-muted hover:text-fg"
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
