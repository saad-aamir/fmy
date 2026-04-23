"use client";

import { useMemo } from "react";

export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <TickerColumns />
      <LineChart />
      <FloatingGlyphs />
    </div>
  );
}

// --------------------------------------------------------------------------
// Vertical scrolling ledger/ticker columns
// --------------------------------------------------------------------------
function TickerColumns() {
  const columns = useMemo(
    () => [
      { speed: 38, delay: -4, tilt: 8 },
      { speed: 52, delay: -14, tilt: -6 },
      { speed: 44, delay: -22, tilt: 4 },
      { speed: 60, delay: -30, tilt: -10 },
    ],
    []
  );

  return (
    <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] overflow-hidden"
      style={{
        maskImage:
          "radial-gradient(ellipse 90% 90% at 70% 40%, black 35%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 90% at 70% 40%, black 35%, transparent 75%)",
      }}
    >
      <div className="absolute inset-0 grid grid-cols-4 gap-10 px-4 opacity-[0.18]">
        {columns.map((c, i) => (
          <div
            key={i}
            className="relative overflow-hidden font-mono text-[11px] tracking-tight leading-[1.9] text-bone-100"
            style={{ transform: `rotate(${c.tilt * 0.15}deg)` }}
          >
            <div
              className="absolute inset-x-0"
              style={{
                animation: `tickerScroll ${c.speed}s linear ${c.delay}s infinite`,
              }}
            >
              {renderTickerLines(i, 2)}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes tickerScroll {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-hero-backdrop] * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

const SYMBOLS = ["FTSE", "NYSE", "LSE", "GBP", "USD", "EUR", "AIM", "IFRS", "VAT", "CT", "P&L", "EBITDA", "ROIC", "IRR"];

function renderTickerLines(seed: number, loops: number) {
  // Deterministic pseudo-random so SSR/CSR match.
  const rng = mulberry32(seed * 991 + 7);
  const lines: React.ReactNode[] = [];
  const oneLoop: React.ReactNode[] = [];
  for (let i = 0; i < 48; i++) {
    const sym = SYMBOLS[Math.floor(rng() * SYMBOLS.length)];
    const n = (rng() * 9500 + 200).toFixed(2);
    const delta = (rng() * 4 - 2).toFixed(2);
    const up = parseFloat(delta) >= 0;
    oneLoop.push(
      <div key={`${seed}-${i}`} className="flex items-center justify-between gap-2 whitespace-nowrap">
        <span className="text-bone-200">{sym}</span>
        <span className="text-bone-100">{formatNum(n)}</span>
        <span className={up ? "text-emerald-400/80" : "text-rose-400/80"}>
          {up ? "▲" : "▼"}
          {Math.abs(parseFloat(delta)).toFixed(2)}%
        </span>
      </div>
    );
  }
  for (let k = 0; k < loops; k++) {
    lines.push(<div key={`loop-${seed}-${k}`}>{oneLoop}</div>);
  }
  return lines;
}

function formatNum(v: string) {
  const [i, d] = v.split(".");
  return i.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "." + d;
}

function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// --------------------------------------------------------------------------
// Large animated revenue line chart
// --------------------------------------------------------------------------
function LineChart() {
  // Two overlapping paths on slightly different curves so redraws feel layered.
  const path1 =
    "M0 380 C 80 360, 140 340, 200 330 S 320 280, 380 270 S 500 240, 560 220 S 680 170, 760 140 S 880 90, 960 70 S 1080 40, 1200 20";
  const path2 =
    "M0 400 C 90 395, 160 380, 230 370 S 330 340, 410 330 S 520 310, 600 290 S 720 250, 800 220 S 900 180, 980 150 S 1100 110, 1200 85";

  return (
    <div
      className="absolute inset-y-0 right-0 w-full"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 30%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 30%, black 85%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <svg
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="hero-line-1" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#C9A449" stopOpacity="0" />
            <stop offset="0.2" stopColor="#C9A449" stopOpacity="0.6" />
            <stop offset="0.9" stopColor="#E8CF8A" stopOpacity="0.9" />
            <stop offset="1" stopColor="#E8CF8A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-line-2" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#C9A449" stopOpacity="0" />
            <stop offset="0.4" stopColor="#C9A449" stopOpacity="0.25" />
            <stop offset="1" stopColor="#C9A449" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C9A449" stopOpacity="0.18" />
            <stop offset="1" stopColor="#C9A449" stopOpacity="0" />
          </linearGradient>
          <filter id="hero-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid */}
        <g opacity="0.08" stroke="#F7F4EC" strokeWidth="0.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              x2="1200"
              y1={60 + i * 55}
              y2={60 + i * 55}
              strokeDasharray="2 6"
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <line
              key={`v-${i}`}
              y1="0"
              y2="500"
              x1={i * 110}
              x2={i * 110}
              strokeDasharray="2 6"
            />
          ))}
        </g>

        {/* Soft area under the main line */}
        <path
          d={`${path1} L 1200 500 L 0 500 Z`}
          fill="url(#hero-area)"
          className="hero-area"
        />

        {/* Secondary trailing line */}
        <path
          d={path2}
          fill="none"
          stroke="url(#hero-line-2)"
          strokeWidth="1.25"
          strokeLinecap="round"
          pathLength="1"
          className="hero-line hero-line--alt"
        />

        {/* Primary gold line */}
        <path
          d={path1}
          fill="none"
          stroke="url(#hero-line-1)"
          strokeWidth="1.75"
          strokeLinecap="round"
          pathLength="1"
          filter="url(#hero-glow)"
          className="hero-line"
        />

        {/* Travelling highlight dot */}
        <g className="hero-dot">
          <circle r="5" fill="#E8CF8A" filter="url(#hero-glow)" />
          <circle r="12" fill="#C9A449" opacity="0.2" />
        </g>

        {/* Candle marks — subtle, anchor points */}
        <g opacity="0.35">
          {[
            [200, 330],
            [380, 270],
            [560, 220],
            [760, 140],
            [960, 70],
          ].map(([x, y], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              <circle r="2.5" fill="#E8CF8A" />
              <circle r="6" fill="none" stroke="#C9A449" strokeWidth="0.5" />
            </g>
          ))}
        </g>
      </svg>

      <style>{`
        @keyframes heroLineDraw {
          0%   { stroke-dashoffset: 1; opacity: 0.0; }
          8%   { opacity: 1; }
          65%  { stroke-dashoffset: 0; opacity: 1; }
          92%  { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes heroAreaFade {
          0%, 30%   { opacity: 0; }
          55%, 92%  { opacity: 1; }
          100%      { opacity: 0; }
        }
        @keyframes heroDotMove {
          0%   { offset-distance: 0%;   opacity: 0; }
          8%   { opacity: 1; }
          65%  { offset-distance: 100%; opacity: 1; }
          92%  { offset-distance: 100%; opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        .hero-line {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: heroLineDraw 14s cubic-bezier(0.7, 0, 0.3, 1) infinite;
        }
        .hero-line--alt {
          animation-delay: 1.5s;
          animation-duration: 14s;
        }
        .hero-area {
          opacity: 0;
          animation: heroAreaFade 14s ease-in-out infinite;
        }
        .hero-dot {
          offset-path: path("M0 380 C 80 360, 140 340, 200 330 S 320 280, 380 270 S 500 240, 560 220 S 680 170, 760 140 S 880 90, 960 70 S 1080 40, 1200 20");
          offset-rotate: 0deg;
          animation: heroDotMove 14s cubic-bezier(0.7, 0, 0.3, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-line, .hero-area, .hero-dot { animation: none; opacity: 1; stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}

// --------------------------------------------------------------------------
// Drifting currency glyphs
// --------------------------------------------------------------------------
function FloatingGlyphs() {
  const glyphs = useMemo(
    () =>
      [
        { g: "£", left: "12%", bottom: "-5%", dur: 22, delay: 0, size: 38 },
        { g: "$", left: "28%", bottom: "-8%", dur: 28, delay: -8, size: 28 },
        { g: "€", left: "46%", bottom: "-4%", dur: 24, delay: -14, size: 30 },
        { g: "£", left: "62%", bottom: "-6%", dur: 30, delay: -5, size: 44 },
        { g: "%", left: "78%", bottom: "-3%", dur: 26, delay: -12, size: 32 },
        { g: "£", left: "88%", bottom: "-7%", dur: 32, delay: -20, size: 26 },
      ] as const,
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {glyphs.map((g, i) => (
        <span
          key={i}
          className="absolute font-display italic text-gold-400/25 select-none"
          style={{
            left: g.left,
            bottom: g.bottom,
            fontSize: g.size,
            animation: `glyphFloat ${g.dur}s ease-in-out ${g.delay}s infinite`,
          }}
        >
          {g.g}
        </span>
      ))}
      <style>{`
        @keyframes glyphFloat {
          0%   { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.7; }
          50%  { transform: translateY(-180px) translateX(14px) rotate(-4deg); opacity: 0.5; }
          90%  { opacity: 0.15; }
          100% { transform: translateY(-360px) translateX(-8px) rotate(3deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-hero-backdrop] span { animation: none; opacity: 0.15; }
        }
      `}</style>
    </div>
  );
}
