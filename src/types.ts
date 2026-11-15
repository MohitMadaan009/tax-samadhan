export interface Cta { label: string; href: string }

interface Base { id?: string; nav?: string; eyebrow?: string }

// Monthly compliance deadlines; the next due date is computed from today's date in the browser.
export interface DeadlinesData { title: string; footnote?: string; items: { label: string; day: number; note?: string }[] }
export interface HeroSection extends Base { type: "hero"; headline: string; sub: string; primaryCta?: Cta; secondaryCta?: Cta; deadlines?: DeadlinesData }
export interface TickerSection extends Base { type: "ticker"; items: string[] }
export interface StatsSection extends Base { type: "stats"; items: { value: number; suffix?: string; label: string }[] }
export interface ServicesSection extends Base { type: "services"; title: string; items: { title: string; description: string; points?: string[] }[] }
export interface ProcessSection extends Base { type: "process"; title: string; steps: { title: string; description: string }[] }
export interface TestimonialsSection extends Base { type: "testimonials"; items: { quote: string; author: string }[] }

export interface ContactForm {
  endpoint?: string;   // e.g. Formspree URL (wins over whatsapp)
  whatsapp?: string;   // number with country code, no "+"
  options?: string[];
  submitLabel?: string;
  successTitle?: string;
  successText?: string;
}
export interface ContactDetail { type: "phone" | "email" | "address"; value: string }
export interface ContactSection extends Base { type: "contact"; title: string; text: string; details?: ContactDetail[]; form: ContactForm }

export type Section = HeroSection | TickerSection | StatsSection | ServicesSection | ProcessSection | TestimonialsSection | ContactSection;

export interface ClientConfig {
  id: string;
  brand: { name: string };
  seo: { title: string; description: string };
  theme: {
    colors: Record<"ink" | "brand" | "accent" | "mist" | "paper", string>;
    fonts: { display: string; body: string; mono?: string; googleUrl?: string };
  };
  nav?: { cta?: Cta };
  sections: Section[];
  footer?: { legal?: string };
}

export const defineClient = (config: ClientConfig): ClientConfig => config;
