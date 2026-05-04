import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section";

const pillars = [
  {
    k: "Partner-led, always",
    v: "No account-manager layer, no junior-first delivery. Your partner is on email, on calls, and on the hook.",
  },
  {
    k: "Fixed fees, written up front",
    v: "You get a scope and a price. No 6-minute time sheets. No quarterly top-ups. If we got it wrong, we absorb it.",
  },
  {
    k: "Big 4 playbook, without the politics",
    v: "Our senior team came up at the Big 4. We kept the rigour. We lost the 200-slide decks and the invoice surprises.",
  },
  {
    k: "Advice that actually arrives",
    v: "Most accountants wait to be asked. We call you before you know you needed calling. It's the difference between a scorekeeper and a coach.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why FMY"
          title={
            <>
              Accounting that works like a{" "}
              <span className="italic font-light">senior hire</span>, not a
              supplier.
            </>
          }
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.k}
              className="card-glow group relative rounded-2xl border hairline p-8 bg-ink-900/40 hover:bg-ink-900 overflow-hidden"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute top-5 right-7 font-display italic text-5xl text-gold-400/35 group-hover:text-gold-400/55 leading-none select-none transition-colors tracking-tight"
              >
                0{i + 1}
              </span>
              <div className="relative pr-12">
                <h3 className="font-display text-2xl text-bone-50 tracking-tight">
                  {p.k}
                </h3>
                <p className="mt-4 text-slate-muted leading-relaxed text-[15px]">
                  {p.v}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
