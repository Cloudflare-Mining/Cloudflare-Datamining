"use strict";
(function() {
	function zt(e, t, n, o, c, u, g) {
		try {
			var h = e[u](g),
				f = h.value
		} catch (d) {
			n(d);
			return
		}
		h.done ? t(f) : Promise.resolve(f).then(o, c)
	}

	function Ht(e) {
		return function() {
			var t = this,
				n = arguments;
			return new Promise(function(o, c) {
				var u = e.apply(t, n);

				function g(f) {
					zt(u, o, c, g, h, "next", f)
				}

				function h(f) {
					zt(u, o, c, g, h, "throw", f)
				}
				g(void 0)
			})
		}
	}

	function V(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : V(e, t)
	}

	function De(e, t, n) {
		return t in e ? Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = n, e
	}

	function Pe(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(n);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(c) {
				return Object.getOwnPropertyDescriptor(n, c).enumerable
			}))), o.forEach(function(c) {
				De(e, c, n[c])
			})
		}
		return e
	}

	function Mr(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), n.push.apply(n, o)
		}
		return n
	}

	function ot(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Mr(Object(t)).forEach(function(n) {
			Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
		}), e
	}

	function Gt(e) {
		if (Array.isArray(e)) return e
	}

	function Xt(e, t) {
		var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var o = [],
				c = !0,
				u = !1,
				g, h;
			try {
				for (n = n.call(e); !(c = (g = n.next()).done) && (o.push(g.value), !(t && o.length === t)); c = !0);
			} catch (f) {
				u = !0, h = f
			} finally {
				try {
					!c && n.return != null && n.return()
				} finally {
					if (u) throw h
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
		for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
		return o
	}

	function Qt(e, t) {
		if (e) {
			if (typeof e == "string") return ct(e, t);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ct(e, t)
		}
	}

	function Ce(e, t) {
		return Gt(e) || Xt(e, t) || Qt(e, t) || Yt()
	}

	function D(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ve(e, t) {
		var n = {
				label: 0,
				sent: function() {
					if (u[0] & 1) throw u[1];
					return u[1]
				},
				trys: [],
				ops: []
			},
			o, c, u, g;
		return g = {
			next: h(0),
			throw: h(1),
			return: h(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function h(d) {
			return function(w) {
				return f([d, w])
			}
		}

		function f(d) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, d[0] && (n = 0)), n;) try {
				if (o = 1, c && (u = d[0] & 2 ? c.return : d[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, d[1])).done) return u;
				switch (c = 0, u && (d = [d[0] & 2, u.value]), d[0]) {
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
						n.label++, c = d[1], d = [0];
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
			} catch (w) {
				d = [6, w], c = 0
			} finally {
				o = u = 0
			}
			if (d[0] & 5) throw d[1];
			return {
				value: d[0] ? d[1] : void 0,
				done: !0
			}
		}
	}
	var $t = 300,
		Jt = 10;
	var Kt = {
		code: 200500,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com (or challenges.fed.cloudflare.com) could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?",
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1
	};
	var Zt = 300020;
	var We = 300030;
	var Ue = 300031;

	function lt(e) {
		var t = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel)), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var je = "cf-chl-widget-",
		U = "cloudflare-challenge",
		er = ".cf-turnstile",
		tr = ".cf-challenge",
		rr = ".g-recaptcha",
		ut = "cf_challenge_response",
		st = "cf-turnstile-response",
		dt = "g-recaptcha-response",
		nr = 8e3,
		ft = "private-token",
		ar = 3,
		ir = 500,
		or = 500,
		Q = "";
	var z;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(z || (z = {}));
	var L;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(L || (L = {}));
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
	var K;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(K || (K = {}));
	var oe;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(oe || (oe = {}));
	var $;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})($ || ($ = {}));
	var ye;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(ye || (ye = {}));
	var ce;
	(function(e) {
		e.Execute = "execute"
	})(ce || (ce = {}));
	var H;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(H || (H = {}));

	function F(e, t) {
		return e.indexOf(t) !== -1
	}
	var Nr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Lr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		cr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function pt(e, t, n) {
		var o = "https://challenges.cloudflare.com",
			c, u = (c = n == null ? void 0 : n.origin) !== null && c !== void 0 ? c : o;
		if (t) {
			var g;
			return (g = e["base-url"]) !== null && g !== void 0 ? g : u
		}
		return u
	}

	function vt(e, t, n, o, c, u, g, h, f) {
		var d = pt(n, c, h),
			w = u ? "h/".concat(u, "/") : "",
			R = f ? "&".concat(f) : "",
			C = n["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(d, "/cdn-cgi/challenge-platform/").concat(w, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(n.theme, "/").concat(C, "/").concat(g, "/").concat(n.size, "?lang=").concat(n.language).concat(R)
	}
	var mt = function(e) {
			var t, n, o = window.innerWidth < 400,
				c = e.state !== me.FailureFeedbackCode && (e.state === me.FailureFeedback || e.state === me.FailureHavingTroubles || !e.errorCode),
				u, g = F(Nr, (u = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && u !== void 0 ? u : "nonexistent"),
				h, f = F(Lr, (h = (n = e.displayLanguage) === null || n === void 0 ? void 0 : n.toLowerCase()) !== null && h !== void 0 ? h : "nonexistent");
			return o ? Fr({
				isModeratelyVerbose: f,
				isSmallerFeedback: c,
				isVerboseLanguage: g
			}) : c && g ? "630px" : c && f ? "620px" : c ? "600px" : g ? "690px" : "680px"
		},
		Fr = function(e) {
			var t = e.isVerboseLanguage,
				n = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return n && t ? "660px" : n && o ? "620px" : n ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function Be(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function lr(e, t) {
		if (!V(e, t)) throw new TypeError("Cannot call a class as a function")
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

	function ze() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Oe(e, t, n) {
		return ze() ? Oe = Reflect.construct : Oe = function(c, u, g) {
			var h = [null];
			h.push.apply(h, u);
			var f = Function.bind.apply(c, h),
				d = new f;
			return g && Z(d, g.prototype), d
		}, Oe.apply(null, arguments)
	}

	function le(e) {
		return le = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
			return n.__proto__ || Object.getPrototypeOf(n)
		}, le(e)
	}

	function sr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function He(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return He = function(o) {
			if (o === null || !sr(o)) return o;
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
			}), Z(c, o)
		}, He(e)
	}

	function dr(e, t) {
		return t && (D(t) === "object" || typeof t == "function") ? t : Be(e)
	}

	function fr(e) {
		var t = ze();
		return function() {
			var o = le(e),
				c;
			if (t) {
				var u = le(this).constructor;
				c = Reflect.construct(o, arguments, u)
			} else c = o.apply(this, arguments);
			return dr(this, c)
		}
	}
	var pr = (function(e) {
		"use strict";
		ur(n, e);
		var t = fr(n);

		function n(o, c) {
			lr(this, n);
			var u;
			return u = t.call(this, o), De(Be(u), "code", void 0), u.name = "TurnstileError", u.code = c, u
		}
		return n
	})(He(Error));

	function v(e, t) {
		var n = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new pr(n, t)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Ge(e) {
		return e.startsWith(je) ? e.substring(je.length) : null
	}

	function J(e) {
		return "".concat(je).concat(e)
	}

	function gt() {
		var e = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (V(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var n = document.querySelectorAll("script"), o = 0, c; c = n[o]; o++)
			if (V(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function vr() {
		var e = gt();
		e || v("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			n;
		try {
			n = new URL(t)
		} catch (u) {
			v("Could not parse Turnstile script tag URL", 43777)
		}
		var o = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: n
		};
		(e.async || e.defer) && (o.loadedAsync = !0);
		var c = t.split("?");
		return c.length > 1 && (o.params = new URLSearchParams(c[1])), o
	}

	function j() {
		return Date.now()
	}
	var yt = function(e, t, n, o) {
			var c = pt(t.params, !1, o),
				u = "h/".concat("g", "/"),
				g, h, f = "".concat(c, "/cdn-cgi/challenge-platform/").concat(u, "feedback-reports/").concat(Ge(e), "/").concat(t.displayLanguage, "/").concat((h = t.params.theme) !== null && h !== void 0 ? h : t.theme, "/").concat(n);
			if (window.top !== window.self) {
				window.open(f, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var d = document.createElement("div");
			d.style.position = "fixed", d.style.zIndex = "2147483646", d.style.width = "100vw", d.style.height = "100vh", d.style.top = "0", d.style.left = "0", d.style.transformOrigin = "center center", d.style.overflowX = "hidden", d.style.overflowY = "auto", d.style.background = "rgba(0,0,0,0.4)";
			var w = document.createElement("div");
			w.style.display = "table-cell", w.style.verticalAlign = "middle", w.style.width = "100vw", w.style.height = "100vh";
			var R = document.createElement("div");
			R.className = "cf-turnstile-feedback", R.id = "cf-fr-id", R.style.width = "100vw", R.style.maxWidth = "450px", R.style.height = mt(t), R.style.position = "relative", R.style.zIndex = "2147483647", R.style.backgroundColor = "#ffffff", R.style.borderRadius = "5px", R.style.left = "0px", R.style.top = "0px", R.style.overflow = "hidden", R.style.margin = "0px auto";
			var C = document.createElement("iframe");
			C.id = "".concat(e, "-fr"), C.setAttribute("src", f), C.setAttribute("allow", "cross-origin-isolated; fullscreen"), C.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), C.setAttribute("scrolling", "no"), C.style.borderWidth = "0px", C.style.width = "100%", C.style.height = "100%", C.style.overflow = "hidden";
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "img"), T.setAttribute("aria-label", "Close button icon"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", t.displayRtl ? T.style.left = "2px" : T.style.right = "6px", T.style.top = "5px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function() {
				var N;
				(N = d.parentNode) === null || N === void 0 || N.removeChild(d)
			}), T.addEventListener("keydown", function(N) {
				if (N.key === "Enter" || N.key === " ") {
					var _;
					(_ = d.parentNode) === null || _ === void 0 || _.removeChild(d)
				}
			});
			var k = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			k.setAttribute("ry", "12"), k.setAttribute("rx", "12"), k.setAttribute("cy", "12"), k.setAttribute("cx", "12"), k.setAttribute("fill", "none"), k.setAttribute("stroke-width", "0"), T.appendChild(k);
			var M = document.createElementNS("http://www.w3.org/2000/svg", "line");
			M.setAttribute("stroke-width", "1"), M.setAttribute("stroke", "#999"), M.setAttribute("fill", "none"), M.setAttribute("x1", "6"), M.setAttribute("x2", "18"), M.setAttribute("y1", "18"), M.setAttribute("y2", "5"), T.appendChild(M);
			var S = document.createElementNS("http://www.w3.org/2000/svg", "line");
			S.setAttribute("stroke-width", "1"), S.setAttribute("stroke", "#999"), S.setAttribute("fill", "none"), S.setAttribute("x1", "6"), S.setAttribute("x2", "18"), S.setAttribute("y1", "5"), S.setAttribute("y2", "18"), T.appendChild(S), R.appendChild(C), R.appendChild(T), w.appendChild(R), d.appendChild(w), d.addEventListener("click", function() {
				var N;
				(N = d.parentNode) === null || N === void 0 || N.removeChild(d)
			}), t.wrapper.parentNode.appendChild(d), window.addEventListener("resize", function() {
				R.style.height = mt(t)
			})
		},
		mr = function(e) {
			var t, n, o, c;
			(c = document.getElementById(e)) === null || c === void 0 || (o = c.parentElement) === null || o === void 0 || (n = o.parentElement) === null || n === void 0 || (t = n.parentElement) === null || t === void 0 || t.remove()
		};
	var Xe;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom"
	})(Xe || (Xe = {}));
	var ht = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function gr(e) {
		if (!e) return "-";
		var t = function(n, o) {
			if (!n || n.tagName === "BODY") return o;
			for (var c = 1, u = n.previousElementSibling; u;) u.tagName === n.tagName && c++, u = u.previousElementSibling;
			var g = ht(n.tagName.toLowerCase()),
				h = "".concat(g, "[").concat(c, "]");
			return t(n.parentNode, "/".concat(h).concat(o))
		};
		return t(e, "")
	}

	function yr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Dr = {
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
		var n = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = n.slice(0, 20).map(function(u) {
				return Dr[u.type] || "-"
			}).join(""),
			c = ["m:".concat(t.method || ""), "f:".concat(n.length), o].join("|");
		return c
	}

	function _r(e, t, n) {
		for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(R) {
					return c > t || o.length > n ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = u.nextNode()) !== null && o.length < n;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var h = g;
				o += "".concat(ht(h.tagName.toLowerCase()));
				for (var f = 0; f < h.attributes.length; f++) {
					var d = h.attributes[f];
					o += "_".concat(ht(d.name, 2))
				}
				o += ">"
			} else g.nodeType === Node.TEXT_NODE && (o += "-t");
			var w = g.parentNode;
			for (c = 0; w !== e && w !== null;) c++, w = w.parentNode
		}
		return o.substring(0, n)
	}

	function br(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : D(e)));
		for (var t = 5381, n = 0; n < e.length; n++) {
			var o = e.charCodeAt(n);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function xr(e, t) {
		var n;
		t.upgradeAttempts++;
		var o = gt();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var u = new URL(o.src),
				g = document.createElement("script");
			u.searchParams.set("_upgrade", "true"), u.searchParams.set("_cb", String(Date.now())), g.async = !0, c && (g.nonce = c), g.setAttribute("crossorigin", "anonymous"), g.src = u.toString(), o == null || (n = o.parentNode) === null || n === void 0 || n.replaceChild(g, o)
		}
	}

	function wr(e, t) {
		var n = e._pState;
		return n ? (t.isReady = n.isReady, t.isRecaptchaCompatibilityMode = n.isRecaptchaCompatibilityMode, t.lastWidgetIdx = n.lastWidgetIdx, t.scriptWasLoadedAsync = n.scriptWasLoadedAsync, t.upgradeAttempts = n.upgradeAttempts, t.upgradeCompletedCount = n.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = j(), t.watchCatInterval = null, t.watchCatSeq = n.watchCatSeq, t.widgetMap = n.widgetMap, !0) : !1
	}

	function _t(e) {
		return F(["auto", "dark", "light"], e)
	}

	function bt(e) {
		return F(["auto", "never"], e)
	}

	function xt(e) {
		return e > 0 && e < 9e5
	}

	function wt(e) {
		return e > 0 && e < 36e4
	}
	var Pr = /^[0-9A-Za-z_-]{3,100}$/;

	function Er(e) {
		return Pr.test(e)
	}
	var Vr = /^[a-z0-9_-]{0,32}$/i;

	function Et(e) {
		return e === void 0 ? !0 : typeof e == "string" && Vr.test(e)
	}
	var Wr = /^[a-z0-9_\-=]{0,255}$/i;

	function Tt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Wr.test(e)
	}

	function Rt(e) {
		return F([L.Normal, L.Compact, L.Invisible, L.Flexible], e)
	}

	function St(e) {
		return F(["auto", "manual", "never"], e)
	}

	function At(e) {
		return F(["auto", "manual", "never"], e)
	}
	var Ur = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function It(e) {
		return e === "auto" || Ur.test(e)
	}

	function Ct(e) {
		return F(["always", "execute", "interaction-only"], e)
	}

	function Tr(e) {
		return F(["true", "false"], e)
	}

	function Ot(e) {
		return F(["render", "execute"], e)
	}
	var jr = 900,
		qr = 45,
		Br = 50;

	function zr(e) {
		e.watchCatSeq++;
		var t = !0,
			n = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), u; !(t = (u = c.next()).done); t = !0) {
				var g = Ce(u.value, 2),
					h = g[0],
					f = g[1],
					d;
				f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq);
				var w = J(h);
				if (!w || !f.shadow) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				var R = f.shadow.querySelector("#".concat(w));
				if (!R) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(f.isComplete || f.isFailed || f.isResetting)) {
					var C = f.watchcat.seq - 1 - qr,
						T = f.watchcat.lastAckedSeq < C,
						k = f.watchcat.seq - 1 - Br,
						M = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < k;
					if ((f.isExecuting || !f.isInitialized || f.isInitialized && !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && T || M) {
						var S;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var N = function(r, l) {
							console.log("Turnstile Widget seem to have ".concat(r, ": "), l)
						};
						N(T ? "hung" : "crashed", h);
						var _ = T ? We : Ue,
							a;
						if ((S = e.msgHandler) === null || S === void 0 || S.call(e, {
								data: {
									code: _,
									event: "fail",
									rcV: (a = f.nextRcV) !== null && a !== void 0 ? a : Q,
									source: U,
									widgetId: h
								}
							}), 0) var i;
						continue
					}(d = R.contentWindow) === null || d === void 0 || d.postMessage({
						event: "meow",
						seq: e.watchCatSeq,
						source: U,
						widgetId: h
					}, "*")
				}
			}
		} catch (r) {
			n = !0, o = r
		} finally {
			try {
				!t && c.return != null && c.return()
			} finally {
				if (n) throw o
			}
		}
	}

	function kt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			zr(e)
		}, jr))
	}

	function Mt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && clearInterval(e.watchCatInterval)
	}
	var m = {
		apiVersion: 1,
		isReady: !1,
		isRecaptchaCompatibilityMode: !1,
		lastWidgetIdx: 0,
		scriptUrl: "undefined",
		scriptUrlParsed: void 0,
		scriptWasLoadedAsync: !1,
		turnstileLoadInitTimeTsMs: j(),
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		watchCatInterval: null,
		watchCatSeq: 0,
		widgetMap: new Map
	};

	function Nt(e) {
		Ir(e, "")
	}

	function Pt() {
		var e = [er, tr];
		m.isRecaptchaCompatibilityMode && e.push(rr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Vt.render(t)
		})
	}
	var Wt = [];

	function Rr() {
		m.isReady = !0;
		var e = !0,
			t = !1,
			n = void 0;
		try {
			for (var o = Wt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var u = c.value;
				u()
			}
		} catch (g) {
			t = !0, n = g
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw n
			}
		}
	}

	function Hr(e) {
		var t = m.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var n, o = (n = t.params["response-field"]) !== null && n !== void 0 ? n : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var u;
				c.name = (u = t.params["response-field-name"]) !== null && u !== void 0 ? u : st, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var g;
				if (typeof t.params["response-field-name"] != "string" && Cr((g = t.params.sitekey) !== null && g !== void 0 ? g : "")) {
					var h = document.createElement("input");
					h.type = "hidden", h.name = ut, h.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(h)
				}
			}
			if (m.isRecaptchaCompatibilityMode) {
				var f = document.createElement("input");
				f.type = "hidden", f.name = dt, f.id = "".concat(e, "_g_response"), t.wrapper.appendChild(f)
			}
		}
	}

	function Ir(e, t) {
		Hr(e);
		var n = document.getElementById("".concat(e, "_response"));
		n !== null && V(n, HTMLInputElement) && (n.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && V(o, HTMLInputElement) && (o.value = t), m.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && V(c, HTMLInputElement) && (c.value = t)
		}
	}

	function Gr(e, t) {
		var n;
		return !!(!((n = t.kills) === null || n === void 0) && n.includes(e))
	}

	function Lt(e, t) {
		var n = t.params,
			o = n.size,
			c = o === void 0 ? "normal" : o,
			u = t.mode;
		switch (u) {
			case z.NonInteractive:
			case z.Managed:
				switch (c) {
					case L.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case L.Invisible:
						v('Invalid value for parameter "size", expected "'.concat(L.Compact, '", "').concat(L.Flexible, '", or "').concat(L.Normal, '", got "').concat(c, '"'), 2817);
					case L.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case L.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case z.Invisible:
				!Gr("floating-invisible", t) && t.params.sitekey === "0x4AAAAAAADnOjc0PNeA8qVm" ? (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0", e.style.position = "absolute", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.transform = "translateX(-9999px)") : (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(z.NonInteractive, '", "').concat(z.Managed, '" or "').concat(z.Invisible, '", got "').concat(u, '"'), 2818)
		}
	}

	function Sr(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Xr(e, t) {
		var n = t.get("turnstile_iframe_alt");
		n && (e.title = n)
	}

	function Yr(e) {
		return e.origin ? F(cr, e.origin) : !0
	}

	function Cr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Ft() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Vt = (function() {
		var e = function(a, i, r, l) {
				return k.apply(this, arguments)
			},
			t = function(a, i, r) {
				if (a.params.retry === ge.Auto || r) {
					a.isExecuted && (a.msgQueue.push(ce.Execute), a.isExecuted = !0, a.isExecuting = !0);
					var l, s = r ? 0 : 1e3 * 2 + ((l = a.params["retry-interval"]) !== null && l !== void 0 ? l : 0);
					a.retryTimeout = window.setTimeout(function() {
						var y = r ? H.CrashedRetry : H.FailureRetry;
						w(y, i)
					}, s)
				}
			},
			n = function(a, i, r) {
				var l;
				a.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, Ir(i, a.response), (l = a.cbSuccess) === null || l === void 0 || l.call(a, a.response, r)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, r = i.length, l = new Array(r), s = 0; s < r; s++) l[s] = i[s].name;
				return l
			},
			c = function(a, i, r) {
				if (a.rcV = i, 0) var l
			},
			u = function() {
				var a = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = a.length,
					r = "";
				do {
					r = "";
					for (var l = 0; l < 5; l++) r += a.charAt(Math.floor(Math.random() * i))
				} while (m.widgetMap.has(r));
				return r
			},
			g = function(a) {
				var i = !0,
					r = !1,
					l = void 0;
				try {
					for (var s = m.widgetMap[Symbol.iterator](), y; !(i = (y = s.next()).done); i = !0) {
						var x = Ce(y.value, 2),
							E = x[0],
							I = x[1];
						if (I.wrapper.parentElement === a) return E
					}
				} catch (O) {
					r = !0, l = O
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (r) throw l
					}
				}
				return null
			},
			h = function(a, i, r) {
				for (; a.msgQueue.length > 0;) {
					var l, s = a.msgQueue.pop();
					(l = r.contentWindow) === null || l === void 0 || l.postMessage({
						event: s,
						source: U,
						widgetId: i
					}, "*")
				}
			},
			f = function(a, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						l = [],
						s = !0,
						y = !1,
						x = void 0;
					try {
						for (var E = r[Symbol.iterator](), I; !(s = (I = E.next()).done); s = !0) {
							var O = I.value;
							i[O] && i[O] !== a.params[O] && l.push(O)
						}
					} catch (P) {
						y = !0, x = P
					} finally {
						try {
							!s && E.return != null && E.return()
						} finally {
							if (y) throw x
						}
					}
					l.length > 0 && v("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(l.join(",")), 3618), i.action && (Et(i.action) || v('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (Tt(i.cData) || v('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			d = function(a) {
				w(H.Api, a)
			},
			w = function(a, i) {
				var r = S(i);
				r || v("Nothing to reset found for provided container", 3329);
				var l = m.widgetMap.get(r);
				if (l) {
					var s;
					l.isResetting = !0, l.response = void 0, l.mode = void 0, l.msgQueue = [], l.isComplete = !1, l.isExecuting = !1, l.isExpired = !1, l.isFailed = !1, l.isInitialized = !1, l.isStale = !1, l.isOverrunning = !1, l.watchcat.overrunBeginSeq = 0, l.watchcat.lastAckedSeq = 0, l.watchcat.seq = 0, l.params.execution === ye.Render && (l.msgQueue.push(ce.Execute), l.isExecuted = !0, l.isExecuting = !0);
					var y = J(r),
						x = l.shadow.querySelector("#".concat(y));
					(!y || !x) && v("Widget ".concat(r, " to reset was not found."), 3330), l.params.appearance === $.InteractionOnly && Sr(x), l.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
					var E = x.cloneNode(),
						I;
					E.src = vt(r, l.params.sitekey, l.params, (I = l.rcV) !== null && I !== void 0 ? I : Q, !1, "g", a, m.scriptUrlParsed, lt(l)), (s = x.parentNode) === null || s === void 0 || s.replaceChild(E, x), Nt(y), l.retryTimeout && window.clearTimeout(l.retryTimeout)
				} else v("Widget ".concat(r, " to reset was not found."), 3331)
			},
			R = function(a) {
				var i, r = S(a);
				if (!r || !m.widgetMap.has(r)) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var l = J(r),
					s = ["input#".concat(l, "_response"), "input#".concat(l, "_legacy_response"), "input#".concat(l, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(E) {
					return E.remove()
				});
				var y = m.widgetMap.get(r);
				y == null || y.shadow.querySelectorAll(s.join(", ")).forEach(function(E) {
					return E.remove()
				}), y == null || y.wrapper.remove();
				var x = (i = m.widgetMap.get(r)) === null || i === void 0 ? void 0 : i.retryTimeout;
				x && window.clearTimeout(x), m.widgetMap.delete(r), Mt(m)
			},
			C = function(a, i) {
				var r, l, s = j(),
					y;
				if (typeof a == "string") try {
					var x = document.querySelector(a);
					x || v('Unable to find a container for "'.concat(a, '"'), 3585), y = x
				} catch (Bt) {
					v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else V(a, HTMLElement) ? y = a : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var E = !0,
					I = !1,
					O = void 0;
				try {
					for (var P = m.widgetMap.values()[Symbol.iterator](), G; !(E = (G = P.next()).done); E = !0) {
						var ee = G.value;
						if (y.contains(ee.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Bt) {
					I = !0, O = Bt
				} finally {
					try {
						!E && P.return != null && P.return()
					} finally {
						if (I) throw O
					}
				}
				var W = Ft();
				if (!W) return v("Turnstile cannot determine its page location", 3607);
				if (W.startsWith("file:")) return v("Turnstile cannot run in a file:// url", 3608);
				var ue = Qr(y);
				if (ue) {
					var p = Object.assign(ue, i),
						te = p.action,
						se = p.cData,
						be = p.chlPageData,
						q = p.sitekey,
						de;
					p.theme = (de = p.theme) !== null && de !== void 0 ? de : qe.Auto;
					var re;
					p.retry = (re = p.retry) !== null && re !== void 0 ? re : ge.Auto;
					var xe;
					p.execution = (xe = p.execution) !== null && xe !== void 0 ? xe : ye.Render;
					var ne;
					p.appearance = (ne = p.appearance) !== null && ne !== void 0 ? ne : $.Always;
					var we;
					p["retry-interval"] = Number((we = p["retry-interval"]) !== null && we !== void 0 ? we : nr);
					var fe;
					p["expiry-interval"] = Number((fe = p["expiry-interval"]) !== null && fe !== void 0 ? fe : ($t - Jt) * 1e3);
					var ae;
					p.size = (ae = p.size) !== null && ae !== void 0 ? ae : L.Normal;
					var Ee = p.callback,
						ke = p["expired-callback"],
						Te = p["timeout-callback"],
						Re = p["after-interactive-callback"],
						Se = p["before-interactive-callback"],
						ie = p["error-callback"],
						Ke = p["unsupported-callback"];
					typeof q != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof q == "undefined" ? "undefined" : D(q), '"'), 3588), Er(q) || v('Invalid input for parameter "sitekey", got "'.concat(q, '"'), 3589), Rt(p.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(D(p.size)), 3590), _t(p.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(D(p.theme)), 3591), bt(p.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(D(p.retry)), 3592), p.language || (p.language = "auto"), It(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), Ct(p.appearance) || v('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Ot(p.execution) || v('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), xt(p["retry-interval"]) || v('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), wt(p["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Ae, Y = (Ae = p["refresh-expired"]) !== null && Ae !== void 0 ? Ae : K.Auto;
					St(Y) ? p["refresh-expired"] = Y : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Y, '" ').concat(typeof Y == "undefined" ? "undefined" : D(Y)), 3603);
					var Ze, Me = (Ze = p["refresh-timeout"]) !== null && Ze !== void 0 ? Ze : oe.Auto;
					At(Y) ? p["refresh-timeout"] = Me : v('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(Me, '" ').concat(typeof Me == "undefined" ? "undefined" : D(Me)), 3603);
					var B = document.createElement("iframe"),
						pe = document.createElement("div"),
						Ut = pe.attachShadow({
							mode: "closed"
						});
					Et(te) || v('Invalid input for optional parameter "action", got "'.concat(te, '"'), 3604), Tt(se) || v('Invalid input for optional parameter "cData", got "'.concat(se, '"'), 3605);
					var Ie = u(),
						ve = J(Ie);
					if (!(!Ie || !ve)) {
						var jt = [],
							et = p.execution === ye.Render;
						et && jt.push(ce.Execute), m.lastWidgetIdx++;
						var Or = {};
						m.widgetMap.set(Ie, ot(Pe({
							action: te,
							cbAfterInteractive: Re,
							cbBeforeInteractive: Se,
							cbError: ie,
							cbExpired: ke,
							cbSuccess: Ee,
							cbTimeout: Te,
							cbUnsupported: Ke,
							cData: se,
							chlPageData: be,
							hasResponseParamEl: !1,
							idx: m.lastWidgetIdx,
							isComplete: !1,
							isExecuted: et,
							isExecuting: et,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: jt,
							params: p,
							rcV: Q,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, Or), {
							isOverrunning: !1,
							shadow: Ut,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: s,
							wrapper: pe
						})), kt(m);
						var tt = m.widgetMap.get(Ie);
						tt || v("Turnstile Initialization Error ", 3606), B.style.display = "none", B.style.border = "none", B.style.overflow = "hidden", B.setAttribute("src", vt(Ie, q, p, Q, !1, "g", H.New, m.scriptUrlParsed, lt(tt))), B.onerror = function() {
							if (ie) {
								ie == null || ie(String(Kt.code));
								return
							}
							v("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var qt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							rt;
						F((rt = (l = document.featurePolicy) === null || l === void 0 || (r = l.features) === null || r === void 0 ? void 0 : r.call(l)) !== null && rt !== void 0 ? rt : [], ft) && qt.push(ft), B.setAttribute("allow", qt.join("; ")), B.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), B.id = ve;
						var nt;
						B.tabIndex = (nt = p.tabindex) !== null && nt !== void 0 ? nt : 0, B.title = "Widget containing a Cloudflare security challenge", Ut.appendChild(B);
						var at, kr = (at = p["response-field"]) !== null && at !== void 0 ? at : !0;
						if (kr) {
							var Ne = document.createElement("input");
							Ne.type = "hidden";
							var it;
							if (Ne.name = (it = p["response-field-name"]) !== null && it !== void 0 ? it : st, Ne.id = "".concat(ve, "_response"), pe.appendChild(Ne), typeof p["response-field-name"] != "string" && Cr(q)) {
								var Le = document.createElement("input");
								Le.type = "hidden", Le.name = ut, Le.id = "".concat(ve, "_legacy_response"), pe.appendChild(Le)
							}
						}
						if (m.isRecaptchaCompatibilityMode) {
							var Fe = document.createElement("input");
							Fe.type = "hidden", Fe.name = dt, Fe.id = "".concat(ve, "_g_response"), pe.appendChild(Fe)
						}
						return y.appendChild(pe), tt.widgetRenderEndTimeTsMs = j(), ve
					}
				}
			},
			T = function() {
				var a, i = -1,
					r = !0,
					l = !1,
					s = void 0;
				try {
					for (var y = m.widgetMap[Symbol.iterator](), x; !(r = (x = y.next()).done); r = !0) {
						var E = Ce(x.value, 2),
							I = E[0],
							O = E[1];
						i < O.idx && (a = I, i = O.idx)
					}
				} catch (P) {
					l = !0, s = P
				} finally {
					try {
						!r && y.return != null && y.return()
					} finally {
						if (l) throw s
					}
				}
				return i === -1 && v("Could not find widget", 43778), a
			};

		function k() {
			return k = Ht(function(_, a, i, r) {
				var l, s, y, x, E, I, O, P, G, ee;
				return Ve(this, function(W) {
					switch (W.label) {
						case 0:
							if (l = _.params.sitekey, s = Ft(), !s) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(_, a, !1), [2];
							y = "h/".concat("g", "/"), x = new URL(s), E = "https", I = "", P = "".concat(E, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(y, "rc/").concat(r).concat(I), W.label = 1;
						case 1:
							return W.trys.push([1, 3, , 4]), [4, fetch(P, {
								body: JSON.stringify({
									secondaryToken: i,
									sitekey: l
								}),
								headers: {
									"Content-Type": "application/json"
								},
								method: "POST",
								redirect: "manual"
							})];
						case 2:
							return G = W.sent(), G.status !== 200 ? (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), n(_, a, !1)) : n(_, a, !0), [3, 4];
						case 3:
							return ee = W.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), n(_, a, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), k.apply(this, arguments)
		}
		var M = function(_) {
			var a = _.data;
			if (a.source === U) {
				if (!Yr(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!a.widgetId || !m.widgetMap.has(a.widgetId))) {
					var i = J(a.widgetId),
						r = m.widgetMap.get(a.widgetId);
					if (!(!i || !r)) switch (a.event) {
						case "init": {
							var l;
							r.widgetInitStartTimeTsMs = j(), r.kills = a.kills;
							var s = r.shadow.getElementById(i);
							s || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = a.mode, r.nextRcV = a.nextRcV, r.mode === z.Invisible && r.params["refresh-expired"] === K.Manual && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(K.Auto, "' or '").concat(K.Never, ".'")), r.mode !== z.Managed && r.params["refresh-timeout"] !== oe.Auto && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === $.Always || r.isExecuting && r.params.appearance === $.Execute ? Lt(s, r) : Sr(s), s.style.display = "";
							var y = r.shadow.querySelector("#".concat(i));
							y || v("Received state for an unknown widget: ".concat(a.widgetId), 3078), (l = y.contentWindow) === null || l === void 0 || l.postMessage({
								event: "init",
								source: U,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "translationInit": {
							var x = r.shadow.getElementById(i);
							x || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var E = new Map;
							r.displayLanguage = a.displayLanguage, Object.keys(a.translationData).forEach(function(Y) {
								E.set(Y, a.translationData[Y])
							}), Xr(x, E);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(a.fallback, ".")), r.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var I = r.shadow.getElementById(i);
							if (r.isExecuting = !1, I || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "unsupported_browser") {
								var O;
								(O = r.cbUnsupported) === null || O === void 0 || O.call(r)
							}
							break
						}
						case "food": {
							r.watchcat && a.seq > r.watchcat.lastAckedSeq && (r.watchcat.lastAckedSeq = a.seq);
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
							c(r, Q, a.widgetId), r.response = a.token, a.sToken ? e(r, i, a.sToken, a.chlId) : n(r, i, !1);
							break
						}
						case "fail": {
							a.rcV && c(r, a.rcV, a.widgetId), a.cfChlOut && (r.cfChlOut = a.cfChlOut), a.cfChlOutS && (r.cfChlOutS = a.cfChlOutS), a.code && (r.errorCode = a.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, a.frMd && (r.frMd = a.frMd), Nt(i);
							var P = r.cbError,
								G = a.code === We || a.code === Ue;
							if (G) {
								var ee, W = r.shadow.querySelector("#".concat(i));
								W == null || (ee = W.contentWindow) === null || ee === void 0 || ee.postMessage({
									event: "forceFail",
									source: U,
									widgetId: a.widgetId
								}, "*")
							}
							if (P) {
								var ue;
								P(String((ue = a.code) !== null && ue !== void 0 ? ue : Zt)) ? r.params.retry === ge.Auto && !r.isResetting && t(r, i, G) : (a.code && b("Error: ".concat(a.code, ".")), t(r, i, G))
							} else a.code ? (t(r, i, G), v("Error: ".concat(a.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var p = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (p) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							yt(i, r, a.feedbackOrigin, m.scriptUrlParsed);
							break
						}
						case "requestFeedbackData": {
							var te, se = r.shadow.querySelector("#".concat(i));
							se || v("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (te = se.contentWindow) === null || te === void 0 || te.postMessage({
								event: "requestTurnstileResults",
								source: U,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "turnstileResults": {
							var be, q, de = (be = r.wrapper.parentNode) === null || be === void 0 ? void 0 : be.querySelector("#".concat(i, "-fr"));
							de || v("Received state for an unknown widget: ".concat(a.widgetId), 3078), (q = de.contentWindow) === null || q === void 0 || q.postMessage({
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								event: "feedbackData",
								frMd: r.frMd || a.frMd,
								mode: a.mode,
								rayId: a.rayId,
								rcV: a.rcV,
								sitekey: a.sitekey,
								source: U,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var re, xe = (re = r.wrapper.parentNode) === null || re === void 0 ? void 0 : re.querySelector("#".concat(i, "-fr"));
							xe || v("Received state for an unknown widget: ".concat(a.widgetId), 3078), mr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ne, we = a.token;
							r.isExpired = !0, (ne = r.cbExpired) === null || ne === void 0 || ne.call(r, we), r.params["refresh-expired"] === K.Auto && !r.isResetting && w(H.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							c(r, Q, a.widgetId), Nt(i);
							var fe = r.cbTimeout;
							if (fe ? fe() : r.params["refresh-timeout"] === oe.Never && !r.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === oe.Auto && !r.isResetting) {
								var ae = r.cbAfterInteractive;
								ae == null || ae(), w(H.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							c(r, Q, a.widgetId), w(H.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							c(r, a.nextRcV, a.widgetId), w(a.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Ee, ke = r.shadow.getElementById(i);
							ke || v("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Ee = r.cbBeforeInteractive) === null || Ee === void 0 || Ee.call(r), r.params.appearance === $.InteractionOnly && Lt(ke, r);
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
							r.widgetParamsStartTimeTsMs = j();
							var Se = r.shadow.querySelector("#".concat(i));
							Se || v("Received state for an unknown widget: ".concat(a.widgetId), 3078), r.isResetting = !1;
							var ie = {},
								Ke = j(),
								Ae = {
									"ht.atrs": o(document.body.parentNode),
									pi: {
										ffp: hr(r.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: _r(document, ar, ir),
										sL: document.scripts.length,
										sR: r.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: "".concat(document.title.length, "|").concat(br(document.title)),
										tL: document.getElementsByTagName("*").length,
										wp: yr(r.wrapper),
										xp: gr(r.wrapper).substring(0, or)
									},
									"w.iW": window.innerWidth
								};
							(Re = Se.contentWindow) === null || Re === void 0 || Re.postMessage(Pe({
								action: r.action,
								appearance: r.params.appearance,
								au: m.scriptUrl,
								cData: r.cData,
								ch: "d39f91d70ce1",
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
								source: U,
								timeExtraParamsMs: j() - r.widgetRenderStartTimeTsMs,
								timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
								timeLoadInitMs: j() - m.turnstileLoadInitTimeTsMs,
								timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
								timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
								timeTiefMs: j() - Ke,
								upgradeAttempts: m.upgradeAttempts,
								upgradeCompletedCount: m.upgradeCompletedCount,
								url: Ft(),
								widgetId: a.widgetId,
								wPr: Ae
							}, ie), "*"), h(r, a.widgetId, Se), r.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		m.msgHandler = M, window.addEventListener("message", M);

		function S(_) {
			if (typeof _ == "string") {
				var a = Ge(_);
				if (a && m.widgetMap.has(a)) return a;
				if (m.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? S(i) : null
				} catch (r) {
					return null
				}
			}
			return V(_, Element) ? g(_) : _ || m.widgetMap.size === 0 ? null : m.widgetMap.keys().next().value
		}
		var N = {};
		return ot(Pe({}, N), {
			_private: {
				showFeedback: function(a) {
					var i = S(a);
					if (i) {
						var r = J(i);
						if (r) {
							var l = m.widgetMap.get(i);
							l && yt(r, l, Xe.Custom, m.scriptUrlParsed)
						}
					}
				}
			},
			execute: function(a, i) {
				var r = S(a);
				if (!r) {
					i === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var l = C(a, i);
					l || v("Failed to render widget", 43522), r = l
				}
				var s = m.widgetMap.get(r);
				if (s) {
					f(s, i);
					var y = J(r);
					if (s.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(y, "), consider using reset() before execute()."));
						return
					}
					if (s.isExecuting = !0, s.response) {
						var x;
						s.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(y, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (x = s.cbSuccess) === null || x === void 0 || x.call(s, s.response, !1);
						return
					}
					s.isExpired && b("Call to execute on a expired-widget (".concat(y, "), consider using reset() before.")), s.isStale && (w(H.StaleExecute, y), s.isExecuting = !0), s.msgQueue.push(ce.Execute), s.isExecuted = !0;
					var E = s.shadow.querySelector("#".concat(y));
					if (E || (s.isExecuting = !1, v("Widget ".concat(y, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && h(s, r, E), s.isInitialized && s.params.appearance === $.Execute && Lt(E, s), s.isExecuting) {
						var I, O = s.shadow.querySelector("#".concat(y));
						O || v("Received state for an unknown widget: ".concat(r), 3078), (I = O.contentWindow) === null || I === void 0 || I.postMessage({
							event: "execute",
							source: U,
							widgetId: r
						}, "*")
					}
				}
			},
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var r = T();
					if (r) {
						var l, s = m.widgetMap.get(r);
						return s != null && s.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (l = m.widgetMap.get(r)) === null || l === void 0 ? void 0 : l.response
					}
					v("Could not find a widget", 43794)
				}
				var y = S(a);
				return y || v("Could not find widget for provided container", 43778), (i = m.widgetMap.get(y)) === null || i === void 0 ? void 0 : i.response
			},
			implicitRender: Pt,
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var r = T();
					if (r) {
						var l, s;
						return (s = (l = m.widgetMap.get(r)) === null || l === void 0 ? void 0 : l.isExpired) !== null && s !== void 0 ? s : !1
					}
					v("Could not find a widget", 43794)
				}
				var y = S(a);
				y || v("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = m.widgetMap.get(y)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			},
			ready: function(a) {
				if (m.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : D(a), '"'), 3841), m.isReady) {
					a();
					return
				}
				Wt.push(a)
			},
			remove: R,
			render: C,
			reset: d
		})
	})();

	function Qr(e) {
		var t = e.getAttribute("data-sitekey"),
			n = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (n.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (_t(c) ? n.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var u = e.getAttribute("data-size");
		if (u && (Rt(u) ? n.size = u : b('Unknown data-size value: "'.concat(u, '".'))), 0) var g;
		var h = e.getAttribute("data-action");
		typeof h == "string" && (n.action = h);
		var f = e.getAttribute("data-cdata");
		typeof f == "string" && (n.cData = f);
		var d = e.getAttribute("data-retry");
		d && (bt(d) ? n.retry = d : b('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\".")));
		var w = e.getAttribute("data-retry-interval");
		if (w) {
			var R = Number.parseInt(w, 10);
			xt(R) ? n["retry-interval"] = R : b('Invalid data-retry-interval value: "'.concat(w, ', expected an integer value > 0 and < 900000".'))
		}
		var C = e.getAttribute("data-expiry-interval");
		if (C) {
			var T = Number.parseInt(C, 10);
			wt(T) ? n["expiry-interval"] = T : b('Invalid data-expiry-interval value: "'.concat(T, ', expected an integer value > 0 and < 360000".'))
		}
		var k = e.getAttribute("data-refresh-expired");
		k && (St(k) ? n["refresh-expired"] = k : b('Unknown data-refresh-expired value: "'.concat(k, ", expected either: 'never', 'auto' or 'manual'.")));
		var M = e.getAttribute("data-refresh-timeout");
		M && (At(M) ? n["refresh-timeout"] = M : b('Unknown data-refresh-timeout value: "'.concat(M, ", expected either: 'never', 'auto' or 'manual'.")));
		var S = e.getAttribute("data-language");
		S && (It(S) ? n.language = S : b('Invalid data-language value: "'.concat(S, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function N(x) {
			var E = e.getAttribute(x);
			return E && window[E] ? window[E] : void 0
		}
		var _ = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		_.forEach(function(x) {
			n[x] = N("data-".concat(x))
		});
		var a = e.getAttribute("data-feedback-enabled");
		a ? (Tr(a) || b('Invalid data-feedback-enabled value: "'.concat(a, ", expected either: 'true' or 'false'. Value is ignored.")), n["feedback-enabled"] = a === "true") : n["feedback-enabled"] = !0;
		var i, r = (i = e.getAttribute("data-response-field")) !== null && i !== void 0 ? i : "true";
		n["response-field"] = r === "true";
		var l = e.getAttribute("data-response-field-name");
		l && (n["response-field-name"] = l);
		var s = e.getAttribute("data-execution");
		s && (Ot(s) ? n.execution = s : b('Unknown data-execution value: "'.concat(s, ", expected either: 'render' or 'execute'.")));
		var y = e.getAttribute("data-appearance");
		return y && (Ct(y) ? n.appearance = y : b('Unknown data-appearance value: "'.concat(y, ", expected either: 'always', 'execute', or 'interaction-only'."))), n
	}

	function $r() {
		var e = !0;
		Mt(m, e), m.msgHandler && window.removeEventListener("message", m.msgHandler), xr(window.turnstile, m)
	}
	he = !1, A = vr(), m.scriptWasLoadedAsync = (Ye = A == null ? void 0 : A.loadedAsync) !== null && Ye !== void 0 ? Ye : !1, m.scriptUrl = (Qe = A == null ? void 0 : A.src) !== null && Qe !== void 0 ? Qe : "undefined", m.scriptUrlParsed = A == null ? void 0 : A.url, A != null && A.params && (_e = A.params.get("compat"), (_e == null ? void 0 : _e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), m.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Vt) : _e !== null && b('Unknown value for api.js?compat: "'.concat(_e, '", ignoring.')), A.params.forEach(function(e, t) {
		F(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || b('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), he = A.params.get("_upgrade") === "true", X = A.params.get("onload"), X && !he && setTimeout(function() {
		typeof window[X] == "function" ? window[X]() : (b("Unable to find onload callback '".concat(X, "' immediately after loading, expected 'function', got '").concat(D(window[X]), "'.")), setTimeout(function() {
			typeof window[X] == "function" ? window[X]() : b("Unable to find onload callback '".concat(X, "' after 1 second, expected 'function', got '").concat(D(window[X]), "'."))
		}, 1e3))
	}, 0)), Dt = "turnstile" in window, Dt && !he ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Dt && he && (wr(window.turnstile, m), kt(m), (A == null || ($e = A.params) === null || $e === void 0 ? void 0 : $e.get("render")) !== "explicit" && setTimeout(Pt, 0)), window.turnstile = Vt, he || ((A == null || (Je = A.params) === null || Je === void 0 ? void 0 : Je.get("render")) !== "explicit" && Wt.push(Pt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Rr, 0) : window.addEventListener("DOMContentLoaded", Rr))), Ar = 1440 * 60 * 1e3, window.setTimeout($r, Ar);
	var he, A, Ye, Qe, _e, X, Dt, $e, Je, Ar;
})();