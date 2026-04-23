import type { Block } from "@/lib/articles";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-fmy">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-14 mb-4 font-display text-3xl sm:text-4xl tracking-tight bone-gradient-text leading-[1.15]"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-10 mb-3 font-display text-xl sm:text-2xl text-bone-50 tracking-tight"
              >
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="mt-5 text-[17px] leading-[1.75] text-bone-100"
              >
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mt-5 space-y-2.5 text-[17px] leading-[1.7] text-bone-100"
              >
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 pl-0">
                    <span className="mt-[0.65em] shrink-0 w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="mt-5 space-y-2.5 text-[17px] leading-[1.7] text-bone-100 list-none counter-reset:list"
              >
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 pl-0">
                    <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold-500/15 text-gold-400 text-xs font-medium">
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="mt-8 border-l-2 border-gold-500 pl-6 font-display italic text-2xl leading-snug text-bone-50"
              >
                {b.text}
              </blockquote>
            );
        }
      })}
    </div>
  );
}
