import { motion } from "motion/react";

interface Props { text: string; className?: string; tag?: "h1" | "h2"; immediate?: boolean; emClass?: string }

// Word-by-word masked reveal. Wrap words in *asterisks* for italic emphasis.
export default function Headline({ text, className = "", tag = "h2", immediate = false, emClass = "text-brand" }: Props) {
  const Tag = tag;
  const words = text.split(/(\*[^*]+\*)/).filter(Boolean).flatMap((part) => {
    const em = part.startsWith("*");
    return (em ? part.slice(1, -1) : part).split(" ").filter(Boolean).map((w) => ({ w, em }));
  });
  return (
    <Tag className={className}>
      {words.map((x, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className={`inline-block ${x.em ? `italic ${emClass}` : ""}`}
              initial={{ y: "110%" }}
              {...(immediate ? { animate: { y: 0 } } : { whileInView: { y: 0 }, viewport: { once: true } })}
              transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
            >{x.w}</motion.span>
          </span>{" "}
        </span>
      ))}
    </Tag>
  );
}
