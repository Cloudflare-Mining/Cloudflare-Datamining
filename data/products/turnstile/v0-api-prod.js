(() => {
	var M = ".cf-turnstile",
		N = ".cf-challenge",
		P = ".g-recaptcha",
		W = "cf_challenge_response",
		H = "cf-turnstile-response",
		D = "g-recaptcha-response",
		T = !1;

	function p(n, r) {
		return n == null ? r : n
	}

	function c(n) {
		console.error(`[Cloudflare Turnstile] ${n}.`)
	}

	function m(n) {
		console.warn(`[Cloudflare Turnstile] ${n}.`)
	}

	function L(n) {
		x(n, "")
	}
	var _ = "cf-chl-widget-";

	function $(n) {
		return n.startsWith(_) ? n.substring(_.length) : null
	}

	function A(n) {
		return `${_}${n}`
	}

	function x(n, r) {
		let a = document.getElementById(`${n}_response`);
		a !== null && (a.value = r);
		let l = document.getElementById(`${n}_legacy_response`);
		if (l !== null && (l.value = r), T) {
			let e = document.getElementById(`${n}_g_response`);
			e !== null && (e.value = r)
		}
	}

	function O(n) {
		if (!n.origin) return !0;
		switch (n.origin) {
			case "https://challenges.cloudflare.com":
			case "https://challenges-staging.cloudflare.com":
				return !0;
			default:
				return !1
		}
	}

	function F(n) {
		return n.startsWith("0x4AAAAAAAAAA") || n.startsWith("0x4AAAAAAAAj")
	}
	var C = function() {
		let n = new Map,
			r = function(e) {
				let t = e.data;
				if (t.source !== "cloudflare-challenge") return;
				if (!O(e)) {
					c("Ignored message from wrong origin: " + e.origin);
					return
				}
				if (!t.widgetId || !n.has(t.widgetId)) return;
				let i = A(t.widgetId),
					s = n.get(t.widgetId);
				switch (t.event) {
					case "init": {
						let o = document.getElementById(i);
						if (!o) {
							c(`Cannot initialize Widget, Element not found (#${i}).`);
							return
						}
						let d = t.mode;
						switch (d) {
							case "non-interactive":
							case "managed":
								o.style.width = "300px", o.style.height = "65px";
								break;
							case "invisible":
								o.style.width = "0", o.style.height = "0", o.style.position = "absolute";
								break;
							default:
								c(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${d}"`);
								return
						}
						o.style.display = "";
						break
					}
					case "complete": {
						n.get(t.widgetId).response = t.token, x(i, t.token);
						let o = s.cbSuccess;
						o && o(t.token);
						break
					}
					case "fail": {
						L(i);
						let o = s.cbError;
						o && o();
						break
					}
					case "timeout": {
						if (L(i), s.response === void 0) {
							let o = s.cbExpired;
							o && o()
						}
						break
					}
					case "requestExtraParams": {
						document.querySelector(`#${i}`).contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: t.widgetId,
							event: "extraParams",
							action: s.action,
							cData: s.cData,
							url: location.href
						}, "*");
						break
					}
				}
			};
		window.addEventListener ? window.addEventListener("message", r) : window.attachEvent("onmessage", r);

		function a() {
			let e;
			do {
				e = "";
				let t = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = t.length;
				for (let s = 0; s < 5; s++) e += t.charAt(Math.floor(Math.random() * i))
			} while (n.has(e));
			return e
		}

		function l(e) {
			if (typeof e == "string") {
				if (e.startsWith(_) && (e = $(e)), n.has(e)) return e;
				try {
					let t = document.querySelector(e);
					return t ? l(t) : null
				} catch (t) {
					return null
				}
			}
			if (e instanceof HTMLElement) {
				let t = e.querySelector("iframe");
				return t ? $(t.id) : null
			}
			return e || n.size === 0 ? null : n.keys().next().value
		}
		return {
			render: function(e, t) {
				let {
					action: i,
					cData: s
				} = t, o = t.sitekey, d = p(t.theme, "auto"), w = p(t.size, "normal"), E = t.callback, h = t["expired-callback"], I = t["error-callback"], R = t["base-url"];
				if (typeof o != "string") {
					c(`Invalid type for parameter "sitekey", expected "string", got "${typeof o}"`);
					return
				}
				if (typeof d != "string" || ["dark", "light", "auto"].indexOf(d) === -1) {
					c(`Invalid type for parameter "theme", expected dark|light|auto, got "${d}" ${typeof d}`);
					return
				}
				w === "compact" && m('Turnstile does not have a "compact" size, falling back to normal size');
				let u;
				if (typeof e == "string") {
					if (u = document.querySelector(e), u === null) {
						c(`Invalid type for parameter "container", could not get element with provided selector "${e}"`);
						return
					}
				} else if (e instanceof HTMLElement) u = e;
				else {
					c('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
					return
				}
				let f = document.createElement("iframe");
				if (i !== void 0 && typeof i != "string") {
					c(`Invalid type for parameter "action", expected "string", got "${typeof i}"`);
					return
				}
				if (i = i === void 0 ? null : i, s !== void 0 && typeof s != "string") {
					c(`Invalid type for parameter "cData", expected "string", got "${typeof s}"`);
					return
				}
				s = s === void 0 ? null : s;
				let S = "https://challenges.cloudflare.com",
					k = a(),
					b = A(k);
				if (n.set(k, {
						action: i,
						cData: s,
						cbSuccess: E,
						cbError: I,
						cbExpired: h,
						params: t
					}), f.style.display = "none", f.style.border = "none", f.style.overflow = "hidden", f.setAttribute("src", `${S}/cdn-cgi/challenge-platform/turnstile/if/ov2/av0/${k}/${o}/${d}`), f.id = b, f.tabIndex = p(t.tabindex, 0), f.title = "Widget containing a Cloudflare security challenge", u.appendChild(f), p(t["response-field"], !0)) {
					let g = document.createElement("input");
					if (g.type = "hidden", g.name = p(t["response-field-name"], H), g.id = `${b}_response`, u.appendChild(g), typeof t["response-field-name"] != "string" && F(o)) {
						let y = document.createElement("input");
						y.type = "hidden", y.name = W, y.id = `${b}_legacy_response`, u.appendChild(y)
					}
				}
				if (T) {
					let g = document.createElement("input");
					g.type = "hidden", g.name = D, g.id = `${b}_g_response`, u.appendChild(g)
				}
				return b
			},
			reset: function(e) {
				let t = l(e);
				if (!t) {
					c(`Nothing to reset found for ${e}`);
					return
				}
				let i = A(t),
					s = document.querySelector(`#${i}`);
				s.src += "", L(i)
			},
			remove: function(e) {
				let t = l(e);
				if (!t || !n.has(t)) {
					m(`Nothing to remove found for ${e}`);
					return
				}
				let i = A(t),
					s = [`iframe#${i}`, `input#${i}_response`, `input#${i}_legacy_response`, `input#${i}_g_response`],
					o = document.querySelectorAll(s.join(", "));
				for (let d = 0; d < o.length; ++d) o[d].remove();
				n.delete(t)
			},
			getResponse(e) {
				let t = l(e);
				if (!t) {
					c(`Could not find widget for getResponse(${e})`);
					return
				}
				return n.get(t).response
			}
		}
	}();
	window.cfChallengeAPI = C;
	window.turnstile = C;

	function z() {
		let n = [M, N];
		T && n.push(P);
		let r = document.querySelectorAll(n.join(", "));
		for (let a = 0; a < r.length; a++) {
			let l = r[a].getAttribute("data-sitekey");
			if (!l) {
				c("Widget has no sitekey, add data-sitekey attribute to widget");
				continue
			}
			let e = {
					sitekey: l
				},
				t = r[a].getAttribute("data-tabindex");
			t && (e.tabindex = parseInt(t, 10));
			let i = r[a].getAttribute("data-theme");
			i && (i === "auto" || i === "light" || i === "dark" ? e.theme = i : m(`Unknown data-theme value: "${i}"`));
			let s = r[a].getAttribute("data-size");
			s && (s === "normal" || s === "invisible" || s === "compact" ? e.size = s : m(`Unknown data-size value: "${s}"`));
			let o = r[a].getAttribute("data-base-url");
			o && (e["base-url"] = o);
			let d = r[a].getAttribute("data-action");
			d && (e.action = d);
			let w = r[a].getAttribute("data-cdata");
			w && (e.cData = w);
			let E = r[a].getAttribute("data-error-callback");
			E && window[E] && (e["error-callback"] = window[E]);
			let h = r[a].getAttribute("data-callback");
			h && window[h] && (e.callback = window[h]);
			let I = r[a].getAttribute("data-expired-callback");
			I && window[I] && (e["expired-callback"] = window[I]);
			let R = p(r[a].getAttribute("data-response-field"), "true");
			e["response-field"] = R === "true";
			let u = r[a].getAttribute("data-response-field-name");
			u && (e["response-field-name"] = u), C.render(r[a], e)
		}
	}

	function B() {
		let n = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (n.test(r.src)) {
			let l = r.src.split("?");
			return l.length > 1 ? new URLSearchParams(l[1]) : new URLSearchParams
		}
		let a = document.getElementsByTagName("script");
		for (let l = 0; l < a.length; l++) {
			let e = a[l].src;
			if (n.test(e)) {
				let t = e.split("?");
				return t.length > 1 ? new URLSearchParams(t[1]) : new URLSearchParams
			}
		}
		return c("Could not find Turnstile script tag, some features may not be available"), null
	}
	var v = B();
	if (v) {
		let n = v.get("compat");
		(n == null ? void 0 : n.toLowerCase()) === "recaptcha" && (window.grecaptcha ? m("grecaptcha is already defined. The compatibility layer will not be enabled") : (m("Compatibility layer enabled"), T = !0, window.grecaptcha = C));
		let r = v.get("onload");
		r && setTimeout(function() {
			typeof window[r] == "function" && window[r]()
		}, 0)
	}
	v.get("render") !== "explicit" && setTimeout(function() {
		z()
	}, 0);
})();