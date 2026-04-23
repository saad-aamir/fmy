import { Container } from "@/components/container";
import { Eyebrow } from "@/components/section";
import { cn } from "@/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden mesh-soft border-b hairline",
        className
      )}
    >
      <div className="grain absolute inset-0" />
      <Container className="relative pt-20 pb-20 sm:pt-28 sm:pb-24">
        <div className="max-w-3xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1] tracking-tight bone-gradient-text">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg sm:text-xl text-slate-muted leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
