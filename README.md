# Field Notes

One engine that researches, writes and emails several newsletters, each written by Claude. The engine (process, tools, evidence rules and design) is shared; each newsletter's identity, editorial brief, sources, subscriber list, schedule and archive live in its own folder.

| Newsletter | Folder | Web archive |
|---|---|---|
| **AI Field Notes**: a technical magazine on engineering AI systems (agents, evaluation, retrieval, context, security, operations). Mon/Wed/Fri. | [`newsletters/ai-field-notes/`](newsletters/ai-field-notes/) | https://kevindhoffman.github.io/ai_field_notes/ |
| **Marketing AI \| Field Notes**: applied AI for marketing teams. Mon/Wed/Fri. | [`newsletters/marketing-ai/`](newsletters/marketing-ai/) | https://kevindhoffman.github.io/ai_field_notes/marketing-ai/ |

## Layout

```
RUNBOOK.md               shared production process; every step takes a newsletter slug
EDITORIAL.md             shared method: evidence discipline, research, article craft, diagrams, schema
scripts/fieldnotes.py    the engine; per-newsletter commands take --newsletter <slug>
templates/web.css        shared design system (the email palette is `E` in fieldnotes.py)
newsletters/<slug>/
  newsletter.json        name, subject format, masthead, footer, subscriber doc id, reading page, web path
  EDITORIAL.md           mission, reader, tone, cadence, lenses, continuity
  sources.yaml           its source roster
  issues/YYYY-MM-DD/     issue.json, web.html, email.html, research/, candidates.json, sent.json
docs/                    GitHub Pages: AI Field Notes at the root (so old links keep working), others under docs/<slug>/
```

## How a run works

Each newsletter has its own Claude scheduled task that starts a fresh cloud session with this repo and the Gmail and Google Drive connectors, names the newsletter, and follows [`RUNBOOK.md`](RUNBOOK.md):

1. `fieldnotes.py setup` works out the date, subject, paths and URLs, and stops if the issue was already sent;
2. reads the last few issues so it doesn't repeat itself;
3. researches the window with parallel subagents across the newsletter's `sources.yaml`;
4. records every candidate it considered in `candidates.json`;
5. writes the issue as structured data, `issue.json`, following the shared `EDITORIAL.md` and the newsletter's brief;
6. renders `web.html` and `email.html` from that one file, checks the two editions match, and publishes the web edition;
7. emails the full HTML from Gmail To the owner with every subscriber in Bcc, verifies the send, and records counts only in `sent.json`;
8. rebuilds the newsletter's archive in `docs/` and commits everything back here.

## Privacy

This repo and its web archive are public. Subscriber addresses live only in each newsletter's Google Doc in the owner's Drive (shared with no one) and are read at send time. Every subscriber is Bcc'd, so readers never see each other's addresses. `fieldnotes.py validate` rejects an issue containing an email address, and `fieldnotes.py privacy-check --staged` runs before every commit.

## Common changes

| To change | Edit |
|---|---|
| Who receives a newsletter | Its subscriber Google Doc (named in its `newsletter.json`), never this repo |
| Where it looks | `newsletters/<slug>/sources.yaml` |
| What it is for and how it sounds | `newsletters/<slug>/EDITORIAL.md` |
| How every newsletter checks evidence and writes | `EDITORIAL.md` |
| The production steps | `RUNBOOK.md` |
| The look | `templates/web.css` (web) and the `E` palette in `scripts/fieldnotes.py` (email) |
| Add a newsletter | `RUNBOOK.md`, "Adding a newsletter" |

## Tool

```
python3 scripts/fieldnotes.py newsletters                          # list newsletters
python3 scripts/fieldnotes.py setup    --newsletter S [--test]     # date, subject, paths, URLs, duplicate guard
python3 scripts/fieldnotes.py last     --newsletter S              # previous issues' topics and sources
python3 scripts/fieldnotes.py render   newsletters/S/issues/D/issue.json   # web.html + email.html + parity check
python3 scripts/fieldnotes.py links    newsletters/S/issues/D/issue.json   # check cited URLs
python3 scripts/fieldnotes.py publish  newsletters/S/issues/D/issue.json   # web edition into docs/
python3 scripts/fieldnotes.py site     --newsletter S | --all      # rebuild archive and source index
python3 scripts/fieldnotes.py privacy-check [--staged]             # no email addresses in committed files
```

Python 3.10+ standard library only. Try it on the sample: copy `examples/sample-issue.json` to a scratch folder and run `render` on it.
