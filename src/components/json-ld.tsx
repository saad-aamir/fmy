import { site } from "@/lib/site";

const SITE_URL = "https://fmyaccountants.co.uk";

/** Inline a single JSON-LD blob via <script type="application/ld+json">. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe, no user-supplied keys, just structured data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Org + LocalBusiness, global, attached to the root layout. */
export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["AccountingService", "ProfessionalService", "Organization"],
        "@id": `${SITE_URL}/#organization`,
        name: site.fullName,
        legalName: site.registration.entity,
        url: SITE_URL,
        logo: `${SITE_URL}/fmy-wordmark.png`,
        image: `${SITE_URL}/fmy-wordmark.png`,
        description:
          "Partner-led London chartered accountancy. Bookkeeping, tax, payroll, audit, advisory, corporate finance and a Virtual Finance Office for ambitious UK businesses.",
        telephone: site.phone,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.line1,
          addressLocality: "London",
          postalCode: "EC2A 4NE",
          addressCountry: "GB",
        },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        identifier: [
          {
            "@type": "PropertyValue",
            propertyID: "Companies House",
            value: site.registration.companyNumber,
          },
          {
            "@type": "PropertyValue",
            propertyID: "ICAEW Firm No.",
            value: site.registration.icaew,
          },
        ],
        memberOf: {
          "@type": "Organization",
          name: "Institute of Chartered Accountants in England and Wales (ICAEW)",
          url: "https://www.icaew.com/",
        },
        sameAs: [
          site.social.linkedin,
          site.social.instagram,
          site.social.facebook,
          site.social.youtube,
          site.social.tiktok,
        ],
      }}
    />
  );
}

/** WebSite + SearchAction, helps Google show site-search box. */
export function WebsiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: site.fullName,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-GB",
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: `${SITE_URL}${it.url}`,
        })),
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${SITE_URL}/services/${slug}`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United Kingdom" },
        serviceType: "Accountancy",
      }}
    />
  );
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  url,
  category,
}: {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
  category: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        datePublished,
        articleSection: category,
        author: {
          "@type": "Person",
          name: "Faraz Yunus",
          jobTitle: "Founder & Managing Partner",
          url: `${SITE_URL}/about`,
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${url}` },
        inLanguage: "en-GB",
      }}
    />
  );
}

export function FaqSchema({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      }}
    />
  );
}
