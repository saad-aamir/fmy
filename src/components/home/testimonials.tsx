import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section";

const reviews = [
  {
    quote:
      "FMY rebuilt our finance function in six weeks. Our monthly board pack went from a fire drill to something I actually enjoy reading.",
    author: "Imogen Clarke",
    role: "CEO, Ravelin Bio",
    result: "Closed Series A in 4 months",
  },
  {
    quote:
      "We switched after years of opaque invoices from a Top 20 firm. FMY's pricing is fixed, the partner picks up the phone, and the quality is better. No contest.",
    author: "Daniel Hartwell",
    role: "Founder, Hartwell Foods",
    result: "Saved £42k in fees year one",
  },
  {
    quote:
      "The R&D claim they prepared stood up to an HMRC enquiry without a single amendment. That's the standard you want.",
    author: "Priya Menon",
    role: "CFO, Primrose Labs",
    result: "£168k R&D claim approved",
  },
  {
    quote:
      "Our VFO partner spotted a margin issue three months before it would have hit us. That alone paid for the relationship.",
    author: "Martin Ojo",
    role: "MD, The Drayford",
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

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.author}
              className="relative rounded-2xl border hairline bg-ink-900/60 p-8 backdrop-blur flex flex-col h-full"
            >
              <div className="absolute top-6 right-6 text-gold-500/30">
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
