---
title: Liveblocks &amp; Cloudflare | Customer Story
description: Liveblocks capitalizes on the Cloudflare Developer Platform to provide developers with pre-built, real-time collaboration features
image: https://www.cloudflare.com/preview.png
---

# Liveblocks

> #### "  Cloudflare released Durable Objects at just the right time for us. It is the perfect solution for supporting real-time collaborative use cases. " 

## **Liveblocks enables developers to embed real-time collaboration features into apps with Cloudflare**

Founded in 2021, Liveblocks enables software developers to easily add pre-built collaborative features to their apps. Developers can quickly incorporate commenting, multi-person editing, notifications, AI copiloting, live cursors, and other customizable features into their software. 

App users today increasingly expect those collaborative capabilities. Whether they are designing a new website or attending a livestream event, users want to contribute their feedback and interact with others in real time, no matter where everyone is located. 

Liveblocks enables software engineering teams to meet those user expectations and avoid the time-consuming work of creating collaborative app features themselves. To further streamline development, Liveblocks provides a fully hosted, scalable WebSocket infrastructure for building and running collaborative capabilities. 

In constructing the collaborative experience, the Liveblocks team initially used AWS EC2 containers with a MongoDB database. But it was difficult to scale WebSocket servers and database storage with the containers. "We needed a more scalable approach to support real-time collaboration," says Olivier Foucherot, senior software developer at Liveblocks.

### **Building real-time collaborative experiences with Cloudflare Durable Objects**

Just when the Liveblocks team began searching for an alternative approach, a new solution appeared. "Cloudflare released Durable Objects at just the right time for us," says Foucherot. "It is the perfect solution for supporting real-time collaborative use cases."

