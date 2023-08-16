"use strict";
(function() {
	function Ve(e, a, i, s, u, y, v) {
		try {
			var f = e[y](v),
				x = f.value
		} catch (T) {
			i(T);
			return
		}
		f.done ? a(x) : Promise.resolve(x).then(s, u)
	}

	function Be(e) {
		return function() {
			var a = this,
				i = arguments;
			return new Promise(function(s, u) {
				var y = e.apply(a, i);

				function v(x) {
					Ve(y, s, u, v, f, "next", x)
				}

				function f(x) {
					Ve(y, s, u, v, f, "throw", x)
				}
				v(void 0)
			})
		}
	}

	function S(e, a) {
		return a != null && typeof Symbol != "undefined" && a[Symbol.hasInstance] ? !!a[Symbol.hasInstance](e) : S(e, a)
	}

	function Fe(e) {
		if (Array.isArray(e)) return e
	}

	function je(e, a) {
		var i = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (i != null) {
			var s = [],
				u = !0,
				y = !1,
				v, f;
			try {
				for (i = i.call(e); !(u = (v = i.next()).done) && (s.push(v.value), !(a && s.length === a)); u = !0);
			} catch (x) {
				y = !0, f = x
			} finally {
				try {
					!u && i.return != null && i.return()
				} finally {
					if (y) throw f
				}
			}
			return s
		}
	}

	function He() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function Te(e, a) {
		(a == null || a > e.length) && (a = e.length);
		for (var i = 0, s = new Array(a); i < a; i++) s[i] = e[i];
		return s
	}

	function Ge(e, a) {
		if (e) {
			if (typeof e == "string") return Te(e, a);
			var i = Object.prototype.toString.call(e).slice(8, -1);
			if (i === "Object" && e.constructor && (i = e.constructor.name), i === "Map" || i === "Set") return Array.from(i);
			if (i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Te(e, a)
		}
	}

	function qe(e, a) {
		return Fe(e) || je(e, a) || Ge(e, a) || He()
	}

	function O(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function se(e, a) {
		var i = function(p) {
				return function(R) {
					return s([p, R])
				}
			},
			s = function(p) {
				if (y) throw new TypeError("Generator is already executing.");
				for (; x && (x = 0, p[0] && (u = 0)), u;) try {
					if (y = 1, v && (f = p[0] & 2 ? v.return : p[0] ? v.throw || ((f = v.return) && f.call(v), 0) : v.next) && !(f = f.call(v, p[1])).done) return f;
					switch (v = 0, f && (p = [p[0] & 2, f.value]), p[0]) {
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
							u.label++, v = p[1], p = [0];
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
					p = a.call(e, u)
				} catch (R) {
					p = [6, R], v = 0
				} finally {
					y = f = 0
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
			y, v, f, x;
		return x = {
			next: i(0),
			throw: i(1),
			return: i(2)
		}, typeof Symbol == "function" && (x[Symbol.iterator] = function() {
			return this
		}), x
	}

	function D(e, a) {
		return e.indexOf(a) !== -1
	}

	function Ie(e) {
		return D(["auto", "dark", "light"], e)
	}

	function Ae(e) {
		return D(["auto", "never"], e)
	}

	function Se(e) {
		return e > 0 && e < 9e5
	}
	var vt = /^[0-9A-Za-z_-]{3,100}$/;

	function Qe(e) {
		return vt.test(e)
	}
	var yt = /^[a-z0-9_-]{0,32}$/i;

	function Oe(e) {
		return e === void 0 ? !0 : typeof e == "string" && yt.test(e)
	}
	var _t = /^[a-z0-9_\-=]{0,255}$/i;

	function Re(e) {
		return e === void 0 ? !0 : typeof e == "string" && _t.test(e)
	}

	function ke(e) {
		return D(["normal", "compact", "invisible"], e)
	}

	function Ne(e) {
		return D(["auto", "manual", "never"], e)
	}
	var mt = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Ce(e) {
		return e === "auto" || mt.test(e)
	}

	function Le(e) {
		return D(["always", "execute", "interaction-only"], e)
	}

	function De(e) {
		return D(["render", "execute"], e)
	}
	var N;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(N || (N = {}));
	var M;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(M || (M = {}));
	var fe;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(fe || (fe = {}));
	var te;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(te || (te = {}));
	var P;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(P || (P = {}));
	var z;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(z || (z = {}));
	var $;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})($ || ($ = {}));
	var F;
	(function(e) {
		e.EXECUTE = "execute"
	})(F || (F = {}));

	function de(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Xe(e, a) {
		if (!S(e, a)) throw new TypeError("Cannot call a class as a function")
	}

	function Ye(e, a, i) {
		return a in e ? Object.defineProperty(e, a, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[a] = i, e
	}

	function W(e, a) {
		return W = Object.setPrototypeOf || function(s, u) {
			return s.__proto__ = u, s
		}, W(e, a)
	}

	function $e(e, a) {
		if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(a && a.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), a && W(e, a)
	}

	function pe() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function re(e, a, i) {
		return pe() ? re = Reflect.construct : re = function(u, y, v) {
			var f = [null];
			f.push.apply(f, y);
			var x = Function.bind.apply(u, f),
				T = new x;
			return v && W(T, v.prototype), T
		}, re.apply(null, arguments)
	}

	function j(e) {
		return j = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
			return i.__proto__ || Object.getPrototypeOf(i)
		}, j(e)
	}

	function Je(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function ve(e) {
		var a = typeof Map == "function" ? new Map : void 0;
		return ve = function(s) {
			var u = function() {
				return re(s, arguments, j(this).constructor)
			};
			if (s === null || !Je(s)) return s;
			if (typeof s != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof a != "undefined") {
				if (a.has(s)) return a.get(s);
				a.set(s, u)
			}
			return u.prototype = Object.create(s.prototype, {
				constructor: {
					value: u,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), W(u, s)
		}, ve(e)
	}

	function Ke(e, a) {
		return a && (O(a) === "object" || typeof a == "function") ? a : de(e)
	}

	function Ze(e) {
		var a = pe();
		return function() {
			var s = j(e),
				u;
			if (a) {
				var y = j(this).constructor;
				u = Reflect.construct(s, arguments, y)
			} else u = s.apply(this, arguments);
			return Ke(this, u)
		}
	}
	var et = function(e) {
		"use strict";
		$e(i, e);
		var a = Ze(i);

		function i(s, u) {
			Xe(this, i);
			var y;
			return y = a.call(this, s), Ye(de(y), "code", void 0), y.name = "TurnstileError", y.code = u, y
		}
		return i
	}(ve(Error));
	var H = "0/0";
	var gt = +new Date,
		ht = ".cf-turnstile",
		xt = ".cf-challenge",
		bt = ".g-recaptcha",
		wt = "cf_challenge_response",
		Et = "cf-turnstile-response",
		Tt = "g-recaptcha-response",
		It = 8e3,
		_e = !1,
		ot = !1;

	function d(e, a) {
		var i = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new et(i, a)
	}

	function g(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Me(e) {
		lt(e, "")
	}

	function ct() {
		var e = [ht, xt];
		_e && e.push(bt), document.querySelectorAll(e.join(", ")).forEach(function(a) {
			return ze.render(a)
		})
	}
	var Pe = [],
		ut = !1;

	function tt() {
		ut = !0;
		var e = !0,
			a = !1,
			i = void 0;
		try {
			for (var s = Pe[Symbol.iterator](), u; !(e = (u = s.next()).done); e = !0) {
				var y = u.value;
				y()
			}
		} catch (v) {
			a = !0, i = v
		} finally {
			try {
				!e && s.return != null && s.return()
			} finally {
				if (a) throw i
			}
		}
	}
	var ye = "cf-chl-widget-";

	function rt(e) {
		return e.startsWith(ye) ? e.substring(ye.length) : null
	}

	function ne(e) {
		return "".concat(ye).concat(e)
	}

	function lt(e, a) {
		var i = document.getElementById("".concat(e, "_response"));
		i !== null && S(i, HTMLInputElement) && (i.value = a);
		var s = document.getElementById("".concat(e, "_legacy_response"));
		if (s !== null && S(s, HTMLInputElement) && (s.value = a), _e) {
			var u = document.getElementById("".concat(e, "_g_response"));
			u !== null && S(u, HTMLInputElement) && (u.value = a)
		}
	}

	function Ue(e, a) {
		var i, s = (i = a.params.size) !== null && i !== void 0 ? i : "normal",
			u = a.mode;
		switch (u) {
			case N.NON_INTERACTIVE:
			case N.MANAGED:
				switch (s) {
					case M.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case M.INVISIBLE:
						d('Invalid value for parameter "size", expected "'.concat(M.COMPACT, '" or "').concat(M.NORMAL, '", got "').concat(s, '"'), 2817);
					case M.NORMAL:
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

	function nt(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function At(e, a) {
		var i = a.get("turnstile_iframe_alt");
		i && (e.title = i)
	}

	function at(e, a, i, s) {
		var u = "https://challenges.cloudflare.com";
		if (!1) var y;
		var v = "h/".concat("b", "/");
		return "".concat(u, "/cdn-cgi/challenge-platform/").concat(v, "turnstile/if/ov2/av0/rcv").concat(s, "/").concat(e, "/").concat(a, "/").concat(i.theme, "/").concat(i.size)
	}

	function St(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Ot(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function it() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var ze = function() {
		var e = function(c, t) {
				if (c.params.retry === te.AUTO) {
					c.msgQueue.push(F.EXECUTE), c.isExecuted = !0, c.isExecuting = !0;
					var r, n = 1e3 * 2 + ((r = c.params["retry-interval"]) !== null && r !== void 0 ? r : 0);
					c.retryTimeout = window.setTimeout(function() {
						v(t)
					}, n)
				}
			},
			a = function(c, t, r) {
				if (c.response === void 0) {
					d("[Internal Error] Widget was completed but no response was given", 1362);
					return
				}
				c.isExecuting = !1, lt(t, c.response);
				var n = c.cbSuccess;
				n && n(c.response, r)
			},
			i = function(c) {
				if (!c) return [];
				for (var t = c.attributes, r = t.length, n = new Array(r), l = 0; l < r; l++) n[l] = t[l].name;
				return n
			},
			s = function() {
				var c;
				do {
					c = "";
					for (var t = "abcdefghijklmnopqrstuvwxyz0123456789", r = t.length, n = 0; n < 5; n++) c += t.charAt(Math.floor(Math.random() * r))
				} while (h.has(c));
				return c
			},
			u = function(c, t, r) {
				for (; c.msgQueue.length;) {
					var n, l = c.msgQueue.pop();
					(n = r.contentWindow) === null || n === void 0 || n.postMessage({
						source: "cloudflare-challenge",
						widgetId: t,
						event: l
					}, "*")
				}
			},
			y = function(c, t) {
				if (t) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						n = [],
						l = !0,
						o = !1,
						m = void 0;
					try {
						for (var w = r[Symbol.iterator](), E; !(l = (E = w.next()).done); l = !0) {
							var b = E.value;
							t[b] && t[b] !== c.params[b] && n.push(b)
						}
					} catch (I) {
						o = !0, m = I
					} finally {
						try {
							!l && w.return != null && w.return()
						} finally {
							if (o) throw m
						}
					}
					if (n.length !== 0) {
						d("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(n.join(",")), 3618);
						return
					}
					if (t.action) {
						if (!Oe(t.action)) {
							d('Invalid input for optional parameter "action", got "'.concat(t.action, '"'), 3604);
							return
						}
						c.action = t.action
					}
					if (t.cData) {
						if (!Re(t.cData)) {
							d('Invalid input for optional parameter "cData", got "'.concat(t.cData, '"'), 3605);
							return
						}
						c.cData = t.cData
					}
					t["after-interactive-callback"] && (c.cbAfterInteractive = t["after-interactive-callback"]), t["before-interactive-callback"] && (c.cbBeforeInteractive = t["before-interactive-callback"]), t.callback && (c.cbSuccess = t.callback), t["expired-callback"] && (c.cbExpired = t["expired-callback"]), t["timeout-callback"] && (c.cbTimeout = t["timeout-callback"]), t["error-callback"] && (c.cbError = t["error-callback"]), t["unsupported-callback"] && (c.cbUnsupported = t["unsupported-callback"]), t.chlPageData && (c.chlPageData = t.chlPageData)
				}
			},
			v = function(c) {
				var t = L(c);
				if (!t) {
					d("Nothing to reset found for provided container", 3329);
					return
				}
				var r = h.get(t);
				if (r) {
					r.isResetting = !0, r.response = void 0, r.mode = void 0, r.msgQueue = [], r.isExpired = !1, r.isExecuting = !1, r.isStale = !1, r.isInitialized = !1, r.params.execution === $.RENDER && (r.msgQueue.push(F.EXECUTE), r.isExecuted = !0, r.isExecuting = !0);
					var n = ne(t),
						l = document.querySelector("#".concat(n));
					if (!n || !l) {
						d("Widget ".concat(t, " to reset was not found."), 3330);
						return
					}
					if (r.params.appearance === z.INTERACTION_ONLY && nt(l), r.params.sitekey === null) {
						d("Unexpected Error: Sitekey is null", 3347);
						return
					}
					var o;
					l.src = at(t, r.params.sitekey, r.params, (o = r.rcV) !== null && o !== void 0 ? o : H), Me(n), r.retryTimeout && window.clearTimeout(r.retryTimeout)
				} else {
					d("Widget ".concat(t, " to reset was not found."), 3331);
					return
				}
			},
			f = function(c) {
				var t, r = L(c);
				if (!r || !h.has(r)) {
					g("Nothing to remove found for the provided container");
					return
				}
				var n = ne(r),
					l = ["iframe#".concat(n), "input#".concat(n, "_response"), "input#".concat(n, "_legacy_response"), "input#".concat(n, "_g_response")];
				document.querySelectorAll(l.join(", ")).forEach(function(m) {
					return m.remove()
				});
				var o = (t = h.get(r)) === null || t === void 0 ? void 0 : t.retryTimeout;
				o && window.clearTimeout(o), h.delete(r)
			},
			x = function(c, t) {
				var r;
				if (typeof c == "string") try {
						var n = document.querySelector(c);
						if (!n) {
							d('Unable to find a container for "'.concat(c, '"'), 3585);
							return
						}
						r = n
					} catch (Lt) {
						d('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'), 3586);
						return
					} else if (S(c, HTMLElement)) r = c;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var l = Rt(r);
				if (l) {
					var o = Object.assign(l, t),
						m = o.action,
						w = o.cData,
						E = o.chlPageData,
						b = o.sitekey,
						I;
					o.theme = (I = o.theme) !== null && I !== void 0 ? I : fe.AUTO;
					var B;
					o.retry = (B = o.retry) !== null && B !== void 0 ? B : te.AUTO;
					var A;
					o.execution = (A = o.execution) !== null && A !== void 0 ? A : $.RENDER;
					var q;
					o.appearance = (q = o.appearance) !== null && q !== void 0 ? q : z.ALWAYS;
					var Q;
					o["retry-interval"] = (Q = o["retry-interval"]) !== null && Q !== void 0 ? Q : It;
					var X;
					o.size = (X = o.size) !== null && X !== void 0 ? X : M.NORMAL;
					var me = o.callback,
						ae = o["expired-callback"],
						K = o["timeout-callback"],
						Z = o["after-interactive-callback"],
						ie = o["before-interactive-callback"],
						st = o["error-callback"],
						ft = o["unsupported-callback"];
					if (typeof b != "string") {
						d('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof b == "undefined" ? "undefined" : O(b), '"'), 3588);
						return
					}
					if (!Qe(b)) {
						d('Invalid input for parameter "sitekey", got "'.concat(b, '"'), 3589);
						return
					}
					if (!ke(o.size)) {
						d('Invalid type for parameter "size", expected normal|compact, got "'.concat(o.size, '" ').concat(O(o.size)), 3590);
						return
					}
					if (!Ie(o.theme)) {
						d('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(o.theme, '" ').concat(O(o.theme)), 3591);
						return
					}
					if (!Ae(o.retry)) {
						d('Invalid type for parameter "retry", expected never|auto, got "'.concat(o.retry, '" ').concat(O(o.retry)), 3592);
						return
					}
					if (o.language || (o.language = "auto"), !Ce(o.language)) {
						d('Invalid data-language value: "'.concat(o.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!Le(o.appearance)) {
						d('Unknown data-appearance value: "'.concat(o.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!De(o.execution)) {
						d('Unknown data-execution value: "'.concat(o.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!Se(o["retry-interval"])) {
						d('Invalid data-retry-interval value: "'.concat(o["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					var ge, ee = (ge = o["refresh-expired"]) !== null && ge !== void 0 ? ge : P.AUTO;
					if (Ne(ee)) o["refresh-expired"] = ee;
					else {
						d('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(ee, '" ').concat(typeof ee == "undefined" ? "undefined" : O(ee)), 3603);
						return
					}
					var he = r.getElementsByTagName("iframe")[0];
					he != null && he.id.startsWith(ye) && f(r);
					var k = document.createElement("iframe");
					if (!Oe(m)) {
						d('Invalid input for optional parameter "action", got "'.concat(m, '"'), 3604);
						return
					}
					if (!Re(w)) {
						d('Invalid input for optional parameter "cData", got "'.concat(w, '"'), 3605);
						return
					}
					var oe = s(),
						Y = ne(oe);
					if (!(!oe || !Y)) {
						var We = [],
							xe = o.execution === $.RENDER;
						xe && We.push(F.EXECUTE), V++;
						var dt = +new Date;
						h.set(oe, {
							idx: V,
							action: m,
							cData: w,
							chlPageData: E,
							cbSuccess: me,
							cbError: st,
							cbExpired: ae,
							cbTimeout: K,
							cbUnsupported: ft,
							cbAfterInteractive: Z,
							cbBeforeInteractive: ie,
							params: o,
							isStale: !1,
							isExpired: !1,
							isExecuting: xe,
							isResetting: !1,
							isExecuted: xe,
							isInitialized: !1,
							msgQueue: We,
							rcV: H,
							widgetStartTime: dt
						}), k.style.display = "none", k.style.border = "none", k.style.overflow = "hidden", k.setAttribute("src", at(oe, b, o, H)), k.setAttribute("allow", "cross-origin-isolated; fullscreen"), k.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), k.id = Y;
						var be;
						k.tabIndex = (be = o.tabindex) !== null && be !== void 0 ? be : 0, k.title = "Widget containing a Cloudflare security challenge", r.appendChild(k);
						var we, pt = (we = o["response-field"]) !== null && we !== void 0 ? we : !0;
						if (pt) {
							var ce = document.createElement("input");
							ce.type = "hidden";
							var Ee;
							if (ce.name = (Ee = o["response-field-name"]) !== null && Ee !== void 0 ? Ee : Et, ce.id = "".concat(Y, "_response"), r.appendChild(ce), typeof o["response-field-name"] != "string" && Ot(b)) {
								var ue = document.createElement("input");
								ue.type = "hidden", ue.name = wt, ue.id = "".concat(Y, "_legacy_response"), r.appendChild(ue)
							}
						}
						if (_e) {
							var le = document.createElement("input");
							le.type = "hidden", le.name = Tt, le.id = "".concat(Y, "_g_response"), r.appendChild(le)
						}
						return Y
					}
				}
			},
			T = function() {
				var c, t = -1,
					r = !0,
					n = !1,
					l = void 0;
				try {
					for (var o = h[Symbol.iterator](), m; !(r = (m = o.next()).done); r = !0) {
						var w = qe(m.value, 2),
							E = w[0],
							b = w[1];
						t < b.idx && (c = E, t = b.idx)
					}
				} catch (I) {
					n = !0, l = I
				} finally {
					try {
						!r && o.return != null && o.return()
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

		function p(_, c, t, r) {
			return R.apply(this, arguments)
		}

		function R() {
			return R = Be(function(_, c, t, r) {
				var n, l, o, m, w, E, b, I, B;
				return se(this, function(A) {
					switch (A.label) {
						case 0:
							if (n = _.params.sitekey, l = it(), !l) return g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(_, c, !1), [2];
							o = "h/".concat("b", "/"), m = new URL(l), w = "https", E = "".concat(w, "://").concat(m.host, "/cdn-cgi/challenge-platform/").concat(o, "rc/").concat(r), A.label = 1;
						case 1:
							return A.trys.push([1, 6, , 7]), [4, fetch(E, {
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
							return b = A.sent(), b.status === 200 ? [3, 3] : (g("Cannot determine Turnstile's embedded location, aborting clearance redemption."), a(_, c, !1), [3, 5]);
						case 3:
							return [4, b.json()];
						case 4:
							if (I = A.sent(), "status" in I && I.status === "redeemed") return a(_, c, !0), [2];
							A.label = 5;
						case 5:
							return [3, 7];
						case 6:
							return B = A.sent(), g("Error contacting Turnstile, aborting clearance remdeption."), a(_, c, !1), [3, 7];
						case 7:
							return [2]
					}
				})
			}), R.apply(this, arguments)
		}
		var h = new Map,
			V = 0,
			U = function(c) {
				var t = c.data;
				if (t.source === "cloudflare-challenge") {
					if (!St(c)) {
						g("Ignored message from wrong origin: " + c.origin);
						return
					}
					if (!(!t.widgetId || !h.has(t.widgetId))) {
						var r = ne(t.widgetId),
							n = h.get(t.widgetId);
						if (!(!r || !n)) switch (t.event) {
							case "init": {
								var l = document.getElementById(r);
								if (!l) {
									d("Cannot initialize Widget, Element not found (#".concat(r, ")."), 3074);
									return
								}
								n.mode = t.mode, n.mode === N.INVISIBLE && n.params["refresh-expired"] === P.MANUAL && g("refresh-expired=manual is impossible in invisible mode, consider using '".concat(P.AUTO, "' or '").concat(P.NEVER, "'")), n.params.appearance === z.ALWAYS ? Ue(l, n) : nt(l), l.style.display = "";
								break
							}
							case "translationInit": {
								var o = document.getElementById(r);
								if (!o) {
									d("Cannot initialize Widget, Element not found (#".concat(r, ")."), 3074);
									return
								}
								var m = new Map;
								Object.keys(t.translationData).forEach(function(ie) {
									m.set(ie, t.translationData[ie])
								}), At(o, m);
								break
							}
							case "reject": {
								var w = document.getElementById(r);
								if (n.isExecuting = !1, !w) {
									d("Cannot initialize Widget, Element not found (#".concat(r, ")."), 3075);
									return
								}
								if (t.reason === "outdated_browser") {
									var E = n.cbUnsupported;
									E && E()
								}
								break
							}
							case "complete": {
								n.rcV = H, n.response = t.token, t.sToken ? p(n, r, t.sToken, t.chlId) : a(n, r, !1);
								break
							}
							case "fail": {
								t.rcV && (n.rcV = t.rcV), n.isExecuting = !1, Me(r);
								var b = n.cbError;
								if (b) {
									var I;
									b((I = t.code) !== null && I !== void 0 ? I : "undefined_error") || (t.code && g(t.code), e(n, r))
								} else t.code ? (e(n, r), d(t.code, 3076)) : e(n, r);
								break
							}
							case "tokenExpired": {
								var B = t.token;
								n.isExpired = !0;
								var A = n.cbExpired;
								A && A(B), n.params["refresh-expired"] === P.AUTO && !n.isResetting && v(r);
								break
							}
							case "interactiveTimeout": {
								n.rcV = H, Me(r);
								var q = n.cbTimeout;
								q && q();
								break
							}
							case "refreshRequest": {
								n.rcV = H, v(t.widgetId);
								break
							}
							case "interactiveBegin": {
								var Q = document.getElementById(r);
								if (!Q) {
									d("Cannot layout widget, Element not found (#".concat(r, ")."), 3076);
									return
								}
								var X = n.cbBeforeInteractive;
								X && X(), n.params.appearance === z.INTERACTION_ONLY && Ue(Q, n);
								break
							}
							case "interactiveEnd": {
								var me = document.getElementById(r);
								if (!me) {
									d("Cannot unlayout widget, Element not found (#".concat(r, ")."), 3077);
									return
								}
								var ae = n.cbAfterInteractive;
								ae && ae();
								break
							}
							case "widgetStale": {
								n.isStale = !0;
								break
							}
							case "requestExtraParams": {
								var K, Z = document.querySelector("#".concat(r));
								if (!Z) {
									d("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}
								n.isResetting = !1, (K = Z.contentWindow) === null || K === void 0 || K.postMessage({
									source: "cloudflare-challenge",
									widgetId: t.widgetId,
									event: "extraParams",
									action: n.action,
									cData: n.cData,
									chlPageData: n.chlPageData,
									rcV: n.rcV,
									ch: "7186c00a",
									url: it(),
									retry: n.params.retry,
									"retry-interval": n.params["retry-interval"],
									"refresh-expired": n.params["refresh-expired"],
									language: n.params.language,
									execution: n.params.execution,
									appearance: n.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": i(document.body.parentNode)
									},
									turnstileAge: +Date.now() - gt,
									widgetAge: +Date.now() - n.widgetStartTime
								}, "*"), u(n, t.widgetId, Z), n.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", U);

		function L(_) {
			if (typeof _ == "string") {
				var c = rt(_);
				if (c && h.has(c)) return c;
				try {
					var t = document.querySelector(_);
					return t ? L(t) : null
				} catch (n) {
					return null
				}
			}
			if (S(_, HTMLElement)) {
				var r = _.querySelector("iframe");
				return r ? rt(r.id) : null
			}
			return _ || h.size === 0 ? null : h.keys().next().value
		}
		return {
			ready: function(c) {
				if (ot && (g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), d("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof c != "function" && d('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : O(c), '"'), 3841), c(), typeof c != "function" && d('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), ut) {
					c();
					return
				}
				Pe.push(c)
			},
			implicitRender: ct,
			execute: function(c, t) {
				var r = L(c);
				if (!r) {
					if (t === void 0) {
						d("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var n = x(c, t);
					if (!n) {
						d("Failed to render widget", 43522);
						return
					}
					r = n
				}
				var l = h.get(r);
				if (l) {
					y(l, t);
					var o = ne(r);
					if (l.isExecuting) {
						g("Call to execute() on a widget that is already executing (".concat(o, "), consider using reset() before execute()"));
						return
					} else l.isExecuting = !0;
					if (l.response) {
						l.isExecuting = !1, g("Call to execute() on a widget that was already executed (".concat(o, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), l.cbSuccess && l.cbSuccess(l.response, !1);
						return
					}
					l.isStale && v(o), l.isExpired && g("Call to execute on a expired-widget (".concat(o, "), consider using reset() before")), l.msgQueue.push(F.EXECUTE), l.isExecuted = !0;
					var m = document.querySelector("#".concat(o));
					if (!m) {
						l.isExecuting = !1, d("Widget ".concat(o, " to execute was not found"), 43522);
						return
					}
					l.isInitialized && u(l, r, m), l.params.appearance === z.EXECUTE && Ue(m, l)
				}
			},
			render: x,
			reset: v,
			remove: f,
			getResponse: function(c) {
				var t;
				if (typeof c == "undefined") {
					var r = T();
					if (r) {
						var n, l = h.get(r);
						return l != null && l.isExpired && g("Call to getResponse on a widget that expired, consider refreshing the widget."), (n = h.get(r)) === null || n === void 0 ? void 0 : n.response
					} else d("Could not find a widget", 43794)
				}
				var o = L(c);
				if (!o) {
					d("Could not find widget for provided container", 43778);
					return
				}
				return (t = h.get(o)) === null || t === void 0 ? void 0 : t.response
			},
			isExpired: function(c) {
				var t;
				if (typeof c == "undefined") {
					var r = T();
					if (r) {
						var n, l;
						return (l = (n = h.get(r)) === null || n === void 0 ? void 0 : n.isExpired) !== null && l !== void 0 ? l : !1
					} else d("Could not find a widget", 43794)
				}
				var o = L(c);
				if (!o) return d("Could not find widget for provided container", 43778), !1;
				var m;
				return (m = (t = h.get(o)) === null || t === void 0 ? void 0 : t.isExpired) !== null && m !== void 0 ? m : !1
			}
		}
	}();

	function Rt(e) {
		var a = e.getAttribute("data-sitekey"),
			i = {
				sitekey: a
			},
			s = e.getAttribute("data-tabindex");
		s && (i.tabindex = parseInt(s, 10));
		var u = e.getAttribute("data-theme");
		u && (Ie(u) ? i.theme = u : g('Unknown data-theme value: "'.concat(u, '"')));
		var y = e.getAttribute("data-size");
		if (y && (ke(y) ? i.size = y : g('Unknown data-size value: "'.concat(y, '"'))), !1) var v;
		var f = e.getAttribute("data-action");
		typeof f == "string" && (i.action = f);
		var x = e.getAttribute("data-cdata");
		typeof x == "string" && (i.cData = x);
		var T = e.getAttribute("data-retry");
		T && (Ae(T) ? i.retry = T : g('Invalid data-retry value: "'.concat(T, ", expected either 'never' or 'auto'\"")));
		var p = e.getAttribute("data-retry-interval");
		if (p) {
			var R = parseInt(p, 10);
			Se(R) ? i["retry-interval"] = R : g('Invalid data-retry-interval value: "'.concat(p, ', expected an integer value > 0 and < 900000"'))
		}
		var h = e.getAttribute("data-refresh-expired");
		h && (Ne(h) ? i["refresh-expired"] = h : g('Unknown data-refresh-expired value: "'.concat(h, ", expected either: 'never', 'auto' or 'manual'.")));
		var V = e.getAttribute("data-language");
		V && (Ce(V) ? i.language = V : g('Invalid data-language value: "'.concat(V, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var U = e.getAttribute("data-error-callback");
		U && window[U] && (i["error-callback"] = window[U]);
		var L = e.getAttribute("data-unsupported-callback");
		L && window[L] && U && window[U] && (i["unsupported-callback"] = window[U]);
		var _ = e.getAttribute("data-callback");
		_ && window[_] && (i.callback = window[_]);
		var c = e.getAttribute("data-expired-callback");
		c && window[c] && (i["expired-callback"] = window[c]);
		var t = e.getAttribute("data-timeout-callback");
		t && window[t] && (i["timeout-callback"] = window[t]);
		var r = e.getAttribute("data-after-interactive-callback");
		r && window[r] && (i["after-interactive-callback"] = window[r]);
		var n = e.getAttribute("data-before-interactive-callback");
		n && window[n] && (i["before-interactive-callback"] = window[n]);
		var l, o = (l = e.getAttribute("data-response-field")) !== null && l !== void 0 ? l : "true";
		i["response-field"] = o === "true";
		var m = e.getAttribute("data-response-field-name");
		m && (i["response-field-name"] = m);
		var w = e.getAttribute("data-execution");
		w && (De(w) ? i.execution = w : g('Unknown data-execution value: "'.concat(w, ", expected either: 'render' or 'execute'.")));
		var E = e.getAttribute("data-appearance");
		return E && (Le(E) ? i.appearance = E : g('Unknown data-appearance value: "'.concat(E, ", expected either: 'always', 'execute', or 'interaction-only'."))), i
	}

	function kt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			a = document.currentScript;
		if (S(a, HTMLScriptElement) && e.test(a.src)) return a;
		for (var i = document.querySelectorAll("script"), s = 0, u; u = i[s]; s++)
			if (S(u, HTMLScriptElement) && e.test(u.src)) return u
	}

	function Nt() {
		var e = kt();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (ot = !0);
		var a = e.src,
			i = a.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var G = Nt();
	G && (J = G.get("compat"), (J == null ? void 0 : J.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), _e = !0, window.grecaptcha = ze) : J !== null && g('Unknown value for api.js?compat: "'.concat(J, '", ignoring')), G.forEach(function(e, a) {
		D(["onload", "compat", "render"], a) || g('Unknown parameter passed to api.js: "?'.concat(a, '=...", ignoring'))
	}), C = G.get("onload"), C && setTimeout(function() {
		typeof window[C] == "function" ? window[C]() : (g("Unable to find onload callback '".concat(C, "' immediately after loading, expected 'function', got '").concat(O(window[C]), "'")), setTimeout(function() {
			typeof window[C] == "function" ? window[C]() : g("Unable to find onload callback '".concat(C, "' after 1 second, expected 'function', got '").concat(O(window[C]), "'"))
		}, 1e3))
	}, 0));
	var J, C, Ct = "turnstile" in window;
	Ct ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = ze, (G == null ? void 0 : G.get("render")) !== "explicit" && Pe.push(ct), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(tt, 0) : window.addEventListener("DOMContentLoaded", tt));
})();