---
title: "Getting Neovim under 100ms wasn't one trick"
description: "Wand.nvim's boot-time target comes from making lazy-loading the default everywhere, not from a single clever optimization."
pubDate: 2026-07-06
tags: ["neovim", "wand.nvim", "performance"]
project: "wand-nvim"
---

Every time boot speed comes up in a Neovim config, someone posts a single before/after number like it came from one change. Mine didn't. Wand.nvim targets under 100ms cold boot and under 100MB of memory on a normal setup, and getting there was mostly about refusing to load things, over and over, in every corner of the config, rather than one optimization I can point at. The header comment in `init.lua` has said the same thing since the first commit:

```lua
-- ============================================================================
-- wand_nvim - Main Entry Point
-- Performance-focused Neovim config for polyglot engineers
-- Boot target: <100ms | RAM target: <100MB
-- ============================================================================
```

The config sits on `lazy.nvim`, and the first real decision was setting `defaults.lazy = true` globally instead of leaving it eager by default and lazy-loading a few obviously heavy plugins by hand:

```lua
require("lazy").setup({
  spec = {
    { import = "plugins" },
    { import = "features" },
  },
  defaults = {
    lazy = true, -- Lazy load all plugins by default for performance
  },
  performance = {
    rtp = {
      disabled_plugins = {
        "gzip", "matchit", "matchparen", "netrwPlugin",
        "tarPlugin", "tohtml", "tutor", "zipPlugin",
      },
    },
  },
})
```

A lot of configs I've read do the opposite: pick the two or three plugins everyone knows are slow (usually something Treesitter-adjacent, or a big completion engine), defer just those, and leave everything else eager because it's "probably fine." That works until your plugin count creeps past forty and every one of those "probably fine" plugins is adding a few milliseconds you never notice individually.

Flipping the default meant every plugin needed an actual trigger to justify loading at all, and that's most of the file. This is what that looks like for the LSP setup:

```lua
{
  "folke/lazydev.nvim",
  ft = "lua", -- only wakes up when you open a .lua file
  opts = { ... },
},
{
  "williamboman/mason.nvim",
  cmd = "Mason", -- doesn't exist until you actually run :Mason
  keys = { { "<leader>cm", "<cmd>Mason<cr>", desc = "[C]ode [M]ason" } },
  build = ":MasonUpdate",
},
```

Telescope and Copilot follow the same `cmd`-gated pattern. Git integration waits for `VeryLazy`, which fires after startup finishes rendering but before you've actually typed anything, so it's ready by the time you'd want it without sitting on the critical path to get there.

The other half of it is the `disabled_plugins` list in the config above, and that's not deferring, it's turning things off completely. Neovim ships a handful of built-in runtime plugins nobody in this config uses, and they get sourced on every single startup whether or not you ever touch them. I don't remember the last time I opened a zip file inside Neovim.

There's no profiling harness in the repo, no flame graph, no benchmark script checked in. The numbers in the README are targets I hold myself to on a normal machine, not numbers I've proven in CI, and I'd rather say that plainly than imply otherwise. What actually gets you under a hundred milliseconds isn't a trick, it's treating "does this need to exist right now" as the default question for every plugin instead of an afterthought applied to the two you already suspected were slow. The same instinct shows up in [the forced-break system](/blog/forced-breaks-in-neovim/) I built into the same config, just aimed at a different problem: don't let something run by default when it doesn't have to.
