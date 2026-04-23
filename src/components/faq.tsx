"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section";

export const homeFaqs = [
  {
    q: "How quickly can we switch from our current accountant?",
    a: "Most clients are fully onboarded in 10 business days. We handle the handover letter, the engagement transfer, and the prior-year file requests — you don't need to chase anyone.",
  },
  {
    q: "Are your fees really fixed?",
    a: "Yes. You get a written scope, a written fee, and a written list of what isn't included. If something extra comes up mid-year, we'll quote it before we do it — no retrospective bills, ever.",
  },
  {
    q: "Do you work with businesses outside London?",
    a: "Most of our clients are UK-wide. We run everything on secure cloud platforms (Xero, QuickBooks, Dext, Pleo), so location is irrelevant — we've had a bakery in Leeds and a SaaS firm in Edinburgh onboarded in the same week.",
  },
  {
    q: "What if we're not VAT-registered or pre-revenue?",
    a: "We work with start-ups from incorporation onwards. For early-stage businesses, we offer a lighter 'Foundation' package that scales up as you do.",
  },
  {
    q: "Can you help with R&D tax credits and EIS/SEIS?",
    a: "Yes — and we prepare claims to the post-2024 HMRC scrutiny standard. Our team includes former HMRC-trained specialists; we've never had a claim rejected.",
  },
  {
    q: "Are you regulated?",
    a: "Yes. FMY is regulated by the Institute of Chartered Accountants in England & Wales (ICAEW). Firm registration number 11008484.",
  },
];

export function FAQ({
  items = homeFaqs,
  eyebrow = "Questions, answered",
  title,
  description,
}: {
  items?: { q: string; a: string }[];
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 sm:py-32 border-t hairline">
      <Container size="narrow">
        <SectionHeading
          eyebrow={eyebrow}
          title={
            title ?? (
              <>
                The questions we get{" "}
                <span className="italic font-light">before the paperwork.</span>
              </>
            )
          }
          description={description}
        />

        <div className="mt-14 divide-y divide-white/10 border-y hairline">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                type="button"
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full text-left py-6 group"
              >
                <div className="flex items-start justify-between gap-8">
                  <span className="font-display text-xl text-bone-50 tracking-tight">
                    {f.q}
                  </span>
                  <span
                    className={
                      "shrink-0 mt-1 w-8 h-8 inline-flex items-center justify-center rounded-full border hairline transition-transform " +
                      (isOpen
                        ? "bg-gold-500 text-ink-950 border-gold-500 rotate-45"
                        : "text-bone-100")
                    }
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  className={
                    "grid overflow-hidden transition-all duration-300 " +
                    (isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0")
                  }
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-muted leading-relaxed pr-12 max-w-2xl">
                      {f.a}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
