"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SESSION_KEY = "fmy:intro-seen";

/**
 * First-load logo reveal. Plays once per browser session, the
 * sessionStorage flag suppresses replays on subsequent navigations.
 *
 * Animation timeline (~2.2s total):
 *  0  - 200ms   : overlay visible, logo invisible (avoids flash on slow paint)
 *  200 - 1100ms : logo + wordmark fade in and scale up
 *  500 - 1300ms : tagline fades in (overlapping)
 *  1100 - 1600ms: hold
 *  1600 - 2200ms: overlay fades out, page revealed
 */
export function IntroOverlay() {
  // Default is to render the overlay so SSR/initial paint isn't a flash of content.
  const [hidden, setHidden] = useState(false);
  const [skipFromStorage, setSkipFromStorage] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        setSkipFromStorage(true);
        return;
      }
    } catch {
      // sessionStorage may throw in some privacy modes, silently fall through.
    }
    // Lock body scroll while the intro plays.
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {}
      document.body.style.overflow = "";
      setHidden(true);
    }, 2200);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  // Hydrated and storage said skip → render nothing at all.
  if (hydrated && skipFromStorage) return null;
  // Animation finished → unmount.
  if (hidden) return null;

  return (
    <div className="intro-overlay" aria-hidden role="presentation">
      <div className="intro-content">
        <div className="intro-mark">
          <Image
            src="/fmy-mark.png"
            alt=""
            width={845}
            height={287}
            priority
            className="h-24 sm:h-28 w-auto"
          />
        </div>
        <div className="intro-rule" />
        <div className="intro-tagline">Clarity. Compliance. Confidence.</div>
      </div>
    </div>
  );
}
