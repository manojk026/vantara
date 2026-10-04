import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cartCount, useCart } from "@/lib/cart-store";
import { navLinks } from "@/lib/company";
import { cn } from "@/lib/utils";
import { useHydrated } from "@/lib/use-hydrated";

export function Navbar({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const hydrated = useHydrated();
  const items = useCart((s) => s.items);
  const count = hydrated ? cartCount(items) : 0;
  const onDark = tone === "dark";

  return (
    <div className="relative">
      <header
        className={cn(
          "relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16",
          !onDark && "border-b border-line bg-paper/90 backdrop-blur-md",
        )}
      >
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="inline-flex items-center"
            onClick={() => setOpen(false)}
          >
            <img
              src="/images/vantara-brand-logo.png"
              alt="Vantara Premium Water"
              className="h-10 w-[60px] object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)] sm:h-12 sm:w-[72px]"
            />
          </Link>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm transition-colors duration-150",
                  onDark
                    ? "text-on-ink-muted hover:text-on-ink"
                    : "text-fg-muted hover:text-fg",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className={cn(
              "relative inline-flex size-11 items-center justify-center rounded-md transition-transform duration-150 active:scale-[0.96]",
              onDark ? "text-on-ink" : "text-fg",
            )}
            aria-label={count ? `Cart, ${count} items` : "Cart"}
          >
            <ShoppingBag className="size-5" strokeWidth={1.75} />
            {count > 0 ? (
              <span
                className={cn(
                  "absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-xs font-semibold leading-none tabular-nums",
                  onDark ? "bg-cream text-ink" : "bg-ink text-on-ink",
                )}
              >
                {count}
              </span>
            ) : null}
          </Link>

          <Link to="/checkout" className="hidden md:inline-flex">
            <Button variant={onDark ? "primary" : "ink"} size="sm">
              Let's Talk
            </Button>
          </Link>

          <button
            type="button"
            className={cn(
              "relative z-50 inline-flex size-11 items-center justify-center rounded-md md:hidden active:scale-90",
              onDark ? "text-on-ink" : "text-fg",
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative size-6">
              <Menu
                className={cn(
                  "absolute inset-0 size-6 transition duration-300",
                  open
                    ? "rotate-90 scale-50 opacity-0"
                    : "rotate-0 scale-100 opacity-100",
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 size-6 transition duration-300",
                  open
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-50 opacity-0",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        className={cn(
          "absolute inset-x-0 top-0 z-20 overflow-hidden bg-ink/98 backdrop-blur-xl transition-[height,opacity] duration-500 md:hidden",
          open ? "h-screen opacity-100" : "pointer-events-none h-0 opacity-0",
        )}
      >
        <div
          className={cn(
            "flex h-full flex-col justify-center px-8 transition duration-500 delay-100",
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-3xl font-medium text-on-ink-muted hover:text-on-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/cart" onClick={() => setOpen(false)}>
              <span className="text-3xl font-medium text-on-ink-muted hover:text-on-ink">
                Cart{count ? ` (${count})` : ""}
              </span>
            </Link>
            <Link to="/checkout" onClick={() => setOpen(false)}>
              <Button variant="primary" size="lg" className="mt-6">
                Let's Talk
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
