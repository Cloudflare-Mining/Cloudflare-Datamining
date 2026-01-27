{
	overview_page: {
		operators_card: {
			title: "Crawlers"
		},
		robots_policy_card: {
			title: "Robots.txt policy"
		},
		violations_card: {
			title: "Robots.txt violations",
			no_violations: "No robots.txt violations found",
			violated_rules: "Violated rules"
		},
		executive_summary_card: {
			title: "Summary",
			empty_state: "No requests from AI Crawlers with the selected filters",
			ai_crawlers: "AI Crawlers",
			blocked_requests: "Cloudflare blocked <b>%{count}</b> request from %{subject}. |||| Cloudflare blocked <b>%{count}</b> requests from %{subject}.",
			blocked_requests_generic: "Cloudflare blocked <b>%{count}</b> request. |||| Cloudflare blocked <b>%{count}</b> requests.",
			detected_requests: "Cloudflare detected <b>%{count}</b> request from %{subject}. |||| Cloudflare detected <b>%{count}</b> requests from %{subject}.",
			detected_requests_generic: "Cloudflare detected <b>%{count}</b> request. |||| Cloudflare detected <b>%{count}</b> requests.",
			most_common_status_code: "<b>%{count}</b> crawl received an <b>HTTP %{statusCode}</b> response |||| <b>%{count}</b> crawls received an <b>HTTP %{statusCode}</b> response.",
			increase: "This is a <b>%{percentage}% increase</b> compared to the previous period.",
			decrease: "This is a <b>%{percentage}% decrease</b> compared to the previous period.",
			crawler_requests: "<b>%{count}</b> request was from <b>%{crawler}</b>. |||| <b>%{count}</b> requests were from <b>%{crawler}</b>.",
			operator_referrals: "<b>%{operator}</b> referred <b>%{count}</b> visitor to <b>%{zone}</b>. |||| <b>%{operator}</b> referred <b>%{count}</b> visitors to <b>%{zone}</b>.",
			most_crawled_path: "<b>%{path}</b> is the most crawled path with <b>%{count}</b> successful requests. |||| <b>%{path}</b> is the most crawled path with <b>%{count}</b> successful requests."
		}
	},
	bots_page: {
		block_all: {
			title: "Block AI Crawlers",
			description: "Block AI Crawlers from scraping your websites and training LLMs without your consent.<br><b>Note:</b> Blocking AI Bots will also block verified AI bots. <0>Learn more</0>.",
			toast: "We have a newer version of this setting available. Make sure to enable it to help you block AI Crawlers.",
			tooltip: "This crawler is being blocked by the <b>Block AI Bots</b> security setting. <0>Disable it</0> to control it in <b>AI Crawl Control</b>."
		},
		bot_management_card: {
			rules: {
				block_ai_bots: {
					disclaimer: "Other <0>security settings</0> may impact the behavior of this rule"
				},
				robots_txt: {
					title: "Robots.txt",
					status: {
						managed: {
							title: "Cloudflare Managed",
							description: "Cloudflare creates or updates your robots.txt file to signal that your content should not be used for AI training."
						},
						self_managed: {
							title: "Self Managed",
							description: "Enabling Cloudflare's managed robots.txt creates or updates a robots.txt file to signal that your content should not be used for AI training."
						}
					}
				}
			}
		},
		bulk_action: {
			selected: "<b>%{count}</b> of %{total} crawlers selected",
			bypass: {
				title: "Confirm Allow?",
				description: "This action will set <b>%{botCount}</b> crawlers to <b>Allow</b>.<br>Are you sure you want to proceed?"
			},
			charge: {
				title: "Confirm Charge?",
				description: "This action will set <b>%{botCount}</b> crawlers<0></0> to <b>Charge</b>.<br>These crawlers will be charged <b>$%{price}</b> for each request.<br>Are you sure you want to proceed?"
			},
			block: {
				title: "Confirm Block?",
				description: "This action will set <b>%{botCount}</b> crawlers<0></0> to <b>Block</b>.<br>Are you sure you want to proceed?"
			},
			search_engines: "(including Search Engine Crawlers)"
		},
		disclaimer: "Cloudflare can send payment requests to the Crawlers on this list. This is not a list of Crawlers or Operators participating in pay per crawl.",
		table: {
			title: "Summary",
			columns: {
				bot: "Crawler",
				operator: "Operator",
				category: "Category",
				allowed_requests: "Allowed requests",
				blocked_requests: "Blocked requests",
				violations: "Robots.txt violations",
				action: "Action",
				action_header_tooltip: "Sets a <0>custom WAF rule</0>. Crawlers set to <b>Allow</b> may still be affected by other rules."
			},
			more_actions: {
				view_metrics: "View Metrics",
				view_security_analytics: "View in Security Analytics",
				view_radar: "View on Cloudflare Radar",
				copy_user_agents: "Copy User Agent |||| Copy User Agents",
				copy_detection_ids: "Copy Detection ID |||| Copy Detection IDs",
				copy_directives: "Copy Directive |||| Copy Directives"
			}
		}
	},
	categories: {
		"AI Assistant": "AI Assistant",
		"AI Crawler": "AI Crawler",
		"AI Search": "AI Search",
		Archiver: "Archiver",
		Other: "Other",
		"Search Engine Crawler": "Search Engine Crawler"
	},
	common: {
		allow: "Allow",
		allowed: "Allowed",
		allowed_by_waf: "Allowed by WAF",
		block: "Block",
		blocked: "Blocked",
		blocked_by_waf: "Blocked by WAF",
		cancel: "Cancel",
		charge: "Charge",
		charge_amount: "charge $%{amount}",
		charged: "Charged",
		clear: "Clear All",
		configure: "Configure",
		confirm: "Confirm",
		connect: "Connect",
		connected: "Connected",
		crawlers: "Crawlers",
		default: "Default",
		learn_more: "Learn More",
		directive: "Directive",
		disable: "Disable",
		disabled: "Disabled",
		disallow: "Disallow",
		disallowed: "Disallowed",
		discard: "Discard",
		discard_changes_message: "You have unsaved changes. Are you sure you want to discard them?",
		disconnect: "Disconnect",
		done: "Done",
		edit: "Edit",
		empty: {
			bots_table: "No crawlers with the current filters.",
			availability_table: "No data available for the current filters."
		},
		enable: "Enable",
		enabled: "Enabled",
		errors: {
			no_data: "No request data found.",
			no_data_referral: "No referral data found.",
			no_data_or_dns: "No request data found. Make sure your <0>DNS records</0> are set to <1>proxied</1> or try refreshing the page.",
			robots_txt: {
				no_files: "No robots.txt files found.",
				no_data: "No robots.txt data found.",
				no_hostnames: "No hostnames found on your zone."
			},
			waf: {
				managed_rule_enabled: "Some crawlers are being blocked by the <b>Block AI Bots</b> security setting. <0>Disable it</0> to control them in <b>AI Crawl Control</b>.",
				custom_rule_disabled: "AI Crawl Control security rule is disabled. Please <0>re-enable</0> it.",
				max_rules_toast: "You have used all <b>%{maxRules}</b> security custom rules available on the plan. To enable blocking individual AI Crawlers you need to <0>delete a rule</0> or upgrade your plan.",
				max_rules_notification: "No security custom rules available. To block individual AI Crawlers you need to <0>delete a rule</0> or upgrade your plan.",
				custom_response_no_rule: "You must block one or more <0>Crawlers</0> in order to set a custom response."
			},
			read_only: "You don't have permissions to change this setting.",
			pay_per_crawl_disabled: "Pay Per Crawl is disabled. <0>Enable</0>",
			terms_required: "Please accept the terms and conditions to enable. <0>Review now</0>.",
			ironclad_error: "An error occurred while agreeing to terms.<br>Check your permissions or try again later.<br>Contact us if the problem persists.",
			bot_management_required: "Pay Per Crawl requires <0>Enterprise Bot Management</0>.",
			url: {
				required: "The URL must not be empty",
				max_length: "The URL exceeds the maximum length of %{maxLength} characters",
				protocol: "The URL protocol must be http:// or https://",
				credentials: "The URL must not contain credentials",
				private: "The URL must be publicly accessible",
				invalid: "The URL must be valid"
			}
		},
		filters: {
			search: {
				label: "Filter",
				placeholder: "Filter crawlers"
			},
			search_paths: {
				placeholder: "Filter paths"
			},
			crawler: {
				label: "Crawler",
				all: "All crawlers",
				placeholder: "Select crawler"
			},
			mime_type: {
				label: "Content type",
				all: "All content types",
				placeholder: "Select content type"
			},
			operator: {
				label: "Operator",
				all: "All operators",
				placeholder: "Select operator"
			},
			category: {
				label: "Category",
				all: "All categories",
				placeholder: "Select category"
			},
			time_frame: {
				past_1h: "Past hour",
				past_24h: "Past 24 hours",
				past_7d: "Past 7 days",
				past_14d: "Past 14 days",
				past_30d: "Past 30 days"
			},
			show_inactive_crawlers: {
				label: "Show inactive crawlers",
				tooltip: "Crawlers that send requests in the selected time period are considered to be active."
			},
			hostname: {
				label: "Hostname",
				all: "All hostnames",
				placeholder: "Select hostname"
			},
			path: {
				label: "Path",
				placeholder: "Search paths (e.g. /api)",
				exact_match: "Exact match"
			},
			advanced: {
				show: "Show Advanced Filters",
				hide: "Hide Advanced Filters",
				clear: "Clear Filters"
			}
		},
		hostname: "Hostname",
		images: {
			crawlers: "Illustration of a web page with a lock and crabs crawling over it"
		},
		more_actions: "More actions",
		optional_field: "(optional)",
		pay_per_crawl: "Pay Per Crawl",
		pending: "Pending",
		policies: "policies",
		policy: "policy",
		policy_filter: "Policy",
		request: "Request",
		requests: "Requests",
		robots_txt: "Robots.txt",
		save: "Save",
		saving: "Saving...",
		settings: "Settings",
		successful: "Successful",
		total: "Total",
		unknown: "Unknown",
		unsuccessful: "Unsuccessful",
		unsaved_changes: "Unsaved Changes",
		upgrade: "Upgrade",
		violation: "Violation",
		violations: "Violations"
	},
	description: "Analyze and control how AI Crawlers access your content.",
	documentation: "AI Crawl Control documentation",
	metrics_page: {
		upsell: {
			title: "AI Crawler Traffic Analytics",
			description: "Get metrics on how AI Crawlers interact with your site.",
			cta: "Upgrade your plan"
		},
		actions: {
			download_csv: "Download CSV"
		},
		allowed_requests_chart: {
			title: "Allowed requests over time",
			description: "Review successful AI crawler requests over time for your domain.",
			no_data_available: "No allowed requests data found",
			more_items: "+%{count} More"
		},
		status_code_chart: {
			title: "Status code distribution",
			description: "View the distribution of HTTP status codes for AI crawler requests over time.",
			requests: "%{smart_count} Request |||| %{smart_count} Requests"
		},
		operator_summary: {
			title: "Top referrers",
			description: "View AI operators that refer traffic to your site, ranked by total requests and top referring domains.",
			no_referral_data: "No referral data available",
			others: "Others",
			referrals: "referrals"
		},
		referrals_over_time_chart: {
			title: "Referrals over time",
			description: "Track AI-driven traffic referrals to your site over time.",
			no_data_available: "No referral data available for the selected time period",
			group_by: {
				operator: "By Operator",
				source: "By Source",
				total: "Total"
			}
		},
		table: {
			tabs: {
				all: "All",
				patterns: "Patterns",
				content: "Content",
				media: "Media"
			},
			title: {
				all: "Most crawled paths",
				patterns: "Path patterns",
				content: "Most crawled content",
				media: "Most crawled media"
			},
			description: {
				all: "View all paths crawled by AI crawlers, regardless of content type.",
				patterns: "Analyze path patterns to identify which sections of your site are most crawled.",
				content: "View the most requested content pages (HTML, JSON, Markdown, etc.) by AI crawlers.",
				media: "View the most requested media files (images, videos, audio) by AI crawlers."
			},
			columns: {
				path: "Path",
				host: "Host",
				requests: "Allowed requests"
			}
		},
		stats: {
			total_requests: {
				title: "Total requests",
				tooltip: "All requests made by crawlers."
			},
			allowed_requests: {
				title: "Allowed requests",
				tooltip: "Requests that received a successful response."
			},
			unsuccessful_requests: {
				title: "Unsuccessful requests",
				tooltip: "Requests that did not receive a successful response due to a block, other security rules, or website errors."
			},
			referrals: {
				title: "Total referrals",
				tooltip: "Number of visits originated from platforms owned by crawler operators."
			}
		}
	},
	robots_page: {
		page_title: "Track robots.txt",
		page_description: "Monitor how AI crawlers interact with your robots.txt files across your hostnames. Track request patterns, verify file availability, and identify crawlers that violate your directives.",
		availability: {
			title: "Availability",
			description: "Monitor the request frequency and health status of robots.txt files.",
			requests_label: "Requests",
			table: {
				columns: {
					path: "Path",
					hostname: "Hostname",
					requests: "Requests",
					status: "Status",
					content_signals: "Content Signals"
				},
				tooltips: {
					hostname: "The specific robots.txt file being requested.",
					requests: "Successful requests have 2xx status codes. Unsuccessful requests have 4xx or 5xx status codes.",
					status: "The current status when accessing the live robots.txt file.",
					content_signals: "Indicates whether the robots.txt file contains Content Signals directives for usage in AI training, search, or AI input.",
					content_signals_learn_more: "Learn more"
				}
			},
			content_signals_badges: {
				declared: "Declared",
				not_found: "Not set"
			},
			status_badges: {
				cloudflare_managed: "Cloudflare Managed"
			},
			empty_state: "No robots.txt files found."
		},
		toggle: {
			title: "Cloudflare managed",
			description: "When enabled, Cloudflare creates or updates your robots.txt file to signal that your content should not be used for AI training.",
			tooltip: "Cloudflare will manage your robots.txt file to signal that your content should not be used for AI training."
		},
		violations: {
			title: "Violations",
			description: "Identify AI crawlers requesting paths currently disallowed by your robots.txt. This list only shows violations on highest-traffic paths. Filter by Crawler, Operator, or Hostname to view detailed activity.",
			matched_rule: "Disallow: %{rule}",
			table: {
				columns: {
					crawler: "Crawler",
					path: "Path",
					url: "URL",
					directive: "Directive",
					violations: "Requests"
				},
				tooltips: {
					crawler: "The bot that requested a path disallowed by robots.txt directives.",
					url: "The specific URL (hostname and path) the crawler accessed.",
					directive: "The line from your robots.txt file that disallowed access to the path.",
					violations: "The total number of HTTP requests made to this specific URL."
				},
				violation_count: "%{smart_count} Violation |||| %{smart_count} Violations"
			},
			empty_state: "No violations found with the current filters."
		}
	},
	settings_page: {
		stripe: {
			action_required: {
				title: "Action Required",
				description: "Additional information is required in Stripe"
			},
			connected: {
				title: "Stripe account",
				publisher: "Publisher Stripe account",
				crawler: "Operator Stripe account",
				view: "View account"
			},
			loading: {
				title: "Stripe account",
				publisher: "Publisher Stripe account",
				crawler: "Operator Stripe account",
				description: "Loading account status"
			},
			disconnected: {
				title: "Connect Stripe account",
				publisher: "Connect Publisher Stripe account",
				crawler: "Connect Operator Stripe account",
				description: "Cloudflare partners with Stripe to help you receive payments and keep personal bank and details secure."
			},
			image: "Stripe logo",
			modal: {
				title: "Connect to Stripe",
				description: {
					publisher: "Connect to Stripe to receive payments by setting up or linking your account. You'll be redirected back to Cloudflare after connecting to Stripe.",
					crawler: "Connect to your Stripe account to pay website owners."
				},
				continue: "Continue to Stripe"
			}
		},
		pay_per_crawl: {
			title: "Pay Per Crawl",
			description: "Manage your website's pay per crawl settings.",
			pricing_mode: {
				label: "Price",
				targeted: "Targeted pricing",
				targeted_description: 'Apply a flat rate to all requests from crawlers specifically marked to "Charge".',
				global: "Global pricing",
				global_description: "Require payment for all bot-scored traffic at the path level. Define specific exceptions for known crawlers.",
				recommended: "Recommended"
			},
			price: {
				label: "Price",
				tooltip: "<b>Pay Per Crawl price (per request)</b><br>Crawlers scanning your website will be charged this price each time they make a request.",
				unit: "per crawl",
				placeholder: "Set a rate to start charging",
				not_set: "Not set",
				error: "Price must be at least %{minPrice} %{code}",
				errors: {
					required: "Price must not be empty",
					invalid: "Price must not be lower than %{minPrice} %{code}"
				}
			},
			license: {
				label: "Terms URL",
				tooltip: "Sets the URL to display in the Link header for responses to crawlers.",
				placeholder: "e.g. %{url}",
				not_set: "Not set"
			},
			default_action: {
				label: "Default action",
				tooltip: "Whether new crawler additions should be charged or allowed.",
				charge: "Charge new crawlers",
				allow: "Allow new crawlers"
			},
			in_band_pricing: {
				label: "In-band pricing",
				tooltip: "Allows the origin to include a <0>crawler-price</0> header in the responses."
			},
			enable_modal: {
				title: "Save and enable Pay Per Crawl?",
				price: "Charging price will be set at <b>$%{price}</b> per request.",
				charge: "Crawlers will be <b>charged</b> by default.",
				allow: "Crawlers will be <b>allowed</b> by default.",
				googlebot: "Googlebot and crawlers already set to <b>Block</b> will not change.",
				description: "You can modify individual crawler settings anytime in the Crawlers tab.",
				enable: "Save"
			},
			disable_modal: {
				title: "Disable Pay Per Crawl",
				description: "Are you sure you want to disable Pay Per Crawl? This will stop charging any crawlers."
			},
			signed_contract: {
				download: "Terms and conditions"
			},
			errors: {
				disable_global_pricing: "Failed to disable global pricing"
			}
		},
		custom_response: {
			title: "Block response",
			description: "Configure the response that blocked crawlers will receive when they attempt to access your website.",
			response_message: "Response message",
			response_message_optional: "Response message (optional)",
			response_message_tooltip: "Customizable text to display to blocked crawlers.",
			response_message_tooltip_optional: "If a message is provided, it will override the custom response set in <0>custom rules</0>.",
			response_code: "Response code",
			response_code_tooltip: "An HTTP status code that describes the reason for the block.",
			configured_tooltip: "Configured in <0>custom rule</0> settings.",
			response_types: {
				json: "Custom JSON",
				html: "Custom HTML",
				text: "Custom Text",
				xml: "Custom XML",
				default_waf: "Default Cloudflare WAF block page"
			},
			errors: {
				response_message_empty: "Response message cannot be empty",
				response_message_required: "Response message is required for this configuration",
				response_message_length: "Response message content is too large. (2KB maximum)",
				response_message_parsing: "Error parsing block response message",
				response_code_empty: "Select a response code"
			},
			alert: {
				title: "Custom message will be removed.",
				description: "After setting this crawler to <b>Allow</b>, any custom response message that has been set will be deleted. If you currently use a custom response message, you will need to re-enter this message under the <b>Settings</b> tab if you block another crawler in the future."
			}
		},
		zones: {
			title: "Domain Access",
			description: "Select which domains should have access to Pay Per Crawl",
			search: {
				label: "Search",
				placeholder: "Search by domain name…"
			},
			domain: "Domain",
			domains: "Domains",
			status: "Status",
			visibility: "Visibility",
			visible: "Visible",
			hidden: "Hidden",
			tooltips: {
				status: "Indicates whether pricing is configured and crawlers can be set to <b>Charge</b> in AI Crawl Control.",
				visibility: "Displays Pay Per Crawl configuration in AI Crawl Control settings for the domain. Setting to <b>Hidden</b> will disable Pay Per Crawl and stop charging for requests."
			}
		}
	},
	tabs: {
		overview: "Overview",
		bots: "Crawlers",
		metrics: "Metrics",
		robots: "Robots.txt",
		settings: "Settings"
	},
	filters: {
		category: "Category",
		operator: "Operator",
		crawler: "Crawler",
		path: "Path",
		status_code: "Status code",
		host: "Host",
		waf: "WAF"
	},
	rules_engine: {
		title: "Pay Per Crawl pricing",
		description: "Create custom price set to control AI crawler access based on request properties, bot scores, and more. Price sets are evaluated in order and the first matching price determines the action.",
		rules_list_title: "Price sets",
		rules_list_description: "Manage your Pay Per Crawl price sets. Click on a price set to edit it or create a new price set.",
		create_rule_title: "Create Pay Per Crawl price",
		edit_rule_title: "Edit Pay Per Crawl price",
		learn_more: "Learn more about Pay Per Crawl prices",
		dialog: {
			title: "Manage Pay Per Crawl pricing rules",
			subtitle: "Configure pricing rules for AI crawler access",
			back_button: "Back to rules",
			success_message: "Worker deployed successfully!",
			view_worker: "View worker"
		},
		menu: {
			view_worker: "View worker",
			view_waf: "View WAF rule"
		},
		summary_card: {
			title: "Pay Per Crawl pricing",
			worker_active: "Worker is active with %{smart_count} rule |||| Worker is active with %{smart_count} rules",
			manage_button: "Manage rules"
		},
		deployment: {
			card_title: "Deploy pricing worker",
			card_description: "Create a Cloudflare Worker to set pricing for specific content. Define a price per path or content type, and select which bots can access for free.",
			button: "Get started",
			worker_config_title: "Worker configuration",
			worker_name_label: "Worker name",
			worker_name_placeholder: "e.g., My Site",
			worker_name_helper: "Spaces will be converted to dashes. Only alphanumeric characters, dashes, and underscores are allowed.",
			worker_name_preview: "Worker will be named:",
			worker_name_preview_placeholder: "[name]-ai-crawl",
			errors: {
				worker_name_required: "Worker name is required",
				worker_name_invalid: "Worker name must contain at least one alphanumeric character",
				invalid_rules: "Invalid price set configuration",
				deployment_failed: "Deployment failed",
				deployment_error: "There was an error while deploying:"
			}
		},
		rule_builder: {
			create_title: "Create price",
			edit_title: "Edit price",
			if_section: {
				title: "If",
				description: "Define the condition that triggers this rule"
			},
			then_section: {
				title: "Then",
				description: "Charge a fee when the condition is met"
			},
			unless_section: {
				title: "Unless",
				description: "Skip charging if any of these exceptions apply"
			},
			condition: {
				field_label: "Condition",
				field_placeholder: "Select condition...",
				operator_label: "Operator",
				operator_placeholder: "Select operator...",
				value_label: "Value",
				value_placeholder: "value"
			},
			action: {
				charge_amount_label: "Charge amount (USD)",
				charge_amount_placeholder: "0.01"
			},
			exceptions: {
				bot_label: "Bot is",
				bot_placeholder: "Select bots...",
				bot_score_label: "Bot score is",
				bot_score_value_label: "Value",
				bot_score_value_placeholder: "50",
				or_separator: "OR"
			},
			bot_score_presets: {
				likely_legitimate: "Likely legitimate traffic (score >= 30)",
				potentially_human: "Potentially human or unknown (score >= 2)",
				definitely_bot: "Not a definite bot (score != 1)"
			},
			buttons: {
				cancel: "Cancel",
				create: "Create price",
				update: "Update price"
			},
			field_options: {
				request_path: "Request path"
			},
			operator_options: {
				equals: "equals",
				not_equals: "not equals",
				contains: "contains",
				does_not_contain: "does not contain"
			},
			bot_score_operators: {
				gt: ">",
				lt: "<",
				ge: ">=",
				le: "<=",
				eq: "==",
				ne: "!="
			}
		},
		rules_list: {
			title: "Price set",
			create_button: "Create price",
			empty_state: "No price sets yet. Create your first price set to get started.",
			edit_button: "Edit",
			delete_button: "Delete",
			cancel_button: "Cancel",
			deploy_button: "Deploy",
			rule_description: "When <0>%{field}</0> %{operator} <1>%{value}</1>, %{action}",
			exception_both: "Exceptions: Bot Score is <b>%{scoreOperator} %{scoreValue}</b>, or Bot is <b>%{bots}</b>",
			exception_bot_score_only: "Exceptions: Bot Score is <b>%{scoreOperator} %{scoreValue}</b>",
			exception_bot_identity_only: "Exceptions: Bot is <b>%{bots}</b>"
		},
		worker_healthy: "Pay Per Crawl pricing worker deployed. <0>View worker</0>",
		validation: {
			at_least_one_enabled: "At least one enabled price set is required",
			rule_incomplete_condition: "Price set has incomplete condition",
			rule_invalid_charge: "Price set must have a valid charge amount",
			rule_missing_bot_score_exception: "Price set must have a bot score exception for WAF protection"
		},
		action: {
			title: "Action",
			description: "Choose what action to take when a request matches this rule",
			select_label: "Select action",
			challenge_info: "Challenge actions will present a verification challenge to the requester. Legitimate crawlers may not be able to complete challenges.",
			log_warning: "Log action will only record the match without taking any action. Use this for testing rules before enforcement."
		},
		custom_response: {
			title: "Custom response",
			info: "Configure a custom response message and status code for blocked requests",
			status_code: "Status code",
			content_type: "Content type",
			content: "Response content",
			content_help: "Enter the message to display when a request is blocked. Maximum 10,000 characters."
		},
		filters: {
			request_properties: "Request properties",
			response_properties: "Response properties",
			bot_properties: "Bot detection",
			client_properties: "Client properties",
			security_properties: "Security properties",
			content_type: "Content type",
			bot_score: "Bot score",
			verified_bot: "Verified bot",
			ja3_hash: "JA3 hash",
			threat_score: "Threat score"
		},
		warnings: {
			no_worker_but_waf_exists: "A WAF rule exists but the Pay Per Crawl worker was not found. The WAF rule may need to be removed.",
			no_waf_but_worker_exists: "The Pay Per Crawl worker exists but no WAF rule was found. Create rules below to enable bot blocking.",
			no_worker_routes: "The Pay Per Crawl worker has no routes configured. <0>Add a route</0> to enable the worker.",
			config_hash_mismatch: "The Pay Per Crawl worker is running an outdated version. <0>Redeploy</0> to update to the latest template.",
			config_parse_error: "Unable to read the Pay Per Crawl worker configuration. The config.json file may be corrupted or invalid."
		},
		delete_pricing: {
			button: "Delete",
			title: "Delete Pay Per Crawl pricing?",
			description: "This will permanently remove the Pay Per Crawl pricing worker and WAF rule. This action cannot be undone.",
			confirm_button: "Delete",
			success_message: "Pay Per Crawl pricing deleted successfully",
			error: "Failed to delete Pay Per Crawl pricing"
		},
		cleanup_resources: {
			button: "Clean up resources",
			description: "There are unused resources from a previous configuration that can be cleaned up."
		}
	},
	terms_and_conditions: {
		title: "Enable access to quality content",
		description: "Site owners are compensated for their high-quality content, and AI crawlers get the valuable data they need to build the best AI experiences.",
		contract: "Pay Per Crawl terms and conditions",
		learn_mode: "Learn more about closed beta program",
		continue: "Review terms and conditions",
		not_right_now: "Not right now",
		agree: "Agree and join the program",
		disagree: "Disagree",
		banner: {
			content: "Please accept the terms and conditions to enable pay per crawl.",
			button: "Review terms and conditions"
		}
	},
	title: "AI Crawl Control",
	welcome_page: {
		title: "Finish onboarding to control AI Crawlers",
		description: "You must update your nameservers to block AI providers from crawling your web sites.",
		cta: "Go to activation instructions"
	}
}