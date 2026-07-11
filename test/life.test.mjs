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
  for (const c of [1, 2, 3]) set(g, c, 2, 1);
  const n = step(g);
  for (const r of [1, 2, 3]) assert.equal(get(n, 2, r), 1);
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
