# Marketing AI | Field Notes: editorial brief

This is the per-newsletter brief. The shared `EDITORIAL.md` at the repository root holds the rules every newsletter follows: research workflow, evidence discipline, article architecture, diagrams, the pre-send checklist and the issue.json schema. This file says who Marketing AI | Field Notes is for, how it sounds, what it looks for, and what it has already covered. Sources live in `newsletters/marketing-ai/sources.yaml`.

## 1. Mission and reader

**Applied first, and applied to one kind of marketing.** The past issues (Oct 29 to Nov 19, 2026) were written for marketing teams at **accredited continuing-education providers in healthcare**: organizations that market CME/CE activities to physicians, nurses, pharmacists, physician assistants and other clinicians. The reader is one of these:

- a **marketing leader** who decides where the budget, the team's time and the AI tools go, and who has to show results to education and accreditation colleagues;
- a **marketing-operations or martech person** who runs the CRM and email (HubSpot in past issues), connects it to the learning platform, and owns consent, suppression and reporting;
- a **content, SEO or channel marketer** who writes activity pages, runs organic and AI search, LinkedIn, society newsletters, publisher placements and conference follow-up;
- a **partnerships person** who works with medical societies and health systems (Grand Rounds, institutional programs).

They work next to people marketers in other industries do not: accreditation staff, clinical reviewers and faculty, and grant officers who must keep commercial supporters away from educational content. Every AI idea in this newsletter has to survive those colleagues.

**What they do with it.** They use AI tools at work (ChatGPT, Claude, Gemini, Copilot, the AI features inside HubSpot, Canva, Google Ads and LinkedIn) and read this to decide what to change this week: a page to rebuild, a workflow to connect, a test to run, a claim to stop making, a metric to replace. Every issue should leave them with something to try, set up, measure or stop.

**Scope.** AI developments across the marketing stack (search and AI answer engines, CRM and lifecycle automation, content production, paid media, analytics and measurement, privacy and consent) are in scope when the essay translates them into this reader's work. General marketing-AI news without that translation belongs in Briefs or nowhere. Developments in the CE sector itself (accreditation rules, credit reporting and discovery tools, clinician research on AI use and trust) are in scope because they change what marketing can promise and measure.

**What it is not.** Not a generic AI-marketing news digest, a martech launch roundup, a vendor's playbook, clinical advice, or an internal memo for one organization. Name no employer, client or reader. Examples from pharma, B2B SaaS or consumer marketing are welcome when the mechanism transfers, but say what changes in a regulated, independence-bound setting.

**Every story answers five questions:**

1. **What changed?** The dated development: a platform feature, an algorithm or policy change, a study, an accreditation update.
2. **How does it work?** The mechanism in plain terms: what the system now does with your page, your data, your audience or your budget.
3. **What evidence supports it?** Measured results, or a vendor claim, or a survey, and which of these it is.
4. **What can go wrong?** For the clinician, the brand, independence, consent, or the measurement itself.
5. **What should I do differently on Monday?** A test, a page, a workflow, a metric, a stop.

## 2. Tone model

The target is the best of the past issues, e.g. Nov 1, 2026 ("Permission to be found. Reasons to be trusted."): calm, independent, evidence-led essays that turn a development into a marketing principle ("Discovery is the outcome; the robots policy is governance") and then into a concrete practice. The voice is that of a senior colleague who has read the primary source and won't oversell it.

- **Name the evidence type in the sentence.** "Publisher-reported survey", "platform claim", "one institution's sample", "a small single-site test". Past issues did this well; keep doing it.
- **Prefer the learner outcome to the marketing metric.** Qualified registrations, starts, completions and properly reported credit beat opens, clicks, impressions and reach. Say which one a step measures.
- **Respect the reader's constraints.** Clinical claims need qualified review, credit wording needs accreditation sign-off, supporters do not touch content. Mention these where they change the decision, once. Don't repeat them as a footer in every essay.
- **Fewer numbers, better ones.** Keep the two or three statistics that carry the argument and put sample sizes in a clause.
- **Write in short, plain sentences for working marketers.** Define a term like "incrementality", "query fan-out" or "consent mode" the first time it appears.

## 3. Issue shape

Marketing AI | Field Notes uses the shared issue shape (title and theme, 4–6 essays each ending in "Try it this week", From the builders, Briefs, optional Research corner, source roster) and is published **Monday, Wednesday and Friday**. Each issue covers what appeared since the previous one (Monday covers Friday through Sunday). Marketing-specific rules:

