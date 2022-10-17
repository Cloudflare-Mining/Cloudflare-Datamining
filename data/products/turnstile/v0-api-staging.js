(() => {
	function A(e, s) {
		return e.indexOf(s) !== -1
	}
	var B = /^[0-9A-Za-z_-]{3,100}$/;

	function N(e) {
		return B.test(e)
	}
	var V = /^[a-z0-9_-]{0,32}$/i;

	function P(e) {
		return V.test(e)
	}
	var j = /^[a-z0-9_-]{0,255}$/i;

	function W(e) {
		return j.test(e)
	}
	var q = ".cf-turnstile",
		U = ".cf-challenge",
		G = ".g-recaptcha",
		X = "cf_challenge_response",
		Y = "cf-turnstile-response",
		J = "g-recaptcha-response",
		_ = !1;

	function c(e) {
		console.error(`[Cloudflare Turnstile] ${e}.`)
	}

	function m(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function k(e) {
		H(e, "")
	}
	var T = "cf-chl-widget-";

	function D(e) {
		return e.startsWith(T) ? e.substring(T.length) : null
	}

	function v(e) {
		return `${T}${e}`
	}

	function H(e, s) {
		let i = document.getElementById(`${e}_response`);
		i !== null && (i.value = s);
		let l = document.getElementById(`${e}_legacy_response`);
		if (l !== null && (l.value = s), _) {
			let t = document.getElementById(`${e}_g_response`);
			t !== null && (t.value = s)
		}
	}

	function Z(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function K(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}
	var $ = function() {
		let e = new Map,
			s = function(t) {
				let n = t.data;
				if (n.source !== "cloudflare-challenge") return;
				if (!Z(t)) {
					c("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!n.widgetId || !e.has(n.widgetId)) return;
				let o = v(n.widgetId),
					d = e.get(n.widgetId);
				switch (n.event) {
					case "init": {
						let r = document.getElementById(o);
						if (!r) {
							c(`Cannot initialize Widget, Element not found (#${o}).`);
							return
						}
						let a = n.mode;
						switch (a) {
							case "non-interactive":
							case "managed":
								r.style.width = "300px", r.style.height = "65px";
								break;
							case "invisible":
								r.style.width = "0", r.style.height = "0", r.style.position = "absolute";
								break;
							default:
								c(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${a}"`);
								return
						}
						r.style.display = "";
						break
					}
					case "complete": {
						e.get(n.widgetId).response = n.token, H(o, n.token);
						let r = d.cbSuccess;
						r && r(n.token);
						break
					}
					case "fail": {
						k(o);
						let r = d.cbError;
						r && r();
						break
					}
					case "timeout": {
						if (k(o), d.response === void 0) {
							let r = d.cbExpired;
							r && r()
						}
						break
					}
					case "requestExtraParams": {
						document.querySelector(`#${o}`).contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: n.widgetId,
							event: "extraParams",
							action: d.action,
							cData: d.cData,
							url: location.href
						}, "*");
						break
					}
				}
			};
		window.addEventListener ? window.addEventListener("message", s) : window.attachEvent("onmessage", s);

		function i() {
			let t;
			do {
				t = "";
				let n = "abcdefghijklmnopqrstuvwxyz0123456789",
					o = n.length;
				for (let d = 0; d < 5; d++) t += n.charAt(Math.floor(Math.random() * o))
			} while (e.has(t));
			return t
		}

		function l(t) {
			if (typeof t == "string") {
				if (t.startsWith(T) && (t = D(t)), e.has(t)) return t;
				try {
					let n = document.querySelector(t);
					return n ? l(n) : null
				} catch (n) {
					return null
				}
			}
			if (t instanceof HTMLElement) {
				let n = t.querySelector("iframe");
				return n ? D(n.id) : null
			}
			return t || e.size === 0 ? null : e.keys().next().value
		}
		return {
			render: function(t, n) {
				var C, R, ie, S, L, M;
				let o;
				if (typeof t == "string") try {
						if (o = document.querySelector(t), !o) {
							c(`Unable to find a container for "${t}"`);
							return
						}
					} catch (f) {
						c(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${t}"`);
						return
					} else if (t instanceof HTMLElement) o = t;
					else {
						c('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let d = Q(o),
					r = Object.assign(d, n),
					{
						action: a,
						cData: u
					} = r,
					g = r.sitekey,
					E = (C = r.theme) != null ? C : "auto",
					b = (R = r.size) != null ? R : "normal",
					w = r.callback,
					O = r["expired-callback"],
					z = r["error-callback"];
				if (typeof g != "string") {
					c(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof g}"`);
					return
				}
				if (!N(g)) {
					c(`Invalid input for parameter "sitekey", got "${g}"`);
					return
				}
				if (typeof E != "string" || !A(["dark", "light", "auto"], E)) {
					c(`Invalid type for parameter "theme", expected dark|light|auto, got "${E}" ${typeof E}`);
					return
				}
				b === "compact" && m('Turnstile does not have a "compact" size, falling back to normal size');
				let p = document.createElement("iframe");
				if (a !== void 0 && typeof a != "string") {
					c(`Invalid type for parameter "action", expected "string", got "${typeof a}"`);
					return
				}
				if (a = a === void 0 ? null : a, !P(a)) {
					c(`Invalid input for parameter "action", got "${a}"`);
					return
				}
				if (u !== void 0 && typeof u != "string") {
					c(`Invalid type for parameter "cData", expected "string", got "${typeof u}"`);
					return
				}
				if (!W(u)) {
					c(`Invalid input for parameter "cData", got "${u}"`);
					return
				}
				u = u === void 0 ? null : u;
				let F = "https://challenges.cloudflare.com",
					x = i(),
					h = v(x);
				if (e.set(x, {
						action: a,
						cData: u,
						cbSuccess: w,
						cbError: z,
						cbExpired: O,
						params: r
					}), p.style.display = "none", p.style.border = "none", p.style.overflow = "hidden", p.setAttribute("src", `${F}/cdn-cgi/challenge-platform/turnstile/if/ov2/av0/${x}/${g}/${E}`), p.id = h, p.tabIndex = (S = r.tabindex) != null ? S : 0, p.title = "Widget containing a Cloudflare security challenge", o.appendChild(p), (L = r["response-field"]) != null ? L : !0) {
					let f = document.createElement("input");
					if (f.type = "hidden", f.name = (M = r["response-field-name"]) != null ? M : Y, f.id = `${h}_response`, o.appendChild(f), typeof r["response-field-name"] != "string" && K(g)) {
						let y = document.createElement("input");
						y.type = "hidden", y.name = X, y.id = `${h}_legacy_response`, o.appendChild(y)
					}
				}
				if (_) {
					let f = document.createElement("input");
					f.type = "hidden", f.name = J, f.id = `${h}_g_response`, o.appendChild(f)
				}
				return h
			},
			reset: function(t) {
				let n = l(t);
				if (!n) {
					c(`Nothing to reset found for ${t}`);
					return
				}
				let o = v(n),
					d = document.querySelector(`#${o}`);
				d.src += "", k(o)
			},
			remove: function(t) {
				let n = l(t);
				if (!n || !e.has(n)) {
					m(`Nothing to remove found for ${t}`);
					return
				}
				let o = v(n),
					d = [`iframe#${o}`, `input#${o}_response`, `input#${o}_legacy_response`, `input#${o}_g_response`],
					r = document.querySelectorAll(d.join(", "));
				for (let a = 0; a < r.length; ++a) r[a].remove();
				e.delete(n)
			},
			getResponse: function(t) {
				let n = l(t);
				if (!n) {
					c(`Could not find widget for getResponse(${t})`);
					return
				}
				return e.get(n).response
			}
		}
	}();
	window.cfChallengeAPI = $;
	window.turnstile = $;

	function Q(e) {
		var w;
		let i = {
				sitekey: e.getAttribute("data-sitekey")
			},
			l = e.getAttribute("data-tabindex");
		l && (i.tabindex = parseInt(l, 10));
		let t = e.getAttribute("data-theme");
		t && (t === "auto" || t === "light" || t === "dark" ? i.theme = t : m(`Unknown data-theme value: "${t}"`));
		let n = e.getAttribute("data-size");
		n && (n === "normal" || n === "invisible" || n === "compact" ? i.size = n : m(`Unknown data-size value: "${n}"`));
		let o = e.getAttribute("data-base-url");
		o && (i["base-url"] = o);
		let d = e.getAttribute("data-action");
		d && (i.action = d);
		let r = e.getAttribute("data-cdata");
		r && (i.cData = r);
		let a = e.getAttribute("data-error-callback");
		a && window[a] && (i["error-callback"] = window[a]);
		let u = e.getAttribute("data-callback");
		u && window[u] && (i.callback = window[u]);
		let g = e.getAttribute("data-expired-callback");
		g && window[g] && (i["expired-callback"] = window[g]);
		let E = (w = e.getAttribute("data-response-field")) != null ? w : "true";
		i["response-field"] = E === "true";
		let b = e.getAttribute("data-response-field-name");
		return b && (i["response-field-name"] = b), i
	}

	function ee() {
		let e = [q, U];
		_ && e.push(G);
		let s = document.querySelectorAll(e.join(", "));
		for (let i = 0; i < s.length; i++) $.render(s[i])
	}

	function te() {
		let e = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			s = document.currentScript;
		if (e.test(s.src)) return s;
		let i = document.getElementsByTagName("script");
		for (let l = 0; l < i.length; l++) {
			let t = i[l].src;
			if (e.test(t)) return i[l]
		}
	}

	function ne() {
		let e = te();
		if (!e) return c("Could not find Turnstile script tag, some features may not be available"), null;
		let i = e.src.split("?");
		return i.length > 1 ? new URLSearchParams(i[1]) : new URLSearchParams
	}
	var I = ne();
	if (I) {
		let e = I.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? m("grecaptcha is already defined. The compatibility layer will not be enabled") : (m("Compatibility layer enabled"), _ = !0, window.grecaptcha = $): e !== null && m(`Unknown value for api.js?compat: "${e}", ignoring`), I.forEach(function(i, l) {
			A(["onload", "compat", "render"], l) || m(`Unknown parameter passed to api.js: "?${l}=...", ignoring`)
		});
		let s = I.get("onload");
		s && setTimeout(function() {
			typeof window[s] == "function" && window[s]()
		}, 0)
	}
	I.get("render") !== "explicit" && setTimeout(function() {
		ee()
	}, 0);
})();