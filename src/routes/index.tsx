import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Droplets,
  Leaf,
  Mountain,
  ShieldCheck,
} from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";
import { features, getFeatured } from "@/lib/products";

export const Route = createFileRoute("/")({ component: Home });

const featureIcons = {
  pure: Droplets,
  minerals: Leaf,
  safe: ShieldCheck,
  source: Mountain,
} as const;

function Home() {
  const featured = getFeatured();

  return (
    <div className="bg-paper font-sans text-fg">
      <section className="relative h-screen w-full overflow-hidden bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/vantara-garden-hero.png"
          className="hero-video absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 to-ink/78" />

        <div className="relative flex h-full flex-col">
          <Navbar tone="dark" />

          <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
            <div className="max-w-3xl">
              <p className="mb-4 animate-fade-slide-up delay-200 text-xs text-on-ink-muted sm:mb-6 sm:text-sm">
                Premium Mineral Water
              </p>
              <h1 className="animate-fade-slide-up delay-500 text-3xl font-medium leading-[1.1] tracking-tight text-on-ink sm:text-5xl md:text-6xl lg:text-7xl">
                Shaping visual
                <br />
                narratives,
                <br />
                one sip at a time.
              </h1>
            </div>

            <div>
              <p className="mb-5 max-w-sm animate-fade-slide-up delay-700 text-sm leading-relaxed text-on-ink-subtle sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
                Turning vision into reality through craft, motion, and an endless
                pursuit of purity. {company.tagline}
              </p>
              <Link
                to="/shop"
                className="inline-flex animate-fade-slide-up delay-1000"
              >
                <Button variant="primary" size="md">
                  Explore Work
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-cream px-6 py-16 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = featureIcons[f.id];
            return (
              <div key={f.id} className="flex flex-col gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-md border border-line text-water">
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h2 className="text-base font-medium tracking-tight">{f.title}</h2>
                <p className="text-sm leading-relaxed text-fg-muted">{f.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <div className="relative mx-auto w-full overflow-hidden rounded-[28px] bg-ink shadow-soft">
            <img
              src="/images/premium-bottle-crop.jpg"
              alt="Premium Vantara mineral water bottle"
              className="block h-auto w-full"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
              Stay hydrated
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-5xl">
              Pure. Healthy.
              <br />
              Refreshing.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fg-muted">
              Every litre is drawn near Ramannagudem, mineral-balanced, and
              sealed under a blue cap before it leaves the plant beside Vasavi
              Engineering College.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/shop/$slug" params={{ slug: "vantara-1l" }}>
                <Button variant="ink">Order the litre</Button>
              </Link>
              <Link to="/about">
                <Button variant="outline">Our source</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist px-6 py-20 md:px-12 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
                Collection
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Bottles for the table, the bag, the office.
              </h2>
            </div>
            <Link to="/shop">
              <Button variant="ink">
                Shop all
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <img
          src="/images/source-spring.jpg"
          alt="Morning light over the spring-fed source that feeds Vantara"
          className="h-full min-h-80 w-full object-cover"
        />
        <div className="flex flex-col justify-center bg-ink px-6 py-16 text-on-ink md:px-12 lg:px-16">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-ink-subtle">
            Ramannagudem
          </p>
          <h2 className="mt-4 max-w-md text-3xl font-medium tracking-tight sm:text-4xl">
            Bottled where it is drawn — not a thousand kilometres away.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-on-ink-muted sm:text-base">
            Founded by {company.founders[0].name} with {company.founders[1].name}.
            The plant sits at {company.address.building}, {company.address.street},
            a landmark from {company.address.landmark.toLowerCase()}.
          </p>
          <Link to="/about" className="mt-8">
            <Button variant="primary">
              Meet the source
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
