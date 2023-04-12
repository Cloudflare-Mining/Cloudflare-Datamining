(() => {
	function E(e, l) {
		return e.indexOf(l) !== -1
	}

	function k(e) {
		return E(["auto", "dark", "light"], e)
	}

	function O(e) {
		return E(["auto", "never"], e)
	}

	function W(e) {
		return e > 0 && e < 9e5
	}
	var Ee = /^[0-9A-Za-z_-]{3,100}$/;

	function ae(e) {
		return Ee.test(e)
	}
	var ye = /^[a-z0-9_-]{0,32}$/i;

	function oe(e) {
		return ye.test(e)
	}
	var he = /^[a-z0-9_\-=]{0,255}$/i;

	function se(e) {
		return he.test(e)
	}

	function P(e) {
		return E(["normal", "compact", "invisible"], e)
	}

	function D(e) {
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
		we = ".g-recaptcha",
		Te = "cf_challenge_response",
		Ae = "cf-turnstile-response",
		be = "g-recaptcha-response",
		Re = 8e3,
		_ = !1,
		ue = !1;

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
		fe(e, "")
	}

	function ce() {
		let e = [ve, xe];
		_ && e.push(we);
		let l = document.querySelectorAll(e.join(", "));
		for (let o = 0; o < l.length; o++) q.render(l[o])
	}
	var Y = [],
		pe = !1;

	function le() {
		pe = !0;
		for (let e of Y) e()
	}
	var C = "cf-chl-widget-";

	function de(e) {
		return e.startsWith(C) ? e.substring(C.length) : null
	}

	function R(e) {
		return `${C}${e}`
	}

	function fe(e, l) {
		let o = document.getElementById(`${e}_response`);
		o !== null && (o.value = l);
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = l), _) {
			let c = document.getElementById(`${e}_g_response`);
			c !== null && (c.value = l)
		}
	}

	function B(e, l) {
		var c;
		let o = (c = l.params.size) != null ? c : "normal",
			u = l.mode;
		switch (u) {
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
				s(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${u}"`);
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

	function Le() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var q = function() {
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
						e.get(a.widgetId).response = a.token, fe(n, a.token);
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
							url: Le(),
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

		function u() {
			let i;
			do {
				i = "";
				let a = "abcdefghijklmnopqrstuvwxyz0123456789",
					n = a.length;
				for (let r = 0; r < 5; r++) i += a.charAt(Math.floor(Math.random() * n))
			} while (e.has(i));
			return i
		}

		function c(i) {
			if (typeof i == "string") {
				if (i.startsWith(C) && (i = de(i)), e.has(i)) return i;
				try {
					let a = document.querySelector(i);
					return a ? c(a) : null
				} catch (a) {
					return null
				}
			}
			if (i instanceof HTMLElement) {
				let a = i.querySelector("iframe");
				return a ? de(a.id) : null
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
			let a = c(i);
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

		function T(i) {
			let a = c(i);
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
			var X, Q, Z, J, K, ee, te, ne, re, ie;
			let n;
			if (typeof i == "string") try {
					if (n = document.querySelector(i), !n) {
						s(`Unable to find a container for "${i}"`);
						return
					}
				} catch (g) {
					s(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${i}"`);
					return
				} else if (i instanceof HTMLElement) n = i;
				else {
					s('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
					return
				} let r = Ne(n),
				t = Object.assign(r, a),
				{
					action: d,
					cData: f
				} = t,
				y = t.sitekey;
			t.theme = (X = t.theme) != null ? X : "auto", t.retry = (Q = t.retry) != null ? Q : "auto", t.execution = (Z = t.execution) != null ? Z : "render", t.appearance = (J = t.appearance) != null ? J : "always", t["retry-interval"] = (K = t["retry-interval"]) != null ? K : Re, t.size = (ee = t.size) != null ? ee : "normal";
			let M = t.callback,
				x = t["expired-callback"],
				w = t["timeout-callback"],
				L = t["error-callback"];
			if (typeof y != "string") {
				s(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof y}"`);
				return
			}
			if (!ae(y)) {
				s(`Invalid input for parameter "sitekey", got "${y}"`);
				return
			}
			if (!P(t.size)) {
				s(`Invalid type for parameter "size", expected normal|compact, got "${t.size}" ${typeof t.size}`);
				return
			}
			if (!k(t.theme)) {
				s(`Invalid type for parameter "theme", expected dark|light|auto, got "${t.theme}" ${typeof t.theme}`);
				return
			}
			if (!O(t.retry)) {
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
			if (!W(t["retry-interval"])) {
				p(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
				return
			}
			let A = (te = t["refresh-expired"]) != null ? te : "auto";
			if (D(A)) t["refresh-expired"] = A;
			else {
				s(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${A}" ${typeof A}`);
				return
			}
			let G = n.getElementsByTagName("iframe")[0];
			G && G.id.startsWith(C) && T(n);
			let m = document.createElement("iframe");
			if (d !== void 0 && typeof d != "string") {
				s(`Invalid type for parameter "action", expected "string", got "${typeof d}"`);
				return
			}
			if (d = d === void 0 ? null : d, !oe(d)) {
				s(`Invalid input for parameter "action", got "${d}"`);
				return
			}
			if (f !== void 0 && typeof f != "string") {
				s(`Invalid type for parameter "cData", expected "string", got "${typeof f}"`);
				return
			}
			if (!se(f)) {
				s(`Invalid input for parameter "cData", got "${f}"`);
				return
			}
			f = f === void 0 ? null : f;
			let ge = "https://challenges.cloudflare.com",
				S = u(),
				b = R(S),
				j = [];
			t.execution === "render" && j.push("execute"), l++, e.set(S, {
				idx: l,
				action: d,
				cData: f,
				cbSuccess: M,
				cbError: L,
				cbExpired: x,
				cbTimeout: w,
				params: t,
				isResetting: !1,
				isInitialized: !1,
				msgQueue: j
			}), m.style.display = "none", m.style.border = "none", m.style.overflow = "hidden";
			let me = "h/b/";
			if (m.setAttribute("src", `${ge}/cdn-cgi/challenge-platform/${me}turnstile/if/ov2/av0/${S}/${y}/${t.theme}/${t.size}`), m.setAttribute("allow", "cross-origin-isolated"), m.id = b, m.tabIndex = (ne = t.tabindex) != null ? ne : 0, m.title = "Widget containing a Cloudflare security challenge", n.appendChild(m), (re = t["response-field"]) != null ? re : !0) {
				let g = document.createElement("input");
				if (g.type = "hidden", g.name = (ie = t["response-field-name"]) != null ? ie : Ae, g.id = `${b}_response`, n.appendChild(g), typeof t["response-field-name"] != "string" && Me(y)) {
					let N = document.createElement("input");
					N.type = "hidden", N.name = Te, N.id = `${b}_legacy_response`, n.appendChild(N)
				}
			}
			if (_) {
				let g = document.createElement("input");
				g.type = "hidden", g.name = be, g.id = `${b}_g_response`, n.appendChild(g)
			}
			return b
		}
		return {
			ready(i) {
				if (ue) throw p("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof i != "function" && s(`turnstile.ready() expected a "function" argument, got "${typeof i}"`), i(), typeof i != "function" && s('Invalid value for parameter "callback", you must provide a callback function as argument to ready()'), pe) {
					i();
					return
				}
				Y.push(i)
			},
			implicitRender: ce,
			execute(i, a) {
				let n = c(i);
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
			remove: T,
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
				let a = c(i);
				if (!a) {
					s(`Could not find widget for getResponse(${i})`);
					return
				}
				return e.get(a).response
			}
		}
	}();

	function Ne(e) {
		var L;
		let o = {
				sitekey: e.getAttribute("data-sitekey")
			},
			u = e.getAttribute("data-tabindex");
		u && (o.tabindex = parseInt(u, 10));
		let c = e.getAttribute("data-theme");
		c && (k(c) ? o.theme = c : p(`Unknown data-theme value: "${c}"`));
		let h = e.getAttribute("data-size");
		h && (P(h) ? o.size = h : p(`Unknown data-size value: "${h}"`));
		let v = e.getAttribute("data-action");
		typeof v == "string" && (o.action = v);
		let T = e.getAttribute("data-cdata");
		typeof T == "string" && (o.cData = T);
		let I = e.getAttribute("data-retry");
		I && (O(I) ? o.retry = I : p(`Invalid data-retry value: "${I}, expected either 'never' or 'auto'"`));
		let i = +e.getAttribute("data-retry-interval");
		i && (W(i) ? o["retry-interval"] = i : p(`Invalid data-retry-interval value: "${i}, expected an integer value > 0 and < 900000"`));
		let a = e.getAttribute("data-refresh-expired");
		a && (D(a) ? o["refresh-expired"] = a : p(`Unknown data-refresh-expired value: "${a}, expected either: 'never', 'auto' or 'manual'.`));
		let n = e.getAttribute("data-language");
		n && (U(n) ? o.language = n : p(`Invalid data-language value: "${n}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`));
		let r = e.getAttribute("data-error-callback");
		r && window[r] && (o["error-callback"] = window[r]);
		let t = e.getAttribute("data-callback");
		t && window[t] && (o.callback = window[t]);
		let d = e.getAttribute("data-expired-callback");
		d && window[d] && (o["expired-callback"] = window[d]);
		let f = e.getAttribute("data-timeout-callback");
		f && window[f] && (o["timeout-callback"] = window[f]);
		let y = (L = e.getAttribute("data-response-field")) != null ? L : "true";
		o["response-field"] = y === "true";
		let M = e.getAttribute("data-response-field-name");
		M && (o["response-field-name"] = M);
		let x = e.getAttribute("data-execution");
		x && (z(x) ? o.execution = x : p(`Unknown data-execution value: "${x}, expected either: 'render' or 'execute'.`));
		let w = e.getAttribute("data-appearance");
		return w && (H(w) ? o.appearance = w : p(`Unknown data-appearance value: "${w}, expected either: 'always', 'execute', or 'interaction-only'.`)), o
	}

	function _e() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			l = document.currentScript;
		if (e.test(l.src)) return l;
		let o = document.getElementsByTagName("script");
		for (let u = 0; u < o.length; u++) {
			let c = o[u].src;
			if (e.test(c)) return o[u]
		}
	}

	function Se() {
		let e = _e();
		if (!e) return s("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (ue = !0);
		let o = e.src.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var $ = Se();
	if ($) {
		let e = $.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? p("grecaptcha is already defined. The compatibility layer will not be enabled") : (p("Compatibility layer enabled"), _ = !0, window.grecaptcha = q): e !== null && p(`Unknown value for api.js?compat: "${e}", ignoring`), $.forEach(function(o, u) {
			E(["onload", "compat", "render"], u) || p(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let l = $.get("onload");
		l && setTimeout(function() {
			typeof window[l] == "function" && window[l]()
		}, 0)
	}
	var ke = "turnstile" in window;
	ke ? p("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = q, $.get("render") !== "explicit" && Y.push(ce), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(le, 0) : window.addEventListener("DOMContentLoaded", le));
})();