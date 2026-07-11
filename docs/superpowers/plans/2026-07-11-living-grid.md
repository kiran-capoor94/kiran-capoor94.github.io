# Living Grid Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the site's static 42px background grid into a slow, cursor-reactive Conway's Game of Life that reads as "the terminal is quietly computing."

**Architecture:** A pure, DOM-free Life simulation core (`src/lib/life.mjs`, unit-tested with Node's built-in test runner) is consumed by a self-contained Astro component (`src/components/LivingGrid.astro`) that owns the canvas, render loop, seeding, and interaction. The component mounts once in `BaseLayout.astro` as a fixed, `z-index:-1`, `pointer-events:none` backdrop.

**Tech Stack:** Astro (static), vanilla Canvas 2D, Node 24 `node:test` (no new dependencies).

## Global Constraints

- Node engine floor: `>=22.12.0` (from `package.json`); build/test run with `~/.nvm/versions/node/v24.18.0/bin` on `PATH`.
- **No new npm dependencies.** Tests use the built-in `node:test` runner.
- Verification build: `npm run build` (runs `astro check && astro build`) must end with **0 errors, 0 warnings**.
- No browser exists in the dev sandbox — runtime/visual checks are an owner-run browser pass, listed explicitly per task.
- Commits carry **no attribution** trailer (repo/global setting already enforces this).
- Recruiter-safe guardrails are requirements, not nice-to-haves: canvas is `pointer-events:none` and `z-index:-1` (never blocks content); `prefers-reduced-motion` → single static frame, no timers; coarse pointer → ambient only; pause on hidden tab; `aria-hidden="true"`.
- Cell color is `--color-green` (`rgb(158,206,106)`) at low alpha (~0.10); body text over the bare background must retain WCAG AA contrast.
- Grid geometry must match the existing CSS background exactly: `CELL = 42`, origin offset `-1px`.

---

## File Structure

- **Create** `src/lib/life.mjs` — pure Life core: grid creation, seeding, one-generation step (B3/S23), population count, glider stamp, bloom. No DOM. The single source of simulation truth, importable by both the component and the tests.
- **Create** `test/life.test.mjs` — `node:test` unit tests for `life.mjs`.
- **Create** `src/components/LivingGrid.astro` — canvas element + client module script (imports the core; owns resize/DPR, render, generation loop, anti-death reseed, reduced-motion/visibility/coarse-pointer gating, and cursor/click interactivity) + scoped style.
- **Modify** `src/layouts/BaseLayout.astro` — import and mount `<LivingGrid />` once, first inside `<body>`.
- **Modify** `package.json` — add a `test` script.

---

### Task 1: Life simulation core (pure, TDD)

**Files:**
- Create: `src/lib/life.mjs`
- Test: `test/life.test.mjs`
- Modify: `package.json` (add `test` script)

**Interfaces:**
- Consumes: nothing.
- Produces (all imported by Task 2):
  - `createGrid(cols: number, rows: number) -> { cols, rows, cells: Uint8Array }` (all dead)
  - `get(grid, col, row) -> 0|1` (out-of-bounds → 0)
  - `set(grid, col, row, value) -> void` (out-of-bounds → no-op)
  - `population(grid) -> number`
  - `seedRandom(grid, density: number, rand=() => number) -> void`
  - `step(grid) -> grid` (new grid, same dims, one B3/S23 generation, bounded edges)
  - `insertGlider(grid, col, row) -> void` (stamps a 5-cell SE glider, top-left anchored)
  - `bloom(grid, col, row, radius=1) -> void` (sets a square of live cells)

- [ ] **Step 1: Add the `test` script to `package.json`**

In `package.json`, add to `"scripts"` (after `"refresh-data"`):

```json
    "test": "node --test test/*.test.mjs",
```

- [ ] **Step 2: Write the failing tests**

Create `test/life.test.mjs`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  createGrid, get, set, population, seedRandom, step, insertGlider, bloom,
} from '../src/lib/life.mjs';

test('lone live cell dies (underpopulation)', () => {
  const g = createGrid(3, 3);
  set(g, 1, 1, 1);
  assert.equal(get(step(g), 1, 1), 0);
});

test('2x2 block is a still life', () => {
  const g = createGrid(4, 4);
  for (const [c, r] of [[1, 1], [2, 1], [1, 2], [2, 2]]) set(g, c, r, 1);
  const n = step(g);
  assert.equal(population(n), 4);
  for (const [c, r] of [[1, 1], [2, 1], [1, 2], [2, 2]]) assert.equal(get(n, c, r), 1);
});

