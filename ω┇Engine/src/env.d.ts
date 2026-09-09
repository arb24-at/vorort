/// <reference types="astro/client" />

// Astro/Vite accepts stylesheet side-effect imports in .astro frontmatter.
// Declare them explicitly so TypeScript language tooling resolves the import too.
declare module "*.css";
