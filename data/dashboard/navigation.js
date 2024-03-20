const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "cloud-multi",
		hasPermission: z => !!(0, n.z1)("control-plane-large-orgs")(z)
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
		hasPermission: z => (0, n.z1)(y.Mr)(z) && (0, Q.z7)(z) && !!(0, Q.z$)(z).length
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
		hasPermission: z => !!(0, n.z1)("oauth-access-management")(z)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: z => !(0, s.n3)() && !(0, n.z1)("oauth-access-management")(z)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: z => !(0, n.z1)("oauth-access-management")(z)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		labels: ["beta"],
		hasPermission: z => !!(0, n.z1)("dash-account-home-v2")(z)
	}, {
		title: "navigation.root.websites",
		url: z => (0, n.z1)("dash-account-home-v2")(z) ? "/websites" : "/",
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
			url: "/domains/transfer",
			hasPermission: z => (0, a.YV)(z)
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register"
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: z => (0, a.gw)(z)
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: z => (0, a.iY)(z)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: z => (0, a.iY)(z) && (0, x.Ob)(z)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: z => (0, a.iY)(z)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: z => (0, a.iY)(z) && (0, I.S6)(z) && !!(0, n.z1)("account-logpush")(z)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: z => (0, a.iY)(z) && !!(0, r.Le)(z, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: z => (0, a.iY)(z) && (!!(0, r.Le)(z, "account_analytics", "magic_network_monitoring") || !!(0, d.$f)(z, "rulesets.magic_transit_allowed"))
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: z => (0, a.iY)(z) && (0, c.xU)(z),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: z => (0, a.iY)(z) && (0, c.sL)(z)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: z => (0, a.iY)(z) && (0, c.B_)(z)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: z => (0, a.iY)(z) && (0, c.B_)(z)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: z => (0, a.iY)(z) && (0, c.sL)(z)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: z => (0, a.iY)(z) && (0, c.TT)(z)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: z => (0, a.iY)(z) && (0, c.jD)(z)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: z => (0, a.iY)(z) && (0, c.BU)(z)
		}, {
			title: "navigation.account.security_center.cfone_priorities",
			url: "/cloudforce-one/priorities",
			hasPermission: z => (0, a.iY)(z) && (0, c.fs)(z)
		}, {
			title: "navigation.account.security_center.cfone_reports",
			url: "/cloudforce-one/reports",
			hasPermission: z => (0, a.iY)(z) && (0, c.Bc)(z)
		}, {
			title: "navigation.account.security_center.cfone_requests",
			url: "/cloudforce-one/requests",
			hasPermission: z => (0, a.iY)(z) && (0, c.gA)(z)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "trace-link",
		labels: ["beta"],
		hasPermission: V.T
	}, {
		title: "navigation.account.group_title.application_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		hasPermission: z => !!(0, a.AB)(z),
		tabs: O.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: z => (0, d.Ci)(z)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: z => (0, a.iY)(z) && !!(0, n.z1)("managed-challenge-ui")(z)
	}, {
		title: "navigation.account.group_title.network_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		hasPermission: z => !!((0, a.iY)(z) && (0, n.z1)("magic-interconnects")(z) && (!!(0, r.Le)(z, "magic_wan", "mw_home") || !!(0, r.Le)(z, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: z => (0, a.iY)(z) && !!(0, r.Le)(z, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: D.Lx.concat(D.SF, D.Jg)
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
		hasPermission: z => !!(0, a.zJ)(z),
		tabs: O.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: z => {
			const J = !!(0, a.Wq)(z) && !!(0, a.fO)(z);
			return !!(0, a.Tk)(z) || J
		},
		tabs: O.Dn
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: z => (0, a.iY)(z) && !!(0, r.Le)(z, "addressing", "ip_prefixes")
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: z => (0, a.iY)(z) && !!(0, n.z1)("proxy-ips-ui")(z)
		}],
		hasPermission: z => (0, a.iY)(z) && !!(0, r.Le)(z, "addressing", "ip_prefixes")
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: () => {
			const z = (0, o.e1)(),
				J = "https://one.dash.cloudflare.com";
			return z ? `${J}/${z}/` : J
		},
		iconType: "cloudflare-zero-trust",
		labels: z => (0, n.z1)("zt-sidebar")(z) ? [] : ["external-link"],
		hasPermission: z => (0, a.iY)(z)
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		hasPermission: z => (0, a.iY)(z) && !!(0, r.Le)(z, "magic_wan", "mw_home") || !!(0, r.Le)(z, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			labels: ["beta"],
			hasPermission: z => (0, a.iY)(z) && !!(0, r.Le)(z, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: D.SF.concat(D.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		hasPermission: z => (0, a.iY)(z),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		pages: [{
			title: "navigation.common.overview",
			url: "/area1"
		}, {
			title: "navigation.account.area_one.retro_scan",
			url: "/area1/retro-scan",
			hasPermission: z => (0, n.z1)("area-1-retro-scan")(z) === !0
		}, {
			title: "navigation.account.area_one.dashboard",
			url: "https://horizon.area1security.com/api/cf-auth/login",
			labels: ["external-link"]
		}]
	}, {
		title: "navigation.account.mcn",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.mcn",
		url: "/mcn/overview",
		labels: ["beta"],
		additionalMatchUrls: ["/mcn", "/pages"],
		iconType: "trace",
		hasPermission: z => !!((0, a.iY)(z) && (0, n.z1)("magic-cloud-networking")(z)),
		testId: "sidenav-mcn-pages-link",
		pages: [{
			title: "navigation.account.mcn.overview",
			url: "/mcn/overview"
		}, {
			title: "navigation.account.mcn.providers",
			url: "/mcn/providers"
		}, {
			title: "navigation.account.mcn.resources",
			url: "/mcn/resources"
		}]
	}, {
		title: "navigation.account.group_title.developer_platform",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		additionalMatchUrls: ["/workers", "/pages"],
		iconType: "workers-pages",
		hasPermission: z => (0, a.iY)(z),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.common.overview",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: z => !!(0, n.z1)("durable-objects-ui")(z)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: z => !!(0, n.z1)("queues-ui")(z),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["beta"]
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: z => !!(0, n.z1)("constellation-ui")(z) && !(0, r.RO)(z)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			labels: ["beta"],
			hasPermission: z => !!(0, n.z1)("hyperdrive-ui")(z)
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: z => {
				const J = (0, v.tJ)(z);
				return !(0, i.ky)(J, [A.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: z => !!(0, n.z1)("workers-for-platforms")(z) && (0, a.iY)(z) && ((0, d.p1)(z) || !!(0, r.Le)(z, "workers", "workers_for_saas"))
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai",
		iconType: "workers-constellation",
		labels: ["beta"],
		hasPermission: z => !!(0, r.RO)(z) || !!(0, r.B)(z),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: z => (0, r.RO)(z)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			testId: "sidenav-ai-vectorize-link",
			hasPermission: z => (0, r.RO)(z) && !!(0, d.BF)(z, "vector_db.enabled")
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway/general",
			testId: "sidenav-ai-gateway-link",
			hasPermission: z => !!(0, r.B)(z)
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: z => (0, a.iY)(z),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: z => (0, a.o_)(z)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: z => (0, a.o_)(z)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: z => (0, a.iY)(z),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: z => (0, a.hv)(z)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: z => (0, a.hv)(z)
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: z => (0, a.hv)(z)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: z => (0, a.iY)(z),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images/images",
			hasPermission: z => (0, a.IU)(z)
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: z => (0, a.IU)(z)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: z => (0, a.IU)(z)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: z => (0, a.IU)(z),
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
		hasPermission: z => (0, a.iY)(z) && (!!(0, r.Le)(z, "calls", "visible") || !!(0, r.Le)(z, "Calls", "visible")),
		pages: [{
			title: "navigation.account.calls.applications",
			url: "/calls"
		}, {
			title: "navigation.common.analytics",
			url: "/calls/analytics"
		}]
	}, {
		title: "navigation.account.group_title.account_management",
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
			hasPermission: z => (0, a.iY)(z)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: z => (0, a.iY)(z) && !!(0, n.z1)("account-owned-api-tokens")(z)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: z => (0, b.b)(z) ? (0, a.iY)(z) : (0, r.Yj)(z)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: z => (0, a.iY)(z)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: z => (0, a.iY)(z)
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: z => (0, a.iY)(z)
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		hasPermission: z => (0, a.iY)(z)
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
		navigationType: "both",
		hasPermission: z => (0, a.$n)(z, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "both",
			hasPermission: z => !(0, d.yD)(z)
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: z => !(0, d.yD)(z)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: z => !(0, d.yD)(z)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: z => {
				const J = (0, l.nA)(z);
				return J ? !!(!(0, d.yD)(z) && !!(0, l.ZB)(z, "origin_reachability_dash", "dash_view") && (0, l.tU)(J, "enterprise") && !!(0, g.Ek)(z, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: z => {
				const J = (0, l.nA)(z);
				return J ? !!(!(0, d.yD)(z) && !!(0, l.ZB)(z, "edge_reachability_dash", "dash_view") && (0, l.tU)(J, "enterprise") && !!(0, g.Ek)(z, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: z => !(0, d.yD)(z)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: z => (0, I.Xu)(z)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: z => !(0, d.yD)(z) && !!(0, l.ZB)(z, "logs", "instant_log") && !!(0, d.rV)(z, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: z => !!(0, G.V)(z)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "both",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: j.bB,
		hasPermission: z => !(0, d.yD)(z) && (0, E.m7)(z)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: z => (0, a.$n)(z, "dns_records", "dns-record"),
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
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
			tabs: C.hg,
			hasPermission: z => (0, a.iY)(z) && !(0, d.yD)(z) && (0, a.$n)(z, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: z => (0, m.ig)(z) ? !1 : (0, a.$n)(z, "dns_records", "dns-record") && !!(0, l.ZB)(z, "email", "dmarc_visible")
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
		hasPermission: z => {
			const J = (0, l.nA)(z);
			if ((0, d.yD)(z) || !(0, a.wB)(z, "zone_settings", "spectrum.app") || !J) return !1;
			const se = !!((0, _.l8)(z) || (0, l.DQ)(z)),
				$ = !!(0, l.ZB)(z, "spectrum", "enabled"),
				pe = !!(0, l.Ns)(J);
			return $ || se || !pe
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "ssl", "ssl.cert"),
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
			hasPermission: z => (0, d.$f)(z, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: z => !!(0, n.z1)("client-certificates")(z) || !!(0, l.ZB)(z, "ssl", "client_certificates")
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
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "waf", "firewall.rule") || (0, a.$n)(z, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			hasPermission: z => (0, u.B_)(z) && (0, a.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: h.gn,
			hasPermission: z => (0, a.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: h.mt,
			hasPermission: z => (0, a.$n)(z, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: z => (0, d.du)(z, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, a.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "version",
			hasPermission: z => {
				const J = (0, l.nA)(z);
				return J ? !!(0, l.ZB)(z, "firewall", "api_shield_tab") && (0, l.tU)(J, "business") && (0, a.$n)(z, "waf", "firewall.rule") : !1
			},
			tabs: h.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: z => !(0, d.yD)(z) && ((0, a.wB)(z, "access", "access.app") || (0, a.wB)(z, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "zone_settings", "setting"),
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
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: Z
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "waf", "firewall.rule") || (0, a.$n)(z, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: z => (0, a.iY)(z)
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
		hasPermission: z => !(0, d.yD)(z) && (0, a.wB)(z, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules/configuration-rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "waf", "firewall.rule") || (0, a.$n)(z, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["alpha"],
			navigationType: "version",
			hasPermission: z => !!(0, B.GM)(z) && (0, a.$n)(z, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: T.m
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "waf", "page-rule", "read") && !!(0, d.rV)(z, "rulesets.response_compression_max_rules") && !!(0, n.z1)("compression-rules")(z)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: z => (0, a.$n)(z, "waf", "page-rule", "read")
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: z => (0, a.$n)(z, "lb", "load-balancer") || (0, a.$n)(z, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: z => !(0, d.yD)(z)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: z => (0, a.iY)(z)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: z => (0, a.iY)(z)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: z => !(0, d.yD)(z)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: z => !(0, d.yD)(z) && !!(0, g.Ek)(z, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: z => !(0, d.yD)(z) && ((0, d.du)(z, "waiting_rooms.allowed") || !!(0, l.ZB)(z, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "zone_settings", "setting")
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: z => [],
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: z => !(0, d.yD)(z) && (0, a.$n)(z, "zaraz", "zaraz"),
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
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: z => {
			const J = (0, r.uF)(z);
			return ((J == null ? void 0 : J.roles) || []).includes("Trust and Safety") ? !1 : !(0, d.yD)(z)
		}
	}],
	zeroTrust: [{
		url: () => (0, x.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, x.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: q.G
}