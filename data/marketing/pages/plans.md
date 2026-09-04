---
title: "Pricing - Cloudflare Developer Platform"
description: "Cloudflare Developer Platform pricing - simple, transparent, usage-based pricing with generous free tiers"
url: "https://www.cloudflare.com/plans"
---

# Cloudflare Developer Platform Pricing

> Simple, transparent pricing that scales with your usage. Start free, pay as you grow.

Cloudflare offers generous free tiers for most services, with usage-based pricing that scales with your needs. No egress fees, no hidden costs.

## Compute

### [Workers](https://developers.cloudflare.com/workers/)

Serverless functions that run everywhere, instantly

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Requests | 100k / day | $0.30 / million requests |
| CPU Time | 10 ms / request | $0.02 / million CPU ms |

### [Containers](https://developers.cloudflare.com/containers/)

Run any language in secure, global containers (also applies to Sandboxes)

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Memory | 25 GiB-hrs included | $0.0000025 / GiB-second |
| CPU | 375 vCPU-min included | $0.000020 / vCPU-second |
| Disk | 200 GB-hrs included | $0.00000007 / GB-second |
| Network Egress (NA/EU) | 1 TB included | $0.025 / GB |

### [Workers for Platforms](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/)

Deploy Workers on behalf of your customers

| Component | Price |
|-----------|-------|
| Requests | $0.30 / million requests |
| CPU Time | $0.02 / million CPU ms |
| Scripts Deployed | $0.02 / script |

### [Durable Objects](https://developers.cloudflare.com/durable-objects/)

Stateful compute for real-time coordination

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Requests | 100,000 requests / day | $0.15 / million requests |
| Duration | 13,000 GB-s / day | $12.50 / million GB-s |
| SQL Rows Read | 50M / day | $0.001 / million rows |
| SQL Rows Written | 100K / day | $1.00 / million rows |
| SQL Stored Data | 5 GB | $0.20 / GB-month |
| Read Request Units (KV Storage Backend) | — | $0.20 / million rows |
| Write Request Units (KV Storage Backend) | — | $1.00 / million rows |
| Delete Request Units (KV Storage Backend) | — | $1.00 / million rows |
| Stored Data (KV Storage Backend) | 1 GB | $0.20 / GB-month |

### [Browser Rendering](https://developers.cloudflare.com/browser-rendering/)

Spin up headless, programmable web browsers

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Browser Hours | 10 min / day | $0.09 / hour |
| Concurrent Browsers | 3 browsers | $2.00 / browser |

### [Workflows](https://developers.cloudflare.com/workflows/)

Orchestrate complex multi-step processes

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Requests | 100k / day | $0.30 / million requests |
| CPU Time | 10 ms / invocation | $0.02 / million CPU ms |
| Storage | 1 GB | $0.20 / GB-month |

### Dynamic Workers

Spin up Workers at runtime to execute code on-demand

| Component | Price |
|-----------|-------|
| Dynamic Workers | $0.002 / Dynamic Worker |

## Storage & Data

### [R2](https://developers.cloudflare.com/r2/)

Object storage without egress fees

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Standard Storage | 10 GB-month | $0.015 / GB-month |
| Standard Class A operations | 1 million | $4.50 / million requests |
| Standard Class B operations | 10 million | $0.36 / million requests |
| Infrequent Access Storage | — | $0.01 / GB-month |
| Infrequent Access Class A operations | — | $9.00 / million requests |
| Infrequent Access Class B operations | — | $0.90 / million requests |
| Infrequent Access Data Retrieval | — | $0.01 / GB |

### [Workers KV](https://developers.cloudflare.com/kv/)

Lightning-fast key-value storage

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Stored Data | 1 GB | $0.50 / GB-month |
| Read Requests | 100,000 / day | $0.50 / million requests |
| Write, Delete, List requests | 1,000 / day | $5.00 / million requests |

### [D1](https://developers.cloudflare.com/d1/)

Serverless SQL that scales horizontally

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Storage | 5 GB (total) | $0.75 / GB-month |
| Rows Read | 5 million / day | $0.001 / million rows |
| Rows Written | 100,000 / day | $1.00 / million rows |

### [Artifacts](https://developers.cloudflare.com/artifacts/)

Versioned, Git-compatible storage for agents

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Operations (1,000 operations) | Coming Soon | $0.15 / 1,000 operations, first 10,000 / month included |
| Storage (GB-month) | Coming Soon | $0.50 / GB-month, first 1 GB / month included |

### [Queues](https://developers.cloudflare.com/queues/)

Reliable message processing

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Standard Operations | 10,000 operations/day included | $0.40 / million operations |

### [Hyperdrive](https://developers.cloudflare.com/hyperdrive/)

Make any database global instantly

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Queries | 100,000 / day | Free |

### [Workers Analytics Engine](https://developers.cloudflare.com/analytics/analytics-engine/)

Time-series analytics at scale

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Data Points Written | 100,000 / day | $0.25 / million data points |
| Read Queries | 10,000 / day | $1.00 / million read queries |

### [Pipelines](https://developers.cloudflare.com/pipelines/)

Transform and route data streams

