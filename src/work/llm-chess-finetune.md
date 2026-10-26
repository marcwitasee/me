---
layout: project.njk
title: "Where fine-tuning stops helping: teaching a small model chess"
summary: "Fine-tuned Qwen 3.5 9B on 73,000 engine-labeled chess positions to test whether clean labels can teach a small model to reason, and compared it with Claude Opus 5.5 and open frontier models."
type: independent
org: Independent project
role: Designed and ran it, building with an AI coding assistant
dates: "Oct 2026"
order: 2
featured: true
highlight: "Fine-tuning doubled legal moves but never improved move quality."
technologies: ["Fireworks AI", "LoRA fine-tuning", "Evals", "Data cleaning", "Python", "python-chess"]
metrics:
  - { value: "36% → 71%", label: "legal-move rate after fine-tuning on 73k positions" }
  - { value: "3%", label: "best-move accuracy, no better than a random legal move" }
  - { value: "$1.49", label: "cost of the 73k-example LoRA fine-tune" }
links:
  - { label: "Code and full write-up on GitHub", url: "https://github.com/marcwitasee/llm-deployment-benchmarks/tree/main/02-chess" }
---

## Why chess

I love the game, and it's a great window into what LLMs can and can't do. Models now play each other in public matches, and you can watch how much their play depends on reasoning.

## The problem

My [ticket triage benchmark](../llm-ticket-triage/) found that fine-tuning made a small model worse, but the labels were noisy, so it couldn't tell whether the method or the data was at fault. Chess has perfect labels: a chess engine (Stockfish) gives the best move for every position. That made it a clean test of what fine-tuning can and can't teach.

## What I did

- **Built a leak-free dataset.** I used positions from the Lichess evaluations dataset. The model sees only the board (a FEN string), and the label is the engine's best first move. I left out engine scores and search depth so the input couldn't give the answer away.
- **Cleaned the data carefully.** Duplicate rows turned out to be the engine's ranked candidates at different search depths. My first labeling rule got 477 of 14,571 positions wrong, so I rewrote it to take the deepest search, then the best score for the side to move. I also normalized Lichess's king-takes-rook castling notation and dropped Chess960 positions.
- **Fine-tuned twice on Fireworks** with LoRA: on 14,069 positions ($1.37), then on 72,955 ($1.49). The same 499 held-out test positions were used throughout so results stayed comparable.
- **Compared against frontier models,** including Claude Opus 5.5 and Ember-1, a frontier-class open model on Fireworks.

## Results

More data improved legality, not play. Legal moves rose from 18 to 31 to 38 of 50 as the training set grew, but best-move accuracy stayed flat at about 3%. A random legal move would find the best move about 6% of the time. The model learned where its pieces are, not how to choose a good move.

Only a frontier-class open model matched Claude. Ember-1 tied Claude Opus 5.5 (12 vs 13 best moves out of 50), but it reasoned about 4x longer, so it was about 4x slower and more expensive per move. The fine-tuned 9B model answered in about 0.35 seconds, against 6.7 seconds for Claude at low effort.

## What I'd tell a customer

- **Fine-tune for format, not for reasoning.** Training on answer-only data teaches the shape of the output. It doesn't teach the search an engine does, and it can remove reasoning a model already had.
- **A lower price per token doesn't mean a cheaper answer.** A model that reasons 4x longer can cost more per task than a pricier one.
- **Data details decide the result.** Notation quirks and duplicate rows would have quietly corrupted both training and scoring.
