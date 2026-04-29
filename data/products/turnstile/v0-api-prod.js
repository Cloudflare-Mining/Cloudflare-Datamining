"use strict";
(function() {
	function Jt(e, t, a, o, c, l, m) {
		try {
			var y = e[l](m),
				d = y.value
		} catch (f) {
			a(f);
			return
		}
		y.done ? t(d) : Promise.resolve(d).then(o, c)
	}

	function Kt(e) {
		return function() {
			var t = this,
				a = arguments;
			return new Promise(function(o, c) {
				var l = e.apply(t, a);

				function m(d) {
					Jt(l, o, c, m, y, "next", d)
				}

				function y(d) {
					Jt(l, o, c, m, y, "throw", d)
				}
				m(void 0)
			})
		}
	}

	function be(e, t, a) {
		return t in e ? Object.defineProperty(e, t, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[t] = a, e
	}

	function U(e, t) {
		return t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : U(e, t)
	}

	function qe(e) {
		for (var t = 1; t < arguments.length; t++) {
			var a = arguments[t] != null ? arguments[t] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {
				return Object.getOwnPropertyDescriptor(a, c).enumerable
			}))), o.forEach(function(c) {
				be(e, c, a[c])
			})
		}
		return e
	}

	function Vr(e, t) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			t && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function pt(e, t) {
		return t = t != null ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vr(Object(t)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
		}), e
	}

	function $t(e) {
		if (Array.isArray(e)) return e
	}

	function Zt(e, t) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				l = !1,
				m, y;
			try {
				for (a = a.call(e); !(c = (m = a.next()).done) && (o.push(m.value), !(t && o.length === t)); c = !0);
			} catch (d) {
				l = !0, y = d
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

	function er() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function vt(e, t) {
		(t == null || t > e.length) && (t = e.length);
		for (var a = 0, o = new Array(t); a < t; a++) o[a] = e[a];
		return o
	}

	function tr(e, t) {
		if (e) {
			if (typeof e == "string") return vt(e, t);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return vt(e, t)
		}
	}

	function De(e, t) {
		return $t(e) || Zt(e, t) || tr(e, t) || er()
	}

	function W(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ge(e, t) {
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

		function y(f) {
			return function(S) {
				return d([f, S])
			}
		}

		function d(f) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; m && (m = 0, f[0] && (a = 0)), a;) try {
				if (o = 1, c && (l = f[0] & 2 ? c.return : f[0] ? c.throw || ((l = c.return) && l.call(c), 0) : c.next) && !(l = l.call(c, f[1])).done) return l;
				switch (c = 0, l && (f = [f[0] & 2, l.value]), f[0]) {
					case 0:
					case 1:
						l = f;
						break;
					case 4:
						return a.label++, {
							value: f[1],
							done: !1
						};
					case 5:
						a.label++, c = f[1], f = [0];
						continue;
					case 7:
						f = a.ops.pop(), a.trys.pop();
						continue;
					default:
						if (l = a.trys, !(l = l.length > 0 && l[l.length - 1]) && (f[0] === 6 || f[0] === 2)) {
							a = 0;
							continue
						}
						if (f[0] === 3 && (!l || f[1] > l[0] && f[1] < l[3])) {
							a.label = f[1];
							break
						}
						if (f[0] === 6 && a.label < l[1]) {
							a.label = l[1], l = f;
							break
						}
						if (l && a.label < l[2]) {
							a.label = l[2], a.ops.push(f);
							break
						}
						l[2] && a.ops.pop(), a.trys.pop();
						continue
				}
				f = t.call(e, a)
			} catch (S) {
				f = [6, S], c = 0
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
	var rr = 300,
		ar = 10,
		nr = 200500,
		ir = 300020,
		Xe = 300030,
		Ye = 300031;

	function mt(e) {
		var t = new URLSearchParams;
		if (e.params.botnet && t.set("botnet", "true"), e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && t.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearanceLevel !== "default" && t.set("clearance_level", e.params._debugSitekeyOverrides.clearanceLevel), e.params._debugSitekeyOverrides.offlabelShowPrivacy && e.params._debugSitekeyOverrides.offlabelShowPrivacy !== "default" && t.set("offlabel_show_privacy", e.params._debugSitekeyOverrides.offlabelShowPrivacy), e.params._debugSitekeyOverrides.offlabelShowHelp && e.params._debugSitekeyOverrides.offlabelShowHelp !== "default" && t.set("offlabel_show_help", e.params._debugSitekeyOverrides.offlabelShowHelp)), e.params._debugForceLoopFeedback && t.set("force_loop_feedback", "true"), e.params["offlabel-show-privacy"] !== void 0 && t.set("offlabel_show_privacy", String(e.params["offlabel-show-privacy"])), e.params["offlabel-show-help"] !== void 0 && t.set("offlabel_show_help", String(e.params["offlabel-show-help"])), window.__cfDebugTurnstileOutcome && t.set("__cfDebugTurnstileOutcome", String(window.__cfDebugTurnstileOutcome)), !(t.size === 0 || t.toString() === "")) return t.toString()
	}
	var Qe = "cf-chl-widget-",
		j = "cloudflare-challenge",
		or = ".cf-turnstile",
		cr = ".cf-challenge",
		lr = ".g-recaptcha",
		yt = "cf_challenge_response",
		gt = "cf-turnstile-response",
		ht = "g-recaptcha-response",
		ur = 8e3,
		_t = "private-token",
		sr = 3,
		fr = 500,
		dr = 500,
		$ = "",
		bt = "_cftscs_",
		pr = 512;
	var G;
	(function(e) {
		e.Managed = "managed", e.NonInteractive = "non-interactive", e.Invisible = "invisible"
	})(G || (G = {}));
	var F;
	(function(e) {
		e.Normal = "normal", e.Compact = "compact", e.Invisible = "invisible", e.Flexible = "flexible"
	})(F || (F = {}));
	var xe;
	(function(e) {
		e.Auto = "auto", e.Light = "light", e.Dark = "dark"
	})(xe || (xe = {}));
	var we;
	(function(e) {
		e.Verifying = "verifying", e.VerifyingHavingTroubles = "verifying-having-troubles", e.VerifyingOverrun = "verifying-overrun", e.FailureWoHavingTroubles = "failure-wo-having-troubles", e.FailureHavingTroubles = "failure-having-troubles", e.FailureFeedback = "failure-feedback", e.FailureFeedbackCode = "failure-feedback-code", e.ExpiredNeverRefresh = "expired-never-refresh", e.ExpiredManualRefresh = "expired-manual-refresh", e.TimeoutNeverRefresh = "timeout-never-refresh", e.TimeoutManualRefresh = "timeout-manual-refresh", e.InteractivityRequired = "interactivity-required", e.UnsupportedBrowser = "unsupported-browser", e.TimeCheckCachedWarning = "time-check-cached-warning", e.InvalidDomain = "invalid-domain"
	})(we || (we = {}));
	var Ee;
	(function(e) {
		e.Never = "never", e.Auto = "auto"
	})(Ee || (Ee = {}));
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
	var Te;
	(function(e) {
		e.Render = "render", e.Execute = "execute"
	})(Te || (Te = {}));
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
	var Ur = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Wr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lv-lv", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"],
		vr = ["https://challenges.cloudflare.com", "https://challenges-staging.cloudflare.com", "https://challenges.fed.cloudflare.com"];

	function xt(e, t, a) {
		var o = "https://challenges.cloudflare.com",
			c, l = (c = a == null ? void 0 : a.origin) !== null && c !== void 0 ? c : o;
		if (t) {
			var m;
			return (m = e["base-url"]) !== null && m !== void 0 ? m : l
		}
		return l
	}

	function wt(e, t, a, o, c, l, m, y, d) {
		var f = xt(a, c, y),
			S = l ? "h/".concat(l, "/") : "",
			w = d ? "&".concat(d) : "",
			D = a["feedback-enabled"] === !1 ? "fbD" : "fbE",
			M = a.chlPageOfflabel ? "&offlabel=true" : "";
		return "".concat(f, "/cdn-cgi/challenge-platform/").concat(S, "turnstile/f/ov2/av0/rch").concat(o, "/").concat(e, "/").concat(t, "/").concat(a.theme, "/").concat(D, "/").concat(m, "/").concat(a.size, "?lang=").concat(a.language).concat(M).concat(w)
	}
	var Et = function(e) {
			var t, a, o = window.innerWidth < 400,
				c = e.state !== we.FailureFeedbackCode && (e.state === we.FailureFeedback || e.state === we.FailureHavingTroubles || !e.errorCode),
				l, m = P(Ur, (l = (t = e.displayLanguage) === null || t === void 0 ? void 0 : t.toLowerCase()) !== null && l !== void 0 ? l : "nonexistent"),
				y, d = P(Wr, (y = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && y !== void 0 ? y : "nonexistent");
			return o ? Br({
				isModeratelyVerbose: d,
				isSmallerFeedback: c,
				isVerboseLanguage: m
			}) : c && m ? "680px" : c && d ? "670px" : c ? "650px" : m ? "690px" : "680px"
		},
		Br = function(e) {
			var t = e.isVerboseLanguage,
				a = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return a && t ? "660px" : a && o ? "620px" : a ? "600px" : t ? "770px" : o ? "740px" : "730px"
		};

	function Je(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function mr(e, t) {
		if (!U(e, t)) throw new TypeError("Cannot call a class as a function")
	}

	function ae(e, t) {
		return ae = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, ae(e, t)
	}

	function yr(e, t) {
		if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), t && ae(e, t)
	}

	function Ke() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Ve(e, t, a) {
		return Ke() ? Ve = Reflect.construct : Ve = function(c, l, m) {
			var y = [null];
			y.push.apply(y, l);
			var d = Function.bind.apply(c, y),
				f = new d;
			return m && ae(f, m.prototype), f
		}, Ve.apply(null, arguments)
	}

	function pe(e) {
		return pe = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, pe(e)
	}

	function gr(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function $e(e) {
		var t = typeof Map == "function" ? new Map : void 0;
		return $e = function(o) {
			if (o === null || !gr(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof t != "undefined") {
				if (t.has(o)) return t.get(o);
				t.set(o, c)
			}

			function c() {
				return Ve(o, arguments, pe(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ae(c, o)
		}, $e(e)
	}

	function hr(e, t) {
		return t && (W(t) === "object" || typeof t == "function") ? t : Je(e)
	}

	function _r(e) {
		var t = Ke();
		return function() {
			var o = pe(e),
				c;
			if (t) {
				var l = pe(this).constructor;
				c = Reflect.construct(o, arguments, l)
			} else c = o.apply(this, arguments);
			return hr(this, c)
		}
	}
	var br = (function(e) {
		"use strict";
		yr(a, e);
		var t = _r(a);

		function a(o, c) {
			mr(this, a);
			var l;
			return l = t.call(this, o), be(Je(l), "code", void 0), l.name = "TurnstileError", l.code = c, l
		}
		return a
	})($e(Error));
	var zr = /^https:\/\/challenges(?:\.fed)?\.cloudflare\.com\/turnstile\/v0(\/.*)?\/api\.js/;

	function v(e, t) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new br(a, t)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function Ze(e) {
		return e.startsWith(Qe) ? e.slice(Qe.length) : null
	}

	function ee(e) {
		return "".concat(Qe).concat(e)
	}

	function Ue() {
		var e = zr,
			t = document.currentScript;
		if (U(t, HTMLScriptElement) && e.test(t.src)) return t;
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (U(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function xr() {
		var e = Ue();
		e || v("Could not find Turnstile valid script tag, some features may not be available", 43777);
		var t = e.src,
			a;
		try {
			a = new URL(t)
		} catch (l) {
			v("Could not parse Turnstile script tag URL", 43777)
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

	function q() {
		return Date.now()
	}
	var Tt = function(e, t, a, o) {
			var c = xt(t.params, !1, o),
				l = "h/".concat("b", "/"),
				m, y, d = "".concat(c, "/cdn-cgi/challenge-platform/").concat(l, "feedback-reports/").concat(Ze(e), "/").concat(t.displayLanguage, "/").concat((y = t.params.theme) !== null && y !== void 0 ? y : t.theme, "/").concat(a);
			if (window.top !== window.self) {
				window.open(d, "_blank", "noopener,noreferrer");
				return
			}
			t.wrapper.parentNode || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var f = document.createElement("div");
			f.style.position = "fixed", f.style.zIndex = "2147483646", f.style.width = "100vw", f.style.height = "100vh", f.style.top = "0", f.style.left = "0", f.style.transformOrigin = "center center", f.style.overflowX = "hidden", f.style.overflowY = "auto", f.style.background = "rgba(0,0,0,0.4)";
			var S = document.createElement("div");
			S.className = "cf-wrapper-turnstile-feedback", S.style.display = "table-cell", S.style.verticalAlign = "middle", S.style.width = "100vw", S.style.height = "100vh";
			var w = document.createElement("div");
			w.className = "cf-turnstile-feedback", w.id = "cf-fr-id", w.style.width = "100vw", w.style.maxWidth = "500px", w.style.height = Et(t), w.style.position = "relative", w.style.zIndex = "2147483647", w.style.backgroundColor = "#ffffff", w.style.borderRadius = "5px", w.style.left = "0px", w.style.top = "0px", w.style.overflow = "hidden", w.style.margin = "0px auto";
			var D = function() {
					w.style.height = Et(t)
				},
				M = function() {
					var k;
					window.removeEventListener("resize", D), (k = f.parentNode) === null || k === void 0 || k.removeChild(f)
				},
				I = document.createElement("iframe");
			I.id = "".concat(e, "-fr"), I.setAttribute("src", d), I.setAttribute("allow", "cross-origin-isolated; fullscreen"), I.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), I.setAttribute("scrolling", "yes"), I.style.borderWidth = "0px", I.style.width = "100%", I.style.height = "100%", I.style.overflow = "auto";
			var E = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			E.setAttribute("tabindex", "0"), E.setAttribute("role", "img"), E.setAttribute("aria-label", "Close button icon"), E.style.position = "absolute", E.style.width = "26px", E.style.height = "26px", E.style.zIndex = "2147483647", E.style.cursor = "pointer", t.displayRtl ? E.style.left = "24px" : E.style.right = "24px", E.style.top = "24px", E.setAttribute("width", "20"), E.setAttribute("height", "20"), E.addEventListener("click", function(k) {
				k.stopPropagation(), M()
			}), E.addEventListener("keydown", function(k) {
				(k.key === "Enter" || k.key === " ") && (k.stopPropagation(), M())
			});
			var C = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			C.setAttribute("ry", "12"), C.setAttribute("rx", "12"), C.setAttribute("cy", "12"), C.setAttribute("cx", "12"), C.setAttribute("fill", "none"), C.setAttribute("stroke-width", "0"), E.appendChild(C);
			var L = document.createElementNS("http://www.w3.org/2000/svg", "line");
			L.setAttribute("stroke-width", "1"), L.setAttribute("fill", "none"), L.setAttribute("x1", "6"), L.setAttribute("x2", "18"), L.setAttribute("y1", "18"), L.setAttribute("y2", "5");
			var O = document.createElementNS("http://www.w3.org/2000/svg", "line");
			O.setAttribute("stroke-width", "1"), O.setAttribute("fill", "none"), O.setAttribute("x1", "6"), O.setAttribute("x2", "18"), O.setAttribute("y1", "5"), O.setAttribute("y2", "18"), t.theme === xe.Light ? (L.setAttribute("stroke", "#0A0A0A"), O.setAttribute("stroke", "#0A0A0A")) : (L.setAttribute("stroke", "#F2F2F2"), O.setAttribute("stroke", "#F2F2F2")), E.appendChild(L), E.appendChild(O), w.appendChild(I), w.appendChild(E), S.appendChild(w), f.appendChild(S), f.addEventListener("click", M), t.wrapper.parentNode.appendChild(f), window.addEventListener("resize", D)
		},
		wr = function(e) {
			var t, a, o, c;
			(c = document.getElementById(e)) === null || c === void 0 || (o = c.parentElement) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (t = a.parentElement) === null || t === void 0 || t.remove()
		};
	var et;
	(function(e) {
		e.Failure = "failure", e.Verifying = "verifying", e.Overruning = "overrunning", e.Custom = "custom", e.TimeMismatch = "timemismatch", e.UnsupportedBrowser = "unsupportedbrowser", e.InvalidDomain = "invaliddomain"
	})(et || (et = {}));
	var St = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > t ? e.slice(0, t) : e
	};

	function Er(e) {
		if (!e) return "-";
		var t = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, l = a.previousElementSibling; l;) l.tagName === a.tagName && c++, l = l.previousElementSibling;
			var m = St(a.tagName.toLowerCase()),
				y = "".concat(m, "[").concat(c, "]");
			return t(a.parentNode, "/".concat(y).concat(o))
		};
		return t(e, "")
	}

	function Tr(e) {
		if (!e) return "";
		var t = e.getBoundingClientRect();
		return "".concat(t.top, "|").concat(t.right)
	}
	var Hr = {
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

	function Sr(e) {
		if (!e) return "";
		var t = e.closest("form");
		if (!t) return "nf";
		var a = Array.from(t.querySelectorAll("input, select, textarea, button")),
			o = a.slice(0, 20).map(function(l) {
				return Hr[l.type] || "-"
			}).join(""),
			c = ["m:".concat(t.getAttribute("method") || ""), "f:".concat(a.length), o].join("|");
		return c
	}

	function Ar(e, t, a) {
		for (var o = "", c = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), l;
			(l = c.nextNode()) !== null && o.length < a;) {
			for (var m = 0, y = l; y !== null && y !== e;) m++, y = y.parentNode;
			if (!(m > t))
				if (l.nodeType === Node.ELEMENT_NODE) {
					var d = l;
					o += "".concat(St(d.tagName.toLowerCase()));
					var f = !0,
						S = !1,
						w = void 0;
					try {
						for (var D = Array.from(d.attributes)[Symbol.iterator](), M; !(f = (M = D.next()).done); f = !0) {
							var I = M.value;
							o += "_".concat(St(I.name, 2))
						}
					} catch (E) {
						S = !0, w = E
					} finally {
						try {
							!f && D.return != null && D.return()
						} finally {
							if (S) throw w
						}
					}
					o += ">"
				} else l.nodeType === Node.TEXT_NODE && (o += "-t")
		}
		return o.slice(0, a)
	}

	function Rr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : W(e)));
		for (var t = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			t = t * 33 ^ o
		}
		return t >>> 0
	}

	function Ir(e, t) {
		var a;
		t.upgradeAttempts++;
		var o = Ue();
		if (o != null && o.parentNode) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = t;
			var l = new URL(o.src),
				m = document.createElement("script");
			l.searchParams.set("_upgrade", "true"), l.searchParams.set("_cb", String(Date.now())), m.async = !0, c && (m.nonce = c), m.setAttribute("crossorigin", "anonymous"), m.src = l.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(m, o)
		}
	}

	function Or(e, t) {
		var a = e._pState;
		return a ? (t.isReady = a.isReady, t.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, t.lastWidgetIdx = a.lastWidgetIdx, t.scriptWasLoadedAsync = a.scriptWasLoadedAsync, t.upgradeAttempts = a.upgradeAttempts, t.upgradeCompletedCount = a.upgradeCompletedCount + 1, t.turnstileLoadInitTimeTsMs = q(), t.watchCatInterval = null, t.watchCatSeq = a.watchCatSeq, t.widgetMap = a.widgetMap, !0) : !1
	}

	function At(e) {
		return P(["auto", "dark", "light"], e)
	}

	function Rt(e) {
		return P(["auto", "never"], e)
	}

	function It(e) {
		return e > 0 && e < 9e5
	}

	function Ot(e) {
		return e > 0 && e < 36e4
	}
	var jr = /^[0-9A-Za-z_-]{3,100}$/;

	function Cr(e) {
		return jr.test(e)
	}
	var qr = /^[a-z0-9_-]{0,32}$/i;

	function Ct(e) {
		return e === void 0 ? !0 : typeof e == "string" && qr.test(e)
	}
	var Gr = /^[a-z0-9_\-=]{0,255}$/i;

	function kt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Gr.test(e)
	}

	function Mt(e) {
		return P([F.Normal, F.Compact, F.Invisible, F.Flexible], e)
	}

	function Nt(e) {
		return P(["auto", "manual", "never"], e)
	}

	function Lt(e) {
		return P(["auto", "manual", "never"], e)
	}
	var Xr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Ft(e) {
		return e === "auto" || Xr.test(e)
	}

	function Pt(e) {
		return P(["always", "execute", "interaction-only"], e)
	}

	function tt(e) {
		return P(["true", "false"], e)
	}

	function Dt(e) {
		return P(["render", "execute"], e)
	}
	var Yr = 900,
		Qr = 45,
		Jr = 50;

	function Kr(e) {
		e.watchCatSeq++;
		var t = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), l; !(t = (l = c.next()).done); t = !0) {
				var m = De(l.value, 2),
					y = m[0],
					d = m[1],
					f;
				d.watchcat.seq = e.watchCatSeq, d.watchcat.lastAckedSeq === 0 && (d.watchcat.lastAckedSeq = e.watchCatSeq);
				var S = ee(y);
				if (!S || !d.shadow) {
					d.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(S, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				var w = d.shadow.querySelector("#".concat(S));
				if (!w) {
					d.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(S, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(d.isComplete || d.isFailed || d.isResetting)) {
					var D = d.watchcat.seq - 1 - Qr,
						M = d.watchcat.lastAckedSeq < D,
						I = d.watchcat.seq - 1 - Jr,
						E = d.isOverrunning && d.watchcat.overrunBeginSeq !== 0 && d.watchcat.overrunBeginSeq < I;
					if ((d.isExecuting || !d.isInitialized || d.isInitialized && !d.isStale && !d.isExecuted) && d.watchcat.lastAckedSeq !== 0 && M || E) {
						var C;
						d.watchcat.lastAckedSeq = 0, d.watchcat.seq = 0, d.isExecuting = !1;
						var L = function(n, i) {
							console.log("Turnstile Widget seem to have ".concat(n, ": "), i)
						};
						L(M ? "hung" : "crashed", y);
						var O = M ? Xe : Ye,
							k;
						if ((C = e.msgHandler) === null || C === void 0 || C.call(e, {
								data: {
									code: O,
									event: "fail",
									rcV: (k = d.nextRcV) !== null && k !== void 0 ? k : $,
									source: j,
									widgetId: y
								}
							}), 0) var _;
						continue
					}(f = w.contentWindow) === null || f === void 0 || f.postMessage({
						event: "meow",
						seq: e.watchCatSeq,
						source: j,
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

	function Vt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Kr(e)
		}, Yr))
	}

	function Ut(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || t) && (clearInterval(e.watchCatInterval), e.watchCatInterval = null)
	}
	var ve = window,
		g = {
			apiVersion: 1,
			isReady: !1,
			isRecaptchaCompatibilityMode: !1,
			lastWidgetIdx: 0,
			scriptUrl: "undefined",
			scriptUrlParsed: void 0,
			scriptWasLoadedAsync: !1,
			turnstileLoadInitTimeTsMs: q(),
			upgradeAttempts: 0,
			upgradeCompletedCount: 0,
			watchCatInterval: null,
			watchCatSeq: 0,
			widgetMap: new Map
		};

	function Wt(e) {
		Lr(e, "")
	}

	function jt() {
		var e = [or, cr];
		g.isRecaptchaCompatibilityMode && e.push(lr), document.querySelectorAll(e.join(", ")).forEach(function(t) {
			return qt.render(t)
		})
	}
	var Gt = [];

	function kr() {
		g.isReady = !0;
		var e = !0,
			t = !1,
			a = void 0;
		try {
			for (var o = Gt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
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

	function $r(e) {
		var t = g.widgetMap.get(e);
		if (!(t === void 0 || t.hasResponseParamEl)) {
			t.hasResponseParamEl = !0;
			var a, o = (a = t.params["response-field"]) !== null && a !== void 0 ? a : !0;
			if (o) {
				var c = document.createElement("input");
				c.type = "hidden";
				var l;
				c.name = (l = t.params["response-field-name"]) !== null && l !== void 0 ? l : gt, c.id = "".concat(e, "_response"), t.wrapper.appendChild(c);
				var m;
				if (typeof t.params["response-field-name"] != "string" && Fr((m = t.params.sitekey) !== null && m !== void 0 ? m : "")) {
					var y = document.createElement("input");
					y.type = "hidden", y.name = yt, y.id = "".concat(e, "_legacy_response"), t.wrapper.appendChild(y)
				}
			}
			if (g.isRecaptchaCompatibilityMode) {
				var d = document.createElement("input");
				d.type = "hidden", d.name = ht, d.id = "".concat(e, "_g_response"), t.wrapper.appendChild(d)
			}
		}
	}

	function Lr(e, t) {
		$r(e);
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && U(a, HTMLInputElement) && (a.value = t);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && U(o, HTMLInputElement) && (o.value = t), g.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && U(c, HTMLInputElement) && (c.value = t)
		}
	}

	function ot(e, t) {
		var a;
		return !!(!((a = t.kills) === null || a === void 0) && a.includes(e))
	}

	function Bt(e, t) {
		var a = t.params,
			o = a.size,
			c = o === void 0 ? "normal" : o,
			l = t.mode;
		switch (l) {
			case G.NonInteractive:
			case G.Managed:
				switch (e.style.opacity = "", e.style.position = "", e.style.left = "", e.style.top = "", e.style.visibility = "", e.style.pointerEvents = "", e.style.zIndex = "", c) {
					case F.Compact:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case F.Invisible:
						v('Invalid value for parameter "size", expected "'.concat(F.Compact, '", "').concat(F.Flexible, '", or "').concat(F.Normal, '", got "').concat(c, '"'), 2817);
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
				ot("floating-invisible", t) ? (e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden") : (e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"), e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(G.NonInteractive, '", "').concat(G.Managed, '" or "').concat(G.Invisible, '", got "').concat(l, '"'), 2818)
		}
	}

	function Mr(e) {
		e.style.width = "1px", e.style.height = "1px", e.style.opacity = "0.01", e.style.position = "fixed", e.style.left = "0", e.style.top = "0", e.style.visibility = "visible", e.style.pointerEvents = "none", e.style.zIndex = "-1"
	}

	function Zr(e, t) {
		var a = t.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function ea(e) {
		return e.origin ? P(vr, e.origin) : !0
	}

	function Fr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function zt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}

	function ta() {
		if (typeof window.PerformanceObserver == "function") try {
			var e = Ue();
			if (!e) return;
			var t = e.src,
				a = !0,
				o = !1,
				c = void 0;
			try {
				for (var l = performance.getEntriesByType("resource")[Symbol.iterator](), m; !(a = (m = l.next()).done); a = !0) {
					var y = m.value;
					if (U(y, PerformanceResourceTiming) && y.name.includes(t)) return y
				}
			} catch (d) {
				o = !0, c = d
			} finally {
				try {
					!a && l.return != null && l.return()
				} finally {
					if (o) throw c
				}
			}
		} catch (d) {}
	}
	var qt = (function() {
		var e = function(n, i, r, u) {
				return C.apply(this, arguments)
			},
			t = function(n, i, r) {
				if (n.params.retry === Ee.Auto || r) {
					n.isExecuted && (n.msgQueue.push(de.Execute), n.isExecuted = !0, n.isExecuting = !0);
					var u, s = r ? 0 : 1e3 * 2 + ((u = n.params["retry-interval"]) !== null && u !== void 0 ? u : 0);
					n.retryTimeout = window.setTimeout(function() {
						var h = r ? X.CrashedRetry : X.FailureRetry;
						w(h, i)
					}, s)
				}
			},
			a = function(n, i, r) {
				var u;
				n.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Lr(i, n.response), (u = n.cbSuccess) === null || u === void 0 || u.call(n, n.response, r)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, r = i.length, u = new Array(r), s = 0; s < r; s++) u[s] = i[s].name;
				return u
			},
			c = function() {
				for (var n = {}, i = [], r = document.getElementsByTagName("*"), u = 0; u < r.length && i.length < 50; u++) {
					var s = r[u].tagName.toLowerCase();
					s.indexOf("-") !== -1 && !n[s] && (n[s] = !0, i.push(s))
				}
				return i
			},
			l = function(n, i, r) {
				if (n.rcV = i, 0) var u
			},
			m = function() {
				var n = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = n.length,
					r = "";
				do {
					r = "";
					for (var u = 0; u < 5; u++) r += n.charAt(Math.floor(Math.random() * i))
				} while (g.widgetMap.has(r));
				return r
			},
			y = function(n) {
				var i = !0,
					r = !1,
					u = void 0;
				try {
					for (var s = g.widgetMap[Symbol.iterator](), h; !(i = (h = s.next()).done); i = !0) {
						var x = De(h.value, 2),
							T = x[0],
							A = x[1];
						if (A.wrapper.parentElement === n) return T
					}
				} catch (N) {
					r = !0, u = N
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (r) throw u
					}
				}
				return null
			},
			d = function(n, i, r) {
				for (; n.msgQueue.length > 0;) {
					var u, s = n.msgQueue.pop();
					(u = r.contentWindow) === null || u === void 0 || u.postMessage({
						event: s,
						source: j,
						widgetId: i
					}, "*")
				}
			},
			f = function(n, i) {
				if (i) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						u = [],
						s = !0,
						h = !1,
						x = void 0;
					try {
						for (var T = r[Symbol.iterator](), A; !(s = (A = T.next()).done); s = !0) {
							var N = A.value;
							i[N] && i[N] !== n.params[N] && u.push(N)
						}
					} catch (B) {
						h = !0, x = B
					} finally {
						try {
							!s && T.return != null && T.return()
						} finally {
							if (h) throw x
						}
					}
					u.length > 0 && v("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(u.join(",")), 3618), i.action && (Ct(i.action) || v('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (kt(i.cData) || v('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			S = function(n) {
				w(X.Api, n)
			},
			w = function(n, i) {
				var r = O(i);
				r || v("Nothing to reset found for provided container", 3329);
				var u = g.widgetMap.get(r);
				if (u) {
					var s;
					u.isResetting = !0, u.response = void 0, u.mode = void 0, u.msgQueue = [], u.isComplete = !1, u.isExecuting = !1, u.isExpired = !1, u.isFailed = !1, u.isInitialized = !1, u.isStale = !1, u.isOverrunning = !1, u.watchcat.overrunBeginSeq = 0, u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.params.execution === Te.Render && (u.msgQueue.push(de.Execute), u.isExecuted = !0, u.isExecuting = !0);
					var h = ee(r),
						x = u.shadow.querySelector("#".concat(h));
					(!h || !x) && v("Widget ".concat(r, " to reset was not found."), 3330), u.params.appearance === Z.InteractionOnly && Mr(x), u.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
					var T = x.cloneNode(),
						A;
					T.src = wt(r, u.params.sitekey, u.params, (A = u.rcV) !== null && A !== void 0 ? A : $, !1, "b", n, g.scriptUrlParsed, mt(u)), (s = x.parentNode) === null || s === void 0 || s.replaceChild(T, x), Wt(h), u.retryTimeout && window.clearTimeout(u.retryTimeout)
				} else v("Widget ".concat(r, " to reset was not found."), 3331)
			},
			D = function(n) {
				var i = O(n),
					r = i ? g.widgetMap.get(i) : void 0;
				if (!i || !r) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var u = ee(i),
					s = ["input#".concat(u, "_response"), "input#".concat(u, "_legacy_response"), "input#".concat(u, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(h) {
					return h.remove()
				}), r.shadow.querySelectorAll(s.join(", ")).forEach(function(h) {
					return h.remove()
				}), r.wrapper.remove(), r.retryTimeout && window.clearTimeout(r.retryTimeout), g.widgetMap.delete(i), Ut(g)
			},
			M = function(n, i) {
				var r, u, s = q(),
					h;
				if (typeof n == "string") {
					var x;
					try {
						x = document.querySelector(n)
					} catch (Qt) {
						v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
					}
					x || v('Unable to find a container for "'.concat(n, '"'), 3585), h = x
				} else U(n, HTMLElement) ? h = n : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var T = !0,
					A = !1,
					N = void 0;
				try {
					for (var B = g.widgetMap.values()[Symbol.iterator](), ne; !(T = (ne = B.next()).done); T = !0) {
						var me = ne.value;
						if (h.contains(me.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Qt) {
					A = !0, N = Qt
				} finally {
					try {
						!T && B.return != null && B.return()
					} finally {
						if (A) throw N
					}
				}
				var z = zt();
				if (!z) return v("Turnstile cannot determine its page location", 3607);
				if (z.startsWith("file:")) return v("Turnstile cannot run in a file:// url", 3608);
				var ye = ra(h);
				if (ye) {
					var p = Object.assign(ye, i),
						ie = p.action,
						Re = p.cData,
						Ie = p.chlPageData,
						Y = p.sitekey,
						oe;
					p.theme = (oe = p.theme) !== null && oe !== void 0 ? oe : xe.Auto;
					var ce;
					p.retry = (ce = p.retry) !== null && ce !== void 0 ? ce : Ee.Auto;
					var ge;
					p.execution = (ge = p.execution) !== null && ge !== void 0 ? ge : Te.Render;
					var le;
					p.appearance = (le = p.appearance) !== null && le !== void 0 ? le : Z.Always;
					var Oe;
					p["retry-interval"] = Number((Oe = p["retry-interval"]) !== null && Oe !== void 0 ? Oe : ur);
					var ue;
					p["expiry-interval"] = Number((ue = p["expiry-interval"]) !== null && ue !== void 0 ? ue : (rr - ar) * 1e3);
					var Ce;
					p.size = (Ce = p.size) !== null && Ce !== void 0 ? Ce : F.Normal;
					var We = p.callback,
						ke = p["expired-callback"],
						Me = p["timeout-callback"],
						Be = p["after-interactive-callback"],
						Ne = p["before-interactive-callback"],
						K = p["error-callback"],
						Le = p["unsupported-callback"];
					typeof Y != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof Y == "undefined" ? "undefined" : W(Y), '"'), 3588), Cr(Y) || v('Invalid input for parameter "sitekey", got "'.concat(Y, '"'), 3589), Mt(p.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(W(p.size)), 3590), At(p.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(W(p.theme)), 3591), Rt(p.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(W(p.retry)), 3592), p.language || (p.language = "auto"), Ft(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), Pt(p.appearance) || v('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), Dt(p.execution) || v('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), It(p["retry-interval"]) || v('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), Ot(p["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var Fe, se = (Fe = p["refresh-expired"]) !== null && Fe !== void 0 ? Fe : re.Auto;
					Nt(se) ? p["refresh-expired"] = se : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(se, '" ').concat(typeof se == "undefined" ? "undefined" : W(se)), 3603);
					var Pe, H = (Pe = p["refresh-timeout"]) !== null && Pe !== void 0 ? Pe : fe.Auto;
					Lt(H) ? p["refresh-timeout"] = H : v('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(H, '" ').concat(typeof H == "undefined" ? "undefined" : W(H)), 3603);
					var V = document.createElement("iframe"),
						te = document.createElement("div"),
						he = te.attachShadow({
							mode: "closed"
						});
					Ct(ie) || v('Invalid input for optional parameter "action", got "'.concat(ie, '"'), 3604), kt(Re) || v('Invalid input for optional parameter "cData", got "'.concat(Re, '"'), 3605);
					var Q = m(),
						_e = ee(Q);
					if (!(!Q || !_e)) {
						var Xt = [],
							ct = p.execution === Te.Render;
						ct && Xt.push(de.Execute), g.lastWidgetIdx++;
						var Pr = {};
						g.widgetMap.set(Q, pt(qe({
							action: ie,
							cbAfterInteractive: Be,
							cbBeforeInteractive: Ne,
							cbError: K,
							cbExpired: ke,
							cbSuccess: We,
							cbTimeout: Me,
							cbUnsupported: Le,
							cData: Re,
							chlPageData: Ie,
							hasResponseParamEl: !1,
							idx: g.lastWidgetIdx,
							isComplete: !1,
							isExecuted: ct,
							isExecuting: ct,
							isExpired: !1,
							isFailed: !1,
							isInitialized: !1,
							isResetting: !1,
							isStale: !1,
							msgQueue: Xt,
							params: p,
							rcV: $,
							watchcat: {
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0,
								seq: 0
							}
						}, Pr), {
							isOverrunning: !1,
							shadow: he,
							widgetInitStartTimeTsMs: 0,
							widgetParamsStartTimeTsMs: 0,
							widgetRenderEndTimeTsMs: 0,
							widgetRenderStartTimeTsMs: s,
							wrapper: te
						})), Vt(g);
						var lt = g.widgetMap.get(Q);
						lt || v("Turnstile Initialization Error ", 3606), V.style.display = "none", V.style.border = "none", V.style.overflow = "hidden", V.setAttribute("src", wt(Q, Y, p, $, !1, "b", X.New, g.scriptUrlParsed, mt(lt))), V.onerror = function() {
							if (K) {
								K == null || K(String(nr));
								return
							}
							v("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Yt = ["cross-origin-isolated", "fullscreen", "autoplay", "keyboard-map", "gamepad"],
							ut;
						P((ut = (u = document.featurePolicy) === null || u === void 0 || (r = u.features) === null || r === void 0 ? void 0 : r.call(u)) !== null && ut !== void 0 ? ut : [], _t) && Yt.push(_t), V.setAttribute("allow", Yt.join("; ")), V.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), V.id = _e;
						var st;
						V.tabIndex = (st = p.tabindex) !== null && st !== void 0 ? st : 0, V.title = "Widget containing a Cloudflare security challenge", he.appendChild(V);
						var ft, Dr = (ft = p["response-field"]) !== null && ft !== void 0 ? ft : !0;
						if (Dr) {
							var ze = document.createElement("input");
							ze.type = "hidden";
							var dt;
							if (ze.name = (dt = p["response-field-name"]) !== null && dt !== void 0 ? dt : gt, ze.id = "".concat(_e, "_response"), te.appendChild(ze), typeof p["response-field-name"] != "string" && Fr(Y)) {
								var He = document.createElement("input");
								He.type = "hidden", He.name = yt, He.id = "".concat(_e, "_legacy_response"), te.appendChild(He)
							}
						}
						if (g.isRecaptchaCompatibilityMode) {
							var je = document.createElement("input");
							je.type = "hidden", je.name = ht, je.id = "".concat(_e, "_g_response"), te.appendChild(je)
						}
						return h.appendChild(te), lt.widgetRenderEndTimeTsMs = q(), _e
					}
				}
			},
			I = function() {
				var n, i = -1,
					r = !0,
					u = !1,
					s = void 0;
				try {
					for (var h = g.widgetMap[Symbol.iterator](), x; !(r = (x = h.next()).done); r = !0) {
						var T = De(x.value, 2),
							A = T[0],
							N = T[1];
						i < N.idx && (n = A, i = N.idx)
					}
				} catch (B) {
					u = !0, s = B
				} finally {
					try {
						!r && h.return != null && h.return()
					} finally {
						if (u) throw s
					}
				}
				return i === -1 && v("Could not find widget", 43778), n
			},
			E = ta();

		function C() {
			return C = Kt(function(_, n, i, r) {
				var u, s, h, x, T, A, N, B, ne, me;
				return Ge(this, function(z) {
					switch (z.label) {
						case 0:
							if (s = _.params.sitekey, h = zt(), !h) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(_, n, !1), [2];
							x = "h/".concat("b", "/"), T = new URL(h), A = "https", N = "", B = "".concat(A, "://").concat(T.host, "/cdn-cgi/challenge-platform/").concat(x, "rc/").concat(r).concat(N), z.label = 1;
						case 1:
							return z.trys.push([1, 3, , 4]), [4, fetch(B, {
								body: JSON.stringify({
									secondaryToken: i,
									sitekey: s
								}),
								headers: {
									"Content-Type": "application/json"
								},
								method: "POST",
								redirect: "manual"
							})];
						case 2:
							return ne = z.sent(), ne.status === 200 ? a(_, n, !0) : (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(_, n, !1)), [3, 4];
						case 3:
							return me = z.sent(), b("Error contacting Turnstile, aborting clearance redemption."), a(_, n, !1), [3, 4];
						case 4:
							return [2]
					}
				})
			}), C.apply(this, arguments)
		}
		var L = function(_) {
			var n = _.data;
			if (n.source === j) {
				if (!ea(_)) {
					b("Ignored message from wrong origin: ".concat(_.origin, "."));
					return
				}
				if (!(!n.widgetId || !g.widgetMap.has(n.widgetId))) {
					var i = ee(n.widgetId),
						r = g.widgetMap.get(n.widgetId);
					if (!(!i || !r)) switch (n.event) {
						case "init": {
							var u;
							r.widgetInitStartTimeTsMs = q(), r.kills = n.kills;
							var s = r.shadow.getElementById(i);
							s || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), r.mode = n.mode, r.nextRcV = n.nextRcV, r.mode === G.Invisible && r.params["refresh-expired"] === re.Manual && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(re.Auto, "' or '").concat(re.Never, ".'")), r.mode !== G.Managed && r.params["refresh-timeout"] !== fe.Auto && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), r.params.appearance === Z.Always || r.isExecuting && r.params.appearance === Z.Execute ? Bt(s, r) : Mr(s), s.style.display = "";
							var h = r.shadow.querySelector("#".concat(i));
							h || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (u = h.contentWindow) === null || u === void 0 || u.postMessage({
								event: "init",
								source: j,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "translationInit": {
							var x = r.shadow.getElementById(i);
							x || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var T = new Map;
							r.displayLanguage = n.displayLanguage, r.displayRtl = n.displayRtl, Object.keys(n.translationData).forEach(function(Q) {
								T.set(Q, n.translationData[Q])
							}), Zr(x, T);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(r.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), r.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var A = r.shadow.getElementById(i);
							if (r.isExecuting = !1, A || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "unsupported_browser") {
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
							if (l(r, $, n.widgetId), r.response = n.token, n.scs && !ot("scs", r) && (r.scs = n.scs, r.params["session-continuity-persist"] && !ot("scs_persist", r))) {
								var B = r.params.sitekey;
								if (B) {
									var ne = "".concat(bt).concat(B);
									try {
										localStorage.setItem(ne, n.scs)
									} catch (Q) {}
								}
							}
							n.sToken ? e(r, i, n.sToken, n.chlId) : a(r, i, !1);
							break
						}
						case "fail": {
							n.rcV && l(r, n.rcV, n.widgetId), n.cfChlOut && (r.cfChlOut = n.cfChlOut), n.cfChlOutS && (r.cfChlOutS = n.cfChlOutS), n.code && (r.errorCode = n.code), r.isExecuting = !1, r.isFailed = !0, r.isInitialized = !0, n.frMd && (r.frMd = n.frMd), Wt(i);
							var me = r.cbError,
								z = n.code === Xe || n.code === Ye;
							if (z) {
								var ye, p = r.shadow.querySelector("#".concat(i));
								p == null || (ye = p.contentWindow) === null || ye === void 0 || ye.postMessage({
									event: "forceFail",
									source: j,
									widgetId: n.widgetId
								}, "*")
							}
							if (me) {
								var ie;
								me(String((ie = n.code) !== null && ie !== void 0 ? ie : ir)) ? r.params.retry === Ee.Auto && !r.isResetting && t(r, i, z) : (n.code && b("Error: ".concat(n.code, ".")), t(r, i, z))
							} else n.code ? (t(r, i, z), v("Error: ".concat(n.code), 3076)) : t(r, i, !1);
							break
						}
						case "feedbackInit": {
							var Re = r.wrapper.querySelector("#".concat(i, "-fr"));
							if (Re) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							Tt(i, r, n.feedbackOrigin, g.scriptUrlParsed);
							break
						}
						case "requestFeedbackData": {
							var Ie, Y = r.shadow.querySelector("#".concat(i));
							Y || v("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (Ie = Y.contentWindow) === null || Ie === void 0 || Ie.postMessage({
								event: "requestTurnstileResults",
								source: j,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "turnstileResults": {
							var oe, ce, ge = (oe = r.wrapper.parentNode) === null || oe === void 0 ? void 0 : oe.querySelector("#".concat(i, "-fr"));
							ge || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (ce = ge.contentWindow) === null || ce === void 0 || ce.postMessage({
								cfChlOut: r.cfChlOut,
								cfChlOutS: r.cfChlOutS,
								errorCode: r.errorCode,
								event: "feedbackData",
								frMd: r.frMd || n.frMd,
								mode: n.mode,
								rayId: n.rayId,
								rcV: n.rcV,
								sitekey: n.sitekey,
								source: j,
								widgetId: n.widgetId
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var le, Oe = (le = r.wrapper.parentNode) === null || le === void 0 ? void 0 : le.querySelector("#".concat(i, "-fr"));
							Oe || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), wr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ue, Ce = n.token;
							r.isExpired = !0, (ue = r.cbExpired) === null || ue === void 0 || ue.call(r, Ce), r.params["refresh-expired"] === re.Auto && !r.isResetting && w(X.AutoExpire, i);
							break
						}
						case "interactiveTimeout": {
							l(r, $, n.widgetId), Wt(i);
							var We = r.cbTimeout;
							if (We ? We() : r.params["refresh-timeout"] === fe.Never && !r.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), r.params["refresh-timeout"] === fe.Auto && !r.isResetting) {
								var ke = r.cbAfterInteractive;
								ke == null || ke(), w(X.AutoTimeout, i)
							}
							break
						}
						case "refreshRequest": {
							l(r, $, n.widgetId), w(X.ManualRefresh, i);
							break
						}
						case "reloadRequest": {
							l(r, n.nextRcV, n.widgetId), w(n.trigger, i);
							break
						}
						case "interactiveBegin": {
							var Me, Be = r.shadow.getElementById(i);
							Be || v("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (Me = r.cbBeforeInteractive) === null || Me === void 0 || Me.call(r), r.params.appearance === Z.InteractionOnly && Bt(Be, r);
							break
						}
						case "interactiveEnd": {
							var Ne;
							(Ne = r.cbAfterInteractive) === null || Ne === void 0 || Ne.call(r);
							break
						}
						case "widgetStale": {
							r.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var K;
							r.widgetParamsStartTimeTsMs = q();
							var Le = r.shadow.querySelector("#".concat(i));
							Le || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), r.isResetting = !1;
							var Fe = {},
								se = q(),
								Pe = {
									"d.cT": c(),
									"ht.atrs": o(document.body.parentNode),
									"pg.ref": document.referrer,
									pi: {
										ffp: Sr(r.wrapper),
										ii: window.self !== window.top,
										lH: window.location.href,
										mL: document.getElementsByTagName("meta").length,
										pfp: Ar(document, sr, fr),
										sL: document.scripts.length,
										sR: r.wrapper.shadowRoot === null,
										ssL: document.styleSheets.length,
										t: "".concat(document.title.length, "|").concat(Rr(document.title)),
										tL: document.getElementsByTagName("*").length,
										wp: Tr(r.wrapper),
										xp: Er(r.wrapper).slice(0, dr)
									},
									"w.iW": window.innerWidth
								},
								H = r.scs;
							if (!H && r.params["session-continuity-persist"] && !ot("scs_persist", r)) {
								var V = r.params.sitekey;
								if (V) {
									var te = "".concat(bt).concat(V);
									try {
										var he;
										H = (he = localStorage.getItem(te)) !== null && he !== void 0 ? he : void 0
									} catch (Q) {}
								}
							}
							H && H.length > pr && (H = void 0), (K = Le.contentWindow) === null || K === void 0 || K.postMessage(qe({
								action: r.action,
								apiJsResourceTiming: E ? JSON.parse(JSON.stringify(E)) : void 0,
								appearance: r.params.appearance,
								au: g.scriptUrl,
								cData: r.cData,
								ch: "0b8fb825cb67",
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
								scs: H,
								source: j,
								timeExtraParamsMs: q() - r.widgetRenderStartTimeTsMs,
								timeInitMs: r.widgetInitStartTimeTsMs - r.widgetRenderEndTimeTsMs,
								timeLoadInitMs: q() - g.turnstileLoadInitTimeTsMs,
								timeParamsMs: r.widgetParamsStartTimeTsMs - r.widgetInitStartTimeTsMs,
								timeRenderMs: r.widgetRenderEndTimeTsMs - r.widgetRenderStartTimeTsMs,
								timeTiefMs: q() - se,
								upgradeAttempts: g.upgradeAttempts,
								upgradeCompletedCount: g.upgradeCompletedCount,
								url: zt(),
								widgetId: n.widgetId,
								wPr: Pe
							}, Fe), "*"), d(r, n.widgetId, Le), r.isInitialized = !0;
							break
						}
						default:
							break
					}
				}
			}
		};
		g.msgHandler = L, window.addEventListener("message", L);

		function O(_) {
			if (typeof _ == "string") {
				var n = Ze(_);
				if (n && g.widgetMap.has(n)) return n;
				if (g.widgetMap.has(_)) return _;
				try {
					var i = document.querySelector(_);
					return i ? O(i) : null
				} catch (u) {
					return null
				}
			}
			if (U(_, Element)) return y(_);
			if (_ || g.widgetMap.size === 0) return null;
			var r;
			return (r = g.widgetMap.keys().next().value) !== null && r !== void 0 ? r : null
		}
		var k = {};
		return pt(qe({}, k), {
			_private: {
				showFeedback: function(n) {
					var i = O(n);
					if (i) {
						var r = ee(i);
						if (r) {
							var u = g.widgetMap.get(i);
							u && Tt(r, u, et.Custom, g.scriptUrlParsed)
						}
					}
				}
			},
			execute: function(n, i) {
				var r = O(n);
				if (!r) {
					i === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var u = M(n, i);
					u || v("Failed to render widget", 43522), r = u
				}
				var s = g.widgetMap.get(r);
				if (s) {
					f(s, i);
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
					var T = s.shadow.querySelector("#".concat(h));
					if (T || (s.isExecuting = !1, v("Widget ".concat(h, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && d(s, r, T), s.isInitialized && s.params.appearance === Z.Execute && Bt(T, s), s.isExecuting) {
						var A;
						(A = T.contentWindow) === null || A === void 0 || A.postMessage({
							event: "execute",
							source: j,
							widgetId: r
						}, "*")
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = I();
					if (r) {
						var u = g.widgetMap.get(r);
						return u != null && u.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), u == null ? void 0 : u.response
					}
					v("Could not find a widget", 43794)
				}
				var s = O(n);
				return s || v("Could not find widget for provided container", 43778), (i = g.widgetMap.get(s)) === null || i === void 0 ? void 0 : i.response
			},
			implicitRender: jt,
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var r = I();
					if (r) {
						var u, s;
						return (s = (u = g.widgetMap.get(r)) === null || u === void 0 ? void 0 : u.isExpired) !== null && s !== void 0 ? s : !1
					}
					v("Could not find a widget", 43794)
				}
				var h = O(n);
				h || v("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = g.widgetMap.get(h)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			},
			ready: function(n) {
				if (g.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : W(n), '"'), 3841), g.isReady) {
					n();
					return
				}
				Gt.push(n)
			},
			remove: D,
			render: M,
			reset: S
		})
	})();

	function ra(e) {
		var t = e.getAttribute("data-sitekey"),
			a = {
				sitekey: t
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (At(c) ? a.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var l = e.getAttribute("data-size");
		if (l && (Mt(l) ? a.size = l : b('Unknown data-size value: "'.concat(l, '".'))), 0) var m;
		var y = e.getAttribute("data-action");
		typeof y == "string" && (a.action = y);
		var d = e.getAttribute("data-cdata");
		typeof d == "string" && (a.cData = d);
		var f = e.getAttribute("data-retry");
		f && (Rt(f) ? a.retry = f : b('Invalid data-retry value: "'.concat(f, ", expected either 'never' or 'auto'\".")));
		var S = e.getAttribute("data-retry-interval");
		if (S) {
			var w = Number.parseInt(S, 10);
			It(w) ? a["retry-interval"] = w : b('Invalid data-retry-interval value: "'.concat(S, ', expected an integer value > 0 and < 900000".'))
		}
		var D = e.getAttribute("data-expiry-interval");
		if (D) {
			var M = Number.parseInt(D, 10);
			Ot(M) ? a["expiry-interval"] = M : b('Invalid data-expiry-interval value: "'.concat(M, ', expected an integer value > 0 and < 360000".'))
		}
		var I = e.getAttribute("data-refresh-expired");
		I && (Nt(I) ? a["refresh-expired"] = I : b('Unknown data-refresh-expired value: "'.concat(I, ", expected either: 'never', 'auto' or 'manual'.")));
		var E = e.getAttribute("data-refresh-timeout");
		E && (Lt(E) ? a["refresh-timeout"] = E : b('Unknown data-refresh-timeout value: "'.concat(E, ", expected either: 'never', 'auto' or 'manual'.")));
		var C = e.getAttribute("data-language");
		C && (Ft(C) ? a.language = C : b('Invalid data-language value: "'.concat(C, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function L(x) {
			var T = e.getAttribute(x),
				A = T ? ve[T] : void 0;
			return typeof A == "function" ? A : void 0
		}
		var O = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		O.forEach(function(x) {
			Object.assign(a, be({}, x, L("data-".concat(x))))
		});
		var k = e.getAttribute("data-feedback-enabled");
		k ? (tt(k) || b('Invalid data-feedback-enabled value: "'.concat(k, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = k === "true") : a["feedback-enabled"] = !0;
		var _, n = (_ = e.getAttribute("data-response-field")) !== null && _ !== void 0 ? _ : "true";
		a["response-field"] = n === "true";
		var i = e.getAttribute("data-response-field-name");
		i && (a["response-field-name"] = i);
		var r = e.getAttribute("data-execution");
		r && (Dt(r) ? a.execution = r : b('Unknown data-execution value: "'.concat(r, ", expected either: 'render' or 'execute'.")));
		var u = e.getAttribute("data-appearance");
		u && (Pt(u) ? a.appearance = u : b('Unknown data-appearance value: "'.concat(u, ", expected either: 'always', 'execute', or 'interaction-only'.")));
		var s = e.getAttribute("data-offlabel-show-privacy");
		s && (tt(s) || b('Invalid data-offlabel-show-privacy value: "'.concat(s, '", expected "true" or "false".')), a["offlabel-show-privacy"] = s === "true");
		var h = e.getAttribute("data-offlabel-show-help");
		return h && (tt(h) || b('Invalid data-offlabel-show-help value: "'.concat(h, '", expected "true" or "false".')), a["offlabel-show-help"] = h === "true"), a
	}

	function aa() {
		var e = !0;
		Ut(g, e), g.msgHandler && window.removeEventListener("message", g.msgHandler), Ir(window.turnstile, g)
	}
	Se = !1, R = xr(), g.scriptWasLoadedAsync = (rt = R == null ? void 0 : R.loadedAsync) !== null && rt !== void 0 ? rt : !1, g.scriptUrl = (at = R == null ? void 0 : R.src) !== null && at !== void 0 ? at : "undefined", g.scriptUrlParsed = R == null ? void 0 : R.url, R != null && R.params && (Ae = R.params.get("compat"), (Ae == null ? void 0 : Ae.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), g.isRecaptchaCompatibilityMode = !0, window.grecaptcha = qt) : Ae !== null && b('Unknown value for api.js?compat: "'.concat(Ae, '", ignoring.')), R.params.forEach(function(e, t) {
		P(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], t) || b('Unknown parameter passed to api.js: "?'.concat(t, '=...", ignoring.'))
	}), Se = R.params.get("_upgrade") === "true", J = R.params.get("onload"), J && !Se && setTimeout(function() {
		typeof ve[J] == "function" ? ve[J]() : (b("Unable to find onload callback '".concat(J, "' immediately after loading, expected 'function', got '").concat(W(ve[J]), "'.")), setTimeout(function() {
			typeof ve[J] == "function" ? ve[J]() : b("Unable to find onload callback '".concat(J, "' after 1 second, expected 'function', got '").concat(W(ve[J]), "'."))
		}, 1e3))
	}, 0)), Ht = "turnstile" in window, Ht && !Se ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Ht && Se && (Or(window.turnstile, g), Vt(g), (R == null || (nt = R.params) === null || nt === void 0 ? void 0 : nt.get("render")) !== "explicit" && setTimeout(jt, 0)), window.turnstile = qt, Se || ((R == null || (it = R.params) === null || it === void 0 ? void 0 : it.get("render")) !== "explicit" && Gt.push(jt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(kr, 0) : window.addEventListener("DOMContentLoaded", kr))), Nr = 10800 * 1e3, window.setTimeout(aa, Nr);
	var Se, R, rt, at, Ae, J, Ht, nt, it, Nr;
})();