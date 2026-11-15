import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { TestimonialsSection } from "../types";

export default function Testimonials({ id, items }: TestimonialsSection) {
  const [q, setQ] = useState(0);
  const go = (d: number) => setQ((x) => (x + d + items.length) % items.length);
  const btn = "grid h-11 w-11 place-items-center border border-ink/30 transition hover:bg-ink hover:text-paper";
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-12">
        <div aria-hidden className="font-display text-[9rem] leading-[0.7] text-accent lg:col-span-2">“</div>
        <div className="lg:col-span-10">
          <AnimatePresence mode="wait">
            <motion.figure key={q} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="min-h-56">
              <blockquote className="font-display text-3xl leading-[1.12] tracking-tight sm:text-5xl">{items[q].quote}</blockquote>
              <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.18em] opacity-70">{items[q].author}</figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-12 flex items-center gap-6">
            <span className="font-mono text-xs tracking-widest">{String(q + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <div className="relative h-px flex-1 bg-ink/20">
              <motion.div key={q} className="absolute inset-0 origin-left bg-ink" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 6, ease: "linear" }} onAnimationComplete={() => go(1)} />
            </div>
            <button aria-label="Previous" className={btn} onClick={() => go(-1)}><ArrowLeft size={18} /></button>
            <button aria-label="Next" className={btn} onClick={() => go(1)}><ArrowRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
