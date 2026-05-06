import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { LinkButton, ArrowIcon } from "@/components/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a partner at FMY. Book a consultation, request a quote, or ask a question — we reply within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's have the{" "}
            <span className="italic font-light">first conversation.</span>
          </>
        }
        description="A 30-minute discovery call with a partner. You'll leave with a clearer diagnosis — whether you end up working with us or not."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-start">
            <div>
              <ContactForm />
            </div>

            <aside className="space-y-5">
              <div className="rounded-2xl border hairline-gold bg-gradient-to-br from-ink-800 to-ink-900 p-7">
                <div className="text-xs uppercase tracking-[0.18em] text-gold-400">
                  Fastest route
                </div>
                <div className="mt-3 font-display text-2xl text-bone-50 tracking-tight">
                  Book straight into a partner's calendar
                </div>
                <LinkButton
                  href={site.booking}
                  external
                  variant="primary"
                  size="md"
                  className="mt-5 w-full"
                >
                  Open calendar <ArrowIcon />
                </LinkButton>
              </div>

              <InfoBlock
                title="Call us"
                value={site.phone}
                href={site.phoneHref}
                detail="Weekdays · 9am–6pm GMT"
              />
              <InfoBlock
                title="Email"
                value={site.email}
                href={site.emailHref}
                detail="Response within 1 business day"
              />

              <div className="rounded-2xl border hairline bg-ink-900/40 p-7">
                <div className="text-xs uppercase tracking-[0.18em] text-gold-400">
                  Offices
                </div>
                <div className="mt-4 text-bone-100 leading-relaxed">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </div>
                <div className="mt-5 text-xs text-slate-muted">
                  Visits by appointment only — buzz the reception on the City
                  side of the building.
                </div>
              </div>

              <div className="rounded-2xl border hairline bg-ink-900/40 p-7">
                <div className="text-xs uppercase tracking-[0.18em] text-gold-400">
                  Not quite ready?
                </div>
                <p className="mt-3 text-sm text-slate-muted leading-relaxed">
                  Have a look at{" "}
                  <a href="/pricing" className="text-gold-400 hover:text-gold-300">
                    pricing
                  </a>{" "}
                  or read a recent{" "}
                  <a
                    href="/resources"
                    className="text-gold-400 hover:text-gold-300"
                  >
                    brief
                  </a>
                  . We won't chase.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoBlock({
  title,
  value,
  href,
  detail,
}: {
  title: string;
  value: string;
  href: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border hairline bg-ink-900/40 p-7">
      <div className="text-xs uppercase tracking-[0.18em] text-gold-400">
        {title}
      </div>
      <a
        href={href}
        className="mt-3 block font-display text-2xl text-bone-50 hover:text-gold-300 transition-colors tracking-tight"
      >
        {value}
      </a>
      <div className="mt-1 text-xs text-slate-muted">{detail}</div>
    </div>
  );
}
