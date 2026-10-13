# Hashir Qureshi · Portfolio

Personal portfolio of Hashir Ahmad Qureshi, Full Stack Engineer & React Native Developer.

Live: https://hashhirr.github.io/hashir-portfolio/

## Stack

- **React 18 + Vite**, prerendered to static HTML at build time and hydrated in the browser
- **Tailwind CSS** with CSS-variable design tokens (dark default + light theme)
- **framer-motion** (via `LazyMotion`) for scroll/reveal animations; hero intro is pure CSS
- Self-hosted fonts (Geist, Geist Mono, Instrument Serif) via Fontsource
- EmailJS contact form, loaded on demand (falls back to `mailto:` if not configured)

## Editing your details

| What | Where |
| --- | --- |
| Name, email, phone, GitHub/LinkedIn, company & app links, CV file | `src/constants/config.js` |
| Experience, projects, skills, pipeline copy | `src/constants/content.js` |
| CV PDF | `public/Hashir-Qureshi-CV.pdf` (keep the name, or update `CV.file` in config) |

### Contact form (optional)

Create a `.env` file:

```bash
VITE_APP_EMAILJS_SERVICE_ID=...
VITE_APP_EMAILJS_TEMPLATE_ID=...
VITE_APP_EMAILJS_PUBLIC_KEY=...
```

Without these, the form opens the visitor's email app instead.

## Development

```bash
npm install
npm run dev       # http://localhost:5173/hashir-portfolio/
npm run build     # client build + SSR build + prerender into dist/index.html
npm run preview   # serve the production build
npm run deploy    # build and publish dist/ to GitHub Pages
```

## Performance notes

- Full page HTML is prerendered (`scripts/prerender.js`), so first paint needs no JavaScript and crawlers see all content.
- Critical CSS is inlined, the main font is preloaded, and vendor code (React, framer-motion) is split into long-cached chunks.
- Looping animations are CSS/transform-only and pause automatically when off screen.
- Animations respect `prefers-reduced-motion`.
