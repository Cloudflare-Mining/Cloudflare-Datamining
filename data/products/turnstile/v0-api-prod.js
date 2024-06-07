"use strict";
(function() {
	function Et(e, a, r, o, c, u, g) {
		try {
			var b = e[u](g),
				_ = b.value
		} catch (l) {
			r(l);
			return
		}
		b.done ? a(_) : Promise.resolve(_).then(o, c)
	}

	function wt(e) {
		return function() {
			var a = this,
				r = arguments;
			return new Promise(function(o, c) {
				var u = e.apply(a, r);

				function g(_) {
					Et(u, o, c, g, b, "next", _)
				}

				function b(_) {
					Et(u, o, c, g, b, "throw", _)
				}
				g(void 0)
			})
		}
	}

	function M(e, a) {
		return a != null && typeof Symbol != "undefined" && a[Symbol.hasInstance] ? !!a[Symbol.hasInstance](e) : M(e, a)
	}

	function Re(e, a, r) {
		return a in e ? Object.defineProperty(e, a, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[a] = r, e
	}

	function Be(e) {
		for (var a = 1; a < arguments.length; a++) {
			var r = arguments[a] != null ? arguments[a] : {},
				o = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
				return Object.getOwnPropertyDescriptor(r, c).enumerable
			}))), o.forEach(function(c) {
				Re(e, c, r[c])
			})
		}
		return e
	}

	function dr(e, a) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			a && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), r.push.apply(r, o)
		}
		return r
	}

	function Tt(e, a) {
		return a = a != null ? a : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : dr(Object(a)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r))
		}), e
	}

	function St(e) {
		if (Array.isArray(e)) return e
	}

	function It(e, a) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var o = [],
				c = !0,
				u = !1,
				g, b;
			try {
				for (r = r.call(e); !(c = (g = r.next()).done) && (o.push(g.value), !(a && o.length === a)); c = !0);
			} catch (_) {
				u = !0, b = _
			} finally {
				try {
					!c && r.return != null && r.return()
				} finally {
					if (u) throw b
				}
			}
			return o
		}
	}

	function At() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Ge(e, a) {
		(a == null || a > e.length) && (a = e.length);
		for (var r = 0, o = new Array(a); r < a; r++) o[r] = e[r];
		return o
	}

	function Rt(e, a) {
		if (e) {
			if (typeof e == "string") return Ge(e, a);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ge(e, a)
		}
	}

	function Oe(e, a) {
		return St(e) || It(e, a) || Rt(e, a) || At()
	}

	function C(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ce(e, a) {
		var r = {
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
			next: b(0),
			throw: b(1),
			return: b(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function b(l) {
			return function(h) {
				return _([l, h])
			}
		}

		function _(l) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, l[0] && (r = 0)), r;) try {
				if (o = 1, c && (u = l[0] & 2 ? c.return : l[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, l[1])).done) return u;
				switch (c = 0, u && (l = [l[0] & 2, u.value]), l[0]) {
					case 0:
					case 1:
						u = l;
						break;
					case 4:
						return r.label++, {
							value: l[1],
							done: !1
						};
					case 5:
						r.label++, c = l[1], l = [0];
						continue;
					case 7:
						l = r.ops.pop(), r.trys.pop();
						continue;
					default:
						if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (l[0] === 6 || l[0] === 2)) {
							r = 0;
							continue
						}
						if (l[0] === 3 && (!u || l[1] > u[0] && l[1] < u[3])) {
							r.label = l[1];
							break
						}
						if (l[0] === 6 && r.label < u[1]) {
							r.label = u[1], u = l;
							break
						}
						if (u && r.label < u[2]) {
							r.label = u[2], r.ops.push(l);
							break
						}
						u[2] && r.ops.pop(), r.trys.pop();
						continue
				}
				l = a.call(e, r)
			} catch (h) {
				l = [6, h], c = 0
			} finally {
				o = u = 0
			}
			if (l[0] & 5) throw l[1];
			return {
				value: l[0] ? l[1] : void 0,
				done: !0
			}
		}
	}
	var Ot = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Ct = 300020;
	var Ne = 300030;
	var U;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(U || (U = {}));
	var V;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(V || (V = {}));
	var ke;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(ke || (ke = {}));
	var xe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(xe || (xe = {}));
	var X;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(X || (X = {}));
	var Z;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(Z || (Z = {}));
	var q;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(q || (q = {}));
	var ue;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(ue || (ue = {}));
	var ee;
	(function(e) {
		e.EXECUTE = "execute"
	})(ee || (ee = {}));
	var Xe;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Xe || (Xe = {}));

	function N(e, a) {
		return e.indexOf(a) !== -1
	}

	function Ye(e) {
		return N(["auto", "dark", "light"], e)
	}

	function Qe(e) {
		return N(["auto", "never"], e)
	}

	function Ke(e) {
		return e > 0 && e < 9e5
	}

	function $e(e) {
		return e > 0 && e < 36e4
	}
	var pr = /^[0-9A-Za-z_-]{3,100}$/;

	function Nt(e) {
		return pr.test(e)
	}
	var vr = /^[a-z0-9_-]{0,32}$/i;

	function Je(e) {
		return e === void 0 ? !0 : typeof e == "string" && vr.test(e)
	}
	var mr = /^[a-z0-9_\-=]{0,255}$/i;

	function Ze(e) {
		return e === void 0 ? !0 : typeof e == "string" && mr.test(e)
	}

	function et(e) {
		return N(["normal", "compact", "invisible"], e)
	}

	function tt(e) {
		return N(["auto", "manual", "never"], e)
	}

	function rt(e) {
		return N(["auto", "manual", "never"], e)
	}
	var gr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function nt(e) {
		return e === "auto" || gr.test(e)
	}

	function at(e) {
		return N(["always", "execute", "interaction-only"], e)
	}

	function it(e) {
		return N(["render", "execute"], e)
	}
	var kt = 300,
		Lt = 10;
	var j = "0/0";

	function ot(e) {
		var a = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && a.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && a.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), a.size !== 0) return a.toString()
	}
	var le = "cf-chl-widget-",
		P = "cloudflare-challenge",
		Mt = ".cf-turnstile",
		Pt = ".cf-challenge",
		Dt = ".g-recaptcha",
		Ft = "cf_challenge_response",
		Wt = "cf-turnstile-response",
		Ut = "g-recaptcha-response",
		jt = 8e3,
		ct = "private-token",
		zt = 3,
		Ht = 500,
		Vt = 500;

	function ut(e, a) {
		var r = "https://challenges.cloudflare.com";
		if (a) {
			var o;
			r = (o = e["base-url"]) !== null && o !== void 0 ? o : r
		}
		return r
	}

	function lt(e, a, r, o, c, u, g) {
		var b = ut(r, c),
			_ = u ? "h/".concat(u, "/") : "",
			l = g ? "?".concat(g) : "";
		return "".concat(b, "/cdn-cgi/challenge-platform/").concat(_, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(a, "/").concat(r.theme, "/").concat(r.size).concat(l)
	}

	function Le(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function qt(e, a) {
		if (!M(e, a)) throw new TypeError("Cannot call a class as a function")
	}

	function Y(e, a) {
		return Y = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, Y(e, a)
	}

	function Bt(e, a) {
		if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(a && a.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), a && Y(e, a)
	}

	function Me() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function be(e, a, r) {
		return Me() ? be = Reflect.construct : be = function(c, u, g) {
			var b = [null];
			b.push.apply(b, u);
			var _ = Function.bind.apply(c, b),
				l = new _;
			return g && Y(l, g.prototype), l
		}, be.apply(null, arguments)
	}

	function te(e) {
		return te = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, te(e)
	}

	function Gt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Pe(e) {
		var a = typeof Map == "function" ? new Map : void 0;
		return Pe = function(o) {
			if (o === null || !Gt(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof a != "undefined") {
				if (a.has(o)) return a.get(o);
				a.set(o, c)
			}

			function c() {
				return be(o, arguments, te(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), Y(c, o)
		}, Pe(e)
	}

	function Xt(e, a) {
		return a && (C(a) === "object" || typeof a == "function") ? a : Le(e)
	}

	function Yt(e) {
		var a = Me();
		return function() {
			var o = te(e),
				c;
			if (a) {
				var u = te(this).constructor;
				c = Reflect.construct(o, arguments, u)
			} else c = o.apply(this, arguments);
			return Xt(this, c)
		}
	}
	var Qt = function(e) {
		"use strict";
		Bt(r, e);
		var a = Yt(r);

		function r(o, c) {
			qt(this, r);
			var u;
			return u = a.call(this, o), Re(Le(u), "code", void 0), u.name = "TurnstileError", u.code = c, u
		}
		return r
	}(Pe(Error));

	function p(e, a) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Qt(r, a)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Ee(e) {
		return e.startsWith(le) ? e.substring(le.length) : null
	}

	function Q(e) {
		return "".concat(le).concat(e)
	}

	function st() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			a = document.currentScript;
		if (M(a, HTMLScriptElement) && e.test(a.src)) return a;
		for (var r = document.querySelectorAll("script"), o = 0, c; c = r[o]; o++)
			if (M(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function Kt() {
		var e = st();
		e || p("Could not find Turnstile script tag, some features may not be available", 43777);
		var a = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (a.loadedAsync = !0);
		var r = e.src,
			o = r.split("?");
		return o.length > 1 && (a.params = new URLSearchParams(o[1])), a
	}

	function D() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}

	function $t(e, a) {
		var r, o, c, u = ut(a.params, K),
			g = "h/".concat("g", "/"),
			b = "".concat(u, "/cdn-cgi/challenge-platform/").concat(g, "feedback-reports/").concat(Ee(e), "/").concat(a.displayLanguage, "/"),
			_ = document.getElementById(e);
		_ || p("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
		var l = document.createElement("div");
		l.style.position = "fixed", l.style.zIndex = "21474836419";
		var h = document.createElement("div");
		h.className = "cf-turnstile-feedback", h.id = "cf-fr-id", h.style.borderColor = "#000000", h.style.width = "450px";
		var k = ["ar-eg", "bg-bg", "da-dk", "de-de", "el-gr", "hr-hr", "hu-hu", "ja-jp", "ms-my", "id-id", "ru-ru", "sk-sk", "sl-si", "sr-ba", "uk-ua"],
			F = ["es-es", "cs-cz", "fa-ir", "fr-fr", "it-it", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr"],
			R, S;
		N(k, (R = (r = a.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && R !== void 0 ? R : "nonexistent") ? h.style.height = "520px" : N(F, (S = (o = a.displayLanguage) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && S !== void 0 ? S : "nonexistent") ? h.style.height = "480px" : h.style.height = "460px", h.style.position = "absolute", h.style.zIndex = "21474836420", h.style.borderWidth = "1px", h.style.borderColor = "#000", h.style.borderStyle = "solid", h.style.backgroundColor = "#ffffff", h.style.borderRadius = "10px", h.style.left = "-122px", h.style.top = "-91px", h.style.overflow = "hidden";
		var v = document.createElement("iframe");
		v.id = e + "-fr", v.setAttribute("src", b), v.setAttribute("allow", "cross-origin-isolated; fullscreen"), v.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), v.setAttribute("scrolling", "no"), v.style.borderWidth = "0px", v.style.width = "100%", v.style.height = "100%", v.style.overflow = "hidden";
		var n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		n.style.position = "absolute", n.style.width = "26px", n.style.height = "26px", n.style.zIndex = "21474836421", n.style.cursor = "pointer", a.displayRTL ? n.style.left = "6px" : n.style.right = "2px", n.style.top = "5px", n.setAttribute("width", "26"), n.setAttribute("height", "26"), n.addEventListener("click", function() {
			var d;
			(d = l.parentNode) === null || d === void 0 || d.removeChild(l)
		});
		var i = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		i.setAttribute("ry", "12"), i.setAttribute("rx", "12"), i.setAttribute("cy", "12"), i.setAttribute("cx", "12"), i.setAttribute("fill", "#aaaaaa"), i.setAttribute("stroke-width", "0"), n.appendChild(i);
		var t = document.createElementNS("http://www.w3.org/2000/svg", "line");
		t.setAttribute("stroke-width", "3"), t.setAttribute("stroke", "#fff"), t.setAttribute("fill", "none"), t.setAttribute("x1", "6"), t.setAttribute("x2", "18"), t.setAttribute("y1", "18"), t.setAttribute("y2", "5"), n.appendChild(t);
		var f = document.createElementNS("http://www.w3.org/2000/svg", "line");
		f.setAttribute("stroke-width", "3"), f.setAttribute("stroke", "#fff"), f.setAttribute("fill", "none"), f.setAttribute("x1", "6"), f.setAttribute("x2", "18"), f.setAttribute("y1", "5"), f.setAttribute("y2", "18"), n.appendChild(f), h.appendChild(v), h.appendChild(n), l.appendChild(h), (c = _.parentNode) === null || c === void 0 || c.appendChild(l)
	}

	function Jt(e) {
		var a, r, o;
		(o = document.getElementById(e)) === null || o === void 0 || (r = o.parentElement) === null || r === void 0 || (a = r.parentElement) === null || a === void 0 || a.remove()
	}
	var ft = function(e) {
		var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > a ? e.substring(0, a) : e
	};

	function Zt(e) {
		var a = function(r, o) {
			if (!r || r.tagName === "BODY") return o;
			for (var c = 1, u = r.previousElementSibling; u;) u.tagName === r.tagName && c++, u = u.previousElementSibling;
			var g = ft(r.tagName.toLowerCase()),
				b = "".concat(g, "[").concat(c, "]");
			return a(r.parentNode, "/".concat(b).concat(o))
		};
		return a(e, "")
	}

	function er(e, a, r) {
		for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(k) {
					return c > a || o.length > r ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = u.nextNode()) !== null && o.length < r;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var b = g;
				o += "".concat(ft(b.tagName.toLowerCase()));
				for (var _ = 0; _ < b.attributes.length; _++) {
					var l = b.attributes[_];
					o += "_".concat(ft(l.name, 2))
				}
				o += ">"
			} else g.nodeType === Node.TEXT_NODE && (o += "-t");
			var h = g.parentNode;
			for (c = 0; h !== e && h !== null;) c++, h = h.parentNode
		}
		return o.substring(0, r)
	}

	function tr(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : C(e)));
		for (var a = 5381, r = 0; r < e.length; r++) {
			var o = e.charCodeAt(r);
			a = a * 33 ^ o
		}
		return a >>> 0
	}

	function rr(e, a) {
		var r;
		a.upgradeAttempts++;
		var o = st();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = a;
			var u = new URL(o.src),
				g = document.createElement("script");
			u.searchParams.set("_upgrade", "true"), u.searchParams.set("_cb", String(Date.now())), g.async = !0, c && (g.nonce = c), g.setAttribute("crossorigin", "anonymous"), g.src = u.toString(), o == null || (r = o.parentNode) === null || r === void 0 || r.replaceChild(g, o)
		}
	}

	function nr(e, a) {
		var r = e._pState;
		return r ? (a.isReady = r.isReady, a.isRecaptchaCompatibilityMode = r.isRecaptchaCompatibilityMode, a.lastWidgetIdx = r.lastWidgetIdx, a.scriptWasLoadedAsync = r.scriptWasLoadedAsync, a.upgradeAttempts = r.upgradeAttempts, a.upgradeCount = r.upgradeCount + 1, a.turnstileLoadInitTimeMs = D(), a.watchCatInterval = null, a.watchCatSeq = r.watchCatSeq, a.widgetMap = r.widgetMap, !0) : !1
	}
	var yr = 900,
		hr = 3;

	function _r(e, a) {
		e.watchCatSeq++;
		var r = !0,
			o = !1,
			c = void 0;
		try {
			for (var u = e.widgetMap[Symbol.iterator](), g; !(r = (g = u.next()).done); r = !0) {
				var b = Oe(g.value, 2),
					_ = b[0],
					l = b[1],
					h;
				l.watchcat.seq = e.watchCatSeq, l.watchcat.lastAckedSeq === 0 && (l.watchcat.lastAckedSeq = e.watchCatSeq);
				var k = Q(_);
				if (!k) {
					l.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(k, ", consider using turnstile.remove() to clean up a widget.")), l.watchcat.missingWidgetWarning = !0);
					continue
				}
				var F = document.querySelector("#".concat(k));
				if (!F) {
					l.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(k, ", consider using turnstile.remove() to clean up a widget.")), l.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(l.isComplete || l.isFailed)) {
					if ((l.isExecuting || !l.isInitialized || l.isInitialized && !l.isStale && !l.isExecuted) && l.watchcat.lastAckedSeq !== 0 && l.watchcat.lastAckedSeq < l.watchcat.seq - 1 - hr) {
						var R;
						l.watchcat.lastAckedSeq = 0, l.watchcat.seq = 0, l.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", _);
						var S;
						if ((R = e.msgHandler) === null || R === void 0 || R.call(e, {
								data: {
									source: P,
									widgetId: _,
									code: Ne,
									event: "fail",
									rcV: (S = l.rcV) !== null && S !== void 0 ? S : j
								}
							}), a) {
							var v;
							window.postMessage({
								source: P,
								widgetId: _,
								event: "rcv-update",
								rcV: (v = l.rcV) !== null && v !== void 0 ? v : j
							}, "*")
						}
						continue
					}(h = F.contentWindow) === null || h === void 0 || h.postMessage({
						source: P,
						widgetId: _,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (n) {
			o = !0, c = n
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (o) throw c
			}
		}
	}

	function dt(e, a) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			_r(e, a)
		}, yr))
	}

	function pt(e) {
		var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || a) && clearInterval(e.watchCatInterval)
	}
	var K = !1,
		y = {
			turnstileLoadInitTimeMs: D(),
			isRecaptchaCompatibilityMode: !1,
			scriptWasLoadedAsync: !1,
			isReady: !1,
			widgetMap: new Map,
			lastWidgetIdx: 0,
			upgradeAttempts: 0,
			upgradeCount: 0,
			apiVersion: 1,
			watchCatInterval: null,
			watchCatSeq: 0
		};

	function vt(e) {
		lr(e, "")
	}

	function yt() {
		var e = [Mt, Pt];
		y.isRecaptchaCompatibilityMode && e.push(Dt), document.querySelectorAll(e.join(", ")).forEach(function(a) {
			return ht.render(a)
		})
	}
	var _t = [];

	function ar() {
		y.isReady = !0;
		var e = !0,
			a = !1,
			r = void 0;
		try {
			for (var o = _t[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var u = c.value;
				u()
			}
		} catch (g) {
			a = !0, r = g
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (a) throw r
			}
		}
	}

	function lr(e, a) {
		var r = document.getElementById("".concat(e, "_response"));
		r !== null && M(r, HTMLInputElement) && (r.value = a);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && M(o, HTMLInputElement) && (o.value = a), y.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && M(c, HTMLInputElement) && (c.value = a)
		}
	}

	function mt(e, a) {
		var r = a.params,
			o = r.size,
			c = o === void 0 ? "normal" : o,
			u = a.mode;
		switch (u) {
			case U.NON_INTERACTIVE:
			case U.MANAGED:
				switch (c) {
					case V.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case V.INVISIBLE:
						p('Invalid value for parameter "size", expected "'.concat(V.COMPACT, '" or "').concat(V.NORMAL, '", got "').concat(c, '"'), 2817);
					case V.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case U.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				p('Invalid value for parameter "mode", expected "'.concat(U.NON_INTERACTIVE, '", "').concat(U.MANAGED, '" or "').concat(U.INVISIBLE, '", got "').concat(u, '"'), 2818)
		}
	}

	function ir(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function xr(e, a) {
		var r = a.get("turnstile_iframe_alt");
		r && (e.title = r)
	}

	function br(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Er(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function or() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var ht = function() {
		var e = function(n, i, t, f) {
				return F.apply(this, arguments)
			},
			a = function(n, i, t) {
				if (n.params.retry === xe.AUTO || t) {
					n.isExecuted && (n.msgQueue.push(ee.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
					var f, d = t ? 0 : 1e3 * 2 + ((f = n.params["retry-interval"]) !== null && f !== void 0 ? f : 0);
					n.retryTimeout = window.setTimeout(function() {
						_(i)
					}, d)
				}
			},
			r = function(n, i, t) {
				var f;
				n.response === void 0 && p("[Internal Error] Widget was completed but no response was given", 1362), n.isExecuting = !1, n.isComplete = !0, lr(i, n.response), (f = n.cbSuccess) === null || f === void 0 || f.call(n, n.response, t)
			},
			o = function(n) {
				if (!n) return [];
				for (var i = n.attributes, t = i.length, f = new Array(t), d = 0; d < t; d++) f[d] = i[d].name;
				return f
			},
			c = function(n, i, t) {
				if (n.rcV = i, K) {
					var f;
					window.postMessage({
						source: P,
						widgetId: t,
						event: "rcv-update",
						rcV: (f = n.rcV) !== null && f !== void 0 ? f : j
					}, "*")
				}
			},
			u = function() {
				var n = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = n.length,
					t;
				do {
					t = "";
					for (var f = 0; f < 5; f++) t += n.charAt(Math.floor(Math.random() * i))
				} while (y.widgetMap.has(t));
				return t
			},
			g = function(n, i, t) {
				for (; n.msgQueue.length;) {
					var f, d = n.msgQueue.pop();
					(f = t.contentWindow) === null || f === void 0 || f.postMessage({
						source: P,
						widgetId: i,
						event: d
					}, "*")
				}
			},
			b = function(n, i) {
				if (i) {
					var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						f = [],
						d = !0,
						m = !1,
						E = void 0;
					try {
						for (var T = t[Symbol.iterator](), s; !(d = (s = T.next()).done); d = !0) {
							var w = s.value;
							i[w] && i[w] !== n.params[w] && f.push(w)
						}
					} catch (O) {
						m = !0, E = O
					} finally {
						try {
							!d && T.return != null && T.return()
						} finally {
							if (m) throw E
						}
					}
					f.length !== 0 && p("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(f.join(",")), 3618), i.action && (Je(i.action) || p('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), n.action = i.action), i.cData && (Ze(i.cData) || p('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), n.cData = i.cData), i["after-interactive-callback"] && (n.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (n.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (n.cbSuccess = i.callback), i["expired-callback"] && (n.cbExpired = i["expired-callback"]), i["timeout-callback"] && (n.cbTimeout = i["timeout-callback"]), i["error-callback"] && (n.cbError = i["error-callback"]), i["unsupported-callback"] && (n.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (n.chlPageData = i.chlPageData)
				}
			},
			_ = function(n) {
				var i = S(n);
				i || p("Nothing to reset found for provided container", 3329);
				var t = y.widgetMap.get(i);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isComplete = !1, t.isExecuting = !1, t.isExpired = !1, t.isFailed = !1, t.isInitialized = !1, t.isStale = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === ue.RENDER && (t.msgQueue.push(ee.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
					var f = Q(i),
						d = document.querySelector("#".concat(f));
					(!f || !d) && p("Widget ".concat(i, " to reset was not found."), 3330), t.params.appearance === q.INTERACTION_ONLY && ir(d), t.params.sitekey === null && p("Unexpected Error: Sitekey is null", 3347);
					var m;
					d.src = lt(i, t.params.sitekey, t.params, (m = t.rcV) !== null && m !== void 0 ? m : j, K, "g", ot(t)), vt(f), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else p("Widget ".concat(i, " to reset was not found."), 3331)
			},
			l = function(n) {
				var i, t = S(n);
				if (!t || !y.widgetMap.has(t)) {
					x("Nothing to remove found for the provided container");
					return
				}
				var f = Q(t),
					d = ["iframe#".concat(f), "input#".concat(f, "_response"), "input#".concat(f, "_legacy_response"), "input#".concat(f, "_g_response")];
				document.querySelectorAll(d.join(", ")).forEach(function(E) {
					return E.remove()
				});
				var m = (i = y.widgetMap.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				m && window.clearTimeout(m), y.widgetMap.delete(t), pt(y)
			},
			h = function(n, i) {
				var t, f, d = D(),
					m;
				if (typeof n == "string") try {
					var E = document.querySelector(n);
					E || p('Unable to find a container for "'.concat(n, '"'), 3585), m = E
				} catch (Tr) {
					p('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(n, '"'), 3586)
				} else M(n, HTMLElement) ? m = n : p('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var T = wr(m);
				if (T) {
					var s = Object.assign(T, i),
						w = s.action,
						O = s.cData,
						B = s.chlPageData,
						L = s.sitekey,
						A;
					s.theme = (A = s.theme) !== null && A !== void 0 ? A : ke.AUTO;
					var re;
					s.retry = (re = s.retry) !== null && re !== void 0 ? re : xe.AUTO;
					var $;
					s.execution = ($ = s.execution) !== null && $ !== void 0 ? $ : ue.RENDER;
					var ne;
					s.appearance = (ne = s.appearance) !== null && ne !== void 0 ? ne : q.ALWAYS;
					var de;
					s["retry-interval"] = Number((de = s["retry-interval"]) !== null && de !== void 0 ? de : jt);
					var J;
					s["expiry-interval"] = Number((J = s["expiry-interval"]) !== null && J !== void 0 ? J : (kt - Lt) * 1e3);
					var pe;
					s.size = (pe = s.size) !== null && pe !== void 0 ? pe : V.NORMAL;
					var we = s.callback,
						ve = s["expired-callback"],
						me = s["timeout-callback"],
						Te = s["after-interactive-callback"],
						ge = s["before-interactive-callback"],
						H = s["error-callback"],
						ae = s["unsupported-callback"];
					typeof L != "string" && p('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof L == "undefined" ? "undefined" : C(L), '"'), 3588), Nt(L) || p('Invalid input for parameter "sitekey", got "'.concat(L, '"'), 3589), et(s.size) || p('Invalid type for parameter "size", expected normal|compact, got "'.concat(s.size, '" ').concat(C(s.size)), 3590), Ye(s.theme) || p('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(s.theme, '" ').concat(C(s.theme)), 3591), Qe(s.retry) || p('Invalid type for parameter "retry", expected never|auto, got "'.concat(s.retry, '" ').concat(C(s.retry)), 3592), s.language || (s.language = "auto"), nt(s.language) || (x('Invalid language value: "'.concat(s.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")), s.language = "auto"), at(s.appearance) || p('Unknown appearance value: "'.concat(s.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), it(s.execution) || p('Unknown execution value: "'.concat(s.execution, ", expected either: 'render' or 'execute'."), 3601), Ke(s["retry-interval"]) || p('Invalid retry-interval value: "'.concat(s["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), $e(s["expiry-interval"]) || p('Invalid expiry-interval value: "'.concat(s["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var ye, G = (ye = s["refresh-expired"]) !== null && ye !== void 0 ? ye : X.AUTO;
					tt(G) ? s["refresh-expired"] = G : p('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(G, '" ').concat(typeof G == "undefined" ? "undefined" : C(G)), 3603);
					var he, ie = (he = s["refresh-timeout"]) !== null && he !== void 0 ? he : Z.AUTO;
					rt(G) ? s["refresh-timeout"] = ie : p('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(ie, '" ').concat(typeof ie == "undefined" ? "undefined" : C(ie)), 3603);
					var oe = m.getElementsByTagName("iframe")[0];
					oe != null && oe.id.startsWith(le) && l(m);
					var W = document.createElement("iframe");
					Je(w) || p('Invalid input for optional parameter "action", got "'.concat(w, '"'), 3604), Ze(O) || p('Invalid input for optional parameter "cData", got "'.concat(O, '"'), 3605);
					var _e = u(),
						ce = Q(_e);
					if (!(!_e || !ce)) {
						var xt = [],
							Ue = s.execution === ue.RENDER;
						Ue && xt.push(ee.EXECUTE), y.lastWidgetIdx++;
						var sr = {};
						y.widgetMap.set(_e, Tt(Be({
							idx: y.lastWidgetIdx,
							action: w,
							cData: O,
							chlPageData: B,
							cbSuccess: we,
							cbError: H,
							cbExpired: ve,
							cbTimeout: me,
							cbUnsupported: ae,
							cbAfterInteractive: Te,
							cbBeforeInteractive: ge,
							params: s,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: Ue,
							isFailed: !1,
							isResetting: !1,
							isExecuted: Ue,
							isInitialized: !1,
							msgQueue: xt,
							rcV: j,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1
							}
						}, sr), {
							widgetRenderStartTimeMs: d,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0
						})), dt(y, K);
						var je = y.widgetMap.get(_e);
						je || p("Turnstile Initialization Error ", 3606), W.style.display = "none", W.style.border = "none", W.style.overflow = "hidden", W.setAttribute("src", lt(_e, L, s, j, K, "g", ot(je))), W.onerror = function() {
							if (H) {
								H == null || H(String(Ot.code));
								return
							}
							p("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var bt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							ze;
						N((ze = (f = document.featurePolicy) === null || f === void 0 || (t = f.features) === null || t === void 0 ? void 0 : t.call(f)) !== null && ze !== void 0 ? ze : [], ct) && bt.push(ct), W.setAttribute("allow", bt.join("; ")), W.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), W.id = ce;
						var He;
						W.tabIndex = (He = s.tabindex) !== null && He !== void 0 ? He : 0, W.title = "Widget containing a Cloudflare security challenge", m.appendChild(W);
						var Ve, fr = (Ve = s["response-field"]) !== null && Ve !== void 0 ? Ve : !0;
						if (fr) {
							var Se = document.createElement("input");
							Se.type = "hidden";
							var qe;
							if (Se.name = (qe = s["response-field-name"]) !== null && qe !== void 0 ? qe : Wt, Se.id = "".concat(ce, "_response"), m.appendChild(Se), typeof s["response-field-name"] != "string" && Er(L)) {
								var Ie = document.createElement("input");
								Ie.type = "hidden", Ie.name = Ft, Ie.id = "".concat(ce, "_legacy_response"), m.appendChild(Ie)
							}
						}
						if (y.isRecaptchaCompatibilityMode) {
							var Ae = document.createElement("input");
							Ae.type = "hidden", Ae.name = Ut, Ae.id = "".concat(ce, "_g_response"), m.appendChild(Ae)
						}
						return je.widgetRenderEndTimeMs = D(), ce
					}
				}
			},
			k = function() {
				var n, i = -1,
					t = !0,
					f = !1,
					d = void 0;
				try {
					for (var m = y.widgetMap[Symbol.iterator](), E; !(t = (E = m.next()).done); t = !0) {
						var T = Oe(E.value, 2),
							s = T[0],
							w = T[1];
						i < w.idx && (n = s, i = w.idx)
					}
				} catch (O) {
					f = !0, d = O
				} finally {
					try {
						!t && m.return != null && m.return()
					} finally {
						if (f) throw d
					}
				}
				return i === -1 && p("Could not find widget", 43778), n
			};

		function F() {
			return F = wt(function(v, n, i, t) {
				var f, d, m, E, T, s, w, O, B, L;
				return Ce(this, function(A) {
					switch (A.label) {
						case 0:
							if (f = v.params.sitekey, d = or(), !d) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), r(v, n, !1), [2];
							m = "h/".concat("g", "/"), E = new URL(d), T = "https", s = "", w = "".concat(T, "://").concat(E.host, "/cdn-cgi/challenge-platform/").concat(m, "rc/").concat(t).concat(s), A.label = 1;
						case 1:
							return A.trys.push([1, 6, , 7]), [4, fetch(w, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: f,
									secondaryToken: i
								})
							})];
						case 2:
							return O = A.sent(), O.status === 200 ? [3, 3] : (x("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), r(v, n, !1), [3, 5]);
						case 3:
							return [4, O.json()];
						case 4:
							if (B = A.sent(), "status" in B && B.status === "redeemed") return r(v, n, !0), [2];
							A.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return L = A.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), r(v, n, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), F.apply(this, arguments)
		}
		var R = function(v) {
			var n = v.data;
			if (n.source === P) {
				if (!br(v)) {
					x("Ignored message from wrong origin: " + v.origin);
					return
				}
				if (!(!n.widgetId || !y.widgetMap.has(n.widgetId))) {
					var i = Q(n.widgetId),
						t = y.widgetMap.get(n.widgetId);
					if (!(!i || !t)) switch (n.event) {
						case "init": {
							var f;
							t.widgetInitStartTimeMs = D();
							var d = document.getElementById(i);
							d || p("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), t.mode = n.mode, t.mode === U.INVISIBLE && t.params["refresh-expired"] === X.MANUAL && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(X.AUTO, "' or '").concat(X.NEVER, "'")), t.mode !== U.MANAGED && t.params["refresh-timeout"] !== Z.AUTO && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), t.params.appearance === q.ALWAYS || t.isExecuting && t.params.appearance === q.EXECUTE ? mt(d, t) : ir(d), d.style.display = "";
							var m = document.querySelector("#".concat(i));
							m || p("Received state for an unknown widget: ".concat(n.widgetId), 3078), (f = m.contentWindow) === null || f === void 0 || f.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var E = document.getElementById(i);
							E || p("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var T = new Map;
							t.displayLanguage = n.displayLanguage, Object.keys(n.translationData).forEach(function(oe) {
								T.set(oe, n.translationData[oe])
							}), xr(E, T);
							break
						}
						case "languageUnsupported": {
							x("Language ".concat(t.params.language, " is not supported, falling back to: ").concat(n.fallback)), t.displayLanguage = n.fallback;
							break
						}
						case "reject": {
							var s = document.getElementById(i);
							if (t.isExecuting = !1, s || p("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), n.reason === "outdated_browser") {
								var w;
								(w = t.cbUnsupported) === null || w === void 0 || w.call(t)
							}
							break
						}
						case "food": {
							t.watchcat && n.seq > t.watchcat.lastAckedSeq && (t.watchcat.lastAckedSeq = n.seq);
							break
						}
						case "complete": {
							c(t, j, n.widgetId), t.response = n.token, n.sToken ? e(t, i, n.sToken, n.chlId) : r(t, i, !1);
							break
						}
						case "fail": {
							n.rcV && c(t, n.rcV, n.widgetId), n.cfChlOut && (t.cfChlOut = n.cfChlOut), n.cfChlOutS && (t.cfChlOutS = n.cfChlOutS), n.code && (t.errorCode = n.code), t.isExecuting = !1, t.isFailed = !0, t.isInitialized = !0, vt(i);
							var O = t.cbError,
								B = n.code === Ne;
							if (O) {
								var L;
								O(String((L = n.code) !== null && L !== void 0 ? L : Ct)) || (n.code && x("Error: ".concat(n.code)), a(t, i, B))
							} else n.code ? (a(t, i, B), p("Error: ".concat(n.code), 3076)) : a(t, i, !1);
							break
						}
						case "feedbackInit": {
							$t(i, t);
							break
						}
						case "requestFeedbackData": {
							var A, re = document.querySelector("#".concat(i));
							re || p("Received state for an unknown widget: ".concat(n.widgetId), 3078), (A = re.contentWindow) === null || A === void 0 || A.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var $, ne = document.querySelector("#".concat(i, "-fr"));
							ne || p("Received state for an unknown widget: ".concat(n.widgetId), 3078), ($ = ne.contentWindow) === null || $ === void 0 || $.postMessage({
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
							var de = document.querySelector("#".concat(i, "-fr"));
							de || p("Received state for an unknown widget: ".concat(n.widgetId), 3078), Jt("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var J, pe = n.token;
							t.isExpired = !0, (J = t.cbExpired) === null || J === void 0 || J.call(t, pe), t.params["refresh-expired"] === X.AUTO && !t.isResetting && _(i);
							break
						}
						case "interactiveTimeout": {
							c(t, j, n.widgetId), vt(i);
							var we = t.cbTimeout;
							if (we ? we() : t.params["refresh-timeout"] === Z.NEVER && !t.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), t.params["refresh-timeout"] === Z.AUTO && !t.isResetting) {
								var ve = t.cbAfterInteractive;
								ve == null || ve(), _(i)
							}
							break
						}
						case "refreshRequest": {
							c(t, j, n.widgetId), _(i);
							break
						}
						case "reloadRequest": {
							c(t, n.nextRcV, n.widgetId), _(i);
							break
						}
						case "interactiveBegin": {
							var me, Te = document.getElementById(i);
							Te || p("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (me = t.cbBeforeInteractive) === null || me === void 0 || me.call(t), t.params.appearance === q.INTERACTION_ONLY && mt(Te, t);
							break
						}
						case "interactiveEnd": {
							var ge;
							(ge = t.cbAfterInteractive) === null || ge === void 0 || ge.call(t);
							break
						}
						case "widgetStale": {
							t.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var H;
							t.widgetParamsStartTimeMs = D();
							var ae = document.querySelector("#".concat(i));
							ae || p("Received state for an unknown widget: ".concat(n.widgetId), 3078), t.isResetting = !1;
							var ye = {},
								G = D(),
								he = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: Zt(ae).substring(0, Vt),
										pfp: er(document, zt, Ht),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: tr(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href
									}
								},
								ie = D() - G;
							(H = ae.contentWindow) === null || H === void 0 || H.postMessage(Be({
								source: P,
								widgetId: n.widgetId,
								event: "extraParams",
								action: t.action,
								cData: t.cData,
								chlPageData: t.chlPageData,
								rcV: t.rcV,
								ch: "6aac8896f227",
								url: or(),
								retry: t.params.retry,
								"expiry-interval": t.params["expiry-interval"],
								"retry-interval": t.params["retry-interval"],
								"refresh-expired": t.params["refresh-expired"],
								"refresh-timeout": t.params["refresh-timeout"],
								language: t.params.language,
								execution: t.params.execution,
								appearance: t.params.appearance,
								wPr: he,
								turnstileAgeMs: D() - y.turnstileLoadInitTimeMs,
								widgetAgeMs: D() - t.widgetRenderStartTimeMs,
								upgradeAttempts: y.upgradeAttempts,
								upgradeCount: y.upgradeCount,
								timeRenderMs: t.widgetRenderEndTimeMs - t.widgetRenderStartTimeMs,
								timeToInitMs: t.widgetInitStartTimeMs - t.widgetRenderEndTimeMs,
								timeToParamsMs: t.widgetParamsStartTimeMs - t.widgetInitStartTimeMs,
								tiefTimeMs: ie
							}, ye), "*"), g(t, n.widgetId, ae), t.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		y.msgHandler = R, window.addEventListener("message", R);

		function S(v) {
			if (typeof v == "string") {
				var n = Ee(v);
				if (n && y.widgetMap.has(n)) return n;
				try {
					var i = document.querySelector(v);
					return i ? S(i) : null
				} catch (f) {
					return null
				}
			}
			if (M(v, HTMLElement)) {
				var t = v.querySelector("iframe");
				return t ? Ee(t.id) : null
			}
			return v || y.widgetMap.size === 0 ? null : y.widgetMap.keys().next().value
		}
		return {
			ready: function(n) {
				if (y.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), p("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof n != "function" && p('turnstile.ready() expected a "function" argument, got "'.concat(typeof n == "undefined" ? "undefined" : C(n), '"'), 3841), n(), typeof n != "function" && p('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), y.isReady) {
					n();
					return
				}
				_t.push(n)
			},
			implicitRender: yt,
			execute: function(n, i) {
				var t = S(n);
				if (!t) {
					i === void 0 && p("Please provide 2 parameters to execute: container and parameters", 43521);
					var f = h(n, i);
					f || p("Failed to render widget", 43522), t = f
				}
				var d = y.widgetMap.get(t);
				if (d) {
					b(d, i);
					var m = Q(t);
					if (d.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(m, "), consider using reset() before execute()"));
						return
					} else d.isExecuting = !0;
					if (d.response) {
						var E;
						d.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(m, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), (E = d.cbSuccess) === null || E === void 0 || E.call(d, d.response, !1);
						return
					}
					d.isExpired && x("Call to execute on a expired-widget (".concat(m, "), consider using reset() before")), d.isStale && (_(m), d.isExecuting = !0), d.msgQueue.push(ee.EXECUTE), d.isExecuted = !0;
					var T = document.querySelector("#".concat(m));
					if (T || (d.isExecuting = !1, p("Widget ".concat(m, " to execute was not found"), 43522)), d.isResetting) return;
					if (d.isInitialized && g(d, t, T), d.isInitialized && d.params.appearance === q.EXECUTE && mt(T, d), d.isExecuting) {
						var s, w = document.querySelector("#".concat(m));
						w || p("Received state for an unknown widget: ".concat(t), 3078), (s = w.contentWindow) === null || s === void 0 || s.postMessage({
							source: P,
							widgetId: t,
							event: "execute"
						}, "*")
					}
				}
			},
			render: h,
			reset: _,
			remove: l,
			getResponse: function(n) {
				var i;
				if (typeof n == "undefined") {
					var t = k();
					if (t) {
						var f, d = y.widgetMap.get(t);
						return d != null && d.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (f = y.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.response
					} else p("Could not find a widget", 43794)
				}
				var m = S(n);
				return m || p("Could not find widget for provided container", 43778), (i = y.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(n) {
				var i;
				if (typeof n == "undefined") {
					var t = k();
					if (t) {
						var f, d;
						return (d = (f = y.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.isExpired) !== null && d !== void 0 ? d : !1
					} else p("Could not find a widget", 43794)
				}
				var m = S(n);
				m || p("Could not find widget for provided container", 43778);
				var E;
				return (E = (i = y.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.isExpired) !== null && E !== void 0 ? E : !1
			}
		}
	}();

	function wr(e) {
		var a = e.getAttribute("data-sitekey"),
			r = {
				sitekey: a
			},
			o = e.getAttribute("data-tabindex");
		o && (r.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (Ye(c) ? r.theme = c : x('Unknown data-theme value: "'.concat(c, '"')));
		var u = e.getAttribute("data-size");
		if (u && (et(u) ? r.size = u : x('Unknown data-size value: "'.concat(u, '"'))), 0) var g;
		var b = e.getAttribute("data-action");
		typeof b == "string" && (r.action = b);
		var _ = e.getAttribute("data-cdata");
		typeof _ == "string" && (r.cData = _);
		var l = e.getAttribute("data-retry");
		l && (Qe(l) ? r.retry = l : x('Invalid data-retry value: "'.concat(l, ", expected either 'never' or 'auto'\"")));
		var h = e.getAttribute("data-retry-interval");
		if (h) {
			var k = Number.parseInt(h, 10);
			Ke(k) ? r["retry-interval"] = k : x('Invalid data-retry-interval value: "'.concat(h, ', expected an integer value > 0 and < 900000"'))
		}
		var F = e.getAttribute("data-expiry-interval");
		if (F) {
			var R = Number.parseInt(F, 10);
			$e(R) ? r["expiry-interval"] = R : x('Invalid data-expiry-interval value: "'.concat(R, ', expected an integer value > 0 and < 360000"'))
		}
		var S = e.getAttribute("data-refresh-expired");
		S && (tt(S) ? r["refresh-expired"] = S : x('Unknown data-refresh-expired value: "'.concat(S, ", expected either: 'never', 'auto' or 'manual'.")));
		var v = e.getAttribute("data-refresh-timeout");
		v && (rt(v) ? r["refresh-timeout"] = v : x('Unknown data-refresh-timeout value: "'.concat(v, ", expected either: 'never', 'auto' or 'manual'.")));
		var n = e.getAttribute("data-language");
		n && (nt(n) ? r.language = n : x('Invalid data-language value: "'.concat(n, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function i(s) {
			var w = e.getAttribute(s);
			return w && window[w] ? window[w] : void 0
		}
		var t = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		t.forEach(function(s) {
			r[s] = i("data-".concat(s))
		});
		var f, d = (f = e.getAttribute("data-response-field")) !== null && f !== void 0 ? f : "true";
		r["response-field"] = d === "true";
		var m = e.getAttribute("data-response-field-name");
		m && (r["response-field-name"] = m);
		var E = e.getAttribute("data-execution");
		E && (it(E) ? r.execution = E : x('Unknown data-execution value: "'.concat(E, ", expected either: 'render' or 'execute'.")));
		var T = e.getAttribute("data-appearance");
		return T && (at(T) ? r.appearance = T : x('Unknown data-appearance value: "'.concat(T, ", expected either: 'always', 'execute', or 'interaction-only'."))), r
	}

	function cr() {
		var e = !0;
		pt(y, e), y.msgHandler && window.removeEventListener("message", y.msgHandler), rr(window.turnstile, y)
	}
	se = !1, I = Kt(), y.scriptWasLoadedAsync = (De = I == null ? void 0 : I.loadedAsync) !== null && De !== void 0 ? De : !1, I != null && I.params && (fe = I.params.get("compat"), (fe == null ? void 0 : fe.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled") : (x("Compatibility layer enabled"), y.isRecaptchaCompatibilityMode = !0, window.grecaptcha = ht) : fe !== null && x('Unknown value for api.js?compat: "'.concat(fe, '", ignoring')), I.params.forEach(function(e, a) {
		N(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], a) || x('Unknown parameter passed to api.js: "?'.concat(a, '=...", ignoring'))
	}), se = I.params.get("_upgrade") === "true", z = I.params.get("onload"), z && !se && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (x("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(C(window[z]), "'")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : x("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(C(window[z]), "'"))
		}, 1e3))
	}, 0)), gt = "turnstile" in window, gt && !se ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (gt && se && (nr(window.turnstile, y), dt(y, K), (I == null || (Fe = I.params) === null || Fe === void 0 ? void 0 : Fe.get("render")) !== "explicit" && setTimeout(yt, 0)), window.turnstile = ht, se || ((I == null || (We = I.params) === null || We === void 0 ? void 0 : We.get("render")) !== "explicit" && _t.push(yt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(ar, 0) : window.addEventListener("DOMContentLoaded", ar))), ur = 24 * 60 * 60 * 1e3, window.setTimeout(cr, ur), K && (window.turnstile._testUpgrade = cr);
	var se, I, De, fe, z, gt, Fe, We, ur;
})();