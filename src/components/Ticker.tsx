import type { TickerSection } from "../types";

export default function Ticker({ items }: TickerSection) {
  return (
    <div aria-hidden className="overflow-hidden border-y border-ink/20 py-5">
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl italic sm:text-3xl">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10">{t}<span className="h-1.5 w-1.5 rounded-full bg-accent" /></span>
        ))}
      </div>
    </div>
  );
}
