import Link from "next/link";
import { services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t hairline bg-ink-950 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-ink-800 border hairline-gold">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 3h12v2.5H5.5v3H13v2.5H5.5V15H3V3z"
                  fill="#C9A449"
                />
              </svg>
            </span>
            <span className="font-display text-xl font-semibold bone-gradient-text">
              FMY
            </span>
          </div>
          <p className="mt-5 text-sm text-slate-muted max-w-sm leading-relaxed">
            Partner-led chartered accountancy based in the City of London.
            Serving founders, scale-ups, and established UK businesses with
            125+ years of cumulative Big 4 experience.
          </p>
          <div className="mt-6 space-y-1.5 text-sm">
            <div className="text-bone-100">{site.address.line1}</div>
            <div className="text-bone-100">{site.address.line2}</div>
            <a
              href={site.phoneHref}
              className="block text-slate-muted hover:text-gold-400 transition-colors"
            >
              {site.phone}
            </a>
            <a
              href={site.emailHref}
              className="block text-slate-muted hover:text-gold-400 transition-colors"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-gold-400 font-medium">
            Services
          </div>
          <ul className="mt-5 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-bone-100 hover:text-gold-400 transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-gold-400 font-medium">
            Firm
          </div>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <Link
                href="/about"
                className="text-bone-100 hover:text-gold-400 transition-colors"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/virtual-finance-office"
                className="text-bone-100 hover:text-gold-400 transition-colors"
              >
                Virtual Finance Office
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="text-bone-100 hover:text-gold-400 transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="text-bone-100 hover:text-gold-400 transition-colors"
              >
                Resources & insights
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-bone-100 hover:text-gold-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-gold-400 font-medium">
            Stay informed
          </div>
          <p className="mt-5 text-sm text-slate-muted leading-relaxed">
            One concise tax & finance update a month. Written by our partners.
            No promo.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 min-w-0 h-10 rounded-full border hairline bg-ink-900 px-4 text-sm text-bone-50 placeholder:text-slate-muted focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button
              type="submit"
              className="h-10 px-4 rounded-full bg-gold-500 text-ink-950 text-sm font-medium hover:bg-gold-400 transition-colors"
            >
              Join
            </button>
          </form>
          <div className="mt-6 flex gap-3">
            <SocialLink href={site.social.linkedin} label="LinkedIn">
              <LinkedIn />
            </SocialLink>
            <SocialLink href={site.social.instagram} label="Instagram">
              <Instagram />
            </SocialLink>
            <SocialLink href={site.social.youtube} label="YouTube">
              <YouTube />
            </SocialLink>
          </div>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-6 flex flex-col lg:flex-row lg:justify-between gap-3 text-xs text-slate-muted">
          <div className="space-y-1">
            <div>
              © {new Date().getFullYear()} {site.registration.entity}. Trading
              as {site.fullName}.
            </div>
            <div>
              Company No. {site.registration.companyNumber} (
              {site.registration.jurisdiction}). {site.regulator}.
            </div>
          </div>
          <div className="flex gap-6 shrink-0">
            <Link href="/privacy" className="hover:text-bone-50">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-bone-50">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-bone-50">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex items-center justify-center w-9 h-9 rounded-full border hairline text-bone-100 hover:text-gold-400 hover:border-gold-400/50 transition-colors"
    >
      {children}
    </a>
  );
}

function LinkedIn() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M3.3 12H1V4.8h2.3V12zM2.15 3.8a1.3 1.3 0 110-2.6 1.3 1.3 0 010 2.6zM12.5 12h-2.3V8.5c0-.85-.02-1.94-1.18-1.94-1.18 0-1.36.92-1.36 1.88V12H5.37V4.8h2.2v.98h.04a2.4 2.4 0 012.16-1.19c2.31 0 2.73 1.52 2.73 3.5V12z" />
    </svg>
  );
}
function Instagram() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="1.5" y="1.5" width="11" height="11" rx="3" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="10.2" cy="3.8" r="0.5" fill="currentColor" />
    </svg>
  );
}
function YouTube() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
      <path d="M13.5 4.3a1.7 1.7 0 00-1.2-1.2C11.3 2.8 7 2.8 7 2.8s-4.3 0-5.3.3A1.7 1.7 0 00.5 4.3C.2 5.3.2 7 .2 7s0 1.7.3 2.7a1.7 1.7 0 001.2 1.2c1 .3 5.3.3 5.3.3s4.3 0 5.3-.3a1.7 1.7 0 001.2-1.2c.3-1 .3-2.7.3-2.7s0-1.7-.3-2.7zM5.6 9V5l3.5 2L5.6 9z" />
    </svg>
  );
}
