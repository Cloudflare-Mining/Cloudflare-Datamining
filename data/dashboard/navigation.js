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
		hasPermission: function(n) {
			return !!(0, F.z1)("oauth-access-management")(n)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(n) {
			return !(0, c.n3)() && !(0, F.z1)("oauth-access-management")(n)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(n) {
			return !(0, F.z1)("oauth-access-management")(n)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(n) {
			return (0, F.z1)("registrar-account-home-copy-experiment")(n) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		labels: ["new"],
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(n) {
				return C(n)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(n) {
				return C(n)
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
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(n) {
				return te(n) && !!(0, g.getAccountFlipperFlag)(n, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(n) {
				return te(n) && !!(0, g.getAccountFlipperFlag)(n, "account_analytics", "carbon_dashboard")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(n) {
			return te(n) && (0, B.dU)(n)
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(n) {
			return te(n)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(n) {
			return te(n)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(n) {
				return !!(0, g.getAccountFlipperFlag)(n, "workers", "origin_workers") && !!(0, g.getAccountFlipperFlag)(n, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans"
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		labels: ["beta"],
		hasPermission: function(n) {
			return te(n)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(n) {
			return te(n) && !!(Ce(n) || ne(n))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets",
			hasPermission: function(n) {
				var X = !!Te(n) && !!De(n);
				return !!se(n) || X
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: function(n) {
				var X = !!se(n) || !!Te(n) && !!De(n);
				return X ? "/rulesets/managed" : "/rulesets"
			},
			hasPermission: function(n) {
				return !!Ce(n)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(n) {
				return !!ne(n)
			}
		}, {
			title: "navigation.account.firewall_rulesets.browse_rulesets",
			url: "/rulesets/custom"
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(n) {
			return te(n)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(n) {
				return Y(n)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(n) {
				return Y(n)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(n) {
				return Y(n)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(n) {
			return te(n) && !!(0, g.getAccountFlipperFlag)(n, "cloudflare_images", "early_release_access")
		}
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(n) {
			return te(n) && (0, l.sL)(n)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(n) {
				return te(n) && (0, l.sL)(n)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(n) {
				return te(n) && (0, l.sL)(n)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(n) {
				return te(n) && (0, l.TT)(n)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(n) {
				return te(n) && (0, l.jD)(n)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(n) {
				return te(n) && (0, l.BU)(n)
			}
		}]
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(n) {
			return te(n)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(n) {
			return te(n) && !!(0, g.getAccountFlipperFlag)(n, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(n) {
			return te(n) && !!(0, g.getAccountFlipperFlag)(n, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(n) {
			return te(n) && !!(0, g.getAccountFlipperFlag)(n, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(n) {
			return te(n)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(n) {
			return te(n)
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
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(n) {
				return (0, ce.b)(n) ? te(n) : (0, g.getPermission)(n)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(n) {
				return te(n)
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
		hasPermission: function(n) {
			return pe(n, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(n) {
				var X = (0, p.getZone)(n);
				return X ? !!(!(0, _.zoneIsDNSOnly)(n) && !!(0, p.getZoneFlipperFlag)(n, "origin_reachability_dash", "dash_view") && (0, p.isPlanAtLeast)(X, "enterprise") && !!(0, Ie.getZoneGraphQLSettingEnabled)(n, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(n) {
				var X = (0, p.getZone)(n);
				return X ? !!(!(0, _.zoneIsDNSOnly)(n) && !!(0, p.getZoneFlipperFlag)(n, "edge_reachability_dash", "dash_view") && (0, p.isPlanAtLeast)(X, "enterprise") && !!(0, Ie.getZoneGraphQLSettingEnabled)(n, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(n) {
				return Object.values((0, q.H_)(n)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n) && !!(0, p.getZoneFlipperFlag)(n, "logs", "instant_log") && !!(0, _.getZoneEntitlement)(n, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(n) {
			return pe(n, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		labels: ["beta"],
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(n) {
			var X = (0, p.getZone)(n);
			if ((0, _.zoneIsDNSOnly)(n) || !xe(n, "zone_settings", "spectrum.app") || !X) return !1;
			var Se = !!((0, Be.userHasEntZones)(n) || (0, p.userHasDelegatedEntZones)(n)),
				Re = !!(0, p.getZoneFlipperFlag)(n, "spectrum", "enabled"),
				He = !!(0, p.isFree)(X);
			return Re || Se || !He
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "ssl", "ssl.cert")
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
			hasPermission: function(n) {
				return (0, _.hasAccountEntitlement)(n, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(n) {
				return !!(0, F.z1)("client-certificates")(n) || !!(0, p.getZoneFlipperFlag)(n, "ssl", "client_certificates")
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
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/security"
		}, {
			title: "navigation.zone.firewall.waf",
			url: "/security/waf",
			labels: ["new"]
		}, {
			title: "navigation.zone.firewall.managed_rules",
			url: "/firewall/managed-rules",
			labels: ["moved"]
		}, {
			title: "navigation.zone.firewall.custom_rules",
			url: "/firewall/custom-rules",
			labels: ["moved"],
			hasPermission: function(n) {
				return (0, _.hasZoneEntitlement)(n, "rulesets.firewall_custom_phase_allowed") && !!(0, E.$E)(n)
			}
		}, {
			title: "navigation.zone.firewall.firewall_rules",
			url: "/firewall/firewall-rules",
			labels: ["moved"]
		}, {
			title: "navigation.zone.firewall.page_shield",
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.firewall.bots",
			url: "/security/bots",
			hasPermission: function(n) {
				return !!(0, g.getAccountFlipperFlag)(n, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.firewall.data",
			url: "/security/data",
			hasPermission: function(n) {
				return (0, _.hasZoneEntitlement)(n, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.firewall.api_shield",
			url: "/security/api-shield",
			hasPermission: function(n) {
				var X = (0, p.getZone)(n);
				return X ? !!(0, p.getZoneFlipperFlag)(n, "firewall", "api_shield_tab") && (0, p.isPlanAtLeast)(X, "business") : !1
			}
		}, {
			title: "navigation.zone.firewall.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.firewall.tools",
			url: "/firewall/tools",
			labels: ["moved"],
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.zone.firewall.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && (xe(n, "access", "access.app") || xe(n, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "setting")
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
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(n) {
				return !!ze(n)
			}
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && xe(n, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules"
		}, {
			title: "account.bulk_redirects.title",
			labels: ["beta", "absolute"],
			url: function(n) {
				var X = (0, g.getAccount)(n);
				return "/".concat(X == null ? void 0 : X.id, "/bulk-redirects")
			},
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(n) {
				return !!(0, p.getZoneFlipperFlag)(n, "page_rules", "normalization") && pe(n, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(n) {
			return pe(n, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n) && !!(0, Ie.getZoneGraphQLSettingEnabled)(n, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n) && ((0, _.hasZoneEntitlement)(n, "waiting_rooms.allowed") || !!(0, p.getZoneFlipperFlag)(n, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(n) {
			var X = [],
				Se = (0, p.getZone)(n);
			return Se && !(0, p.isPlanAtLeast)(Se, "pro") && X.push("beta"), X
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zaraz", "zaraz.read")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.settings",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}]
	}, {
		title: "navigation.zone.firewall",
		url: "/firewall/managed-rules",
		iconType: "shield",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "waf", "firewall.rule")
		},
		pages: [{
			title: function(n) {
				return (0, L.iu)(n) ? "navigation.zone.firewall.waf" : "navigation.zone.firewall.managed_rules"
			},
			url: "/firewall/managed-rules"
		}, {
			title: "navigation.zone.firewall.firewall_rules",
			url: "/firewall/firewall-rules"
		}, {
			title: "navigation.zone.firewall.bots",
			url: "/firewall/bots",
			hasPermission: function(n) {
				return !!(0, g.getAccountFlipperFlag)(n, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.firewall.ddos",
			url: "/firewall/ddos"
		}, {
			title: "navigation.zone.firewall.tools",
			url: "/firewall/tools",
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.zone.firewall.settings",
			url: "/firewall/settings"
		}]
	}, {
		title: "navigation.zone.speed",
		url: "/speed/optimization",
		iconType: "bolt",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(n) {
				return te(n)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(n) {
				return pe(n, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(n) {
				return !!(0, p.getZoneFlipperFlag)(n, "page_rules", "normalization") && pe(n, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(n) {
			return pe(n, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(n) {
				return !(0, _.zoneIsDNSOnly)(n)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(n) {
			return !(0, _.zoneIsDNSOnly)(n) && pe(n, "zone_settings", "setting")
		}
	}]
}