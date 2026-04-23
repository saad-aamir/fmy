"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { primaryNav, services, site } from "@/lib/site";
import { LinkButton, ArrowIcon } from "@/components/button";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass-header border-b hairline" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0"
            onClick={() => setMobileOpen(false)}
          >
            <Logo />
            <span className="font-display text-xl font-semibold tracking-tight bone-gradient-text">
              FMY
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-1 px-3 py-2 text-sm text-bone-100 hover:text-gold-400 transition-colors"
              >
                Services
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 4l3 3 3-3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[640px]">
                  <div className="glass rounded-2xl border hairline shadow-2xl shadow-black/50 p-4 grid grid-cols-2 gap-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group rounded-lg p-3 hover:bg-white/5 transition-colors"
                      >
                        <div className="text-sm font-medium text-bone-50 group-hover:text-gold-400 transition-colors">
                          {s.title}
                        </div>
                        <div className="text-xs text-slate-muted mt-0.5 leading-snug">
                          {s.short}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {primaryNav
              .filter((l) => l.href !== "/services")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-bone-100 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="text-sm text-slate-muted hover:text-bone-50 transition-colors"
            >
              {site.phone}
            </a>
            <LinkButton href="/contact" variant="primary" size="md">
              Book a consultation
              <ArrowIcon />
            </LinkButton>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border hairline text-bone-50"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 5h10M3 11h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-ink-950 border-t hairline overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-1">
            <div className="text-xs uppercase tracking-wider text-slate-muted px-3 py-2">
              Services
            </div>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-bone-100 hover:text-gold-400"
              >
                {s.title}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-4" />
            {primaryNav
              .filter((l) => l.href !== "/services")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 text-bone-50 text-lg font-medium"
                >
                  {link.label}
                </Link>
              ))}
            <div className="mt-6">
              <LinkButton
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Book a consultation
                <ArrowIcon />
              </LinkButton>
              <a
                href={site.phoneHref}
                className="mt-3 block text-center text-sm text-slate-muted"
              >
                or call {site.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-lg bg-ink-800 border hairline-gold">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M3 3h12v2.5H5.5v3H13v2.5H5.5V15H3V3z"
          fill="url(#fmy-logo-grad)"
        />
        <defs>
          <linearGradient
            id="fmy-logo-grad"
            x1="0"
            y1="0"
            x2="18"
            y2="18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E8CF8A" />
            <stop offset="1" stopColor="#C9A449" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}
