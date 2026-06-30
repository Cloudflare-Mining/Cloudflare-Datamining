"use strict";
(function() {
	function Rr(e, t, r, i, a, l, f) {
		try {
			var s = e[l](f),
				m = s.value
		} catch (v) {
			r(v);
			return
		}
		s.done ? t(m) : Promise.resolve(m).then(i, a)
	}

	function Ir(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise(function(i, a) {
				var l = e.apply(t, r);

				function f(m) {
					Rr(l, i, a, f, s, "next", m)
				}

				function s(m) {
					Rr(l, i, a, f, s, "throw", m)
				}
				f(void 0)
			})
		}
	}

	function De(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function R(e, t) {
		"@swc/helpers - instanceof";
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
	}

	function Se(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = arguments[t] != null ? arguments[t] : {},
				i = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(a) {
				return Object.getOwnPropertyDescriptor(r, a).enumerable
			}))), i.forEach(function(a) {
				De(e, a, r[a])
			})
		}
		return e
	}

	function Xn(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var i = Object.getOwnPropertySymbols(e);
			t && (i = i.filter(function(a) {
				return Object.getOwnPropertyDescriptor(e, a).enumerable
			})), r.push.apply(r, i)
		}
		return r
	}

	function qt(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xn(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
		}), e
	}

	function Tr(e) {
		if (Array.isArray(e)) return e
	}

	function Ar(e, t) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var i = [],
				a = !0,
				l = !1,
				f, s;
			try {
				for (r = r.call(e); !(a = (f = r.next()).done) && (i.push(f.value), !(t && i.length === t)); a = !0);
			} catch (m) {
				l = !0, s = m
			} finally {
				try {
					!a && r.return != null && r.return()
				} finally {
					if (l) throw s
				}
			}
			return i
		}
	}

	function Sr() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Ke(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
		return i
	}

	function vt(e, t) {
		if (e) {
			if (typeof e == "string") return Ke(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ke(e, t)
		}
	}

	function Qe(e, t) {
		return Tr(e) || Ar(e, t) || vt(e, t) || Sr()
	}

	function Or(e) {
		if (Array.isArray(e)) return Ke(e)
	}

	function kr(e) {
		if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e)
	}

	function Cr() {
		throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Oe(e) {
		return Or(e) || kr(e) || vt(e) || Cr()
	}

	function P(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Mr(e, t) {
		var r, i, a, l = {
				label: 0,
				sent: function() {
					if (a[0] & 1) throw a[1];
					return a[1]
				},
				trys: [],
				ops: []
			},
			f = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype),
			s = Object.defineProperty;
		return s(f, "next", {
			value: m(0)
		}), s(f, "throw", {
			value: m(1)
		}), s(f, "return", {
			value: m(2)
		}), typeof Symbol == "function" && s(f, Symbol.iterator, {
			value: function() {
				return this
			}
		}), f;

		function m(g) {
			return function(w) {
				return v([g, w])
			}
		}

		function v(g) {
			if (r) throw new TypeError("Generator is already executing.");
			for (; f && (f = 0, g[0] && (l = 0)), l;) try {
				if (r = 1, i && (a = g[0] & 2 ? i.return : g[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, g[1])).done) return a;
				switch (i = 0, a && (g = [g[0] & 2, a.value]), g[0]) {
					case 0:
					case 1:
						a = g;
						break;
					case 4:
						return l.label++, {
							value: g[1],
							done: !1
						};
					case 5:
						l.label++, i = g[1], g = [0];
						continue;
					case 7:
						g = l.ops.pop(), l.trys.pop();
						continue;
					default:
						if (a = l.trys, !(a = a.length > 0 && a[a.length - 1]) && (g[0] === 6 || g[0] === 2)) {
							l = 0;
							continue
						}
						if (g[0] === 3 && (!a || g[1] > a[0] && g[1] < a[3])) {
							l.label = g[1];
							break
						}
						if (g[0] === 6 && l.label < a[1]) {
							l.label = a[1], a = g;
							break
						}
						if (a && l.label < a[2]) {
							l.label = a[2], l.ops.push(g);
							break
						}
						a[2] && l.ops.pop(), l.trys.pop();
						continue
				}
				g = t.call(e, l)
			} catch (w) {
				g = [6, w], i = 0
			} finally {
				r = a = 0
			}
			if (g[0] & 5) throw g[1];
			return {
				value: g[0] ? g[1] : void 0,
				done: !0
			}
		}
	}
	var mt = "cf-chl-widget-",
		J = "cloudflare-challenge",
		Nr = ".cf-turnstile",
		Lr = ".cf-challenge",
		Pr = ".g-recaptcha",
		Fr = "cf-turnstile-response",
		Dr = "g-recaptcha-response",
		Ue = 3e4,
		$e = 180 * 1e3,
		Ur = 1e4,
		Wr = 8e3,
		Vr = 3600 * 1e3,
		Bt = "private-token",
		qr = 3,
		Br = 500,
		Hr = 500,
		ye = "",
		Ht = "_cftscs_",
		Jr = 512;
	var he = (function(e) {
			return e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible", e
		})({}),
		X = (function(e) {
			return e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible", e
		})({}),
		gt = (function(e) {
			return e.Auto = "auto", e.Light = "light", e.Dark = "dark", e
		})({}),
		yt = (function(e) {
			return e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain", e
		})({}),
		ht = (function(e) {
			return e.Never = "never", e.Auto = "auto", e
		})({}),
		We = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		Ze = (function(e) {
			return e.Never = "never", e.Manual = "manual", e.Auto = "auto", e
		})({}),
		be = (function(e) {
			return e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only", e
		})({}),
		et = (function(e) {
			return e.Render = "render", e.Execute = "execute", e
		})({}),
		bt = (function(e) {
			return e.Execute = "execute", e
		})({}),
		Y = (function(e) {
			return e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.UpgradeReload = "upgrade_reload", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun", e
		})({});
	var Jt = function(t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return t.length > r ? t.slice(0, r) : t
	};

	function jr(e) {
		if (!e) return "-";
		var t = function(i, a) {
			if (!i || i.tagName === "BODY") return a;
			for (var l = 1, f = i.previousElementSibling; f;) f.tagName === i.tagName && l++, f = f.previousElementSibling;
			var s = Jt(i.tagName.toLowerCase()),
				m = "".concat(s, "[").concat(l, "]");
			return t(i.parentElement, "/".concat(m).concat(a))
		};
		return t(e, "")
	}

	function zr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Yn = {
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

	function Gr(e) {
		var t;
		if (!e) return "";
		var r = e.closest("form");
		if (!r) return "nf";
		var i = r.querySelectorAll("input, select, textarea, button"),
			a = Oe(i).slice(0, 20).map(function(f) {
				var s;
				return (s = Yn[f.type]) !== null && s !== void 0 ? s : "-"
			}).join(""),
			l = ["m:".concat((t = r.getAttribute("method")) !== null && t !== void 0 ? t : ""), "f:".concat(i.length), a].join("|");
		return l
	}

	function Kn(e) {
		return R(e, Element) ? e : e.parentElement
	}

	function Qn(e) {
		return "querySelectorAll" in e
	}

	function Xr(e, t) {
		var r, i = t == null ? void 0 : t.shouldIgnoreElement;
		if (i !== void 0) {
			var a = R(e, Element) ? [e] : [];
			(r = a).push.apply(r, Oe(e.querySelectorAll("*")));
			var l = new Set,
				f, s = !0,
				m = !1,
				v = void 0;
			try {
				for (var g = a[Symbol.iterator](), w; !(s = (w = g.next()).done); s = !0) {
					var S = w.value;
					if (f !== void 0) {
						if (f.contains(S)) {
							l.add(S);
							continue
						}
						f = void 0
					}
					i(S) && (l.add(S), f = S)
				}
			} catch (U) {
				m = !0, v = U
			} finally {
				try {
					!s && g.return != null && g.return()
				} finally {
					if (m) throw v
				}
			}
			return l
		}
	}

	function Yr(e, t) {
		var r = Kn(e);
		return r === null || t === void 0 ? !1 : t.has(r)
	}

	function Kr(e, t) {
		var r = Xr(e, t);
		return Oe(e.querySelectorAll("*")).filter(function(i) {
			return !Yr(i, r)
		}).length
	}

	function Qr(e, t, r, i) {
		for (var a = "", l = Qn(e) ? Xr(e, i) : void 0, f = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), s = f.nextNode(); s !== null && a.length < r;) {
			if (!Yr(s, l)) {
				for (var m = 0, v = s; v !== null && v !== e;) m++, v = v.parentNode;
				if (m <= t)
					if (R(s, Element)) {
						var g = s;
						a += Jt(g.tagName.toLowerCase());
						var w = !0,
							S = !1,
							U = void 0;
						try {
							for (var E = g.attributes[Symbol.iterator](), F; !(w = (F = E.next()).done); w = !0) {
								var A = F.value,
									L;
								(i == null || (L = i.shouldIgnoreAttribute) === null || L === void 0 ? void 0 : L.call(i, g, A)) !== !0 && (a += "_".concat(Jt(A.name, 2)))
							}
						} catch (I) {
							S = !0, U = I
						} finally {
							try {
								!w && E.return != null && E.return()
							} finally {
								if (S) throw U
							}
						}
						a += ">"
					} else s.nodeType === Node.TEXT_NODE && (a += "-t")
			}
			s = f.nextNode()
		}
		return a.slice(0, r)
	}

	function $r(e) {
		if (typeof e != "string") throw new TypeError("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : P(e)));
		for (var t = 5381, r = 0; r < e.length; r++) {
			var i = e.charCodeAt(r);
			t = t * 33 ^ i
		}
		return t >>> 0
	}
	var Zr = 300,
		en = 10,
		tn = 200100,
		rn = 200500,
		nn = 300020,
		_t = 300030,
		xt = 300031;
	var an = (function(e) {
		return e.Failure = "failure", e.Verifying = "verifying", e.Overrunning = "overrunning", e.Custom = "custom", e.TimeCheckCachedWarning = "timecheckcachedwarning", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain", e
	})({});

	function H(e, t) {
		return e.indexOf(t) !== -1
	}
	var $n = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Zn = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		on = "https://challenges.cloudflare.com",
		un = [on, "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function Et(e, t, r) {
		var i, a = on,
			l = (i = r == null ? void 0 : r.origin) !== null && i !== void 0 ? i : a;
		if (t) {
			var f;
			return (f = e["base-url"]) !== null && f !== void 0 ? f : l
		}
		return l
	}

	function jt(e, t, r, i, a, l, f, s, m) {
		var v = Et(r, a, s),
			g = l !== void 0 && l !== "" ? "h/".concat(l, "/") : "",
			w = m !== void 0 && m !== "" ? "&".concat(m) : "",
			S = r["feedback-enabled"] === !1 ? "fbD" : "fbE",
			U = r.chlPageOfflabel === !0 ? "&offlabel=true" : "";
		return "".concat(v, "/cdn-cgi/challenge-platform/").concat(g, "turnstile/f/av0/rch").concat(i, "/").concat(e, "/").concat(t, "/").concat(r.theme, "/").concat(S, "/").concat(f, "/").concat(r.size, "?lang=").concat(r.language).concat(U).concat(w)
	}
	var zt = function(t) {
			var r, i, a, l, f = window.innerWidth < 400,
				s = t.state !== yt.FailureFeedbackCode && (t.state === yt.FailureFeedback || t.state === yt.FailureHavingTroubles || t.errorCode === void 0 || t.errorCode === 0),
				m = H($n, (r = (a = t.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && r !== void 0 ? r : "nonexistent"),
				v = H(Zn, (i = (l = t.displayLanguage) === null || l === void 0 ? void 0 : l.toLowerCase()) !== null && i !== void 0 ? i : "nonexistent");
			return f ? ea({
				isModeratelyVerbose: v,
				isSmallerFeedback: s,
				isVerboseLanguage: m
			}) : s && m ? "680px" : s && v ? "670px" : s ? "650px" : m ? "690px" : "680px"
		},
		ea = function(t) {
			var r = t.isVerboseLanguage,
				i = t.isSmallerFeedback,
				a = t.isModeratelyVerbose;
			return i && r ? "660px" : i && a ? "620px" : i ? "600px" : r ? "770px" : a ? "740px" : "730px"
		};

	function ke(e) {
		return ke = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, ke(e)
	}

	function tt() {
		try {
			var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
		} catch (t) {}
		return (tt = function() {
			return !!e
		})()
	}

	function ln(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function dn(e, t) {
		return t && (P(t) === "object" || typeof t == "function") ? t : ln(e)
	}

	function cn(e, t, r) {
		return t = ke(t), dn(e, tt() ? Reflect.construct(t, r || [], ke(e).constructor) : t.apply(e, r))
	}

	function sn(e, t) {
		if (!R(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function Ee(e, t) {
		return Ee = Object.setPrototypeOf || function(i, a) {
			return i.__proto__ = a, i
		}, Ee(e, t)
	}

	function fn(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && Ee(e, t)
	}

	function rt(e, t, r) {
		return tt() ? rt = Reflect.construct : rt = function(a, l, f) {
			var s = [null];
			s.push.apply(s, l);
			var m = Function.bind.apply(a, s),
				v = new m;
			return f && Ee(v, f.prototype), v
		}, rt.apply(null, arguments)
	}

	function pn(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function wt(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return wt = function(i) {
			if (i === null || !pn(i)) return i;
			if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(i)) return t.get(i);
				t.set(i, a)
			}

			function a() {
				return rt(i, arguments, ke(this).constructor)
			}
			return a.prototype = Object.create(i.prototype, {
				constructor: {
					value: a,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), Ee(a, i)
		}, wt(e)
	}
	var vn = (function(e) {
		"use strict";
		fn(t, e);

		function t(r, i) {
			sn(this, t);
			var a;
			return a = cn(this, t, [r]), De(a, "code", void 0), a.name = "TurnstileError", a.code = i, a
		}
		return t
	})(wt(Error));
	var ta = RegExp("^https:\\/\\/challenges(?:\\.fed)?\\.cloudflare\\.com\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u"),
		co = RegExp("\\/turnstile\\/v0(\\/.*)?\\/api\\.js", "u");

	function b(e, t) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new vn(r, t)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function nt(e) {
		return e.startsWith(mt) ? e.slice(mt.length) : null
	}

	function Q(e) {
		return "".concat(mt).concat(e)
	}

	function Rt(e, t) {
		var r = !0,
			i = !1,
			a = void 0;
		try {
			for (var l = Object.getOwnPropertySymbols(e)[Symbol.iterator](), f; !(r = (f = l.next()).done); r = !0) {
				var s = f.value,
					m = Object.getOwnPropertyDescriptor(e, s),
					v = m === void 0 ? void 0 : Reflect.get(m, "value");
				if (t(v)) return v
			}
		} catch (g) {
			i = !0, a = g
		} finally {
			try {
				!r && l.return != null && l.return()
			} finally {
				if (i) throw a
			}
		}
	}

	function at() {
		var e = ta,
			t = document.currentScript;
		if (R(t, HTMLScriptElement) && e.test(t.src)) return t;
		var r = document.querySelectorAll("script"),
			i = !0,
			a = !1,
			l = void 0;
		try {
			for (var f = r[Symbol.iterator](), s; !(i = (s = f.next()).done); i = !0) {
				var m = s.value;
				if (R(m, HTMLScriptElement) && e.test(m.src)) return m
			}
		} catch (v) {
			a = !0, l = v
		} finally {
			try {
				!i && f.return != null && f.return()
			} finally {
				if (a) throw l
			}
		}
	}

	function mn() {
		var e = at();
		e === void 0 && b("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			r;
		try {
			r = new URL(t)
		} catch (l) {
			b("Could not parse Turnstile script tag URL", 43777)
		}
		var i = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: r
		};
		(e.async || e.defer) && (i.loadedAsync = !0);
		var a = t.split("?");
		return a.length > 1 && (i.params = new URLSearchParams(a[1])), i
	}

	function $() {
		return Date.now()
	}

	function Ve(e) {
		try {
			return new URL(e, window.location.href).origin
		} catch (t) {
			return
		}
	}

	function Gt(e, t, r) {
		if (r === void 0 || r === "") {
			if (0) var i;
			return
		}
		e == null || e.postMessage(t, r)
	}

	function se(e, t, r) {
		Gt(e.contentWindow, t, r)
	}
	var ra = 5e3,
		na = "auto-troubleshoot-click";

	function aa(e, t) {
		var r = Et(e.params, !1, t),
			i = "h/".concat("g", "/");
		return "".concat(r, "/cdn-cgi/challenge-platform/").concat(i, "fr")
	}
	var hn = function(t, r, i, a, l) {
		var f, s, m, v, g, w, S;
		if (a === void 0 || a === "" || i === void 0 || i === "") return !1;
		var U = aa(t, l),
			E = new FormData;
		E.append("consent", "on"), E.append("origin", r), E.append("issue", na), E.append("description", ""), E.append("rayId", i), E.append("sitekey", (f = t.params.sitekey) !== null && f !== void 0 ? f : ""), E.append("rcV", (s = t.rcV) !== null && s !== void 0 ? s : ""), E.append("cfChlOut", (m = t.cfChlOut) !== null && m !== void 0 ? m : ""), E.append("cfChlOutS", (v = t.cfChlOutS) !== null && v !== void 0 ? v : ""), E.append("mode", (g = t.mode) !== null && g !== void 0 ? g : ""), E.append("errorCode", String((w = t.errorCode) !== null && w !== void 0 ? w : 0)), E.append("frMd", a), E.append("displayLanguage", (S = t.displayLanguage) !== null && S !== void 0 ? S : "");
		try {
			if (typeof navigator != "undefined" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(U, E)) return !0
		} catch (F) {
			x("auto feedback report: sendBeacon threw synchronously, falling through to fetch (".concat(Xt(F), ")"))
		}
		try {
			return fetch(U, Se({
				body: E,
				keepalive: !0,
				method: "POST",
				mode: "no-cors"
			}, gn())), !0
		} catch (F) {
			x("auto feedback report: keepalive fetch threw synchronously, falling through to plain fetch (".concat(Xt(F), ")"))
		}
		try {
			fetch(U, Se({
				body: E,
				method: "POST",
				mode: "no-cors"
			}, gn()))
		} catch (F) {
			x("auto feedback report: all transports failed (".concat(Xt(F), ")"))
		}
		return !1
	};

	function gn() {
		return typeof AbortSignal == "undefined" || typeof AbortSignal.timeout != "function" ? {} : {
			signal: AbortSignal.timeout(ra)
		}
	}

	function Xt(e) {
		return R(e, Error) ? e.message : "unknown error"
	}
	var It = null,
		it = 0,
		bn = function() {
			if (it++, it === 1) {
				var t = document.querySelector('meta[http-equiv="refresh"]');
				t && (It = t.getAttribute("content"), t.remove())
			}
		},
		_n = function() {
			if (it > 0 && it--, it === 0 && It !== null) {
				var t = document.createElement("meta");
				t.httpEquiv = "refresh", t.content = It, It = null, document.head.appendChild(t)
			}
		},
		Yt = Symbol(),
		ia = "host-origin",
		qe = function(t) {
			t.feedbackPopup && !t.feedbackPopup.closed && t.feedbackPopup.close(), t.feedbackPopup = void 0, t.feedbackPopupOrigin = void 0
		};

	function xn(e) {
		return e.endsWith("-fr") ? e : "".concat(e, "-fr")
	}

	function En(e) {
		var t, r, i, a = (i = document.querySelector("#".concat(e))) === null || i === void 0 || (r = i.parentElement) === null || r === void 0 || (t = r.parentElement) === null || t === void 0 ? void 0 : t.parentElement;
		return R(a, HTMLDivElement) ? a : null
	}

	function yn(e) {
		if (!((typeof e == "undefined" ? "undefined" : P(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, "cleanup"),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (typeof r == "function") return function() {
				Reflect.apply(r, void 0, [])
			}
		}
	}

	function wn(e) {
		var t, r = yn((t = Object.getOwnPropertyDescriptor(e, Yt)) === null || t === void 0 ? void 0 : t.value);
		if (r) return r;
		var i = !0,
			a = !1,
			l = void 0;
		try {
			for (var f = Object.getOwnPropertySymbols(e)[Symbol.iterator](), s; !(i = (s = f.next()).done); i = !0) {
				var m = s.value,
					v, g = yn((v = Object.getOwnPropertyDescriptor(e, m)) === null || v === void 0 ? void 0 : v.value);
				if (g) return g
			}
		} catch (w) {
			a = !0, l = w
		} finally {
			try {
				!i && f.return != null && f.return()
			} finally {
				if (a) throw l
			}
		}
	}

	function oa(e, t) {
		Object.defineProperty(e, Yt, {
			configurable: !0,
			enumerable: !1,
			value: {
				cleanup: t
			}
		})
	}

	function ua(e) {
		Reflect.deleteProperty(e, Yt)
	}

	function la(e) {
		var t = new URL(e, window.location.href),
			r = new URLSearchParams(t.hash.startsWith("#") ? t.hash.slice(1) : t.hash);
		return r.set(ia, window.location.origin), t.hash = r.toString(), t.toString()
	}
	var Kt = function(t, r, i, a, l) {
			var f, s, m = xn(t),
				v = Et(r.params, !1, a),
				g = "h/".concat("g", "/"),
				w = la("".concat(v, "/cdn-cgi/challenge-platform/").concat(g, "fr/").concat(nt(t), "/").concat(r.displayLanguage, "/").concat((s = r.params.theme) !== null && s !== void 0 ? s : r.theme, "/").concat(i));
			if (qe(r), window.top !== window.self) {
				var S = window.open(w, "_blank");
				if (S) {
					r.feedbackPopupOrigin = Ve(w), r.feedbackPopup = S;
					var U = window.setInterval(function() {
						S.closed && (window.clearInterval(U), r.feedbackPopupCloseCheck = void 0, l == null || l())
					}, 500);
					r.feedbackPopupCloseCheck = U;
					return
				}
				x("Unable to open feedback report popup, falling back to the embedded feedback overlay.")
			}
			r.wrapper.parentNode || b("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3074);
			var E = En(m);
			if (E) {
				var F;
				(F = wn(E)) === null || F === void 0 || F()
			}
			var A = document.createElement("div");
			A.style.position = "fixed", A.style.zIndex = "2147483646", A.style.width = "100vw", A.style.height = "100vh", A.style.top = "0", A.style.left = "0", A.style.transformOrigin = "center center", A.style.overflowX = "hidden", A.style.overflowY = "auto", A.style.background = "rgba(0,0,0,0.4)";
			var L = document.createElement("div");
			L.className = "cf-wrapper-turnstile-feedback", L.style.display = "table-cell", L.style.verticalAlign = "middle", L.style.width = "100vw", L.style.height = "100vh";
			var I = document.createElement("div");
			I.className = "cf-turnstile-feedback", I.id = "cf-fr-id", I.style.width = "100vw", I.style.maxWidth = "500px", I.style.height = zt(r), I.style.position = "relative", I.style.zIndex = "2147483647", I.style.backgroundColor = "#ffffff", I.style.borderRadius = "5px", I.style.left = "0px", I.style.top = "0px", I.style.overflow = "hidden", I.style.margin = "0px auto";
			var pe = function() {
					I.style.height = zt(r)
				},
				ue = function() {
					var ae;
					ua(A), r.feedbackIframeOrigin = void 0, window.removeEventListener("resize", pe), (ae = A.parentNode) === null || ae === void 0 || ae.removeChild(A), l == null || l()
				},
				W = document.createElement("iframe");
			W.id = m, W.setAttribute("src", w), W.setAttribute("title", "Turnstile feedback report"), W.setAttribute("allow", "cross-origin-isolated; fullscreen"), W.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), W.setAttribute("scrolling", "yes"), W.style.borderWidth = "0px", W.style.width = "100%", W.style.height = "100%", W.style.overflow = "auto", r.feedbackIframeOrigin = Ve(w);
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "button"), T.setAttribute("aria-label", "Close feedback report"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", r.displayRtl === !0 ? T.style.left = "24px" : T.style.right = "24px", T.style.top = "24px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function(j) {
				j.stopPropagation(), ue()
			}), T.addEventListener("keydown", function(j) {
				(j.key === "Enter" || j.key === " ") && (j.preventDefault(), j.stopPropagation(), ue())
			});
			var V = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			V.setAttribute("ry", "12"), V.setAttribute("rx", "12"), V.setAttribute("cy", "12"), V.setAttribute("cx", "12"), V.setAttribute("fill", "none"), V.setAttribute("stroke-width", "0"), T.appendChild(V);
			var q = document.createElementNS("http://www.w3.org/2000/svg", "line");
			q.setAttribute("stroke-width", "1"), q.setAttribute("fill", "none"), q.setAttribute("x1", "6"), q.setAttribute("x2", "18"), q.setAttribute("y1", "18"), q.setAttribute("y2", "5");
			var N = document.createElementNS("http://www.w3.org/2000/svg", "line");
			N.setAttribute("stroke-width", "1"), N.setAttribute("fill", "none"), N.setAttribute("x1", "6"), N.setAttribute("x2", "18"), N.setAttribute("y1", "5"), N.setAttribute("y2", "18"), r.theme === gt.Light ? (q.setAttribute("stroke", "#0A0A0A"), N.setAttribute("stroke", "#0A0A0A")) : (q.setAttribute("stroke", "#F2F2F2"), N.setAttribute("stroke", "#F2F2F2")), T.appendChild(q), T.appendChild(N), I.appendChild(W), I.appendChild(T), L.appendChild(I), A.appendChild(L), A.addEventListener("click", ue), r.wrapper.parentNode.appendChild(A), window.addEventListener("resize", pe), oa(A, ue)
		},
		ot = function(t) {
			var r, i = xn(t),
				a = En(i);
			if (a) {
				var l = wn(a);
				if (l) {
					l();
					return
				}
				x("Unable to find feedback overlay cleanup handler. Removing overlay without cleanup."), (r = a.parentNode) === null || r === void 0 || r.removeChild(a)
			}
		};
	var da = 900,
		ca = 45,
		sa = 50;

	function fa(e) {
		return R(e, ShadowRoot)
	}

	function pa(e, t, r) {
		var i = e.widgetMap.get(t);
		(i == null ? void 0 : i.retryTimeout) !== void 0 && (window.clearTimeout(i.retryTimeout), i.retryTimeout = void 0), x("Cannot find Widget ".concat(r, ", consider using turnstile.remove() to clean up a widget.")), e.widgetMap.delete(t)
	}

	function va(e) {
		e.watchCatSeq++;
		var t = [],
			r = !0,
			i = !1,
			a = void 0;
		try {
			for (var l = e.widgetMap[Symbol.iterator](), f; !(r = (f = l.next()).done); r = !0) {
				var s = Qe(f.value, 2),
					m = s[0],
					v = s[1],
					g = Q(m),
					w = v.shadow;
				if (!fa(w) || !v.wrapper.isConnected) {
					v.watchcat.missingWidgetWarning || (v.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: g,
						widgetId: m
					}));
					continue
				}
				var S = w.querySelector("#".concat(g));
				if (S === null) {
					v.watchcat.missingWidgetWarning || (v.watchcat.missingWidgetWarning = !0, t.push({
						widgetElId: g,
						widgetId: m
					}));
					continue
				}
				if (v.watchcat.seq = e.watchCatSeq, v.watchcat.lastAckedSeq === 0 && (v.watchcat.lastAckedSeq = e.watchCatSeq), !(v.isComplete || v.isFailed || v.feedbackOpen)) {
					var U = v.watchcat.seq - 1 - ca,
						E = v.watchcat.lastAckedSeq < U,
						F = v.watchcat.seq - 1 - sa,
						A = v.isOverrunning && v.watchcat.overrunBeginSeq !== 0 && v.watchcat.overrunBeginSeq < F;
					if ((v.isExecuting || !v.isInitialized || !v.isStale && !v.isExecuted) && v.watchcat.lastAckedSeq !== 0 && E || A) {
						var L, I;
						v.watchcat.lastAckedSeq = 0, v.watchcat.seq = 0, v.isExecuting = !1;
						var pe = function(u, p) {
							console.log("Turnstile Widget seem to have ".concat(u, ": "), p)
						};
						pe(E ? "hung" : "crashed", m);
						var ue = E ? _t : xt;
						if ((I = e.internalMsgHandler) === null || I === void 0 || I.call(e, {
								code: ue,
								event: "fail",
								rcV: (L = v.nextRcV) !== null && L !== void 0 ? L : ye,
								source: J,
								widgetId: m
							}), 0) var W;
						continue
					}
					se(S, {
						event: "meow",
						seq: e.watchCatSeq,
						source: J,
						widgetId: m
					}, v.iframeOrigin)
				}
			}
		} catch (n) {
			i = !0, a = n
		} finally {
			try {
				!r && l.return != null && l.return()
			} finally {
				if (i) throw a
			}
		}
		var T = !0,
			V = !1,
			q = void 0;
		try {
			for (var N = t[Symbol.iterator](), j; !(T = (j = N.next()).done); T = !0) {
				var ae = j.value,
					B = ae.widgetElId,
					_ = ae.widgetId;
				pa(e, _, B)
			}
		} catch (n) {
			V = !0, q = n
		} finally {
			try {
				!T && N.return != null && N.return()
			} finally {
				if (V) throw q
			}
		}
		t.length > 0 && e.widgetMap.size === 0 && ut(e)
	}

	function Qt(e) {
		var t, r;
		(r = (t = e).watchCatInterval) !== null && r !== void 0 || (t.watchCatInterval = setInterval(function() {
			va(e)
		}, da))
	}

	function ut(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var Zt = Symbol();

	function In(e) {
		return (typeof e == "undefined" ? "undefined" : P(e)) === "object" && e !== null ? e : void 0
	}

	function $t(e) {
		return (typeof e == "undefined" ? "undefined" : P(e)) === "object" && e !== null && "widgetMap" in e && R(e.widgetMap, Map) && "upgradeAttempts" in e && typeof e.upgradeAttempts == "number" && "upgradeCompletedCount" in e && typeof e.upgradeCompletedCount == "number"
	}

	function ma(e, t) {
		Object.defineProperty(e, Zt, {
			configurable: !0,
			enumerable: !1,
			value: t
		})
	}

	function ga(e) {
		var t = Object.getOwnPropertyDescriptor(e, Zt),
			r = t === void 0 ? void 0 : Reflect.get(t, "value");
		if ($t(r)) return r;
		var i = Rt(e, $t);
		if (i) return i
	}

	function Tn(e) {
		Reflect.deleteProperty(e, Zt);
		var t = !0,
			r = !1,
			i = void 0;
		try {
			for (var a = Object.getOwnPropertySymbols(e)[Symbol.iterator](), l; !(t = (l = a.next()).done); t = !0) {
				var f = l.value,
					s = Object.getOwnPropertyDescriptor(e, f),
					m = s === void 0 ? void 0 : Reflect.get(s, "value");
				$t(m) && Reflect.deleteProperty(e, f)
			}
		} catch (v) {
			r = !0, i = v
		} finally {
			try {
				!t && a.return != null && a.return()
			} finally {
				if (r) throw i
			}
		}
	}

	function ya(e) {
		return !Number.isFinite(e.apiJsReloadBackoffMs) || e.apiJsReloadBackoffMs <= 0 ? Ue : Math.min(e.apiJsReloadBackoffMs, $e)
	}

	function ha(e) {
		return !Number.isFinite(e.apiJsReloadNextAllowedTsMs) || e.apiJsReloadNextAllowedTsMs <= 0 ? 0 : e.apiJsReloadNextAllowedTsMs
	}

	function Rn(e, t) {
		var r = Reflect.get(e, t);
		return typeof r == "number" ? r : 0
	}

	function An(e, t) {
		var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : at;
		t.upgradeAttempts++;
		var i = r();
		if (!(i != null && i.parentNode)) return !1;
		var a = In(e);
		if (!a) return !1;
		var l = i.nonce;
		ma(a, t);
		var f = new URL(i.src),
			s = document.createElement("script");
		f.searchParams.set("_upgrade", "true"), f.searchParams.set("_cb", String(Date.now())), s.async = !0, l && (s.nonce = l), s.setAttribute("crossorigin", "anonymous"), s.src = f.toString();
		try {
			return i.parentNode.replaceChild(s, i), !0
		} catch (m) {
			if (!R(m, DOMException)) throw m;
			return Tn(a), !1
		}
	}

	function Sn(e, t, r) {
		var i = In(e);
		if (!i) return !1;
		var a = ga(i);
		if (!a) return !1;
		var l = a.apiJsMismatchReloadPending;
		return t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.apiJsReloadBackoffMs = l ? Ue : ya(a), t.apiJsReloadNextAllowedTsMs = ha(a), t.apiJsMismatchReloadAttempts = Rn(a, "apiJsMismatchReloadAttempts"), t.apiJsMismatchReloadCompletedCount = Rn(a, "apiJsMismatchReloadCompletedCount") + (l ? 1 : 0), t.apiJsMismatchReloadPending = !1, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = $(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap, ut(a, !0), a.msgHandler && window.removeEventListener("message", a.msgHandler), Tn(i), r(), !0
	}

	function er(e) {
		return H(["auto", "dark", "light"], e)
	}

	function tr(e) {
		return H(["auto", "never"], e)
	}

	function rr(e) {
		return e > 0 && e < 9e5
	}

	function nr(e) {
		return e > 0 && e < 36e4
	}
	var ba = RegExp("^[0-9A-Za-z_-]{3,100}$", "u");

	function On(e) {
		return ba.test(e)
	}
	var _a = RegExp("^[a-z0-9_-]{0,32}$", "iu");

	function ar(e) {
		return e === void 0 ? !0 : typeof e == "string" && _a.test(e)
	}
	var xa = RegExp("^[a-z0-9_\\-=]{0,255}$", "iu");

	function ir(e) {
		return e === void 0 ? !0 : typeof e == "string" && xa.test(e)
	}

	function or(e) {
		return H([X.Normal, X.Compact, X.Invisible, X.Flexible], e)
	}

	function ur(e) {
		return H(["auto", "manual", "never"], e)
	}

	function lr(e) {
		return H(["auto", "manual", "never"], e)
	}
	var Ea = RegExp("^[a-z]{2,3}([-_][a-z]{2})?$", "iu");

	function dr(e) {
		return e === "auto" || Ea.test(e)
	}

	function cr(e) {
		return H(["always", "execute", "interaction-only"], e)
	}

	function kn(e) {
		return H(["true", "false"], e)
	}

	function sr(e) {
		return H(["render", "execute"], e)
	}
	var Uo = RegExp("^[0-9a-z_\\-.]{5,2000}$", "iu");

	function fr(e) {
		var t = new URLSearchParams;
		if (0) {
			var r;
			if (r != null && r !== "") var i
		}
		if (e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), !(t.size === 0 || t.toString() === "")) return t.toString()
	}

	function Cn(e, t) {
		if (e.isResetting = !1, t) {
			t(String(rn));
			return
		}
		b("Could not load challenge from challenges.cloudflare.com.", 161)
	}

	function Mn(e, t) {
		return e ? t ? !0 : H(un, e) : !1
	}

	function Nn() {
		for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window, t = e; t && t.top !== t && !t.location.href.startsWith("http");) t = t.top;
		return t == null ? void 0 : t.location.href
	}
	var qn = Symbol(),
		wa = "Turnstile has already been rendered in this container. The render attempt was rejected.",
		Ra = "Turnstile skipped implicit render because a widget already exists in this container.",
		pr = void 0,
		Ia = function(e) {
			return e.styleSheets.length
		};

	function gr(e) {
		return Reflect.get(window, e)
	}

	function yr(e) {
		var t = gr(e);
		return typeof t == "function" ? function() {
			for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
			return Reflect.apply(t, window, i)
		} : void 0
	}

	function Ln(e, t) {
		return e == null ? t : Number(e)
	}

	function Ta(e) {
		return e === "new" || e === "crashed_retry" || e === "failure_retry" || e === "stale_execute" || e === "auto_expire" || e === "auto_timeout" || e === "manual_refresh" || e === "api" || e === "check_delays" || e === "upgrade_reload" || e === "time_check_cached_warning_aux" || e === "js_cookies_missing_aux" || e === "redirecting_text_overrun"
	}

	function Aa(e) {
		var t = JSON.stringify(e);
		return JSON.parse(t)
	}

	function Pn(e) {
		return (typeof e == "undefined" ? "undefined" : P(e)) === "object" && e !== null && "clearPendingApiJsReloadRequest" in e && typeof e.clearPendingApiJsReloadRequest == "function" && "rejectPendingApiJsReloadRequest" in e && typeof e.rejectPendingApiJsReloadRequest == "function" && "rearmTimedUpgrade" in e && typeof e.rearmTimedUpgrade == "function" && "reloadAfterUpgrade" in e && typeof e.reloadAfterUpgrade == "function"
	}

	function Fn(e) {
		if (!((typeof e == "undefined" ? "undefined" : P(e)) !== "object" || e === null)) {
			var t = Object.getOwnPropertyDescriptor(e, qn),
				r = t === void 0 ? void 0 : Reflect.get(t, "value");
			if (Pn(r)) return r;
			var i = Rt(e, Pn);
			if (i) return i
		}
	}
	var y = {
			apiJsMismatchReloadAttempts: 0,
			apiJsMismatchReloadCompletedCount: 0,
			apiJsMismatchReloadPending: !1,
			apiJsReloadBackoffMs: Ue,
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
		ct, Lt, Ft;

	function Sa(e) {
		var t = !0,
			r = !1,
			i = void 0;
		try {
			for (var a = y.widgetMap[Symbol.iterator](), l; !(t = (l = a.next()).done); t = !0) {
				var f = Qe(l.value, 2),
					s = f[0],
					m = f[1];
				if (m.wrapper.parentElement === e || m.wrapper !== e && m.wrapper.contains(e) || m.shadow.contains(e)) return s
			}
		} catch (v) {
			r = !0, i = v
		} finally {
			try {
				!t && a.return != null && a.return()
			} finally {
				if (r) throw i
			}
		}
		return null
	}

	function Tt(e) {
		if (typeof e == "string") {
			var t = nt(e);
			return t !== null && y.widgetMap.has(t) ? t : y.widgetMap.has(e) ? e : null
		}
		return Sa(e)
	}

	function Oa(e) {
		return e === "implicit" ? Ra : wa
	}

	function Dn(e, t) {
		return e === "explicit" && (t == null ? void 0 : t.renderSource) === "implicit"
	}

	function hr() {
		ct !== void 0 && (window.clearTimeout(ct), ct = void 0)
	}

	function Bn() {
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var i = y.widgetMap.values()[Symbol.iterator](), a; !(e = (a = i.next()).done); e = !0) {
				var l = a.value;
				if (l.chlPageData !== void 0 && l.chlPageData !== "") return !0
			}
		} catch (f) {
			t = !0, r = f
		} finally {
			try {
				!e && i.return != null && i.return()
			} finally {
				if (t) throw r
			}
		}
		return !1
	}

	function dt(e) {
		var t = y.widgetMap.get(e),
			r = Q(e);
		if (t !== void 0) {
			var i = Me(t, r);
			i !== null && se(i, {
				apiJsMismatchReloadAttempts: y.apiJsMismatchReloadAttempts,
				apiJsMismatchReloadCompletedCount: y.apiJsMismatchReloadCompletedCount,
				event: "reloadApiJsRejected",
				source: J,
				widgetId: e
			}, t.iframeOrigin)
		}
	}

	function br() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			t = e.preserveMismatchReloadPending,
			r = t === void 0 ? !1 : t;
		Ft = void 0, r || (y.apiJsMismatchReloadPending = !1), Lt !== void 0 && (window.clearTimeout(Lt), Lt = void 0)
	}

	function Hn() {
		var e = Ft;
		br(), e !== void 0 && dt(e)
	}

	function ka() {
		return $() < y.apiJsReloadNextAllowedTsMs
	}

	function Ca() {
		var e = y.apiJsReloadBackoffMs,
			t = Number.isFinite(e) && e > 0 ? Math.min(e, $e) : Ue,
			r = Math.round(t * (.8 + Math.random() * .4));
		y.apiJsReloadNextAllowedTsMs = $() + r, y.apiJsReloadBackoffMs = Math.min(t * 2, $e)
	}

	function Ma(e) {
		br({
			preserveMismatchReloadPending: !0
		}), y.apiJsMismatchReloadPending = !0, Ft = e, Lt = window.setTimeout(function() {
			Hn()
		}, Ur)
	}

	function _r() {
		hr(), !Bn() && (ct = window.setTimeout(function() {
			ct = void 0, Gn()
		}, Vr))
	}

	function vr(e, t) {
		jn(e, t, "")
	}
	var xr = [];

	function Un() {
		y.isReady = !0;
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var i = xr[Symbol.iterator](), a; !(e = (a = i.next()).done); e = !0) {
				var l = a.value;
				l()
			}
		} catch (f) {
			t = !0, r = f
		} finally {
			try {
				!e && i.return != null && i.return()
			} finally {
				if (t) throw r
			}
		}
	}

	function Wn(e, t) {
		e.onerror = function() {
			Cn(t, t.cbError)
		}
	}

	function Jn(e, t) {
		var r, i = (r = e.params["response-field"]) !== null && r !== void 0 ? r : !0,
			a = y.isRecaptchaCompatibilityMode,
			l = "".concat(t, "_response"),
			f = "".concat(t, "_g_response"),
			s = (!i || R(document.querySelector("#".concat(l)), HTMLInputElement)) && (!a || R(document.querySelector("#".concat(f)), HTMLInputElement));
		if (!(e.responseElementsBuilt && s)) {
			if (i && !R(document.querySelector("#".concat(l)), HTMLInputElement)) {
				var m, v = document.createElement("input");
				v.type = "hidden", v.name = (m = e.params["response-field-name"]) !== null && m !== void 0 ? m : Fr, v.id = l, e.wrapper.appendChild(v)
			}
			if (a && !R(document.querySelector("#".concat(f)), HTMLInputElement)) {
				var g = document.createElement("input");
				g.type = "hidden", g.name = Dr, g.id = f, e.wrapper.appendChild(g)
			}
			e.responseElementsBuilt = !0
		}
	}

	function jn(e, t, r) {
		Jn(e, t);
		var i = document.querySelector("#".concat(t, "_response"));
		if (i !== null && R(i, HTMLInputElement) && (i.value = r), y.isRecaptchaCompatibilityMode) {
			var a = document.querySelector("#".concat(t, "_g_response"));
			a !== null && R(a, HTMLInputElement) && (a.value = r)
		}
	}

	function He(e, t) {
		var r, i;
		return (r = (i = t.kills) === null || i === void 0 ? void 0 : i.includes(e)) !== null && r !== void 0 ? r : !1
	}

	function At(e, t) {
		var r, i = (r = t.params.size) !== null && r !== void 0 ? r : X.Normal,
			a = t.mode;
		switch (a) {
			case he.NonInteractive:
			case he.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", i) {
					case X.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case X.Invisible:
						b('Invalid value for parameter "size", expected "'.concat(X.Compact, '", "').concat(X.Flexible, '", or "').concat(X.Normal, '", got "').concat(i, '"'), 2817);
					case X.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case X.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case he.Invisible:
				He("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				b('Invalid value for parameter "mode", expected "'.concat(he.NonInteractive, '", "').concat(he.Managed, '" or "').concat(he.Invisible, '", got "').concat(String(a), '"'), 2818)
		}
	}

	function Vn(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function Na(e, t) {
		var r = t.get("turnstile_iframe_alt");
		r !== void 0 && r !== "" && (e.title = r)
	}

	function Me(e, t) {
		return e.shadow.querySelector("#".concat(t))
	}

	function La(e, t) {
		var r, i;
		return (r = (i = e.wrapper.parentNode) === null || i === void 0 ? void 0 : i.querySelector("#".concat(t, "-fr"))) !== null && r !== void 0 ? r : null
	}

	function Pa(e) {
		var t, r;
		return ((r = e.feedbackPopup) === null || r === void 0 ? void 0 : r.closed) === !0 ? (e.feedbackPopup = void 0, e.feedbackPopupOrigin = void 0, null) : (t = e.feedbackPopup) !== null && t !== void 0 ? t : null
	}

	function Pt(e, t) {
		var r, i, a = (r = (i = La(e, t)) === null || i === void 0 ? void 0 : i.contentWindow) !== null && r !== void 0 ? r : null;
		if (a !== null) return {
			targetOrigin: e.feedbackIframeOrigin,
			targetWindow: a
		};
		var l = Pa(e);
		return {
			targetOrigin: l === null ? void 0 : e.feedbackPopupOrigin,
			targetWindow: l
		}
	}

	function Fa(e) {
		if ((typeof e == "undefined" ? "undefined" : P(e)) !== "object" || e === null) return !1;
		var t = e;
		return t.source === J && typeof t.event == "string" && typeof t.widgetId == "string"
	}

	function Da(e) {
		return e.isTrusted && Fa(e.data)
	}

	function Ua(e) {
		return Mn(e.origin, !1)
	}

	function Wa(e, t, r) {
		var i, a, l = (i = (a = Me(t, r)) === null || a === void 0 ? void 0 : a.contentWindow) !== null && i !== void 0 ? i : null,
			f = Pt(t, r).targetWindow,
			s = function(w) {
				return w !== null && e.source === w
			},
			m = e.data.event;
		switch (m) {
			case "requestFeedbackData":
			case "closeFeedbackReportIframe":
				return s(f);
			case "refreshRequest":
				return s(l) || e.data.reason === "feedback_refresh" && s(f);
			case "complete":
			case "fail":
			case "feedbackInit":
			case "food":
			case "init":
			case "interactiveBegin":
			case "interactiveEnd":
			case "interactiveTimeout":
			case "languageUnsupported":
			case "overrunBegin":
			case "overrunEnd":
			case "reject":
			case "reloadApiJsRequest":
			case "reloadRequest":
			case "requestExtraParams":
			case "tokenExpired":
			case "translationInit":
			case "turnstileResults":
			case "widgetStale":
				return s(l);
			default: {
				var v = m;
				return !1
			}
		}
	}

	function mr() {
		return Nn(window)
	}

	function St(e, t, r) {
		return e === null ? t : kn(e) ? e === "true" : (x(r(e)), t)
	}

	function Va() {
		try {
			var e = at();
			if (!e) return;
			var t = e.src,
				r = !0,
				i = !1,
				a = void 0;
			try {
				for (var l = performance.getEntriesByType("resource")[Symbol.iterator](), f; !(r = (f = l.next()).done); r = !0) {
					var s = f.value;
					if (R(s, PerformanceResourceTiming) && s.name.includes(t)) return s
				}
			} catch (m) {
				i = !0, a = m
			} finally {
				try {
					!r && l.return != null && l.return()
				} finally {
					if (i) throw a
				}
			}
		} catch (m) {
			return
		}
	}
	var zn = (function() {
			var e = function(n, u, p, d, o, c) {
					return Ir(function() {
						var k, C, O, M, z, le, de, ie, Ne, K, re;
						return Mr(this, function(Z) {
							switch (Z.label) {
								case 0:
									if (C = function(ce, ee) {
											var ne = y.widgetMap.get(u);
											ne !== n || ne.isComplete || ne.isResetting || ne.response !== d || (!ce && ee !== void 0 && ee !== "" && x(ee), a(ne, p, ce))
										}, O = n.params.sitekey, M = mr(), M === void 0 || M === "") return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(n, p, !1), [2];
									z = "h/".concat("g", "/"), le = new URL(M), de = "https", ie = "", Ne = "".concat(de, "://").concat(le.host, "/cdn-cgi/challenge-platform/").concat(z, "c/").concat(c).concat(ie), Z.label = 1;
								case 1:
									return Z.trys.push([1, 3, , 4]), [4, fetch(Ne, {
										body: JSON.stringify({
											secondaryToken: o,
											sitekey: O
										}),
										headers: {
											"Content-Type": "application/json"
										},
										method: "POST",
										redirect: "manual"
									})];
								case 2:
									return K = Z.sent(), K.status === 200 ? C(!0) : C(!1, "Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), [3, 4];
								case 3:
									return re = Z.sent(), C(!1, "Error contacting Turnstile, aborting clearance redemption."), [3, 4];
								case 4:
									return [2]
							}
						})
					})()
				},
				t = function(n, u, p) {
					if (n.params.retry === ht.Auto || p) {
						var d;
						if (n.feedbackOpen) {
							n.pendingRetry = {
								crashed: p
							};
							return
						}
						var o = p ? 0 : 1e3 * 2 + ((d = n.params["retry-interval"]) !== null && d !== void 0 ? d : 0);
						n.retryTimeout = window.setTimeout(function() {
							var c = p ? Y.CrashedRetry : Y.FailureRetry;
							E(c, u)
						}, o)
					}
				},
				r = function(n, u, p) {
					return n.params.execution === et.Render ? !0 : (u === Y.CrashedRetry || u === Y.FailureRetry || u === Y.CheckDelays || u === Y.UpgradeReload) && n.params.execution === et.Execute && p
				},
				i = function(n, u, p) {
					if (n.feedbackOpen && (n.feedbackOpen = !1, n.feedbackPopupCloseCheck !== void 0 && (window.clearInterval(n.feedbackPopupCloseCheck), n.feedbackPopupCloseCheck = void 0), _n(), window.postMessage({
							event: "feedbackClose",
							source: J,
							widgetId: p
						}, "*"), n.pendingRetry)) {
						var d = n.pendingRetry.crashed;
						n.pendingRetry = void 0, t(n, u, d)
					}
				},
				a = function(n, u, p) {
					var d;
					n.response === void 0 && b("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, jn(n, u, n.response), (d = n.cbSuccess) === null || d === void 0 || d.call(n, n.response, p)
				},
				l = function(n) {
					if (!n) return [];
					for (var u = n.attributes, p = u.length, d = new Array(p), o = 0; o < p; o++) d[o] = u[o].name;
					return d
				},
				f = function() {
					for (var n = {}, u = [], p = document.querySelectorAll("*"), d = 0; d < p.length && u.length < 50; d++) {
						var o = p[d].tagName.toLowerCase();
						o.includes("-") && !n[o] && (n[o] = !0, u.push(o))
					}
					return u
				},
				s = function(n, u, p) {
					if (n.rcV = u, 0) var d
				},
				m = function() {
					var n = "abcdefghijklmnopqrstuvwxyz0123456789",
						u = n.length,
						p;
					do {
						p = "";
						for (var d = 0; d < 5; d++) p += n.charAt(Math.floor(Math.random() * u))
					} while (y.widgetMap.has(p));
					return p
				},
				v = function(n, u, p) {
					for (; n.msgQueue.length > 0;) {
						var d = n.msgQueue.pop();
						se(p, {
							event: d,
							source: J,
							widgetId: u
						}, n.iframeOrigin)
					}
				},
				g = function(n) {
					return n.isExecuting
				},
				w = function(n, u) {
					if (u) {
						var p = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
							d = [],
							o = !0,
							c = !1,
							k = void 0;
						try {
							for (var C = p[Symbol.iterator](), O; !(o = (O = C.next()).done); o = !0) {
								var M = O.value;
								Object.getOwnPropertyDescriptor(u, M) !== void 0 && u[M] !== void 0 && u[M] !== n.params[M] && d.push(M)
							}
						} catch (z) {
							c = !0, k = z
						} finally {
							try {
								!o && C.return != null && C.return()
							} finally {
								if (c) throw k
							}
						}
						d.length > 0 && b("The parameters ".concat(p.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(d.join(",")), 3618), u.action !== void 0 && u.action !== "" && (ar(u.action) || b('Invalid input for optional parameter "action", got "'.concat(u.action, '"'), 3604), n.action = u.action), u.cData !== void 0 && u.cData !== "" && (ir(u.cData) || b('Invalid input for optional parameter "cData", got "'.concat(u.cData, '"'), 3605), n.cData = u.cData), u["after-interactive-callback"] !== void 0 && (n.cbAfterInteractive = u["after-interactive-callback"]), u["before-interactive-callback"] !== void 0 && (n.cbBeforeInteractive = u["before-interactive-callback"]), u.callback !== void 0 && (n.cbSuccess = u.callback), u["expired-callback"] !== void 0 && (n.cbExpired = u["expired-callback"]), u["timeout-callback"] !== void 0 && (n.cbTimeout = u["timeout-callback"]), u["error-callback"] !== void 0 && (n.cbError = u["error-callback"]), u["unsupported-callback"] !== void 0 && (n.cbUnsupported = u["unsupported-callback"]), u.chlPageData !== void 0 && u.chlPageData !== "" && (n.chlPageData = u.chlPageData)
					}
				},
				S = function(n, u, p) {
					n === "explicit" && u !== void 0 && w(u, p), x(Oa(n))
				},
				U = function(n) {
					E(Y.Api, n)
				},
				E = function(n, u) {
					var p, d, o = N(u);
					o === null && b("Nothing to reset found for provided container", 3329);
					var c = y.widgetMap.get(o);
					c === void 0 && b("Widget ".concat(o, " to reset was not found."), 3331);
					var k = c.isExecuted;
					c.isResetting = !0, c.response = void 0, c.mode = void 0, c.msgQueue = [], c.isComplete = !1, c.isExecuted = !1, c.isExecuting = !1, c.isExpired = !1, c.isFailed = !1, c.isInitialized = !1, c.isStale = !1, c.isOverrunning = !1, c.cfChlOut = void 0, c.cfChlOutS = void 0, c.errorCode = void 0, c.frMd = void 0, c.autoFeedbackSent = !1, c.watchcat.overrunBeginSeq = 0, c.watchcat.lastAckedSeq = 0, c.watchcat.seq = 0, r(c, n, k) && (c.msgQueue.push(bt.Execute), c.isExecuted = !0, c.isExecuting = !0);
					var C = Q(o),
						O = c.shadow.querySelector("#".concat(C));
					O === null && b("Widget ".concat(o, " to reset was not found."), 3330), (c.params.appearance === be.InteractionOnly || c.params.appearance === be.Execute) && Vn(O), c.params.sitekey === null && b("Unexpected Error: Sitekey is null", 3347);
					var M = O.cloneNode();
					R(M, HTMLIFrameElement) || b("Unexpected Error: Cloned widget is not an iframe", 3348);
					var z = jt(o, c.params.sitekey, c.params, (p = c.rcV) !== null && p !== void 0 ? p : ye, !1, "g", n, y.scriptUrlParsed, fr(c));
					M.src = z, Wn(M, c), c.iframeOrigin = Ve(z), (d = O.parentNode) === null || d === void 0 || d.replaceChild(M, O), vr(c, C), c.retryTimeout !== void 0 && window.clearTimeout(c.retryTimeout)
				},
				F = function(n, u) {
					var p = Q(n),
						d = ["input#".concat(p, "_response"), "input#".concat(p, "_g_response")];
					document.querySelectorAll(d.join(", ")).forEach(function(o) {
						o.remove()
					}), u.shadow.querySelectorAll(d.join(", ")).forEach(function(o) {
						o.remove()
					}), ot(p), qe(u), u.wrapper.remove(), u.retryTimeout !== void 0 && window.clearTimeout(u.retryTimeout), y.widgetMap.delete(n), ut(y)
				},
				A = function(n) {
					var u = N(n),
						p = u === null ? void 0 : y.widgetMap.get(u);
					if (u === null || p === void 0) {
						x("Nothing to remove found for the provided container.");
						return
					}
					F(u, p)
				},
				L = function() {
					var n = Oe(y.widgetMap.keys()),
						u = !0,
						p = !1,
						d = void 0;
					try {
						for (var o = n[Symbol.iterator](), c; !(u = (c = o.next()).done); u = !0) {
							var k = c.value,
								C = y.widgetMap.get(k),
								O = Q(k);
							C !== void 0 && (ot(O), qe(C), E(Y.UpgradeReload, O))
						}
					} catch (M) {
						p = !0, d = M
					} finally {
						try {
							!u && o.return != null && o.return()
						} finally {
							if (p) throw d
						}
					}
				},
				I = function(n, u, p) {
					var d, o, c, k, C, O, M, z, le, de, ie, Ne = $(),
						K, re;
					if (typeof n == "string") {
						var Z = Tt(n);
						if (Z === null) {
							var ve;
							try {
								ve = document.querySelector(n)
							} catch (Ha) {
								b('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
							}
							ve === null && b('Unable to find a container for "'.concat(n, '"'), 3585), K = ve
						} else {
							var ce, ee = y.widgetMap.get(Z),
								ne = (ce = ee == null ? void 0 : ee.wrapper.parentElement) !== null && ce !== void 0 ? ce : null;
							if (ne !== null && Dn(p, ee)) K = ne, re = {
								widget: ee,
								widgetId: Z
							};
							else return S(p, ee, u), Q(Z)
						}
					} else R(n, HTMLElement) ? K = n : b('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					if (re === void 0) {
						var Le = Tt(K);
						if (Le !== null) {
							var we = y.widgetMap.get(Le);
							if (we !== void 0 && Dn(p, we) && we.wrapper.parentElement === K) re = {
								widget: we,
								widgetId: Le
							};
							else return S(p, we, u), Q(Le)
						}
					}
					var Je = mr();
					if (Je === void 0 || Je === "") return b("Turnstile cannot determine its page location", 3607);
					var Pe = Ba(K);
					if (Pe !== void 0) {
						var h = Object.assign(Pe, u),
							Re = h.action,
							Ie = h.cData,
							je = h.chlPageData,
							me = h.sitekey;
						h.theme = (d = h.theme) !== null && d !== void 0 ? d : gt.Auto, h.retry = (o = h.retry) !== null && o !== void 0 ? o : ht.Auto, h.execution = (c = h.execution) !== null && c !== void 0 ? c : et.Render, h.appearance = (k = h.appearance) !== null && k !== void 0 ? k : be.Always, h["retry-interval"] = Ln(h["retry-interval"], Wr), h["expiry-interval"] = Ln(h["expiry-interval"], (Zr - en) * 1e3), h.size = (C = h.size) !== null && C !== void 0 ? C : X.Normal;
						var Dt = h.callback,
							st = h["expired-callback"],
							Ut = h["timeout-callback"],
							ze = h["after-interactive-callback"],
							Wt = h["before-interactive-callback"],
							ft = h["error-callback"],
							Ge = h["unsupported-callback"];
						typeof me != "string" && b('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof me == "undefined" ? "undefined" : P(me), '"'), 3588), On(me) || b('Invalid input for parameter "sitekey", got "'.concat(me, '"'), 3589), or(h.size) || b('Invalid type for parameter "size", expected normal|compact, got "'.concat(String(h.size), '" ').concat(P(h.size)), 3590), er(h.theme) || b('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(String(h.theme), '" ').concat(P(h.theme)), 3591), tr(h.retry) || b('Invalid type for parameter "retry", expected never|auto, got "'.concat(String(h.retry), '" ').concat(P(h.retry)), 3592), (h.language === void 0 || h.language === "") && (h.language = "auto"), dr(h.language) || (x('Invalid language value: "'.concat(h.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), h.language = "auto"), cr(h.appearance) || b('Unknown appearance value: "'.concat(String(h.appearance), ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), sr(h.execution) || b('Unknown execution value: "'.concat(String(h.execution), ", expected either: 'render' or 'execute'."), 3601), rr(h["retry-interval"]) || b('Invalid retry-interval value: "'.concat(h["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), nr(h["expiry-interval"]) || b('Invalid expiry-interval value: "'.concat(h["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						var ge = (O = h["refresh-expired"]) !== null && O !== void 0 ? O : We.Auto;
						ur(ge) ? h["refresh-expired"] = ge : b('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(String(ge), '" ').concat(typeof ge == "undefined" ? "undefined" : P(ge)), 3603);
						var xe = (M = h["refresh-timeout"]) !== null && M !== void 0 ? M : Ze.Auto;
						lr(xe) ? h["refresh-timeout"] = xe : b('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(String(xe), '" ').concat(typeof xe == "undefined" ? "undefined" : P(xe)), 3603), ar(Re) || b('Invalid input for optional parameter "action", got "'.concat(Re, '"'), 3604), ir(Ie) || b('Invalid input for optional parameter "cData", got "'.concat(Ie, '"'), 3605);
						var G = document.createElement("iframe"),
							Te = document.createElement("div"),
							pt = Te.attachShadow({
								mode: "closed"
							}),
							Fe = m(),
							Xe = Q(Fe),
							oe = [],
							Ae = h.execution === et.Render;
						Ae && oe.push(bt.Execute), y.lastWidgetIdx++;
						var Vt = {},
							Ye = qt(Se({
								action: Re,
								assetCtxCallback: h._acCb,
								autoFeedbackSent: !1,
								cData: Ie,
								cbAfterInteractive: ze,
								cbBeforeInteractive: Wt,
								cbError: ft,
								cbExpired: st,
								cbSuccess: Dt,
								cbTimeout: Ut,
								cbUnsupported: Ge,
								chlPageData: je,
								feedbackOpen: !1,
								idx: y.lastWidgetIdx,
								isComplete: !1,
								isExecuted: Ae,
								isExecuting: Ae,
								isExpired: !1,
								isFailed: !1,
								isInitialized: !1,
								isOverrunning: !1,
								isResetting: !1,
								isStale: !1,
								msgQueue: oe,
								params: h,
								rcV: ye,
								renderSource: p,
								responseElementsBuilt: !1,
								shadow: pt,
								watchcat: {
									lastAckedSeq: 0,
									missingWidgetWarning: !1,
									overrunBeginSeq: 0,
									seq: 0
								}
							}, Vt), {
								widgetInitStartTimeTsMs: 0,
								widgetParamsStartTimeTsMs: 0,
								widgetRenderEndTimeTsMs: 0,
								widgetRenderStartTimeTsMs: Ne,
								wrapper: Te
							});
						y.widgetMap.set(Fe, Ye), Qt(y);
						var te = y.widgetMap.get(Fe);
						te === void 0 && b("Turnstile Initialization Error ", 3606), te.chlPageData !== void 0 && te.chlPageData !== "" && hr(), G.style.display = "none", G.style.border = "none", G.style.overflow = "hidden";
						var Er = jt(Fe, me, h, ye, !1, "g", Y.New, y.scriptUrlParsed, fr(te));
						te.iframeOrigin = Ve(Er), G.setAttribute("src", Er), Wn(G, te);
						var wr = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad", "xr-spatial-tracking"];
						return H((z = (ie = document.featurePolicy) === null || ie === void 0 || (de = ie.features) === null || de === void 0 ? void 0 : de.call(ie)) !== null && z !== void 0 ? z : [], Bt) && wr.push(Bt), G.setAttribute("allow", wr.join("; ")), G.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), G.id = Xe, G.tabIndex = (le = h.tabindex) !== null && le !== void 0 ? le : 0, G.title = "Widget containing a Cloudflare security challenge", pt.appendChild(G), Jn(te, Xe), re && F(re.widgetId, re.widget), K.appendChild(Te), te.widgetRenderEndTimeTsMs = $(), Xe
					}
				},
				pe = function(n, u) {
					return I(n, u, "explicit")
				},
				ue = function() {
					var n = [Nr, Lr];
					y.isRecaptchaCompatibilityMode && n.push(Pr), document.querySelectorAll(n.join(", ")).forEach(function(u) {
						I(u, void 0, "implicit")
					})
				},
				W = function() {
					var n, u = -1,
						p = !0,
						d = !1,
						o = void 0;
					try {
						for (var c = y.widgetMap[Symbol.iterator](), k; !(p = (k = c.next()).done); p = !0) {
							var C = Qe(k.value, 2),
								O = C[0],
								M = C[1];
							u < M.idx && (n = O, u = M.idx)
						}
					} catch (z) {
						d = !0, o = z
					} finally {
						try {
							!p && c.return != null && c.return()
						} finally {
							if (d) throw o
						}
					}
					return u === -1 && b("Could not find widget", 43778), n
				},
				T = Va(),
				V = function(n) {
					var u = Reflect.get(n, "source");
					if (u === J) {
						var p = Reflect.get(n, "widgetId");
						if (!(typeof p != "string" || p === "" || !y.widgetMap.has(p))) {
							var d = Q(p),
								o = y.widgetMap.get(p);
							if (o !== void 0) switch (n.event) {
								case "init": {
									o.widgetInitStartTimeTsMs = $(), o.kills = n.kills;
									var c = o.shadow.querySelector("#".concat(d));
									R(c, HTMLElement) || b("Cannot initialize Widget, Element not found (#".concat(d, ")."), 3074), o.mode = n.mode, o.nextRcV = n.nextRcV, o.mode === he.Invisible && o.params["refresh-expired"] === We.Manual && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(We.Auto, "' or '").concat(We.Never, ".'")), o.mode !== he.Managed && o.params["refresh-timeout"] !== Ze.Auto && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), o.params.appearance === be.Always || o.isExecuting && o.params.appearance === be.Execute ? At(c, o) : Vn(c), c.style.display = "";
									var k = Me(o, d);
									k || b("Received state for an unknown widget: ".concat(n.widgetId), 3078), se(k, {
										event: "init",
										source: J,
										widgetId: n.widgetId
									}, o.iframeOrigin);
									break
								}
								case "translationInit": {
									var C = o.shadow.querySelector("#".concat(d));
									R(C, HTMLElement) || b("Cannot initialize Widget, Element not found (#".concat(d, ")."), 3074);
									var O = new Map;
									o.displayLanguage = n.displayLanguage, o.displayRtl = n.displayRtl, Object.keys(n.translationData).forEach(function(te) {
										O.set(te, n.translationData[te])
									}), Na(C, O);
									break
								}
								case "languageUnsupported": {
									x("Language ".concat(o.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), o.displayLanguage = n.fallback;
									break
								}
								case "reject": {
									var M = o.shadow.querySelector("#".concat(d));
									o.isExecuting = !1, R(M, HTMLElement) || b("Cannot initialize Widget, Element not found (#".concat(d, ")."), 3075);
									var z = Reflect.get(n, "reason");
									if (z === "unsupported_browser") {
										var le;
										(le = o.cbUnsupported) === null || le === void 0 || le.call(o)
									}
									break
								}
								case "food": {
									n.seq > o.watchcat.lastAckedSeq && (o.watchcat.lastAckedSeq = n.seq);
									break
								}
								case "overrunBegin": {
									o.isOverrunning = !0, o.watchcat.overrunBeginSeq = o.watchcat.lastAckedSeq;
									break
								}
								case "overrunEnd": {
									o.isOverrunning = !1;
									break
								}
								case "complete": {
									if (s(o, ye, n.widgetId), o.response = n.token, n.aC !== void 0 && n.aC !== "") {
										var de;
										(de = o.assetCtxCallback) === null || de === void 0 || de.call(o, n.aC)
									}
									if (n.scs !== void 0 && n.scs !== "" && !He("scs", o) && (o.scs = n.scs, o.params["session-continuity-persist"] === !0 && !He("scs_persist", o))) {
										var ie = o.params.sitekey;
										if (ie !== null && ie !== "") {
											var Ne = "".concat(Ht).concat(ie);
											try {
												localStorage.setItem(Ne, n.scs)
											} catch (te) {}
										}
									}
									n.sToken !== void 0 && n.sToken !== "" ? e(o, n.widgetId, d, n.token, n.sToken, n.chlId) : a(o, d, !1);
									break
								}
								case "fail": {
									var K = Reflect.get(n, "rcV");
									if (typeof K == "string" && K !== "" && s(o, K, p), n.cfChlOut !== void 0 && n.cfChlOut !== "" && (o.cfChlOut = n.cfChlOut), n.cfChlOutS !== void 0 && n.cfChlOutS !== "" && (o.cfChlOutS = n.cfChlOutS), n.code !== void 0 && n.code !== 0 && (o.errorCode = n.code), n.aC !== void 0 && n.aC !== "") {
										var re;
										(re = o.assetCtxCallback) === null || re === void 0 || re.call(o, n.aC)
									}
									o.isExecuting = !1, o.isFailed = !0, o.isInitialized = !0, n.frMd !== void 0 && n.frMd !== "" && (o.frMd = n.frMd), vr(o, d);
									var Z = o.cbError,
										ve = n.code === _t || n.code === xt,
										ce = n.code !== tn;
									if (ve) {
										var ee = Me(o, d);
										ee && se(ee, {
											event: "forceFail",
											source: J,
											widgetId: n.widgetId
										}, o.iframeOrigin)
									}
									if (Z !== void 0) {
										var ne;
										Z(String((ne = n.code) !== null && ne !== void 0 ? ne : nn)) === !0 ? ce && o.params.retry === ht.Auto && !o.isResetting && t(o, d, ve) : (n.code !== void 0 && n.code !== 0 && x("Error: ".concat(n.code, ".")), ce && t(o, d, ve))
									} else n.code !== void 0 && n.code !== 0 ? (ce && t(o, d, ve), b("Error: ".concat(n.code), 3076)) : t(o, d, !1);
									break
								}
								case "feedbackInit": {
									var Le = Pt(o, d).targetWindow;
									if (Le) {
										x("A feedback report form is already opened for this widget.");
										return
									}
									if (o.autoFeedbackSent !== !0 && !He("feedback-report-auto-submit", o)) {
										var we = hn(o, n.feedbackOrigin, n.rayId, o.frMd, y.scriptUrlParsed);
										we && (o.autoFeedbackSent = !0)
									}
									if (o.feedbackOpen = !0, o.retryTimeout !== void 0) {
										var Je, Pe;
										clearTimeout(o.retryTimeout), o.retryTimeout = void 0, (Pe = (Je = o).pendingRetry) !== null && Pe !== void 0 || (Je.pendingRetry = {
											crashed: !1
										})
									}
									bn(), window.postMessage({
										event: "feedbackOpen",
										source: J,
										widgetId: n.widgetId
									}, "*"), Kt(d, o, n.feedbackOrigin, y.scriptUrlParsed, function() {
										i(o, d, n.widgetId)
									});
									break
								}
								case "requestFeedbackData": {
									var h = Me(o, d);
									R(h, HTMLElement) || b("Received state for an unknown widget: #".concat(d, " / ").concat(n.widgetId), 3078), se(h, {
										event: "requestTurnstileResults",
										source: J,
										widgetId: n.widgetId
									}, o.iframeOrigin);
									break
								}
								case "turnstileResults": {
									var Re, Ie, je, me = Pt(o, d),
										Dt = me.targetOrigin,
										st = me.targetWindow;
									if (!st) break;
									Gt(st, {
										cfChlOut: (Re = o.cfChlOut) !== null && Re !== void 0 ? Re : n.cfChlOut,
										cfChlOutS: (Ie = o.cfChlOutS) !== null && Ie !== void 0 ? Ie : n.cfChlOutS,
										errorCode: o.errorCode,
										event: "feedbackData",
										frMd: (je = o.frMd) !== null && je !== void 0 ? je : n.frMd,
										mode: n.mode,
										rayId: n.rayId,
										rcV: n.rcV,
										sitekey: n.sitekey,
										source: J,
										widgetId: n.widgetId
									}, Dt);
									break
								}
								case "closeFeedbackReportIframe": {
									var Ut = Pt(o, d).targetWindow;
									Ut || b("Received state for an unknown widget: ".concat(n.widgetId), 3078), ot("".concat(d, "-fr")), qe(o), i(o, d, n.widgetId);
									break
								}
								case "tokenExpired": {
									var ze, Wt = n.token;
									o.isExpired = !0, (ze = o.cbExpired) === null || ze === void 0 || ze.call(o, Wt), o.params["refresh-expired"] === We.Auto && !o.isResetting && E(Y.AutoExpire, d);
									break
								}
								case "interactiveTimeout": {
									s(o, ye, n.widgetId), vr(o, d);
									var ft = o.cbTimeout;
									if (ft ? ft() : o.params["refresh-timeout"] === Ze.Never && !o.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), o.params["refresh-timeout"] === Ze.Auto && !o.isResetting) {
										var Ge = o.cbAfterInteractive;
										Ge == null || Ge(), E(Y.AutoTimeout, d)
									}
									break
								}
								case "refreshRequest": {
									s(o, ye, n.widgetId), ot(d), qe(o), E(Y.ManualRefresh, d);
									break
								}
								case "reloadRequest": {
									s(o, n.nextRcV, n.widgetId), E(Ta(n.trigger) ? n.trigger : Y.Api, d);
									break
								}
								case "reloadApiJsRequest": {
									if (He("reload", o)) {
										dt(n.widgetId);
										break
									}
									if (Ft !== void 0) {
										dt(n.widgetId);
										break
									}
									if (ka()) {
										dt(n.widgetId);
										break
									}
									Gn() ? (y.apiJsMismatchReloadAttempts++, Ca(), Ma(n.widgetId)) : dt(n.widgetId);
									break
								}
								case "interactiveBegin": {
									var ge, xe = o.shadow.querySelector("#".concat(d));
									R(xe, HTMLElement) || b("Cannot layout widget, Element not found (#".concat(d, ")."), 3076), (ge = o.cbBeforeInteractive) === null || ge === void 0 || ge.call(o), o.params.appearance === be.InteractionOnly && At(xe, o);
									break
								}
								case "interactiveEnd": {
									var G;
									(G = o.cbAfterInteractive) === null || G === void 0 || G.call(o);
									break
								}
								case "widgetStale": {
									o.isStale = !0;
									break
								}
								case "requestExtraParams": {
									o.widgetParamsStartTimeTsMs = $();
									var Te = Me(o, d);
									Te || b("Received state for an unknown widget: ".concat(n.widgetId), 3078), o.isResetting = !1;
									var pt = {},
										Fe = $(),
										Xe = {
											"d.cT": f(),
											"ht.atrs": l(document.body.parentElement),
											"pg.ref": document.referrer,
											pi: {
												ffp: Gr(o.wrapper),
												ii: window.self !== window.top,
												lH: window.location.href,
												mL: document.querySelectorAll("meta").length,
												pfp: Qr(document, qr, Br, pr),
												sL: document.scripts.length,
												sR: o.wrapper.shadowRoot === null,
												ssL: Ia(document, pr),
												t: "".concat(document.title.length, "|").concat($r(document.title)),
												tL: Kr(document, pr),
												wp: zr(o.wrapper),
												xp: jr(o.wrapper).slice(0, Hr)
											},
											"w.iW": window.innerWidth
										},
										oe = o.scs;
									if ((oe === void 0 || oe === "") && o.params["session-continuity-persist"] === !0 && !He("scs_persist", o)) {
										var Ae = o.params.sitekey;
										if (Ae !== null && Ae !== "") {
											var Vt = "".concat(Ht).concat(Ae);
											try {
												var Ye;
												oe = (Ye = localStorage.getItem(Vt)) !== null && Ye !== void 0 ? Ye : void 0
											} catch (te) {}
										}
									}
									oe !== void 0 && oe !== "" && oe.length > Jr && (oe = void 0), se(Te, Se({
										action: o.action,
										apiJsMismatchReloadAttempts: y.apiJsMismatchReloadAttempts,
										apiJsMismatchReloadCompletedCount: y.apiJsMismatchReloadCompletedCount,
										apiJsResourceTiming: T === void 0 ? void 0 : Aa(T),
										appearance: o.params.appearance,
										au: y.scriptUrl,
										cData: o.cData,
										ch: "37d84357f321",
										chlPageData: o.chlPageData,
										event: "extraParams",
										execution: o.params.execution,
										"expiry-interval": o.params["expiry-interval"],
										language: o.params.language,
										rcV: o.rcV,
										"refresh-expired": o.params["refresh-expired"],
										"refresh-timeout": o.params["refresh-timeout"],
										retry: o.params.retry,
										"retry-interval": o.params["retry-interval"],
										scs: oe,
										source: J,
										timeExtraParamsMs: $() - o.widgetRenderStartTimeTsMs,
										timeInitMs: o.widgetInitStartTimeTsMs - o.widgetRenderEndTimeTsMs,
										timeLoadInitMs: $() - y.turnstileLoadInitTimeTsMs,
										timeParamsMs: o.widgetParamsStartTimeTsMs - o.widgetInitStartTimeTsMs,
										timeRenderMs: o.widgetRenderEndTimeTsMs - o.widgetRenderStartTimeTsMs,
										timeTiefMs: $() - Fe,
										upgradeAttempts: y.upgradeAttempts,
										upgradeCompletedCount: y.upgradeCompletedCount,
										url: mr(),
										wPr: Xe,
										widgetId: n.widgetId
									}, pt), o.iframeOrigin), v(o, n.widgetId, Te), o.isInitialized = !0;
									break
								}
								default:
									break
							}
						}
					}
				},
				q = function(n) {
					if (Da(n)) {
						var u = n.data;
						if (!Ua(n)) {
							x("Ignored message from wrong origin: ".concat(n.origin, "."));
							return
						}
						if (!(u.widgetId === "" || !y.widgetMap.has(u.widgetId))) {
							var p = Q(u.widgetId),
								d = y.widgetMap.get(u.widgetId);
							if (d !== void 0) {
								if (!Wa(n, d, p)) {
									x("Ignored message from unexpected source for event: ".concat(u.event, "."));
									return
								}
								V(u)
							}
						}
					}
				};
			y.msgHandler = q, y.internalMsgHandler = V, window.addEventListener("message", q);

			function N(_) {
				var n;
				if (typeof _ == "string") {
					var u = Tt(_);
					if (u !== null) return u;
					try {
						var p = document.querySelector(_);
						return p === null ? null : N(p)
					} catch (o) {
						return null
					}
				}
				if (R(_, Element)) return Tt(_);
				var d = !!_;
				return d || y.widgetMap.size === 0 ? null : (n = W()) !== null && n !== void 0 ? n : null
			}
			var j = {},
				ae = {
					showFeedback: function(n) {
						var u = N(n);
						if (u !== null) {
							var p = Q(u),
								d = y.widgetMap.get(u);
							d !== void 0 && Kt(p, d, an.Custom, y.scriptUrlParsed)
						}
					}
				},
				B = qt(Se({}, j), {
					_private: ae,
					execute: function(n, u) {
						var p = N(n);
						if (p === null) {
							var d;
							u === void 0 && b("Please provide 2 parameters to execute: container and parameters", 43521);
							var o = pe(n, u);
							o == null && b("Failed to render widget", 43522), p = (d = nt(o)) !== null && d !== void 0 ? d : N(n), p === null && b("Failed to render widget", 43522)
						}
						var c = y.widgetMap.get(p);
						if (c !== void 0) {
							w(c, u);
							var k = Q(p);
							if (c.isExecuting) {
								x("Call to execute() on a widget that is already executing (".concat(k, "), consider using reset() before execute()."));
								return
							}
							if (c.isExecuting = !0, c.response !== void 0 && c.response !== "") {
								var C;
								c.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(k, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (C = c.cbSuccess) === null || C === void 0 || C.call(c, c.response, !1);
								return
							}
							c.isExpired && x("Call to execute on a expired-widget (".concat(k, "), consider using reset() before.")), c.isStale && (E(Y.StaleExecute, k), c.isExecuting = !0), (c.isResetting || !c.isInitialized) && c.msgQueue.push(bt.Execute), c.isExecuted = !0;
							var O = Me(c, k);
							if (O || (c.isExecuting = !1, b("Widget ".concat(k, " to execute was not found"), 43522)), c.isResetting || !c.isInitialized) return;
							if (c.msgQueue.length > 0) {
								v(c, p, O), c.params.appearance === be.Execute && At(O, c);
								return
							}
							c.params.appearance === be.Execute && At(O, c), g(c) && se(O, {
								event: "execute",
								source: J,
								widgetId: p
							}, c.iframeOrigin)
						}
					},
					getResponse: function(n) {
						var u;
						if (typeof n == "undefined") {
							var p = W();
							if (p !== void 0) {
								var d = y.widgetMap.get(p);
								return (d == null ? void 0 : d.isExpired) === !0 && x("Call to getResponse on a widget that expired, consider refreshing the widget."), d == null ? void 0 : d.response
							}
							b("Could not find a widget", 43794)
						}
						var o = N(n);
						return o === null && b("Could not find widget for provided container", 43778), (u = y.widgetMap.get(o)) === null || u === void 0 ? void 0 : u.response
					},
					isExpired: function(n) {
						var u, p;
						if (typeof n == "undefined") {
							var d = W();
							if (d !== void 0) {
								var o, c;
								return (o = (c = y.widgetMap.get(d)) === null || c === void 0 ? void 0 : c.isExpired) !== null && o !== void 0 ? o : !1
							}
							b("Could not find a widget", 43794)
						}
						var k = N(n);
						return k === null && b("Could not find widget for provided container", 43778), (u = (p = y.widgetMap.get(k)) === null || p === void 0 ? void 0 : p.isExpired) !== null && u !== void 0 ? u : !1
					},
					ready: function(n) {
						if (y.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), b("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && b('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : P(n), '"'), 3841), y.isReady) {
							n();
							return
						}
						xr.push(n)
					},
					remove: A,
					render: pe,
					reset: U
				});
			return Object.defineProperty(B, qn, {
				configurable: !0,
				enumerable: !1,
				value: {
					clearPendingApiJsReloadRequest: function() {
						br()
					},
					rearmTimedUpgrade: function() {
						_r()
					},
					rejectPendingApiJsReloadRequest: function() {
						Hn()
					},
					reloadAfterUpgrade: function() {
						L()
					}
				}
			}), {
				runImplicitRender: ue,
				turnstile: B
			}
		})(),
		qa = function() {
			zn.runImplicitRender()
		},
		Ot = zn.turnstile;

	function Ba(e) {
		var t, r, i = e.getAttribute("data-sitekey"),
			a = {
				sitekey: i
			},
			l = e.getAttribute("data-tabindex");
		l !== null && l !== "" && (a.tabindex = Number.parseInt(l, 10));
		var f = e.getAttribute("data-theme");
		f !== null && f !== "" && (er(f) ? a.theme = f : x('Unknown data-theme value: "'.concat(f, '".')));
		var s = e.getAttribute("data-size");
		if (s !== null && s !== "" && (or(s) ? a.size = s : x('Unknown data-size value: "'.concat(s, '".'))), 0) var m;
		var v = e.getAttribute("data-action");
		typeof v == "string" && (a.action = v);
		var g = e.getAttribute("data-cdata");
		typeof g == "string" && (a.cData = g);
		var w = e.getAttribute("data-retry");
		w !== null && w !== "" && (tr(w) ? a.retry = w : x('Invalid data-retry value: "'.concat(w, ", expected either 'never' or 'auto'\".")));
		var S = e.getAttribute("data-retry-interval");
		if (S !== null && S !== "") {
			var U = Number.parseInt(S, 10);
			rr(U) ? a["retry-interval"] = U : x('Invalid data-retry-interval value: "'.concat(S, ', expected an integer value > 0 and < 900000".'))
		}
		var E = e.getAttribute("data-expiry-interval");
		if (E !== null && E !== "") {
			var F = Number.parseInt(E, 10);
			nr(F) ? a["expiry-interval"] = F : x('Invalid data-expiry-interval value: "'.concat(F, ', expected an integer value > 0 and < 360000".'))
		}
		var A = e.getAttribute("data-refresh-expired");
		A !== null && A !== "" && (ur(A) ? a["refresh-expired"] = A : x('Unknown data-refresh-expired value: "'.concat(A, ", expected either: 'never', 'auto' or 'manual'.")));
		var L = e.getAttribute("data-refresh-timeout");
		L !== null && L !== "" && (lr(L) ? a["refresh-timeout"] = L : x('Unknown data-refresh-timeout value: "'.concat(L, ", expected either: 'never', 'auto' or 'manual'.")));
		var I = e.getAttribute("data-language");
		I !== null && I !== "" && (dr(I) ? a.language = I : x('Invalid data-language value: "'.concat(I, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function pe(B) {
			var _ = e.getAttribute(B);
			if (!(_ === null || _ === "")) {
				var n = yr(_);
				return n === void 0 ? void 0 : function() {
					for (var u = arguments.length, p = new Array(u), d = 0; d < u; d++) p[d] = arguments[d];
					return n.apply(void 0, Oe(p))
				}
			}
		}
		var ue = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		ue.forEach(function(B) {
			Object.assign(a, De({}, B, pe("data-".concat(B))))
		}), a["feedback-enabled"] = (t = St(e.getAttribute("data-feedback-enabled"), !0, function(B) {
			return 'Invalid data-feedback-enabled value: "'.concat(B, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && t !== void 0 ? t : !0, a["response-field"] = (r = St(e.getAttribute("data-response-field"), !0, function(B) {
			return 'Invalid data-response-field value: "'.concat(B, "\", expected either: 'true' or 'false'. Value is ignored.")
		})) !== null && r !== void 0 ? r : !0;
		var W = e.getAttribute("data-response-field-name");
		W !== null && W !== "" && (a["response-field-name"] = W);
		var T = e.getAttribute("data-execution");
		T !== null && T !== "" && (sr(T) ? a.execution = T : x('Unknown data-execution value: "'.concat(T, ", expected either: 'render' or 'execute'.")));
		var V = e.getAttribute("data-appearance");
		V !== null && V !== "" && (cr(V) ? a.appearance = V : x('Unknown data-appearance value: "'.concat(V, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var q = e.getAttribute("data-offlabel-show-privacy"),
			N = St(q, void 0, function(B) {
				return 'Invalid data-offlabel-show-privacy value: "'.concat(B, '", expected "true" or "false".')
			});
		typeof N == "boolean" && (a["offlabel-show-privacy"] = N);
		var j = e.getAttribute("data-offlabel-show-help"),
			ae = St(j, void 0, function(B) {
				return 'Invalid data-offlabel-show-help value: "'.concat(B, '", expected "true" or "false".')
			});
		return typeof ae == "boolean" && (a["offlabel-show-help"] = ae), a
	}

	function Gn() {
		if (hr(), Bn()) return !1;
		var e = An(window.turnstile, y);
		return e ? !0 : (_r(), !1)
	}
	Ce = !1, D = mn(), y.scriptWasLoadedAsync = (kt = D == null ? void 0 : D.loadedAsync) !== null && kt !== void 0 ? kt : !1, y.scriptUrl = (Ct = D == null ? void 0 : D.src) !== null && Ct !== void 0 ? Ct : "undefined", y.scriptUrlParsed = D == null ? void 0 : D.url, (D == null ? void 0 : D.params) !== void 0 && D.params !== null && (Be = D.params.get("compat"), (Be == null ? void 0 : Be.toLowerCase()) === "recaptcha" ? typeof window.grecaptcha == "undefined" ? (x("Compatibility layer enabled."), y.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Ot) : x("grecaptcha is already defined. The compatibility layer will not be enabled.") : Be !== null && x('Unknown value for api.js?compat: "'.concat(Be, '", ignoring.')), D.params.forEach(function(e, t) {
		H(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || x('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Ce = D.params.get("_upgrade") === "true", _e = D.params.get("onload"), _e !== null && _e !== "" && !Ce && setTimeout(function() {
		var e = yr(_e);
		e === void 0 ? (x("Unable to find onload callback '".concat(_e, "' immediately after loading, expected 'function', got '").concat(P(gr(_e)), "'.")), setTimeout(function() {
			var t = yr(_e);
			t === void 0 ? x("Unable to find onload callback '".concat(_e, "' after 1 second, expected 'function', got '").concat(P(gr(_e)), "'.")) : t()
		}, 1e3)) : e()
	}, 0)), lt = "turnstile" in window, fe = lt ? Fn(window.turnstile) : void 0, Mt = lt && Ce ? Sn(window.turnstile, y, function() {
		var e;
		window.turnstile = Ot, (e = Fn(Ot)) === null || e === void 0 || e.reloadAfterUpgrade(), Qt(y)
	}) : !1, Mt && (fe == null || fe.clearPendingApiJsReloadRequest()), lt && Ce && !Mt ? (x("Turnstile upgrade state was missing. Keeping the existing Turnstile instance."), fe == null || fe.rejectPendingApiJsReloadRequest(), fe == null || fe.rearmTimedUpgrade()) : lt && !Ce ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Mt || (window.turnstile = Ot), Ce || ((D == null || (Nt = D.params) === null || Nt === void 0 ? void 0 : Nt.get("render")) !== "explicit" && xr.push(qa), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Un, 0) : window.addEventListener("DOMContentLoaded", Un)), _r());
	var kt, Ct, Ce, D, Be, _e, lt, fe, Mt, Nt;
})();