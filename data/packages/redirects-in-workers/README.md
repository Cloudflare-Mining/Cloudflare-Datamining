# redirects-in-workers

Cloudflare Pages' `_redirects` file support in Cloudflare Workers

## Installation

```sh
npm install redirects-in-workers
```

## Usage

```toml
# wrangler.toml

rules = [
	{ type = "Text", globs = ["**/_redirects"], fallthrough = true }
]
```

```js
import { generateRedirectsEvaluator } from "redirects-in-workers";
import redirectsFileContents from "../public/_redirects";
import { WorkerEntrypoint } from "cloudflare:workers";

const redirectsEvaluator = generateRedirectsEvaluator(redirectsFileContents);

export default class extends WorkerEntrypoint {
	override async fetch(request: Request) {
		const redirect = await redirectsEvaluator(request, this.env.ASSETS);
		if (redirect) {
			return redirect;
		}

		// do other stuff
		return new Response("Hello, world!");
	}
}
```
