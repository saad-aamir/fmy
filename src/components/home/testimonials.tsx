import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section";
import { ArrowIcon } from "@/components/button";
import { site } from "@/lib/site";

const reviews = [
  {
    quote:
      "FMY rebuilt our finance function in six weeks. Our monthly board pack went from a fire drill to something I actually enjoy reading.",
    author: "CEO",
    role: "Series A biotech company",
    result: "Closed Series A in 4 months",
  },
  {
    quote:
      "We switched after years of opaque invoices from a Top 20 firm. FMY's pricing is fixed, the partner picks up the phone, and the quality is better. No contest.",
    author: "Founder",
    role: "UK food & beverage business",
    result: "Saved £42k in fees year one",
  },
  {
    quote:
      "The R&D claim they prepared stood up to an HMRC enquiry without a single amendment. That's the standard you want.",
    author: "CFO",
    role: "Life sciences company",
    result: "£168k R&D claim approved",
  },
  {
    quote:
      "Our VFO partner spotted a margin issue three months before it would have hit us. That alone paid for the relationship.",
    author: "Managing Director",
    role: "Hospitality group",
    result: "Margin recovered within Q2",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why clients stay"
          title={
            <>
              Partner-led work.{" "}
              <span className="italic font-light">Founder-grade outcomes.</span>
            </>
          }
          description="We grow entirely by referral. The quickest way to tell if we're good is to hear it from people who already work with us."
        />

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-[0.18em] text-slate-muted mr-1">
            Find us on
          </span>
          <ReviewPill
            href={site.reviews.google}
            label="Google reviews"
            icon={<GoogleGlyph />}
          />
          <ReviewPill
            href={site.reviews.trustpilot}
            label="Trustpilot"
            icon={<TrustpilotGlyph />}
          />
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="card-glow group relative rounded-2xl border hairline bg-ink-900/60 p-8 backdrop-blur flex flex-col h-full"
            >
              <div className="absolute top-6 right-6 text-gold-500/30 transition-all duration-300 group-hover:text-gold-400/60 group-hover:scale-110">
                <svg width="30" height="24" viewBox="0 0 30 24" fill="currentColor">
                  <path d="M0 24V13.3Q0 6.7 3.4 3.3 6.8 0 13 0v5.3q-3.2 0-4.8 1.7Q6.5 8.7 6.5 12h4.8V24H0zm16.7 0V13.3q0-6.6 3.4-10Q23.5 0 29.7 0v5.3q-3.2 0-4.8 1.7-1.7 1.7-1.7 5h4.8V24H16.7z" />
                </svg>
              </div>
              <blockquote className="text-lg text-bone-50 leading-relaxed pr-10 mb-8">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-auto pt-6 border-t hairline flex items-end justify-between gap-4">
                <div>
                  <div className="text-sm font-medium text-bone-50">
                    {r.author}
                  </div>
                  <div className="text-sm text-slate-muted">{r.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-muted">
                    Outcome
                  </div>
                  <div className="text-sm text-gold-400 mt-1">{r.result}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ReviewPill({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border hairline bg-ink-900/40 hover:border-gold-400/40 hover:bg-ink-900 px-4 py-2 text-sm transition-colors"
    >
      {icon}
      <span className="text-bone-100 group-hover:text-bone-50">{label}</span>
      <ArrowIcon className="w-3 h-3 text-slate-muted group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all" />
    </a>
  );
}

function GoogleGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 18 18" aria-hidden>
      <path
        fill="#EA4335"
        d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
      />
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
      />
      <path
        fill="#FBBC05"
        d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
      />
    </svg>
  );
}

function TrustpilotGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#00B67A"
        d="M12 0l2.79 8.59H24l-7.51 5.46L19.28 24 12 18.55 4.72 24l2.79-9.95L0 8.59h9.21z"
      />
    </svg>
  );
}

