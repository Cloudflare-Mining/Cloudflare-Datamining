(() => {
	var N = ".cf-turnstile",
		P = ".cf-challenge",
		W = ".g-recaptcha",
		H = "cf_challenge_response",
		D = "cf-turnstile-response",
		O = "g-recaptcha-response",
		v = !1;

	function h(e, o) {
		return e == null ? o : e
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
	var T = "cf-chl-widget-";

	function $(e) {
		return e.startsWith(T) ? e.substring(T.length) : null
	}

	function A(e) {
		return `${T}${e}`
	}

	function L(e, o) {
		let i = document.getElementById(`${e}_response`);
		i !== null && (i.value = o);
		let a = document.getElementById(`${e}_legacy_response`);
		if (a !== null && (a.value = o), v) {
			let t = document.getElementById(`${e}_g_response`);
			t !== null && (t.value = o)
		}
	}

	function F(e) {
		if (!e.origin) return !0;
		switch (e.origin) {
			case "https://challenges.cloudflare.com":
			case "https://challenges-staging.cloudflare.com":
				return !0;
			default:
				return !1
		}
	}

	function z(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}
	var _ = function() {
		let e = new Map,
			o = function(t) {
				let n = t.data;
				if (n.source !== "cloudflare-challenge") return;
				if (!F(t)) {
					d("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let s = A(n.widgetId),
					l = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let r = document.getElementById(s);
						if (!r) {
							d(`Cannot initialize Widget, Element not found (#${s}).`);
							return
						}
						let c = n.mode;
						switch (c) {
							case "non-interactive":
							case "managed":
								r.style.width = "300px", r.style.height = "65px";
								break;
							case "invisible":
								r.style.width = "0", r.style.height = "0", r.style.position = "absolute";
								break;
							default:
								d(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${c}"`);
								return
						}
						r.style.display = "";
						break
					}
					case "complete": {
						e.get(n.widgetId).response = n.token, L(s, n.token);
						let r = l.cbSuccess;
						r && r(n.token);
						break
					}
					case "fail": {
						k(s);
						let r = l.cbError;
						r && r();
						break
					}
					case "timeout": {
						if (k(s), l.response === void 0) {
							let r = l.cbExpired;
							r && r()
						}
						break
					}
					case "requestExtraParams": {
						document.querySelector(`#${s}`).contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: n.widgetId,
							event: "extraParams",
							action: l.action,
							cData: l.cData,
							url: location.href
						}, "*");
						break
					}
				}
			};
		window.addEventListener ? window.addEventListener("message", o) : window.attachEvent("onmessage", o);

		function i() {
			let t;
			do {
				t = "";
				let n = "abcdefghijklmnopqrstuvwxyz0123456789",
					s = n.length;
				for (let l = 0; l < 5; l++) t += n.charAt(Math.floor(Math.random() * s))
			} while (e.has(t));
			return t
		}

		function a(t) {
			if (typeof t == "string") {
				if (t.startsWith(T) && (t = $(t)), e.has(t)) return t;
				try {
					let n = document.querySelector(t);
					return n ? a(n) : null
				} catch (n) {
					return null
				}
			}
			if (t instanceof HTMLElement) {
				let n = t.querySelector("iframe");
				return n ? $(n.id) : null
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
					} catch (g) {
						d(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${t}"`);
						return
					} else if (t instanceof HTMLElement) s = t;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let l = U(s),
					r = Object.assign(l, n),
					{
						action: c,
						cData: u
					} = r,
					f = r.sitekey,
					E = h(r.theme, "auto"),
					w = h(r.size, "normal"),
					R = r.callback,
					S = r["expired-callback"],
					x = r["error-callback"],
					q = r["base-url"];
				if (typeof f != "string") {
					d(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof f}"`);
					return
				}
				if (typeof E != "string" || ["dark", "light", "auto"].indexOf(E) === -1) {
					d(`Invalid type for parameter "theme", expected dark|light|auto, got "${E}" ${typeof E}`);
					return
				}
				w === "compact" && m('Turnstile does not have a "compact" size, falling back to normal size');
				let p = document.createElement("iframe");
				if (c !== void 0 && typeof c != "string") {
					d(`Invalid type for parameter "action", expected "string", got "${typeof c}"`);
					return
				}
				if (c = c === void 0 ? null : c, u !== void 0 && typeof u != "string") {
					d(`Invalid type for parameter "cData", expected "string", got "${typeof u}"`);
					return
				}
				u = u === void 0 ? null : u;
				let M = "https://challenges.cloudflare.com",
					C = i(),
					I = A(C);
				if (e.set(C, {
						action: c,
						cData: u,
						cbSuccess: R,
						cbError: x,
						cbExpired: S,
						params: r
					}), p.style.display = "none", p.style.border = "none", p.style.overflow = "hidden", p.setAttribute("src", `${M}/cdn-cgi/challenge-platform/turnstile/if/ov2/av0/${C}/${f}/${E}`), p.id = I, p.tabIndex = h(r.tabindex, 0), p.title = "Widget containing a Cloudflare security challenge", s.appendChild(p), h(r["response-field"], !0)) {
					let g = document.createElement("input");
					if (g.type = "hidden", g.name = h(r["response-field-name"], D), g.id = `${I}_response`, s.appendChild(g), typeof r["response-field-name"] != "string" && z(f)) {
						let y = document.createElement("input");
						y.type = "hidden", y.name = H, y.id = `${I}_legacy_response`, s.appendChild(y)
					}
				}
				if (v) {
					let g = document.createElement("input");
					g.type = "hidden", g.name = O, g.id = `${I}_g_response`, s.appendChild(g)
				}
				return I
			},
			reset: function(t) {
				let n = a(t);
				if (!n) {
					d(`Nothing to reset found for ${t}`);
					return
				}
				let s = A(n),
					l = document.querySelector(`#${s}`);
				l.src += "", k(s)
			},
			remove: function(t) {
				let n = a(t);
				if (!n || !e.has(n)) {
					m(`Nothing to remove found for ${t}`);
					return
				}
				let s = A(n),
					l = [`iframe#${s}`, `input#${s}_response`, `input#${s}_legacy_response`, `input#${s}_g_response`],
					r = document.querySelectorAll(l.join(", "));
				for (let c = 0; c < r.length; ++c) r[c].remove();
				e.delete(n)
			},
			getResponse(t) {
				let n = a(t);
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

	function U(e) {
		let i = {
				sitekey: e.getAttribute("data-sitekey")
			},
			a = e.getAttribute("data-tabindex");
		a && (i.tabindex = parseInt(a, 10));
		let t = e.getAttribute("data-theme");
		t && (t === "auto" || t === "light" || t === "dark" ? i.theme = t : m(`Unknown data-theme value: "${t}"`));
		let n = e.getAttribute("data-size");
		n && (n === "normal" || n === "invisible" || n === "compact" ? i.size = n : m(`Unknown data-size value: "${n}"`));
		let s = e.getAttribute("data-base-url");
		s && (i["base-url"] = s);
		let l = e.getAttribute("data-action");
		l && (i.action = l);
		let r = e.getAttribute("data-cdata");
		r && (i.cData = r);
		let c = e.getAttribute("data-error-callback");
		c && window[c] && (i["error-callback"] = window[c]);
		let u = e.getAttribute("data-callback");
		u && window[u] && (i.callback = window[u]);
		let f = e.getAttribute("data-expired-callback");
		f && window[f] && (i["expired-callback"] = window[f]);
		let E = h(e.getAttribute("data-response-field"), "true");
		i["response-field"] = E === "true";
		let w = e.getAttribute("data-response-field-name");
		return w && (i["response-field-name"] = w), i
	}

	function B() {
		let e = [N, P];
		v && e.push(W);
		let o = document.querySelectorAll(e.join(", "));
		for (let i = 0; i < o.length; i++) _.render(o[i])
	}

	function V() {
		let e = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			o = document.currentScript;
		if (e.test(o.src)) return o;
		let i = document.getElementsByTagName("script");
		for (let a = 0; a < i.length; a++) {
			let t = i[a].src;
			if (e.test(t)) return i[a]
		}
	}

	function j() {
		let e = V();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available"), null;
		let i = e.src.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var b = j();
	if (b) {
		let e = b.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? m("grecaptcha is already defined. The compatibility layer will not be enabled") : (m("Compatibility layer enabled"), v = !0, window.grecaptcha = _): e !== null && m(`Unknown value for api.js?compat: "${e}", ignoring`), b.forEach(function(i, a) {
			switch (a) {
				case "onload":
				case "compat":
				case "render":
					break;
				default:
					m(`Unknown parameter passed to api.js: "?${a}=...", ignoring`);
					break
			}
		});
		let o = b.get("onload");
		o && setTimeout(function() {
			typeof window[o] == "function" && window[o]()
		}, 0)
	}
	b.get("render") !== "explicit" && setTimeout(function() {
		B()
	}, 0);
})();