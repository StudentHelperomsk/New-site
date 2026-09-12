# First screen implementation note

## Reference interpretation

The current desktop composition mirrors the supplied reference rather than the old Student Helper site:

- compact white header with wordmark on the left, centered navigation and CTA on the right;
- large two-line headline on the left with green emphasis on `студентам`;
- supporting copy, three compact trust points and two actions;
- visual focus in the center;
- white estimate card on the right;
- four-column stats strip anchored to the bottom of the viewport.

## Asset strategy for this iteration

The owner will provide the actual SVG/icon pack later. For now:

- no external icon library is used;
- the brand mark and central hero illustration are deliberately simple CSS placeholders;
- stats icons are geometric placeholders;
- all placeholder visuals are isolated in CSS so they can be swapped without disturbing layout.

## Viewport behavior

At desktop widths above 980px, the page is intentionally a single viewport with no vertical scroll. The hero compresses slightly for short desktop screens.

At tablet/mobile widths, the content becomes a normal vertical flow and scrolling is enabled. This prevents the one-screen constraint from making the form unusable on small devices.

## Next pass after SVG delivery

1. Add supplied SVGs to `src/assets/brand`, `src/assets/hero`, and `src/assets/icons`.
2. Replace temporary CSS brand/hero/stat geometry component-by-component.
3. Re-tune exact dimensions/offsets against the reference at the target desktop resolution.
4. Only after the first screen is approved, start the sections below it.