test('blinker oscillates horizontal -> vertical', () => {
  const g = createGrid(5, 5);
  for (const c of [1, 2, 3]) set(g, c, 2, 1); // horizontal bar
  const n = step(g);
  for (const r of [1, 2, 3]) assert.equal(get(n, 2, r), 1); // vertical bar
  assert.equal(get(n, 1, 2), 0);
  assert.equal(get(n, 3, 2), 0);
});

test('dead cell with exactly 3 neighbors is born', () => {
  const g = createGrid(3, 3);
  for (const [c, r] of [[0, 0], [1, 0], [0, 1]]) set(g, c, r, 1);
  assert.equal(get(step(g), 1, 1), 1);
});

test('population counts live cells', () => {
  const g = createGrid(3, 3);
  set(g, 0, 0, 1);
  set(g, 2, 2, 1);
  assert.equal(population(g), 2);
});

test('seedRandom fills all when rand always below density', () => {
  const g = createGrid(4, 4);
  seedRandom(g, 0.5, () => 0);
  assert.equal(population(g), 16);
});

test('seedRandom fills none when rand always at/above density', () => {
  const g = createGrid(4, 4);
  seedRandom(g, 0.5, () => 0.99);
  assert.equal(population(g), 0);
});

test('insertGlider stamps exactly 5 cells', () => {
  const g = createGrid(6, 6);
  insertGlider(g, 1, 1);
  assert.equal(population(g), 5);
});

test('bloom sets a 3x3 square with radius 1', () => {
  const g = createGrid(5, 5);
  bloom(g, 2, 2, 1);
  assert.equal(population(g), 9);
});

test('out-of-bounds set is a no-op (does not throw)', () => {
  const g = createGrid(3, 3);
  set(g, 10, 10, 1);
  set(g, -5, -5, 1);
  assert.equal(population(g), 0);
});
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH" && npm test`
Expected: FAIL — `Cannot find module '../src/lib/life.mjs'`.

- [ ] **Step 4: Write the implementation**

Create `src/lib/life.mjs`:

```js
// Pure Conway's Game of Life core — no DOM. Bounded grid (out-of-bounds = dead).

export function createGrid(cols, rows) {
  return { cols, rows, cells: new Uint8Array(cols * rows) };
}

export function get(grid, col, row) {
  if (col < 0 || row < 0 || col >= grid.cols || row >= grid.rows) return 0;
  return grid.cells[row * grid.cols + col];
}

export function set(grid, col, row, value) {
  if (col < 0 || row < 0 || col >= grid.cols || row >= grid.rows) return;
  grid.cells[row * grid.cols + col] = value ? 1 : 0;
}

export function population(grid) {
  let n = 0;
  for (let i = 0; i < grid.cells.length; i++) n += grid.cells[i];
  return n;
}

export function seedRandom(grid, density, rand = Math.random) {
  for (let i = 0; i < grid.cells.length; i++) {
    grid.cells[i] = rand() < density ? 1 : 0;
  }
}

function liveNeighbors(grid, col, row) {
  let n = 0;
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dc === 0 && dr === 0) continue;
      n += get(grid, col + dc, row + dr);
    }
  }
  return n;
}

export function step(grid) {
  const next = createGrid(grid.cols, grid.rows);
  for (let row = 0; row < grid.rows; row++) {
    for (let col = 0; col < grid.cols; col++) {
      const alive = grid.cells[row * grid.cols + col];
      const n = liveNeighbors(grid, col, row);
      next.cells[row * grid.cols + col] = n === 3 || (alive && n === 2) ? 1 : 0;
    }
  }
  return next;
}

// SE-moving glider, top-left anchored at (col, row)
const GLIDER = [[1, 0], [2, 1], [0, 2], [1, 2], [2, 2]];
export function insertGlider(grid, col, row) {
  for (const [dc, dr] of GLIDER) set(grid, col + dc, row + dr, 1);
}

// set a square of live cells centered on (col, row)
export function bloom(grid, col, row, radius = 1) {
  for (let dr = -radius; dr <= radius; dr++) {
    for (let dc = -radius; dc <= radius; dc++) {
      set(grid, col + dc, row + dr, 1);
    }
  }
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH" && npm test`
Expected: PASS — all 10 tests pass (`# pass 10`, `# fail 0`).

- [ ] **Step 6: Commit**

```bash
git add src/lib/life.mjs test/life.test.mjs package.json
git commit -m "Add pure Conway's Life core with unit tests"
```

---

### Task 2: LivingGrid component — ambient evolution + guardrails, mounted

