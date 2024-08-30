const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "globe",
		hasPermission: I => !!(0, e.z1)("control-plane-large-orgs")(I)
	}, {
		title: "navigation.root.accounts",
		url: "/",
		iconType: "cloud-internet"
	}, {
		title: "navigation.root.websites",
		url: "/zones",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}, {
		title: "navigation.root.partners",
		url: "/partners/tenant",
		iconType: "carbon",
		hasPermission: I => (0, e.z1)(b.Mr)(I) && (0, $.z7)(I) && !!(0, $.z$)(I).length
	}],
	partners: [{
		title: "navigation.partners.tenant",
		url: "/partners/tenant",
		iconType: "cloudflare-magic-wan"
	}, {
		title: "navigation.partners.accounts",
		url: "/partners/account",
		iconType: "user-multi"
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: I => !!(0, e.z1)("oauth-access-management")(I)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: I => !(0, i.n3)() && !(0, e.z1)("oauth-access-management")(I)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: I => !(0, e.z1)("oauth-access-management")(I)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		labels: ["beta"],
		hasPermission: I => !!(0, e.z1)("dash-account-home-v2")(I)
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		iconType: "internet-browser"
	}, {
		title: "navigation.account.discover",
		url: "/discover",
		iconType: "discover"
	}, {
		title: "navigation.account.registrar",
		url: "/domains",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer"
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register"
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: I => (0, o.gw)(I)
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: I => (0, o.iY)(I)
		}, {
			title: "navigation.account.account_http_traffic",
			url: "/http-traffic",
			labels: ["beta"],
			hasPermission: I => (0, o.iY)(I) && !!(0, e.z1)("account-traffic-analytics")(I)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: I => (0, o.iY)(I) && (0, O.Ob)(I)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: I => (0, o.iY)(I)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: I => (0, o.iY)(I) && (0, m.S6)(I) && !!(0, e.z1)("account-logpush")(I)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: I => (0, o.iY)(I) && !!(0, a.Le)(I, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: I => (0, o.iY)(I) && (!!(0, a.Le)(I, "account_analytics", "magic_network_monitoring") || !!(0, l.$f)(I, "rulesets.magic_transit_allowed"))
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: I => (0, o.iY)(I) && (0, s.xU)(I),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: I => (0, o.iY)(I) && (0, s.sL)(I)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: I => (0, o.iY)(I) && (0, s.B_)(I)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: I => (0, o.iY)(I) && (0, s.B_)(I)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: I => (0, o.iY)(I) && (0, s.sL)(I)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: I => (0, o.iY)(I) && (0, s.TT)(I)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: I => (0, o.iY)(I) && (0, s.jD)(I)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: I => (0, o.iY)(I) && (0, s.BU)(I)
		}, {
			title: "navigation.account.security_center.cfone_priorities",
			url: "/cloudforce-one/priorities",
			hasPermission: I => (0, o.iY)(I) && (0, s.fs)(I)
		}, {
			title: "navigation.account.security_center.cfone_reports",
			url: "/cloudforce-one/reports",
			hasPermission: I => (0, o.iY)(I) && (0, s.Bc)(I)
		}, {
			title: "navigation.account.security_center.cfone_requests",
			url: "/cloudforce-one/requests",
			hasPermission: I => (0, o.iY)(I) && (0, s.gA)(I)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "trace-link",
		labels: ["beta"],
		hasPermission: Q.T
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		tabs: T.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: I => (0, l.Ci)(I)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: I => (0, o.iY)(I) && !!(0, e.z1)("managed-challenge-ui")(I)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		hasPermission: I => !!((0, o.iY)(I) && (0, e.z1)("magic-interconnects")(I) && (!!(0, a.Le)(I, "magic_wan", "mw_home") || !!(0, a.Le)(I, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: I => (0, o.iY)(I) && !!(0, a.Le)(I, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: f.Lx.concat(f.SF, f.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-transit/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-transit/packet-captures/captures"
		}]
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: I => !!(0, o.zJ)(I),
		tabs: T.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: I => {
			const j = !!(0, o.Wq)(I) && !!(0, o.fO)(I);
			return !!(0, o.us)(I) || j
		},
		tabs: T.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: I => !!(0, o.Wq)(I) && !!(0, o.fO)(I)
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection",
			hasPermission: I => (0, o.us)(I),
			tabs: T.O1
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: I => (0, o.iY)(I) && !!(0, a.Le)(I, "addressing", "ip_prefixes")
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: I => (0, o.iY)(I) && !!(0, e.z1)("proxy-ips-ui")(I)
		}],
		hasPermission: I => (0, o.iY)(I) && !!(0, a.Le)(I, "addressing", "ip_prefixes")
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: () => {
			const I = (0, r.e1)(),
				j = "https://one.dash.cloudflare.com";
			return I ? `${j}/${I}/` : j
		},
		iconType: "cloudflare-zero-trust",
		labels: I => (0, e.z1)("zt-sidebar")(I) ? [] : ["external-link"],
		hasPermission: I => (0, o.iY)(I)
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		hasPermission: I => (0, o.iY)(I) && !!(0, a.Le)(I, "magic_wan", "mw_home") || !!(0, a.Le)(I, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: I => (0, o.iY)(I) && !!(0, a.Le)(I, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: I => (0, o.iY)(I) && !!(0, a.Le)(I, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.cloud_connectors",
			url: "/magic-wan/cloud",
			labels: ["beta"],
			hasPermission: I => !!(0, l.$f)(I, "magic_cloud.enabled")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: f.SF.concat(f.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		hasPermission: I => (0, o.iY)(I),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		pages: [{
			title: "navigation.common.overview",
			url: "/area1"
		}, {
			title: "navigation.account.area_one.retro_scan",
			url: "/area1/retro-scan",
			hasPermission: I => (0, e.z1)("area-1-retro-scan")(I) === !0
		}, {
			title: "navigation.account.area_one.dashboard",
			url: "https://horizon.area1security.com/api/cf-auth/login",
			labels: ["external-link"]
		}]
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		additionalMatchUrls: ["/workers/services", "/workers/subdomain", "/workers/analytics-engine", "/workers/compute-setting", "/pages/view", "/pages/new"],
		iconType: "workers-pages",
		hasPermission: I => (0, o.iY)(I),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.common.overview",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces",
			hasPermission: I => !(0, e.z1)("storage-and-databases-account-navigation")(I)
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: I => !!(0, e.z1)("durable-objects-ui")(I)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: I => !!(0, e.z1)("queues-ui")(I) && !(0, e.z1)("storage-and-databases-account-navigation")(I),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			hasPermission: I => !(0, e.z1)("storage-and-databases-account-navigation")(I)
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: I => !!(0, e.z1)("constellation-ui")(I) && !(0, a.RO)(I)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: I => !!(0, e.z1)("hyperdrive-ui")(I) && !(0, e.z1)("storage-and-databases-account-navigation")(I)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: I => {
				const j = (0, d.tJ)(I);
				return !(0, D.ky)(j, [C.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: I => (0, o.iY)(I) && (0, ee.k)(I)
	}, {
		title: "navigation.account.storage_and_databases",
		url: "/workers/kv/namespaces",
		iconType: "d1",
		hasPermission: I => !!(0, e.z1)("storage-and-databases-account-navigation")(I),
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: I => !!(0, e.z1)("hyperdrive-ui")(I)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: I => !!(0, e.z1)("queues-ui")(I),
			testId: "sidenav-queues-link"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: I => (0, o.iY)(I),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: I => (0, o.o_)(I)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: I => (0, o.o_)(I)
		}]
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: I => !!(0, a.RO)(I) || !!(0, a.B)(I),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: I => (0, a.RO)(I)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			labels: ["beta"],
			testId: "sidenav-ai-vectorize-link",
			hasPermission: I => (0, a.RO)(I) && !!(0, l.BF)(I, "vector_db.enabled")
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: I => !!(0, a.B)(I)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: I => (0, o.iY)(I),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: I => (0, o.hv)(I)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: I => (0, o.hv)(I)
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			hasPermission: I => (0, o.hv)(I)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: I => (0, o.iY)(I),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images/images",
			hasPermission: I => (0, o.IU)(I)
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: I => (0, o.IU)(I)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: I => (0, o.IU)(I)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: I => (0, o.IU)(I),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "calls",
		hasPermission: I => (0, o.iY)(I)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.manage_account",
		url: "/members",
		iconType: "gear",
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: I => (0, o.iY)(I)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: I => (0, o.iY)(I) && !!(0, e.z1)("account-owned-api-tokens")(I)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: I => (0, L.b)(I) ? (0, o.iY)(I) : (0, a.Yj)(I)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: I => (0, o.iY)(I)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: I => (0, o.iY)(I)
		}, {
			title: "navigation.account.mcn",
			url: "/mcn",
			labels: ["beta"],
			hasPermission: I => !!((0, o.iY)(I) && !!(0, l.$f)(I, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: I => (0, o.iY)(I)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: I => (0, o.iY)(I) && !!(0, e.z1)("dx-message-inbox")(I),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		hasPermission: I => (0, o.iY)(I)
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		navigationType: "global-settings"
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: I => (0, o.$n)(I, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: I => !(0, l.yD)(I)
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: I => !(0, l.yD)(I)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: I => !(0, l.yD)(I)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: I => {
				const j = (0, E.nA)(I);
				return j ? !!(!(0, l.yD)(I) && !!(0, E.ZB)(I, "origin_reachability_dash", "dash_view") && (0, E.tU)(j, "enterprise") && !!(0, c.Ek)(I, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: I => {
				const j = (0, E.nA)(I);
				return j ? !!(!(0, l.yD)(I) && !!(0, E.ZB)(I, "edge_reachability_dash", "dash_view") && (0, E.tU)(j, "enterprise") && !!(0, c.Ek)(I, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: I => !(0, l.yD)(I)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: I => (0, m.Xu)(I)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: I => !(0, l.yD)(I) && !!(0, E.ZB)(I, "logs", "instant_log") && !!(0, l.rV)(I, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: I => !!(0, ce.V)(I)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: N.bB,
		hasPermission: I => !(0, l.yD)(I) && (0, _.m7)(I)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: I => (0, o.$n)(I, "dns_records", "dns-record"),
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings"
		}, {
			title: "navigation.common.analytics",
			url: "/dns/analytics",
			labels: ["new"],
			testId: "zone-navigation-link-dns-overview",
			navigationType: "global-settings",
			hasPermission: I => {
				const j = (0, E.nA)(I),
					B = (j == null ? void 0 : j.type) === pe.K.PARTIAL;
				return !!(0, e.z1)("foundation-dns-enabled")(I) && !B && ((0, l.$f)(I, "foundation_dns.advanced_nameservers_allowed") || (0, l.du)(I, "foundation_dns.advanced_nameservers_allowed"))
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings"
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		pages: [{
			title: "navigation.zone.email.routing",
			navigationType: "global-settings",
			url: "/email/routing",
			tabs: y.hg,
			hasPermission: I => (0, o.iY)(I) && !(0, l.yD)(I) && (0, o.$n)(I, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: I => (0, M.ig)(I) ? !1 : (0, o.$n)(I, "dns_records", "dns-record") && !!(0, E.ZB)(I, "email", "dmarc_visible")
		}, {
			title: "navigation.zone.email.security",
			navigationType: "global-settings",
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		navigationType: "global-settings",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: I => {
			const j = (0, E.nA)(I);
			if ((0, l.yD)(I) || !(0, o.wB)(I, "zone_settings", "spectrum.app") || !j) return !1;
			const B = !!((0, u.l8)(I) || (0, E.DQ)(I)),
				te = !!(0, E.ZB)(I, "spectrum", "enabled"),
				F = !!(0, E.Ns)(j);
			return te || B || !F
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "ssl", "ssl.cert"),
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			navigationType: "global-settings",
			hasPermission: I => (0, l.$f)(I, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: I => !!(0, e.z1)("client-certificates")(I) || !!(0, E.ZB)(I, "ssl", "client_certificates")
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			navigationType: "global-settings",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			navigationType: "global-settings",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		navigationType: "version",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "waf", "firewall.rule") || (0, o.$n)(I, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			hasPermission: I => (0, g.B_)(I) && (0, o.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: v.gn,
			hasPermission: I => (0, o.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: v.mt,
			hasPermission: I => (0, o.$n)(I, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: I => (0, l.du)(I, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, o.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "version",
			hasPermission: I => {
				const j = (0, E.nA)(I);
				return j ? !!(0, E.ZB)(I, "firewall", "api_shield_tab") && (0, E.tU)(j, "business") && (0, o.$n)(I, "waf", "firewall.rule") : !1
			},
			tabs: v.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: I => !(0, l.yD)(I) && ((0, o.wB)(I, "access", "access.app") || (0, o.wB)(I, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: V.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: w
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "waf", "firewall.rule") || (0, o.$n)(I, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: I => (0, o.iY)(I)
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve"
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: I => !(0, l.yD)(I) && (0, o.wB)(I, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules/configuration-rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "waf", "firewall.rule") || (0, o.$n)(I, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["alpha"],
			navigationType: "version",
			hasPermission: I => (!!(0, k.GM)(I) || !!(0, e.z1)("snippets-enabled")(I)) && (0, o.$n)(I, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: h.m
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "zone_settings", "setting") && ((0, o.$n)(I, "waf", "firewall.rule") || (0, o.$n)(I, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.cloud_connector",
			labels: ["beta"],
			url: "/rules/cloud-connector",
			navigationType: "version",
			hasPermission: I => !!(0, e.z1)("cloud-connector-enabled")(I)
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "waf", "page-rule", "read") && !!(0, l.rV)(I, "rulesets.response_compression_max_rules") && !!(0, e.z1)("compression-rules")(I)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: I => (0, o.$n)(I, "waf", "page-rule", "read")
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: I => (0, o.$n)(I, "lb", "load-balancer") || (0, o.$n)(I, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: I => !(0, l.yD)(I)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: I => (0, o.iY)(I)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: I => (0, o.iY)(I)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: I => !(0, l.yD)(I)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: I => !(0, l.yD)(I) && !!(0, c.Ek)(I, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: I => !(0, l.yD)(I) && ((0, l.du)(I, "waiting_rooms.allowed") || !!(0, E.ZB)(I, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "zone_settings", "setting")
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: I => [],
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: I => !(0, l.yD)(I) && (0, o.$n)(I, "zaraz", "zaraz"),
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: p.az
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history"
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationType: "global-settings",
			url: "/zaraz/settings"
		}, {
			title: "navigation.zone.zaraz.plans",
			navigationType: "global-settings",
			url: "/zaraz/plans",
			hasPermission: I => !!(0, K.GM)(I) && !!(0, e.z1)("zaraz-plans-page-access")(I)
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: I => {
			const j = (0, a.uF)(I);
			return ((j == null ? void 0 : j.roles) || []).includes("Trust and Safety") ? !1 : !(0, l.yD)(I)
		}
	}],
	zeroTrust: [{
		url: () => (0, O.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, O.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("analytics/access"),
			title: "navigation.account.zero_trust.analytics.access"
		}, {
			url: () => (0, O.Uj)("analytics/gateway"),
			title: "navigation.account.zero_trust.analytics.gateway"
		}, {
			url: () => (0, O.Uj)("analytics/overview"),
			title: "navigation.account.zero_trust.analytics.analytics_and_reporting"
		}]
	}, {
		url: () => (0, O.Uj)("risk-score/scoring"),
		title: "navigation.account.zero_trust.risk_score",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("risk-score/scoring"),
			title: "navigation.account.zero_trust.risk_score.user_risk_scoring"
		}, {
			url: () => (0, O.Uj)("risk-score/behaviors"),
			title: "navigation.account.zero_trust.risk_score.risk_behaviors"
		}]
	}, {
		url: () => (0, O.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("gateway/locations"),
			title: "navigation.account.zero_trust.gateway.dns_locations"
		}, {
			url: () => (0, O.Uj)("gateway/policies"),
			title: "navigation.account.zero_trust.gateway.firewall_policies"
		}, {
			url: () => (0, O.Uj)("gateway/proxy-endpoints"),
			title: "navigation.account.zero_trust.gateway.proxy_endpoints"
		}, {
			url: () => (0, O.Uj)("gateway/egress-policies"),
			title: "navigation.account.zero_trust.gateway.egress_policies"
		}, {
			url: () => (0, O.Uj)("gateway/resolver-policies"),
			title: "navigation.account.zero_trust.gateway.resolver_policies"
		}]
	}, {
		url: () => (0, O.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("access/apps"),
			title: "navigation.account.zero_trust.access.applications"
		}, {
			url: () => (0, O.Uj)("access/groups"),
			title: "navigation.account.zero_trust.access.access_groups"
		}, {
			url: () => (0, O.Uj)("access/service-auth"),
			title: "navigation.account.zero_trust.access.service_auth"
		}, {
			url: () => (0, O.Uj)("access/tags"),
			title: "navigation.account.zero_trust.access.tags"
		}]
	}, {
		url: () => (0, O.Uj)("networks/tunnels"),
		title: "navigation.account.zero_trust.networks",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("networks/tunnels"),
			title: "navigation.account.zero_trust.networks.tunnels"
		}, {
			url: () => (0, O.Uj)("networks/routes"),
			title: "navigation.account.zero_trust.networks.routes"
		}]
	}, {
		url: () => (0, O.Uj)("casb/findings"),
		title: "navigation.account.zero_trust.casb",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("casb/findings"),
			title: "navigation.account.zero_trust.casb.findings"
		}, {
			url: () => (0, O.Uj)("casb/integration"),
			title: "navigation.account.zero_trust.casb.integrations"
		}]
	}, {
		url: () => (0, O.Uj)("dlp/profiles"),
		title: "navigation.account.zero_trust.dlp",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("dlp/profiles"),
			title: "navigation.account.zero_trust.dlp.profiles"
		}, {
			url: () => (0, O.Uj)("dlp/dataset"),
			title: "navigation.account.zero_trust.dlp.datasets"
		}]
	}, {
		url: () => (0, O.Uj)("dex/monitoring"),
		title: "navigation.account.zero_trust.dex",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("dex/monitoring"),
			title: "navigation.account.zero_trust.dex.monitoring"
		}, {
			url: () => (0, O.Uj)("dex/tests"),
			title: "navigation.account.zero_trust.dex.tests"
		}]
	}, {
		url: () => (0, O.Uj)("ces/overview"),
		title: "navigation.account.zero_trust.email_security",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("ces/overview"),
			title: "navigation.account.zero_trust.email_security.monitoring"
		}, {
			url: () => (0, O.Uj)("ces/investigation"),
			title: "navigation.account.zero_trust.email_security.investigation"
		}, {
			url: () => (0, O.Uj)("ces/settings"),
			title: "navigation.account.zero_trust.email_security.settings"
		}, {
			url: () => (0, O.Uj)("ces/directories"),
			title: "navigation.account.zero_trust.email_security.directories"
		}, {
			url: () => (0, O.Uj)("ces/phishguard"),
			title: "navigation.account.zero_trust.email_security.phishGuard"
		}]
	}, {
		url: () => (0, O.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("team/devices"),
			title: "navigation.account.zero_trust.my_team.devices"
		}, {
			url: () => (0, O.Uj)("team/users"),
			title: "navigation.account.zero_trust.my_team.users"
		}, {
			url: () => (0, O.Uj)("team/lists"),
			title: "navigation.account.zero_trust.my_team.lists"
		}]
	}, {
		url: () => (0, O.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, O.Uj)("logs/admin"),
			title: "navigation.account.zero_trust.logs.admin"
		}, {
			url: () => (0, O.Uj)("logs/access"),
			title: "navigation.account.zero_trust.logs.access"
		}, {
			url: () => (0, O.Uj)("logs/gateway"),
			title: "navigation.account.zero_trust.logs.gateway"
		}, {
			url: () => (0, O.Uj)("logs/logpush"),
			title: "navigation.account.zero_trust.logs.logpush"
		}, {
			url: () => (0, O.Uj)("logs/posture"),
			title: "navigation.account.zero_trust.logs.posture"
		}]
	}, {
		url: () => (0, O.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: z.G
}