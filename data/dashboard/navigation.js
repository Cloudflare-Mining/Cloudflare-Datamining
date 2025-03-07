const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "globe",
		hasPermission: L => !!(0, o.z1)("control-plane-large-orgs")(L)
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
		hasPermission: L => (0, o.z1)(l.Mr)(L) && (0, S.z7)(L) && !!(0, S.z$)(L).length
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
		title: L => (0, o.z1)("fractus-managed-profile")(L) ? "navigation.profile.settings" : "navigation.profile.preferences",
		url: L => (0, o.z1)("fractus-managed-profile")(L) ? "/managed-profile/preferences" : "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: L => !!(0, o.z1)("oauth-access-management")(L)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: L => !(0, b.n3)() && !(0, o.z1)("oauth-access-management")(L)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: L => !(0, o.z1)("oauth-access-management")(L)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/home",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: L => !!(0, o.z1)("dashnav-developer-platform-home")(L) && !!(0, o.z1)("dx-account-zone-selector-table-view-v2")(L) && (0, E.iY)(L)
	}, {
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: L => !!(0, o.z1)("dx-account-zone-selector-table-view-v2")(L) && (!(0, o.z1)("dashnav-developer-platform-home")(L) || !(0, E.iY)(L))
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		testId: "sidenav-websites-link",
		iconType: "internet-browser",
		hasPermission: L => !(0, o.z1)("dx-account-zone-selector-table-view-v2")(L)
	}, {
		title: "navigation.account.discover",
		url: "/discover",
		testId: "sidenav-discover-link",
		iconType: "discover"
	}, {
		title: "navigation.account.registrar",
		url: "/registrar/domains",
		testId: "sidenav-domains-link",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/registrar/domains",
			state: {
				forceRenderIfNoDomains: !0
			}
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/registrar/transfer"
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/registrar/register"
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/registrar/protection",
			labels: ["beta"],
			hasPermission: L => (0, E.gw)(L)
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		testId: "sidenav-analytics-link",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: L => (0, E.iY)(L)
		}, {
			title: "navigation.account.account_http_traffic",
			url: "/http-traffic",
			labels: ["beta"],
			hasPermission: L => (0, E.iY)(L) && !!(0, o.z1)("account-traffic-analytics")(L)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: L => (0, E.iY)(L) && (0, W.Ob)(L)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: L => (0, E.iY)(L)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: L => (0, E.iY)(L) && (0, M.S6)(L) && !!(0, o.z1)("account-logpush")(L)
		}, {
			title: "navigation.account.log_explorer",
			url: "/log-explorer",
			labels: ["beta"],
			hasPermission: L => (0, E.iY)(L) && (0, d.V)(L)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: L => (0, E.iY)(L) && !!(0, e.Le)(L, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: L => (0, E.iY)(L) && (!!(0, e.Le)(L, "account_analytics", "magic_network_monitoring") || !!(0, r.$f)(L, "rulesets.magic_transit_allowed"))
		}, {
			title: "navigation.account.dashboards",
			url: "/dashboards",
			hasPermission: L => !!(0, o.z1)("custom-dashboards")(L)
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		testId: "sidenav-security-center-link",
		hasPermission: L => (0, E.iY)(L) && (0, c.xU)(L),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: L => (0, E.iY)(L) && (0, c.v_)(L)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: L => (0, E.iY)(L) && (0, c.en)(L)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			hasPermission: L => (0, E.iY)(L) && (0, c.en)(L)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: L => (0, E.iY)(L) && (0, c.sL)(L)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: L => (0, E.iY)(L) && (0, c.TT)(L)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: L => (0, E.iY)(L) && (0, c.jD)(L)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: L => (0, E.iY)(L) && (0, c.BU)(L) && ((0, e.hI)(L) || (0, e.CV)(L))
		}, {
			title: "navigation.account.security_center.blocked_content",
			url: "/security-center/blocked-content",
			labels: ["new"],
			hasPermission: L => (0, E.iY)(L) && (0, c.XB)(L)
		}, {
			title: "navigation.account.security_center.threat_intelligence",
			url: "/security-center/threat-intelligence",
			hasPermission: L => (0, E.iY)(L) && (0, c.fS)(L)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "sidenav-trace-link",
		labels: ["beta"],
		hasPermission: R.T
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		testId: "sidenav-waf-link",
		tabs: h.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: L => (0, r.Ci)(L)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: L => (0, E.iY)(L) && !!(0, o.z1)("managed-challenge-ui")(L)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.zone.traffic.load_balancing",
		url: "/load-balancing",
		iconType: "reliability-load-balancer",
		hasPermission: L => !!(0, o.z1)("account-load-balancing")(L)
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-interconnects-link",
		hasPermission: L => !!((0, E.iY)(L) && (0, o.z1)("magic-interconnects")(L) && (!!(0, e.Le)(L, "magic_wan", "mw_home") || !!(0, e.Le)(L, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		testId: "sidenav-magic-transit-link",
		hasPermission: L => (0, E.iY)(L) && !!(0, e.Le)(L, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: T.Lx.concat(T.SF, T.Jg)
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
		testId: "sidenav-magic-firewall-link",
		hasPermission: L => !!(0, E.zJ)(L),
		tabs: h.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		testId: "sidenav-ddos-link",
		hasPermission: L => {
			const k = !!(0, E.Wq)(L) && !!(0, E.fO)(L);
			return !!(0, E.us)(L) || k
		},
		tabs: h.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: L => !!(0, E.Wq)(L) && !!(0, E.fO)(L)
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection",
			hasPermission: L => (0, E.us)(L),
			tabs: h.O1
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/proxy-ips",
		iconType: "network",
		testId: "sidenav-ip-addresses-link",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: L => (0, E.iY)(L) && ((0, r.$f)(L, "addressing.byoip_allowed") || !!(0, e.Le)(L, "addressing", "ip_prefixes"))
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips"
		}]
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: () => {
			const L = (0, _.e1)(),
				k = "https://one.dash.cloudflare.com";
			return L ? `${k}/${L}/` : k
		},
		iconType: "cloudflare-zero-trust",
		testId: "sidenav-zero-trust-link",
		labels: L => (0, o.z1)("zt-sidebar")(L) ? [] : ["external-link"],
		hasPermission: L => (0, E.iY)(L)
	}, {
		title: "navigation.account.magic_wan",
		url: L => (0, o.z1)("magic-cf-site")(L) ? "/magic-wan/network" : "/magic-wan/overview",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-magic-wan-link",
		hasPermission: L => (0, E.iY)(L) && !!(0, e.Le)(L, "magic_wan", "mw_home") || !!(0, e.Le)(L, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: L => (0, E.iY)(L) && !!(0, e.Le)(L, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(L)
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: L => (0, E.iY)(L) && !!(0, e.Le)(L, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(L)
		}, {
			title: "navigation.account.magic_connectors.network_overview",
			url: "/magic-wan/network",
			labels: ["beta"],
			hasPermission: L => (0, E.iY)(L) && !!(0, o.z1)("magic-cf-site")(L)
		}, {
			title: "navigation.account.magic_connectors.mconn_onramp",
			url: "/magic-wan/mconn-onramp",
			labels: ["beta"],
			hasPermission: L => (0, E.iY)(L) && !!(0, e.Le)(L, "magic_wan", "mc_home") && !!(0, o.z1)("magic-cf-site")(L)
		}, {
			title: "navigation.account.magic_connectors.cloud_onramp",
			url: "/magic-wan/cloud-onramp",
			labels: L => (0, o.z1)("magic-beta-flags-disabled")(L) ? [] : ["beta"],
			hasPermission: L => !!(0, r.$f)(L, "magic_cloud.enabled")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: T.SF.concat(T.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		hasPermission: L => (0, E.iY)(L),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		testId: "sidenav-area-one-link",
		pages: [{
			url: "/area1",
			title: "navigation.common.overview"
		}, {
			url: () => (0, W.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.overview",
			labels: ["external-link"]
		}, {
			url: "/area1/retro-scan",
			title: "navigation.account.area_one.retro_scan",
			hasPermission: L => (0, o.z1)("area-1-retro-scan")(L) === !0
		}]
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.compute_workers",
		url: "/workers-and-pages",
		additionalMatchUrls: ["/workers/services", "/workers/subdomain", "/workers/analytics-engine", "/workers/compute-setting", "/pages/view", "/pages/new"],
		iconType: "workers-pages",
		hasPermission: L => (0, E.iY)(L),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.account.workers_and_pages",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces",
			hasPermission: L => !(0, o.z1)("storage-and-databases-account-navigation")(L)
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: L => !!(0, o.z1)("durable-objects-ui")(L)
		}, {
			title: "navigation.account.workers.containers",
			url: "/workers/containers",
			labels: ["beta"],
			hasPermission: L => !!(0, o.z1)("containers-ui")(L)
		}, {
			title: "navigation.account.workers.observability",
			url: "/workers-and-pages/observability",
			hasPermission: L => !!(0, o.z1)("query-builder")(L)
		}, {
			title: "navigation.account.workers.workflows",
			url: "/workers/workflows",
			labels: ["beta"],
			hasPermission: L => !!(0, o.z1)("workflows-ui")(L)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			hasPermission: L => !(0, o.z1)("storage-and-databases-account-navigation")(L),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			hasPermission: L => !(0, o.z1)("storage-and-databases-account-navigation")(L)
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: L => !!(0, o.z1)("constellation-ui")(L) && !(0, e.RO)(L)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: L => !!(0, o.z1)("hyperdrive-ui")(L) && !(0, o.z1)("storage-and-databases-account-navigation")(L)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: L => (0, z.r)(L) && (0, z._)(L) && !(0, o.z1)("storage-and-databases-account-navigation")(L)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: L => {
				const k = (0, i.tJ)(L);
				return !(0, m.ky)(k, [p.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.secrets_store",
		url: "/secrets-store",
		labels: ["new"],
		iconType: "lock",
		testId: "secrets-store",
		hasPermission: L => (0, a.j)(L)
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: L => (0, E.iY)(L) && (0, Z.k)(L)
	}, {
		title: "navigation.account.storage_and_databases",
		url: "/workers/kv/namespaces",
		iconType: "d1",
		testId: "sidenav-d1-link",
		hasPermission: L => !!(0, o.z1)("storage-and-databases-account-navigation")(L),
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: L => !!(0, o.z1)("hyperdrive-ui")(L)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: L => (0, z.r)(L) && (0, z._)(L)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.clipboard",
			url: "/workers/clipboards",
			testId: "sidenav-clipboard-link",
			hasPermission: L => !!(0, o.z1)("queues-clipboard")(L)
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: L => (0, E.iY)(L),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: L => (0, E.o_)(L)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: L => (0, E.o_)(L)
		}]
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: L => !!(0, e.RO)(L) || !!(0, e.B)(L),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: L => (0, e.RO)(L)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: L => (0, e.RO)(L)
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: L => !!(0, e.B)(L)
		}, {
			title: "navigation.account.workers.ai.ai-rag",
			url: "/ai/ai-rag",
			labels: ["beta"],
			hasPermission: L => !!(0, o.z1)("ai-auto-rag")(L)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		testId: "sidenav-stream-link",
		hasPermission: L => (0, E.iY)(L),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: L => (0, E.hv)(L)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: L => (0, E.hv)(L)
		}, {
			title: "navigation.account.stream.video_transformations",
			labels: ["beta"],
			url: "/stream/video-transformations",
			hasPermission: L => (0, E.hv)(L) && (0, f.GU)(L, "stream-video-transformations-beta-enabled")
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			hasPermission: L => (0, E.hv)(L)
		}, {
			title: "navigation.account.stream.plans",
			url: "/stream/plans",
			hasPermission: L => !(0, E.hv)(L)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: L => (0, E.iY)(L),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images"
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: L => (0, E.dL)(L)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: L => (0, E.dL)(L)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: L => (0, E.dL)(L),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link"
		}, {
			title: "navigation.account.images.plans",
			url: "/images/plans",
			testId: "sidenav-plans-link",
			hasPermission: L => !(0, E.IU)(L)
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		iconType: "calls",
		testId: "sidenav-calls-link",
		hasPermission: L => (0, E.iY)(L)
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
			hasPermission: L => (0, E.iY)(L)
		}, {
			title: "navigation.account.user_groups",
			url: "/user-groups",
			labels: ["alpha"],
			testId: "account-homepage-user-groups",
			hasPermission: L => (0, E.iY)(L) && !!(0, o.z1)(C.Fq)(L)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: L => (0, E.iY)(L)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: L => (0, s.b)(L) ? (0, E.iY)(L) : (0, e.Yj)(L)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: L => (0, E.iY)(L)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: L => (0, E.iY)(L)
		}, {
			title: "navigation.account.shared_configurations",
			url: "/shared-configurations",
			testId: "shared-config-link",
			labels: ["alpha"],
			hasPermission: L => (0, P.K)(L, "account")
		}, {
			title: "navigation.account.mcn",
			url: "/mcn/integrations",
			labels: L => (0, o.z1)("magic-beta-flags-disabled")(L) ? [] : ["beta"],
			hasPermission: L => !!((0, E.iY)(L) && !!(0, r.$f)(L, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		testId: "sidenav-notifications-link",
		hasPermission: L => (0, E.iY)(L)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: L => (0, E.iY)(L) && !!(0, o.z1)("dx-message-inbox")(L),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		testId: "sidenav-bulk-redirects-link",
		hasPermission: L => (0, E.iY)(L)
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		navigationType: "global-settings"
	}, {
		title: "navigation.zone.ai",
		url: "/ai",
		testId: "sidenav-ai-zones",
		iconType: "ai-audit",
		labels: ["beta"],
		navigationType: "global-settings",
		hasPermission: L => !!(0, o.z1)("ai-audit")(L)
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: L => (0, E.$n)(L, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: L => !(0, r.yD)(L)
		}, {
			title: "navigation.account.web_analytics",
			url: "/analytics/web/overview",
			navigationType: "global-settings",
			hasPermission: L => {
				const k = (0, u.nA)(L),
					Q = !!(0, o.z1)("zone-level-rum")(L);
				return (k == null ? void 0 : k.status) === "active" && Q && !(0, r.yD)(L)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: L => !(0, r.yD)(L)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: L => !(0, r.yD)(L)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: L => {
				const k = (0, u.nA)(L);
				return k ? !!(!(0, r.yD)(L) && !!(0, u.ZB)(L, "origin_reachability_dash", "dash_view") && (0, u.tU)(k, "enterprise") && !!(0, y.Ek)(L, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: L => {
				const k = (0, u.nA)(L);
				return k ? !!(!(0, r.yD)(L) && !!(0, u.ZB)(L, "edge_reachability_dash", "dash_view") && (0, u.tU)(k, "enterprise") && !!(0, y.Ek)(L, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: L => !(0, r.yD)(L)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: L => (0, M.Xu)(L)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: L => !(0, r.yD)(L) && !!(0, u.ZB)(L, "logs", "instant_log") && !!(0, r.rV)(L, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: L => !!(0, d.V)(L)
		}, {
			title: "navigation.zone.analytics.dashboards",
			url: "/analytics/dashboards",
			navigationType: "global-settings",
			hasPermission: L => !!(0, o.z1)("custom-dashboards")(L)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: F.bB,
		hasPermission: L => !(0, r.yD)(L) && (0, q.m7)(L)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: L => (0, E.$n)(L, "dns_records", "dns-record"),
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings"
		}, {
			title: "navigation.common.analytics",
			url: "/dns/analytics",
			testId: "zone-navigation-link-dns-overview",
			navigationType: "global-settings"
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
			tabs: w.hg,
			hasPermission: L => (0, E.iY)(L) && !(0, r.yD)(L) && (0, E.$n)(L, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			hasPermission: L => (0, v.ig)(L) ? !1 : (0, E.$n)(L, "dns_records", "dns-record") && !!(0, u.ZB)(L, "email", "dmarc_visible")
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
		hasPermission: L => {
			const k = (0, u.nA)(L);
			if ((0, r.yD)(L) || !(0, E.wB)(L, "zone_settings", "spectrum.app") || !k) return !1;
			const Q = !!((0, f.l8)(L) || (0, u.DQ)(L)),
				$ = !!(0, u.ZB)(L, "spectrum", "enabled"),
				re = !!(0, u.Ns)(k);
			return $ || Q || !re
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: E.jq,
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
			hasPermission: L => (0, r.$f)(L, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: L => !!(0, o.z1)("client-certificates")(L) || !!(0, u.ZB)(L, "ssl", "client_certificates")
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
		labels: L => (0, K.P8)(L) ? ["beta"] : [],
		hasPermission: L => !(0, r.yD)(L) && (0, E.$n)(L, "waf", "firewall.rule") || (0, E.$n)(L, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.overview",
			navigationType: "version",
			url: "/security/overview",
			hasPermission: L => (0, E.$n)(L, "waf", "firewall.rule") && !!(0, o.z1)("appsec-overview")(L)
		}, {
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			tabs: ee.Wu,
			hasPermission: L => (0, E.$n)(L, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.asset_management",
			navigationType: "version",
			url: "/security/application-mapping",
			hasPermission: L => (0, K.P8)(L) && ((0, E.$n)(L, "waf", "firewall.rule") || (0, E.$n)(L, "page_shield", "script-monitor"))
		}, {
			title: "navigation.zone.security_rules",
			navigationType: "version",
			url: "/security/security-rules",
			hasPermission: L => (0, K.P8)(L) && (0, E.$n)(L, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: L => !(0, K.P8)(L) && (0, E.$n)(L, "waf", "firewall.rule") && !(0, o.z1)("app-security-navigation-mvp")(L)
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: x.gn,
			hasPermission: L => !(0, K.P8)(L) && (0, E.$n)(L, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: D.mt,
			hasPermission: L => !(0, K.P8)(L) && (0, E.$n)(L, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: L => !(0, K.P8)(L) && (0, E.$n)(L, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: L => !(0, K.P8)(L) && (0, r.du)(L, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, E.$n)(L, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			navigationType: "version",
			hasPermission: L => !(0, K.P8)(L) && (0, O.R0)(L),
			tabs: D.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: L => !(0, K.P8)(L) && (0, E.$n)(L, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: L => !(0, K.P8)(L) && (0, E.$n)(L, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/detections",
			navigationType: "version",
			hasPermission: L => (0, K.P8)(L) && (0, E.$n)(L, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: L => !(0, r.yD)(L) && ((0, E.wB)(L, "access", "access.app") || (0, E.wB)(L, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: L => !(0, r.yD)(L) && (0, E.$n)(L, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: j.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: L => !(0, r.yD)(L) && (0, E.$n)(L, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: A
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: L => (0, E.$n)(L, "waf", "firewall.rule") || (0, E.$n)(L, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: L => (0, E.iY)(L)
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
		hasPermission: L => !(0, r.yD)(L) && (0, E.wB)(L, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		navigationType: "version",
		iconType: "filter",
		testId: "zone-navigation-link-rules",
		hasPermission: L => !(0, r.yD)(L) && (0, E.$n)(L, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.overview",
			url: "/rules/overview",
			labels: ["new"],
			navigationType: "version",
			hasPermission: L => !!(0, o.z1)("rules-overview")(L)
		}, {
			title: "navigation.zone.rules.templates",
			url: "/rules/templates",
			labels: ["new"],
			tabs: I.HI,
			navigationType: "version",
			hasPermission: L => !(0, o.z1)("rules-overview")(L) && ((0, E.$n)(L, "waf", "firewall.rule") || (0, E.$n)(L, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: L => !(0, o.z1)("rules-overview")(L) && ((0, E.$n)(L, "waf", "firewall.rule") || (0, E.$n)(L, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: L => (0, E.$n)(L, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: I.mI,
			hasPermission: L => !(0, o.z1)("rules-overview")(L)
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			tabs: I.KZ,
			hasPermission: L => !(0, o.z1)("rules-overview")(L) && (0, E.$n)(L, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: L => !(0, o.z1)("rules-overview")(L) && (0, E.$n)(L, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: L => !(0, o.z1)("rules-overview")(L) && (0, E.$n)(L, "zone_settings", "setting") && ((0, E.$n)(L, "waf", "firewall.rule") || (0, E.$n)(L, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.cloud_connector",
			labels: ["beta"],
			url: "/rules/cloud-connector",
			navigationType: "version",
			hasPermission: L => !!(0, o.z1)("cloud-connector-enabled")(L)
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: L => !(0, o.z1)("rules-overview")(L) && (0, E.$n)(L, "waf", "page-rule", "read") && !!(0, r.rV)(L, "rulesets.response_compression_max_rules")
		}, {
			title: "navigation.account.request_tracer",
			url: "/rules/trace/search",
			labels: ["beta"],
			navigationType: "version",
			additionalMatchUrls: ["/:accountId/:zoneName/rules/trace/results"],
			hasPermission: L => !!(0, o.z1)("rules-overview")(L) && !!(0, R.T)(L)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules/page-rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.url_normalization",
			url: "/rules/url-normalization",
			navigationType: "version",
			hasPermission: L => !(0, o.z1)("rules-overview")(L) && (0, E.$n)(L, "waf", "page-rule", "read")
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: L => !(0, r.yD)(L) && (0, E.$n)(L, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: L => (0, E.$n)(L, "lb", "load-balancer") || (0, E.$n)(L, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: L => !(0, r.yD)(L)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: L => (0, E.iY)(L)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: L => (0, E.iY)(L)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: L => !(0, r.yD)(L)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: L => !(0, r.yD)(L) && !!(0, y.Ek)(L, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: L => !(0, r.yD)(L)
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: L => !(0, r.yD)(L) && (0, E.$n)(L, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: L => !(0, r.yD)(L) && (0, E.$n)(L, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: L => !(0, r.yD)(L) && (0, E.$n)(L, "zone_settings", "setting")
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: L => [],
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: L => !(0, r.yD)(L) && (0, E.$n)(L, "zaraz", "zaraz"),
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: Y.az
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history"
		}, {
			title: "navigation.zone.zaraz.analytics",
			navigationType: "global-settings",
			url: "/zaraz/monitoring",
			tabs: Y.EV
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationType: "global-settings",
			url: "/zaraz/settings"
		}, {
			title: "navigation.zone.zaraz.plans",
			navigationType: "global-settings",
			url: "/zaraz/plans",
			hasPermission: L => !!(0, o.z1)("zaraz-plans-page-access")(L)
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: L => {
			const k = (0, e.uF)(L);
			return ((k == null ? void 0 : k.roles) || []).includes("Trust and Safety") ? !1 : !(0, r.yD)(L)
		}
	}],
	zeroTrust: [{
		url: () => (0, W.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, W.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("analytics/access"),
			title: "navigation.account.zero_trust.analytics.access"
		}, {
			url: () => (0, W.Uj)("analytics/gateway"),
			title: "navigation.account.zero_trust.analytics.gateway"
		}, {
			url: () => (0, W.Uj)("analytics/overview"),
			title: "navigation.account.zero_trust.analytics.analytics_and_reporting"
		}]
	}, {
		url: () => (0, W.Uj)("risk-score/scoring"),
		title: "navigation.account.zero_trust.risk_score",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("risk-score/scoring"),
			title: "navigation.account.zero_trust.risk_score.user_risk_scoring"
		}, {
			url: () => (0, W.Uj)("risk-score/behaviors"),
			title: "navigation.account.zero_trust.risk_score.risk_behaviors"
		}]
	}, {
		url: () => (0, W.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("gateway/locations"),
			title: "navigation.account.zero_trust.gateway.dns_locations"
		}, {
			url: () => (0, W.Uj)("gateway/policies"),
			title: "navigation.account.zero_trust.gateway.firewall_policies"
		}, {
			url: () => (0, W.Uj)("gateway/proxy-endpoints"),
			title: "navigation.account.zero_trust.gateway.proxy_endpoints"
		}, {
			url: () => (0, W.Uj)("gateway/egress-policies"),
			title: "navigation.account.zero_trust.gateway.egress_policies"
		}, {
			url: () => (0, W.Uj)("gateway/resolver-policies"),
			title: "navigation.account.zero_trust.gateway.resolver_policies"
		}]
	}, {
		url: () => (0, W.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("access/apps"),
			title: "navigation.account.zero_trust.access.applications"
		}, {
			url: () => (0, W.Uj)("access/groups"),
			title: "navigation.account.zero_trust.access.access_groups"
		}, {
			url: () => (0, W.Uj)("access/service-auth"),
			title: "navigation.account.zero_trust.access.service_auth"
		}, {
			url: () => (0, W.Uj)("access/tags"),
			title: "navigation.account.zero_trust.access.tags"
		}]
	}, {
		url: () => (0, W.Uj)("networks/tunnels"),
		title: "navigation.account.zero_trust.networks",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("networks/tunnels"),
			title: "navigation.account.zero_trust.networks.tunnels"
		}, {
			url: () => (0, W.Uj)("networks/routes"),
			title: "navigation.account.zero_trust.networks.routes"
		}]
	}, {
		url: () => (0, W.Uj)("casb/findings"),
		title: "navigation.account.zero_trust.casb",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("casb/findings"),
			title: "navigation.account.zero_trust.casb.findings"
		}, {
			url: () => (0, W.Uj)("casb/integration"),
			title: "navigation.account.zero_trust.casb.integrations"
		}]
	}, {
		url: () => (0, W.Uj)("dlp/profiles"),
		title: "navigation.account.zero_trust.dlp",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("dlp/profiles"),
			title: "navigation.account.zero_trust.dlp.profiles"
		}, {
			url: () => (0, W.Uj)("dlp/dataset"),
			title: "navigation.account.zero_trust.dlp.datasets"
		}]
	}, {
		url: () => (0, W.Uj)("dex/monitoring"),
		title: "navigation.account.zero_trust.dex",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("dex/monitoring"),
			title: "navigation.account.zero_trust.dex.monitoring"
		}, {
			url: () => (0, W.Uj)("dex/tests"),
			title: "navigation.account.zero_trust.dex.tests"
		}]
	}, {
		url: () => (0, W.Uj)("email-security/overview"),
		title: "navigation.account.zero_trust.email_security",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.monitoring"
		}, {
			url: () => (0, W.Uj)("email-security/investigation"),
			title: "navigation.account.zero_trust.email_security.investigation"
		}, {
			url: () => (0, W.Uj)("email-security/settings"),
			title: "navigation.account.zero_trust.email_security.settings"
		}, {
			url: () => (0, W.Uj)("email-security/directories"),
			title: "navigation.account.zero_trust.email_security.directories"
		}, {
			url: () => (0, W.Uj)("email-security/phishguard"),
			title: "navigation.account.zero_trust.email_security.phishGuard"
		}]
	}, {
		url: () => (0, W.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("team/devices"),
			title: "navigation.account.zero_trust.my_team.devices"
		}, {
			url: () => (0, W.Uj)("team/users"),
			title: "navigation.account.zero_trust.my_team.users"
		}, {
			url: () => (0, W.Uj)("team/lists"),
			title: "navigation.account.zero_trust.my_team.lists"
		}]
	}, {
		url: () => (0, W.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, W.Uj)("logs/admin"),
			title: "navigation.account.zero_trust.logs.admin"
		}, {
			url: () => (0, W.Uj)("logs/access"),
			title: "navigation.account.zero_trust.logs.access"
		}, {
			url: () => (0, W.Uj)("logs/gateway"),
			title: "navigation.account.zero_trust.logs.gateway"
		}, {
			url: () => (0, W.Uj)("logs/logpush"),
			title: "navigation.account.zero_trust.logs.logpush"
		}, {
			url: () => (0, W.Uj)("logs/posture"),
			title: "navigation.account.zero_trust.logs.posture"
		}]
	}, {
		url: () => (0, W.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: g.G
}