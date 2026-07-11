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
