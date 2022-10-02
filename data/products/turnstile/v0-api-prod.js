(() => {
	var R = ".cf-turnstile",
		S = ".cf-challenge",
		M = ".g-recaptcha",
		$ = "cf_challenge_response",
		N = "cf-turnstile-response",
		P = "g-recaptcha-response",
		v = !1;

	function p(n, r) {
		return n == null ? r : n
	}

	function c(n) {
		console.error(`[Cloudflare Turnstile] ${n}.`)
	}

	function I(n) {
		console.warn(`[Cloudflare Turnstile] ${n}.`)
	}

	function _(n) {
		x(n, "")
	}

	function x(n, r) {
		let a = document.getElementById(`${n}_response`);
		a !== null && (a.value = r);
		let l = document.getElementById(`${n}_legacy_response`);
		if (l !== null && (l.value = r), v) {
			let t = document.getElementById(`${n}_g_response`);
			t !== null && (t.value = r)
		}
	}

	function W(n) {
		if (!n.origin) return !0;
		switch (n.origin) {
			case "https://challenges.cloudflare.com":
			case "https://challenges-staging.cloudflare.com":
				return !0;
			default:
				return !1
		}
	}

	function H(n) {
		return n.startsWith("0x4AAAAAAAAAA") || n.startsWith("0x4AAAAAAAAj")
	}
	var T = function() {
		let n = new Map,
			r = function(t) {
				let e = t.data;
				if (e.source !== "cloudflare-challenge") return;
				if (!W(t)) {
					c("Ignored message from wrong origin: " + t.origin);
					return
				}
				if (!e.widgetId || !n.has(e.widgetId)) return;
				let i = `cf-chl-widget-${e.widgetId}`,
					s = n.get(e.widgetId);
				switch (e.event) {
					case "init": {
						let o = document.getElementById(i);
						if (!o) {
							c(`Cannot initialize Widget, Element not found (#${i}).`);
							return
						}
						let d = e.mode;
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
						n.get(e.widgetId).response = e.token, x(i, e.token);
						let o = s.cbSuccess;
						o && o(e.token);
						break
					}
					case "fail": {
						_(i);
						let o = s.cbError;
						o && o();
						break
					}
					case "timeout": {
						if (_(i), s.response === void 0) {
							let o = s.cbExpired;
							o && o()
						}
						break
					}
					case "requestExtraParams": {
						document.querySelector(`#${i}`).contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: e.widgetId,
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
			let t;
			do {
				t = "";
				let e = "abcdefghijklmnopqrstuvwxyz0123456789",
					i = e.length;
				for (let s = 0; s < 5; s++) t += e.charAt(Math.floor(Math.random() * i))
			} while (n.has(t));
			return t
		}

		function l(t) {
			let e;
			if (t instanceof HTMLElement) {
				let i = t.querySelector("iframe");
				if (!i) return null;
				e = i.id
			} else {
				if (t !== void 0 && typeof t != "string") return null;
				if (typeof t == "string") {
					let i = document.querySelector(t);
					i ? e = i.querySelector("iframe").id : e = t
				}
			}
			if (e === void 0) {
				if (n.size === 0) return null;
				e = n.values().next().value
			}
			return e
		}
		return {
			render: function(t, e) {
				let {
					action: i,
					cData: s
				} = e, o = e.sitekey, d = p(e.theme, "auto"), w = p(e.size, "normal"), m = e.callback, E = e["expired-callback"], h = e["error-callback"], k = e["base-url"];
				if (typeof o != "string") {
					c(`Invalid type for parameter "sitekey", expected "string", got "${typeof o}"`);
					return
				}
				if (typeof d != "string" || ["dark", "light", "auto"].indexOf(d) === -1) {
					c(`Invalid type for parameter "theme", expected dark|light|auto, got "${d}" ${typeof d}`);
					return
				}
				w === "compact" && I('Turnstile does not have a "compact" size, falling back to normal size');
				let u;
				if (typeof t == "string") {
					if (u = document.querySelector(t), u === null) {
						c(`Invalid type for parameter "container", could not get element with provided selector "${t}"`);
						return
					}
				} else if (t instanceof HTMLElement) u = t;
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
				let L = "https://challenges.cloudflare.com",
					C = a(),
					b = `cf-chl-widget-${C}`;
				if (n.set(C, {
						action: i,
						cData: s,
						cbSuccess: m,
						cbError: h,
						cbExpired: E,
						params: e
					}), f.style.display = "none", f.style.border = "none", f.style.overflow = "hidden", f.setAttribute("src", `${L}/cdn-cgi/challenge-platform/turnstile/if/ov2/av0/${C}/${o}/${d}`), f.id = b, f.tabIndex = p(e.tabindex, 0), f.title = "Widget containing a Cloudflare security challenge", u.appendChild(f), p(e["response-field"], !0)) {
					let g = document.createElement("input");
					if (g.type = "hidden", g.name = p(e["response-field-name"], N), g.id = `${b}_response`, u.appendChild(g), typeof e["response-field-name"] != "string" && H(o)) {
						let y = document.createElement("input");
						y.type = "hidden", y.name = $, y.id = `${b}_legacy_response`, u.appendChild(y)
					}
				}
				if (v) {
					let g = document.createElement("input");
					g.type = "hidden", g.name = P, g.id = `${b}_g_response`, u.appendChild(g)
				}
				return b
			},
			reset: function(t) {
				let e = l(t);
				if (!e) {
					c(`Nothing to reset found for ${t}`);
					return
				}
				let i = document.querySelector(`#${e}`);
				i.src += "", _(e)
			},
			getResponse(t) {
				let e = l(t);
				if (!e) {
					c(`Could not find widget for getResponse(${t})`);
					return
				}
				return n.get(e).response
			}
		}
	}();
	window.cfChallengeAPI = T;
	window.turnstile = T;

	function D() {
		let n = [R, S];
		v && n.push(M);
		let r = document.querySelectorAll(n.join(", "));
		for (let a = 0; a < r.length; a++) {
			let l = r[a].getAttribute("data-sitekey");
			if (!l) {
				c("Widget has no sitekey, add data-sitekey attribute to widget");
				continue
			}
			let t = {
					sitekey: l
				},
				e = r[a].getAttribute("data-tabindex");
			e && (t.tabindex = parseInt(e, 10));
			let i = r[a].getAttribute("data-theme");
			i && (i === "auto" || i === "light" || i === "dark" ? t.theme = i : I(`Unknown data-theme value: "${i}"`));
			let s = r[a].getAttribute("data-size");
			s && (s === "normal" || s === "invisible" || s === "compact" ? t.size = s : I(`Unknown data-size value: "${s}"`));
			let o = r[a].getAttribute("data-base-url");
			o && (t["base-url"] = o);
			let d = r[a].getAttribute("data-action");
			d && (t.action = d);
			let w = r[a].getAttribute("data-cdata");
			w && (t.cData = w);
			let m = r[a].getAttribute("data-error-callback");
			m && window[m] && (t["error-callback"] = window[m]);
			let E = r[a].getAttribute("data-callback");
			E && window[E] && (t.callback = window[E]);
			let h = r[a].getAttribute("data-expired-callback");
			h && window[h] && (t["expired-callback"] = window[h]);
			let k = p(r[a].getAttribute("data-response-field"), "true");
			t["response-field"] = k === "true";
			let u = r[a].getAttribute("data-response-field-name");
			u && (t["response-field-name"] = u), T.render(r[a], t)
		}
	}

	function O() {
		let n = /\/(challenge-api|turnstile)\/v0(\/.*)?\/api\.js/,
			r = document.currentScript;
		if (n.test(r.src)) {
			let l = r.src.split("?");
			return l.length > 1 ? new URLSearchParams(l[1]) : new URLSearchParams
		}
		let a = document.getElementsByTagName("script");
		for (let l = 0; l < a.length; l++) {
			let t = a[l].src;
			if (n.test(t)) {
				let e = t.split("?");
				return e.length > 1 ? new URLSearchParams(e[1]) : new URLSearchParams
			}
		}
		return c("Could not find Turnstile script tag, some features may not be available"), null
	}
	var A = O();
	if (A) {
		let n = A.get("compat");
		(n == null ? void 0 : n.toLowerCase()) === "recaptcha" && (window.grecaptcha ? I("grecaptcha is already defined. The compatibility layer will not be enabled") : (I("Compatibility layer enabled"), v = !0, window.grecaptcha = T));
		let r = A.get("onload");
		r && setTimeout(function() {
			typeof window[r] == "function" && window[r]()
		}, 0)
	}
	A.get("render") !== "explicit" && setTimeout(function() {
		D()
	}, 0);
})();