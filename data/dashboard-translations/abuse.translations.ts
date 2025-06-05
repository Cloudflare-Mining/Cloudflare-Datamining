{
	page_title: "Abuse",
	page_description: "View abuse reports accepted against this account and any mitigations in place for potential terms of service violations. Once you have addressed a mitigation, or if you believe the mitigation was made in error, you can request review by Cloudflare's Trust & Safety team. Abuse reports with no activity are archived after 30 days.",
	reports_table: {
		empty_state: {
			default: "You have no abuse reports.",
			search: "There are no matching results.",
			error: "Error fetching abuse reports. Please try again."
		},
		column_name: {
			[o.mu.Id]: "Report ID",
			[o.mu.CDate]: "Date",
			[o.mu.Domain]: "Domain",
			[o.mu.Type]: "Report type",
			[o.mu.Status]: "Report status",
			[o.mu.AcceptedUrls]: "Accepted URLs"
		},
		view_mitigations_link: "View mitigations",
		filter: {
			[o.mu.Domain]: "Domain",
			[o.mu.Status]: "Report status",
			[o.mu.Type]: "Report type"
		}
	},
	cache_rate_limits_table: {
		empty_state: {
			default: "This report has no mitigations.",
			search: "There are no matching mitigations.",
			error: "Error fetching mitigations. Please try again."
		},
		column_name: {
			[o.XO.EffectiveDate]: "Date",
			[o.XO.Type]: "Mitigation",
			[o.XO.Status]: "Status",
			[o.XO.EntityType]: "Entity type",
			[o.XO.EntityId]: "Entity name or ID"
		}
	},
	mitigation_status: {
		active: "Active",
		cancelled: "Cancelled",
		in_review: "In Review",
		pending: "Pending",
		removed: "Removed"
	},
	report_status: {
		accepted: "Accepted",
		in_review: "In Review"
	},
	entity_type: {
		account: "Account",
		url_pattern: "URL Pattern",
		zone: "Zone"
	},
	mitigation_type: {
		account_suspend: "Account suspend",
		block_url: "Block URL",
		rate_limit_cache: "Rate limit cache"
	},
	report_type: {
		[o.Zy.EMERGENCY]: "Emergency",
		[o.Zy.DMCA]: "DMCA",
		[o.Zy.GENERAL]: "General",
		[o.Zy.NCSEI]: "NCSEI",
		[o.Zy.PHISHING]: "Phishing",
		[o.Zy.REGISTRAR_WHOIS]: "Registrar",
		[o.Zy.THREAT]: "Threat",
		[o.Zy.TRADEMARK]: "Trademark"
	},
	api_handling: {
		error: "Error",
		summary_error_and_retry: "Summary details failed to load.",
		refresh: "Refresh",
		unavailable: "Unavailable"
	},
	tab_titles: {
		blocked_content: "Blocked content",
		cache_rate_limits: "Cache rate limits"
	},
	tab_descriptions: {
		cache_rate_limits: "View cache rate limits that Cloudflare will take or has taken against your account for potential terms of service violations. Once you have addressed a mitigation, or if you believe the mitigation was made in error, you can request review by Cloudflare's Trust & Safety team."
	},
	report_summary_titles: {
		report_status: "Report status",
		date: "Date",
		report_type: "Report type",
		domain: "Domain",
		accepted_urls: "Accepted URLs",
		cloudflare_mitigations: "Cloudflare mitigations"
	},
	report_summary_values: {
		active: (0, r.d)`${"activeCount"} Active`
	},
	breadcrumb_titles: {
		manage_account: "Manage Account",
		abuse: "Abuse",
		abuse_report: (0, r.d)`Abuse Report ${"reportId"}`
	},
	product_documentation: "Product documentation",
	date_range: "Date range"
}