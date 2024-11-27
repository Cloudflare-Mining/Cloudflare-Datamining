# Google OAuth & Cloudflare Workers

[Check out the blog article here](https://ryan-schachte.com/blog/cf-workers-auth)

[Demo repo](https://github.com/Schachte/cloudflare-worker-gauth-example)

## Background

Easiest way to grab an access token for Google OAuth without any external dependencies. This is a simple JS module used to facilitate the OAuth2 flow from within a Cloudflare Worker. This module isn't specific to Cloudflare, but it
's compatible within isolates and doesn't rely on NodeJS.

## Usage

**Installation:** `npm i cloudflare-workers-and-google-oauth`

This is a fully working code snippet showing how to access Google Cloud Storage (GCS) and returning an image to the browser.

[This](https://gist.github.com/markelliot/6627143be1fc8209c9662c504d0ff205) gist was my inspiration for this implementation.

```javascript
import GoogleAuth, { GoogleKey } from 'cloudflare-workers-and-google-oauth'

// Add secret using Wranlger or the Cloudflare dash
export interface Env {
	GCP_SERVICE_ACCOUNT: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
        // https://developers.google.com/identity/protocols/oauth2/scopes
		const scopes: string[] = ['https://www.googleapis.com/auth/devstorage.full_control']
		const googleAuth: GoogleKey = JSON.parse(env.GCP_SERVICE_ACCOUNT)

		// Initialize the service
		const oauth = new GoogleAuth(googleAuth, scopes)
		const token = await oauth.getGoogleAuthToken()

        // Example with Google Cloud Storage
		const res = await fetch('https://storage.googleapis.com/storage/v1/b/MY_BUCKET/o/MY_OBJECT.png?alt=media', {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`,
				'Content-Type': 'image/png',
				'Accept': 'image/png',
			},
		})

		return new Response(res.body, { headers: { 'Content-Type': 'image/png' } });
	},
};
```
