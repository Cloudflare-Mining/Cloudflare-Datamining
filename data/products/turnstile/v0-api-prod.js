"use strict";
(function() {
	function h(e, r) {
		return r != null && typeof Symbol != "undefined" && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](e) : h(e, r)
	}

	function Me(e) {
		if (Array.isArray(e)) return e
	}

	function Ce(e, r) {
		var a = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (a != null) {
			var u = [],
				s = !0,
				p = !1,
				_, d;
			try {
				for (a = a.call(e); !(s = (_ = a.next()).done) && (u.push(_.value), !(r && u.length === r)); s = !0);
			} catch (O) {
				p = !0, d = O
			} finally {
				try {
					!s && a.return != null && a.return()
				} finally {
					if (p) throw d
				}
			}
			return u
		}
	}

	function Ue() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function _e(e, r) {
		(r == null || r > e.length) && (r = e.length);
		for (var a = 0, u = new Array(r); a < r; a++) u[a] = e[a];
		return u
	}

	function Pe(e, r) {
		if (e) {
			if (typeof e == "string") return _e(e, r);
			var a = Object.prototype.toString.call(e).slice(8, -1);
			if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set") return Array.from(a);
			if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return _e(e, r)
		}
	}

	function De(e, r) {
		return Me(e) || Ce(e, r) || Pe(e, r) || Ue()
	}

	function A(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function L(e, r) {
		return e.indexOf(r) !== -1
	}

	function xe(e) {
		return L(["auto", "dark", "light"], e)
	}

	function he(e) {
		return L(["auto", "never"], e)
	}

	function be(e) {
		return e > 0 && e < 9e5
	}
	var it = /^[0-9A-Za-z_-]{3,100}$/;

	function ze(e) {
		return it.test(e)
	}
	var ot = /^[a-z0-9_-]{0,32}$/i;

	function We(e) {
		return e === void 0 ? !0 : typeof e == "string" && ot.test(e)
	}
	var ct = /^[a-z0-9_\-=]{0,255}$/i;

	function Ve(e) {
		return e === void 0 ? !0 : typeof e == "string" && ct.test(e)
	}

	function Ee(e) {
		return L(["normal", "compact", "invisible"], e)
	}

	function we(e) {
		return L(["auto", "manual", "never"], e)
	}
	var ut = /^[a-z]{2}(-[A-Z]{2})?$/;

	function Ae(e) {
		return e === "auto" || ut.test(e)
	}

	function Ie(e) {
		return L(["always", "execute", "interaction-only"], e)
	}

	function Te(e) {
		return L(["render", "execute"], e)
	}
	var S;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(S || (S = {}));
	var M;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(M || (M = {}));
	var oe;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(oe || (oe = {}));
	var Z;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(Z || (Z = {}));
	var U;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(U || (U = {}));
	var P;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(P || (P = {}));
	var q;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(q || (q = {}));
	var z;
	(function(e) {
		e.EXECUTE = "execute"
	})(z || (z = {}));

	function ce(e) {
		if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}

	function Be(e, r) {
		if (!h(e, r)) throw new TypeError("Cannot call a class as a function")
	}

	function Fe(e, r, a) {
		return r in e ? Object.defineProperty(e, r, {
			value: a,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = a, e
	}

	function D(e, r) {
		return D = Object.setPrototypeOf || function(u, s) {
			return u.__proto__ = s, u
		}, D(e, r)
	}

	function He(e, r) {
		if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
		e.prototype = Object.create(r && r.prototype, {
			constructor: {
				value: e,
				writable: !0,
				configurable: !0
			}
		}), r && D(e, r)
	}

	function ue() {
		if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
		if (typeof Proxy == "function") return !0;
		try {
			return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
		} catch (e) {
			return !1
		}
	}

	function J(e, r, a) {
		return ue() ? J = Reflect.construct : J = function(s, p, _) {
			var d = [null];
			d.push.apply(d, p);
			var O = Function.bind.apply(s, d),
				N = new O;
			return _ && D(N, _.prototype), N
		}, J.apply(null, arguments)
	}

	function W(e) {
		return W = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
			return a.__proto__ || Object.getPrototypeOf(a)
		}, W(e)
	}

	function je(e) {
		return Function.toString.call(e).indexOf("[native code]") !== -1
	}

	function le(e) {
		var r = typeof Map == "function" ? new Map : void 0;
		return le = function(u) {
			var s = function() {
				return J(u, arguments, W(this).constructor)
			};
			if (u === null || !je(u)) return u;
			if (typeof u != "function") throw new TypeError("Super expression must either be null or a function");
			if (typeof r != "undefined") {
				if (r.has(u)) return r.get(u);
				r.set(u, s)
			}
			return s.prototype = Object.create(u.prototype, {
				constructor: {
					value: s,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), D(s, u)
		}, le(e)
	}

	function qe(e, r) {
		return r && (A(r) === "object" || typeof r == "function") ? r : ce(e)
	}

	function Qe(e) {
		var r = ue();
		return function() {
			var u = W(e),
				s;
			if (r) {
				var p = W(this).constructor;
				s = Reflect.construct(u, arguments, p)
			} else s = u.apply(this, arguments);
			return qe(this, s)
		}
	}
	var Ge = function(e) {
		"use strict";
		He(a, e);
		var r = Qe(a);

		function a(u, s) {
			Be(this, a);
			var p;
			return p = r.call(this, u), Fe(ce(p), "code", void 0), p.name = "TurnstileError", p.code = s, p
		}
		return a
	}(le(Error));
	var V = "0/0";
	var lt = +new Date,
		st = ".cf-turnstile",
		ft = ".cf-challenge",
		dt = ".g-recaptcha",
		pt = "cf_challenge_response",
		vt = "cf-turnstile-response",
		mt = "g-recaptcha-response",
		gt = 8e3,
		fe = !1,
		Je = !1;

	function f(e, r) {
		var a = "[Cloudflare Turnstile] ".concat(e, ".");
		throw new Ge(a, r)
	}

	function m(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function Re(e) {
		tt(e, "")
	}

	function Ke() {
		var e = [st, ft];
		fe && e.push(dt), document.querySelectorAll(e.join(", ")).forEach(function(r) {
			return Oe.render(r)
		})
	}
	var ke = [],
		et = !1;

	function Xe() {
		et = !0;
		var e = !0,
			r = !1,
			a = void 0;
		try {
			for (var u = ke[Symbol.iterator](), s; !(e = (s = u.next()).done); e = !0) {
				var p = s.value;
				p()
			}
		} catch (_) {
			r = !0, a = _
		} finally {
			try {
				!e && u.return != null && u.return()
			} finally {
				if (r) throw a
			}
		}
	}
	var se = "cf-chl-widget-";

	function Ye(e) {
		return e.startsWith(se) ? e.substring(se.length) : null
	}

	function K(e) {
		return "".concat(se).concat(e)
	}

	function tt(e, r) {
		var a = document.getElementById("".concat(e, "_response"));
		a !== null && h(a, HTMLInputElement) && (a.value = r);
		var u = document.getElementById("".concat(e, "_legacy_response"));
		if (u !== null && h(u, HTMLInputElement) && (u.value = r), fe) {
			var s = document.getElementById("".concat(e, "_g_response"));
			s !== null && h(s, HTMLInputElement) && (s.value = r)
		}
	}

	function Se(e, r) {
		var a, u = (a = r.params.size) !== null && a !== void 0 ? a : "normal",
			s = r.mode;
		switch (s) {
			case S.NON_INTERACTIVE:
			case S.MANAGED:
				switch (u) {
					case M.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case M.INVISIBLE:
						f('Invalid value for parameter "size", expected "'.concat(M.COMPACT, '" or "').concat(M.NORMAL, '", got "').concat(u, '"'), 2817);
					case M.NORMAL:
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

	function $e(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function yt(e, r) {
		var a = r.get("turnstile_iframe_alt");
		a && (e.title = a)
	}

	function Ze(e, r, a, u) {
		var s = "https://challenges.cloudflare.com";
		if (!1) var p;
		var _ = "h/".concat("b", "/");
		return "".concat(s, "/cdn-cgi/challenge-platform/").concat(_, "turnstile/if/ov2/av0/rcv").concat(u, "/").concat(e, "/").concat(r, "/").concat(a.theme, "/").concat(a.size)
	}

	function _t(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function xt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function ht() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Oe = function() {
		var e = function(c, o) {
				if (c.params.retry === Z.AUTO) {
					c.msgQueue.push(z.EXECUTE), c.isExecuted = !0;
					var t, i = 1e3 * 2 + ((t = c.params["retry-interval"]) !== null && t !== void 0 ? t : 0);
					c.retryTimeout = window.setTimeout(function() {
						u(o)
					}, i)
				}
			},
			r = function() {
				var c;
				do {
					c = "";
					for (var o = "abcdefghijklmnopqrstuvwxyz0123456789", t = o.length, i = 0; i < 5; i++) c += o.charAt(Math.floor(Math.random() * t))
				} while (d.has(c));
				return c
			},
			a = function(c, o, t) {
				for (; c.msgQueue.length;) {
					var i, l = c.msgQueue.pop();
					(i = t.contentWindow) === null || i === void 0 || i.postMessage({
						source: "cloudflare-challenge",
						widgetId: o,
						event: l
					}, "*")
				}
			},
			u = function(c) {
				var o = I(c);
				if (!o) {
					f("Nothing to reset found for provided container", 3329);
					return
				}
				var t = d.get(o);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isExpired = !1, t.isStale = !1, t.isInitialized = !1, t.params.execution === q.RENDER && (t.msgQueue.push(z.EXECUTE), t.isExecuted = !0);
					var i = K(o),
						l = document.querySelector("#".concat(i));
					if (!i || !l) {
						f("Widget ".concat(o, " to reset was not found."), 3330);
						return
					}
					if (t.params.appearance === P.INTERACTION_ONLY && $e(l), t.params.sitekey === null) {
						f("Unexpected Error: Sitekey is null", 3347);
						return
					}
					var n;
					l.src = Ze(o, t.params.sitekey, t.params, (n = t.rcV) !== null && n !== void 0 ? n : V), Re(i), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else {
					f("Widget ".concat(o, " to reset was not found."), 3331);
					return
				}
			},
			s = function(c) {
				var o, t = I(c);
				if (!t || !d.has(t)) {
					m("Nothing to remove found for the provided container");
					return
				}
				var i = K(t),
					l = ["iframe#".concat(i), "input#".concat(i, "_response"), "input#".concat(i, "_legacy_response"), "input#".concat(i, "_g_response")];
				document.querySelectorAll(l.join(", ")).forEach(function(v) {
					return v.remove()
				});
				var n = (o = d.get(t)) === null || o === void 0 ? void 0 : o.retryTimeout;
				n && window.clearTimeout(n), d.delete(t)
			},
			p = function(c, o) {
				var t;
				if (typeof c == "string") try {
						var i = document.querySelector(c);
						if (!i) {
							f('Unable to find a container for "'.concat(c, '"'), 3585);
							return
						}
						t = i
					} catch (It) {
						f('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'), 3586);
						return
					} else if (h(c, HTMLElement)) t = c;
					else {
						f('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"', 3587);
						return
					} var l = bt(t);
				if (l) {
					var n = Object.assign(l, o),
						v = n.action,
						x = n.cData,
						T = n.chlPageData,
						y = n.sitekey,
						b;
					n.theme = (b = n.theme) !== null && b !== void 0 ? b : oe.AUTO;
					var C;
					n.retry = (C = n.retry) !== null && C !== void 0 ? C : Z.AUTO;
					var E;
					n.execution = (E = n.execution) !== null && E !== void 0 ? E : q.RENDER;
					var w;
					n.appearance = (w = n.appearance) !== null && w !== void 0 ? w : P.ALWAYS;
					var F;
					n["retry-interval"] = (F = n["retry-interval"]) !== null && F !== void 0 ? F : gt;
					var H;
					n.size = (H = n.size) !== null && H !== void 0 ? H : M.NORMAL;
					var de = n.callback,
						ee = n["expired-callback"],
						G = n["timeout-callback"],
						X = n["after-interactive-callback"],
						Y = n["before-interactive-callback"],
						te = n["error-callback"],
						rt = n["unsupported-callback"];
					if (typeof y != "string") {
						f('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof y == "undefined" ? "undefined" : A(y), '"'), 3588);
						return
					}
					if (!ze(y)) {
						f('Invalid input for parameter "sitekey", got "'.concat(y, '"'), 3589);
						return
					}
					if (!Ee(n.size)) {
						f('Invalid type for parameter "size", expected normal|compact, got "'.concat(n.size, '" ').concat(A(n.size)), 3590);
						return
					}
					if (!xe(n.theme)) {
						f('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(n.theme, '" ').concat(A(n.theme)), 3591);
						return
					}
					if (!he(n.retry)) {
						f('Invalid type for parameter "retry", expected never|auto, got "'.concat(n.retry, '" ').concat(A(n.retry)), 3592);
						return
					}
					if (n.language || (n.language = "auto"), !Ae(n.language)) {
						f('Invalid data-language value: "'.concat(n.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"), 3593);
						return
					}
					if (!Ie(n.appearance)) {
						f('Unknown data-appearance value: "'.concat(n.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."), 3600);
						return
					}
					if (!Te(n.execution)) {
						f('Unknown data-execution value: "'.concat(n.execution, ", expected either: 'render' or 'execute'."), 3601);
						return
					}
					if (!be(n["retry-interval"])) {
						f('Invalid data-retry-interval value: "'.concat(n["retry-interval"], ', expected an integer value > 0 and < 900000"'), 3602);
						return
					}
					var pe, $ = (pe = n["refresh-expired"]) !== null && pe !== void 0 ? pe : U.AUTO;
					if (we($)) n["refresh-expired"] = $;
					else {
						f('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat($, '" ').concat(typeof $ == "undefined" ? "undefined" : A($)), 3603);
						return
					}
					var ve = t.getElementsByTagName("iframe")[0];
					ve != null && ve.id.startsWith(se) && s(t);
					var R = document.createElement("iframe");
					if (!We(v)) {
						f('Invalid input for optional parameter "action", got "'.concat(v, '"'), 3604);
						return
					}
					if (!Ve(x)) {
						f('Invalid input for optional parameter "cData", got "'.concat(x, '"'), 3605);
						return
					}
					var re = r(),
						j = K(re);
					if (!(!re || !j)) {
						var Ne = [],
							Le = n.execution === q.RENDER;
						Le && Ne.push(z.EXECUTE), O++;
						var at = +new Date;
						d.set(re, {
							idx: O,
							action: v,
							cData: x,
							chlPageData: T,
							cbSuccess: de,
							cbError: te,
							cbExpired: ee,
							cbTimeout: G,
							cbUnsupported: rt,
							cbAfterInteractive: X,
							cbBeforeInteractive: Y,
							params: n,
							isStale: !1,
							isExpired: !1,
							isResetting: !1,
							isExecuted: Le,
							isInitialized: !1,
							msgQueue: Ne,
							rcV: V,
							widgetStartTime: at
						}), R.style.display = "none", R.style.border = "none", R.style.overflow = "hidden", R.setAttribute("src", Ze(re, y, n, V)), R.setAttribute("allow", "cross-origin-isolated fullscreen"), R.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), R.id = j;
						var me;
						R.tabIndex = (me = n.tabindex) !== null && me !== void 0 ? me : 0, R.title = "Widget containing a Cloudflare security challenge", t.appendChild(R);
						var ge, nt = (ge = n["response-field"]) !== null && ge !== void 0 ? ge : !0;
						if (nt) {
							var ae = document.createElement("input");
							ae.type = "hidden";
							var ye;
							if (ae.name = (ye = n["response-field-name"]) !== null && ye !== void 0 ? ye : vt, ae.id = "".concat(j, "_response"), t.appendChild(ae), typeof n["response-field-name"] != "string" && xt(y)) {
								var ne = document.createElement("input");
								ne.type = "hidden", ne.name = pt, ne.id = "".concat(j, "_legacy_response"), t.appendChild(ne)
							}
						}
						if (fe) {
							var ie = document.createElement("input");
							ie.type = "hidden", ie.name = mt, ie.id = "".concat(j, "_g_response"), t.appendChild(ie)
						}
						return j
					}
				}
			},
			_ = function() {
				var c, o = -1,
					t = !0,
					i = !1,
					l = void 0;
				try {
					for (var n = d[Symbol.iterator](), v; !(t = (v = n.next()).done); t = !0) {
						var x = De(v.value, 2),
							T = x[0],
							y = x[1];
						o < y.idx && (c = T, o = y.idx)
					}
				} catch (b) {
					i = !0, l = b
				} finally {
					try {
						!t && n.return != null && n.return()
					} finally {
						if (i) throw l
					}
				}
				if (o === -1) {
					f("Could not find widget", 43778);
					return
				}
				return c
			},
			d = new Map,
			O = 0,
			N = function(c) {
				var o = c.data;
				if (o.source === "cloudflare-challenge") {
					if (!_t(c)) {
						f("Ignored message from wrong origin: " + c.origin, 3073);
						return
					}
					if (!(!o.widgetId || !d.has(o.widgetId))) {
						var t = K(o.widgetId),
							i = d.get(o.widgetId);
						if (!(!t || !i)) switch (o.event) {
							case "init": {
								var l = document.getElementById(t);
								if (!l) {
									f("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3074);
									return
								}
								i.mode = o.mode, i.mode === S.INVISIBLE && i.params["refresh-expired"] === U.MANUAL && m("refresh-expired=manual is impossible in invisible mode, consider using '".concat(U.AUTO, "' or '").concat(U.NEVER, "'"));
								var n = new Map;
								Object.keys(o.translationData).forEach(function(te) {
									n.set(te, o.translationData[te])
								}), yt(l, n), i.params.appearance === P.ALWAYS ? Se(l, i) : $e(l), l.style.display = "";
								break
							}
							case "reject": {
								var v = document.getElementById(t);
								if (!v) {
									f("Cannot initialize Widget, Element not found (#".concat(t, ")."), 3075);
									return
								}
								if (o.reason === "outdated_browser") {
									var x = i.cbUnsupported;
									x && x()
								}
								break
							}
							case "complete": {
								i.rcV = V, i.response = o.token, tt(t, o.token);
								var T = i.cbSuccess;
								T && T(o.token);
								break
							}
							case "fail": {
								o.rcV && (i.rcV = o.rcV), Re(t);
								var y = i.cbError;
								if (y) {
									var b;
									y((b = o.code) !== null && b !== void 0 ? b : "undefined_error") || (o.code && m(o.code), e(i, t))
								} else o.code ? (e(i, t), f(o.code, 3076)) : e(i, t);
								break
							}
							case "tokenExpired": {
								var C = o.token;
								i.isExpired = !0;
								var E = i.cbExpired;
								E && E(C), i.params["refresh-expired"] === U.AUTO && !i.isResetting && u(t);
								break
							}
							case "interactiveTimeout": {
								i.rcV = V, Re(t);
								var w = i.cbTimeout;
								w && w();
								break
							}
							case "refreshRequest": {
								i.rcV = V, u(o.widgetId);
								break
							}
							case "interactiveBegin": {
								var F = document.getElementById(t);
								if (!F) {
									f("Cannot layout widget, Element not found (#".concat(t, ")."), 3076);
									return
								}
								var H = i.cbBeforeInteractive;
								H && H(), i.params.appearance === P.INTERACTION_ONLY && Se(F, i);
								break
							}
							case "interactiveEnd": {
								var de = document.getElementById(t);
								if (!de) {
									f("Cannot unlayout widget, Element not found (#".concat(t, ")."), 3077);
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
								var G, X, Y = document.querySelector("#".concat(t));
								if (!Y) {
									f("Received state for an unknown widget: ".concat(o.widgetId), 3078);
									return
								}
								i.isResetting = !1, (G = Y.contentWindow) === null || G === void 0 || G.postMessage({
									source: "cloudflare-challenge",
									widgetId: o.widgetId,
									event: "extraParams",
									action: i.action,
									cData: i.cData,
									chlPageData: i.chlPageData,
									rcV: i.rcV,
									ch: "e6489737",
									url: ht(),
									retry: i.params.retry,
									"retry-interval": i.params["retry-interval"],
									"refresh-expired": i.params["refresh-expired"],
									language: i.params.language,
									execution: i.params.execution,
									appearance: i.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": (X = document.body.parentNode) === null || X === void 0 ? void 0 : X.getAttributeNames()
									},
									turnstileAge: +Date.now() - lt,
									widgetAge: +Date.now() - i.widgetStartTime
								}, "*"), a(i, o.widgetId, Y), i.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", N);

		function I(g) {
			if (typeof g == "string") {
				var c = Ye(g);
				if (c && d.has(c)) return c;
				try {
					var o = document.querySelector(g);
					return o ? I(o) : null
				} catch (i) {
					return null
				}
			}
			if (h(g, HTMLElement)) {
				var t = g.querySelector("iframe");
				return t ? Ye(t.id) : null
			}
			return g || d.size === 0 ? null : d.keys().next().value
		}
		return {
			ready: function(c) {
				if (Je && (m("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), f("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().", 3857)), typeof c != "function" && f('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : A(c), '"'), 3841), c(), typeof c != "function" && f('Invalid value for parameter "callback", you must provide a callback function as argument to ready()', 3842), et) {
					c();
					return
				}
				ke.push(c)
			},
			implicitRender: Ke,
			execute: function(c, o) {
				var t = I(c);
				if (!t) {
					if (o === void 0) {
						f("Please provide 2 parameters to execute: container and parameters", 43521);
						return
					}
					var i = p(c, o);
					if (!i) {
						f("Failed to render widget", 43522);
						return
					}
					t = i
				}
				var l = d.get(t);
				if (l) {
					var n = K(t);
					if (l.response) {
						m("Call to execute() on a widget that was already executed (".concat(n, "), consider using reset() before execute() to obtain a fresh token")), l.cbSuccess && l.cbSuccess(l.response);
						return
					}
					l.isStale && u(n), l.isExpired && m("Call to execute on a expired-widget (".concat(n, "), consider using reset() before")), l.msgQueue.push(z.EXECUTE), l.isExecuted = !0;
					var v = document.querySelector("#".concat(n));
					if (!v) {
						f("Widget ".concat(n, " to execute was not found"), 43522);
						return
					}
					l.isInitialized && a(l, t, v), l.params.appearance === P.EXECUTE && Se(v, l)
				}
			},
			render: p,
			reset: u,
			remove: s,
			getResponse: function(c) {
				var o;
				if (typeof c == "undefined") {
					var t = _();
					if (t) {
						var i, l = d.get(t);
						return l != null && l.isExpired && m("Call to getResponse on a widget that expired, consider refreshing the widget."), (i = d.get(t)) === null || i === void 0 ? void 0 : i.response
					} else f("Could not find a widget", 43794)
				}
				var n = I(c);
				if (!n) {
					f("Could not find widget for provided container", 43778);
					return
				}
				return (o = d.get(n)) === null || o === void 0 ? void 0 : o.response
			},
			isExpired: function(c) {
				var o;
				if (typeof c == "undefined") {
					var t = _();
					if (t) {
						var i, l;
						return (l = (i = d.get(t)) === null || i === void 0 ? void 0 : i.isExpired) !== null && l !== void 0 ? l : !1
					} else f("Could not find a widget", 43794)
				}
				var n = I(c);
				if (!n) return f("Could not find widget for provided container", 43778), !1;
				var v;
				return (v = (o = d.get(n)) === null || o === void 0 ? void 0 : o.isExpired) !== null && v !== void 0 ? v : !1
			}
		}
	}();

	function bt(e) {
		var r = e.getAttribute("data-sitekey"),
			a = {
				sitekey: r
			},
			u = e.getAttribute("data-tabindex");
		u && (a.tabindex = parseInt(u, 10));
		var s = e.getAttribute("data-theme");
		s && (xe(s) ? a.theme = s : m('Unknown data-theme value: "'.concat(s, '"')));
		var p = e.getAttribute("data-size");
		if (p && (Ee(p) ? a.size = p : m('Unknown data-size value: "'.concat(p, '"'))), !1) var _;
		var d = e.getAttribute("data-action");
		typeof d == "string" && (a.action = d);
		var O = e.getAttribute("data-cdata");
		typeof O == "string" && (a.cData = O);
		var N = e.getAttribute("data-retry");
		N && (he(N) ? a.retry = N : m('Invalid data-retry value: "'.concat(N, ", expected either 'never' or 'auto'\"")));
		var I = e.getAttribute("data-retry-interval");
		if (I) {
			var g = parseInt(I, 10);
			be(g) ? a["retry-interval"] = g : m('Invalid data-retry-interval value: "'.concat(I, ', expected an integer value > 0 and < 900000"'))
		}
		var c = e.getAttribute("data-refresh-expired");
		c && (we(c) ? a["refresh-expired"] = c : m('Unknown data-refresh-expired value: "'.concat(c, ", expected either: 'never', 'auto' or 'manual'.")));
		var o = e.getAttribute("data-language");
		o && (Ae(o) ? a.language = o : m('Invalid data-language value: "'.concat(o, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var t = e.getAttribute("data-error-callback");
		t && window[t] && (a["error-callback"] = window[t]);
		var i = e.getAttribute("data-unsupported-callback");
		i && window[i] && t && window[t] && (a["unsupported-callback"] = window[t]);
		var l = e.getAttribute("data-callback");
		l && window[l] && (a.callback = window[l]);
		var n = e.getAttribute("data-expired-callback");
		n && window[n] && (a["expired-callback"] = window[n]);
		var v = e.getAttribute("data-timeout-callback");
		v && window[v] && (a["timeout-callback"] = window[v]);
		var x = e.getAttribute("data-after-interactive-callback");
		x && window[x] && (a["after-interactive-callback"] = window[x]);
		var T = e.getAttribute("data-before-interactive-callback");
		T && window[T] && (a["before-interactive-callback"] = window[T]);
		var y, b = (y = e.getAttribute("data-response-field")) !== null && y !== void 0 ? y : "true";
		a["response-field"] = b === "true";
		var C = e.getAttribute("data-response-field-name");
		C && (a["response-field-name"] = C);
		var E = e.getAttribute("data-execution");
		E && (Te(E) ? a.execution = E : m('Unknown data-execution value: "'.concat(E, ", expected either: 'render' or 'execute'.")));
		var w = e.getAttribute("data-appearance");
		return w && (Ie(w) ? a.appearance = w : m('Unknown data-appearance value: "'.concat(w, ", expected either: 'always', 'execute', or 'interaction-only'."))), a
	}

	function Et() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (h(r, HTMLScriptElement) && e.test(r.src)) return r;
		for (var a = document.querySelectorAll("script"), u = 0, s; s = a[u]; u++)
			if (h(s, HTMLScriptElement) && e.test(s.src)) return s
	}

	function wt() {
		var e = Et();
		if (!e) return f("Could not find Turnstile script tag, some features may not be available", 43777), null;
		(e.async || e.defer) && (Je = !0);
		var r = e.src,
			a = r.split("?");
		return a.length > 1 ? new URLSearchParams(a[1]) : new URLSearchParams
	}
	var B = wt();
	B && (Q = B.get("compat"), (Q == null ? void 0 : Q.toLowerCase()) === "recaptcha" ? window.grecaptcha ? m("grecaptcha is already defined. The compatibility layer will not be enabled") : (m("Compatibility layer enabled"), fe = !0, window.grecaptcha = Oe) : Q !== null && m('Unknown value for api.js?compat: "'.concat(Q, '", ignoring')), B.forEach(function(e, r) {
		L(["onload", "compat", "render"], r) || m('Unknown parameter passed to api.js: "?'.concat(r, '=...", ignoring'))
	}), k = B.get("onload"), k && setTimeout(function() {
		typeof window[k] == "function" ? window[k]() : (m("Unable to find onload callback '".concat(k, "' immediately after loading, expected 'function', got '").concat(A(window[k]), "'")), setTimeout(function() {
			typeof window[k] == "function" ? window[k]() : m("Unable to find onload callback '".concat(k, "' after 1 second, expected 'function', got '").concat(A(window[k]), "'"))
		}, 1e3))
	}, 0));
	var Q, k, At = "turnstile" in window;
	At ? m("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Oe, (B == null ? void 0 : B.get("render")) !== "explicit" && ke.push(Ke), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Xe, 0) : window.addEventListener("DOMContentLoaded", Xe));
})();