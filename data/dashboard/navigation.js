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
		hasPermission: function(v) {
			return !!(0, n.z1)("oauth-access-management")(v)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(v) {
			return !(0, c.n3)() && !(0, n.z1)("oauth-access-management")(v)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(v) {
			return !(0, n.z1)("oauth-access-management")(v)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(v) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(v) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(v) {
				return j(v)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(v) {
				return j(v)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(v) {
				return k(v)
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
			hasPermission: function(v) {
				return d(v)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(v) {
				return d(v) && !!(0, t.getAccountFlipperFlag)(v, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(v) {
				return d(v)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(v) {
				return d(v) && !!(0, t.getAccountFlipperFlag)(v, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "account.magic.network_monitoring.navigation",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(v) {
				return d(v) && !!(0, t.getAccountFlipperFlag)(v, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(v) {
			return d(v) && (0, S.dU)(v)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(v) {
			return d(v) && (!!(0, t.getAccountFlipperFlag)(v, "calls", "enabled") || !!(0, t.getAccountFlipperFlag)(v, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(v) {
			return d(v)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(v) {
			return d(v)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(v) {
				return !!(0, t.getAccountFlipperFlag)(v, "workers", "origin_workers") && !!(0, t.getAccountFlipperFlag)(v, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(v) {
				return !!(0, t.getAccountFlipperFlag)(v, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(v) {
				var Y = (0, B.getSubscriptions)(v);
				return !(0, K.ky)(Y, [J.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(v) {
			return !!(0, n.z1)("workers-for-platforms")(v) && d(v) && ((0, M.hasEnterpriseAccountEntitlement)(v) || !!(0, t.getAccountFlipperFlag)(v, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(v) {
			return d(v)
		}
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(v) {
			return d(v)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(v) {
				return p(v)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(v) {
				return p(v)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(v) {
				return p(v)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(v) {
			return d(v) && !!(0, t.getAccountFlipperFlag)(v, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(v) {
				return u(v)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(v) {
				return u(v)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(v) {
				return u(v)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			hasPermission: function(v) {
				return u(v)
			},
			labels: ["beta"]
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(v) {
			return d(v) && (0, h.xU)(v)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(v) {
				return d(v) && (0, h.sL)(v)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(v) {
				return d(v) && (0, h.sL)(v)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(v) {
				return d(v) && (0, h.TT)(v)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(v) {
				return d(v) && (0, h.jD)(v)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(v) {
				return d(v) && (0, h.BU)(v)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/security-center/cloudforce-one",
			hasPermission: function(v) {
				return d(v) && (0, h.sK)(v)
			}
		}]
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/application-security",
		iconType: "cloudflare-security-application",
		hasPermission: function(v) {
			return d(v) && !!se(v)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: "/application-security/waf",
			hasPermission: function(v) {
				return !!se(v)
			}
		}]
	}, {
		title: "navigation.account.network_security",
		url: "/network-security",
		iconType: "cloudflare-security-network",
		hasPermission: function(v) {
			return d(v) && !!_(v)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/network-security/ddos",
			hasPermission: function(v) {
				var Y = !!U(v) && !!F(v);
				return !!f(v) || Y
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/network-security/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(v) {
				return !!_(v)
			}
		}]
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(v) {
			return d(v) && !!(0, n.z1)("managed-challenge-ui")(v)
		}
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(v) {
			return d(v)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(v) {
			return d(v) && !!(0, t.getAccountFlipperFlag)(v, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(v) {
			return d(v) && !!(0, t.getAccountFlipperFlag)(v, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(v) {
			return d(v) && !!(0, t.getAccountFlipperFlag)(v, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(v) {
			return d(v)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(v) {
			return d(v)
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
			hasPermission: function(v) {
				return d(v)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(v) {
				return (0, I.b)(v) ? d(v) : (0, t.getPermission)(v)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(v) {
				return d(v)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(v) {
				return d(v)
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
		hasPermission: function(v) {
			return b(v, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(v) {
				var Y = (0, s.getZone)(v);
				return Y ? !!(!(0, M.zoneIsDNSOnly)(v) && !!(0, s.getZoneFlipperFlag)(v, "origin_reachability_dash", "dash_view") && (0, s.isPlanAtLeast)(Y, "enterprise") && !!(0, i.getZoneGraphQLSettingEnabled)(v, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(v) {
				var Y = (0, s.getZone)(v);
				return Y ? !!(!(0, M.zoneIsDNSOnly)(v) && !!(0, s.getZoneFlipperFlag)(v, "edge_reachability_dash", "dash_view") && (0, s.isPlanAtLeast)(Y, "enterprise") && !!(0, i.getZoneGraphQLSettingEnabled)(v, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(v) {
				return Object.values((0, N.H_)(v)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v) && !!(0, s.getZoneFlipperFlag)(v, "logs", "instant_log") && !!(0, M.getZoneEntitlement)(v, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(v) {
			return b(v, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "dns_records", "dns-record")
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
		hasPermission: function(v) {
			var Y = (0, s.getZone)(v);
			if ((0, M.zoneIsDNSOnly)(v) || !z(v, "zone_settings", "spectrum.app") || !Y) return !1;
			var H = !!((0, l.userHasEntZones)(v) || (0, s.userHasDelegatedEntZones)(v)),
				q = !!(0, M.getAccountEntitlement)(v, "proxy_anything.enabled"),
				ee = !!(0, s.isFree)(Y);
			return q || H || !ee
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "ssl", "ssl.cert")
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
			hasPermission: function(v) {
				return (0, M.hasAccountEntitlement)(v, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(v) {
				return !!(0, n.z1)("client-certificates")(v) || !!(0, s.getZoneFlipperFlag)(v, "ssl", "client_certificates")
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
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/security"
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			hasPermission: function(v) {
				return (0, A.B_)(v)
			}
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.page_shield",
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(v) {
				return !!(0, t.getAccountFlipperFlag)(v, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(v) {
				return (0, M.hasZoneEntitlement)(v, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			hasPermission: function(v) {
				var Y = (0, s.getZone)(v);
				return Y ? !!(0, s.getZoneFlipperFlag)(v, "firewall", "api_shield_tab") && (0, s.isPlanAtLeast)(Y, "business") : !1
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
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && (z(v, "access", "access.app") || z(v, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed"
		}, {
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			hasPermission: function(v) {
				return (0, n.z1)("speed-test-result")(v) === !0
			}
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
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "setting")
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
			hasPermission: function(v) {
				return b(v, "waf", "firewall.rule") || b(v, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(v) {
				return d(v)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(v) {
				return !!ne(v)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && z(v, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			hasPermission: function(v) {
				return b(v, "waf", "firewall.rule") || b(v, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules"
		}, {
			title: "account.bulk_redirects.title",
			labels: ["beta", "absolute"],
			url: function(v) {
				var Y = (0, t.getAccount)(v);
				return "/".concat(Y == null ? void 0 : Y.id, "/bulk-redirects")
			},
			hasPermission: function(v) {
				return d(v)
			}
		}, {
			title: "navigation.zone.rules.dynamic_redirects",
			labels: ["beta"],
			url: "/rules/dynamic-redirects",
			hasPermission: function(v) {
				return b(v, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(v) {
				return b(v, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(v) {
				return b(v, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(v) {
			return b(v, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(v) {
				return d(v)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(v) {
				return d(v)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v) && !!(0, i.getZoneGraphQLSettingEnabled)(v, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v) && ((0, M.hasZoneEntitlement)(v, "waiting_rooms.allowed") || !!(0, s.getZoneFlipperFlag)(v, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(v) {
			var Y = [],
				H = (0, s.getZone)(v);
			return H && !(0, s.isPlanAtLeast)(H, "pro") && Y.push("beta"), Y
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.consent",
			hasPermission: function(v) {
				var Y = (0, s.getZone)(v);
				return !!(Y && !(0, s.isPlanAtLeast)(Y, "pro"))
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
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "ssl", "ssl.cert")
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
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.events",
			url: "/security/events",
			hasPermission: function(v) {
				return (0, A.B_)(v)
			}
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(v) {
				return !!(0, t.getAccountFlipperFlag)(v, "bots", "paygo")
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
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(v) {
				return d(v)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(v) {
				return b(v, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(v) {
				return b(v, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(v) {
				return b(v, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(v) {
			return b(v, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(v) {
				return !(0, M.zoneIsDNSOnly)(v)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(v) {
			return !(0, M.zoneIsDNSOnly)(v) && b(v, "zone_settings", "setting")
		}
	}]
}