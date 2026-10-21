import { z } from "astro/zod";
import { recipeSectionSchema } from "./section-recipes";
import { validateProductionSections } from "./production-composition";
const text = z.string().trim().min(1);
export const homePageSchema = z.object({
  id: z.string().regex(/^home-(en|de)$/), translationId: z.literal("home"),
  locale: z.enum(["en", "de"]), audience: z.literal("general"),
  seo: z.object({ title: text.min(15).max(70), description: text.min(70).max(180) }).strict(),
  experiment: text, sections: z.array(recipeSectionSchema).min(2),
}).strict().superRefine((page, context) => {
  const issue = (path: (string | number)[], message: string) => context.addIssue({ code: z.ZodIssueCode.custom, path, message });
  if (page.id !== `home-${page.locale}`) issue(["id"], "Homepage identity and locale must agree");
  validateProductionSections(page.sections, { ...page, slug: "home", pageType: "home" }, (path, message) => issue(["sections", ...path], message));
});
export type HomePage = z.infer<typeof homePageSchema>;
