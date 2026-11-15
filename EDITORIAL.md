# AI Field Notes: editorial method

This is the standing editorial guide. The scheduled run follows `RUNBOOK.md` for *process* and this file for *judgment*. It merges two predecessors: the OpenAI-era "AI Systems | Field Notes" handoff (research method, evidence discipline, delivery verification) and the Claude-era "AI Systems Brief" (writing style, diagrams, design system). Edit this file to change how the magazine thinks; edit `config/sources.yaml` to change where it looks.

## 1. Mission

An original, substantive technical magazine for a technically sophisticated reader who cares about the engineering and practical application of AI, seen through a systems-engineering lens: reliable agentic systems, architectures, model behavior, context engineering, memory, retrieval/RAG, reasoning, evaluation, observability, security and governance, orchestration, tool use, operations, implementation detail, and economic and organizational tradeoffs.

It is not a generic AI news digest, a product-launch roundup, or a briefing tailored to one employer. Enterprise and federal-contractor examples may illustrate a point but must not dominate. The reader prefers dense reading.

Published **Monday, Wednesday and Friday**. Each issue covers what appeared since the previous issue (Monday covers Friday through Sunday).

Every story should answer: **What changed? How does it work? What evidence supports it? What can fail? What design decision should an engineer reconsider?**

## 2. Shape of an issue

- **4–7 feature articles** of roughly 400–600 words each (an important investigation may run longer). Fewer when the news is thin; never pad. Issues cover 2–3 days, so there is usually enough material.
- **"If you read nothing else"**: 2–3 items at the top, each linking to its story.
- **Briefs**: short single-source items, 2–3 sentences each with an inline link.
- **Source roster**: what each roster source published in the window, including "nothing new, last post X".
- Quiet window: publish a shorter issue rather than padding. Nothing at all: a one-paragraph issue saying so, plus the roster.

## 3. Research workflow

1. **Establish the date and window.** Run `python3 scripts/fieldnotes.py last` to see the previous issues' topics and sources. Search developments since the previous issue; older foundational evidence may support genuinely new analysis.
2. **Scan primary sources first.** Lab research and engineering posts, changelogs, papers, benchmark repos, specifications, incident write-ups, code changes. Then scan the practitioners for experiments, criticism and overlooked implications. The roster is in `config/sources.yaml`; it is a starting point, not a quota or an endorsement.
3. **Build a candidate ledger** (`candidates.json`, kept with the issue). For each candidate: title, author, organization, URL, publication date, event date, what changed, mechanism, evidence quality, independent confirmation, relevance, overlap with prior issues, and the decision (used / brief / rejected, with a reason).
4. **Score editorial significance, not publicity.** Favor new architectural patterns, empirical results, credible failures, meaningful API or permission changes, evaluation advances, deployment economics, and decisions engineers can act on. Penalize duplicated press releases, vague product claims and recycled themes.
5. **Cluster related developments.** A story can unite a paper, a practitioner experiment and a platform change around one engineering question, and must then explain how the pieces relate as parts of one system (shared mechanism, layers of one stack, cause and effect, the same loop in different domains). A strong single-author piece can stand alone with a "Single source" badge. Don't force citations to simulate consensus.
6. **Read the original material.** Verify exact dates, model and version identifiers, benchmark conditions, sample sizes, study design, code paths, disclosed limitations, and the difference between observed outcomes and forecasts.
7. **Draft original explanatory articles** (structure in section 5).
8. **Challenge every story.** What would falsify the interpretation? Which assumptions are hidden? Does an alternative explanation fit? What would change an engineering decision?
9. **Verify citations and links.** Every substantive external claim has a working, direct, relevant source. Re-check every number you cite against its source page.
10. **Run the edition check** (section 9).

## 4. Evidence discipline

Prefer, roughly in order: (1) a directly inspectable primary artifact or data; (2) a peer-reviewed or well-documented empirical study; (3) a reproducible practitioner experiment; (4) an engineering postmortem; (5) a vendor announcement; (6) secondary reporting. This is a heuristic: a vendor postmortem can beat a weak paper.

Make three kinds of statement distinguishable in the prose:

