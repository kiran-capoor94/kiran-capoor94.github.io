---
title: "I shipped a token-saving format, then ripped it back out"
description: "A CSV-based compact encoding for AI agent memory saved ~40% tokens on paper. It broke local LLM parsing in practice, so I reverted it."
pubDate: 2026-07-06
tags: ["ai-engineering", "wizard", "postmortem"]
---

Wizard is the memory layer I built so my coding agents would stop forgetting everything between sessions. Early on I added a compact encoding for the structured payloads it hands back to an agent at session start, a CSV-style format loosely based on the [TOON spec](https://github.com/toon-format/spec) (Token-Oriented Object Notation). The idea was to shrink uniform arrays of task context, the kind of data where every row has the same six fields.

JSON repeats the key names on every object. Fifty tasks, six fields each, you're paying for `"priority":` fifty separate times for no reason. Flatten that into one header row and then plain CSV rows underneath and you cut a real chunk of tokens off every context payload, something close to 40% for the shape of data Wizard stores. I wrote the encoder, wired it in, and was pretty pleased with myself for about a week.

Then I plugged the same encoding into transcript synthesis, which is the part of Wizard that hands a raw session transcript to a local model over Ollama (LiteLLM as the cloud fallback) and asks it to write a note summarizing what happened. This is where it stopped working.

CSV needs quoting rules. A field with a comma or a newline or a quote in it has to be escaped, and whatever reads the CSV back out has to know the escaping convention to undo it. A real parser doesn't care, it just runs the state machine. A 7B local model reading CSV and trying to reason about it at the same time is a different animal, and the quoting edge cases were exactly the kind of thing it would trip on mid-parse. So the token count went down and the summaries got worse, sometimes garbled where a quoted field bled into the next line.

I pulled the encoding back out of that path. The commit message is blunt about it:

> replace TOON CSV transcript encoding with plain-text format in synthesis

What replaced it is about the least clever thing you could write: one line per turn, `[role] content`, no delimiters, nothing to escape. There's a docstring on the new function that says roughly the same thing the commit does, that it's simpler than the CSV version specifically to avoid quoting overhead for local models. I didn't dress it up. It didn't need dressing up.

I still use the compact encoding elsewhere, for payloads nothing is trying to comprehend, only parse. That distinction turned out to matter more than I expected going in: a format can be a clear win for a deterministic parser and a net loss for a small model doing best-effort pattern matching over the same bytes. I'd tested the format against JSON. I hadn't tested it against the thing that actually had to read it.

The part of Wizard doing the real token-saving work these days isn't a clever format at all, it's a plain regex compressor that runs on every note before it's stored. No model call. Common engineering terms get shortened (middleware to mw, authentication to auth), filler phrases get stripped, and before any of that runs, code blocks and URLs and file paths get carved out and set aside so the compressor can't touch them. It's not interesting to look at. It's been quietly correct since the day I wrote it, which is more than I can say for the format it replaced.
