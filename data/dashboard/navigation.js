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
		hasPermission: function(T) {
			return !!(0, n.z1)("oauth-access-management")(T)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(T) {
			return !(0, m.n3)() && !(0, n.z1)("oauth-access-management")(T)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(T) {
			return !(0, n.z1)("oauth-access-management")(T)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(T) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(T) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(T) {
				return F(T)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(T) {
				return F(T)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(T) {
				return X(T)
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
			hasPermission: function(T) {
				return u(T)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(T) {
				return u(T) && !!(0, t.getAccountFlipperFlag)(T, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(T) {
				return u(T)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(T) {
				return u(T) && !!(0, t.getAccountFlipperFlag)(T, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "account.magic.network_monitoring.navigation",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(T) {
				return u(T) && !!(0, t.getAccountFlipperFlag)(T, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(T) {
			return u(T) && (0, D.dU)(T)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(T) {
			return u(T) && (!!(0, t.getAccountFlipperFlag)(T, "calls", "enabled") || !!(0, t.getAccountFlipperFlag)(T, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(T) {
			return u(T)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(T) {
			return u(T)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(T) {
				return !!(0, t.getAccountFlipperFlag)(T, "workers", "origin_workers") && !!(0, t.getAccountFlipperFlag)(T, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(T) {
				return !!(0, n.z1)("queues-ui")(T)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(T) {
				return !!(0, t.getAccountFlipperFlag)(T, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(T) {
				var re = (0, a.getSubscriptions)(T);
				return !(0, L.ky)(re, [N.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(T) {
			return !!(0, n.z1)("workers-for-platforms")(T) && u(T) && ((0, g.hasEnterpriseAccountEntitlement)(T) || !!(0, t.getAccountFlipperFlag)(T, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(T) {
			return u(T)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(T) {
				return w(T)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			labels: ["beta"],
			hasPermission: function(T) {
				return w(T)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(T) {
			return u(T)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(T) {
				return v(T)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(T) {
				return v(T)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(T) {
				return v(T)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(T) {
			return u(T) && !!(0, t.getAccountFlipperFlag)(T, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(T) {
				return Y(T)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(T) {
				return Y(T)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(T) {
				return Y(T)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			hasPermission: function(T) {
				return Y(T)
			},
			labels: ["beta"]
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(T) {
			return u(T) && (0, p.xU)(T)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(T) {
				return u(T) && (0, p.sL)(T)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(T) {
				return u(T) && (0, p.sL)(T)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(T) {
				return u(T) && (0, p.TT)(T)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(T) {
				return u(T) && (0, p.jD)(T)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(T) {
				return u(T) && (0, p.BU)(T)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/security-center/cloudforce-one",
			hasPermission: function(T) {
				return u(T) && (0, p.sK)(T)
			}
		}]
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/application-security",
		iconType: "cloudflare-security-application",
		hasPermission: function(T) {
			return u(T) && !!G(T)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: "/application-security/waf",
			hasPermission: function(T) {
				return !!G(T)
			}
		}]
	}, {
		title: "navigation.account.network_security",
		url: "/network-security",
		iconType: "cloudflare-security-network",
		hasPermission: function(T) {
			return u(T) && !!B(T)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/network-security/ddos",
			hasPermission: function(T) {
				var re = !!V(T) && !!$(T);
				return !!W(T) || re
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/network-security/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(T) {
				return !!B(T)
			}
		}]
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(T) {
			return u(T) && !!(0, n.z1)("managed-challenge-ui")(T)
		}
	}, {
		title: "navigation.account.teams",
		url: function() {
			var T = (0, K.e1)(),
				re = "https://one.dash.cloudflare.com";
			return T ? "".concat(re, "/").concat(T, "/") : re
		},
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(T) {
			return u(T)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(T) {
			return u(T) && !!(0, t.getAccountFlipperFlag)(T, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(T) {
			return u(T) && !!(0, t.getAccountFlipperFlag)(T, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(T) {
			return u(T) && !!(0, t.getAccountFlipperFlag)(T, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(T) {
			return u(T)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(T) {
			return u(T)
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
			hasPermission: function(T) {
				return u(T)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(T) {
				return (0, I.b)(T) ? u(T) : (0, t.getPermission)(T)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(T) {
				return u(T)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(T) {
				return u(T)
			}
		}]
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		canBeVersioned: !0
	}, {
		title: "navigation.common.analytics",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return h(T, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			canBeVersioned: !0,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			canBeVersioned: !1,
			hasPermission: function(T) {
				var re = (0, P.getZone)(T);
				return re ? !!(!(0, g.zoneIsDNSOnly)(T) && !!(0, P.getZoneFlipperFlag)(T, "origin_reachability_dash", "dash_view") && (0, P.isPlanAtLeast)(re, "enterprise") && !!(0, s.getZoneGraphQLSettingEnabled)(T, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			canBeVersioned: !1,
			hasPermission: function(T) {
				var re = (0, P.getZone)(T);
				return re ? !!(!(0, g.zoneIsDNSOnly)(T) && !!(0, P.getZoneFlipperFlag)(T, "edge_reachability_dash", "dash_view") && (0, P.isPlanAtLeast)(re, "enterprise") && !!(0, s.getZoneGraphQLSettingEnabled)(T, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			canBeVersioned: !1,
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return Object.values((0, S.H_)(T)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T) && !!(0, P.getZoneFlipperFlag)(T, "logs", "instant_log") && !!(0, g.getZoneEntitlement)(T, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.http_applications_v2",
		url: "/versioning",
		canBeVersioned: !1,
		iconType: "git-branch",
		testId: "zone-navigation-link-http_applications_v2",
		hasPermission: function(T) {
			return !!(0, n.z1)("versioning-enablement")(T)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		canBeVersioned: !1,
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(T) {
			return h(T, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !!(0, n.z1)("dns-tab-sections")(T)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !!(0, n.z1)("dns-tab-sections")(T)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		canBeVersioned: !1,
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			canBeVersioned: !1,
			url: "/email/routing"
		}, {
			title: "navigation.zone.email.security",
			canBeVersioned: !1,
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		canBeVersioned: !1,
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(T) {
			var re = (0, P.getZone)(T);
			if ((0, g.zoneIsDNSOnly)(T) || !l(T, "zone_settings", "spectrum.app") || !re) return !1;
			var ce = !!((0, i.userHasEntZones)(T) || (0, P.userHasDelegatedEntZones)(T)),
				ie = !!(0, P.getZoneFlipperFlag)(T, "spectrum", "enabled"),
				de = !!(0, P.isFree)(re);
			return ie || ce || !de
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return (0, g.hasAccountEntitlement)(T, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !!(0, n.z1)("client-certificates")(T) || !!(0, P.getZoneFlipperFlag)(T, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			canBeVersioned: !1,
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			canBeVersioned: !1,
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/security",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.events",
			canBeVersioned: !1,
			url: "/security/events",
			hasPermission: function(T) {
				return (0, b.B_)(T)
			}
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.page_shield",
			canBeVersioned: !1,
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			canBeVersioned: !0,
			hasPermission: function(T) {
				return !!(0, t.getAccountFlipperFlag)(T, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return (0, g.hasZoneEntitlement)(T, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			canBeVersioned: !1,
			labels: ["new"],
			hasPermission: function(T) {
				var re = (0, P.getZone)(T);
				return re ? !!(0, P.getZoneFlipperFlag)(T, "firewall", "api_shield_tab") && (0, P.isPlanAtLeast)(re, "business") : !1
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			canBeVersioned: !0
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		canBeVersioned: !1,
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && (l(T, "access", "access.app") || l(T, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return (0, n.z1)("speed-test-result")(T) === !0
			}
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.speed.browser_insights",
			canBeVersioned: !1,
			url: "/speed/browser-insights"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			canBeVersioned: !1,
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			canBeVersioned: !0,
			labels: ["beta"],
			hasPermission: function(T) {
				return h(T, "waf", "firewall.rule") || h(T, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			canBeVersioned: !0,
			hasPermission: function(T) {
				return u(T)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			canBeVersioned: !1,
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(T) {
				return !!k(T)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && l(T, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			canBeVersioned: !0,
			hasPermission: function(T) {
				return h(T, "waf", "firewall.rule") || h(T, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			canBeVersioned: !0,
			hasPermission: function(T) {
				return h(T, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			canBeVersioned: !0,
			hasPermission: function(T) {
				return h(T, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return h(T, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return h(T, "lb", "load-balancer") || h(T, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			canBeVersioned: !0,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return u(T)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return u(T)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T) && !!(0, s.getZoneGraphQLSettingEnabled)(T, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			canBeVersioned: !1,
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T) && ((0, g.hasZoneEntitlement)(T, "waiting_rooms.allowed") || !!(0, P.getZoneFlipperFlag)(T, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		canBeVersioned: !1,
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		canBeVersioned: !0,
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		canBeVersioned: !1,
		labels: function(T) {
			var re = [],
				ce = (0, P.getZone)(T);
			return ce && !(0, P.isPlanAtLeast)(ce, "pro") && re.push("beta"), re
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			canBeVersioned: !1,
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			canBeVersioned: !1,
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.consent",
			canBeVersioned: !1,
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.variables",
			canBeVersioned: !1,
			url: "/zaraz/variables"
		}, {
			title: "navigation.zone.zaraz.settings",
			canBeVersioned: !1,
			url: "/zaraz/settings"
		}, {
			title: "navigation.zone.zaraz.monitoring",
			canBeVersioned: !1,
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.history",
			canBeVersioned: !1,
			url: "/zaraz/history",
			hasPermission: function(T) {
				return T.zaraz.zarazWorkflow.isRequesting ? !1 : T.zaraz.zarazWorkflow.data === "preview"
			}
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		canBeVersioned: !1,
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(T) {
			var re = (0, t.getMembership)(T),
				ce = (re == null ? void 0 : re.roles) || [];
			return ce.includes("Trust and Safety") ? !1 : !(0, g.zoneIsDNSOnly)(T)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "ssl", "ssl.cert")
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
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.events",
			url: "/security/events",
			hasPermission: function(T) {
				return (0, b.B_)(T)
			}
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(T) {
				return !!(0, t.getAccountFlipperFlag)(T, "bots", "paygo")
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
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(T) {
				return u(T)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(T) {
				return h(T, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(T) {
				return h(T, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(T) {
				return h(T, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(T) {
			return h(T, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(T) {
				return !(0, g.zoneIsDNSOnly)(T)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(T) {
			return !(0, g.zoneIsDNSOnly)(T) && h(T, "zone_settings", "setting")
		}
	}]
}