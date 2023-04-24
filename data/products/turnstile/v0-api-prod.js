"use strict";
(() => {
	function y(e, c) {
		return e.indexOf(c) !== -1
	}

	function H(e) {
		return y(["auto", "dark", "light"], e)
	}

	function D(e) {
		return y(["auto", "never"], e)
	}

	function P(e) {
		return e > 0 && e < 9e5
	}
	var he = /^[0-9A-Za-z_-]{3,100}$/;

	function le(e) {
		return he.test(e)
	}
	var ve = /^[a-z0-9_-]{0,32}$/i;

	function de(e) {
		return e === void 0 ? !0 : typeof e == "string" && ve.test(e)
	}
	var be = /^[a-z0-9_\-=]{0,255}$/i;

	function ce(e) {
		return e === void 0 ? !0 : typeof e == "string" && be.test(e)
	}

	function z(e) {
		return y(["normal", "compact", "invisible"], e)
	}

	function F(e) {
		return y(["auto", "manual", "never"], e)
	}
	var we = /^[a-z]{2}(-[A-Z]{2})?$/;

	function B(e) {
		return e === "auto" || we.test(e)
	}

	function V(e) {
		return y(["always", "execute", "interaction-only"], e)
	}

	function q(e) {
		return y(["render", "execute"], e)
	}
	var Te = ".cf-turnstile",
		xe = ".cf-challenge",
		Ae = ".g-recaptcha",
		Re = "cf_challenge_response",
		Ce = "cf-turnstile-response",
		$e = "g-recaptcha-response",
		ke = 8e3,
		O = !1,
		pe = !1;

	function l(e) {
		let c = `[Cloudflare Turnstile] ${e}.`;
		throw console.error(c), new Error(c)
	}

	function g(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function Y(e) {
		Ee(e, "")
	}

	function ge() {
		let e = [Te, xe];
		O && e.push(Ae), document.querySelectorAll(e.join(", ")).forEach(c => Q.render(c))
	}
	var X = [],
		me = !1;

	function ue() {
		me = !0;
		for (let e of X) e()
	}
	var S = "cf-chl-widget-";

	function fe(e) {
		return e.startsWith(S) ? e.substring(S.length) : null
	}

	function k(e) {
		return `${S}${e}`
	}

	function Ee(e, c) {
		let o = document.getElementById(`${e}_response`);
		o !== null && o instanceof HTMLInputElement && (o.value = c);
		let p = document.getElementById(`${e}_legacy_response`);
		if (p !== null && p instanceof HTMLInputElement && (p.value = c), O) {
			let u = document.getElementById(`${e}_g_response`);
			u !== null && u instanceof HTMLInputElement && (u.value = c)
		}
	}

	function j(e, c) {
		var u;
		let o = (u = c.params.size) != null ? u : "normal",
			p = c.mode;
		switch (p) {
			case "non-interactive":
			case "managed":
				switch (o) {
					case "compact":
						e.style.width = "130px", e.style.height = "120px";
						break;
					case "invisible":
						l(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${o}"`);
					case "normal":
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case "invisible":
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute";
				break;
			default:
				l(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${p}"`);
				return
		}
	}

	function G(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function Le(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Me(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Ne() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Q = function() {
		let e = new Map,
			c = 0,
			o = function(a) {
				var t, f;
				let i = a.data;
				if (i.source !== "cloudflare-challenge") return;
				if (!Le(a)) {
					l("Ignored message from wrong origin: " + a.origin);
					return
				}
				if (!i.widgetId || !e.has(i.widgetId)) return;
				let r = k(i.widgetId),
					n = e.get(i.widgetId);
				if (!(!r || !n)) switch (i.event) {
					case "init": {
						let s = document.getElementById(r);
						if (!s) {
							l(`Cannot initialize Widget, Element not found (#${r}).`);
							return
						}
						n.mode = i.mode, n.params.appearance === "always" ? j(s, n) : G(s), s.style.display = "";
						break
					}
					case "reject": {
						if (!document.getElementById(r)) {
							l(`Cannot initialize Widget, Element not found (#${r}).`);
							return
						}
						if (i.reason === "outdated_browser") {
							let d = n.cbUnsupported;
							d && d()
						}
						break
					}
					case "complete": {
						n.response = i.token, Ee(r, i.token);
						let s = n.cbSuccess;
						s && s(i.token);
						break
					}
					case "fail": {
						n.params.retry === "auto" && n.msgQueue.push("execute"), Y(r);
						let s = n.cbError,
							d = (t = i.code) != null ? t : "undefined_error";
						s ? s(d) || g(d) : l(d);
						break
					}
					case "tokenExpired": {
						let s = i.token,
							d = n.cbExpired;
						d && d(s), n.params["refresh-expired"] === "auto" && !n.isResetting && w(r);
						break
					}
					case "interactiveTimeout": {
						Y(r);
						let s = n.cbTimeout;
						s && s();
						break
					}
					case "refreshRequest": {
						w(i.widgetId);
						break
					}
					case "interactiveBegin": {
						let s = document.getElementById(r);
						if (!s) {
							l(`Cannot layout widget, Element not found (#${r}).`);
							return
						}
						let d = n.cbBeforeInteractive;
						d && d(), n.params.appearance === "interaction-only" && j(s, n);
						break
					}
					case "interactiveEnd": {
						let s = document.getElementById(r);
						if (!s) {
							l(`Cannot unlayout widget, Element not found (#${r}).`);
							return
						}
						n.params.appearance === "interaction-only" && G(s);
						let d = n.cbAfterInteractive;
						d && d();
						break
					}
					case "requestExtraParams": {
						let s = document.querySelector(`#${r}`);
						if (!s) {
							l(`Received state for an unknown widget: ${i.widgetId}`);
							return
						}
						n.isResetting = !1, (f = s.contentWindow) == null || f.postMessage({
							source: "cloudflare-challenge",
							widgetId: i.widgetId,
							event: "extraParams",
							action: n.action,
							cData: n.cData,
							url: Ne(),
							retry: n.params.retry,
							"retry-interval": n.params["retry-interval"],
							"refresh-expired": n.params["refresh-expired"],
							language: n.params.language,
							execution: n.params.execution,
							appearance: n.params.appearance
						}, "*"), h(n, i.widgetId, s), n.isInitialized = !0;
						break
					}
				}
			};
		window.addEventListener("message", o);

		function p() {
			let a;
			do {
				a = "";
				let i = "abcdefghijklmnopqrstuvwxyz0123456789",
					r = i.length;
				for (let n = 0; n < 5; n++) a += i.charAt(Math.floor(Math.random() * r))
			} while (e.has(a));
			return a
		}

		function u(a) {
			if (typeof a == "string") {
				if (a = fe(a), !a) return null;
				if (e.has(a)) return a;
				try {
					let i = document.querySelector(a);
					return i ? u(i) : null
				} catch (i) {
					return null
				}
			}
			if (a instanceof HTMLElement) {
				let i = a.querySelector("iframe");
				return i ? fe(i.id) : null
			}
			return a || e.size === 0 ? null : e.keys().next().value
		}

		function h(a, i, r) {
			var n;
			for (; a.msgQueue.length;) {
				let t = a.msgQueue.pop();
				(n = r.contentWindow) == null || n.postMessage({
					source: "cloudflare-challenge",
					widgetId: i,
					event: t
				}, "*")
			}
		}

		function w(a) {
			let i = u(a);
			if (!i) {
				l("Nothing to reset found for provided container");
				return
			}
			let r = e.get(i);
			if (r) {
				r.isResetting = !0, r.response = void 0, r.mode = void 0, r.msgQueue = [], r.isInitialized = !1, r.params.execution === "render" && r.msgQueue.push("execute");
				let n = k(i),
					t = document.querySelector(`#${n}`);
				if (!n || !t) {
					l(`Widget ${i} to reset was not found.`);
					return
				}
				r.params.appearance === "interaction-only" && G(t), t.src += "", Y(n)
			} else {
				l(`Widget ${i} to reset was not found.`);
				return
			}
		}

		function R(a) {
			let i = u(a);
			if (!i || !e.has(i)) {
				g("Nothing to remove found for the provided container");
				return
			}
			let r = k(i),
				n = [`iframe#${r}`, `input#${r}_response`, `input#${r}_legacy_response`, `input#${r}_g_response`];
			document.querySelectorAll(n.join(", ")).forEach(t => t.remove()), e.delete(i)
		}

		function v(a, i) {
			var J, K, ee, te, ne, re, ie, ae, oe, se;
			let r;
			if (typeof a == "string") try {
					let m = document.querySelector(a);
					if (!m) {
						l(`Unable to find a container for "${a}"`);
						return
					}
					r = m
				} catch (m) {
					l(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${a}"`);
					return
				} else if (a instanceof HTMLElement) r = a;
				else {
					l('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
					return
				} let n = _e(r);
			if (!n) return;
			let t = Object.assign(n, i),
				{
					action: f,
					cData: s
				} = t,
				d = t.sitekey;
			t.theme = (J = t.theme) != null ? J : "auto", t.retry = (K = t.retry) != null ? K : "auto", t.execution = (ee = t.execution) != null ? ee : "render", t.appearance = (te = t.appearance) != null ? te : "always", t["retry-interval"] = (ne = t["retry-interval"]) != null ? ne : ke, t.size = (re = t.size) != null ? re : "normal";
			let C = t.callback,
				$ = t["expired-callback"],
				W = t["timeout-callback"],
				L = t["after-interactive-callback"],
				T = t["before-interactive-callback"],
				x = t["error-callback"],
				M = t["unsupported-callback"];
			if (typeof d != "string") {
				l(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof d}"`);
				return
			}
			if (!le(d)) {
				l(`Invalid input for parameter "sitekey", got "${d}"`);
				return
			}
			if (!z(t.size)) {
				l(`Invalid type for parameter "size", expected normal|compact, got "${t.size}" ${typeof t.size}`);
				return
			}
			if (!H(t.theme)) {
				l(`Invalid type for parameter "theme", expected dark|light|auto, got "${t.theme}" ${typeof t.theme}`);
				return
			}
			if (!D(t.retry)) {
				l(`Invalid type for parameter "retry", expected never|auto, got "${t.retry}" ${typeof t.retry}`);
				return
			}
			if (t.language || (t.language = "auto"), !B(t.language)) {
				l(`Invalid data-language value: "${t.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`);
				return
			}
			if (!V(t.appearance)) {
				l(`Unknown data-appearance value: "${t.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`);
				return
			}
			if (!q(t.execution)) {
				l(`Unknown data-execution value: "${t.execution}, expected either: 'render' or 'execute'.`);
				return
			}
			if (!P(t["retry-interval"])) {
				g(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
				return
			}
			let I = (ie = t["refresh-expired"]) != null ? ie : "auto";
			if (F(I)) t["refresh-expired"] = I;
			else {
				l(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${I}" ${typeof I}`);
				return
			}
			let U = r.getElementsByTagName("iframe")[0];
			U != null && U.id.startsWith(S) && R(r);
			let E = document.createElement("iframe");
			if (!de(f)) {
				l(`Invalid input for optional parameter "action", got "${f}"`);
				return
			}
			if (!ce(s)) {
				l(`Invalid input for optional parameter "cData", got "${s}"`);
				return
			}
			let ye = "https://challenges.cloudflare.com",
				N = p(),
				A = k(N);
			if (!N || !A) return;
			let Z = [];
			t.execution === "render" && Z.push("execute"), c++, e.set(N, {
				idx: c,
				action: f,
				cData: s,
				cbSuccess: C,
				cbError: x,
				cbExpired: $,
				cbTimeout: W,
				cbUnsupported: M,
				cbAfterInteractive: L,
				cbBeforeInteractive: T,
				params: t,
				isResetting: !1,
				isInitialized: !1,
				msgQueue: Z
			}), E.style.display = "none", E.style.border = "none", E.style.overflow = "hidden";
			let Ie = "h/b/";
			if (E.setAttribute("src", `${ye}/cdn-cgi/challenge-platform/${Ie}turnstile/if/ov2/av0/${N}/${d}/${t.theme}/${t.size}`), E.setAttribute("allow", "cross-origin-isolated"), E.id = A, E.tabIndex = (ae = t.tabindex) != null ? ae : 0, E.title = "Widget containing a Cloudflare security challenge", r.appendChild(E), (oe = t["response-field"]) != null ? oe : !0) {
				let m = document.createElement("input");
				if (m.type = "hidden", m.name = (se = t["response-field-name"]) != null ? se : Ce, m.id = `${A}_response`, r.appendChild(m), typeof t["response-field-name"] != "string" && Me(d)) {
					let _ = document.createElement("input");
					_.type = "hidden", _.name = Re, _.id = `${A}_legacy_response`, r.appendChild(_)
				}
			}
			if (O) {
				let m = document.createElement("input");
				m.type = "hidden", m.name = $e, m.id = `${A}_g_response`, r.appendChild(m)
			}
			return A
		}
		return {
			ready(a) {
				if (pe) throw g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof a != "function" && l(`turnstile.ready() expected a "function" argument, got "${typeof a}"`), a(), typeof a != "function" && l('Invalid value for parameter "callback", you must provide a callback function as argument to ready()'), me) {
					a();
					return
				}
				X.push(a)
			},
			implicitRender: ge,
			execute(a, i) {
				let r = u(a);
				if (!r) {
					if (i === void 0) {
						l("Please provide 2 parameters to execute: container and parameters");
						return
					}
					let t = v(a, i);
					if (!t) {
						l("Failed to render widget");
						return
					}
					r = t
				}
				let n = e.get(r);
				if (n) {
					if (n.response) {
						n.cbSuccess && n.cbSuccess(n.response);
						return
					}
					n.msgQueue.push("execute");
					let t = k(r),
						f = document.querySelector(`#${t}`);
					if (!f) {
						l(`Widget ${t} to execute was not found`);
						return
					}
					n.isInitialized && h(n, r, f), n.params.appearance === "execute" && j(f, n)
				}
			},
			render: v,
			reset: w,
			remove: R,
			getResponse(a) {
				var r, n;
				if (typeof a == "undefined") {
					let t, f = -1;
					for (let [s, d] of e) f < d.idx && (t = s, f = d.idx);
					if (f === -1) {
						l("Could not find widget");
						return
					}
					return (r = e.get(t)) == null ? void 0 : r.response
				}
				let i = u(a);
				if (!i) {
					l("Could not find widget for provided container");
					return
				}
				return (n = e.get(i)) == null ? void 0 : n.response
			}
		}
	}();

	function _e(e) {
		var M;
		let o = {
				sitekey: e.getAttribute("data-sitekey")
			},
			p = e.getAttribute("data-tabindex");
		p && (o.tabindex = parseInt(p, 10));
		let u = e.getAttribute("data-theme");
		u && (H(u) ? o.theme = u : g(`Unknown data-theme value: "${u}"`));
		let h = e.getAttribute("data-size");
		h && (z(h) ? o.size = h : g(`Unknown data-size value: "${h}"`));
		let w = e.getAttribute("data-action");
		typeof w == "string" && (o.action = w);
		let R = e.getAttribute("data-cdata");
		typeof R == "string" && (o.cData = R);
		let v = e.getAttribute("data-retry");
		v && (D(v) ? o.retry = v : g(`Invalid data-retry value: "${v}, expected either 'never' or 'auto'"`));
		let a = e.getAttribute("data-retry-interval");
		if (a) {
			let I = parseInt(a, 10);
			P(I) ? o["retry-interval"] = I : g(`Invalid data-retry-interval value: "${a}, expected an integer value > 0 and < 900000"`)
		}
		let i = e.getAttribute("data-refresh-expired");
		i && (F(i) ? o["refresh-expired"] = i : g(`Unknown data-refresh-expired value: "${i}, expected either: 'never', 'auto' or 'manual'.`));
		let r = e.getAttribute("data-language");
		r && (B(r) ? o.language = r : g(`Invalid data-language value: "${r}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`));
		let n = e.getAttribute("data-error-callback");
		n && window[n] && (o["error-callback"] = window[n]);
		let t = e.getAttribute("data-unsupported-callback");
		t && window[t] && n && window[n] && (o["unsupported-callback"] = window[n]);
		let f = e.getAttribute("data-callback");
		f && window[f] && (o.callback = window[f]);
		let s = e.getAttribute("data-expired-callback");
		s && window[s] && (o["expired-callback"] = window[s]);
		let d = e.getAttribute("data-timeout-callback");
		d && window[d] && (o["timeout-callback"] = window[d]);
		let C = e.getAttribute("data-after-interactive-callback");
		C && window[C] && (o["after-interactive-callback"] = window[C]);
		let $ = e.getAttribute("data-before-interactive-callback");
		$ && window[$] && (o["before-interactive-callback"] = window[$]);
		let W = (M = e.getAttribute("data-response-field")) != null ? M : "true";
		o["response-field"] = W === "true";
		let L = e.getAttribute("data-response-field-name");
		L && (o["response-field-name"] = L);
		let T = e.getAttribute("data-execution");
		T && (q(T) ? o.execution = T : g(`Unknown data-execution value: "${T}, expected either: 'render' or 'execute'.`));
		let x = e.getAttribute("data-appearance");
		return x && (V(x) ? o.appearance = x : g(`Unknown data-appearance value: "${x}, expected either: 'always', 'execute', or 'interaction-only'.`)), o
	}

	function Se() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			c = document.currentScript;
		if (c instanceof HTMLScriptElement && e.test(c.src)) return c;
		let o = document.querySelectorAll("script");
		for (let p = 0, u; u = o[p]; p++)
			if (u instanceof HTMLScriptElement && e.test(u.src)) return u
	}

	function Oe() {
		let e = Se();
		if (!e) return l("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (pe = !0);
		let o = e.src.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var b = Oe();
	if (b) {
		let e = b.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), O = !0, window.grecaptcha = Q): e !== null && g(`Unknown value for api.js?compat: "${e}", ignoring`), b.forEach(function(o, p) {
			y(["onload", "compat", "render"], p) || g(`Unknown parameter passed to api.js: "?${p}=...", ignoring`)
		});
		let c = b.get("onload");
		c && setTimeout(function() {
			typeof window[c] == "function" && window[c]()
		}, 0)
	}
	var We = "turnstile" in window;
	We ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Q, (b == null ? void 0 : b.get("render")) !== "explicit" && X.push(ge), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(ue, 0) : window.addEventListener("DOMContentLoaded", ue));
})();