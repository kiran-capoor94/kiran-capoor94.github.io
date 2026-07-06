---
title: "Getting Neovim under 100ms wasn't one trick"
description: "Wand.nvim's boot-time target comes from making lazy-loading the default everywhere, not from a single clever optimization."
pubDate: 2026-07-06
tags: ["neovim", "wand.nvim", "performance"]
---

Every time boot speed comes up in a Neovim config, someone posts a single before/after number like it came from one change. Mine didn't. Wand.nvim targets under 100ms cold boot and under 100MB of memory on a normal setup, and getting there was mostly about refusing to load things, over and over, in every corner of the config, rather than one optimization I can point at.

The config sits on `lazy.nvim`, and the first real decision was setting `defaults = { lazy = true }` globally instead of leaving it as the default-eager behavior and lazy-loading a few obviously heavy plugins by hand. A lot of configs I've read do the second thing: pick the two or three plugins everyone knows are slow (usually something Treesitter-adjacent, or a big completion engine) and defer just those, while everything else loads on startup because it's "probably fine." That approach works until your plugin count creeps past forty and every one of those "probably fine" plugins is adding a few milliseconds you never notice individually.

Flipping the default meant every plugin needed an actual trigger to justify loading at all, and that's most of the file. LSP servers and Mason load on `LspAttach` or on the relevant filetype, so `lua_ls` only wakes up once you open a `.lua` file. Telescope, Mason's UI, and Copilot are gated behind their command names, they don't exist until you actually run `:Telescope` or `:Mason`. Git integration waits for `VeryLazy`, which fires after startup finishes rendering but before you've actually done anything, so it's ready by the time you'd want it without being on the critical path to get there.

The other half of it is what I turned off, not what I deferred. Neovim ships a handful of built-in runtime plugins nobody in this config uses (`gzip`, `matchit`, `netrwPlugin`, `tarPlugin`, `tohtml`, `tutor`, `zipPlugin` among them), and they're explicitly disabled in `performance.rtp.disabled_plugins`. None of them are individually expensive. All of them get sourced on every single startup if you don't say otherwise, whether or not you ever open a zip file inside Neovim, and I don't remember the last time I did.

None of this is clever. There's no profiling harness in the repo, no flame graph, no benchmark script checked in, the 100ms and 100MB numbers in the README are targets I hold myself to on a normal machine, not numbers I've proven in CI. What actually gets you under a hundred milliseconds isn't a trick, it's treating "does this need to exist right now" as the default question for every single plugin instead of an afterthought you apply to the two you already suspected were slow. The boring version of that discipline, applied everywhere, beat every clever optimization I tried instead of it.
