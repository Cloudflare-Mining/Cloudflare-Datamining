"use strict";
(function() {
	function I(e, i) {
		return i != null && typeof Symbol != "undefined" && i[Symbol.hasInstance] ? !!i[Symbol.hasInstance](e) : I(e, i)
	}

	function ze(e) {
		if (Array.isArray(e)) return e
	}

	function We(e, i) {
		var o = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (o != null) {
			var l = [],
				s = !0,
				v = !1,
				_, E;
			try {
				for (o = o.call(e); !(s = (_ = o.next()).done) && (l.push(_.value), !(i && l.length === i)); s = !0);
			} catch (p) {
				v = !0, E = p
			} finally {
				try {
					!s && o.return != null && o.return()
				} finally {
					if (v) throw E
				}
			}
			return l
		}
	}

	function Ve() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function be(e, i) {
		(i == null || i > e.length) && (i = e.length);
		for (var o = 0, l = new Array(i); o < i; o++) l[o] = e[o];
		return l
	}

	function Be(e, i) {
		if (e) {
			if (typeof e == "string") return be(e, i);
			var o = Object.prototype.toString.call(e).slice(8, -1);
			if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set") return Array.from(o);
			if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return be(e, i)
		}
	}

	function Fe(e, i) {
		return ze(e) || We(e, i) || Be(e, i) || Ve()
	}

	function A(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function L(e, i) {
		return e.indexOf(i) !== -1
	}

	function Ee(e) {
		return L(["auto", "dark", "light"], e)
	}

	function we(e) {
		return L(["auto", "never"], e)
	}

	function Ie(e) {
		return e > 0 && e < 9e5
	}
	var ot = /^[0-9A-Za-z_-]{3,100}$/;

	function He(e) {
		return ot.test(e)
	}
	var ct = /^[a-z0-9_-]{0,32}$/i;

	function Ae(e) {
		return e === void 0 ? !0 : typeof e == "string" && ct.test(e)
	}
	var ut = /^[a-z0-9_\-=]{0,255}$/i;

	function Te(e) {
		return e === void 0 ? !0 : typeof e == "string" && ut.test(e)
	}

	function ke(e) {
		return L(["normal", "compact", "invisible"], e)
	}

	function Re(e) {
		return L(["auto", "manual", "never"], e)
	}
	var lt = /^[a-z]{2,3}([-_][a-z]{2})?$/i;

	function Se(e) {
		return e === "auto" || lt.test(e)
	}

	function Oe(e) {
		return L(["always", "execute", "interaction-only"], e)
	}

	function Ne(e) {
		return L(["render", "execute"], e)
	}
	var S;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(S || (S = {}));
	var C;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(C || (C = {}));
	var ue;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(ue || (ue = {}));
	var Z;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(Z || (Z = {}));
	var M;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(M || (M = {}));
	var D;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(D || (D = {}));
	var Q;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(Q || (Q = {}));
	var z;
	(function(e) {
		e.EXECUTE = "execute"
	})(z || (z = {}));

	function le(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Pe(e, i) {
		if (!I(e, i)) throw new TypeError("Cannot call a class as a function")
	}

	function qe(e, i, o) {
		return i in e ? Object.defineProperty(e, i, {
			value: o,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[i] = o, e
	}

	function U(e, i) {
		return U = Object.setPrototypeOf || function(l, s) {
			return l.__proto__ = s, l
		}, U(e, i)
	}

	function Qe(e, i) {
		if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(i && i.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), i && U(e, i)
	}

	function se() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function j(e, i, o) {
		return se() ? j = Reflect.construct : j = function(s, v, _) {
			var E = [null];
			E.push.apply(E, v);
			var p = Function.bind.apply(s, E),
				T = new p;
			return _ && U(T, _.prototype), T
		}, j.apply(null, arguments)
	}

	function W(e) {
		return W = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
			return o.__proto__ || Object.getPrototypeOf(o)
		}, W(e)
	}

	function Ge(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function fe(e) {
		var i = typeof Map == "function" ? new Map : void 0;
		return fe = function(l) {
			var s = function() {
				return j(l, arguments, W(this).constructor)
			};
			if (l === null || !Ge(l)) return l;
			if (typeof l != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof i != "undefined") {
				if (i.has(l)) return i.get(l);
				i.set(l, s)
			}
			return s.prototype = Object.create(l.prototype, {
				constructor: {
					value: s,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), U(s, l)
		}, fe(e)
	}

	function Xe(e, i) {
		return i && (A(i) === "object" || typeof i == "function") ? i : le(e)
	}

	function Ye(e) {
		var i = se();
		return function() {
			var l = W(e),
				s;
			if (i) {
				var v = W(this).constructor;
				s = Reflect.construct(l, arguments, v)
			} else s = l.apply(this, arguments);
			return Xe(this, s)
		}
	}
	var $e = function(e) {
		"use strict";
		Qe(o, e);
		var i = Ye(o);

		function o(l, s) {
			Pe(this, o);
			var v;
			return v = i.call(this, l), qe(le(v), "code", void 0), v.name = "TurnstileError", v.code = s, v
		}
		return o
	}(fe(Error));
	var V = "0/0";
	var st = +new Date,
		ft = ".cf-turnstile",
		dt = ".cf-challenge",
		pt = ".g-recaptcha",
		vt = "cf_challenge_response",
		mt = "cf-turnstile-response",
		gt = "g-recaptcha-response",
		yt = 8e3,
		pe = !1,
		et = !1;

	function f(e, i) {
		var o = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new $e(o, i)
	}

	function g(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Le(e) {
		at(e, "")
	}

	function tt() {
		var e = [ft, dt];
		pe && e.push(pt), document.querySelectorAll(e.join(", ")).forEach(function(i) {
			return De.render(i)
		})
	}
	var Me = [],
		rt = !1;

	function Je() {
		rt = !0;
		var e = !0,
			i = !1,
			o = void 0;
		try {
			for (var l = Me[Symbol.iterator](), s; !(e = (s = l.next()).done); e = !0) {
				var v = s.value;
				v()
			}
		} catch (_) {
			i = !0, o = _
		} finally {
			try {
				!e && l.return != null && l.return()
			} finally {
				if (i) throw o
			}
		}
	}
	var de = "cf-chl-widget-";

	function Ke(e) {
		return e.startsWith(de) ? e.substring(de.length) : null
	}

	function ee(e) {
		return "".concat(de).concat(e)
	}

	function at(e, i) {
		var o = document.getElementById("".concat(e, "_response"));
		o !== null && I(o, HTMLInputElement) && (o.value = i);
		var l = document.getElementById("".concat(e, "_legacy_response"));
		if (l !== null && I(l, HTMLInputElement) && (l.value = i), pe) {
			var s = document.getElementById("".concat(e, "_g_response"));
			s !== null && I(s, HTMLInputElement) && (s.value = i)
		}
	}

	function Ce(e, i) {
		var o, l = (o = i.params.size) !== null && o !== void 0 ? o : "normal",
			s = i.mode;
		switch (s) {
			case S.NON_INTERACTIVE:
			case S.MANAGED:
				switch (l) {
					case C.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case C.INVISIBLE:
						f('Invalid value for parameter "size", expected "'.concat(C.COMPACT, '" or "').concat(C.NORMAL, '", got "').concat(l, '"'), 2817);
					case C.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case S.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("tabindex", "-1"), e.setAttribute("aria-hidden", "true");
				break;
			default:
				f('Invalid value for parameter "mode", expected "'.concat(S.NON_INTERACTIVE, '", "').concat(S.MANAGED, '" or "').concat(S.INVISIBLE, '", got "').concat(s, '"'), 2818);
				return
		}
	}

	function Ze(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function xt(e, i) {
		var o = i.get("turnstile_iframe_alt");
		o && (e.title = o)
	}

	function je(e, i, o, l) {
		var s = "https://challenges.cloudflare.com";
		if (!1) var v;
		var _ = "h/".concat("g", "/");
		return "".concat(s, "/cdn-cgi/challenge-platform/").concat(_, "turnstile/if/ov2/av0/rcv").concat(l, "/").concat(e, "/").concat(i, "/").concat(o.theme, "/").concat(o.size)
	}

	function _t(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function ht(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function bt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var De = function() {
		var e = function(c, t) {
				if (c.params.retry === Z.AUTO) {
					c.msgQueue.push(z.EXECUTE), c.isExecuted = !0, c.isExecuting = !0;
					var r, a = 1e3 * 2 + ((r = c.params["retry-interval"]) !== null && r !== void 0 ? r : 0);
					c.retryTimeout = window.setTimeout(function() {
						s(t)
					}, a)
				}
			},
			i = function() {
				var c;
				do {
					c = "";
					for (var t = "abcdefghijklmnopqrstuvwxyz0123456789", r = t.length, a = 0; a < 5; a++) c += t.charAt(Math.floor(Math.random() * r))
				} while (p.has(c));
				return c
			},
			o = function(c, t, r) {
				for (; c.msgQueue.length;) {
					var a, u = c.msgQueue.pop();
					(a = r.contentWindow) === null || a === void 0 || a.postMessage({
						source: "cloudflare-challenge",
						widgetId: t,
						event: u
					}, "*")
				}
			},
			l = function(c, t) {
				if (t) {
					var r = ["retry-interval", "retry", "size", "theme", "tabindex", "execution", "refresh-expired", "response-field-name", "response-field", "language", "base-url", "appearance", "sitekey"],
						a = [],
						u = !0,
						n = !1,
						d = void 0;
					try {
						for (var x = r[Symbol.iterator](), h; !(u = (h = x.next()).done); u = !0) {
							var y = h.value;
							t[y] && t[y] !== c.params[y] && a.push(y)
						}
					} catch (b) {
						n = !0, d = b
					} finally {
						try {
							!u && x.return != null && x.return()
						} finally {
							if (n) throw d
						}
					}
					if (a.length !== 0) {
						f("The parameters ".concat(r.join(","), " is/are not allowed be changed between the calls of render() and execute() of a widget.\n    Consider rendering a new widget if you want to change the following parameters ").concat(a.join(",")), 3618);
						return
					}
					if (t.action) {
						if (!Ae(t.action)) {
							f('Invalid input for optional parameter "action", got "'.concat(t.action, '"'), 3604);
							return
						}
						c.action = t.action
					}
					if (t.cData) {
						if (!Te(t.cData)) {
							f('Invalid input for optional parameter "cData", got "'.concat(t.cData, '"'), 3605);
							return
						}
						c.cData = t.cData
					}
					t["after-interactive-callback"] && (c.cbAfterInteractive = t["after-interactive-callback"]), t["before-interactive-callback"] && (c.cbBeforeInteractive = t["before-interactive-callback"]), t.callback && (c.cbSuccess = t.callback), t["expired-callback"] && (c.cbExpired = t["expired-callback"]), t["timeout-callback"] && (c.cbTimeout = t["timeout-callback"]), t["error-callback"] && (c.cbError = t["error-callback"]), t["unsupported-callback"] && (c.cbUnsupported = t["unsupported-callback"]), t.chlPageData && (c.chlPageData = t.chlPageData)
				}
			},
			s = function(c) {
				var t = N(c);
				if (!t) {
					f("Nothing to reset found for provided container", 3329);
					return
				}
				var r = p.get(t);
				if (r) {
					r.isResetting = !0, r.response = void 0, r.mode = void 0, r.msgQueue = [], r.isExpired = !1, r.isExecuting = !1, r.isStale = !1, r.isInitialized = !1, r.params.execution === Q.RENDER && (r.msgQueue.push(z.EXECUTE), r.isExecuted = !0, r.isExecuting = !0);
					var a = ee(t),
						u = document.querySelector("#".concat(a));
					if (!a || !u) {
						f("Widget ".concat(t, " to reset was not found."), 3330);
						return
					}
					if (r.params.appearance === D.INTERACTION_ONLY && Ze(u), r.params.sitekey === null) {
						f("Unexpected Error: Sitekey is null", 3347);
						return
					}
					var n;
					u.src = je(t, r.params.sitekey, r.params, (n = r.rcV) !== null && n !== void 0 ? n : V), Le(a), r.retryTimeout && window.clearTimeout(r.retryTimeout)
				} else {
					f("Widget ".concat(t, " to reset was not found."), 3331);
					return
				}
			},
			v = function(c) {
				var t, r = N(c);
				if (!r || !p.has(r)) {
					g("Nothing to remove found for the provided container");
					return
				}
				var a = ee(r),
					u = ["iframe#".concat(a), "input#".concat(a, "_response"), "input#".concat(a, "_legacy_response"), "input#".concat(a, "_g_response")];
				document.querySelectorAll(u.join(", ")).forEach(function(d) {
					return d.remove()
				});
				var n = (t = p.get(r)) === null || t === void 0 ? void 0 : t.retryTimeout;
				n && window.clearTimeout(n), p.delete(r)
			},
			_ = function(c, t) {
				var r;
				if (typeof c == "string") try {
						var a = document.querySelector(c);
						if (!a) {
							f('Unable to find a container for "'.concat(c, '"'), 3585);
							return
						}
						r = a
					} catch (Tt) {
						f('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'), 3586);
						return
					} else if (I(c, HTMLElement)) r = c;
					else {
						f('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var u = Et(r);
				if (u) {
					var n = Object.assign(u, t),
						d = n.action,
						x = n.cData,
						h = n.chlPageData,
						y = n.sitekey,
						b;
					n.theme = (b = n.theme) !== null && b !== void 0 ? b : ue.AUTO;
					var w;
					n.retry = (w = n.retry) !== null && w !== void 0 ? w : Z.AUTO;
					var k;
					n.execution = (k = n.execution) !== null && k !== void 0 ? k : Q.RENDER;
					var F;
					n.appearance = (F = n.appearance) !== null && F !== void 0 ? F : D.ALWAYS;
					var H;
					n["retry-interval"] = (H = n["retry-interval"]) !== null && H !== void 0 ? H : yt;
					var P;
					n.size = (P = n.size) !== null && P !== void 0 ? P : C.NORMAL;
					var te = n.callback,
						ve = n["expired-callback"],
						re = n["timeout-callback"],
						Y = n["after-interactive-callback"],
						$ = n["before-interactive-callback"],
						J = n["error-callback"],
						ae = n["unsupported-callback"];
					if (typeof y != "string") {
						f('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof y == "undefined" ? "undefined" : A(y), '"'), 3588);
						return
					}
					if (!He(y)) {
						f('Invalid input for parameter "sitekey", got "'.concat(y, '"'), 3589);
						return
					}
					if (!ke(n.size)) {
						f('Invalid type for parameter "size", expected normal|compact, got "'.concat(n.size, '" ').concat(A(n.size)), 3590);
						return
					}
					if (!Ee(n.theme)) {
						f('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(n.theme, '" ').concat(A(n.theme)), 3591);
						return
					}
					if (!we(n.retry)) {
						f('Invalid type for parameter "retry", expected never|auto, got "'.concat(n.retry, '" ').concat(A(n.retry)), 3592);
						return
					}
					if (n.language || (n.language = "auto"), !Se(n.language)) {
						f('Invalid data-language value: "'.concat(n.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!Oe(n.appearance)) {
						f('Unknown data-appearance value: "'.concat(n.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!Ne(n.execution)) {
						f('Unknown data-execution value: "'.concat(n.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!Ie(n["retry-interval"])) {
						f('Invalid data-retry-interval value: "'.concat(n["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					var me, K = (me = n["refresh-expired"]) !== null && me !== void 0 ? me : M.AUTO;
					if (Re(K)) n["refresh-expired"] = K;
					else {
						f('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(K, '" ').concat(typeof K == "undefined" ? "undefined" : A(K)), 3603);
						return
					}
					var ge = r.getElementsByTagName("iframe")[0];
					ge != null && ge.id.startsWith(de) && v(r);
					var R = document.createElement("iframe");
					if (!Ae(d)) {
						f('Invalid input for optional parameter "action", got "'.concat(d, '"'), 3604);
						return
					}
					if (!Te(x)) {
						f('Invalid input for optional parameter "cData", got "'.concat(x, '"'), 3605);
						return
					}
					var ne = i(),
						q = ee(ne);
					if (!(!ne || !q)) {
						var Ue = [],
							ye = n.execution === Q.RENDER;
						ye && Ue.push(z.EXECUTE), T++;
						var nt = +new Date;
						p.set(ne, {
							idx: T,
							action: d,
							cData: x,
							chlPageData: h,
							cbSuccess: te,
							cbError: J,
							cbExpired: ve,
							cbTimeout: re,
							cbUnsupported: ae,
							cbAfterInteractive: Y,
							cbBeforeInteractive: $,
							params: n,
							isStale: !1,
							isExpired: !1,
							isExecuting: ye,
							isResetting: !1,
							isExecuted: ye,
							isInitialized: !1,
							msgQueue: Ue,
							rcV: V,
							widgetStartTime: nt
						}), R.style.display = "none", R.style.border = "none", R.style.overflow = "hidden", R.setAttribute("src", je(ne, y, n, V)), R.setAttribute("allow", "cross-origin-isolated; fullscreen"), R.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), R.id = q;
						var xe;
						R.tabIndex = (xe = n.tabindex) !== null && xe !== void 0 ? xe : 0, R.title = "Widget containing a Cloudflare security challenge", r.appendChild(R);
						var _e, it = (_e = n["response-field"]) !== null && _e !== void 0 ? _e : !0;
						if (it) {
							var ie = document.createElement("input");
							ie.type = "hidden";
							var he;
							if (ie.name = (he = n["response-field-name"]) !== null && he !== void 0 ? he : mt, ie.id = "".concat(q, "_response"), r.appendChild(ie), typeof n["response-field-name"] != "string" && ht(y)) {
								var oe = document.createElement("input");
								oe.type = "hidden", oe.name = vt, oe.id = "".concat(q, "_legacy_response"), r.appendChild(oe)
							}
						}
						if (pe) {
							var ce = document.createElement("input");
							ce.type = "hidden", ce.name = gt, ce.id = "".concat(q, "_g_response"), r.appendChild(ce)
						}
						return q
					}
				}
			},
			E = function() {
				var c, t = -1,
					r = !0,
					a = !1,
					u = void 0;
				try {
					for (var n = p[Symbol.iterator](), d; !(r = (d = n.next()).done); r = !0) {
						var x = Fe(d.value, 2),
							h = x[0],
							y = x[1];
						t < y.idx && (c = h, t = y.idx)
					}
				} catch (b) {
					a = !0, u = b
				} finally {
					try {
						!r && n.return != null && n.return()
					} finally {
						if (a) throw u
					}
				}
				if (t === -1) {
					f("Could not find widget", 43778);
					return
				}
				return c
			},
			p = new Map,
			T = 0,
			X = function(c) {
				var t = c.data;
				if (t.source === "cloudflare-challenge") {
					if (!_t(c)) {
						f("Ignored message from wrong origin: " + c.origin, 3073);
						return
					}
					if (!(!t.widgetId || !p.has(t.widgetId))) {
						var r = ee(t.widgetId),
							a = p.get(t.widgetId);
						if (!(!r || !a)) switch (t.event) {
							case "init": {
								var u = document.getElementById(r);
								if (!u) {
									f("Cannot initialize Widget, Element not found (#".concat(r, ")."), 3074);
									return
								}
								a.mode = t.mode, a.mode === S.INVISIBLE && a.params["refresh-expired"] === M.MANUAL && g("refresh-expired=manual is impossible in invisible mode, consider using '".concat(M.AUTO, "' or '").concat(M.NEVER, "'")), a.params.appearance === D.ALWAYS ? Ce(u, a) : Ze(u), u.style.display = "";
								break
							}
							case "translationInit": {
								var n = document.getElementById(r);
								if (!n) {
									f("Cannot initialize Widget, Element not found (#".concat(r, ")."), 3074);
									return
								}
								var d = new Map;
								Object.keys(t.translationData).forEach(function(ae) {
									d.set(ae, t.translationData[ae])
								}), xt(n, d);
								break
							}
							case "reject": {
								var x = document.getElementById(r);
								if (a.isExecuting = !1, !x) {
									f("Cannot initialize Widget, Element not found (#".concat(r, ")."), 3075);
									return
								}
								if (t.reason === "outdated_browser") {
									var h = a.cbUnsupported;
									h && h()
								}
								break
							}
							case "complete": {
								a.rcV = V, a.response = t.token, a.isExecuting = !1, at(r, t.token);
								var y = a.cbSuccess;
								y && y(t.token);
								break
							}
							case "fail": {
								t.rcV && (a.rcV = t.rcV), a.isExecuting = !1, Le(r);
								var b = a.cbError;
								if (b) {
									var w;
									b((w = t.code) !== null && w !== void 0 ? w : "undefined_error") || (t.code && g(t.code), e(a, r))
								} else t.code ? (e(a, r), f(t.code, 3076)) : e(a, r);
								break
							}
							case "tokenExpired": {
								var k = t.token;
								a.isExpired = !0;
								var F = a.cbExpired;
								F && F(k), a.params["refresh-expired"] === M.AUTO && !a.isResetting && s(r);
								break
							}
							case "interactiveTimeout": {
								a.rcV = V, Le(r);
								var H = a.cbTimeout;
								H && H();
								break
							}
							case "refreshRequest": {
								a.rcV = V, s(t.widgetId);
								break
							}
							case "interactiveBegin": {
								var P = document.getElementById(r);
								if (!P) {
									f("Cannot layout widget, Element not found (#".concat(r, ")."), 3076);
									return
								}
								var te = a.cbBeforeInteractive;
								te && te(), a.params.appearance === D.INTERACTION_ONLY && Ce(P, a);
								break
							}
							case "interactiveEnd": {
								var ve = document.getElementById(r);
								if (!ve) {
									f("Cannot unlayout widget, Element not found (#".concat(r, ")."), 3077);
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
								var Y, $, J = document.querySelector("#".concat(r));
								if (!J) {
									f("Received state for an unknown widget: ".concat(t.widgetId), 3078);
									return
								}
								a.isResetting = !1, (Y = J.contentWindow) === null || Y === void 0 || Y.postMessage({
									source: "cloudflare-challenge",
									widgetId: t.widgetId,
									event: "extraParams",
									action: a.action,
									cData: a.cData,
									chlPageData: a.chlPageData,
									rcV: a.rcV,
									ch: "f0089873",
									url: bt(),
									retry: a.params.retry,
									"retry-interval": a.params["retry-interval"],
									"refresh-expired": a.params["refresh-expired"],
									language: a.params.language,
									execution: a.params.execution,
									appearance: a.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": ($ = document.body.parentNode) === null || $ === void 0 ? void 0 : $.getAttributeNames()
									},
									turnstileAge: +Date.now() - st,
									widgetAge: +Date.now() - a.widgetStartTime
								}, "*"), o(a, t.widgetId, J), a.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", X);

		function N(m) {
			if (typeof m == "string") {
				var c = Ke(m);
				if (c && p.has(c)) return c;
				try {
					var t = document.querySelector(m);
					return t ? N(t) : null
				} catch (a) {
					return null
				}
			}
			if (I(m, HTMLElement)) {
				var r = m.querySelector("iframe");
				return r ? Ke(r.id) : null
			}
			return m || p.size === 0 ? null : p.keys().next().value
		}
		return {
			ready: function(c) {
				if (et && (g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), f("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof c != "function" && f('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : A(c), '"'), 3841), c(), typeof c != "function" && f('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), rt) {
					c();
					return
				}
				Me.push(c)
			},
			implicitRender: tt,
			execute: function(c, t) {
				var r = N(c);
				if (!r) {
					if (t === void 0) {
						f("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var a = _(c, t);
					if (!a) {
						f("Failed to render widget", 43522);
						return
					}
					r = a
				}
				var u = p.get(r);
				if (u) {
					l(u, t);
					var n = ee(r);
					if (u.isExecuting) {
						g("Call to execute() on a widget that is already executing (".concat(n, "), consider using reset() before execute()"));
						return
					} else u.isExecuting = !0;
					if (u.response) {
						u.isExecuting = !1, g("Call to execute() on a widget that was already executed (".concat(n, "), execute() will return the previous token obtained. Consider using reset() before execute() to obtain a fresh token")), u.cbSuccess && u.cbSuccess(u.response);
						return
					}
					u.isStale && s(n), u.isExpired && g("Call to execute on a expired-widget (".concat(n, "), consider using reset() before")), u.msgQueue.push(z.EXECUTE), u.isExecuted = !0;
					var d = document.querySelector("#".concat(n));
					if (!d) {
						u.isExecuting = !1, f("Widget ".concat(n, " to execute was not found"), 43522);
						return
					}
					u.isInitialized && o(u, r, d), u.params.appearance === D.EXECUTE && Ce(d, u)
				}
			},
			render: _,
			reset: s,
			remove: v,
			getResponse: function(c) {
				var t;
				if (typeof c == "undefined") {
					var r = E();
					if (r) {
						var a, u = p.get(r);
						return u != null && u.isExpired && g("Call to getResponse on a widget that expired, consider refreshing the widget."), (a = p.get(r)) === null || a === void 0 ? void 0 : a.response
					} else f("Could not find a widget", 43794)
				}
				var n = N(c);
				if (!n) {
					f("Could not find widget for provided container", 43778);
					return
				}
				return (t = p.get(n)) === null || t === void 0 ? void 0 : t.response
			},
			isExpired: function(c) {
				var t;
				if (typeof c == "undefined") {
					var r = E();
					if (r) {
						var a, u;
						return (u = (a = p.get(r)) === null || a === void 0 ? void 0 : a.isExpired) !== null && u !== void 0 ? u : !1
					} else f("Could not find a widget", 43794)
				}
				var n = N(c);
				if (!n) return f("Could not find widget for provided container", 43778), !1;
				var d;
				return (d = (t = p.get(n)) === null || t === void 0 ? void 0 : t.isExpired) !== null && d !== void 0 ? d : !1
			}
		}
	}();

	function Et(e) {
		var i = e.getAttribute("data-sitekey"),
			o = {
				sitekey: i
			},
			l = e.getAttribute("data-tabindex");
		l && (o.tabindex = parseInt(l, 10));
		var s = e.getAttribute("data-theme");
		s && (Ee(s) ? o.theme = s : g('Unknown data-theme value: "'.concat(s, '"')));
		var v = e.getAttribute("data-size");
		if (v && (ke(v) ? o.size = v : g('Unknown data-size value: "'.concat(v, '"'))), !1) var _;
		var E = e.getAttribute("data-action");
		typeof E == "string" && (o.action = E);
		var p = e.getAttribute("data-cdata");
		typeof p == "string" && (o.cData = p);
		var T = e.getAttribute("data-retry");
		T && (we(T) ? o.retry = T : g('Invalid data-retry value: "'.concat(T, ", expected either 'never' or 'auto'\"")));
		var X = e.getAttribute("data-retry-interval");
		if (X) {
			var N = parseInt(X, 10);
			Ie(N) ? o["retry-interval"] = N : g('Invalid data-retry-interval value: "'.concat(X, ', expected an integer value > 0 and < 900000"'))
		}
		var m = e.getAttribute("data-refresh-expired");
		m && (Re(m) ? o["refresh-expired"] = m : g('Unknown data-refresh-expired value: "'.concat(m, ", expected either: 'never', 'auto' or 'manual'.")));
		var c = e.getAttribute("data-language");
		c && (Se(c) ? o.language = c : g('Invalid data-language value: "'.concat(c, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var t = e.getAttribute("data-error-callback");
		t && window[t] && (o["error-callback"] = window[t]);
		var r = e.getAttribute("data-unsupported-callback");
		r && window[r] && t && window[t] && (o["unsupported-callback"] = window[t]);
		var a = e.getAttribute("data-callback");
		a && window[a] && (o.callback = window[a]);
		var u = e.getAttribute("data-expired-callback");
		u && window[u] && (o["expired-callback"] = window[u]);
		var n = e.getAttribute("data-timeout-callback");
		n && window[n] && (o["timeout-callback"] = window[n]);
		var d = e.getAttribute("data-after-interactive-callback");
		d && window[d] && (o["after-interactive-callback"] = window[d]);
		var x = e.getAttribute("data-before-interactive-callback");
		x && window[x] && (o["before-interactive-callback"] = window[x]);
		var h, y = (h = e.getAttribute("data-response-field")) !== null && h !== void 0 ? h : "true";
		o["response-field"] = y === "true";
		var b = e.getAttribute("data-response-field-name");
		b && (o["response-field-name"] = b);
		var w = e.getAttribute("data-execution");
		w && (Ne(w) ? o.execution = w : g('Unknown data-execution value: "'.concat(w, ", expected either: 'render' or 'execute'.")));
		var k = e.getAttribute("data-appearance");
		return k && (Oe(k) ? o.appearance = k : g('Unknown data-appearance value: "'.concat(k, ", expected either: 'always', 'execute', or 'interaction-only'."))), o
	}

	function wt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			i = document.currentScript;
		if (I(i, HTMLScriptElement) && e.test(i.src)) return i;
		for (var o = document.querySelectorAll("script"), l = 0, s; s = o[l]; l++)
			if (I(s, HTMLScriptElement) && e.test(s.src)) return s
	}

	function It() {
		var e = wt();
		if (!e) return f("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (et = !0);
		var i = e.src,
			o = i.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var B = It();
	B && (G = B.get("compat"), (G == null ? void 0 : G.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), pe = !0, window.grecaptcha = De) : G !== null && g('Unknown value for api.js?compat: "'.concat(G, '", ignoring')), B.forEach(function(e, i) {
		L(["onload", "compat", "render"], i) || g('Unknown parameter passed to api.js: "?'.concat(i, '=...", ignoring'))
	}), O = B.get("onload"), O && setTimeout(function() {
		typeof window[O] == "function" ? window[O]() : (g("Unable to find onload callback '".concat(O, "' immediately after loading, expected 'function', got '").concat(A(window[O]), "'")), setTimeout(function() {
			typeof window[O] == "function" ? window[O]() : g("Unable to find onload callback '".concat(O, "' after 1 second, expected 'function', got '").concat(A(window[O]), "'"))
		}, 1e3))
	}, 0));
	var G, O, At = "turnstile" in window;
	At ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = De, (B == null ? void 0 : B.get("render")) !== "explicit" && Me.push(tt), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Je, 0) : window.addEventListener("DOMContentLoaded", Je));
})();