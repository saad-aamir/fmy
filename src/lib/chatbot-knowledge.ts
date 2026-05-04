/**
 * Knowledge base for the FMY chatbot.
 * Each topic has keywords that trigger it and an answer (markdown allowed).
 * The matcher (chatbot-match.ts) scores each topic by keyword overlap.
 */

export type Topic = {
  id: string;
  category:
    | "Services"
    | "Pricing"
    | "About"
    | "Process"
    | "Contact"
    | "Tax"
    | "Tools";
  question: string; // shown as a suggested prompt
  keywords: string[]; // matched against user input (lowercase)
  answer: string;
};

export const topics: Topic[] = [
  // -------------------------------------------------------------------- Services
  {
    id: "services-overview",
    category: "Services",
    question: "What services do you offer?",
    keywords: [
      "service",
      "services",
      "what do you do",
      "what do you offer",
      "offerings",
      "areas",
      "specialism",
      "specialisms",
    ],
    answer:
      "We cover the full accountancy stack across **eight specialisms**: Bookkeeping · Accounting · Tax · Payroll · Audit & Assurance · Advisory & Consultancy · Corporate Finance · Business Valuations.\n\nEvery engagement is led by a partner — no junior-first delivery. Take a look at our [services overview](/services) for what each one includes, or ask me about a specific area.",
  },
  {
    id: "vfo",
    category: "Services",
    question: "What is the Virtual Finance Office?",
    keywords: [
      "vfo",
      "virtual finance office",
      "virtual finance",
      "fractional",
      "outsourced finance",
      "finance team",
      "fractional fd",
      "fractional cfo",
    ],
    answer:
      "The **Virtual Finance Office** bundles bookkeeping, management accounts, tax, payroll, and a fractional FD into one transparent monthly fee.\n\nIt's the finance function a 100-person business would build — ready on day one, partner-led, mid-market priced. Read the [VFO page](/virtual-finance-office) for the 12 features, or [book a chat](/contact) to scope it.",
  },
  {
    id: "bookkeeping",
    category: "Services",
    question: "How does bookkeeping work?",
    keywords: [
      "bookkeeping",
      "books",
      "ledger",
      "reconciliation",
      "transactions",
      "vat",
      "mtd",
      "making tax digital",
      "xero",
      "quickbooks",
      "cis",
    ],
    answer:
      "We keep your records meticulously maintained and audit-ready — sales and purchase ledgers, bank reconciliations, VAT record-keeping (MTD-compliant), and complex areas like CIS and foreign currency.\n\nWe work in **Xero** and **QuickBooks** primarily, with monthly summaries that show what's actually moving in your business. [More on bookkeeping](/services/bookkeeping).",
  },
  {
    id: "tax",
    category: "Tax",
    question: "What tax services do you handle?",
    keywords: [
      "tax",
      "corporation tax",
      "vat",
      "ct600",
      "self assessment",
      "personal tax",
      "capital allowance",
      "research and development",
      "r&d",
      "hmrc",
      "tax investigation",
      "trust",
      "probate",
      "hnwi",
      "high net worth",
    ],
    answer:
      "Comprehensive: corporation tax, personal tax, VAT, capital allowances, R&D claims, foreign tax issues, HNWI advice, probate and estate administration, tax investigations, and Making Tax Digital. We help you minimise liabilities through reliefs and proactive planning. [See the tax page](/services/tax).",
  },
  {
    id: "rd-credits",
    category: "Tax",
    question: "Can you help with R&D tax credits?",
    keywords: [
      "r&d",
      "rd",
      "research and development",
      "tax credit",
      "innovation relief",
      "research relief",
    ],
    answer:
      "Yes — R&D tax relief is a core specialism. We prepare claims to the post-2024 HMRC scrutiny standard, with full technical narrative and cost apportionment. Average advisory clients see **circa 17%** effective tax saving across the relief portfolio.\n\nWe never sub-contract R&D work — your partner runs the engagement. [Book a 30-min review](/contact).",
  },
  {
    id: "audit",
    category: "Services",
    question: "Do you do statutory audits?",
    keywords: [
      "audit",
      "auditor",
      "statutory audit",
      "charity audit",
      "due diligence",
      "forensic",
      "sox",
      "soc",
      "service charge",
      "sra",
      "agreed upon procedures",
    ],
    answer:
      "Yes. Statutory audits, charity audits, due diligence, forensic audits, SOX/SOC reports, agreed-upon procedures, SRA reporting accountant work, and service charge financial statements. Independent, objective evaluations that go beyond box-ticking. [Audit & Assurance details](/services/audit-assurance).",
  },
  {
    id: "payroll",
    category: "Services",
    question: "What about payroll?",
    keywords: [
      "payroll",
      "rti",
      "paye",
      "nic",
      "auto-enrolment",
      "auto enrolment",
      "pension",
      "pensions",
      "p60",
      "p11d",
      "payslip",
      "sick pay",
      "maternity",
    ],
    answer:
      "End-to-end payroll: RTI submissions to HMRC, PAYE/NIC/student-loan calculations, auto-enrolment pensions, statutory sick pay & maternity, payslips, P60s/P11Ds, variable hours and holiday accruals, plus annual TPR pension audits.\n\nFrom 1 to 500+ employees, including multi-site and seasonal teams. [Payroll details](/services/payroll).",
  },
  {
    id: "advisory",
    category: "Services",
    question: "Do you offer business advisory?",
    keywords: [
      "advisory",
      "advice",
      "consulting",
      "consultancy",
      "business modelling",
      "business modeling",
      "forecasting",
      "fractional cfo",
      "fractional fd",
      "exit planning",
      "retirement planning",
      "startup",
      "start-up",
    ],
    answer:
      "Yes — strategic, data-driven advice across business advisory, forecasting, modelling, start-up support, exit/retirement planning, and fractional CFO/FD services. Designed to help you make smarter decisions, unlock growth, and future-proof the business. [Advisory page](/services/advisory).",
  },
  {
    id: "corp-finance",
    category: "Services",
    question: "Can you help with M&A or fundraising?",
    keywords: [
      "corporate finance",
      "m&a",
      "mergers",
      "acquisitions",
      "buying a business",
      "selling a business",
      "exit",
      "succession",
      "mbo",
      "mbi",
      "demerger",
      "fundraising",
      "raise capital",
    ],
    answer:
      "Yes. We support M&A (buy-side and sell-side), succession planning, MBO/MBI, demergers, and business valuations alongside the deal. Partner-led from diligence to completion. [Corporate Finance details](/services/corporate-finance).",
  },
  {
    id: "valuations",
    category: "Services",
    question: "How do business valuations work?",
    keywords: [
      "valuation",
      "valuations",
      "business value",
      "dcf",
      "ebitda",
      "nav",
      "net asset",
      "fairness opinion",
    ],
    answer:
      "Independent valuations using DCF, EBITDA multiples, and NAV — tailored to your industry (tech ARR models, manufacturing replacement cost, professional services goodwill). Compliant with UKGAAP and International Valuation Standards (IVS), supported by court- and HMRC-ready documentation. [Valuations page](/services/business-valuations).",
  },

  // ---------------------------------------------------------------------- Pricing
  {
    id: "pricing-overview",
    category: "Pricing",
    question: "How much does FMY cost?",
    keywords: [
      "price",
      "pricing",
      "cost",
      "fee",
      "fees",
      "how much",
      "expensive",
      "cheap",
      "package",
      "packages",
      "subscription",
      "monthly",
    ],
    answer:
      "Three monthly packages, written up front, no hidden fees:\n\n• **Classic** — £149/month — essentials for compliant UK companies\n• **Premium** — £249/month — adds advisory, management accounts and HMRC representation\n• **Exclusive** — £649/month — fully supported, monthly reporting, fractional FD optional\n\nPlus add-ons (Tax Investigation Cover, Part-Time FD, Software Integration, etc.). Full breakdown on [/pricing](/pricing).",
  },
  {
    id: "pricing-classic",
    category: "Pricing",
    question: "What's in the Classic package?",
    keywords: [
      "classic",
      "classic package",
      "149",
      "£149",
      "basic",
      "essentials",
    ],
    answer:
      "**Classic — £149/month**: year-end accounts + Companies House submission, corporation tax + CT600, quarterly VAT, monthly payroll + RTI, the FMY mobile app for invoicing, unlimited accountancy support, dedicated account manager, deadline reminders, and tax planning throughout the year. [See pricing](/pricing).",
  },
  {
    id: "pricing-premium",
    category: "Pricing",
    question: "What does Premium add?",
    keywords: [
      "premium",
      "premium package",
      "249",
      "£249",
      "advisory included",
      "management accounts",
    ],
    answer:
      "**Premium — £249/month** is everything in Classic plus: business and tax advisory, directors' self-assessment, EC Sales List, foreign bank accounts, dividend vouchers, mortgage/visa letters, **quarterly management accounts**, and HMRC investigation representation. [Compare on /pricing](/pricing).",
  },
  {
    id: "pricing-exclusive",
    category: "Pricing",
    question: "What's in the Exclusive package?",
    keywords: [
      "exclusive",
      "exclusive package",
      "649",
      "£649",
      "monthly management",
      "cashflow",
      "treasury",
    ],
    answer:
      "**Exclusive — £649/month** adds P11D forms, **monthly** management accounts, quarterly cashflow forecasts, Tax Investigation Cover, registered address with mail forwarding, full business reviews, CRM/cloud integration advisory, controls reviews, and access to legal/HR/H&S guidance.\n\nIt's the closest off-the-shelf equivalent to the Virtual Finance Office. [Pricing details](/pricing).",
  },
  {
    id: "addons",
    category: "Pricing",
    question: "What add-ons are available?",
    keywords: [
      "add-on",
      "addons",
      "extras",
      "tax investigation cover",
      "registered address",
      "company formation",
      "business plan",
      "business mentoring",
      "part-time fd",
      "part time fd",
      "software integration",
    ],
    answer:
      "Plug-in extras include Tax Investigation Cover (£20/mo), Business Legal Support (£25/mo), Company Formation (£299), Registered Address (from £20/mo), and Business Plan (£499). Premium services available: Business Mentoring & Part-Time FD (£499/mo each), Software Integration (from £199), Stock Management Software (from £79/mo), Time Sheets Software (from £15/mo). [Full list on /pricing](/pricing).",
  },
  {
    id: "free-quote",
    category: "Pricing",
    question: "Can I get a written quote?",
    keywords: ["quote", "quotation", "estimate", "proposal", "bespoke"],
    answer:
      "Yes — every engagement is priced up front in writing, typically within **48 hours** of the discovery call. No 6-minute timesheets, no quarterly top-ups. If we underquote, we absorb it. [Request a quote](/contact).",
  },

  // ----------------------------------------------------------------------- About
  {
    id: "founder",
    category: "About",
    question: "Who founded FMY?",
    keywords: [
      "founder",
      "faraz",
      "yunus",
      "managing partner",
      "owner",
      "ceo",
      "principal",
      "chartered",
    ],
    answer:
      "**Faraz Yunus** — Founder & Managing Partner. FCCA, ACA, MSc, BSc (Hons). 17 years with EY, listed multinationals, and professional services firms across **four continents**. International experience across Asia, Middle East, Europe and the US — invaluable for cross-border income, overseas assets, and multi-jurisdiction tax planning.\n\n*\"Not junior staff. No rushed appointments. No surprise bills for simple questions.\"* — Read his [full profile](/about).",
  },
  {
    id: "regulation",
    category: "About",
    question: "Are you regulated?",
    keywords: [
      "regulated",
      "regulation",
      "icaew",
      "registration",
      "chartered",
      "qualified",
      "licensed",
    ],
    answer:
      "Yes. **FMY Chartered Accountants** is a trading name of **FMY Accountants Limited** (Companies House registration 16813147, England & Wales), regulated by the Institute of Chartered Accountants in England and Wales (**ICAEW Firm No. 11008484**).",
  },
  {
    id: "experience",
    category: "About",
    question: "What's your team's background?",
    keywords: [
      "team",
      "experience",
      "background",
      "history",
      "credentials",
      "qualifications",
      "big 4",
      "big four",
    ],
    answer:
      "Our partner team brings **125+ cumulative years of Big 4 experience** (EY, Deloitte, KPMG, PwC), board-level finance roles at listed entities, and executive experience scaling UK professional-services firms. Three perspectives, one practice — Big 4 foundation, corporate leadership, and professional-services growth. [About page](/about).",
  },
  {
    id: "why-choose",
    category: "About",
    question: "Why should I choose FMY?",
    keywords: [
      "why",
      "why choose",
      "why fmy",
      "what makes you different",
      "different",
      "compare",
      "competitors",
    ],
    answer:
      "Five things you'll notice quickly:\n\n• **Partner-led, every time** — your engagement is owned by a partner, not handed to juniors\n• **Fixed fees** — written up front, no 6-minute timesheets, no surprise top-ups\n• **Big 4 expertise without Big 4 invoices** — institutional rigour at mid-market pricing\n• **Proactive advice** — we call you before you knew you needed calling\n• **100% client retention since incorporation** — and zero HMRC penalties on our watch",
  },

  // -------------------------------------------------------------------- Process
  {
    id: "switching",
    category: "Process",
    question: "How do I switch from my current accountant?",
    keywords: [
      "switch",
      "switching",
      "change",
      "move",
      "transfer",
      "previous accountant",
      "current accountant",
      "leave my accountant",
    ],
    answer:
      "Easier than you think — three steps:\n\n1. **Sign the engagement letter** — that's all we need from you to start\n2. **Liaise with your previous accountant** — we contact them directly and handle the handover\n3. **Set up access** — share your existing records or software, we manage the full setup\n\nMost clients are fully live within **10 business days**. [Start the switch](/contact).",
  },
  {
    id: "onboarding",
    category: "Process",
    question: "How does onboarding work?",
    keywords: ["onboarding", "onboard", "get started", "start", "begin", "first call"],
    answer:
      "Four low-friction steps:\n\n1. **Discovery call** — 30 mins with a partner to listen and diagnose\n2. **Proposal & scope** — fixed-fee proposal in writing within 48 hours\n3. **Onboarding** — software connected, prior-year files reviewed, handover handled\n4. **Ongoing delivery** — monthly packs, quarterly reviews, partner on call\n\n[Book the discovery call](/contact).",
  },
  {
    id: "software",
    category: "Tools",
    question: "What software do you use?",
    keywords: [
      "software",
      "xero",
      "quickbooks",
      "sage",
      "netsuite",
      "dext",
      "freeagent",
      "tools",
      "platform",
    ],
    answer:
      "We work natively with **Xero** and **QuickBooks** (our primary stack), and also support **Sage** and **NetSuite**. **Dext** for receipt capture across all of them. If you're on something else, we'll honestly advise whether a switch pays back.",
  },

  // ----------------------------------------------------------------- Contact
  {
    id: "contact-info",
    category: "Contact",
    question: "How can I contact you?",
    keywords: [
      "contact",
      "contact us",
      "phone",
      "call",
      "email",
      "address",
      "location",
      "office",
      "where are you",
      "reach you",
    ],
    answer:
      "**Phone**: 0330 043 5088 (weekdays 9am–6pm GMT)\n**Email**: info@fmyaccountants.co.uk\n**Office**: 86–90 Paul Street, London EC2A 4NE\n\nFor a 30-minute partner consultation, head to [/contact](/contact) or [book directly](https://calendly.com/fmy-chartered-accountants/45min).",
  },
  {
    id: "booking",
    category: "Contact",
    question: "How do I book a consultation?",
    keywords: [
      "book",
      "booking",
      "consultation",
      "meeting",
      "appointment",
      "schedule",
      "calendly",
      "discovery call",
    ],
    answer:
      "Two ways:\n\n• **Direct booking** — pick a slot on [Faraz's calendar](https://calendly.com/fmy-chartered-accountants/45min) (45-min consultation)\n• **Contact form** — tell us a bit about your business at [/contact](/contact) and we'll come back within 1 business day\n\nNo cost, no obligation.",
  },
  {
    id: "hours",
    category: "Contact",
    question: "What are your office hours?",
    keywords: ["hours", "open", "opening", "office hours", "available"],
    answer:
      "We answer phones **weekdays 9am–6pm GMT**. Email enquiries get a response within 1 business day. Office visits are by appointment only — buzz reception on the City side of 86–90 Paul Street.",
  },

  // ----------------------------------------------------------------- Misc / Resources
  {
    id: "resources",
    category: "About",
    question: "Do you publish guides or articles?",
    keywords: [
      "guide",
      "article",
      "blog",
      "resource",
      "resources",
      "newsletter",
      "insight",
      "insights",
      "brief",
    ],
    answer:
      "Yes — partner-written analysis on UK tax, regulation, and finance leadership. Recent pieces cover the 2025 Autumn Budget, IHT relief changes, MTD for sole traders, FRS 102 updates and more. [Read on /resources](/resources) or subscribe to the **FMY Brief** for one curated email a month.",
  },
  {
    id: "stats",
    category: "About",
    question: "How big is your client base?",
    keywords: [
      "size",
      "clients",
      "how many",
      "turnover under management",
      "track record",
      "stats",
    ],
    answer:
      "**£389M** in client turnover under management, **55+ UK businesses** served, **125+ cumulative years** of Big 4 experience across our partner team, and **zero HMRC penalties** on our watch. **100% client retention since incorporation**.",
  },
];

export const greeting = {
  hello:
    "Hi! I'm the FMY assistant. I can answer questions about our services, pricing, the Virtual Finance Office, switching from your current accountant, and more. What brings you here today?",
  fallback:
    "I don't have a specific answer for that one — but a partner can. The fastest way is a 30-minute consultation (no cost, no obligation): [book a meeting](/contact) or call **0330 043 5088**.",
};
