import { Container } from "@/components/container";

const stats = [
  { v: "£389M", l: "client turnover under management" },
  { v: "55+", l: "UK businesses served" },
  { v: "125yr", l: "cumulative Big 4 experience" },
  { v: "0", l: "HMRC penalties on our watch" },
];

export function Stats() {
  return (
    <section className="relative py-16 border-y hairline mesh-soft">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s) => (
            <div key={s.l} className="text-center lg:text-left">
              <div className="font-display text-5xl sm:text-6xl tracking-tight">
                <span className="gold-gradient-text">{s.v}</span>
              </div>
              <div className="mt-3 text-sm text-slate-muted max-w-[14rem] mx-auto lg:mx-0">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
