import Image from "next/image";
import { Container } from "@/components/container";
import { LinkButton, ArrowIcon } from "@/components/button";
import { site } from "@/lib/site";

export function CTABand({
  eyebrow = "Take the first step",
  title,
  description,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border hairline-gold bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 sm:p-14 lg:p-20">
          <Image
            src="/img/cta-london.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 100% 50%, rgba(201,164,73,0.2), transparent 60%), linear-gradient(135deg, rgba(2,51,32,0.65), rgba(1,24,14,0.78))",
            }}
          />
          <div className="grain absolute inset-0" />

          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
                {eyebrow}
              </div>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight">
                {title ?? (
                  <>
                    <span className="bone-gradient-text">
                      30 minutes with a partner
                    </span>{" "}
                    <span className="italic font-light gold-gradient-text">
                      could save you your year-end.
                    </span>
                  </>
                )}
              </h2>
              {description && (
                <p className="mt-5 text-lg text-slate-muted leading-relaxed max-w-xl">
                  {description}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
              <LinkButton href="/contact" variant="primary" size="lg">
                Book a consultation <ArrowIcon />
              </LinkButton>
              <span className="hidden sm:block text-xs uppercase tracking-[0.18em] text-slate-muted">
                or
              </span>
              <a
                href={site.phoneHref}
                className="cta-phone group inline-flex items-center gap-3 rounded-full pl-1.5 pr-5 py-1.5 border hairline-gold bg-ink-950/40 hover:bg-ink-950/70 transition-all duration-300"
              >
                <span className="cta-phone-badge relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-gold-500/15 text-gold-300 group-hover:bg-gold-500/30 group-hover:text-gold-200 transition-colors">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cta-phone-icon transition-transform"
                    aria-hidden
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="cta-phone-ring absolute inset-0 rounded-full ring-1 ring-gold-400/40" />
                </span>
                <span className="flex flex-col leading-none gap-1 text-left">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400/80 group-hover:text-gold-300 transition-colors">
                    Call us direct
                  </span>
                  <span className="text-[15px] font-medium text-bone-50 tabular-nums tracking-tight">
                    {site.phone}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
