"use strict";
(function() {
	function Dt(e, r, a, o, c, u, g) {
		try {
			var _ = e[u](g),
				s = _.value
		} catch (f) {
			a(f);
			return
		}
		_.done ? r(s) : Promise.resolve(s).then(o, c)
	}

	function Ut(e) {
		return function() {
			var r = this,
				a = arguments;
			return new Promise(function(o, c) {
				var u = e.apply(r, a);

				function g(s) {
					Dt(u, o, c, g, _, "next", s)
				}

				function _(s) {
					Dt(u, o, c, g, _, "throw", s)
				}
				g(void 0)
			})
		}
	}

	function U(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : U(e, r)
	}

	function Me(e, r, a) {
		return r in e ? Object.defineProperty(e, r, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = a, e
	}

	function Fe(e) {
		for (var r = 1; r < arguments.length; r++) {
			var a = arguments[r] != null ? arguments[r] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {
				return Object.getOwnPropertyDescriptor(a, c).enumerable
			}))), o.forEach(function(c) {
				Me(e, c, a[c])
			})
		}
		return e
	}

	function Tr(e, r) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function tt(e, r) {
		return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tr(Object(r)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a))
		}), e
	}

	function Pt(e) {
		if (Array.isArray(e)) return e
	}

	function Vt(e, r) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				u = !1,
				g, _;
			try {
				for (a = a.call(e); !(c = (g = a.next()).done) && (o.push(g.value), !(r && o.length === r)); c = !0);
			} catch (s) {
				u = !0, _ = s
			} finally {
				try {
					!c && a.return != null && a.return()
				} finally {
					if (u) throw _
				}
			}
			return o
		}
	}

	function Wt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function rt(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var a = 0, o = new Array(r); a < r; a++) o[a] = e[a];
		return o
	}

	function Ht(e, r) {
		if (e) {
			if (typeof e == "string") return rt(e, r);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return rt(e, r)
		}
	}

	function Ae(e, r) {
		return Pt(e) || Vt(e, r) || Ht(e, r) || Wt()
	}

	function F(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function De(e, r) {
		var a = {
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
			next: _(0),
			throw: _(1),
			return: _(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function _(f) {
			return function(E) {
				return s([f, E])
			}
		}

		function s(f) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, f[0] && (a = 0)), a;) try {
				if (o = 1, c && (u = f[0] & 2 ? c.return : f[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, f[1])).done) return u;
				switch (c = 0, u && (f = [f[0] & 2, u.value]), f[0]) {
					case 0:
					case 1:
						u = f;
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
						if (u = a.trys, !(u = u.length > 0 && u[u.length - 1]) && (f[0] === 6 || f[0] === 2)) {
							a = 0;
							continue
						}
						if (f[0] === 3 && (!u || f[1] > u[0] && f[1] < u[3])) {
							a.label = f[1];
							break
						}
						if (f[0] === 6 && a.label < u[1]) {
							a.label = u[1], u = f;
							break
						}
						if (u && a.label < u[2]) {
							a.label = u[2], a.ops.push(f);
							break
						}
						u[2] && a.ops.pop(), a.trys.pop();
						continue
				}
				f = r.call(e, a)
			} catch (E) {
				f = [6, E], c = 0
			} finally {
				o = u = 0
			}
			if (f[0] & 5) throw f[1];
			return {
				value: f[0] ? f[1] : void 0,
				done: !0
			}
		}
	}
	var Bt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var jt = 300020;
	var Ue = 300030;
	var Pe = 300031;
	var j;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(j || (j = {}));
	var N;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible", e.FLEXIBLE = "flexible"
	})(N || (N = {}));
	var Ve;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Ve || (Ve = {}));
	var Ie;
	(function(e) {
		e.FAILURE_WO_HAVING_TROUBLES = "failure-wo-having-troubles", e.FAILURE_HAVING_TROUBLES = "failure-having-troubles", e.FAILURE_FEEDBACK = "failure-feedback", e.FAILURE_FEEDBACK_CODE = "failure-feedback-code", e.EXPIRED_NEVER_REFRESH = "expired-never-refresh", e.EXPIRED_MANUAL_REFRESH = "expired-manual-refresh", e.TIMEOUT_NEVER_REFRESH = "timeout-never-refresh", e.TIMEOUT_MANUAL_REFRESH = "timeout-manual-refresh", e.INTERACTIVITY_REQUIRED = "interactivity-required", e.OUTDATED_BROWSER = "outdated-browser", e.TIME_CHECK_CACHED_WARNING = "time-check-cached-warning", e.INVALID_DOMAIN = "invalid-domain", e.LONGER_THAN_EXPECTED = "longer-than-expected"
	})(Ie || (Ie = {}));
	var fe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(fe || (fe = {}));
	var $;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})($ || ($ = {}));
	var ie;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(ie || (ie = {}));
	var X;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(X || (X = {}));
	var pe;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(pe || (pe = {}));
	var oe;
	(function(e) {
		e.EXECUTE = "execute"
	})(oe || (oe = {}));
	var at;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(at || (at = {}));

	function k(e, r) {
		return e.indexOf(r) !== -1
	}

	function nt(e) {
		return k(["auto", "dark", "light"], e)
	}

	function it(e) {
		return k(["auto", "never"], e)
	}

	function ot(e) {
		return e > 0 && e < 9e5
	}

	function ct(e) {
		return e > 0 && e < 36e4
	}
	var Rr = /^[0-9A-Za-z_-]{3,100}$/;

	function qt(e) {
		return Rr.test(e)
	}
	var Ar = /^[a-z0-9_-]{0,32}$/i;

	function ut(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ar.test(e)
	}
	var Ir = /^[a-z0-9_\-=]{0,255}$/i;

	function lt(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ir.test(e)
	}

	function st(e) {
		return k([N.NORMAL, N.COMPACT, N.INVISIBLE, N.FLEXIBLE], e)
	}

	function dt(e) {
		return k(["auto", "manual", "never"], e)
	}

	function ft(e) {
		return k(["auto", "manual", "never"], e)
	}
	var Sr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function pt(e) {
		return e === "auto" || Sr.test(e)
	}

	function vt(e) {
		return k(["always", "execute", "interaction-only"], e)
	}

	function zt(e) {
		return k(["true", "false"], e)
	}

	function mt(e) {
		return k(["render", "execute"], e)
	}
	var Gt = 300,
		Xt = 10;

	function gt(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}
	var We = "cf-chl-widget-",
		P = "cloudflare-challenge",
		Yt = ".cf-turnstile",
		Kt = ".cf-challenge",
		Qt = ".g-recaptcha",
		$t = "cf_challenge_response",
		Jt = "cf-turnstile-response",
		Zt = "g-recaptcha-response",
		er = 8e3,
		_t = "private-token",
		tr = 3,
		rr = 500,
		ar = 500,
		Y = "0/0";
	var Or = ["bg-bg", "da-dk", "de-de", "el-gr", "ja-jp", "ms-my", "ru-ru", "sk-sk", "sl-si", "sr-ba", "tl-ph", "uk-ua"],
		Cr = ["ar-eg", "es-es", "cs-cz", "fa-ir", "fr-fr", "hr-hr", "hu-hu", "id-id", "it-it", "lt-lt", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr", "ro-ro"];

	function ht(e, r) {
		var a = "https://challenges.cloudflare.com";
		if (r) {
			var o;
			a = (o = e["base-url"]) !== null && o !== void 0 ? o : a
		}
		return a
	}

	function yt(e, r, a, o, c, u, g) {
		var _ = ht(a, c),
			s = u ? "h/".concat(u, "/") : "",
			f = g ? "?".concat(g) : "",
			E = a["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(_, "/cdn-cgi/challenge-platform/").concat(s, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(r, "/").concat(a.theme, "/").concat(E, "/").concat(a.size, "/").concat(a.language, "/").concat(f)
	}
	var bt = function(e) {
			var r, a, o = window.innerWidth < 400,
				c = e.state === Ie.FAILURE_FEEDBACK || e.state === Ie.FAILURE_HAVING_TROUBLES,
				u, g = k(Or, (u = (r = e.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && u !== void 0 ? u : "nonexistent"),
				_, s = k(Cr, (_ = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && _ !== void 0 ? _ : "nonexistent");
			return o ? Nr({
				isModeratelyVerbose: s,
				isVerboseLanguage: g,
				isSmallerFeedback: c
			}) : c && g ? "520px" : c && s ? "500px" : c ? "480px" : g ? "580px" : "570px"
		},
		Nr = function(e) {
			var r = e.isVerboseLanguage,
				a = e.isSmallerFeedback,
				o = e.isModeratelyVerbose;
			return a && r ? "540px" : a && o ? "500px" : a ? "480px" : r ? "650px" : o ? "590px" : "570px"
		};

	function He(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function nr(e, r) {
		if (!U(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function J(e, r) {
		return J = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, J(e, r)
	}

	function ir(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && J(e, r)
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

	function Se(e, r, a) {
		return Be() ? Se = Reflect.construct : Se = function(c, u, g) {
			var _ = [null];
			_.push.apply(_, u);
			var s = Function.bind.apply(c, _),
				f = new s;
			return g && J(f, g.prototype), f
		}, Se.apply(null, arguments)
	}

	function ce(e) {
		return ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, ce(e)
	}

	function or(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function je(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return je = function(o) {
			if (o === null || !or(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(o)) return r.get(o);
				r.set(o, c)
			}

			function c() {
				return Se(o, arguments, ce(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), J(c, o)
		}, je(e)
	}

	function cr(e, r) {
		return r && (F(r) === "object" || typeof r == "function") ? r : He(e)
	}

	function ur(e) {
		var r = Be();
		return function() {
			var o = ce(e),
				c;
			if (r) {
				var u = ce(this).constructor;
				c = Reflect.construct(o, arguments, u)
			} else c = o.apply(this, arguments);
			return cr(this, c)
		}
	}
	var lr = function(e) {
		"use strict";
		ir(a, e);
		var r = ur(a);

		function a(o, c) {
			nr(this, a);
			var u;
			return u = r.call(this, o), Me(He(u), "code", void 0), u.name = "TurnstileError", u.code = c, u
		}
		return a
	}(je(Error));

	function v(e, r) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new lr(a, r)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e))
	}

	function qe(e) {
		return e.startsWith(We) ? e.substring(We.length) : null
	}

	function K(e) {
		return "".concat(We).concat(e)
	}

	function Et() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (U(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (U(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function sr() {
		var e = Et();
		e || v("Could not find Turnstile script tag, some features may not be available", 43777);
		var r = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (r.loadedAsync = !0);
		var a = e.src,
			o = a.split("?");
		return o.length > 1 && (r.params = new URLSearchParams(o[1])), r
	}

	function V() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var xt = function(e, r) {
			var a = ht(r.params, !1),
				o = "h/".concat("g", "/"),
				c, u, g = "".concat(a, "/cdn-cgi/challenge-platform/").concat(o, "feedback-reports/").concat(qe(e), "/").concat(r.displayLanguage, "/").concat((c = r.params.theme) !== null && c !== void 0 ? c : r.theme);
			r.wrapper.parentNode || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var _ = document.createElement("div");
			_.style.position = "fixed", _.style.zIndex = "21474836419";
			var s = document.createElement("div");
			s.className = "cf-turnstile-feedback", s.id = "cf-fr-id", s.style.width = "100vw", s.style.maxWidth = "450px", s.style.height = bt(r), s.style.display = "flex", s.style.justifyContent = "center", s.style.position = "relative", s.style.zIndex = "21474836420", s.style.backgroundColor = "#ffffff", s.style.borderRadius = "5px", s.style.left = "0px", s.style.top = "0px", s.style.overflow = "hidden";
			var f = document.createElement("iframe");
			f.id = e + "-fr", f.setAttribute("src", g), f.setAttribute("allow", "cross-origin-isolated; fullscreen"), f.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), f.setAttribute("scrolling", "no"), f.style.borderWidth = "0px", f.style.width = "100%", f.style.height = "100%", f.style.overflow = "hidden";
			var E = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			E.style.position = "absolute", E.style.width = "26px", E.style.height = "26px", E.style.zIndex = "21474836421", E.style.cursor = "pointer", r.displayRTL ? E.style.left = "6px" : E.style.right = "2px", E.style.top = "5px", E.setAttribute("width", "20"), E.setAttribute("height", "20"), E.addEventListener("click", function() {
				var D;
				(D = _.parentNode) === null || D === void 0 || D.removeChild(_)
			});
			var I = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			I.setAttribute("ry", "12"), I.setAttribute("rx", "12"), I.setAttribute("cy", "12"), I.setAttribute("cx", "12"), I.setAttribute("fill", "none"), I.setAttribute("stroke-width", "0"), E.appendChild(I);
			var O = document.createElementNS("http://www.w3.org/2000/svg", "line");
			O.setAttribute("stroke-width", "1"), O.setAttribute("stroke", "#999"), O.setAttribute("fill", "none"), O.setAttribute("x1", "6"), O.setAttribute("x2", "18"), O.setAttribute("y1", "18"), O.setAttribute("y2", "5"), E.appendChild(O);
			var A = document.createElementNS("http://www.w3.org/2000/svg", "line");
			A.setAttribute("stroke-width", "1"), A.setAttribute("stroke", "#999"), A.setAttribute("fill", "none"), A.setAttribute("x1", "6"), A.setAttribute("x2", "18"), A.setAttribute("y1", "5"), A.setAttribute("y2", "18"), E.appendChild(A), s.appendChild(f), s.appendChild(E), _.appendChild(s), r.wrapper.parentNode.appendChild(_), window.addEventListener("resize", function() {
				s.style.height = bt(r)
			})
		},
		dr = function(e) {
			var r, a, o;
			(o = document.getElementById(e)) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (r = a.parentElement) === null || r === void 0 || r.remove()
		};
	var wt = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function fr(e) {
		if (!e) return "-";
		var r = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, u = a.previousElementSibling; u;) u.tagName === a.tagName && c++, u = u.previousElementSibling;
			var g = wt(a.tagName.toLowerCase()),
				_ = "".concat(g, "[").concat(c, "]");
			return r(a.parentNode, "/".concat(_).concat(o))
		};
		return r(e, "")
	}

	function pr(e, r, a) {
		for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(I) {
					return c > r || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = u.nextNode()) !== null && o.length < a;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var _ = g;
				o += "".concat(wt(_.tagName.toLowerCase()));
				for (var s = 0; s < _.attributes.length; s++) {
					var f = _.attributes[s];
					o += "_".concat(wt(f.name, 2))
				}
				o += ">"
			} else g.nodeType === Node.TEXT_NODE && (o += "-t");
			var E = g.parentNode;
			for (c = 0; E !== e && E !== null;) c++, E = E.parentNode
		}
		return o.substring(0, a)
	}

	function vr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : F(e)));
		for (var r = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			r = r * 33 ^ o
		}
		return r >>> 0
	}

	function mr(e, r) {
		var a;
		r.upgradeAttempts++;
		var o = Et();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = r;
			var u = new URL(o.src),
				g = document.createElement("script");
			u.searchParams.set("_upgrade", "true"), u.searchParams.set("_cb", String(Date.now())), g.async = !0, c && (g.nonce = c), g.setAttribute("crossorigin", "anonymous"), g.src = u.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(g, o)
		}
	}

	function gr(e, r) {
		var a = e._pState;
		return a ? (r.isReady = a.isReady, r.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, r.lastWidgetIdx = a.lastWidgetIdx, r.scriptWasLoadedAsync = a.scriptWasLoadedAsync, r.upgradeAttempts = a.upgradeAttempts, r.upgradeCompletedCount = a.upgradeCompletedCount + 1, r.turnstileLoadInitTimeMs = V(), r.watchCatInterval = null, r.watchCatSeq = a.watchCatSeq, r.widgetMap = a.widgetMap, !0) : !1
	}
	var kr = 900,
		Lr = 3,
		Mr = 50;

	function Fr(e) {
		e.watchCatSeq++;
		var r = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), u; !(r = (u = c.next()).done); r = !0) {
				var g = Ae(u.value, 2),
					_ = g[0],
					s = g[1],
					f;
				s.watchcat.seq = e.watchCatSeq, s.watchcat.lastAckedSeq === 0 && (s.watchcat.lastAckedSeq = e.watchCatSeq);
				var E = K(_);
				if (!E || !s.shadow) {
					s.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(E, ", consider using turnstile.remove() to clean up a widget.")), s.watchcat.missingWidgetWarning = !0);
					continue
				}
				var I = s.shadow.querySelector("#".concat(E));
				if (!I) {
					s.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(E, ", consider using turnstile.remove() to clean up a widget.")), s.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(s.isComplete || s.isFailed)) {
					var O = s.watchcat.seq - 1 - Lr,
						A = s.watchcat.lastAckedSeq < O,
						D = s.watchcat.seq - 1 - Mr,
						C = s.isOverrunning && s.watchcat.overrunBeginSeq < D;
					if ((s.isExecuting || !s.isInitialized || s.isInitialized && !s.isStale && !s.isExecuted) && s.watchcat.lastAckedSeq !== 0 && A || C) {
						var q;
						s.watchcat.lastAckedSeq = 0, s.watchcat.seq = 0, s.isExecuting = !1;
						var y = function(d, l) {
							console.log("Turnstile Widget seem to have ".concat(d, ": "), l)
						};
						A ? y("crashed", _) : C && y("hung", _);
						var n = A ? Ue : Pe,
							i;
						if ((q = e.msgHandler) === null || q === void 0 || q.call(e, {
								data: {
									source: P,
									widgetId: _,
									code: n,
									event: "fail",
									rcV: (i = s.nextRcV) !== null && i !== void 0 ? i : Y
								}
							}), 0) var t;
						continue
					}(f = I.contentWindow) === null || f === void 0 || f.postMessage({
						source: P,
						widgetId: _,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (d) {
			a = !0, o = d
		} finally {
			try {
				!r && c.return != null && c.return()
			} finally {
				if (a) throw o
			}
		}
	}

	function Tt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Fr(e)
		}, kr))
	}

	function Rt(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}
	var h = {
		turnstileLoadInitTimeMs: V(),
		isRecaptchaCompatibilityMode: !1,
		scriptWasLoadedAsync: !1,
		isReady: !1,
		widgetMap: new Map,
		lastWidgetIdx: 0,
		upgradeAttempts: 0,
		upgradeCompletedCount: 0,
		apiVersion: 1,
		watchCatInterval: null,
		watchCatSeq: 0
	};

	function At(e) {
		Er(e, "")
	}

	function Ot() {
		var e = [Yt, Kt];
		h.isRecaptchaCompatibilityMode && e.push(Qt), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return Ct.render(r)
		})
	}
	var Nt = [];

	function _r() {
		h.isReady = !0;
		var e = !0,
			r = !1,
			a = void 0;
		try {
			for (var o = Nt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var u = c.value;
				u()
			}
		} catch (g) {
			r = !0, a = g
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (r) throw a
			}
		}
	}

	function Er(e, r) {
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && U(a, HTMLInputElement) && (a.value = r);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && U(o, HTMLInputElement) && (o.value = r), h.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && U(c, HTMLInputElement) && (c.value = r)
		}
	}

	function It(e, r) {
		var a = r.params,
			o = a.size,
			c = o === void 0 ? "normal" : o,
			u = r.mode;
		switch (u) {
			case j.NON_INTERACTIVE:
			case j.MANAGED:
				switch (c) {
					case N.COMPACT:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case N.INVISIBLE:
						v('Invalid value for parameter "size", expected "'.concat(N.COMPACT, '" or "').concat(N.NORMAL, '", got "').concat(c, '"'), 2817);
					case N.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case N.FLEXIBLE:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break
				}
				break;
			case j.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(j.NON_INTERACTIVE, '", "').concat(j.MANAGED, '" or "').concat(j.INVISIBLE, '", got "').concat(u, '"'), 2818)
		}
	}

	function hr(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Dr(e, r) {
		var a = r.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Ur(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Pr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function yr() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Ct = function() {
		var e = function(n, i, t, d) {
				return A.apply(this, arguments)
			},
			r = function(n, i, t) {
				if (n.params.retry === fe.AUTO || t) {
					n.isExecuted && (n.msgQueue.push(oe.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
					var d, l = t ? 0 : 1e3 * 2 + ((d = n.params["retry-interval"]) !== null && d !== void 0 ? d : 0);
					n.retryTimeout = window.setTimeout(function() {
						f(i)
					}, l)
				}
			},
			a = function(n, i, t) {
				var d;
				n.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, Er(i, n.response), (d = n.cbSuccess) === null || d === void 0 || d.call(n, n.response, t)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, t = i.length, d = new Array(t), l = 0; l < t; l++) d[l] = i[l].name;
				return d
			},
			c = function(n, i, t) {
				if (n.rcV = i, 0) var d
			},
			u = function() {
				var n = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = n.length,
					t;
				do {
					t = "";
					for (var d = 0; d < 5; d++) t += n.charAt(Math.floor(Math.random() * i))
				} while (h.widgetMap.has(t));
				return t
			},
			g = function(n) {
				var i = !0,
					t = !1,
					d = void 0;
				try {
					for (var l = h.widgetMap[Symbol.iterator](), m; !(i = (m = l.next()).done); i = !0) {
						var x = Ae(m.value, 2),
							w = x[0],
							T = x[1];
						if (T.wrapper.parentElement === n) return w
					}
				} catch (R) {
					t = !0, d = R
				} finally {
					try {
						!i && l.return != null && l.return()
					} finally {
						if (t) throw d
					}
				}
				return null
			},
			_ = function(n, i, t) {
				for (; n.msgQueue.length;) {
					var d, l = n.msgQueue.pop();
					(d = t.contentWindow) === null || d === void 0 || d.postMessage({
						source: P,
						widgetId: i,
						event: l
					}, "*")
				}
			},
			s = function(n, i) {
				if (i) {
					var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						d = [],
						l = !0,
						m = !1,
						x = void 0;
					try {
						for (var w = t[Symbol.iterator](), T; !(l = (T = w.next()).done); l = !0) {
							var R = T.value;
							i[R] && i[R] !== n.params[R] && d.push(R)
						}
					} catch (L) {
						m = !0, x = L
					} finally {
						try {
							!l && w.return != null && w.return()
						} finally {
							if (m) throw x
						}
					}
					d.length !== 0 && v("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(d.join(",")), 3618), i.action && (ut(i.action) || v('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (lt(i.cData) || v('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			f = function(n) {
				var i = C(n);
				i || v("Nothing to reset found for provided container", 3329);
				var t = h.widgetMap.get(i);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isComplete = !1, t.isExecuting = !1, t.isExpired = !1, t.isFailed = !1, t.isInitialized = !1, t.isStale = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === pe.RENDER && (t.msgQueue.push(oe.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
					var d = K(i),
						l = t.shadow.querySelector("#".concat(d));
					(!d || !l) && v("Widget ".concat(i, " to reset was not found."), 3330), t.params.appearance === X.INTERACTION_ONLY && hr(l), t.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
					var m;
					l.src = yt(i, t.params.sitekey, t.params, (m = t.rcV) !== null && m !== void 0 ? m : Y, !1, "g", gt(t)), At(d), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else v("Widget ".concat(i, " to reset was not found."), 3331)
			},
			E = function(n) {
				var i, t = C(n);
				if (!t || !h.widgetMap.has(t)) {
					b("Nothing to remove found for the provided container.");
					return
				}
				var d = K(t),
					l = ["input#".concat(d, "_response"), "input#".concat(d, "_legacy_response"), "input#".concat(d, "_g_response")];
				document.querySelectorAll(l.join(", ")).forEach(function(w) {
					return w.remove()
				});
				var m = h.widgetMap.get(t);
				m == null || m.shadow.querySelectorAll(l.join(", ")).forEach(function(w) {
					return w.remove()
				}), m == null || m.wrapper.remove();
				var x = (i = h.widgetMap.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				x && window.clearTimeout(x), h.widgetMap.delete(t), Rt(h)
			},
			I = function(n, i) {
				var t, d, l = V(),
					m;
				if (typeof n == "string") try {
					var x = document.querySelector(n);
					x || v('Unable to find a container for "'.concat(n, '"'), 3585), m = x
				} catch (Ft) {
					v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
				} else U(n, HTMLElement) ? m = n : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var w = !0,
					T = !1,
					R = void 0;
				try {
					for (var L = h.widgetMap.values()[Symbol.iterator](), W; !(w = (W = L.next()).done); w = !0) {
						var Z = W.value;
						if (m.contains(Z.wrapper)) {
							b("Turnstile has already been rendered in this container. Did you mean to render it multiple times?");
							break
						}
					}
				} catch (Ft) {
					T = !0, R = Ft
				} finally {
					try {
						!w && L.return != null && L.return()
					} finally {
						if (T) throw R
					}
				}
				var M = Vr(m);
				if (M) {
					var p = Object.assign(M, i),
						ge = p.action,
						ee = p.cData,
						Oe = p.chlPageData,
						H = p.sitekey,
						te;
					p.theme = (te = p.theme) !== null && te !== void 0 ? te : Ve.AUTO;
					var ue;
					p.retry = (ue = p.retry) !== null && ue !== void 0 ? ue : fe.AUTO;
					var re;
					p.execution = (re = p.execution) !== null && re !== void 0 ? re : pe.RENDER;
					var _e;
					p.appearance = (_e = p.appearance) !== null && _e !== void 0 ? _e : X.ALWAYS;
					var ae;
					p["retry-interval"] = Number((ae = p["retry-interval"]) !== null && ae !== void 0 ? ae : er);
					var he;
					p["expiry-interval"] = Number((he = p["expiry-interval"]) !== null && he !== void 0 ? he : (Gt - Xt) * 1e3);
					var le;
					p.size = (le = p.size) !== null && le !== void 0 ? le : N.NORMAL;
					var ye = p.callback,
						be = p["expired-callback"],
						Ce = p["timeout-callback"],
						Ee = p["after-interactive-callback"],
						xe = p["before-interactive-callback"],
						G = p["error-callback"],
						Ye = p["unsupported-callback"];
					typeof H != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof H == "undefined" ? "undefined" : F(H), '"'), 3588), qt(H) || v('Invalid input for parameter "sitekey", got "'.concat(H, '"'), 3589), st(p.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(p.size, '" ').concat(F(p.size)), 3590), nt(p.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(p.theme, '" ').concat(F(p.theme)), 3591), it(p.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(p.retry, '" ').concat(F(p.retry)), 3592), p.language || (p.language = "auto"), pt(p.language) || (b('Invalid language value: "'.concat(p.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")), p.language = "auto"), vt(p.appearance) || v('Unknown appearance value: "'.concat(p.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), mt(p.execution) || v('Unknown execution value: "'.concat(p.execution, ", expected either: 'render' or 'execute'."), 3601), ot(p["retry-interval"]) || v('Invalid retry-interval value: "'.concat(p["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), ct(p["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(p["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var we, Q = (we = p["refresh-expired"]) !== null && we !== void 0 ? we : $.AUTO;
					dt(Q) ? p["refresh-expired"] = Q : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Q, '" ').concat(typeof Q == "undefined" ? "undefined" : F(Q)), 3603);
					var Te, ne = (Te = p["refresh-timeout"]) !== null && Te !== void 0 ? Te : ie.AUTO;
					ft(Q) ? p["refresh-timeout"] = ne : v('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(ne, '" ').concat(typeof ne == "undefined" ? "undefined" : F(ne)), 3603);
					var B = document.createElement("iframe"),
						se = document.createElement("div"),
						kt = se.attachShadow({
							mode: "closed"
						});
					ut(ge) || v('Invalid input for optional parameter "action", got "'.concat(ge, '"'), 3604), lt(ee) || v('Invalid input for optional parameter "cData", got "'.concat(ee, '"'), 3605);
					var Re = u(),
						de = K(Re);
					if (!(!Re || !de)) {
						var Lt = [],
							Ke = p.execution === pe.RENDER;
						Ke && Lt.push(oe.EXECUTE), h.lastWidgetIdx++;
						var xr = {};
						h.widgetMap.set(Re, tt(Fe({
							idx: h.lastWidgetIdx,
							action: ge,
							cData: ee,
							chlPageData: Oe,
							cbSuccess: ye,
							cbError: G,
							cbExpired: be,
							cbTimeout: Ce,
							cbUnsupported: Ye,
							cbAfterInteractive: Ee,
							cbBeforeInteractive: xe,
							params: p,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: Ke,
							isFailed: !1,
							isResetting: !1,
							isExecuted: Ke,
							isInitialized: !1,
							msgQueue: Lt,
							rcV: Y,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0
							}
						}, xr), {
							widgetRenderStartTimeMs: l,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: kt,
							wrapper: se,
							isOverrunning: !1
						})), Tt(h);
						var Qe = h.widgetMap.get(Re);
						Qe || v("Turnstile Initialization Error ", 3606), B.style.display = "none", B.style.border = "none", B.style.overflow = "hidden", B.setAttribute("src", yt(Re, H, p, Y, !1, "g", gt(Qe))), B.onerror = function() {
							if (G) {
								G == null || G(String(Bt.code));
								return
							}
							v("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Mt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							$e;
						k(($e = (d = document.featurePolicy) === null || d === void 0 || (t = d.features) === null || t === void 0 ? void 0 : t.call(d)) !== null && $e !== void 0 ? $e : [], _t) && Mt.push(_t), B.setAttribute("allow", Mt.join("; ")), B.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), B.id = de;
						var Je;
						B.tabIndex = (Je = p.tabindex) !== null && Je !== void 0 ? Je : 0, B.title = "Widget containing a Cloudflare security challenge", kt.appendChild(B);
						var Ze, wr = (Ze = p["response-field"]) !== null && Ze !== void 0 ? Ze : !0;
						if (wr) {
							var Ne = document.createElement("input");
							Ne.type = "hidden";
							var et;
							if (Ne.name = (et = p["response-field-name"]) !== null && et !== void 0 ? et : Jt, Ne.id = "".concat(de, "_response"), se.appendChild(Ne), typeof p["response-field-name"] != "string" && Pr(H)) {
								var ke = document.createElement("input");
								ke.type = "hidden", ke.name = $t, ke.id = "".concat(de, "_legacy_response"), se.appendChild(ke)
							}
						}
						if (h.isRecaptchaCompatibilityMode) {
							var Le = document.createElement("input");
							Le.type = "hidden", Le.name = Zt, Le.id = "".concat(de, "_g_response"), se.appendChild(Le)
						}
						return m.appendChild(se), Qe.widgetRenderEndTimeMs = V(), de
					}
				}
			},
			O = function() {
				var n, i = -1,
					t = !0,
					d = !1,
					l = void 0;
				try {
					for (var m = h.widgetMap[Symbol.iterator](), x; !(t = (x = m.next()).done); t = !0) {
						var w = Ae(x.value, 2),
							T = w[0],
							R = w[1];
						i < R.idx && (n = T, i = R.idx)
					}
				} catch (L) {
					d = !0, l = L
				} finally {
					try {
						!t && m.return != null && m.return()
					} finally {
						if (d) throw l
					}
				}
				return i === -1 && v("Could not find widget", 43778), n
			};

		function A() {
			return A = Ut(function(y, n, i, t) {
				var d, l, m, x, w, T, R, L, W, Z;
				return De(this, function(M) {
					switch (M.label) {
						case 0:
							if (d = y.params.sitekey, l = yr(), !l) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(y, n, !1), [2];
							m = "h/".concat("g", "/"), x = new URL(l), w = "https", T = "", R = "".concat(w, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(m, "rc/").concat(t).concat(T), M.label = 1;
						case 1:
							return M.trys.push([1, 6, , 7]), [4, fetch(R, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: d,
									secondaryToken: i
								})
							})];
						case 2:
							return L = M.sent(), L.status === 200 ? [3, 3] : (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(y, n, !1), [3, 5]);
						case 3:
							return [4, L.json()];
						case 4:
							if (W = M.sent(), "status" in W && W.status === "redeemed") return a(y, n, !0), [2];
							M.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return Z = M.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), a(y, n, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), A.apply(this, arguments)
		}
		var D = function(y) {
			var n = y.data;
			if (n.source === P) {
				if (!Ur(y)) {
					b("Ignored message from wrong origin: ".concat(y.origin, "."));
					return
				}
				if (!(!n.widgetId || !h.widgetMap.has(n.widgetId))) {
					var i = K(n.widgetId),
						t = h.widgetMap.get(n.widgetId);
					if (!(!i || !t)) switch (n.event) {
						case "init": {
							var d;
							t.widgetInitStartTimeMs = V();
							var l = t.shadow.getElementById(i);
							l || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), t.mode = n.mode, t.nextRcV = n.nextRcV, t.mode === j.INVISIBLE && t.params["refresh-expired"] === $.MANUAL && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat($.AUTO, "' or '").concat($.NEVER, ".'")), t.mode !== j.MANAGED && t.params["refresh-timeout"] !== ie.AUTO && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), t.params.appearance === X.ALWAYS || t.isExecuting && t.params.appearance === X.EXECUTE ? It(l, t) : hr(l), l.style.display = "";
							var m = t.shadow.querySelector("#".concat(i));
							m || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (d = m.contentWindow) === null || d === void 0 || d.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var x = t.shadow.getElementById(i);
							x || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var w = new Map;
							t.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(ne) {
								w.set(ne, n.translationData[ne])
							}), Dr(x, w);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(t.params.language, " is not supported, falling back to: ").concat(n.fallback, ".")), t.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var T = t.shadow.getElementById(i);
							if (t.isExecuting = !1, T || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "outdated_browser") {
								var R;
								(R = t.cbUnsupported) === null || R === void 0 || R.call(t)
							}
							break
						}
						case "food": {
							t.watchcat && n.seq > t.watchcat.lastAckedSeq && (t.watchcat.lastAckedSeq = n.seq);
							break
						}
						case "overrunBegin": {
							t.isOverrunning = !0, t.watchcat && (t.watchcat.overrunBeginSeq = t.watchcat.lastAckedSeq);
							break
						}
						case "overrunEnd": {
							t.isOverrunning = !1;
							break
						}
						case "complete": {
							c(t, Y, n.widgetId), t.response = n.token, n.sToken ? e(t, i, n.sToken, n.chlId) : a(t, i, !1);
							break
						}
						case "fail": {
							n.rcV && c(t, n.rcV, n.widgetId), n.cfChlOut && (t.cfChlOut = n.cfChlOut), n.cfChlOutS && (t.cfChlOutS = n.cfChlOutS), n.code && (t.errorCode = n.code), t.isExecuting = !1, t.isFailed = !0, t.isInitialized = !0, At(i);
							var L = t.cbError,
								W = n.code === Ue || n.code === Pe;
							if (W) {
								var Z, M = t.shadow.querySelector("#".concat(i));
								M == null || (Z = M.contentWindow) === null || Z === void 0 || Z.postMessage({
									source: P,
									widgetId: n.widgetId,
									event: "forceFail"
								}, "*")
							}
							if (L) {
								var p;
								L(String((p = n.code) !== null && p !== void 0 ? p : jt)) ? t.params.retry === fe.AUTO && !t.isResetting && r(t, i, W) : (n.code && b("Error: ".concat(n.code, ".")), r(t, i, W))
							} else n.code ? (r(t, i, W), v("Error: ".concat(n.code), 3076)) : r(t, i, !1);
							break
						}
						case "feedbackInit": {
							var ge = t.wrapper.querySelector("#".concat(i, "-fr"));
							if (ge) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							xt(i, t);
							break
						}
						case "requestFeedbackData": {
							var ee, Oe = t.shadow.querySelector("#".concat(i));
							Oe || v("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (ee = Oe.contentWindow) === null || ee === void 0 || ee.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var H, te, ue = (H = t.wrapper.parentNode) === null || H === void 0 ? void 0 : H.querySelector("#".concat(i, "-fr"));
							ue || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (te = ue.contentWindow) === null || te === void 0 || te.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "feedbackData",
								rayId: n.rayId,
								rcV: n.rcV,
								cfChlOut: t.cfChlOut,
								cfChlOutS: t.cfChlOutS,
								errorCode: t.errorCode,
								sitekey: n.sitekey,
								mode: n.mode,
								issuanceUserAgent: n.issuanceUserAgent
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var re, _e = (re = t.wrapper.parentNode) === null || re === void 0 ? void 0 : re.querySelector("#".concat(i, "-fr"));
							_e || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), dr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var ae, he = n.token;
							t.isExpired = !0, (ae = t.cbExpired) === null || ae === void 0 || ae.call(t, he), t.params["refresh-expired"] === $.AUTO && !t.isResetting && f(i);
							break
						}
						case "interactiveTimeout": {
							c(t, Y, n.widgetId), At(i);
							var le = t.cbTimeout;
							if (le ? le() : t.params["refresh-timeout"] === ie.NEVER && !t.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), t.params["refresh-timeout"] === ie.AUTO && !t.isResetting) {
								var ye = t.cbAfterInteractive;
								ye == null || ye(), f(i)
							}
							break
						}
						case "refreshRequest": {
							c(t, Y, n.widgetId), f(i);
							break
						}
						case "reloadRequest": {
							c(t, n.nextRcV, n.widgetId), f(i);
							break
						}
						case "interactiveBegin": {
							var be, Ce = t.shadow.getElementById(i);
							Ce || v("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (be = t.cbBeforeInteractive) === null || be === void 0 || be.call(t), t.params.appearance === X.INTERACTION_ONLY && It(Ce, t);
							break
						}
						case "interactiveEnd": {
							var Ee;
							(Ee = t.cbAfterInteractive) === null || Ee === void 0 || Ee.call(t);
							break
						}
						case "widgetStale": {
							t.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var xe;
							t.widgetParamsStartTimeMs = V();
							var G = t.shadow.querySelector("#".concat(i));
							G || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), t.isResetting = !1;
							var Ye = {},
								we = V(),
								Q = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: fr(t.wrapper).substring(0, ar),
										pfp: pr(document, tr, rr),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: vr(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href,
										sR: t.wrapper.shadowRoot === null
									}
								},
								Te = V() - we;
							(xe = G.contentWindow) === null || xe === void 0 || xe.postMessage(Fe({
								source: P,
								widgetId: n.widgetId,
								event: "extraParams",
								action: t.action,
								cData: t.cData,
								chlPageData: t.chlPageData,
								rcV: t.rcV,
								ch: "7cf142fb2c1f",
								url: yr(),
								retry: t.params.retry,
								"expiry-interval": t.params["expiry-interval"],
								"retry-interval": t.params["retry-interval"],
								"refresh-expired": t.params["refresh-expired"],
								"refresh-timeout": t.params["refresh-timeout"],
								language: t.params.language,
								execution: t.params.execution,
								appearance: t.params.appearance,
								wPr: Q,
								turnstileAgeMs: V() - h.turnstileLoadInitTimeMs,
								widgetAgeMs: V() - t.widgetRenderStartTimeMs,
								upgradeAttempts: h.upgradeAttempts,
								upgradeCompletedCount: h.upgradeCompletedCount,
								timeRenderMs: t.widgetRenderEndTimeMs - t.widgetRenderStartTimeMs,
								timeToInitMs: t.widgetInitStartTimeMs - t.widgetRenderEndTimeMs,
								timeToParamsMs: t.widgetParamsStartTimeMs - t.widgetInitStartTimeMs,
								tiefTimeMs: Te
							}, Ye), "*"), _(t, n.widgetId, G), t.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		h.msgHandler = D, window.addEventListener("message", D);

		function C(y) {
			if (typeof y == "string") {
				var n = qe(y);
				if (n && h.widgetMap.has(n)) return n;
				if (h.widgetMap.has(y)) return y;
				try {
					var i = document.querySelector(y);
					return i ? C(i) : null
				} catch (t) {
					return null
				}
			}
			return U(y, Element) ? g(y) : y || h.widgetMap.size === 0 ? null : h.widgetMap.keys().next().value
		}
		var q = {};
		return tt(Fe({}, q), {
			ready: function(n) {
				if (h.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors."), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : F(n), '"'), 3841), h.isReady) {
					n();
					return
				}
				Nt.push(n)
			},
			implicitRender: Ot,
			execute: function(n, i) {
				var t = C(n);
				if (!t) {
					i === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var d = I(n, i);
					d || v("Failed to render widget", 43522), t = d
				}
				var l = h.widgetMap.get(t);
				if (l) {
					s(l, i);
					var m = K(t);
					if (l.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(m, "), consider using reset() before execute()."));
						return
					} else l.isExecuting = !0;
					if (l.response) {
						var x;
						l.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(m, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token.")), (x = l.cbSuccess) === null || x === void 0 || x.call(l, l.response, !1);
						return
					}
					l.isExpired && b("Call to execute on a expired-widget (".concat(m, "), consider using reset() before.")), l.isStale && (f(m), l.isExecuting = !0), l.msgQueue.push(oe.EXECUTE), l.isExecuted = !0;
					var w = l.shadow.querySelector("#".concat(m));
					if (w || (l.isExecuting = !1, v("Widget ".concat(m, " to execute was not found"), 43522)), l.isResetting) return;
					if (l.isInitialized && _(l, t, w), l.isInitialized && l.params.appearance === X.EXECUTE && It(w, l), l.isExecuting) {
						var T, R = l.shadow.querySelector("#".concat(m));
						R || v("Received state for an unknown widget: ".concat(t), 3078), (T = R.contentWindow) === null || T === void 0 || T.postMessage({
							source: P,
							widgetId: t,
							event: "execute"
						}, "*")
					}
				}
			},
			render: I,
			reset: f,
			remove: E,
			_private: {
				showFeedback: function(n) {
					var i = C(n);
					if (i) {
						var t = K(i);
						if (t) {
							var d = h.widgetMap.get(i);
							d && xt(t, d)
						}
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var t = O();
					if (t) {
						var d, l = h.widgetMap.get(t);
						return l != null && l.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (d = h.widgetMap.get(t)) === null || d === void 0 ? void 0 : d.response
					} else v("Could not find a widget", 43794)
				}
				var m = C(n);
				return m || v("Could not find widget for provided container", 43778), (i = h.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var t = O();
					if (t) {
						var d, l;
						return (l = (d = h.widgetMap.get(t)) === null || d === void 0 ? void 0 : d.isExpired) !== null && l !== void 0 ? l : !1
					} else v("Could not find a widget", 43794)
				}
				var m = C(n);
				m || v("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = h.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			}
		})
	}();

	function Vr(e) {
		var r = e.getAttribute("data-sitekey"),
			a = {
				sitekey: r
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (nt(c) ? a.theme = c : b('Unknown data-theme value: "'.concat(c, '".')));
		var u = e.getAttribute("data-size");
		if (u && (st(u) ? a.size = u : b('Unknown data-size value: "'.concat(u, '".'))), 0) var g;
		var _ = e.getAttribute("data-action");
		typeof _ == "string" && (a.action = _);
		var s = e.getAttribute("data-cdata");
		typeof s == "string" && (a.cData = s);
		var f = e.getAttribute("data-retry");
		f && (it(f) ? a.retry = f : b('Invalid data-retry value: "'.concat(f, ", expected either 'never' or 'auto'\".")));
		var E = e.getAttribute("data-retry-interval");
		if (E) {
			var I = Number.parseInt(E, 10);
			ot(I) ? a["retry-interval"] = I : b('Invalid data-retry-interval value: "'.concat(E, ', expected an integer value > 0 and < 900000".'))
		}
		var O = e.getAttribute("data-expiry-interval");
		if (O) {
			var A = Number.parseInt(O, 10);
			ct(A) ? a["expiry-interval"] = A : b('Invalid data-expiry-interval value: "'.concat(A, ', expected an integer value > 0 and < 360000".'))
		}
		var D = e.getAttribute("data-refresh-expired");
		D && (dt(D) ? a["refresh-expired"] = D : b('Unknown data-refresh-expired value: "'.concat(D, ", expected either: 'never', 'auto' or 'manual'.")));
		var C = e.getAttribute("data-refresh-timeout");
		C && (ft(C) ? a["refresh-timeout"] = C : b('Unknown data-refresh-timeout value: "'.concat(C, ", expected either: 'never', 'auto' or 'manual'.")));
		var q = e.getAttribute("data-language");
		q && (pt(q) ? a.language = q : b('Invalid data-language value: "'.concat(q, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US).")));

		function y(w) {
			var T = e.getAttribute(w);
			return T && window[T] ? window[T] : void 0
		}
		var n = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		n.forEach(function(w) {
			a[w] = y("data-".concat(w))
		});
		var i = e.getAttribute("data-feedback-enabled");
		i ? (zt(i) || b('Invalid data-feedback-enabled value: "'.concat(i, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = i === "true") : a["feedback-enabled"] = !0;
		var t, d = (t = e.getAttribute("data-response-field")) !== null && t !== void 0 ? t : "true";
		a["response-field"] = d === "true";
		var l = e.getAttribute("data-response-field-name");
		l && (a["response-field-name"] = l);
		var m = e.getAttribute("data-execution");
		m && (mt(m) ? a.execution = m : b('Unknown data-execution value: "'.concat(m, ", expected either: 'render' or 'execute'.")));
		var x = e.getAttribute("data-appearance");
		return x && (vt(x) ? a.appearance = x : b('Unknown data-appearance value: "'.concat(x, ", expected either: 'always', 'execute', or 'interaction-only'."))), a
	}

	function Wr() {
		var e = !0;
		Rt(h, e), h.msgHandler && window.removeEventListener("message", h.msgHandler), mr(window.turnstile, h)
	}
	ve = !1, S = sr(), h.scriptWasLoadedAsync = (ze = S == null ? void 0 : S.loadedAsync) !== null && ze !== void 0 ? ze : !1, S != null && S.params && (me = S.params.get("compat"), (me == null ? void 0 : me.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled.") : (b("Compatibility layer enabled."), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Ct) : me !== null && b('Unknown value for api.js?compat: "'.concat(me, '", ignoring.')), S.params.forEach(function(e, r) {
		k(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], r) || b('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring.'))
	}), ve = S.params.get("_upgrade") === "true", z = S.params.get("onload"), z && !ve && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (b("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(F(window[z]), "'.")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : b("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(F(window[z]), "'."))
		}, 1e3))
	}, 0)), St = "turnstile" in window, St && !ve ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (St && ve && (gr(window.turnstile, h), Tt(h), (S == null || (Ge = S.params) === null || Ge === void 0 ? void 0 : Ge.get("render")) !== "explicit" && setTimeout(Ot, 0)), window.turnstile = Ct, ve || ((S == null || (Xe = S.params) === null || Xe === void 0 ? void 0 : Xe.get("render")) !== "explicit" && Nt.push(Ot), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(_r, 0) : window.addEventListener("DOMContentLoaded", _r))), br = 24 * 60 * 60 * 1e3, window.setTimeout(Wr, br);
	var ve, S, ze, me, z, St, Ge, Xe, br;
})();