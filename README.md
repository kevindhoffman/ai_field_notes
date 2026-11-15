# AI Field Notes

A technical magazine on engineering AI systems (agents, evaluation, retrieval, context, security, operations and their tradeoffs), researched and written by Claude and emailed **Monday, Wednesday and Friday**.

Archive: https://kevindhoffman.github.io/ai_field_notes/ · Source index: https://kevindhoffman.github.io/ai_field_notes/sources.html

## How it works

A Claude scheduled task runs before dawn (America/New_York) on publication days. It clones this repo and follows [`RUNBOOK.md`](RUNBOOK.md):

1. reads the last few issues so it doesn't repeat itself;
2. researches the window with parallel subagents across [`config/sources.yaml`](config/sources.yaml);
3. records every candidate it considered in `issues/<date>/candidates.json`;
4. writes the issue as structured data, `issues/<date>/issue.json`, following [`EDITORIAL.md`](EDITORIAL.md);
5. renders `web.html` and `email.html` from that one file with `scripts/fieldnotes.py`, which also checks the two editions match;
6. emails the full HTML from Gmail to the subscriber list, verifies the send, and records it in `sent.json`;
7. rebuilds the archive in `docs/` and commits everything back here.

## Common changes

| To change | Edit |
|---|---|
| Who receives it | The Google Doc "AI Field Notes - Subscribers" in Kevin's Drive (kept out of this public repo on purpose) |
| Where it looks | `config/sources.yaml` |
| How it thinks and writes | `EDITORIAL.md` |
| The production steps | `RUNBOOK.md` |
| The look | `templates/web.css` (web) and the `E` palette in `scripts/fieldnotes.py` (email) |

## Tool

```
python3 scripts/fieldnotes.py last                      # previous issues' topics and sources
python3 scripts/fieldnotes.py validate issues/D/issue.json
python3 scripts/fieldnotes.py render   issues/D/issue.json   # web.html + email.html + parity check
python3 scripts/fieldnotes.py links    issues/D/issue.json   # check cited URLs
python3 scripts/fieldnotes.py site                      # rebuild docs/
```

Python 3.10+ standard library only. Try it on the sample: copy `examples/sample-issue.json` to a scratch folder and run `render` on it.

## Roadmap

- **Crawl (now):** files in git, Gmail delivery, GitHub Pages archive with a filterable source index.
- **Walk:** full-text search across issues; a "story threads" view that links issues covering the same topic over time.
- **Run (only if needed):** Supabase for subscribers with self-service signup, logins, and querying the candidate ledgers.
