import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section";
import { LinkButton, ArrowIcon } from "@/components/button";
import { services, servicesBySlug, site } from "@/lib/site";
import { ServiceIcon } from "@/components/service-icon";
import { CTABand } from "@/components/cta-band";
import { FAQ } from "@/components/faq";
import { ServiceSchema, BreadcrumbSchema } from "@/components/json-ld";

// Static imports → Next pre-optimizes at build time AND auto-generates
// a tiny base64 LQIP for placeholder="blur" (instant fade-in).
import bookkeepingImg from "../../../../public/img/service-bookkeeping.jpg";
import accountingImg from "../../../../public/img/service-accounting.jpg";
import taxImg from "../../../../public/img/service-tax.jpg";
import payrollImg from "../../../../public/img/service-payroll.jpg";
import auditImg from "../../../../public/img/service-audit.jpg";
import advisoryImg from "../../../../public/img/service-advisory.jpg";
import corporateFinanceImg from "../../../../public/img/service-corporate-finance.jpg";
import valuationsImg from "../../../../public/img/service-valuations.jpg";
import directorIdImg from "../../../../public/img/service-director-id.jpg";

const serviceHero: Record<string, StaticImageData> = {
  bookkeeping: bookkeepingImg,
  accounting: accountingImg,
  tax: taxImg,
  payroll: payrollImg,
  "audit-assurance": auditImg,
  advisory: advisoryImg,
  "corporate-finance": corporateFinanceImg,
  "business-valuations": valuationsImg,
  "director-id-verification": directorIdImg,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const s = servicesBySlug[slug];
  if (!s) return {};
  return {
    title: s.title,
    description: s.summary,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: `${s.title} · FMY Chartered Accountants`,
      description: s.summary,
      url: `/services/${s.slug}`,
      type: "website",
    },
  };
}

