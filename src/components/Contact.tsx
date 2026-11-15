import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, Phone, Mail, MapPin, type LucideIcon } from "lucide-react";
import type { ContactDetail, ContactSection } from "../types";
import Headline from "./Headline";

const ICONS: Record<ContactDetail["type"], LucideIcon> = { phone: Phone, email: Mail, address: MapPin };
const input = "w-full border-0 border-b border-white/30 bg-transparent py-4 text-lg text-paper outline-hidden transition placeholder:text-white/40 focus:border-accent";
type Status = "idle" | "sending" | "sent" | "error";

export default function Contact({ id, eyebrow, title, text, details = [], form }: ContactSection) {
  const [f, setF] = useState({ name: "", phone: "", need: form.options?.[0] ?? "" });
  const [status, setStatus] = useState<Status>("idle");
  const valid = f.name !== "" && f.phone.length >= 8;

  async function submit() {
    setStatus("sending");
    try {
      if (form.endpoint) {
        const r = await fetch(form.endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(f) });
        if (!r.ok) throw new Error("Request failed");
      } else if (form.whatsapp) {
        const msg = `Hi, I'm ${f.name} (${f.phone}). I need help with: ${f.need}`;
        window.open(`https://wa.me/${form.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id={id} className="bg-ink px-5 py-24 text-paper sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="mb-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <Headline text={title} emClass="text-accent" className="font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl" />
          <p className="mt-6 max-w-md text-lg text-white/65">{text}</p>
          <ul className="mt-12 border-t border-white/15">
            {details.map((d) => {
              const Icon = ICONS[d.type];
              const href = d.type === "phone" ? `tel:${d.value.replace(/[^\d+]/g, "")}` : d.type === "email" ? `mailto:${d.value}` : undefined;
              return (
                <li key={d.value} className="flex items-start gap-4 border-b border-white/15 py-4 font-mono text-sm leading-relaxed tracking-wide text-white/80">
                  <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                  {href ? <a href={href} className="transition hover:text-accent">{d.value}</a> : d.value}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <AnimatePresence mode="wait">
            {status === "sent" ? (
              <motion.div key="ok" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="border border-white/20 p-10">
                <div className="mb-6 grid h-12 w-12 place-items-center bg-accent text-ink"><Check /></div>
                <p className="font-display text-3xl">{form.successTitle ?? "Request sent."}</p>
                <p className="mt-3 text-white/65">{form.successText}</p>
              </motion.div>
            ) : (
              <motion.div key="form" exit={{ opacity: 0 }} className="space-y-6">
                <input aria-label="Your name" className={input} placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
                <input aria-label="Phone number" className={input} placeholder="Phone number" inputMode="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} />
                {form.options && <select aria-label="Service" className={`${input} [&>option]:text-ink`} value={f.need} onChange={(e) => setF({ ...f, need: e.target.value })}>{form.options.map((o) => <option key={o}>{o}</option>)}</select>}
                {status === "error" && <p className="text-sm text-red-300">Could not send. Please try again or call us.</p>}
                <button disabled={!valid || status === "sending"} onClick={submit} className="group inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-xs font-medium uppercase tracking-[0.18em] text-ink transition enabled:hover:bg-paper disabled:opacity-40">
                  {status === "sending" ? "Sending..." : form.submitLabel ?? "Send"} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
