import { topics, greeting, type Topic } from "@/lib/chatbot-knowledge";

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "do", "does", "did", "have", "has", "had",
  "can", "could", "would", "should", "will", "what", "how", "why", "when",
  "where", "i", "you", "we", "us", "they", "them", "me", "my", "your", "our",
  "their", "this", "that", "these", "those", "and", "or", "but", "for", "to",
  "of", "in", "on", "at", "by", "with", "from", "as", "about", "into", "tell",
  "give", "show", "explain", "please", "thanks", "thank",
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\w\s&£$+\-/']/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

/** Score a topic against the user input. Higher = better. */
function score(input: string, topic: Topic): number {
  const lower = input.toLowerCase();
  let s = 0;

  // Exact-phrase match wins big.
  for (const kw of topic.keywords) {
    if (kw.includes(" ") && lower.includes(kw)) s += 5;
  }

  // Token overlap on remaining keywords.
  const tokens = new Set(tokenize(input));
  for (const kw of topic.keywords) {
    if (kw.includes(" ")) continue;
    if (tokens.has(kw)) s += 2;
  }

  // Bonus if a keyword appears at the start of the input, tends to be
  // the actual subject of the query (e.g. "vfo pricing" → vfo).
  for (const kw of topic.keywords) {
    if (lower.startsWith(kw)) s += 1;
  }

  return s;
}

export type MatchResult = {
  topic: Topic | null;
  answer: string;
  isFallback: boolean;
};

/** Greeting detection, short hellos shouldn't trigger keyword matching. */
const GREETING_RE = /^\s*(hi|hello|hey|yo|hiya|howdy|good (morning|afternoon|evening))\b[\s!?.]*$/i;

export function matchTopic(input: string): MatchResult {
  if (!input.trim()) {
    return { topic: null, answer: greeting.hello, isFallback: false };
  }
  if (GREETING_RE.test(input)) {
    return { topic: null, answer: greeting.hello, isFallback: false };
  }

  let best: { topic: Topic; score: number } | null = null;
  for (const topic of topics) {
    const sc = score(input, topic);
    if (sc > 0 && (!best || sc > best.score)) {
      best = { topic, score: sc };
    }
  }

  if (!best || best.score < 2) {
    return { topic: null, answer: greeting.fallback, isFallback: true };
  }

  return { topic: best.topic, answer: best.topic.answer, isFallback: false };
}
