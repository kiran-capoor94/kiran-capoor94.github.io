---
title: "I shipped a token-saving format, then ripped it back out"
description: "How a CSV-based compact encoding for AI agent memory saved ~40% tokens on paper — and quietly broke local LLM parsing in practice."
pubDate: 2026-07-06
tags: ["ai-engineering", "wizard", "postmortem"]
---

Wizard is the memory layer I built so my coding agents would stop forgetting everything between sessions. One of the things I was proudest of, early on, was a custom compact encoding for the structured payloads it hands back to an agent at session start — a CSV-style format, loosely inspired by the [TOON spec](https://github.com/toon-format/spec) (Token-Oriented Object Notation), built specifically to shrink uniform arrays of task context.

The pitch was simple: JSON repeats every key name for every row. If you've got fifty tasks with the same six fields, you're paying for `"priority":` fifty times for no reason. Flatten that into a header row plus CSV rows, and you cut a meaningful chunk of tokens off every context payload. On paper, for the kind of data Wizard actually stores, that's close to a 40% reduction. I wired it in, wrote the encoder, and moved on feeling clever.

Then I plugged it into the transcript synthesis pipeline — the part of Wizard that takes a raw session transcript and asks a local model (via Ollama, with LiteLLM as a cloud fallback) to summarize what happened into a note. And that's where it fell apart.

CSV needs quoting rules. Fields with commas, newlines, or quotes inside them need escaping, and a parser needs to know the rules to get them back out. That's a non-issue for a well-behaved parser. It is very much an issue for a small local model asked to read a CSV-encoded transcript and reason about it — quoting overhead and edge cases were exactly the kind of thing that confused smaller models mid-parse. The token savings were real. The comprehension cost was also real, and worse.

So I pulled it back out — specifically out of the LLM-facing synthesis path. The commit message says it plainly:

> replace TOON CSV transcript encoding with plain-text format in synthesis

The replacement is about as unclever as it gets: a flat `[role] content` line per turn. No delimiters to escape, no quoting rules to get wrong, nothing for a small model to trip over. The docstring on the new function says the quiet part out loud too — simpler than TOON CSV, specifically to avoid quoting overhead for local models.

The lesson wasn't "compact formats are bad." It's that **the audience for your encoding matters more than the encoding's theoretical efficiency.** A format that's a clear win when a deterministic parser reads it can be a net loss when the reader is a small LLM doing best-effort pattern matching. I kept the compact encoding where it still made sense — structured, non-LLM-consumed payloads don't care about quoting ambiguity, because nothing is "reading" them, just parsing them. But anything headed into a prompt got simplified back down to something a language model could parse the way it parses everything else: by pattern, not by grammar.

The thing that actually ended up doing the token-saving work Wizard needed wasn't a clever encoding at all — it's a deterministic prose compressor that runs on every note before it's stored. No LLM call, just regex: common engineering terms get abbreviated (`middleware` → `mw`, `authentication` → `auth`), filler and hedging phrases get stripped, and code blocks, URLs, paths, and dotted identifiers are protected from mangling by splitting the text into "safe" and "compressible" regions before touching anything. Boring, predictable, and it doesn't care what's reading it afterward — which turned out to be the actual requirement all along.

If there's a takeaway for anyone building on top of LLMs: benchmark your format against the thing that has to *use* it, not against the thing that has to *store* it. Those are different jobs, and optimizing for one can quietly tax the other.
