(() => {
	function E(e, l) {
		return e.indexOf(l) !== -1
	}

	function S(e) {
		return E(["auto", "dark", "light"], e)
	}

	function N(e) {
		return E(["auto", "never"], e)
	}

	function P(e) {
		return e > 0 && e < 9e5
	}
	var ae = /^[0-9A-Za-z_-]{3,100}$/;

	function X(e) {
		return ae.test(e)
	}
	var oe = /^[a-z0-9_-]{0,32}$/i;

	function J(e) {
		return oe.test(e)
	}
	var se = /^[a-z0-9_-]{0,255}$/i;

	function K(e) {
		return se.test(e)
	}

	function O(e) {
		return E(["normal", "compact", "invisible"], e)
	}

	function W(e) {
		return E(["auto", "manual", "never"], e)
	}
	var le = ".cf-turnstile",
		de = ".cf-challenge",
		ce = ".g-recaptcha",
		ue = "cf_challenge_response",
		fe = "cf-turnstile-response",
		pe = "g-recaptcha-response",
		ge = 8e3,
		k = !1,
		ee = !1;

	function d(e) {
		let l = `[Cloudflare Turnstile] ${e}.`;
		throw console.error(l), new Error(l)
	}

	function p(e) {
		console.warn(`[Cloudflare Turnstile] ${e}.`)
	}

	function me(e) {
		d(`Failed with code: ${e}`)
	}

	function D(e) {
		re(e, "")
	}

	function te() {
		let e = [le, de];
		k && e.push(ce);
		let l = document.querySelectorAll(e.join(", "));
		for (let o = 0; o < l.length; o++) T.render(l[o])
	}
	var F;

	function Z() {
		F && F(), te()
	}
	var A = "cf-chl-widget-";

	function Q(e) {
		return e.startsWith(A) ? e.substring(A.length) : null
	}

	function _(e) {
		return `${A}${e}`
	}

	function re(e, l) {
		let o = document.getElementById(`${e}_response`);
		o !== null && (o.value = l);
		let u = document.getElementById(`${e}_legacy_response`);
		if (u !== null && (u.value = l), k) {
			let f = document.getElementById(`${e}_g_response`);
			f !== null && (f.value = l)
		}
	}

	function he(e) {
		return e.origin ? e.origin === "https://challenges.cloudflare.com" || e.origin === "https://challenges-staging.cloudflare.com" : !0
	}

	function ye(e) {
		return e.startsWith("0x4AAAAAAAAAA") || e.startsWith("0x4AAAAAAAAj")
	}

	function Ee() {
		let e = window;
		for (; e && e.top !== e && !e.location.href.startsWith("http");) e = e.top;
		return e.location.href
	}
	var T = function() {
		let e = new Map,
			l = 0,
			o = function(i) {
				var t;
				let r = i.data;
				if (r.source !== "cloudflare-challenge") return;
				if (!he(i)) {
					d("Ignored message from wrong origin: " + i.origin);
					return
				}
				if (!r.widgetId || !e.has(r.widgetId)) return;
				let a = _(r.widgetId),
					s = e.get(r.widgetId);
				switch (r.event) {
					case "init": {
						let n = document.getElementById(a);
						if (!n) {
							d(`Cannot initialize Widget, Element not found (#${a}).`);
							return
						}
						let c = r.mode,
							g = (t = s.params.size) != null ? t : "normal";
						switch (c) {
							case "non-interactive":
							case "managed":
								switch (g) {
									case "compact":
										n.style.width = "130px", n.style.height = "120px";
										break;
									case "invisible":
										d(`Invalid value for parameter "size", expected "${"compact"}" or "${"normal"}", got "${g}"`);
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
						e.get(r.widgetId).response = r.token, re(a, r.token);
						let n = s.cbSuccess;
						n && n(r.token);
						break
					}
					case "fail": {
						r.code && me(r.code), D(a);
						let n = s.cbError;
						n && n();
						break
					}
					case "tokenExpired": {
						let n = r.token,
							c = s.cbExpired;
						c && c(n), s.params["refresh-expired"] === "auto" && !s.isResetting && h(a);
						break
					}
					case "timeout": {
						D(a);
						let n = s.cbTimeout;
						n && n();
						break
					}
					case "refreshRequest": {
						h(r.widgetId);
						break
					}
					case "requestExtraParams": {
						let n = document.querySelector(`#${a}`);
						s.isResetting = !1, n.contentWindow.postMessage({
							source: "cloudflare-challenge",
							widgetId: r.widgetId,
							event: "extraParams",
							action: s.action,
							cData: s.cData,
							url: Ee(),
							retry: s.params.retry,
							"retry-interval": s.params["retry-interval"],
							"refresh-expired": s.params["refresh-expired"]
						}, "*");
						break
					}
				}
			};
		window.addEventListener("message", o);

		function u() {
			let i;
			do {
				i = "";
				let r = "abcdefghijklmnopqrstuvwxyz0123456789",
					a = r.length;
				for (let s = 0; s < 5; s++) i += r.charAt(Math.floor(Math.random() * a))
			} while (e.has(i));
			return i
		}

		function f(i) {
			if (typeof i == "string") {
				if (i.startsWith(A) && (i = Q(i)), e.has(i)) return i;
				try {
					let r = document.querySelector(i);
					return r ? f(r) : null
				} catch (r) {
					return null
				}
			}
			if (i instanceof HTMLElement) {
				let r = i.querySelector("iframe");
				return r ? Q(r.id) : null
			}
			return i || e.size === 0 ? null : e.keys().next().value
		}

		function h(i) {
			let r = f(i);
			if (!r) {
				d(`Nothing to reset found for ${i}`);
				return
			}
			let a = e.get(r);
			a && (a.isResetting = !0);
			let s = _(r),
				t = document.querySelector(`#${s}`);
			t.src += "", D(s)
		}

		function I(i) {
			let r = f(i);
			if (!r || !e.has(r)) {
				p(`Nothing to remove found for ${i}`);
				return
			}
			let a = _(r),
				s = [`iframe#${a}`, `input#${a}_response`, `input#${a}_legacy_response`, `input#${a}_g_response`],
				t = document.querySelectorAll(s.join(", "));
			for (let n = 0; n < t.length; ++n) t[n].remove();
			e.delete(r)
		}
		return {
			implicitRender: te,
			ready(i) {
				if (ee) throw p("turnstile.ready() would break if called *before* the Turnstile api.js script is loaded by visitors"), new Error("Remove async/defer from the Turnstile api.js script tag before using turnstile.ready().");
				typeof i != "function" && d(`turnstile.ready() expected a "function" argument, got "${typeof onloadCb}"`), F = i
			},
			render(i, r) {
				var z, U, V, B, j, G, q, Y;
				let a;
				if (typeof i == "string") try {
						if (a = document.querySelector(i), !a) {
							d(`Unable to find a container for "${i}"`);
							return
						}
					} catch (m) {
						d(`Invalid type for  "container", expected "selector" or an implementation of "HTMLElement", got "${i}"`);
						return
					} else if (i instanceof HTMLElement) a = i;
					else {
						d('Invalid type for parameter "container", expected "string" or an implementation of "HTMLElement"');
						return
					} let s = Ie(a),
					t = Object.assign(s, r),
					{
						action: n,
						cData: c
					} = t,
					g = t.sitekey;
				t.theme = (z = t.theme) != null ? z : "auto", t.retry = (U = t.retry) != null ? U : "auto", t["retry-interval"] = (V = t["retry-interval"]) != null ? V : ge, t.size = (B = t.size) != null ? B : "normal";
				let v = t.callback,
					L = t["expired-callback"],
					x = t["timeout-callback"],
					R = t["error-callback"];
				if (typeof g != "string") {
					d(`Invalid or missing type for parameter "sitekey", expected "string", got "${typeof g}"`);
					return
				}
				if (!X(g)) {
					d(`Invalid input for parameter "sitekey", got "${g}"`);
					return
				}
				if (!O(t.size)) {
					d(`Invalid type for parameter "size", expected normal|compact, got "${t.size}" ${typeof t.size}`);
					return
				}
				if (!S(t.theme)) {
					d(`Invalid type for parameter "theme", expected dark|light|auto, got "${t.theme}" ${typeof t.theme}`);
					return
				}
				if (!N(t.retry)) {
					d(`Invalid type for parameter "retry", expected never|auto, got "${t.retry}" ${typeof t.retry}`);
					return
				}
				if (!P(t["retry-interval"])) {
					p(`Invalid data-retry-interval value: "${t["retry-interval"]}, expected an integer value > 0 and < 900000"`);
					return
				}
				let $ = (j = t["refresh-expired"]) != null ? j : "auto";
				if (W($)) t["refresh-expired"] = $;
				else {
					d(`Invalid type for parameter "refressh-expired", expected never|manual|auto, got "${$}" ${typeof $}`);
					return
				}
				let H = a.getElementsByTagName("iframe")[0];
				H && H.id.startsWith(A) && I(a);
				let y = document.createElement("iframe");
				if (n !== void 0 && typeof n != "string") {
					d(`Invalid type for parameter "action", expected "string", got "${typeof n}"`);
					return
				}
				if (n = n === void 0 ? null : n, !J(n)) {
					d(`Invalid input for parameter "action", got "${n}"`);
					return
				}
				if (c !== void 0 && typeof c != "string") {
					d(`Invalid type for parameter "cData", expected "string", got "${typeof c}"`);
					return
				}
				if (!K(c)) {
					d(`Invalid input for parameter "cData", got "${c}"`);
					return
				}
				c = c === void 0 ? null : c;
				let ne = "https://challenges.cloudflare.com",
					M = u(),
					b = _(M);
				l++, e.set(M, {
					idx: l,
					action: n,
					cData: c,
					cbSuccess: v,
					cbError: R,
					cbExpired: L,
					cbTimeout: x,
					params: t,
					isResetting: !1
				}), y.style.display = "none", y.style.border = "none", y.style.overflow = "hidden";
				let ie = "h/g/";
				if (y.setAttribute("src", `${ne}/cdn-cgi/challenge-platform/${ie}turnstile/if/ov2/av0/${M}/${g}/${t.theme}/${t.size}`), y.id = b, y.tabIndex = (G = t.tabindex) != null ? G : 0, y.title = "Widget containing a Cloudflare security challenge", a.appendChild(y), (q = t["response-field"]) != null ? q : !0) {
					let m = document.createElement("input");
					if (m.type = "hidden", m.name = (Y = t["response-field-name"]) != null ? Y : fe, m.id = `${b}_response`, a.appendChild(m), typeof t["response-field-name"] != "string" && ye(g)) {
						let C = document.createElement("input");
						C.type = "hidden", C.name = ue, C.id = `${b}_legacy_response`, a.appendChild(C)
					}
				}
				if (k) {
					let m = document.createElement("input");
					m.type = "hidden", m.name = pe, m.id = `${b}_g_response`, a.appendChild(m)
				}
				return b
			},
			reset: h,
			remove: I,
			getResponse(i) {
				if (typeof i == "undefined") {
					let a, s = -1;
					for (let [t, n] of e) s < n.idx && (a = t, s = n.idx);
					if (s === -1) {
						d("No widget found!");
						return
					}
					return e.get(a).response
				}
				let r = f(i);
				if (!r) {
					d(`Could not find widget for getResponse(${i})`);
					return
				}
				return e.get(r).response
			}
		}
	}();

	function Ie(e) {
		var R;
		let o = {
				sitekey: e.getAttribute("data-sitekey")
			},
			u = e.getAttribute("data-tabindex");
		u && (o.tabindex = parseInt(u, 10));
		let f = e.getAttribute("data-theme");
		f && (S(f) ? o.theme = f : p(`Unknown data-theme value: "${f}"`));
		let h = e.getAttribute("data-size");
		h && (O(h) ? o.size = h : p(`Unknown data-size value: "${h}"`));
		let I = e.getAttribute("data-base-url");
		typeof I == "string" && (o["base-url"] = I);
		let i = e.getAttribute("data-action");
		typeof i == "string" && (o.action = i);
		let r = e.getAttribute("data-cdata");
		typeof r == "string" && (o.cData = r);
		let a = e.getAttribute("data-retry");
		a && (N(a) ? o.retry = a : p(`Unknown data-retry value: "${a}"`));
		let s = +e.getAttribute("data-retry-interval");
		s && (P(s) ? o["retry-interval"] = s : p(`Invalid data-retry-interval value: "${s}, expected an integer value > 0 and < 900000"`));
		let t = e.getAttribute("data-refresh-expired");
		t && (W(t) ? o["refresh-expired"] = t : p(`Unknown data-refresh-expired value: "${t}, expected either: never, auto or manual.`));
		let n = e.getAttribute("data-error-callback");
		n && window[n] && (o["error-callback"] = window[n]);
		let c = e.getAttribute("data-callback");
		c && window[c] && (o.callback = window[c]);
		let g = e.getAttribute("data-expired-callback");
		g && window[g] && (o["expired-callback"] = window[g]);
		let v = e.getAttribute("data-timeout-callback");
		v && window[v] && (o["timeout-callback"] = window[v]);
		let L = (R = e.getAttribute("data-response-field")) != null ? R : "true";
		o["response-field"] = L === "true";
		let x = e.getAttribute("data-response-field-name");
		return x && (o["response-field-name"] = x), o
	}

	function ve() {
		let e = /\/turnstile\/v0(\/.*)?\/api\.js/,
			l = document.currentScript;
		if (e.test(l.src)) return l;
		let o = document.getElementsByTagName("script");
		for (let u = 0; u < o.length; u++) {
			let f = o[u].src;
			if (e.test(f)) return o[u]
		}
	}

	function be() {
		let e = ve();
		if (!e) return d("Could not find Turnstile script tag, some features may not be available"), null;
		(e.async || e.defer) && (ee = !0);
		let o = e.src.split("?");
		return o.length > 1 ? new URLSearchParams(o[1]) : new URLSearchParams
	}
	var w = be();
	if (w) {
		let e = w.get("compat");
		(e == null ? void 0 : e.toLowerCase()) === "recaptcha" ? window.grecaptcha ? p("grecaptcha is already defined. The compatibility layer will not be enabled") : (p("Compatibility layer enabled"), k = !0, window.grecaptcha = T): e !== null && p(`Unknown value for api.js?compat: "${e}", ignoring`), w.forEach(function(o, u) {
			E(["onload", "compat", "render"], u) || p(`Unknown parameter passed to api.js: "?${u}=...", ignoring`)
		});
		let l = w.get("onload");
		l && setTimeout(function() {
			typeof window[l] == "function" && window[l]()
		}, 0)
	}
	var we = "turnstile" in window;
	we ? p("Turnstile already has been loaded. Is Turnstile imported multiple times?") : ("Proxy" in window ? window.cfChallengeAPI = new Proxy(T, {
		get(e, l) {
			return p("window.cfChallengeAPI is deprecated, please move to window.turnstile"), e[l]
		}
	}) : window.cfChallengeAPI = T, window.turnstile = T, w.get("render") !== "explicit" && (document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(Z, 0) : window.addEventListener("DOMContentLoaded", Z)));
})();