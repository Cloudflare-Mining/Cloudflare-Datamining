(() => {
	var D = /^[0-9A-Za-z_-]{3,100}$/;

	function x(e) {
		return D.test(e)
	}
	var H = /^[a-z0-9_-]{0,32}$/i;

	function C(e) {
		return H.test(e)
	}
	var O = /^[a-z0-9_-]{0,255}$/i;

	function R(e) {
		return O.test(e)
	}
	var z = ".cf-turnstile",
		F = ".cf-challenge",
		U = ".g-recaptcha",
		B = "cf_challenge_response",
		V = "cf-turnstile-response",
		j = "g-recaptcha-response",
		T = !1;

	function h(e, a) {
		return e == null ? a : e
	}

	function d(e) {
		console.error(`[Cloudflare Turnstile] ${e}.`)
	}

	function m(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function k(e) {
		L(e, "")
	}
	var v = "cf-chl-widget-";

	function S(e) {
		return e.startsWith(v) ? e.substring(v.length) : null
	}

	function A(e) {
		return `${v}${e}`
	}

	function L(e, a) {
		let i = document.getElementById(`${e}_response`);
		i !== null && (i.value = a);
		let l = document.getElementById(`${e}_legacy_response`);
		if (l !== null && (l.value = a), T) {
			let t = document.getElementById(`${e}_g_response`);
			t !== null && (t.value = a)
		}
	}

	function q(e) {
		if (!e.origin) return !0;
		switch (e.origin) {
			case "https://challenges.cloudflare.com":
			case "https://challenges-staging.cloudflare.com":
				return !0;
			default:
				return !1
		}
	}

	function G(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}
	var _ = function() {
		let e = new Map,
			a = function(t) {
				let n = t.data;
				if (n.source !== "cloudflare-challenge") return;
				if (!q(t)) {
					d("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let s = A(n.widgetId),
					c = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let r = document.getElementById(s);
						if (!r) {
							d(`Cannot initialize Widget, Element not found (#${s}).`);
							return
						}
						let o = n.mode;
						switch (o) {
							case "non-interactive":
							case "managed":
								r.style.width = "300px", r.style.height = "65px";
								break;
							case "invisible":
								r.style.width = "0", r.style.height = "0", r.style.position = "absolute";
								break;
							default:
								d(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${o}"`);
								return
						}
						r.style.display = "";
						break
					}
					case "complete": {
						e.get(n.widgetId).response = n.token, L(s, n.token);
						let r = c.cbSuccess;
						r && r(n.token);
						break
					}
					case "fail": {
						k(s);
						let r = c.cbError;
						r && r();
						break
					}
					case "timeout": {
						if (k(s), c.response === void 0) {
							let r = c.cbExpired;
							r && r()
						}
						break
					}
					case "requestExtraParams": {
						document.querySelector(`#${s}`).contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: n.widgetId,
							event: "extraParams",
							action: c.action,
							cData: c.cData,
							url: location.href
						}, "*");
						break
					}
				}
			};
		window.addEventListener ? window.addEventListener("message", a) : window.attachEvent("onmessage", a);

		function i() {
			let t;
			do {
				t = "";
				let n = "abcdefghijklmnopqrstuvwxyz0123456789",
					s = n.length;
				for (let c = 0; c < 5; c++) t += n.charAt(Math.floor(Math.random() * s))
			} while (e.has(t));
			return t
		}

		function l(t) {
			if (typeof t == "string") {
				if (t.startsWith(v) && (t = S(t)), e.has(t)) return t;
				try {
					let n = document.querySelector(t);
					return n ? l(n) : null
				} catch (n) {
					return null
				}
			}
			if (t instanceof HTMLElement) {
				let n = t.querySelector("iframe");
				return n ? S(n.id) : null
			}
			return t || e.size === 0 ? null : e.keys().next().value
		}
		return {
			render: function(t, n) {
				let s;
				if (typeof t == "string") try {
						if (s = document.querySelector(t), !s) {
							d(`Unable to find a container for "${t}"`);
							return
						}
					} catch (f) {
						d(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${t}"`);
						return
					} else if (t instanceof HTMLElement) s = t;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let c = X(s),
					r = Object.assign(c, n),
					{
						action: o,
						cData: u
					} = r,
					g = r.sitekey,
					E = h(r.theme, "auto"),
					w = h(r.size, "normal"),
					M = r.callback,
					N = r["expired-callback"],
					P = r["error-callback"],
					K = r["base-url"];
				if (typeof g != "string") {
					d(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof g}"`);
					return
				}
				if (!x(g)) {
					d(`Invalid input for parameter "sitekey", got "${g}"`);
					return
				}
				if (typeof E != "string" || ["dark", "light", "auto"].indexOf(E) === -1) {
					d(`Invalid type for parameter "theme", expected dark|light|auto, got "${E}" ${typeof E}`);
					return
				}
				w === "compact" && m('Turnstile does not have a "compact" size, falling back to normal size');
				let p = document.createElement("iframe");
				if (o !== void 0 && typeof o != "string") {
					d(`Invalid type for parameter "action", expected "string", got "${typeof o}"`);
					return
				}
				if (o = o === void 0 ? null : o, !C(o)) {
					d(`Invalid input for parameter "action", got "${o}"`);
					return
				}
				if (u !== void 0 && typeof u != "string") {
					d(`Invalid type for parameter "cData", expected "string", got "${typeof u}"`);
					return
				}
				if (!R(u)) {
					d(`Invalid input for parameter "cData", got "${u}"`);
					return
				}
				u = u === void 0 ? null : u;
				let W = "https://challenges.cloudflare.com",
					$ = i(),
					I = A($);
				if (e.set($, {
						action: o,
						cData: u,
						cbSuccess: M,
						cbError: P,
						cbExpired: N,
						params: r
					}), p.style.display = "none", p.style.border = "none", p.style.overflow = "hidden", p.setAttribute("src", `${W}/cdn-cgi/challenge-platform/turnstile/if/ov2/av0/${$}/${g}/${E}`), p.id = I, p.tabIndex = h(r.tabindex, 0), p.title = "Widget containing a Cloudflare security challenge", s.appendChild(p), h(r["response-field"], !0)) {
					let f = document.createElement("input");
					if (f.type = "hidden", f.name = h(r["response-field-name"], V), f.id = `${I}_response`, s.appendChild(f), typeof r["response-field-name"] != "string" && G(g)) {
						let y = document.createElement("input");
						y.type = "hidden", y.name = B, y.id = `${I}_legacy_response`, s.appendChild(y)
					}
				}
				if (T) {
					let f = document.createElement("input");
					f.type = "hidden", f.name = j, f.id = `${I}_g_response`, s.appendChild(f)
				}
				return I
			},
			reset: function(t) {
				let n = l(t);
				if (!n) {
					d(`Nothing to reset found for ${t}`);
					return
				}
				let s = A(n),
					c = document.querySelector(`#${s}`);
				c.src += "", k(s)
			},
			remove: function(t) {
				let n = l(t);
				if (!n || !e.has(n)) {
					m(`Nothing to remove found for ${t}`);
					return
				}
				let s = A(n),
					c = [`iframe#${s}`, `input#${s}_response`, `input#${s}_legacy_response`, `input#${s}_g_response`],
					r = document.querySelectorAll(c.join(", "));
				for (let o = 0; o < r.length; ++o) r[o].remove();
				e.delete(n)
			},
			getResponse(t) {
				let n = l(t);
				if (!n) {
					d(`Could not find widget for getResponse(${t})`);
					return
				}
				return e.get(n).response
			}
		}
	}();
	window.cfChallengeAPI = _;
	window.turnstile = _;

	function X(e) {
		let i = {
				sitekey: e.getAttribute("data-sitekey")
			},
			l = e.getAttribute("data-tabindex");
		l && (i.tabindex = parseInt(l, 10));
		let t = e.getAttribute("data-theme");
		t && (t === "auto" || t === "light" || t === "dark" ? i.theme = t : m(`Unknown data-theme value: "${t}"`));
		let n = e.getAttribute("data-size");
		n && (n === "normal" || n === "invisible" || n === "compact" ? i.size = n : m(`Unknown data-size value: "${n}"`));
		let s = e.getAttribute("data-base-url");
		s && (i["base-url"] = s);
		let c = e.getAttribute("data-action");
		c && (i.action = c);
		let r = e.getAttribute("data-cdata");
		r && (i.cData = r);
		let o = e.getAttribute("data-error-callback");
		o && window[o] && (i["error-callback"] = window[o]);
		let u = e.getAttribute("data-callback");
		u && window[u] && (i.callback = window[u]);
		let g = e.getAttribute("data-expired-callback");
		g && window[g] && (i["expired-callback"] = window[g]);
		let E = h(e.getAttribute("data-response-field"), "true");
		i["response-field"] = E === "true";
		let w = e.getAttribute("data-response-field-name");
		return w && (i["response-field-name"] = w), i
	}

	function Y() {
		let e = [z, F];
		T && e.push(U);
		let a = document.querySelectorAll(e.join(", "));
		for (let i = 0; i < a.length; i++) _.render(a[i])
	}

	function J() {
		let e = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			a = document.currentScript;
		if (e.test(a.src)) return a;
		let i = document.getElementsByTagName("script");
		for (let l = 0; l < i.length; l++) {
			let t = i[l].src;
			if (e.test(t)) return i[l]
		}
	}

	function Z() {
		let e = J();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available"), null;
		let i = e.src.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var b = Z();
	if (b) {
		let e = b.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? m("grecaptcha is already defined. The compatibility layer will not be enabled") : (m("Compatibility layer enabled"), T = !0, window.grecaptcha = _): e !== null && m(`Unknown value for api.js?compat: "${e}", ignoring`), b.forEach(function(i, l) {
			switch (l) {
				case "onload":
				case "compat":
				case "render":
					break;
				default:
					m(`Unknown parameter passed to api.js: "?${l}=...", ignoring`);
					break
			}
		});
		let a = b.get("onload");
		a && setTimeout(function() {
			typeof window[a] == "function" && window[a]()
		}, 0)
	}
	b.get("render") !== "explicit" && setTimeout(function() {
		Y()
	}, 0);
})();