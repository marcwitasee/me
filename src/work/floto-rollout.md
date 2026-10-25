---
layout: project.njk
title: "Deploying a national fleet of broadband measurement devices"
summary: "Took FLOTO, an NSF-funded broadband measurement platform, from zero to more than 1,000 edge devices, running data engagements with State Broadband Offices, internet providers and community groups that needed hard evidence about broadband quality."
type: professional
org: FLOTO, University of Chicago
role: Technical Project Manager, Edge Computing
dates: "2022 – 2026"
order: 5
featured: true
highlight: "0 to 1,000+ devices; data used in FCC challenges and fiber grant applications."
technologies: ["Edge computing", "Raspberry Pi", "OpenBalena", "Kubernetes", "Data pipelines", "Procurement", "Stakeholder engagement"]
metrics:
  - { value: "1,000+", label: "devices deployed nationally, from zero" }
  - { value: "1,200+", label: "computers procured on time and under a $200K budget during a shortage" }
  - { value: "180M", label: "data points processed by the measurement pipelines" }
  - { value: "12+", label: "State Broadband Offices served, among 40+ partners" }
links:
  - { label: "FLOTO project site", url: "https://floto.cs.uchicago.edu" }
  - { label: "Michigan engagement with Merit Network", url: "https://floto.cs.uchicago.edu/2024/03/01/floto-empowers-merit-network-to-challenge-broadband-data-in-michigan" }
  - { label: "FLOTO dataset announcement", url: "https://floto.cs.uchicago.edu/2024/09/18/floto-data-a-broadband-performance-dataset-for-computer-science" }
---

## The problem

Federal broadband maps often overstate the service people actually get. That matters, because homes the FCC counts as unserved or underserved unlock federal money for new infrastructure. State Broadband Offices, internet providers and community groups needed hard, local evidence of broadband quality to support grant applications, map challenges and reports. FLOTO grew out of the [Internet Equity Initiative](../internet-equity-initiative/) pilot in Chicago. Its job was to turn that pilot into a national platform: small computers installed in homes that run regular speed, latency and network tests.

## My role

I ran deployment and operations. I owned the hardware supply chain, the engagements with partners, the field rollout and the data we delivered, while coordinating 40+ partners.

## What I did

- **Bought the fleet during a shortage.** I had been buying Raspberry Pis a few at a time under the earlier grant, so I knew retail channels had tight per-order limits during the 2022 shortage. I knew they would never deliver 1,000+ devices at a sensible price or speed. I researched wholesale vendors, requested estimates, called around for stock, and compared competing quotes. Then I took the purchase through university procurement and got sign-off from all project leadership. We landed 1,200+ computers on schedule and under a $200K budget.
- **Ran each engagement like a deployment.** Every partner started with a need for evidence in a specific area. I worked out their data objectives and timeline, designed the deployment (how many devices, what geographic spread, how long, which measurements), executed it with them, and delivered the data.
- **Found a way to recruit hosts without a marketing budget.** In the Marion County area of Illinois, we had few local partners and no budget for mailers or publicity. So I set up a model where a community-owned internet provider's field engineers asked customers on service calls whether they'd host a device. They installed it on the spot and handled the return two months later. That approach got about 300 devices installed.
- **Ran the fleet at scale.** Each device ran balenaOS, managed through OpenBalena for provisioning, updates and remote access. Kubernetes deployed the containerized measurement software on top, so we could update measurements across the fleet without touching each device. The pipelines processed 180M data points.
- **Delivered decision-ready data,** including a validated broadband quality dataset delivered a month ahead of deadline.

## Results

- **Michigan:** about 15 devices across a small island produced data that triggered an FCC reassessment of the community's broadband, a step toward more infrastructure funding.
- **Illinois:** the Marion County data backed a community-owned provider's grant application to build out fiber in the region.
- **Across engagements:** more than half of measured locations fell below federal broadband thresholds, evidence that those homes qualified as unserved or underserved.
- **Scale:** the platform grew from zero to more than 1,000 devices serving over a dozen State Broadband Offices. Its design is described in our e-Science '23 paper, *Discovery Testbed: An Observational Instrument for Broadband Research*.

## What I learned

- **Know the market before you need it.** Buying small batches early is what told me the retail route would fail at scale.
- **When you can't buy reach, borrow it.** The field-engineer model came from asking who was already knocking on the doors we needed.
