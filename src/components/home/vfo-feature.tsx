import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section";
import { LinkButton, ArrowIcon } from "@/components/button";

export function VFOFeature() {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border hairline bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201,164,73,0.4), transparent 60%)",
            }}
          />
          <div className="grain absolute inset-0" />

          <div className="relative grid lg:grid-cols-2 gap-12 p-10 sm:p-14 lg:p-20">
            <div>
              <Eyebrow>Our flagship · Virtual Finance Office</Eyebrow>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.02] tracking-tight">
                <span className="bone-gradient-text">A strategic finance team</span>
                <br />
                <span className="gold-gradient-text italic">without the headcount.</span>
              </h2>
              <p className="mt-6 text-lg text-slate-muted leading-relaxed max-w-xl">
                Bookkeeping, management accounts, tax, payroll, and a
                fractional FD, all under one monthly fee. It’s the finance
                function a 50-person company would build, delivered from day
                one.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Dedicated partner + accountant + bookkeeper",
                  "Live dashboards, month-end packs, board reporting",
                  "Quarterly tax & cash planning reviews",
                  "No seat fees. No setup fees. No surprises.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-bone-100">
                    <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <LinkButton
                  href="/virtual-finance-office"
                  variant="primary"
                  size="lg"
                >
                  How it works <ArrowIcon />
                </LinkButton>
                <LinkButton
                  href="/pricing"
                  variant="ghost"
                  size="lg"
                  className="border hairline"
                >
                  See pricing
                </LinkButton>
              </div>
            </div>

            <div className="relative">
              <MockDashboard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function MockDashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gold-500/10 rounded-3xl blur-2xl" />
      <div className="relative rounded-2xl border hairline bg-ink-950/80 backdrop-blur p-5 shadow-2xl shadow-black/40">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-muted">Management pack</div>
            <div className="text-sm font-medium text-bone-50">
              March 2026 · Northlane Group
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Filed
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            { l: "Revenue", v: "£4.82M", d: "+14.2%", up: true },
            { l: "Gross margin", v: "62.1%", d: "+1.8pp", up: true },
            { l: "Cash runway", v: "18 mo", d: "+2 mo", up: true },
          ].map((m) => (
            <div
              key={m.l}
              className="rounded-lg border hairline bg-ink-900 p-3"
            >
              <div className="text-[10px] uppercase tracking-wider text-slate-muted">
                {m.l}
              </div>
              <div className="mt-1.5 font-display text-lg tracking-tight text-bone-50">
                {m.v}
              </div>
              <div className="text-[10px] text-emerald-400">{m.d}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border hairline bg-ink-900 p-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-muted">Cash flow · 13-week</span>
            <span className="text-gold-400">Strong</span>
          </div>
          <svg viewBox="0 0 300 80" className="mt-3 w-full h-20">
            <defs>
              <linearGradient id="cf-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#C9A449" stopOpacity="0.4" />
                <stop offset="1" stopColor="#C9A449" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 L25 55 L50 48 L75 52 L100 42 L125 45 L150 30 L175 28 L200 22 L225 25 L250 14 L275 10 L300 6 L300 80 L0 80 Z"
              fill="url(#cf-area)"
            />
          </svg>
        </div>

        <div className="mt-4 space-y-2">
          {[
            { k: "Corp tax · Q1 paid", t: "HMRC" },
            { k: "VAT return filed", t: "Jan-Mar" },
            { k: "Payroll reconciled", t: "March" },
          ].map((r) => (
            <div
              key={r.k}
              className="flex items-center justify-between rounded-md bg-ink-900 border hairline px-3 py-2"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 inline-flex items-center justify-center text-[10px]">
                  ✓
                </span>
                <span className="text-xs text-bone-100">{r.k}</span>
              </div>
              <span className="text-[10px] text-slate-muted">{r.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
