import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section";
import { CTABand } from "@/components/cta-band";
import { articles, articleCategories } from "@/lib/articles";
import { ResourcesGrid } from "@/components/resources/resources-grid";

export const metadata: Metadata = {
  title: "Resources & insights",
  description:
    "Guides, analysis, and partner-written commentary from FMY — on UK tax, regulation, finance leadership, and running a better business.",
};

export default function ResourcesPage() {
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
          <ResourcesGrid articles={articles} categories={categories} />
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
