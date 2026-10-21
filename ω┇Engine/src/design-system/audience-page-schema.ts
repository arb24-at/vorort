import { z } from "astro/zod";
import { recipeSectionSchema } from "./section-recipes";
import { validateProductionSections } from "./production-composition";
const text = z.string().trim().min(1);
export const audiencePageSchema = z.object({
  id: z.string().regex(/^(private|business)-landing-(en|de)$/),
  translationId: z.enum(["private-landing", "business-landing"]),
  locale: z.enum(["en", "de"]), audience: z.enum(["private", "business"]),
  seo: z.object({ title: text.min(15).max(70), description: text.min(70).max(180) }).strict(),
  experiment: text,
  sections: z.array(recipeSectionSchema).min(2),
}).strict().superRefine((page, context) => {
  const issue = (path: (string | number)[], message: string) => context.addIssue({ code: z.ZodIssueCode.custom, path, message });
  if (page.id !== `${page.audience}-landing-${page.locale}` || page.translationId !== `${page.audience}-landing`) issue(["id"], "Audience identity and locale must agree");
  validateProductionSections(page.sections, { ...page, slug: page.audience, pageType: "audience" }, (path, message) => issue(["sections", ...path], message));
});
export type AudiencePage = z.infer<typeof audiencePageSchema>;

export function validateAudienceReferences(page: AudiencePage, services: { translationId: string; locale: string; audience: string }[]) {
  for (const section of page.sections) if (section.recipe === "scope.service-directory") {
    for (const item of section.content.items) if (!services.some(service => service.translationId === item.serviceId && service.audience === page.audience && service.locale === page.locale)) throw new Error(`Unknown or incompatible service ${item.serviceId} in ${page.id}`);
  }
}
