import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { company, formatAddress } from "@/lib/company";
import { features } from "@/lib/products";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <div className="min-h-screen bg-paper font-sans text-fg">
      <Navbar tone="light" />
      <main>
        <section className="relative min-h-[52vh] overflow-hidden">
          <img
            src="/images/source-spring.jpg"
            alt="The spring-fed source near Ramannagudem"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
          <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-6xl flex-col justify-end px-6 pb-12 pt-24 md:px-12 lg:px-16">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-ink-subtle">
              The source
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight text-on-ink sm:text-5xl">
              A plant in Ramannagudem. A promise in every cap.
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16 md:px-12">
          <p className="text-lg leading-relaxed text-fg-muted">
            Vantara began as a local answer to a simple want: water that tastes
            clean, travels a short distance, and is bottled where you can actually
            visit the people who make it. From {formatAddress()}, next to Vasavi
            Engineering College, we purify, mineralise, and seal every bottle
            under the same blue cap.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-fg-muted">
            {company.tagline} We do not chase distant mountain myths. We watch a
            nearby source, run a disciplined line, and send riders across
            Tadepalligudem and West Godavari the same day.
          </p>
        </section>

        <section className="bg-mist px-6 py-16 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.id} className="rounded-xl bg-cream p-6">
                <h2 className="text-lg font-medium">{f.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{f.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-16">
          <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">Founders</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {company.founders.map((f) => (
              <article
                key={f.role}
                className="rounded-xl border border-line bg-cream p-8"
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-ink text-sm font-medium tracking-wide text-on-ink">
                  {f.initials}
                </div>
                <h3 className="mt-5 text-xl font-medium">{f.name}</h3>
                <p className="mt-1 text-sm text-water">{f.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">{f.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line px-6 py-16 md:px-12 lg:px-16">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-medium">Visit the plant</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-fg-muted">
                {formatAddress()}. {company.address.landmark}. {company.hours}.
              </p>
            </div>
            <Link to="/contact">
              <Button variant="ink">Reach us</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
