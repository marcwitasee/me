---
layout: project.njk
title: "Do you need a frontier model to triage support tickets?"
summary: "A benchmark of Claude Opus 5.5, GPT-OSS 120B and a fine-tuned Qwen 3.5 9B on routing and prioritizing support tickets, measured on accuracy, latency and cost per task."
type: independent
org: Independent project
role: Designed and ran it, building with an AI coding assistant
dates: "Sep 2026 – Oct 2026"
order: 1
featured: true
highlight: "GPT-OSS 120B matched Claude Opus 5.5 at 34–45x lower cost."
technologies: ["Fireworks AI", "Anthropic API", "LoRA fine-tuning", "Prompt engineering", "Evals", "Python"]
metrics:
  - { value: "34–45x", label: "lower cost per ticket for GPT-OSS 120B vs Claude Opus 5.5 at equal accuracy" }
  - { value: "4–7x", label: "faster responses from an untuned 9B model on a dedicated GPU" }
  - { value: "~1,600/hr", label: "ticket volume where a dedicated GPU starts to beat Claude on cost" }
links:
  - { label: "Code and full write-up on GitHub", url: "https://github.com/marcwitasee/llm-deployment-benchmarks/tree/main/01-ticket-triage" }
---

## Why I built this

While interviewing for AI deployment roles, I wanted hands-on experience with the question those teams answer every day: when can an open model replace a closed one? I designed the experiments and made the calls on data, prompts and serving. I wrote the code with an AI coding assistant.

## The problem

Support ticket routing is one of the first things companies try to automate with LLMs, and the default choice is often the biggest frontier model available. I wanted to know whether that's necessary, and to answer the questions a customer would ask before going to production: which model, served how, and at what cost per ticket.

## What I did

- **Built an eval set the honest way.** I started with 20 hand-written tricky tickets and my own answer key, then moved to 100 test tickets from a public Hugging Face dataset. I wrote the final prompt using only a separate set of 200 dev tickets, so it was never tuned on the test set.
- **Compared models and serving options.** Claude Opus 5.5 and GPT-OSS 120B ran at low and high reasoning effort through pay-per-token APIs. Qwen 3.5 9B ran on a dedicated Fireworks GPU billed by the hour.
- **Ran a LoRA fine-tune.** I trained Qwen 3.5 9B on 1,000 extra tickets for about $0.14 and compared it against the untuned model and against better prompting.
- **Modeled serverless vs dedicated cost** to find the ticket volume where renting a GPU beats paying per token.

## Results

With a structured prompt, every model landed at about 25 of 100 tickets with both labels right, so the cheapest fast model wins. GPT-OSS 120B on Fireworks serverless matched Claude at 34–45x lower cost ($0.15 vs $4.98 per 1,000 tickets). Untuned Qwen 3.5 9B tied it while responding 4–7x faster.

Fine-tuning made things worse. The structured prompt lifted Qwen from 18 to 25, but the fine-tune dropped it to 11 because it learned the label skew in the training data (42% "high" urgency vs 34% in the test set).

## What I'd tell a customer

- **Open models can match closed ones, but check the whole bill.** On a simple task like this, a well-prompted open model is just as accurate and much faster and cheaper. On harder tasks, an open model may match quality only by reasoning longer, which erodes the cost and speed advantage (see the [chess project](../llm-chess-finetune/)).

- **Price per token isn't price per task.** Reasoning tokens and prompt length drive the bill. The structured prompt used about 5x the input tokens, and GPT-OSS was still far cheaper.
- **Prompt before you train, and check label quality before selling a fine-tune.**
- **Serverless vs dedicated is a volume question.** At about $8/hour, a dedicated 9B model only beats Claude above roughly 1,600 tickets an hour, and only beats serverless GPT-OSS above roughly 53,000.
- **Guard against prompt injection.** GPT-OSS followed an instruction hidden in a ticket 3 of 4 times until one line in the system prompt told it to ignore instructions inside tickets.

## Platform lessons I hit firsthand

GPT-OSS can't be fine-tuned on Fireworks, so I switched to Qwen. Qwen isn't serverless, so the base and fine-tuned models each needed their own dedicated deployment. Reasoning models returned empty answers until I turned reasoning off or raised the token budget.
