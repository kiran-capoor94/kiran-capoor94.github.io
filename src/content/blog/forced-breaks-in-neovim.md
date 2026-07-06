---
title: "I built a Neovim plugin that physically won't let me skip a break"
description: "The forced-break Pomodoro system in Wand.nvim, and an undo-corrupting file write an AI code review caught inside it."
pubDate: 2026-07-06
tags: ["neovim", "wand.nvim", "tooling", "postmortem"]
---

I don't read break reminders. A toast in the corner of my screen loses every time to "I'm 90% done with this refactor," and I've dismissed hundreds of them without absorbing a single word. So the Pomodoro system in Wand.nvim, my Neovim distribution, isn't a reminder. It behaves more like a lock screen.

When a work session ends, it fires a `vim.notify` and a system notification at the same time, which is the polite phase, in case that's actually enough for once. If it gets ignored for 30 seconds it stops being polite. A floating dialog shows up with a phrase pulled at random from a table of twelve, mostly ridiculous gamer-brainrot English lines, a couple of them in Hinglish because that's what's actually funny to me at 11pm and not "Break time!" You can't dismiss it. You have to type the exact phrase back, and while the dialog is open, q, the arrow keys, the scroll wheel, and mouse clicks all get rebound to nothing in both normal and insert mode.

Confirm the break and it doesn't let up, it commits harder. A full-screen floating window takes over the whole editor and runs its own countdown. Switch windows and a `WinEnter` autocommand yanks focus straight back. Hit Escape trying to bail and an `InsertLeave` autocommand shoves you back into insert mode. The only way out is typing "stop." For two minutes, the entire job of this plugin is to be more stubborn than I am, and so far it's winning.

That part's fun to demo. The part worth actually writing about is a bug that lived inside it for a while.

The original overlay, when it had to write a large file, used Neovim's async `vim.uv` file-write API directly. Reasonable choice on its face, it's non-blocking, it's the newer API, nothing about reaching for it looks wrong. Except it skips Neovim's normal buffer-write path, and doing that on a large file can leave the undo history or the swap file in a bad state. Not a cosmetic bug. The kind of bug where you don't notice until the day your undo tree is just gone.

It got caught during a full repo review I ran with an AI reviewer, and the commit is genuinely co-authored by "Claude Opus 4.6 (1M context)" because that felt like the honest way to credit it. The fix is almost annoyingly small:

```lua
-- before: async, but skips Neovim's normal write path
vim.uv.fs_write(fd, data, ...)

-- after: synchronous, suppresses autocmds, still goes through
-- Neovim's own buffer-write machinery, undo and swap stay intact
vim.cmd("noautocmd silent w")
```

Same pass turned up a second, unrelated problem: an LSP race that an earlier commit had "solved" with `vim.defer_fn(100)`, a hundred-millisecond sleep and a hope that the language server would be ready by then. That got replaced with `vim.schedule`, which doesn't guess at timing at all, it just runs on the next tick once Neovim's actually free. Neither fix is clever. They're both just refusing to leave a guess sitting in the code where it could quietly fail later, on someone else's machine, or mine, a year from now.

People laugh at the forced-break dialog when I show it to them. Nobody ever asks about the write path. But the dialog is the part that gets someone to try the plugin, and the boring one-line fix is the part that makes it something I still trust enough to run every day.