- **Observed evidence**: measured behavior, code, logged events, reproduced failures, actual filing text.
- **Vendor or author claim**: reported benchmarks, claimed improvements, projected impact, roadmaps. Say "Anthropic reports", "the authors claim", "according to the vendor".
- **Editorial inference**: implications, scenarios, extrapolations, recommendations. Signal them ("Our read:", "The implication, as we see it,").

For papers, record task population, evaluation setup, baselines, uncertainty, external validity and possible benchmark contamination. For productivity claims, separate observational association from randomized causal effect. For incidents, separate confirmed impact from plausible blast radius. For SEC filings, separate prospective risk disclosure from proof of misconduct or policy change.

Never present a vendor benchmark, marketing claim, funding announcement or forward-looking risk disclosure as independently established. Flag figures that conflict across outlets. Never invent statistics, quotes or source titles. If an article cannot be supported, drop it.

**Attribution and quoting.** Paraphrase in your own words. At most one direct quote per source outlet, under 15 words. Never reproduce paragraphs. Note when a paywall limited what you could read.

## 5. Article architecture

A continuous magazine essay, not a bullet summary. Define terms a smart non-specialist might not know, and use transitions so the reader can follow the thread.

1. **Headline and one-sentence dek** stating the engineering tension.
2. **Why now**: the dated development and the precise evidence.
3. **Mechanism**: architecture, protocol, model behavior, causal pathway or workflow.
4. **Concrete example**: what a team would actually build, measure, configure or test.
5. **Tradeoffs and counterarguments**: reliability, security, latency, cost, verification, organizational constraints.
6. **Systems implication**, labeled as inference where it is one.
7. **"For your systems"** callout: the practical engineering takeaway, 2–4 sentences.
8. **Sources**: author/publisher, linked title, date, flags (free, paywalled, transcript, vendor claim).

Links go inline where each source is first discussed, *and* in the per-article source list. Every inline link must appear in that article's `sources`.

Badges: `Single source`, `Vendor claim`, `Analysis and opinion`, `Reported`, `Forecast`, `Paywalled` render in amber; anything else renders in blue.

## 6. Diagrams

Add an inline SVG only where it shows a relationship that prose struggles with: trust boundaries, control vs. data planes, evaluation loops, retrieval paths, agent lifecycles, failure propagation, before/after, or a chart drawn to scale for real numbers. Always for a story that synthesizes several sources, if a mechanism connects them. Never decorative.

- Phone-first: `viewBox` about 400 wide, stacked top to bottom, short labels, arrows labeled. Check mentally that no text overflows its box or the viewBox.
- Use only the design-system classes from `templates/web.css`: boxes `rx="8"` with `.box` / `.box-acc` / `.box-risk` / `.box-q` / `.box-good` (add `.dash` for uncertain); lines `.ln` with `.ln-mut` / `.ln-risk` / `.ln-q` / `.ln-good`; arrowhead marker paths `.mk` / `.mk-mut` / `.mk-risk` / `.mk-q` / `.mk-good` (marker ids unique per SVG, e.g. prefix with the article id); text `.t-b`, `.t-sm`, plus `.t-acc` / `.t-risk` / `.t-q` / `.t-good` / `.t-mut`; bars `.bar` / `.bar-acc`; rules `.axis`.
- Color meaning: blue for structure, red only for risk, teal only for open questions or uncertainty, amber for watch items, green for resolved or passing. No literal colors, no `<style>` or `<script>` in SVGs.
- Each figure needs `aria_label` (states the claim), `claim` (bold caption lead), `caption`, and `email_description`: a complete prose description, because email clients strip SVG. The email reader must lose no meaning.

## 7. Systems-engineering lenses

Reach for whichever apply:

- **Boundaries**: who can read, propose, approve, write, execute or transmit?
- **Control plane vs. data plane**: who decides policy, who performs side effects?
- **Failure containment**: blast radius, least privilege, isolation, rollback, idempotency, rate limits, kill switches.
- **State and memory**: persistence, provenance, freshness, conflict resolution, deletion, reproducibility.
- **Context and retrieval**: selection, ranking, citation fidelity, source authority, injection exposure, stale context.
- **Evaluation**: component, scenario, adversarial, end-to-end and production-outcome tests.
- **Observability**: trace IDs, tool inputs/outputs, model and prompt versions, approvals, costs, redaction, retention.
- **Human factors**: verification effort, cognitive load, reviewer queues, operator trust, handoff quality.
- **Economics**: latency, tokens, total task cost, error cost, model routing, maintenance.
- **Portability**: stable contracts, replaceable models and vendors, independent test fixtures, exportable state.

