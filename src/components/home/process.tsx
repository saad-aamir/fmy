import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section";

const steps = [
  {
    n: "01",
    title: "Discovery call",
    desc: "A 45-minute conversation with a partner. We listen, diagnose, and tell you honestly whether we're the right fit.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Proposal & scope",
    desc: "A fixed-fee proposal within 48 hours. No waffle, no hidden clauses, just scope, price, and outcomes.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Onboarding",
    desc: "Software connected, prior-year files reviewed, handover from your old accountant handled end-to-end.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    n: "04",
    title: "Ongoing delivery",
    desc: "Monthly packs, quarterly reviews, and a partner on call. You focus on the business; we handle the numbers.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
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
          description="Switching accountants sounds painful because it usually is. We've turned it into four low-friction steps, most clients are live within 10 business days."
        />

        <div className="mt-20 relative">
          {/* Horizontal connecting line, desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px"
            style={{
              backgroundImage:
                "linear-gradient(to right, transparent 0%, rgba(201,164,73,0.4) 8%, rgba(201,164,73,0.4) 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, black, black)",
            }}
          />
          {/* Vertical line, mobile only */}
          <div
            aria-hidden
            className="lg:hidden absolute left-10 top-12 bottom-12 w-px"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(201,164,73,0.4), rgba(201,164,73,0.1))",
            }}
          />

          <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="relative flex lg:flex-col gap-6 lg:gap-0 lg:items-center lg:text-center"
              >
                {/* Numbered icon node */}
                <div className="relative z-10 shrink-0">
                  <span className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ink-800 to-ink-900 border hairline-gold text-gold-400 shadow-[0_0_0_10px_var(--color-ink-950),0_8px_32px_-8px_rgba(0,0,0,0.6)]">
                    {step.icon}
                    <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold-500 text-ink-950 font-display text-[11px] font-semibold shadow-[0_0_0_4px_var(--color-ink-950)]">
                      {step.n}
                    </span>
                  </span>
                  {/* Mobile-only down chevron between rows */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="lg:hidden absolute left-1/2 -translate-x-1/2 top-full mt-3 text-gold-500/50"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M7 2v10M3 8l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </div>

                <div className="lg:mt-7 flex-1 lg:max-w-[15rem]">
                  <h3 className="font-display text-xl text-bone-50 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
