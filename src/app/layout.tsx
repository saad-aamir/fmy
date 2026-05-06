import type { Metadata } from "next";
import { Inter, Fraunces, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { IntroOverlay } from "@/components/intro-overlay";
import { Chatbot } from "@/components/chatbot";
import { OrganizationSchema, WebsiteSchema } from "@/components/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "opsz"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fmyaccountants.co.uk"),
  title: {
    default: "FMY Chartered Accountants — Clarity. Compliance. Confidence.",
    template: "%s · FMY Chartered Accountants",
  },
  description:
    "Partner-led London chartered accountancy. Bookkeeping, tax, payroll, audit, advisory, corporate finance and a Virtual Finance Office for ambitious UK businesses.",
  applicationName: "FMY Chartered Accountants",
  keywords: [
    "chartered accountants",
    "London accountants",
    "ICAEW",
    "Virtual Finance Office",
    "fractional CFO",
    "fractional FD",
    "corporation tax",
    "R&D tax credits",
    "audit and assurance",
    "bookkeeping",
    "payroll",
    "M&A advisory",
    "business valuations",
  ],
  authors: [{ name: "Faraz Yunus", url: "https://fmyaccountants.co.uk/about" }],
  creator: "FMY Chartered Accountants",
  publisher: "FMY Accountants Limited",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FMY Chartered Accountants — Clarity. Compliance. Confidence.",
    description:
      "Partner-led London chartered accountancy. 125+ years of Big 4 expertise, fixed-fee pricing, and a Virtual Finance Office for ambitious UK businesses.",
    type: "website",
    url: "https://fmyaccountants.co.uk",
    siteName: "FMY Chartered Accountants",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "FMY Chartered Accountants",
    description:
      "Partner-led London chartered accountancy. Clarity. Compliance. Confidence.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${fraunces.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-950 text-bone-50">
        <OrganizationSchema />
        <WebsiteSchema />
        <IntroOverlay />
        <SiteHeader />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <SiteFooter />
        <Chatbot />
      </body>
    </html>
  );
}
