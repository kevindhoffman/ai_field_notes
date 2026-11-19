# Field Notes: shared editorial method

This is the standing editorial guide for every newsletter that runs on this engine. The run follows `RUNBOOK.md` for *process*, this file for *method*, and the newsletter's own brief, `newsletters/<slug>/EDITORIAL.md`, for *identity*: its mission and reader, tone, cadence, lenses and continuity notes. Where the two disagree, the newsletter's brief wins on identity and this file wins on evidence. Sources live in `newsletters/<slug>/sources.yaml`.

It began as the AI Field Notes guide, which merged two predecessors: the OpenAI-era "AI Systems | Field Notes" handoff (research method, evidence discipline, delivery verification) and the Claude-era "AI Systems Brief" (writing style, diagrams, design system).

## 1. Mission, reader and tone

Each newsletter defines these in its brief (`newsletters/<slug>/EDITORIAL.md`): who it is for, what it is not, the questions every story must answer, the tone model and the cadence. Read the brief before choosing stories. Across all of them: **applied first**. Every issue should leave a reader with something to try, build, configure, measure or stop doing, and every story should answer: **What changed? How does it work? What evidence supports it? What can fail? And what should I do differently on Monday?**

## 2. Shape of an issue

The shared shape. A newsletter's brief may say what its "Try it this week" steps and builders look like, or drop the optional Research corner.

- **An issue title and a theme.** Give each issue a short title (e.g. "The proof and the permission") and an "In this issue" paragraph that names the thread connecting the essays and which development is the fresh lead.
- **4–6 essays** of roughly 400–650 words, numbered "01 / Kicker". Fewer when the news is thin; never pad. Aim for **at least two-thirds applied** stories (tools, workflows, practices, platform changes, practitioner experiments) and at most one-third frontier/research stories, and even those must end with an application.
- **"Try it this week"** at the end of every essay: 2–4 concrete steps a reader can actually take (what to set up, measure, test, prompt, configure or change), with a rough time estimate. Steps are specific ("add a rule-based check that fails when the agent writes to X") not generic ("consider evaluation").
- **From the builders**: 2–5 videos or demos from practitioners (YouTube, podcasts, livestreams) published in the window, each with what they show, why it's worth watching, and which part to watch if it is long. Prefer full videos over Shorts; flag sponsored content.
- **Briefs**: short single-source items, 2–3 sentences each with an inline link.
- **Research corner** (optional): academic or architectural items that are good to know but not yet actionable. Keep each to 2–3 sentences.
- **Source roster**: what each roster source published in the window, including "nothing new, last post X". A source that could not be read is "unchecked", never "0".
- Quiet window: publish a shorter issue rather than padding. Nothing at all: a one-paragraph issue saying so, plus the roster.

## 3. Research workflow

1. **Establish the date and window.** Run `python3 scripts/fieldnotes.py last --newsletter <slug>` to see the previous issues' topics and sources. Search developments since the previous issue; older foundational evidence may support genuinely new analysis.
2. **Scan primary sources and builders.** Primary sources (lab and vendor posts, tool and platform changelogs, incident write-ups, papers, specifications, data) and the builders (practitioner YouTube channels, podcasts and newsletters), for experiments, workflows, criticism and overlooked implications. Use `python3 scripts/fieldnotes.py youtube @handle --since <window start>` for channels. A video's description, chapters and linked repo or transcript are the evidence; say so ("in the video, X walks through…") and don't claim details you could not read. The roster is in `newsletters/<slug>/sources.yaml`; it is a starting point, not a quota or an endorsement.
3. **Build a candidate ledger** (`candidates.json`, kept with the issue). For each candidate: title, author, organization, URL, publication date, event date, what changed, mechanism, evidence quality, independent confirmation, relevance, overlap with prior issues, and the decision (used / brief / rejected, with a reason).
4. **Score usefulness first, then significance.** Favor things a reader can act on: new tools and features worth adopting, workflows shown working, credible failures with lessons, meaningful API or permission changes, evaluation practices, deployment economics. Then new architectural patterns and empirical results. Penalize duplicated press releases, vague product claims, recycled themes, and research with no path to practice (that goes to the Research corner).
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

A continuous magazine essay, not a bullet summary. Define terms a smart non-specialist might not know, and use transitions so the reader can follow the thread. Write the headline as an engineering principle the reader can carry away ("When the agent writes the proof, the checker becomes the product"), not a news headline.

1. **Headline and one-sentence dek** stating the principle or tension.
2. **Why now**: the dated development and the key evidence, briefly.
3. **Mechanism**: how it works, in plain terms.
4. **In practice**: what this looks like in a real team's work: a worked example, a pilot design, an architecture test, a scorecard. This is the heart of the essay; give it at least one full paragraph.
5. **Tradeoffs and limits**: what can fail, what the evidence does not show.
6. **The principle**, labeled as our read where it is inference.
7. **"Try it this week"** (`try_it`): 2–4 concrete steps plus a time estimate (see section 2).
8. **Source desk / direct links**: author/publisher, linked title, date, flags (free, paywalled, video, sponsored, vendor claim), with the URL shown.

Links go inline where each source is first discussed, *and* in the per-article source list. Every inline link must appear in that article's `sources`.

Badges: `Single source`, `Vendor claim`, `Analysis and opinion`, `Reported`, `Forecast`, `Paywalled` render in amber; anything else renders in blue.

## 6. Diagrams

Add an inline SVG only where it shows a relationship that prose struggles with: trust boundaries, control vs. data planes, evaluation loops, retrieval paths, agent lifecycles, failure propagation, before/after, or a chart drawn to scale for real numbers. Always for a story that synthesizes several sources, if a mechanism connects them. Never decorative.

