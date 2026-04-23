import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section";
import { ArrowIcon } from "@/components/button";
import { CTABand } from "@/components/cta-band";
import { articles, articleCategories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Resources & insights",
  description:
    "Guides, analysis, and partner-written commentary from FMY — on UK tax, regulation, finance leadership, and running a better business.",
};

export default function ResourcesPage() {
  const featured = articles[0];
  const rest = articles.slice(1);
  const categories = ["All", ...articleCategories];

  return (
    <>
      <PageHero
        eyebrow="Resources & insights"
        title={
          <>
            Writing we publish
            <br />
            <span className="italic font-light">
              when we have something to say.
            </span>
          </>
        }
        description="Working guides and analysis from our partners and senior team — the moment a tax rule changes, a framework lands, or a client asks the same question three times."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <button
                key={c}
                className={
                  "rounded-full px-4 py-2 text-sm border transition-colors " +
                  (i === 0
                    ? "bg-gold-500 text-ink-950 border-gold-500"
                    : "hairline text-bone-100 hover:border-gold-400/50 hover:text-gold-400")
                }
              >
                {c}
              </button>
            ))}
          </div>

          {featured && (
            <Link
              href={`/resources/${featured.slug}`}
              className="group mt-10 block rounded-3xl border hairline-gold bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 sm:p-14 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(201,164,73,0.3), transparent 60%)",
                }}
              />
              <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
                <div className="max-w-3xl">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
                    Featured · {featured.category} · {featured.readMinutes} min
                    read
                  </div>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight bone-gradient-text leading-[1.08]">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-lg text-slate-muted leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 text-sm text-slate-muted">
                    {featured.date}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-gold-400 group-hover:translate-x-1 transition-transform shrink-0">
                  Read article <ArrowIcon />
                </div>
              </div>
            </Link>
          )}

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/resources/${p.slug}`}
                className="group rounded-2xl border hairline bg-ink-900/40 hover:bg-ink-900 transition-colors p-7 flex flex-col"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-gold-500/15 text-gold-400 px-2.5 py-1 font-medium uppercase tracking-wider">
                    {p.category}
                  </span>
                  <span className="text-slate-muted">
                    · {p.readMinutes} min read
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl text-bone-50 leading-snug tracking-tight group-hover:text-gold-300 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate-muted leading-relaxed flex-1 line-clamp-5">
                  {p.excerpt}
                </p>
                <div className="mt-6 pt-4 border-t hairline flex items-center justify-between text-xs text-slate-muted">
                  <span>{p.date}</span>
                  <ArrowIcon className="text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="subscribe" className="py-20 sm:py-24 border-t hairline">
        <Container size="narrow">
          <SectionHeading
            align="center"
            eyebrow="The FMY Brief"
            title={
              <>
                Partner-written analysis.{" "}
                <span className="italic font-light">
                  In your inbox, monthly.
                </span>
              </>
            }
            description="One email a month. What changed in UK tax and finance, and what a founder or FD should do about it. Written by us. No promo."
          />
          <form className="mt-10 flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 h-12 rounded-full border hairline bg-ink-900 px-5 text-[15px] text-bone-50 placeholder:text-slate-muted focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-full bg-gold-500 text-ink-950 text-[15px] font-medium hover:bg-gold-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
