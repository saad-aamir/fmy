import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section";
import { services } from "@/lib/site";
import { ServiceIcon } from "@/components/service-icon";
import { ArrowIcon } from "@/components/button";

export function ServicesGrid() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                Full-service finance,{" "}
                <span className="italic font-light">
                  packaged for the way you actually work.
                </span>
              </>
            }
            description="Eight disciplines, one partner. Pick the services you need today — scale into the rest as you grow. Every engagement is led by a qualified chartered accountant."
          />
          <Link
            href="/services"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm text-gold-400 hover:text-gold-300 shrink-0"
          >
            View all services <ArrowIcon />
          </Link>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative bg-ink-950 hover:bg-ink-900 p-7 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-ink-800 text-gold-400 border hairline">
                  <ServiceIcon slug={s.slug} />
                </span>
                <ArrowIcon className="text-slate-muted group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="mt-6 font-display text-xl tracking-tight text-bone-50">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-muted leading-relaxed min-h-[5rem] line-clamp-4">
                {s.short}
              </p>
              <div className="mt-5 pt-4 border-t hairline text-xs text-slate-muted flex items-center justify-between">
                <span>{s.included.length} sub-services</span>
                <span className="text-gold-400 group-hover:text-gold-300">
                  Learn more
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 lg:hidden text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-gold-400 hover:text-gold-300"
          >
            View all services <ArrowIcon />
          </Link>
        </div>
      </Container>
    </section>
  );
}
