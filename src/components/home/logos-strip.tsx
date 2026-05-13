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
      </Container>
    </section>
  );
}
