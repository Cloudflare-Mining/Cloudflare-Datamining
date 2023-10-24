"use strict";
(function() {
	function Ke(e, n, i, f, u, y, m) {
		try {
			var l = e[y](m),
				d = l.value
		} catch (h) {
			i(h);
			return
		}
		l.done ? n(d) : Promise.resolve(d).then(f, u)
	}

	function Ze(e) {
		return function() {
			var n = this,
				i = arguments;
			return new Promise(function(f, u) {
				var y = e.apply(n, i);

				function m(d) {
					Ke(y, f, u, m, l, "next", d)
				}

				function l(d) {
					Ke(y, f, u, m, l, "throw", d)
				}
				m(void 0)
			})
		}
	}

	function O(e, n) {
		return n != null && typeof Symbol != "undefined" && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : O(e, n)
	}

	function ye(e, n, i) {
		return n in e ? Object.defineProperty(e, n, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[n] = i, e
	}

	function Le(e) {
		for (var n = 1; n < arguments.length; n++) {
			var i = arguments[n] != null ? arguments[n] : {},
				f = Object.keys(i);
			typeof Object.getOwnPropertySymbols == "function" && (f = f.concat(Object.getOwnPropertySymbols(i).filter(function(u) {
				return Object.getOwnPropertyDescriptor(i, u).enumerable
			}))), f.forEach(function(u) {
				ye(e, u, i[u])
			})
		}
		return e
	}

	function et(e) {
		if (Array.isArray(e)) return e
	}

	function tt(e, n) {
		var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (i != null) {
			var f = [],
				u = !0,
				y = !1,
				m, l;
			try {
				for (i = i.call(e); !(u = (m = i.next()).done) && (f.push(m.value), !(n && f.length === n)); u = !0);
			} catch (d) {
				y = !0, l = d
			} finally {
				try {
					!u && i.return != null && i.return()
				} finally {
					if (y) throw l
				}
			}
			return f
		}
	}

	function rt() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Pe(e, n) {
		(n == null || n > e.length) && (n = e.length);
		for (var i = 0, f = new Array(n); i < n; i++) f[i] = e[i];
		return f
	}

	function nt(e, n) {
		if (e) {
			if (typeof e == "string") return Pe(e, n);
			var i = Object.prototype.toString.call(e).slice(8, -1);
			if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(i);
			if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Pe(e, n)
		}
	}

	function _e(e, n) {
		return et(e) || tt(e, n) || nt(e, n) || rt()
	}

	function k(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function he(e, n) {
		var i = function(v) {
				return function(w) {
					return f([v, w])
				}
			},
			f = function(v) {
				if (y) throw new TypeError("Generator is already executing.");
				for (; d && (d = 0, v[0] && (u = 0)), u;) try {
					if (y = 1, m && (l = v[0] & 2 ? m.return : v[0] ? m.throw || ((l = m.return) && l.call(m), 0) : m.next) && !(l = l.call(m, v[1])).done) return l;
					switch (m = 0, l && (v = [v[0] & 2, l.value]), v[0]) {
						case 0:
						case 1:
							l = v;
							break;
						case 4:
							return u.label++, {
								value: v[1],
								done: !1
							};
						case 5:
							u.label++, m = v[1], v = [0];
							continue;
						case 7:
							v = u.ops.pop(), u.trys.pop();
							continue;
						default:
							if (l = u.trys, !(l = l.length > 0 && l[l.length - 1]) && (v[0] === 6 || v[0] === 2)) {
								u = 0;
								continue
							}
							if (v[0] === 3 && (!l || v[1] > l[0] && v[1] < l[3])) {
								u.label = v[1];
								break
							}
							if (v[0] === 6 && u.label < l[1]) {
								u.label = l[1], l = v;
								break
							}
							if (l && u.label < l[2]) {
								u.label = l[2], u.ops.push(v);
								break
							}
							l[2] && u.ops.pop(), u.trys.pop();
							continue
					}
					v = n.call(e, u)
				} catch (w) {
					v = [6, w], m = 0
				} finally {
					y = l = 0
				}
				if (v[0] & 5) throw v[1];
				return {
					value: v[0] ? v[1] : void 0,
					done: !0
				}
			},
			u = {
				label: 0,
				sent: function() {
					if (l[0] & 1) throw l[1];
					return l[1]
				},
				trys: [],
				ops: []
			},
			y, m, l, d;
		return d = {
			next: i(0),
			throw: i(1),
			return: i(2)
		}, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
			return this
		}), d
	}
	var at = 300020;
	var it = 300030;

	function U(e, n) {
		return e.indexOf(n) !== -1
	}
	var L;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(L || (L = {}));
	var W;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(W || (W = {}));
	var ge;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(ge || (ge = {}));
	var oe;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(oe || (oe = {}));
	var z;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(z || (z = {}));
	var V;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(V || (V = {}));
	var ne;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(ne || (ne = {}));
	var Q;
	(function(e) {
		e.EXECUTE = "execute"
	})(Q || (Q = {}));
	var De;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(De || (De = {}));

	function Me(e) {
		return U(["auto", "dark", "light"], e)
	}

	function Ue(e) {
		return U(["auto", "never"], e)
	}

	function We(e) {
		return e > 0 && e < 9e5
	}

	function Fe(e) {
		return e > 0 && e < 36e4
	}
	var Mt = /^[0-9A-Za-z_-]{3,100}$/;

	function ot(e) {
		return Mt.test(e)
	}
	var Ut = /^[a-z0-9_-]{0,32}$/i;

	function ze(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ut.test(e)
	}
	var Wt = /^[a-z0-9_\-=]{0,255}$/i;

	function Ve(e) {
		return e === void 0 ? !0 : typeof e == "string" && Wt.test(e)
	}

	function qe(e) {
		return U(["normal", "compact", "invisible"], e)
	}

	function He(e) {
		return U(["auto", "manual", "never"], e)
	}
	var Ft = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function je(e) {
		return e === "auto" || Ft.test(e)
	}

	function Be(e) {
		return U(["always", "execute", "interaction-only"], e)
	}

	function Ge(e) {
		return U(["render", "execute"], e)
	}
	var $ = "0/0";
	var ct = 300,
		ut = 10;
	var ae = "cf-chl-widget-",
		F = "cloudflare-challenge",
		lt = ".cf-turnstile",
		st = ".cf-challenge",
		ft = ".g-recaptcha",
		dt = "cf_challenge_response",
		pt = "cf-turnstile-response",
		vt = "g-recaptcha-response",
		mt = 8e3;

	function xe(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function yt(e, n) {
		if (!O(e, n)) throw new TypeError("Cannot call a class as a function")
	}

	function q(e, n) {
		return q = Object.setPrototypeOf || function(f, u) {
			return f.__proto__ = u, f
		}, q(e, n)
	}

	function _t(e, n) {
		if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(n && n.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), n && q(e, n)
	}

	function be() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function ce(e, n, i) {
		return be() ? ce = Reflect.construct : ce = function(u, y, m) {
			var l = [null];
			l.push.apply(l, y);
			var d = Function.bind.apply(u, l),
				h = new d;
			return m && q(h, m.prototype), h
		}, ce.apply(null, arguments)
	}

	function J(e) {
		return J = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
			return i.__proto__ || Object.getPrototypeOf(i)
		}, J(e)
	}

	function ht(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function Ee(e) {
		var n = typeof Map == "function" ? new Map : void 0;
		return Ee = function(f) {
			var u = function() {
				return ce(f, arguments, J(this).constructor)
			};
			if (f === null || !ht(f)) return f;
			if (typeof f != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof n != "undefined") {
				if (n.has(f)) return n.get(f);
				n.set(f, u)
			}
			return u.prototype = Object.create(f.prototype, {
				constructor: {
					value: u,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), q(u, f)
		}, Ee(e)
	}

	function gt(e, n) {
		return n && (k(n) === "object" || typeof n == "function") ? n : xe(e)
	}

	function xt(e) {
		var n = be();
		return function() {
			var f = J(e),
				u;
			if (n) {
				var y = J(this).constructor;
				u = Reflect.construct(f, arguments, y)
			} else u = f.apply(this, arguments);
			return gt(this, u)
		}
	}
	var bt = function(e) {
		"use strict";
		_t(i, e);
		var n = xt(i);

		function i(f, u) {
			yt(this, i);
			var y;
			return y = n.call(this, f), ye(xe(y), "code", void 0), y.name = "TurnstileError", y.code = u, y
		}
		return i
	}(Ee(Error));

	function p(e, n) {
		var i = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new bt(i, n)
	}

	function x(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function we(e) {
		return e.startsWith(ae) ? e.substring(ae.length) : null
	}

	function H(e) {
		return "".concat(ae).concat(e)
	}
	var Ae = null,
		Te = 0,
		zt = 1500,
		Vt = 5;

	function qt(e) {
		Te++;
		var n = !0,
			i = !1,
			f = void 0;
		try {
			for (var u = e[Symbol.iterator](), y; !(n = (y = u.next()).done); n = !0) {
				var m = _e(y.value, 2),
					l = m[0],
					d = m[1],
					h;
				d.watchcat.seq = Te, d.watchcat.lastAckedSeq === 0 && (d.watchcat.lastAckedSeq = Te);
				var v = H(l);
				if (!v) {
					d.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(v, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				var w = document.querySelector("#".concat(v));
				if (!w) {
					d.watchcat.missingWidgetWarning || (x("Cannot find Widget ".concat(v, ", consider using turnstile.remove() to clean up a widget.")), d.watchcat.missingWidgetWarning = !0);
					continue
				}
				if ((d.isExecuting || !d.isInitialized || d.isInitialized && !d.isStale && !d.isExecuted) && d.watchcat.lastAckedSeq !== 0 && d.watchcat.lastAckedSeq < d.watchcat.seq - 1 - Vt) {
					d.watchcat.lastAckedSeq = 0, d.watchcat.seq = 0, console.log("Turnstile Widget seem to have crashed: ", l), window.postMessage({
						source: F,
						widgetId: l,
						code: it,
						event: "fail"
					}, "*");
					continue
				}(h = w.contentWindow) === null || h === void 0 || h.postMessage({
					source: F,
					widgetId: l,
					seq: Te,
					event: "meow"
				}, "*")
			}
		} catch (g) {
			i = !0, f = g
		} finally {
			try {
				!n && u.return != null && u.return()
			} finally {
				if (i) throw f
			}
		}
	}

	function Et(e) {
		Ae === null && (Ae = setInterval(function() {
			qt(e)
		}, zt))
	}

	function wt(e) {
		Ae !== null && e.size === 0 && clearInterval(Ae)
	}
	var Ht = +new Date,
		Ie = !1,
		Rt = !1;

	function Ye(e) {
		kt(e, "")
	}

	function Ot() {
		var e = [lt, st];
		Ie && e.push(ft), document.querySelectorAll(e.join(", ")).forEach(function(n) {
			return $e.render(n)
		})
	}
	var Qe = [],
		Ct = !1;

	function Tt() {
		Ct = !0;
		var e = !0,
			n = !1,
			i = void 0;
		try {
			for (var f = Qe[Symbol.iterator](), u; !(e = (u = f.next()).done); e = !0) {
				var y = u.value;
				y()
			}
		} catch (m) {
			n = !0, i = m
		} finally {
			try {
				!e && f.return != null && f.return()
			} finally {
				if (n) throw i
			}
		}
	}

	function jt(e, n) {
		var i, f = Nt(n.params),
			u = "h/".concat("g", "/"),
			y = document.getElementById(e);
		if (!y) {
			p("Cannot initialize Widget, Element not found (#".concat(e, ")."), 3074);
			return
		}
		var m = document.createElement("div");
		m.style.position = "fixed", m.style.zIndex = "21474836419";
		var l = document.createElement("div");
		l.className = "cf-turnstile-feedback", l.id = "cf-fr-id", l.style.borderColor = "#000000", l.style.width = "450px", l.style.height = "340px", l.style.position = "absolute", l.style.zIndex = "21474836420", l.style.borderWidth = "1px", l.style.borderColor = "#000", l.style.borderStyle = "solid", l.style.backgroundColor = "#ffffff", l.style.borderRadius = "10px", l.style.left = "52px", l.style.top = "-91px", l.style.overflow = "hidden";
		var d = document.createElement("iframe");
		d.id = e + "-fr", d.setAttribute("src", "".concat(f, "/cdn-cgi/challenge-platform/").concat(u, "feedback-reports/").concat(we(e))), d.setAttribute("allow", "cross-origin-isolated; fullscreen"), d.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups allow-forms"), d.setAttribute("scrolling", "no"), d.style.width = "100%", d.style.height = "100%", d.style.overflow = "hidden";
		var h = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		h.style.position = "absolute", h.style.width = "26px", h.style.height = "26px", h.style.zIndex = "21474836421", h.style.cursor = "pointer", h.style.right = "2px", h.style.top = "5px", h.setAttribute("width", "26"), h.setAttribute("height", "26"), h.addEventListener("click", function() {
			var N;
			(N = m.parentNode) === null || N === void 0 || N.removeChild(m)
		});
		var v = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
		v.setAttribute("ry", "12"), v.setAttribute("rx", "12"), v.setAttribute("cy", "12"), v.setAttribute("cx", "12"), v.setAttribute("fill", "#aaaaaa"), v.setAttribute("stroke-width", "0"), h.appendChild(v);
		var w = document.createElementNS("http://www.w3.org/2000/svg", "line");
		w.setAttribute("stroke-width", "3"), w.setAttribute("stroke", "#fff"), w.setAttribute("fill", "none"), w.setAttribute("x1", "6"), w.setAttribute("x2", "18"), w.setAttribute("y1", "18"), w.setAttribute("y2", "5"), h.appendChild(w);
		var g = document.createElementNS("http://www.w3.org/2000/svg", "line");
		g.setAttribute("stroke-width", "3"), g.setAttribute("stroke", "#fff"), g.setAttribute("fill", "none"), g.setAttribute("x1", "6"), g.setAttribute("x2", "18"), g.setAttribute("y1", "5"), g.setAttribute("y2", "18"), h.appendChild(g), l.appendChild(d), l.appendChild(h), m.appendChild(l), (i = y.parentNode) === null || i === void 0 || i.appendChild(m)
	}

	function kt(e, n) {
		var i = document.getElementById("".concat(e, "_response"));
		i !== null && O(i, HTMLInputElement) && (i.value = n);
		var f = document.getElementById("".concat(e, "_legacy_response"));
		if (f !== null && O(f, HTMLInputElement) && (f.value = n), Ie) {
			var u = document.getElementById("".concat(e, "_g_response"));
			u !== null && O(u, HTMLInputElement) && (u.value = n)
		}
	}

	function Xe(e, n) {
		var i, f = (i = n.params.size) !== null && i !== void 0 ? i : "normal",
			u = n.mode;
		switch (u) {
			case L.NON_INTERACTIVE:
			case L.MANAGED:
				switch (f) {
					case W.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case W.INVISIBLE:
						p('Invalid value for parameter "size", expected "'.concat(W.COMPACT, '" or "').concat(W.NORMAL, '", got "').concat(f, '"'), 2817);
					case W.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case L.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				p('Invalid value for parameter "mode", expected "'.concat(L.NON_INTERACTIVE, '", "').concat(L.MANAGED, '" or "').concat(L.INVISIBLE, '", got "').concat(u, '"'), 2818);
				return
		}
	}

	function At(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Bt(e, n) {
		var i = n.get("turnstile_iframe_alt");
		i && (e.title = i)
	}

	function Nt(e) {
		var n = "https://challenges.cloudflare.com";
		if (!1) var i;
		return n
	}

	function It(e, n, i, f) {
		var u = Nt(i),
			y = "h/".concat("g", "/");
		return "".concat(u, "/cdn-cgi/challenge-platform/").concat(y, "turnstile/if/ov2/av0/rcv").concat(f, "/").concat(e, "/").concat(n, "/").concat(i.theme, "/").concat(i.size)
	}

	function Gt(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Yt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function St() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var $e = function() {
		var e = function(c, t, a) {
				if (c.params.retry === oe.AUTO || a) {
					c.isExecuted && (c.msgQueue.push(Q.EXECUTE), c.isExecuted = !0, c.isExecuting = !0);
					var r, s = a ? 0 : 1e3 * 2 + ((r = c.params["retry-interval"]) !== null && r !== void 0 ? r : 0);
					c.retryTimeout = window.setTimeout(function() {
						m(t)
					}, s)
				}
			},
			n = function(c, t, a) {
				if (c.response === void 0) {
					p("[Internal Error] Widget was completed but no response was given", 1362);
					return
				}
				c.isExecuting = !1, kt(t, c.response);
				var r = c.cbSuccess;
				r && r(c.response, a)
			},
			i = function(c) {
				if (!c) return [];
				for (var t = c.attributes, a = t.length, r = new Array(a), s = 0; s < a; s++) r[s] = t[s].name;
				return r
			},
			f = function() {
				var c;
				do {
					c = "";
					for (var t = "abcdefghijklmnopqrstuvwxyz0123456789", a = t.length, r = 0; r < 5; r++) c += t.charAt(Math.floor(Math.random() * a))
				} while (g.has(c));
				return c
			},
			u = function(c, t, a) {
				for (; c.msgQueue.length;) {
					var r, s = c.msgQueue.pop();
					(r = a.contentWindow) === null || r === void 0 || r.postMessage({
						source: F,
						widgetId: t,
						event: s
					}, "*")
				}
			},
			y = function(c, t) {
				if (t) {
					var a = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						r = [],
						s = !0,
						o = !1,
						b = void 0;
					try {
						for (var A = a[Symbol.iterator](), I; !(s = (I = A.next()).done); s = !0) {
							var E = I.value;
							t[E] && t[E] !== c.params[E] && r.push(E)
						}
					} catch (T) {
						o = !0, b = T
					} finally {
						try {
							!s && A.return != null && A.return()
						} finally {
							if (o) throw b
						}
					}
					if (r.length !== 0) {
						p("The parameters ".concat(a.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(r.join(",")), 3618);
						return
					}
					if (t.action) {
						if (!ze(t.action)) {
							p('Invalid input for optional parameter "action", got "'.concat(t.action, '"'), 3604);
							return
						}
						c.action = t.action
					}
					if (t.cData) {
						if (!Ve(t.cData)) {
							p('Invalid input for optional parameter "cData", got "'.concat(t.cData, '"'), 3605);
							return
						}
						c.cData = t.cData
					}
					t["after-interactive-callback"] && (c.cbAfterInteractive = t["after-interactive-callback"]), t["before-interactive-callback"] && (c.cbBeforeInteractive = t["before-interactive-callback"]), t.callback && (c.cbSuccess = t.callback), t["expired-callback"] && (c.cbExpired = t["expired-callback"]), t["timeout-callback"] && (c.cbTimeout = t["timeout-callback"]), t["error-callback"] && (c.cbError = t["error-callback"]), t["unsupported-callback"] && (c.cbUnsupported = t["unsupported-callback"]), t.chlPageData && (c.chlPageData = t.chlPageData)
				}
			},
			m = function(c) {
				var t = C(c);
				if (!t) {
					p("Nothing to reset found for provided container", 3329);
					return
				}
				var a = g.get(t);
				if (a) {
					a.isResetting = !0, a.response = void 0, a.mode = void 0, a.msgQueue = [], a.isExpired = !1, a.isExecuting = !1, a.isStale = !1, a.isInitialized = !1, a.watchcat.lastAckedSeq = 0, a.watchcat.seq = 0, a.params.execution === ne.RENDER && (a.msgQueue.push(Q.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var r = H(t),
						s = document.querySelector("#".concat(r));
					if (!r || !s) {
						p("Widget ".concat(t, " to reset was not found."), 3330);
						return
					}
					if (a.params.appearance === V.INTERACTION_ONLY && At(s), a.params.sitekey === null) {
						p("Unexpected Error: Sitekey is null", 3347);
						return
					}
					var o;
					s.src = It(t, a.params.sitekey, a.params, (o = a.rcV) !== null && o !== void 0 ? o : $), Ye(r), a.retryTimeout && window.clearTimeout(a.retryTimeout)
				} else {
					p("Widget ".concat(t, " to reset was not found."), 3331);
					return
				}
			},
			l = function(c) {
				var t, a = C(c);
				if (!a || !g.has(a)) {
					x("Nothing to remove found for the provided container");
					return
				}
				var r = H(a),
					s = ["iframe#".concat(r), "input#".concat(r, "_response"), "input#".concat(r, "_legacy_response"), "input#".concat(r, "_g_response")];
				document.querySelectorAll(s.join(", ")).forEach(function(b) {
					return b.remove()
				});
				var o = (t = g.get(a)) === null || t === void 0 ? void 0 : t.retryTimeout;
				o && window.clearTimeout(o), g.delete(a), wt(g)
			},
			d = function(c, t) {
				var a;
				if (typeof c == "string") try {
						var r = document.querySelector(c);
						if (!r) {
							p('Unable to find a container for "'.concat(c, '"'), 3585);
							return
						}
						a = r
					} catch (Kt) {
						p('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'), 3586);
						return
					} else if (O(c, HTMLElement)) a = c;
					else {
						p('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var s = Xt(a);
				if (s) {
					var o = Object.assign(s, t),
						b = o.action,
						A = o.cData,
						I = o.chlPageData,
						E = o.sitekey,
						T;
					o.theme = (T = o.theme) !== null && T !== void 0 ? T : ge.AUTO;
					var D;
					o.retry = (D = o.retry) !== null && D !== void 0 ? D : oe.AUTO;
					var S;
					o.execution = (S = o.execution) !== null && S !== void 0 ? S : ne.RENDER;
					var j;
					o.appearance = (j = o.appearance) !== null && j !== void 0 ? j : V.ALWAYS;
					var ee;
					o["retry-interval"] = +((ee = o["retry-interval"]) !== null && ee !== void 0 ? ee : mt);
					var B;
					o["expiry-interval"] = +((B = o["expiry-interval"]) !== null && B !== void 0 ? B : (ct - ut) * 1e3);
					var G;
					o.size = (G = o.size) !== null && G !== void 0 ? G : W.NORMAL;
					var ue = o.callback,
						Se = o["expired-callback"],
						le = o["timeout-callback"],
						se = o["after-interactive-callback"],
						fe = o["before-interactive-callback"],
						de = o["error-callback"],
						Re = o["unsupported-callback"];
					if (typeof E != "string") {
						p('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof E == "undefined" ? "undefined" : k(E), '"'), 3588);
						return
					}
					if (!ot(E)) {
						p('Invalid input for parameter "sitekey", got "'.concat(E, '"'), 3589);
						return
					}
					if (!qe(o.size)) {
						p('Invalid type for parameter "size", expected normal|compact, got "'.concat(o.size, '" ').concat(k(o.size)), 3590);
						return
					}
					if (!Me(o.theme)) {
						p('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(o.theme, '" ').concat(k(o.theme)), 3591);
						return
					}
					if (!Ue(o.retry)) {
						p('Invalid type for parameter "retry", expected never|auto, got "'.concat(o.retry, '" ').concat(k(o.retry)), 3592);
						return
					}
					if (o.language || (o.language = "auto"), !je(o.language)) {
						p('Invalid language value: "'.concat(o.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!Be(o.appearance)) {
						p('Unknown appearance value: "'.concat(o.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!Ge(o.execution)) {
						p('Unknown execution value: "'.concat(o.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!We(o["retry-interval"])) {
						p('Invalid retry-interval value: "'.concat(o["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					if (!Fe(o["expiry-interval"])) {
						p('Invalid expiry-interval value: "'.concat(o["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						return
					}
					var te, M = (te = o["refresh-expired"]) !== null && te !== void 0 ? te : z.AUTO;
					if (He(M)) o["refresh-expired"] = M;
					else {
						p('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(M, '" ').concat(typeof M == "undefined" ? "undefined" : k(M)), 3603);
						return
					}
					var Y = a.getElementsByTagName("iframe")[0];
					Y != null && Y.id.startsWith(ae) && l(a);
					var R = document.createElement("iframe");
					if (!ze(b)) {
						p('Invalid input for optional parameter "action", got "'.concat(b, '"'), 3604);
						return
					}
					if (!Ve(A)) {
						p('Invalid input for optional parameter "cData", got "'.concat(A, '"'), 3605);
						return
					}
					var X = f(),
						re = H(X);
					if (!(!X || !re)) {
						var Je = [],
							Oe = o.execution === ne.RENDER;
						Oe && Je.push(Q.EXECUTE), N++;
						var Lt = +new Date,
							Pt = {};
						g.set(X, Le({
							idx: N,
							action: b,
							cData: A,
							chlPageData: I,
							cbSuccess: ue,
							cbError: de,
							cbExpired: Se,
							cbTimeout: le,
							cbUnsupported: Re,
							cbAfterInteractive: se,
							cbBeforeInteractive: fe,
							params: o,
							isStale: !1,
							isExpired: !1,
							isExecuting: Oe,
							isResetting: !1,
							isExecuted: Oe,
							isInitialized: !1,
							msgQueue: Je,
							rcV: $,
							widgetStartTime: Lt,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0,
								missingWidgetWarning: !1
							}
						}, Pt)), Et(g), R.style.display = "none", R.style.border = "none", R.style.overflow = "hidden", R.setAttribute("src", It(X, E, o, $)), R.setAttribute("allow", "cross-origin-isolated; fullscreen"), R.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), R.id = re;
						var Ce;
						R.tabIndex = (Ce = o.tabindex) !== null && Ce !== void 0 ? Ce : 0, R.title = "Widget containing a Cloudflare security challenge", a.appendChild(R);
						var ke, Dt = (ke = o["response-field"]) !== null && ke !== void 0 ? ke : !0;
						if (Dt) {
							var pe = document.createElement("input");
							pe.type = "hidden";
							var Ne;
							if (pe.name = (Ne = o["response-field-name"]) !== null && Ne !== void 0 ? Ne : pt, pe.id = "".concat(re, "_response"), a.appendChild(pe), typeof o["response-field-name"] != "string" && Yt(E)) {
								var ve = document.createElement("input");
								ve.type = "hidden", ve.name = dt, ve.id = "".concat(re, "_legacy_response"), a.appendChild(ve)
							}
						}
						if (Ie) {
							var me = document.createElement("input");
							me.type = "hidden", me.name = vt, me.id = "".concat(re, "_g_response"), a.appendChild(me)
						}
						return re
					}
				}
			},
			h = function() {
				var c, t = -1,
					a = !0,
					r = !1,
					s = void 0;
				try {
					for (var o = g[Symbol.iterator](), b; !(a = (b = o.next()).done); a = !0) {
						var A = _e(b.value, 2),
							I = A[0],
							E = A[1];
						t < E.idx && (c = I, t = E.idx)
					}
				} catch (T) {
					r = !0, s = T
				} finally {
					try {
						!a && o.return != null && o.return()
					} finally {
						if (r) throw s
					}
				}
				if (t === -1) {
					p("Could not find widget", 43778);
					return
				}
				return c
			};

		function v(_, c, t, a) {
			return w.apply(this, arguments)
		}

		function w() {
			return w = Ze(function(_, c, t, a) {
				var r, s, o, b, A, I, E, T, D;
				return he(this, function(S) {
					switch (S.label) {
						case 0:
							if (r = _.params.sitekey, s = St(), !s) return x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(_, c, !1), [2];
							o = "h/".concat("g", "/"), b = new URL(s), A = "https", I = "".concat(A, "://").concat(b.host, "/cdn-cgi/challenge-platform/").concat(o, "rc/").concat(a), S.label = 1;
						case 1:
							return S.trys.push([1, 6, , 7]), [4, fetch(I, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: r,
									secondaryToken: t
								})
							})];
						case 2:
							return E = S.sent(), E.status === 200 ? [3, 3] : (x("Cannot determine Turnstile's embedded location, aborting clearance redemption."), n(_, c, !1), [3, 5]);
						case 3:
							return [4, E.json()];
						case 4:
							if (T = S.sent(), "status" in T && T.status === "redeemed") return n(_, c, !0), [2];
							S.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return D = S.sent(), x("Error contacting Turnstile, aborting clearance remdeption."), n(_, c, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), w.apply(this, arguments)
		}
		var g = new Map,
			N = 0,
			Z = function(c) {
				var t = c.data;
				if (t.source === F) {
					if (!Gt(c)) {
						x("Ignored message from wrong origin: " + c.origin);
						return
					}
					if (!(!t.widgetId || !g.has(t.widgetId))) {
						var a = H(t.widgetId),
							r = g.get(t.widgetId);
						if (!(!a || !r)) switch (t.event) {
							case "init": {
								var s = document.getElementById(a);
								if (!s) {
									p("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3074);
									return
								}
								r.mode = t.mode, r.mode === L.INVISIBLE && r.params["refresh-expired"] === z.MANUAL && x("refresh-expired=manual is impossible in invisible mode, consider using '".concat(z.AUTO, "' or '").concat(z.NEVER, "'")), r.params.appearance === V.ALWAYS ? Xe(s, r) : At(s), s.style.display = "";
								break
							}
							case "translationInit": {
								var o = document.getElementById(a);
								if (!o) {
									p("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3074);
									return
								}
								var b = new Map;
								Object.keys(t.translationData).forEach(function(X) {
									b.set(X, t.translationData[X])
								}), Bt(o, b);
								break
							}
							case "reject": {
								var A = document.getElementById(a);
								if (r.isExecuting = !1, !A) {
									p("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3075);
									return
								}
								if (t.reason === "outdated_browser") {
									var I = r.cbUnsupported;
									I && I()
								}
								break
							}
							case "food": {
								r.watchcat && t.seq > r.watchcat.lastAckedSeq && (r.watchcat.lastAckedSeq = t.seq);
								break
							}
							case "complete": {
								r.rcV = $, r.response = t.token, t.sToken ? v(r, a, t.sToken, t.chlId) : n(r, a, !1);
								break
							}
							case "fail": {
								t.rcV && (r.rcV = t.rcV), t.cfChlOut && (r.cfChlOut = t.cfChlOut), t.cfChlOutS && (r.cfChlOutS = t.cfChlOutS), r.isExecuting = !1, r.isInitialized = !0, Ye(a);
								var E = r.cbError;
								if (E) {
									var T;
									E((T = t.code) !== null && T !== void 0 ? T : String(at)) || (t.code && x(t.code), e(r, a, t.code === "crashed"))
								} else t.code ? (e(r, a, t.code === "crashed"), p(t.code, 3076)) : e(r, a, !1);
								break
							}
							case "feedbackInit": {
								jt(a, r);
								break
							}
							case "requestFeedbackData": {
								var D, S = document.querySelector("#".concat(a));
								if (!S) {
									p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}(D = S.contentWindow) === null || D === void 0 || D.postMessage({
									source: F,
									widgetId: t.widgetId,
									event: "requestTurnstileResults"
								}, "*");
								break
							}
							case "turnstileResults": {
								var j, ee = document.querySelector("#".concat(a, "-fr"));
								if (!ee) {
									p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}(j = ee.contentWindow) === null || j === void 0 || j.postMessage({
									source: F,
									widgetId: t.widgetId,
									event: "feedbackData",
									rayId: t.rayId,
									rcV: t.rcV,
									cfChlOut: r.cfChlOut,
									cfChlOutS: r.cfChlOutS,
									sitekey: t.sitekey
								}, "*");
								break
							}
							case "closeFeedbackReportIframe": {
								var B, G, ue = document.querySelector("#".concat(a, "-fr"));
								if (!ue) {
									p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}(B = ue.parentElement) === null || B === void 0 || (G = B.parentElement) === null || G === void 0 || G.remove();
								break
							}
							case "tokenExpired": {
								var Se = t.token;
								r.isExpired = !0;
								var le = r.cbExpired;
								le && le(Se), r.params["refresh-expired"] === z.AUTO && !r.isResetting && m(a);
								break
							}
							case "interactiveTimeout": {
								r.rcV = $, Ye(a);
								var se = r.cbTimeout;
								se && se();
								break
							}
							case "refreshRequest": {
								r.rcV = $, m(a);
								break
							}
							case "interactiveBegin": {
								var fe = document.getElementById(a);
								if (!fe) {
									p("Cannot layout widget, Element not found (#".concat(a, ")."), 3076);
									return
								}
								var de = r.cbBeforeInteractive;
								de && de(), r.params.appearance === V.INTERACTION_ONLY && Xe(fe, r);
								break
							}
							case "interactiveEnd": {
								var Re = document.getElementById(a);
								if (!Re) {
									p("Cannot unlayout widget, Element not found (#".concat(a, ")."), 3077);
									return
								}
								var te = r.cbAfterInteractive;
								te && te();
								break
							}
							case "widgetStale": {
								r.isStale = !0;
								break
							}
							case "requestExtraParams": {
								var M, Y = document.querySelector("#".concat(a));
								if (!Y) {
									p("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}
								r.isResetting = !1;
								var R = {};
								(M = Y.contentWindow) === null || M === void 0 || M.postMessage(Le({
									source: F,
									widgetId: t.widgetId,
									event: "extraParams",
									action: r.action,
									cData: r.cData,
									chlPageData: r.chlPageData,
									rcV: r.rcV,
									ch: "c359bc3d",
									url: St(),
									retry: r.params.retry,
									"expiry-interval": r.params["expiry-interval"],
									"retry-interval": r.params["retry-interval"],
									"refresh-expired": r.params["refresh-expired"],
									language: r.params.language,
									execution: r.params.execution,
									appearance: r.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": i(document.body.parentNode)
									},
									turnstileAge: +Date.now() - Ht,
									widgetAge: +Date.now() - r.widgetStartTime
								}, R), "*"), u(r, t.widgetId, Y), r.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", Z);

		function C(_) {
			if (typeof _ == "string") {
				var c = we(_);
				if (c && g.has(c)) return c;
				try {
					var t = document.querySelector(_);
					return t ? C(t) : null
				} catch (r) {
					return null
				}
			}
			if (O(_, HTMLElement)) {
				var a = _.querySelector("iframe");
				return a ? we(a.id) : null
			}
			return _ || g.size === 0 ? null : g.keys().next().value
		}
		return {
			ready: function(c) {
				if (Rt && (x("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), p("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof c != "function" && p('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : k(c), '"'), 3841), c(), typeof c != "function" && p('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), Ct) {
					c();
					return
				}
				Qe.push(c)
			},
			implicitRender: Ot,
			execute: function(c, t) {
				var a = C(c);
				if (!a) {
					if (t === void 0) {
						p("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var r = d(c, t);
					if (!r) {
						p("Failed to render widget", 43522);
						return
					}
					a = r
				}
				var s = g.get(a);
				if (s) {
					y(s, t);
					var o = H(a);
					if (s.isExecuting) {
						x("Call to execute() on a widget that is already executing (".concat(o, "), consider using reset() before execute()"));
						return
					} else s.isExecuting = !0;
					if (s.response) {
						s.isExecuting = !1, x("Call to execute() on a widget that was already executed (".concat(o, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), s.cbSuccess && s.cbSuccess(s.response, !1);
						return
					}
					s.isStale && m(o), s.isExpired && x("Call to execute on a expired-widget (".concat(o, "), consider using reset() before")), s.msgQueue.push(Q.EXECUTE), s.isExecuted = !0;
					var b = document.querySelector("#".concat(o));
					if (!b) {
						s.isExecuting = !1, p("Widget ".concat(o, " to execute was not found"), 43522);
						return
					}
					s.isInitialized && u(s, a, b), s.params.appearance === V.EXECUTE && Xe(b, s)
				}
			},
			render: d,
			reset: m,
			remove: l,
			getResponse: function(c) {
				var t;
				if (typeof c == "undefined") {
					var a = h();
					if (a) {
						var r, s = g.get(a);
						return s != null && s.isExpired && x("Call to getResponse on a widget that expired, consider refreshing the widget."), (r = g.get(a)) === null || r === void 0 ? void 0 : r.response
					} else p("Could not find a widget", 43794)
				}
				var o = C(c);
				if (!o) {
					p("Could not find widget for provided container", 43778);
					return
				}
				return (t = g.get(o)) === null || t === void 0 ? void 0 : t.response
			},
			isExpired: function(c) {
				var t;
				if (typeof c == "undefined") {
					var a = h();
					if (a) {
						var r, s;
						return (s = (r = g.get(a)) === null || r === void 0 ? void 0 : r.isExpired) !== null && s !== void 0 ? s : !1
					} else p("Could not find a widget", 43794)
				}
				var o = C(c);
				if (!o) return p("Could not find widget for provided container", 43778), !1;
				var b;
				return (b = (t = g.get(o)) === null || t === void 0 ? void 0 : t.isExpired) !== null && b !== void 0 ? b : !1
			}
		}
	}();

	function Xt(e) {
		var n = e.getAttribute("data-sitekey"),
			i = {
				sitekey: n
			},
			f = e.getAttribute("data-tabindex");
		f && (i.tabindex = parseInt(f, 10));
		var u = e.getAttribute("data-theme");
		u && (Me(u) ? i.theme = u : x('Unknown data-theme value: "'.concat(u, '"')));
		var y = e.getAttribute("data-size");
		if (y && (qe(y) ? i.size = y : x('Unknown data-size value: "'.concat(y, '"'))), !1) var m;
		var l = e.getAttribute("data-action");
		typeof l == "string" && (i.action = l);
		var d = e.getAttribute("data-cdata");
		typeof d == "string" && (i.cData = d);
		var h = e.getAttribute("data-retry");
		h && (Ue(h) ? i.retry = h : x('Invalid data-retry value: "'.concat(h, ", expected either 'never' or 'auto'\"")));
		var v = e.getAttribute("data-retry-interval");
		if (v) {
			var w = parseInt(v, 10);
			We(w) ? i["retry-interval"] = w : x('Invalid data-retry-interval value: "'.concat(v, ', expected an integer value > 0 and < 900000"'))
		}
		var g = e.getAttribute("data-expiry-interval");
		if (g) {
			var N = parseInt(g, 10);
			Fe(N) ? i["expiry-interval"] = N : x('Invalid data-expiry-interval value: "'.concat(N, ', expected an integer value > 0 and < 360000"'))
		}
		var Z = e.getAttribute("data-refresh-expired");
		Z && (He(Z) ? i["refresh-expired"] = Z : x('Unknown data-refresh-expired value: "'.concat(Z, ", expected either: 'never', 'auto' or 'manual'.")));
		var C = e.getAttribute("data-language");
		C && (je(C) ? i.language = C : x('Invalid data-language value: "'.concat(C, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var _ = e.getAttribute("data-error-callback");
		_ && window[_] && (i["error-callback"] = window[_]);
		var c = e.getAttribute("data-unsupported-callback");
		c && window[c] && _ && window[_] && (i["unsupported-callback"] = window[_]);
		var t = e.getAttribute("data-callback");
		t && window[t] && (i.callback = window[t]);
		var a = e.getAttribute("data-expired-callback");
		a && window[a] && (i["expired-callback"] = window[a]);
		var r = e.getAttribute("data-timeout-callback");
		r && window[r] && (i["timeout-callback"] = window[r]);
		var s = e.getAttribute("data-after-interactive-callback");
		s && window[s] && (i["after-interactive-callback"] = window[s]);
		var o = e.getAttribute("data-before-interactive-callback");
		o && window[o] && (i["before-interactive-callback"] = window[o]);
		var b, A = (b = e.getAttribute("data-response-field")) !== null && b !== void 0 ? b : "true";
		i["response-field"] = A === "true";
		var I = e.getAttribute("data-response-field-name");
		I && (i["response-field-name"] = I);
		var E = e.getAttribute("data-execution");
		E && (Ge(E) ? i.execution = E : x('Unknown data-execution value: "'.concat(E, ", expected either: 'render' or 'execute'.")));
		var T = e.getAttribute("data-appearance");
		return T && (Be(T) ? i.appearance = T : x('Unknown data-appearance value: "'.concat(T, ", expected either: 'always', 'execute', or 'interaction-only'."))), i
	}

	function Qt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			n = document.currentScript;
		if (O(n, HTMLScriptElement) && e.test(n.src)) return n;
		for (var i = document.querySelectorAll("script"), f = 0, u; u = i[f]; f++)
			if (O(u, HTMLScriptElement) && e.test(u.src)) return u
	}

	function $t() {
		var e = Qt();
		if (!e) return p("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (Rt = !0);
		var n = e.src,
			i = n.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var K = $t();
	K && (ie = K.get("compat"), (ie == null ? void 0 : ie.toLowerCase()) === "recaptcha" ? window.grecaptcha ? x("grecaptcha is already defined. The compatibility layer will not be enabled") : (x("Compatibility layer enabled"), Ie = !0, window.grecaptcha = $e) : ie !== null && x('Unknown value for api.js?compat: "'.concat(ie, '", ignoring')), K.forEach(function(e, n) {
		U(["onload", "compat", "render"], n) || x('Unknown parameter passed to api.js: "?'.concat(n, '=...", ignoring'))
	}), P = K.get("onload"), P && setTimeout(function() {
		typeof window[P] == "function" ? window[P]() : (x("Unable to find onload callback '".concat(P, "' immediately after loading, expected 'function', got '").concat(k(window[P]), "'")), setTimeout(function() {
			typeof window[P] == "function" ? window[P]() : x("Unable to find onload callback '".concat(P, "' after 1 second, expected 'function', got '").concat(k(window[P]), "'"))
		}, 1e3))
	}, 0));
	var ie, P, Jt = "turnstile" in window;
	Jt ? x("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = $e, (K == null ? void 0 : K.get("render")) !== "explicit" && Qe.push(Ot), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Tt, 0) : window.addEventListener("DOMContentLoaded", Tt));
})();