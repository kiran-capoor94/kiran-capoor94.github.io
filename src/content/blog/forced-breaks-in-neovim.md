---
title: "I built a Neovim plugin that physically won't let me skip a break"
description: "The state machine behind Wand.nvim's forced Pomodoro breaks, and the real production bug an AI code review caught in it."
pubDate: 2026-07-06
tags: ["neovim", "wand.nvim", "tooling", "postmortem"]
---

I ignore break reminders. Every single one. A toast notification in the corner of my screen is not a match for "I'm 90% done with this refactor" — I've closed a thousand of them without reading a word. So when I built the Pomodoro system into Wand.nvim, my own Neovim distribution, I didn't build a reminder. I built something closer to a lock screen.

Here's how it actually escalates. When a work session ends, it fires a `vim.notify` and a system notification (`notify-send`) at the same time — the polite version, in case that's enough. If it's ignored for 30 seconds, it stops being polite. A prompt-buffer floating dialog appears with a phrase pulled at random from a table of twelve — mostly gamer-brainrot English pairs, a couple of them in Hinglish, because that's genuinely funnier to me at 11pm than "Break time!" would be. You don't dismiss this dialog. You have to *type the exact phrase* to proceed, and while it's up, `q`, the arrow keys, the scroll wheel, and mouse clicks are all rebound to nothing, in both normal and insert mode.

Confirm the break, and it gets more committed, not less. A full-screen floating window opens — `width = 1.0, height = 1.0`, no way to see your code behind it — running its own countdown timer. If you Alt-Tab or switch windows, a `WinEnter` autocmd yanks focus back. If you hit Escape trying to get out of it, an `InsertLeave` autocmd shoves you right back into insert mode. The only way out is typing "stop." I built a plugin whose entire job, for two minutes, is to be more stubborn than I am.

That's the fun part of the story. The more useful part is a bug that shipped inside this system and how it got caught.

The original break-overlay implementation, when handling large files, wrote them out using Neovim's async `vim.uv` file-write API directly. That's a completely reasonable thing to reach for — it's non-blocking, it's the modern API, why wouldn't you use it. Except it bypasses Neovim's normal buffer-write path, and doing that on a large file risked corrupting the undo history or the swap file. Not "might show a weird notification" risky. "Might eat your undo tree" risky.

It got caught during a full-repo review I ran with an AI reviewer (the commit is literally co-authored by "Claude Opus 4.6 (1M context)," which feels like the right way to credit that). The fix looks almost insultingly small:

```lua
-- before: async, but bypasses Neovim's normal write path
vim.uv.fs_write(fd, data, ...)

-- after: synchronous, hook-suppressing, still goes through
-- Neovim's own buffer-write machinery — undo/swap stay intact
vim.cmd("noautocmd silent w")
```

Same commit fixed a second, unrelated race condition — an LSP interaction that had been "fixed" earlier with `vim.defer_fn(100)`. A hundred-millisecond sleep and a prayer that the LSP would be ready by then. It got replaced with `vim.schedule`, which doesn't guess a delay at all — it just runs the callback on the next tick, correctly, every time. Both fixes have the same shape: replace "an API that happens to work most of the time" with "an API that's correct by construction." Neither one is a clever trick. They're both just refusing to leave a timing assumption lying around in the code where it could bite someone later — including me, a year from now, wondering why my undo history occasionally went missing on big files.

The forced-break dialog is the part of Wand.nvim people find funny when I show it to them. The `noautocmd silent w` fix is the part that actually matters. I think that's true of most tooling projects, honestly — the personality is what gets people to look, but the boring one-line fix for a data-integrity bug is the thing that makes it safe to actually use every day.
