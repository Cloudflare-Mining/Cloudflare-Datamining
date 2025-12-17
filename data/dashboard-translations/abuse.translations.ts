{
	page_title: "Abuse Reports",
	page_description: "View abuse reports accepted against this account and any mitigations in place for potential terms of service violations. Once you have addressed a mitigation, or if you believe the mitigation was made in error, you can request review by Cloudflare's Trust & Safety team.",
	maintenance_banner: {
		title: "Maintenance in progress",
		description: "We are currently performing maintenance on the Abuse Reports page. If you expect to see a block but can't find it on this page, please visit the Blocked Content page to view any blocks against your account.",
		view_blocked_content: "View Blocked Content →"
	},
	reports_table: {
		empty_state: {
			default: "You have no abuse reports.",
			search: "There are no matching results.",
			error: "Error fetching abuse reports. Please try again."
		},
		column_name: {
			[s.Xt.Id]: "Report ID",
			[s.Xt.CDate]: "Date",
			[s.Xt.Domain]: "Domain",
			[s.Xt.Type]: "Report type",
			[s.Xt.Status]: "Report status",
			[s.Xt.AcceptedUrls]: "Accepted URLs",
			[s.Xt.MitigationSummary]: "Cloudflare mitigations"
		},
		mitigation_summary: {
			accepted_url_count: "%{smart_count} accepted",
			pending_count: "%{smart_count} pending",
			active_count: "%{smart_count} active",
			in_review_count: "%{smart_count} in review",
			external_host_notified: "External host notified"
		},
		view_mitigations_link: "View mitigations",
		filter: {
			[s.Xt.Domain]: "Domain",
			[s.Xt.Status]: "Report status",
			[s.Xt.Type]: "Report type"
		}
	},
	mitigations_table: {
		empty_state: {
			default: "This report has no mitigations.",
			search: "There are no matching mitigations.",
			error: "Error fetching mitigations. Please try again."
		},
		column_name: {
			[s.on.EffectiveDate]: "Date",
			[s.on.Type]: "Mitigation",
			[s.on.Status]: "Status",
			[s.on.EntityType]: "Entity type",
			[s.on.EntityId]: "Entity name or ID"
		},
		filter: {
			[s.on.Status]: "Status",
			[s.on.Type]: "Mitigation"
		}
	},
	streaming_mitigations_table: {
		empty_state: {
			default: "This report has no streaming mitigations.",
			search: "There are no matching streaming mitigations.",
			error: "Error fetching streaming mitigations. Please try again."
		},
		column_name: {
			[c.EffectiveDate]: "Date",
			[c.Type]: "Mitigation",
			[c.Status]: "Status",
			[c.EntityType]: "Entity type",
			[c.EntityId]: "Entity name or ID"
		},
		filter: {
			[c.Status]: "Status"
		}
	},
	blocked_content_tables: {
		titles: {
			pending: "Pending blocks",
			pending_count: (0, o.p)(l(), "count"),
			active: "Active blocks",
			active_count: (0, o.p)(d(), "count")
		},
		empty_state: {
			default: (0, o.p)(m(), "blockCategory"),
			search: (0, o.p)(p(), "blockCategory"),
			error: (0, o.p)(_(), "blockCategory")
		},
		column_name: {
			[s.dS.EnforcementDate]: "Date",
			[s.dS.BlockType]: "Block Type",
			[s.dS.Status]: "Status",
			[s.dS.EntityType]: "Entity type",
			[s.dS.EntityId]: "Entity name or ID"
		},
		filter: {
			[s.dS.Status]: {
				[r.IR.Active]: "Active",
				[r.IR.Cancelled]: "Canceled",
				[r.IR.InReview]: "In Review",
				[r.IR.Pending]: "Pending"
			}
		}
	},
	mitigation_status: {
		active: "Active",
		cancelled: "Canceled",
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
		url_pattern: "URL",
		zone: "Zone"
	},
	mitigation_type: {
		account_suspend: "Account suspend",
		geo_block: "Geo block",
		legal_block: "Legal 451 block",
		malware_interstitial: "Malware interstitial",
		network_block: "Network block",
		phishing_interstitial: "Phishing interstitial",
		r2_takedown_account: "R2 account takedown",
		r2_takedown_bucket: "R2 bucket takedown",
		rate_limit_cache: "Cache rate limit",
		redirect_video_stream: "Video stream redirect"
	},
	block_type: {
		phishing_interstitial: "Phishing",
		legal_block: "Legal 451",
		malware_interstitial: "Malware",
		geo_block: "Geo block",
		network_block: "Network block"
	},
	report_type: {
		[s.fs.EMERGENCY]: "CSAM",
		[s.fs.DMCA]: "Copyright",
		[s.fs.GENERAL]: "General",
		[s.fs.NCSEI]: "NCSEI",
		[s.fs.PHISHING]: "Phishing",
		[s.fs.REGISTRAR_WHOIS]: "Registrar",
		[s.fs.THREAT]: "Threat",
		[s.fs.TRADEMARK]: "Trademark",
		[s.fs.NETWORK]: "Network"
	},
	report_type_long: {
		[s.fs.EMERGENCY]: "Child Sexual Abuse Material (CSAM)",
		[s.fs.DMCA]: "Copyright Infringement & DMCA Violations",
		[s.fs.GENERAL]: "General",
		[s.fs.NCSEI]: "Non-Consensual Sexually Explicit Imagery (NCSEI)",
		[s.fs.PHISHING]: "Phishing",
		[s.fs.REGISTRAR_WHOIS]: "Registrar",
		[s.fs.THREAT]: "Threat",
		[s.fs.TRADEMARK]: "Trademark",
		[s.fs.NETWORK]: "Network"
	},
	api_handling: {
		error: "Error",
		summary_error_and_retry: "Summary details failed to load.",
		refresh: "Refresh",
		unavailable: "Unavailable",
		failed_to_load_abuse_report_details: "Failed to load abuse report details",
		try_refreshing_page: "Try refreshing the page"
	},
	tab_titles: {
		blocked_content: "Blocked content",
		mitigations: "Cloudflare mitigations",
		streaming_mitigations: "Streaming mitigations",
		report_details: "Report details"
	},
	tab_descriptions: {
		blocked_content: "View blocked content mitigations that Cloudflare will take or has taken against your domain for potential terms of service violations. Once you have addressed a mitigation, or if you believe the mitigation was made in error, you can request review by Cloudflare's Trust & Safety team.",
		mitigations: "View mitigations that Cloudflare will take or has taken against your account for potential terms of service violations. Once you have addressed a mitigation, or if you believe the mitigation was made in error, you can request review by Cloudflare’s Trust & Safety team.",
		streaming_mitigations: "View streaming mitigations that Cloudflare will take or has taken against your account for potential terms of service violations. Once you have addressed a mitigation, or if you believe the mitigation was made in error, you can request review by Cloudflare's Trust & Safety team."
	},
	report_summary_titles: {
		report_summary: "Report summary",
		report_status: "Report status",
		date: "Date",
		report_type: "Report type",
		domain: "Domain",
		accepted_urls: "Accepted URLs",
		cloudflare_mitigations: "Cloudflare mitigations",
		external_host_notified: "External host notified"
	},
	report_details: {
		justification: {
			title: "Logs or other evidence of abuse",
			description: "The submitter's justification for reporting abuse against your account."
		},
		original_work: {
			title: "Original work justification",
			description: "The original work that was allegedly infringed, as reported by the submitter."
		},
		evidence_urls_title: "Evidence URLs",
		evidence_urls_description: "The reported URLs that Cloudflare has determined to have evidence of abuse.",
		evidence_urls_search_placeholder: "Search",
		evidence_urls_column: "URL",
		evidence_urls_empty_state: {
			default: "No evidence URLs found.",
			search: "No matching evidence URLs found."
		},
		submitter_info_title: "Submitter information",
		submitter_info_description: "Reporters can elect to share their name and contact information with the website owner or submit reports anonymously.",
		submitter_name: "Name",
		submitter_email: "Email",
		submitter_company: "Company name",
		submitter_telephone: "Telephone"
	},
	report_summary_values: {
		active: (0, o.p)(g(), "activeCount")
	},
	breadcrumb_titles: {
		manage_account: "Manage Account",
		abuse: "Abuse Reports",
		abuse_report: (0, o.p)(f(), "reportId")
	},
	product_documentation: "Documentation",
	date_range: "Date range",
	appeal_modal: {
		request_review: "Request review |||| Request reviews",
		request_review_success: "Requested review on the mitigation taken against your account. |||| Requested review on the mitigations taken against your account.",
		request_review_success_v0: {
			blocked_content: "Requested review on your blocked content.",
			streaming_mitigations: "Requested review on your streaming mitigation. |||| Requested review on your streaming mitigations."
		},
		select_reason: "Select your reason for requesting review: |||| Select your reason for requesting reviews:",
		subtitle: "Request a review to remove the mitigation taken against your account. |||| Request reviews to remove the mitigations taken against your account.",
		subtitle_v0: {
			blocked_content: "Request a review to restore access to this URL path. |||| Request reviews to restore access to these URL paths.",
			streaming_mitigations: "Request a review to remove the streaming mitigation. |||| Request reviews to remove the streaming mitigations."
		},
		appeal_reason: {
			misclassified: "I have examined the content and believe the mitigation to be in error. |||| I have examined the content and believe the mitigations to be in error.",
			removed: "I have removed the content."
		},
		appeal_reason_v0: {
			misclassified: {
				blocked_content: "I have examined the content and believe the block to be in error. |||| I have examined the content and believe the blocks to be in error.",
				streaming_mitigations: "I have examined the content and believe the streaming mitigation to be in error. |||| I have examined the content and believe the streaming mitigations to be in error."
			},
			removed: {
				blocked_content: "I have removed the content.",
				streaming_mitigations: "I have removed the content."
			}
		}
	}
}