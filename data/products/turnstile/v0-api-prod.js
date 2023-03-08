(() => {
	function y(e, l) {
		return e.indexOf(l) !== -1
	}

	function S(e) {
		return y(["auto", "dark", "light"], e)
	}

	function W(e) {
		return y(["auto", "never"], e)
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
		return y(["normal", "compact", "invisible"], e)
	}

	function P(e) {
		return y(["auto", "manual", "never"], e)
	}
	var Ie = /^[a-z]{2}(-[A-Z]{2})?$/;

	function H(e) {
		return e === "auto" || Ie.test(e)
	}

	function z(e) {
		return y(["always", "execute", "interaction-only"], e)
	}

	function U(e) {
		return y(["render", "execute"], e)
	}
	var ve = ".cf-turnstile",
		xe = ".cf-challenge",
		be = ".g-recaptcha",
		we = "cf_challenge_response",
		Te = "cf-turnstile-response",
		Ae = "g-recaptcha-response",
		Re = 8e3,
		L = !1,
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

	function ue() {
		let e = [ve, xe];
		L && e.push(be);
		let l = document.querySelectorAll(e.join(", "));
		for (let o = 0; o < l.length; o++) Y.render(l[o])
	}
	var ce = [],
		pe = !1;

	function se() {
		pe = !0;
		for (let e of ce) e();
		ue()
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
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = l), L) {
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
				let r = R(a.widgetId),
					n = e.get(a.widgetId);
				switch (a.event) {
					case "init": {
						let t = document.getElementById(r);
						if (!t) {
							s(`Cannot initialize Widget, Element not found (#${r}).`);
							return
						}
						n.mode = a.mode, n.params.appearance === "always" ? B(t, n) : V(t, n), t.style.display = "";
						break
					}
					case "complete": {
						e.get(a.widgetId).response = a.token, ge(r, a.token);
						let t = n.cbSuccess;
						t && t(a.token);
						break
					}
					case "fail": {
						a.code && $e(a.code), F(r);
						let t = n.cbError;
						t && t();
						break
					}
					case "tokenExpired": {
						let t = a.token,
							d = n.cbExpired;
						d && d(t), n.params["refresh-expired"] === "auto" && !n.isResetting && v(r);
						break
					}
					case "interactiveTimeout": {
						F(r);
						let t = n.cbTimeout;
						t && t();
						break
					}
					case "refreshRequest": {
						v(a.widgetId);
						break
					}
					case "interactiveBegin": {
						let t = document.getElementById(r);
						if (!t) {
							s(`Cannot layout widget, Element not found (#${r}).`);
							return
						}
						n.params.appearance === "interaction-only" && B(t, n);
						break
					}
					case "interactiveEnd": {
						let t = document.getElementById(r);
						if (!t) {
							s(`Cannot unlayout widget, Element not found (#${r}).`);
							return
						}
						n.params.appearance === "interaction-only" && V(t, n);
						break
					}
					case "requestExtraParams": {
						let t = document.querySelector(`#${r}`);
						if (!t) {
							s(`Received state for an unknonwn widget: ${a.widgetId}`);
							return
						}
						n.isResetting = !1, t.contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: a.widgetId,
							event: "extraParams",
							action: n.action,
							cData: n.cData,
							url: ke(),
							retry: n.params.retry,
							"retry-interval": n.params["retry-interval"],
							"refresh-expired": n.params["refresh-expired"],
							language: n.params.language,
							execution: n.params.execution,
							appearance: n.params.appearance
						}, "*"), h(n, a.widgetId, t), n.isInitialized = !0;
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
					r = a.length;
				for (let n = 0; n < 5; n++) i += a.charAt(Math.floor(Math.random() * r))
			} while (e.has(i));
			return i
		}

		function c(i) {
			if (typeof i == "string") {
				if (i.startsWith(C) && (i = le(i)), e.has(i)) return i;
				try {
					let a = document.querySelector(i);
					return a ? c(a) : null
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

		function h(i, a, r) {
			for (; i.msgQueue.length;) {
				let n = i.msgQueue.pop();
				r.contentWindow.postMessage({
					source: "cloudflare-challenge",
					widgetId: a,
					event: n
				}, "*")
			}
		}

		function v(i) {
			let a = c(i);
			if (!a) {
				s(`Nothing to reset found for ${i}`);
				return
			}
			let r = e.get(a);
			if (r) {
				r.isResetting = !0, r.response = void 0, r.mode = void 0, r.msgQueue = [], r.isInitialized = !1, r.params.execution === "render" && r.msgQueue.push("execute");
				let n = R(a),
					t = document.querySelector(`#${n}`);
				if (!t) {
					s(`Widget ${a} to reset was not found.`);
					return
				}
				r.params.appearance === "interaction-only" && V(t, r), t.src += "", F(n)
			} else {
				s(`Widget ${a} to reset  was not found.`);
				return
			}
		}

		function w(i) {
			let a = c(i);
			if (!a || !e.has(a)) {
				p(`Nothing to remove found for ${i}`);
				return
			}
			let r = R(a),
				n = [`iframe#${r}`, `input#${r}_response`, `input#${r}_legacy_response`, `input#${r}_g_response`],
				t = document.querySelectorAll(n.join(", "));
			for (let d = 0; d < t.length; ++d) t[d].remove();
			e.delete(a)
		}

		function T(i, a) {
			var Q, j, X, Z, J, K, ee, te, ne, re;
			let r;
			if (typeof i == "string") try {
					if (r = document.querySelector(i), !r) {
						s(`Unable to find a container for "${i}"`);
						return
					}
				} catch (m) {
					s(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${i}"`);
					return
				} else if (i instanceof HTMLElement) r = i;
				else {
					s('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
					return
				} let n = Le(r),
				t = Object.assign(n, a),
				{
					action: d,
					cData: g
				} = t,
				f = t.sitekey;
			t.theme = (Q = t.theme) != null ? Q : "auto", t.retry = (j = t.retry) != null ? j : "auto", t.execution = (X = t.execution) != null ? X : "render", t.appearance = (Z = t.appearance) != null ? Z : "always", t["retry-interval"] = (J = t["retry-interval"]) != null ? J : Re, t.size = (K = t.size) != null ? K : "normal";
			let _ = t.callback,
				M = t["expired-callback"],
				x = t["timeout-callback"],
				b = t["error-callback"];
			if (typeof f != "string") {
				s(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof f}"`);
				return
			}
			if (!ie(f)) {
				s(`Invalid input for parameter "sitekey", got "${f}"`);
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
			if (t.language || (t.language = "auto"), !H(t.language)) {
				s(`Invalid data-language value: "${t.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`);
				return
			}
			if (!z(t.appearance)) {
				s(`Unknown data-appearance value: "${t.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`);
				return
			}
			if (!U(t.execution)) {
				s(`Unknown data-execution value: "${t.execution}, expected either: 'render' or 'execute'.`);
				return
			}
			if (!O(t["retry-interval"])) {
				p(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
				return
			}
			let I = (ee = t["refresh-expired"]) != null ? ee : "auto";
			if (P(I)) t["refresh-expired"] = I;
			else {
				s(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${I}" ${typeof I}`);
				return
			}
			let q = r.getElementsByTagName("iframe")[0];
			q && q.id.startsWith(C) && w(r);
			let E = document.createElement("iframe");
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
				N = u(),
				A = R(N),
				G = [];
			t.execution === "render" && G.push("execute"), l++, e.set(N, {
				idx: l,
				action: d,
				cData: g,
				cbSuccess: _,
				cbError: b,
				cbExpired: M,
				cbTimeout: x,
				params: t,
				isResetting: !1,
				isInitialized: !1,
				msgQueue: G
			}), E.style.display = "none", E.style.border = "none", E.style.overflow = "hidden";
			let me = "h/g/";
			if (E.setAttribute("src", `${fe}/cdn-cgi/challenge-platform/${me}turnstile/if/ov2/av0/${N}/${f}/${t.theme}/${t.size}`), E.setAttribute("allow", "cross-origin-isolated"), E.id = A, E.tabIndex = (te = t.tabindex) != null ? te : 0, E.title = "Widget containing a Cloudflare security challenge", r.appendChild(E), (ne = t["response-field"]) != null ? ne : !0) {
				let m = document.createElement("input");
				if (m.type = "hidden", m.name = (re = t["response-field-name"]) != null ? re : Te, m.id = `${A}_response`, r.appendChild(m), typeof t["response-field-name"] != "string" && Me(f)) {
					let k = document.createElement("input");
					k.type = "hidden", k.name = we, k.id = `${A}_legacy_response`, r.appendChild(k)
				}
			}
			if (L) {
				let m = document.createElement("input");
				m.type = "hidden", m.name = Ae, m.id = `${A}_g_response`, r.appendChild(m)
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
				ce.push(i)
			},
			implicitRender: ue,
			execute(i, a) {
				let r = c(i);
				if (!r) {
					if (a === void 0) {
						s("Please provide 2 parameters to execute: container and parameters");
						return
					}
					r = T(i, a)
				}
				let n = e.get(r);
				if (n) {
					if (n.response) {
						n.cbSuccess && n.cbSuccess(n.response);
						return
					}
					n.msgQueue.push("execute");
					let t = R(r),
						d = document.querySelector(`#${t}`);
					if (!d) {
						s(`Widget ${t} to execute was not found.`);
						return
					}
					n.isInitialized && h(n, r, d), n.params.appearance === "execute" && B(d, n)
				}
			},
			render: T,
			reset: v,
			remove: w,
			getResponse(i) {
				if (typeof i == "undefined") {
					let r, n = -1;
					for (let [t, d] of e) n < d.idx && (r = t, n = d.idx);
					if (n === -1) {
						s("No widget found!");
						return
					}
					return e.get(r).response
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

	function Le(e) {
		var I;
		let o = {
				sitekey: e.getAttribute("data-sitekey")
			},
			u = e.getAttribute("data-tabindex");
		u && (o.tabindex = parseInt(u, 10));
		let c = e.getAttribute("data-theme");
		c && (S(c) ? o.theme = c : p(`Unknown data-theme value: "${c}"`));
		let h = e.getAttribute("data-size");
		h && (D(h) ? o.size = h : p(`Unknown data-size value: "${h}"`));
		let v = e.getAttribute("data-base-url");
		typeof v == "string" && (o["base-url"] = v);
		let w = e.getAttribute("data-action");
		typeof w == "string" && (o.action = w);
		let T = e.getAttribute("data-cdata");
		typeof T == "string" && (o.cData = T);
		let i = e.getAttribute("data-retry");
		i && (W(i) ? o.retry = i : p(`Invalid data-retry value: "${i}, expected either 'never' or 'auto'"`));
		let a = +e.getAttribute("data-retry-interval");
		a && (O(a) ? o["retry-interval"] = a : p(`Invalid data-retry-interval value: "${a}, expected an integer value > 0 and < 900000"`));
		let r = e.getAttribute("data-refresh-expired");
		r && (P(r) ? o["refresh-expired"] = r : p(`Unknown data-refresh-expired value: "${r}, expected either: 'never', 'auto' or 'manual'.`));
		let n = e.getAttribute("data-language");
		n && (H(n) ? o.language = n : p(`Invalid data-language value: "${n}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`));
		let t = e.getAttribute("data-error-callback");
		t && window[t] && (o["error-callback"] = window[t]);
		let d = e.getAttribute("data-callback");
		d && window[d] && (o.callback = window[d]);
		let g = e.getAttribute("data-expired-callback");
		g && window[g] && (o["expired-callback"] = window[g]);
		let f = e.getAttribute("data-timeout-callback");
		f && window[f] && (o["timeout-callback"] = window[f]);
		let _ = (I = e.getAttribute("data-response-field")) != null ? I : "true";
		o["response-field"] = _ === "true";
		let M = e.getAttribute("data-response-field-name");
		M && (o["response-field-name"] = M);
		let x = e.getAttribute("data-execution");
		x && (U(x) ? o.execution = x : p(`Unknown data-execution value: "${x}, expected either: 'render' or 'execute'.`));
		let b = e.getAttribute("data-appearance");
		return b && (z(b) ? o.appearance = b : p(`Unknown data-appearance value: "${b}, expected either: 'always', 'execute', or 'interaction-only'.`)), o
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
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? p("grecaptcha is already defined. The compatibility layer will not be enabled") : (p("Compatibility layer enabled"), L = !0, window.grecaptcha = Y): e !== null && p(`Unknown value for api.js?compat: "${e}", ignoring`), $.forEach(function(o, u) {
			y(["onload", "compat", "render"], u) || p(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let l = $.get("onload");
		l && setTimeout(function() {
			typeof window[l] == "function" && window[l]()
		}, 0)
	}
	var Se = "turnstile" in window;
	Se ? p("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Y, $.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(se, 0) : window.addEventListener("DOMContentLoaded", se)));
})();