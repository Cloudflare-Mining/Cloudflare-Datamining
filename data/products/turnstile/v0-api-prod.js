"use strict";
(function() {
	function Qt(e, t, a, o, c, u, v) {
		try {
			var y = e[u](v),
				f = y.value
		} catch (d) {
			a(d);
			return
		}
		y.done ? t(f) : Promise.resolve(f).then(o, c)
	}

	function Jt(e) {
		return function() {
			var t = this,
				a = arguments;
			return new Promise(function(o, c) {
				var u = e.apply(t, a);

				function v(f) {
					Qt(u, o, c, v, y, "next", f)
				}

				function y(f) {
					Qt(u, o, c, v, y, "throw", f)
				}
				v(void 0)
			})
		}
	}

	function V(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : V(e, t)
	}

	function He(e, t, a) {
		return t in e ? Object.defineProperty(e, t, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = a, e
	}

	function je(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {
				return Object.getOwnPropertyDescriptor(a, c).enumerable
			}))), o.forEach(function(c) {
				He(e, c, a[c])
			})
		}
		return e
	}

	function Dr(e, t) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function dt(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Dr(Object(t)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
		}), e
	}

	function Kt(e) {
		if (Array.isArray(e)) return e
	}

	function $t(e, t) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				u = !1,
				v, y;
			try {
				for (a = a.call(e); !(c = (v = a.next()).done) && (o.push(v.value), !(t && o.length === t)); c = !0);
			} catch (f) {
				u = !0, y = f
			} finally {
				try {
					!c && a.return != null && a.return()
				} finally {
					if (u) throw y
				}
			}
			return o
		}
	}

	function Zt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function pt(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
		return o
	}

	function er(e, t) {
		if (e) {
			if (typeof e == "string") return pt(e, t);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return pt(e, t)
		}
	}

	function Fe(e, t) {
		return Kt(e) || $t(e, t) || er(e, t) || Zt()
	}

	function W(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function qe(e, t) {
		var a = {
				label: 0,
				sent: function() {
					if (u[0] & 1) throw u[1];
					return u[1]
				},
				trys: [],
				ops: []
			},
			o, c, u, v;
		return v = {
			next: y(0),
			throw: y(1),
			return: y(2)
		}, typeof Symbol == "function" && (v[Symbol.iterator] = function() {
			return this
		}), v;

		function y(d) {
			return function(T) {
				return f([d, T])
			}
		}

		function f(d) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; v && (v = 0, d[0] && (a = 0)), a;) try {
				if (o = 1, c && (u = d[0] & 2 ? c.return : d[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, d[1])).done) return u;
				switch (c = 0, u && (d = [d[0] & 2, u.value]), d[0]) {
					case 0:
					case 1:
						u = d;
						break;
					case 4:
						return a.label++, {
							value: d[1],
							done: !1
						};
					case 5:
						a.label++, c = d[1], d = [0];
						continue;
					case 7:
						d = a.ops.pop(), a.trys.pop();
						continue;
					default:
						if (u = a.trys, !(u = u.length > 0 && u[u.length - 1]) && (d[0] === 6 || d[0] === 2)) {
							a = 0;
							continue
						}
						if (d[0] === 3 && (!u || d[1] > u[0] && d[1] < u[3])) {
							a.label = d[1];
							break
						}
						if (d[0] === 6 && a.label < u[1]) {
							a.label = u[1], u = d;
							break
						}
						if (u && a.label < u[2]) {
							a.label = u[2], a.ops.push(d);
							break
						}
						u[2] && a.ops.pop(), a.trys.pop();
						continue
				}
				d = t.call(e, a)
			} catch (T) {
				d = [6, T], c = 0
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
	var tr = 300,
		rr = 10,
		ar = 200500,
		nr = 300020,
		Ge = 300030,
		Xe = 300031;

	function vt(e) {
		var t = new URLSearchParams;
		if (e.params.botnet && t.set("botnet", "true"), e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel), e.params._debugSitekeyOverrides.offlabelShowPrivacy && e.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default" && t.set("offlabel_show_privacy", e.params._debugSitekeyOverrides.offlabelShowPrivacy), e.params._debugSitekeyOverrides.offlabelShowHelp && e.params._debugSitekeyOverrides.offlabelShowHelp !== "default" && t.set("offlabel_show_help", e.params._debugSitekeyOverrides.offlabelShowHelp)), e.params._debugForceLoopFeedback && t.set("force_loop_feedback", "true"), e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var Ye = "cf-chl-widget-",
		H = "cloudflare-challenge",
		ir = ".cf-turnstile",
		or = ".cf-challenge",
		cr = ".g-recaptcha",
		mt = "cf_challenge_response",
		gt = "cf-turnstile-response",
		yt = "g-recaptcha-response",
		lr = 8e3,
		ht = "private-token",
		ur = 3,
		sr = 500,
		fr = 500,
		$ = "",
		_t = "_cftscs_",
		dr = 512;
	var G;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(G || (G = {}));
	var F;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(F || (F = {}));
	var _e;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(_e || (_e = {}));
	var be;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(be || (be = {}));
	var xe;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(xe || (xe = {}));
	var re;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(re || (re = {}));
	var fe;
	(function(e) {
		e.Never = "never", e.Manual = "manual", e.Auto = "auto"
	})(fe || (fe = {}));
	var Z;
	(function(e) {
		e.Always = "always", e.Execute = "execute", e.InteractionOnly = "interaction-only"
	})(Z || (Z = {}));
	var we;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(we || (we = {}));
	var de;
	(function(e) {
		e.Execute = "execute"
	})(de || (de = {}));
	var X;
	(function(e) {
		e.New = "new", e.CrashedRetry = "crashed_retry", e.FailureRetry = "failure_retry", e.StaleExecute = "stale_execute", e.AutoExpire = "auto_expire", e.AutoTimeout = "auto_timeout", e.ManualRefresh = "manual_refresh", e.Api = "api", e.CheckDelays = "check_delays", e.TimeCheckCachedWarningAux = "time_check_cached_warning_aux", e.JsCookiesMissingAux = "js_cookies_missing_aux", e.RedirectingTextOverrun = "redirecting_text_overrun"
	})(X || (X = {}));

	function P(e, t) {
		return e.indexOf(t) !== -1
	}
	var Vr = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Wr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		pr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function bt(e, t, a) {
		var o = "https://challenges.cloudflare.com",
			c, u = (c = a == null ? void 0 : a.origin) !== null && c !== void 0 ? c : o;
		if (t) {
			var v;
			return (v = e["base-url"]) !== null && v !== void 0 ? v : u
		}
		return u
	}

	function xt(e, t, a, o, c, u, v, y, f) {
		var d = bt(a, c, y),
			T = u ? "h/".concat(u, "/") : "",
			w = f ? "&".concat(f) : "",
			q = a["feedback-enabled"] === !1 ? "fbD" : "fbE",
			M = a.chlPageOfflabel ? "&offlabel=true" : "";
		return "".concat(d, "/cdn-cgi/challenge-platform/").concat(T, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(q, "/").concat(v, "/").concat(a.size, "?lang=").concat(a.language).concat(M).concat(w)
	}
	var wt = function(e) {
			var t, a, o = window.innerWidth < 400,
				c = e.state !== be.FailureFeedbackCode && (e.state === be.FailureFeedback || e.state === be.FailureHavingTroubles || !e.errorCode),
				u, v = P(Vr, (u = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && u !== void 0 ? u : "nonexistent"),
				y, f = P(Wr, (y = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && y !== void 0 ? y : "nonexistent");
			return o ? Ur({
				isModeratelyVerbose: f,
				isSmallerFeedback: c,
				isVerboseLanguage: v
			}) : c && v ? "680px" : c && f ? "670px" : c ? "650px" : v ? "690px" : "680px"
		},
		Ur = function(e) {
			var t = e.isVerboseLanguage,
				a = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return a && t ? "660px" : a && o ? "620px" : a ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function Qe(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function vr(e, t) {
		if (!V(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function ae(e, t) {
		return ae = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, ae(e, t)
	}

	function mr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && ae(e, t)
	}

	function Je() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Pe(e, t, a) {
		return Je() ? Pe = Reflect.construct : Pe = function(c, u, v) {
			var y = [null];
			y.push.apply(y, u);
			var f = Function.bind.apply(c, y),
				d = new f;
			return v && ae(d, v.prototype), d
		}, Pe.apply(null, arguments)
	}

	function pe(e) {
		return pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, pe(e)
	}

	function gr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ke(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return Ke = function(o) {
			if (o === null || !gr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return Pe(o, arguments, pe(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ae(c, o)
		}, Ke(e)
	}

	function yr(e, t) {
		return t && (W(t) === "object" || typeof t == "function") ? t : Qe(e)
	}

	function hr(e) {
		var t = Je();
		return function() {
			var o = pe(e),
				c;
			if (t) {
				var u = pe(this).constructor;
				c = Reflect.construct(o, arguments, u)
			} else c = o.apply(this, arguments);
			return yr(this, c)
		}
	}
	var _r = (function(e) {
		"use strict";
		mr(a, e);
		var t = hr(a);

		function a(o, c) {
			vr(this, a);
			var u;
			return u = t.call(this, o), He(Qe(u), "code", void 0), u.name = "TurnstileError", u.code = c, u
		}
		return a
	})(Ke(Error));

	function m(e, t) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new _r(a, t)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function $e(e) {
		return e.startsWith(Ye) ? e.substring(Ye.length) : null
	}

	function ee(e) {
		return "".concat(Ye).concat(e)
	}

	function De() {
		var e = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/,
			t = document.currentScript;
		if (V(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (V(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function br() {
		var e = De();
		e || m("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			a;
		try {
			a = new URL(t)
		} catch (u) {
			m("Could not parse Turnstile script tag URL", 43777)
		}
		var o = {
			loadedAsync: !1,
			params: new URLSearchParams,
			src: t,
			url: a
		};
		(e.async || e.defer) && (o.loadedAsync = !0);
		var c = t.split("?");
		return c.length > 1 && (o.params = new URLSearchParams(c[1])), o
	}

	function j() {
		return Date.now()
	}
	var Et = function(e, t, a, o) {
			var c = bt(t.params, !1, o),
				u = "h/".concat("b", "/"),
				v, y, f = "".concat(c, "/cdn-cgi/challenge-platform/").concat(u, "feedback-reports/").concat($e(e), "/").concat(t.displayLanguage, "/").concat((y = t.params.theme) !== null && y !== void 0 ? y : t.theme, "/").concat(a);
			if (window.top !== window.self) {
				window.open(f, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var d = document.createElement("div");
			d.style.position = "fixed", d.style.zIndex = "2147483646", d.style.width = "100vw", d.style.height = "100vh", d.style.top = "0", d.style.left = "0", d.style.transformOrigin = "center center", d.style.overflowX = "hidden", d.style.overflowY = "auto", d.style.background = "rgba(0,0,0,0.4)";
			var T = document.createElement("div");
			T.className = "cf-wrapper-turnstile-feedback", T.style.display = "table-cell", T.style.verticalAlign = "middle", T.style.width = "100vw", T.style.height = "100vh";
			var w = document.createElement("div");
			w.className = "cf-turnstile-feedback", w.id = "cf-fr-id", w.style.width = "100vw", w.style.maxWidth = "500px", w.style.height = wt(t), w.style.position = "relative", w.style.zIndex = "2147483647", w.style.backgroundColor = "#ffffff", w.style.borderRadius = "5px", w.style.left = "0px", w.style.top = "0px", w.style.overflow = "hidden", w.style.margin = "0px auto";
			var q = function() {
					w.style.height = wt(t)
				},
				M = function() {
					var k;
					window.removeEventListener("resize", q), (k = d.parentNode) === null || k === void 0 || k.removeChild(d)
				},
				C = document.createElement("iframe");
			C.id = "".concat(e, "-fr"), C.setAttribute("src", f), C.setAttribute("allow", "cross-origin-isolated; fullscreen"), C.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), C.setAttribute("scrolling", "yes"), C.style.borderWidth = "0px", C.style.width = "100%", C.style.height = "100%", C.style.overflow = "auto";
			var S = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			S.setAttribute("tabindex", "0"), S.setAttribute("role", "img"), S.setAttribute("aria-label", "Close button icon"), S.style.position = "absolute", S.style.width = "26px", S.style.height = "26px", S.style.zIndex = "2147483647", S.style.cursor = "pointer", t.displayRtl ? S.style.left = "24px" : S.style.right = "24px", S.style.top = "24px", S.setAttribute("width", "20"), S.setAttribute("height", "20"), S.addEventListener("click", function(k) {
				k.stopPropagation(), M()
			}), S.addEventListener("keydown", function(k) {
				(k.key === "Enter" || k.key === " ") && (k.stopPropagation(), M())
			});
			var O = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			O.setAttribute("ry", "12"), O.setAttribute("rx", "12"), O.setAttribute("cy", "12"), O.setAttribute("cx", "12"), O.setAttribute("fill", "none"), O.setAttribute("stroke-width", "0"), S.appendChild(O);
			var L = document.createElementNS("http://www.w3.org/2000/svg", "line");
			L.setAttribute("stroke-width", "1"), L.setAttribute("fill", "none"), L.setAttribute("x1", "6"), L.setAttribute("x2", "18"), L.setAttribute("y1", "18"), L.setAttribute("y2", "5");
			var I = document.createElementNS("http://www.w3.org/2000/svg", "line");
			I.setAttribute("stroke-width", "1"), I.setAttribute("fill", "none"), I.setAttribute("x1", "6"), I.setAttribute("x2", "18"), I.setAttribute("y1", "5"), I.setAttribute("y2", "18"), t.theme === _e.Light ? (L.setAttribute("stroke", "#0A0A0A"), I.setAttribute("stroke", "#0A0A0A")) : (L.setAttribute("stroke", "#F2F2F2"), I.setAttribute("stroke", "#F2F2F2")), S.appendChild(L), S.appendChild(I), w.appendChild(C), w.appendChild(S), T.appendChild(w), d.appendChild(T), d.addEventListener("click", M), t.wrapper.parentNode.appendChild(d), window.addEventListener("resize", q)
		},
		xr = function(e) {
			var t, a, o, c;
			(c = document.getElementById(e)) === null || c === void 0 || (o = c.parentElement) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 || t.remove()
		};
	var Ze;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom", e.TimeMismatch = "timemismatch", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain"
	})(Ze || (Ze = {}));
	var Tt = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.substring(0, t) : e
	};

	function wr(e) {
		if (!e) return "-";
		var t = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, u = a.previousElementSibling; u;) u.tagName === a.tagName && c++, u = u.previousElementSibling;
			var v = Tt(a.tagName.toLowerCase()),
				y = "".concat(v, "[").concat(c, "]");
			return t(a.parentNode, "/".concat(y).concat(o))
		};
		return t(e, "")
	}

	function Er(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Br = {
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

	function Tr(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var a = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = a.slice(0, 20).map(function(u) {
				return Br[u.type] || "-"
			}).join(""),
			c = ["m:".concat(t.method || ""), "f:".concat(a.length), o].join("|");
		return c
	}

	function Sr(e, t, a) {
		for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(w) {
					return c > t || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), v;
			(v = u.nextNode()) !== null && o.length < a;) {
			if (v.nodeType === Node.ELEMENT_NODE) {
				var y = v;
				o += "".concat(Tt(y.tagName.toLowerCase()));
				for (var f = 0; f < y.attributes.length; f++) {
					var d = y.attributes[f];
					o += "_".concat(Tt(d.name, 2))
				}
				o += ">"
			} else v.nodeType === Node.TEXT_NODE && (o += "-t");
			var T = v.parentNode;
			for (c = 0; T !== e && T !== null;) c++, T = T.parentNode
		}
		return o.substring(0, a)
	}

	function Rr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : W(e)));
		for (var t = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function Ar(e, t) {
		var a;
		t.upgradeAttempts++;
		var o = De();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var u = new URL(o.src),
				v = document.createElement("script");
			u.searchParams.set("_upgrade", "true"), u.searchParams.set("_cb", String(Date.now())), v.async = !0, c && (v.nonce = c), v.setAttribute("crossorigin", "anonymous"), v.src = u.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(v, o)
		}
	}

	function Ir(e, t) {
		var a = e._pState;
		return a ? (t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = j(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap, !0) : !1
	}

	function St(e) {
		return P(["auto", "dark", "light"], e)
	}

	function Rt(e) {
		return P(["auto", "never"], e)
	}

	function At(e) {
		return e > 0 && e < 9e5
	}

	function It(e) {
		return e > 0 && e < 36e4
	}
	var zr = /^[0-9A-Za-z_-]{3,100}$/;

	function Cr(e) {
		return zr.test(e)
	}
	var Hr = /^[a-z0-9_-]{0,32}$/i;

	function Ct(e) {
		return e === void 0 ? !0 : typeof e == "string" && Hr.test(e)
	}
	var jr = /^[a-z0-9_\-=]{0,255}$/i;

	function Ot(e) {
		return e === void 0 ? !0 : typeof e == "string" && jr.test(e)
	}

	function kt(e) {
		return P([F.Normal, F.Compact, F.Invisible, F.Flexible], e)
	}

	function Nt(e) {
		return P(["auto", "manual", "never"], e)
	}

	function Mt(e) {
		return P(["auto", "manual", "never"], e)
	}
	var qr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Lt(e) {
		return e === "auto" || qr.test(e)
	}

	function Ft(e) {
		return P(["always", "execute", "interaction-only"], e)
	}

	function et(e) {
		return P(["true", "false"], e)
	}

	function Pt(e) {
		return P(["render", "execute"], e)
	}
	var Gr = 900,
		Xr = 45,
		Yr = 50;

	function Qr(e) {
		e.watchCatSeq++;
		var t = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), u; !(t = (u = c.next()).done); t = !0) {
				var v = Fe(u.value, 2),
					y = v[0],
					f = v[1],
					d;
				f.watchcat.seq = e.watchCatSeq, f.watchcat.lastAckedSeq === 0 && (f.watchcat.lastAckedSeq = e.watchCatSeq);
				var T = ee(y);
				if (!T || !f.shadow) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				var w = f.shadow.querySelector("#".concat(T));
				if (!w) {
					f.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), f.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(f.isComplete || f.isFailed || f.isResetting)) {
					var q = f.watchcat.seq - 1 - Xr,
						M = f.watchcat.lastAckedSeq < q,
						C = f.watchcat.seq - 1 - Yr,
						S = f.isOverrunning && f.watchcat.overrunBeginSeq !== 0 && f.watchcat.overrunBeginSeq < C;
					if ((f.isExecuting || !f.isInitialized || f.isInitialized && !f.isStale && !f.isExecuted) && f.watchcat.lastAckedSeq !== 0 && M || S) {
						var O;
						f.watchcat.lastAckedSeq = 0, f.watchcat.seq = 0, f.isExecuting = !1;
						var L = function(n, i) {
							console.log("Turnstile Widget seem to have ".concat(n, ": "), i)
						};
						L(M ? "hung" : "crashed", y);
						var I = M ? Ge : Xe,
							k;
						if ((O = e.msgHandler) === null || O === void 0 || O.call(e, {
								data: {
									code: I,
									event: "fail",
									rcV: (k = f.nextRcV) !== null && k !== void 0 ? k : $,
									source: H,
									widgetId: y
								}
							}), 0) var _;
						continue
					}(d = w.contentWindow) === null || d === void 0 || d.postMessage({
						event: "meow",
						seq: e.watchCatSeq,
						source: H,
						widgetId: y
					}, "*")
				}
			}
		} catch (n) {
			a = !0, o = n
		} finally {
			try {
				!t && c.return != null && c.return()
			} finally {
				if (a) throw o
			}
		}
	}

	function Dt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Qr(e)
		}, Gr))
	}

	function Vt(e) {
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
		turnstileLoadInitTimeTsMs: j(),
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		watchCatInterval: null,
		watchCatSeq: 0,
		widgetMap: new Map
	};

	function Wt(e) {
		Mr(e, "")
	}

	function Ht() {
		var e = [ir, or];
		g.isRecaptchaCompatibilityMode && e.push(cr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return jt.render(t)
		})
	}
	var qt = [];

	function Or() {
		g.isReady = !0;
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var o = qt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var u = c.value;
				u()
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

	function Jr(e) {
		var t = g.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var a, o = (a = t.params["response-field"]) !== null && a !== void 0 ? a : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var u;
				c.name = (u = t.params["response-field-name"]) !== null && u !== void 0 ? u : gt, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var v;
				if (typeof t.params["response-field-name"] != "string" && Lr((v = t.params.sitekey) !== null && v !== void 0 ? v : "")) {
					var y = document.createElement("input");
					y.type = "hidden", y.name = mt, y.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(y)
				}
			}
			if (g.isRecaptchaCompatibilityMode) {
				var f = document.createElement("input");
				f.type = "hidden", f.name = yt, f.id = "".concat(e, "_g_response"), t.wrapper.appendChild(f)
			}
		}
	}

	function Mr(e, t) {
		Jr(e);
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && V(a, HTMLInputElement) && (a.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && V(o, HTMLInputElement) && (o.value = t), g.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && V(c, HTMLInputElement) && (c.value = t)
		}
	}

	function it(e, t) {
		var a;
		return !!(!((a = t.kills) === null || a === void 0) && a.includes(e))
	}

	function Ut(e, t) {
		var a = t.params,
			o = a.size,
			c = o === void 0 ? "normal" : o,
			u = t.mode;
		switch (u) {
			case G.NonInteractive:
			case G.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", c) {
					case F.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case F.Invisible:
						m('Invalid value for parameter "size", expected "'.concat(F.Compact, '", "').concat(F.Flexible, '", or "').concat(F.Normal, '", got "').concat(c, '"'), 2817);
					case F.Normal:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case F.Flexible:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break;
					default:
						break
				}
				break;
			case G.Invisible:
				it("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(G.NonInteractive, '", "').concat(G.Managed, '" or "').concat(G.Invisible, '", got "').concat(u, '"'), 2818)
		}
	}

	function kr(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function Kr(e, t) {
		var a = t.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function $r(e) {
		return e.origin ? P(pr, e.origin) : !0
	}

	function Lr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Bt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}

	function Zr() {
		if (typeof window.PerformanceObserver == "function") try {
			var e = De();
			if (!e) return;
			var t = e.src,
				a = !0,
				o = !1,
				c = void 0;
			try {
				for (var u = performance.getEntriesByType("resource")[Symbol.iterator](), v; !(a = (v = u.next()).done); a = !0) {
					var y = v.value;
					if (V(y, PerformanceResourceTiming) && y.name.includes(t)) return y
				}
			} catch (f) {
				o = !0, c = f
			} finally {
				try {
					!a && u.return != null && u.return()
				} finally {
					if (o) throw c
				}
			}
		} catch (f) {}
	}
	var jt = (function() {
		var e = function(n, i, r, l) {
				return O.apply(this, arguments)
			},
			t = function(n, i, r) {
				if (n.params.retry === xe.Auto || r) {
					n.isExecuted && (n.msgQueue.push(de.Execute), n.isExecuted = !0, n.isExecuting = !0);
					var l, s = r ? 0 : 1e3 * 2 + ((l = n.params["retry-interval"]) !== null && l !== void 0 ? l : 0);
					n.retryTimeout = window.setTimeout(function() {
						var h = r ? X.CrashedRetry : X.FailureRetry;
						w(h, i)
					}, s)
				}
			},
			a = function(n, i, r) {
				var l;
				n.response === void 0 && m("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Mr(i, n.response), (l = n.cbSuccess) === null || l === void 0 || l.call(n, n.response, r)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, r = i.length, l = new Array(r), s = 0; s < r; s++) l[s] = i[s].name;
				return l
			},
			c = function() {
				for (var n = {}, i = [], r = document.getElementsByTagName("*"), l = 0; l < r.length && i.length < 50; l++) {
					var s = r[l].tagName.toLowerCase();
					s.indexOf("-") !== -1 && !n[s] && (n[s] = !0, i.push(s))
				}
				return i
			},
			u = function(n, i, r) {
				if (n.rcV = i, 0) var l
			},
			v = function() {
				var n = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = n.length,
					r = "";
				do {
					r = "";
					for (var l = 0; l < 5; l++) r += n.charAt(Math.floor(Math.random() * i))
				} while (g.widgetMap.has(r));
				return r
			},
			y = function(n) {
				var i = !0,
					r = !1,
					l = void 0;
				try {
					for (var s = g.widgetMap[Symbol.iterator](), h; !(i = (h = s.next()).done); i = !0) {
						var x = Fe(h.value, 2),
							E = x[0],
							A = x[1];
						if (A.wrapper.parentElement === n) return E
					}
				} catch (N) {
					r = !0, l = N
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (r) throw l
					}
				}
				return null
			},
			f = function(n, i, r) {
				for (; n.msgQueue.length > 0;) {
					var l, s = n.msgQueue.pop();
					(l = r.contentWindow) === null || l === void 0 || l.postMessage({
						event: s,
						source: H,
						widgetId: i
					}, "*")
				}
			},
			d = function(n, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						l = [],
						s = !0,
						h = !1,
						x = void 0;
					try {
						for (var E = r[Symbol.iterator](), A; !(s = (A = E.next()).done); s = !0) {
							var N = A.value;
							i[N] && i[N] !== n.params[N] && l.push(N)
						}
					} catch (U) {
						h = !0, x = U
					} finally {
						try {
							!s && E.return != null && E.return()
						} finally {
							if (h) throw x
						}
					}
					l.length > 0 && m("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(l.join(",")), 3618), i.action && (Ct(i.action) || m('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (Ot(i.cData) || m('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			T = function(n) {
				w(X.Api, n)
			},
			w = function(n, i) {
				var r = I(i);
				r || m("Nothing to reset found for provided container", 3329);
				var l = g.widgetMap.get(r);
				if (l) {
					var s;
					l.isResetting = !0, l.response = void 0, l.mode = void 0, l.msgQueue = [], l.isComplete = !1, l.isExecuting = !1, l.isExpired = !1, l.isFailed = !1, l.isInitialized = !1, l.isStale = !1, l.isOverrunning = !1, l.watchcat.overrunBeginSeq = 0, l.watchcat.lastAckedSeq = 0, l.watchcat.seq = 0, l.params.execution === we.Render && (l.msgQueue.push(de.Execute), l.isExecuted = !0, l.isExecuting = !0);
					var h = ee(r),
						x = l.shadow.querySelector("#".concat(h));
					(!h || !x) && m("Widget ".concat(r, " to reset was not found."), 3330), l.params.appearance === Z.InteractionOnly && kr(x), l.params.sitekey === null && m("Unexpected Error: Sitekey is null", 3347);
					var E = x.cloneNode(),
						A;
					E.src = xt(r, l.params.sitekey, l.params, (A = l.rcV) !== null && A !== void 0 ? A : $, !1, "b", n, g.scriptUrlParsed, vt(l)), (s = x.parentNode) === null || s === void 0 || s.replaceChild(E, x), Wt(h), l.retryTimeout && window.clearTimeout(l.retryTimeout)
				} else m("Widget ".concat(r, " to reset was not found."), 3331)
			},
			q = function(n) {
				var i = I(n),
					r = i ? g.widgetMap.get(i) : void 0;
				if (!i || !r) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var l = ee(i),
					s = ["input#".concat(l, "_response"), "input#".concat(l, "_legacy_response"), "input#".concat(l, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(h) {
					return h.remove()
				}), r.shadow.querySelectorAll(s.join(", ")).forEach(function(h) {
					return h.remove()
				}), r.wrapper.remove(), r.retryTimeout && window.clearTimeout(r.retryTimeout), g.widgetMap.delete(i), Vt(g)
			},
			M = function(n, i) {
				var r, l, s = j(),
					h;
				if (typeof n == "string") {
					var x;
					try {
						x = document.querySelector(n)
					} catch (Yt) {
						m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
					}
					x || m('Unable to find a container for "'.concat(n, '"'), 3585), h = x
				} else V(n, HTMLElement) ? h = n : m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var E = !0,
					A = !1,
					N = void 0;
				try {
					for (var U = g.widgetMap.values()[Symbol.iterator](), ne; !(E = (ne = U.next()).done); E = !0) {
						var ve = ne.value;
						if (h.contains(ve.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Yt) {
					A = !0, N = Yt
				} finally {
					try {
						!E && U.return != null && U.return()
					} finally {
						if (A) throw N
					}
				}
				var B = Bt();
				if (!B) return m("Turnstile cannot determine its page location", 3607);
				if (B.startsWith("file:")) return m("Turnstile cannot run in a file:// url", 3608);
				var me = ea(h);
				if (me) {
					var p = Object.assign(me, i),
						ie = p.action,
						Se = p.cData,
						Re = p.chlPageData,
						Y = p.sitekey,
						oe;
					p.theme = (oe = p.theme) !== null && oe !== void 0 ? oe : _e.Auto;
					var ce;
					p.retry = (ce = p.retry) !== null && ce !== void 0 ? ce : xe.Auto;
					var ge;
					p.execution = (ge = p.execution) !== null && ge !== void 0 ? ge : we.Render;
					var le;
					p.appearance = (le = p.appearance) !== null && le !== void 0 ? le : Z.Always;
					var Ae;
					p["retry-interval"] = Number((Ae = p["retry-interval"]) !== null && Ae !== void 0 ? Ae : lr);
					var ue;
					p["expiry-interval"] = Number((ue = p["expiry-interval"]) !== null && ue !== void 0 ? ue : (tr - rr) * 1e3);
					var Ie;
					p.size = (Ie = p.size) !== null && Ie !== void 0 ? Ie : F.Normal;
					var Ve = p.callback,
						Ce = p["expired-callback"],
						Oe = p["timeout-callback"],
						We = p["after-interactive-callback"],
						ke = p["before-interactive-callback"],
						K = p["error-callback"],
						Ne = p["unsupported-callback"];
					typeof Y != "string" && m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof Y == "undefined" ? "undefined" : W(Y), '"'), 3588), Cr(Y) || m('Invalid input for parameter "sitekey", got "'.concat(Y, '"'), 3589), kt(p.size) || m('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(W(p.size)), 3590), St(p.theme) || m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(W(p.theme)), 3591), Rt(p.retry) || m('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(W(p.retry)), 3592), p.language || (p.language = "auto"), Lt(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), Ft(p.appearance) || m('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Pt(p.execution) || m('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), At(p["retry-interval"]) || m('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), It(p["expiry-interval"]) || m('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Me, se = (Me = p["refresh-expired"]) !== null && Me !== void 0 ? Me : re.Auto;
					Nt(se) ? p["refresh-expired"] = se : m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(se, '" ').concat(typeof se == "undefined" ? "undefined" : W(se)), 3603);
					var Le, z = (Le = p["refresh-timeout"]) !== null && Le !== void 0 ? Le : fe.Auto;
					Mt(z) ? p["refresh-timeout"] = z : m('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(z, '" ').concat(typeof z == "undefined" ? "undefined" : W(z)), 3603);
					var D = document.createElement("iframe"),
						te = document.createElement("div"),
						ye = te.attachShadow({
							mode: "closed"
						});
					Ct(ie) || m('Invalid input for optional parameter "action", got "'.concat(ie, '"'), 3604), Ot(Se) || m('Invalid input for optional parameter "cData", got "'.concat(Se, '"'), 3605);
					var Q = v(),
						he = ee(Q);
					if (!(!Q || !he)) {
						var Gt = [],
							ot = p.execution === we.Render;
						ot && Gt.push(de.Execute), g.lastWidgetIdx++;
						var Fr = {};
						g.widgetMap.set(Q, dt(je({
							action: ie,
							cbAfterInteractive: We,
							cbBeforeInteractive: ke,
							cbError: K,
							cbExpired: Ce,
							cbSuccess: Ve,
							cbTimeout: Oe,
							cbUnsupported: Ne,
							cData: Se,
							chlPageData: Re,
							hasResponseParamEl: !1,
							idx: g.lastWidgetIdx,
							isComplete: !1,
							isExecuted: ot,
							isExecuting: ot,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: Gt,
							params: p,
							rcV: $,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, Fr), {
							isOverrunning: !1,
							shadow: ye,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: s,
							wrapper: te
						})), Dt(g);
						var ct = g.widgetMap.get(Q);
						ct || m("Turnstile Initialization Error ", 3606), D.style.display = "none", D.style.border = "none", D.style.overflow = "hidden", D.setAttribute("src", xt(Q, Y, p, $, !1, "b", X.New, g.scriptUrlParsed, vt(ct))), D.onerror = function() {
							if (K) {
								K == null || K(String(ar));
								return
							}
							m("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Xt = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"],
							lt;
						P((lt = (l = document.featurePolicy) === null || l === void 0 || (r = l.features) === null || r === void 0 ? void 0 : r.call(l)) !== null && lt !== void 0 ? lt : [], ht) && Xt.push(ht), D.setAttribute("allow", Xt.join("; ")), D.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), D.id = he;
						var ut;
						D.tabIndex = (ut = p.tabindex) !== null && ut !== void 0 ? ut : 0, D.title = "Widget containing a Cloudflare security challenge", ye.appendChild(D);
						var st, Pr = (st = p["response-field"]) !== null && st !== void 0 ? st : !0;
						if (Pr) {
							var Ue = document.createElement("input");
							Ue.type = "hidden";
							var ft;
							if (Ue.name = (ft = p["response-field-name"]) !== null && ft !== void 0 ? ft : gt, Ue.id = "".concat(he, "_response"), te.appendChild(Ue), typeof p["response-field-name"] != "string" && Lr(Y)) {
								var Be = document.createElement("input");
								Be.type = "hidden", Be.name = mt, Be.id = "".concat(he, "_legacy_response"), te.appendChild(Be)
							}
						}
						if (g.isRecaptchaCompatibilityMode) {
							var ze = document.createElement("input");
							ze.type = "hidden", ze.name = yt, ze.id = "".concat(he, "_g_response"), te.appendChild(ze)
						}
						return h.appendChild(te), ct.widgetRenderEndTimeTsMs = j(), he
					}
				}
			},
			C = function() {
				var n, i = -1,
					r = !0,
					l = !1,
					s = void 0;
				try {
					for (var h = g.widgetMap[Symbol.iterator](), x; !(r = (x = h.next()).done); r = !0) {
						var E = Fe(x.value, 2),
							A = E[0],
							N = E[1];
						i < N.idx && (n = A, i = N.idx)
					}
				} catch (U) {
					l = !0, s = U
				} finally {
					try {
						!r && h.return != null && h.return()
					} finally {
						if (l) throw s
					}
				}
				return i === -1 && m("Could not find widget", 43778), n
			},
			S = Zr();

		function O() {
			return O = Jt(function(_, n, i, r) {
				var l, s, h, x, E, A, N, U, ne, ve;
				return qe(this, function(B) {
					switch (B.label) {
						case 0:
							if (l = _.params.sitekey, s = Bt(), !s) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(_, n, !1), [2];
							h = "h/".concat("b", "/"), x = new URL(s), E = "https", A = "", U = "".concat(E, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(h, "rc/").concat(r).concat(A), B.label = 1;
						case 1:
							return B.trys.push([1, 3, , 4]), [4, fetch(U, {
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
							return ne = B.sent(), ne.status !== 200 ? (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(_, n, !1)) : a(_, n, !0), [3, 4];
						case 3:
							return ve = B.sent(), b("Error contacting Turnstile, aborting clearance redemption."), a(_, n, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), O.apply(this, arguments)
		}
		var L = function(_) {
			var n = _.data;
			if (n.source === H) {
				if (!$r(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!n.widgetId || !g.widgetMap.has(n.widgetId))) {
					var i = ee(n.widgetId),
						r = g.widgetMap.get(n.widgetId);
					if (!(!i || !r)) switch (n.event) {
						case "init": {
							var l;
							r.widgetInitStartTimeTsMs = j(), r.kills = n.kills;
							var s = r.shadow.getElementById(i);
							s || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = n.mode, r.nextRcV = n.nextRcV, r.mode === G.Invisible && r.params["refresh-expired"] === re.Manual && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(re.Auto, "' or '").concat(re.Never, ".'")), r.mode !== G.Managed && r.params["refresh-timeout"] !== fe.Auto && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === Z.Always || r.isExecuting && r.params.appearance === Z.Execute ? Ut(s, r) : kr(s), s.style.display = "";
							var h = r.shadow.querySelector("#".concat(i));
							h || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), (l = h.contentWindow) === null || l === void 0 || l.postMessage({
								event: "init",
								source: H,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "translationInit": {
							var x = r.shadow.getElementById(i);
							x || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var E = new Map;
							r.displayLanguage = n.displayLanguage, r.displayRtl = n.displayRtl, Object.keys(n.translationData).forEach(function(Q) {
								E.set(Q, n.translationData[Q])
							}), Kr(x, E);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), r.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var A = r.shadow.getElementById(i);
							if (r.isExecuting = !1, A || m("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "unsupported_browser") {
								var N;
								(N = r.cbUnsupported) === null || N === void 0 || N.call(r)
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
							if (u(r, $, n.widgetId), r.response = n.token, n.scs && !it("scs", r) && (r.scs = n.scs, r.params["session-continuity-persist"] && !it("scs_persist", r))) {
								var U = r.params.sitekey;
								if (U) {
									var ne = "".concat(_t).concat(U);
									try {
										localStorage.setItem(ne, n.scs)
									} catch (Q) {}
								}
							}
							n.sToken ? e(r, i, n.sToken, n.chlId) : a(r, i, !1);
							break
						}
						case "fail": {
							n.rcV && u(r, n.rcV, n.widgetId), n.cfChlOut && (r.cfChlOut = n.cfChlOut), n.cfChlOutS && (r.cfChlOutS = n.cfChlOutS), n.code && (r.errorCode = n.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, n.frMd && (r.frMd = n.frMd), Wt(i);
							var ve = r.cbError,
								B = n.code === Ge || n.code === Xe;
							if (B) {
								var me, p = r.shadow.querySelector("#".concat(i));
								p == null || (me = p.contentWindow) === null || me === void 0 || me.postMessage({
									event: "forceFail",
									source: H,
									widgetId: n.widgetId
								}, "*")
							}
							if (ve) {
								var ie;
								ve(String((ie = n.code) !== null && ie !== void 0 ? ie : nr)) ? r.params.retry === xe.Auto && !r.isResetting && t(r, i, B) : (n.code && b("Error: ".concat(n.code, ".")), t(r, i, B))
							} else n.code ? (t(r, i, B), m("Error: ".concat(n.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var Se = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (Se) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							Et(i, r, n.feedbackOrigin, g.scriptUrlParsed);
							break
						}
						case "requestFeedbackData": {
							var Re, Y = r.shadow.querySelector("#".concat(i));
							Y || m("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (Re = Y.contentWindow) === null || Re === void 0 || Re.postMessage({
								event: "requestTurnstileResults",
								source: H,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "turnstileResults": {
							var oe, ce, ge = (oe = r.wrapper.parentNode) === null || oe === void 0 ? void 0 : oe.querySelector("#".concat(i, "-fr"));
							ge || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), (ce = ge.contentWindow) === null || ce === void 0 || ce.postMessage({
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								event: "feedbackData",
								frMd: r.frMd || n.frMd,
								mode: n.mode,
								rayId: n.rayId,
								rcV: n.rcV,
								sitekey: n.sitekey,
								source: H,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var le, Ae = (le = r.wrapper.parentNode) === null || le === void 0 ? void 0 : le.querySelector("#".concat(i, "-fr"));
							Ae || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), xr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ue, Ie = n.token;
							r.isExpired = !0, (ue = r.cbExpired) === null || ue === void 0 || ue.call(r, Ie), r.params["refresh-expired"] === re.Auto && !r.isResetting && w(X.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							u(r, $, n.widgetId), Wt(i);
							var Ve = r.cbTimeout;
							if (Ve ? Ve() : r.params["refresh-timeout"] === fe.Never && !r.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === fe.Auto && !r.isResetting) {
								var Ce = r.cbAfterInteractive;
								Ce == null || Ce(), w(X.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							u(r, $, n.widgetId), w(X.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							u(r, n.nextRcV, n.widgetId), w(n.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Oe, We = r.shadow.getElementById(i);
							We || m("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Oe = r.cbBeforeInteractive) === null || Oe === void 0 || Oe.call(r), r.params.appearance === Z.InteractionOnly && Ut(We, r);
							break
						}
						case "interactiveEnd": {
							var ke;
							(ke = r.cbAfterInteractive) === null || ke === void 0 || ke.call(r);
							break
						}
						case "widgetStale": {
							r.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var K;
							r.widgetParamsStartTimeTsMs = j();
							var Ne = r.shadow.querySelector("#".concat(i));
							Ne || m("Received state for an unknown widget: ".concat(n.widgetId), 3078), r.isResetting = !1;
							var Me = {},
								se = j(),
								Le = {
									"d.cT": c(),
									"ht.atrs": o(document.body.parentNode),
									"pg.ref": document.referrer,
									pi: {
										ffp: Tr(r.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: Sr(document, ur, sr),
										sL: document.scripts.length,
										sR: r.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: "".concat(document.title.length, "|").concat(Rr(document.title)),
										tL: document.getElementsByTagName("*").length,
										wp: Er(r.wrapper),
										xp: wr(r.wrapper).substring(0, fr)
									},
									"w.iW": window.innerWidth
								},
								z = r.scs;
							if (!z && r.params["session-continuity-persist"] && !it("scs_persist", r)) {
								var D = r.params.sitekey;
								if (D) {
									var te = "".concat(_t).concat(D);
									try {
										var ye;
										z = (ye = localStorage.getItem(te)) !== null && ye !== void 0 ? ye : void 0
									} catch (Q) {}
								}
							}
							z && z.length > dr && (z = void 0), (K = Ne.contentWindow) === null || K === void 0 || K.postMessage(je({
								action: r.action,
								apiJsResourceTiming: S ? JSON.parse(JSON.stringify(S)) : void 0,
								appearance: r.params.appearance,
								au: g.scriptUrl,
								cData: r.cData,
								ch: "833f25fde7cb",
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
								scs: z,
								source: H,
								timeExtraParamsMs: j() - r.widgetRenderStartTimeTsMs,
								timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
								timeLoadInitMs: j() - g.turnstileLoadInitTimeTsMs,
								timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
								timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
								timeTiefMs: j() - se,
								upgradeAttempts: g.upgradeAttempts,
								upgradeCompletedCount: g.upgradeCompletedCount,
								url: Bt(),
								widgetId: n.widgetId,
								wPr: Le
							}, Me), "*"), f(r, n.widgetId, Ne), r.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		g.msgHandler = L, window.addEventListener("message", L);

		function I(_) {
			if (typeof _ == "string") {
				var n = $e(_);
				if (n && g.widgetMap.has(n)) return n;
				if (g.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? I(i) : null
				} catch (r) {
					return null
				}
			}
			return V(_, Element) ? y(_) : _ || g.widgetMap.size === 0 ? null : g.widgetMap.keys().next().value
		}
		var k = {};
		return dt(je({}, k), {
			_private: {
				showFeedback: function(n) {
					var i = I(n);
					if (i) {
						var r = ee(i);
						if (r) {
							var l = g.widgetMap.get(i);
							l && Et(r, l, Ze.Custom, g.scriptUrlParsed)
						}
					}
				}
			},
			execute: function(n, i) {
				var r = I(n);
				if (!r) {
					i === void 0 && m("Please provide 2 parameters to execute: container and parameters", 43521);
					var l = M(n, i);
					l || m("Failed to render widget", 43522), r = l
				}
				var s = g.widgetMap.get(r);
				if (s) {
					d(s, i);
					var h = ee(r);
					if (s.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(h, "), consider using reset() before execute()."));
						return
					}
					if (s.isExecuting = !0, s.response) {
						var x;
						s.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(h, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (x = s.cbSuccess) === null || x === void 0 || x.call(s, s.response, !1);
						return
					}
					s.isExpired && b("Call to execute on a expired-widget (".concat(h, "), consider using reset() before.")), s.isStale && (w(X.StaleExecute, h), s.isExecuting = !0), s.msgQueue.push(de.Execute), s.isExecuted = !0;
					var E = s.shadow.querySelector("#".concat(h));
					if (E || (s.isExecuting = !1, m("Widget ".concat(h, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && f(s, r, E), s.isInitialized && s.params.appearance === Z.Execute && Ut(E, s), s.isExecuting) {
						var A;
						(A = E.contentWindow) === null || A === void 0 || A.postMessage({
							event: "execute",
							source: H,
							widgetId: r
						}, "*")
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = C();
					if (r) {
						var l = g.widgetMap.get(r);
						return l != null && l.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), l == null ? void 0 : l.response
					}
					m("Could not find a widget", 43794)
				}
				var s = I(n);
				return s || m("Could not find widget for provided container", 43778), (i = g.widgetMap.get(s)) === null || i === void 0 ? void 0 : i.response
			},
			implicitRender: Ht,
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = C();
					if (r) {
						var l, s;
						return (s = (l = g.widgetMap.get(r)) === null || l === void 0 ? void 0 : l.isExpired) !== null && s !== void 0 ? s : !1
					}
					m("Could not find a widget", 43794)
				}
				var h = I(n);
				h || m("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = g.widgetMap.get(h)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			},
			ready: function(n) {
				if (g.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : W(n), '"'), 3841), g.isReady) {
					n();
					return
				}
				qt.push(n)
			},
			remove: q,
			render: M,
			reset: T
		})
	})();

	function ea(e) {
		var t = e.getAttribute("data-sitekey"),
			a = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (St(c) ? a.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var u = e.getAttribute("data-size");
		if (u && (kt(u) ? a.size = u : b('Unknown data-size value: "'.concat(u, '".'))), 0) var v;
		var y = e.getAttribute("data-action");
		typeof y == "string" && (a.action = y);
		var f = e.getAttribute("data-cdata");
		typeof f == "string" && (a.cData = f);
		var d = e.getAttribute("data-retry");
		d && (Rt(d) ? a.retry = d : b('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\".")));
		var T = e.getAttribute("data-retry-interval");
		if (T) {
			var w = Number.parseInt(T, 10);
			At(w) ? a["retry-interval"] = w : b('Invalid data-retry-interval value: "'.concat(T, ', expected an integer value > 0 and < 900000".'))
		}
		var q = e.getAttribute("data-expiry-interval");
		if (q) {
			var M = Number.parseInt(q, 10);
			It(M) ? a["expiry-interval"] = M : b('Invalid data-expiry-interval value: "'.concat(M, ', expected an integer value > 0 and < 360000".'))
		}
		var C = e.getAttribute("data-refresh-expired");
		C && (Nt(C) ? a["refresh-expired"] = C : b('Unknown data-refresh-expired value: "'.concat(C, ", expected either: 'never', 'auto' or 'manual'.")));
		var S = e.getAttribute("data-refresh-timeout");
		S && (Mt(S) ? a["refresh-timeout"] = S : b('Unknown data-refresh-timeout value: "'.concat(S, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-language");
		O && (Lt(O) ? a.language = O : b('Invalid data-language value: "'.concat(O, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function L(x) {
			var E = e.getAttribute(x);
			return E && window[E] ? window[E] : void 0
		}
		var I = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		I.forEach(function(x) {
			a[x] = L("data-".concat(x))
		});
		var k = e.getAttribute("data-feedback-enabled");
		k ? (et(k) || b('Invalid data-feedback-enabled value: "'.concat(k, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = k === "true") : a["feedback-enabled"] = !0;
		var _, n = (_ = e.getAttribute("data-response-field")) !== null && _ !== void 0 ? _ : "true";
		a["response-field"] = n === "true";
		var i = e.getAttribute("data-response-field-name");
		i && (a["response-field-name"] = i);
		var r = e.getAttribute("data-execution");
		r && (Pt(r) ? a.execution = r : b('Unknown data-execution value: "'.concat(r, ", expected either: 'render' or 'execute'.")));
		var l = e.getAttribute("data-appearance");
		l && (Ft(l) ? a.appearance = l : b('Unknown data-appearance value: "'.concat(l, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var s = e.getAttribute("data-offlabel-show-privacy");
		s && (et(s) || b('Invalid data-offlabel-show-privacy value: "'.concat(s, '", expected "true" or "false".')), a["offlabel-show-privacy"] = s === "true");
		var h = e.getAttribute("data-offlabel-show-help");
		return h && (et(h) || b('Invalid data-offlabel-show-help value: "'.concat(h, '", expected "true" or "false".')), a["offlabel-show-help"] = h === "true"), a
	}

	function ta() {
		var e = !0;
		Vt(g, e), g.msgHandler && window.removeEventListener("message", g.msgHandler), Ar(window.turnstile, g)
	}
	Ee = !1, R = br(), g.scriptWasLoadedAsync = (tt = R == null ? void 0 : R.loadedAsync) !== null && tt !== void 0 ? tt : !1, g.scriptUrl = (rt = R == null ? void 0 : R.src) !== null && rt !== void 0 ? rt : "undefined", g.scriptUrlParsed = R == null ? void 0 : R.url, R != null && R.params && (Te = R.params.get("compat"), (Te == null ? void 0 : Te.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = jt) : Te !== null && b('Unknown value for api.js?compat: "'.concat(Te, '", ignoring.')), R.params.forEach(function(e, t) {
		P(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || b('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Ee = R.params.get("_upgrade") === "true", J = R.params.get("onload"), J && !Ee && setTimeout(function() {
		typeof window[J] == "function" ? window[J]() : (b("Unable to find onload callback '".concat(J, "' immediately after loading, expected 'function', got '").concat(W(window[J]), "'.")), setTimeout(function() {
			typeof window[J] == "function" ? window[J]() : b("Unable to find onload callback '".concat(J, "' after 1 second, expected 'function', got '").concat(W(window[J]), "'."))
		}, 1e3))
	}, 0)), zt = "turnstile" in window, zt && !Ee ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (zt && Ee && (Ir(window.turnstile, g), Dt(g), (R == null || (at = R.params) === null || at === void 0 ? void 0 : at.get("render")) !== "explicit" && setTimeout(Ht, 0)), window.turnstile = jt, Ee || ((R == null || (nt = R.params) === null || nt === void 0 ? void 0 : nt.get("render")) !== "explicit" && qt.push(Ht), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Or, 0) : window.addEventListener("DOMContentLoaded", Or))), Nr = 10800 * 1e3, window.setTimeout(ta, Nr);
	var Ee, R, tt, rt, Te, J, zt, at, nt, Nr;
})();