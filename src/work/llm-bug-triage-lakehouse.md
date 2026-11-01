---
layout: project.njk
title: "Can an LLM inside the data platform triage thousands of bug reports?"
summary: "An end-to-end Databricks build on Mozilla's public Firefox bug tracker: raw data to clean tables to a manager's dashboard, then a test of whether open models served in Databricks can route and flag bugs accurately and cheaply."
type: independent
org: Independent project
role: Designed and ran it, building with an AI coding assistant
dates: "Oct – Nov 2026"
order: 2
featured: true
highlight: "79% of unseen bugs routed to the right team, for $0.27 per 1,000."
technologies: ["Databricks", "Unity Catalog", "SQL ai_query()", "MLflow", "AI/BI dashboards", "Genie", "Medallion architecture", "Evals", "Prompt engineering", "Python"]
metrics:
  - { value: "79%", label: "of unseen bugs routed to the right one of 14 teams (chance is about 7%)" }
  - { value: "$0.27", label: "per 1,000 bugs with gpt-oss-120b at list price" }
  - { value: "27,786", label: "Firefox bugs from 2024–2025 taken from raw to dashboard" }
links:
  - { label: "Code and full write-up on GitHub", url: "https://github.com/marcwitasee/llm-deployment-benchmarks/tree/main/03-bug-triage-lakehouse" }
---

## The problem

Support and engineering teams receive thousands of tickets a month. Someone has to read each one, decide which team owns it, and decide how urgent it is. That work is slow and expensive, queues fill up, and managers can't see which teams are falling behind. I used Mozilla's public Firefox bug tracker as a stand-in for that customer and asked two questions:

1. **Visibility:** which teams are keeping up, and which backlogs are growing?
2. **Triage:** can an LLM route new tickets to the right team, and flag the urgent ones, accurately and cheaply?

My earlier projects ran models through outside APIs. This time I wanted to see the whole path inside a data platform, the way many enterprise customers would deploy it.

## What I built

Everything runs on Databricks Free Edition, in Unity Catalog:

- **Ingest:** a Python script pulls bugs from Bugzilla's REST API into a storage volume.
- **Bronze:** 27,786 Firefox and Core defects filed in 2024–2025, loaded as-is.
- **Silver:** robot-filed and bulk-filed test failures removed, and each bug mapped to one of 14 teams through a lookup of 197 components, leaving 16,624 bugs.
- **Gold:** opened, closed, open backlog and median days to close for each team, every week for two years. This feeds an AI/BI dashboard and a Genie agent that answers plain-English questions.
- **AI evaluation:** a reusable SQL harness runs any model and prompt over fixed test sets through `ai_query()`, stores results in a table and logs every run to MLflow.

## How I tested the models

Mozilla's own triagers already filed each bug under a component, so the right team is known. The model sees a bug's title and the start of its description and must name the team exactly. I built two routing test sets of 280 bugs each, with 20 per team so big teams don't dominate. I wrote the improved prompt by studying mistakes on the first set, so the second, untouched set is the fair test. A third set of 100 urgent and 100 non-urgent bugs tested urgency.

## Results

| Model | Prompt v1 | Prompt v2 (targeted rules) | Cost per 1,000 bugs |
| --- | --- | --- | --- |
| **gpt-oss-120b** | 71% | **79%** | **$0.27** |
| Llama 4 Maverick | 70% | 75% | $0.54 |
| gpt-oss-20b | 66% | 73% | $0.15 |

- **The prompt mattered more than the model.** The targeted prompt added 5 to 7.5 points for every model, while going from the smallest model to the largest added about 6. It named the on-screen features each team owns and told the model to use the catch-all team only as a last resort.
- **More context made things worse.** A third prompt pasted in Mozilla's descriptions of 195 components, eight times longer. It scored 69%, and the model more often ran out of output budget while reasoning, leaving 13 answers blank.
- **Cost doesn't decide this one.** Every option costs under $1 per 1,000 bugs, or under $10 a year at Mozilla's volume. The bigger model costs about a fifth of a cent per misroute avoided, so pick on accuracy.
- **Urgency was close to a coin flip.** No model caught more than about half of the urgent bugs. The main cause was the labels: Mozilla rates some bugs urgent because they block a launch, not because users are hurt, while every model flagged crashes Mozilla rated lower.

## What the data itself revealed

The dashboard and the Genie agent surfaced two problems that changed the story:

- **One cleaning rule changed which team looked worst.** About 1,200 test-failure bugs were bulk-filed by a script, 1,004 of them in Layout & CSS. Before I filtered them out, that team looked like the worst performer, with a 35% close rate and a backlog of 1,807. After filtering, it was mid-pack.
- **Close rate counts cleanups as work.** A spike of 76 Graphics closures in one week was mostly "works for me" sweeps, with only 13% actually fixed. A fixed-only close rate is the fairer team metric.

## What I'd tell a customer

- **Route with gpt-oss-120b and a short, targeted prompt, inside the platform.** Keep a person reviewing each team's queue.
- **Don't automate urgency yet.** First decide whether "urgent" means user impact or release priority. No model can be judged until that definition is agreed.
- **Clean the data before you trust the dashboard.** A metric can rank teams wrongly long before any AI is involved.
- **Revisit serving only at high, steady volume.** At these volumes, pay-per-token beats provisioned throughput.

## Limits and next steps

The answer key is where Mozilla's triagers filed each bug, and some components sit between teams, so 100% isn't a realistic ceiling. Free Edition only serves open models, so there's no frontier-model baseline yet. Next, I'd route to the exact component and then map it to a team, add a fixed-only close rate to the gold table, and build a fresh urgency test set once "urgent" has an agreed definition.
