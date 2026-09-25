// Loaded only by the Lab review wrapper. Capture happens in the current document,
// so responsive iframes keep their own layout, fonts and section dimensions.
const TIMEOUT = 30_000;

async function bounded<T>(work: Promise<T>): Promise<T> {
  let timer: ReturnType<typeof setTimeout>;
  try {
    return await Promise.race([work, new Promise<never>((_, reject) => {
      timer = setTimeout(() => reject(new Error("Capture timed out. Check that images and fonts have loaded, then retry.")), TIMEOUT);
    })]);
  } finally { clearTimeout(timer!); }
}

export function captureScale(width: number, height: number): number {
  // At most 2×, 8 megapixels and 8192px per edge, including very long chapters.
  return Math.min(2, 8192 / width, 8192 / height, Math.sqrt(8_000_000 / (width * height)));
}

async function renderSection(section: HTMLElement): Promise<Blob> {
  const images = Array.from(section.querySelectorAll("img"));
  const loading = images.map(image => image.getAttribute("loading"));
  try {
    images.forEach(image => { image.loading = "eager"; });
    await bounded(Promise.all([
      document.fonts.ready,
      ...images.map(async image => {
        try {
          await image.decode();
          if (!image.naturalWidth) throw new Error();
        } catch { throw new Error("An image could not load. Reload the page and retry; no screenshot was saved."); }
      }),
    ]));
    const { toSvg, getFontEmbedCSS } = await import("html-to-image");
    const options = {
      filter: (node: HTMLElement) => !node.hasAttribute?.("data-capture-exclude"),
      preferredFontFormat: "woff2",
      includeQueryParams: true,
    };
    const fontEmbedCSS = await getFontEmbedCSS(section, options);
    const families = new Set(Array.from(section.querySelectorAll("*"), element =>
      getComputedStyle(element).fontFamily.split(",")[0].replace(/["']/g, "").trim()));
    for (const face of document.fonts) {
      const family = face.family.replace(/["']/g, "");
      if (face.status === "loaded" && families.has(family) && !fontEmbedCSS.includes(family)) {
        throw new Error("A font could not be captured. Check your connection and retry.");
      }
    }
    const { width, height } = section.getBoundingClientRect();
    if (!width || !height) throw new Error("This section is hidden. Open its visible preview and retry.");
    let background = "#fff";
    for (let element: HTMLElement | null = section; element; element = element.parentElement) {
      const color = getComputedStyle(element).backgroundColor;
      if (color !== "rgba(0, 0, 0, 0)" && color !== "transparent") { background = color; break; }
    }
    const svg = await toSvg(section, { ...options, fontEmbedCSS, width, height,
      style: { margin: "0", transform: "none" }, backgroundColor: background });
    // The library can replace failed CSS/font requests with empty URLs. Reject
    // those (and any unembedded resource) instead of silently exporting a gap.
    const markup = decodeURIComponent(svg.slice(svg.indexOf(",") + 1));
    for (const [, resource] of markup.matchAll(/url\(([^)]*)\)/g)) {
      if (!/^(data:|#)/.test(resource.trim().replace(/^["']|["']$/g, ""))) {
        throw new Error("An image or font could not be embedded. Check your connection and retry.");
      }
    }
    const rendered = new Image();
    rendered.src = svg;
    await rendered.decode();
    const scale = captureScale(width, height);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.floor(width * scale));
    canvas.height = Math.max(1, Math.floor(height * scale));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("This browser could not create the screenshot.");
    context.drawImage(rendered, 0, 0, canvas.width, canvas.height);
    return await new Promise<Blob>((resolve, reject) => canvas.toBlob(blob =>
      blob?.size ? resolve(blob) : reject(new Error("The screenshot could not be encoded. Try a narrower preview.")), "image/png"));
  } finally {
    images.forEach((image, index) => {
      if (loading[index] === null) image.removeAttribute("loading");
      else image.setAttribute("loading", loading[index]!);
    });
  }
}

export function setupSectionCapture() {
  document.querySelectorAll<HTMLElement>(".lab-section-review").forEach(section => {
    const button = section.querySelector<HTMLButtonElement>(".lab-capture-button")!;
    const status = section.querySelector<HTMLElement>(".lab-capture-status")!;
    const download = section.querySelector<HTMLAnchorElement>(".lab-capture-download")!;
    let objectURL: string | undefined;
    button.hidden = false;
    button.addEventListener("click", async () => {
      if (button.disabled) return;
      button.disabled = true;
      status.textContent = "Preparing section image…";
      download.hidden = true;
      if (objectURL) URL.revokeObjectURL(objectURL);
      const png = bounded(renderSection(section));
      // Pass the promise while still inside the user gesture (required by Safari).
      // Handle rejection immediately, even if rendering is still in progress.
      let clipboardResult: Promise<boolean> = Promise.resolve(false);
      try {
        if (window.isSecureContext && navigator.clipboard?.write && typeof ClipboardItem !== "undefined"
          && (!ClipboardItem.supports || ClipboardItem.supports("image/png"))) {
          clipboardResult = navigator.clipboard.write([new ClipboardItem({ "image/png": png })])
            .then(() => true, () => false);
        }
      } catch { /* Unsupported constructor or clipboard policy: download below. */ }
      try {
        const blob = await png;
        objectURL = URL.createObjectURL(blob);
        download.href = objectURL;
        const instance = section.querySelector<HTMLElement>(":scope > section")?.id ?? "section";
        download.download = `${section.dataset.labRecipe}-${instance}-${Math.round(section.clientWidth)}px.png`;
        download.hidden = false;
        if (await bounded(clipboardResult).catch(() => false)) status.textContent = "Copied section image";
        else {
          download.click();
          status.textContent = "Clipboard unavailable. PNG downloaded; use Download PNG if needed.";
        }
      } catch (error) {
        status.textContent = error instanceof Error ? error.message : "Could not capture this section. Please retry.";
      } finally { button.disabled = false; }
    });
    window.addEventListener("pagehide", () => { if (objectURL) URL.revokeObjectURL(objectURL); }, { once: true });
  });
}