**Files:**
- Create: `src/components/LivingGrid.astro`
- Modify: `src/layouts/BaseLayout.astro`

**Interfaces:**
- Consumes: `createGrid`, `seedRandom`, `step`, `population` from `../lib/life.mjs` (Task 1). `bloom` and `insertGlider` are imported here but only used in Task 3.
- Produces: a `<LivingGrid />` component with no props.

- [ ] **Step 1: Create the component**

Create `src/components/LivingGrid.astro`:

```astro
---
// Conway's Life on the site's background grid. Decorative; see
// docs/superpowers/specs/2026-07-11-living-grid-design.md
---

<canvas id="living-grid" aria-hidden="true"></canvas>

<script>
  import { createGrid, seedRandom, step, population, bloom, insertGlider } from '../lib/life.mjs';

  const CELL = 42; // matches the CSS background grid
  const ORIGIN = -1; // matches background-position: -1px -1px
  const GEN_MS = 1000; // ~1 generation / second
  const SEED_DENSITY = 0.1;
  const CELL_STYLE = 'rgba(158, 206, 106, 0.1)'; // --color-green, low alpha

  const el = document.getElementById('living-grid');
  const ctx = el instanceof HTMLCanvasElement ? el.getContext('2d') : null;

  if (el instanceof HTMLCanvasElement && ctx) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cols = 1;
    let rows = 1;
    let grid = createGrid(cols, rows);
    let lastGen = 0;
    let prevPop = 0;
    let stagnant = 0;
    let rafId = 0;
    let running = false;

    function debounce(fn, ms) {
      let id;
      return (...args) => {
        clearTimeout(id);
        id = setTimeout(() => fn(...args), ms);
      };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      el.width = Math.floor(w * dpr);
      el.height = Math.floor(h * dpr);
      el.style.width = w + 'px';
      el.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL) + 1;
      rows = Math.ceil(h / CELL) + 1;
      grid = createGrid(cols, rows);
      seedRandom(grid, SEED_DENSITY);
      prevPop = population(grid);
      stagnant = 0;
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, el.width, el.height);
      ctx.fillStyle = CELL_STYLE;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (grid.cells[row * cols + col]) {
            ctx.fillRect(ORIGIN + col * CELL + 1, ORIGIN + row * CELL + 1, CELL - 2, CELL - 2);
          }
        }
      }
    }

    function generation() {
      grid = step(grid);
      const pop = population(grid);
      if (pop < cols * rows * 0.02 || pop === prevPop) stagnant++;
      else stagnant = 0;
      if (pop === 0 || stagnant > 8) {
        seedRandom(grid, SEED_DENSITY);
        stagnant = 0;
      }
      prevPop = pop;
      draw();
    }

    function loop(t) {
      if (!running) return;
      if (t - lastGen >= GEN_MS) {
        lastGen = t;
        generation();
      }
      rafId = requestAnimationFrame(loop);
    }

    function start() {
      if (running || reduceMotion) return;
      running = true;
      lastGen = performance.now();
      rafId = requestAnimationFrame(loop);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    window.addEventListener('resize', debounce(resize, 150));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stop();
      else start();
    });

    resize(); // seeds + draws one frame (this is the whole show under reduced-motion)
    start(); // no-op when reduce-motion is on
  }
</script>

<style>
  #living-grid {
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }
</style>
```

Note: `bloom` and `insertGlider` are imported now (Task 3 uses them). This produces an unused-import that `astro check` tolerates for local module imports; if it warns, Task 3 immediately consumes them.

- [ ] **Step 2: Mount it in the layout**

In `src/layouts/BaseLayout.astro`, add the import next to the existing component import:

```astro
import CommandPalette from '../components/CommandPalette.astro';
import LivingGrid from '../components/LivingGrid.astro';
```

Then place it as the first element inside `<body>` (before the skip link):

```astro
  <body>
    <LivingGrid />
    <a href="#main" class="skip-link">skip to content</a>
```

- [ ] **Step 3: Build to verify it compiles and mounts**

Run: `export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH" && npm run build`
Expected: `astro check` → 0 errors, 0 warnings; build completes; all pages built.

- [ ] **Step 4: Confirm the canvas ships and sits behind content**

Run: `grep -o 'id="living-grid"[^>]*' dist/index.html`
Expected: prints `id="living-grid" aria-hidden="true" ...`.

Run: `grep -oE '#living-grid[^{]*\{[^}]*\}' dist/_astro/*.css | head -1`
Expected: shows `position:fixed`, `z-index:-1`, `pointer-events:none`.

- [ ] **Step 5: Commit**

