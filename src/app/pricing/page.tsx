import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section";
import { LinkButton, ArrowIcon } from "@/components/button";
import { services } from "@/lib/site";
import { CTABand } from "@/components/cta-band";
import { FAQ } from "@/components/faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent monthly packages from FMY Chartered Accountants. Classic £149, Premium £249, Exclusive £649 — with add-ons and premium services.",
};

const tiers = [
  {
    name: "Classic",
    price: "£149",
    unit: "/month",
    who: "Essentials for compliant, well-run UK companies.",
    features: [
      "Preparation of Company Year-End Financial Statements",
      "Submission of Accounts to Companies House",
      "Year-End Corporation Tax Computation",
      "Submission of CT600 to HMRC",
      "Statement of Account submission to Companies House",
      "Calculation and submission of quarterly VAT return",
      "Monthly payroll and submission of RTI",
      "Mobile app for your quotes and invoicing",
      "Business Guides and Resources",
      "Tax Planning throughout the year",
      "Unlimited Accountancy Support",
      "Tax Agents with HMRC",
      "Regular reminders of all your deadlines",
      "Dedicated account manager",
    ],
  },
  {
    name: "Premium",
    price: "£249",
    unit: "/month",
    who: "For growing businesses that need strategic advisory.",
    recommended: true,
    features: [
      "Everything in Classic",
      "Business and Tax Advisory included",
      "Directors' self-assessment tax return included",
      "EC Sales List (ECL)",
      "Foreign Bank Accounts",
      "Dividend vouchers for shareholders",
      "Mortgage letters, visa letters and other financial references",
      "Quarterly Management Accounts",
      "Representation in the event of an HMRC investigation",
    ],
  },
  {
    name: "Exclusive",
    price: "£649",
    unit: "/month",
    who: "Fully supported — with monthly reporting and legal cover.",
    features: [
      "Everything in Premium",
      "Preparation of P11D form",
      "Monthly Management Accounts",
      "Quarterly Cashflow forecasts and planning",
      "Tax Investigation Cover",
      "Registered address, scanning and email forwarding",
      "Full business review and financial summaries",
      "Advisory on CRM integration with cloud softwares to automate workflows",
      "Review of systems and controls",
      "Access to employment law, health and safety and commercial matters",
      "Legal advice, document templates and contract checking",
    ],
  },
];

const addOns = [
  { name: "Tax Investigation Cover", price: "£20", unit: "/month" },
  { name: "Business Legal Support", price: "£25", unit: "/month" },
  { name: "Company Formation", price: "£299", unit: "one-off" },
  { name: "Registered Address", price: "From £20", unit: "/month" },
  { name: "Business Plan", price: "£499", unit: "one-off" },
];

const premiumServices = [
  { name: "Business Mentoring", price: "£499", unit: "/month" },
  { name: "Part-Time FD", price: "£499", unit: "/month" },
  { name: "Software Integration", price: "From £199", unit: "one-off" },
  { name: "Stock Management Software", price: "From £79", unit: "/month" },
  { name: "Time Sheets Software", price: "From £15", unit: "/month" },
];