- **Applied ratio.** At least two-thirds of essays are about tools, workflows, platform changes, tests or measurement a marketing team can act on. At most one essay is about research or sector policy, and it still ends with an action.
- **Mix the stack.** Across an issue, cover different layers. Don't run two search essays and two CRM essays. A good issue touches discovery (search, AI answers, social, partners), conversion and lifecycle (pages, CRM, email), and evidence (measurement, governance, research).
- **Kickers** name the marketing job, e.g. "Search and AI answers", "Lifecycle and CRM", "Content and claims", "Measurement", "Paid media", "Partnerships", "Privacy and consent", "Team and tools", "Sector policy".
- **"Try it this week"** steps are things a marketer can do without an engineer, or with one ticket to one. Each step names the action, the object and how to tell if it worked. Good step types:
  - *A prompt to run*: "Paste your three best-performing activity descriptions into Claude or ChatGPT and ask which questions a clinician would still have before registering. Compare the list with your FAQ." (20 minutes)
  - *A test to set up*: "Split paused learners into the current reminder and a resume-link message. Primary measure: completions per 100 learners at 14 days. Guardrail: unsubscribes." Always state the primary measure, one secondary measure and a guardrail. The past issues' experiment format did this well.
  - *A workflow to automate*: "Add a HubSpot workflow branch that suppresses unfinished-activity reminders the moment the LMS reports completion."
  - *An audit*: "Run your 20 most important clinician questions through Google AI Mode, ChatGPT search and Perplexity, and record whether your page is cited and whether the credit details are correct."
  - *A metric to replace*: "Swap 'email open rate' on the monthly dashboard for 'valid completions per qualified registrant'."
  - *A policy or ownership decision*: "Write down who decides the AI-training setting in robots.txt, separately from who owns SEO."
  Avoid generic steps ("consider AI personalization", "align stakeholders"). Give a time estimate, and say when a step needs clinical or accreditation review.
- **From the builders**: practitioner videos showing marketing work done with AI (an agent that drafts a campaign brief, a GEO audit, a HubSpot or Ads feature walkthrough). Prefer full videos to Shorts. Flag sponsored segments and vendor channels: a vendor demonstrating its own product is a demo, not evidence.
- **Briefs**: platform and policy changes worth knowing, two or three sentences each, e.g. a Google Ads format, a LinkedIn targeting change, a Search Console report, or an accreditation-body notice.
- **Research corner**: clinician-information studies, medical-education trials, search-behavior studies with no direct marketing move yet.

## 4. Marketing lenses

These replace AI Field Notes' systems-engineering lenses. Reach for whichever apply:

- **Measurement and incrementality.** Did the AI change cause the result, or did it just catch people who would have come anyway? Prefer randomized holdouts and matched comparisons over last-touch attribution. Keep acquisition source separate from lifecycle interventions so two programs don't claim the same completion. Measure along the learner path: qualified discovery, registration, start, completion, credit reported.
- **Search and AI-answer visibility.** AI Overviews, AI Mode, ChatGPT search, Perplexity and Copilot. What gets retrieved and cited, citation accuracy (especially credit and eligibility details), zero-click behavior, the difference between indexing controls and AI-training controls, structured data that matches the visible page, and how to measure it (Search Console reports, query audits).
- **Trust, evidence and claims.** Credibility is part of the product: faculty, review dates, references, disclosures, learning objectives and credit details, visible before the registration button. Keep a versioned claims library. Don't let AI write unreviewed clinical assertions or promise credit eligibility.
- **Independence and governance.** Keep marketing operations (distribution) separate from educational governance (substance). Commercial supporters never see learner-level data or influence content. Accreditation-body AI guidance sets the limits on what can be promoted.
- **Data, privacy and consent.** Subscription type vs. permission for each kind of outreach, minimum-necessary data in prompts, no patient information, retention, vendor data terms, state and international privacy rules, and tracking technologies on health-adjacent pages.
- **Workflow and stack integration.** CRM and LMS sharing one vocabulary of learner states and stable activity IDs; deterministic rules for eligibility, consent, suppression and frequency; AI only where judgment helps (drafting, clustering, diagnosis). Which AI features inside the existing stack are worth turning on, and what they need connected first.
- **Content quality vs. volume.** Scaled AI content and keyword pages vs. maintained, reviewed, original material. Search-quality updates punish the former. One approved master asset adapted across channels beats ten unreviewed variants.
- **Channels and partnerships.** Societies, health systems, publishers and conferences. Relationship pipelines measured by qualified collaborations and repeat programs, not list size. Platform ad products (LinkedIn, Google, Meta, Microsoft) and their AI-driven targeting and creative, and what that means for audiences of clinicians.
- **Cost and ROI.** Tool and seat cost, review time, error cost (one wrong credit claim), and the plausible result without AI compared with the plausible result with it.
- **Team and org change.** Who reviews AI output, new roles and skills, shared prompts and context, shadow AI, and how marketing works with the accreditation and education teams.

## 5. Evidence notes specific to marketing

