import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { company, formatAddress } from "@/lib/company";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-paper font-sans text-fg">
      <Navbar tone="light" />
      <main className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-2 md:px-12 lg:px-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">
            Reach us
          </p>
          <h1 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
            Come by, or send a note.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-fg-muted">
            Bulk orders, hostel contracts, kirana supply, and 20 L jar rounds —
            the plant answers during {company.hours}.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-fg-subtle">Plant</dt>
              <dd className="mt-1 leading-relaxed">
                {formatAddress()}
                <br />
                {company.address.landmark}
              </dd>
            </div>
            <div>
              <dt className="text-fg-subtle">Email</dt>
              <dd className="mt-1">{company.email}</dd>
            </div>
            <div>
              <dt className="text-fg-subtle">Founders</dt>
              <dd className="mt-1">
                {company.founders[0].name}, {company.founders[0].role}
                <br />
                {company.founders[1].name}, {company.founders[1].role}
              </dd>
            </div>
          </dl>
        </div>

        <form
          className="rounded-xl border border-line bg-cream p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            toast.success("Message received — we will reply from the plant.");
          }}
        >
          {sent ? (
            <p className="text-base leading-relaxed">
              Thank you. The Ramannagudem desk has your note. For bottle orders,
              the cart is faster.
            </p>
          ) : (
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Name</span>
                <input
                  required
                  name="name"
                  className="h-11 w-full rounded-md border border-line-strong bg-paper px-3 text-sm outline-none ring-water/30 focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Mobile</span>
                <input
                  required
                  name="phone"
                  inputMode="numeric"
                  className="h-11 w-full rounded-md border border-line-strong bg-paper px-3 text-sm outline-none ring-water/30 focus:ring-2"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm font-medium">Message</span>
                <textarea
                  required
                  name="message"
                  className="min-h-32 w-full rounded-md border border-line-strong bg-paper px-3 py-3 text-sm outline-none ring-water/30 focus:ring-2"
                />
              </label>
              <Button type="submit" variant="ink">
                Send message
              </Button>
            </div>
          )}
        </form>
      </main>
      <Footer />
    </div>
  );
}
