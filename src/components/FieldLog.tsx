import { useState } from "react";
import { tools, changelog } from "../data";

const VISIBLE_COUNT = 3;

const formatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "2-digit",
});

function entryUrl(slug: string | undefined): string | undefined {
  if (!slug) {
    return undefined;
  }

  return tools.find((tool) => tool.slug === slug)?.url;
}

function FieldLog() {
  const [expanded, setExpanded] = useState(false);

  const entries = expanded ? changelog : changelog.slice(0, VISIBLE_COUNT);
  const hiddenCount = changelog.length - VISIBLE_COUNT;

  return (
    <aside
      aria-label="Latest changes"
      className="border-gold/60 max-w-md border-l-2 pl-4"
    >
      <p className="font-display text-gold-foreground text-xs font-semibold uppercase tracking-[0.2em]">
        Field log
      </p>
      <ul className="mt-2 space-y-1.5">
        {entries.map((entry) => {
          const url = entryUrl(entry.slug);

          return (
            <li
              key={`${entry.date}-${entry.text}`}
              className="flex gap-x-3 text-sm leading-snug"
            >
              <time
                dateTime={entry.date}
                className="font-display w-14 shrink-0 pt-px text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500"
              >
                {formatter.format(new Date(entry.date))}
              </time>
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="decoration-gold/50 hover:text-gold-foreground text-zinc-600 underline underline-offset-2 transition-colors dark:text-zinc-300"
                >
                  {entry.text}
                </a>
              ) : (
                <span className="text-zinc-600 dark:text-zinc-300">
                  {entry.text}
                </span>
              )}
            </li>
          );
        })}
      </ul>
      {hiddenCount > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-display hover:text-gold-foreground mt-2 cursor-pointer text-xs font-semibold uppercase tracking-widest text-zinc-400 transition-colors dark:text-zinc-500"
        >
          {expanded ? "Show less" : `+ ${hiddenCount} more`}
        </button>
      )}
    </aside>
  );
}

export default FieldLog;
