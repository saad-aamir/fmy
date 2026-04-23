import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "gold-outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 rounded-full whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-ink-950 hover:bg-gold-400 shadow-[0_4px_24px_-6px_rgba(201,164,73,0.5)] hover:shadow-[0_8px_32px_-6px_rgba(201,164,73,0.6)]",
  secondary:
    "bg-bone-50 text-ink-950 hover:bg-white",
  ghost:
    "text-bone-100 hover:text-bone-50 hover:bg-white/5",
  "gold-outline":
    "border hairline-gold text-gold-400 hover:bg-gold-500/10 hover:border-gold-400",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & { href: string; external?: boolean };
type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

function classes(variant: Variant = "primary", size: Size = "md") {
  return cn(base, variants[variant], sizes[size]);
}

export function Button(props: ButtonProps) {
  const { variant, size, className, children, ...rest } = props;
  return (
    <button
      className={cn(classes(variant, size), className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function LinkButton(props: LinkProps) {
  const { variant, size, className, children, href, external } = props;
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(classes(variant, size), className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(classes(variant, size), className)}>
      {children}
    </Link>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M3 7h8m0 0L7 3m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