**Productivity and value** (a recurring lens, not a recurring feature): separate efficiency, quality, human experience and expanded capability; measure at individual, team and system levels; count verification and downstream queue costs; compare the plausible future with AI against the plausible future without it, not AI tomorrow against a frozen present.

## 8. Continuity

Before choosing stories, run `python3 scripts/fieldnotes.py last`. Seek a different angle from the last few issues unless a new development materially advances a story; then say explicitly what is new.

Historical one-day specials are not standing assignments: AI productivity measurement (Oct 30, 2026), Parmenides' Fallacy applied to AI futures (Oct 31), Apple's FY2026 10-K agent-risk language (Nov 4).

Legacy topics from the predecessor publications, for the first issues before the archive has history:

- OpenAI edition, Nov 12: agent-built cloud emulator validation; memory architecture and provenance; vulnerability verification at scale; versioned model routing and pricing.
- OpenAI edition, Nov 13: unauthorized airline-booking agents and delegation; agent observability and LangSmith; code generation vs. review bottlenecks; multi-agent permission boundaries.
- OpenAI edition, Nov 14: durable agent operating environments; product deprecation and workflow portability; reusable skills vs. authority; independent evaluation.
- Claude Brief Edition 19, Nov 14: Anthropic's "Building strong safety evaluations"; Thinking Machines' Inkling 2 Small; Latent Space's No AI Slop Manifesto; Jensen Huang's resignation as supplier risk.
- Claude Brief Edition 20, Nov 15: Lambert, "Open-source AI without Jensen"; datasette-llm on local OpenAI-compatible servers.

## 9. Pre-send checklist

- [ ] Window and previous-issue comparison checked (`fieldnotes.py last`).
- [ ] Fresh primary sources actually read; publication dates and claims verified.
- [ ] No recycled specials, no padding.
- [ ] Articles are explanatory, technically grounded and appropriately skeptical.
- [ ] Every substantive claim sourced; inline links and per-article source lists complete.
- [ ] Measured findings, vendor claims and editorial inference distinguishable.
- [ ] Every figure has an aria label and a complete email description.
- [ ] `fieldnotes.py render` reports 0 errors and `parity OK`.
- [ ] `fieldnotes.py links` shows no BROKEN links; UNVERIFIED ones confirmed with WebFetch.
- [ ] Email sent with a returned message ID, and the Sent copy checked.

## 10. issue.json schema

`issues/YYYY-MM-DD/issue.json` is the single editorial source. Both HTML editions and the archive are generated from it. See `examples/sample-issue.json` for a complete example.

```jsonc
{
  "date": "2026-11-16",                 // issue date, YYYY-MM-DD
  "edition": 1,                         // previous + 1
  "window": {"start": "2026-11-13", "end": "2026-11-16"},
  "lede": "One or two sentences (inline HTML allowed) summarizing the issue.",
  "top": [{"html": "<a href=\"#a1\">Claim.</a> Why it matters."}],      // 2-3 items
  "articles": [{
    "id": "a1",                         // a1, a2, ... (anchor; also prefixes SVG marker ids)
    "kicker": "Evaluation",             // short section label
    "badges": ["Single source"],        // optional
    "headline": "…", "dek": "…",        // plain text
    "paragraphs": ["inline HTML: <a>, <em>, <strong>, <b>, <i>, <code>, <br> only"],
    "figure": {                         // optional
      "after_paragraph": 2, "svg": "<svg viewBox=\"0 0 400 300\">…</svg>",
      "aria_label": "…", "claim": "…", "caption": "inline HTML", "email_description": "…"
    },
    "for_your_systems": "inline HTML",
    "sources": [{"who": "Author, Outlet", "title": "…", "url": "https://…", "date": "Nov 14, 2026",
                 "flags": "free", "note": "optional caveat"}]
  }],
  "briefs": [{"title": "…", "html": "inline HTML", "who": "…", "date": "…", "flags": "free", "url": "https://…"}],
  "roster": [{"source": "Interconnects", "posts": 1, "notes": "…"}],
  "footer": "optional override"
}
```
