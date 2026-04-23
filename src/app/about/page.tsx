import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, Eyebrow } from "@/components/section";
import { CTABand } from "@/components/cta-band";
import { founder, coreValues } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "FMY Chartered Accountants — founded by Faraz Yunus (FCCA, ACA). Partner-led London accountancy built on 17 years of EY and listed-entity experience across four continents.",
};

const supportingTeam = [
  {
    role: "Senior chartered accountant",
    focus:
      "Owns statutory accounts, month-end review, and the quality sign-off chain on every engagement.",
  },
  {
    role: "Tax lead",
    focus:
      "Runs corporation tax, VAT, R&D claims, personal tax, and the quarterly planning cycle.",
  },
  {
    role: "Dedicated bookkeeper",
    focus:
      "Daily transactions, receipt capture, supplier & customer ledgers — books closed by the 7th.",
  },
  {
    role: "Payroll specialist",
    focus:
      "RTI-compliant pay runs, pensions auto-enrolment, P11Ds, statutory leave and CIS.",
  },
  {
    role: "Client service lead",
    focus:
      "Ensures every engagement lands on time, in scope, and on budget — the reason our filing record is clean.",
  },
];

const values = [
  {
    h: "Say what you mean",
    p: "No hedging, no consultant-speak. If your accounts are messy, we'll tell you. If a tax position is risky, we'll write down why.",
  },
  {
    h: "The partner is the product",
    p: "A partner reviews every material file. Nothing leaves the firm with a junior's name alone on it.",
  },
  {
    h: "Fixed fees, always",
    p: "You should never open an invoice and feel surprised. If we underquote, that's our problem to fix.",
  },
  {
    h: "Teach, don't gatekeep",
    p: "Our job is to make you financially fluent — not dependent. We explain the why, not just the what.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FMY"
        title={
          <>
            Partner-led accountancy,{" "}
            <span className="italic font-light">
              built around a single premise.
            </span>
          </>
        }
        description="Serious businesses deserve serious, senior-led accountancy — without the Big 4 politics or the Big 4 invoice. Every file, every return, every piece of advice carries a partner's name."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border hairline-gold bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 55% 45% at 100% 0%, rgba(201,164,73,0.35), transparent 60%)",
              }}
            />
            <div className="grain absolute inset-0" />

            <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 p-10 sm:p-14">
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center font-display text-5xl text-ink-950 font-semibold shadow-2xl shadow-black/30">
                  {founder.initials}
                  <span className="absolute -bottom-2 -right-2 rounded-full bg-ink-950 border hairline-gold px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold-400">
                    Founder
                  </span>
                </div>
                <div className="mt-6 text-center lg:text-left">
                  <div className="font-display text-2xl text-bone-50 tracking-tight">
                    {founder.name}
                  </div>
                  <div className="text-sm text-gold-400 uppercase tracking-[0.14em] mt-1">
                    {founder.role}
                  </div>
                  <div className="mt-2 text-xs text-slate-muted">
                    {founder.quals}
                  </div>
                </div>
              </div>

              <div>
                <Eyebrow>Founder's note</Eyebrow>
                <blockquote className="mt-5 font-display text-3xl sm:text-[2.25rem] leading-[1.1] tracking-tight bone-gradient-text">
                  “{founder.quote}”
                </blockquote>
                <div className="mt-8 space-y-5 text-bone-100 leading-relaxed">
                  {founder.bio.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Big 4 · EY",
                    "17+ yrs experience",
                    "Four continents",
                    "Board-level finance",
                    "Cross-border tax",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border hairline bg-ink-950/40 px-3 py-1 text-xs text-bone-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 border-t hairline">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <SectionHeading
                eyebrow="Our story"
                title={
                  <>
                    Small by design.{" "}
                    <span className="italic font-light">
                      Senior by default.
                    </span>
                  </>
                }
              />
              <div className="mt-8 space-y-5 text-bone-100 leading-relaxed">
                <p>
                  FMY was founded on the principles of precision, integrity,
                  and personalised service — a direct response to the pattern
                  that dominates larger firms: juniors doing the work, partners
                  farming the relationship, and clients paying the bill.
                </p>
                <p>
                  We built the inverse. We cap our client base per partner, we
                  write fees up front, and we make sure every engagement has a
                  single named owner who picks up the phone. It's accounting
                  that works like a senior hire, not a supplier.
                </p>
                <p>
                  The result is a firm that grows entirely by referral. That
                  ratio is the only scorecard we trust.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <StatBlock v="17+ yrs" l="Big 4 & listed-entity experience" />
              <StatBlock v="4" l="Continents of prior practice" />
              <StatBlock v="125+ yrs" l="Cumulative team expertise" />
              <StatBlock v="0" l="HMRC penalties on our watch" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title={
              <>
                Four principles.{" "}
                <span className="italic font-light">In every engagement.</span>
              </>
            }
            description="These aren't posters on the wall — they're the working rules that shape how we scope, price, and deliver."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
            {coreValues.map((v, i) => (
              <div
                key={v.k}
                className="bg-ink-950 hover:bg-ink-900 transition-colors p-7"
              >
                <div className="font-display text-4xl tracking-tight text-gold-500/30">
                  0{i + 1}
                </div>
                <h3 className="mt-5 font-display text-xl text-bone-50">
                  {v.k}
                </h3>
                <p className="mt-3 text-sm text-slate-muted leading-relaxed">
                  {v.v}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="How we operate"
            title={
              <>
                The working rules —{" "}
                <span className="italic font-light">
                  and what we won't do.
                </span>
              </>
            }
          />
          <div className="mt-14 grid md:grid-cols-2 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
            {values.map((v) => (
              <div
                key={v.h}
                className="bg-ink-950 p-8 hover:bg-ink-900 transition-colors"
              >
                <h3 className="font-display text-2xl text-bone-50 tracking-tight">
                  {v.h}
                </h3>
                <p className="mt-4 text-slate-muted leading-relaxed">{v.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="The team around the founder"
            title={
              <>
                Senior specialists.{" "}
                <span className="italic font-light">On every engagement.</span>
              </>
            }
            description="FMY is a partner-led firm — Faraz personally reviews every material file. He is supported by a specialist team across tax, audit, bookkeeping, payroll and client service."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportingTeam.map((m, i) => (
              <div
                key={m.role}
                className="rounded-2xl border hairline bg-ink-900/40 hover:bg-ink-900 p-7 transition-colors"
              >
                <div className="font-display text-4xl tracking-tight text-gold-500/30">
                  0{i + 1}
                </div>
                <div className="mt-4 font-display text-lg text-bone-50">
                  {m.role}
                </div>
                <p className="mt-3 text-sm text-slate-muted leading-relaxed">
                  {m.focus}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-slate-muted max-w-2xl">
            We're growing — selectively. If you are a qualified chartered
            accountant, tax specialist, or senior bookkeeper who would thrive
            in a partner-led, no-politics firm, please{" "}
            <a href="/contact" className="text-gold-400 hover:text-gold-300">
              get in touch
            </a>
            .
          </p>
        </Container>
      </section>

      <CTABand />
    </>
  );
}

function StatBlock({ v, l }: { v: string; l: string }) {
  return (
    <div className="rounded-2xl border hairline bg-ink-900/40 p-6">
      <div className="font-display text-4xl tracking-tight gold-gradient-text">
        {v}
      </div>
      <div className="mt-2 text-sm text-slate-muted leading-snug">{l}</div>
    </div>
  );
}
