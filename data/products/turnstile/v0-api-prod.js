"use strict";
(function() {
	function pt(e, r, t, i, f, s, g) {
		try {
			var v = e[s](g),
				y = v.value
		} catch (u) {
			t(u);
			return
		}
		v.done ? r(y) : Promise.resolve(y).then(i, f)
	}

	function vt(e) {
		return function() {
			var r = this,
				t = arguments;
			return new Promise(function(i, f) {
				var s = e.apply(r, t);

				function g(y) {
					pt(s, i, f, g, v, "next", y)
				}

				function v(y) {
					pt(s, i, f, g, v, "throw", y)
				}
				g(void 0)
			})
		}
	}

	function k(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : k(e, r)
	}

	function xe(e, r, t) {
		return r in e ? Object.defineProperty(e, r, {
			value: t,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = t, e
	}

	function Ue(e) {
		for (var r = 1; r < arguments.length; r++) {
			var t = arguments[r] != null ? arguments[r] : {},
				i = Object.keys(t);
			typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(f) {
				return Object.getOwnPropertyDescriptor(t, f).enumerable
			}))), i.forEach(function(f) {
				xe(e, f, t[f])
			})
		}
		return e
	}

	function mt(e) {
		if (Array.isArray(e)) return e
	}

	function gt(e, r) {
		var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (t != null) {
			var i = [],
				f = !0,
				s = !1,
				g, v;
			try {
				for (t = t.call(e); !(f = (g = t.next()).done) && (i.push(g.value), !(r && i.length === r)); f = !0);
			} catch (y) {
				s = !0, v = y
			} finally {
				try {
					!f && t.return != null && t.return()
				} finally {
					if (s) throw v
				}
			}
			return i
		}
	}

	function yt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Fe(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
		return i
	}

	function _t(e, r) {
		if (e) {
			if (typeof e == "string") return Fe(e, r);
			var t = Object.prototype.toString.call(e).slice(8, -1);
			if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(t);
			if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Fe(e, r)
		}
	}

	function be(e, r) {
		return mt(e) || gt(e, r) || _t(e, r) || yt()
	}

	function L(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function Ee(e, r) {
		var t = {
				label: 0,
				sent: function() {
					if (s[0] & 1) throw s[1];
					return s[1]
				},
				trys: [],
				ops: []
			},
			i, f, s, g;
		return g = {
			next: v(0),
			throw: v(1),
			return: v(2)
		}, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
			return this
		}), g;

		function v(u) {
			return function(b) {
				return y([u, b])
			}
		}

		function y(u) {
			if (i) throw new TypeError("Generator is already executing.");
			for (; g && (g = 0, u[0] && (t = 0)), t;) try {
				if (i = 1, f && (s = u[0] & 2 ? f.return : u[0] ? f.throw || ((s = f.return) && s.call(f), 0) : f.next) && !(s = s.call(f, u[1])).done) return s;
				switch (f = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
					case 0:
					case 1:
						s = u;
						break;
					case 4:
						return t.label++, {
							value: u[1],
							done: !1
						};
					case 5:
						t.label++, f = u[1], u = [0];
						continue;
					case 7:
						u = t.ops.pop(), t.trys.pop();
						continue;
					default:
						if (s = t.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
							t = 0;
							continue
						}
						if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
							t.label = u[1];
							break
						}
						if (u[0] === 6 && t.label < s[1]) {
							t.label = s[1], s = u;
							break
						}
						if (s && t.label < s[2]) {
							t.label = s[2], t.ops.push(u);
							break
						}
						s[2] && t.ops.pop(), t.trys.pop();
						continue
				}
				u = r.call(e, t)
			} catch (b) {
				u = [6, b], f = 0
			} finally {
				i = s = 0
			}
			if (u[0] & 5) throw u[1];
			return {
				value: u[0] ? u[1] : void 0,
				done: !0
			}
		}
	}
	var ht = 300020;
	var we = 300030;

	function U(e, r) {
		return e.indexOf(r) !== -1
	}
	var F;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(F || (F = {}));
	var H;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(H || (H = {}));
	var Te;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(Te || (Te = {}));
	var se;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(se || (se = {}));
	var j;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(j || (j = {}));
	var V;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(V || (V = {}));
	var ne;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(ne || (ne = {}));
	var K;
	(function(e) {
		e.EXECUTE = "execute"
	})(K || (K = {}));
	var We;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(We || (We = {}));

	function ze(e) {
		return U(["auto", "dark", "light"], e)
	}

	function He(e) {
		return U(["auto", "never"], e)
	}

	function Ve(e) {
		return e > 0 && e < 9e5
	}

	function qe(e) {
		return e > 0 && e < 36e4
	}
	var er = /^[0-9A-Za-z_-]{3,100}$/;

	function xt(e) {
		return er.test(e)
	}
	var tr = /^[a-z0-9_-]{0,32}$/i;

	function Be(e) {
		return e === void 0 ? !0 : typeof e == "string" && tr.test(e)
	}
	var rr = /^[a-z0-9_\-=]{0,255}$/i;

	function je(e) {
		return e === void 0 ? !0 : typeof e == "string" && rr.test(e)
	}

	function Ge(e) {
		return U(["normal", "compact", "invisible"], e)
	}

	function Xe(e) {
		return U(["auto", "manual", "never"], e)
	}
	var nr = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Ye(e) {
		return e === "auto" || nr.test(e)
	}

	function Qe(e) {
		return U(["always", "execute", "interaction-only"], e)
	}

	function $e(e) {
		return U(["render", "execute"], e)
	}
	var W = "0/0";
	var bt = 300,
		Et = 10;
	var ae = "cf-chl-widget-",
		P = "cloudflare-challenge",
		wt = ".cf-turnstile",
		Tt = ".cf-challenge",
		St = ".g-recaptcha",
		At = "cf_challenge_response",
		It = "cf-turnstile-response",
		Rt = "g-recaptcha-response",
		Ot = 8e3,
		Ke = "private-token",
		Ct = 3,
		Nt = 500,
		kt = 500;

	function Se(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Lt(e, r) {
		if (!k(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function G(e, r) {
		return G = Object.setPrototypeOf || function(i, f) {
			return i.__proto__ = f, i
		}, G(e, r)
	}

	function Pt(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && G(e, r)
	}

	function Ae() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function fe(e, r, t) {
		return Ae() ? fe = Reflect.construct : fe = function(f, s, g) {
			var v = [null];
			v.push.apply(v, s);
			var y = Function.bind.apply(f, v),
				u = new y;
			return g && G(u, g.prototype), u
		}, fe.apply(null, arguments)
	}

	function J(e) {
		return J = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		}, J(e)
	}

	function Mt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ie(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return Ie = function(i) {
			if (i === null || !Mt(i)) return i;
			if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(i)) return r.get(i);
				r.set(i, f)
			}

			function f() {
				return fe(i, arguments, J(this).constructor)
			}
			return f.prototype = Object.create(i.prototype, {
				constructor: {
					value: f,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), G(f, i)
		}, Ie(e)
	}

	function Dt(e, r) {
		return r && (L(r) === "object" || typeof r == "function") ? r : Se(e)
	}

	function Ut(e) {
		var r = Ae();
		return function() {
			var i = J(e),
				f;
			if (r) {
				var s = J(this).constructor;
				f = Reflect.construct(i, arguments, s)
			} else f = i.apply(this, arguments);
			return Dt(this, f)
		}
	}
	var Ft = function(e) {
		"use strict";
		Pt(t, e);
		var r = Ut(t);

		function t(i, f) {
			Lt(this, t);
			var s;
			return s = r.call(this, i), xe(Se(s), "code", void 0), s.name = "TurnstileError", s.code = f, s
		}
		return t
	}(Ie(Error));

	function m(e, r) {
		var t = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Ft(t, r)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Re(e) {
		return e.startsWith(ae) ? e.substring(ae.length) : null
	}

	function X(e) {
		return "".concat(ae).concat(e)
	}

	function Je() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (k(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var t = document.querySelectorAll("script"), i = 0, f; f = t[i]; i++)
			if (k(f, HTMLScriptElement) && e.test(f.src)) return f
	}

	function Wt() {
		var e = Je();
		if (!e) return m("Could not find Turnstile script tag, some features may not be available", 43777), null;
		var r = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (r.loadedAsync = !0);
		var t = e.src,
			i = t.split("?");
		return i.length > 1 && (r.params = new URLSearchParams(i[1])), r
	}
	var ar = 900,
		ir = 3;

	function or(e, r) {
		e.watchCatSeq++;
		var t = !0,
			i = !1,
			f = void 0;
		try {
			for (var s = e.widgetMap[Symbol.iterator](), g; !(t = (g = s.next()).done); t = !0) {
				var v = be(g.value, 2),
					y = v[0],
					u = v[1],
					b;
				u.watchcat.seq = e.watchCatSeq, u.watchcat.lastAckedSeq === 0 && (u.watchcat.lastAckedSeq = e.watchCatSeq);
				var T = X(y);
				if (!T) {
					u.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), u.watchcat.missingWidgetWarning = !0);
					continue
				}
				var S = document.querySelector("#".concat(T));
				if (!S) {
					u.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(T, ", consider using turnstile.remove() to clean up a widget.")), u.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((u.isExecuting || !u.isInitialized || u.isInitialized && !u.isStale && !u.isExecuted) && u.watchcat.lastAckedSeq !== 0 && u.watchcat.lastAckedSeq < u.watchcat.seq - 1 - ir) {
					var R;
					u.watchcat.lastAckedSeq = 0, u.watchcat.seq = 0, u.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", y);
					var d;
					if ((R = e.msgHandler) === null || R === void 0 || R.call(e, {
							data: {
								source: P,
								widgetId: y,
								code: we,
								event: "fail",
								rcV: (d = u.rcV) !== null && d !== void 0 ? d : W
							}
						}), r) {
						var o;
						window.postMessage({
							source: P,
							widgetId: y,
							event: "rcv-update",
							rcV: (o = u.rcV) !== null && o !== void 0 ? o : W
						}, "*")
					}
					continue
				}(b = S.contentWindow) === null || b === void 0 || b.postMessage({
					source: P,
					widgetId: y,
					seq: e.watchCatSeq,
					event: "meow"
				}, "*")
			}
		} catch (n) {
			i = !0, f = n
		} finally {
			try {
				!t && s.return != null && s.return()
			} finally {
				if (i) throw f
			}
		}
	}

	function Ze(e, r) {
		e.watchCatInterval === null && (e.watchCatInterval = setInterval(function() {
			or(e, r)
		}, ar))
	}

	function et(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
		e.watchCatInterval !== null && (e.widgetMap.size === 0 || r) && clearInterval(e.watchCatInterval)
	}

	function tt(e) {
		var r = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && r.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && r.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), r.size !== 0) return r.toString()
	}

	function rt(e, r) {
		var t = "https://challenges.cloudflare.com";
		if (r) {
			var i;
			t = (i = e["base-url"]) !== null && i !== void 0 ? i : t
		}
		return t
	}

	function nt(e, r, t, i, f, s, g) {
		var v = rt(t, f),
			y = s ? "h/".concat(s, "/") : "",
			u = g ? "?".concat(g) : "";
		return "".concat(v, "/cdn-cgi/challenge-platform/").concat(y, "turnstile/if/ov2/av0/rcv").concat(i, "/").concat(e, "/").concat(r, "/").concat(t.theme, "/").concat(t.size).concat(u)
	}

	function zt(e, r) {
		var t;
		r.upgradeAttempts++;
		var i = Je();
		if (!(!i || !i.parentNode)) {
			var f = i == null ? void 0 : i.nonce;
			e._pState = r;
			var s = new URL(i.src),
				g = document.createElement("script");
			s.searchParams.set("_upgrade", "true"), s.searchParams.set("_cb", String(Date.now())), g.async = !0, f && (g.nonce = f), g.setAttribute("crossorigin", "anonymous"), g.src = s.toString(), i == null || (t = i.parentNode) === null || t === void 0 || t.replaceChild(g, i)
		}
	}

	function Ht(e, r) {
		var t = e._pState;
		return t ? (r.isReady = t.isReady, r.isRecaptchaCompatibilityMode = t.isRecaptchaCompatibilityMode, r.lastWidgetIdx = t.lastWidgetIdx, r.scriptWasLoadedAsync = t.scriptWasLoadedAsync, r.upgradeAttempts = t.upgradeAttempts, r.upgradeCount = t.upgradeCount + 1, r.watchCatInterval = null, r.watchCatSeq = t.watchCatSeq, r.widgetMap = t.widgetMap, !0) : !1
	}
	var at = function(e) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
		return e.length > r ? e.substring(0, r) : e
	};

	function Vt(e) {
		var r = function(t, i) {
			if (!t || t.tagName === "BODY") return i;
			for (var f = 1, s = t.previousElementSibling; s;) s.tagName === t.tagName && f++, s = s.previousElementSibling;
			var g = at(t.tagName.toLowerCase()),
				v = "".concat(g, "[").concat(f, "]");
			return r(t.parentNode, "/".concat(v).concat(i))
		};
		return r(e, "")
	}

	function qt(e, r, t) {
		for (var i = "", f = 0, s = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
				acceptNode: function(T) {
					return f > r || i.length > t ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
				}
			}), g;
			(g = s.nextNode()) !== null && i.length < t;) {
			if (g.nodeType === Node.ELEMENT_NODE) {
				var v = g;
				i += "".concat(at(v.tagName.toLowerCase()));
				for (var y = 0; y < v.attributes.length; y++) {
					var u = v.attributes[y];
					i += "_".concat(at(u.name, 2))
				}
				i += ">"
			} else g.nodeType === Node.TEXT_NODE && (i += "-t");
			var b = g.parentNode;
			for (f = 0; b !== e && b !== null;) f++, b = b.parentNode
		}
		return i.substring(0, t)
	}

	function Bt(e) {
		if (typeof e != "string") throw new Error("djb2: expected string, got ".concat(typeof e == "undefined" ? "undefined" : L(e)));
		for (var r = 5381, t = 0; t < e.length; t++) {
			var i = e.charCodeAt(t);
			r = r * 33 ^ i
		}
		return r >>> 0
	}
	var oe = !1,
		_ = {
			turnstileLoadInitTime: +new Date,
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

	function it(e) {
		Qt(e, "")
	}

	function ut() {
		var e = [wt, Tt];
		_.isRecaptchaCompatibilityMode && e.push(St), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return st.render(r)
		})
	}
	var lt = [];

	function jt() {
		_.isReady = !0;
		var e = !0,
			r = !1,
			t = void 0;
		try {
			for (var i = lt[Symbol.iterator](), f; !(e = (f = i.next()).done); e = !0) {
				var s = f.value;
				s()
			}
		} catch (g) {
			r = !0, t = g
		} finally {
			try {
				!e && i.return != null && i.return()
			} finally {
				if (r) throw t
			}
		}
	}

	function cr(e, r) {
		var t, i = rt(r.params, oe),
			f = "h/".concat("g", "/"),
			s = document.getElementById(e);
		if (!s) {
			m("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			return
		}
		var g = document.createElement("div");
		g.style.position = "fixed", g.style.zIndex = "21474836419";
		var v = document.createElement("div");
		v.className = "cf-turnstile-feedback", v.id = "cf-fr-id", v.style.borderColor = "#000000", v.style.width = "450px", v.style.height = "450px", v.style.position = "absolute", v.style.zIndex = "21474836420", v.style.borderWidth = "1px", v.style.borderColor = "#000", v.style.borderStyle = "solid", v.style.backgroundColor = "#ffffff", v.style.borderRadius = "10px", v.style.left = "-122px", v.style.top = "-91px", v.style.overflow = "hidden";
		var y = document.createElement("iframe");
		y.id = e + "-fr", y.setAttribute("src", "".concat(i, "/cdn-cgi/challenge-platform/").concat(f, "feedback-reports/").concat(Re(e))), y.setAttribute("allow", "cross-origin-isolated; fullscreen"), y.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), y.setAttribute("scrolling", "no"), y.style.width = "100%", y.style.height = "100%", y.style.overflow = "hidden";
		var u = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		u.style.position = "absolute", u.style.width = "26px", u.style.height = "26px", u.style.zIndex = "21474836421", u.style.cursor = "pointer", u.style.right = "2px", u.style.top = "5px", u.setAttribute("width", "26"), u.setAttribute("height", "26"), u.addEventListener("click", function() {
			var R;
			(R = g.parentNode) === null || R === void 0 || R.removeChild(g)
		});
		var b = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		b.setAttribute("ry", "12"), b.setAttribute("rx", "12"), b.setAttribute("cy", "12"), b.setAttribute("cx", "12"), b.setAttribute("fill", "#aaaaaa"), b.setAttribute("stroke-width", "0"), u.appendChild(b);
		var T = document.createElementNS("http://www.w3.org/2000/svg", "line");
		T.setAttribute("stroke-width", "3"), T.setAttribute("stroke", "#fff"), T.setAttribute("fill", "none"), T.setAttribute("x1", "6"), T.setAttribute("x2", "18"), T.setAttribute("y1", "18"), T.setAttribute("y2", "5"), u.appendChild(T);
		var S = document.createElementNS("http://www.w3.org/2000/svg", "line");
		S.setAttribute("stroke-width", "3"), S.setAttribute("stroke", "#fff"), S.setAttribute("fill", "none"), S.setAttribute("x1", "6"), S.setAttribute("x2", "18"), S.setAttribute("y1", "5"), S.setAttribute("y2", "18"), u.appendChild(S), v.appendChild(y), v.appendChild(u), g.appendChild(v), (t = s.parentNode) === null || t === void 0 || t.appendChild(g)
	}

	function Qt(e, r) {
		var t = document.getElementById("".concat(e, "_response"));
		t !== null && k(t, HTMLInputElement) && (t.value = r);
		var i = document.getElementById("".concat(e, "_legacy_response"));
		if (i !== null && k(i, HTMLInputElement) && (i.value = r), _.isRecaptchaCompatibilityMode) {
			var f = document.getElementById("".concat(e, "_g_response"));
			f !== null && k(f, HTMLInputElement) && (f.value = r)
		}
	}

	function ot(e, r) {
		var t = r.params,
			i = t.size,
			f = i === void 0 ? "normal" : i,
			s = r.mode;
		switch (s) {
			case F.NON_INTERACTIVE:
			case F.MANAGED:
				switch (f) {
					case H.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case H.INVISIBLE:
						m('Invalid value for parameter "size", expected "'.concat(H.COMPACT, '" or "').concat(H.NORMAL, '", got "').concat(f, '"'), 2817);
					case H.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case F.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				m('Invalid value for parameter "mode", expected "'.concat(F.NON_INTERACTIVE, '", "').concat(F.MANAGED, '" or "').concat(F.INVISIBLE, '", got "').concat(s, '"'), 2818);
				return
		}
	}

	function Gt(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function ur(e, r) {
		var t = r.get("turnstile_iframe_alt");
		t && (e.title = t)
	}

	function lr(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function sr(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Xt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var st = function() {
		function e(d, o, n, c) {
			return r.apply(this, arguments)
		}

		function r() {
			return r = vt(function(d, o, n, c) {
				var a, p, h, l, w, E, O, C, M, q;
				return Ee(this, function(I) {
					switch (I.label) {
						case 0:
							if (a = d.params.sitekey, p = Xt(), !p) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), i(d, o, !1), [2];
							h = "h/".concat("g", "/"), l = new URL(p), w = "https", E = "", O = "".concat(w, "://").concat(l.host, "/cdn-cgi/challenge-platform/").concat(h, "rc/").concat(c).concat(E), I.label = 1;
						case 1:
							return I.trys.push([1, 6, , 7]), [4, fetch(O, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: a,
									secondaryToken: n
								})
							})];
						case 2:
							return C = I.sent(), C.status === 200 ? [3, 3] : (x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), i(d, o, !1), [3, 5]);
						case 3:
							return [4, C.json()];
						case 4:
							if (M = I.sent(), "status" in M && M.status === "redeemed") return i(d, o, !0), [2];
							I.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return q = I.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), i(d, o, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), r.apply(this, arguments)
		}

		function t(d, o, n) {
			if (d.params.retry === se.AUTO || n) {
				d.isExecuted && (d.msgQueue.push(K.EXECUTE), d.isExecuted = !0, d.isExecuting = !0);
				var c, a = n ? 0 : 1e3 * 2 + ((c = d.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
				d.retryTimeout = window.setTimeout(function() {
					b(o)
				}, a)
			}
		}

		function i(d, o, n) {
			if (d.response === void 0) {
				m("[Internal Error] Widget was completed but no response was given", 1362);
				return
			}
			d.isExecuting = !1, Qt(o, d.response);
			var c = d.cbSuccess;
			c && c(d.response, n)
		}

		function f(d) {
			if (!d) return [];
			for (var o = d.attributes, n = o.length, c = new Array(n), a = 0; a < n; a++) c[a] = o[a].name;
			return c
		}
		var s = function(o) {
			var n = o.data;
			if (n.source === P) {
				if (!lr(o)) {
					x("Ignored message from wrong origin: " + o.origin);
					return
				}
				if (!(!n.widgetId || !_.widgetMap.has(n.widgetId))) {
					var c = X(n.widgetId),
						a = _.widgetMap.get(n.widgetId);
					if (!(!c || !a)) switch (n.event) {
						case "init": {
							var p, h = document.getElementById(c);
							if (!h) {
								m("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
								return
							}
							a.mode = n.mode, a.mode === F.INVISIBLE && a.params["refresh-expired"] === j.MANUAL && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(j.AUTO, "' or '").concat(j.NEVER, "'")), a.params.appearance === V.ALWAYS || a.isExecuting && a.params.appearance === V.EXECUTE ? ot(h, a) : Gt(h), h.style.display = "";
							var l = document.querySelector("#".concat(c));
							if (!l) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(p = l.contentWindow) === null || p === void 0 || p.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "init"
							}, "*");
							break
						}
						case "translationInit": {
							var w = document.getElementById(c);
							if (!w) {
								m("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
								return
							}
							var E = new Map;
							Object.keys(n.translationData).forEach(function(le) {
								E.set(le, n.translationData[le])
							}), ur(w, E);
							break
						}
						case "languageUnsupported": {
							x("Language ".concat(a.params.language, " is not supported, falling back to: ").concat(n.fallback));
							break
						}
						case "reject": {
							var O = document.getElementById(c);
							if (a.isExecuting = !1, !O) {
								m("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3075);
								return
							}
							if (n.reason === "outdated_browser") {
								var C = a.cbUnsupported;
								C && C()
							}
							break
						}
						case "food": {
							a.watchcat && n.seq > a.watchcat.lastAckedSeq && (a.watchcat.lastAckedSeq = n.seq);
							break
						}
						case "complete": {
							a.rcV = W, a.response = n.token, n.sToken ? e(a, c, n.sToken, n.chlId) : i(a, c, !1);
							break
						}
						case "fail": {
							n.rcV && (a.rcV = n.rcV), n.cfChlOut && (a.cfChlOut = n.cfChlOut), n.cfChlOutS && (a.cfChlOutS = n.cfChlOutS), n.code && (a.errorCode = n.code), a.isExecuting = !1, a.isInitialized = !0, it(c);
							var M = a.cbError,
								q = n.code === we;
							if (M) {
								var I;
								M(String((I = n.code) !== null && I !== void 0 ? I : ht)) || (n.code && x("Error: ".concat(n.code)), t(a, c, q))
							} else n.code ? (t(a, c, q), m("Error: ".concat(n.code), 3076)) : t(a, c, !1);
							break
						}
						case "feedbackInit": {
							cr(c, a);
							break
						}
						case "requestFeedbackData": {
							var Y, Z = document.querySelector("#".concat(c));
							if (!Z) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(Y = Z.contentWindow) === null || Y === void 0 || Y.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var Q, ee = document.querySelector("#".concat(c, "-fr"));
							if (!ee) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(Q = ee.contentWindow) === null || Q === void 0 || Q.postMessage({
								source: P,
								widgetId: n.widgetId,
								event: "feedbackData",
								rayId: n.rayId,
								rcV: n.rcV,
								cfChlOut: a.cfChlOut,
								cfChlOutS: a.cfChlOutS,
								errorCode: a.errorCode,
								sitekey: n.sitekey,
								mode: n.mode
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ce, ue, pe = document.querySelector("#".concat(c, "-fr"));
							if (!pe) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}(ue = pe.parentElement) === null || ue === void 0 || (ce = ue.parentElement) === null || ce === void 0 || ce.remove();
							break
						}
						case "tokenExpired": {
							var Ne = n.token;
							a.isExpired = !0;
							var ve = a.cbExpired;
							ve && ve(Ne), a.params["refresh-expired"] === j.AUTO && !a.isResetting && b(c);
							break
						}
						case "interactiveTimeout": {
							a.rcV = W, it(c);
							var me = a.cbTimeout;
							me ? me() : x("The widget encountered an interactive timeout. Consider defining a timeout handler and resetting the widget upon timeout as solving a widget in a timed-out state is going to fail.");
							break
						}
						case "refreshRequest": {
							a.rcV = W, b(c);
							break
						}
						case "interactiveBegin": {
							var ge = document.getElementById(c);
							if (!ge) {
								m("Cannot layout widget, Element not found (#".concat(c, ")."), 3076);
								return
							}
							var te = a.cbBeforeInteractive;
							te && te(), a.params.appearance === V.INTERACTION_ONLY && ot(ge, a);
							break
						}
						case "interactiveEnd": {
							var $ = document.getElementById(c);
							if (!$) {
								m("Cannot unlayout widget, Element not found (#".concat(c, ")."), 3077);
								return
							}
							var re = a.cbAfterInteractive;
							re && re();
							break
						}
						case "widgetStale": {
							a.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var N, D = document.querySelector("#".concat(c));
							if (!D) {
								m("Received state for an unknown widget: ".concat(n.widgetId), 3078);
								return
							}
							a.isResetting = !1;
							var B = {};
							(N = D.contentWindow) === null || N === void 0 || N.postMessage(Ue({
								source: P,
								widgetId: n.widgetId,
								event: "extraParams",
								action: a.action,
								cData: a.cData,
								chlPageData: a.chlPageData,
								rcV: a.rcV,
								ch: "5b600c458061",
								url: Xt(),
								retry: a.params.retry,
								"expiry-interval": a.params["expiry-interval"],
								"retry-interval": a.params["retry-interval"],
								"refresh-expired": a.params["refresh-expired"],
								language: a.params.language,
								execution: a.params.execution,
								appearance: a.params.appearance,
								wPr: {
									"w.iW": window.innerWidth,
									"ht.atrs": f(document.body.parentNode),
									pi: {
										xp: Vt(D).substring(0, kt),
										pfp: qt(document, Ct, Nt),
										sL: document.scripts.length,
										ssL: document.styleSheets.length,
										mL: document.getElementsByTagName("meta").length,
										t: Bt(document.title),
										tL: document.getElementsByTagName("*").length,
										lH: window.location.href
									}
								},
								turnstileAge: +Date.now() - _.turnstileLoadInitTime,
								widgetAge: +Date.now() - a.widgetStartTime
							}, B), "*"), y(a, n.widgetId, D), a.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		_.msgHandler = s, window.addEventListener("message", s);

		function g() {
			var d = "abcdefghijklmnopqrstuvwxyz0123456789",
				o = d.length,
				n;
			do {
				n = "";
				for (var c = 0; c < 5; c++) n += d.charAt(Math.floor(Math.random() * o))
			} while (_.widgetMap.has(n));
			return n
		}

		function v(d) {
			if (typeof d == "string") {
				var o = Re(d);
				if (o && _.widgetMap.has(o)) return o;
				try {
					var n = document.querySelector(d);
					return n ? v(n) : null
				} catch (a) {
					return null
				}
			}
			if (k(d, HTMLElement)) {
				var c = d.querySelector("iframe");
				return c ? Re(c.id) : null
			}
			return d || _.widgetMap.size === 0 ? null : _.widgetMap.keys().next().value
		}

		function y(d, o, n) {
			for (; d.msgQueue.length;) {
				var c, a = d.msgQueue.pop();
				(c = n.contentWindow) === null || c === void 0 || c.postMessage({
					source: P,
					widgetId: o,
					event: a
				}, "*")
			}
		}

		function u(d, o) {
			if (o) {
				var n = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
					c = [],
					a = !0,
					p = !1,
					h = void 0;
				try {
					for (var l = n[Symbol.iterator](), w; !(a = (w = l.next()).done); a = !0) {
						var E = w.value;
						o[E] && o[E] !== d.params[E] && c.push(E)
					}
				} catch (O) {
					p = !0, h = O
				} finally {
					try {
						!a && l.return != null && l.return()
					} finally {
						if (p) throw h
					}
				}
				if (c.length !== 0) {
					m("The parameters ".concat(n.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(c.join(",")), 3618);
					return
				}
				if (o.action) {
					if (!Be(o.action)) {
						m('Invalid input for optional parameter "action", got "'.concat(o.action, '"'), 3604);
						return
					}
					d.action = o.action
				}
				if (o.cData) {
					if (!je(o.cData)) {
						m('Invalid input for optional parameter "cData", got "'.concat(o.cData, '"'), 3605);
						return
					}
					d.cData = o.cData
				}
				o["after-interactive-callback"] && (d.cbAfterInteractive = o["after-interactive-callback"]), o["before-interactive-callback"] && (d.cbBeforeInteractive = o["before-interactive-callback"]), o.callback && (d.cbSuccess = o.callback), o["expired-callback"] && (d.cbExpired = o["expired-callback"]), o["timeout-callback"] && (d.cbTimeout = o["timeout-callback"]), o["error-callback"] && (d.cbError = o["error-callback"]), o["unsupported-callback"] && (d.cbUnsupported = o["unsupported-callback"]), o.chlPageData && (d.chlPageData = o.chlPageData)
			}
		}

		function b(d) {
			var o = v(d);
			if (!o) {
				m("Nothing to reset found for provided container", 3329);
				return
			}
			var n = _.widgetMap.get(o);
			if (n) {
				n.isResetting = !0, n.response = void 0, n.mode = void 0, n.msgQueue = [], n.isExpired = !1, n.isExecuting = !1, n.isStale = !1, n.isInitialized = !1, n.watchcat.lastAckedSeq = 0, n.watchcat.seq = 0, n.params.execution === ne.RENDER && (n.msgQueue.push(K.EXECUTE), n.isExecuted = !0, n.isExecuting = !0);
				var c = X(o),
					a = document.querySelector("#".concat(c));
				if (!c || !a) {
					m("Widget ".concat(o, " to reset was not found."), 3330);
					return
				}
				if (n.params.appearance === V.INTERACTION_ONLY && Gt(a), n.params.sitekey === null) {
					m("Unexpected Error: Sitekey is null", 3347);
					return
				}
				var p;
				a.src = nt(o, n.params.sitekey, n.params, (p = n.rcV) !== null && p !== void 0 ? p : W, oe, "g", tt(n)), it(c), n.retryTimeout && window.clearTimeout(n.retryTimeout)
			} else {
				m("Widget ".concat(o, " to reset was not found."), 3331);
				return
			}
		}

		function T(d) {
			var o, n = v(d);
			if (!n || !_.widgetMap.has(n)) {
				x("Nothing to remove found for the provided container");
				return
			}
			var c = X(n),
				a = ["iframe#".concat(c), "input#".concat(c, "_response"), "input#".concat(c, "_legacy_response"), "input#".concat(c, "_g_response")];
			document.querySelectorAll(a.join(", ")).forEach(function(h) {
				return h.remove()
			});
			var p = (o = _.widgetMap.get(n)) === null || o === void 0 ? void 0 : o.retryTimeout;
			p && window.clearTimeout(p), _.widgetMap.delete(n), et(_)
		}

		function S(d, o) {
			var n, c, a;
			if (typeof d == "string") try {
					var p = document.querySelector(d);
					if (!p) {
						m('Unable to find a container for "'.concat(d, '"'), 3585);
						return
					}
					a = p
				} catch (pr) {
					m('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(d, '"'), 3586);
					return
				} else if (k(d, HTMLElement)) a = d;
				else {
					m('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					return
				} var h = fr(a);
			if (h) {
				var l = Object.assign(h, o),
					w = l.action,
					E = l.cData,
					O = l.chlPageData,
					C = l.sitekey,
					M;
				l.theme = (M = l.theme) !== null && M !== void 0 ? M : Te.AUTO;
				var q;
				l.retry = (q = l.retry) !== null && q !== void 0 ? q : se.AUTO;
				var I;
				l.execution = (I = l.execution) !== null && I !== void 0 ? I : ne.RENDER;
				var Y;
				l.appearance = (Y = l.appearance) !== null && Y !== void 0 ? Y : V.ALWAYS;
				var Z;
				l["retry-interval"] = +((Z = l["retry-interval"]) !== null && Z !== void 0 ? Z : Ot);
				var Q;
				l["expiry-interval"] = +((Q = l["expiry-interval"]) !== null && Q !== void 0 ? Q : (bt - Et) * 1e3);
				var ee;
				l.size = (ee = l.size) !== null && ee !== void 0 ? ee : H.NORMAL;
				var ce = l.callback,
					ue = l["expired-callback"],
					pe = l["timeout-callback"],
					Ne = l["after-interactive-callback"],
					ve = l["before-interactive-callback"],
					me = l["error-callback"],
					ge = l["unsupported-callback"];
				if (typeof C != "string") {
					m('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof C == "undefined" ? "undefined" : L(C), '"'), 3588);
					return
				}
				if (!xt(C)) {
					m('Invalid input for parameter "sitekey", got "'.concat(C, '"'), 3589);
					return
				}
				if (!Ge(l.size)) {
					m('Invalid type for parameter "size", expected normal|compact, got "'.concat(l.size, '" ').concat(L(l.size)), 3590);
					return
				}
				if (!ze(l.theme)) {
					m('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(l.theme, '" ').concat(L(l.theme)), 3591);
					return
				}
				if (!He(l.retry)) {
					m('Invalid type for parameter "retry", expected never|auto, got "'.concat(l.retry, '" ').concat(L(l.retry)), 3592);
					return
				}
				if (l.language || (l.language = "auto"), !Ye(l.language)) {
					m('Invalid language value: "'.concat(l.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
					return
				}
				if (!Qe(l.appearance)) {
					m('Unknown appearance value: "'.concat(l.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
					return
				}
				if (!$e(l.execution)) {
					m('Unknown execution value: "'.concat(l.execution, ", expected either: 'render' or 'execute'."), 3601);
					return
				}
				if (!Ve(l["retry-interval"])) {
					m('Invalid retry-interval value: "'.concat(l["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
					return
				}
				if (!qe(l["expiry-interval"])) {
					m('Invalid expiry-interval value: "'.concat(l["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					return
				}
				var te, $ = (te = l["refresh-expired"]) !== null && te !== void 0 ? te : j.AUTO;
				if (Xe($)) l["refresh-expired"] = $;
				else {
					m('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat($, '" ').concat(typeof $ == "undefined" ? "undefined" : L($)), 3603);
					return
				}
				var re = a.getElementsByTagName("iframe")[0];
				re != null && re.id.startsWith(ae) && T(a);
				var N = document.createElement("iframe");
				if (!Be(w)) {
					m('Invalid input for optional parameter "action", got "'.concat(w, '"'), 3604);
					return
				}
				if (!je(E)) {
					m('Invalid input for optional parameter "cData", got "'.concat(E, '"'), 3605);
					return
				}
				var D = g(),
					B = X(D);
				if (!(!D || !B)) {
					var le = [],
						ke = l.execution === ne.RENDER;
					ke && le.push(K.EXECUTE), _.lastWidgetIdx++;
					var Kt = +new Date,
						Jt = {};
					_.widgetMap.set(D, Ue({
						idx: _.lastWidgetIdx,
						action: w,
						cData: E,
						chlPageData: O,
						cbSuccess: ce,
						cbError: me,
						cbExpired: ue,
						cbTimeout: pe,
						cbUnsupported: ge,
						cbAfterInteractive: Ne,
						cbBeforeInteractive: ve,
						params: l,
						isStale: !1,
						isExpired: !1,
						isExecuting: ke,
						isResetting: !1,
						isExecuted: ke,
						isInitialized: !1,
						msgQueue: le,
						rcV: W,
						widgetStartTime: Kt,
						watchcat: {
							seq: 0,
							lastAckedSeq: 0,
							missingWidgetWarning: !1
						}
					}, Jt)), Ze(_, oe);
					var ft = _.widgetMap.get(D);
					if (!ft) {
						m("Turnstile Initialization Error ", 3606);
						return
					}
					N.style.display = "none", N.style.border = "none", N.style.overflow = "hidden", N.setAttribute("src", nt(D, C, l, W, oe, "g", tt(ft)));
					var dt = ["cross-origin-isolated", "fullscreen"],
						Le;
					U((Le = (c = document.featurePolicy) === null || c === void 0 || (n = c.features) === null || n === void 0 ? void 0 : n.call(c)) !== null && Le !== void 0 ? Le : [], Ke) && dt.push(Ke), N.setAttribute("allow", dt.join("; ")), N.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), N.id = B;
					var Pe;
					N.tabIndex = (Pe = l.tabindex) !== null && Pe !== void 0 ? Pe : 0, N.title = "Widget containing a Cloudflare security challenge", a.appendChild(N);
					var Me, Zt = (Me = l["response-field"]) !== null && Me !== void 0 ? Me : !0;
					if (Zt) {
						var ye = document.createElement("input");
						ye.type = "hidden";
						var De;
						if (ye.name = (De = l["response-field-name"]) !== null && De !== void 0 ? De : It, ye.id = "".concat(B, "_response"), a.appendChild(ye), typeof l["response-field-name"] != "string" && sr(C)) {
							var _e = document.createElement("input");
							_e.type = "hidden", _e.name = At, _e.id = "".concat(B, "_legacy_response"), a.appendChild(_e)
						}
					}
					if (_.isRecaptchaCompatibilityMode) {
						var he = document.createElement("input");
						he.type = "hidden", he.name = Rt, he.id = "".concat(B, "_g_response"), a.appendChild(he)
					}
					return B
				}
			}
		}

		function R() {
			var d, o = -1,
				n = !0,
				c = !1,
				a = void 0;
			try {
				for (var p = _.widgetMap[Symbol.iterator](), h; !(n = (h = p.next()).done); n = !0) {
					var l = be(h.value, 2),
						w = l[0],
						E = l[1];
					o < E.idx && (d = w, o = E.idx)
				}
			} catch (O) {
				c = !0, a = O
			} finally {
				try {
					!n && p.return != null && p.return()
				} finally {
					if (c) throw a
				}
			}
			if (o === -1) {
				m("Could not find widget", 43778);
				return
			}
			return d
		}
		return {
			ready: function(o) {
				if (_.scriptWasLoadedAsync && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), m("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof o != "function" && m('turnstile.ready() expected a "function" argument, got "'.concat(typeof o == "undefined" ? "undefined" : L(o), '"'), 3841), o(), typeof o != "function" && m('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), _.isReady) {
					o();
					return
				}
				lt.push(o)
			},
			implicitRender: ut,
			execute: function(o, n) {
				var c = v(o);
				if (!c) {
					if (n === void 0) {
						m("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var a = S(o, n);
					if (!a) {
						m("Failed to render widget", 43522);
						return
					}
					c = a
				}
				var p = _.widgetMap.get(c);
				if (p) {
					u(p, n);
					var h = X(c);
					if (p.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(h, "), consider using reset() before execute()"));
						return
					} else p.isExecuting = !0;
					if (p.response) {
						p.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(h, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), p.cbSuccess && p.cbSuccess(p.response, !1);
						return
					}
					p.isExpired && x("Call to execute on a expired-widget (".concat(h, "), consider using reset() before")), p.isStale && (b(h), p.isExecuting = !0), p.msgQueue.push(K.EXECUTE), p.isExecuted = !0;
					var l = document.querySelector("#".concat(h));
					if (!l) {
						p.isExecuting = !1, m("Widget ".concat(h, " to execute was not found"), 43522);
						return
					}
					if (p.isResetting) return;
					if (p.isInitialized && y(p, c, l), p.isInitialized && p.params.appearance === V.EXECUTE && ot(l, p), p.isExecuting) {
						var w, E = document.querySelector("#".concat(h));
						if (!E) {
							m("Received state for an unknown widget: ".concat(c), 3078);
							return
						}(w = E.contentWindow) === null || w === void 0 || w.postMessage({
							source: P,
							widgetId: c,
							event: "execute"
						}, "*")
					}
				}
			},
			render: S,
			reset: b,
			remove: T,
			getResponse: function(o) {
				var n;
				if (typeof o == "undefined") {
					var c = R();
					if (c) {
						var a, p = _.widgetMap.get(c);
						return p != null && p.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (a = _.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.response
					} else m("Could not find a widget", 43794)
				}
				var h = v(o);
				if (!h) {
					m("Could not find widget for provided container", 43778);
					return
				}
				return (n = _.widgetMap.get(h)) === null || n === void 0 ? void 0 : n.response
			},
			isExpired: function(o) {
				var n;
				if (typeof o == "undefined") {
					var c = R();
					if (c) {
						var a, p;
						return (p = (a = _.widgetMap.get(c)) === null || a === void 0 ? void 0 : a.isExpired) !== null && p !== void 0 ? p : !1
					} else m("Could not find a widget", 43794)
				}
				var h = v(o);
				if (!h) return m("Could not find widget for provided container", 43778), !1;
				var l;
				return (l = (n = _.widgetMap.get(h)) === null || n === void 0 ? void 0 : n.isExpired) !== null && l !== void 0 ? l : !1
			}
		}
	}();

	function fr(e) {
		var r = e.getAttribute("data-sitekey"),
			t = {
				sitekey: r
			},
			i = e.getAttribute("data-tabindex");
		i && (t.tabindex = parseInt(i, 10));
		var f = e.getAttribute("data-theme");
		f && (ze(f) ? t.theme = f : x('Unknown data-theme value: "'.concat(f, '"')));
		var s = e.getAttribute("data-size");
		if (s && (Ge(s) ? t.size = s : x('Unknown data-size value: "'.concat(s, '"'))), 0) var g;
		var v = e.getAttribute("data-action");
		typeof v == "string" && (t.action = v);
		var y = e.getAttribute("data-cdata");
		typeof y == "string" && (t.cData = y);
		var u = e.getAttribute("data-retry");
		u && (He(u) ? t.retry = u : x('Invalid data-retry value: "'.concat(u, ", expected either 'never' or 'auto'\"")));
		var b = e.getAttribute("data-retry-interval");
		if (b) {
			var T = parseInt(b, 10);
			Ve(T) ? t["retry-interval"] = T : x('Invalid data-retry-interval value: "'.concat(b, ', expected an integer value > 0 and < 900000"'))
		}
		var S = e.getAttribute("data-expiry-interval");
		if (S) {
			var R = parseInt(S, 10);
			qe(R) ? t["expiry-interval"] = R : x('Invalid data-expiry-interval value: "'.concat(R, ', expected an integer value > 0 and < 360000"'))
		}
		var d = e.getAttribute("data-refresh-expired");
		d && (Xe(d) ? t["refresh-expired"] = d : x('Unknown data-refresh-expired value: "'.concat(d, ", expected either: 'never', 'auto' or 'manual'.")));
		var o = e.getAttribute("data-language");
		o && (Ye(o) ? t.language = o : x('Invalid data-language value: "'.concat(o, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function n(E) {
			var O = e.getAttribute(E);
			return O && window[O] ? window[O] : void 0
		}
		var c = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		c.forEach(function(E) {
			t[E] = n("data-".concat(E))
		});
		var a, p = (a = e.getAttribute("data-response-field")) !== null && a !== void 0 ? a : "true";
		t["response-field"] = p === "true";
		var h = e.getAttribute("data-response-field-name");
		h && (t["response-field-name"] = h);
		var l = e.getAttribute("data-execution");
		l && ($e(l) ? t.execution = l : x('Unknown data-execution value: "'.concat(l, ", expected either: 'render' or 'execute'.")));
		var w = e.getAttribute("data-appearance");
		return w && (Qe(w) ? t.appearance = w : x('Unknown data-appearance value: "'.concat(w, ", expected either: 'always', 'execute', or 'interaction-only'."))), t
	}
	var de = !1,
		A = Wt(),
		ct;
	_.scriptWasLoadedAsync = (ct = A == null ? void 0 : A.loadedAsync) !== null && ct !== void 0 ? ct : !1;
	A != null && A.params && (ie = A.params.get("compat"), (ie == null ? void 0 : ie.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled") : (x("Compatibility layer enabled"), _.isRecaptchaCompatibilityMode = !0, window.grecaptcha = st) : ie !== null && x('Unknown value for api.js?compat: "'.concat(ie, '", ignoring')), A.params.forEach(function(e, r) {
		U(["onload", "compat", "_cb", "_reload", "render"], r) || x('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring'))
	}), de = A.params.get("_upgrade") === "true", z = A.params.get("onload"), z && !de && setTimeout(function() {
		typeof window[z] == "function" ? window[z]() : (x("Unable to find onload callback '".concat(z, "' immediately after loading, expected 'function', got '").concat(L(window[z]), "'")), setTimeout(function() {
			typeof window[z] == "function" ? window[z]() : x("Unable to find onload callback '".concat(z, "' after 1 second, expected 'function', got '").concat(L(window[z]), "'"))
		}, 1e3))
	}, 0));
	var ie, z, Yt = "turnstile" in window;
	Yt && !de ? x("Turnstile already has been loaded. Was Turnstile imported multiple times?") : (Yt && de && (Ht(window.turnstile, _), Ze(_, oe), (A == null || (Oe = A.params) === null || Oe === void 0 ? void 0 : Oe.get("render")) !== "explicit" && setTimeout(ut, 0)), window.turnstile = st, de || ((A == null || (Ce = A.params) === null || Ce === void 0 ? void 0 : Ce.get("render")) !== "explicit" && lt.push(ut), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(jt, 0) : window.addEventListener("DOMContentLoaded", jt)));
	var Oe, Ce;

	function $t() {
		var e = !0;
		et(_, e), _.msgHandler && window.removeEventListener("message", _.msgHandler), zt(window.turnstile, _)
	}
	var dr = 24 * 60 * 60 * 1e3;
	window.setTimeout($t, dr);
	oe && (window.turnstile._testUpgrade = $t);
})();