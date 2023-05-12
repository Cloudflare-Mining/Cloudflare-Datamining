"use strict";
(() => {
	function h(e, o) {
		return e.indexOf(o) !== -1
	}

	function H(e) {
		return h(["auto", "dark", "light"], e)
	}

	function z(e) {
		return h(["auto", "never"], e)
	}

	function V(e) {
		return e > 0 && e < 9e5
	}
	var we = /^[0-9A-Za-z_-]{3,100}$/;

	function de(e) {
		return we.test(e)
	}
	var be = /^[a-z0-9_-]{0,32}$/i;

	function ue(e) {
		return e === void 0 ? !0 : typeof e == "string" && be.test(e)
	}
	var xe = /^[a-z0-9_\-=]{0,255}$/i;

	function fe(e) {
		return e === void 0 ? !0 : typeof e == "string" && xe.test(e)
	}

	function F(e) {
		return h(["normal", "compact", "invisible"], e)
	}

	function B(e) {
		return h(["auto", "manual", "never"], e)
	}
	var Te = /^[a-z]{2}(-[A-Z]{2})?$/;

	function q(e) {
		return e === "auto" || Te.test(e)
	}

	function Y(e) {
		return h(["always", "execute", "interaction-only"], e)
	}

	function j(e) {
		return h(["render", "execute"], e)
	}
	var b = "0/0";
	var Ae = ".cf-turnstile",
		Re = ".cf-challenge",
		Ce = ".g-recaptcha",
		$e = "cf_challenge_response",
		ke = "cf-turnstile-response",
		Le = "g-recaptcha-response",
		Me = 8e3,
		U = !1,
		Ee = !1;

	function c(e) {
		let o = `[Cloudflare Turnstile] ${e}.`;
		throw console.error(o), new Error(o)
	}

	function g(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function G(e) {
		he(e, "")
	}

	function ye() {
		let e = [Ae, Re];
		U && e.push(Ce), document.querySelectorAll(e.join(", ")).forEach(o => J.render(o))
	}
	var Z = [],
		Ie = !1;

	function pe() {
		Ie = !0;
		for (let e of Z) e()
	}
	var W = "cf-chl-widget-";

	function ge(e) {
		return e.startsWith(W) ? e.substring(W.length) : null
	}

	function L(e) {
		return `${W}${e}`
	}

	function he(e, o) {
		let s = document.getElementById(`${e}_response`);
		s !== null && s instanceof HTMLInputElement && (s.value = o);
		let f = document.getElementById(`${e}_legacy_response`);
		if (f !== null && f instanceof HTMLInputElement && (f.value = o), U) {
			let p = document.getElementById(`${e}_g_response`);
			p !== null && p instanceof HTMLInputElement && (p.value = o)
		}
	}

	function X(e, o) {
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

	function Q(e) {
		e.style.width = "0", e.style.height = "0"
	}

	function me(e, o, s, f) {
		return `https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/if/ov2/av0/rcv${f}/${e}/${o}/${s.theme}/${s.size}`
	}

	function _e(e) {
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
	var J = function() {
		function e(a, i) {
			var t;
			if (a.params.retry === "auto") {
				a.msgQueue.push("execute");
				let r = 1e3 * 2 + ((t = a.params["retry-interval"]) != null ? t : 0);
				window.setTimeout(function() {
					v(i)
				}, r)
			}
		}
		let o = new Map,
			s = 0,
			f = function(a) {
				var n, d;
				let i = a.data;
				if (i.source !== "cloudflare-challenge") return;
				if (!_e(a)) {
					c("Ignored message from wrong origin: " + a.origin);
					return
				}
				if (!i.widgetId || !o.has(i.widgetId)) return;
				let t = L(i.widgetId),
					r = o.get(i.widgetId);
				if (!(!t || !r)) switch (i.event) {
					case "init": {
						let l = document.getElementById(t);
						if (!l) {
							c(`Cannot initialize Widget, Element not found (#${t}).`);
							return
						}
						r.mode = i.mode, r.params.appearance === "always" ? X(l, r) : Q(l), l.style.display = "";
						break
					}
					case "reject": {
						if (!document.getElementById(t)) {
							c(`Cannot initialize Widget, Element not found (#${t}).`);
							return
						}
						if (i.reason === "outdated_browser") {
							let u = r.cbUnsupported;
							u && u()
						}
						break
					}
					case "complete": {
						r.rcV = b, r.response = i.token, he(t, i.token);
						let l = r.cbSuccess;
						l && l(i.token);
						break
					}
					case "fail": {
						i.rcV && (r.rcV = i.rcV), G(t);
						let l = r.cbError;
						l ? l((n = i.code) != null ? n : "undefined_error") || (i.code && g(i.code), e(r, t)) : i.code ? (e(r, t), c(i.code)) : e(r, t);
						break
					}
					case "tokenExpired": {
						let l = i.token,
							u = r.cbExpired;
						u && u(l), r.params["refresh-expired"] === "auto" && !r.isResetting && v(t);
						break
					}
					case "interactiveTimeout": {
						r.rcV = b, G(t);
						let l = r.cbTimeout;
						l && l();
						break
					}
					case "refreshRequest": {
						r.rcV = b, v(i.widgetId);
						break
					}
					case "interactiveBegin": {
						let l = document.getElementById(t);
						if (!l) {
							c(`Cannot layout widget, Element not found (#${t}).`);
							return
						}
						let u = r.cbBeforeInteractive;
						u && u(), r.params.appearance === "interaction-only" && X(l, r);
						break
					}
					case "interactiveEnd": {
						let l = document.getElementById(t);
						if (!l) {
							c(`Cannot unlayout widget, Element not found (#${t}).`);
							return
						}
						r.params.appearance === "interaction-only" && Q(l);
						let u = r.cbAfterInteractive;
						u && u();
						break
					}
					case "requestExtraParams": {
						let l = document.querySelector(`#${t}`);
						if (!l) {
							c(`Received state for an unknown widget: ${i.widgetId}`);
							return
						}
						r.isResetting = !1, (d = l.contentWindow) == null || d.postMessage({
							source: "cloudflare-challenge",
							widgetId: i.widgetId,
							event: "extraParams",
							action: r.action,
							cData: r.cData,
							cPageData: r.cPageData,
							rcV: r.rcV,
							url: Se(),
							retry: r.params.retry,
							"retry-interval": r.params["retry-interval"],
							"refresh-expired": r.params["refresh-expired"],
							language: r.params.language,
							execution: r.params.execution,
							appearance: r.params.appearance
						}, "*"), $(r, i.widgetId, l), r.isInitialized = !0;
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
					t = i.length;
				for (let r = 0; r < 5; r++) a += i.charAt(Math.floor(Math.random() * t))
			} while (o.has(a));
			return a
		}

		function E(a) {
			if (typeof a == "string") {
				let i = ge(a);
				if (i && o.has(i)) return i;
				try {
					let t = document.querySelector(a);
					return t ? E(t) : null
				} catch (t) {
					return null
				}
			}
			if (a instanceof HTMLElement) {
				let i = a.querySelector("iframe");
				return i ? ge(i.id) : null
			}
			return a || o.size === 0 ? null : o.keys().next().value
		}

		function $(a, i, t) {
			var r;
			for (; a.msgQueue.length;) {
				let n = a.msgQueue.pop();
				(r = t.contentWindow) == null || r.postMessage({
					source: "cloudflare-challenge",
					widgetId: i,
					event: n
				}, "*")
			}
		}

		function v(a) {
			var r;
			let i = E(a);
			if (!i) {
				c("Nothing to reset found for provided container");
				return
			}
			let t = o.get(i);
			if (t) {
				t.isResetting = !0, t.response = void 0, t.mode = void 0, t.msgQueue = [], t.isInitialized = !1, t.params.execution === "render" && t.msgQueue.push("execute");
				let n = L(i),
					d = document.querySelector(`#${n}`);
				if (!n || !d) {
					c(`Widget ${i} to reset was not found.`);
					return
				}
				if (t.params.appearance === "interaction-only" && Q(d), t.params.sitekey === null) throw new Error("Unexpected Error: Sitekey is null");
				d.src = me(i, t.params.sitekey, t.params, (r = t.rcV) != null ? r : b), G(n)
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
			let t = L(i),
				r = [`iframe#${t}`, `input#${t}_response`, `input#${t}_legacy_response`, `input#${t}_g_response`];
			document.querySelectorAll(r.join(", ")).forEach(n => n.remove()), o.delete(i)
		}

		function T(a, i) {
			var ee, te, ne, re, ie, ae, oe, se, le, ce;
			let t;
			if (typeof a == "string") try {
					let m = document.querySelector(a);
					if (!m) {
						c(`Unable to find a container for "${a}"`);
						return
					}
					t = m
				} catch (m) {
					c(`Invalid type for "container", expected "selector" or an implementation of "HTMLElement", got "${a}"`);
					return
				} else if (a instanceof HTMLElement) t = a;
				else {
					c('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
					return
				} let r = Oe(t);
			if (!r) return;
			let n = Object.assign(r, i),
				{
					action: d,
					cData: l,
					cPageData: u
				} = n,
				y = n.sitekey;
			n.theme = (ee = n.theme) != null ? ee : "auto", n.retry = (te = n.retry) != null ? te : "auto", n.execution = (ne = n.execution) != null ? ne : "render", n.appearance = (re = n.appearance) != null ? re : "always", n["retry-interval"] = (ie = n["retry-interval"]) != null ? ie : Me, n.size = (ae = n.size) != null ? ae : "normal";
			let D = n.callback,
				M = n["expired-callback"],
				A = n["timeout-callback"],
				R = n["after-interactive-callback"],
				_ = n["before-interactive-callback"],
				k = n["error-callback"],
				ve = n["unsupported-callback"];
			if (typeof y != "string") {
				c(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof y}"`);
				return
			}
			if (!de(y)) {
				c(`Invalid input for parameter "sitekey", got "${y}"`);
				return
			}
			if (!F(n.size)) {
				c(`Invalid type for parameter "size", expected normal|compact, got "${n.size}" ${typeof n.size}`);
				return
			}
			if (!H(n.theme)) {
				c(`Invalid type for parameter "theme", expected dark|light|auto, got "${n.theme}" ${typeof n.theme}`);
				return
			}
			if (!z(n.retry)) {
				c(`Invalid type for parameter "retry", expected never|auto, got "${n.retry}" ${typeof n.retry}`);
				return
			}
			if (n.language || (n.language = "auto"), !q(n.language)) {
				c(`Invalid data-language value: "${n.language}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`);
				return
			}
			if (!Y(n.appearance)) {
				c(`Unknown data-appearance value: "${n.appearance}, expected either: 'always', 'execute', or 'interaction-only'.`);
				return
			}
			if (!j(n.execution)) {
				c(`Unknown data-execution value: "${n.execution}, expected either: 'render' or 'execute'.`);
				return
			}
			if (!V(n["retry-interval"])) {
				g(`Invalid data-retry-interval value: "${n["retry-interval"]}, expected an integer value > 0 and < 900000"`);
				return
			}
			let N = (oe = n["refresh-expired"]) != null ? oe : "auto";
			if (B(N)) n["refresh-expired"] = N;
			else {
				c(`Invalid type for parameter "refresh-expired", expected never|manual|auto, got "${N}" ${typeof N}`);
				return
			}
			let P = t.getElementsByTagName("iframe")[0];
			P != null && P.id.startsWith(W) && w(t);
			let I = document.createElement("iframe");
			if (!ue(d)) {
				c(`Invalid input for optional parameter "action", got "${d}"`);
				return
			}
			if (!fe(l)) {
				c(`Invalid input for optional parameter "cData", got "${l}"`);
				return
			}
			let S = p(),
				C = L(S);
			if (!S || !C) return;
			let K = [];
			if (n.execution === "render" && K.push("execute"), s++, o.set(S, {
					idx: s,
					action: d,
					cData: l,
					cPageData: u,
					cbSuccess: D,
					cbError: k,
					cbExpired: M,
					cbTimeout: A,
					cbUnsupported: ve,
					cbAfterInteractive: R,
					cbBeforeInteractive: _,
					params: n,
					isResetting: !1,
					isInitialized: !1,
					msgQueue: K,
					rcV: b
				}), I.style.display = "none", I.style.border = "none", I.style.overflow = "hidden", I.setAttribute("src", me(S, y, n, b)), I.setAttribute("allow", "cross-origin-isolated"), I.id = C, I.tabIndex = (se = n.tabindex) != null ? se : 0, I.title = "Widget containing a Cloudflare security challenge", t.appendChild(I), (le = n["response-field"]) != null ? le : !0) {
				let m = document.createElement("input");
				if (m.type = "hidden", m.name = (ce = n["response-field-name"]) != null ? ce : ke, m.id = `${C}_response`, t.appendChild(m), typeof n["response-field-name"] != "string" && Ne(y)) {
					let O = document.createElement("input");
					O.type = "hidden", O.name = $e, O.id = `${C}_legacy_response`, t.appendChild(O)
				}
			}
			if (U) {
				let m = document.createElement("input");
				m.type = "hidden", m.name = Le, m.id = `${C}_g_response`, t.appendChild(m)
			}
			return C
		}
		return {
			ready(a) {
				if (Ee) throw g("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				if (typeof a != "function" && c(`turnstile.ready() expected a "function" argument, got "${typeof a}"`), a(), typeof a != "function" && c('Invalid value for parameter "callback", you must provide a callback function as argument to ready()'), Ie) {
					a();
					return
				}
				Z.push(a)
			},
			implicitRender: ye,
			execute(a, i) {
				let t = E(a);
				if (!t) {
					if (i === void 0) {
						c("Please provide 2 parameters to execute: container and parameters");
						return
					}
					let n = T(a, i);
					if (!n) {
						c("Failed to render widget");
						return
					}
					t = n
				}
				let r = o.get(t);
				if (r) {
					if (r.response) {
						r.cbSuccess && r.cbSuccess(r.response);
						return
					}
					r.msgQueue.push("execute");
					let n = L(t),
						d = document.querySelector(`#${n}`);
					if (!d) {
						c(`Widget ${n} to execute was not found`);
						return
					}
					r.isInitialized && $(r, t, d), r.params.appearance === "execute" && X(d, r)
				}
			},
			render: T,
			reset: v,
			remove: w,
			getResponse(a) {
				var t, r;
				if (typeof a == "undefined") {
					let n, d = -1;
					for (let [l, u] of o) d < u.idx && (n = l, d = u.idx);
					if (d === -1) {
						c("Could not find widget");
						return
					}
					return (t = o.get(n)) == null ? void 0 : t.response
				}
				let i = E(a);
				if (!i) {
					c("Could not find widget for provided container");
					return
				}
				return (r = o.get(i)) == null ? void 0 : r.response
			}
		}
	}();

	function Oe(e) {
		var _;
		let s = {
				sitekey: e.getAttribute("data-sitekey")
			},
			f = e.getAttribute("data-tabindex");
		f && (s.tabindex = parseInt(f, 10));
		let p = e.getAttribute("data-theme");
		p && (H(p) ? s.theme = p : g(`Unknown data-theme value: "${p}"`));
		let E = e.getAttribute("data-size");
		E && (F(E) ? s.size = E : g(`Unknown data-size value: "${E}"`));
		let $ = e.getAttribute("data-action");
		typeof $ == "string" && (s.action = $);
		let v = e.getAttribute("data-cdata");
		typeof v == "string" && (s.cData = v);
		let w = e.getAttribute("data-retry");
		w && (z(w) ? s.retry = w : g(`Invalid data-retry value: "${w}, expected either 'never' or 'auto'"`));
		let T = e.getAttribute("data-retry-interval");
		if (T) {
			let k = parseInt(T, 10);
			V(k) ? s["retry-interval"] = k : g(`Invalid data-retry-interval value: "${T}, expected an integer value > 0 and < 900000"`)
		}
		let a = e.getAttribute("data-refresh-expired");
		a && (B(a) ? s["refresh-expired"] = a : g(`Unknown data-refresh-expired value: "${a}, expected either: 'never', 'auto' or 'manual'.`));
		let i = e.getAttribute("data-language");
		i && (q(i) ? s.language = i : g(`Invalid data-language value: "${i}, expected either: auto, or an ISO 639-1 two-letter language code (e.g. en) or language and country code (e.g. en-US)`));
		let t = e.getAttribute("data-error-callback");
		t && window[t] && (s["error-callback"] = window[t]);
		let r = e.getAttribute("data-unsupported-callback");
		r && window[r] && t && window[t] && (s["unsupported-callback"] = window[t]);
		let n = e.getAttribute("data-callback");
		n && window[n] && (s.callback = window[n]);
		let d = e.getAttribute("data-expired-callback");
		d && window[d] && (s["expired-callback"] = window[d]);
		let l = e.getAttribute("data-timeout-callback");
		l && window[l] && (s["timeout-callback"] = window[l]);
		let u = e.getAttribute("data-after-interactive-callback");
		u && window[u] && (s["after-interactive-callback"] = window[u]);
		let y = e.getAttribute("data-before-interactive-callback");
		y && window[y] && (s["before-interactive-callback"] = window[y]);
		let D = (_ = e.getAttribute("data-response-field")) != null ? _ : "true";
		s["response-field"] = D === "true";
		let M = e.getAttribute("data-response-field-name");
		M && (s["response-field-name"] = M);
		let A = e.getAttribute("data-execution");
		A && (j(A) ? s.execution = A : g(`Unknown data-execution value: "${A}, expected either: 'render' or 'execute'.`));
		let R = e.getAttribute("data-appearance");
		return R && (Y(R) ? s.appearance = R : g(`Unknown data-appearance value: "${R}, expected either: 'always', 'execute', or 'interaction-only'.`)), s
	}

	function We() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			o = document.currentScript;
		if (o instanceof HTMLScriptElement && e.test(o.src)) return o;
		let s = document.querySelectorAll("script");
		for (let f = 0, p; p = s[f]; f++)
			if (p instanceof HTMLScriptElement && e.test(p.src)) return p
	}

	function Ue() {
		let e = We();
		if (!e) return c("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (Ee = !0);
		let s = e.src.split("?");
		return s.length > 1 ? new URLSearchParams(s[1]) : new URLSearchParams
	}
	var x = Ue();
	if (x) {
		let e = x.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), U = !0, window.grecaptcha = J): e !== null && g(`Unknown value for api.js?compat: "${e}", ignoring`), x.forEach(function(s, f) {
			h(["onload", "compat", "render"], f) || g(`Unknown parameter passed to api.js: "?${f}=...", ignoring`)
		});
		let o = x.get("onload");
		o && setTimeout(function() {
			typeof window[o] == "function" ? window[o]() : (g(`Unable to find onload callback '${o}' immediately after loading, expected 'function', got '${typeof window[o]}'`), setTimeout(function() {
				typeof window[o] == "function" ? window[o]() : g(`Unable to find onload callback '${o}' after 1 second, expected 'function', got '${typeof window[o]}'`)
			}, 1e3))
		}, 0)
	}
	var De = "turnstile" in window;
	De ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : (window.turnstile = J, (x == null ? void 0 : x.get("render")) !== "explicit" && Z.push(ye), document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(pe, 0) : window.addEventListener("DOMContentLoaded", pe));
})();