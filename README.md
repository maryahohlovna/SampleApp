# Stillness — Onboarding Flow

A five-screen mobile onboarding flow for "Stillness," a meditation app, implemented from a
Figma design (React + TypeScript + Vite, plain CSS Modules).

## Screens

1. **Welcome** — app intro with a "Get Started" CTA.
2. **Goals** — a 2x2 grid of multi-select cards for what brings the user to the app.
3. **Experience** — single-select cards for meditation familiarity.
4. **Time preference** — a horizontal pill carousel for how much time the user can spend.
5. **All set** — a completion screen that starts the app.

State (selected goals, experience level, session duration) lives in `App.tsx` and flows down
through each screen; back navigation and per-step validation (e.g. "Continue" is disabled
until a selection is made) are wired up.

Icons come from [lucide-react](https://lucide.dev) (the Figma layer names — `waves`,
`moon-star`, `flower`, `sprout`, `sparkles`, etc. — map 1:1 to Lucide icons). The welcome
screen's background and the zen-stones/serene-portal illustrations are recreated with CSS
gradients rather than exported image assets, since this environment's network policy blocks
direct fetches from figma.com.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # typecheck + production build
npm run lint      # oxlint
```
