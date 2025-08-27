<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://cloudflare.com">
    <img src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/6EYsdkdfBcHtgPmgp3YtkD/0b203affd2053988264b9253b13de6b3/logo-thumbnail.png" alt="Logo" width="180">
  </a>
  <h3 align="center">Realtime Agents</h3>

  <p align="center">
    Build realtime voice/video agents that run on Cloudflare edge network.
    <br />
    <a href="https://develoeprs.cloudflare.com"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://demo.realtime.cloudflare.com">View Demo</a>
    ·
    <a href="https://community.cloudflare.com/">Report Bug</a>
    ·
    <a href="https://community.cloudflare.com/">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [About](#about)

<!-- INSTALLATION -->

## Installation

```sh
npm install @cloudflare/realtimekit-agents
```

<!-- USAGE EXAMPLES -->

## Usage

### Pre-requisite

- env.ACCOUNT_ID - Your Cloudflare accountID
- env.CF_TOKEN - A Cloudflare token with Realtime Admin scope

```ts
import { DeepgramSTT, TextComponent, RealtimeKitTransport, ElevenLabsTTS, RealtimeAgent } from '@cloudflare/realtime-agents';

class MyTextProcessor extends TextComponent {
	env: Env;

	constructor(env: Env) {
		super();
		this.env = env;
	}

	async onTranscript(text: string, reply: (text: string) => void) {
		const { response } = await this.env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
			prompt: text,
		});
		reply(response!);
	}
}

export class MyAgent extends RealtimeAgent<Env> {
	constructor(ctx: DurableObjectState, env: Env) {
		super(ctx, env);
	}

	async init(agentId: string, meetingId: string, authToken: string, workerUrl: string, accountId: string, apiToken: string) {
		// Construct your text processor for generating responses to text
		const textProcessor = new MyTextProcessor(this.env);
		// Construct a Meeting object to join the RTK meeting
		const rtkTransport = new RealtimeKitTransport(meetingId, authToken);

		// Construct a pipeline to take in meeting audio, transcribe it using
		// Deepgram, and pass our generated responses through ElevenLabs to
		// be spoken in the meeting
		await this.initPipeline(
			[
				rtkTransport,
				new DeepgramSTT(this.env.DEEPGRAM_API_KEY),
				textProcessor,
				new ElevenLabsTTS(this.env.ELEVENLABS_API_KEY),
				rtkTransport,
			],
			agentId,
			workerUrl,
			accountId,
			apiToken,
		);

		const { meeting } = rtkTransport;

		// The RTK meeting object is accessible to us, so we can register handlers
		// on various events like participant joins/leaves, chat, etc.
		// This is optional
		meeting.participants.joined.on('participantJoined', (participant) => {
			textProcessor.speak(`Participant Joined ${participant.name}`);
		});
		meeting.participants.joined.on('participantLeft', (participant) => {
			textProcessor.speak(`Participant Left ${participant.name}`);
		});

		// Make sure to actually join the meeting after registering all handlers
		await meeting.join();
	}

	async deinit() {
		// Add any other cleanup logic required
		await this.deinitPipeline();
	}
}

export default {
	async fetch(request, env, _ctx): Promise<Response> {
		const url = new URL(request.url);
		const meetingId = url.searchParams.get('meetingId');
		if (!meetingId) {
			return new Response(null, { status: 400 });
		}

		const agentId = meetingId;
		const agent = env.MY_AGENT.idFromName(meetingId);
		const stub = env.MY_AGENT.get(agent);
		// The fetch method is implemented for handling internal pipeline logic
		if (url.pathname.startsWith('/agentsInternal')) {
			return stub.fetch(request);
		}

		// Your logic continues here
		switch (url.pathname) {
			case '/init':
				// This is the authToken for joining a meeting, it can be passed
				// in query parameters as well if needed
				const authHeader = request.headers.get('Authorization');
				if (!authHeader) {
					return new Response(null, { status: 401 });
				}

				// We just need the part after `Bearer `
				await stub.init(agentId, meetingId, authHeader.split(' ')[1], url.host, env.ACCOUNT_ID, env.CF_TOKEN);

				return new Response(null, { status: 200 });
			case '/deinit':
				await stub.deinit();
				return new Response(null, { status: 200 });
		}

		return new Response(null, { status: 404 });
	},
} satisfies ExportedHandler<Env>;
```
