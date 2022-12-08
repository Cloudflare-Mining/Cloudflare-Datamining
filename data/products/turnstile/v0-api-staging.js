(() => {
	function I(e, l) {
		return e.indexOf(l) !== -1
	}

	function M(e) {
		return I(["auto", "dark", "light"], e)
	}

	function S(e) {
		return I(["auto", "never"], e)
	}

	function N(e) {
		return e > 0 && e < 9e5
	}
	var te = /^[0-9A-Za-z_-]{3,100}$/;

	function Y(e) {
		return te.test(e)
	}
	var re = /^[a-z0-9_-]{0,32}$/i;

	function X(e) {
		return re.test(e)
	}
	var ne = /^[a-z0-9_-]{0,255}$/i;

	function J(e) {
		return ne.test(e)
	}

	function P(e) {
		return I(["normal", "compact", "invisible"], e)
	}

	function O(e) {
		return I(["auto", "manual", "never"], e)
	}
	var ie = ".cf-turnstile",
		ae = ".cf-challenge",
		oe = ".g-recaptcha",
		se = "cf_challenge_response",
		le = "cf-turnstile-response",
		de = "g-recaptcha-response",
		ce = 8e3,
		_ = !1;

	function d(e) {
		console.error(`[Cloudflare Turnstile] ${e}.`)
	}

	function g(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function ue(e) {
		d(`Failed with code: ${e}`)
	}

	function W(e) {
		Z(e, "")
	}

	function D() {
		let e = [ie, ae];
		_ && e.push(oe);
		let l = document.querySelectorAll(e.join(", "));
		for (let a = 0; a < l.length; a++) T.render(l[a])
	}
	var x = "cf-chl-widget-";

	function K(e) {
		return e.startsWith(x) ? e.substring(x.length) : null
	}

	function C(e) {
		return `${x}${e}`
	}

	function Z(e, l) {
		let a = document.getElementById(`${e}_response`);
		a !== null && (a.value = l);
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = l), _) {
			let p = document.getElementById(`${e}_g_response`);
			p !== null && (p.value = l)
		}
	}

	function pe(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function fe(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function ge() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var T = function() {
		let e = new Map,
			l = function(i) {
				var t;
				let r = i.data;
				if (r.source !== "cloudflare-challenge") return;
				if (!pe(i)) {
					d("Ignored message from wrong origin: " + i.origin);
					return
				}
				if (!r.widgetId || !e.has(r.widgetId)) return;
				let o = C(r.widgetId),
					s = e.get(r.widgetId);
				switch (r.event) {
					case "init": {
						let n = document.getElementById(o);
						if (!n) {
							d(`Cannot initialize Widget, Element not found (#${o}).`);
							return
						}
						let c = r.mode,
							f = (t = s.params.size) != null ? t : "normal";
						switch (c) {
							case "non-interactive":
							case "managed":
								switch (f) {
									case "compact":
										n.style.width = "130px", n.style.height = "120px";
										break;
									case "invisible":
										d(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${f}"`);
									case "normal":
										n.style.width = "300px", n.style.height = "65px";
										break
								}
								break;
							case "invisible":
								n.style.width = "0", n.style.height = "0", n.style.position = "absolute";
								break;
							default:
								d(`Invalid value for parameter "mode", expected "${"non-interactive"}", "${"managed"}" or "${"invisible"}", got "${c}"`);
								return
						}
						n.style.display = "";
						break
					}
					case "complete": {
						e.get(r.widgetId).response = r.token, Z(o, r.token);
						let n = s.cbSuccess;
						n && n(r.token);
						break
					}
					case "fail": {
						r.code && ue(r.code), W(o);
						let n = s.cbError;
						n && n();
						break
					}
					case "tokenExpired": {
						let n = r.token,
							c = s.cbExpired;
						c && c(n), s.params["refresh-expired"] === "auto" && !s.isResetting && p(o);
						break
					}
					case "timeout": {
						W(o);
						let n = s.cbTimeout;
						n && n();
						break
					}
					case "refreshRequest": {
						p(r.widgetId);
						break
					}
					case "requestExtraParams": {
						let n = document.querySelector(`#${o}`);
						s.isResetting = !1, n.contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: r.widgetId,
							event: "extraParams",
							action: s.action,
							cData: s.cData,
							url: ge(),
							retry: s.params.retry,
							"retry-interval": s.params["retry-interval"],
							"refresh-expired": s.params["refresh-expired"]
						}, "*");
						break
					}
				}
			};
		window.addEventListener("message", l);

		function a() {
			let i;
			do {
				i = "";
				let r = "abcdefghijklmnopqrstuvwxyz0123456789",
					o = r.length;
				for (let s = 0; s < 5; s++) i += r.charAt(Math.floor(Math.random() * o))
			} while (e.has(i));
			return i
		}

		function u(i) {
			if (typeof i == "string") {
				if (i.startsWith(x) && (i = K(i)), e.has(i)) return i;
				try {
					let r = document.querySelector(i);
					return r ? u(r) : null
				} catch (r) {
					return null
				}
			}
			if (i instanceof HTMLElement) {
				let r = i.querySelector("iframe");
				return r ? K(r.id) : null
			}
			return i || e.size === 0 ? null : e.keys().next().value
		}

		function p(i) {
			let r = u(i);
			if (!r) {
				d(`Nothing to reset found for ${i}`);
				return
			}
			let o = e.get(r);
			o && (o.isResetting = !0);
			let s = C(r),
				t = document.querySelector(`#${s}`);
			t.src += "", W(s)
		}

		function E(i) {
			let r = u(i);
			if (!r || !e.has(r)) {
				g(`Nothing to remove found for ${i}`);
				return
			}
			let o = C(r),
				s = [`iframe#${o}`, `input#${o}_response`, `input#${o}_legacy_response`, `input#${o}_g_response`],
				t = document.querySelectorAll(s.join(", "));
			for (let n = 0; n < t.length; ++n) t[n].remove();
			e.delete(r)
		}
		return {
			implicitRender: D,
			render(i, r) {
				var H, z, U, V, B, G, q, j;
				let o;
				if (typeof i == "string") try {
						if (o = document.querySelector(i), !o) {
							d(`Unable to find a container for "${i}"`);
							return
						}
					} catch (m) {
						d(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${i}"`);
						return
					} else if (i instanceof HTMLElement) o = i;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let s = me(o),
					t = Object.assign(s, r),
					{
						action: n,
						cData: c
					} = t,
					f = t.sitekey;
				t.theme = (H = t.theme) != null ? H : "auto", t.retry = (z = t.retry) != null ? z : "auto", t["retry-interval"] = (U = t["retry-interval"]) != null ? U : ce, t.size = (V = t.size) != null ? V : "normal";
				let v = t.callback,
					b = t["expired-callback"],
					k = t["timeout-callback"],
					R = t["error-callback"];
				if (typeof f != "string") {
					d(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof f}"`);
					return
				}
				if (!Y(f)) {
					d(`Invalid input for parameter "sitekey", got "${f}"`);
					return
				}
				if (!P(t.size)) {
					d(`Invalid type for parameter "size", expected normal|compact, got "${t.size}" ${typeof t.size}`);
					return
				}
				if (!M(t.theme)) {
					d(`Invalid type for parameter "theme", expected dark|light|auto, got "${t.theme}" ${typeof t.theme}`);
					return
				}
				if (!S(t.retry)) {
					d(`Invalid type for parameter "retry", expected never|auto, got "${t.retry}" ${typeof t.retry}`);
					return
				}
				if (!N(t["retry-interval"])) {
					g(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
					return
				}
				let y = (B = t["refresh-expired"]) != null ? B : "auto";
				if (O(y)) t["refresh-expired"] = y;
				else {
					d(`Invalid type for parameter "refressh-expired", expected never|manual|auto, got "${y}" ${typeof y}`);
					return
				}
				let F = o.getElementsByTagName("iframe")[0];
				F && F.id.startsWith(x) && E(o);
				let h = document.createElement("iframe");
				if (n !== void 0 && typeof n != "string") {
					d(`Invalid type for parameter "action", expected "string", got "${typeof n}"`);
					return
				}
				if (n = n === void 0 ? null : n, !X(n)) {
					d(`Invalid input for parameter "action", got "${n}"`);
					return
				}
				if (c !== void 0 && typeof c != "string") {
					d(`Invalid type for parameter "cData", expected "string", got "${typeof c}"`);
					return
				}
				if (!J(c)) {
					d(`Invalid input for parameter "cData", got "${c}"`);
					return
				}
				c = c === void 0 ? null : c;
				let Q = "https://challenges.cloudflare.com",
					L = a(),
					w = C(L);
				e.set(L, {
					action: n,
					cData: c,
					cbSuccess: v,
					cbError: R,
					cbExpired: b,
					cbTimeout: k,
					params: t,
					isResetting: !1
				}), h.style.display = "none", h.style.border = "none", h.style.overflow = "hidden";
				let ee = "h/b/";
				if (h.setAttribute("src", `${Q}/cdn-cgi/challenge-platform/${ee}turnstile/if/ov2/av0/${L}/${f}/${t.theme}/${t.size}`), h.id = w, h.tabIndex = (G = t.tabindex) != null ? G : 0, h.title = "Widget containing a Cloudflare security challenge", o.appendChild(h), (q = t["response-field"]) != null ? q : !0) {
					let m = document.createElement("input");
					if (m.type = "hidden", m.name = (j = t["response-field-name"]) != null ? j : le, m.id = `${w}_response`, o.appendChild(m), typeof t["response-field-name"] != "string" && fe(f)) {
						let $ = document.createElement("input");
						$.type = "hidden", $.name = se, $.id = `${w}_legacy_response`, o.appendChild($)
					}
				}
				if (_) {
					let m = document.createElement("input");
					m.type = "hidden", m.name = de, m.id = `${w}_g_response`, o.appendChild(m)
				}
				return w
			},
			reset: p,
			remove: E,
			getResponse(i) {
				let r = u(i);
				if (!r) {
					d(`Could not find widget for getResponse(${i})`);
					return
				}
				return e.get(r).response
			}
		}
	}();

	function me(e) {
		var y;
		let a = {
				sitekey: e.getAttribute("data-sitekey")
			},
			u = e.getAttribute("data-tabindex");
		u && (a.tabindex = parseInt(u, 10));
		let p = e.getAttribute("data-theme");
		p && (M(p) ? a.theme = p : g(`Unknown data-theme value: "${p}"`));
		let E = e.getAttribute("data-size");
		E && (P(E) ? a.size = E : g(`Unknown data-size value: "${E}"`));
		let i = e.getAttribute("data-base-url");
		typeof i == "string" && (a["base-url"] = i);
		let r = e.getAttribute("data-action");
		typeof r == "string" && (a.action = r);
		let o = e.getAttribute("data-cdata");
		typeof o == "string" && (a.cData = o);
		let s = e.getAttribute("data-retry");
		s && (S(s) ? a.retry = s : g(`Unknown data-retry value: "${s}"`));
		let t = +e.getAttribute("data-retry-interval");
		t && (N(t) ? a["retry-interval"] = t : g(`Invalid data-retry-interval value: "${t}, expected an integer value > 0 and < 900000"`));
		let n = e.getAttribute("data-refresh-expired");
		n && (O(n) ? a["refresh-expired"] = n : g(`Unknown data-refresh-expired value: "${n}, expected either: never, auto or manual.`));
		let c = e.getAttribute("data-error-callback");
		c && window[c] && (a["error-callback"] = window[c]);
		let f = e.getAttribute("data-callback");
		f && window[f] && (a.callback = window[f]);
		let v = e.getAttribute("data-expired-callback");
		v && window[v] && (a["expired-callback"] = window[v]);
		let b = e.getAttribute("data-timeout-callback");
		b && window[b] && (a["timeout-callback"] = window[b]);
		let k = (y = e.getAttribute("data-response-field")) != null ? y : "true";
		a["response-field"] = k === "true";
		let R = e.getAttribute("data-response-field-name");
		return R && (a["response-field-name"] = R), a
	}

	function he() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			l = document.currentScript;
		if (e.test(l.src)) return l;
		let a = document.getElementsByTagName("script");
		for (let u = 0; u < a.length; u++) {
			let p = a[u].src;
			if (e.test(p)) return a[u]
		}
	}

	function Ee() {
		let e = he();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available"), null;
		let a = e.src.split("?");
		return a.length > 1 ? new URLSearchParams(a[1]) : new URLSearchParams
	}
	var A = Ee();
	if (A) {
		let e = A.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? g("grecaptcha is already defined. The compatibility layer will not be enabled") : (g("Compatibility layer enabled"), _ = !0, window.grecaptcha = T): e !== null && g(`Unknown value for api.js?compat: "${e}", ignoring`), A.forEach(function(a, u) {
			I(["onload", "compat", "render"], u) || g(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let l = A.get("onload");
		l && setTimeout(function() {
			typeof window[l] == "function" && window[l]()
		}, 0)
	}
	var ye = "turnstile" in window;
	ye ? g("Turnstile already has been loaded. Is Turnstile imported multiple times?") : ("Proxy" in window ? window.cfChallengeAPI = new Proxy(T, {
		get(e, l) {
			return g("window.cfChallengeAPI is deprecated, please move to window.turnstile"), e[l]
		}
	}) : window.cfChallengeAPI = T, window.turnstile = T, A.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(D, 0) : window.addEventListener("DOMContentLoaded", D)));
})();