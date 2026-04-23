import { Container } from "@/components/container";

const logos = [
  "Northlane Group",
  "Merris & Co.",
  "Aston Capital",
  "Ravelin Bio",
  "The Drayford",
  "Hartwell Foods",
  "Cedarsworth",
  "Kenrick & Vane",
  "Primrose Labs",
];

export function LogosStrip() {
  return (
    <section className="relative border-y hairline bg-ink-950/70 py-10">
      <Container>
        <div className="text-xs uppercase tracking-[0.2em] text-slate-muted text-center">
          Trusted by founders & finance teams across the UK
        </div>
        <div className="mt-8 overflow-hidden scroll-x">
          <div className="marquee-track flex gap-12 whitespace-nowrap w-max">
            {[...logos, ...logos].map((name, i) => (
              <span
                key={i}
                className="font-display text-2xl text-bone-200/40 tracking-tight italic"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
