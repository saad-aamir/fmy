import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section";
import { LinkButton, ArrowIcon } from "@/components/button";
import { ArticleBody } from "@/components/article-body";
import { CTABand } from "@/components/cta-band";
import { ArticleSchema, BreadcrumbSchema } from "@/components/json-ld";
import { articles, articlesBySlug } from "@/lib/articles";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/resources/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const a = articlesBySlug[slug];
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/resources/${a.slug}` },
    openGraph: {
      title: a.title,
      description: a.excerpt,
      type: "article",
      publishedTime: a.isoDate,
      authors: ["Faraz Yunus"],
      tags: [a.category],
      url: `/resources/${a.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: a.title,
      description: a.excerpt,
    },
  };
}

export default async function ArticlePage(
  props: PageProps<"/resources/[slug]">
) {
  const { slug } = await props.params;
  const article = articlesBySlug[slug];
  if (!article) notFound();

  const idx = articles.findIndex((a) => a.slug === slug);
  const prev = articles[idx + 1];
  const next = articles[idx - 1];
  const related = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);
  const fallbackRelated = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);
  const sidebarPosts = related.length >= 2 ? related : fallbackRelated;

  return (
    <>
      <ArticleSchema
        headline={article.title}
        description={article.excerpt}
        datePublished={article.isoDate}
        url={`/resources/${article.slug}`}
        category={article.category}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: article.title, url: `/resources/${article.slug}` },
        ]}
      />
      <section className="relative overflow-hidden mesh-soft border-b hairline">
        <div className="grain absolute inset-0" />
        <Container className="relative pt-16 pb-14 sm:pt-20 sm:pb-16">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-slate-muted hover:text-gold-400 transition-colors"
          >
            <ArrowIcon className="rotate-180" />
            All insights
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-gold-500/15 text-gold-400 px-3 py-1 font-medium uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-slate-muted">{article.date}</span>
              <span className="text-slate-muted">·</span>
              <span className="text-slate-muted">
                {article.readMinutes} min read
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight bone-gradient-text">
              {article.title}
            </h1>

            {article.excerpt && (
              <p className="mt-6 text-lg sm:text-xl text-slate-muted leading-relaxed">
                {article.excerpt}
              </p>
            )}

            <div className="mt-10 flex items-center gap-4 pt-6 border-t hairline">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center text-sm font-semibold text-ink-950 font-display">
                FY
              </div>
              <div>
                <div className="text-sm font-medium text-bone-50">
                  Faraz Yunus
                </div>
                <div className="text-xs text-slate-muted">
                  Founder & Managing Partner · BFP ACA FCCA
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_280px] gap-14">
            <article className="max-w-3xl">
              <ArticleBody blocks={article.blocks} />

              {article.slug ===
                "understanding-director-verification-new-requirements-from-companies-house" && (
                <div className="mt-12 rounded-2xl border hairline-gold bg-gradient-to-br from-ink-800 to-ink-900 p-8 relative overflow-hidden">
                  <div
                    className="absolute inset-0 pointer-events-none opacity-50"
                    style={{
                      background:
                        "radial-gradient(ellipse 60% 50% at 100% 0%, rgba(201,164,73,0.18), transparent 60%)",
                    }}
                  />
                  <div className="relative flex items-start gap-5">
                    <span className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold-500/15 text-gold-300 border hairline-gold">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <rect x="3" y="6" width="18" height="13" rx="2" />
                        <circle cx="9" cy="11" r="2" />
                        <path d="M5.5 16.5c.6-1.4 2-2.3 3.5-2.3s2.9.9 3.5 2.3" />
                        <path d="M14 10h4M14 13h3" />
                        <path d="M17.5 4.5l1.6 1.6 3.4-3.4" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-medium">
                        FMY service · ACSP-registered
                      </div>
                      <h3 className="mt-2 font-display text-2xl tracking-tight text-bone-50 leading-snug">
                        We handle director ID verification for you.
                      </h3>
                      <p className="mt-3 text-slate-muted leading-relaxed">
                        FMY is registered with Companies House as an{" "}
                        <strong className="text-bone-100">
                          Authorised Corporate Service Provider (ACSP)
                        </strong>
                        . We can verify your directors and PSCs directly,
                        file with Companies House, and maintain your verified
                        status as appointments and ownership change.
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <LinkButton
                          href={site.booking}
                          external
                          variant="primary"
                          size="md"
                        >
                          Book a meeting <ArrowIcon />
                        </LinkButton>
                        <LinkButton
                          href="/services/director-id-verification"
                          variant="gold-outline"
                          size="md"
                        >
                          See the service
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-12 rounded-2xl border hairline-gold bg-ink-900/60 p-8">
                <Eyebrow>Need a second pair of eyes?</Eyebrow>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-bone-50">
                  Talk to a partner about what this means for your business.
                </h3>
                <p className="mt-3 text-slate-muted leading-relaxed">
                  A 45-minute call with Faraz, no cost, no obligation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <LinkButton
                    href={site.booking}
                    external
                    variant="primary"
                    size="md"
                  >
                    Book a meeting <ArrowIcon />
                  </LinkButton>
                  <LinkButton
                    href="/contact"
                    variant="gold-outline"
                    size="md"
                  >
                    Send a message
                  </LinkButton>
                </div>
              </div>
            </article>

            <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div className="rounded-2xl border hairline bg-ink-900/40 p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-gold-400">
                  More in {article.category}
                </div>
                <div className="mt-4 space-y-4">
                  {sidebarPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/resources/${p.slug}`}
                      className="group block"
                    >
                      <div className="text-xs text-slate-muted">{p.date}</div>
                      <div className="mt-1 font-display text-[15px] leading-snug text-bone-50 group-hover:text-gold-300 transition-colors">
                        {p.title}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border hairline bg-ink-900/40 p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-gold-400">
                  The FMY Brief
                </div>
                <p className="mt-3 text-sm text-slate-muted leading-relaxed">
                  One partner-written update a month. Tax changes, frameworks,
                  and what to do about them.
                </p>
                <Link
                  href="/resources#subscribe"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-gold-400 hover:text-gold-300"
                >
                  Subscribe <ArrowIcon />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-12 border-t hairline">
        <Container>
          <div className="grid sm:grid-cols-2 gap-5">
            {prev ? (
              <Link
                href={`/resources/${prev.slug}`}
                className="card-hover group rounded-2xl border hairline bg-ink-900/40 hover:bg-ink-900 p-6"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-muted">
                  Older
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <ArrowIcon className="rotate-180 text-gold-400 shrink-0 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span className="font-display text-lg text-bone-50 leading-tight transition-colors duration-300 group-hover:text-gold-300">
                    {prev.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/resources/${next.slug}`}
                className="card-hover group rounded-2xl border hairline bg-ink-900/40 hover:bg-ink-900 p-6 text-right"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-slate-muted">
                  Newer
                </div>
                <div className="mt-2 flex items-center justify-end gap-3">
                  <span className="font-display text-lg text-bone-50 leading-tight transition-colors duration-300 group-hover:text-gold-300">
                    {next.title}
                  </span>
                  <ArrowIcon className="text-gold-400 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
