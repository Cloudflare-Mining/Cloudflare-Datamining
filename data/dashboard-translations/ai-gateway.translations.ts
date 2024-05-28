{
	title: "AI Gateway",
	description: "Observe and control your AI applications",
	onboarding: {
		title: "Get started with AI Gateway",
		description: "Gain visibility and control over your AI apps by creating and connecting to an AI Gateway.",
		button: "Create Gateway",
		link: "Learn more"
	},
	tabs: {
		general: "Analytics",
		settings: "Settings",
		logs: "Real-time logs",
		metrics: "Metrics"
	},
	intro: "Settings here will affect your <strong>%{gateway}</strong> gateway only. Use multiple gateways if you want to have different settings for different applications.",
	note: (0, t.d)`Workers AI will start billing for neuron usage on April 1st. <0>Learn more</0>`,
	logs: {
		title: "Real-time logs",
		no_logs: (0, t.d)`No logs exist for this gateway yet. <0>Learn how to send your first request</0>`,
		search_content: "Search in the request or response content",
		search_button: "Search",
		table: {
			header: {
				time: "Time",
				status: "Status",
				model: "Model",
				request: "Request",
				response: "Response"
			}
		},
		status: {
			cached: "Cached",
			success: "Success",
			error: "Error"
		},
		details: {
			provider: "Provider",
			model: "Model",
			endpoint: "Endpoint",
			tokens: "Tokens",
			request: "Request",
			response: "Response",
			custom_metadata: "Custom Metadata"
		}
	},
	settings: {
		logs: {
			title: "Real-time logs",
			description: "Save request and response payloads such as prompt, response, provider, timestamps, and whether the request was successful, cached, or if there was an error."
		},
		caching: {
			title: "Cache Responses",
			description: "Serve requests from our cache rather than your original provider to lower costs and provide faster responses for your users.",
			resume: "Automatically purge cached requests after %{value}."
		},
		ratelimiting: {
			title: "Rate-limiting",
			description: "Control the traffic your application gets to cap spending or prevent suspicious activity by limiting requests.",
			configuration_1: "Limit requests when rate exceeds",
			configuration_2: "requests over a",
			configuration_3: "period.",
			resume: "Limit traffic when rate exceeds %{requests} requests over a %{time} %{type} period."
		},
		rename_gateway: {
			title: "Edit Gateway",
			description: "Update the name and URL slug of Gateway %{gateway}.",
			button: "Edit",
			edit: {
				name: "New Name",
				slug: "Gateway URL slug"
			}
		},
		remove_gateway: {
			title: "Delete Gateway",
			description: "Deleting\xA0Gateway <strong>%{gateway}</strong>\xA0is permanent and cannot be undone. You will no longer be able to send any requests through it, and all logs and metrics related to it will be lost.",
			modal: {
				title: "Delete Gateway?",
				description: "Deleting <strong>%{gateway}</strong> is permanent and cannot be undone. You will no longer be able to add or modify any models in this project."
			}
		},
		toast: {
			cache: {
				disabled: "Gateway cache was disabled",
				updated: "Cache settings were updated"
			},
			ratelimiting: {
				disabled: "Rate-limiting was disabled",
				updated: "Rate-limiting settings were updated"
			},
			logs: {
				true: "Gateway Logs will include payloads",
				false: "Gateway Logs will exclude payloads"
			}
		},
		common: {
			ttl: "Automatically purge cached requests after",
			limit: "Limit requests when rate exceeds",
			interval: "requests over a",
			technique: "period",
			cache_custom: (0, t.d)`Custom: %{value} seconds`,
			ratelimiting_fixed: "Fixed",
			ratelimiting_sliding: "Sliding",
			change: "Change"
		}
	},
	gateway_modal: {
		title: "Create a new AI Gateway",
		description: "Select a name to identify your Gateway in the dashboard, and a unique URL slug for your API endpoint.",
		gateway: "Gateway name",
		url: "Gateway URL slug"
	},
	providers_modal: {
		title: "Connect to your applications with API Endpoints",
		description: (0, t.d)`Use this API Endpoint URL to connect to your AI applications and platforms.<br/><0>Learn more</0>`,
		provider: "Platform",
		api_endpoint: "API Endpoint",
		example: "Use the code snippet below to test your endpoint:"
	},
	new_user: {
		title: "Get started by creating an AI Gateway",
		description: "AI Gateway lets you tunnel your AI requests through Cloudflare so you can get logs, caching, rate-limiting and more. Use different gateways to separate logs, metrics and settings between different applications. You can create as many gateways as you want. Start by creating your first one!",
		create_gateway: "Create&nbsp;Gateway"
	},
	quick_links: {
		title: "Quick Links",
		documentation: "Docs",
		discord: "Discord",
		community: "Community"
	},
	stats: {
		title: "Overview",
		requests: {
			titles: "Requests",
			tooltip: "The number of requests made through this AI Gateway over the selected period of time"
		},
		cache: {
			titles: "Cached",
			tooltip: "The number of cached responses provided by this AI Gateway over the selected period of time"
		},
		tokens: {
			titles: "Tokens",
			tooltip: "The estimated total number of tokens (from all models and all providers) used by this AI Gateway over the selected period of time"
		},
		cost: {
			titles: "Cost",
			tooltip: "Supporting only Open AI"
		},
		errors: {
			titles: "Errors",
			tooltip: "The number of requests that resulted in an error sent from this AI Gateway over the selected period of time"
		}
	},
	common: {
		no_data: "No data available",
		customTtl: "Custom: %{value} seconds",
		log: "Log",
		logs: "Logs"
	},
	toast: {
		no_gateways: (0, t.d)`No Gateways Found. <0>Create an AI gateway</0> to observe your AI applications`
	},
	errors: {
		gateway: {
			already_exist: "A gateway with this id already exists",
			invalid_format: "Invalid format to a gateway",
			input_length: "Gateway slug must contain at most 24 characters"
		}
	}
}