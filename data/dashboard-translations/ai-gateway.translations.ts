{
	title: "AI Gateway",
	description: "Observe and control your AI applications",
	parent: "AI",
	onboarding: {
		title: "Get started with AI Gateway",
		description: "Gain visibility and control over your AI apps by creating and connecting to an AI Gateway.",
		button: "Create Gateway",
		link: "Learn more"
	},
	banners: {
		logs_limit: "Logs now persist and you can store up to 10M logs per gateway. See docs to <0>learn more</0>.",
		no_secret_quota: "You have crossed the quota for the number of secrets you can create on Secrets Store. Please remove existing secrets to create new ones. <0>Learn More</0>",
		no_secrets_store_permission: "You do not have permissions to create and deploy secrets on Secrets Store. Please contact your account administrator to grant you the necessary permissions. <0>Learn More</0>"
	},
	tabs: {
		overview: "Overview",
		gateways: "Gateways",
		general: "Analytics",
		guardrails: "Firewall",
		integrations: "Provider Keys",
		settings: "Settings",
		improved_logs: "Logs",
		evaluations: "Evaluations",
		prompts: "Prompts",
		metrics: "Metrics",
		dyn_routing: "Dynamic Routes",
		billing: "Billing"
	},
	intro: "Settings here will affect your <strong>%{gateway}</strong> gateway only. Use multiple gateways if you want to have different settings for different applications.",
	note: (0, i.p)(r()),
	gateways: {
		create: "Create Gateway",
		table: {
			column: {
				gateways: "Gateway",
				requests: "Requests",
				costs: "Costs",
				status: "Status",
				logs: "Logs",
				last_request: "Last Request",
				auth: "Authorization",
				tooltips: {
					logs: "Total logs"
				}
			},
			rows: {
				tokens: "Tokens:",
				costs: "Costs:",
				cached: "Cached:",
				errors: "Errors",
				requests: "Requests",
				limit: "Limit:"
			},
			empty: "There are no gateways created"
		}
	},
	accountStats: {
		stats: {
			requests: "Requests",
			tokens: "Tokens",
			costs: "Costs",
			logsStored: "Logs stored"
		}
	},
	createGateway: {
		title: "Create new gateway",
		description: "Choose an name for your gateway.",
		gateway: {
			title: "Gateway name",
			placeholder: "my-gateway"
		},
		settings: {
			title: "Settings",
			description: "Important settings for your gateway, you can always change them later"
		}
	},
	prompts: {
		no_prompts: "No prompts",
		new_prompt: "Add new prompt",
		table: {
			header: {
				id: "ID",
				data: "Data"
			},
			extra: {
				edit: "Edit",
				delete: "Delete"
			}
		},
		modal: {
			create: {
				title: "Create a new Prompt",
				description: "Choose an identifier and your data for your prompt.",
				prompt_id: "Prompt ID",
				prompt_data: "Prompt Data"
			},
			update: {
				title: "Update you Prompt",
				description: "Update your prompt data.",
				prompt_id: "Prompt ID",
				prompt_data: "Prompt Data"
			}
		}
	},
	logs: {
		title: "Real-time logs",
		no_logs: (0, i.p)(n()),
		no_collect_logs: (0, i.p)(l()),
		example: "Or use the code snippet below to quickly test and send your first request.",
		search_content: "Search in the request or response content",
		search_button: "Search",
		stream: "Stream",
		live: "Live",
		table: {
			header: {
				time: "Time",
				status: "Status",
				model: "Model",
				request: "Request",
				response: "Response",
				request_size: "Request size",
				tokens: "Usage",
				cost: "Cost",
				duration: "Duration",
				feedback: "Feedback"
			}
		},
		drawer: {
			metadata: {
				title: "Edit metadata"
			}
		},
		status: {
			cached: "Cached",
			success: "Success",
			error: "Error"
		},
		type: {
			universal: "Universal",
			universal_step: "Fallback model ",
			worker_ai: "Workers AI Binding",
			ws: "WebSocket",
			guardrails: "Guardrails"
		},
		details: {
			wholesaled: "Unified Billing",
			provider: "Provider",
			model: "Model",
			endpoint: "Endpoint",
			details: "Details",
			tokens: "Tokens",
			cost: "Cost",
			duration: "Duration",
			request: "Request",
			response: "Response",
			custom_metadata: "Metadata",
			request_full_content: "Request too large (%{value})",
			response_full_content: "Response too large (%{value})",
			response_not_available: "Not available",
			request_not_available: "Not available"
		},
		common: {
			custom_cost: "Custom cost",
			streaming: "Streaming",
			input: "input",
			output: "output",
			input_short: "in",
			output_short: "out",
			filter: "Filter",
			input_tokens: "input",
			output_tokens: "output",
			input_cached_tokens: "input cached",
			input_cache_creation_tokens: "input cache creation",
			input_text_tokens: "input text",
			input_image_tokens: "input image",
			input_audio_tokens: "input audio",
			input_video_tokens: "input video",
			output_reasoning_tokens: "output reasoning"
		},
		filters: {
			provider: "Provider",
			model: "Model",
			dlp_action: "DLP Action",
			success: "Status",
			cached: "Cache",
			request_type: "Request Type",
			tokens: "Tokens",
			tokens_in: "Tokens In",
			tokens_out: "Tokens Out",
			cost: "Cost",
			duration: "Duration",
			feedback: "Feedback",
			created_at: "Logs",
			metadata_key: "Metadata Key",
			metadata_value: "Metadata Value",
			log_id: "Log ID",
			event_id: "Event ID",
			wholesale: "Wholesale",
			operators: {
				eq: "equals",
				neq: "not equals",
				gt: "greater than",
				lt: "less than",
				contains: "contains",
				before: "before",
				after: "after"
			}
		},
		delete_logs: {
			title: "Delete Filtered Logs",
			description: "Currently we delete 10 000 logs max at a time. If you need to delete more logs, please repeat this step until all the logs you would like deleted are removed"
		}
	},
	evaluations: {
		table: {
			header: {
				evaluation: "Evaluation",
				dataset: "Dataset",
				status: "Status",
				cost: "Cost",
				speed: "Speed",
				human_feedback: "Human Feedback",
				tooltip: {
					cost: "Average cost of requests.",
					speed: "Average duration of requests.",
					human_feedback: "Percent of thumbs up annotated from logs."
				}
			},
			extra: {
				delete: "Delete",
				rerun: "Rerun"
			}
		},
		remove_evaluation: {
			modal: {
				title: "Are you sure you want to delete this evaluation?",
				description: "Deleting <strong>%{evaluation}</strong> is permanent and cannot be undone."
			}
		},
		no_evaluations: "No evaluations",
		no_dataset: "No dataset",
		create_new_evaluation: "Create new evaluation",
		create_dataset: "Create Dataset",
		create_dataset_tooltip: "Apply filters to narrow down your logs, then select **Create Dataset** to store the filtered logs for future analysis.",
		remove_logs: "Delete logs",
		save: "Save",
		saving: "Saving"
	},
	settings: {
		logs: {
			title: "Collect Logs",
			description: "Store request and response payloads, including the prompt, response, provider, timestamps, and the status of the request.",
			limit: {
				title: "Set log limit",
				description: (0, i.p)(d()),
				note: "New logs outside of the set limit will not be stored",
				limits: (0, i.p)(u()),
				resume_label: (0, i.p)(c())
			},
			auto_delection: {
				title: "Automatic deletion",
				new_logs: "When gateway storage limit is reached new logs will stop being saved.",
				new_logs_label: "Stop store new logs",
				old_logs: "Automatically delete the oldest logs when gateway storage limit is reached to ensure new logs are always saved.",
				old_logs_label: "Delete oldest logs",
				resume_label: (0, i.p)(p())
			}
		},
		improved_logs: {
			title: "Improved Logs",
			description: "Store your logs for longer."
		},
		log_push: {
			title: "Export AI Gateway Logs",
			description: "Securely export logs to an external storage location using Logpush.",
			button: "Public Key",
			modal: {
				title: "Update Public Key",
				description: "Upload the public key you generated to encrypt your logs.",
				public_key: "Public Key"
			},
			workers_paid: {
				note: "Send AI Gateway Logs to a supported destination using Logpush. Logs will include prompts, responses, metadata, token usage, cost, duration, and more.",
				update: "Available on Workers Paid plan"
			}
		},
		caching: {
			title: "Cache Responses",
			description: "Serve requests from our cache rather than your original provider to lower costs and provide faster responses for your users.",
			resume: (0, i.p)(m())
		},
		ratelimiting: {
			title: "Rate Limit Requests",
			description: "Control the traffic your application gets to cap spending or prevent suspicious activity by limiting requests.",
			configuration_1: "Limit requests when rate exceeds",
			configuration_2: "requests over a",
			configuration_3: "period.",
			resume: (0, i.p)(g())
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
		cleanup_logs: {
			title: "Auto Log Cleanup",
			description: "Automatically delete the oldest logs to stay within the gateway's storage limit and ensure new logs are saved."
		},
		security: {
			title: "Guardrails",
			description: "Identify unsafe or inappropriate content in prompts and responses based on selected categories, then flag or block as needed.",
			note: "Guardrails uses Workers AI, and usage will be reflected in the Workers AI dashboard",
			categories_prompt_title: "Prompt hazard categories",
			categories_response_title: "Response hazard categories",
			setting_table: {
				categories: "Hazard categories",
				prompt: "Moderation for Prompts",
				response: "Moderation for Responses",
				all_categories: "All categories"
			},
			less_configs: "Collapse advanced settings",
			more_configs: "Configure specific categories",
			data_loss_prevention: "Data Loss Prevention (DLP)",
			dlp: {
				title: "Data Loss Prevention (DLP)",
				description: "Scan content for sensitive data and prevent data leakage by selecting DLP profiles.",
				enable_toggle: "Enable DLP",
				profiles_label: "DLP Profiles",
				profiles_placeholder: "Select DLP profiles to apply",
				no_profiles: "No DLP profiles available"
			}
		},
		auth: {
			title: "Authenticated Gateway",
			tooltipEnabled: "Authentication is <strong>enabled</strong> for this gateway. Requires an authorization token in each request header. <0>Settings</0>",
			tooltipDisabled: "Authentication is <strong>disabled</strong> for this gateway. Enabling it requires an authorization token in each request header. <0>Settings</0>",
			description: "Enabling authentication for this gateway requires an authorization token in each request header. <0>Create authentication token</0>",
			modal: {
				title: {
					enable: "Enable authentication for <strong>%{gateway}</strong>?",
					disable: "Disable authentication for <strong>%{gateway}</strong>?"
				},
				description: {
					enable: "Before proceeding, ensure that all requests to this gateway have a valid authorization token, as requests without the token will fail.",
					disable: "Turning off authentication will allow requests without an authorization token to access this gateway, and any existing tokens will be ignored."
				}
			}
		},
		zdr: {
			title: "Zero Data Retention",
			description: "Enable Zero Data Retention mode to ensure AI providers do not retain any data related to requests and responses for unified billing requests.",
			modal: {
				title: "Enable Zero Data Retention for <strong>%{gateway}</strong>?",
				description: "Enabling ZDR will prevent AI providers from retaining request and response data. Note that features requiring data retention, such as prompt caching, may stop working when ZDR is enabled. This setting only impacts requests using Unified Billing on AI Gateway."
			}
		},
		otel: {
			title: "Otel Integration",
			description: "Configure Otel integration to automatically report tracing data to an OpenTelemetry endpoint.",
			docs: "Docs"
		},
		stripe_integration: {
			title: "Stripe Integration",
			description: "Configure Stripe integration to automatically report usage-based billing data to a meter on your Stripe account.",
			docs: "Docs",
			stripe_api_key: "Stripe API Key",
			stripe_api_key_placeholder: "sk_test_... or sk_live_...",
			stripe_api_key_reconfigure_placeholder: "Leave empty to keep existing key, or enter new key to update",
			stripe_api_key_description: "Create an API key on your stripe dashboard with access to report meter events.",
			learn_more: "Learn more",
			payload_type: "Meter Event Payload Configuration",
			payload_type_description: "Configure the format of the meter event payloads sent to your usage-based billing meter.",
			mode: "Mode:",
			usage_event_payloads: "Usage Event Payloads",
			event: "Event %{index}",
			add_event: "Add Event",
			save_configuration: "Save Configuration",
			cancel: "Cancel",
			configure: "Configure",
			reconfigure: "Reconfigure",
			remove: "Remove",
			customize_payload: "Customize Payload",
			default_payload: "Default",
			custom_payload: "Custom",
			use_default_payload: "Use default payload",
			default_payload_description: "AI Gateway will send default meter event payloads formats for LLM tokens to your meter.",
			default_payload_metadata_requirement: 'Requests need to pass a valid Stripe customer ID in the "customerId" field on custom metadata in their AI Gateway request using the following header:',
			default_payload_metadata_header: 'cf-aig-metadata: {"customerId": "cus_XXX"}',
			default_events_configured: "AI Gateway will send meter events for token usage to your Stripe account.",
			custom_events_configured: "Stripe is configured with %{count} custom usage event(s)",
			configuring: "Configuring...",
			removing: "Removing...",
			configured_message: "Stripe integration is configured and active",
			available_template_variables: "Available template variables: %{variables}",
			template_variables_tooltip: {
				title: "Template Variables:",
				cost: "$cost - Total cost of the request in USD",
				model: "$model - AI model used (e.g., gpt-4, claude-3)",
				provider: "$provider - Provider name (e.g., openai, anthropic)",
				input_tokens: "$input_tokens - Number of input tokens processed",
				output_tokens: "$output_tokens - Number of output tokens generated",
				cached_read_tokens: "$cached_read_tokens - Tokens read from cache",
				cached_write_tokens: "$cached_write_tokens - Tokens written to cache",
				metadata_key: "$metadata_metadataKey - Custom metadata field from cf-aig-metadata header",
				metadata_note: "Replace 'metadataKey' with your actual field name (e.g., $metadata_customerId)"
			},
			payload_placeholder: '{"customer": "$metadata_customerId", "price": "$cost", "quantity": 1, "usage_timestamp": "{{timestamp}}"}',
			modal: {
				remove_title: "Remove Stripe Integration",
				remove_description: "This will disable Stripe integration and remove your stripe API key from secret store. This action cannot be undone."
			},
			errors: {
				stripe_key_required: "Stripe key is required",
				usage_event_required: "At least one usage event payload is required",
				secrets_store_unavailable: "Secrets store not available",
				save_failed: "Failed to save Stripe key to secure storage",
				update_failed: "Failed to update Stripe integration settings",
				remove_failed: "Failed to remove Stripe integration settings"
			}
		},
		remove_gateway: {
			title: "Delete Gateway",
			description: "Deleting\xa0Gateway <strong>%{gateway}</strong>\xa0is permanent and cannot be undone. You will no longer be able to send any requests through it, and all logs and metrics related to it will be lost.",
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
			cache_custom: (0, i.p)(_()),
			ratelimiting_fixed: "Fixed",
			ratelimiting_sliding: "Sliding",
			change: "Change"
		}
	},
	auth: {
		title: "Using authenticated AI Gateway",
		description: "Enable authenticated access to AI Gateway. <0>Authenticated AI Gateway documentation</0>",
		get_token: {
			title: "Get AI Gateway Token",
			description: "To use authenticated AI Gateway, create a custom token with the correct <i>Run</i> permissions:",
			button: "Create an AI Gateway authentication token"
		},
		get_account: {
			title: "Get Account ID",
			description: "Use this account ID to make API calls to AI Gateway."
		},
		example: {
			title: "Example request using authenticated AI Gateway",
			description: "Add <b>cf-aig-authorization</b> header before enabling authenticated AI Gateway in gateway settings."
		},
		modal: {
			title: "Create an AI Gateway authentication token",
			description: "Get run access to the authenticated AI Gateway"
		}
	},
	datasets: {
		title: "Datasets",
		description: "Datasets are collections of logs stored for analysis that can be used for an evaluation",
		create_dataset: "Create a new dataset",
		view_logs: "View Logs",
		back_to_logs: "Back to logs",
		remove_dataset: {
			modal: {
				title: "Delete Dataset?",
				description: "Deleting <strong>%{dataset}</strong> is permanent and cannot be undone."
			}
		},
		modal_create: {
			title: "Create Dataset",
			description: "Choose an identifier for your dataset."
		},
		buttons: {
			manage: "Manage Datasets",
			create: "Create Dataset"
		}
	},
	routing: {
		name: "Dynamic Routing",
		description: "Route each request to an LLM best fit for the job. Enforce rate limits, spend caps and custom conditional rules. Split traffic by percentage, target specific models or providers, and automatically fail over on errors.",
		add_route: "Add Route",
		routes: "Active Routes:",
		no_routes_defined: "No routes defined",
		route_name: "Route Name",
		deployed_version: "Deployed Version",
		requests: "Num requests",
		add_new_route: "Create a new Route",
		tabs: {
			editor: "Editor",
			versions: "Versions"
		}
	},
	gateway_modal: {
		title: "Create a new AI Gateway",
		description: "Choose an identifier for your Gateway and API endpoint.",
		gateway: "Gateway name",
		url: "Gateway name"
	},
	providers_modal: {
		title: "Connect to your applications with API Endpoints",
		description: (0, i.p)(y()),
		provider: "Platform",
		api_endpoint: "API Endpoint",
		example: "Use the code snippet below to test your endpoint:"
	},
	new_user: {
		title: "Get started by creating an AI Gateway",
		description: "AI Gateway lets you tunnel your AI requests through Cloudflare so you can get logs, caching, rate-limiting and more. Use different gateways to separate logs, metrics and settings between different applications. You can create as many gateways as you want. Start by creating your first one!",
		create_gateway: "Create&nbsp;Gateway"
	},
	new_evaluation: {
		back: "Back to Evaluations",
		actions: {
			back: "Previous step",
			continue: "Continue",
			run: "Run evaluation"
		},
		step_1: {
			name: "Choose dataset",
			title: "Choose or create dataset",
			description: "Datasets are the collection of logs that will be used for this evaluation. Choose from your existing datasets or create a new one."
		},
		step_2: {
			name: "Choose evaluators",
			title: "Choose evaluators",
			description: "Choose the evaluators you’d like to include. By default all evaluations include cost and speed."
		},
		step_3: {
			name: "Review & run",
			title: "Review & Run",
			description: "Take one last look over your evaluation, and make any changes",
			evaluation: {
				title: "Evaluation name",
				description: "Used to reference your evaluation in the dashboard"
			},
			dataset: {
				title: "Dataset"
			},
			evaluators: {
				title: "Evaluators"
			}
		}
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
			tooltip: "The estimated cost from supported providers"
		},
		errors: {
			titles: "Errors",
			tooltip: "The number of requests that resulted in an error sent from this AI Gateway over the selected period of time"
		}
	},
	overview: {
		metrics: {
			title: "Metrics",
			time_period: "Last 24 hours"
		},
		next_steps: {
			title: "Next steps",
			create_token: {
				title: "Create a token",
				description: "Create a token to authenticate your requests to AI Gateway",
				button: "Create"
			},
			first_request: {
				title: "Try your first request",
				description: "Send your first request through AI Gateway"
			},
			store_keys: {
				title: "Store your LLM Keys",
				description: "Securely store your LLM keys in the AI Gateway"
			},
			dynamic_route: {
				title: "Create a dynamic route",
				description: "Setup custom rate limits, budget limits and more with Dynamic Routes"
			}
		},
		usage_examples: {
			title: "Usage Examples",
			no_examples: "No code examples available for this provider",
			select_options: {
				unified: "Unified / OpenAI compat",
				native: "Native",
				native_curl: "Native cURL"
			}
		}
	},
	toast: {
		no_gateways: (0, i.p)(h()),
		limits: {
			free: {
				almost_full: "You are nearing the limit of logs that can be stored for <b>the free plan (100k per account)</b>. See <0>docs</0> to learn more.",
				full: "You have reached the limit of logs that can be stored for <b>the free plan (100k per account)</b>. See <0>docs</0> to learn more."
			},
			paid: {
				almost_full: "You are nearing the limit of logs that can be stored <b>in each gateway (10M)</b>. See <0>docs</0> to learn more.",
				full: "You have reached the limit of logs that can be stored <b>in each gateway (10M)</b>. See <0>docs</0> to learn more."
			}
		}
	},
	errors: {
		gateway: {
			already_exist: "A gateway with this id already exists",
			invalid_format: "Invalid format to a gateway",
			input_length: "Gateway slug must contain at most 24 characters",
			invalid_rsa_public_key: "Invalid logpush RSA public key",
			public_key_length: "Public key must contain at least 16 characters"
		},
		prompt: {
			already_exist: "A prompt with this id already exists",
			invalid_format: "Invalid format to a prompt",
			input_length: "Prompt id must contain at most 32 characters"
		},
		evaluation: {
			already_exist: "A evaluation with this name already exists"
		},
		dataset: {
			already_exist: "A dataset with this id already exists",
			default: "sorry, an error occurred"
		},
		defaults: {
			max_num_gateways: "Max number of gateways reached"
		},
		provider_keys: {
			secret_required: "A secret is required",
			secret_name_already_exists: 'A secret with the same name ("%{secretName}") already exists on <0>Secret Store</0>. Please delete that to configure a secret for AI gateway.',
			internal_error: "Internal error occurred. Please contact customer support for assistance."
		}
	},
	learnMore: {
		docs: "Get started with AI Gateway",
		cli: "AI Gateway with Workers AI",
		discord: "Join Discord Server"
	},
	credits: {
		title: "Credits",
		add_payment_error: "Add a payment method to purchase credits",
		add_payment_error_redirect: "Set up billing",
		top_up: "Top-up credits",
		credits_avail: "Credits available",
		topup_description: "You can purchase credits using your stored payment methods. These can be utilized to against any supported provider-model combinations via Cloudflare AI Gateway.",
		autotopup_setup: "Setup auto top-up credits",
		autotopup_edit: "Edit auto top-up credits",
		autotopup_title: "Auto recharge",
		autotopup_description: "Add credits automatically when they crosses a certain threshold. Enabling auto top-up is recommended to avoid availability disruptions.",
		autotopup_current_config: "When credit balance reached $%{threshold}, add $%{amount} automatically.",
		spendlimit_title: "Spend limit",
		spendlimit_sidebar_title: "Add a spending limit",
		spendlimit_sidebar_limit_label: "Limit spending to (in USD)",
		spendlimit_sidebar_limit_placeholder: "$ Amount in USD",
		spendlimit_sidebar_strategy_label: "Using the limit strategy",
		spendlimit_sidebar_strategy_fixed_title: "Fixed",
		spendlimit_sidebar_strategy_fixed_description: "Tracks spends within set time interval.",
		spendlimit_sidebar_strategy_sliding_title: "Sliding Window",
		spendlimit_sidebar_strategy_sliding_description: "Tracks spends over a moving time window.",
		spendlimit_description: "Prevent your AI Gateway from incurring unexpected charges by setting a spend limit. When the spend limit is reached, the AI Gateway will stop processing requests until the configured conditions are met.",
		spendlimit_email_message: "You will be notified via email when you reach 90% of your limit.",
		disable_spendlimit_modal_header: "Disable spend limit?",
		disable_spendlimit_modal_description: "Are you sure you want to disable the spend limit? This will remove all spending restrictions for your AI Gateway usage.",
		disable: "Disable",
		disable_autotopup_modal_header: "Disable auto top-up?",
		disable_autotopup_modal_description: "Disabling auto top-up may cause service interruptions if your credit balance runs low. You can re-enable it later.",
		autotopup_current_values: "(Adds %{amount} when available credits &lt;%{threshold})",
		autotopup_modal_setup: "Setup auto top-up",
		autotopup_modal_edit: "Edit auto top-up",
		autotopup_balance_threshold: "When balance reaches",
		autotop_balance_topup: "Auto top-up with",
		topup_modal_title: "Top up AI Gateway credits",
		amount: "Amount",
		topup_min_max: "Min %{min} and max %{max}",
		payment_processing_fee: "Payment Processing Fee",
		payment_fees_disclaimer_confirm: 'These credits can only be used for AI Gateway and by clicking "Confirm and Pay", you agree to our Terms and Privacy Policy.',
		cancel: "Cancel",
		setup: "Setup",
		save: "Save",
		confirm_and_pay: "Confirm and pay",
		total: "Total",
		autotopup_terms_confirm: "I have read, understood, and agree to be bound by the above terms.",
		usage_history: "Usage history",
		read_all: "Read all terms",
		read_less: "Read less",
		date: "Date",
		invoice: "Invoice",
		type: "Type",
		status: "Status",
		topup_type_auto: "Auto top-up",
		topup_type_manual: "Manual top-up",
		topup_paid: "Paid",
		topup_unpaid: "Unpaid",
		no_invoices_avail: "No invoices available",
		payment_successful: "Payment Successful!",
		credits_added: "$%{amount} has been added to your account.",
		done: "Done",
		default_payment_method: "We will use your default payment method to perform automatic recharges. Please ensure that your payment method supports automatic payments.",
		processing: "Processing",
		change_payment_method: "Change",
		first_topup_disclaimer: "Please load credits to start using unified billing on AI Gateway.",
		threshold_confirmation_title: "Confirm Auto Top-up Configuration",
		threshold_confirmation_message: "The auto top-up threshold configured ($%{threshold}) is greater than your current balance ($%{balance}). Confirming will lead to your account instantly loading in credits automatically. Are you sure you want to proceed?",
		threshold_confirmation_cancel: "Cancel",
		threshold_confirmation_confirm: "Confirm"
	},
	custom_providers: {
		title: "Custom Providers",
		subtitle: "Custom providers allow you to use private providers / providers unsupported by default with AI Gateway.",
		add_provider_modal_header: "Add Custom Provider"
	},
	common: {
		documentation: "AI Gateway Documentation",
		docs: "Documentation",
		back: "Back",
		beta: "Beta",
		no_data: "No data available",
		customTtl: "Custom: %{value} seconds",
		log: "Log",
		logs: "Logs",
		token: "Token",
		tokens: "Tokens",
		gateway: "Gateway",
		gateways: "Gateways",
		prompt: "Prompt",
		prompts: "Prompts",
		evaluation: "Evaluation",
		evaluations: "Evaluations",
		dataset: "Dataset",
		datasets: "Datasets",
		download: "Download",
		delete: "Delete",
		latest_logs: "Latest log",
		seconds_ago: "seconds ago",
		minutes_ago: "minutes ago",
		hours_ago: "hours ago",
		days_ago: "days ago",
		evaluators: {
			cost: {
				title: "Cost",
				description: "Calculate the average cost of requests (limited to requests that have supported costs)."
			},
			speed: {
				title: "Speed",
				description: "Calculate the average duration of requests."
			},
			feedback: {
				title: "Human Feedback",
				description: "Calculate the performance using human feedback annotated from logs (% of thumbs up)."
			}
		},
		ignore: "Ignore",
		flag: "Flag",
		block: "Block",
		guardrails: {
			prompt_title: "Guardrails (on prompt)",
			response_title: "Guardrails (onresponse)"
		},
		hazard_categories: {
			s1: "Violent Crimes",
			s2: "Non-Violent Crimes",
			s3: "Sex Crimes",
			s4: "Child Exploitation",
			s5: "Defamation",
			s6: "Specialized Advice",
			s7: "Privacy",
			s8: "Intellectual Property",
			s9: "Indiscriminate Weapons",
			s10: "Hate",
			s11: "Self-Harm",
			s12: "Sexual Content",
			s13: "Elections",
			p1: "Prompt Injection / Jailbreaks"
		}
	},
	provider_keys: {
		title: "Provider Keys",
		subtitle: "Securely use your own provider API keys with AI Gateway without the hassle of managing them in code.",
		view_docs: "View Docs",
		table: {
			provider: "Provider",
			last_updated: "Last Updated",
			value: "Value"
		},
		add_var: "+ Add another provider",
		type: "Provider:",
		secret_placeholder: "API Key",
		save: "Save",
		auth_warning: "Your gateway needs to be authenticated to store and use keys.",
		learn_more: "Learn more"
	},
	edit_provider_modal: {
		title_add: "Add",
		title_edit: "Edit",
		title_key: "Key",
		input_label: "API Key",
		secret_store_info: "Your key is encrypted and stored securely using Secrets Store.",
		cancel: "Cancel",
		google_vertex: {
			service_account_json: "Service Account JSON",
			service_account_placeholder: "Paste your Google Cloud service account JSON here...",
			region: "Region",
			configuration: "Configuration"
		}
	},
	confirm_provider_config_delete_modal: {
		title: "Are you sure you want to delete the key for %{provider}?",
		description: "Deleting this key will cause all subsequent requests to requests hosted by %{provider} which depend on this key to fail."
	}
}