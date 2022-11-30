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
		hasPermission: function(S) {
			return !!(0, n.z1)("oauth-access-management")(S)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(S) {
			return !(0, c.n3)() && !(0, n.z1)("oauth-access-management")(S)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(S) {
			return !(0, n.z1)("oauth-access-management")(S)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(S) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(S) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(S) {
				return G(S)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(S) {
				return G(S)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(S) {
				return Y(S)
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
			hasPermission: function(S) {
				return u(S)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(S) {
				return u(S) && !!(0, t.getAccountFlipperFlag)(S, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(S) {
				return u(S)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(S) {
				return u(S) && !!(0, t.getAccountFlipperFlag)(S, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "account.magic.network_monitoring.navigation",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(S) {
				return u(S) && !!(0, t.getAccountFlipperFlag)(S, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(S) {
			return u(S) && (0, M.dU)(S)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(S) {
			return u(S) && (!!(0, t.getAccountFlipperFlag)(S, "calls", "enabled") || !!(0, t.getAccountFlipperFlag)(S, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(S) {
			return u(S)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(S) {
			return u(S)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(S) {
				return !!(0, t.getAccountFlipperFlag)(S, "workers", "origin_workers") && !!(0, t.getAccountFlipperFlag)(S, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(S) {
				return !!(0, n.z1)("queues-ui")(S)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(S) {
				return !!(0, t.getAccountFlipperFlag)(S, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(S) {
				var ne = (0, o.getSubscriptions)(S);
				return !(0, O.ky)(ne, [T.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(S) {
			return !!(0, n.z1)("workers-for-platforms")(S) && u(S) && ((0, f.hasEnterpriseAccountEntitlement)(S) || !!(0, t.getAccountFlipperFlag)(S, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(S) {
			return u(S)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(S) {
				return W(S)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			labels: ["beta"],
			hasPermission: function(S) {
				return W(S)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(S) {
			return u(S)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(S) {
				return g(S)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(S) {
				return g(S)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(S) {
				return g(S)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(S) {
			return u(S) && !!(0, t.getAccountFlipperFlag)(S, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(S) {
				return F(S)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(S) {
				return F(S)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(S) {
				return F(S)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			hasPermission: function(S) {
				return F(S)
			},
			labels: ["beta"]
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(S) {
			return u(S) && (0, v.xU)(S)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(S) {
				return u(S) && (0, v.sL)(S)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(S) {
				return u(S) && (0, v.sL)(S)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(S) {
				return u(S) && (0, v.TT)(S)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(S) {
				return u(S) && (0, v.jD)(S)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(S) {
				return u(S) && (0, v.BU)(S)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/security-center/cloudforce-one",
			hasPermission: function(S) {
				return u(S) && (0, v.sK)(S)
			}
		}]
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/application-security",
		iconType: "cloudflare-security-application",
		hasPermission: function(S) {
			return u(S) && !!H(S)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: "/application-security/waf",
			hasPermission: function(S) {
				return !!H(S)
			}
		}]
	}, {
		title: "navigation.account.network_security",
		url: "/network-security",
		iconType: "cloudflare-security-network",
		hasPermission: function(S) {
			return u(S) && !!K(S)
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/network-security/ddos",
			hasPermission: function(S) {
				var ne = !!J(S) && !!ce(S);
				return !!q(S) || ne
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/network-security/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(S) {
				return !!K(S)
			}
		}]
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(S) {
			return u(S) && !!(0, n.z1)("managed-challenge-ui")(S)
		}
	}, {
		title: "navigation.account.teams",
		url: function() {
			var S = (0, B.e1)(),
				ne = "https://one.dash.cloudflare.com";
			return S ? "".concat(ne, "/").concat(S, "/") : ne
		},
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(S) {
			return u(S)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(S) {
			return u(S) && !!(0, t.getAccountFlipperFlag)(S, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(S) {
			return u(S) && !!(0, t.getAccountFlipperFlag)(S, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(S) {
			return u(S) && !!(0, t.getAccountFlipperFlag)(S, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(S) {
			return u(S)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(S) {
			return u(S)
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
			hasPermission: function(S) {
				return u(S)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(S) {
				return (0, L.b)(S) ? u(S) : (0, t.getPermission)(S)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(S) {
				return u(S)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(S) {
				return u(S)
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
		hasPermission: function(S) {
			return E(S, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			canBeVersioned: !0,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			canBeVersioned: !1,
			hasPermission: function(S) {
				var ne = (0, x.getZone)(S);
				return ne ? !!(!(0, f.zoneIsDNSOnly)(S) && !!(0, x.getZoneFlipperFlag)(S, "origin_reachability_dash", "dash_view") && (0, x.isPlanAtLeast)(ne, "enterprise") && !!(0, a.getZoneGraphQLSettingEnabled)(S, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			canBeVersioned: !1,
			hasPermission: function(S) {
				var ne = (0, x.getZone)(S);
				return ne ? !!(!(0, f.zoneIsDNSOnly)(S) && !!(0, x.getZoneFlipperFlag)(S, "edge_reachability_dash", "dash_view") && (0, x.isPlanAtLeast)(ne, "enterprise") && !!(0, a.getZoneGraphQLSettingEnabled)(S, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			canBeVersioned: !1,
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return Object.values((0, C.H_)(S)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S) && !!(0, x.getZoneFlipperFlag)(S, "logs", "instant_log") && !!(0, f.getZoneEntitlement)(S, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.http_applications_v2",
		url: "/versioning",
		canBeVersioned: !1,
		iconType: "git-branch",
		testId: "zone-navigation-link-http_applications_v2",
		hasPermission: function(S) {
			return !!(0, n.z1)("versioning-enablement")(S)
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		canBeVersioned: !1,
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(S) {
			return E(S, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !!(0, n.z1)("dns-tab-sections")(S)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !!(0, n.z1)("dns-tab-sections")(S)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		canBeVersioned: !1,
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "dns_records", "dns-record")
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
		hasPermission: function(S) {
			var ne = (0, x.getZone)(S);
			if ((0, f.zoneIsDNSOnly)(S) || !l(S, "zone_settings", "spectrum.app") || !ne) return !1;
			var re = !!((0, i.userHasEntZones)(S) || (0, x.userHasDelegatedEntZones)(S)),
				se = !!(0, x.getZoneFlipperFlag)(S, "spectrum", "enabled"),
				fe = !!(0, x.isFree)(ne);
			return se || re || !fe
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		canBeVersioned: !0,
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "ssl", "ssl.cert")
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
			hasPermission: function(S) {
				return (0, f.hasAccountEntitlement)(S, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !!(0, n.z1)("client-certificates")(S) || !!(0, x.getZoneFlipperFlag)(S, "ssl", "client_certificates")
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
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/security",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.events",
			canBeVersioned: !1,
			url: "/security/events",
			hasPermission: function(S) {
				return (0, b.B_)(S)
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
			hasPermission: function(S) {
				return !!(0, t.getAccountFlipperFlag)(S, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return (0, f.hasZoneEntitlement)(S, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			canBeVersioned: !1,
			labels: ["new"],
			hasPermission: function(S) {
				var ne = (0, x.getZone)(S);
				return ne ? !!(0, x.getZoneFlipperFlag)(S, "firewall", "api_shield_tab") && (0, x.isPlanAtLeast)(ne, "business") : !1
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
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && (l(S, "access", "access.app") || l(S, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		canBeVersioned: !0,
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return (0, n.z1)("speed-test-result")(S) === !0
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
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "setting")
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
			hasPermission: function(S) {
				return E(S, "waf", "firewall.rule") || E(S, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			canBeVersioned: !0,
			hasPermission: function(S) {
				return u(S)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			canBeVersioned: !1,
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(S) {
				return !!U(S)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		canBeVersioned: !0,
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && l(S, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		canBeVersioned: !0,
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "page-rule")
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
			hasPermission: function(S) {
				return E(S, "waf", "firewall.rule") || E(S, "zone_settings", "page-rule")
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
			hasPermission: function(S) {
				return E(S, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			canBeVersioned: !0,
			hasPermission: function(S) {
				return E(S, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return E(S, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		canBeVersioned: !0,
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		canBeVersioned: !0,
		hasPermission: function(S) {
			return E(S, "lb", "load-balancer") || E(S, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			canBeVersioned: !0,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return u(S)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return u(S)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S) && !!(0, a.getZoneGraphQLSettingEnabled)(S, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			canBeVersioned: !1,
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S) && ((0, f.hasZoneEntitlement)(S, "waiting_rooms.allowed") || !!(0, x.getZoneFlipperFlag)(S, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		canBeVersioned: !0,
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		canBeVersioned: !1,
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		canBeVersioned: !0,
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		canBeVersioned: !1,
		labels: function(S) {
			var ne = [],
				re = (0, x.getZone)(S);
			return re && !(0, x.isPlanAtLeast)(re, "pro") && ne.push("beta"), ne
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zaraz", "zaraz")
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
			hasPermission: function(S) {
				return S.zaraz.zarazWorkflow.isRequesting ? !1 : S.zaraz.zarazWorkflow.data === "preview"
			}
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		canBeVersioned: !1,
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(S) {
			var ne = (0, t.getMembership)(S),
				re = (ne == null ? void 0 : ne.roles) || [];
			return re.includes("Trust and Safety") ? !1 : !(0, f.zoneIsDNSOnly)(S)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "ssl", "ssl.cert")
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
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.events",
			url: "/security/events",
			hasPermission: function(S) {
				return (0, b.B_)(S)
			}
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(S) {
				return !!(0, t.getAccountFlipperFlag)(S, "bots", "paygo")
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
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(S) {
				return u(S)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(S) {
				return E(S, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(S) {
				return E(S, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(S) {
				return E(S, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(S) {
			return E(S, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(S) {
				return !(0, f.zoneIsDNSOnly)(S)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(S) {
			return !(0, f.zoneIsDNSOnly)(S) && E(S, "zone_settings", "setting")
		}
	}]
}