import type { RecipeSection } from "../design-system/section-recipes";

// MainLayout and usage reporting consume the same canonical section identity.
// Editorial compositions cannot add another footer: the shell owns one instance.
export const siteFooterSection = {
  id: "site-footer", kind: "footer", recipe: "footer.site", content: {},
} satisfies RecipeSection;
export const shellRecipeIds: readonly string[] = [siteFooterSection.recipe];

// Customer utility routes outside the content collections also use MainLayout.
export const utilityShellConsumers = [
  { id: "not-found-de", title: "404 · Seite nicht gefunden", audience: "general", locale: "de", path: "404.html", sections: [] },
  { id: "software-redirect-de", title: "Frühere Software-Übersicht · Weiterleitung", audience: "general", locale: "de", path: "leistungen/reparatur-installation/", sections: [] },
] as const;
