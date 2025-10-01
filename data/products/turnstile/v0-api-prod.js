"use strict";
(function() {
	function Ht(e, t, a, o, c, l, m) {
		try {
			var y = e[l](m),
				s = y.value
		} catch (p) {
			a(p);
			return
		}
		y.done ? t(s) : Promise.resolve(s).then(o, c)
	}

	function Bt(e) {
		return function() {
			var t = this,
				a = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(t, a);

				function m(s) {
					Ht(l, o, c, m, y, "next", s)
				}

				function y(s) {
					Ht(l, o, c, m, y, "throw", s)
				}
				m(void 0)
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

	function kr(e, t) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function ot(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : kr(Object(t)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
		}), e
	}

	function Gt(e) {
		if (Array.isArray(e)) return e
	}

	function Xt(e, t) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				l = !1,
				m, y;
			try {
				for (a = a.call(e); !(c = (m = a.next()).done) && (o.push(m.value), !(t && o.length === t)); c = !0);
			} catch (s) {
				l = !0, y = s
			} finally {
				try {
					!c && a.return != null && a.return()
				} finally {
					if (l) throw y
				}
			}
			return o
		}
	}

	function Yt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ct(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
		return o
	}

	function Qt(e, t) {
		if (e) {
			if (typeof e == "string") return ct(e, t);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ct(e, t)
		}
	}

	function Ce(e, t) {
		return Gt(e) || Xt(e, t) || Qt(e, t) || Yt()
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
			o, c, l, m;
		return m = {
			next: y(0),
			throw: y(1),
			return: y(2)
		}, typeof Symbol == "function" && (m[Symbol.iterator] = function() {
			return this
		}), m;

		function y(p) {
			return function(_) {
				return s([p, _])
			}
		}

		function s(p) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; m && (m = 0, p[0] && (a = 0)), a;) try {
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
	var Kt = 300,
		$t = 10;
	var Jt = {
		code: 200500,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?",
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1
	};
	var Zt = 300020;
	var We = 300030;
	var Ue = 300031;

	function ut(e) {
		var t = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel)), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), t.size !== 0) return t.toString()
	}
	var je = "cf-chl-widget-",
		W = "cloudflare-challenge",
		er = ".cf-turnstile",
		tr = ".cf-challenge",
		rr = ".g-recaptcha",
		lt = "cf_challenge_response",
		st = "cf-turnstile-response",
		dt = "g-recaptcha-response",
		ar = 8e3,
		ft = "private-token",
		nr = 3,
		ir = 500,
		or = 500,
		Q = "";
	var z;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(z || (z = {}));
	var M;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(M || (M = {}));
	var qe;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(qe || (qe = {}));
	var me;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(me || (me = {}));
	var ge;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(ge || (ge = {}));
	var J;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(J || (J = {}));
	var oe;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(oe || (oe = {}));
	var K;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})(K || (K = {}));
	var he;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(he || (he = {}));
	var ce;
	(function(e) {
		e.Execute = "execute"
	})(ce || (ce = {}));
	var H;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(H || (H = {}));

	function L(e, t) {
		return e.indexOf(t) !== -1
	}
	var Nr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Mr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];

	function pt(e, t) {
		var a = "https://challenges.cloudflare.com";
		if (t) {
			var o;
			a = (o = e["base-url"]) !== null && o !== void 0 ? o : a
		}
		return a
	}

	function vt(e, t, a, o, c, l, m, y) {
		var s = pt(a, c),
			p = l ? "h/".concat(l, "/") : "",
			_ = y ? "?".concat(y) : "",
			A = a["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(s, "/cdn-cgi/challenge-platform/").concat(p, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(A, "/").concat(m, "/").concat(a.size, "/").concat(a.language).concat(_)
	}
	var mt = function(e) {
			var t, a, o = window.innerWidth < 400,
				c = e.state !== me.FailureFeedbackCode && (e.state === me.FailureFeedback || e.state === me.FailureHavingTroubles || !e.errorCode),
				l, m = L(Nr, (l = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				y, s = L(Mr, (y = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && y !== void 0 ? y : "nonexistent");
			return o ? Lr({
				isModeratelyVerbose: s,
				isSmallerFeedback: c,
				isVerboseLanguage: m
			}) : c && m ? "630px" : c && s ? "620px" : c ? "600px" : m ? "690px" : "680px"
		},
		Lr = function(e) {
			var t = e.isVerboseLanguage,
				a = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return a && t ? "660px" : a && o ? "620px" : a ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function ze(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function cr(e, t) {
		if (!P(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function Z(e, t) {
		return Z = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, Z(e, t)
	}

	function ur(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && Z(e, t)
	}

	function He() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Oe(e, t, a) {
		return He() ? Oe = Reflect.construct : Oe = function(c, l, m) {
			var y = [null];
			y.push.apply(y, l);
			var s = Function.bind.apply(c, y),
				p = new s;
			return m && Z(p, m.prototype), p
		}, Oe.apply(null, arguments)
	}

	function ue(e) {
		return ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, ue(e)
	}

	function lr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Be(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Be = function(o) {
			if (o === null || !lr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return Oe(o, arguments, ue(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), Z(c, o)
		}, Be(e)
	}

	function sr(e, t) {
		return t && (F(t) === "object" || typeof t == "function") ? t : ze(e)
	}

	function dr(e) {
		var t = He();
		return function() {
			var o = ue(e),
				c;
			if (t) {
				var l = ue(this).constructor;
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
			return l = t.call(this, o), De(ze(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return a
	}(Be(Error));

	function v(e, t) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new fr(a, t)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Ge(e) {
		return e.startsWith(je) ? e.substring(je.length) : null
	}

	function $(e) {
		return "".concat(je).concat(e)
	}

	function gt() {
		var e = /^(?:https?:)?\/\/challenges\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (P(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (P(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function pr() {
		var e = gt();
		e || v("Could not find Turnstile script tag, some features may not be available", 43777);
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
		return Date.now()
	}
	var ht = function(e, t, a) {
			var o = pt(t.params, !1),
				c = "h/".concat("g", "/"),
				l, m, y = "".concat(o, "/cdn-cgi/challenge-platform/").concat(c, "feedback-reports/").concat(Ge(e), "/").concat(t.displayLanguage, "/").concat((m = t.params.theme) !== null && m !== void 0 ? m : t.theme, "/").concat(a);
			if (window.top !== window.self) {
				window.open(y, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var s = document.createElement("div");
			s.style.position = "fixed", s.style.zIndex = "2147483646", s.style.width = "100vw", s.style.height = "100vh", s.style.top = "0", s.style.left = "0", s.style.transformOrigin = "center center", s.style.overflowX = "hidden", s.style.overflowY = "auto", s.style.background = "rgba(0,0,0,0.4)";
			var p = document.createElement("div");
			p.style.display = "table-cell", p.style.verticalAlign = "middle", p.style.width = "100vw", p.style.height = "100vh";
			var _ = document.createElement("div");
			_.className = "cf-turnstile-feedback", _.id = "cf-fr-id", _.style.width = "100vw", _.style.maxWidth = "450px", _.style.height = mt(t), _.style.position = "relative", _.style.zIndex = "2147483647", _.style.backgroundColor = "#ffffff", _.style.borderRadius = "5px", _.style.left = "0px", _.style.top = "0px", _.style.overflow = "hidden", _.style.margin = "0px auto";
			var A = document.createElement("iframe");
			A.id = "".concat(e, "-fr"), A.setAttribute("src", y), A.setAttribute("allow", "cross-origin-isolated; fullscreen"), A.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), A.setAttribute("scrolling", "no"), A.style.borderWidth = "0px", A.style.width = "100%", A.style.height = "100%", A.style.overflow = "hidden";
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
				_.style.height = mt(t)
			})
		},
		vr = function(e) {
			var t, a, o;
			(o = document.getElementById(e)) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 || t.remove()
		};
	var Xe;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom"
	})(Xe || (Xe = {}));
	var yt = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function mr(e) {
		if (!e) return "-";
		var t = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, l = a.previousElementSibling; l;) l.tagName === a.tagName && c++, l = l.previousElementSibling;
			var m = yt(a.tagName.toLowerCase()),
				y = "".concat(m, "[").concat(c, "]");
			return t(a.parentNode, "/".concat(y).concat(o))
		};
		return t(e, "")
	}

	function gr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Fr = {
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

	function hr(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var a = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = a.slice(0, 20).map(function(l) {
				return Fr[l.type] || "-"
			}).join(""),
			c = ["m:".concat(t.method || ""), "f:".concat(a.length), o].join("|");
		return c
	}

	function yr(e, t, a) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(A) {
					return c > t || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), m;
			(m = l.nextNode()) !== null && o.length < a;) {
			if (m.nodeType === Node.ELEMENT_NODE) {
				var y = m;
				o += "".concat(yt(y.tagName.toLowerCase()));
				for (var s = 0; s < y.attributes.length; s++) {
					var p = y.attributes[s];
					o += "_".concat(yt(p.name, 2))
				}
				o += ">"
			} else m.nodeType === Node.TEXT_NODE && (o += "-t");
			var _ = m.parentNode;
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
		var o = gt();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var l = new URL(o.src),
				m = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), m.async = !0, c && (m.nonce = c), m.setAttribute("crossorigin", "anonymous"), m.src = l.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(m, o)
		}
	}

	function xr(e, t) {
		var a = e._pState;
		return a ? (t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = U(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap, !0) : !1
	}

	function _t(e) {
		return L(["auto", "dark", "light"], e)
	}

	function bt(e) {
		return L(["auto", "never"], e)
	}

	function xt(e) {
		return e > 0 && e < 9e5
	}

	function wt(e) {
		return e > 0 && e < 36e4
	}
	var Dr = /^[0-9A-Za-z_-]{3,100}$/;

	function wr(e) {
		return Dr.test(e)
	}
	var Pr = /^[a-z0-9_-]{0,32}$/i;

	function Et(e) {
		return e === void 0 ? !0 : typeof e == "string" && Pr.test(e)
	}
	var Vr = /^[a-z0-9_\-=]{0,255}$/i;

	function Tt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Vr.test(e)
	}

	function Rt(e) {
		return L([M.Normal, M.Compact, M.Invisible, M.Flexible], e)
	}

	function St(e) {
		return L(["auto", "manual", "never"], e)
	}

	function At(e) {
		return L(["auto", "manual", "never"], e)
	}
	var Wr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function It(e) {
		return e === "auto" || Wr.test(e)
	}

	function Ct(e) {
		return L(["always", "execute", "interaction-only"], e)
	}

	function Er(e) {
		return L(["true", "false"], e)
	}

	function Ot(e) {
		return L(["render", "execute"], e)
	}
	var Ur = 900,
		jr = 10,
		qr = 50;

	function zr(e) {
		e.watchCatSeq++;
		var t = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(t = (l = c.next()).done); t = !0) {
				var m = Ce(l.value, 2),
					y = m[0],
					s = m[1],
					p;
				s.watchcat.seq = e.watchCatSeq, s.watchcat.lastAckedSeq === 0 && (s.watchcat.lastAckedSeq = e.watchCatSeq);
				var _ = $(y);
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
					var T = s.watchcat.seq - 1 - jr,
						k = s.watchcat.lastAckedSeq < T,
						O = s.watchcat.seq - 1 - qr,
						N = s.isOverrunning && s.watchcat.overrunBeginSeq < O;
					if ((s.isExecuting || !s.isInitialized || s.isInitialized && !s.isStale && !s.isExecuted) && s.watchcat.lastAckedSeq !== 0 && k || N) {
						var R;
						s.watchcat.lastAckedSeq = 0, s.watchcat.seq = 0, s.isExecuting = !1;
						var X = function(r, u) {
							console.log("Turnstile Widget seem to have ".concat(r, ": "), u)
						};
						X(k ? "hung" : "crashed", y);
						var b = k ? We : Ue,
							n;
						if ((R = e.msgHandler) === null || R === void 0 || R.call(e, {
								data: {
									code: b,
									event: "fail",
									rcV: (n = s.nextRcV) !== null && n !== void 0 ? n : Q,
									source: W,
									widgetId: y
								}
							}), 0) var i;
						continue
					}(p = A.contentWindow) === null || p === void 0 || p.postMessage({
						event: "meow",
						seq: e.watchCatSeq,
						source: W,
						widgetId: y
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

	function kt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			zr(e)
		}, Ur))
	}

	function Nt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && clearInterval(e.watchCatInterval)
	}
	var h = {
		apiVersion: 1,
		isReady: !1,
		isRecaptchaCompatibilityMode: !1,
		lastWidgetIdx: 0,
		scriptUrl: "undefined",
		scriptWasLoadedAsync: !1,
		turnstileLoadInitTimeTsMs: U(),
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		watchCatInterval: null,
		watchCatSeq: 0,
		widgetMap: new Map
	};

	function Mt(e) {
		Ar(e, "")
	}

	function Pt() {
		var e = [er, tr];
		h.isRecaptchaCompatibilityMode && e.push(rr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Vt.render(t)
		})
	}
	var Wt = [];

	function Tr() {
		h.isReady = !0;
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var o = Wt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var l = c.value;
				l()
			}
		} catch (m) {
			t = !0, a = m
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw a
			}
		}
	}

	function Hr(e) {
		var t = h.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var a, o = (a = t.params["response-field"]) !== null && a !== void 0 ? a : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = t.params["response-field-name"]) !== null && l !== void 0 ? l : st, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var m;
				if (typeof t.params["response-field-name"] != "string" && Ir((m = t.params.sitekey) !== null && m !== void 0 ? m : "")) {
					var y = document.createElement("input");
					y.type = "hidden", y.name = lt, y.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(y)
				}
			}
			if (h.isRecaptchaCompatibilityMode) {
				var s = document.createElement("input");
				s.type = "hidden", s.name = dt, s.id = "".concat(e, "_g_response"), t.wrapper.appendChild(s)
			}
		}
	}

	function Ar(e, t) {
		Hr(e);
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && P(a, HTMLInputElement) && (a.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && P(o, HTMLInputElement) && (o.value = t), h.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && P(c, HTMLInputElement) && (c.value = t)
		}
	}

	function Lt(e, t) {
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
						v('Invalid value for parameter "size", expected "'.concat(M.Compact, '", "').concat(M.Flexible, '", or "').concat(M.Normal, '", got "').concat(c, '"'), 2817);
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
				v('Invalid value for parameter "mode", expected "'.concat(z.NonInteractive, '", "').concat(z.Managed, '" or "').concat(z.Invisible, '", got "').concat(l, '"'), 2818)
		}
	}

	function Rr(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Br(e, t) {
		var a = t.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Gr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Ir(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Ft() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Vt = function() {
		var e = function(n, i, r, u) {
				return O.apply(this, arguments)
			},
			t = function(n, i, r) {
				if (n.params.retry === ge.Auto || r) {
					n.isExecuted && (n.msgQueue.push(ce.Execute), n.isExecuted = !0, n.isExecuting = !0);
					var u, d = r ? 0 : 1e3 * 2 + ((u = n.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
					n.retryTimeout = window.setTimeout(function() {
						var g = r ? H.CrashedRetry : H.FailureRetry;
						_(g, i)
					}, d)
				}
			},
			a = function(n, i, r) {
				var u;
				n.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Ar(i, n.response), (u = n.cbSuccess) === null || u === void 0 || u.call(n, n.response, r)
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
				} while (h.widgetMap.has(r));
				return r
			},
			m = function(n) {
				var i = !0,
					r = !1,
					u = void 0;
				try {
					for (var d = h.widgetMap[Symbol.iterator](), g; !(i = (g = d.next()).done); i = !0) {
						var w = Ce(g.value, 2),
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
			y = function(n, i, r) {
				for (; n.msgQueue.length > 0;) {
					var u, d = n.msgQueue.pop();
					(u = r.contentWindow) === null || u === void 0 || u.postMessage({
						event: d,
						source: W,
						widgetId: i
					}, "*")
				}
			},
			s = function(n, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						u = [],
						d = !0,
						g = !1,
						w = void 0;
					try {
						for (var E = r[Symbol.iterator](), S; !(d = (S = E.next()).done); d = !0) {
							var I = S.value;
							i[I] && i[I] !== n.params[I] && u.push(I)
						}
					} catch (D) {
						g = !0, w = D
					} finally {
						try {
							!d && E.return != null && E.return()
						} finally {
							if (g) throw w
						}
					}
					u.length > 0 && v("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(u.join(",")), 3618), i.action && (Et(i.action) || v('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (Tt(i.cData) || v('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			p = function(n) {
				_(H.Api, n)
			},
			_ = function(n, i) {
				var r = R(i);
				r || v("Nothing to reset found for provided container", 3329);
				var u = h.widgetMap.get(r);
				if (u) {
					var d;
					u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.params.execution === he.Render && (u.msgQueue.push(ce.Execute), u.isExecuted = !0, u.isExecuting = !0);
					var g = $(r),
						w = u.shadow.querySelector("#".concat(g));
					(!g || !w) && v("Widget ".concat(r, " to reset was not found."), 3330), u.params.appearance === K.InteractionOnly && Rr(w), u.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
					var E = w.cloneNode(),
						S;
					E.src = vt(r, u.params.sitekey, u.params, (S = u.rcV) !== null && S !== void 0 ? S : Q, !1, "g", n, ut(u)), (d = w.parentNode) === null || d === void 0 || d.replaceChild(E, w), Mt(g), u.retryTimeout && window.clearTimeout(u.retryTimeout)
				} else v("Widget ".concat(r, " to reset was not found."), 3331)
			},
			A = function(n) {
				var i, r = R(n);
				if (!r || !h.widgetMap.has(r)) {
					x("Nothing to remove found for the provided container.");
					return
				}
				var u = $(r),
					d = ["input#".concat(u, "_response"), "input#".concat(u, "_legacy_response"), "input#".concat(u, "_g_response")];
				document.querySelectorAll(d.join(", ")).forEach(function(E) {
					return E.remove()
				});
				var g = h.widgetMap.get(r);
				g == null || g.shadow.querySelectorAll(d.join(", ")).forEach(function(E) {
					return E.remove()
				}), g == null || g.wrapper.remove();
				var w = (i = h.widgetMap.get(r)) === null || i === void 0 ? void 0 : i.retryTimeout;
				w && window.clearTimeout(w), h.widgetMap.delete(r), Nt(h)
			},
			T = function(n, i) {
				var r, u, d = U(),
					g;
				if (typeof n == "string") try {
					var w = document.querySelector(n);
					w || v('Unable to find a container for "'.concat(n, '"'), 3585), g = w
				} catch (zt) {
					v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
				} else P(n, HTMLElement) ? g = n : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var E = !0,
					S = !1,
					I = void 0;
				try {
					for (var D = h.widgetMap.values()[Symbol.iterator](), B; !(E = (B = D.next()).done); E = !0) {
						var ee = B.value;
						if (g.contains(ee.wrapper)) {
							x("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (zt) {
					S = !0, I = zt
				} finally {
					try {
						!E && D.return != null && D.return()
					} finally {
						if (S) throw I
					}
				}
				var V = Ft();
				if (!V) return v("Turnstile cannot determine its page location", 3607);
				if (V.startsWith("file:")) return v("Turnstile cannot run in a file:// url", 3608);
				var le = Xr(g);
				if (le) {
					var f = Object.assign(le, i),
						te = f.action,
						se = f.cData,
						be = f.chlPageData,
						j = f.sitekey,
						de;
					f.theme = (de = f.theme) !== null && de !== void 0 ? de : qe.Auto;
					var re;
					f.retry = (re = f.retry) !== null && re !== void 0 ? re : ge.Auto;
					var xe;
					f.execution = (xe = f.execution) !== null && xe !== void 0 ? xe : he.Render;
					var ae;
					f.appearance = (ae = f.appearance) !== null && ae !== void 0 ? ae : K.Always;
					var we;
					f["retry-interval"] = Number((we = f["retry-interval"]) !== null && we !== void 0 ? we : ar);
					var fe;
					f["expiry-interval"] = Number((fe = f["expiry-interval"]) !== null && fe !== void 0 ? fe : (Kt - $t) * 1e3);
					var ne;
					f.size = (ne = f.size) !== null && ne !== void 0 ? ne : M.Normal;
					var Ee = f.callback,
						ke = f["expired-callback"],
						Te = f["timeout-callback"],
						Re = f["after-interactive-callback"],
						Se = f["before-interactive-callback"],
						ie = f["error-callback"],
						Je = f["unsupported-callback"];
					typeof j != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof j == "undefined" ? "undefined" : F(j), '"'), 3588), wr(j) || v('Invalid input for parameter "sitekey", got "'.concat(j, '"'), 3589), Rt(f.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(f.size, '" ').concat(F(f.size)), 3590), _t(f.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(f.theme, '" ').concat(F(f.theme)), 3591), bt(f.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(f.retry, '" ').concat(F(f.retry)), 3592), f.language || (f.language = "auto"), It(f.language) || (x('Invalid language value: "'.concat(f.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), f.language = "auto"), Ct(f.appearance) || v('Unknown appearance value: "'.concat(f.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Ot(f.execution) || v('Unknown execution value: "'.concat(f.execution, ", expected either: 'render' or 'execute'."), 3601), xt(f["retry-interval"]) || v('Invalid retry-interval value: "'.concat(f["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), wt(f["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(f["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Ae, Y = (Ae = f["refresh-expired"]) !== null && Ae !== void 0 ? Ae : J.Auto;
					St(Y) ? f["refresh-expired"] = Y : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Y, '" ').concat(typeof Y == "undefined" ? "undefined" : F(Y)), 3603);
					var Ze, Ne = (Ze = f["refresh-timeout"]) !== null && Ze !== void 0 ? Ze : oe.Auto;
					At(Y) ? f["refresh-timeout"] = Ne : v('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(Ne, '" ').concat(typeof Ne == "undefined" ? "undefined" : F(Ne)), 3603);
					var q = document.createElement("iframe"),
						pe = document.createElement("div"),
						Ut = pe.attachShadow({
							mode: "closed"
						});
					Et(te) || v('Invalid input for optional parameter "action", got "'.concat(te, '"'), 3604), Tt(se) || v('Invalid input for optional parameter "cData", got "'.concat(se, '"'), 3605);
					var Ie = l(),
						ve = $(Ie);
					if (!(!Ie || !ve)) {
						var jt = [],
							et = f.execution === he.Render;
						et && jt.push(ce.Execute), h.lastWidgetIdx++;
						var Cr = {};
						h.widgetMap.set(Ie, ot(Pe({
							action: te,
							cbAfterInteractive: Re,
							cbBeforeInteractive: Se,
							cbError: ie,
							cbExpired: ke,
							cbSuccess: Ee,
							cbTimeout: Te,
							cbUnsupported: Je,
							cData: se,
							chlPageData: be,
							hasResponseParamEl: !1,
							idx: h.lastWidgetIdx,
							isComplete: !1,
							isExecuted: et,
							isExecuting: et,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: jt,
							params: f,
							rcV: Q,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, Cr), {
							isOverrunning: !1,
							shadow: Ut,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: d,
							wrapper: pe
						})), kt(h);
						var tt = h.widgetMap.get(Ie);
						tt || v("Turnstile Initialization Error ", 3606), q.style.display = "none", q.style.border = "none", q.style.overflow = "hidden", q.setAttribute("src", vt(Ie, j, f, Q, !1, "g", H.New, ut(tt))), q.onerror = function() {
							if (ie) {
								ie == null || ie(String(Jt.code));
								return
							}
							v("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var qt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							rt;
						L((rt = (u = document.featurePolicy) === null || u === void 0 || (r = u.features) === null || r === void 0 ? void 0 : r.call(u)) !== null && rt !== void 0 ? rt : [], ft) && qt.push(ft), q.setAttribute("allow", qt.join("; ")), q.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), q.id = ve;
						var at;
						q.tabIndex = (at = f.tabindex) !== null && at !== void 0 ? at : 0, q.title = "Widget containing a Cloudflare security challenge", Ut.appendChild(q);
						var nt, Or = (nt = f["response-field"]) !== null && nt !== void 0 ? nt : !0;
						if (Or) {
							var Me = document.createElement("input");
							Me.type = "hidden";
							var it;
							if (Me.name = (it = f["response-field-name"]) !== null && it !== void 0 ? it : st, Me.id = "".concat(ve, "_response"), pe.appendChild(Me), typeof f["response-field-name"] != "string" && Ir(j)) {
								var Le = document.createElement("input");
								Le.type = "hidden", Le.name = lt, Le.id = "".concat(ve, "_legacy_response"), pe.appendChild(Le)
							}
						}
						if (h.isRecaptchaCompatibilityMode) {
							var Fe = document.createElement("input");
							Fe.type = "hidden", Fe.name = dt, Fe.id = "".concat(ve, "_g_response"), pe.appendChild(Fe)
						}
						return g.appendChild(pe), tt.widgetRenderEndTimeTsMs = U(), ve
					}
				}
			},
			k = function() {
				var n, i = -1,
					r = !0,
					u = !1,
					d = void 0;
				try {
					for (var g = h.widgetMap[Symbol.iterator](), w; !(r = (w = g.next()).done); r = !0) {
						var E = Ce(w.value, 2),
							S = E[0],
							I = E[1];
						i < I.idx && (n = S, i = I.idx)
					}
				} catch (D) {
					u = !0, d = D
				} finally {
					try {
						!r && g.return != null && g.return()
					} finally {
						if (u) throw d
					}
				}
				return i === -1 && v("Could not find widget", 43778), n
			};

		function O() {
			return O = Bt(function(b, n, i, r) {
				var u, d, g, w, E, S, I, D, B, ee;
				return Ve(this, function(V) {
					switch (V.label) {
						case 0:
							if (u = b.params.sitekey, d = Ft(), !d) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(b, n, !1), [2];
							g = "h/".concat("g", "/"), w = new URL(d), E = "https", S = "", D = "".concat(E, "://").concat(w.host, "/cdn-cgi/challenge-platform/").concat(g, "rc/").concat(r).concat(S), V.label = 1;
						case 1:
							return V.trys.push([1, 3, , 4]), [4, fetch(D, {
								body: JSON.stringify({
									secondaryToken: i,
									sitekey: u
								}),
								headers: {
									"Content-Type": "application/json"
								},
								method: "POST",
								redirect: "manual"
							})];
						case 2:
							return B = V.sent(), B.status !== 200 ? (x("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(b, n, !1)) : a(b, n, !0), [3, 4];
						case 3:
							return ee = V.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), a(b, n, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), O.apply(this, arguments)
		}
		var N = function(b) {
			var n = b.data;
			if (n.source === W) {
				if (!Gr(b)) {
					x("Ignored message from wrong origin: ".concat(b.origin, "."));
					return
				}
				if (!(!n.widgetId || !h.widgetMap.has(n.widgetId))) {
					var i = $(n.widgetId),
						r = h.widgetMap.get(n.widgetId);
					if (!(!i || !r)) switch (n.event) {
						case "init": {
							var u;
							r.widgetInitStartTimeTsMs = U();
							var d = r.shadow.getElementById(i);
							d || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = n.mode, r.nextRcV = n.nextRcV, r.mode === z.Invisible && r.params["refresh-expired"] === J.Manual && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(J.Auto, "' or '").concat(J.Never, ".'")), r.mode !== z.Managed && r.params["refresh-timeout"] !== oe.Auto && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === K.Always || r.isExecuting && r.params.appearance === K.Execute ? Lt(d, r) : Rr(d), d.style.display = "";
							var g = r.shadow.querySelector("#".concat(i));
							g || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (u = g.contentWindow) === null || u === void 0 || u.postMessage({
								event: "init",
								source: W,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "translationInit": {
							var w = r.shadow.getElementById(i);
							w || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var E = new Map;
							r.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(Y) {
								E.set(Y, n.translationData[Y])
							}), Br(w, E);
							break
						}
						case "languageUnsupported": {
							x("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), r.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var S = r.shadow.getElementById(i);
							if (r.isExecuting = !1, S || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "unsupported_browser") {
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
							c(r, Q, n.widgetId), r.response = n.token, n.sToken ? e(r, i, n.sToken, n.chlId) : a(r, i, !1);
							break
						}
						case "fail": {
							n.rcV && c(r, n.rcV, n.widgetId), n.cfChlOut && (r.cfChlOut = n.cfChlOut), n.cfChlOutS && (r.cfChlOutS = n.cfChlOutS), n.code && (r.errorCode = n.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, n.frMd && (r.frMd = n.frMd), Mt(i);
							var D = r.cbError,
								B = n.code === We || n.code === Ue;
							if (B) {
								var ee, V = r.shadow.querySelector("#".concat(i));
								V == null || (ee = V.contentWindow) === null || ee === void 0 || ee.postMessage({
									event: "forceFail",
									source: W,
									widgetId: n.widgetId
								}, "*")
							}
							if (D) {
								var le;
								D(String((le = n.code) !== null && le !== void 0 ? le : Zt)) ? r.params.retry === ge.Auto && !r.isResetting && t(r, i, B) : (n.code && x("Error: ".concat(n.code, ".")), t(r, i, B))
							} else n.code ? (t(r, i, B), v("Error: ".concat(n.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var f = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (f) {
								x("A feedback report form is already opened for this widget.");
								return
							}
							ht(i, r, n.feedbackOrigin);
							break
						}
						case "requestFeedbackData": {
							var te, se = r.shadow.querySelector("#".concat(i));
							se || v("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (te = se.contentWindow) === null || te === void 0 || te.postMessage({
								event: "requestTurnstileResults",
								source: W,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "turnstileResults": {
							var be, j, de = (be = r.wrapper.parentNode) === null || be === void 0 ? void 0 : be.querySelector("#".concat(i, "-fr"));
							de || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (j = de.contentWindow) === null || j === void 0 || j.postMessage({
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								event: "feedbackData",
								frMd: r.frMd || n.frMd,
								mode: n.mode,
								rayId: n.rayId,
								rcV: n.rcV,
								sitekey: n.sitekey,
								source: W,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var re, xe = (re = r.wrapper.parentNode) === null || re === void 0 ? void 0 : re.querySelector("#".concat(i, "-fr"));
							xe || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), vr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ae, we = n.token;
							r.isExpired = !0, (ae = r.cbExpired) === null || ae === void 0 || ae.call(r, we), r.params["refresh-expired"] === J.Auto && !r.isResetting && _(H.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							c(r, Q, n.widgetId), Mt(i);
							var fe = r.cbTimeout;
							if (fe ? fe() : r.params["refresh-timeout"] === oe.Never && !r.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === oe.Auto && !r.isResetting) {
								var ne = r.cbAfterInteractive;
								ne == null || ne(), _(H.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							c(r, Q, n.widgetId), _(H.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							c(r, n.nextRcV, n.widgetId), _(n.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Ee, ke = r.shadow.getElementById(i);
							ke || v("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Ee = r.cbBeforeInteractive) === null || Ee === void 0 || Ee.call(r), r.params.appearance === K.InteractionOnly && Lt(ke, r);
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
							r.widgetParamsStartTimeTsMs = U();
							var Se = r.shadow.querySelector("#".concat(i));
							Se || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), r.isResetting = !1;
							var ie = {},
								Je = U(),
								Ae = {
									"ht.atrs": o(document.body.parentNode),
									pi: {
										ffp: hr(r.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: yr(document, nr, ir),
										sL: document.scripts.length,
										sR: r.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: _r(document.title),
										tL: document.getElementsByTagName("*").length,
										wp: gr(r.wrapper),
										xp: mr(r.wrapper).substring(0, or)
									},
									"w.iW": window.innerWidth
								};
							(Re = Se.contentWindow) === null || Re === void 0 || Re.postMessage(Pe({
								action: r.action,
								appearance: r.params.appearance,
								au: h.scriptUrl,
								cData: r.cData,
								ch: "4687995f25e1",
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
								source: W,
								timeExtraParamsMs: U() - r.widgetRenderStartTimeTsMs,
								timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
								timeLoadInitMs: U() - h.turnstileLoadInitTimeTsMs,
								timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
								timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
								timeTiefMs: U() - Je,
								upgradeAttempts: h.upgradeAttempts,
								upgradeCompletedCount: h.upgradeCompletedCount,
								url: Ft(),
								widgetId: n.widgetId,
								wPr: Ae
							}, ie), "*"), y(r, n.widgetId, Se), r.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		h.msgHandler = N, window.addEventListener("message", N);

		function R(b) {
			if (typeof b == "string") {
				var n = Ge(b);
				if (n && h.widgetMap.has(n)) return n;
				if (h.widgetMap.has(b)) return b;
				try {
					var i = document.querySelector(b);
					return i ? R(i) : null
				} catch (r) {
					return null
				}
			}
			return P(b, Element) ? m(b) : b || h.widgetMap.size === 0 ? null : h.widgetMap.keys().next().value
		}
		var X = {};
		return ot(Pe({}, X), {
			_private: {
				showFeedback: function(n) {
					var i = R(n);
					if (i) {
						var r = $(i);
						if (r) {
							var u = h.widgetMap.get(i);
							u && ht(r, u, Xe.Custom)
						}
					}
				}
			},
			execute: function(n, i) {
				var r = R(n);
				if (!r) {
					i === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var u = T(n, i);
					u || v("Failed to render widget", 43522), r = u
				}
				var d = h.widgetMap.get(r);
				if (d) {
					s(d, i);
					var g = $(r);
					if (d.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(g, "), consider using reset() before execute()."));
						return
					}
					if (d.isExecuting = !0, d.response) {
						var w;
						d.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(g, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (w = d.cbSuccess) === null || w === void 0 || w.call(d, d.response, !1);
						return
					}
					d.isExpired && x("Call to execute on a expired-widget (".concat(g, "), consider using reset() before.")), d.isStale && (_(H.StaleExecute, g), d.isExecuting = !0), d.msgQueue.push(ce.Execute), d.isExecuted = !0;
					var E = d.shadow.querySelector("#".concat(g));
					if (E || (d.isExecuting = !1, v("Widget ".concat(g, " to execute was not found"), 43522)), d.isResetting) return;
					if (d.isInitialized && y(d, r, E), d.isInitialized && d.params.appearance === K.Execute && Lt(E, d), d.isExecuting) {
						var S, I = d.shadow.querySelector("#".concat(g));
						I || v("Received state for an unknown widget: ".concat(r), 3078), (S = I.contentWindow) === null || S === void 0 || S.postMessage({
							event: "execute",
							source: W,
							widgetId: r
						}, "*")
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = k();
					if (r) {
						var u, d = h.widgetMap.get(r);
						return d != null && d.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (u = h.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.response
					}
					v("Could not find a widget", 43794)
				}
				var g = R(n);
				return g || v("Could not find widget for provided container", 43778), (i = h.widgetMap.get(g)) === null || i === void 0 ? void 0 : i.response
			},
			implicitRender: Pt,
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = k();
					if (r) {
						var u, d;
						return (d = (u = h.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.isExpired) !== null && d !== void 0 ? d : !1
					}
					v("Could not find a widget", 43794)
				}
				var g = R(n);
				g || v("Could not find widget for provided container", 43778);
				var w;
				return (w = (i = h.widgetMap.get(g)) === null || i === void 0 ? void 0 : i.isExpired) !== null && w !== void 0 ? w : !1
			},
			ready: function(n) {
				if (h.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : F(n), '"'), 3841), h.isReady) {
					n();
					return
				}
				Wt.push(n)
			},
			remove: A,
			render: T,
			reset: p
		})
	}();

	function Xr(e) {
		var t = e.getAttribute("data-sitekey"),
			a = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (_t(c) ? a.theme = c : x('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (Rt(l) ? a.size = l : x('Unknown data-size value: "'.concat(l, '".'))), 0) var m;
		var y = e.getAttribute("data-action");
		typeof y == "string" && (a.action = y);
		var s = e.getAttribute("data-cdata");
		typeof s == "string" && (a.cData = s);
		var p = e.getAttribute("data-retry");
		p && (bt(p) ? a.retry = p : x('Invalid data-retry value: "'.concat(p, ", expected either 'never' or 'auto'\".")));
		var _ = e.getAttribute("data-retry-interval");
		if (_) {
			var A = Number.parseInt(_, 10);
			xt(A) ? a["retry-interval"] = A : x('Invalid data-retry-interval value: "'.concat(_, ', expected an integer value > 0 and < 900000".'))
		}
		var T = e.getAttribute("data-expiry-interval");
		if (T) {
			var k = Number.parseInt(T, 10);
			wt(k) ? a["expiry-interval"] = k : x('Invalid data-expiry-interval value: "'.concat(k, ', expected an integer value > 0 and < 360000".'))
		}
		var O = e.getAttribute("data-refresh-expired");
		O && (St(O) ? a["refresh-expired"] = O : x('Unknown data-refresh-expired value: "'.concat(O, ", expected either: 'never', 'auto' or 'manual'.")));
		var N = e.getAttribute("data-refresh-timeout");
		N && (At(N) ? a["refresh-timeout"] = N : x('Unknown data-refresh-timeout value: "'.concat(N, ", expected either: 'never', 'auto' or 'manual'.")));
		var R = e.getAttribute("data-language");
		R && (It(R) ? a.language = R : x('Invalid data-language value: "'.concat(R, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function X(w) {
			var E = e.getAttribute(w);
			return E && window[E] ? window[E] : void 0
		}
		var b = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		b.forEach(function(w) {
			a[w] = X("data-".concat(w))
		});
		var n = e.getAttribute("data-feedback-enabled");
		n ? (Er(n) || x('Invalid data-feedback-enabled value: "'.concat(n, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = n === "true") : a["feedback-enabled"] = !0;
		var i, r = (i = e.getAttribute("data-response-field")) !== null && i !== void 0 ? i : "true";
		a["response-field"] = r === "true";
		var u = e.getAttribute("data-response-field-name");
		u && (a["response-field-name"] = u);
		var d = e.getAttribute("data-execution");
		d && (Ot(d) ? a.execution = d : x('Unknown data-execution value: "'.concat(d, ", expected either: 'render' or 'execute'.")));
		var g = e.getAttribute("data-appearance");
		return g && (Ct(g) ? a.appearance = g : x('Unknown data-appearance value: "'.concat(g, ", expected either: 'always', 'execute', or 'interaction-only'."))), a
	}

	function Yr() {
		var e = !0;
		Nt(h, e), h.msgHandler && window.removeEventListener("message", h.msgHandler), br(window.turnstile, h)
	}
	ye = !1, C = pr(), h.scriptWasLoadedAsync = (Ye = C == null ? void 0 : C.loadedAsync) !== null && Ye !== void 0 ? Ye : !1, h.scriptUrl = (Qe = C == null ? void 0 : C.src) !== null && Qe !== void 0 ? Qe : "undefined", C != null && C.params && (_e = C.params.get("compat"), (_e == null ? void 0 : _e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled.") : (x("Compatibility layer enabled."), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Vt) : _e !== null && x('Unknown value for api.js?compat: "'.concat(_e, '", ignoring.')), C.params.forEach(function(e, t) {
		L(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || x('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), ye = C.params.get("_upgrade") === "true", G = C.params.get("onload"), G && !ye && setTimeout(function() {
		typeof window[G] == "function" ? window[G]() : (x("Unable to find onload callback '".concat(G, "' immediately after loading, expected 'function', got '").concat(F(window[G]), "'.")), setTimeout(function() {
			typeof window[G] == "function" ? window[G]() : x("Unable to find onload callback '".concat(G, "' after 1 second, expected 'function', got '").concat(F(window[G]), "'."))
		}, 1e3))
	}, 0)), Dt = "turnstile" in window, Dt && !ye ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Dt && ye && (xr(window.turnstile, h), kt(h), (C == null || (Ke = C.params) === null || Ke === void 0 ? void 0 : Ke.get("render")) !== "explicit" && setTimeout(Pt, 0)), window.turnstile = Vt, ye || ((C == null || ($e = C.params) === null || $e === void 0 ? void 0 : $e.get("render")) !== "explicit" && Wt.push(Pt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Tr, 0) : window.addEventListener("DOMContentLoaded", Tr))), Sr = 24 * 60 * 60 * 1e3, window.setTimeout(Yr, Sr);
	var ye, C, Ye, Qe, _e, G, Dt, Ke, $e, Sr;
})();