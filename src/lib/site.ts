export const site = {
  name: "FMY",
  fullName: "FMY Chartered Accountants",
  tagline: "Clarity. Compliance. Confidence.",
  phone: "0330 043 5088",
  phoneHref: "tel:+443300435088",
  email: "info@fmyaccountants.co.uk",
  emailHref: "mailto:info@fmyaccountants.co.uk",
  address: {
    line1: "86–90 Paul Street",
    line2: "London, EC2A 4NE",
  },
  booking: "https://calendly.com/fmy-chartered-accountants/45min",
  registration: {
    entity: "FMY Accountants Limited",
    companyNumber: "16813147",
    jurisdiction: "England & Wales",
    icaew: "11008484",
  },
  regulator: "Regulated by the ICAEW — Firm No. 11008484",
  social: {
    linkedin: "https://www.linkedin.com/company/fmyaccountants",
    instagram: "https://www.instagram.com/fmyaccountants",
    youtube: "https://youtube.com/@fmyaccountants",
    facebook: "https://facebook.com/fmyaccountants",
    tiktok: "https://tiktok.com/@fmyaccountants",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export const services: {
  slug: string;
  title: string;
  short: string;
  summary: string;
  longDescription?: string;
  outcomes: string[];
  included: string[];
  idealFor: string;
}[] = [
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    short:
      "We keep your financial records accurate, compliant, and up to date. You focus on running your business while we keep your books in order.",
    summary:
      "Our bookkeeping services ensure your financial records are meticulously maintained, compliant, and ready for audits. We manage day-to-day transactions — sales and purchase ledgers, bank reconciliations, and VAT record-keeping — aligned with HMRC Making Tax Digital (MTD) requirements.",
    longDescription:
      "Using industry-leading software like Xero and QuickBooks, we automate data entry, reduce errors, and provide real-time visibility into your cash flow. Beyond compliance, we deliver monthly financial summaries with actionable insights, helping you identify cost-saving opportunities and track profitability. Our team also handles complex areas like foreign currency transactions and CIS (Construction Industry Scheme) reporting.",
    outcomes: [
      "Records maintained to HMRC Making Tax Digital (MTD) standards",
      "Real-time cash-flow visibility via Xero and QuickBooks",
      "Monthly summaries with cost-saving, growth-oriented insights",
    ],
    included: [
      "Cloud Accounting",
      "Digital Solutions",
      "Making Tax Digital (MTD)",
      "Sales & purchase ledgers",
      "Bank reconciliations",
      "VAT record-keeping",
      "Foreign currency transactions",
      "CIS (Construction Industry Scheme) reporting",
    ],
    idealFor:
      "Sole traders and SMEs who want accurate, audit-ready books and real-time cash-flow visibility.",
  },
  {
    slug: "accounting",
    title: "Accounting",
    short:
      "Clear, reliable accounts prepared with precision and transparency. Giving you the insights you need to make confident business decisions.",
    summary:
      "We provide end-to-end accounting services tailored to your business or personal finances. From bookkeeping and payroll to tax planning and statutory compliance, our goal is to streamline your processes while ensuring full HMRC compliance.",
    outcomes: [
      "Year-end statutory accounts prepared and filed",
      "Management accounts you can actually use to make decisions",
      "Full HMRC compliance across bookkeeping, payroll and tax",
    ],
    included: [
      "Forensic Accountancy",
      "Management Accounts",
      "Year-End Accounts",
      "Company Secretary",
    ],
    idealFor:
      "UK limited companies, partnerships and sole traders needing end-to-end compliance.",
  },
  {
    slug: "tax",
    title: "Tax",
    short:
      "We simplify tax compliance while maximising savings and allowances. From VAT to annual returns, we make sure you never pay more than you should.",
    summary:
      "Navigating the complexities of tax can be challenging — that's where we come in. We provide comprehensive tax services for individuals, businesses, and corporations. From compliance to planning, we help you minimise liabilities, optimise reliefs, and stay ahead of deadlines.",
    longDescription:
      "Whether it's personal tax, corporation tax, VAT, or capital gains, our proactive approach ensures you meet your obligations while making the most of every opportunity.",
    outcomes: [
      "Liabilities minimised through reliefs, allowances and planning",
      "Deadlines met across personal, corporate and indirect taxes",
      "Proactive planning — no end-of-year surprises",
    ],
    included: [
      "Capital Allowance",
      "Corporate Tax",
      "Foreign Tax Issues",
      "HNWIs (High Net Worth Individuals)",
      "Making Tax Digital",
      "Personal Tax",
      "Probate & Estate Administration",
      "Research & Development",
      "Self Assessment",
      "Tax Investigations",
      "Trust, Executorships & Wealth Protection",
      "VAT",
    ],
    idealFor:
      "Individuals, partnerships, HNWIs and corporations — UK and cross-border.",
  },
  {
    slug: "payroll",
    title: "Payroll",
    short:
      "Seamless, compliant payroll management that looks after your team. From payslips to pensions, everything is handled with care and accuracy.",
    summary:
      "Simplify payroll compliance with our end-to-end services. We manage RTI (Real Time Information) submissions to HMRC, calculate PAYE, NIC, and student loan deductions, and ensure auto-enrolment pension compliance for eligible staff.",
    longDescription:
      "Our systems handle statutory payments like sick pay and maternity leave, while generating payslips and P60s seamlessly. For multi-site or seasonal businesses, we implement flexible payroll solutions, including variable hours and holiday accruals. We also conduct annual audits to ensure pension schemes meet TPR (The Pensions Regulator) standards, avoiding penalties.",
    outcomes: [
      "RTI submissions and PAYE/NIC handled in-cycle",
      "Auto-enrolment pensions kept compliant with TPR standards",
      "Statutory pay, P60s, variable hours — delivered accurately",
    ],
    included: [
      "RTI (Real Time Information) submissions to HMRC",
      "PAYE, NIC and student loan deductions",
      "Auto-Enrolment pension compliance",
      "Statutory sick pay & maternity leave",
      "Payslips and P60s",
      "Variable hours & holiday accruals",
      "Annual pension scheme audits (TPR)",
    ],
    idealFor:
      "Businesses from 1 to 500+ employees — including multi-site and seasonal teams.",
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    short:
      "Independent, thorough audits that build trust and credibility. Turning compliance into insights that strengthen your business.",
    summary:
      "Our audit and assurance services provide independent, objective evaluations that add credibility to your financial statements and strengthen stakeholder trust. We go beyond regulatory compliance to offer valuable insights into your internal controls, risk areas, and operational efficiency.",
    longDescription:
      "Whether you're a growing SME, a not-for-profit, or a larger enterprise, our audit approach is tailored to your business and conducted with integrity, accuracy, and professionalism.",
    outcomes: [
      "Independent opinion that strengthens stakeholder trust",
      "Actionable insights on internal controls and risk areas",
      "Audit approach tailored to your sector and scale",
    ],
    included: [
      "Audit and Assurance",
      "Charity Audit",
      "Due Diligence",
      "Forensic Audit",
      "Agreed upon Procedures",
      "SOX Compliance Audits",
      "Service Organisation Controls Reports",
      "Solicitors Regulation Authority — Reporting Accountant",
      "Service Charge Financial Statements",
    ],
    idealFor:
      "SMEs above audit thresholds, not-for-profits, regulated firms and larger enterprises.",
  },
  {
    slug: "advisory",
    title: "Advisory & Consultancy",
    short:
      "Make informed business decisions with clarity and confidence. Our advisory service blends financial expertise with practical insight to guide you through challenges and opportunities.",
    summary:
      "Our advisory services are built to help you make smarter decisions, unlock growth, and future-proof your business. We deliver strategic, data-driven insights customised to specific business challenges — whether you're starting a venture, adapting to market changes, or improving operational efficiency.",
    longDescription:
      "We position ourselves as trusted partners throughout the business lifecycle.",
    outcomes: [
      "Clearer strategic decisions across growth, pricing and operations",
      "Data-driven forecasts and scenario models",
      "Fractional CFO/FD insight without the full-time hire",
    ],
    included: [
      "Business Advisory",
      "Business Forecasting",
      "Business Management",
      "Business Modelling",
      "Business Start-Up",
      "Retirement / Exit Planning",
      "Fractional CFO & FD Services",
    ],
    idealFor:
      "Founders, growing businesses, and owners planning exits or transitions.",
  },
  {
    slug: "corporate-finance",
    title: "Corporate Finance",
    short:
      "From startup support to growth strategies, we act as your financial sounding board. We don't just consult, we partner with you for success.",
    summary:
      "Our corporate finance services are designed to support you through critical business milestones — from raising capital to mergers, acquisitions, and exit planning.",
    outcomes: [
      "Capital-raising and deal support from diligence to completion",
      "Valuations and fairness opinions that stand up to scrutiny",
      "Exit and succession plans built around your timeline",
    ],
    included: [
      "Mergers & Acquisitions",
      "Buying a Business",
      "Selling Your Business",
      "Business Valuations",
      "Succession Planning",
      "MBO / MBI Advice",
      "Company Demerger",
    ],
    idealFor:
      "Owners contemplating M&A, succession, a buy-in, buy-out, or demerger.",
  },
  {
    slug: "business-valuations",
    title: "Business Valuations",
    short:
      "Understanding the true value of your business is critical. Our valuation services are thorough, objective, and tailored to your unique needs in sale, investment, or internal decision-making.",
    summary:
      "Accurate valuations are critical for sales, disputes, or strategic planning. We employ methodologies like DCF, EBITDA multiples, and net asset valuations (NAV), tailored to your industry — whether tech (ARR-based models), manufacturing (replacement cost), or professional services (goodwill assessments).",
    longDescription:
      "We benchmark against recent transactions and adjust for market conditions, such as rising interest rates or sector volatility. For litigation or shareholder disputes, our valuations comply with UKGAAP and International Valuation Standards (IVS), supported by robust documentation for court or HMRC scrutiny. We also provide fairness opinions for M&A, ensuring transparency and stakeholder confidence.",
    outcomes: [
      "Valuations aligned with UKGAAP and International Valuation Standards (IVS)",
      "Methodologies matched to your sector — DCF, EBITDA multiples, NAV",
      "Court- and HMRC-ready documentation for disputes or transactions",
    ],
    included: [
      "Discounted Cash Flow (DCF) valuations",
      "EBITDA-multiple valuations",
      "Net Asset Valuations (NAV)",
      "Sector-specific models (tech ARR, manufacturing, professional services)",
      "Benchmarking against recent transactions",
      "Litigation & shareholder dispute support",
      "Fairness opinions for M&A",
    ],
    idealFor:
      "Owners, shareholders, and legal counsel needing a defensible, independent valuation.",
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

export const founder = {
  name: "Faraz Yunus",
  role: "Founder & Managing Partner",
  initials: "FY",
  quals: "FCCA, ACA, MSc, BSc (Hons)",
  bio: [
    "Faraz founded FMY on a single premise: that serious businesses deserve serious, senior-led accountancy — without the Big 4 politics or the Big 4 invoice. Every file, every return, every piece of advice carries his name.",
    "He brings 17 years of experience across EY, listed multinationals, and professional-services firms on four continents. His Big 4 background covers audit, assurance, and advisory; at board level he has led finance for listed entities; and he has executive experience scaling UK professional-services firms into new markets.",
    "He specialises in international expansion, cross-border income, overseas assets, and multi-jurisdiction tax planning — the sorts of problems that get handed off to juniors elsewhere. At FMY, they land on his desk.",
  ],
  quote:
    "Not junior staff. No rushed appointments. No surprise bills for simple questions.",
} as const;

export const coreValues = [
  {
    k: "Committed",
    v: "Commitment is the foundation of everything we do. We take every client's goals personally — working with precision and persistence to deliver more than expected.",
  },
  {
    k: "Partners",
    v: "Accountancy is not just about numbers, it's about people. We see ourselves as partners in your journey — standing beside you, anticipating challenges, and unlocking opportunities together.",
  },
  {
    k: "Accessible",
    v: "Great advice only matters if it's within reach. We pride ourselves on being approachable, responsive, and clear. No jargon, no closed doors, just open conversations and practical insights.",
  },
  {
    k: "Reliable",
    v: "Trust is earned, not claimed. Clients turn to us because they know we deliver consistently, carefully, and with integrity at the heart of every decision.",
  },
] as const;

export const vfoFeatures = [
  {
    k: "Partner-led, every time",
    v: "Your engagement is owned by a partner — not by an account manager two rungs removed from the work.",
  },
  {
    k: "Scale without hiring",
    v: "Bookkeeper, accountant, tax lead, payroll, and fractional FD — live on day one, no recruiting cycle.",
  },
  {
    k: "Mid-market pricing",
    v: "A finance function that would cost £250k+ to build in-house, delivered at a fraction of that outlay.",
  },
  {
    k: "Business-centric advice",
    v: "Advice rooted in your commercial reality — not generic tax-planner output lifted from last year's template.",
  },
  {
    k: "Reliable, responsive service",
    v: "Named contacts. Real SLAs. Same-day response on material issues; next-day on everything else.",
  },
  {
    k: "Tailored strategies",
    v: "Your structure, your KPIs, your board pack. We build to your ambition, not to a template library.",
  },
  {
    k: "Institutional-grade expertise",
    v: "Big 4 training, FCA-regulated experience, listed-entity board exposure — brought in-house to your finance function.",
  },
  {
    k: "CFO-level strategic insight",
    v: "Beyond historical reporting: pricing, margin architecture, scenario planning, and capital strategy.",
  },
  {
    k: "Clarity from complexity",
    v: "We turn messy cross-border, cross-entity, or cross-currency problems into one-page answers.",
  },
  {
    k: "Proactive planning",
    v: "We pre-empt year-end issues in Q1, not Q4. The goal is never a surprise — to you, to HMRC, or to your board.",
  },
  {
    k: "Plain English, no jargon",
    v: "You should be able to follow every sentence of every deliverable. If you can't, that's our failure.",
  },
  {
    k: "Fixed fees, no surprises",
    v: "Written scope, written fee, written exclusions. If we underquote, we absorb it — not you.",
  },
] as const;

export const switching = [
  {
    k: "Getting started",
    v: "All it takes is signing your engagement letter. From there, we'll take care of everything and get you up and running quickly.",
  },
  {
    k: "Liaising with your previous accountant",
    v: "If you're already working with someone else, don't worry. We'll reach out directly and handle the handover on your behalf.",
  },
  {
    k: "We handle the setup",
    v: "Simply provide us access to your existing records or software — either online or by post — and we'll manage the full setup so you can focus on your business.",
  },
] as const;

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Virtual Finance Office", href: "/virtual-finance-office" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