```bash
git add src/components/LivingGrid.astro src/layouts/BaseLayout.astro
git commit -m "Add Living Grid background (ambient Conway's Life)"
```

- [ ] **Step 6: Owner browser pass (manual — cannot run in sandbox)**

On `npm run dev`, confirm: cells evolve ~1/sec; the board never dies to a permanent blank (anti-death reseeds); links/buttons everywhere remain clickable "through" the canvas; with OS "reduce motion" on, a single static frame shows and never animates; switching browser tabs away pauses it (no CPU churn on return spike); body text over the bare background still looks full-contrast.

---

### Task 3: Cursor interactivity (desktop bloom + click glider)

**Files:**
- Modify: `src/components/LivingGrid.astro`

**Interfaces:**
- Consumes: `bloom`, `insertGlider` (already imported in Task 2), plus module-scoped `grid`, `CELL`, `ORIGIN`, `draw`, `reduceMotion`.
- Produces: no new exports.

- [ ] **Step 1: Add the interactivity block**

In `src/components/LivingGrid.astro`, insert this block immediately **before** the final `resize();` line:

```js
    // interactivity: fine pointers (desktop) only, and only when motion is allowed
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (finePointer && !reduceMotion) {
      const cellAt = (clientX, clientY) => ({
        col: Math.floor((clientX - ORIGIN) / CELL),
        row: Math.floor((clientY - ORIGIN) / CELL),
      });
      let lastMove = 0;
      window.addEventListener(
        'mousemove',
        (e) => {
          const now = performance.now();
          if (now - lastMove < 60) return;
          lastMove = now;
          const { col, row } = cellAt(e.clientX, e.clientY);
          bloom(grid, col, row, 1);
          draw();
        },
        { passive: true }
      );
      window.addEventListener('click', (e) => {
        const { col, row } = cellAt(e.clientX, e.clientY);
        insertGlider(grid, col, row);
        draw();
      });
    }
```

- [ ] **Step 2: Build to verify it compiles**

Run: `export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH" && npm run build`
Expected: `astro check` → 0 errors, 0 warnings; build completes.

- [ ] **Step 3: Commit**

```bash
git add src/components/LivingGrid.astro
git commit -m "Add cursor bloom and click-to-spawn-glider to Living Grid"
```

- [ ] **Step 4: Owner browser pass (manual — cannot run in sandbox)**

Desktop: moving the mouse blooms a small patch of live cells that then evolve; clicking spawns a glider that drifts southeast; clicking a link still navigates (glider spawn is a harmless extra). Mobile / touch device: no cursor reaction, ambient evolution only, and scrolling is never interrupted. Reduce-motion on: no interactivity, static frame only.

- [ ] **Step 5: Push (owner-gated)**

After the owner's browser pass is satisfied:

```bash
git push origin master
```

---

## Self-Review

**1. Spec coverage:**
- Static grid → Life: Task 1 (rules) + Task 2 (render on the 42px lattice). ✓
- Component `src/components/LivingGrid.astro`, mounted once site-wide in BaseLayout: Task 2. ✓
- Stacking (`fixed`, `z-index:-1`, `pointer-events:none`, aligned to `-1px`/42px): Task 2 (style + `ORIGIN`/`CELL`) + Step 4 grep check. ✓
- Viewport-only sim, DPR, debounced resize: Task 2 `resize()`. ✓
- ~1 gen/sec cadence: Task 2 `GEN_MS`. ✓
- Sparse seed + anti-death reseed: Task 2 `seedRandom` + `generation()` stagnation logic. ✓
- Cursor bloom + click glider, fine-pointer only: Task 3. ✓
- reduced-motion → static frame (no timers): Task 2 (`start()` no-ops; `resize()` still draws once) + Task 3 gate. ✓
- Coarse pointer → ambient only: Task 3 `finePointer` gate. ✓
- Pause on hidden tab: Task 2 `visibilitychange`. ✓
- Decorative `aria-hidden`: Task 2 markup. ✓
- Cell color dim green, contrast preserved: Task 2 `CELL_STYLE`; verified in owner pass. ✓
- No new deps; `node:test`: Task 1. ✓
- Build 0/0: every task's build step. ✓

**2. Placeholder scan:** No TBD/TODO; all code blocks are complete and runnable. ✓

**3. Type consistency:** Core API names (`createGrid`, `get`, `set`, `population`, `seedRandom`, `step`, `insertGlider`, `bloom`) are identical across `life.mjs`, the tests, and the component's import and call sites. `CELL`/`ORIGIN` constants are defined once in the component and reused by the Task 3 block. ✓
