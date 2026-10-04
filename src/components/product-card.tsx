import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatInr } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden rounded-xl bg-cream shadow-soft"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-mist">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-fg-subtle">
          {product.size}
        </p>
        <h3 className="text-lg font-medium tracking-tight">{product.name}</h3>
        <p className="text-sm leading-relaxed text-fg-muted">{product.blurb}</p>
        <div className="mt-auto flex items-end justify-between pt-4">
          <p className="text-base font-medium tabular-nums">
            {formatInr(product.price)}
            {product.compareAt ? (
              <span className="ml-2 text-sm font-normal text-fg-subtle line-through">
                {formatInr(product.compareAt)}
              </span>
            ) : null}
          </p>
          <span className="inline-flex items-center gap-1 text-sm text-water">
            View
            <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
