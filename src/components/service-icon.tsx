export function ServiceIcon({
  slug,
  size = 22,
}: {
  slug: string;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (slug) {
    case "bookkeeping":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "accounting":
      return (
        <svg {...common}>
          <path d="M4 20V8l8-5 8 5v12" />
          <path d="M9 20v-6h6v6" />
          <path d="M4 20h16" />
        </svg>
      );
    case "tax":
      return (
        <svg {...common}>
          <path d="M7 3h10v18H7z" />
          <path d="M10 7h4M10 11h4M10 15h2" />
        </svg>
      );
    case "payroll":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 21a7 7 0 0114 0" />
          <path d="M12 11v4M10 13h4" />
        </svg>
      );
    case "audit-assurance":
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "advisory":
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "corporate-finance":
      return (
        <svg {...common}>
          <path d="M3 17l6-6 4 4 8-8" />
          <path d="M14 7h7v7" />
        </svg>
      );
    case "business-valuations":
      return (
        <svg {...common}>
          <path d="M12 2v20" />
          <path d="M5 8h14M5 16h14" />
          <path d="M5 8l-2 3 2 3M19 8l2 3-2 3" />
        </svg>
      );
    case "director-id-verification":
      return (
        <svg {...common}>
          {/* ID card outline + verified-tick badge */}
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <circle cx="9" cy="11" r="2" />
          <path d="M5.5 16.5c.6-1.4 2-2.3 3.5-2.3s2.9.9 3.5 2.3" />
          <path d="M14 10h4M14 13h3" />
          <path d="M17.5 4.5l1.6 1.6 3.4-3.4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
