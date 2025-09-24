#  Cloudflare Datamining

This repository mines a lot of publicly available data from [Cloudflare](https://www.cloudflare.com/), including their customer dashboard, NPM/GitHub repos, marketing site, and more. Automated commits will be made frequently and will show how the data changes over time.

Some of the data can be visualised on the [website](https://cfdata.lol).

You can join the [Discord](https://discord.gg/Z94Hn6qVDm) for notifications of changes.

---

## Structure

- 📜 Scripts are in `scripts`
- 📂 Data is in `data`

---

## Data

- 🧑‍💻 `account`: Tracks a free account's entitlements and flags  
- 📑 `api-schemas`: Extracts API schemas from `api.cloudflare.com` and tracks changes over time  
- 📰 `blog`: Tracks blog post content over time  
- 🌐 `cdn-cgi`: Tracks changes to `cdn-cgi` endpoints on Cloudflare's CDN and `request.cf` keys  
- 🔍 `coveo`: Tracks updates to the Coveo Cloudflare indexes  
- 🗂️ `dashboard-subroutes`: Extracts subroutes from the dashboard, useful for undocumented APIs  
- 🌍 `dashboard-translations`: Extracts dashboard translations, tracks changes over time  
- 📊 `dashboard`: Extracts other miscellaneous data from the dashboard  
- 🔒 `doh`: Tracks the DOH schema returned by 1.1.1.1  
- 🌐 `domains`: Tracks domains owned by Cloudflare  
- 🏷️ `entitlements`: Tracks a list of all known entitlements for accounts and zones  
- 🎨 `icons`: Tracks the `@cloudflare/component-icon` NPM package  
- 🚧 `gates`: Tracks active gates used for A/B experiments on the dashboard  
- 💻 `github-repos`: Tracks updates, additions, etc. to all Cloudflare GitHub repos  
- 💼 `jobs`: Tracks Cloudflare job postings  
- 📢 `marketing`: Extracts raw JSON data for cloudflare.com marketing site  
- 📌 `other`: Tracks miscellaneous data not tracked by other scripts  
- 📦 `packages`: Tracks updates to Cloudflare-owned packages  
- 🛠️ `products`: Tracks product API endpoints and response keys  
- 🏷️ `registrar`: Tracks Registrar TLDs and pricing over time  
- 📝 `types`: Tracks the `@cloudflare/types` NPM package  
- ⚙️ `workerd`: Tracks capnp schemas from `workerd`  
- 🌐 `zt-dashboard-translations`: Extracts Zero Trust dashboard translations  
- 🔐 `zt-dashboard`: Extracts other miscellaneous data from the Zero Trust dashboard  

---

## Contributing

PRs are welcome!  

If you have an interesting Cloudflare account and would like to contribute your account/zone entitlements to grow the known list, please send me a JSON dump of your entitlements either via Discord  
👉 `CherryJimbo#0001`  
or [Twitter (X)](https://twitter.com/cherryjimbo?lang=de) 👉 `@CherryJimbo`.
