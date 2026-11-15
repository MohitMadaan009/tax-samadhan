import { useMemo } from "react";
import { motion } from "motion/react";
import type { DeadlinesData } from "../types";
import { nextDue } from "../lib/dates";

const when = (d: number) => (d === 0 ? "Today" : d === 1 ? "Tomorrow" : `${d} days`);

export default function Deadlines({ title, footnote, items }: DeadlinesData) {
  const rows = useMemo(() => items.map((i) => ({ ...i, ...nextDue(i.day) })).sort((a, b) => a.days - b.days), [items]);
  return (
    <motion.aside initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="border border-ink/25 bg-paper/60">
      <div className="border-b border-ink/25 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em]">{title}</div>
      {rows.map((r, i) => (
        <motion.div key={r.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.12 }}
          className={`grid grid-cols-[5rem_1fr_auto] items-center gap-4 border-b border-ink/10 px-5 py-4 ${i === 0 ? "bg-ink text-paper" : ""}`}>
          <span className="font-display text-4xl leading-none">
            {r.due.getDate()}
            <span className="ml-1.5 font-mono text-[10px] uppercase tracking-widest opacity-60">{r.due.toLocaleDateString("en-IN", { month: "short" })}</span>
          </span>
          <span>
            <span className="block font-medium">{r.label}</span>
            {r.note && <span className="block text-sm opacity-60">{r.note}</span>}
          </span>
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
            {i === 0 && <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-accent opacity-75" /><span className="relative h-2 w-2 rounded-full bg-accent" /></span>}
            {when(r.days)}
          </span>
        </motion.div>
      ))}
      {footnote && <p className="px-5 py-3 font-mono text-[10px] uppercase tracking-wider opacity-55">{footnote}</p>}
    </motion.aside>
  );
}
