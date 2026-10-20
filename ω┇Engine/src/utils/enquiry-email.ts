// Pure formatting shared by the browser fallback and focused contract checks.
// The visitor still reviews and sends the message in their own mail application.
export function enquiryEmailHref(address: string, subject: string, entries: Iterable<[string, string]>) {
  const labels: Record<string, string> = {
    name: "Name", "preferred-contact": "Preferred reply", email: "Email", phone: "Phone",
    request: "Request", postcode: "Postcode or district", company: "Company",
    "appointment-period": "Preferred appointment period", affected: "Affected device or service",
    context: "Customer context",
  };
  const lines = Array.from(entries).filter(([key, value]) => Object.hasOwn(labels, key) && value.trim())
    .map(([key, value]) => `${labels[key]}: ${value.trim()}`);
  return `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n\n"))}`;
}
