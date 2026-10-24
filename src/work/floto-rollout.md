---
layout: project.njk
title: "Deploying a national fleet of broadband measurement devices"
summary: "Took FLOTO, an NSF-funded broadband measurement platform, from zero to more than 1,000 edge devices for over a dozen State Broadband Offices, and turned its data into evidence that unlocked fiber funding."
type: professional
org: FLOTO, UChicago Data Science Institute
role: Technical Project Manager, Edge Computing
dates: "Oct 2021 – Oct 2023"
order: 5
featured: true
highlight: "0 to 1,000+ devices; data that helped unlock $20M in funding revisions."
technologies: ["Edge computing", "Raspberry Pi", "Kubernetes", "Data pipelines", "Procurement", "Field operations"]
metrics:
  - { value: "1,000+", label: "devices deployed nationally, from zero" }
  - { value: "180M", label: "data points processed by the measurement pipelines" }
  - { value: "1,200+", label: "computers procured under a $200K budget" }
  - { value: "$20M", label: "in funding revisions supported by FLOTO data" }
links:
  - { label: "FLOTO project site", url: "https://floto.cs.uchicago.edu" }
  - { label: "FLOTO data portal", url: "https://portal.floto.science/dashboard/data" }
  - { label: "Dataset announcement", url: "https://floto.cs.uchicago.edu/2024/09/18/floto-data-a-broadband-performance-dataset-for-computer-science" }
---

## The problem

Federal broadband maps often overstate the service people actually get, and State Broadband Offices needed real-world performance data to decide where to direct funding. FLOTO's answer was a fleet of small computers installed in homes and buildings that run regular speed, latency and network tests. It needed to go from a research prototype to a national deployment.

## My role

I directed deployment and operations. I owned the hardware supply chain, the rollout with partners and field engineers, the data delivered to clients, and the funding that kept the program growing. I coordinated 40+ partners and managed about $3M in total project funding.

## What I did

- **Procured the fleet under pressure.** I sourced 1,200+ computers (Raspberry Pi 4s) for launch on a tight timeline with a $200K budget. Despite unforeseen supply shortages, I hit the deadlines and came in under budget.
- **Scaled installation through partners.** I scoped measurement needs with State Broadband Offices for federal grant programs and set up a strategy that used field engineers as local ambassadors. That approach installed 300 devices regionally.
- **Built the data pipelines** that processed 180M data points from the fleet. Software was deployed to the devices with Kubernetes.
- **Delivered decision-ready data.** I delivered a validated broadband quality dataset a month ahead of deadline.
- **Grew the program.** I built dozens of multi-institutional partnerships and co-authored a successful grant proposal, securing $1.5M to scale the infrastructure 5x.

## Results

The dataset showed that more than half of measured locations fell below federal broadband thresholds. That evidence helped secure grant funding for regional fiber deployment and funding revisions totaling $20M. The platform grew from zero to more than 1,000 devices serving over a dozen State Broadband Offices, and its architecture is described in an e-Science '23 paper.