export default async function ServiceDetail(
  props: PageProps<"/services/[slug]">
) {
  const { slug } = await props.params;
  const service = servicesBySlug[slug];
  if (!service) notFound();

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const next = services[(currentIndex + 1) % services.length];
  const prev = services[(currentIndex - 1 + services.length) % services.length];

  const heroImage = serviceHero[service.slug];

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.summary}
        slug={service.slug}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.slug}` },
        ]}
      />
      <section className="relative overflow-hidden mesh-soft border-b hairline">
        {heroImage && (
          <>
            <Image
              src={heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              quality={65}
              placeholder="blur"
              className="object-cover opacity-60"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(1,24,14,0.55) 0%, rgba(1,24,14,0.78) 65%, var(--color-ink-950) 100%)",
              }}
            />
          </>
        )}
        <div className="grain absolute inset-0" />
        <Container className="relative pt-20 pb-16 sm:pt-24 sm:pb-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-slate-muted hover:text-gold-400 transition-colors"
          >
            <ArrowIcon className="rotate-180" />
            All services
          </Link>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-3xl">
              <Eyebrow>Service</Eyebrow>
              <div className="mt-5 flex items-center gap-5 sm:gap-6">
                <span className="shrink-0 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-ink-800 text-gold-400 border hairline-gold">
                  <ServiceIcon slug={service.slug} size={36} />
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight bone-gradient-text leading-[1.05]">
                  {service.title}
                </h1>
              </div>
              <p className="mt-8 text-xl sm:text-2xl text-bone-100 leading-relaxed max-w-2xl font-light">
                {service.short}
              </p>
            </div>
            <div className="rounded-2xl border hairline-gold bg-ink-900/60 p-6 min-w-[16rem]">
              <div className="text-xs uppercase tracking-[0.18em] text-gold-400">
                Start the conversation
              </div>
              <div className="mt-3 font-display text-xl text-bone-50 tracking-tight leading-snug">
                A 45-minute consultation with a partner, no cost, no
                obligation.
              </div>
              <LinkButton
                href={site.booking}
                external
                variant="primary"
                size="md"
                className="mt-5 w-full"
              >
                Book a meeting <ArrowIcon />
              </LinkButton>
              <LinkButton
                href="/pricing"
                variant="ghost"
                size="md"
                className="mt-2 w-full border hairline"
              >
                View packages
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl tracking-tight bone-gradient-text leading-[1.1]">
                What we do for you
              </h2>
              <p className="mt-6 text-lg text-bone-100 leading-relaxed">
                {service.summary}
              </p>
              {service.longDescription && (
                <p className="mt-5 text-lg text-slate-muted leading-relaxed">
                  {service.longDescription}
                </p>
              )}

              <div className="mt-12">
                <div className="text-xs uppercase tracking-[0.18em] text-gold-400 font-medium">
                  Outcomes
                </div>
                <ul className="mt-5 space-y-4">
                  {service.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex gap-4 rounded-xl border hairline bg-ink-900/40 p-5"
                    >
                      <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold-500/15 text-gold-400">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M2.5 6l2.5 2.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-bone-100 leading-relaxed">
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14">
                <div className="text-xs uppercase tracking-[0.18em] text-gold-400 font-medium">
                  What's included
                </div>
                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                  {service.included.map((i) => (
                    <div
                      key={i}
                      className="flex gap-3 text-sm text-bone-100 leading-relaxed"
                    >
                      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gold-400" />
                      <span>{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start space-y-5">
              <div className="rounded-2xl border hairline bg-ink-900/60 p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-gold-400">
                  Ideal for
                </div>
                <p className="mt-3 text-bone-100 leading-relaxed">
                  {service.idealFor}
                </p>
              </div>

              <div className="rounded-2xl border hairline bg-ink-900/60 p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-gold-400">
                  Also explore
                </div>
                <div className="mt-4 space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .slice(0, 4)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between py-2 text-sm text-bone-100 hover:text-gold-400 group"
                      >
                        <span>{s.title}</span>
                        <ArrowIcon className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FAQ
        eyebrow={`About ${service.title.toLowerCase()}`}
        title={<>Common questions <span className="italic font-light">at the first call.</span></>}
        items={faqsFor(service.slug)}
      />

      <section className="py-12 border-t hairline">
        <Container>
          <div className="grid sm:grid-cols-2 gap-5">
            <Link
              href={`/services/${prev.slug}`}
              className="card-hover group rounded-2xl border hairline bg-ink-900/40 hover:bg-ink-900 p-6"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-slate-muted">
                Previous
              </div>
              <div className="mt-2 flex items-center gap-3 font-display text-xl text-bone-50 transition-colors duration-300 group-hover:text-gold-300">
                <ArrowIcon className="rotate-180 text-gold-400 transition-transform duration-300 group-hover:-translate-x-1" />
                {prev.title}
              </div>
            </Link>
            <Link
              href={`/services/${next.slug}`}
              className="card-hover group rounded-2xl border hairline bg-ink-900/40 hover:bg-ink-900 p-6 text-right"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-slate-muted">
                Next
              </div>
              <div className="mt-2 flex items-center justify-end gap-3 font-display text-xl text-bone-50 transition-colors duration-300 group-hover:text-gold-300">
                {next.title}
                <ArrowIcon className="text-gold-400 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <CTABand
        eyebrow={service.title}
        title={
          <>
            <span className="bone-gradient-text">Ready for a partner</span>{" "}
            <span className="italic font-light gold-gradient-text">
              who actually picks up?
            </span>
          </>
        }
      />
    </>
  );
}

function faqsFor(slug: string) {
  const common = [
    {
      q: "How quickly can you start?",
      a: "Most engagements begin within 10 business days of signing. For urgent deadlines we can move faster, call us and we'll tell you honestly whether it's realistic.",
    },
    {
      q: "Is the price really fixed?",
      a: "Yes. You get a written scope and written fee. If additional work comes up, we'll quote it before we do it, no retrospective bills, ever.",
    },
  ];
  const specific: Record<string, { q: string; a: string }[]> = {
    "bookkeeping": [
      {
        q: "Which software do you use?",
        a: "We're Xero, QuickBooks and Sage partners. We can also work with FreeAgent and NetSuite. Dext handles receipt capture across all of them.",
      },
    ],
    tax: [
      {
        q: "Can you handle historic errors or missed returns?",
        a: "Yes, we run a confidential diagnostic, then handle voluntary disclosures to HMRC where needed. We've negotiated dozens of penalty mitigations.",
      },
    ],
    "audit-assurance": [
      {
        q: "Are you independent from my current accountant?",
        a: "Yes. We frequently audit companies whose compliance work is done by another firm, including the Big 4, and we'll happily work alongside them.",
      },
    ],
    "corporate-finance": [
      {
        q: "Do you work on buy-side and sell-side?",
        a: "Both. We've supported £250k seed rounds through to £40m exits. For regulated transactions we work with a panel of partnered regulated advisers.",
      },
    ],
  };
  return [...(specific[slug] ?? []), ...common];
}
