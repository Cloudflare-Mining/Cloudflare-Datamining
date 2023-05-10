"use strict";
(() => {
	function h(e, o) {
		return e.indexOf(o) !== -1
	}

	function P(e) {
		return h(["auto", "dark", "light"], e)
	}

	function H(e) {
		return h(["auto", "never"], e)
	}

	function z(e) {
		return e > 0 && e < 9e5
	}
	var ve = /^[0-9A-Za-z_-]{3,100}$/;

	function ce(e) {
		return ve.test(e)
	}
	var we = /^[a-z0-9_-]{0,32}$/i;

	function de(e) {
		return e === void 0 ? !0 : typeof e == "string" && we.test(e)
	}
	var be = /^[a-z0-9_\-=]{0,255}$/i;

	function ue(e) {
		return e === void 0 ? !0 : typeof e == "string" && be.test(e)
	}

	function V(e) {
		return h(["normal", "compact", "invisible"], e)
	}

	function F(e) {
		return h(["auto", "manual", "never"], e)
	}
	var xe = /^[a-z]{2}(-[A-Z]{2})?$/;

	function B(e) {
		return e === "auto" || xe.test(e)
	}

	function q(e) {
		return h(["always", "execute", "interaction-only"], e)
	}

	function Y(e) {
		return h(["render", "execute"], e)
	}
	var Te = ".cf-turnstile",
		Ae = ".cf-challenge",
		Re = ".g-recaptcha",
		$e = "cf_challenge_response",
		Ce = "cf-turnstile-response",
		ke = "g-recaptcha-response",
		Le = 8e3,
		W = !1,
		me = !1;

	function c(e) {
		let o = `[Cloudflare Turnstile] ${e}.`;
		throw console.error(o), new Error(o)
	}

	function g(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function j(e) {
		Ie(e, "")
	}

	function Ee() {
		let e = [Te, Ae];
		W && e.push(Re), document.querySelectorAll(e.join(", ")).forEach(o => Z.render(o))
	}
	var Q = [],
		ye = !1;

	function fe() {
		ye = !0;
		for (let e of Q) e()
	}
	var O = "cf-chl-widget-";

	function pe(e) {
		return e.startsWith(O) ? e.substring(O.length) : null
	}

	function k(e) {
		return `${O}${e}`
	}

	function Ie(e, o) {
		let s = document.getElementById(`${e}_response`);
		s !== null && s instanceof HTMLInputElement && (s.value = o);
		let f = document.getElementById(`${e}_legacy_response`);
		if (f !== null && f instanceof HTMLInputElement && (f.value = o), W) {
			let p = document.getElementById(`${e}_g_response`);
			p !== null && p instanceof HTMLInputElement && (p.value = o)
		}
	}

	function G(e, o) {
		var p;
		let s = (p = o.params.size) != null ? p : "normal",
			f = o.mode;
		switch (f) {
			case "non-interactive":
			case "managed":
				switch (s) {
					case "compact":
						e.style.width = "130px", e.style.height = "120px";
						break;
					case "invisible":
						c(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${s}"`);
					case "normal":
						e.style.width = "300px", e.style.height = "65px";
						break
				}
				break;
			case "invisible":
				e.style.width = "0", e.style.height = "0", e.style.position = "absolute";
				break;
			default:
				c(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${f}"`);
				return
		}
	}

	function X(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function ge(e, o, s, f) {
		return `https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/if/ov2/av0/rcv${f}/${e}/${o}/${s.theme}/${s.size}`
	}

	function Me(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function Ne(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Se() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e == null ? void 0 : e.location.href
	}
	var Z = function() {
		function e(a, i) {
			var r;
			if (a.params.retry === "auto") {
				a.msgQueue.push("execute");
				let n = 1e3 * 2 + ((r = a.params["retry-interval"]) != null ? r : 0);
				window.setTimeout(function() {
					v(i)
				}, n)
			}
		}
		let o = new Map,
			s = 0,
			f = function(a) {
				var t, d;
				let i = a.data;
				if (i.source !== "cloudflare-challenge") return;
				if (!Me(a)) {
					c("Ignored message from wrong origin: " + a.origin);
					return
				}
				if (!i.widgetId || !o.has(i.widgetId)) return;
				let r = k(i.widgetId),
					n = o.get(i.widgetId);
				if (!(!r || !n)) switch (i.event) {
					case "init": {
						let l = document.getElementById(r);
						if (!l) {
							c(`Cannot initialize Widget, Element not found (#${r}).`);
							return
						}
						n.mode = i.mode, n.params.appearance === "always" ? G(l, n) : X(l), l.style.display = "";
						break
					}
					case "reject": {
						if (!document.getElementById(r)) {
							c(`Cannot initialize Widget, Element not found (#${r}).`);
							return
						}
						if (i.reason === "outdated_browser") {
							let u = n.cbUnsupported;
							u && u()
						}
						break
					}
					case "complete": {
						n.rcV = "0/0", n.response = i.token, Ie(r, i.token);
						let l = n.cbSuccess;
						l && l(i.token);
						break
					}
					case "fail": {
						i.rcV && (n.rcV = i.rcV), j(r);
						let l = n.cbError;
						l ? l((t = i.code) != null ? t : "undefined_error") || (i.code && g(i.code), e(n, r)) : i.code ? (e(n, r), c(i.code)) : e(n, r);
						break
					}
					case "tokenExpired": {
						let l = i.token,
							u = n.cbExpired;
						u && u(l), n.params["refresh-expired"] === "auto" && !n.isResetting && v(r);
						break
					}
					case "interactiveTimeout": {
						n.rcV = "0/0", j(r);
						let l = n.cbTimeout;
						l && l();
						break
					}
					case "refreshRequest": {
						n.rcV = "0/0", v(i.widgetId);
						break
					}
					case "interactiveBegin": {
						let l = document.getElementById(r);
						if (!l) {
							c(`Cannot layout widget, Element not found (#${r}).`);
							return
						}
						let u = n.cbBeforeInteractive;
						u && u(), n.params.appearance === "interaction-only" && G(l, n);
						break
					}
					case "interactiveEnd": {
						let l = document.getElementById(r);
						if (!l) {
							c(`Cannot unlayout widget, Element not found (#${r}).`);
							return
						}
						n.params.appearance === "interaction-only" && X(l);
						let u = n.cbAfterInteractive;
						u && u();
						break
					}
					case "requestExtraParams": {
						let l = document.querySelector(`#${r}`);
						if (!l) {
							c(`Received state for an unknown widget: ${i.widgetId}`);
							return
						}
						n.isResetting = !1, (d = l.contentWindow) == null || d.postMessage({
							source: "cloudflare-challenge",
							widgetId: i.widgetId,
							event: "extraParams",
							action: n.action,
							cData: n.cData,
							cPageData: n.cPageData,
							rcV: n.rcV,
							url: Se(),
							retry: n.params.retry,
							"retry-interval": n.params["retry-interval"],
							"refresh-expired": n.params["refresh-expired"],
							language: n.params.language,
							execution: n.params.execution,
							appearance: n.params.appearance
						}, "*"), $(n, i.widgetId, l), n.isInitialized = !0;
						break
					}
				}
			};
		window.addEventListener("message", f);

		function p() {
			let a;
			do {
				a = "";
				let i = "abcdefghijklmnopqrstuvwxyz0123456789",
					r = i.length;
				for (let n = 0; n < 5; n++) a += i.charAt(Math.floor(Math.random() * r))
			} while (o.has(a));
			return a
		}

		function E(a) {
			if (typeof a == "string") {
				if (a = pe(a), !a) return null;
				if (o.has(a)) return a;
				try {
					let i = document.querySelector(a);
					return i ? E(i) : null
				} catch (i) {
					return null
				}
			}
			if (a instanceof HTMLElement) {
				let i = a.querySelector("iframe");
				return i ? pe(i.id) : null
			}
			return a || o.size === 0 ? null : o.keys().next().value
		}

		function $(a, i, r) {
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

		function v(a) {
			var n;
			let i = E(a);
			if (!i) {
				c("Nothing to reset found for provided container");
				return
			}
			let r = o.get(i);
			if (r) {
				r.isResetting = !0, r.response = void 0, r.mode = void 0, r.msgQueue = [], r.isInitialized = !1, r.params.execution === "render" && r.msgQueue.push("execute");
				let t = k(i),
					d = document.querySelector(`#${t}`);
				if (!t || !d) {
					c(`Widget ${i} to reset was not found.`);
					return
				}
				if (r.params.appearance === "interaction-only" && X(d), r.params.sitekey === null) throw new Error("Unexpected Error: Sitekey is null");
				d.src = ge(i, r.params.sitekey, r.params, (n = r.rcV) != null ? n : "0/0"), j(t)
			} else {
				c(`Widget ${i} to reset was not found.`);
				return
			}
		}

		function w(a) {
			let i = E(a);
			if (!i || !o.has(i)) {
				g("Nothing to remove found for the provided container");
				return
			}
			let r = k(i),
				n = [`iframe#${r}`, `input#${r}_response`, `input#${r}_legacy_response`, `input#${r}_g_response`];
			document.querySelectorAll(n.join(", ")).forEach(t => t.remove()), o.delete(i)
		}

		function x(a, i) {
			var K, ee, te, ne, re, ie, ae, oe, se, le;
			let r;
			if (typeof a == "string") try {
					let m = document.querySelector(a);
					if (!m) {
						c(`Unable to find a container for "${a}"`);
						return
					}
					r = m
				} catch (m) {
					c(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${a}"`);
					return
				} else if (a instanceof HTMLElement) r = a;
				else {
					c('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
					return
				} let n = _e(r);
			if (!n) return;
			let t = Object.assign(n, i),
				{
					action: d,
					cData: l,
					cPageData: u
				} = t,
				y = t.sitekey;
			t.theme = (K = t.theme) != null ? K : "auto", t.retry = (ee = t.retry) != null ? ee : "auto", t.execution = (te = t.execution) != null ? te : "render", t.appearance = (ne = t.appearance) != null ? ne : "always", t["retry-interval"] = (re = t["retry-interval"]) != null ? re : Le, t.size = (ie = t.size) != null ? ie : "normal";
			let U = t.callback,
				L = t["expired-callback"],
				T = t["timeout-callback"],
				A = t["after-interactive-callback"],
				M = t["before-interactive-callback"],
				C = t["error-callback"],
				he = t["unsupported-callback"];
			if (typeof y != "string") {
				c(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof y}"`);
				return
			}
			if (!ce(y)) {
				c(`Invalid input for parameter "sitekey", got "${y}"`);
				return
			}
			if (!V(t.size)) {
				c(`Invalid type for parameter "size", expected normal|compact, got "${t.size}" ${typeof t.size}`);
				return
			}
			if (!P(t.theme)) {
				c(`Invalid type for parameter "theme", expected dark|light|auto, got "${t.theme}" ${typeof t.theme}`);
				return
			}
			if (!H(t.retry)) {
				c(`Invalid type for parameter "retry", expected never|auto, got "${t.retry}" ${typeof t.retry}`);
				return
			}
			if (t.language || (t.language = "auto"), !B(t.language)) {
				c(`Invalid data-language value: "${t.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`);
				return
			}
			if (!q(t.appearance)) {
				c(`Unknown data-appearance value: "${t.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`);
				return
			}
			if (!Y(t.execution)) {
				c(`Unknown data-execution value: "${t.execution}, expected either: 'render' or 'execute'.`);
				return
			}
			if (!z(t["retry-interval"])) {
				g(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
				return
			}
			let N = (ae = t["refresh-expired"]) != null ? ae : "auto";
			if (F(N)) t["refresh-expired"] = N;
			else {
				c(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${N}" ${typeof N}`);
				return
			}
			let D = r.getElementsByTagName("iframe")[0];
			D != null && D.id.startsWith(O) && w(r);
			let I = document.createElement("iframe");
			if (!de(d)) {
				c(`Invalid input for optional parameter "action", got "${d}"`);
				return
			}
			if (!ue(l)) {
				c(`Invalid input for optional parameter "cData", got "${l}"`);
				return
			}
			let S = p(),
				R = k(S);
			if (!S || !R) return;
			let J = [];
			if (t.execution === "render" && J.push("execute"), s++, o.set(S, {
					idx: s,
					action: d,
					cData: l,
					cPageData: u,
					cbSuccess: U,
					cbError: C,
					cbExpired: L,
					cbTimeout: T,
					cbUnsupported: he,
					cbAfterInteractive: A,
					cbBeforeInteractive: M,
					params: t,
					isResetting: !1,
					isInitialized: !1,
					msgQueue: J,
					rcV: "0/0"
				}), I.style.display = "none", I.style.border = "none", I.style.overflow = "hidden", I.setAttribute("src", ge(S, y, t, "0/0")), I.setAttribute("allow", "cross-origin-isolated"), I.id = R, I.tabIndex = (oe = t.tabindex) != null ? oe : 0, I.title = "Widget containing a Cloudflare security challenge", r.appendChild(I), (se = t["response-field"]) != null ? se : !0) {
				let m = document.createElement("input");
				if (m.type = "hidden", m.name = (le = t["response-field-name"]) != null ? le : Ce, m.id = `${R}_response`, r.appendChild(m), typeof t["response-field-name"] != "string" && Ne(y)) {
					let _ = document.createElement("input");
					_.type = "hidden", _.name = $e, _.id = `${R}_legacy_response`, r.appendChild(_)
				}
			}
			if (W) {
				let m = document.createElement("input");
				m.type = "hidden", m.name = ke, m.id = `${R}_g_response`, r.appendChild(m)
			}
			return R
		}
		return {
			ready(a) {
				if (me) throw g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof a != "function" && c(`turnstile.ready() expected a "function" argument, got "${typeof a}"`), a(), typeof a != "function" && c('Invalid value for parameter "callback", you must provide a callback function as argument to ready()'), ye) {
					a();
					return
				}
				Q.push(a)
			},
			implicitRender: Ee,
			execute(a, i) {
				let r = E(a);
				if (!r) {
					if (i === void 0) {
						c("Please provide 2 parameters to execute: container and parameters");
						return
					}
					let t = x(a, i);
					if (!t) {
						c("Failed to render widget");
						return
					}
					r = t
				}
				let n = o.get(r);
				if (n) {
					if (n.response) {
						n.cbSuccess && n.cbSuccess(n.response);
						return
					}
					n.msgQueue.push("execute");
					let t = k(r),
						d = document.querySelector(`#${t}`);
					if (!d) {
						c(`Widget ${t} to execute was not found`);
						return
					}
					n.isInitialized && $(n, r, d), n.params.appearance === "execute" && G(d, n)
				}
			},
			render: x,
			reset: v,
			remove: w,
			getResponse(a) {
				var r, n;
				if (typeof a == "undefined") {
					let t, d = -1;
					for (let [l, u] of o) d < u.idx && (t = l, d = u.idx);
					if (d === -1) {
						c("Could not find widget");
						return
					}
					return (r = o.get(t)) == null ? void 0 : r.response
				}
				let i = E(a);
				if (!i) {
					c("Could not find widget for provided container");
					return
				}
				return (n = o.get(i)) == null ? void 0 : n.response
			}
		}
	}();

	function _e(e) {
		var M;
		let s = {
				sitekey: e.getAttribute("data-sitekey")
			},
			f = e.getAttribute("data-tabindex");
		f && (s.tabindex = parseInt(f, 10));
		let p = e.getAttribute("data-theme");
		p && (P(p) ? s.theme = p : g(`Unknown data-theme value: "${p}"`));
		let E = e.getAttribute("data-size");
		E && (V(E) ? s.size = E : g(`Unknown data-size value: "${E}"`));
		let $ = e.getAttribute("data-action");
		typeof $ == "string" && (s.action = $);
		let v = e.getAttribute("data-cdata");
		typeof v == "string" && (s.cData = v);
		let w = e.getAttribute("data-retry");
		w && (H(w) ? s.retry = w : g(`Invalid data-retry value: "${w}, expected either 'never' or 'auto'"`));
		let x = e.getAttribute("data-retry-interval");
		if (x) {
			let C = parseInt(x, 10);
			z(C) ? s["retry-interval"] = C : g(`Invalid data-retry-interval value: "${x}, expected an integer value > 0 and < 900000"`)
		}
		let a = e.getAttribute("data-refresh-expired");
		a && (F(a) ? s["refresh-expired"] = a : g(`Unknown data-refresh-expired value: "${a}, expected either: 'never', 'auto' or 'manual'.`));
		let i = e.getAttribute("data-language");
		i && (B(i) ? s.language = i : g(`Invalid data-language value: "${i}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`));
		let r = e.getAttribute("data-error-callback");
		r && window[r] && (s["error-callback"] = window[r]);
		let n = e.getAttribute("data-unsupported-callback");
		n && window[n] && r && window[r] && (s["unsupported-callback"] = window[r]);
		let t = e.getAttribute("data-callback");
		t && window[t] && (s.callback = window[t]);
		let d = e.getAttribute("data-expired-callback");
		d && window[d] && (s["expired-callback"] = window[d]);
		let l = e.getAttribute("data-timeout-callback");
		l && window[l] && (s["timeout-callback"] = window[l]);
		let u = e.getAttribute("data-after-interactive-callback");
		u && window[u] && (s["after-interactive-callback"] = window[u]);
		let y = e.getAttribute("data-before-interactive-callback");
		y && window[y] && (s["before-interactive-callback"] = window[y]);
		let U = (M = e.getAttribute("data-response-field")) != null ? M : "true";
		s["response-field"] = U === "true";
		let L = e.getAttribute("data-response-field-name");
		L && (s["response-field-name"] = L);
		let T = e.getAttribute("data-execution");
		T && (Y(T) ? s.execution = T : g(`Unknown data-execution value: "${T}, expected either: 'render' or 'execute'.`));
		let A = e.getAttribute("data-appearance");
		return A && (q(A) ? s.appearance = A : g(`Unknown data-appearance value: "${A}, expected either: 'always', 'execute', or 'interaction-only'.`)), s
	}

	function Oe() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			o = document.currentScript;
		if (o instanceof HTMLScriptElement && e.test(o.src)) return o;
		let s = document.querySelectorAll("script");
		for (let f = 0, p; p = s[f]; f++)
			if (p instanceof HTMLScriptElement && e.test(p.src)) return p
	}

	function We() {
		let e = Oe();
		if (!e) return c("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (me = !0);
		let s = e.src.split("?");
		return s.length > 1 ? new URLSearchParams(s[1]) : new URLSearchParams
	}
	var b = We();
	if (b) {
		let e = b.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), W = !0, window.grecaptcha = Z): e !== null && g(`Unknown value for api.js?compat: "${e}", ignoring`), b.forEach(function(s, f) {
			h(["onload", "compat", "render"], f) || g(`Unknown parameter passed to api.js: "?${f}=...", ignoring`)
		});
		let o = b.get("onload");
		o && setTimeout(function() {
			typeof window[o] == "function" ? window[o]() : (g(`Unable to find onload callback '${o}' immediately after loading, expected 'function', got '${typeof window[o]}'`), setTimeout(function() {
				typeof window[o] == "function" ? window[o]() : g(`Unable to find onload callback '${o}' after 1 second, expected 'function', got '${typeof window[o]}'`)
			}, 1e3))
		}, 0)
	}
	var Ue = "turnstile" in window;
	Ue ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = Z, (b == null ? void 0 : b.get("render")) !== "explicit" && Q.push(Ee), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(fe, 0) : window.addEventListener("DOMContentLoaded", fe));
})();