import Link from "next/link";
import Image from "next/image";
import { services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t hairline bg-ink-950 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" aria-label="FMY Chartered Accountants, Home">
            <Image
              src="/fmy-wordmark.png"
              alt="FMY Chartered Accountants"
              width={845}
              height={336}
              className="h-14 w-auto"
            />
          </Link>
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
          <a
            href="https://www.icaew.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block group"
            aria-label="Regulated by the Institute of Chartered Accountants in England and Wales"
          >
            <Image
              src="/icaew-badge.png"
              alt="ICAEW Chartered Accountants"
              width={1203}
              height={450}
              className="h-14 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <div className="mt-2 text-[10px] uppercase tracking-[0.18em] text-slate-muted">
              Firm No. {site.registration.icaew}
            </div>
          </a>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-gold-400 font-medium">
            Services
          </div>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
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
                About
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
                Resources
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
          <Link
            href="/resources#subscribe"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold-400 hover:text-gold-300 transition-colors"
          >
            Subscribe to The FMY Brief
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M3 7h8m0 0L7 3m4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="mt-6 flex flex-wrap gap-3">
            <SocialLink href={site.social.linkedin} label="LinkedIn">
              <LinkedIn />
            </SocialLink>
            <SocialLink href={site.social.instagram} label="Instagram">
              <Instagram />
            </SocialLink>
            <SocialLink href={site.social.facebook} label="Facebook">
              <Facebook />
            </SocialLink>
            <SocialLink href={site.social.youtube} label="YouTube">
              <YouTube />
            </SocialLink>
            <SocialLink href={site.social.tiktok} label="TikTok">
              <TikTok />
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.66h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43A2.07 2.07 0 1 1 5.34 3.3a2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
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
function Facebook() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.75 8.43-4.91 8.43-9.93z" />
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
function TikTok() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52V6.41a4.85 4.85 0 0 1-1.84-.27z" />
    </svg>
  );
}
