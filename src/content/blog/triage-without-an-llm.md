---
title: "Why I didn't let an LLM decide what to work on next"
description: "Wizard's work-triage scorer is a weighted sum, not a model call. The LLM only writes the sentence explaining the ranking, it doesn't produce it."
pubDate: 2026-07-06
tags: ["ai-engineering", "wizard", "architecture"]
---

Wizard tracks every task I've ever told an agent about, and at some point I needed a way to ask it "what should I actually work on right now" and get an answer that wasn't just the most recently mentioned thing. The obvious move in 2026 is to hand the list to an LLM with a decent prompt and let it rank things. I tried that early on, and it worked in the sense that it produced plausible-sounding output. It didn't work in the sense that asking it twice in a row gave me two different orderings for the same data.

That's the part that killed it for me. A prioritization tool that reorders your work differently every time you ask isn't prioritizing anything, it's improvising. So the ranking in Wizard now is a plain weighted sum over a handful of scores, no model involved at all, and the LLM only shows up afterward to write a sentence explaining why the top result is the top result.

There are three modes, `focus`, `quick-wins`, and `unblock`, and they're really just different weight vectors over the same four inputs: priority, recency, momentum, and simplicity. Quick-wins weighs simplicity at 0.50 and barely cares about priority. Focus flips that, priority gets 0.50 and simplicity barely counts. Recency decays as roughly `1 / (1 + stale_days)`, so a task goes quiet fast if nobody's touched it, and momentum saturates once a task has around ten notes attached to it, more notes past that point don't push it any higher. None of this is exotic. It's the kind of arithmetic you'd sketch on a whiteboard in five minutes, and that's the point, I can read the formula and know exactly why task A beat task B. I can't do that with a model's hidden reasoning, and for something I'm going to trust every morning, that mattered more to me than a fancier ranking would have.

The LLM's job comes after the ranking is already fixed. It gets the top few tasks and is asked to write a short "why" that ties them together, capped at around 120 tokens so it can't ramble, and that's the only part of the output that's non-deterministic. If the model's unavailable or times out, the ranking still comes back, it just comes back without the paragraph on top. Nothing about the actual decision depends on the model responding at all.

I think there's a general shape here that applies past this one feature: the more a piece of output looks like a decision, the more I want it to come from something I can audit line by line. Language is a fine thing to hand to a model. Deciding what I do with my next two hours is not, or at least it isn't for me, and building the two apart, scoring on one side and narrating on the other, made the whole feature something I could actually trust instead of just something that sounded confident.
