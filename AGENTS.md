# Student Helper

## Scope
The home page includes the approved hero, statistics, services and prices, work examples, process and assurances, reviews, FAQ, contact CTA and footer.
On desktop, the header and hero occupy at least one browser viewport. Statistics begin below that first viewport. Use CSS viewport units rather than physical display resolution.
The owner authorized continuing the landing page with content from studenthelper.ru. Preserve the approved hero and the white, green and black visual direction. Additional routes and backend integration remain separate work.

## Structure
- `src/app/App.jsx`: page composition.
- `src/components/`: small semantic components; form state stays in EstimateForm.
- `src/components/landing/`: below-the-fold sections and the shared section heading.
- The task description is lifted into App so choosing a service can prefill an empty draft without overwriting user input.
- `src/content/home.js`: navigation, benefits, statistics.
- `src/styles/tokens.css`: shared design tokens.
- `src/styles/global.css`: fonts, reset, accessible shared controls.
- `src/styles/home.css`: first-screen layout and responsive styles.
- `src/styles/landing.css`: new landing sections and their responsive styles.
- `src/content/landing.js`: service prices, work examples, reviews, FAQ and manager URL.
- `src/content/support.js`: three support chapters and optional replacement artwork paths.
- `src/components/landing/SupportArtwork.jsx` and `src/styles/support.css`: the illustrated support story; replacement guidelines are in `docs/SUPPORT_ARTWORK.md`.
- `public/assets/`: production artwork and self-hosted fonts.
- `docs/FIRST_SCREEN.md`: implementation decisions and integration status.
- `docs/CONTENT_SOURCES.md`: imported content sources and unresolved integrations.

## Working rules
- Put screenshots, scripts, source archives and all disposable work in `operation/` (gitignored).
- Keep production files outside operation. Never commit credentials, .env files, node_modules or build output.
- Use the existing React/Vite stack. Do not add a UI framework without a concrete need.
- Keep the first screen comfortable at 1440×900 and 1366×768; allow natural scrolling on small screens and at text enlargement. Never hide overflow to conceal clipped content.
- Preserve keyboard navigation, visible focus, labels, native validation and reduced-motion behavior.
- Personal-data consent is required and unchecked by default. The owner will supply the consent document later; do not invent its contents or a placeholder link.
- Do not invent contact information or make the form claim an application was sent before a real service is connected.
- Navigation links must target existing sections. Work previews use a native dialog with Escape/focus handling and link to real PDFs on the source site.
- Run `npm run lint` and `npm run build` after source changes. Check desktop and mobile layout and affected interactions.
- Keep the lockfile committed and use `npm ci` for reproducible installation.

## Assets
SVGs come from the owner. Some contain embedded raster artwork: do not assume they are pure vectors. The coursework SVG viewBox was tightened to remove transparent export margins; the artwork is preserved.
