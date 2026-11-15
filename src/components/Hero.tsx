import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { HeroSection } from "../types";
import Headline from "./Headline";
import Deadlines from "./Deadlines";

export default function Hero({ eyebrow, headline, sub, primaryCta, secondaryCta, deadlines }: HeroSection) {
  return (
    <section id="top" className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:pb-28 lg:pt-44">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className={deadlines ? "lg:col-span-7" : "lg:col-span-10"}>
          {eyebrow && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-brand">{eyebrow}</motion.p>}
          <Headline tag="h1" immediate text={headline} className="font-display text-[clamp(2.75rem,7.2vw,6.25rem)] font-normal leading-[0.95] tracking-tight" />
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="mt-8 max-w-lg text-lg leading-relaxed opacity-75">{sub}</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-10 flex flex-wrap items-center gap-8">
            {primaryCta && (
              <a href={primaryCta.href} className="group inline-flex items-center gap-3 bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper transition hover:bg-brand">
                {primaryCta.label}<ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            )}
            {secondaryCta && <a href={secondaryCta.href} className="border-b border-ink pb-1 font-mono text-xs uppercase tracking-[0.18em] transition hover:text-brand">{secondaryCta.label}</a>}
          </motion.div>
        </div>
        {deadlines && <div className="lg:col-span-5 lg:pt-6"><Deadlines {...deadlines} /></div>}
      </div>
    </section>
  );
}
