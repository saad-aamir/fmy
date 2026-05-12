import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section";
import { LinkButton, ArrowIcon } from "@/components/button";
import { switching } from "@/lib/site";

export function Switching() {
  return (
    <section className="relative py-24 sm:py-32 border-t hairline">
      <Container>
        <SectionHeading
          eyebrow="Switching made simple"
          title={
            <>
              Moving accountants,{" "}
              <span className="italic font-light">easier than you think.</span>
            </>
          }
          description="Whether you're changing from another firm or starting fresh, we make the transition smooth and stress-free. Most clients are fully live within 10 business days."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {switching.map((s, i) => (
            <div
              key={s.k}
              className="card-glow group relative rounded-2xl border hairline bg-ink-900/40 hover:bg-ink-900 p-8"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border hairline-gold text-gold-400 font-display text-sm transition-all duration-300 group-hover:bg-gold-500/15 group-hover:scale-110">
                  0{i + 1}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-bone-50 tracking-tight transition-colors duration-300 group-hover:text-gold-300">
                {s.k}
              </h3>
              <p className="mt-4 text-slate-muted leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
          <LinkButton href="/contact" variant="primary" size="lg">
            Start the switch <ArrowIcon />
          </LinkButton>
          <span className="text-sm text-slate-muted">
            No obligation · 45-min discovery call with a partner
          </span>
        </div>
      </Container>
    </section>
  );
}
