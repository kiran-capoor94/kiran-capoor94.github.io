# Living Grid — Conway's Life background

**Date:** 2026-07-11
**Status:** Approved for planning
**Scope:** One signature creative moment for the portfolio. Single component, single implementation plan.

## Goal

Turn the site's existing static 42px background grid into a slow Conway's Game of
Life. It should read as "the terminal is quietly computing" — a detail engineers
notice and remember, subtle enough that a recruiter only registers a tasteful,
alive background. It must not compromise the clean/fast/credible baseline.

Audience decision (from brainstorming): **both, recruiter-safe creativity** —
one budgeted signature moment that never blocks content or tanks Lighthouse.

## Non-goals (YAGNI)

- No `life` terminal command, no pattern picker (glider gun / pulsar seeding).
- No on-screen controls (play/pause/reseed UI).
- No color theming options.
- No change to the existing grid line visuals, palette, boot sequence, or any
  other page content.

## Component

`src/components/LivingGrid.astro` — self-contained: one `<canvas>`, one inline
module `<script>`, scoped `<style>`. No dependencies. Target ~2–3 KB of script.
Included once in `src/layouts/BaseLayout.astro` so it renders site-wide, placed
early in `<body>` (before the boot overlay).

## Rendering & stacking (non-interference crux)

- Canvas: `position: fixed; inset: 0; z-index: -1; pointer-events: none;`
  `aria-hidden="true"`.
- `z-index: -1` paints the canvas **above** the body's static CSS grid lines but
  **below** all in-flow content. Live cells therefore sit on the lattice, behind
  text, and behind card/terminal surfaces (which have opaque backgrounds, so
  cells never bleed through content).
- `pointer-events: none` guarantees the canvas can never intercept a click or
  block a link. Interactivity is read from `window` listeners, not the canvas.
- Cells align to the same 42px grid with the same `-1px` origin as the body
  background so they land exactly on the lattice.
- Handle `devicePixelRatio` so cells stay crisp on HiDPI displays.

## Simulation

- Standard Conway rules (B3/S23) on a `Uint8Array` sized to the **visible
  viewport only**: `cols = ceil(vw/42)+1`, `rows = ceil(vh/42)+1`.
- Cadence: **~1 generation/second** (calm, not per-frame). A timing accumulator
  drives generations; drawing happens on generation change and on cursor blooms.
- Initial seed: sparse random (~8–12% density).
- **Anti-death:** if population drops below a small threshold or the board stops
  changing for K generations, inject a fresh sparse random patch so it never
  settles into a dead/static grid.
- Recompute the grid on resize (debounced ~150ms).

## Interactivity

- **Desktop / fine pointer only** (gated by `matchMedia('(pointer: fine)')`):
  - `mousemove` (throttled): light the cell under the cursor plus a small
    neighborhood ("bloom").
  - `click`: spawn a 5-cell glider at the cursor cell, oriented to drift away.
- Listeners are on `window`; clicking a link/button still works normally (the
  glider spawn is an additional, non-blocking side effect).

## Accessibility & performance guardrails

- `prefers-reduced-motion: reduce` → render **one static seeded frame**; no
  evolution, no cursor reaction, no timers.
- Coarse pointer (touch/mobile) → **ambient only** (auto-evolves, no cursor
  reactivity) so it never fights scrolling and saves battery.
- Pause all work on `document.visibilitychange` when the tab is hidden.
- Decorative: `aria-hidden="true"`, not focusable, no semantic content.
- Cell color: dim green (~8–12% alpha over `--color-bg`). Because the canvas sits
  behind opaque text glyphs, and cells over the bare body background stay very
  low alpha, body-text contrast must remain ≥ WCAG AA — verify during
  implementation.
- Cost budget: one canvas, rAF gated to visibility + generation interval,
  viewport-only simulation. No measurable Lighthouse regression.

## Defaults chosen (approved)

- Reach: **site-wide** (it's the background).
- Cadence: **~1 generation/second**.
- Cell color: **dim green**.
- Interactivity: **cursor-reactive** on desktop, ambient on touch.

## Verification

- `npm run build` (`astro check`) passes: 0 errors, 0 warnings.
- Browser pass (owner-run, since the dev sandbox has no browser):
  - grid visibly evolves at a calm pace;
  - moving the mouse blooms cells; clicking spawns a drifting glider;
  - links/buttons remain clickable "through" the canvas;
  - `prefers-reduced-motion` shows a static frame, no motion;
  - hidden tab pauses simulation (no CPU churn);
  - mobile shows ambient evolution, no scroll interference;
  - body text over the bare background still passes AA contrast.
