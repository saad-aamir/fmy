import Image from "next/image";
import { Container } from "@/components/container";
import { LinkButton, ArrowIcon } from "@/components/button";
import { site } from "@/lib/site";

export function CTABand({
  eyebrow = "Take the first step",
  title,
  description,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border hairline-gold bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 sm:p-14 lg:p-20">
          <Image
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=2000&q=80"
            alt=""
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 100% 50%, rgba(201,164,73,0.2), transparent 60%), linear-gradient(135deg, rgba(2,51,32,0.65), rgba(1,24,14,0.78))",
            }}
          />
          <div className="grain absolute inset-0" />

          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
                {eyebrow}
              </div>
              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight">
                {title ?? (
                  <>
                    <span className="bone-gradient-text">
                      30 minutes with a partner
                    </span>{" "}
                    <span className="italic font-light gold-gradient-text">
                      could save you your year-end.
                    </span>
                  </>
                )}
              </h2>
              {description && (
                <p className="mt-5 text-lg text-slate-muted leading-relaxed max-w-xl">
                  {description}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <LinkButton href="/contact" variant="primary" size="lg">
                Book a consultation <ArrowIcon />
              </LinkButton>
              <LinkButton
                href={site.phoneHref}
                external
                variant="gold-outline"
                size="lg"
              >
                or call {site.phone}
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
