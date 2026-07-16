---
title: "Cloudflare AI Cloud"
description: "Build and deploy AI agents and applications on the AI Cloud powered by Cloudflare's network"
url: "https://www.cloudflare.com/solutions/ai"
---

# Cloudflare AI

> Build and deploy AI agents and applications on the AI Cloud

Cloudflare provides the infrastructure to scale your AI applications at every step — store training data, run inference —  on the same network Cloudflare uses to power its own use of AI.

## Benefits

### Run Serverless inference on GPUs

Ship models that respond in <100 ms worldwide. No clusters to manage.

### Build Agents & MCP Servers

Cloudflare Agents SDK + MCP let Workers coordinate tools, schedule tasks, and reason toward goals.

### Store your training data

Store your training data in R2 for egress-free multi-cloud access to GPUs.

## Features

### Workers AI model catalog

Access Llama 3, Gemma 3, Whisper, TTS, and LoRA-fine-tuned variants across 190+ locations.

### Agents SDK

Build goal-driven agents that call models, APIs, and schedules from a single TypeScript API.

### Remote MCP servers

Secure, OAuth-scoped endpoints that expose tools and data to agents without self-hosting.

### AI Search

Complete RAG workflows with automatic indexing and fresh data. Ship AI search and chat with one instance in minutes.

### Vectorize

Globally-replicated vector database that pairs with Workers AI for RAG in a few lines of code.

### R2 object storage

Store terabytes of training data, checkpoints, and user uploads. Move to any cloud for $0 egress.

### AI Gateway

Built-in caching, rate-limiting, model fallback, and observability for every inference call.

## Use Cases

### OAuth integration included

Implements the provider side of the OAuth 2.1 protocol, allowing you to easily add authorization to your MCP server.

### MCP playground for testing

Our [MCP playground](https://playground.ai.cloudflare.com/) allows you to connect to remote MCP servers, with the authentication check included

### MCPAgent

Built on DurableObjects to provide an out of the box transport layer, with memory management included

### Built-in state management

Agents include built-in state management — sync state with clients, trigger events on changes, and read or write to each Agent's SQL database automatically.

### Multi-modal interfaces

Connect via [WebSockets](https://developers.cloudflare.com/agents/api-reference/websockets/) to stream updates in real time — from long-running reasoning tasks, [asynchronous workflows](https://developers.cloudflare.com/agents/api-reference/run-workflows/), or chat sessions built with the `useAgent` hook. Agents SDK also supports email, and voice modalities.

### Multi-model with AI Gateway

Agents are just code. Use any [AI model](https://developers.cloudflare.com/agents/api-reference/using-ai-models/), integrate browsers or APIs, fetch data from external sources, and add custom methods to extend functionality.

### Secure Sandboxes

Execute commands, manage files, run services, and expose them via public URLs - all within secure, sandboxed containers with our [Sandbox SDK](https://github.com/cloudflare/sandbox-sdk).

## Get Started

- [Sign up](https://dash.cloudflare.com/sign-up): Create a Cloudflare account
- [Documentation](https://developers.cloudflare.com/): Read the full documentation

---

*This is a markdown version of [https://www.cloudflare.com/solutions/ai](https://www.cloudflare.com/solutions/ai) for AI/LLM consumption.*
