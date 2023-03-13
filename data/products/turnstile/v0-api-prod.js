(() => {
	function E(e, l) {
		return e.indexOf(l) !== -1
	}

	function S(e) {
		return E(["auto", "dark", "light"], e)
	}

	function W(e) {
		return E(["auto", "never"], e)
	}

	function O(e) {
		return e > 0 && e < 9e5
	}
	var Ee = /^[0-9A-Za-z_-]{3,100}$/;

	function ie(e) {
		return Ee.test(e)
	}
	var ye = /^[a-z0-9_-]{0,32}$/i;

	function ae(e) {
		return ye.test(e)
	}
	var he = /^[a-z0-9_-]{0,255}$/i;

	function oe(e) {
		return he.test(e)
	}

	function D(e) {
		return E(["normal", "compact", "invisible"], e)
	}

	function P(e) {
		return E(["auto", "manual", "never"], e)
	}
	var Ie = /^[a-z]{2}(-[A-Z]{2})?$/;

	function U(e) {
		return e === "auto" || Ie.test(e)
	}

	function H(e) {
		return E(["always", "execute", "interaction-only"], e)
	}

	function z(e) {
		return E(["render", "execute"], e)
	}
	var ve = ".cf-turnstile",
		xe = ".cf-challenge",
		be = ".g-recaptcha",
		we = "cf_challenge_response",
		Te = "cf-turnstile-response",
		Ae = "g-recaptcha-response",
		Re = 8e3,
		_ = !1,
		de = !1;

	function s(e) {
		let l = `[Cloudflare Turnstile] ${e}.`;
		throw console.error(l), new Error(l)
	}

	function p(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function $e(e) {
		s(`Failed with code: ${e}`)
	}

	function F(e) {
		ge(e, "")
	}

	function ce() {
		let e = [ve, xe];
		_ && e.push(be);
		let l = document.querySelectorAll(e.join(", "));
		for (let o = 0; o < l.length; o++) Y.render(l[o])
	}
	var ue = [],
		pe = !1;

	function se() {
		pe = !0;
		for (let e of ue) e();
		ce()
	}
	var C = "cf-chl-widget-";

	function le(e) {
		return e.startsWith(C) ? e.substring(C.length) : null
	}

	function R(e) {
		return `${C}${e}`
	}

	function ge(e, l) {
		let o = document.getElementById(`${e}_response`);
		o !== null && (o.value = l);
		let c = document.getElementById(`${e}_legacy_response`);
		if (c !== null && (c.value = l), _) {
			let u = document.getElementById(`${e}_g_response`);
			u !== null && (u.value = l)
		}
	}

	function B(e, l) {
		var u;
		let o = (u = l.params.size) != null ? u : "normal",
			c = l.mode;
		switch (c) {
			case "non-interactive":
			case "managed":
				switch (o) {
					case "compact":
						e.style.width = "130px", e.style.height = "120px";
						break;
					case "invisible":
						s(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${o}"`);
					case "normal":
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case "invisible":
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute";
				break;
			default:
				s(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${c}"`);
				return
		}
	}

	function V(e, l) {
		e.style.width = "0", e.style.height = "0"
	}

	function Ce(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Me(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function ke() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var Y = function() {
		let e = new Map,
			l = 0,
			o = function(i) {
				let a = i.data;
				if (a.source !== "cloudflare-challenge") return;
				if (!Ce(i)) {
					s("Ignored message from wrong origin: " + i.origin);
					return
				}
				if (!a.widgetId || !e.has(a.widgetId)) return;
				let n = R(a.widgetId),
					r = e.get(a.widgetId);
				switch (a.event) {
					case "init": {
						let t = document.getElementById(n);
						if (!t) {
							s(`Cannot initialize Widget, Element not found (#${n}).`);
							return
						}
						r.mode = a.mode, r.params.appearance === "always" ? B(t, r) : V(t, r), t.style.display = "";
						break
					}
					case "complete": {
						e.get(a.widgetId).response = a.token, ge(n, a.token);
						let t = r.cbSuccess;
						t && t(a.token);
						break
					}
					case "fail": {
						a.code && $e(a.code), F(n);
						let t = r.cbError;
						t && t();
						break
					}
					case "tokenExpired": {
						let t = a.token,
							d = r.cbExpired;
						d && d(t), r.params["refresh-expired"] === "auto" && !r.isResetting && v(n);
						break
					}
					case "interactiveTimeout": {
						F(n);
						let t = r.cbTimeout;
						t && t();
						break
					}
					case "refreshRequest": {
						v(a.widgetId);
						break
					}
					case "interactiveBegin": {
						let t = document.getElementById(n);
						if (!t) {
							s(`Cannot layout widget, Element not found (#${n}).`);
							return
						}
						r.params.appearance === "interaction-only" && B(t, r);
						break
					}
					case "interactiveEnd": {
						let t = document.getElementById(n);
						if (!t) {
							s(`Cannot unlayout widget, Element not found (#${n}).`);
							return
						}
						r.params.appearance === "interaction-only" && V(t, r);
						break
					}
					case "requestExtraParams": {
						let t = document.querySelector(`#${n}`);
						if (!t) {
							s(`Received state for an unknonwn widget: ${a.widgetId}`);
							return
						}
						r.isResetting = !1, t.contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: a.widgetId,
							event: "extraParams",
							action: r.action,
							cData: r.cData,
							url: ke(),
							retry: r.params.retry,
							"retry-interval": r.params["retry-interval"],
							"refresh-expired": r.params["refresh-expired"],
							language: r.params.language,
							execution: r.params.execution,
							appearance: r.params.appearance
						}, "*"), h(r, a.widgetId, t), r.isInitialized = !0;
						break
					}
				}
			};
		window.addEventListener("message", o);

		function c() {
			let i;
			do {
				i = "";
				let a = "abcdefghijklmnopqrstuvwxyz0123456789",
					n = a.length;
				for (let r = 0; r < 5; r++) i += a.charAt(Math.floor(Math.random() * n))
			} while (e.has(i));
			return i
		}

		function u(i) {
			if (typeof i == "string") {
				if (i.startsWith(C) && (i = le(i)), e.has(i)) return i;
				try {
					let a = document.querySelector(i);
					return a ? u(a) : null
				} catch (a) {
					return null
				}
			}
			if (i instanceof HTMLElement) {
				let a = i.querySelector("iframe");
				return a ? le(a.id) : null
			}
			return i || e.size === 0 ? null : e.keys().next().value
		}

		function h(i, a, n) {
			for (; i.msgQueue.length;) {
				let r = i.msgQueue.pop();
				n.contentWindow.postMessage({
					source: "cloudflare-challenge",
					widgetId: a,
					event: r
				}, "*")
			}
		}

		function v(i) {
			let a = u(i);
			if (!a) {
				s(`Nothing to reset found for ${i}`);
				return
			}
			let n = e.get(a);
			if (n) {
				n.isResetting = !0, n.response = void 0, n.mode = void 0, n.msgQueue = [], n.isInitialized = !1, n.params.execution === "render" && n.msgQueue.push("execute");
				let r = R(a),
					t = document.querySelector(`#${r}`);
				if (!t) {
					s(`Widget ${a} to reset was not found.`);
					return
				}
				n.params.appearance === "interaction-only" && V(t, n), t.src += "", F(r)
			} else {
				s(`Widget ${a} to reset was not found.`);
				return
			}
		}

		function w(i) {
			let a = u(i);
			if (!a || !e.has(a)) {
				p(`Nothing to remove found for ${i}`);
				return
			}
			let n = R(a),
				r = [`iframe#${n}`, `input#${n}_response`, `input#${n}_legacy_response`, `input#${n}_g_response`],
				t = document.querySelectorAll(r.join(", "));
			for (let d = 0; d < t.length; ++d) t[d].remove();
			e.delete(a)
		}

		function I(i, a) {
			var Q, j, X, Z, J, K, ee, te, ne, re;
			let n;
			if (typeof i == "string") try {
					if (n = document.querySelector(i), !n) {
						s(`Unable to find a container for "${i}"`);
						return
					}
				} catch (f) {
					s(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${i}"`);
					return
				} else if (i instanceof HTMLElement) n = i;
				else {
					s('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
					return
				} let r = Le(n),
				t = Object.assign(r, a),
				{
					action: d,
					cData: g
				} = t,
				y = t.sitekey;
			t.theme = (Q = t.theme) != null ? Q : "auto", t.retry = (j = t.retry) != null ? j : "auto", t.execution = (X = t.execution) != null ? X : "render", t.appearance = (Z = t.appearance) != null ? Z : "always", t["retry-interval"] = (J = t["retry-interval"]) != null ? J : Re, t.size = (K = t.size) != null ? K : "normal";
			let M = t.callback,
				x = t["expired-callback"],
				b = t["timeout-callback"],
				k = t["error-callback"];
			if (typeof y != "string") {
				s(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof y}"`);
				return
			}
			if (!ie(y)) {
				s(`Invalid input for parameter "sitekey", got "${y}"`);
				return
			}
			if (!D(t.size)) {
				s(`Invalid type for parameter "size", expected normal|compact, got "${t.size}" ${typeof t.size}`);
				return
			}
			if (!S(t.theme)) {
				s(`Invalid type for parameter "theme", expected dark|light|auto, got "${t.theme}" ${typeof t.theme}`);
				return
			}
			if (!W(t.retry)) {
				s(`Invalid type for parameter "retry", expected never|auto, got "${t.retry}" ${typeof t.retry}`);
				return
			}
			if (t.language || (t.language = "auto"), !U(t.language)) {
				s(`Invalid data-language value: "${t.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`);
				return
			}
			if (!H(t.appearance)) {
				s(`Unknown data-appearance value: "${t.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`);
				return
			}
			if (!z(t.execution)) {
				s(`Unknown data-execution value: "${t.execution}, expected either: 'render' or 'execute'.`);
				return
			}
			if (!O(t["retry-interval"])) {
				p(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
				return
			}
			let T = (ee = t["refresh-expired"]) != null ? ee : "auto";
			if (P(T)) t["refresh-expired"] = T;
			else {
				s(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${T}" ${typeof T}`);
				return
			}
			let q = n.getElementsByTagName("iframe")[0];
			q && q.id.startsWith(C) && w(n);
			let m = document.createElement("iframe");
			if (d !== void 0 && typeof d != "string") {
				s(`Invalid type for parameter "action", expected "string", got "${typeof d}"`);
				return
			}
			if (d = d === void 0 ? null : d, !ae(d)) {
				s(`Invalid input for parameter "action", got "${d}"`);
				return
			}
			if (g !== void 0 && typeof g != "string") {
				s(`Invalid type for parameter "cData", expected "string", got "${typeof g}"`);
				return
			}
			if (!oe(g)) {
				s(`Invalid input for parameter "cData", got "${g}"`);
				return
			}
			g = g === void 0 ? null : g;
			let fe = "https://challenges.cloudflare.com",
				N = c(),
				A = R(N),
				G = [];
			t.execution === "render" && G.push("execute"), l++, e.set(N, {
				idx: l,
				action: d,
				cData: g,
				cbSuccess: M,
				cbError: k,
				cbExpired: x,
				cbTimeout: b,
				params: t,
				isResetting: !1,
				isInitialized: !1,
				msgQueue: G
			}), m.style.display = "none", m.style.border = "none", m.style.overflow = "hidden";
			let me = "h/b/";
			if (m.setAttribute("src", `${fe}/cdn-cgi/challenge-platform/${me}turnstile/if/ov2/av0/${N}/${y}/${t.theme}/${t.size}`), m.setAttribute("allow", "cross-origin-isolated"), m.id = A, m.tabIndex = (te = t.tabindex) != null ? te : 0, m.title = "Widget containing a Cloudflare security challenge", n.appendChild(m), (ne = t["response-field"]) != null ? ne : !0) {
				let f = document.createElement("input");
				if (f.type = "hidden", f.name = (re = t["response-field-name"]) != null ? re : Te, f.id = `${A}_response`, n.appendChild(f), typeof t["response-field-name"] != "string" && Me(y)) {
					let L = document.createElement("input");
					L.type = "hidden", L.name = we, L.id = `${A}_legacy_response`, n.appendChild(L)
				}
			}
			if (_) {
				let f = document.createElement("input");
				f.type = "hidden", f.name = Ae, f.id = `${A}_g_response`, n.appendChild(f)
			}
			return A
		}
		return {
			ready(i) {
				if (de) throw p("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof i != "function" && s(`turnstile.ready() expected a "function" argument, got "${typeof i}"`), i(), typeof i != "function" && s('Invalid value for parameter "callback", you must provide a callback function as argument to ready()'), pe) {
					i();
					return
				}
				ue.push(i)
			},
			implicitRender: ce,
			execute(i, a) {
				let n = u(i);
				if (!n) {
					if (a === void 0) {
						s("Please provide 2 parameters to execute: container and parameters");
						return
					}
					n = I(i, a)
				}
				let r = e.get(n);
				if (r) {
					if (r.response) {
						r.cbSuccess && r.cbSuccess(r.response);
						return
					}
					r.msgQueue.push("execute");
					let t = R(n),
						d = document.querySelector(`#${t}`);
					if (!d) {
						s(`Widget ${t} to execute was not found.`);
						return
					}
					r.isInitialized && h(r, n, d), r.params.appearance === "execute" && B(d, r)
				}
			},
			render: I,
			reset: v,
			remove: w,
			getResponse(i) {
				if (typeof i == "undefined") {
					let n, r = -1;
					for (let [t, d] of e) r < d.idx && (n = t, r = d.idx);
					if (r === -1) {
						s("No widget found!");
						return
					}
					return e.get(n).response
				}
				let a = u(i);
				if (!a) {
					s(`Could not find widget for getResponse(${i})`);
					return
				}
				return e.get(a).response
			}
		}
	}();

	function Le(e) {
		var k;
		let o = {
				sitekey: e.getAttribute("data-sitekey")
			},
			c = e.getAttribute("data-tabindex");
		c && (o.tabindex = parseInt(c, 10));
		let u = e.getAttribute("data-theme");
		u && (S(u) ? o.theme = u : p(`Unknown data-theme value: "${u}"`));
		let h = e.getAttribute("data-size");
		h && (D(h) ? o.size = h : p(`Unknown data-size value: "${h}"`));
		let v = e.getAttribute("data-action");
		typeof v == "string" && (o.action = v);
		let w = e.getAttribute("data-cdata");
		typeof w == "string" && (o.cData = w);
		let I = e.getAttribute("data-retry");
		I && (W(I) ? o.retry = I : p(`Invalid data-retry value: "${I}, expected either 'never' or 'auto'"`));
		let i = +e.getAttribute("data-retry-interval");
		i && (O(i) ? o["retry-interval"] = i : p(`Invalid data-retry-interval value: "${i}, expected an integer value > 0 and < 900000"`));
		let a = e.getAttribute("data-refresh-expired");
		a && (P(a) ? o["refresh-expired"] = a : p(`Unknown data-refresh-expired value: "${a}, expected either: 'never', 'auto' or 'manual'.`));
		let n = e.getAttribute("data-language");
		n && (U(n) ? o.language = n : p(`Invalid data-language value: "${n}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`));
		let r = e.getAttribute("data-error-callback");
		r && window[r] && (o["error-callback"] = window[r]);
		let t = e.getAttribute("data-callback");
		t && window[t] && (o.callback = window[t]);
		let d = e.getAttribute("data-expired-callback");
		d && window[d] && (o["expired-callback"] = window[d]);
		let g = e.getAttribute("data-timeout-callback");
		g && window[g] && (o["timeout-callback"] = window[g]);
		let y = (k = e.getAttribute("data-response-field")) != null ? k : "true";
		o["response-field"] = y === "true";
		let M = e.getAttribute("data-response-field-name");
		M && (o["response-field-name"] = M);
		let x = e.getAttribute("data-execution");
		x && (z(x) ? o.execution = x : p(`Unknown data-execution value: "${x}, expected either: 'render' or 'execute'.`));
		let b = e.getAttribute("data-appearance");
		return b && (H(b) ? o.appearance = b : p(`Unknown data-appearance value: "${b}, expected either: 'always', 'execute', or 'interaction-only'.`)), o
	}

	function _e() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			l = document.currentScript;
		if (e.test(l.src)) return l;
		let o = document.getElementsByTagName("script");
		for (let c = 0; c < o.length; c++) {
			let u = o[c].src;
			if (e.test(u)) return o[c]
		}
	}

	function Ne() {
		let e = _e();
		if (!e) return s("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (de = !0);
		let o = e.src.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var $ = Ne();
	if ($) {
		let e = $.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? p("grecaptcha is already defined. The compatibility layer will not be enabled") : (p("Compatibility layer enabled"), _ = !0, window.grecaptcha = Y): e !== null && p(`Unknown value for api.js?compat: "${e}", ignoring`), $.forEach(function(o, c) {
			E(["onload", "compat", "render"], c) || p(`Unknown parameter passed to api.js: "?${c}=...", ignoring`)
		});
		let l = $.get("onload");
		l && setTimeout(function() {
			typeof window[l] == "function" && window[l]()
		}, 0)
	}
	var Se = "turnstile" in window;
	Se ? p("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Y, $.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(se, 0) : window.addEventListener("DOMContentLoaded", se)));
})();