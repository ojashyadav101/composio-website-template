# Composio Website Template

A pixel-perfect Next.js port of [composio.com](https://composio.com), built from the original Framer export.

## What's inside

| Path | Description |
|---|---|
| `app/page.tsx` | Server component — reads the Framer HTML and renders it |
| `app/layout.tsx` | Loads original CSS, Framer module preloads, and entry script |
| `html/framer-body.html` | Original pre-rendered Framer body HTML (extracted from composio.com) |
| `public/framer-original.css` | Complete original CSS — fonts, breakpoints, all Framer classes |
| `public/images/` | 88 images from composio.com (PNG, WebP, SVG, JPEG) |
| `public/assets/` | 137 font files (Roobert, Flecha, DM Mono, IBM Plex Mono…) |
| `public/fonts/` | 25 Google Fonts woff2 files (Open Sans variants) |
| `public/modules/` | 39 Framer JS/MJS bundles (React, Framer Motion, page code) |

## How it works

1. **Next.js Server Component** reads `html/framer-body.html` from disk at request time and injects it via `dangerouslySetInnerHTML` — zero client JS overhead for the initial render
2. **Original Framer CSS** (`public/framer-original.css`) is linked in the layout `<head>` — exact same styles as composio.com, including all responsive breakpoints
3. **Framer JS modules** (`public/modules/script_main.*.mjs` + friends) are loaded via `next/script afterInteractive` — these hydrate the page and activate all scroll animations, number counters, carousels, and interactive elements

The result is **1:1 visual and functional fidelity** with the original site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- [Next.js 16](https://nextjs.org/) — App Router, Server Components
- [React 19](https://react.dev/)
- [Framer Motion 11](https://www.framer.com/motion/) (bundled in the Framer modules)
- [Tailwind CSS 4](https://tailwindcss.com/) (available for extension)

## Updating the content

To re-sync with the latest composio.com:

1. Download the latest HTML: `curl -L https://composio.com -o /tmp/new.html`
2. Run the extraction script to update `html/framer-body.html` and `public/framer-original.css`
3. Download any new asset URLs that appear in the HTML

## License

Template only. All content, branding, and assets belong to [Composio](https://composio.com).
