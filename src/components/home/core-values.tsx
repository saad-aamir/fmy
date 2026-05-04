import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section";
import { coreValues } from "@/lib/site";

export function CoreValues() {
  return (
    <section className="relative py-24 sm:py-32 border-t hairline">
      <Container>
        <SectionHeading
          eyebrow="What we stand for"
          title={
            <>
              Four principles.{" "}
              <span className="italic font-light">In every engagement.</span>
            </>
          }
          description="These aren't posters on the wall — they're the working rules that shape how we scope, price, and deliver."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border hairline rounded-2xl overflow-hidden">
          {coreValues.map((v, i) => (
            <div
              key={v.k}
              className="group relative bg-ink-950 hover:bg-ink-900 transition-colors duration-300 p-8"
            >
              <div className="font-display text-5xl tracking-tight text-gold-500/30 group-hover:text-gold-500/70 transition-colors duration-500">
                0{i + 1}
              </div>
              <h3 className="mt-6 font-display text-2xl text-bone-50 tracking-tight transition-colors duration-300 group-hover:text-gold-300">
                {v.k}
              </h3>
              <p className="mt-3 text-sm text-slate-muted leading-relaxed">
                {v.v}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
