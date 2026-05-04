"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { matchTopic } from "@/lib/chatbot-match";
import { topics, greeting } from "@/lib/chatbot-knowledge";
import { cn } from "@/lib/cn";

type Msg = {
  id: number;
  role: "user" | "assistant";
  content: string;
  /** When true, render with a per-character reveal animation. */
  streaming?: boolean;
};

const STORAGE_KEY = "fmy:chat-v1";

// Curated suggested prompts — shown when conversation is empty.
const STARTER_QUESTIONS = [
  "What is the Virtual Finance Office?",
  "How much does FMY cost?",
  "How do I switch from my current accountant?",
  "Can you help with R&D tax credits?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  // Restore conversation from localStorage on mount.
  useEffect(() => {
    setHydrated(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Msg[];
        setMessages(parsed.map((m) => ({ ...m, streaming: false })));
        idRef.current = parsed.length;
      }
    } catch {}
  }, []);

  // Persist on change.
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages, hydrated]);

  // Auto-scroll to bottom when messages change.
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, thinking, open]);

  // Lock body scroll on mobile when chat is open.
  useEffect(() => {
    if (!open || typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    if (isMobile) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // Close on outside click + Escape key.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      // Click inside the panel itself — keep open.
      if (panelRef.current && panelRef.current.contains(target)) return;
      // Click on the launcher — let its own handler toggle.
      if (target.closest(".chatbot-launcher")) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed || thinking) return;

    const userMsg: Msg = {
      id: idRef.current++,
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setThinking(true);

    // Simulated "thinking" delay so it doesn't feel instant.
    const delay = 400 + Math.random() * 500;
    setTimeout(() => {
      const result = matchTopic(trimmed);
      const aiMsg: Msg = {
        id: idRef.current++,
        role: "assistant",
        content: result.answer,
        streaming: true,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setThinking(false);
    }, delay);
  }

  function clearConversation() {
    setMessages([]);
    idRef.current = 0;
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    ask(input);
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        aria-label={open ? "Close FMY assistant" : "Open FMY assistant"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "chatbot-launcher fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40",
          "inline-flex items-center gap-2.5 rounded-full pl-2 pr-5 py-2",
          "bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950",
          "shadow-[0_8px_28px_-6px_rgba(201,164,73,0.55)] hover:shadow-[0_14px_36px_-6px_rgba(201,164,73,0.75)]",
          "transition-all duration-300",
          open ? "scale-90 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        )}
      >
        <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-ink-950/20">
          <ChatIcon />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-ink-950" />
        </span>
        <span className="font-medium text-[15px]">Ask FMY</span>
      </button>

      {/* Backdrop on mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink-950/60 backdrop-blur-sm sm:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Chat panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-label="FMY Assistant"
        className={cn(
          "chatbot-panel fixed z-50",
          "inset-x-0 bottom-0 sm:inset-auto sm:bottom-6 sm:right-6",
          "sm:w-[400px] sm:max-w-[calc(100vw-3rem)]",
          "h-[85vh] sm:h-[640px] sm:max-h-[calc(100vh-3rem)]",
          "rounded-t-3xl sm:rounded-3xl border hairline-gold",
          "bg-gradient-to-b from-ink-900 to-ink-950",
          "shadow-[0_24px_72px_-12px_rgba(0,0,0,0.7)]",
          "flex flex-col overflow-hidden",
          "transition-all duration-300",
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-8 opacity-0 pointer-events-none"
        )}
      >
        <Header onClose={() => setOpen(false)} onClear={clearConversation} hasMessages={messages.length > 0} />

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-5 py-5 space-y-4 chatbot-scroll"
        >
          {messages.length === 0 ? (
            <Welcome onAsk={ask} />
          ) : (
            messages.map((m) => (
              <MessageBubble key={m.id} role={m.role} content={m.content} streaming={m.streaming} />
            ))
          )}
          {thinking && <TypingIndicator />}
        </div>

        <Footer
          input={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          disabled={thinking}
        />
      </div>
    </>
  );
}

// ---------------------------------------------------------------- subcomponents

function Header({
  onClose,
  onClear,
  hasMessages,
}: {
  onClose: () => void;
  onClear: () => void;
  hasMessages: boolean;
}) {
  return (
    <div className="relative flex items-center justify-between px-5 py-4 border-b hairline bg-ink-900/80 backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950">
          <ChatIcon />
        </span>
        <div className="leading-tight">
          <div className="font-display text-[15px] text-bone-50">
            FMY Assistant
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Online · usually replies instantly
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        {hasMessages && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Clear conversation"
            className="text-[10px] uppercase tracking-[0.16em] text-slate-muted hover:text-gold-400 transition-colors px-2 py-1"
          >
            Clear
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="w-8 h-8 inline-flex items-center justify-center rounded-full text-bone-100 hover:bg-white/10 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 3l8 8M11 3l-8 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

function Welcome({ onAsk }: { onAsk: (q: string) => void }) {
  // Show one suggested prompt per category (rotated by recent topics).
  const categoryGroups = STARTER_QUESTIONS.map((q) =>
    topics.find((t) => t.question === q)
  ).filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="space-y-5">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border hairline-gold bg-ink-900/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold-400">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
          Welcome
        </div>
        <p className="mt-3 text-[15px] text-bone-50 leading-relaxed">
          {greeting.hello}
        </p>
      </div>

      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-slate-muted">
          Suggested questions
        </div>
        <div className="mt-3 space-y-2">
          {categoryGroups.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onAsk(t.question)}
              className="group w-full text-left rounded-xl border hairline bg-ink-900/40 hover:border-gold-400/40 hover:bg-ink-900 px-4 py-3 transition-colors"
            >
              <div className="text-[10px] uppercase tracking-[0.16em] text-gold-400/80 mb-1">
                {t.category}
              </div>
              <div className="text-sm text-bone-50 group-hover:text-gold-300 transition-colors">
                {t.question}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MessageBubble({
  role,
  content,
  streaming,
}: {
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
}) {
  const [revealed, setRevealed] = useState(streaming ? "" : content);
  const isUser = role === "user";

  useEffect(() => {
    if (!streaming) {
      setRevealed(content);
      return;
    }
    let i = 0;
    setRevealed("");
    const tick = () => {
      i += Math.max(1, Math.floor(content.length / 220));
      setRevealed(content.slice(0, i));
      if (i < content.length) {
        timer = window.setTimeout(tick, 18);
      }
    };
    let timer = window.setTimeout(tick, 30);
    return () => window.clearTimeout(timer);
  }, [content, streaming]);

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[88%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed",
          isUser
            ? "bg-gold-500/15 text-bone-50 border hairline-gold rounded-br-sm"
            : "bg-ink-800/80 border hairline text-bone-100 rounded-bl-sm"
        )}
      >
        <Markdown text={revealed} />
        {streaming && revealed.length < content.length && (
          <span className="inline-block w-1 h-3 ml-0.5 align-middle bg-gold-400 animate-pulse" />
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="rounded-2xl rounded-bl-sm px-4 py-3 bg-ink-800/80 border hairline">
        <div className="flex items-end gap-1 h-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400/70 animate-bounce [animation-delay:-0.3s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400/70 animate-bounce [animation-delay:-0.15s]" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400/70 animate-bounce" />
        </div>
      </div>
    </div>
  );
}

function Footer({
  input,
  onChange,
  onSubmit,
  disabled,
}: {
  input: string;
  onChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  disabled: boolean;
}) {
  return (
    <form onSubmit={onSubmit} className="border-t hairline bg-ink-900/80 backdrop-blur p-3">
      <div className="flex items-end gap-2">
        <textarea
          value={input}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              onSubmit(e);
            }
          }}
          rows={1}
          placeholder="Ask anything about FMY…"
          className="flex-1 resize-none max-h-32 rounded-2xl border hairline bg-ink-950/60 px-4 py-2.5 text-sm text-bone-50 placeholder:text-slate-muted focus:outline-none focus:border-gold-400 transition-colors"
        />
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          aria-label="Send"
          className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-500 text-ink-950 hover:bg-gold-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_4px_18px_-6px_rgba(201,164,73,0.5)]"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7l10-5-3 12-2-5z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="mt-2 px-1 text-[10px] text-slate-muted text-center">
        Quick answers from our knowledge base. For specific advice,{" "}
        <Link href="/contact" className="text-gold-400 hover:text-gold-300">
          book a partner call
        </Link>
        .
      </div>
    </form>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ---------------------------------------------------------------- markdown lite

const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
const boldRe = /\*\*([^*]+)\*\*/g;
const italRe = /\*([^*\n]+)\*/g;
const splitParaRe = /\n\n+/;
const splitLineRe = /\n/;

type Token = { kind: "text" | "bold" | "italic" | "link"; text: string; href?: string };

function parseInline(line: string): Token[] {
  // Replace links + bold + italic with markers, then split.
  const tokens: Token[] = [];
  let i = 0;
  const ranges: { start: number; end: number; tok: Token }[] = [];

  for (const match of line.matchAll(linkRe)) {
    ranges.push({
      start: match.index!,
      end: match.index! + match[0].length,
      tok: { kind: "link", text: match[1], href: match[2] },
    });
  }
  for (const match of line.matchAll(boldRe)) {
    if (ranges.some((r) => match.index! >= r.start && match.index! < r.end)) continue;
    ranges.push({
      start: match.index!,
      end: match.index! + match[0].length,
      tok: { kind: "bold", text: match[1] },
    });
  }
  for (const match of line.matchAll(italRe)) {
    if (ranges.some((r) => match.index! >= r.start && match.index! < r.end)) continue;
    ranges.push({
      start: match.index!,
      end: match.index! + match[0].length,
      tok: { kind: "italic", text: match[1] },
    });
  }

  ranges.sort((a, b) => a.start - b.start);
  for (const r of ranges) {
    if (r.start > i) tokens.push({ kind: "text", text: line.slice(i, r.start) });
    tokens.push(r.tok);
    i = r.end;
  }
  if (i < line.length) tokens.push({ kind: "text", text: line.slice(i) });
  return tokens;
}

function Markdown({ text }: { text: string }) {
  const blocks = text.split(splitParaRe);
  return (
    <div className="space-y-2">
      {blocks.map((block, bi) => {
        const lines = block.split(splitLineRe);
        // Handle bullet-style "• " or "- " lists.
        const isList = lines.every((l) => /^\s*[•\-*]\s+/.test(l));
        if (isList) {
          return (
            <ul key={bi} className="space-y-1.5">
              {lines.map((l, li) => (
                <li key={li} className="flex gap-2">
                  <span className="shrink-0 mt-2 w-1 h-1 rounded-full bg-gold-400" />
                  <span>{renderTokens(parseInline(l.replace(/^\s*[•\-*]\s+/, "")))}</span>
                </li>
              ))}
            </ul>
          );
        }
        // Numbered lists ("1. ").
        const isOrdered = lines.every((l) => /^\s*\d+\.\s+/.test(l));
        if (isOrdered) {
          return (
            <ol key={bi} className="space-y-1.5">
              {lines.map((l, li) => {
                const m = l.match(/^\s*(\d+)\.\s+(.*)/);
                return (
                  <li key={li} className="flex gap-2.5">
                    <span className="shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold-500/15 text-gold-400 text-[10px] font-medium">
                      {m?.[1] ?? li + 1}
                    </span>
                    <span>{renderTokens(parseInline(m?.[2] ?? l))}</span>
                  </li>
                );
              })}
            </ol>
          );
        }
        return (
          <p key={bi}>
            {lines.map((l, li) => (
              <span key={li}>
                {renderTokens(parseInline(l))}
                {li < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

function renderTokens(tokens: Token[]) {
  return tokens.map((t, i) => {
    if (t.kind === "bold") return <strong key={i} className="text-bone-50 font-medium">{t.text}</strong>;
    if (t.kind === "italic") return <em key={i} className="italic">{t.text}</em>;
    if (t.kind === "link") {
      const isExt = t.href!.startsWith("http");
      return (
        <Link
          key={i}
          href={t.href!}
          target={isExt ? "_blank" : undefined}
          rel={isExt ? "noreferrer" : undefined}
          className="text-gold-400 hover:text-gold-300 underline decoration-gold-400/30 hover:decoration-gold-400 underline-offset-2"
        >
          {t.text}
        </Link>
      );
    }
    return <span key={i}>{t.text}</span>;
  });
}
