# Student Helper

## Scope
The home page includes the approved hero, statistics, services and prices, work examples, process and assurances, reviews, FAQ, contact CTA and footer.
On desktop, the header and hero occupy at least one browser viewport. Statistics begin below that first viewport. Use CSS viewport units rather than physical display resolution.
The owner authorized continuing the landing page, the shared estimate dialog, animated artwork, and migration of all pages from studenthelper.ru. Preserve the approved homepage and white, green and black visual direction. Server-side order submission remains separate work.

## Structure
- `src/app/App.jsx`: page composition.
- `src/pages/` and `src/components/pages/`: internal page layouts, reading components and work preview dialog.
- `src/content/site.json`: imported page content, catalog, PDF library, guides and legal documents. Keep legal text intact unless the owner explicitly requests edits.
- `src/content/site.js`: route resolution and shared content access. Use ordinary links so browser history, deep links and static hosting work naturally.
- `src/styles/pages.css`: internal page layouts and responsive rules; keep changes scoped away from the approved hero.
- `src/entry-server.jsx` and `scripts/build.mjs`: prerender all 25 URLs and 404 into static HTML, with per-page metadata and sitemap.
- `src/components/`: small semantic components; form state stays in EstimateForm.
- `src/components/EstimateDialog.jsx`: shared native order dialog; opening must preserve the page position, closing must preserve the draft and return focus to the trigger.
- `src/components/landing/`: below-the-fold sections and the shared section heading.
- The task description is lifted into App so choosing a service can prefill an empty draft without overwriting user input.
- `src/content/home.js`: navigation, benefits, statistics.
- `src/styles/tokens.css`: shared design tokens.
- `src/styles/global.css`: fonts, reset, accessible shared controls.
- `src/styles/home.css`: header, form controls and statistics.
- `src/styles/hero.css`: first-screen layout, floating artwork and responsive styles.
- `src/styles/estimate-dialog.css`: order dialog and backdrop.
- `src/hooks/useScrollReveal.js` and `src/styles/reveal.css`: once-only entrances for statistics, support chapters and service/example headings. Use explicit `data-reveal` targets; never transform sticky containers or hide initially visible content.
- `src/styles/landing.css`: new landing sections and their responsive styles.
- `src/styles/mobile.css`: phone-specific compositions (up to 600px), imported last. Keep desktop styling in the existing section files. Mobile uses compact hero artwork, manually switched stages, horizontal service choices and portfolio, collapsible footer groups and an order bottom sheet.
- `src/components/MobileOrderBar.jsx`: the mobile order shortcut. It appears after the hero and hides around existing order controls, the footer and open dialogs; respect safe-area insets and keyboard focus.
- `src/content/landing.js`: service prices, work examples, reviews, FAQ and manager URL.
- `src/styles/reviews.css` and `src/content/reviewBackdrop.js`: fixed review collage, with smaller original messages behind the main reviews and clear space around the heading. The shared reveal hook adds a gentle, once-only entrance; no parallax, ongoing movement or opening reviews on click. Keep reveal wrappers inside the rotated figures so their resting angles are preserved.
- `src/content/support.js`: three support chapters and optional replacement artwork paths.
- `src/components/landing/SupportArtwork.jsx` and `src/styles/support.css`: the illustrated support story; replacement guidelines are in `docs/SUPPORT_ARTWORK.md`.
- `public/assets/`: production artwork and self-hosted fonts.
- `docs/FIRST_SCREEN.md`: implementation decisions and integration status.
- `docs/CONTENT_SOURCES.md`: imported content sources and unresolved integrations.

## Working rules
- Match the original studenthelper.ru voice: direct descriptions of work, requirements, price, deadlines and revisions. Prefer the owner's source wording over new slogans. Avoid abstract emotional copy such as "Спросить — это нормально", "За каждой работой — чья-то задача", "Мы рядом" or "Немного ясности". Warmth should come from concrete service commitments, not metaphors or motivational phrases.
- Put screenshots, scripts, source archives and all disposable work in `operation/` (gitignored).
- Keep `operation/` excluded from Vite's file watcher: diagnostics may hold files open on Windows. For a requested same-network phone preview, use `npm run dev:lan`; the default dev command stays on localhost.
- Keep production files outside operation. Never commit credentials, .env files, node_modules or build output.
- GitHub Pages publishes built `dist` through `.github/workflows/pages.yml` on main pushes. `SITE_BASE_PATH` configures project hosting; use `src/lib/siteUrl.js` for internal links, asset paths and imported HTML. Root-domain and local builds default to `/`.
- Use the existing React/Vite stack. Do not add a UI framework without a concrete need.
- Keep the first screen comfortable at 1440×900 and 1366×768; allow natural scrolling on small screens and at text enlargement. Never hide overflow to conceal clipped content.
- Preserve keyboard navigation, visible focus, labels, native validation and reduced-motion behavior.
- Hero motion pauses offscreen, when the tab is hidden and while a dialog is open. Cursor movement only affects fine pointers and respects reduced-motion preferences.
- Personal-data consent is required and unchecked by default. It links to the existing imported consent and privacy documents; do not invent their contents.
- Do not invent contact information or make the form claim an application was sent before a real service is connected.
- Owner-confirmed payment terms: the usual advance payment is 25%, with the balance payable only after the client has reviewed and checked the completed work. Agree the advance and any stages before starting; do not present 25% as an unconditional rule or equate the client's check with acceptance by the instructor.
- Before final payment, the client reviews a protected PDF with a watermark and requests corrections to the agreed assignment. After review, approval and final payment, deliver the unwatermarked work and all source files. Work can be shared in parts by agreement. The manager stays in contact and the community bot provides automatic progress updates; do not invent a bot URL. Support and unlimited revisions to the original assignment continue until full submission.
- Navigation links must target existing routes or sections. Work previews use a native dialog with Escape/focus handling and link to real local PDFs in `public/assets/examples/pdf/`.
- Preserve all source URLs listed in `src/content/site.json`. Payment links retain the `payment` query parameter. Never test with a real payment or invent banking details; the page uses the original backend and bank SDK.
- Run `npm run lint` and `npm run build` after source changes. Check desktop and mobile layout and affected interactions.
- Keep the lockfile committed and use `npm ci` for reproducible installation.

## Assets
SVGs come from the owner. Some contain embedded raster artwork: do not assume they are pure vectors. The coursework SVG viewBox was tightened to remove transparent export margins; the artwork is preserved.
