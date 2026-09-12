# Student Helper — New Site

Clean rebuild of the Student Helper public website.

## Current state

The repository currently contains only the first viewport from the supplied design reference: header, hero copy, temporary CSS hero visual, estimate form and stats strip. Final SVG/icon assets are not connected yet.

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run lint
```

## Project map

```text
src/
  app/
    App.jsx
  components/
    Header.jsx
    Hero.jsx
    StatsBar.jsx
  styles/
    tokens.css
    global.css
    home.css
  assets/
    README.md
docs/
  FIRST_SCREEN.md
AGENTS.md
```

Before making changes, read `AGENTS.md` and the relevant note in `docs/`.
