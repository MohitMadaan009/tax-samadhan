import type { ComponentType } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "motion/react";
import type { ClientConfig, Section } from "./types";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { SECTIONS } from "./components/sections";

function renderSection(s: Section, i: number) {
  const Component = SECTIONS[s.type] as unknown as ComponentType<Section>;
  return <Component key={i} {...s} />;
}

export default function App({ client }: { client: ClientConfig }) {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const navItems = client.sections.flatMap((s) => (s.nav && s.id ? [{ id: s.id, label: s.nav }] : []));

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-accent" style={{ scaleX: bar }} />
      <Nav brand={client.brand} items={navItems} cta={client.nav?.cta} />
      <main>{client.sections.map(renderSection)}</main>
      <Footer brand={client.brand} footer={client.footer} />
    </MotionConfig>
  );
}
