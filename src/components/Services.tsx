import { ArrowUpRight } from "lucide-react";
import type { ServicesSection } from "../types";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Services({ id, eyebrow, title, items }: ServicesSection) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHead eyebrow={eyebrow} title={title} />
      <div className="mt-16 border-b border-ink/20">
        {items.map((s, i) => (
          <Reveal key={s.title}>
            <article className="group relative overflow-hidden border-t border-ink/20">
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <div className="relative grid gap-4 px-2 py-8 transition-colors duration-500 group-hover:text-paper md:grid-cols-12 md:gap-8 md:px-6">
                <span className="font-mono text-xs tracking-widest text-brand transition-colors duration-500 group-hover:text-accent md:col-span-1 md:pt-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-3xl md:col-span-5 md:text-4xl">{s.title}</h3>
                <div className="md:col-span-5">
                  <p className="opacity-70">{s.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-wider">{s.points?.map((p) => <li key={p}>+ {p}</li>)}</ul>
                </div>
                <ArrowUpRight className="hidden justify-self-end transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:col-span-1 md:block" />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
