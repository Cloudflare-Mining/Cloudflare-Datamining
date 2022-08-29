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
		hasPermission: function(ne) {
			return !!(0, Me.z1)("oauth-access-management")(ne)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(ne) {
			return !(0, Ie.n3)() && !(0, Me.z1)("oauth-access-management")(ne)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(ne) {
			return !(0, Me.z1)("oauth-access-management")(ne)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(ne) {
			return (0, Me.z1)("registrar-account-home-copy-experiment")(ne) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(ne) {
				return U(ne)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(ne) {
				return U(ne)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(ne) {
				return Ce(ne)
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
			hasPermission: function(ne) {
				return G(ne)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(ne) {
				return G(ne) && !!(0, R.getAccountFlipperFlag)(ne, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(ne) {
				return G(ne)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(ne) {
				return G(ne) && !!(0, R.getAccountFlipperFlag)(ne, "account_analytics", "carbon_dashboard")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(ne) {
			return G(ne) && (0, me.dU)(ne)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(ne) {
			return G(ne) && (!!(0, R.getAccountFlipperFlag)(ne, "calls", "enabled") || !!(0, R.getAccountFlipperFlag)(ne, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(ne) {
			return G(ne)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(ne) {
			return G(ne)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(ne) {
				return !!(0, R.getAccountFlipperFlag)(ne, "workers", "origin_workers") && !!(0, R.getAccountFlipperFlag)(ne, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(ne) {
				return !!(0, R.getAccountFlipperFlag)(ne, "workers", "cfsql_bindings")
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
		hasPermission: function(ne) {
			return G(ne)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(ne) {
			return G(ne) && !!(se(ne) || x(ne))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets",
			hasPermission: function(ne) {
				var Ye = !!$(ne) && !!_(ne);
				return !!w(ne) || Ye
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: function(ne) {
				var Ye = !!w(ne) || !!$(ne) && !!_(ne);
				return Ye ? "/rulesets/managed" : "/rulesets"
			},
			hasPermission: function(ne) {
				return !!se(ne)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(ne) {
				return !!x(ne)
			}
		}, {
			title: "navigation.account.firewall_rulesets.browse_rulesets",
			url: "/rulesets/custom"
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(ne) {
			return G(ne)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(ne) {
				return j(ne)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(ne) {
				return j(ne)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(ne) {
				return j(ne)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(ne) {
			return G(ne) && !!(0, R.getAccountFlipperFlag)(ne, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(ne) {
				return W(ne)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(ne) {
				return W(ne)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(ne) {
				return W(ne)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit/waitlist",
			hasPermission: function(ne) {
				return W(ne)
			}
		}, {
			title: "navigation.account.images.sourcing_kit_dev",
			url: "/images/sourcing-kit/d",
			labels: ["beta"],
			hasPermission: function(ne) {
				return ee(ne)
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(ne) {
			return G(ne) && (0, Te.sL)(ne)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(ne) {
				return G(ne) && (0, Te.sL)(ne)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(ne) {
				return G(ne) && (0, Te.sL)(ne)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(ne) {
				return G(ne) && (0, Te.TT)(ne)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(ne) {
				return G(ne) && (0, Te.jD)(ne)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(ne) {
				return G(ne) && (0, Te.BU)(ne)
			}
		}]
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(ne) {
			return G(ne)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(ne) {
			return G(ne) && !!(0, R.getAccountFlipperFlag)(ne, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(ne) {
			return G(ne) && !!(0, R.getAccountFlipperFlag)(ne, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(ne) {
			return G(ne) && !!(0, R.getAccountFlipperFlag)(ne, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(ne) {
			return G(ne)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(ne) {
			return G(ne)
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
			hasPermission: function(ne) {
				return G(ne)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(ne) {
				return (0, O.b)(ne) ? G(ne) : (0, R.getPermission)(ne)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(ne) {
				return G(ne)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(ne) {
				return G(ne)
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
		hasPermission: function(ne) {
			return z(ne, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(ne) {
				var Ye = (0, N.getZone)(ne);
				return Ye ? !!(!(0, r.zoneIsDNSOnly)(ne) && !!(0, N.getZoneFlipperFlag)(ne, "origin_reachability_dash", "dash_view") && (0, N.isPlanAtLeast)(Ye, "enterprise") && !!(0, ie.getZoneGraphQLSettingEnabled)(ne, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(ne) {
				var Ye = (0, N.getZone)(ne);
				return Ye ? !!(!(0, r.zoneIsDNSOnly)(ne) && !!(0, N.getZoneFlipperFlag)(ne, "edge_reachability_dash", "dash_view") && (0, N.isPlanAtLeast)(Ye, "enterprise") && !!(0, ie.getZoneGraphQLSettingEnabled)(ne, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(ne) {
				return Object.values((0, J.H_)(ne)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne) && !!(0, N.getZoneFlipperFlag)(ne, "logs", "instant_log") && !!(0, r.getZoneEntitlement)(ne, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(ne) {
			return z(ne, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		labels: ["beta"],
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(ne) {
			var Ye = (0, N.getZone)(ne);
			if ((0, r.zoneIsDNSOnly)(ne) || !H(ne, "zone_settings", "spectrum.app") || !Ye) return !1;
			var gt = !!((0, Oe.userHasEntZones)(ne) || (0, N.userHasDelegatedEntZones)(ne)),
				vt = !!(0, N.getZoneFlipperFlag)(ne, "spectrum", "enabled"),
				Et = !!(0, N.isFree)(Ye);
			return vt || gt || !Et
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "ssl", "ssl.cert")
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
			hasPermission: function(ne) {
				return (0, r.hasAccountEntitlement)(ne, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(ne) {
				return !!(0, Me.z1)("client-certificates")(ne) || !!(0, N.getZoneFlipperFlag)(ne, "ssl", "client_certificates")
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
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "waf", "firewall.rule")
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
			hasPermission: function(ne) {
				return !!(0, R.getAccountFlipperFlag)(ne, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(ne) {
				return (0, r.hasZoneEntitlement)(ne, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			hasPermission: function(ne) {
				var Ye = (0, N.getZone)(ne);
				return Ye ? !!(0, N.getZoneFlipperFlag)(ne, "firewall", "api_shield_tab") && (0, N.isPlanAtLeast)(Ye, "business") : !1
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
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && (H(ne, "access", "access.app") || H(ne, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "setting")
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
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "setting")
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
			hasPermission: function(ne) {
				return G(ne)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(ne) {
				return !!re(ne)
			}
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && H(ne, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "page-rule")
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
			url: function(ne) {
				var Ye = (0, R.getAccount)(ne);
				return "/".concat(Ye == null ? void 0 : Ye.id, "/bulk-redirects")
			},
			hasPermission: function(ne) {
				return G(ne)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(ne) {
				return !!(0, N.getZoneFlipperFlag)(ne, "page_rules", "normalization") && z(ne, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(ne) {
			return z(ne, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(ne) {
				return G(ne)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(ne) {
				return G(ne)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne) && !!(0, ie.getZoneGraphQLSettingEnabled)(ne, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne) && ((0, r.hasZoneEntitlement)(ne, "waiting_rooms.allowed") || !!(0, N.getZoneFlipperFlag)(ne, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(ne) {
			var Ye = [],
				gt = (0, N.getZone)(ne);
			return gt && !(0, N.isPlanAtLeast)(gt, "pro") && Ye.push("beta"), Ye
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zaraz", "zaraz")
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
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "ssl", "ssl.cert")
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
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(ne) {
				return !!(0, R.getAccountFlipperFlag)(ne, "bots", "paygo")
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
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(ne) {
				return G(ne)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(ne) {
				return z(ne, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(ne) {
				return !!(0, N.getZoneFlipperFlag)(ne, "page_rules", "normalization") && z(ne, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(ne) {
			return z(ne, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(ne) {
				return !(0, r.zoneIsDNSOnly)(ne)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(ne) {
			return !(0, r.zoneIsDNSOnly)(ne) && z(ne, "zone_settings", "setting")
		}
	}]
}