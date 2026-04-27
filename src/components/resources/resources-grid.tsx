"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Article } from "@/lib/articles";
import { ArrowIcon } from "@/components/button";
import { cn } from "@/lib/cn";

type Props = {
  articles: Article[];
  categories: string[];
};

export function ResourcesGrid({ articles, categories }: Props) {
  const [selected, setSelected] = useState<string>("All");

  const filtered = useMemo(() => {
    if (selected === "All") return articles;
    return articles.filter((a) => a.category === selected);
  }, [articles, selected]);

  const showFeaturedLayout = selected === "All";
  const featured = showFeaturedLayout ? filtered[0] : null;
  const rest = showFeaturedLayout ? filtered.slice(1) : filtered;

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => {
          const isActive = c === selected;
          const count =
            c === "All"
              ? articles.length
              : articles.filter((a) => a.category === c).length;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setSelected(c)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm border transition-colors",
                isActive
                  ? "bg-gold-500 text-ink-950 border-gold-500"
                  : "hairline text-bone-100 hover:border-gold-400/50 hover:text-gold-400"
              )}
            >
              {c}
              <span
                className={cn(
                  "text-[10px] tabular-nums rounded-full px-1.5 py-0.5",
                  isActive
                    ? "bg-ink-950/15 text-ink-950/70"
                    : "bg-white/5 text-bone-100/60"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-2xl border hairline bg-ink-900/40 p-12 text-center">
          <p className="text-bone-100">
            No articles in <span className="text-gold-400">{selected}</span>{" "}
            yet.
          </p>
          <button
            type="button"
            onClick={() => setSelected("All")}
            className="mt-3 text-sm text-gold-400 hover:text-gold-300"
          >
            Show all articles →
          </button>
        </div>
      ) : (
        <>
          {featured && (
            <Link
              href={`/resources/${featured.slug}`}
              className="group mt-10 block rounded-3xl border hairline-gold bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 sm:p-14 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 50% at 100% 100%, rgba(201,164,73,0.3), transparent 60%)",
                }}
              />
              <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
                <div className="max-w-3xl">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold-400 font-medium">
                    Featured · {featured.category} · {featured.readMinutes} min
                    read
                  </div>
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight bone-gradient-text leading-[1.08]">
                    {featured.title}
                  </h2>
                  <p className="mt-5 text-lg text-slate-muted leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-6 text-sm text-slate-muted">
                    {featured.date}
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 text-gold-400 group-hover:translate-x-1 transition-transform shrink-0">
                  Read article <ArrowIcon />
                </div>
              </div>
            </Link>
          )}

          <div
            className={cn(
              "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
              featured ? "mt-16" : "mt-12"
            )}
          >
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/resources/${p.slug}`}
                className="group rounded-2xl border hairline bg-ink-900/40 hover:bg-ink-900 transition-colors p-7 flex flex-col"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-gold-500/15 text-gold-400 px-2.5 py-1 font-medium uppercase tracking-wider">
                    {p.category}
                  </span>
                  <span className="text-slate-muted">
                    · {p.readMinutes} min read
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl text-bone-50 leading-snug tracking-tight group-hover:text-gold-300 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate-muted leading-relaxed flex-1 line-clamp-5">
                  {p.excerpt}
                </p>
                <div className="mt-6 pt-4 border-t hairline flex items-center justify-between text-xs text-slate-muted">
                  <span>{p.date}</span>
                  <ArrowIcon className="text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
