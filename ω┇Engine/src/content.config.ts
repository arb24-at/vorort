import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { workshopSchema } from "./design-system/workshop-schema";
import { serviceSchema } from "./data/service-schema";

const services = defineCollection({
  loader: glob({
    pattern: "**/*.{yml,yaml}",
    base: "./src/content/services",
    generateId: ({ data }) => String(data.id)
  }),
  schema: serviceSchema
});

const workshop = defineCollection({
  // Keep extensions in loader keys so same-stem .yml/.yaml files cannot silently
  // overwrite each other before getWorkshopPages checks their semantic IDs.
  loader: glob({ pattern: "*.{yml,yaml}", base: "./src/content/workshop", generateId: ({ entry }) => entry }),
  schema: workshopSchema,
});

export const collections = { services, workshop };
