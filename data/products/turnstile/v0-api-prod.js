"use strict";
(function() {
	function Gt(e, t, r, o, c, l, v) {
		try {
			var y = e[l](v),
				d = y.value
		} catch (f) {
			r(f);
			return
		}
		y.done ? t(d) : Promise.resolve(d).then(o, c)
	}

	function Xt(e) {
		return function() {
			var t = this,
				r = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(t, r);

				function v(d) {
					Gt(l, o, c, v, y, "next", d)
				}

				function y(d) {
					Gt(l, o, c, v, y, "throw", d)
				}
				v(void 0)
			})
		}
	}

	function D(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : D(e, t)
	}

	function Ue(e, t, r) {
		return t in e ? Object.defineProperty(e, t, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = r, e
	}

	function ze(e) {
		for (var t = 1; t < arguments.length; t++) {
			var r = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
				return Object.getOwnPropertyDescriptor(r, c).enumerable
			}))), o.forEach(function(c) {
				Ue(e, c, r[c])
			})
		}
		return e
	}

	function Lr(e, t) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), r.push.apply(r, o)
		}
		return r
	}

	function lt(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Lr(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
		}), e
	}

	function Yt(e) {
		if (Array.isArray(e)) return e
	}

	function Qt(e, t) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var o = [],
				c = !0,
				l = !1,
				v, y;
			try {
				for (r = r.call(e); !(c = (v = r.next()).done) && (o.push(v.value), !(t && o.length === t)); c = !0);
			} catch (d) {
				l = !0, y = d
			} finally {
				try {
					!c && r.return != null && r.return()
				} finally {
					if (l) throw y
				}
			}
			return o
		}
	}

	function Jt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function st(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
		return o
	}

	function Kt(e, t) {
		if (e) {
			if (typeof e == "string") return st(e, t);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return st(e, t)
		}
	}

	function Me(e, t) {
		return Yt(e) || Qt(e, t) || Kt(e, t) || Jt()
	}

	function V(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Be(e, t) {
		var r = {
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
			next: y(0),
			throw: y(1),
			return: y(2)
		}, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
			return this
		}), v;

		function y(f) {
			return function(E) {
				return d([f, E])
			}
		}

		function d(f) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; v && (v = 0, f[0] && (r = 0)), r;) try {
				if (o = 1, c && (l = f[0] & 2 ? c.return : f[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, f[1])).done) return l;
				switch (c = 0, l && (f = [f[0] & 2, l.value]), f[0]) {
					case 0:
					case 1:
						l = f;
						break;
					case 4:
						return r.label++, {
							value: f[1],
							done: !1
						};
					case 5:
						r.label++, c = f[1], f = [0];
						continue;
					case 7:
						f = r.ops.pop(), r.trys.pop();
						continue;
					default:
						if (l = r.trys, !(l = l.length > 0 && l[l.length - 1]) && (f[0] === 6 || f[0] === 2)) {
							r = 0;
							continue
						}
						if (f[0] === 3 && (!l || f[1] > l[0] && f[1] < l[3])) {
							r.label = f[1];
							break
						}
						if (f[0] === 6 && r.label < l[1]) {
							r.label = l[1], l = f;
							break
						}
						if (l && r.label < l[2]) {
							r.label = l[2], r.ops.push(f);
							break
						}
						l[2] && r.ops.pop(), r.trys.pop();
						continue
				}
				f = t.call(e, r)
			} catch (E) {
				f = [6, E], c = 0
			} finally {
				o = l = 0
			}
			if (f[0] & 5) throw f[1];
			return {
				value: f[0] ? f[1] : void 0,
				done: !0
			}
		}
	}
	var $t = 300,
		Zt = 10,
		er = 200500,
		tr = 300020,
		je = 300030,
		qe = 300031;

	function dt(e) {
		var t = new URLSearchParams;
		if (e.params.botnet && t.set("botnet", "true"), e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel), e.params._debugSitekeyOverrides.offlabelShowPrivacy && e.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default" && t.set("offlabel_show_privacy", e.params._debugSitekeyOverrides.offlabelShowPrivacy), e.params._debugSitekeyOverrides.offlabelShowTerms && e.params._debugSitekeyOverrides.offlabelShowTerms !== "default" && t.set("offlabel_show_terms", e.params._debugSitekeyOverrides.offlabelShowTerms)), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var He = "cf-chl-widget-",
		z = "cloudflare-challenge",
		rr = ".cf-turnstile",
		nr = ".cf-challenge",
		ar = ".g-recaptcha",
		ft = "cf_challenge_response",
		pt = "cf-turnstile-response",
		vt = "g-recaptcha-response",
		ir = 8e3,
		mt = "private-token",
		or = 3,
		cr = 500,
		ur = 500,
		J = "";
	var G;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(G || (G = {}));
	var L;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(L || (L = {}));
	var ye;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(ye || (ye = {}));
	var he;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(he || (he = {}));
	var _e;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(_e || (_e = {}));
	var ee;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(ee || (ee = {}));
	var ue;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(ue || (ue = {}));
	var K;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})(K || (K = {}));
	var be;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(be || (be = {}));
	var le;
	(function(e) {
		e.Execute = "execute"
	})(le || (le = {}));
	var X;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(X || (X = {}));

	function F(e, t) {
		return e.indexOf(t) !== -1
	}
	var Fr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Pr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		lr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function gt(e, t, r) {
		var o = "https://challenges.cloudflare.com",
			c, l = (c = r == null ? void 0 : r.origin) !== null && c !== void 0 ? c : o;
		if (t) {
			var v;
			return (v = e["base-url"]) !== null && v !== void 0 ? v : l
		}
		return l
	}

	function yt(e, t, r, o, c, l, v, y, d) {
		var f = gt(r, c, y),
			E = l ? "h/".concat(l, "/") : "",
			x = d ? "&".concat(d) : "",
			j = r["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(E, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(r.theme, "/").concat(j, "/").concat(v, "/").concat(r.size, "?lang=").concat(r.language).concat(x)
	}
	var ht = function(e) {
			var t, r, o = window.innerWidth < 400,
				c = e.state !== he.FailureFeedbackCode && (e.state === he.FailureFeedback || e.state === he.FailureHavingTroubles || !e.errorCode),
				l, v = F(Fr, (l = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				y, d = F(Pr, (y = (r = e.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && y !== void 0 ? y : "nonexistent");
			return o ? Dr({
				isModeratelyVerbose: d,
				isSmallerFeedback: c,
				isVerboseLanguage: v
			}) : c && v ? "680px" : c && d ? "670px" : c ? "650px" : v ? "690px" : "680px"
		},
		Dr = function(e) {
			var t = e.isVerboseLanguage,
				r = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return r && t ? "660px" : r && o ? "620px" : r ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function Ge(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function sr(e, t) {
		if (!D(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function te(e, t) {
		return te = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, te(e, t)
	}

	function dr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && te(e, t)
	}

	function Xe() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Le(e, t, r) {
		return Xe() ? Le = Reflect.construct : Le = function(c, l, v) {
			var y = [null];
			y.push.apply(y, l);
			var d = Function.bind.apply(c, y),
				f = new d;
			return v && te(f, v.prototype), f
		}, Le.apply(null, arguments)
	}

	function se(e) {
		return se = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, se(e)
	}

	function fr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ye(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Ye = function(o) {
			if (o === null || !fr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return Le(o, arguments, se(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), te(c, o)
		}, Ye(e)
	}

	function pr(e, t) {
		return t && (V(t) === "object" || typeof t == "function") ? t : Ge(e)
	}

	function vr(e) {
		var t = Xe();
		return function() {
			var o = se(e),
				c;
			if (t) {
				var l = se(this).constructor;
				c = Reflect.construct(o, arguments, l)
			} else c = o.apply(this, arguments);
			return pr(this, c)
		}
	}
	var mr = (function(e) {
		"use strict";
		dr(r, e);
		var t = vr(r);

		function r(o, c) {
			sr(this, r);
			var l;
			return l = t.call(this, o), Ue(Ge(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return r
	})(Ye(Error));

	function m(e, t) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new mr(r, t)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Qe(e) {
		return e.startsWith(He) ? e.substring(He.length) : null
	}

	function $(e) {
		return "".concat(He).concat(e)
	}

	function Fe() {
		var e = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (D(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var r = document.querySelectorAll("script"), o = 0, c; c = r[o]; o++)
			if (D(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function gr() {
		var e = Fe();
		e || m("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			r;
		try {
			r = new URL(t)
		} catch (l) {
			m("Could not parse Turnstile script tag URL", 43777)
		}
		var o = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: r
		};
		(e.async || e.defer) && (o.loadedAsync = !0);
		var c = t.split("?");
		return c.length > 1 && (o.params = new URLSearchParams(c[1])), o
	}

	function B() {
		return Date.now()
	}
	var _t = function(e, t, r, o) {
			var c = gt(t.params, !1, o),
				l = "h/".concat("b", "/"),
				v, y, d = "".concat(c, "/cdn-cgi/challenge-platform/").concat(l, "feedback-reports/").concat(Qe(e), "/").concat(t.displayLanguage, "/").concat((y = t.params.theme) !== null && y !== void 0 ? y : t.theme, "/").concat(r);
			if (window.top !== window.self) {
				window.open(d, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var f = document.createElement("div");
			f.style.position = "fixed", f.style.zIndex = "2147483646", f.style.width = "100vw", f.style.height = "100vh", f.style.top = "0", f.style.left = "0", f.style.transformOrigin = "center center", f.style.overflowX = "hidden", f.style.overflowY = "auto", f.style.background = "rgba(0,0,0,0.4)";
			var E = document.createElement("div");
			E.className = "cf-wrapper-turnstile-feedback", E.style.display = "table-cell", E.style.verticalAlign = "middle", E.style.width = "100vw", E.style.height = "100vh";
			var x = document.createElement("div");
			x.className = "cf-turnstile-feedback", x.id = "cf-fr-id", x.style.width = "100vw", x.style.maxWidth = "500px", x.style.height = ht(t), x.style.position = "relative", x.style.zIndex = "2147483647", x.style.backgroundColor = "#ffffff", x.style.borderRadius = "5px", x.style.left = "0px", x.style.top = "0px", x.style.overflow = "hidden", x.style.margin = "0px auto";
			var j = function() {
					x.style.height = ht(t)
				},
				P = function() {
					var k;
					window.removeEventListener("resize", j), (k = f.parentNode) === null || k === void 0 || k.removeChild(f)
				},
				C = document.createElement("iframe");
			C.id = "".concat(e, "-fr"), C.setAttribute("src", d), C.setAttribute("allow", "cross-origin-isolated; fullscreen"), C.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), C.setAttribute("scrolling", "yes"), C.style.borderWidth = "0px", C.style.width = "100%", C.style.height = "100%", C.style.overflow = "auto";
			var T = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			T.setAttribute("tabindex", "0"), T.setAttribute("role", "img"), T.setAttribute("aria-label", "Close button icon"), T.style.position = "absolute", T.style.width = "26px", T.style.height = "26px", T.style.zIndex = "2147483647", T.style.cursor = "pointer", t.displayRtl ? T.style.left = "24px" : T.style.right = "24px", T.style.top = "24px", T.setAttribute("width", "20"), T.setAttribute("height", "20"), T.addEventListener("click", function(k) {
				k.stopPropagation(), P()
			}), T.addEventListener("keydown", function(k) {
				(k.key === "Enter" || k.key === " ") && (k.stopPropagation(), P())
			});
			var O = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			O.setAttribute("ry", "12"), O.setAttribute("rx", "12"), O.setAttribute("cy", "12"), O.setAttribute("cx", "12"), O.setAttribute("fill", "none"), O.setAttribute("stroke-width", "0"), T.appendChild(O);
			var M = document.createElementNS("http://www.w3.org/2000/svg", "line");
			M.setAttribute("stroke-width", "1"), M.setAttribute("fill", "none"), M.setAttribute("x1", "6"), M.setAttribute("x2", "18"), M.setAttribute("y1", "18"), M.setAttribute("y2", "5");
			var I = document.createElementNS("http://www.w3.org/2000/svg", "line");
			I.setAttribute("stroke-width", "1"), I.setAttribute("fill", "none"), I.setAttribute("x1", "6"), I.setAttribute("x2", "18"), I.setAttribute("y1", "5"), I.setAttribute("y2", "18"), t.theme === ye.Light ? (M.setAttribute("stroke", "#0A0A0A"), I.setAttribute("stroke", "#0A0A0A")) : (M.setAttribute("stroke", "#F2F2F2"), I.setAttribute("stroke", "#F2F2F2")), T.appendChild(M), T.appendChild(I), x.appendChild(C), x.appendChild(T), E.appendChild(x), f.appendChild(E), f.addEventListener("click", P), t.wrapper.parentNode.appendChild(f), window.addEventListener("resize", j)
		},
		yr = function(e) {
			var t, r, o, c;
			(c = document.getElementById(e)) === null || c === void 0 || (o = c.parentElement) === null || o === void 0 || (r = o.parentElement) === null || r === void 0 || (t = r.parentElement) === null || t === void 0 || t.remove()
		};
	var Je;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom", e.TimeMismatch = "timemismatch", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain"
	})(Je || (Je = {}));
	var bt = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function hr(e) {
		if (!e) return "-";
		var t = function(r, o) {
			if (!r || r.tagName === "BODY") return o;
			for (var c = 1, l = r.previousElementSibling; l;) l.tagName === r.tagName && c++, l = l.previousElementSibling;
			var v = bt(r.tagName.toLowerCase()),
				y = "".concat(v, "[").concat(c, "]");
			return t(r.parentNode, "/".concat(y).concat(o))
		};
		return t(e, "")
	}

	function _r(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Vr = {
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

	function br(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var r = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = r.slice(0, 20).map(function(l) {
				return Vr[l.type] || "-"
			}).join(""),
			c = ["m:".concat(t.method || ""), "f:".concat(r.length), o].join("|");
		return c
	}

	function xr(e, t, r) {
		for (var o = "", c = 0, l = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(x) {
					return c > t || o.length > r ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), v;
			(v = l.nextNode()) !== null && o.length < r;) {
			if (v.nodeType === Node.ELEMENT_NODE) {
				var y = v;
				o += "".concat(bt(y.tagName.toLowerCase()));
				for (var d = 0; d < y.attributes.length; d++) {
					var f = y.attributes[d];
					o += "_".concat(bt(f.name, 2))
				}
				o += ">"
			} else v.nodeType === Node.TEXT_NODE && (o += "-t");
			var E = v.parentNode;
			for (c = 0; E !== e && E !== null;) c++, E = E.parentNode
		}
		return o.substring(0, r)
	}

	function wr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : V(e)));
		for (var t = 5381, r = 0; r < e.length; r++) {
			var o = e.charCodeAt(r);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function Er(e, t) {
		var r;
		t.upgradeAttempts++;
		var o = Fe();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var l = new URL(o.src),
				v = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), v.async = !0, c && (v.nonce = c), v.setAttribute("crossorigin", "anonymous"), v.src = l.toString(), o == null || (r = o.parentNode) === null || r === void 0 || r.replaceChild(v, o)
		}
	}

	function Tr(e, t) {
		var r = e._pState;
		return r ? (t.isReady = r.isReady, t.isRecaptchaCompatibilityMode = r.isRecaptchaCompatibilityMode, t.lastWidgetIdx = r.lastWidgetIdx, t.scriptWasLoadedAsync = r.scriptWasLoadedAsync, t.upgradeAttempts = r.upgradeAttempts, t.upgradeCompletedCount = r.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = B(), t.watchCatInterval = null, t.watchCatSeq = r.watchCatSeq, t.widgetMap = r.widgetMap, !0) : !1
	}

	function xt(e) {
		return F(["auto", "dark", "light"], e)
	}

	function wt(e) {
		return F(["auto", "never"], e)
	}

	function Et(e) {
		return e > 0 && e < 9e5
	}

	function Tt(e) {
		return e > 0 && e < 36e4
	}
	var Wr = /^[0-9A-Za-z_-]{3,100}$/;

	function Sr(e) {
		return Wr.test(e)
	}
	var Ur = /^[a-z0-9_-]{0,32}$/i;

	function St(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ur.test(e)
	}
	var zr = /^[a-z0-9_\-=]{0,255}$/i;

	function Rt(e) {
		return e === void 0 ? !0 : typeof e == "string" && zr.test(e)
	}

	function At(e) {
		return F([L.Normal, L.Compact, L.Invisible, L.Flexible], e)
	}

	function It(e) {
		return F(["auto", "manual", "never"], e)
	}

	function Ct(e) {
		return F(["auto", "manual", "never"], e)
	}
	var Br = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Ot(e) {
		return e === "auto" || Br.test(e)
	}

	function kt(e) {
		return F(["always", "execute", "interaction-only"], e)
	}

	function Rr(e) {
		return F(["true", "false"], e)
	}

	function Nt(e) {
		return F(["render", "execute"], e)
	}
	var jr = 900,
		qr = 45,
		Hr = 50;

	function Gr(e) {
		e.watchCatSeq++;
		var t = !0,
			r = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(t = (l = c.next()).done); t = !0) {
				var v = Me(l.value, 2),
					y = v[0],
					d = v[1],
					f;
				d.watchcat.seq = e.watchCatSeq, d.watchcat.lastAckedSeq === 0 && (d.watchcat.lastAckedSeq = e.watchCatSeq);
				var E = $(y);
				if (!E || !d.shadow) {
					d.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(E, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				var x = d.shadow.querySelector("#".concat(E));
				if (!x) {
					d.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(E, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(d.isComplete || d.isFailed || d.isResetting)) {
					var j = d.watchcat.seq - 1 - qr,
						P = d.watchcat.lastAckedSeq < j,
						C = d.watchcat.seq - 1 - Hr,
						T = d.isOverrunning && d.watchcat.overrunBeginSeq !== 0 && d.watchcat.overrunBeginSeq < C;
					if ((d.isExecuting || !d.isInitialized || d.isInitialized && !d.isStale && !d.isExecuted) && d.watchcat.lastAckedSeq !== 0 && P || T) {
						var O;
						d.watchcat.lastAckedSeq = 0, d.watchcat.seq = 0, d.isExecuting = !1;
						var M = function(a, i) {
							console.log("Turnstile Widget seem to have ".concat(a, ": "), i)
						};
						M(P ? "hung" : "crashed", y);
						var I = P ? je : qe,
							k;
						if ((O = e.msgHandler) === null || O === void 0 || O.call(e, {
								data: {
									code: I,
									event: "fail",
									rcV: (k = d.nextRcV) !== null && k !== void 0 ? k : J,
									source: z,
									widgetId: y
								}
							}), 0) var _;
						continue
					}(f = x.contentWindow) === null || f === void 0 || f.postMessage({
						event: "meow",
						seq: e.watchCatSeq,
						source: z,
						widgetId: y
					}, "*")
				}
			}
		} catch (a) {
			r = !0, o = a
		} finally {
			try {
				!t && c.return != null && c.return()
			} finally {
				if (r) throw o
			}
		}
	}

	function Mt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Gr(e)
		}, jr))
	}

	function Lt(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var g = {
		apiVersion: 1,
		isReady: !1,
		isRecaptchaCompatibilityMode: !1,
		lastWidgetIdx: 0,
		scriptUrl: "undefined",
		scriptUrlParsed: void 0,
		scriptWasLoadedAsync: !1,
		turnstileLoadInitTimeTsMs: B(),
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		watchCatInterval: null,
		watchCatSeq: 0,
		widgetMap: new Map
	};

	function Ft(e) {
		Or(e, "")
	}

	function Wt() {
		var e = [rr, nr];
		g.isRecaptchaCompatibilityMode && e.push(ar), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return Ut.render(t)
		})
	}
	var zt = [];

	function Ar() {
		g.isReady = !0;
		var e = !0,
			t = !1,
			r = void 0;
		try {
			for (var o = zt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var l = c.value;
				l()
			}
		} catch (v) {
			t = !0, r = v
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (t) throw r
			}
		}
	}

	function Xr(e) {
		var t = g.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var r, o = (r = t.params["response-field"]) !== null && r !== void 0 ? r : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = t.params["response-field-name"]) !== null && l !== void 0 ? l : pt, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var v;
				if (typeof t.params["response-field-name"] != "string" && kr((v = t.params.sitekey) !== null && v !== void 0 ? v : "")) {
					var y = document.createElement("input");
					y.type = "hidden", y.name = ft, y.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(y)
				}
			}
			if (g.isRecaptchaCompatibilityMode) {
				var d = document.createElement("input");
				d.type = "hidden", d.name = vt, d.id = "".concat(e, "_g_response"), t.wrapper.appendChild(d)
			}
		}
	}

	function Or(e, t) {
		Xr(e);
		var r = document.getElementById("".concat(e, "_response"));
		r !== null && D(r, HTMLInputElement) && (r.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && D(o, HTMLInputElement) && (o.value = t), g.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && D(c, HTMLInputElement) && (c.value = t)
		}
	}

	function Yr(e, t) {
		var r;
		return !!(!((r = t.kills) === null || r === void 0) && r.includes(e))
	}

	function Pt(e, t) {
		var r = t.params,
			o = r.size,
			c = o === void 0 ? "normal" : o,
			l = t.mode;
		switch (l) {
			case G.NonInteractive:
			case G.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", c) {
					case L.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case L.Invisible:
						m('Invalid value for parameter "size", expected "'.concat(L.Compact, '", "').concat(L.Flexible, '", or "').concat(L.Normal, '", got "').concat(c, '"'), 2817);
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
			case G.Invisible:
				Yr("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(G.NonInteractive, '", "').concat(G.Managed, '" or "').concat(G.Invisible, '", got "').concat(l, '"'), 2818)
		}
	}

	function Ir(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function Qr(e, t) {
		var r = t.get("turnstile_iframe_alt");
		r && (e.title = r)
	}

	function Jr(e) {
		return e.origin ? F(lr, e.origin) : !0
	}

	function kr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Dt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}

	function Kr() {
		if (typeof window.PerformanceObserver == "function") try {
			var e = Fe();
			if (!e) return;
			var t = e.src,
				r = !0,
				o = !1,
				c = void 0;
			try {
				for (var l = performance.getEntriesByType("resource")[Symbol.iterator](), v; !(r = (v = l.next()).done); r = !0) {
					var y = v.value;
					if (D(y, PerformanceResourceTiming) && y.name.includes(t)) return y
				}
			} catch (d) {
				o = !0, c = d
			} finally {
				try {
					!r && l.return != null && l.return()
				} finally {
					if (o) throw c
				}
			}
		} catch (d) {}
	}
	var Ut = (function() {
		var e = function(a, i, n, u) {
				return O.apply(this, arguments)
			},
			t = function(a, i, n) {
				if (a.params.retry === _e.Auto || n) {
					a.isExecuted && (a.msgQueue.push(le.Execute), a.isExecuted = !0, a.isExecuting = !0);
					var u, s = n ? 0 : 1e3 * 2 + ((u = a.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
					a.retryTimeout = window.setTimeout(function() {
						var h = n ? X.CrashedRetry : X.FailureRetry;
						x(h, i)
					}, s)
				}
			},
			r = function(a, i, n) {
				var u;
				a.response === void 0 && m("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, Or(i, a.response), (u = a.cbSuccess) === null || u === void 0 || u.call(a, a.response, n)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, n = i.length, u = new Array(n), s = 0; s < n; s++) u[s] = i[s].name;
				return u
			},
			c = function() {
				for (var a = {}, i = [], n = document.getElementsByTagName("*"), u = 0; u < n.length && i.length < 50; u++) {
					var s = n[u].tagName.toLowerCase();
					s.indexOf("-") !== -1 && !a[s] && (a[s] = !0, i.push(s))
				}
				return i
			},
			l = function(a, i, n) {
				if (a.rcV = i, 0) var u
			},
			v = function() {
				var a = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = a.length,
					n = "";
				do {
					n = "";
					for (var u = 0; u < 5; u++) n += a.charAt(Math.floor(Math.random() * i))
				} while (g.widgetMap.has(n));
				return n
			},
			y = function(a) {
				var i = !0,
					n = !1,
					u = void 0;
				try {
					for (var s = g.widgetMap[Symbol.iterator](), h; !(i = (h = s.next()).done); i = !0) {
						var w = Me(h.value, 2),
							S = w[0],
							A = w[1];
						if (A.wrapper.parentElement === a) return S
					}
				} catch (N) {
					n = !0, u = N
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (n) throw u
					}
				}
				return null
			},
			d = function(a, i, n) {
				for (; a.msgQueue.length > 0;) {
					var u, s = a.msgQueue.pop();
					(u = n.contentWindow) === null || u === void 0 || u.postMessage({
						event: s,
						source: z,
						widgetId: i
					}, "*")
				}
			},
			f = function(a, i) {
				if (i) {
					var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						u = [],
						s = !0,
						h = !1,
						w = void 0;
					try {
						for (var S = n[Symbol.iterator](), A; !(s = (A = S.next()).done); s = !0) {
							var N = A.value;
							i[N] && i[N] !== a.params[N] && u.push(N)
						}
					} catch (W) {
						h = !0, w = W
					} finally {
						try {
							!s && S.return != null && S.return()
						} finally {
							if (h) throw w
						}
					}
					u.length > 0 && m("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(u.join(",")), 3618), i.action && (St(i.action) || m('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (Rt(i.cData) || m('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			E = function(a) {
				x(X.Api, a)
			},
			x = function(a, i) {
				var n = I(i);
				n || m("Nothing to reset found for provided container", 3329);
				var u = g.widgetMap.get(n);
				if (u) {
					var s;
					u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.isOverrunning = !1, u.watchcat.overrunBeginSeq = 0, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.params.execution === be.Render && (u.msgQueue.push(le.Execute), u.isExecuted = !0, u.isExecuting = !0);
					var h = $(n),
						w = u.shadow.querySelector("#".concat(h));
					(!h || !w) && m("Widget ".concat(n, " to reset was not found."), 3330), u.params.appearance === K.InteractionOnly && Ir(w), u.params.sitekey === null && m("Unexpected Error: Sitekey is null", 3347);
					var S = w.cloneNode(),
						A;
					S.src = yt(n, u.params.sitekey, u.params, (A = u.rcV) !== null && A !== void 0 ? A : J, !1, "b", a, g.scriptUrlParsed, dt(u)), (s = w.parentNode) === null || s === void 0 || s.replaceChild(S, w), Ft(h), u.retryTimeout && window.clearTimeout(u.retryTimeout)
				} else m("Widget ".concat(n, " to reset was not found."), 3331)
			},
			j = function(a) {
				var i = I(a),
					n = i ? g.widgetMap.get(i) : void 0;
				if (!i || !n) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var u = $(i),
					s = ["input#".concat(u, "_response"), "input#".concat(u, "_legacy_response"), "input#".concat(u, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(h) {
					return h.remove()
				}), n.shadow.querySelectorAll(s.join(", ")).forEach(function(h) {
					return h.remove()
				}), n.wrapper.remove(), n.retryTimeout && window.clearTimeout(n.retryTimeout), g.widgetMap.delete(i), Lt(g)
			},
			P = function(a, i) {
				var n, u, s = B(),
					h;
				if (typeof a == "string") try {
					var w = document.querySelector(a);
					w || m('Unable to find a container for "'.concat(a, '"'), 3585), h = w
				} catch (Ht) {
					m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else D(a, HTMLElement) ? h = a : m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var S = !0,
					A = !1,
					N = void 0;
				try {
					for (var W = g.widgetMap.values()[Symbol.iterator](), Y; !(S = (Y = W.next()).done); S = !0) {
						var re = Y.value;
						if (h.contains(re.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Ht) {
					A = !0, N = Ht
				} finally {
					try {
						!S && W.return != null && W.return()
					} finally {
						if (A) throw N
					}
				}
				var U = Dt();
				if (!U) return m("Turnstile cannot determine its page location", 3607);
				if (U.startsWith("file:")) return m("Turnstile cannot run in a file:// url", 3608);
				var de = $r(h);
				if (de) {
					var p = Object.assign(de, i),
						ne = p.action,
						fe = p.cData,
						Ee = p.chlPageData,
						q = p.sitekey,
						pe;
					p.theme = (pe = p.theme) !== null && pe !== void 0 ? pe : ye.Auto;
					var ae;
					p.retry = (ae = p.retry) !== null && ae !== void 0 ? ae : _e.Auto;
					var Te;
					p.execution = (Te = p.execution) !== null && Te !== void 0 ? Te : be.Render;
					var ie;
					p.appearance = (ie = p.appearance) !== null && ie !== void 0 ? ie : K.Always;
					var Se;
					p["retry-interval"] = Number((Se = p["retry-interval"]) !== null && Se !== void 0 ? Se : ir);
					var ve;
					p["expiry-interval"] = Number((ve = p["expiry-interval"]) !== null && ve !== void 0 ? ve : ($t - Zt) * 1e3);
					var oe;
					p.size = (oe = p.size) !== null && oe !== void 0 ? oe : L.Normal;
					var Re = p.callback,
						Pe = p["expired-callback"],
						Ae = p["timeout-callback"],
						Ie = p["after-interactive-callback"],
						Ce = p["before-interactive-callback"],
						ce = p["error-callback"],
						tt = p["unsupported-callback"];
					typeof q != "string" && m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof q == "undefined" ? "undefined" : V(q), '"'), 3588), Sr(q) || m('Invalid input for parameter "sitekey", got "'.concat(q, '"'), 3589), At(p.size) || m('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(V(p.size)), 3590), xt(p.theme) || m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(V(p.theme)), 3591), wt(p.retry) || m('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(V(p.retry)), 3592), p.language || (p.language = "auto"), Ot(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), kt(p.appearance) || m('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Nt(p.execution) || m('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), Et(p["retry-interval"]) || m('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Tt(p["expiry-interval"]) || m('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Oe, Z = (Oe = p["refresh-expired"]) !== null && Oe !== void 0 ? Oe : ee.Auto;
					It(Z) ? p["refresh-expired"] = Z : m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Z, '" ').concat(typeof Z == "undefined" ? "undefined" : V(Z)), 3603);
					var rt, ke = (rt = p["refresh-timeout"]) !== null && rt !== void 0 ? rt : ue.Auto;
					Ct(ke) ? p["refresh-timeout"] = ke : m('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(ke, '" ').concat(typeof ke == "undefined" ? "undefined" : V(ke)), 3603);
					var H = document.createElement("iframe"),
						me = document.createElement("div"),
						Bt = me.attachShadow({
							mode: "closed"
						});
					St(ne) || m('Invalid input for optional parameter "action", got "'.concat(ne, '"'), 3604), Rt(fe) || m('Invalid input for optional parameter "cData", got "'.concat(fe, '"'), 3605);
					var Ne = v(),
						ge = $(Ne);
					if (!(!Ne || !ge)) {
						var jt = [],
							nt = p.execution === be.Render;
						nt && jt.push(le.Execute), g.lastWidgetIdx++;
						var Nr = {};
						g.widgetMap.set(Ne, lt(ze({
							action: ne,
							cbAfterInteractive: Ie,
							cbBeforeInteractive: Ce,
							cbError: ce,
							cbExpired: Pe,
							cbSuccess: Re,
							cbTimeout: Ae,
							cbUnsupported: tt,
							cData: fe,
							chlPageData: Ee,
							hasResponseParamEl: !1,
							idx: g.lastWidgetIdx,
							isComplete: !1,
							isExecuted: nt,
							isExecuting: nt,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: jt,
							params: p,
							rcV: J,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, Nr), {
							isOverrunning: !1,
							shadow: Bt,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: s,
							wrapper: me
						})), Mt(g);
						var at = g.widgetMap.get(Ne);
						at || m("Turnstile Initialization Error ", 3606), H.style.display = "none", H.style.border = "none", H.style.overflow = "hidden", H.setAttribute("src", yt(Ne, q, p, J, !1, "b", X.New, g.scriptUrlParsed, dt(at))), H.onerror = function() {
							if (ce) {
								ce == null || ce(String(er));
								return
							}
							m("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var qt = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map"],
							it;
						F((it = (u = document.featurePolicy) === null || u === void 0 || (n = u.features) === null || n === void 0 ? void 0 : n.call(u)) !== null && it !== void 0 ? it : [], mt) && qt.push(mt), H.setAttribute("allow", qt.join("; ")), H.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), H.id = ge;
						var ot;
						H.tabIndex = (ot = p.tabindex) !== null && ot !== void 0 ? ot : 0, H.title = "Widget containing a Cloudflare security challenge", Bt.appendChild(H);
						var ct, Mr = (ct = p["response-field"]) !== null && ct !== void 0 ? ct : !0;
						if (Mr) {
							var De = document.createElement("input");
							De.type = "hidden";
							var ut;
							if (De.name = (ut = p["response-field-name"]) !== null && ut !== void 0 ? ut : pt, De.id = "".concat(ge, "_response"), me.appendChild(De), typeof p["response-field-name"] != "string" && kr(q)) {
								var Ve = document.createElement("input");
								Ve.type = "hidden", Ve.name = ft, Ve.id = "".concat(ge, "_legacy_response"), me.appendChild(Ve)
							}
						}
						if (g.isRecaptchaCompatibilityMode) {
							var We = document.createElement("input");
							We.type = "hidden", We.name = vt, We.id = "".concat(ge, "_g_response"), me.appendChild(We)
						}
						return h.appendChild(me), at.widgetRenderEndTimeTsMs = B(), ge
					}
				}
			},
			C = function() {
				var a, i = -1,
					n = !0,
					u = !1,
					s = void 0;
				try {
					for (var h = g.widgetMap[Symbol.iterator](), w; !(n = (w = h.next()).done); n = !0) {
						var S = Me(w.value, 2),
							A = S[0],
							N = S[1];
						i < N.idx && (a = A, i = N.idx)
					}
				} catch (W) {
					u = !0, s = W
				} finally {
					try {
						!n && h.return != null && h.return()
					} finally {
						if (u) throw s
					}
				}
				return i === -1 && m("Could not find widget", 43778), a
			},
			T = Kr();

		function O() {
			return O = Xt(function(_, a, i, n) {
				var u, s, h, w, S, A, N, W, Y, re;
				return Be(this, function(U) {
					switch (U.label) {
						case 0:
							if (u = _.params.sitekey, s = Dt(), !s) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), r(_, a, !1), [2];
							h = "h/".concat("b", "/"), w = new URL(s), S = "https", A = "", W = "".concat(S, "://").concat(w.host, "/cdn-cgi/challenge-platform/").concat(h, "rc/").concat(n).concat(A), U.label = 1;
						case 1:
							return U.trys.push([1, 3, , 4]), [4, fetch(W, {
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
							return Y = U.sent(), Y.status !== 200 ? (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), r(_, a, !1)) : r(_, a, !0), [3, 4];
						case 3:
							return re = U.sent(), b("Error contacting Turnstile, aborting clearance redemption."), r(_, a, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), O.apply(this, arguments)
		}
		var M = function(_) {
			var a = _.data;
			if (a.source === z) {
				if (!Jr(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!a.widgetId || !g.widgetMap.has(a.widgetId))) {
					var i = $(a.widgetId),
						n = g.widgetMap.get(a.widgetId);
					if (!(!i || !n)) switch (a.event) {
						case "init": {
							var u;
							n.widgetInitStartTimeTsMs = B(), n.kills = a.kills;
							var s = n.shadow.getElementById(i);
							s || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), n.mode = a.mode, n.nextRcV = a.nextRcV, n.mode === G.Invisible && n.params["refresh-expired"] === ee.Manual && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(ee.Auto, "' or '").concat(ee.Never, ".'")), n.mode !== G.Managed && n.params["refresh-timeout"] !== ue.Auto && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), n.params.appearance === K.Always || n.isExecuting && n.params.appearance === K.Execute ? Pt(s, n) : Ir(s), s.style.display = "";
							var h = n.shadow.querySelector("#".concat(i));
							h || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (u = h.contentWindow) === null || u === void 0 || u.postMessage({
								event: "init",
								source: z,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "translationInit": {
							var w = n.shadow.getElementById(i);
							w || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var S = new Map;
							n.displayLanguage = a.displayLanguage, n.displayRtl = a.displayRtl, Object.keys(a.translationData).forEach(function(Z) {
								S.set(Z, a.translationData[Z])
							}), Qr(w, S);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(n.params.language, " is not supported, falling back to: ").concat(a.fallback, ".")), n.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var A = n.shadow.getElementById(i);
							if (n.isExecuting = !1, A || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "unsupported_browser") {
								var N;
								(N = n.cbUnsupported) === null || N === void 0 || N.call(n)
							}
							break
						}
						case "food": {
							n.watchcat && a.seq > n.watchcat.lastAckedSeq && (n.watchcat.lastAckedSeq = a.seq);
							break
						}
						case "overrunBegin": {
							n.isOverrunning = !0, n.watchcat && (n.watchcat.overrunBeginSeq = n.watchcat.lastAckedSeq);
							break
						}
						case "overrunEnd": {
							n.isOverrunning = !1;
							break
						}
						case "complete": {
							l(n, J, a.widgetId), n.response = a.token, a.sToken ? e(n, i, a.sToken, a.chlId) : r(n, i, !1);
							break
						}
						case "fail": {
							a.rcV && l(n, a.rcV, a.widgetId), a.cfChlOut && (n.cfChlOut = a.cfChlOut), a.cfChlOutS && (n.cfChlOutS = a.cfChlOutS), a.code && (n.errorCode = a.code), n.isExecuting = !1, n.isFailed = !0, n.isInitialized = !0, a.frMd && (n.frMd = a.frMd), Ft(i);
							var W = n.cbError,
								Y = a.code === je || a.code === qe;
							if (Y) {
								var re, U = n.shadow.querySelector("#".concat(i));
								U == null || (re = U.contentWindow) === null || re === void 0 || re.postMessage({
									event: "forceFail",
									source: z,
									widgetId: a.widgetId
								}, "*")
							}
							if (W) {
								var de;
								W(String((de = a.code) !== null && de !== void 0 ? de : tr)) ? n.params.retry === _e.Auto && !n.isResetting && t(n, i, Y) : (a.code && b("Error: ".concat(a.code, ".")), t(n, i, Y))
							} else a.code ? (t(n, i, Y), m("Error: ".concat(a.code), 3076)) : t(n, i, !1);
							break
						}
						case "feedbackInit": {
							var p = n.wrapper.querySelector("#".concat(i, "-fr"));
							if (p) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							_t(i, n, a.feedbackOrigin, g.scriptUrlParsed);
							break
						}
						case "requestFeedbackData": {
							var ne, fe = n.shadow.querySelector("#".concat(i));
							fe || m("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (ne = fe.contentWindow) === null || ne === void 0 || ne.postMessage({
								event: "requestTurnstileResults",
								source: z,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "turnstileResults": {
							var Ee, q, pe = (Ee = n.wrapper.parentNode) === null || Ee === void 0 ? void 0 : Ee.querySelector("#".concat(i, "-fr"));
							pe || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), (q = pe.contentWindow) === null || q === void 0 || q.postMessage({
								cfChlOut: n.cfChlOut,
								cfChlOutS: n.cfChlOutS,
								errorCode: n.errorCode,
								event: "feedbackData",
								frMd: n.frMd || a.frMd,
								mode: a.mode,
								rayId: a.rayId,
								rcV: a.rcV,
								sitekey: a.sitekey,
								source: z,
								widgetId: a.widgetId
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ae, Te = (ae = n.wrapper.parentNode) === null || ae === void 0 ? void 0 : ae.querySelector("#".concat(i, "-fr"));
							Te || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), yr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ie, Se = a.token;
							n.isExpired = !0, (ie = n.cbExpired) === null || ie === void 0 || ie.call(n, Se), n.params["refresh-expired"] === ee.Auto && !n.isResetting && x(X.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							l(n, J, a.widgetId), Ft(i);
							var ve = n.cbTimeout;
							if (ve ? ve() : n.params["refresh-timeout"] === ue.Never && !n.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), n.params["refresh-timeout"] === ue.Auto && !n.isResetting) {
								var oe = n.cbAfterInteractive;
								oe == null || oe(), x(X.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							l(n, J, a.widgetId), x(X.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							l(n, a.nextRcV, a.widgetId), x(a.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Re, Pe = n.shadow.getElementById(i);
							Pe || m("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Re = n.cbBeforeInteractive) === null || Re === void 0 || Re.call(n), n.params.appearance === K.InteractionOnly && Pt(Pe, n);
							break
						}
						case "interactiveEnd": {
							var Ae;
							(Ae = n.cbAfterInteractive) === null || Ae === void 0 || Ae.call(n);
							break
						}
						case "widgetStale": {
							n.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var Ie;
							n.widgetParamsStartTimeTsMs = B();
							var Ce = n.shadow.querySelector("#".concat(i));
							Ce || m("Received state for an unknown widget: ".concat(a.widgetId), 3078), n.isResetting = !1;
							var ce = {},
								tt = B(),
								Oe = {
									"d.cT": c(),
									"ht.atrs": o(document.body.parentNode),
									"pg.ref": document.referrer,
									pi: {
										ffp: br(n.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: xr(document, or, cr),
										sL: document.scripts.length,
										sR: n.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: "".concat(document.title.length, "|").concat(wr(document.title)),
										tL: document.getElementsByTagName("*").length,
										wp: _r(n.wrapper),
										xp: hr(n.wrapper).substring(0, ur)
									},
									"w.iW": window.innerWidth
								};
							(Ie = Ce.contentWindow) === null || Ie === void 0 || Ie.postMessage(ze({
								action: n.action,
								apiJsResourceTiming: T ? JSON.parse(JSON.stringify(T)) : void 0,
								appearance: n.params.appearance,
								au: g.scriptUrl,
								cData: n.cData,
								ch: "7f3d2ee44814",
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
								source: z,
								timeExtraParamsMs: B() - n.widgetRenderStartTimeTsMs,
								timeInitMs: n.widgetInitStartTimeTsMs - n.widgetRenderEndTimeTsMs,
								timeLoadInitMs: B() - g.turnstileLoadInitTimeTsMs,
								timeParamsMs: n.widgetParamsStartTimeTsMs - n.widgetInitStartTimeTsMs,
								timeRenderMs: n.widgetRenderEndTimeTsMs - n.widgetRenderStartTimeTsMs,
								timeTiefMs: B() - tt,
								upgradeAttempts: g.upgradeAttempts,
								upgradeCompletedCount: g.upgradeCompletedCount,
								url: Dt(),
								widgetId: a.widgetId,
								wPr: Oe
							}, ce), "*"), d(n, a.widgetId, Ce), n.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		g.msgHandler = M, window.addEventListener("message", M);

		function I(_) {
			if (typeof _ == "string") {
				var a = Qe(_);
				if (a && g.widgetMap.has(a)) return a;
				if (g.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? I(i) : null
				} catch (n) {
					return null
				}
			}
			return D(_, Element) ? y(_) : _ || g.widgetMap.size === 0 ? null : g.widgetMap.keys().next().value
		}
		var k = {};
		return lt(ze({}, k), {
			_private: {
				showFeedback: function(a) {
					var i = I(a);
					if (i) {
						var n = $(i);
						if (n) {
							var u = g.widgetMap.get(i);
							u && _t(n, u, Je.Custom, g.scriptUrlParsed)
						}
					}
				}
			},
			execute: function(a, i) {
				var n = I(a);
				if (!n) {
					i === void 0 && m("Please provide 2 parameters to execute: container and parameters", 43521);
					var u = P(a, i);
					u || m("Failed to render widget", 43522), n = u
				}
				var s = g.widgetMap.get(n);
				if (s) {
					f(s, i);
					var h = $(n);
					if (s.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(h, "), consider using reset() before execute()."));
						return
					}
					if (s.isExecuting = !0, s.response) {
						var w;
						s.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(h, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (w = s.cbSuccess) === null || w === void 0 || w.call(s, s.response, !1);
						return
					}
					s.isExpired && b("Call to execute on a expired-widget (".concat(h, "), consider using reset() before.")), s.isStale && (x(X.StaleExecute, h), s.isExecuting = !0), s.msgQueue.push(le.Execute), s.isExecuted = !0;
					var S = s.shadow.querySelector("#".concat(h));
					if (S || (s.isExecuting = !1, m("Widget ".concat(h, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && d(s, n, S), s.isInitialized && s.params.appearance === K.Execute && Pt(S, s), s.isExecuting) {
						var A;
						(A = S.contentWindow) === null || A === void 0 || A.postMessage({
							event: "execute",
							source: z,
							widgetId: n
						}, "*")
					}
				}
			},
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var n = C();
					if (n) {
						var u = g.widgetMap.get(n);
						return u != null && u.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), u == null ? void 0 : u.response
					}
					m("Could not find a widget", 43794)
				}
				var s = I(a);
				return s || m("Could not find widget for provided container", 43778), (i = g.widgetMap.get(s)) === null || i === void 0 ? void 0 : i.response
			},
			implicitRender: Wt,
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var n = C();
					if (n) {
						var u, s;
						return (s = (u = g.widgetMap.get(n)) === null || u === void 0 ? void 0 : u.isExpired) !== null && s !== void 0 ? s : !1
					}
					m("Could not find a widget", 43794)
				}
				var h = I(a);
				h || m("Could not find widget for provided container", 43778);
				var w;
				return (w = (i = g.widgetMap.get(h)) === null || i === void 0 ? void 0 : i.isExpired) !== null && w !== void 0 ? w : !1
			},
			ready: function(a) {
				if (g.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : V(a), '"'), 3841), g.isReady) {
					a();
					return
				}
				zt.push(a)
			},
			remove: j,
			render: P,
			reset: E
		})
	})();

	function $r(e) {
		var t = e.getAttribute("data-sitekey"),
			r = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (r.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (xt(c) ? r.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (At(l) ? r.size = l : b('Unknown data-size value: "'.concat(l, '".'))), 0) var v;
		var y = e.getAttribute("data-action");
		typeof y == "string" && (r.action = y);
		var d = e.getAttribute("data-cdata");
		typeof d == "string" && (r.cData = d);
		var f = e.getAttribute("data-retry");
		f && (wt(f) ? r.retry = f : b('Invalid data-retry value: "'.concat(f, ", expected either 'never' or 'auto'\".")));
		var E = e.getAttribute("data-retry-interval");
		if (E) {
			var x = Number.parseInt(E, 10);
			Et(x) ? r["retry-interval"] = x : b('Invalid data-retry-interval value: "'.concat(E, ', expected an integer value > 0 and < 900000".'))
		}
		var j = e.getAttribute("data-expiry-interval");
		if (j) {
			var P = Number.parseInt(j, 10);
			Tt(P) ? r["expiry-interval"] = P : b('Invalid data-expiry-interval value: "'.concat(P, ', expected an integer value > 0 and < 360000".'))
		}
		var C = e.getAttribute("data-refresh-expired");
		C && (It(C) ? r["refresh-expired"] = C : b('Unknown data-refresh-expired value: "'.concat(C, ", expected either: 'never', 'auto' or 'manual'.")));
		var T = e.getAttribute("data-refresh-timeout");
		T && (Ct(T) ? r["refresh-timeout"] = T : b('Unknown data-refresh-timeout value: "'.concat(T, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-language");
		O && (Ot(O) ? r.language = O : b('Invalid data-language value: "'.concat(O, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function M(s) {
			var h = e.getAttribute(s);
			return h && window[h] ? window[h] : void 0
		}
		var I = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		I.forEach(function(s) {
			r[s] = M("data-".concat(s))
		});
		var k = e.getAttribute("data-feedback-enabled");
		k ? (Rr(k) || b('Invalid data-feedback-enabled value: "'.concat(k, ", expected either: 'true' or 'false'. Value is ignored.")), r["feedback-enabled"] = k === "true") : r["feedback-enabled"] = !0;
		var _, a = (_ = e.getAttribute("data-response-field")) !== null && _ !== void 0 ? _ : "true";
		r["response-field"] = a === "true";
		var i = e.getAttribute("data-response-field-name");
		i && (r["response-field-name"] = i);
		var n = e.getAttribute("data-execution");
		n && (Nt(n) ? r.execution = n : b('Unknown data-execution value: "'.concat(n, ", expected either: 'render' or 'execute'.")));
		var u = e.getAttribute("data-appearance");
		return u && (kt(u) ? r.appearance = u : b('Unknown data-appearance value: "'.concat(u, ", expected either: 'always', 'execute', or 'interaction-only'."))), r
	}

	function Zr() {
		var e = !0;
		Lt(g, e), g.msgHandler && window.removeEventListener("message", g.msgHandler), Er(window.turnstile, g)
	}
	xe = !1, R = gr(), g.scriptWasLoadedAsync = (Ke = R == null ? void 0 : R.loadedAsync) !== null && Ke !== void 0 ? Ke : !1, g.scriptUrl = ($e = R == null ? void 0 : R.src) !== null && $e !== void 0 ? $e : "undefined", g.scriptUrlParsed = R == null ? void 0 : R.url, R != null && R.params && (we = R.params.get("compat"), (we == null ? void 0 : we.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Ut) : we !== null && b('Unknown value for api.js?compat: "'.concat(we, '", ignoring.')), R.params.forEach(function(e, t) {
		F(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || b('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), xe = R.params.get("_upgrade") === "true", Q = R.params.get("onload"), Q && !xe && setTimeout(function() {
		typeof window[Q] == "function" ? window[Q]() : (b("Unable to find onload callback '".concat(Q, "' immediately after loading, expected 'function', got '").concat(V(window[Q]), "'.")), setTimeout(function() {
			typeof window[Q] == "function" ? window[Q]() : b("Unable to find onload callback '".concat(Q, "' after 1 second, expected 'function', got '").concat(V(window[Q]), "'."))
		}, 1e3))
	}, 0)), Vt = "turnstile" in window, Vt && !xe ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Vt && xe && (Tr(window.turnstile, g), Mt(g), (R == null || (Ze = R.params) === null || Ze === void 0 ? void 0 : Ze.get("render")) !== "explicit" && setTimeout(Wt, 0)), window.turnstile = Ut, xe || ((R == null || (et = R.params) === null || et === void 0 ? void 0 : et.get("render")) !== "explicit" && zt.push(Wt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Ar, 0) : window.addEventListener("DOMContentLoaded", Ar))), Cr = 10800 * 1e3, window.setTimeout(Zr, Cr);
	var xe, R, Ke, $e, we, Q, Vt, Ze, et, Cr;
})();