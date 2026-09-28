# Framer Code - export guide

These components run on the real Framer runtime: animations, variants and
interactions are preserved.

## 1. Run it

Use the plugin's "Preview in StackBlitz" button for an instant runnable
project. The export is a full Vite + React + Tailwind app (index.html,
src/main.tsx, vite.config.ts, tsconfig.json, postcss/tailwind configs).

`src/App.tsx` reconstructs your Framer site with every page as a hash route with
its placed components, page links, locale switcher and page background.

## 2. Bring it into your own app

```sh
npm install framercode react@19 react-dom@19
```

Then render `src/App.tsx` from your entry or import the individual
components from `src/framercode/`:

```tsx
import App from './src/App'

export default App
```

## Tips

- `Component.Responsive` switches variants automatically by breakpoint.
- Props use readable names derived from your Framer control titles (e.g.
  `label`, `newTab`); the hashed control ids are still accepted and win
  when both are passed. Types ship as `.d.ts` files and JSDoc typedefs.
- Pass `className` / `style` to override sizing (you may need `!important`
  to beat Framer's own width/height).
- Dark mode: add the `dark` class to any parent to flip color-style variables.
- Color styles are exported as CSS variables (`--framercode-*`, `--token-*`).
- Requires React 19. Disable React Strict Mode or scroll-driven (whileInView /
  useScroll) animations will not play; gesture animations still work.
- Remove your template's default CSS (`#root`/`body` margin, padding,
  max-width from Vite/CRA starters). It adds extra space around components.
- Do not edit the generated files under `src/framercode/` re-export instead.

See `AGENTS.md` for AI-assistant usage instructions.
