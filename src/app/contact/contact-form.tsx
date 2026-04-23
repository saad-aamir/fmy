"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";
import { services } from "@/lib/site";
import { ArrowIcon } from "@/components/button";

const initial: ContactState = { ok: false, message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div className="rounded-2xl border hairline-gold bg-ink-900/60 p-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-500/15 text-gold-400">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M5 11l4 4 8-9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-2xl bone-gradient-text">
          Message received
        </h3>
        <p className="mt-3 text-slate-muted leading-relaxed max-w-md mx-auto">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your name" name="name" required defaultValue={state.values?.name} />
        <Field
          label="Work email"
          name="email"
          type="email"
          required
          defaultValue={state.values?.email}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Company" name="company" defaultValue={state.values?.company} />
        <Field label="Phone (optional)" name="phone" type="tel" defaultValue={state.values?.phone} />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.18em] text-slate-muted mb-2">
          I'm interested in
        </label>
        <select
          name="service"
          defaultValue={state.values?.service ?? ""}
          className="w-full h-12 rounded-xl border hairline bg-ink-900 px-4 text-[15px] text-bone-50 focus:outline-none focus:border-gold-400 transition-colors"
        >
          <option value="">Choose a service (optional)</option>
          <option value="vfo">Virtual Finance Office</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.18em] text-slate-muted mb-2"
        >
          What's on your mind? *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          defaultValue={state.values?.message}
          placeholder="A sentence is fine. More is welcome."
          className="w-full rounded-xl border hairline bg-ink-900 px-4 py-3 text-[15px] text-bone-50 placeholder:text-slate-muted focus:outline-none focus:border-gold-400 transition-colors resize-y"
        />
      </div>

      {state.message && !state.ok && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 text-red-200 px-4 py-3 text-sm">
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-gold-500 text-ink-950 font-medium hover:bg-gold-400 transition-all disabled:opacity-60 disabled:cursor-wait shadow-[0_4px_24px_-6px_rgba(201,164,73,0.5)]"
      >
        {pending ? "Sending…" : "Send message"}
        {!pending && <ArrowIcon />}
      </button>
      <p className="text-xs text-slate-muted">
        We'll reply within one business day. Your details are never shared.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.18em] text-slate-muted mb-2"
      >
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="w-full h-12 rounded-xl border hairline bg-ink-900 px-4 text-[15px] text-bone-50 placeholder:text-slate-muted focus:outline-none focus:border-gold-400 transition-colors"
      />
    </div>
  );
}
