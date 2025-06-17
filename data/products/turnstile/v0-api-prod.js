"use strict";
(function() {
	function qt(e, t, a, o, c, l, v) {
		try {
			var h = e[l](v),
				s = h.value
		} catch (p) {
			a(p);
			return
		}
		h.done ? t(s) : Promise.resolve(s).then(o, c)
	}

	function zt(e) {
		return function() {
			var t = this,
				a = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(t, a);

				function v(s) {
					qt(l, o, c, v, h, "next", s)
				}

				function h(s) {
					qt(l, o, c, v, h, "throw", s)
				}
				v(void 0)
			})
		}
	}

	function P(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : P(e, t)
	}

	function De(e, t, a) {
		return t in e ? Object.defineProperty(e, t, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = a, e
	}

	function Pe(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {
				return Object.getOwnPropertyDescriptor(a, c).enumerable
			}))), o.forEach(function(c) {
				De(e, c, a[c])
			})
		}
		return e
	}

	function Or(e, t) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function it(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Or(Object(t)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
		}), e
	}

	function Ht(e) {
		if (Array.isArray(e)) return e
	}

	function Bt(e, t) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				l = !1,
				v, h;
			try {
				for (a = a.call(e); !(c = (v = a.next()).done) && (o.push(v.value), !(t && o.length === t)); c = !0);
			} catch (s) {
				l = !0, h = s
			} finally {
				try {
					!c && a.return != null && a.return()
				} finally {
					if (l) throw h
				}
			}
			return o
		}
	}

	function Gt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ot(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
		return o
	}

	function Xt(e, t) {
		if (e) {
			if (typeof e == "string") return ot(e, t);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ot(e, t)
		}
	}

	function Ce(e, t) {
		return Ht(e) || Bt(e, t) || Xt(e, t) || Gt()
	}

	function F(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ve(e, t) {
		var a = {
				label: 0,
				sent: function() {
					if (l[0] & 1) throw l[1];
					return l[1]
				},
				trys: [],
				ops: []
			},
			o, c, l, v;
		return v = {
			next: h(0),
			throw: h(1),
			return: h(2)
		}, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
			return this
		}), v;

		function h(p) {
			return function(_) {
				return s([p, _])
			}
		}

		function s(p) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; v && (v = 0, p[0] && (a = 0)), a;) try {
				if (o = 1, c && (l = p[0] & 2 ? c.return : p[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, p[1])).done) return l;
				switch (c = 0, l && (p = [p[0] & 2, l.value]), p[0]) {
					case 0:
					case 1:
						l = p;
						break;
					case 4:
						return a.label++, {
							value: p[1],
							done: !1
						};
					case 5:
						a.label++, c = p[1], p = [0];
						continue;
					case 7:
						p = a.ops.pop(), a.trys.pop();
						continue;
					default:
						if (l = a.trys, !(l = l.length > 0 && l[l.length - 1]) && (p[0] === 6 || p[0] === 2)) {
							a = 0;
							continue
						}
						if (p[0] === 3 && (!l || p[1] > l[0] && p[1] < l[3])) {
							a.label = p[1];
							break
						}
						if (p[0] === 6 && a.label < l[1]) {
							a.label = l[1], l = p;
							break
						}
						if (l && a.label < l[2]) {
							a.label = l[2], a.ops.push(p);
							break
						}
						l[2] && a.ops.pop(), a.trys.pop();
						continue
				}
				p = t.call(e, a)
			} catch (_) {
				p = [6, _], c = 0
			} finally {
				o = l = 0
			}
			if (p[0] & 5) throw p[1];
			return {
				value: p[0] ? p[1] : void 0,
				done: !0
			}
		}
	}
	var Yt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Qt = 300020;
	var We = 300030;
	var Ue = 300031;
	var z;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(z || (z = {}));
	var M;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(M || (M = {}));
	var je;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(je || (je = {}));
	var ve;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(ve || (ve = {}));
	var me;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(me || (me = {}));
	var Z;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(Z || (Z = {}));
	var ce;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(ce || (ce = {}));
	var Q;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})(Q || (Q = {}));
	var ge;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(ge || (ge = {}));
	var ue;
	(function(e) {
		e.Execute = "execute"
	})(ue || (ue = {}));
	var H;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(H || (H = {}));
	var qe;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom"
	})(qe || (qe = {}));

	function L(e, t) {
		return e.indexOf(t) !== -1
	}

	function ct(e) {
		return L(["auto", "dark", "light"], e)
	}

	function ut(e) {
		return L(["auto", "never"], e)
	}

	function lt(e) {
		return e > 0 && e < 9e5
	}

	function st(e) {
		return e > 0 && e < 36e4
	}
	var kr = /^[0-9A-Za-z_-]{3,100}$/;

	function Kt(e) {
		return kr.test(e)
	}
	var Nr = /^[a-z0-9_-]{0,32}$/i;

	function dt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Nr.test(e)
	}
	var Mr = /^[a-z0-9_\-=]{0,255}$/i;

	function ft(e) {
		return e === void 0 ? !0 : typeof e == "string" && Mr.test(e)
	}

	function pt(e) {
		return L([M.Normal, M.Compact, M.Invisible, M.Flexible], e)
	}

	function vt(e) {
		return L(["auto", "manual", "never"], e)
	}

	function mt(e) {
		return L(["auto", "manual", "never"], e)
	}
	var Lr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function gt(e) {
		return e === "auto" || Lr.test(e)
	}

	function yt(e) {
		return L(["always", "execute", "interaction-only"], e)
	}

	function $t(e) {
		return L(["true", "false"], e)
	}

	function ht(e) {
		return L(["render", "execute"], e)
	}
	var Jt = 300,
		Zt = 10;

	function _t(e) {
		var t = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel)), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), t.size !== 0) return t.toString()
	}
	var ze = "cf-chl-widget-",
		W = "cloudflare-challenge",
		er = ".cf-turnstile",
		tr = ".cf-challenge",
		rr = ".g-recaptcha",
		bt = "cf_challenge_response",
		xt = "cf-turnstile-response",
		wt = "g-recaptcha-response",
		ar = 8e3,
		Et = "private-token",
		nr = 3,
		ir = 500,
		or = 500,
		K = "";
	var Fr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Dr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];

	function Tt(e, t) {
		var a = "https://challenges.cloudflare.com";
		if (t) {
			var o;
			a = (o = e["base-url"]) !== null && o !== void 0 ? o : a
		}
		return a
	}

	function Rt(e, t, a, o, c, l, v, h) {
		var s = Tt(a, c),
			p = l ? "h/".concat(l, "/") : "",
			_ = h ? "?".concat(h) : "",
			A = a["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(s, "/cdn-cgi/challenge-platform/").concat(p, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(A, "/").concat(v, "/").concat(a.size, "/").concat(a.language, "/").concat(_)
	}
	var St = function(e) {
			var t, a, o = window.innerWidth < 400,
				c = e.state !== ve.FailureFeedbackCode && (e.state === ve.FailureFeedback || e.state === ve.FailureHavingTroubles || !e.errorCode),
				l, v = L(Fr, (l = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				h, s = L(Dr, (h = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && h !== void 0 ? h : "nonexistent");
			return o ? Pr({
				isModeratelyVerbose: s,
				isVerboseLanguage: v,
				isSmallerFeedback: c
			}) : c && v ? "630px" : c && s ? "620px" : c ? "600px" : v ? "690px" : "680px"
		},
		Pr = function(e) {
			var t = e.isVerboseLanguage,
				a = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return a && t ? "660px" : a && o ? "620px" : a ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function He(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function cr(e, t) {
		if (!P(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function ee(e, t) {
		return ee = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, ee(e, t)
	}

	function ur(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && ee(e, t)
	}

	function Be() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Oe(e, t, a) {
		return Be() ? Oe = Reflect.construct : Oe = function(c, l, v) {
			var h = [null];
			h.push.apply(h, l);
			var s = Function.bind.apply(c, h),
				p = new s;
			return v && ee(p, v.prototype), p
		}, Oe.apply(null, arguments)
	}

	function le(e) {
		return le = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, le(e)
	}

	function lr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ge(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Ge = function(o) {
			if (o === null || !lr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return Oe(o, arguments, le(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ee(c, o)
		}, Ge(e)
	}

	function sr(e, t) {
		return t && (F(t) === "object" || typeof t == "function") ? t : He(e)
	}

	function dr(e) {
		var t = Be();
		return function() {
			var o = le(e),
				c;
			if (t) {
				var l = le(this).constructor;
				c = Reflect.construct(o, arguments, l)
			} else c = o.apply(this, arguments);
			return sr(this, c)
		}
	}
	var fr = function(e) {
		"use strict";
		ur(a, e);
		var t = dr(a);

		function a(o, c) {
			cr(this, a);
			var l;
			return l = t.call(this, o), De(He(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return a
	}(Ge(Error));

	function g(e, t) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new fr(a, t)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Xe(e) {
		return e.startsWith(ze) ? e.substring(ze.length) : null
	}

	function $(e) {
		return "".concat(ze).concat(e)
	}

	function At() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (P(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (P(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function pr() {
		var e = At();
		e || g("Could not find Turnstile script tag, some features may not be available", 43777);
		var t = e.src,
			a = {
				loadedAsync: !1,
				params: new URLSearchParams,
				src: t
			};
		(e.async || e.defer) && (a.loadedAsync = !0);
		var o = t.split("?");
		return o.length > 1 && (a.params = new URLSearchParams(o[1])), a
	}

	function U() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var It = function(e, t, a) {
			var o = Tt(t.params, !1),
				c = "h/".concat("g", "/"),
				l, v, h = "".concat(o, "/cdn-cgi/challenge-platform/").concat(c, "feedback-reports/").concat(Xe(e), "/").concat(t.displayLanguage, "/").concat((v = t.params.theme) !== null && v !== void 0 ? v : t.theme, "/").concat(a);
			if (window.top !== window.self) {
				window.open(h, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || g("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var s = document.createElement("div");
			s.style.position = "fixed", s.style.zIndex = "2147483646", s.style.width = "100vw", s.style.height = "100vh", s.style.top = "0", s.style.left = "0", s.style.transformOrigin = "center center", s.style.overflowX = "hidden", s.style.overflowY = "auto", s.style.background = "rgba(0,0,0,0.4)";
			var p = document.createElement("div");
			p.style.display = "table-cell", p.style.verticalAlign = "middle", p.style.width = "100vw", p.style.height = "100vh";
			var _ = document.createElement("div");
			_.className = "cf-turnstile-feedback", _.id = "cf-fr-id", _.style.width = "100vw", _.style.maxWidth = "450px", _.style.height = St(t), _.style.position = "relative", _.style.zIndex = "2147483647", _.style.backgroundColor = "#ffffff", _.style.borderRadius = "5px", _.style.left = "0px", _.style.top = "0px", _.style.overflow = "hidden", _.style.margin = "0px auto";
			var A = document.createElement("iframe");
			A.id = "".concat(e, "-fr"), A.setAttribute("src", h), A.setAttribute("allow", "cross-origin-isolated; fullscreen"), A.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), A.setAttribute("scrolling", "no"), A.style.borderWidth = "0px", A.style.width = "100%", A.style.height = "100%", A.style.overflow = "hidden";
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "img"), T.setAttribute("aria-label", "Close button icon"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", t.displayRtl ? T.style.left = "2px" : T.style.right = "6px", T.style.top = "5px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function() {
				var R;
				(R = s.parentNode) === null || R === void 0 || R.removeChild(s)
			}), T.addEventListener("keydown", function(R) {
				if (R.key === "Enter" || R.key === " ") {
					var X;
					(X = s.parentNode) === null || X === void 0 || X.removeChild(s)
				}
			});
			var k = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			k.setAttribute("ry", "12"), k.setAttribute("rx", "12"), k.setAttribute("cy", "12"), k.setAttribute("cx", "12"), k.setAttribute("fill", "none"), k.setAttribute("stroke-width", "0"), T.appendChild(k);
			var O = document.createElementNS("http://www.w3.org/2000/svg", "line");
			O.setAttribute("stroke-width", "1"), O.setAttribute("stroke", "#999"), O.setAttribute("fill", "none"), O.setAttribute("x1", "6"), O.setAttribute("x2", "18"), O.setAttribute("y1", "18"), O.setAttribute("y2", "5"), T.appendChild(O);
			var N = document.createElementNS("http://www.w3.org/2000/svg", "line");
			N.setAttribute("stroke-width", "1"), N.setAttribute("stroke", "#999"), N.setAttribute("fill", "none"), N.setAttribute("x1", "6"), N.setAttribute("x2", "18"), N.setAttribute("y1", "5"), N.setAttribute("y2", "18"), T.appendChild(N), _.appendChild(A), _.appendChild(T), p.appendChild(_), s.appendChild(p), s.addEventListener("click", function() {
				var R;
				(R = s.parentNode) === null || R === void 0 || R.removeChild(s)
			}), t.wrapper.parentNode.appendChild(s), window.addEventListener("resize", function() {
				_.style.height = St(t)
			})
		},
		vr = function(e) {
			var t, a, o;
			(o = document.getElementById(e)) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 || t.remove()
		};
	var Ct = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function mr(e) {
		if (!e) return "-";
		var t = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, l = a.previousElementSibling; l;) l.tagName === a.tagName && c++, l = l.previousElementSibling;
			var v = Ct(a.tagName.toLowerCase()),
				h = "".concat(v, "[").concat(c, "]");
			return t(a.parentNode, "/".concat(h).concat(o))
		};
		return t(e, "")
	}

	function gr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Vr = {
		text: "t",
		password: "p",
		email: "e",
		number: "n",
		checkbox: "c",
		radio: "r",
		submit: "s",
		button: "b",
		hidden: "h",
		select: "sl",
		textarea: "ta"
	};

	function yr(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var a = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = a.slice(0, 20).map(function(l) {
				return Vr[l.type] || "-"
			}).join(""),
			c = ["m:".concat(t.method || ""), "f:".concat(a.length), o].join("|");
		return c
	}

	function hr(e, t, a) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(A) {
					return c > t || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), v;
			(v = l.nextNode()) !== null && o.length < a;) {
			if (v.nodeType === Node.ELEMENT_NODE) {
				var h = v;
				o += "".concat(Ct(h.tagName.toLowerCase()));
				for (var s = 0; s < h.attributes.length; s++) {
					var p = h.attributes[s];
					o += "_".concat(Ct(p.name, 2))
				}
				o += ">"
			} else v.nodeType === Node.TEXT_NODE && (o += "-t");
			var _ = v.parentNode;
			for (c = 0; _ !== e && _ !== null;) c++, _ = _.parentNode
		}
		return o.substring(0, a)
	}

	function _r(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : F(e)));
		for (var t = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function br(e, t) {
		var a;
		t.upgradeAttempts++;
		var o = At();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var l = new URL(o.src),
				v = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), v.async = !0, c && (v.nonce = c), v.setAttribute("crossorigin", "anonymous"), v.src = l.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(v, o)
		}
	}

	function xr(e, t) {
		var a = e._pState;
		return a ? (t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeMs = U(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap, !0) : !1
	}
	var Wr = 900,
		Ur = 10,
		jr = 50;

	function qr(e) {
		e.watchCatSeq++;
		var t = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(t = (l = c.next()).done); t = !0) {
				var v = Ce(l.value, 2),
					h = v[0],
					s = v[1],
					p;
				s.watchcat.seq = e.watchCatSeq, s.watchcat.lastAckedSeq === 0 && (s.watchcat.lastAckedSeq = e.watchCatSeq);
				var _ = $(h);
				if (!_ || !s.shadow) {
					s.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(_, ", consider using turnstile.remove() to clean up a widget.")), s.watchcat.missingWidgetWarning = !0);
					continue
				}
				var A = s.shadow.querySelector("#".concat(_));
				if (!A) {
					s.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(_, ", consider using turnstile.remove() to clean up a widget.")), s.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(s.isComplete || s.isFailed || s.isResetting)) {
					var T = s.watchcat.seq - 1 - Ur,
						k = s.watchcat.lastAckedSeq < T,
						O = s.watchcat.seq - 1 - jr,
						N = s.isOverrunning && s.watchcat.overrunBeginSeq < O;
					if ((s.isExecuting || !s.isInitialized || s.isInitialized && !s.isStale && !s.isExecuted) && s.watchcat.lastAckedSeq !== 0 && k || N) {
						var R;
						s.watchcat.lastAckedSeq = 0, s.watchcat.seq = 0, s.isExecuting = !1;
						var X = function(r, u) {
							console.log("Turnstile Widget seem to have ".concat(r, ": "), u)
						};
						X(k ? "hung" : "crashed", h);
						var b = k ? We : Ue,
							n;
						if ((R = e.msgHandler) === null || R === void 0 || R.call(e, {
								data: {
									source: W,
									widgetId: h,
									code: b,
									event: "fail",
									rcV: (n = s.nextRcV) !== null && n !== void 0 ? n : K
								}
							}), 0) var i;
						continue
					}(p = A.contentWindow) === null || p === void 0 || p.postMessage({
						source: W,
						widgetId: h,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (r) {
			a = !0, o = r
		} finally {
			try {
				!t && c.return != null && c.return()
			} finally {
				if (a) throw o
			}
		}
	}

	function Ot(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			qr(e)
		}, Wr))
	}

	function kt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && clearInterval(e.watchCatInterval)
	}
	var y = {
		turnstileLoadInitTimeMs: U(),
		isRecaptchaCompatibilityMode: !1,
		scriptWasLoadedAsync: !1,
		scriptUrl: "undefined",
		isReady: !1,
		widgetMap: new Map,
		lastWidgetIdx: 0,
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		apiVersion: 1,
		watchCatInterval: null,
		watchCatSeq: 0
	};

	function Nt(e) {
		Sr(e, "")
	}

	function Ft() {
		var e = [er, tr];
		y.isRecaptchaCompatibilityMode && e.push(rr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Dt.render(t)
		})
	}
	var Pt = [];

	function wr() {
		y.isReady = !0;
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var o = Pt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var l = c.value;
				l()
			}
		} catch (v) {
			t = !0, a = v
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw a
			}
		}
	}

	function zr(e) {
		var t = y.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var a, o = (a = t.params["response-field"]) !== null && a !== void 0 ? a : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = t.params["response-field-name"]) !== null && l !== void 0 ? l : xt, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var v;
				if (typeof t.params["response-field-name"] != "string" && Ar((v = t.params.sitekey) !== null && v !== void 0 ? v : "")) {
					var h = document.createElement("input");
					h.type = "hidden", h.name = bt, h.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(h)
				}
			}
			if (y.isRecaptchaCompatibilityMode) {
				var s = document.createElement("input");
				s.type = "hidden", s.name = wt, s.id = "".concat(e, "_g_response"), t.wrapper.appendChild(s)
			}
		}
	}

	function Sr(e, t) {
		zr(e);
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && P(a, HTMLInputElement) && (a.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && P(o, HTMLInputElement) && (o.value = t), y.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && P(c, HTMLInputElement) && (c.value = t)
		}
	}

	function Mt(e, t) {
		var a = t.params,
			o = a.size,
			c = o === void 0 ? "normal" : o,
			l = t.mode;
		switch (l) {
			case z.NonInteractive:
			case z.Managed:
				switch (c) {
					case M.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case M.Invisible:
						g('Invalid value for parameter "size", expected "'.concat(M.Compact, '", "').concat(M.Flexible, '", or "').concat(M.Normal, '", got "').concat(c, '"'), 2817);
					case M.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case M.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case z.Invisible:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				g('Invalid value for parameter "mode", expected "'.concat(z.NonInteractive, '", "').concat(z.Managed, '" or "').concat(z.Invisible, '", got "').concat(l, '"'), 2818)
		}
	}

	function Er(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Hr(e, t) {
		var a = t.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Br(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Ar(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Tr() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Dt = function() {
		var e = function(n, i, r, u) {
				return O.apply(this, arguments)
			},
			t = function(n, i, r) {
				if (n.params.retry === me.Auto || r) {
					n.isExecuted && (n.msgQueue.push(ue.Execute), n.isExecuted = !0, n.isExecuting = !0);
					var u, d = r ? 0 : 1e3 * 2 + ((u = n.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
					n.retryTimeout = window.setTimeout(function() {
						var m = r ? H.CrashedRetry : H.FailureRetry;
						_(m, i)
					}, d)
				}
			},
			a = function(n, i, r) {
				var u;
				n.response === void 0 && g("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Sr(i, n.response), (u = n.cbSuccess) === null || u === void 0 || u.call(n, n.response, r)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, r = i.length, u = new Array(r), d = 0; d < r; d++) u[d] = i[d].name;
				return u
			},
			c = function(n, i, r) {
				if (n.rcV = i, 0) var u
			},
			l = function() {
				var n = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = n.length,
					r = "";
				do {
					r = "";
					for (var u = 0; u < 5; u++) r += n.charAt(Math.floor(Math.random() * i))
				} while (y.widgetMap.has(r));
				return r
			},
			v = function(n) {
				var i = !0,
					r = !1,
					u = void 0;
				try {
					for (var d = y.widgetMap[Symbol.iterator](), m; !(i = (m = d.next()).done); i = !0) {
						var w = Ce(m.value, 2),
							E = w[0],
							S = w[1];
						if (S.wrapper.parentElement === n) return E
					}
				} catch (I) {
					r = !0, u = I
				} finally {
					try {
						!i && d.return != null && d.return()
					} finally {
						if (r) throw u
					}
				}
				return null
			},
			h = function(n, i, r) {
				for (; n.msgQueue.length > 0;) {
					var u, d = n.msgQueue.pop();
					(u = r.contentWindow) === null || u === void 0 || u.postMessage({
						source: W,
						widgetId: i,
						event: d
					}, "*")
				}
			},
			s = function(n, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						u = [],
						d = !0,
						m = !1,
						w = void 0;
					try {
						for (var E = r[Symbol.iterator](), S; !(d = (S = E.next()).done); d = !0) {
							var I = S.value;
							i[I] && i[I] !== n.params[I] && u.push(I)
						}
					} catch (D) {
						m = !0, w = D
					} finally {
						try {
							!d && E.return != null && E.return()
						} finally {
							if (m) throw w
						}
					}
					u.length > 0 && g("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(u.join(",")), 3618), i.action && (dt(i.action) || g('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (ft(i.cData) || g('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			p = function(n) {
				_(H.Api, n)
			},
			_ = function(n, i) {
				var r = R(i);
				r || g("Nothing to reset found for provided container", 3329);
				var u = y.widgetMap.get(r);
				if (u) {
					var d;
					u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.params.execution === ge.Render && (u.msgQueue.push(ue.Execute), u.isExecuted = !0, u.isExecuting = !0);
					var m = $(r),
						w = u.shadow.querySelector("#".concat(m));
					(!m || !w) && g("Widget ".concat(r, " to reset was not found."), 3330), u.params.appearance === Q.InteractionOnly && Er(w), u.params.sitekey === null && g("Unexpected Error: Sitekey is null", 3347);
					var E = w.cloneNode(),
						S;
					E.src = Rt(r, u.params.sitekey, u.params, (S = u.rcV) !== null && S !== void 0 ? S : K, !1, "g", n, _t(u)), (d = w.parentNode) === null || d === void 0 || d.replaceChild(E, w), Nt(m), u.retryTimeout && window.clearTimeout(u.retryTimeout)
				} else g("Widget ".concat(r, " to reset was not found."), 3331)
			},
			A = function(n) {
				var i, r = R(n);
				if (!r || !y.widgetMap.has(r)) {
					x("Nothing to remove found for the provided container.");
					return
				}
				var u = $(r),
					d = ["input#".concat(u, "_response"), "input#".concat(u, "_legacy_response"), "input#".concat(u, "_g_response")];
				document.querySelectorAll(d.join(", ")).forEach(function(E) {
					return E.remove()
				});
				var m = y.widgetMap.get(r);
				m == null || m.shadow.querySelectorAll(d.join(", ")).forEach(function(E) {
					return E.remove()
				}), m == null || m.wrapper.remove();
				var w = (i = y.widgetMap.get(r)) === null || i === void 0 ? void 0 : i.retryTimeout;
				w && window.clearTimeout(w), y.widgetMap.delete(r), kt(y)
			},
			T = function(n, i) {
				var r, u, d = U(),
					m;
				if (typeof n == "string") try {
					var w = document.querySelector(n);
					w || g('Unable to find a container for "'.concat(n, '"'), 3585), m = w
				} catch (jt) {
					g('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
				} else P(n, HTMLElement) ? m = n : g('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var E = !0,
					S = !1,
					I = void 0;
				try {
					for (var D = y.widgetMap.values()[Symbol.iterator](), B; !(E = (B = D.next()).done); E = !0) {
						var te = B.value;
						if (m.contains(te.wrapper)) {
							x("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (jt) {
					S = !0, I = jt
				} finally {
					try {
						!E && D.return != null && D.return()
					} finally {
						if (S) throw I
					}
				}
				var V = Gr(m);
				if (V) {
					var f = Object.assign(V, i),
						_e = f.action,
						re = f.cData,
						ke = f.chlPageData,
						j = f.sitekey,
						ae;
					f.theme = (ae = f.theme) !== null && ae !== void 0 ? ae : je.Auto;
					var se;
					f.retry = (se = f.retry) !== null && se !== void 0 ? se : me.Auto;
					var ne;
					f.execution = (ne = f.execution) !== null && ne !== void 0 ? ne : ge.Render;
					var be;
					f.appearance = (be = f.appearance) !== null && be !== void 0 ? be : Q.Always;
					var ie;
					f["retry-interval"] = Number((ie = f["retry-interval"]) !== null && ie !== void 0 ? ie : ar);
					var xe;
					f["expiry-interval"] = Number((xe = f["expiry-interval"]) !== null && xe !== void 0 ? xe : (Jt - Zt) * 1e3);
					var de;
					f.size = (de = f.size) !== null && de !== void 0 ? de : M.Normal;
					var we = f.callback,
						Ee = f["expired-callback"],
						Ne = f["timeout-callback"],
						Te = f["after-interactive-callback"],
						Re = f["before-interactive-callback"],
						Y = f["error-callback"],
						Je = f["unsupported-callback"];
					typeof j != "string" && g('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof j == "undefined" ? "undefined" : F(j), '"'), 3588), Kt(j) || g('Invalid input for parameter "sitekey", got "'.concat(j, '"'), 3589), pt(f.size) || g('Invalid type for parameter "size", expected normal|compact, got "'.concat(f.size, '" ').concat(F(f.size)), 3590), ct(f.theme) || g('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(f.theme, '" ').concat(F(f.theme)), 3591), ut(f.retry) || g('Invalid type for parameter "retry", expected never|auto, got "'.concat(f.retry, '" ').concat(F(f.retry)), 3592), f.language || (f.language = "auto"), gt(f.language) || (x('Invalid language value: "'.concat(f.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), f.language = "auto"), yt(f.appearance) || g('Unknown appearance value: "'.concat(f.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), ht(f.execution) || g('Unknown execution value: "'.concat(f.execution, ", expected either: 'render' or 'execute'."), 3601), lt(f["retry-interval"]) || g('Invalid retry-interval value: "'.concat(f["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), st(f["expiry-interval"]) || g('Invalid expiry-interval value: "'.concat(f["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Se, J = (Se = f["refresh-expired"]) !== null && Se !== void 0 ? Se : Z.Auto;
					vt(J) ? f["refresh-expired"] = J : g('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(J, '" ').concat(typeof J == "undefined" ? "undefined" : F(J)), 3603);
					var Ae, oe = (Ae = f["refresh-timeout"]) !== null && Ae !== void 0 ? Ae : ce.Auto;
					mt(J) ? f["refresh-timeout"] = oe : g('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(oe, '" ').concat(typeof oe == "undefined" ? "undefined" : F(oe)), 3603);
					var q = document.createElement("iframe"),
						fe = document.createElement("div"),
						Vt = fe.attachShadow({
							mode: "closed"
						});
					dt(_e) || g('Invalid input for optional parameter "action", got "'.concat(_e, '"'), 3604), ft(re) || g('Invalid input for optional parameter "cData", got "'.concat(re, '"'), 3605);
					var Ie = l(),
						pe = $(Ie);
					if (!(!Ie || !pe)) {
						var Wt = [],
							Ze = f.execution === ge.Render;
						Ze && Wt.push(ue.Execute), y.lastWidgetIdx++;
						var Ir = {};
						y.widgetMap.set(Ie, it(Pe({
							idx: y.lastWidgetIdx,
							action: _e,
							cData: re,
							chlPageData: ke,
							cbSuccess: we,
							cbError: Y,
							cbExpired: Ee,
							cbTimeout: Ne,
							cbUnsupported: Je,
							cbAfterInteractive: Te,
							cbBeforeInteractive: Re,
							params: f,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: Ze,
							isFailed: !1,
							isResetting: !1,
							isExecuted: Ze,
							isInitialized: !1,
							hasResponseParamEl: !1,
							msgQueue: Wt,
							rcV: K,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0
							}
						}, Ir), {
							widgetRenderStartTimeMs: d,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: Vt,
							wrapper: fe,
							isOverrunning: !1
						})), Ot(y);
						var et = y.widgetMap.get(Ie);
						et || g("Turnstile Initialization Error ", 3606), q.style.display = "none", q.style.border = "none", q.style.overflow = "hidden", q.setAttribute("src", Rt(Ie, j, f, K, !1, "g", H.New, _t(et))), q.onerror = function() {
							if (Y) {
								Y == null || Y(String(Yt.code));
								return
							}
							g("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Ut = ["cross-origin-isolated", "fullscreen", "autoplay"],
							tt;
						L((tt = (u = document.featurePolicy) === null || u === void 0 || (r = u.features) === null || r === void 0 ? void 0 : r.call(u)) !== null && tt !== void 0 ? tt : [], Et) && Ut.push(Et), q.setAttribute("allow", Ut.join("; ")), q.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), q.id = pe;
						var rt;
						q.tabIndex = (rt = f.tabindex) !== null && rt !== void 0 ? rt : 0, q.title = "Widget containing a Cloudflare security challenge", Vt.appendChild(q);
						var at, Cr = (at = f["response-field"]) !== null && at !== void 0 ? at : !0;
						if (Cr) {
							var Me = document.createElement("input");
							Me.type = "hidden";
							var nt;
							if (Me.name = (nt = f["response-field-name"]) !== null && nt !== void 0 ? nt : xt, Me.id = "".concat(pe, "_response"), fe.appendChild(Me), typeof f["response-field-name"] != "string" && Ar(j)) {
								var Le = document.createElement("input");
								Le.type = "hidden", Le.name = bt, Le.id = "".concat(pe, "_legacy_response"), fe.appendChild(Le)
							}
						}
						if (y.isRecaptchaCompatibilityMode) {
							var Fe = document.createElement("input");
							Fe.type = "hidden", Fe.name = wt, Fe.id = "".concat(pe, "_g_response"), fe.appendChild(Fe)
						}
						return m.appendChild(fe), et.widgetRenderEndTimeMs = U(), pe
					}
				}
			},
			k = function() {
				var n, i = -1,
					r = !0,
					u = !1,
					d = void 0;
				try {
					for (var m = y.widgetMap[Symbol.iterator](), w; !(r = (w = m.next()).done); r = !0) {
						var E = Ce(w.value, 2),
							S = E[0],
							I = E[1];
						i < I.idx && (n = S, i = I.idx)
					}
				} catch (D) {
					u = !0, d = D
				} finally {
					try {
						!r && m.return != null && m.return()
					} finally {
						if (u) throw d
					}
				}
				return i === -1 && g("Could not find widget", 43778), n
			};

		function O() {
			return O = zt(function(b, n, i, r) {
				var u, d, m, w, E, S, I, D, B, te;
				return Ve(this, function(V) {
					switch (V.label) {
						case 0:
							if (u = b.params.sitekey, d = Tr(), !d) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(b, n, !1), [2];
							m = "h/".concat("g", "/"), w = new URL(d), E = "https", S = "", D = "".concat(E, "://").concat(w.host, "/cdn-cgi/challenge-platform/").concat(m, "rc/").concat(r).concat(S), V.label = 1;
						case 1:
							return V.trys.push([1, 3, , 4]), [4, fetch(D, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: u,
									secondaryToken: i
								})
							})];
						case 2:
							return B = V.sent(), B.status !== 200 ? (x("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(b, n, !1)) : a(b, n, !0), [3, 4];
						case 3:
							return te = V.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), a(b, n, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), O.apply(this, arguments)
		}
		var N = function(b) {
			var n = b.data;
			if (n.source === W) {
				if (!Br(b)) {
					x("Ignored message from wrong origin: ".concat(b.origin, "."));
					return
				}
				if (!(!n.widgetId || !y.widgetMap.has(n.widgetId))) {
					var i = $(n.widgetId),
						r = y.widgetMap.get(n.widgetId);
					if (!(!i || !r)) switch (n.event) {
						case "init": {
							var u;
							r.widgetInitStartTimeMs = U();
							var d = r.shadow.getElementById(i);
							d || g("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = n.mode, r.nextRcV = n.nextRcV, r.mode === z.Invisible && r.params["refresh-expired"] === Z.Manual && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(Z.Auto, "' or '").concat(Z.Never, ".'")), r.mode !== z.Managed && r.params["refresh-timeout"] !== ce.Auto && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === Q.Always || r.isExecuting && r.params.appearance === Q.Execute ? Mt(d, r) : Er(d), d.style.display = "";
							var m = r.shadow.querySelector("#".concat(i));
							m || g("Received state for an unknown widget: ".concat(n.widgetId), 3078), (u = m.contentWindow) === null || u === void 0 || u.postMessage({
								source: W,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var w = r.shadow.getElementById(i);
							w || g("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var E = new Map;
							r.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(oe) {
								E.set(oe, n.translationData[oe])
							}), Hr(w, E);
							break
						}
						case "languageUnsupported": {
							x("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), r.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var S = r.shadow.getElementById(i);
							if (r.isExecuting = !1, S || g("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "unsupported_browser") {
								var I;
								(I = r.cbUnsupported) === null || I === void 0 || I.call(r)
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
							c(r, K, n.widgetId), r.response = n.token, n.sToken ? e(r, i, n.sToken, n.chlId) : a(r, i, !1);
							break
						}
						case "fail": {
							n.rcV && c(r, n.rcV, n.widgetId), n.cfChlOut && (r.cfChlOut = n.cfChlOut), n.cfChlOutS && (r.cfChlOutS = n.cfChlOutS), n.code && (r.errorCode = n.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, Nt(i);
							var D = r.cbError,
								B = n.code === We || n.code === Ue;
							if (B) {
								var te, V = r.shadow.querySelector("#".concat(i));
								V == null || (te = V.contentWindow) === null || te === void 0 || te.postMessage({
									source: W,
									widgetId: n.widgetId,
									event: "forceFail"
								}, "*")
							}
							if (D) {
								var f;
								D(String((f = n.code) !== null && f !== void 0 ? f : Qt)) ? r.params.retry === me.Auto && !r.isResetting && t(r, i, B) : (n.code && x("Error: ".concat(n.code, ".")), t(r, i, B))
							} else n.code ? (t(r, i, B), g("Error: ".concat(n.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var _e = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (_e) {
								x("A feedback report form is already opened for this widget.");
								return
							}
							It(i, r, n.feedbackOrigin);
							break
						}
						case "requestFeedbackData": {
							var re, ke = r.shadow.querySelector("#".concat(i));
							ke || g("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (re = ke.contentWindow) === null || re === void 0 || re.postMessage({
								source: W,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var j, ae, se = (j = r.wrapper.parentNode) === null || j === void 0 ? void 0 : j.querySelector("#".concat(i, "-fr"));
							se || g("Received state for an unknown widget: ".concat(n.widgetId), 3078), (ae = se.contentWindow) === null || ae === void 0 || ae.postMessage({
								source: W,
								widgetId: n.widgetId,
								event: "feedbackData",
								rayId: n.rayId,
								rcV: n.rcV,
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								sitekey: n.sitekey,
								mode: n.mode,
								md: n.md
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ne, be = (ne = r.wrapper.parentNode) === null || ne === void 0 ? void 0 : ne.querySelector("#".concat(i, "-fr"));
							be || g("Received state for an unknown widget: ".concat(n.widgetId), 3078), vr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ie, xe = n.token;
							r.isExpired = !0, (ie = r.cbExpired) === null || ie === void 0 || ie.call(r, xe), r.params["refresh-expired"] === Z.Auto && !r.isResetting && _(H.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							c(r, K, n.widgetId), Nt(i);
							var de = r.cbTimeout;
							if (de ? de() : r.params["refresh-timeout"] === ce.Never && !r.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === ce.Auto && !r.isResetting) {
								var we = r.cbAfterInteractive;
								we == null || we(), _(H.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							c(r, K, n.widgetId), _(H.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							c(r, n.nextRcV, n.widgetId), _(n.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Ee, Ne = r.shadow.getElementById(i);
							Ne || g("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Ee = r.cbBeforeInteractive) === null || Ee === void 0 || Ee.call(r), r.params.appearance === Q.InteractionOnly && Mt(Ne, r);
							break
						}
						case "interactiveEnd": {
							var Te;
							(Te = r.cbAfterInteractive) === null || Te === void 0 || Te.call(r);
							break
						}
						case "widgetStale": {
							r.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var Re;
							r.widgetParamsStartTimeMs = U();
							var Y = r.shadow.querySelector("#".concat(i));
							Y || g("Received state for an unknown widget: ".concat(n.widgetId), 3078), r.isResetting = !1;
							var Je = {},
								Se = U(),
								J = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										ii: window.self !== window.top,
										xp: mr(r.wrapper).substring(0, or),
										wp: gr(r.wrapper),
										pfp: hr(document, nr, ir),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: _r(document.title),
										ffp: yr(r.wrapper),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href,
										sR: r.wrapper.shadowRoot === null
									}
								},
								Ae = U() - Se;
							(Re = Y.contentWindow) === null || Re === void 0 || Re.postMessage(Pe({
								source: W,
								widgetId: n.widgetId,
								event: "extraParams",
								action: r.action,
								cData: r.cData,
								chlPageData: r.chlPageData,
								rcV: r.rcV,
								ch: "180b6a431d85",
								au: y.scriptUrl,
								url: Tr(),
								retry: r.params.retry,
								"expiry-interval": r.params["expiry-interval"],
								"retry-interval": r.params["retry-interval"],
								"refresh-expired": r.params["refresh-expired"],
								"refresh-timeout": r.params["refresh-timeout"],
								language: r.params.language,
								execution: r.params.execution,
								appearance: r.params.appearance,
								wPr: J,
								turnstileAgeMs: U() - y.turnstileLoadInitTimeMs,
								widgetAgeMs: U() - r.widgetRenderStartTimeMs,
								upgradeAttempts: y.upgradeAttempts,
								upgradeCompletedCount: y.upgradeCompletedCount,
								timeRenderMs: r.widgetRenderEndTimeMs - r.widgetRenderStartTimeMs,
								timeToInitMs: r.widgetInitStartTimeMs - r.widgetRenderEndTimeMs,
								timeToParamsMs: r.widgetParamsStartTimeMs - r.widgetInitStartTimeMs,
								tiefTimeMs: Ae
							}, Je), "*"), h(r, n.widgetId, Y), r.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		y.msgHandler = N, window.addEventListener("message", N);

		function R(b) {
			if (typeof b == "string") {
				var n = Xe(b);
				if (n && y.widgetMap.has(n)) return n;
				if (y.widgetMap.has(b)) return b;
				try {
					var i = document.querySelector(b);
					return i ? R(i) : null
				} catch (r) {
					return null
				}
			}
			return P(b, Element) ? v(b) : b || y.widgetMap.size === 0 ? null : y.widgetMap.keys().next().value
		}
		var X = {};
		return it(Pe({}, X), {
			ready: function(n) {
				if (y.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), g("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && g('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : F(n), '"'), 3841), y.isReady) {
					n();
					return
				}
				Pt.push(n)
			},
			implicitRender: Ft,
			execute: function(n, i) {
				var r = R(n);
				if (!r) {
					i === void 0 && g("Please provide 2 parameters to execute: container and parameters", 43521);
					var u = T(n, i);
					u || g("Failed to render widget", 43522), r = u
				}
				var d = y.widgetMap.get(r);
				if (d) {
					s(d, i);
					var m = $(r);
					if (d.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(m, "), consider using reset() before execute()."));
						return
					}
					if (d.isExecuting = !0, d.response) {
						var w;
						d.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(m, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (w = d.cbSuccess) === null || w === void 0 || w.call(d, d.response, !1);
						return
					}
					d.isExpired && x("Call to execute on a expired-widget (".concat(m, "), consider using reset() before.")), d.isStale && (_(H.StaleExecute, m), d.isExecuting = !0), d.msgQueue.push(ue.Execute), d.isExecuted = !0;
					var E = d.shadow.querySelector("#".concat(m));
					if (E || (d.isExecuting = !1, g("Widget ".concat(m, " to execute was not found"), 43522)), d.isResetting) return;
					if (d.isInitialized && h(d, r, E), d.isInitialized && d.params.appearance === Q.Execute && Mt(E, d), d.isExecuting) {
						var S, I = d.shadow.querySelector("#".concat(m));
						I || g("Received state for an unknown widget: ".concat(r), 3078), (S = I.contentWindow) === null || S === void 0 || S.postMessage({
							source: W,
							widgetId: r,
							event: "execute"
						}, "*")
					}
				}
			},
			render: T,
			reset: p,
			remove: A,
			_private: {
				showFeedback: function(n) {
					var i = R(n);
					if (i) {
						var r = $(i);
						if (r) {
							var u = y.widgetMap.get(i);
							u && It(r, u, qe.Custom)
						}
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = k();
					if (r) {
						var u, d = y.widgetMap.get(r);
						return d != null && d.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (u = y.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.response
					}
					g("Could not find a widget", 43794)
				}
				var m = R(n);
				return m || g("Could not find widget for provided container", 43778), (i = y.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = k();
					if (r) {
						var u, d;
						return (d = (u = y.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.isExpired) !== null && d !== void 0 ? d : !1
					}
					g("Could not find a widget", 43794)
				}
				var m = R(n);
				m || g("Could not find widget for provided container", 43778);
				var w;
				return (w = (i = y.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.isExpired) !== null && w !== void 0 ? w : !1
			}
		})
	}();

	function Gr(e) {
		var t = e.getAttribute("data-sitekey"),
			a = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (ct(c) ? a.theme = c : x('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (pt(l) ? a.size = l : x('Unknown data-size value: "'.concat(l, '".'))), 0) var v;
		var h = e.getAttribute("data-action");
		typeof h == "string" && (a.action = h);
		var s = e.getAttribute("data-cdata");
		typeof s == "string" && (a.cData = s);
		var p = e.getAttribute("data-retry");
		p && (ut(p) ? a.retry = p : x('Invalid data-retry value: "'.concat(p, ", expected either 'never' or 'auto'\".")));
		var _ = e.getAttribute("data-retry-interval");
		if (_) {
			var A = Number.parseInt(_, 10);
			lt(A) ? a["retry-interval"] = A : x('Invalid data-retry-interval value: "'.concat(_, ', expected an integer value > 0 and < 900000".'))
		}
		var T = e.getAttribute("data-expiry-interval");
		if (T) {
			var k = Number.parseInt(T, 10);
			st(k) ? a["expiry-interval"] = k : x('Invalid data-expiry-interval value: "'.concat(k, ', expected an integer value > 0 and < 360000".'))
		}
		var O = e.getAttribute("data-refresh-expired");
		O && (vt(O) ? a["refresh-expired"] = O : x('Unknown data-refresh-expired value: "'.concat(O, ", expected either: 'never', 'auto' or 'manual'.")));
		var N = e.getAttribute("data-refresh-timeout");
		N && (mt(N) ? a["refresh-timeout"] = N : x('Unknown data-refresh-timeout value: "'.concat(N, ", expected either: 'never', 'auto' or 'manual'.")));
		var R = e.getAttribute("data-language");
		R && (gt(R) ? a.language = R : x('Invalid data-language value: "'.concat(R, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function X(w) {
			var E = e.getAttribute(w);
			return E && window[E] ? window[E] : void 0
		}
		var b = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		b.forEach(function(w) {
			a[w] = X("data-".concat(w))
		});
		var n = e.getAttribute("data-feedback-enabled");
		n ? ($t(n) || x('Invalid data-feedback-enabled value: "'.concat(n, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = n === "true") : a["feedback-enabled"] = !0;
		var i, r = (i = e.getAttribute("data-response-field")) !== null && i !== void 0 ? i : "true";
		a["response-field"] = r === "true";
		var u = e.getAttribute("data-response-field-name");
		u && (a["response-field-name"] = u);
		var d = e.getAttribute("data-execution");
		d && (ht(d) ? a.execution = d : x('Unknown data-execution value: "'.concat(d, ", expected either: 'render' or 'execute'.")));
		var m = e.getAttribute("data-appearance");
		return m && (yt(m) ? a.appearance = m : x('Unknown data-appearance value: "'.concat(m, ", expected either: 'always', 'execute', or 'interaction-only'."))), a
	}

	function Xr() {
		var e = !0;
		kt(y, e), y.msgHandler && window.removeEventListener("message", y.msgHandler), br(window.turnstile, y)
	}
	ye = !1, C = pr(), y.scriptWasLoadedAsync = (Ye = C == null ? void 0 : C.loadedAsync) !== null && Ye !== void 0 ? Ye : !1, y.scriptUrl = (Qe = C == null ? void 0 : C.src) !== null && Qe !== void 0 ? Qe : "undefined", C != null && C.params && (he = C.params.get("compat"), (he == null ? void 0 : he.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled.") : (x("Compatibility layer enabled."), y.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Dt) : he !== null && x('Unknown value for api.js?compat: "'.concat(he, '", ignoring.')), C.params.forEach(function(e, t) {
		L(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || x('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), ye = C.params.get("_upgrade") === "true", G = C.params.get("onload"), G && !ye && setTimeout(function() {
		typeof window[G] == "function" ? window[G]() : (x("Unable to find onload callback '".concat(G, "' immediately after loading, expected 'function', got '").concat(F(window[G]), "'.")), setTimeout(function() {
			typeof window[G] == "function" ? window[G]() : x("Unable to find onload callback '".concat(G, "' after 1 second, expected 'function', got '").concat(F(window[G]), "'."))
		}, 1e3))
	}, 0)), Lt = "turnstile" in window, Lt && !ye ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Lt && ye && (xr(window.turnstile, y), Ot(y), (C == null || (Ke = C.params) === null || Ke === void 0 ? void 0 : Ke.get("render")) !== "explicit" && setTimeout(Ft, 0)), window.turnstile = Dt, ye || ((C == null || ($e = C.params) === null || $e === void 0 ? void 0 : $e.get("render")) !== "explicit" && Pt.push(Ft), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(wr, 0) : window.addEventListener("DOMContentLoaded", wr))), Rr = 24 * 60 * 60 * 1e3, window.setTimeout(Xr, Rr);
	var ye, C, Ye, Qe, he, G, Lt, Ke, $e, Rr;
})();