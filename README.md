# Stillpoint — Onboarding Flow

A four-screen mobile onboarding flow for "Stillpoint," a meditation app, implemented from a
Figma design (React + TypeScript + Vite, plain CSS Modules).

## Screens

1. **Welcome** — app intro with a "Get Started" CTA.
2. **Goal selection** — multi-select cards for what the user wants to focus on.
3. **Experience level** — single-select cards for meditation familiarity.
4. **Daily reminder** — time-slot picker and a notification toggle, ending in a summary screen.

State (selected goals, experience level, reminder time, notifications) lives in `App.tsx` and
flows down through each screen; back/close navigation and per-step validation (e.g. "Continue"
is disabled until a selection is made) are all wired up.

Icons come from [lucide-react](https://lucide.dev) (the Figma layer names — `wind`, `moon`,
`target`, `compass`, `heart`, `bell`, `flower`, etc. — map 1:1 to Lucide icons). The decorative
ambient-glow blobs and the meditation-portal hero graphic are recreated with CSS gradients rather
than exported image assets, since this environment's network policy blocks direct fetches from
figma.com.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # typecheck + production build
npm run lint      # oxlint
```
