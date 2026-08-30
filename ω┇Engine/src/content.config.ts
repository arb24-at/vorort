import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const itemGroup = z.object({
  eyebrow: z.string().min(3),
  title: z.string().min(8),
  intro: z.string().min(30).optional(),
  items: z.array(z.string().min(12)).min(4)
});

const storyboardPanel = z.object({
  role: z.enum(["situation", "investigation", "intervention", "outcome"]),
  composition: z.enum(["wide", "text-left", "text-right", "system"]),
  visualState: z.enum(["conflict", "dependencies", "controlled-change", "verified"]),
  eyebrow: z.string().min(3),
  title: z.string().min(8),
  text: z.string().min(60),
  points: z.array(z.string().min(12)).min(2).max(4),
  callouts: z.array(z.string().min(3)).min(2).max(4)
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
    navigation: z.object({
      group: z.enum(["device-home", "workplace-collaboration"]),
      label: z.string().min(4).max(46)
    }),
    page: z.object({
      template: z.enum(["private-prototype", "business-prototype", "standard", "guided-private", "guided-business"]),
      technicalDepth: z.enum(["approachable", "informative", "professional"]),
      theme: z.object({
        variant: z.enum(["computer", "software", "network", "workspace"]),
        state: z.string().min(20),
        title: z.string().min(8),
        description: z.string().min(30)
      }),
      storyboard: z.array(storyboardPanel).length(4).optional()
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

    const isGuidedTemplate =
      service.page.template === "guided-private" || service.page.template === "guided-business";

    if (isGuidedTemplate && !service.expanded) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["expanded"],
        message: "Expanded service pages require situations, process, proof, boundaries, FAQs and related services"
      });
    }

    if (isGuidedTemplate && !service.page.storyboard) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["page", "storyboard"],
        message: "Guided service pages require a four-state storyboard"
      });
    }

    if (service.page.template === "guided-private" && service.audience !== "private") {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["audience"],
        message: "Guided private pages must use the private audience"
      });
    }

    if (service.page.template === "guided-business" && service.audience !== "business") {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["audience"],
        message: "Guided business pages must use the business audience"
      });
    }
  });

const services = defineCollection({
  loader: file("./src/content/services.yml"),
  schema: serviceSchema
});

export const collections = { services };
