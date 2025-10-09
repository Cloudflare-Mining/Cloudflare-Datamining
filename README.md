Welcome to the Cloudflare Data Intelligence repository—a dynamic and automated project dedicated to mining, tracking, and visualizing the vast public data landscape of Cloudflare. We go beyond the surface, capturing granular changes across their customer-facing platforms, developer assets, and infrastructure over time.

This isn't just a snapshot; it's a living history of Cloudflare's public evolution. Through frequent automated commits, we document every subtle shift, empowering you with unparalleled visibility into new features, undocumented APIs, and strategic movements.

Key Features & Value
Continuous Discovery: Automated scripts run frequently to capture data changes in near real-time.

Historical Insight: The commitment log serves as a chronological record, allowing for powerful historical analysis of feature development and deprecations.

Visualization: Key data findings are beautifully visualized on our companion ** website** (link available in the full repo).

Real-time Notifications: Join our Discord community to get instant notifications of significant data changes and additions.

📊 The Data Deep Dive: What We Track
Our structured approach ensures comprehensive coverage across the Cloudflare ecosystem:

Our structured approach ensures comprehensive coverage across the Cloudflare ecosystem:

Unlocking Cloudflare's Digital Footprint: The Datamining Insights
This project tracks the publicly available data streams across the Cloudflare ecosystem, offering strategic, technical, and historical insights into its evolution. We organize our findings into four core categories:


1. API and Infrastructure
This is where we reveal the technical backbone of Cloudflare. We track changes to API schemas (api-schemas), which often act as a sneak peek into future API capabilities and new feature releases. We actively monitor the CDN endpoints and network components (cdn-cgi), providing a transparent view of updates across Cloudflare’s global network and data centers. Furthermore, by extracting Cap'n Proto schemas from the core workerd runtime, we offer developers a rare glimpse into Cloudflare's internal design and how their edge environment is constructed.

2. Product and Features
To spot new features before they launch, we delve into development-adjacent data. We extract translation strings from the main dashboard (dashboard-translations), which are often the leading indicator for unreleased UI changes and features. We perform the same analysis for the Zero Trust platform (zt-dashboard-translations), revealing upcoming security features and strategic shifts within that key product line. For developers, we track specific product API endpoints (products) to ensure you always know the current response keys, and we maintain a manually curated list of known account and zone entitlements (entitlements) to clearly map out pricing tiers and available features.

3. Talent and Strategy
This category focuses on Cloudflare's organizational movements, which signal strategic direction. By monitoring their job listings (jobs), we often uncover upcoming strategic projects and the technical skills Cloudflare is investing in. Similarly, tracking additions and updates across the entire Cloudflare GitHub organization (github-repos) showcases active development efforts and open-source contributions.

4. Web Presence
We document how Cloudflare communicates and markets itself. This includes tracking the historical changes to blog post content (blog) and extracting the raw JSON data from the main cloudflare.com marketing site (marketing) for a deeper analysis of their product messaging and positioning. Finally, we monitor the available TLDs and pricing changes for Cloudflare Registrar (registrar) to keep track of their domain market offerings.









🛠️ Repository Structure
Folder  	Description
scripts 	Contains the automated data mining and extraction logic.
data	   The repository's output—structured JSON files capturing the historical dataset.  

 
🎉 Join the Initiative!
We believe in the power of community intelligence. If you find this data valuable or have the resources to contribute:

PRs are warmly welcomed for new scripts, improved data fidelity, or bug fixes.

Contribute Entitlements: If you have access to a Cloudflare account, you can help us grow the list of known entitlements. Please send a JSON dump of your account/zone entitlements privately via:

Discord: CherryJimbo#0001

Twitter (X): @CherryJimbo

Thank you for helping us build the ultimate public data resource for the Cloudflare community!
