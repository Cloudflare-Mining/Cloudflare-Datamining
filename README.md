# Cloudflare Data Mining

## Overview

This repository collects publicly available data related to [Cloudflare](https://www.cloudflare.com/). It aggregates information from sources like the Cloudflare customer dashboard, GitHub/NPM repositories, marketing site, and more. Automated commits are made frequently to track how the data evolves over time.

Some of the collected data can be visualized on the [website](https://cfdata.lol).  

You can also join the [Discord community](https://discord.gg/Z94Hn6qVDm) for notifications on updates.

---

## Repository Structure

- **`scripts/`** – Contains all the scripts used to mine and process data.  
- **`data/`** – Stores the structured data collected by the scripts.

---

## Types of Data Collected

Here’s a breakdown of the data categories:

- **`account`** – Tracks entitlements and flags for free Cloudflare accounts.  
- **`api-schemas`** – Extracts API schemas from `api.cloudflare.com` and tracks changes over time.  
- **`blog`** – Monitors blog content and detects updates.  
- **`cdn-cgi`** – Tracks Cloudflare CDN endpoints and `request.cf` keys, as well as component changes across datacenters.  
- **`coveo`** – Observes updates to Coveo Cloudflare indexes used for search on blogs, learning centers, etc.  
- **`dashboard-subroutes`** – Extracts dashboard subroutes, helping identify undocumented APIs.  
- **`dashboard-translations`** – Monitors translations from the dashboard to detect new features or updates.  
- **`dashboard`** – Collects miscellaneous dashboard data, including URLs, regexes, and generic strings.  
- **`doh`** – Tracks the DNS over HTTPS (DoH) schema from 1.1.1.1.  
- **`domains`** – Monitors domains owned by Cloudflare. Not comprehensive, but captures many.  
- **`entitlements`** – Maintains a list of known account and zone entitlements (not automated).  
- **`icons`** – Tracks updates in the `@cloudflare/component-icon` NPM package.  
- **`gates`** – Monitors active A/B experiment gates on the dashboard.  
- **`github-repos`** – Tracks additions, updates, and changes in Cloudflare’s GitHub repositories.  
- **`jobs`** – Monitors Cloudflare job postings, which can hint at upcoming projects.  
- **`marketing`** – Extracts raw JSON from the main Cloudflare marketing site.  
- **`other`** – Captures miscellaneous data like IPs that aren’t tracked elsewhere.  
- **`packages`** – Tracks new and updated NPM packages owned by Cloudflare.  
- **`products`** – Monitors product-specific API endpoints and response keys.  
- **`registrar`** – Tracks Cloudflare Registrar TLDs and pricing over time.  
- **`types`** – Observes updates in the `@cloudflare/types` NPM package, helpful for spotting new billing features.  
- **`workerd`** – Tracks various `workerd` capnp schemas.  
- **`zt-dashboard-translations`** – Monitors translations from the Zero Trust dashboard to detect new features.  
- **`zt-dashboard`** – Collects other miscellaneous data from the Zero Trust dashboard.

---

## Contributing

Contributions are welcome! If you have an interesting Cloudflare account and want to contribute your account or zone entitlements:

1. Export a JSON dump of your entitlements.  
2. Share it via Discord: `CherryJimbo#0001` or Twitter/X: [@CherryJimbo](https://twitter.com/cherryjimbo?lang=de).  

Pull requests for improvements, new scripts, or better data tracking are always appreciated.
