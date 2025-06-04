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
			[o.mu.CreatedOn]: "Date",
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
	report_status: {
		accepted: "Accepted",
		archived: "Archived",
		denied: "Denied",
		in_review: "In review",
		pending: "Pending"
	},
	report_type: {
		[o.Zy.CHILDREN]: "CSAM",
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
	product_documentation: "Product documentation"
}