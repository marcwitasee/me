---
layout: project.njk
title: "Making the case to expand an AI support deployment"
summary: "A hypothetical account review for a retailer whose fine-tuned support chatbot had just gone into production: an internal dashboard for the vendor's team, a customer-facing dashboard for the retailer's executives, and an executive briefing recommending how to expand to four more brands."
type: independent
org: Case study (hypothetical scenario)
role: Built it end to end, with an AI coding assistant
dates: "Sep 2026"
order: 1
featured: true
highlight: "Two dashboards and an executive briefing from one dataset, each tuned to its audience."
technologies: ["Streamlit", "Plotly", "Python", "Account health scoring", "Executive business reviews", "Fine-tuning and RAG architecture", "AI-assisted development"]
metrics:
  - { value: "2", label: "dashboards from one dataset: internal and customer-facing" }
  - { value: "89.3", label: "account health score, with a transparent target-based method" }
  - { value: "7", label: "slide executive briefing with a gated, one-brand-first expansion plan" }
---

<p class="note"><strong>A hypothetical scenario.</strong> This was a take-home exercise for an AI deployment role. The company, its brands and all 31 days of data are fictional. The analysis and design choices are my own.</p>

## The scenario

An AI inference provider had helped a retail group (fictional "Northstar") move a fine-tuned customer support chatbot from proof of concept to production for its flagship brand. The deployment combined one fine-tuned model, a brand-specific system prompt and a RAG layer over the product catalog. A month in, it handled about 70% of Tier-1 support, cut handle time by 35% and lifted CSAT by 12 points. The group owns four more brands, each with its own catalog, tone, policies and support tools.

The task was to judge the account's health and make a credible case for expansion. That meant three deliverables built from the same 31 days of usage, spend, reliability and quality data:

- an **internal account review dashboard** for the provider's account, engineering and leadership teams
- a **customer-facing dashboard** for the retailer's VPs of Customer Experience and Engineering
- an **executive business review** with an expansion recommendation

## What I built

**One Streamlit app with two views over the same data.** Both views share every calculation, so the numbers always agree. What changes is what each audience sees.

<figure>
  <img src="{{ '/images/ai-deployment-customer-view.png' | url }}" alt="Customer-facing dashboard showing automation rate, handle time, CSAT and a stacked chart of automated vs human-handled tickets" loading="lazy">
  <figcaption>The customer view leads with business outcomes and shows the trend honestly: 70.8% is the endpoint, while the period average is 67.9%.</figcaption>
</figure>

- **The customer view answers "Is this delivering value, and can we trust it?"** It leads with automation, handle time and CSAT, then cost, reliability and quality, and ends with a proposed next step. It shows "Deployment health: strong" instead of a numeric score, and it never exposes margin, budget assumptions, competitive notes or internal confidence.
- **The internal view answers "What do we need to do about this account?"** It adds the full health scorecard, spend against budget, a cost breakdown, a risk register, account context (support burden, dependencies, competitive risk, decisions needed), an expansion pipeline with blockers for each brand, and next actions with owners and dates.
- **I didn't hide the unflattering numbers.** Cost per ticket rose from about $0.007 to $0.010 over the month. The customer view shows that trend with its cause: conversations took more requests while the cost per request stayed flat at about $0.0015. Blended handle time and CSAT carry footnotes, since part of the improvement comes from the mix of bot and human tickets.

## A health score that says something

<figure>
  <img src="{{ '/images/ai-deployment-health-score.png' | url }}" alt="Internal account health scorecard showing a composite score of 89.3 and four dimension scores, with a rising score trajectory" loading="lazy">
  <figcaption>The internal scorecard: four equally weighted dimensions, each tied to explicit targets.</figcaption>
</figure>

My first version used green, yellow and red thresholds and scored the account 99.2. A number that high can't tell anyone where to focus, so I rebuilt it. Each metric is now scored by how close its trailing 7-day average is to a business target, such as 80% automation, 8% escalation, a 1,200 ms P95 latency and 99.95% availability. These roll up into four equally weighted dimensions: quality 96, reliability 84, adoption 79 and cost 98.

The composite of 89.3, up from 82 over the month, puts the real gaps on the table: escalation, error rate and tail latency. It also backs up the "still improving" story behind the expansion case.

## The expansion recommendation

<figure>
  <img src="{{ '/images/ai-deployment-risks-pipeline.png' | url }}" alt="Internal view of account context, a risk register and an expansion pipeline across four brands" loading="lazy">
  <figcaption>Risks, dependencies and readiness for each brand: the material for planning the expansion internally.</figcaption>
</figure>

- **Expand, but one brand first.** The briefing recommends a 30-day pilot on the brand closest to the flagship in catalog size, policies and tooling. The pilot has explicit pass/fail gates: automation of at least 70%, grounding of at least 92%, escalation of at most 15%, no P95 latency regression and stable CSAT.
- **Use a shared fine-tuned model with brand-specific context.** I compared three options: a separate fine-tuned model per brand, one generic model, and the flagship model shared with a system prompt and RAG index for each brand. The shared model wins on training cost and maintenance while keeping each brand's catalog and policies separate.
- **Name the biggest risk.** Quality could slip as the model meets new catalogs and policies, just as leadership comes to expect flagship results. The mitigation is quality gates at each milestone, a 24-hour rollback to human-only routing, and launching on a narrow set of ticket types first.
- **Fix what doesn't scale before scaling.** A manual catalog sync caused an early-August incident, and that kind of manual work multiplies with every brand. Automating the catalog and policy pipeline has to come before going past two brands.

## What I'd change

Going back over the data afterward, I'd sharpen two points in the briefing:

- **Cost per ticket rose about 50%, not "flat."** The cost per request held steady, but requests per resolved ticket climbed from 6.6 to 9.2. That could mean the bot is finishing harder conversations, or it could mean wasted calls such as retries. I'd present the number up front and say how I'd test which explanation is right.
- **Escalation is the weakest metric**, at 11.2% against an 8% target. I'd also note that about a fifth of tickets were neither automated nor escalated, and the data doesn't show what happened to them.
