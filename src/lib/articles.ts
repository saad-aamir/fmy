import raw from "@/content/articles.json";

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  excerpt: string;
  readMinutes: number;
  blocks: Block[];
  sourceUrl: string;
};

// Topic-based category inference — the source data all says "Business".
// We infer a more useful category from the title for navigation purposes.
function inferCategory(title: string): string {
  const t = title.toLowerCase();
  if (/budget|tax|vat|mtd|inheritance|ihr|iht|hmrc/.test(t)) return "Tax";
  if (/companies house|director verification|esg|sustainability|frs|reporting/.test(t))
    return /frs|reporting/.test(t) ? "Reporting" : "Regulation";
  if (/cybersecurity|threat|ai-driven/.test(t)) return "Risk";
  if (/private equity|fundraising|m&a/.test(t)) return "Fundraising";
  if (/strategic|planning|economic outlook/.test(t)) return "Strategy";
  if (/virtual finance office|finance as a service|cfo|fd/.test(t))
    return "Finance leadership";
  return "Business";
}

function computeReadMinutes(blocks: Block[]): number {
  let words = 0;
  for (const b of blocks) {
    if (b.type === "p" || b.type === "quote") words += b.text.split(/\s+/).length;
    else if (b.type === "h2" || b.type === "h3") words += b.text.split(/\s+/).length;
    else if (b.type === "ul" || b.type === "ol")
      for (const i of b.items) words += i.split(/\s+/).length;
  }
  return Math.max(1, Math.round(words / 220));
}

function buildExcerpt(blocks: Block[]): string {
  for (const b of blocks) {
    if (b.type === "p" && b.text.length > 60) {
      return b.text.length > 280 ? b.text.slice(0, 277).trimEnd() + "…" : b.text;
    }
  }
  return "";
}

type RawArticle = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  category: string;
  blocks: Block[];
  url: string;
};

export const articles: Article[] = (raw as RawArticle[]).map((a) => ({
  slug: a.slug,
  title: a.title,
  date: a.date,
  isoDate: a.isoDate,
  category: inferCategory(a.title),
  excerpt: buildExcerpt(a.blocks),
  readMinutes: computeReadMinutes(a.blocks),
  blocks: a.blocks,
  sourceUrl: a.url,
}));

// Sort newest first by isoDate
articles.sort((a, b) => (a.isoDate < b.isoDate ? 1 : a.isoDate > b.isoDate ? -1 : 0));

export const articlesBySlug = Object.fromEntries(
  articles.map((a) => [a.slug, a])
);

export const articleCategories = Array.from(
  new Set(articles.map((a) => a.category))
);
