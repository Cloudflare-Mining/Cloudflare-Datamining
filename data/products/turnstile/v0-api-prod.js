"use strict";
(function() {
	function R(e, o) {
		return o != null && typeof Symbol != "undefined" && o[Symbol.hasInstance] ? !!o[Symbol.hasInstance](e) : R(e, o)
	}

	function Ie(e) {
		if (Array.isArray(e)) return e
	}

	function _e(e, o) {
		var n = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
		if (n != null) {
			var s = [],
				d = !0,
				h = !1,
				f, M;
			try {
				for (n = n.call(e); !(d = (f = n.next()).done) && (s.push(f.value), !(o && s.length === o)); d = !0);
			} catch (z) {
				h = !0, M = z
			} finally {
				try {
					!d && n.return != null && n.return()
				} finally {
					if (h) throw M
				}
			}
			return s
		}
	}

	function we() {
		throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
	}

	function le(e, o) {
		(o == null || o > e.length) && (o = e.length);
		for (var n = 0, s = new Array(o); n < o; n++) s[n] = e[n];
		return s
	}

	function Te(e, o) {
		if (e) {
			if (typeof e == "string") return le(e, o);
			var n = Object.prototype.toString.call(e).slice(8, -1);
			if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(n);
			if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return le(e, o)
		}
	}

	function Re(e, o) {
		return Ie(e) || _e(e, o) || Te(e, o) || we()
	}

	function S(e) {
		"@swc/helpers - typeof";
		return e && typeof Symbol != "undefined" && e.constructor === Symbol ? "symbol" : typeof e
	}

	function N(e, o) {
		return e.indexOf(o) !== -1
	}

	function se(e) {
		return N(["auto", "dark", "light"], e)
	}

	function de(e) {
		return N(["auto", "never"], e)
	}

	function fe(e) {
		return e > 0 && e < 9e5
	}
	var He = /^[0-9A-Za-z_-]{3,100}$/;

	function ke(e) {
		return He.test(e)
	}
	var je = /^[a-z0-9_-]{0,32}$/i;

	function Se(e) {
		return e === void 0 ? !0 : typeof e == "string" && je.test(e)
	}
	var qe = /^[a-z0-9_\-=]{0,255}$/i;

	function Ne(e) {
		return e === void 0 ? !0 : typeof e == "string" && qe.test(e)
	}

	function ve(e) {
		return N(["normal", "compact", "invisible"], e)
	}

	function pe(e) {
		return N(["auto", "manual", "never"], e)
	}
	var Qe = /^[a-z]{2}(-[A-Z]{2})?$/;

	function me(e) {
		return e === "auto" || Qe.test(e)
	}

	function ge(e) {
		return N(["always", "execute", "interaction-only"], e)
	}

	function ye(e) {
		return N(["render", "execute"], e)
	}
	var C;
	(function(e) {
		e.MANAGED = "managed", e.NON_INTERACTIVE = "non-interactive", e.INVISIBLE = "invisible"
	})(C || (C = {}));
	var L;
	(function(e) {
		e.NORMAL = "normal", e.COMPACT = "compact", e.INVISIBLE = "invisible"
	})(L || (L = {}));
	var te;
	(function(e) {
		e.AUTO = "auto", e.LIGHT = "light", e.DARK = "dark"
	})(te || (te = {}));
	var G;
	(function(e) {
		e.NEVER = "never", e.AUTO = "auto"
	})(G || (G = {}));
	var X;
	(function(e) {
		e.NEVER = "never", e.MANUAL = "manual", e.AUTO = "auto"
	})(X || (X = {}));
	var O;
	(function(e) {
		e.ALWAYS = "always", e.EXECUTE = "execute", e.INTERACTION_ONLY = "interaction-only"
	})(O || (O = {}));
	var W;
	(function(e) {
		e.RENDER = "render", e.EXECUTE = "execute"
	})(W || (W = {}));
	var U;
	(function(e) {
		e.EXECUTE = "execute"
	})(U || (U = {}));
	var D = "0/0";
	var Ge = ".cf-turnstile",
		Xe = ".cf-challenge",
		Ye = ".g-recaptcha",
		$e = "cf_challenge_response",
		Ze = "cf-turnstile-response",
		Je = "g-recaptcha-response",
		Ke = 8e3,
		ae = !1,
		Ue = !1;

	function u(e) {
		var o = "[Cloudflare Turnstile] ".concat(e, ".");
		throw console.error(o), new Error(o)
	}

	function m(e) {
		console.warn("[Cloudflare Turnstile] ".concat(e, "."))
	}

	function he(e) {
		ze(e, "")
	}

	function De() {
		var e = [Ge, Xe];
		ae && e.push(Ye), document.querySelectorAll(e.join(", ")).forEach(function(o) {
			return Ee.render(o)
		})
	}
	var be = [],
		Pe = !1;

	function Ce() {
		Pe = !0;
		var e = !0,
			o = !1,
			n = void 0;
		try {
			for (var s = be[Symbol.iterator](), d; !(e = (d = s.next()).done); e = !0) {
				var h = d.value;
				h()
			}
		} catch (f) {
			o = !0, n = f
		} finally {
			try {
				!e && s.return != null && s.return()
			} finally {
				if (o) throw n
			}
		}
	}
	var re = "cf-chl-widget-";

	function Le(e) {
		return e.startsWith(re) ? e.substring(re.length) : null
	}

	function Y(e) {
		return "".concat(re).concat(e)
	}

	function ze(e, o) {
		var n = document.getElementById("".concat(e, "_response"));
		n !== null && R(n, HTMLInputElement) && (n.value = o);
		var s = document.getElementById("".concat(e, "_legacy_response"));
		if (s !== null && R(s, HTMLInputElement) && (s.value = o), ae) {
			var d = document.getElementById("".concat(e, "_g_response"));
			d !== null && R(d, HTMLInputElement) && (d.value = o)
		}
	}

	function xe(e, o) {
		var n, s = (n = o.params.size) !== null && n !== void 0 ? n : "normal",
			d = o.mode;
		switch (d) {
			case C.NON_INTERACTIVE:
			case C.MANAGED:
				switch (s) {
					case L.COMPACT:
						e.style.width = "130px", e.style.height = "120px";
						break;
					case L.INVISIBLE:
						u('Invalid value for parameter "size", expected "'.concat(L.COMPACT, '" or "').concat(L.NORMAL, '", got "').concat(s, '"'));
					case L.NORMAL:
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case C.INVISIBLE:
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute", e.style.visibility = "hidden", e.setAttribute("aria-hidden", "true");
				break;
			default:
				u('Invalid value for parameter "mode", expected "'.concat(C.NON_INTERACTIVE, '", "').concat(C.MANAGED, '" or "').concat(C.INVISIBLE, '", got "').concat(d, '"'));
				return
		}
	}

	function Me(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Oe(e, o, n, s) {
		var d = "https://challenges.cloudflare.com";
		if (!1) var h;
		var f = "h/".concat("b", "/");
		return "".concat(d, "/cdn-cgi/challenge-platform/").concat(f, "turnstile/if/ov2/av0/rcv").concat(s, "/").concat(e, "/").concat(o, "/").concat(n.theme, "/").concat(n.size)
	}

	function et(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function tt(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function rt() {
		for (var e = window; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Ee = function() {
		var e = function(c, i) {
				if (c.params.retry === G.AUTO) {
					c.msgQueue.push(U.EXECUTE);
					var t, r = 1e3 * 2 + ((t = c.params["retry-interval"]) !== null && t !== void 0 ? t : 0);
					c.retryTimeout = window.setTimeout(function() {
						s(i)
					}, r)
				}
			},
			o = function() {
				var c;
				do {
					c = "";
					for (var i = "abcdefghijklmnopqrstuvwxyz0123456789", t = i.length, r = 0; r < 5; r++) c += i.charAt(Math.floor(Math.random() * t))
				} while (f.has(c));
				return c
			},
			n = function(c, i, t) {
				for (; c.msgQueue.length;) {
					var r, l = c.msgQueue.pop();
					(r = t.contentWindow) === null || r === void 0 || r.postMessage({
						source: "cloudflare-challenge",
						widgetId: i,
						event: l
					}, "*")
				}
			},
			s = function(c) {
				var i = _(c);
				if (!i) {
					u("Nothing to reset found for provided container");
					return
				}
				var t = f.get(i);
				if (t) {
					t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isInitialized = !1, t.params.execution === W.RENDER && t.msgQueue.push(U.EXECUTE);
					var r = Y(i),
						l = document.querySelector("#".concat(r));
					if (!r || !l) {
						u("Widget ".concat(i, " to reset was not found."));
						return
					}
					if (t.params.appearance === O.INTERACTION_ONLY && Me(l), t.params.sitekey === null) throw new Error("Unexpected Error: Sitekey is null");
					var a;
					l.src = Oe(i, t.params.sitekey, t.params, (a = t.rcV) !== null && a !== void 0 ? a : D), he(r), t.retryTimeout && window.clearTimeout(t.retryTimeout)
				} else {
					u("Widget ".concat(i, " to reset was not found."));
					return
				}
			},
			d = function(c) {
				var i, t = _(c);
				if (!t || !f.has(t)) {
					m("Nothing to remove found for the provided container");
					return
				}
				var r = Y(t),
					l = ["iframe#".concat(r), "input#".concat(r, "_response"), "input#".concat(r, "_legacy_response"), "input#".concat(r, "_g_response")];
				document.querySelectorAll(l.join(", ")).forEach(function(p) {
					return p.remove()
				});
				var a = (i = f.get(t)) === null || i === void 0 ? void 0 : i.retryTimeout;
				a && window.clearTimeout(a), f.delete(t)
			},
			h = function(c, i) {
				var t;
				if (typeof c == "string") try {
						var r = document.querySelector(c);
						if (!r) {
							u('Unable to find a container for "'.concat(c, '"'));
							return
						}
						t = r
					} catch (ct) {
						u('Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "'.concat(c, '"'));
						return
					} else if (R(c, HTMLElement)) t = c;
					else {
						u('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} var l = at(t);
				if (l) {
					var a = Object.assign(l, i),
						p = a.action,
						x = a.cData,
						E = a.chlPageData,
						g = a.sitekey,
						A;
					a.theme = (A = a.theme) !== null && A !== void 0 ? A : te.AUTO;
					var w;
					a.retry = (w = a.retry) !== null && w !== void 0 ? w : G.AUTO;
					var I;
					a.execution = (I = a.execution) !== null && I !== void 0 ? I : W.RENDER;
					var y;
					a.appearance = (y = a.appearance) !== null && y !== void 0 ? y : O.ALWAYS;
					var b;
					a["retry-interval"] = (b = a["retry-interval"]) !== null && b !== void 0 ? b : Ke;
					var F;
					a.size = (F = a.size) !== null && F !== void 0 ? F : L.NORMAL;
					var $ = a.callback,
						H = a["expired-callback"],
						j = a["timeout-callback"],
						q = a["after-interactive-callback"],
						Ve = a["before-interactive-callback"],
						We = a["error-callback"],
						Be = a["unsupported-callback"];
					if (typeof g != "string") {
						u('Invalid or missing type for parameter "sitekey", expected "string", got "'.concat(typeof g == "undefined" ? "undefined" : S(g), '"'));
						return
					}
					if (!ke(g)) {
						u('Invalid input for parameter "sitekey", got "'.concat(g, '"'));
						return
					}
					if (!ve(a.size)) {
						u('Invalid type for parameter "size", expected normal|compact, got "'.concat(a.size, '" ').concat(S(a.size)));
						return
					}
					if (!se(a.theme)) {
						u('Invalid type for parameter "theme", expected dark|light|auto, got "'.concat(a.theme, '" ').concat(S(a.theme)));
						return
					}
					if (!de(a.retry)) {
						u('Invalid type for parameter "retry", expected never|auto, got "'.concat(a.retry, '" ').concat(S(a.retry)));
						return
					}
					if (a.language || (a.language = "auto"), !me(a.language)) {
						u('Invalid data-language value: "'.concat(a.language, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)"));
						return
					}
					if (!ge(a.appearance)) {
						u('Unknown data-appearance value: "'.concat(a.appearance, ", expected either: 'always', 'execute', or 'interaction-only'."));
						return
					}
					if (!ye(a.execution)) {
						u('Unknown data-execution value: "'.concat(a.execution, ", expected either: 'render' or 'execute'."));
						return
					}
					if (!fe(a["retry-interval"])) {
						m('Invalid data-retry-interval value: "'.concat(a["retry-interval"], ', expected an integer value > 0 and < 900000"'));
						return
					}
					var ne, Q = (ne = a["refresh-expired"]) !== null && ne !== void 0 ? ne : X.AUTO;
					if (pe(Q)) a["refresh-expired"] = Q;
					else {
						u('Invalid type for parameter "refresh-expired", expected never|manual|auto, got "'.concat(Q, '" ').concat(typeof Q == "undefined" ? "undefined" : S(Q)));
						return
					}
					var ie = t.getElementsByTagName("iframe")[0];
					ie != null && ie.id.startsWith(re) && d(t);
					var T = document.createElement("iframe");
					if (!Se(p)) {
						u('Invalid input for optional parameter "action", got "'.concat(p, '"'));
						return
					}
					if (!Ne(x)) {
						u('Invalid input for optional parameter "cData", got "'.concat(x, '"'));
						return
					}
					var Z = o(),
						V = Y(Z);
					if (!(!Z || !V)) {
						var Ae = [];
						a.execution === W.RENDER && Ae.push(U.EXECUTE), M++, f.set(Z, {
							idx: M,
							action: p,
							cData: x,
							chlPageData: E,
							cbSuccess: $,
							cbError: We,
							cbExpired: H,
							cbTimeout: j,
							cbUnsupported: Be,
							cbAfterInteractive: q,
							cbBeforeInteractive: Ve,
							params: a,
							isResetting: !1,
							isInitialized: !1,
							msgQueue: Ae,
							rcV: D
						}), T.style.display = "none", T.style.border = "none", T.style.overflow = "hidden", T.setAttribute("src", Oe(Z, g, a, D)), T.setAttribute("allow", "cross-origin-isolated"), T.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups"), T.id = V;
						var oe;
						T.tabIndex = (oe = a.tabindex) !== null && oe !== void 0 ? oe : 0, T.title = "Widget containing a Cloudflare security challenge", t.appendChild(T);
						var ce, Fe = (ce = a["response-field"]) !== null && ce !== void 0 ? ce : !0;
						if (Fe) {
							var J = document.createElement("input");
							J.type = "hidden";
							var ue;
							if (J.name = (ue = a["response-field-name"]) !== null && ue !== void 0 ? ue : Ze, J.id = "".concat(V, "_response"), t.appendChild(J), typeof a["response-field-name"] != "string" && tt(g)) {
								var K = document.createElement("input");
								K.type = "hidden", K.name = $e, K.id = "".concat(V, "_legacy_response"), t.appendChild(K)
							}
						}
						if (ae) {
							var ee = document.createElement("input");
							ee.type = "hidden", ee.name = Je, ee.id = "".concat(V, "_g_response"), t.appendChild(ee)
						}
						return V
					}
				}
			},
			f = new Map,
			M = 0,
			z = function(c) {
				var i = c.data;
				if (i.source === "cloudflare-challenge") {
					if (!et(c)) {
						u("Ignored message from wrong origin: " + c.origin);
						return
					}
					if (!(!i.widgetId || !f.has(i.widgetId))) {
						var t = Y(i.widgetId),
							r = f.get(i.widgetId);
						if (!(!t || !r)) switch (i.event) {
							case "init": {
								var l = document.getElementById(t);
								if (!l) {
									u("Cannot initialize Widget, Element not found (#".concat(t, ")."));
									return
								}
								r.mode = i.mode, r.params.appearance === O.ALWAYS ? xe(l, r) : Me(l), l.style.display = "";
								break
							}
							case "reject": {
								var a = document.getElementById(t);
								if (!a) {
									u("Cannot initialize Widget, Element not found (#".concat(t, ")."));
									return
								}
								if (i.reason === "outdated_browser") {
									var p = r.cbUnsupported;
									p && p()
								}
								break
							}
							case "complete": {
								r.rcV = D, r.response = i.token, ze(t, i.token);
								var x = r.cbSuccess;
								x && x(i.token);
								break
							}
							case "fail": {
								i.rcV && (r.rcV = i.rcV), he(t);
								var E = r.cbError;
								if (E) {
									var g;
									E((g = i.code) !== null && g !== void 0 ? g : "undefined_error") || (i.code && m(i.code), e(r, t))
								} else i.code ? (e(r, t), u(i.code)) : e(r, t);
								break
							}
							case "tokenExpired": {
								var A = i.token,
									w = r.cbExpired;
								w && w(A), r.params["refresh-expired"] === X.AUTO && !r.isResetting && s(t);
								break
							}
							case "interactiveTimeout": {
								r.rcV = D, he(t);
								var I = r.cbTimeout;
								I && I();
								break
							}
							case "refreshRequest": {
								r.rcV = D, s(i.widgetId);
								break
							}
							case "interactiveBegin": {
								var y = document.getElementById(t);
								if (!y) {
									u("Cannot layout widget, Element not found (#".concat(t, ")."));
									return
								}
								var b = r.cbBeforeInteractive;
								b && b(), r.params.appearance === O.INTERACTION_ONLY && xe(y, r);
								break
							}
							case "interactiveEnd": {
								var F = document.getElementById(t);
								if (!F) {
									u("Cannot unlayout widget, Element not found (#".concat(t, ")."));
									return
								}
								var $ = r.cbAfterInteractive;
								$ && $();
								break
							}
							case "requestExtraParams": {
								var H, j, q = document.querySelector("#".concat(t));
								if (!q) {
									u("Received state for an unknown widget: ".concat(i.widgetId));
									return
								}
								r.isResetting = !1, (H = q.contentWindow) === null || H === void 0 || H.postMessage({
									source: "cloudflare-challenge",
									widgetId: i.widgetId,
									event: "extraParams",
									action: r.action,
									cData: r.cData,
									chlPageData: r.chlPageData,
									rcV: r.rcV,
									ch: "ca8ddc9e",
									url: rt(),
									retry: r.params.retry,
									"retry-interval": r.params["retry-interval"],
									"refresh-expired": r.params["refresh-expired"],
									language: r.params.language,
									execution: r.params.execution,
									appearance: r.params.appearance,
									wPr: {
										"w.iW": window.innerWidth,
										"ht.atrs": (j = document.body.parentNode) === null || j === void 0 ? void 0 : j.getAttributeNames()
									}
								}, "*"), n(r, i.widgetId, q), r.isInitialized = !0;
								break
							}
						}
					}
				}
			};
		window.addEventListener("message", z);

		function _(v) {
			if (typeof v == "string") {
				var c = Le(v);
				if (c && f.has(c)) return c;
				try {
					var i = document.querySelector(v);
					return i ? _(i) : null
				} catch (r) {
					return null
				}
			}
			if (R(v, HTMLElement)) {
				var t = v.querySelector("iframe");
				return t ? Le(t.id) : null
			}
			return v || f.size === 0 ? null : f.keys().next().value
		}
		return {
			ready: function(c) {
				if (Ue) throw m("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof c != "function" && u('turnstile.ready() expected a "function" argument, got "'.concat(typeof c == "undefined" ? "undefined" : S(c), '"')), c(), typeof c != "function" && u('Invalid value for parameter "callback", you must provide a callback function as argument to ready()'), Pe) {
					c();
					return
				}
				be.push(c)
			},
			implicitRender: De,
			execute: function(c, i) {
				var t = _(c);
				if (!t) {
					if (i === void 0) {
						u("Please provide 2 parameters to execute: container and parameters");
						return
					}
					var r = h(c, i);
					if (!r) {
						u("Failed to render widget");
						return
					}
					t = r
				}
				var l = f.get(t);
				if (l) {
					if (l.response) {
						l.cbSuccess && l.cbSuccess(l.response);
						return
					}
					l.msgQueue.push(U.EXECUTE);
					var a = Y(t),
						p = document.querySelector("#".concat(a));
					if (!p) {
						u("Widget ".concat(a, " to execute was not found"));
						return
					}
					l.isInitialized && n(l, t, p), l.params.appearance === O.EXECUTE && xe(p, l)
				}
			},
			render: h,
			reset: s,
			remove: d,
			getResponse: function(c) {
				var i;
				if (typeof c == "undefined") {
					var t, r, l = -1,
						a = !0,
						p = !1,
						x = void 0;
					try {
						for (var E = f[Symbol.iterator](), g; !(a = (g = E.next()).done); a = !0) {
							var A = Re(g.value, 2),
								w = A[0],
								I = A[1];
							l < I.idx && (r = w, l = I.idx)
						}
					} catch (b) {
						p = !0, x = b
					} finally {
						try {
							!a && E.return != null && E.return()
						} finally {
							if (p) throw x
						}
					}
					if (l === -1) {
						u("Could not find widget");
						return
					}
					return (t = f.get(r)) === null || t === void 0 ? void 0 : t.response
				}
				var y = _(c);
				if (!y) {
					u("Could not find widget for provided container");
					return
				}
				return (i = f.get(y)) === null || i === void 0 ? void 0 : i.response
			}
		}
	}();

	function at(e) {
		var o = e.getAttribute("data-sitekey"),
			n = {
				sitekey: o
			},
			s = e.getAttribute("data-tabindex");
		s && (n.tabindex = parseInt(s, 10));
		var d = e.getAttribute("data-theme");
		d && (se(d) ? n.theme = d : m('Unknown data-theme value: "'.concat(d, '"')));
		var h = e.getAttribute("data-size");
		if (h && (ve(h) ? n.size = h : m('Unknown data-size value: "'.concat(h, '"'))), !1) var f;
		var M = e.getAttribute("data-action");
		typeof M == "string" && (n.action = M);
		var z = e.getAttribute("data-cdata");
		typeof z == "string" && (n.cData = z);
		var _ = e.getAttribute("data-retry");
		_ && (de(_) ? n.retry = _ : m('Invalid data-retry value: "'.concat(_, ", expected either 'never' or 'auto'\"")));
		var v = e.getAttribute("data-retry-interval");
		if (v) {
			var c = parseInt(v, 10);
			fe(c) ? n["retry-interval"] = c : m('Invalid data-retry-interval value: "'.concat(v, ', expected an integer value > 0 and < 900000"'))
		}
		var i = e.getAttribute("data-refresh-expired");
		i && (pe(i) ? n["refresh-expired"] = i : m('Unknown data-refresh-expired value: "'.concat(i, ", expected either: 'never', 'auto' or 'manual'.")));
		var t = e.getAttribute("data-language");
		t && (me(t) ? n.language = t : m('Invalid data-language value: "'.concat(t, ", expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)")));
		var r = e.getAttribute("data-error-callback");
		r && window[r] && (n["error-callback"] = window[r]);
		var l = e.getAttribute("data-unsupported-callback");
		l && window[l] && r && window[r] && (n["unsupported-callback"] = window[r]);
		var a = e.getAttribute("data-callback");
		a && window[a] && (n.callback = window[a]);
		var p = e.getAttribute("data-expired-callback");
		p && window[p] && (n["expired-callback"] = window[p]);
		var x = e.getAttribute("data-timeout-callback");
		x && window[x] && (n["timeout-callback"] = window[x]);
		var E = e.getAttribute("data-after-interactive-callback");
		E && window[E] && (n["after-interactive-callback"] = window[E]);
		var g = e.getAttribute("data-before-interactive-callback");
		g && window[g] && (n["before-interactive-callback"] = window[g]);
		var A, w = (A = e.getAttribute("data-response-field")) !== null && A !== void 0 ? A : "true";
		n["response-field"] = w === "true";
		var I = e.getAttribute("data-response-field-name");
		I && (n["response-field-name"] = I);
		var y = e.getAttribute("data-execution");
		y && (ye(y) ? n.execution = y : m('Unknown data-execution value: "'.concat(y, ", expected either: 'render' or 'execute'.")));
		var b = e.getAttribute("data-appearance");
		return b && (ge(b) ? n.appearance = b : m('Unknown data-appearance value: "'.concat(b, ", expected either: 'always', 'execute', or 'interaction-only'."))), n
	}

	function nt() {
		var e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			o = document.currentScript;
		if (R(o, HTMLScriptElement) && e.test(o.src)) return o;
		for (var n = document.querySelectorAll("script"), s = 0, d; d = n[s]; s++)
			if (R(d, HTMLScriptElement) && e.test(d.src)) return d
	}

	function it() {
		var e = nt();
		if (!e) return u("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (Ue = !0);
		var o = e.src,
			n = o.split("?");
		return n.length > 1 ? new URLSearchParams(n[1]) : new URLSearchParams
	}
	var P = it();
	P && (B = P.get("compat"), (B == null ? void 0 : B.toLowerCase()) === "recaptcha" ? window.grecaptcha ? m("grecaptcha is already defined. The compatibility layer will not be enabled") : (m("Compatibility layer enabled"), ae = !0, window.grecaptcha = Ee) : B !== null && m('Unknown value for api.js?compat: "'.concat(B, '", ignoring')), P.forEach(function(e, o) {
		N(["onload", "compat", "render"], o) || m('Unknown parameter passed to api.js: "?'.concat(o, '=...", ignoring'))
	}), k = P.get("onload"), k && setTimeout(function() {
		typeof window[k] == "function" ? window[k]() : (m("Unable to find onload callback '".concat(k, "' immediately after loading, expected 'function', got '").concat(S(window[k]), "'")), setTimeout(function() {
			typeof window[k] == "function" ? window[k]() : m("Unable to find onload callback '".concat(k, "' after 1 second, expected 'function', got '").concat(S(window[k]), "'"))
		}, 1e3))
	}, 0));
	var B, k, ot = "turnstile" in window;
	ot ? m("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Ee, (P == null ? void 0 : P.get("render")) !== "explicit" && be.push(De), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Ce, 0) : window.addEventListener("DOMContentLoaded", Ce));
})();