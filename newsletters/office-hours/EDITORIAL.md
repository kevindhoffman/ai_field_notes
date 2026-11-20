# Office Hours | Field Notes: editorial brief

What is specific to Office Hours: who it is for, how it sounds, and how it judges whether something is usable. The shared method (evidence discipline, article architecture, diagrams, checklist and `issue.json` schema) is in the root `EDITORIAL.md`; read both. Sources are in `sources.yaml` next to this file; settings in `newsletter.json`.

**This is a private newsletter** (`"public": false`). It has no web edition and nothing about its issues goes into this public repository: see RUNBOOK.md, "Private newsletters". This brief is public, so it stays generic. **Never name the readers' employer, its internal tools, systems, programs, customers or people, in any issue or file.** Everything in an issue comes from public sources.

## Mission and reader

A weekly companion to an internal AI office hours at a large enterprise in a regulated industry, where some work involves controlled or proprietary information. It arrives Thursday morning before the session. It gives the host things to talk about and gives attendees something they can use that week.

The room is mixed, and every issue serves both ends:

- **Newcomers** (most attendees): they use the company's approved chat assistant occasionally or not at all. They don't write code and don't "vibe code". They need one technique at a time, shown with a before-and-after prompt, that works in a chat window in ten minutes and makes their job visibly easier. They need permission and confidence as much as information.
- **Builders** (a smaller group): developers and power users doing ambitious work with an approved coding assistant and current models. They want agent patterns, context engineering, evaluation, and workflows from people at the frontier.

It is not a news digest, a product roundup, or a tour of tools nobody in the room is allowed to use. Every item answers: **What is the idea? Can I use it here, and how? What would I see if it worked? What could go wrong with company information?**

## The environment (generic)

What most readers can use at work, as the owner described it:

- an approved enterprise chat assistant with current models;
- an approved coding assistant, for developers;
- AI over internal documents within the rules (search, uploads, connectors as approved);
- **no installing unapproved tools or extensions, and no using outside AI websites for work.** Anything new must be approved first.

**Fit labels.** Every essay, brief and video carries exactly one label in its badges or flags:

- **Works today**: chat assistant only, nothing to install, no data leaves approved tools.
- **Needs approved dev tools**: uses the coding assistant or internal-document features.
- **Watch, don't touch**: a public tool or feature not usable at work. Teach the idea behind it and show how to get the same result with the approved tools. Never suggest signing up, installing it, or pasting work content into it.

**Data handling, always.** Examples and prompts use made-up or public content. Any step that involves work material says to use only approved tools and to follow the company's rules for controlled and proprietary information. Never suggest pasting sensitive content anywhere outside approved tools.

## Tone

Warm, plain and encouraging, like a good teacher at the start of a session. Define every term the first time (agent, context window, prompt, eval). No hype, no fear. Short sentences. For builders, be as technical as the material needs, but keep the opening paragraph readable by everyone.

## Cadence and window

Weekly, sent **Thursday morning** before office hours. Each issue covers the previous Thursday through Wednesday. Older material is fine when it is the clearest way to teach a technique; this newsletter teaches more than it reports.

## Issue shape

The shared shape, adapted:

1. **For Thursday's session** (put in the issue's `top` list, so it renders first): 2–3 discussion questions and one suggested live demo, with the exact prompt to run on screen.
2. **Start here** (essays 01–02, kicker "Start here"): one or two techniques for newcomers. 300–450 words. Show a before prompt and an after prompt. "Try it this week" steps are prompts to paste and things to notice, 10–20 minutes, no code. Label "Works today".
3. **Builder's bench** (essays 03–04, kicker "Builder's bench"): one or two items for developers and power users: agent patterns, context engineering, evaluation, coding-assistant workflows. 400–600 words, with fit labels.
4. **From the builders**: 2–4 videos, at least one a newcomer can follow. Say which part to watch.
5. **Briefs**: 3–6 short items, each with its fit label.
6. Research corner and source roster: optional; keep the roster short (practitioners with `roster: true`).

Three or four essays in total. A thin week gets a shorter issue.

## Lenses

- **Transferability**: what is the technique underneath this product news, and does it work with the approved tools?
- **Time to first win**: can a newcomer get a useful result in ten minutes?
- **Data handling**: does the technique need work content? If so, keep it inside approved tools and follow the rules.
- **Verification**: how does the reader check the output? Teach checking alongside every technique.
- **Repeatability**: can it become a saved prompt, a template, a team instruction file?
- **For builders**: reliability, evaluation, context, cost, and what to show newcomers.

## Continuity

The first issue on this engine is **Edition 1**; there are no earlier issues. Its window is the seven days before the send. After that, the run restores the archive from the Drive folder and `last` gives the edition number and window.

Good recurring threads: prompt patterns (role, context, examples, format, constraints), turning a good chat into a reusable instruction, checking AI output, summarizing and drafting from long documents, meeting and email workflows, and for builders: instruction files and skills, agents with tool permissions, evals, and context management. Don't repeat a technique within six weeks unless something new changes it.
