import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "narrow" | "default" | "wide";
}) {
  const sizeClass = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  }[size];
  return (
    <div className={cn("mx-auto w-full px-6 sm:px-8", sizeClass, className)}>
      {children}
    </div>
  );
}
