import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Eyebrow, SectionHeading } from "@/components/section";
import { LinkButton, ArrowIcon } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { FAQ } from "@/components/faq";
import { vfoFeatures } from "@/lib/site";

export const metadata: Metadata = {
  title: "Virtual Finance Office",
  description:
    "A partner-led virtual finance team — 125+ years of cumulative Big 4 and corporate-finance expertise, delivered as one transparent monthly fee.",
};

const team = [
  { role: "Partner", focus: "Strategic oversight, sign-off, relationship" },
  { role: "Chartered accountant", focus: "Statutory work, month-end, review" },
  { role: "Dedicated bookkeeper", focus: "Daily transactions, reconciliation" },
  { role: "Tax lead", focus: "CT, VAT, R&D, planning" },
  { role: "Payroll specialist", focus: "Pay runs, pensions, compliance" },
];

export default function VFOPage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship offering"
        title={
          <>
            Your finance function.
            <br />
            <span className="italic font-light">Reimagined.</span>
          </>
        }
        description="FMY's Virtual Finance Office delivers 125+ years of cumulative Big 4 and corporate-finance expertise through partner-led service — handling everything from management accounts and cash-flow forecasting to board reporting and scenario planning, all for a transparent, fixed monthly fee."
      >
        <div className="flex flex-wrap gap-3">
          <LinkButton href="/contact" variant="primary" size="lg">
            Book a consultation <ArrowIcon />
          </LinkButton>
          <LinkButton href="/pricing" variant="gold-outline" size="lg">
            View pricing
          </LinkButton>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight bone-gradient-text leading-[1.05]">
              Growing businesses face an{" "}
              <span className="italic font-light">impossible choice.</span>
            </h2>
            <p className="mt-6 text-lg text-slate-muted leading-relaxed">
              Hire a full-time in-house CFO/FD and a finance team you can't
              quite afford yet — or make do with reactive accounting that never
              gets ahead of the curve.
            </p>
            <p className="mt-4 text-lg text-bone-100 leading-relaxed">
              We become your strategic finance team. Management accounts, cash
              flow forecasting, board reporting, scenario planning — all
              handled, at mid-market pricing.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
            {vfoFeatures.map((f, i) => (
              <div
                key={f.k}
                className="relative bg-ink-950 hover:bg-ink-900 transition-colors p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs text-gold-500/60 tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-gold-500/10 text-gold-400">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 7l2.5 2.5L11 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg text-bone-50 tracking-tight">
                  {f.k}
                </h3>
                <p className="mt-2 text-sm text-slate-muted leading-relaxed">
                  {f.v}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="Your team"
            title={
              <>
                Five specialists.{" "}
                <span className="italic font-light">
                  One point of contact.
                </span>
              </>
            }
            description="Every VFO engagement is delivered by a named team. You'll know who signs off your accounts, who runs your payroll, and who picks up when something urgent lands."
          />

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
            {team.map((m, i) => (
              <div key={m.role} className="relative bg-ink-950 p-7">
                <div className="font-display text-4xl text-gold-500/30 tracking-tight">
                  0{i + 1}
                </div>
                <div className="mt-5 font-display text-lg text-bone-50">
                  {m.role}
                </div>
                <div className="mt-2 text-sm text-slate-muted leading-relaxed">
                  {m.focus}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32 border-t hairline">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border hairline-gold bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 sm:p-14 lg:p-20">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(201,164,73,0.3), transparent 60%)",
              }}
            />
            <div className="grain absolute inset-0" />
            <div className="relative max-w-2xl">
              <Eyebrow>Pricing</Eyebrow>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[3rem] leading-[1.05] tracking-tight bone-gradient-text">
                Transparent, fixed monthly fees —{" "}
                <span className="italic font-light gold-gradient-text">
                  scoped to your business.
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-muted leading-relaxed">
                VFO engagements are priced per business. We publish three
                ready-made packages covering compliance, advisory and full
                operational support — and we quote the premium services you
                bolt on (Part-Time FD, Business Mentoring, Software
                Integration) up front.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/pricing" variant="primary" size="lg">
                  View packages <ArrowIcon />
                </LinkButton>
                <LinkButton href="/contact" variant="gold-outline" size="lg">
                  Get a custom quote
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FAQ
        eyebrow="Virtual Finance Office"
        title={
          <>
            How the VFO{" "}
            <span className="italic font-light">actually works</span>
          </>
        }
        items={[
          {
            q: "Do we need to move to specific software?",
            a: "We'll use whichever of Xero, QuickBooks, Sage or NetSuite makes most sense. If you're on something else, we'll advise honestly whether a switch pays back.",
          },
          {
            q: "How does this compare to hiring a full-time FD?",
            a: "A permanent in-house FD runs £120k+ all-in; plus bookkeeper, plus accountant, plus payroll. The VFO wraps all of that into one partner-led subscription, with a Part-Time FD add-on available alongside any package.",
          },
          {
            q: "What if we grow or shrink?",
            a: "Change packages any time — the new price applies from the next billing cycle. No retroactive billing. We'll re-scope transparently.",
          },
          {
            q: "Who owns the data?",
            a: "You do, always. The software, the ledger, the reports — all in your name. If you ever leave, we hand over cleanly within 5 business days.",
          },
        ]}
      />

      <CTABand
        eyebrow="Virtual Finance Office"
        title={
          <>
            <span className="bone-gradient-text">A complete finance team,</span>{" "}
            <span className="italic font-light gold-gradient-text">
              live in ten business days.
            </span>
          </>
        }
      />
    </>
  );
}
