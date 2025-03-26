const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "globe",
		hasPermission: E => !!(0, o.z1)("control-plane-large-orgs")(E)
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
		hasPermission: E => (0, o.z1)(u.Mr)(E) && (0, S.z7)(E) && !!(0, S.z$)(E).length
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
		title: E => (0, o.z1)("fractus-managed-profile")(E) ? "navigation.profile.settings" : "navigation.profile.preferences",
		url: E => (0, o.z1)("fractus-managed-profile")(E) ? "/managed-profile" : "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: E => !!(0, o.z1)("oauth-access-management")(E)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: E => !(0, A.n3)() && !(0, o.z1)("oauth-access-management")(E)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: E => !(0, o.z1)("oauth-access-management")(E)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/home",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: E => !!(0, o.z1)("dashnav-developer-platform-home")(E) && !!(0, o.z1)("dx-account-zone-selector-table-view-v2")(E) && (0, g.iY)(E)
	}, {
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		testId: "sidenav-home-link",
		hasPermission: E => !!(0, o.z1)("dx-account-zone-selector-table-view-v2")(E) && (!(0, o.z1)("dashnav-developer-platform-home")(E) || !(0, g.iY)(E))
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		testId: "sidenav-websites-link",
		iconType: "internet-browser",
		hasPermission: E => !(0, o.z1)("dx-account-zone-selector-table-view-v2")(E)
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
			hasPermission: E => (0, g.gw)(E)
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
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.account_http_traffic",
			url: "/http-traffic",
			labels: ["beta"],
			hasPermission: E => (0, g.iY)(E) && !!(0, o.z1)("account-traffic-analytics")(E)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: E => (0, g.iY)(E) && (0, K.Ob)(E)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: E => (0, g.iY)(E) && (0, C.S6)(E) && !!(0, o.z1)("account-logpush")(E)
		}, {
			title: "navigation.account.log_explorer",
			url: "/log-explorer",
			labels: ["beta"],
			hasPermission: E => (0, g.iY)(E) && (0, p.V)(E)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: E => (0, g.iY)(E) && !!(0, e.Le)(E, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: E => (0, g.iY)(E) && (!!(0, e.Le)(E, "account_analytics", "magic_network_monitoring") || !!(0, r.$f)(E, "rulesets.magic_transit_allowed"))
		}, {
			title: "navigation.account.dashboards",
			url: "/dashboards",
			hasPermission: E => !!(0, B.Ko)(E)
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		testId: "sidenav-security-center-link",
		hasPermission: E => (0, g.iY)(E) && (0, c.xU)(E),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: E => (0, g.iY)(E) && (0, c.v_)(E)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: E => (0, g.iY)(E) && (0, c.en)(E)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			hasPermission: E => (0, g.iY)(E) && (0, c.en)(E)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: E => (0, g.iY)(E) && (0, c.sL)(E)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: E => (0, g.iY)(E) && (0, c.TT)(E)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: E => (0, g.iY)(E) && (0, c.jD)(E)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: E => (0, g.iY)(E) && (0, c.BU)(E) && ((0, e.hI)(E) || (0, e.CV)(E))
		}, {
			title: "navigation.account.security_center.blocked_content",
			url: "/security-center/blocked-content",
			labels: ["new"],
			hasPermission: E => (0, g.iY)(E) && (0, c.XB)(E)
		}, {
			title: "navigation.account.security_center.threat_intelligence",
			url: "/security-center/threat-intelligence",
			hasPermission: E => (0, g.iY)(E) && (0, c.fS)(E)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "sidenav-trace-link",
		labels: ["beta"],
		hasPermission: N.T
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
		tabs: m.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: E => (0, r.Ci)(E)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: E => (0, g.iY)(E) && !!(0, o.z1)("managed-challenge-ui")(E)
	}, {
		title: "account.home",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.zone.traffic.load_balancing",
		url: "/load-balancing",
		iconType: "reliability-load-balancer",
		hasPermission: E => !!(0, o.z1)("account-load-balancing")(E)
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-interconnects-link",
		hasPermission: E => !!((0, g.iY)(E) && (0, o.z1)("magic-interconnects")(E) && (!!(0, e.Le)(E, "magic_wan", "mw_home") || !!(0, e.Le)(E, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		testId: "sidenav-magic-transit-link",
		hasPermission: E => (0, g.iY)(E) && !!(0, e.Le)(E, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: I.Lx.concat(I.SF, I.Jg)
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
		hasPermission: E => !!(0, g.zJ)(E),
		tabs: m.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		testId: "sidenav-ddos-link",
		hasPermission: E => {
			const Z = !!(0, g.Wq)(E) && !!(0, g.fO)(E);
			return !!(0, g.us)(E) || Z
		},
		tabs: m.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: E => !!(0, g.Wq)(E) && !!(0, g.fO)(E)
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection",
			hasPermission: E => (0, g.us)(E),
			tabs: m.O1
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/proxy-ips",
		iconType: "network",
		testId: "sidenav-ip-addresses-link",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: E => (0, g.iY)(E) && ((0, r.$f)(E, "addressing.byoip_allowed") || !!(0, e.Le)(E, "addressing", "ip_prefixes"))
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
			const E = (0, L.e1)(),
				Z = "https://one.dash.cloudflare.com";
			return E ? `${Z}/${E}/` : Z
		},
		iconType: "cloudflare-zero-trust",
		testId: "sidenav-zero-trust-link",
		labels: E => (0, o.z1)("zt-sidebar")(E) ? [] : ["external-link"],
		hasPermission: E => (0, g.iY)(E)
	}, {
		title: "navigation.account.magic_wan",
		url: E => (0, o.z1)("magic-cf-site")(E) ? "/magic-wan/network" : "/magic-wan/overview",
		iconType: "cloudflare-magic-wan",
		testId: "sidenav-magic-wan-link",
		hasPermission: E => (0, g.iY)(E) && !!(0, e.Le)(E, "magic_wan", "mw_home") || !!(0, e.Le)(E, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: E => (0, g.iY)(E) && !!(0, e.Le)(E, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(E)
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: E => (0, g.iY)(E) && !!(0, e.Le)(E, "magic_wan", "mc_home") && !(0, o.z1)("magic-cf-site")(E)
		}, {
			title: "navigation.account.magic_connectors.network_overview",
			url: "/magic-wan/network",
			labels: ["beta"],
			hasPermission: E => (0, g.iY)(E) && !!(0, o.z1)("magic-cf-site")(E)
		}, {
			title: "navigation.account.magic_connectors.mconn_onramp",
			url: "/magic-wan/mconn-onramp",
			labels: ["beta"],
			hasPermission: E => (0, g.iY)(E) && !!(0, e.Le)(E, "magic_wan", "mc_home") && !!(0, o.z1)("magic-cf-site")(E)
		}, {
			title: "navigation.account.magic_connectors.cloud_onramp",
			url: "/magic-wan/cloud-onramp",
			labels: E => (0, o.z1)("magic-beta-flags-disabled")(E) ? [] : ["beta"],
			hasPermission: E => !!(0, r.$f)(E, "magic_cloud.enabled")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: I.SF.concat(I.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		hasPermission: E => (0, g.iY)(E),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		testId: "sidenav-area-one-link",
		pages: [{
			url: "/area1",
			title: "navigation.common.overview"
		}, {
			url: () => (0, K.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.overview",
			labels: ["external-link"]
		}, {
			url: "/area1/retro-scan",
			title: "navigation.account.area_one.retro_scan",
			hasPermission: E => (0, o.z1)("area-1-retro-scan")(E) === !0
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
		hasPermission: E => (0, g.iY)(E),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.account.workers_and_pages",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces",
			hasPermission: E => !(0, o.z1)("storage-and-databases-account-navigation")(E)
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: E => !!(0, o.z1)("durable-objects-ui")(E)
		}, {
			title: "navigation.account.workers.containers",
			url: "/workers/containers",
			labels: ["beta"],
			hasPermission: E => !!(0, o.z1)("containers-ui")(E)
		}, {
			title: "navigation.account.workers.observability",
			url: "/workers-and-pages/observability",
			labels: ["beta"],
			hasPermission: E => !!(0, o.z1)("query-builder")(E)
		}, {
			title: "navigation.account.workers.workflows",
			url: "/workers/workflows",
			labels: ["beta"],
			hasPermission: E => !!(0, o.z1)("workflows-ui")(E)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			hasPermission: E => !(0, o.z1)("storage-and-databases-account-navigation")(E),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			hasPermission: E => !(0, o.z1)("storage-and-databases-account-navigation")(E)
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: E => !!(0, o.z1)("constellation-ui")(E) && !(0, e.RO)(E)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: E => !!(0, o.z1)("hyperdrive-ui")(E) && !(0, o.z1)("storage-and-databases-account-navigation")(E)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: E => (0, z.r)(E) && (0, z._)(E) && !(0, o.z1)("storage-and-databases-account-navigation")(E)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: E => {
				const Z = (0, l.tJ)(E);
				return !(0, y.ky)(Z, [h.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.secrets_store",
		url: "/secrets-store",
		labels: ["new"],
		iconType: "lock",
		testId: "secrets-store",
		hasPermission: E => (0, a.j)(E)
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: E => (0, g.iY)(E) && (0, F.k)(E)
	}, {
		title: "navigation.account.storage_and_databases",
		url: "/workers/kv/namespaces",
		iconType: "d1",
		testId: "sidenav-d1-link",
		hasPermission: E => !!(0, o.z1)("storage-and-databases-account-navigation")(E),
		pages: [{
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: E => !!(0, o.z1)("hyperdrive-ui")(E)
		}, {
			title: "navigation.account.workers.pipelines",
			url: "/workers/pipelines",
			labels: ["beta"],
			hasPermission: E => (0, z.r)(E) && (0, z._)(E)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.clipboard",
			url: "/workers/clipboards",
			testId: "sidenav-clipboard-link",
			hasPermission: E => !!(0, o.z1)("queues-clipboard")(E)
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: E => (0, g.iY)(E),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: E => (0, g.o_)(E)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: E => (0, g.o_)(E)
		}]
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: E => !!(0, e.RO)(E) || !!(0, e.B)(E),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: E => (0, e.RO)(E)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: E => (0, e.RO)(E)
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: E => !!(0, e.B)(E)
		}, {
			title: "navigation.account.workers.ai.ai-rag",
			url: "/ai/autorag",
			labels: ["beta"],
			hasPermission: E => !!(0, o.z1)("ai-auto-rag")(E)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		testId: "sidenav-stream-link",
		hasPermission: E => (0, g.iY)(E),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: E => (0, g.hv)(E)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: E => (0, g.hv)(E)
		}, {
			title: "navigation.account.stream.video_transformations",
			labels: ["beta"],
			url: "/stream/video-transformations",
			hasPermission: E => (0, g.hv)(E) && (0, s.GU)(E, "stream-video-transformations-beta-enabled")
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			hasPermission: E => (0, g.hv)(E)
		}, {
			title: "navigation.account.stream.plans",
			url: "/stream/plans",
			hasPermission: E => !(0, g.hv)(E)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: E => (0, g.iY)(E),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images"
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: E => (0, g.dL)(E)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: E => (0, g.dL)(E)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: E => (0, g.dL)(E),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link"
		}, {
			title: "navigation.account.images.plans",
			url: "/images/plans",
			testId: "sidenav-plans-link",
			hasPermission: E => !(0, g.IU)(E)
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		iconType: "calls",
		testId: "sidenav-calls-link",
		hasPermission: E => (0, g.iY)(E)
	}, {
		title: "navigation.account.tag_management",
		url: "/tag-management",
		iconType: "zaraz",
		hasPermission: E => (0, g.iY)(E),
		pages: [{
			title: "navigation.account.tag_management.tag_setup",
			url: "/tag-management/zaraz",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.tag_management.consent",
			url: "/tag-management/consent",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.tag_management.history",
			url: "/tag-management/history",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.tag_management.monitoring",
			url: "/tag-management/monitoring",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.tag_management.settings",
			url: "/tag-management/settings",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.tag_management.plans",
			url: "/tag-management/plans",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.tag_management.gmt_fp",
			url: "/tag-management/googletagfirstparty",
			labels: ["beta"],
			hasPermission: E => (0, g.iY)(E)
		}]
	}, {
		title: "navigation.account.event_hub",
		url: "/event-subscriptions",
		iconType: "queues",
		testId: "sidenav-event-hub-link",
		labels: ["beta"],
		hasPermission: E => !!(0, o.z1)("event-hub-ui")(E)
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
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.user_groups",
			url: "/user-groups",
			labels: ["alpha"],
			testId: "account-homepage-user-groups",
			hasPermission: E => (0, g.iY)(E) && !!(0, o.z1)(M.Fq)(E)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: E => (0, i.b)(E) ? (0, g.iY)(E) : (0, e.Yj)(E)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.account.shared_configurations",
			url: "/shared-configurations",
			testId: "shared-config-link",
			labels: ["alpha"],
			hasPermission: E => (0, w.K)(E, "account")
		}, {
			title: "navigation.account.mcn",
			url: "/mcn/integrations",
			labels: E => (0, o.z1)("magic-beta-flags-disabled")(E) ? [] : ["beta"],
			hasPermission: E => !!((0, g.iY)(E) && !!(0, r.$f)(E, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		testId: "sidenav-notifications-link",
		hasPermission: E => (0, g.iY)(E)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: E => (0, g.iY)(E) && !!(0, o.z1)("dx-message-inbox")(E),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		testId: "sidenav-bulk-redirects-link",
		hasPermission: E => (0, g.iY)(E)
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
		hasPermission: E => !!(0, o.z1)("ai-audit")(E)
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: E => (0, g.$n)(E, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: E => !(0, r.yD)(E)
		}, {
			title: "navigation.account.web_analytics",
			url: "/analytics/web/overview",
			navigationType: "global-settings",
			hasPermission: E => {
				const Z = (0, d.nA)(E),
					oe = !!(0, o.z1)("zone-level-rum")(E);
				return (Z == null ? void 0 : Z.status) === "active" && oe && !(0, r.yD)(E)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: E => !(0, r.yD)(E)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: E => !(0, r.yD)(E)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: E => {
				const Z = (0, d.nA)(E);
				return Z ? !!(!(0, r.yD)(E) && !!(0, d.ZB)(E, "origin_reachability_dash", "dash_view") && (0, d.tU)(Z, "enterprise") && !!(0, v.Ek)(E, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: E => {
				const Z = (0, d.nA)(E);
				return Z ? !!(!(0, r.yD)(E) && !!(0, d.ZB)(E, "edge_reachability_dash", "dash_view") && (0, d.tU)(Z, "enterprise") && !!(0, v.Ek)(E, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: E => !(0, r.yD)(E)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: E => (0, C.Xu)(E)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: E => !(0, r.yD)(E) && !!(0, d.ZB)(E, "logs", "instant_log") && !!(0, r.rV)(E, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: E => !!(0, p.V)(E)
		}, {
			title: "navigation.zone.analytics.dashboards",
			url: "/analytics/dashboards",
			navigationType: "global-settings",
			hasPermission: E => (0, B.Vp)(E)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: H.bB,
		hasPermission: E => !(0, r.yD)(E) && (0, U.m7)(E)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: E => (0, g.$n)(E, "dns_records", "dns-record"),
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
			tabs: D.hg,
			hasPermission: E => (0, g.iY)(E) && !(0, r.yD)(E) && (0, g.$n)(E, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			hasPermission: E => (0, _.ig)(E) ? !1 : (0, g.$n)(E, "dns_records", "dns-record") && !!(0, d.ZB)(E, "email", "dmarc_visible")
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
		hasPermission: E => {
			const Z = (0, d.nA)(E);
			if ((0, r.yD)(E) || !(0, g.wB)(E, "zone_settings", "spectrum.app") || !Z) return !1;
			const oe = !!((0, s.l8)(E) || (0, d.DQ)(E)),
				ce = !!(0, d.ZB)(E, "spectrum", "enabled"),
				G = !!(0, d.Ns)(Z);
			return ce || oe || !G
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: g.jq,
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
			hasPermission: E => (0, r.$f)(E, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: E => !!(0, o.z1)("client-certificates")(E) || !!(0, d.ZB)(E, "ssl", "client_certificates")
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
		hasPermission: E => !(0, r.yD)(E) && (0, g.$n)(E, "waf", "firewall.rule") || (0, g.$n)(E, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.overview",
			navigationType: "version",
			url: "/security/overview",
			hasPermission: E => (0, g.$n)(E, "waf", "firewall.rule") && ((0, ae.P8)(E) || !!(0, o.z1)("appsec-overview")(E)),
			guidedTooltipStep: $.t.OVERVIEW
		}, {
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			tabs: q.Wu,
			hasPermission: E => (0, g.$n)(E, "waf", "firewall.rule"),
			guidedTooltipStep: $.t.ANALYTICS
		}, {
			title: "navigation.zone.security.web_assets",
			navigationType: "version",
			url: "/security/web-assets",
			guidedTooltipStep: $.t.WEB_ASSETS,
			hasPermission: E => (0, ae.P8)(E) && ((0, g.$n)(E, "waf", "firewall.rule") || (0, g.$n)(E, "page_shield", "script-monitor"))
		}, {
			title: "navigation.zone.security_rules",
			navigationType: "version",
			guidedTooltipStep: $.t.SECURITY_RULES,
			url: "/security/security-rules",
			hasPermission: E => (0, ae.P8)(E) && (0, g.$n)(E, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: E => !(0, ae.P8)(E) && (0, g.$n)(E, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: x.gn,
			hasPermission: E => !(0, ae.P8)(E) && (0, g.$n)(E, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: T.mt,
			hasPermission: E => !(0, ae.P8)(E) && (0, g.$n)(E, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: E => !(0, ae.P8)(E) && (0, g.$n)(E, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: E => !(0, ae.P8)(E) && (0, r.du)(E, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, g.$n)(E, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			navigationType: "version",
			hasPermission: E => !(0, ae.P8)(E) && (0, j.R0)(E),
			tabs: T.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: E => !(0, ae.P8)(E) && (0, g.$n)(E, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: E => !(0, ae.P8)(E) && (0, g.$n)(E, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/detections",
			guidedTooltipStep: $.t.SETTINGS,
			navigationType: "version",
			hasPermission: E => (0, ae.P8)(E) && (0, g.$n)(E, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: E => !(0, r.yD)(E) && ((0, g.wB)(E, "access", "access.app") || (0, g.wB)(E, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: E => !(0, r.yD)(E) && (0, g.$n)(E, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: k.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: E => !(0, r.yD)(E) && (0, g.$n)(E, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: b
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: E => (0, g.$n)(E, "waf", "firewall.rule") || (0, g.$n)(E, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: E => (0, g.iY)(E)
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
		hasPermission: E => !(0, r.yD)(E) && (0, g.wB)(E, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		navigationType: "version",
		iconType: "filter",
		testId: "zone-navigation-link-rules",
		hasPermission: E => !(0, r.yD)(E) && (0, g.$n)(E, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.overview",
			url: "/rules/overview",
			labels: ["new"],
			navigationType: "version",
			hasPermission: E => !!(0, o.z1)("rules-overview")(E)
		}, {
			title: "navigation.zone.rules.templates",
			url: "/rules/templates",
			labels: ["new"],
			tabs: O.HI,
			navigationType: "version",
			hasPermission: E => !(0, o.z1)("rules-overview")(E) && ((0, g.$n)(E, "waf", "firewall.rule") || (0, g.$n)(E, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: E => !(0, o.z1)("rules-overview")(E) && ((0, g.$n)(E, "waf", "firewall.rule") || (0, g.$n)(E, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["beta"],
			navigationType: "version",
			hasPermission: E => (0, g.$n)(E, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: O.mI,
			hasPermission: E => !(0, o.z1)("rules-overview")(E)
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			tabs: O.KZ,
			hasPermission: E => !(0, o.z1)("rules-overview")(E) && (0, g.$n)(E, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: E => !(0, o.z1)("rules-overview")(E) && (0, g.$n)(E, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/rules/cache-rules",
			navigationType: "version",
			hasPermission: E => !(0, o.z1)("rules-overview")(E) && (0, g.$n)(E, "zone_settings", "setting") && ((0, g.$n)(E, "waf", "firewall.rule") || (0, g.$n)(E, "zone_settings", "page-rule"))
		}, {
			title: "navigation.zone.rules.cloud_connector",
			labels: ["beta"],
			url: "/rules/cloud-connector",
			navigationType: "version",
			hasPermission: E => !!(0, o.z1)("cloud-connector-enabled")(E)
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: E => !(0, o.z1)("rules-overview")(E) && (0, g.$n)(E, "waf", "page-rule", "read") && !!(0, r.rV)(E, "rulesets.response_compression_max_rules")
		}, {
			title: "navigation.account.request_tracer",
			url: "/rules/trace/search",
			labels: ["beta"],
			navigationType: "version",
			additionalMatchUrls: ["/:accountId/:zoneName/rules/trace/results"],
			hasPermission: E => !!(0, o.z1)("rules-overview")(E) && !!(0, N.T)(E)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules/page-rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			tabs: O.od
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: E => !(0, r.yD)(E) && (0, g.$n)(E, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: E => (0, g.$n)(E, "lb", "load-balancer") || (0, g.$n)(E, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: E => !(0, r.yD)(E)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: E => (0, g.iY)(E)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: E => !(0, r.yD)(E)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: E => !(0, r.yD)(E) && !!(0, v.Ek)(E, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: E => !(0, r.yD)(E)
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: E => !(0, r.yD)(E) && (0, g.$n)(E, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: E => !(0, r.yD)(E) && (0, g.$n)(E, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: E => !(0, r.yD)(E) && (0, g.$n)(E, "zone_settings", "setting")
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: E => {
			const Z = (0, e.uF)(E);
			return ((Z == null ? void 0 : Z.roles) || []).includes("Trust and Safety") ? !1 : !(0, r.yD)(E)
		}
	}],
	zeroTrust: [{
		url: () => (0, K.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, K.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("analytics/access"),
			title: "navigation.account.zero_trust.analytics.access"
		}, {
			url: () => (0, K.Uj)("analytics/gateway"),
			title: "navigation.account.zero_trust.analytics.gateway"
		}, {
			url: () => (0, K.Uj)("analytics/overview"),
			title: "navigation.account.zero_trust.analytics.analytics_and_reporting"
		}]
	}, {
		url: () => (0, K.Uj)("risk-score/scoring"),
		title: "navigation.account.zero_trust.risk_score",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("risk-score/scoring"),
			title: "navigation.account.zero_trust.risk_score.user_risk_scoring"
		}, {
			url: () => (0, K.Uj)("risk-score/behaviors"),
			title: "navigation.account.zero_trust.risk_score.risk_behaviors"
		}]
	}, {
		url: () => (0, K.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("gateway/locations"),
			title: "navigation.account.zero_trust.gateway.dns_locations"
		}, {
			url: () => (0, K.Uj)("gateway/policies"),
			title: "navigation.account.zero_trust.gateway.firewall_policies"
		}, {
			url: () => (0, K.Uj)("gateway/proxy-endpoints"),
			title: "navigation.account.zero_trust.gateway.proxy_endpoints"
		}, {
			url: () => (0, K.Uj)("gateway/egress-policies"),
			title: "navigation.account.zero_trust.gateway.egress_policies"
		}, {
			url: () => (0, K.Uj)("gateway/resolver-policies"),
			title: "navigation.account.zero_trust.gateway.resolver_policies"
		}]
	}, {
		url: () => (0, K.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("access/apps"),
			title: "navigation.account.zero_trust.access.applications"
		}, {
			url: () => (0, K.Uj)("access/groups"),
			title: "navigation.account.zero_trust.access.access_groups"
		}, {
			url: () => (0, K.Uj)("access/service-auth"),
			title: "navigation.account.zero_trust.access.service_auth"
		}, {
			url: () => (0, K.Uj)("access/tags"),
			title: "navigation.account.zero_trust.access.tags"
		}]
	}, {
		url: () => (0, K.Uj)("networks/tunnels"),
		title: "navigation.account.zero_trust.networks",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("networks/tunnels"),
			title: "navigation.account.zero_trust.networks.tunnels"
		}, {
			url: () => (0, K.Uj)("networks/routes"),
			title: "navigation.account.zero_trust.networks.routes"
		}]
	}, {
		url: () => (0, K.Uj)("casb/findings"),
		title: "navigation.account.zero_trust.casb",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("casb/findings"),
			title: "navigation.account.zero_trust.casb.findings"
		}, {
			url: () => (0, K.Uj)("casb/integration"),
			title: "navigation.account.zero_trust.casb.integrations"
		}]
	}, {
		url: () => (0, K.Uj)("dlp/profiles"),
		title: "navigation.account.zero_trust.dlp",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("dlp/profiles"),
			title: "navigation.account.zero_trust.dlp.profiles"
		}, {
			url: () => (0, K.Uj)("dlp/dataset"),
			title: "navigation.account.zero_trust.dlp.datasets"
		}]
	}, {
		url: () => (0, K.Uj)("dex/monitoring"),
		title: "navigation.account.zero_trust.dex",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("dex/monitoring"),
			title: "navigation.account.zero_trust.dex.monitoring"
		}, {
			url: () => (0, K.Uj)("dex/tests"),
			title: "navigation.account.zero_trust.dex.tests"
		}]
	}, {
		url: () => (0, K.Uj)("email-security/overview"),
		title: "navigation.account.zero_trust.email_security",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("email-security/overview"),
			title: "navigation.account.zero_trust.email_security.monitoring"
		}, {
			url: () => (0, K.Uj)("email-security/investigation"),
			title: "navigation.account.zero_trust.email_security.investigation"
		}, {
			url: () => (0, K.Uj)("email-security/settings"),
			title: "navigation.account.zero_trust.email_security.settings"
		}, {
			url: () => (0, K.Uj)("email-security/directories"),
			title: "navigation.account.zero_trust.email_security.directories"
		}, {
			url: () => (0, K.Uj)("email-security/phishguard"),
			title: "navigation.account.zero_trust.email_security.phishGuard"
		}]
	}, {
		url: () => (0, K.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("team/devices"),
			title: "navigation.account.zero_trust.my_team.devices"
		}, {
			url: () => (0, K.Uj)("team/users"),
			title: "navigation.account.zero_trust.my_team.users"
		}, {
			url: () => (0, K.Uj)("team/lists"),
			title: "navigation.account.zero_trust.my_team.lists"
		}]
	}, {
		url: () => (0, K.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust",
		pages: [{
			url: () => (0, K.Uj)("logs/admin"),
			title: "navigation.account.zero_trust.logs.admin"
		}, {
			url: () => (0, K.Uj)("logs/access"),
			title: "navigation.account.zero_trust.logs.access"
		}, {
			url: () => (0, K.Uj)("logs/gateway"),
			title: "navigation.account.zero_trust.logs.gateway"
		}, {
			url: () => (0, K.Uj)("logs/logpush"),
			title: "navigation.account.zero_trust.logs.logpush"
		}, {
			url: () => (0, K.Uj)("logs/posture"),
			title: "navigation.account.zero_trust.logs.posture"
		}]
	}, {
		url: () => (0, K.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: f.Gj
}