import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const itemGroup = z.object({
  eyebrow: z.string().min(3),
  title: z.string().min(8),
  intro: z.string().min(30).optional(),
  items: z.array(z.string().min(12)).min(4)
});

const serviceSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9-]+-(de|en)$/),
    translationId: z.string().regex(/^[a-z0-9-]+$/),
    locale: z.enum(["de", "en"]),
    audience: z.enum(["private", "business"]),
    order: z.number().int().positive(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    purpose: z.string().min(30),
    page: z.object({
      template: z.enum(["private-prototype", "business-prototype", "standard", "guided-private"]),
      technicalDepth: z.enum(["approachable", "informative", "professional"]),
      theme: z.object({
        variant: z.enum(["computer", "software", "network", "workspace"]),
        state: z.string().min(20),
        title: z.string().min(8),
        description: z.string().min(30)
      })
    }),
    seo: z.object({
      title: z.string().min(15).max(70),
      description: z.string().min(70).max(180),
      intent: z.string().min(20)
    }),
    hero: z.object({
      eyebrow: z.string().min(3),
      title: z.string().min(12),
      intro: z.string().min(60)
    }),
    problems: itemGroup,
    included: itemGroup,
    outcome: z.object({
      eyebrow: z.string().min(3),
      title: z.string().min(8),
      text: z.string().min(60)
    }),
    cta: z.object({
      title: z.string().min(8),
      text: z.string().min(30),
      prompt: z.string().min(20)
    }),
    expanded: z
      .object({
        situations: z.object({
          eyebrow: z.string().min(3),
          title: z.string().min(8),
          intro: z.string().min(40),
          items: z.array(z.object({ title: z.string().min(5), text: z.string().min(35) })).min(3)
        }),
        process: z.object({
          eyebrow: z.string().min(3),
          title: z.string().min(8),
          intro: z.string().min(40),
          steps: z.array(z.object({ title: z.string().min(4), text: z.string().min(30) })).min(4)
        }),
        proof: z.object({
          eyebrow: z.string().min(3),
          title: z.string().min(8),
          text: z.string().min(40),
          items: z.array(z.string().min(8)).min(4)
        }),
        boundaries: z.object({
          eyebrow: z.string().min(3),
          title: z.string().min(8),
          items: z.array(z.string().min(20)).min(3)
        }),
        faqs: z.array(z.object({ question: z.string().min(12), answer: z.string().min(45) })).min(4),
        relatedServiceIds: z.array(z.string().regex(/^[a-z0-9-]+$/)).min(2)
      })
      .optional()
  })
  .superRefine((service, context) => {
    const expectedSuffix = `-${service.locale}`;
    if (!service.id.endsWith(expectedSuffix)) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["id"],
        message: `Service id must end with ${expectedSuffix}`
      });
    }

    if (service.page.template === "guided-private" && !service.expanded) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["expanded"],
        message: "Expanded service pages require situations, process, proof, boundaries, FAQs and related services"
      });
    }
  });

const services = defineCollection({
  loader: file("./src/content/services.yml"),
  schema: serviceSchema
});

export const collections = { services };
