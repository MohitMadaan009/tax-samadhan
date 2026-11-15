import { motion } from "motion/react";
import type { ProcessSection } from "../types";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Process({ id, eyebrow, title, steps }: ProcessSection) {
  return (
    <section id={id} className="border-y border-ink/20 bg-mist/70 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="relative mt-20 grid gap-14 md:grid-cols-4 md:gap-8">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeOut" }} className="absolute -top-6 left-0 right-0 hidden h-px origin-left bg-ink md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.15}>
              <span className="font-display text-7xl italic leading-none text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 opacity-70">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
