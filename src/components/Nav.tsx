import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import type { ClientConfig } from "../types";

interface Props { brand: ClientConfig["brand"]; items: { id: string; label: string }[]; cta?: { label: string; href: string } }

export default function Nav({ brand, items, cta }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-3 font-display text-xl tracking-tight">
          <span className="h-2.5 w-2.5 bg-accent" />{brand.name}
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {items.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="group relative font-mono text-xs uppercase tracking-[0.18em]">
              {l.label}<span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
          {cta && <a href={cta.href} className="border border-ink px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] transition hover:bg-ink hover:text-paper">{cta.label}</a>}
        </nav>
        <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden border-t border-ink/10 md:hidden">
            <div className="flex flex-col px-5 pb-6 pt-2">
              {items.map((l, i) => (
                <motion.a key={l.id} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }} onClick={() => setOpen(false)} href={`#${l.id}`} className="border-b border-ink/10 py-4 font-display text-3xl">{l.label}</motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
