import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { company, formatAddress, navLinks } from "@/lib/company";

export function Footer() {
  return (
    <footer className="bg-ink text-on-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12 md:px-12 lg:px-16">
        <div className="md:col-span-5">
          <Logo className="text-on-ink" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-on-ink-muted">
            {company.tagline} Bottled in Ramannagudem, Tadepalligudem — a short
            walk from Vasavi Engineering College.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-ink-subtle">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm text-on-ink-muted">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-on-ink">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/shop" className="hover:text-on-ink">
                Order bottles
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-on-ink-subtle">
            Plant
          </p>
          <p className="mt-4 text-sm leading-relaxed text-on-ink-muted">
            {formatAddress()}
            <br />
            {company.address.landmark}
          </p>
          <p className="mt-3 text-sm text-on-ink-muted">{company.hours}</p>
        </div>
      </div>
      <div className="border-t border-on-ink/10 px-6 py-5 text-xs text-on-ink-subtle md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}</p>
          <p>
            Founder {company.founders[0].name} · Co-Founder{" "}
            {company.founders[1].name}
          </p>
        </div>
      </div>
    </footer>
  );
}
