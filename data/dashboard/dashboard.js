! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "971b2a0e-aa75-5c51-8084-7e7336f84c36")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				J8: function() {
					return a
				},
				Jd: function() {
					return d
				},
				QY: function() {
					return p
				},
				Qw: function() {
					return c
				},
				ki: function() {
					return l
				},
				wz: function() {
					return I
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				i = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const c = () => Object.keys(s.Z).reduce((E, g) => (g.indexOf("cf_beta.") === 0 && s.Z.get(g) === "true" && E.push(g.split(".").slice(1).join(".")), E), []),
				l = () => {
					var E, g, T;
					return ((E = window) === null || E === void 0 || (g = E.bootstrap) === null || g === void 0 || (T = g.data) === null || T === void 0 ? void 0 : T.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && s.Z) {
				const E = u().parse(window.location.search);
				E.beta_on && s.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && s.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const v = {},
				n = E => {
					var g, T, f;
					return Object.prototype.hasOwnProperty.call(v, E) ? v[E] : ((g = window) === null || g === void 0 || (T = g.bootstrap) === null || T === void 0 || (f = T.data) === null || f === void 0 ? void 0 : f.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(b => b === E) ? (v[E] = !0, !0) : (v[E] = !1, !1)
				},
				o = E => s.Z ? s.Z.get(`cf_beta.${E}`) === !0 : !1,
				a = E => o(E) || n(E),
				_ = () => !0,
				d = () => {
					var E, g, T;
					return ((E = window) === null || E === void 0 || (g = E.bootstrap) === null || g === void 0 || (T = g.data) === null || T === void 0 ? void 0 : T.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				p = E => {
					const g = (0, e.uF)(E),
						T = (g == null ? void 0 : g.roles) || [];
					return (0, r.qR)(location.pathname) && T.length === 1 && T.some(f => f === "Administrator Read Only")
				},
				h = () => {
					var E, g, T;
					return ((E = window) === null || E === void 0 || (g = E.location) === null || g === void 0 || (T = g.origin) === null || T === void 0 ? void 0 : T.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				I = () => h() === "fed"
		},
		"../functions/utils/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				r = "cf_fv_preview",
				i = "cf_pv",
				u = "current",
				s = "hash",
				m = "deploymentPreview",
				c = "fragmentPreview",
				l = o => o === u ? v() : n(),
				v = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (o = 72) => {
					const a = 36e5;
					return new Date(Date.now() + o * a)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				E9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(E) {
				for (var g = 1; g < arguments.length; g++) {
					var T = arguments[g] != null ? Object(arguments[g]) : {},
						f = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(T).filter(function(b) {
						return Object.getOwnPropertyDescriptor(T, b).enumerable
					})), f.forEach(function(b) {
						i(E, b, T[b])
					})
				}
				return E
			}

			function i(E, g, T) {
				return g = u(g), g in E ? Object.defineProperty(E, g, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[g] = T, E
			}

			function u(E) {
				var g = s(E, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function s(E, g) {
				if (typeof E != "object" || E === null) return E;
				var T = E[Symbol.toPrimitive];
				if (T !== void 0) {
					var f = T.call(E, g || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(E)
			}
			const m = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				c = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				l = e.z.string(),
				v = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(l, v),
				o = e.z.enum(["live", "previews", "canary"]),
				a = (E, g) => {
					const T = E.data.cookies[g],
						f = {
							[PREVIEW_VERSIONING_COOKIE]: m,
							[DEPLOYMENT_VERSION_COOKIE]: c
						};
					try {
						return f[g].parse(T)
					} catch {
						return null
					}
				},
				_ = E => {
					try {
						return decodeURIComponent(E).split(",").reduce((g, T) => {
							const f = T.split(":"),
								b = l.parse(f[0]),
								O = v.parse(f[1]);
							return r({}, g, {
								[b]: O
							})
						}, {})
					} catch {
						return {}
					}
				},
				d = E => {
					const g = E.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						T = _(g);
					try {
						return n.parse(T)
					} catch {
						return null
					}
				},
				p = E => {
					const g = m.parse(E),
						[T, ...f] = g.split("-"),
						b = f.join("-");
					return {
						projectType: T,
						deploymentId: b
					}
				},
				h = (E, g) => {
					if (!g) return "";
					try {
						var T;
						const {
							projectType: f,
							deploymentId: b
						} = p(g), O = {
							live: E.env.PAGES_WORKERS_LIVE_HOST,
							previews: E.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: A,
							pathname: D,
							search: M
						} = new URL(E.request.url), w = A == null || (T = A.split(".")) === null || T === void 0 ? void 0 : T[0];
						if (b && b !== w && o.safeParse(f).success) {
							const S = O[f];
							return `https://${b}.${S}${D}${M}`
						}
					} catch (f) {
						console.log(f)
					}
					return ""
				},
				I = (E, g) => {
					if (!g) return "";
					try {
						var T;
						const f = E.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: b,
								pathname: O,
								search: A
							} = new URL(E.request.url),
							D = b == null || (T = b.split(".")) === null || T === void 0 ? void 0 : T[0],
							{
								deploymentSHA: M
							} = parsePagesDevUrl(E.env.CF_PAGES_URL),
							w = E.request.headers.get("sec-fetch-dest") === "document";
						if (g && g !== D && g !== M && !w) return `https://${g}.${f}${O}${A}`
					} catch (f) {
						console.log(f)
					}
					return ""
				}
		},
		"../init.ts": function(j, y, t) {
			"use strict";
			t.r(y);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				i = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(B) {
				for (var V = 1; V < arguments.length; V++) {
					var re = arguments[V] != null ? Object(arguments[V]) : {},
						ue = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(re).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(re, Ee).enumerable
					})), ue.forEach(function(Ee) {
						c(B, Ee, re[Ee])
					})
				}
				return B
			}

			function c(B, V, re) {
				return V = l(V), V in B ? Object.defineProperty(B, V, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = re, B
			}

			function l(B) {
				var V = v(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function v(B, V) {
				if (typeof B != "object" || B === null) return B;
				var re = B[Symbol.toPrimitive];
				if (re !== void 0) {
					var ue = re.call(B, V || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			const n = B => {
				const V = B && B.headers || {},
					re = new Headers(V);
				return re.append("X-Cross-Site-Security", "dash"), m({}, B, {
					headers: re
				})
			};
			(0, s.register)({
				request: (B, V) => {
					try {
						return new URL(B), B === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", V] : [B, V]
					} catch {
						var re, ue;
						return typeof B == "object" && ((re = B) === null || re === void 0 || (ue = re.url) === null || ue === void 0 ? void 0 : ue.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [B, V] : [B, n(V)]
					}
				}
			});
			var o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				_ = t("../react/app/providers/storeContainer.js");
			let d = "";
			const p = 61;

			function h(B) {
				const V = B.substr(1);
				if (V && d !== V) {
					const re = document.getElementById(V);
					if (re) {
						const ue = re.getBoundingClientRect().top;
						if (ue > 0) {
							const Ee = ue - p;
							document.documentElement.scrollTop = Ee
						}
					}
				}
				d = V
			}

			function I(B) {
				B.listen(V => h(V.hash))
			}
			var E = t("../../../../node_modules/cookie/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = t("../functions/utils/constants.ts");
			const f = B => {
					switch (B) {
						case 429:
							return {
								title: "Rate Limit Exceeded", description: 'This IP address has been rate limited. Please wait one minute and then <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							};
						case 503:
							return {
								title: "The Cloudflare Dashboard is temporarily under maintenance.", description: 'Please visit the <a href="https://www.cloudflarestatus.com/incidents/5xxwjqd2lwgp">Cloudflare Status page</a> for up-to-date information regarding the maintenance.'
							};
						default:
							return {
								title: "The Cloudflare Dashboard is temporarily unavailable.", description: 'Please <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							}
					}
				},
				b = (B, V = !1) => {
					var re;
					const ue = f(B),
						Ee = `
  <style type="text/css">
    #loading-state {
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }
    .dark-mode body {
      background-color: #0a0a0a;
      color: #d9d9d9;
    }
    .error-container {
      line-height: 1.5;
      font-size: 20px;
      padding: 32px;
    }
    .error-container a {
      color: inherit;
      text-decoration: underline;
    }
    .error-container h1 {
      line-height: 1.5;
      font-size: inherit;
      font-weight: 600;
      margin: 0 auto 16px;
    }
    .error-container p {
      margin: 0;
      max-width: 37.5rem;
    }
    .error-container svg {
      width: 128px;
      margin-bottom: 16px;
    }
  </style>
  <div class="error-container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1230.574 519.774" xml:space="preserve">
      <path fill="#F78100" d="M784.025,512.011l5.872-20.311c6.998-24.169,4.394-46.511-7.349-62.926c-10.801-15.122-28.804-24.022-50.666-25.056l-414.114-5.281c-2.788-0.147-5.096-1.403-6.518-3.471c-1.44-2.123-1.773-4.856-0.886-7.478c1.366-4.08,5.41-7.164,9.62-7.349l417.954-5.299c49.576-2.271,103.252-42.505,122.048-91.564l23.837-62.28c0.657-1.696,0.952-3.493,0.94-5.294c-0.007-0.984-0.078-1.969-0.294-2.94C857.383,91.028,748.758,0,618.863,0c-119.685,0-221.312,77.254-257.76,184.623c-23.523-17.652-53.62-27.031-85.969-23.801c-57.423,5.706-103.565,51.94-109.271,109.363c-1.496,14.901-0.277,29.284,3.158,42.8C75.222,315.718,0,392.566,0,487.029c0,8.549,0.646,16.95,1.846,25.166c0.591,3.988,3.952,6.98,7.977,6.98l764.527,0.092c0.076,0,0.142-0.034,0.218-0.036C778.942,519.134,782.79,516.24,784.025,512.011z"/>
      <path fill="#FBAC42" d="M921.982,225.558c-3.841,0-7.663,0.111-11.466,0.295c-0.628,0.033-1.224,0.185-1.796,0.385c-1.985,0.696-3.566,2.305-4.168,4.397l-16.286,56.242c-6.998,24.169-4.395,46.493,7.349,62.907c10.801,15.14,28.804,24.022,50.665,25.056l88.277,5.299c2.604,0.129,4.893,1.385,6.297,3.416c1.477,2.142,1.809,4.893,0.923,7.515c-1.385,4.081-5.41,7.164-9.601,7.349l-91.73,5.299c-49.798,2.29-103.473,42.505-122.27,91.564l-6.629,17.319c-1.206,3.134,1.039,6.472,4.354,6.635c0.084,0.004,0.159,0.031,0.244,0.031h315.626c3.766,0,7.127-2.456,8.142-6.075c5.484-19.498,8.402-40.048,8.402-61.301C1148.315,326.889,1046.984,225.558,921.982,225.558z"/>
    </svg>
    <h1 id="error-title">${ue.title}</h1>
    <p id="error-description">${ue.description}</p>
  </div>
  `,
						Se = V ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${g.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(re=window.build)===null||re===void 0?void 0:re.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Ee + Se
				},
				O = B => {
					var V;
					const re = document.getElementById(B);
					!re || (V = re.parentNode) === null || V === void 0 || V.removeChild(re)
				};

			function A() {
				const B = document.getElementById("loading-state");
				B == null || B.classList.add("hide"), B == null || B.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(O)
				})
			}

			function D(B) {
				var V;
				const re = document.getElementById("loading-state"),
					ue = !!((V = E.parse(document.cookie)) === null || V === void 0 ? void 0 : V[T.b1]);
				!re || (re.innerHTML = b(B == null ? void 0 : B.code, ue))
			}
			var M = t("../utils/initStyles.ts"),
				w = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				S = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				R = t("../react/common/selectors/languagePreferenceSelector.ts"),
				L = t("../flags.ts"),
				K = t("../utils/getDashVersion.ts");
			const q = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				X = !0,
				J = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				$ = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var W = t("../utils/sentry/lastSentEventId.ts"),
				H = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				U = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const P = B => {
				const V = async re => {
					var ue, Ee;
					const Se = {
						envelope: re.body,
						url: B.url,
						isPreviewDeploy: (ue = window) === null || ue === void 0 || (Ee = ue.build) === null || Ee === void 0 ? void 0 : Ee.isPreviewDeploy,
						release: (0, K.t)()
					};
					try {
						const Pe = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Se)
						});
						return {
							statusCode: Pe.status,
							headers: {
								"x-sentry-rate-limits": Pe.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Pe.headers.get("Retry-After")
							}
						}
					} catch (Pe) {
						return console.log(Pe), (0, U.$2)(Pe)
					}
				};
				return H.q(B, V)
			};
			var N = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				F = t("../../../../node_modules/history/esm/history.js"),
				oe = (0, F.lX)(),
				ie = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Y = t("../react/utils/url.ts");
			const pe = (0, ie.Rf)();
			let z;

			function x(B) {
				return ee(B, "react-router-v5")
			}

			function ee(B, V) {
				return (re, ue = !0, Ee = !0) => {
					ue && pe && pe.location && (z = re({
						name: (0, Y.Fl)(pe.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": V
						}
					})), Ee && B.listen && B.listen((Se, Pe) => {
						if (Pe && (Pe === "PUSH" || Pe === "POP")) {
							z && z.finish();
							const qe = {
								"routing.instrumentation": V
							};
							z = re({
								name: (0, Y.Fl)(Se.pathname),
								op: "navigation",
								tags: qe
							})
						}
					})
				}
			}
			var ne = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ce = t.n(ne),
				ye = t("../../../common/intl/intl-core/src/errors.ts"),
				ae = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Oe = t("../react/common/middleware/sparrow/errors.ts");

			function De(B, V, re) {
				return V = Re(V), V in B ? Object.defineProperty(B, V, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = re, B
			}

			function Re(B) {
				var V = We(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function We(B, V) {
				if (typeof B != "object" || B === null) return B;
				var re = B[Symbol.toPrimitive];
				if (re !== void 0) {
					var ue = re.call(B, V || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			class ke {
				constructor() {
					De(this, "name", ke.id)
				}
				setupOnce() {
					t.g.console && (0, ae.hl)(t.g.console, "error", V => (...re) => {
						const ue = re.find(Ee => Ee instanceof Error);
						if (q && ue) {
							let Ee, Se = !0;
							if (ue instanceof Oe.ez) {
								const Pe = ue instanceof Oe.oV ? ue.invalidProperties : void 0;
								Ee = {
									tags: {
										"sparrow.eventName": ue.eventName
									},
									extra: {
										sparrow: {
											eventName: ue.eventName,
											invalidProperties: Pe
										}
									},
									fingerprint: [ue.name ? ue.name : "SparrowValidationError"]
								}, Se = !1
							} else if (ue instanceof ne.SparrowIdCookieError) Ee = {
								extra: {
									sparrowIdCookie: ue.cookie
								},
								fingerprint: [ue.name ? ue.name : "SparrowIdCookieError"]
							};
							else if (ue.name === "ChunkLoadError") {
								Ee = {
									fingerprint: [ue.name]
								};
								try {
									Ee.tags = {
										chunkId: ue.message.split(" ")[2],
										chunkUrl: ue.request
									}
								} catch {}
							} else ue instanceof ye.YB && (Ee = {
								fingerprint: ["TranslatorError", ue.translationKey]
							});
							Se && o.Tb(ue, Ee)
						}
						typeof V == "function" && V.apply(t.g.console, re)
					})
				}
			}
			De(ke, "id", "ConsoleErrorIntegration");
			var it = null,
				Ke = t("../react/common/utils/getEnvironment.ts");
			const et = () => {
					if (q && X) {
						var B, V, re, ue, Ee, Se, Pe, qe, ct, Ne;
						const pt = (0, Ke.Z)();
						let Pt = "production";
						((B = window) === null || B === void 0 || (V = B.build) === null || V === void 0 ? void 0 : V.isPreviewDeploy) && (Pt += "-preview"), pt === "canary" && (Pt = "canary"), S.S({
							dsn: q,
							release: (0, K.t)(),
							environment: Pt,
							ignoreErrors: $,
							allowUrls: J,
							autoSessionTracking: !1,
							integrations: Et => [...Et.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new ke, new N.jK.BrowserTracing({
								routingInstrumentation: x(oe)
							})],
							tracesSampleRate: 0,
							transport: P,
							beforeSend: Et => (W.e.setEventId(Et.event_id), Et)
						});
						const Ut = (0, _.bh)().getState();
						o.rJ({
							LOCAL_STORAGE_FLAGS: (0, L.Qw)(),
							USER_BETA_FLAGS: (0, L.ki)(),
							meta: {
								connection: {
									type: (re = window) === null || re === void 0 || (ue = re.navigator) === null || ue === void 0 || (Ee = ue.connection) === null || Ee === void 0 ? void 0 : Ee.effectiveType,
									bandwidth: (Se = window) === null || Se === void 0 || (Pe = Se.navigator) === null || Pe === void 0 || (qe = Pe.connection) === null || qe === void 0 ? void 0 : qe.downlink
								},
								languagePreference: (0, R.r)(Ut),
								isPreviewDeploy: (ct = window) === null || ct === void 0 || (Ne = ct.build) === null || Ne === void 0 ? void 0 : Ne.isPreviewDeploy
							},
							utilGates: (0, w.T2)(Ut)
						}), window.addEventListener("unhandledrejection", function(Et) {})
					}
				},
				Fe = B => {
					B ? o.av({
						id: B
					}) : o.av(null)
				};
			var G = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Be = () => {
					let B;
					try {
						B = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), B = window.location.search
					}
					if (!B.includes("remote[")) return;
					const V = new URLSearchParams(B),
						re = {};
					for (let [ue, Ee] of V) ue.includes("remote") && (re[ue.replace(/remote\[|\]/g, "")] = Ee);
					G.Z.set("mfe-remotes", JSON.stringify(re))
				},
				xe = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				nt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const dt = "ANON_USER_ID";

			function mt() {
				var B, V, re, ue;
				let Ee = (B = t.g) === null || B === void 0 || (V = B.bootstrap) === null || V === void 0 || (re = V.data) === null || re === void 0 || (ue = re.user) === null || ue === void 0 ? void 0 : ue.id;
				if (!Ee) {
					let Se = G.Z.get(dt);
					if (!Se) {
						let Pe = (0, nt.Z)();
						G.Z.set(dt, Pe), Se = Pe
					}
					return Se
				}
				return Ee
			}
			async function Ae() {
				const B = (0, _.bh)();
				B.dispatch((0, xe.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await B.dispatch((0, w.UL)({
					userId: mt()
				}))
			}
			class rt extends Error {
				constructor(V, re) {
					super(re);
					this.name = `${V} ${re}`
				}
			}
			const Q = () => {
					document.cookie.split(";").forEach(V => {
						const [re] = V.trim().split("=");
						document.cookie = `${re}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				se = async () => {
					let B = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!B.ok) throw B.headers.get("content-type") === "text/html" && (await B.text()).toLowerCase().includes("cookie too large") && (o.$e(function(Ee) {
						Ee.setTag("init", "cookieTooLarge"), o.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), Q(), window.location.reload()), new rt("Bootstrap API Failure", B == null ? void 0 : B.status);
					return (await B.json()).result.data
				};
			var fe = t("webpack/sharing/consume/default/react/react"),
				Ce = t.n(fe),
				je = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Ge = t("webpack/sharing/consume/default/react-dom/react-dom"),
				He = t("webpack/sharing/consume/default/react-redux/react-redux"),
				ht = t("../../../../node_modules/swr/core/dist/index.mjs"),
				yt = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				bt = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				jt = t("../react/shims/focus-visible.js"),
				Ze = t("../react/app/components/DeepLink/index.ts"),
				gt = t("../../../../node_modules/prop-types/index.js"),
				st = t.n(gt),
				lt = t("../react/utils/translator.tsx"),
				ft = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Le = t("../../../dash/intl/intl-translations/src/index.ts"),
				Z = t("../../../../node_modules/query-string/query-string.js"),
				me = t.n(Z),
				he = t("../react/common/actions/userActions.ts"),
				Te = t("../react/common/selectors/userSelectors.ts"),
				Me = t("../react/utils/i18n.ts"),
				Ve = t("../react/utils/bootstrap.ts");

			function vt(B) {
				for (var V = 1; V < arguments.length; V++) {
					var re = arguments[V] != null ? Object(arguments[V]) : {},
						ue = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(re).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(re, Ee).enumerable
					})), ue.forEach(function(Ee) {
						_t(B, Ee, re[Ee])
					})
				}
				return B
			}

			function _t(B, V, re) {
				return V = $t(V), V in B ? Object.defineProperty(B, V, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = re, B
			}

			function $t(B) {
				var V = Ct(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function Ct(B, V) {
				if (typeof B != "object" || B === null) return B;
				var re = B[Symbol.toPrimitive];
				if (re !== void 0) {
					var ue = re.call(B, V || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			let Qe = me().parse(location.search);
			const wt = B => {
					const V = (0, Ve.$8)() ? [(0, Le.Fy)(Le.if.changes), (0, Le.Fy)(Le.if.common), (0, Le.Fy)(Le.if.navigation), (0, Le.Fy)(Le.if.overview), (0, Le.Fy)(Le.if.onboarding), (0, Le.Fy)(Le.if.invite), (0, Le.Fy)(Le.if.login), (0, Le.Fy)(Le.if.dns), (0, Le.Fy)(Le.n4.ssl_tls), (0, Le.Fy)(Le.if.message_inbox), (0, Le.Fy)(Le.if.welcome)] : [(0, Le.Fy)(Le.if.common), (0, Le.Fy)(Le.if.invite), (0, Le.Fy)(Le.if.login), (0, Le.Fy)(Le.if.onboarding)];
					Qe.lang ? Lt(B) : G.Z.get(Me.th) && Ot(B, (0, Me.Kd)());
					const re = async ue => (await Promise.all(V.map(Se => Se(ue)))).reduce((Se, Pe) => vt({}, Se, Pe), {});
					return Ce().createElement(ft.LocaleContext.Provider, {
						value: B.languagePreference
					}, Ce().createElement(ft.I18nProvider, {
						translator: lt.Vb,
						locale: B.languagePreference
					}, Ce().createElement(ft.I18nLoader, {
						loadPhrases: re
					}, B.children)))
				},
				Lt = async B => {
					let V = Qe.lang.substring(0, Qe.lang.length - 2) + Qe.lang.substring(Qe.lang.length - 2, Qe.lang.length).toUpperCase();
					if (!(0, R.v)(V)) {
						console.warn(`${V} is not a supported locale.`), delete Qe.lang, B.history.replace({
							search: me().stringify(Qe)
						});
						return
					}(0, Me.i_)(V), delete Qe.lang, Ot(B, V), B.isAuthenticated || B.history.replace({
						search: me().stringify(Qe)
					})
				}, Ot = async (B, V) => {
					if (B.isAuthenticated) try {
						await B.setUserCommPreferences({
							"language-locale": V
						}, {
							hideErrorAlert: !0
						}), G.Z.remove(Me.th), B.history.replace({
							search: me().stringify(Qe)
						})
					} catch (re) {
						G.Z.set(Me.th, !0), console.error(re)
					} else G.Z.set(Me.th, !0)
				}, St = B => {
					const V = (0, Te.PR)(B);
					return {
						isAuthenticated: !!(V && V.id),
						languagePreference: (0, Me.Kd)() || (0, R.r)(B)
					}
				}, kt = {
					setUserCommPreferences: he.V_
				};
			var Mt = (0, je.withRouter)((0, He.connect)(St, kt)(wt));
			wt.propTypes = {
				history: st().object,
				languagePreference: st().string.isRequired,
				children: st().node.isRequired,
				isAuthenticated: st().bool,
				setUserCommPreferences: st().func.isRequired
			};
			var Wt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Tt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let It;
			const Ft = ({
				selectorPrefix: B = "c_"
			} = {}) => (It || (It = (0, Tt.Z)({
				dev: !1,
				selectorPrefix: B
			})), It);
			var Vt = t("../react/common/out.css"),
				zt = t("../react/common/components/ModalManager.tsx"),
				Rt = t("../react/app/components/ErrorBoundary.tsx"),
				Nt = t("../react/common/actions/notificationsActions.ts");
			const xt = (t.g.bootstrap || {}).data || {};
			class Bt extends Ce().Component {
				componentDidMount() {
					xt.messages && this.dispatchNotificationActions(xt.messages)
				}
				dispatchNotificationActions(V) {
					V.forEach(re => {
						const {
							type: ue,
							message: Ee,
							persist: Se
						} = re;
						["success", "info", "warn", "error"].includes(ue) && this.props.notifyAdd(ue, (0, lt.ZP)(Ee), {
							persist: !!Se
						})
					})
				}
				render() {
					return null
				}
			}
			var k = (0, je.withRouter)((0, He.connect)(null, {
				notifyAdd: Nt.add
			})(Bt));
			Bt.propTypes = {
				notifyAdd: st().func.isRequired
			};
			var ge = t("../react/app/redux/index.ts");

			function Ie() {
				var B;
				const V = (0, ge.p4)(Te.PR),
					re = (V == null || (B = V.email) === null || B === void 0 ? void 0 : B.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ue = (0, xe.Yc)();
				(0, fe.useEffect)(() => {
					ue({
						userType: re
					})
				}, [re, ue])
			}
			var $e = t("../react/common/selectors/entitlementsSelectors.ts"),
				Je = t("../react/common/selectors/accountSelectors.ts");
			const de = ["accountId", "is_ent"];

			function le() {
				const B = (0, xe.f7)(),
					V = (0, je.useHistory)(),
					re = (0, Y.uW)(V.location.pathname),
					ue = (0, xe.Yc)(),
					Ee = (0, xe.O$)(),
					Se = (0, ge.p4)($e.u1),
					Pe = !Se.isRequesting && !!Se.data,
					qe = (0, ge.p4)($e.p1),
					ct = (0, ge.p4)(Je.Xu),
					Ne = (0, ge.p4)(Je.uF),
					pt = !ct.isRequesting && !!ct.data;
				(0, fe.useEffect)(() => {
					if (re && pt && Ne && Pe && re === Ne.account.id) {
						var Pt, Ut, Et, Yt;
						ue({
							accountId: Ne.account.id,
							is_ent: qe || (Ne == null || (Pt = Ne.account.meta) === null || Pt === void 0 ? void 0 : Pt.has_enterprise_zones),
							is_free_account: !qe && !(Ne == null || (Ut = Ne.account.meta) === null || Ut === void 0 ? void 0 : Ut.has_business_zones) && !(Ne == null || (Et = Ne.account.meta) === null || Et === void 0 ? void 0 : Et.has_pro_zones) && !(Ne == null || (Yt = Ne.account.meta) === null || Yt === void 0 ? void 0 : Yt.has_enterprise_zones)
						})
					} else(!re || re in B && B.accountId !== re) && Ee(de)
				}, [pt, Ne, ue, Ee, Pe, qe, re, B])
			}
			var ve = t("../react/common/selectors/zoneSelectors.ts");

			function _e() {
				const B = (0, ge.p4)(ve.nA),
					V = (0, xe.Yc)();
				(0, fe.useEffect)(() => {
					var re;
					V({
						zone_id: B == null ? void 0 : B.id,
						zone_plan: B == null || (re = B.plan) === null || re === void 0 ? void 0 : re.legacy_id
					})
				}, [B, V])
			}
			const we = () => (Ie(), le(), _e(), null);
			var Ue = t("../react/app/components/Persistence/index.tsx"),
				Ye = t("../node_modules/@cloudflare/elements/es/index.js"),
				ot = t("../react/app/components/LoadingSuspense.tsx");
			const Xe = Ce().lazy(() => Promise.all([t.e(97842), t.e(33023), t.e(20400), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var ze = () => Ce().createElement(ot.Z, null, Ce().createElement(Xe, null));
			const At = () => (fe.useEffect(() => A, []), null);
			var ut = t("../../../../node_modules/moment/moment.js"),
				at = t.n(ut);
			const en = B => {
					switch (B) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return B.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return B.toLowerCase();
						default:
							return "en"
					}
				},
				tn = () => {
					const B = (0, ge.p4)(R.r);
					(0, fe.useEffect)(() => {
						const V = en(B);
						V !== at().locale() && at().locale(V), document.documentElement.lang = B
					}, [B])
				},
				nn = () => {
					(0, fe.useEffect)(() => {
						async function B() {
							var V, re, ue, Ee;
							let Se;
							if (((V = window) === null || V === void 0 || (re = V.build) === null || re === void 0 ? void 0 : re.isPreviewDeploy) && ((ue = window) === null || ue === void 0 || (Ee = ue.build) === null || Ee === void 0 ? void 0 : Ee.branch) !== "staging" && (Se = "cookie"), !!Se) try {
								const Pe = document.head.querySelector("link[rel=icon]");
								Pe && (Pe.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${Se}.ico`)).default)
							} catch {}
						}
						B()
					}, [])
				};
			var rn = t("../react/common/constants/constants.ts");
			const on = () => {
				var B;
				const V = (0, je.useLocation)(),
					[re, ue] = (0, fe.useState)(((B = window) === null || B === void 0 ? void 0 : B.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, fe.useEffect)(() => {
					const Ee = me().parse(V.search);
					if (Ee.pt && G.Z.set(rn.sJ, Ee.pt), Ee == null ? void 0 : Ee.devPanel) {
						var Se, Pe;
						(Se = window) === null || Se === void 0 || (Pe = Se.localStorage) === null || Pe === void 0 || Pe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ue(!0)
					}
				}, [V.search]), {
					devPanelEnabled: re
				}
			};
			var an = t("../react/common/hooks/useGate.ts");
			const sn = ({
				isDev: B,
				adobeFeatureFlag: V
			}) => {
				(0, fe.useEffect)(() => {
					(() => {
						if (!V) return null;
						let ue;
						B ? ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const Ee = document.createElement("script");
						Ee.async = !0, Ee.src = ue, document.head.insertBefore(Ee, document.head.childNodes[0])
					})()
				}, [])
			};
			var cn = t("../react/utils/useDomainConnectRedirect.ts");
			const ln = Ce().lazy(() => Promise.all([t.e(97842), t.e(16691), t.e(11624), t.e(11664), t.e(94012), t.e(1091), t.e(33023), t.e(98733), t.e(88789), t.e(10405), t.e(80778), t.e(69102), t.e(30823), t.e(77216), t.e(40517), t.e(39760), t.e(66270), t.e(29271), t.e(98210), t.e(3769), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				un = Ce().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(80778), t.e(17387), t.e(66270), t.e(3769), t.e(88145), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var dn = ({
					userIsAuthed: B
				}) => {
					tn(), nn(), (0, cn.y)();
					const {
						devPanelEnabled: V
					} = on();
					return sn({
						isDev: !1,
						adobeFeatureFlag: !!(0, an.Z)("dx-enable-adobe-launch")
					}), Ce().createElement(fe.Suspense, {
						fallback: Ce().createElement(At, null)
					}, Ce().createElement(je.Switch, null, !B && !0 && Ce().createElement(je.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Ce().createElement(un, null)), Ce().createElement(je.Route, {
						render: () => Ce().createElement(Ye.ZC, {
							minHeight: "100vh"
						}, Ce().createElement(ln, null))
					})), V && Ce().createElement(ze, null))
				},
				Zt = t("../../../../node_modules/yup/es/index.js"),
				pn = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => Zt.Z_().email((0, lt.ZP)("common.validation.email")).required((0, lt.ZP)("common.validation.email")),
				cfPassword: () => Zt.Z_().required((0, lt.ZP)("common.validation.required"))
			};
			(0, pn.Yd)(Qt).forEach(B => {
				Zt.kM(Zt.Z_, B, Qt[B])
			});
			const mn = B => {
					if (!document.startViewTransition) {
						B();
						return
					}
					document.startViewTransition(() => B())
				},
				Xt = Ce().lazy(() => Promise.all([t.e(16691), t.e(94012), t.e(6368), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function gn() {
				const [B, V] = (0, fe.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, fe.useEffect)(() => {
					const re = window.matchMedia("(prefers-color-scheme: dark)"),
						ue = Ee => {
							V(Ee.matches ? "dark" : "light")
						};
					return re.addEventListener("change", ue), () => {
						re.removeEventListener("change", ue)
					}
				}, []), B
			}
			const fn = () => {
					const B = (0, Ve.$8)(),
						[V, re] = (0, fe.useState)(B ? Xt : Ce().Fragment),
						ue = gn(),
						[Ee, Se] = (0, fe.useState)((0, g.Yc)());
					(0, fe.useEffect)(() => {
						(0, g.fF)(() => Se((0, g.Yc)()))
					}, []);
					const Pe = Ne => Ne === g.LF.ON || Ne === g.LF.SYSTEM && ue === "dark",
						qe = Ne => {
							document.cookie = `dark-mode=${Ne};Path=/;Max-Age=31536000`
						},
						ct = (Ne = g.LF.SYSTEM) => {
							const pt = Pe(Ne);
							mn(() => {
								Se(pt), (0, g.C8)(Ne)
							}), qe(Ne)
						};
					return (0, fe.useEffect)(() => {
						re(B ? Xt : Ce().Fragment)
					}, [B]), (0, fe.useEffect)(() => {
						const Ne = () => {
							const pt = localStorage.getItem("dark-mode");
							ct(pt)
						};
						return window.addEventListener("storage", Ne), () => window.removeEventListener("storage", Ne)
					}, []), Ce().createElement(fe.Suspense, {
						fallback: null
					}, Ce().createElement(He.Provider, {
						store: (0, _.bh)()
					}, Ce().createElement(je.Router, {
						history: oe
					}, Ce().createElement(V, null, Ce().createElement(Wt.Z, {
						renderer: Ft()
					}, Ce().createElement(Mt, null, Ce().createElement(Rt.S, {
						sentryTag: "Root"
					}, Ce().createElement(ht.J$, {
						value: {
							fetcher: Ne => fetch(Ne).then(pt => pt.json())
						}
					}, Ce().createElement(we, null), Ce().createElement(k, null), Ce().createElement(Ue.Z_, {
						onDarkModeChangeCb: ct
					}, Ce().createElement(Ze.ZP, null, Ce().createElement(dn, {
						userIsAuthed: B
					}))), Ce().createElement(zt.ZP, null), Ce().createElement(yt.F0, null)))))))))
				},
				vn = () => {
					(0, Ge.render)(Ce().createElement(fn, null), document.getElementById("react-app"))
				};
			var Dt = t("../utils/initSparrow.ts"),
				Gt = t("../utils/zaraz.ts");
			const _n = () => {
					const B = (0, Te.PR)((0, _.bh)().getState());
					En(), (0, Dt.Ug)(), (0, Gt.bM)(), (B == null ? void 0 : B.id) && ce().setUserId(B == null ? void 0 : B.id), (0, Dt.yV)(), !(0, Dt.Wi)() && (0, Dt.IM)(), B ? (0, Gt.yn)(B) : (0, Gt.Ro)()
				},
				En = () => {
					var B, V;
					(B = window) === null || B === void 0 || (V = B.OneTrust) === null || V === void 0 || V.OnConsentChanged(() => {
						const re = (0, Te.PR)((0, _.bh)().getState());
						(0, Dt.Wi)() ? (ce().setEnabled(!0), (re == null ? void 0 : re.id) ? (ce().setUserId(re.id), (0, Gt.yn)(re)) : (0, Gt.Ro)(), (0, Dt.yV)()) : (ce().setEnabled(!1), (0, Dt.IM)())
					})
				};

			function yn(B) {
				for (var V = 1; V < arguments.length; V++) {
					var re = arguments[V] != null ? Object(arguments[V]) : {},
						ue = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(re).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(re, Ee).enumerable
					})), ue.forEach(function(Ee) {
						hn(B, Ee, re[Ee])
					})
				}
				return B
			}

			function hn(B, V, re) {
				return V = bn(V), V in B ? Object.defineProperty(B, V, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = re, B
			}

			function bn(B) {
				var V = Cn(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function Cn(B, V) {
				if (typeof B != "object" || B === null) return B;
				var re = B[Symbol.toPrimitive];
				if (re !== void 0) {
					var ue = re.call(B, V || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			const wn = "init",
				Jt = (B, V) => {
					o.$e(function(re) {
						re.setTag(wn, V), o.Tb(B)
					}), D(B)
				},
				Ht = async (B, V) => {
					try {
						return await B(), !0
					} catch (re) {
						return Jt(re, V), !1
					}
				};
			(async () => {
				try {
					var B, V, re;
					t.g.build = yn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "32ce6bc9882272472824037ec4683117420baf38",
						dashVersion: "34928345",
						env: "production",
						builtAt: 1753809378773,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, K.p)()
					}), et();
					const ue = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => I(oe),
						tag: "hashScroll"
					}, {
						fn: M.Z,
						tag: "styles"
					}, {
						fn: Be,
						tag: "mfePreviewData"
					}];
					for (const ct of ue)
						if (!await Ht(ct.fn, ct.tag)) return;
					let Ee;
					if (!await Ht(async () => {
							Ee = await se()
						}, "bootstrap")) return;
					const Se = (0, _.bh)(),
						Pe = ((B = Ee) === null || B === void 0 ? void 0 : B.data) || {};
					Se.dispatch((0, a.mW)("user", Pe == null ? void 0 : Pe.user));
					const qe = (V = Ee) === null || V === void 0 || (re = V.data) === null || re === void 0 ? void 0 : re.user;
					return t.g.bootstrap = Ee, qe && qe.id && Fe(qe.id), !await Ht(Ae, "gates") || !(0, L.wz)() && !await Ht(_n, "tracking") ? void 0 : vn()
				} catch (ue) {
					Jt(ue, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(j, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				v = t.n(l);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(_) {
					for (var d = 1; d < arguments.length; d++) {
						var p = arguments[d];
						for (var h in p) Object.prototype.hasOwnProperty.call(p, h) && (_[h] = p[h])
					}
					return _
				}, n.apply(this, arguments)
			}
			const o = _ => {
				function d(p) {
					const h = (0, i.UM)(),
						I = (0, l.useHistory)(),
						E = (0, l.useLocation)(),
						g = (0, l.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						T = (0, i.p4)(u.PR) || null,
						f = (0, i.p4)(s.nA) || null,
						b = (0, i.p4)(m.uF),
						O = b ? b.account : null;
					if (!g) return null;
					const {
						accountId: A,
						app: D,
						tab: M
					} = g.params, w = g.params.zoneName && ((0, c.v5)(g.params.zoneName) || g.params.zoneName.indexOf(".") > 0) ? g.params.zoneName : void 0;
					return r().createElement(_, n({
						dispatch: h,
						history: I,
						location: E,
						match: g,
						user: T,
						membership: A ? b : null,
						account: A ? O : null,
						accountId: A || null,
						zone: w ? f : null,
						zoneName: w || null,
						app: w ? D : null,
						tab: w ? M : null
					}, p))
				}
				return d.displayName = `withEntities(${a(_)})`, d
			};

			function a(_) {
				return _.displayName || _.name || "Component"
			}
			y.Z = o
		},
		"../react/app/components/AccountHome/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return f
				},
				CK: function() {
					return D
				},
				KV: function() {
					return O
				},
				OX: function() {
					return A
				},
				QV: function() {
					return T
				},
				Yt: function() {
					return E
				},
				bA: function() {
					return g
				},
				fu: function() {
					return w
				},
				gX: function() {
					return p
				},
				hh: function() {
					return M
				},
				o1: function() {
					return b
				},
				tw: function() {
					return h
				},
				xD: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../react/utils/url.ts");
			const u = "projects table click",
				s = "click create application",
				m = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				l = "account home dev plat - view all projects click",
				v = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				o = "account home zero trust - analytics link click",
				a = "account home zero trust - product card click",
				_ = "account home zero trust - plan pill click",
				d = "account home zero trust - plan fallback link click",
				p = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: s,
					SPARROW_PRODUCT_CARD_CLICK: m,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: l,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: v,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: o,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: a,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: _,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: d
				},
				h = S => {
					r().sendEvent(u, {
						component: S
					})
				},
				I = S => {
					r().sendEvent(u, {
						component: "menu",
						subcomponent: S
					})
				},
				E = () => {
					r().sendEvent(s, {
						category: "Projects Table"
					})
				},
				g = ({
					category: S,
					product: R
				}) => {
					r().sendEvent(m, {
						category: S,
						product: R
					})
				},
				T = () => {
					r().sendEvent(c)
				},
				f = () => {
					r().sendEvent(l)
				},
				b = S => {
					r().sendEvent(n, {
						category: S
					})
				},
				O = ({
					category: S,
					href: R
				}) => {
					r().sendEvent(v, {
						category: S,
						href: (0, i.cm)(R)
					})
				},
				A = ({
					category: S,
					href: R
				}) => {
					r().sendEvent(o, {
						category: S,
						href: (0, i.cm)(R)
					})
				},
				D = ({
					category: S,
					product: R,
					href: L
				}) => {
					r().sendEvent(a, {
						category: S,
						product: R,
						href: (0, i.cm)(L)
					})
				},
				M = ({
					plan: S
				}) => {
					r().sendEvent(_, {
						plan: S
					})
				},
				w = () => {
					r().sendEvent(d)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return l
				},
				Bh: function() {
					return m
				},
				CM: function() {
					return v
				},
				MF: function() {
					return r
				},
				TS: function() {
					return a
				},
				WF: function() {
					return s
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return c
				},
				fj: function() {
					return o
				},
				r4: function() {
					return u
				},
				zq: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
			const r = {
					ADD_SITE: "deepLink/ADD_SITE",
					RESOLVING_START: "deepLink/RESOLVING_START",
					RESOLVING_COMPLETE: "deepLink/RESOLVING_COMPLETE",
					SELECT_ZONE: "SELECT_ZONE",
					SELECT_ACCOUNT: "SELECT_ACCOUNT",
					SELECT_PAGES_PROJECT: "SELECT_PAGES_PROJECT",
					SELECT_PAGES_DEPLOYMENT: "SELECT_PAGES_DEPLOYMENT",
					SET_FILTERED_ACCOUNT_IDS: "deepLink/SET_FILTERED_ACCOUNT_IDS",
					DELETE_FILTERED_ACCOUNT_IDS: "deepLink/DELETE_FILTERED_ACCOUNT_IDS",
					SELECT_WORKER: "deepLink/SELECT_WORKER"
				},
				i = (0, e.R)(r.ADD_SITE, _ => ({
					payload: _
				})),
				u = (0, e.R)(r.RESOLVING_START),
				s = (0, e.R)(r.RESOLVING_COMPLETE),
				m = (0, e.R)(r.SELECT_ZONE, _ => ({
					payload: _
				})),
				c = (0, e.R)(r.SELECT_ACCOUNT, _ => ({
					payload: _
				})),
				l = (0, e.R)(r.SELECT_PAGES_PROJECT, _ => ({
					payload: _
				})),
				v = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, _ => ({
					payload: _
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, _ => ({
					accountIds: _
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				a = (0, e.R)(r.SELECT_WORKER, _ => ({
					payload: _
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return v
				},
				Fj: function() {
					return u
				},
				Kt: function() {
					return m
				},
				O5: function() {
					return s
				},
				Tc: function() {
					return r
				},
				_h: function() {
					return n
				},
				dB: function() {
					return i
				},
				s$: function() {
					return c
				}
			});
			const e = "to",
				r = "_gl",
				i = "freeTrial",
				u = "deepLinkQueryParams",
				s = "resolvedDeepLinkQueryParams",
				m = "add",
				c = "multiSkuProducts",
				l = "/:account/billing/checkout",
				v = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return M
				},
				U: function() {
					return D.U
				},
				dd: function() {
					return D.dd
				},
				bk: function() {
					return m.bk
				},
				Bh: function() {
					return m.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t("../react/app/redux/index.ts"),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				s = t("../react/utils/bootstrap.ts"),
				m = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c);

			function v(w) {
				for (var S = 1; S < arguments.length; S++) {
					var R = arguments[S] != null ? Object(arguments[S]) : {},
						L = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(R).filter(function(K) {
						return Object.getOwnPropertyDescriptor(R, K).enumerable
					})), L.forEach(function(K) {
						n(w, K, R[K])
					})
				}
				return w
			}

			function n(w, S, R) {
				return S = o(S), S in w ? Object.defineProperty(w, S, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[S] = R, w
			}

			function o(w) {
				var S = a(w, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function a(w, S) {
				if (typeof w != "object" || w === null) return w;
				var R = w[Symbol.toPrimitive];
				if (R !== void 0) {
					var L = R.call(w, S || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(w)
			}
			class _ {
				constructor(S, R) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", L => {
						this.resolvers.set(L, {
							name: L,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", L => {
						const K = this.resolvers.get(L);
						K && (K.endTime = Date.now(), this.resolvers.set(L, K))
					}), n(this, "resolverCancel", L => {
						this.resolverDone(L), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", L => {
						const K = "NO_ACTION",
							q = {
								actionType: K,
								startTime: 0
							};
						return {
							start: (X = K) => {
								const J = this.resolvers.get(L);
								q.actionType = X, q.startTime = Date.now(), J && J.userActions.push(q)
							},
							finish: (X = K) => {
								q.actionType = X, q.endTime = Date.now()
							},
							cancel: (X = K) => {
								q.actionType = X, q.endTime = Date.now(), this.resolverCancel(L)
							}
						}
					}), this.deepLink = S, this.legacyDeepLink = R, this.resolvers = new Map
				}
				track(S) {
					try {
						if (this._done) return;
						this._done = !0;
						const R = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: d(this.startTime, this.endTime),
								totalCpuTime: d(this.startTime, this.endTime)
							},
							L = this.resolvers.size === 0 ? R : Array.from(this.resolvers.values()).reduce((K, q) => {
								const X = d(q.startTime, q.endTime),
									J = q.userActions.reduce((W, H) => {
										const U = d(H.startTime, H.endTime);
										return {
											totalTime: W.totalTime + U,
											actions: W.actions.set(H.actionType, U)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									$ = X - J.totalTime;
								return v({}, K, {
									totalTime: K.totalTime + X,
									totalUserActionsTime: K.totalUserActionsTime + J.totalTime,
									totalCpuTime: K.totalCpuTime + $,
									[`${q.name}ResolverTotalTime`]: X,
									[`${q.name}ResolverTotalCpuTime`]: $,
									[`${q.name}ResolverTotalUserActionsTime`]: J.totalTime
								}, Array.from(J.actions.keys()).reduce((W, H) => v({}, W, {
									[`${q.name}Resolver/${H}`]: J.actions.get(H)
								}), {}))
							}, v({}, R, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						l().sendEvent(S, L)
					} catch (R) {
						console.error(R)
					}
				}
			}

			function d(w = Date.now(), S = Date.now()) {
				return (S - w) / 1e3
			}
			var p = t("../react/app/components/DeepLink/constants.ts"),
				h = t("../react/common/hooks/useCachedState.ts"),
				I = t("../react/common/hooks/usePrevious.ts");

			function E(w) {
				for (var S = 1; S < arguments.length; S++) {
					var R = arguments[S] != null ? Object(arguments[S]) : {},
						L = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(R).filter(function(K) {
						return Object.getOwnPropertyDescriptor(R, K).enumerable
					})), L.forEach(function(K) {
						g(w, K, R[K])
					})
				}
				return w
			}

			function g(w, S, R) {
				return S = T(S), S in w ? Object.defineProperty(w, S, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[S] = R, w
			}

			function T(w) {
				var S = f(w, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function f(w, S) {
				if (typeof w != "object" || w === null) return w;
				var R = w[Symbol.toPrimitive];
				if (R !== void 0) {
					var L = R.call(w, S || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(w)
			}
			var O = ({
					children: w
				}) => {
					const S = (0, r.TZ)(),
						R = (0, i.useHistory)(),
						L = (0, I.Z)(R.location.pathname),
						[K, q] = (0, e.useState)(!0),
						[X, J] = (0, h.j)(void 0, {
							key: p.Fj
						}),
						[$, W] = (0, h.j)(void 0, {
							key: p.O5
						}),
						[H, U] = (0, h.j)(void 0, {
							key: p.s$
						}),
						P = (0, s.$8)();
					let N = new URLSearchParams(R.location.search);
					const F = (0, u.mL)(R.location.pathname, N);
					let te = null,
						oe = null;
					if (N.has(p.Tc) && N.delete(p.Tc), N.get(p.BV)) te = N.get(p.BV), R.location.hash && (oe = R.location.hash);
					else if (X) {
						const Y = new URLSearchParams(X);
						Y.get(p.BV) && (te = Y.get(p.BV), N = Y)
					} else F && (N.set(p.BV, F), te = F);
					if (te && p._h.test(te)) {
						const Y = N.getAll(p.Kt),
							pe = JSON.stringify(Y);
						Y.length && pe !== H && U(pe), N.has(p.Tc) && N.delete(p.Tc), N.delete(p.Kt)
					}!P && X === void 0 && te && J(N.toString());
					const ie = async () => {
						try {
							if ((0, u.I3)(te) && P) {
								X && J(void 0), S.dispatch((0, m.r4)()), q(!0), te && te !== $ && W(te);
								const Y = await (0, u.py)(te, q, S, R, L, new _(te, F ? `${R.location.pathname}${R.location.search}` : void 0));
								N.delete(p.BV);
								const pe = N.toString();
								R.replace(E({}, R.location, {
									pathname: Y,
									search: pe
								}, oe ? {
									hash: oe
								} : {})), S.dispatch((0, m.WF)())
							}
						} catch (Y) {
							S.dispatch((0, m.WF)()), console.error(Y)
						} finally {
							q(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ie()
					}, [R.location.pathname, R.location.search]), (K || (0, u.I3)(te)) && P ? null : w
				},
				A = t("../react/app/components/DeepLink/reducer.ts"),
				D = t("../react/app/components/DeepLink/selectors.ts"),
				M = O
		},
		"../react/app/components/DeepLink/reducer.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return u
				},
				r: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				i = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				s = r().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function m(c = s, l) {
				if (l.type === i.MF.RESOLVING_COMPLETE) return s;
				if (l.type === i.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (l.type === i.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (l.type === i.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", l.accountIds);
					if (l.type === i.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
					{
						let v = c;
						try {
							v = c.set("lastAction", l)
						} catch {
							v = c.set("lastAction", {
								type: l.type
							})
						}
						return v
					}
				} else return c
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return i
				},
				dd: function() {
					return r
				},
				yI: function() {
					return e
				}
			});
			const e = u => u.deepLink.lastAction,
				r = u => u.deepLink.isResolving,
				i = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				I3: function() {
					return v
				},
				X1: function() {
					return c
				},
				mL: function() {
					return d
				},
				py: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				i = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				s = t("../react/common/validators/index.js"),
				m = t("../react/common/utils/isGuards.ts");
			const c = p => (0, s.Lb)(p) && (p.split(".").length > 1 || (0, m.v5)(p)),
				l = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				v = p => typeof p == "string" && p.startsWith("/"),
				n = (p, h) => I => new Promise((E, g) => {
					h.start();
					const T = p.subscribe(() => {
						const f = (0, i.yI)(p.getState());
						f === r.E ? (h.cancel(), T(), g("DeepLink: waitForAction out of context.")) : I(f) && (h.finish(f.type), T(), E(f))
					})
				}),
				o = (p, h, I) => (E, g) => new Promise((T, f) => {
					I.start();
					const b = h.location.pathname;
					E = new URL(E, window.location.href).pathname, b !== E && (I.cancel(), f(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${E}", but on "${b}". You need to redirect to "${E}", and unblockRouter in your Resolver, before you use this function.`));
					const O = p.subscribe(() => {
						const A = (0, i.yI)(p.getState()),
							D = h.location.pathname,
							w = new URLSearchParams(h.location.search).get(u.BV);
						(D !== E || !!w) && (I.cancel(), O(), f(`DeepLink: waitForPageAction user navigated away from "${E}" to "${D}${w?h.location.search:""}"`)), A === r.E ? (I.cancel(), O(), f("DeepLink: waitForPageAction out of context.")) : g(A) && (I.finish(A.type), O(), T(A))
					})
				});

			function a(p) {
				const h = [],
					I = p.split("?")[0].split("/");
				for (let E of I) E.length !== 0 && (E.startsWith(":") ? h.push({
					value: E.substring(1),
					type: "dynamic"
				}) : h.push({
					value: E,
					type: "static"
				}));
				return h
			}
			async function _(p, h, I, E, g, T) {
				T.start();
				const f = a(p),
					O = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					A = {};
				let D = "";
				for (const [M, w] of f.entries())
					if (w.type === "static") D = [D, w.value].join("/");
					else if (w.type === "dynamic" && l.is(w.value) && w.value in O) {
					T.resolverStart(w.value);
					const S = await O[w.value]({
						deepLink: p,
						blockRouter: () => h(!0),
						unblockRouter: () => h(!1),
						routerHistory: E,
						resolvedValues: A,
						store: I,
						referringRoute: g,
						uri: {
							currentPartIdx: M,
							parts: f
						},
						waitForAction: n(I, T.createUserActionTracker(w.value)),
						waitForPageAction: o(I, E, T.createUserActionTracker(w.value))
					});
					T.resolverDone(w.value), D = [D, S].join("/"), A[w.value] = S
				} else throw T.cancel(), new Error(`DeepLink: Resolver with name '${w.value}' is not supported.`);
				return T.done(), D
			}

			function d(p, h) {
				const I = ":account",
					E = ":zone",
					g = h.get("zone");
				if (g) return h.delete("zone"), `/${I}/${E}/${g}`;
				const T = h.get("account");
				if (T) return h.delete("account"), `/${I}/${T}`;
				if (p === "/overview") return `/${I}/${E}`;
				const f = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const b of f) {
					const O = b.length;
					if (p.startsWith(b) && (p.length === O || p[O] === "/")) return `/${I}/${E}${p}`
				}
				switch (p) {
					case "/account/billing":
						return `/${I}/billing`;
					case "/account/subscriptions":
						return `/${I}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${I}/dns-firewall`;
					case "/account/audit-log":
						return `/${I}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				s = t("../utils/sentry/lastSentEventId.ts"),
				m = t("../react/utils/zaraz.ts"),
				c = t("../react/utils/url.ts"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				v = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(o),
				_ = t("../react/common/components/Page.tsx"),
				d = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function p() {
				return (0, e.useEffect)(() => {
					a().sendEvent("new page available refresh cta")
				}, []), r().createElement(_.Z, {
					type: "narrow"
				}, r().createElement(l.ZC, {
					textAlign: "center"
				}, r().createElement(l.H1, {
					fontSize: 5,
					fontWeight: 400
				}, r().createElement(n.Trans, {
					id: "error.new_page_version_available.title"
				})), r().createElement(n.Trans, {
					id: "error.new_page_version_available.description"
				}), r().createElement(l.ZC, null, r().createElement(l.Ei, {
					height: 116,
					src: d,
					"aria-hidden": !0
				})), r().createElement(v.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, r().createElement(n.Trans, {
					id: "common.refresh"
				}))))
			}
			const h = ({
				sentryTag: I,
				children: E,
				fallbackComponent: g
			}) => r().createElement(i.SV, {
				beforeCapture: T => {
					m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, c.Fl)(window.location.pathname)
					})
				},
				onError: T => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(T)
				},
				fallback: ({
					error: T,
					eventId: f
				}) => {
					var b;
					if (g) return g;
					const O = s.e.getEventId() || f;
					return (T == null || (b = T.message) === null || b === void 0 ? void 0 : b.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(p, null)) : r().createElement(u.Z, {
						type: "page",
						error: T,
						eventId: O,
						sentryTag: I
					})
				}
			}, E)
		},
		"../react/app/components/FedRAMP/utils.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return r
				},
				PQ: function() {
					return i
				},
				tv: function() {
					return e
				}
			});
			const e = "#5B697C",
				r = "#525F70",
				i = "#fff"
		},
		"../react/app/components/Footer.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return U
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c),
				v = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				o = t("../react/utils/translator.tsx"),
				a = t("../../../../node_modules/moment/moment.js"),
				_ = t.n(a);
			const d = () => {
					const P = _()().format("YYYY"),
						N = F => {
							l().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: F
							})
						};
					return r().createElement(p, {
						marginTop: "auto"
					}, r().createElement(h, null, r().createElement(I, null, r().createElement(E, null, "\xA9 ", P, " Cloudflare, Inc."), r().createElement(E, null, r().createElement(g, null, r().createElement(T, {
						showOnDeskTop: !1
					}, r().createElement(f, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => N("Support")
					}, r().createElement(o.cC, {
						id: "common.support"
					}))), r().createElement(T, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => N("Privacy Policy")
					}, r().createElement(o.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(T, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => N("Terms of Use")
					}, r().createElement(o.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(T, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => N("Cookie Preferences")
					}, r().createElement(o.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(T, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => N("Trademark")
					}, r().createElement(o.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(g, null, r().createElement(T, null, r().createElement(f, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => N("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(o.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				p = (0, s.LM)(({
					theme: P,
					marginTop: N
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: N
				})),
				h = (0, s.LM)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				I = (0, s.LM)(({
					theme: P
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${P.space[3]}px`
					}
				})),
				E = (0, s.LM)(({
					theme: P
				}) => ({
					width: "100%",
					color: P.colors.white,
					fontSize: P.fontSizes[1],
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					tablet: {
						flexDirection: "row"
					},
					desktop: {
						flexDirection: "row"
					}
				})),
				g = (0, s.LM)(({
					theme: P
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: P.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				T = (0, s.LM)(({
					showOnDeskTop: P = !0,
					theme: N
				}) => ({
					color: N.colors.white,
					fontSize: N.fontSizes[1],
					height: "20px",
					display: P ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: N.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: N.space[3],
						"&::before": {
							content: "'\xB7'",
							display: "block",
							position: "relative",
							left: "-8px",
							fontWeight: 800
						}
					},
					"&:nth-child(2)": {
						marginLeft: 0,
						"&::before": {
							display: "none"
						}
					}
				})),
				f = (0, s.SU)(({
					theme: P
				}) => ({
					textDecoration: "none",
					color: P.colors.white,
					"&:hover": {
						color: P.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var b = d,
				O = t("../react/pages/welcome/routes.ts"),
				A = t("../react/utils/cookiePreferences.ts"),
				D = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				w = () => {
					const [P, N] = (0, e.useState)(!1), F = (0, A.wV)(), te = () => {
						N(!0)
					}, oe = () => {
						N(!1)
					}, ie = F && F === "US" ? (0, o.ZP)("footer.cpra_cta.privacy_choices") : (0, o.ZP)("footer.cpra_cta.cookie_preferences"), Y = {
						background: "transparent",
						borderRadius: "none",
						color: P ? (0, m.Yc)() ? "#ee730a" : "#003681" : (0, m.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: P ? "underline" : "none",
						textUnderlineOffset: "4px",
						cursor: "pointer",
						transitionProperty: "color",
						transitionDuration: "150ms",
						transitionTimingFunction: "ease",
						padding: "0px",
						display: "flex",
						alignItems: "center",
						lineHeight: "1.5",
						height: "fit-content",
						fontSize: "14px",
						fontWeight: 400,
						"&:focus": {
							outline: "2px solid #086fff"
						},
						border: "none",
						overflow: "hidden"
					};
					return r().createElement(u.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: Y,
						onMouseEnter: te,
						onMouseLeave: oe
					}, r().createElement(u.Ei, {
						height: 15,
						src: D,
						mr: 2,
						alt: ie
					}), ie)
				};

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(P) {
					for (var N = 1; N < arguments.length; N++) {
						var F = arguments[N];
						for (var te in F) Object.prototype.hasOwnProperty.call(F, te) && (P[te] = F[te])
					}
					return P
				}, S.apply(this, arguments)
			}

			function R(P, N) {
				if (P == null) return {};
				var F = L(P, N),
					te, oe;
				if (Object.getOwnPropertySymbols) {
					var ie = Object.getOwnPropertySymbols(P);
					for (oe = 0; oe < ie.length; oe++) te = ie[oe], !(N.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, te) || (F[te] = P[te]))
				}
				return F
			}

			function L(P, N) {
				if (P == null) return {};
				var F = {},
					te = Object.keys(P),
					oe, ie;
				for (ie = 0; ie < te.length; ie++) oe = te[ie], !(N.indexOf(oe) >= 0) && (F[oe] = P[oe]);
				return F
			}
			const K = (0, s.SU)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), u.A),
				q = (0, s.SU)(({
					theme: P
				}) => ({
					color: P.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, v.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: P.colors.gray[4]
					}
				}), u.A),
				X = P => {
					let {
						onClick: N
					} = P, F = R(P, ["onClick"]);
					return React.createElement(K, S({
						onClick: te => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: F.href
							}), N && N(te)
						}
					}, F))
				},
				J = P => {
					let {
						children: N,
						target: F,
						rel: te
					} = P, oe = R(P, ["children", "target", "rel"]);
					return r().createElement(q, S({
						target: F || "_blank",
						rel: te || "noopener noreferrer"
					}, oe), N)
				},
				$ = (0, s.SU)(({
					theme: P
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, v.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: P.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: P.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), u.Ul),
				W = (0, s.SU)(() => ({
					display: "flex",
					flexDirection: (0, v.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var U = () => {
				const P = [O.d.root.pattern].some(F => (0, i.matchPath)(location.pathname, {
					path: F
				}));
				if ((0, n.PP)()) return r().createElement(b, null);
				if (P) return null;
				const N = new Date().getFullYear();
				return r().createElement(u.$_, {
					height: (0, v.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, r().createElement(W, null, r().createElement($, null, r().createElement(u.Li, null, r().createElement(J, {
					href: "https://support.cloudflare.com"
				}, (0, o.ZP)("common.support"))), r().createElement(u.Li, null, r().createElement(J, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, o.ZP)("footer.system_status")))), r().createElement(u.Li, null, r().createElement(J, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, o.ZP)("footer.careers"))), r().createElement(u.Li, null, r().createElement(J, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, o.ZP)("footer.tos_reduced"))), r().createElement(u.Li, null, r().createElement(J, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, o.ZP)("footer.security_issues"))), r().createElement(u.Li, null, r().createElement(J, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, o.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(w, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", N, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(j, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const s = m => r().createElement(i.Z, m, (0, u.ZP)("error.forbidden"));
			y.Z = s
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return h
				},
				Z: function() {
					return pe
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = t.n(l),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				o = t("../react/common/components/AccessControl/index.js"),
				a = t("../react/common/components/ButtonWithDropdown.tsx"),
				_ = t("../react/common/components/Dropdown/index.tsx"),
				d = t("../react/utils/translator.tsx"),
				p = t("../react/common/hooks/useGate.ts");
			const h = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				I = () => {
					const z = (0, p.Z)("super-add-button-copy-change"),
						x = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: h.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: h.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: h.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: h.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: h.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: h.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (z) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...x];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: h.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description"
								},
								disableOn: "isZoneVersionLocked"
							}, {
								title: {
									id: "onboarding.add_product.new_domain.title"
								},
								trackingEvent: h.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: h.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: h.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: h.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: h.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: h.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				E = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: h.EXISTING_DOMAIN,
					icon: "internet-browser",
					url: "?to=/:account/add-site",
					description: {
						id: "onboarding.add_product.existing_domain.description"
					},
					disableOn: "isZoneVersionLocked"
				}, {
					title: {
						id: "onboarding.add_product.new_domain.title"
					},
					trackingEvent: h.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: h.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: h.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: h.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: h.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: h.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var g = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function T(z) {
				for (var x = 1; x < arguments.length; x++) {
					var ee = arguments[x] != null ? Object(arguments[x]) : {},
						ne = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(ee).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(ee, ce).enumerable
					})), ne.forEach(function(ce) {
						f(z, ce, ee[ce])
					})
				}
				return z
			}

			function f(z, x, ee) {
				return x = b(x), x in z ? Object.defineProperty(z, x, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[x] = ee, z
			}

			function b(z) {
				var x = O(z, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function O(z, x) {
				if (typeof z != "object" || z === null) return z;
				var ee = z[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ne = ee.call(z, x || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(z)
			}

			function A() {
				return A = Object.assign ? Object.assign.bind() : function(z) {
					for (var x = 1; x < arguments.length; x++) {
						var ee = arguments[x];
						for (var ne in ee) Object.prototype.hasOwnProperty.call(ee, ne) && (z[ne] = ee[ne])
					}
					return z
				}, A.apply(this, arguments)
			}

			function D(z, x) {
				if (z == null) return {};
				var ee = M(z, x),
					ne, ce;
				if (Object.getOwnPropertySymbols) {
					var ye = Object.getOwnPropertySymbols(z);
					for (ce = 0; ce < ye.length; ce++) ne = ye[ce], !(x.indexOf(ne) >= 0) && (!Object.prototype.propertyIsEnumerable.call(z, ne) || (ee[ne] = z[ne]))
				}
				return ee
			}

			function M(z, x) {
				if (z == null) return {};
				var ee = {},
					ne = Object.keys(z),
					ce, ye;
				for (ye = 0; ye < ne.length; ye++) ce = ne[ye], !(x.indexOf(ce) >= 0) && (ee[ce] = z[ce]);
				return ee
			}
			const w = z => {
					let {
						title: x,
						trackingEvent: ee,
						icon: ne,
						url: ce,
						description: ye,
						disabled: ae
					} = z, Oe = D(z, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(S, A({
						to: !ae && ce || "#",
						"aria-disabled": ae,
						onClick: () => {
							v().sendEvent(ee, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, Oe), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(i.J, {
						type: ne,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(u.ZC, {
						fontSize: 3
					}, r().createElement(d.cC, x)), r().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(d.cC, ye)))))
				},
				S = (0, n.SU)(({
					theme: z
				}) => {
					const x = {
						cursor: "pointer",
						backgroundColor: (0, m.Yc)() ? z.colors.gray[8] : z.colors.gray[9],
						color: z.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: z.colors.background,
						color: z.colors.gray[2],
						fontSize: z.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': x,
						':focus-within:not([aria-disabled="true"])': T({}, x, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: z.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, g.Link);
			var R = w,
				L = t("../flags.ts"),
				K = t("../react/app/components/FedRAMP/utils.ts");

			function q() {
				return q = Object.assign ? Object.assign.bind() : function(z) {
					for (var x = 1; x < arguments.length; x++) {
						var ee = arguments[x];
						for (var ne in ee) Object.prototype.hasOwnProperty.call(ee, ne) && (z[ne] = ee[ne])
					}
					return z
				}, q.apply(this, arguments)
			}

			function X(z) {
				for (var x = 1; x < arguments.length; x++) {
					var ee = arguments[x] != null ? Object(arguments[x]) : {},
						ne = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(ee).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(ee, ce).enumerable
					})), ne.forEach(function(ce) {
						J(z, ce, ee[ce])
					})
				}
				return z
			}

			function J(z, x, ee) {
				return x = $(x), x in z ? Object.defineProperty(z, x, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[x] = ee, z
			}

			function $(z) {
				var x = W(z, "string");
				return typeof x == "symbol" ? x : String(x)
			}

			function W(z, x) {
				if (typeof z != "object" || z === null) return z;
				var ee = z[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ne = ee.call(z, x || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (x === "string" ? String : Number)(z)
			}

			function H(z, x) {
				if (z == null) return {};
				var ee = U(z, x),
					ne, ce;
				if (Object.getOwnPropertySymbols) {
					var ye = Object.getOwnPropertySymbols(z);
					for (ce = 0; ce < ye.length; ce++) ne = ye[ce], !(x.indexOf(ne) >= 0) && (!Object.prototype.propertyIsEnumerable.call(z, ne) || (ee[ne] = z[ne]))
				}
				return ee
			}

			function U(z, x) {
				if (z == null) return {};
				var ee = {},
					ne = Object.keys(z),
					ce, ye;
				for (ye = 0; ye < ne.length; ye++) ce = ne[ye], !(x.indexOf(ce) >= 0) && (ee[ce] = z[ce]);
				return ee
			}
			const P = "GLOBAL_ADD_DROPDOWN",
				N = (0, n.SU)(({
					theme: z
				}) => ({
					"background-color": z.colors.blue[5]
				}), s.zx),
				F = ({
					disableProducts: z
				}) => {
					const x = I();
					return (0, e.useEffect)(() => (v().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						v().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), r().createElement(a.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, x.map(ee => {
						const ne = ee || {},
							{
								disableOn: ce,
								permissionCheck: ye
							} = ne,
							ae = H(ne, ["disableOn", "permissionCheck"]),
							Oe = ce && z[ce],
							De = X({}, ae, {
								disabled: Oe
							});
						return ye ? r().createElement(o.Z, {
							key: ee.title.id,
							edit: ye
						}, ({
							isEditable: Re
						}) => Re && r().createElement(R, De)) : r().createElement(R, q({
							key: ee.url
						}, De))
					}))
				},
				te = ({
					disableProducts: z,
					topNavType: x
				}) => {
					const ee = () => (0, c.tq)() || x === "icon-only" ? r().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(N, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : r().createElement(s.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(d.cC, {
						id: "common.add"
					}), " ", r().createElement(i.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(oe, {
						role: "group",
						"data-testid": P
					}, r().createElement(_.Lt, {
						trigger: x === "baseline" ? r().createElement(ie, null, r().createElement(i.J, {
							label: "plus",
							type: "plus"
						}), !(0, c.tq)() && r().createElement(r().Fragment, null, r().createElement(d.cC, {
							id: "common.add"
						}), " ", r().createElement(i.J, {
							label: "arrow",
							type: "caret-down"
						}))) : ee(),
						menu: r().createElement(F, {
							disableProducts: z
						})
					}))
				},
				oe = (0, n.SU)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				ie = (0, n.SU)(({
					theme: z
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: (0, L.wz)() ? K.PQ : z.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, L.wz)() ? K.PQ : (0, m.Yc)() ? z.colors.gray[1] : z.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, L.wz)() ? K.$$ : (0, m.Yc)() ? z.colors.gray[8] : z.colors.gray[9]
					}
				}), u.zx);
			var Y = te,
				pe = Y
		},
		"../react/app/components/LoadingSuspense.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../react/utils/translator.tsx"),
				m = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/common/components/EmptyPage.jsx"),
				l = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const v = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(v))
				}, [])
			}

			function o(I) {
				useEventListener(v, () => {
					window.setTimeout(I, 0)
				}, {
					target: window
				})
			}

			function a(...I) {
				const [E, g] = I;
				React.useLayoutEffect(E, g), o(E)
			}

			function _(I) {
				const [E, g] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const T = window.setTimeout(() => g(!0), I);
					return () => window.clearTimeout(T)
				}, []), E
			}
			const d = ({
				loadingTimeout: I = 1e3,
				stillLoadingTimeout: E = 9e3
			}) => {
				const g = _(I),
					T = _(E);
				if (n(), !g && !T) return r().createElement(c.Z, null);
				const f = T ? r().createElement(s.cC, {
					id: "common.still_loading"
				}) : g ? r().createElement(s.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(m.Z, {
					size: 5
				}, r().createElement(u.ZC, {
					mr: 3
				}, r().createElement(i.g, {
					size: "2x"
				})), f)
			};
			var h = ({
				children: I
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(d, null)
			}, I)
		},
		"../react/app/components/Persistence/Persistence.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				Z_: function() {
					return T
				},
				lp: function() {
					return E
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(u),
				m = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/app/components/Persistence/api.ts"),
				v = t("../react/app/components/Persistence/constants.ts"),
				n = t("../react/common/hooks/useActiveState.ts"),
				o = t("../react/pages/security/resources/hooks/useUnificationGate.tsx");

			function a(f) {
				for (var b = 1; b < arguments.length; b++) {
					var O = arguments[b] != null ? Object(arguments[b]) : {},
						A = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(O).filter(function(D) {
						return Object.getOwnPropertyDescriptor(O, D).enumerable
					})), A.forEach(function(D) {
						_(f, D, O[D])
					})
				}
				return f
			}

			function _(f, b, O) {
				return b = d(b), b in f ? Object.defineProperty(f, b, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[b] = O, f
			}

			function d(f) {
				var b = p(f, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function p(f, b) {
				if (typeof f != "object" || f === null) return f;
				var O = f[Symbol.toPrimitive];
				if (O !== void 0) {
					var A = O.call(f, b || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(f)
			}
			const h = {
					darkMode: "off",
					dismissedTasks: [],
					emailVerificationRequest: "",
					favorites: [],
					pinnedItems: {},
					recents: {},
					viewedChanges: [],
					flags: {
						hasEnabledSecurityNavigation: !1,
						hasEnabledSidebarNavGroupings: !0,
						hasEnabledDefaultUnifiedSecurity: void 0
					}
				},
				I = a({}, h, {
					isLoading: !0,
					remainingStarSlots: 10,
					isUpdatingFlags: !1,
					tasksToShowAgain: [],
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						pinRecentRoute: () => null,
						viewChange: () => null,
						toggleSecurityNavigation: () => null,
						toggleSidebarNavGroupings: () => null,
						dismissTask: () => null,
						handleDeleteTasksToShowAgain: ([]) => null,
						handleAddTasksToShowAgain: ([]) => null
					}
				}),
				E = (0, e.createContext)(I),
				g = E.Consumer,
				T = ({
					children: f,
					onDarkModeChangeCb: b
				}) => {
					const [O, A] = (0, e.useState)(h), [D, M] = (0, e.useState)(I.isLoading), [w, S] = (0, e.useState)([]), [R, L] = (0, e.useState)(!1), K = (0, m.$8)(), q = (0, i.p4)(U => (0, c.wH)(U)), {
						setSecurityNav: X
					} = (0, o.Ud)(), [, J] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						K ? (0, l.yl)().then(U => {
							U && (A(U), X(U), b(U.darkMode))
						}).finally(() => M(!1)) : M(!1)
					}, [K]);
					const $ = (U, P) => !!O.favorites.find(N => N.type === "zone" && N.name === U && N.accountId === P),
						W = v.W - O.favorites.length,
						H = U => O.favorites.filter(N => N.type === "zone" && N.accountId === U).length < v.W;
					return r().createElement(E.Provider, {
						value: a({}, O, {
							isLoading: D,
							remainingStarSlots: W,
							isUpdatingFlags: R,
							tasksToShowAgain: w,
							actions: {
								canAccountStarZone: H,
								isZoneStarred: $,
								starZone: async (U, P) => {
									var N;
									const F = !$(U, P),
										te = H(P);
									if (F && !te) {
										console.log("can not star zone - account is at limit");
										return
									}
									const oe = await (0, l.lt)(U, P);
									s().sendEvent("click star zone", {
										isStarring: F,
										totalStarredZones: oe.filter(ie => ie.accountId === P && ie.type === "zone").length,
										totalZones: q == null || (N = q.paginationData) === null || N === void 0 ? void 0 : N.info.total_count
									}), A(a({}, O, {
										favorites: oe
									}))
								},
								toggleSidebarNavGroupings: async U => {
									await (0, l.Sp)({
										hasEnabledSidebarNavGroupings: U
									}), A(a({}, O, {
										flags: a({}, O.flags, {
											hasEnabledSidebarNavGroupings: U
										})
									}))
								},
								toggleSecurityNavigation: async (U, P) => {
									L(!0);
									const N = P ? {
										hasEnabledDefaultUnifiedSecurity: U,
										hasEnabledSecurityNavigation: U
									} : {
										hasEnabledSecurityNavigation: U
									};
									await (0, l.Sp)(N), J(U), A(a({}, O, {
										flags: a({}, O.flags, N)
									})), s().identify(a({}, N)), L(!1)
								},
								setDarkMode: async U => {
									b(U), O.darkMode = U, A(O);
									const P = await (0, l.C8)(U);
									A(P);
									const N = P.darkMode;
									N !== U && b(N)
								},
								logRouteVisited: async U => {
									var P;
									const N = await (0, l.n)(U);
									A((P = N) !== null && P !== void 0 ? P : a({}, O))
								},
								pinRecentRoute: async U => {
									var P, N;
									const F = U.accountId,
										te = (P = O == null || (N = O.pinnedItems) === null || N === void 0 ? void 0 : N[F]) !== null && P !== void 0 ? P : [],
										ie = te.some(Y => Y.url === U.url) ? te.filter(Y => Y.url !== U.url) : [...te, U];
									A(a({}, O, {
										pinnedItems: a({}, O.pinnedItems, {
											[F]: ie
										})
									})), (0, l.LC)(U)
								},
								viewChange: async U => {
									L(!0);
									const P = await (0, l.m6)(U);
									A(a({}, O, {
										viewedChanges: P
									})), L(!1)
								},
								dismissTask: async (U, P) => {
									const N = await (0, l.Mn)(U, P);
									A(a({}, O, {
										dismissedTasks: N
									}))
								},
								handleAddTasksToShowAgain: U => {
									S(P => {
										const N = new Set([...P, ...U]);
										return Array.from(N)
									})
								},
								handleDeleteTasksToShowAgain: U => {
									S(P => P.filter(N => !U.includes(N)))
								}
							}
						})
					}, f)
				}
		},
		"../react/app/components/Persistence/api.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				C8: function() {
					return l
				},
				LC: function() {
					return n
				},
				Mn: function() {
					return _
				},
				Sp: function() {
					return a
				},
				dr: function() {
					return s
				},
				lt: function() {
					return m
				},
				m6: function() {
					return o
				},
				n: function() {
					return v
				},
				yl: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const i = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(i, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, s = async d => {
					try {
						return await (await e.get(`/accounts/${d}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (p) {
						console.error(p)
					}
				}, m = async (d, p) => {
					try {
						return await (await e.post(`${i}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: d,
								accountId: p
							}),
							hideErrorAlert: !0
						})).body
					} catch (h) {
						return console.error(h), []
					}
				}, c = async (d, p) => {
					try {
						return await http.post(`/accounts/${d}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: p
							}),
							hideErrorAlert: !0
						}), !0
					} catch (h) {
						return console.error(h), !1
					}
				}, l = async d => {
					try {
						return await (await e.post(i, {
							body: JSON.stringify({
								darkMode: d
							})
						})).body
					} catch (p) {
						console.error(p)
					}
				}, v = async d => {
					try {
						return await (await e.post(`${i}/recents`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						console.error(p)
					}
				}, n = async d => {
					try {
						return await (await e.post(`${i}/pinned-items`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						throw console.error(p), p
					}
				}, o = async d => {
					try {
						return await (await e.post(`${i}/viewed-changes`, {
							body: JSON.stringify(d),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						throw console.error(p), p
					}
				}, a = async d => {
					try {
						return await (await e.post(i + "/flags", {
							body: JSON.stringify(d)
						})).body
					} catch (p) {
						throw console.error(p), p
					}
				}, _ = async (d, p) => {
					try {
						return await (await e.post(`${i}/dismissed-tasks`, {
							body: JSON.stringify({
								name: d,
								accountId: p
							}),
							hideErrorAlert: !0
						})).body
					} catch (h) {
						throw console.error(h), h
					}
				}
		},
		"../react/app/components/Persistence/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return r
				},
				W: function() {
					return e
				}
			});
			const e = 10,
				r = 6
		},
		"../react/app/components/Persistence/hooks.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(i.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return i.W
				},
				F3: function() {
					return i.F
				},
				lp: function() {
					return e.lp
				},
				Z_: function() {
					return e.Z_
				},
				r7: function() {
					return _
				},
				Tv: function() {
					return f
				},
				yZ: function() {
					return r.y
				}
			});
			var e = t("../react/app/components/Persistence/Persistence.tsx"),
				r = t("../react/app/components/Persistence/hooks.ts"),
				i = t("../react/app/components/Persistence/constants.ts"),
				u = t("webpack/sharing/consume/default/react/react"),
				s = t.n(u),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(b) {
					for (var O = 1; O < arguments.length; O++) {
						var A = arguments[O];
						for (var D in A) Object.prototype.hasOwnProperty.call(A, D) && (b[D] = A[D])
					}
					return b
				}, l.apply(this, arguments)
			}

			function v(b, O) {
				if (b == null) return {};
				var A = n(b, O),
					D, M;
				if (Object.getOwnPropertySymbols) {
					var w = Object.getOwnPropertySymbols(b);
					for (M = 0; M < w.length; M++) D = w[M], !(O.indexOf(D) >= 0) && (!Object.prototype.propertyIsEnumerable.call(b, D) || (A[D] = b[D]))
				}
				return A
			}

			function n(b, O) {
				if (b == null) return {};
				var A = {},
					D = Object.keys(b),
					M, w;
				for (w = 0; w < D.length; w++) M = D[w], !(O.indexOf(M) >= 0) && (A[M] = b[M]);
				return A
			}
			const o = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var _ = b => {
					let {
						isStarred: O,
						size: A = 16
					} = b, D = v(b, ["isStarred", "size"]);
					const M = o[(0, m.Yc)() ? "dark" : "light"];
					return s().createElement(c.J, l({
						type: O ? "star" : "star-outline",
						color: O ? M.gold : M.gray,
						size: A
					}, D))
				},
				d = t("../node_modules/@cloudflare/elements/es/index.js");

			function p(b) {
				for (var O = 1; O < arguments.length; O++) {
					var A = arguments[O] != null ? Object(arguments[O]) : {},
						D = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(A).filter(function(M) {
						return Object.getOwnPropertyDescriptor(A, M).enumerable
					})), D.forEach(function(M) {
						h(b, M, A[M])
					})
				}
				return b
			}

			function h(b, O, A) {
				return O = I(O), O in b ? Object.defineProperty(b, O, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[O] = A, b
			}

			function I(b) {
				var O = E(b, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function E(b, O) {
				if (typeof b != "object" || b === null) return b;
				var A = b[Symbol.toPrimitive];
				if (A !== void 0) {
					var D = A.call(b, O || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(b)
			}
			const g = {
				light: {
					default: {
						border: "gray.8",
						text: "gray.2",
						bg: "white",
						bgDisabled: "grey.6",
						bgHover: "gray.9"
					},
					active: {
						border: "blue.5",
						text: "blue.5",
						bg: "blue.9",
						bgDisabled: "grey.6",
						bgHover: "button.plain.hover.background"
					}
				},
				dark: {
					default: {
						border: "gray.8",
						text: "gray.1",
						bg: "gray.7",
						bgDisabled: "grey.6",
						bgHover: "gray.6"
					},
					active: {
						border: "blue.5",
						text: "gray.1",
						bg: "blue.9",
						bgDisabled: "grey.6",
						bgHover: "button.plain.hover.background"
					}
				}
			};
			var f = (0, u.forwardRef)(({
				featurePreview: b = !1,
				isStarred: O,
				onClickFn: A,
				isDisabled: D,
				testId: M,
				buttonText: w,
				size: S = "large",
				variant: R = "pill"
			}, L) => {
				const [K, q] = (0, u.useState)(!1), X = g[(0, m.Yc)() ? "dark" : "light"][O && !b ? "active" : "default"], J = p({}, S === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, S === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, S === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), $ = {
					pill: "50vh",
					button: 4
				};
				return s().createElement(d.zx, {
					onMouseEnter: () => q(!0),
					onMouseLeave: () => q(!1),
					innerRef: L,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: J.paddingRight,
					gap: 1,
					pl: J.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: $[R],
					border: "1px solid",
					cursor: b || D ? "default" : "pointer",
					backgroundColor: K ? X.bgHover : X.bg,
					color: X.text,
					borderColor: X.border,
					onClick: A,
					opacity: D ? .5 : 1,
					disabled: D,
					fontSize: J.fontSize,
					height: J.height,
					"data-testid": M
				}, s().createElement(_, {
					isStarred: b ? !1 : O,
					size: J.starIconSize
				}), w)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$n: function() {
					return p
				},
				IU: function() {
					return I
				},
				Id: function() {
					return R
				},
				Wq: function() {
					return D
				},
				dL: function() {
					return E
				},
				fO: function() {
					return A
				},
				gw: function() {
					return w
				},
				hv: function() {
					return h
				},
				iY: function() {
					return _
				},
				jq: function() {
					return S
				},
				o_: function() {
					return f
				},
				us: function() {
					return O
				},
				wB: function() {
					return d
				},
				zJ: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				r = t("../react/common/components/AccessCheck/index.ts"),
				i = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/utils/zoneLevelAccess.ts"),
				c = t("../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx"),
				l = t("../react/pages/home/domain-registration/selectors.ts"),
				v = t("../react/pages/images/selectors.ts"),
				n = t("../react/pages/r2/selectors.ts"),
				o = t("../react/pages/stream/selectors.ts");
			const a = L => !!(0, m.b)(L),
				_ = L => a(L) ? (0, r.hT)(L) : !0,
				d = (L, K, q, X = "read") => {
					const J = (0, s.nA)(L);
					return a(L) ? (0, r.WL)(L, (0, r.W9)(q, r.ZZ[X]), (0, r.j)(J == null ? void 0 : J.id)) : (0, i.Yj)(L)(K)[X]
				},
				p = (L, K, q, X = "read") => {
					const J = (0, s.nA)(L),
						$ = r.zs.includes(q);
					return a(L) ? (0, r.WL)(L, $ ? q : (0, r.my)(q, r.ZZ[X === "edit" ? "update" : X]), (0, r.j)(J == null ? void 0 : J.id)) : (0, i.Yj)(L)(K)[X === "update" ? "edit" : X]
				},
				h = L => !!(0, o._Q)(L),
				I = L => (0, v.pT)(L),
				E = L => (0, v.pT)(L) && (0, v.GH)(L),
				g = L => sourcingKitEnabledSelector(L),
				T = L => !!r2EnabledSelector(L),
				f = L => (0, n.Mv)(L),
				b = L => (0, u.$f)(L, "rulesets.magic_transit_allowed"),
				O = L => (0, u.$f)(L, "flowtrackd.magic_custom_config_allowed"),
				A = L => (0, u.$f)(L, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				D = L => (0, i.Le)(L, "ddos_protection", "l4_rulesets"),
				M = L => hasAccountEntitlements(L, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				w = L => (0, l.HO)(L),
				S = L => !(0, u.yD)(L) && !!p(L, "ssl", "ssl.cert"),
				R = L => {
					const K = (0, s.nA)(L),
						q = (0, i.D0)(L),
						X = !!(0, e.z1)("zone-level-rum")(L);
					return !!q && (0, r.WL)(L, (0, r.jX)("rum.analytics", r.ZZ.read), (0, r.L8)(q.id)) && (K == null ? void 0 : K.status) === "active" && X && !(0, c.s)(L)
				}
		},
		"../react/app/components/SomethingWrong.jsx": function(j, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(i),
				s = t("../../../../node_modules/prop-types/index.js"),
				m = t.n(s),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t.n(c),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(v),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				_ = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				d = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				h = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				I = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = t.n(I),
				g = t("../react/common/actions/membershipActions.ts"),
				T = t("../react/utils/url.ts"),
				f = t("../react/app/components/Footer.tsx");

			function b($) {
				for (var W = 1; W < arguments.length; W++) {
					var H = arguments[W] != null ? Object(arguments[W]) : {},
						U = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(H).filter(function(P) {
						return Object.getOwnPropertyDescriptor(H, P).enumerable
					})), U.forEach(function(P) {
						O($, P, H[P])
					})
				}
				return $
			}

			function O($, W, H) {
				return W = A(W), W in $ ? Object.defineProperty($, W, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[W] = H, $
			}

			function A($) {
				var W = D($, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function D($, W) {
				if (typeof $ != "object" || $ === null) return $;
				var H = $[Symbol.toPrimitive];
				if (H !== void 0) {
					var U = H.call($, W || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)($)
			}
			const M = (0, o.LM)(({
					type: $
				}) => ({
					height: $ !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				w = (0, o.LM)(({
					theme: $,
					margin: W,
					size: H = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: $.colors.gray[3],
					height: W ? "auto" : "100%",
					padding: W ? 0 : $.space[H > 1 ? H - 2 : 0],
					margin: W,
					justifyContent: "center",
					alignItems: "center"
				})),
				S = (0, o.LM)(() => ({
					textAlign: "left"
				})),
				R = (0, o.LM)(() => ({
					textAlign: "right"
				})),
				L = (0, o.LM)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[6]
				})),
				K = (0, o.LM)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[4]
				})),
				q = (0, o.LM)(({
					theme: $
				}) => ({
					fontSize: $.fontSizes[3]
				})),
				X = (0, o.LM)(({
					theme: $
				}) => ({
					width: "100%",
					height: 125,
					marginTop: $.space[4],
					padding: $.space[2]
				}), "textarea");
			class J extends r().Component {
				constructor(...W) {
					super(...W);
					O(this, "state", {
						value: "",
						submitted: !1
					}), O(this, "handleTextareaChange", H => {
						this.setState({
							value: H.target.value
						})
					}), O(this, "sendErrToSentry10", async () => {
						try {
							var H, U, P, N;
							const F = ((H = window) === null || H === void 0 || (U = H.bootstrap) === null || U === void 0 || (P = U.data) === null || P === void 0 || (N = P.user) === null || N === void 0 ? void 0 : N.id) || "Unknown",
								te = this.props.eventId || _.eW(),
								oe = {
									name: F,
									email: `${F}@userid.com`,
									comments: this.state.value,
									eventId: te,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: b({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(oe)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (F) {
							console.error(F)
						}
					}), O(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), O(this, "renderContent", H => r().createElement(v.I18n, null, U => r().createElement(M, {
						type: H
					}, r().createElement(w, null, r().createElement(S, null, r().createElement(L, null, U.t("error.internal_issues")), r().createElement(K, null, U.t("error.help_us")), r().createElement(X, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: P => this.handleTextareaChange(P),
						disabled: this.state.submitted,
						placeholder: U.t("error.give_feedback")
					}), r().createElement(R, null, !this.state.submitted && r().createElement(a.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, U.t("common.submit")), this.state.submitted && r().createElement(q, null, U.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: W,
						sentryTag: H,
						membershipsList: U
					} = this.props;
					console.error(`SomethingWrong: ${W}`);
					let P = "";
					const N = (0, T.e1)();
					if (N) {
						var F;
						const oe = await U({
								parameters: {
									status: "accepted"
								}
							}),
							ie = oe == null || (F = oe.find(Y => Y.id === N)) === null || F === void 0 ? void 0 : F.roles;
						ie && ie.length && (P = ie.join(", "))
					}
					const te = `ErrorBoundary - ${W}`;
					d.Tb(te, {
						tags: {
							errorBoundary: H,
							normalizedPath: (0, T.Fl)(window.location.pathname),
							roles: P.length ? P : void 0
						}
					}), E().sendEvent("something wrong", {
						error: W,
						roles: P.length ? P : void 0
					})
				}
				render() {
					const {
						type: W
					} = this.props;
					return W === "fullscreen" ? r().createElement("div", null, r().createElement(p.h4, null, r().createElement(i.Link, {
						to: "/"
					}, r().createElement(h.TR, null))), this.renderContent(W), r().createElement(f.Z, null)) : this.renderContent(W)
				}
			}
			J.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string,
				sentryTag: m().string,
				membershipsList: m().func
			}, y.Z = (0, c.connect)(() => ({}), {
				membershipsList: g.YT
			})(J)
		},
		"../react/app/providers/storeContainer.js": function(j, y, t) {
			"use strict";
			t.d(y, {
				bh: function() {
					return R
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				i = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				s = t("../../../../node_modules/redux-persist/es/index.js"),
				m = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				l = t("../react/app/redux/normalizer.js"),
				v = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				o = t("../react/app/reducerRegistry.js"),
				a = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				_ = t("../react/common/sagas/index.js"),
				d = t("../react/app/redux/processActionMiddleware.js"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				h = t("../../../../node_modules/is-promise/index.js"),
				I = t.n(h);

			function E(L) {
				for (var K = 1; K < arguments.length; K++) {
					var q = arguments[K] != null ? Object(arguments[K]) : {},
						X = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(q).filter(function(J) {
						return Object.getOwnPropertyDescriptor(q, J).enumerable
					})), X.forEach(function(J) {
						g(L, J, q[J])
					})
				}
				return L
			}

			function g(L, K, q) {
				return K = T(K), K in L ? Object.defineProperty(L, K, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[K] = q, L
			}

			function T(L) {
				var K = f(L, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function f(L, K) {
				if (typeof L != "object" || L === null) return L;
				var q = L[Symbol.toPrimitive];
				if (q !== void 0) {
					var X = q.call(L, K || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(L)
			}
			const b = {
					key: "cf-redux-store",
					storage: m.Z,
					whitelist: ["accountAccess", "invite"]
				},
				O = (0, a.ZP)(),
				D = [({
					dispatch: L
				}) => K => q => I()(q) ? q.then(X => L(X)) : K(q), O, u.Z, d.Z, l.qR],
				M = L => (0, s.Wq)(b, E({}, c.Z, L));

			function w() {
				const L = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					q = e.compose((0, e.applyMiddleware)(...D), v.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					X = {},
					J = (0, e.createStore)(M(o.Z.getReducers()), X, q);
				O.run(_.Z), (0, s.p5)(J);
				const W = (t.g.bootstrap || {}).data || {};
				return J.dispatch((0, p.mW)("user", W.user)), J
			}
			let S;
			o.Z.setChangeListener(L => {
				var K;
				S && ((K = S) === null || K === void 0 ? void 0 : K.replaceReducer) && (S.replaceReducer(M(L)), (0, s.p5)(S))
			});

			function R() {
				return S || (S = w()), S
			}
		},
		"../react/app/redux/index.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				TZ: function() {
					return i
				},
				UM: function() {
					return s
				},
				ZS: function() {
					return u
				},
				p4: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const i = () => (0, e.useStore)(),
				u = () => i().getState(),
				s = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(j, y, t) {
			"use strict";
			t.d(y, {
				$J: function() {
					return a
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return v
				},
				ZP: function() {
					return _
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				i = t.n(r);

			function u(d) {
				for (var p = 1; p < arguments.length; p++) {
					var h = arguments[p] != null ? Object(arguments[p]) : {},
						I = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(h).filter(function(E) {
						return Object.getOwnPropertyDescriptor(h, E).enumerable
					})), I.forEach(function(E) {
						s(d, E, h[E])
					})
				}
				return d
			}

			function s(d, p, h) {
				return p = m(p), p in d ? Object.defineProperty(d, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = h, d
			}

			function m(d) {
				var p = c(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var I = h.call(d, p || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const l = u({}, r),
				v = (d, p, h, I = {}) => {
					const E = d === "delete" ? "del" : d.toLowerCase();
					return h && E !== "del" && (I.body = h), l[E](p, I)
				},
				n = (d, p) => (d.meta.params = p, d),
				o = (d, p, h, I, {
					body: E = {}
				}) => {
					const {
						result: g,
						messages: T,
						result_info: f
					} = E, b = Object.values(p);
					if (d.meta.method === "delete") {
						const O = b[b.length - 1];
						d.meta.id = typeof O == "object" ? O.id : O
					}
					return d.payload = g, T && (d.meta.messages = T), b.length && (d.meta.params = p), f && (d.meta.paginationData = {
						info: f,
						actionParameters: b,
						options: h[0],
						insertionOffset: 0
					}), d
				},
				a = (d, p, h, I, E) => (d.payload = E && E.body && E.body.errors, d.meta.messages = E && E.body && E.body.messages, d.meta.params = p, d.apiError = E, d);

			function _(d, p, h, I) {
				const E = (0, e.RM)(d, p, h, I).apiFetch(v).on("start", n).on("success", o).on("error", a),
					g = E.mock;
				return E.mock = T => (g((...f) => {
					const b = T(...f);
					return b && typeof b == "object" && "result" in b ? b : {
						result: b
					}
				}), E), E
			}
		},
		"../react/app/redux/normalizer.js": function(j, y, t) {
			"use strict";
			t.d(y, {
				P1: function() {
					return v
				},
				jQ: function() {
					return c
				},
				qR: function() {
					return n
				},
				uc: function() {
					return l
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				r = t("../react/pages/workers/entityTypes.ts"),
				i = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				s = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				m = t.n(s);
			const c = s.static.from([{
					entityType: "accessOrganization"
				}, {
					entityType: "access-temp-data"
				}, {
					entityType: "accessPolicy"
				}, {
					entityType: "accessGroup"
				}, {
					entityType: "accessPolicies",
					to: "accessPolicy"
				}, {
					entityType: "accessGroups",
					to: "accessGroup"
				}, {
					entityType: "accessAppLauncher"
				}, {
					entityType: "accounts"
				}, {
					entityType: e.w8.alert
				}, {
					entityType: e.w8.alerts,
					to: e.w8.alert
				}, {
					entityType: e.w8.alertsHistory
				}, {
					entityType: e.w8.integrations
				}, {
					entityType: e.w8.pagerDuty
				}, {
					entityType: e.w8.pagerDutyRequest
				}, {
					entityType: e.w8.statuspageComponents
				}, {
					entityType: e.w8.webhook
				}, {
					entityType: e.w8.webhooks
				}, {
					entityType: e.w8.availableAlerts
				}, {
					entityType: e.w8.availableAlertsForProduct
				}, {
					entityType: e.w8.deliveryMechanisms
				}, {
					entityType: "accountsDetailed"
				}, {
					entityType: "accountSubscriptions",
					to: "accountSubscription"
				}, {
					entityType: "zoneSubscriptions",
					to: "zoneSubscription"
				}, {
					entityType: "accountSubscription"
				}, {
					entityType: "billingFreeTrial"
				}, {
					entityType: "accountSubscriptionCancelDowngrade"
				}, {
					entityType: "accountSubscriptionCancellationReason"
				}, {
					entityType: "accountLegoContract"
				}, {
					entityType: "accountMember"
				}, {
					entityType: "accountMembers",
					to: "accountMember"
				}, {
					entityType: "accountSingle"
				}, {
					entityType: "accountRoles"
				}, {
					entityType: "accountHealthChecks"
				}, {
					entityType: "advancedTCPProtection"
				}, {
					entityType: "advancedTCPAllowlistItem"
				}, {
					entityType: "advancedTCPAllowlist",
					to: "advancedTCPAllowlistItem"
				}, {
					entityType: "amp"
				}, {
					entityType: "apiShields",
					to: "apiShield"
				}, {
					entityType: "apiShield"
				}, {
					entityType: "apiToken"
				}, {
					entityType: "apiTokens",
					to: "apiToken"
				}, {
					entityType: "apiTokenZones",
					to: "zone"
				}, {
					entityType: "apiTokenFormZones",
					to: "zone"
				}, {
					entityType: "apiTokenSearchZones",
					to: "zone"
				}, {
					entityType: "apiTokenSearchAccounts",
					to: "accountsDetailed"
				}, {
					entityType: "billing.usageGraphQL"
				}, {
					entityType: "billingAccount"
				}, {
					entityType: "billingPlans"
				}, {
					entityType: "billingProfile"
				}, {
					entityType: "billingTransactions"
				}, {
					entityType: "billingOutstandingTransactions"
				}, {
					entityType: "billingBadDebt"
				}, {
					entityType: "billingUnpaidInvoices"
				}, {
					entityType: "billingNextBilling"
				}, {
					entityType: "billableUsage"
				}, {
					entityType: "billingContractSelfServeEligibility"
				}, {
					entityType: "certificate"
				}, {
					entityType: "certificates",
					to: "certificate"
				}, {
					entityType: "colosStats"
				}, {
					entityType: "certificatePack"
				}, {
					entityType: "certificatePacks",
					to: "certificatePack"
				}, {
					entityType: "certificateOrder"
				}, {
					entityType: "certificateValidationStatus"
				}, {
					entityType: "clientCertificate"
				}, {
					entityType: "clientCertificates",
					to: "clientCertificate"
				}, {
					entityType: "customHostname"
				}, {
					entityType: "customHostnames",
					to: "customHostname"
				}, {
					entityType: "customCSR"
				}, {
					entityType: "customCSRs",
					to: "customCSR"
				}, {
					entityType: "dnsFirewallCluster"
				}, {
					entityType: "dnsFirewallClusters",
					to: "dnsFirewallCluster"
				}, {
					entityType: "dnsRecord"
				}, {
					entityType: "dnsRecords",
					to: "dnsRecord"
				}, {
					entityType: "dnsRecordsBulkAction",
					to: "dnsRecords"
				}, {
					entityType: "dnsRecordsImport"
				}, {
					entityType: "dnsAcl"
				}, {
					entityType: "dnsAcls",
					to: "dnsAcl"
				}, {
					entityType: "dnsTsig"
				}, {
					entityType: "dnsTsigs",
					to: "dnsTsig"
				}, {
					entityType: "dnsOutgoingZoneTransfers"
				}, {
					entityType: "dnsMaster"
				}, {
					entityType: "dnsMasters",
					to: "dnsMaster"
				}, {
					entityType: "dpa"
				}, {
					entityType: "filter"
				}, {
					entityType: "filteredMemberships"
				}, {
					entityType: "firewallRule",
					nestedProps: {
						filter: "filter"
					}
				}, {
					entityType: "firewallRules",
					to: "firewallRule"
				}, {
					entityType: "greTunnel"
				}, {
					entityType: "greTunnels",
					to: "greTunnel"
				}, {
					entityType: "interconnect"
				}, {
					entityType: "interconnects",
					to: "interconnect"
				}, {
					entityType: "healthCheck"
				}, {
					entityType: "healthChecks",
					to: "healthCheck"
				}, {
					entityType: "magicConnector"
				}, {
					entityType: "magicConnectors",
					to: "magicConnector"
				}, {
					entityType: "warpTunnels"
				}, {
					entityType: "hostnameRegions"
				}, {
					entityType: "http2ToOrigin"
				}, {
					entityType: "http2ToOriginMultiplexing"
				}, {
					entityType: "httpStats"
				}, {
					entityType: "httpStatsOverview"
				}, {
					entityType: "identityProvider"
				}, {
					entityType: "identityProviders",
					to: "identityProvider"
				}, {
					entityType: "ipAccessRule"
				}, {
					entityType: "ipAccessRules",
					to: "ipAccessRule"
				}, {
					entityType: "ipPrefix"
				}, {
					entityType: "ipPrefixes",
					to: "ipPrefix"
				}, {
					entityType: "ipsecTunnel"
				}, {
					entityType: "ipsecTunnels",
					to: "ipsecTunnel"
				}, {
					entityType: "pcapBucket"
				}, {
					entityType: "pcapBucketValidation",
					to: "pcapBucket"
				}, {
					entityType: "pcapBuckets",
					to: "pcapBucket"
				}, {
					entityType: "pcapCapture"
				}, {
					entityType: "pcapCaptures",
					to: "pcapCapture"
				}, {
					entityType: "networkMonitoringConfiguration"
				}, {
					entityType: "networkMonitoringRule"
				}, {
					entityType: "networkMonitoringRules",
					to: "networkMonitoringRule"
				}, {
					entityType: "loadBalancer",
					nestedProps: {
						default_pools: "pool",
						fallback_pool: "pool",
						region_pools: "pool",
						country_pools: "pool",
						pop_pools: "pool"
					}
				}, {
					entityType: "privateLoadBalancer",
					nestedProps: {
						default_pools: "pool",
						fallback_pool: "pool",
						region_pools: "pool",
						country_pools: "pool",
						pop_pools: "pool"
					}
				}, {
					entityType: "languagePreference"
				}, {
					entityType: "loadBalancers",
					to: "loadBalancer"
				}, {
					entityType: "privateLoadBalancers",
					to: "privateLoadBalancer"
				}, {
					entityType: "accountLogpushJob"
				}, {
					entityType: "accountLogpushJobs",
					to: "accountLogpushJob"
				}, {
					entityType: "logpushJob"
				}, {
					entityType: "logpushJobs",
					to: "logpushJob"
				}, {
					entityType: "logpushDestinationExists"
				}, {
					entityType: "logpushDestinationValidation"
				}, {
					entityType: "logpushSentOwnershipToken"
				}, {
					entityType: "logpushOwnershipValidation"
				}, {
					entityType: "logpushFieldsAll"
				}, {
					entityType: "logpushFieldsDefault"
				}, {
					entityType: "staticRoute"
				}, {
					entityType: "staticRoutes",
					to: "staticRoute"
				}, {
					entityType: "membership",
					to: "memberships"
				}, {
					entityType: "memberships",
					nestedProps: {
						account: "accounts"
					}
				}, {
					entityType: "monitor"
				}, {
					entityType: "monitors",
					to: "monitor"
				}, {
					entityType: "mTlsHosts"
				}, {
					entityType: "nel"
				}, {
					entityType: "normalizationSetting"
				}, {
					entityType: "schemaValidationV2"
				}, {
					entityType: "paymentMethod"
				}, {
					entityType: "paymentMethods",
					to: "paymentMethod"
				}, {
					entityType: "pool",
					nestedProps: {
						monitor: "monitor"
					}
				}, {
					entityType: "pools",
					to: "pool"
				}, {
					entityType: "prefixDelegation"
				}, {
					entityType: "prefixDelegations",
					to: "prefixDelegation"
				}, {
					entityType: "prefixServices",
					idProp: "prefix_id"
				}, {
					entityType: "onboardingGuide"
				}, {
					entityType: "organization"
				}, {
					entityType: "originCertificate"
				}, {
					entityType: "originCertificates",
					to: "originCertificate"
				}, {
					entityType: "pageRule"
				}, {
					entityType: "pageRules",
					to: "pageRule"
				}, {
					entityType: "purgeCache"
				}, {
					entityType: "sanitizeRuleset"
				}, {
					entityType: "sanitizeRulesetOverrides"
				}, {
					entityType: "sanitizeRulesets",
					to: "sanitizeRuleset"
				}, {
					entityType: "serviceToken"
				}, {
					entityType: "serviceTokens",
					to: "serviceToken"
				}, {
					entityType: "shortLivedCertificate"
				}, {
					entityType: "shortLivedCertificates",
					to: "shortLivedCertificate"
				}, {
					entityType: "shareStats"
				}, {
					entityType: "spectrumApp"
				}, {
					entityType: "spectrumApps",
					to: "spectrumApp"
				}, {
					entityType: "sslRecommenderPreference"
				}, {
					entityType: "sslRecommendation"
				}, {
					entityType: "totalTLSSettings"
				}, {
					entityType: "certificatePacksByHosts"
				}, {
					entityType: "customHostnamesByHosts"
				}, {
					entityType: "synProtectionRule"
				}, {
					entityType: "synProtectionRules",
					to: "synProtectionRule"
				}, {
					entityType: "synProtectionFilter"
				}, {
					entityType: "synProtectionFilters",
					to: "synProtectionFilter"
				}, {
					entityType: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpFlowProtectionRules",
					to: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpProtectionFilter"
				}, {
					entityType: "tcpProtectionFilters",
					to: "tcpProtectionFilter"
				}, {
					entityType: "dnsProtectionRule"
				}, {
					entityType: "dnsProtectionRules",
					to: "dnsProtectionRule"
				}, {
					entityType: "user",
					nestedProps: {
						organizations: "userOrganization"
					}
				}, {
					entityType: "userOrganization"
				}, {
					entityType: "userAgentRule"
				}, {
					entityType: "userAgentRules",
					to: "userAgentRule"
				}, {
					entityType: "userSessions"
				}, {
					entityType: "regionalHostname",
					idProp: "hostname"
				}, {
					entityType: "regionalHostnames",
					to: "regionalHostname"
				}, {
					entityType: "revokeSession"
				}, {
					entityType: "securityKey"
				}, {
					entityType: "securityKeys"
				}, {
					entityType: "rateLimit"
				}, {
					entityType: "rateLimits",
					to: "rateLimit"
				}, {
					entityType: "auditLogs"
				}, {
					entityType: "userCommPreferences"
				}, {
					entityType: "userDetails"
				}, {
					entityType: "userGroup"
				}, {
					entityType: "userGroupMembers"
				}, {
					entityType: "workerRoutes"
				}, {
					entityType: "zone"
				}, {
					entityType: "singleZone",
					to: "zone"
				}, {
					entityType: "zoneSubscription"
				}, {
					entityType: "recheckNameservers"
				}, {
					entityType: "abuseUrls"
				}, {
					entityType: "zoneHold"
				}, {
					entityType: "abuseReview"
				}, {
					entityType: "zones",
					to: "zone"
				}, {
					entityType: "zonesRoot",
					to: "zone"
				}, {
					entityType: "zonesAccount",
					to: "zone"
				}, {
					entityType: "zoneDnsSettings"
				}, {
					entityType: "zoneMarketingCampaigns"
				}, {
					entityType: "zoneRuleset"
				}, {
					entityType: "zoneRulesets"
				}, {
					entityType: "zoneRulesetsEnabled"
				}, {
					entityType: "zoneRulesetDLPOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneRulesetOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneMasters"
				}, {
					entityType: "zoneUiConfig"
				}, {
					entityType: "zoneLockdown"
				}, {
					entityType: "zoneLockdowns",
					to: "zoneLockdown"
				}, {
					entityType: "argoGeoAnalytics"
				}, {
					entityType: "argoGlobalAnalytics"
				}, {
					entityType: "dnsAnalyticsTopNxDomainRecords"
				}, {
					entityType: "dnsAnalyticsTopRecords"
				}, {
					entityType: "dnsAnalyticsTSByRecordType"
				}, {
					entityType: "dnsAnalyticsTSByResponseCode"
				}, {
					entityType: "geographyDnsAnalyticsNoErrorPerColo"
				}, {
					entityType: "geographyDnsAnalyticsNxDomainPerColo"
				}, {
					entityType: "geographyDnsAnalyticsPerColo"
				}, {
					entityType: "geographyHttpAnalytics"
				}, {
					entityType: "h2Prioritization"
				}, {
					entityType: "speedBrain"
				}, {
					entityType: "firstPartyFonts"
				}, {
					entityType: "imageResizing"
				}, {
					entityType: "rateLimitingAnalytics"
				}, {
					entityType: "rulesets"
				}, {
					entityType: "rum"
				}, {
					entityType: "rumRule"
				}, {
					entityType: "rumRuleset"
				}, {
					entityType: "rumSiteTag"
				}, {
					entityType: "rumRedirectToOnboarding"
				}, {
					entityType: "rumSiteInfo"
				}, {
					entityType: "rumSiteInfoList"
				}, {
					entityType: "rumSiteInfoTagList"
				}, {
					entityType: "rumSiteInfoZoneList"
				}, {
					entityType: "rumFeature"
				}, {
					entityType: "performanceHttpAnalytics"
				}, {
					entityType: "csamScanner"
				}, {
					entityType: "csamScannerThirdParty"
				}, {
					entityType: "alwaysOnline"
				}, {
					entityType: "coveoCategoryResults"
				}, {
					entityType: "phoneSupportTwoFactor"
				}, {
					entityType: "supportOpenTickets"
				}, {
					entityType: "knownIssueTickets"
				}, {
					entityType: "ticket"
				}, {
					entityType: "phoneSupportOTP"
				}, {
					entityType: "helperbotDiagnostics"
				}, {
					entityType: "chinaNetwork"
				}, {
					entityType: "automaticPlatformOptimization"
				}, {
					entityType: "pageShieldScript"
				}, {
					entityType: "pageShieldScripts",
					to: "pageShieldScript"
				}, {
					entityType: "pageShieldConnection"
				}, {
					entityType: "pageShieldConnections",
					to: "pageShieldConnection"
				}, {
					entityType: "pageShieldPolicy"
				}, {
					entityType: "pageShieldPolicies",
					to: "pageShieldPolicy"
				}, {
					entityType: "securityHttpAnalytics"
				}, {
					entityType: "speedTesting"
				}, {
					entityType: "webhook"
				}, {
					entityType: "webhooks",
					to: "webhook"
				}, {
					entityType: r.D.route
				}, {
					entityType: r.D.routes,
					to: r.D.route
				}, {
					entityType: "domainGroup"
				}, {
					entityType: "domainGroups",
					to: "domainGroup"
				}, {
					entityType: "domainGroupsAllDomain"
				}, {
					entityType: "domainGroupManagerZones",
					to: "zone"
				}, {
					entityType: "domainGroupFormZones",
					to: "zone"
				}, {
					entityType: "granularResources"
				}, {
					entityType: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplicationVersions",
					to: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplication",
					nestedProps: {
						versions: "HTTPApplicationVersions"
					}
				}, {
					entityType: "HTTPApplications",
					to: "HTTPApplication"
				}, {
					entityType: "HTTPApplicationConvertedId"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "HTTPApplicationsRuleset"
				}, {
					entityType: "HTTPApplicationsRule"
				}, {
					entityType: "inviteMembersSearchZones",
					to: "zone"
				}, {
					entityType: "inviteMembersZones",
					to: "zone"
				}, {
					entityType: "waitingRoom"
				}, {
					entityType: "waitingRooms",
					to: "waitingRoom"
				}, {
					entityType: "waitingRoomEvent"
				}, {
					entityType: "waitingRoomEvents",
					to: "waitingRoomEvent"
				}, {
					entityType: "zoneVersion"
				}, {
					entityType: "zoneVersionCompare"
				}, {
					entityType: "zoneVersions",
					to: "zoneVersion"
				}, {
					entityType: "zoneApplication",
					nestedProps: {
						versions: "zoneVersions"
					}
				}, {
					entityType: "zoneApplications",
					to: "zoneApplication"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "environments"
				}, {
					entityType: "organizations"
				}, {
					entityType: "tenants"
				}, {
					entityType: "accountTypes"
				}, {
					entityType: "permissionGroups"
				}, {
					entityType: "zoneLevelAccessPolicy"
				}, {
					entityType: "zoneLevelAccessPolicies",
					to: "zoneLevelAccessPolicy"
				}, {
					entityType: "oAuthConsentApp"
				}, {
					entityType: "oAuthConsentApps",
					to: "oAuthConsentApp"
				}, {
					entityType: "wafPackages"
				}, {
					entityType: "wafPackageGroup"
				}, {
					entityType: "wafPackageGroups",
					to: "wafPackageGroup"
				}, {
					entityType: "wafRule"
				}, {
					entityType: "wafRules",
					to: "wafRule"
				}, {
					entityType: "web3Hostname"
				}, {
					entityType: "web3Hostnames",
					to: "web3Hostname"
				}, {
					entityType: "web3Blocklist"
				}, {
					entityType: "web3Blocklists",
					to: "web3Blocklist"
				}, {
					entityType: "zaraz"
				}, {
					entityType: i.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: i.BB.rule,
					idProp: "tag"
				}, {
					entityType: i.BB.rules,
					to: i.BB.rule
				}, {
					entityType: i.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: i.BB.dstAddresses,
					to: i.BB.dstAddress
				}, {
					entityType: i.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: i.BB.dnsRecords,
					to: i.BB.dnsRecord
				}, {
					entityType: i.BB.zone,
					idProp: "tag"
				}]),
				l = o => o.entities,
				v = (...o) => (0, u.P1)(c, l, ...o),
				n = (0, u.QB)(c)
		},
		"../react/app/redux/utils.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return i
				},
				_: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const r = u => (s, m, c) => (0, e.SC)(s, m, c, {
					hideErrorAlert: !0
				}).catch(u),
				i = u => s => {
					if (s.status === u) return s;
					throw s
				}
		},
		"../react/common/actionTypes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return m
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return c
				},
				Li: function() {
					return v
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return i
				},
				Yc: function() {
					return o
				},
				gM: function() {
					return u
				},
				lV: function() {
					return s
				},
				s1: function() {
					return l
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				i = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				s = "TOGGLE_ON",
				m = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				l = "CLEAR_ACTIVE",
				v = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/activeActions.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				I: function() {
					return r
				},
				n: function() {
					return i
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = (u, s) => ({
					type: e.HI,
					activeKey: u,
					activeValue: s
				}),
				i = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return a
				},
				YT: function() {
					return v
				},
				ct: function() {
					return c
				},
				d6: function() {
					return n
				},
				kt: function() {
					return o
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/common/constants/index.ts");

			function i(_) {
				for (var d = 1; d < arguments.length; d++) {
					var p = arguments[d] != null ? Object(arguments[d]) : {},
						h = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(p).filter(function(I) {
						return Object.getOwnPropertyDescriptor(p, I).enumerable
					})), h.forEach(function(I) {
						u(_, I, p[I])
					})
				}
				return _
			}

			function u(_, d, p) {
				return d = s(d), d in _ ? Object.defineProperty(_, d, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[d] = p, _
			}

			function s(_) {
				var d = m(_, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function m(_, d) {
				if (typeof _ != "object" || _ === null) return _;
				var p = _[Symbol.toPrimitive];
				if (p !== void 0) {
					var h = p.call(_, d || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(_)
			}
			const c = _ => {
					const d = _.payload.map(p => i({}, p, {
						membershipId: p.id,
						id: p.account.id
					}));
					return i({}, _, {
						payload: d
					})
				},
				l = _ => {
					const d = c(_);
					return Array.isArray(d.payload) ? i({}, _, {
						payload: d.payload[0]
					}) : i({}, _, {
						payload: null
					})
				},
				v = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (..._) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: _
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", l)
		},
		"../react/common/actions/modalActions.ts": function(j, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return i
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function i(s, m, c = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: s,
						props: m
					},
					options: c
				}
			}

			function u(s) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: s
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(j, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				add: function() {
					return s
				},
				error: function() {
					return v
				},
				info: function() {
					return c
				},
				success: function() {
					return m
				},
				warn: function() {
					return l
				}
			});
			var e = t("../react/common/actionTypes.ts");

			function r(n) {
				return {
					type: e.Ng,
					notification: n
				}
			}

			function i(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let u = 0;

			function s(n, o, a = {}) {
				return a = a || {},
					function(_) {
						let d = u++,
							p = {
								id: d,
								type: n,
								message: o,
								delay: a.delay,
								persist: a.persist === void 0 ? !1 : a.persist,
								closable: a.closable === void 0 ? !0 : a.closable,
								onClose() {
									_(i(d)), a.onClose && a.onClose.apply(null, arguments)
								}
							};
						_(r(p))
					}
			}

			function m(n, o) {
				return s("success", n, o)
			}

			function c(n, o) {
				return s("info", n, o)
			}

			function l(n, o) {
				return s("warning", n, o)
			}

			function v(n, o) {
				return s("error", n, o)
			}
		},
		"../react/common/actions/userActions.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				BT: function() {
					return c
				},
				Ut: function() {
					return I
				},
				V_: function() {
					return E
				},
				Y9: function() {
					return p
				},
				Z0: function() {
					return T
				},
				mp: function() {
					return h
				},
				r3: function() {
					return g
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/app/redux/utils.ts");

			function i(f) {
				for (var b = 1; b < arguments.length; b++) {
					var O = arguments[b] != null ? Object(arguments[b]) : {},
						A = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(O).filter(function(D) {
						return Object.getOwnPropertyDescriptor(O, D).enumerable
					})), A.forEach(function(D) {
						u(f, D, O[D])
					})
				}
				return f
			}

			function u(f, b, O) {
				return b = s(b), b in f ? Object.defineProperty(f, b, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[b] = O, f
			}

			function s(f) {
				var b = m(f, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function m(f, b) {
				if (typeof f != "object" || f === null) return f;
				var O = f[Symbol.toPrimitive];
				if (O !== void 0) {
					var A = O.call(f, b || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(f)
			}
			const c = (0, e.C)("user").get`/user`,
				l = (0, e.C)("user").patch`/user`,
				v = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				_ = (0, e.C)("user").delete`/user/two_factor_authentication`,
				d = (0, e.C)("user").put`/user/email`;

			function p(...f) {
				return d(...f)
			}
			const h = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(f => i({}, f, {
					body: i({}, f.body, {
						result: {}
					})
				}))),
				E = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				g = (0, e.C)("userDetails").get`/user/details`,
				T = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function(j, y, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts");
			const i = ({
				legacyPermission: u,
				canAccess: s,
				children: m,
				render: c
			}) => {
				const l = !!(0, r.P)();
				let v;
				typeof s == "boolean" && s !== void 0 && l ? v = {
					read: s,
					list: s,
					create: s,
					update: s,
					delete: s,
					sign: s
				} : v = (0, e.Z)(u);
				const n = c || m;
				return n ? n(v) : null
			};
			y.Z = i
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return h
				},
				we: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u),
				m = t("../react/utils/url.ts"),
				c = t("../react/common/components/AccessCheck/useEvalRoles.ts"),
				l = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts"),
				v = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts"),
				n = t("../react/common/components/AccessCheck/useUserAuthzPolicies.ts");

			function o(f) {
				for (var b = 1; b < arguments.length; b++) {
					var O = arguments[b] != null ? Object(arguments[b]) : {},
						A = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(O).filter(function(D) {
						return Object.getOwnPropertyDescriptor(O, D).enumerable
					})), A.forEach(function(D) {
						a(f, D, O[D])
					})
				}
				return f
			}

			function a(f, b, O) {
				return b = _(b), b in f ? Object.defineProperty(f, b, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[b] = O, f
			}

			function _(f) {
				var b = d(f, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function d(f, b) {
				if (typeof f != "object" || f === null) return f;
				var O = f[Symbol.toPrimitive];
				if (O !== void 0) {
					var A = O.call(f, b || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(f)
			}
			const p = new Set,
				h = r().createContext(void 0);

			function I({
				children: f,
				userID: b,
				isUserInDSR: O
			}) {
				var A;
				const D = (0, n.b)(b),
					M = (0, u.useHistory)(),
					w = (0, m.uW)(M.location.pathname),
					S = (0, l.I)((A = O) !== null && A !== void 0 ? A : !0, w),
					R = (0, c.s)();
				(0, v.k)(w);
				const L = {
					isUserInDSR: O,
					contextAccountTag: w,
					contextAccountOrgsState: S,
					allRolesState: R,
					policiesState: D,
					refreshPolicies: D.refresh,
					reportSentryException: g
				};
				return r().createElement(h.Provider, {
					value: L
				}, f)
			}
			const E = () => {
					const f = useContext(h);
					if (!f) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
					return f.refreshPolicies
				},
				g = (f, b, O) => {
					const {
						parentComponent: A,
						stackSummary: D
					} = T(f), M = `${b.component}->${D}->${b.component_issue}`;
					p.has(M) || (p.add(M), i.Tb(f, {
						tags: o({
							parentComponent: A
						}, b),
						extra: o({
							stackSummary: D
						}, O),
						level: "error"
					}))
				},
				T = f => {
					var b;
					const A = (f.stack || "").split(`
`),
						D = [];
					for (const w of A) {
						const S = [/at (\w+)\s+\(/, /at Object\.(\w+)/, /(\w+)@/, /\/(\w+)\.tsx?:/, /\/(\w+)\.jsx?:/];
						for (const R of S) {
							const L = w.match(R);
							if (L && L[1] && !["Object", "eval", "anonymous"].includes(L[1])) {
								D.push(L[1]);
								break
							}
						}
					}
					const M = [...new Set(D)].filter(w => !["useIsAuthorized", "renderWithHooks", "updateFunctionComponent"].includes(w)).slice(0, 5);
					return {
						parentComponent: (b = M[0]) !== null && b !== void 0 ? b : "undefined",
						stackSummary: M.join(" \u2192 ")
					}
				}
		},
		"../react/common/components/AccessCheck/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				E1: function() {
					return r
				},
				L8: function() {
					return n
				},
				W9: function() {
					return v
				},
				ZZ: function() {
					return m
				},
				j: function() {
					return o
				},
				jX: function() {
					return c
				},
				my: function() {
					return l
				},
				u1: function() {
					return e
				},
				zs: function() {
					return s
				}
			});
			const e = "com.cloudflare.api.account",
				r = "com.cloudflare.api.account.",
				i = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				s = ["com.cloudflare.api.app.manage"];
			let m = function(a) {
				return a.read = "read", a.list = "list", a.create = "create", a.update = "update", a.delete = "delete", a.sign = "sign", a.refresh = "refresh", a
			}({});
			const c = (a, _) => `${r}${a?a+".":""}${_}`,
				l = (a, _) => `${u}${a?a+".":""}${_}`,
				v = (a, _) => `${i}${a}.${_}`,
				n = (a = "") => `${r}${a}`,
				o = (a = "") => `${u}${a}`
		},
		"../react/common/components/AccessCheck/index.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				L8: function() {
					return s.L8
				},
				W9: function() {
					return s.W9
				},
				WL: function() {
					return i.WL
				},
				ZP: function() {
					return r.Z
				},
				ZZ: function() {
					return s.ZZ
				},
				bk: function() {
					return u.b
				},
				hT: function() {
					return i.hT
				},
				j: function() {
					return s.j
				},
				jX: function() {
					return s.jX
				},
				kd: function() {
					return i.kd
				},
				my: function() {
					return s.my
				},
				xk: function() {
					return e.Z
				},
				zs: function() {
					return s.zs
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				i = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				u = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				s = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(j, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts");

			function m(c) {
				const {
					read: l,
					edit: v
				} = (0, i.p4)(u.Yj)(c);
				let n = v;
				if (c != "zone_versioning") {
					const a = (0, i.p4)(s.G);
					(a == null ? void 0 : a.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: l,
					list: l,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [l, n])
			}
			y.Z = m
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				F3: function() {
					return E
				},
				WL: function() {
					return _
				},
				YB: function() {
					return d
				},
				_S: function() {
					return p
				},
				hT: function() {
					return h
				},
				kd: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../../../../node_modules/lodash-es/isString.js"),
				i = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts");
			const c = {
					allow: "allow",
					deny: "deny"
				},
				l = 0,
				v = 1,
				n = 2,
				o = 3;

			function a(A, D, M, w) {
				let S = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					R;
				for (R in S) S[R] = _(A, `${D}.${R}`, M, w);
				return S
			}

			function _(A, D, M, w) {
				var S;
				if (d(D) && !p(D)) {
					const X = (0, s.G)(A);
					if (X == null ? void 0 : X.isLocked) return !1
				}
				const R = (S = (0, m.D0)(A)) === null || S === void 0 ? void 0 : S.id,
					L = R ? [`com.cloudflare.api.account.${R}`] : void 0,
					K = (0, i.vq)(R);
				return !!I(A, K, D, M, w || L)
			}

			function d(A) {
				return ![u.ZZ.read, u.ZZ.list].some(D => A.endsWith(D))
			}

			function p(A) {
				return A.includes("zone.versioning")
			}

			function h(A) {
				const D = (0, m.Ko)(A);
				let M = !1;
				return D == null || D.forEach(w => {
					w.access === c.allow && w.permission_groups.forEach(S => {
						var R;
						(S == null || (R = S.meta) === null || R === void 0 ? void 0 : R.scopes) === u.u1 && (M = !0)
					})
				}), M
			}

			function I(A, D, M, w, S) {
				const R = (0, m.Ko)(A),
					L = {};
				R == null || R.forEach(J => {
					var $;
					const W = J.access;
					let H = l;
					if (M && J.permission_groups.forEach(U => {
							var P, N;
							D == null || (P = D.find(F => F.id === U.id)) === null || P === void 0 || (N = P.permissions) === null || N === void 0 || N.forEach(F => {
								H = Math.max(H, g(F, M))
							})
						}), H !== l && !!w) {
						let U = l;
						J.resource_groups.forEach(P => {
							U = Math.max(U, f(P.scope, w, S))
						}), H = U === l ? U : H + U
					}(L == null || ($ = L[W]) === null || $ === void 0 ? void 0 : $[H]) || (0, e.Z)(L, [W, H], []), L[W][H].push(J)
				});
				const K = L[c.allow] && Object.keys(L[c.allow]).map(J => parseInt(J)),
					q = L[c.deny] && Object.keys(L[c.deny]).map(J => parseInt(J)),
					X = Math.max.apply(Math, K);
				return X === l || Math.max.apply(Math, q) >= X ? null : L[c.allow][X]
			}

			function E(A, D, M, w, S) {
				const R = {};
				A == null || A.forEach(X => {
					var J;
					const $ = X.access;
					let W = l;
					if (M && X.roles.forEach(H => {
							var U;
							const P = D == null ? void 0 : D.find(N => N.id === H.id);
							P == null || (U = P.permissions) === null || U === void 0 || U.forEach(N => {
								W = Math.max(W, g({
									key: N,
									id: "irrelevant"
								}, M))
							})
						}), W !== l && !!w) {
						let H = l;
						X.scopes.forEach(U => {
							H = Math.max(H, f(U, w, S))
						}), W = H === l ? H : W + H
					}(R == null || (J = R[$]) === null || J === void 0 ? void 0 : J[W]) || (0, e.Z)(R, [$, W], []), R[$][W].push(X)
				});
				const L = R[c.allow] && Object.keys(R[c.allow]).map(X => parseInt(X)),
					K = R[c.deny] && Object.keys(R[c.deny]).map(X => parseInt(X)),
					q = Math.max.apply(Math, L);
				return q === l || Math.max.apply(Math, K) >= q ? null : R[c.allow][q]
			}

			function g(A, D) {
				if (A.key === D || T(A.key, D)) return o;
				for (const M of (A == null ? void 0 : A.implies) || []) {
					let w = g(M, D);
					if (w > l) return w
				}
				return l
			}

			function T(A, D) {
				const M = D == null ? void 0 : D.lastIndexOf(".");
				return M === -1 ? !1 : (D == null ? void 0 : D.substring(0, M)) + ".*" === A
			}

			function f(A, D, M) {
				var w;
				let S = l;
				if (A == null || (w = A.objects) === null || w === void 0 || w.forEach(R => {
						S = Math.max(S, O(R, D))
					}), S === l) return S;
				if (A.key !== "*") switch (!0) {
					case b(A.key, M) > l:
					case (!(M == null ? void 0 : M.length) && S === o):
						break;
					case (S === v && b(A.key, [D]) > l):
						S = b(A.key, [D]);
						break;
					default:
						return l
				}
				for (const R of A.subset_of || [])
					if (b(R.key, M) === l) return l;
				return S
			}

			function b(A, D = []) {
				for (const M of D || []) {
					if (A === M) return o;
					if (T(A, M)) return n
				}
				return l
			}

			function O(A, D) {
				const M = (0, r.Z)(A) ? A : A.key;
				return M === D ? o : M === "*" || A === "*" ? v : T(M, D) ? n : l
			}
		},
		"../react/common/components/AccessCheck/useAccountParentOrgs.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				I: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = async m => {
				var c;
				const l = await fetch(`/api/v4/accounts/${m}/organizations`);
				if (!l.ok) throw new Error(`Failed to fetch account parent Orgs: ${l.status}`);
				const v = (c = await l.json()) === null || c === void 0 ? void 0 : c.result;
				if (v === void 0 || !(0, e.isArray)(v)) throw new Error(`Unexpected parent Orgs API response shape: ${JSON.stringify(v)}`);
				const n = v.map(a => {
						var _;
						return {
							tag: a.id,
							parentTag: (_ = a.parent) === null || _ === void 0 ? void 0 : _.id
						}
					}),
					o = [];
				return n.forEach(a => {
					a.parentTag || o.push(`com.cloudflare.api.tenant.${a.tag}`), o.push(`com.cloudflare.api.tenant.unit.${a.tag}`)
				}), o
			};

			function s(m, c) {
				const {
					data: l,
					error: v,
					isLoading: n
				} = (0, i.ZP)(c ? `account-organizations-${c}` : null, () => u(c), {
					dedupingInterval: 5 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 5 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					orgScopes: l || null,
					isLoading: n,
					error: (v == null ? void 0 : v.message) || null
				}
			}
		},
		"../react/common/components/AccessCheck/useAccountPermissionGroups.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				k: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/pages/home/members/utils.ts"),
				u = t("../../../../node_modules/lodash/lodash.js"),
				s = t.n(u),
				m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(m),
				l = t("../react/utils/url.ts"),
				v = t("../../../../node_modules/swr/core/dist/index.mjs");

			function n(a) {
				var _;
				const d = (0, m.useHistory)(),
					p = (0, l.uW)(d.location.pathname),
					h = a || p,
					I = (0, i.Hf)(h),
					E = h && I.length === 0,
					{
						data: g,
						error: T,
						isLoading: f
					} = (0, v.ZP)(E ? `account-${h}-permission-groups` : null, h ? o(h) : () => {
						throw new Error("no accountTag, should never run")
					});
				if ((0, e.useEffect)(() => {
						g && h && ((0, i.LX)(h, g), (0, i.rC)(h, g))
					}, [g, h]), !h) return [null, !1, null];
				if (T) {
					var b;
					const A = (b = T.message) !== null && b !== void 0 ? b : JSON.stringify(T);
					return [null, !1, A]
				}
				if (f && I.length === 0) return [null, !0, null];
				const O = (_ = g) !== null && _ !== void 0 ? _ : I;
				return O.length === 0 ? [
					[], !1, "no perm groups available through API or cache"
				] : [O, !1, null]
			}
			const o = a => async () => {
				const _ = await fetch(`/api/v4/accounts/${a}/iam/permission_groups?depth=2&permissions=true`);
				if (!_.ok) throw new Error(`Failed to fetch permission groups: ${_.status}`);
				const d = await _.json(),
					p = d == null ? void 0 : d.result;
				if (p === void 0 || !(0, u.isArray)(p)) throw new Error(`Unexpected permission groups API response shape: ${JSON.stringify(p)}`);
				return p
			}
		},
		"../react/common/components/AccessCheck/useEvalRoles.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = async () => {
				var m;
				const c = await fetch("/api/v4/user/iam/dash-authz-eval-roles");
				if (!c.ok) throw new Error(`Failed to fetch authz eval roles: ${c.status}`);
				const l = await c.json();
				if (((m = l.result) === null || m === void 0 ? void 0 : m.roles) === void 0 || !(0, e.isArray)(l.result.roles)) throw new Error(`Unexpected authz eval roles API response shape: ${JSON.stringify(l.result)}`);
				return l.result.roles
			};

			function s() {
				const {
					data: m,
					error: c,
					isLoading: l
				} = (0, i.ZP)("user/iam/dash-authz-eval-roles", u, {
					dedupingInterval: 24 * 60 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 24 * 60 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					roles: m || null,
					isLoading: l,
					error: (c == null ? void 0 : c.message) || null
				}
			}
		},
		"../react/common/components/AccessCheck/useIsAuthorized.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				b: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/common/components/AccessCheck/AuthzContext.tsx"),
				u = t("../react/app/redux/index.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts"),
				m = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				c = t("../../../../node_modules/lodash/lodash.js"),
				l = t.n(c),
				v = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts");
			const n = "com.cloudflare.api.account.";

			function o(d, p, h) {
				var I;
				const E = (0, e.useContext)(i.Hf);
				if (!E) throw new Error("useIsAuthorized must be used within AuthzContextProvider");
				let g, T = 0;
				h == null || h.forEach(te => {
					if (!!_(te)) {
						if (T++, T > 1) {
							E.reportSentryException(new Error("authz invalid question - useIsAuthorized was passed multiple Account scopes, only one will get parent Org scopes"), {
								component: "useIsAuthorized",
								component_issue: "multiple_account_scopes"
							}, {
								permission: d,
								resource: p,
								scopes: h
							});
							return
						}
						te !== `${n}${E.contextAccountTag}` && (g = te)
					}
				});
				const f = g ? g.replace(n, "") : void 0,
					b = (0, v.I)((I = E.isUserInDSR) !== null && I !== void 0 ? I : !0, f),
					O = (0, u.p4)(te => (0, s.G)(te));
				if ((0, m.YB)(d) && !(0, m._S)(d) && (O == null ? void 0 : O.isLocked)) return {
					isAuthzd: !1,
					isLoading: !1
				};
				const {
					policies: A,
					isLoading: D,
					isLoadingSkippedByUserID: M,
					error: w
				} = E.policiesState, {
					orgScopes: S,
					isLoading: R,
					error: L
				} = E.contextAccountOrgsState, {
					orgScopes: K,
					isLoading: q,
					error: X
				} = b, {
					roles: J,
					isLoading: $,
					error: W
				} = E.allRolesState;
				if (M) return {
					isAuthzd: !0,
					isLoading: !1
				};
				if (D || R || q || $) return {
					isAuthzd: void 0,
					isLoading: !0
				};
				if (w || L || X || W) return console.error("error loading authz policy data, displayed UI may not reflect actual policies"), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const H = h && h.length > 0;
				if ((0, c.isNull)(A) || (0, c.isNull)(J) || !H && E.contextAccountTag && (0, c.isNull)(S)) return E.reportSentryException(new Error("authz undefined - missing useIsAuthorized policy data"), {
					component: "useIsAuthorized",
					component_issue: "missing_policy_data"
				}, {
					permission: d,
					resource: p,
					scopes: h
				}), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const U = [];
				if (H ? (U.push(...h), K && U.push(...K)) : E.contextAccountTag && (U.push(`com.cloudflare.api.account.${E.contextAccountTag}`), U.push(...S)), U.length === 0) return E.reportSentryException(new Error("authz undefined - likely invalid useIsAuthorized scopes for authz eval"), {
					component: "useIsAuthorized",
					component_issue: "likely_invalid_scopes"
				}, {
					permission: d,
					resource: p,
					scopes: h
				}), {
					isAuthzd: void 0,
					isLoading: !1
				};
				const P = (0, c.uniq)(U),
					N = (0, m.F3)(A, J, d, p, P);
				return {
					isAuthzd: Boolean(N && N.length > 0),
					isLoading: !1
				}
			}
			const a = new RegExp(`${n}[0-9a-fA-F]{32}`);

			function _(d) {
				return a.test(d)
			}
		},
		"../react/common/components/AccessCheck/useUserAuthzPolicies.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				b: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = 60 * 1e3,
				s = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]),
				m = async () => {
					var l;
					const v = await fetch("/api/v4/user/iam/policies");
					if (!v.ok) throw new Error(`Failed to fetch authz policies: ${v.status}`);
					const n = await v.json(),
						o = n == null || (l = n.result) === null || l === void 0 ? void 0 : l.policies;
					if (!o || !(0, e.isArray)(o) || o.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(o)}`);
					return o
				};

			function c(l) {
				var v;
				const n = !!l,
					o = s.has((v = l) !== null && v !== void 0 ? v : ""),
					a = n && !o,
					{
						data: _,
						error: d,
						isLoading: p,
						mutate: h
					} = (0, i.ZP)(a ? `user/iam/policies/${l}` : null, () => m(), {
						dedupingInterval: u,
						revalidateOnFocus: !0,
						focusThrottleInterval: u,
						revalidateOnReconnect: !1
					}),
					I = async () => {
						!a || h()
					};
				return {
					policies: _ || null,
					isLoading: a ? p : !1,
					isLoadingSkippedByUserID: o,
					error: (d == null ? void 0 : d.message) || null,
					refresh: I
				}
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(j, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				i = t("../react/common/selectors/accountSelectors.ts");
			const u = m => {
					if (typeof m != "string") throw new Error("invalid Param Type provided");
					const c = m.slice(1).split(":");
					if (c.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: c[0],
						value: c[1]
					}
				},
				s = (m, c) => {
					const {
						resourceId: l,
						accountId: v,
						legacyPermission: n
					} = c;
					let {
						read: o,
						edit: a
					} = c;
					const _ = {};
					n && (a = `#${n}:edit`, o = `#${n}:read`);
					const d = l || v;
					if (o) {
						const p = Array.isArray(o) ? o : [o];
						_.isReadable = p.some(h => {
							const I = u(h);
							return (0, i.DT)(m, d, E => !!(E[I.key] && E[I.key][I.value]))
						})
					}
					if (a) {
						const p = Array.isArray(a) ? a : [a];
						_.isEditable = p.some(h => {
							const I = u(h);
							return (0, i.DT)(m, d, E => !!(E[I.key] && E[I.key][I.value]))
						})
					}
					return _
				};
			y.Z = (0, e.connect)(s)
		},
		"../react/common/components/AccessControl/index.js": function(j, y, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				i = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function s(o) {
				for (var a = 1; a < arguments.length; a++) {
					var _ = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						m(o, p, _[p])
					})
				}
				return o
			}

			function m(o, a, _) {
				return a = c(a), a in o ? Object.defineProperty(o, a, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = _, o
			}

			function c(o) {
				var a = l(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function l(o, a) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}

			function v(o) {
				const _ = ["isReadable", "isEditable"].reduce((d, p) => o.hasOwnProperty(p) ? s({}, d, {
					[p]: o[p]
				}) : d, {});
				return o.children(_)
			}
			v.propTypes = {
				resourceType: r().string,
				resourceId: r().string,
				read: r().oneOfType([r().string, r().array]),
				edit: r().oneOfType([r().string, r().array]),
				accountId: r().string,
				isReadable: r().bool,
				isEditable: r().bool,
				children: r().func
			};
			const n = (0, i.Z)((0, u.Z)(v));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				PP: function() {
					return a
				},
				RJ: function() {
					return l
				},
				tz: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				s = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				m = t("../react/common/utils/oidc.ts");
			const c = () => v.test(window.location.pathname) || i.E.has(u.Qq),
				l = () => i.E.get(u.Qq),
				v = /^\/login\/apple(\/)?/,
				o = [v, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				a = () => {
					let d = !1;
					o.forEach(h => {
						if (h.test(window.location.pathname)) {
							d = !0;
							return
						}
					});
					const p = c() && d;
					return p && (0, s.C8)(s.LF.OFF), p
				},
				_ = d => {
					d && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					}), window.location.href = (0, m.e)(m.c.Apple, d)
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				oG: function() {
					return d
				},
				sN: function() {
					return l.sN
				},
				v2: function() {
					return l.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				m = t.n(s),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = t("../react/common/components/Dropdown/index.tsx"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(p) {
					for (var h = 1; h < arguments.length; h++) {
						var I = arguments[h];
						for (var E in I) Object.prototype.hasOwnProperty.call(I, E) && (p[E] = I[E])
					}
					return p
				}, n.apply(this, arguments)
			}

			function o(p, h) {
				if (p == null) return {};
				var I = a(p, h),
					E, g;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(p);
					for (g = 0; g < T.length; g++) E = T[g], !(h.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, E) || (I[E] = p[E]))
				}
				return I
			}

			function a(p, h) {
				if (p == null) return {};
				var I = {},
					E = Object.keys(p),
					g, T;
				for (T = 0; T < E.length; T++) g = E[T], !(h.indexOf(g) >= 0) && (I[g] = p[g]);
				return I
			}
			const _ = (0, c.SU)(({
				theme: p
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${p.radii[2]}px 0 0 ${p.radii[2]}px`,
					borderRight: `1px solid ${p.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${p.radii[2]}px ${p.radii[2]}px 0`,
					paddingRight: p.space[2],
					paddingLeft: p.space[2]
				},
				"& button": {
					color: (0, v.Yc)() ? p.colors.text : void 0
				},
				"& button:hover": {
					color: (0, v.Yc)() ? p.colors.text : void 0
				}
			}));

			function d(p) {
				let {
					menu: h,
					containerProps: I,
					disabled: E,
					disabledDropdown: g = E
				} = p, T = o(p, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: f
				} = (0, s.useI18n)();
				return r().createElement(_, n({}, I, {
					role: "group"
				}), r().createElement(i.zx, n({}, T, {
					disabled: E
				})), r().createElement(l.Lt, {
					trigger: r().createElement(i.zx, {
						type: T.type,
						"aria-haspopup": "menu",
						disabled: g
					}, r().createElement(u.J, {
						type: "caret-down",
						label: f("common.more"),
						size: 12
					})),
					menu: h
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../react/common/hooks/useIntersectionObserver.ts");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(l) {
					for (var v = 1; v < arguments.length; v++) {
						var n = arguments[v];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (l[o] = n[o])
					}
					return l
				}, m.apply(this, arguments)
			}

			function c(l) {
				const v = (0, e.useRef)(null),
					[n, o] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const _ = v.current;
					if (_) {
						const {
							bottom: d
						} = _.getBoundingClientRect();
						d > window.innerHeight && o(!0)
					}
				}, []);
				const a = (0, s.S)(_ => {
					for (const d of _) d.intersectionRatio < 1 && o(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const _ = v.current;
					if (_ && a) return a.observe(_), () => {
						a.unobserve(_)
					}
				}, [a]), r().createElement(i.ZC, m({
					role: "menu",
					innerRef: v,
					position: "absolute",
					right: "0",
					backgroundColor: u.rS.colors.background,
					p: 1,
					color: "gray.4",
					border: "1px solid",
					borderColor: "gray.8",
					boxShadow: "rgba(0, 0, 0, 0.025) -1px 2px 1px 1px, rgba(0, 0, 0, 0.05) -3px 3px 7px 0px",
					borderRadius: 2,
					textAlign: "left",
					whiteSpace: "nowrap",
					overflow: "hidden"
				}, n ? {
					bottom: "100%",
					mb: "2px"
				} : {
					top: "100%",
					mt: "2px"
				}, {
					zIndex: 1e3,
					minWidth: 170
				}, l))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u);

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(I) {
					for (var E = 1; E < arguments.length; E++) {
						var g = arguments[E];
						for (var T in g) Object.prototype.hasOwnProperty.call(g, T) && (I[T] = g[T])
					}
					return I
				}, m.apply(this, arguments)
			}

			function c(I, E) {
				if (I == null) return {};
				var g = l(I, E),
					T, f;
				if (Object.getOwnPropertySymbols) {
					var b = Object.getOwnPropertySymbols(I);
					for (f = 0; f < b.length; f++) T = b[f], !(E.indexOf(T) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, T) || (g[T] = I[T]))
				}
				return g
			}

			function l(I, E) {
				if (I == null) return {};
				var g = {},
					T = Object.keys(I),
					f, b;
				for (b = 0; b < T.length; b++) f = T[b], !(E.indexOf(f) >= 0) && (g[f] = I[f]);
				return g
			}

			function v(I) {
				for (var E = 1; E < arguments.length; E++) {
					var g = arguments[E] != null ? Object(arguments[E]) : {},
						T = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(g).filter(function(f) {
						return Object.getOwnPropertyDescriptor(g, f).enumerable
					})), T.forEach(function(f) {
						n(I, f, g[f])
					})
				}
				return I
			}

			function n(I, E, g) {
				return E = o(E), E in I ? Object.defineProperty(I, E, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[E] = g, I
			}

			function o(I) {
				var E = a(I, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function a(I, E) {
				if (typeof I != "object" || I === null) return I;
				var g = I[Symbol.toPrimitive];
				if (g !== void 0) {
					var T = g.call(I, E || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(I)
			}
			const _ = ({
					theme: I
				}) => {
					const E = {
						cursor: "pointer",
						background: I.colors.gray[9],
						color: I.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: I.space[2],
						background: I.colors.background,
						color: I.colors.gray[3],
						fontSize: I.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': E,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': v({}, E, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: I.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				d = (0, i.LM)(_, "a"),
				p = (0, i.LM)(_, "button");

			function h(I) {
				let {
					disabled: E = !1
				} = I, g = c(I, ["disabled"]);
				const T = (0, u.useHistory)(),
					f = {
						role: "menuitem"
					};
				if ("href" in g && typeof g.href == "string") return r().createElement(d, m({
					"aria-disabled": E
				}, f, g, {
					href: E ? void 0 : g.href,
					onClick: O => {
						var A;
						if (E) return O.stopPropagation();
						O.preventDefault(), (A = g.onClick) === null || A === void 0 || A.call(g, O), T.push(g.href)
					}
				}));
				var b;
				return r().createElement(p, m({
					type: (b = g.type) !== null && b !== void 0 ? b : "button"
				}, f, g, {
					disabled: E
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(j, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: c
			}) => r().createElement(s.xu, {
				height: 411
			}, c);
			m.propTypes = {
				children: u().node
			}, y.Z = m
		},
		"../react/common/components/ExternalLink.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				dL: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(a) {
					for (var _ = 1; _ < arguments.length; _++) {
						var d = arguments[_];
						for (var p in d) Object.prototype.hasOwnProperty.call(d, p) && (a[p] = d[p])
					}
					return a
				}, m.apply(this, arguments)
			}

			function c(a, _) {
				if (a == null) return {};
				var d = l(a, _),
					p, h;
				if (Object.getOwnPropertySymbols) {
					var I = Object.getOwnPropertySymbols(a);
					for (h = 0; h < I.length; h++) p = I[h], !(_.indexOf(p) >= 0) && (!Object.prototype.propertyIsEnumerable.call(a, p) || (d[p] = a[p]))
				}
				return d
			}

			function l(a, _) {
				if (a == null) return {};
				var d = {},
					p = Object.keys(a),
					h, I;
				for (I = 0; I < p.length; I++) h = p[I], !(_.indexOf(h) >= 0) && (d[h] = a[h]);
				return d
			}
			const v = (0, s.SU)(({
				verticalAlign: a = "text-bottom"
			}) => ({
				flex: "none",
				verticalAlign: a,
				fill: "currentColor"
			}), i.J);
			var n = null;
			const o = a => {
				let {
					to: _,
					children: d,
					icon: p = !0,
					target: h = "_blank",
					color: I,
					display: E = "inline-flex",
					iconMarginLeft: g = 1,
					iconMarginRight: T,
					alignSelfIcon: f = "center"
				} = a, b = c(a, ["to", "children", "icon", "target", "color", "display", "iconMarginLeft", "iconMarginRight", "alignSelfIcon"]);
				return r().createElement(u.A, m({}, b, {
					href: _,
					target: h,
					rel: "noopener noreferrer",
					display: E,
					alignItems: "center",
					color: I
				}), d, p && r().createElement(v, {
					alignSelf: f,
					label: "External Link",
					type: "external-link",
					size: typeof p == "number" ? p : 18,
					ml: g,
					mr: T
				}))
			}
		},
		"../react/common/components/ModalManager.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return d
				},
				dd: function() {
					return a
				},
				vR: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = p => p.application.modals;
			var s = t("../react/common/actions/modalActions.ts"),
				m = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(p) {
					for (var h = 1; h < arguments.length; h++) {
						var I = arguments[h];
						for (var E in I) Object.prototype.hasOwnProperty.call(I, E) && (p[E] = I[E])
					}
					return p
				}, l.apply(this, arguments)
			}
			const v = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: h,
						closeModal: I
					} = this.props;
					return r().createElement(r().Fragment, null, h.map(({
						ModalComponent: E,
						props: g = {},
						id: T
					}) => {
						const f = () => {
							typeof g.onClose == "function" && g.onClose(), I(E)
						};
						return r().createElement(v.Provider, {
							key: T,
							value: {
								closeModal: f
							}
						}, r().createElement(m.J$, {
							value: c.ZP
						}, r().createElement(E, l({}, g, {
							isOpen: !0,
							closeModal: f
						}))))
					}))
				}
			}

			function o() {
				const p = r().useContext(v);
				if (!p) throw new Error("useModalContext must be used within a ModalContext");
				return p
			}

			function a() {
				const p = (0, i.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...h) {
						return p(s.openModal(...h))
					}, [p]),
					closeModal: (0, e.useCallback)(function(...h) {
						return p(s.closeModal(...h))
					}, [p])
				}
			}
			var d = (0, i.connect)(p => ({
				modals: u(p)
			}), s)(n)
		},
		"../react/common/components/Page.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function u(s) {
				return r().createElement(i.T3, s)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return l
				},
				JR: function() {
					return v
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return m
				},
				ZI: function() {
					return s
				},
				if: function() {
					return r
				},
				q6: function() {
					return i
				},
				w_: function() {
					return u
				},
				zl: function() {
					return c
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				i = "date-from",
				u = "date-to",
				s = "from",
				m = "to",
				c = "all",
				l = {
					equals: "eq",
					notEquals: "neq",
					greaterThanOrEqual: "geq",
					greaterThan: "gt",
					lessThan: "lt",
					lessThanOrEqual: "leq",
					like: "like",
					notLike: "notlike",
					has: "has",
					notHas: "nothas",
					hasAll: "hasall",
					hasAny: "hasany",
					contains: "contains",
					startsWith: "starts",
					endsWith: "ends",
					notContains: "!contains",
					notStartsWith: "!starts",
					notEndsWith: "!ends",
					in: "in",
					notIn: "!in"
				};
			let v = function(o) {
					return o.ADD_FILTER = "Add filter", o.EDIT_FILTER = "Edit filter", o.REMOVE_FILTER = "Remove filter", o.REMOVE_ALL_FILTERS = "Remove all filters", o.CHANGE_TIME = "Change time window", o.FEED_PAGE_FORWARD = "Activity feed next page", o.FEED_PAGE_BACKWARD = "Activity feed previous page", o.FEED_EXPAND_EVENT = "Activity feed expand event", o.FEED_CLOSE_EVENT = "Activity feed close event", o.FEED_EXPAND_MATCHES = "Activity feed expand matches", o.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", o.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", o.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", o.DOWNLOAD_FEED = "Activity feed download", o
				}({}),
				n = function(o) {
					return o.TIMESERIES = "Timeseries Chart", o.DISTRIBUTION = "Source Distribution Chart", o.TOP_N = "Top N", o.FILTER_BAR = "Filter Bar", o.SCORES_DISTRIBUTIONS = "Scores Distributions", o.INSIGHTS = "Insights", o.RL_HISTOGRAM = "Rate Limit Histogram", o
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Cf: function() {
					return v
				},
				hJ: function() {
					return l
				},
				ys: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, a[d])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var _ = a.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const l = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, i({}, o || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return e
				}
			});
			let e = function(r) {
				return r.FIELD = "change field", r.OPERATOR = "change operator", r
			}({})
		},
		"../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				Aq: function() {
					return l
				},
				Xc: function() {
					return c
				},
				rg: function() {
					return v
				},
				xs: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				u = t("../node_modules/@cloudflare/component-link/es/index.js"),
				s = t("../node_modules/@cloudflare/elements/es/index.js"),
				m = t("../react/utils/translator.tsx");
			const c = "sequence builder modal opened",
				l = "sequence builder modal submitted",
				v = 10,
				n = {
					INITIAL_PAGINATION: {
						page: 1,
						perPage: 10
					},
					INITIAL_SORT: {
						name: "endpoint",
						direction: i.Sr.asc
					},
					INITIAL_TOOLBAR_STATE: {
						search: "",
						filterValues: {
							method: "all"
						}
					},
					EMPTY_STATES: ({
						selectedHostname: o,
						isFiltersAndNoResults: a,
						addEndpointsRoute: _
					}) => o ? a ? {
						title: r().createElement(m.cC, {
							id: "common.table.empty.search.title"
						}),
						description: r().createElement(s.ZC, {
							mt: 1
						}, r().createElement(m.cC, {
							id: "common.table.empty.search.description"
						}))
					} : {
						title: r().createElement(s.ZC, {
							textAlign: "center"
						}, r().createElement(m.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.title"
						})),
						description: r().createElement(s.ZC, {
							mt: 3,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							textAlign: "center",
							fontSize: 2
						}, r().createElement(m.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.description"
						}), r().createElement(u.QV, {
							to: _
						}, r().createElement(m.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.cta"
						}))),
						image: () => null
					} : {
						title: null,
						description: r().createElement(s.ZC, {
							textAlign: "center"
						}, r().createElement(m.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_hostname_selected"
						})),
						image: () => null
					}
				}
		},
		"../react/common/constants/billing/index.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Gq: function() {
					return u
				},
				g$: function() {
					return i
				},
				WX: function() {
					return e
				},
				E0: function() {
					return v
				},
				Hw: function() {
					return m
				},
				Ed: function() {
					return s
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return _
				},
				hQ: function() {
					return c
				},
				SP: function() {
					return l
				}
			});
			let e = function(d) {
				return d.page_rules = "page_rules", d.automatic_platform_optimization = "automatic_platform_optimization", d
			}({});
			const r = "page_rules",
				i = "automatic_platform_optimization",
				u = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				s = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				m = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				c = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				l = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				v = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					ubb_unit: "image",
					ubb_delivery_price: 1,
					ubb_frequency_delivery: 1e5,
					ubb_storage_price: 5,
					ubb_storage_frequency: 1e5,
					ubb_transformations_frequency: 2e3,
					ubb_transformations_price: 1
				};
			var n = t("../react/common/constants/billing/tax.ts"),
				o = t("../react/common/constants/billing/tracking.ts"),
				a = t("../react/common/constants/billing/workers.ts");
			const _ = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return s
				},
				SO: function() {
					return i
				},
				aA: function() {
					return r
				}
			});
			const e = {
					NOTIFICATION_CLICK: "Notification link click",
					CANCELED_SUBSCRIPTION: "Canceled subscription"
				},
				r = {
					NOTIFICATIONS: "notifications",
					SUBSCRIPTIONS: "subscriptions"
				},
				i = {
					BILLING: "billing"
				},
				u = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				s = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Dk: function() {
					return _
				},
				Dy: function() {
					return d
				},
				E_: function() {
					return m
				},
				Lv: function() {
					return p
				},
				S4: function() {
					return s
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return v
				},
				Y1: function() {
					return c
				},
				p6: function() {
					return l
				},
				q0: function() {
					return u
				},
				rg: function() {
					return h
				},
				sJ: function() {
					return a
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				s = "degraded",
				m = "critical",
				c = "unknown",
				l = "not-monitored",
				v = r().from({
					FREE: "free",
					PRO: "pro",
					BIZ: "business",
					ENT: "enterprise"
				}),
				n = {
					ZONES_ROOT_REQUESTED: "zones_root_requested",
					ZONES_ACCOUNT_REQUESTED: "zones_account_requested",
					ZONES_HEADER_REQUESTED: "zones_header_requested",
					MEMBERSHIPS_ROOT_REQUESTED: "membership_root_requested",
					ACCOUNT_MEMBERS_REQUESTED: "account_members_requested"
				},
				o = {
					f: v.FREE,
					p: v.PRO,
					b: v.BIZ
				},
				a = "marketing-pt",
				_ = () => {
					const E = i.Z.get(a);
					if (!!E) return o[E]
				},
				d = ["gov"],
				p = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				h = "banner-notification-interactions",
				I = null
		},
		"../react/common/constants/index.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Dk: function() {
					return e.Dk
				},
				Dy: function() {
					return e.Dy
				},
				E0: function() {
					return r.E0
				},
				E_: function() {
					return e.E_
				},
				PLANS: function() {
					return e.Xf
				},
				S4: function() {
					return e.S4
				},
				UM: function() {
					return e.UM
				},
				WX: function() {
					return r.WX
				},
				Y1: function() {
					return e.Y1
				},
				bi: function() {
					return r.bi
				},
				g$: function() {
					return r.g$
				},
				p6: function() {
					return e.p6
				},
				q0: function() {
					return e.q0
				},
				rg: function() {
					return e.rg
				},
				sJ: function() {
					return e.sJ
				}
			});
			var e = t("../react/common/constants/constants.ts"),
				r = t("../react/common/constants/billing/index.ts")
		},
		"../react/common/constants/roles.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", r.CLOUDFLARE_ACCESS = "Cloudflare Access", r.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", r.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", r.ADMINISTRATOR = "Administrator", r.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", r.ANALYTICS = "Analytics", r.API_GATEWAY = "API Gateway", r.API_GATEWAY_READ = "API Gateway Read", r.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", r.BILLING = "Billing", r.BOT_MANAGEMENT = "Bot Management", r.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", r.CACHE_DOMAIN_PURGE = "Cache Domain Purge", r.CACHE_PURGE = "Cache Purge", r.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", r.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", r.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", r.EMAIL_SECURITY_ANALYST = "Email Security Analyst", r.EMAIL_SECURITY_READONLY = "Email Security Readonly", r.EMAIL_SECURITY_REPORTING = "Email Security Reporting", r.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", r.CLOUDFORCE_ONE_READ = "Cloudforce One Read", r.DNS = "DNS", r.DOMAIN_ADMINISTRATOR = "Domain Administrator", r.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", r.DOMAIN_API_GATEWAY = "Domain API Gateway", r.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", r.DOMAIN_DNS = "Domain DNS", r.DOMAIN_PAGE_SHIELD = "Domain Page Shield", r.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", r.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", r.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", r.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", r.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", r.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", r.HTTP_APPLICATIONS = "HTTP Applications", r.HTTP_APPLICATIONS_READ = "HTTP Applications Read", r.CLOUDFLARE_IMAGES = "Cloudflare Images", r.LOAD_BALANCER = "Load Balancer", r.LOG_SHARE = "Log Share", r.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", r.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", r.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", r.PAGE_SHIELD = "Page Shield", r.PAGE_SHIELD_READ = "Page Shield Read", r.HYPERDRIVE_ADMIN = "Hyperdrive Admin", r.HYPERDRIVE_READONLY = "Hyperdrive Readonly", r.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", r.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", r.LOG_SHARE_READER = "Log Share Reader", r.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", r.CLOUDFLARE_STREAM = "Cloudflare Stream", r.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", r.CLOUDFLARE_DEX = "Cloudflare DEX", r.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", r.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", r.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", r.TRANSFORM_RULES = "Transform Rules", r.TRUST_AND_SAFETY = "Trust and Safety", r.TURNSTILE = "Turnstile", r.TURNSTILE_READ = "Turnstile Read", r.VECTORIZE_ADMIN = "Vectorize Admin", r.VECTORIZE_READONLY = "Vectorize Readonly", r.FIREWALL = "Firewall", r.WAITING_ROOM_ADMIN = "Waiting Room Admin", r.WAITING_ROOM_READ = "Waiting Room Read", r.WORKERS_ADMIN = "Workers Admin", r.ZARAZ_ADMIN = "Zaraz Admin", r.ZARAZ_EDIT = "Zaraz Edit", r.ZARAZ_READONLY = "Zaraz Readonly", r.ZONE_VERSIONING = "Zone Versioning", r.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", r.ZONE_VERSIONING_READ = "Zone Versioning Read", r.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", r.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", r.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", r.BRAND_PROTECTION = "Brand Protection", r
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return e
				},
				dy: function() {
					return r
				},
				sO: function() {
					return i
				},
				x4: function() {
					return u
				}
			});
			let e = function(s) {
				return s.DELETE = "delete", s.CREATE = "create", s.GET = "get", s.UPDATE = "update", s
			}({});
			const r = {
					http_config_settings: "configuration",
					http_request_dynamic_redirect: "redirect",
					http_request_cache_settings: "cache",
					http_request_origin: "origin",
					http_request_late_transform: "modify request header",
					http_request_transform: "rewrite url",
					http_response_headers_transform: "modify response header",
					http_response_compression: "compression",
					http_custom_errors: "custom errors",
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				i = (s, m, c = !1) => {
					var l;
					return `${m} ${(l=r[s])!==null&&l!==void 0?l:s} ${c?"ruleset":"rule"}${m===e.GET?"s":""}`
				},
				u = () => {
					var s;
					return (s = Object.keys(r).reduce((m, c) => {
						const l = Object.values(e).reduce((v, n) => (v.push(i(c, n)), v.push(i(c, n, !0)), v), []);
						return m.concat(l)
					}, [])) === null || s === void 0 ? void 0 : s.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return m
				},
				F: function() {
					return s
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(i);

			function s() {
				var c;
				const {
					accountId: l
				} = (0, i.useParams)(), v = (0, e.p4)(r.D0);
				if (l === void 0 && !v) throw new Error("Account ID not found in URL params");
				return (c = l) !== null && c !== void 0 ? c : v == null ? void 0 : v.id
			}

			function m() {
				const c = s();
				return (0, e.p4)(l => (0, r.Py)(l, c))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(j, y, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				i = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const s = m => {
				const c = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(m)), n => {
					c((0, e.I)(m, n))
				}]
			};
			y.Z = s
		},
		"../react/common/hooks/useCachedState.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(s, {
				key: m,
				cache: c = i.E,
				ttl: l
			} = {}) {
				var v;
				const n = m !== void 0 && c.get(m),
					[o, a] = (0, e.useState)((v = n) !== null && v !== void 0 ? v : s);
				return [o, d => {
					a(p => (d instanceof Function && (d = d(p)), m !== void 0 && c.set(m, d, l), d))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(j, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(i) {
				return (0, e.qf)(i)
			}
			y.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function i(u, {
				root: s,
				rootMargin: m,
				threshold: c
			} = {}) {
				const l = (0, e.useRef)(null);

				function v() {
					return l.current === null && (l.current = new IntersectionObserver(u, {
						root: s,
						rootMargin: m,
						threshold: c
					})), l.current
				}
				return (0, e.useEffect)(() => (l.current = new IntersectionObserver(u, {
					root: s,
					rootMargin: m,
					threshold: c
				}), () => {
					var n;
					(n = l.current) === null || n === void 0 || n.disconnect()
				}), [u, s, m, c]), v()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(j, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function i(u) {
				const s = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					s.current = u
				}, [u]), s.current
			}
			y.Z = i
		},
		"../react/common/hooks/useScope.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				Lm: function() {
					return v
				},
				QF: function() {
					return c
				},
				f1: function() {
					return l
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/app/redux/index.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u),
				m = t("../react/common/hooks/useAccountId.ts");
			const c = {
					ZONE: "zones",
					ACCOUNT: "accounts"
				},
				l = () => {
					const {
						pathname: n
					} = (0, u.useLocation)();
					return (0, e.el)(n)
				},
				v = () => {
					const n = (0, r.p4)(i.Cu),
						o = (0, m.F)(),
						a = l();
					return {
						scope: a ? c.ZONE : c.ACCOUNT,
						scopeId: a ? n : o,
						isZoneScope: a
					}
				}
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(j, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function i(u) {
				return (0, e.p4)(s => (0, r.rV)(s, u))
			}
			y.Z = i
		},
		"../react/common/middleware/sparrow/errors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Uh: function() {
					return s
				},
				ez: function() {
					return u
				},
				oV: function() {
					return m
				}
			});

			function e(c, l, v) {
				return l = r(l), l in c ? Object.defineProperty(c, l, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = v, c
			}

			function r(c) {
				var l = i(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function i(c, l) {
				if (typeof c != "object" || c === null) return c;
				var v = c[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			class u extends Error {
				constructor(l, v) {
					super(v);
					e(this, "eventName", void 0), this.eventName = l, this.name = "SparrowValidationError"
				}
			}
			class s extends u {
				constructor(l) {
					super(l, `Event not allowed: "${l}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class m extends u {
				constructor(l, v) {
					super(l, `Found invalid properties on event: "${l}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = v
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Au: function() {
					return Ae
				},
				B: function() {
					return We
				},
				B3: function() {
					return et
				},
				BG: function() {
					return A
				},
				Bp: function() {
					return gt
				},
				CV: function() {
					return ft
				},
				D0: function() {
					return T
				},
				DT: function() {
					return Y
				},
				EL: function() {
					return F
				},
				EU: function() {
					return z
				},
				GE: function() {
					return yt
				},
				Ko: function() {
					return ie
				},
				Kx: function() {
					return w
				},
				Le: function() {
					return S
				},
				O4: function() {
					return Fe
				},
				Ou: function() {
					return H
				},
				Py: function() {
					return Be
				},
				QI: function() {
					return He
				},
				Qf: function() {
					return b
				},
				RO: function() {
					return De
				},
				T3: function() {
					return dt
				},
				T8: function() {
					return O
				},
				UX: function() {
					return N
				},
				VP: function() {
					return je
				},
				Xo: function() {
					return nt
				},
				Xu: function() {
					return J
				},
				Yi: function() {
					return st
				},
				Yj: function() {
					return oe
				},
				Zu: function() {
					return te
				},
				bC: function() {
					return x
				},
				f8: function() {
					return K
				},
				hI: function() {
					return lt
				},
				hN: function() {
					return M
				},
				hX: function() {
					return Re
				},
				iq: function() {
					return Ke
				},
				nE: function() {
					return D
				},
				oD: function() {
					return P
				},
				oI: function() {
					return L
				},
				oJ: function() {
					return mt
				},
				tM: function() {
					return U
				},
				uF: function() {
					return $
				},
				ut: function() {
					return xe
				},
				vU: function() {
					return bt
				},
				wQ: function() {
					return ce
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				i = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				s = t.n(u),
				m = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				l = t.n(c),
				v = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				o = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				_ = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/common/constants/roles.ts"),
				p = t("../react/common/utils/hasRole.ts");

			function h(Z) {
				for (var me = 1; me < arguments.length; me++) {
					var he = arguments[me] != null ? Object(arguments[me]) : {},
						Te = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(he).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(he, Me).enumerable
					})), Te.forEach(function(Me) {
						I(Z, Me, he[Me])
					})
				}
				return Z
			}

			function I(Z, me, he) {
				return me = E(me), me in Z ? Object.defineProperty(Z, me, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[me] = he, Z
			}

			function E(Z) {
				var me = g(Z, "string");
				return typeof me == "symbol" ? me : String(me)
			}

			function g(Z, me) {
				if (typeof Z != "object" || Z === null) return Z;
				var he = Z[Symbol.toPrimitive];
				if (he !== void 0) {
					var Te = he.call(Z, me || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (me === "string" ? String : Number)(Z)
			}
			const T = Z => {
					const me = $(Z);
					return me == null ? void 0 : me.account
				},
				f = Z => {
					const me = (0, o.PR)(Z);
					if (me) {
						const he = me.id;
						return Z.accountAccess[he] || {}
					}
					return {}
				},
				b = Z => Z.accountsDetailed,
				O = (0, n.P1)("accountsDetailed", b),
				A = Z => Z.memberships,
				D = (0, m.P1)((0, n.P1)("memberships", A), _.U, (Z, me) => !!me && !!Z ? Z.filter(he => me.includes(he.id)) : Z),
				M = Z => Z.accountFlags && Z.accountFlags.data,
				w = Z => Z.accountFlags,
				S = (Z, me, he) => {
					const Te = M(Z);
					return !Te || !Te[me] ? null : Te[me][he]
				},
				R = Z => Z.accountFlags.isRequesting,
				L = (Z, ...me) => i()(Z, ["accountFlagsChanges", "data", ...me]),
				K = Z => Z.accountFlagsChanges.isRequesting,
				q = (0, m.P1)(M, w, (Z, me) => ({
					data: Z,
					meta: me
				})),
				X = (Z, me, he) => !!(isEnterpriseSSEnabledSelector(Z) && S(Z, me, he)),
				J = Z => Z.membership,
				$ = (0, n.P1)("membership", J),
				W = (0, m.P1)($, J, (Z, me) => ({
					data: Z,
					meta: me
				})),
				H = Z => {
					const {
						roles: me = []
					} = $(Z) || {};
					return Boolean(me.find(he => he === "Super Administrator - All Privileges" || he === "Billing"))
				},
				U = Z => {
					const me = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, p.n)(Z, me)
				},
				P = Z => {
					const me = f(Z),
						he = Ze.getMemberships(Z) ? s().asMutable(Ze.getMemberships(Z)) : [];
					if (!!he) return s().from(he.map(Te => h({}, Te, {
						lastSeen: me[Te.account.id] ? me[Te.account.id].lastSeen : null
					})).sort((Te, Me) => Te.lastSeen && Me.lastSeen ? Me.lastSeen - Te.lastSeen : 0))
				},
				N = Z => Z.filteredMemberships,
				F = (0, n.P1)("filteredMemberships", N),
				te = (0, m.P1)($, Z => Z == null ? void 0 : Z.permissions),
				oe = (0, m.P1)(te, Z => (0, e.Z)(me => {
					var he;
					return (he = Z == null ? void 0 : Z[me]) !== null && he !== void 0 ? he : {
						read: !1,
						edit: !1
					}
				})),
				ie = (0, m.P1)($, Z => Z == null ? void 0 : Z.policies),
				Y = (Z, me, he) => {
					let Te = Ze.getMembership(Z);
					if (!Te) {
						const Me = Ze.getMemberships(Z);
						if (!Me || !me) return !1;
						Te = Me.find(Ve => Ve.account.id === me)
					}
					if (!Te || !he) return !1;
					try {
						return he(Te.permissions)
					} catch {
						return !1
					}
				},
				pe = Z => {
					var me, he;
					return (me = (he = T(Z)) === null || he === void 0 ? void 0 : he.meta.has_pro_zones) !== null && me !== void 0 ? me : !1
				},
				z = Z => {
					var me, he;
					return (me = (he = T(Z)) === null || he === void 0 ? void 0 : he.meta.has_business_zones) !== null && me !== void 0 ? me : !1
				},
				x = Z => z(Z) || pe(Z),
				ee = (Z, me) => {
					const he = ne(Z, me);
					return !!he && !!he.enabled
				},
				ne = (Z, me) => {
					const he = Ze.getMembership(Z),
						Te = he && he.account;
					return Te && Te.legacy_flags && Te.legacy_flags[me]
				},
				ce = Z => ee(Z, "custom_pages"),
				ye = Z => !!Z && Z["webhooks.webhooks.enabled"],
				ae = Z => S(Z, "bots", "enabled"),
				Oe = Z => S(Z, "billing", "annual_subscriptions_enable"),
				De = Z => Z ? Boolean(S(Z, "ConstellationAI", "v2_ui")) : !1,
				Re = Z => Z ? Boolean(S(Z, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				We = Z => Z ? Boolean(S(Z, "AIgateway", "enabled")) : !1,
				ke = Z => ne(Z, "enterprise_zone_quota"),
				it = Z => {
					const me = ke(Z);
					return !me || !me.available ? -1 : me.available
				},
				Ke = Z => Z.accountMembers,
				et = (0, n.P1)("accountMembers", Ke),
				Fe = Z => Z.accountMember && Z.accountMember.isRequesting,
				G = Z => Z.accountRoles,
				be = (0, n.P1)("accountRoles", G),
				Be = (Z, me) => {
					const he = Ze.getMemberships(Z),
						Te = he && he.find(vt => vt.account.id === me);
					if (Te) return Te.account.name.replace(" Account", " account");
					const Me = Ze.getMembership(Z),
						Ve = Me && Me.account;
					return Ve && Ve.id === me ? Ve.name : null
				},
				xe = (Z, me) => {
					const he = Ze.getMemberships(Z),
						Te = he && he.find(vt => vt.account.id === me);
					if (Te) return Te.account.settings.access_approval_expiry;
					const Me = Ze.getMembership(Z),
						Ve = Me && Me.account;
					return Ve && Ve.id === me ? Ve.settings.access_approval_expiry : null
				},
				nt = (Z, me) => {
					const he = xe(Z, me);
					return he ? l().utc(he).isAfter() : !1
				},
				dt = (Z, me, he) => {
					const Te = xe(Z, me);
					let Me = Te ? l().utc(Te) : null;
					return !Me || !Me.isAfter() ? "" : Me && Me.year() === 3e3 ? he("account.access_approval.card_expiration_forever") : he("account.access_approval.card_expiration_text", {
						expiryTimestamp: Me.local().format(v.U.DateTime)
					})
				},
				mt = Z => Z && Z.member && Z.member.edit,
				Ae = (Z, me) => {
					const he = Ze.getMembership(Z),
						Te = he && he.account;
					return Te ? Te.id !== me : !1
				},
				rt = Z => Z.dpa,
				Q = (0, n.P1)("dpa", rt),
				se = Z => Z.webhook,
				fe = Z => Z.webhooks,
				Ce = (0, n.P1)("webhook", fe),
				je = Z => Z.accountLegoContract,
				Ge = (0, n.P1)("accountLegoContract", je),
				He = Z => {
					const me = Ge(Z);
					return (me == null ? void 0 : me.lego_state) ? me.lego_state : ""
				},
				ht = Z => He(Z) === "signed",
				yt = Z => je(Z).isRequesting,
				bt = Z => {
					const me = Ge(Z);
					return me && me.subscription_type ? me.subscription_type : ""
				},
				jt = Z => bt(Z) !== "",
				Ze = {
					getMembership: $,
					getMemberships: D,
					getFilteredMemberships: F,
					getAccountMembers: et,
					getAccountRoles: be
				},
				gt = Z => Z.accountSingle,
				st = (0, n.P1)("accountSingle", gt),
				lt = Z => {
					const me = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, d.V.ADMINISTRATOR];
					return (0, p.n)(Z, me)
				},
				ft = Z => (0, p.n)(Z, [d.V.BRAND_PROTECTION]),
				Le = Z => hasRole(Z, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ])
		},
		"../react/common/selectors/commonSelectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				FX: function() {
					return i
				},
				QG: function() {
					return r
				},
				TH: function() {
					return u
				},
				cZ: function() {
					return e
				}
			});

			function e(s) {
				const m = `__ACTIVE__${s}`;
				return c => {
					const l = c.application;
					return l && l.active[m]
				}
			}

			function r(s) {
				const m = `__TOGGLE__${s}`;
				return c => {
					const l = c.application;
					return l && l.toggles[m]
				}
			}

			function i(s) {
				return s && s.paginationData && s.paginationData.info && s.paginationData.info.total_count ? s.paginationData.info.total_count : 0
			}
			const u = s => s.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$f: function() {
					return p
				},
				AD: function() {
					return m
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return f
				},
				Ci: function() {
					return oe
				},
				DA: function() {
					return Ke
				},
				E6: function() {
					return _
				},
				Gy: function() {
					return We
				},
				Hq: function() {
					return Re
				},
				Ms: function() {
					return A
				},
				Mx: function() {
					return ee
				},
				Nb: function() {
					return De
				},
				Pj: function() {
					return it
				},
				Q2: function() {
					return c
				},
				Qq: function() {
					return ne
				},
				Td: function() {
					return g
				},
				Z: function() {
					return pe
				},
				a: function() {
					return T
				},
				a5: function() {
					return x
				},
				c7: function() {
					return ce
				},
				du: function() {
					return v
				},
				ec: function() {
					return q
				},
				f: function() {
					return Oe
				},
				fo: function() {
					return ae
				},
				hL: function() {
					return z
				},
				ji: function() {
					return ie
				},
				jo: function() {
					return D
				},
				l9: function() {
					return Fe
				},
				lI: function() {
					return s
				},
				p1: function() {
					return I
				},
				pK: function() {
					return ke
				},
				pf: function() {
					return o
				},
				qR: function() {
					return E
				},
				rV: function() {
					return l
				},
				u1: function() {
					return n
				},
				w4: function() {
					return a
				},
				yD: function() {
					return Y
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function i(G, be) {
				return G && G[be]
			}
			const u = G => !s(G).isRequesting;

			function s(G) {
				return G.entitlements.zone
			}

			function m(G) {
				return s(G).data
			}
			const c = G => {
				var be, Be;
				return ((be = s(G).paginationData) === null || be === void 0 || (Be = be.options) === null || Be === void 0 ? void 0 : Be.editedDate) || {}
			};

			function l(G, be) {
				const Be = m(G);
				return Be ? i(Be, be) : void 0
			}
			const v = (G, be) => l(G, be) === !0;

			function n(G) {
				return G.entitlements.account
			}

			function o(G) {
				return n(G).data
			}
			const a = G => {
				var be, Be;
				return ((be = n(G).paginationData) === null || be === void 0 || (Be = be.options) === null || Be === void 0 ? void 0 : Be.editedDate) || {}
			};

			function _(G) {
				return !n(G).isRequesting
			}

			function d(G, be) {
				const Be = o(G);
				return Be ? i(Be, be) : void 0
			}

			function p(G, be) {
				return d(G, be) === !0
			}

			function h(G, be) {
				return be.every(Be => p(G, Be))
			}

			function I(G) {
				return p(G, "contract.customer_enabled")
			}

			function E(G) {
				return p(G, "contract.self_service_allowed")
			}

			function g(G) {
				return p(G, "billing.partners_managed")
			}
			const T = G => I(G) && E(G),
				f = G => p(G, "enterprise.ecp_allowed");

			function b(G) {
				return O(G) || p(G, "argo.allow_smart_routing") || p(G, "argo.allow_tiered_caching") || p(G, "rate_limiting.enabled") || p(G, "ctm.enabled") || p(G, "workers.enabled") || p(G, "workers.kv_store.enabled") || p(G, "stream.enabled")
			}
			const O = G => v(G, "argo.allow_smart_routing") || v(G, "argo.allow_tiered_caching"),
				A = G => p(G, "zone.partial_setup_allowed") || v(G, "zone.partial_setup_allowed"),
				D = G => p(G, "argo.allow_smart_routing") || v(G, "argo.allow_smart_routing"),
				M = G => p(G, "argo.allow_tiered_caching") || v(G, "argo.allow_tiered_caching"),
				w = G => D(G) || M(G),
				S = G => p(G, "ctm.enabled"),
				R = G => {
					const be = d(G, "ctm.load_balancers");
					return typeof be == "number" ? be : 0
				},
				L = G => {
					const be = d(G, "ctm.pools");
					return typeof be == "number" ? be : 0
				},
				K = G => {
					const be = d(G, "ctm.origins");
					return typeof be == "number" ? be : 0
				},
				q = G => p(G, "workers.enabled"),
				X = G => p(G, "stream.enabled"),
				J = G => {
					const be = d(G, "access.users_allowed");
					return typeof be == "number" ? be : 0
				},
				$ = G => J(G) > 0,
				W = G => {
					const be = l(G, "dedicated_certificates");
					return typeof be == "number" ? be : 0
				},
				H = G => W(G) > 0,
				U = G => {
					const be = l(G, "rate_limiting.max_rules");
					return typeof be == "number" ? be : 0
				},
				P = G => p(G, "rate_limiting.enabled"),
				N = G => {
					const be = l(G, "page_rules");
					return typeof be == "number" ? be : 0
				},
				F = G => N(G) > 0,
				te = G => {
					const be = d(G, "dns_firewall.max_clusters_allowed");
					return typeof be == "number" ? be : 0
				},
				oe = G => te(G) > 0,
				ie = G => v(G, "zone.advanced_certificate_manager") || p(G, "zone.advanced_certificate_manager"),
				Y = G => l(G, "authoritative_dns.proxy_record_allowed") === !1 || d(G, "authoritative_dns.proxy_record_allowed") === !1,
				pe = G => p(G, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				z = G => l(G, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				x = G => {
					const be = l(G, "authoritative_dns.min_record_ttl_allowed");
					return typeof be == "number" && be > 1 ? be : 60
				},
				ee = G => {
					const be = d(G, r.yt);
					return typeof be == "number" ? be : 0
				},
				ne = G => p(G, "foundation_dns.advanced_nameservers_allowed") || v(G, "foundation_dns.advanced_nameservers_allowed"),
				ce = G => p(G, "authoritative_dns.account_custom_nameservers_allowed"),
				ye = G => v(G, "authoritative_dns.zone_custom_nameservers_allowed"),
				ae = G => ye(G) || ce(G),
				Oe = (G, be) => ((0, e.el)(window.location.pathname) ? l : d)(G, be),
				De = G => ((0, e.el)(window.location.pathname) ? m : o)(G),
				Re = G => p(G, "authoritative_dns.multi_provider_allowed") || v(G, "authoritative_dns.multi_provider_allowed"),
				We = G => v(G, "authoritative_dns.cname_flattening_allowed"),
				ke = G => p(G, "secondary_dns.secondary_overrides") || v(G, "secondary_dns.secondary_overrides"),
				it = G => p(G, "authoritative_dns.custom_soa_allowed") || v(G, "authoritative_dns.custom_soa_allowed"),
				Ke = G => p(G, "authoritative_dns.custom_ns_ttl_allowed") || v(G, "authoritative_dns.custom_ns_ttl_allowed"),
				et = G => p(G, "secondary.create_zone"),
				Fe = G => ne(G) || ce(G) || Re(G) || et(G) || ke(G) || it(G) || Ke(G)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return s
				},
				v: function() {
					return m
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const s = c => {
				if ((0, u.gm)()) return i.Z.set(e.ly, e.ZW), e.ZW;
				const l = c.userCommPreferences.data;
				if (l == null ? void 0 : l["language-locale"]) return (0, e.i_)(l["language-locale"]), l["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const v = (0, e.Kd)();
					return m(v) ? v : e.ZW
				}
			};

			function m(c) {
				const l = Object.keys(r.Q).find(v => r.Q[v] === c);
				return !!c && typeof c == "string" && l != null && (0, e.S8)(l)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return s
				},
				BG: function() {
					return v
				},
				BY: function() {
					return g
				},
				GP: function() {
					return d
				},
				GU: function() {
					return T
				},
				PR: function() {
					return i
				},
				h$: function() {
					return I
				},
				h8: function() {
					return n
				},
				kk: function() {
					return h
				},
				l8: function() {
					return c
				},
				mV: function() {
					return p
				},
				vW: function() {
					return m
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = f => f.user,
				i = (0, e.P1)("user", r),
				u = f => {
					var b;
					return (b = i(f)) === null || b === void 0 ? void 0 : b.email.endsWith("@cloudflare.com")
				},
				s = f => {
					var b;
					return !!((b = i(f)) === null || b === void 0 ? void 0 : b.id)
				},
				m = f => {
					const b = i(f);
					if (!!b) return b.first_name && b.last_name ? `${b.first_name} ${b.last_name}` : b.email
				},
				c = f => {
					const b = i(f);
					return b && b.has_enterprise_zones
				},
				l = f => f.userCommPreferences,
				v = (0, e.P1)("userCommPreferences", l),
				n = f => {
					const b = i(f);
					return b && b.email_verified
				},
				o = f => {
					const b = v(f);
					return b && b.preferences.marketing_communication
				},
				a = f => f.userDetails,
				_ = (0, e.P1)("userDetails", a),
				d = f => {
					const b = _(f);
					return b && b["2FA-RECOVERY"] === "scheduled"
				},
				p = f => {
					const b = _(f);
					return b && b["2FA-RECOVERY"] === "interrupted"
				},
				h = f => {
					const b = _(f);
					return b == null ? void 0 : b["NEW-USER-EMAIL"]
				},
				I = f => f.gates.assignments,
				E = (f, b) => f && f[b];

			function g(f, b) {
				const O = I(f);
				return O ? E(O, b) : void 0
			}
			const T = (f, b) => g(f, b) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return A
				},
				$t: function() {
					return nt
				},
				A4: function() {
					return I
				},
				Cu: function() {
					return E
				},
				DQ: function() {
					return ce
				},
				Ej: function() {
					return w
				},
				FH: function() {
					return T
				},
				ID: function() {
					return N
				},
				Iu: function() {
					return h
				},
				Ko: function() {
					return ke
				},
				Le: function() {
					return Oe
				},
				Ly: function() {
					return Y
				},
				M3: function() {
					return G
				},
				N8: function() {
					return Fe
				},
				NY: function() {
					return ee
				},
				Ns: function() {
					return oe
				},
				Ox: function() {
					return Ae
				},
				P4: function() {
					return S
				},
				RO: function() {
					return U
				},
				Tr: function() {
					return We
				},
				U: function() {
					return g
				},
				Ug: function() {
					return b
				},
				V6: function() {
					return be
				},
				WR: function() {
					return rt
				},
				Xg: function() {
					return p
				},
				ZB: function() {
					return ae
				},
				_y: function() {
					return F
				},
				bR: function() {
					return M
				},
				cU: function() {
					return it
				},
				cg: function() {
					return ne
				},
				d2: function() {
					return J
				},
				il: function() {
					return ie
				},
				jN: function() {
					return L
				},
				jg: function() {
					return z
				},
				kC: function() {
					return D
				},
				kf: function() {
					return Be
				},
				ko: function() {
					return H
				},
				mK: function() {
					return dt
				},
				nA: function() {
					return d
				},
				oY: function() {
					return R
				},
				qM: function() {
					return De
				},
				rq: function() {
					return x
				},
				tS: function() {
					return O
				},
				tU: function() {
					return q
				},
				vB: function() {
					return mt
				},
				vM: function() {
					return K
				},
				wH: function() {
					return f
				},
				wn: function() {
					return ye
				},
				xU: function() {
					return X
				},
				xw: function() {
					return Re
				},
				z5: function() {
					return P
				},
				zO: function() {
					return Ke
				},
				zW: function() {
					return xe
				},
				zh: function() {
					return $
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				i = t("../../../../node_modules/lodash/get.js"),
				u = t.n(i),
				s = t("../../../../node_modules/moment/moment.js"),
				m = t.n(s),
				c = t("../react/common/constants/billing/index.ts");

			function l(Q) {
				for (var se = 1; se < arguments.length; se++) {
					var fe = arguments[se] != null ? Object(arguments[se]) : {},
						Ce = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(fe).filter(function(je) {
						return Object.getOwnPropertyDescriptor(fe, je).enumerable
					})), Ce.forEach(function(je) {
						v(Q, je, fe[je])
					})
				}
				return Q
			}

			function v(Q, se, fe) {
				return se = n(se), se in Q ? Object.defineProperty(Q, se, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[se] = fe, Q
			}

			function n(Q) {
				var se = o(Q, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function o(Q, se) {
				if (typeof Q != "object" || Q === null) return Q;
				var fe = Q[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Ce = fe.call(Q, se || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(Q)
			}
			const a = (0, r.P1)("zone", Q => Q.zone),
				_ = Q => {
					var se;
					return (se = Q.zoneVersioning) === null || se === void 0 ? void 0 : se.zoneVersionSelector
				},
				d = (0, e.P1)(a, _, (Q, se) => {
					var fe, Ce, je;
					let Ge;
					if (Array.isArray(Q) && Q.length === 1 ? Ge = Q[0] : Q && !Array.isArray(Q) && (Ge = Q), !Ge) return;
					const He = !!(se == null ? void 0 : se.enabled);
					return l({}, Ge, Ge.name && {
						name: He ? se.rootZoneName : Ge.name
					}, {
						versioning: {
							enabled: He,
							isRoot: !((fe = Ge.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: He ? se.selectedVersion : 0,
							rootZoneId: He ? se.rootZoneId : (Ce = (je = Ge) === null || je === void 0 ? void 0 : je.id) !== null && Ce !== void 0 ? Ce : ""
						}
					})
				}),
				p = Q => Q.zone,
				h = Q => Q.zone.isRequesting,
				I = (0, e.P1)(d, p, (Q, se) => ({
					data: Q,
					meta: se
				})),
				E = Q => {
					var se, fe;
					return (se = (fe = d(Q)) === null || fe === void 0 ? void 0 : fe.id) !== null && se !== void 0 ? se : ""
				},
				g = Q => Q.zones,
				T = Q => Q.zonesRoot,
				f = Q => Q.zonesAccount,
				b = (0, r.P1)("zones", g),
				O = (0, r.P1)("zonesRoot", T),
				A = (0, r.P1)("zonesAccount", f);

			function D(Q) {
				const se = d(Q);
				return se ? se.created_on : null
			}
			const M = Q => {
				var se;
				const fe = d(Q);
				return l({}, fe, {
					id: (fe == null || (se = fe.versioning) === null || se === void 0 ? void 0 : se.enabled) ? fe == null ? void 0 : fe.versioning.rootZoneId : fe == null ? void 0 : fe.id
				})
			};

			function w(Q, se, fe) {
				const Ce = D(Q);
				if (!Ce) return;
				const je = m().duration(se, fe),
					Ge = new Date(Ce),
					He = new Date(new Date().getTime() - je.asMilliseconds());
				return Ge.getTime() > He.getTime()
			}

			function S(Q) {
				const se = d(Q);
				return se ? se.status : null
			}

			function R(Q) {
				const se = d(Q);
				return se ? se.type : null
			}

			function L(Q) {
				return (Q == null ? void 0 : Q.plan_pending) ? Q == null ? void 0 : Q.plan_pending : Q == null ? void 0 : Q.plan
			}

			function K(Q) {
				const se = d(Q);
				if (!se) return;
				const fe = L(se);
				return fe && fe.legacy_id
			}

			function q(Q, se) {
				const fe = L(Q);
				return !!fe && c.Gs.indexOf(fe.legacy_id) >= c.Gs.indexOf(se)
			}

			function X(Q) {
				return !!Q && Q.status === "initializing"
			}

			function J(Q) {
				return !!Q && Q.status === "pending"
			}

			function $(Q) {
				return !!Q && Q.status === "active"
			}

			function W(Q, se) {
				if (!Q) return !1;
				const fe = L(Q);
				return !!fe && fe.legacy_id === se
			}

			function H(Q) {
				return W(Q, "enterprise")
			}
			const U = Q => H(d(Q));

			function P(Q) {
				return W(Q, "business")
			}
			const N = Q => P(d(Q));

			function F(Q) {
				return W(Q, "pro")
			}
			const te = Q => F(d(Q));

			function oe(Q) {
				return W(Q, "free")
			}
			const ie = Q => oe(d(Q));

			function Y(Q) {
				return !H(Q)
			}

			function pe(Q) {
				return Q && Q.owner
			}

			function z(Q, se) {
				const fe = pe(se);
				return !!fe && fe.type === "user" && fe.id === Q.id
			}

			function x(Q) {
				const se = d(Q);
				return !!se && se.type === "partial"
			}

			function ee(Q) {
				const se = d(Q);
				return !!se && se.type === "secondary"
			}
			const ne = Q => {
					var se;
					const fe = d(Q);
					return !!(fe == null ? void 0 : fe.host) && !!((se = fe.plan) === null || se === void 0 ? void 0 : se.externally_managed)
				},
				ce = Q => {
					const se = b(Q);
					return se && se.some(H)
				},
				ye = (Q, se) => {
					const fe = d(Q);
					return fe && fe.betas ? fe.betas.includes(se) : !1
				},
				ae = (Q, ...se) => u()(Q, ["zoneFlags", "data", ...se]),
				Oe = (Q, ...se) => u()(Q, ["accountFlags", "data", ...se]),
				De = Q => Q.accountFlags.isRequesting,
				Re = Q => Q.zoneFlags.isRequesting,
				We = (Q, ...se) => u()(Q, ["zoneFlagsChanges", "data", ...se]),
				ke = Q => Q.zoneFlagsChanges.isRequesting,
				it = Q => Q.zoneFlags && Q.zoneFlags.data,
				Ke = Q => Q.zoneFlags,
				et = (0, e.P1)(it, Ke, (Q, se) => ({
					data: Q,
					meta: se
				})),
				Fe = (0, r.P1)("abuseUrls", Q => Q.overview.abuseUrls),
				G = Q => {
					const se = d(Q);
					return se ? `/${se.account.id}/${se.name}` : null
				},
				be = Q => Q.zoneMarketingCampaigns,
				Be = Q => Q.overview.zoneBlocks.data,
				xe = Q => Q.overview.zoneBlocks.isRequesting,
				nt = Q => Q.overview.zoneBlocks.hasData,
				dt = Q => {
					var se, fe;
					return (Q == null || (se = Q.overview.zoneBlocks) === null || se === void 0 || (fe = se.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				mt = Q => Q.overview.zoneBlocksReview.isRequesting,
				Ae = Q => Q.overview.zoneHold,
				rt = (0, r.P1)("zoneHold", Ae)
		},
		"../react/common/utils/formatDate.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (r, i, u = !1) => (0, e.p6)(r, i, u)
		},
		"../react/common/utils/getEnvironment.ts": function(j, y, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				i = t("../functions/utils/constants.ts");
			const u = () => {
				var s, m, c;
				const v = e.parse(document.cookie)[i.b1];
				let n = null;
				v && (n = (0, r.E9)(v));
				let o = "production";
				switch (!0) {
					case ((s = n) === null || s === void 0 ? void 0 : s.projectType) === "canary":
						o = "canary";
						break;
					case ((m = window) === null || m === void 0 || (c = m.build) === null || c === void 0 ? void 0 : c.isPreviewDeploy):
						o = "preview";
						break
				}
				return o
			};
			y.Z = u
		},
		"../react/common/utils/hasRole.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (i, u) => {
				const {
					roles: s = []
				} = (0, e.uF)(i) || {};
				return u.some(m => s.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$K: function() {
					return c
				},
				Q$: function() {
					return i
				},
				t: function() {
					return m
				},
				v5: function() {
					return u
				},
				zE: function() {
					return s
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const i = l => l ? ["page", "per_page", "count", "total_count"].every(n => n in l && l[n]) : !1,
				u = (l = "") => e.Dy.includes(l.toLowerCase()),
				s = l => l !== null && typeof l == "object" && "name" in l && "size" in l && "type" in l && typeof l.slice == "function",
				m = l => (0, r.Z)(l),
				c = l => l != null
		},
		"../react/common/utils/oidc.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				c: function() {
					return e
				},
				e: function() {
					return r
				}
			});
			let e = function(i) {
				return i.Apple = "apple", i.Google = "google", i
			}({});
			const r = (i, u) => {
				const s = "production",
					m = `oidc${s==="staging"?"-staging":""}.iam.cfapi.net`,
					l = new URLSearchParams(window.location.search).get("login_challenge");
				let v = `https://${m}/api/v1/sso/init?client=${i}&env=${s}`;
				return u && (v = v + `&jwt=${u}`), l && (v += `&login_challenge=${encodeURIComponent(l)}`), v
			}
		},
		"../react/common/utils/useQueryCache.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(c) {
				for (var l = 1; l < arguments.length; l++) {
					var v = arguments[l] != null ? Object(arguments[l]) : {},
						n = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(v).filter(function(o) {
						return Object.getOwnPropertyDescriptor(v, o).enumerable
					})), n.forEach(function(o) {
						i(c, o, v[o])
					})
				}
				return c
			}

			function i(c, l, v) {
				return l = u(l), l in c ? Object.defineProperty(c, l, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = v, c
			}

			function u(c) {
				var l = s(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function s(c, l) {
				if (typeof c != "object" || c === null) return c;
				var v = c[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			const m = c => {
				const l = (0, e.useQueryClient)(),
					v = g => {
						var T;
						return l.getQueriesData((T = g) !== null && T !== void 0 ? T : c)
					},
					n = g => {
						var T;
						return l.getQueryData((T = g) !== null && T !== void 0 ? T : c)
					},
					o = g => {
						var T;
						return l.getQueriesData({
							queryKey: (T = g) !== null && T !== void 0 ? T : c,
							stale: !0
						})
					},
					a = (g, T) => {
						var f;
						l.setQueryData((f = T) !== null && f !== void 0 ? f : c, g)
					},
					_ = async g => {
						var T;
						await l.refetchQueries((T = g) !== null && T !== void 0 ? T : c)
					}, d = async (g, T) => {
						var f, b;
						await l.invalidateQueries((f = g) !== null && f !== void 0 ? f : c, r({
							refetchActive: !1
						}, (b = T) !== null && b !== void 0 ? b : {}))
					}, p = async (g, T) => {
						const f = g || (b => {
							var O;
							return (b == null || (O = b.queryKey) === null || O === void 0 ? void 0 : O[0]) === c
						});
						await l.invalidateQueries(r({
							predicate: f,
							refetchActive: !1,
							refetchInactive: !1
						}, T))
					};
				return {
					refetch: _,
					cancelData: async () => {
						await l.cancelQueries(c)
					},
					invalidate: d,
					setData: a,
					getDataStale: o,
					getData: v,
					prefetchQuery: (g, T) => {
						var f;
						return l.prefetchQuery((f = T) !== null && f !== void 0 ? f : c, g)
					},
					getQueryData: n,
					predicateInvalidate: p,
					batchInvalidate: async ({
						queryKeysToInvalidate: g = [],
						queryKeysToPredicateInvalidate: T = [],
						refetchActive: f = !1,
						refetchInactive: b = !1
					}) => {
						const O = g.map(D => d(D)),
							A = T.map(D => p(M => {
								var w;
								return (M == null || (w = M.queryKey) === null || w === void 0 ? void 0 : w[0]) === D
							}, {
								refetchActive: f,
								refetchInactive: b
							}));
						await Promise.all([...O, ...A])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(j, y, t) {
			"use strict";
			t.d(y, {
				K2: function() {
					return r
				},
				Lb: function() {
					return i
				},
				XI: function() {
					return u
				},
				bK: function() {
					return l
				},
				jk: function() {
					return c
				},
				wb: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = v => /^https?:\/\/(.*)/.test(v),
				i = v => e.default.hostname.test(v),
				u = v => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(v),
				s = v => /^[!-~]+$/.test(v),
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = v => m.test(v),
				l = v => !!v && !!v.length && /^[ -~]+$/.test(v)
		},
		"../react/pages/abuse/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Cg: function() {
					return _
				},
				EO: function() {
					return l
				},
				Iy: function() {
					return c
				},
				RV: function() {
					return a
				},
				R_: function() {
					return m
				},
				Vq: function() {
					return g
				},
				Y0: function() {
					return E
				},
				bL: function() {
					return f
				},
				bx: function() {
					return I
				},
				dM: function() {
					return O
				},
				dV: function() {
					return b
				},
				eM: function() {
					return o
				},
				i9: function() {
					return s
				},
				nq: function() {
					return p
				},
				pj: function() {
					return n
				},
				to: function() {
					return T
				},
				xR: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				i = t("../react/pages/abuse/abuse.translations.ts"),
				u = t("../react/pages/abuse/types.ts");
			const s = "customer-abuse-reports-table-filter-bar",
				m = "abuse-reports-table-tooltip",
				c = "abuse-reports-cache-rate-limits-table-tooltip",
				l = "abuse-reports-blocks-tables-tooltip",
				v = "customer-abuse-reports-table-filter-bar",
				n = {
					LIST_MITIGATIONS: "com.cloudflare.api.account.abuse-reports.mitigations.list",
					APPEAL_ACTIVE_BLOCKS: "com.cloudflare.api.account.zone.blocks.request-review",
					APPEAL_PENDING_BLOCKS: "com.cloudflare.api.account.abuse-reports.actions.request-review",
					APPEAL_MITIGATIONS: "com.cloudflare.api.account.abuse-reports.mitigations.appeal",
					LIST_REPORTS: "com.cloudflare.api.account.abuse-reports.list",
					READ_REPORT: "com.cloudflare.api.account.abuse-reports.read"
				},
				o = {
					abuse: (0, r.BC)`/${"accountId"}/abuse-reports`,
					abuseReport: (0, r.BC)`/${"accountId"}/abuse-reports/report/${"reportId"}`,
					abuseReportTab: (0, r.BC)`/${"accountId"}/abuse-reports/report/${"reportId"}/${"tab"}`
				};
			let a = function(A) {
				return A.BLOCKED_CONTENT = "blocked-content", A.CACHE_RATE_LIMITS = "cache-rate-limits", A
			}({});
			const _ = [{
					title: i.keys.tab_titles.blocked_content,
					url: `/${a.BLOCKED_CONTENT}`
				}, {
					title: i.keys.tab_titles.cache_rate_limits,
					url: `/${a.CACHE_RATE_LIMITS}`
				}],
				d = {
					accepted: "gray",
					in_review: "gray"
				},
				p = {
					active: "red",
					cancelled: "gray",
					in_review: "blue",
					pending: "orange",
					removed: "gray"
				},
				h = null,
				I = ["active", "cancelled", "in_review", "pending", "removed"],
				E = ["accepted", "in_review"];
			let g = function(A) {
				return A.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", A.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", A.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", A.CLICK_ABUSE_REPORT_ID = "click abuse report id", A.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", A.ADD_FILTER = "Add filter", A.REMOVE_FILTER = "Remove filter", A.REMOVE_ALL_FILTERS = "Remove all filters", A.NEXT_PAGE = "go to next page", A.PREV_PAGE = "go to prev page", A.GO_TO_PAGE = "go to page", A.SET_PAGE_SIZE = "set page size", A.COPY_TABLE_CELL = "copy table cell", A
			}({});
			const T = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: u.mu.CDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [u.mu.Domain, u.mu.Status, u.mu.Type],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: u.mu.Domain,
						f2: u.mu.Status,
						f3: u.mu.Type,
						f4: "startDate",
						f5: "endDate",
						f6: "timeWindow"
					}
				},
				f = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: u.XO.EffectiveDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [u.XO.Status],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: u.XO.Status,
						f2: "startDate",
						f3: "endDate",
						f4: "timeWindow"
					}
				},
				b = {
					initialPaginationState: {
						page: 1,
						perPage: 5
					},
					initialToolbarState: {},
					initialSortState: {
						name: u.DT.EnforcementDate,
						direction: e.Sr.desc
					}
				},
				O = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: u.DT.CreatedDate,
						direction: e.Sr.desc
					}
				}
		},
		"../react/pages/abuse/types.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				DT: function() {
					return u
				},
				MY: function() {
					return i
				},
				XO: function() {
					return e
				},
				Zy: function() {
					return l
				},
				mu: function() {
					return n
				},
				ut: function() {
					return s
				}
			});
			let e = function(o) {
				return o.Type = "type", o.EffectiveDate = "effective_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
			}({});
			const r = null,
				i = {
					BLOCK_URL: "block_url",
					RATE_LIMIT_CACHE: "rate_limit_cache",
					ACCOUNT_SUSPEND: "account_suspend"
				};
			let u = function(o) {
					return o.BlockType = "blockType", o.CreatedDate = "created", o.EnforcementDate = "enforcement_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
				}({}),
				s = function(o) {
					return o.JIRA = "jira", o.ZENDESK = "zendesk", o.ABUSE_REPORT = "abuse_report", o.CSAM_MATCH = "csam_match", o
				}({}),
				m = function(o) {
					return o.ID = "id", o.DOMAIN = "domain", o.CREATED_BEFORE = "created_before", o.CREATED_AFTER = "created_after", o.STATUS = "status", o.TYPE = "type", o.MITIGATION_STATUS = "mitigation_status", o
				}({}),
				c = function(o) {
					return o.Domain = "domain", o.Status = "status", o.Type = "type", o
				}({}),
				l = function(o) {
					return o.DMCA = "DMCA", o.TRADEMARK = "TM", o.PHISHING = "PHISH", o.GENERAL = "GEN", o.REGISTRAR_WHOIS = "REG_WHO", o.EMERGENCY = "EMER", o.NCSEI = "NCSEI", o.THREAT = "THREAT", o
				}({});
			const v = [l.DMCA, l.TRADEMARK, l.PHISHING, l.GENERAL, l.REGISTRAR_WHOIS, l.EMERGENCY, l.NCSEI, l.THREAT];
			let n = function(o) {
				return o.Id = "id", o.CDate = "cdate", o.Domain = "domain", o.Type = "type", o.Status = "status", o.AcceptedUrls = "accepted_urls", o
			}({})
		},
		"../react/pages/ai-zone/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$0: function() {
					return r
				},
				A3: function() {
					return p
				},
				AG: function() {
					return s
				},
				Al: function() {
					return l
				},
				NN: function() {
					return v
				},
				Ot: function() {
					return _
				},
				PAY_PER_CRAWL: function() {
					return n
				},
				Pd: function() {
					return a
				},
				TR: function() {
					return c
				},
				UK: function() {
					return d
				},
				c1: function() {
					return i
				},
				nJ: function() {
					return e
				},
				nb: function() {
					return m
				},
				qR: function() {
					return u
				},
				zg: function() {
					return o
				}
			});
			const e = [{
					slug: "amazon-bot",
					name: "Amazonbot",
					operator: "Amazon",
					info: "https://developer.amazon.com/amazonbot",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Amazonbot",
					detectionIds: [118601807, 33563839],
					verified: !0,
					managed: !0
				}, {
					slug: "apple",
					name: "Applebot",
					operator: "Apple",
					info: "https://support.apple.com/en-us/119829",
					category: "AI Search",
					categoryId: 51,
					userAgent: "Applebot",
					detectionIds: [120424214, 33563845],
					verified: !0,
					managed: !1
				}, {
					slug: "archive-org-bot",
					name: "archive.org_bot",
					operator: "Internet Archive",
					info: "https://archive.org/details/archive.org_bot",
					category: "Archiver",
					categoryId: 52,
					userAgent: "archive.org_bot",
					detectionIds: [131190766, 33564033],
					verified: !0,
					managed: !1
				}, {
					slug: "bing",
					name: "BingBot",
					operator: "Microsoft",
					info: "https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0",
					category: "Search Engine",
					categoryId: 1,
					userAgent: "bingbot",
					detectionIds: [117479730, 33554461],
					verified: !0,
					managed: !1
				}, {
					name: "Bytespider",
					operator: "ByteDance",
					info: "https://www.bytedance.com/en/",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Bytespider",
					detectionIds: [33563853],
					verified: !1,
					managed: !0
				}, {
					slug: "commoncrawl",
					name: "CCBot",
					operator: "Common Crawl",
					info: "https://commoncrawl.org/faq",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "CCBot",
					detectionIds: [133621792, 33563855],
					verified: !0,
					managed: !0
				}, {
					slug: "chatgpt-user",
					name: "ChatGPT-User",
					operator: "OpenAI",
					info: "https://platform.openai.com/docs/bots",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "ChatGPT-User",
					detectionIds: [132995013, 33563857],
					verified: !0,
					managed: !1
				}, {
					name: "ClaudeBot",
					operator: "Anthropic",
					info: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "ClaudeBot",
					detectionIds: [33563859],
					verified: !1,
					managed: !0
				}, {
					name: "Claude-SearchBot",
					operator: "Anthropic",
					info: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Claude-SearchBot",
					detectionIds: [33564301],
					verified: !1,
					managed: !0
				}, {
					name: "Claude-User",
					operator: "Anthropic",
					info: "https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Claude-User",
					detectionIds: [33564303],
					verified: !1,
					managed: !0
				}, {
					slug: "duckassistbot",
					name: "DuckAssistBot",
					operator: "DuckDuckGo",
					info: "https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "DuckAssistBot",
					detectionIds: [126666910, 33564037],
					verified: !0,
					managed: !1
				}, {
					name: "FacebookBot",
					operator: "Meta",
					info: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers/",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "FacebookBot",
					detectionIds: [33563972],
					verified: !1,
					managed: !0
				}, {
					slug: "google",
					name: "Googlebot",
					operator: "Google",
					info: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers#googlebot",
					category: "Search Engine",
					categoryId: 1,
					userAgent: "Googlebot",
					detectionIds: [120623194, 33554459],
					verified: !0,
					managed: !1
				}, {
					slug: "google-cloudvertexbot",
					name: "Google-CloudVertexBot",
					operator: "Google",
					info: "https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers#google-cloudvertexbot",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Google-CloudVertexBot",
					detectionIds: [133730073, 33564321],
					verified: !0,
					managed: !0
				}, {
					slug: "gptbot",
					name: "GPTBot",
					operator: "OpenAI",
					info: "https://platform.openai.com/docs/bots",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "GPTBot",
					detectionIds: [123815556, 33563875],
					verified: !0,
					managed: !0
				}, {
					slug: "meta-externalagent",
					name: "Meta-ExternalAgent",
					operator: "Meta",
					info: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "meta-externalagent",
					detectionIds: [124581738, 33563982],
					verified: !0,
					managed: !0
				}, {
					slug: "meta-externalfetcher",
					name: "Meta-ExternalFetcher",
					operator: "Meta",
					info: "https://developers.facebook.com/docs/sharing/webmasters/web-crawlers",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "meta-externalfetcher",
					detectionIds: [132272919, 33563980],
					verified: !0,
					managed: !1
				}, {
					slug: "mistralai-user",
					name: "MistralAI-User",
					operator: "Mistral",
					info: "https://docs.mistral.ai/robots/",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "MistralAI-User",
					detectionIds: [128950951, 33564323],
					verified: !0,
					managed: !1
				}, {
					slug: "oai-searchbot",
					name: "OAI-SearchBot",
					operator: "OpenAI",
					info: "https://platform.openai.com/docs/bots",
					category: "AI Search",
					categoryId: 51,
					userAgent: "OAI-SearchBot",
					detectionIds: [126255384, 33563986],
					verified: !0,
					managed: !1
				}, {
					slug: "chatgpt-operator",
					name: "Operator",
					operator: "OpenAI",
					info: "https://openai.com/index/introducing-operator/",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "Operator",
					detectionIds: [129220581],
					verified: !0,
					managed: !1,
					botManagement: !0
				}, {
					slug: "perplexity",
					name: "PerplexityBot",
					operator: "Perplexity",
					info: "https://docs.perplexity.ai/guides/bots",
					category: "AI Search",
					categoryId: 51,
					userAgent: "PerplexityBot",
					detectionIds: [120176742, 33563889],
					verified: !0,
					managed: !1
				}, {
					slug: "perplexity-user",
					name: "Perplexity-User",
					operator: "Perplexity",
					info: "https://docs.perplexity.ai/guides/bots",
					category: "AI Assistant",
					categoryId: 47,
					userAgent: "Perplexity-User",
					detectionIds: [126871775, 33564371],
					verified: !0,
					managed: !1
				}, {
					slug: "petalbot",
					name: "PetalBot",
					operator: "Huawei",
					info: "https://aspiegel.com/petalbot",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "PetalBot",
					detectionIds: [124150991, 33564369],
					verified: !0,
					managed: !0
				}, {
					slug: "gist-ai-web-bot-auth",
					name: "ProRataInc",
					operator: "ProRata.ai",
					info: "https://gist.ai/",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "ProRataInc",
					detectionIds: [117766436],
					verified: !1,
					managed: !1
				}, {
					name: "Timpibot",
					operator: "Timpi",
					category: "AI Crawler",
					categoryId: 13,
					userAgent: "Timpibot",
					detectionIds: [33564051],
					verified: !1,
					managed: !0
				}],
				r = [...new Set([...e.map(h => h.operator)])].sort((h, I) => h.localeCompare(I)),
				i = [...new Set([...e.map(h => h.category)])].sort((h, I) => h.localeCompare(I)),
				u = [...new Set([...e.map(h => h.userAgent)])].sort((h, I) => h.localeCompare(I)),
				s = [...new Set([...e.flatMap(h => h.detectionIds)])].sort(),
				m = ["past_24h", "past_7d", "past_14d", "past_month"],
				c = "[CF AI Audit]",
				l = "AI Audit - Block AI bots by User Agent",
				v = "AI Audit - Block AI bots by Bot Detection IDs",
				n = {
					entitlements: {
						publisher: "pay_per_crawl.publisher_enabled",
						operator: "pay_per_crawl.operator_enabled"
					},
					currency: {
						code: "USD",
						symbol: "$"
					},
					minPrice: .01,
					tooltips: {
						payPerCrawlDisabled: "pay-per-crawl-disabled-tooltip",
						stripeRequired: "pay-per-crawl-stripe-required-tooltip",
						termsRequired: "pay-per-crawl-terms-required-tooltip"
					}
				},
				o = "618578",
				a = ["/robots.txt", "/crawlers.json", "/security.txt", "/.well-known/security.txt", "/ads.txt"],
				_ = "\u2014",
				d = {
					Google: ["google.com", "youtube.com"],
					Microsoft: ["bing.com", "msn.com", "microsoft.com"],
					Meta: ["facebook.com", "instagram.com", "whatsapp.com", "meta.com"],
					Amazon: ["amazon.com", "aws.amazon.com", "alexa.com"],
					Apple: ["apple.com", "icloud.com", "me.com", "mac.com"],
					OpenAI: ["openai.com", "chatgpt.com"],
					Anthropic: ["anthropic.com", "claude.ai"],
					"Internet Archive": ["archive.org"],
					"Common Crawl": ["commoncrawl.org"],
					ByteDance: ["bytedance.com", "tiktok.com", "douyin.com"],
					DuckDuckGo: ["duckduckgo.com", "duck.com"],
					Mistral: ["mistral.ai"],
					Perplexity: ["perplexity.ai"],
					Huawei: ["huawei.com", "huaweicloud.com"],
					"ProRata.ai": ["prorata.ai"],
					Timpi: ["timpi.io"]
				};
			let p = function(h) {
				return h.BOT_ACTION_CHANGED = "change bot action", h.TERMS_DECISION = "decide terms acceptance", h.STRIPE_CONNECT = "connect stripe account", h.STRIPE_ACCOUNT_VIEWED = "view stripe account", h.PPC_STATUS_CHANGED = "toggle pay per crawl", h.PPC_PRICE_CHANGED = "update crawl price", h.ADD_FILTER = "Add filter", h.REMOVE_FILTER = "Remove filter", h.REMOVE_ALL_FILTERS = "Remove all filters", h.CHANGE_TIME = "Change time window", h
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(j, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return u
				},
				GA: function() {
					return v
				},
				hT: function() {
					return m
				},
				p6: function() {
					return i
				},
				qc: function() {
					return s
				},
				w9: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e);
			const i = a => r().utc(a).format("YYYY-MM-DD"),
				u = a => r().utc(a).format(),
				s = a => r().utc(a).startOf("minute").format(),
				m = a => new Date(a),
				c = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				l = a => {
					const _ = a / 60 / 60 / 1e3;
					return c[Object.keys(c).sort((d, p) => p - d).find(d => _ >= d)]
				},
				v = (a, _ = d => d.avg && d.avg.sampleInterval ? d.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((d, p) => d + _(p), 0) / a.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				o = a => n[a]
		},
		"../react/pages/analytics/eos/resources/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				f: function() {
					return e
				}
			});
			const e = {
				ADD_FILTER: "Add filter",
				EDIT_FILTER: "Edit filter",
				REMOVE_FILTER: "Remove filter",
				CHANGE_TIME: "Change time window",
				REMOVE_COLUMN: "Remove column",
				ADD_COLUMN: "Add column",
				QUERY_LOGS: "Click query logs",
				SAVE_QUERY: "Save query",
				USE_SAVED_QUERY: "Use saved query",
				CHANGE_DATASET: "Change dataset",
				CHANGE_LIMIT: "Change limit",
				USE_CUSTOM_SQL: "Click use custom sql",
				USE_BASIC_EDITOR: "Click use basic editor",
				VIEW_DETAILS: "Click view details"
			}
		},
		"../react/pages/blocked-content/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				BW: function() {
					return v
				},
				Gk: function() {
					return p
				},
				Jr: function() {
					return n
				},
				LA: function() {
					return a
				},
				Wk: function() {
					return d
				},
				_V: function() {
					return l
				},
				c5: function() {
					return _
				},
				om: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				i = t("../react/pages/blocked-content/types.ts");

			function u(h) {
				for (var I = 1; I < arguments.length; I++) {
					var E = arguments[I] != null ? Object(arguments[I]) : {},
						g = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(E).filter(function(T) {
						return Object.getOwnPropertyDescriptor(E, T).enumerable
					})), g.forEach(function(T) {
						s(h, T, E[T])
					})
				}
				return h
			}

			function s(h, I, E) {
				return I = m(I), I in h ? Object.defineProperty(h, I, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[I] = E, h
			}

			function m(h) {
				var I = c(h, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function c(h, I) {
				if (typeof h != "object" || h === null) return h;
				var E = h[Symbol.toPrimitive];
				if (E !== void 0) {
					var g = E.call(h, I || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(h)
			}
			const l = "blocked-content-table-tooltip",
				v = {
					account: {
						basePage: (0, r.BC)`/${"accountId"}/blocked-content`,
						[i.$E.Active]: (0, r.BC)`/${"accountId"}/blocked-content/active`,
						[i.$E.Pending]: (0, r.BC)`/${"accountId"}/blocked-content/pending`
					},
					securityCenter: {
						basePage: (0, r.BC)`/${"accountId"}/security-center/blocked-content`,
						[i.$E.Active]: (0, r.BC)`/${"accountId"}/security-center/blocked-content/active`,
						[i.$E.Pending]: (0, r.BC)`/${"accountId"}/security-center/blocked-content/pending`
					}
				},
				n = [{
					category: i.$E.Pending,
					title: "security_center.blocked_content.pending_tab",
					url: "/pending"
				}, {
					category: i.$E.Active,
					title: "security_center.blocked_content.active_tab",
					url: "/active"
				}],
				o = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					cancelled: "gray"
				},
				a = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				_ = {
					[i.$E.Active]: [i.M3.Active, i.M3.InReview],
					[i.$E.Pending]: [i.M3.Pending, i.M3.Cancelled]
				},
				d = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: i.fL.EnforcementDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(i.GH)
					},
					filters: Object.values(i.GH).reduce((h, I) => u({}, h, {
						[I]: I
					}), {})
				};
			let p = function(h) {
				return h.COPY_URL = "copy blocked content url", h.REQUEST_REVIEW = "request blocked content review", h.ADD_FILTER = "Add filter", h.REMOVE_FILTER = "Remove filter", h
			}({})
		},
		"../react/pages/blocked-content/types.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return e
				},
				GH: function() {
					return s
				},
				Ib: function() {
					return i
				},
				M3: function() {
					return r
				},
				Qy: function() {
					return u
				},
				fL: function() {
					return m
				}
			});
			let e = function(l) {
					return l.Pending = "pending", l.Active = "active", l
				}({}),
				r = function(l) {
					return l.Active = "active", l.InReview = "in_review", l.Pending = "pending", l.Cancelled = "cancelled", l
				}({});
			const i = [r.Pending, r.Cancelled],
				u = [r.Active, r.InReview];
			let s = function(l) {
					return l.Domain = "domain", l.Status = "status", l.BlockType = "blockType", l
				}({}),
				m = function(l) {
					return l.CreatedDate = "created", l.EnforcementDate = "enforcementDate", l.BlockType = "blockType", l.Hostname = "hostname", l.Status = "status", l
				}({}),
				c = function(l) {
					return l.Removed = "removed", l.Misclassified = "misclassified", l
				}({})
		},
		"../react/pages/caching/tracking.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CACHE_PURGE = "submit custom purge", r.TIERED_CACHE = "select tiered cache topology", r.CACHE_ANALYTICS = "load cache analytics data", r.CHANGED_ZONE_SETTINGS = "change zone setting", r
			}({})
		},
		"../react/pages/d1/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				H: function() {
					return i
				},
				_: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
					root: (0, e.BC)`/${"accountId"}/workers/d1`,
					createDatabase: (0, e.BC)`/${"accountId"}/workers/d1/create`,
					databaseDetails: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}`,
					databaseSettings: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/settings`,
					databaseConsole: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/console`,
					backups: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/backups`,
					metrics: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/metrics`,
					timeTravel: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/time-travel`,
					createTable: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/createTable`,
					tables: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables`,
					tableDetails: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}`,
					tableInsertData: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}/new`,
					tableUpdateData: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/tables/${"tableName"}/${"primaryKeyName"}/${"primaryKeyId"}`,
					studio: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}/studio`
				},
				i = {
					databases: (0, e.BC)`/accounts/${"accountId"}/d1/database`,
					database: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}`,
					databaseLimits: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/limits`,
					tables: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/table`,
					table: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/table/${"tableName"}`,
					query: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/query`,
					raw: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/raw`,
					backups: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/backup`,
					restore: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/backup/${"backupId"}/restore`,
					download: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/backup/${"backupId"}/download`,
					bookmark: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/time_travel/bookmark`,
					restoreBookmark: (0, e.BC)`/accounts/${"accountId"}/d1/database/${"databaseId"}/time_travel/restore`
				}
		},
		"../react/pages/dns/api.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				BI: function() {
					return I
				},
				Q8: function() {
					return a
				},
				YJ: function() {
					return _
				},
				hs: function() {
					return v
				},
				mW: function() {
					return p
				},
				u1: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function u(E) {
				for (var g = 1; g < arguments.length; g++) {
					var T = arguments[g] != null ? Object(arguments[g]) : {},
						f = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(T).filter(function(b) {
						return Object.getOwnPropertyDescriptor(T, b).enumerable
					})), f.forEach(function(b) {
						s(E, b, T[b])
					})
				}
				return E
			}

			function s(E, g, T) {
				return g = m(g), g in E ? Object.defineProperty(E, g, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[g] = T, E
			}

			function m(E) {
				var g = c(E, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function c(E, g) {
				if (typeof E != "object" || E === null) return E;
				var T = E[Symbol.toPrimitive];
				if (T !== void 0) {
					var f = T.call(E, g || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(E)
			}
			const l = {
					settings: (0, i.BC)`/zones/${"zoneId"}/dns_settings`
				},
				v = {
					fetchZoneDnsSettings: async E => {
						try {
							return (await (0, e.get)(l.settings.toUrl({
								zoneId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					patchZoneDnsSettings: async (E, g) => await (0, e.patch)(l.settings.toUrl({
						zoneId: E
					}), {
						body: g
					})
				},
				n = {
					settings: (0, i.BC)`/accounts/${"accountId"}/dns_settings`
				},
				o = {
					fetchAccountDnsSettings: async E => {
						try {
							return (await (0, e.get)(n.settings.toUrl({
								accountId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					patchAccountDnsSettings: async (E, g) => await (0, e.patch)(n.settings.toUrl({
						accountId: E
					}), {
						body: g
					})
				},
				a = {
					dns_records: (0, i.BC)`/zones/${"zoneId"}/dns_records`,
					batch: (0, i.BC)`/zones/${"zoneId"}/dns_records/batch`
				},
				_ = {
					getMaxRecords: async (E, g, T, f, b) => {
						var O;
						return (O = (await (0, e.get)(a.dns_records.toUrl({
							zoneId: E
						}), {
							parameters: u({
								per_page: g
							}, f ? {
								search: f
							} : {}, b || {}, T)
						})).body) === null || O === void 0 ? void 0 : O.result
					},
					deleteRecords: async (E, g) => await (0, e.post)(a.batch.toUrl({
						zoneId: E
					}), {
						body: {
							deletes: g
						}
					}),
					patchRecords: async (E, g) => await (0, e.post)(a.batch.toUrl({
						zoneId: E
					}), {
						body: {
							patches: g
						}
					})
				},
				d = {
					custom_ns: (0, i.BC)`/zones/${"zoneId"}/custom_ns`,
					zone: (0, i.BC)`/zones/${"zoneId"}`
				},
				p = {
					fetchZoneCustomNs: async E => {
						try {
							return (await (0, e.get)(d.custom_ns.toUrl({
								zoneId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					fetchZoneVanityNameservers: async E => {
						try {
							return (await (0, e.get)(d.zone.toUrl({
								zoneId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					createZoneCustomNameserver: async (E, g) => await (0, e.patch)(d.zone.toUrl({
						zoneId: E
					}), {
						body: {
							vanity_name_servers: g
						}
					}),
					assignZoneCustomNsSet: async (E, g) => await (0, e.put)(d.custom_ns.toUrl({
						zoneId: E
					}), {
						body: {
							enabled: !0,
							ns_set: g
						}
					}),
					disableZoneCustomNs: async E => await (0, e.put)(d.custom_ns.toUrl({
						zoneId: E
					}), {
						body: {
							enabled: !1
						}
					})
				},
				h = {
					custom_ns: (0, i.BC)`/accounts/${"accountId"}/custom_ns`,
					delete: (0, i.BC)`/accounts/${"accountId"}/custom_ns/${"nsName"}`
				},
				I = {
					fetchAccounCustomNs: async E => {
						try {
							return (await (0, e.get)(h.custom_ns.toUrl({
								accountId: E
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (g) {
							throw g
						}
					},
					createAccountCustomNs: async (E, g) => await (0, e.post)(h.custom_ns.toUrl({
						accountId: E
					}), {
						body: g
					}),
					deleteAccountCustomNs: async (E, g) => await (0, e.del)(h.delete.toUrl({
						accountId: E,
						nsName: g
					}))
				}
		},
		"../react/pages/dns/dns-records/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e
				},
				X: function() {
					return r
				}
			});
			let e = function(i) {
				return i.DNS_RECORD_CREATE = "create DNS records", i.DNS_RECORD_UPDATE = "update DNS records", i.DNS_RECORD_DELETE = "delete DNS records", i.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", i
			}({});
			const r = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/dns/hooks/useZoneDnsSettings.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				c: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/app/redux/index.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/pages/dns/api.ts");
			const s = "dns-zone-settings-query-key",
				m = () => {
					var c;
					const l = (0, e.useQueryClient)(),
						v = (0, r.p4)(i.nA),
						n = (c = v == null ? void 0 : v.id) !== null && c !== void 0 ? c : "",
						{
							data: o,
							isError: a,
							isLoading: _,
							refetch: d
						} = (0, e.useQuery)([n, s], () => u.hs.fetchZoneDnsSettings(n), {
							enabled: !!n,
							refetchOnWindowFocus: !1
						}),
						{
							mutate: p,
							isLoading: h,
							isSuccess: I,
							isError: E
						} = (0, e.useMutation)({
							mutationFn: g => u.hs.patchZoneDnsSettings(n, g),
							onSuccess: async () => await l.refetchQueries({
								queryKey: [n, s]
							})
						});
					return {
						zoneDnsData: o,
						isError: a,
						isLoading: _,
						isSuccess: I,
						refetch: d,
						mutateZoneDnsSettings: p,
						isUpdating: h,
						isUpdateError: E
					}
				}
		},
		"../react/pages/dns/types.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				DU: function() {
					return e
				},
				LY: function() {
					return s
				},
				Nc: function() {
					return r
				},
				U7: function() {
					return i
				},
				g9: function() {
					return u
				}
			});
			let e = function(m) {
				return m.STANDARD = "cloudflare.standard", m.RANDOM = "cloudflare.standard.random", m.FOUNDATION = "cloudflare.foundation_dns", m.CUSTOM_ACCOUNT = "custom.account", m.CUSTOM_ZONE = "custom.zone", m
			}({});
			const r = {
				[e.STANDARD]: "account.dns_settings.zone_defaults.table.standard",
				[e.RANDOM]: "account.dns_settings.zone_defaults.table.random",
				[e.FOUNDATION]: "account.dns_settings.zone_defaults.table.foundation",
				[e.CUSTOM_ACCOUNT]: "account.dns_settings.zone_defaults.table.custom"
			};
			let i = function(m) {
					return m.NAME = "queryName", m.RESPONSE_CODE = "responseCode", m.TYPE = "queryType", m.SOURCE_IP = "sourceIP", m.DESTINATION_IP = "destinationIP", m.PROTOCOL = "protocol", m.IP_VERSION = "ipVersion", m.NAME_AND_TYPE = "nameAndType", m.QUERY_TOTALS = "queryTotals", m.COLO = "coloName", m
				}({}),
				u = function(m) {
					return m.TOTAL = "total", m.PER_SECOND = "queries_per_second", m.RESPONSE_AVG = "response_average", m
				}({}),
				s = function(m) {
					return m.MNAME = "soa.mname", m.RNAME = "soa.rname", m.REFRESH = "soa.refresh", m.RETRY = "soa.retry", m.EXPIRE = "soa.expire", m.RECORD_TTL = "soa.ttl", m.MIN_TTL = "soa.min_ttl", m
				}({})
		},
		"../react/pages/email/types.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				BB: function() {
					return r
				},
				Pm: function() {
					return i
				},
				UZ: function() {
					return e
				}
			});
			let e = function(s) {
				return s.ROOT = "root", s.DSTADDRS_CARD = "dstaddrs_card", s.RULES_CARD = "rules_card", s.CATCHALL_CARD = "catchall_card", s.SETTINGS_PAGE = "settings_page", s.WORKERS_PAGE = "workers_page", s
			}({});
			const r = {
				zone: "emailRoutingZone",
				catchAllRule: "emailRoutingCatchAllRule",
				rule: "emailRoutingRule",
				rules: "emailRoutingRules",
				dstAddress: "emailRoutingDestinationAddress",
				dstAddresses: "emailRoutingDestinationAddresses",
				dnsRecord: "emailRoutingDnsRecord",
				dnsRecords: "emailRoutingDnsRecords"
			};
			let i = function(s) {
				return s[s.Verified = 0] = "Verified", s[s.Pending = 1] = "Pending", s[s.Missing = 2] = "Missing", s[s.WorkerNotFound = 3] = "WorkerNotFound", s[s.Unknown = 4] = "Unknown", s[s.Loading = 5] = "Loading", s
			}({});
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const i = r._.createAlertWithSelection,
				u = r._.editAlert,
				s = (0, e.BC)`${i}/subtype`,
				m = (0, e.BC)`${i}/stepper`,
				c = (0, e.BC)`${m}/${"stepName"}`,
				l = (0, e.BC)`${m}/details`,
				v = (0, e.BC)`${m}/data-centers`,
				n = (0, e.BC)`${m}/ramps`,
				o = (0, e.BC)`${m}/threshold`,
				a = (0, e.BC)`${m}/review`,
				_ = (0, e.BC)`${m}/confirm`,
				d = (0, e.BC)`${u}/stepper`,
				p = (0, e.BC)`${d}/${"stepName"}`,
				h = (0, e.BC)`${d}/details`,
				I = (0, e.BC)`${d}/data-centers`,
				E = (0, e.BC)`${d}/ramps`,
				g = (0, e.BC)`${d}/threshold`,
				T = (0, e.BC)`${d}/review`,
				f = (0, e.BC)`${d}/confirm`,
				b = {
					magicTunnelHealthChooseSubType: s,
					magicTunnelHealthCreateStepperBase: m,
					magicTunnelHealthCreateStepper: c,
					magicTunnelHealthCreateDetails: l,
					magicTunnelHealthCreateSelectDataCenter: v,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: o,
					magicTunnelHealthCreateReview: a,
					magicTunnelHealthCreateConfirm: _,
					magicTunnelHealthEditStepperBase: d,
					magicTunnelHealthEditStepper: p,
					magicTunnelHealthEditDetails: h,
					magicTunnelHealthEditSelectDataCenter: I,
					magicTunnelHealthEditSelectRamps: E,
					magicTunnelHealthEditSetThreshold: g,
					magicTunnelHealthEditReview: T,
					magicTunnelHealthEditConfirm: f
				};
			y.Z = b
		},
		"../react/pages/home/alerts/config.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				jk: function() {
					return a
				},
				w8: function() {
					return _
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				i = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				s = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function m(d) {
				for (var p = 1; p < arguments.length; p++) {
					var h = arguments[p] != null ? Object(arguments[p]) : {},
						I = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(h).filter(function(E) {
						return Object.getOwnPropertyDescriptor(h, E).enumerable
					})), I.forEach(function(E) {
						c(d, E, h[E])
					})
				}
				return d
			}

			function c(d, p, h) {
				return p = l(p), p in d ? Object.defineProperty(d, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = h, d
			}

			function l(d) {
				var p = v(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function v(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var I = h.call(d, p || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const n = "Notifications",
				o = "notification",
				a = m({}, e._, r._j, i._j, u._),
				_ = m({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, s.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				_j: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				i = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				s = (0, e.BC)`${r}/pagerduty`,
				m = {
					pagerDutyConnect: i,
					pagerDutyRegister: u,
					pagerDutyList: s
				};
			var c = null
		},
		"../react/pages/home/alerts/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				i = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${i}/destinations`,
				s = (0, e.BC)`${i}/create`,
				m = (0, e.BC)`${s}/${"alertType"}`,
				c = (0, e.BC)`${i}/edit/${"alertId"}`,
				l = {
					account: r,
					alerts: i,
					destinations: u,
					createAlert: s,
					createAlertWithSelection: m,
					editAlert: c
				};
			y.Z = l
		},
		"../react/pages/home/alerts/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", r
			}({})
		},
		"../react/pages/home/audit-log/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Q: function() {
					return r
				},
				v: function() {
					return e
				}
			});
			const e = "audit logs",
				r = {
					TOGGLE_V2: "toggle audit logs",
					FILTER: "filter audit logs",
					FILTER_COUNTS: "filter counts audit logs",
					TIME_RANGE_CHANGED: "Time range changed",
					API_LATENCY: "api latency detected audit logs",
					DETAILS: "Click view details",
					FEEDBACK: "send audit logs feedback"
				}
		},
		"../react/pages/home/configurations/dns-settings/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Aj: function() {
					return m
				},
				Am: function() {
					return v
				},
				Jy: function() {
					return E
				},
				Mv: function() {
					return _
				},
				WI: function() {
					return I
				},
				Wu: function() {
					return c
				},
				b8: function() {
					return l
				},
				cC: function() {
					return g
				},
				e7: function() {
					return p
				},
				gH: function() {
					return o
				},
				hV: function() {
					return d
				},
				nN: function() {
					return n
				},
				uC: function() {
					return h
				}
			});
			var e = t("../react/pages/dns/types.ts");

			function r(O) {
				for (var A = 1; A < arguments.length; A++) {
					var D = arguments[A] != null ? Object(arguments[A]) : {},
						M = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(D).filter(function(w) {
						return Object.getOwnPropertyDescriptor(D, w).enumerable
					})), M.forEach(function(w) {
						i(O, w, D[w])
					})
				}
				return O
			}

			function i(O, A, D) {
				return A = u(A), A in O ? Object.defineProperty(O, A, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[A] = D, O
			}

			function u(O) {
				var A = s(O, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function s(O, A) {
				if (typeof O != "object" || O === null) return O;
				var D = O[Symbol.toPrimitive];
				if (D !== void 0) {
					var M = D.call(O, A || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(O)
			}
			const m = ["hmac-sha512.", "hmac-sha256.", "hmac-sha1."],
				c = ["198.41.144.240/28", "198.41.150.240/28", "2a06:98c0:3601::/48", "2a06:98c0:1401::/48"],
				l = ["172.65.30.82", "172.65.50.145", "2606:4700:60:0:317:26ee:3bdf:5774", "2606:4700:60:0:35a:4be3:4144:c5ee"],
				v = "172.65.64.6",
				n = 86400,
				o = "inlineTsigCreation",
				a = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				_ = /[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,
				d = r({
					FORM_NAME: "zone_defaults_form",
					NS_ASSIGNMENT: "nameservers.type",
					NS_TTL: "ns_ttl",
					MULTIPROVIDER: "multi_provider",
					SECONDARY_OVERRIDES: "secondary_overrides"
				}, e.LY),
				p = [{
					label: "account.dns_settings.zone_defaults.configure.cf_standard",
					value: e.DU.STANDARD
				}, {
					label: "account.dns_settings.zone_defaults.configure.cf_random",
					value: e.DU.RANDOM
				}, {
					label: "account.dns_settings.zone_defaults.configure.cf_advanced",
					value: e.DU.FOUNDATION
				}, {
					label: "account.dns_settings.zone_defaults.configure.cf_custom",
					value: e.DU.CUSTOM_ACCOUNT
				}];
			let h = function(O) {
				return O.STANDARD = "standard", O.DNS_ONLY = "dns_only", O.CDN_ONLY = "cdn_only", O
			}({});
			const I = {
					foundation_dns: !1,
					multi_provider: !1,
					nameservers: {
						type: e.DU.STANDARD
					},
					ns_ttl: 86400,
					secondary_overrides: !1,
					zone_mode: h.STANDARD,
					soa: {
						mname: "ns.primaryserver.com",
						rname: "admin.example.com",
						refresh: 1e4,
						retry: 2400,
						ttl: 1800,
						min_ttl: 3600,
						expire: 604800
					}
				},
				E = {
					FOUNDATION: "https://developers.cloudflare.com/dns/foundation-dns/advanced-nameservers/",
					ZONE_DEFAULTS: "https://developers.cloudflare.com/dns/additional-options/dns-zone-defaults/",
					NS_ASSIGNMENT: "https://developers.cloudflare.com/dns/zone-setups/reference/nameserver-assignment/",
					NS_ASSIGNMENT_METHOD: "https://developers.cloudflare.com/dns/nameservers/nameserver-options/#assignment-method",
					MULTIPROVIDER: "https://developers.cloudflare.com/dns/nameservers/nameserver-options/#multi-provider-dns",
					MULTIPROVIDER_SETUP: "https://developers.cloudflare.com/dns/zone-setups/full-setup/",
					SOA: "https://www.cloudflare.com/en-gb/learning/dns/dns-records/dns-soa-record/",
					SECONDARY_OVERRIDE: "https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/proxy-traffic/",
					SECONDARY_OVERRIDE_SETUP: "https://developers.cloudflare.com/dns/zone-setups/zone-transfers/cloudflare-as-secondary/"
				},
				g = {
					CARD: "zone-defaults-card",
					TABLE: "zone-defaults-card-table",
					CELLS: {
						NS_TYPE: "zone-defaults-card-table-ns-type",
						NS_TTL: "zone-defaults-card-table-ns-ttl",
						MULTIPROVIDER: "zone-defaults-card-table-multiprovider",
						SOA: "zone-defaults-card-table-soa",
						SECONDARYOVERRIDES: "zone-defaults-card-table-secondaryoverrides"
					},
					CONFIGURATIONS: "zone-defaults-configuration-form",
					INPUT_TTL: "zone-defaults-configuration-input-ns-ttl",
					TOGGLE_MULTIPROVIDER: "zone-defaults-configuration-toggle-multiprovider",
					TOGGLE_SECONDARYOVERRIDE: "zone-defaults-configuration-toggle-secondaryoverride",
					SOA_CONFIG_FORM: "soa-records-configuration-form"
				},
				T = {
					NS_SET: "ns_set",
					NS_NAME: "ns_name",
					IPV4: "ipv4",
					IPV6: "ipv6",
					ACTION: "action",
					NAMESERVER: "nameserver",
					NAMESERVER_NAME: "Nameserver name",
					SET: "set"
				},
				f = {
					ACNS_CARD: "account-custom-nameserver-card",
					ACNS_DELETE: "account-custom-nameserver-card-delete",
					ACNS_CONFIGURE: "account-custom-nameserver-card-configure",
					ACNS_MODAL_INPUT: "account-custom-nameserver-modal-input",
					ACNS_MODAL_RADIO: "account-custom-nameserver-modal-input"
				},
				b = {
					FORM: "account-custom-ns-form",
					NS_SET: "ns_set",
					NS_NAME: "ns_name"
				}
		},
		"../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return c
				}
			});
			var e = t("../react/common/selectors/entitlementsSelectors.ts"),
				r = t("../react/pages/home/configurations/dns-settings/selectors.ts"),
				i = t("../react/pages/dns/hooks/useZoneDnsSettings.ts"),
				u = t("../react/pages/home/configurations/dns-settings/constants.ts"),
				s = t("../react/common/hooks/useScope.tsx"),
				m = t("../react/app/redux/index.ts");
			const c = v => {
					const n = (0, e.yD)(v),
						o = (0, r.Hb)(v);
					return n || o
				},
				l = () => {
					const v = useSelector(zoneIsDNSOnly),
						{
							isZoneScope: n
						} = useScope(),
						{
							zoneDnsData: o
						} = useZoneDnsSettings(),
						a = (o == null ? void 0 : o.zone_mode) === ZONE_MODES.DNS_ONLY;
					return {
						isZoneDNSEntitlementDNSOnly: v,
						isZoneSettingsModeDNSOnly: a,
						isZoneDNSOnly: n ? v || a : !1
					}
				}
		},
		"../react/pages/home/configurations/dns-settings/selectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				BJ: function() {
					return s
				},
				Hb: function() {
					return d
				},
				N$: function() {
					return l
				},
				P7: function() {
					return v
				},
				Pw: function() {
					return u
				},
				fF: function() {
					return m
				},
				gA: function() {
					return n
				},
				h3: function() {
					return i
				},
				iI: function() {
					return c
				},
				mT: function() {
					return a
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../react/pages/home/configurations/dns-settings/constants.ts");
			const i = p => p.dns.secondaryDNS.acls,
				u = (0, e.P1)("dnsAcl", i),
				s = p => p.dns.secondaryDNS.tsigs,
				m = (0, e.P1)("dnsTsig", s),
				c = p => p.dns.secondaryDNS.masters,
				l = (0, e.P1)("dnsMaster", c),
				v = p => p.dns.secondaryDNS.zoneMasters,
				n = (0, e.P1)("zoneMasters", v),
				o = p => p.dns.secondaryDNS.outgoingZoneTransfers,
				a = (0, e.P1)("dnsOutgoingZoneTransfers", o),
				_ = p => {
					var h;
					return (h = p.dns.zoneDnsSettings) === null || h === void 0 ? void 0 : h.data
				},
				d = p => {
					var h, I;
					return ((h = p.dns.zoneDnsSettings) === null || h === void 0 || (I = h.data) === null || I === void 0 ? void 0 : I.zone_mode) === r.uC.DNS_ONLY
				}
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.PEER_DNS_CREATE = "create peer server", r.PEER_DNS_UPDATE = "update peer server", r.PEER_DNS_DELETE = "delete peer server", r.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", r.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", r.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", r
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_LIST = "create list", r.DELETE_LIST = "delete list", r.ADD_LIST_ITEM = "add list item", r.DELETE_LIST_ITEM = "delete list item", r
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				AA: function() {
					return z
				},
				AN: function() {
					return ft
				},
				AY: function() {
					return he
				},
				Ac: function() {
					return Ct
				},
				Am: function() {
					return E
				},
				B2: function() {
					return P
				},
				BB: function() {
					return M
				},
				BF: function() {
					return Ce
				},
				BQ: function() {
					return gt
				},
				E8: function() {
					return Z
				},
				Fl: function() {
					return Me
				},
				Fu: function() {
					return R
				},
				Gc: function() {
					return ht
				},
				Hc: function() {
					return Wt
				},
				IO: function() {
					return st
				},
				JK: function() {
					return Ke
				},
				K: function() {
					return O
				},
				LI: function() {
					return Ze
				},
				LX: function() {
					return se
				},
				L_: function() {
					return be
				},
				Ly: function() {
					return wt
				},
				MR: function() {
					return F
				},
				Mj: function() {
					return oe
				},
				NB: function() {
					return Ot
				},
				Oe: function() {
					return zt
				},
				P5: function() {
					return Lt
				},
				PE: function() {
					return De
				},
				Pd: function() {
					return St
				},
				Pk: function() {
					return We
				},
				Pp: function() {
					return nt
				},
				Q1: function() {
					return S
				},
				Qr: function() {
					return fe
				},
				Qv: function() {
					return Re
				},
				Rp: function() {
					return Qe
				},
				S7: function() {
					return Tt
				},
				Sh: function() {
					return Ve
				},
				Sl: function() {
					return Vt
				},
				Tg: function() {
					return et
				},
				Tp: function() {
					return He
				},
				Uy: function() {
					return Mt
				},
				Vw: function() {
					return K
				},
				W3: function() {
					return Ae
				},
				WR: function() {
					return lt
				},
				WX: function() {
					return ce
				},
				XF: function() {
					return Le
				},
				Xb: function() {
					return x
				},
				Zs: function() {
					return G
				},
				_f: function() {
					return je
				},
				b4: function() {
					return ne
				},
				bc: function() {
					return Bt
				},
				c2: function() {
					return N
				},
				cE: function() {
					return $t
				},
				dh: function() {
					return xe
				},
				fE: function() {
					return Be
				},
				g7: function() {
					return Oe
				},
				hO: function() {
					return mt
				},
				hV: function() {
					return kt
				},
				hk: function() {
					return g
				},
				hr: function() {
					return ee
				},
				it: function() {
					return dt
				},
				j3: function() {
					return It
				},
				jN: function() {
					return it
				},
				jo: function() {
					return Nt
				},
				k3: function() {
					return Ft
				},
				m8: function() {
					return W
				},
				nm: function() {
					return vt
				},
				oW: function() {
					return me
				},
				pH: function() {
					return H
				},
				pi: function() {
					return $
				},
				r4: function() {
					return xt
				},
				rI: function() {
					return te
				},
				s7: function() {
					return yt
				},
				sg: function() {
					return _t
				},
				tB: function() {
					return h
				},
				tN: function() {
					return ae
				},
				u_: function() {
					return Kt
				},
				vV: function() {
					return Ge
				},
				vc: function() {
					return ke
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/moment/moment.js"),
				u = t.n(i),
				s = t("../../../common/util/types/src/api/domain.ts"),
				m = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				l = t("../react/pages/home/domain-registration/utils/domain.ts"),
				v = t("../react/pages/home/domain-registration/config.ts"),
				n = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				o = t("../react/pages/home/domain-registration/types.ts");

			function a(C) {
				for (var k = 1; k < arguments.length; k++) {
					var ge = arguments[k] != null ? Object(arguments[k]) : {},
						Ie = Object.keys(ge);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(ge).filter(function($e) {
						return Object.getOwnPropertyDescriptor(ge, $e).enumerable
					})), Ie.forEach(function($e) {
						_(C, $e, ge[$e])
					})
				}
				return C
			}

			function _(C, k, ge) {
				return k = d(k), k in C ? Object.defineProperty(C, k, {
					value: ge,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[k] = ge, C
			}

			function d(C) {
				var k = p(C, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function p(C, k) {
				if (typeof C != "object" || C === null) return C;
				var ge = C[Symbol.toPrimitive];
				if (ge !== void 0) {
					var Ie = ge.call(C, k || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(C)
			}

			function h(C) {
				return C.filter(k => k.isSelected).reduce((k, {
					name: ge,
					fees: Ie,
					isZoneEntitlementPresent: $e
				}) => $e || !(0, e.isNumber)(Ie == null ? void 0 : Ie.transfer_fee) ? k : Ct(ge) ? k + (Ie == null ? void 0 : Ie.transfer_fee) * 2 : k + (Ie == null ? void 0 : Ie.transfer_fee), 0)
			}

			function I(C) {
				return C.filter(k => k.registrar.toLowerCase() === "godaddy")
			}
			const E = "MMM D, YYYY";

			function g(C, k, ge, Ie) {
				var $e, Je, de, le, ve, _e, we, Ue, Ye, ot, Xe, tt;
				const ze = C[k.name],
					At = () => Ct(k.name) ? u()(k.expires_at).add(2, "years").format(E) : u()(k.expires_at).add(1, "year").format(E);
				return a({
					name: k == null ? void 0 : k.name,
					zone: ze,
					entitlements: ge,
					registryCheck: Ie,
					nameservers: k.name_servers,
					isAvailable: k.available,
					lastKnownStatus: k.last_known_status,
					authCode: k.auth_code,
					isEnterpriseZone: (ze == null || ($e = ze.plan) === null || $e === void 0 ? void 0 : $e.legacy_id) === "enterprise",
					isActiveZone: (ze == null ? void 0 : ze.status) === "active",
					corResponsesPending: k.cor_responses_pending,
					isCorLocked: k.cor_locked,
					corLockedUntil: k.cor_locked_until ? u()(k.cor_locked_until).format(E) : null,
					isFullZone: (ze == null ? void 0 : ze.type) == o.xd.Full,
					isLocked: k.locked,
					registrar: k.current_registrar || v.JM,
					zoneId: ze == null ? void 0 : ze.id,
					currentExpiration: u()(k.expires_at).format(E),
					newExpiration: At(),
					lastEntitledAt: k.last_entitled_at ? new Date(k.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(ge) && !!ge.find(ut => ut.id === v.g5 && ut.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: k.transfer_in && b(k.transfer_in) || o.BJ.Pending,
					autoTransferStatus: o._n.Pending,
					transferConditions: k.transfer_conditions,
					transferApiCallStatus: o.Yh.Pending,
					transferIn: k.transfer_in,
					transferOut: k.transfer_out,
					autoRenew: k.auto_renew === !0,
					lastTransferredAt: k.last_transferred_at,
					createdAt: k.created_at,
					paymentExpiresAt: u()(k.payment_expires_at).isValid() ? u()(k.payment_expires_at) : u()(k.expires_at).isValid() ? u()(k.expires_at) : "",
					contactIds: {
						[o.l2.Administrator]: (Je = k.contacts) === null || Je === void 0 || (de = Je.administrator) === null || de === void 0 ? void 0 : de.id,
						[o.l2.Billing]: (le = k.contacts) === null || le === void 0 || (ve = le.billing) === null || ve === void 0 ? void 0 : ve.id,
						[o.l2.Registrant]: (_e = k.contacts) === null || _e === void 0 || (we = _e.registrant) === null || we === void 0 ? void 0 : we.id,
						[o.l2.Technical]: (Ue = k.contacts) === null || Ue === void 0 || (Ye = Ue.technical) === null || Ye === void 0 ? void 0 : Ye.id
					},
					landing: k.landing,
					privacy: k.privacy,
					whois: k.whois,
					emailVerified: k.email_verified,
					materialChanges: A(k.material_changes),
					corChanges: k.cor_changes ? M(Object.assign(a({}, f), k.cor_changes)) : {},
					registryStatuses: k.registry_statuses ? k.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (ot = k.domain_protection_services) === null || ot === void 0 ? void 0 : ot.status
					},
					deletion: {
						isDeletable: k == null || (Xe = k.deletion) === null || Xe === void 0 ? void 0 : Xe.is_deletable
					},
					premiumType: k == null ? void 0 : k.premium_type,
					fees: k == null ? void 0 : k.fees
				}, k.domain_move && {
					domainMove: {
						ineligibilityReasons: (tt = k.domain_move) === null || tt === void 0 ? void 0 : tt.ineligibility_reasons
					}
				}, k.actionable_metadata && {
					actionableMetadata: T(k.actionable_metadata)
				}, k.policies && {
					policies: a({}, k.policies.suspension && {
						suspension: {
							parked: k.policies.suspension.parked,
							parkingReason: k.policies.suspension.parking_reason,
							paymentExpired: k.policies.suspension.payment_expired
						}
					})
				})
			}

			function T(C) {
				return C.map(k => ({
					accountContext: k.account_context,
					createdAt: k.created_at,
					expiresAt: k.expires_at,
					sentAt: k.sent_at,
					status: k.status,
					type: k.type
				}))
			}
			const f = {
				id: "",
				first_name: "",
				organization: "",
				address: "",
				city: "",
				state: "",
				zip: "",
				country: "",
				phone: "",
				email: "",
				fax: "",
				last_name: "",
				address2: "",
				email_verified: "",
				extensions: {}
			};

			function b(C) {
				switch (C.enter_auth_code) {
					case o.lW.OK:
						return o.BJ.Valid;
					case o.lW.NEEDED:
						return o.BJ.Pending;
					case o.lW.UNKNOWN:
						return o.BJ.Pending;
					case o.lW.REJECTED:
						return o.BJ.Error;
					case o.lW.TRYING:
						return o.BJ.Pending
				}
				return o.BJ.Pending
			}

			function O(C) {
				let k = C.extensions;
				((k == null ? void 0 : k.application_purpose) && (k == null ? void 0 : k.nexus_category) || (k == null ? void 0 : k.ca_legal_type)) && (C.extensions = a({}, (k == null ? void 0 : k.nexus_category) && {
					nexusCategory: k.nexus_category
				}, (k == null ? void 0 : k.application_purpose) && {
					applicationPurpose: k.application_purpose
				}, (k == null ? void 0 : k.ca_legal_type) && {
					ca_legal_type: k.ca_legal_type
				}));
				let ge = a({}, typeof C.id == "string" ? {
					id: C.id
				} : {}, {
					first_name: C.firstName,
					organization: C.organization,
					address: C.address1,
					city: C.city,
					state: C.state || "N/A",
					zip: C.zip,
					country: C.country,
					phone: C.phone,
					email: C.email,
					fax: "",
					last_name: C.lastName,
					address2: C.address2,
					email_verified: C.emailVerified
				}, C.extensions ? {
					extensions: a({}, C.extensions.nexusCategory && {
						nexus_category: C.extensions.nexusCategory
					}, C.extensions.applicationPurpose && {
						application_purpose: C.extensions.applicationPurpose
					}, C.extensions.ca_legal_type && {
						ca_legal_type: C.extensions.ca_legal_type
					})
				} : {});
				return Fe(ge)
			}

			function A(C) {
				let k = [];
				const ge = {
					id: "",
					first_name: "firstName",
					organization: "organization",
					address: "address1",
					city: "city",
					state: "state",
					zip: "zip",
					country: "country",
					phone: "phone",
					email: "email",
					fax: "fax",
					last_name: "lastName",
					address2: "address2",
					email_verified: "emailVerified",
					extensions: null
				};
				for (const Ie in C) {
					const $e = C[Ie],
						Je = ge[$e];
					k.push(Je)
				}
				return k
			}
			const D = C => {
				if (!C) return null;
				let k = C;
				return C.includes("C31") && (k = "C31"), C.includes("C32") && (k = "C32"), k
			};

			function M(C) {
				return a({}, typeof C.id == "string" ? {
					id: C.id
				} : {}, {
					firstName: C.first_name,
					organization: C.organization,
					address1: C.address,
					city: C.city,
					state: C.state,
					zip: C.zip,
					country: C.country,
					phone: C.phone.trim(),
					email: C.email.trim(),
					lastName: C.last_name,
					address2: C.address2,
					emailVerified: C.email_verified
				}, C.extensions ? {
					extensions: a({}, C.extensions.nexus_category && {
						nexusCategory: D(C.extensions.nexus_category)
					}, C.extensions.application_purpose && {
						applicationPurpose: C.extensions.application_purpose
					}, C.extensions.ca_legal_type && {
						ca_legal_type: C.extensions.ca_legal_type
					})
				} : {})
			}

			function w(C = {}) {
				const k = {
					name: "",
					zoneId: "",
					zone: a({
						id: "",
						name: "",
						status: "pending",
						plan: a({
							id: "free",
							legacy_id: "free",
							name: "Free",
							price: 0,
							frequency: "monthly",
							currency: "usd",
							is_subscribed: !0,
							can_subscribe: !0,
							legacy_discount: !1,
							externally_managed: !1
						}, C.zone && C.zone.plan || {}),
						type: EZoneType.Full
					}, C.zone || {}),
					emailVerified: !1,
					nameservers: [],
					isCorLocked: !1,
					corLockedUntil: null,
					corResponsesPending: 0,
					isEnterpriseZone: !1,
					autoRenew: !1,
					isActiveZone: !0,
					isFullZone: !0,
					isAvailable: !1,
					isLocked: !0,
					currentExpiration: "",
					newExpiration: "",
					lastEntitledAt: null,
					isZoneEntitlementPresent: null,
					registrar: "",
					autoTransferStatus: EDomainAutoTransferStatus.Pending,
					transferAuthCode: "",
					authCodeStatus: EAuthCodeStatus.Pending,
					transferApiCallStatus: ETransferDomainStatus.Pending,
					transferConditions: a({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, C.transferConditions || {}),
					transferIn: a({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, C.transferIn || {}),
					lastTransferredAt: "",
					paymentExpiresAt: "",
					contactIds: {},
					landing: {
						eligible: !1,
						enabled: !1
					},
					whois: {
						raw: ""
					},
					privacy: !0,
					materialChanges: [],
					corChanges: {},
					registryStatuses: null,
					deletion: {
						isDeletable: !1
					},
					premiumType: DomainPremiumType.Not_Premium,
					fees: null,
					policies: {
						suspension: {
							parked: !1,
							parkingReason: null,
							paymentExpired: !1
						}
					}
				};
				return Object.assign(k, C)
			}

			function S(C = {}) {
				return Object.assign({
					firstName: "",
					lastName: "",
					address1: "",
					address2: "",
					city: "",
					state: "",
					zip: "",
					country: "",
					organization: "",
					phone: "",
					email: "",
					emailVerified: !1,
					extensions: void 0
				}, C)
			}

			function R(C) {
				const k = v.Py.concat(v.ui).reduce((ge, Ie) => a({}, ge, {
					[Ie]: []
				}), {});
				return C.forEach(ge => {
					let Ie = L(ge.registrar);
					Ie in k || (Ie = v.ui), _t(ge.name) && (Ie = "uk"), k[Ie].push(ge)
				}), Object.keys(k).sort((ge, Ie) => ge.localeCompare(Ie)).map(ge => ({
					registrar: ge,
					domains: k[ge]
				})).filter(ge => ge.domains.length > 0)
			}

			function L(C) {
				return C == null ? void 0 : C.toLowerCase().replace(/\s|,|\./g, "")
			}

			function K(C) {
				if (!C || !C.registrar) return "unknown";
				if (_t(C.name)) return "uk";
				const k = L(C.registrar);
				return k in v.gM ? k : "unknown"
			}
			const q = [];

			function X(C) {
				return q.some(k => C.endsWith("." + k))
			}

			function J(C) {
				return !C.isEnterpriseZone || !Array.isArray(C.entitlements) ? !1 : !!C.entitlements.find(({
					id: k,
					allocation: ge
				}) => k === v.g5 && ge.value === !0)
			}

			function $(C) {
				var k;
				const ge = [o.rj.CLIENT_HOLD, o.rj.SERVER_HOLD, o.rj.SERVER_TRANSFER_PROHIBITED, o.rj.PENDING_DELETE, o.rj.PENDING_TRANSFER, o.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ie = !1,
					$e = null;
				return (k = C.registryStatuses) === null || k === void 0 || k.some(Je => {
					ge.includes(Je) && ($e = Je, Ie = !0)
				}), [Ie, $e]
			}

			function W(C, k = !1) {
				if (!C) return [!1, n.keys.cannot_transfer_default];
				if (C.zone.status !== "active") return [!1, n.keys.cannot_transfer_zone_not_active];
				if (!C.isFullZone && !J(C)) return [!1, n.keys.cannot_transfer_zone_not_eligible];
				if (C.registrar === "Cloudflare") return [!1, n.keys.cannot_transfer_domain_on_cf];
				if (C.isAvailable) return [!1, n.keys.cannot_transfer_domain_available];
				if (!C.transferConditions) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (!k && (0, l.Ou)(C == null ? void 0 : C.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				if (H(C)) return [!1, n.keys.cannot_transfer_domain_transfer_in_progress];
				let ge;
				for (ge in C.transferConditions)
					if (ge !== "not_premium" && !C.transferConditions[ge]) return [!1, n.keys.cannot_transfer_domain_transfer_conditions];
				if (X(C.name)) return [!1, n.keys.cannot_transfer_domain_tld_not_supported];
				const [Ie, $e] = $(C);
				return Ie && $e ? [!1, n.keys.cannot_transfer_domain_registry_status[$e]] : [!0, ""]
			}

			function H(C) {
				var k, ge;
				return !!C.transferIn && !((k = C.transferConditions) === null || k === void 0 ? void 0 : k.not_started) && !!(_t(C.name) || ((ge = C.registryStatuses) === null || ge === void 0 ? void 0 : ge.includes(o.rj.PENDING_TRANSFER)))
			}

			function U(C) {
				return !!C.registrar && !!C.currentExpiration
			}

			function P(C, k = !1) {
				const [ge] = W(C, k);
				return U(C) ? ye(C) ? o.M5.InProgressOrOnCF : ge ? o.M5.Supported : o.M5.Unsupported : o.M5.Unknown
			}

			function N(C) {
				return C.transferIn && [o.lW.REJECTED, o.lW.NEEDED].includes(C.transferIn.enter_auth_code) || !1
			}

			function F(C) {
				return C.registrar === "Cloudflare"
			}

			function te(C) {
				return !!(C == null ? void 0 : C.includes(o.rj.AUTO_RENEW_PERIOD))
			}

			function oe(C) {
				return !!(C == null ? void 0 : C.includes(o.rj.PENDING_TRANSFER))
			}
			const ie = "Invalid date";

			function Y(C) {
				return C.newExpiration === ie ? !1 : C.newExpiration
			}

			function pe(C) {
				return C.currentExpiration === ie ? !1 : C.currentExpiration
			}

			function z(C) {
				return C.substring(C.indexOf("."))
			}

			function x(C = "") {
				return C.indexOf(".") !== -1 ? C.substring(0, C.indexOf(".")) : C
			}

			function ee(C) {
				return C.map(k => k.name).map(k => z(k)).filter((k, ge, Ie) => !Ie.includes(k, ge + 1))
			}

			function ne(C) {
				if (v.no) return [!0, ""];
				if (!F(C)) return [!1, o.ok.NotOnCF];
				if (C.isCorLocked) return [!1, C.corLockedUntil ? o.ok.CorLockedUntil : o.ok.CorLock];
				if (C.lastTransferredAt) {
					const k = u()(C.lastTransferredAt),
						ge = u().duration(u()().diff(k)).as("days"),
						Ie = _t(C.name);
					if (ge < (Ie ? 1 : 60)) return [!1, Ie ? o.ok.RecentTransferUK : o.ok.RecentTransfer]
				}
				if (C.createdAt) {
					const k = u()(C.createdAt);
					if (u().duration(u()().diff(k)).as("days") < 60) return [!1, o.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function ce(C) {
				return !!(v.Bc || C.transferOut)
			}

			function ye(C) {
				return Oe(C) || F(C)
			}

			function ae(C) {
				return !Oe(C) && F(C)
			}

			function Oe(C) {
				return !C || C.lastKnownStatus === o.kd.PENDING_TRANSFER || C.lastKnownStatus === o.kd.TRANSFER_FOA_PENDING || !F(C) && C.transferConditions && !C.transferConditions.not_started || !1
			}

			function De(C) {
				return !(X(C.name) || C.transferConditions && !C.transferConditions.supported_tld)
			}

			function Re(C) {
				return (C == null ? void 0 : C.includes("/")) ? !0 : C.split("").some(k => k.charCodeAt(0) > 123)
			}

			function We(C) {
				switch (C) {
					case "1&1internetse":
						return "1&1 Ionos";
					case "enom":
						return "Enom";
					case "godaddycomllc":
						return "GoDaddy";
					case "namecheap":
						return "Namecheap";
					case "networksolutions":
						return "Network Solutions";
					case "uk":
						return "UK"
				}
			}

			function ke(C) {
				return u()(C.paymentExpiresAt).isBefore(u()())
			}

			function it(C) {
				return C.transferIn && C.transferIn.enter_auth_code === o.lW.REJECTED || !1
			}

			function Ke(C) {
				const k = ["CU", "KP", "IR", "SY"];
				return C.filter(ge => !k.includes(ge.code))
			}

			function et(C) {
				if (!!C) return `${C.charAt(0).toUpperCase()}${C.slice(1)}${C.charAt(C.length-1)==="."?"":"."}`
			}

			function Fe(C) {
				const k = {};
				for (const [ge, Ie] of Object.entries(C)) {
					if (Ie && typeof Ie == "string") {
						Object.assign(k, {
							[ge]: Ie.trim()
						});
						continue
					}
					Object.assign(k, {
						[ge]: Ie
					})
				}
				return k
			}

			function G(C) {
				return u()(C).add(40, "days")
			}

			function be(C) {
				const k = C.paymentExpiresAt || C.payment_expires_at,
					ge = G(k);
				return u()().isBetween(k, ge)
			}

			function Be(C) {
				var k;
				return !(C == null ? void 0 : C.registryStatuses) || !Array.isArray(C == null ? void 0 : C.registryStatuses) && !(0, e.isString)(C == null ? void 0 : C.registryStatuses) ? !1 : (k = C.registryStatuses) === null || k === void 0 ? void 0 : k.includes(o.rj.REDEMPTION_PERIOD)
			}

			function xe(C) {
				var k;
				return !(C == null ? void 0 : C.registryStatuses) || !Array.isArray(C == null ? void 0 : C.registryStatuses) && !(0, e.isString)(C == null ? void 0 : C.registryStatuses) ? !1 : (k = C.registryStatuses) === null || k === void 0 ? void 0 : k.includes(o.rj.PENDING_DELETE)
			}

			function nt(C) {
				return [".us"].includes(C)
			}

			function dt(C) {
				return [".us"].includes(C)
			}

			function mt(C) {
				switch (C) {
					case ".us":
						return Q();
					default:
						return []
				}
			}

			function Ae(C) {
				switch (C) {
					case ".us":
						return rt;
					default:
						return {}
				}
			}
			const rt = {
				[o.A9.P3]: [o.Fi.C11]
			};

			function Q() {
				return [{
					name: o.IP.application_purpose,
					label: o.rb.application_purpose,
					options: Object.entries(o.A9).map(([C, k]) => ({
						value: C,
						label: k
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: o.IP.nexus_category,
					label: o.rb.nexus_category,
					options: Object.entries(o.Fi).map(([C, k]) => ({
						value: C,
						label: k
					}))
				}]
			}

			function se(C, k, ge) {
				return k[k.length - 1][ge] === C[ge]
			}

			function fe(C) {
				return Boolean(Object.keys(C).length === 0)
			}

			function Ce(C) {
				return u()().add(C, "year").format(E)
			}

			function je({
				accountName: C
			}) {
				var k;
				const ge = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((k = C.toLowerCase().match(ge)) === null || k === void 0 ? void 0 : k[0]) || ""
			}

			function Ge(C) {
				return !!C.match(m.default.email)
			}

			function He(C) {
				return C === s.W7.PENDING_UPDATE
			}

			function ht(C) {
				return C ? Object.values(s.wR).filter(k => k !== s.wR.OFFBOARDED).includes(C) : !1
			}

			function yt(C) {
				return C ? [s.wR.LOCKED, s.wR.ONBOARDED, s.wR.ONBOARDING_INITIATED, s.wR.PENDING_REGISTRY_LOCK, s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(C) : !1
			}

			function bt(C) {
				return C ? s.wR.UNLOCKED === C : !1
			}

			function jt(C) {
				return C ? s.wR.LOCKED === C : !1
			}

			function Ze(C) {
				return C ? s.wR.PENDING_REGISTRY_LOCK === C : !1
			}

			function gt(C) {
				return C ? [s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(C) : !1
			}

			function st(C) {
				var k;
				return !1
			}

			function lt(C) {
				var k;
				return !1
			}

			function ft(C) {
				var k;
				return !1
			}

			function Le(C) {
				var k;
				return !1
			}

			function Z(C) {
				var k;
				return !1
			}

			function me(C) {
				return Object.keys(s.wR).find(k => s.wR[k].toLowerCase() === C.toLowerCase())
			}

			function he(C) {
				var k;
				const ge = (k = me(C)) === null || k === void 0 ? void 0 : k.toLowerCase();
				return ge ? n.keys.protection_status[ge] : n.keys.protection_status.unknown
			}

			function Te(C) {
				return ["com", "net"].includes(C)
			}

			function Me(C) {
				const k = (0, c.pu)(C);
				return Te(k) ? s.wR.PENDING_REGISTRY_LOCK : s.wR.LOCKED
			}

			function Ve(C) {
				return (0, c.pu)(C) === "co" ? 5 : 10
			}

			function vt(C, k) {
				return k ? 1 : (0, c.pu)(C) === "co" ? 5 : (0, c.pu)(C) === "org" ? 1 : 10
			}

			function _t(C) {
				return (0, c.pu)(C) === "uk"
			}

			function $t(C) {
				return (0, c.pu)(C) === "us"
			}

			function Ct(C) {
				return (0, c.pu)(C) === "ai"
			}

			function Qe(C) {
				return u()(C).isValid()
			}

			function wt(C) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(C)
			}

			function Lt(C) {
				return !!(C == null ? void 0 : C.id)
			}

			function Ot(C) {
				return C ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(C) : !1
			}

			function St(C) {
				return C ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(C) : !1
			}

			function kt(C) {
				var k;
				return (C == null ? void 0 : C.lastKnownStatus) ? (k = C.lastKnownStatus) === null || k === void 0 ? void 0 : k.includes("deletionIrredeemable") : !1
			}

			function Mt(C) {
				switch (C) {
					case o.Vs.NonStandard_NonStandard:
					case o.Vs.NonStandard_Standard:
					case o.Vs.Standard_Standard:
					case o.Vs.Standard_NonStandard:
						return !0;
					case o.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function Wt(C) {
				if (!C || !C.message) return o.OJ.DEFAULT;
				const {
					message: k
				} = C;
				switch (!0) {
					case k.includes("feature disabled"):
						return o.OJ.FEATURE_DISABLED;
					case k.includes("email unverified"):
						return o.OJ.EMAIL_UNVERIFIED;
					case k.includes("account blocked"):
						return o.OJ.ACCOUNT_BLOCKED;
					default:
						return o.OJ.DEFAULT
				}
			}

			function Tt(C) {
				var k, ge;
				return !!(((k = C.policies) === null || k === void 0 || (ge = k.suspension) === null || ge === void 0 ? void 0 : ge.parked) && C.policies.suspension.parkingReason)
			}

			function It(C) {
				var k, ge;
				return Tt(C) && ((k = C.policies) === null || k === void 0 || (ge = k.suspension) === null || ge === void 0 ? void 0 : ge.parkingReason) === o.qK.EMAIL_VERIFICATION
			}

			function Ft(C) {
				var k, ge;
				return Tt(C) && ((k = C.policies) === null || k === void 0 || (ge = k.suspension) === null || ge === void 0 ? void 0 : ge.parkingReason) === o.qK.TRUST_AND_SAFETY
			}

			function Vt(C) {
				var k;
				return !((k = C.domainMove) === null || k === void 0 ? void 0 : k.ineligibilityReasons.length)
			}

			function zt(C) {
				var k, ge;
				return !!((k = C.domainMove) === null || k === void 0 || (ge = k.ineligibilityReasons) === null || ge === void 0 ? void 0 : ge.includes(o.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Rt(C) {
				var k;
				return (k = C.actionableMetadata) === null || k === void 0 ? void 0 : k.find(ge => ge.type === o.wg.DOMAIN_MOVE)
			}

			function Nt(C) {
				const k = Rt(C);
				return (k == null ? void 0 : k.status) === "pending" && k.accountContext === o._5.GAINING
			}

			function Kt(C) {
				const k = Rt(C);
				return (k == null ? void 0 : k.status) === "pending" && k.accountContext === o._5.LOSING
			}

			function xt(C) {
				const k = z(C.name);
				return !v.Pf.includes(k)
			}

			function Bt(C) {
				return v.QZ.includes(C)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Bc: function() {
					return c
				},
				HG: function() {
					return Oe
				},
				Hv: function() {
					return De
				},
				JM: function() {
					return i
				},
				Ni: function() {
					return p
				},
				Pf: function() {
					return a
				},
				Py: function() {
					return m
				},
				QZ: function() {
					return _
				},
				WK: function() {
					return v
				},
				g5: function() {
					return n
				},
				gM: function() {
					return s
				},
				jk: function() {
					return ae
				},
				kO: function() {
					return d
				},
				no: function() {
					return l
				},
				ui: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
			const i = "Unknown",
				u = "unknown",
				s = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				m = Object.keys(s),
				c = (0, r.J8)("registrar_mock_transfer_out") || !1,
				l = (0, r.J8)("registrar_show_unlock_ui") || !1,
				v = 250,
				n = "cf_registrar.enabled",
				o = "@abcABC1234567890123456",
				a = [".us"],
				_ = [".travel", ".us", ".ong", ".ngo"],
				d = ["BR", "CA", "MX", "US"],
				p = ["ca"],
				h = (0, e.BC)`/${"accountId"}`,
				I = (0, e.BC)`${h}/add-site`,
				E = (0, e.BC)`${h}/registrar`,
				g = (0, e.BC)`${E}/domains`,
				T = (0, e.BC)`${E}/action-center`,
				f = (0, e.BC)`${E}/domain/${"zoneName"}`,
				b = (0, e.BC)`${f}/configuration`,
				O = (0, e.BC)`${f}/contacts`,
				A = (0, e.BC)`${E}/pricing`,
				D = (0, e.BC)`${E}/protection`,
				M = (0, e.BC)`${E}/register`,
				w = (0, e.BC)`${M}/checkout`,
				S = (0, e.BC)`${M}/checkout/${"token"}`,
				R = (0, e.BC)`${M}/success`,
				L = (0, e.BC)`${E}/tlds`,
				K = (0, e.BC)`${E}/transfer`,
				q = (0, e.BC)`${E}/transfer/${"zoneName"}`,
				X = (0, e.BC)`/registrar/accounts/verify_email`,
				J = (0, e.BC)`/registrar/domains/verify_email`,
				$ = (0, e.BC)`/sign-up/registrar`,
				W = (0, e.BC)`${E}/verify-email`,
				H = (0, e.BC)`${h}/${"zoneName"}`,
				U = (0, e.BC)`${h}/domains`,
				P = (0, e.BC)`${U}/action-center`,
				N = (0, e.BC)`${U}/${"zoneName"}`,
				F = (0, e.BC)`${N}/configuration`,
				te = (0, e.BC)`${N}/contacts`,
				oe = (0, e.BC)`${U}/pricing`,
				ie = (0, e.BC)`${U}/protection`,
				Y = (0, e.BC)`${U}/register`,
				pe = (0, e.BC)`${Y}/checkout`,
				z = (0, e.BC)`${Y}/checkout/${"token"}`,
				x = (0, e.BC)`${Y}/success`,
				ee = (0, e.BC)`${U}/tlds`,
				ne = (0, e.BC)`${U}/transfer`,
				ce = (0, e.BC)`${U}/transfer/${"zoneName"}`,
				ye = (0, e.BC)`${U}/verify-email`,
				ae = {
					addSite: I,
					domains: g,
					domainsActionCenter: T,
					domainsDomain: f,
					domainsDomainConfiguration: b,
					domainsDomainContacts: O,
					domainsPricing: A,
					domainsProtection: D,
					domainsRegister: M,
					domainsRegisterCheckout: w,
					domainsRegisterCheckoutToken: S,
					domainsRegisterSuccess: R,
					domainsTlds: L,
					domainsTransfer: K,
					domainsTransferZone: q,
					registrar: E,
					registrarAccountsVerifyEmail: X,
					registrarDomainsVerifyEmail: J,
					signup: $,
					verifyEmail: W,
					zone: H
				},
				Oe = {
					LEGACY_domains: U,
					LEGACY_domainsActionCenter: P,
					LEGACY_domainsDomain: N,
					LEGACY_domainsDomainConfiguration: F,
					LEGACY_domainsDomainContacts: te,
					LEGACY_domainsPricing: oe,
					LEGACY_domainsProtection: ie,
					LEGACY_domainsRegister: Y,
					LEGACY_domainsRegisterCheckout: pe,
					LEGACY_domainsRegisterCheckoutToken: z,
					LEGACY_domainsRegisterSuccess: x,
					LEGACY_domainsTlds: ee,
					LEGACY_domainsTransfer: ne,
					LEGACY_domainsTransferZone: ce,
					LEGACY_verifyEmail: ye
				},
				De = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				HO: function() {
					return c
				},
				NW: function() {
					return l
				},
				ZQ: function() {
					return u
				},
				b_: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");
			const i = v => {
					const n = v && v.accountFlags && v.accountFlags.data && v.accountFlags.data.registrar && v.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(o => o.trim()) : []
				},
				u = v => {
					var n, o, a;
					return ((n = v.accountFlags) === null || n === void 0 || (o = n.data) === null || o === void 0 || (a = o.registrar) === null || a === void 0 ? void 0 : a["registrar-managed"]) || !1
				},
				s = v => v.account ? v.account.email : "",
				m = v => !1,
				c = v => m(v) && (0, e.oJ)((0, e.Zu)(v)),
				l = v => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: o
					} = v.registrar.registrations;
					return n && !(o.accepted_date || o.id || o.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				J: function() {
					return o
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(i),
				s = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function m(a) {
				for (var _ = 1; _ < arguments.length; _++) {
					var d = arguments[_] != null ? Object(arguments[_]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(h) {
						return Object.getOwnPropertyDescriptor(d, h).enumerable
					})), p.forEach(function(h) {
						c(a, h, d[h])
					})
				}
				return a
			}

			function c(a, _, d) {
				return _ = l(_), _ in a ? Object.defineProperty(a, _, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[_] = d, a
			}

			function l(a) {
				var _ = v(a, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function v(a, _) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(a, _ || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(a)
			}
			let n = function(a) {
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS = "domain update canada registrant type completed successfully", a.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR = "domain update canada registrant type failed", a
			}({});

			function o(a, _, d) {
				if (!(_ == null ? void 0 : _.name)) return null;
				u().sendEvent(a, m({
					domain: m({
						name: _.name,
						premium: (0, s.Uy)(_ == null ? void 0 : _.premiumType)
					}, (_ == null ? void 0 : _.paymentExpiresAt) && {
						paymentExpiresAt: r()(_ == null ? void 0 : _.paymentExpiresAt).format()
					}),
					category: "registrar"
				}, d))
			}
		},
		"../react/pages/home/domain-registration/utils/domain.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				FC: function() {
					return l
				},
				Ou: function() {
					return s
				},
				TQ: function() {
					return c
				},
				rS: function() {
					return m
				},
				v_: function() {
					return u
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/home/domain-registration/bulk-transfer-util.ts"),
				i = t("../react/pages/home/domain-registration/types.ts");
			const u = v => (0, r.Ac)(v) ? 2 : 1,
				s = v => (0, e.pu)(v) === "ca",
				m = [{
					label: "Canadian citizen",
					value: "CCT"
				}, {
					label: "Permanent Resident of Canada",
					value: "RES"
				}, {
					label: "Aboriginal Peoples indigenous to Canada",
					value: "ABO"
				}, {
					label: "Canadian Unincorporated Association",
					value: "ASS"
				}, {
					label: "Corporation (Canada or Canadian province or territory)",
					value: "CCO"
				}, {
					label: "Canadian Educational Institution",
					value: "EDU"
				}, {
					label: "Government or government entity in Canada",
					value: "GOV"
				}, {
					label: "Canadian Hospital",
					value: "HOP"
				}, {
					label: "Indian Band recognized by the Indian Act of Canada",
					value: "INB"
				}, {
					label: "Canadian Library, Archive or Museum",
					value: "LAM"
				}, {
					label: "Legal Rep. of a Canadian Citizen or Permanent Resident",
					value: "LGR"
				}, {
					label: "Her Majesty the Queen",
					value: "MAJ"
				}, {
					label: "Official mark registered in Canada",
					value: "OMK"
				}, {
					label: "Canadian Political Party",
					value: "PLT"
				}, {
					label: "Partnership Registered in Canada",
					value: "PRT"
				}, {
					label: "Trade-mark registered in Canada (by a non-Canadian owner)",
					value: "TDM"
				}, {
					label: "Canadian Trade Union",
					value: "TRD"
				}, {
					label: "Trust established in Canada",
					value: "TRS"
				}],
				c = m.filter(v => v.value !== i.Hy.MAJ && v.value !== i.Hy.OMK && v.value !== i.Hy.TDM),
				l = v => {
					const n = [i.Hy.CCT, i.Hy.RES];
					return !v || (v == null ? void 0 : v.length) === 0 ? !1 : v ? !n.includes(v) : !0
				}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				HX: function() {
					return c
				},
				Re: function() {
					return E
				},
				Rh: function() {
					return p
				},
				hX: function() {
					return _
				},
				s_: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				s = t("../react/utils/translator.tsx"),
				m = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
			let c = function(g) {
				return g.UNKNOWN = "unknown", g.WORKERS = "workers", g.ACCESS_APPS = "access_apps", g.ACCESS_IDP = "access_ipd", g
			}({});
			const l = [{
				value: c.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: c.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: c.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function v(g) {
				return {
					key: "com.cloudflare.edge.worker.script." + g.id,
					name: g.name + (g.environment ? ` (${g.environment})` : ""),
					type: c.WORKERS
				}
			}

			function n(g) {
				const T = g;
				return {
					key: "com.cloudflare.edge.access.app." + T.id,
					name: T.name,
					type: c.ACCESS_APPS
				}
			}
			const o = {
				azureAD: "Azure AD",
				centrify: "Centrify",
				facebook: "Facebook",
				github: "GitHub",
				google: "Google",
				gsuite: "Google Workspace",
				linkedin: "Linkedin",
				oidc: "OIDC",
				okta: "Okta",
				onelogin: "Onelogin",
				onetimepin: "One Time Pin",
				passwordless: "One Time Pin",
				pingone: "PingOne",
				saml: "SAML",
				yandex: "Yandex"
			};

			function a(g) {
				const T = g,
					f = o[T.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + T.id,
					name: `${f||"Unknown Type"}${T.name?" - "+T.name:""}`,
					type: c.ACCESS_IDP
				}
			}
			const _ = async (g, T, f) => T == c.WORKERS ? (await d(`/accounts/${g}/workers/scripts-search?name=${f}&perPage=10`)).body.result.map(b => ({
				id: b.id,
				name: b.service_name || b.script_name,
				environment: b.environment_name
			})).map(v) : T == c.ACCESS_APPS ? (await d(`/accounts/${g}/access/apps?name=${f}`)).body.result.map(n) : T == c.ACCESS_IDP ? (await d(`/accounts/${g}/access/identity_providers`)).body.result.map(a) : [];
			async function d(g) {
				try {
					return await (0, e.get)(g, {
						hideErrorAlert: !0
					})
				} catch (b) {
					var T, f;
					throw ((T = b.body) === null || T === void 0 ? void 0 : T.errors) ? b.body.errors[0].message : b.text ? b.text : ((f = b.response) === null || f === void 0 ? void 0 : f.statusText) ? b.response.statusText : "Unexpected error response"
				}
			}
			const p = async (g, T) => {
				const f = T.split("."),
					b = f.pop(),
					O = f.join(".");
				let A;
				switch (O) {
					case "com.cloudflare.edge.worker.script":
						const D = (await d(`/accounts/${g}/workers/scripts-search/${b}`)).body.result;
						return v({
							id: D.id,
							name: D.service_name || D.script_name,
							environment: D.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return A = await d(`/accounts/${g}/access/identity_providers/${b}`), a(A.body.result);
					case "com.cloudflare.edge.access.app":
						return A = await d(`/accounts/${g}/access/apps/${b}`), n(A.body.result)
				}
			}, h = {
				loading: !0,
				isDisabled: !0
			}, I = () => "production";

			function E(g) {
				const [T] = (0, m.k)(g), [f, b] = (0, i.useState)(!0), [O, A] = (0, i.useState)([]);
				return (0, i.useEffect)(() => {
					if (!T) return;
					const D = l.filter(M => T.find(w => w.meta.scopes === M.scopeKeyPrefix)).map(M => {
						const w = M.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							S = T.filter(R => R.meta.scopes === M.scopeKeyPrefix).find(R => !R.meta.visibility || R.meta.visibility !== "beta");
						return {
							value: M.value,
							label: (0, s.ZP)(M.label_i18n),
							state: w ? h : {
								loading: !1,
								isDisabled: !1
							},
							beta: !S
						}
					});
					A(D)
				}, [T]), (0, i.useEffect)(() => {
					(async () => {
						try {
							await _(g, c.ACCESS_APPS, ""), h.isDisabled = !1
						} catch (D) {
							D.startsWith("access.api.error.not_enabled") ? h.disableInfo = (0, s.ZP)("policy.granular_resources.type.access.not_enabled") : h.error = D
						}
						h.loading = !1, A(D => [...D])
					})()
				}, [g]), (0, i.useEffect)(() => {
					const D = O.find(M => M.state.loading);
					b(!!D)
				}, [O]), {
					types: O,
					isLoading: f
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return v
				},
				F4: function() {
					return h
				},
				Go: function() {
					return _
				},
				Lc: function() {
					return b
				},
				Np: function() {
					return o
				},
				Rl: function() {
					return a
				},
				Sb: function() {
					return d
				},
				Sw: function() {
					return f
				},
				Sz: function() {
					return T
				},
				Ti: function() {
					return O
				},
				Uw: function() {
					return E
				},
				Zl: function() {
					return I
				},
				jk: function() {
					return g
				},
				r6: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				i = (0, e.BC)`${r}/members`,
				u = (0, e.BC)`${i}/invite`,
				s = (0, e.BC)`${i}/invite/${"memberId"}`,
				m = (0, e.BC)`${i}/add-policy/${"memberId"}`,
				c = (0, e.BC)`${i}/user-groups`,
				l = (0, e.BC)`${i}/user-groups/${"userGroupId"}`,
				v = "com.cloudflare.api.account",
				o = v + "." + "zone",
				a = o + ".",
				_ = 100,
				d = 200,
				p = 5,
				h = 300,
				I = "INVITE_TOAST",
				E = "00000000000000000000000000000000",
				g = {
					account: r,
					members: i,
					groups: c,
					group: l,
					inviteMembers: u,
					editMember: s,
					addPolicy: m
				},
				T = {
					allow: "allow",
					deny: "deny"
				},
				f = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				b = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				O = {
					accountId: "",
					effect: T.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Bz: function() {
					return l
				},
				SH: function() {
					return v
				},
				g5: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, a[d])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var _ = a.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_USERGROUP_BETA_BUTTON = "click usergroup beta button", n.MEMBERS_TAB_NAVIGATE = "nagivate members tab", n
			}({});
			const l = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, i({}, o || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return g
				},
				Co: function() {
					return I
				},
				Hf: function() {
					return D
				},
				JP: function() {
					return E
				},
				LX: function() {
					return S
				},
				Ld: function() {
					return a
				},
				YW: function() {
					return l
				},
				_k: function() {
					return _
				},
				c$: function() {
					return v
				},
				rC: function() {
					return w
				},
				vq: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				i = t("../react/pages/home/members/constants.ts");

			function u(L) {
				for (var K = 1; K < arguments.length; K++) {
					var q = arguments[K] != null ? Object(arguments[K]) : {},
						X = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(q).filter(function(J) {
						return Object.getOwnPropertyDescriptor(q, J).enumerable
					})), X.forEach(function(J) {
						s(L, J, q[J])
					})
				}
				return L
			}

			function s(L, K, q) {
				return K = m(K), K in L ? Object.defineProperty(L, K, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[K] = q, L
			}

			function m(L) {
				var K = c(L, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function c(L, K) {
				if (typeof L != "object" || L === null) return L;
				var q = L[Symbol.toPrimitive];
				if (q !== void 0) {
					var X = q.call(L, K || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(L)
			}
			const l = () => u({}, i.Ti),
				v = () => u({}, i.Lc, {
					scopes: [l()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = L => L.map(K => ({
					scope: {
						key: K,
						objects: [{
							key: "*"
						}]
					}
				})),
				o = (L, K, q) => {
					var X;
					let J = [],
						$ = [];
					const W = [],
						H = [];
					L.scopes.forEach(N => {
						if (N.mode === i.Sw.all) q ? J.push({
							id: q
						}) : J.push({
							scope: {
								key: `com.cloudflare.api.account.${K}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (N.mode === i.Sw.domain_group) {
							const te = {
								id: N.resourceGroupId
							};
							N.effect === i.Sz.allow ? J.push(te) : $.push(te)
						} else if (N.mode === i.Sw.zone) {
							const te = `${i.Rl}${N.zoneId}`;
							N.effect === i.Sz.allow ? W.push(te) : H.push(te)
						} else if (N.mode === i.Sw.granular && N.granularResourceKey) {
							var F;
							const te = N.granularProduct,
								ie = `${(F=r.s_.find(Y=>Y.value===te))===null||F===void 0?void 0:F.scopeSubsetOfPrefix}.${K}`;
							J.push({
								scope: {
									key: `${N.granularResourceKey}`,
									subset_of: [{
										key: `${ie}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), W.length && (J = J.concat(n(W))), H.length && ($ = $.concat(n(H)));
					const U = (X = L.permission_groups) === null || X === void 0 ? void 0 : X.map(N => ({
							id: N
						})),
						P = [];
					return P.push({
						access: i.Sz.allow,
						permission_groups: U,
						resource_groups: J
					}), $.length && P.push({
						access: i.Sz.deny,
						permission_groups: U,
						resource_groups: $
					}), P
				},
				a = L => L.map(K => {
					var q;
					return {
						access: K.access,
						permission_groups: K.permission_groups.map(X => ({
							id: X.id
						})),
						resource_groups: (q = K.resource_groups) === null || q === void 0 ? void 0 : q.map(X => ({
							scope: {
								key: X.scope.key,
								objects: X.scope.objects
							},
							id: X.id
						}))
					}
				}),
				_ = (L, K, q, X) => {
					const J = L.auto_accept;
					let $ = [];
					return $ = $.concat(o(L, K, q)), X && ($ = $.concat(a(X))), {
						auto_accept: J,
						status: J ? "accepted" : "pending",
						policies: $
					}
				},
				d = L => {
					const K = L.split(".");
					return K[K.length - 1]
				},
				p = L => {
					var K, q;
					const X = L == null ? void 0 : L.access;
					let J = [],
						$ = L == null || (K = L.resource_groups) === null || K === void 0 ? void 0 : K.map(W => {
							var H;
							const U = h(W);
							if ((W == null || (H = W.meta) === null || H === void 0 ? void 0 : H.editable) === "false") return {
								effect: X,
								mode: i.Sw.all,
								accountId: d(W.id)
							};
							if (U) {
								var P;
								return {
									effect: X,
									mode: i.Sw.granular,
									granularProduct: U.value,
									granularResourceKey: W == null || (P = W.scope) === null || P === void 0 ? void 0 : P.key
								}
							} else if (!W.name) W.scope.key.startsWith(i.Rl) ? J.push({
								key: W.scope.key
							}) : J = J.concat(W.scope.objects);
							else return {
								effect: X,
								mode: i.Sw.domain_group,
								resourceGroupId: d(W.id)
							}
						}).filter(W => W);
					if ((q = J) === null || q === void 0 ? void 0 : q.length) {
						let W = J.map(H => {
							const U = d(H.key);
							return {
								effect: X,
								mode: i.Sw.zone,
								zoneId: U
							}
						});
						$ = $.length ? W.concat($) : W
					}
					return $
				},
				h = L => {
					var K, q, X, J;
					const $ = L == null || (K = L.scope) === null || K === void 0 ? void 0 : K.key.split(".").slice(0, -1).join("."),
						W = L == null || (q = L.scope) === null || q === void 0 || (X = q.subset_of) === null || X === void 0 || (J = X[0]) === null || J === void 0 ? void 0 : J.key.split(".").slice(0, -1).join(".");
					return r.s_.find(H => H.scopeKeyPrefix === $ && H.scopeSubsetOfPrefix === W)
				},
				I = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const K = [];
					return L.forEach(q => {
						var X;
						(X = q.resource_groups) === null || X === void 0 || X.forEach(J => {
							var $, W;
							(($ = J.scope) === null || $ === void 0 || (W = $.key) === null || W === void 0 ? void 0 : W.startsWith(i.Rl)) && K.push(d(J.scope.key))
						})
					}), K
				},
				E = L => {
					if (!(L == null ? void 0 : L.length)) return [];
					const K = [];
					return L.forEach(q => {
						var X;
						(X = q.resource_groups) === null || X === void 0 || X.forEach(J => {
							var $, W;
							if (!(($ = J.scope) === null || $ === void 0 || (W = $.key) === null || W === void 0 ? void 0 : W.startsWith(i.Rl))) {
								var H;
								const P = (H = J.scope) === null || H === void 0 ? void 0 : H.objects;
								for (let N = 0; N < (P == null ? void 0 : P.length) && N < i.r6; N++) {
									var U;
									((U = P[N].key) === null || U === void 0 ? void 0 : U.startsWith(i.Rl)) && K.push(d(P[N].key))
								}
							}
						})
					}), K
				},
				g = L => {
					var K;
					if (!(L == null ? void 0 : L.length)) return null;
					const q = (K = L[0]) === null || K === void 0 ? void 0 : K.permission_groups.map(W => W.id);
					let X, J;
					L == null || L.forEach(W => {
						W.access === i.Sz.allow && (X = W), W.access === i.Sz.deny && (J = W)
					});
					let $ = [];
					return X && ($ = p(X)), J && ($ = $.concat(p(J))), {
						permission_groups: q,
						scopes: $
					}
				},
				T = "permission-groups-",
				f = "permission-groups-expiring-",
				b = 1 * 24 * 60 * 60,
				O = new Map,
				A = L => M(T, L),
				D = L => M(f, L),
				M = (L, K) => {
					if (!K) return [];
					const q = O.get(K);
					if (q) return q;
					const X = e.E.get(`${L}${K}`);
					return X ? (O.set(K, X), X) : []
				},
				w = (L, K) => R(T, L, K),
				S = (L, K) => R(f, L, K),
				R = (L, K, q) => {
					const X = [];
					for (let $ = 0; $ < sessionStorage.length; $++) {
						const W = sessionStorage.key($);
						(W == null ? void 0 : W.startsWith(L)) && X.push(W)
					}
					X.length >= 5 && e.E.remove(X[0]);
					let J;
					return L === f && (J = b), e.E.set(`${L}${K}`, q, J)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				g: function() {
					return r
				}
			});
			var e = t("../../../common/util/types/src/api/phases/fields.tsx");
			const r = {
				[e.df.HttpRequestFirewallCustom]: {
					HEADING: "account.custom_rulesets.tab.deployed_rulesets",
					DESCRIPTION: "account.custom_rulesets.tab.deployed_rulesets.description",
					DOC_LINK: null,
					DOC_DESCRIPTION: "account.custom_rulesets",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/custom-rulesets/create-dashboard/",
					DOC_RULESET_LINK: "https://developers.cloudflare.com/ruleset-engine/custom-rulesets/add-rules-ruleset/",
					DOC_RULES_LINK: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/",
					DOC_RULES_LABEL: "account.custom_rulesets.rule",
					DEPLOY_BUTTON: "account.custom_rulesets.create_rule",
					RULESETS_HEADING: "account.custom_rulesets.tab.your_rulesets",
					RULESETS_DESCRIPTION: "account.custom_rulesets.tab.your_rulesets.description",
					BACK_TO_HOME: "account.custom_rulesets.back_to_rulesets",
					DEPLOY_TITLE: "account.custom_rulesets.create_rule",
					EDIT_RULESET: "account.custom_rulesets.edit_custom_ruleset",
					CREATE_RULESET: "account.custom_rulesets.create_custom_ruleset"
				},
				[e.df.HttpRateLimit]: {
					HEADING: "account.rate_limiting.tab.rate_limiting.title",
					DESCRIPTION: "account.rate_limiting.tab.rate_limiting.description",
					DOC_LINK: null,
					DOC_DESCRIPTION: "account.rate_limiting.rate.rule",
					DOC_RULESET_LINK: "https://developers.cloudflare.com/waf/rate-limiting-rules/create-account-dashboard/#1-create-a-custom-rate-limiting-ruleset",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/rate-limiting-rules/create-account-dashboard/",
					RULESETS_HEADING: "account.rate_limiting.tab.your_rulesets.title",
					RULESETS_DESCRIPTION: "account.rate_limiting.tab.your_rulesets.description",
					BACK_TO_HOME: "account.custom_rulesets.back_to_rulesets",
					DEPLOY_TITLE: "account.rate_limiting_rulesets.create_rule",
					EDIT_RULESET: "account.rate_limiting.edit_custom_ruleset",
					CREATE_RULESET: "account.rate_limiting.create_custom_ruleset"
				},
				[e.df.HttpRequestFirewallManaged]: {
					HEADING: "account.managed_rulesets.tab.deployed_rulesets",
					DESCRIPTION: "account.managed_rulesets.card_description",
					DOC_LINK: null,
					DOC_LINK_CREATE: null,
					DOC_DESCRIPTION: "account.managed_rulesets",
					RULESETS_HEADING: null,
					RULESETS_DESCRIPTION: null,
					BACK_TO_HOME: "account.custom_rulesets.back_to_rulesets",
					DEPLOY_TITLE: "",
					EDIT_RULESET: "",
					CREATE_RULESET: "",
					DEPLOY_RULESET_DOC_LINK: "https://developers.cloudflare.com/waf/managed-rules/deploy-account-dashboard/",
					DEPLOY_RULESET_DOC_DESCRIPTION: "account.managed_rulesets.create_rule.doc_description",
					EXCEPTION_DOC_LINK: "https://developers.cloudflare.com/waf/managed-rules/waf-exceptions/define-dashboard/",
					EXCEPTION_DOC_DESCRIPTION: "account.managed_rulesets.skip.form.doc_description"
				}
			}
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return e
				}
			});
			let e = function(r) {
				return r.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", r.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", r.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", r.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", r.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", r.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", r.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", r.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", r.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", r.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", r.GET_SYN_PROTECTION_RULE = "view syn protection rules list", r.GET_SYN_PROTECTION_RULES = "view syn protection rule", r.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", r.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", r.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", r.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", r.GET_SYN_PROTECTION_FILTER = "view syn protection filter", r.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", r.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", r.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", r.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", r.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", r.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", r.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", r.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", r.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", r.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", r.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", r.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", r.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", r.GET_DNS_PROTECTION_RULES = "view dns protection rules list", r.GET_DNS_PROTECTION_RULE = "view dns protection rule", r.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", r.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", r.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", r
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return c
				},
				L9: function() {
					return n
				},
				N3: function() {
					return v
				},
				zE: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(o) {
				for (var a = 1; a < arguments.length; a++) {
					var _ = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, _[p])
					})
				}
				return o
			}

			function u(o, a, _) {
				return a = s(a), a in o ? Object.defineProperty(o, a, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = _, o
			}

			function s(o) {
				var a = m(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(o, a) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}
			let c = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.SEARCH_CONFIGS = "search hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.UPDATE_ORIGIN_CONN_LIM_SETTINGS = "update hyperdrive config origin connection limit settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o.CLICK_DISCORD = "click hyperdrive discord", o.CLICK_COMMUNITY = "click hyperdrive community", o
				}({}),
				l = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				v = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const n = (o, a = {}) => {
				r().sendEvent(o, i({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				KJ: function() {
					return O
				},
				_m: function() {
					return I
				},
				imagesEndpoints: function() {
					return ae
				},
				vQ: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(Oe) {
				for (var De = 1; De < arguments.length; De++) {
					var Re = arguments[De] != null ? Object(arguments[De]) : {},
						We = Object.keys(Re);
					typeof Object.getOwnPropertySymbols == "function" && We.push.apply(We, Object.getOwnPropertySymbols(Re).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(Re, ke).enumerable
					})), We.forEach(function(ke) {
						i(Oe, ke, Re[ke])
					})
				}
				return Oe
			}

			function i(Oe, De, Re) {
				return De = u(De), De in Oe ? Object.defineProperty(Oe, De, {
					value: Re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Oe[De] = Re, Oe
			}

			function u(Oe) {
				var De = s(Oe, "string");
				return typeof De == "symbol" ? De : String(De)
			}

			function s(Oe, De) {
				if (typeof Oe != "object" || Oe === null) return Oe;
				var Re = Oe[Symbol.toPrimitive];
				if (Re !== void 0) {
					var We = Re.call(Oe, De || "default");
					if (typeof We != "object") return We;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (De === "string" ? String : Number)(Oe)
			}
			const m = (0, e.BC)`/${"accountId"}/images`,
				c = (0, e.BC)`${m}/images`,
				l = (0, e.BC)`${m}/variants`,
				v = (0, e.BC)`${m}/keys`,
				n = (0, e.BC)`${m}/bundle-checkout-success`,
				o = (0, e.BC)`${c}/${"imageId"}`,
				a = (0, e.BC)`${c}/detail`,
				_ = (0, e.BC)`${c}/edit`,
				d = (0, e.BC)`${l}/create`,
				p = (0, e.BC)`${l}/edit/${"variantId"}`,
				h = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				I = (0, e.BC)`${m}/sourcing-kit`,
				E = (0, e.BC)`${m}/delivery-zones`,
				g = (0, e.BC)`${E}/${"zoneId"}/settings`,
				T = (0, e.BC)`${m}/plans`,
				f = (0, e.BC)`${m}/manage-plan`,
				b = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				O = {
					root: m,
					images: c,
					variants: l,
					keys: v,
					legacyImageDetailPage: o,
					imageDetailPage: a,
					imageEditPage: _,
					bundleCheckoutSuccess: n,
					variantCreatePage: d,
					variantEditPage: p,
					sourcingKit: I,
					subscriptions: h,
					deliveryZones: E,
					deliveryZoneSettings: g,
					plansPage: T,
					managePlan: f
				},
				A = r({}, O, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: b
				}),
				D = (0, e.BC)`/accounts/${"accountId"}`,
				M = (0, e.BC)`${D}/images/v2`,
				w = (0, e.BC)`/zones/${"zoneId"}`,
				S = (0, e.BC)`${M}/sourcingkit`,
				R = (0, e.BC)`${S}/migrations`,
				L = (0, e.BC)`${S}/migrations/${"migrationId"}`,
				K = (0, e.BC)`${S}/migrations/${"migrationId"}/logs`,
				q = (0, e.BC)`${S}/migrations/${"migrationId"}/lifecycle/start`,
				X = (0, e.BC)`${S}/migrations/${"migrationId"}/lifecycle/abort`,
				J = (0, e.BC)`${S}/migrations/${"migrationId"}/lifecycle`,
				$ = (0, e.BC)`${S}/sources`,
				W = (0, e.BC)`${S}/sources/${"sourceId"}`,
				H = (0, e.BC)`${S}/sources/${"sourceId"}/connectivity`,
				U = (0, e.BC)`${S}/sources/connectivity_precheck`,
				P = (0, e.BC)`/zones?account.id=${"accountId"}`,
				N = {
					migrationList: R,
					migration: L,
					migrationLogs: K,
					sourceList: $,
					migrationStart: q,
					migrationAbort: X,
					migrationProgress: J,
					source: W,
					sourceConnectivityCheck: H,
					sourceConnectivityPreCheck: U
				},
				F = (0, e.BC)`/billing/upgrade-subscription`,
				te = (0, e.BC)`${D}/settings/transformations`,
				oe = (0, e.BC)`${w}/settings/transformations`,
				ie = (0, e.BC)`${w}/settings/transformations_allowed_origins`,
				Y = (0, e.BC)`${w}/settings/transformations_c2pa`,
				pe = (0, e.BC)`${D}/settings/ut-billing`,
				z = (0, e.BC)`${w}`,
				x = (0, e.BC)`${w}/entitlements`,
				ee = (0, e.BC)`${w}/settings`,
				ne = (0, e.BC)`${w}/flags`,
				ce = (0, e.BC)`${w}/subscription`,
				ae = {
					sourcingKitEndpoints: N,
					deliveryZonesEndpoints: {
						transformationsConfigList: te,
						transformationsZoneConfig: oe,
						allowedOriginsZoneConfig: ie,
						preserveContentCredentialsZoneConfig: Y,
						upgradeSubscription: F,
						utBillingConfig: pe
					},
					zones: {
						zones: P,
						zoneDetail: z,
						zoneSettings: ee,
						zoneEntitlements: x,
						zoneFlags: ne,
						zoneSubscription: ce
					}
				}
		},
		"../react/pages/images/selectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return u
				},
				GH: function() {
					return a
				},
				JZ: function() {
					return d
				},
				aR: function() {
					return n
				},
				db: function() {
					return m
				},
				ib: function() {
					return p
				},
				lW: function() {
					return I
				},
				pT: function() {
					return o
				},
				po: function() {
					return _
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				s = "sourcing_kit_waitlist",
				m = "images",
				c = "unified_images_enabled",
				l = "c2pa_polish",
				v = "CloudflareImages",
				n = E => !!(0, r.BF)(E, "images.transformations_enabled"),
				o = E => Boolean((0, r.BF)(E, "images.enabled")),
				a = E => {
					const g = (0, r.BF)(E, "images.storage");
					return typeof g == "number" && g > 0
				},
				_ = E => Boolean((0, r.BF)(E, "contract.customer_enabled")),
				d = E => Boolean((0, e.oI)(E, m, u)),
				p = E => Boolean((0, i.Le)(E, v, u)),
				h = E => Boolean(getAccountFlipperFlag(E, v, c)),
				I = E => Boolean((0, i.Le)(E, v, l))
		},
		"../react/pages/internal-dns/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				jx: function() {
					return e
				},
				xk: function() {
					return s
				},
				xo: function() {
					return m
				},
				yt: function() {
					return u
				},
				z7: function() {
					return i
				}
			});
			const e = "internal",
				r = {
					ADD: "add",
					IMPORT: "import"
				},
				i = {
					OVERVIEW_PAGE: "internal-dns-overview-page",
					INTERNAL_ZONES_PAGE: "internal-dns-internal-zones-page",
					INTERNAL_ZONE_DETAIL_PAGE: "internal-dns-internal-zone-detail-page",
					VIEWS_PAGE: "internal-dns-views-page",
					VIEWS_TABLE: "internal-dns-views-table",
					VIEWS_TABLE_ROW: "internal-dns-views-table-row",
					VIEW_DETAIL_PAGE: "view-detail-page",
					VIEW_DETAIL_LINKED_ZONES_TABLE: "view-detail-linked-zones-table",
					VIEW_DETAIL_EDIT_NAME_BUTTON: "view-detail-edit-name-button",
					ADD_LINKED_VIEWS_PAGE: "internal-dns-add-linked-views-page",
					ADD_LINKED_ZONES_PAGE: "internal-dns-add-linked-zones-page",
					ADD_REFERENCE_PAGE: "internal-dns-add-reference-page",
					INTERNAL_ZONES_TABLE: "internal-zones-table",
					INTERNAL_ZONE_LINK_BUTTON: "internal-zone-link-button",
					RESOLVER_POLICY_TABLE: "resolver-policy-table",
					RECORDS_SELECTION_CONTROLS: "internal-dns-records-selection-controls",
					RECORD_FORM: "internal-dns-record-form",
					RECORD_FORM_CONTAINER: "internal-dns-record-form-container"
				},
				u = "bulk_internal_zones",
				s = "internal-dns",
				m = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/internal-dns/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return v
				},
				Rl: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(o) {
				for (var a = 1; a < arguments.length; a++) {
					var _ = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, _[p])
					})
				}
				return o
			}

			function u(o, a, _) {
				return a = s(a), a in o ? Object.defineProperty(o, a, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = _, o
			}

			function s(o) {
				var a = m(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(o, a) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}
			const c = "user journey",
				l = "internal-dns";
			let v = function(o) {
				return o.CLICK_GIVE_FEEDBACK = "click give feedback", o.CLICK_NAVIGATION_TAB = "click navigation tab", o.CLICK_CREATE_AN_INTERNAL_ZONE = "click create an internal zone", o.CLICK_SEARCH_BY_ZONE_NAME = "search by zone name", o.CLICK_CREATE_A_VIEW = "click create a view", o.CLICK_SEARCH_BY_RECORD_NAME = "search by record name", o.CLICK_SEARCH_BY_VIEW_NAME = "search by view name", o.CLICK_SAVE_VIEW = "click save view", o.CLICK_SAVE_ZONE = "click save zone", o.CLICK_ZONE_NAME = "click zone name", o.CLICK_ADD_A_RECORD = "click add a record", o.CLICK_ADD_RECORD_SAVE = "click add record save", o.CLICK_RECORD_EDIT = "click record edit", o.CLICK_EDIT_RECORD_SAVE = "click edit record save", o.CLICK_IMPORT_RECORDS = "click import records", o.CLICK_MANAGE_LINKED_VIEWS = "click manage linked views", o.CLICK_SAVE_MANAGE_LINKED_VIEWS = "click save manage linked views", o.CLICK_VIEW_RECORD = "click view record", o
			}({});
			const n = (o, a = {}) => {
				r().sendEvent(o, i({
					category: c,
					product: l
				}, a))
			}
		},
		"../react/pages/magic/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				GF: function() {
					return _
				},
				H3: function() {
					return c
				},
				H8: function() {
					return s
				},
				J: function() {
					return p
				},
				Nz: function() {
					return l
				},
				UQ: function() {
					return I
				},
				Up: function() {
					return u
				},
				W8: function() {
					return v
				},
				Ws: function() {
					return E
				},
				Xg: function() {
					return o
				},
				Y_: function() {
					return a
				},
				_j: function() {
					return i
				},
				a4: function() {
					return d
				},
				jS: function() {
					return h
				},
				rF: function() {
					return m
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/utils/translator.tsx");
			const i = {
					homeUrl: (0, e.BC)`/${"accountId"}/${"productName"}`,
					tunnelHealthchecks: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks`,
					alertNotifications: (0, e.BC)`/${"accountId"}/notifications`,
					networkAnalytics: (0, e.BC)`/${"accountId"}/network-analytics/all-traffic`,
					ipPrefixes: (0, e.BC)`/${"accountId"}/ip-addresses/ip-prefixes`,
					configuration: (0, e.BC)`/${"accountId"}/${"productName"}/configuration`,
					configurationScoping: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/scoping`,
					subnetDetails: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/subnet-details`,
					subnetDetailsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/subnet-details/form`,
					tunnels: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels`,
					tunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/form`,
					createGreTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/gre-tunnels/create`,
					editGreTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/gre-tunnels/edit`,
					createIpsecTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/ipsec-tunnels/create`,
					editIpsecTunnelsForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/tunnels/ipsec-tunnels/edit`,
					interconnects: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects`,
					interconnectsCreateForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create`,
					interconnectsEditForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/edit`,
					createInterconnectGREForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create/gre`,
					createInterconnectMPLSForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/interconnects/create/mpls`,
					staticRoutes: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes`,
					createStaticRoutesForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes/create`,
					editStaticRoutesForm: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/static-routes/edit`,
					magicWanAddressSpace: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/magic_wan_address_space`,
					connectors: (0, e.BC)`/${"accountId"}/magic-wan/configuration/connectors`,
					connectorVisibility: (0, e.BC)`/${"accountId"}/magic-networking/mconn/visibility/${"connectorId"}/performance-analytics`,
					registrationConnector: (0, e.BC)`/${"accountId"}/magic-networking/mconn/registration`,
					editConnector: (0, e.BC)`/${"accountId"}/magic-wan/configuration/connectors/edit`,
					magicFirewallRulesBase: (0, e.BC)`/${"accountId"}/network-security/magic_firewall`,
					pcapsHome: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures`,
					pcapsCaptures: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/captures`,
					pcapsCaptureCreate: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/captures/create-capture`,
					pcapsBuckets: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets`,
					pcapsBucketsCreate: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket`,
					simpleCaptureFormUrl: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket/sample`,
					fullCaptureFormUrl: (0, e.BC)`/${"accountId"}/${"productName"}/packet-captures/buckets/create-bucket/full`,
					networkMonitoring: (0, e.BC)`/${"accountId"}/network-monitoring`,
					networkMonitoringPackets: (0, e.BC)`/${"accountId"}/network-monitoring/packets`,
					networkMonitoringConfiguration: (0, e.BC)`/${"accountId"}/network-monitoring/configuration`,
					networkMonitoringViewConfiguration: (0, e.BC)`/${"accountId"}/network-monitoring/view-configuration`,
					networkMonitoringRules: (0, e.BC)`/${"accountId"}/network-monitoring/rules`,
					networkMonitoringRulesCreateForm: (0, e.BC)`/${"accountId"}/network-monitoring/rules/create`,
					networkMonitoringRulesEditForm: (0, e.BC)`/${"accountId"}/network-monitoring/rules/edit`,
					networkMonitoringOnboarding: (0, e.BC)`/${"accountId"}/network-monitoring/onboarding`,
					overview: (0, e.BC)`/${"accountId"}/magic-wan/overview`,
					overviewSiteDetail: (0, e.BC)`/${"accountId"}/magic-wan/overview/${"siteId"}`,
					sites: (0, e.BC)`/${"accountId"}/magic-wan/sites`,
					createSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/create`,
					editSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit`,
					editSiteTabSite: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/site`,
					editSiteTabNetwork: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/network`,
					editSiteTabTunnels: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/tunnels`,
					editSiteTabRoutes: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/static-routes`,
					editSiteTabBreakOutAppsTabs: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/breakoutapps`,
					policiesLan: (0, e.BC)`/${"accountId"}/magic-wan/sites/edit/${"siteId"}/policies`,
					quickSearchIpPrefixesUrl: (0, e.BC)`/configuration/subnet-details`,
					quickSearchTunnels: (0, e.BC)`/configuration/tunnels`,
					quickSearchInterconnects: (0, e.BC)`/configuration/interconnects`,
					quickSearchStaticRoutes: (0, e.BC)`/configuration/static-routes`,
					quickSearchWanAddressSpace: (0, e.BC)`/configuration/magic_wan_address_space`,
					quickSearchCaptures: "/packet-captures/captures",
					quickSearchBuckets: "/packet-captures/buckets",
					quickSearchNetworkMonitoringRules: "/rules",
					quickSearchNetworkMonitoringViewConfiguration: "/view-configuration",
					quickSearchConnectors: (0, e.BC)`/configuration/connectors`,
					quickSearchSitesTabSite: "/site",
					quickSearchSitesTabNetwork: "/network",
					quickSearchSitesTabTunnels: "/tunnels",
					quickSearchSitesTabStaticRoutes: "/static-routes",
					quickSearchSitesTabBreakOutApps: "/breakoutapps",
					interconnectsTableAll: "/all",
					interconnectsTablePhysical: "/physical",
					interconnectsTableVirtual: "/virtual",
					interconnectsTableCloud: "/cloud",
					interconnectsAllRoute: (0, e.BC)`/${"accountId"}/${"productName"}/all`,
					interconnectsPhysicalRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical`,
					interconnectsVirtualRoute: (0, e.BC)`/${"accountId"}/${"productName"}/virtual`,
					interconnectsCloudRoute: (0, e.BC)`/${"accountId"}/${"productName"}/cloud`,
					interconnectsPhysicalCreateRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create`,
					interconnectsPhysicalCreateSpeedRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/speed/${"slotId"}`,
					interconnectsPhysicalCreateConfirmRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/confirm`,
					interconnectsPhysicalCreateDownloadRoute: (0, e.BC)`/${"accountId"}/${"productName"}/physical/create/download/${"cniId"}`,
					interconnectsConfigureBgpRoute: (0, e.BC)`/${"accountId"}/${"productName"}/${"cniId"}/bgp`,
					interconnectsCloudCreateRoute: (0, e.BC)`/${"accountId"}/${"productName"}/cloud/create`,
					interconnectsCloudGCPCreateRoute: (0, e.BC)`/${"accountId"}/${"productName"}/cloud/create/gcp`,
					tunnelHealthCheckTunnels: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels`,
					tunnelHealthCheckTunnelsList: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/list`,
					tunnelHealthCheckTunnelsHighlight: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight`,
					tunnelHealthCheckTunnelsHighlightDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/highlight/${"tunnelId"}`,
					tunnelHealthCheckTunnelsDetails: (0, e.BC)`/${"accountId"}/${"productName"}/tunnel-healthchecks/tunnels/${"tunnelId"}`,
					asn: (0, e.BC)`/${"accountId"}/${"productName"}/configuration/asn`,
					quickSearchAsn: (0, e.BC)`/configuration/asn`
				},
				u = () => [{
					value: "all",
					label: (0, r.ZP)("account.magic_transit.configuration.static_routes.all_regions")
				}, {
					value: "AFR",
					label: (0, r.ZP)("common.regions.africa")
				}, {
					value: "SAM",
					label: (0, r.ZP)("common.regions.south_america")
				}, {
					value: "APAC",
					label: (0, r.ZP)("common.regions.asia_pacific")
				}, {
					value: "WEUR",
					label: (0, r.ZP)("common.regions.western_europe")
				}, {
					value: "EEUR",
					label: (0, r.ZP)("common.regions.eastern_europe")
				}, {
					value: "WNAM",
					label: (0, r.ZP)("common.regions.western_north_america")
				}, {
					value: "ENAM",
					label: (0, r.ZP)("common.regions.eastern_north_america")
				}, {
					value: "ME",
					label: (0, r.ZP)("common.regions.middle_east")
				}, {
					value: "OC",
					label: (0, r.ZP)("common.regions.oceania")
				}],
				s = g => [{
					value: "low",
					label: g("setting.low")
				}, {
					value: "mid",
					label: g("setting.medium")
				}, {
					value: "high",
					label: g("setting.high")
				}],
				m = g => [{
					value: "request",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				c = g => [{
					value: "unidirectional",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				l = "magic-transit",
				v = "magic-wan",
				n = "gre_tunnel",
				o = "ipsec_tunnel",
				a = "interconnect",
				_ = 64,
				d = 1476,
				p = "mid",
				h = "reply",
				I = g => [{
					value: void 0,
					label: g("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: g("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: g("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				E = g => [{
					value: "all",
					label: g("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: g("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: g("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Yt: function() {
					return u
				},
				_u: function() {
					return r
				},
				bK: function() {
					return e
				},
				lC: function() {
					return i
				}
			});
			const e = {
					VIEW_RULES: "view rules list",
					CREATE_RULE: "create rule",
					UPDATE_RULE: "update rule",
					DELETE_RULE: "delete rule",
					VIEW_CONFIGURATION: "view configuration",
					CREATE_CONFIGURATION: "create configuration",
					UPDATE_CONFIGURATION: "update configuration",
					DELETE_CONFIGURATION: "delete configuration"
				},
				r = "Magic network monitoring",
				i = "user journey",
				u = 60
		},
		"../react/pages/magic/overview/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				VZ: function() {
					return u
				},
				lC: function() {
					return i
				},
				r8: function() {
					return r
				},
				uB: function() {
					return s
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const r = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				i = "user journey",
				u = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				s = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				W_: function() {
					return r
				},
				X: function() {
					return e
				},
				lC: function() {
					return i
				}
			});
			const e = {
					VIEW_BUCKETS_LIST: "view buckets list",
					CREATE_BUCKET: "create bucket",
					VALIDATE_BUCKET: "validate bucket",
					DELETE_BUCKET: "delete bucket",
					VIEW_CAPTURES_LIST: "view captures list",
					CREATE_SIMPLE_CAPTURE: "create simple capture",
					CREATE_FULL_CAPTURE: "create full capture",
					VIEW_FULL_CAPTURE: "view full capture",
					DOWNLOAD_SIMPLE_CAPTURE: "download simple capture"
				},
				r = "Magic packet captures",
				i = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				gb: function() {
					return n
				},
				iP: function() {
					return A
				},
				xL: function() {
					return E
				},
				rD: function() {
					return M
				},
				oT: function() {
					return d
				},
				i2: function() {
					return w
				},
				x1: function() {
					return m
				},
				lW: function() {
					return l
				},
				UA: function() {
					return b
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return T
				},
				PJ: function() {
					return D
				},
				bK: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				s = t("../node_modules/@cloudflare/elements/es/index.js");
			const m = () => r().createElement(c, null, r().createElement("svg", {
					width: "94",
					height: "5",
					viewBox: "0 0 94 5",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M48.416 2.2002L1.99976 2.20021",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M66.3115 2.2002L59.3767 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M78.7949 2.2002L76.021 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M91.2773 2.2002L88.5034 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				c = (0, i.LM)(({
					theme: S
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "58px",
						left: "8%",
						right: "85%"
					}
				})),
				l = () => r().createElement(v, null, r().createElement("svg", {
					width: "211",
					height: "71",
					viewBox: "0 0 211 71",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("circle", {
					cx: "175.5",
					cy: "35.5",
					r: "35.5",
					fill: "#044096"
				}), r().createElement("path", {
					d: "M48.7492 28L2.33298 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M66.6457 28L59.7109 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M79.1281 28L76.3542 28",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M91.6106 28.0005L88.8366 28.0005",
					stroke: "#E2F5FA",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M164.092 28.2002L100.767 28.2002",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				v = (0, i.LM)(({
					theme: S
				}) => ({
					position: "absolute",
					top: "20px",
					left: "15%",
					right: "85%",
					desktop: {
						top: "45px",
						left: "22%",
						right: "78%"
					}
				})),
				n = () => r().createElement(o, null, r().createElement(s.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				o = (0, i.LM)(({
					theme: S
				}) => ({
					position: "absolute",
					width: "90px",
					top: "90px",
					left: "65%",
					right: "35%",
					zIndex: "2",
					desktop: {
						width: "235px"
					}
				})),
				a = () => r().createElement(_, null, r().createElement("svg", {
					width: "104",
					height: "23",
					viewBox: "0 0 104 23",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M36.0259 10.627L2.00024 10.627",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M56.8198 10.627L44.5328 10.627",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M72.8872 10.627L65.326 10.627",
					stroke: "#C3E9F3",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				_ = (0, i.LM)(({
					theme: S
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "130px",
						left: "88%",
						right: "12%"
					}
				})),
				d = () => r().createElement(p, null, r().createElement("svg", {
					width: "13",
					height: "13",
					viewBox: "0 0 13 13",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("ellipse", {
					cx: "6.33672",
					cy: "6.34376",
					rx: "6.33672",
					ry: "6.34376",
					fill: "#086FFF"
				}))),
				p = (0, i.LM)(({
					theme: S
				}) => ({
					position: "absolute",
					top: "90px",
					left: "20%",
					right: "80%",
					desktop: {
						top: "156px",
						left: "23%",
						right: "77%"
					}
				})),
				h = () => r().createElement(I, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				I = (0, i.LM)(({
					theme: S
				}) => ({
					position: "absolute",
					top: "38px",
					left: "83%",
					right: "17%",
					desktop: {
						top: "64px",
						left: "44%",
						right: "56%"
					}
				})),
				E = () => r().createElement(g, null, r().createElement("svg", {
					width: "22",
					height: "22",
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
					fill: "#C5EBF5"
				}))),
				g = (0, i.LM)(({
					theme: S
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "-25px",
						left: "30%",
						right: "70%"
					}
				})),
				T = () => r().createElement(f, null, r().createElement("svg", {
					width: "32",
					height: "32",
					viewBox: "0 0 32 32",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
					fill: "#FBAD41"
				}), r().createElement("path", {
					d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
					fill: "#FBAD41"
				}), r().createElement("path", {
					d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
					fill: "#FBAD41"
				}), r().createElement("path", {
					d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
					fill: "#FBAD41"
				}))),
				f = (0, i.LM)(({
					theme: S
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "70%",
						right: "30%"
					}
				})),
				b = () => r().createElement(O, null, r().createElement("svg", {
					width: "48",
					height: "15",
					viewBox: "0 0 48 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
					fill: "#6ECCE5"
				}), r().createElement("path", {
					d: "M20.9031 6.61694L1.99994 6.61694",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				O = (0, i.LM)(({
					theme: S
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "20%",
						right: "70%"
					}
				})),
				A = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 40",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
					fill: "#C5EBF5"
				})),
				D = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 39 41",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
					fill: "#C5EBF5"
				})),
				M = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 28",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
					fill: "#C5EBF5"
				})),
				w = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 40 46",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
					fill: "#C5EBF5"
				}))
		},
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				A2: function() {
					return c
				},
				He: function() {
					return s
				},
				N$: function() {
					return m
				},
				Qq: function() {
					return i
				},
				ST: function() {
					return u
				},
				wM: function() {
					return r
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const r = {
					PAGE: "apple-login"
				},
				i = "login-apple-jwt",
				u = "cf-test",
				s = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				m = l => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: l ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: l ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: l ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				c = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return i
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let i = function(s) {
				return s.TEMPLATE_SELECTED = "template selected", s.TEMPLATE_PRODUCT_SELECTED = "template product selected", s.TEMPLATE_SAVE_DRAFT = "template save draft", s.TEMPLATE_CANCEL = "template cancel", s.TEMPLATE_DEPLOY = "template deploy", s
			}({});
			const u = (s, m) => r().sendEvent(s, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return h
				},
				C1: function() {
					return v
				},
				GF: function() {
					return M
				},
				HD: function() {
					return g
				},
				IK: function() {
					return s
				},
				L7: function() {
					return i
				},
				Li: function() {
					return p
				},
				Ni: function() {
					return O
				},
				OG: function() {
					return $
				},
				QF: function() {
					return X
				},
				QV: function() {
					return b
				},
				Sx: function() {
					return T
				},
				Ub: function() {
					return q
				},
				X3: function() {
					return o
				},
				bA: function() {
					return S
				},
				eO: function() {
					return a
				},
				fH: function() {
					return d
				},
				fQ: function() {
					return I
				},
				fR: function() {
					return e
				},
				ff: function() {
					return w
				},
				iS: function() {
					return E
				},
				nY: function() {
					return f
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return l
				},
				wp: function() {
					return _
				},
				yu: function() {
					return n
				},
				zF: function() {
					return D
				},
				zG: function() {
					return A
				}
			});
			const e = "api.pages.cloudflare.com",
				r = "cloudflare-workers-and-pages",
				i = {
					dns: "https://cloudflare.com/dns",
					access: "https://www.cloudflare.com/teams-access/",
					access_dashboard: "https://one.dash.cloudflare.com",
					community: "https://community.cloudflare.com/tag/cloudflarepages",
					documentation: {
						access: "https://developers.cloudflare.com/pages/configuration/preview-deployments/#customize-preview-deployments-access",
						buildConfig: "https://developers.cloudflare.com/pages/configuration/build-configuration/",
						buildCache: "https://developers.cloudflare.com/pages/configuration/build-caching/#build-caching-beta",
						configuration: "https://developers.cloudflare.com/pages/configuration/",
						gettingStarted: "https://developers.cloudflare.com/pages/get-started",
						configuringBuilds: "https://developers.cloudflare.com/pages/platform/build-configuration",
						supportedFrameworks: "https://developers.cloudflare.com/pages/configuration/build-configuration/#framework-presets",
						supportedTools: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools",
						supportedLanguages: "https://developers.cloudflare.com/pages/configuration/language-support-and-tools/#supported-languages-and-tools",
						deployingBranches: "https://developers.cloudflare.com/pages/platform/preview-deployments",
						buildPaths: "https://developers.cloudflare.com/pages/configuration/build-watch-paths#build-watch-paths",
						root: "https://developers.cloudflare.com/pages/",
						tutorials: "https://developers.cloudflare.com/pages/how-to",
						customDomains: "https://developers.cloudflare.com/pages/platform/custom-domains/",
						contactSupport: "https://developers.cloudflare.com/support/contacting-cloudflare-support/",
						deployHooks: "https://developers.cloudflare.com/pages/platform/deploy-hooks",
						functions: "https://developers.cloudflare.com/pages/platform/functions",
						functionsRoutes: "https://developers.cloudflare.com/pages/platform/functions/routing/",
						invocationRoutes: "https://developers.cloudflare.com/pages/platform/functions/routing/#function-invocation-routes",
						functionsFailOpenClosed: "https://developers.cloudflare.com/pages/platform/functions/routing/#fail-open--closed",
						functionsBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/",
						functionsAIBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/#ai",
						functionsKVNamespace: "https://developers.cloudflare.com/pages/platform/functions/bindings/#kv-namespaces",
						functionsDurableObjects: "https://developers.cloudflare.com/pages/platform/functions/bindings/#durable-object-namespaces",
						functionsR2: "https://developers.cloudflare.com/pages/platform/functions/bindings/#r2-buckets",
						functionsVectorize: "https://developers.cloudflare.com/pages/platform/functions/bindings/#vectorize-indexes",
						functionsD1: "https://developers.cloudflare.com/pages/platform/functions/bindings/#d1-databases",
						functionsServiceBindings: "https://developers.cloudflare.com/pages/platform/functions/bindings/#service-bindings",
						functionsQueueProducers: "https://developers.cloudflare.com/pages/platform/functions/bindings/#queue-producers",
						functionsAnalyticsEngine: "https://developers.cloudflare.com/pages/platform/functions/bindings/#analytics-engine",
						functionsLimits: "https://developers.cloudflare.com/workers/platform/limits/#worker-limits",
						functionsGABilling: "https://developers.cloudflare.com/pages/platform/functions/pricing/",
						workersObservabilityLimits: "https://developers.cloudflare.com/workers/observability/logs/workers-logs/#limits",
						headers: "https://developers.cloudflare.com/pages/platform/headers",
						redirects: "https://developers.cloudflare.com/pages/platform/redirects",
						branchConfig: "https://developers.cloudflare.com/pages/platform/branch-build-controls/#branch-deployment-controls",
						buildImageVersion: "https://developers.cloudflare.com/pages/platform/language-support-and-tools/",
						compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/platform/compatibility-dates/#compatibility-flags",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						functionsPricing: "https://developers.cloudflare.com/pages/functions/pricing",
						requestLimitFailureMode: "https://developers.cloudflare.com/pages/platform/functions/pricing/#free-plan",
						smartPlacement: "https://developers.cloudflare.com/pages/platform/functions/smart-placement",
						notifications: "https://developers.cloudflare.com/notifications/",
						buildCaching: "https://developers.cloudflare.com/pages/platform/build-caching/",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						gitIntegration: "https://developers.cloudflare.com/pages/platform/git-integration/#troubleshooting",
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/",
						workersStaticAssets: "https://developers.cloudflare.com/workers/static-assets/",
						workersMigrationGuide: "https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/",
						workersCompatibilityMatrix: "https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/#compatibility-matrix",
						pagesV2ToV3MigrationGuide: "https://developers.cloudflare.com/pages/configuration/build-image/#v2-to-v3-migration"
					},
					github: {
						appHomepage: `https://github.com/apps/${r}`,
						installations: "https://github.com/settings/installations",
						newInstallation: `https://github.com/apps/${r}/installations/new`,
						userOAuth: "https://github.com/login/oauth/authorize"
					},
					gitlab: {
						authorize: "https://gitlab.com/oauth/authorize",
						manage: "https://gitlab.com/-/profile/applications"
					},
					webAnalytics: "https://developers.cloudflare.com/analytics/web-analytics/",
					feedbackSurvey: "https://forms.gle/dfM8YfpzY4aV3gv56"
				},
				u = "Allow Members - Cloudflare Pages",
				s = 58,
				m = {
					free: {
						concurrentBuilds: 1,
						maxBuilds: 500,
						dailyFunctionsRequests: 1e5
					},
					pro: {
						concurrentBuilds: 5,
						maxBuilds: 5e3,
						dailyFunctionsRequests: 1e5
					},
					business: {
						concurrentBuilds: 20,
						maxBuilds: 2e4,
						dailyFunctionsRequests: 1e5
					}
				},
				c = "production",
				l = 2e3,
				v = 100,
				n = 350,
				o = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				_ = 10,
				d = "_headers",
				p = "_redirects",
				h = "_routes.json",
				I = "_worker.js",
				E = "do-a-barrel-roll",
				g = [d, p, h, I],
				T = 1024 * 1024 * 25,
				f = 1e3,
				b = {
					createPagesProject: "create pages project",
					updatePagesProject: "update pages project",
					deletePagesProject: "delete pages project",
					clickCreateApplication: "click create application",
					createPagesDeployment: "create pages deployment",
					listPagesProjects: "list pages projects",
					paginatePagesProjects: "paginate pages projects",
					searchPagesProjects: "search pages projects",
					setPagesEnvironmentVariables: "set pages environment variables",
					setPagesKVBindings: "set pages kv bindings",
					setPagesDOBindings: "set pages do bindings",
					setPagesAIBindings: "set pages ai bindings",
					setPagesR2Bindings: "set pages r2 bindings",
					setPagesD1Bindings: "set pages d1 bindings",
					setPagesVectorizeBindings: "set pages vectorize bindings",
					setPagesServiceBindings: "set pages service bindings",
					setPagesQueueProducerBindings: "set pages queue producer bindings",
					setPagesAnalyticsEngineBindings: "set pages analytics engine bindings",
					enablePagesAccessPolicy: "enable pages access policy",
					managePagesPolicies: "manage pages policies",
					enablePagesWebAnalytics: "enable pages web analytics",
					disablePagesWebAnalytics: "disable pages web analytics",
					managePagesMembers: "manage pages members",
					beginDeploymentLogStream: "begin deployment log stream",
					setPagesPlacement: "set pages placement",
					setPagesCpuLimit: "set pages cpu limit",
					firstDeployExploreSettings: "click settings first deploy cta",
					firstDeployCustomDomain: "click custom domain first deploy cta",
					firstDeployWebAnalytics: "click web analytics first deploy cta",
					filterWorkersPages: "filter workers and pages",
					sortWorkersPages: "sort workers and pages",
					toggledPagesSmartPlacement: "toggle pages smart placement",
					downloadDemoProject: "download demo project"
				},
				O = 1e5,
				A = 75e3,
				D = 2e5,
				M = 15e4,
				w = 3e3,
				S = 2250,
				R = "workers",
				L = "cloudflare_pages_build_caching",
				K = 2;
			let q = function(W) {
				return W[W.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", W[W.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", W[W.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", W[W.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", W[W.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", W[W.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", W
			}({});
			const X = 1,
				J = 2,
				$ = 2
		},
		"../react/pages/pages/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return i
				},
				_j: function() {
					return r
				},
				zE: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
					rootNoAccount: (0, e.BC)`/`,
					root: (0, e.BC)`/${"accountId"}/pages`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					newProject: (0, e.BC)`/${"accountId"}/pages/new`,
					newProjectAssetUpload: (0, e.BC)`/${"accountId"}/pages/new/upload`,
					newProjectAssetUploadProjectCreatedNoDeployment: (0, e.BC)`/${"accountId"}/pages/new/upload/${"projectName"}`,
					newProjectStepName: (0, e.BC)`/${"accountId"}/pages/new/project`,
					newProjectWranglerGuide: (0, e.BC)`/${"accountId"}/pages/new/wrangler-guide`,
					newProjectProvider: (0, e.BC)`/${"accountId"}/pages/new/provider/${"provider"}`,
					projectDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}`,
					projectAnalyticsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics`,
					projectAnalytics: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics/${"deploymentType"}(preview|production)`,
					projectDomains: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/domains`,
					projectSettingsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings`,
					projectSettings: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/${"environment"}(preview|production)`,
					projectBuild: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/build`,
					projectManage: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage`,
					projectSettingsBuildDeployment: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/builds-deployments`,
					projectSettingsEnvironmentVariables: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/environment-variables`,
					projectSettingsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/functions`,
					deploymentCreate: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/deployments/new`,
					deploymentDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}`,
					deploymentDetailsFiles: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/files`,
					deploymentDetailsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/functions`,
					deploymentDetailsRedirects: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/redirects`,
					deploymentDetailsHeaders: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/headers`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					verifyEmail: (0, e.BC)`/${"accountId"}/pages/verify-email`,
					access: (0, e.BC)`/${"accountId"}?zone=access`,
					members: (0, e.BC)`/${"accountId"}/members`,
					zoneOnboarding: (0, e.BC)`/${"accountId"}/add-site`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					signUp: (0, e.BC)`/sign-up/pages`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/pages/default-usage-model`,
					webAnalyticsEnable: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage#web_analytics_section`,
					webAnalyticsDashboard: (0, e.BC)`/${"accountId"}/web-analytics/overview?siteTag~in=${"siteTag"}`
				},
				i = {
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/pages/account-settings`,
					checkMissing: (0, e.BC)`/pages/assets/check-missing`,
					metrics: (0, e.BC)`/accounts/${"accountId"}/pages/metrics`,
					projects: (0, e.BC)`/accounts/${"accountId"}/pages/projects`,
					projectDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}`,
					purgeCache: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/purge_build_cache`,
					projectDomains: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains`,
					projectDomain: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains/${"domainName"}`,
					projectUploadFile: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/file`,
					deploymentCreateTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails`,
					deploymentDeleteTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments`,
					deploymentDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/?force=true`,
					deploymentBuildMetadata: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/build_metadata`,
					deploymentFunctions: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/functions`,
					deploymentCancel: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/cancel`,
					deploymentRetry: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/retry`,
					rollbackDeployment: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/rollback`,
					deploymentLogs: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/history/logs`,
					deploymentLiveLogsJWT: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/live`,
					deploymentLiveLogsWS: (0, e.BC)`wss://${"apiHost"}/logs/ws/get?startIndex=${"startIndex"}&jwt=${"jwt"}`,
					deploymentLiveLogsHTTP: (0, e.BC)`https://${"apiHost"}/logs?jwt=${"jwt"}`,
					getDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}`,
					setDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}/envs`,
					gitConnections: (0, e.BC)`/accounts/${"accountId"}/pages/connections`,
					gitConnectionsProvider: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}`,
					gitConnectionPermissions: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/permissions`,
					gitRepos: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos`,
					gitRepo: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}`,
					gitBranches: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}/branches`,
					domainCheck: (0, e.BC)`/accounts/${"accountId"}/pages/domain_check`,
					getSubdomain: (0, e.BC)`/accounts/${"accountId"}/pages/get_subdomain`,
					deployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks`,
					changeDeployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks/${"hookId"}`,
					accessApps: (0, e.BC)`/accounts/${"accountId"}/access/apps`,
					accessIdPs: (0, e.BC)`/accounts/${"accountId"}/access/identity_providers`,
					accessOrg: (0, e.BC)`/accounts/${"accountId"}/access/organizations`,
					accessPolicies: (0, e.BC)`/accounts/${"accountId"}/access/apps/${"appId"}/policies`,
					accountMembers: (0, e.BC)`/accounts/${"accountId"}/members?per_page=50&page=${"page"}&direction=desc`,
					bootstrap: (0, e.BC)`/system/bootstrap`,
					zones: (0, e.BC)`/zones`,
					zone: (0, e.BC)`/zones/${"zoneId"}`,
					zoneDNSRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					zoneDNSRecord: (0, e.BC)`/zones/${"zoneId"}/dns_records/${"recordId"}`,
					uploadFiles: (0, e.BC)`/pages/assets/upload`,
					upsertHashes: (0, e.BC)`/pages/assets/upsert-hashes`,
					uploadToken: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/upload-token`,
					webAnalyticsSiteInfo: (0, e.BC)`/accounts/${"accountId"}/rum/site_info`,
					webAnalyticsSiteTag: (0, e.BC)`/accounts/${"accountId"}/rum/site_info/${"siteTag"}`,
					docsRoot: "https://developers.cloudflare.com",
					buildImageVersions: "https://developers.cloudflare.com/pages/platform/language-support-and-tools.json",
					buildPresets: "https://developers.cloudflare.com/pages/platform/build-configuration.json",
					compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates.json"
				},
				u = m => `${m.subdomain}.pages.dev`,
				s = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return c
				},
				L9: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, a[d])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var _ = a.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				l = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const v = (n, o = {}) => {
				r().sendEvent(n, i({}, o, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				QV: function() {
					return u
				},
				Xn: function() {
					return r
				},
				iH: function() {
					return e
				},
				xq: function() {
					return i
				}
			});
			const e = "iam-authentication",
				r = "login",
				i = "profile",
				u = {
					[r]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa"
					},
					[i]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"../react/pages/r2/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return i
				},
				Jg: function() {
					return m
				},
				_j: function() {
					return r
				},
				vF: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
					root: (0, e.BC)`/${"accountId"}/r2`,
					overview: (0, e.BC)`/${"accountId"}/r2/overview`,
					cliQuickStart: (0, e.BC)`/${"accountId"}/r2/cli`,
					createBucket: (0, e.BC)`/${"accountId"}/r2/new`,
					bucketDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}`,
					bucketDetailsSettings: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/settings`,
					bucketMetrics: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/metrics`,
					objectDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/objects/${"objectKey"}/details`,
					apiTokens: (0, e.BC)`/${"accountId"}/r2/api-tokens`,
					createApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/create`,
					editApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/${"tokenId"}`,
					apiTokenSuccess: (0, e.BC)`/${"accountId"}/r2/api-tokens/success`,
					plans: (0, e.BC)`/${"accountId"}/r2/plans`,
					signUp: (0, e.BC)`/sign-up/r2`,
					verifyEmail: (0, e.BC)`/${"accountId"}/r2/verify-email`,
					profile: (0, e.BC)`/profile/api-tokens`,
					billing: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					migrator: (0, e.BC)`/${"accountId"}/r2/slurper`,
					workersPlans: (0, e.BC)`/${"accountId"}/workers/plans`
				},
				i = {
					canUnsubscribe: (0, e.BC)`/accounts/${"accountId"}/r2/canUnsubscribe`,
					defaultRegion: (0, e.BC)`/accounts/${"accountId"}/r2/defaultRegion`,
					metrics: (0, e.BC)`/accounts/${"accountId"}/r2/metrics`,
					buckets: (0, e.BC)`/accounts/${"accountId"}/r2/buckets`,
					bucket: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}`,
					objects: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects`,
					object: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects/${"objectKey"}`,
					bucketUsage: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/usage`,
					bucketManagedDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/managed`,
					bucketCustomDomains: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/custom`,
					bucketCustomDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/domains/custom/${"domainName"}`,
					bucketCors: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/cors`,
					bucketEventConfig: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration`,
					bucketEventConfigQueue: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration/queues/${"queueId"}`,
					bucketLockRules: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lock`,
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`,
					tokens: (0, e.BC)`/accounts/${"accountId"}/tokens`,
					token: (0, e.BC)`/accounts/${"accountId"}/tokens/${"tokenId"}`,
					rollToken: (0, e.BC)`/accounts/${"accountId"}/tokens/${"tokenId"}/value`,
					catalog: (0, e.BC)`/accounts/${"accountId"}/r2-catalog/${"bucketName"}`
				},
				u = c => {
					const l = "r2.cloudflarestorage.com";
					switch (c) {
						case "default":
							return l;
						case "eu":
							return `eu.${l}`;
						case "fedramp":
							return `fedramp.${l}`
					}
				},
				s = (c, l) => {
					const v = u(l);
					return `https://${c}.${v}`
				},
				m = (c, l, v) => `${s(c,l)}/${v}`
		},
		"../react/pages/r2/selectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				s = "r2migrator",
				m = "r2",
				c = "r2_storage_migrator",
				l = "r2_storage_migrator",
				v = a => getAccountEntitlement(a, "r2.enabled"),
				n = a => Boolean((0, i.Le)(a, c, u)),
				o = a => Boolean(getAccountFlipperFlagsChanges(a, l, s))
		},
		"../react/pages/secrets-store/resources/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return O
				},
				JJ: function() {
					return m
				},
				Js: function() {
					return u
				},
				LN: function() {
					return p
				},
				Nm: function() {
					return a
				},
				Oh: function() {
					return I
				},
				Q2: function() {
					return D
				},
				QF: function() {
					return h
				},
				RR: function() {
					return g
				},
				T_: function() {
					return A
				},
				Xm: function() {
					return c
				},
				Zl: function() {
					return M
				},
				dv: function() {
					return s
				},
				fp: function() {
					return o
				},
				jx: function() {
					return b
				},
				nQ: function() {
					return _
				},
				px: function() {
					return E
				},
				tP: function() {
					return i
				},
				vh: function() {
					return d
				},
				wB: function() {
					return S
				},
				z3: function() {
					return w
				},
				zt: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const i = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				s = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				m = 1,
				c = 10,
				l = 100;
			let v = function(R) {
					return R.NAME = "name", R
				}({}),
				n = function(R) {
					return R.NAME = "name", R
				}({});
			const o = {
				initialPaginationState: {
					page: m,
					perPage: c
				},
				initialSortState: {
					name: v.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: ""
				},
				filters: n,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let a = function(R) {
					return R.NAME = "name", R.COMMENT = "comment", R.TAGS = "tags", R.SERVICES = "services", R.STATUS = "status", R
				}({}),
				_ = function(R) {
					return R.PENDING = "pending", R.ACTIVE = "active", R.DELETED = "deleted", R
				}({}),
				d = function(R) {
					return R.LIST_SECRETS_STORES = "listSecretsStores", R.LIST_SECRETS = "listSecrets", R.GET_SECRET = "getSecret", R.SECRETS_QUOTA = "secretsQuota", R
				}({}),
				p = function(R) {
					return R.CREATE = "create", R.EDIT = "edit", R.DUPLICATE = "duplicate", R
				}({}),
				h = function(R) {
					return R.WORKERS = "workers", R.AI_GATEWAY = "ai_gateway", R
				}({});
			const I = "default_secrets_store";
			let E = function(R) {
				return R.CREATE = "create", R.EDIT = "edit", R.DUPLICATE = "duplicate", R.VIEW = "view", R
			}({});
			const g = "delete_operation",
				T = /^[a-zA-Z0-9_-]+$/,
				f = (R, L, K, q, X) => r.Ry().shape({
					name: r.Z_().required(R("secrets_store.form.create.errors.name.required")).matches(T, R("secrets_store.form.create.errors.name.invalid_characters")).max(255, R("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", R("secrets_store.form.create.errors.value.required"), J => L || X ? !!J : !0).max(1024, R("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, R("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(h), R("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				b = (R, L, K, q, X) => r.Ry().shape({
					secrets: r.IX().of(f(R, L, K, q, X))
				}),
				O = {
					name: "",
					value: "",
					scopes: h.WORKERS,
					comment: ""
				},
				A = "secrets-store.store.secret";
			let D = function(R) {
				return R.DUPLICATE = "duplicate", R.DEPLOY = "deploy", R
			}({});
			const M = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let w = function(R) {
					return R.CREATE_SECRET = "create secrets store secret", R.EDIT_SECRET = "edit secrets store secret", R.DUPLICATE_SECRET = "duplicate secrets store secret", R.DELETE_SECRET = "delete secrets store secret", R.BIND_SECRET = "open secrets store binding drawer", R
				}({}),
				S = function(R) {
					return R.SECRETS_STORE = "secrets store main", R.WORKERS_BINDING = "workers binding drawer", R
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Ev: function() {
					return i
				},
				RY: function() {
					return e
				},
				v9: function() {
					return r
				}
			});
			let e = function(u) {
				return u.LOAD_SCAN_INFO = "load url scan information", u.INITIATE_URL_SCAN = "initiate url scan", u
			}({});
			const r = {
				MANAGE_INSIGHT: "manage security insight",
				BULK_ARCHIVE: "bulk archive security insights",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				ONE_CLICK_RESOLVE_BUTTON: "one click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights",
				CLICK_DETAILS_BUTTON: "click insights row details button"
			};
			let i = function(u) {
				return u.LOAD_THREAT_EVENTS = "load threat events", u.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", u.THREAT_EVENTS_FILTERS = "threat events filters applied", u.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", u.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", u.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", u.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", u
			}({})
		},
		"../react/pages/security/ai-agent/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				PJ: function() {
					return r
				},
				mG: function() {
					return e
				},
				tP: function() {
					return u
				},
				zf: function() {
					return i
				}
			});
			const e = "Hi there, I\u2019m Cloudy! I can help you identify suspicious activity, analyze traffic patterns, and recommend security rule configurations.",
				r = "open cloudy insight",
				i = "set cloudy tool response",
				u = "set cloudy tool error"
		},
		"../react/pages/security/analytics/resources/labels.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				AU: function() {
					return i
				},
				Bc: function() {
					return r
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return u
				}
			});
			const e = {
					unknown: "firewall.analytics.actions.labels.unknown",
					allow: "firewall.analytics.actions.labels.allow",
					bypass: "firewall.analytics.actions.labels.bypass",
					block: "firewall.analytics.actions.labels.drop",
					challenge: "firewall.analytics.actions.labels.challenge",
					jschallenge: "firewall.analytics.actions.labels.jschallenge",
					rewrite: "firewall.analytics.actions.labels.rewrite",
					log: "firewall.analytics.actions.labels.log",
					connection_close: "firewall.analytics.actions.labels.connectionClose",
					challenge_solved: "firewall.analytics.actions.labels.challenge_solved",
					challenge_failed: "firewall.analytics.actions.labels.challenge_failed",
					challenge_bypassed: "firewall.analytics.actions.labels.challenge_bypassed",
					jschallenge_solved: "firewall.analytics.actions.labels.jschallenge_solved",
					jschallenge_failed: "firewall.analytics.actions.labels.jschallenge_failed",
					jschallenge_bypassed: "firewall.analytics.actions.labels.jschallenge_bypassed",
					managed_challenge: "firewall.analytics.actions.labels.managed_challenge",
					managed_challenge_interactive_solved: "firewall.analytics.actions.labels.managed_challenge_interactive_solved",
					managed_challenge_non_interactive_solved: "firewall.analytics.actions.labels.managed_challenge_non_interactive_solved",
					managed_challenge_bypassed: "firewall.analytics.actions.labels.managed_challenge_bypassed",
					skip: "firewall.analytics.actions.labels.skip",
					force_connection_close: "firewall.analytics.actions.labels.force_connection_close"
				},
				r = {
					"Behavioral Analysis": "security_analytics.labels.bot_source.behavioral_analysis",
					Heuristics: "security_analytics.labels.bot_source.heuristics",
					"Machine Learning": "security_analytics.labels.bot_source.machine_learning",
					"Not Computed": "security_analytics.labels.bot_source.not_computed",
					"JS Fingerprinting": "security_analytics.labels.bot_source.js_fingerprinting",
					"Verified Bot": "security_analytics.labels.bot_source.verified_bot",
					"Cloudflare Service": "security_analytics.labels.bot_source.cloudflare_service"
				},
				i = {
					ASN: "asn",
					COUNTRY: "country",
					IP: "ip",
					IP_RANGE: "iprange",
					SECURITY_LEVEL: "securitylevel",
					VALIDATION: "validation",
					ZONE_LOCKDOWN: "zonelockdown",
					WAF: "waf",
					UA_BLOCK: "uablock",
					RATE_LIMIT: "ratelimit",
					FIREWALL_RULES: "firewallrules",
					BIC: "bic",
					HOT: "hot",
					L7DOS: "l7ddos",
					BOT_FIGHT_MODE: "botFight",
					API_SHIELD: "apiShield",
					API_SHIELD_SCHEMA_VALIDATION: "apiShieldSchemaValidation",
					API_SHIELD_TOKEN_VALIDATION: "apiShieldTokenValidation",
					API_SHIELD_SEQUENCE_MITIGATION: "apiShieldSequenceMitigation",
					FIREWALL_CUSTOM: "firewallCustom",
					FIREWALL_MANAGED: "firewallManaged",
					SDD: "sdd",
					DLP: "dlp",
					BOT_MANAGEMENT: "botManagement",
					UNKNOWN: "unknown"
				},
				u = {
					[i.ASN]: "firewall.analytics.services.labels.asn",
					[i.COUNTRY]: "firewall.analytics.services.labels.country",
					[i.IP]: "firewall.analytics.services.labels.ip",
					[i.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[i.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[i.VALIDATION]: "firewall.analytics.services.labels.validation",
					[i.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[i.WAF]: "firewall.analytics.services.labels.waf",
					[i.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[i.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[i.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[i.BIC]: "firewall.analytics.services.labels.bic",
					[i.HOT]: "firewall.analytics.services.labels.hot",
					[i.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[i.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[i.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[i.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[i.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[i.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[i.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[i.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[i.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[i.DLP]: "firewall.analytics.services.labels.dlp",
					[i.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				DC: function() {
					return _
				},
				Ff: function() {
					return c
				},
				Lz: function() {
					return a
				},
				RM: function() {
					return v
				},
				Ss: function() {
					return o
				},
				dR: function() {
					return s
				},
				gW: function() {
					return m
				},
				r5: function() {
					return l
				},
				y$: function() {
					return n
				},
				zs: function() {
					return u
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				i = t("../react/pages/security/analytics/resources/labels.ts");
			const u = ["block", "challenge", "jschallenge", "managed_challenge"],
				s = {
					label: "security_analytics.filters.mitigated",
					parse: d => d === "true" || d === !0,
					urlParam: "mitigated",
					type: e.kE.select,
					options: [!0, !1],
					operators: [r.Gn.equals, r.Gn.notEquals],
					rawLogField: "securityAction"
				},
				m = {
					label: "security_analytics.filters.security_action",
					urlParam: "mitigation-action",
					type: e.kE.select,
					options: Object.keys(i.Bt).filter(d => !["challenge_failed", "jschallenge_failed"].includes(d)),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securityAction"
				},
				c = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(i.e_).filter(d => d !== "unknown"),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securitySources"
				};
			let l = function(d) {
				return d.MITIGATED_BY_WAF = "mitigatedByWAF", d.SERVED_BY_CLOUDFLARE = "servedByCloudflare", d.SERVED_BY_ORIGIN = "servedByOrigin", d
			}({});
			const v = {
					type: "primary",
					inverted: !0,
					px: 2,
					py: 1,
					fontSize: 1,
					ml: "auto"
				},
				n = {
					botScore: "botscore",
					botScoreSrcName: "botscoresrc",
					botDetectionIds: "botdetectionids",
					cacheStatus: "cachecachestatus",
					clientASNDescription: void 0,
					rayName: "rayid",
					clientAsn: "clientasn",
					clientCountryName: "clientcountry",
					clientIP: "clientip",
					clientRequestHTTPHost: "clientrequesthost",
					clientRequestHTTPMethodName: "clientrequestmethod",
					clientRequestHTTPProtocol: "clientrequestprotocol",
					clientRequestPath: "clientrequestpath",
					clientRequestQuery: "clientrequesturi",
					clientRequestReferer: "clientrequestreferer",
					clientRequestScheme: "clientrequestscheme",
					contentScanNumMaliciousObj: "contentscanobjresults",
					contentScanNumObj: "contentscanobjresults",
					contentScanObjTypes: "contentscanobjtypes",
					datetime: "edgestarttimestamp",
					edgeResponseContentTypeName: "edgeresponsecontenttype",
					edgeResponseStatus: "edgeresponsestatus",
					firewallForAiPiiCategories: void 0,
					ja3Hash: "ja3hash",
					ja4: void 0,
					ja4Signals: void 0,
					leakedCredentialCheckResult: void 0,
					originResponseStatus: "originresponsestatus",
					userAgent: "clientrequestuseragent",
					securityAction: "securityactions",
					securitySource: "securitysources",
					wafAttackScore: "wafattackscore",
					wafAttackScoreClass: void 0,
					wafRceAttackScore: "wafrceattackscore",
					wafSqliAttackScore: "wafsqliattackscore",
					wafXssAttackScore: "wafxssattackscore",
					xRequestedWith: "clientxrequestedwith",
					zoneTag: void 0,
					zoneName: "zonename"
				},
				o = {
					suspicious_login_failure: 201326592,
					suspicious_login_attempt: 201326593
				},
				a = "security-analytics-log-explorer";
			let _ = function(d) {
				return d.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', d.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', d.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', d.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', d.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', d.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", d.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", d.OPEN_SIDE_DRAWER = "open security analytics side drawer", d.CLOSE_SIDE_DRAWER = "close security analytics side drawer", d
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Fj: function() {
					return l
				},
				kq: function() {
					return c
				},
				xr: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, a[d])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var _ = a.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const l = {
					[c.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[c.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[c.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[c.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[c.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[c.JWT_VALIDATION]: {
						viewJWTRules: "view a page of jwt rules",
						addJWTRule: "add a jwt rule",
						editJWTRule: "edit a jwt rule",
						deleteJWTRule: "delete a jwt rule",
						reprioritizeJWTRule: "reprioritize a jwt rule",
						viewJWTConfigs: "view jwt configs",
						addJWTConfig: "add a jwt config",
						editJWTConfig: "edit a jwt config",
						deleteJWTConfig: "delete a jwt config"
					},
					[c.SETTINGS]: {
						redirectToFirewallRulesTemplate: "redirect to firewall rules",
						redirectToPages: "redirect to uploaded developer portal on pages",
						listSessionIdentifiers: "list session identifiers",
						listRequestsContainingSessionIdentifiers: "list requests containing session identifiers",
						addOrRemoveSessionIdentifiers: "add or remove session identifiers",
						listAllFallthroughSettings: "list fallthrough settings",
						listAllFallthroughSchemas: "list fallthrough schemas",
						redirectToCustomRules: "redirect to custom rules from create fallthrough template"
					}
				},
				v = ({
					name: n,
					category: o = "user journey",
					product: a = c.MAIN,
					productName: _,
					additionalData: d
				}) => {
					r().sendEvent(n, i({
						category: o,
						product: a,
						productName: _
					}, d || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Fm: function() {
					return u
				},
				N3: function() {
					return e
				},
				UN: function() {
					return i
				},
				h1: function() {
					return r
				}
			});
			let e = function(s) {
					return s.INITIAL_FETCH_SCORES = "view bots scores distribution", s.FETCH_CONFIGURATION = "view bots configuration page", s.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", s.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", s.UPDATE_SETTINGS = "update bots settings", s.DELETE_RULE = "delete bots ruleset", s.UPDATE_RULE = "update bots ruleset", s.FETCH_RULES = "view bots ruleset", s.CONFIGURE_BOT_MANAGEMENT = "view bots management", s.WAF_RULES_REDIRECT = "redirect waf rules", s.CHANGED_ZONE_SETTINGS = "change zone setting", s
				}({}),
				r = function(s) {
					return s.PROVIDED_TEMPLATE = "provided template link in detection card", s.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", s.USE_TEMPLATE = "use template", s.CREATE_FIREWALL_RULE = "create firewall rule", s.WAF_RULES = "waf rules", s
				}({});
			const i = "user journey",
				u = "Bots"
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				AL: function() {
					return c
				},
				NC: function() {
					return u
				},
				WZ: function() {
					return m
				},
				YC: function() {
					return s
				},
				aR: function() {
					return i
				},
				nz: function() {
					return r
				}
			});
			var e = t("../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts");
			const r = {
					[e.MQ.WebApplicationExploits]: "settings.tabs.web-application-exploits",
					[e.MQ.DdosAttacks]: "settings.tabs.ddos-attacks",
					[e.MQ.BotTraffic]: "settings.tabs.bot-traffic",
					[e.MQ.ApiAbuse]: "settings.tabs.api-abuse",
					[e.MQ.ClientSideAbuse]: "settings.tabs.client-side-abuse",
					[e.MQ.DomainSettings]: "settings.filters.domain-settings",
					[e.MQ.WebAssetsAndEndpoints]: "settings.filters.web-assets-and-endpoints",
					[e.MQ.RuleTemplates]: "settings.filters.rule-templates",
					[e.MQ.Detections]: "settings.filters.detections",
					[e.MQ.General]: "settings.filters.general"
				},
				i = {
					[e.MQ.WebApplicationExploits]: "security-waf",
					[e.MQ.DdosAttacks]: "retarget",
					[e.MQ.BotTraffic]: "security-bots",
					[e.MQ.ApiAbuse]: "api-security",
					[e.MQ.ClientSideAbuse]: "user-multi"
				},
				u = {
					300: {
						label: "time.num_minutes",
						smartCount: 5
					},
					900: {
						label: "time.num_minutes",
						smartCount: 15
					},
					1800: {
						label: "time.num_minutes",
						smartCount: 30
					},
					2700: {
						label: "time.num_minutes",
						smartCount: 45
					},
					3600: {
						label: "time.num_hours",
						smartCount: 1
					},
					7200: {
						label: "time.num_hours",
						smartCount: 2
					},
					10800: {
						label: "time.num_hours",
						smartCount: 3
					},
					14400: {
						label: "time.num_hours",
						smartCount: 4
					},
					28800: {
						label: "time.num_hours",
						smartCount: 8
					},
					57600: {
						label: "time.num_hours",
						smartCount: 16
					},
					86400: {
						label: "time.num_days",
						smartCount: 1
					},
					604800: {
						label: "time.num_weeks",
						smartCount: 1
					},
					2592e3: {
						label: "time.num_months",
						smartCount: 1
					},
					31536e3: {
						label: "time.num_years",
						smartCount: 1
					}
				};
			let s = function(l) {
				return l.LOAD_SETTINGS = "load setting", l.OPEN_SIDE_MODAL_SETTING = "open side modal setting", l.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", l.CHANGE_SETTING = "change setting", l.FILTER_SETTING = "filter setting", l
			}({});
			const m = {
					id: e.At.ManagedRuleset,
					titleKey: "settings.cards.managed-ruleset.title",
					descriptionKey: "settings.cards.managed-ruleset.description",
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/",
					tabs: [e.MQ.WebApplicationExploits, e.MQ.DdosAttacks],
					filters: [e.MQ.Detections],
					isGeneral: !1
				},
				c = {
					id: e.At.OwaspCore,
					titleKey: "settings.cards.owasp-core.title",
					descriptionKey: "settings.cards.owasp-core.description",
					documentationLink: "https://developers.cloudflare.com/waf/managed-rules/reference/owasp-core-ruleset/",
					tabs: [e.MQ.WebApplicationExploits],
					filters: [e.MQ.Detections],
					isGeneral: !1
				}
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				At: function() {
					return u
				},
				MQ: function() {
					return e
				},
				fo: function() {
					return i
				}
			});
			let e = function(s) {
					return s.WebApplicationExploits = "web-application-exploits", s.DdosAttacks = "ddos-attacks", s.BotTraffic = "bot-traffic", s.ApiAbuse = "api-abuse", s.ClientSideAbuse = "client-side-abuse", s.DomainSettings = "domain-settings", s.WebAssetsAndEndpoints = "web-assets-and-endpoints", s.RuleTemplates = "rule-templates", s.Detections = "detections", s.General = "general", s
				}({}),
				r = function(s) {
					return s.DomainSettings = "domain-settings", s.WebAssetsAndEndpoints = "web-assets-and-endpoints", s.RuleTemplates = "rule-templates", s.Detections = "detections", s
				}({}),
				i = function(s) {
					return s.Tab = "tabs", s.Filters = "filters", s.Search = "search", s
				}({}),
				u = function(s) {
					return s.OptOut = "opt-out", s.AILabyrinth = "ai-labyrinth", s.BlockAIBots = "block-ai-bots", s.BrowserIntegrity = "browser-integrity", s.ChallengePassage = "challenge-passage", s.ClientCertificates = "client-certificates", s.CloudflareManagedRuleset = "cloudflare-managed-ruleset", s.CreateDeveloperPortal = "create-developer-portal", s.CustomFallthrough = "custom-fallthrough", s.EndpointDiscovery = "endpoint-discovery", s.FirewallAi = "firewall-ai", s.HttpDdos = "http-ddos", s.IpAccessRules = "ip-access-rules", s.IpLists = "ip-lists", s.JwtValidation = "jwt-validation", s.Labels = "labels", s.LeakedCredentialCheck = "leaked-credential-check", s.MaliciousUploadDetection = "malicious-upload-detection", s.ManagedRuleset = "managed-ruleset", s.Mtls = "mtls", s.NetworkDdos = "network-ddos", s.OwaspCore = "owasp-core", s.RateLimitAuthentication = "rate-limit-authentication", s.ReplaceInsecureJavascript = "replace-insecure-javascript", s.RobotsTxt = "robots-txt", s.SequenceDetection = "sequence-detection", s.SchemaDiscovery = "schema-discovery", s.SchemaValidation = "schema-validation", s.SecurityLevel = "security-level", s.SecurityTxt = "security-txt", s.SensitiveDataDetection = "sensitive-data-detection", s.SessionIdentifiers = "session-identifiers", s.SslDdos = "ssl-ddos", s.TokenConfigurations = "token-configurations", s.UserAgentBlocking = "user-agent-blocking", s.VolumetricAbuse = "volumetric-abuse", s.ZoneLockdown = "zone-lockdown", s.ContinuousScriptMonitoring = "continuous-script-monitoring", s.BotManagement = "bot-management", s.SuperBotFightMode = "super-bot-fight-mode", s.BotFightMode = "bot-fight-mode", s
				}({})
		},
		"../react/pages/security/overview/resources/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				AZ: function() {
					return u
				},
				BQ: function() {
					return s
				},
				Ht: function() {
					return i
				},
				Kx: function() {
					return e
				},
				NJ: function() {
					return c
				},
				S: function() {
					return r
				},
				oD: function() {
					return m
				}
			});
			let e = function(l) {
				return l.NAME = "description", l.SOURCE = "source", l.LAST_UPDATE = "lastUpdatedAt", l.ACTIVITY = "activity", l
			}({});
			const r = 5;
			let i = function(l) {
					return l.EXTERNAL_DOCUMENTATION = "external_documentation", l.LINK_TO_MANAGED = "link_to_managed_rules", l.LINK_TO_EVENTS = "link_to_security_events", l.LINK_TO_DDOS = "link_to_ddos", l.LINK_BOT_MGMT = "link_to_bot_mgmt", l.LINK_TO_AI_AUDIT = "link_to_ai_audit", l.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", l.LINK_TO_PAGE_SHIELD = "link_to_page_shield", l.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", l.LINK_TO_SECURITY_EVENTS = "link_to_security_events", l.LINK_TO_IP_RULE = "link_to_ip_rule", l.LINK_TO_CONFIGURATION = "link_to_configuration", l.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", l.LINK_TO_WEB_ASSETS = "link_to_web_assets", l.LINK_TO_DOMAINS = "link_to_domains", l
				}({}),
				u = function(l) {
					return l.LOAD_INSIGHTS = "load overview action items", l.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", l.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", l.CLICK_ACTION_INSIGHT = "click overview action item suggestion", l
				}({});
			const s = "security-overview-all-suggestions",
				m = [{
					title: "overview.modules.tab",
					url: "/"
				}, {
					title: "overview.all_suggestions.tab",
					url: "/all"
				}];
			let c = function(l) {
				return l.ARCHIVED = "archived", l.FRAUD_AND_ACCOUNT_ABUSE = "fraud_account_abuse", l
			}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return M
				},
				FV: function() {
					return J
				},
				KH: function() {
					return A
				},
				Ks: function() {
					return U
				},
				Lj: function() {
					return H
				},
				MC: function() {
					return o
				},
				Mq: function() {
					return O
				},
				OV: function() {
					return X
				},
				Oq: function() {
					return D
				},
				QM: function() {
					return f
				},
				SI: function() {
					return W
				},
				SJ: function() {
					return I
				},
				Sk: function() {
					return R
				},
				Ti: function() {
					return P
				},
				Uc: function() {
					return b
				},
				Uq: function() {
					return l
				},
				Uv: function() {
					return q
				},
				V0: function() {
					return v
				},
				VT: function() {
					return d
				},
				YC: function() {
					return L
				},
				j$: function() {
					return E
				},
				qc: function() {
					return h
				},
				sV: function() {
					return w
				},
				sW: function() {
					return $
				},
				u8: function() {
					return _
				},
				v5: function() {
					return n
				},
				xg: function() {
					return K
				},
				yd: function() {
					return T
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				i = t("../react/pages/security/page-shield/resources/types.ts");

			function u(N) {
				for (var F = 1; F < arguments.length; F++) {
					var te = arguments[F] != null ? Object(arguments[F]) : {},
						oe = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(te).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(te, ie).enumerable
					})), oe.forEach(function(ie) {
						s(N, ie, te[ie])
					})
				}
				return N
			}

			function s(N, F, te) {
				return F = m(F), F in N ? Object.defineProperty(N, F, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[F] = te, N
			}

			function m(N) {
				var F = c(N, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function c(N, F) {
				if (typeof N != "object" || N === null) return N;
				var te = N[Symbol.toPrimitive];
				if (te !== void 0) {
					var oe = te.call(N, F || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(N)
			}
			const l = 50,
				v = 9,
				n = "copy script url page shield",
				o = "disable page shield",
				a = "click documentation link",
				_ = "enable page shield",
				d = "filter search page shield",
				p = "filter search view all page shield",
				h = "hover score tooltip page shield",
				I = "open alert modal page shield",
				E = "change pagination page shield",
				g = "close script modal page shield",
				T = "open script modal page shield",
				f = "select alert type page shield",
				b = "sort column page shield",
				O = {
					CLICK_CREATE_POLICY: "click create policy form link",
					CLICK_ENABLE_POLICY_TOGGLE: "enable policy toggle",
					CLICK_EDIT_POLICY: "click edit policy",
					CLICK_BACK_POLICY: "click back to all policies link",
					CLICK_ADD_SOURCES: "click add sources",
					CLICK_REFRESH_SUGGESTIONS: "click refresh suggestions",
					SELECT_DIRECTIVE_DEFAULT_VALUE: "select directive default value",
					SELECT_DIRECTIVE_VALUE: "select directive value",
					EXPAND_DIRECTIVE_VALUE: "expand directive",
					DEPLOY_POLICY: "deploy policy",
					DELETE_POLICY: "delete policy"
				},
				A = {
					STARTS_WITH: r.Gn.startsWith,
					ENDS_WITH: r.Gn.endsWith,
					EQUALS: r.Gn.equals,
					CONTAINS: r.Gn.contains,
					DOES_NOT_CONTAIN: r.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: r.Gn.in
				},
				D = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [A.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [A.CONTAINS, A.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [A.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [A.INCLUDES, A.ENDS_WITH, A.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				M = u({}, D, {
					urls: u({}, D.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				w = {
					type: {
						example: "first_party",
						type: e.kE.select,
						options: ["first_party", "unknown"],
						label: "common.type",
						urlParam: "type",
						operators: [r.Gn.equals]
					},
					name: {
						example: "cookie_1",
						operators: [r.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.name",
						urlParam: "name"
					},
					domain: {
						example: "hostname.com",
						operators: [r.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.domain",
						urlParam: "domain"
					},
					path: {
						example: "/",
						operators: [r.Gn.equals],
						type: e.kE.string,
						label: "firewall.page_shield.path",
						urlParam: "path"
					},
					same_site: {
						operators: [r.Gn.equals],
						type: e.kE.select,
						options: ["lax", "strict", "none"],
						label: "firewall.page_shield.same_site",
						urlParam: "same_site"
					},
					http_only: {
						operators: [r.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.http_only",
						urlParam: "http_only"
					},
					secure: {
						operators: [r.Gn.equals],
						type: e.kE.select,
						options: ["true", "false"],
						label: "firewall.page_shield.secure",
						urlParam: "secure"
					}
				};
			let S = function(N) {
				return N.SECURITY_THREATS = "Security Threats", N.C2_BOTNET = "C2 & Botnet", N.CRYPTOMINING = "Cryptomining", N.MALWARE = "Malware", N.PHISHING = "Phishing", N.SPYWARE = "Spyware", N.DGA_DOMAINS = "DGA Domains", N.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", N
			}({});
			const R = "https://www.cloudflare.com/plans/enterprise/contact/",
				L = {
					[i.I1.BASE_URI]: "page_shield.policies.form.base_uri",
					[i.I1.CHILD]: "page_shield.policies.form.child",
					[i.I1.CONNECT]: "page_shield.policies.form.connections",
					[i.I1.DEFAULT]: "page_shield.policies.form.default",
					[i.I1.FONT]: "page_shield.policies.form.font",
					[i.I1.FORM_ACTION]: "page_shield.policies.form.form",
					[i.I1.FRAME]: "page_shield.policies.form.frame",
					[i.I1.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[i.I1.IMAGE]: "page_shield.policies.form.img",
					[i.I1.MANIFEST]: "page_shield.policies.form.manifest",
					[i.I1.MEDIA]: "page_shield.policies.form.media",
					[i.I1.OBJECT]: "page_shield.policies.form.object",
					[i.I1.SCRIPT]: "page_shield.policies.form.script",
					[i.I1.STYLE]: "page_shield.policies.form.style",
					[i.I1.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[i.I1.WORKER]: "page_shield.policies.form.worker"
				},
				K = {
					[i.I1.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[i.I1.CHILD]: "firewall.page_shield.policies.table.child",
					[i.I1.CONNECT]: "firewall.page_shield.policies.table.connections",
					[i.I1.DEFAULT]: "firewall.page_shield.policies.table.default",
					[i.I1.FONT]: "firewall.page_shield.policies.table.font",
					[i.I1.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[i.I1.FRAME]: "firewall.page_shield.policies.table.frame",
					[i.I1.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[i.I1.IMAGE]: "firewall.page_shield.policies.table.img",
					[i.I1.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[i.I1.MEDIA]: "firewall.page_shield.policies.table.media",
					[i.I1.OBJECT]: "firewall.page_shield.policies.table.object",
					[i.I1.SCRIPT]: "firewall.page_shield.policies.table.script",
					[i.I1.SCRIPT_ELEM]: "firewall.page_shield.policies.table.script",
					[i.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[i.I1.STYLE_ELEM]: "firewall.page_shield.policies.table.style",
					[i.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[i.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				q = {
					[i.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[i.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[i.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[i.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[i.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				X = {
					[i.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[i.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				J = {
					CONFIGURE_PAGE_SHIELD: "configure page shield",
					VIEW_PAGE_SHIELD_SETTINGS: "view page shield settings",
					VIEW_DETECTED_SCRIPTS: "view detected scripts",
					VIEW_DETECTED_CONNECTIONS: "view detected connections",
					VIEW_DETECTED_COOKIES: "view detected cookies",
					MANAGE_PAGE_SHIELD_POLICY: "manage page shield policy",
					VIEW_PAGE_SHIELD_POLICIES: "view page shield policies",
					SHOW_MUTABLE_VERSION_TOOLTIP: "show mutable version warning tooltip",
					OPEN_MUTABLE_VERSION_TOOLTIP: "open mutable version warning tooltip"
				},
				$ = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				W = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				H = {
					[i.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[i.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[i.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				U = {
					[i.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[i.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[i.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				P = {
					[i.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[i.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[i.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return u.CP
				},
				Ks: function() {
					return u.Ks
				},
				sV: function() {
					return u.sV
				},
				SI: function() {
					return u.SI
				},
				v5: function() {
					return u.v5
				},
				xg: function() {
					return u.xg
				},
				YC: function() {
					return u.YC
				},
				MC: function() {
					return u.MC
				},
				Xe: function() {
					return f.Xe
				},
				u8: function() {
					return u.u8
				},
				Oq: function() {
					return u.Oq
				},
				VT: function() {
					return u.VT
				},
				qc: function() {
					return u.qc
				},
				V0: function() {
					return u.V0
				},
				Lj: function() {
					return u.Lj
				},
				k2: function() {
					return f.k2
				},
				$g: function() {
					return f.$g
				},
				SJ: function() {
					return u.SJ
				},
				KH: function() {
					return u.KH
				},
				Mq: function() {
					return u.Mq
				},
				FV: function() {
					return u.FV
				},
				j$: function() {
					return u.j$
				},
				I1: function() {
					return f.I1
				},
				Wq: function() {
					return f.Wq
				},
				jf: function() {
					return f.jf
				},
				sW: function() {
					return u.sW
				},
				Uq: function() {
					return u.Uq
				},
				yd: function() {
					return u.yd
				},
				QM: function() {
					return u.QM
				},
				Uc: function() {
					return u.Uc
				},
				R$: function() {
					return f.R$
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return E
				},
				SE: function() {
					return v
				},
				m: function() {
					return h
				},
				xP: function() {
					return p
				},
				xl: function() {
					return d
				},
				Tb: function() {
					return _
				},
				h3: function() {
					return g
				},
				xq: function() {
					return ie
				},
				SQ: function() {
					return U
				},
				C0: function() {
					return P
				},
				av: function() {
					return A
				},
				W3: function() {
					return b
				},
				WO: function() {
					return S
				},
				Dk: function() {
					return K
				},
				we: function() {
					return X
				},
				Yt: function() {
					return W
				},
				ex: function() {
					return $
				},
				E1: function() {
					return J
				},
				dm: function() {
					return M
				},
				oK: function() {
					return R
				},
				qZ: function() {
					return H
				},
				_4: function() {
					return N
				},
				qo: function() {
					return F
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");

			function s(Y) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var z = arguments[pe] != null ? Object(arguments[pe]) : {},
						x = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(z).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(z, ee).enumerable
					})), x.forEach(function(ee) {
						m(Y, ee, z[ee])
					})
				}
				return Y
			}

			function m(Y, pe, z) {
				return pe = c(pe), pe in Y ? Object.defineProperty(Y, pe, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[pe] = z, Y
			}

			function c(Y) {
				var pe = l(Y, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function l(Y, pe) {
				if (typeof Y != "object" || Y === null) return Y;
				var z = Y[Symbol.toPrimitive];
				if (z !== void 0) {
					var x = z.call(Y, pe || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(Y)
			}
			const v = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", Y => (i().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), Y)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", Y => (i().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), Y)),
				o = (Y, pe) => {
					var z;
					return JSON.stringify(s({}, pe == null || (z = pe[0]) === null || z === void 0 ? void 0 : z.parameters, Y))
				};
			let a = "";
			const _ = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (Y, pe, z) => (a = o(pe, z), Y)).on("success", Y => (i().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), Y)).on("error", (Y, pe, z) => o(pe, z) === a ? Y : {
					type: "noop"
				}),
				d = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				p = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", Y => (i().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), Y)),
				h = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				I = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", Y => (i().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), Y)),
				E = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				g = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var T = t("../react/app/redux/normalizer.js"),
				f = t("../react/pages/security/page-shield/resources/types.ts");
			const b = Y => Y.pageShield.configuration,
				O = Y => {
					var pe;
					return (pe = Y.pageShield.configuration.data) === null || pe === void 0 ? void 0 : pe.enabled
				},
				A = Y => {
					var pe;
					return (pe = b(Y)) === null || pe === void 0 ? void 0 : pe.data
				},
				D = Y => Y.pageShield.scripts,
				M = Y => Y.pageShield.script,
				w = Y => Y.pageShield.connections,
				S = Y => Y.pageShield.connection,
				R = (0, T.P1)("pageShieldScripts", D),
				L = (0, T.P1)("pageShieldScript", M),
				K = (0, T.P1)("pageShieldConnections", w),
				q = (0, T.P1)("pageShieldConnection", S),
				X = (Y, pe) => Y === f.Wq.SCRIPT_MONITOR ? R(pe) || [] : K(pe) || [],
				J = (Y, pe) => Y === f.Wq.SCRIPT_MONITOR ? D(pe) || [] : w(pe) || [],
				$ = (Y, pe) => Y === f.Wq.SCRIPT_MONITOR ? L(pe) : q(pe),
				W = Y => Y.pageShield.domainIntel,
				H = Y => Y.pageShield.whoIsRecord,
				U = (Y, pe, z) => {
					var x;
					const ee = Object.values(z).map(ne => ({
						key: ne,
						label: u.Uv[ne],
						score: Y[ne]
					})).filter(ne => ne.score !== void 0 && ne.score <= pe);
					return pe === u.V0 && ee.length === 0 && ((x = Y.js_integrity_score) !== null && x !== void 0 ? x : 100) <= pe && ee.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ee
				},
				P = (Y, pe) => Object.values(pe).filter(z => Y[z] === !0).map(z => u.OV[z]),
				N = Y => Y === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				F = (Y, pe) => Y[f.$g.MagecartScore] !== void 0 && Y[f.$g.MagecartScore] <= pe || Y[f.$g.MalwareScore] !== void 0 && Y[f.$g.MalwareScore] <= pe || Y[f.$g.CryptominingScore] !== void 0 && Y[f.$g.CryptominingScore] <= pe || Y.js_integrity_score !== void 0 && Y.js_integrity_score <= pe,
				te = ["cdn.jsdelivr.net", "unpkg.com"],
				oe = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ie = Y => {
					if (Y.includes("@latest")) {
						const z = Y.split("@latest");
						if (z.length != 2) return;
						const x = z[0].length,
							ee = x + "@latest".length;
						return [x, ee]
					}
					if (!!te.some(z => Y.includes(z)))
						for (const z of oe) {
							const x = Y.match(z);
							if (!x) continue;
							const ee = x.index;
							if (ee === 0) return null;
							const ne = ee + x[0].length;
							return [ee, ne]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$g: function() {
					return v
				},
				I1: function() {
					return s
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return l
				},
				Xe: function() {
					return m
				},
				jf: function() {
					return c
				},
				k2: function() {
					return o
				}
			});

			function e(a) {
				for (var _ = 1; _ < arguments.length; _++) {
					var d = arguments[_] != null ? Object(arguments[_]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(h) {
						return Object.getOwnPropertyDescriptor(d, h).enumerable
					})), p.forEach(function(h) {
						r(a, h, d[h])
					})
				}
				return a
			}

			function r(a, _, d) {
				return _ = i(_), _ in a ? Object.defineProperty(a, _, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[_] = d, a
			}

			function i(a) {
				var _ = u(a, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function u(a, _) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(a, _ || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(a)
			}
			let s = function(a) {
				return a.BASE_URI = "base-uri", a.CHILD = "child-src", a.CONNECT = "connect-src", a.DEFAULT = "default-src", a.FONT = "font-src", a.FORM_ACTION = "form-action", a.FRAME = "frame-src", a.FRAME_ANCESTORS = "frame-ancestors", a.IMAGE = "img-src", a.MANIFEST = "manifest-src", a.MEDIA = "media-src", a.OBJECT = "object-src", a.SCRIPT = "script-src", a.SCRIPT_ELEM = "script-src-elem", a.STYLE = "style-src", a.STYLE_ELEM = "style-src-elem", a.WORKER = "worker-src", a.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", a
			}({});
			const m = e({}, s, {
				BLOCK_ALL_MIXED_CONTENT: "block-all-mixed-content",
				DISOWN_OPENER: "disown-opener",
				NAVIGATE_TO: "navigate-to",
				PLUGIN_TYPES: "plugin-types",
				PREFETCH_SRC: "prefetch-src",
				REFERRER: "referrer",
				REFLECTED_XSS: "reflected-xss",
				REPORT_TO: "report-to",
				REPORT_URI: "report-uri",
				REQUIRE_SRI_FOR: "require-sri-for",
				REQUIRE_TRUSTED_TYPES_FOR: "require-trusted-types-for",
				SANDBOX: "sandbox",
				TRUSTED_TYPES: "trusted-types",
				WEBRTC: "webrtc"
			});
			let c = function(a) {
					return a.MONITOR = "monitor", a.POLICIES = "policies", a.SETTINGS = "settings", a
				}({}),
				l = function(a) {
					return a.SCRIPT_MONITOR = "script", a.CONNECTION_MONITOR = "connection", a.COOKIE_MONITOR = "cookie", a
				}({}),
				v = function(a) {
					return a.CryptominingScore = "cryptomining_score", a.MalwareScore = "malware_score", a.MagecartScore = "magecart_score", a
				}({}),
				n = function(a) {
					return a.DataflowScore = "dataflow_score", a.ObfuscationScore = "obfuscation_score", a
				}({}),
				o = function(a) {
					return a.DomainMalicious = "domain_reported_malicious", a.UrlMalicious = "url_reported_malicious", a
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				_C: function() {
					return d
				},
				_R: function() {
					return p
				},
				dY: function() {
					return I
				},
				fy: function() {
					return T
				},
				ji: function() {
					return _
				},
				pR: function() {
					return h
				},
				pV: function() {
					return f
				},
				rj: function() {
					return g
				},
				yR: function() {
					return b
				},
				zf: function() {
					return E
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				s = t("../react/utils/translator.tsx"),
				m = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				l = t("../node_modules/@cloudflare/elements/es/index.js");

			function v(O) {
				for (var A = 1; A < arguments.length; A++) {
					var D = arguments[A] != null ? Object(arguments[A]) : {},
						M = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(D).filter(function(w) {
						return Object.getOwnPropertyDescriptor(D, w).enumerable
					})), M.forEach(function(w) {
						n(O, w, D[w])
					})
				}
				return O
			}

			function n(O, A, D) {
				return A = o(A), A in O ? Object.defineProperty(O, A, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[A] = D, O
			}

			function o(O) {
				var A = a(O, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function a(O, A) {
				if (typeof O != "object" || O === null) return O;
				var D = O[Symbol.toPrimitive];
				if (D !== void 0) {
					var M = D.call(O, A || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(O)
			}
			const _ = 10;
			let d = function(O) {
					return O.MTLS_ACCESS = "mTLS-enforced authentication", O.ZONE_LOCKDOWN = "Zone lockdown", O.USER_AGENT = "User agent blocking", O.EMAIL_VALIDITY = "Disposable email checks", O.IP_BASED = "IP-based rule", O.GEOGRAPHY_BASE = "Geography-based rule", O
				}({}),
				p = function(O) {
					return O.LEAKED_CREDENTIALS = "Leaked Credentials Checks", O
				}({});
			const h = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				I = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: d.GEOGRAPHY_BASE,
					trackedEvent: h.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: d.IP_BASED,
					trackedEvent: h.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: d.USER_AGENT,
					trackedEvent: h.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: d.ZONE_LOCKDOWN,
					trackedEvent: h.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				E = {
					[m.X.UI_SECTION]: O => ({
						[d.MTLS_ACCESS]: {
							ruleName: d.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${O.account.id}/${O.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[d.ZONE_LOCKDOWN]: {
							ruleName: d.ZONE_LOCKDOWN,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [l.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${O.account.id}/configurations/lists`
								}]
							})
						},
						[d.GEOGRAPHY_BASE]: {
							ruleName: d.GEOGRAPHY_BASE,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[d.IP_BASED]: {
							ruleName: d.IP_BASED,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [l.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${O.account.id}/configurations/lists`
								}]
							})
						},
						[d.USER_AGENT]: {
							ruleName: d.USER_AGENT,
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${O.account.id}/configurations/lists`
								}]
							})
						},
						[d.EMAIL_VALIDITY]: {
							ruleName: d.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: u().createElement(s.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[m.X.WAF_RULES]: {
						[d.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot)")',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[d.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				g = {
					[m.X.WAF_RULES]: {
						[p.LEAKED_CREDENTIALS]: {
							ruleName: p.LEAKED_CREDENTIALS,
							capability: "security_rules.rules.capability.fraud",
							expression: "(cf.waf.credential_check.password_leaked)",
							ratelimit: {
								characteristics: ["ip.src", "cf.colo.id"],
								requests_to_origin: !1,
								requests_per_period: 5,
								period: 10,
								mitigation_timeout: 10
							},
							defaultAction: "block",
							description: "rules.template.rate-limiting.lcc"
						}
					},
					[m.X.UI_SECTION]: {
						[p.LEAKED_CREDENTIALS]: {
							ruleName: p.LEAKED_CREDENTIALS,
							displayName: u().createElement(s.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(s.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let T = function(O) {
				return O.DISCOVERY = "discovery", O.SEQUENCES = "sequences", O.SCHEMA_VALIDATION = "schema-validation", O.SETTINGS = "settings", O.API_RULES = "api-rules", O.UPGRADE = "upgrade", O
			}({});
			const f = v({}, c.g, {
				[r.df.HttpRequestFirewallManaged]: v({}, c.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: v({}, c.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: v({}, c.g[r.df.HttpRateLimit], {
					DOC_DESCRIPTION: "rate-limiting.doc.description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/rate-limiting-rules/create-zone-dashboard/"
				}),
				ZONE_LOCKDOWN: {
					HEADING: "zone_lockdown_card.title",
					DOC_LINK: "https://developers.cloudflare.com/waf/tools/zone-lockdown",
					DOC_DESCRIPTION: "zone_lockdown_card.doc_description"
				},
				USER_AGENT: {
					HEADING: "user_agent_rules.card.title",
					DOC_LINK: "https://developers.cloudflare.com/waf/tools/user-agent-blocking",
					DOC_DESCRIPTION: "user_agent_rules.card.doc_description"
				},
				IP_ACCESS: {
					HEADING: "firewall.access_rules.package.name",
					DOC_LINK: "https://developers.cloudflare.com/waf/tools/ip-access-rules/",
					DOC_DESCRIPTION: "firewall.access_rules.package.doc_description"
				}
			});
			let b = function(O) {
				return O.APP_SEC_MVP = "app-security-navigation-mvp", O.APP_SEC_DEFAULT_FOR_ALL = "app-security-default-for-all", O
			}({})
		},
		"../react/pages/security/resources/hooks/useUnificationGate.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				D$: function() {
					return g
				},
				Ud: function() {
					return f
				},
				o7: function() {
					return E
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("webpack/sharing/consume/default/react/react"),
				i = t.n(r),
				u = t("../react/pages/security/resources/constants.tsx"),
				s = t("../react/app/components/Persistence/index.tsx"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(m),
				l = t("../react/common/hooks/useActiveState.ts"),
				v = t("../react/app/components/Persistence/api.ts"),
				n = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				o = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				_ = t.n(a),
				d = t("../react/common/components/ExternalLink.tsx"),
				p = t("../react/utils/translator.tsx"),
				h = t("../node_modules/@cloudflare/elements/es/index.js"),
				I = t("../../../../node_modules/@sentry/core/esm/exports.js");
			const E = () => !!(0, e.Z)(u.yR.APP_SEC_MVP),
				g = () => {
					const {
						flags: b
					} = (0, s.yZ)();
					return {
						isInDefaultAllGate: !!(0, e.Z)(u.yR.APP_SEC_DEFAULT_FOR_ALL),
						hasDefaultAllFlag: !!b.hasEnabledDefaultUnifiedSecurity
					}
				},
				T = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_9Ktoks1h6dU2W7s",
				f = () => {
					const {
						flags: b,
						actions: O
					} = (0, s.yZ)(), {
						t: A
					} = (0, p.QT)(), {
						hasEnabledDefaultUnifiedSecurity: D,
						hasEnabledSecurityNavigation: M
					} = b, w = (0, e.Z)(u.yR.APP_SEC_DEFAULT_FOR_ALL), [S, R] = (0, l.Z)("securityNavStatus");
					(0, r.useEffect)(() => {
						!S && (D || M) && I.Tb(new Error("AppSec Unification error: User is opted in, but old navigation is showing"), {
							extra: {
								navFlag: S,
								hasEnabledDefaultUnifiedSecurity: D,
								hasEnabledSecurityNavigation: M,
								appsecDefaultGate: w
							}
						})
					}, [b, w, S]);
					const L = async () => {
						await (0, o.SS)({
							title: i().createElement(a.Trans, {
								id: "security.opt_in.modal.title"
							}),
							description: i().createElement(h.ZC, null, i().createElement(a.Trans, {
								id: "security.opt_in.modal.default_all.description",
								Components: [d.dL],
								componentProps: [{
									to: T,
									target: "_blank",
									rel: "noopener noreferrer",
									display: "inline"
								}]
							})),
							cancelButtonText: A("security.opt_in.modal.confirm"),
							actionButtonText: A("security.opt_in.modal.cancel"),
							destructive: !0
						}) && K()
					}, K = () => {
						O.toggleSecurityNavigation(!D, !0);
						const J = (0, n.jB)(D);
						(0, n.yM)(J, {
							value: !D
						})
					}, q = (0, r.useCallback)(async () => {
						if (w && D) {
							await L();
							return
						}
						if (w) {
							K();
							return
						}
						O.toggleSecurityNavigation(!M, !1)
					}, [D, M]);
					return {
						setSecurityNav: (0, r.useCallback)(J => {
							if (w && J.flags.hasEnabledDefaultUnifiedSecurity === void 0) {
								R(!0), (0, v.Sp)({
									hasEnabledDefaultUnifiedSecurity: !0,
									hasEnabledSecurityNavigation: !0
								}), c().identify({
									hasEnabledSecurityNavigation: !0,
									hasEnabledDefaultUnifiedSecurity: !0
								});
								const W = (0, n.jB)(J.flags.hasEnabledDefaultUnifiedSecurity);
								(0, n.yM)(W, {
									value: !0
								});
								return
							}
							if (J.flags.hasEnabledDefaultUnifiedSecurity || J.flags.hasEnabledSecurityNavigation) {
								var $;
								R(!0), c().identify({
									hasEnabledSecurityNavigation: J.flags.hasEnabledSecurityNavigation,
									hasEnabledDefaultUnifiedSecurity: ($ = J.flags) === null || $ === void 0 ? void 0 : $.hasEnabledDefaultUnifiedSecurity
								})
							}
						}, [w, b]),
						toggleSecurityNav: q,
						navFlag: S,
						feedbackFormLink: T
					}
				}
		},
		"../react/pages/security/resources/types.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				X: function() {
					return e
				}
			});
			let e = function(i) {
					return i.UI_SECTION = "UI_SECTION", i.WAF_RULES = "WAF_RULES", i
				}({}),
				r = function(i) {
					return i.Low = "low", i.Medium = "medium", i.Critical = "critical", i
				}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				jB: function() {
					return v
				},
				yM: function() {
					return l
				},
				yf: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, a[d])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var _ = a.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CLICK_OPT_IN = "click opt in security navigation", n.CLICK_OPT_IN_BUTTON = "click opt in button", n.CLICK_OPT_OUT_BUTTON = "click opt out button", n.CLICK_NEXT_STEP = "click opt in next step", n.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", n.DISPLAY_MODAL = "display opt in modal", n.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", n.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", n.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", n.DEFAULT_ALL_OPT_OUT = "user in default-all gate opts out", n.DEFAULT_ALL_REENABLES = "user in default-all gate re-enables new UI", n.DEFAULT_ALL_INIT = "user in default-all gate is opted-in be default", n.NEW_DASHBOARD_EXPERIENCE = "click on new dashboard experience button", n
			}({});
			const l = (n, o = {}) => {
					r().sendEvent(n, i({}, o || {}))
				},
				v = n => {
					if (n === !0) return c.DEFAULT_ALL_OPT_OUT;
					if (n === !1) return c.DEFAULT_ALL_REENABLES;
					if (n === void 0) return c.DEFAULT_ALL_INIT
				}
		},
		"../react/pages/security/settings/hooks/api.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$y: function() {
					return d
				},
				Ai: function() {
					return n
				},
				B: function() {
					return v
				},
				BT: function() {
					return s
				},
				CK: function() {
					return l
				},
				F3: function() {
					return p
				},
				JP: function() {
					return i
				},
				O_: function() {
					return o
				},
				X2: function() {
					return u
				},
				YO: function() {
					return h
				},
				_c: function() {
					return I
				},
				je: function() {
					return _
				},
				ll: function() {
					return m
				},
				qD: function() {
					return c
				},
				tw: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const i = async E => {
				var g, T;
				const f = await (0, e.get)(`/zones/${E}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((g = f == null ? void 0 : f.body) === null || g === void 0 || (T = g.result) === null || T === void 0 ? void 0 : T.value) === "enabled"
			}, u = async (E, g) => (await (0, e.post)(`/zones/${E}/content-upload-scan/${g?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), g), s = async E => {
				var g;
				const T = await (0, e.get)(`/zones/${E}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((g = T == null ? void 0 : T.body) === null || g === void 0 ? void 0 : g.result) || []
			}, m = async (E, g) => {
				var T;
				const f = await (0, e.post)(`/zones/${E}/content-upload-scan/payloads`, {
					body: [g]
				});
				return (T = f == null ? void 0 : f.body) === null || T === void 0 ? void 0 : T.result
			}, c = async (E, g) => (await (0, e.del)(`/zones/${E}/content-upload-scan/payloads/${g}`, {
				hideErrorAlert: !0
			}), g), l = async E => {
				var g;
				const T = await (0, e.get)(`/zones/${E}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((g = T == null ? void 0 : T.body) === null || g === void 0 ? void 0 : g.pii_detection_enabled)
			}, v = async (E, g) => (await (0, e.put)(`/zones/${E}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: g
				}
			}), g), n = async E => {
				var g, T;
				const f = await (0, e.get)(`/zones/${E}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((g = f == null ? void 0 : f.body) === null || g === void 0 || (T = g.result) === null || T === void 0 ? void 0 : T.enabled)
			}, o = async (E, g) => {
				var T, f;
				const b = await (0, e.post)(`/zones/${E}/leaked-credential-checks`, {
					body: {
						enabled: g
					}
				});
				return !!((T = b == null ? void 0 : b.body) === null || T === void 0 || (f = T.result) === null || f === void 0 ? void 0 : f.enabled)
			}, a = async E => {
				var g;
				const T = await (0, e.get)(`/zones/${E}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (g = T == null ? void 0 : T.body) === null || g === void 0 ? void 0 : g.result
			}, _ = async (E, g) => {
				var T;
				const f = await (0, e.post)(`/zones/${E}/leaked-credential-checks/detections`, {
					body: g
				});
				return (T = f == null ? void 0 : f.body) === null || T === void 0 ? void 0 : T.result
			}, d = async (E, g) => (await (0, e.del)(`/zones/${E}/leaked-credential-checks/detections/${g}`, {
				hideErrorAlert: !0
			}), g), p = async (E, g) => {
				await (0, e.put)(`/zones/${E}/security-center/securitytxt`, {
					body: g
				})
			}, h = async E => {
				await (0, e.del)(`/zones/${E}/security-center/securitytxt`)
			}, I = async E => (await (0, e.get)(`/zones/${E}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Xu: function() {
					return d
				},
				Io: function() {
					return f
				},
				FQ: function() {
					return J
				},
				vU: function() {
					return _
				},
				M: function() {
					return h
				},
				d7: function() {
					return p
				},
				Oz: function() {
					return T
				},
				Np: function() {
					return L
				},
				WR: function() {
					return v
				},
				bE: function() {
					return K
				},
				u_: function() {
					return a
				},
				pf: function() {
					return b
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				s = t("../react/pages/security/settings/resources/index.ts"),
				m = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				l = t("../react/utils/translator.tsx");
			const v = () => (0, u.useSelector)(s.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				o = () => !!useZoneEntitlement(n),
				a = () => {
					const {
						t: $
					} = (0, l.QT)(), W = c.Z_().required($("common.field_is_required")).max(24, $("labels.apply.form.name.error.max_characters")).matches(s.DG, $("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", $("labels.apply.form.name.error.cf_forbidden"), P => !s.aW.test(P)), H = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: P => c.Ry().shape({
							[s.n5.NAME]: P ? c.Z_() : W,
							[s.n5.DESCRIPTION]: P ? c.Z_().optional() : c.Z_().max(150, $("labels.apply.form.description.error.max_characters"))
						})
					}, U = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[s.N2.NAME]: "",
							[s.N2.SOURCE]: s.W3,
							[s.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[s.N2.NEW_LABEL_NAME]: W
						})
					};
					return {
						LABELS_APPLY_FORM: H,
						EDIT_LABELS_MODAL_FORM: U
					}
				},
				_ = ({
					modalHeaderFixedHeight: $ = 62,
					modalDefaultPaddings: W = 16
				} = {}) => {
					const H = (0, i.useRef)(null),
						U = (0, i.useRef)(null),
						[P, N] = (0, i.useState)(0),
						[F, te] = (0, i.useState)(0),
						oe = `calc(100vh - ${P}px - ${F}px - ${W}px)`,
						[ie, Y] = (0, i.useState)("");
					return (0, i.useEffect)(() => {
						const pe = () => {
							var z, x, ee, ne;
							const ce = H == null || (z = H.current) === null || z === void 0 ? void 0 : z.offsetHeight,
								ye = U == null || (x = U.current) === null || x === void 0 ? void 0 : x.offsetHeight,
								ae = ((ee = ce) !== null && ee !== void 0 ? ee : 0) + $,
								Oe = (ne = ye) !== null && ne !== void 0 ? ne : 0;
							N(ae), te(Oe)
						};
						return pe(), window.addEventListener("resize", pe), () => window.removeEventListener("resize", pe)
					}, []), {
						searchTerm: ie,
						setSearchTerm: Y,
						scrollableSectionMaxHeight: oe,
						topMenuRef: H,
						bottomMenuRef: U
					}
				},
				d = $ => {
					const W = v(),
						H = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${$}`,
							queryFn: () => (0, r.JP)($),
							enabled: W
						}),
						P = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${$}`,
							queryFn: () => (0, r.BT)($),
							enabled: W && !!(U == null ? void 0 : U.data)
						}),
						N = (0, e.useMutation)({
							mutationFn: async ({
								enabled: oe
							}) => await (0, r.X2)($, oe),
							onSuccess: oe => {
								H.setQueryData([`content-scanning-enabled-${$}`], oe)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: oe => (0, r.ll)($, oe),
							onSuccess: oe => {
								H.setQueryData([`content-scanning-detections-${$}`], oe)
							}
						}),
						te = (0, e.useMutation)({
							mutationFn: oe => (0, r.qD)($, oe),
							onSuccess: oe => {
								var ie;
								const Y = (ie = H.getQueryData(`content-scanning-detections-${$}`)) !== null && ie !== void 0 ? ie : [];
								H.setQueryData([`content-scanning-detections-${$}`], Y.filter(({
									id: pe
								}) => pe !== oe))
							}
						});
					return {
						entitled: W,
						loading: U.isLoading || P.isLoading,
						error: U.isError || P.isError,
						enabled: {
							data: U.data,
							isToggling: N.isLoading,
							toggleEnabled: async oe => N.mutateAsync({
								enabled: oe
							})
						},
						detections: {
							data: P.data,
							add: F.mutateAsync,
							delete: te.mutateAsync,
							loading: F.isLoading || te.isLoading
						}
					}
				},
				p = () => {
					const $ = (0, u.useSelector)(s.cN),
						W = (0, u.useSelector)(s.bH),
						H = (0, u.useSelector)(s.P3),
						U = (0, u.useSelector)(s.Ri);
					return {
						hasEditPermission: $,
						isEnabled: H && (W.hasSimilarLeaked || W.hasUsernameAndPasswordLeaked || U)
					}
				},
				h = $ => {
					const W = p(),
						H = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${$}`,
							queryFn: () => (0, r.Ai)($),
							enabled: !!W.isEnabled,
							retry: 1
						}),
						P = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${$}`,
							queryFn: () => (0, r.tw)($),
							enabled: !!W.isEnabled && !!(U == null ? void 0 : U.data)
						}),
						N = (0, e.useMutation)({
							mutationFn: ({
								enabled: oe
							}) => (0, r.O_)($, oe),
							onSuccess: oe => {
								H.setQueryData([`leaked-credentials-enabled-${$}`], oe)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: async oe => await (0, r.je)($, oe),
							onSuccess: oe => {
								var ie;
								const Y = (ie = H.getQueryData(`leaked-credentials-detections-${$}`)) !== null && ie !== void 0 ? ie : [];
								H.setQueryData([`leaked-credentials-detections-${$}`], [...Y, oe])
							}
						}),
						te = (0, e.useMutation)({
							mutationFn: oe => (0, r.$y)($, oe),
							onSuccess: oe => {
								var ie;
								const Y = (ie = H.getQueryData(`leaked-credentials-detections-${$}`)) !== null && ie !== void 0 ? ie : [];
								H.setQueryData([`leaked-credentials-detections-${$}`], Y.filter(({
									id: pe
								}) => pe !== oe))
							}
						});
					return {
						entitled: W.isEnabled,
						hasEditPermissions: W.hasEditPermission,
						loading: U.isLoading || P.isLoading,
						error: U.isError || U.isError,
						enabled: {
							data: U.data,
							isToggling: N.isLoading,
							toggleEnabled: async oe => N.mutateAsync({
								enabled: oe
							})
						},
						detections: {
							data: P.data,
							add: F.mutateAsync,
							delete: te.mutateAsync,
							loading: F.isLoading || te.isLoading
						}
					}
				};
			var I = t("../react/common/utils/useQueryCache.ts");
			const E = "security-txt",
				g = {
					securityTxt: ({
						zoneId: $
					}) => [E, $]
				},
				T = $ => (0, e.useQuery)({
					queryKey: g.securityTxt({
						zoneId: $
					}),
					queryFn: () => (0, r._c)($),
					select: W => W.result
				}),
				f = $ => {
					const {
						invalidate: W
					} = (0, I.o)(g.securityTxt({
						zoneId: $
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)($),
						onSuccess: async () => {
							await W(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				b = $ => {
					const {
						invalidate: W
					} = (0, I.o)(g.securityTxt({
						zoneId: $
					}));
					return (0, e.useMutation)({
						mutationFn: H => (0, r.F3)($, H),
						onSuccess: async () => {
							await W(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var O = t("../../../../node_modules/lodash/isEqual.js"),
				A = t.n(O),
				D = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function M($) {
				for (var W = 1; W < arguments.length; W++) {
					var H = arguments[W] != null ? Object(arguments[W]) : {},
						U = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(H).filter(function(P) {
						return Object.getOwnPropertyDescriptor(H, P).enumerable
					})), U.forEach(function(P) {
						w($, P, H[P])
					})
				}
				return $
			}

			function w($, W, H) {
				return W = S(W), W in $ ? Object.defineProperty($, W, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[W] = H, $
			}

			function S($) {
				var W = R($, "string");
				return typeof W == "symbol" ? W : String(W)
			}

			function R($, W) {
				if (typeof $ != "object" || $ === null) return $;
				var H = $[Symbol.toPrimitive];
				if (H !== void 0) {
					var U = H.call($, W || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (W === "string" ? String : Number)($)
			}
			const L = $ => {
					const {
						queryKey: W,
						zoneId: H
					} = (0, D.hL)($), {
						isLoading: U,
						isError: P,
						isSuccess: N,
						data: F,
						refetch: te,
						isRefetching: oe
					} = (0, e.useQuery)({
						queryKey: W,
						queryFn: () => D.Mi.getLabels(M({
							zoneId: H
						}, $)),
						onSuccess: () => {
							var ie;
							const Y = $ == null || (ie = $.filters) === null || ie === void 0 ? void 0 : ie.source;
							(Y === s.LABEL_SOURCES.MANAGED || Y === s.LABEL_SOURCES.USER) && (0, s.Tf)({
								name: s.QJ.FILTER_USER_MANAGED_LABELS,
								product: s.Iv.SECURITY_SETTINGS,
								pageName: s.R.LABELS_LIST,
								type: Y
							})
						}
					});
					return {
						data: F == null ? void 0 : F.result,
						errors: F == null ? void 0 : F.errors,
						paginationData: F == null ? void 0 : F.result_info,
						isLoading: U,
						isError: P,
						isSuccess: N,
						refetch: te,
						isRefetching: oe
					}
				},
				K = ({
					labels: $,
					preselectedLabels: W
				}) => {
					const {
						USER: H,
						MANAGED: U
					} = s.LABEL_SOURCES, [P, N] = (0, i.useState)({
						[H]: [],
						[U]: []
					}), [F, te] = (0, i.useState)(new Set), oe = F.size > 0, [ie, Y] = (0, i.useState)(!1), pe = ne => {
						te(ce => {
							const ye = new Set(ce);
							return ye.has(ne.name) ? ye.delete(ne.name) : ye.add(ne.name), ye
						})
					}, z = ne => F.has(ne.name), x = (ne, ce) => {
						const ye = z(ne) ? 1 : 0;
						return (z(ce) ? 1 : 0) - ye
					}, ee = ne => {
						N(ce => ({
							[H]: [...ne ? ne[H] : ce[H]].sort(x),
							[U]: [...ne ? ne[U] : ce[U]].sort(x)
						}))
					};
					return (0, i.useEffect)(() => {
						if ($ && !ie) {
							if (W) {
								const ne = new Set;
								$.forEach(ce => {
									W.some(ye => A()(ye, ce)) && ne.add(ce.name)
								}), te(ne)
							}
							Y(!0)
						}
					}, [$, W, ie]), (0, i.useEffect)(() => {
						if ($ && ie) {
							const ne = $.reduce((ye, ae) => (ae.source === H ? ye[H].push(ae) : ae.source === U && ye[U].push(ae), ye), {
									[H]: [],
									[U]: []
								}),
								ce = {
									[H]: ne[H].sort(x),
									[U]: ne[U].sort(x)
								};
							N(ce)
						}
					}, [H, U, $, ie]), {
						userAndManagedLabels: P,
						setUserAndManagedLabels: N,
						toggleSelectedLabel: pe,
						isLabelSelected: z,
						sortLabelsBySelectedStatus: ee,
						hasLabelsSelected: oe
					}
				};
			var q = t("../react/app/redux/index.ts"),
				X = t("../react/pages/security/settings/resources/selectors.ts");
			const J = ($ = "") => {
				const W = (0, q.p4)(X.Xs),
					H = W && ($ == null ? void 0 : $.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: W,
					hasDeprecatedParameter: H
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				FQ: function() {
					return l.FQ
				},
				Iv: function() {
					return v.Iv
				},
				M: function() {
					return l.M
				},
				Np: function() {
					return l.Np
				},
				Oz: function() {
					return l.Oz
				},
				Q4: function() {
					return v.Q4
				},
				QJ: function() {
					return v.QJ
				},
				R: function() {
					return v.R
				},
				TG: function() {
					return v.TG
				},
				Tf: function() {
					return v.Tf
				},
				WR: function() {
					return l.WR
				},
				Xs: function() {
					return v.Xs
				},
				Xu: function() {
					return l.Xu
				},
				ZF: function() {
					return v.ZF
				},
				bE: function() {
					return l.bE
				},
				bH: function() {
					return v.bH
				},
				dC: function() {
					return v.dC
				},
				eC: function() {
					return v.eC
				},
				m8: function() {
					return v.m8
				},
				pf: function() {
					return l.pf
				},
				ui: function() {
					return v.ui
				},
				vc: function() {
					return v.vc
				},
				zF: function() {
					return v.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/app/components/Forbidden.jsx"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(m),
				l = t("../react/pages/security/settings/hooks/index.ts"),
				v = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(37800), t.e(97842), t.e(16691), t.e(11624), t.e(94012), t.e(1091), t.e(33023), t.e(98733), t.e(68204), t.e(2515), t.e(22038), t.e(30823), t.e(77216), t.e(40517), t.e(39760), t.e(66270), t.e(29271), t.e(30906), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				o = () => {
					const {
						t: a
					} = (0, m.useI18n)(), _ = (0, e.xk)("waf");
					return u().createElement(s.T3, {
						parentPageLabel: a("navigation.zone.security"),
						title: a("navigation.zone.security.settings"),
						type: "narrow"
					}, _.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			y.ZP = o
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Mi: function() {
					return g
				},
				hL: function() {
					return E
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				i = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../react/common/hooks/useAccountId.ts"),
				m = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				c = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const l = {
				labels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, c.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, c.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var v = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(f, b) {
				if (f == null) return {};
				var O = _(f, b),
					A, D;
				if (Object.getOwnPropertySymbols) {
					var M = Object.getOwnPropertySymbols(f);
					for (D = 0; D < M.length; D++) A = M[D], !(b.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(f, A) || (O[A] = f[A]))
				}
				return O
			}

			function _(f, b) {
				if (f == null) return {};
				var O = {},
					A = Object.keys(f),
					D, M;
				for (M = 0; M < A.length; M++) D = A[M], !(b.indexOf(D) >= 0) && (O[D] = f[D]);
				return O
			}

			function d(f) {
				for (var b = 1; b < arguments.length; b++) {
					var O = arguments[b] != null ? Object(arguments[b]) : {},
						A = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(O).filter(function(D) {
						return Object.getOwnPropertyDescriptor(O, D).enumerable
					})), A.forEach(function(D) {
						p(f, D, O[D])
					})
				}
				return f
			}

			function p(f, b, O) {
				return b = h(b), b in f ? Object.defineProperty(f, b, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[b] = O, f
			}

			function h(f) {
				var b = I(f, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function I(f, b) {
				if (typeof f != "object" || f === null) return f;
				var O = f[Symbol.toPrimitive];
				if (O !== void 0) {
					var A = O.call(f, b || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(f)
			}
			const E = f => {
					const b = (0, e.p4)(r.Cu),
						O = (0, s.F)(),
						A = T.labels(d({
							accountId: O,
							zoneId: b
						}, f ? d({}, f) : {})),
						D = (0, i.o)(A);
					return d({
						zoneId: b,
						queryKey: A,
						batchInvalidateLabels: async () => {
							await D.batchInvalidate({
								queryKeysToPredicateInvalidate: [u.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, D)
				},
				g = {
					getLabels: async f => {
						var b, O, A, D;
						let {
							zoneId: M,
							hideErrorAlert: w = !0
						} = f, S = a(f, ["zoneId", "hideErrorAlert"]);
						return (await m.get(l.labels.toUrl({
							zoneId: M
						}), {
							parameters: {
								page: S == null ? void 0 : S.page,
								per_page: S == null ? void 0 : S.per_page,
								with_mapped_resource_counts: S == null ? void 0 : S.with_mapped_resource_counts,
								filter: S == null || (b = S.filters) === null || b === void 0 ? void 0 : b.search,
								source: (0, n.sQ)(S == null || (O = S.filters) === null || O === void 0 ? void 0 : O.source),
								order: S == null || (A = S.sort) === null || A === void 0 ? void 0 : A.id,
								direction: (S == null ? void 0 : S.sort) ? (S == null || (D = S.sort) === null || D === void 0 ? void 0 : D.desc) ? o.Sr.desc : o.Sr.asc : void 0
							},
							hideErrorAlert: w
						})).body
					},
					getLabel: async f => {
						let {
							zoneId: b,
							labelName: O,
							hideErrorAlert: A = !0
						} = f, D = a(f, ["zoneId", "labelName", "hideErrorAlert"]);
						const M = (0, n.mm)(O) ? l.managedLabel.toUrl({
							zoneId: b,
							labelName: O
						}) : l.userLabel.toUrl({
							zoneId: b,
							labelName: O
						});
						return (await m.get(M, {
							parameters: {
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts
							},
							hideErrorAlert: A
						})).body
					},
					editLabel: async ({
						zoneId: f,
						label: b,
						replace: O
					}) => {
						const {
							name: A
						} = b, D = a(b, ["name"]);
						return (await (O ? m.put : m.patch)(l.userLabel.toUrl({
							zoneId: f,
							labelName: b.name
						}), {
							body: D
						})).body
					},
					deleteLabel: async ({
						zoneId: f,
						labelName: b
					}) => (await m.del(l.userLabel.toUrl({
						zoneId: f,
						labelName: b
					}))).body,
					createLabel: async f => {
						let {
							zoneId: b
						} = f, O = a(f, ["zoneId"]);
						const {
							product: A
						} = O, D = a(O, ["product"]);
						return (await m.post(l.userLabels.toUrl({
							zoneId: b
						}), {
							body: [D]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: f,
						user: b,
						managed: O,
						operationIds: A,
						replace: D
					}) => (await (D ? m.put : m.post)(l.operationsLinkedToLabels.toUrl({
						zoneId: f
					}), {
						body: d({}, b ? {
							user: {
								labels: b
							}
						} : {}, O ? {
							managed: {
								labels: O
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: A
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: f,
						labelName: b,
						operationIds: O
					}) => {
						const A = (0, n.mm)(b) ? l.managedLabelOperations.toUrl({
							zoneId: f,
							labelName: b
						}) : l.userLabelOperations.toUrl({
							zoneId: f,
							labelName: b
						});
						return (await m.put(A, {
							body: {
								selector: {
									include: {
										operation_ids: O
									}
								}
							}
						})).body
					}
				},
				T = {
					labels: f => {
						let {
							accountId: b,
							zoneId: O
						} = f, A = a(f, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, b, O, ...(0, v.isEmpty)(A) ? [] : [A]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return h
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return c
				},
				GE: function() {
					return O
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return m
				},
				LABELS_LIST_TOASTS: function() {
					return _
				},
				LABEL_SOURCES: function() {
					return s
				},
				QH: function() {
					return d
				},
				V: function() {
					return T
				},
				W3: function() {
					return i
				},
				Yn: function() {
					return M
				},
				_8: function() {
					return a
				},
				_c: function() {
					return f
				},
				aW: function() {
					return I
				},
				dC: function() {
					return D
				},
				gY: function() {
					return b
				},
				j8: function() {
					return l
				},
				jz: function() {
					return p
				},
				n5: function() {
					return E
				},
				om: function() {
					return v
				},
				w: function() {
					return r
				},
				zF: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(w) {
				return w.EXPOSED_CREDENTIALS = "exposed_credentials", w.CONTENT_SCANNING = "content_scanning", w.FIREWALL_AI = "firewall_ai", w
			}({});
			const i = "all";
			let u = function(w) {
					return w.LABELS = "labels", w
				}({}),
				s = function(w) {
					return w.USER = "user", w.MANAGED = "managed", w
				}({}),
				m = function(w) {
					return w.SOURCE = "source", w
				}({}),
				c = function(w) {
					return w.NAME = "name", w.SOURCE = "source", w.NEW_LABEL_NAME = "newLabelName", w
				}({}),
				l = function(w) {
					return w.ENDPOINT = "endpoint", w.METHOD = "method", w.OPERATION_ID = "operationId", w
				}({}),
				v = function(w) {
					return w.NAME = "name", w.MAPPED_RESOURCES = "mapped_resources.operations", w.SOURCE = "source", w.APPLY = "apply", w
				}({});
			const a = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: v.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[m.SOURCE]: i
					}
				},
				filters: m,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let _ = function(w) {
				return w.CREATED_LABEL = "createdLabel", w.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", w.DELETED_LABEL = "deletedLabel", w.APPLIED_LABEL = "appliedLabel", w.EDITED_LABEL = "editedLabel", w.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", w
			}({});
			const d = "650px",
				p = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				h = /^[A-Za-z0-9-]+$/,
				I = /^cf-/;
			let E = function(w) {
				return w.NAME = "name", w.DESCRIPTION = "description", w
			}({});
			const g = "all";
			let T = function(w) {
				return w.METHOD = "method", w.HOSTNAME = "hostname", w
			}({});
			const f = {
				initialPaginationState: {
					page: 1,
					perPage: 5
				},
				initialSortState: {
					name: "method",
					direction: e.Sr.desc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[T.METHOD]: g,
						[T.HOSTNAME]: g
					}
				},
				filters: T
			};
			let b = function(w) {
				return w.TITLE = "title", w.DESCRIPTION = "description", w.SUBMIT = "submit", w
			}({});
			const O = 1e3,
				A = {
					LIST_TABLE_WRAPPER: "labels.list.main.table.wrapper",
					LIST_TABLE_CELL_NAME: "labels.list.main.table.cell.name",
					LIST_TABLE_CELL_CONNECTED: "labels.list.main.table.cell.connected",
					LIST_TABLE_CELL_TYPE: "labels.list.main.table.cell.type",
					LIST_TABLE_CELL_APPLY: "labels.list.main.table.cell.apply",
					LIST_TABLE_CELL_APPLY_BUTTON: "labels.list.main.table.cell.apply.button",
					LIST_TABLE_CELL_OVERFLOW_MENU: "labels.list.main.table.cell.overflow",
					LIST_TABLE_DELETE_MODAL_SUBMIT_BUTTON: "labels.list.main.delete_modal.submit_button",
					LIST_TABLE_DELETE_MODAL_CANCEL_BUTTON: "labels.list.main.delete_modal.cancel_button",
					LIST_TABLE_DELETE_MODAL_INPUT: "labels.list.main.delete_modal.input",
					APPLY_HEADER: "labels.apply.header",
					APPLY_FORM_NAME: "labels.apply.form.name",
					APPLY_FORM_NAME_DISABLED: "labels.apply.form.name.disabled",
					APPLY_FORM_DESCRIPTION: "labels.apply.form.description",
					APPLY_FORM_DESCRIPTION_DISABLED: "labels.apply.form.disabled",
					APPLY_FORM_SUBMIT_BUTTON: "labels.apply.form.submit.button",
					OPERATION_DETAILS_OPEN_MODAL_BUTTON: "labels.operation_details.open_modal.button",
					ENDPOINT_MANAGEMENT_LABELS_CONTAINER: "labels.endpoint_management.table.container",
					ENDPOINT_MANAGEMENT_LABELS_MORE_LABELS_BUTTON: "labels.endpoint_management.table.more_labels_button",
					SIDE_MODAL_CONTAINER: "labels.side_modal.container",
					SIDE_MODAL_OPERATION_CELL: "labels.side_modal.operation_cell",
					SIDE_MODAL_SEARCH_BAR: "labels.side_modal.search_bar",
					SIDE_MODAL_SOURCE_LISTBOX: "labels.side_modal.source_listbox",
					SIDE_MODAL_MANAGED_LABELS_CONTAINER: "labels.side_modal.managed_labels.container",
					SIDE_MODAL_USER_LABELS_CONTAINER: "labels.side_modal.user_labels.container",
					SIDE_MODAL_CREATE_LABEL_INACTIVE: "labels.side_modal.create_label.inactive",
					SIDE_MODAL_CREATE_LABEL_INPUT: "labels.side_modal.create_label.input",
					SIDE_MODAL_CREATE_LABEL_BUTTON: "labels.side_modal.create_label.button",
					SIDE_MODAL_SAVE_LABELS_BUTTON: "labels.side_modal.save_labels.button",
					SIDE_MODAL_CANCEL_BUTTON: "labels.side_modal.cancel.button",
					SIDE_MODAL_SELECTED_OPERATIONS_COUNT: "labels.side_modal.selected_operations_count",
					SIDE_MODAL_BULK_OVERWRITE_TOGGLE: "labels.side_modal.bulk.overwrite.toggle"
				},
				D = "exposed-credentials-module",
				M = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return _
				},
				aW: function() {
					return e.aW
				},
				W3: function() {
					return e.W3
				},
				w: function() {
					return e.w
				},
				N2: function() {
					return e.EDIT_LABELS_MODAL_FORM_PROPERTIES
				},
				dC: function() {
					return e.dC
				},
				n5: function() {
					return e.n5
				},
				Iv: function() {
					return o
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return p
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return d
				},
				QH: function() {
					return e.QH
				},
				TG: function() {
					return r.T
				},
				QF: function() {
					return i.QF
				},
				vc: function() {
					return i.vc
				},
				ZF: function() {
					return a
				},
				Xs: function() {
					return E.Xs
				},
				wG: function() {
					return i.N2
				},
				Q4: function() {
					return i.Q4
				},
				Wv: function() {
					return i.Wv
				},
				bH: function() {
					return E.bH
				},
				Mb: function() {
					return i.Mb
				},
				ui: function() {
					return E.ui
				},
				P3: function() {
					return E.P3
				},
				Ri: function() {
					return E.Ri
				},
				cN: function() {
					return E.cN
				},
				m8: function() {
					return I
				},
				Tf: function() {
					return h
				},
				$E: function() {
					return i.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				i = t("../react/pages/security/settings/resources/utils.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(u);

			function m(g) {
				for (var T = 1; T < arguments.length; T++) {
					var f = arguments[T] != null ? Object(arguments[T]) : {},
						b = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(f).filter(function(O) {
						return Object.getOwnPropertyDescriptor(f, O).enumerable
					})), b.forEach(function(O) {
						c(g, O, f[O])
					})
				}
				return g
			}

			function c(g, T, f) {
				return T = l(T), T in g ? Object.defineProperty(g, T, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[T] = f, g
			}

			function l(g) {
				var T = v(g, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function v(g, T) {
				if (typeof g != "object" || g === null) return g;
				var f = g[Symbol.toPrimitive];
				if (f !== void 0) {
					var b = f.call(g, T || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(g)
			}
			let n = function(g) {
					return g.LABELS_LIST = "Labels List page", g.LABELS_APPLY = "Labels Apply page", g.LABELS_SIDE_MODAL = "Labels Side Modal", g.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", g.LABELS_OPERATION_DETAILS = "Operation Details page", g
				}({}),
				o = function(g) {
					return g.API_SHIELD = "API Shield", g.SECURITY_SETTINGS = "Security Settings", g
				}({}),
				a = function(g) {
					return g.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", g.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", g.OPERATIONS_TABLE_ROW = "Operations table row", g.OPERATION_DETAILS_PAGE = "Operation details page", g
				}({}),
				_ = function(g) {
					return g.UPSERT = "upsert", g.OVERWRITE = "overwrite", g
				}({}),
				d = function(g) {
					return g.SINGLE = "single", g.MULTIPLE = "multiple", g
				}({}),
				p = function(g) {
					return g.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", g.DELETE_LABEL = "delete a user label in the settings page", g.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", g.CREATE_LABEL_CLICKED = "click create label button in the settings page", g.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", g.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", g.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", g.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", g.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", g.OPEN_LABELS_SIDE_MODAL = "open labels side modal", g.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", g.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", g.CREATE_NEW_LABEL = "create a new label", g
				}({});
			const h = ({
					name: g,
					product: T,
					category: f = "user journey",
					pageName: b,
					from: O,
					write_strategy: A,
					type: D,
					target: M,
					selected: w
				}) => {
					s().sendEvent(g, m({
						category: f,
						pageName: b,
						product: T
					}, O ? {
						from: O
					} : {}, A ? {
						write_strategy: A
					} : {}, D ? {
						type: D
					} : {}, M ? {
						target: M
					} : {}, w ? {
						selected: w
					} : {}))
				},
				I = () => {
					var g;
					return (g = Object.values(p)) === null || g === void 0 ? void 0 : g.flat()
				};
			var E = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				P3: function() {
					return l
				},
				Ri: function() {
					return v
				},
				Xs: function() {
					return o
				},
				bH: function() {
					return n
				},
				cN: function() {
					return c
				},
				ui: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = a => {
					const _ = (0, e.RO)(a),
						d = !!(0, i.rV)(a, "rulesets.file_upload_scan_allowed"),
						p = !!(0, i.BF)(a, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? _ && (d || p) : p
				},
				c = a => Number((0, i.rV)(a, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				l = a => (0, i.rV)(a, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				v = a => (0, i.rV)(a, "rulesets.leaked_credential_checks_allowed"),
				n = a => (0, s.z1)(u.dC)(a) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, i.rV)(a, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, i.rV)(a, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				o = a => !!(0, s.z1)("deprecate-security-level")(a)
		},
		"../react/pages/security/settings/resources/types.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				T: function() {
					return r
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let r = function(i) {
				return i.ENABLED = "enabled", i.CONTACT = "contact", i.EXPIRES = "expires", i.ENCRYPTION = "encryption", i.ACKNOWLEDGMENTS = "acknowledgments", i.CANONICAL = "canonical", i.HIRING = "hiring", i.POLICY = "policy", i.PREFERRED_LANGUAGES = "preferred_languages", i.MODIFIED_ON = "modified_on", i
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return a
				},
				Mb: function() {
					return _
				},
				N2: function() {
					return T
				},
				Q4: function() {
					return p
				},
				QF: function() {
					return o
				},
				Vy: function() {
					return I
				},
				Wv: function() {
					return d
				},
				mm: function() {
					return g
				},
				sQ: function() {
					return E
				},
				vc: function() {
					return h
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				i = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../react/pages/security/settings/resources/types.ts"),
				m = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(f) {
				for (var b = 1; b < arguments.length; b++) {
					var O = arguments[b] != null ? Object(arguments[b]) : {},
						A = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(O).filter(function(D) {
						return Object.getOwnPropertyDescriptor(O, D).enumerable
					})), A.forEach(function(D) {
						l(f, D, O[D])
					})
				}
				return f
			}

			function l(f, b, O) {
				return b = v(b), b in f ? Object.defineProperty(f, b, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[b] = O, f
			}

			function v(f) {
				var b = n(f, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function n(f, b) {
				if (typeof f != "object" || f === null) return f;
				var O = f[Symbol.toPrimitive];
				if (O !== void 0) {
					var A = O.call(f, b || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(f)
			}
			const o = {
					[s.T.ENABLED]: !1,
					[s.T.CONTACT]: [""],
					[s.T.EXPIRES]: ""
				},
				a = {
					[s.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[s.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[s.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[s.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[s.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[s.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[s.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[s.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				_ = f => e.Ry({
					[s.T.CONTACT]: e.IX().of(e.Z_().required(f("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, f("security_txt.fields.contact.format_error"))),
					[s.T.EXPIRES]: e.hT().required(f("common.required")).min(new Date, f("security_txt.fields.expires.min_error"))
				}),
				d = f => {
					const b = {};
					for (const O in f) b[O] = Array.isArray(f[O]) ? f[O].filter(A => !!A) : f[O];
					return c({}, b, {
						expires: (0, m.DZ)(f.expires)
					})
				},
				p = (f, b, O) => {
					const A = [...new Set([s.T.CONTACT, s.T.EXPIRES, ...Object.values(s.T)])],
						D = Object.entries(f).sort(([M], [w]) => A.indexOf(M) - A.indexOf(w)).filter(([M, w]) => !!a[M] && !!w && (!Array.isArray(w) || !!w.length)).map(([M, w]) => Array.isArray(w) ? w.map(S => `${O(a[M].label)}: ${S}`).join(`
`) : `${O(a[M].label)}: ${w}`).join(`
`);
					(0, r.yH)(`Cloudflare_${b}_security.txt`, D, "text/plain;charset=utf-8")
				};
			let h = function(f) {
				return f.CREATED = "created security.txt", f.ENABLED = "enabled security.txt", f.DISABLED = "disabled security.txt", f.DOWNLOADED = "downloaded security.txt", f.UPDATED = "updated security.txt", f.DELETED = "deleted security.txt", f
			}({});
			const I = f => (f == null ? void 0 : f.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (f == null ? void 0 : f.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				E = f => f === u.W3 ? void 0 : f,
				g = f => u.aW.test(f),
				T = f => {
					switch (f) {
						case u.w.CONTENT_SCANNING:
							return i.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return i.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				ROUTES: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
				ROOT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings`,
				DETECTIONS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections`,
				EXPOSED_CREDENTIALS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/exposed-credentials`,
				CONTENT_SCANNING: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/detections/malicious-content`,
				LABELS: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels`,
				LABEL_APPLY: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/labels/apply/:labelName?`,
				SECURITY_TXT: (0, e.BC)`/${"accountId"}/${"zoneName"}/security/settings/security-txt`
			}
		},
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Sb: function() {
					return v
				},
				Vj: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, a[d])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var _ = a.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			const c = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				l = {
					product: "WAF Managed Rules"
				},
				v = ({
					event: n,
					category: o = "user journey",
					product: a = "waf",
					productName: _ = "Managed Rules",
					additionalData: d
				}) => {
					r().sendEvent(n, i({
						category: o,
						product: a,
						productName: _
					}, d || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				D: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CLICK_MENU_ITEM_SHARE = "click on share item", r.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", r.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", r.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", r.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", r.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", r.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", r.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", r.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", r.CLICK_ON_DELETE_RULESET = "click on delete ruleset", r.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", r
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.IP_ADDRESS = "create spectrum app using IP address", r.CNAME = "create spectrum app using cname record", r.LB = "create spectrum app using load balancer", r.UPDATE_IP_ADDRESS = "update spectrum app using IP address", r.UPDATE_CNAME = "update spectrum app using cname record", r.UPDATE_LB = "update spectrum app using load balancer", r.DISABLE = "disable spectrum app", r
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ReplaceVideos = "stream.replace_videos", r.PrependVideo = "stream.prepend_video", r.UpdateVideo = "stream.update_video", r.UpdateVideoPending = "steam.update_video_pending", r.RemoveVideos = "stream.remove_videos", r.StoreUploader = "stream.store_uploader", r.UpsertUploads = "stream.upsert_uploads", r.RemoveUploads = "stream.remove_uploads", r.UpdateUploadProgress = "stream.update_upload_progress", r.UploadViaUrl = "stream.upload_via_url", r.SetLoading = "stream.set_loading", r.SetStorageLoading = "stream.set_storage_loading", r.SetStorage = "stream.set_storage", r.SetPage = "stream.set_page", r.SetPausedUploads = "stream.set_paused_uploads", r.RemovePausedUpload = "stream.remove_paused_upload", r.SetRequestTimestamp = "stream.set_request_timestamp", r.ResetState = "stream.reset_state", r
			}({})
		},
		"../react/pages/stream/reducer.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return n
				},
				nY: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				i = t("../react/pages/stream/util/pager.ts");

			function u(o) {
				for (var a = 1; a < arguments.length; a++) {
					var _ = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						s(o, p, _[p])
					})
				}
				return o
			}

			function s(o, a, _) {
				return a = m(a), a in o ? Object.defineProperty(o, a, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = _, o
			}

			function m(o) {
				var a = c(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function c(o, a) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}
			const l = "stream",
				v = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(o = v, a) {
				switch (a.type) {
					case r.U.ResetState:
						return v;
					case r.U.SetStorageLoading:
						const {
							storageLoading: _
						} = a;
						return u({}, o, {
							storageLoading: _
						});
					case r.U.SetStorage:
						return u({}, o, {
							storage: a.payload ? u({}, o.storage, a.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return u({}, o, {
							videos: a.videos
						});
					case r.U.PrependVideo:
						return u({}, o, {
							videos: [a.video, ...o.videos].filter((d, p) => p < i.FJ)
						});
					case r.U.UpdateVideo:
						return u({}, o, {
							videos: o.videos.map(d => d.uid === a.video.uid ? a.video : d)
						});
					case r.U.UpdateVideoPending:
						return u({}, o, {
							videoUpdateStatuses: u({}, o.videoUpdateStatuses, {
								[a.uid]: a.status
							})
						});
					case r.U.RemoveVideos:
						return u({}, o, {
							videos: o.videos.filter(d => !a.ids.includes(d.uid))
						});
					case r.U.SetLoading:
						return u({}, o, {
							loading: a.loading
						});
					case r.U.SetRequestTimestamp:
						return u({}, o, {
							requestTimestamp: a.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return o;
					default:
						return (0, e.h)(a, o)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				i = (0, e.BC)`${r}/inputs`,
				u = (0, e.BC)`${r}/videos`,
				s = (0, e.BC)`${r}/analytics`,
				m = (0, e.BC)`${u}/${"videoId"}`,
				c = (0, e.BC)`${r}/video-transformations`,
				l = {
					root: r,
					inputs: i,
					configureInputs: (0, e.BC)`${i}/custom-hostnames`,
					videos: u,
					analytics: s,
					videoPage: m,
					videoTransformationsConfigList: c,
					videoTransformationsZoneConfig: (0, e.BC)`${c}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${i}/${"inputId"}`,
					inputSettings: (0, e.BC)`${i}/${"inputId"}/settings`,
					inputMetrics: (0, e.BC)`${i}/${"inputId"}/metrics`,
					inputLogs: (0, e.BC)`${i}/${"inputId"}/logs`,
					inputRecordings: (0, e.BC)`${i}/${"inputId"}/recordings`,
					inputEmbed: (0, e.BC)`${i}/${"inputId"}/embed`,
					inputConnectionInfo: (0, e.BC)`${i}/${"inputId"}/connection-info`,
					inputOutputs: (0, e.BC)`${i}/${"inputId"}/outputs`,
					createOutput: (0, e.BC)`${i}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${i}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${r}/bundle-checkout-success`,
					plans: (0, e.BC)`${r}/plans`,
					managePlan: (0, e.BC)`${r}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Id: function() {
					return u
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return s
				},
				QL: function() {
					return l
				},
				_A: function() {
					return p
				},
				_Q: function() {
					return o
				},
				aM: function() {
					return d
				},
				bM: function() {
					return c
				},
				bO: function() {
					return a
				},
				bm: function() {
					return _
				},
				mX: function() {
					return h
				},
				pW: function() {
					return m
				},
				xW: function() {
					return v
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/pages/stream/reducer.ts");
			const u = I => I[i.nY],
				s = I => u(I).videos,
				m = I => u(I).videoUpdateStatuses,
				c = I => u(I).loading,
				l = I => u(I).requestTimestamp,
				v = I => u(I).storageLoading,
				n = I => u(I).storage,
				o = I => (0, r.BF)(I, "stream.enabled") || (0, e.bC)(I),
				a = I => (0, e.Le)(I, "stream", "connect"),
				_ = I => (0, e.Le)(I, "stream", "stream-4371"),
				d = I => (0, e.Le)(I, "stream", "public-details-enabled"),
				p = I => !!(0, e.Le)(I, "stream", "llhls"),
				h = I => {
					const E = n(I);
					return E !== void 0 && E.limitMins > E.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				FJ: function() {
					return e
				},
				d6: function() {
					return i
				},
				wL: function() {
					return r
				}
			});
			const e = 30;

			function r(u, s, m) {
				const c = {
					search: m,
					limit: e.toString()
				};
				return s !== void 0 && (c.end = s), c
			}

			function i(u, s, m) {
				return {
					limit: e.toString(),
					search: m,
					asc: "true",
					start_comp: "gt",
					start: s
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ARGO_ENABLEMENT = "change argo enablement", r.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", r.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", r
			}({})
		},
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return l
				},
				WM: function() {
					return d
				},
				Zk: function() {
					return v
				},
				aB: function() {
					return n
				},
				eT: function() {
					return _
				},
				i3: function() {
					return c
				},
				mm: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(p) {
				for (var h = 1; h < arguments.length; h++) {
					var I = arguments[h] != null ? Object(arguments[h]) : {},
						E = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(I).filter(function(g) {
						return Object.getOwnPropertyDescriptor(I, g).enumerable
					})), E.forEach(function(g) {
						u(p, g, I[g])
					})
				}
				return p
			}

			function u(p, h, I) {
				return h = s(h), h in p ? Object.defineProperty(p, h, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[h] = I, p
			}

			function s(p) {
				var h = m(p, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function m(p, h) {
				if (typeof p != "object" || p === null) return p;
				var I = p[Symbol.toPrimitive];
				if (I !== void 0) {
					var E = I.call(p, h || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(p)
			}
			let c = function(p) {
					return p.TRY_NEW_DASHBOARD_CTA = "click try new dashboard", p
				}({}),
				l = function(p) {
					return p.CREATE_BUTTON_CLICK = "click create load balancer", p.TOGGLE_STATUS = "load balancer toggle status", p.REVIEW_PAGE_CLICK = "click load balancer table review link", p.EDIT_CLICK = "click load balancer table edit button", p.DELETE_CLICK = "click load balancer table delete button", p
				}({}),
				v = function(p) {
					return p.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", p.EDIT_IP_CLICK = "click edit load balancer IP", p.EDIT_POOLS_CLICK = "click edit load balancer pools", p.EDIT_MONITORS_CLICK = "click edit load balancer monitors", p.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", p.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", p
				}({}),
				n = function(p) {
					return p.GO_TO_STEP = "click load balancer step", p.BACK_TO_STEP = "click load balancer back to step", p.SAVE = "save load balancer", p.SAVE_AS_DRAFT = "save load balancer as draft", p.SAVE_AND_DEPLOY = "save and deploy load balancer", p.NAVIGATION_CHANGE = "click load balancer wizard navigation link", p.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", p
				}({}),
				o = function(p) {
					return p.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", p
				}({});
			const _ = Object.values({
					MIGRATION: c,
					LOAD_BALANCERS_TABLE: l,
					REVIEW: v,
					WIZARD: n,
					USAGE: o
				}).flatMap(Object.values),
				d = (p, h) => r().sendEvent(p, i({
					category: "user journey",
					product: "load balancing"
				}, h))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_AND_DEPLOY = "create load balancer", r.ANALYTICS = "read analytics", r.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", r.POOL_TABLE = "click on expandable row on pool", r.CREATE_MONITOR_LINK = "click on create a monitor", r.EDIT_MONITOR_LINK = "click on edit a monitor", r.EDIT_MONITOR = "edit monitor", r.CREATE_MONITOR = "create monitor", r.CREATE_POOL_LINK = "click on create a pool", r.EDIT_POOL_LINK = "click on edit a pool", r.EDIT_POOL = "edit pool", r.CREATE_POOL = "create pool", r
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return i
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let i = function(s) {
				return s.CREATE = "create waiting room", s.UPDATE = "update waiting room", s.EVENTS = "view waiting rooms events", s.ANALYTICS = "view waiting room analytics", s.GENERATE_PREVIEW = "generate waiting room preview link", s
			}({});
			const u = async s => {
				await r().sendEvent(s, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return l
				},
				P: function() {
					return n
				},
				Xh: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(o) {
				for (var a = 1; a < arguments.length; a++) {
					var _ = arguments[a] != null ? Object(arguments[a]) : {},
						d = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(_).filter(function(p) {
						return Object.getOwnPropertyDescriptor(_, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, _[p])
					})
				}
				return o
			}

			function u(o, a, _) {
				return a = s(a), a in o ? Object.defineProperty(o, a, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = _, o
			}

			function s(o) {
				var a = m(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(o, a) {
				if (typeof o != "object" || o === null) return o;
				var _ = o[Symbol.toPrimitive];
				if (_ !== void 0) {
					var d = _.call(o, a || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(o)
			}
			const c = "TURNSTILE";
			let l = function(o) {
				return o.OVERVIEW_PAGE = "view the overview page", o.LIST_OF_WIDGETS = "list of widgets", o.SOLVE_EVENTS = "list solve events", o.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", o.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", o.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", o.OPEN_DELETE_MODAL = "view the delete modal for one widget", o.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", o.DELETE_WIDGET = "delete successfully widgets", o.LIST_OF_HOSTNAMES = "list hostnames", o.OPEN_ADD_WIDGET_PAGE = "view page to add widget", o.FEEDBACK_ADD = "view Feedback Add", o.SAVE_WIDGET = "save widget", o.ROTATE_KEYS = "rotate keys", o.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", o.GET_WIDGETS = "get widget details", o.OPEN_ANALYTICS_PAGE = "view analytics page", o.ANALYTICS_DATA = "list the analytics data", o
			}({});
			const v = ({
					name: o,
					product: a = c,
					category: _ = "user journey",
					page: d,
					additionalData: p = {}
				}) => {
					r().sendEvent(o, i({
						category: _,
						page: d,
						product: a
					}, p || {}))
				},
				n = () => {
					var o;
					return (o = Object.values(l)) === null || o === void 0 ? void 0 : o.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return l
				},
				Ky: function() {
					return v
				},
				RJ: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(n) {
				for (var o = 1; o < arguments.length; o++) {
					var a = arguments[o] != null ? Object(arguments[o]) : {},
						_ = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(a).filter(function(d) {
						return Object.getOwnPropertyDescriptor(a, d).enumerable
					})), _.forEach(function(d) {
						u(n, d, a[d])
					})
				}
				return n
			}

			function u(n, o, a) {
				return o = s(o), o in n ? Object.defineProperty(n, o, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = a, n
			}

			function s(n) {
				var o = m(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function m(n, o) {
				if (typeof n != "object" || n === null) return n;
				var a = n[Symbol.toPrimitive];
				if (a !== void 0) {
					var _ = a.call(n, o || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let c = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.GROUP_TABLE_ROW_CLICK = "user group table row click", n.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", n.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", n.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", n.BACK_BUTTON = "clicked back from user group detail", n.MEMBER_ADD = "add user group member", n.MEMBER_DELETE = "delete user group member", n.POLICY_SAVE = "user group policies save", n.POLICY_DELETE = "user group policies delete", n
			}({});
			const l = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, i({}, o || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				d: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
				default: (0, e.BC)`/${"accountId"}/`,
				home: (0, e.BC)`/${"accountId"}/home`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`,
				websites: (0, e.BC)`/${"accountId"}/websites`
			}
		},
		"../react/pages/zone-versioning/selectors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$e: function() {
					return O
				},
				$h: function() {
					return g
				},
				G: function() {
					return b
				},
				M3: function() {
					return D
				},
				Tr: function() {
					return I
				},
				UY: function() {
					return p
				},
				bH: function() {
					return o
				},
				fv: function() {
					return M
				},
				hF: function() {
					return T
				},
				iw: function() {
					return _
				},
				m7: function() {
					return n
				},
				re: function() {
					return f
				},
				tp: function() {
					return d
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts");

			function m(w) {
				for (var S = 1; S < arguments.length; S++) {
					var R = arguments[S] != null ? Object(arguments[S]) : {},
						L = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(R).filter(function(K) {
						return Object.getOwnPropertyDescriptor(R, K).enumerable
					})), L.forEach(function(K) {
						c(w, K, R[K])
					})
				}
				return w
			}

			function c(w, S, R) {
				return S = l(S), S in w ? Object.defineProperty(w, S, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[S] = R, w
			}

			function l(w) {
				var S = v(w, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function v(w, S) {
				if (typeof w != "object" || w === null) return w;
				var R = w[Symbol.toPrimitive];
				if (R !== void 0) {
					var L = R.call(w, S || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(w)
			}
			const n = w => (0, i.nA)(w) ? (0, s.p1)(w) && (0, u.$n)(w, "zone_versioning", "versioning") : !1,
				o = w => w.zoneVersioning.zoneApplications,
				a = (0, e.P1)("zoneApplications", o),
				_ = w => w.zoneVersioning.zoneVersions,
				d = (0, e.P1)("zoneVersions", _),
				p = (0, r.P1)(d, w => {
					if (w) return w.filter(S => S.status == "V")
				}),
				h = w => w.zoneVersioning.environments,
				I = w => w.zoneVersioning.environments.isRequesting,
				E = (0, e.P1)("environments", h),
				g = (0, r.P1)(a, w => {
					if (w) {
						if (w.length === 1) return w[0];
						w.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${w.length}`))
					}
					return null
				}),
				T = (0, r.P1)(E, w => w ? w.environments : []),
				f = w => {
					var S;
					return (S = w.zoneVersioning) === null || S === void 0 ? void 0 : S.zoneVersionSelector
				},
				b = (0, r.P1)(f, d, (w, S) => {
					if (!(w == null ? void 0 : w.isVersion) || !S) return null;
					const R = S.find(L => {
						if (L.version === w.selectedVersion && L.locked) return !0
					});
					return R ? m({}, R, {
						isLocked: !0
					}) : null
				}),
				O = (0, r.P1)(d, T, (w, S) => !S || !w ? [] : w.map(R => {
					const L = [];
					for (const K in S) S[K].version === R.version && L.push(S[K]);
					return m({}, R, {
						environments: L
					})
				})),
				A = w => w.zoneVersioning.WAFMigrationStatus,
				D = (0, e.P1)("WAFMigrationStatus", A),
				M = w => w.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return A
				},
				CI: function() {
					return b
				},
				IS: function() {
					return c
				},
				L7: function() {
					return s
				},
				Lt: function() {
					return d
				},
				Oj: function() {
					return a
				},
				QV: function() {
					return p
				},
				S6: function() {
					return D
				},
				X$: function() {
					return T
				},
				X6: function() {
					return v
				},
				d4: function() {
					return _
				},
				fE: function() {
					return l
				},
				im: function() {
					return E
				},
				lv: function() {
					return h
				},
				rL: function() {
					return n
				},
				wW: function() {
					return m
				}
			});

			function e(M) {
				for (var w = 1; w < arguments.length; w++) {
					var S = arguments[w] != null ? Object(arguments[w]) : {},
						R = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(S).filter(function(L) {
						return Object.getOwnPropertyDescriptor(S, L).enumerable
					})), R.forEach(function(L) {
						r(M, L, S[L])
					})
				}
				return M
			}

			function r(M, w, S) {
				return w = i(w), w in M ? Object.defineProperty(M, w, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[w] = S, M
			}

			function i(M) {
				var w = u(M, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function u(M, w) {
				if (typeof M != "object" || M === null) return M;
				var S = M[Symbol.toPrimitive];
				if (S !== void 0) {
					var R = S.call(M, w || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(M)
			}
			const s = {
					documentation: {
						configFile: "https://developers.cloudflare.com/pages/functions/wrangler-configuration/",
						workersAPI: "https://developers.cloudflare.com/api/operations/worker-script-list-workers",
						root: "https://workers.cloudflare.com/docs",
						configuration: "https://developers.cloudflare.com/workers/configuration",
						compatibilityDates: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/#compatibility-flags",
						installWrangler: "https://developers.cloudflare.com/workers/wrangler/install-and-update/",
						wranglerDocs: "https://developers.cloudflare.com/workers/wrangler/",
						wranglerCommands: "https://developers.cloudflare.com/workers/wrangler/commands/",
						starters: "https://developers.cloudflare.com/workers/starters",
						eggheadCourse: "https://egghead.io/courses/introduction-to-cloudflare-workers-5aa3",
						tutorials: "https://developers.cloudflare.com/workers/tutorials",
						examples: "https://developers.cloudflare.com/workers/examples",
						durableObjects: "https://developers.cloudflare.com/workers/learning/using-durable-objects",
						writingWorkers: "https://developers.cloudflare.com/workers/get-started/guide/#5-write-code",
						kv: "https://developers.cloudflare.com/workers/learning/how-kv-works",
						kvGetStarted: "https://developers.cloudflare.com/kv/get-started/",
						kvBindings: "https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings",
						kvNamespaces: "https://developers.cloudflare.com/workers/reference/storage/namespaces/",
						kvMetrics: "https://developers.cloudflare.com/kv/observability/metrics-analytics/",
						envVars: "https://developers.cloudflare.com/workers/reference/apis/environment-variables/",
						api: "https://workers.cloudflare.com/docs/reference/tooling/api",
						scheduledEventListener: "https://developers.cloudflare.com/workers/runtime-apis/add-event-listener#scheduled-listener",
						errors: "https://developers.cloudflare.com/workers/platform/limits",
						cpuLimits: "https://developers.cloudflare.com/workers/platform/limits/#cpu-time",
						walltimeLimits: "https://developers.cloudflare.com/workers/platform/limits/#wall-time",
						pagesFunctionsPricing: "https://developers.cloudflare.com/pages/functions/pricing/",
						pricing: "https://developers.cloudflare.com/workers/platform/pricing",
						computeSetting: "https://developers.cloudflare.com/workers/platform/cron-triggers#green-compute",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						usageModelCLIDocs: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#keys",
						wrangler: "https://developers.cloudflare.com/workers/wrangler/",
						pagesDirectUploadCLI: "https://developers.cloudflare.com/pages/get-started/direct-upload/#wrangler-cli",
						bindings: {
							index: "https://developers.cloudflare.com/workers/runtime-apis/bindings",
							ai: "https://developers.cloudflare.com/workers-ai",
							analyticsEngine: "https://developers.cloudflare.com/analytics/analytics-engine",
							assets: "https://developers.cloudflare.com/workers/static-assets/binding",
							browserRendering: "https://developers.cloudflare.com/browser-rendering",
							d1: "https://developers.cloudflare.com/d1",
							dispatchNamespace: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/get-started/configuration",
							durableObjects: "https://developers.cloudflare.com/durable-objects",
							hyperdrive: "https://developers.cloudflare.com/hyperdrive",
							images: "https://developers.cloudflare.com/images/transform-images/bindings/",
							kv: "https://developers.cloudflare.com/kv",
							mTLS: "https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls",
							queues: "https://developers.cloudflare.com/queues/configuration/javascript-apis",
							r2: "https://developers.cloudflare.com/r2/api/workers/workers-api-reference",
							rateLimiting: "https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit",
							secrets_store_secret: "https://developers.cloudflare.com/secrets-store/integrations/workers/",
							service: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings",
							vectorize: "https://developers.cloudflare.com/vectorize/reference/client-api",
							versionMetadata: "https://developers.cloudflare.com/workers/runtime-apis/bindings/version-metadata",
							workflows: "https://developers.cloudflare.com/workflows"
						},
						modules: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#modules",
						routes: "https://developers.cloudflare.com/workers/platform/routes/#matching-behavior",
						routesAndDomains: "https://developers.cloudflare.com/workers/configuration/routing",
						routesDNS: "https://developers.cloudflare.com/workers/platform/triggers/routes/#subdomains-must-have-a-dns-record",
						customDomains: "https://developers.cloudflare.com/workers/platform/routing/custom-domains",
						fetchEvent: "https://developers.cloudflare.com/workers/runtime-apis/fetch-event",
						scheduledWorkers: "https://developers.cloudflare.com/workers/configuration/cron-triggers",
						emailWorkers: "https://developers.cloudflare.com/email-routing/email-workers/",
						cronSyntax: "https://developers.cloudflare.com/workers/platform/cron-triggers#supported-cron-expressions",
						scheduledEvents: "https://developers.cloudflare.com/workers/runtime-apis/scheduled-event",
						languages: "https://developers.cloudflare.com/workers/platform/languages",
						durableObjectsChatExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#websockets-in-durable-objects",
						durableObjectsCounterExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#example---counter",
						services: "https://developers.cloudflare.com/workers/platform/services",
						serviceBindings: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/",
						metrics: {
							root: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/",
							requestsTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#requests",
							cpuTimeTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#cpu-time-per-execution",
							durationTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#execution-duration-gb-seconds",
							requestDurationTimeseries: "https://developers.cloudflare.com/workers/learning/metrics-and-analytics/#request-duration",
							dataEgressTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#data-egress",
							subRequestsTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#subrequests",
							wallTimeTimeseries: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#wall-time-per-execution",
							invocationStatuses: "https://developers.cloudflare.com/workers/observability/metrics-and-analytics/#invocation-statuses"
						},
						logpush: {
							generalDocs: "https://developers.cloudflare.com/workers/platform/logpush",
							createJob: "https://developers.cloudflare.com/workers/platform/logpush/#create-a-logpush-job"
						},
						mtlsCertificates: "https://developers.cloudflare.com/workers/runtime-apis/mtls",
						uploadMtlsCertificates: "https://developers.cloudflare.com/workers/wrangler/commands#mtls-certificate",
						smartPlacement: "https://developers.cloudflare.com/workers/platform/smart-placement/",
						smartPlacementStatus: "https://developers.cloudflare.com/workers/configuration/smart-placement/#placement-status",
						smartPlacementHowItWorks: "https://developers.cloudflare.com/workers/configuration/smart-placement/#understand-how-smart-placement-beta-works",
						smartPlacementBackendServices: "https://developers.cloudflare.com/workers/configuration/smart-placement/#unsupported-back-end-services",
						integrations: "https://developers.cloudflare.com/workers/databases/connecting-to-databases/",
						tailWorkers: "https://developers.cloudflare.com/workers/platform/tail-workers",
						dispatchNamespaces: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/platform/outbound-workers",
						invalidCORSPolicy: "https://developers.cloudflare.com/r2/buckets/cors/#common-issues",
						createCloudflare: "https://www.npmjs.com/package/create-cloudflare",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						versions: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments",
						environments: "https://developers.cloudflare.com/workers/wrangler/environments/",
						gradualDeployments: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
						rollbacks: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/rollbacks",
						moduleSyntax: "https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/#migrate-from-service-workers-to-es-modules",
						configureQueues: "https://developers.cloudflare.com/queues/configuration/configure-queues/",
						observability: "https://developers.cloudflare.com/workers/observability/",
						observabilityLogs: "https://developers.cloudflare.com/workers/observability/logs/workers-logs/",
						workersAssets: "https://developers.cloudflare.com/workers/static-assets/"
					},
					serverlist: "https://blog.cloudflare.com/tag/serverlist/",
					discord: "https://discord.cloudflare.com/",
					community: "https://community.cloudflare.com/tag/workers",
					billing: "https://developers.cloudflare.com/workers/platform/pricing",
					network: "https://www.cloudflare.com/network",
					builtWithWorkers: "https://workers.cloudflare.com/built-with/",
					workersSupplementalTerms: "https://www.cloudflare.com/supplemental-terms/#CFWorkers",
					freeKvBlogPost: "https://blog.cloudflare.com/workers-kv-free-tier/",
					durableObjectsSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSfJeZKlM_InqG7thczqGCaxEOqwsJm1Xdv8Kz0zd4zp3VNvMg/viewform",
					durableObjectsBetaBlogPost: "https://blog.cloudflare.com/durable-objects-open-beta/",
					usageModelSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSeOKaVp9pC-sXvEQsgmKZc1b-BxdDRcIoL0jpOQWCHlAR9SiA/viewform",
					workersUnboundBlogPost: "https://blog.cloudflare.com/workers-unbound-ga/",
					cloudflareSubscriptionTerms: "https://www.cloudflare.com/terms",
					integrationsFeedback: "https://forms.gle/cMkH8G78MpGFP7Yo6",
					workersStandardPricing: "https://blog.cloudflare.com/workers-pricing-scale-to-zero"
				},
				m = 800,
				c = "40rem",
				l = {
					pricing: {
						requests: .15,
						duration: 12.5,
						bytes_stored: .2,
						rows_read: .001,
						rows_written: 1
					}
				},
				v = {
					d1_included_capacity: 5e9,
					d1_included_read_count: 25e9,
					d1_included_write_count: 5e7,
					pricing: {
						storage: .75,
						read_units: .001,
						write_units: 1
					}
				},
				n = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .5,
					ubb_price_ent: .6,
					additional_million_requests_price: .15,
					additional_million_requests_price_ent: .18,
					additional_million_standard_requests_price: .3,
					additional_million_standard_cpu_time_price: .02,
					additional_million_gb_duration_price: 12.5,
					additional_million_gb_duration_price_ent: 15,
					additional_egress_gb_transfer_price: .045,
					additional_egress_gb_transfer_price_ent: .054,
					kv_storage_modify_price: 5,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6,
					trace_logs: 1e7,
					additional_million_trace_logs_price: .05,
					trace_logs_frequency: 1e6
				},
				o = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .6,
					kv_storage_modify_price: 6,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6
				},
				a = {
					free: {
						rateLimit: 1e3,
						maximumRequests: 1e5,
						maximumRequestsRuntimeCutoff: 12e4,
						limits: {
							Threshold1: .75,
							Threshold2: .9,
							Exceeded: 1
						}
					},
					paid: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, n),
					ent_ss: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, o),
					unbound: {
						bundledRequests: 10,
						unboundRequests: 1,
						unboundDuration: 4e5,
						unboundEgress: 5,
						kvMonthlyRead: 10,
						kvMonthlyWrite: 1
					},
					standard: {
						requests: 10,
						cpuTimeMilliseconds: 30
					}
				},
				_ = {
					free: {
						events: 1e5,
						retention: 3
					},
					paid: {
						events: 2e7,
						meteredCostPerMillionEvents: .6,
						retention: 7
					}
				},
				d = {
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				p = {
					enableWorkers: "enable workers",
					setupSubdomain: "set up subdomain",
					selectPlan: "select workers plan",
					verifyEmail: "verify email",
					clickApplicationName: "click application name",
					clickChangeComputeSetting: "click change compute setting",
					clickChangeSubdomain: "click change subdomain",
					clickConnectToGit: "click connect to git",
					clickCreateProjectSuccessResource: "click create project success resource",
					clickCreateProjectSuccessNextStep: "click create project success next step",
					clickSetupAE: "click setup AE",
					clickUploadAssets: "click upload assets",
					clickWorkerEditCode: "click worker edit code",
					clickWorkersManageNotificationsAlerts: "click workers manage notifications and alerts",
					clickWorkersManageAccountMembers: "click workers manage account members",
					clickWorkersResource: "click workers resource",
					createApplicationClickWorkersDocs: "create application click workers docs",
					createApplicationClickPagesDocs: "create application click pages docs",
					createApplicationCreateWithCLI: "create application click create with CLI",
					createApplicationSelectWorkers: "create application select workers",
					createApplicationSelectPages: "create application select pages",
					createService: "create service",
					createPlaygroundWorker: "create worker from playground",
					createWorkerSelectFilter: "create worker select filter",
					cancelCreatePlaygroundWorker: "cancel create worker from playground",
					deployWorkerScript: "deploy worker script",
					setupCustomDomain: "set up custom domain",
					addWorkersRoute: "add workers route",
					editWorkersRoute: "edit workers route",
					addCronTrigger: "add cron trigger",
					editCronTrigger: "edit cron trigger",
					beginLogStream: "begin log stream",
					editEnvVariables: "edit service environment variables",
					encryptVariable: "encrypt variable",
					editNamespaceBindings: "edit service kv bindings",
					editR2Bindings: "edit service r2 bindings",
					editQueueBindings: "edit service queue bindings",
					editConstellationBindings: "edit service constellation bindings",
					editHyperdriveBindings: "edit service hyperdrive bindings",
					editAiBindings: "edit service ai bindings",
					editVectorizeBindings: "edit service vectorize bindings",
					editServiceBindings: "edit service to service bindings",
					renameService: "rename service",
					deleteService: "delete service",
					sortServices: "sort services",
					searchServices: "search services",
					paginateServices: "paginate services",
					createKVNamespace: "create kv namespace",
					deleteKVNamespace: "delete kv namespace",
					renameKVNamespace: "rename kv namespace",
					listKVNamespaces: "list kv namespaces",
					searchKVNamespaces: "search kv namespaces",
					paginateKVNamespaces: "paginate kv namespaces",
					addKVKeyValue: "add kv key-value",
					editKVKeyValue: "edit kv key-value",
					deleteKVKeyValue: "delete kv key-value",
					readKVKeyValue: "read kv key-value",
					listKVKeyValues: "list kv key-values",
					searchKVKeyValues: "search kv key-values",
					paginateKVKeyValues: "paginate kv key-values",
					editMtlsCertificateBindings: "edit service mtls certificate bindings",
					quickEditHttpTab: "quick edit http tab",
					quickEditPreviewTab: "quick edit preview tab",
					quickEditScheduleTab: "quick edit schedule tab",
					quickEditWranglerTab: "quick edit wrangler tab",
					rollbackDeployment: "rollback deployment",
					editTailConsumers: "edit service tail consumers",
					editDispatchNamespaceBindings: "edit dispatch namespace bindings",
					clickedDownloadAnalytics: "clicked Workers download analytics",
					clickedPrintAnalytics: "clicked Workers print analytics",
					toggledSmartPlacement: "toggled Workers smart placement",
					copiedVersionId: "workers copied version id",
					clickElement: "click element",
					createResource: "create resource",
					deleteResource: "delete resource",
					updateResource: "update resource",
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting",
					addWCITriggerToExistingWorker: "WCI:add WCI trigger to existing worker",
					updateWCITrigger: "WCI:update WCI trigger",
					deleteWCITrigger: "WCI:delete WCI trigger",
					addWCITriggerToNewWorker: "WCI:create worker with WCI trigger",
					createWCIBuildForNewWorker: "WCI:create WCI build in create from repo flow",
					completedWCIBuildForNewWorker: "WCI:completed WCI build in create from repo flow",
					clickCreateWorkerFromRepoNextStep: "WCI:click create worker from repo next step",
					clickCreateWorkerFromRepoPreviousStep: "WCI:click create worker from repo previous step",
					changedDefaultConfigurations: "WCI:changed default configuration",
					clickCreateNewSCMConnection: "WCI:click create scm connection",
					redirectFromSCMOAuth: "WCI:redirect from SCM connection OAuth",
					clickSubmitError: "WCI:attempt invalid build configuration",
					enableBuildCache: "WCI:enable build cache",
					disableBuildCache: "WCI:disable build cache",
					clearBuildCache: "WCI:clear build cache",
					updateEnvVar: "WCI:update WCI trigger env var",
					clickedImportRepository: "clicked import repository",
					clickedClonePublicRepositoryFromUrl: "clicked clone public repository from url",
					clickedListTemplates: "clicked list workers templates",
					selectTemplate: "select workers template",
					templateStubWorkerCreated: "template stub worker created",
					templateStubWorkerCreationFailed: "template stub worker creation failed",
					templateRepositoryCreated: "template repository created",
					templateRepositoryCreationFailed: "template repository creation failed",
					copyTemplateC3Command: "template copy c3 command",
					templateDeployClick: "template deploy click",
					reauthenticateGithubModalShown: "reauthenticate github modal shown",
					updateGithubPermissionsClicked: "update github permissions clicked",
					D2W_importRepository: "D2W: import a repository",
					D2W_stubWorkerCreated: "D2W: stub worker created",
					D2W_stubWorkerCreationFailed: "D2W: stub worker creation failed",
					D2W_repositoryCreated: "D2W: repository created",
					D2W_repositoryCreationFailed: "D2W: repository creation failed",
					D2W_resourcesProvisioned: "D2W: resources provisioned",
					D2W_resourceProvisioningFailed: "D2W: resource provisioning failed",
					D2W_githubAPIRateLimitReached: "D2W: GitHub API rate limit reached"
				},
				h = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker",
					refreshWebhookError: "error refreshing gitlab webhook"
				},
				I = "workers.dev",
				E = "YYYY-MM-DD HH:mm:SS ZZ",
				g = "active",
				T = ["bundled", "unbound", "standard"],
				f = null,
				b = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let O = function(M) {
				return M[M.NONE = 0] = "NONE", M[M.MISS = 1] = "MISS", M[M.EXPIRED = 2] = "EXPIRED", M[M.UPDATING = 3] = "UPDATING", M[M.STALE = 4] = "STALE", M[M.HIT = 5] = "HIT", M[M.IGNORED = 6] = "IGNORED", M[M.BYPASS = 7] = "BYPASS", M[M.REVALIDATED = 8] = "REVALIDATED", M[M.DYNAMIC = 9] = "DYNAMIC", M[M.STREAM_HIT = 10] = "STREAM_HIT", M[M.DEFERRED = 11] = "DEFERRED", M
			}({});
			const A = [O.HIT, O.STREAM_HIT];
			let D = function(M) {
				return M.SECRETS_STORE_ID = "store_id", M.SECRET_NAME = "secret_name", M
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return c
				},
				L: function() {
					return i
				},
				Q9: function() {
					return u
				},
				_j: function() {
					return s
				},
				ky: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = l => `${l}.workers.dev`,
				i = (l, v, n) => `${n?`${n}.`:""}${l}.${r(v)}`,
				u = (l, v, n) => `https://${i(l,v,n)}`,
				s = {
					workersOverview: (0, e.BC)`/${"accountId"}/workers/overview`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/workers`,
					root: (0, e.BC)`/${"accountId"}/workers`,
					onboarding: (0, e.BC)`/${"accountId"}/workers-and-pages/create`,
					overview: (0, e.BC)`/${"accountId"}/workers/overview`,
					subdomain: (0, e.BC)`/${"accountId"}/workers/subdomain`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/workers/default-usage-model`,
					computeSetting: (0, e.BC)`/${"accountId"}/workers/compute-setting`,
					cli: (0, e.BC)`/${"accountId"}/workers/cli`,
					kvRoot: (0, e.BC)`/${"accountId"}/workers/kv`,
					kvStore: (0, e.BC)`/${"accountId"}/workers/kv/namespaces`,
					d1Store: (0, e.BC)`/${"accountId"}/workers/d1`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					purchase: (0, e.BC)`/${"accountId"}/workers/plans/purchase`,
					standardOptIn: (0, e.BC)`/${"accountId"}/workers/standard/opt-in`,
					kvNamespace: (0, e.BC)`/${"accountId"}/workers/kv/namespaces/${"namespaceId"}`,
					d1Database: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}`,
					editServiceScript: (0, e.BC)`/${"accountId"}/workers/services/edit/${"serviceId"}/${"environmentName"}`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					durableObjectDetailsSettings: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}/settings`,
					manageSubscriptions: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					manageNotifications: (0, e.BC)`/${"accountId"}/notifications`,
					servicesRoot: (0, e.BC)`/${"accountId"}/workers/services`,
					logsLive: (0, e.BC)`/${"accountId"}/workers/services/live-logs/${"serviceId"}/${"environmentName"}`,
					cronEvents: (0, e.BC)`/${"accountId"}/workers/services/cron-events/${"serviceId"}/${"environmentName"}`,
					createService: (0, e.BC)`/${"accountId"}/workers/services/new`,
					manageService: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					renameService: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/rename`,
					serviceDetailsRoot: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}`,
					serviceDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}`,
					serviceDetailsMetrics: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/metrics`,
					serviceDetailsChart: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/metrics/charts/${"chart"}`,
					serviceDetailsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds`,
					serviceDetailsBuildDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/builds/${"build_uuid"}`,
					serviceDetailsDeployments: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/deployments`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#domains`,
					serviceDetailsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/bindings`,
					serviceDetailsSettings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings`,
					serviceDetailsSettingsGeneral: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/general`,
					serviceDetailsSettingsGeneralV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#general`,
					serviceDetailsSettingsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/bindings`,
					serviceDetailsSettingsBindingsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#bindings`,
					serviceDetailsSettingsBuilds: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/builds`,
					serviceDetailsSettingsBuildsV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#builds`,
					serviceDetailsSettingsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/triggers`,
					serviceDetailsSettingsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#trigger-events`,
					serviceDetailsSettingsObservabilityV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings?setupObservability=true`,
					serviceDetailsSettingsRuntimeV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#runtime`,
					serviceDetailsObservabilityLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/observability/logs`,
					serviceDetailsManage: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					serviceDetailsRename: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/rename`,
					createDeployment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deploy-version`,
					deploymentHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deployment-history`,
					createEnvironment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/environment/new`,
					apiKey: (0, e.BC)`/profile/api-tokens`,
					signUp: (0, e.BC)`/sign-up/workers`,
					dns: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					ssl: (0, e.BC)`/${"accountId"}/${"zoneName"}/ssl-tls/edge-certificates`,
					analyticsEngine: (0, e.BC)`/${"accountId"}/workers/analytics-engine`,
					analyticsEngineStudio: (0, e.BC)`/${"accountId"}/workers/analytics-engine/studio`,
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`,
					workflowDetails: (0, e.BC)`/${"accountId"}/workers/workflows/${"workflowName"}`
				},
				m = "https://cron-triggers.cloudflareworkers.com",
				c = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountLogpushJobs: (0, e.BC)`/accounts/${"accountId"}/logpush/jobs`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					builds: {
						build: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}`,
						cancelBuild: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/cancel`,
						retryBuild: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/builds`,
						latestBuildsByWorkers: (0, e.BC)`/accounts/${"accountId"}/builds/builds/latest`,
						buildLogs: (0, e.BC)`/accounts/${"accountId"}/builds/builds/${"build_uuid"}/logs`,
						buildsByScriptId: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/builds`,
						buildsByVersionIds: (0, e.BC)`/accounts/${"accountId"}/builds/builds`,
						buildTokens: (0, e.BC)`/accounts/${"accountId"}/builds/tokens`,
						githubUserType: (0, e.BC)`/accounts/${"accountId"}/builds/providers/github/users/${"username"}/type`,
						refreshWebhook: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}/webhooks/refresh`,
						repoConnections: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections`,
						repoConnection: (0, e.BC)`/accounts/${"accountId"}/builds/repos/connections/${"repo_connection_uuid"}`,
						triggers: (0, e.BC)`/accounts/${"accountId"}/builds/triggers`,
						trigger: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}`,
						purgeTriggerCache: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/purge_build_cache`,
						triggerEnvironmentVariables: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables`,
						triggerEnvironmentVariable: (0, e.BC)`/accounts/${"accountId"}/builds/triggers/${"trigger_uuid"}/environment_variables/${"environment_variable_key"}`,
						workerTriggers: (0, e.BC)`/accounts/${"accountId"}/builds/workers/${"scriptTag"}/triggers`,
						configAutofill: (0, e.BC)`/accounts/${"accountId"}/builds/repos/${"providerType"}/${"providerAccountId"}/${"repoId"}/config_autofill?branch=${"branch"}&root_directory=${"rootDirectory"}`,
						accountLimits: (0, e.BC)`/accounts/${"accountId"}/builds/account/limits`
					},
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					getApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/deployments`,
					describeCron: `${m}/describe`,
					dnsRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					dnsRoute: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records/${"recordId"}`,
					dnsRouteChangeset: (0, e.BC)`/accounts/${"accountId"}/workers/domains/changeset`,
					dnsRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records`,
					durableObjectNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}`,
					durableObjectNamespaces: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces`,
					durableObjectsInNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}/objects`,
					edgePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/edge-preview`,
					edgePreviewInit: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/edge-preview`,
					edgePreviewZoneInit: (0, e.BC)`/zones/${"zone"}/workers/edge-preview`,
					featureFlagSettings: (0, e.BC)`/accounts/${"accountId"}/workers/settings`,
					integrations: {
						getIntegrations: (0, e.BC)`/accounts/${"accountId"}/integrations`,
						getManifest: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}`,
						invokeGetDataAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-data/${"action"}`,
						invokeGetOptionsAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-options/${"action"}`,
						invokeSubmitFormAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-form/${"action"}`,
						invokeSubmitTokenAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-token/${"action"}`,
						invokeUninstallAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/uninstall/${"action"}`,
						invokeRefAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/ref/${"action"}`,
						integrationsPreviewWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/preview/${"action"}`,
						integrationsDeployWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/deploy/${"action"}`,
						oauthAuthorize: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/oauth/${"oauthProviderId"}/authorize`,
						oauthCallback: (0, e.BC)`/oauth/callback`,
						resourceStates: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states`,
						resourceState: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states/${"resourceName"}`,
						asset: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/assets`
					},
					kvNamespace: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces/${"namespaceId"}`,
					kvNamespaces: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces`,
					newVersions: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/versions`,
					nextCron: `${m}/next`,
					outboundDispatchers: (0, e.BC)`/accounts/${"accountId"}/workers/dispatch_outbounds/by-outbound/${"serviceId"}/environment/${"environmentName"}`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					promoteDeployment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"sourceEnv"}/promote/${"targetEnv"}`,
					queues: (0, e.BC)`/accounts/${"accountId"}/workers/queues`,
					service: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}`,
					serviceBindings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/bindings`,
					serviceBindingsReferences: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/references`,
					serviceCopyEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/copy/${"toEnvironmentName"}`,
					services: (0, e.BC)`/accounts/${"accountId"}/workers/services`,
					serviceSettings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/settings`,
					scriptsWithSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?include_subdomain_availability=true`,
					scriptsByHandler: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?handlers=${"handler"}`,
					scriptSettingsV2: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"serviceId"}/script-settings`,
					serviceCreateTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails`,
					serviceDeleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails/${"tailId"}`,
					serviceEmailTriggers: (0, e.BC)`/accounts/${"accountId"}/email/routing/rules`,
					serviceEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}`,
					servicePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/preview`,
					serviceRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/routes`,
					serviceSchedules: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/schedules`,
					serviceScript: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content`,
					serviceScriptRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/routes/${"routeId"}`,
					serviceScriptV2: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content/v2?omit=sourcemaps`,
					serviceSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/subdomain`,
					serviceUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/usage-model`,
					spectrum: (0, e.BC)`/zones/${"zoneId"}/spectrum/apps/dns`,
					standard: (0, e.BC)`/accounts/${"accountId"}/workers/standard`,
					subdomain: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain`,
					subdomainCertStatus: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/ssl`,
					subdomainDeployed: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/subdomain`,
					tailsByConsumer: (0, e.BC)`/accounts/${"accountId"}/workers/tails/by-consumer/${"serviceId"}/environment/${"environment"}`,
					validateCron: `${m}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersObservability: {
						telemetry: {
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query`,
							keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`
						},
						parameters: {
							post: (0, e.BC)`/accounts/${"accountId"}/workers/observability/parameters`,
							rate: (0, e.BC)`/accounts/${"accountId"}/workers/observability/parameters/${"generationId"}/rate`
						},
						queries: {
							list: (0, e.BC)`/accounts/${"accountId"}/workers/observability/queries`,
							create: (0, e.BC)`/accounts/${"accountId"}/workers/observability/queries`,
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/queries/${"queryId"}`
						},
						usage: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage`,
						usageStatuses: (0, e.BC)`/accounts/${"accountId"}/workers/observability/usage-statuses`,
						liveTail: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/live-tail`,
						issues: {
							list: (0, e.BC)`/accounts/${"accountId"}/workers/observability/issues`,
							get: (0, e.BC)`/accounts/${"accountId"}/workers/observability/issues/${"issueId"}`,
							patch: (0, e.BC)`/accounts/${"accountId"}/workers/observability/issues/${"issueId"}`
						}
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerSecrets: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/secrets`,
					workerSecret: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/secrets/${"secretName"}`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					workflows: (0, e.BC)`/accounts/${"accountId"}/workflows`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				MN: function() {
					return i
				},
				Yg: function() {
					return s
				},
				i$: function() {
					return u
				},
				l3: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const i = async ([c, l]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: c,
					variables: l
				})
			})).body, u = async (...c) => (await e.get(...c)).body, s = c => async (l, v) => {
				const n = await fetch(l, v).then(o => o.json());
				return c.assertDecode(n)
			}, m = async (...c) => (await u(...c)).result;
			y.ZP = {
				fetcher: c => Array.isArray(c) ? m(...c) : m(c)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(j, y) {
				y()
			})(this, function() {
				"use strict";

				function j() {
					var t = !0,
						e = !1,
						r = null,
						i = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							"datetime-local": !0
						};

					function u(h) {
						return !!(h && h !== document && h.nodeName !== "HTML" && h.nodeName !== "BODY" && "classList" in h && "contains" in h.classList)
					}

					function s(h) {
						var I = h.type,
							E = h.tagName;
						return !!(E == "INPUT" && i[I] && !h.readOnly || E == "TEXTAREA" && !h.readOnly || h.isContentEditable)
					}

					function m(h) {
						h.getAttribute("is-focus-visible") !== "" && h.setAttribute("is-focus-visible", "")
					}

					function c(h) {
						h.getAttribute("is-focus-visible") === "" && h.removeAttribute("is-focus-visible")
					}

					function l(h) {
						u(document.activeElement) && m(document.activeElement), t = !0
					}

					function v(h) {
						t = !1
					}

					function n(h) {
						!u(h.target) || (t || s(h.target)) && m(h.target)
					}

					function o(h) {
						!u(h.target) || h.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), c(h.target))
					}

					function a(h) {
						document.visibilityState == "hidden" && (e && (t = !0), _())
					}

					function _() {
						document.addEventListener("mousemove", p), document.addEventListener("mousedown", p), document.addEventListener("mouseup", p), document.addEventListener("pointermove", p), document.addEventListener("pointerdown", p), document.addEventListener("pointerup", p), document.addEventListener("touchmove", p), document.addEventListener("touchstart", p), document.addEventListener("touchend", p)
					}

					function d() {
						document.removeEventListener("mousemove", p), document.removeEventListener("mousedown", p), document.removeEventListener("mouseup", p), document.removeEventListener("pointermove", p), document.removeEventListener("pointerdown", p), document.removeEventListener("pointerup", p), document.removeEventListener("touchmove", p), document.removeEventListener("touchstart", p), document.removeEventListener("touchend", p)
					}

					function p(h) {
						h.target.nodeName.toLowerCase() !== "html" && (t = !1, d())
					}
					document.addEventListener("keydown", l, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", a, !0), _(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && y(j)
			})
		},
		"../react/utils/bootstrap.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return r
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return u
				},
				gm: function() {
					return i
				}
			});
			const e = () => {
					var s, m, c;
					return (s = window) === null || s === void 0 || (m = s.bootstrap) === null || m === void 0 || (c = m.data) === null || c === void 0 ? void 0 : c.security_token
				},
				r = () => {
					var s, m, c;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 || (c = m.user) === null || c === void 0 ? void 0 : c.id)
				},
				i = () => {
					var s, m;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (m = s.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				u = () => {
					var s, m, c, l;
					return (s = window) === null || s === void 0 || (m = s.bootstrap) === null || m === void 0 || (c = m.data) === null || c === void 0 || (l = c.user) === null || l === void 0 ? void 0 : l.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				O5: function() {
					return u
				},
				Xm: function() {
					return i
				},
				kT: function() {
					return c
				},
				wV: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				i = () => (r() || "").indexOf("C0002") !== -1,
				u = () => (r() || "").indexOf("C0003") !== -1,
				s = () => (r() || "").indexOf("C0004") !== -1,
				m = () => (r() || "").indexOf("C0005") !== -1,
				c = n => {
					const o = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				l = () => {
					var n;
					const o = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				v = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return T
				},
				Kd: function() {
					return o
				},
				S8: function() {
					return g
				},
				ZW: function() {
					return l
				},
				ay: function() {
					return f
				},
				fh: function() {
					return b
				},
				i_: function() {
					return a
				},
				ly: function() {
					return n
				},
				th: function() {
					return c
				},
				ti: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				i = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				l = i.Q.en_US,
				v = "en_US",
				n = "cf-locale";

			function o() {
				const D = (0, m.parse)(document.cookie);
				return s.Z.get(n) || D[n] || null
			}

			function a(D) {
				document.cookie = (0, m.serialize)(n, D, {
					path: "/",
					maxAge: 31536e3,
					secure: !0
				}), s.Z.set(n, D)
			}

			function _() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0,
					secure: !0
				}), cache.remove(n)
			}
			const d = D => (0, u.Yd)(i.Q).find(M => i.Q[M] === D) || v,
				p = [],
				h = [],
				I = [i.Q.de_DE, i.Q.en_US, i.Q.es_ES, i.Q.fr_FR, i.Q.it_IT, i.Q.pt_BR, i.Q.ko_KR, i.Q.ja_JP, i.Q.zh_CN, i.Q.zh_TW],
				E = {
					test: [...I, ...h, ...p],
					development: [...I, ...h, ...p],
					staging: [...I, ...h, ...p],
					production: [...I, ...h]
				},
				g = D => {
					const M = i.Q[D];
					return E.production.includes(M)
				},
				T = () => Object.keys(i.Q).filter(D => g(D)),
				f = D => {
					const M = i.Q[D];
					return h.includes(M)
				},
				b = D => O[D],
				O = {
					de_DE: "Deutsch",
					en_US: "English",
					es_CL: "Espa\xF1ol",
					es_EC: "Espa\xF1ol",
					es_ES: "Espa\xF1ol",
					es_MX: "Espa\xF1ol",
					es_PE: "Espa\xF1ol",
					fr_FR: "Fran\xE7ais",
					it_IT: "Italiano",
					pt_BR: "Portugu\xEAs",
					ko_KR: "\uD55C\uAD6D\uC5B4",
					ja_JP: "\u65E5\u672C\u8A9E",
					zh_CN: "\u7B80\u4F53\u4E2D\u6587",
					zh_TW: "\u7E41\u9AD4\u4E2D\u6587"
				},
				A = r().locale();
			r().defineLocale("es-cl", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), r().defineLocale("es-ec", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), r().defineLocale("es-mx", {
				parentLocale: "es",
				longDateFormat: {
					LT: "h:mm a",
					LTS: "h:mm:ss a",
					L: "D/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm a",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm a"
				}
			}), r().defineLocale("es-pe", {
				parentLocale: "es",
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY HH:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
				}
			}), r().locale(A)
		},
		"../react/utils/translator.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				QT: function() {
					return d
				},
				Vb: function() {
					return l
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return c
				},
				_m: function() {
					return o
				},
				cC: function() {
					return a
				},
				oc: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(i),
				s = t("../flags.ts");
			const m = new r.Z({
				pseudoLoc: (0, s.J8)("is_pseudo_loc")
			});

			function c(p, ...h) {
				return m.t(p, ...h)
			}
			const l = m;

			function v(p, ...h) {
				return markdown(c(p, h))
			}

			function n(p) {
				if (Number(p) !== 0) {
					if (p % 86400 == 0) return c("time.num_days", {
						smart_count: p / 86400
					});
					if (p % 3600 == 0) return c("time.num_hours", {
						smart_count: p / 3600
					});
					if (p % 60 == 0) return c("time.num_minutes", {
						smart_count: p / 60
					})
				}
				return c("time.num_seconds", {
					smart_count: p
				})
			}

			function o(p, h) {
				return p in h ? h[p] : void 0
			}
			const a = i.Trans,
				_ = i.I18n,
				d = i.useI18n
		},
		"../react/utils/url.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Ct: function() {
					return M
				},
				Fl: function() {
					return Y
				},
				KT: function() {
					return z
				},
				NF: function() {
					return T
				},
				Nw: function() {
					return A
				},
				Pd: function() {
					return b
				},
				Uh: function() {
					return te
				},
				cm: function() {
					return I
				},
				e1: function() {
					return D
				},
				el: function() {
					return J
				},
				hW: function() {
					return W
				},
				pu: function() {
					return pe
				},
				qF: function() {
					return O
				},
				qR: function() {
					return X
				},
				td: function() {
					return f
				},
				uW: function() {
					return U
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				r = t("../react/pages/abuse/constants.ts"),
				i = t("../react/pages/d1/routes.ts"),
				u = t("../react/pages/images/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				m = t("../react/pages/r2/routes.ts"),
				c = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/zoneless-workers/routes.ts"),
				v = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(v);

			function o(x) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var ne = arguments[ee] != null ? Object(arguments[ee]) : {},
						ce = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(ne).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(ne, ye).enumerable
					})), ce.forEach(function(ye) {
						a(x, ye, ne[ye])
					})
				}
				return x
			}

			function a(x, ee, ne) {
				return ee = _(ee), ee in x ? Object.defineProperty(x, ee, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[ee] = ne, x
			}

			function _(x) {
				var ee = d(x, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function d(x, ee) {
				if (typeof x != "object" || x === null) return x;
				var ne = x[Symbol.toPrimitive];
				if (ne !== void 0) {
					var ce = ne.call(x, ee || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(x)
			}
			const {
				endsWithSlash: p
			} = e.default, h = new RegExp(/([0-9a-z]{32})/g), I = x => x == null ? void 0 : x.replace(h, ":id"), E = (x, ee) => {
				const ne = x.replace(p, "").split("/");
				return ne.slice(0, 2).concat([ee]).concat(ne.slice(3)).join("/")
			}, g = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), T = x => `/${x.replace(p,"").replace(/^\//,"")}`, f = x => A("add-site", x), b = x => A("billing", x), O = x => A("registrar/register", x), A = (x, ee) => ee ? `/${ee}${x?`/${x}`:""}` : `/?to=/:account/${x}`, D = () => {
				const x = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return x ? x[1] : null
			}, M = (x, ee) => n().stringify(o({}, n().parse(x), ee)), w = (x = "") => x.toString().replace(/([\/]{1,})$/, ""), S = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], R = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, L = /^\/(\w{32,})(\/[^.]*)?/, K = x => S.includes(x), q = x => !K(x), X = x => !K(x) && L.test(x), J = x => !K(x) && R.test(x), $ = x => R.exec(x), W = x => {
				if (J(x)) return x.split("/").filter(ee => ee.length > 0)[1]
			}, H = x => L.exec(x), U = x => {
				if (X(x)) {
					const ee = H(x);
					if (ee) return ee[1]
				}
			}, P = x => X(x) && x.split("/")[2] === "register-domain", N = x => P(x) ? x.split("/") : null, F = x => {
				if (J(x)) {
					const [, , , ee, ne, ce, ye, ae] = x.split("/");
					return ee === "traffic" && ne === "load-balancing" && ce === "pools" && ye === "edit" && ae
				}
			}, te = x => {
				const ee = N(x);
				if (ee) return ee[3]
			}, oe = (x, ee) => {
				var ne, ce;
				return ((ne = x.pattern.match(/\:/g)) !== null && ne !== void 0 ? ne : []).length - ((ce = ee.pattern.match(/\:/g)) !== null && ce !== void 0 ? ce : []).length
			}, ie = [...Object.values(c.C), ...Object.values(u.KJ), ...Object.values(m._j), ...Object.values(l._j), ...Object.values(s._j), ...Object.values(i._)].sort(oe);

			function Y(x) {
				if (!q(x)) return x;
				for (const ae of ie)
					if (ae.expression.test(x)) return ae.pattern;
				if (r.eM.abuseReportTab.expression.test(x)) {
					const ae = x.split("/"),
						Oe = ae[ae.length - 1];
					return r.eM.abuseReportTab.pattern.replace(":tab", Oe)
				}
				if (r.eM.abuseReport.expression.test(x)) return r.eM.abuseReport.pattern;
				const ee = N(x);
				if (ee) {
					const [, , ae, , ...Oe] = ee;
					return `/:accountId/${ae}/:domainName/${Oe.join("/")}`
				}
				if (F(x)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const ce = $(x);
				if (ce) {
					const [, , , , ae] = ce;
					return `/:accountId/:zoneName${ae||""}`
				}
				const ye = H(x);
				if (ye) {
					const [, , ae] = ye;
					return `/:accountId${ae||""}`
				}
				return x
			}

			function pe(x) {
				if (!!x) try {
					const ne = x.split(".").pop();
					if (ne && ne.length > 0) return ne
				} catch {}
			}

			function z(x, ee = document.location.href) {
				try {
					const ne = new URL(x),
						ce = new URL(ee);
					if (ne.origin === ce.origin) return `${ne.pathname}${ne.search}${ne.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return c
				},
				y: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				s = t.n(u);
			const m = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				l = () => {
					const v = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						m.test(v.pathname) && i.Z.set(c, v, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = t("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				P: function() {
					return u
				},
				b: function() {
					return s
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function i() {
				var m, c, l, v, n, o;
				return (m = window) === null || m === void 0 || (c = m.bootstrap) === null || c === void 0 || (l = c.data) === null || l === void 0 || (v = l.user) === null || v === void 0 || (n = v.betas) === null || n === void 0 || (o = n.some) === null || o === void 0 ? void 0 : o.call(n, a => a === "zone_level_access_beta")
			}

			function u() {
				const m = !!(0, e.Z)("zone-level-access");
				return i() || m
			}

			function s(m) {
				const c = !!(0, r.z1)("zone-level-access")(m);
				return i() || c
			}
		},
		"../utils/getDashVersion.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				p: function() {
					return i
				},
				t: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var u, s;
					return (u = window) === null || u === void 0 || (s = u.build) === null || s === void 0 ? void 0 : s.dashVersion
				},
				i = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return Je
				},
				IM: function() {
					return $e
				},
				yV: function() {
					return ge
				},
				Ug: function() {
					return k
				},
				v_: function() {
					return Ie
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				s = t("../react/common/selectors/languagePreferenceSelector.ts"),
				m = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				l = t("../react/utils/url.ts"),
				v = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../../../../node_modules/lodash-es/memoize.js"),
				a = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				_ = t("../utils/getDashVersion.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				p = t("../react/common/selectors/entitlementsSelectors.ts"),
				h = t("../react/common/utils/getEnvironment.ts");

			function I(de) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), _e.forEach(function(we) {
						E(de, we, ve[we])
					})
				}
				return de
			}

			function E(de, le, ve) {
				return le = g(le), le in de ? Object.defineProperty(de, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : de[le] = ve, de
			}

			function g(de) {
				var le = T(de, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function T(de, le) {
				if (typeof de != "object" || de === null) return de;
				var ve = de[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(de, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(de)
			}
			const f = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				b = (0, o.Z)(de => {
					try {
						return f.assertDecode((0, c.parse)(de))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				O = de => (le, ve, _e) => {
					try {
						const Xe = window.location.pathname,
							tt = (0, u.bh)().getState(),
							ze = b(document.cookie),
							At = I({
								page: (0, l.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, _.t)(),
								environment: (0, h.Z)()
							}, ze);
						if (le === "identify") {
							var we, Ue;
							const ut = {
								gates: (0, a.T2)(tt) || {},
								country: (we = t.g) === null || we === void 0 || (Ue = we.bootstrap) === null || Ue === void 0 ? void 0 : Ue.ip_country
							};
							return de(le, ve, I({}, At, ut, _e))
						} else {
							const ut = {
								accountId: (0, l.uW)(Xe),
								zoneName: (0, l.hW)(Xe),
								domainName: (0, l.Uh)(Xe)
							};
							if ((0, l.qR)(Xe)) {
								var Ye;
								const at = (0, d.D0)(tt);
								ut.isEntAccount = !!(at == null || (Ye = at.meta) === null || Ye === void 0 ? void 0 : Ye.has_enterprise_zones) || (0, p.p1)(tt)
							}
							if ((0, l.el)(Xe)) {
								var ot;
								const at = (0, v.nA)(tt);
								ut.zoneId = at == null ? void 0 : at.id, ut.plan = at == null || (ot = at.plan) === null || ot === void 0 ? void 0 : ot.legacy_id
							}
							return de(le, ve, I({}, At, ut, _e))
						}
					} catch (Xe) {
						return console.error(Xe), de(le, ve, _e)
					}
				},
				A = de => async (le, ve, _e) => {
					try {
						return await de(le, ve, _e)
					} catch (we) {
						if (console.error(we), !Ie()) throw we;
						return {
							status: "rejected",
							reason: we
						}
					}
				};
			var D = t("../react/app/components/AccountHome/tracking.ts"),
				M = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				w = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				S = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				R = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				L = t("../react/common/middleware/sparrow/errors.ts"),
				K = t("../react/pages/abuse/constants.ts"),
				q = t("../react/pages/blocked-content/constants.ts"),
				X = t("../react/pages/caching/tracking.tsx"),
				J = t("../react/pages/dns/dns-records/tracking.ts"),
				$ = t("../react/pages/home/alerts/tracking.ts"),
				W = t("../react/pages/home/audit-log/tracking.ts"),
				H = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				U = t("../react/pages/home/configurations/lists/tracking.ts"),
				P = t("../react/pages/home/domain-registration/tracking.ts"),
				N = t("../react/pages/home/members/sparrowEvents.ts"),
				F = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				te = t("../react/pages/hyperdrive/tracking.ts"),
				oe = t("../react/pages/magic/network-monitoring/constants.ts"),
				ie = t("../react/pages/magic/overview/tracking.ts"),
				Y = t("../react/pages/magic/packet-captures/constants.ts"),
				pe = t("../react/pages/page-rules/tracking.ts"),
				z = t("../react/pages/pages/constants.ts"),
				x = t("../react/pages/pipelines/tracking.ts"),
				ee = t("../react/pages/profile/tracking.ts"),
				ne = t("../react/pages/secrets-store/resources/constants.ts"),
				ce = t("../react/pages/security-center/tracking.ts"),
				ye = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				ae = t("../react/pages/security/api-shield/tracking.ts"),
				Oe = t("../react/pages/security/bots/tracking.ts"),
				De = t("../react/pages/security/overview/resources/constants.ts"),
				Re = t("../react/pages/security/page-shield/resources/index.ts"),
				We = t("../react/pages/security/resources/constants.tsx"),
				ke = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				it = t("../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx"),
				Ke = t("../react/pages/security/settings/index.tsx"),
				et = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Fe = t("../react/pages/shared-config/sparrowEvents.tsx"),
				G = t("../react/pages/spectrum/tracking.tsx"),
				be = t("../react/pages/traffic/argo/tracking.ts"),
				Be = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				xe = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				nt = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				dt = t("../react/pages/turnstile/tracking.ts"),
				mt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ae = t("../react/pages/zoneless-workers/constants.ts"),
				rt = t("../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				Q = t("../react/pages/analytics/eos/resources/tracking.ts"),
				se = t("../react/pages/internal-dns/tracking.ts"),
				fe = t("../react/pages/security/ai-agent/constants.ts"),
				Ce = t("../react/pages/ai-zone/constants.ts");
			const Ge = ((de, le, ...ve) => n.eg.union([n.eg.literal(de), n.eg.literal(le), ...ve.map(_e => n.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin domain registration flow", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(Q.f), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "global nav shortcut clicked", "global nav shortcut pinned", "global nav shortcut unpinned", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", D.gX.SPARROW_PROJECTS_TABLE_CLICK, D.gX.SPARROW_EMPTY_STATE_CTA_CLICK, D.gX.SPARROW_PRODUCT_CARD_CLICK, D.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, D.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, D.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, D.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, D.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, D.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, D.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, Ce.A3.BOT_ACTION_CHANGED, Ce.A3.TERMS_DECISION, Ce.A3.STRIPE_CONNECT, Ce.A3.STRIPE_ACCOUNT_VIEWED, Ce.A3.PPC_STATUS_CHANGED, Ce.A3.PPC_PRICE_CHANGED, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ae.QV.clickedDownloadAnalytics, Ae.QV.clickedPrintAnalytics, Ae.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ae.QV.addWCITriggerToExistingWorker, Ae.QV.updateWCITrigger, Ae.QV.deleteWCITrigger, Ae.QV.addWCITriggerToNewWorker, Ae.QV.createWCIBuildForNewWorker, Ae.QV.completedWCIBuildForNewWorker, Ae.QV.changedDefaultConfigurations, Ae.QV.clickElement, z.QV.toggledPagesSmartPlacement, z.QV.downloadDemoProject, Ae.QV.clickCreateWorkerFromRepoNextStep, Ae.QV.clickCreateWorkerFromRepoPreviousStep, Ae.QV.clickCreateNewSCMConnection, Ae.QV.redirectFromSCMOAuth, Ae.QV.clickSubmitError, Ae.QV.selectTemplate, Ae.QV.clickedListTemplates, Ae.QV.clickedImportRepository, Ae.QV.clickedClonePublicRepositoryFromUrl, Ae.QV.templateStubWorkerCreated, Ae.QV.templateStubWorkerCreationFailed, Ae.QV.templateRepositoryCreated, Ae.QV.templateRepositoryCreationFailed, Ae.QV.copyTemplateC3Command, Ae.QV.templateDeployClick, Ae.QV.reauthenticateGithubModalShown, Ae.QV.updateGithubPermissionsClicked, Ae.QV.D2W_importRepository, Ae.QV.D2W_stubWorkerCreated, Ae.QV.D2W_stubWorkerCreationFailed, Ae.QV.D2W_repositoryCreated, Ae.QV.D2W_repositoryCreationFailed, Ae.QV.D2W_resourcesProvisioned, Ae.QV.D2W_resourceProvisioningFailed, Ae.QV.D2W_githubAPIRateLimitReached, Ae.QV.createResource, Ae.QV.deleteResource, Ae.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", Oe.N3.INITIAL_FETCH_SCORES, Oe.N3.FETCH_CONFIGURATION, Oe.N3.INITIAL_FETCH_TIME_SERIES, Oe.N3.INITIAL_FETCH_ATTRIBUTES, Oe.N3.UPDATE_SETTINGS, Oe.N3.DELETE_RULE, Oe.N3.UPDATE_RULE, Oe.N3.FETCH_RULES, Oe.N3.CONFIGURE_BOT_MANAGEMENT, Oe.N3.WAF_RULES_REDIRECT, fe.PJ, fe.tP, fe.zf, F.F.TOGGLE_TCP_PROTECTION, F.F.GET_TCP_PROTECTION_PREFIXES, F.F.CREATE_TCP_PROTECTION_PREFIXES, F.F.CREATE_TCP_PROTECTION_PREFIX, F.F.UPDATE_TCP_PROTECTION_PREFIX, F.F.DELETE_TCP_PROTECTION_PREFIX, F.F.DELETE_TCP_PROTECTION_PREFIXES, F.F.GET_TCP_PROTECTION_ALLOWLIST, F.F.CREATE_TCP_PROTECTION_ALLOWLIST, F.F.UPDATE_TCP_PROTECTION_ALLOWLIST, F.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, F.F.DELETE_TCP_PROTECTION_ALLOWLIST, F.F.GET_SYN_PROTECTION_RULES, F.F.GET_SYN_PROTECTION_RULE, F.F.CREATE_SYN_PROTECTION_RULE, F.F.UPDATE_SYN_PROTECTION_RULE, F.F.DELETE_SYN_PROTECTION_RULE, F.F.GET_TCP_FLOW_PROTECTION_RULES, F.F.GET_TCP_FLOW_PROTECTION_RULE, F.F.CREATE_TCP_FLOW_PROTECTION_RULE, F.F.UPDATE_TCP_FLOW_PROTECTION_RULE, F.F.DELETE_TCP_FLOW_PROTECTION_RULE, F.F.GET_SYN_PROTECTION_FILTERS, F.F.GET_SYN_PROTECTION_FILTER, F.F.CREATE_SYN_PROTECTION_FILTER, F.F.UPDATE_SYN_PROTECTION_FILTER, F.F.DELETE_SYN_PROTECTION_FILTER, F.F.GET_TCP_FLOW_PROTECTION_FILTERS, F.F.GET_TCP_FLOW_PROTECTION_FILTER, F.F.CREATE_TCP_FLOW_PROTECTION_FILTER, F.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, F.F.DELETE_TCP_FLOW_PROTECTION_FILTER, F.F.GET_DNS_PROTECTION_RULES, F.F.GET_DNS_PROTECTION_RULE, F.F.CREATE_DNS_PROTECTION_RULE, F.F.UPDATE_DNS_PROTECTION_RULE, F.F.DELETE_DNS_PROTECTION_RULE, Re.FV.MANAGE_PAGE_SHIELD_POLICY, Re.FV.CONFIGURE_PAGE_SHIELD, Re.FV.VIEW_DETECTED_CONNECTIONS, Re.FV.VIEW_DETECTED_SCRIPTS, Re.FV.VIEW_PAGE_SHIELD_POLICIES, Re.FV.VIEW_PAGE_SHIELD_SETTINGS, Re.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Re.FV.SHOW_MUTABLE_VERSION_TOOLTIP, U.y.CREATE_LIST, U.y.DELETE_LIST, U.y.ADD_LIST_ITEM, U.y.DELETE_LIST_ITEM, te.KO.PURCHASE_WORKERS_PAID, te.KO.LIST_CONFIGS, te.KO.SEARCH_CONFIGS, te.KO.CREATE_HYPERDRIVE_CONFIG, te.KO.VIEW_CONFIG_DETAILS, te.KO.UPDATE_CACHING_SETTINGS, te.KO.UPDATE_ORIGIN_CONN_LIM_SETTINGS, te.KO.DELETE_HYPERDRIVE_CONFIG, te.KO.CLICK_HYPERDRIVE_DOCUMENTATION, te.KO.CLICK_GET_STARTED_GUIDE, te.KO.CLICK_CONNECTIVITY_GUIDES, te.KO.CLICK_QUICK_LINK, te.KO.CLICK_DISCORD, te.KO.CLICK_COMMUNITY, G.N.CNAME, G.N.IP_ADDRESS, G.N.LB, G.N.UPDATE_CNAME, G.N.UPDATE_IP_ADDRESS, G.N.UPDATE_LB, G.N.DISABLE, X.N.TIERED_CACHE, X.N.CACHE_PURGE, X.N.CACHE_ANALYTICS, ...(0, dt.P)(), ...(0, R.x4)(), ...(0, Ke.m8)(), ...(0, N.SH)(), ...(0, mt.Ky)(), ...(0, w.Cf)(), nt.N.CREATE, nt.N.EVENTS, nt.N.ANALYTICS, nt.N.UPDATE, nt.N.GENERATE_PREVIEW, ce.RY.INITIATE_URL_SCAN, ce.RY.LOAD_SCAN_INFO, ce.Ev.LOAD_THREAT_EVENTS, ce.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, ce.Ev.THREAT_EVENTS_FILTERS, ce.Ev.ABUSE_REPORT_BUTTON_CLICK, ce.Ev.ABUSE_REPORT_SUBMIT_CLICK, ce.Ev.ABUSE_REPORT_SUBMIT_FAILED, ce.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, ce.v9.EXPAND_INSIGHT_ROW, ce.v9.ONE_CLICK_RESOLVE_BUTTON, ce.v9.FOLLOW_RESOLVE_URL, ce.v9.MANAGE_INSIGHT, ce.v9.CLICK_SCAN_NOW, ce.v9.CLICK_EXPORT_INSIGHTS, ce.v9.BULK_ARCHIVE, ce.v9.CLICK_DETAILS_BUTTON, ae.Fj[ae.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, ae.Fj[ae.kq.ENDPOINT_MANAGEMENT].detailedMetrics, ae.Fj[ae.kq.ENDPOINT_MANAGEMENT].createEndpoint, ae.Fj[ae.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, ae.Fj[ae.kq.ENDPOINT_MANAGEMENT].deployRouting, ae.Fj[ae.kq.ENDPOINT_MANAGEMENT].deleteRouting, ae.Fj[ae.kq.API_DISCOVERY].viewDiscoveredEndpoints, ae.Fj[ae.kq.API_DISCOVERY].saveDiscoveredEndpoint, ae.Fj[ae.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, ae.Fj[ae.kq.SCHEMA_VALIDATION].viewSchemasList, ae.Fj[ae.kq.SCHEMA_VALIDATION].uploadSchema, ae.Fj[ae.kq.SCHEMA_VALIDATION].viewSchemaAdoption, ae.Fj[ae.kq.SCHEMA_VALIDATION].downloadSchema, ae.Fj[ae.kq.SCHEMA_VALIDATION].deleteSchema, ae.Fj[ae.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, ae.Fj[ae.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, ae.Fj[ae.kq.SEQUENCE_ANALYTICS].viewSequencesPage, ae.Fj[ae.kq.JWT_VALIDATION].viewJWTRules, ae.Fj[ae.kq.JWT_VALIDATION].addJWTRule, ae.Fj[ae.kq.JWT_VALIDATION].editJWTRule, ae.Fj[ae.kq.JWT_VALIDATION].deleteJWTRule, ae.Fj[ae.kq.JWT_VALIDATION].reprioritizeJWTRule, ae.Fj[ae.kq.JWT_VALIDATION].viewJWTConfigs, ae.Fj[ae.kq.JWT_VALIDATION].addJWTConfig, ae.Fj[ae.kq.JWT_VALIDATION].editJWTConfig, ae.Fj[ae.kq.JWT_VALIDATION].deleteJWTConfig, ae.Fj[ae.kq.SETTINGS].redirectToFirewallRulesTemplate, ae.Fj[ae.kq.SETTINGS].redirectToPages, ae.Fj[ae.kq.SETTINGS].listSessionIdentifiers, ae.Fj[ae.kq.SETTINGS].listRequestsContainingSessionIdentifiers, ae.Fj[ae.kq.SETTINGS].addOrRemoveSessionIdentifiers, ae.Fj[ae.kq.SETTINGS].redirectToCustomRules, ae.Fj[ae.kq.SETTINGS].listAllFallthroughSchemas, ae.Fj[ae.kq.SEQUENCE_RULES].listSequenceRules, ae.Fj[ae.kq.SEQUENCE_RULES].deleteSequenceRule, ae.Fj[ae.kq.SEQUENCE_RULES].reorderSequenceRule, ae.Fj[ae.kq.SEQUENCE_RULES].createSequenceRule, ae.Fj[ae.kq.SEQUENCE_RULES].editSequenceRule, W.Q.TOGGLE_V2, W.Q.FILTER, W.Q.FILTER_COUNTS, W.Q.FEEDBACK, W.Q.API_LATENCY, xe.Z.ANALYTICS, xe.Z.CREATE_AND_DEPLOY, xe.Z.CREATE_MONITOR_LINK, xe.Z.CREATE_MONITOR, xe.Z.CREATE_POOL_LINK, xe.Z.CREATE_POOL, xe.Z.EDIT_MONITOR, xe.Z.EDIT_POOL, xe.Z.LOAD_BALANCING_TABLE, xe.Z.POOL_TABLE, xe.Z.EDIT_MONITOR_LINK, xe.Z.EDIT_POOL_LINK, ...Be.eT, $.y.SECONDARY_DNS_NOTIFICATION_CREATE, $.y.SECONDARY_DNS_NOTIFICATION_UPDATE, $.y.SECONDARY_DNS_NOTIFICATION_DELETE, J.U.ZONE_TRANSFER_SUCCESS, J.U.DNS_RECORD_CREATE, J.U.DNS_RECORD_UPDATE, J.U.DNS_RECORD_DELETE, H.Y.PEER_DNS_CREATE, H.Y.PEER_DNS_UPDATE, H.Y.PEER_DNS_DELETE, H.Y.ZONE_TRANSFER_ENABLE, H.Y.ZONE_TRANSFER_DISABLE, be.V.ARGO_ENABLEMENT, be.V.ARGO_GEO_ANALYTICS_FETCH, be.V.ARGO_GLOBAL_ANALYTICS_FETCH, Y.X.VIEW_BUCKETS_LIST, Y.X.CREATE_BUCKET, Y.X.VALIDATE_BUCKET, Y.X.DELETE_BUCKET, Y.X.VIEW_CAPTURES_LIST, Y.X.CREATE_SIMPLE_CAPTURE, Y.X.CREATE_FULL_CAPTURE, Y.X.VIEW_FULL_CAPTURE, Y.X.DOWNLOAD_SIMPLE_CAPTURE, oe.bK.VIEW_RULES, oe.bK.CREATE_RULE, oe.bK.UPDATE_RULE, oe.bK.DELETE_RULE, oe.bK.VIEW_CONFIGURATION, oe.bK.CREATE_CONFIGURATION, oe.bK.UPDATE_CONFIGURATION, oe.bK.DELETE_CONFIGURATION, ie.r8.VIEW_ALERTS, ie.r8.VIEW_ALERTS_HISTORY, ie.r8.MAGIC_OVERVIEW_ANALYTICS, ie.VZ.CREATE_SITE, ie.VZ.CREATE_TUNNEL, ie.VZ.CREATE_STATIC_ROUTE, ye.DC.CLICK_ADAPTIVE_SAMPLING, ye.DC.CLICK_TO_LOG_EXPLORER_BANNER, ye.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ye.DC.CLICK_SWITCH_TO_RAW_LOGS, ye.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", P.U.REGISTER_DOMAIN_SEARCH_SUBMIT, P.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, P.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, P.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, P.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, P.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, P.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, P.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, P.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, P.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, P.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, P.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, P.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, P.U.REGISTER_DOMAIN_CHECKOUT_ERROR, P.U.TRANSFER_DOMAIN_CHANGE_STEP, P.U.RENEW_DOMAIN_COMPLETED, P.U.RESTORE_DOMAIN_INIT, P.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, P.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, P.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, P.U.RESTORE_DOMAIN_FAILURE, P.U.RESTORE_DOMAIN_COMPLETED, P.U.DOMAIN_DELETE_INIT, P.U.DOMAIN_DELETE_COMPLETED, P.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, P.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, P.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, P.U.DOMAIN_DELETE_CONFIRM_DELETE, P.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, P.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, P.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, P.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, P.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, P.U.DOMAIN_MOVE_START_FLOW, P.U.DOMAIN_MOVE_OPEN_DOCS, P.U.DOMAIN_MOVE_CLOSE_FLOW, P.U.DOMAIN_MOVE_PROGRESS_FLOW, P.U.DOMAIN_MOVE_SUBMIT, P.U.DOMAIN_MOVE_INITIATE_SUCCESS, P.U.DOMAIN_MOVE_INITIATE_ERROR, P.U.DOMAIN_MOVE_CANCEL, P.U.DOMAIN_MOVE_CANCEL_SUCCESS, P.U.DOMAIN_MOVE_CANCEL_ERROR, P.U.ACTION_CENTER_NAVIGATE, P.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, P.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, P.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, P.U.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, P.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS, P.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR, P.U.TRANSFER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, ne.z3.CREATE_SECRET, ne.z3.DELETE_SECRET, ne.z3.BIND_SECRET, ne.z3.DUPLICATE_SECRET, ne.z3.EDIT_SECRET, x.KO.CLICK_GET_STARTED_GUIDE, x.KO.CLICK_PIPELINE_DOCUMENTATION, x.KO.CLICK_QUICK_LINK, x.KO.CREATE_PIPELINE, x.KO.DELETE_PIPELINE, x.KO.LIST_PIPELINES, x.KO.VIEW_PIPELINE, M.S.EXISTING_DOMAIN, M.S.NEW_DOMAIN, M.S.WAF_RULESET, M.S.WORKERS, M.S.PAGES, M.S.R2, M.S.ACCOUNT_MEMBERS, pe._.TEMPLATE_PRODUCT_SELECTED, pe._.TEMPLATE_SELECTED, pe._.TEMPLATE_SAVE_DRAFT, pe._.TEMPLATE_CANCEL, pe._.TEMPLATE_DEPLOY, Fe.D.CLICK_GO_BACK_SHARE_MODAL, Fe.D.CLICK_MENU_ITEM_SHARE, Fe.D.CLICK_ON_CANCEL_SHARE_MODAL, Fe.D.CLICK_ON_CLOSE_SHARE_MODAL, Fe.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Fe.D.CLICK_ON_DELETE_RULESET, Fe.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Fe.D.CLICK_ON_EDIT_SHARE_PERMISSION, Fe.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Fe.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Fe.D.CLICK_ON_SHARE_TABLE_ROW, We.pR.CLICK_GEOGRAPHICAL_TEMPLATE, We.pR.CLICK_IP_TEMPLATE, We.pR.CLICK_USER_AGENT_TEMPLATE, We.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Ke.vc.CREATED, Ke.vc.ENABLED, Ke.vc.DISABLED, Ke.vc.DELETED, Ke.vc.UPDATED, Ke.vc.DOWNLOADED, q.Gk.REQUEST_REVIEW, q.Gk.COPY_URL, S.v.FIELD, S.v.OPERATOR, et.Vj.SHOW_LCC_MIGRATION_BANNER, et.Vj.CLICK_LCC_DOCUMENTATION, et.Vj.CLICK_LCC_UPGRADE_GUIDE, et.Vj.SHOW_LCC_MIGRATION_WARNING, ke.yf.CLICK_DISMISS_INELIGIBILITY, ke.yf.CLICK_NEXT_STEP, ke.yf.CLICK_OPT_IN, ke.yf.CLICK_OPT_IN_BUTTON, ke.yf.CLICK_OPT_OUT_BUTTON, ke.yf.DISPLAY_MODAL, ke.yf.DISPLAY_OPT_OUT_MODAL, ke.yf.DISPLAY_TOOLTIP_NOT_AVAILABLE, ke.yf.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, ke.yf.DEFAULT_ALL_INIT, ke.yf.DEFAULT_ALL_OPT_OUT, ke.yf.DEFAULT_ALL_REENABLES, ke.yf.NEW_DASHBOARD_EXPERIENCE, De.AZ.LOAD_INSIGHTS, De.AZ.OPEN_SIDE_MODAL_INSIGHT, De.AZ.CLOSE_SIDE_MODAL_INSIGHT, De.AZ.CLICK_ACTION_INSIGHT, rt.YC.CHANGE_SETTING, rt.YC.LOAD_SETTINGS, rt.YC.OPEN_SIDE_MODAL_SETTING, rt.YC.CLOSE_SIDE_MODAL_SETTING, rt.YC.FILTER_SETTING, ye.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, ye.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, ye.DC.OPEN_SIDE_DRAWER, ye.DC.CLOSE_SIDE_DRAWER, it.Xc, it.Aq, ee.QV[ee.Xn].clickLoginFromMobileApp2fa, ee.QV[ee.Xn].clickTryOther2FAMethodOrBackupCode, ee.QV[ee.Xn].clickTryRecovery, ee.QV[ee.xq].clickRegenerateBackupCodes, K.Vq.APPEAL_MITIGATION_SUBMIT, K.Vq.APPEAL_MITIGATION_SUCCESS, K.Vq.APPEAL_MITIGATION_FAILURE, K.Vq.CLICK_ABUSE_REPORT_ID, K.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK, se.N3.CLICK_GIVE_FEEDBACK, se.N3.CLICK_NAVIGATION_TAB, se.N3.CLICK_SEARCH_BY_ZONE_NAME, se.N3.CLICK_SEARCH_BY_VIEW_NAME, se.N3.CLICK_CREATE_AN_INTERNAL_ZONE, se.N3.CLICK_CREATE_A_VIEW, se.N3.CLICK_SAVE_ZONE, se.N3.CLICK_SAVE_VIEW, se.N3.CLICK_SEARCH_BY_RECORD_NAME, se.N3.CLICK_ZONE_NAME, se.N3.CLICK_ADD_A_RECORD, se.N3.CLICK_ADD_RECORD_SAVE, se.N3.CLICK_RECORD_EDIT, se.N3.CLICK_EDIT_RECORD_SAVE, se.N3.CLICK_IMPORT_RECORDS, se.N3.CLICK_MANAGE_LINKED_VIEWS, se.N3.CLICK_SAVE_MANAGE_LINKED_VIEWS, se.N3.CLICK_VIEW_RECORD),
				He = n.eg.exactStrict(n.eg.object({
					".agency": n.eg.any.optional,
					".auction": n.eg.any.optional,
					".bet": n.eg.any.optional,
					".center": n.eg.any.optional,
					".church": n.eg.any.optional,
					".com": n.eg.any.optional,
					".community": n.eg.any.optional,
					".energy": n.eg.any.optional,
					".fitness": n.eg.any.optional,
					".guru": n.eg.any.optional,
					".io": n.eg.any.optional,
					".info": n.eg.any.optional,
					".immo": n.eg.any.optional,
					".lgbt": n.eg.any.optional,
					".life": n.eg.any.optional,
					".live": n.eg.any.optional,
					".media": n.eg.any.optional,
					".mobi": n.eg.any.optional,
					".net": n.eg.any.optional,
					".network": n.eg.any.optional,
					".ninja": n.eg.any.optional,
					".online": n.eg.any.optional,
					".org": n.eg.any.optional,
					".photography": n.eg.any.optional,
					".plus": n.eg.any.optional,
					".press": n.eg.any.optional,
					".pro": n.eg.any.optional,
					".services": n.eg.any.optional,
					".store": n.eg.any.optional,
					".tech": n.eg.any.optional,
					".wiki": n.eg.any.optional,
					".wtf": n.eg.any.optional,
					".xyz": n.eg.any.optional,
					_ga: n.eg.any.optional,
					_lpchecked: n.eg.any.optional,
					a: n.eg.any.optional,
					absolute: n.eg.any.optional,
					access: n.eg.any.optional,
					access_users_allowed: n.eg.any.optional,
					account: n.eg.any.optional,
					accountId: n.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": n.eg.any.optional,
					"accountResolver/NO_ACTION": n.eg.any.optional,
					accountResolverTotalCpuTime: n.eg.any.optional,
					accountResolverTotalTime: n.eg.any.optional,
					accountResolverTotalUserActionsTime: n.eg.any.optional,
					action: n.eg.any.optional,
					addedRecords: n.eg.any.optional,
					addon: n.eg.any.optional,
					address: n.eg.any.optional,
					apiUrl: n.eg.any.optional,
					argo_accelerated_gigabytes: n.eg.any.optional,
					"aria-current": n.eg.any.optional,
					"aria-controls": n.eg.any.optional,
					"aria-label": n.eg.any.optional,
					"aria-selected": n.eg.any.optional,
					authHeaders: n.eg.any.optional,
					autocomplete: n.eg.any.optional,
					autoRenew: n.eg.any.optional,
					autoSetup: n.eg.any.optional,
					b: n.eg.any.optional,
					buckets: n.eg.string.optional,
					banner: n.eg.any.optional,
					bot: n.eg.any.optional,
					bot_management: n.eg.any.optional,
					brokenExpression: n.eg.any.optional,
					bundle: n.eg.any.optional,
					c: n.eg.any.optional,
					cacheKey: n.eg.any.optional,
					cache_by_device_type: n.eg.any.optional,
					cache_rules: n.eg.any.optional,
					campaignId: n.eg.any.optional,
					campaignID: n.eg.any.optional,
					cancelled: n.eg.any.optional,
					category: n.eg.any.optional,
					cd43: n.eg.any.optional,
					cd45: n.eg.any.optional,
					cd47: n.eg.any.optional,
					certificate_pack_id: n.eg.any.optional,
					certificate_pack_type: n.eg.any.optional,
					cf: n.eg.any.optional,
					cfPlan: n.eg.any.optional,
					chartName: n.eg.any.optional,
					charts: n.eg.any.optional,
					childrenCount: n.eg.any.optional,
					childrenSelected: n.eg.any.optional,
					class: n.eg.any.optional,
					code0: n.eg.any.optional,
					columnName: n.eg.string.optional,
					columns: n.eg.array(n.eg.string).optional,
					completedTasks: n.eg.any.optional,
					component: n.eg.any.optional,
					component_values: n.eg.any.optional,
					configuration_rules: n.eg.any.optional,
					contentfulId: n.eg.any.optional,
					country: n.eg.any.optional,
					currentCA: n.eg.any.optional,
					currentPerPage: n.eg.any.optional,
					currentPage: n.eg.any.optional,
					d: n.eg.any.optional,
					dashVersion: n.eg.any.optional,
					"data-children-count": n.eg.any.optional,
					"data-tracking-name": n.eg.any.optional,
					"data-tracking-id": n.eg.any.optional,
					"data-testid": n.eg.any.optional,
					dataset: n.eg.any.optional,
					databaseId: n.eg.any.optional,
					dateCreated: n.eg.any.optional,
					dateModified: n.eg.any.optional,
					ddos: n.eg.any.optional,
					description: n.eg.string.optional,
					dedicated_certificates: n.eg.any.optional,
					dedicated_certificates_custom: n.eg.any.optional,
					deepLink: n.eg.any.optional,
					default: n.eg.any.optional,
					destinationPage: n.eg.string.optional,
					detailType: n.eg.any.optional,
					deviceViewport: n.eg.any.optional,
					direction: n.eg.any.optional,
					directive: n.eg.any.optional,
					"DNS import method": n.eg.any.optional,
					domainName: n.eg.any.optional,
					download: n.eg.any.optional,
					duration: n.eg.any.optional,
					dynamic_redirects: n.eg.any.optional,
					e: n.eg.any.optional,
					email_count: n.eg.any.optional,
					end: n.eg.any.optional,
					endDate: n.eg.any.optional,
					enabled: n.eg.any.optional,
					entitled: n.eg.any.optional,
					environment: n.eg.string.optional,
					error: n.eg.any.optional,
					errorCode: n.eg.any.optional,
					errorMessage: n.eg.any.optional,
					errors: n.eg.any.optional,
					expand: n.eg.any.optional,
					experiment: n.eg.any.optional,
					expression: n.eg.any.optional,
					expressionType: n.eg.any.optional,
					features: n.eg.array(n.eg.string).optional,
					failureReasons: n.eg.any.optional,
					featureChange: n.eg.any.optional,
					featureImproved: n.eg.any.optional,
					featureName: n.eg.any.optional,
					featureOriginal: n.eg.any.optional,
					field: n.eg.any.optional,
					fieldName: n.eg.any.optional,
					filterId: n.eg.any.optional,
					firewall_rules: n.eg.any.optional,
					flow: n.eg.any.optional,
					"font-size": n.eg.any.optional,
					form: n.eg.any.optional,
					formView: n.eg.any.optional,
					frequency: n.eg.any.optional,
					from: n.eg.any.optional,
					fromCategorySearch: n.eg.any.optional,
					fromStreamRatePlanId: n.eg.any.optional,
					functions: n.eg.any.optional,
					toStreamRatePlanId: n.eg.any.optional,
					gatesDelayed: n.eg.any.optional,
					geo: n.eg.any.optional,
					guid: n.eg.any.optional,
					hasData: n.eg.any.optional,
					hasRecords: n.eg.any.optional,
					hasSidebarNav: n.eg.boolean.optional,
					"hasTest2019-06-03": n.eg.any.optional,
					hCaptchaDisplayed: n.eg.any.optional,
					hasEnabledSecurityNavigation: n.eg.any.optional,
					hasEnabledDefaultUnifiedSecurity: n.eg.any.optional,
					isZoneEligibleForUnification: n.eg.any.optional,
					header_modification: n.eg.any.optional,
					hostname_count: n.eg.any.optional,
					hostParam: n.eg.any.optional,
					href: n.eg.any.optional,
					id: n.eg.any.optional,
					index: n.eg.any.optional,
					indexLevel: n.eg.any.optional,
					initialRecommendation: n.eg.any.optional,
					ip_access_rules: n.eg.any.optional,
					items: n.eg.number.optional,
					isAuthenticated: n.eg.any.optional,
					isPaused: n.eg.any.optional,
					isCloudflare: n.eg.any.optional,
					isE2e: n.eg.boolean.optional,
					isExpanding: n.eg.boolean.optional,
					isEntAccount: n.eg.boolean.optional,
					isEnterprise: n.eg.boolean.optional,
					isInactive: n.eg.boolean.optional,
					isOpen: n.eg.boolean.optional,
					isScript: n.eg.any.optional,
					isSPA: n.eg.any.optional,
					isStreaming: n.eg.any.optional,
					isParent: n.eg.any.optional,
					isViewAll: n.eg.any.optional,
					isEditingSubscription: n.eg.any.optional,
					is_replacing: n.eg.any.optional,
					isRaw: n.eg.any.optional,
					jurisdiction: n.eg.any.optional,
					key: n.eg.any.optional,
					label: n.eg.any.optional,
					lastTimestamp: n.eg.any.optional,
					last_scan_days_ago: n.eg.any.optional,
					level: n.eg.any.optional,
					limit: n.eg.any.optional,
					link: n.eg.any.optional,
					listType: n.eg.any.optional,
					load_balancing: n.eg.any.optional,
					load_balancing_base: n.eg.any.optional,
					load_balancing_dns_queries: n.eg.any.optional,
					load_balancing_geo_routing: n.eg.any.optional,
					load_balancing_monitor_interval: n.eg.any.optional,
					load_balancing_origins: n.eg.any.optional,
					load_balancing_probe_regions: n.eg.any.optional,
					legacyDeepLink: n.eg.any.optional,
					locale: n.eg.any.optional,
					location: n.eg.any.optional,
					locationHint: n.eg.any.optional,
					maliciousCode: n.eg.any.optional,
					maliciousDomain: n.eg.any.optional,
					maliciousURL: n.eg.any.optional,
					managed_rules: n.eg.any.optional,
					marketingPlan: n.eg.any.optional,
					matchesCount: n.eg.any.optional,
					matchingRequestPercentage: n.eg.any.optional,
					matchingRequests: n.eg.any.optional,
					message0: n.eg.any.optional,
					method: n.eg.any.optional,
					millis: n.eg.any.optional,
					"mirage-recommendation": n.eg.any.optional,
					mode: n.eg.any.optional,
					monitor: n.eg.string.optional,
					monitorType: n.eg.any.optional,
					mrktCheckboxDisplayed: n.eg.any.optional,
					name: n.eg.any.optional,
					newTotalCount: n.eg.any.optional,
					novalidate: n.eg.any.optional,
					numAccounts: n.eg.any.optional,
					numRecords: n.eg.any.optional,
					numRecordsToApply: n.eg.any.optional,
					numRecordsToPrompt: n.eg.any.optional,
					numRecordsToRemove: n.eg.any.optional,
					numRows: n.eg.any.optional,
					origin_rules: n.eg.any.optional,
					nextPlan: n.eg.any.optional,
					numFilters: n.eg.any.optional,
					numRawLogs: n.eg.any.optional,
					numSampledLogs: n.eg.any.optional,
					moreRawLogs: n.eg.any.optional,
					old_expires_on: n.eg.any.optional,
					old_mode: n.eg.any.optional,
					oldFrequency: n.eg.string.optional,
					oldPlan: n.eg.any.optional,
					oldPrice: n.eg.number.optional,
					oldRatePlan: n.eg.string.optional,
					oldStep: n.eg.any.optional,
					oldSubscriptionValues: n.eg.record(n.eg.string, n.eg.any).optional,
					oldValue: n.eg.any.optional,
					onboarding: n.eg.any.optional,
					operator: n.eg.any.optional,
					order: n.eg.string.optional,
					order_by: n.eg.any.optional,
					page: n.eg.any.optional,
					page_rules: n.eg.any.optional,
					pageName: n.eg.any.optional,
					pageNumber: n.eg.any.optional,
					params: n.eg.any.optional,
					paused: n.eg.any.optional,
					phase: n.eg.any.optional,
					origin_url: n.eg.string.optional,
					payment_country: n.eg.string.optional,
					payment_gateway: n.eg.string.optional,
					percentages: n.eg.array(n.eg.number).optional,
					permission: n.eg.string.optional,
					personalisation: n.eg.boolean.optional,
					personalized: n.eg.boolean.optional,
					per_page: n.eg.any.optional,
					plan: n.eg.any.optional,
					plans: n.eg.any.optional,
					planVolume: n.eg.any.optional,
					pinned: n.eg.boolean.optional,
					position: n.eg.number.optional,
					prefs: n.eg.any.optional,
					previousPage: n.eg.any.optional,
					previousTotalCount: n.eg.any.optional,
					price: n.eg.any.optional,
					priority: n.eg.any.optional,
					product: n.eg.any.optional,
					prioritize_malicious: n.eg.any.optional,
					products: n.eg.any.optional,
					productName: n.eg.any.optional,
					productCategory: n.eg.any.optional,
					provider: n.eg.any.optional,
					question: n.eg.any.optional,
					quota: n.eg.any.optional,
					ratePlan: n.eg.any.optional,
					rayId: n.eg.any.optional,
					readTasks: n.eg.any.optional,
					reason: n.eg.any.optional,
					recommendation: n.eg.any.optional,
					recommendationType: n.eg.any.optional,
					recordAdditionMethod: n.eg.any.optional,
					recordTypes: n.eg.any.optional,
					region: n.eg.any.optional,
					registrar: n.eg.any.optional,
					resourceName: n.eg.string.optional,
					rulesCount: n.eg.any.optional,
					gclid: n.eg.any.optional,
					gclsrc: n.eg.any.optional,
					dclid: n.eg.any.optional,
					utm_source: n.eg.any.optional,
					utm_medium: n.eg.any.optional,
					utm_campaign: n.eg.any.optional,
					utm_term: n.eg.any.optional,
					utm_content: n.eg.any.optional,
					rangeMax: n.eg.number.optional,
					rangeMin: n.eg.number.optional,
					rate_limiting: n.eg.any.optional,
					ratePlanId: n.eg.any.optional,
					ratePlanName: n.eg.any.optional,
					referring_domain: n.eg.any.optional,
					referrer: n.eg.any.optional,
					registrationPeriod: n.eg.any.optional,
					registrationStatus: n.eg.any.optional,
					rel: n.eg.any.optional,
					relativeTimeRange: n.eg.any.optional,
					resultRank: n.eg.number.optional,
					"rocket_loader-recommendation": n.eg.any.optional,
					role: n.eg.any.optional,
					roles: n.eg.any.optional,
					ruleDescription: n.eg.any.optional,
					ruleId: n.eg.any.optional,
					scanFailed: n.eg.any.optional,
					scope: n.eg.any.optional,
					searchAction: n.eg.any.optional,
					searchDescription: n.eg.any.optional,
					searchParam: n.eg.any.optional,
					searchStatus: n.eg.any.optional,
					searchTerm: n.eg.any.optional,
					searchValue: n.eg.any.optional,
					section: n.eg.any.optional,
					seenOnParam: n.eg.any.optional,
					selected: n.eg.any.optional,
					series: n.eg.any.optional,
					service: n.eg.any.optional,
					setting: n.eg.any.optional,
					setup: n.eg.any.optional,
					showErrors: n.eg.any.optional,
					sortDirection: n.eg.string.optional,
					sortBy: n.eg.string.optional,
					source: n.eg.any.optional,
					startDate: n.eg.any.optional,
					state: n.eg.any.optional,
					status: n.eg.any.optional,
					step: n.eg.any.optional,
					storageClass: n.eg.any.optional,
					string: n.eg.any.optional,
					stream_storage_thousand_minutes: n.eg.any.optional,
					stream_viewed_thousand_minutes: n.eg.any.optional,
					subcategory: n.eg.any.optional,
					subscribedToMarketing: n.eg.any.optional,
					subscriptionValues: n.eg.record(n.eg.string, n.eg.any).optional,
					subcomponent: n.eg.string.optional,
					success: n.eg.any.optional,
					supportLevel: n.eg.any.optional,
					survey: n.eg.any.optional,
					tab: n.eg.any.optional,
					tableName: n.eg.any.optional,
					tag: n.eg.any.optional,
					target: n.eg.any.optional,
					targetPage: n.eg.any.optional,
					targetCA: n.eg.any.optional,
					target_pack_type: n.eg.any.optional,
					task: n.eg.any.optional,
					text: n.eg.any.optional,
					timeRange: n.eg.any.optional,
					title: n.eg.any.optional,
					tld: n.eg.string.optional,
					to: n.eg.any.optional,
					toolCall: n.eg.any.optional,
					touched: n.eg.any.optional,
					total: n.eg.number.optional,
					transform_rules: n.eg.any.optional,
					trialPlan: n.eg.any.optional,
					trialStart: n.eg.any.optional,
					topic: n.eg.any.optional,
					totalCount: n.eg.any.optional,
					totalCpuTime: n.eg.any.optional,
					totalLevels: n.eg.any.optional,
					totalRequests: n.eg.any.optional,
					totalTime: n.eg.any.optional,
					totalUserActionsTime: n.eg.any.optional,
					type: n.eg.any.optional,
					upgrade: n.eg.boolean.optional,
					uploading: n.eg.any.optional,
					uploadFailed: n.eg.any.optional,
					url_rewrites: n.eg.any.optional,
					userGroupId: n.eg.string.optional,
					hosts: n.eg.string.optional,
					uiType: n.eg.string.optional,
					userId: n.eg.any.optional,
					userType: n.eg.any.optional,
					utm_referrer: n.eg.any.optional,
					version: n.eg.any.optional,
					validation_method: n.eg.any.optional,
					validity_days: n.eg.any.optional,
					value: n.eg.any.optional,
					visibility: n.eg.any.optional,
					via: n.eg.any.optional,
					waf: n.eg.any.optional,
					wizardName: n.eg.any.optional,
					wordpress: n.eg.any.optional,
					workers: n.eg.any.optional,
					worker_kv_deletes: n.eg.any.optional,
					worker_kv_lists: n.eg.any.optional,
					worker_kv_reads: n.eg.any.optional,
					worker_kv_storage: n.eg.any.optional,
					worker_kv_writes: n.eg.any.optional,
					worker_requests: n.eg.any.optional,
					wp_plugin: n.eg.any.optional,
					write_strategy: n.eg.any.optional,
					zone: n.eg.any.optional,
					zoneId: n.eg.any.optional,
					zoneName: n.eg.any.optional,
					"zoneResolver/NO_ACTION": n.eg.any.optional,
					"zoneResolver/SELECT_ZONE": n.eg.any.optional,
					zoneResolverTotalCpuTime: n.eg.any.optional,
					zoneResolverTotalTime: n.eg.any.optional,
					zoneResolverTotalUserActionsTime: n.eg.any.optional,
					zones: n.eg.any.optional,
					zoneStatus: n.eg.any.optional,
					zoneType: n.eg.any.optional,
					audit: n.eg.any.optional,
					score: n.eg.any.optional,
					potentialSavings: n.eg.any.optional,
					feature: n.eg.any.optional,
					days: n.eg.any.optional,
					minutes: n.eg.any.optional,
					customRange: n.eg.any.optional,
					metric: n.eg.any.optional,
					url: n.eg.any.optional,
					previousPlan: n.eg.any.optional,
					isStarring: n.eg.any.optional,
					isStarred: n.eg.any.optional,
					totalStarredZones: n.eg.number.optional,
					totalZones: n.eg.number.optional,
					widgetName: n.eg.any.optional,
					statusType: n.eg.any.optional,
					outcome: n.eg.any.optional,
					marketingOptInChecked: n.eg.boolean.optional,
					prompt: n.eg.any.optional,
					positive: n.eg.any.optional,
					endpoint: n.eg.any.optional,
					isArgoEnabled: n.eg.any.optional,
					insightId: n.eg.any.optional,
					insightClass: n.eg.string.optional,
					insightType: n.eg.string.optional,
					severity: n.eg.string.optional,
					decision: n.eg.any.optional,
					domain: n.eg.any.optional,
					exact: n.eg.any.optional,
					fees: n.eg.any.optional,
					new_selection: n.eg.any.optional,
					numDomainsInCart: n.eg.any.optional,
					payment_method: n.eg.string.optional,
					payment_option: n.eg.string.optional,
					premium: n.eg.any.optional,
					previous_selection: n.eg.any.optional,
					pricing_local: n.eg.any.optional,
					selection: n.eg.any.optional,
					uniqueTopLevelDomains: n.eg.any.optional,
					template_name: n.eg.any.optional,
					productResource: n.eg.any.optional,
					snippets: n.eg.any.optional,
					ddos_l7: n.eg.any.optional,
					http_request_transform: n.eg.any.optional,
					http_request_origin: n.eg.any.optional,
					http_request_cache_settings: n.eg.any.optional,
					http_config_settings: n.eg.any.optional,
					http_request_dynamic_redirect: n.eg.any.optional,
					http_request_sbfm: n.eg.any.optional,
					"transform-rules": n.eg.any.optional,
					http_request_snippets: n.eg.any.optional,
					cloud_connector: n.eg.any.optional,
					is_first_project: n.eg.any.optional,
					is_first_scm_connection: n.eg.any.optional,
					is_preview_trigger: n.eg.any.optional,
					scm_type: n.eg.any.optional,
					existing_connection_total: n.eg.any.optional,
					invalid_fields: n.eg.any.optional,
					is_retry: n.eg.any.optional,
					changed_fields: n.eg.any.optional,
					rulesetName: n.eg.string.optional,
					isECCRuleset: n.eg.boolean.optional,
					isLCCEnabled: n.eg.boolean.optional,
					isECCEnabled: n.eg.boolean.optional,
					tabName: n.eg.any.optional,
					repo_owner: n.eg.string.optional,
					repo_name: n.eg.string.optional,
					subdirectory: n.eg.string.optional,
					seed_repo: n.eg.string.optional,
					branch: n.eg.string.optional,
					queryMode: n.eg.any.optional
				})),
				ht = (de, le) => {
					const [ve, _e] = yt(le);
					let we, Ue;
					return (0, n.nM)(Ge.decode(de)) && (we = new L.Uh(de)), _e && _e.length > 0 && (Ue = new L.oV(de, _e)), [ve, we, Ue]
				},
				yt = de => {
					const le = He.decode(de);
					if ((0, n.nM)(le)) {
						const ve = le.left.map(({
							context: _e
						}) => _e.map(({
							key: we
						}) => we)).reduce((_e, we) => _e.concat(we), []).filter(_e => _e in de);
						return [bt(ve, de), ve]
					}
					return [de, []]
				},
				bt = (de, le) => Object.entries(le).reduce((ve, [_e, we]) => (de.includes(_e) || (ve[_e] = we), ve), {}),
				jt = de => (le, ve, _e) => {
					const [we, Ue, Ye] = ht(ve, _e);
					if (Ue) throw Ue;
					return Ye && console.error(Ye), de(le, ve, we)
				};
			var Ze = t("../react/utils/zaraz.ts");
			const gt = {
					identify: !0
				},
				st = de => (le, ve, _e) => (gt[ve] || Ze.tg === null || Ze.tg === void 0 || Ze.tg.track(ve, _e), de(le, ve, _e));
			var lt = t("../react/common/selectors/userSelectors.ts"),
				ft = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function Le(de) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), _e.forEach(function(we) {
						Z(de, we, ve[we])
					})
				}
				return de
			}

			function Z(de, le, ve) {
				return le = me(le), le in de ? Object.defineProperty(de, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : de[le] = ve, de
			}

			function me(de) {
				var le = he(de, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function he(de, le) {
				if (typeof de != "object" || de === null) return de;
				var ve = de[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(de, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(de)
			}
			const Te = new Set(["cf_argo", "load_balancing_basic_plus"]),
				Me = new Set(["pro", "business"]),
				Ve = ({
					price: de,
					ratePlanId: le,
					ratePlanName: ve,
					frequency: _e,
					isNewSubscription: we
				}) => ({
					event: "purchase",
					new_subscription: we,
					ecommerce: {
						transaction_id: (0, ft.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: de
					},
					items: [{
						item_id: le,
						item_name: ve || le,
						frequency: _e,
						price: de
					}]
				}),
				vt = de => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: we,
						ratePlanName: Ue
					} = de;
					return Me.has(_e) ? Le({}, Ve({
						price: le,
						ratePlanId: we,
						ratePlanName: Ue,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				_t = de => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: we
					} = de;
					return Te.has(_e) ? Le({}, Ve({
						price: le,
						ratePlanId: _e,
						ratePlanName: we,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				$t = de => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: we,
						ratePlanName: Ue,
						label: Ye
					} = de;
					return Me.has(_e) ? Le({}, Ve({
						price: le,
						frequency: ve,
						ratePlanId: we,
						ratePlanName: Ue,
						isNewSubscription: !1
					}), {
						label: Ye || _e
					}) : void 0
				},
				Ct = de => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: we,
						oldRatePlan: Ue
					} = de;
					return Te.has(_e) ? Le({}, Ve({
						price: le,
						frequency: ve,
						ratePlanId: _e,
						ratePlanName: we,
						isNewSubscription: !1
					}), {
						label: `${Ue}->${_e}`
					}) : void 0
				},
				Qe = "pageview",
				wt = "create zone",
				Lt = "create user",
				Ot = "Plan Purchase Success",
				St = "Product Purchase Success",
				kt = "Plan Update Success",
				Mt = "Product Update Success",
				Wt = {
					[Qe]: !0,
					[wt]: !0,
					[Lt]: !0,
					[Ot]: !0,
					[St]: !0,
					[kt]: !0,
					[Mt]: !0
				},
				Tt = de => {
					const le = /\|MCMID\|([0-9]+)\|/,
						ve = de.match(le);
					return ve ? ve[1] : void 0
				},
				It = de => {
					var le;
					const {
						deviceViewport: ve,
						page: _e,
						previousPage: we,
						pageName: Ue,
						utm_campaign: Ye,
						_ga: ot,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Xe
					} = de, {
						origin: tt
					} = window.location, ze = (0, lt.PR)((0, u.bh)().getState());
					return {
						event: we !== void 0 && _e !== we ? "virtual_page_view" : "page_load",
						device_type: ve,
						hostname: tt,
						language: navigator.language,
						locale: (0, s.r)((0, u.bh)().getState()),
						page_location: _e ? `${tt}${_e}` : "[redacted]",
						page_path: _e ? `${_e}` : "[redacted]",
						page_referrer: we ? `${tt}/${we}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Ue || "[redacted]",
						page_url: _e ? `${tt}${_e}` : "[redacted]",
						query: Ye ? `?utm_campaign=${Ye}` : "[redacted]",
						user_properties: {
							ga_client_id: (le = ot) !== null && le !== void 0 ? le : void 0,
							ga_client_id_s: ot ? `s${ot}` : void 0,
							user_id: Je() ? ze == null ? void 0 : ze.id : void 0,
							ecid: Xe ? Tt(Xe) : void 0
						}
					}
				},
				Ft = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				Vt = de => {
					const {
						status: le
					} = de;
					return le === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				zt = (de, le) => {
					switch (de) {
						case Qe:
							return It(le);
						case wt:
							return Ft();
						case Lt:
							return Vt(le);
						case Ot:
							return vt(le);
						case St:
							return _t(le);
						case kt:
							return $t(le);
						case Mt:
							return Ct(le);
						default:
							return
					}
				},
				Rt = de => (le, ve, _e) => {
					if (Wt[ve]) {
						var we;
						const Ue = zt(ve, _e);
						window.dataLayer = window.dataLayer || [], Ue && ((we = window.dataLayer) === null || we === void 0 || we.push(Ue))
					}
					return de(le, ve, _e)
				};
			var Nt = t("../react/utils/cookiePreferences.ts");

			function Kt(de) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ve, we).enumerable
					})), _e.forEach(function(we) {
						xt(de, we, ve[we])
					})
				}
				return de
			}

			function xt(de, le, ve) {
				return le = Bt(le), le in de ? Object.defineProperty(de, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : de[le] = ve, de
			}

			function Bt(de) {
				var le = C(de, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function C(de, le) {
				if (typeof de != "object" || de === null) return de;
				var ve = de[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(de, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(de)
			}
			const k = de => {
					r().init(Kt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Ie() && !(0, i.gm)() && Je(),
						middlewares: [A, jt, O, st, Rt]
					}, de))
				},
				ge = () => {
					r().identify(Kt({}, (0, e.getAttribution)(), {
						locale: (0, s.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				Ie = () => !0,
				$e = () => {
					(0, Nt.kT)("sparrow_id")
				},
				Je = () => (0, Nt.Xm)()
		},
		"../utils/initStyles.ts": function(j, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const i = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				s = c => {
					const l = [];
					for (let v in c.colors) {
						const n = c.colors[v];
						if (Array.isArray(n) && v !== "categorical")
							for (let o = 0; o < n.length; ++o) l.push(`--cf-${v}-${o}:${n[o]};`)
					}
					return l.join(`
`)
				},
				m = () => {
					const c = (0, e.Yc)(),
						l = `
    * {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${e.Rl.colors.gray[5]}
    }

    wf-html, html, body, button {
      font-size: 16px;
    }

    wf-html,
    html {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
    }

    wf-body,
    body {
      line-height: 1.5;
      color: ${e.Rl.colors.gray[1]};
      background-color: ${e.Rl.colors.background};
      font-family: ${e.Rl.fontFamily};
    }

    text {
      fill: ${e.Rl.colors.gray[1]};
    }

    wf-html, wf-body, body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, small {
      line-height: 1.25;
    }

    h1 {
      font-size: 32px;
      font-weight: 400;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4, h5, h6 {
      font-size: 16px;
    }

    h2, h3, h4, h5 h4, h5, h6 {
      font-weight: 600;
    }

     h3 + p, h4 + p, h5 + p, h6 + p {
       margin-top: 0.5em;
     }

    small {
      font-size: 12px;
    }

    button {
      font-family: ${e.Rl.fontFamily};
      border: none;
    }

    label {
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.35938em;
      min-height: 1.22em;
    }

    fieldset {
      border: none;
    }

    pre {
      border-radius: 3px;
      color: ${e.Rl.colors.gray[1]};
      display: block;
      font-size: 14px;
      margin: 2rem 0;
      overflow: auto;
      padding: 0.5rem;
      width: 100%;
    }

    code, pre {
      background-color: ${c?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${c?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${c?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${c?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${c?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${c?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      outline: none;
    }

    a:focus {
      color: ${e.Rl.colors.blue[5]};
    }

    a svg, a:active svg, a:hover svg {
      fill: currentColor
    }

    ol, ul, dl {
      list-style-position: outside;
      margin-left: 3em;
    }

    ul {
      list-style-type: disc;
    }

    dd {
      margin: 0;
    }

    dt {
      font-weight: 600;
      font-size: ${e.Rl.fontSizes[3]}px
    }

    p+p, p+ul, p+ol, p+dl, ul+p, ul+h2, ul+h3, ul+h4, ul+h5, ul+h6 {
      margin-top: 1.5em;
    }

    hr {
      border: 0;
      border-top: 1px solid #d5d7d8;
      display: block;
      height: 0;
      margin: 2rem 0;
      width: 100%;
    }

    img, object {
      height: auto;
      max-width: 100%;
    }

    table {
      border-spacing: 0;
    }

    legend {
      padding-inline-start: 0;
    }

    fieldset {
      margin-inline-start: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      background-color: ${e.Rl.colors.background};
      color:  ${e.Rl.colors.gray[8]}
    }

    :root {
      --cf-white: ${e.Rl.colors.white};
      --cf-black: ${e.Rl.colors.black};
      ${s(e.Rl)}
    }

    .ReactVirtualized__List {
      outline: none
    }
    .grim-scroll-sortable-helper {
      pointer-events: auto !important;
      z-index: 2000 !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
      background-color: white !important;
    }
    .grim-scroll-sortable-helper * {
      cursor: grabbing !important;
    }
  `;
					let v = document.getElementById(i);
					v ? v.innerText = "" : (v = document.createElement("style"), v.id = i, u.appendChild(v)), v.appendChild(document.createTextNode(l)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(m), y.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let i = "";
				return {
					setEventId: m => (!m || typeof m != "string" || (i = m), i),
					getEventId: () => i
				}
			})()
		},
		"../utils/zaraz.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Ro: function() {
					return o
				},
				bM: function() {
					return l
				},
				tg: function() {
					return c
				},
				yn: function() {
					return n
				}
			});

			function e(a) {
				for (var _ = 1; _ < arguments.length; _++) {
					var d = arguments[_] != null ? Object(arguments[_]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(h) {
						return Object.getOwnPropertyDescriptor(d, h).enumerable
					})), p.forEach(function(h) {
						r(a, h, d[h])
					})
				}
				return a
			}

			function r(a, _, d) {
				return _ = i(_), _ in a ? Object.defineProperty(a, _, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[_] = d, a
			}

			function i(a) {
				var _ = u(a, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function u(a, _) {
				if (typeof a != "object" || a === null) return a;
				var d = a[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(a, _ || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(a)
			}
			const s = {
					track: (a, _) => null,
					set: (a, _) => console.log(`zaraz.set(${a}, ${_})`)
				},
				m = {
					track: (a, _) => {
						var d;
						(d = window.zaraz) === null || d === void 0 || d.track(a, e({}, _, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (a, _) => {
						var d;
						return (d = window.zaraz) === null || d === void 0 ? void 0 : d.set(a, _)
					}
				};
			let c;
			const l = () => {
					window.zaraz, c = m
				},
				v = ["email", "first_name", "last_name"],
				n = a => {
					v.forEach(_ => {
						var d;
						(d = c) === null || d === void 0 || d.set(_, a[_])
					})
				},
				o = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(j, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(m),
				l = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				v = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				o = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				p = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				h = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				I = t("../../../common/component/component-filter-bar/src/constants.js"),
				E = t("../../../common/component/component-filter-bar/src/utils.js");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(U) {
					for (var P = 1; P < arguments.length; P++) {
						var N = arguments[P];
						for (var F in N) Object.prototype.hasOwnProperty.call(N, F) && (U[F] = N[F])
					}
					return U
				}, g.apply(this, arguments)
			}

			function T(U) {
				for (var P = 1; P < arguments.length; P++) {
					var N = arguments[P] != null ? Object(arguments[P]) : {},
						F = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(N).filter(function(te) {
						return Object.getOwnPropertyDescriptor(N, te).enumerable
					})), F.forEach(function(te) {
						f(U, te, N[te])
					})
				}
				return U
			}

			function f(U, P, N) {
				return P = b(P), P in U ? Object.defineProperty(U, P, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[P] = N, U
			}

			function b(U) {
				var P = O(U, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function O(U, P) {
				if (typeof U != "object" || U === null) return U;
				var N = U[Symbol.toPrimitive];
				if (N !== void 0) {
					var F = N.call(U, P || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(U)
			}
			const A = 70,
				D = (0, s.SU)(({
					showOverflow: U
				}) => T({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, U ? {} : {
					maxHeight: A,
					overflow: "hidden"
				})),
				M = (0, s.SU)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				w = (0, s.SU)(({
					theme: U
				}) => ({
					backgroundColor: U.colors.background,
					py: 1,
					px: 2,
					borderRadius: U.radii[2],
					border: `1px solid ${U.colors.gray[7]}`,
					fontSize: U.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: U.colors.gray[4]
					}
				}), "div"),
				S = (0, s.SU)(() => ({
					mr: 1
				}), "span"),
				R = (0, s.SU)(({
					theme: U
				}) => ({
					color: U.colors.gray[4],
					mr: 1
				}), "span"),
				L = (0, s.SU)(() => ({
					mr: 2,
					maxWidth: 180,
					whiteSpace: "nowrap",
					display: "inline-block",
					verticalAlign: "bottom",
					overflow: "hidden",
					textOverflow: "ellipsis",
					"@media print": {
						marginRight: 0
					}
				}), "span"),
				K = (0, s.SU)(({
					buttonStyle: U
				}) => T({
					display: "inline-flex",
					alignItems: "center",
					justifyContent: "center",
					height: 35,
					mr: 3,
					mb: 1,
					py: 1,
					px: 2,
					fontSize: 2,
					"@media print": {
						display: "none"
					}
				}, U), v.zx),
				q = (0, s.SU)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				X = (0, s.SU)(({
					theme: U
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: U.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: U.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: U.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: U.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				J = (0, s.SU)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				$ = U => U.current ? [...U.current.children].reduce((P, N) => (N.offsetTop >= A && P++, P), 0) : 0;
			let W = 0;
			class H extends e.Component {
				constructor() {
					super();
					f(this, "overflowWrapper", (0, e.createRef)()), f(this, "hasOverflowed", P => {
						const N = $(this.overflowWrapper);
						P.scrollHeight > A && N >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (P.scrollHeight < A || N === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), f(this, "addNewFilter", () => {
						const {
							filterDefinitions: P
						} = this.props, N = (0, E.TE)(P), F = Object.keys(N)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: F,
								operator: (0, E.uv)(F, N),
								value: (0, E.TT)(F, N)
							}
						})
					}), f(this, "handleOpenFilterEdit", P => {
						this.setState({
							openFilter: P,
							filterChanges: T({}, this.props.filters[P])
						})
					}), f(this, "handleRemoveFilterClick", (P, N) => {
						P.stopPropagation(), this.removeFilter(N)
					}), f(this, "removeFilter", P => {
						const {
							handleFiltersChange: N
						} = this.props, F = [...this.props.filters], te = F[P];
						F.splice(P, 1), N(F), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: te.key,
							operator: te.operator,
							value: te.value
						})
					}), f(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), f(this, "handleFilterSubmit", P => {
						const {
							filterDefinitions: N
						} = this.props;
						P.preventDefault();
						const {
							filterChanges: F
						} = this.state, te = typeof N[F.key].parse == "function" ? Array.isArray(F.value) ? F.value.map(N[F.key].parse) : N[F.key].parse(F.value) : F.value;
						if (N[F.key].validate && (Array.isArray(te) ? !te.every(N[F.key].validate) : !N[F.key].validate(te))) return this.setState({
							invalid: !0
						});
						const oe = [...this.props.filters],
							ie = T({}, F, {
								value: te
							}),
							Y = !oe[this.state.openFilter];
						Y ? oe.push(ie) : oe[this.state.openFilter] = T({}, ie), this.props.handleFiltersChange(oe, ie), (Y ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ie.key,
							operator: ie.operator,
							value: ie.value
						}), this.closeOpenFilterChanges()
					}), f(this, "handlePendingKeyChange", ({
						value: P
					}) => {
						const {
							filterDefinitions: N
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: P,
								operator: (0, E.uv)(P, N),
								value: (0, E.TT)(P, N)
							}
						})
					}), f(this, "handlePendingOperatorChange", ({
						value: P
					}) => {
						let N = T({}, this.state.filterChanges, {
							operator: P
						});
						if ((0, E.dr)(P)) {
							var F, te;
							((F = this.state.filterChanges) === null || F === void 0 ? void 0 : F.value) && !Array.isArray((te = this.state.filterChanges) === null || te === void 0 ? void 0 : te.value) && (N.value = [this.state.filterChanges.value])
						} else {
							var oe, ie, Y;
							((oe = this.state.filterChanges) === null || oe === void 0 ? void 0 : oe.value) && Array.isArray((ie = this.state.filterChanges) === null || ie === void 0 ? void 0 : ie.value) && ((Y = this.state.filterChanges) === null || Y === void 0 ? void 0 : Y.value.length) > 0 && (N.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: N
						})
					}), f(this, "handlePendingValueChange", P => {
						this.setState({
							invalid: !1,
							filterChanges: T({}, this.state.filterChanges, {
								value: P
							})
						})
					}), f(this, "handleShowOverflow", () => {
						this.setState({
							showOverflow: !this.state.showOverflow
						})
					}), this.state = {
						open: !1,
						invalid: !1,
						openFilter: null,
						filterChanges: null,
						hasOverflowed: !1,
						showOverflow: !1,
						id: ++W
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(P) {
					P.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(P) {
					const {
						formatLabel: N,
						filterDefinitions: F
					} = this.props, {
						operator: te
					} = this.state.filterChanges, oe = F[this.state.filterChanges.key], ie = this.state.filterChanges.value, Y = z => Array.isArray(z) ? z.map(x => x.value) : (z == null ? void 0 : z.value) || null;
					if (oe.renderValueComponent) return oe.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (oe.type) {
						case I.k.custom: {
							var pe;
							return r().createElement(oe.CustomComponent, g({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (pe = oe == null ? void 0 : oe.customProps) !== null && pe !== void 0 ? pe : {}))
						}
						case I.k.select:
							return (0, E.dr)(te) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !oe.options,
								value: typeof ie.split == "function" ? ie == null ? void 0 : ie.split(",") : Array.isArray(ie) ? ie : [],
								options: oe.options ? oe.options.map(z => ({
									value: z.value || z,
									label: z.label || N(this.state.filterChanges.key, z, P)
								})) : ie ? (Array.isArray(ie) ? ie : ie.split(",")).map(z => ({
									label: z,
									value: z
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(m.Trans, {
									id: oe.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: oe.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: z => {
									this.handlePendingValueChange(Y(z))
								},
								isValidNewOption: z => {
									const x = oe.validate;
									return !x && z || z && x([z])
								},
								getNewOptionData: (z, x) => ({
									value: z,
									label: x
								})
							}) : r().createElement(a.hQ, {
								hideLabel: !0,
								value: ie,
								options: oe.options.map(z => ({
									value: z,
									label: N(this.state.filterChanges.key, z, P)
								})),
								onChange: ({
									value: z
								}) => this.handlePendingValueChange(z)
							});
						case I.k.string:
						default:
							return (0, E.dr)(te) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ie.split == "function" ? ie == null ? void 0 : ie.split(",") : Array.isArray(ie) ? ie : [],
								options: ie ? (Array.isArray(ie) ? ie : ie.split(",")).map(z => ({
									label: z,
									value: z
								})) : [],
								noOptionsMessage: () => null,
								placeholder: P.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: z => {
									this.handlePendingValueChange(Y(z))
								},
								isValidNewOption: z => {
									const x = oe.validate;
									return !x && z || z && x([z])
								},
								getNewOptionData: (z, x) => ({
									value: z,
									label: x
								}),
								formatCreateLabel: z => P.t("filter_editor.value_create_label", {
									value: z
								})
							}) : r().createElement(m.I18n, null, z => r().createElement(l.I, {
								value: this.state.filterChanges.value,
								onChange: x => this.handlePendingValueChange(x.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: z.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: P,
						filterDefinitions: N,
						modalStyles: F,
						filterIconType: te,
						buttonStyle: oe,
						secondaryActionComponent: ie
					} = this.props, Y = $(this.overflowWrapper), pe = `filterPanel${this.state.id}`, z = this.state.openFilter !== null;
					return r().createElement(m.I18n, null, x => r().createElement(_.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(J, null, r().createElement(_.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(K, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": z,
						"aria-controls": pe,
						inverted: !0,
						buttonStyle: oe
					}, r().createElement(n.J, {
						type: te || "add",
						mr: 1,
						label: x.t("common.add", {
							_: "Add"
						})
					}), r().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!ie && r().createElement(_.ZC, null, ie)), this.props.filters.length > 0 && r().createElement(q, null, r().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(D, {
						innerRef: this.overflowWrapper,
						overflowLimit: A,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ee, ne) => {
						const {
							key: ce,
							operator: ye,
							value: ae
						} = ee, Oe = N[ce].ignoreLabelTranslation ? N[ce].label : x.t(N[ce].label), De = x.t(`analytics.report.filters.operators.${ye}`), Re = Array.isArray(ae) ? ae.map(ke => P(ce, ke, x)).join(", ") : P(ce, ae, x), We = `${Oe} ${De} ${Re}`;
						return r().createElement(M, {
							key: `${ce}-${ye}-${ae}`,
							title: We
						}, r().createElement(w, {
							onClick: () => this.handleOpenFilterEdit(ne)
						}, r().createElement(_.ZC, {
							display: "flex"
						}, r().createElement(S, null, Oe), r().createElement(R, null, De), r().createElement(L, null, Re), (0, E.oN)(ee, N) ? r().createElement(o.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(X, {
							onClick: ke => this.handleRemoveFilterClick(ke, ne),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), z && r().createElement(h.Z, {
						id: pe,
						filterDefinitions: N,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, E.oN)(this.state.filterChanges, N),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: P,
						modalStyles: F
					}), this.state.hasOverflowed && r().createElement(p.Z, {
						count: Y,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			f(H, "propTypes", {
				filterDefinitions: u().shape({}),
				filters: u().arrayOf(u().shape({
					key: u().string,
					operator: u().string,
					value: u().string
				})),
				handleFiltersChange: u().func.isRequired,
				formatLabel: u().func.isRequired,
				onAddFilter: u().func,
				onEditFilter: u().func,
				onRemoveFilter: u().func,
				children: u().node,
				modalStyles: u().object,
				filterIconType: u().string,
				buttonStyle: u().object,
				secondaryActionComponent: u().node
			}), y.Z = H
		},
		"../../../common/component/component-filter-bar/src/index.js": function(j, y, t) {
			"use strict";
			t.d(y, {
				ME: function() {
					return r.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return i.k
				},
				oN: function() {
					return u.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				i = t("../../../common/component/component-filter-bar/src/constants.js"),
				u = t("../../../common/component/component-filter-bar/src/utils.js"),
				s = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return s
				},
				YB: function() {
					return u
				}
			});

			function e(c, l, v) {
				return l = r(l), l in c ? Object.defineProperty(c, l, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = v, c
			}

			function r(c) {
				var l = i(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function i(c, l) {
				if (typeof c != "object" || c === null) return c;
				var v = c[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			class u extends Error {
				constructor(l, v) {
					super(v);
					e(this, "translationKey", void 0), this.translationKey = l, this.name = "TranslatorError"
				}
			}
			class s extends u {
				constructor(l, v) {
					super(l, `Translation key not found: ${l}, locale: ${v}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var m = null
		},
		"../../../common/util/types/src/api/domain.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return O
				},
				Ib: function() {
					return f
				},
				Ks: function() {
					return A
				},
				MS: function() {
					return b
				},
				PN: function() {
					return p
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return _
				},
				TS: function() {
					return d
				},
				W7: function() {
					return E
				},
				dN: function() {
					return D
				},
				eF: function() {
					return T
				},
				ex: function() {
					return M
				},
				qp: function() {
					return n
				},
				wR: function() {
					return v
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const r = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				i = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				u = e.eg.object({
					address: e.eg.string,
					address2: e.eg.string,
					city: e.eg.string,
					country: e.eg.string,
					email: e.eg.string,
					email_verified: e.eg.boolean.optional,
					fax: e.eg.string,
					first_name: e.eg.string,
					id: e.eg.string.optional,
					label: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.string,
					material_changes: e.eg.array(e.eg.string).optional,
					organization: e.eg.string,
					phone: e.eg.string,
					state: e.eg.string,
					zip: e.eg.string,
					extensions: e.eg.object({
						ca_legal_type: e.eg.string.optional
					}).optional
				}),
				s = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				m = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				c = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: m.optional,
					years: e.eg.number
				}),
				l = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let v = function(w) {
				return w.ONBOARDING_INITIATED = "Onboarding Initiated", w.ONBOARDED = "Onboarded", w.PENDING_REGISTRY_LOCK = "Pending Registry Lock", w.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", w.REGISTRY_UNLOCKED = "Registry Unlocked", w.LOCKED = "Locked", w.FAILED_TO_LOCK = "Failed To Lock", w.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", w.UNLOCKED = "Unlocked", w.OFFBOARDED = "Offboarded", w
			}({});
			const n = e.eg.object({
					administrator_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					auth_code: e.eg.string.optional,
					auto_renew: e.eg.boolean.optional,
					available: e.eg.boolean,
					billing_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					can_register: e.eg.boolean.optional,
					cloudflare_dns: e.eg.boolean.optional,
					cloudflare_registration: e.eg.boolean.optional,
					contacts: e.eg.any.optional,
					contacts_updated_at: e.eg.string.optional,
					cor_locked: e.eg.boolean.optional,
					cor_locked_until: e.eg.union([e.eg.string, e.eg.null]).optional,
					cor_responses_pending: e.eg.number.optional,
					created_at: e.eg.string.optional,
					created_registrar: e.eg.string.optional,
					current_registrar: e.eg.string.optional,
					domain_protection_services: e.eg.object({
						status: e.eg.enum(v).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: l.optional,
					landing: e.eg.union([i, e.eg.boolean]).optional,
					last_known_status: e.eg.union([e.eg.string, e.eg.null]).optional,
					locked: e.eg.boolean.optional,
					name: e.eg.string,
					name_servers: e.eg.array(e.eg.string).optional,
					material_changes: e.eg.array(e.eg.string).optional,
					partner_response: e.eg.union([e.eg.string, e.eg.null]).optional,
					payment_expires_at: e.eg.string.optional,
					pending_transfer: e.eg.boolean.optional,
					permissions: e.eg.array(e.eg.string).optional,
					previous_registrar: e.eg.union([e.eg.string, e.eg.null]).optional,
					privacy: e.eg.boolean.optional,
					registered_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					registrant_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					registry_object_id: e.eg.union([e.eg.string, e.eg.null]).optional,
					registry_statuses: e.eg.string.optional,
					supported_tld: e.eg.boolean.optional,
					tags: e.eg.array(e.eg.string).optional,
					technical_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					transfer_conditions: s.optional,
					updated_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					updated_registrar: e.eg.string.optional,
					using_created_registrar_nameservers: e.eg.boolean.optional,
					using_current_registrar_nameservers: e.eg.boolean.optional,
					using_previous_registrar_nameservers: e.eg.boolean.optional,
					using_updated_registrar_nameservers: e.eg.boolean.optional,
					whois: e.eg.unknown.optional
				}),
				o = e.eg.object({
					available: e.eg.boolean
				}),
				a = e.eg.object({
					result: e.eg.array(n),
					result_info: e.eg.object({
						count: e.eg.number,
						page: e.eg.number,
						per_page: e.eg.number,
						total_count: e.eg.number
					}),
					errors: e.eg.array(e.eg.string),
					messages: e.eg.array(e.eg.string),
					success: e.eg.boolean
				}),
				_ = e.eg.object({
					check_result: e.eg.union([e.eg.null, e.eg.object({
						name: e.eg.string,
						supported_tld: e.eg.boolean,
						premium: e.eg.boolean,
						available: e.eg.boolean,
						can_register: e.eg.boolean
					})]).optional,
					domains: e.eg.array(e.eg.object({
						name: e.eg.string,
						availability: e.eg.string,
						price: e.eg.number,
						icann_fee: e.eg.number,
						pricing: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						}),
						pricing_local: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						})
					}))
				}),
				d = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let p = function(w) {
				return w.PENDING = "pending", w.VERIFIED = "verified", w.REJECTED = "rejected", w.PENDING_DELETE = "pending_delete", w.DELETED = "deleted", w
			}({});
			const h = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(p),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				I = e.eg.object({
					designated_approvers: e.eg.array(h)
				});
			let E = function(w) {
				return w.PENDING = "pending", w.PENDING_UPDATE = "pending_update", w.ENABLED = "enabled", w.DISABLED = "disabled", w
			}({});
			const g = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(E)
				}),
				T = e.eg.intersection([g, I]),
				f = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let b = function(w) {
				return w.UNLOCK_APPROVAL = "UnlockApprovalRequest", w.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", w.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", w.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", w
			}({});
			const O = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				A = e.eg.object({
					message: e.eg.string
				}),
				D = e.eg.object({
					result: e.eg.object({
						entry: e.eg.object({
							address2: e.eg.string,
							address: e.eg.string,
							city: e.eg.string,
							country: e.eg.string,
							default: e.eg.boolean,
							email: e.eg.string,
							email_verified: e.eg.boolean,
							fax: e.eg.string,
							first_name: e.eg.string,
							id: e.eg.string,
							last_name: e.eg.string,
							organization: e.eg.string,
							phone: e.eg.string,
							state: e.eg.string,
							zip: e.eg.string
						})
					})
				}),
				M = e.eg.object({
					result: m
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function(j, y, t) {
			"use strict";
			t.d(y, {
				df: function() {
					return r
				},
				eX: function() {
					return i
				},
				fG: function() {
					return s
				},
				jI: function() {
					return u
				},
				qu: function() {
					return e
				},
				zc: function() {
					return m
				}
			});
			let e = function(c) {
					return c.Custom = "custom", c.Root = "root", c.Managed = "managed", c.Zone = "zone", c.RateLimit = "ratelimit", c
				}({}),
				r = function(c) {
					return c.Cache = "http_request_cache_settings", c.HttpCustomErrors = "http_custom_errors", c.HttpConfigSettings = "http_config_settings", c.HttpLogCustomFields = "http_log_custom_fields", c.HttpRateLimit = "http_ratelimit", c.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", c.HttpRequestFirewallCustom = "http_request_firewall_custom", c.HttpRequestFirewallManaged = "http_request_firewall_managed", c.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", c.HttpRequestLateTransform = "http_request_late_transform", c.HttpRequestMain = "http_request_main", c.HttpRequestOrigin = "http_request_origin", c.HttpRequestRedirect = "http_request_redirect", c.HttpRequestSanitize = "http_request_sanitize", c.HttpRequestSBFM = "http_request_sbfm", c.HttpRequestsSnippets = "http_request_snippets", c.HttpRequestTransform = "http_request_transform", c.HttpResponseCompression = "http_response_compression", c.HttpResponseFirewallManaged = "http_response_firewall_managed", c.HttpResponseTransform = "http_response_headers_transform", c.L4DDoS = "ddos_l4", c.L7DDoS = "ddos_l7", c.MagicIDS = "magic_transit_ids_managed", c.MagicManaged = "magic_transit_managed", c.MagicTransit = "magic_transit", c.MagicTransitRateLimit = "magic_transit_ratelimit", c
				}({}),
				i = function(c) {
					return c.Execute = "execute", c.All = "all", c.Block = "block", c.JSChallenge = "js_challenge", c.Challenge = "challenge", c.Allow = "allow", c.Bypass = "bypass", c.Log = "log", c.Rewrite = "rewrite", c.Score = "score", c.Skip = "skip", c.Managed_Challenge = "managed_challenge", c.DDoS_Dynamic = "ddos_dynamic", c.Select_Config = "select_config", c.Set_Config = "set_config", c.Reset = "reset", c.Redirect = "redirect", c.Cache = "set_cache_settings", c.WhiteList = "whitelist", c.Error = "serve_error", c
				}({}),
				u = function(c) {
					return c.ZONE_LOCKDOWN = "zoneLockdown", c.UA_BLOCK = "uaBlock", c.BIC = "bic", c.HOT = "hot", c.SECURITY_LEVEL = "securityLevel", c.RATE_LIMIT = "rateLimit", c.WAF = "waf", c
				}({}),
				s = function(c) {
					return c.DEFAULT = "default", c.MEDIUM = "medium", c.LOW = "low", c.EOFF = "eoff", c.HIGH = "high", c.VERY_HIGH = "very_high", c
				}({}),
				m = function(c) {
					return c.DEFAULT = "", c.XML = "text/xml", c.JSON = "application/json", c.TEXT = "text/plain", c.HTML = "text/html", c
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(j, y, t) {
			"use strict";
			t.d(y, {
				Yd: function() {
					return e
				},
				vE: function() {
					return r
				}
			});

			function e(i) {
				return Object.keys(i)
			}
			const r = (i, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + i);
				return u
			}
		},
		"../react/common/out.css": function(j, y, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[j.id, e, ""]
			]);
			var r, i, u = {
				hmr: !0
			};
			u.transform = r, u.insertInto = void 0;
			var s = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
			e.locals && (j.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(j, y, t) {
			y = j.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), y.push([j.id, `/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-300: oklch(80.8% 0.114 19.571);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-red-600: oklch(57.7% 0.245 27.325);
    --color-red-700: oklch(50.5% 0.213 27.518);
    --color-red-800: oklch(44.4% 0.177 26.899);
    --color-red-900: oklch(39.6% 0.141 25.723);
    --color-orange-200: oklch(90.1% 0.076 70.697);
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-600: oklch(64.6% 0.222 41.116);
    --color-orange-800: oklch(47% 0.157 37.304);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-yellow-50: oklch(98.7% 0.026 102.212);
    --color-yellow-200: oklch(94.5% 0.129 101.54);
    --color-yellow-300: oklch(90.5% 0.182 98.111);
    --color-yellow-500: oklch(79.5% 0.184 86.047);
    --color-yellow-600: oklch(68.1% 0.162 75.834);
    --color-yellow-900: oklch(42.1% 0.095 57.708);
    --color-green-50: oklch(98.2% 0.018 155.826);
    --color-green-100: oklch(96.2% 0.044 156.743);
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-green-300: oklch(87.1% 0.15 154.449);
    --color-green-400: oklch(79.2% 0.209 151.711);
    --color-green-500: oklch(72.3% 0.219 149.579);
    --color-green-600: oklch(62.7% 0.194 149.214);
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-800: oklch(44.8% 0.119 151.328);
    --color-green-900: oklch(39.3% 0.095 152.535);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-cyan-100: oklch(95.6% 0.045 203.388);
    --color-cyan-800: oklch(45% 0.085 224.283);
    --color-sky-500: oklch(68.5% 0.169 237.323);
    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(0.707 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(0.424 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-blue-950: oklch(28.2% 0.091 267.935);
    --color-indigo-50: oklch(96.2% 0.018 272.314);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-indigo-900: oklch(35.9% 0.144 278.697);
    --color-purple-200: oklch(90.2% 0.063 306.703);
    --color-purple-800: oklch(43.8% 0.218 303.724);
    --color-fuchsia-500: oklch(66.7% 0.295 322.15);
    --color-rose-500: oklch(64.5% 0.246 16.439);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-400: oklch(70.7% 0.022 261.325);
    --color-gray-500: oklch(55.1% 0.027 264.364);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-700: oklch(37.3% 0.034 259.733);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-gray-900: oklch(21% 0.034 264.665);
    --color-neutral-50: oklch(0.985 0 0);
    --color-neutral-100: oklch(0.97 0 0);
    --color-neutral-200: oklch(0.922 0 0);
    --color-neutral-300: oklch(0.87 0 0);
    --color-neutral-400: oklch(0.708 0 0);
    --color-neutral-500: oklch(0.556 0 0);
    --color-neutral-600: oklch(0.439 0 0);
    --color-neutral-700: oklch(0.371 0 0);
    --color-neutral-800: oklch(0.269 0 0);
    --color-neutral-900: oklch(0.205 0 0);
    --color-neutral-950: oklch(0.145 0 0);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-3xl: 48rem;
    --container-6xl: 72rem;
    --text-xs: 12px;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 13px;
    --text-sm--line-height: calc(1 / 0.85);
    --text-base: 14px;
    --text-base--line-height: calc(1.25 / 0.875);
    --text-lg: 16px;
    --text-lg--line-height: calc(1.25 / 1);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --tracking-normal: 0em;
    --tracking-wide: 0.025em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --blur-md: 12px;
    --default-transition-duration: 100ms /* snappier than default 150ms */;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --color-surface: var(--kumo-surface);
    --color-surface-secondary: var(--kumo-surface-secondary);
    --color-surface-active: var(--kumo-surface-active);
    --color-primary: var(--kumo-primary);
    --color-secondary: var(--kumo-secondary);
    --color-secondary-hover: var(--kumo-secondary-hover);
    --color-accent: var(--kumo-accent);
    --color-destructive: var(--kumo-destructive);
    --color-muted: var(--kumo-muted);
    --color-input: var(--kumo-input);
    --color-active: var(--kumo-border-active);
    --color-border-hover: var(--kumo-border-hover);
    --color-color: var(--kumo-border);
    --text-color-surface: var(--kumo-surface-foreground);
    --text-color-primary: var(--kumo-primary-foreground);
    --text-color-secondary: var(--kumo-secondary-foreground);
    --text-color-destructive: var(--kumo-destructive-foreground);
    --text-color-muted: var(--kumo-muted-foreground);
    --text-color-error: var(--kumo-text-error);
    --animate-refresh: refresh 0.5s ease-in-out infinite;
    --animate-right: right 15s linear infinite;
    --color-neutral-150: oklch(0.96 0 0) /*new */;
    --color-neutral-250: oklch(0.9 0 0) /* new */;
    --color-neutral-450: oklch(0.62 0 0) /* new */;
    --color-neutral-750: oklch(0.31 0 0) /* new */;
    --color-neutral-850: oklch(0.23 0 0) /* new */;
    --color-border: var(--cf-gray-8);
    --color-bg-primary: var(--kumo-surface);
    --color-bg-secondary: var(--kumo-surface-secondary);
    --color-ob-base-1000: var(--color-neutral-900);
    --text-color-ob-inverted: var(--color-white);
    --color-cl1-white: var(--cf-white);
    --color-cl1-gold-7: var(--cf-gold-7);
    --color-cl1-gold-9: var(--cf-gold-9);
    --color-cl1-gray-2: var(--cf-gray-2);
    --color-cl1-gray-4: var(--cf-gray-4);
    --color-cl1-gray-5: var(--cf-gray-5);
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .collapse {
    visibility: collapse;
  }
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }
  .visible\\! {
    visibility: visible !important;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .-inset-0\\.5 {
    inset: calc(var(--spacing) * -0.5);
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .-top-10 {
    top: calc(var(--spacing) * -10);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-1\\/2 {
    top: calc(1/2 * 100%);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .top-4 {
    top: calc(var(--spacing) * 4);
  }
  .top-8 {
    top: calc(var(--spacing) * 8);
  }
  .top-32 {
    top: calc(var(--spacing) * 32);
  }
  .top-64 {
    top: calc(var(--spacing) * 64);
  }
  .top-\\[160px\\] {
    top: 160px;
  }
  .top-full {
    top: 100%;
  }
  .top-px {
    top: 1px;
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .right-4 {
    right: calc(var(--spacing) * 4);
  }
  .right-24 {
    right: calc(var(--spacing) * 24);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1\\/2 {
    left: calc(1/2 * 100%);
  }
  .left-2 {
    left: calc(var(--spacing) * 2);
  }
  .isolate {
    isolation: isolate;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .container {
    width: 100%;
    @media (width >= 40rem) {
      max-width: 40rem;
    }
    @media (width >= 48rem) {
      max-width: 48rem;
    }
    @media (width >= 64rem) {
      max-width: 64rem;
    }
    @media (width >= 80rem) {
      max-width: 80rem;
    }
    @media (width >= 96rem) {
      max-width: 96rem;
    }
  }
  .\\!m-0 {
    margin: calc(var(--spacing) * 0) !important;
  }
  .-m-px {
    margin: -1px;
  }
  .m-0\\! {
    margin: calc(var(--spacing) * 0) !important;
  }
  .m-1 {
    margin: calc(var(--spacing) * 1);
  }
  .m-4 {
    margin: calc(var(--spacing) * 4);
  }
  .m-auto {
    margin: auto;
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
  }
  .-mx-5 {
    margin-inline: calc(var(--spacing) * -5);
  }
  .mx-1 {
    margin-inline: calc(var(--spacing) * 1);
  }
  .mx-2 {
    margin-inline: calc(var(--spacing) * 2);
  }
  .mx-4 {
    margin-inline: calc(var(--spacing) * 4);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .\\!my-0 {
    margin-block: calc(var(--spacing) * 0) !important;
  }
  .\\!my-4 {
    margin-block: calc(var(--spacing) * 4) !important;
  }
  .my-1 {
    margin-block: calc(var(--spacing) * 1);
  }
  .my-2 {
    margin-block: calc(var(--spacing) * 2);
  }
  .my-4 {
    margin-block: calc(var(--spacing) * 4);
  }
  .my-5 {
    margin-block: calc(var(--spacing) * 5);
  }
  .\\!mt-1 {
    margin-top: calc(var(--spacing) * 1) !important;
  }
  .\\!mt-2 {
    margin-top: calc(var(--spacing) * 2) !important;
  }
  .\\!mt-3 {
    margin-top: calc(var(--spacing) * 3) !important;
  }
  .\\!mt-4 {
    margin-top: calc(var(--spacing) * 4) !important;
  }
  .\\!mt-5 {
    margin-top: calc(var(--spacing) * 5) !important;
  }
  .\\!mt-6 {
    margin-top: calc(var(--spacing) * 6) !important;
  }
  .-mt-2 {
    margin-top: calc(var(--spacing) * -2);
  }
  .mt-0 {
    margin-top: calc(var(--spacing) * 0);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-2\\.5 {
    margin-top: calc(var(--spacing) * 2.5);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-16 {
    margin-top: calc(var(--spacing) * 16);
  }
  .\\!mr-1 {
    margin-right: calc(var(--spacing) * 1) !important;
  }
  .-mr-2 {
    margin-right: calc(var(--spacing) * -2);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
  }
  .mr-3 {
    margin-right: calc(var(--spacing) * 3);
  }
  .mr-4 {
    margin-right: calc(var(--spacing) * 4);
  }
  .mr-8 {
    margin-right: calc(var(--spacing) * 8);
  }
  .mr-16 {
    margin-right: calc(var(--spacing) * 16);
  }
  .mr-auto {
    margin-right: auto;
  }
  .\\!mb-0 {
    margin-bottom: calc(var(--spacing) * 0) !important;
  }
  .\\!mb-2 {
    margin-bottom: calc(var(--spacing) * 2) !important;
  }
  .\\!mb-3 {
    margin-bottom: calc(var(--spacing) * 3) !important;
  }
  .\\!mb-4 {
    margin-bottom: calc(var(--spacing) * 4) !important;
  }
  .-mb-5 {
    margin-bottom: calc(var(--spacing) * -5);
  }
  .mb-0 {
    margin-bottom: calc(var(--spacing) * 0);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .\\!ml-0 {
    margin-left: calc(var(--spacing) * 0) !important;
  }
  .-ml-px {
    margin-left: -1px;
  }
  .ml-0\\.5 {
    margin-left: calc(var(--spacing) * 0.5);
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-4 {
    margin-left: calc(var(--spacing) * 4);
  }
  .ml-6 {
    margin-left: calc(var(--spacing) * 6);
  }
  .ml-7 {
    margin-left: calc(var(--spacing) * 7);
  }
  .ml-11 {
    margin-left: calc(var(--spacing) * 11);
  }
  .ml-auto {
    margin-left: auto;
  }
  .box-border {
    box-sizing: border-box;
  }
  .line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }
  .list-item {
    display: list-item;
  }
  .table {
    display: table;
  }
  .table-cell {
    display: table-cell;
  }
  .table-row {
    display: table-row;
  }
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .size-1 {
    width: calc(var(--spacing) * 1);
    height: calc(var(--spacing) * 1);
  }
  .size-4 {
    width: calc(var(--spacing) * 4);
    height: calc(var(--spacing) * 4);
  }
  .size-4\\.5 {
    width: calc(var(--spacing) * 4.5);
    height: calc(var(--spacing) * 4.5);
  }
  .size-5 {
    width: calc(var(--spacing) * 5);
    height: calc(var(--spacing) * 5);
  }
  .size-6\\.5 {
    width: calc(var(--spacing) * 6.5);
    height: calc(var(--spacing) * 6.5);
  }
  .size-9 {
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
  }
  .size-10 {
    width: calc(var(--spacing) * 10);
    height: calc(var(--spacing) * 10);
  }
  .size-15 {
    width: calc(var(--spacing) * 15);
    height: calc(var(--spacing) * 15);
  }
  .\\!h-full {
    height: 100% !important;
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-2\\.5 {
    height: calc(var(--spacing) * 2.5);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-3\\.5 {
    height: calc(var(--spacing) * 3.5);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-5\\.5 {
    height: calc(var(--spacing) * 5.5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-6\\.5 {
    height: calc(var(--spacing) * 6.5);
  }
  .h-7\\.5 {
    height: calc(var(--spacing) * 7.5);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-8\\/10 {
    height: calc(8/10 * 100%);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-20 {
    height: calc(var(--spacing) * 20);
  }
  .h-32 {
    height: calc(var(--spacing) * 32);
  }
  .h-64 {
    height: calc(var(--spacing) * 64);
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[35px\\] {
    height: 35px;
  }
  .h-\\[60px\\] {
    height: 60px;
  }
  .h-\\[100\\%\\] {
    height: 100%;
  }
  .h-\\[300px\\] {
    height: 300px;
  }
  .h-full {
    height: 100%;
  }
  .h-px {
    height: 1px;
  }
  .h-screen {
    height: 100vh;
  }
  .max-h-8\\/10 {
    max-height: calc(8/10 * 100%);
  }
  .max-h-\\[50vh\\] {
    max-height: 50vh;
  }
  .max-h-\\[400px\\] {
    max-height: 400px;
  }
  .max-h-\\[600px\\] {
    max-height: 600px;
  }
  .max-h-\\[calc\\(100vh-64px\\)\\] {
    max-height: calc(100vh - 64px);
  }
  .max-h-\\[calc\\(var\\(--footer-max-height\\)-150px\\)\\] {
    max-height: calc(var(--footer-max-height) - 150px);
  }
  .min-h-3 {
    min-height: calc(var(--spacing) * 3);
  }
  .min-h-20 {
    min-height: calc(var(--spacing) * 20);
  }
  .min-h-\\[20px\\] {
    min-height: 20px;
  }
  .min-h-\\[350px\\] {
    min-height: 350px;
  }
  .min-h-\\[calc\\(100vh-160px\\)\\] {
    min-height: calc(100vh - 160px);
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .\\!w-3xl {
    width: var(--container-3xl) !important;
  }
  .\\!w-auto {
    width: auto !important;
  }
  .\\!w-full {
    width: 100% !important;
  }
  .w-0 {
    width: calc(var(--spacing) * 0);
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\\/2 {
    width: calc(1/2 * 100%);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
  }
  .w-3xl {
    width: var(--container-3xl);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-6xl {
    width: var(--container-6xl);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-8\\.5 {
    width: calc(var(--spacing) * 8.5);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-10\\.5 {
    width: calc(var(--spacing) * 10.5);
  }
  .w-11 {
    width: calc(var(--spacing) * 11);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-12\\.5 {
    width: calc(var(--spacing) * 12.5);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-24 {
    width: calc(var(--spacing) * 24);
  }
  .w-32 {
    width: calc(var(--spacing) * 32);
  }
  .w-40 {
    width: calc(var(--spacing) * 40);
  }
  .w-45 {
    width: calc(var(--spacing) * 45);
  }
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-70 {
    width: calc(var(--spacing) * 70);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-120 {
    width: calc(var(--spacing) * 120);
  }
  .w-\\[10px\\] {
    width: 10px;
  }
  .w-\\[15\\%\\] {
    width: 15%;
  }
  .w-\\[20\\%\\] {
    width: 20%;
  }
  .w-\\[30\\%\\] {
    width: 30%;
  }
  .w-\\[380px\\] {
    width: 380px;
  }
  .w-\\[400px\\] {
    width: 400px;
  }
  .w-\\[446px\\] {
    width: 446px;
  }
  .w-\\[var\\(--width\\)\\] {
    width: var(--width);
  }
  .w-fit {
    width: fit-content;
  }
  .w-full {
    width: 100%;
  }
  .w-max {
    width: max-content;
  }
  .w-px {
    width: 1px;
  }
  .w-sm {
    width: var(--container-sm);
  }
  .\\!max-w-3xl {
    max-width: var(--container-3xl) !important;
  }
  .max-w-8\\/10 {
    max-width: calc(8/10 * 100%);
  }
  .max-w-28 {
    max-width: calc(var(--spacing) * 28);
  }
  .max-w-32 {
    max-width: calc(var(--spacing) * 32);
  }
  .max-w-50 {
    max-width: calc(var(--spacing) * 50);
  }
  .max-w-80 {
    max-width: calc(var(--spacing) * 80);
  }
  .max-w-140 {
    max-width: calc(var(--spacing) * 140);
  }
  .max-w-\\[30ch\\] {
    max-width: 30ch;
  }
  .max-w-\\[60ch\\] {
    max-width: 60ch;
  }
  .max-w-\\[90vw\\] {
    max-width: 90vw;
  }
  .max-w-\\[200ch\\] {
    max-width: 200ch;
  }
  .max-w-\\[280px\\] {
    max-width: 280px;
  }
  .max-w-\\[400px\\] {
    max-width: 400px;
  }
  .max-w-\\[640px\\] {
    max-width: 640px;
  }
  .max-w-\\[800px\\] {
    max-width: 800px;
  }
  .max-w-\\[1000px\\] {
    max-width: 1000px;
  }
  .max-w-\\[1200px\\] {
    max-width: 1200px;
  }
  .max-w-\\[calc\\(100vw-3rem\\)\\] {
    max-width: calc(100vw - 3rem);
  }
  .max-w-full {
    max-width: 100%;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .max-w-sm {
    max-width: var(--container-sm);
  }
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-3 {
    min-width: calc(var(--spacing) * 3);
  }
  .min-w-30 {
    min-width: calc(var(--spacing) * 30);
  }
  .min-w-32 {
    min-width: calc(var(--spacing) * 32);
  }
  .min-w-40 {
    min-width: calc(var(--spacing) * 40);
  }
  .min-w-50 {
    min-width: calc(var(--spacing) * 50);
  }
  .min-w-52 {
    min-width: calc(var(--spacing) * 52);
  }
  .min-w-60 {
    min-width: calc(var(--spacing) * 60);
  }
  .min-w-80 {
    min-width: calc(var(--spacing) * 80);
  }
  .min-w-96 {
    min-width: calc(var(--spacing) * 96);
  }
  .min-w-\\[8rem\\] {
    min-width: 8rem;
  }
  .min-w-\\[170px\\] {
    min-width: 170px;
  }
  .min-w-\\[200px\\] {
    min-width: 200px;
  }
  .min-w-\\[250px\\] {
    min-width: 250px;
  }
  .min-w-\\[280px\\] {
    min-width: 280px;
  }
  .min-w-\\[var\\(--trigger-width\\)\\] {
    min-width: var(--trigger-width);
  }
  .min-w-lg {
    min-width: var(--container-lg);
  }
  .min-w-xs {
    min-width: var(--container-xs);
  }
  .flex-0 {
    flex: 0;
  }
  .flex-1 {
    flex: 1;
  }
  .flex-auto {
    flex: auto;
  }
  .flex-shrink {
    flex-shrink: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .shrink {
    flex-shrink: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .grow {
    flex-grow: 1;
  }
  .grow-0 {
    flex-grow: 0;
  }
  .grow-1 {
    flex-grow: 1;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .origin-left {
    transform-origin: left;
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-4 {
    --tw-translate-x: calc(var(--spacing) * -4);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-0 {
    --tw-translate-x: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-4 {
    --tw-translate-x: calc(var(--spacing) * 4);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-16 {
    --tw-translate-x: calc(var(--spacing) * 16);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-x-full {
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1/2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-2 {
    --tw-translate-y: calc(var(--spacing) * -2);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-16 {
    --tw-translate-y: calc(var(--spacing) * -16);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0\\.5 {
    --tw-translate-y: calc(var(--spacing) * 0.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-1\\.5 {
    --tw-translate-y: calc(var(--spacing) * 1.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[2px\\] {
    --tw-translate-y: 2px;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-\\[calc\\(-50\\%-1px\\)\\] {
    --tw-translate-y: calc(-50% - 1px);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-x-0 {
    --tw-scale-x: 0%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .scale-x-100 {
    --tw-scale-x: 100%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .rotate-45 {
    rotate: 45deg;
  }
  .rotate-180 {
    rotate: 180deg;
  }
  .transform {
    transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .transform-gpu {
    transform: translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .animate-refresh {
    animation: var(--animate-refresh);
  }
  .animate-right {
    animation: var(--animate-right);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-col-resize {
    cursor: col-resize;
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-not-allowed {
    cursor: not-allowed;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize {
    resize: both;
  }
  .resize-none {
    resize: none;
  }
  .\\!list-none {
    list-style-type: none !important;
  }
  .list-disc {
    list-style-type: disc;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-\\[1fr_1fr_2fr\\] {
    grid-template-columns: 1fr 1fr 2fr;
  }
  .grid-cols-\\[2fr_1\\.5fr_2\\.5fr_1fr_1fr\\] {
    grid-template-columns: 2fr 1.5fr 2.5fr 1fr 1fr;
  }
  .grid-cols-\\[200px_1fr\\] {
    grid-template-columns: 200px 1fr;
  }
  .grid-cols-\\[320px_1fr\\] {
    grid-template-columns: 320px 1fr;
  }
  .grid-cols-\\[max-content_1fr\\] {
    grid-template-columns: max-content 1fr;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-stretch {
    justify-content: stretch;
  }
  .gap-0 {
    gap: calc(var(--spacing) * 0);
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-5 {
    gap: calc(var(--spacing) * 5);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }
  .gap-10 {
    gap: calc(var(--spacing) * 10);
  }
  .gap-12 {
    gap: calc(var(--spacing) * 12);
  }
  .space-y-1 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-3 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-\\[var\\(--gap\\)\\] {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--gap) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--gap) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-x-1 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 1) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-2 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-3 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 3) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .space-x-4 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .divide-x {
    :where(& > :not(:last-child)) {
      --tw-divide-x-reverse: 0;
      border-inline-style: var(--tw-border-style);
      border-inline-start-width: calc(1px * var(--tw-divide-x-reverse));
      border-inline-end-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
    }
  }
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    }
  }
  .divide-border {
    :where(& > :not(:last-child)) {
      border-color: var(--color-border);
    }
  }
  .divide-neutral-200 {
    :where(& > :not(:last-child)) {
      border-color: var(--color-neutral-200);
    }
  }
  .self-center {
    align-self: center;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-clip {
    overflow: clip;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }
  .overflow-visible {
    overflow: visible;
  }
  .overflow-visible\\! {
    overflow: visible !important;
  }
  .overflow-x-auto {
    overflow-x: auto;
  }
  .overflow-x-hidden {
    overflow-x: hidden;
  }
  .overflow-x-scroll {
    overflow-x: scroll;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .overflow-y-scroll {
    overflow-y: scroll;
  }
  .overscroll-contain {
    overscroll-behavior: contain;
  }
  .\\!rounded-lg {
    border-radius: var(--radius-lg) !important;
  }
  .\\!rounded-none {
    border-radius: 0 !important;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-none {
    border-radius: 0;
  }
  .rounded-sm {
    border-radius: var(--radius-sm);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .rounded-xl\\! {
    border-radius: var(--radius-xl) !important;
  }
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .\\!rounded-l-xl {
    border-top-left-radius: var(--radius-xl) !important;
    border-bottom-left-radius: var(--radius-xl) !important;
  }
  .rounded-l-none {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .\\!rounded-r-xl {
    border-top-right-radius: var(--radius-xl) !important;
    border-bottom-right-radius: var(--radius-xl) !important;
  }
  .rounded-r-none {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .rounded-b-lg {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
  }
  .\\!border {
    border-style: var(--tw-border-style) !important;
    border-width: 1px !important;
  }
  .\\!border-0 {
    border-style: var(--tw-border-style) !important;
    border-width: 0px !important;
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .border-1 {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-y {
    border-block-style: var(--tw-border-style);
    border-block-width: 1px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .\\!border-r-0 {
    border-right-style: var(--tw-border-style) !important;
    border-right-width: 0px !important;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .\\!border-l-0 {
    border-left-style: var(--tw-border-style) !important;
    border-left-width: 0px !important;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-l-4 {
    border-left-style: var(--tw-border-style);
    border-left-width: 4px;
  }
  .\\!border-none {
    --tw-border-style: none !important;
    border-style: none !important;
  }
  .border-none {
    --tw-border-style: none;
    border-style: none;
  }
  .\\!border-border {
    border-color: var(--color-border) !important;
  }
  .\\!border-neutral-200 {
    border-color: var(--color-neutral-200) !important;
  }
  .border-blue-100 {
    border-color: var(--color-blue-100);
  }
  .border-blue-200 {
    border-color: var(--color-blue-200);
  }
  .border-blue-300 {
    border-color: var(--color-blue-300);
  }
  .border-blue-400 {
    border-color: var(--color-blue-400);
  }
  .border-blue-500 {
    border-color: var(--color-blue-500);
  }
  .border-blue-600 {
    border-color: var(--color-blue-600);
  }
  .border-border {
    border-color: var(--color-border);
  }
  .border-cl1-gold-7 {
    border-color: var(--color-cl1-gold-7);
  }
  .border-color {
    border-color: var(--color-color);
  }
  .border-destructive {
    border-color: var(--color-destructive);
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-green-300 {
    border-color: var(--color-green-300);
  }
  .border-neutral-100\\! {
    border-color: var(--color-neutral-100) !important;
  }
  .border-neutral-200 {
    border-color: var(--color-neutral-200);
  }
  .border-neutral-200\\/60 {
    border-color: color-mix(in srgb, oklch(0.922 0 0) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-neutral-200) 60%, transparent);
    }
  }
  .border-neutral-300 {
    border-color: var(--color-neutral-300);
  }
  .border-neutral-400 {
    border-color: var(--color-neutral-400);
  }
  .border-neutral-500 {
    border-color: var(--color-neutral-500);
  }
  .border-neutral-600 {
    border-color: var(--color-neutral-600);
  }
  .border-neutral-900 {
    border-color: var(--color-neutral-900);
  }
  .border-orange-200 {
    border-color: var(--color-orange-200);
  }
  .border-red-200 {
    border-color: var(--color-red-200);
  }
  .border-red-300 {
    border-color: var(--color-red-300);
  }
  .border-transparent {
    border-color: transparent;
  }
  .border-yellow-300 {
    border-color: var(--color-yellow-300);
  }
  .border-t-transparent {
    border-top-color: transparent;
  }
  .border-r-neutral-900 {
    border-right-color: var(--color-neutral-900);
  }
  .border-b-neutral-900 {
    border-bottom-color: var(--color-neutral-900);
  }
  .border-b-transparent\\! {
    border-bottom-color: transparent !important;
  }
  .\\!bg-\\[\\#f6821f1a\\] {
    background-color: #f6821f1a !important;
  }
  .\\!bg-blue-600 {
    background-color: var(--color-blue-600) !important;
  }
  .\\!bg-neutral-50 {
    background-color: var(--color-neutral-50) !important;
  }
  .\\!bg-transparent {
    background-color: transparent !important;
  }
  .bg-\\[\\#f6821f\\] {
    background-color: #f6821f;
  }
  .bg-\\[\\#ffe693\\] {
    background-color: #ffe693;
  }
  .bg-\\[var\\(--color-accent\\)\\] {
    background-color: var(--color-accent);
  }
  .bg-accent {
    background-color: var(--color-accent);
  }
  .bg-amber-200 {
    background-color: var(--color-amber-200);
  }
  .bg-bg-primary {
    background-color: var(--color-bg-primary);
  }
  .bg-bg-secondary {
    background-color: var(--color-bg-secondary);
  }
  .bg-black {
    background-color: var(--color-black);
  }
  .bg-black\\/5 {
    background-color: color-mix(in srgb, #000 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 5%, transparent);
    }
  }
  .bg-black\\/30 {
    background-color: color-mix(in srgb, #000 30%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 30%, transparent);
    }
  }
  .bg-blue-50 {
    background-color: var(--color-blue-50);
  }
  .bg-blue-100 {
    background-color: var(--color-blue-100);
  }
  .bg-blue-200 {
    background-color: var(--color-blue-200);
  }
  .bg-blue-300 {
    background-color: var(--color-blue-300);
  }
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }
  .bg-cl1-gold-9 {
    background-color: var(--color-cl1-gold-9);
  }
  .bg-cl1-white {
    background-color: var(--color-cl1-white);
  }
  .bg-cyan-100 {
    background-color: var(--color-cyan-100);
  }
  .bg-destructive {
    background-color: var(--color-destructive);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-300 {
    background-color: var(--color-gray-300);
  }
  .bg-gray-300\\/60 {
    background-color: color-mix(in srgb, oklch(87.2% 0.01 258.338) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-gray-300) 60%, transparent);
    }
  }
  .bg-gray-500 {
    background-color: var(--color-gray-500);
  }
  .bg-green-50 {
    background-color: var(--color-green-50);
  }
  .bg-green-100 {
    background-color: var(--color-green-100);
  }
  .bg-green-200 {
    background-color: var(--color-green-200);
  }
  .bg-green-500 {
    background-color: var(--color-green-500);
  }
  .bg-green-600 {
    background-color: var(--color-green-600);
  }
  .bg-inherit {
    background-color: inherit;
  }
  .bg-input {
    background-color: var(--color-input);
  }
  .bg-muted {
    background-color: var(--color-muted);
  }
  .bg-neutral-50 {
    background-color: var(--color-neutral-50);
  }
  .bg-neutral-50\\! {
    background-color: var(--color-neutral-50) !important;
  }
  .bg-neutral-100 {
    background-color: var(--color-neutral-100);
  }
  .bg-neutral-150 {
    background-color: var(--color-neutral-150);
  }
  .bg-neutral-200 {
    background-color: var(--color-neutral-200);
  }
  .bg-neutral-250 {
    background-color: var(--color-neutral-250);
  }
  .bg-neutral-900 {
    background-color: var(--color-neutral-900);
  }
  .bg-ob-base-1000 {
    background-color: var(--color-ob-base-1000);
  }
  .bg-orange-200 {
    background-color: var(--color-orange-200);
  }
  .bg-primary {
    background-color: var(--color-primary);
  }
  .bg-purple-200 {
    background-color: var(--color-purple-200);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
  }
  .bg-red-50\\! {
    background-color: var(--color-red-50) !important;
  }
  .bg-red-100 {
    background-color: var(--color-red-100);
  }
  .bg-red-200 {
    background-color: var(--color-red-200);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-secondary {
    background-color: var(--color-secondary);
  }
  .bg-surface {
    background-color: var(--color-surface);
  }
  .bg-surface-active {
    background-color: var(--color-surface-active);
  }
  .bg-surface-secondary {
    background-color: var(--color-surface-secondary);
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-yellow-50 {
    background-color: var(--color-yellow-50);
  }
  .bg-yellow-200 {
    background-color: var(--color-yellow-200);
  }
  .bg-yellow-300 {
    background-color: var(--color-yellow-300);
  }
  .bg-yellow-500 {
    background-color: var(--color-yellow-500);
  }
  .bg-gradient-to-b {
    --tw-gradient-position: to bottom in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .bg-gradient-to-br {
    --tw-gradient-position: to bottom right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-blue-50 {
    --tw-gradient-from: var(--color-blue-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-neutral-50 {
    --tw-gradient-from: var(--color-neutral-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-transparent {
    --tw-gradient-from: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-indigo-50 {
    --tw-gradient-to: var(--color-indigo-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-neutral-100 {
    --tw-gradient-to: var(--color-neutral-100);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-white {
    --tw-gradient-to: var(--color-white);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-40\\% {
    --tw-gradient-to-position: 40%;
  }
  .stroke-border {
    stroke: var(--color-border);
  }
  .\\!p-0 {
    padding: calc(var(--spacing) * 0) !important;
  }
  .\\!p-3 {
    padding: calc(var(--spacing) * 3) !important;
  }
  .\\!p-4 {
    padding: calc(var(--spacing) * 4) !important;
  }
  .\\!p-5 {
    padding: calc(var(--spacing) * 5) !important;
  }
  .p-0 {
    padding: calc(var(--spacing) * 0);
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-1\\.5 {
    padding: calc(var(--spacing) * 1.5);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-2\\.5 {
    padding: calc(var(--spacing) * 2.5);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-10 {
    padding: calc(var(--spacing) * 10);
  }
  .p-12 {
    padding: calc(var(--spacing) * 12);
  }
  .\\!px-0 {
    padding-inline: calc(var(--spacing) * 0) !important;
  }
  .\\!px-0\\.5 {
    padding-inline: calc(var(--spacing) * 0.5) !important;
  }
  .\\!px-2 {
    padding-inline: calc(var(--spacing) * 2) !important;
  }
  .\\!px-3 {
    padding-inline: calc(var(--spacing) * 3) !important;
  }
  .\\!px-5 {
    padding-inline: calc(var(--spacing) * 5) !important;
  }
  .px-0 {
    padding-inline: calc(var(--spacing) * 0);
  }
  .px-0\\! {
    padding-inline: calc(var(--spacing) * 0) !important;
  }
  .px-0\\.5 {
    padding-inline: calc(var(--spacing) * 0.5);
  }
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }
  .px-10 {
    padding-inline: calc(var(--spacing) * 10);
  }
  .\\!py-1 {
    padding-block: calc(var(--spacing) * 1) !important;
  }
  .\\!py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5) !important;
  }
  .\\!py-2 {
    padding-block: calc(var(--spacing) * 2) !important;
  }
  .\\!py-3 {
    padding-block: calc(var(--spacing) * 3) !important;
  }
  .py-0 {
    padding-block: calc(var(--spacing) * 0);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-3\\.5 {
    padding-block: calc(var(--spacing) * 3.5);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-4\\! {
    padding-block: calc(var(--spacing) * 4) !important;
  }
  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-12 {
    padding-block: calc(var(--spacing) * 12);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-10 {
    padding-top: calc(var(--spacing) * 10);
  }
  .pt-\\[1px\\] {
    padding-top: 1px;
  }
  .\\!pr-1 {
    padding-right: calc(var(--spacing) * 1) !important;
  }
  .pr-1 {
    padding-right: calc(var(--spacing) * 1);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-2\\.5 {
    padding-right: calc(var(--spacing) * 2.5);
  }
  .pr-4 {
    padding-right: calc(var(--spacing) * 4);
  }
  .pr-8 {
    padding-right: calc(var(--spacing) * 8);
  }
  .pr-12 {
    padding-right: calc(var(--spacing) * 12);
  }
  .pr-\\[1px\\] {
    padding-right: 1px;
  }
  .pr-\\[14px\\] {
    padding-right: 14px;
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pb-10 {
    padding-bottom: calc(var(--spacing) * 10);
  }
  .\\!pl-1 {
    padding-left: calc(var(--spacing) * 1) !important;
  }
  .pl-1 {
    padding-left: calc(var(--spacing) * 1);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
  }
  .pl-2\\.5 {
    padding-left: calc(var(--spacing) * 2.5);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-5 {
    padding-left: calc(var(--spacing) * 5);
  }
  .pl-6 {
    padding-left: calc(var(--spacing) * 6);
  }
  .pl-8 {
    padding-left: calc(var(--spacing) * 8);
  }
  .pl-\\[1px\\] {
    padding-left: 1px;
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .\\!font-mono {
    font-family: var(--font-mono) !important;
  }
  .\\!font-sans {
    font-family: var(--font-sans) !important;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .font-mono\\! {
    font-family: var(--font-mono) !important;
  }
  .font-sans {
    font-family: var(--font-sans);
  }
  .\\!text-base {
    font-size: var(--text-base) !important;
    line-height: var(--tw-leading, var(--text-base--line-height)) !important;
  }
  .\\!text-lg {
    font-size: var(--text-lg) !important;
    line-height: var(--tw-leading, var(--text-lg--line-height)) !important;
  }
  .\\!text-sm {
    font-size: var(--text-sm) !important;
    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;
  }
  .\\!text-xl {
    font-size: var(--text-xl) !important;
    line-height: var(--tw-leading, var(--text-xl--line-height)) !important;
  }
  .\\!text-xs {
    font-size: var(--text-xs) !important;
    line-height: var(--tw-leading, var(--text-xs--line-height)) !important;
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-base\\/tight {
    font-size: var(--text-base);
    line-height: var(--leading-tight);
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-sm\\! {
    font-size: var(--text-sm) !important;
    line-height: var(--tw-leading, var(--text-sm--line-height)) !important;
  }
  .text-sm\\/normal {
    font-size: var(--text-sm);
    line-height: var(--leading-normal);
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[0\\.85rem\\] {
    font-size: 0.85rem;
  }
  .text-\\[10px\\] {
    font-size: 10px;
  }
  .text-\\[12px\\] {
    font-size: 12px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .leading-0 {
    --tw-leading: calc(var(--spacing) * 0);
    line-height: calc(var(--spacing) * 0);
  }
  .leading-\\[20px\\] {
    --tw-leading: 20px;
    line-height: 20px;
  }
  .leading-\\[35px\\] {
    --tw-leading: 35px;
    line-height: 35px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .\\!font-bold {
    --tw-font-weight: var(--font-weight-bold) !important;
    font-weight: var(--font-weight-bold) !important;
  }
  .\\!font-medium {
    --tw-font-weight: var(--font-weight-medium) !important;
    font-weight: var(--font-weight-medium) !important;
  }
  .\\!font-semibold {
    --tw-font-weight: var(--font-weight-semibold) !important;
    font-weight: var(--font-weight-semibold) !important;
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-normal {
    --tw-font-weight: var(--font-weight-normal);
    font-weight: var(--font-weight-normal);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .tracking-normal {
    --tw-tracking: var(--tracking-normal);
    letter-spacing: var(--tracking-normal);
  }
  .tracking-wide {
    --tw-tracking: var(--tracking-wide);
    letter-spacing: var(--tracking-wide);
  }
  .tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
  }
  .text-nowrap {
    text-wrap: nowrap;
  }
  .text-wrap {
    text-wrap: wrap;
  }
  .break-all {
    word-break: break-all;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }
  .text-ellipsis {
    text-overflow: ellipsis;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .\\!text-black {
    color: var(--color-black) !important;
  }
  .\\!text-error {
    color: var(--text-color-error) !important;
  }
  .\\!text-inherit {
    color: inherit !important;
  }
  .text-\\[\\#4a4a4a\\] {
    color: #4a4a4a;
  }
  .text-\\[\\#f6821f\\] {
    color: #f6821f;
  }
  .text-\\[var\\(--light\\)\\] {
    color: var(--light);
  }
  .text-black {
    color: var(--color-black);
  }
  .text-blue-500 {
    color: var(--color-blue-500);
  }
  .text-blue-600 {
    color: var(--color-blue-600);
  }
  .text-blue-700 {
    color: var(--color-blue-700);
  }
  .text-blue-800 {
    color: var(--color-blue-800);
  }
  .text-blue-900 {
    color: var(--color-blue-900);
  }
  .text-border {
    color: var(--color-border);
  }
  .text-cl1-gray-2 {
    color: var(--color-cl1-gray-2);
  }
  .text-cl1-gray-4 {
    color: var(--color-cl1-gray-4);
  }
  .text-cl1-gray-5 {
    color: var(--color-cl1-gray-5);
  }
  .text-cyan-800 {
    color: var(--color-cyan-800);
  }
  .text-destructive {
    color: var(--text-color-destructive);
  }
  .text-emerald-500 {
    color: var(--color-emerald-500);
  }
  .text-error {
    color: var(--text-color-error);
  }
  .text-fuchsia-500 {
    color: var(--color-fuchsia-500);
  }
  .text-gray-400 {
    color: var(--color-gray-400);
  }
  .text-gray-500 {
    color: var(--color-gray-500);
  }
  .text-gray-600 {
    color: var(--color-gray-600);
  }
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-gray-800 {
    color: var(--color-gray-800);
  }
  .text-gray-900 {
    color: var(--color-gray-900);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-green-600 {
    color: var(--color-green-600);
  }
  .text-green-700 {
    color: var(--color-green-700);
  }
  .text-green-800 {
    color: var(--color-green-800);
  }
  .text-indigo-500 {
    color: var(--color-indigo-500);
  }
  .text-inherit {
    color: inherit;
  }
  .text-muted {
    color: var(--text-color-muted);
  }
  .text-neutral-100 {
    color: var(--color-neutral-100);
  }
  .text-neutral-300 {
    color: var(--color-neutral-300);
  }
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-neutral-600 {
    color: var(--color-neutral-600);
  }
  .text-neutral-700 {
    color: var(--color-neutral-700);
  }
  .text-neutral-800 {
    color: var(--color-neutral-800);
  }
  .text-neutral-900 {
    color: var(--color-neutral-900);
  }
  .text-neutral-900\\! {
    color: var(--color-neutral-900) !important;
  }
  .text-neutral-950 {
    color: var(--color-neutral-950);
  }
  .text-ob-inverted {
    color: var(--text-color-ob-inverted);
  }
  .text-orange-600 {
    color: var(--color-orange-600);
  }
  .text-orange-800 {
    color: var(--color-orange-800);
  }
  .text-primary {
    color: var(--text-color-primary);
  }
  .text-purple-800 {
    color: var(--color-purple-800);
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-red-600 {
    color: var(--color-red-600);
  }
  .text-red-700 {
    color: var(--color-red-700);
  }
  .text-red-800 {
    color: var(--color-red-800);
  }
  .text-rose-500 {
    color: var(--color-rose-500);
  }
  .text-secondary {
    color: var(--text-color-secondary);
  }
  .text-sky-500 {
    color: var(--color-sky-500);
  }
  .text-surface {
    color: var(--text-color-surface);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-yellow-500 {
    color: var(--color-yellow-500);
  }
  .text-yellow-600 {
    color: var(--color-yellow-600);
  }
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .tabular-nums {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
  }
  .\\!no-underline {
    text-decoration-line: none !important;
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .underline {
    text-decoration-line: underline;
  }
  .decoration-dotted {
    text-decoration-style: dotted;
  }
  .underline-offset-2 {
    text-underline-offset: 2px;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-25 {
    opacity: 25%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-60 {
    opacity: 60%;
  }
  .opacity-75 {
    opacity: 75%;
  }
  .opacity-80 {
    opacity: 80%;
  }
  .opacity-100 {
    opacity: 100%;
  }
  .\\!shadow-none {
    --tw-shadow: 0 0 #0000 !important;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\\[0_0_0_1px_rgba\\(0\\,0\\,0\\,0\\.5\\)_inset\\] {
    --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(0,0,0,0.5)) inset;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-lg {
    --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-none {
    --tw-shadow: 0 0 #0000;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-xs {
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-neutral-950\\/10 {
    --tw-ring-color: color-mix(in srgb, oklch(0.145 0 0) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);
    }
  }
  .ring-neutral-950\\/15 {
    --tw-ring-color: color-mix(in srgb, oklch(0.145 0 0) 15%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 15%, transparent);
    }
  }
  .ring-offset-0 {
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  }
  .outline-hidden {
    --tw-outline-style: none;
    outline-style: none;
    @media (forced-colors: active) {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .outline-1 {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .-outline-offset-1 {
    outline-offset: calc(1px * -1);
  }
  .outline-color {
    outline-color: var(--color-color);
  }
  .outline-neutral-300 {
    outline-color: var(--color-neutral-300);
  }
  .blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .invert {
    --tw-invert: invert(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .\\!filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,) !important;
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-\\[2px\\] {
    --tw-backdrop-blur: blur(2px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-blur-md {
    --tw-backdrop-blur: blur(var(--blur-md));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .\\!transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events !important;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function)) !important;
    transition-duration: var(--tw-duration, var(--default-transition-duration)) !important;
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, visibility, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-shadow {
    transition-property: box-shadow;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .delay-200 {
    transition-delay: 200ms;
  }
  .duration-100 {
    --tw-duration: 100ms;
    transition-duration: 100ms;
  }
  .duration-150 {
    --tw-duration: 150ms;
    transition-duration: 150ms;
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-in {
    --tw-ease: var(--ease-in);
    transition-timing-function: var(--ease-in);
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .ease-out {
    --tw-ease: var(--ease-out);
    transition-timing-function: var(--ease-out);
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .select-all {
    -webkit-user-select: all;
    user-select: all;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .group-first\\:rounded-l-full {
    &:is(:where(.group):first-child *) {
      border-top-left-radius: calc(infinity * 1px);
      border-bottom-left-radius: calc(infinity * 1px);
    }
  }
  .group-last\\:rounded-r-full {
    &:is(:where(.group):last-child *) {
      border-top-right-radius: calc(infinity * 1px);
      border-bottom-right-radius: calc(infinity * 1px);
    }
  }
  .group-hover\\:block {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        display: block;
      }
    }
  }
  .group-hover\\:text-\\[\\#f6821f\\] {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        color: #f6821f;
      }
    }
  }
  .group-hover\\:opacity-100 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .group-data-\\[focused\\]\\:bg-secondary-hover {
    &:is(:where(.group)[data-focused] *) {
      background-color: var(--color-secondary-hover);
    }
  }
  .group-data-\\[invalid\\]\\:ring-\\[var\\(--text-color-error\\)\\] {
    &:is(:where(.group)[data-invalid] *) {
      --tw-ring-color: var(--text-color-error);
    }
  }
  .group-data-\\[selected\\]\\:opacity-100 {
    &:is(:where(.group)[data-selected] *) {
      opacity: 100%;
    }
  }
  .placeholder\\:\\!text-neutral-400 {
    &::placeholder {
      color: var(--color-neutral-400) !important;
    }
  }
  .placeholder\\:text-muted {
    &::placeholder {
      color: var(--text-color-muted);
    }
  }
  .placeholder\\:text-neutral-400 {
    &::placeholder {
      color: var(--color-neutral-400);
    }
  }
  .before\\:absolute {
    &::before {
      content: var(--tw-content);
      position: absolute;
    }
  }
  .before\\:top-0 {
    &::before {
      content: var(--tw-content);
      top: calc(var(--spacing) * 0);
    }
  }
  .before\\:left-0 {
    &::before {
      content: var(--tw-content);
      left: calc(var(--spacing) * 0);
    }
  }
  .before\\:size-full {
    &::before {
      content: var(--tw-content);
      width: 100%;
      height: 100%;
    }
  }
  .before\\:scale-\\[1\\.5\\] {
    &::before {
      content: var(--tw-content);
      scale: 1.5;
    }
  }
  .before\\:bg-transparent {
    &::before {
      content: var(--tw-content);
      background-color: transparent;
    }
  }
  .first\\:mt-1 {
    &:first-child {
      margin-top: calc(var(--spacing) * 1);
    }
  }
  .first\\:pl-2 {
    &:first-child {
      padding-left: calc(var(--spacing) * 2);
    }
  }
  .last\\:mb-1 {
    &:last-child {
      margin-bottom: calc(var(--spacing) * 1);
    }
  }
  .last\\:pr-2 {
    &:last-child {
      padding-right: calc(var(--spacing) * 2);
    }
  }
  .focus-within\\:border-gray-400 {
    &:focus-within {
      border-color: var(--color-gray-400);
    }
  }
  .focus-within\\:border-primary\\! {
    &:focus-within {
      border-color: var(--color-primary) !important;
    }
  }
  .focus-within\\:shadow-sm {
    &:focus-within {
      --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-within\\:ring-2 {
    &:focus-within {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-within\\:ring-primary {
    &:focus-within {
      --tw-ring-color: var(--color-primary);
    }
  }
  .focus-within\\:ring-offset-2 {
    &:focus-within {
      --tw-ring-offset-width: 2px;
      --tw-ring-offset-shadow: var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    }
  }
  .focus-within\\:ring-offset-input {
    &:focus-within {
      --tw-ring-offset-color: var(--color-input);
    }
  }
  .focus-within\\:outline-2 {
    &:focus-within {
      outline-style: var(--tw-outline-style);
      outline-width: 2px;
    }
  }
  .focus-within\\:-outline-offset-2 {
    &:focus-within {
      outline-offset: calc(2px * -1);
    }
  }
  .focus-within\\:outline-blue-700 {
    &:focus-within {
      outline-color: var(--color-blue-700);
    }
  }
  .focus-within\\:outline-indigo-600 {
    &:focus-within {
      outline-color: var(--color-indigo-600);
    }
  }
  .hover\\:-translate-y-0\\.5 {
    &:hover {
      @media (hover: hover) {
        --tw-translate-y: calc(var(--spacing) * -0.5);
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .hover\\:cursor-pointer {
    &:hover {
      @media (hover: hover) {
        cursor: pointer;
      }
    }
  }
  .hover\\:border-active {
    &:hover {
      @media (hover: hover) {
        border-color: var(--color-active);
      }
    }
  }
  .hover\\:border-neutral-300\\/80 {
    &:hover {
      @media (hover: hover) {
        border-color: color-mix(in srgb, oklch(0.87 0 0) 80%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          border-color: color-mix(in oklab, var(--color-neutral-300) 80%, transparent);
        }
      }
    }
  }
  .hover\\:\\!bg-blue-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-700) !important;
      }
    }
  }
  .hover\\:bg-accent {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-accent);
      }
    }
  }
  .hover\\:bg-blue-300 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-300);
      }
    }
  }
  .hover\\:bg-blue-500 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-500);
      }
    }
  }
  .hover\\:bg-destructive\\/70 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-destructive);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-destructive) 70%, transparent);
        }
      }
    }
  }
  .hover\\:bg-gray-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-50);
      }
    }
  }
  .hover\\:bg-gray-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-100);
      }
    }
  }
  .hover\\:bg-neutral-50 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-50);
      }
    }
  }
  .hover\\:bg-neutral-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-100);
      }
    }
  }
  .hover\\:bg-neutral-200 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-200);
      }
    }
  }
  .hover\\:bg-neutral-300 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-300);
      }
    }
  }
  .hover\\:bg-neutral-700 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-700);
      }
    }
  }
  .hover\\:bg-neutral-800 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-800);
      }
    }
  }
  .hover\\:bg-primary\\/70 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-primary);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-primary) 70%, transparent);
        }
      }
    }
  }
  .hover\\:bg-secondary-hover {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-secondary-hover);
      }
    }
  }
  .hover\\:bg-transparent {
    &:hover {
      @media (hover: hover) {
        background-color: transparent;
      }
    }
  }
  .hover\\:bg-white {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-white);
      }
    }
  }
  .hover\\:text-black {
    &:hover {
      @media (hover: hover) {
        color: var(--color-black);
      }
    }
  }
  .hover\\:text-blue-800 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-blue-800);
      }
    }
  }
  .hover\\:text-red-500 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-red-500);
      }
    }
  }
  .hover\\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
  .hover\\:opacity-50 {
    &:hover {
      @media (hover: hover) {
        opacity: 50%;
      }
    }
  }
  .hover\\:opacity-90 {
    &:hover {
      @media (hover: hover) {
        opacity: 90%;
      }
    }
  }
  .hover\\:opacity-100 {
    &:hover {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .hover\\:shadow-md {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .hover\\:shadow-xs {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .not-disabled\\:hover\\:border-border-hover\\! {
    &:not(*:disabled) {
      &:hover {
        @media (hover: hover) {
          border-color: var(--color-border-hover) !important;
        }
      }
    }
  }
  .not-disabled\\:hover\\:bg-secondary-hover {
    &:not(*:disabled) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-secondary-hover);
        }
      }
    }
  }
  .focus\\:z-10 {
    &:focus {
      z-index: 10;
    }
  }
  .focus\\:border-active {
    &:focus {
      border-color: var(--color-active);
    }
  }
  .focus\\:border-color {
    &:focus {
      border-color: var(--color-color);
    }
  }
  .focus\\:border-destructive {
    &:focus {
      border-color: var(--color-destructive);
    }
  }
  .focus\\:bg-accent {
    &:focus {
      background-color: var(--color-accent);
    }
  }
  .focus\\:text-secondary {
    &:focus {
      color: var(--text-color-secondary);
    }
  }
  .focus\\:opacity-100 {
    &:focus {
      opacity: 100%;
    }
  }
  .focus\\:ring-2 {
    &:focus {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus\\:ring-blue-400 {
    &:focus {
      --tw-ring-color: var(--color-blue-400);
    }
  }
  .focus\\:ring-neutral-400 {
    &:focus {
      --tw-ring-color: var(--color-neutral-400);
    }
  }
  .focus\\:outline-none {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .focus-visible\\:z-10 {
    &:focus-visible {
      z-index: 10;
    }
  }
  .focus-visible\\:bg-blue-50 {
    &:focus-visible {
      background-color: var(--color-blue-50);
    }
  }
  .focus-visible\\:ring-1 {
    &:focus-visible {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .focus-visible\\:inset-ring-\\[0\\.5\\] {
    &:focus-visible {
      --tw-inset-ring-color: 0.5;
    }
  }
  .focus-visible\\:outline-hidden {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
      @media (forced-colors: active) {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }
    }
  }
  .focus-visible\\:outline-none {
    &:focus-visible {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .disabled\\:cursor-not-allowed {
    &:disabled {
      cursor: not-allowed;
    }
  }
  .disabled\\:border-neutral-400 {
    &:disabled {
      border-color: var(--color-neutral-400);
    }
  }
  .disabled\\:bg-neutral-100 {
    &:disabled {
      background-color: var(--color-neutral-100);
    }
  }
  .disabled\\:bg-neutral-300 {
    &:disabled {
      background-color: var(--color-neutral-300);
    }
  }
  .disabled\\:\\!text-neutral-400 {
    &:disabled {
      color: var(--color-neutral-400) !important;
    }
  }
  .disabled\\:text-muted {
    &:disabled {
      color: var(--text-color-muted);
    }
  }
  .disabled\\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
  .disabled\\:hover\\:bg-neutral-100 {
    &:disabled {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-100);
        }
      }
    }
  }
  .\\*\\:in-focus\\:opacity-100 {
    :is(& > *) {
      :where(*:focus) & {
        opacity: 100%;
      }
    }
  }
  .data-disabled\\:pointer-events-none {
    &[data-disabled] {
      pointer-events: none;
    }
  }
  .data-disabled\\:opacity-50 {
    &[data-disabled] {
      opacity: 50%;
    }
  }
  .data-\\[ending-style\\]\\:scale-90 {
    &[data-ending-style] {
      --tw-scale-x: 90%;
      --tw-scale-y: 90%;
      --tw-scale-z: 90%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  .data-\\[ending-style\\]\\:opacity-0 {
    &[data-ending-style] {
      opacity: 0%;
    }
  }
  .data-\\[focused\\]\\:bg-secondary-hover {
    &[data-focused] {
      background-color: var(--color-secondary-hover);
    }
  }
  .data-\\[starting-style\\]\\:scale-90 {
    &[data-starting-style] {
      --tw-scale-x: 90%;
      --tw-scale-y: 90%;
      --tw-scale-z: 90%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
  }
  .data-\\[starting-style\\]\\:opacity-0 {
    &[data-starting-style] {
      opacity: 0%;
    }
  }
  .data-\\[state\\=open\\]\\:bg-accent {
    &[data-state="open"] {
      background-color: var(--color-accent);
    }
  }
  .sm\\:mr-auto {
    @media (width >= 40rem) {
      margin-right: auto;
    }
  }
  .sm\\:mb-0 {
    @media (width >= 40rem) {
      margin-bottom: calc(var(--spacing) * 0);
    }
  }
  .sm\\:mb-8 {
    @media (width >= 40rem) {
      margin-bottom: calc(var(--spacing) * 8);
    }
  }
  .sm\\:block {
    @media (width >= 40rem) {
      display: block;
    }
  }
  .sm\\:flex {
    @media (width >= 40rem) {
      display: flex;
    }
  }
  .sm\\:hidden {
    @media (width >= 40rem) {
      display: none;
    }
  }
  .sm\\:inline {
    @media (width >= 40rem) {
      display: inline;
    }
  }
  .sm\\:w-auto {
    @media (width >= 40rem) {
      width: auto;
    }
  }
  .sm\\:max-w-\\[280px\\] {
    @media (width >= 40rem) {
      max-width: 280px;
    }
  }
  .sm\\:max-w-sm {
    @media (width >= 40rem) {
      max-width: var(--container-sm);
    }
  }
  .sm\\:flex-1 {
    @media (width >= 40rem) {
      flex: 1;
    }
  }
  .sm\\:grid-cols-4 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .sm\\:flex-row {
    @media (width >= 40rem) {
      flex-direction: row;
    }
  }
  .sm\\:items-end {
    @media (width >= 40rem) {
      align-items: flex-end;
    }
  }
  .sm\\:justify-between {
    @media (width >= 40rem) {
      justify-content: space-between;
    }
  }
  .sm\\:justify-start {
    @media (width >= 40rem) {
      justify-content: flex-start;
    }
  }
  .sm\\:gap-0 {
    @media (width >= 40rem) {
      gap: calc(var(--spacing) * 0);
    }
  }
  .sm\\:gap-3 {
    @media (width >= 40rem) {
      gap: calc(var(--spacing) * 3);
    }
  }
  .sm\\:py-1\\.5 {
    @media (width >= 40rem) {
      padding-block: calc(var(--spacing) * 1.5);
    }
  }
  .sm\\:text-base {
    @media (width >= 40rem) {
      font-size: var(--text-base);
      line-height: var(--tw-leading, var(--text-base--line-height));
    }
  }
  .sm\\:text-sm\\/6 {
    @media (width >= 40rem) {
      font-size: var(--text-sm);
      line-height: calc(var(--spacing) * 6);
    }
  }
  .md\\:mr-auto {
    @media (width >= 48rem) {
      margin-right: auto;
    }
  }
  .md\\:mb-0 {
    @media (width >= 48rem) {
      margin-bottom: calc(var(--spacing) * 0);
    }
  }
  .md\\:\\!flex {
    @media (width >= 48rem) {
      display: flex !important;
    }
  }
  .md\\:block {
    @media (width >= 48rem) {
      display: block;
    }
  }
  .md\\:flex {
    @media (width >= 48rem) {
      display: flex;
    }
  }
  .md\\:grid {
    @media (width >= 48rem) {
      display: grid;
    }
  }
  .md\\:max-w-\\[70vw\\] {
    @media (width >= 48rem) {
      max-width: 70vw;
    }
  }
  .md\\:flex-1 {
    @media (width >= 48rem) {
      flex: 1;
    }
  }
  .md\\:grid-cols-2 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .md\\:grid-cols-4 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .md\\:items-center {
    @media (width >= 48rem) {
      align-items: center;
    }
  }
  .md\\:items-end {
    @media (width >= 48rem) {
      align-items: flex-end;
    }
  }
  .md\\:justify-between {
    @media (width >= 48rem) {
      justify-content: space-between;
    }
  }
  .md\\:gap-3 {
    @media (width >= 48rem) {
      gap: calc(var(--spacing) * 3);
    }
  }
  .md\\:gap-x-4 {
    @media (width >= 48rem) {
      column-gap: calc(var(--spacing) * 4);
    }
  }
  .md\\:px-12 {
    @media (width >= 48rem) {
      padding-inline: calc(var(--spacing) * 12);
    }
  }
  .md\\:text-2xl {
    @media (width >= 48rem) {
      font-size: var(--text-2xl);
      line-height: var(--tw-leading, var(--text-2xl--line-height));
    }
  }
  .lg\\:block {
    @media (width >= 64rem) {
      display: block;
    }
  }
  .lg\\:max-w-\\[50vw\\] {
    @media (width >= 64rem) {
      max-width: 50vw;
    }
  }
  .lg\\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .lg\\:rounded-xl {
    @media (width >= 64rem) {
      border-radius: var(--radius-xl);
    }
  }
  .lg\\:border {
    @media (width >= 64rem) {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
  .lg\\:border-neutral-950\\/10 {
    @media (width >= 64rem) {
      border-color: color-mix(in srgb, oklch(0.145 0 0) 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);
      }
    }
  }
  .lg\\:ring {
    @media (width >= 64rem) {
      --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .lg\\:ring-neutral-950\\/10 {
    @media (width >= 64rem) {
      --tw-ring-color: color-mix(in srgb, oklch(0.145 0 0) 10%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-ring-color: color-mix(in oklab, var(--color-neutral-950) 10%, transparent);
      }
    }
  }
  .xl\\:block {
    @media (width >= 80rem) {
      display: block;
    }
  }
  .xl\\:flex {
    @media (width >= 80rem) {
      display: flex;
    }
  }
  .xl\\:w-\\[380px\\] {
    @media (width >= 80rem) {
      width: 380px;
    }
  }
  .xl\\:grid-cols-2 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .xl\\:grid-cols-3 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .xl\\:flex-row {
    @media (width >= 80rem) {
      flex-direction: row;
    }
  }
  .dark\\:divide-border {
    &:where(.dark-mode, .dark-mode *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-border);
      }
    }
  }
  .dark\\:divide-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-neutral-600);
      }
    }
  }
  .dark\\:border-1 {
    &:where(.dark-mode, .dark-mode *) {
      border-style: var(--tw-border-style);
      border-width: 1px;
    }
  }
  .dark\\:\\!border-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-blue-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-blue-500);
    }
  }
  .dark\\:border-blue-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-blue-800);
    }
  }
  .dark\\:border-gray-600 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-gray-600);
    }
  }
  .dark\\:border-gray-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-gray-700);
    }
  }
  .dark\\:border-green-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-green-500);
    }
  }
  .dark\\:border-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-neutral-400 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-400);
    }
  }
  .dark\\:border-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-500);
    }
  }
  .dark\\:border-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-600);
    }
  }
  .dark\\:border-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-700);
    }
  }
  .dark\\:border-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-800);
    }
  }
  .dark\\:border-neutral-800\\! {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-neutral-800\\/60 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: color-mix(in srgb, oklch(0.269 0 0) 60%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);
      }
    }
  }
  .dark\\:border-red-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-red-500);
    }
  }
  .dark\\:border-red-700 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-red-700);
    }
  }
  .dark\\:border-red-800 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-red-800);
    }
  }
  .dark\\:border-yellow-500 {
    &:where(.dark-mode, .dark-mode *) {
      border-color: var(--color-yellow-500);
    }
  }
  .dark\\:border-r-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      border-right-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-b-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      border-bottom-color: var(--color-neutral-100);
    }
  }
  .dark\\:\\!bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:\\!bg-neutral-950 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-950) !important;
    }
  }
  .dark\\:bg-\\[\\#916b20\\] {
    &:where(.dark-mode, .dark-mode *) {
      background-color: #916b20;
    }
  }
  .dark\\:bg-black {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-black);
    }
  }
  .dark\\:bg-blue-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-700);
    }
  }
  .dark\\:bg-blue-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-800);
    }
  }
  .dark\\:bg-blue-800\\/30 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.424 0.199 265.638) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-blue-800) 30%, transparent);
      }
    }
  }
  .dark\\:bg-blue-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-blue-900);
    }
  }
  .dark\\:bg-blue-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-blue-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-gray-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-gray-800);
    }
  }
  .dark\\:bg-green-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-green-700);
    }
  }
  .dark\\:bg-green-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-green-800);
    }
  }
  .dark\\:bg-green-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-green-900);
    }
  }
  .dark\\:bg-green-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(39.3% 0.095 152.535) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-green-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-100);
    }
  }
  .dark\\:bg-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-500);
    }
  }
  .dark\\:bg-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-600);
    }
  }
  .dark\\:bg-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-700);
    }
  }
  .dark\\:bg-neutral-700\\/50 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.371 0 0) 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-neutral-700) 50%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-750 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-750);
    }
  }
  .dark\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-800);
    }
  }
  .dark\\:bg-neutral-800\\/50 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.269 0 0) 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-neutral-800) 50%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-900);
    }
  }
  .dark\\:bg-neutral-900\\! {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:bg-neutral-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(0.205 0 0) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-neutral-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-neutral-950 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-neutral-950);
    }
  }
  .dark\\:bg-red-800 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-red-800);
    }
  }
  .dark\\:bg-red-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-red-900);
    }
  }
  .dark\\:bg-red-900\\/10\\! {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 10%, transparent) !important;
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-red-900) 10%, transparent) !important;
      }
    }
  }
  .dark\\:bg-red-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-red-900) 20%, transparent);
      }
    }
  }
  .dark\\:bg-surface {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-surface);
    }
  }
  .dark\\:bg-surface-secondary {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-surface-secondary);
    }
  }
  .dark\\:bg-white\\/30 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: color-mix(in srgb, #fff 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);
      }
    }
  }
  .dark\\:bg-yellow-600 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-yellow-600);
    }
  }
  .dark\\:bg-yellow-900 {
    &:where(.dark-mode, .dark-mode *) {
      background-color: var(--color-yellow-900);
    }
  }
  .dark\\:from-blue-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-from: color-mix(in srgb, oklch(37.9% 0.146 265.522) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-gradient-from: color-mix(in oklab, var(--color-blue-900) 20%, transparent);
      }
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:from-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-from: var(--color-neutral-800);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-indigo-900\\/20 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: color-mix(in srgb, oklch(35.9% 0.144 278.697) 20%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        --tw-gradient-to: color-mix(in oklab, var(--color-indigo-900) 20%, transparent);
      }
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: var(--color-neutral-700);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: var(--color-neutral-900);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-950 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-gradient-to: var(--color-neutral-950);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:\\!text-white {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-white) !important;
    }
  }
  .dark\\:text-\\[var\\(--dark\\)\\] {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--dark);
    }
  }
  .dark\\:text-blue-100 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-blue-100);
    }
  }
  .dark\\:text-blue-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-blue-200);
    }
  }
  .dark\\:text-blue-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-blue-300);
    }
  }
  .dark\\:text-gray-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-gray-300);
    }
  }
  .dark\\:text-gray-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-gray-400);
    }
  }
  .dark\\:text-green-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-green-200);
    }
  }
  .dark\\:text-green-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-green-300);
    }
  }
  .dark\\:text-green-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-green-400);
    }
  }
  .dark\\:text-neutral-50 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-50);
    }
  }
  .dark\\:text-neutral-50\\! {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-50) !important;
    }
  }
  .dark\\:text-neutral-100 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-100);
    }
  }
  .dark\\:text-neutral-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-200);
    }
  }
  .dark\\:text-neutral-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-300);
    }
  }
  .dark\\:text-neutral-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-400);
    }
  }
  .dark\\:text-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-500);
    }
  }
  .dark\\:text-neutral-600 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-600);
    }
  }
  .dark\\:text-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-neutral-900);
    }
  }
  .dark\\:text-orange-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-orange-400);
    }
  }
  .dark\\:text-red-200 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-red-200);
    }
  }
  .dark\\:text-red-300 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-red-300);
    }
  }
  .dark\\:text-red-400 {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-red-400);
    }
  }
  .dark\\:text-white {
    &:where(.dark-mode, .dark-mode *) {
      color: var(--color-white);
    }
  }
  .dark\\:shadow-\\[0_0_0_1px_rgba\\(255\\,255\\,255\\,0\\.5\\)_inset\\] {
    &:where(.dark-mode, .dark-mode *) {
      --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(255,255,255,0.5)) inset;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .dark\\:ring-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      --tw-ring-color: var(--color-neutral-800);
    }
  }
  .dark\\:outline-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      outline-color: var(--color-neutral-700);
    }
  }
  .focus-within\\:dark\\:border-neutral-600 {
    &:focus-within {
      &:where(.dark-mode, .dark-mode *) {
        border-color: var(--color-neutral-600);
      }
    }
  }
  .dark\\:hover\\:border-neutral-700\\/80 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          border-color: color-mix(in srgb, oklch(0.371 0 0) 80%, transparent);
          @supports (color: color-mix(in lab, red, red)) {
            border-color: color-mix(in oklab, var(--color-neutral-700) 80%, transparent);
          }
        }
      }
    }
  }
  .dark\\:hover\\:bg-blue-600 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-blue-600);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-450 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-450);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-700 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-700);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-900 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-800 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark-mode, .dark-mode *) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-900 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark-mode, .dark-mode *) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-950 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark-mode, .dark-mode *) {
          background-color: var(--color-neutral-950);
        }
      }
    }
  }
  .dark\\:hover\\:text-red-300 {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-red-300);
        }
      }
    }
  }
  .dark\\:hover\\:text-white {
    &:where(.dark-mode, .dark-mode *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-white);
        }
      }
    }
  }
  .dark\\:focus\\:ring-blue-500 {
    &:where(.dark-mode, .dark-mode *) {
      &:focus {
        --tw-ring-color: var(--color-blue-500);
      }
    }
  }
  .dark\\:focus\\:ring-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      &:focus {
        --tw-ring-color: var(--color-neutral-500);
      }
    }
  }
  .focus-visible\\:dark\\:bg-blue-950 {
    &:focus-visible {
      &:where(.dark-mode, .dark-mode *) {
        background-color: var(--color-blue-950);
      }
    }
  }
  .dark\\:disabled\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:disabled {
        background-color: var(--color-neutral-800);
      }
    }
  }
  .dark\\:disabled\\:\\!text-neutral-500 {
    &:where(.dark-mode, .dark-mode *) {
      &:disabled {
        color: var(--color-neutral-500) !important;
      }
    }
  }
  .dark\\:disabled\\:hover\\:bg-neutral-800 {
    &:where(.dark-mode, .dark-mode *) {
      &:disabled {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-neutral-800);
          }
        }
      }
    }
  }
  .lg\\:dark\\:border-neutral-800 {
    @media (width >= 64rem) {
      &:where(.dark-mode, .dark-mode *) {
        border-color: var(--color-neutral-800);
      }
    }
  }
  .lg\\:dark\\:ring-neutral-800 {
    @media (width >= 64rem) {
      &:where(.dark-mode, .dark-mode *) {
        --tw-ring-color: var(--color-neutral-800);
      }
    }
  }
  .\\[\\&\\:has\\(\\:focus-within\\)\\]\\:border-active {
    &:has(:focus-within) {
      border-color: var(--color-active);
    }
  }
  .\\[\\&\\>pre\\]\\:\\!p-2\\.5 {
    &>pre {
      padding: calc(var(--spacing) * 2.5) !important;
    }
  }
  .\\[\\&\\>span\\]\\:inline-block {
    &>span {
      display: inline-block;
    }
  }
  .\\[\\&\\>span\\]\\:w-full {
    &>span {
      width: 100%;
    }
  }
  .\\[\\&\\>svg\\]\\:hidden {
    &>svg {
      display: none;
    }
  }
}
@layer base {
  :root {
    --kumo-surface: #fff;
    --kumo-surface-foreground: #000;
    --kumo-surface-secondary: var(--color-neutral-50);
    --kumo-surface-active: var(--color-neutral-100);
    --kumo-primary: #056dff;
    --kumo-primary-foreground: var(--color-white);
    --kumo-secondary: var(--color-white);
    --kumo-secondary-foreground: var(--color-neutral-900);
    --kumo-secondary-hover: var(--color-neutral-50);
    --kumo-accent: var(--color-neutral-150);
    --kumo-destructive: var(--color-red-600);
    --kumo-destructive-foreground: var(--color-neutral-50);
    --kumo-muted: var(--color-neutral-100);
    --kumo-muted-foreground: var(--color-neutral-500);
    --kumo-input: var(--color-neutral-50);
    --kumo-border: var(--color-neutral-200);
    --kumo-border-hover: var(--color-neutral-300);
    --kumo-border-active: var(--color-neutral-400);
    --kumo-text-error: var(--color-red-600);
  }
  .dark-mode {
    --kumo-surface: var(--color-black);
    --kumo-surface-foreground: var(--color-neutral-50);
    --kumo-surface-secondary: var(--kumo-surface);
    --kumo-surface-active: var(--color-neutral-800);
    --kumo-primary: #056dff;
    --kumo-primary-foreground: var(--color-white);
    --kumo-secondary: var(--color-neutral-900);
    --kumo-secondary-foreground: var(--color-neutral-50);
    --kumo-secondary-hover: var(--color-neutral-800);
    --kumo-accent: var(--color-neutral-850);
    --kumo-destructive: var(--color-red-600);
    --kumo-destructive-foreground: var(--color-neutral-50);
    --kumo-muted: var(--color-neutral-500);
    --kumo-muted-foreground: var(--color-neutral-50);
    --kumo-input: var(--color-neutral-900);
    --kumo-border: var(--color-neutral-800);
    --kumo-border-hover: var(--color-neutral-750);
    --kumo-border-active: var(--color-neutral-600);
    --kumo-text-error: var(--color-red-600);
  }
}
@layer utilities {
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .no-input-spinner {
    appearance: textfield;
    ::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
      appearance: none;
    }
  }
}
.z-modal {
  z-index: 9999;
}
@keyframes right {
  to {
    transform: translateX(100%);
  }
}
.float {
  animation: float 5s linear infinite alternate;
}
@keyframes float {
  to {
    transform: translate(5px, 15px);
  }
}
@keyframes refresh {
  to {
    transform: rotate(360deg) scale(0.9);
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
.animate-bounce-in {
  animation: bounce-in 0.4s ease-out;
}
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes text-shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
.skeleton-line {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  height: 0.5rem;
  width: var(--skeleton-width);
}
.skeleton-line::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: shimmer var(--shimmer-duration, 1.5s) var(--shimmer-delay, 0s) infinite ease-in-out;
  content: '';
}
.skeleton-line {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  height: 0.5rem;
  width: var(--skeleton-width);
  background-color: #f3f4f6;
}
.skeleton-line::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  animation: shimmer var(--shimmer-duration, 1.5s) var(--shimmer-delay, 0s) infinite ease-in-out;
  content: '';
  background: linear-gradient( 90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 50%, rgba(0, 0, 0, 0) 100% );
}
.dark-mode .skeleton-line {
  background-color: rgba(255, 255, 255, 0.06);
}
.dark-mode .skeleton-line::after {
  background: linear-gradient( 90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100% );
}
.text-shimmer {
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shimmer 2s ease-in-out infinite;
}
@layer theme;
html.dark-mode {
  color-scheme: dark;
}
button.text-base {
  font-size: var(--text-base);
  line-height: var(--tw-leading, var(--text-base--line-height));
}
button.text-xs {
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
}
button.text-lg {
  font-size: var(--text-lg);
  line-height: var(--tw-leading, var(--text-lg--line-height));
}
button.border {
  border-style: var(--tw-border-style);
  border-width: 1px;
  border-color: var(--color-color);
}
#react-app {
  isolation: isolate;
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-divide-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-space-x-reverse: 0;
      --tw-divide-x-reverse: 0;
      --tw-border-style: solid;
      --tw-divide-y-reverse: 0;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
    }
  }
}
`, ""])
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(j, y, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(i) {
				if (!t.o(e, i)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + i + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var u = e[i],
					s = u[0];
				return t.e(u[1]).then(function() {
					return t.t(s, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", j.exports = r
		}
	}
]);

//# debugId=971b2a0e-aa75-5c51-8084-7e7336f84c36