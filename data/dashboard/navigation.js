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
		hasPermission: function(se) {
			return !!(0, pe.z1)("oauth-access-management")(se)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(se) {
			return !(0, Ee.n3)() && !(0, pe.z1)("oauth-access-management")(se)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(se) {
			return !(0, pe.z1)("oauth-access-management")(se)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(se) {
			return (0, pe.z1)("registrar-account-home-copy-experiment")(se) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(se) {
				return x(se)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(se) {
				return x(se)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(se) {
				return q(se)
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
			hasPermission: function(se) {
				return W(se)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(se) {
				return W(se) && !!(0, N.getAccountFlipperFlag)(se, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(se) {
				return W(se)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(se) {
				return W(se) && !!(0, N.getAccountFlipperFlag)(se, "account_analytics", "carbon_dashboard")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(se) {
			return W(se) && (0, le.dU)(se)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(se) {
			return W(se) && (!!(0, N.getAccountFlipperFlag)(se, "calls", "enabled") || !!(0, N.getAccountFlipperFlag)(se, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(se) {
			return W(se)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(se) {
			return W(se)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(se) {
				return !!(0, N.getAccountFlipperFlag)(se, "workers", "origin_workers") && !!(0, N.getAccountFlipperFlag)(se, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(se) {
				return !!(0, N.getAccountFlipperFlag)(se, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans"
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "edgeworker",
		hasPermission: function(se) {
			return !!(0, pe.z1)("workers-for-platforms")(se) && W(se) && (0, r.hasEnterpriseAccountEntitlement)(se)
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		labels: ["beta"],
		hasPermission: function(se) {
			return W(se)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(se) {
			return W(se) && !!(H(se) || U(se))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets",
			hasPermission: function(se) {
				var Ge = !!B(se) && !!f(se);
				return !!_(se) || Ge
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: function(se) {
				var Ge = !!_(se) || !!B(se) && !!f(se);
				return Ge ? "/rulesets/managed" : "/rulesets"
			},
			hasPermission: function(se) {
				return !!H(se)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(se) {
				return !!U(se)
			}
		}, {
			title: "navigation.account.firewall_rulesets.browse_rulesets",
			url: "/rulesets/custom"
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(se) {
			return W(se)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(se) {
				return b(se)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(se) {
				return b(se)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(se) {
				return b(se)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(se) {
			return W(se) && !!(0, N.getAccountFlipperFlag)(se, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(se) {
				return R(se)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(se) {
				return R(se)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(se) {
				return R(se)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit/waitlist",
			hasPermission: function(se) {
				return R(se)
			}
		}, {
			title: "navigation.account.images.sourcing_kit_dev",
			url: "/images/sourcing-kit/d",
			labels: ["beta"],
			hasPermission: function(se) {
				return K(se)
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(se) {
			return W(se) && (0, be.sL)(se)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(se) {
				return W(se) && (0, be.sL)(se)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(se) {
				return W(se) && (0, be.sL)(se)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(se) {
				return W(se) && (0, be.TT)(se)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(se) {
				return W(se) && (0, be.jD)(se)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(se) {
				return W(se) && (0, be.BU)(se)
			}
		}]
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(se) {
			return W(se)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(se) {
			return W(se) && !!(0, N.getAccountFlipperFlag)(se, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(se) {
			return W(se) && !!(0, N.getAccountFlipperFlag)(se, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(se) {
			return W(se) && !!(0, N.getAccountFlipperFlag)(se, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(se) {
			return W(se)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(se) {
			return W(se)
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
			hasPermission: function(se) {
				return W(se)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(se) {
				return (0, P.b)(se) ? W(se) : (0, N.getPermission)(se)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(se) {
				return W(se)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(se) {
				return W(se)
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
		hasPermission: function(se) {
			return w(se, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(se) {
				var Ge = (0, z.getZone)(se);
				return Ge ? !!(!(0, r.zoneIsDNSOnly)(se) && !!(0, z.getZoneFlipperFlag)(se, "origin_reachability_dash", "dash_view") && (0, z.isPlanAtLeast)(Ge, "enterprise") && !!(0, ne.getZoneGraphQLSettingEnabled)(se, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(se) {
				var Ge = (0, z.getZone)(se);
				return Ge ? !!(!(0, r.zoneIsDNSOnly)(se) && !!(0, z.getZoneFlipperFlag)(se, "edge_reachability_dash", "dash_view") && (0, z.isPlanAtLeast)(Ge, "enterprise") && !!(0, ne.getZoneGraphQLSettingEnabled)(se, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(se) {
				return Object.values((0, oe.H_)(se)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se) && !!(0, z.getZoneFlipperFlag)(se, "logs", "instant_log") && !!(0, r.getZoneEntitlement)(se, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(se) {
			return w(se, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		labels: ["beta"],
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(se) {
			var Ge = (0, z.getZone)(se);
			if ((0, r.zoneIsDNSOnly)(se) || !X(se, "zone_settings", "spectrum.app") || !Ge) return !1;
			var ut = !!((0, ie.userHasEntZones)(se) || (0, z.userHasDelegatedEntZones)(se)),
				ct = !!(0, z.getZoneFlipperFlag)(se, "spectrum", "enabled"),
				mt = !!(0, z.isFree)(Ge);
			return ct || ut || !mt
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "ssl", "ssl.cert")
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
			hasPermission: function(se) {
				return (0, r.hasAccountEntitlement)(se, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(se) {
				return !!(0, pe.z1)("client-certificates")(se) || !!(0, z.getZoneFlipperFlag)(se, "ssl", "client_certificates")
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
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "waf", "firewall.rule")
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
			hasPermission: function(se) {
				return !!(0, N.getAccountFlipperFlag)(se, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(se) {
				return (0, r.hasZoneEntitlement)(se, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			hasPermission: function(se) {
				var Ge = (0, z.getZone)(se);
				return Ge ? !!(0, z.getZoneFlipperFlag)(se, "firewall", "api_shield_tab") && (0, z.isPlanAtLeast)(Ge, "business") : !1
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
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && (X(se, "access", "access.app") || X(se, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "setting")
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
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "setting")
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
			hasPermission: function(se) {
				return W(se)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(se) {
				return !!Y(se)
			}
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && X(se, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			hasPermission: function(se) {
				return (w(se, "waf", "firewall.rule") || w(se, "zone_settings", "page-rule")) && !!(0, z.getZoneFlipperFlag)(se, "page_rules", "config_rules")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules"
		}, {
			title: "account.bulk_redirects.title",
			labels: ["beta", "absolute"],
			url: function(se) {
				var Ge = (0, N.getAccount)(se);
				return "/".concat(Ge == null ? void 0 : Ge.id, "/bulk-redirects")
			},
			hasPermission: function(se) {
				return W(se)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(se) {
				return !!(0, z.getZoneFlipperFlag)(se, "page_rules", "normalization") && w(se, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(se) {
			return w(se, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(se) {
				return W(se)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(se) {
				return W(se)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se) && !!(0, ne.getZoneGraphQLSettingEnabled)(se, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se) && ((0, r.hasZoneEntitlement)(se, "waiting_rooms.allowed") || !!(0, z.getZoneFlipperFlag)(se, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(se) {
			var Ge = [],
				ut = (0, z.getZone)(se);
			return ut && !(0, z.isPlanAtLeast)(ut, "pro") && Ge.push("beta"), Ge
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.consent",
			hasPermission: function(se) {
				var Ge = (0, z.getZone)(se);
				return !!(Ge && !(0, z.isPlanAtLeast)(Ge, "pro"))
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
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "ssl", "ssl.cert")
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
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(se) {
				return !!(0, N.getAccountFlipperFlag)(se, "bots", "paygo")
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
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(se) {
				return W(se)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(se) {
				return w(se, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(se) {
				return !!(0, z.getZoneFlipperFlag)(se, "page_rules", "normalization") && w(se, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(se) {
			return w(se, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(se) {
				return !(0, r.zoneIsDNSOnly)(se)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(se) {
			return !(0, r.zoneIsDNSOnly)(se) && w(se, "zone_settings", "setting")
		}
	}]
}