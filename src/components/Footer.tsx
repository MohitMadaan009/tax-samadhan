import type { ClientConfig } from "../types";

export default function Footer({ brand, footer }: { brand: ClientConfig["brand"]; footer?: ClientConfig["footer"] }) {
  return (
    <footer className="overflow-hidden bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 border-t border-white/15 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50 sm:px-8">
        <span>© {new Date().getFullYear()} {brand.name}</span><span>{footer?.legal}</span>
      </div>
      <p aria-hidden className="translate-y-[10%] select-none whitespace-nowrap text-center font-display text-[13vw] leading-[0.85] text-white/[0.06]">{brand.name}</p>
    </footer>
  );
}
