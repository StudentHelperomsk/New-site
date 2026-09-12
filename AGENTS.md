# AGENTS.md

## Project goal

This repository is the clean rebuild of the Student Helper public website.
The visual reference is supplied by the owner. Work iteratively and preserve a clean, easy-to-navigate codebase.

## Current milestone

Only the first viewport / hero screen is in scope right now.
Do not start building the sections below the first screen unless explicitly requested.

The desktop first screen should:
- visually follow the supplied reference: light background, black/green typography, compact header, large left hero copy, central visual zone, estimate form on the right, stats strip at the bottom;
- fit into one viewport on normal desktop/laptop screens without vertical scrolling;
- remain usable responsively; below 980px vertical scrolling is allowed;
- avoid hard dependency on final SVG assets until the owner provides them.

## Source structure

- `src/app/App.jsx` — top-level page composition only.
- `src/components/` — reusable page pieces. Keep components small and semantic.
- `src/styles/tokens.css` — colors, radii, container widths, reusable design constants.
- `src/styles/global.css` — reset and truly global primitives only.
- `src/styles/home.css` — current first-screen layout and component styling.
- `src/assets/` — future local visual assets. SVGs supplied by the owner should live here, grouped by purpose.
- `docs/` — implementation notes and visual decisions that future agents need.

## Editing rules

1. Read this file before changing the project.
2. Prefer editing an existing component/style file over creating a duplicate variant.
3. Do not introduce a UI framework or component library unless explicitly requested.
4. Do not replace the hand-tuned hero layout with generic template sections.
5. Keep text content separate from visual asset implementation where practical.
6. When final SVG icons arrive, replace CSS placeholders with the supplied assets without redesigning the layout around them.
7. Keep desktop `body` non-scrollable while this milestone is only one viewport. If a later section is added, remove that restriction as part of the same change.
8. Do not add animations merely for decoration. Motion should be subtle and intentional.
9. Use CSS variables from `tokens.css` rather than scattering new brand colors through component styles.
10. After structural changes, verify at least `npm run build` and `npm run lint`.

## Visual priorities

When trade-offs are necessary, preserve these in order:
1. overall composition and whitespace;
2. headline size/line breaks and form placement;
3. header density;
4. stats strip position at the bottom of the viewport;
5. decorative details.

## Pending assets

Final logo/brand SVGs and hero/service icons are intentionally not wired yet. Temporary CSS geometry is acceptable only as a layout placeholder and should be easy to remove once source assets arrive.
