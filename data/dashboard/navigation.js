const navigation = {
	root: [{
		title: "navigation.root.accounts",
		url: "/",
		iconType: "user-multi"
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: function(P) {
			return !!(0, n.z1)("oauth-access-management")(P)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(P) {
			return !(0, A.n3)() && !(0, n.z1)("oauth-access-management")(P)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(P) {
			return !(0, n.z1)("oauth-access-management")(P)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(P) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(P) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(P) {
				return _(P)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(P) {
				return _(P)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(P) {
				return re(P)
			}
		}]
	}, {
		title: "navigation.common.analytics",
		url: "",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: function(P) {
				return r(P)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(P) {
				return r(P) && !!(0, t.getAccountFlipperFlag)(P, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(P) {
				return r(P)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(P) {
				return r(P) && !!(0, t.getAccountFlipperFlag)(P, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "account.magic.network_monitoring.navigation",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(P) {
				return r(P) && !!(0, t.getAccountFlipperFlag)(P, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(P) {
			return r(P) && (0, y.dU)(P)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(P) {
			return r(P) && (!!(0, t.getAccountFlipperFlag)(P, "calls", "enabled") || !!(0, t.getAccountFlipperFlag)(P, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(P) {
			return r(P)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(P) {
			return r(P)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(P) {
				return !!(0, t.getAccountFlipperFlag)(P, "workers", "origin_workers") && !!(0, t.getAccountFlipperFlag)(P, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(P) {
				return !!(0, t.getAccountFlipperFlag)(P, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans"
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(P) {
			return !!(0, n.z1)("workers-for-platforms")(P) && r(P) && ((0, p.hasEnterpriseAccountEntitlement)(P) || !!(0, t.getAccountFlipperFlag)(P, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(P) {
			return r(P)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(P) {
			return r(P) && !!(W(P) || j(P))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets/ddos",
			hasPermission: function(P) {
				var G = !!Q(P) && !!l(P);
				return !!N(P) || G
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: "/rulesets/waf",
			hasPermission: function(P) {
				return !!W(P)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(P) {
				return !!j(P)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(P) {
			return r(P)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(P) {
				return g(P)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(P) {
				return g(P)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(P) {
				return g(P)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(P) {
			return r(P) && !!(0, t.getAccountFlipperFlag)(P, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(P) {
				return a(P)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(P) {
				return a(P)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(P) {
				return a(P)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			hasPermission: function(P) {
				return a(P)
			},
			labels: ["beta"]
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(P) {
			return r(P) && (0, M.sL)(P)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(P) {
				return r(P) && (0, M.sL)(P)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(P) {
				return r(P) && (0, M.sL)(P)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(P) {
				return r(P) && (0, M.TT)(P)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(P) {
				return r(P) && (0, M.jD)(P)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(P) {
				return r(P) && (0, M.BU)(P)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/security-center/cloudforce-one",
			hasPermission: function(P) {
				return r(P) && (0, M.sK)(P)
			}
		}]
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(P) {
			return r(P) && !!(0, n.z1)("managed-challenge-ui")(P)
		}
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(P) {
			return r(P)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(P) {
			return r(P) && !!(0, t.getAccountFlipperFlag)(P, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(P) {
			return r(P) && !!(0, t.getAccountFlipperFlag)(P, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(P) {
			return r(P) && !!(0, t.getAccountFlipperFlag)(P, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(P) {
			return r(P)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(P) {
			return r(P)
		}
	}, {
		title: "navigation.account.manage_account",
		url: "",
		iconType: "gear",
		labels: ["border-top"],
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: function(P) {
				return r(P)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(P) {
				return (0, f.b)(P) ? r(P) : (0, t.getPermission)(P)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(P) {
				return r(P)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(P) {
				return r(P)
			}
		}]
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview"
	}, {
		title: "navigation.common.analytics",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		hasPermission: function(P) {
			return C(P, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(P) {
				var G = (0, s.getZone)(P);
				return G ? !!(!(0, p.zoneIsDNSOnly)(P) && !!(0, s.getZoneFlipperFlag)(P, "origin_reachability_dash", "dash_view") && (0, s.isPlanAtLeast)(G, "enterprise") && !!(0, o.getZoneGraphQLSettingEnabled)(P, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(P) {
				var G = (0, s.getZone)(P);
				return G ? !!(!(0, p.zoneIsDNSOnly)(P) && !!(0, s.getZoneFlipperFlag)(P, "edge_reachability_dash", "dash_view") && (0, s.isPlanAtLeast)(G, "enterprise") && !!(0, o.getZoneGraphQLSettingEnabled)(P, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(P) {
				return Object.values((0, L.H_)(P)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P) && !!(0, s.getZoneFlipperFlag)(P, "logs", "instant_log") && !!(0, p.getZoneEntitlement)(P, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(P) {
			return C(P, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			url: "/email/routing"
		}, {
			title: "navigation.zone.email.security",
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(P) {
			var G = (0, s.getZone)(P);
			if ((0, p.zoneIsDNSOnly)(P) || !S(P, "zone_settings", "spectrum.app") || !G) return !1;
			var x = !!((0, u.userHasEntZones)(P) || (0, s.userHasDelegatedEntZones)(P)),
				D = !!(0, s.getZoneFlipperFlag)(P, "spectrum", "enabled"),
				k = !!(0, s.isFree)(G);
			return D || x || !k
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			hasPermission: function(P) {
				return (0, p.hasAccountEntitlement)(P, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(P) {
				return !!(0, n.z1)("client-certificates")(P) || !!(0, s.getZoneFlipperFlag)(P, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/security"
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.page_shield",
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(P) {
				return !!(0, t.getAccountFlipperFlag)(P, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(P) {
				return (0, p.hasZoneEntitlement)(P, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			hasPermission: function(P) {
				var G = (0, s.getZone)(P);
				return G ? !!(0, s.getZoneFlipperFlag)(P, "firewall", "api_shield_tab") && (0, s.isPlanAtLeast)(G, "business") : !1
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && (S(P, "access", "access.app") || S(P, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed"
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}, {
			title: "navigation.zone.speed.browser_insights",
			url: "/speed/browser-insights"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			labels: ["beta"],
			hasPermission: function(P) {
				return (C(P, "waf", "firewall.rule") || C(P, "zone_settings", "page-rule")) && !!(0, s.getZoneFlipperFlag)(P, "page_rules", "cache_rules")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(P) {
				return r(P)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(P) {
				return !!oe(P)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && S(P, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			hasPermission: function(P) {
				return (C(P, "waf", "firewall.rule") || C(P, "zone_settings", "page-rule")) && !!(0, s.getZoneFlipperFlag)(P, "page_rules", "config_rules")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules"
		}, {
			title: "account.bulk_redirects.title",
			labels: ["beta", "absolute"],
			url: function(P) {
				var G = (0, t.getAccount)(P);
				return "/".concat(G == null ? void 0 : G.id, "/bulk-redirects")
			},
			hasPermission: function(P) {
				return r(P)
			}
		}, {
			title: "navigation.zone.rules.dynamic_redirects",
			labels: ["beta"],
			url: "/rules/dynamic-redirects",
			hasPermission: function(P) {
				return C(P, "zone_settings", "page-rule") && !!(0, s.getZoneFlipperFlag)(P, "page_rules", "dynamic_redirects")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(P) {
				return !!(0, s.getZoneFlipperFlag)(P, "page_rules", "origin_rules") && C(P, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(P) {
				return !!(0, s.getZoneFlipperFlag)(P, "page_rules", "normalization") && C(P, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(P) {
			return C(P, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(P) {
				return r(P)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(P) {
				return r(P)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P) && !!(0, o.getZoneGraphQLSettingEnabled)(P, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P) && ((0, p.hasZoneEntitlement)(P, "waiting_rooms.allowed") || !!(0, s.getZoneFlipperFlag)(P, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(P) {
			var G = [],
				x = (0, s.getZone)(P);
			return x && !(0, s.isPlanAtLeast)(x, "pro") && G.push("beta"), G
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.consent",
			hasPermission: function(P) {
				var G = (0, s.getZone)(P);
				return !!(G && !(0, s.isPlanAtLeast)(G, "pro"))
			},
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.variables",
			url: "/zaraz/variables"
		}, {
			title: "navigation.zone.zaraz.settings",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security/waf",
		iconType: "shield",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(P) {
				return !!(0, t.getAccountFlipperFlag)(P, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.speed",
		url: "/speed/optimization",
		iconType: "bolt",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(P) {
				return r(P)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(P) {
				return C(P, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(P) {
				return !!(0, s.getZoneFlipperFlag)(P, "page_rules", "origin_rules") && C(P, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(P) {
				return !!(0, s.getZoneFlipperFlag)(P, "page_rules", "normalization") && C(P, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(P) {
			return C(P, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(P) {
				return !(0, p.zoneIsDNSOnly)(P)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(P) {
			return !(0, p.zoneIsDNSOnly)(P) && C(P, "zone_settings", "setting")
		}
	}]
}