The shared evidence rules apply. In addition:

- **Vendor case studies and "X% lift" claims** (from a platform, agency or martech vendor) are vendor claims. Report them as "HubSpot reports" or "according to Semrush". Ask what the baseline was, whether there was a holdout, how long the test ran, how many customers it covers and which metric moved. Never turn one into a recommendation by itself. Pair it with a test the reader can run.
- **Survey-based reports** (state-of-AI-in-marketing reports, clinician-AI surveys, HCP content benchmarks, trade-association surveys) measure what respondents say, not what they do. Give the sample size and who was asked, note when the publisher sells a related product, and don't generalize beyond the sample (two professions are not "all clinicians"). If the public summary hides the method, say so.
- **Search and AI-visibility studies.** Tool-vendor panels (Ahrefs, Semrush, Similarweb, Seer, SparkToro) describe their own keyword sets and panels. Note the panel, the period and the metric, and expect studies to disagree. Small single-site tests (one site opting out of AI features) are useful as hypotheses, not benchmarks.
- **Platform statements** (Google, Meta, LinkedIn, Microsoft, OpenAI) about ranking, citations or "higher-quality clicks" describe their own systems and interests. They are authoritative about what a feature does and when it ships, not about whether it improves your outcomes.
- **Accreditation and regulatory sources** (ACCME, Joint Accreditation, ANCC, ACPE, FTC, HHS) are primary. Quote dates and the operative requirement exactly. Separate what a rule requires from what an editorial suggestion would add.
- **Medical-education research** (JMIR Medical Education, Journal of Continuing Education in the Health Professions, PubMed-indexed studies): give the design, population, outcome and time horizon. A short-term skills gain in one trial is not evidence of clinical outcomes.
- **Proposed tests are hypotheses.** When an essay recommends an experiment, say that it is a recommendation, not an observed result.

## 6. Continuity

Before choosing stories, run `python3 scripts/fieldnotes.py last` for this newsletter.

**History.** The newsletter ran from Oct 29, 2026 under a different process, at first daily and including weekends, with five essays and a closing "Three experiments to try" block. Edition numbers in past mastheads were inconsistent (the Nov 13 issue said "Issue 13"). This engine starts fresh, going forward only. Past issues are not imported.

**What the past issues did well, keep:** naming evidence types; tying every recommendation to the learner path; experiments with a primary measure, a secondary measure and a guardrail; a "The decision" line per essay (carry it into the principle paragraph); a text description for every diagram.

**What to fix: repetition.** Issues from Nov 9 to Nov 19 kept returning to the same five themes with little new evidence. Don't run these again unless a new, dated development materially advances them, and then say what is new:

- ACCME Fall 2026 Data Updates (Nov 11): state-licensing-board content tags in PARS/JA-PARS and discovery through CME Passport; direct MOC/CC reporting. (Covered Nov 16, 17, 18, 19.)
- ACCME AI guidance (Jan 30), urgent alert on AI in accredited CE (Apr 14), content-validity guidance for AI-enabled clinical learning (Sep 22), and the Standards for Integrity and Independence / supporter separation. (In nearly every issue. Treat as background, link once, don't re-explain.)
- HubSpot learner-state lifecycle: registered, started, paused, completed, credit claimed; completion-aware reminders; suppression after completion. Also the HubSpot Fall 2026 Spotlight. (Nearly every issue.)
- Google Search Central guidance on succeeding in AI search (May 2025, May 2026) and the AI optimization guide; evidence-page and "evidence panel" designs. (Nearly every issue.)
- Wolters Kluwer 2026 Future Ready Healthcare survey (74% of surveyed doctors and 70% of nurses use AI weekly), its Oct 21 clinical-AI trust piece, and its Oct 9 HCP content benchmark. (Nov 1, 16, 19.)
- Faculty preview videos (the "45-second faculty preview" experiment) and Grand Rounds and health-system relationship pipelines. (Repeated as experiments Nov 1 through Nov 19.)
- Also covered once: Google's Oct 30 shared AI-training preference signal in robots.txt (planned for 2027); Search Console generative-AI performance reports (Jun 3); the JMIR Medical Education SOPHIE virtual-patient RCT (Oct 20); the Journal of Surgical Education virtual Grand Rounds survey (2026).

**Fresh directions the past issues underused:** paid media and AI ad formats (ads in AI Mode, AI-generated ad creative, LinkedIn and Meta targeting for clinician audiences); measurement methods (holdouts, incrementality, AI-referral tracking); AI tools for the marketing team itself (shared prompts, agents for briefs and reporting, Claude, ChatGPT and Gemini features); privacy and consent; content production and accessibility (captions, transcripts, translation); conference and event marketing; and what other regulated marketers (pharma, higher education, financial services) are learning.
