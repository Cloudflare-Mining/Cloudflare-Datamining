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
		hasPermission: function(i) {
			return !!(0, q.z1)("oauth-access-management")(i)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(i) {
			return !(0, N.n3)() && !(0, q.z1)("oauth-access-management")(i)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(i) {
			return !(0, q.z1)("oauth-access-management")(i)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(i) {
			return (0, q.z1)("registrar-account-home-copy-experiment")(i) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(i) {
				return k(i)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(i) {
				return k(i)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(i) {
				return h(i)
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
			hasPermission: function(i) {
				return p(i)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(i) {
				return p(i) && !!(0, s.getAccountFlipperFlag)(i, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(i) {
				return p(i)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(i) {
				return p(i) && !!(0, s.getAccountFlipperFlag)(i, "account_analytics", "carbon_dashboard")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(i) {
			return p(i) && (0, Q.dU)(i)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(i) {
			return p(i) && (!!(0, s.getAccountFlipperFlag)(i, "calls", "enabled") || !!(0, s.getAccountFlipperFlag)(i, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(i) {
			return p(i)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(i) {
			return p(i)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(i) {
				return !!(0, s.getAccountFlipperFlag)(i, "workers", "origin_workers") && !!(0, s.getAccountFlipperFlag)(i, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(i) {
				return !!(0, s.getAccountFlipperFlag)(i, "workers", "cfsql_bindings")
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
		hasPermission: function(i) {
			return !!(0, q.z1)("workers-for-platforms")(i) && p(i) && ((0, t.hasEnterpriseAccountEntitlement)(i) || !!(0, s.getAccountFlipperFlag)(i, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(i) {
			return p(i)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(i) {
			return p(i) && !!(f(i) || v(i))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets",
			hasPermission: function(i) {
				var D = !!d(i) && !!a(i);
				return !!O(i) || D
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: function(i) {
				var D = !!O(i) || !!d(i) && !!a(i);
				return D ? "/rulesets/managed" : "/rulesets"
			},
			hasPermission: function(i) {
				return !!f(i)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(i) {
				return !!v(i)
			}
		}, {
			title: "navigation.account.firewall_rulesets.browse_rulesets",
			url: "/rulesets/custom"
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(i) {
			return p(i)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(i) {
				return b(i)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(i) {
				return b(i)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(i) {
				return b(i)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(i) {
			return p(i) && !!(0, s.getAccountFlipperFlag)(i, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(i) {
				return _(i)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(i) {
				return _(i)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(i) {
				return _(i)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit/waitlist",
			hasPermission: function(i) {
				return _(i)
			}
		}, {
			title: "navigation.account.images.sourcing_kit_dev",
			url: "/images/sourcing-kit/d",
			labels: ["beta"],
			hasPermission: function(i) {
				return r(i)
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(i) {
			return p(i) && (0, U.sL)(i)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(i) {
				return p(i) && (0, U.sL)(i)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(i) {
				return p(i) && (0, U.sL)(i)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(i) {
				return p(i) && (0, U.TT)(i)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(i) {
				return p(i) && (0, U.jD)(i)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(i) {
				return p(i) && (0, U.BU)(i)
			}
		}]
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(i) {
			return p(i)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(i) {
			return p(i) && !!(0, s.getAccountFlipperFlag)(i, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(i) {
			return p(i) && !!(0, s.getAccountFlipperFlag)(i, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(i) {
			return p(i) && !!(0, s.getAccountFlipperFlag)(i, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(i) {
			return p(i)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(i) {
			return p(i)
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
			hasPermission: function(i) {
				return p(i)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(i) {
				return (0, u.b)(i) ? p(i) : (0, s.getPermission)(i)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(i) {
				return p(i)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(i) {
				return p(i)
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
		hasPermission: function(i) {
			return y(i, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(i) {
				var D = (0, E.getZone)(i);
				return D ? !!(!(0, t.zoneIsDNSOnly)(i) && !!(0, E.getZoneFlipperFlag)(i, "origin_reachability_dash", "dash_view") && (0, E.isPlanAtLeast)(D, "enterprise") && !!(0, g.getZoneGraphQLSettingEnabled)(i, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(i) {
				var D = (0, E.getZone)(i);
				return D ? !!(!(0, t.zoneIsDNSOnly)(i) && !!(0, E.getZoneFlipperFlag)(i, "edge_reachability_dash", "dash_view") && (0, E.isPlanAtLeast)(D, "enterprise") && !!(0, g.getZoneGraphQLSettingEnabled)(i, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(i) {
				return Object.values((0, G.H_)(i)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i) && !!(0, E.getZoneFlipperFlag)(i, "logs", "instant_log") && !!(0, t.getZoneEntitlement)(i, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(i) {
			return y(i, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "dns_records", "dns-record")
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
		hasPermission: function(i) {
			var D = (0, E.getZone)(i);
			if ((0, t.zoneIsDNSOnly)(i) || !P(i, "zone_settings", "spectrum.app") || !D) return !1;
			var c = !!((0, C.userHasEntZones)(i) || (0, E.userHasDelegatedEntZones)(i)),
				z = !!(0, E.getZoneFlipperFlag)(i, "spectrum", "enabled"),
				Z = !!(0, E.isFree)(D);
			return z || c || !Z
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "ssl", "ssl.cert")
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
			hasPermission: function(i) {
				return (0, t.hasAccountEntitlement)(i, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(i) {
				return !!(0, q.z1)("client-certificates")(i) || !!(0, E.getZoneFlipperFlag)(i, "ssl", "client_certificates")
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
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "waf", "firewall.rule")
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
			hasPermission: function(i) {
				return !!(0, s.getAccountFlipperFlag)(i, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(i) {
				return (0, t.hasZoneEntitlement)(i, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			hasPermission: function(i) {
				var D = (0, E.getZone)(i);
				return D ? !!(0, E.getZoneFlipperFlag)(i, "firewall", "api_shield_tab") && (0, E.isPlanAtLeast)(D, "business") : !1
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
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && (P(i, "access", "access.app") || P(i, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "setting")
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
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "setting")
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
			hasPermission: function(i) {
				return (y(i, "waf", "firewall.rule") || y(i, "zone_settings", "page-rule")) && !!(0, E.getZoneFlipperFlag)(i, "page_rules", "cache_rules")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(i) {
				return p(i)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(i) {
				return !!S(i)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && P(i, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			hasPermission: function(i) {
				return (y(i, "waf", "firewall.rule") || y(i, "zone_settings", "page-rule")) && !!(0, E.getZoneFlipperFlag)(i, "page_rules", "config_rules")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules"
		}, {
			title: "account.bulk_redirects.title",
			labels: ["beta", "absolute"],
			url: function(i) {
				var D = (0, s.getAccount)(i);
				return "/".concat(D == null ? void 0 : D.id, "/bulk-redirects")
			},
			hasPermission: function(i) {
				return p(i)
			}
		}, {
			title: "navigation.zone.rules.dynamic_redirects",
			labels: ["beta"],
			url: "/rules/dynamic-redirects",
			hasPermission: function(i) {
				return y(i, "zone_settings", "page-rule") && !!(0, E.getZoneFlipperFlag)(i, "page_rules", "dynamic_redirects")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(i) {
				return !!(0, E.getZoneFlipperFlag)(i, "page_rules", "origin_rules") && y(i, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(i) {
				return !!(0, E.getZoneFlipperFlag)(i, "page_rules", "normalization") && y(i, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(i) {
			return y(i, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(i) {
				return p(i)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(i) {
				return p(i)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i) && !!(0, g.getZoneGraphQLSettingEnabled)(i, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i) && ((0, t.hasZoneEntitlement)(i, "waiting_rooms.allowed") || !!(0, E.getZoneFlipperFlag)(i, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(i) {
			var D = [],
				c = (0, E.getZone)(i);
			return c && !(0, E.isPlanAtLeast)(c, "pro") && D.push("beta"), D
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.consent",
			hasPermission: function(i) {
				var D = (0, E.getZone)(i);
				return !!(D && !(0, E.isPlanAtLeast)(D, "pro"))
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
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "ssl", "ssl.cert")
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
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(i) {
				return !!(0, s.getAccountFlipperFlag)(i, "bots", "paygo")
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
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(i) {
				return p(i)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(i) {
				return y(i, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(i) {
				return !!(0, E.getZoneFlipperFlag)(i, "page_rules", "origin_rules") && y(i, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(i) {
				return !!(0, E.getZoneFlipperFlag)(i, "page_rules", "normalization") && y(i, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(i) {
			return y(i, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(i) {
				return !(0, t.zoneIsDNSOnly)(i)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(i) {
			return !(0, t.zoneIsDNSOnly)(i) && y(i, "zone_settings", "setting")
		}
	}]
}