- Phone-first: `viewBox` about 400 wide, stacked top to bottom, short labels, arrows labeled. Check mentally that no text overflows its box or the viewBox.
- Use only the design-system classes from `templates/web.css`: boxes `rx="8"` with `.box` / `.box-acc` / `.box-risk` / `.box-q` / `.box-good` (add `.dash` for uncertain); lines `.ln` with `.ln-mut` / `.ln-risk` / `.ln-q` / `.ln-good`; arrowhead marker paths `.mk` / `.mk-mut` / `.mk-risk` / `.mk-q` / `.mk-good` (marker ids unique per SVG, e.g. prefix with the article id); text `.t-b`, `.t-sm`, plus `.t-acc` / `.t-risk` / `.t-q` / `.t-good` / `.t-mut`; bars `.bar` / `.bar-acc`; rules `.axis`.
- Color meaning: blue for structure, red only for risk, teal only for open questions or uncertainty, amber for watch items, green for resolved or passing. No literal colors, no `<style>` or `<script>` in SVGs.
- Each figure needs `aria_label` (states the claim), `claim` (bold caption lead), `caption`, and `email_description`: a complete prose description, because email clients strip SVG. The email reader must lose no meaning.

## 7. Lenses

Each newsletter's brief lists the lenses it reaches for (AI Field Notes: systems engineering; Marketing AI: measurement, brand, data and the stack). Pick the ones that apply to the story; don't march through all of them.

## 8. Continuity

Before choosing stories, run `python3 scripts/fieldnotes.py last --newsletter <slug>`. Seek a different angle from the last few issues unless a new development materially advances a story; then say explicitly what is new. The newsletter's brief has its continuity notes: specials that are not standing assignments, and where its edition numbering and first window start when the archive is empty.

## 9. Pre-send checklist

- [ ] Window and previous-issue comparison checked (`fieldnotes.py last --newsletter <slug>`).
- [ ] Fresh primary sources actually read; publication dates and claims verified.
- [ ] No recycled specials, no padding.
- [ ] Articles are explanatory, technically grounded and appropriately skeptical.
- [ ] At least two-thirds of the essays are applied, and every essay ends with specific "Try it this week" steps.
- [ ] Builders (YouTube channels, podcasts) and tool changelogs were scanned; "From the builders" has the best 2–5 items.
- [ ] Every substantive claim sourced; inline links and per-article source lists complete.
- [ ] Measured findings, vendor claims and editorial inference distinguishable.
- [ ] Every figure has an aria label and a complete email description.
- [ ] `fieldnotes.py render` reports 0 errors and `parity OK`.
- [ ] `fieldnotes.py links` shows no BROKEN links; UNVERIFIED ones confirmed by reading them (`fieldnotes.py fetch` or WebFetch).
- [ ] No email address anywhere in the issue or its research files (`fieldnotes.py privacy-check`).
- [ ] Email sent To the owner with every subscriber in Bcc, with a returned message ID, and the Sent copy checked.

## 10. issue.json schema

`newsletters/<slug>/issues/YYYY-MM-DD/issue.json` is the single editorial source. Both HTML editions and the archive are generated from it. See `examples/sample-issue.json` for a complete example.

```jsonc
{
  "newsletter": "ai-field-notes",       // the newsletter's slug (folder name under newsletters/)
  "date": "2026-11-16",                 // issue date, YYYY-MM-DD
  "edition": 1,                         // previous + 1
  "window": {"start": "2026-11-13", "end": "2026-11-16"},
  "title": "The proof and the permission",   // short issue title (masthead)
  "web_path": "tests/2026-11-15",       // test runs only; real issues default to issues/<date>
  "lede": "One or two sentences (inline HTML allowed) summarizing the issue.",
  "theme": {"heading": "Where intelligence meets engineering discipline",
            "html": "Which development is the fresh lead and what thread connects the essays."},
  "evidence_standard": "optional override of the default evidence note",
  "top": [{"html": "<a href=\"#a1\">Claim.</a> Why it matters."}],      // optional, 2-3 items
  "articles": [{
    "id": "a1",                         // a1, a2, ... (anchor; also prefixes SVG marker ids)
    "kicker": "Evaluation",             // short section label
    "badges": ["Single source"],        // optional
    "headline": "…", "dek": "…",        // plain text
    "paragraphs": ["inline HTML: <a>, <em>, <strong>, <b>, <i>, <code>, <br> only"],
    "figure": {                         // optional
      "after_paragraph": 2, "svg": "<svg viewBox=\"0 0 400 300\">…</svg>",
      "aria_label": "…", "claim": "…", "caption": "inline HTML", "email_description": "…",
      "how_to_read": "optional inline HTML: one or two sentences on how to read the diagram"
    },
    "try_it": {"time": "about 1 hour", "steps": ["inline HTML step", "…"]},   // required: 2-4 steps
    "for_your_systems": "optional inline HTML (legacy; prefer try_it)",
    "sources": [{"who": "Author, Outlet", "title": "…", "url": "https://…", "date": "Nov 14, 2026",
                 "flags": "free", "note": "optional caveat"}]
  }],
  "watch":    [{"title": "…", "html": "what it shows, why watch, which part", "who": "Channel", "date": "…", "flags": "video, 21 min", "url": "https://youtube.com/…"}],
  "briefs":   [{"title": "…", "html": "inline HTML", "who": "…", "date": "…", "flags": "free", "url": "https://…"}],
  "research": [{"title": "…", "html": "2-3 sentences", "who": "…", "date": "…", "flags": "free", "url": "https://…"}],
  "roster": [{"source": "Interconnects", "posts": 1, "notes": "…"}],
  "footer": "optional override (default: newsletter.json footer)"
}
```
