# Student Helper

## Scope
Only the first screen is implemented: header, hero, estimate form, statistics.
Do not add lower sections or routes without the owner's request. Follow the supplied white, green and black reference and preserve the owner's artwork.

## Structure
- `src/app/App.jsx`: page composition.
- `src/components/`: small semantic components; form state stays in EstimateForm.
- `src/content/home.js`: navigation, benefits, statistics.
- `src/styles/tokens.css`: shared design tokens.
- `src/styles/global.css`: fonts, reset, accessible shared controls.
- `src/styles/home.css`: first-screen layout and responsive styles.
- `public/assets/`: production artwork and self-hosted fonts.
- `docs/FIRST_SCREEN.md`: implementation decisions and integration status.

## Working rules
- Put screenshots, scripts, source archives and all disposable work in `operation/` (gitignored).
- Keep production files outside operation. Never commit credentials, .env files, node_modules or build output.
- Use the existing React/Vite stack. Do not add a UI framework without a concrete need.
- Keep the first screen comfortable at 1440×900 and 1366×768; allow natural scrolling on small screens and at text enlargement. Never hide overflow to conceal clipped content.
- Preserve keyboard navigation, visible focus, labels, native validation and reduced-motion behavior.
- Do not invent contact information or make the form claim an application was sent before a real service is connected.
- Navigation labels are reserved for later sections; activate each only when its destination exists.
- Run `npm run lint` and `npm run build` after source changes. Check desktop and mobile layout and affected interactions.
- Keep the lockfile committed and use `npm ci` for reproducible installation.

## Assets
SVGs come from the owner. Some contain embedded raster artwork: do not assume they are pure vectors. The coursework SVG viewBox was tightened to remove transparent export margins; the artwork is preserved.
