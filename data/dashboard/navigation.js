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
		hasPermission: function(le) {
			return !!(0, de.z1)("oauth-access-management")(le)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(le) {
			return !(0, be.n3)() && !(0, de.z1)("oauth-access-management")(le)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(le) {
			return !(0, de.z1)("oauth-access-management")(le)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(le) {
			return (0, de.z1)("registrar-account-home-copy-experiment")(le) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(le) {
				return U(le)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			labels: ["new"],
			hasPermission: function(le) {
				return U(le)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			hasPermission: function(le) {
				return ee(le)
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
			hasPermission: function(le) {
				return F(le)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics",
			hasPermission: function(le) {
				return F(le) && !!(0, R.getAccountFlipperFlag)(le, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(le) {
				return F(le)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(le) {
				return F(le) && !!(0, R.getAccountFlipperFlag)(le, "account_analytics", "carbon_dashboard")
			}
		}]
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(le) {
			return F(le) && (0, ae.dU)(le)
		}
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(le) {
			return F(le) && (!!(0, R.getAccountFlipperFlag)(le, "calls", "enabled") || !!(0, R.getAccountFlipperFlag)(le, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(le) {
			return F(le)
		}
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(le) {
			return F(le)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(le) {
				return !!(0, R.getAccountFlipperFlag)(le, "workers", "origin_workers") && !!(0, R.getAccountFlipperFlag)(le, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(le) {
				return !!(0, R.getAccountFlipperFlag)(le, "workers", "cfsql_bindings")
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
		hasPermission: function(le) {
			return F(le)
		}
	}, {
		title: "navigation.account.firewall_rulesets",
		url: "/rulesets",
		iconType: "shield",
		hasPermission: function(le) {
			return F(le) && !!(H(le) || x(le))
		},
		pages: [{
			title: "navigation.account.firewall_rulesets.ddos",
			url: "/rulesets",
			hasPermission: function(le) {
				var Ge = !!B(le) && !!p(le);
				return !!j(le) || Ge
			}
		}, {
			title: "navigation.account.firewall_rulesets.application_firewall",
			url: function(le) {
				var Ge = !!j(le) || !!B(le) && !!p(le);
				return Ge ? "/rulesets/managed" : "/rulesets"
			},
			hasPermission: function(le) {
				return !!H(le)
			}
		}, {
			title: "navigation.account.firewall_rulesets.magic_firewall",
			url: "/rulesets/magic_firewall",
			testId: "account-magic-firewall-rules",
			hasPermission: function(le) {
				return !!x(le)
			}
		}, {
			title: "navigation.account.firewall_rulesets.browse_rulesets",
			url: "/rulesets/custom"
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(le) {
			return F(le)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(le) {
				return g(le)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(le) {
				return g(le)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(le) {
				return g(le)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		labels: ["new"],
		hasPermission: function(le) {
			return F(le) && !!(0, R.getAccountFlipperFlag)(le, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(le) {
				return w(le)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(le) {
				return w(le)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(le) {
				return w(le)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit/waitlist",
			hasPermission: function(le) {
				return w(le)
			}
		}, {
			title: "navigation.account.images.sourcing_kit_dev",
			url: "/images/sourcing-kit/d",
			labels: ["beta"],
			hasPermission: function(le) {
				return K(le)
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(le) {
			return F(le) && (0, pe.sL)(le)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(le) {
				return F(le) && (0, pe.sL)(le)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(le) {
				return F(le) && (0, pe.sL)(le)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(le) {
				return F(le) && (0, pe.TT)(le)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(le) {
				return F(le) && (0, pe.jD)(le)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(le) {
				return F(le) && (0, pe.BU)(le)
			}
		}]
	}, {
		title: "navigation.account.teams",
		url: "https://dash.teams.cloudflare.com",
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(le) {
			return F(le)
		}
	}, {
		title: "navigation.account.ip_prefixes",
		url: "/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		hasPermission: function(le) {
			return F(le) && !!(0, R.getAccountFlipperFlag)(le, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(le) {
			return F(le) && !!(0, R.getAccountFlipperFlag)(le, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(le) {
			return F(le) && !!(0, R.getAccountFlipperFlag)(le, "magic_wan", "mw_home")
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(le) {
			return F(le)
		}
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(le) {
			return F(le)
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
			hasPermission: function(le) {
				return F(le)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(le) {
				return (0, D.b)(le) ? F(le) : (0, R.getPermission)(le)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(le) {
				return F(le)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(le) {
				return F(le)
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
		hasPermission: function(le) {
			return L(le, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			hasPermission: function(le) {
				var Ge = (0, z.getZone)(le);
				return Ge ? !!(!(0, r.zoneIsDNSOnly)(le) && !!(0, z.getZoneFlipperFlag)(le, "origin_reachability_dash", "dash_view") && (0, z.isPlanAtLeast)(Ge, "enterprise") && !!(0, J.getZoneGraphQLSettingEnabled)(le, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			hasPermission: function(le) {
				var Ge = (0, z.getZone)(le);
				return Ge ? !!(!(0, r.zoneIsDNSOnly)(le) && !!(0, z.getZoneFlipperFlag)(le, "edge_reachability_dash", "dash_view") && (0, z.isPlanAtLeast)(Ge, "enterprise") && !!(0, J.getZoneGraphQLSettingEnabled)(le, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			hasPermission: function(le) {
				return Object.values((0, ne.H_)(le)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le) && !!(0, z.getZoneFlipperFlag)(le, "logs", "instant_log") && !!(0, r.getZoneEntitlement)(le, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(le) {
			return L(le, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.email",
		url: "/email",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		labels: ["beta"],
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "dns_records", "dns-record")
		}
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(le) {
			var Ge = (0, z.getZone)(le);
			if ((0, r.zoneIsDNSOnly)(le) || !q(le, "zone_settings", "spectrum.app") || !Ge) return !1;
			var ut = !!((0, ie.userHasEntZones)(le) || (0, z.userHasDelegatedEntZones)(le)),
				ft = !!(0, z.getZoneFlipperFlag)(le, "spectrum", "enabled"),
				pt = !!(0, z.isFree)(Ge);
			return ft || ut || !pt
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "ssl", "ssl.cert")
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
			hasPermission: function(le) {
				return (0, r.hasAccountEntitlement)(le, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			hasPermission: function(le) {
				return !!(0, de.z1)("client-certificates")(le) || !!(0, z.getZoneFlipperFlag)(le, "ssl", "client_certificates")
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
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "waf", "firewall.rule")
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
			hasPermission: function(le) {
				return !!(0, R.getAccountFlipperFlag)(le, "bots", "paygo")
			}
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			hasPermission: function(le) {
				return (0, r.hasZoneEntitlement)(le, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			hasPermission: function(le) {
				var Ge = (0, z.getZone)(le);
				return Ge ? !!(0, z.getZoneFlipperFlag)(le, "firewall", "api_shield_tab") && (0, z.isPlanAtLeast)(Ge, "business") : !1
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
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && (q(le, "access", "access.app") || q(le, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "setting")
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
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "setting")
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
			hasPermission: function(le) {
				return F(le)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(le) {
				return !!Y(le)
			}
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && q(le, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "page-rule")
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
			url: function(le) {
				var Ge = (0, R.getAccount)(le);
				return "/".concat(Ge == null ? void 0 : Ge.id, "/bulk-redirects")
			},
			hasPermission: function(le) {
				return F(le)
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(le) {
				return !!(0, z.getZoneFlipperFlag)(le, "page_rules", "normalization") && L(le, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		hasPermission: function(le) {
			return L(le, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			hasPermission: function(le) {
				return F(le)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			hasPermission: function(le) {
				return F(le)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le) && !!(0, J.getZoneGraphQLSettingEnabled)(le, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le) && ((0, r.hasZoneEntitlement)(le, "waiting_rooms.allowed") || !!(0, z.getZoneFlipperFlag)(le, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		labels: function(le) {
			var Ge = [],
				ut = (0, z.getZone)(le);
			return ut && !(0, z.isPlanAtLeast)(ut, "pro") && Ge.push("beta"), Ge
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools",
			url: "/zaraz"
		}, {
			title: "navigation.zone.zaraz.triggers",
			url: "/zaraz/triggers"
		}, {
			title: "navigation.zone.zaraz.consent",
			hasPermission: function(le) {
				var Ge = (0, z.getZone)(le);
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
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "ssl", "ssl.cert")
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
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			hasPermission: function(le) {
				return !!(0, R.getAccountFlipperFlag)(le, "bots", "paygo")
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
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(le) {
				return F(le)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(le) {
				return L(le, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(le) {
				return !!(0, z.getZoneFlipperFlag)(le, "page_rules", "normalization") && L(le, "waf", "page-rule", "update")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(le) {
			return L(le, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(le) {
				return !(0, r.zoneIsDNSOnly)(le)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(le) {
			return !(0, r.zoneIsDNSOnly)(le) && L(le, "zone_settings", "setting")
		}
	}]
}