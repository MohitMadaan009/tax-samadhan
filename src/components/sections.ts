// Section registry: a client's `sections` array references these by `type`.
// To add a section type: add its interface + union member in src/types.ts, build the component, register it here.
import type { ComponentType } from "react";
import type { Section } from "../types";
import Hero from "./Hero";
import Ticker from "./Ticker";
import Stats from "./Stats";
import Services from "./Services";
import Process from "./Process";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

export const SECTIONS: { [K in Section["type"]]: ComponentType<Extract<Section, { type: K }>> } = {
  hero: Hero, ticker: Ticker, stats: Stats, services: Services, process: Process, testimonials: Testimonials, contact: Contact,
};