[Cloudflare Durable Objects](https://www.cloudflare.com/developer-platform/products/durable-objects/) are [Cloudflare Workers](https://workers.cloudflare.com/) that combine compute with durable storage, streamlining how organizations build and run stateful serverless apps. By allowing teams to avoid a piecemeal approach, Durable Objects fundamentally changes how modern, full-stack applications are developed. Objects are automatically provisioned close to users to minimize latency, and organizations can provision millions of them around the world. 

"There is not currently another out-of-the-box solution that does what Durable Objects does," says Jonathan Rowny, principal software engineer at Liveblocks. "And if there seems to be one, it's probably just hosted on Durable Objects."

Using Durable Objects, Liveblocks built "rooms" for real-time collaboration. "When app users connect to a room over WebSocket, they are forwarded to a Durable Object, which contains the state of the room," says Rowny. "When someone provides an update, everyone connected to the room sees it. Developers don't have to worry about CRDTs (conflict-free replicated data types), operational transforms, or anything like that. They just connect users directly to Durable Objects for real-time features."

### **Tapping into additional Cloudflare developer services**

Along with Durable Objects, the Liveblocks team is capitalizing on several other Cloudflare capabilities to support the company's platform. For example, the Liveblocks team uses [Cloudflare R2 object storage](https://www.cloudflare.com/developer-platform/products/r2/) to store essential information from collaborative work, such as attachments included with comments in a collaborative app and document version histories. In addition, the team uses [Cloudflare Queues](https://www.cloudflare.com/developer-platform/products/cloudflare-queues/), which is integrated with Cloudflare Workers, to provide reliable application message queues.

Meanwhile, [Cloudflare Workers KV](https://www.cloudflare.com/developer-platform/products/workers-kv/) helps the team enhance platform performance. "We use Workers KV to provide a cache for edge users," says Rowny. "By looking up data quickly, Workers KV allows us to skip another round trip to our databases."

For these and other capabilities, the Liveblocks team selected the Cloudflare enterprise plan early on. "Cloudflare's enterprise plan gives us access to the most advanced enterprise tools," says Rowny. "We also like maintaining a stable, predictable spending model."

### **Delivering real-time performance with the Cloudflare network**

Providing real-time collaboration capabilities requires extremely low latency between Liveblocks collaborative rooms and end users. Fortunately, Durable Objects are available across [Cloudflare's massive network](https://www.cloudflare.com/network/).

"Cloudflare Durable Objects are automatically provisioned geographically close to where they are first requested, so end users experience very low latency," says Rowny. "For our live cursors feature, we're able to show cursors moving at 60 frames per second, which is incredibly fast — and that's thanks to the Cloudflare global network."

### **Scaling to half a billion requests per day, without scaling costs**

By building on the highly scalable Cloudflare platform, Liveblocks has been able to support a fast-growing customer base cost-effectively. "We might process up to half a billion messages through Workers in a 24-hour period," says Rowny. "But we've been able to control our costs with Cloudflare."

Cloudflare's [WebSocket Hibernation](https://developers.cloudflare.com/durable-objects/examples/websocket-hibernation-server/) capability helps keep costs low by eliminating billable duration charges during periods of inactivity. "We can have a collaborative room that is live — still pinging Cloudflare, with users still connected. If nothing is happening in that room, it will hibernate," says Rowny. "The hibernation capability reduces our costs and enables us to keep our prices low, which is a huge competitive advantage."

WebSocket Hibernation also simplifies billing — for both Liveblocks and their customers. "We can bill for monthly active users and not have to worry about passing along compute minutes to customers," says Rowny. "As a result, our customers can more easily anticipate their monthly costs. It would not be as simple on any other platform."

### **Controlling operational overhead — avoiding 40% engineering expansion**

Using the Cloudflare Developer Platform has helped Liveblocks grow, efficiently, as a business. "We have a very small team of 10 engineers at Liveblocks," says Foucherot. "We're able to keep that team small and efficient because of Cloudflare."

"Without Cloudflare, hosting WebSocket servers might have required at least four additional people just for management," says Rowny. "Using Durable Objects, we can provide serverless capabilities without a dedicated team for managing the environment. Meanwhile, our existing team can focus less on administration and more on innovation."

### **Continuing to explore and innovate with Cloudflare**

Looking ahead, the Liveblocks team is eager to explore additional Cloudflare capabilities and services for developers. For example, [Workers for Platforms](https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/) would enable the company to give their customers greater flexibility for how they use Liveblocks. "With Workers for Platforms, developers could more easily deploy customized versions of features to their own workspaces," says Rowny. 

The team is also looking forward to implementing logging and [observability](https://www.cloudflare.com/learning/performance/what-is-observability/) functionality within Workers. "Gaining more visibility into our environment while simplifying logging would be amazing for us," says Rowny.

In the meantime, the Liveblocks team continues to eliminate obstacles for developers to deliver collaborative apps with a serverless architecture. "Many developers have anxieties about the hidden costs of serverless," says Rowny. "Cloudflare eliminates those anxieties. By using Cloudflare, we can maximize the benefits of the serverless approach for organizations and help their developers stay focused on innovation."

![Liveblocks logo](https://images.ctfassets.net/slt3lc6tev37/7mqLo0FhFt39h9sRgvmywC/0de381e6faa8aea663fd36bb988a0096/liveblocks_logo.png) 

Liveblocks capitalizes on the Cloudflare Developer Platform to provide developers with pre-built, real-time collaboration features

 Cloudflare Products 
* [  Workers ](https://workers.cloudflare.com/)
* [  Durable Objects ](https://www.cloudflare.com/developer-platform/products/durable-objects/)
* [  Queues ](https://www.cloudflare.com/developer-platform/products/cloudflare-queues/)
* [  Workers KV ](https://www.cloudflare.com/developer-platform/products/workers-kv/)
* [  R2 ](https://www.cloudflare.com/developer-platform/products/r2/)

 Products Used 

Workers 

 Details 

 Industry 

High Technology 

 Region 

North America 

# Build without boundaries

 Join thousands of developers who've eliminated infrastructure complexity and deployed globally with Cloudflare. Start building for free — no credit card required. 

[  Start building for free ](https://dash.cloudflare.com/sign-up) [  View docs ](https://developers.cloudflare.com/) 

 No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet  No cold starts or region complexity  SASE and Zero Trust without the complexity  Deploy to 330+ cities instantly  Defend against the Internet's biggest DDoS attacks  Predictable pricing without surprises  Identity-aware Zero Trust access that retires your VPN  Battle-tested infrastructure powering millions  CDN, WAF, and DNS faster than the public Internet

```json
{"@context":"https://schema.org","@type":"Organization","name":"Cloudflare","url":"https://www.cloudflare.com","logo":"https://www.cloudflare.com/logo.svg","sameAs":["https://github.com/cloudflare","https://www.linkedin.com/company/cloudflare","https://x.com/cloudflare"]}
{"@context":"https://schema.org","@type":"WebSite","name":"Cloudflare","url":"https://www.cloudflare.com","inLanguage":"en","potentialAction":{"@type":"SearchAction","target":"https://www.cloudflare.com/search?q={search_term_string}","query-input":"required name=search_term_string"}}
{"@context":"https://schema.org","@type":"WebPage","name":"Liveblocks & Cloudflare | Customer Story","description":"Liveblocks capitalizes on the Cloudflare Developer Platform to provide developers with pre-built, real-time collaboration features","url":"https://www.cloudflare.com/case-studies/liveblocks/","inLanguage":"en"}
```
