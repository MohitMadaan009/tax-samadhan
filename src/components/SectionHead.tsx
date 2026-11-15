import Headline from "./Headline";

export default function SectionHead({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand lg:col-span-3 lg:pt-4">{eyebrow}</p>
      <Headline text={title} className="font-display text-4xl leading-[1.02] tracking-tight sm:text-6xl lg:col-span-9" />
    </div>
  );
}
