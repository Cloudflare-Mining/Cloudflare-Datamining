{
	navigation: {},
	common: {},
	analytics: {
		page_title: "DNS Firewall Analytics",
		page_description: "View analytics and insights for DNS queries blocked by your firewall policies.",
		documentation_label: "DNS Firewall documentation",
		report_title: "Traffic for %{accountName}",
		timeseries: {
			title: "Query summary",
			description: "View trends for incoming queries and their properties.",
			response_reasons: {
				success: "Success",
				upstream_failure: "Upstream failure",
				upstream_servfail: "Upstream servfail",
				invalid_query: "Invalid query",
				rate_limit: "Rate limit",
				any_type_blocked: "ANY type blocked",
				chaos_success: "Chaos success",
				attack_mitigation_block: "Attack mitigation block",
				unknown: "Unknown"
			}
		},
		cache_status: {
			cached: "Cached",
			stale: "Stale",
			uncached: "Uncached",
			fresh: "Fresh"
		},
		cached_queries: {
			title: "Query statistics",
			description: "View query statistics such as volume, cache status, processing time, and response time, filtered by the selected time range and configured filters.",
			cache_status: {
				cached: "Cached queries",
				uncached: "Uncached queries",
				stale: "Stale queries"
			}
		},
		summary: {
			qps: "Queries per second",
			cached_avg: "Cached queries processing time average",
			uncached_avg: "Uncached queries response time average",
			cached_p90: "Cached queries processing time (p90)",
			uncached_p90: "Uncached queries response time (p90)"
		},
		country_map: {
			title: "DNS queries by data center",
			description: "View a map of Cloudflare data centers that have handled DNS queries directed to your nameservers."
		},
		top_n: {
			title: "Top query statistics",
			description: "Identify the top most occuring properties of incoming queries",
			labels: {
				query_names: "Query name",
				response_codes: "Response codes",
				response_reasons: "Response reason",
				upstream_ips: "Upstream Nameservers",
				query_types: "Query type",
				cluster_tags: "Cluster tag",
				destination_ips: "Cluster IPs",
				source_ips: "Source IP",
				protocols: "Protocol",
				ip_versions: "IP version",
				colos: "Data centers",
				query_names_and_types: "Queried DNS records"
			}
		},
		errors: {
			generic: "An error occurred while loading DNS Firewall analytics data. Please try again."
		},
		filters: {
			cluster_name: "Cluster",
			cluster_tag: "Cluster tag",
			cluster_ip: "Cluster IP",
			response_reason: "Response reason",
			upstream_ip: "Upstream IP",
			cache_status: "Cache status",
			response_cached: "Response cached",
			response_stale: "Response stale"
		}
	}
}