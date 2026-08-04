---
title: "Cloudflare Workers - Global Serverless Functions Platform"
description: "Deploy serverless functions globally in seconds. No cold starts, 330+ cities, infinite concurrency, and pay only for CPU time. Support for JavaScript, TypeScript, Python, and Rust."
url: "https://www.cloudflare.com/products/workers"
---

# Workers

> Cloudflare Workers are fast, elastic, and serverless functions that scale automatically from zero to millions of requests.

## Key Features

- Zero cold starts with V8 isolates
- Deploy to 330+ cities globally
- JavaScript, TypeScript, Python, Rust, and WASM support
- Native integration with R2, D1, KV, Queues, and Workers AI
- CPU-time based billing (not wall-clock time)
- Cron Triggers for scheduled tasks
- Gradual rollouts and instant rollbacks

## Benefits

### Only pay for what you use

Pay only for execution time ([CPU time](https://developers.cloudflare.com/workers/platform/limits/#cpu-time)), not idle time spent waiting on I/O.

### Near your users, or your data

Deploy once, run in Cloudflare's 330+ cities by default, or use [Smart Placement](https://developers.cloudflare.com/pages/functions/smart-placement/) to run near your data, to minimize end-to-end latency.

### No cold starts

Don't keep users waiting, or spend your time on prewarming rube-goldberg machines.

### Infinite concurrency without the markup

No need to pay for pre-provisioned concurrency. Just scale up based on demand on your big launch days, no matter how many concurrent users you get.

### First-class local development

Workers allows you to fully test your changes locally and allow you to get in the flow, ahead of pushing your changes with [workerd](https://github.com/cloudflare/workerd), our open-source runtime.

### Write in code JS, TS, Python or Rust

Choose from a template in your language to kickstart building an app.

## Use Cases

### Build scalable APIs

Handle billions of requests with automatic scaling and global deployment. No load balancers, no capacity planning, no regional configuration.

### Deploy complete web applications

Ship React, Vue, or Next.js apps integrated backend logic, databases, and storage. Full-stack development without infrastructure management.

### Run serverless functions at the edge

Handle authentication, rate limiting, routing, caching logic near your users. Reduce latency and reduce load on your server by offloading processing to Workers.

### Run business logic and background jobs

Handle webhooks, process data, and run scheduled tasks with built-in Queues, Workflows, and Cron Triggers. Reliable automation without server babysitting.

## Resources

- [Full Documentation](https://developers.cloudflare.com/workers/): Complete technical documentation
- [Get Started](https://dash.cloudflare.com/sign-up): Sign up and start building
- [Pricing](/plans.md): See pricing details

## Related Products

- [Browser Run](/products/browser-rendering.md): Automated browsers
- [Cloudflare Pages](/products/pages.md): Build & deploy frontend sites
- [Containers](/products/containers.md): Any language, anywhere
- [Durable Objects](/products/durable-objects.md): Stateful compute

---

*This is a markdown version of [https://www.cloudflare.com/products/workers](https://www.cloudflare.com/products/workers) for AI/LLM consumption.*
