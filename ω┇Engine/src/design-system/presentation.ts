// Named contexts belong to shared design, never arbitrary classes in copy.
export const presentationVariants = ["standard", "compact"] as const;
export type Presentation = typeof presentationVariants[number];
export function servicePresentation(composition: { experiment?: string; contactAfter?: string }): Presentation {
  return composition.experiment || composition.contactAfter ? "compact" : "standard";
}
