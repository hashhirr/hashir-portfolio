/**
 * Bakes the rendered page into dist/index.html after `vite build`, so the
 * first paint needs no JavaScript and crawlers see the full content.
 * React then hydrates it in the browser (src/main.jsx).
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const ssrDir = path.join(dist, ".ssr");
const indexPath = path.join(dist, "index.html");

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

let html = fs.readFileSync(indexPath, "utf8");
if (!html.includes("<!--app-html-->")) throw new Error("index.html is missing the <!--app-html--> placeholder");
html = html.replace("<!--app-html-->", render());

// Preload the main (latin) Geist font so text doesn't wait on CSS discovery.
const base = html.match(/src="([^"]*)assets\/index-[^"]+\.js"/)?.[1] ?? "/";
const font = fs.readdirSync(path.join(dist, "assets")).find((f) => /^geist-latin-wght-normal-.*\.woff2$/.test(f));
if (font) {
  html = html.replace(
    "</title>",
    `</title>\n    <link rel="preload" href="${base}assets/${font}" as="font" type="font/woff2" crossorigin />`
  );
}

// Inline the (small) stylesheet: saves a render-blocking round trip on mobile.
// Its url()s are absolute (base-prefixed), so they resolve the same inline.
html = html.replace(/<link rel="stylesheet"[^>]*href="[^"]*\/(assets\/index-[^"]+\.css)"[^>]*>/, (tag, file) => {
  const css = fs.readFileSync(path.join(dist, file), "utf8");
  return `<style>${css}</style>`;
});

fs.writeFileSync(indexPath, html);
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${path.relative(process.cwd(), indexPath)} (${(html.length / 1024).toFixed(1)} KB)`);
