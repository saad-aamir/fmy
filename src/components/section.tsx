import { cn } from "@/lib/cn";

export function Section({
  children,
  className,
  id,
  bleed,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        bleed ? "" : "py-20 sm:py-28",
        className
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-400 font-medium",
        className
      )}
    >
      <span className="w-6 h-px bg-gold-500/60" />
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow className={align === "center" ? "justify-center" : ""}>{eyebrow}</Eyebrow>}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.18] tracking-tight mt-5 bone-gradient-text">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg text-slate-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
