import type { StatsSection } from "../types";
import Counter from "./Counter";

export default function Stats({ items }: StatsSection) {
  return (
    <section className="border-b border-ink/20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4 md:divide-x md:divide-ink/20">
        {items.map((s) => (
          <div key={s.label} className="px-5 py-12 max-md:nth-[-n+2]:border-b max-md:border-ink/20 max-md:even:border-l sm:px-8">
            <div className="font-display text-6xl leading-none text-brand sm:text-7xl"><Counter to={s.value} suffix={s.suffix} /></div>
            <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
