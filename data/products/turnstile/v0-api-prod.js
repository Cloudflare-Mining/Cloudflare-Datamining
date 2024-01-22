"use strict";
(function() {
	function nt(e, n, r, u, s, f, y) {
		try {
			var v = e[f](y),
				_ = v.value
		} catch (d) {
			r(d);
			return
		}
		v.done ? n(_) : Promise.resolve(_).then(u, s)
	}

	function at(e) {
		return function() {
			var n = this,
				r = arguments;
			return new Promise(function(u, s) {
				var f = e.apply(n, r);

				function y(_) {
					nt(f, u, s, y, v, "next", _)
				}

				function v(_) {
					nt(f, u, s, y, v, "throw", _)
				}
				y(void 0)
			})
		}
	}

	function C(e, n) {
		return n != null && typeof Symbol != "undefined" && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : C(e, n)
	}

	function ye(e, n, r) {
		return n in e ? Object.defineProperty(e, n, {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[n] = r, e
	}

	function Me(e) {
		for (var n = 1; n < arguments.length; n++) {
			var r = arguments[n] != null ? arguments[n] : {},
				u = Object.keys(r);
			typeof Object.getOwnPropertySymbols == "function" && (u = u.concat(Object.getOwnPropertySymbols(r).filter(function(s) {
				return Object.getOwnPropertyDescriptor(r, s).enumerable
			}))), u.forEach(function(s) {
				ye(e, s, r[s])
			})
		}
		return e
	}

	function it(e) {
		if (Array.isArray(e)) return e
	}

	function ot(e, n) {
		var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (r != null) {
			var u = [],
				s = !0,
				f = !1,
				y, v;
			try {
				for (r = r.call(e); !(s = (y = r.next()).done) && (u.push(y.value), !(n && u.length === n)); s = !0);
			} catch (_) {
				f = !0, v = _
			} finally {
				try {
					!s && r.return != null && r.return()
				} finally {
					if (f) throw v
				}
			}
			return u
		}
	}

	function ct() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Pe(e, n) {
		(n == null || n > e.length) && (n = e.length);
		for (var r = 0, u = new Array(n); r < n; r++) u[r] = e[r];
		return u
	}

	function ut(e, n) {
		if (e) {
			if (typeof e == "string") return Pe(e, n);
			var r = Object.prototype.toString.call(e).slice(8, -1);
			if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(r);
			if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pe(e, n)
		}
	}

	function _e(e, n) {
		return it(e) || ot(e, n) || ut(e, n) || ct()
	}

	function L(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function ge(e, n) {
		var r = {
				label: 0,
				sent: function() {
					if (f[0] & 1) throw f[1];
					return f[1]
				},
				trys: [],
				ops: []
			},
			u, s, f, y;
		return y = {
			next: v(0),
			throw: v(1),
			return: v(2)
		}, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
			return this
		}), y;

		function v(d) {
			return function(m) {
				return _([d, m])
			}
		}

		function _(d) {
			if (u) throw new TypeError("Generator is already executing.");
			for (; y && (y = 0, d[0] && (r = 0)), r;) try {
				if (u = 1, s && (f = d[0] & 2 ? s.return : d[0] ? s.throw || ((f = s.return) && f.call(s), 0) : s.next) && !(f = f.call(s, d[1])).done) return f;
				switch (s = 0, f && (d = [d[0] & 2, f.value]), d[0]) {
					case 0:
					case 1:
						f = d;
						break;
					case 4:
						return r.label++, {
							value: d[1],
							done: !1
						};
					case 5:
						r.label++, s = d[1], d = [0];
						continue;
					case 7:
						d = r.ops.pop(), r.trys.pop();
						continue;
					default:
						if (f = r.trys, !(f = f.length > 0 && f[f.length - 1]) && (d[0] === 6 || d[0] === 2)) {
							r = 0;
							continue
						}
						if (d[0] === 3 && (!f || d[1] > f[0] && d[1] < f[3])) {
							r.label = d[1];
							break
						}
						if (d[0] === 6 && r.label < f[1]) {
							r.label = f[1], f = d;
							break
						}
						if (f && r.label < f[2]) {
							r.label = f[2], r.ops.push(d);
							break
						}
						f[2] && r.ops.pop(), r.trys.pop();
						continue
				}
				d = n.call(e, r)
			} catch (m) {
				d = [6, m], s = 0
			} finally {
				u = f = 0
			}
			if (d[0] & 5) throw d[1];
			return {
				value: d[0] ? d[1] : void 0,
				done: !0
			}
		}
	}
	var lt = 300020;
	var he = 300030;

	function V(e, n) {
		return e.indexOf(n) !== -1
	}
	var P;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(P || (P = {}));
	var B;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(B || (B = {}));
	var xe;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(xe || (xe = {}));
	var ce;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(ce || (ce = {}));
	var H;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(H || (H = {}));
	var q;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(q || (q = {}));
	var te;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(te || (te = {}));
	var $;
	(function(e) {
		e.EXECUTE = "execute"
	})($ || ($ = {}));
	var De;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.KEEPS_LOOPING = "keeps-looping", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(De || (De = {}));

	function Ue(e) {
		return V(["auto", "dark", "light"], e)
	}

	function We(e) {
		return V(["auto", "never"], e)
	}

	function Fe(e) {
		return e > 0 && e < 9e5
	}

	function ze(e) {
		return e > 0 && e < 36e4
	}
	var Ut = /^[0-9A-Za-z_-]{3,100}$/;

	function st(e) {
		return Ut.test(e)
	}
	var Wt = /^[a-z0-9_-]{0,32}$/i;

	function Ve(e) {
		return e === void 0 ? !0 : typeof e == "string" && Wt.test(e)
	}
	var Ft = /^[a-z0-9_\-=]{0,255}$/i;

	function Be(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ft.test(e)
	}

	function qe(e) {
		return V(["normal", "compact", "invisible"], e)
	}

	function je(e) {
		return V(["auto", "manual", "never"], e)
	}
	var zt = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function He(e) {
		return e === "auto" || zt.test(e)
	}

	function Ge(e) {
		return V(["always", "execute", "interaction-only"], e)
	}

	function Ye(e) {
		return V(["render", "execute"], e)
	}
	var D = "0/0";
	var ft = 300,
		dt = 10;
	var re = "cf-chl-widget-",
		U = "cloudflare-challenge",
		pt = ".cf-turnstile",
		vt = ".cf-challenge",
		mt = ".g-recaptcha",
		yt = "cf_challenge_response",
		_t = "cf-turnstile-response",
		gt = "g-recaptcha-response",
		ht = 8e3;

	function be(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function xt(e, n) {
		if (!C(e, n)) throw new TypeError("Cannot call a class as a function")
	}

	function G(e, n) {
		return G = Object.setPrototypeOf || function(u, s) {
			return u.__proto__ = s, u
		}, G(e, n)
	}

	function bt(e, n) {
		if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(n && n.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), n && G(e, n)
	}

	function Ee() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function ue(e, n, r) {
		return Ee() ? ue = Reflect.construct : ue = function(s, f, y) {
			var v = [null];
			v.push.apply(v, f);
			var _ = Function.bind.apply(s, v),
				d = new _;
			return y && G(d, y.prototype), d
		}, ue.apply(null, arguments)
	}

	function K(e) {
		return K = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
			return r.__proto__ || Object.getPrototypeOf(r)
		}, K(e)
	}

	function Et(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function we(e) {
		var n = typeof Map == "function" ? new Map : void 0;
		return we = function(u) {
			if (u === null || !Et(u)) return u;
			if (typeof u != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof n != "undefined") {
				if (n.has(u)) return n.get(u);
				n.set(u, s)
			}

			function s() {
				return ue(u, arguments, K(this).constructor)
			}
			return s.prototype = Object.create(u.prototype, {
				constructor: {
					value: s,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), G(s, u)
		}, we(e)
	}

	function wt(e, n) {
		return n && (L(n) === "object" || typeof n == "function") ? n : be(e)
	}

	function St(e) {
		var n = Ee();
		return function() {
			var u = K(e),
				s;
			if (n) {
				var f = K(this).constructor;
				s = Reflect.construct(u, arguments, f)
			} else s = u.apply(this, arguments);
			return wt(this, s)
		}
	}
	var Tt = function(e) {
		"use strict";
		bt(r, e);
		var n = St(r);

		function r(u, s) {
			xt(this, r);
			var f;
			return f = n.call(this, u), ye(be(f), "code", void 0), f.name = "TurnstileError", f.code = s, f
		}
		return r
	}(we(Error));

	function p(e, n) {
		var r = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Tt(r, n)
	}

	function h(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Se(e) {
		return e.startsWith(re) ? e.substring(re.length) : null
	}

	function Y(e) {
		return "".concat(re).concat(e)
	}

	function Vt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			n = document.currentScript;
		if (C(n, HTMLScriptElement) && e.test(n.src)) return n;
		for (var r = document.querySelectorAll("script"), u = 0, s; s = r[u]; u++)
			if (C(s, HTMLScriptElement) && e.test(s.src)) return s
	}

	function At() {
		var e = Vt();
		if (!e) return p("Could not find Turnstile script tag, some features may not be available", 43777), null;
		var n = {
			loadedAsync: !1,
			params: new URLSearchParams
		};
		(e.async || e.defer) && (n.loadedAsync = !0);
		var r = e.src,
			u = r.split("?");
		return u.length > 1 && (n.params = new URLSearchParams(u[1])), n
	}
	var Ae = null,
		Te = 0,
		Bt = 900,
		qt = 3;

	function jt(e, n, r) {
		Te++;
		var u = !0,
			s = !1,
			f = void 0;
		try {
			for (var y = e[Symbol.iterator](), v; !(u = (v = y.next()).done); u = !0) {
				var _ = _e(v.value, 2),
					d = _[0],
					m = _[1],
					S;
				m.watchcat.seq = Te, m.watchcat.lastAckedSeq === 0 && (m.watchcat.lastAckedSeq = Te);
				var w = Y(d);
				if (!w) {
					m.watchcat.missingWidgetWarning || (h("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), m.watchcat.missingWidgetWarning = !0);
					continue
				}
				var O = document.querySelector("#".concat(w));
				if (!O) {
					m.watchcat.missingWidgetWarning || (h("Cannot find Widget ".concat(w, ", consider using turnstile.remove() to clean up a widget.")), m.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((m.isExecuting || !m.isInitialized || m.isInitialized && !m.isStale && !m.isExecuted) && m.watchcat.lastAckedSeq !== 0 && m.watchcat.lastAckedSeq < m.watchcat.seq - 1 - qt) {
					m.watchcat.lastAckedSeq = 0, m.watchcat.seq = 0, m.isExecuting = !1, console.log("Turnstile Widget seem to have crashed: ", d);
					var l;
					if (n({
							data: {
								source: U,
								widgetId: d,
								code: he,
								event: "fail",
								rcV: (l = m.rcV) !== null && l !== void 0 ? l : D
							}
						}), r) {
						var o;
						window.postMessage({
							source: U,
							widgetId: d,
							event: "rcv-update",
							rcV: (o = m.rcV) !== null && o !== void 0 ? o : D
						}, "*")
					}
					continue
				}(S = O.contentWindow) === null || S === void 0 || S.postMessage({
					source: U,
					widgetId: d,
					seq: Te,
					event: "meow"
				}, "*")
			}
		} catch (t) {
			s = !0, f = t
		} finally {
			try {
				!u && y.return != null && y.return()
			} finally {
				if (s) throw f
			}
		}
	}

	function It(e, n, r) {
		Ae === null && (Ae = setInterval(function() {
			jt(e, n, r)
		}, Bt))
	}

	function Rt(e) {
		Ae !== null && e.size === 0 && clearInterval(Ae)
	}

	function Xe(e) {
		var n = new URLSearchParams;
		if (e.params._debugSitekeyOverrides && (e.params._debugSitekeyOverrides.offlabel !== "default" && n.set("offlabel", e.params._debugSitekeyOverrides.offlabel), e.params._debugSitekeyOverrides.clearance_level !== "default" && n.set("clearance_level", e.params._debugSitekeyOverrides.clearance_level)), n.size !== 0) return n.toString()
	}

	function Qe(e, n) {
		var r = "https://challenges.cloudflare.com";
		if (n) {
			var u;
			r = (u = e["base-url"]) !== null && u !== void 0 ? u : r
		}
		return r
	}

	function $e(e, n, r, u, s, f, y) {
		var v = Qe(r, s),
			_ = f ? "h/".concat(f, "/") : "",
			d = y ? "?".concat(y) : "";
		return "".concat(v, "/cdn-cgi/challenge-platform/").concat(_, "turnstile/if/ov2/av0/rcv").concat(u, "/").concat(e, "/").concat(n, "/").concat(r.theme, "/").concat(r.size).concat(d)
	}
	var Re = !1,
		x = {
			turnstileLoadInitTime: +new Date,
			isRecaptchaCompatibilityMode: !1,
			scriptWasLoadedAsync: !1,
			isReady: !1,
			widgetMap: new Map,
			lastWidgetIdx: 0
		};

	function Ke(e) {
		Lt(e, "")
	}

	function Nt() {
		var e = [pt, vt];
		x.isRecaptchaCompatibilityMode && e.push(mt), document.querySelectorAll(e.join(", ")).forEach(function(n) {
			return tt.render(n)
		})
	}
	var et = [];

	function Ot() {
		x.isReady = !0;
		var e = !0,
			n = !1,
			r = void 0;
		try {
			for (var u = et[Symbol.iterator](), s; !(e = (s = u.next()).done); e = !0) {
				var f = s.value;
				f()
			}
		} catch (y) {
			n = !0, r = y
		} finally {
			try {
				!e && u.return != null && u.return()
			} finally {
				if (n) throw r
			}
		}
	}

	function Ht(e, n) {
		var r, u = Qe(n.params, Re),
			s = "h/".concat("b", "/"),
			f = document.getElementById(e);
		if (!f) {
			p("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			return
		}
		var y = document.createElement("div");
		y.style.position = "fixed", y.style.zIndex = "21474836419";
		var v = document.createElement("div");
		v.className = "cf-turnstile-feedback", v.id = "cf-fr-id", v.style.borderColor = "#000000", v.style.width = "450px", v.style.height = "340px", v.style.position = "absolute", v.style.zIndex = "21474836420", v.style.borderWidth = "1px", v.style.borderColor = "#000", v.style.borderStyle = "solid", v.style.backgroundColor = "#ffffff", v.style.borderRadius = "10px", v.style.left = "-122px", v.style.top = "-91px", v.style.overflow = "hidden";
		var _ = document.createElement("iframe");
		_.id = e + "-fr", _.setAttribute("src", "".concat(u, "/cdn-cgi/challenge-platform/").concat(s, "feedback-reports/").concat(Se(e))), _.setAttribute("allow", "cross-origin-isolated; fullscreen"), _.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), _.setAttribute("scrolling", "no"), _.style.width = "100%", _.style.height = "100%", _.style.overflow = "hidden";
		var d = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		d.style.position = "absolute", d.style.width = "26px", d.style.height = "26px", d.style.zIndex = "21474836421", d.style.cursor = "pointer", d.style.right = "2px", d.style.top = "5px", d.setAttribute("width", "26"), d.setAttribute("height", "26"), d.addEventListener("click", function() {
			var O;
			(O = y.parentNode) === null || O === void 0 || O.removeChild(y)
		});
		var m = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		m.setAttribute("ry", "12"), m.setAttribute("rx", "12"), m.setAttribute("cy", "12"), m.setAttribute("cx", "12"), m.setAttribute("fill", "#aaaaaa"), m.setAttribute("stroke-width", "0"), d.appendChild(m);
		var S = document.createElementNS("http://www.w3.org/2000/svg", "line");
		S.setAttribute("stroke-width", "3"), S.setAttribute("stroke", "#fff"), S.setAttribute("fill", "none"), S.setAttribute("x1", "6"), S.setAttribute("x2", "18"), S.setAttribute("y1", "18"), S.setAttribute("y2", "5"), d.appendChild(S);
		var w = document.createElementNS("http://www.w3.org/2000/svg", "line");
		w.setAttribute("stroke-width", "3"), w.setAttribute("stroke", "#fff"), w.setAttribute("fill", "none"), w.setAttribute("x1", "6"), w.setAttribute("x2", "18"), w.setAttribute("y1", "5"), w.setAttribute("y2", "18"), d.appendChild(w), v.appendChild(_), v.appendChild(d), y.appendChild(v), (r = f.parentNode) === null || r === void 0 || r.appendChild(y)
	}

	function Lt(e, n) {
		var r = document.getElementById("".concat(e, "_response"));
		r !== null && C(r, HTMLInputElement) && (r.value = n);
		var u = document.getElementById("".concat(e, "_legacy_response"));
		if (u !== null && C(u, HTMLInputElement) && (u.value = n), x.isRecaptchaCompatibilityMode) {
			var s = document.getElementById("".concat(e, "_g_response"));
			s !== null && C(s, HTMLInputElement) && (s.value = n)
		}
	}

	function Je(e, n) {
		var r = n.params,
			u = r.size,
			s = u === void 0 ? "normal" : u,
			f = n.mode;
		switch (f) {
			case P.NON_INTERACTIVE:
			case P.MANAGED:
				switch (s) {
					case B.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case B.INVISIBLE:
						p('Invalid value for parameter "size", expected "'.concat(B.COMPACT, '" or "').concat(B.NORMAL, '", got "').concat(s, '"'), 2817);
					case B.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case P.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				p('Invalid value for parameter "mode", expected "'.concat(P.NON_INTERACTIVE, '", "').concat(P.MANAGED, '" or "').concat(P.INVISIBLE, '", got "').concat(f, '"'), 2818);
				return
		}
	}

	function Ct(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Gt(e, n) {
		var r = n.get("turnstile_iframe_alt");
		r && (e.title = r)
	}

	function Yt(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Xt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function kt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var tt = function() {
		function e(l, o, t, c) {
			return n.apply(this, arguments)
		}

		function n() {
			return n = at(function(l, o, t, c) {
				var i, a, g, b, A, E, T, M, N, F;
				return ge(this, function(I) {
					switch (I.label) {
						case 0:
							if (i = l.params.sitekey, a = kt(), !a) return h("Cannot determine Turnstile's embedded location, aborting clearance redemption."), u(l, o, !1), [2];
							g = "h/".concat("b", "/"), b = new URL(a), A = "https", E = "", T = "".concat(A, "://").concat(b.host, "/cdn-cgi/challenge-platform/").concat(g, "rc/").concat(c).concat(E), I.label = 1;
						case 1:
							return I.trys.push([1, 6, , 7]), [4, fetch(T, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: i,
									secondaryToken: t
								})
							})];
						case 2:
							return M = I.sent(), M.status === 200 ? [3, 3] : (h("Cannot determine Turnstile's embedded location, aborting clearance redemption."), u(l, o, !1), [3, 5]);
						case 3:
							return [4, M.json()];
						case 4:
							if (N = I.sent(), "status" in N && N.status === "redeemed") return u(l, o, !0), [2];
							I.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return F = I.sent(), h("Error contacting Turnstile, aborting clearance remdeption."), u(l, o, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), n.apply(this, arguments)
		}

		function r(l, o, t) {
			if (l.params.retry === ce.AUTO || t) {
				l.isExecuted && (l.msgQueue.push($.EXECUTE), l.isExecuted = !0, l.isExecuting = !0);
				var c, i = t ? 0 : 1e3 * 2 + ((c = l.params["retry-interval"]) !== null && c !== void 0 ? c : 0);
				l.retryTimeout = window.setTimeout(function() {
					m(o)
				}, i)
			}
		}

		function u(l, o, t) {
			if (l.response === void 0) {
				p("[Internal Error] Widget was completed but no response was given", 1362);
				return
			}
			l.isExecuting = !1, Lt(o, l.response);
			var c = l.cbSuccess;
			c && c(l.response, t)
		}

		function s(l) {
			if (!l) return [];
			for (var o = l.attributes, t = o.length, c = new Array(t), i = 0; i < t; i++) c[i] = o[i].name;
			return c
		}
		var f = function(o) {
			var t = o.data;
			if (t.source === U) {
				if (!Yt(o)) {
					h("Ignored message from wrong origin: " + o.origin);
					return
				}
				if (!(!t.widgetId || !x.widgetMap.has(t.widgetId))) {
					var c = Y(t.widgetId),
						i = x.widgetMap.get(t.widgetId);
					if (!(!c || !i)) switch (t.event) {
						case "init": {
							var a = document.getElementById(c);
							if (!a) {
								p("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
								return
							}
							i.mode = t.mode, i.mode === P.INVISIBLE && i.params["refresh-expired"] === H.MANUAL && h("refresh-expired=manual is impossible in invisible mode, consider using '".concat(H.AUTO, "' or '").concat(H.NEVER, "'")), i.params.appearance === q.ALWAYS || i.isExecuting && i.params.appearance === q.EXECUTE ? Je(a, i) : Ct(a), a.style.display = "";
							break
						}
						case "translationInit": {
							var g = document.getElementById(c);
							if (!g) {
								p("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3074);
								return
							}
							var b = new Map;
							Object.keys(t.translationData).forEach(function(oe) {
								b.set(oe, t.translationData[oe])
							}), Gt(g, b);
							break
						}
						case "reject": {
							var A = document.getElementById(c);
							if (i.isExecuting = !1, !A) {
								p("Cannot initialize Widget, Element not found (#".concat(c, ")."), 3075);
								return
							}
							if (t.reason === "outdated_browser") {
								var E = i.cbUnsupported;
								E && E()
							}
							break
						}
						case "food": {
							i.watchcat && t.seq > i.watchcat.lastAckedSeq && (i.watchcat.lastAckedSeq = t.seq);
							break
						}
						case "complete": {
							i.rcV = D, i.response = t.token, t.sToken ? e(i, c, t.sToken, t.chlId) : u(i, c, !1);
							break
						}
						case "fail": {
							t.rcV && (i.rcV = t.rcV), t.cfChlOut && (i.cfChlOut = t.cfChlOut), t.cfChlOutS && (i.cfChlOutS = t.cfChlOutS), i.isExecuting = !1, i.isInitialized = !0, Ke(c);
							var T = i.cbError,
								M = t.code === he;
							if (T) {
								var N;
								T(String((N = t.code) !== null && N !== void 0 ? N : lt)) || (t.code && h("Error: ".concat(t.code)), r(i, c, M))
							} else t.code ? (r(i, c, M), p("Error: ".concat(t.code), 3076)) : r(i, c, !1);
							break
						}
						case "feedbackInit": {
							Ht(c, i);
							break
						}
						case "requestFeedbackData": {
							var F, I = document.querySelector("#".concat(c));
							if (!I) {
								p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
								return
							}(F = I.contentWindow) === null || F === void 0 || F.postMessage({
								source: U,
								widgetId: t.widgetId,
								event: "requestTurnstileResults"
							}, "*");
							break
						}
						case "turnstileResults": {
							var X, J = document.querySelector("#".concat(c, "-fr"));
							if (!J) {
								p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
								return
							}(X = J.contentWindow) === null || X === void 0 || X.postMessage({
								source: U,
								widgetId: t.widgetId,
								event: "feedbackData",
								rayId: t.rayId,
								rcV: t.rcV,
								cfChlOut: i.cfChlOut,
								cfChlOutS: i.cfChlOutS,
								sitekey: t.sitekey
							}, "*");
							break
						}
						case "closeFeedbackReportIframe": {
							var ae, ie, le = document.querySelector("#".concat(c, "-fr"));
							if (!le) {
								p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
								return
							}(ie = le.parentElement) === null || ie === void 0 || (ae = ie.parentElement) === null || ae === void 0 || ae.remove();
							break
						}
						case "tokenExpired": {
							var Oe = t.token;
							i.isExpired = !0;
							var se = i.cbExpired;
							se && se(Oe), i.params["refresh-expired"] === H.AUTO && !i.isResetting && m(c);
							break
						}
						case "interactiveTimeout": {
							i.rcV = D, Ke(c);
							var fe = i.cbTimeout;
							fe && fe();
							break
						}
						case "refreshRequest": {
							i.rcV = D, m(c);
							break
						}
						case "interactiveBegin": {
							var de = document.getElementById(c);
							if (!de) {
								p("Cannot layout widget, Element not found (#".concat(c, ")."), 3076);
								return
							}
							var Z = i.cbBeforeInteractive;
							Z && Z(), i.params.appearance === q.INTERACTION_ONLY && Je(de, i);
							break
						}
						case "interactiveEnd": {
							var Q = document.getElementById(c);
							if (!Q) {
								p("Cannot unlayout widget, Element not found (#".concat(c, ")."), 3077);
								return
							}
							var ee = i.cbAfterInteractive;
							ee && ee();
							break
						}
						case "widgetStale": {
							i.isStale = !0;
							break
						}
						case "requestExtraParams": {
							var R, z = document.querySelector("#".concat(c));
							if (!z) {
								p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
								return
							}
							i.isResetting = !1;
							var j = {};
							(R = z.contentWindow) === null || R === void 0 || R.postMessage(Me({
								source: U,
								widgetId: t.widgetId,
								event: "extraParams",
								action: i.action,
								cData: i.cData,
								chlPageData: i.chlPageData,
								rcV: i.rcV,
								ch: "c8377512",
								url: kt(),
								retry: i.params.retry,
								"expiry-interval": i.params["expiry-interval"],
								"retry-interval": i.params["retry-interval"],
								"refresh-expired": i.params["refresh-expired"],
								language: i.params.language,
								execution: i.params.execution,
								appearance: i.params.appearance,
								wPr: {
									"w.iW": window.innerWidth,
									"ht.atrs": s(document.body.parentNode)
								},
								turnstileAge: +Date.now() - x.turnstileLoadInitTime,
								widgetAge: +Date.now() - i.widgetStartTime
							}, j), "*"), _(i, t.widgetId, z), i.isInitialized = !0;
							break
						}
					}
				}
			}
		};
		window.addEventListener("message", f);

		function y() {
			var l = "abcdefghijklmnopqrstuvwxyz0123456789",
				o = l.length,
				t;
			do {
				t = "";
				for (var c = 0; c < 5; c++) t += l.charAt(Math.floor(Math.random() * o))
			} while (x.widgetMap.has(t));
			return t
		}

		function v(l) {
			if (typeof l == "string") {
				var o = Se(l);
				if (o && x.widgetMap.has(o)) return o;
				try {
					var t = document.querySelector(l);
					return t ? v(t) : null
				} catch (i) {
					return null
				}
			}
			if (C(l, HTMLElement)) {
				var c = l.querySelector("iframe");
				return c ? Se(c.id) : null
			}
			return l || x.widgetMap.size === 0 ? null : x.widgetMap.keys().next().value
		}

		function _(l, o, t) {
			for (; l.msgQueue.length;) {
				var c, i = l.msgQueue.pop();
				(c = t.contentWindow) === null || c === void 0 || c.postMessage({
					source: U,
					widgetId: o,
					event: i
				}, "*")
			}
		}

		function d(l, o) {
			if (o) {
				var t = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
					c = [],
					i = !0,
					a = !1,
					g = void 0;
				try {
					for (var b = t[Symbol.iterator](), A; !(i = (A = b.next()).done); i = !0) {
						var E = A.value;
						o[E] && o[E] !== l.params[E] && c.push(E)
					}
				} catch (T) {
					a = !0, g = T
				} finally {
					try {
						!i && b.return != null && b.return()
					} finally {
						if (a) throw g
					}
				}
				if (c.length !== 0) {
					p("The parameters ".concat(t.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(c.join(",")), 3618);
					return
				}
				if (o.action) {
					if (!Ve(o.action)) {
						p('Invalid input for optional parameter "action", got "'.concat(o.action, '"'), 3604);
						return
					}
					l.action = o.action
				}
				if (o.cData) {
					if (!Be(o.cData)) {
						p('Invalid input for optional parameter "cData", got "'.concat(o.cData, '"'), 3605);
						return
					}
					l.cData = o.cData
				}
				o["after-interactive-callback"] && (l.cbAfterInteractive = o["after-interactive-callback"]), o["before-interactive-callback"] && (l.cbBeforeInteractive = o["before-interactive-callback"]), o.callback && (l.cbSuccess = o.callback), o["expired-callback"] && (l.cbExpired = o["expired-callback"]), o["timeout-callback"] && (l.cbTimeout = o["timeout-callback"]), o["error-callback"] && (l.cbError = o["error-callback"]), o["unsupported-callback"] && (l.cbUnsupported = o["unsupported-callback"]), o.chlPageData && (l.chlPageData = o.chlPageData)
			}
		}

		function m(l) {
			var o = v(l);
			if (!o) {
				p("Nothing to reset found for provided container", 3329);
				return
			}
			var t = x.widgetMap.get(o);
			if (t) {
				t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isExpired = !1, t.isExecuting = !1, t.isStale = !1, t.isInitialized = !1, t.watchcat.lastAckedSeq = 0, t.watchcat.seq = 0, t.params.execution === te.RENDER && (t.msgQueue.push($.EXECUTE), t.isExecuted = !0, t.isExecuting = !0);
				var c = Y(o),
					i = document.querySelector("#".concat(c));
				if (!c || !i) {
					p("Widget ".concat(o, " to reset was not found."), 3330);
					return
				}
				if (t.params.appearance === q.INTERACTION_ONLY && Ct(i), t.params.sitekey === null) {
					p("Unexpected Error: Sitekey is null", 3347);
					return
				}
				var a;
				i.src = $e(o, t.params.sitekey, t.params, (a = t.rcV) !== null && a !== void 0 ? a : D, Re, "b", Xe(t)), Ke(c), t.retryTimeout && window.clearTimeout(t.retryTimeout)
			} else {
				p("Widget ".concat(o, " to reset was not found."), 3331);
				return
			}
		}

		function S(l) {
			var o, t = v(l);
			if (!t || !x.widgetMap.has(t)) {
				h("Nothing to remove found for the provided container");
				return
			}
			var c = Y(t),
				i = ["iframe#".concat(c), "input#".concat(c, "_response"), "input#".concat(c, "_legacy_response"), "input#".concat(c, "_g_response")];
			document.querySelectorAll(i.join(", ")).forEach(function(g) {
				return g.remove()
			});
			var a = (o = x.widgetMap.get(t)) === null || o === void 0 ? void 0 : o.retryTimeout;
			a && window.clearTimeout(a), x.widgetMap.delete(t), Rt(x.widgetMap)
		}

		function w(l, o) {
			var t;
			if (typeof l == "string") try {
					var c = document.querySelector(l);
					if (!c) {
						p('Unable to find a container for "'.concat(l, '"'), 3585);
						return
					}
					t = c
				} catch (Kt) {
					p('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(l, '"'), 3586);
					return
				} else if (C(l, HTMLElement)) t = l;
				else {
					p('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
					return
				} var i = Qt(t);
			if (i) {
				var a = Object.assign(i, o),
					g = a.action,
					b = a.cData,
					A = a.chlPageData,
					E = a.sitekey,
					T;
				a.theme = (T = a.theme) !== null && T !== void 0 ? T : xe.AUTO;
				var M;
				a.retry = (M = a.retry) !== null && M !== void 0 ? M : ce.AUTO;
				var N;
				a.execution = (N = a.execution) !== null && N !== void 0 ? N : te.RENDER;
				var F;
				a.appearance = (F = a.appearance) !== null && F !== void 0 ? F : q.ALWAYS;
				var I;
				a["retry-interval"] = +((I = a["retry-interval"]) !== null && I !== void 0 ? I : ht);
				var X;
				a["expiry-interval"] = +((X = a["expiry-interval"]) !== null && X !== void 0 ? X : (ft - dt) * 1e3);
				var J;
				a.size = (J = a.size) !== null && J !== void 0 ? J : B.NORMAL;
				var ae = a.callback,
					ie = a["expired-callback"],
					le = a["timeout-callback"],
					Oe = a["after-interactive-callback"],
					se = a["before-interactive-callback"],
					fe = a["error-callback"],
					de = a["unsupported-callback"];
				if (typeof E != "string") {
					p('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof E == "undefined" ? "undefined" : L(E), '"'), 3588);
					return
				}
				if (!st(E)) {
					p('Invalid input for parameter "sitekey", got "'.concat(E, '"'), 3589);
					return
				}
				if (!qe(a.size)) {
					p('Invalid type for parameter "size", expected normal|compact, got "'.concat(a.size, '" ').concat(L(a.size)), 3590);
					return
				}
				if (!Ue(a.theme)) {
					p('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(a.theme, '" ').concat(L(a.theme)), 3591);
					return
				}
				if (!We(a.retry)) {
					p('Invalid type for parameter "retry", expected never|auto, got "'.concat(a.retry, '" ').concat(L(a.retry)), 3592);
					return
				}
				if (a.language || (a.language = "auto"), !He(a.language)) {
					p('Invalid language value: "'.concat(a.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
					return
				}
				if (!Ge(a.appearance)) {
					p('Unknown appearance value: "'.concat(a.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
					return
				}
				if (!Ye(a.execution)) {
					p('Unknown execution value: "'.concat(a.execution, ", expected either: 'render' or 'execute'."), 3601);
					return
				}
				if (!Fe(a["retry-interval"])) {
					p('Invalid retry-interval value: "'.concat(a["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
					return
				}
				if (!ze(a["expiry-interval"])) {
					p('Invalid expiry-interval value: "'.concat(a["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
					return
				}
				var Z, Q = (Z = a["refresh-expired"]) !== null && Z !== void 0 ? Z : H.AUTO;
				if (je(Q)) a["refresh-expired"] = Q;
				else {
					p('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Q, '" ').concat(typeof Q == "undefined" ? "undefined" : L(Q)), 3603);
					return
				}
				var ee = t.getElementsByTagName("iframe")[0];
				ee != null && ee.id.startsWith(re) && S(t);
				var R = document.createElement("iframe");
				if (!Ve(g)) {
					p('Invalid input for optional parameter "action", got "'.concat(g, '"'), 3604);
					return
				}
				if (!Be(b)) {
					p('Invalid input for optional parameter "cData", got "'.concat(b, '"'), 3605);
					return
				}
				var z = y(),
					j = Y(z);
				if (!(!z || !j)) {
					var oe = [],
						Ce = a.execution === te.RENDER;
					Ce && oe.push($.EXECUTE), x.lastWidgetIdx++;
					var Mt = +new Date,
						Pt = {};
					x.widgetMap.set(z, Me({
						idx: x.lastWidgetIdx,
						action: g,
						cData: b,
						chlPageData: A,
						cbSuccess: ae,
						cbError: fe,
						cbExpired: ie,
						cbTimeout: le,
						cbUnsupported: de,
						cbAfterInteractive: Oe,
						cbBeforeInteractive: se,
						params: a,
						isStale: !1,
						isExpired: !1,
						isExecuting: Ce,
						isResetting: !1,
						isExecuted: Ce,
						isInitialized: !1,
						msgQueue: oe,
						rcV: D,
						widgetStartTime: Mt,
						watchcat: {
							seq: 0,
							lastAckedSeq: 0,
							missingWidgetWarning: !1
						}
					}, Pt)), It(x.widgetMap, f, Re);
					var rt = x.widgetMap.get(z);
					if (!rt) {
						p("Turnstile Initialization Error ", 3606);
						return
					}
					R.style.display = "none", R.style.border = "none", R.style.overflow = "hidden", R.setAttribute("src", $e(z, E, a, D, Re, "b", Xe(rt))), R.setAttribute("allow", "cross-origin-isolated; fullscreen"), R.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), R.id = j;
					var ke;
					R.tabIndex = (ke = a.tabindex) !== null && ke !== void 0 ? ke : 0, R.title = "Widget containing a Cloudflare security challenge", t.appendChild(R);
					var Ne, Dt = (Ne = a["response-field"]) !== null && Ne !== void 0 ? Ne : !0;
					if (Dt) {
						var pe = document.createElement("input");
						pe.type = "hidden";
						var Le;
						if (pe.name = (Le = a["response-field-name"]) !== null && Le !== void 0 ? Le : _t, pe.id = "".concat(j, "_response"), t.appendChild(pe), typeof a["response-field-name"] != "string" && Xt(E)) {
							var ve = document.createElement("input");
							ve.type = "hidden", ve.name = yt, ve.id = "".concat(j, "_legacy_response"), t.appendChild(ve)
						}
					}
					if (x.isRecaptchaCompatibilityMode) {
						var me = document.createElement("input");
						me.type = "hidden", me.name = gt, me.id = "".concat(j, "_g_response"), t.appendChild(me)
					}
					return j
				}
			}
		}

		function O() {
			var l, o = -1,
				t = !0,
				c = !1,
				i = void 0;
			try {
				for (var a = x.widgetMap[Symbol.iterator](), g; !(t = (g = a.next()).done); t = !0) {
					var b = _e(g.value, 2),
						A = b[0],
						E = b[1];
					o < E.idx && (l = A, o = E.idx)
				}
			} catch (T) {
				c = !0, i = T
			} finally {
				try {
					!t && a.return != null && a.return()
				} finally {
					if (c) throw i
				}
			}
			if (o === -1) {
				p("Could not find widget", 43778);
				return
			}
			return l
		}
		return {
			ready: function(o) {
				if (x.scriptWasLoadedAsync && (h("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), p("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof o != "function" && p('turnstile.ready() expected a "function" argument, got "'.concat(typeof o == "undefined" ? "undefined" : L(o), '"'), 3841), o(), typeof o != "function" && p('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), x.isReady) {
					o();
					return
				}
				et.push(o)
			},
			implicitRender: Nt,
			execute: function(o, t) {
				var c = v(o);
				if (!c) {
					if (t === void 0) {
						p("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var i = w(o, t);
					if (!i) {
						p("Failed to render widget", 43522);
						return
					}
					c = i
				}
				var a = x.widgetMap.get(c);
				if (a) {
					d(a, t);
					var g = Y(c);
					if (a.isExecuting) {
						h("Call to execute() on a widget that is already executing (".concat(g, "), consider using reset() before execute()"));
						return
					} else a.isExecuting = !0;
					if (a.response) {
						a.isExecuting = !1, h("Call to execute() on a widget that was already executed (".concat(g, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), a.cbSuccess && a.cbSuccess(a.response, !1);
						return
					}
					a.isExpired && h("Call to execute on a expired-widget (".concat(g, "), consider using reset() before")), a.isStale && (m(g), a.isExecuting = !0), a.msgQueue.push($.EXECUTE), a.isExecuted = !0;
					var b = document.querySelector("#".concat(g));
					if (!b) {
						a.isExecuting = !1, p("Widget ".concat(g, " to execute was not found"), 43522);
						return
					}
					a.isInitialized && _(a, c, b), a.isInitialized && a.params.appearance === q.EXECUTE && Je(b, a)
				}
			},
			render: w,
			reset: m,
			remove: S,
			getResponse: function(o) {
				var t;
				if (typeof o == "undefined") {
					var c = O();
					if (c) {
						var i, a = x.widgetMap.get(c);
						return a != null && a.isExpired && h("Call to getResponse on a widget that expired, consider refreshing the widget."), (i = x.widgetMap.get(c)) === null || i === void 0 ? void 0 : i.response
					} else p("Could not find a widget", 43794)
				}
				var g = v(o);
				if (!g) {
					p("Could not find widget for provided container", 43778);
					return
				}
				return (t = x.widgetMap.get(g)) === null || t === void 0 ? void 0 : t.response
			},
			isExpired: function(o) {
				var t;
				if (typeof o == "undefined") {
					var c = O();
					if (c) {
						var i, a;
						return (a = (i = x.widgetMap.get(c)) === null || i === void 0 ? void 0 : i.isExpired) !== null && a !== void 0 ? a : !1
					} else p("Could not find a widget", 43794)
				}
				var g = v(o);
				if (!g) return p("Could not find widget for provided container", 43778), !1;
				var b;
				return (b = (t = x.widgetMap.get(g)) === null || t === void 0 ? void 0 : t.isExpired) !== null && b !== void 0 ? b : !1
			}
		}
	}();

	function Qt(e) {
		var n = e.getAttribute("data-sitekey"),
			r = {
				sitekey: n
			},
			u = e.getAttribute("data-tabindex");
		u && (r.tabindex = parseInt(u, 10));
		var s = e.getAttribute("data-theme");
		s && (Ue(s) ? r.theme = s : h('Unknown data-theme value: "'.concat(s, '"')));
		var f = e.getAttribute("data-size");
		if (f && (qe(f) ? r.size = f : h('Unknown data-size value: "'.concat(f, '"'))), 0) var y;
		var v = e.getAttribute("data-action");
		typeof v == "string" && (r.action = v);
		var _ = e.getAttribute("data-cdata");
		typeof _ == "string" && (r.cData = _);
		var d = e.getAttribute("data-retry");
		d && (We(d) ? r.retry = d : h('Invalid data-retry value: "'.concat(d, ", expected either 'never' or 'auto'\"")));
		var m = e.getAttribute("data-retry-interval");
		if (m) {
			var S = parseInt(m, 10);
			Fe(S) ? r["retry-interval"] = S : h('Invalid data-retry-interval value: "'.concat(m, ', expected an integer value > 0 and < 900000"'))
		}
		var w = e.getAttribute("data-expiry-interval");
		if (w) {
			var O = parseInt(w, 10);
			ze(O) ? r["expiry-interval"] = O : h('Invalid data-expiry-interval value: "'.concat(O, ', expected an integer value > 0 and < 360000"'))
		}
		var l = e.getAttribute("data-refresh-expired");
		l && (je(l) ? r["refresh-expired"] = l : h('Unknown data-refresh-expired value: "'.concat(l, ", expected either: 'never', 'auto' or 'manual'.")));
		var o = e.getAttribute("data-language");
		o && (He(o) ? r.language = o : h('Invalid data-language value: "'.concat(o, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));

		function t(E) {
			var T = e.getAttribute(E);
			return T && window[T] ? window[T] : void 0
		}
		var c = ["error-callback", "unsupported-callback", "callback", "expired-callback", "timeout-callback", "after-interactive-callback", "before-interactive-callback"];
		c.forEach(function(E) {
			r[E] = t("data-".concat(E))
		});
		var i, a = (i = e.getAttribute("data-response-field")) !== null && i !== void 0 ? i : "true";
		r["response-field"] = a === "true";
		var g = e.getAttribute("data-response-field-name");
		g && (r["response-field-name"] = g);
		var b = e.getAttribute("data-execution");
		b && (Ye(b) ? r.execution = b : h('Unknown data-execution value: "'.concat(b, ", expected either: 'render' or 'execute'.")));
		var A = e.getAttribute("data-appearance");
		return A && (Ge(A) ? r.appearance = A : h('Unknown data-appearance value: "'.concat(A, ", expected either: 'always', 'execute', or 'interaction-only'."))), r
	}
	var k = At(),
		Ze;
	x.scriptWasLoadedAsync = (Ze = k == null ? void 0 : k.loadedAsync) !== null && Ze !== void 0 ? Ze : !1;
	k != null && k.params && (ne = k.params.get("compat"), (ne == null ? void 0 : ne.toLowerCase()) === "recaptcha" ? window.grecaptcha ? h("grecaptcha is already defined. The compatibility layer will not be enabled") : (h("Compatibility layer enabled"), x.isRecaptchaCompatibilityMode = !0, window.grecaptcha = tt) : ne !== null && h('Unknown value for api.js?compat: "'.concat(ne, '", ignoring')), k.params.forEach(function(e, n) {
		V(["onload", "compat", "render"], n) || h('Unknown parameter passed to api.js: "?'.concat(n, '=...", ignoring'))
	}), W = k.params.get("onload"), W && setTimeout(function() {
		typeof window[W] == "function" ? window[W]() : (h("Unable to find onload callback '".concat(W, "' immediately after loading, expected 'function', got '").concat(L(window[W]), "'")), setTimeout(function() {
			typeof window[W] == "function" ? window[W]() : h("Unable to find onload callback '".concat(W, "' after 1 second, expected 'function', got '").concat(L(window[W]), "'"))
		}, 1e3))
	}, 0));
	var ne, W, $t = "turnstile" in window;
	$t ? h("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = tt, (k == null || (Ie = k.params) === null || Ie === void 0 ? void 0 : Ie.get("render")) !== "explicit" && et.push(Nt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Ot, 0) : window.addEventListener("DOMContentLoaded", Ot));
	var Ie;
})();