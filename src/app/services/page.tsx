import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/site";
import { ServiceIcon } from "@/components/service-icon";
import { ArrowIcon } from "@/components/button";
import { CTABand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From day-to-day bookkeeping to corporate finance, FMY delivers the full accounting stack under one roof — partner-led, fixed fee.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Eight disciplines.
            <br />
            <span className="italic font-light">One finance partner.</span>
          </>
        }
        description="Every FMY engagement is led by a qualified chartered accountant and signed off by a partner. Pick the services you need today; scale into the rest as you grow."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-hover group relative rounded-2xl border hairline bg-ink-900/40 hover:bg-ink-900 p-8 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 font-display text-[10rem] leading-none select-none text-gold-500/[0.04] group-hover:text-gold-500/10 transition-colors duration-500">
                  0{i + 1}
                </div>
                <div className="relative flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-ink-800 text-gold-400 border hairline transition-all duration-300 group-hover:border-gold-400/40 group-hover:text-gold-300 group-hover:bg-ink-700">
                        <ServiceIcon slug={s.slug} />
                      </span>
                      <h3 className="font-display text-2xl text-bone-50 tracking-tight transition-colors duration-300 group-hover:text-gold-300">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-5 text-slate-muted leading-relaxed">
                      {s.summary}
                    </p>
                    <div className="mt-6 flex items-center justify-between pt-5 border-t hairline transition-colors duration-300 group-hover:border-gold-400/20">
                      <span className="text-sm text-slate-muted">
                        {s.included.length} specialisms
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm text-gold-400 transition-transform duration-300 group-hover:translate-x-1">
                        Learn more <ArrowIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
