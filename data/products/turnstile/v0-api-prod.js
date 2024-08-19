"use strict";
(function() {
	function St(e, r, a, o, c, u, g) {
		try {
			var _ = e[u](g),
				p = _.value
		} catch (f) {
			a(f);
			return
		}
		_.done ? r(p) : Promise.resolve(p).then(o, c)
	}

	function Ot(e) {
		return function() {
			var r = this,
				a = arguments;
			return new Promise(function(o, c) {
				var u = e.apply(r, a);

				function g(p) {
					St(u, o, c, g, _, "next", p)
				}

				function _(p) {
					St(u, o, c, g, _, "throw", p)
				}
				g(void 0)
			})
		}
	}

	function P(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : P(e, r)
	}

	function Oe(e, r, a) {
		return r in e ? Object.defineProperty(e, r, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = a, e
	}

	function Ce(e) {
		for (var r = 1; r < arguments.length; r++) {
			var a = arguments[r] != null ? arguments[r] : {},
				o = Object.keys(a);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(a).filter(function(c) {
				return Object.getOwnPropertyDescriptor(a, c).enumerable
			}))), o.forEach(function(c) {
				Oe(e, c, a[c])
			})
		}
		return e
	}

	function _r(e, r) {
		var a = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			r && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), a.push.apply(a, o)
		}
		return a
	}

	function $e(e, r) {
		return r = r != null ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _r(Object(r)).forEach(function(a) {
			Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a))
		}), e
	}

	function Ct(e) {
		if (Array.isArray(e)) return e
	}

	function Nt(e, r) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var o = [],
				c = !0,
				u = !1,
				g, _;
			try {
				for (a = a.call(e); !(c = (g = a.next()).done) && (o.push(g.value), !(r && o.length === r)); c = !0);
			} catch (p) {
				u = !0, _ = p
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

	function kt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Je(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var a = 0, o = new Array(r); a < r; a++) o[a] = e[a];
		return o
	}

	function Lt(e, r) {
		if (e) {
			if (typeof e == "string") return Je(e, r);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Je(e, r)
		}
	}

	function be(e, r) {
		return Ct(e) || Nt(e, r) || Lt(e, r) || kt()
	}

	function F(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ne(e, r) {
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
			return function(b) {
				return p([f, b])
			}
		}

		function p(f) {
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
			} catch (b) {
				f = [6, b], c = 0
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
	var Mt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Ft = 300020;
	var ke = 300030;
	var Le = 300031;
	var B;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(B || (B = {}));
	var k;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible", e.FLEXIBLE = "flexible"
	})(k || (k = {}));
	var Me;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Me || (Me = {}));
	var xe;
	(function(e) {
		e.FAILURE_WO_HAVING_TROUBLES = "failure-wo-having-troubles", e.FAILURE_HAVING_TROUBLES = "failure-having-troubles", e.FAILURE_FEEDBACK = "failure-feedback", e.FAILURE_FEEDBACK_CODE = "failure-feedback-code", e.EXPIRED_NEVER_REFRESH = "expired-never-refresh", e.EXPIRED_MANUAL_REFRESH = "expired-manual-refresh", e.TIMEOUT_NEVER_REFRESH = "timeout-never-refresh", e.TIMEOUT_MANUAL_REFRESH = "timeout-manual-refresh", e.INTERACTIVITY_REQUIRED = "interactivity-required", e.OUTDATED_BROWSER = "outdated-browser", e.TIME_CHECK_CACHED_WARNING = "time-check-cached-warning", e.INVALID_DOMAIN = "invalid-domain", e.LONGER_THAN_EXPECTED = "longer-than-expected"
	})(xe || (xe = {}));
	var fe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(fe || (fe = {}));
	var Z;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(Z || (Z = {}));
	var ue;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(ue || (ue = {}));
	var X;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(X || (X = {}));
	var pe;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(pe || (pe = {}));
	var le;
	(function(e) {
		e.EXECUTE = "execute"
	})(le || (le = {}));
	var Ze;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Ze || (Ze = {}));

	function L(e, r) {
		return e.indexOf(r) !== -1
	}

	function et(e) {
		return L(["auto", "dark", "light"], e)
	}

	function tt(e) {
		return L(["auto", "never"], e)
	}

	function rt(e) {
		return e > 0 && e < 9e5
	}

	function at(e) {
		return e > 0 && e < 36e4
	}
	var hr = /^[0-9A-Za-z_-]{3,100}$/;

	function Dt(e) {
		return hr.test(e)
	}
	var yr = /^[a-z0-9_-]{0,32}$/i;

	function nt(e) {
		return e === void 0 ? !0 : typeof e == "string" && yr.test(e)
	}
	var Er = /^[a-z0-9_\-=]{0,255}$/i;

	function it(e) {
		return e === void 0 ? !0 : typeof e == "string" && Er.test(e)
	}

	function ot(e) {
		return L([k.NORMAL, k.COMPACT, k.INVISIBLE, k.FLEXIBLE], e)
	}

	function ct(e) {
		return L(["auto", "manual", "never"], e)
	}

	function ut(e) {
		return L(["auto", "manual", "never"], e)
	}
	var br = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function lt(e) {
		return e === "auto" || br.test(e)
	}

	function st(e) {
		return L(["always", "execute", "interaction-only"], e)
	}

	function Ut(e) {
		return L(["true", "false"], e)
	}

	function dt(e) {
		return L(["render", "execute"], e)
	}
	var Pt = 300,
		Vt = 10;
	var Y = "0/0";

	function ft(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}
	var Fe = "cf-chl-widget-",
		V = "cloudflare-challenge",
		Wt = ".cf-turnstile",
		Ht = ".cf-challenge",
		Bt = ".g-recaptcha",
		jt = "cf_challenge_response",
		qt = "cf-turnstile-response",
		zt = "g-recaptcha-response",
		Gt = 8e3,
		pt = "private-token",
		Xt = 3,
		Yt = 500,
		Kt = 500;
	var xr = ["ar-eg", "bg-bg", "da-dk", "de-de", "el-gr", "hr-hr", "hu-hu", "ja-jp", "ms-my", "id-id", "ru-ru", "sk-sk", "sl-si", "sr-ba", "uk-ua"],
		wr = ["es-es", "cs-cz", "fa-ir", "fr-fr", "it-it", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr"];

	function vt(e, r) {
		var a = "https://challenges.cloudflare.com";
		if (r) {
			var o;
			a = (o = e["base-url"]) !== null && o !== void 0 ? o : a
		}
		return a
	}

	function mt(e, r, a, o, c, u, g) {
		var _ = vt(a, c),
			p = u ? "h/".concat(u, "/") : "",
			f = g ? "?".concat(g) : "",
			b = a["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(_, "/cdn-cgi/challenge-platform/").concat(p, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(r, "/").concat(a.theme, "/").concat(b, "/").concat(a.size, "/").concat(a.language, "/").concat(f)
	}
	var Qt = function(e) {
		var r, a, o = e.state === xe.FAILURE_FEEDBACK || e.state === xe.FAILURE_HAVING_TROUBLES,
			c, u = L(xr, (c = (r = e.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && c !== void 0 ? c : "nonexistent"),
			g, _ = L(wr, (g = (a = e.displayLanguage) === null || a === void 0 ? void 0 : a.toLowerCase()) !== null && g !== void 0 ? g : "nonexistent");
		return o && u ? "520px" : o && _ ? "500px" : o ? "480px" : u ? "580px" : "560px"
	};

	function De(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function $t(e, r) {
		if (!P(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function ee(e, r) {
		return ee = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, ee(e, r)
	}

	function Jt(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && ee(e, r)
	}

	function Ue() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function we(e, r, a) {
		return Ue() ? we = Reflect.construct : we = function(c, u, g) {
			var _ = [null];
			_.push.apply(_, u);
			var p = Function.bind.apply(c, _),
				f = new p;
			return g && ee(f, g.prototype), f
		}, we.apply(null, arguments)
	}

	function se(e) {
		return se = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, se(e)
	}

	function Zt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Pe(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return Pe = function(o) {
			if (o === null || !Zt(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(o)) return r.get(o);
				r.set(o, c)
			}

			function c() {
				return we(o, arguments, se(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), ee(c, o)
		}, Pe(e)
	}

	function er(e, r) {
		return r && (F(r) === "object" || typeof r == "function") ? r : De(e)
	}

	function tr(e) {
		var r = Ue();
		return function() {
			var o = se(e),
				c;
			if (r) {
				var u = se(this).constructor;
				c = Reflect.construct(o, arguments, u)
			} else c = o.apply(this, arguments);
			return er(this, c)
		}
	}
	var rr = function(e) {
		"use strict";
		Jt(a, e);
		var r = tr(a);

		function a(o, c) {
			$t(this, a);
			var u;
			return u = r.call(this, o), Oe(De(u), "code", void 0), u.name = "TurnstileError", u.code = c, u
		}
		return a
	}(Pe(Error));

	function v(e, r) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new rr(a, r)
	}

	function E(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Ve(e) {
		return e.startsWith(Fe) ? e.substring(Fe.length) : null
	}

	function K(e) {
		return "".concat(Fe).concat(e)
	}

	function gt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (P(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var a = document.querySelectorAll("script"), o = 0, c; c = a[o]; o++)
			if (P(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function ar() {
		var e = gt();
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

	function W() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}
	var _t = function(e, r) {
			var a = vt(r.params, !1),
				o = "h/".concat("b", "/"),
				c, u, g = "".concat(a, "/cdn-cgi/challenge-platform/").concat(o, "feedback-reports/").concat(Ve(e), "/").concat(r.displayLanguage, "/").concat((c = r.params.theme) !== null && c !== void 0 ? c : r.theme);
			r.wrapper.parentNode || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			var _ = document.createElement("div");
			_.style.position = "fixed", _.style.zIndex = "21474836419";
			var p = document.createElement("div");
			p.className = "cf-turnstile-feedback", p.id = "cf-fr-id", p.style.width = "450px", p.style.height = Qt(r), p.style.position = "relative", p.style.zIndex = "21474836420", p.style.backgroundColor = "#ffffff", p.style.borderRadius = "5px", p.style.left = "0px", p.style.top = "0px", p.style.overflow = "hidden";
			var f = document.createElement("iframe");
			f.id = e + "-fr", f.setAttribute("src", g), f.setAttribute("allow", "cross-origin-isolated; fullscreen"), f.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), f.setAttribute("scrolling", "no"), f.style.borderWidth = "0px", f.style.width = "100%", f.style.height = "100%", f.style.overflow = "hidden";
			var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			b.style.position = "absolute", b.style.width = "26px", b.style.height = "26px", b.style.zIndex = "21474836421", b.style.cursor = "pointer", r.displayRTL ? b.style.left = "6px" : b.style.right = "2px", b.style.top = "5px", b.setAttribute("width", "20"), b.setAttribute("height", "20"), b.addEventListener("click", function() {
				var D;
				(D = _.parentNode) === null || D === void 0 || D.removeChild(_)
			});
			var A = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
			A.setAttribute("ry", "12"), A.setAttribute("rx", "12"), A.setAttribute("cy", "12"), A.setAttribute("cx", "12"), A.setAttribute("fill", "none"), A.setAttribute("stroke-width", "0"), b.appendChild(A);
			var S = document.createElementNS("http://www.w3.org/2000/svg", "line");
			S.setAttribute("stroke-width", "1"), S.setAttribute("stroke", "#999"), S.setAttribute("fill", "none"), S.setAttribute("x1", "6"), S.setAttribute("x2", "18"), S.setAttribute("y1", "18"), S.setAttribute("y2", "5"), b.appendChild(S);
			var R = document.createElementNS("http://www.w3.org/2000/svg", "line");
			R.setAttribute("stroke-width", "1"), R.setAttribute("stroke", "#999"), R.setAttribute("fill", "none"), R.setAttribute("x1", "6"), R.setAttribute("x2", "18"), R.setAttribute("y1", "5"), R.setAttribute("y2", "18"), b.appendChild(R), p.appendChild(f), p.appendChild(b), _.appendChild(p), r.wrapper.parentNode.appendChild(_)
		},
		nr = function(e) {
			var r, a, o;
			(o = document.getElementById(e)) === null || o === void 0 || (a = o.parentElement) === null || a === void 0 || (r = a.parentElement) === null || r === void 0 || r.remove()
		};
	var ht = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function ir(e) {
		if (!e) return "-";
		var r = function(a, o) {
			if (!a || a.tagName === "BODY") return o;
			for (var c = 1, u = a.previousElementSibling; u;) u.tagName === a.tagName && c++, u = u.previousElementSibling;
			var g = ht(a.tagName.toLowerCase()),
				_ = "".concat(g, "[").concat(c, "]");
			return r(a.parentNode, "/".concat(_).concat(o))
		};
		return r(e, "")
	}

	function or(e, r, a) {
		for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(A) {
					return c > r || o.length > a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = u.nextNode()) !== null && o.length < a;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var _ = g;
				o += "".concat(ht(_.tagName.toLowerCase()));
				for (var p = 0; p < _.attributes.length; p++) {
					var f = _.attributes[p];
					o += "_".concat(ht(f.name, 2))
				}
				o += ">"
			} else g.nodeType === Node.TEXT_NODE && (o += "-t");
			var b = g.parentNode;
			for (c = 0; b !== e && b !== null;) c++, b = b.parentNode
		}
		return o.substring(0, a)
	}

	function cr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : F(e)));
		for (var r = 5381, a = 0; a < e.length; a++) {
			var o = e.charCodeAt(a);
			r = r * 33 ^ o
		}
		return r >>> 0
	}

	function ur(e, r) {
		var a;
		r.upgradeAttempts++;
		var o = gt();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = r;
			var u = new URL(o.src),
				g = document.createElement("script");
			u.searchParams.set("_upgrade", "true"), u.searchParams.set("_cb", String(Date.now())), g.async = !0, c && (g.nonce = c), g.setAttribute("crossorigin", "anonymous"), g.src = u.toString(), o == null || (a = o.parentNode) === null || a === void 0 || a.replaceChild(g, o)
		}
	}

	function lr(e, r) {
		var a = e._pState;
		return a ? (r.isReady = a.isReady, r.isRecaptchaCompatibilityMode = a.isRecaptchaCompatibilityMode, r.lastWidgetIdx = a.lastWidgetIdx, r.scriptWasLoadedAsync = a.scriptWasLoadedAsync, r.upgradeAttempts = a.upgradeAttempts, r.upgradeCompletedCount = a.upgradeCompletedCount + 1, r.turnstileLoadInitTimeMs = W(), r.watchCatInterval = null, r.watchCatSeq = a.watchCatSeq, r.widgetMap = a.widgetMap, !0) : !1
	}
	var Tr = 900,
		Rr = 3,
		Ar = 50;

	function Ir(e) {
		e.watchCatSeq++;
		var r = !0,
			a = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), u; !(r = (u = c.next()).done); r = !0) {
				var g = be(u.value, 2),
					_ = g[0],
					p = g[1],
					f;
				p.watchcat.seq = e.watchCatSeq, p.watchcat.lastAckedSeq === 0 && (p.watchcat.lastAckedSeq = e.watchCatSeq);
				var b = K(_);
				if (!b || !p.shadow) {
					p.watchcat.missingWidgetWarning || (E("Cannot find Widget ".concat(b, ", consider using turnstile.remove() to clean up a widget.")), p.watchcat.missingWidgetWarning = !0);
					continue
				}
				var A = p.shadow.querySelector("#".concat(b));
				if (!A) {
					p.watchcat.missingWidgetWarning || (E("Cannot find Widget ".concat(b, ", consider using turnstile.remove() to clean up a widget.")), p.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(p.isComplete || p.isFailed)) {
					var S = p.watchcat.seq - 1 - Rr,
						R = p.watchcat.lastAckedSeq < S,
						D = p.watchcat.seq - 1 - Ar,
						O = p.isOverrunning && p.watchcat.overrunBeginSeq < D;
					if ((p.isExecuting || !p.isInitialized || p.isInitialized && !p.isStale && !p.isExecuted) && p.watchcat.lastAckedSeq !== 0 && R || O) {
						var j;
						p.watchcat.lastAckedSeq = 0, p.watchcat.seq = 0, p.isExecuting = !1;
						var y = function(d, s) {
							console.log("Turnstile Widget seem to have ".concat(d, ": "), s)
						};
						R ? y("crashed", _) : O && y("hung", _);
						var n = R ? ke : Le,
							i;
						if ((j = e.msgHandler) === null || j === void 0 || j.call(e, {
								data: {
									source: V,
									widgetId: _,
									code: n,
									event: "fail",
									rcV: (i = p.nextRcV) !== null && i !== void 0 ? i : Y
								}
							}), 0) var t;
						continue
					}(f = A.contentWindow) === null || f === void 0 || f.postMessage({
						source: V,
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

	function yt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Ir(e)
		}, Tr))
	}

	function Et(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}
	var h = {
		turnstileLoadInitTimeMs: W(),
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

	function bt(e) {
		vr(e, "")
	}

	function Tt() {
		var e = [Wt, Ht];
		h.isRecaptchaCompatibilityMode && e.push(Bt), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return Rt.render(r)
		})
	}
	var At = [];

	function sr() {
		h.isReady = !0;
		var e = !0,
			r = !1,
			a = void 0;
		try {
			for (var o = At[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
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

	function vr(e, r) {
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && P(a, HTMLInputElement) && (a.value = r);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && P(o, HTMLInputElement) && (o.value = r), h.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && P(c, HTMLInputElement) && (c.value = r)
		}
	}

	function xt(e, r) {
		var a = r.params,
			o = a.size,
			c = o === void 0 ? "normal" : o,
			u = r.mode;
		switch (u) {
			case B.NON_INTERACTIVE:
			case B.MANAGED:
				switch (c) {
					case k.COMPACT:
						e.style.width = "150px", e.style.height = "140px";
						break;
					case k.INVISIBLE:
						v('Invalid value for parameter "size", expected "'.concat(k.COMPACT, '" or "').concat(k.NORMAL, '", got "').concat(c, '"'), 2817);
					case k.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break;
					case k.FLEXIBLE:
						e.style.width = "100%", e.style.maxWidth = "100vw", e.style.minWidth = "300px", e.style.height = "65px";
						break
				}
				break;
			case B.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(B.NON_INTERACTIVE, '", "').concat(B.MANAGED, '" or "').concat(B.INVISIBLE, '", got "').concat(u, '"'), 2818)
		}
	}

	function dr(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Sr(e, r) {
		var a = r.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Or(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Cr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function fr() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Rt = function() {
		var e = function(n, i, t, d) {
				return R.apply(this, arguments)
			},
			r = function(n, i, t) {
				if (n.params.retry === fe.AUTO || t) {
					n.isExecuted && (n.msgQueue.push(le.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
					var d, s = t ? 0 : 1e3 * 2 + ((d = n.params["retry-interval"]) !== null && d !== void 0 ? d : 0);
					n.retryTimeout = window.setTimeout(function() {
						f(i)
					}, s)
				}
			},
			a = function(n, i, t) {
				var d;
				n.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, vr(i, n.response), (d = n.cbSuccess) === null || d === void 0 || d.call(n, n.response, t)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, t = i.length, d = new Array(t), s = 0; s < t; s++) d[s] = i[s].name;
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
					for (var s = h.widgetMap[Symbol.iterator](), m; !(i = (m = s.next()).done); i = !0) {
						var x = be(m.value, 2),
							w = x[0],
							l = x[1];
						if (l.wrapper.parentElement === n) return w
					}
				} catch (T) {
					t = !0, d = T
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (t) throw d
					}
				}
				return null
			},
			_ = function(n, i, t) {
				for (; n.msgQueue.length;) {
					var d, s = n.msgQueue.pop();
					(d = t.contentWindow) === null || d === void 0 || d.postMessage({
						source: V,
						widgetId: i,
						event: s
					}, "*")
				}
			},
			p = function(n, i) {
				if (i) {
					var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						d = [],
						s = !0,
						m = !1,
						x = void 0;
					try {
						for (var w = t[Symbol.iterator](), l; !(s = (l = w.next()).done); s = !0) {
							var T = l.value;
							i[T] && i[T] !== n.params[T] && d.push(T)
						}
					} catch (M) {
						m = !0, x = M
					} finally {
						try {
							!s && w.return != null && w.return()
						} finally {
							if (m) throw x
						}
					}
					d.length !== 0 && v("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(d.join(",")), 3618), i.action && (nt(i.action) || v('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (it(i.cData) || v('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			f = function(n) {
				var i = O(n);
				i || v("Nothing to reset found for provided container", 3329);
				var t = h.widgetMap.get(i);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isComplete = !1, t.isExecuting = !1, t.isExpired = !1, t.isFailed = !1, t.isInitialized = !1, t.isStale = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === pe.RENDER && (t.msgQueue.push(le.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
					var d = K(i),
						s = t.shadow.querySelector("#".concat(d));
					(!d || !s) && v("Widget ".concat(i, " to reset was not found."), 3330), t.params.appearance === X.INTERACTION_ONLY && dr(s), t.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
					var m;
					s.src = mt(i, t.params.sitekey, t.params, (m = t.rcV) !== null && m !== void 0 ? m : Y, !1, "b", ft(t)), bt(d), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else v("Widget ".concat(i, " to reset was not found."), 3331)
			},
			b = function(n) {
				var i, t = O(n);
				if (!t || !h.widgetMap.has(t)) {
					E("Nothing to remove found for the provided container");
					return
				}
				var d = K(t),
					s = ["input#".concat(d, "_response"), "input#".concat(d, "_legacy_response"), "input#".concat(d, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(w) {
					return w.remove()
				});
				var m = h.widgetMap.get(t);
				m == null || m.shadow.querySelectorAll(s.join(", ")).forEach(function(w) {
					return w.remove()
				}), m == null || m.wrapper.remove();
				var x = (i = h.widgetMap.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				x && window.clearTimeout(x), h.widgetMap.delete(t), Et(h)
			},
			A = function(n, i) {
				var t, d, s = W(),
					m;
				if (typeof n == "string") try {
					var x = document.querySelector(n);
					x || v('Unable to find a container for "'.concat(n, '"'), 3585), m = x
				} catch (Lr) {
					v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
				} else P(n, HTMLElement) ? m = n : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var w = Nr(m);
				if (w) {
					var l = Object.assign(w, i),
						T = l.action,
						M = l.cData,
						q = l.chlPageData,
						U = l.sitekey,
						C;
					l.theme = (C = l.theme) !== null && C !== void 0 ? C : Me.AUTO;
					var te;
					l.retry = (te = l.retry) !== null && te !== void 0 ? te : fe.AUTO;
					var ge;
					l.execution = (ge = l.execution) !== null && ge !== void 0 ? ge : pe.RENDER;
					var re;
					l.appearance = (re = l.appearance) !== null && re !== void 0 ? re : X.ALWAYS;
					var de;
					l["retry-interval"] = Number((de = l["retry-interval"]) !== null && de !== void 0 ? de : Gt);
					var ae;
					l["expiry-interval"] = Number((ae = l["expiry-interval"]) !== null && ae !== void 0 ? ae : (Pt - Vt) * 1e3);
					var ne;
					l.size = (ne = l.size) !== null && ne !== void 0 ? ne : k.NORMAL;
					var Te = l.callback,
						_e = l["expired-callback"],
						je = l["timeout-callback"],
						he = l["after-interactive-callback"],
						qe = l["before-interactive-callback"],
						Q = l["error-callback"],
						ye = l["unsupported-callback"];
					typeof U != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof U == "undefined" ? "undefined" : F(U), '"'), 3588), Dt(U) || v('Invalid input for parameter "sitekey", got "'.concat(U, '"'), 3589), ot(l.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(l.size, '" ').concat(F(l.size)), 3590), et(l.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(l.theme, '" ').concat(F(l.theme)), 3591), tt(l.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(l.retry, '" ').concat(F(l.retry)), 3592), l.language || (l.language = "auto"), lt(l.language) || (E('Invalid language value: "'.concat(l.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")), l.language = "auto"), st(l.appearance) || v('Unknown appearance value: "'.concat(l.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), dt(l.execution) || v('Unknown execution value: "'.concat(l.execution, ", expected either: 'render' or 'execute'."), 3601), rt(l["retry-interval"]) || v('Invalid retry-interval value: "'.concat(l["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), at(l["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(l["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var ie, G = (ie = l["refresh-expired"]) !== null && ie !== void 0 ? ie : Z.AUTO;
					ct(G) ? l["refresh-expired"] = G : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(G, '" ').concat(typeof G == "undefined" ? "undefined" : F(G)), 3603);
					var oe, $ = (oe = l["refresh-timeout"]) !== null && oe !== void 0 ? oe : ue.AUTO;
					ut(G) ? l["refresh-timeout"] = $ : v('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat($, '" ').concat(typeof $ == "undefined" ? "undefined" : F($)), 3603);
					var N = document.createElement("iframe"),
						H = document.createElement("div"),
						Re = H.attachShadow({
							mode: "closed"
						});
					H.style.border = "0", H.style.margin = "0", H.style.padding = "0", nt(T) || v('Invalid input for optional parameter "action", got "'.concat(T, '"'), 3604), it(M) || v('Invalid input for optional parameter "cData", got "'.concat(M, '"'), 3605);
					var ce = u(),
						J = K(ce);
					if (!(!ce || !J)) {
						var Ee = [],
							ze = l.execution === pe.RENDER;
						ze && Ee.push(le.EXECUTE), h.lastWidgetIdx++;
						var mr = {};
						h.widgetMap.set(ce, $e(Ce({
							idx: h.lastWidgetIdx,
							action: T,
							cData: M,
							chlPageData: q,
							cbSuccess: Te,
							cbError: Q,
							cbExpired: _e,
							cbTimeout: je,
							cbUnsupported: ye,
							cbAfterInteractive: he,
							cbBeforeInteractive: qe,
							params: l,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: ze,
							isFailed: !1,
							isResetting: !1,
							isExecuted: ze,
							isInitialized: !1,
							msgQueue: Ee,
							rcV: Y,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0
							}
						}, mr), {
							widgetRenderStartTimeMs: s,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: Re,
							wrapper: H,
							isOverrunning: !1
						})), yt(h);
						var Ge = h.widgetMap.get(ce);
						Ge || v("Turnstile Initialization Error ", 3606), N.style.display = "none", N.style.border = "none", N.style.overflow = "hidden", N.setAttribute("src", mt(ce, U, l, Y, !1, "b", ft(Ge))), N.onerror = function() {
							if (Q) {
								Q == null || Q(String(Mt.code));
								return
							}
							v("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var It = ["cross-origin-isolated", "fullscreen", "autoplay"],
							Xe;
						L((Xe = (d = document.featurePolicy) === null || d === void 0 || (t = d.features) === null || t === void 0 ? void 0 : t.call(d)) !== null && Xe !== void 0 ? Xe : [], pt) && It.push(pt), N.setAttribute("allow", It.join("; ")), N.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), N.id = J;
						var Ye;
						N.tabIndex = (Ye = l.tabindex) !== null && Ye !== void 0 ? Ye : 0, N.title = "Widget containing a Cloudflare security challenge", Re.appendChild(N);
						var Ke, gr = (Ke = l["response-field"]) !== null && Ke !== void 0 ? Ke : !0;
						if (gr) {
							var Ae = document.createElement("input");
							Ae.type = "hidden";
							var Qe;
							if (Ae.name = (Qe = l["response-field-name"]) !== null && Qe !== void 0 ? Qe : qt, Ae.id = "".concat(J, "_response"), H.appendChild(Ae), typeof l["response-field-name"] != "string" && Cr(U)) {
								var Ie = document.createElement("input");
								Ie.type = "hidden", Ie.name = jt, Ie.id = "".concat(J, "_legacy_response"), H.appendChild(Ie)
							}
						}
						if (h.isRecaptchaCompatibilityMode) {
							var Se = document.createElement("input");
							Se.type = "hidden", Se.name = zt, Se.id = "".concat(J, "_g_response"), H.appendChild(Se)
						}
						return m.appendChild(H), Ge.widgetRenderEndTimeMs = W(), J
					}
				}
			},
			S = function() {
				var n, i = -1,
					t = !0,
					d = !1,
					s = void 0;
				try {
					for (var m = h.widgetMap[Symbol.iterator](), x; !(t = (x = m.next()).done); t = !0) {
						var w = be(x.value, 2),
							l = w[0],
							T = w[1];
						i < T.idx && (n = l, i = T.idx)
					}
				} catch (M) {
					d = !0, s = M
				} finally {
					try {
						!t && m.return != null && m.return()
					} finally {
						if (d) throw s
					}
				}
				return i === -1 && v("Could not find widget", 43778), n
			};

		function R() {
			return R = Ot(function(y, n, i, t) {
				var d, s, m, x, w, l, T, M, q, U;
				return Ne(this, function(C) {
					switch (C.label) {
						case 0:
							if (d = y.params.sitekey, s = fr(), !s) return E("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(y, n, !1), [2];
							m = "h/".concat("b", "/"), x = new URL(s), w = "https", l = "", T = "".concat(w, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(m, "rc/").concat(t).concat(l), C.label = 1;
						case 1:
							return C.trys.push([1, 6, , 7]), [4, fetch(T, {
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
							return M = C.sent(), M.status === 200 ? [3, 3] : (E("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), a(y, n, !1), [3, 5]);
						case 3:
							return [4, M.json()];
						case 4:
							if (q = C.sent(), "status" in q && q.status === "redeemed") return a(y, n, !0), [2];
							C.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return U = C.sent(), E("Error contacting Turnstile, aborting clearance remdeption."), a(y, n, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), R.apply(this, arguments)
		}
		var D = function(y) {
			var n = y.data;
			if (n.source === V) {
				if (!Or(y)) {
					E("Ignored message from wrong origin: " + y.origin);
					return
				}
				if (!(!n.widgetId || !h.widgetMap.has(n.widgetId))) {
					var i = K(n.widgetId),
						t = h.widgetMap.get(n.widgetId);
					if (!(!i || !t)) switch (n.event) {
						case "init": {
							var d;
							t.widgetInitStartTimeMs = W();
							var s = t.shadow.getElementById(i);
							s || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), t.mode = n.mode, t.nextRcV = n.nextRcV, t.mode === B.INVISIBLE && t.params["refresh-expired"] === Z.MANUAL && E("refresh-expired=manual is impossible in invisible mode, consider using '".concat(Z.AUTO, "' or '").concat(Z.NEVER, "'")), t.mode !== B.MANAGED && t.params["refresh-timeout"] !== ue.AUTO && E("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), t.params.appearance === X.ALWAYS || t.isExecuting && t.params.appearance === X.EXECUTE ? xt(s, t) : dr(s), s.style.display = "";
							var m = t.shadow.querySelector("#".concat(i));
							m || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (d = m.contentWindow) === null || d === void 0 || d.postMessage({
								source: V,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var x = t.shadow.getElementById(i);
							x || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var w = new Map;
							t.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(Ee) {
								w.set(Ee, n.translationData[Ee])
							}), Sr(x, w);
							break
						}
						case "languageUnsupported": {
							E("Language ".concat(t.params.language, " is not supported, falling back to: ").concat(n.fallback)), t.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var l = t.shadow.getElementById(i);
							if (t.isExecuting = !1, l || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "outdated_browser") {
								var T;
								(T = t.cbUnsupported) === null || T === void 0 || T.call(t)
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
							n.rcV && c(t, n.rcV, n.widgetId), n.cfChlOut && (t.cfChlOut = n.cfChlOut), n.cfChlOutS && (t.cfChlOutS = n.cfChlOutS), n.code && (t.errorCode = n.code), t.isExecuting = !1, t.isFailed = !0, t.isInitialized = !0, bt(i);
							var M = t.cbError,
								q = n.code === ke || n.code === Le;
							if (q) {
								var U, C = t.shadow.querySelector("#".concat(i));
								C == null || (U = C.contentWindow) === null || U === void 0 || U.postMessage({
									source: V,
									widgetId: n.widgetId,
									event: "forceFail"
								}, "*")
							}
							if (M) {
								var te;
								M(String((te = n.code) !== null && te !== void 0 ? te : Ft)) ? t.params.retry === fe.AUTO && !t.isResetting && r(t, i, q) : (n.code && E("Error: ".concat(n.code)), r(t, i, q))
							} else n.code ? (r(t, i, q), v("Error: ".concat(n.code), 3076)) : r(t, i, !1);
							break
						}
						case "feedbackInit": {
							var ge = t.wrapper.querySelector("#".concat(i, "-fr"));
							if (ge) {
								E("A feedback report form is already opened for this widget.");
								return
							}
							_t(i, t);
							break
						}
						case "requestFeedbackData": {
							var re, de = t.shadow.querySelector("#".concat(i));
							de || v("Received state for an unknown widget: #".concat(i, " / ").concat(n.widgetId), 3078), (re = de.contentWindow) === null || re === void 0 || re.postMessage({
								source: V,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var ae, ne, Te = (ae = t.wrapper.parentNode) === null || ae === void 0 ? void 0 : ae.querySelector("#".concat(i, "-fr"));
							Te || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), (ne = Te.contentWindow) === null || ne === void 0 || ne.postMessage({
								source: V,
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
							var _e, je = (_e = t.wrapper.parentNode) === null || _e === void 0 ? void 0 : _e.querySelector("#".concat(i, "-fr"));
							je || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), nr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var he, qe = n.token;
							t.isExpired = !0, (he = t.cbExpired) === null || he === void 0 || he.call(t, qe), t.params["refresh-expired"] === Z.AUTO && !t.isResetting && f(i);
							break
						}
						case "interactiveTimeout": {
							c(t, Y, n.widgetId), bt(i);
							var Q = t.cbTimeout;
							if (Q ? Q() : t.params["refresh-timeout"] === ue.NEVER && !t.isResetting && E("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), t.params["refresh-timeout"] === ue.AUTO && !t.isResetting) {
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
							var ie, G = t.shadow.getElementById(i);
							G || v("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (ie = t.cbBeforeInteractive) === null || ie === void 0 || ie.call(t), t.params.appearance === X.INTERACTION_ONLY && xt(G, t);
							break
						}
						case "interactiveEnd": {
							var oe;
							(oe = t.cbAfterInteractive) === null || oe === void 0 || oe.call(t);
							break
						}
						case "widgetStale": {
							t.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var $;
							t.widgetParamsStartTimeMs = W();
							var N = t.shadow.querySelector("#".concat(i));
							N || v("Received state for an unknown widget: ".concat(n.widgetId), 3078), t.isResetting = !1;
							var H = {},
								Re = W(),
								ce = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: ir(t.wrapper).substring(0, Kt),
										pfp: or(document, Xt, Yt),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: cr(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href,
										sR: t.wrapper.shadowRoot === null
									}
								},
								J = W() - Re;
							($ = N.contentWindow) === null || $ === void 0 || $.postMessage(Ce({
								source: V,
								widgetId: n.widgetId,
								event: "extraParams",
								action: t.action,
								cData: t.cData,
								chlPageData: t.chlPageData,
								rcV: t.rcV,
								ch: "6790c32b9fc9",
								url: fr(),
								retry: t.params.retry,
								"expiry-interval": t.params["expiry-interval"],
								"retry-interval": t.params["retry-interval"],
								"refresh-expired": t.params["refresh-expired"],
								"refresh-timeout": t.params["refresh-timeout"],
								language: t.params.language,
								execution: t.params.execution,
								appearance: t.params.appearance,
								wPr: ce,
								turnstileAgeMs: W() - h.turnstileLoadInitTimeMs,
								widgetAgeMs: W() - t.widgetRenderStartTimeMs,
								upgradeAttempts: h.upgradeAttempts,
								upgradeCompletedCount: h.upgradeCompletedCount,
								timeRenderMs: t.widgetRenderEndTimeMs - t.widgetRenderStartTimeMs,
								timeToInitMs: t.widgetInitStartTimeMs - t.widgetRenderEndTimeMs,
								timeToParamsMs: t.widgetParamsStartTimeMs - t.widgetInitStartTimeMs,
								tiefTimeMs: J
							}, H), "*"), _(t, n.widgetId, N), t.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		h.msgHandler = D, window.addEventListener("message", D);

		function O(y) {
			if (typeof y == "string") {
				var n = Ve(y);
				if (n && h.widgetMap.has(n)) return n;
				if (h.widgetMap.has(y)) return y;
				try {
					var i = document.querySelector(y);
					return i ? O(i) : null
				} catch (t) {
					return null
				}
			}
			return P(y, Element) ? g(y) : y || h.widgetMap.size === 0 ? null : h.widgetMap.keys().next().value
		}
		var j = {};
		return $e(Ce({}, j), {
			ready: function(n) {
				if (h.scriptWasLoadedAsync && (E("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : F(n), '"'), 3841), h.isReady) {
					n();
					return
				}
				At.push(n)
			},
			implicitRender: Tt,
			execute: function(n, i) {
				var t = O(n);
				if (!t) {
					i === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var d = A(n, i);
					d || v("Failed to render widget", 43522), t = d
				}
				var s = h.widgetMap.get(t);
				if (s) {
					p(s, i);
					var m = K(t);
					if (s.isExecuting) {
						E("Call to execute() on a widget that is already executing (".concat(m, "), consider using reset() before execute()"));
						return
					} else s.isExecuting = !0;
					if (s.response) {
						var x;
						s.isExecuting = !1, E("Call to execute() on a widget that was already executed (".concat(m, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), (x = s.cbSuccess) === null || x === void 0 || x.call(s, s.response, !1);
						return
					}
					s.isExpired && E("Call to execute on a expired-widget (".concat(m, "), consider using reset() before")), s.isStale && (f(m), s.isExecuting = !0), s.msgQueue.push(le.EXECUTE), s.isExecuted = !0;
					var w = s.shadow.querySelector("#".concat(m));
					if (w || (s.isExecuting = !1, v("Widget ".concat(m, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && _(s, t, w), s.isInitialized && s.params.appearance === X.EXECUTE && xt(w, s), s.isExecuting) {
						var l, T = s.shadow.querySelector("#".concat(m));
						T || v("Received state for an unknown widget: ".concat(t), 3078), (l = T.contentWindow) === null || l === void 0 || l.postMessage({
							source: V,
							widgetId: t,
							event: "execute"
						}, "*")
					}
				}
			},
			render: A,
			reset: f,
			remove: b,
			_private: {
				showFeedback: function(n) {
					var i = O(n);
					if (i) {
						var t = K(i);
						if (t) {
							var d = h.widgetMap.get(i);
							d && _t(t, d)
						}
					}
				}
			},
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var t = S();
					if (t) {
						var d, s = h.widgetMap.get(t);
						return s != null && s.isExpired && E("Call to getResponse on a widget that expired, consider refreshing the widget."), (d = h.widgetMap.get(t)) === null || d === void 0 ? void 0 : d.response
					} else v("Could not find a widget", 43794)
				}
				var m = O(n);
				return m || v("Could not find widget for provided container", 43778), (i = h.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var t = S();
					if (t) {
						var d, s;
						return (s = (d = h.widgetMap.get(t)) === null || d === void 0 ? void 0 : d.isExpired) !== null && s !== void 0 ? s : !1
					} else v("Could not find a widget", 43794)
				}
				var m = O(n);
				m || v("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = h.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			}
		})
	}();

	function Nr(e) {
		var r = e.getAttribute("data-sitekey"),
			a = {
				sitekey: r
			},
			o = e.getAttribute("data-tabindex");
		o && (a.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (et(c) ? a.theme = c : E('Unknown data-theme value: "'.concat(c, '"')));
		var u = e.getAttribute("data-size");
		if (u && (ot(u) ? a.size = u : E('Unknown data-size value: "'.concat(u, '"'))), 0) var g;
		var _ = e.getAttribute("data-action");
		typeof _ == "string" && (a.action = _);
		var p = e.getAttribute("data-cdata");
		typeof p == "string" && (a.cData = p);
		var f = e.getAttribute("data-retry");
		f && (tt(f) ? a.retry = f : E('Invalid data-retry value: "'.concat(f, ", expected either 'never' or 'auto'\"")));
		var b = e.getAttribute("data-retry-interval");
		if (b) {
			var A = Number.parseInt(b, 10);
			rt(A) ? a["retry-interval"] = A : E('Invalid data-retry-interval value: "'.concat(b, ', expected an integer value > 0 and < 900000"'))
		}
		var S = e.getAttribute("data-expiry-interval");
		if (S) {
			var R = Number.parseInt(S, 10);
			at(R) ? a["expiry-interval"] = R : E('Invalid data-expiry-interval value: "'.concat(R, ', expected an integer value > 0 and < 360000"'))
		}
		var D = e.getAttribute("data-refresh-expired");
		D && (ct(D) ? a["refresh-expired"] = D : E('Unknown data-refresh-expired value: "'.concat(D, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-refresh-timeout");
		O && (ut(O) ? a["refresh-timeout"] = O : E('Unknown data-refresh-timeout value: "'.concat(O, ", expected either: 'never', 'auto' or 'manual'.")));
		var j = e.getAttribute("data-language");
		j && (lt(j) ? a.language = j : E('Invalid data-language value: "'.concat(j, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function y(w) {
			var l = e.getAttribute(w);
			return l && window[l] ? window[l] : void 0
		}
		var n = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		n.forEach(function(w) {
			a[w] = y("data-".concat(w))
		});
		var i = e.getAttribute("data-feedback-enabled");
		i ? (Ut(i) || E('Invalid data-feedback-enabled value: "'.concat(i, ", expected either: 'true' or 'false'. Value is ignored.")), a["feedback-enabled"] = i === "true") : a["feedback-enabled"] = !0;
		var t, d = (t = e.getAttribute("data-response-field")) !== null && t !== void 0 ? t : "true";
		a["response-field"] = d === "true";
		var s = e.getAttribute("data-response-field-name");
		s && (a["response-field-name"] = s);
		var m = e.getAttribute("data-execution");
		m && (dt(m) ? a.execution = m : E('Unknown data-execution value: "'.concat(m, ", expected either: 'render' or 'execute'.")));
		var x = e.getAttribute("data-appearance");
		return x && (st(x) ? a.appearance = x : E('Unknown data-appearance value: "'.concat(x, ", expected either: 'always', 'execute', or 'interaction-only'."))), a
	}

	function kr() {
		var e = !0;
		Et(h, e), h.msgHandler && window.removeEventListener("message", h.msgHandler), ur(window.turnstile, h)
	}
	ve = !1, I = ar(), h.scriptWasLoadedAsync = (We = I == null ? void 0 : I.loadedAsync) !== null && We !== void 0 ? We : !1, I != null && I.params && (me = I.params.get("compat"), (me == null ? void 0 : me.toLowerCase()) === "recaptcha" ? window.grecaptcha ? E("grecaptcha is already defined. The compatibility layer will not be enabled") : (E("Compatibility layer enabled"), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = Rt) : me !== null && E('Unknown value for api.js?compat: "'.concat(me, '", ignoring')), I.params.forEach(function(e, r) {
		L(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], r) || E('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring'))
	}), ve = I.params.get("_upgrade") === "true", z = I.params.get("onload"), z && !ve && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (E("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(F(window[z]), "'")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : E("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(F(window[z]), "'"))
		}, 1e3))
	}, 0)), wt = "turnstile" in window, wt && !ve ? E("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (wt && ve && (lr(window.turnstile, h), yt(h), (I == null || (He = I.params) === null || He === void 0 ? void 0 : He.get("render")) !== "explicit" && setTimeout(Tt, 0)), window.turnstile = Rt, ve || ((I == null || (Be = I.params) === null || Be === void 0 ? void 0 : Be.get("render")) !== "explicit" && At.push(Tt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(sr, 0) : window.addEventListener("DOMContentLoaded", sr))), pr = 24 * 60 * 60 * 1e3, window.setTimeout(kr, pr);
	var ve, I, We, me, z, wt, He, Be, pr;
})();