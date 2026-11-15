// Tax Samadhan: NGO, trust and company registrations and compliance (Delhi / Noida).
import { defineClient } from "../types";

export default defineClient({
  id: "tax-samadhan",
  brand: { name: "Tax Samadhan" },
  seo: {
    title: "Tax Samadhan | NGO, Trust & Company Registration and Compliance",
    description: "12A & 80G, NGO Darpan, MCA CSR registration, DSC, FCRA, GST, ITR, audit and more for NGOs, trusts and companies. Delhi and Noida.",
  },
  theme: {
    colors: { ink: "#13213C", brand: "#1D4E89", accent: "#E27B1E", mist: "#ECE7DA", paper: "#F7F4ED" },
    fonts: {
      display: "'Fraunces', Georgia, serif",
      body: "'Hanken Grotesk', system-ui, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, monospace",
      googleUrl: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
    },
  },
  nav: { cta: { label: "Get in touch", href: "#contact" } },
  sections: [
    {
      type: "hero",
      eyebrow: "NGO & company compliance · Delhi · Noida",
      headline: "Registrations and compliance for *NGOs, trusts* and companies.",
      sub: "One team for 12A & 80G, NGO Darpan, FCRA, GST, ITR and audits. Fast approvals and minimal documentation.",
      primaryCta: { label: "Contact us", href: "#contact" },
      secondaryCta: { label: "Our services", href: "#services" },
      deadlines: {
        title: "Next compliance deadlines",
        footnote: "Indicative dates. Government extensions may apply.",
        items: [
          { label: "TDS / TCS deposit", day: 7, note: "Previous month" },
          { label: "GSTR-1", day: 11, note: "Outward supplies" },
          { label: "GSTR-3B", day: 20, note: "Summary return and tax payment" },
        ],
      },
    },
    { type: "ticker", items: ["12A & 80G", "NGO Darpan", "MCA CSR Registration", "FCRA Returns", "Section-8 Company", "Digital Signature", "ISO", "Trade Mark"] },
    { type: "stats", items: [{ value: 15, label: "Working days max, 12A & 80G provisional" }, { value: 2, label: "Offices: Delhi and Noida" }, { value: 3, label: "Service lines under one roof" }, { value: 6, suffix: "+", label: "Entity and registration types" }] },
    {
      type: "services", id: "services", nav: "Services", eyebrow: "01 / Services", title: "A complete solution for *companies* and NGOs",
      items: [
        { title: "12A & 80G Registration", description: "Provisional registration for NGOs and trusts, completed within 10 to 15 working days.", points: ["12A", "80G", "Provisional registration"] },
        { title: "NGO Darpan, CSR & DSC", description: "NGO Darpan registration, MCA CSR registration and Digital Signature Certificate services.", points: ["NGO Darpan", "MCA CSR registration", "Digital Signature"] },
        { title: "Entity Registration", description: "Set up the right legal structure for your organisation, from trusts to companies.", points: ["Trust", "Pvt Ltd company", "Section-8 company", "LLP"] },
        { title: "Online Compliance & Filings", description: "Returns, proposals and certifications handled online, start to finish.", points: ["FCRA returns", "GST returns", "ITR filing", "Proposal submission", "ISO", "Trade Mark"] },
        { title: "Accounting & Audit", description: "Audit, balance sheets and annual reports for individuals, trusts, societies and companies.", points: ["Audit", "Balance sheet", "Annual report"] },
      ],
    },
    {
      type: "process", id: "process", nav: "Process", eyebrow: "02 / Process", title: "Simple, fast and *paperwork-light*",
      steps: [
        { title: "Tell us what you need", description: "Call or message us about the registration or compliance you require." },
        { title: "Share minimal documents", description: "We keep the documentation list short and guide you through it." },
        { title: "We file and follow up", description: "Applications are filed and tracked through to approval." },
        { title: "Stay compliant", description: "Returns, accounts and audits handled so nothing is missed." },
      ],
    },
    {
      type: "contact", id: "contact", nav: "Contact", eyebrow: "03 / Contact", title: "Need registration or *compliance* help?",
      text: "Tell us what you need and our team will get back to you with the details.",
      details: [
        { type: "phone", value: "+91-9310867397" },
        { type: "phone", value: "+91-7988709060" },
        { type: "email", value: "dailytaxsamadhan01@gmail.com" },
        { type: "email", value: "dailytaxsamadhan02@gmail.com" },
        { type: "address", value: "S-37A, Sunder Block, Shakarpur, Delhi – 110092" },
        { type: "address", value: "B-8 202, Tata Eureka Park, Sector 150, Noida, Uttar Pradesh – 201301" },
      ],
      form: { whatsapp: "919310867397", options: ["12A & 80G Registration", "NGO Darpan, CSR & DSC", "Entity Registration", "Online Compliance & Filings", "Accounting & Audit"], submitLabel: "Send enquiry", successTitle: "Enquiry sent.", successText: "Our team will contact you shortly." },
    },
  ],
  footer: { legal: "NGO, trust & company registration and compliance · Delhi · Noida" },
});
