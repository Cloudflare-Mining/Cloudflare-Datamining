---
title: "Cloudflare Durable Objects - Stateful Serverless Functions"
description: "Build real-time & multiplayer apps without distributed systems complexity. Stateful serverless functions with WebSockets, embedded SQLite, and global coordination."
url: "https://www.cloudflare.com/products/durable-objects"
---

# Durable Objects

> Ship multiplayer systems, chat services, session stores and other coordination-heavy apps using Durable Objects.

## Key Features

- Single-instance strong consistency
- Built-in WebSocket support
- Transactional SQLite storage
- Hibernation for cost efficiency
- Alarms for scheduled wake-ups
- Automatic geographic placement
- Millions of objects per account

## Benefits

### Stateful serverless

Durable Objects are stateful serverless functions: they run for as long as you need them, can compute in the background, and handle multiple requests concurrently.

### WebSockets included

Every Durable Object is also a WebSocket server and client. Broadcast and coordinate state in real-time with just a few lines of code.

### Like a micro-VM

Think of every Durable Object as a micro-VM: create thousands (or millions) of them to do work, and throw them away when you're done.

### Embedded SQL database

Every Durable Object has a built-in, embedded SQLite database. Serverless doesn't have to be stateless.

### Schedule Work

Every Durable Object can do work in the background, periodically poll an API, and programmatically execute code in the future with the Alarms API (it's built-in).

### @cloudflare/actors

The @cloudflare/actors library provides a set of powerful abstractions over Durable Objects: the container to Durable Object's micro-VM.

## Use Cases

### Build chat systems and messaging apps

One object per chat room handles all messages, user presence, and room state with global consistency. No Redis clusters or message queues required. [Try it!](https://github.com/cloudflare/templates/tree/main/durable-chat-template)

### Create collaborative editing experiences

One object per document coordinates real-time edits from multiple users without distributed systems expertise. Think Figma or Google Docs architecture, simplified.

### Power multiplayer games and interactive experiences

One object per game session manages player state, game logic, and real-time updates close to users. Each game room scales independently without infrastructure overhead. [Try it!](https://github.com/cloudflare/templates/tree/main/multiplayer-globe-template)

### Coordinate live dashboards and real-time analytics

Objects aggregate and push real-time data updates to connected clients for monitoring and live events. Real-time data without the coordination nightmare.

## Resources

- [Full Documentation](https://developers.cloudflare.com/durable-objects/): Complete technical documentation
- [Get Started](https://dash.cloudflare.com/sign-up): Sign up and start building
- [Pricing](/plans.md): See pricing details

## Related Products

- [Browser Run](/products/browser-rendering.md): Automated browsers
- [Cloudflare Pages](/products/pages.md): Build & deploy frontend sites
- [Containers](/products/containers.md): Any language, anywhere
- [Email Service](/products/email-service.md): Send and receive email

---

*This is a markdown version of [https://www.cloudflare.com/products/durable-objects](https://www.cloudflare.com/products/durable-objects) for AI/LLM consumption.*
