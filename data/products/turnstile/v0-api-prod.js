"use strict";
(function() {
	function $e(e, r, i, s, u, v, y) {
		try {
			var f = e[v](y),
				_ = f.value
		} catch (w) {
			i(w);
			return
		}
		f.done ? r(_) : Promise.resolve(_).then(s, u)
	}

	function Je(e) {
		return function() {
			var r = this,
				i = arguments;
			return new Promise(function(s, u) {
				var v = e.apply(r, i);

				function y(_) {
					$e(v, s, u, y, f, "next", _)
				}

				function f(_) {
					$e(v, s, u, y, f, "throw", _)
				}
				y(void 0)
			})
		}
	}

	function R(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : R(e, r)
	}

	function pe(e, r, i) {
		return r in e ? Object.defineProperty(e, r, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = i, e
	}

	function Ce(e) {
		for (var r = 1; r < arguments.length; r++) {
			var i = arguments[r] != null ? arguments[r] : {},
				s = Object.keys(i);
			typeof Object.getOwnPropertySymbols == "function" && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(u) {
				return Object.getOwnPropertyDescriptor(i, u).enumerable
			}))), s.forEach(function(u) {
				pe(e, u, i[u])
			})
		}
		return e
	}

	function Ke(e) {
		if (Array.isArray(e)) return e
	}

	function Ze(e, r) {
		var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (i != null) {
			var s = [],
				u = !0,
				v = !1,
				y, f;
			try {
				for (i = i.call(e); !(u = (y = i.next()).done) && (s.push(y.value), !(r && s.length === r)); u = !0);
			} catch (_) {
				v = !0, f = _
			} finally {
				try {
					!u && i.return != null && i.return()
				} finally {
					if (v) throw f
				}
			}
			return s
		}
	}

	function et() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function ke(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var i = 0, s = new Array(r); i < r; i++) s[i] = e[i];
		return s
	}

	function tt(e, r) {
		if (e) {
			if (typeof e == "string") return ke(e, r);
			var i = Object.prototype.toString.call(e).slice(8, -1);
			if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(i);
			if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return ke(e, r)
		}
	}

	function ve(e, r) {
		return Ke(e) || Ze(e, r) || tt(e, r) || et()
	}

	function C(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function _e(e, r) {
		var i = function(p) {
				return function(S) {
					return s([p, S])
				}
			},
			s = function(p) {
				if (v) throw new TypeError("Generator is already executing.");
				for (; _ && (_ = 0, p[0] && (u = 0)), u;) try {
					if (v = 1, y && (f = p[0] & 2 ? y.return : p[0] ? y.throw || ((f = y.return) && f.call(y), 0) : y.next) && !(f = f.call(y, p[1])).done) return f;
					switch (y = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
						case 0:
						case 1:
							f = p;
							break;
						case 4:
							return u.label++, {
								value: p[1],
								done: !1
							};
						case 5:
							u.label++, y = p[1], p = [0];
							continue;
						case 7:
							p = u.ops.pop(), u.trys.pop();
							continue;
						default:
							if (f = u.trys, !(f = f.length > 0 && f[f.length - 1]) && (p[0] === 6 || p[0] === 2)) {
								u = 0;
								continue
							}
							if (p[0] === 3 && (!f || p[1] > f[0] && p[1] < f[3])) {
								u.label = p[1];
								break
							}
							if (p[0] === 6 && u.label < f[1]) {
								u.label = f[1], f = p;
								break
							}
							if (f && u.label < f[2]) {
								u.label = f[2], u.ops.push(p);
								break
							}
							f[2] && u.ops.pop(), u.trys.pop();
							continue
					}
					p = r.call(e, u)
				} catch (S) {
					p = [6, S], y = 0
				} finally {
					v = f = 0
				}
				if (p[0] & 5) throw p[1];
				return {
					value: p[0] ? p[1] : void 0,
					done: !0
				}
			},
			u = {
				label: 0,
				sent: function() {
					if (f[0] & 1) throw f[1];
					return f[1]
				},
				trys: [],
				ops: []
			},
			v, y, f, _;
		return _ = {
			next: i(0),
			throw: i(1),
			return: i(2)
		}, typeof Symbol == "function" && (_[Symbol.iterator] = function() {
			return this
		}), _
	}
	var rt = 300020;
	var nt = 300030;

	function P(e, r) {
		return e.indexOf(r) !== -1
	}
	var N;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(N || (N = {}));
	var D;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(D || (D = {}));
	var me;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(me || (me = {}));
	var ie;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(ie || (ie = {}));
	var M;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(M || (M = {}));
	var U;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(U || (U = {}));
	var K;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(K || (K = {}));
	var V;
	(function(e) {
		e.EXECUTE = "execute"
	})(V || (V = {}));
	var Ne;
	(function(e) {
		e.ALWAYS_FAILS = "always-fails", e.SOMETIMES_FAILS = "sometimes-fails", e.TOO_SLOW = "too-slow", e.OTHER = "other"
	})(Ne || (Ne = {}));

	function Le(e) {
		return P(["auto", "dark", "light"], e)
	}

	function Pe(e) {
		return P(["auto", "never"], e)
	}

	function De(e) {
		return e > 0 && e < 9e5
	}

	function Me(e) {
		return e > 0 && e < 36e4
	}
	var Dt = /^[0-9A-Za-z_-]{3,100}$/;

	function at(e) {
		return Dt.test(e)
	}
	var Mt = /^[a-z0-9_-]{0,32}$/i;

	function Ue(e) {
		return e === void 0 ? !0 : typeof e == "string" && Mt.test(e)
	}
	var Ut = /^[a-z0-9_\-=]{0,255}$/i;

	function Fe(e) {
		return e === void 0 ? !0 : typeof e == "string" && Ut.test(e)
	}

	function We(e) {
		return P(["normal", "compact", "invisible"], e)
	}

	function ze(e) {
		return P(["auto", "manual", "never"], e)
	}
	var Ft = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Ve(e) {
		return e === "auto" || Ft.test(e)
	}

	function He(e) {
		return P(["always", "execute", "interaction-only"], e)
	}

	function je(e) {
		return P(["render", "execute"], e)
	}
	var H = "0/0";
	var it = 300,
		ot = 10;
	var Z = "cf-chl-widget-",
		j = "cloudflare-challenge",
		ct = ".cf-turnstile",
		ut = ".cf-challenge",
		lt = ".g-recaptcha",
		st = "cf_challenge_response",
		ft = "cf-turnstile-response",
		dt = "g-recaptcha-response",
		pt = 8e3;

	function ye(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function vt(e, r) {
		if (!R(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function F(e, r) {
		return F = Object.setPrototypeOf || function(s, u) {
			return s.__proto__ = u, s
		}, F(e, r)
	}

	function _t(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && F(e, r)
	}

	function he() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function oe(e, r, i) {
		return he() ? oe = Reflect.construct : oe = function(u, v, y) {
			var f = [null];
			f.push.apply(f, v);
			var _ = Function.bind.apply(u, f),
				w = new _;
			return y && F(w, y.prototype), w
		}, oe.apply(null, arguments)
	}

	function B(e) {
		return B = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
			return i.__proto__ || Object.getPrototypeOf(i)
		}, B(e)
	}

	function mt(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function ge(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return ge = function(s) {
			var u = function() {
				return oe(s, arguments, B(this).constructor)
			};
			if (s === null || !mt(s)) return s;
			if (typeof s != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(s)) return r.get(s);
				r.set(s, u)
			}
			return u.prototype = Object.create(s.prototype, {
				constructor: {
					value: u,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), F(u, s)
		}, ge(e)
	}

	function yt(e, r) {
		return r && (C(r) === "object" || typeof r == "function") ? r : ye(e)
	}

	function ht(e) {
		var r = he();
		return function() {
			var s = B(e),
				u;
			if (r) {
				var v = B(this).constructor;
				u = Reflect.construct(s, arguments, v)
			} else u = s.apply(this, arguments);
			return yt(this, u)
		}
	}
	var gt = function(e) {
		"use strict";
		_t(i, e);
		var r = ht(i);

		function i(s, u) {
			vt(this, i);
			var v;
			return v = r.call(this, s), pe(ye(v), "code", void 0), v.name = "TurnstileError", v.code = u, v
		}
		return i
	}(ge(Error));

	function d(e, r) {
		var i = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new gt(i, r)
	}

	function h(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Be(e) {
		return e.startsWith(Z) ? e.substring(Z.length) : null
	}

	function W(e) {
		return "".concat(Z).concat(e)
	}
	var be = null,
		xe = 0,
		Wt = 1500,
		zt = 5;

	function Vt(e) {
		xe++;
		var r = !0,
			i = !1,
			s = void 0;
		try {
			for (var u = e[Symbol.iterator](), v; !(r = (v = u.next()).done); r = !0) {
				var y = ve(v.value, 2),
					f = y[0],
					_ = y[1],
					w;
				_.watchcat.seq = xe, _.watchcat.lastAckedSeq === 0 && (_.watchcat.lastAckedSeq = xe);
				var p = W(f);
				if (!p) {
					h("Cannot find Widget ".concat(p, ", consider using turnstile.remove() to clean up a widget."));
					continue
				}
				var S = document.querySelector("#".concat(p));
				if (!S) {
					h("Cannot find Widget ".concat(p, ", consider using turnstile.remove() to clean up a widget."));
					continue
				}
				if ((_.isExecuting || !_.isInitialized || _.isInitialized && !_.isStale && !_.isExecuted) && _.watchcat.lastAckedSeq !== 0 && _.watchcat.lastAckedSeq < _.watchcat.seq - 1 - zt) {
					_.watchcat.lastAckedSeq = 0, _.watchcat.seq = 0, console.log("Turnstile Widget seem to have crashed: ", f), window.postMessage({
						source: j,
						widgetId: f,
						code: nt,
						event: "fail"
					}, "*");
					continue
				}(w = S.contentWindow) === null || w === void 0 || w.postMessage({
					source: j,
					widgetId: f,
					seq: xe,
					event: "meow"
				}, "*")
			}
		} catch (b) {
			i = !0, s = b
		} finally {
			try {
				!r && u.return != null && u.return()
			} finally {
				if (i) throw s
			}
		}
	}

	function xt(e) {
		be === null && (be = setInterval(function() {
			Vt(e)
		}, Wt))
	}

	function bt(e) {
		be !== null && e.size === 0 && clearInterval(be)
	}
	var Ht = +new Date,
		Ee = !1,
		It = !1;

	function qe(e) {
		Ot(e, "")
	}

	function St() {
		var e = [ct, ut];
		Ee && e.push(lt), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return Xe.render(r)
		})
	}
	var Ye = [],
		Rt = !1;

	function Et() {
		Rt = !0;
		var e = !0,
			r = !1,
			i = void 0;
		try {
			for (var s = Ye[Symbol.iterator](), u; !(e = (u = s.next()).done); e = !0) {
				var v = u.value;
				v()
			}
		} catch (y) {
			r = !0, i = y
		} finally {
			try {
				!e && s.return != null && s.return()
			} finally {
				if (r) throw i
			}
		}
	}

	function Ot(e, r) {
		var i = document.getElementById("".concat(e, "_response"));
		i !== null && R(i, HTMLInputElement) && (i.value = r);
		var s = document.getElementById("".concat(e, "_legacy_response"));
		if (s !== null && R(s, HTMLInputElement) && (s.value = r), Ee) {
			var u = document.getElementById("".concat(e, "_g_response"));
			u !== null && R(u, HTMLInputElement) && (u.value = r)
		}
	}

	function Ge(e, r) {
		var i, s = (i = r.params.size) !== null && i !== void 0 ? i : "normal",
			u = r.mode;
		switch (u) {
			case N.NON_INTERACTIVE:
			case N.MANAGED:
				switch (s) {
					case D.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case D.INVISIBLE:
						d('Invalid value for parameter "size", expected "'.concat(D.COMPACT, '" or "').concat(D.NORMAL, '", got "').concat(s, '"'), 2817);
					case D.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case N.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				d('Invalid value for parameter "mode", expected "'.concat(N.NON_INTERACTIVE, '", "').concat(N.MANAGED, '" or "').concat(N.INVISIBLE, '", got "').concat(u, '"'), 2818);
				return
		}
	}

	function wt(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function jt(e, r) {
		var i = r.get("turnstile_iframe_alt");
		i && (e.title = i)
	}

	function Bt(e) {
		var r = "https://challenges.cloudflare.com";
		if (!1) var i;
		return r
	}

	function Tt(e, r, i, s) {
		var u = Bt(i),
			v = "h/".concat("b", "/");
		return "".concat(u, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/if/ov2/av0/rcv").concat(s, "/").concat(e, "/").concat(r, "/").concat(i.theme, "/").concat(i.size)
	}

	function qt(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Gt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function At() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Xe = function() {
		var e = function(c, t, a) {
				if (c.params.retry === ie.AUTO || a) {
					c.isExecuted && (c.msgQueue.push(V.EXECUTE), c.isExecuted = !0, c.isExecuting = !0);
					var n, l = a ? 0 : 1e3 * 2 + ((n = c.params["retry-interval"]) !== null && n !== void 0 ? n : 0);
					c.retryTimeout = window.setTimeout(function() {
						y(t)
					}, l)
				}
			},
			r = function(c, t, a) {
				if (c.response === void 0) {
					d("[Internal Error] Widget was completed but no response was given", 1362);
					return
				}
				c.isExecuting = !1, Ot(t, c.response);
				var n = c.cbSuccess;
				n && n(c.response, a)
			},
			i = function(c) {
				if (!c) return [];
				for (var t = c.attributes, a = t.length, n = new Array(a), l = 0; l < a; l++) n[l] = t[l].name;
				return n
			},
			s = function() {
				var c;
				do {
					c = "";
					for (var t = "abcdefghijklmnopqrstuvwxyz0123456789", a = t.length, n = 0; n < 5; n++) c += t.charAt(Math.floor(Math.random() * a))
				} while (b.has(c));
				return c
			},
			u = function(c, t, a) {
				for (; c.msgQueue.length;) {
					var n, l = c.msgQueue.pop();
					(n = a.contentWindow) === null || n === void 0 || n.postMessage({
						source: j,
						widgetId: t,
						event: l
					}, "*")
				}
			},
			v = function(c, t) {
				if (t) {
					var a = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						n = [],
						l = !0,
						o = !1,
						g = void 0;
					try {
						for (var T = a[Symbol.iterator](), A; !(l = (A = T.next()).done); l = !0) {
							var x = A.value;
							t[x] && t[x] !== c.params[x] && n.push(x)
						}
					} catch (E) {
						o = !0, g = E
					} finally {
						try {
							!l && T.return != null && T.return()
						} finally {
							if (o) throw g
						}
					}
					if (n.length !== 0) {
						d("The parameters ".concat(a.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(n.join(",")), 3618);
						return
					}
					if (t.action) {
						if (!Ue(t.action)) {
							d('Invalid input for optional parameter "action", got "'.concat(t.action, '"'), 3604);
							return
						}
						c.action = t.action
					}
					if (t.cData) {
						if (!Fe(t.cData)) {
							d('Invalid input for optional parameter "cData", got "'.concat(t.cData, '"'), 3605);
							return
						}
						c.cData = t.cData
					}
					t["after-interactive-callback"] && (c.cbAfterInteractive = t["after-interactive-callback"]), t["before-interactive-callback"] && (c.cbBeforeInteractive = t["before-interactive-callback"]), t.callback && (c.cbSuccess = t.callback), t["expired-callback"] && (c.cbExpired = t["expired-callback"]), t["timeout-callback"] && (c.cbTimeout = t["timeout-callback"]), t["error-callback"] && (c.cbError = t["error-callback"]), t["unsupported-callback"] && (c.cbUnsupported = t["unsupported-callback"]), t.chlPageData && (c.chlPageData = t.chlPageData)
				}
			},
			y = function(c) {
				var t = O(c);
				if (!t) {
					d("Nothing to reset found for provided container", 3329);
					return
				}
				var a = b.get(t);
				if (a) {
					a.isResetting = !0, a.response = void 0, a.mode = void 0, a.msgQueue = [], a.isExpired = !1, a.isExecuting = !1, a.isStale = !1, a.isInitialized = !1, a.watchcat.lastAckedSeq = 0, a.watchcat.seq = 0, a.params.execution === K.RENDER && (a.msgQueue.push(V.EXECUTE), a.isExecuted = !0, a.isExecuting = !0);
					var n = W(t),
						l = document.querySelector("#".concat(n));
					if (!n || !l) {
						d("Widget ".concat(t, " to reset was not found."), 3330);
						return
					}
					if (a.params.appearance === U.INTERACTION_ONLY && wt(l), a.params.sitekey === null) {
						d("Unexpected Error: Sitekey is null", 3347);
						return
					}
					var o;
					l.src = Tt(t, a.params.sitekey, a.params, (o = a.rcV) !== null && o !== void 0 ? o : H), qe(n), a.retryTimeout && window.clearTimeout(a.retryTimeout)
				} else {
					d("Widget ".concat(t, " to reset was not found."), 3331);
					return
				}
			},
			f = function(c) {
				var t, a = O(c);
				if (!a || !b.has(a)) {
					h("Nothing to remove found for the provided container");
					return
				}
				var n = W(a),
					l = ["iframe#".concat(n), "input#".concat(n, "_response"), "input#".concat(n, "_legacy_response"), "input#".concat(n, "_g_response")];
				document.querySelectorAll(l.join(", ")).forEach(function(g) {
					return g.remove()
				});
				var o = (t = b.get(a)) === null || t === void 0 ? void 0 : t.retryTimeout;
				o && window.clearTimeout(o), b.delete(a), bt(b)
			},
			_ = function(c, t) {
				var a;
				if (typeof c == "string") try {
						var n = document.querySelector(c);
						if (!n) {
							d('Unable to find a container for "'.concat(c, '"'), 3585);
							return
						}
						a = n
					} catch (Jt) {
						d('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'), 3586);
						return
					} else if (R(c, HTMLElement)) a = c;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var l = Yt(a);
				if (l) {
					var o = Object.assign(l, t),
						g = o.action,
						T = o.cData,
						A = o.chlPageData,
						x = o.sitekey,
						E;
					o.theme = (E = o.theme) !== null && E !== void 0 ? E : me.AUTO;
					var z;
					o.retry = (z = o.retry) !== null && z !== void 0 ? z : ie.AUTO;
					var I;
					o.execution = (I = o.execution) !== null && I !== void 0 ? I : K.RENDER;
					var X;
					o.appearance = (X = o.appearance) !== null && X !== void 0 ? X : U.ALWAYS;
					var Q;
					o["retry-interval"] = (Q = o["retry-interval"]) !== null && Q !== void 0 ? Q : pt;
					var $;
					o["expiry-interval"] = ($ = o["expiry-interval"]) !== null && $ !== void 0 ? $ : (it - ot) * 1e3;
					var te;
					o.size = (te = o.size) !== null && te !== void 0 ? te : D.NORMAL;
					var ce = o.callback,
						re = o["expired-callback"],
						ne = o["timeout-callback"],
						we = o["after-interactive-callback"],
						ue = o["before-interactive-callback"],
						Ct = o["error-callback"],
						kt = o["unsupported-callback"];
					if (typeof x != "string") {
						d('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof x == "undefined" ? "undefined" : C(x), '"'), 3588);
						return
					}
					if (!at(x)) {
						d('Invalid input for parameter "sitekey", got "'.concat(x, '"'), 3589);
						return
					}
					if (!We(o.size)) {
						d('Invalid type for parameter "size", expected normal|compact, got "'.concat(o.size, '" ').concat(C(o.size)), 3590);
						return
					}
					if (!Le(o.theme)) {
						d('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(o.theme, '" ').concat(C(o.theme)), 3591);
						return
					}
					if (!Pe(o.retry)) {
						d('Invalid type for parameter "retry", expected never|auto, got "'.concat(o.retry, '" ').concat(C(o.retry)), 3592);
						return
					}
					if (o.language || (o.language = "auto"), !Ve(o.language)) {
						d('Invalid language value: "'.concat(o.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!He(o.appearance)) {
						d('Unknown appearance value: "'.concat(o.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!je(o.execution)) {
						d('Unknown execution value: "'.concat(o.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!De(o["retry-interval"])) {
						d('Invalid retry-interval value: "'.concat(o["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					if (!Me(o["expiry-interval"])) {
						d('Invalid expiry-interval value: "'.concat(o["expiry-interval"], ', expected an integer value > 0 and < 360000"'), 3602);
						return
					}
					var Te, ae = (Te = o["refresh-expired"]) !== null && Te !== void 0 ? Te : M.AUTO;
					if (ze(ae)) o["refresh-expired"] = ae;
					else {
						d('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(ae, '" ').concat(typeof ae == "undefined" ? "undefined" : C(ae)), 3603);
						return
					}
					var Ae = a.getElementsByTagName("iframe")[0];
					Ae != null && Ae.id.startsWith(Z) && f(a);
					var k = document.createElement("iframe");
					if (!Ue(g)) {
						d('Invalid input for optional parameter "action", got "'.concat(g, '"'), 3604);
						return
					}
					if (!Fe(T)) {
						d('Invalid input for optional parameter "cData", got "'.concat(T, '"'), 3605);
						return
					}
					var le = s(),
						J = W(le);
					if (!(!le || !J)) {
						var Qe = [],
							Ie = o.execution === K.RENDER;
						Ie && Qe.push(V.EXECUTE), G++;
						var Nt = +new Date,
							Lt = {};
						b.set(le, Ce({
							idx: G,
							action: g,
							cData: T,
							chlPageData: A,
							cbSuccess: ce,
							cbError: Ct,
							cbExpired: re,
							cbTimeout: ne,
							cbUnsupported: kt,
							cbAfterInteractive: we,
							cbBeforeInteractive: ue,
							params: o,
							isStale: !1,
							isExpired: !1,
							isExecuting: Ie,
							isResetting: !1,
							isExecuted: Ie,
							isInitialized: !1,
							msgQueue: Qe,
							rcV: H,
							widgetStartTime: Nt,
							watchcat: {
								seq: 0,
								lastAckedSeq: 0
							}
						}, Lt)), xt(b), k.style.display = "none", k.style.border = "none", k.style.overflow = "hidden", k.setAttribute("src", Tt(le, x, o, H)), k.setAttribute("allow", "cross-origin-isolated; fullscreen"), k.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), k.id = J;
						var Se;
						k.tabIndex = (Se = o.tabindex) !== null && Se !== void 0 ? Se : 0, k.title = "Widget containing a Cloudflare security challenge", a.appendChild(k);
						var Re, Pt = (Re = o["response-field"]) !== null && Re !== void 0 ? Re : !0;
						if (Pt) {
							var se = document.createElement("input");
							se.type = "hidden";
							var Oe;
							if (se.name = (Oe = o["response-field-name"]) !== null && Oe !== void 0 ? Oe : ft, se.id = "".concat(J, "_response"), a.appendChild(se), typeof o["response-field-name"] != "string" && Gt(x)) {
								var fe = document.createElement("input");
								fe.type = "hidden", fe.name = st, fe.id = "".concat(J, "_legacy_response"), a.appendChild(fe)
							}
						}
						if (Ee) {
							var de = document.createElement("input");
							de.type = "hidden", de.name = dt, de.id = "".concat(J, "_g_response"), a.appendChild(de)
						}
						return J
					}
				}
			},
			w = function() {
				var c, t = -1,
					a = !0,
					n = !1,
					l = void 0;
				try {
					for (var o = b[Symbol.iterator](), g; !(a = (g = o.next()).done); a = !0) {
						var T = ve(g.value, 2),
							A = T[0],
							x = T[1];
						t < x.idx && (c = A, t = x.idx)
					}
				} catch (E) {
					n = !0, l = E
				} finally {
					try {
						!a && o.return != null && o.return()
					} finally {
						if (n) throw l
					}
				}
				if (t === -1) {
					d("Could not find widget", 43778);
					return
				}
				return c
			};

		function p(m, c, t, a) {
			return S.apply(this, arguments)
		}

		function S() {
			return S = Je(function(m, c, t, a) {
				var n, l, o, g, T, A, x, E, z;
				return _e(this, function(I) {
					switch (I.label) {
						case 0:
							if (n = m.params.sitekey, l = At(), !l) return h("Cannot determine Turnstile's embedded location, aborting clearance redemption."), r(m, c, !1), [2];
							o = "h/".concat("b", "/"), g = new URL(l), T = "https", A = "".concat(T, "://").concat(g.host, "/cdn-cgi/challenge-platform/").concat(o, "rc/").concat(a), I.label = 1;
						case 1:
							return I.trys.push([1, 6, , 7]), [4, fetch(A, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								redirect: "manual",
								body: JSON.stringify({
									sitekey: n,
									secondaryToken: t
								})
							})];
						case 2:
							return x = I.sent(), x.status === 200 ? [3, 3] : (h("Cannot determine Turnstile's embedded location, aborting clearance redemption."), r(m, c, !1), [3, 5]);
						case 3:
							return [4, x.json()];
						case 4:
							if (E = I.sent(), "status" in E && E.status === "redeemed") return r(m, c, !0), [2];
							I.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return z = I.sent(), h("Error contacting Turnstile, aborting clearance remdeption."), r(m, c, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), S.apply(this, arguments)
		}
		var b = new Map,
			G = 0,
			Y = function(c) {
				var t = c.data;
				if (t.source === j) {
					if (!qt(c)) {
						h("Ignored message from wrong origin: " + c.origin);
						return
					}
					if (!(!t.widgetId || !b.has(t.widgetId))) {
						var a = W(t.widgetId),
							n = b.get(t.widgetId);
						if (!(!a || !n)) switch (t.event) {
							case "init": {
								var l = document.getElementById(a);
								if (!l) {
									d("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3074);
									return
								}
								n.mode = t.mode, n.mode === N.INVISIBLE && n.params["refresh-expired"] === M.MANUAL && h("refresh-expired=manual is impossible in invisible mode, consider using '".concat(M.AUTO, "' or '").concat(M.NEVER, "'")), n.params.appearance === U.ALWAYS ? Ge(l, n) : wt(l), l.style.display = "";
								break
							}
							case "translationInit": {
								var o = document.getElementById(a);
								if (!o) {
									d("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3074);
									return
								}
								var g = new Map;
								Object.keys(t.translationData).forEach(function(ue) {
									g.set(ue, t.translationData[ue])
								}), jt(o, g);
								break
							}
							case "reject": {
								var T = document.getElementById(a);
								if (n.isExecuting = !1, !T) {
									d("Cannot initialize Widget, Element not found (#".concat(a, ")."), 3075);
									return
								}
								if (t.reason === "outdated_browser") {
									var A = n.cbUnsupported;
									A && A()
								}
								break
							}
							case "food": {
								n.watchcat && t.seq > n.watchcat.lastAckedSeq && (n.watchcat.lastAckedSeq = t.seq);
								break
							}
							case "complete": {
								n.rcV = H, n.response = t.token, t.sToken ? p(n, a, t.sToken, t.chlId) : r(n, a, !1);
								break
							}
							case "fail": {
								t.rcV && (n.rcV = t.rcV), n.isExecuting = !1, n.isInitialized = !0, qe(a);
								var x = n.cbError;
								if (x) {
									var E;
									x((E = t.code) !== null && E !== void 0 ? E : String(rt)) || (t.code && h(t.code), e(n, a, t.code === "crashed"))
								} else t.code ? (e(n, a, t.code === "crashed"), d(t.code, 3076)) : e(n, a, !1);
								break
							}
							case "feedbackInit":
								break;
							case "tokenExpired": {
								var z = t.token;
								n.isExpired = !0;
								var I = n.cbExpired;
								I && I(z), n.params["refresh-expired"] === M.AUTO && !n.isResetting && y(a);
								break
							}
							case "interactiveTimeout": {
								n.rcV = H, qe(a);
								var X = n.cbTimeout;
								X && X();
								break
							}
							case "refreshRequest": {
								n.rcV = H, y(a);
								break
							}
							case "interactiveBegin": {
								var Q = document.getElementById(a);
								if (!Q) {
									d("Cannot layout widget, Element not found (#".concat(a, ")."), 3076);
									return
								}
								var $ = n.cbBeforeInteractive;
								$ && $(), n.params.appearance === U.INTERACTION_ONLY && Ge(Q, n);
								break
							}
							case "interactiveEnd": {
								var te = document.getElementById(a);
								if (!te) {
									d("Cannot unlayout widget, Element not found (#".concat(a, ")."), 3077);
									return
								}
								var ce = n.cbAfterInteractive;
								ce && ce();
								break
							}
							case "widgetStale": {
								n.isStale = !0;
								break
							}
							case "requestExtraParams": {
								var re, ne = document.querySelector("#".concat(a));
								if (!ne) {
									d("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}
								n.isResetting = !1;
								var we = {};
								(re = ne.contentWindow) === null || re === void 0 || re.postMessage(Ce({
									source: j,
									widgetId: t.widgetId,
									event: "extraParams",
									action: n.action,
									cData: n.cData,
									chlPageData: n.chlPageData,
									rcV: n.rcV,
									ch: "8827f912",
									url: At(),
									retry: n.params.retry,
									"expiry-interval": n.params["expiry-interval"],
									"retry-interval": n.params["retry-interval"],
									"refresh-expired": n.params["refresh-expired"],
									language: n.params.language,
									execution: n.params.execution,
									appearance: n.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": i(document.body.parentNode)
									},
									turnstileAge: +Date.now() - Ht,
									widgetAge: +Date.now() - n.widgetStartTime
								}, we), "*"), u(n, t.widgetId, ne), n.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", Y);

		function O(m) {
			if (typeof m == "string") {
				var c = Be(m);
				if (c && b.has(c)) return c;
				try {
					var t = document.querySelector(m);
					return t ? O(t) : null
				} catch (n) {
					return null
				}
			}
			if (R(m, HTMLElement)) {
				var a = m.querySelector("iframe");
				return a ? Be(a.id) : null
			}
			return m || b.size === 0 ? null : b.keys().next().value
		}
		return {
			ready: function(c) {
				if (It && (h("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), d("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof c != "function" && d('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : C(c), '"'), 3841), c(), typeof c != "function" && d('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), Rt) {
					c();
					return
				}
				Ye.push(c)
			},
			implicitRender: St,
			execute: function(c, t) {
				var a = O(c);
				if (!a) {
					if (t === void 0) {
						d("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var n = _(c, t);
					if (!n) {
						d("Failed to render widget", 43522);
						return
					}
					a = n
				}
				var l = b.get(a);
				if (l) {
					v(l, t);
					var o = W(a);
					if (l.isExecuting) {
						h("Call to execute() on a widget that is already executing (".concat(o, "), consider using reset() before execute()"));
						return
					} else l.isExecuting = !0;
					if (l.response) {
						l.isExecuting = !1, h("Call to execute() on a widget that was already executed (".concat(o, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), l.cbSuccess && l.cbSuccess(l.response, !1);
						return
					}
					l.isStale && y(o), l.isExpired && h("Call to execute on a expired-widget (".concat(o, "), consider using reset() before")), l.msgQueue.push(V.EXECUTE), l.isExecuted = !0;
					var g = document.querySelector("#".concat(o));
					if (!g) {
						l.isExecuting = !1, d("Widget ".concat(o, " to execute was not found"), 43522);
						return
					}
					l.isInitialized && u(l, a, g), l.params.appearance === U.EXECUTE && Ge(g, l)
				}
			},
			render: _,
			reset: y,
			remove: f,
			getResponse: function(c) {
				var t;
				if (typeof c == "undefined") {
					var a = w();
					if (a) {
						var n, l = b.get(a);
						return l != null && l.isExpired && h("Call to getResponse on a widget that expired, consider refreshing the widget."), (n = b.get(a)) === null || n === void 0 ? void 0 : n.response
					} else d("Could not find a widget", 43794)
				}
				var o = O(c);
				if (!o) {
					d("Could not find widget for provided container", 43778);
					return
				}
				return (t = b.get(o)) === null || t === void 0 ? void 0 : t.response
			},
			isExpired: function(c) {
				var t;
				if (typeof c == "undefined") {
					var a = w();
					if (a) {
						var n, l;
						return (l = (n = b.get(a)) === null || n === void 0 ? void 0 : n.isExpired) !== null && l !== void 0 ? l : !1
					} else d("Could not find a widget", 43794)
				}
				var o = O(c);
				if (!o) return d("Could not find widget for provided container", 43778), !1;
				var g;
				return (g = (t = b.get(o)) === null || t === void 0 ? void 0 : t.isExpired) !== null && g !== void 0 ? g : !1
			}
		}
	}();

	function Yt(e) {
		var r = e.getAttribute("data-sitekey"),
			i = {
				sitekey: r
			},
			s = e.getAttribute("data-tabindex");
		s && (i.tabindex = parseInt(s, 10));
		var u = e.getAttribute("data-theme");
		u && (Le(u) ? i.theme = u : h('Unknown data-theme value: "'.concat(u, '"')));
		var v = e.getAttribute("data-size");
		if (v && (We(v) ? i.size = v : h('Unknown data-size value: "'.concat(v, '"'))), !1) var y;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (i.action = f);
		var _ = e.getAttribute("data-cdata");
		typeof _ == "string" && (i.cData = _);
		var w = e.getAttribute("data-retry");
		w && (Pe(w) ? i.retry = w : h('Invalid data-retry value: "'.concat(w, ", expected either 'never' or 'auto'\"")));
		var p = e.getAttribute("data-retry-interval");
		if (p) {
			var S = parseInt(p, 10);
			De(S) ? i["retry-interval"] = S : h('Invalid data-retry-interval value: "'.concat(p, ', expected an integer value > 0 and < 900000"'))
		}
		var b = e.getAttribute("data-expiry-interval");
		if (b) {
			var G = parseInt(b, 10);
			Me(G) ? i["expiry-interval"] = G : h('Invalid data-expiry-interval value: "'.concat(G, ', expected an integer value > 0 and < 360000"'))
		}
		var Y = e.getAttribute("data-refresh-expired");
		Y && (ze(Y) ? i["refresh-expired"] = Y : h('Unknown data-refresh-expired value: "'.concat(Y, ", expected either: 'never', 'auto' or 'manual'.")));
		var O = e.getAttribute("data-language");
		O && (Ve(O) ? i.language = O : h('Invalid data-language value: "'.concat(O, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var m = e.getAttribute("data-error-callback");
		m && window[m] && (i["error-callback"] = window[m]);
		var c = e.getAttribute("data-unsupported-callback");
		c && window[c] && m && window[m] && (i["unsupported-callback"] = window[m]);
		var t = e.getAttribute("data-callback");
		t && window[t] && (i.callback = window[t]);
		var a = e.getAttribute("data-expired-callback");
		a && window[a] && (i["expired-callback"] = window[a]);
		var n = e.getAttribute("data-timeout-callback");
		n && window[n] && (i["timeout-callback"] = window[n]);
		var l = e.getAttribute("data-after-interactive-callback");
		l && window[l] && (i["after-interactive-callback"] = window[l]);
		var o = e.getAttribute("data-before-interactive-callback");
		o && window[o] && (i["before-interactive-callback"] = window[o]);
		var g, T = (g = e.getAttribute("data-response-field")) !== null && g !== void 0 ? g : "true";
		i["response-field"] = T === "true";
		var A = e.getAttribute("data-response-field-name");
		A && (i["response-field-name"] = A);
		var x = e.getAttribute("data-execution");
		x && (je(x) ? i.execution = x : h('Unknown data-execution value: "'.concat(x, ", expected either: 'render' or 'execute'.")));
		var E = e.getAttribute("data-appearance");
		return E && (He(E) ? i.appearance = E : h('Unknown data-appearance value: "'.concat(E, ", expected either: 'always', 'execute', or 'interaction-only'."))), i
	}

	function Xt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (R(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var i = document.querySelectorAll("script"), s = 0, u; u = i[s]; s++)
			if (R(u, HTMLScriptElement) && e.test(u.src)) return u
	}

	function Qt() {
		var e = Xt();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (It = !0);
		var r = e.src,
			i = r.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var q = Qt();
	q && (ee = q.get("compat"), (ee == null ? void 0 : ee.toLowerCase()) === "recaptcha" ? window.grecaptcha ? h("grecaptcha is already defined. The compatibility layer will not be enabled") : (h("Compatibility layer enabled"), Ee = !0, window.grecaptcha = Xe) : ee !== null && h('Unknown value for api.js?compat: "'.concat(ee, '", ignoring')), q.forEach(function(e, r) {
		P(["onload", "compat", "render"], r) || h('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring'))
	}), L = q.get("onload"), L && setTimeout(function() {
		typeof window[L] == "function" ? window[L]() : (h("Unable to find onload callback '".concat(L, "' immediately after loading, expected 'function', got '").concat(C(window[L]), "'")), setTimeout(function() {
			typeof window[L] == "function" ? window[L]() : h("Unable to find onload callback '".concat(L, "' after 1 second, expected 'function', got '").concat(C(window[L]), "'"))
		}, 1e3))
	}, 0));
	var ee, L, $t = "turnstile" in window;
	$t ? h("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Xe, (q == null ? void 0 : q.get("render")) !== "explicit" && Ye.push(St), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Et, 0) : window.addEventListener("DOMContentLoaded", Et));
})();