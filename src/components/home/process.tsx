import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section";

const steps = [
  {
    n: "01",
    title: "Discovery call",
    desc: "A 30-minute conversation with a partner. We listen, diagnose, and tell you honestly whether we're the right fit.",
  },
  {
    n: "02",
    title: "Proposal & scope",
    desc: "A fixed-fee proposal within 48 hours. No waffle, no hidden clauses — just scope, price, and outcomes.",
  },
  {
    n: "03",
    title: "Onboarding",
    desc: "Software connected, prior-year files reviewed, handover from your old accountant handled end-to-end.",
  },
  {
    n: "04",
    title: "Ongoing delivery",
    desc: "Monthly packs, quarterly reviews, and a partner on call. You focus on the business; we handle the numbers.",
  },
];

export function Process() {
  return (
    <section className="relative py-24 sm:py-32 border-t hairline">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Four steps.{" "}
              <span className="italic font-light">No mystery fees.</span>
            </>
          }
          description="Switching accountants sounds painful because it usually is. We've turned it into four low-friction steps — most clients are live within 10 business days."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative bg-ink-950 p-8 hover:bg-ink-900 transition-colors"
            >
              <div className="font-display text-5xl tracking-tight text-gold-500/40">
                {s.n}
              </div>
              <h3 className="mt-6 font-display text-xl text-bone-50">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-slate-muted leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
