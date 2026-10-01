---
title: "Cloudflare Queues - Managed Message Queue Service"
description: "A managed message queue service for reliable, asynchronous message delivery between Cloudflare Workers or to services built anywhere."
url: "https://www.cloudflare.com/products/queues"
---

# Queues

> Cloudflare Queues enables reliable, asynchronous message delivery between Cloudflare Workers — or to services built anywhere.

## Key Features

- Reliable message delivery
- Batching and delays
- Automatic retries
- Dead-letter queues
- Pull-based consumers
- Event subscriptions
- Built-in observability

## Benefits

### Asynchronous Message Processing

Queues help developers offload work from the request path so users don't have to wait, enabling reliable and asynchronous message handling.

### Built for Workers Platform

Seamlessly integrated with Cloudflare Workers for easy setup and management within your existing workflow.

### Event Subscriptions

Get notified and take action programmatically through Workers by using Queues to subscribe to events from KV, Cloudflare Workers, R2, Workers AI, and Vectorize.

## Use Cases

### ETL Pipelines

Reliably buffer large volumes of data for your ETL pipelines without overwhelming your databases or data warehouses. Ensure no data is lost during traffic spikes and process information at a manageable, consistent pace.

### Asynchronous user-lifecycle tasks

Offload time-consuming user-lifecycle tasks like sending welcome emails or processing profile pictures to a background worker. Keep your application's user interface fast and responsive by handling these jobs asynchronously.

### Web crawlers

Build distributed and resilient web crawlers by using Queues to manage the list of URLs to be fetched and processed. Easily scale your crawling infrastructure by adding more consumers and automatically retry failed jobs to ensure comprehensive data collection.

## Resources

- [Full Documentation](https://developers.cloudflare.com/queues/): Complete technical documentation
- [Get Started](https://dash.cloudflare.com/sign-up): Sign up and start building
- [Pricing](/plans.md): See pricing details

## Related Products

- [Artifacts](/products/artifacts.md): Git-native versioned storage
- [Cache Reserve](/products/cache-reserve.md): Persistent caching for static content
- [D1](/products/d1.md): Serverless SQL
- [Data Platform](/products/data-platform.md): Ingest, Catalog & Query

---

*This is a markdown version of [https://www.cloudflare.com/products/queues](https://www.cloudflare.com/products/queues) for AI/LLM consumption.*
