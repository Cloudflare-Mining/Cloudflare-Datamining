(() => {
	function b(e, s) {
		return e.indexOf(s) !== -1
	}

	function _(e) {
		return b(["auto", "dark", "light"], e)
	}
	var q = /^[0-9A-Za-z_-]{3,100}$/;

	function O(e) {
		return q.test(e)
	}
	var X = /^[a-z0-9_-]{0,32}$/i;

	function D(e) {
		return X.test(e)
	}
	var Y = /^[a-z0-9_-]{0,255}$/i;

	function H(e) {
		return Y.test(e)
	}

	function L(e) {
		return b(["normal", "compact", "invisible"], e)
	}
	var J = ".cf-turnstile",
		K = ".cf-challenge",
		Z = ".g-recaptcha",
		Q = "cf_challenge_response",
		ee = "cf-turnstile-response",
		te = "g-recaptcha-response",
		$ = !1;

	function d(e) {
		console.error(`[Cloudflare Turnstile] ${e}.`)
	}

	function E(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function ne(e) {
		d(`Failed with code: ${e}`)
	}

	function R(e) {
		B(e, "")
	}
	var C = "cf-chl-widget-";

	function z(e) {
		return e.startsWith(C) ? e.substring(C.length) : null
	}

	function x(e) {
		return `${C}${e}`
	}

	function B(e, s) {
		let r = document.getElementById(`${e}_response`);
		r !== null && (r.value = s);
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = s), $) {
			let t = document.getElementById(`${e}_g_response`);
			t !== null && (t.value = s)
		}
	}

	function ie(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function re(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function oe() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var y = function() {
		let e = new Map,
			s = function(t) {
				var a;
				let n = t.data;
				if (n.source !== "cloudflare-challenge") return;
				if (!ie(t)) {
					d("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let o = x(n.widgetId),
					l = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let i = document.getElementById(o);
						if (!i) {
							d(`Cannot initialize Widget, Element not found (#${o}).`);
							return
						}
						let c = n.mode,
							g = (a = l.params.size) != null ? a : "normal";
						switch (c) {
							case "non-interactive":
							case "managed":
								switch (g) {
									case "compact":
										i.style.width = "130px", i.style.height = "120px";
										break;
									case "invisible":
										d(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${g}"`);
									case "normal":
										i.style.width = "300px", i.style.height = "65px";
										break
								}
								break;
							case "invisible":
								i.style.width = "0", i.style.height = "0", i.style.position = "absolute";
								break;
							default:
								d(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${c}"`);
								return
						}
						i.style.display = "";
						break
					}
					case "complete": {
						e.get(n.widgetId).response = n.token, B(o, n.token);
						let i = l.cbSuccess;
						i && i(n.token);
						break
					}
					case "fail": {
						n.code && ne(n.code), R(o);
						let i = l.cbError;
						i && i();
						break
					}
					case "tokenExpired": {
						let i = n.token,
							c = l.cbExpired;
						c && c(i);
						break
					}
					case "timeout": {
						R(o);
						let i = l.cbTimeout;
						i && i();
						break
					}
					case "requestExtraParams": {
						document.querySelector(`#${o}`).contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: n.widgetId,
							event: "extraParams",
							action: l.action,
							cData: l.cData,
							url: oe()
						}, "*");
						break
					}
				}
			};
		window.addEventListener("message", s);

		function r() {
			let t;
			do {
				t = "";
				let n = "abcdefghijklmnopqrstuvwxyz0123456789",
					o = n.length;
				for (let l = 0; l < 5; l++) t += n.charAt(Math.floor(Math.random() * o))
			} while (e.has(t));
			return t
		}

		function u(t) {
			if (typeof t == "string") {
				if (t.startsWith(C) && (t = z(t)), e.has(t)) return t;
				try {
					let n = document.querySelector(t);
					return n ? u(n) : null
				} catch (n) {
					return null
				}
			}
			if (t instanceof HTMLElement) {
				let n = t.querySelector("iframe");
				return n ? z(n.id) : null
			}
			return t || e.size === 0 ? null : e.keys().next().value
		}
		return {
			render(t, n) {
				var S, M, P, N, W;
				let o;
				if (typeof t == "string") try {
						if (o = document.querySelector(t), !o) {
							d(`Unable to find a container for "${t}"`);
							return
						}
					} catch (p) {
						d(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${t}"`);
						return
					} else if (t instanceof HTMLElement) o = t;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let l = ae(o),
					a = Object.assign(l, n),
					{
						action: i,
						cData: c
					} = a,
					g = a.sitekey,
					f = (S = a.theme) != null ? S : "auto",
					I = (M = a.size) != null ? M : "normal",
					A = a.callback,
					v = a["expired-callback"],
					V = a["timeout-callback"],
					G = a["error-callback"];
				if (typeof g != "string") {
					d(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof g}"`);
					return
				}
				if (!O(g)) {
					d(`Invalid input for parameter "sitekey", got "${g}"`);
					return
				}
				if (!L(I)) {
					d(`Invalid type for parameter "size", expected normal|compact, got "${I}" ${typeof I}`);
					return
				}
				if (!_(f)) {
					d(`Invalid type for parameter "theme", expected dark|light|auto, got "${f}" ${typeof f}`);
					return
				}
				let m = document.createElement("iframe");
				if (i !== void 0 && typeof i != "string") {
					d(`Invalid type for parameter "action", expected "string", got "${typeof i}"`);
					return
				}
				if (i = i === void 0 ? null : i, !D(i)) {
					d(`Invalid input for parameter "action", got "${i}"`);
					return
				}
				if (c !== void 0 && typeof c != "string") {
					d(`Invalid type for parameter "cData", expected "string", got "${typeof c}"`);
					return
				}
				if (!H(c)) {
					d(`Invalid input for parameter "cData", got "${c}"`);
					return
				}
				c = c === void 0 ? null : c;
				let U = "https://challenges.cloudflare.com",
					k = r(),
					h = x(k);
				e.set(k, {
					action: i,
					cData: c,
					cbSuccess: A,
					cbError: G,
					cbExpired: v,
					cbTimeout: V,
					params: a
				}), m.style.display = "none", m.style.border = "none", m.style.overflow = "hidden";
				let j = "";
				if (m.setAttribute("src", `${U}/cdn-cgi/challenge-platform/${j}turnstile/if/ov2/av0/${k}/${g}/${f}/${I}`), m.id = h, m.tabIndex = (P = a.tabindex) != null ? P : 0, m.title = "Widget containing a Cloudflare security challenge", o.appendChild(m), (N = a["response-field"]) != null ? N : !0) {
					let p = document.createElement("input");
					if (p.type = "hidden", p.name = (W = a["response-field-name"]) != null ? W : ee, p.id = `${h}_response`, o.appendChild(p), typeof a["response-field-name"] != "string" && re(g)) {
						let T = document.createElement("input");
						T.type = "hidden", T.name = Q, T.id = `${h}_legacy_response`, o.appendChild(T)
					}
				}
				if ($) {
					let p = document.createElement("input");
					p.type = "hidden", p.name = te, p.id = `${h}_g_response`, o.appendChild(p)
				}
				return h
			},
			reset(t) {
				let n = u(t);
				if (!n) {
					d(`Nothing to reset found for ${t}`);
					return
				}
				let o = x(n),
					l = document.querySelector(`#${o}`);
				l.src += "", R(o)
			},
			remove(t) {
				let n = u(t);
				if (!n || !e.has(n)) {
					E(`Nothing to remove found for ${t}`);
					return
				}
				let o = x(n),
					l = [`iframe#${o}`, `input#${o}_response`, `input#${o}_legacy_response`, `input#${o}_g_response`],
					a = document.querySelectorAll(l.join(", "));
				for (let i = 0; i < a.length; ++i) a[i].remove();
				e.delete(n)
			},
			getResponse(t) {
				let n = u(t);
				if (!n) {
					d(`Could not find widget for getResponse(${t})`);
					return
				}
				return e.get(n).response
			}
		}
	}();
	"Proxy" in window ? window.cfChallengeAPI = new Proxy(y, {
		get(e, s) {
			return E("window.cfChallengeAPI is deprecated, please move to window.turnstile"), e[s]
		}
	}) : window.cfChallengeAPI = y;
	window.turnstile = y;

	function ae(e) {
		var v;
		let r = {
				sitekey: e.getAttribute("data-sitekey")
			},
			u = e.getAttribute("data-tabindex");
		u && (r.tabindex = parseInt(u, 10));
		let t = e.getAttribute("data-theme");
		t && (_(t) ? r.theme = t : E(`Unknown data-theme value: "${t}"`));
		let n = e.getAttribute("data-size");
		n && (L(n) ? r.size = n : E(`Unknown data-size value: "${n}"`));
		let o = e.getAttribute("data-base-url");
		o && (r["base-url"] = o);
		let l = e.getAttribute("data-action");
		l && (r.action = l);
		let a = e.getAttribute("data-cdata");
		a && (r.cData = a);
		let i = e.getAttribute("data-error-callback");
		i && window[i] && (r["error-callback"] = window[i]);
		let c = e.getAttribute("data-callback");
		c && window[c] && (r.callback = window[c]);
		let g = e.getAttribute("data-expired-callback");
		g && window[g] && (r["expired-callback"] = window[g]);
		let f = e.getAttribute("data-timeout-callback");
		f && window[f] && (r["timeout-callback"] = window[f]);
		let I = (v = e.getAttribute("data-response-field")) != null ? v : "true";
		r["response-field"] = I === "true";
		let A = e.getAttribute("data-response-field-name");
		return A && (r["response-field-name"] = A), r
	}

	function F() {
		let e = [J, K];
		$ && e.push(Z);
		let s = document.querySelectorAll(e.join(", "));
		for (let r = 0; r < s.length; r++) y.render(s[r])
	}

	function se() {
		let e = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			s = document.currentScript;
		if (e.test(s.src)) return s;
		let r = document.getElementsByTagName("script");
		for (let u = 0; u < r.length; u++) {
			let t = r[u].src;
			if (e.test(t)) return r[u]
		}
	}

	function le() {
		let e = se();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available"), null;
		let r = e.src.split("?");
		return r.length > 1 ? new URLSearchParams(r[1]) : new URLSearchParams
	}
	var w = le();
	if (w) {
		let e = w.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? E("grecaptcha is already defined. The compatibility layer will not be enabled") : (E("Compatibility layer enabled"), $ = !0, window.grecaptcha = y): e !== null && E(`Unknown value for api.js?compat: "${e}", ignoring`), w.forEach(function(r, u) {
			b(["onload", "compat", "render"], u) || E(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let s = w.get("onload");
		s && setTimeout(function() {
			typeof window[s] == "function" && window[s]()
		}, 0)
	}
	w.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(F, 0) : window.addEventListener("DOMContentLoaded", F));
})();