const marketingHub = [
  { name: "Website & Hosting", price: "From £89", unit: "/month" },
  { name: "Branding", price: "From £49", unit: "one-off" },
  { name: "Search Engine Optimisation (SEO)", price: "£499", unit: "/month" },
  { name: "Pay-Per-Click (PPC)", price: "£199", unit: "set-up" },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Transparent packages.
            <br />
            <span className="italic font-light">No hidden charges.</span>
          </>
        }
        description="Three monthly packages — Classic, Premium and Exclusive — covering compliance, advisory and full operational support. Every fee is written up front; you always know what you're getting."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Monthly packages"
            title={
              <>
                Classic, Premium, Exclusive.{" "}
                <span className="italic font-light">Pick what fits.</span>
              </>
            }
          />

          <div className="mt-16 grid lg:grid-cols-3 gap-5">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={
                  "relative rounded-2xl p-8 flex flex-col " +
                  (t.recommended
                    ? "border hairline-gold bg-gradient-to-b from-ink-800 to-ink-900"
                    : "border hairline bg-ink-900/40")
                }
              >
                {t.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-500 text-ink-950 text-[11px] uppercase tracking-wider px-3 py-1 font-semibold">
                    Most chosen
                  </div>
                )}
                <div className="font-display text-2xl tracking-tight text-bone-50">
                  {t.name}
                </div>
                <div className="mt-1 text-sm text-slate-muted">{t.who}</div>
                <div className="mt-6 flex items-baseline gap-1.5">
                  <span
                    className={
                      "font-display text-5xl tracking-tight " +
                      (t.recommended
                        ? "gold-gradient-text"
                        : "bone-gradient-text")
                    }
                  >
                    {t.price}
                  </span>
                  <span className="text-sm text-slate-muted">{t.unit}</span>
                </div>
                <LinkButton
                  href="/contact"
                  variant={t.recommended ? "primary" : "gold-outline"}
                  size="md"
                  className="mt-6 w-full"
                >
                  Get started <ArrowIcon />
                </LinkButton>
                <div className="mt-8 pt-6 border-t hairline space-y-3">
                  {t.features.map((f) => (
                    <div
                      key={f}
                      className="flex gap-2.5 text-sm text-bone-100 leading-relaxed"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="shrink-0 mt-0.5 text-gold-400"
                      >
                        <path
                          d="M3 7l2.5 2.5L11 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="Add-ons"
            title={
              <>
                Plug extras into any package —{" "}
                <span className="italic font-light">only when you need them.</span>
              </>
            }
          />
          <PriceTable items={addOns} />
        </Container>
      </section>

      <section className="py-20 sm:py-24 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="Premium services"
            title={
              <>
                Senior advisory,{" "}
                <span className="italic font-light">when stakes rise.</span>
              </>
            }
            description="Strategic services for businesses in growth or transition. Priced independently and scoped to the engagement."
          />
          <PriceTable items={premiumServices} />
        </Container>
      </section>

      <section className="py-20 sm:py-24 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="Marketing hub"
            title={
              <>
                A brand and digital presence —{" "}
                <span className="italic font-light">
                  built alongside your numbers.
                </span>
              </>
            }
            description="A marketing arm for our clients. Websites, branding, SEO and PPC — delivered to the same fixed-fee standard as our accountancy work."
          />
          <PriceTable items={marketingHub} />
        </Container>
      </section>

      <section className="py-20 sm:py-24 border-t hairline">
        <Container>
          <SectionHeading
            eyebrow="Services in every package"
            title={
              <>
                Eight disciplines,{" "}
                <span className="italic font-light">all under one roof.</span>
              </>
            }
            description="The package prices above cover compliance. Any of our eight service lines can be scoped in or out — tell us what you need and we'll quote it."
          />
          <div className="mt-14 rounded-2xl border hairline overflow-hidden grid grid-cols-[1fr_auto] gap-px bg-white/5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="contents group"
              >
                <div className="bg-ink-950 group-hover:bg-ink-900 transition-colors px-6 py-5">
                  <div className="font-display text-lg text-bone-50">
                    {s.title}
                  </div>
                  <div className="text-sm text-slate-muted mt-1 max-w-2xl">
                    {s.short}
                  </div>
                </div>
                <div className="bg-ink-950 group-hover:bg-ink-900 transition-colors px-6 py-5 self-center flex items-center gap-3">
                  <span className="text-xs text-slate-muted whitespace-nowrap">
                    {s.included.length} specialisms
                  </span>
                  <ArrowIcon className="text-slate-muted group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FAQ
        eyebrow="Pricing"
        title={
          <>
            Common pricing{" "}
            <span className="italic font-light">questions.</span>
          </>
        }
        items={[
          {
            q: "Can I change packages later?",
            a: "Yes. You can move up or down any time — the new price applies from the next billing cycle. No penalties, no tie-ins.",
          },
          {
            q: "What's not included in the package fee?",
            a: "Anything outside the written scope — for example, complex tax investigations, bespoke audit work, or one-off projects. We'll quote those separately, in writing, before starting.",
          },
          {
            q: "Are there onboarding fees?",
            a: "No. Handover from your prior accountant, software setup, and prior-year file reviews are all included in your first month's fee.",
          },
          {
            q: "Can I mix and match?",
            a: "Yes. Pick a base package for compliance and bolt on premium services — Part-Time FD, Business Mentoring, Software Integration — only when you need them.",
          },
          {
            q: "Are prices VAT-inclusive?",
            a: "Prices shown exclude VAT. VAT is added to UK-based businesses per HMRC rules.",
          },
        ]}
      />

      <CTABand
        eyebrow="Next step"
        title={
          <>
            <span className="bone-gradient-text">Want a written quote?</span>{" "}
            <span className="italic font-light gold-gradient-text">
              We'll have it to you in 48 hours.
            </span>
          </>
        }
      />
    </>
  );
}

function PriceTable({
  items,
}: {
  items: { name: string; price: string; unit: string }[];
}) {
  return (
    <div className="mt-14 rounded-2xl border hairline overflow-hidden">
      <div className="grid grid-cols-[1fr_auto] gap-px bg-white/5">
        {items.map((it) => (
          <div key={it.name} className="contents">
            <div className="bg-ink-950 px-6 py-5 font-display text-lg text-bone-50">
              {it.name}
            </div>
            <div className="bg-ink-950 px-6 py-5 text-right">
              <span className="font-display text-lg gold-gradient-text whitespace-nowrap">
                {it.price}
              </span>
              <span className="text-xs text-slate-muted ml-1">{it.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
