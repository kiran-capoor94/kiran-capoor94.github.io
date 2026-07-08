# Terminal casts

`.cast` files here are [asciinema](https://asciinema.org) recordings embedded via
`src/components/TerminalCast.astro`. The player is vendored in `public/vendor/`,
so nothing loads from an external host.

## Record a new one

```bash
# install once:  yay -S asciinema   (or: pipx install asciinema)
asciinema rec public/casts/wand.cast --overwrite

# keep it short (10–30s), do one clear thing, then Ctrl-D to stop.
# trim idle pauses automatically at playback with the idleLimit prop.
```

## Show it on a project

Add a `cast` field to the project in `src/data/cv.ts`:

```ts
{ name: 'Wand.nvim', /* ... */ cast: '/casts/wand.cast' }
```

The Projects page renders `<TerminalCast>` automatically for any project that
has one.

## Good candidates

- **wand.cast** — `nvim` cold-booting in <100ms, then opening a file with LSP live
- **ritual.cast** — the one-command machine bootstrap running
- **wizard.cast** — an agent session recalling context / triaging tasks

`build.cast` (the demo currently on the Projects page) is this site's own
`npm run build` — replace or remove it once you have real project recordings.
