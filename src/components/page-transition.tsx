"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Module-level flag, the first render in this session is the SSR load
// and should not animate. Every subsequent pathname change animates.
let hasNavigated = false;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInitial = !hasNavigated;

  useEffect(() => {
    if (!hasNavigated) {
      hasNavigated = true;
      return;
    }
    // New navigation, scroll to top so the stagger starts from the top.
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return (
    <div
      key={pathname}
      className="page-transition flex-1 flex flex-col"
      data-initial={isInitial ? "true" : undefined}
    >
      {children}
    </div>
  );
}
