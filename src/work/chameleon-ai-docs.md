---
layout: project.njk
title: "Chameleon Concierge: an AI assistant for a research cloud's docs"
summary: "Pitched, supervised and then personally rebuilt a retrieval-augmented generation (RAG) chatbot that answers questions about the Chameleon testbed from its official documentation, and shipped it to the user community."
type: professional
org: Chameleon Cloud, University of Chicago
role: Pilot lead and developer
dates: "Jul 2025 – Jul 2026"
order: 5
featured: true
highlight: "Took a summer prototype to a production RAG app with reranking, evals and user feedback."
technologies: ["RAG", "Llama 3.3 70B", "FAISS", "BGE embeddings + reranker", "Streamlit", "Docker", "Evals", "AI-assisted development"]
metrics:
  - { value: "Llama 3.3 70B", label: "served free through a partner's (TACC) inference API, so no GPU node needed" }
  - { value: "20", label: "question golden set for evaluating answers and retrieval" }
  - { value: "SC'25", label: "poster on the pilot, co-authored with the student I supervised" }
links:
  - { label: "Code on GitHub", url: "https://github.com/ChameleonCloud/RAG-docs-chameleon" }
  - { label: "Chameleon Cloud", url: "https://chameleoncloud.org" }
---

## The problem

Chameleon serves 15,000+ researchers, and its documentation spans bare-metal provisioning, networking, edge devices and a Python library. Finding the right page wasn't always easy, and those questions often became support tickets. I pitched a chatbot grounded in the docs to my manager as a low-risk way to start exploring AI features for the platform, help users get unstuck, and deflect some of that support load.

## My role

I scoped the pilot and supervised a summer student who built the first prototype. When she left, I took over development, rebuilt the app for production, and released it to our users. I did the build pairing with an AI coding assistant.

## Phase 1: the summer prototype (2025)

I guided the scoping, the application stack and the deployment, reviewed the work, and gave feedback. The student built a working RAG prototype with Llama 3.1 through Ollama on a bare-metal GPU node on Chameleon. She also started an evaluation: a 20-question golden set (factual recall, how-to, troubleshooting, conceptual and comparative questions) with reference answers, used to compare 14 RAG configurations against base models. We wrote the work up as a poster at SC'25.

## Phase 2: rebuilding it for production (2026)

- **Cut the infrastructure cost.** I found that TACC, a partner institution, served LLMs to partners for free through an OpenAI-compatible API. I moved inference to Llama 3.3 70B there, which let the app run on an ordinary CPU VM instead of a dedicated GPU node.
- **Rebuilt retrieval for accuracy.** Small chunks of about 400 characters are matched against the question, and their larger surrounding passages (about 2,000 characters) go to the model. I added open-source BGE embeddings, a cross-encoder reranker, and a score cutoff, so the bot says "I don't know" instead of making something up from weak matches.
- **Put official docs first.** Noisy sources like old changelogs and forum threads hurt answers, so I narrowed the index to the official docs plus curated blog posts. Context is split into primary documentation and supplementary material, and the model is told to answer from the docs first.
- **Made quality measurable.** I rebuilt the evaluation around retrieval diagnostics and ran experiments across configurations. One finding: pulling 100 candidates instead of 50 clearly improved the top match, but cost about 13 seconds a query with the reranker on CPU.
- **Closed the feedback loop.** I added thumbs up/down ratings with failure categories, session logging (question, sources, context, answer and latency), and a debug panel showing exactly what the model saw.
- **Shipped it properly.** It's packaged with Docker Compose, a Streamlit UI behind Traefik with automatic HTTPS, and a rebuildable index. It's linked from the Chameleon homepage and documentation site. Before leaving, I wrote a handoff runbook and a roadmap that included an MCP server to answer live questions such as current GPU availability.

## Results

- **Users wanted it.** When we unveiled the assistant at the Chameleon user meeting in April 2026, the response was enthusiastic. It went live to the community shortly after, with about 15–20 early users before I left.
- **It helped win new funding.** We cited the pilot in a proposal for a new NSF grant to build agentic AI workflows into the platform, as evidence that the team could already do this work. That grant brought in $2.5M.
- **It was published.** *Chameleon Concierge: Retrieval-Augmented Generation (RAG) To Enhance Open Testbed Documentation* was presented as a poster at SC'25.

## What I learned

- **Evaluate on real data.** We tested on synthetic questions. I'd now push to use real support tickets, which were plentiful and a far better signal of quality. They could also seed more realistic synthetic questions.
- **Guardrails matter even in a small pilot.** One user pointed out that the bot would happily give a banana bread recipe. Scoping the model to on-topic questions is part of shipping, not polish.
- **Plan for operations from day one.** Usage monitoring and persistent storage across cloud lease renewals were the parts I had to retrofit.
