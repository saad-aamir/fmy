import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { LinkButton, ArrowIcon } from "@/components/button";
import { HeroBackdrop } from "@/components/home/hero-backdrop";

export function Hero() {
  return (
    <section
      data-hero-backdrop
      className="relative overflow-hidden mesh-hero"
    >
      <HeroBackdrop />
      <div className="grain absolute inset-0 z-[1]" />
      <div
        className="absolute inset-0 opacity-[0.04] z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />

      <Container className="relative z-10 pt-20 sm:pt-28 pb-24 sm:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border hairline bg-ink-900/60 pl-1.5 pr-4 py-1.5 text-xs">
            <span className="rounded-full bg-gold-500/15 text-gold-400 px-2.5 py-0.5 font-medium">
              New
            </span>
            <span className="text-bone-100">
              Virtual Finance Office — now live
            </span>
            <Link
              href="/virtual-finance-office"
              className="text-gold-400 hover:text-gold-300 inline-flex items-center gap-1"
            >
              Read more <ArrowIcon className="w-3 h-3" />
            </Link>
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-[5.25rem] leading-[1.02] tracking-tight">
            <span className="font-classic font-medium bone-gradient-text">
              The finance function
            </span>
            <br />
            <span className="font-display gold-gradient-text italic">
              your business deserves.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg sm:text-xl text-slate-muted leading-relaxed">
            Partner-led chartered accountancy for ambitious UK businesses. No
            jargon. No hidden fees. Just clarity, compliance, and the kind of
            strategic advice that used to require a Big 4 invoice.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LinkButton href="/contact" variant="primary" size="lg">
              Book a free consultation
              <ArrowIcon />
            </LinkButton>
            <LinkButton href="/services" variant="gold-outline" size="lg">
              Explore services
            </LinkButton>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5 text-sm text-slate-muted">
            <a
              href="https://www.icaew.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 pr-4 sm:border-r border-white/10"
              aria-label="Regulated by ICAEW — opens icaew.com"
            >
              <Image
                src="/icaew-badge.png"
                alt="ICAEW Chartered Accountants"
                width={1203}
                height={450}
                className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <TrustBadge>125+ yrs Big 4 experience</TrustBadge>
            <TrustBadge>Fixed monthly fees</TrustBadge>
            <TrustBadge>Xero platinum partner</TrustBadge>
          </div>
        </div>

        <FloatingCards />
      </Container>
    </section>
  );
}

function TrustBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <circle cx="7" cy="7" r="6.5" stroke="currentColor" opacity="0.3" />
        <path
          d="M4.5 7l1.8 1.8L9.5 5.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{children}</span>
    </span>
  );
}

function FloatingCards() {
  return (
    <div className="relative mt-20 grid sm:grid-cols-3 gap-5">
      <StatCard
        label="Average tax saving"
        value="~17%"
        detail="for advisory clients to date"
      />
      <StatCard
        label="Client retention"
        value="100%"
        detail="since incorporation"
        highlight
      />
      <StatCard
        label="Year-end accounts"
        value="21 days"
        detail="average turnaround"
      />
    </div>
  );
}

function StatCard({
  label,
  value,
  detail,
  highlight,
}: {
  label: string;
  value: string;
  detail: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-2xl border hairline p-6 " +
        (highlight ? "glass hairline-gold" : "bg-ink-900/70 backdrop-blur")
      }
    >
      <div className="text-xs uppercase tracking-[0.18em] text-slate-muted">
        {label}
      </div>
      <div className="mt-4 font-display text-5xl tracking-tight">
        <span className={highlight ? "gold-gradient-text" : "bone-gradient-text"}>
          {value}
        </span>
      </div>
      <div className="mt-2 text-sm text-slate-muted">{detail}</div>
    </div>
  );
}
