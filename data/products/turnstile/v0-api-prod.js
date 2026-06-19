"use strict";
(function() {
	function xr(e, t, r, i, o, l, d) {
		try {
			var s = e[l](d),
				p = s.value
		} catch (f) {
			r(f);
			return
		}
		s.done ? t(p) : Promise.resolve(p).then(i, o)
	}

	function Er(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise(function(i, o) {
				var l = e.apply(t, r);

				function d(p) {
					xr(l, i, o, d, s, "next", p)
				}

				function s(p) {
					xr(l, i, o, d, s, "throw", p)
				}
				d(void 0)
			})
		}
	}

	function Le(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function P(e, t) {
		"@swc/helpers - instanceof";
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
	}

	function Te(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = arguments[t] != null ? arguments[t] : {},
				i = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(o) {
				return Object.getOwnPropertyDescriptor(r, o).enumerable
			}))), i.forEach(function(o) {
				Le(e, o, r[o])
			})
		}
		return e
	}

	function qn(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			t && (i = i.filter(function(o) {
				return Object.getOwnPropertyDescriptor(e, o).enumerable
			})), r.push.apply(r, i)
		}
		return r
	}

	function Ut(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qn(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
		}), e
	}

	function wr(e) {
		if (Array.isArray(e)) return e
	}

	function Ir(e, t) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var i = [],
				o = !0,
				l = !1,
				d, s;
			try {
				for (r = r.call(e); !(o = (d = r.next()).done) && (i.push(d.value), !(t && i.length === t)); o = !0);
			} catch (p) {
				l = !0, s = p
			} finally {
				try {
					!o && r.return != null && r.return()
				} finally {
					if (l) throw s
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
		for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
		return i
	}

	function ct(e, t) {
		if (e) {
			if (typeof e == "string") return je(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return je(e, t)
		}
	}

	function Ge(e, t) {
		return wr(e) || Ir(e, t) || ct(e, t) || Rr()
	}

	function F(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Tr(e, t) {
		var r, i, o, l = {
				label: 0,
				sent: function() {
					if (o[0] & 1) throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			},
			d = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype),
			s = Object.defineProperty;
		return s(d, "next", {
			value: p(0)
		}), s(d, "throw", {
			value: p(1)
		}), s(d, "return", {
			value: p(2)
		}), typeof Symbol == "function" && s(d, Symbol.iterator, {
			value: function() {
				return this
			}
		}), d;

		function p(v) {
			return function(E) {
				return f([v, E])
			}
		}

		function f(v) {
			if (r) throw new TypeError("Generator is already executing.");
			for (; d && (d = 0, v[0] && (l = 0)), l;) try {
				if (r = 1, i && (o = v[0] & 2 ? i.return : v[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, v[1])).done) return o;
				switch (i = 0, o && (v = [v[0] & 2, o.value]), v[0]) {
					case 0:
					case 1:
						o = v;
						break;
					case 4:
						return l.label++, {
							value: v[1],
							done: !1
						};
					case 5:
						l.label++, i = v[1], v = [0];
						continue;
					case 7:
						v = l.ops.pop(), l.trys.pop();
						continue;
					default:
						if (o = l.trys, !(o = o.length > 0 && o[o.length - 1]) && (v[0] === 6 || v[0] === 2)) {
							l = 0;
							continue
						}
						if (v[0] === 3 && (!o || v[1] > o[0] && v[1] < o[3])) {
							l.label = v[1];
							break
						}
						if (v[0] === 6 && l.label < o[1]) {
							l.label = o[1], o = v;
							break
						}
						if (o && l.label < o[2]) {
							l.label = o[2], l.ops.push(v);
							break
						}
						o[2] && l.ops.pop(), l.trys.pop();
						continue
				}
				v = t.call(e, l)
			} catch (E) {
				v = [6, E], i = 0
			} finally {
				r = o = 0
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
		Or = 200100,
		kr = 200500,
		Cr = 300020,
		st = 300030,
		ft = 300031;

	function Wt(e) {
		var t = new URLSearchParams;
		if (0) var r;
		if (e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var pt = "cf-chl-widget-",
		j = "cloudflare-challenge",
		Mr = ".cf-turnstile",
		Nr = ".cf-challenge",
		Lr = ".g-recaptcha",
		Pr = "cf-turnstile-response",
		Fr = "g-recaptcha-response",
		Pe = 3e4,
		Xe = 180 * 1e3,
		Dr = 1e4,
		Ur = 8e3,
		Wr = 10800 * 1e3,
		Bt = "private-token",
		Br = 3,
		Vr = 500,
		Hr = 500,
		me = "",
		Vt = "_cftscs_",
		Jr = 512;
	var ge = (function(e) {
			return e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible", e
		})({}),
		Y = (function(e) {
			return e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible", e
		})({}),
		vt = (function(e) {
			return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e
		})({}),
		mt = (function(e) {
			return e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain", e
		})({}),
		gt = (function(e) {
			return e.Never = "never", e.Auto = "auto", e
		})({}),
		Fe = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		Ye = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		ye = (function(e) {
			return e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only", e
		})({}),
		Ke = (function(e) {
			return e.Render = "render", e.Execute = "execute", e
		})({}),
		yt = (function(e) {
			return e.Execute = "execute", e
		})({}),
		K = (function(e) {
			return e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun", e
		})({});

	function q(e, t) {
		return e.indexOf(t) !== -1
	}
	var zn = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		jn = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		qr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function ht(e, t, r) {
		var i, o = "https://challenges.cloudflare.com",
			l = (i = r == null ? void 0 : r.origin) !== null && i !== void 0 ? i : o;
		if (t) {
			var d;
			return (d = e["base-url"]) !== null && d !== void 0 ? d : l
		}
		return l
	}

	function Ht(e, t, r, i, o, l, d, s, p) {
		var f = ht(r, o, s),
			v = l !== void 0 && l !== "" ? "h/".concat(l, "/") : "",
			E = p !== void 0 && p !== "" ? "&".concat(p) : "",
			S = r["feedback-enabled"] === !1 ? "fbD" : "fbE",
			k = r.chlPageOfflabel === !0 ? "&offlabel=true" : "";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/f/ov2/av0/rch").concat(i, "/").concat(e, "/").concat(t, "/").concat(r.theme, "/").concat(S, "/").concat(d, "/").concat(r.size, "?lang=").concat(r.language).concat(k).concat(E)
	}
	var Jt = function(t) {
			var r, i, o, l, d = window.innerWidth < 400,
				s = t.state !== mt.FailureFeedbackCode && (t.state === mt.FailureFeedback || t.state === mt.FailureHavingTroubles || t.errorCode === void 0 || t.errorCode === 0),
				p = q(zn, (r = (o = t.displayLanguage) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && r !== void 0 ? r : "nonexistent"),
				f = q(jn, (i = (l = t.displayLanguage) === null || l === void 0 ? void 0 : l.toLowerCase()) !== null && i !== void 0 ? i : "nonexistent");
			return d ? Gn({
				isModeratelyVerbose: f,
				isSmallerFeedback: s,
				isVerboseLanguage: p
			}) : s && p ? "680px" : s && f ? "670px" : s ? "650px" : p ? "690px" : "680px"
		},
		Gn = function(t) {
			var r = t.isVerboseLanguage,
				i = t.isSmallerFeedback,
				o = t.isModeratelyVerbose;
			return i && r ? "660px" : i && o ? "620px" : i ? "600px" : r ? "770px" : o ? "740px" : "730px"
		};

	function Ae(e) {
		return Ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
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

	function Gr(e, t, r) {
		return t = Ae(t), jr(e, Qe() ? Reflect.construct(t, r || [], Ae(e).constructor) : t.apply(e, r))
	}

	function Xr(e, t) {
		if (!P(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function xe(e, t) {
		return xe = Object.setPrototypeOf || function(i, o) {
			return i.__proto__ = o, i
		}, xe(e, t)
	}

	function Yr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && xe(e, t)
	}

	function $e(e, t, r) {
		return Qe() ? $e = Reflect.construct : $e = function(o, l, d) {
			var s = [null];
			s.push.apply(s, l);
			var p = Function.bind.apply(o, s),
				f = new p;
			return d && xe(f, d.prototype), f
		}, $e.apply(null, arguments)
	}

	function Kr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function _t(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return _t = function(i) {
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
			}), xe(o, i)
		}, _t(e)
	}
	var Qr = (function(e) {
		"use strict";
		Yr(t, e);

		function t(r, i) {
			Xr(this, t);
			var o;
			return o = Gr(this, t, [r]), Le(o, "code", void 0), o.name = "TurnstileError", o.code = i, o
		}
		return t
	})(_t(Error));
	var Xn = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;

	function h(e, t) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Qr(r, t)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Ze(e) {
		return e.startsWith(pt) ? e.slice(pt.length) : null
	}

	function Q(e) {
		return "".concat(pt).concat(e)
	}

	function bt(e, t) {
		var r = !0,
			i = !1,
			o = void 0;
		try {
			for (var l = Object.getOwnPropertySymbols(e)[Symbol.iterator](), d; !(r = (d = l.next()).done); r = !0) {
				var s = d.value,
					p, f = (p = Object.getOwnPropertyDescriptor(e, s)) === null || p === void 0 ? void 0 : p.value;
				if (t(f)) return f
			}
		} catch (v) {
			i = !0, o = v
		} finally {
			try {
				!r && l.return != null && l.return()
			} finally {
				if (i) throw o
			}
		}
	}

	function et() {
		var e = Xn,
			t = document.currentScript;
		if (P(t, HTMLScriptElement) && e.test(t.src)) return t;
		var r = document.querySelectorAll("script"),
			i = !0,
			o = !1,
			l = void 0;
		try {
			for (var d = r[Symbol.iterator](), s; !(i = (s = d.next()).done); i = !0) {
				var p = s.value;
				if (P(p, HTMLScriptElement) && e.test(p.src)) return p
			}
		} catch (f) {
			o = !0, l = f
		} finally {
			try {
				!i && d.return != null && d.return()
			} finally {
				if (o) throw l
			}
		}
	}

	function $r() {
		var e = et();
		e === void 0 && h("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			r;
		try {
			r = new URL(t)
		} catch (l) {
			h("Could not parse Turnstile script tag URL", 43777)
		}
		var i = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: r
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

	function qt(e, t, r) {
		if (r === void 0 || r === "") {
			if (0) var i;
			return
		}
		e == null || e.postMessage(t, r)
	}

	function de(e, t, r) {
		qt(e.contentWindow, t, r)
	}
	var Yn = 5e3,
		Kn = "auto-troubleshoot-click";

	function Qn(e, t) {
		var r = ht(e.params, !1, t),
			i = "h/".concat("g", "/");
		return "".concat(r, "/cdn-cgi/challenge-platform/").concat(i, "feedback-reports")
	}
	var tn = function(t, r, i, o, l) {
		var d, s, p, f, v, E, S;
		if (o === void 0 || o === "" || i === void 0 || i === "") return !1;
		var k = Qn(t, l),
			w = new FormData;
		w.append("consent", "on"), w.append("origin", r), w.append("issue", Kn), w.append("description", ""), w.append("rayId", i), w.append("sitekey", (d = t.params.sitekey) !== null && d !== void 0 ? d : ""), w.append("rcV", (s = t.rcV) !== null && s !== void 0 ? s : ""), w.append("cfChlOut", (p = t.cfChlOut) !== null && p !== void 0 ? p : ""), w.append("cfChlOutS", (f = t.cfChlOutS) !== null && f !== void 0 ? f : ""), w.append("mode", (v = t.mode) !== null && v !== void 0 ? v : ""), w.append("errorCode", String((E = t.errorCode) !== null && E !== void 0 ? E : 0)), w.append("frMd", o), w.append("displayLanguage", (S = t.displayLanguage) !== null && S !== void 0 ? S : "");
		try {
			if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(k, w)) return !0
		} catch (W) {
			x("auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(zt(W), ")"))
		}
		try {
			return fetch(k, Te({
				body: w,
				keepalive: !0,
				method: "POST",
				mode: "no-cors"
			}, Zr())), !0
		} catch (W) {
			x("auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(zt(W), ")"))
		}
		try {
			fetch(k, Te({
				body: w,
				method: "POST",
				mode: "no-cors"
			}, Zr()))
		} catch (W) {
			x("auto feedback report: all transports failed (".concat(zt(W), ")"))
		}
		return !1
	};

	function Zr() {
		return typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function" ? {} : {
			signal: AbortSignal.timeout(Yn)
		}
	}

	function zt(e) {
		return P(e, Error) ? e.message : "unknown error"
	}
	var xt = null,
		tt = 0,
		rn = function() {
			if (tt++, tt === 1) {
				var t = document.querySelector('meta[http-equiv="refresh"]');
				t && (xt = t.getAttribute("content"), t.remove())
			}
		},
		nn = function() {
			if (tt > 0 && tt--, tt === 0 && xt != null) {
				var t = document.createElement("meta");
				t.httpEquiv = "refresh", t.content = xt, xt = null, document.head.appendChild(t)
			}
		},
		jt = Symbol(),
		$n = "host-origin",
		Ue = function(t) {
			t.feedbackPopup && !t.feedbackPopup.closed && t.feedbackPopup.close(), t.feedbackPopup = void 0, t.feedbackPopupOrigin = void 0
		};

	function an(e) {
		return e.endsWith("-fr") ? e : "".concat(e, "-fr")
	}

	function on(e) {
		var t, r, i, o = (i = document.getElementById(e)) === null || i === void 0 || (r = i.parentElement) === null || r === void 0 || (t = r.parentElement) === null || t === void 0 ? void 0 : t.parentElement;
		return P(o, HTMLDivElement) ? o : null
	}

	function en(e) {
		var t;
		if (!((typeof e == "undefined" ? "undefined" : F(e)) !== "object" || e === null)) {
			var r = (t = Object.getOwnPropertyDescriptor(e, "cleanup")) === null || t === void 0 ? void 0 : t.value;
			return typeof r == "function" ? r : void 0
		}
	}

	function un(e) {
		var t, r = en((t = Object.getOwnPropertyDescriptor(e, jt)) === null || t === void 0 ? void 0 : t.value);
		if (r) return r;
		var i = !0,
			o = !1,
			l = void 0;
		try {
			for (var d = Object.getOwnPropertySymbols(e)[Symbol.iterator](), s; !(i = (s = d.next()).done); i = !0) {
				var p = s.value,
					f, v = en((f = Object.getOwnPropertyDescriptor(e, p)) === null || f === void 0 ? void 0 : f.value);
				if (v) return v
			}
		} catch (E) {
			o = !0, l = E
		} finally {
			try {
				!i && d.return != null && d.return()
			} finally {
				if (o) throw l
			}
		}
	}

	function Zn(e, t) {
		Object.defineProperty(e, jt, {
			configurable: !0,
			enumerable: !1,
			value: {
				cleanup: t
			}
		})
	}

	function ea(e) {
		Reflect.deleteProperty(e, jt)
	}

	function ta(e) {
		var t = new URL(e, window.location.href),
			r = new URLSearchParams(t.hash.startsWith("#") ? t.hash.slice(1) : t.hash);
		return r.set($n, window.location.origin), t.hash = r.toString(), t.toString()
	}
	var Gt = function(t, r, i, o, l) {
			var d, s, p = an(t),
				f = ht(r.params, !1, o),
				v = "h/".concat("g", "/"),
				E = ta("".concat(f, "/cdn-cgi/challenge-platform/").concat(v, "feedback-reports/").concat(Ze(t), "/").concat(r.displayLanguage, "/").concat((s = r.params.theme) !== null && s !== void 0 ? s : r.theme, "/").concat(i));
			if (Ue(r), window.top !== window.self) {
				var S = window.open(E, "_blank");
				if (S) {
					r.feedbackPopupOrigin = De(E), r.feedbackPopup = S;
					var k = window.setInterval(function() {
						S.closed && (window.clearInterval(k), r.feedbackPopupCloseCheck = void 0, l == null || l())
					}, 500);
					r.feedbackPopupCloseCheck = k;
					return
				}
				x("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
			}
			r.wrapper.parentNode || h("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3074);
			var w = on(p);
			if (w) {
				var W;
				(W = un(w)) === null || W === void 0 || W()
			}
			var A = document.createElement("div");
			A.style.position = "fixed", A.style.zIndex = "2147483646", A.style.width = "100vw", A.style.height = "100vh", A.style.top = "0", A.style.left = "0", A.style.transformOrigin = "center center", A.style.overflowX = "hidden", A.style.overflowY = "auto", A.style.background = "rgba(0,0,0,0.4)";
			var M = document.createElement("div");
			M.className = "cf-wrapper-turnstile-feedback", M.style.display = "table-cell", M.style.verticalAlign = "middle", M.style.width = "100vw", M.style.height = "100vh";
			var I = document.createElement("div");
			I.className = "cf-turnstile-feedback", I.id = "cf-fr-id", I.style.width = "100vw", I.style.maxWidth = "500px", I.style.height = Jt(r), I.style.position = "relative", I.style.zIndex = "2147483647", I.style.backgroundColor = "#ffffff", I.style.borderRadius = "5px", I.style.left = "0px", I.style.top = "0px", I.style.overflow = "hidden", I.style.margin = "0px auto";
			var he = function() {
					I.style.height = Jt(r)
				},
				Z = function() {
					var ee;
					ea(A), r.feedbackIframeOrigin = void 0, window.removeEventListener("resize", he), (ee = A.parentNode) === null || ee === void 0 || ee.removeChild(A), l == null || l()
				},
				B = document.createElement("iframe");
			B.id = p, B.setAttribute("src", E), B.setAttribute("title", "Turnstile feedback report"), B.setAttribute("allow", "cross-origin-isolated; fullscreen"), B.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), B.setAttribute("scrolling", "yes"), B.style.borderWidth = "0px", B.style.width = "100%", B.style.height = "100%", B.style.overflow = "auto", r.feedbackIframeOrigin = De(E);
			var R = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			R.setAttribute("tabindex", "0"), R.setAttribute("role", "button"), R.setAttribute("aria-label", "Close feedback report"), R.style.position = "absolute", R.style.width = "26px", R.style.height = "26px", R.style.zIndex = "2147483647", R.style.cursor = "pointer", r.displayRtl === !0 ? R.style.left = "24px" : R.style.right = "24px", R.style.top = "24px", R.setAttribute("width", "20"), R.setAttribute("height", "20"), R.addEventListener("click", function(G) {
				G.stopPropagation(), Z()
			}), R.addEventListener("keydown", function(G) {
				(G.key === "Enter" || G.key === " ") && (G.preventDefault(), G.stopPropagation(), Z())
			});
			var V = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			V.setAttribute("ry", "12"), V.setAttribute("rx", "12"), V.setAttribute("cy", "12"), V.setAttribute("cx", "12"), V.setAttribute("fill", "none"), V.setAttribute("stroke-width", "0"), R.appendChild(V);
			var L = document.createElementNS("http://www.w3.org/2000/svg", "line");
			L.setAttribute("stroke-width", "1"), L.setAttribute("fill", "none"), L.setAttribute("x1", "6"), L.setAttribute("x2", "18"), L.setAttribute("y1", "18"), L.setAttribute("y2", "5");
			var H = document.createElementNS("http://www.w3.org/2000/svg", "line");
			H.setAttribute("stroke-width", "1"), H.setAttribute("fill", "none"), H.setAttribute("x1", "6"), H.setAttribute("x2", "18"), H.setAttribute("y1", "5"), H.setAttribute("y2", "18"), r.theme === vt.Light ? (L.setAttribute("stroke", "#0A0A0A"), H.setAttribute("stroke", "#0A0A0A")) : (L.setAttribute("stroke", "#F2F2F2"), H.setAttribute("stroke", "#F2F2F2")), R.appendChild(L), R.appendChild(H), I.appendChild(B), I.appendChild(R), M.appendChild(I), A.appendChild(M), A.addEventListener("click", Z), r.wrapper.parentNode.appendChild(A), window.addEventListener("resize", he), Zn(A, Z)
		},
		rt = function(t) {
			var r, i = an(t),
				o = on(i);
			if (o) {
				var l = un(o);
				if (l) {
					l();
					return
				}
				x("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (r = o.parentNode) === null || r === void 0 || r.removeChild(o)
			}
		};

	function ln(e, t) {
		return e ? t ? !0 : q(qr, e) : !1
	}
	var dn = (function(e) {
		return e.Failure = "failure", e.Verifying = "verifying", e.Overrunning = "overrunning", e.Custom = "custom", e.TimeCheckCachedWarning = "timecheckcachedwarning", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain", e
	})({});

	function cn(e) {
		if (Array.isArray(e)) return je(e)
	}

	function sn(e) {
		if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
	}

	function fn() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function pn(e) {
		return cn(e) || sn(e) || ct(e) || fn()
	}
	var Xt = function(t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return t.length > r ? t.slice(0, r) : t
	};

	function vn(e) {
		if (!e) return "-";
		var t = function(i, o) {
			if (!i || i.tagName === "BODY") return o;
			for (var l = 1, d = i.previousElementSibling; d;) d.tagName === i.tagName && l++, d = d.previousElementSibling;
			var s = Xt(i.tagName.toLowerCase()),
				p = "".concat(s, "[").concat(l, "]");
			return t(i.parentNode, "/".concat(p).concat(o))
		};
		return t(e, "")
	}

	function mn(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var ra = {
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

	function gn(e) {
		var t;
		if (!e) return "";
		var r = e.closest("form");
		if (!r) return "nf";
		var i = Array.from(r.querySelectorAll("input, select, textarea, button")),
			o = i.slice(0, 20).map(function(d) {
				var s;
				return (s = ra[d.type]) !== null && s !== void 0 ? s : "-"
			}).join(""),
			l = ["m:".concat((t = r.getAttribute("method")) !== null && t !== void 0 ? t : ""), "f:".concat(i.length), o].join("|");
		return l
	}

	function na(e) {
		return e.nodeType === Node.ELEMENT_NODE ? e : e.parentElement
	}

	function aa(e) {
		return "querySelectorAll" in e
	}

	function yn(e, t) {
		var r, i = t == null ? void 0 : t.shouldIgnoreElement;
		if (i !== void 0) {
			var o = P(e, Element) ? [e] : [];
			(r = o).push.apply(r, pn(Array.from(e.querySelectorAll("*"))));
			var l = new Set,
				d, s = !0,
				p = !1,
				f = void 0;
			try {
				for (var v = o[Symbol.iterator](), E; !(s = (E = v.next()).done); s = !0) {
					var S = E.value;
					if (d !== void 0) {
						if (d.contains(S)) {
							l.add(S);
							continue
						}
						d = void 0
					}
					i(S) && (l.add(S), d = S)
				}
			} catch (k) {
				p = !0, f = k
			} finally {
				try {
					!s && v.return != null && v.return()
				} finally {
					if (p) throw f
				}
			}
			return l
		}
	}

	function hn(e, t) {
		var r = na(e);
		return r === null || t === void 0 ? !1 : t.has(r)
	}

	function _n(e, t) {
		var r = yn(e, t);
		return Array.from(e.querySelectorAll("*")).filter(function(i) {
			return !hn(i, r)
		}).length
	}

	function bn(e, t, r, i) {
		for (var o = "", l = aa(e) ? yn(e, i) : void 0, d = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), s;
			(s = d.nextNode()) !== null && o.length < r;)
			if (!hn(s, l)) {
				for (var p = 0, f = s; f !== null && f !== e;) p++, f = f.parentNode;
				if (!(p > t))
					if (s.nodeType === Node.ELEMENT_NODE) {
						var v = s;
						o += "".concat(Xt(v.tagName.toLowerCase()));
						var E = !0,
							S = !1,
							k = void 0;
						try {
							for (var w = Array.from(v.attributes)[Symbol.iterator](), W; !(E = (W = w.next()).done); E = !0) {
								var A = W.value,
									M;
								(i == null || (M = i.shouldIgnoreAttribute) === null || M === void 0 ? void 0 : M.call(i, v, A)) !== !0 && (o += "_".concat(Xt(A.name, 2)))
							}
						} catch (I) {
							S = !0, k = I
						} finally {
							try {
								!E && w.return != null && w.return()
							} finally {
								if (S) throw k
							}
						}
						o += ">"
					} else s.nodeType === Node.TEXT_NODE && (o += "-t")
			} return o.slice(0, r)
	}

	function xn(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : F(e)));
		for (var t = 5381, r = 0; r < e.length; r++) {
			var i = e.charCodeAt(r);
			t = t * 33 ^ i
		}
		return t >>> 0
	}

	function En() {
		for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, t = e; t && t.top !== t && !t.location.href.startsWith("http");) t = t.top;
		return t == null ? void 0 : t.location.href
	}
	var ia = 900,
		oa = 45,
		ua = 50;

	function la(e, t, r) {
		var i = e.widgetMap.get(t);
		(i == null ? void 0 : i.retryTimeout) !== void 0 && (window.clearTimeout(i.retryTimeout), i.retryTimeout = void 0), x("Cannot find Widget ".concat(r, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(t)
	}

	function da(e) {
		e.watchCatSeq++;
		var t = [],
			r = !0,
			i = !1,
			o = void 0;
		try {
			for (var l = e.widgetMap[Symbol.iterator](), d; !(r = (d = l.next()).done); r = !0) {
				var s = Ge(d.value, 2),
					p = s[0],
					f = s[1],
					v = Q(p),
					E = f.shadow;
				if (E == null || !f.wrapper.isConnected) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: p
					}));
					continue
				}
				var S = E.querySelector("#".concat(v));
				if (S === null) {
					f.watchcat.missingWidgetWarning || (f.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: v,
						widgetId: p
					}));
					continue
				}
				if (f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq), !(f.isComplete || f.isFailed || f.feedbackOpen)) {
					var k = f.watchcat.seq - 1 - oa,
						w = f.watchcat.lastAckedSeq < k,
						W = f.watchcat.seq - 1 - ua,
						A = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < W;
					if ((f.isExecuting || !f.isInitialized || f.isInitialized && !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && w || A) {
						var M, I;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var he = function(n, c) {
							console.log("Turnstile Widget seem to have ".concat(n, ": "), c)
						};
						he(w ? "hung" : "crashed", p);
						var Z = w ? st : ft;
						if ((I = e.internalMsgHandler) === null || I === void 0 || I.call(e, {
								code: Z,
								event: "fail",
								rcV: (M = f.nextRcV) !== null && M !== void 0 ? M : me,
								source: j,
								widgetId: p
							}), 0) var B;
						continue
					}
					de(S, {
						event: "meow",
						seq: e.watchCatSeq,
						source: j,
						widgetId: p
					}, f.iframeOrigin)
				}
			}
		} catch (u) {
			i = !0, o = u
		} finally {
			try {
				!r && l.return != null && l.return()
			} finally {
				if (i) throw o
			}
		}
		var R = !0,
			V = !1,
			L = void 0;
		try {
			for (var H = t[Symbol.iterator](), G; !(R = (G = H.next()).done); R = !0) {
				var ee = G.value,
					_ = ee.widgetElId,
					a = ee.widgetId;
				la(e, a, _)
			}
		} catch (u) {
			V = !0, L = u
		} finally {
			try {
				!R && H.return != null && H.return()
			} finally {
				if (V) throw L
			}
		}
		t.length > 0 && e.widgetMap.size === 0 && nt(e)
	}

	function Yt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			da(e)
		}, ia))
	}

	function nt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var Qt = Symbol();

	function wn(e) {
		return (typeof e == "undefined" ? "undefined" : F(e)) === "object" && e !== null ? e : void 0
	}

	function Kt(e) {
		return (typeof e == "undefined" ? "undefined" : F(e)) === "object" && e !== null && "widgetMap" in e && P(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
	}

	function ca(e, t) {
		Object.defineProperty(e, Qt, {
			configurable: !0,
			enumerable: !1,
			value: t
		})
	}

	function sa(e) {
		var t, r = (t = Object.getOwnPropertyDescriptor(e, Qt)) === null || t === void 0 ? void 0 : t.value;
		if (Kt(r)) return r;
		var i = bt(e, Kt);
		if (i) return i
	}

	function In(e) {
		Reflect.deleteProperty(e, Qt);
		var t = !0,
			r = !1,
			i = void 0;
		try {
			for (var o = Object.getOwnPropertySymbols(e)[Symbol.iterator](), l; !(t = (l = o.next()).done); t = !0) {
				var d = l.value,
					s, p = (s = Object.getOwnPropertyDescriptor(e, d)) === null || s === void 0 ? void 0 : s.value;
				Kt(p) && Reflect.deleteProperty(e, d)
			}
		} catch (f) {
			r = !0, i = f
		} finally {
			try {
				!t && o.return != null && o.return()
			} finally {
				if (r) throw i
			}
		}
	}

	function fa(e) {
		return !Number.isFinite(e.apiJsReloadBackoffMs) || e.apiJsReloadBackoffMs <= 0 ? Pe : Math.min(e.apiJsReloadBackoffMs, Xe)
	}

	function pa(e) {
		return !Number.isFinite(e.apiJsReloadNextAllowedTsMs) || e.apiJsReloadNextAllowedTsMs <= 0 ? 0 : e.apiJsReloadNextAllowedTsMs
	}

	function Rn(e, t) {
		var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : et;
		t.upgradeAttempts++;
		var i = r();
		if (!(i != null && i.parentNode)) return !1;
		var o = wn(e);
		if (!o) return !1;
		var l = i == null ? void 0 : i.nonce;
		ca(o, t);
		var d = new URL(i.src),
			s = document.createElement("script");
		d.searchParams.set("_upgrade", "true"), d.searchParams.set("_cb", String(Date.now())), s.async = !0, l && (s.nonce = l), s.setAttribute("crossorigin", "anonymous"), s.src = d.toString();
		try {
			return i.parentNode.replaceChild(s, i), !0
		} catch (p) {
			if (!P(p, DOMException)) throw p;
			return In(o), !1
		}
	}

	function Tn(e, t, r) {
		var i, o, l = wn(e);
		if (!l) return !1;
		var d = sa(l);
		if (!d) return !1;
		var s = d.apiJsMismatchReloadPending;
		return t.isReady = d.isReady, t.isRecaptchaCompatibilityMode = d.isRecaptchaCompatibilityMode, t.lastWidgetIdx = d.lastWidgetIdx, t.scriptWasLoadedAsync = d.scriptWasLoadedAsync, t.apiJsReloadBackoffMs = s ? Pe : fa(d), t.apiJsReloadNextAllowedTsMs = pa(d), t.apiJsMismatchReloadAttempts = (i = d.apiJsMismatchReloadAttempts) !== null && i !== void 0 ? i : 0, t.apiJsMismatchReloadCompletedCount = ((o = d.apiJsMismatchReloadCompletedCount) !== null && o !== void 0 ? o : 0) + (s ? 1 : 0), t.apiJsMismatchReloadPending = !1, t.upgradeAttempts = d.upgradeAttempts, t.upgradeCompletedCount = d.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = $(), t.watchCatInterval = null, t.watchCatSeq = d.watchCatSeq, t.widgetMap = d.widgetMap, nt(d, !0), d.msgHandler && window.removeEventListener("message", d.msgHandler), In(l), r(), !0
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
	var va = /^[0-9A-Za-z_-]{3,100}$/;

	function An(e) {
		return va.test(e)
	}
	var ma = /^[a-z0-9_-]{0,32}$/i;

	function rr(e) {
		return e === void 0 ? !0 : typeof e == "string" && ma.test(e)
	}
	var ga = /^[a-z0-9_\-=]{0,255}$/i;

	function nr(e) {
		return e === void 0 ? !0 : typeof e == "string" && ga.test(e)
	}

	function ar(e) {
		return q([Y.Normal, Y.Compact, Y.Invisible, Y.Flexible], e)
	}

	function ir(e) {
		return q(["auto", "manual", "never"], e)
	}

	function or(e) {
		return q(["auto", "manual", "never"], e)
	}
	var ya = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function ur(e) {
		return e === "auto" || ya.test(e)
	}

	function lr(e) {
		return q(["always", "execute", "interaction-only"], e)
	}

	function Sn(e) {
		return q(["true", "false"], e)
	}

	function dr(e) {
		return q(["render", "execute"], e)
	}

	function On(e, t) {
		if (e.isResetting = !1, t) {
			t(String(kr));
			return
		}
		h("Could not load challenge from challenges.cloudflare.com.", 161)
	}
	var Fn = Symbol(),
		ha = "Turnstile has already been rendered in this container. The render attempt was rejected.",
		_a = "Turnstile skipped implicit render because a widget already exists in this container.",
		cr = void 0,
		ba = function(e) {
			return e.styleSheets.length
		},
		Oe = window;

	function kn(e) {
		return (typeof e == "undefined" ? "undefined" : F(e)) === "object" && e !== null && "clearPendingApiJsReloadRequest" in e && typeof e.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in e && typeof e.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
	}

	function Cn(e) {
		var t;
		if (!((typeof e == "undefined" ? "undefined" : F(e)) !== "object" || e === null)) {
			var r = (t = Object.getOwnPropertyDescriptor(e, Fn)) === null || t === void 0 ? void 0 : t.value;
			if (kn(r)) return r;
			var i = bt(e, kn);
			if (i) return i
		}
	}
	var m = {
			apiJsMismatchReloadAttempts: 0,
			apiJsMismatchReloadCompletedCount: 0,
			apiJsMismatchReloadPending: !1,
			apiJsReloadBackoffMs: Pe,
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
		ot, kt, Mt;

	function xa(e) {
		var t = !0,
			r = !1,
			i = void 0;
		try {
			for (var o = m.widgetMap[Symbol.iterator](), l; !(t = (l = o.next()).done); t = !0) {
				var d = Ge(l.value, 2),
					s = d[0],
					p = d[1];
				if (p.wrapper.parentElement === e || p.wrapper !== e && p.wrapper.contains(e) || p.shadow.contains(e)) return s
			}
		} catch (f) {
			r = !0, i = f
		} finally {
			try {
				!t && o.return != null && o.return()
			} finally {
				if (r) throw i
			}
		}
		return null
	}

	function Et(e) {
		if (typeof e == "string") {
			var t = Ze(e);
			return t !== null && m.widgetMap.has(t) ? t : m.widgetMap.has(e) ? e : null
		}
		return xa(e)
	}

	function Ea(e) {
		return e === "implicit" ? _a : ha
	}

	function Mn(e, t) {
		return e === "explicit" && (t == null ? void 0 : t.renderSource) === "implicit"
	}

	function pr() {
		ot !== void 0 && (window.clearTimeout(ot), ot = void 0)
	}

	function Dn() {
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var i = m.widgetMap.values()[Symbol.iterator](), o; !(e = (o = i.next()).done); e = !0) {
				var l = o.value;
				if (l.chlPageData !== void 0 && l.chlPageData !== "") return !0
			}
		} catch (d) {
			t = !0, r = d
		} finally {
			try {
				!e && i.return != null && i.return()
			} finally {
				if (t) throw r
			}
		}
		return !1
	}

	function it(e) {
		var t = m.widgetMap.get(e),
			r = Q(e);
		if (t !== void 0) {
			var i = ke(t, r);
			i !== null && de(i, {
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
			r = t === void 0 ? !1 : t;
		Mt = void 0, r || (m.apiJsMismatchReloadPending = !1), kt !== void 0 && (window.clearTimeout(kt), kt = void 0)
	}

	function Un() {
		var e = Mt;
		vr(), e !== void 0 && it(e)
	}

	function wa() {
		return $() < m.apiJsReloadNextAllowedTsMs
	}

	function Ia() {
		var e = m.apiJsReloadBackoffMs,
			t = Number.isFinite(e) && e > 0 ? Math.min(e, Xe) : Pe,
			r = Math.round(t * (.8 + Math.random() * .4));
		m.apiJsReloadNextAllowedTsMs = $() + r, m.apiJsReloadBackoffMs = Math.min(t * 2, Xe)
	}

	function Ra(e) {
		vr({
			preserveMismatchReloadPending: !0
		}), m.apiJsMismatchReloadPending = !0, Mt = e, kt = window.setTimeout(function() {
			Un()
		}, Dr)
	}

	function mr() {
		pr(), !Dn() && (ot = window.setTimeout(function() {
			ot = void 0, Hn()
		}, Wr))
	}

	function sr(e, t) {
		Bn(e, t, "")
	}
	var gr = [];

	function Nn() {
		m.isReady = !0;
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var i = gr[Symbol.iterator](), o; !(e = (o = i.next()).done); e = !0) {
				var l = o.value;
				l()
			}
		} catch (d) {
			t = !0, r = d
		} finally {
			try {
				!e && i.return != null && i.return()
			} finally {
				if (t) throw r
			}
		}
	}

	function Ln(e, t) {
		e.onerror = function() {
			On(t, t.cbError)
		}
	}

	function Wn(e, t) {
		var r, i = (r = e.params["response-field"]) !== null && r !== void 0 ? r : !0,
			o = m.isRecaptchaCompatibilityMode,
			l = "".concat(t, "_response"),
			d = "".concat(t, "_g_response"),
			s = (!i || P(document.getElementById(l), HTMLInputElement)) && (!o || P(document.getElementById(d), HTMLInputElement));
		if (!(e.responseElementsBuilt && s)) {
			if (i && !P(document.getElementById(l), HTMLInputElement)) {
				var p, f = document.createElement("input");
				f.type = "hidden", f.name = (p = e.params["response-field-name"]) !== null && p !== void 0 ? p : Pr, f.id = l, e.wrapper.appendChild(f)
			}
			if (o && !P(document.getElementById(d), HTMLInputElement)) {
				var v = document.createElement("input");
				v.type = "hidden", v.name = Fr, v.id = d, e.wrapper.appendChild(v)
			}
			e.responseElementsBuilt = !0
		}
	}

	function Bn(e, t, r) {
		Wn(e, t);
		var i = document.getElementById("".concat(t, "_response"));
		if (i !== null && P(i, HTMLInputElement) && (i.value = r), m.isRecaptchaCompatibilityMode) {
			var o = document.getElementById("".concat(t, "_g_response"));
			o !== null && P(o, HTMLInputElement) && (o.value = r)
		}
	}

	function Be(e, t) {
		var r;
		return !!(!((r = t.kills) === null || r === void 0) && r.includes(e))
	}

	function wt(e, t) {
		var r = t.params,
			i = r.size,
			o = i === void 0 ? "normal" : i,
			l = t.mode;
		switch (l) {
			case ge.NonInteractive:
			case ge.Managed:
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
			case ge.Invisible:
				Be("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				h('Invalid value for parameter "mode", expected "'.concat(ge.NonInteractive, '", "').concat(ge.Managed, '" or "').concat(ge.Invisible, '", got "').concat(l, '"'), 2818)
		}
	}

	function Pn(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function Ta(e, t) {
		var r = t.get("turnstile_iframe_alt");
		r !== void 0 && r !== "" && (e.title = r)
	}

	function ke(e, t) {
		return e.shadow.querySelector("#".concat(t))
	}

	function Aa(e, t) {
		var r, i;
		return (r = (i = e.wrapper.parentNode) === null || i === void 0 ? void 0 : i.querySelector("#".concat(t, "-fr"))) !== null && r !== void 0 ? r : null
	}

	function Sa(e) {
		var t, r;
		return ((r = e.feedbackPopup) === null || r === void 0 ? void 0 : r.closed) === !0 ? (e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) : (t = e.feedbackPopup) !== null && t !== void 0 ? t : null
	}

	function Ct(e, t) {
		var r, i, o = (r = (i = Aa(e, t)) === null || i === void 0 ? void 0 : i.contentWindow) !== null && r !== void 0 ? r : null;
		if (o !== null) return {
			targetOrigin: e.feedbackIframeOrigin,
			targetWindow: o
		};
		var l = Sa(e);
		return {
			targetOrigin: l !== null ? e.feedbackPopupOrigin : void 0,
			targetWindow: l
		}
	}

	function Oa(e) {
		if ((typeof e == "undefined" ? "undefined" : F(e)) !== "object" || e === null) return !1;
		var t = e;
		return t.source === j && typeof t.event == "string" && typeof t.widgetId == "string"
	}

	function ka(e) {
		return e.isTrusted && Oa(e.data)
	}

	function Ca(e) {
		return ln(e.origin, !1)
	}

	function Ma(e, t, r) {
		var i, o, l = (i = (o = ke(t, r)) === null || o === void 0 ? void 0 : o.contentWindow) !== null && i !== void 0 ? i : null,
			d = Ct(t, r).targetWindow,
			s = function(f) {
				return f !== null && e.source === f
			};
		switch (e.data.event) {
			case "requestFeedbackData":
			case "closeFeedbackReportIframe":
				return s(d);
			case "refreshRequest":
				return s(l) || e.data.reason === "feedback_refresh" && s(d);
			default:
				return s(l)
		}
	}

	function fr() {
		return En(window)
	}

	function It(e, t, r) {
		return e === null ? t : Sn(e) ? e === "true" : (x(r(e)), t)
	}

	function Na() {
		try {
			var e = et();
			if (!e) return;
			var t = e.src,
				r = !0,
				i = !1,
				o = void 0;
			try {
				for (var l = performance.getEntriesByType("resource")[Symbol.iterator](), d; !(r = (d = l.next()).done); r = !0) {
					var s = d.value;
					if (P(s, PerformanceResourceTiming) && s.name.includes(t)) return s
				}
			} catch (p) {
				i = !0, o = p
			} finally {
				try {
					!r && l.return != null && l.return()
				} finally {
					if (i) throw o
				}
			}
		} catch (p) {}
	}
	var Vn = (function() {
			var e = function(a, u, n, c, b, g) {
					return Er(function() {
						var O, C, T, N, D, ae, ie, se, te, re, Ce;
						return Tr(this, function(J) {
							switch (J.label) {
								case 0:
									if (C = function(pe, oe) {
											var z = m.widgetMap.get(u);
											z !== a || z.isComplete || z.isResetting || z.response !== c || (!pe && oe !== void 0 && oe !== "" && x(oe), o(z, n, pe))
										}, T = a.params.sitekey, N = fr(), N === void 0 || N === "") return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), o(a, n, !1), [2];
									D = "h/".concat("g", "/"), ae = new URL(N), ie = "https", se = "", te = "".concat(ie, "://").concat(ae.host, "/cdn-cgi/challenge-platform/").concat(D, "rc/").concat(g).concat(se), J.label = 1;
								case 1:
									return J.trys.push([1, 3, , 4]), [4, fetch(te, {
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
									return re = J.sent(), re.status === 200 ? C(!0) : C(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
								case 3:
									return Ce = J.sent(), C(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
								case 4:
									return [2]
							}
						})
					})()
				},
				t = function(a, u, n) {
					if (a.params.retry === gt.Auto || n) {
						var c;
						if (a.feedbackOpen) {
							a.pendingRetry = {
								crashed: n
							};
							return
						}
						var b = n ? 0 : 1e3 * 2 + ((c = a.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
						a.retryTimeout = window.setTimeout(function() {
							var g = n ? K.CrashedRetry : K.FailureRetry;
							k(g, u)
						}, b)
					}
				},
				r = function(a, u, n) {
					return a.params.execution === Ke.Render ? !0 : (u === K.CrashedRetry || u === K.FailureRetry || u === K.CheckDelays || u === K.UpgradeReload) && a.params.execution === Ke.Execute && n
				},
				i = function(a, u, n) {
					if (a.feedbackOpen && (a.feedbackOpen = !1, a.feedbackPopupCloseCheck != null && (window.clearInterval(a.feedbackPopupCloseCheck), a.feedbackPopupCloseCheck = void 0), nn(), window.postMessage({
							event: "feedbackClose",
							source: j,
							widgetId: n
						}, "*"), a.pendingRetry)) {
						var c = a.pendingRetry.crashed;
						a.pendingRetry = void 0, t(a, u, c)
					}
				},
				o = function(a, u, n) {
					var c;
					a.response === void 0 && h("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, Bn(a, u, a.response), (c = a.cbSuccess) === null || c === void 0 || c.call(a, a.response, n)
				},
				l = function(a) {
					if (!a) return [];
					for (var u = a.attributes, n = u.length, c = new Array(n), b = 0; b < n; b++) c[b] = u[b].name;
					return c
				},
				d = function() {
					for (var a = {}, u = [], n = document.getElementsByTagName("*"), c = 0; c < n.length && u.length < 50; c++) {
						var b = n[c].tagName.toLowerCase();
						b.indexOf("-") !== -1 && !a[b] && (a[b] = !0, u.push(b))
					}
					return u
				},
				s = function(a, u, n) {
					if (a.rcV = u, 0) var c
				},
				p = function() {
					var a = "abcdefghijklmnopqrstuvwxyz0123456789",
						u = a.length,
						n = "";
					do {
						n = "";
						for (var c = 0; c < 5; c++) n += a.charAt(Math.floor(Math.random() * u))
					} while (m.widgetMap.has(n));
					return n
				},
				f = function(a, u, n) {
					for (; a.msgQueue.length > 0;) {
						var c = a.msgQueue.pop();
						de(n, {
							event: c,
							source: j,
							widgetId: u
						}, a.iframeOrigin)
					}
				},
				v = function(a, u) {
					if (u) {
						var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
							c = Object.prototype.hasOwnProperty,
							b = [],
							g = !0,
							O = !1,
							C = void 0;
						try {
							for (var T = n[Symbol.iterator](), N; !(g = (N = T.next()).done); g = !0) {
								var D = N.value;
								c.call(u, D) && u[D] !== void 0 && u[D] !== a.params[D] && b.push(D)
							}
						} catch (ae) {
							O = !0, C = ae
						} finally {
							try {
								!g && T.return != null && T.return()
							} finally {
								if (O) throw C
							}
						}
						b.length > 0 && h("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(b.join(",")), 3618), u.action !== void 0 && u.action !== "" && (rr(u.action) || h('Invalid input for optional parameter "action", got "'.concat(u.action, '"'), 3604), a.action = u.action), u.cData !== void 0 && u.cData !== "" && (nr(u.cData) || h('Invalid input for optional parameter "cData", got "'.concat(u.cData, '"'), 3605), a.cData = u.cData), u["after-interactive-callback"] !== void 0 && (a.cbAfterInteractive = u["after-interactive-callback"]), u["before-interactive-callback"] !== void 0 && (a.cbBeforeInteractive = u["before-interactive-callback"]), u.callback !== void 0 && (a.cbSuccess = u.callback), u["expired-callback"] !== void 0 && (a.cbExpired = u["expired-callback"]), u["timeout-callback"] !== void 0 && (a.cbTimeout = u["timeout-callback"]), u["error-callback"] !== void 0 && (a.cbError = u["error-callback"]), u["unsupported-callback"] !== void 0 && (a.cbUnsupported = u["unsupported-callback"]), u.chlPageData !== void 0 && u.chlPageData !== "" && (a.chlPageData = u.chlPageData)
					}
				},
				E = function(a, u, n) {
					a === "explicit" && u !== void 0 && v(u, n), x(Ea(a))
				},
				S = function(a) {
					k(K.Api, a)
				},
				k = function(a, u) {
					var n = L(u);
					n === null && h("Nothing to reset found for provided container", 3329);
					var c = m.widgetMap.get(n);
					if (c !== void 0) {
						var b, g, O = c.isExecuted;
						c.isResetting = !0, c.response = void 0, c.mode = void 0, c.msgQueue = [], c.isComplete = !1, c.isExecuted = !1, c.isExecuting = !1, c.isExpired = !1, c.isFailed = !1, c.isInitialized = !1, c.isStale = !1, c.isOverrunning = !1, c.cfChlOut = void 0, c.cfChlOutS = void 0, c.errorCode = void 0, c.frMd = void 0, c.autoFeedbackSent = !1, c.watchcat.overrunBeginSeq = 0, c.watchcat.lastAckedSeq = 0, c.watchcat.seq = 0, r(c, a, O) && (c.msgQueue.push(yt.Execute), c.isExecuted = !0, c.isExecuting = !0);
						var C = Q(n),
							T = c.shadow.querySelector("#".concat(C));
						T === null && h("Widget ".concat(n, " to reset was not found."), 3330), (c.params.appearance === ye.InteractionOnly || c.params.appearance === ye.Execute) && Pn(T), c.params.sitekey === null && h("Unexpected Error: Sitekey is null", 3347);
						var N = T.cloneNode(),
							D = Ht(n, c.params.sitekey, c.params, (b = c.rcV) !== null && b !== void 0 ? b : me, !1, "g", a, m.scriptUrlParsed, Wt(c));
						N.src = D, Ln(N, c), c.iframeOrigin = De(D), (g = T.parentNode) === null || g === void 0 || g.replaceChild(N, T), sr(c, C), c.retryTimeout !== void 0 && window.clearTimeout(c.retryTimeout)
					} else h("Widget ".concat(n, " to reset was not found."), 3331)
				},
				w = function(a, u) {
					var n = Q(a),
						c = ["input#".concat(n, "_response"), "input#".concat(n, "_g_response")];
					document.querySelectorAll(c.join(", ")).forEach(function(b) {
						return b.remove()
					}), u.shadow.querySelectorAll(c.join(", ")).forEach(function(b) {
						return b.remove()
					}), rt(n), Ue(u), u.wrapper.remove(), u.retryTimeout !== void 0 && window.clearTimeout(u.retryTimeout), m.widgetMap.delete(a), nt(m)
				},
				W = function(a) {
					var u = L(a),
						n = u !== null ? m.widgetMap.get(u) : void 0;
					if (u === null || n === void 0) {
						x("Nothing to remove found for the provided container.");
						return
					}
					w(u, n)
				},
				A = function() {
					var a = Array.from(m.widgetMap.keys()),
						u = !0,
						n = !1,
						c = void 0;
					try {
						for (var b = a[Symbol.iterator](), g; !(u = (g = b.next()).done); u = !0) {
							var O = g.value,
								C = m.widgetMap.get(O),
								T = Q(O);
							C !== void 0 && (rt(T), Ue(C), k(K.UpgradeReload, T))
						}
					} catch (N) {
						n = !0, c = N
					} finally {
						try {
							!u && b.return != null && b.return()
						} finally {
							if (n) throw c
						}
					}
				},
				M = function(a, u, n) {
					var c, b, g, O, C, T, N, D, ae, ie, se, te, re, Ce = $(),
						J, fe;
					if (typeof a == "string") {
						var pe = Et(a);
						if (pe !== null) {
							var oe, z = m.widgetMap.get(pe),
								Me = (oe = z == null ? void 0 : z.wrapper.parentElement) !== null && oe !== void 0 ? oe : null;
							if (Me !== null && Mn(n, z)) J = Me, fe = {
								widget: z,
								widgetId: pe
							};
							else return E(n, z, u), Q(pe)
						} else {
							var Ee;
							try {
								Ee = document.querySelector(a)
							} catch (Fa) {
								h('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
							}
							Ee === null && h('Unable to find a container for "'.concat(a, '"'), 3585), J = Ee
						}
					} else P(a, HTMLElement) ? J = a : h('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					if (fe === void 0) {
						var we = Et(J);
						if (we !== null) {
							var Ie = m.widgetMap.get(we);
							if (Ie !== void 0 && Mn(n, Ie) && Ie.wrapper.parentElement === J) fe = {
								widget: Ie,
								widgetId: we
							};
							else return E(n, Ie, u), Q(we)
						}
					}
					var Ve = fr();
					if (Ve === void 0 || Ve === "") return h("Turnstile cannot determine its page location", 3607);
					var ut = Pa(J);
					if (ut !== void 0) {
						var y = Object.assign(ut, u),
							He = y.action,
							Ne = y.cData,
							Je = y.chlPageData,
							ue = y.sitekey;
						y.theme = (c = y.theme) !== null && c !== void 0 ? c : vt.Auto, y.retry = (b = y.retry) !== null && b !== void 0 ? b : gt.Auto, y.execution = (g = y.execution) !== null && g !== void 0 ? g : Ke.Render, y.appearance = (O = y.appearance) !== null && O !== void 0 ? O : ye.Always, y["retry-interval"] = Number((C = y["retry-interval"]) !== null && C !== void 0 ? C : Ur), y["expiry-interval"] = Number((T = y["expiry-interval"]) !== null && T !== void 0 ? T : (Ar - Sr) * 1e3), y.size = (N = y.size) !== null && N !== void 0 ? N : Y.Normal;
						var lt = y.callback,
							qe = y["expired-callback"],
							ze = y["timeout-callback"],
							Nt = y["after-interactive-callback"],
							Lt = y["before-interactive-callback"],
							Pt = y["error-callback"],
							le = y["unsupported-callback"];
						typeof ue != "string" && h('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof ue == "undefined" ? "undefined" : F(ue), '"'), 3588), An(ue) || h('Invalid input for parameter "sitekey", got "'.concat(ue, '"'), 3589), ar(y.size) || h('Invalid type for parameter "size", expected normal|compact, got "'.concat(y.size, '" ').concat(F(y.size)), 3590), $t(y.theme) || h('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(y.theme, '" ').concat(F(y.theme)), 3591), Zt(y.retry) || h('Invalid type for parameter "retry", expected never|auto, got "'.concat(y.retry, '" ').concat(F(y.retry)), 3592), (y.language === void 0 || y.language === "") && (y.language = "auto"), ur(y.language) || (x('Invalid language value: "'.concat(y.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), y.language = "auto"), lr(y.appearance) || h('Unknown appearance value: "'.concat(y.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), dr(y.execution) || h('Unknown execution value: "'.concat(y.execution, ", expected either: 'render' or 'execute'."), 3601), er(y["retry-interval"]) || h('Invalid retry-interval value: "'.concat(y["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), tr(y["expiry-interval"]) || h('Invalid expiry-interval value: "'.concat(y["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						var ve = (D = y["refresh-expired"]) !== null && D !== void 0 ? D : Fe.Auto;
						ir(ve) ? y["refresh-expired"] = ve : h('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(ve, '" ').concat(typeof ve == "undefined" ? "undefined" : F(ve)), 3603);
						var Re = (ae = y["refresh-timeout"]) !== null && ae !== void 0 ? ae : Ye.Auto;
						or(Re) ? y["refresh-timeout"] = Re : h('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(Re, '" ').concat(typeof Re == "undefined" ? "undefined" : F(Re)), 3603), rr(He) || h('Invalid input for optional parameter "action", got "'.concat(He, '"'), 3604), nr(Ne) || h('Invalid input for optional parameter "cData", got "'.concat(Ne, '"'), 3605);
						var X = document.createElement("iframe"),
							_e = document.createElement("div"),
							yr = _e.attachShadow({
								mode: "closed"
							}),
							dt = p(),
							Ft = Q(dt),
							hr = [],
							Dt = y.execution === Ke.Render;
						Dt && hr.push(yt.Execute), m.lastWidgetIdx++;
						var Jn = {};
						m.widgetMap.set(dt, Ut(Te({
							action: He,
							assetCtxCallback: y._acCb,
							autoFeedbackSent: !1,
							cbAfterInteractive: Nt,
							cbBeforeInteractive: Lt,
							cbError: Pt,
							cbExpired: qe,
							cbSuccess: lt,
							cbTimeout: ze,
							cbUnsupported: le,
							cData: Ne,
							chlPageData: Je,
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
							rcV: me,
							renderSource: n,
							responseElementsBuilt: !1,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, Jn), {
							isOverrunning: !1,
							shadow: yr,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: Ce,
							wrapper: _e
						})), Yt(m);
						var be = m.widgetMap.get(dt);
						be === void 0 && h("Turnstile Initialization Error ", 3606), be.chlPageData !== void 0 && be.chlPageData !== "" && pr(), X.style.display = "none", X.style.border = "none", X.style.overflow = "hidden";
						var _r = Ht(dt, ue, y, me, !1, "g", K.New, m.scriptUrlParsed, Wt(be));
						be.iframeOrigin = De(_r), X.setAttribute("src", _r), Ln(X, be);
						var br = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
						return q((ie = (re = document.featurePolicy) === null || re === void 0 || (te = re.features) === null || te === void 0 ? void 0 : te.call(re)) !== null && ie !== void 0 ? ie : [], Bt) && br.push(Bt), X.setAttribute("allow", br.join("; ")), X.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), X.id = Ft, X.tabIndex = (se = y.tabindex) !== null && se !== void 0 ? se : 0, X.title = "Widget containing a Cloudflare security challenge", yr.appendChild(X), Wn(be, Ft), fe && w(fe.widgetId, fe.widget), J.appendChild(_e), be.widgetRenderEndTimeTsMs = $(), Ft
					}
				},
				I = function(a, u) {
					return M(a, u, "explicit")
				},
				he = function() {
					var a = [Mr, Nr];
					m.isRecaptchaCompatibilityMode && a.push(Lr), document.querySelectorAll(a.join(", ")).forEach(function(u) {
						M(u, void 0, "implicit")
					})
				},
				Z = function() {
					var a, u = -1,
						n = !0,
						c = !1,
						b = void 0;
					try {
						for (var g = m.widgetMap[Symbol.iterator](), O; !(n = (O = g.next()).done); n = !0) {
							var C = Ge(O.value, 2),
								T = C[0],
								N = C[1];
							u < N.idx && (a = T, u = N.idx)
						}
					} catch (D) {
						c = !0, b = D
					} finally {
						try {
							!n && g.return != null && g.return()
						} finally {
							if (c) throw b
						}
					}
					return u === -1 && h("Could not find widget", 43778), a
				},
				B = Na(),
				R = function(a) {
					if (a.source === j && !(a.widgetId === void 0 || a.widgetId === "" || !m.widgetMap.has(a.widgetId))) {
						var u = Q(a.widgetId),
							n = m.widgetMap.get(a.widgetId);
						if (n !== void 0) switch (a.event) {
							case "init": {
								n.widgetInitStartTimeTsMs = $(), n.kills = a.kills;
								var c = n.shadow.getElementById(u);
								c === null && h("Cannot initialize Widget, Element not found (#".concat(u, ")."), 3074), n.mode = a.mode, n.nextRcV = a.nextRcV, n.mode === ge.Invisible && n.params["refresh-expired"] === Fe.Manual && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(Fe.Auto, "' or '").concat(Fe.Never, ".'")), n.mode !== ge.Managed && n.params["refresh-timeout"] !== Ye.Auto && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), n.params.appearance === ye.Always || n.isExecuting && n.params.appearance === ye.Execute ? wt(c, n) : Pn(c), c.style.display = "";
								var b = ke(n, u);
								b || h("Received state for an unknown widget: ".concat(a.widgetId), 3078), de(b, {
									event: "init",
									source: j,
									widgetId: a.widgetId
								}, n.iframeOrigin);
								break
							}
							case "translationInit": {
								var g = n.shadow.getElementById(u);
								g === null && h("Cannot initialize Widget, Element not found (#".concat(u, ")."), 3074);
								var O = new Map;
								n.displayLanguage = a.displayLanguage, n.displayRtl = a.displayRtl, Object.keys(a.translationData).forEach(function(_e) {
									O.set(_e, a.translationData[_e])
								}), Ta(g, O);
								break
							}
							case "languageUnsupported": {
								x("Language ".concat(n.params.language, " is not supported, falling back to: ").concat(a.fallback, ".")), n.displayLanguage = a.fallback;
								break
							}
							case "reject": {
								var C = n.shadow.getElementById(u);
								if (n.isExecuting = !1, C || h("Cannot initialize Widget, Element not found (#".concat(u, ")."), 3075), a.reason === "unsupported_browser") {
									var T;
									(T = n.cbUnsupported) === null || T === void 0 || T.call(n)
								}
								break
							}
							case "food": {
								a.seq > n.watchcat.lastAckedSeq && (n.watchcat.lastAckedSeq = a.seq);
								break
							}
							case "overrunBegin": {
								n.isOverrunning = !0, n.watchcat.overrunBeginSeq = n.watchcat.lastAckedSeq;
								break
							}
							case "overrunEnd": {
								n.isOverrunning = !1;
								break
							}
							case "complete": {
								if (s(n, me, a.widgetId), n.response = a.token, a.aC !== void 0 && a.aC !== "") {
									var N;
									(N = n.assetCtxCallback) === null || N === void 0 || N.call(n, a.aC)
								}
								if (a.scs !== void 0 && a.scs !== "" && !Be("scs", n) && (n.scs = a.scs, n.params["session-continuity-persist"] === !0 && !Be("scs_persist", n))) {
									var D = n.params.sitekey;
									if (D !== null && D !== "") {
										var ae = "".concat(Vt).concat(D);
										try {
											localStorage.setItem(ae, a.scs)
										} catch (_e) {}
									}
								}
								a.sToken !== void 0 && a.sToken !== "" ? e(n, a.widgetId, u, a.token, a.sToken, a.chlId) : o(n, u, !1);
								break
							}
							case "fail": {
								if (a.rcV !== void 0 && a.rcV !== "" && s(n, a.rcV, a.widgetId), a.cfChlOut !== void 0 && a.cfChlOut !== "" && (n.cfChlOut = a.cfChlOut), a.cfChlOutS !== void 0 && a.cfChlOutS !== "" && (n.cfChlOutS = a.cfChlOutS), a.code !== void 0 && a.code !== 0 && (n.errorCode = a.code), a.aC !== void 0 && a.aC !== "") {
									var ie;
									(ie = n.assetCtxCallback) === null || ie === void 0 || ie.call(n, a.aC)
								}
								n.isExecuting = !1, n.isFailed = !0, n.isInitialized = !0, a.frMd !== void 0 && a.frMd !== "" && (n.frMd = a.frMd), sr(n, u);
								var se = n.cbError,
									te = a.code === st || a.code === ft,
									re = a.code !== Or;
								if (te) {
									var Ce = ke(n, u);
									Ce && de(Ce, {
										event: "forceFail",
										source: j,
										widgetId: a.widgetId
									}, n.iframeOrigin)
								}
								if (se !== void 0) {
									var J;
									se(String((J = a.code) !== null && J !== void 0 ? J : Cr)) === !0 ? re && n.params.retry === gt.Auto && !n.isResetting && t(n, u, te) : (a.code !== void 0 && a.code !== 0 && x("Error: ".concat(a.code, ".")), re && t(n, u, te))
								} else a.code !== void 0 && a.code !== 0 ? (re && t(n, u, te), h("Error: ".concat(a.code), 3076)) : t(n, u, !1);
								break
							}
							case "feedbackInit": {
								var fe = Ct(n, u).targetWindow;
								if (fe) {
									x("A feedback report form is already opened for this widget.");
									return
								}
								if (n.autoFeedbackSent !== !0 && !Be("feedback-report-auto-submit", n)) {
									var pe = tn(n, a.feedbackOrigin, a.rayId, n.frMd, m.scriptUrlParsed);
									pe && (n.autoFeedbackSent = !0)
								}
								n.feedbackOpen = !0, n.retryTimeout != null && (clearTimeout(n.retryTimeout), n.retryTimeout = void 0, n.pendingRetry || (n.pendingRetry = {
									crashed: !1
								})), rn(), window.postMessage({
									event: "feedbackOpen",
									source: j,
									widgetId: a.widgetId
								}, "*"), Gt(u, n, a.feedbackOrigin, m.scriptUrlParsed, function() {
									i(n, u, a.widgetId)
								});
								break
							}
							case "requestFeedbackData": {
								var oe = ke(n, u);
								oe || h("Received state for an unknown widget: #".concat(u, " / ").concat(a.widgetId), 3078), de(oe, {
									event: "requestTurnstileResults",
									source: j,
									widgetId: a.widgetId
								}, n.iframeOrigin);
								break
							}
							case "turnstileResults": {
								var z, Me, Ee, we = Ct(n, u),
									Ie = we.targetOrigin,
									Ve = we.targetWindow;
								if (!Ve) break;
								qt(Ve, {
									cfChlOut: (z = n.cfChlOut) !== null && z !== void 0 ? z : a.cfChlOut,
									cfChlOutS: (Me = n.cfChlOutS) !== null && Me !== void 0 ? Me : a.cfChlOutS,
									errorCode: n.errorCode,
									event: "feedbackData",
									frMd: (Ee = n.frMd) !== null && Ee !== void 0 ? Ee : a.frMd,
									mode: a.mode,
									rayId: a.rayId,
									rcV: a.rcV,
									sitekey: a.sitekey,
									source: j,
									widgetId: a.widgetId
								}, Ie);
								break
							}
							case "closeFeedbackReportIframe": {
								var ut = Ct(n, u).targetWindow;
								ut || h("Received state for an unknown widget: ".concat(a.widgetId), 3078), rt("".concat(u, "-fr")), Ue(n), i(n, u, a.widgetId);
								break
							}
							case "tokenExpired": {
								var y, He = a.token;
								n.isExpired = !0, (y = n.cbExpired) === null || y === void 0 || y.call(n, He), n.params["refresh-expired"] === Fe.Auto && !n.isResetting && k(K.AutoExpire, u);
								break
							}
							case "interactiveTimeout": {
								s(n, me, a.widgetId), sr(n, u);
								var Ne = n.cbTimeout;
								if (Ne ? Ne() : n.params["refresh-timeout"] === Ye.Never && !n.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), n.params["refresh-timeout"] === Ye.Auto && !n.isResetting) {
									var Je = n.cbAfterInteractive;
									Je == null || Je(), k(K.AutoTimeout, u)
								}
								break
							}
							case "refreshRequest": {
								s(n, me, a.widgetId), rt(u), Ue(n), k(K.ManualRefresh, u);
								break
							}
							case "reloadRequest": {
								s(n, a.nextRcV, a.widgetId), k(a.trigger, u);
								break
							}
							case "reloadApiJsRequest": {
								if (Be("reload", n)) {
									it(a.widgetId);
									break
								}
								if (Mt !== void 0) {
									it(a.widgetId);
									break
								}
								if (wa()) {
									it(a.widgetId);
									break
								}
								Hn() ? (m.apiJsMismatchReloadAttempts++, Ia(), Ra(a.widgetId)) : it(a.widgetId);
								break
							}
							case "interactiveBegin": {
								var ue, lt = n.shadow.getElementById(u);
								lt || h("Cannot layout widget, Element not found (#".concat(u, ")."), 3076), (ue = n.cbBeforeInteractive) === null || ue === void 0 || ue.call(n), n.params.appearance === ye.InteractionOnly && wt(lt, n);
								break
							}
							case "interactiveEnd": {
								var qe;
								(qe = n.cbAfterInteractive) === null || qe === void 0 || qe.call(n);
								break
							}
							case "widgetStale": {
								n.isStale = !0;
								break
							}
							case "requestExtraParams": {
								n.widgetParamsStartTimeTsMs = $();
								var ze = ke(n, u);
								ze || h("Received state for an unknown widget: ".concat(a.widgetId), 3078), n.isResetting = !1;
								var Nt = {},
									Lt = $(),
									Pt = {
										"d.cT": d(),
										"ht.atrs": l(document.body.parentNode),
										"pg.ref": document.referrer,
										pi: {
											ffp: gn(n.wrapper),
											ii: window.self !== window.top,
											lH: window.location.href,
											mL: document.getElementsByTagName("meta").length,
											pfp: bn(document, Br, Vr, cr),
											sL: document.scripts.length,
											sR: n.wrapper.shadowRoot === null,
											ssL: ba(document, cr),
											t: "".concat(document.title.length, "|").concat(xn(document.title)),
											tL: _n(document, cr),
											wp: mn(n.wrapper),
											xp: vn(n.wrapper).slice(0, Hr)
										},
										"w.iW": window.innerWidth
									},
									le = n.scs;
								if ((le === void 0 || le === "") && n.params["session-continuity-persist"] === !0 && !Be("scs_persist", n)) {
									var ve = n.params.sitekey;
									if (ve !== null && ve !== "") {
										var Re = "".concat(Vt).concat(ve);
										try {
											var X;
											le = (X = localStorage.getItem(Re)) !== null && X !== void 0 ? X : void 0
										} catch (_e) {}
									}
								}
								le !== void 0 && le !== "" && le.length > Jr && (le = void 0), de(ze, Te({
									action: n.action,
									apiJsMismatchReloadAttempts: m.apiJsMismatchReloadAttempts,
									apiJsMismatchReloadCompletedCount: m.apiJsMismatchReloadCompletedCount,
									apiJsResourceTiming: B ? JSON.parse(JSON.stringify(B)) : void 0,
									appearance: n.params.appearance,
									au: m.scriptUrl,
									cData: n.cData,
									ch: "f95a7f38c08f",
									chlPageData: n.chlPageData,
									event: "extraParams",
									execution: n.params.execution,
									"expiry-interval": n.params["expiry-interval"],
									language: n.params.language,
									rcV: n.rcV,
									"refresh-expired": n.params["refresh-expired"],
									"refresh-timeout": n.params["refresh-timeout"],
									retry: n.params.retry,
									"retry-interval": n.params["retry-interval"],
									scs: le,
									source: j,
									timeExtraParamsMs: $() - n.widgetRenderStartTimeTsMs,
									timeInitMs: n.widgetInitStartTimeTsMs - n.widgetRenderEndTimeTsMs,
									timeLoadInitMs: $() - m.turnstileLoadInitTimeTsMs,
									timeParamsMs: n.widgetParamsStartTimeTsMs - n.widgetInitStartTimeTsMs,
									timeRenderMs: n.widgetRenderEndTimeTsMs - n.widgetRenderStartTimeTsMs,
									timeTiefMs: $() - Lt,
									upgradeAttempts: m.upgradeAttempts,
									upgradeCompletedCount: m.upgradeCompletedCount,
									url: fr(),
									widgetId: a.widgetId,
									wPr: Pt
								}, Nt), n.iframeOrigin), f(n, a.widgetId, ze), n.isInitialized = !0;
								break
							}
							default:
								break
						}
					}
				},
				V = function(a) {
					if (ka(a)) {
						var u = a.data;
						if (!Ca(a)) {
							x("Ignored message from wrong origin: ".concat(a.origin, "."));
							return
						}
						if (!(u.widgetId === void 0 || u.widgetId === "" || !m.widgetMap.has(u.widgetId))) {
							var n = Q(u.widgetId),
								c = m.widgetMap.get(u.widgetId);
							if (c !== void 0) {
								if (!Ma(a, c, n)) {
									x("Ignored message from unexpected source for event: ".concat(u.event, "."));
									return
								}
								R(u)
							}
						}
					}
				};
			m.msgHandler = V, m.internalMsgHandler = R, window.addEventListener("message", V);

			function L(_) {
				var a;
				if (typeof _ == "string") {
					var u = Et(_);
					if (u !== null) return u;
					try {
						var n = document.querySelector(_);
						return n === null ? null : L(n)
					} catch (c) {
						return null
					}
				}
				return P(_, Element) ? Et(_) : _ || m.widgetMap.size === 0 ? null : (a = Z()) !== null && a !== void 0 ? a : null
			}
			var H = {},
				G = {
					showFeedback: function(a) {
						var u = L(a);
						if (u !== null) {
							var n = Q(u),
								c = m.widgetMap.get(u);
							c !== void 0 && Gt(n, c, dn.Custom, m.scriptUrlParsed)
						}
					}
				},
				ee = Ut(Te({}, H), {
					_private: G,
					execute: function(a, u) {
						var n = L(a);
						if (n === null) {
							var c;
							u === void 0 && h("Please provide 2 parameters to execute: container and parameters", 43521);
							var b = I(a, u);
							b == null && h("Failed to render widget", 43522), n = (c = Ze(b)) !== null && c !== void 0 ? c : L(a), n === null && h("Failed to render widget", 43522)
						}
						var g = m.widgetMap.get(n);
						if (g !== void 0) {
							v(g, u);
							var O = Q(n);
							if (g.isExecuting) {
								x("Call to execute() on a widget that is already executing (".concat(O, "), consider using reset() before execute()."));
								return
							}
							if (g.isExecuting = !0, g.response !== void 0 && g.response !== "") {
								var C;
								g.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(O, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (C = g.cbSuccess) === null || C === void 0 || C.call(g, g.response, !1);
								return
							}
							g.isExpired && x("Call to execute on a expired-widget (".concat(O, "), consider using reset() before.")), g.isStale && (k(K.StaleExecute, O), g.isExecuting = !0), (g.isResetting || !g.isInitialized) && g.msgQueue.push(yt.Execute), g.isExecuted = !0;
							var T = ke(g, O);
							if (T || (g.isExecuting = !1, h("Widget ".concat(O, " to execute was not found"), 43522)), g.isResetting || !g.isInitialized) return;
							if (g.isInitialized && g.msgQueue.length > 0) {
								f(g, n, T), g.params.appearance === ye.Execute && wt(T, g);
								return
							}
							g.isInitialized && g.params.appearance === ye.Execute && wt(T, g), g.isExecuting && de(T, {
								event: "execute",
								source: j,
								widgetId: n
							}, g.iframeOrigin)
						}
					},
					getResponse: function(a) {
						var u;
						if (typeof a == "undefined") {
							var n = Z();
							if (n !== void 0) {
								var c = m.widgetMap.get(n);
								return (c == null ? void 0 : c.isExpired) === !0 && x("Call to getResponse on a widget that expired, consider refreshing the widget."), c == null ? void 0 : c.response
							}
							h("Could not find a widget", 43794)
						}
						var b = L(a);
						return b === null && h("Could not find widget for provided container", 43778), (u = m.widgetMap.get(b)) === null || u === void 0 ? void 0 : u.response
					},
					isExpired: function(a) {
						var u, n;
						if (typeof a == "undefined") {
							var c = Z();
							if (c !== void 0) {
								var b, g;
								return (b = (g = m.widgetMap.get(c)) === null || g === void 0 ? void 0 : g.isExpired) !== null && b !== void 0 ? b : !1
							}
							h("Could not find a widget", 43794)
						}
						var O = L(a);
						return O === null && h("Could not find widget for provided container", 43778), (u = (n = m.widgetMap.get(O)) === null || n === void 0 ? void 0 : n.isExpired) !== null && u !== void 0 ? u : !1
					},
					ready: function(a) {
						if (m.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), h("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && h('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : F(a), '"'), 3841), m.isReady) {
							a();
							return
						}
						gr.push(a)
					},
					remove: W,
					render: I,
					reset: S
				});
			return Object.defineProperty(ee, Fn, {
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
						Un()
					},
					reloadAfterUpgrade: function() {
						A()
					}
				}
			}), {
				runImplicitRender: he,
				turnstile: ee
			}
		})(),
		La = Vn.runImplicitRender,
		Rt = Vn.turnstile;

	function Pa(e) {
		var t, r, i = e.getAttribute("data-sitekey"),
			o = {
				sitekey: i
			},
			l = e.getAttribute("data-tabindex");
		l !== null && l !== "" && (o.tabindex = Number.parseInt(l, 10));
		var d = e.getAttribute("data-theme");
		d !== null && d !== "" && ($t(d) ? o.theme = d : x('Unknown data-theme value: "'.concat(d, '".')));
		var s = e.getAttribute("data-size");
		if (s !== null && s !== "" && (ar(s) ? o.size = s : x('Unknown data-size value: "'.concat(s, '".'))), 0) var p;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (o.action = f);
		var v = e.getAttribute("data-cdata");
		typeof v == "string" && (o.cData = v);
		var E = e.getAttribute("data-retry");
		E !== null && E !== "" && (Zt(E) ? o.retry = E : x('Invalid data-retry value: "'.concat(E, ", expected either 'never' or 'auto'\".")));
		var S = e.getAttribute("data-retry-interval");
		if (S !== null && S !== "") {
			var k = Number.parseInt(S, 10);
			er(k) ? o["retry-interval"] = k : x('Invalid data-retry-interval value: "'.concat(S, ', expected an integer value > 0 and < 900000".'))
		}
		var w = e.getAttribute("data-expiry-interval");
		if (w !== null && w !== "") {
			var W = Number.parseInt(w, 10);
			tr(W) ? o["expiry-interval"] = W : x('Invalid data-expiry-interval value: "'.concat(W, ', expected an integer value > 0 and < 360000".'))
		}
		var A = e.getAttribute("data-refresh-expired");
		A !== null && A !== "" && (ir(A) ? o["refresh-expired"] = A : x('Unknown data-refresh-expired value: "'.concat(A, ", expected either: 'never', 'auto' or 'manual'.")));
		var M = e.getAttribute("data-refresh-timeout");
		M !== null && M !== "" && (or(M) ? o["refresh-timeout"] = M : x('Unknown data-refresh-timeout value: "'.concat(M, ", expected either: 'never', 'auto' or 'manual'.")));
		var I = e.getAttribute("data-language");
		I !== null && I !== "" && (ur(I) ? o.language = I : x('Invalid data-language value: "'.concat(I, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function he(_) {
			var a = e.getAttribute(_),
				u = a !== null && a !== "" ? Oe[a] : void 0;
			return typeof u == "function" ? u : void 0
		}
		var Z = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		Z.forEach(function(_) {
			Object.assign(o, Le({}, _, he("data-".concat(_))))
		}), o["feedback-enabled"] = (t = It(e.getAttribute("data-feedback-enabled"), !0, function(_) {
			return 'Invalid data-feedback-enabled value: "'.concat(_, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && t !== void 0 ? t : !0, o["response-field"] = (r = It(e.getAttribute("data-response-field"), !0, function(_) {
			return 'Invalid data-response-field value: "'.concat(_, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && r !== void 0 ? r : !0;
		var B = e.getAttribute("data-response-field-name");
		B !== null && B !== "" && (o["response-field-name"] = B);
		var R = e.getAttribute("data-execution");
		R !== null && R !== "" && (dr(R) ? o.execution = R : x('Unknown data-execution value: "'.concat(R, ", expected either: 'render' or 'execute'.")));
		var V = e.getAttribute("data-appearance");
		V !== null && V !== "" && (lr(V) ? o.appearance = V : x('Unknown data-appearance value: "'.concat(V, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var L = e.getAttribute("data-offlabel-show-privacy"),
			H = It(L, void 0, function(_) {
				return 'Invalid data-offlabel-show-privacy value: "'.concat(_, '", expected "true" or "false".')
			});
		typeof H == "boolean" && (o["offlabel-show-privacy"] = H);
		var G = e.getAttribute("data-offlabel-show-help"),
			ee = It(G, void 0, function(_) {
				return 'Invalid data-offlabel-show-help value: "'.concat(_, '", expected "true" or "false".')
			});
		return typeof ee == "boolean" && (o["offlabel-show-help"] = ee), o
	}

	function Hn() {
		if (pr(), Dn()) return !1;
		var e = Rn(window.turnstile, m);
		return e ? !0 : (mr(), !1)
	}
	Se = !1, U = $r(), m.scriptWasLoadedAsync = (Tt = U == null ? void 0 : U.loadedAsync) !== null && Tt !== void 0 ? Tt : !1, m.scriptUrl = (At = U == null ? void 0 : U.src) !== null && At !== void 0 ? At : "undefined", m.scriptUrlParsed = U == null ? void 0 : U.url, (U == null ? void 0 : U.params) !== void 0 && U.params !== null && (We = U.params.get("compat"), (We == null ? void 0 : We.toLowerCase()) === "recaptcha" ? typeof window.grecaptcha != "undefined" ? x("grecaptcha is already defined. The compatibility layer will not be enabled.") : (x("Compatibility layer enabled."), m.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Rt) : We !== null && x('Unknown value for api.js?compat: "'.concat(We, '", ignoring.')), U.params.forEach(function(e, t) {
		q(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || x('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Se = U.params.get("_upgrade") === "true", ne = U.params.get("onload"), ne !== null && ne !== "" && !Se && setTimeout(function() {
		typeof Oe[ne] == "function" ? Oe[ne]() : (x("Unable to find onload callback '".concat(ne, "' immediately after loading, expected 'function', got '").concat(F(Oe[ne]), "'.")), setTimeout(function() {
			typeof Oe[ne] == "function" ? Oe[ne]() : x("Unable to find onload callback '".concat(ne, "' after 1 second, expected 'function', got '").concat(F(Oe[ne]), "'."))
		}, 1e3))
	}, 0)), at = "turnstile" in window, ce = at ? Cn(window.turnstile) : void 0, St = at && Se ? Tn(window.turnstile, m, function() {
		var e;
		window.turnstile = Rt, (e = Cn(Rt)) === null || e === void 0 || e.reloadAfterUpgrade(), Yt(m)
	}) : !1, St && (ce == null || ce.clearPendingApiJsReloadRequest()), at && Se && !St ? (x("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), ce == null || ce.rejectPendingApiJsReloadRequest(), ce == null || ce.rearmTimedUpgrade()) : at && !Se ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (St || (window.turnstile = Rt), Se || ((U == null || (Ot = U.params) === null || Ot === void 0 ? void 0 : Ot.get("render")) !== "explicit" && gr.push(La), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Nn, 0) : window.addEventListener("DOMContentLoaded", Nn)), mr());
	var Tt, At, Se, U, We, ne, at, ce, St, Ot;
})();