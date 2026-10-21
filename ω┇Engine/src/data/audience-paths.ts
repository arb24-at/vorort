export function audiencePath(audience: "private" | "business", locale: "en" | "de") {
  return locale === "en" ? `en/services/${audience}/` : `leistungen/${audience === "private" ? "privatpersonen" : "unternehmen"}/`;
}
