"use strict";
(function() {
	function rr(e, t, n, a, i, u, f) {
		try {
			var v = e[u](f),
				g = v.value
		} catch (d) {
			n(d);
			return
		}
		v.done ? t(g) : Promise.resolve(g).then(a, i)
	}

	function nr(e) {
		return function() {
			var t = this,
				n = arguments;
			return new Promise(function(a, i) {
				var u = e.apply(t, n);

				function f(g) {
					rr(u, a, i, f, v, "next", g)
				}

				function v(g) {
					rr(u, a, i, f, v, "throw", g)
				}
				f(void 0)
			})
		}
	}

	function Oe(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function k(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : k(e, t)
	}

	function $e(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] != null ? arguments[t] : {},
				a = Object.keys(n);
			typeof Object.getOwnPropertySymbols == "function" && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(i) {
				return Object.getOwnPropertyDescriptor(n, i).enumerable
			}))), a.forEach(function(i) {
				Oe(e, i, n[i])
			})
		}
		return e
	}

	function un(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var a = Object.getOwnPropertySymbols(e);
			t && (a = a.filter(function(i) {
				return Object.getOwnPropertyDescriptor(e, i).enumerable
			})), n.push.apply(n, a)
		}
		return n
	}

	function Et(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : un(Object(t)).forEach(function(n) {
			Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
		}), e
	}

	function ar(e) {
		if (Array.isArray(e)) return e
	}

	function ir(e, t) {
		var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var a = [],
				i = !0,
				u = !1,
				f, v;
			try {
				for (n = n.call(e); !(i = (f = n.next()).done) && (a.push(f.value), !(t && a.length === t)); i = !0);
			} catch (g) {
				u = !0, v = g
			} finally {
				try {
					!i && n.return != null && n.return()
				} finally {
					if (u) throw v
				}
			}
			return a
		}
	}

	function or() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Tt(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
		return a
	}

	function ur(e, t) {
		if (e) {
			if (typeof e == "string") return Tt(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tt(e, t)
		}
	}

	function je(e, t) {
		return ar(e) || ir(e, t) || ur(e, t) || or()
	}

	function L(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ze(e, t) {
		var n = {
				label: 0,
				sent: function() {
					if (u[0] & 1) throw u[1];
					return u[1]
				},
				trys: [],
				ops: []
			},
			a, i, u, f;
		return f = {
			next: v(0),
			throw: v(1),
			return: v(2)
		}, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
			return this
		}), f;

		function v(d) {
			return function(S) {
				return g([d, S])
			}
		}

		function g(d) {
			if (a) throw new TypeError("Generator is already executing.");
			for (; f && (f = 0, d[0] && (n = 0)), n;) try {
				if (a = 1, i && (u = d[0] & 2 ? i.return : d[0] ? i.throw || ((u = i.return) && u.call(i), 0) : i.next) && !(u = u.call(i, d[1])).done) return u;
				switch (i = 0, u && (d = [d[0] & 2, u.value]), d[0]) {
					case 0:
					case 1:
						u = d;
						break;
					case 4:
						return n.label++, {
							value: d[1],
							done: !1
						};
					case 5:
						n.label++, i = d[1], d = [0];
						continue;
					case 7:
						d = n.ops.pop(), n.trys.pop();
						continue;
					default:
						if (u = n.trys, !(u = u.length > 0 && u[u.length - 1]) && (d[0] === 6 || d[0] === 2)) {
							n = 0;
							continue
						}
						if (d[0] === 3 && (!u || d[1] > u[0] && d[1] < u[3])) {
							n.label = d[1];
							break
						}
						if (d[0] === 6 && n.label < u[1]) {
							n.label = u[1], u = d;
							break
						}
						if (u && n.label < u[2]) {
							n.label = u[2], n.ops.push(d);
							break
						}
						u[2] && n.ops.pop(), n.trys.pop();
						continue
				}
				d = t.call(e, n)
			} catch (S) {
				d = [6, S], i = 0
			} finally {
				a = u = 0
			}
			if (d[0] & 5) throw d[1];
			return {
				value: d[0] ? d[1] : void 0,
				done: !0
			}
		}
	}
	var lr = 300,
		cr = 10,
		sr = 200500,
		dr = 300020,
		et = 300030,
		tt = 300031;

	function It(e) {
		var t = new URLSearchParams;
		if (e.params.botnet && t.set("botnet", "true"), e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel), e.params._debugSitekeyOverrides.offlabelShowPrivacy && e.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default" && t.set("offlabel_show_privacy", e.params._debugSitekeyOverrides.offlabelShowPrivacy), e.params._debugSitekeyOverrides.offlabelShowHelp && e.params._debugSitekeyOverrides.offlabelShowHelp !== "default" && t.set("offlabel_show_help", e.params._debugSitekeyOverrides.offlabelShowHelp)), e.params._debugForceLoopFeedback && t.set("force_loop_feedback", "true"), e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var rt = "cf-chl-widget-",
		X = "cloudflare-challenge",
		fr = ".cf-turnstile",
		pr = ".cf-challenge",
		vr = ".g-recaptcha",
		mr = "cf_challenge_response",
		gr = "cf-turnstile-response",
		yr = "g-recaptcha-response",
		_r = 8e3,
		hr = 10800 * 1e3,
		St = "private-token",
		br = 3,
		xr = 500,
		wr = 500,
		oe = "",
		Ot = "_cftscs_",
		Er = 512;
	var Z;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(Z || (Z = {}));
	var V;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(V || (V = {}));
	var Ae;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(Ae || (Ae = {}));
	var Re;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(Re || (Re = {}));
	var ke;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(ke || (ke = {}));
	var pe;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(pe || (pe = {}));
	var xe;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(xe || (xe = {}));
	var ee;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})(ee || (ee = {}));
	var we;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(we || (we = {}));
	var Ce;
	(function(e) {
		e.Execute = "execute"
	})(Ce || (Ce = {}));
	var j;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(j || (j = {}));

	function U(e, t) {
		return e.indexOf(t) !== -1
	}
	var ln = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		cn = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		Tr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function At(e, t, n) {
		var a = "https://challenges.cloudflare.com",
			i, u = (i = n == null ? void 0 : n.origin) !== null && i !== void 0 ? i : a;
		if (t) {
			var f;
			return (f = e["base-url"]) !== null && f !== void 0 ? f : u
		}
		return u
	}

	function Rt(e, t, n, a, i, u, f, v, g) {
		var d = At(n, i, v),
			S = u ? "h/".concat(u, "/") : "",
			M = g ? "&".concat(g) : "",
			A = n["feedback-enabled"] === !1 ? "fbD" : "fbE",
			w = n.chlPageOfflabel ? "&offlabel=true" : "";
		return "".concat(d, "/cdn-cgi/challenge-platform/").concat(S, "turnstile/f/ov2/av0/rch").concat(a, "/").concat(e, "/").concat(t, "/").concat(n.theme, "/").concat(A, "/").concat(f, "/").concat(n.size, "?lang=").concat(n.language).concat(w).concat(M)
	}
	var kt = function(e) {
			var t, n, a = window.innerWidth < 400,
				i = e.state !== Re.FailureFeedbackCode && (e.state === Re.FailureFeedback || e.state === Re.FailureHavingTroubles || !e.errorCode),
				u, f = U(ln, (u = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && u !== void 0 ? u : "nonexistent"),
				v, g = U(cn, (v = (n = e.displayLanguage) === null || n === void 0 ? void 0 : n.toLowerCase()) !== null && v !== void 0 ? v : "nonexistent");
			return a ? sn({
				isModeratelyVerbose: g,
				isSmallerFeedback: i,
				isVerboseLanguage: f
			}) : i && f ? "680px" : i && g ? "670px" : i ? "650px" : f ? "690px" : "680px"
		},
		sn = function(e) {
			var t = e.isVerboseLanguage,
				n = e.isSmallerFeedback,
				a = e.isModeratelyVerbose;
			return n && t ? "660px" : n && a ? "620px" : n ? "600px" : t ? "770px" : a ? "740px" : "730px"
		};

	function nt(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Ir(e, t) {
		if (!k(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function ve(e, t) {
		return ve = Object.setPrototypeOf || function(a, i) {
			return a.__proto__ = i, a
		}, ve(e, t)
	}

	function Sr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && ve(e, t)
	}

	function at() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Be(e, t, n) {
		return at() ? Be = Reflect.construct : Be = function(i, u, f) {
			var v = [null];
			v.push.apply(v, u);
			var g = Function.bind.apply(i, v),
				d = new g;
			return f && ve(d, f.prototype), d
		}, Be.apply(null, arguments)
	}

	function Ee(e) {
		return Ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
			return n.__proto__ || Object.getPrototypeOf(n)
		}, Ee(e)
	}

	function Or(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function it(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return it = function(a) {
			if (a === null || !Or(a)) return a;
			if (typeof a != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(a)) return t.get(a);
				t.set(a, i)
			}

			function i() {
				return Be(a, arguments, Ee(this).constructor)
			}
			return i.prototype = Object.create(a.prototype, {
				constructor: {
					value: i,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ve(i, a)
		}, it(e)
	}

	function Ar(e, t) {
		return t && (L(t) === "object" || typeof t == "function") ? t : nt(e)
	}

	function Rr(e) {
		var t = at();
		return function() {
			var a = Ee(e),
				i;
			if (t) {
				var u = Ee(this).constructor;
				i = Reflect.construct(a, arguments, u)
			} else i = a.apply(this, arguments);
			return Ar(this, i)
		}
	}
	var kr = (function(e) {
		"use strict";
		Sr(n, e);
		var t = Rr(n);

		function n(a, i) {
			Ir(this, n);
			var u;
			return u = t.call(this, a), Oe(nt(u), "code", void 0), u.name = "TurnstileError", u.code = i, u
		}
		return n
	})(it(Error));
	var dn = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;

	function _(e, t) {
		var n = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new kr(n, t)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function He(e) {
		return e.startsWith(rt) ? e.slice(rt.length) : null
	}

	function K(e) {
		return "".concat(rt).concat(e)
	}

	function ot(e, t) {
		var n = !0,
			a = !1,
			i = void 0;
		try {
			for (var u = Object.getOwnPropertySymbols(e)[Symbol.iterator](), f; !(n = (f = u.next()).done); n = !0) {
				var v = f.value,
					g, d = (g = Object.getOwnPropertyDescriptor(e, v)) === null || g === void 0 ? void 0 : g.value;
				if (t(d)) return d
			}
		} catch (S) {
			a = !0, i = S
		} finally {
			try {
				!n && u.return != null && u.return()
			} finally {
				if (a) throw i
			}
		}
	}

	function ze() {
		var e = dn,
			t = document.currentScript;
		if (k(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var n = document.querySelectorAll("script"), a = 0, i; i = n[a]; a++)
			if (k(i, HTMLScriptElement) && e.test(i.src)) return i
	}

	function Cr() {
		var e = ze();
		e || _("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			n;
		try {
			n = new URL(t)
		} catch (u) {
			_("Could not parse Turnstile script tag URL", 43777)
		}
		var a = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: n
		};
		(e.async || e.defer) && (a.loadedAsync = !0);
		var i = t.split("?");
		return i.length > 1 && (a.params = new URLSearchParams(i[1])), a
	}

	function Q() {
		return Date.now()
	}

	function Me(e) {
		try {
			return new URL(e, window.location.href).origin
		} catch (t) {
			return
		}
	}

	function Ct(e, t, n) {
		if (!n) {
			if (0) var a;
			return
		}
		e == null || e.postMessage(t, n)
	}

	function ue(e, t, n) {
		Ct(e.contentWindow, t, n)
	}
	var Mt = Symbol(),
		fn = "host-origin",
		Le = function(e) {
			e.feedbackPopup && !e.feedbackPopup.closed && e.feedbackPopup.close(), e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0
		};

	function Lr(e) {
		return e.endsWith("-fr") ? e : "".concat(e, "-fr")
	}

	function Nr(e) {
		var t, n, a, i = (a = document.getElementById(e)) === null || a === void 0 || (n = a.parentElement) === null || n === void 0 || (t = n.parentElement) === null || t === void 0 ? void 0 : t.parentElement;
		return k(i, HTMLDivElement) ? i : null
	}

	function Mr(e) {
		var t;
		if (!((typeof e == "undefined" ? "undefined" : L(e)) !== "object" || e === null)) {
			var n = (t = Object.getOwnPropertyDescriptor(e, "cleanup")) === null || t === void 0 ? void 0 : t.value;
			return typeof n == "function" ? n : void 0
		}
	}

	function Pr(e) {
		var t, n = Mr((t = Object.getOwnPropertyDescriptor(e, Mt)) === null || t === void 0 ? void 0 : t.value);
		if (n) return n;
		var a = !0,
			i = !1,
			u = void 0;
		try {
			for (var f = Object.getOwnPropertySymbols(e)[Symbol.iterator](), v; !(a = (v = f.next()).done); a = !0) {
				var g = v.value,
					d, S = Mr((d = Object.getOwnPropertyDescriptor(e, g)) === null || d === void 0 ? void 0 : d.value);
				if (S) return S
			}
		} catch (M) {
			i = !0, u = M
		} finally {
			try {
				!a && f.return != null && f.return()
			} finally {
				if (i) throw u
			}
		}
	}

	function pn(e, t) {
		Object.defineProperty(e, Mt, {
			configurable: !0,
			enumerable: !1,
			value: {
				cleanup: t
			}
		})
	}

	function vn(e) {
		Reflect.deleteProperty(e, Mt)
	}

	function mn(e) {
		var t = new URL(e, window.location.href),
			n = new URLSearchParams(t.hash.startsWith("#") ? t.hash.slice(1) : t.hash);
		return n.set(fn, window.location.origin), t.hash = n.toString(), t.toString()
	}
	var Lt = function(e, t, n, a) {
			var i = Lr(e),
				u = At(t.params, !1, a),
				f = "h/".concat("g", "/"),
				v, g, d = mn("".concat(u, "/cdn-cgi/challenge-platform/").concat(f, "feedback-reports/").concat(He(e), "/").concat(t.displayLanguage, "/").concat((g = t.params.theme) !== null && g !== void 0 ? g : t.theme, "/").concat(n));
			if (Le(t), window.top !== window.self) {
				var S = window.open(d, "_blank");
				if (S) {
					t.feedbackPopupOrigin = Me(d), t.feedbackPopup = S;
					return
				}
				b("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
			}
			t.wrapper.parentNode || _("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var M = Nr(i);
			if (M) {
				var A;
				(A = Pr(M)) === null || A === void 0 || A()
			}
			var w = document.createElement("div");
			w.style.position = "fixed", w.style.zIndex = "2147483646", w.style.width = "100vw", w.style.height = "100vh", w.style.top = "0", w.style.left = "0", w.style.transformOrigin = "center center", w.style.overflowX = "hidden", w.style.overflowY = "auto", w.style.background = "rgba(0,0,0,0.4)";
			var C = document.createElement("div");
			C.className = "cf-wrapper-turnstile-feedback", C.style.display = "table-cell", C.style.verticalAlign = "middle", C.style.width = "100vw", C.style.height = "100vh";
			var O = document.createElement("div");
			O.className = "cf-turnstile-feedback", O.id = "cf-fr-id", O.style.width = "100vw", O.style.maxWidth = "500px", O.style.height = kt(t), O.style.position = "relative", O.style.zIndex = "2147483647", O.style.backgroundColor = "#ffffff", O.style.borderRadius = "5px", O.style.left = "0px", O.style.top = "0px", O.style.overflow = "hidden", O.style.margin = "0px auto";
			var B = function() {
					O.style.height = kt(t)
				},
				J = function() {
					var D;
					vn(w), t.feedbackIframeOrigin = void 0, window.removeEventListener("resize", B), (D = w.parentNode) === null || D === void 0 || D.removeChild(w)
				},
				W = document.createElement("iframe");
			W.id = i, W.setAttribute("src", d), W.setAttribute("allow", "cross-origin-isolated; fullscreen"), W.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), W.setAttribute("scrolling", "yes"), W.style.borderWidth = "0px", W.style.width = "100%", W.style.height = "100%", W.style.overflow = "auto", t.feedbackIframeOrigin = Me(d);
			var E = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			E.setAttribute("tabindex", "0"), E.setAttribute("role", "img"), E.setAttribute("aria-label", "Close button icon"), E.style.position = "absolute", E.style.width = "26px", E.style.height = "26px", E.style.zIndex = "2147483647", E.style.cursor = "pointer", t.displayRtl ? E.style.left = "24px" : E.style.right = "24px", E.style.top = "24px", E.setAttribute("width", "20"), E.setAttribute("height", "20"), E.addEventListener("click", function(D) {
				D.stopPropagation(), J()
			}), E.addEventListener("keydown", function(D) {
				(D.key === "Enter" || D.key === " ") && (D.stopPropagation(), J())
			});
			var H = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			H.setAttribute("ry", "12"), H.setAttribute("rx", "12"), H.setAttribute("cy", "12"), H.setAttribute("cx", "12"), H.setAttribute("fill", "none"), H.setAttribute("stroke-width", "0"), E.appendChild(H);
			var R = document.createElementNS("http://www.w3.org/2000/svg", "line");
			R.setAttribute("stroke-width", "1"), R.setAttribute("fill", "none"), R.setAttribute("x1", "6"), R.setAttribute("x2", "18"), R.setAttribute("y1", "18"), R.setAttribute("y2", "5");
			var F = document.createElementNS("http://www.w3.org/2000/svg", "line");
			F.setAttribute("stroke-width", "1"), F.setAttribute("fill", "none"), F.setAttribute("x1", "6"), F.setAttribute("x2", "18"), F.setAttribute("y1", "5"), F.setAttribute("y2", "18"), t.theme === Ae.Light ? (R.setAttribute("stroke", "#0A0A0A"), F.setAttribute("stroke", "#0A0A0A")) : (R.setAttribute("stroke", "#F2F2F2"), F.setAttribute("stroke", "#F2F2F2")), E.appendChild(R), E.appendChild(F), O.appendChild(W), O.appendChild(E), C.appendChild(O), w.appendChild(C), w.addEventListener("click", J), t.wrapper.parentNode.appendChild(w), window.addEventListener("resize", B), pn(w, J)
		},
		qe = function(e) {
			var t, n = Lr(e),
				a = Nr(n);
			if (a) {
				var i = Pr(a);
				if (i) {
					i();
					return
				}
				b("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (t = a.parentNode) === null || t === void 0 || t.removeChild(a)
			}
		};

	function Fr(e, t) {
		return e ? t ? !0 : U(Tr, e) : !1
	}
	var ut;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom", e.TimeMismatch = "timemismatch", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain"
	})(ut || (ut = {}));
	var Nt = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.slice(0, t) : e
	};

	function Dr(e) {
		if (!e) return "-";
		var t = function(n, a) {
			if (!n || n.tagName === "BODY") return a;
			for (var i = 1, u = n.previousElementSibling; u;) u.tagName === n.tagName && i++, u = u.previousElementSibling;
			var f = Nt(n.tagName.toLowerCase()),
				v = "".concat(f, "[").concat(i, "]");
			return t(n.parentNode, "/".concat(v).concat(a))
		};
		return t(e, "")
	}

	function Wr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var gn = {
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

	function Ur(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var n = Array.from(t.querySelectorAll("input, select, textarea, button")),
			a = n.slice(0, 20).map(function(u) {
				return gn[u.type] || "-"
			}).join(""),
			i = ["m:".concat(t.getAttribute("method") || ""), "f:".concat(n.length), a].join("|");
		return i
	}

	function Vr(e, t, n) {
		for (var a = "", i = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), u;
			(u = i.nextNode()) !== null && a.length < n;) {
			for (var f = 0, v = u; v !== null && v !== e;) f++, v = v.parentNode;
			if (!(f > t))
				if (u.nodeType === Node.ELEMENT_NODE) {
					var g = u;
					a += "".concat(Nt(g.tagName.toLowerCase()));
					var d = !0,
						S = !1,
						M = void 0;
					try {
						for (var A = Array.from(g.attributes)[Symbol.iterator](), w; !(d = (w = A.next()).done); d = !0) {
							var C = w.value;
							a += "_".concat(Nt(C.name, 2))
						}
					} catch (O) {
						S = !0, M = O
					} finally {
						try {
							!d && A.return != null && A.return()
						} finally {
							if (S) throw M
						}
					}
					a += ">"
				} else u.nodeType === Node.TEXT_NODE && (a += "-t")
		}
		return a.slice(0, n)
	}

	function jr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : L(e)));
		for (var t = 5381, n = 0; n < e.length; n++) {
			var a = e.charCodeAt(n);
			t = t * 33 ^ a
		}
		return t >>> 0
	}

	function yn(e) {
		try {
			return e.location.href
		} catch (t) {
			return
		}
	}

	function _n(e) {
		try {
			var t;
			return (t = e.parent) !== null && t !== void 0 ? t : null
		} catch (n) {
			return null
		}
	}

	function Br() {
		for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, t = e; t;) {
			var n = yn(t);
			if (n != null && n.startsWith("http")) return n;
			var a = _n(t);
			if (!a || a === t) return;
			t = a
		}
	}
	var hn = 900,
		bn = 45,
		xn = 50;

	function wn(e, t, n) {
		var a = e.widgetMap.get(t);
		(a == null ? void 0 : a.retryTimeout) !== void 0 && (window.clearTimeout(a.retryTimeout), a.retryTimeout = void 0), b("Cannot find Widget ".concat(n, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(t)
	}

	function En(e) {
		e.watchCatSeq++;
		var t = [],
			n = !0,
			a = !1,
			i = void 0;
		try {
			for (var u = e.widgetMap[Symbol.iterator](), f; !(n = (f = u.next()).done); n = !0) {
				var v = je(f.value, 2),
					g = v[0],
					d = v[1],
					S = K(g);
				if (!S || !d.shadow || !d.wrapper.isConnected) {
					d.watchcat.missingWidgetWarning || (d.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: S,
						widgetId: g
					}));
					continue
				}
				var M = d.shadow.querySelector("#".concat(S));
				if (!M) {
					d.watchcat.missingWidgetWarning || (d.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: S,
						widgetId: g
					}));
					continue
				}
				if (d.watchcat.seq = e.watchCatSeq, d.watchcat.lastAckedSeq === 0 && (d.watchcat.lastAckedSeq = e.watchCatSeq), !(d.isComplete || d.isFailed)) {
					var A = d.watchcat.seq - 1 - bn,
						w = d.watchcat.lastAckedSeq < A,
						C = d.watchcat.seq - 1 - xn,
						O = d.isOverrunning && d.watchcat.overrunBeginSeq !== 0 && d.watchcat.overrunBeginSeq < C;
					if ((d.isExecuting || !d.isInitialized || d.isInitialized && !d.isStale && !d.isExecuted) && d.watchcat.lastAckedSeq !== 0 && w || O) {
						var B;
						d.watchcat.lastAckedSeq = 0, d.watchcat.seq = 0, d.isExecuting = !1;
						var J = function(c, y) {
							console.log("Turnstile Widget seem to have ".concat(c, ": "), y)
						};
						J(w ? "hung" : "crashed", g);
						var W = w ? et : tt,
							E;
						if ((B = e.internalMsgHandler) === null || B === void 0 || B.call(e, {
								code: W,
								event: "fail",
								rcV: (E = d.nextRcV) !== null && E !== void 0 ? E : oe,
								source: X,
								widgetId: g
							}), 0) var H;
						continue
					}
					ue(M, {
						event: "meow",
						seq: e.watchCatSeq,
						source: X,
						widgetId: g
					}, d.iframeOrigin)
				}
			}
		} catch (c) {
			a = !0, i = c
		} finally {
			try {
				!n && u.return != null && u.return()
			} finally {
				if (a) throw i
			}
		}
		var R = !0,
			F = !1,
			D = void 0;
		try {
			for (var le = t[Symbol.iterator](), l; !(R = (l = le.next()).done); R = !0) {
				var o = l.value,
					r = o.widgetElId,
					s = o.widgetId;
				wn(e, s, r)
			}
		} catch (c) {
			F = !0, D = c
		} finally {
			try {
				!R && le.return != null && le.return()
			} finally {
				if (F) throw D
			}
		}
		t.length > 0 && e.widgetMap.size === 0 && Ge(e)
	}

	function Pt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			En(e)
		}, hn))
	}

	function Ge(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var Ft = Symbol();

	function Hr(e) {
		return (typeof e == "undefined" ? "undefined" : L(e)) === "object" && e !== null ? e : void 0
	}

	function lt(e) {
		return (typeof e == "undefined" ? "undefined" : L(e)) === "object" && e !== null && "widgetMap" in e && k(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
	}

	function Tn(e, t) {
		Object.defineProperty(e, Ft, {
			configurable: !0,
			enumerable: !1,
			value: t
		})
	}

	function In(e) {
		var t, n, a = (t = Object.getOwnPropertyDescriptor(e, Ft)) === null || t === void 0 ? void 0 : t.value;
		if (lt(a)) return a;
		var i = ot(e, lt);
		if (i) return i;
		var u = (n = Object.getOwnPropertyDescriptor(e, "_pState")) === null || n === void 0 ? void 0 : n.value;
		if (lt(u)) return u
	}

	function zr(e) {
		Reflect.deleteProperty(e, Ft);
		var t = !0,
			n = !1,
			a = void 0;
		try {
			for (var i = Object.getOwnPropertySymbols(e)[Symbol.iterator](), u; !(t = (u = i.next()).done); t = !0) {
				var f = u.value,
					v, g = (v = Object.getOwnPropertyDescriptor(e, f)) === null || v === void 0 ? void 0 : v.value;
				lt(g) && Reflect.deleteProperty(e, f)
			}
		} catch (d) {
			n = !0, a = d
		} finally {
			try {
				!t && i.return != null && i.return()
			} finally {
				if (n) throw a
			}
		}
		Reflect.deleteProperty(e, "_pState")
	}

	function qr(e, t) {
		var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ze;
		t.upgradeAttempts++;
		var a = n();
		if (!(a != null && a.parentNode)) return !1;
		var i = Hr(e);
		if (!i) return !1;
		var u = a == null ? void 0 : a.nonce;
		Tn(i, t);
		var f = new URL(a.src),
			v = document.createElement("script");
		f.searchParams.set("_upgrade", "true"), f.searchParams.set("_cb", String(Date.now())), v.async = !0, u && (v.nonce = u), v.setAttribute("crossorigin", "anonymous"), v.src = f.toString();
		try {
			return a.parentNode.replaceChild(v, a), !0
		} catch (g) {
			if (!k(g, DOMException)) throw g;
			return zr(i), !1
		}
	}

	function Gr(e, t, n) {
		var a = Hr(e);
		if (!a) return !1;
		var i = In(a);
		return i ? (t.isReady = i.isReady, t.isRecaptchaCompatibilityMode = i.isRecaptchaCompatibilityMode, t.lastWidgetIdx = i.lastWidgetIdx, t.scriptWasLoadedAsync = i.scriptWasLoadedAsync, t.upgradeAttempts = i.upgradeAttempts, t.upgradeCompletedCount = i.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = Q(), t.watchCatInterval = null, t.watchCatSeq = i.watchCatSeq, t.widgetMap = i.widgetMap, Ge(i, !0), i.msgHandler && window.removeEventListener("message", i.msgHandler), zr(a), n(), !0) : !1
	}

	function Dt(e) {
		return U(["auto", "dark", "light"], e)
	}

	function Wt(e) {
		return U(["auto", "never"], e)
	}

	function Ut(e) {
		return e > 0 && e < 9e5
	}

	function Vt(e) {
		return e > 0 && e < 36e4
	}
	var Sn = /^[0-9A-Za-z_-]{3,100}$/;

	function Xr(e) {
		return Sn.test(e)
	}
	var On = /^[a-z0-9_-]{0,32}$/i;

	function jt(e) {
		return e === void 0 ? !0 : typeof e == "string" && On.test(e)
	}
	var An = /^[a-z0-9_\-=]{0,255}$/i;

	function Bt(e) {
		return e === void 0 ? !0 : typeof e == "string" && An.test(e)
	}

	function Ht(e) {
		return U([V.Normal, V.Compact, V.Invisible, V.Flexible], e)
	}

	function zt(e) {
		return U(["auto", "manual", "never"], e)
	}

	function qt(e) {
		return U(["auto", "manual", "never"], e)
	}
	var Rn = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Gt(e) {
		return e === "auto" || Rn.test(e)
	}

	function Xt(e) {
		return U(["always", "execute", "interaction-only"], e)
	}

	function Yr(e) {
		return U(["true", "false"], e)
	}

	function Yt(e) {
		return U(["render", "execute"], e)
	}

	function Kr(e, t) {
		if (e.isResetting = !1, t) {
			t(String(sr));
			return
		}
		_("Could not load challenge from challenges.cloudflare.com.", 161)
	}
	var en = Symbol(),
		Ie = window;

	function ct(e) {
		return (typeof e == "undefined" ? "undefined" : L(e)) === "object" && e !== null && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
	}

	function Qr(e) {
		var t, n, a;
		if (!((typeof e == "undefined" ? "undefined" : L(e)) !== "object" || e === null)) {
			var i = (t = Object.getOwnPropertyDescriptor(e, en)) === null || t === void 0 ? void 0 : t.value;
			if (ct(i)) return i;
			var u = ot(e, ct);
			if (u) return u;
			var f = (n = Object.getOwnPropertyDescriptor(e, "_upgradeHooks")) === null || n === void 0 ? void 0 : n.value;
			if (ct(f)) return f;
			var v = (a = Object.getOwnPropertyDescriptor(e, "_private")) === null || a === void 0 ? void 0 : a.value;
			if (ct(v)) return v
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
			turnstileLoadInitTimeTsMs: Q(),
			upgradeAttempts: 0,
			upgradeCompletedCount: 0,
			watchCatInterval: null,
			watchCatSeq: 0,
			widgetMap: new Map
		},
		Ke;

	function tn() {
		Ke !== void 0 && (window.clearTimeout(Ke), Ke = void 0)
	}

	function $t() {
		tn(), Ke = window.setTimeout(function() {
			Ke = void 0, Vn()
		}, hr)
	}

	function Kt(e, t) {
		an(e, t, "")
	}

	function rn() {
		var e = [fr, pr];
		h.isRecaptchaCompatibilityMode && e.push(vr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Ye.render(t)
		})
	}
	var Zt = [];

	function Jr() {
		h.isReady = !0;
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var a = Zt[Symbol.iterator](), i; !(e = (i = a.next()).done); e = !0) {
				var u = i.value;
				u()
			}
		} catch (f) {
			t = !0, n = f
		} finally {
			try {
				!e && a.return != null && a.return()
			} finally {
				if (t) throw n
			}
		}
	}

	function $r(e, t) {
		e.onerror = function() {
			Kr(t, t.cbError)
		}
	}

	function nn(e, t) {
		var n, a = (n = e.params["response-field"]) !== null && n !== void 0 ? n : !0,
			i, u = a && typeof e.params["response-field-name"] != "string" && Dn((i = e.params.sitekey) !== null && i !== void 0 ? i : ""),
			f = h.isRecaptchaCompatibilityMode,
			v = "".concat(t, "_response"),
			g = "".concat(t, "_legacy_response"),
			d = "".concat(t, "_g_response"),
			S = (!a || k(document.getElementById(v), HTMLInputElement)) && (!u || k(document.getElementById(g), HTMLInputElement)) && (!f || k(document.getElementById(d), HTMLInputElement));
		if (!(e.responseElementsBuilt && S)) {
			if (a && !k(document.getElementById(v), HTMLInputElement)) {
				var M = document.createElement("input");
				M.type = "hidden";
				var A;
				M.name = (A = e.params["response-field-name"]) !== null && A !== void 0 ? A : gr, M.id = v, e.wrapper.appendChild(M)
			}
			if (u && !k(document.getElementById(g), HTMLInputElement)) {
				var w = document.createElement("input");
				w.type = "hidden", w.name = mr, w.id = g, e.wrapper.appendChild(w)
			}
			if (f && !k(document.getElementById(d), HTMLInputElement)) {
				var C = document.createElement("input");
				C.type = "hidden", C.name = yr, C.id = d, e.wrapper.appendChild(C)
			}
			e.responseElementsBuilt = !0
		}
	}

	function an(e, t, n) {
		nn(e, t);
		var a = document.getElementById("".concat(t, "_response"));
		a !== null && k(a, HTMLInputElement) && (a.value = n);
		var i = document.getElementById("".concat(t, "_legacy_response"));
		if (i !== null && k(i, HTMLInputElement) && (i.value = n), h.isRecaptchaCompatibilityMode) {
			var u = document.getElementById("".concat(t, "_g_response"));
			u !== null && k(u, HTMLInputElement) && (u.value = n)
		}
	}

	function gt(e, t) {
		var n;
		return !!(!((n = t.kills) === null || n === void 0) && n.includes(e))
	}

	function st(e, t) {
		var n = t.params,
			a = n.size,
			i = a === void 0 ? "normal" : a,
			u = t.mode;
		switch (u) {
			case Z.NonInteractive:
			case Z.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", i) {
					case V.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case V.Invisible:
						_('Invalid value for parameter "size", expected "'.concat(V.Compact, '", "').concat(V.Flexible, '", or "').concat(V.Normal, '", got "').concat(i, '"'), 2817);
					case V.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case V.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case Z.Invisible:
				gt("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				_('Invalid value for parameter "mode", expected "'.concat(Z.NonInteractive, '", "').concat(Z.Managed, '" or "').concat(Z.Invisible, '", got "').concat(u, '"'), 2818)
		}
	}

	function Zr(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function kn(e, t) {
		var n = t.get("turnstile_iframe_alt");
		n && (e.title = n)
	}

	function Pe(e, t) {
		return e.shadow.querySelector("#".concat(t))
	}

	function Cn(e, t) {
		var n, a;
		return (a = (n = e.wrapper.parentNode) === null || n === void 0 ? void 0 : n.querySelector("#".concat(t, "-fr"))) !== null && a !== void 0 ? a : null
	}

	function Mn(e) {
		var t;
		if (!((t = e.feedbackPopup) === null || t === void 0) && t.closed) return e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null;
		var n;
		return (n = e.feedbackPopup) !== null && n !== void 0 ? n : null
	}

	function yt(e, t) {
		var n, a, i = (a = (n = Cn(e, t)) === null || n === void 0 ? void 0 : n.contentWindow) !== null && a !== void 0 ? a : null;
		if (i) return {
			targetOrigin: e.feedbackIframeOrigin,
			targetWindow: i
		};
		var u = Mn(e);
		return {
			targetOrigin: u ? e.feedbackPopupOrigin : void 0,
			targetWindow: u
		}
	}

	function Ln(e) {
		if ((typeof e == "undefined" ? "undefined" : L(e)) !== "object" || e === null) return !1;
		var t = e;
		return t.source === X && typeof t.event == "string" && typeof t.widgetId == "string"
	}

	function Nn(e) {
		return e.isTrusted && Ln(e.data)
	}

	function Pn(e) {
		return Fr(e.origin, !1)
	}

	function Fn(e, t, n) {
		var a, i, u = (i = (a = Pe(t, n)) === null || a === void 0 ? void 0 : a.contentWindow) !== null && i !== void 0 ? i : null,
			f = yt(t, n).targetWindow,
			v = function(g) {
				return g !== null && e.source === g
			};
		switch (e.data.event) {
			case "requestFeedbackData":
			case "closeFeedbackReportIframe":
				return v(f);
			case "refreshRequest":
				return v(u) || e.data.reason === "feedback_refresh" && v(f);
			default:
				return v(u)
		}
	}

	function Dn(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Qt() {
		return Br(window)
	}

	function dt(e, t, n) {
		return e === null ? t : Yr(e) ? e === "true" : (b(n(e)), t)
	}

	function Wn() {
		if (typeof window.PerformanceObserver == "function") try {
			var e = ze();
			if (!e) return;
			var t = e.src,
				n = !0,
				a = !1,
				i = void 0;
			try {
				for (var u = performance.getEntriesByType("resource")[Symbol.iterator](), f; !(n = (f = u.next()).done); n = !0) {
					var v = f.value;
					if (k(v, PerformanceResourceTiming) && v.name.includes(t)) return v
				}
			} catch (g) {
				a = !0, i = g
			} finally {
				try {
					!n && u.return != null && u.return()
				} finally {
					if (a) throw i
				}
			}
		} catch (g) {}
	}
	var Ye = (function() {
		var e = function(o, r, s, c, y, m) {
				return W.apply(this, arguments)
			},
			t = function(o, r, s) {
				if (o.params.retry === ke.Auto || s) {
					var c, y = s ? 0 : 2e3 + ((c = o.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
					o.retryTimeout = window.setTimeout(function() {
						var m = s ? j.CrashedRetry : j.FailureRetry;
						A(m, r)
					}, y)
				}
			},
			n = function(o, r, s) {
				return o.params.execution === we.Render ? !0 : (r === j.CrashedRetry || r === j.FailureRetry || r === j.CheckDelays || r === j.UpgradeReload) && o.params.execution === we.Execute && s
			},
			a = function(o, r, s) {
				var c;
				o.response === void 0 && _("[Internal Error] Widget was completed but no response was given", 1362), o.isExecuting = !1, o.isComplete = !0, an(o, r, o.response), (c = o.cbSuccess) === null || c === void 0 || c.call(o, o.response, s)
			},
			i = function(o) {
				if (!o) return [];
				for (var r = o.attributes, s = r.length, c = new Array(s), y = 0; y < s; y++) c[y] = r[y].name;
				return c
			},
			u = function() {
				for (var o = {}, r = [], s = document.getElementsByTagName("*"), c = 0; c < s.length && r.length < 50; c++) {
					var y = s[c].tagName.toLowerCase();
					y.indexOf("-") !== -1 && !o[y] && (o[y] = !0, r.push(y))
				}
				return r
			},
			f = function(o, r, s) {
				if (o.rcV = r, 0) var c
			},
			v = function() {
				var o = "abcdefghijklmnopqrstuvwxyz0123456789",
					r = o.length,
					s = "";
				do {
					s = "";
					for (var c = 0; c < 5; c++) s += o.charAt(Math.floor(Math.random() * r))
				} while (h.widgetMap.has(s));
				return s
			},
			g = function(o) {
				var r = !0,
					s = !1,
					c = void 0;
				try {
					for (var y = h.widgetMap[Symbol.iterator](), m; !(r = (m = y.next()).done); r = !0) {
						var x = je(m.value, 2),
							T = x[0],
							I = x[1];
						if (I.wrapper.parentElement === o) return T
					}
				} catch (N) {
					s = !0, c = N
				} finally {
					try {
						!r && y.return != null && y.return()
					} finally {
						if (s) throw c
					}
				}
				return null
			},
			d = function(o, r, s) {
				for (; o.msgQueue.length > 0;) {
					var c = o.msgQueue.pop();
					ue(s, {
						event: c,
						source: X,
						widgetId: r
					}, o.iframeOrigin)
				}
			},
			S = function(o, r) {
				if (r) {
					var s = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						c = Object.prototype.hasOwnProperty,
						y = [],
						m = !0,
						x = !1,
						T = void 0;
					try {
						for (var I = s[Symbol.iterator](), N; !(m = (N = I.next()).done); m = !0) {
							var p = N.value;
							c.call(r, p) && r[p] !== o.params[p] && y.push(p)
						}
					} catch (z) {
						x = !0, T = z
					} finally {
						try {
							!m && I.return != null && I.return()
						} finally {
							if (x) throw T
						}
					}
					y.length > 0 && _("The parameters ".concat(s.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(y.join(",")), 3618), r.action && (jt(r.action) || _('Invalid input for optional parameter "action", got "'.concat(r.action, '"'), 3604), o.action = r.action), r.cData && (Bt(r.cData) || _('Invalid input for optional parameter "cData", got "'.concat(r.cData, '"'), 3605), o.cData = r.cData), r["after-interactive-callback"] && (o.cbAfterInteractive = r["after-interactive-callback"]), r["before-interactive-callback"] && (o.cbBeforeInteractive = r["before-interactive-callback"]), r.callback && (o.cbSuccess = r.callback), r["expired-callback"] && (o.cbExpired = r["expired-callback"]), r["timeout-callback"] && (o.cbTimeout = r["timeout-callback"]), r["error-callback"] && (o.cbError = r["error-callback"]), r["unsupported-callback"] && (o.cbUnsupported = r["unsupported-callback"]), r.chlPageData && (o.chlPageData = r.chlPageData)
				}
			},
			M = function(o) {
				A(j.Api, o)
			},
			A = function(o, r) {
				var s = R(r);
				s || _("Nothing to reset found for provided container", 3329);
				var c = h.widgetMap.get(s);
				if (c) {
					var y, m = c.isExecuted;
					c.isResetting = !0, c.response = void 0, c.mode = void 0, c.msgQueue = [], c.isComplete = !1, c.isExecuted = !1, c.isExecuting = !1, c.isExpired = !1, c.isFailed = !1, c.isInitialized = !1, c.isStale = !1, c.isOverrunning = !1, c.cfChlOut = void 0, c.cfChlOutS = void 0, c.errorCode = void 0, c.frMd = void 0, c.watchcat.overrunBeginSeq = 0, c.watchcat.lastAckedSeq = 0, c.watchcat.seq = 0, n(c, o, m) && (c.msgQueue.push(Ce.Execute), c.isExecuted = !0, c.isExecuting = !0);
					var x = K(s),
						T = c.shadow.querySelector("#".concat(x));
					(!x || !T) && _("Widget ".concat(s, " to reset was not found."), 3330), (c.params.appearance === ee.InteractionOnly || c.params.appearance === ee.Execute) && Zr(T), c.params.sitekey === null && _("Unexpected Error: Sitekey is null", 3347);
					var I = T.cloneNode(),
						N, p = Rt(s, c.params.sitekey, c.params, (N = c.rcV) !== null && N !== void 0 ? N : oe, !1, "g", o, h.scriptUrlParsed, It(c));
					I.src = p, $r(I, c), c.iframeOrigin = Me(p), (y = T.parentNode) === null || y === void 0 || y.replaceChild(I, T), Kt(c, x), c.retryTimeout && window.clearTimeout(c.retryTimeout)
				} else _("Widget ".concat(s, " to reset was not found."), 3331)
			},
			w = function(o) {
				var r = R(o),
					s = r ? h.widgetMap.get(r) : void 0;
				if (!r || !s) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var c = K(r);
				if (c) {
					var y = ["input#".concat(c, "_response"), "input#".concat(c, "_legacy_response"), "input#".concat(c, "_g_response")];
					document.querySelectorAll(y.join(", ")).forEach(function(m) {
						return m.remove()
					}), s.shadow.querySelectorAll(y.join(", ")).forEach(function(m) {
						return m.remove()
					}), qe(c), Le(s)
				}
				s.wrapper.remove(), s.retryTimeout && window.clearTimeout(s.retryTimeout), h.widgetMap.delete(r), Ge(h)
			},
			C = function() {
				var o = Array.from(h.widgetMap.keys()),
					r = !0,
					s = !1,
					c = void 0;
				try {
					for (var y = o[Symbol.iterator](), m; !(r = (m = y.next()).done); r = !0) {
						var x = m.value,
							T = h.widgetMap.get(x),
							I = K(x);
						!I || !T || (qe(I), Le(T), A(j.UpgradeReload, I))
					}
				} catch (N) {
					s = !0, c = N
				} finally {
					try {
						!r && y.return != null && y.return()
					} finally {
						if (s) throw c
					}
				}
			},
			O = function(o, r) {
				var s, c, y = Q(),
					m;
				if (typeof o == "string") {
					var x;
					try {
						x = document.querySelector(o)
					} catch (jn) {
						_('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(o, '"'), 3586)
					}
					x || _('Unable to find a container for "'.concat(o, '"'), 3585), m = x
				} else k(o, HTMLElement) ? m = o : _('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var T = g(m);
				if (T) return b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?"), K(T);
				var I = Qt();
				if (!I) return _("Turnstile cannot determine its page location", 3607);
				var N = Un(m);
				if (N) {
					var p = Object.assign(N, r),
						z = p.action,
						ne = p.cData,
						ce = p.chlPageData,
						$ = p.sitekey,
						se;
					p.theme = (se = p.theme) !== null && se !== void 0 ? se : Ae.Auto;
					var Y;
					p.retry = (Y = p.retry) !== null && Y !== void 0 ? Y : ke.Auto;
					var de;
					p.execution = (de = p.execution) !== null && de !== void 0 ? de : we.Render;
					var ae;
					p.appearance = (ae = p.appearance) !== null && ae !== void 0 ? ae : ee.Always;
					var q;
					p["retry-interval"] = Number((q = p["retry-interval"]) !== null && q !== void 0 ? q : _r);
					var me;
					p["expiry-interval"] = Number((me = p["expiry-interval"]) !== null && me !== void 0 ? me : (lr - cr) * 1e3);
					var ge;
					p.size = (ge = p.size) !== null && ge !== void 0 ? ge : V.Normal;
					var _t = p.callback,
						Fe = p["expired-callback"],
						ht = p["timeout-callback"],
						Qe = p["after-interactive-callback"],
						De = p["before-interactive-callback"],
						We = p["error-callback"],
						Je = p["unsupported-callback"];
					typeof $ != "string" && _('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof $ == "undefined" ? "undefined" : L($), '"'), 3588), Xr($) || _('Invalid input for parameter "sitekey", got "'.concat($, '"'), 3589), Ht(p.size) || _('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(L(p.size)), 3590), Dt(p.theme) || _('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(L(p.theme)), 3591), Wt(p.retry) || _('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(L(p.retry)), 3592), p.language || (p.language = "auto"), Gt(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), Xt(p.appearance) || _('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Yt(p.execution) || _('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), Ut(p["retry-interval"]) || _('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Vt(p["expiry-interval"]) || _('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var ye, ie = (ye = p["refresh-expired"]) !== null && ye !== void 0 ? ye : pe.Auto;
					zt(ie) ? p["refresh-expired"] = ie : _('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(ie, '" ').concat(typeof ie == "undefined" ? "undefined" : L(ie)), 3603);
					var Ue, _e = (Ue = p["refresh-timeout"]) !== null && Ue !== void 0 ? Ue : xe.Auto;
					qt(_e) ? p["refresh-timeout"] = _e : _('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(_e, '" ').concat(typeof _e == "undefined" ? "undefined" : L(_e)), 3603);
					var G = document.createElement("iframe"),
						te = document.createElement("div"),
						Ve = te.attachShadow({
							mode: "closed"
						});
					jt(z) || _('Invalid input for optional parameter "action", got "'.concat(z, '"'), 3604), Bt(ne) || _('Invalid input for optional parameter "cData", got "'.concat(ne, '"'), 3605);
					var he = v(),
						fe = K(he);
					if (!(!he || !fe)) {
						var be = [],
							bt = p.execution === we.Render;
						bt && be.push(Ce.Execute), h.lastWidgetIdx++;
						var on = {};
						h.widgetMap.set(he, Et($e({
							action: z,
							cbAfterInteractive: Qe,
							cbBeforeInteractive: De,
							cbError: We,
							cbExpired: Fe,
							cbSuccess: _t,
							cbTimeout: ht,
							cbUnsupported: Je,
							cData: ne,
							chlPageData: ce,
							idx: h.lastWidgetIdx,
							isComplete: !1,
							isExecuted: bt,
							isExecuting: bt,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: be,
							params: p,
							rcV: oe,
							responseElementsBuilt: !1,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, on), {
							isOverrunning: !1,
							shadow: Ve,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: y,
							wrapper: te
						})), Pt(h);
						var Se = h.widgetMap.get(he);
						Se || _("Turnstile Initialization Error ", 3606), G.style.display = "none", G.style.border = "none", G.style.overflow = "hidden";
						var er = Rt(he, $, p, oe, !1, "g", j.New, h.scriptUrlParsed, It(Se));
						Se.iframeOrigin = Me(er), G.setAttribute("src", er), $r(G, Se);
						var tr = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"],
							xt;
						U((xt = (c = document.featurePolicy) === null || c === void 0 || (s = c.features) === null || s === void 0 ? void 0 : s.call(c)) !== null && xt !== void 0 ? xt : [], St) && tr.push(St), G.setAttribute("allow", tr.join("; ")), G.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), G.id = fe;
						var wt;
						return G.tabIndex = (wt = p.tabindex) !== null && wt !== void 0 ? wt : 0, G.title = "Widget containing a Cloudflare security challenge", Ve.appendChild(G), nn(Se, fe), m.appendChild(te), Se.widgetRenderEndTimeTsMs = Q(), fe
					}
				}
			},
			B = function() {
				var o, r = -1,
					s = !0,
					c = !1,
					y = void 0;
				try {
					for (var m = h.widgetMap[Symbol.iterator](), x; !(s = (x = m.next()).done); s = !0) {
						var T = je(x.value, 2),
							I = T[0],
							N = T[1];
						r < N.idx && (o = I, r = N.idx)
					}
				} catch (p) {
					c = !0, y = p
				} finally {
					try {
						!s && m.return != null && m.return()
					} finally {
						if (c) throw y
					}
				}
				return r === -1 && _("Could not find widget", 43778), o
			},
			J = Wn();

		function W() {
			return W = nr(function(l, o, r, s, c, y) {
				var m, x, T, I, N, p, z, ne, ce, $, se;
				return Ze(this, function(Y) {
					switch (Y.label) {
						case 0:
							if (x = function(de, ae) {
									var q = h.widgetMap.get(o);
									q !== l || q.isComplete || q.isResetting || q.response !== s || (!de && ae && b(ae), a(q, r, de))
								}, T = l.params.sitekey, I = Qt(), !I) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(l, r, !1), [2];
							N = "h/".concat("g", "/"), p = new URL(I), z = "https", ne = "", ce = "".concat(z, "://").concat(p.host, "/cdn-cgi/challenge-platform/").concat(N, "rc/").concat(y).concat(ne), Y.label = 1;
						case 1:
							return Y.trys.push([1, 3, , 4]), [4, fetch(ce, {
								body: JSON.stringify({
									secondaryToken: c,
									sitekey: T
								}),
								headers: {
									"Content-Type": "application/json"
								},
								method: "POST",
								redirect: "manual"
							})];
						case 2:
							return $ = Y.sent(), $.status === 200 ? x(!0) : x(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
						case 3:
							return se = Y.sent(), x(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
						case 4:
							return [2]
					}
				})
			}), W.apply(this, arguments)
		}
		var E = function(l) {
				if (l.source === X && !(!l.widgetId || !h.widgetMap.has(l.widgetId))) {
					var o = K(l.widgetId),
						r = h.widgetMap.get(l.widgetId);
					if (!(!o || !r)) switch (l.event) {
						case "init": {
							r.widgetInitStartTimeTsMs = Q(), r.kills = l.kills;
							var s = r.shadow.getElementById(o);
							s || _("Cannot initialize Widget, Element not found (#".concat(o, ")."), 3074), r.mode = l.mode, r.nextRcV = l.nextRcV, r.mode === Z.Invisible && r.params["refresh-expired"] === pe.Manual && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(pe.Auto, "' or '").concat(pe.Never, ".'")), r.mode !== Z.Managed && r.params["refresh-timeout"] !== xe.Auto && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === ee.Always || r.isExecuting && r.params.appearance === ee.Execute ? st(s, r) : Zr(s), s.style.display = "";
							var c = Pe(r, o);
							c || _("Received state for an unknown widget: ".concat(l.widgetId), 3078), ue(c, {
								event: "init",
								source: X,
								widgetId: l.widgetId
							}, r.iframeOrigin);
							break
						}
						case "translationInit": {
							var y = r.shadow.getElementById(o);
							y || _("Cannot initialize Widget, Element not found (#".concat(o, ")."), 3074);
							var m = new Map;
							r.displayLanguage = l.displayLanguage, r.displayRtl = l.displayRtl, Object.keys(l.translationData).forEach(function(be) {
								m.set(be, l.translationData[be])
							}), kn(y, m);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(l.fallback, ".")), r.displayLanguage = l.fallback;
							break
						}
						case "reject": {
							var x = r.shadow.getElementById(o);
							if (r.isExecuting = !1, x || _("Cannot initialize Widget, Element not found (#".concat(o, ")."), 3075), l.reason === "unsupported_browser") {
								var T;
								(T = r.cbUnsupported) === null || T === void 0 || T.call(r)
							}
							break
						}
						case "food": {
							r.watchcat && l.seq > r.watchcat.lastAckedSeq && (r.watchcat.lastAckedSeq = l.seq);
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
							if (f(r, oe, l.widgetId), r.response = l.token, l.scs && !gt("scs", r) && (r.scs = l.scs, r.params["session-continuity-persist"] && !gt("scs_persist", r))) {
								var I = r.params.sitekey;
								if (I) {
									var N = "".concat(Ot).concat(I);
									try {
										localStorage.setItem(N, l.scs)
									} catch (be) {}
								}
							}
							l.sToken ? e(r, l.widgetId, o, l.token, l.sToken, l.chlId) : a(r, o, !1);
							break
						}
						case "fail": {
							l.rcV && f(r, l.rcV, l.widgetId), l.cfChlOut && (r.cfChlOut = l.cfChlOut), l.cfChlOutS && (r.cfChlOutS = l.cfChlOutS), l.code && (r.errorCode = l.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, l.frMd && (r.frMd = l.frMd), Kt(r, o);
							var p = r.cbError,
								z = l.code === et || l.code === tt;
							if (z) {
								var ne = Pe(r, o);
								ne && ue(ne, {
									event: "forceFail",
									source: X,
									widgetId: l.widgetId
								}, r.iframeOrigin)
							}
							if (p) {
								var ce;
								p(String((ce = l.code) !== null && ce !== void 0 ? ce : dr)) ? (r.params.retry === ke.Auto || z) && !r.isResetting && t(r, o, z) : (l.code && b("Error: ".concat(l.code, ".")), t(r, o, z))
							} else l.code ? (t(r, o, z), _("Error: ".concat(l.code), 3076)) : t(r, o, !1);
							break
						}
						case "feedbackInit": {
							var $ = yt(r, o).targetWindow;
							if ($) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							Lt(o, r, l.feedbackOrigin, h.scriptUrlParsed);
							break
						}
						case "requestFeedbackData": {
							var se = Pe(r, o);
							se || _("Received state for an unknown widget: #".concat(o, " / ").concat(l.widgetId), 3078), ue(se, {
								event: "requestTurnstileResults",
								source: X,
								widgetId: l.widgetId
							}, r.iframeOrigin);
							break
						}
						case "turnstileResults": {
							var Y = yt(r, o),
								de = Y.targetOrigin,
								ae = Y.targetWindow;
							if (!ae) break;
							var q, me, ge;
							Ct(ae, {
								cfChlOut: (q = r.cfChlOut) !== null && q !== void 0 ? q : l.cfChlOut,
								cfChlOutS: (me = r.cfChlOutS) !== null && me !== void 0 ? me : l.cfChlOutS,
								errorCode: r.errorCode,
								event: "feedbackData",
								frMd: (ge = r.frMd) !== null && ge !== void 0 ? ge : l.frMd,
								mode: l.mode,
								rayId: l.rayId,
								rcV: l.rcV,
								sitekey: l.sitekey,
								source: X,
								widgetId: l.widgetId
							}, de);
							break
						}
						case "closeFeedbackReportIframe": {
							var _t = yt(r, o).targetWindow;
							_t || _("Received state for an unknown widget: ".concat(l.widgetId), 3078), qe(o), Le(r);
							break
						}
						case "tokenExpired": {
							var Fe, ht = l.token;
							r.isExpired = !0, (Fe = r.cbExpired) === null || Fe === void 0 || Fe.call(r, ht), r.params["refresh-expired"] === pe.Auto && !r.isResetting && A(j.AutoExpire, o);
							break
						}
						case "interactiveTimeout": {
							f(r, oe, l.widgetId), Kt(r, o);
							var Qe = r.cbTimeout;
							if (Qe ? Qe() : r.params["refresh-timeout"] === xe.Never && !r.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === xe.Auto && !r.isResetting) {
								var De = r.cbAfterInteractive;
								De == null || De(), A(j.AutoTimeout, o)
							}
							break
						}
						case "refreshRequest": {
							f(r, oe, l.widgetId), qe(o), Le(r), A(j.ManualRefresh, o);
							break
						}
						case "reloadRequest": {
							f(r, l.nextRcV, l.widgetId), A(l.trigger, o);
							break
						}
						case "interactiveBegin": {
							var We, Je = r.shadow.getElementById(o);
							Je || _("Cannot layout widget, Element not found (#".concat(o, ")."), 3076), (We = r.cbBeforeInteractive) === null || We === void 0 || We.call(r), r.params.appearance === ee.InteractionOnly && st(Je, r);
							break
						}
						case "interactiveEnd": {
							var ye;
							(ye = r.cbAfterInteractive) === null || ye === void 0 || ye.call(r);
							break
						}
						case "widgetStale": {
							r.isStale = !0;
							break
						}
						case "requestExtraParams": {
							r.widgetParamsStartTimeTsMs = Q();
							var ie = Pe(r, o);
							ie || _("Received state for an unknown widget: ".concat(l.widgetId), 3078), r.isResetting = !1;
							var Ue = {},
								_e = Q(),
								G = {
									"d.cT": u(),
									"ht.atrs": i(document.body.parentNode),
									"pg.ref": document.referrer,
									pi: {
										ffp: Ur(r.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: Vr(document, br, xr),
										sL: document.scripts.length,
										sR: r.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: "".concat(document.title.length, "|").concat(jr(document.title)),
										tL: document.getElementsByTagName("*").length,
										wp: Wr(r.wrapper),
										xp: Dr(r.wrapper).slice(0, wr)
									},
									"w.iW": window.innerWidth
								},
								te = r.scs;
							if (!te && r.params["session-continuity-persist"] && !gt("scs_persist", r)) {
								var Ve = r.params.sitekey;
								if (Ve) {
									var he = "".concat(Ot).concat(Ve);
									try {
										var fe;
										te = (fe = localStorage.getItem(he)) !== null && fe !== void 0 ? fe : void 0
									} catch (be) {}
								}
							}
							te && te.length > Er && (te = void 0), ue(ie, $e({
								action: r.action,
								apiJsResourceTiming: J ? JSON.parse(JSON.stringify(J)) : void 0,
								appearance: r.params.appearance,
								au: h.scriptUrl,
								cData: r.cData,
								ch: "a80f1640690f",
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
								scs: te,
								source: X,
								timeExtraParamsMs: Q() - r.widgetRenderStartTimeTsMs,
								timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
								timeLoadInitMs: Q() - h.turnstileLoadInitTimeTsMs,
								timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
								timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
								timeTiefMs: Q() - _e,
								upgradeAttempts: h.upgradeAttempts,
								upgradeCompletedCount: h.upgradeCompletedCount,
								url: Qt(),
								widgetId: l.widgetId,
								wPr: G
							}, Ue), r.iframeOrigin), d(r, l.widgetId, ie), r.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			},
			H = function(l) {
				if (Nn(l)) {
					var o = l.data;
					if (!Pn(l)) {
						b("Ignored message from wrong origin: ".concat(l.origin, "."));
						return
					}
					if (!(!o.widgetId || !h.widgetMap.has(o.widgetId))) {
						var r = K(o.widgetId),
							s = h.widgetMap.get(o.widgetId);
						if (!(!r || !s)) {
							if (!Fn(l, s, r)) {
								b("Ignored message from unexpected source for event: ".concat(o.event, "."));
								return
							}
							E(o)
						}
					}
				}
			};
		h.msgHandler = H, h.internalMsgHandler = E, window.addEventListener("message", H);

		function R(l) {
			if (typeof l == "string") {
				var o = He(l);
				if (o && h.widgetMap.has(o)) return o;
				if (h.widgetMap.has(l)) return l;
				try {
					var r = document.querySelector(l);
					return r ? R(r) : null
				} catch (c) {
					return null
				}
			}
			if (k(l, Element)) return g(l);
			if (l || h.widgetMap.size === 0) return null;
			var s;
			return (s = B()) !== null && s !== void 0 ? s : null
		}
		var F = {},
			D = {
				showFeedback: function(o) {
					var r = R(o);
					if (r) {
						var s = K(r);
						if (s) {
							var c = h.widgetMap.get(r);
							c && Lt(s, c, ut.Custom, h.scriptUrlParsed)
						}
					}
				}
			},
			le = Et($e({}, F), {
				_private: D,
				execute: function(o, r) {
					var s = R(o);
					if (!s) {
						r === void 0 && _("Please provide 2 parameters to execute: container and parameters", 43521);
						var c = O(o, r);
						c || _("Failed to render widget", 43522);
						var y;
						s = (y = He(c)) !== null && y !== void 0 ? y : R(o), s || _("Failed to render widget", 43522)
					}
					var m = h.widgetMap.get(s);
					if (m) {
						S(m, r);
						var x = K(s);
						if (x || (m.isExecuting = !1, _("Widget ".concat(s, " to execute was not found"), 43522)), m.isExecuting) {
							b("Call to execute() on a widget that is already executing (".concat(x, "), consider using reset() before execute()."));
							return
						}
						if (m.isExecuting = !0, m.response) {
							var T;
							m.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(x, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (T = m.cbSuccess) === null || T === void 0 || T.call(m, m.response, !1);
							return
						}
						m.isExpired && b("Call to execute on a expired-widget (".concat(x, "), consider using reset() before.")), m.isStale && (A(j.StaleExecute, x), m.isExecuting = !0), (m.isResetting || !m.isInitialized) && m.msgQueue.push(Ce.Execute), m.isExecuted = !0;
						var I = Pe(m, x);
						if (I || (m.isExecuting = !1, _("Widget ".concat(x, " to execute was not found"), 43522)), m.isResetting || !m.isInitialized) return;
						if (m.isInitialized && m.msgQueue.length > 0) {
							d(m, s, I), m.params.appearance === ee.Execute && st(I, m);
							return
						}
						m.isInitialized && m.params.appearance === ee.Execute && st(I, m), m.isExecuting && ue(I, {
							event: "execute",
							source: X,
							widgetId: s
						}, m.iframeOrigin)
					}
				},
				getResponse: function(o) {
					var r;
					if (typeof o == "undefined") {
						var s = B();
						if (s) {
							var c = h.widgetMap.get(s);
							return c != null && c.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), c == null ? void 0 : c.response
						}
						_("Could not find a widget", 43794)
					}
					var y = R(o);
					return y || _("Could not find widget for provided container", 43778), (r = h.widgetMap.get(y)) === null || r === void 0 ? void 0 : r.response
				},
				implicitRender: rn,
				isExpired: function(o) {
					var r;
					if (typeof o == "undefined") {
						var s = B();
						if (s) {
							var c, y;
							return (y = (c = h.widgetMap.get(s)) === null || c === void 0 ? void 0 : c.isExpired) !== null && y !== void 0 ? y : !1
						}
						_("Could not find a widget", 43794)
					}
					var m = R(o);
					m || _("Could not find widget for provided container", 43778);
					var x;
					return (x = (r = h.widgetMap.get(m)) === null || r === void 0 ? void 0 : r.isExpired) !== null && x !== void 0 ? x : !1
				},
				ready: function(o) {
					if (h.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), _("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof o != "function" && _('turnstile.ready() expected a "function" argument, got "'.concat(typeof o == "undefined" ? "undefined" : L(o), '"'), 3841), h.isReady) {
						o();
						return
					}
					Zt.push(o)
				},
				remove: w,
				render: O,
				reset: M
			});
		return Object.defineProperty(le, en, {
			configurable: !0,
			enumerable: !1,
			value: {
				rearmTimedUpgrade: function() {
					$t()
				},
				reloadAfterUpgrade: function() {
					C()
				}
			}
		}), le
	})();

	function Un(e) {
		var t = e.getAttribute("data-sitekey"),
			n = {
				sitekey: t
			},
			a = e.getAttribute("data-tabindex");
		a && (n.tabindex = Number.parseInt(a, 10));
		var i = e.getAttribute("data-theme");
		i && (Dt(i) ? n.theme = i : b('Unknown data-theme value: "'.concat(i, '".')));
		var u = e.getAttribute("data-size");
		if (u && (Ht(u) ? n.size = u : b('Unknown data-size value: "'.concat(u, '".'))), 0) var f;
		var v = e.getAttribute("data-action");
		typeof v == "string" && (n.action = v);
		var g = e.getAttribute("data-cdata");
		typeof g == "string" && (n.cData = g);
		var d = e.getAttribute("data-retry");
		d && (Wt(d) ? n.retry = d : b('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\".")));
		var S = e.getAttribute("data-retry-interval");
		if (S) {
			var M = Number.parseInt(S, 10);
			Ut(M) ? n["retry-interval"] = M : b('Invalid data-retry-interval value: "'.concat(S, ', expected an integer value > 0 and < 900000".'))
		}
		var A = e.getAttribute("data-expiry-interval");
		if (A) {
			var w = Number.parseInt(A, 10);
			Vt(w) ? n["expiry-interval"] = w : b('Invalid data-expiry-interval value: "'.concat(w, ', expected an integer value > 0 and < 360000".'))
		}
		var C = e.getAttribute("data-refresh-expired");
		C && (zt(C) ? n["refresh-expired"] = C : b('Unknown data-refresh-expired value: "'.concat(C, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-refresh-timeout");
		O && (qt(O) ? n["refresh-timeout"] = O : b('Unknown data-refresh-timeout value: "'.concat(O, ", expected either: 'never', 'auto' or 'manual'.")));
		var B = e.getAttribute("data-language");
		B && (Gt(B) ? n.language = B : b('Invalid data-language value: "'.concat(B, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function J(s) {
			var c = e.getAttribute(s),
				y = c ? Ie[c] : void 0;
			return typeof y == "function" ? y : void 0
		}
		var W = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		W.forEach(function(s) {
			Object.assign(n, Oe({}, s, J("data-".concat(s))))
		});
		var E;
		n["feedback-enabled"] = (E = dt(e.getAttribute("data-feedback-enabled"), !0, function(s) {
			return 'Invalid data-feedback-enabled value: "'.concat(s, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && E !== void 0 ? E : !0;
		var H;
		n["response-field"] = (H = dt(e.getAttribute("data-response-field"), !0, function(s) {
			return 'Invalid data-response-field value: "'.concat(s, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && H !== void 0 ? H : !0;
		var R = e.getAttribute("data-response-field-name");
		R && (n["response-field-name"] = R);
		var F = e.getAttribute("data-execution");
		F && (Yt(F) ? n.execution = F : b('Unknown data-execution value: "'.concat(F, ", expected either: 'render' or 'execute'.")));
		var D = e.getAttribute("data-appearance");
		D && (Xt(D) ? n.appearance = D : b('Unknown data-appearance value: "'.concat(D, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var le = e.getAttribute("data-offlabel-show-privacy"),
			l = dt(le, void 0, function(s) {
				return 'Invalid data-offlabel-show-privacy value: "'.concat(s, '", expected "true" or "false".')
			});
		typeof l == "boolean" && (n["offlabel-show-privacy"] = l);
		var o = e.getAttribute("data-offlabel-show-help"),
			r = dt(o, void 0, function(s) {
				return 'Invalid data-offlabel-show-help value: "'.concat(s, '", expected "true" or "false".')
			});
		return typeof r == "boolean" && (n["offlabel-show-help"] = r), n
	}

	function Vn() {
		tn();
		var e = qr(window.turnstile, h);
		if (!e) {
			$t();
			return
		}
	}
	Te = !1, P = Cr(), h.scriptWasLoadedAsync = (ft = P == null ? void 0 : P.loadedAsync) !== null && ft !== void 0 ? ft : !1, h.scriptUrl = (pt = P == null ? void 0 : P.src) !== null && pt !== void 0 ? pt : "undefined", h.scriptUrlParsed = P == null ? void 0 : P.url, P != null && P.params && (Ne = P.params.get("compat"), (Ne == null ? void 0 : Ne.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Ye) : Ne !== null && b('Unknown value for api.js?compat: "'.concat(Ne, '", ignoring.')), P.params.forEach(function(e, t) {
		U(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || b('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Te = P.params.get("_upgrade") === "true", re = P.params.get("onload"), re && !Te && setTimeout(function() {
		typeof Ie[re] == "function" ? Ie[re]() : (b("Unable to find onload callback '".concat(re, "' immediately after loading, expected 'function', got '").concat(L(Ie[re]), "'.")), setTimeout(function() {
			typeof Ie[re] == "function" ? Ie[re]() : b("Unable to find onload callback '".concat(re, "' after 1 second, expected 'function', got '").concat(L(Ie[re]), "'."))
		}, 1e3))
	}, 0)), Xe = "turnstile" in window, vt = Xe ? Qr(window.turnstile) : void 0, Jt = Xe && Te ? Gr(window.turnstile, h, function() {
		var e;
		window.turnstile = Ye, (e = Qr(Ye)) === null || e === void 0 || e.reloadAfterUpgrade(), Pt(h)
	}) : !1, Xe && Te && !Jt ? (b("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), vt == null || vt.rearmTimedUpgrade()) : Xe && !Te ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Jt || (window.turnstile = Ye), Te || ((P == null || (mt = P.params) === null || mt === void 0 ? void 0 : mt.get("render")) !== "explicit" && Zt.push(rn), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Jr, 0) : window.addEventListener("DOMContentLoaded", Jr)), $t());
	var Te, P, ft, pt, Ne, re, Xe, vt, Jt, mt;
})();