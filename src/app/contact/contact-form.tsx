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
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" required defaultValue={state.values?.name} />
        <Field label="Email Address" name="email" type="email" required defaultValue={state.values?.email} />
      </div>

      {/* Business Name */}
      <Field label="Business Name" name="company" defaultValue={state.values?.company} />

      {/* Phone */}
      <Field label="Phone Number" name="phone" type="tel" defaultValue={state.values?.phone} />

      {/* Type of Business */}
      <Field label="Type of Business" name="businessType" placeholder="e.g. Limited Company, Sole Trader, Partnership" defaultValue={state.values?.businessType} />

      {/* Annual Turnover + Annual Profit */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Annual Turnover" name="annualTurnover" placeholder="e.g. £250,000" defaultValue={state.values?.annualTurnover} />
        <Field label="Annual Profit" name="annualProfit" placeholder="e.g. £80,000" defaultValue={state.values?.annualProfit} />
      </div>

      {/* VAT Registered */}
      <div>
        <span className="block text-xs uppercase tracking-[0.18em] text-slate-muted mb-3">
          VAT Registered
        </span>
        <div className="flex gap-6">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="vatRegistered"
                value={opt}
                defaultChecked={state.values?.vatRegistered === opt}
                className="w-4 h-4 accent-gold-400 cursor-pointer"
              />
              <span className="text-[15px] text-bone-100 group-hover:text-gold-300 transition-colors">
                {opt}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Number of Employees */}
      <Field label="Number of Employees" name="employees" placeholder="e.g. 12" defaultValue={state.values?.employees} />

      {/* Service */}
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

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.18em] text-slate-muted mb-2"
        >
          How can we help you? *
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
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
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
        placeholder={placeholder}
        className="w-full h-12 rounded-xl border hairline bg-ink-900 px-4 text-[15px] text-bone-50 placeholder:text-slate-muted focus:outline-none focus:border-gold-400 transition-colors"
      />
    </div>
  );
}
