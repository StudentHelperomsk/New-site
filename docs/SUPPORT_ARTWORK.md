# Support story

The owner approved a calm illustration direction without people: a task being picked up, collaborative revisions and support through submission. Flat emerald (#00A56C), charcoal (#1D3027), mint and white replace the textured generated studies.

## Page and motion

The support story follows the first screen and statistics. On viewports at least 901px wide and 650px tall, the illustration stays sticky while the three chapters scroll naturally. The nearest chapter controls the artwork; the stage buttons also navigate between chapters. There is no scroll interception or automatic looping.

Smaller or shorter viewports show one chapter at a time with the same stage buttons. Reduced-motion preferences disable graphic transitions and smooth chapter navigation.

Services remain selectable and prefill only an empty estimate draft. Reviews use the original screenshots in a shared conversational composition. The approved hero, consent checkbox, PDF previews and contacts are preserved.

## Replacing the artwork

- Working vector scenes: `src/components/landing/SupportArtwork.jsx`.
- Chapter text and optional artwork URLs: `src/content/support.js`.
- Layout and motion: `src/styles/support.css`.

For final illustrations, save three transparent SVGs under `public/assets/support/` and set each chapter's `artwork` to its public path. Until a path is set, the corresponding vector study renders. The 600 × 500 viewBox is the composition reference; keep meaningful artwork inside the edges, use a transparent background and leave captions out of the image.

For animation within an illustration, keep the documents, messages, marks and backdrop as separately named SVG groups and integrate them into SupportArtwork. The URL replacement preserves transitions between complete scenes, but does not animate elements inside an external SVG.

No generated image or fabricated client conversation is presented as evidence. Review images remain the actual imported client feedback. Revisions are unlimited within the original assignment until submission; changed requirements are discussed individually and a wholly new task is priced separately.
