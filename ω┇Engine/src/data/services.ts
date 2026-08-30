import { getCollection, type CollectionEntry } from "astro:content";

export type Locale = "de" | "en";
export type Audience = "private" | "business";

type ServiceEntry = CollectionEntry<"services">;
type ServiceData = ServiceEntry["data"];

export type LocalizedService = ServiceData & {
  alternateSlug: string;
};

let servicesPromise: Promise<LocalizedService[]> | undefined;

async function buildServices(): Promise<LocalizedService[]> {
  const entries = await getCollection("services");
  const entryByTranslationAndLocale = new Map<string, ServiceData>();
  const serviceIds = new Set<string>();
  const publicPaths = new Set<string>();

  for (const entry of entries) {
    const service = entry.data;
    const pairKey = `${service.translationId}:${service.locale}`;

    if (serviceIds.has(service.id)) {
      throw new Error(`Duplicate service id: ${service.id}`);
    }
    serviceIds.add(service.id);

    if (entryByTranslationAndLocale.has(pairKey)) {
      throw new Error(`Duplicate localized service entry: ${pairKey}`);
    }

    entryByTranslationAndLocale.set(pairKey, service);

    const routeKey = `${service.locale}:${service.audience}:${service.slug}`;
    if (publicPaths.has(routeKey)) {
      throw new Error(`Duplicate service route: ${routeKey}`);
    }
    publicPaths.add(routeKey);
  }

  const localizedServices = entries
    .map(({ data: service }) => {
      const alternateLocale: Locale = service.locale === "de" ? "en" : "de";
      const alternate = entryByTranslationAndLocale.get(
        `${service.translationId}:${alternateLocale}`
      );

      if (!alternate) {
        throw new Error(
          `Missing ${alternateLocale} translation for service ${service.translationId}`
        );
      }

      if (alternate.audience !== service.audience) {
        throw new Error(`Audience mismatch in translation pair ${service.translationId}`);
      }

      return { ...service, alternateSlug: alternate.slug };
    })
    .sort(
      (left, right) =>
        left.order - right.order || left.hero.title.localeCompare(right.hero.title)
    );

  const translationIds = new Set(localizedServices.map((service) => service.translationId));
  for (const service of localizedServices) {
    for (const relatedId of service.expanded?.relatedServiceIds ?? []) {
      if (!translationIds.has(relatedId)) {
        throw new Error(
          `Related service ${relatedId} referenced by ${service.id} does not exist`
        );
      }
    }
  }

  return localizedServices;
}

function loadServices(): Promise<LocalizedService[]> {
  servicesPromise ??= buildServices();
  return servicesPromise;
}

export async function getServices(
  audience: Audience,
  locale: Locale
): Promise<LocalizedService[]> {
  const services = await loadServices();
  return services.filter(
    (service) => service.audience === audience && service.locale === locale
  );
}

export async function getRelatedServices(
  service: LocalizedService
): Promise<LocalizedService[]> {
  if (!service.expanded) return [];

  const services = await loadServices();
  return service.expanded.relatedServiceIds.map((translationId) => {
    const related = services.find(
      (candidate) =>
        candidate.translationId === translationId && candidate.locale === service.locale
    );

    if (!related) {
      throw new Error(
        `Related service ${translationId} (${service.locale}) referenced by ${service.id} does not exist`
      );
    }

    return related;
  });
}

export function getServicePath(service: LocalizedService): string {
  if (service.locale === "en") {
    return `en/services/${service.audience}/${service.slug}/`;
  }

  const audiencePath = service.audience === "private" ? "privatpersonen" : "unternehmen";
  return `leistungen/${audiencePath}/${service.slug}/`;
}

export function getAlternateServicePath(service: LocalizedService): string {
  if (service.locale === "de") {
    return `en/services/${service.audience}/${service.alternateSlug}/`;
  }

  const audiencePath = service.audience === "private" ? "privatpersonen" : "unternehmen";
  return `leistungen/${audiencePath}/${service.alternateSlug}/`;
}
