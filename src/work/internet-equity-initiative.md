---
layout: project.njk
title: "Measuring Chicago's digital divide, one home at a time"
summary: "The Internet Equity Initiative's proof of concept: about 200–250 measurement devices hosted by Chicago residents, the field operations to run them, and public data releases that later became the foundation for FLOTO."
type: professional
org: Internet Equity Initiative, University of Chicago (funded by data.org)
role: Technical Project Manager
dates: "2021 – 2022"
order: 7
featured: false
highlight: "Chicago pilot with ~250 devices that led to the NSF-funded FLOTO platform."
technologies: ["Raspberry Pi", "Python", "AWS S3", "Grafana", "Salt", "Field operations", "Open data"]
metrics:
  - { value: "~250", label: "devices hosted by residents in the Chicago pilot" }
  - { value: "4", label: "public data releases I published (May–Oct 2022)" }
  - { value: "$1.2M", label: "private grant from data.org" }
links:
  - { label: "Public data releases (netrics-data)", url: "https://github.com/internet-equity/netrics-data/releases" }
  - { label: "Internet Equity Initiative", url: "https://internetequity.cs.uchicago.edu" }
  - { label: "data.org story", url: "https://data.org/stories/the-university-of-chicago/" }
  - { label: "UChicago News coverage", url: "https://news.uchicago.edu/story/mapping-digital-divide-data-reveals-internet-inequities-across-country" }
  - { label: "Fox 32 Chicago coverage", url: "https://fox32chicago.com/news/new-analysis-highlights-digital-divide-found-across-chicago-neighborhoods" }
---

## The problem

Policymakers trying to close the digital divide mostly had to rely on what internet providers reported about service. The Internet Equity Initiative, led by Nick Feamster and Nicole Marwell and funded by data.org, set out to measure real home broadband quality with dedicated devices. The goal was to show it could be done across US communities.

## My role

I managed the project's operations, field program and data sharing. When our lead engineer left unexpectedly, I also took over deploying software and setting up new devices.

## What I did

- **Ran a resident-hosted device program.** Volunteers hosted a Raspberry Pi running our measurement software for a couple of months each. I ran the whole lifecycle: recruitment, surveys and consent forms, shipping, easy-install guidance, monitoring during measurement, incentive payouts and returns.
- **Kept the fleet running after our lead engineer left.** I learned the stack in depth: a Python measurement app with configurable tests, on-device processing, uploads to S3, and Salt for orchestration. I deployed software and set up new devices as they went into the field.
- **Built monitoring dashboards.** I built per-device Grafana dashboards and used the Grafana API to partly automate creating them as new devices came online. The team used them to watch incoming data and catch measurement-software problems early.
- **Published the data.** I worked with engineers on a monthly workflow to package new measurements, and published four public releases of the Chicago dataset (October 2021 to September 2022, plus geographic and survey data) on GitHub.
- **Launched the initiative's website** to share findings and promote the data.

## Results

The pilot showed that resident-hosted measurement works, and its data fed research I co-authored, including an IMC '24 paper on Wi-Fi bottlenecks and two 2022 working papers on speed test best practices and measuring internet equity. Findings on Chicago's digital divide drew coverage from UChicago News and Fox 32. The proof of concept and operations playbook became the basis for the NSF proposal that funded [FLOTO](../floto-rollout/).

## What I learned

I didn't track who used the data releases, so I can't say how widely they were used. Students and collaborating researchers were the main users. Today I'd measure adoption from the first release.
