"use client";

import Link from "next/link";
import Image from "next/image";
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
            className="flex items-center shrink-0"
            aria-label="FMY Chartered Accountants, Home"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/fmy-mark.png"
              alt="FMY Chartered Accountants"
              width={845}
              height={287}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="nav-underline px-3 py-2 text-sm text-bone-100 hover:text-gold-400 transition-colors"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="nav-underline group inline-flex items-center gap-1 px-3 py-2 text-sm text-bone-100 hover:text-gold-400 transition-colors"
              >
                Services
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="transition-transform duration-300 group-hover:rotate-180"
                >
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
                  <div className="rounded-2xl border hairline-gold bg-ink-900/[0.97] backdrop-blur-2xl shadow-[0_24px_64px_-12px_rgba(0,0,0,0.7),0_8px_24px_-8px_rgba(0,0,0,0.5)] p-4 grid grid-cols-2 gap-1 ring-1 ring-inset ring-white/[0.03]">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group rounded-lg p-3 hover:bg-white/[0.06] transition-colors"
                      >
                        <div className="text-sm font-medium text-bone-50 group-hover:text-gold-300 transition-colors">
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
                  className="nav-underline px-3 py-2 text-sm text-bone-100 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="phone-pill group flex items-center gap-2.5 rounded-full pl-1 pr-3.5 py-1 border hairline hover:border-gold-400/50 hover:bg-ink-800/50 transition-all duration-300"
            >
              <span className="phone-badge relative inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold-500/15 text-gold-400 group-hover:bg-gold-500/25 group-hover:text-gold-300 transition-colors">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="phone-icon transition-transform"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="phone-ping absolute inset-0 rounded-full ring-1 ring-gold-400/40" />
              </span>
              <span className="flex flex-col leading-none gap-1 text-left">
                <span className="text-[9px] uppercase tracking-[0.18em] text-slate-muted group-hover:text-gold-400/70 transition-colors">
                  Call us
                </span>
                <span className="text-[13px] font-medium text-bone-50 tabular-nums tracking-tight">
                  {site.phone}
                </span>
              </span>
            </a>
            <LinkButton
              href={site.booking}
              external
              variant="primary"
              size="md"
            >
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
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 text-bone-50 text-lg font-medium"
            >
              Home
            </Link>
            <div className="h-px bg-white/10 my-3" />
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
                href={site.booking}
                external
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

