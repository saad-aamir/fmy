"use client";

import { useActionState } from "react";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section";
import { ArrowIcon } from "@/components/button";
import { subscribe, type NewsletterState } from "@/app/newsletter/actions";

const initial: NewsletterState = { ok: false, message: "" };

export function NewsletterSection() {
  const [state, formAction, pending] = useActionState(subscribe, initial);

  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border hairline-gold bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 sm:p-14 lg:p-16">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 0% 100%, rgba(201,164,73,0.22), transparent 60%)",
            }}
          />
          <div className="grain absolute inset-0" />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow>The FMY Brief</Eyebrow>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl tracking-tight bone-gradient-text leading-[1.1]">
                Subscribe to our{" "}
                <span className="italic font-light gold-gradient-text">
                  newsletters.
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-muted leading-relaxed max-w-xl">
                Have questions or ready to get started? We'd love to hear from
                you and explore how FMY Chartered Accountants can support your
                financial goals.
              </p>
              <ul className="mt-7 space-y-2 text-sm text-bone-100">
                {[
                  "One concise tax & finance update each month",
                  "Written by our partners — no agency copy",
                  "Unsubscribe in one click, no questions asked",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="shrink-0 mt-1 text-gold-400"
                      aria-hidden
                    >
                      <path
                        d="M3 7l2.5 2.5L11 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {state.ok ? (
                <SuccessPanel message={state.message} />
              ) : (
                <form action={formAction} className="space-y-4">
                  <Field
                    label="Name *"
                    name="name"
                    placeholder="Your name"
                    defaultValue={state.values?.name}
                  />
                  <Field
                    label="Email *"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    defaultValue={state.values?.email}
                  />
                  {state.message && (
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 px-4 py-2.5 text-sm">
                      {state.message}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={pending}
                    className="btn-lift inline-flex w-full items-center justify-center gap-2 h-12 px-6 rounded-full bg-gold-500 text-ink-950 text-[15px] font-medium hover:bg-gold-400 transition-all disabled:opacity-60 disabled:cursor-wait shadow-[0_4px_18px_-6px_rgba(201,164,73,0.5)] hover:shadow-[0_14px_36px_-8px_rgba(201,164,73,0.65)]"
                  >
                    {pending ? "Subscribing…" : "Subscribe"}
                    {!pending && <ArrowIcon />}
                  </button>
                  <p className="text-xs text-slate-muted text-center">
                    Your details are never shared. One email per month, max.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label
        htmlFor={`nl-${name}`}
        className="block text-xs uppercase tracking-[0.18em] text-gold-400/80 mb-2"
      >
        {label}
      </label>
      <input
        id={`nl-${name}`}
        name={name}
        type={type}
        required
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full h-12 rounded-xl border hairline bg-ink-950/50 px-4 text-[15px] text-bone-50 placeholder:text-slate-muted focus:outline-none focus:border-gold-400 focus:bg-ink-950/70 transition-colors"
      />
    </div>
  );
}

function SuccessPanel({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border hairline-gold bg-ink-950/60 p-8 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold-500/15 text-gold-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 12l4 4L19 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="mt-5 font-display text-2xl bone-gradient-text">
        You're subscribed
      </h3>
      <p className="mt-3 text-slate-muted leading-relaxed">{message}</p>
    </div>
  );
}
