import type { Metadata } from "next";
import { Inter, Fraunces, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { IntroOverlay } from "@/components/intro-overlay";
import { Chatbot } from "@/components/chatbot";

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
    "Partner-led London accountancy. Bookkeeping, tax, payroll, audit, advisory and a Virtual Finance Office built for ambitious businesses.",
  openGraph: {
    title: "FMY Chartered Accountants",
    description:
      "Partner-led London accountancy with 125+ years of Big 4 expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink-950 text-bone-50">
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
