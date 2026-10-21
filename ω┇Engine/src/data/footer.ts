import type { Locale } from "./services";

// Shared editable footer copy. Identity/contact facts remain in site.ts;
// navigation and legal destinations remain in navigation.ts.
export const footerCopy = {
  en: {
    eyebrow: "Practical IT support · Berlin",
    title: "IT support for your home or business.",
    intro: "For homes, home offices and small businesses — from everyday devices to connected workplaces.",
    signals: ["On-site in Berlin", "Remote support where suitable", "IT experience since 2008"],
    serviceInformation: "Service information",
    navigation: "Footer navigation", explore: "Explore", contact: "Get in touch",
    phone: "Phone", email: "Email", message: "Send a message",
    approach: "How we work",
    approachBody: "Start with the situation, not a technical diagnosis. We clarify the scope and practical next steps before arranging any paid diagnostic work.",
    legal: "Legal information", rights: "All rights reserved.",
  },
  de: {
    eyebrow: "Praktische IT-Hilfe · Berlin",
    title: "IT-Hilfe für zu Hause und Ihr Unternehmen.",
    intro: "Für Privathaushalte, Homeoffice und kleine Unternehmen — von einzelnen Geräten bis zu vernetzten Arbeitsplätzen.",
    signals: ["Vor Ort in Berlin", "Fernunterstützung nach Absprache", "IT-Erfahrung seit 2008"],
    serviceInformation: "Informationen zum Service",
    navigation: "Navigation im Seitenfuß", explore: "Entdecken", contact: "Kontakt aufnehmen",
    phone: "Telefon", email: "E-Mail", message: "Nachricht schreiben",
    approach: "Unsere Arbeitsweise",
    approachBody: "Beschreiben Sie Ihr Anliegen — eine technische Diagnose brauchen Sie nicht. Wir klären den Umfang und die nächsten Schritte, bevor wir kostenpflichtige Diagnosearbeiten vereinbaren.",
    legal: "Rechtliche Informationen", rights: "Alle Rechte vorbehalten.",
  },
} satisfies Record<Locale, object>;
