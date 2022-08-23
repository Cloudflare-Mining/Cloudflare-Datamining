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
		hasPermission: function(ce) {
			return !!(0, Oe.z1)("oauth-access-management")(ce)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(ce) {
			return !(0, J.n3)() && !(0, Oe.z1)("oauth-access-management")(ce)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(ce) {
			return !(0, Oe.z1)("oauth-access-management")(ce)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(ce) {
			return (0, Oe.z1)("registrar-account-home-copy-experiment")(ce) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(ce) {
				return D(ce)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(ce) {
				return D(ce)
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
			hasPermission: function(ce) {
				return _(ce)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(ce) {
				return _(ce) && !!(0, R.getAccountFlipperFlag)(ce, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(ce) {
				return _(ce)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(ce) {
				return _(ce) && !!(0, R.getAccountFlipperFlag)(ce, "account_analytics", "carbon_dashboard")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(ce) {
			return _(ce) && (0, Ce.dU)(ce)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(ce) {
			return _(ce) && (!!(0, R.getAccountFlipperFlag)(ce, "calls", "enabled") || !!(0, R.getAccountFlipperFlag)(ce, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(ce) {
			return _(ce)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(ce) {
			return _(ce)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(ce) {
				return !!(0, R.getAccountFlipperFlag)(ce, "workers", "origin_workers") && !!(0, R.getAccountFlipperFlag)(ce, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(ce) {
				return !!(0, R.getAccountFlipperFlag)(ce, "workers", "cfsql_bindings")
			}
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
		hasPermission: function(ce) {
			return _(ce)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(ce) {
			return _(ce) && !!(w(ce) || W(ce))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets",
			hasPermission: function(ce) {
				var pt = !!x(ce) && !!U(ce);
				return !!q(ce) || pt
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: function(ce) {
				var pt = !!q(ce) || !!x(ce) && !!U(ce);
				return pt ? "/rulesets/managed" : "/rulesets"
			},
			hasPermission: function(ce) {
				return !!w(ce)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(ce) {
				return !!W(ce)
			}
		}, {
			title: "navigation.account.firewall_rulesets.browse_rulesets",
			url: "/rulesets/custom"
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(ce) {
			return _(ce)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(ce) {
				return z(ce)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(ce) {
				return z(ce)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(ce) {
				return z(ce)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(ce) {
			return _(ce) && !!(0, R.getAccountFlipperFlag)(ce, "cloudflare_images", "early_release_access")
		}
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(ce) {
			return _(ce) && (0, ae.sL)(ce)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(ce) {
				return _(ce) && (0, ae.sL)(ce)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(ce) {
				return _(ce) && (0, ae.sL)(ce)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(ce) {
				return _(ce) && (0, ae.TT)(ce)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(ce) {
				return _(ce) && (0, ae.jD)(ce)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(ce) {
				return _(ce) && (0, ae.BU)(ce)
			}
		}]
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(ce) {
			return _(ce)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(ce) {
			return _(ce) && !!(0, R.getAccountFlipperFlag)(ce, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(ce) {
			return _(ce) && !!(0, R.getAccountFlipperFlag)(ce, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(ce) {
			return _(ce) && !!(0, R.getAccountFlipperFlag)(ce, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(ce) {
			return _(ce)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(ce) {
			return _(ce)
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
			hasPermission: function(ce) {
				return _(ce)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(ce) {
				return (0, O.b)(ce) ? _(ce) : (0, R.getPermission)(ce)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(ce) {
				return _(ce)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(ce) {
				return _(ce)
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
		hasPermission: function(ce) {
			return G(ce, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(ce) {
				var pt = (0, N.getZone)(ce);
				return pt ? !!(!(0, r.zoneIsDNSOnly)(ce) && !!(0, N.getZoneFlipperFlag)(ce, "origin_reachability_dash", "dash_view") && (0, N.isPlanAtLeast)(pt, "enterprise") && !!(0, le.getZoneGraphQLSettingEnabled)(ce, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(ce) {
				var pt = (0, N.getZone)(ce);
				return pt ? !!(!(0, r.zoneIsDNSOnly)(ce) && !!(0, N.getZoneFlipperFlag)(ce, "edge_reachability_dash", "dash_view") && (0, N.isPlanAtLeast)(pt, "enterprise") && !!(0, le.getZoneGraphQLSettingEnabled)(ce, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(ce) {
				return Object.values((0, te.H_)(ce)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce) && !!(0, N.getZoneFlipperFlag)(ce, "logs", "instant_log") && !!(0, r.getZoneEntitlement)(ce, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(ce) {
			return G(ce, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		labels: ["beta"],
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(ce) {
			var pt = (0, N.getZone)(ce);
			if ((0, r.zoneIsDNSOnly)(ce) || !H(ce, "zone_settings", "spectrum.app") || !pt) return !1;
			var It = !!((0, $.userHasEntZones)(ce) || (0, N.userHasDelegatedEntZones)(ce)),
				_t = !!(0, N.getZoneFlipperFlag)(ce, "spectrum", "enabled"),
				$t = !!(0, N.isFree)(pt);
			return _t || It || !$t
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "ssl", "ssl.cert")
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
			hasPermission: function(ce) {
				return (0, r.hasAccountEntitlement)(ce, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(ce) {
				return !!(0, Oe.z1)("client-certificates")(ce) || !!(0, N.getZoneFlipperFlag)(ce, "ssl", "client_certificates")
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
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "waf", "firewall.rule")
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
			hasPermission: function(ce) {
				return !!(0, R.getAccountFlipperFlag)(ce, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(ce) {
				return (0, r.hasZoneEntitlement)(ce, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			hasPermission: function(ce) {
				var pt = (0, N.getZone)(ce);
				return pt ? !!(0, N.getZoneFlipperFlag)(ce, "firewall", "api_shield_tab") && (0, N.isPlanAtLeast)(pt, "business") : !1
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
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && (H(ce, "access", "access.app") || H(ce, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "setting")
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
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "setting")
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
			hasPermission: function(ce) {
				return _(ce)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(ce) {
				return !!B(ce)
			}
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && H(ce, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "page-rule")
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
			url: function(ce) {
				var pt = (0, R.getAccount)(ce);
				return "/".concat(pt == null ? void 0 : pt.id, "/bulk-redirects")
			},
			hasPermission: function(ce) {
				return _(ce)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(ce) {
				return !!(0, N.getZoneFlipperFlag)(ce, "page_rules", "normalization") && G(ce, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(ce) {
			return G(ce, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(ce) {
				return _(ce)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(ce) {
				return _(ce)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce) && !!(0, le.getZoneGraphQLSettingEnabled)(ce, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce) && ((0, r.hasZoneEntitlement)(ce, "waiting_rooms.allowed") || !!(0, N.getZoneFlipperFlag)(ce, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(ce) {
			var pt = [],
				It = (0, N.getZone)(ce);
			return It && !(0, N.isPlanAtLeast)(It, "pro") && pt.push("beta"), pt
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.consent",
			hasPermission: function() {
				return !1
			},
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.settings",
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "ssl", "ssl.cert")
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
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(ce) {
				return !!(0, R.getAccountFlipperFlag)(ce, "bots", "paygo")
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
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(ce) {
				return _(ce)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(ce) {
				return G(ce, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(ce) {
				return !!(0, N.getZoneFlipperFlag)(ce, "page_rules", "normalization") && G(ce, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(ce) {
			return G(ce, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(ce) {
				return !(0, r.zoneIsDNSOnly)(ce)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(ce) {
			return !(0, r.zoneIsDNSOnly)(ce) && G(ce, "zone_settings", "setting")
		}
	}]
}