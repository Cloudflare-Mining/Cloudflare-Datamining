---
title: "Cloudflare - Global Serverless Platform"
description: "Deploy serverless code instantly across the globe with zero cold starts, infinite scalability, and integrated storage, AI, and network services."
url: "https://www.cloudflare.com"
---

# Cloudflare

> Deploy serverless code instantly across the globe with zero cold starts, infinite scalability, and integrated storage, AI, and network services.

## What is Cloudflare Workers?

Cloudflare Workers is a serverless platform that runs your code on Cloudflare's global network of 330+ data centers. Unlike traditional serverless platforms that use containers, Workers uses V8 isolates for instant startup times with no cold starts.

## Key Features

- **Zero Cold Starts**: Code starts executing immediately using V8 isolates
- **Global by Default**: Deploy once, run in 330+ cities worldwide
- **Multiple Languages**: JavaScript, TypeScript, Python, Rust, and WASM
- **Integrated Platform**: Storage (R2, D1, KV), AI (Workers AI), and network services built-in
- **Pay for What You Use**: CPU-time based billing, not wall-clock time

## Products

### Compute
- [Workers](/products/workers.md): Global serverless functions
- [Containers](/products/containers.md): Any language, anywhere
- [Durable Objects](/products/durable-objects.md): Stateful compute
- [Browser Rendering](/products/browser-rendering.md): Automated browsers
- [Workflows](/products/workflows.md): Process orchestration

### Storage
- [R2](/products/r2.md): Egress-free object storage
- [Hyperdrive](/products/hyperdrive.md): Global database acceleration
- [D1](/products/d1.md): Serverless SQL
- [KV](/products/kv.md): Key-value storage
- [Queues](/products/queues.md): Message processing

### AI
- [Workers AI](/products/workers-ai.md): Edge AI models
- [AI Gateway](/products/ai-gateway.md): AI observability
- [Vectorize](/products/vectorize.md): Vector database
- [AI Search](/products/ai-search.md): Instant retrieval

### Media
- [Images](/products/images.md): Image optimization
- [Stream](/products/stream.md): Video streaming
- [RealtimeKit](/products/realtime.md): Live communications

### Network
- [DNS](/products/dns.md): Fast DNS
- [CDN](/products/cdn.md): Content delivery
- [WAF](/products/waf.md): Application protection
- [Load Balancing](/products/load-balancing.md): Zero downtime
- [Rate Limiting](/products/rate-limiting.md): Abuse prevention
- [Bot Mitigation](/products/bot-mitigation.md): Block bots

## Getting Started

1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com/sign-up)
2. Install the CLI: `npm install -g wrangler`
3. Create a project: `wrangler init my-worker`
4. Deploy: `wrangler deploy`

## Resources

- [Documentation](https://developers.cloudflare.com/workers/): Full technical docs
- [Pricing](/plans.md): See what it costs
- [Discord](https://discord.cloudflare.com): Community support

---

*This is a markdown version of [https://www.cloudflare.com](https://www.cloudflare.com) for AI/LLM consumption.*
