"use strict";
(function() {
	function cr(e, t, a, o, i, c, s) {
		try {
			var d = e[c](s),
				p = d.value
		} catch (f) {
			a(f);
			return
		}
		d.done ? t(p) : Promise.resolve(p).then(o, i)
	}

	function sr(e) {
		return function() {
			var t = this,
				a = arguments;
			return new Promise(function(o, i) {
				var c = e.apply(t, a);

				function s(p) {
					cr(c, o, i, s, d, "next", p)
				}

				function d(p) {
					cr(c, o, i, s, d, "throw", p)
				}
				s(void 0)
			})
		}
	}

	function Re(e, t, a) {
		return t in e ? Object.defineProperty(e, t, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = a, e
	}

	function M(e, t) {
		"@swc/helpers - instanceof";
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
	}

	function _e(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(i) {
				return Object.getOwnPropertyDescriptor(a, i).enumerable
			}))), o.forEach(function(i) {
				Re(e, i, a[i])
			})
		}
		return e
	}

	function _a(e, t) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(i) {
				return Object.getOwnPropertyDescriptor(e, i).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function St(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _a(Object(t)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
		}), e
	}

	function dr(e) {
		if (Array.isArray(e)) return e
	}

	function fr(e, t) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				i = !0,
				c = !1,
				s, d;
			try {
				for (a = a.call(e); !(i = (s = a.next()).done) && (o.push(s.value), !(t && o.length === t)); i = !0);
			} catch (p) {
				c = !0, d = p
			} finally {
				try {
					!i && a.return != null && a.return()
				} finally {
					if (c) throw d
				}
			}
			return o
		}
	}

	function pr() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Rt(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
		return o
	}

	function vr(e, t) {
		if (e) {
			if (typeof e == "string") return Rt(e, t);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Rt(e, t)
		}
	}

	function Ve(e, t) {
		return dr(e) || fr(e, t) || vr(e, t) || pr()
	}

	function P(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function mr(e, t) {
		var a, o, i, c = {
				label: 0,
				sent: function() {
					if (i[0] & 1) throw i[1];
					return i[1]
				},
				trys: [],
				ops: []
			},
			s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype),
			d = Object.defineProperty;
		return d(s, "next", {
			value: p(0)
		}), d(s, "throw", {
			value: p(1)
		}), d(s, "return", {
			value: p(2)
		}), typeof Symbol == "function" && d(s, Symbol.iterator, {
			value: function() {
				return this
			}
		}), s;

		function p(v) {
			return function(I) {
				return f([v, I])
			}
		}

		function f(v) {
			if (a) throw new TypeError("Generator is already executing.");
			for (; s && (s = 0, v[0] && (c = 0)), c;) try {
				if (a = 1, o && (i = v[0] & 2 ? o.return : v[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, v[1])).done) return i;
				switch (o = 0, i && (v = [v[0] & 2, i.value]), v[0]) {
					case 0:
					case 1:
						i = v;
						break;
					case 4:
						return c.label++, {
							value: v[1],
							done: !1
						};
					case 5:
						c.label++, o = v[1], v = [0];
						continue;
					case 7:
						v = c.ops.pop(), c.trys.pop();
						continue;
					default:
						if (i = c.trys, !(i = i.length > 0 && i[i.length - 1]) && (v[0] === 6 || v[0] === 2)) {
							c = 0;
							continue
						}
						if (v[0] === 3 && (!i || v[1] > i[0] && v[1] < i[3])) {
							c.label = v[1];
							break
						}
						if (v[0] === 6 && c.label < i[1]) {
							c.label = i[1], i = v;
							break
						}
						if (i && c.label < i[2]) {
							c.label = i[2], c.ops.push(v);
							break
						}
						i[2] && c.ops.pop(), c.trys.pop();
						continue
				}
				v = t.call(e, c)
			} catch (I) {
				v = [6, I], o = 0
			} finally {
				a = i = 0
			}
			if (v[0] & 5) throw v[1];
			return {
				value: v[0] ? v[1] : void 0,
				done: !0
			}
		}
	}
	var gr = 300,
		yr = 10,
		hr = 200500,
		br = 300020,
		tt = 300030,
		rt = 300031;

	function kt(e) {
		var t = new URLSearchParams;
		if (e.params.botnet && t.set("botnet", "true"), e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel), e.params._debugSitekeyOverrides.offlabelShowPrivacy && e.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default" && t.set("offlabel_show_privacy", e.params._debugSitekeyOverrides.offlabelShowPrivacy), e.params._debugSitekeyOverrides.offlabelShowHelp && e.params._debugSitekeyOverrides.offlabelShowHelp !== "default" && t.set("offlabel_show_help", e.params._debugSitekeyOverrides.offlabelShowHelp)), e.params._debugForceLoopFeedback && t.set("force_loop_feedback", "true"), e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var at = "cf-chl-widget-",
		K = "cloudflare-challenge",
		_r = ".cf-turnstile",
		xr = ".cf-challenge",
		Er = ".g-recaptcha",
		wr = "cf_challenge_response",
		Tr = "cf-turnstile-response",
		Ir = "g-recaptcha-response",
		Ar = 8e3,
		Sr = 10800 * 1e3,
		Ot = "private-token",
		Rr = 3,
		kr = 500,
		Or = 500,
		fe = "",
		Ct = "_cftscs_",
		Cr = 512;
	var pe = (function(e) {
			return e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible", e
		})({}),
		G = (function(e) {
			return e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible", e
		})({}),
		nt = (function(e) {
			return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e
		})({}),
		it = (function(e) {
			return e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain", e
		})({}),
		ot = (function(e) {
			return e.Never = "never", e.Auto = "auto", e
		})({}),
		ke = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		Be = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		ve = (function(e) {
			return e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only", e
		})({}),
		He = (function(e) {
			return e.Render = "render", e.Execute = "execute", e
		})({}),
		lt = (function(e) {
			return e.Execute = "execute", e
		})({}),
		X = (function(e) {
			return e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun", e
		})({});

	function B(e, t) {
		return e.indexOf(t) !== -1
	}
	var xa = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Ea = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		Mr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function ut(e, t, a) {
		var o, i = "https://challenges.cloudflare.com",
			c = (o = a == null ? void 0 : a.origin) !== null && o !== void 0 ? o : i;
		if (t) {
			var s;
			return (s = e["base-url"]) !== null && s !== void 0 ? s : c
		}
		return c
	}

	function Mt(e, t, a, o, i, c, s, d, p) {
		var f = ut(a, i, d),
			v = c ? "h/".concat(c, "/") : "",
			I = p ? "&".concat(p) : "",
			w = a["feedback-enabled"] === !1 ? "fbD" : "fbE",
			R = a.chlPageOfflabel ? "&offlabel=true" : "";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(w, "/").concat(s, "/").concat(a.size, "?lang=").concat(a.language).concat(R).concat(I)
	}
	var Lt = function(t) {
			var a, o, i, c, s = window.innerWidth < 400,
				d = t.state !== it.FailureFeedbackCode && (t.state === it.FailureFeedback || t.state === it.FailureHavingTroubles || !t.errorCode),
				p = B(xa, (a = (i = t.displayLanguage) === null || i === void 0 ? void 0 : i.toLowerCase()) !== null && a !== void 0 ? a : "nonexistent"),
				f = B(Ea, (o = (c = t.displayLanguage) === null || c === void 0 ? void 0 : c.toLowerCase()) !== null && o !== void 0 ? o : "nonexistent");
			return s ? wa({
				isModeratelyVerbose: f,
				isSmallerFeedback: d,
				isVerboseLanguage: p
			}) : d && p ? "680px" : d && f ? "670px" : d ? "650px" : p ? "690px" : "680px"
		},
		wa = function(t) {
			var a = t.isVerboseLanguage,
				o = t.isSmallerFeedback,
				i = t.isModeratelyVerbose;
			return o && a ? "660px" : o && i ? "620px" : o ? "600px" : a ? "770px" : i ? "740px" : "730px"
		};

	function xe(e) {
		return xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, xe(e)
	}

	function ze() {
		try {
			var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
		} catch (t) {}
		return (ze = function() {
			return !!e
		})()
	}

	function Lr(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Nr(e, t) {
		return t && (P(t) === "object" || typeof t == "function") ? t : Lr(e)
	}

	function Pr(e, t, a) {
		return t = xe(t), Nr(e, ze() ? Reflect.construct(t, a || [], xe(e).constructor) : t.apply(e, a))
	}

	function Fr(e, t) {
		if (!M(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function ye(e, t) {
		return ye = Object.setPrototypeOf || function(o, i) {
			return o.__proto__ = i, o
		}, ye(e, t)
	}

	function Ur(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && ye(e, t)
	}

	function qe(e, t, a) {
		return ze() ? qe = Reflect.construct : qe = function(i, c, s) {
			var d = [null];
			d.push.apply(d, c);
			var p = Function.bind.apply(i, d),
				f = new p;
			return s && ye(f, s.prototype), f
		}, qe.apply(null, arguments)
	}

	function Wr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function ct(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return ct = function(o) {
			if (o === null || !Wr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, i)
			}

			function i() {
				return qe(o, arguments, xe(this).constructor)
			}
			return i.prototype = Object.create(o.prototype, {
				constructor: {
					value: i,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ye(i, o)
		}, ct(e)
	}
	var Dr = (function(e) {
		"use strict";
		Ur(t, e);

		function t(a, o) {
			Fr(this, t);
			var i;
			return i = Pr(this, t, [a]), Re(i, "code", void 0), i.name = "TurnstileError", i.code = o, i
		}
		return t
	})(ct(Error));
	var Ta = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;

	function y(e, t) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Dr(a, t)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function je(e) {
		return e.startsWith(at) ? e.slice(at.length) : null
	}

	function J(e) {
		return "".concat(at).concat(e)
	}

	function st(e, t) {
		var a = !0,
			o = !1,
			i = void 0;
		try {
			for (var c = Object.getOwnPropertySymbols(e)[Symbol.iterator](), s; !(a = (s = c.next()).done); a = !0) {
				var d = s.value,
					p, f = (p = Object.getOwnPropertyDescriptor(e, d)) === null || p === void 0 ? void 0 : p.value;
				if (t(f)) return f
			}
		} catch (v) {
			o = !0, i = v
		} finally {
			try {
				!a && c.return != null && c.return()
			} finally {
				if (o) throw i
			}
		}
	}

	function Ge() {
		var e = Ta,
			t = document.currentScript;
		if (M(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var a = document.querySelectorAll("script"), o = 0, i; i = a[o]; o++)
			if (M(i, HTMLScriptElement) && e.test(i.src)) return i
	}

	function Vr() {
		var e = Ge();
		e || y("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			a;
		try {
			a = new URL(t)
		} catch (c) {
			y("Could not parse Turnstile script tag URL", 43777)
		}
		var o = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: a
		};
		(e.async || e.defer) && (o.loadedAsync = !0);
		var i = t.split("?");
		return i.length > 1 && (o.params = new URLSearchParams(i[1])), o
	}

	function $() {
		return Date.now()
	}

	function Oe(e) {
		try {
			return new URL(e, window.location.href).origin
		} catch (t) {
			return
		}
	}

	function Nt(e, t, a) {
		if (!a) {
			if (0) var o;
			return
		}
		e == null || e.postMessage(t, a)
	}

	function me(e, t, a) {
		Nt(e.contentWindow, t, a)
	}
	var Ia = 5e3,
		Aa = "auto-troubleshoot-click";

	function Sa(e, t) {
		var a = ut(e.params, !1, t),
			o = "h/".concat("g", "/");
		return "".concat(a, "/cdn-cgi/challenge-platform/").concat(o, "feedback-reports")
	}
	var zr = function(t, a, o, i, c) {
		var s, d, p, f, v, I, w;
		if (!i || !o) return !1;
		var R = Sa(t, c),
			_ = new FormData;
		_.append("consent", "on"), _.append("origin", a), _.append("issue", Aa), _.append("description", ""), _.append("rayId", o), _.append("sitekey", (s = t.params.sitekey) !== null && s !== void 0 ? s : ""), _.append("rcV", (d = t.rcV) !== null && d !== void 0 ? d : ""), _.append("cfChlOut", (p = t.cfChlOut) !== null && p !== void 0 ? p : ""), _.append("cfChlOutS", (f = t.cfChlOutS) !== null && f !== void 0 ? f : ""), _.append("mode", (v = t.mode) !== null && v !== void 0 ? v : ""), _.append("errorCode", String((I = t.errorCode) !== null && I !== void 0 ? I : 0)), _.append("frMd", i), _.append("displayLanguage", (w = t.displayLanguage) !== null && w !== void 0 ? w : "");
		try {
			if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(R, _)) return !0
		} catch (L) {
			x("auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(Pt(L), ")"))
		}
		try {
			return fetch(R, _e({
				body: _,
				keepalive: !0,
				method: "POST",
				mode: "no-cors"
			}, Br())), !0
		} catch (L) {
			x("auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(Pt(L), ")"))
		}
		try {
			fetch(R, _e({
				body: _,
				method: "POST",
				mode: "no-cors"
			}, Br()))
		} catch (L) {
			x("auto feedback report: all transports failed (".concat(Pt(L), ")"))
		}
		return !1
	};

	function Br() {
		return typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function" ? {} : {
			signal: AbortSignal.timeout(Ia)
		}
	}

	function Pt(e) {
		return M(e, Error) ? e.message : "unknown error"
	}
	var Ft = Symbol(),
		Ra = "host-origin",
		Ce = function(t) {
			t.feedbackPopup && !t.feedbackPopup.closed && t.feedbackPopup.close(), t.feedbackPopup = void 0, t.feedbackPopupOrigin = void 0
		};

	function qr(e) {
		return e.endsWith("-fr") ? e : "".concat(e, "-fr")
	}

	function jr(e) {
		var t, a, o, i = (o = document.getElementById(e)) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 ? void 0 : t.parentElement;
		return M(i, HTMLDivElement) ? i : null
	}

	function Hr(e) {
		var t;
		if (!((typeof e == "undefined" ? "undefined" : P(e)) !== "object" || e === null)) {
			var a = (t = Object.getOwnPropertyDescriptor(e, "cleanup")) === null || t === void 0 ? void 0 : t.value;
			return typeof a == "function" ? a : void 0
		}
	}

	function Gr(e) {
		var t, a = Hr((t = Object.getOwnPropertyDescriptor(e, Ft)) === null || t === void 0 ? void 0 : t.value);
		if (a) return a;
		var o = !0,
			i = !1,
			c = void 0;
		try {
			for (var s = Object.getOwnPropertySymbols(e)[Symbol.iterator](), d; !(o = (d = s.next()).done); o = !0) {
				var p = d.value,
					f, v = Hr((f = Object.getOwnPropertyDescriptor(e, p)) === null || f === void 0 ? void 0 : f.value);
				if (v) return v
			}
		} catch (I) {
			i = !0, c = I
		} finally {
			try {
				!o && s.return != null && s.return()
			} finally {
				if (i) throw c
			}
		}
	}

	function ka(e, t) {
		Object.defineProperty(e, Ft, {
			configurable: !0,
			enumerable: !1,
			value: {
				cleanup: t
			}
		})
	}

	function Oa(e) {
		Reflect.deleteProperty(e, Ft)
	}

	function Ca(e) {
		var t = new URL(e, window.location.href),
			a = new URLSearchParams(t.hash.startsWith("#") ? t.hash.slice(1) : t.hash);
		return a.set(Ra, window.location.origin), t.hash = a.toString(), t.toString()
	}
	var Ut = function(t, a, o, i) {
			var c, s, d = qr(t),
				p = ut(a.params, !1, i),
				f = "h/".concat("g", "/"),
				v = Ca("".concat(p, "/cdn-cgi/challenge-platform/").concat(f, "feedback-reports/").concat(je(t), "/").concat(a.displayLanguage, "/").concat((s = a.params.theme) !== null && s !== void 0 ? s : a.theme, "/").concat(o));
			if (Ce(a), window.top !== window.self) {
				var I = window.open(v, "_blank");
				if (I) {
					a.feedbackPopupOrigin = Oe(v), a.feedbackPopup = I;
					return
				}
				x("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
			}
			a.wrapper.parentNode || y("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3074);
			var w = jr(d);
			if (w) {
				var R;
				(R = Gr(w)) === null || R === void 0 || R()
			}
			var _ = document.createElement("div");
			_.style.position = "fixed", _.style.zIndex = "2147483646", _.style.width = "100vw", _.style.height = "100vh", _.style.top = "0", _.style.left = "0", _.style.transformOrigin = "center center", _.style.overflowX = "hidden", _.style.overflowY = "auto", _.style.background = "rgba(0,0,0,0.4)";
			var L = document.createElement("div");
			L.className = "cf-wrapper-turnstile-feedback", L.style.display = "table-cell", L.style.verticalAlign = "middle", L.style.width = "100vw", L.style.height = "100vh";
			var A = document.createElement("div");
			A.className = "cf-turnstile-feedback", A.id = "cf-fr-id", A.style.width = "100vw", A.style.maxWidth = "500px", A.style.height = Lt(a), A.style.position = "relative", A.style.zIndex = "2147483647", A.style.backgroundColor = "#ffffff", A.style.borderRadius = "5px", A.style.left = "0px", A.style.top = "0px", A.style.overflow = "hidden", A.style.margin = "0px auto";
			var j = function() {
					A.style.height = Lt(a)
				},
				Y = function() {
					var Z;
					Oa(_), a.feedbackIframeOrigin = void 0, window.removeEventListener("resize", j), (Z = _.parentNode) === null || Z === void 0 || Z.removeChild(_)
				},
				D = document.createElement("iframe");
			D.id = d, D.setAttribute("src", v), D.setAttribute("allow", "cross-origin-isolated; fullscreen"), D.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), D.setAttribute("scrolling", "yes"), D.style.borderWidth = "0px", D.style.width = "100%", D.style.height = "100%", D.style.overflow = "auto", a.feedbackIframeOrigin = Oe(v);
			var C = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			C.setAttribute("tabindex", "0"), C.setAttribute("role", "img"), C.setAttribute("aria-label", "Close button icon"), C.style.position = "absolute", C.style.width = "26px", C.style.height = "26px", C.style.zIndex = "2147483647", C.style.cursor = "pointer", a.displayRtl ? C.style.left = "24px" : C.style.right = "24px", C.style.top = "24px", C.setAttribute("width", "20"), C.setAttribute("height", "20"), C.addEventListener("click", function(z) {
				z.stopPropagation(), Y()
			}), C.addEventListener("keydown", function(z) {
				(z.key === "Enter" || z.key === " ") && (z.stopPropagation(), Y())
			});
			var V = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			V.setAttribute("ry", "12"), V.setAttribute("rx", "12"), V.setAttribute("cy", "12"), V.setAttribute("cx", "12"), V.setAttribute("fill", "none"), V.setAttribute("stroke-width", "0"), C.appendChild(V);
			var F = document.createElementNS("http://www.w3.org/2000/svg", "line");
			F.setAttribute("stroke-width", "1"), F.setAttribute("fill", "none"), F.setAttribute("x1", "6"), F.setAttribute("x2", "18"), F.setAttribute("y1", "18"), F.setAttribute("y2", "5");
			var O = document.createElementNS("http://www.w3.org/2000/svg", "line");
			O.setAttribute("stroke-width", "1"), O.setAttribute("fill", "none"), O.setAttribute("x1", "6"), O.setAttribute("x2", "18"), O.setAttribute("y1", "5"), O.setAttribute("y2", "18"), a.theme === nt.Light ? (F.setAttribute("stroke", "#0A0A0A"), O.setAttribute("stroke", "#0A0A0A")) : (F.setAttribute("stroke", "#F2F2F2"), O.setAttribute("stroke", "#F2F2F2")), C.appendChild(F), C.appendChild(O), A.appendChild(D), A.appendChild(C), L.appendChild(A), _.appendChild(L), _.addEventListener("click", Y), a.wrapper.parentNode.appendChild(_), window.addEventListener("resize", j), ka(_, Y)
		},
		Xe = function(t) {
			var a, o = qr(t),
				i = jr(o);
			if (i) {
				var c = Gr(i);
				if (c) {
					c();
					return
				}
				x("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (a = i.parentNode) === null || a === void 0 || a.removeChild(i)
			}
		};

	function Xr(e, t) {
		return e ? t ? !0 : B(Mr, e) : !1
	}
	var Yr = (function(e) {
		return e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom", e.TimeMismatch = "timemismatch", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain", e
	})({});
	var Wt = function(t) {
		var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return t.length > a ? t.slice(0, a) : t
	};

	function Kr(e) {
		if (!e) return "-";
		var t = function(o, i) {
			if (!o || o.tagName === "BODY") return i;
			for (var c = 1, s = o.previousElementSibling; s;) s.tagName === o.tagName && c++, s = s.previousElementSibling;
			var d = Wt(o.tagName.toLowerCase()),
				p = "".concat(d, "[").concat(c, "]");
			return t(o.parentNode, "/".concat(p).concat(i))
		};
		return t(e, "")
	}

	function Jr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Ma = {
		button: "b",
		checkbox: "c",
		email: "e",
		hidden: "h",
		number: "n",
		password: "p",
		radio: "r",
		select: "sl",
		submit: "s",
		text: "t",
		textarea: "ta"
	};

	function Qr(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var a = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = a.slice(0, 20).map(function(c) {
				return Ma[c.type] || "-"
			}).join(""),
			i = ["m:".concat(t.getAttribute("method") || ""), "f:".concat(a.length), o].join("|");
		return i
	}

	function $r(e, t, a) {
		for (var o = "", i = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), c;
			(c = i.nextNode()) !== null && o.length < a;) {
			for (var s = 0, d = c; d !== null && d !== e;) s++, d = d.parentNode;
			if (!(s > t))
				if (c.nodeType === Node.ELEMENT_NODE) {
					var p = c;
					o += "".concat(Wt(p.tagName.toLowerCase()));
					var f = !0,
						v = !1,
						I = void 0;
					try {
						for (var w = Array.from(p.attributes)[Symbol.iterator](), R; !(f = (R = w.next()).done); f = !0) {
							var _ = R.value;
							o += "_".concat(Wt(_.name, 2))
						}
					} catch (L) {
						v = !0, I = L
					} finally {
						try {
							!f && w.return != null && w.return()
						} finally {
							if (v) throw I
						}
					}
					o += ">"
				} else c.nodeType === Node.TEXT_NODE && (o += "-t")
		}
		return o.slice(0, a)
	}

	function Zr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : P(e)));
		for (var t = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function ea() {
		for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, t = e; t && t.top !== t && !t.location.href.startsWith("http");) t = t.top;
		return t == null ? void 0 : t.location.href
	}
	var La = 900,
		Na = 45,
		Pa = 50;

	function Fa(e, t, a) {
		var o = e.widgetMap.get(t);
		(o == null ? void 0 : o.retryTimeout) !== void 0 && (window.clearTimeout(o.retryTimeout), o.retryTimeout = void 0), x("Cannot find Widget ".concat(a, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(t)
	}

	function Ua(e) {
		e.watchCatSeq++;
		var t = [],
			a = !0,
			o = !1,
			i = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), s; !(a = (s = c.next()).done); a = !0) {
				var d = Ve(s.value, 2),
					p = d[0],
					f = d[1],
					v = J(p);
				if (!v || !f.shadow || !f.wrapper.isConnected) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: p
					}));
					continue
				}
				var I = f.shadow.querySelector("#".concat(v));
				if (!I) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: p
					}));
					continue
				}
				if (f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq), !(f.isComplete || f.isFailed)) {
					var w = f.watchcat.seq - 1 - Na,
						R = f.watchcat.lastAckedSeq < w,
						_ = f.watchcat.seq - 1 - Pa,
						L = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < _;
					if ((f.isExecuting || !f.isInitialized || f.isInitialized && !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && R || L) {
						var A, j;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var Y = function(r, u) {
							console.log("Turnstile Widget seem to have ".concat(r, ": "), u)
						};
						Y(R ? "hung" : "crashed", p);
						var D = R ? tt : rt;
						if ((j = e.internalMsgHandler) === null || j === void 0 || j.call(e, {
								code: D,
								event: "fail",
								rcV: (A = f.nextRcV) !== null && A !== void 0 ? A : fe,
								source: K,
								widgetId: p
							}), 0) var C;
						continue
					}
					me(I, {
						event: "meow",
						seq: e.watchCatSeq,
						source: K,
						widgetId: p
					}, f.iframeOrigin)
				}
			}
		} catch (l) {
			o = !0, i = l
		} finally {
			try {
				!a && c.return != null && c.return()
			} finally {
				if (o) throw i
			}
		}
		var V = !0,
			F = !1,
			O = void 0;
		try {
			for (var z = t[Symbol.iterator](), Z; !(V = (Z = z.next()).done); V = !0) {
				var he = Z.value,
					E = he.widgetElId,
					n = he.widgetId;
				Fa(e, n, E)
			}
		} catch (l) {
			F = !0, O = l
		} finally {
			try {
				!V && z.return != null && z.return()
			} finally {
				if (F) throw O
			}
		}
		t.length > 0 && e.widgetMap.size === 0 && Ye(e)
	}

	function Dt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Ua(e)
		}, La))
	}

	function Ye(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var Bt = Symbol();

	function ta(e) {
		return (typeof e == "undefined" ? "undefined" : P(e)) === "object" && e !== null ? e : void 0
	}

	function Vt(e) {
		return (typeof e == "undefined" ? "undefined" : P(e)) === "object" && e !== null && "widgetMap" in e && M(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
	}

	function Wa(e, t) {
		Object.defineProperty(e, Bt, {
			configurable: !0,
			enumerable: !1,
			value: t
		})
	}

	function Da(e) {
		var t, a = (t = Object.getOwnPropertyDescriptor(e, Bt)) === null || t === void 0 ? void 0 : t.value;
		if (Vt(a)) return a;
		var o = st(e, Vt);
		if (o) return o
	}

	function ra(e) {
		Reflect.deleteProperty(e, Bt);
		var t = !0,
			a = !1,
			o = void 0;
		try {
			for (var i = Object.getOwnPropertySymbols(e)[Symbol.iterator](), c; !(t = (c = i.next()).done); t = !0) {
				var s = c.value,
					d, p = (d = Object.getOwnPropertyDescriptor(e, s)) === null || d === void 0 ? void 0 : d.value;
				Vt(p) && Reflect.deleteProperty(e, s)
			}
		} catch (f) {
			a = !0, o = f
		} finally {
			try {
				!t && i.return != null && i.return()
			} finally {
				if (a) throw o
			}
		}
	}

	function aa(e, t) {
		var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ge;
		t.upgradeAttempts++;
		var o = a();
		if (!(o != null && o.parentNode)) return !1;
		var i = ta(e);
		if (!i) return !1;
		var c = o == null ? void 0 : o.nonce;
		Wa(i, t);
		var s = new URL(o.src),
			d = document.createElement("script");
		s.searchParams.set("_upgrade", "true"), s.searchParams.set("_cb", String(Date.now())), d.async = !0, c && (d.nonce = c), d.setAttribute("crossorigin", "anonymous"), d.src = s.toString();
		try {
			return o.parentNode.replaceChild(d, o), !0
		} catch (p) {
			if (!M(p, DOMException)) throw p;
			return ra(i), !1
		}
	}

	function na(e, t, a) {
		var o = ta(e);
		if (!o) return !1;
		var i = Da(o);
		return i ? (t.isReady = i.isReady, t.isRecaptchaCompatibilityMode = i.isRecaptchaCompatibilityMode, t.lastWidgetIdx = i.lastWidgetIdx, t.scriptWasLoadedAsync = i.scriptWasLoadedAsync, t.upgradeAttempts = i.upgradeAttempts, t.upgradeCompletedCount = i.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = $(), t.watchCatInterval = null, t.watchCatSeq = i.watchCatSeq, t.widgetMap = i.widgetMap, Ye(i, !0), i.msgHandler && window.removeEventListener("message", i.msgHandler), ra(o), a(), !0) : !1
	}

	function Ht(e) {
		return B(["auto", "dark", "light"], e)
	}

	function zt(e) {
		return B(["auto", "never"], e)
	}

	function qt(e) {
		return e > 0 && e < 9e5
	}

	function jt(e) {
		return e > 0 && e < 36e4
	}
	var Va = /^[0-9A-Za-z_-]{3,100}$/;

	function ia(e) {
		return Va.test(e)
	}
	var Ba = /^[a-z0-9_-]{0,32}$/i;

	function Gt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ba.test(e)
	}
	var Ha = /^[a-z0-9_\-=]{0,255}$/i;

	function Xt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ha.test(e)
	}

	function Yt(e) {
		return B([G.Normal, G.Compact, G.Invisible, G.Flexible], e)
	}

	function Kt(e) {
		return B(["auto", "manual", "never"], e)
	}

	function Jt(e) {
		return B(["auto", "manual", "never"], e)
	}
	var za = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Qt(e) {
		return e === "auto" || za.test(e)
	}

	function $t(e) {
		return B(["always", "execute", "interaction-only"], e)
	}

	function oa(e) {
		return B(["true", "false"], e)
	}

	function Zt(e) {
		return B(["render", "execute"], e)
	}

	function la(e, t) {
		if (e.isResetting = !1, t) {
			t(String(hr));
			return
		}
		y("Could not load challenge from challenges.cloudflare.com.", 161)
	}
	var va = Symbol(),
		qa = "Turnstile has already been rendered in this container. The render attempt was rejected.",
		ja = "Turnstile skipped implicit render because a widget already exists in this container.",
		we = window;

	function ua(e) {
		return (typeof e == "undefined" ? "undefined" : P(e)) === "object" && e !== null && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
	}

	function ca(e) {
		var t;
		if (!((typeof e == "undefined" ? "undefined" : P(e)) !== "object" || e === null)) {
			var a = (t = Object.getOwnPropertyDescriptor(e, va)) === null || t === void 0 ? void 0 : t.value;
			if (ua(a)) return a;
			var o = st(e, ua);
			if (o) return o
		}
	}
	var h = {
			apiVersion: 1,
			isReady: !1,
			isRecaptchaCompatibilityMode: !1,
			lastWidgetIdx: 0,
			scriptUrl: "undefined",
			scriptUrlParsed: void 0,
			scriptWasLoadedAsync: !1,
			turnstileLoadInitTimeTsMs: $(),
			upgradeAttempts: 0,
			upgradeCompletedCount: 0,
			watchCatInterval: null,
			watchCatSeq: 0,
			widgetMap: new Map
		},
		Qe;

	function Ga(e) {
		var t = !0,
			a = !1,
			o = void 0;
		try {
			for (var i = h.widgetMap[Symbol.iterator](), c; !(t = (c = i.next()).done); t = !0) {
				var s = Ve(c.value, 2),
					d = s[0],
					p = s[1];
				if (p.wrapper.parentElement === e || p.wrapper !== e && p.wrapper.contains(e) || p.shadow.contains(e)) return d
			}
		} catch (f) {
			a = !0, o = f
		} finally {
			try {
				!t && i.return != null && i.return()
			} finally {
				if (a) throw o
			}
		}
		return null
	}

	function dt(e) {
		if (typeof e == "string") {
			var t = je(e);
			return t && h.widgetMap.has(t) ? t : h.widgetMap.has(e) ? e : null
		}
		return Ga(e)
	}

	function Xa(e) {
		return e === "implicit" ? ja : qa
	}

	function sa(e, t) {
		return e === "explicit" && (t == null ? void 0 : t.renderSource) === "implicit"
	}

	function ma() {
		Qe !== void 0 && (window.clearTimeout(Qe), Qe = void 0)
	}

	function ar() {
		ma(), Qe = window.setTimeout(function() {
			Qe = void 0, on()
		}, Sr)
	}

	function er(e, t) {
		ya(e, t, "")
	}
	var nr = [];

	function da() {
		h.isReady = !0;
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var o = nr[Symbol.iterator](), i; !(e = (i = o.next()).done); e = !0) {
				var c = i.value;
				c()
			}
		} catch (s) {
			t = !0, a = s
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw a
			}
		}
	}

	function fa(e, t) {
		e.onerror = function() {
			la(t, t.cbError)
		}
	}

	function ga(e, t) {
		var a, o, i = (a = e.params["response-field"]) !== null && a !== void 0 ? a : !0,
			c = i && typeof e.params["response-field-name"] != "string" && tn((o = e.params.sitekey) !== null && o !== void 0 ? o : ""),
			s = h.isRecaptchaCompatibilityMode,
			d = "".concat(t, "_response"),
			p = "".concat(t, "_legacy_response"),
			f = "".concat(t, "_g_response"),
			v = (!i || M(document.getElementById(d), HTMLInputElement)) && (!c || M(document.getElementById(p), HTMLInputElement)) && (!s || M(document.getElementById(f), HTMLInputElement));
		if (!(e.responseElementsBuilt && v)) {
			if (i && !M(document.getElementById(d), HTMLInputElement)) {
				var I, w = document.createElement("input");
				w.type = "hidden", w.name = (I = e.params["response-field-name"]) !== null && I !== void 0 ? I : Tr, w.id = d, e.wrapper.appendChild(w)
			}
			if (c && !M(document.getElementById(p), HTMLInputElement)) {
				var R = document.createElement("input");
				R.type = "hidden", R.name = wr, R.id = p, e.wrapper.appendChild(R)
			}
			if (s && !M(document.getElementById(f), HTMLInputElement)) {
				var _ = document.createElement("input");
				_.type = "hidden", _.name = Ir, _.id = f, e.wrapper.appendChild(_)
			}
			e.responseElementsBuilt = !0
		}
	}

	function ya(e, t, a) {
		ga(e, t);
		var o = document.getElementById("".concat(t, "_response"));
		o !== null && M(o, HTMLInputElement) && (o.value = a);
		var i = document.getElementById("".concat(t, "_legacy_response"));
		if (i !== null && M(i, HTMLInputElement) && (i.value = a), h.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(t, "_g_response"));
			c !== null && M(c, HTMLInputElement) && (c.value = a)
		}
	}

	function Je(e, t) {
		var a;
		return !!(!((a = t.kills) === null || a === void 0) && a.includes(e))
	}

	function ft(e, t) {
		var a = t.params,
			o = a.size,
			i = o === void 0 ? "normal" : o,
			c = t.mode;
		switch (c) {
			case pe.NonInteractive:
			case pe.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", i) {
					case G.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case G.Invisible:
						y('Invalid value for parameter "size", expected "'.concat(G.Compact, '", "').concat(G.Flexible, '", or "').concat(G.Normal, '", got "').concat(i, '"'), 2817);
					case G.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case G.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case pe.Invisible:
				Je("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				y('Invalid value for parameter "mode", expected "'.concat(pe.NonInteractive, '", "').concat(pe.Managed, '" or "').concat(pe.Invisible, '", got "').concat(c, '"'), 2818)
		}
	}

	function pa(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function Ya(e, t) {
		var a = t.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Le(e, t) {
		return e.shadow.querySelector("#".concat(t))
	}

	function Ka(e, t) {
		var a, o;
		return (a = (o = e.wrapper.parentNode) === null || o === void 0 ? void 0 : o.querySelector("#".concat(t, "-fr"))) !== null && a !== void 0 ? a : null
	}

	function Ja(e) {
		var t, a;
		return !((a = e.feedbackPopup) === null || a === void 0) && a.closed ? (e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) : (t = e.feedbackPopup) !== null && t !== void 0 ? t : null
	}

	function bt(e, t) {
		var a, o, i = (a = (o = Ka(e, t)) === null || o === void 0 ? void 0 : o.contentWindow) !== null && a !== void 0 ? a : null;
		if (i) return {
			targetOrigin: e.feedbackIframeOrigin,
			targetWindow: i
		};
		var c = Ja(e);
		return {
			targetOrigin: c ? e.feedbackPopupOrigin : void 0,
			targetWindow: c
		}
	}

	function Qa(e) {
		if ((typeof e == "undefined" ? "undefined" : P(e)) !== "object" || e === null) return !1;
		var t = e;
		return t.source === K && typeof t.event == "string" && typeof t.widgetId == "string"
	}

	function $a(e) {
		return e.isTrusted && Qa(e.data)
	}

	function Za(e) {
		return Xr(e.origin, !1)
	}

	function en(e, t, a) {
		var o, i, c = (o = (i = Le(t, a)) === null || i === void 0 ? void 0 : i.contentWindow) !== null && o !== void 0 ? o : null,
			s = bt(t, a).targetWindow,
			d = function(f) {
				return f !== null && e.source === f
			};
		switch (e.data.event) {
			case "requestFeedbackData":
			case "closeFeedbackReportIframe":
				return d(s);
			case "refreshRequest":
				return d(c) || e.data.reason === "feedback_refresh" && d(s);
			default:
				return d(c)
		}
	}

	function tn(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function tr() {
		return ea(window)
	}

	function pt(e, t, a) {
		return e === null ? t : oa(e) ? e === "true" : (x(a(e)), t)
	}

	function rn() {
		try {
			var e = Ge();
			if (!e) return;
			var t = e.src,
				a = !0,
				o = !1,
				i = void 0;
			try {
				for (var c = performance.getEntriesByType("resource")[Symbol.iterator](), s; !(a = (s = c.next()).done); a = !0) {
					var d = s.value;
					if (M(d, PerformanceResourceTiming) && d.name.includes(t)) return d
				}
			} catch (p) {
				o = !0, i = p
			} finally {
				try {
					!a && c.return != null && c.return()
				} finally {
					if (o) throw i
				}
			}
		} catch (p) {}
	}
	var ha = (function() {
			var e = function(n, l, r, u, b, m) {
					return sr(function() {
						var S, k, T, N, W, ee, Q, ce, ne, se, Ne;
						return mr(this, function(H) {
							switch (H.label) {
								case 0:
									if (k = function(re, ie) {
											var q = h.widgetMap.get(l);
											q !== n || q.isComplete || q.isResetting || q.response !== u || (!re && ie && x(ie), o(q, r, re))
										}, T = n.params.sitekey, N = tr(), !N) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), o(n, r, !1), [2];
									W = "h/".concat("g", "/"), ee = new URL(N), Q = "https", ce = "", ne = "".concat(Q, "://").concat(ee.host, "/cdn-cgi/challenge-platform/").concat(W, "rc/").concat(m).concat(ce), H.label = 1;
								case 1:
									return H.trys.push([1, 3, , 4]), [4, fetch(ne, {
										body: JSON.stringify({
											secondaryToken: b,
											sitekey: T
										}),
										headers: {
											"Content-Type": "application/json"
										},
										method: "POST",
										redirect: "manual"
									})];
								case 2:
									return se = H.sent(), se.status === 200 ? k(!0) : k(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
								case 3:
									return Ne = H.sent(), k(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
								case 4:
									return [2]
							}
						})
					})()
				},
				t = function(n, l, r) {
					if (n.params.retry === ot.Auto || r) {
						var u, b = r ? 0 : 2e3 + ((u = n.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
						n.retryTimeout = window.setTimeout(function() {
							var m = r ? X.CrashedRetry : X.FailureRetry;
							w(m, l)
						}, b)
					}
				},
				a = function(n, l, r) {
					return n.params.execution === He.Render ? !0 : (l === X.CrashedRetry || l === X.FailureRetry || l === X.CheckDelays || l === X.UpgradeReload) && n.params.execution === He.Execute && r
				},
				o = function(n, l, r) {
					var u;
					n.response === void 0 && y("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, ya(n, l, n.response), (u = n.cbSuccess) === null || u === void 0 || u.call(n, n.response, r)
				},
				i = function(n) {
					if (!n) return [];
					for (var l = n.attributes, r = l.length, u = new Array(r), b = 0; b < r; b++) u[b] = l[b].name;
					return u
				},
				c = function() {
					for (var n = {}, l = [], r = document.getElementsByTagName("*"), u = 0; u < r.length && l.length < 50; u++) {
						var b = r[u].tagName.toLowerCase();
						b.indexOf("-") !== -1 && !n[b] && (n[b] = !0, l.push(b))
					}
					return l
				},
				s = function(n, l, r) {
					if (n.rcV = l, 0) var u
				},
				d = function() {
					var n = "abcdefghijklmnopqrstuvwxyz0123456789",
						l = n.length,
						r = "";
					do {
						r = "";
						for (var u = 0; u < 5; u++) r += n.charAt(Math.floor(Math.random() * l))
					} while (h.widgetMap.has(r));
					return r
				},
				p = function(n, l, r) {
					for (; n.msgQueue.length > 0;) {
						var u = n.msgQueue.pop();
						me(r, {
							event: u,
							source: K,
							widgetId: l
						}, n.iframeOrigin)
					}
				},
				f = function(n, l) {
					if (l) {
						var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
							u = Object.prototype.hasOwnProperty,
							b = [],
							m = !0,
							S = !1,
							k = void 0;
						try {
							for (var T = r[Symbol.iterator](), N; !(m = (N = T.next()).done); m = !0) {
								var W = N.value;
								u.call(l, W) && l[W] !== void 0 && l[W] !== n.params[W] && b.push(W)
							}
						} catch (ee) {
							S = !0, k = ee
						} finally {
							try {
								!m && T.return != null && T.return()
							} finally {
								if (S) throw k
							}
						}
						b.length > 0 && y("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(b.join(",")), 3618), l.action && (Gt(l.action) || y('Invalid input for optional parameter "action", got "'.concat(l.action, '"'), 3604), n.action = l.action), l.cData && (Xt(l.cData) || y('Invalid input for optional parameter "cData", got "'.concat(l.cData, '"'), 3605), n.cData = l.cData), l["after-interactive-callback"] && (n.cbAfterInteractive = l["after-interactive-callback"]), l["before-interactive-callback"] && (n.cbBeforeInteractive = l["before-interactive-callback"]), l.callback && (n.cbSuccess = l.callback), l["expired-callback"] && (n.cbExpired = l["expired-callback"]), l["timeout-callback"] && (n.cbTimeout = l["timeout-callback"]), l["error-callback"] && (n.cbError = l["error-callback"]), l["unsupported-callback"] && (n.cbUnsupported = l["unsupported-callback"]), l.chlPageData && (n.chlPageData = l.chlPageData)
					}
				},
				v = function(n, l, r) {
					n === "explicit" && l && f(l, r), x(Xa(n))
				},
				I = function(n) {
					w(X.Api, n)
				},
				w = function(n, l) {
					var r = O(l);
					r || y("Nothing to reset found for provided container", 3329);
					var u = h.widgetMap.get(r);
					if (u) {
						var b, m, S = u.isExecuted;
						u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuted = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.isOverrunning = !1, u.cfChlOut = void 0, u.cfChlOutS = void 0, u.errorCode = void 0, u.frMd = void 0, u.autoFeedbackSent = !1, u.watchcat.overrunBeginSeq = 0, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, a(u, n, S) && (u.msgQueue.push(lt.Execute), u.isExecuted = !0, u.isExecuting = !0);
						var k = J(r),
							T = u.shadow.querySelector("#".concat(k));
						(!k || !T) && y("Widget ".concat(r, " to reset was not found."), 3330), (u.params.appearance === ve.InteractionOnly || u.params.appearance === ve.Execute) && pa(T), u.params.sitekey === null && y("Unexpected Error: Sitekey is null", 3347);
						var N = T.cloneNode(),
							W = Mt(r, u.params.sitekey, u.params, (b = u.rcV) !== null && b !== void 0 ? b : fe, !1, "g", n, h.scriptUrlParsed, kt(u));
						N.src = W, fa(N, u), u.iframeOrigin = Oe(W), (m = T.parentNode) === null || m === void 0 || m.replaceChild(N, T), er(u, k), u.retryTimeout && window.clearTimeout(u.retryTimeout)
					} else y("Widget ".concat(r, " to reset was not found."), 3331)
				},
				R = function(n, l) {
					var r = J(n);
					if (r) {
						var u = ["input#".concat(r, "_response"), "input#".concat(r, "_legacy_response"), "input#".concat(r, "_g_response")];
						document.querySelectorAll(u.join(", ")).forEach(function(b) {
							return b.remove()
						}), l.shadow.querySelectorAll(u.join(", ")).forEach(function(b) {
							return b.remove()
						}), Xe(r), Ce(l)
					}
					l.wrapper.remove(), l.retryTimeout && window.clearTimeout(l.retryTimeout), h.widgetMap.delete(n), Ye(h)
				},
				_ = function(n) {
					var l = O(n),
						r = l ? h.widgetMap.get(l) : void 0;
					if (!l || !r) {
						x("Nothing to remove found for the provided container.");
						return
					}
					R(l, r)
				},
				L = function() {
					var n = Array.from(h.widgetMap.keys()),
						l = !0,
						r = !1,
						u = void 0;
					try {
						for (var b = n[Symbol.iterator](), m; !(l = (m = b.next()).done); l = !0) {
							var S = m.value,
								k = h.widgetMap.get(S),
								T = J(S);
							!T || !k || (Xe(T), Ce(k), w(X.UpgradeReload, T))
						}
					} catch (N) {
						r = !0, u = N
					} finally {
						try {
							!l && b.return != null && b.return()
						} finally {
							if (r) throw u
						}
					}
				},
				A = function(n, l, r) {
					var u, b, m, S, k, T, N, W, ee, Q, ce, ne, se, Ne = $(),
						H, te;
					if (typeof n == "string") {
						var re = dt(n);
						if (re) {
							var ie, q = h.widgetMap.get(re),
								$e = (ie = q == null ? void 0 : q.wrapper.parentElement) !== null && ie !== void 0 ? ie : null;
							if ($e && sa(r, q)) H = $e, te = {
								widget: q,
								widgetId: re
							};
							else return v(r, q, l), J(re)
						} else {
							var Te;
							try {
								Te = document.querySelector(n)
							} catch (ln) {
								y('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
							}
							Te || y('Unable to find a container for "'.concat(n, '"'), 3585), H = Te
						}
					} else M(n, HTMLElement) ? H = n : y('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					if (!te) {
						var Ie = dt(H);
						if (Ie) {
							var de = h.widgetMap.get(Ie);
							if (de && sa(r, de) && de.wrapper.parentElement === H) te = {
								widget: de,
								widgetId: Ie
							};
							else return v(r, de, l), J(Ie)
						}
					}
					var _t = tr();
					if (!_t) return y("Turnstile cannot determine its page location", 3607);
					var Pe = nn(H);
					if (Pe) {
						var g = Object.assign(Pe, l),
							be = g.action,
							Ae = g.cData,
							Fe = g.chlPageData,
							oe = g.sitekey;
						g.theme = (u = g.theme) !== null && u !== void 0 ? u : nt.Auto, g.retry = (b = g.retry) !== null && b !== void 0 ? b : ot.Auto, g.execution = (m = g.execution) !== null && m !== void 0 ? m : He.Render, g.appearance = (S = g.appearance) !== null && S !== void 0 ? S : ve.Always, g["retry-interval"] = Number((k = g["retry-interval"]) !== null && k !== void 0 ? k : Ar), g["expiry-interval"] = Number((T = g["expiry-interval"]) !== null && T !== void 0 ? T : (gr - yr) * 1e3), g.size = (N = g.size) !== null && N !== void 0 ? N : G.Normal;
						var xt = g.callback,
							Et = g["expired-callback"],
							wt = g["timeout-callback"],
							ge = g["after-interactive-callback"],
							Ze = g["before-interactive-callback"],
							Tt = g["error-callback"],
							Ue = g["unsupported-callback"];
						typeof oe != "string" && y('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof oe == "undefined" ? "undefined" : P(oe), '"'), 3588), ia(oe) || y('Invalid input for parameter "sitekey", got "'.concat(oe, '"'), 3589), Yt(g.size) || y('Invalid type for parameter "size", expected normal|compact, got "'.concat(g.size, '" ').concat(P(g.size)), 3590), Ht(g.theme) || y('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(g.theme, '" ').concat(P(g.theme)), 3591), zt(g.retry) || y('Invalid type for parameter "retry", expected never|auto, got "'.concat(g.retry, '" ').concat(P(g.retry)), 3592), g.language || (g.language = "auto"), Qt(g.language) || (x('Invalid language value: "'.concat(g.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), g.language = "auto"), $t(g.appearance) || y('Unknown appearance value: "'.concat(g.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Zt(g.execution) || y('Unknown execution value: "'.concat(g.execution, ", expected either: 'render' or 'execute'."), 3601), qt(g["retry-interval"]) || y('Invalid retry-interval value: "'.concat(g["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), jt(g["expiry-interval"]) || y('Invalid expiry-interval value: "'.concat(g["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						var le = (W = g["refresh-expired"]) !== null && W !== void 0 ? W : ke.Auto;
						Kt(le) ? g["refresh-expired"] = le : y('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(le, '" ').concat(typeof le == "undefined" ? "undefined" : P(le)), 3603);
						var We = (ee = g["refresh-timeout"]) !== null && ee !== void 0 ? ee : Be.Auto;
						Jt(We) ? g["refresh-timeout"] = We : y('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(We, '" ').concat(typeof We == "undefined" ? "undefined" : P(We)), 3603), Gt(be) || y('Invalid input for optional parameter "action", got "'.concat(be, '"'), 3604), Xt(Ae) || y('Invalid input for optional parameter "cData", got "'.concat(Ae, '"'), 3605);
						var ae = document.createElement("iframe"),
							It = document.createElement("div"),
							ir = It.attachShadow({
								mode: "closed"
							}),
							De = d(),
							et = J(De);
						if (!(!De || !et)) {
							var or = [],
								At = g.execution === He.Render;
							At && or.push(lt.Execute), h.lastWidgetIdx++;
							var ba = {};
							h.widgetMap.set(De, St(_e({
								action: be,
								autoFeedbackSent: !1,
								cbAfterInteractive: ge,
								cbBeforeInteractive: Ze,
								cbError: Tt,
								cbExpired: Et,
								cbSuccess: xt,
								cbTimeout: wt,
								cbUnsupported: Ue,
								cData: Ae,
								chlPageData: Fe,
								idx: h.lastWidgetIdx,
								isComplete: !1,
								isExecuted: At,
								isExecuting: At,
								isExpired: !1,
								isFailed: !1,
								isInitialized: !1,
								isResetting: !1,
								isStale: !1,
								msgQueue: or,
								params: g,
								rcV: fe,
								renderSource: r,
								responseElementsBuilt: !1,
								watchcat: {
									lastAckedSeq: 0,
									missingWidgetWarning: !1,
									overrunBeginSeq: 0,
									seq: 0
								}
							}, ba), {
								isOverrunning: !1,
								shadow: ir,
								widgetInitStartTimeTsMs: 0,
								widgetParamsStartTimeTsMs: 0,
								widgetRenderEndTimeTsMs: 0,
								widgetRenderStartTimeTsMs: Ne,
								wrapper: It
							})), Dt(h);
							var Se = h.widgetMap.get(De);
							Se || y("Turnstile Initialization Error ", 3606), ae.style.display = "none", ae.style.border = "none", ae.style.overflow = "hidden";
							var lr = Mt(De, oe, g, fe, !1, "g", X.New, h.scriptUrlParsed, kt(Se));
							Se.iframeOrigin = Oe(lr), ae.setAttribute("src", lr), fa(ae, Se);
							var ur = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"];
							return B((Q = (se = document.featurePolicy) === null || se === void 0 || (ne = se.features) === null || ne === void 0 ? void 0 : ne.call(se)) !== null && Q !== void 0 ? Q : [], Ot) && ur.push(Ot), ae.setAttribute("allow", ur.join("; ")), ae.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), ae.id = et, ae.tabIndex = (ce = g.tabindex) !== null && ce !== void 0 ? ce : 0, ae.title = "Widget containing a Cloudflare security challenge", ir.appendChild(ae), ga(Se, et), te && R(te.widgetId, te.widget), H.appendChild(It), Se.widgetRenderEndTimeTsMs = $(), et
						}
					}
				},
				j = function(n, l) {
					return A(n, l, "explicit")
				},
				Y = function() {
					var n = [_r, xr];
					h.isRecaptchaCompatibilityMode && n.push(Er), document.querySelectorAll(n.join(", ")).forEach(function(l) {
						A(l, void 0, "implicit")
					})
				},
				D = function() {
					var n, l = -1,
						r = !0,
						u = !1,
						b = void 0;
					try {
						for (var m = h.widgetMap[Symbol.iterator](), S; !(r = (S = m.next()).done); r = !0) {
							var k = Ve(S.value, 2),
								T = k[0],
								N = k[1];
							l < N.idx && (n = T, l = N.idx)
						}
					} catch (W) {
						u = !0, b = W
					} finally {
						try {
							!r && m.return != null && m.return()
						} finally {
							if (u) throw b
						}
					}
					return l === -1 && y("Could not find widget", 43778), n
				},
				C = rn(),
				V = function(n) {
					if (n.source === K && !(!n.widgetId || !h.widgetMap.has(n.widgetId))) {
						var l = J(n.widgetId),
							r = h.widgetMap.get(n.widgetId);
						if (!(!l || !r)) switch (n.event) {
							case "init": {
								r.widgetInitStartTimeTsMs = $(), r.kills = n.kills;
								var u = r.shadow.getElementById(l);
								u || y("Cannot initialize Widget, Element not found (#".concat(l, ")."), 3074), r.mode = n.mode, r.nextRcV = n.nextRcV, r.mode === pe.Invisible && r.params["refresh-expired"] === ke.Manual && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(ke.Auto, "' or '").concat(ke.Never, ".'")), r.mode !== pe.Managed && r.params["refresh-timeout"] !== Be.Auto && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === ve.Always || r.isExecuting && r.params.appearance === ve.Execute ? ft(u, r) : pa(u), u.style.display = "";
								var b = Le(r, l);
								b || y("Received state for an unknown widget: ".concat(n.widgetId), 3078), me(b, {
									event: "init",
									source: K,
									widgetId: n.widgetId
								}, r.iframeOrigin);
								break
							}
							case "translationInit": {
								var m = r.shadow.getElementById(l);
								m || y("Cannot initialize Widget, Element not found (#".concat(l, ")."), 3074);
								var S = new Map;
								r.displayLanguage = n.displayLanguage, r.displayRtl = n.displayRtl, Object.keys(n.translationData).forEach(function(le) {
									S.set(le, n.translationData[le])
								}), Ya(m, S);
								break
							}
							case "languageUnsupported": {
								x("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), r.displayLanguage = n.fallback;
								break
							}
							case "reject": {
								var k = r.shadow.getElementById(l);
								if (r.isExecuting = !1, k || y("Cannot initialize Widget, Element not found (#".concat(l, ")."), 3075), n.reason === "unsupported_browser") {
									var T;
									(T = r.cbUnsupported) === null || T === void 0 || T.call(r)
								}
								break
							}
							case "food": {
								r.watchcat && n.seq > r.watchcat.lastAckedSeq && (r.watchcat.lastAckedSeq = n.seq);
								break
							}
							case "overrunBegin": {
								r.isOverrunning = !0, r.watchcat && (r.watchcat.overrunBeginSeq = r.watchcat.lastAckedSeq);
								break
							}
							case "overrunEnd": {
								r.isOverrunning = !1;
								break
							}
							case "complete": {
								if (s(r, fe, n.widgetId), r.response = n.token, n.scs && !Je("scs", r) && (r.scs = n.scs, r.params["session-continuity-persist"] && !Je("scs_persist", r))) {
									var N = r.params.sitekey;
									if (N) {
										var W = "".concat(Ct).concat(N);
										try {
											localStorage.setItem(W, n.scs)
										} catch (le) {}
									}
								}
								n.sToken ? e(r, n.widgetId, l, n.token, n.sToken, n.chlId) : o(r, l, !1);
								break
							}
							case "fail": {
								n.rcV && s(r, n.rcV, n.widgetId), n.cfChlOut && (r.cfChlOut = n.cfChlOut), n.cfChlOutS && (r.cfChlOutS = n.cfChlOutS), n.code && (r.errorCode = n.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, n.frMd && (r.frMd = n.frMd), er(r, l);
								var ee = r.cbError,
									Q = n.code === tt || n.code === rt;
								if (Q) {
									var ce = Le(r, l);
									ce && me(ce, {
										event: "forceFail",
										source: K,
										widgetId: n.widgetId
									}, r.iframeOrigin)
								}
								if (ee) {
									var ne;
									ee(String((ne = n.code) !== null && ne !== void 0 ? ne : br)) ? (r.params.retry === ot.Auto || Q) && !r.isResetting && t(r, l, Q) : (n.code && x("Error: ".concat(n.code, ".")), t(r, l, Q))
								} else n.code ? (t(r, l, Q), y("Error: ".concat(n.code), 3076)) : t(r, l, !1);
								break
							}
							case "feedbackInit": {
								var se = bt(r, l).targetWindow;
								if (se) {
									x("A feedback report form is already opened for this widget.");
									return
								}
								if (!r.autoFeedbackSent && !Je("feedback-report-auto-submit", r)) {
									var Ne = zr(r, n.feedbackOrigin, n.rayId, r.frMd, h.scriptUrlParsed);
									Ne && (r.autoFeedbackSent = !0)
								}
								Ut(l, r, n.feedbackOrigin, h.scriptUrlParsed);
								break
							}
							case "requestFeedbackData": {
								var H = Le(r, l);
								H || y("Received state for an unknown widget: #".concat(l, " / ").concat(n.widgetId), 3078), me(H, {
									event: "requestTurnstileResults",
									source: K,
									widgetId: n.widgetId
								}, r.iframeOrigin);
								break
							}
							case "turnstileResults": {
								var te, re, ie, q = bt(r, l),
									$e = q.targetOrigin,
									Te = q.targetWindow;
								if (!Te) break;
								Nt(Te, {
									cfChlOut: (te = r.cfChlOut) !== null && te !== void 0 ? te : n.cfChlOut,
									cfChlOutS: (re = r.cfChlOutS) !== null && re !== void 0 ? re : n.cfChlOutS,
									errorCode: r.errorCode,
									event: "feedbackData",
									frMd: (ie = r.frMd) !== null && ie !== void 0 ? ie : n.frMd,
									mode: n.mode,
									rayId: n.rayId,
									rcV: n.rcV,
									sitekey: n.sitekey,
									source: K,
									widgetId: n.widgetId
								}, $e);
								break
							}
							case "closeFeedbackReportIframe": {
								var Ie = bt(r, l).targetWindow;
								Ie || y("Received state for an unknown widget: ".concat(n.widgetId), 3078), Xe(l), Ce(r);
								break
							}
							case "tokenExpired": {
								var de, _t = n.token;
								r.isExpired = !0, (de = r.cbExpired) === null || de === void 0 || de.call(r, _t), r.params["refresh-expired"] === ke.Auto && !r.isResetting && w(X.AutoExpire, l);
								break
							}
							case "interactiveTimeout": {
								s(r, fe, n.widgetId), er(r, l);
								var Pe = r.cbTimeout;
								if (Pe ? Pe() : r.params["refresh-timeout"] === Be.Never && !r.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === Be.Auto && !r.isResetting) {
									var g = r.cbAfterInteractive;
									g == null || g(), w(X.AutoTimeout, l)
								}
								break
							}
							case "refreshRequest": {
								s(r, fe, n.widgetId), Xe(l), Ce(r), w(X.ManualRefresh, l);
								break
							}
							case "reloadRequest": {
								s(r, n.nextRcV, n.widgetId), w(n.trigger, l);
								break
							}
							case "interactiveBegin": {
								var be, Ae = r.shadow.getElementById(l);
								Ae || y("Cannot layout widget, Element not found (#".concat(l, ")."), 3076), (be = r.cbBeforeInteractive) === null || be === void 0 || be.call(r), r.params.appearance === ve.InteractionOnly && ft(Ae, r);
								break
							}
							case "interactiveEnd": {
								var Fe;
								(Fe = r.cbAfterInteractive) === null || Fe === void 0 || Fe.call(r);
								break
							}
							case "widgetStale": {
								r.isStale = !0;
								break
							}
							case "requestExtraParams": {
								r.widgetParamsStartTimeTsMs = $();
								var oe = Le(r, l);
								oe || y("Received state for an unknown widget: ".concat(n.widgetId), 3078), r.isResetting = !1;
								var xt = {},
									Et = $(),
									wt = {
										"d.cT": c(),
										"ht.atrs": i(document.body.parentNode),
										"pg.ref": document.referrer,
										pi: {
											ffp: Qr(r.wrapper),
											ii: window.self !== window.top,
											lH: window.location.href,
											mL: document.getElementsByTagName("meta").length,
											pfp: $r(document, Rr, kr),
											sL: document.scripts.length,
											sR: r.wrapper.shadowRoot === null,
											ssL: document.styleSheets.length,
											t: "".concat(document.title.length, "|").concat(Zr(document.title)),
											tL: document.getElementsByTagName("*").length,
											wp: Jr(r.wrapper),
											xp: Kr(r.wrapper).slice(0, Or)
										},
										"w.iW": window.innerWidth
									},
									ge = r.scs;
								if (!ge && r.params["session-continuity-persist"] && !Je("scs_persist", r)) {
									var Ze = r.params.sitekey;
									if (Ze) {
										var Tt = "".concat(Ct).concat(Ze);
										try {
											var Ue;
											ge = (Ue = localStorage.getItem(Tt)) !== null && Ue !== void 0 ? Ue : void 0
										} catch (le) {}
									}
								}
								ge && ge.length > Cr && (ge = void 0), me(oe, _e({
									action: r.action,
									apiJsResourceTiming: C ? JSON.parse(JSON.stringify(C)) : void 0,
									appearance: r.params.appearance,
									au: h.scriptUrl,
									cData: r.cData,
									ch: "fe6331af5207",
									chlPageData: r.chlPageData,
									event: "extraParams",
									execution: r.params.execution,
									"expiry-interval": r.params["expiry-interval"],
									language: r.params.language,
									rcV: r.rcV,
									"refresh-expired": r.params["refresh-expired"],
									"refresh-timeout": r.params["refresh-timeout"],
									retry: r.params.retry,
									"retry-interval": r.params["retry-interval"],
									scs: ge,
									source: K,
									timeExtraParamsMs: $() - r.widgetRenderStartTimeTsMs,
									timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
									timeLoadInitMs: $() - h.turnstileLoadInitTimeTsMs,
									timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
									timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
									timeTiefMs: $() - Et,
									upgradeAttempts: h.upgradeAttempts,
									upgradeCompletedCount: h.upgradeCompletedCount,
									url: tr(),
									widgetId: n.widgetId,
									wPr: wt
								}, xt), r.iframeOrigin), p(r, n.widgetId, oe), r.isInitialized = !0;
								break
							}
							default:
								break
						}
					}
				},
				F = function(n) {
					if ($a(n)) {
						var l = n.data;
						if (!Za(n)) {
							x("Ignored message from wrong origin: ".concat(n.origin, "."));
							return
						}
						if (!(!l.widgetId || !h.widgetMap.has(l.widgetId))) {
							var r = J(l.widgetId),
								u = h.widgetMap.get(l.widgetId);
							if (!(!r || !u)) {
								if (!en(n, u, r)) {
									x("Ignored message from unexpected source for event: ".concat(l.event, "."));
									return
								}
								V(l)
							}
						}
					}
				};
			h.msgHandler = F, h.internalMsgHandler = V, window.addEventListener("message", F);

			function O(E) {
				var n;
				if (typeof E == "string") {
					var l = dt(E);
					if (l) return l;
					try {
						var r = document.querySelector(E);
						return r ? O(r) : null
					} catch (u) {
						return null
					}
				}
				return M(E, Element) ? dt(E) : E || h.widgetMap.size === 0 ? null : (n = D()) !== null && n !== void 0 ? n : null
			}
			var z = {},
				Z = {
					showFeedback: function(n) {
						var l = O(n);
						if (l) {
							var r = J(l);
							if (r) {
								var u = h.widgetMap.get(l);
								u && Ut(r, u, Yr.Custom, h.scriptUrlParsed)
							}
						}
					}
				},
				he = St(_e({}, z), {
					_private: Z,
					execute: function(n, l) {
						var r = O(n);
						if (!r) {
							var u;
							l === void 0 && y("Please provide 2 parameters to execute: container and parameters", 43521);
							var b = j(n, l);
							b || y("Failed to render widget", 43522), r = (u = je(b)) !== null && u !== void 0 ? u : O(n), r || y("Failed to render widget", 43522)
						}
						var m = h.widgetMap.get(r);
						if (m) {
							f(m, l);
							var S = J(r);
							if (S || (m.isExecuting = !1, y("Widget ".concat(r, " to execute was not found"), 43522)), m.isExecuting) {
								x("Call to execute() on a widget that is already executing (".concat(S, "), consider using reset() before execute()."));
								return
							}
							if (m.isExecuting = !0, m.response) {
								var k;
								m.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(S, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (k = m.cbSuccess) === null || k === void 0 || k.call(m, m.response, !1);
								return
							}
							m.isExpired && x("Call to execute on a expired-widget (".concat(S, "), consider using reset() before.")), m.isStale && (w(X.StaleExecute, S), m.isExecuting = !0), (m.isResetting || !m.isInitialized) && m.msgQueue.push(lt.Execute), m.isExecuted = !0;
							var T = Le(m, S);
							if (T || (m.isExecuting = !1, y("Widget ".concat(S, " to execute was not found"), 43522)), m.isResetting || !m.isInitialized) return;
							if (m.isInitialized && m.msgQueue.length > 0) {
								p(m, r, T), m.params.appearance === ve.Execute && ft(T, m);
								return
							}
							m.isInitialized && m.params.appearance === ve.Execute && ft(T, m), m.isExecuting && me(T, {
								event: "execute",
								source: K,
								widgetId: r
							}, m.iframeOrigin)
						}
					},
					getResponse: function(n) {
						var l;
						if (typeof n == "undefined") {
							var r = D();
							if (r) {
								var u = h.widgetMap.get(r);
								return u != null && u.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), u == null ? void 0 : u.response
							}
							y("Could not find a widget", 43794)
						}
						var b = O(n);
						return b || y("Could not find widget for provided container", 43778), (l = h.widgetMap.get(b)) === null || l === void 0 ? void 0 : l.response
					},
					isExpired: function(n) {
						var l, r;
						if (typeof n == "undefined") {
							var u = D();
							if (u) {
								var b, m;
								return (b = (m = h.widgetMap.get(u)) === null || m === void 0 ? void 0 : m.isExpired) !== null && b !== void 0 ? b : !1
							}
							y("Could not find a widget", 43794)
						}
						var S = O(n);
						return S || y("Could not find widget for provided container", 43778), (l = (r = h.widgetMap.get(S)) === null || r === void 0 ? void 0 : r.isExpired) !== null && l !== void 0 ? l : !1
					},
					ready: function(n) {
						if (h.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), y("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && y('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : P(n), '"'), 3841), h.isReady) {
							n();
							return
						}
						nr.push(n)
					},
					remove: _,
					render: j,
					reset: I
				});
			return Object.defineProperty(he, va, {
				configurable: !0,
				enumerable: !1,
				value: {
					rearmTimedUpgrade: function() {
						ar()
					},
					reloadAfterUpgrade: function() {
						L()
					}
				}
			}), {
				runImplicitRender: Y,
				turnstile: he
			}
		})(),
		an = ha.runImplicitRender,
		vt = ha.turnstile;

	function nn(e) {
		var t, a, o = e.getAttribute("data-sitekey"),
			i = {
				sitekey: o
			},
			c = e.getAttribute("data-tabindex");
		c && (i.tabindex = Number.parseInt(c, 10));
		var s = e.getAttribute("data-theme");
		s && (Ht(s) ? i.theme = s : x('Unknown data-theme value: "'.concat(s, '".')));
		var d = e.getAttribute("data-size");
		if (d && (Yt(d) ? i.size = d : x('Unknown data-size value: "'.concat(d, '".'))), 0) var p;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (i.action = f);
		var v = e.getAttribute("data-cdata");
		typeof v == "string" && (i.cData = v);
		var I = e.getAttribute("data-retry");
		I && (zt(I) ? i.retry = I : x('Invalid data-retry value: "'.concat(I, ", expected either 'never' or 'auto'\".")));
		var w = e.getAttribute("data-retry-interval");
		if (w) {
			var R = Number.parseInt(w, 10);
			qt(R) ? i["retry-interval"] = R : x('Invalid data-retry-interval value: "'.concat(w, ', expected an integer value > 0 and < 900000".'))
		}
		var _ = e.getAttribute("data-expiry-interval");
		if (_) {
			var L = Number.parseInt(_, 10);
			jt(L) ? i["expiry-interval"] = L : x('Invalid data-expiry-interval value: "'.concat(L, ', expected an integer value > 0 and < 360000".'))
		}
		var A = e.getAttribute("data-refresh-expired");
		A && (Kt(A) ? i["refresh-expired"] = A : x('Unknown data-refresh-expired value: "'.concat(A, ", expected either: 'never', 'auto' or 'manual'.")));
		var j = e.getAttribute("data-refresh-timeout");
		j && (Jt(j) ? i["refresh-timeout"] = j : x('Unknown data-refresh-timeout value: "'.concat(j, ", expected either: 'never', 'auto' or 'manual'.")));
		var Y = e.getAttribute("data-language");
		Y && (Qt(Y) ? i.language = Y : x('Invalid data-language value: "'.concat(Y, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function D(n) {
			var l = e.getAttribute(n),
				r = l ? we[l] : void 0;
			return typeof r == "function" ? r : void 0
		}
		var C = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		C.forEach(function(n) {
			Object.assign(i, Re({}, n, D("data-".concat(n))))
		}), i["feedback-enabled"] = (t = pt(e.getAttribute("data-feedback-enabled"), !0, function(n) {
			return 'Invalid data-feedback-enabled value: "'.concat(n, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && t !== void 0 ? t : !0, i["response-field"] = (a = pt(e.getAttribute("data-response-field"), !0, function(n) {
			return 'Invalid data-response-field value: "'.concat(n, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && a !== void 0 ? a : !0;
		var V = e.getAttribute("data-response-field-name");
		V && (i["response-field-name"] = V);
		var F = e.getAttribute("data-execution");
		F && (Zt(F) ? i.execution = F : x('Unknown data-execution value: "'.concat(F, ", expected either: 'render' or 'execute'.")));
		var O = e.getAttribute("data-appearance");
		O && ($t(O) ? i.appearance = O : x('Unknown data-appearance value: "'.concat(O, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var z = e.getAttribute("data-offlabel-show-privacy"),
			Z = pt(z, void 0, function(n) {
				return 'Invalid data-offlabel-show-privacy value: "'.concat(n, '", expected "true" or "false".')
			});
		typeof Z == "boolean" && (i["offlabel-show-privacy"] = Z);
		var he = e.getAttribute("data-offlabel-show-help"),
			E = pt(he, void 0, function(n) {
				return 'Invalid data-offlabel-show-help value: "'.concat(n, '", expected "true" or "false".')
			});
		return typeof E == "boolean" && (i["offlabel-show-help"] = E), i
	}

	function on() {
		ma();
		var e = aa(window.turnstile, h);
		if (!e) {
			ar();
			return
		}
	}
	Ee = !1, U = Vr(), h.scriptWasLoadedAsync = (mt = U == null ? void 0 : U.loadedAsync) !== null && mt !== void 0 ? mt : !1, h.scriptUrl = (gt = U == null ? void 0 : U.src) !== null && gt !== void 0 ? gt : "undefined", h.scriptUrlParsed = U == null ? void 0 : U.url, U != null && U.params && (Me = U.params.get("compat"), (Me == null ? void 0 : Me.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled.") : (x("Compatibility layer enabled."), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = vt) : Me !== null && x('Unknown value for api.js?compat: "'.concat(Me, '", ignoring.')), U.params.forEach(function(e, t) {
		B(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || x('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Ee = U.params.get("_upgrade") === "true", ue = U.params.get("onload"), ue && !Ee && setTimeout(function() {
		typeof we[ue] == "function" ? we[ue]() : (x("Unable to find onload callback '".concat(ue, "' immediately after loading, expected 'function', got '").concat(P(we[ue]), "'.")), setTimeout(function() {
			typeof we[ue] == "function" ? we[ue]() : x("Unable to find onload callback '".concat(ue, "' after 1 second, expected 'function', got '").concat(P(we[ue]), "'."))
		}, 1e3))
	}, 0)), Ke = "turnstile" in window, yt = Ke ? ca(window.turnstile) : void 0, rr = Ke && Ee ? na(window.turnstile, h, function() {
		var e;
		window.turnstile = vt, (e = ca(vt)) === null || e === void 0 || e.reloadAfterUpgrade(), Dt(h)
	}) : !1, Ke && Ee && !rr ? (x("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), yt == null || yt.rearmTimedUpgrade()) : Ke && !Ee ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (rr || (window.turnstile = vt), Ee || ((U == null || (ht = U.params) === null || ht === void 0 ? void 0 : ht.get("render")) !== "explicit" && nr.push(an), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(da, 0) : window.addEventListener("DOMContentLoaded", da)), ar());
	var mt, gt, Ee, U, Me, ue, Ke, yt, rr, ht;
})();