{
	token_list: {
		actions: {
			documentation: "Documentation",
			create_token: "Create Token"
		},
		column: {
			token: "Token",
			permissions: "Permissions",
			last_used: "Last used",
			created: "Created",
			modified: "Last modified",
			status: "Status",
			actions: "Actions"
		},
		status: {
			active: "Active",
			disabled: "Disabled",
			expired: "Expired",
			expires_soon: "Expires soon",
			exposed: "Exposed"
		},
		permissions: {
			empty: "No permissions",
			show_all_aria_label: (0, s.p)(r(), "count")
		},
		menu: {
			view_summary: "View summary",
			edit: "Edit",
			roll: "Roll",
			delete: "Delete"
		},
		dialog: {
			create: {
				success_title: "Token created successfully"
			},
			roll: {
				title: "Roll token",
				message: "Are you sure you want to roll this token?",
				confirm: "Roll token",
				success_title: "Token rolled successfully",
				done: "Done"
			},
			delete: {
				title: "Delete token",
				message: "Are you sure you want to delete this token?",
				confirm: "Delete token"
			}
		},
		empty: {
			no_date: "—",
			table: "No API tokens found",
			title: "Create your first API token",
			description: "API tokens authenticate access to your Cloudflare account, allowing secure integration with tools, scripts, and third-party services."
		},
		loading: {
			template: "Loading Template"
		},
		aria: {
			token_actions: "Token actions"
		}
	},
	navigation: {
		account_api_tokens: "Account API tokens",
		create_token: "Create a token",
		review_token: "Review token",
		token_summary: "Token Summary"
	},
	token_form: {
		name: {
			label: "Token name",
			tooltip: "Give your API token a descriptive name.",
			placeholder: "Enter token name",
			aria_label: "Token name"
		},
		policy_list: {
			title: "Permission policies",
			tooltip: "Define what resources this token can access. You can create multiple policies with different accounts and permissions.",
			add_policy: "Add policy",
			add_first_policy: "Add permission policy",
			empty_state: {
				title: "Add your first permission policy",
				description: "Permission policies define what resources this token can access. Each policy ties permissions to specific accounts and resources."
			}
		},
		policy_card: {
			no_scope: "No scope selected",
			no_permissions: "At least one permission is required",
			edit: "Edit policy",
			delete: "Delete policy",
			deny: "Deny",
			more_permissions: (0, s.p)(a(), "count")
		},
		policy_editor: {
			title: "Edit policy",
			close: "Close editor",
			remove: "Remove policy",
			search_placeholder: "Search for permission groups...",
			empty_state: "No permission groups found matching your search. Please try a different query.",
			scope_options: {
				entire_account: {
					label: "Entire Account",
					subtitle: "Full access to all resources in the account"
				},
				all_domains: {
					label: "All Domains",
					subtitle: "Access to all domains within the account"
				},
				specified_domains: {
					label: "Specified Domains",
					subtitle: "Access to selected individual domains only"
				},
				r2_buckets: {
					label: "R2 Buckets",
					subtitle: "Access to selected individual R2 buckets only"
				}
			},
			select_domains: "Select domains...",
			no_zones: "No zones found",
			load_more: "Load more"
		},
		template: {
			select: "Select Template",
			custom: "Custom",
			permission_singular: "permission",
			permission_plural: "permissions",
			policy_singular: "policy",
			policy_plural: "policies"
		},
		expiration: {
			title: "Token expiration",
			tooltip: "Automatically expire this token after a set time",
			presets: {
				none: "No expiration",
				"7d": "7 days",
				"30d": "30 days",
				"90d": "90 days",
				"1y": "1 year",
				custom: "Custom"
			},
			custom_date_label: {
				range: (0, s.p)(l(), "start", "end"),
				from: (0, s.p)(c(), "date"),
				default: "Custom"
			},
			apply: "Apply"
		},
		ip_filter: {
			title: "Client IP address filtering",
			tooltip: "Restrict which IP addresses can use this token. Applies to all addresses by default.",
			allow: "Allow",
			deny: "Deny",
			add_more: "Add More",
			placeholder: "Enter an IP address or CIDR range…",
			aria_label: "IP address or CIDR range",
			use_current_ip: (0, s.p)(u(), "ip"),
			invalid_ip: (0, s.p)(d(), "ip"),
			add_ip: (0, s.p)(p(), "ip"),
			remove_rule: "Remove rule"
		},
		actions: {
			cancel: "Cancel",
			review: "Review token",
			back_to_edit: "Back to edit",
			create: "Create token",
			update: "Update token",
			tooltip_disabled: "All policies must have permissions and valid scopes"
		},
		review: {
			title: "Review token",
			subtitle: "Verify the configuration before creating"
		},
		submit: {
			error_prefix: "An error occurred:",
			unexpected_error: "An unexpected error occurred."
		}
	},
	token_summary: {
		title: "Token Summary",
		subtitle: "Review the permissions and scope for this API token",
		edit: "Edit",
		loading: "Loading token summary...",
		summary: {
			title: "Token Summary",
			name_label: "Name",
			untitled: "Untitled Token",
			expiration_label: "Expiration",
			not_set: "Not set"
		},
		policies: {
			title: "Permission policies"
		},
		ip_filtering: {
			title: "IP Address Filtering",
			all_allowed: "All IP addresses allowed",
			allow: "Allow",
			deny: "Deny"
		},
		scope: {
			entire_account: (0, s.p)(m(), "account"),
			all_zones_in_account: (0, s.p)(_(), "account"),
			all_zones_all_accounts: "All zones across all accounts",
			specified_r2: {
				label: "Specified R2",
				empty: "Please select R2 bucket"
			},
			specified_domains: {
				label: "Specified Domains",
				empty: "Please select domains"
			},
			r2_prefix: "R2"
		},
		tabs: {
			summary: "Summary",
			json: "JSON Payload",
			terraform: "Terraform"
		},
		terraform_comment: "# Note: Token value is only available at creation time"
	},
	token_created: {
		account_id: "Account ID",
		warning: {
			title: "Important: Copy your token now",
			message: "This is the only time you will see this token. Make sure to copy it and store it securely. You will not be able to retrieve it later."
		},
		your_token: "Your API Token",
		example_usage: "Example Usage"
	},
	errors: {
		parse_failed: (0, s.p)(f(), "error"),
		resource_type: "API Token"
	},
	r2_bucket: {
		placeholder: "Please select R2 buckets",
		searching: "Searching",
		no_buckets: "No R2 buckets found"
	},
	common: {
		loading: "Loading..."
	}
}