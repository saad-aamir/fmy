import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { CTABand } from "@/components/cta-band";
import { NewsletterSection } from "@/components/newsletter-section";
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

      <div id="subscribe">
        <NewsletterSection />
      </div>

      <CTABand />
    </>
  );
}
