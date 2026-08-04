---
title: Cloudflare Workers - Global Serverless Functions Platform
description: Deploy serverless functions globally in seconds. No cold starts, 330+ cities, infinite concurrency, and pay only for CPU time. Support for JavaScript, TypeScript, Python, and Rust.
image: https://www.cloudflare.com/preview.png
---

[React Flow](https://reactflow.dev)

Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.

Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.

#  Deploy serverless functions globally in seconds 

###  Cloudflare Workers are fast, elastic, and serverless functions that scale automatically from zero to millions of requests. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/workers/) 

**Only pay for what you use** 

Pay only for execution time ([CPU time](https://developers.cloudflare.com/workers/platform/limits/#cpu-time)), not idle time spent waiting on I/O. 

**Near your users, or your data** 

Deploy once, run in Cloudflare's 330+ cities by default, or use [Smart Placement](https://developers.cloudflare.com/pages/functions/smart-placement/) to run near your data, to minimize end-to-end latency. 

**No cold starts** 

Don't keep users waiting, or spend your time on prewarming rube-goldberg machines. 

**Infinite concurrency without the markup** 

No need to pay for pre-provisioned concurrency. Just scale up based on demand on your big launch days, no matter how many concurrent users you get. 

**First-class local development** 

Workers allows you to fully test your changes locally and allow you to get in the flow, ahead of pushing your changes with [workerd](https://github.com/cloudflare/workerd), our open-source runtime. 

 **Write in JS, TS, Python or Rust** 

Choose from a template in your language to kickstart building an app. 

### Serverless architecture, from the ground up: Isolates vs. Containers

Workers are built on unique architecture called isolates. Isolates are an order of magnitude more lightweight, which means they can easily and quickly scale up and down to meet your needs.

Traditional  
architecture 

Workers v8  
isolates 

User code 

Process overhead 

![Background Pattern](/static/pattern.png) 

`Workers` 

####  You can use Workers to: 

 See real-world examples of Cloudflare Workers 

[  See more ](https://developers.cloudflare.com/workers/) 

 Build scalable APIs 

Handle billions of requests with automatic scaling and global deployment. No load balancers, no capacity planning, no regional configuration. 

 Deploy complete web applications 

Ship React, Vue, or Next.js apps integrated backend logic, databases, and storage. Full-stack development without infrastructure management. 

 Run serverless functions at the edge 

Handle authentication, rate limiting, routing, caching logic near your users. Reduce latency and reduce load on your server by offloading processing to Workers. 

 Run business logic and background jobs 

Handle webhooks, process data, and run scheduled tasks with built-in Queues, Workflows, and Cron Triggers. Reliable automation without server babysitting. 

### Hello World to full-stack on a single integrated platform

Go beyond hello world by connecting to any resources you need — database, storage, browser rendering, images and more with a simple binding.

![Background Pattern](/static/pattern.png) 

 index.ts  todos.ts  ai.ts 

 01  02  03  04  05  06  07  08  09  10  11  12 

```typescript
export default {  async fetch(request, env) {    const stmt = env.DB.prepare('SELECT * FROM comments LIMIT 3');    const { results } = await stmt.all();
    return new Response(renderHtml(JSON.stringify(results, null, 2)), {      headers: {        'content-type': 'text/html',      },    });  },} satisfies ExportedHandler<Env>;
```

 01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17  18  19  20  21  22 

```typescript
async list(): Promise<Todo[]> {    const todos = await this.kv.get(this.todosKey, "json");    if (Array.isArray(todos)) {      todos.sort((a: Todo, b: Todo) => b.createdAt - a.createdAt);    }    return (todos || []) as Todo[];  }
async create(text: string): Promise<Todo> {  const newTodo: Todo = {    id: crypto.randomUUID(),    text,    completed: false,    createdAt: Date.now(),  };  const todos = await this.list();  todos.push(newTodo);  await this.kv.put(this.todosKey, JSON.stringify(todos), {    expirationTtl: 300,  });  return newTodo;}
```

 01  02  03  04  05  06  07  08  09  10  11  12  13  14  15  16  17  18 

```typescript
export default {  async fetch(request, env) {    const inputs = {      prompt: 'cats vibe coding an application',    };
    const response = await env.AI.run(      '@cf/black-forest-labs/flux-1-schnell',      inputs,    );
    return new Response(response, {      headers: {        'content-type': 'image/png',      },    });  },} satisfies ExportedHandler<Env>;
```

 Access data from D1 

Efficiently interact with your database using Cloudflare's D1 service, allowing for streamlined data retrieval and manipulation within your applications, enhancing overall performance. 

 Persist your to-do list with Workers KV 

Utilize Cloudflare's KV storage to manage your to-do list, ensuring data persistence and easy retrieval, while enabling you to create and manage tasks seamlessly within your application. 

 Generate images on the fly with AI models 

Leverage AI capabilities to dynamically generate images based on user input, integrating advanced image processing features directly into your Cloudflare Workers applications. 

######  Deploy with confidence, even on Fridays 

Go from localhost to global in seconds

npxpnpxyarn-exec

$ █

######  ...or by clicking merge 

Cloudflare Workers connects directly to your Git repository, allowing you to deploy however, whenever you want

###  Go fast, or slow 

 Workers enables you to instantly deploy to all 330+ cities, or gradually roll out changes to a percentage of your users. If errors spike up, roll back when you need. 

 Intercom 

#### "

####  Cloudflare's toolkit is accelerating that movement even faster. Their clear documentation, purpose-built tools, and developer-first platform helped Intercom go from concept to production in under a day. " 

![Jordan Neill](/people/jordan-neill.png) 

 Jordan Neill  SVP Engineering 

###  Workers Pricing 

 Serverless functions that run everywhere, instantly. [View Compute pricing details](/plans/#developer-platform/compute) 

Component

Free

Paid

 Requests 

Free

 100k / day 

Paid

 $0.30 / million requests 

 CPU Time 

Free

 10 ms / request 

Paid

 $0.02 / million CPU ms 

### Powerful primitives, seamlessly integrated 

#####  Built on systems powering 20% of the Internet, Workers run on the same infrastructure Cloudflare uses to build Cloudflare. Enterprise-grade reliability, security, and performance are standard. 

[ Compute ](/products/#compute) 

[  Browser Run  Automated browsers ](/products/browser-rendering/) [  Containers  Any language, anywhere ](/products/containers/) [  Durable Objects  Stateful compute ](/products/durable-objects/) [  Sandboxes  Secure code execution ](/products/sandboxes/) [  Workers  Global serverless functions ](/products/workers/) [  Workers for Platforms  Programmable Platform Solutions ](/products/workers-for-platforms/) [  Workflows  Process orchestration ](/products/workflows/) 

[ Storage ](/products/#storage) 

[  Artifacts  Git-native versioned storage ](/products/artifacts/) [  D1  Serverless SQL ](/products/d1/) [  Data Platform  Ingest, Catalog & Query ](/products/data-platform/) [  Hyperdrive  Global databases ](/products/hyperdrive/) [  Queues  Message processing ](/products/queues/) [  R2  Egress-free storage ](/products/r2/) [  KV  Ultra-fast key-value storage ](/products/kv/) 

[ AI ](/products/#ai) 

[  Agents  Build stateful AI agents ](/products/agents/) [  AI Gateway  AI observability ](/products/ai-gateway/) [  AI Search  Instant retrieval ](/products/ai-search/) [  Vectorize  Vector database ](/products/vectorize/) [  Workers AI  Edge AI models ](/products/workers-ai/) 

[ SASE / Zero Trust ](/products/#sase) 

[  SASE  Cloudflare SASE platform ](/sase/) [  Access  Zero trust access to private resources ](/products/access/) [  CASB  SaaS and cloud posture ](/products/casb/) [  Data Loss Prevention  Protect sensitive data ](/products/dlp/) [  Gateway  Web filtering ](/products/gateway/) [  Browser Isolation  Secure web browsing ](/products/browser-isolation/) [  WAN  Cloud-delivered networking ](/products/wan/) [  Email Security  Phishing protection ](/products/email-security/) 

[ Security ](/products/#security) 

[  DDoS Protection  Mitigation Solutions ](/products/ddos/) [  Rate Limiting  Abuse prevention ](/products/rate-limiting/) [  SSL  Secure Your Site with SSL ](/products/ssl/) [  Turnstile  A CAPTCHA Replacement Solution ](/products/turnstile/) [  WAF  Web Application Firewall ](/products/waf/) [  Magic Transit  DDoS Protection for Networks ](/products/magic-transit/) [  Client-Side Security  Prevent browser supply chain attacks ](/products/client-side-security/) [  Bot Management  Block bad bots ](/products/bot-management/) 

[ Network & Content Delivery ](/products/#network) 

[  CDN  Faster delivery & caching ](/products/cdn/) [  DNS  Fast DNS ](/products/dns/) [  Load Balancing  Zero downtime ](/products/load-balancing/) [  TURN / SFU  Real-time infra ](/products/turn-sfu/) [  Analytics  Web Performance & Security ](/products/analytics/) 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Cloudflare Workers - Global Serverless Functions Platform","description":"Deploy serverless functions globally in seconds. No cold starts, 330+ cities, infinite concurrency, and pay only for CPU time. Support for JavaScript, TypeScript, Python, and Rust.","url":"https://www.cloudflare.com/products/workers/","inLanguage":"en"}
```
