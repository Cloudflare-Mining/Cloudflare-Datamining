"use strict";
(function() {
	function xr(e, t, a, i, o, u, s) {
		try {
			var d = e[u](s),
				p = d.value
		} catch (f) {
			a(f);
			return
		}
		d.done ? t(p) : Promise.resolve(p).then(i, o)
	}

	function Er(e) {
		return function() {
			var t = this,
				a = arguments;
			return new Promise(function(i, o) {
				var u = e.apply(t, a);

				function s(p) {
					xr(u, i, o, s, d, "next", p)
				}

				function d(p) {
					xr(u, i, o, s, d, "throw", p)
				}
				s(void 0)
			})
		}
	}

	function Pe(e, t, a) {
		return t in e ? Object.defineProperty(e, t, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = a, e
	}

	function L(e, t) {
		"@swc/helpers - instanceof";
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
	}

	function Te(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = arguments[t] != null ? arguments[t] : {},
				i = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(a).filter(function(o) {
				return Object.getOwnPropertyDescriptor(a, o).enumerable
			}))), i.forEach(function(o) {
				Pe(e, o, a[o])
			})
		}
		return e
	}

	function Ja(e, t) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			t && (i = i.filter(function(o) {
				return Object.getOwnPropertyDescriptor(e, o).enumerable
			})), a.push.apply(a, i)
		}
		return a
	}

	function Ut(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ja(Object(t)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
		}), e
	}

	function wr(e) {
		if (Array.isArray(e)) return e
	}

	function Ir(e, t) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var i = [],
				o = !0,
				u = !1,
				s, d;
			try {
				for (a = a.call(e); !(o = (s = a.next()).done) && (i.push(s.value), !(t && i.length === t)); o = !0);
			} catch (p) {
				u = !0, d = p
			} finally {
				try {
					!o && a.return != null && a.return()
				} finally {
					if (u) throw d
				}
			}
			return i
		}
	}

	function Rr() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function je(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var a = 0, i = new Array(t); a < t; a++) i[a] = e[a];
		return i
	}

	function dt(e, t) {
		if (e) {
			if (typeof e == "string") return je(e, t);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return je(e, t)
		}
	}

	function Ge(e, t) {
		return wr(e) || Ir(e, t) || dt(e, t) || Rr()
	}

	function F(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Tr(e, t) {
		var a, i, o, u = {
				label: 0,
				sent: function() {
					if (o[0] & 1) throw o[1];
					return o[1]
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
			return function(E) {
				return f([v, E])
			}
		}

		function f(v) {
			if (a) throw new TypeError("Generator is already executing.");
			for (; s && (s = 0, v[0] && (u = 0)), u;) try {
				if (a = 1, i && (o = v[0] & 2 ? i.return : v[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, v[1])).done) return o;
				switch (i = 0, o && (v = [v[0] & 2, o.value]), v[0]) {
					case 0:
					case 1:
						o = v;
						break;
					case 4:
						return u.label++, {
							value: v[1],
							done: !1
						};
					case 5:
						u.label++, i = v[1], v = [0];
						continue;
					case 7:
						v = u.ops.pop(), u.trys.pop();
						continue;
					default:
						if (o = u.trys, !(o = o.length > 0 && o[o.length - 1]) && (v[0] === 6 || v[0] === 2)) {
							u = 0;
							continue
						}
						if (v[0] === 3 && (!o || v[1] > o[0] && v[1] < o[3])) {
							u.label = v[1];
							break
						}
						if (v[0] === 6 && u.label < o[1]) {
							u.label = o[1], o = v;
							break
						}
						if (o && u.label < o[2]) {
							u.label = o[2], u.ops.push(v);
							break
						}
						o[2] && u.ops.pop(), u.trys.pop();
						continue
				}
				v = t.call(e, u)
			} catch (E) {
				v = [6, E], i = 0
			} finally {
				a = o = 0
			}
			if (v[0] & 5) throw v[1];
			return {
				value: v[0] ? v[1] : void 0,
				done: !0
			}
		}
	}
	var Ar = 300,
		Sr = 10,
		kr = 200100,
		Or = 200500,
		Cr = 300020,
		ft = 300030,
		pt = 300031;

	function Wt(e) {
		var t = new URLSearchParams;
		if (e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var vt = "cf-chl-widget-",
		j = "cloudflare-challenge",
		Mr = ".cf-turnstile",
		Nr = ".cf-challenge",
		Pr = ".g-recaptcha",
		Lr = "cf-turnstile-response",
		Fr = "g-recaptcha-response",
		Le = 3e4,
		Xe = 180 * 1e3,
		Dr = 1e4,
		Ur = 8e3,
		Wr = 10800 * 1e3,
		Bt = "private-token",
		Br = 3,
		Vr = 500,
		Hr = 500,
		pe = "",
		Vt = "_cftscs_",
		Jr = 512;
	var ve = (function(e) {
			return e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible", e
		})({}),
		Y = (function(e) {
			return e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible", e
		})({}),
		mt = (function(e) {
			return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e
		})({}),
		gt = (function(e) {
			return e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain", e
		})({}),
		yt = (function(e) {
			return e.Never = "never", e.Auto = "auto", e
		})({}),
		Fe = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		Ye = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		me = (function(e) {
			return e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only", e
		})({}),
		Ke = (function(e) {
			return e.Render = "render", e.Execute = "execute", e
		})({}),
		ht = (function(e) {
			return e.Execute = "execute", e
		})({}),
		K = (function(e) {
			return e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun", e
		})({});

	function q(e, t) {
		return e.indexOf(t) !== -1
	}
	var qa = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		za = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		qr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function _t(e, t, a) {
		var i, o = "https://challenges.cloudflare.com",
			u = (i = a == null ? void 0 : a.origin) !== null && i !== void 0 ? i : o;
		if (t) {
			var s;
			return (s = e["base-url"]) !== null && s !== void 0 ? s : u
		}
		return u
	}

	function Ht(e, t, a, i, o, u, s, d, p) {
		var f = _t(a, o, d),
			v = u ? "h/".concat(u, "/") : "",
			E = p ? "&".concat(p) : "",
			C = a["feedback-enabled"] === !1 ? "fbD" : "fbE",
			A = a.chlPageOfflabel ? "&offlabel=true" : "";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/f/ov2/av0/rch").concat(i, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(C, "/").concat(s, "/").concat(a.size, "?lang=").concat(a.language).concat(A).concat(E)
	}
	var Jt = function(t) {
			var a, i, o, u, s = window.innerWidth < 400,
				d = t.state !== gt.FailureFeedbackCode && (t.state === gt.FailureFeedback || t.state === gt.FailureHavingTroubles || !t.errorCode),
				p = q(qa, (a = (o = t.displayLanguage) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && a !== void 0 ? a : "nonexistent"),
				f = q(za, (i = (u = t.displayLanguage) === null || u === void 0 ? void 0 : u.toLowerCase()) !== null && i !== void 0 ? i : "nonexistent");
			return s ? ja({
				isModeratelyVerbose: f,
				isSmallerFeedback: d,
				isVerboseLanguage: p
			}) : d && p ? "680px" : d && f ? "670px" : d ? "650px" : p ? "690px" : "680px"
		},
		ja = function(t) {
			var a = t.isVerboseLanguage,
				i = t.isSmallerFeedback,
				o = t.isModeratelyVerbose;
			return i && a ? "660px" : i && o ? "620px" : i ? "600px" : a ? "770px" : o ? "740px" : "730px"
		};

	function Ae(e) {
		return Ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, Ae(e)
	}

	function Qe() {
		try {
			var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
		} catch (t) {}
		return (Qe = function() {
			return !!e
		})()
	}

	function zr(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function jr(e, t) {
		return t && (F(t) === "object" || typeof t == "function") ? t : zr(e)
	}

	function Gr(e, t, a) {
		return t = Ae(t), jr(e, Qe() ? Reflect.construct(t, a || [], Ae(e).constructor) : t.apply(e, a))
	}

	function Xr(e, t) {
		if (!L(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function be(e, t) {
		return be = Object.setPrototypeOf || function(i, o) {
			return i.__proto__ = o, i
		}, be(e, t)
	}

	function Yr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && be(e, t)
	}

	function $e(e, t, a) {
		return Qe() ? $e = Reflect.construct : $e = function(o, u, s) {
			var d = [null];
			d.push.apply(d, u);
			var p = Function.bind.apply(o, d),
				f = new p;
			return s && be(f, s.prototype), f
		}, $e.apply(null, arguments)
	}

	function Kr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function bt(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return bt = function(i) {
			if (i === null || !Kr(i)) return i;
			if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(i)) return t.get(i);
				t.set(i, o)
			}

			function o() {
				return $e(i, arguments, Ae(this).constructor)
			}
			return o.prototype = Object.create(i.prototype, {
				constructor: {
					value: o,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), be(o, i)
		}, bt(e)
	}
	var Qr = (function(e) {
		"use strict";
		Yr(t, e);

		function t(a, i) {
			Xr(this, t);
			var o;
			return o = Gr(this, t, [a]), Pe(o, "code", void 0), o.name = "TurnstileError", o.code = i, o
		}
		return t
	})(bt(Error));
	var Ga = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;

	function h(e, t) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Qr(a, t)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Ze(e) {
		return e.startsWith(vt) ? e.slice(vt.length) : null
	}

	function Q(e) {
		return "".concat(vt).concat(e)
	}

	function xt(e, t) {
		var a = !0,
			i = !1,
			o = void 0;
		try {
			for (var u = Object.getOwnPropertySymbols(e)[Symbol.iterator](), s; !(a = (s = u.next()).done); a = !0) {
				var d = s.value,
					p, f = (p = Object.getOwnPropertyDescriptor(e, d)) === null || p === void 0 ? void 0 : p.value;
				if (t(f)) return f
			}
		} catch (v) {
			i = !0, o = v
		} finally {
			try {
				!a && u.return != null && u.return()
			} finally {
				if (i) throw o
			}
		}
	}

	function et() {
		var e = Ga,
			t = document.currentScript;
		if (L(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var a = document.querySelectorAll("script"), i = 0, o; o = a[i]; i++)
			if (L(o, HTMLScriptElement) && e.test(o.src)) return o
	}

	function $r() {
		var e = et();
		e || h("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			a;
		try {
			a = new URL(t)
		} catch (u) {
			h("Could not parse Turnstile script tag URL", 43777)
		}
		var i = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: a
		};
		(e.async || e.defer) && (i.loadedAsync = !0);
		var o = t.split("?");
		return o.length > 1 && (i.params = new URLSearchParams(o[1])), i
	}

	function $() {
		return Date.now()
	}

	function De(e) {
		try {
			return new URL(e, window.location.href).origin
		} catch (t) {
			return
		}
	}

	function qt(e, t, a) {
		if (!a) {
			if (0) var i;
			return
		}
		e == null || e.postMessage(t, a)
	}

	function oe(e, t, a) {
		qt(e.contentWindow, t, a)
	}
	var Xa = 5e3,
		Ya = "auto-troubleshoot-click";

	function Ka(e, t) {
		var a = _t(e.params, !1, t),
			i = "h/".concat("b", "/");
		return "".concat(a, "/cdn-cgi/challenge-platform/").concat(i, "feedback-reports")
	}
	var ta = function(t, a, i, o, u) {
		var s, d, p, f, v, E, C;
		if (!o || !i) return !1;
		var A = Ka(t, u),
			I = new FormData;
		I.append("consent", "on"), I.append("origin", a), I.append("issue", Ya), I.append("description", ""), I.append("rayId", i), I.append("sitekey", (s = t.params.sitekey) !== null && s !== void 0 ? s : ""), I.append("rcV", (d = t.rcV) !== null && d !== void 0 ? d : ""), I.append("cfChlOut", (p = t.cfChlOut) !== null && p !== void 0 ? p : ""), I.append("cfChlOutS", (f = t.cfChlOutS) !== null && f !== void 0 ? f : ""), I.append("mode", (v = t.mode) !== null && v !== void 0 ? v : ""), I.append("errorCode", String((E = t.errorCode) !== null && E !== void 0 ? E : 0)), I.append("frMd", o), I.append("displayLanguage", (C = t.displayLanguage) !== null && C !== void 0 ? C : "");
		try {
			if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(A, I)) return !0
		} catch (U) {
			x("auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(zt(U), ")"))
		}
		try {
			return fetch(A, Te({
				body: I,
				keepalive: !0,
				method: "POST",
				mode: "no-cors"
			}, Zr())), !0
		} catch (U) {
			x("auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(zt(U), ")"))
		}
		try {
			fetch(A, Te({
				body: I,
				method: "POST",
				mode: "no-cors"
			}, Zr()))
		} catch (U) {
			x("auto feedback report: all transports failed (".concat(zt(U), ")"))
		}
		return !1
	};

	function Zr() {
		return typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function" ? {} : {
			signal: AbortSignal.timeout(Xa)
		}
	}

	function zt(e) {
		return L(e, Error) ? e.message : "unknown error"
	}
	var Et = null,
		tt = 0,
		ra = function() {
			if (tt++, tt === 1) {
				var t = document.querySelector('meta[http-equiv="refresh"]');
				t && (Et = t.getAttribute("content"), t.remove())
			}
		},
		aa = function() {
			if (tt > 0 && tt--, tt === 0 && Et != null) {
				var t = document.createElement("meta");
				t.httpEquiv = "refresh", t.content = Et, Et = null, document.head.appendChild(t)
			}
		},
		jt = Symbol(),
		Qa = "host-origin",
		Ue = function(t) {
			t.feedbackPopup && !t.feedbackPopup.closed && t.feedbackPopup.close(), t.feedbackPopup = void 0, t.feedbackPopupOrigin = void 0
		};

	function na(e) {
		return e.endsWith("-fr") ? e : "".concat(e, "-fr")
	}

	function ia(e) {
		var t, a, i, o = (i = document.getElementById(e)) === null || i === void 0 || (a = i.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 ? void 0 : t.parentElement;
		return L(o, HTMLDivElement) ? o : null
	}

	function ea(e) {
		var t;
		if (!((typeof e == "undefined" ? "undefined" : F(e)) !== "object" || e === null)) {
			var a = (t = Object.getOwnPropertyDescriptor(e, "cleanup")) === null || t === void 0 ? void 0 : t.value;
			return typeof a == "function" ? a : void 0
		}
	}

	function oa(e) {
		var t, a = ea((t = Object.getOwnPropertyDescriptor(e, jt)) === null || t === void 0 ? void 0 : t.value);
		if (a) return a;
		var i = !0,
			o = !1,
			u = void 0;
		try {
			for (var s = Object.getOwnPropertySymbols(e)[Symbol.iterator](), d; !(i = (d = s.next()).done); i = !0) {
				var p = d.value,
					f, v = ea((f = Object.getOwnPropertyDescriptor(e, p)) === null || f === void 0 ? void 0 : f.value);
				if (v) return v
			}
		} catch (E) {
			o = !0, u = E
		} finally {
			try {
				!i && s.return != null && s.return()
			} finally {
				if (o) throw u
			}
		}
	}

	function $a(e, t) {
		Object.defineProperty(e, jt, {
			configurable: !0,
			enumerable: !1,
			value: {
				cleanup: t
			}
		})
	}

	function Za(e) {
		Reflect.deleteProperty(e, jt)
	}

	function en(e) {
		var t = new URL(e, window.location.href),
			a = new URLSearchParams(t.hash.startsWith("#") ? t.hash.slice(1) : t.hash);
		return a.set(Qa, window.location.origin), t.hash = a.toString(), t.toString()
	}
	var Gt = function(t, a, i, o, u) {
			var s, d, p = na(t),
				f = _t(a.params, !1, o),
				v = "h/".concat("b", "/"),
				E = en("".concat(f, "/cdn-cgi/challenge-platform/").concat(v, "feedback-reports/").concat(Ze(t), "/").concat(a.displayLanguage, "/").concat((d = a.params.theme) !== null && d !== void 0 ? d : a.theme, "/").concat(i));
			if (Ue(a), window.top !== window.self) {
				var C = window.open(E, "_blank");
				if (C) {
					a.feedbackPopupOrigin = De(E), a.feedbackPopup = C;
					var A = window.setInterval(function() {
						C.closed && (window.clearInterval(A), a.feedbackPopupCloseCheck = void 0, u == null || u())
					}, 500);
					a.feedbackPopupCloseCheck = A;
					return
				}
				x("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
			}
			a.wrapper.parentNode || h("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3074);
			var I = ia(p);
			if (I) {
				var U;
				(U = oa(I)) === null || U === void 0 || U()
			}
			var R = document.createElement("div");
			R.style.position = "fixed", R.style.zIndex = "2147483646", R.style.width = "100vw", R.style.height = "100vh", R.style.top = "0", R.style.left = "0", R.style.transformOrigin = "center center", R.style.overflowX = "hidden", R.style.overflowY = "auto", R.style.background = "rgba(0,0,0,0.4)";
			var N = document.createElement("div");
			N.className = "cf-wrapper-turnstile-feedback", N.style.display = "table-cell", N.style.verticalAlign = "middle", N.style.width = "100vw", N.style.height = "100vh";
			var S = document.createElement("div");
			S.className = "cf-turnstile-feedback", S.id = "cf-fr-id", S.style.width = "100vw", S.style.maxWidth = "500px", S.style.height = Jt(a), S.style.position = "relative", S.style.zIndex = "2147483647", S.style.backgroundColor = "#ffffff", S.style.borderRadius = "5px", S.style.left = "0px", S.style.top = "0px", S.style.overflow = "hidden", S.style.margin = "0px auto";
			var ge = function() {
					S.style.height = Jt(a)
				},
				Z = function() {
					var ee;
					Za(R), a.feedbackIframeOrigin = void 0, window.removeEventListener("resize", ge), (ee = R.parentNode) === null || ee === void 0 || ee.removeChild(R), u == null || u()
				},
				D = document.createElement("iframe");
			D.id = p, D.setAttribute("src", E), D.setAttribute("title", "Turnstile feedback report"), D.setAttribute("allow", "cross-origin-isolated; fullscreen"), D.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), D.setAttribute("scrolling", "yes"), D.style.borderWidth = "0px", D.style.width = "100%", D.style.height = "100%", D.style.overflow = "auto", a.feedbackIframeOrigin = De(E);
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "button"), T.setAttribute("aria-label", "Close feedback report"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", a.displayRtl ? T.style.left = "24px" : T.style.right = "24px", T.style.top = "24px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function(G) {
				G.stopPropagation(), Z()
			}), T.addEventListener("keydown", function(G) {
				(G.key === "Enter" || G.key === " ") && (G.preventDefault(), G.stopPropagation(), Z())
			});
			var V = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			V.setAttribute("ry", "12"), V.setAttribute("rx", "12"), V.setAttribute("cy", "12"), V.setAttribute("cx", "12"), V.setAttribute("fill", "none"), V.setAttribute("stroke-width", "0"), T.appendChild(V);
			var M = document.createElementNS("http://www.w3.org/2000/svg", "line");
			M.setAttribute("stroke-width", "1"), M.setAttribute("fill", "none"), M.setAttribute("x1", "6"), M.setAttribute("x2", "18"), M.setAttribute("y1", "18"), M.setAttribute("y2", "5");
			var H = document.createElementNS("http://www.w3.org/2000/svg", "line");
			H.setAttribute("stroke-width", "1"), H.setAttribute("fill", "none"), H.setAttribute("x1", "6"), H.setAttribute("x2", "18"), H.setAttribute("y1", "5"), H.setAttribute("y2", "18"), a.theme === mt.Light ? (M.setAttribute("stroke", "#0A0A0A"), H.setAttribute("stroke", "#0A0A0A")) : (M.setAttribute("stroke", "#F2F2F2"), H.setAttribute("stroke", "#F2F2F2")), T.appendChild(M), T.appendChild(H), S.appendChild(D), S.appendChild(T), N.appendChild(S), R.appendChild(N), R.addEventListener("click", Z), a.wrapper.parentNode.appendChild(R), window.addEventListener("resize", ge), $a(R, Z)
		},
		rt = function(t) {
			var a, i = na(t),
				o = ia(i);
			if (o) {
				var u = oa(o);
				if (u) {
					u();
					return
				}
				x("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (a = o.parentNode) === null || a === void 0 || a.removeChild(o)
			}
		};

	function la(e, t) {
		return e ? t ? !0 : q(qr, e) : !1
	}
	var ua = (function(e) {
		return e.Failure = "failure", e.Verifying = "verifying", e.Overrunning = "overrunning", e.Custom = "custom", e.TimeCheckCachedWarning = "timecheckcachedwarning", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain", e
	})({});

	function ca(e) {
		if (Array.isArray(e)) return je(e)
	}

	function sa(e) {
		if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
	}

	function da() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function fa(e) {
		return ca(e) || sa(e) || dt(e) || da()
	}
	var Xt = function(t) {
		var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return t.length > a ? t.slice(0, a) : t
	};

	function pa(e) {
		if (!e) return "-";
		var t = function(i, o) {
			if (!i || i.tagName === "BODY") return o;
			for (var u = 1, s = i.previousElementSibling; s;) s.tagName === i.tagName && u++, s = s.previousElementSibling;
			var d = Xt(i.tagName.toLowerCase()),
				p = "".concat(d, "[").concat(u, "]");
			return t(i.parentNode, "/".concat(p).concat(o))
		};
		return t(e, "")
	}

	function va(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var tn = {
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

	function ma(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var a = Array.from(t.querySelectorAll("input, select, textarea, button")),
			i = a.slice(0, 20).map(function(u) {
				return tn[u.type] || "-"
			}).join(""),
			o = ["m:".concat(t.getAttribute("method") || ""), "f:".concat(a.length), i].join("|");
		return o
	}

	function rn(e) {
		return e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement
	}

	function an(e) {
		return "querySelectorAll" in e
	}

	function ga(e, t) {
		var a, i = t == null ? void 0 : t.shouldIgnoreElement;
		if (i) {
			var o = L(e, Element) ? [e] : [];
			(a = o).push.apply(a, fa(Array.from(e.querySelectorAll("*"))));
			var u = new Set,
				s, d = !0,
				p = !1,
				f = void 0;
			try {
				for (var v = o[Symbol.iterator](), E; !(d = (E = v.next()).done); d = !0) {
					var C = E.value;
					if (s !== void 0) {
						if (s.contains(C)) {
							u.add(C);
							continue
						}
						s = void 0
					}
					i(C) && (u.add(C), s = C)
				}
			} catch (A) {
				p = !0, f = A
			} finally {
				try {
					!d && v.return != null && v.return()
				} finally {
					if (p) throw f
				}
			}
			return u
		}
	}

	function ya(e, t) {
		var a = rn(e);
		return a === null || t === void 0 ? !1 : t.has(a)
	}

	function ha(e, t) {
		var a = ga(e, t);
		return Array.from(e.querySelectorAll("*")).filter(function(i) {
			return !ya(i, a)
		}).length
	}

	function _a(e, t, a, i) {
		for (var o = "", u = an(e) ? ga(e, i) : void 0, s = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), d;
			(d = s.nextNode()) !== null && o.length < a;)
			if (!ya(d, u)) {
				for (var p = 0, f = d; f !== null && f !== e;) p++, f = f.parentNode;
				if (!(p > t))
					if (d.nodeType === Node.ELEMENT_NODE) {
						var v = d;
						o += "".concat(Xt(v.tagName.toLowerCase()));
						var E = !0,
							C = !1,
							A = void 0;
						try {
							for (var I = Array.from(v.attributes)[Symbol.iterator](), U; !(E = (U = I.next()).done); E = !0) {
								var R = U.value,
									N;
								!(i == null || (N = i.shouldIgnoreAttribute) === null || N === void 0) && N.call(i, v, R) || (o += "_".concat(Xt(R.name, 2)))
							}
						} catch (S) {
							C = !0, A = S
						} finally {
							try {
								!E && I.return != null && I.return()
							} finally {
								if (C) throw A
							}
						}
						o += ">"
					} else d.nodeType === Node.TEXT_NODE && (o += "-t")
			} return o.slice(0, a)
	}

	function ba(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : F(e)));
		for (var t = 5381, a = 0; a < e.length; a++) {
			var i = e.charCodeAt(a);
			t = t * 33 ^ i
		}
		return t >>> 0
	}

	function xa() {
		for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, t = e; t && t.top !== t && !t.location.href.startsWith("http");) t = t.top;
		return t == null ? void 0 : t.location.href
	}
	var nn = 900,
		on = 45,
		ln = 50;

	function un(e, t, a) {
		var i = e.widgetMap.get(t);
		(i == null ? void 0 : i.retryTimeout) !== void 0 && (window.clearTimeout(i.retryTimeout), i.retryTimeout = void 0), x("Cannot find Widget ".concat(a, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(t)
	}

	function cn(e) {
		e.watchCatSeq++;
		var t = [],
			a = !0,
			i = !1,
			o = void 0;
		try {
			for (var u = e.widgetMap[Symbol.iterator](), s; !(a = (s = u.next()).done); a = !0) {
				var d = Ge(s.value, 2),
					p = d[0],
					f = d[1],
					v = Q(p);
				if (!v || !f.shadow || !f.wrapper.isConnected) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: p
					}));
					continue
				}
				var E = f.shadow.querySelector("#".concat(v));
				if (!E) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: p
					}));
					continue
				}
				if (f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq), !(f.isComplete || f.isFailed || f.feedbackOpen)) {
					var C = f.watchcat.seq - 1 - on,
						A = f.watchcat.lastAckedSeq < C,
						I = f.watchcat.seq - 1 - ln,
						U = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < I;
					if ((f.isExecuting || !f.isInitialized || f.isInitialized && !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && A || U) {
						var R, N;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var S = function(l, r) {
							console.log("Turnstile Widget seem to have ".concat(l, ": "), r)
						};
						S(A ? "hung" : "crashed", p);
						var ge = A ? ft : pt;
						if ((N = e.internalMsgHandler) === null || N === void 0 || N.call(e, {
								code: ge,
								event: "fail",
								rcV: (R = f.nextRcV) !== null && R !== void 0 ? R : pe,
								source: j,
								widgetId: p
							}), 0) var Z;
						continue
					}
					oe(E, {
						event: "meow",
						seq: e.watchCatSeq,
						source: j,
						widgetId: p
					}, f.iframeOrigin)
				}
			}
		} catch (n) {
			i = !0, o = n
		} finally {
			try {
				!a && u.return != null && u.return()
			} finally {
				if (i) throw o
			}
		}
		var D = !0,
			T = !1,
			V = void 0;
		try {
			for (var M = t[Symbol.iterator](), H; !(D = (H = M.next()).done); D = !0) {
				var G = H.value,
					ee = G.widgetElId,
					_ = G.widgetId;
				un(e, _, ee)
			}
		} catch (n) {
			T = !0, V = n
		} finally {
			try {
				!D && M.return != null && M.return()
			} finally {
				if (T) throw V
			}
		}
		t.length > 0 && e.widgetMap.size === 0 && at(e)
	}

	function Yt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			cn(e)
		}, nn))
	}

	function at(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var Qt = Symbol();

	function Ea(e) {
		return (typeof e == "undefined" ? "undefined" : F(e)) === "object" && e !== null ? e : void 0
	}

	function Kt(e) {
		return (typeof e == "undefined" ? "undefined" : F(e)) === "object" && e !== null && "widgetMap" in e && L(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
	}

	function sn(e, t) {
		Object.defineProperty(e, Qt, {
			configurable: !0,
			enumerable: !1,
			value: t
		})
	}

	function dn(e) {
		var t, a = (t = Object.getOwnPropertyDescriptor(e, Qt)) === null || t === void 0 ? void 0 : t.value;
		if (Kt(a)) return a;
		var i = xt(e, Kt);
		if (i) return i
	}

	function wa(e) {
		Reflect.deleteProperty(e, Qt);
		var t = !0,
			a = !1,
			i = void 0;
		try {
			for (var o = Object.getOwnPropertySymbols(e)[Symbol.iterator](), u; !(t = (u = o.next()).done); t = !0) {
				var s = u.value,
					d, p = (d = Object.getOwnPropertyDescriptor(e, s)) === null || d === void 0 ? void 0 : d.value;
				Kt(p) && Reflect.deleteProperty(e, s)
			}
		} catch (f) {
			a = !0, i = f
		} finally {
			try {
				!t && o.return != null && o.return()
			} finally {
				if (a) throw i
			}
		}
	}

	function fn(e) {
		return !Number.isFinite(e.apiJsReloadBackoffMs) || e.apiJsReloadBackoffMs <= 0 ? Le : Math.min(e.apiJsReloadBackoffMs, Xe)
	}

	function pn(e) {
		return !Number.isFinite(e.apiJsReloadNextAllowedTsMs) || e.apiJsReloadNextAllowedTsMs <= 0 ? 0 : e.apiJsReloadNextAllowedTsMs
	}

	function Ia(e, t) {
		var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : et;
		t.upgradeAttempts++;
		var i = a();
		if (!(i != null && i.parentNode)) return !1;
		var o = Ea(e);
		if (!o) return !1;
		var u = i == null ? void 0 : i.nonce;
		sn(o, t);
		var s = new URL(i.src),
			d = document.createElement("script");
		s.searchParams.set("_upgrade", "true"), s.searchParams.set("_cb", String(Date.now())), d.async = !0, u && (d.nonce = u), d.setAttribute("crossorigin", "anonymous"), d.src = s.toString();
		try {
			return i.parentNode.replaceChild(d, i), !0
		} catch (p) {
			if (!L(p, DOMException)) throw p;
			return wa(o), !1
		}
	}

	function Ra(e, t, a) {
		var i, o, u = Ea(e);
		if (!u) return !1;
		var s = dn(u);
		if (!s) return !1;
		var d = s.apiJsMismatchReloadPending;
		return t.isReady = s.isReady, t.isRecaptchaCompatibilityMode = s.isRecaptchaCompatibilityMode, t.lastWidgetIdx = s.lastWidgetIdx, t.scriptWasLoadedAsync = s.scriptWasLoadedAsync, t.apiJsReloadBackoffMs = d ? Le : fn(s), t.apiJsReloadNextAllowedTsMs = pn(s), t.apiJsMismatchReloadAttempts = (i = s.apiJsMismatchReloadAttempts) !== null && i !== void 0 ? i : 0, t.apiJsMismatchReloadCompletedCount = ((o = s.apiJsMismatchReloadCompletedCount) !== null && o !== void 0 ? o : 0) + (d ? 1 : 0), t.apiJsMismatchReloadPending = !1, t.upgradeAttempts = s.upgradeAttempts, t.upgradeCompletedCount = s.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = $(), t.watchCatInterval = null, t.watchCatSeq = s.watchCatSeq, t.widgetMap = s.widgetMap, at(s, !0), s.msgHandler && window.removeEventListener("message", s.msgHandler), wa(u), a(), !0
	}

	function $t(e) {
		return q(["auto", "dark", "light"], e)
	}

	function Zt(e) {
		return q(["auto", "never"], e)
	}

	function er(e) {
		return e > 0 && e < 9e5
	}

	function tr(e) {
		return e > 0 && e < 36e4
	}
	var vn = /^[0-9A-Za-z_-]{3,100}$/;

	function Ta(e) {
		return vn.test(e)
	}
	var mn = /^[a-z0-9_-]{0,32}$/i;

	function rr(e) {
		return e === void 0 ? !0 : typeof e == "string" && mn.test(e)
	}
	var gn = /^[a-z0-9_\-=]{0,255}$/i;

	function ar(e) {
		return e === void 0 ? !0 : typeof e == "string" && gn.test(e)
	}

	function nr(e) {
		return q([Y.Normal, Y.Compact, Y.Invisible, Y.Flexible], e)
	}

	function ir(e) {
		return q(["auto", "manual", "never"], e)
	}

	function or(e) {
		return q(["auto", "manual", "never"], e)
	}
	var yn = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function lr(e) {
		return e === "auto" || yn.test(e)
	}

	function ur(e) {
		return q(["always", "execute", "interaction-only"], e)
	}

	function Aa(e) {
		return q(["true", "false"], e)
	}

	function cr(e) {
		return q(["render", "execute"], e)
	}

	function Sa(e, t) {
		if (e.isResetting = !1, t) {
			t(String(Or));
			return
		}
		h("Could not load challenge from challenges.cloudflare.com.", 161)
	}
	var La = Symbol(),
		hn = "Turnstile has already been rendered in this container. The render attempt was rejected.",
		_n = "Turnstile skipped implicit render because a widget already exists in this container.",
		sr = void 0,
		bn = function(e) {
			return e.styleSheets.length
		},
		ke = window;

	function ka(e) {
		return (typeof e == "undefined" ? "undefined" : F(e)) === "object" && e !== null && "clearPendingApiJsReloadRequest" in e && typeof e.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in e && typeof e.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
	}

	function Oa(e) {
		var t;
		if (!((typeof e == "undefined" ? "undefined" : F(e)) !== "object" || e === null)) {
			var a = (t = Object.getOwnPropertyDescriptor(e, La)) === null || t === void 0 ? void 0 : t.value;
			if (ka(a)) return a;
			var i = xt(e, ka);
			if (i) return i
		}
	}
	var m = {
			apiJsMismatchReloadAttempts: 0,
			apiJsMismatchReloadCompletedCount: 0,
			apiJsMismatchReloadPending: !1,
			apiJsReloadBackoffMs: Le,
			apiJsReloadNextAllowedTsMs: 0,
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
		ot, Ct, Nt;

	function xn(e) {
		var t = !0,
			a = !1,
			i = void 0;
		try {
			for (var o = m.widgetMap[Symbol.iterator](), u; !(t = (u = o.next()).done); t = !0) {
				var s = Ge(u.value, 2),
					d = s[0],
					p = s[1];
				if (p.wrapper.parentElement === e || p.wrapper !== e && p.wrapper.contains(e) || p.shadow.contains(e)) return d
			}
		} catch (f) {
			a = !0, i = f
		} finally {
			try {
				!t && o.return != null && o.return()
			} finally {
				if (a) throw i
			}
		}
		return null
	}

	function wt(e) {
		if (typeof e == "string") {
			var t = Ze(e);
			return t && m.widgetMap.has(t) ? t : m.widgetMap.has(e) ? e : null
		}
		return xn(e)
	}

	function En(e) {
		return e === "implicit" ? _n : hn
	}

	function Ca(e, t) {
		return e === "explicit" && (t == null ? void 0 : t.renderSource) === "implicit"
	}

	function pr() {
		ot !== void 0 && (window.clearTimeout(ot), ot = void 0)
	}

	function Fa() {
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var i = m.widgetMap.values()[Symbol.iterator](), o; !(e = (o = i.next()).done); e = !0) {
				var u = o.value;
				if (u.chlPageData) return !0
			}
		} catch (s) {
			t = !0, a = s
		} finally {
			try {
				!e && i.return != null && i.return()
			} finally {
				if (t) throw a
			}
		}
		return !1
	}

	function it(e) {
		var t = m.widgetMap.get(e),
			a = Q(e);
		if (!(!t || !a)) {
			var i = Oe(t, a);
			i && oe(i, {
				apiJsMismatchReloadAttempts: m.apiJsMismatchReloadAttempts,
				apiJsMismatchReloadCompletedCount: m.apiJsMismatchReloadCompletedCount,
				event: "reloadApiJsRejected",
				source: j,
				widgetId: e
			}, t.iframeOrigin)
		}
	}

	function vr() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			t = e.preserveMismatchReloadPending,
			a = t === void 0 ? !1 : t;
		Nt = void 0, a || (m.apiJsMismatchReloadPending = !1), Ct !== void 0 && (window.clearTimeout(Ct), Ct = void 0)
	}

	function Da() {
		var e = Nt;
		vr(), e !== void 0 && it(e)
	}

	function wn() {
		return $() < m.apiJsReloadNextAllowedTsMs
	}

	function In() {
		var e = m.apiJsReloadBackoffMs,
			t = Number.isFinite(e) && e > 0 ? Math.min(e, Xe) : Le,
			a = Math.round(t * (.8 + Math.random() * .4));
		m.apiJsReloadNextAllowedTsMs = $() + a, m.apiJsReloadBackoffMs = Math.min(t * 2, Xe)
	}

	function Rn(e) {
		vr({
			preserveMismatchReloadPending: !0
		}), m.apiJsMismatchReloadPending = !0, Nt = e, Ct = window.setTimeout(function() {
			Da()
		}, Dr)
	}

	function mr() {
		pr(), !Fa() && (ot = window.setTimeout(function() {
			ot = void 0, Va()
		}, Wr))
	}

	function dr(e, t) {
		Wa(e, t, "")
	}
	var gr = [];

	function Ma() {
		m.isReady = !0;
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var i = gr[Symbol.iterator](), o; !(e = (o = i.next()).done); e = !0) {
				var u = o.value;
				u()
			}
		} catch (s) {
			t = !0, a = s
		} finally {
			try {
				!e && i.return != null && i.return()
			} finally {
				if (t) throw a
			}
		}
	}

	function Na(e, t) {
		e.onerror = function() {
			Sa(t, t.cbError)
		}
	}

	function Ua(e, t) {
		var a, i = (a = e.params["response-field"]) !== null && a !== void 0 ? a : !0,
			o = m.isRecaptchaCompatibilityMode,
			u = "".concat(t, "_response"),
			s = "".concat(t, "_g_response"),
			d = (!i || L(document.getElementById(u), HTMLInputElement)) && (!o || L(document.getElementById(s), HTMLInputElement));
		if (!(e.responseElementsBuilt && d)) {
			if (i && !L(document.getElementById(u), HTMLInputElement)) {
				var p, f = document.createElement("input");
				f.type = "hidden", f.name = (p = e.params["response-field-name"]) !== null && p !== void 0 ? p : Lr, f.id = u, e.wrapper.appendChild(f)
			}
			if (o && !L(document.getElementById(s), HTMLInputElement)) {
				var v = document.createElement("input");
				v.type = "hidden", v.name = Fr, v.id = s, e.wrapper.appendChild(v)
			}
			e.responseElementsBuilt = !0
		}
	}

	function Wa(e, t, a) {
		Ua(e, t);
		var i = document.getElementById("".concat(t, "_response"));
		if (i !== null && L(i, HTMLInputElement) && (i.value = a), m.isRecaptchaCompatibilityMode) {
			var o = document.getElementById("".concat(t, "_g_response"));
			o !== null && L(o, HTMLInputElement) && (o.value = a)
		}
	}

	function Be(e, t) {
		var a;
		return !!(!((a = t.kills) === null || a === void 0) && a.includes(e))
	}

	function It(e, t) {
		var a = t.params,
			i = a.size,
			o = i === void 0 ? "normal" : i,
			u = t.mode;
		switch (u) {
			case ve.NonInteractive:
			case ve.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", o) {
					case Y.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case Y.Invisible:
						h('Invalid value for parameter "size", expected "'.concat(Y.Compact, '", "').concat(Y.Flexible, '", or "').concat(Y.Normal, '", got "').concat(o, '"'), 2817);
					case Y.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case Y.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case ve.Invisible:
				Be("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				h('Invalid value for parameter "mode", expected "'.concat(ve.NonInteractive, '", "').concat(ve.Managed, '" or "').concat(ve.Invisible, '", got "').concat(u, '"'), 2818)
		}
	}

	function Pa(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function Tn(e, t) {
		var a = t.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Oe(e, t) {
		return e.shadow.querySelector("#".concat(t))
	}

	function An(e, t) {
		var a, i;
		return (a = (i = e.wrapper.parentNode) === null || i === void 0 ? void 0 : i.querySelector("#".concat(t, "-fr"))) !== null && a !== void 0 ? a : null
	}

	function Sn(e) {
		var t, a;
		return !((a = e.feedbackPopup) === null || a === void 0) && a.closed ? (e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) : (t = e.feedbackPopup) !== null && t !== void 0 ? t : null
	}

	function Mt(e, t) {
		var a, i, o = (a = (i = An(e, t)) === null || i === void 0 ? void 0 : i.contentWindow) !== null && a !== void 0 ? a : null;
		if (o) return {
			targetOrigin: e.feedbackIframeOrigin,
			targetWindow: o
		};
		var u = Sn(e);
		return {
			targetOrigin: u ? e.feedbackPopupOrigin : void 0,
			targetWindow: u
		}
	}

	function kn(e) {
		if ((typeof e == "undefined" ? "undefined" : F(e)) !== "object" || e === null) return !1;
		var t = e;
		return t.source === j && typeof t.event == "string" && typeof t.widgetId == "string"
	}

	function On(e) {
		return e.isTrusted && kn(e.data)
	}

	function Cn(e) {
		return la(e.origin, !1)
	}

	function Mn(e, t, a) {
		var i, o, u = (i = (o = Oe(t, a)) === null || o === void 0 ? void 0 : o.contentWindow) !== null && i !== void 0 ? i : null,
			s = Mt(t, a).targetWindow,
			d = function(f) {
				return f !== null && e.source === f
			};
		switch (e.data.event) {
			case "requestFeedbackData":
			case "closeFeedbackReportIframe":
				return d(s);
			case "refreshRequest":
				return d(u) || e.data.reason === "feedback_refresh" && d(s);
			default:
				return d(u)
		}
	}

	function fr() {
		return xa(window)
	}

	function Rt(e, t, a) {
		return e === null ? t : Aa(e) ? e === "true" : (x(a(e)), t)
	}

	function Nn() {
		try {
			var e = et();
			if (!e) return;
			var t = e.src,
				a = !0,
				i = !1,
				o = void 0;
			try {
				for (var u = performance.getEntriesByType("resource")[Symbol.iterator](), s; !(a = (s = u.next()).done); a = !0) {
					var d = s.value;
					if (L(d, PerformanceResourceTiming) && d.name.includes(t)) return d
				}
			} catch (p) {
				i = !0, o = p
			} finally {
				try {
					!a && u.return != null && u.return()
				} finally {
					if (i) throw o
				}
			}
		} catch (p) {}
	}
	var Ba = (function() {
			var e = function(n, l, r, c, b, g) {
					return Er(function() {
						var k, O, w, P, W, ae, ne, ce, te, re, Ce;
						return Tr(this, function(J) {
							switch (J.label) {
								case 0:
									if (O = function(de, fe) {
											var z = m.widgetMap.get(l);
											z !== n || z.isComplete || z.isResetting || z.response !== c || (!de && fe && x(fe), o(z, r, de))
										}, w = n.params.sitekey, P = fr(), !P) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), o(n, r, !1), [2];
									W = "h/".concat("b", "/"), ae = new URL(P), ne = "https", ce = "", te = "".concat(ne, "://").concat(ae.host, "/cdn-cgi/challenge-platform/").concat(W, "rc/").concat(g).concat(ce), J.label = 1;
								case 1:
									return J.trys.push([1, 3, , 4]), [4, fetch(te, {
										body: JSON.stringify({
											secondaryToken: b,
											sitekey: w
										}),
										headers: {
											"Content-Type": "application/json"
										},
										method: "POST",
										redirect: "manual"
									})];
								case 2:
									return re = J.sent(), re.status === 200 ? O(!0) : O(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
								case 3:
									return Ce = J.sent(), O(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
								case 4:
									return [2]
							}
						})
					})()
				},
				t = function(n, l, r) {
					if (n.params.retry === yt.Auto || r) {
						var c;
						if (n.feedbackOpen) {
							n.pendingRetry = {
								crashed: r
							};
							return
						}
						var b = r ? 0 : 1e3 * 2 + ((c = n.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
						n.retryTimeout = window.setTimeout(function() {
							var g = r ? K.CrashedRetry : K.FailureRetry;
							A(g, l)
						}, b)
					}
				},
				a = function(n, l, r) {
					return n.params.execution === Ke.Render ? !0 : (l === K.CrashedRetry || l === K.FailureRetry || l === K.CheckDelays || l === K.UpgradeReload) && n.params.execution === Ke.Execute && r
				},
				i = function(n, l, r) {
					if (n.feedbackOpen && (n.feedbackOpen = !1, n.feedbackPopupCloseCheck != null && (window.clearInterval(n.feedbackPopupCloseCheck), n.feedbackPopupCloseCheck = void 0), aa(), window.postMessage({
							event: "feedbackClose",
							source: j,
							widgetId: r
						}, "*"), n.pendingRetry)) {
						var c = n.pendingRetry.crashed;
						n.pendingRetry = void 0, t(n, l, c)
					}
				},
				o = function(n, l, r) {
					var c;
					n.response === void 0 && h("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Wa(n, l, n.response), (c = n.cbSuccess) === null || c === void 0 || c.call(n, n.response, r)
				},
				u = function(n) {
					if (!n) return [];
					for (var l = n.attributes, r = l.length, c = new Array(r), b = 0; b < r; b++) c[b] = l[b].name;
					return c
				},
				s = function() {
					for (var n = {}, l = [], r = document.getElementsByTagName("*"), c = 0; c < r.length && l.length < 50; c++) {
						var b = r[c].tagName.toLowerCase();
						b.indexOf("-") !== -1 && !n[b] && (n[b] = !0, l.push(b))
					}
					return l
				},
				d = function(n, l, r) {
					if (n.rcV = l, 0) var c
				},
				p = function() {
					var n = "abcdefghijklmnopqrstuvwxyz0123456789",
						l = n.length,
						r = "";
					do {
						r = "";
						for (var c = 0; c < 5; c++) r += n.charAt(Math.floor(Math.random() * l))
					} while (m.widgetMap.has(r));
					return r
				},
				f = function(n, l, r) {
					for (; n.msgQueue.length > 0;) {
						var c = n.msgQueue.pop();
						oe(r, {
							event: c,
							source: j,
							widgetId: l
						}, n.iframeOrigin)
					}
				},
				v = function(n, l) {
					if (l) {
						var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
							c = Object.prototype.hasOwnProperty,
							b = [],
							g = !0,
							k = !1,
							O = void 0;
						try {
							for (var w = r[Symbol.iterator](), P; !(g = (P = w.next()).done); g = !0) {
								var W = P.value;
								c.call(l, W) && l[W] !== void 0 && l[W] !== n.params[W] && b.push(W)
							}
						} catch (ae) {
							k = !0, O = ae
						} finally {
							try {
								!g && w.return != null && w.return()
							} finally {
								if (k) throw O
							}
						}
						b.length > 0 && h("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(b.join(",")), 3618), l.action && (rr(l.action) || h('Invalid input for optional parameter "action", got "'.concat(l.action, '"'), 3604), n.action = l.action), l.cData && (ar(l.cData) || h('Invalid input for optional parameter "cData", got "'.concat(l.cData, '"'), 3605), n.cData = l.cData), l["after-interactive-callback"] && (n.cbAfterInteractive = l["after-interactive-callback"]), l["before-interactive-callback"] && (n.cbBeforeInteractive = l["before-interactive-callback"]), l.callback && (n.cbSuccess = l.callback), l["expired-callback"] && (n.cbExpired = l["expired-callback"]), l["timeout-callback"] && (n.cbTimeout = l["timeout-callback"]), l["error-callback"] && (n.cbError = l["error-callback"]), l["unsupported-callback"] && (n.cbUnsupported = l["unsupported-callback"]), l.chlPageData && (n.chlPageData = l.chlPageData)
					}
				},
				E = function(n, l, r) {
					n === "explicit" && l && v(l, r), x(En(n))
				},
				C = function(n) {
					A(K.Api, n)
				},
				A = function(n, l) {
					var r = M(l);
					r || h("Nothing to reset found for provided container", 3329);
					var c = m.widgetMap.get(r);
					if (c) {
						var b, g, k = c.isExecuted;
						c.isResetting = !0, c.response = void 0, c.mode = void 0, c.msgQueue = [], c.isComplete = !1, c.isExecuted = !1, c.isExecuting = !1, c.isExpired = !1, c.isFailed = !1, c.isInitialized = !1, c.isStale = !1, c.isOverrunning = !1, c.cfChlOut = void 0, c.cfChlOutS = void 0, c.errorCode = void 0, c.frMd = void 0, c.autoFeedbackSent = !1, c.watchcat.overrunBeginSeq = 0, c.watchcat.lastAckedSeq = 0, c.watchcat.seq = 0, a(c, n, k) && (c.msgQueue.push(ht.Execute), c.isExecuted = !0, c.isExecuting = !0);
						var O = Q(r),
							w = c.shadow.querySelector("#".concat(O));
						(!O || !w) && h("Widget ".concat(r, " to reset was not found."), 3330), (c.params.appearance === me.InteractionOnly || c.params.appearance === me.Execute) && Pa(w), c.params.sitekey === null && h("Unexpected Error: Sitekey is null", 3347);
						var P = w.cloneNode(),
							W = Ht(r, c.params.sitekey, c.params, (b = c.rcV) !== null && b !== void 0 ? b : pe, !1, "b", n, m.scriptUrlParsed, Wt(c));
						P.src = W, Na(P, c), c.iframeOrigin = De(W), (g = w.parentNode) === null || g === void 0 || g.replaceChild(P, w), dr(c, O), c.retryTimeout && window.clearTimeout(c.retryTimeout)
					} else h("Widget ".concat(r, " to reset was not found."), 3331)
				},
				I = function(n, l) {
					var r = Q(n);
					if (r) {
						var c = ["input#".concat(r, "_response"), "input#".concat(r, "_g_response")];
						document.querySelectorAll(c.join(", ")).forEach(function(b) {
							return b.remove()
						}), l.shadow.querySelectorAll(c.join(", ")).forEach(function(b) {
							return b.remove()
						}), rt(r), Ue(l)
					}
					l.wrapper.remove(), l.retryTimeout && window.clearTimeout(l.retryTimeout), m.widgetMap.delete(n), at(m)
				},
				U = function(n) {
					var l = M(n),
						r = l ? m.widgetMap.get(l) : void 0;
					if (!l || !r) {
						x("Nothing to remove found for the provided container.");
						return
					}
					I(l, r)
				},
				R = function() {
					var n = Array.from(m.widgetMap.keys()),
						l = !0,
						r = !1,
						c = void 0;
					try {
						for (var b = n[Symbol.iterator](), g; !(l = (g = b.next()).done); l = !0) {
							var k = g.value,
								O = m.widgetMap.get(k),
								w = Q(k);
							!w || !O || (rt(w), Ue(O), A(K.UpgradeReload, w))
						}
					} catch (P) {
						r = !0, c = P
					} finally {
						try {
							!l && b.return != null && b.return()
						} finally {
							if (r) throw c
						}
					}
				},
				N = function(n, l, r) {
					var c, b, g, k, O, w, P, W, ae, ne, ce, te, re, Ce = $(),
						J, se;
					if (typeof n == "string") {
						var de = wt(n);
						if (de) {
							var fe, z = m.widgetMap.get(de),
								Me = (fe = z == null ? void 0 : z.wrapper.parentElement) !== null && fe !== void 0 ? fe : null;
							if (Me && Ca(r, z)) J = Me, se = {
								widget: z,
								widgetId: de
							};
							else return E(r, z, l), Q(de)
						} else {
							var xe;
							try {
								xe = document.querySelector(n)
							} catch (Fn) {
								h('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
							}
							xe || h('Unable to find a container for "'.concat(n, '"'), 3585), J = xe
						}
					} else L(n, HTMLElement) ? J = n : h('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					if (!se) {
						var Ee = wt(J);
						if (Ee) {
							var we = m.widgetMap.get(Ee);
							if (we && Ca(r, we) && we.wrapper.parentElement === J) se = {
								widget: we,
								widgetId: Ee
							};
							else return E(r, we, l), Q(Ee)
						}
					}
					var lt = fr();
					if (!lt) return h("Turnstile cannot determine its page location", 3607);
					var ut = Ln(J);
					if (ut) {
						var y = Object.assign(ut, l),
							Ve = y.action,
							Ne = y.cData,
							He = y.chlPageData,
							ie = y.sitekey;
						y.theme = (c = y.theme) !== null && c !== void 0 ? c : mt.Auto, y.retry = (b = y.retry) !== null && b !== void 0 ? b : yt.Auto, y.execution = (g = y.execution) !== null && g !== void 0 ? g : Ke.Render, y.appearance = (k = y.appearance) !== null && k !== void 0 ? k : me.Always, y["retry-interval"] = Number((O = y["retry-interval"]) !== null && O !== void 0 ? O : Ur), y["expiry-interval"] = Number((w = y["expiry-interval"]) !== null && w !== void 0 ? w : (Ar - Sr) * 1e3), y.size = (P = y.size) !== null && P !== void 0 ? P : Y.Normal;
						var ct = y.callback,
							Je = y["expired-callback"],
							qe = y["timeout-callback"],
							Pt = y["after-interactive-callback"],
							Lt = y["before-interactive-callback"],
							Ft = y["error-callback"],
							ye = y["unsupported-callback"];
						typeof ie != "string" && h('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof ie == "undefined" ? "undefined" : F(ie), '"'), 3588), Ta(ie) || h('Invalid input for parameter "sitekey", got "'.concat(ie, '"'), 3589), nr(y.size) || h('Invalid type for parameter "size", expected normal|compact, got "'.concat(y.size, '" ').concat(F(y.size)), 3590), $t(y.theme) || h('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(y.theme, '" ').concat(F(y.theme)), 3591), Zt(y.retry) || h('Invalid type for parameter "retry", expected never|auto, got "'.concat(y.retry, '" ').concat(F(y.retry)), 3592), y.language || (y.language = "auto"), lr(y.language) || (x('Invalid language value: "'.concat(y.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), y.language = "auto"), ur(y.appearance) || h('Unknown appearance value: "'.concat(y.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), cr(y.execution) || h('Unknown execution value: "'.concat(y.execution, ", expected either: 'render' or 'execute'."), 3601), er(y["retry-interval"]) || h('Invalid retry-interval value: "'.concat(y["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), tr(y["expiry-interval"]) || h('Invalid expiry-interval value: "'.concat(y["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						var he = (W = y["refresh-expired"]) !== null && W !== void 0 ? W : Fe.Auto;
						ir(he) ? y["refresh-expired"] = he : h('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(he, '" ').concat(typeof he == "undefined" ? "undefined" : F(he)), 3603);
						var Ie = (ae = y["refresh-timeout"]) !== null && ae !== void 0 ? ae : Ye.Auto;
						or(Ie) ? y["refresh-timeout"] = Ie : h('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(Ie, '" ').concat(typeof Ie == "undefined" ? "undefined" : F(Ie)), 3603), rr(Ve) || h('Invalid input for optional parameter "action", got "'.concat(Ve, '"'), 3604), ar(Ne) || h('Invalid input for optional parameter "cData", got "'.concat(Ne, '"'), 3605);
						var X = document.createElement("iframe"),
							_e = document.createElement("div"),
							yr = _e.attachShadow({
								mode: "closed"
							}),
							ze = p(),
							st = Q(ze);
						if (!(!ze || !st)) {
							var hr = [],
								Dt = y.execution === Ke.Render;
							Dt && hr.push(ht.Execute), m.lastWidgetIdx++;
							var Ha = {};
							m.widgetMap.set(ze, Ut(Te({
								action: Ve,
								assetCtxCallback: y._acCb,
								autoFeedbackSent: !1,
								cbAfterInteractive: Pt,
								cbBeforeInteractive: Lt,
								cbError: Ft,
								cbExpired: Je,
								cbSuccess: ct,
								cbTimeout: qe,
								cbUnsupported: ye,
								cData: Ne,
								chlPageData: He,
								feedbackOpen: !1,
								idx: m.lastWidgetIdx,
								isComplete: !1,
								isExecuted: Dt,
								isExecuting: Dt,
								isExpired: !1,
								isFailed: !1,
								isInitialized: !1,
								isResetting: !1,
								isStale: !1,
								msgQueue: hr,
								params: y,
								rcV: pe,
								renderSource: r,
								responseElementsBuilt: !1,
								watchcat: {
									lastAckedSeq: 0,
									missingWidgetWarning: !1,
									overrunBeginSeq: 0,
									seq: 0
								}
							}, Ha), {
								isOverrunning: !1,
								shadow: yr,
								widgetInitStartTimeTsMs: 0,
								widgetParamsStartTimeTsMs: 0,
								widgetRenderEndTimeTsMs: 0,
								widgetRenderStartTimeTsMs: Ce,
								wrapper: _e
							})), Yt(m);
							var Re = m.widgetMap.get(ze);
							Re || h("Turnstile Initialization Error ", 3606), Re.chlPageData && pr(), X.style.display = "none", X.style.border = "none", X.style.overflow = "hidden";
							var _r = Ht(ze, ie, y, pe, !1, "b", K.New, m.scriptUrlParsed, Wt(Re));
							Re.iframeOrigin = De(_r), X.setAttribute("src", _r), Na(X, Re);
							var br = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
							return q((ne = (re = document.featurePolicy) === null || re === void 0 || (te = re.features) === null || te === void 0 ? void 0 : te.call(re)) !== null && ne !== void 0 ? ne : [], Bt) && br.push(Bt), X.setAttribute("allow", br.join("; ")), X.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), X.id = st, X.tabIndex = (ce = y.tabindex) !== null && ce !== void 0 ? ce : 0, X.title = "Widget containing a Cloudflare security challenge", yr.appendChild(X), Ua(Re, st), se && I(se.widgetId, se.widget), J.appendChild(_e), Re.widgetRenderEndTimeTsMs = $(), st
						}
					}
				},
				S = function(n, l) {
					return N(n, l, "explicit")
				},
				ge = function() {
					var n = [Mr, Nr];
					m.isRecaptchaCompatibilityMode && n.push(Pr), document.querySelectorAll(n.join(", ")).forEach(function(l) {
						N(l, void 0, "implicit")
					})
				},
				Z = function() {
					var n, l = -1,
						r = !0,
						c = !1,
						b = void 0;
					try {
						for (var g = m.widgetMap[Symbol.iterator](), k; !(r = (k = g.next()).done); r = !0) {
							var O = Ge(k.value, 2),
								w = O[0],
								P = O[1];
							l < P.idx && (n = w, l = P.idx)
						}
					} catch (W) {
						c = !0, b = W
					} finally {
						try {
							!r && g.return != null && g.return()
						} finally {
							if (c) throw b
						}
					}
					return l === -1 && h("Could not find widget", 43778), n
				},
				D = Nn(),
				T = function(n) {
					if (n.source === j && !(!n.widgetId || !m.widgetMap.has(n.widgetId))) {
						var l = Q(n.widgetId),
							r = m.widgetMap.get(n.widgetId);
						if (!(!l || !r)) switch (n.event) {
							case "init": {
								r.widgetInitStartTimeTsMs = $(), r.kills = n.kills;
								var c = r.shadow.getElementById(l);
								c || h("Cannot initialize Widget, Element not found (#".concat(l, ")."), 3074), r.mode = n.mode, r.nextRcV = n.nextRcV, r.mode === ve.Invisible && r.params["refresh-expired"] === Fe.Manual && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(Fe.Auto, "' or '").concat(Fe.Never, ".'")), r.mode !== ve.Managed && r.params["refresh-timeout"] !== Ye.Auto && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === me.Always || r.isExecuting && r.params.appearance === me.Execute ? It(c, r) : Pa(c), c.style.display = "";
								var b = Oe(r, l);
								b || h("Received state for an unknown widget: ".concat(n.widgetId), 3078), oe(b, {
									event: "init",
									source: j,
									widgetId: n.widgetId
								}, r.iframeOrigin);
								break
							}
							case "translationInit": {
								var g = r.shadow.getElementById(l);
								g || h("Cannot initialize Widget, Element not found (#".concat(l, ")."), 3074);
								var k = new Map;
								r.displayLanguage = n.displayLanguage, r.displayRtl = n.displayRtl, Object.keys(n.translationData).forEach(function(_e) {
									k.set(_e, n.translationData[_e])
								}), Tn(g, k);
								break
							}
							case "languageUnsupported": {
								x("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), r.displayLanguage = n.fallback;
								break
							}
							case "reject": {
								var O = r.shadow.getElementById(l);
								if (r.isExecuting = !1, O || h("Cannot initialize Widget, Element not found (#".concat(l, ")."), 3075), n.reason === "unsupported_browser") {
									var w;
									(w = r.cbUnsupported) === null || w === void 0 || w.call(r)
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
								if (d(r, pe, n.widgetId), r.response = n.token, n.aC) {
									var P;
									(P = r.assetCtxCallback) === null || P === void 0 || P.call(r, n.aC)
								}
								if (n.scs && !Be("scs", r) && (r.scs = n.scs, r.params["session-continuity-persist"] && !Be("scs_persist", r))) {
									var W = r.params.sitekey;
									if (W) {
										var ae = "".concat(Vt).concat(W);
										try {
											localStorage.setItem(ae, n.scs)
										} catch (_e) {}
									}
								}
								n.sToken ? e(r, n.widgetId, l, n.token, n.sToken, n.chlId) : o(r, l, !1);
								break
							}
							case "fail": {
								if (n.rcV && d(r, n.rcV, n.widgetId), n.cfChlOut && (r.cfChlOut = n.cfChlOut), n.cfChlOutS && (r.cfChlOutS = n.cfChlOutS), n.code && (r.errorCode = n.code), n.aC) {
									var ne;
									(ne = r.assetCtxCallback) === null || ne === void 0 || ne.call(r, n.aC)
								}
								r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, n.frMd && (r.frMd = n.frMd), dr(r, l);
								var ce = r.cbError,
									te = n.code === ft || n.code === pt,
									re = n.code !== kr;
								if (te) {
									var Ce = Oe(r, l);
									Ce && oe(Ce, {
										event: "forceFail",
										source: j,
										widgetId: n.widgetId
									}, r.iframeOrigin)
								}
								if (ce) {
									var J;
									ce(String((J = n.code) !== null && J !== void 0 ? J : Cr)) ? re && r.params.retry === yt.Auto && !r.isResetting && t(r, l, te) : (n.code && x("Error: ".concat(n.code, ".")), re && t(r, l, te))
								} else n.code ? (re && t(r, l, te), h("Error: ".concat(n.code), 3076)) : t(r, l, !1);
								break
							}
							case "feedbackInit": {
								var se = Mt(r, l).targetWindow;
								if (se) {
									x("A feedback report form is already opened for this widget.");
									return
								}
								if (!r.autoFeedbackSent && !Be("feedback-report-auto-submit", r)) {
									var de = ta(r, n.feedbackOrigin, n.rayId, r.frMd, m.scriptUrlParsed);
									de && (r.autoFeedbackSent = !0)
								}
								r.feedbackOpen = !0, r.retryTimeout != null && (clearTimeout(r.retryTimeout), r.retryTimeout = void 0, r.pendingRetry || (r.pendingRetry = {
									crashed: !1
								})), ra(), window.postMessage({
									event: "feedbackOpen",
									source: j,
									widgetId: n.widgetId
								}, "*"), Gt(l, r, n.feedbackOrigin, m.scriptUrlParsed, function() {
									i(r, l, n.widgetId)
								});
								break
							}
							case "requestFeedbackData": {
								var fe = Oe(r, l);
								fe || h("Received state for an unknown widget: #".concat(l, " / ").concat(n.widgetId), 3078), oe(fe, {
									event: "requestTurnstileResults",
									source: j,
									widgetId: n.widgetId
								}, r.iframeOrigin);
								break
							}
							case "turnstileResults": {
								var z, Me, xe, Ee = Mt(r, l),
									we = Ee.targetOrigin,
									lt = Ee.targetWindow;
								if (!lt) break;
								qt(lt, {
									cfChlOut: (z = r.cfChlOut) !== null && z !== void 0 ? z : n.cfChlOut,
									cfChlOutS: (Me = r.cfChlOutS) !== null && Me !== void 0 ? Me : n.cfChlOutS,
									errorCode: r.errorCode,
									event: "feedbackData",
									frMd: (xe = r.frMd) !== null && xe !== void 0 ? xe : n.frMd,
									mode: n.mode,
									rayId: n.rayId,
									rcV: n.rcV,
									sitekey: n.sitekey,
									source: j,
									widgetId: n.widgetId
								}, we);
								break
							}
							case "closeFeedbackReportIframe": {
								var ut = Mt(r, l).targetWindow;
								ut || h("Received state for an unknown widget: ".concat(n.widgetId), 3078), rt("".concat(l, "-fr")), Ue(r), i(r, l, n.widgetId);
								break
							}
							case "tokenExpired": {
								var y, Ve = n.token;
								r.isExpired = !0, (y = r.cbExpired) === null || y === void 0 || y.call(r, Ve), r.params["refresh-expired"] === Fe.Auto && !r.isResetting && A(K.AutoExpire, l);
								break
							}
							case "interactiveTimeout": {
								d(r, pe, n.widgetId), dr(r, l);
								var Ne = r.cbTimeout;
								if (Ne ? Ne() : r.params["refresh-timeout"] === Ye.Never && !r.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === Ye.Auto && !r.isResetting) {
									var He = r.cbAfterInteractive;
									He == null || He(), A(K.AutoTimeout, l)
								}
								break
							}
							case "refreshRequest": {
								d(r, pe, n.widgetId), rt(l), Ue(r), A(K.ManualRefresh, l);
								break
							}
							case "reloadRequest": {
								d(r, n.nextRcV, n.widgetId), A(n.trigger, l);
								break
							}
							case "reloadApiJsRequest": {
								if (Be("reload", r)) {
									it(n.widgetId);
									break
								}
								if (Nt !== void 0) {
									it(n.widgetId);
									break
								}
								if (wn()) {
									it(n.widgetId);
									break
								}
								Va() ? (m.apiJsMismatchReloadAttempts++, In(), Rn(n.widgetId)) : it(n.widgetId);
								break
							}
							case "interactiveBegin": {
								var ie, ct = r.shadow.getElementById(l);
								ct || h("Cannot layout widget, Element not found (#".concat(l, ")."), 3076), (ie = r.cbBeforeInteractive) === null || ie === void 0 || ie.call(r), r.params.appearance === me.InteractionOnly && It(ct, r);
								break
							}
							case "interactiveEnd": {
								var Je;
								(Je = r.cbAfterInteractive) === null || Je === void 0 || Je.call(r);
								break
							}
							case "widgetStale": {
								r.isStale = !0;
								break
							}
							case "requestExtraParams": {
								r.widgetParamsStartTimeTsMs = $();
								var qe = Oe(r, l);
								qe || h("Received state for an unknown widget: ".concat(n.widgetId), 3078), r.isResetting = !1;
								var Pt = {},
									Lt = $(),
									Ft = {
										"d.cT": s(),
										"ht.atrs": u(document.body.parentNode),
										"pg.ref": document.referrer,
										pi: {
											ffp: ma(r.wrapper),
											ii: window.self !== window.top,
											lH: window.location.href,
											mL: document.getElementsByTagName("meta").length,
											pfp: _a(document, Br, Vr, sr),
											sL: document.scripts.length,
											sR: r.wrapper.shadowRoot === null,
											ssL: bn(document, sr),
											t: "".concat(document.title.length, "|").concat(ba(document.title)),
											tL: ha(document, sr),
											wp: va(r.wrapper),
											xp: pa(r.wrapper).slice(0, Hr)
										},
										"w.iW": window.innerWidth
									},
									ye = r.scs;
								if (!ye && r.params["session-continuity-persist"] && !Be("scs_persist", r)) {
									var he = r.params.sitekey;
									if (he) {
										var Ie = "".concat(Vt).concat(he);
										try {
											var X;
											ye = (X = localStorage.getItem(Ie)) !== null && X !== void 0 ? X : void 0
										} catch (_e) {}
									}
								}
								ye && ye.length > Jr && (ye = void 0), oe(qe, Te({
									action: r.action,
									apiJsMismatchReloadAttempts: m.apiJsMismatchReloadAttempts,
									apiJsMismatchReloadCompletedCount: m.apiJsMismatchReloadCompletedCount,
									apiJsResourceTiming: D ? JSON.parse(JSON.stringify(D)) : void 0,
									appearance: r.params.appearance,
									au: m.scriptUrl,
									cData: r.cData,
									ch: "7c8a194018aa",
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
									scs: ye,
									source: j,
									timeExtraParamsMs: $() - r.widgetRenderStartTimeTsMs,
									timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
									timeLoadInitMs: $() - m.turnstileLoadInitTimeTsMs,
									timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
									timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
									timeTiefMs: $() - Lt,
									upgradeAttempts: m.upgradeAttempts,
									upgradeCompletedCount: m.upgradeCompletedCount,
									url: fr(),
									widgetId: n.widgetId,
									wPr: Ft
								}, Pt), r.iframeOrigin), f(r, n.widgetId, qe), r.isInitialized = !0;
								break
							}
							default:
								break
						}
					}
				},
				V = function(n) {
					if (On(n)) {
						var l = n.data;
						if (!Cn(n)) {
							x("Ignored message from wrong origin: ".concat(n.origin, "."));
							return
						}
						if (!(!l.widgetId || !m.widgetMap.has(l.widgetId))) {
							var r = Q(l.widgetId),
								c = m.widgetMap.get(l.widgetId);
							if (!(!r || !c)) {
								if (!Mn(n, c, r)) {
									x("Ignored message from unexpected source for event: ".concat(l.event, "."));
									return
								}
								T(l)
							}
						}
					}
				};
			m.msgHandler = V, m.internalMsgHandler = T, window.addEventListener("message", V);

			function M(_) {
				var n;
				if (typeof _ == "string") {
					var l = wt(_);
					if (l) return l;
					try {
						var r = document.querySelector(_);
						return r ? M(r) : null
					} catch (c) {
						return null
					}
				}
				return L(_, Element) ? wt(_) : _ || m.widgetMap.size === 0 ? null : (n = Z()) !== null && n !== void 0 ? n : null
			}
			var H = {},
				G = {
					showFeedback: function(n) {
						var l = M(n);
						if (l) {
							var r = Q(l);
							if (r) {
								var c = m.widgetMap.get(l);
								c && Gt(r, c, ua.Custom, m.scriptUrlParsed)
							}
						}
					}
				},
				ee = Ut(Te({}, H), {
					_private: G,
					execute: function(n, l) {
						var r = M(n);
						if (!r) {
							var c;
							l === void 0 && h("Please provide 2 parameters to execute: container and parameters", 43521);
							var b = S(n, l);
							b || h("Failed to render widget", 43522), r = (c = Ze(b)) !== null && c !== void 0 ? c : M(n), r || h("Failed to render widget", 43522)
						}
						var g = m.widgetMap.get(r);
						if (g) {
							v(g, l);
							var k = Q(r);
							if (k || (g.isExecuting = !1, h("Widget ".concat(r, " to execute was not found"), 43522)), g.isExecuting) {
								x("Call to execute() on a widget that is already executing (".concat(k, "), consider using reset() before execute()."));
								return
							}
							if (g.isExecuting = !0, g.response) {
								var O;
								g.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(k, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (O = g.cbSuccess) === null || O === void 0 || O.call(g, g.response, !1);
								return
							}
							g.isExpired && x("Call to execute on a expired-widget (".concat(k, "), consider using reset() before.")), g.isStale && (A(K.StaleExecute, k), g.isExecuting = !0), (g.isResetting || !g.isInitialized) && g.msgQueue.push(ht.Execute), g.isExecuted = !0;
							var w = Oe(g, k);
							if (w || (g.isExecuting = !1, h("Widget ".concat(k, " to execute was not found"), 43522)), g.isResetting || !g.isInitialized) return;
							if (g.isInitialized && g.msgQueue.length > 0) {
								f(g, r, w), g.params.appearance === me.Execute && It(w, g);
								return
							}
							g.isInitialized && g.params.appearance === me.Execute && It(w, g), g.isExecuting && oe(w, {
								event: "execute",
								source: j,
								widgetId: r
							}, g.iframeOrigin)
						}
					},
					getResponse: function(n) {
						var l;
						if (typeof n == "undefined") {
							var r = Z();
							if (r) {
								var c = m.widgetMap.get(r);
								return c != null && c.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), c == null ? void 0 : c.response
							}
							h("Could not find a widget", 43794)
						}
						var b = M(n);
						return b || h("Could not find widget for provided container", 43778), (l = m.widgetMap.get(b)) === null || l === void 0 ? void 0 : l.response
					},
					isExpired: function(n) {
						var l, r;
						if (typeof n == "undefined") {
							var c = Z();
							if (c) {
								var b, g;
								return (b = (g = m.widgetMap.get(c)) === null || g === void 0 ? void 0 : g.isExpired) !== null && b !== void 0 ? b : !1
							}
							h("Could not find a widget", 43794)
						}
						var k = M(n);
						return k || h("Could not find widget for provided container", 43778), (l = (r = m.widgetMap.get(k)) === null || r === void 0 ? void 0 : r.isExpired) !== null && l !== void 0 ? l : !1
					},
					ready: function(n) {
						if (m.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), h("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && h('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : F(n), '"'), 3841), m.isReady) {
							n();
							return
						}
						gr.push(n)
					},
					remove: U,
					render: S,
					reset: C
				});
			return Object.defineProperty(ee, La, {
				configurable: !0,
				enumerable: !1,
				value: {
					clearPendingApiJsReloadRequest: function() {
						vr()
					},
					rearmTimedUpgrade: function() {
						mr()
					},
					rejectPendingApiJsReloadRequest: function() {
						Da()
					},
					reloadAfterUpgrade: function() {
						R()
					}
				}
			}), {
				runImplicitRender: ge,
				turnstile: ee
			}
		})(),
		Pn = Ba.runImplicitRender,
		Tt = Ba.turnstile;

	function Ln(e) {
		var t, a, i = e.getAttribute("data-sitekey"),
			o = {
				sitekey: i
			},
			u = e.getAttribute("data-tabindex");
		u && (o.tabindex = Number.parseInt(u, 10));
		var s = e.getAttribute("data-theme");
		s && ($t(s) ? o.theme = s : x('Unknown data-theme value: "'.concat(s, '".')));
		var d = e.getAttribute("data-size");
		if (d && (nr(d) ? o.size = d : x('Unknown data-size value: "'.concat(d, '".'))), 0) var p;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (o.action = f);
		var v = e.getAttribute("data-cdata");
		typeof v == "string" && (o.cData = v);
		var E = e.getAttribute("data-retry");
		E && (Zt(E) ? o.retry = E : x('Invalid data-retry value: "'.concat(E, ", expected either 'never' or 'auto'\".")));
		var C = e.getAttribute("data-retry-interval");
		if (C) {
			var A = Number.parseInt(C, 10);
			er(A) ? o["retry-interval"] = A : x('Invalid data-retry-interval value: "'.concat(C, ', expected an integer value > 0 and < 900000".'))
		}
		var I = e.getAttribute("data-expiry-interval");
		if (I) {
			var U = Number.parseInt(I, 10);
			tr(U) ? o["expiry-interval"] = U : x('Invalid data-expiry-interval value: "'.concat(U, ', expected an integer value > 0 and < 360000".'))
		}
		var R = e.getAttribute("data-refresh-expired");
		R && (ir(R) ? o["refresh-expired"] = R : x('Unknown data-refresh-expired value: "'.concat(R, ", expected either: 'never', 'auto' or 'manual'.")));
		var N = e.getAttribute("data-refresh-timeout");
		N && (or(N) ? o["refresh-timeout"] = N : x('Unknown data-refresh-timeout value: "'.concat(N, ", expected either: 'never', 'auto' or 'manual'.")));
		var S = e.getAttribute("data-language");
		S && (lr(S) ? o.language = S : x('Invalid data-language value: "'.concat(S, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function ge(_) {
			var n = e.getAttribute(_),
				l = n ? ke[n] : void 0;
			return typeof l == "function" ? l : void 0
		}
		var Z = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		Z.forEach(function(_) {
			Object.assign(o, Pe({}, _, ge("data-".concat(_))))
		}), o["feedback-enabled"] = (t = Rt(e.getAttribute("data-feedback-enabled"), !0, function(_) {
			return 'Invalid data-feedback-enabled value: "'.concat(_, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && t !== void 0 ? t : !0, o["response-field"] = (a = Rt(e.getAttribute("data-response-field"), !0, function(_) {
			return 'Invalid data-response-field value: "'.concat(_, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && a !== void 0 ? a : !0;
		var D = e.getAttribute("data-response-field-name");
		D && (o["response-field-name"] = D);
		var T = e.getAttribute("data-execution");
		T && (cr(T) ? o.execution = T : x('Unknown data-execution value: "'.concat(T, ", expected either: 'render' or 'execute'.")));
		var V = e.getAttribute("data-appearance");
		V && (ur(V) ? o.appearance = V : x('Unknown data-appearance value: "'.concat(V, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var M = e.getAttribute("data-offlabel-show-privacy"),
			H = Rt(M, void 0, function(_) {
				return 'Invalid data-offlabel-show-privacy value: "'.concat(_, '", expected "true" or "false".')
			});
		typeof H == "boolean" && (o["offlabel-show-privacy"] = H);
		var G = e.getAttribute("data-offlabel-show-help"),
			ee = Rt(G, void 0, function(_) {
				return 'Invalid data-offlabel-show-help value: "'.concat(_, '", expected "true" or "false".')
			});
		return typeof ee == "boolean" && (o["offlabel-show-help"] = ee), o
	}

	function Va() {
		if (pr(), Fa()) return !1;
		var e = Ia(window.turnstile, m);
		return e ? !0 : (mr(), !1)
	}
	Se = !1, B = $r(), m.scriptWasLoadedAsync = (At = B == null ? void 0 : B.loadedAsync) !== null && At !== void 0 ? At : !1, m.scriptUrl = (St = B == null ? void 0 : B.src) !== null && St !== void 0 ? St : "undefined", m.scriptUrlParsed = B == null ? void 0 : B.url, B != null && B.params && (We = B.params.get("compat"), (We == null ? void 0 : We.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled.") : (x("Compatibility layer enabled."), m.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Tt) : We !== null && x('Unknown value for api.js?compat: "'.concat(We, '", ignoring.')), B.params.forEach(function(e, t) {
		q(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || x('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Se = B.params.get("_upgrade") === "true", le = B.params.get("onload"), le && !Se && setTimeout(function() {
		typeof ke[le] == "function" ? ke[le]() : (x("Unable to find onload callback '".concat(le, "' immediately after loading, expected 'function', got '").concat(F(ke[le]), "'.")), setTimeout(function() {
			typeof ke[le] == "function" ? ke[le]() : x("Unable to find onload callback '".concat(le, "' after 1 second, expected 'function', got '").concat(F(ke[le]), "'."))
		}, 1e3))
	}, 0)), nt = "turnstile" in window, ue = nt ? Oa(window.turnstile) : void 0, kt = nt && Se ? Ra(window.turnstile, m, function() {
		var e;
		window.turnstile = Tt, (e = Oa(Tt)) === null || e === void 0 || e.reloadAfterUpgrade(), Yt(m)
	}) : !1, kt && (ue == null || ue.clearPendingApiJsReloadRequest()), nt && Se && !kt ? (x("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), ue == null || ue.rejectPendingApiJsReloadRequest(), ue == null || ue.rearmTimedUpgrade()) : nt && !Se ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (kt || (window.turnstile = Tt), Se || ((B == null || (Ot = B.params) === null || Ot === void 0 ? void 0 : Ot.get("render")) !== "explicit" && gr.push(Pn), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Ma, 0) : window.addEventListener("DOMContentLoaded", Ma)), mr());
	var At, St, Se, B, We, le, nt, ue, kt, Ot;
})();