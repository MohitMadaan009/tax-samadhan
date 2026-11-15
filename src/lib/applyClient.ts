import type { ClientConfig } from "../types";

// Applies theme variables, fonts, title and meta description from the client config.
export function applyClient(c: ClientConfig) {
  const root = document.documentElement;
  const { colors, fonts } = c.theme;
  Object.entries(colors).forEach(([k, v]) => root.style.setProperty(`--c-${k}`, v));
  root.style.setProperty("--f-display", fonts.display);
  root.style.setProperty("--f-body", fonts.body);
  root.style.setProperty("--f-mono", fonts.mono ?? "ui-monospace, monospace");
  if (fonts.googleUrl) {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = fonts.googleUrl;
    document.head.appendChild(l);
  }
  document.title = c.seo.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", c.seo.description);
}
