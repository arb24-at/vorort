// Pure formatting shared by the browser fallback and focused contract checks.
// The visitor still reviews and sends the message in their own mail application.
export function enquiryEmailHref(address: string, subject: string, entries: Iterable<[string, string]>, locale: "en" | "de" = "en") {
  const labels: Record<string, string> = locale === "de" ? {
    name: "Name", "preferred-contact": "Gewünschter Kontaktweg", email: "E-Mail", phone: "Telefon",
    request: "Anliegen", postcode: "Postleitzahl oder Bezirk", company: "Unternehmen",
    "appointment-period": "Gewünschter Terminzeitraum", affected: "Betroffenes Gerät oder Dienst", context: "Kundenbereich",
  } : {
    name: "Name", "preferred-contact": "Preferred reply", email: "Email", phone: "Phone",
    request: "Request", postcode: "Postcode or district", company: "Company",
    "appointment-period": "Preferred appointment period", affected: "Affected device or service",
    context: "Customer context",
  };
  const valueLabels: Record<string, string> = { Email: "E-Mail", Phone: "Telefon", WhatsApp: "WhatsApp", Private: "Privat", Business: "Unternehmen", General: "Allgemein" };
  const lines = Array.from(entries).filter(([key, value]) => Object.hasOwn(labels, key) && value.trim())
    .map(([key, value]) => `${labels[key]}: ${locale === "de" && ["preferred-contact", "context"].includes(key) ? valueLabels[value.trim()] ?? value.trim() : value.trim()}`);
  return `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n\n"))}`;
}
