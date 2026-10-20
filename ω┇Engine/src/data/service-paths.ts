import type { LocalizedService } from "./services";

export function getServicePath(service: Pick<LocalizedService, "locale" | "audience" | "slug">): string {
  if (service.locale === "en") {
    return `en/services/${service.audience}/${service.slug}/`;
  }

  const audiencePath = service.audience === "private" ? "privatpersonen" : "unternehmen";
  return `leistungen/${audiencePath}/${service.slug}/`;
}

export function getAlternateServicePath(service: Pick<LocalizedService, "locale" | "audience" | "alternateSlug">): string {
  if (service.locale === "de") {
    return `en/services/${service.audience}/${service.alternateSlug}/`;
  }

  const audiencePath = service.audience === "private" ? "privatpersonen" : "unternehmen";
  return `leistungen/${audiencePath}/${service.alternateSlug}/`;
}
