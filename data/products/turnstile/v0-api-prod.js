"use strict";
(function() {
	function St(e, n, r, o, c, u, y) {
		try {
			var _ = e[u](y),
				g = _.value
		} catch (l) {
			r(l);
			return
		}
		_.done ? n(g) : Promise.resolve(g).then(o, c)
	}

	function It(e) {
		return function() {
			var n = this,
				r = arguments;
			return new Promise(function(o, c) {
				var u = e.apply(n, r);

				function y(g) {
					St(u, o, c, y, _, "next", g)
				}

				function _(g) {
					St(u, o, c, y, _, "throw", g)
				}
				y(void 0)
			})
		}
	}

	function D(e, n) {
		return n != null && typeof Symbol != "undefined" && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : D(e, n)
	}

	function Ae(e, n, r) {
		return n in e ? Object.defineProperty(e, n, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[n] = r, e
	}

	function Ye(e) {
		for (var n = 1; n < arguments.length; n++) {
			var r = arguments[n] != null ? arguments[n] : {},
				o = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
				return Object.getOwnPropertyDescriptor(r, c).enumerable
			}))), o.forEach(function(c) {
				Ae(e, c, r[c])
			})
		}
		return e
	}

	function mr(e, n) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			n && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), r.push.apply(r, o)
		}
		return r
	}

	function At(e, n) {
		return n = n != null ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mr(Object(n)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
		}), e
	}

	function Rt(e) {
		if (Array.isArray(e)) return e
	}

	function Ot(e, n) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var o = [],
				c = !0,
				u = !1,
				y, _;
			try {
				for (r = r.call(e); !(c = (y = r.next()).done) && (o.push(y.value), !(n && o.length === n)); c = !0);
			} catch (g) {
				u = !0, _ = g
			} finally {
				try {
					!c && r.return != null && r.return()
				} finally {
					if (u) throw _
				}
			}
			return o
		}
	}

	function Ct() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Qe(e, n) {
		(n == null || n > e.length) && (n = e.length);
		for (var r = 0, o = new Array(n); r < n; r++) o[r] = e[r];
		return o
	}

	function Nt(e, n) {
		if (e) {
			if (typeof e == "string") return Qe(e, n);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qe(e, n)
		}
	}

	function _e(e, n) {
		return Rt(e) || Ot(e, n) || Nt(e, n) || Ct()
	}

	function N(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Re(e, n) {
		var r = {
				label: 0,
				sent: function() {
					if (u[0] & 1) throw u[1];
					return u[1]
				},
				trys: [],
				ops: []
			},
			o, c, u, y;
		return y = {
			next: _(0),
			throw: _(1),
			return: _(2)
		}, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
			return this
		}), y;

		function _(l) {
			return function(A) {
				return g([l, A])
			}
		}

		function g(l) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; y && (y = 0, l[0] && (r = 0)), r;) try {
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
				l = n.call(e, r)
			} catch (A) {
				l = [6, A], c = 0
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
	var kt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Lt = 300020;
	var Oe = 300030;
	var z;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(z || (z = {}));
	var G;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(G || (G = {}));
	var Ce;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Ce || (Ce = {}));
	var xe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(xe || (xe = {}));
	var Q;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(Q || (Q = {}));
	var ie;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(ie || (ie = {}));
	var X;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(X || (X = {}));
	var fe;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(fe || (fe = {}));
	var oe;
	(function(e) {
		e.EXECUTE = "execute"
	})(oe || (oe = {}));
	var Ke;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Ke || (Ke = {}));

	function k(e, n) {
		return e.indexOf(n) !== -1
	}

	function $e(e) {
		return k(["auto", "dark", "light"], e)
	}

	function Je(e) {
		return k(["auto", "never"], e)
	}

	function Ze(e) {
		return e > 0 && e < 9e5
	}

	function et(e) {
		return e > 0 && e < 36e4
	}
	var gr = /^[0-9A-Za-z_-]{3,100}$/;

	function Mt(e) {
		return gr.test(e)
	}
	var yr = /^[a-z0-9_-]{0,32}$/i;

	function tt(e) {
		return e === void 0 ? !0 : typeof e == "string" && yr.test(e)
	}
	var hr = /^[a-z0-9_\-=]{0,255}$/i;

	function rt(e) {
		return e === void 0 ? !0 : typeof e == "string" && hr.test(e)
	}

	function nt(e) {
		return k(["normal", "compact", "invisible"], e)
	}

	function at(e) {
		return k(["auto", "manual", "never"], e)
	}

	function it(e) {
		return k(["auto", "manual", "never"], e)
	}
	var _r = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function ot(e) {
		return e === "auto" || _r.test(e)
	}

	function ct(e) {
		return k(["always", "execute", "interaction-only"], e)
	}

	function lt(e) {
		return k(["render", "execute"], e)
	}
	var Pt = 300,
		Dt = 10;
	var q = "0/0";

	function ut(e) {
		var n = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && n.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && n.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), n.size !== 0) return n.toString()
	}
	var Ne = "cf-chl-widget-",
		F = "cloudflare-challenge",
		Ft = ".cf-turnstile",
		Ut = ".cf-challenge",
		Wt = ".g-recaptcha",
		jt = "cf_challenge_response",
		zt = "cf-turnstile-response",
		qt = "g-recaptcha-response",
		Ht = 8e3,
		st = "private-token",
		Vt = 3,
		Bt = 500,
		Gt = 500;

	function dt(e, n) {
		var r = "https://challenges.cloudflare.com";
		if (n) {
			var o;
			r = (o = e["base-url"]) !== null && o !== void 0 ? o : r
		}
		return r
	}

	function ft(e, n, r, o, c, u, y) {
		var _ = dt(r, c),
			g = u ? "h/".concat(u, "/") : "",
			l = y ? "?".concat(y) : "";
		return "".concat(_, "/cdn-cgi/challenge-platform/").concat(g, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(n, "/").concat(r.theme, "/").concat(r.size, "/").concat(r.language, "/").concat(l)
	}

	function ke(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Xt(e, n) {
		if (!D(e, n)) throw new TypeError("Cannot call a class as a function")
	}

	function K(e, n) {
		return K = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, K(e, n)
	}

	function Yt(e, n) {
		if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(n && n.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), n && K(e, n)
	}

	function Le() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function be(e, n, r) {
		return Le() ? be = Reflect.construct : be = function(c, u, y) {
			var _ = [null];
			_.push.apply(_, u);
			var g = Function.bind.apply(c, _),
				l = new g;
			return y && K(l, y.prototype), l
		}, be.apply(null, arguments)
	}

	function ce(e) {
		return ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, ce(e)
	}

	function Qt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Me(e) {
		var n = typeof Map == "function" ? new Map : void 0;
		return Me = function(o) {
			if (o === null || !Qt(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof n != "undefined") {
				if (n.has(o)) return n.get(o);
				n.set(o, c)
			}

			function c() {
				return be(o, arguments, ce(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), K(c, o)
		}, Me(e)
	}

	function Kt(e, n) {
		return n && (N(n) === "object" || typeof n == "function") ? n : ke(e)
	}

	function $t(e) {
		var n = Le();
		return function() {
			var o = ce(e),
				c;
			if (n) {
				var u = ce(this).constructor;
				c = Reflect.construct(o, arguments, u)
			} else c = o.apply(this, arguments);
			return Kt(this, c)
		}
	}
	var Jt = function(e) {
		"use strict";
		Yt(r, e);
		var n = $t(r);

		function r(o, c) {
			Xt(this, r);
			var u;
			return u = n.call(this, o), Ae(ke(u), "code", void 0), u.name = "TurnstileError", u.code = c, u
		}
		return r
	}(Me(Error));

	function p(e, n) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Jt(r, n)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Pe(e) {
		return e.startsWith(Ne) ? e.substring(Ne.length) : null
	}

	function $(e) {
		return "".concat(Ne).concat(e)
	}

	function pt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			n = document.currentScript;
		if (D(n, HTMLScriptElement) && e.test(n.src)) return n;
		for (var r = document.querySelectorAll("script"), o = 0, c; c = r[o]; o++)
			if (D(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function Zt() {
		var e = pt();
		e || p("Could not find Turnstile script tag, some features may not be available", 43777);
		var n = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (n.loadedAsync = !0);
		var r = e.src,
			o = r.split("?");
		return o.length > 1 && (n.params = new URLSearchParams(o[1])), n
	}

	function j() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}

	function er(e, n) {
		var r, o, c = dt(n.params, J),
			u = "h/".concat("b", "/"),
			y = "".concat(c, "/cdn-cgi/challenge-platform/").concat(u, "feedback-reports/").concat(Pe(e), "/").concat(n.displayLanguage, "/");
		n.wrapper.parentNode || p("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
		var _ = document.createElement("div");
		_.style.position = "fixed", _.style.zIndex = "21474836419";
		var g = document.createElement("div");
		g.className = "cf-turnstile-feedback", g.id = "cf-fr-id", g.style.borderColor = "#000000", g.style.width = "450px";
		var l = ["ar-eg", "bg-bg", "da-dk", "de-de", "el-gr", "hr-hr", "hu-hu", "ja-jp", "ms-my", "id-id", "ru-ru", "sk-sk", "sl-si", "sr-ba", "uk-ua"],
			A = ["es-es", "cs-cz", "fa-ir", "fr-fr", "it-it", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr"],
			O, U;
		k(l, (O = (r = n.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && O !== void 0 ? O : "nonexistent") ? g.style.height = "520px" : k(A, (U = (o = n.displayLanguage) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && U !== void 0 ? U : "nonexistent") ? g.style.height = "480px" : g.style.height = "460px", g.style.position = "absolute", g.style.zIndex = "21474836420", g.style.borderWidth = "1px", g.style.borderColor = "#000", g.style.borderStyle = "solid", g.style.backgroundColor = "#ffffff", g.style.borderRadius = "10px", g.style.left = "-122px", g.style.top = "-91px", g.style.overflow = "hidden";
		var I = document.createElement("iframe");
		I.id = e + "-fr", I.setAttribute("src", y), I.setAttribute("allow", "cross-origin-isolated; fullscreen"), I.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), I.setAttribute("scrolling", "no"), I.style.borderWidth = "0px", I.style.width = "100%", I.style.height = "100%", I.style.overflow = "hidden";
		var w = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		w.style.position = "absolute", w.style.width = "26px", w.style.height = "26px", w.style.zIndex = "21474836421", w.style.cursor = "pointer", n.displayRTL ? w.style.left = "6px" : w.style.right = "2px", w.style.top = "5px", w.setAttribute("width", "26"), w.setAttribute("height", "26"), w.addEventListener("click", function() {
			var i;
			(i = _.parentNode) === null || i === void 0 || i.removeChild(_)
		});
		var T = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		T.setAttribute("ry", "12"), T.setAttribute("rx", "12"), T.setAttribute("cy", "12"), T.setAttribute("cx", "12"), T.setAttribute("fill", "#aaaaaa"), T.setAttribute("stroke-width", "0"), w.appendChild(T);
		var m = document.createElementNS("http://www.w3.org/2000/svg", "line");
		m.setAttribute("stroke-width", "3"), m.setAttribute("stroke", "#fff"), m.setAttribute("fill", "none"), m.setAttribute("x1", "6"), m.setAttribute("x2", "18"), m.setAttribute("y1", "18"), m.setAttribute("y2", "5"), w.appendChild(m);
		var a = document.createElementNS("http://www.w3.org/2000/svg", "line");
		a.setAttribute("stroke-width", "3"), a.setAttribute("stroke", "#fff"), a.setAttribute("fill", "none"), a.setAttribute("x1", "6"), a.setAttribute("x2", "18"), a.setAttribute("y1", "5"), a.setAttribute("y2", "18"), w.appendChild(a), g.appendChild(I), g.appendChild(w), _.appendChild(g), n.wrapper.parentNode.appendChild(_)
	}

	function tr(e) {
		var n, r, o;
		(o = document.getElementById(e)) === null || o === void 0 || (r = o.parentElement) === null || r === void 0 || (n = r.parentElement) === null || n === void 0 || n.remove()
	}
	var vt = function(e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > n ? e.substring(0, n) : e
	};

	function rr(e) {
		if (!e) return "-";
		var n = function(r, o) {
			if (!r || r.tagName === "BODY") return o;
			for (var c = 1, u = r.previousElementSibling; u;) u.tagName === r.tagName && c++, u = u.previousElementSibling;
			var y = vt(r.tagName.toLowerCase()),
				_ = "".concat(y, "[").concat(c, "]");
			return n(r.parentNode, "/".concat(_).concat(o))
		};
		return n(e, "")
	}

	function nr(e, n, r) {
		for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(O) {
					return c > n || o.length > r ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), y;
			(y = u.nextNode()) !== null && o.length < r;) {
			if (y.nodeType === Node.ELEMENT_NODE) {
				var _ = y;
				o += "".concat(vt(_.tagName.toLowerCase()));
				for (var g = 0; g < _.attributes.length; g++) {
					var l = _.attributes[g];
					o += "_".concat(vt(l.name, 2))
				}
				o += ">"
			} else y.nodeType === Node.TEXT_NODE && (o += "-t");
			var A = y.parentNode;
			for (c = 0; A !== e && A !== null;) c++, A = A.parentNode
		}
		return o.substring(0, r)
	}

	function ar(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : N(e)));
		for (var n = 5381, r = 0; r < e.length; r++) {
			var o = e.charCodeAt(r);
			n = n * 33 ^ o
		}
		return n >>> 0
	}

	function ir(e, n) {
		var r;
		n.upgradeAttempts++;
		var o = pt();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = n;
			var u = new URL(o.src),
				y = document.createElement("script");
			u.searchParams.set("_upgrade", "true"), u.searchParams.set("_cb", String(Date.now())), y.async = !0, c && (y.nonce = c), y.setAttribute("crossorigin", "anonymous"), y.src = u.toString(), o == null || (r = o.parentNode) === null || r === void 0 || r.replaceChild(y, o)
		}
	}

	function or(e, n) {
		var r = e._pState;
		return r ? (n.isReady = r.isReady, n.isRecaptchaCompatibilityMode = r.isRecaptchaCompatibilityMode, n.lastWidgetIdx = r.lastWidgetIdx, n.scriptWasLoadedAsync = r.scriptWasLoadedAsync, n.upgradeAttempts = r.upgradeAttempts, n.upgradeCompletedCount = r.upgradeCompletedCount + 1, n.turnstileLoadInitTimeMs = j(), n.watchCatInterval = null, n.watchCatSeq = r.watchCatSeq, n.widgetMap = r.widgetMap, !0) : !1
	}
	var xr = 900,
		br = 3;

	function Er(e, n) {
		e.watchCatSeq++;
		var r = !0,
			o = !1,
			c = void 0;
		try {
			for (var u = e.widgetMap[Symbol.iterator](), y; !(r = (y = u.next()).done); r = !0) {
				var _ = _e(y.value, 2),
					g = _[0],
					l = _[1],
					A;
				l.watchcat.seq = e.watchCatSeq, l.watchcat.lastAckedSeq === 0 && (l.watchcat.lastAckedSeq = e.watchCatSeq);
				var O = $(g);
				if (!O || !l.shadow) {
					l.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(O, ", consider using turnstile.remove() to clean up a widget.")), l.watchcat.missingWidgetWarning = !0);
					continue
				}
				var U = l.shadow.querySelector("#".concat(O));
				if (!U) {
					l.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(O, ", consider using turnstile.remove() to clean up a widget.")), l.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(l.isComplete || l.isFailed)) {
					if ((l.isExecuting || !l.isInitialized || l.isInitialized && !l.isStale && !l.isExecuted) && l.watchcat.lastAckedSeq !== 0 && l.watchcat.lastAckedSeq < l.watchcat.seq - 1 - br) {
						var I;
						l.watchcat.lastAckedSeq = 0, l.watchcat.seq = 0, l.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", g);
						var w;
						if ((I = e.msgHandler) === null || I === void 0 || I.call(e, {
								data: {
									source: F,
									widgetId: g,
									code: Oe,
									event: "fail",
									rcV: (w = l.rcV) !== null && w !== void 0 ? w : q
								}
							}), n) {
							var T;
							window.postMessage({
								source: F,
								widgetId: g,
								event: "rcv-update",
								rcV: (T = l.rcV) !== null && T !== void 0 ? T : q
							}, "*")
						}
						continue
					}(A = U.contentWindow) === null || A === void 0 || A.postMessage({
						source: F,
						widgetId: g,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (m) {
			o = !0, c = m
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (o) throw c
			}
		}
	}

	function mt(e, n) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Er(e, n)
		}, xr))
	}

	function gt(e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || n) && clearInterval(e.watchCatInterval)
	}
	var J = !1,
		h = {
			turnstileLoadInitTimeMs: j(),
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

	function yt(e) {
		fr(e, "")
	}

	function xt() {
		var e = [Ft, Ut];
		h.isRecaptchaCompatibilityMode && e.push(Wt), document.querySelectorAll(e.join(", ")).forEach(function(n) {
			return bt.render(n)
		})
	}
	var Et = [];

	function cr() {
		h.isReady = !0;
		var e = !0,
			n = !1,
			r = void 0;
		try {
			for (var o = Et[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
				var u = c.value;
				u()
			}
		} catch (y) {
			n = !0, r = y
		} finally {
			try {
				!e && o.return != null && o.return()
			} finally {
				if (n) throw r
			}
		}
	}

	function fr(e, n) {
		var r = document.getElementById("".concat(e, "_response"));
		r !== null && D(r, HTMLInputElement) && (r.value = n);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && D(o, HTMLInputElement) && (o.value = n), h.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && D(c, HTMLInputElement) && (c.value = n)
		}
	}

	function ht(e, n) {
		var r = n.params,
			o = r.size,
			c = o === void 0 ? "normal" : o,
			u = n.mode;
		switch (u) {
			case z.NON_INTERACTIVE:
			case z.MANAGED:
				switch (c) {
					case G.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case G.INVISIBLE:
						p('Invalid value for parameter "size", expected "'.concat(G.COMPACT, '" or "').concat(G.NORMAL, '", got "').concat(c, '"'), 2817);
					case G.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case z.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				p('Invalid value for parameter "mode", expected "'.concat(z.NON_INTERACTIVE, '", "').concat(z.MANAGED, '" or "').concat(z.INVISIBLE, '", got "').concat(u, '"'), 2818)
		}
	}

	function lr(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function wr(e, n) {
		var r = n.get("turnstile_iframe_alt");
		r && (e.title = r)
	}

	function Tr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Sr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function ur() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var bt = function() {
		var e = function(a, i, t, f) {
				return I.apply(this, arguments)
			},
			n = function(a, i, t) {
				if (a.params.retry === xe.AUTO || t) {
					a.isExecuted && (a.msgQueue.push(oe.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var f, d = t ? 0 : 1e3 * 2 + ((f = a.params["retry-interval"]) !== null && f !== void 0 ? f : 0);
					a.retryTimeout = window.setTimeout(function() {
						l(i)
					}, d)
				}
			},
			r = function(a, i, t) {
				var f;
				a.response === void 0 && p("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, fr(i, a.response), (f = a.cbSuccess) === null || f === void 0 || f.call(a, a.response, t)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, t = i.length, f = new Array(t), d = 0; d < t; d++) f[d] = i[d].name;
				return f
			},
			c = function(a, i, t) {
				if (a.rcV = i, J) {
					var f;
					window.postMessage({
						source: F,
						widgetId: t,
						event: "rcv-update",
						rcV: (f = a.rcV) !== null && f !== void 0 ? f : q
					}, "*")
				}
			},
			u = function() {
				var a = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = a.length,
					t;
				do {
					t = "";
					for (var f = 0; f < 5; f++) t += a.charAt(Math.floor(Math.random() * i))
				} while (h.widgetMap.has(t));
				return t
			},
			y = function(a) {
				var i = !0,
					t = !1,
					f = void 0;
				try {
					for (var d = h.widgetMap[Symbol.iterator](), v; !(i = (v = d.next()).done); i = !0) {
						var b = _e(v.value, 2),
							E = b[0],
							s = b[1];
						if (s.wrapper.parentElement === a) return E
					}
				} catch (S) {
					t = !0, f = S
				} finally {
					try {
						!i && d.return != null && d.return()
					} finally {
						if (t) throw f
					}
				}
				return null
			},
			_ = function(a, i, t) {
				for (; a.msgQueue.length;) {
					var f, d = a.msgQueue.pop();
					(f = t.contentWindow) === null || f === void 0 || f.postMessage({
						source: F,
						widgetId: i,
						event: d
					}, "*")
				}
			},
			g = function(a, i) {
				if (i) {
					var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						f = [],
						d = !0,
						v = !1,
						b = void 0;
					try {
						for (var E = t[Symbol.iterator](), s; !(d = (s = E.next()).done); d = !0) {
							var S = s.value;
							i[S] && i[S] !== a.params[S] && f.push(S)
						}
					} catch (C) {
						v = !0, b = C
					} finally {
						try {
							!d && E.return != null && E.return()
						} finally {
							if (v) throw b
						}
					}
					f.length !== 0 && p("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(f.join(",")), 3618), i.action && (tt(i.action) || p('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (rt(i.cData) || p('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			l = function(a) {
				var i = T(a);
				i || p("Nothing to reset found for provided container", 3329);
				var t = h.widgetMap.get(i);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isComplete = !1, t.isExecuting = !1, t.isExpired = !1, t.isFailed = !1, t.isInitialized = !1, t.isStale = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === fe.RENDER && (t.msgQueue.push(oe.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
					var f = $(i),
						d = t.shadow.querySelector("#".concat(f));
					(!f || !d) && p("Widget ".concat(i, " to reset was not found."), 3330), t.params.appearance === X.INTERACTION_ONLY && lr(d), t.params.sitekey === null && p("Unexpected Error: Sitekey is null", 3347);
					var v;
					d.src = ft(i, t.params.sitekey, t.params, (v = t.rcV) !== null && v !== void 0 ? v : q, J, "b", ut(t)), yt(f), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else p("Widget ".concat(i, " to reset was not found."), 3331)
			},
			A = function(a) {
				var i, t = T(a);
				if (!t || !h.widgetMap.has(t)) {
					x("Nothing to remove found for the provided container");
					return
				}
				var f = $(t),
					d = ["input#".concat(f, "_response"), "input#".concat(f, "_legacy_response"), "input#".concat(f, "_g_response")];
				document.querySelectorAll(d.join(", ")).forEach(function(E) {
					return E.remove()
				});
				var v = h.widgetMap.get(t);
				v == null || v.shadow.querySelectorAll(d.join(", ")).forEach(function(E) {
					return E.remove()
				}), v == null || v.wrapper.remove();
				var b = (i = h.widgetMap.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				b && window.clearTimeout(b), h.widgetMap.delete(t), gt(h)
			},
			O = function(a, i) {
				var t, f, d = j(),
					v;
				if (typeof a == "string") try {
					var b = document.querySelector(a);
					b || p('Unable to find a container for "'.concat(a, '"'), 3585), v = b
				} catch (Ar) {
					p('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else D(a, HTMLElement) ? v = a : p('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var E = Ir(v);
				if (E) {
					var s = Object.assign(E, i),
						S = s.action,
						C = s.cData,
						Y = s.chlPageData,
						L = s.sitekey,
						M;
					s.theme = (M = s.theme) !== null && M !== void 0 ? M : Ce.AUTO;
					var Z;
					s.retry = (Z = s.retry) !== null && Z !== void 0 ? Z : xe.AUTO;
					var le;
					s.execution = (le = s.execution) !== null && le !== void 0 ? le : fe.RENDER;
					var ee;
					s.appearance = (ee = s.appearance) !== null && ee !== void 0 ? ee : X.ALWAYS;
					var te;
					s["retry-interval"] = Number((te = s["retry-interval"]) !== null && te !== void 0 ? te : Ht);
					var ue;
					s["expiry-interval"] = Number((ue = s["expiry-interval"]) !== null && ue !== void 0 ? ue : (Pt - Dt) * 1e3);
					var re;
					s.size = (re = s.size) !== null && re !== void 0 ? re : G.NORMAL;
					var We = s.callback,
						me = s["expired-callback"],
						je = s["timeout-callback"],
						Ee = s["after-interactive-callback"],
						ge = s["before-interactive-callback"],
						B = s["error-callback"],
						we = s["unsupported-callback"];
					typeof L != "string" && p('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof L == "undefined" ? "undefined" : N(L), '"'), 3588), Mt(L) || p('Invalid input for parameter "sitekey", got "'.concat(L, '"'), 3589), nt(s.size) || p('Invalid type for parameter "size", expected normal|compact, got "'.concat(s.size, '" ').concat(N(s.size)), 3590), $e(s.theme) || p('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(s.theme, '" ').concat(N(s.theme)), 3591), Je(s.retry) || p('Invalid type for parameter "retry", expected never|auto, got "'.concat(s.retry, '" ').concat(N(s.retry)), 3592), s.language || (s.language = "auto"), ot(s.language) || (x('Invalid language value: "'.concat(s.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")), s.language = "auto"), ct(s.appearance) || p('Unknown appearance value: "'.concat(s.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), lt(s.execution) || p('Unknown execution value: "'.concat(s.execution, ", expected either: 'render' or 'execute'."), 3601), Ze(s["retry-interval"]) || p('Invalid retry-interval value: "'.concat(s["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), et(s["expiry-interval"]) || p('Invalid expiry-interval value: "'.concat(s["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var ne, H = (ne = s["refresh-expired"]) !== null && ne !== void 0 ? ne : Q.AUTO;
					at(H) ? s["refresh-expired"] = H : p('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(H, '" ').concat(typeof H == "undefined" ? "undefined" : N(H)), 3603);
					var ae, se = (ae = s["refresh-timeout"]) !== null && ae !== void 0 ? ae : ie.AUTO;
					it(H) ? s["refresh-timeout"] = se : p('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat(se, '" ').concat(typeof se == "undefined" ? "undefined" : N(se)), 3603);
					var ze = v.querySelector(".cf-turnstile-wrapper");
					ze && A(v);
					var P = document.createElement("iframe"),
						W = document.createElement("div"),
						ye = W.attachShadow({
							mode: "closed"
						});
					W.classList.add("cf-turnstile-wrapper"), W.style.border = "0", W.style.margin = "0", W.style.padding = "0", tt(S) || p('Invalid input for optional parameter "action", got "'.concat(S, '"'), 3604), rt(C) || p('Invalid input for optional parameter "cData", got "'.concat(C, '"'), 3605);
					var he = u(),
						de = $(he);
					if (!(!he || !de)) {
						var wt = [],
							qe = s.execution === fe.RENDER;
						qe && wt.push(oe.EXECUTE), h.lastWidgetIdx++;
						var pr = {};
						h.widgetMap.set(he, At(Ye({
							idx: h.lastWidgetIdx,
							action: S,
							cData: C,
							chlPageData: Y,
							cbSuccess: We,
							cbError: B,
							cbExpired: me,
							cbTimeout: je,
							cbUnsupported: we,
							cbAfterInteractive: Ee,
							cbBeforeInteractive: ge,
							params: s,
							isStale: !1,
							isComplete: !1,
							isExpired: !1,
							isExecuting: qe,
							isFailed: !1,
							isResetting: !1,
							isExecuted: qe,
							isInitialized: !1,
							msgQueue: wt,
							rcV: q,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1
							}
						}, pr), {
							widgetRenderStartTimeMs: d,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: ye,
							wrapper: W
						})), mt(h, J);
						var He = h.widgetMap.get(he);
						He || p("Turnstile Initialization Error ", 3606), P.style.display = "none", P.style.border = "none", P.style.overflow = "hidden", P.setAttribute("src", ft(he, L, s, q, J, "b", ut(He))), P.onerror = function() {
							if (B) {
								B == null || B(String(kt.code));
								return
							}
							p("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var Tt = ["cross-origin-isolated", "fullscreen", "autoplay"],
							Ve;
						k((Ve = (f = document.featurePolicy) === null || f === void 0 || (t = f.features) === null || t === void 0 ? void 0 : t.call(f)) !== null && Ve !== void 0 ? Ve : [], st) && Tt.push(st), P.setAttribute("allow", Tt.join("; ")), P.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), P.id = de;
						var Be;
						P.tabIndex = (Be = s.tabindex) !== null && Be !== void 0 ? Be : 0, P.title = "Widget containing a Cloudflare security challenge", ye.appendChild(P);
						var Ge, vr = (Ge = s["response-field"]) !== null && Ge !== void 0 ? Ge : !0;
						if (vr) {
							var Te = document.createElement("input");
							Te.type = "hidden";
							var Xe;
							if (Te.name = (Xe = s["response-field-name"]) !== null && Xe !== void 0 ? Xe : zt, Te.id = "".concat(de, "_response"), W.appendChild(Te), typeof s["response-field-name"] != "string" && Sr(L)) {
								var Se = document.createElement("input");
								Se.type = "hidden", Se.name = jt, Se.id = "".concat(de, "_legacy_response"), W.appendChild(Se)
							}
						}
						if (h.isRecaptchaCompatibilityMode) {
							var Ie = document.createElement("input");
							Ie.type = "hidden", Ie.name = qt, Ie.id = "".concat(de, "_g_response"), W.appendChild(Ie)
						}
						return v.appendChild(W), He.widgetRenderEndTimeMs = j(), de
					}
				}
			},
			U = function() {
				var a, i = -1,
					t = !0,
					f = !1,
					d = void 0;
				try {
					for (var v = h.widgetMap[Symbol.iterator](), b; !(t = (b = v.next()).done); t = !0) {
						var E = _e(b.value, 2),
							s = E[0],
							S = E[1];
						i < S.idx && (a = s, i = S.idx)
					}
				} catch (C) {
					f = !0, d = C
				} finally {
					try {
						!t && v.return != null && v.return()
					} finally {
						if (f) throw d
					}
				}
				return i === -1 && p("Could not find widget", 43778), a
			};

		function I() {
			return I = It(function(m, a, i, t) {
				var f, d, v, b, E, s, S, C, Y, L;
				return Re(this, function(M) {
					switch (M.label) {
						case 0:
							if (f = m.params.sitekey, d = ur(), !d) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), r(m, a, !1), [2];
							v = "h/".concat("b", "/"), b = new URL(d), E = "https", s = "", S = "".concat(E, "://").concat(b.host, "/cdn-cgi/challenge-platform/").concat(v, "rc/").concat(t).concat(s), M.label = 1;
						case 1:
							return M.trys.push([1, 6, , 7]), [4, fetch(S, {
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
							return C = M.sent(), C.status === 200 ? [3, 3] : (x("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), r(m, a, !1), [3, 5]);
						case 3:
							return [4, C.json()];
						case 4:
							if (Y = M.sent(), "status" in Y && Y.status === "redeemed") return r(m, a, !0), [2];
							M.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return L = M.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), r(m, a, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), I.apply(this, arguments)
		}
		var w = function(m) {
			var a = m.data;
			if (a.source === F) {
				if (!Tr(m)) {
					x("Ignored message from wrong origin: " + m.origin);
					return
				}
				if (!(!a.widgetId || !h.widgetMap.has(a.widgetId))) {
					var i = $(a.widgetId),
						t = h.widgetMap.get(a.widgetId);
					if (!(!i || !t)) switch (a.event) {
						case "init": {
							var f;
							t.widgetInitStartTimeMs = j();
							var d = t.shadow.getElementById(i);
							d || p("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), t.mode = a.mode, t.mode === z.INVISIBLE && t.params["refresh-expired"] === Q.MANUAL && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(Q.AUTO, "' or '").concat(Q.NEVER, "'")), t.mode !== z.MANAGED && t.params["refresh-timeout"] !== ie.AUTO && x("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), t.params.appearance === X.ALWAYS || t.isExecuting && t.params.appearance === X.EXECUTE ? ht(d, t) : lr(d), d.style.display = "";
							var v = t.shadow.querySelector("#".concat(i));
							v || p("Received state for an unknown widget: ".concat(a.widgetId), 3078), (f = v.contentWindow) === null || f === void 0 || f.postMessage({
								source: F,
								widgetId: a.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var b = t.shadow.getElementById(i);
							b || p("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var E = new Map;
							t.displayLanguage = a.displayLanguage, Object.keys(a.translationData).forEach(function(ye) {
								E.set(ye, a.translationData[ye])
							}), wr(b, E);
							break
						}
						case "languageUnsupported": {
							x("Language ".concat(t.params.language, " is not supported, falling back to: ").concat(a.fallback)), t.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var s = t.shadow.getElementById(i);
							if (t.isExecuting = !1, s || p("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "outdated_browser") {
								var S;
								(S = t.cbUnsupported) === null || S === void 0 || S.call(t)
							}
							break
						}
						case "food": {
							t.watchcat && a.seq > t.watchcat.lastAckedSeq && (t.watchcat.lastAckedSeq = a.seq);
							break
						}
						case "complete": {
							c(t, q, a.widgetId), t.response = a.token, a.sToken ? e(t, i, a.sToken, a.chlId) : r(t, i, !1);
							break
						}
						case "fail": {
							a.rcV && c(t, a.rcV, a.widgetId), a.cfChlOut && (t.cfChlOut = a.cfChlOut), a.cfChlOutS && (t.cfChlOutS = a.cfChlOutS), a.code && (t.errorCode = a.code), t.isExecuting = !1, t.isFailed = !0, t.isInitialized = !0, yt(i);
							var C = t.cbError,
								Y = a.code === Oe;
							if (C) {
								var L;
								C(String((L = a.code) !== null && L !== void 0 ? L : Lt)) || (a.code && x("Error: ".concat(a.code)), n(t, i, Y))
							} else a.code ? (n(t, i, Y), p("Error: ".concat(a.code), 3076)) : n(t, i, !1);
							break
						}
						case "feedbackInit": {
							var M = t.wrapper.querySelector("#".concat(i, "-fr"));
							if (M) {
								x("A feedback report form is already opened for this widget.");
								return
							}
							er(i, t);
							break
						}
						case "requestFeedbackData": {
							var Z, le = t.shadow.querySelector("#".concat(i));
							le || p("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (Z = le.contentWindow) === null || Z === void 0 || Z.postMessage({
								source: F,
								widgetId: a.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var ee, te, ue = (ee = t.wrapper.parentNode) === null || ee === void 0 ? void 0 : ee.querySelector("#".concat(i, "-fr"));
							ue || p("Received state for an unknown widget: ".concat(a.widgetId), 3078), (te = ue.contentWindow) === null || te === void 0 || te.postMessage({
								source: F,
								widgetId: a.widgetId,
								event: "feedbackData",
								rayId: a.rayId,
								rcV: a.rcV,
								cfChlOut: t.cfChlOut,
								cfChlOutS: t.cfChlOutS,
								errorCode: t.errorCode,
								sitekey: a.sitekey,
								mode: a.mode,
								issuanceUserAgent: a.issuanceUserAgent
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var re, We = (re = t.wrapper.parentNode) === null || re === void 0 ? void 0 : re.querySelector("#".concat(i, "-fr"));
							We || p("Received state for an unknown widget: ".concat(a.widgetId), 3078), tr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var me, je = a.token;
							t.isExpired = !0, (me = t.cbExpired) === null || me === void 0 || me.call(t, je), t.params["refresh-expired"] === Q.AUTO && !t.isResetting && l(i);
							break
						}
						case "interactiveTimeout": {
							c(t, q, a.widgetId), yt(i);
							var Ee = t.cbTimeout;
							if (Ee ? Ee() : t.params["refresh-timeout"] === ie.NEVER && !t.isResetting && x("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), t.params["refresh-timeout"] === ie.AUTO && !t.isResetting) {
								var ge = t.cbAfterInteractive;
								ge == null || ge(), l(i)
							}
							break
						}
						case "refreshRequest": {
							c(t, q, a.widgetId), l(i);
							break
						}
						case "reloadRequest": {
							c(t, a.nextRcV, a.widgetId), l(i);
							break
						}
						case "interactiveBegin": {
							var B, we = t.shadow.getElementById(i);
							we || p("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (B = t.cbBeforeInteractive) === null || B === void 0 || B.call(t), t.params.appearance === X.INTERACTION_ONLY && ht(we, t);
							break
						}
						case "interactiveEnd": {
							var ne;
							(ne = t.cbAfterInteractive) === null || ne === void 0 || ne.call(t);
							break
						}
						case "widgetStale": {
							t.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var H;
							t.widgetParamsStartTimeMs = j();
							var ae = t.shadow.querySelector("#".concat(i));
							ae || p("Received state for an unknown widget: ".concat(a.widgetId), 3078), t.isResetting = !1;
							var se = {},
								ze = j(),
								P = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: rr(t.wrapper).substring(0, Gt),
										pfp: nr(document, Vt, Bt),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: ar(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href
									}
								},
								W = j() - ze;
							(H = ae.contentWindow) === null || H === void 0 || H.postMessage(Ye({
								source: F,
								widgetId: a.widgetId,
								event: "extraParams",
								action: t.action,
								cData: t.cData,
								chlPageData: t.chlPageData,
								rcV: t.rcV,
								ch: "191f93ebdf8e",
								url: ur(),
								retry: t.params.retry,
								"expiry-interval": t.params["expiry-interval"],
								"retry-interval": t.params["retry-interval"],
								"refresh-expired": t.params["refresh-expired"],
								"refresh-timeout": t.params["refresh-timeout"],
								language: t.params.language,
								execution: t.params.execution,
								appearance: t.params.appearance,
								wPr: P,
								turnstileAgeMs: j() - h.turnstileLoadInitTimeMs,
								widgetAgeMs: j() - t.widgetRenderStartTimeMs,
								upgradeAttempts: h.upgradeAttempts,
								upgradeCompletedCount: h.upgradeCompletedCount,
								timeRenderMs: t.widgetRenderEndTimeMs - t.widgetRenderStartTimeMs,
								timeToInitMs: t.widgetInitStartTimeMs - t.widgetRenderEndTimeMs,
								timeToParamsMs: t.widgetParamsStartTimeMs - t.widgetInitStartTimeMs,
								tiefTimeMs: W
							}, se), "*"), _(t, a.widgetId, ae), t.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		h.msgHandler = w, window.addEventListener("message", w);

		function T(m) {
			if (typeof m == "string") {
				var a = Pe(m);
				if (a && h.widgetMap.has(a)) return a;
				if (h.widgetMap.has(m)) return m;
				try {
					var i = document.querySelector(m);
					return i ? T(i) : null
				} catch (t) {
					return null
				}
			}
			return D(m, Element) ? y(m) : m || h.widgetMap.size === 0 ? null : h.widgetMap.keys().next().value
		}
		return {
			ready: function(a) {
				if (h.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), p("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && p('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : N(a), '"'), 3841), a(), typeof a != "function" && p('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), h.isReady) {
					a();
					return
				}
				Et.push(a)
			},
			implicitRender: xt,
			execute: function(a, i) {
				var t = T(a);
				if (!t) {
					i === void 0 && p("Please provide 2 parameters to execute: container and parameters", 43521);
					var f = O(a, i);
					f || p("Failed to render widget", 43522), t = f
				}
				var d = h.widgetMap.get(t);
				if (d) {
					g(d, i);
					var v = $(t);
					if (d.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(v, "), consider using reset() before execute()"));
						return
					} else d.isExecuting = !0;
					if (d.response) {
						var b;
						d.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(v, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), (b = d.cbSuccess) === null || b === void 0 || b.call(d, d.response, !1);
						return
					}
					d.isExpired && x("Call to execute on a expired-widget (".concat(v, "), consider using reset() before")), d.isStale && (l(v), d.isExecuting = !0), d.msgQueue.push(oe.EXECUTE), d.isExecuted = !0;
					var E = d.shadow.querySelector("#".concat(v));
					if (E || (d.isExecuting = !1, p("Widget ".concat(v, " to execute was not found"), 43522)), d.isResetting) return;
					if (d.isInitialized && _(d, t, E), d.isInitialized && d.params.appearance === X.EXECUTE && ht(E, d), d.isExecuting) {
						var s, S = d.shadow.querySelector("#".concat(v));
						S || p("Received state for an unknown widget: ".concat(t), 3078), (s = S.contentWindow) === null || s === void 0 || s.postMessage({
							source: F,
							widgetId: t,
							event: "execute"
						}, "*")
					}
				}
			},
			render: O,
			reset: l,
			remove: A,
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = U();
					if (t) {
						var f, d = h.widgetMap.get(t);
						return d != null && d.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (f = h.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.response
					} else p("Could not find a widget", 43794)
				}
				var v = T(a);
				return v || p("Could not find widget for provided container", 43778), (i = h.widgetMap.get(v)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = U();
					if (t) {
						var f, d;
						return (d = (f = h.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.isExpired) !== null && d !== void 0 ? d : !1
					} else p("Could not find a widget", 43794)
				}
				var v = T(a);
				v || p("Could not find widget for provided container", 43778);
				var b;
				return (b = (i = h.widgetMap.get(v)) === null || i === void 0 ? void 0 : i.isExpired) !== null && b !== void 0 ? b : !1
			}
		}
	}();

	function Ir(e) {
		var n = e.getAttribute("data-sitekey"),
			r = {
				sitekey: n
			},
			o = e.getAttribute("data-tabindex");
		o && (r.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && ($e(c) ? r.theme = c : x('Unknown data-theme value: "'.concat(c, '"')));
		var u = e.getAttribute("data-size");
		if (u && (nt(u) ? r.size = u : x('Unknown data-size value: "'.concat(u, '"'))), 0) var y;
		var _ = e.getAttribute("data-action");
		typeof _ == "string" && (r.action = _);
		var g = e.getAttribute("data-cdata");
		typeof g == "string" && (r.cData = g);
		var l = e.getAttribute("data-retry");
		l && (Je(l) ? r.retry = l : x('Invalid data-retry value: "'.concat(l, ", expected either 'never' or 'auto'\"")));
		var A = e.getAttribute("data-retry-interval");
		if (A) {
			var O = Number.parseInt(A, 10);
			Ze(O) ? r["retry-interval"] = O : x('Invalid data-retry-interval value: "'.concat(A, ', expected an integer value > 0 and < 900000"'))
		}
		var U = e.getAttribute("data-expiry-interval");
		if (U) {
			var I = Number.parseInt(U, 10);
			et(I) ? r["expiry-interval"] = I : x('Invalid data-expiry-interval value: "'.concat(I, ', expected an integer value > 0 and < 360000"'))
		}
		var w = e.getAttribute("data-refresh-expired");
		w && (at(w) ? r["refresh-expired"] = w : x('Unknown data-refresh-expired value: "'.concat(w, ", expected either: 'never', 'auto' or 'manual'.")));
		var T = e.getAttribute("data-refresh-timeout");
		T && (it(T) ? r["refresh-timeout"] = T : x('Unknown data-refresh-timeout value: "'.concat(T, ", expected either: 'never', 'auto' or 'manual'.")));
		var m = e.getAttribute("data-language");
		m && (ot(m) ? r.language = m : x('Invalid data-language value: "'.concat(m, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function a(E) {
			var s = e.getAttribute(E);
			return s && window[s] ? window[s] : void 0
		}
		var i = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		i.forEach(function(E) {
			r[E] = a("data-".concat(E))
		});
		var t, f = (t = e.getAttribute("data-response-field")) !== null && t !== void 0 ? t : "true";
		r["response-field"] = f === "true";
		var d = e.getAttribute("data-response-field-name");
		d && (r["response-field-name"] = d);
		var v = e.getAttribute("data-execution");
		v && (lt(v) ? r.execution = v : x('Unknown data-execution value: "'.concat(v, ", expected either: 'render' or 'execute'.")));
		var b = e.getAttribute("data-appearance");
		return b && (ct(b) ? r.appearance = b : x('Unknown data-appearance value: "'.concat(b, ", expected either: 'always', 'execute', or 'interaction-only'."))), r
	}

	function sr() {
		var e = !0;
		gt(h, e), h.msgHandler && window.removeEventListener("message", h.msgHandler), ir(window.turnstile, h)
	}
	pe = !1, R = Zt(), h.scriptWasLoadedAsync = (De = R == null ? void 0 : R.loadedAsync) !== null && De !== void 0 ? De : !1, R != null && R.params && (ve = R.params.get("compat"), (ve == null ? void 0 : ve.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled") : (x("Compatibility layer enabled"), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = bt) : ve !== null && x('Unknown value for api.js?compat: "'.concat(ve, '", ignoring')), R.params.forEach(function(e, n) {
		k(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], n) || x('Unknown parameter passed to api.js: "?'.concat(n, '=...", ignoring'))
	}), pe = R.params.get("_upgrade") === "true", V = R.params.get("onload"), V && !pe && setTimeout(function() {
		typeof window[V] == "function" ? window[V]() : (x("Unable to find onload callback '".concat(V, "' immediately after loading, expected 'function', got '").concat(N(window[V]), "'")), setTimeout(function() {
			typeof window[V] == "function" ? window[V]() : x("Unable to find onload callback '".concat(V, "' after 1 second, expected 'function', got '").concat(N(window[V]), "'"))
		}, 1e3))
	}, 0)), _t = "turnstile" in window, _t && !pe ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (_t && pe && (or(window.turnstile, h), mt(h, J), (R == null || (Fe = R.params) === null || Fe === void 0 ? void 0 : Fe.get("render")) !== "explicit" && setTimeout(xt, 0)), window.turnstile = bt, pe || ((R == null || (Ue = R.params) === null || Ue === void 0 ? void 0 : Ue.get("render")) !== "explicit" && Et.push(xt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(cr, 0) : window.addEventListener("DOMContentLoaded", cr))), dr = 24 * 60 * 60 * 1e3, window.setTimeout(sr, dr), J && (window.turnstile._testUpgrade = sr);
	var pe, R, De, ve, V, _t, Fe, Ue, dr;
})();