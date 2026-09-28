# AGENTS.md | Framer Code exported components

You are working with Framer components exported as real React code. They run on
the official Framer runtime via the `framercode` package, so animations, variants
and interactions are preserved.

## Setup (run once)

These files drop into an existing Vite + React 19 app; the plugin's
StackBlitz preview adds the scaffold if you want a standalone project:

```sh
npm install
```

To use the components in an existing app instead: install
`framercode react@19 react-dom@19` and import
`./src/framercode/styles.css` exactly once, at the app root.

## Files

- `src/App.tsx`: ready-to-run example reconstructing the Framer site. One hash
  route per page (`#/about`), a nav bar with page links, a locale switcher
  when the site has locales, and each page's own background color. Placed
  component instances are included as commented JSX (their override props use
  Framer's internal control ids). Uncomment to render them.
- `src/framercode/project-card.jsx`
- `src/framercode/styles.css`: base Framer styles, color tokens, breakpoint rules.
- `src/framercode/chunks/*`: shared runtime chunks (do not import directly).

## How to use

- Default import each component: `import Navbar from './src/framercode/navbar'`.
- Render `<Navbar />`, or `<Navbar.Responsive />` to auto-switch variants by
  breakpoint.
- Component props use readable names derived from the Framer control titles;
  the original hashed control ids also work (ids win when both are passed).
  Every `.jsx` ships a matching `.d.ts` declaring the same public API.
- Override sizing with `style` or a high-specificity/`!important` class.
- Framer color styles are CSS variables: `--framercode-<name>` and `--token-<id>`.
- Toggle dark mode by adding the `dark` class to a parent element.

## Rules for AI assistants

- Do NOT edit files under `src/framercode/` (they are `@ts-nocheck` generated
  output); re-export from Framer instead.
- Do NOT import from `src/framercode/chunks/` directly.
- Requires React 19; if animations glitch, disable React Strict Mode.
- Scroll-driven animations (whileInView/useScroll) need StrictMode OFF.
- Reset template CSS (`#root`/`body` margin/padding/max-width) or the page
  shows extra space around components.
- Fonts are declared in `styles.css`; no extra font setup is needed.
