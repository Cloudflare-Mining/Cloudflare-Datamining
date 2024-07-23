"use strict";
(function() {
	function Rt(e, n, r, o, c, u, y) {
		try {
			var _ = e[u](y),
				d = _.value
		} catch (p) {
			r(p);
			return
		}
		_.done ? n(d) : Promise.resolve(d).then(o, c)
	}

	function It(e) {
		return function() {
			var n = this,
				r = arguments;
			return new Promise(function(o, c) {
				var u = e.apply(n, r);

				function y(d) {
					Rt(u, o, c, y, _, "next", d)
				}

				function _(d) {
					Rt(u, o, c, y, _, "throw", d)
				}
				y(void 0)
			})
		}
	}

	function F(e, n) {
		return n != null && typeof Symbol != "undefined" && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : F(e, n)
	}

	function Ie(e, n, r) {
		return n in e ? Object.defineProperty(e, n, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[n] = r, e
	}

	function Oe(e) {
		for (var n = 1; n < arguments.length; n++) {
			var r = arguments[n] != null ? arguments[n] : {},
				o = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (o = o.concat(Object.getOwnPropertySymbols(r).filter(function(c) {
				return Object.getOwnPropertyDescriptor(r, c).enumerable
			}))), o.forEach(function(c) {
				Ie(e, c, r[c])
			})
		}
		return e
	}

	function gr(e, n) {
		var r = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			n && (o = o.filter(function(c) {
				return Object.getOwnPropertyDescriptor(e, c).enumerable
			})), r.push.apply(r, o)
		}
		return r
	}

	function Ke(e, n) {
		return n = n != null ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gr(Object(n)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
		}), e
	}

	function Ot(e) {
		if (Array.isArray(e)) return e
	}

	function Ct(e, n) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var o = [],
				c = !0,
				u = !1,
				y, _;
			try {
				for (r = r.call(e); !(c = (y = r.next()).done) && (o.push(y.value), !(n && o.length === n)); c = !0);
			} catch (d) {
				u = !0, _ = d
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

	function Nt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function $e(e, n) {
		(n == null || n > e.length) && (n = e.length);
		for (var r = 0, o = new Array(n); r < n; r++) o[r] = e[r];
		return o
	}

	function kt(e, n) {
		if (e) {
			if (typeof e == "string") return $e(e, n);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return $e(e, n)
		}
	}

	function xe(e, n) {
		return Ot(e) || Ct(e, n) || kt(e, n) || Nt()
	}

	function L(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ce(e, n) {
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

		function _(p) {
			return function(T) {
				return d([p, T])
			}
		}

		function d(p) {
			if (o) throw new TypeError("Generator is already executing.");
			for (; y && (y = 0, p[0] && (r = 0)), r;) try {
				if (o = 1, c && (u = p[0] & 2 ? c.return : p[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, p[1])).done) return u;
				switch (c = 0, u && (p = [p[0] & 2, u.value]), p[0]) {
					case 0:
					case 1:
						u = p;
						break;
					case 4:
						return r.label++, {
							value: p[1],
							done: !1
						};
					case 5:
						r.label++, c = p[1], p = [0];
						continue;
					case 7:
						p = r.ops.pop(), r.trys.pop();
						continue;
					default:
						if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (p[0] === 6 || p[0] === 2)) {
							r = 0;
							continue
						}
						if (p[0] === 3 && (!u || p[1] > u[0] && p[1] < u[3])) {
							r.label = p[1];
							break
						}
						if (p[0] === 6 && r.label < u[1]) {
							r.label = u[1], u = p;
							break
						}
						if (u && r.label < u[2]) {
							r.label = u[2], r.ops.push(p);
							break
						}
						u[2] && r.ops.pop(), r.trys.pop();
						continue
				}
				p = n.call(e, r)
			} catch (T) {
				p = [6, T], c = 0
			} finally {
				o = u = 0
			}
			if (p[0] & 5) throw p[1];
			return {
				value: p[0] ? p[1] : void 0,
				done: !0
			}
		}
	}
	var Lt = {
		code: 200500,
		internalRepr: "iframe_load_err",
		public: !0,
		retryable: !1,
		description: "Turnstile's api.js was loaded, but the iframe under challenges.cloudflare.com could not be loaded. Has the visitor blocked some parts of challenges.cloudflare.com or are they self-hosting api.js?"
	};
	var Mt = 300020;
	var Ne = 300030;
	var ke = 300031;
	var H;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(H || (H = {}));
	var X;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(X || (X = {}));
	var Le;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Le || (Le = {}));
	var fe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(fe || (fe = {}));
	var J;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(J || (J = {}));
	var le;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(le || (le = {}));
	var Y;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(Y || (Y = {}));
	var pe;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(pe || (pe = {}));
	var ue;
	(function(e) {
		e.EXECUTE = "execute"
	})(ue || (ue = {}));
	var Je;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Je || (Je = {}));

	function N(e, n) {
		return e.indexOf(n) !== -1
	}

	function Ze(e) {
		return N(["auto", "dark", "light"], e)
	}

	function et(e) {
		return N(["auto", "never"], e)
	}

	function tt(e) {
		return e > 0 && e < 9e5
	}

	function rt(e) {
		return e > 0 && e < 36e4
	}
	var yr = /^[0-9A-Za-z_-]{3,100}$/;

	function Pt(e) {
		return yr.test(e)
	}
	var hr = /^[a-z0-9_-]{0,32}$/i;

	function nt(e) {
		return e === void 0 ? !0 : typeof e == "string" && hr.test(e)
	}
	var _r = /^[a-z0-9_\-=]{0,255}$/i;

	function at(e) {
		return e === void 0 ? !0 : typeof e == "string" && _r.test(e)
	}

	function it(e) {
		return N(["normal", "compact", "invisible"], e)
	}

	function ot(e) {
		return N(["auto", "manual", "never"], e)
	}

	function ct(e) {
		return N(["auto", "manual", "never"], e)
	}
	var br = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function lt(e) {
		return e === "auto" || br.test(e)
	}

	function ut(e) {
		return N(["always", "execute", "interaction-only"], e)
	}

	function Dt(e) {
		return N(["true", "false"], e)
	}

	function st(e) {
		return N(["render", "execute"], e)
	}
	var Ft = 300,
		Ut = 10;
	var Q = "0/0";

	function dt(e) {
		var n = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && n.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && n.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), n.size !== 0) return n.toString()
	}
	var Me = "cf-chl-widget-",
		V = "cloudflare-challenge",
		Vt = ".cf-turnstile",
		Wt = ".cf-challenge",
		jt = ".g-recaptcha",
		Ht = "cf_challenge_response",
		qt = "cf-turnstile-response",
		zt = "g-recaptcha-response",
		Bt = 8e3,
		ft = "private-token",
		Gt = 3,
		Xt = 500,
		Yt = 500;

	function pt(e, n) {
		var r = "https://challenges.cloudflare.com";
		if (n) {
			var o;
			r = (o = e["base-url"]) !== null && o !== void 0 ? o : r
		}
		return r
	}

	function vt(e, n, r, o, c, u, y) {
		var _ = pt(r, c),
			d = u ? "h/".concat(u, "/") : "",
			p = y ? "?".concat(y) : "",
			T = r["feedback-enabled"] === !1 ? "fbD" : "fbE";
		return "".concat(_, "/cdn-cgi/challenge-platform/").concat(d, "turnstile/if/ov2/av0/rcv").concat(o, "/").concat(e, "/").concat(n, "/").concat(r.theme, "/").concat(T, "/").concat(r.size, "/").concat(r.language, "/").concat(p)
	}

	function Pe(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Qt(e, n) {
		if (!F(e, n)) throw new TypeError("Cannot call a class as a function")
	}

	function Z(e, n) {
		return Z = Object.setPrototypeOf || function(o, c) {
			return o.__proto__ = c, o
		}, Z(e, n)
	}

	function Kt(e, n) {
		if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(n && n.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), n && Z(e, n)
	}

	function De() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function Ee(e, n, r) {
		return De() ? Ee = Reflect.construct : Ee = function(c, u, y) {
			var _ = [null];
			_.push.apply(_, u);
			var d = Function.bind.apply(c, _),
				p = new d;
			return y && Z(p, y.prototype), p
		}, Ee.apply(null, arguments)
	}

	function se(e) {
		return se = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, se(e)
	}

	function $t(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Fe(e) {
		var n = typeof Map == "function" ? new Map : void 0;
		return Fe = function(o) {
			if (o === null || !$t(o)) return o;
			if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof n != "undefined") {
				if (n.has(o)) return n.get(o);
				n.set(o, c)
			}

			function c() {
				return Ee(o, arguments, se(this).constructor)
			}
			return c.prototype = Object.create(o.prototype, {
				constructor: {
					value: c,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), Z(c, o)
		}, Fe(e)
	}

	function Jt(e, n) {
		return n && (L(n) === "object" || typeof n == "function") ? n : Pe(e)
	}

	function Zt(e) {
		var n = De();
		return function() {
			var o = se(e),
				c;
			if (n) {
				var u = se(this).constructor;
				c = Reflect.construct(o, arguments, u)
			} else c = o.apply(this, arguments);
			return Jt(this, c)
		}
	}
	var er = function(e) {
		"use strict";
		Kt(r, e);
		var n = Zt(r);

		function r(o, c) {
			Qt(this, r);
			var u;
			return u = n.call(this, o), Ie(Pe(u), "code", void 0), u.name = "TurnstileError", u.code = c, u
		}
		return r
	}(Fe(Error));

	function v(e, n) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new er(r, n)
	}

	function b(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Ue(e) {
		return e.startsWith(Me) ? e.substring(Me.length) : null
	}

	function ee(e) {
		return "".concat(Me).concat(e)
	}

	function mt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			n = document.currentScript;
		if (F(n, HTMLScriptElement) && e.test(n.src)) return n;
		for (var r = document.querySelectorAll("script"), o = 0, c; c = r[o]; o++)
			if (F(c, HTMLScriptElement) && e.test(c.src)) return c
	}

	function tr() {
		var e = mt();
		e || v("Could not find Turnstile script tag, some features may not be available", 43777);
		var n = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (n.loadedAsync = !0);
		var r = e.src,
			o = r.split("?");
		return o.length > 1 && (n.params = new URLSearchParams(o[1])), n
	}

	function W() {
		return typeof performance != "undefined" && performance.now ? performance.now() : Date.now()
	}

	function rr(e, n) {
		var r, o, c = pt(n.params, !1),
			u = "h/".concat("b", "/"),
			y = "".concat(c, "/cdn-cgi/challenge-platform/").concat(u, "feedback-reports/").concat(Ue(e), "/").concat(n.displayLanguage, "/");
		n.wrapper.parentNode || v("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
		var _ = document.createElement("div");
		_.style.position = "fixed", _.style.zIndex = "21474836419";
		var d = document.createElement("div");
		d.className = "cf-turnstile-feedback", d.id = "cf-fr-id", d.style.borderColor = "#000000", d.style.width = "450px";
		var p = ["ar-eg", "bg-bg", "da-dk", "de-de", "el-gr", "hr-hr", "hu-hu", "ja-jp", "ms-my", "id-id", "ru-ru", "sk-sk", "sl-si", "sr-ba", "uk-ua"],
			T = ["es-es", "cs-cz", "fa-ir", "fr-fr", "it-it", "nb-no", "nl-nl", "pl-pl", "pt-br", "th-th", "tr-tr"],
			M, j;
		N(p, (M = (r = n.displayLanguage) === null || r === void 0 ? void 0 : r.toLowerCase()) !== null && M !== void 0 ? M : "nonexistent") ? d.style.height = "520px" : N(T, (j = (o = n.displayLanguage) === null || o === void 0 ? void 0 : o.toLowerCase()) !== null && j !== void 0 ? j : "nonexistent") ? d.style.height = "480px" : d.style.height = "460px", d.style.position = "absolute", d.style.zIndex = "21474836420", d.style.borderWidth = "1px", d.style.borderColor = "#000", d.style.borderStyle = "solid", d.style.backgroundColor = "#ffffff", d.style.borderRadius = "10px", d.style.left = "-122px", d.style.top = "-91px", d.style.overflow = "hidden";
		var A = document.createElement("iframe");
		A.id = e + "-fr", A.setAttribute("src", y), A.setAttribute("allow", "cross-origin-isolated; fullscreen"), A.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), A.setAttribute("scrolling", "no"), A.style.borderWidth = "0px", A.style.width = "100%", A.style.height = "100%", A.style.overflow = "hidden";
		var w = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		w.style.position = "absolute", w.style.width = "26px", w.style.height = "26px", w.style.zIndex = "21474836421", w.style.cursor = "pointer", n.displayRTL ? w.style.left = "6px" : w.style.right = "2px", w.style.top = "5px", w.setAttribute("width", "26"), w.setAttribute("height", "26"), w.addEventListener("click", function() {
			var a;
			(a = _.parentNode) === null || a === void 0 || a.removeChild(_)
		});
		var R = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		R.setAttribute("ry", "12"), R.setAttribute("rx", "12"), R.setAttribute("cy", "12"), R.setAttribute("cx", "12"), R.setAttribute("fill", "#aaaaaa"), R.setAttribute("stroke-width", "0"), w.appendChild(R);
		var I = document.createElementNS("http://www.w3.org/2000/svg", "line");
		I.setAttribute("stroke-width", "3"), I.setAttribute("stroke", "#fff"), I.setAttribute("fill", "none"), I.setAttribute("x1", "6"), I.setAttribute("x2", "18"), I.setAttribute("y1", "18"), I.setAttribute("y2", "5"), w.appendChild(I);
		var g = document.createElementNS("http://www.w3.org/2000/svg", "line");
		g.setAttribute("stroke-width", "3"), g.setAttribute("stroke", "#fff"), g.setAttribute("fill", "none"), g.setAttribute("x1", "6"), g.setAttribute("x2", "18"), g.setAttribute("y1", "5"), g.setAttribute("y2", "18"), w.appendChild(g), d.appendChild(A), d.appendChild(w), _.appendChild(d), n.wrapper.parentNode.appendChild(_)
	}

	function nr(e) {
		var n, r, o;
		(o = document.getElementById(e)) === null || o === void 0 || (r = o.parentElement) === null || r === void 0 || (n = r.parentElement) === null || n === void 0 || n.remove()
	}
	var gt = function(e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > n ? e.substring(0, n) : e
	};

	function ar(e) {
		if (!e) return "-";
		var n = function(r, o) {
			if (!r || r.tagName === "BODY") return o;
			for (var c = 1, u = r.previousElementSibling; u;) u.tagName === r.tagName && c++, u = u.previousElementSibling;
			var y = gt(r.tagName.toLowerCase()),
				_ = "".concat(y, "[").concat(c, "]");
			return n(r.parentNode, "/".concat(_).concat(o))
		};
		return n(e, "")
	}

	function ir(e, n, r) {
		for (var o = "", c = 0, u = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(M) {
					return c > n || o.length > r ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), y;
			(y = u.nextNode()) !== null && o.length < r;) {
			if (y.nodeType === Node.ELEMENT_NODE) {
				var _ = y;
				o += "".concat(gt(_.tagName.toLowerCase()));
				for (var d = 0; d < _.attributes.length; d++) {
					var p = _.attributes[d];
					o += "_".concat(gt(p.name, 2))
				}
				o += ">"
			} else y.nodeType === Node.TEXT_NODE && (o += "-t");
			var T = y.parentNode;
			for (c = 0; T !== e && T !== null;) c++, T = T.parentNode
		}
		return o.substring(0, r)
	}

	function or(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : L(e)));
		for (var n = 5381, r = 0; r < e.length; r++) {
			var o = e.charCodeAt(r);
			n = n * 33 ^ o
		}
		return n >>> 0
	}

	function cr(e, n) {
		var r;
		n.upgradeAttempts++;
		var o = mt();
		if (!(!o || !o.parentNode)) {
			var c = o == null ? void 0 : o.nonce;
			e._pState = n;
			var u = new URL(o.src),
				y = document.createElement("script");
			u.searchParams.set("_upgrade", "true"), u.searchParams.set("_cb", String(Date.now())), y.async = !0, c && (y.nonce = c), y.setAttribute("crossorigin", "anonymous"), y.src = u.toString(), o == null || (r = o.parentNode) === null || r === void 0 || r.replaceChild(y, o)
		}
	}

	function lr(e, n) {
		var r = e._pState;
		return r ? (n.isReady = r.isReady, n.isRecaptchaCompatibilityMode = r.isRecaptchaCompatibilityMode, n.lastWidgetIdx = r.lastWidgetIdx, n.scriptWasLoadedAsync = r.scriptWasLoadedAsync, n.upgradeAttempts = r.upgradeAttempts, n.upgradeCompletedCount = r.upgradeCompletedCount + 1, n.turnstileLoadInitTimeMs = W(), n.watchCatInterval = null, n.watchCatSeq = r.watchCatSeq, n.widgetMap = r.widgetMap, !0) : !1
	}
	var xr = 900,
		Er = 3,
		wr = 50;

	function Tr(e) {
		e.watchCatSeq++;
		var n = !0,
			r = !1,
			o = void 0;
		try {
			for (var c = e.widgetMap[Symbol.iterator](), u; !(n = (u = c.next()).done); n = !0) {
				var y = xe(u.value, 2),
					_ = y[0],
					d = y[1],
					p;
				d.watchcat.seq = e.watchCatSeq, d.watchcat.lastAckedSeq === 0 && (d.watchcat.lastAckedSeq = e.watchCatSeq);
				var T = ee(_);
				if (!T || !d.shadow) {
					d.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				var M = d.shadow.querySelector("#".concat(T));
				if (!M) {
					d.watchcat.missingWidgetWarning || (b("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				if (!(d.isComplete || d.isFailed)) {
					var j = d.watchcat.seq - 1 - Er,
						A = d.watchcat.lastAckedSeq < j,
						w = d.watchcat.seq - 1 - wr,
						R = d.isOverrunning && d.watchcat.overrunBeginSeq < w;
					if ((d.isExecuting || !d.isInitialized || d.isInitialized && !d.isStale && !d.isExecuted) && d.watchcat.lastAckedSeq !== 0 && A || R) {
						var I;
						d.watchcat.lastAckedSeq = 0, d.watchcat.seq = 0, d.isExecuting = !1;
						var g = function(f, s) {
							console.log("Turnstile Widget seem to have ".concat(f, ": "), s)
						};
						A ? g("crashed", _) : R && g("hung", _);
						var a = A ? Ne : ke,
							i;
						if ((I = e.msgHandler) === null || I === void 0 || I.call(e, {
								data: {
									source: V,
									widgetId: _,
									code: a,
									event: "fail",
									rcV: (i = d.nextRcV) !== null && i !== void 0 ? i : Q
								}
							}), 0) var t;
						continue
					}(p = M.contentWindow) === null || p === void 0 || p.postMessage({
						source: V,
						widgetId: _,
						seq: e.watchCatSeq,
						event: "meow"
					}, "*")
				}
			}
		} catch (f) {
			r = !0, o = f
		} finally {
			try {
				!n && c.return != null && c.return()
			} finally {
				if (r) throw o
			}
		}
	}

	function yt(e) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			Tr(e)
		}, xr))
	}

	function ht(e) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || n) && clearInterval(e.watchCatInterval)
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

	function _t(e) {
		pr(e, "")
	}

	function Et() {
		var e = [Vt, Wt];
		h.isRecaptchaCompatibilityMode && e.push(jt), document.querySelectorAll(e.join(", ")).forEach(function(n) {
			return wt.render(n)
		})
	}
	var Tt = [];

	function ur() {
		h.isReady = !0;
		var e = !0,
			n = !1,
			r = void 0;
		try {
			for (var o = Tt[Symbol.iterator](), c; !(e = (c = o.next()).done); e = !0) {
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

	function pr(e, n) {
		var r = document.getElementById("".concat(e, "_response"));
		r !== null && F(r, HTMLInputElement) && (r.value = n);
		var o = document.getElementById("".concat(e, "_legacy_response"));
		if (o !== null && F(o, HTMLInputElement) && (o.value = n), h.isRecaptchaCompatibilityMode) {
			var c = document.getElementById("".concat(e, "_g_response"));
			c !== null && F(c, HTMLInputElement) && (c.value = n)
		}
	}

	function bt(e, n) {
		var r = n.params,
			o = r.size,
			c = o === void 0 ? "normal" : o,
			u = n.mode;
		switch (u) {
			case H.NON_INTERACTIVE:
			case H.MANAGED:
				switch (c) {
					case X.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case X.INVISIBLE:
						v('Invalid value for parameter "size", expected "'.concat(X.COMPACT, '" or "').concat(X.NORMAL, '", got "').concat(c, '"'), 2817);
					case X.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case H.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				v('Invalid value for parameter "mode", expected "'.concat(H.NON_INTERACTIVE, '", "').concat(H.MANAGED, '" or "').concat(H.INVISIBLE, '", got "').concat(u, '"'), 2818)
		}
	}

	function sr(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Sr(e, n) {
		var r = n.get("turnstile_iframe_alt");
		r && (e.title = r)
	}

	function Ar(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Rr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function dr() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var wt = function() {
		var e = function(a, i, t, f) {
				return A.apply(this, arguments)
			},
			n = function(a, i, t) {
				if (a.params.retry === fe.AUTO || t) {
					a.isExecuted && (a.msgQueue.push(ue.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var f, s = t ? 0 : 1e3 * 2 + ((f = a.params["retry-interval"]) !== null && f !== void 0 ? f : 0);
					a.retryTimeout = window.setTimeout(function() {
						p(i)
					}, s)
				}
			},
			r = function(a, i, t) {
				var f;
				a.response === void 0 && v("[Internal Error] Widget was completed but no response was given", 1362), a.isExecuting = !1, a.isComplete = !0, pr(i, a.response), (f = a.cbSuccess) === null || f === void 0 || f.call(a, a.response, t)
			},
			o = function(a) {
				if (!a) return [];
				for (var i = a.attributes, t = i.length, f = new Array(t), s = 0; s < t; s++) f[s] = i[s].name;
				return f
			},
			c = function(a, i, t) {
				if (a.rcV = i, 0) var f
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
					for (var s = h.widgetMap[Symbol.iterator](), m; !(i = (m = s.next()).done); i = !0) {
						var x = xe(m.value, 2),
							E = x[0],
							l = x[1];
						if (l.wrapper.parentElement === a) return E
					}
				} catch (S) {
					t = !0, f = S
				} finally {
					try {
						!i && s.return != null && s.return()
					} finally {
						if (t) throw f
					}
				}
				return null
			},
			_ = function(a, i, t) {
				for (; a.msgQueue.length;) {
					var f, s = a.msgQueue.pop();
					(f = t.contentWindow) === null || f === void 0 || f.postMessage({
						source: V,
						widgetId: i,
						event: s
					}, "*")
				}
			},
			d = function(a, i) {
				if (i) {
					var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "refresh-timeout", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey", "feedback-enabled"],
						f = [],
						s = !0,
						m = !1,
						x = void 0;
					try {
						for (var E = t[Symbol.iterator](), l; !(s = (l = E.next()).done); s = !0) {
							var S = l.value;
							i[S] && i[S] !== a.params[S] && f.push(S)
						}
					} catch (k) {
						m = !0, x = k
					} finally {
						try {
							!s && E.return != null && E.return()
						} finally {
							if (m) throw x
						}
					}
					f.length !== 0 && v("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(f.join(",")), 3618), i.action && (nt(i.action) || v('Invalid input for optional parameter "action", got "'.concat(i.action, '"'), 3604), a.action = i.action), i.cData && (at(i.cData) || v('Invalid input for optional parameter "cData", got "'.concat(i.cData, '"'), 3605), a.cData = i.cData), i["after-interactive-callback"] && (a.cbAfterInteractive = i["after-interactive-callback"]), i["before-interactive-callback"] && (a.cbBeforeInteractive = i["before-interactive-callback"]), i.callback && (a.cbSuccess = i.callback), i["expired-callback"] && (a.cbExpired = i["expired-callback"]), i["timeout-callback"] && (a.cbTimeout = i["timeout-callback"]), i["error-callback"] && (a.cbError = i["error-callback"]), i["unsupported-callback"] && (a.cbUnsupported = i["unsupported-callback"]), i.chlPageData && (a.chlPageData = i.chlPageData)
				}
			},
			p = function(a) {
				var i = R(a);
				i || v("Nothing to reset found for provided container", 3329);
				var t = h.widgetMap.get(i);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isComplete = !1, t.isExecuting = !1, t.isExpired = !1, t.isFailed = !1, t.isInitialized = !1, t.isStale = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === pe.RENDER && (t.msgQueue.push(ue.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
					var f = ee(i),
						s = t.shadow.querySelector("#".concat(f));
					(!f || !s) && v("Widget ".concat(i, " to reset was not found."), 3330), t.params.appearance === Y.INTERACTION_ONLY && sr(s), t.params.sitekey === null && v("Unexpected Error: Sitekey is null", 3347);
					var m;
					s.src = vt(i, t.params.sitekey, t.params, (m = t.rcV) !== null && m !== void 0 ? m : Q, !1, "b", dt(t)), _t(f), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else v("Widget ".concat(i, " to reset was not found."), 3331)
			},
			T = function(a) {
				var i, t = R(a);
				if (!t || !h.widgetMap.has(t)) {
					b("Nothing to remove found for the provided container");
					return
				}
				var f = ee(t),
					s = ["input#".concat(f, "_response"), "input#".concat(f, "_legacy_response"), "input#".concat(f, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(E) {
					return E.remove()
				});
				var m = h.widgetMap.get(t);
				m == null || m.shadow.querySelectorAll(s.join(", ")).forEach(function(E) {
					return E.remove()
				}), m == null || m.wrapper.remove();
				var x = (i = h.widgetMap.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				x && window.clearTimeout(x), h.widgetMap.delete(t), ht(h)
			},
			M = function(a, i) {
				var t, f, s = W(),
					m;
				if (typeof a == "string") try {
					var x = document.querySelector(a);
					x || v('Unable to find a container for "'.concat(a, '"'), 3585), m = x
				} catch (Cr) {
					v('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(a, '"'), 3586)
				} else F(a, HTMLElement) ? m = a : v('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
				var E = Ir(m);
				if (E) {
					var l = Object.assign(E, i),
						S = l.action,
						k = l.cData,
						q = l.chlPageData,
						P = l.sitekey,
						C;
					l.theme = (C = l.theme) !== null && C !== void 0 ? C : Le.AUTO;
					var te;
					l.retry = (te = l.retry) !== null && te !== void 0 ? te : fe.AUTO;
					var ge;
					l.execution = (ge = l.execution) !== null && ge !== void 0 ? ge : pe.RENDER;
					var re;
					l.appearance = (re = l.appearance) !== null && re !== void 0 ? re : Y.ALWAYS;
					var de;
					l["retry-interval"] = Number((de = l["retry-interval"]) !== null && de !== void 0 ? de : Bt);
					var ne;
					l["expiry-interval"] = Number((ne = l["expiry-interval"]) !== null && ne !== void 0 ? ne : (Ft - Ut) * 1e3);
					var ae;
					l.size = (ae = l.size) !== null && ae !== void 0 ? ae : X.NORMAL;
					var we = l.callback,
						ye = l["expired-callback"],
						He = l["timeout-callback"],
						he = l["after-interactive-callback"],
						qe = l["before-interactive-callback"],
						K = l["error-callback"],
						_e = l["unsupported-callback"];
					typeof P != "string" && v('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof P == "undefined" ? "undefined" : L(P), '"'), 3588), Pt(P) || v('Invalid input for parameter "sitekey", got "'.concat(P, '"'), 3589), it(l.size) || v('Invalid type for parameter "size", expected normal|compact, got "'.concat(l.size, '" ').concat(L(l.size)), 3590), Ze(l.theme) || v('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(l.theme, '" ').concat(L(l.theme)), 3591), et(l.retry) || v('Invalid type for parameter "retry", expected never|auto, got "'.concat(l.retry, '" ').concat(L(l.retry)), 3592), l.language || (l.language = "auto"), lt(l.language) || (b('Invalid language value: "'.concat(l.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")), l.language = "auto"), ut(l.appearance) || v('Unknown appearance value: "'.concat(l.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600), st(l.execution) || v('Unknown execution value: "'.concat(l.execution, ", expected either: 'render' or 'execute'."), 3601), tt(l["retry-interval"]) || v('Invalid retry-interval value: "'.concat(l["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602), rt(l["expiry-interval"]) || v('Invalid expiry-interval value: "'.concat(l["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					var ie, B = (ie = l["refresh-expired"]) !== null && ie !== void 0 ? ie : J.AUTO;
					ot(B) ? l["refresh-expired"] = B : v('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(B, '" ').concat(typeof B == "undefined" ? "undefined" : L(B)), 3603);
					var oe, $ = (oe = l["refresh-timeout"]) !== null && oe !== void 0 ? oe : le.AUTO;
					ct(B) ? l["refresh-timeout"] = $ : v('Invalid type for parameter "refresh-timeout", expected never|manual|auto, got "'.concat($, '" ').concat(typeof $ == "undefined" ? "undefined" : L($)), 3603);
					var be = m.querySelector(".cf-turnstile-wrapper");
					be && T(m);
					var D = document.createElement("iframe"),
						U = document.createElement("div"),
						Te = U.attachShadow({
							mode: "closed"
						});
					U.classList.add("cf-turnstile-wrapper"), U.style.border = "0", U.style.margin = "0", U.style.padding = "0", nt(S) || v('Invalid input for optional parameter "action", got "'.concat(S, '"'), 3604), at(k) || v('Invalid input for optional parameter "cData", got "'.concat(k, '"'), 3605);
					var ce = u(),
						G = ee(ce);
					if (!(!ce || !G)) {
						var St = [],
							ze = l.execution === pe.RENDER;
						ze && St.push(ue.EXECUTE), h.lastWidgetIdx++;
						var vr = {};
						h.widgetMap.set(ce, Ke(Oe({
							idx: h.lastWidgetIdx,
							action: S,
							cData: k,
							chlPageData: q,
							cbSuccess: we,
							cbError: K,
							cbExpired: ye,
							cbTimeout: He,
							cbUnsupported: _e,
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
							msgQueue: St,
							rcV: Q,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1,
								overrunBeginSeq: 0
							}
						}, vr), {
							widgetRenderStartTimeMs: s,
							widgetRenderEndTimeMs: 0,
							widgetParamsStartTimeMs: 0,
							widgetInitStartTimeMs: 0,
							shadow: Te,
							wrapper: U,
							isOverrunning: !1
						})), yt(h);
						var Be = h.widgetMap.get(ce);
						Be || v("Turnstile Initialization Error ", 3606), D.style.display = "none", D.style.border = "none", D.style.overflow = "hidden", D.setAttribute("src", vt(ce, P, l, Q, !1, "b", dt(Be))), D.onerror = function() {
							if (K) {
								K == null || K(String(Lt.code));
								return
							}
							v("Could not load challenge from challenges.cloudflare.com.", 161)
						};
						var At = ["cross-origin-isolated", "fullscreen", "autoplay"],
							Ge;
						N((Ge = (f = document.featurePolicy) === null || f === void 0 || (t = f.features) === null || t === void 0 ? void 0 : t.call(f)) !== null && Ge !== void 0 ? Ge : [], ft) && At.push(ft), D.setAttribute("allow", At.join("; ")), D.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), D.id = G;
						var Xe;
						D.tabIndex = (Xe = l.tabindex) !== null && Xe !== void 0 ? Xe : 0, D.title = "Widget containing a Cloudflare security challenge", Te.appendChild(D);
						var Ye, mr = (Ye = l["response-field"]) !== null && Ye !== void 0 ? Ye : !0;
						if (mr) {
							var Se = document.createElement("input");
							Se.type = "hidden";
							var Qe;
							if (Se.name = (Qe = l["response-field-name"]) !== null && Qe !== void 0 ? Qe : qt, Se.id = "".concat(G, "_response"), U.appendChild(Se), typeof l["response-field-name"] != "string" && Rr(P)) {
								var Ae = document.createElement("input");
								Ae.type = "hidden", Ae.name = Ht, Ae.id = "".concat(G, "_legacy_response"), U.appendChild(Ae)
							}
						}
						if (h.isRecaptchaCompatibilityMode) {
							var Re = document.createElement("input");
							Re.type = "hidden", Re.name = zt, Re.id = "".concat(G, "_g_response"), U.appendChild(Re)
						}
						return m.appendChild(U), Be.widgetRenderEndTimeMs = W(), G
					}
				}
			},
			j = function() {
				var a, i = -1,
					t = !0,
					f = !1,
					s = void 0;
				try {
					for (var m = h.widgetMap[Symbol.iterator](), x; !(t = (x = m.next()).done); t = !0) {
						var E = xe(x.value, 2),
							l = E[0],
							S = E[1];
						i < S.idx && (a = l, i = S.idx)
					}
				} catch (k) {
					f = !0, s = k
				} finally {
					try {
						!t && m.return != null && m.return()
					} finally {
						if (f) throw s
					}
				}
				return i === -1 && v("Could not find widget", 43778), a
			};

		function A() {
			return A = It(function(g, a, i, t) {
				var f, s, m, x, E, l, S, k, q, P;
				return Ce(this, function(C) {
					switch (C.label) {
						case 0:
							if (f = g.params.sitekey, s = dr(), !s) return b("Cannot determine Turnstile's embedded location, aborting clearance redemption."), r(g, a, !1), [2];
							m = "h/".concat("b", "/"), x = new URL(s), E = "https", l = "", S = "".concat(E, "://").concat(x.host, "/cdn-cgi/challenge-platform/").concat(m, "rc/").concat(t).concat(l), C.label = 1;
						case 1:
							return C.trys.push([1, 6, , 7]), [4, fetch(S, {
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
							return k = C.sent(), k.status === 200 ? [3, 3] : (b("Cannot determine Turnstile's embedded location, aborting clearance redemption, are you running Turnstile on a Cloudflare Zone?"), r(g, a, !1), [3, 5]);
						case 3:
							return [4, k.json()];
						case 4:
							if (q = C.sent(), "status" in q && q.status === "redeemed") return r(g, a, !0), [2];
							C.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return P = C.sent(), b("Error contacting Turnstile, aborting clearance remdeption."), r(g, a, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), A.apply(this, arguments)
		}
		var w = function(g) {
			var a = g.data;
			if (a.source === V) {
				if (!Ar(g)) {
					b("Ignored message from wrong origin: " + g.origin);
					return
				}
				if (!(!a.widgetId || !h.widgetMap.has(a.widgetId))) {
					var i = ee(a.widgetId),
						t = h.widgetMap.get(a.widgetId);
					if (!(!i || !t)) switch (a.event) {
						case "init": {
							var f;
							t.widgetInitStartTimeMs = W();
							var s = t.shadow.getElementById(i);
							s || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074), t.mode = a.mode, t.nextRcV = a.nextRcV, t.mode === H.INVISIBLE && t.params["refresh-expired"] === J.MANUAL && b("refresh-expired=manual is impossible in invisible mode, consider using '".concat(J.AUTO, "' or '").concat(J.NEVER, "'")), t.mode !== H.MANAGED && t.params["refresh-timeout"] !== le.AUTO && b("setting refresh-timeout has no effect on an invisible/non-interactive widget and will be ignored."), t.params.appearance === Y.ALWAYS || t.isExecuting && t.params.appearance === Y.EXECUTE ? bt(s, t) : sr(s), s.style.display = "";
							var m = t.shadow.querySelector("#".concat(i));
							m || v("Received state for an unknown widget: ".concat(a.widgetId), 3078), (f = m.contentWindow) === null || f === void 0 || f.postMessage({
								source: V,
								widgetId: a.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var x = t.shadow.getElementById(i);
							x || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3074);
							var E = new Map;
							t.displayLanguage = a.displayLanguage, Object.keys(a.translationData).forEach(function(G) {
								E.set(G, a.translationData[G])
							}), Sr(x, E);
							break
						}
						case "languageUnsupported": {
							b("Language ".concat(t.params.language, " is not supported, falling back to: ").concat(a.fallback)), t.displayLanguage = a.fallback;
							break
						}
						case "reject": {
							var l = t.shadow.getElementById(i);
							if (t.isExecuting = !1, l || v("Cannot initialize Widget, Element not found (#".concat(i, ")."), 3075), a.reason === "outdated_browser") {
								var S;
								(S = t.cbUnsupported) === null || S === void 0 || S.call(t)
							}
							break
						}
						case "food": {
							t.watchcat && a.seq > t.watchcat.lastAckedSeq && (t.watchcat.lastAckedSeq = a.seq);
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
							c(t, Q, a.widgetId), t.response = a.token, a.sToken ? e(t, i, a.sToken, a.chlId) : r(t, i, !1);
							break
						}
						case "fail": {
							a.rcV && c(t, a.rcV, a.widgetId), a.cfChlOut && (t.cfChlOut = a.cfChlOut), a.cfChlOutS && (t.cfChlOutS = a.cfChlOutS), a.code && (t.errorCode = a.code), t.isExecuting = !1, t.isFailed = !0, t.isInitialized = !0, _t(i);
							var k = t.cbError,
								q = a.code === Ne || a.code === ke;
							if (q) {
								var P, C = t.shadow.querySelector("#".concat(i));
								C == null || (P = C.contentWindow) === null || P === void 0 || P.postMessage({
									source: V,
									widgetId: a.widgetId,
									event: "forceFail"
								}, "*")
							}
							if (k) {
								var te;
								k(String((te = a.code) !== null && te !== void 0 ? te : Mt)) ? t.params.retry === fe.AUTO && !t.isResetting && n(t, i, q) : (a.code && b("Error: ".concat(a.code)), n(t, i, q))
							} else a.code ? (n(t, i, q), v("Error: ".concat(a.code), 3076)) : n(t, i, !1);
							break
						}
						case "feedbackInit": {
							var ge = t.wrapper.querySelector("#".concat(i, "-fr"));
							if (ge) {
								b("A feedback report form is already opened for this widget.");
								return
							}
							rr(i, t);
							break
						}
						case "requestFeedbackData": {
							var re, de = t.shadow.querySelector("#".concat(i));
							de || v("Received state for an unknown widget: #".concat(i, " / ").concat(a.widgetId), 3078), (re = de.contentWindow) === null || re === void 0 || re.postMessage({
								source: V,
								widgetId: a.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var ne, ae, we = (ne = t.wrapper.parentNode) === null || ne === void 0 ? void 0 : ne.querySelector("#".concat(i, "-fr"));
							we || v("Received state for an unknown widget: ".concat(a.widgetId), 3078), (ae = we.contentWindow) === null || ae === void 0 || ae.postMessage({
								source: V,
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
							var ye, He = (ye = t.wrapper.parentNode) === null || ye === void 0 ? void 0 : ye.querySelector("#".concat(i, "-fr"));
							He || v("Received state for an unknown widget: ".concat(a.widgetId), 3078), nr("".concat(i, "-fr"));
							break
						}
						case "tokenExpired": {
							var he, qe = a.token;
							t.isExpired = !0, (he = t.cbExpired) === null || he === void 0 || he.call(t, qe), t.params["refresh-expired"] === J.AUTO && !t.isResetting && p(i);
							break
						}
						case "interactiveTimeout": {
							c(t, Q, a.widgetId), _t(i);
							var K = t.cbTimeout;
							if (K ? K() : t.params["refresh-timeout"] === le.NEVER && !t.isResetting && b("The widget encountered an interactive timeout and is set to never refresh. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail."), t.params["refresh-timeout"] === le.AUTO && !t.isResetting) {
								var _e = t.cbAfterInteractive;
								_e == null || _e(), p(i)
							}
							break
						}
						case "refreshRequest": {
							c(t, Q, a.widgetId), p(i);
							break
						}
						case "reloadRequest": {
							c(t, a.nextRcV, a.widgetId), p(i);
							break
						}
						case "interactiveBegin": {
							var ie, B = t.shadow.getElementById(i);
							B || v("Cannot layout widget, Element not found (#".concat(i, ")."), 3076), (ie = t.cbBeforeInteractive) === null || ie === void 0 || ie.call(t), t.params.appearance === Y.INTERACTION_ONLY && bt(B, t);
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
							var be = t.shadow.querySelector("#".concat(i));
							be || v("Received state for an unknown widget: ".concat(a.widgetId), 3078), t.isResetting = !1;
							var D = {},
								U = W(),
								Te = {
									"w.iW": window.innerWidth,
									"ht.atrs": o(document.body.parentNode),
									pi: {
										xp: ar(t.wrapper).substring(0, Yt),
										pfp: ir(document, Gt, Xt),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: or(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href,
										sR: t.wrapper.shadowRoot === null
									}
								},
								ce = W() - U;
							($ = be.contentWindow) === null || $ === void 0 || $.postMessage(Oe({
								source: V,
								widgetId: a.widgetId,
								event: "extraParams",
								action: t.action,
								cData: t.cData,
								chlPageData: t.chlPageData,
								rcV: t.rcV,
								ch: "bbfecc7f1c71",
								url: dr(),
								retry: t.params.retry,
								"expiry-interval": t.params["expiry-interval"],
								"retry-interval": t.params["retry-interval"],
								"refresh-expired": t.params["refresh-expired"],
								"refresh-timeout": t.params["refresh-timeout"],
								language: t.params.language,
								execution: t.params.execution,
								appearance: t.params.appearance,
								wPr: Te,
								turnstileAgeMs: W() - h.turnstileLoadInitTimeMs,
								widgetAgeMs: W() - t.widgetRenderStartTimeMs,
								upgradeAttempts: h.upgradeAttempts,
								upgradeCompletedCount: h.upgradeCompletedCount,
								timeRenderMs: t.widgetRenderEndTimeMs - t.widgetRenderStartTimeMs,
								timeToInitMs: t.widgetInitStartTimeMs - t.widgetRenderEndTimeMs,
								timeToParamsMs: t.widgetParamsStartTimeMs - t.widgetInitStartTimeMs,
								tiefTimeMs: ce
							}, D), "*"), _(t, a.widgetId, be), t.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		h.msgHandler = w, window.addEventListener("message", w);

		function R(g) {
			if (typeof g == "string") {
				var a = Ue(g);
				if (a && h.widgetMap.has(a)) return a;
				if (h.widgetMap.has(g)) return g;
				try {
					var i = document.querySelector(g);
					return i ? R(i) : null
				} catch (t) {
					return null
				}
			}
			return F(g, Element) ? y(g) : g || h.widgetMap.size === 0 ? null : h.widgetMap.keys().next().value
		}
		var I = {};
		return Ke(Oe({}, I), {
			ready: function(a) {
				if (h.scriptWasLoadedAsync && (b("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), v("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof a != "function" && v('turnstile.ready() expected a "function" argument, got "'.concat(typeof a == "undefined" ? "undefined" : L(a), '"'), 3841), a(), typeof a != "function" && v('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), h.isReady) {
					a();
					return
				}
				Tt.push(a)
			},
			implicitRender: Et,
			execute: function(a, i) {
				var t = R(a);
				if (!t) {
					i === void 0 && v("Please provide 2 parameters to execute: container and parameters", 43521);
					var f = M(a, i);
					f || v("Failed to render widget", 43522), t = f
				}
				var s = h.widgetMap.get(t);
				if (s) {
					d(s, i);
					var m = ee(t);
					if (s.isExecuting) {
						b("Call to execute() on a widget that is already executing (".concat(m, "), consider using reset() before execute()"));
						return
					} else s.isExecuting = !0;
					if (s.response) {
						var x;
						s.isExecuting = !1, b("Call to execute() on a widget that was already executed (".concat(m, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), (x = s.cbSuccess) === null || x === void 0 || x.call(s, s.response, !1);
						return
					}
					s.isExpired && b("Call to execute on a expired-widget (".concat(m, "), consider using reset() before")), s.isStale && (p(m), s.isExecuting = !0), s.msgQueue.push(ue.EXECUTE), s.isExecuted = !0;
					var E = s.shadow.querySelector("#".concat(m));
					if (E || (s.isExecuting = !1, v("Widget ".concat(m, " to execute was not found"), 43522)), s.isResetting) return;
					if (s.isInitialized && _(s, t, E), s.isInitialized && s.params.appearance === Y.EXECUTE && bt(E, s), s.isExecuting) {
						var l, S = s.shadow.querySelector("#".concat(m));
						S || v("Received state for an unknown widget: ".concat(t), 3078), (l = S.contentWindow) === null || l === void 0 || l.postMessage({
							source: V,
							widgetId: t,
							event: "execute"
						}, "*")
					}
				}
			},
			render: M,
			reset: p,
			remove: T,
			getResponse: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = j();
					if (t) {
						var f, s = h.widgetMap.get(t);
						return s != null && s.isExpired && b("Call to getResponse on a widget that expired, consider refreshing the widget."), (f = h.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.response
					} else v("Could not find a widget", 43794)
				}
				var m = R(a);
				return m || v("Could not find widget for provided container", 43778), (i = h.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.response
			},
			isExpired: function(a) {
				var i;
				if (typeof a == "undefined") {
					var t = j();
					if (t) {
						var f, s;
						return (s = (f = h.widgetMap.get(t)) === null || f === void 0 ? void 0 : f.isExpired) !== null && s !== void 0 ? s : !1
					} else v("Could not find a widget", 43794)
				}
				var m = R(a);
				m || v("Could not find widget for provided container", 43778);
				var x;
				return (x = (i = h.widgetMap.get(m)) === null || i === void 0 ? void 0 : i.isExpired) !== null && x !== void 0 ? x : !1
			}
		})
	}();

	function Ir(e) {
		var n = e.getAttribute("data-sitekey"),
			r = {
				sitekey: n
			},
			o = e.getAttribute("data-tabindex");
		o && (r.tabindex = Number.parseInt(o, 10));
		var c = e.getAttribute("data-theme");
		c && (Ze(c) ? r.theme = c : b('Unknown data-theme value: "'.concat(c, '"')));
		var u = e.getAttribute("data-size");
		if (u && (it(u) ? r.size = u : b('Unknown data-size value: "'.concat(u, '"'))), 0) var y;
		var _ = e.getAttribute("data-action");
		typeof _ == "string" && (r.action = _);
		var d = e.getAttribute("data-cdata");
		typeof d == "string" && (r.cData = d);
		var p = e.getAttribute("data-retry");
		p && (et(p) ? r.retry = p : b('Invalid data-retry value: "'.concat(p, ", expected either 'never' or 'auto'\"")));
		var T = e.getAttribute("data-retry-interval");
		if (T) {
			var M = Number.parseInt(T, 10);
			tt(M) ? r["retry-interval"] = M : b('Invalid data-retry-interval value: "'.concat(T, ', expected an integer value > 0 and < 900000"'))
		}
		var j = e.getAttribute("data-expiry-interval");
		if (j) {
			var A = Number.parseInt(j, 10);
			rt(A) ? r["expiry-interval"] = A : b('Invalid data-expiry-interval value: "'.concat(A, ', expected an integer value > 0 and < 360000"'))
		}
		var w = e.getAttribute("data-refresh-expired");
		w && (ot(w) ? r["refresh-expired"] = w : b('Unknown data-refresh-expired value: "'.concat(w, ", expected either: 'never', 'auto' or 'manual'.")));
		var R = e.getAttribute("data-refresh-timeout");
		R && (ct(R) ? r["refresh-timeout"] = R : b('Unknown data-refresh-timeout value: "'.concat(R, ", expected either: 'never', 'auto' or 'manual'.")));
		var I = e.getAttribute("data-language");
		I && (lt(I) ? r.language = I : b('Invalid data-language value: "'.concat(I, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function g(E) {
			var l = e.getAttribute(E);
			return l && window[l] ? window[l] : void 0
		}
		var a = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		a.forEach(function(E) {
			r[E] = g("data-".concat(E))
		});
		var i = e.getAttribute("data-feedback-enabled");
		i ? (Dt(i) || b('Invalid data-feedback-enabled value: "'.concat(i, ", expected either: 'true' or 'false'. Value is ignored.")), r["feedback-enabled"] = i === "true") : r["feedback-enabled"] = !0;
		var t, f = (t = e.getAttribute("data-response-field")) !== null && t !== void 0 ? t : "true";
		r["response-field"] = f === "true";
		var s = e.getAttribute("data-response-field-name");
		s && (r["response-field-name"] = s);
		var m = e.getAttribute("data-execution");
		m && (st(m) ? r.execution = m : b('Unknown data-execution value: "'.concat(m, ", expected either: 'render' or 'execute'.")));
		var x = e.getAttribute("data-appearance");
		return x && (ut(x) ? r.appearance = x : b('Unknown data-appearance value: "'.concat(x, ", expected either: 'always', 'execute', or 'interaction-only'."))), r
	}

	function Or() {
		var e = !0;
		ht(h, e), h.msgHandler && window.removeEventListener("message", h.msgHandler), cr(window.turnstile, h)
	}
	ve = !1, O = tr(), h.scriptWasLoadedAsync = (Ve = O == null ? void 0 : O.loadedAsync) !== null && Ve !== void 0 ? Ve : !1, O != null && O.params && (me = O.params.get("compat"), (me == null ? void 0 : me.toLowerCase()) === "recaptcha" ? window.grecaptcha ? b("grecaptcha is already defined. The compatibility layer will not be enabled") : (b("Compatibility layer enabled"), h.isRecaptchaCompatibilityMode = !0, window.grecaptcha = wt) : me !== null && b('Unknown value for api.js?compat: "'.concat(me, '", ignoring')), O.params.forEach(function(e, n) {
		N(["onload", "compat", "_cb", "_upgrade", "_reload", "render"], n) || b('Unknown parameter passed to api.js: "?'.concat(n, '=...", ignoring'))
	}), ve = O.params.get("_upgrade") === "true", z = O.params.get("onload"), z && !ve && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (b("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(L(window[z]), "'")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : b("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(L(window[z]), "'"))
		}, 1e3))
	}, 0)), xt = "turnstile" in window, xt && !ve ? b("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (xt && ve && (lr(window.turnstile, h), yt(h), (O == null || (We = O.params) === null || We === void 0 ? void 0 : We.get("render")) !== "explicit" && setTimeout(Et, 0)), window.turnstile = wt, ve || ((O == null || (je = O.params) === null || je === void 0 ? void 0 : je.get("render")) !== "explicit" && Tt.push(Et), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(ur, 0) : window.addEventListener("DOMContentLoaded", ur))), fr = 24 * 60 * 60 * 1e3, window.setTimeout(Or, fr);
	var ve, O, Ve, me, z, xt, We, je, fr;
})();