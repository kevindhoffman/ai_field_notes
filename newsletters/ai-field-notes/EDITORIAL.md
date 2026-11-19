# AI Field Notes: editorial brief

What is specific to AI Field Notes: who it is for, how it sounds, what it looks for and what it has already covered. The shared method (issue shape, research workflow, evidence discipline, article architecture, diagrams, checklist and `issue.json` schema) is in the root `EDITORIAL.md`; read both. Sources are in `sources.yaml` next to this file; names, addresses and URLs in `newsletter.json`.

## Mission and reader

**Applied first.** AI Field Notes is for practitioners who use AI in their daily work: engineers, technical leads, architects and the people who run AI-heavy teams. They like knowing the science, but they read this to change what they do this week. Every issue should leave a reader with something to try, build, configure, measure or stop doing.

The lens is systems engineering: reliable agentic systems, architectures, context engineering, memory and retrieval, evaluation, observability, security and governance, orchestration, tool use, AI-assisted development, operations, and the economic and organizational tradeoffs. Cutting-edge developments are welcome, but always paired with **how to apply them**.

It is not a generic AI news digest, a product-launch roundup, an academic paper review, or a briefing tailored to one employer. Enterprise and federal-contractor examples may illustrate a point but must not dominate. The reader prefers dense, well-argued essays over bullet summaries.

Every story should answer: **What changed? How does it work? What evidence supports it? What can fail? And what should I do differently on Monday?**

## Tone model

The target is the predecessor "AI Systems | Field Notes" engineering edition (Nov 11, 2026, "The proof and the permission"): essays that turn a development into an engineering principle, then into a concrete practice: a pilot design, an architecture test ("disable the model and ask what the rest of the system knows"), a scorecard, a test suite to write. Keep statistics to the few that carry the argument; the reader wants the mechanism and the move, not every p-value. Put paper detail (sample sizes, significance) in a clause or the source note, not a paragraph.

## Cadence and window

Published **Monday, Wednesday and Friday**. Each issue covers what appeared since the previous issue (Monday covers Friday through Sunday), but an essay may draw on older foundational sources when they explain the new development.

## Issue shape

The shared shape in `EDITORIAL.md` section 2, with all sections: essays with "Try it this week", From the builders, Briefs, Research corner, and the source roster. "Try it this week" steps are engineering moves: a check to add, a trace to inspect, a test suite to write, a setting to change.

## Lenses: systems engineering

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

## Continuity

Historical one-day specials are not standing assignments: AI productivity measurement (Oct 30, 2026), Parmenides' Fallacy applied to AI futures (Oct 31), Apple's FY2026 10-K agent-risk language (Nov 4).

Legacy topics from the predecessor publications, for the first issues before the archive has history:

- OpenAI edition, Nov 12: agent-built cloud emulator validation; memory architecture and provenance; vulnerability verification at scale; versioned model routing and pricing.
- OpenAI edition, Nov 13: unauthorized airline-booking agents and delegation; agent observability and LangSmith; code generation vs. review bottlenecks; multi-agent permission boundaries.
- OpenAI edition, Nov 14: durable agent operating environments; product deprecation and workflow portability; reusable skills vs. authority; independent evaluation.
- Claude Brief Edition 19, Nov 14: Anthropic's "Building strong safety evaluations"; Thinking Machines' Inkling 2 Small; Latent Space's No AI Slop Manifesto; Jensen Huang's resignation as supplier risk.
- Claude Brief Edition 20, Nov 15: Lambert, "Open-source AI without Jensen"; datasette-llm on local OpenAI-compatible servers.