| Component | Price |
|-----------|-------|
| Ingestion | TBD (free during beta) |
| Delivery to R2 | TBD (free during beta) |

## Media

### [TURN / SFU](https://developers.cloudflare.com/realtime/)

WebRTC infrastructure for real-time communication

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Data Egress | 1,000 GB / month | $0.05 / GB |

### [RealtimeKit](https://developers.cloudflare.com/realtime/realtimekit/)

Serverless WebRTC conferencing

| Component | Price |
|-----------|-------|
| Audio/Video Participant | $0.002 / minute |
| Audio-Only Participant | $0.0005 / minute |
| Export (recording, RTMP or HLS streaming) | $0.010 / minute |
| Export (recording, RTMP or HLS streaming, audio only) | $0.003 / minute |
| Export (Raw RTP) into R2 | $0.0005 / minute |
| Transcription (Real-time) | Standard model pricing via Workers AI |

### [Images](https://developers.cloudflare.com/images/)

Transform and optimize at scale

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Unique Transformations | 5,000 / month | $0.50 / thousand |
| Images Stored | — | $5.00 / hundred thousand |
| Images Delivered | — | $1.00 / hundred thousand |

### [Stream](https://developers.cloudflare.com/stream/)

Video hosting and live streaming

| Component | Price |
|-----------|-------|
| Minutes Stored | $5.00 / thousand minutes |
| Minutes Delivered | $1.00 / thousand minutes |

## AI

### [Vectorize](https://developers.cloudflare.com/vectorize/)

Vector database for semantic search

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Vector Dimensions Queried | 30M queried dimensions / month | $0.01 / million |
| Vector Dimensions Stored | 5M stored dimensions | $0.05 / hundred million |

### [Workers AI](https://developers.cloudflare.com/workers-ai/)

50+ models running at the edge

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Neurons | 10,000 neurons / day | $0.011 / thousand neurons |

## Observability

### [Workers Logs](https://developers.cloudflare.com/workers/observability/)

Monitor Workers performance

| Component | Free Tier | Price |
|-----------|-----------|-------|
| Events | 200k / day | $0.60 / million events |

### [Workers Logpush](https://developers.cloudflare.com/workers/observability/logpush/)

Push Workers logs to external destinations

| Component | Price |
|-----------|-------|
| Requests | $0.05 / million requests |

## Other Services

### [Workers Builds](https://developers.cloudflare.com/workers/)

Build Workers at scale

| Component | Price |
|-----------|-------|
| Build Minutes | $0.005 / minute |

### [Zaraz](https://developers.cloudflare.com/zaraz/)

Third-party tool manager

| Component | Price |
|-----------|-------|
| Events | $5.00 / million events |

## Free Tier Summary

Many Cloudflare services include generous free tiers:

| Service | Free Tier Highlights |
|---------|---------------------|
| Workers | Requests: 100k / day, CPU Time: 10 ms / request |
| Containers | Memory: 25 GiB-hrs included, CPU: 375 vCPU-min included, Disk: 200 GB-hrs included, Network Egress (NA/EU): 1 TB included |
| Durable Objects | Requests: 100,000 requests / day, Duration: 13,000 GB-s / day, SQL Rows Read: 50M / day, SQL Rows Written: 100K / day, SQL Stored Data: 5 GB, Stored Data (KV Storage Backend): 1 GB |
| Browser Rendering | Browser Hours: 10 min / day, Concurrent Browsers: 3 browsers |
| Workflows | Requests: 100k / day, CPU Time: 10 ms / invocation, Storage: 1 GB |
| R2 | Standard Storage: 10 GB-month, Standard Class A operations: 1 million, Standard Class B operations: 10 million |
| Workers KV | Stored Data: 1 GB, Read Requests: 100,000 / day, Write, Delete, List requests: 1,000 / day |
| D1 | Storage: 5 GB (total), Rows Read: 5 million / day, Rows Written: 100,000 / day |
| Artifacts | Operations (1,000 operations): Coming Soon, Storage (GB-month): Coming Soon |
| Queues | Standard Operations: 10,000 operations/day included |
| Hyperdrive | Queries: 100,000 / day |
| Workers Analytics Engine | Data Points Written: 100,000 / day, Read Queries: 10,000 / day |
| TURN / SFU | Data Egress: 1,000 GB / month |
| Images | Unique Transformations: 5,000 / month |
| Vectorize | Vector Dimensions Queried: 30M queried dimensions / month, Vector Dimensions Stored: 5M stored dimensions |
| Workers AI | Neurons: 10,000 neurons / day |
| Workers Logs | Events: 200k / day |

## Get Started

- [Sign up](https://dash.cloudflare.com/sign-up): Create a Cloudflare account and start with the free tier
- [Documentation](https://developers.cloudflare.com/): Read the full documentation
- [Pricing Calculator](https://dash.cloudflare.com/): Estimate costs in the dashboard

## Enterprise

For enterprise needs:
- Custom pricing and volume discounts
- Dedicated support with SLA guarantees
- Advanced analytics and compliance features
- Contact [sales](https://www.cloudflare.com/plans/enterprise/contact/) for details

---

*This is a markdown version of [https://www.cloudflare.com/plans](https://www.cloudflare.com/plans) for AI/LLM consumption.*
