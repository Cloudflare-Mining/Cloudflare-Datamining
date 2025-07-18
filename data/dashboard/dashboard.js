! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4b68fd5b-daa1-5250-a652-5102171a5f24")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(z, y, t) {
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
					return T
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				i = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const c = () => Object.keys(s.Z).reduce((v, m) => (m.indexOf("cf_beta.") === 0 && s.Z.get(m) === "true" && v.push(m.split(".").slice(1).join(".")), v), []),
				l = () => {
					var v, m, O;
					return ((v = window) === null || v === void 0 || (m = v.bootstrap) === null || m === void 0 || (O = m.data) === null || O === void 0 ? void 0 : O.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && s.Z) {
				const v = u().parse(window.location.search);
				v.beta_on && s.Z.set(`cf_beta.${v.beta_on}`, !0), v.beta_off && s.Z.set(`cf_beta.${v.beta_off}`, !1)
			}
			const g = {},
				n = v => {
					var m, O, E;
					return Object.prototype.hasOwnProperty.call(g, v) ? g[v] : ((m = window) === null || m === void 0 || (O = m.bootstrap) === null || O === void 0 || (E = O.data) === null || E === void 0 ? void 0 : E.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(w => w === v) ? (g[v] = !0, !0) : (g[v] = !1, !1)
				},
				o = v => s.Z ? s.Z.get(`cf_beta.${v}`) === !0 : !1,
				a = v => o(v) || n(v),
				_ = () => !0,
				d = () => {
					var v, m, O;
					return ((v = window) === null || v === void 0 || (m = v.bootstrap) === null || m === void 0 || (O = m.data) === null || O === void 0 ? void 0 : O.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				p = v => {
					const m = (0, e.uF)(v),
						O = (m == null ? void 0 : m.roles) || [];
					return (0, r.qR)(location.pathname) && O.length === 1 && O.some(E => E === "Administrator Read Only")
				},
				h = () => {
					var v, m, O;
					return ((v = window) === null || v === void 0 || (m = v.location) === null || m === void 0 || (O = m.origin) === null || O === void 0 ? void 0 : O.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				T = () => h() === "fed"
		},
		"../functions/utils/constants.ts": function(z, y, t) {
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
				f = "deploymentPreview",
				c = "fragmentPreview",
				l = o => o === u ? g() : n(),
				g = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (o = 72) => {
					const a = 36e5;
					return new Date(Date.now() + o * a)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				E9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(v) {
				for (var m = 1; m < arguments.length; m++) {
					var O = arguments[m] != null ? Object(arguments[m]) : {},
						E = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(O).filter(function(w) {
						return Object.getOwnPropertyDescriptor(O, w).enumerable
					})), E.forEach(function(w) {
						i(v, w, O[w])
					})
				}
				return v
			}

			function i(v, m, O) {
				return m = u(m), m in v ? Object.defineProperty(v, m, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[m] = O, v
			}

			function u(v) {
				var m = s(v, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function s(v, m) {
				if (typeof v != "object" || v === null) return v;
				var O = v[Symbol.toPrimitive];
				if (O !== void 0) {
					var E = O.call(v, m || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(v)
			}
			const f = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				c = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				l = e.z.string(),
				g = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(l, g),
				o = e.z.enum(["live", "previews", "canary"]),
				a = (v, m) => {
					const O = v.data.cookies[m],
						E = {
							[PREVIEW_VERSIONING_COOKIE]: f,
							[DEPLOYMENT_VERSION_COOKIE]: c
						};
					try {
						return E[m].parse(O)
					} catch {
						return null
					}
				},
				_ = v => {
					try {
						return decodeURIComponent(v).split(",").reduce((m, O) => {
							const E = O.split(":"),
								w = l.parse(E[0]),
								D = g.parse(E[1]);
							return r({}, m, {
								[w]: D
							})
						}, {})
					} catch {
						return {}
					}
				},
				d = v => {
					const m = v.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						O = _(m);
					try {
						return n.parse(O)
					} catch {
						return null
					}
				},
				p = v => {
					const m = f.parse(v),
						[O, ...E] = m.split("-"),
						w = E.join("-");
					return {
						projectType: O,
						deploymentId: w
					}
				},
				h = (v, m) => {
					if (!m) return "";
					try {
						var O;
						const {
							projectType: E,
							deploymentId: w
						} = p(m), D = {
							live: v.env.PAGES_WORKERS_LIVE_HOST,
							previews: v.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: A,
							pathname: P,
							search: B
						} = new URL(v.request.url), C = A == null || (O = A.split(".")) === null || O === void 0 ? void 0 : O[0];
						if (w && w !== C && o.safeParse(E).success) {
							const S = D[E];
							return `https://${w}.${S}${P}${B}`
						}
					} catch (E) {
						console.log(E)
					}
					return ""
				},
				T = (v, m) => {
					if (!m) return "";
					try {
						var O;
						const E = v.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: w,
								pathname: D,
								search: A
							} = new URL(v.request.url),
							P = w == null || (O = w.split(".")) === null || O === void 0 ? void 0 : O[0],
							{
								deploymentSHA: B
							} = parsePagesDevUrl(v.env.CF_PAGES_URL),
							C = v.request.headers.get("sec-fetch-dest") === "document";
						if (m && m !== P && m !== B && !C) return `https://${m}.${E}${D}${A}`
					} catch (E) {
						console.log(E)
					}
					return ""
				}
		},
		"../init.ts": function(z, y, t) {
			"use strict";
			t.r(y);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				i = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				s = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f(j) {
				for (var H = 1; H < arguments.length; H++) {
					var re = arguments[H] != null ? Object(arguments[H]) : {},
						ue = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(re).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(re, ye).enumerable
					})), ue.forEach(function(ye) {
						c(j, ye, re[ye])
					})
				}
				return j
			}

			function c(j, H, re) {
				return H = l(H), H in j ? Object.defineProperty(j, H, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[H] = re, j
			}

			function l(j) {
				var H = g(j, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function g(j, H) {
				if (typeof j != "object" || j === null) return j;
				var re = j[Symbol.toPrimitive];
				if (re !== void 0) {
					var ue = re.call(j, H || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(j)
			}
			const n = j => {
				const H = j && j.headers || {},
					re = new Headers(H);
				return re.append("X-Cross-Site-Security", "dash"), f({}, j, {
					headers: re
				})
			};
			(0, s.register)({
				request: (j, H) => {
					try {
						return new URL(j), j === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", H] : [j, H]
					} catch {
						var re, ue;
						return typeof j == "object" && ((re = j) === null || re === void 0 || (ue = re.url) === null || ue === void 0 ? void 0 : ue.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [j, H] : [j, n(H)]
					}
				}
			});
			var o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				a = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				_ = t("../react/app/providers/storeContainer.js");
			let d = "";
			const p = 61;

			function h(j) {
				const H = j.substr(1);
				if (H && d !== H) {
					const re = document.getElementById(H);
					if (re) {
						const ue = re.getBoundingClientRect().top;
						if (ue > 0) {
							const ye = ue - p;
							document.documentElement.scrollTop = ye
						}
					}
				}
				d = H
			}

			function T(j) {
				j.listen(H => h(H.hash))
			}
			var v = t("../../../../node_modules/cookie/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				O = t("../functions/utils/constants.ts");
			const E = j => {
					switch (j) {
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
				w = (j, H = !1) => {
					var re;
					const ue = E(j),
						ye = `
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
						Se = H ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${m.fk.orange[9]};
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
					return ye + Se
				},
				D = j => {
					var H;
					const re = document.getElementById(j);
					!re || (H = re.parentNode) === null || H === void 0 || H.removeChild(re)
				};

			function A() {
				const j = document.getElementById("loading-state");
				j == null || j.classList.add("hide"), j == null || j.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(D)
				})
			}

			function P(j) {
				var H;
				const re = document.getElementById("loading-state"),
					ue = !!((H = v.parse(document.cookie)) === null || H === void 0 ? void 0 : H[O.b1]);
				!re || (re.innerHTML = w(j == null ? void 0 : j.code, ue))
			}
			var B = t("../utils/initStyles.ts"),
				C = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				S = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				U = t("../react/common/selectors/languagePreferenceSelector.ts"),
				$ = t("../flags.ts"),
				G = t("../utils/getDashVersion.ts");
			const ne = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ee = !0,
				oe = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				W = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var K = t("../utils/sentry/lastSentEventId.ts"),
				F = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				x = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const I = j => {
				const H = async re => {
					var ue, ye;
					const Se = {
						envelope: re.body,
						url: j.url,
						isPreviewDeploy: (ue = window) === null || ue === void 0 || (ye = ue.build) === null || ye === void 0 ? void 0 : ye.isPreviewDeploy,
						release: (0, G.t)()
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
						return console.log(Pe), (0, x.$2)(Pe)
					}
				};
				return F.q(j, H)
			};
			var L = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				R = t("../../../../node_modules/history/esm/history.js"),
				q = (0, R.lX)(),
				ae = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				N = t("../react/utils/url.ts");
			const V = (0, ae.Rf)();
			let M;

			function Y(j) {
				return ie(j, "react-router-v5")
			}

			function ie(j, H) {
				return (re, ue = !0, ye = !0) => {
					ue && V && V.location && (M = re({
						name: (0, N.Fl)(V.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": H
						}
					})), ye && j.listen && j.listen((Se, Pe) => {
						if (Pe && (Pe === "PUSH" || Pe === "POP")) {
							M && M.finish();
							const Fe = {
								"routing.instrumentation": H
							};
							M = re({
								name: (0, N.Fl)(Se.pathname),
								op: "navigation",
								tags: Fe
							})
						}
					})
				}
			}
			var de = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				Ee = t.n(de),
				ge = t("../../../common/intl/intl-core/src/errors.ts"),
				te = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				be = t("../react/common/middleware/sparrow/errors.ts");

			function De(j, H, re) {
				return H = Le(H), H in j ? Object.defineProperty(j, H, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[H] = re, j
			}

			function Le(j) {
				var H = xe(j, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function xe(j, H) {
				if (typeof j != "object" || j === null) return j;
				var re = j[Symbol.toPrimitive];
				if (re !== void 0) {
					var ue = re.call(j, H || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(j)
			}
			class ke {
				constructor() {
					De(this, "name", ke.id)
				}
				setupOnce() {
					t.g.console && (0, te.hl)(t.g.console, "error", H => (...re) => {
						const ue = re.find(ye => ye instanceof Error);
						if (ne && ue) {
							let ye, Se = !0;
							if (ue instanceof be.ez) {
								const Pe = ue instanceof be.oV ? ue.invalidProperties : void 0;
								ye = {
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
							} else if (ue instanceof de.SparrowIdCookieError) ye = {
								extra: {
									sparrowIdCookie: ue.cookie
								},
								fingerprint: [ue.name ? ue.name : "SparrowIdCookieError"]
							};
							else if (ue.name === "ChunkLoadError") {
								ye = {
									fingerprint: [ue.name]
								};
								try {
									ye.tags = {
										chunkId: ue.message.split(" ")[2],
										chunkUrl: ue.request
									}
								} catch {}
							} else ue instanceof ge.YB && (ye = {
								fingerprint: ["TranslatorError", ue.translationKey]
							});
							Se && o.Tb(ue, ye)
						}
						typeof H == "function" && H.apply(t.g.console, re)
					})
				}
			}
			De(ke, "id", "ConsoleErrorIntegration");
			var Qe = null,
				ze = t("../react/common/utils/getEnvironment.ts");
			const nt = () => {
					if (ne && ee) {
						var j, H, re, ue, ye, Se, Pe, Fe, ut, Ke;
						const Gt = (0, ze.Z)();
						let At = "production";
						((j = window) === null || j === void 0 || (H = j.build) === null || H === void 0 ? void 0 : H.isPreviewDeploy) && (At += "-preview"), Gt === "canary" && (At = "canary"), S.S({
							dsn: ne,
							release: (0, G.t)(),
							environment: At,
							ignoreErrors: W,
							allowUrls: oe,
							autoSessionTracking: !1,
							integrations: vt => [...vt.filter(Jt => Jt.name !== "GlobalHandlers" && Jt.name !== "TryCatch"), new ke, new L.jK.BrowserTracing({
								routingInstrumentation: Y(q)
							})],
							tracesSampleRate: 0,
							transport: I,
							beforeSend: vt => (K.e.setEventId(vt.event_id), vt)
						});
						const Nt = (0, _.bh)().getState();
						o.rJ({
							LOCAL_STORAGE_FLAGS: (0, $.Qw)(),
							USER_BETA_FLAGS: (0, $.ki)(),
							meta: {
								connection: {
									type: (re = window) === null || re === void 0 || (ue = re.navigator) === null || ue === void 0 || (ye = ue.connection) === null || ye === void 0 ? void 0 : ye.effectiveType,
									bandwidth: (Se = window) === null || Se === void 0 || (Pe = Se.navigator) === null || Pe === void 0 || (Fe = Pe.connection) === null || Fe === void 0 ? void 0 : Fe.downlink
								},
								languagePreference: (0, U.r)(Nt),
								isPreviewDeploy: (ut = window) === null || ut === void 0 || (Ke = ut.build) === null || Ke === void 0 ? void 0 : Ke.isPreviewDeploy
							},
							utilGates: (0, C.T2)(Nt)
						}), window.addEventListener("unhandledrejection", function(vt) {})
					}
				},
				We = j => {
					j ? o.av({
						id: j
					}) : o.av(null)
				};
			var Z = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Be = () => {
					let j;
					try {
						j = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), j = window.location.search
					}
					if (!j.includes("remote[")) return;
					const H = new URLSearchParams(j),
						re = {};
					for (let [ue, ye] of H) ue.includes("remote") && (re[ue.replace(/remote\[|\]/g, "")] = ye);
					Z.Z.set("mfe-remotes", JSON.stringify(re))
				},
				Re = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				ot = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const dt = "ANON_USER_ID";

			function gt() {
				var j, H, re, ue;
				let ye = (j = t.g) === null || j === void 0 || (H = j.bootstrap) === null || H === void 0 || (re = H.data) === null || re === void 0 || (ue = re.user) === null || ue === void 0 ? void 0 : ue.id;
				if (!ye) {
					let Se = Z.Z.get(dt);
					if (!Se) {
						let Pe = (0, ot.Z)();
						Z.Z.set(dt, Pe), Se = Pe
					}
					return Se
				}
				return ye
			}
			async function Ae() {
				const j = (0, _.bh)();
				j.dispatch((0, Re.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await j.dispatch((0, C.UL)({
					userId: gt()
				}))
			}
			class at extends Error {
				constructor(H, re) {
					super(re);
					this.name = `${H} ${re}`
				}
			}
			const J = () => {
					document.cookie.split(";").forEach(H => {
						const [re] = H.trim().split("=");
						document.cookie = `${re}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				se = async () => {
					let j = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!j.ok) throw j.headers.get("content-type") === "text/html" && (await j.text()).toLowerCase().includes("cookie too large") && (o.$e(function(ye) {
						ye.setTag("init", "cookieTooLarge"), o.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), J(), window.location.reload()), new at("Bootstrap API Failure", j == null ? void 0 : j.status);
					return (await j.json()).result.data
				};
			var fe = t("webpack/sharing/consume/default/react/react"),
				we = t.n(fe),
				Ue = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Ve = t("webpack/sharing/consume/default/react-dom/react-dom"),
				Ge = t("webpack/sharing/consume/default/react-redux/react-redux"),
				yt = t("../../../../node_modules/swr/core/dist/index.mjs"),
				ht = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				mt = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Rt = t("../react/shims/focus-visible.js"),
				He = t("../react/app/components/DeepLink/index.ts"),
				_t = t("../../../../node_modules/prop-types/index.js"),
				ct = t.n(_t),
				rt = t("../react/utils/translator.tsx"),
				ft = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Me = t("../../../dash/intl/intl-translations/src/index.ts"),
				Q = t("../../../../node_modules/query-string/query-string.js"),
				pe = t.n(Q),
				he = t("../react/common/actions/userActions.ts"),
				Ie = t("../react/common/selectors/userSelectors.ts"),
				Ne = t("../react/utils/i18n.ts"),
				Xe = t("../react/utils/bootstrap.ts");

			function it(j) {
				for (var H = 1; H < arguments.length; H++) {
					var re = arguments[H] != null ? Object(arguments[H]) : {},
						ue = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(re).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(re, ye).enumerable
					})), ue.forEach(function(ye) {
						xt(j, ye, re[ye])
					})
				}
				return j
			}

			function xt(j, H, re) {
				return H = Et(H), H in j ? Object.defineProperty(j, H, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[H] = re, j
			}

			function Et(j) {
				var H = Dt(j, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function Dt(j, H) {
				if (typeof j != "object" || j === null) return j;
				var re = j[Symbol.toPrimitive];
				if (re !== void 0) {
					var ue = re.call(j, H || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(j)
			}
			let Je = pe().parse(location.search);
			const bt = j => {
					const H = (0, Xe.$8)() ? [(0, Me.Fy)(Me.if.changes), (0, Me.Fy)(Me.if.common), (0, Me.Fy)(Me.if.navigation), (0, Me.Fy)(Me.if.overview), (0, Me.Fy)(Me.if.onboarding), (0, Me.Fy)(Me.if.invite), (0, Me.Fy)(Me.if.login), (0, Me.Fy)(Me.if.dns), (0, Me.Fy)(Me.n4.ssl_tls), (0, Me.Fy)(Me.if.message_inbox), (0, Me.Fy)(Me.if.welcome)] : [(0, Me.Fy)(Me.if.common), (0, Me.Fy)(Me.if.invite), (0, Me.Fy)(Me.if.login), (0, Me.Fy)(Me.if.onboarding)];
					Je.lang ? Pt(j) : Z.Z.get(Ne.th) && Ct(j, (0, Ne.Kd)());
					const re = async ue => (await Promise.all(H.map(Se => Se(ue)))).reduce((Se, Pe) => it({}, Se, Pe), {});
					return we().createElement(ft.LocaleContext.Provider, {
						value: j.languagePreference
					}, we().createElement(ft.I18nProvider, {
						translator: rt.Vb,
						locale: j.languagePreference
					}, we().createElement(ft.I18nLoader, {
						loadPhrases: re
					}, j.children)))
				},
				Pt = async j => {
					let H = Je.lang.substring(0, Je.lang.length - 2) + Je.lang.substring(Je.lang.length - 2, Je.lang.length).toUpperCase();
					if (!(0, U.v)(H)) {
						console.warn(`${H} is not a supported locale.`), delete Je.lang, j.history.replace({
							search: pe().stringify(Je)
						});
						return
					}(0, Ne.i_)(H), delete Je.lang, Ct(j, H), j.isAuthenticated || j.history.replace({
						search: pe().stringify(Je)
					})
				}, Ct = async (j, H) => {
					if (j.isAuthenticated) try {
						await j.setUserCommPreferences({
							"language-locale": H
						}, {
							hideErrorAlert: !0
						}), Z.Z.remove(Ne.th), j.history.replace({
							search: pe().stringify(Je)
						})
					} catch (re) {
						Z.Z.set(Ne.th, !0), console.error(re)
					} else Z.Z.set(Ne.th, !0)
				}, Lt = j => {
					const H = (0, Ie.PR)(j);
					return {
						isAuthenticated: !!(H && H.id),
						languagePreference: (0, Ne.Kd)() || (0, U.r)(j)
					}
				}, St = {
					setUserCommPreferences: he.V_
				};
			var Bt = (0, Ue.withRouter)((0, Ge.connect)(Lt, St)(bt));
			bt.propTypes = {
				history: ct().object,
				languagePreference: ct().string.isRequired,
				children: ct().node.isRequired,
				isAuthenticated: ct().bool,
				setUserCommPreferences: ct().func.isRequired
			};
			var Ot = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Ut = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let wt;
			const jt = ({
				selectorPrefix: j = "c_"
			} = {}) => (wt || (wt = (0, Ut.Z)({
				dev: !1,
				selectorPrefix: j
			})), wt);
			var Wt = t("../react/common/out.css"),
				Tt = t("../react/common/components/ModalManager.tsx"),
				kt = t("../react/app/components/ErrorBoundary.tsx"),
				$t = t("../react/common/actions/notificationsActions.ts");
			const Mt = (t.g.bootstrap || {}).data || {};
			class b extends we().Component {
				componentDidMount() {
					Mt.messages && this.dispatchNotificationActions(Mt.messages)
				}
				dispatchNotificationActions(H) {
					H.forEach(re => {
						const {
							type: ue,
							message: ye,
							persist: Se
						} = re;
						["success", "info", "warn", "error"].includes(ue) && this.props.notifyAdd(ue, (0, rt.ZP)(ye), {
							persist: !!Se
						})
					})
				}
				render() {
					return null
				}
			}
			var me = (0, Ue.withRouter)((0, Ge.connect)(null, {
				notifyAdd: $t.add
			})(b));
			b.propTypes = {
				notifyAdd: ct().func.isRequired
			};
			var Te = t("../react/app/redux/index.ts");

			function $e() {
				var j;
				const H = (0, Te.p4)(Ie.PR),
					re = (H == null || (j = H.email) === null || j === void 0 ? void 0 : j.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ue = (0, Re.Yc)();
				(0, fe.useEffect)(() => {
					ue({
						userType: re
					})
				}, [re, ue])
			}
			var ce = t("../react/common/selectors/entitlementsSelectors.ts"),
				le = t("../react/common/selectors/accountSelectors.ts");
			const ve = ["accountId", "is_ent"];

			function _e() {
				const j = (0, Re.f7)(),
					H = (0, Ue.useHistory)(),
					re = (0, N.uW)(H.location.pathname),
					ue = (0, Re.Yc)(),
					ye = (0, Re.O$)(),
					Se = (0, Te.p4)(ce.u1),
					Pe = !Se.isRequesting && !!Se.data,
					Fe = (0, Te.p4)(ce.p1),
					ut = (0, Te.p4)(le.Xu),
					Ke = (0, Te.p4)(le.uF),
					Gt = !ut.isRequesting && !!ut.data;
				(0, fe.useEffect)(() => {
					if (re && Gt && Ke && Pe && re === Ke.account.id) {
						var At, Nt, vt, Zt;
						ue({
							accountId: Ke.account.id,
							is_ent: Fe || (Ke == null || (At = Ke.account.meta) === null || At === void 0 ? void 0 : At.has_enterprise_zones),
							is_free_account: !Fe && !(Ke == null || (Nt = Ke.account.meta) === null || Nt === void 0 ? void 0 : Nt.has_business_zones) && !(Ke == null || (vt = Ke.account.meta) === null || vt === void 0 ? void 0 : vt.has_pro_zones) && !(Ke == null || (Zt = Ke.account.meta) === null || Zt === void 0 ? void 0 : Zt.has_enterprise_zones)
						})
					} else(!re || re in j && j.accountId !== re) && ye(ve)
				}, [Gt, Ke, ue, ye, Pe, Fe, re, j])
			}
			var Oe = t("../react/common/selectors/zoneSelectors.ts");

			function je() {
				const j = (0, Te.p4)(Oe.nA),
					H = (0, Re.Yc)();
				(0, fe.useEffect)(() => {
					var re;
					H({
						zone_id: j == null ? void 0 : j.id,
						zone_plan: j == null || (re = j.plan) === null || re === void 0 ? void 0 : re.legacy_id
					})
				}, [j, H])
			}
			const Ye = () => ($e(), _e(), je(), null);
			var st = t("../react/app/components/Persistence/index.tsx"),
				qe = t("../node_modules/@cloudflare/elements/es/index.js"),
				et = t("../react/app/components/LoadingSuspense.tsx");
			const lt = we().lazy(() => Promise.all([t.e(16691), t.e(92646), t.e(12174), t.e(58816), t.e(87395), t.e(5668), t.e(8924), t.e(77216), t.e(23657), t.e(40517), t.e(39760), t.e(15892), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var pt = () => we().createElement(et.Z, null, we().createElement(lt, null));
			const tt = () => (fe.useEffect(() => A, []), null);
			var qt = t("../../../../node_modules/moment/moment.js"),
				Ht = t.n(qt);
			const en = j => {
					switch (j) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return j.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return j.toLowerCase();
						default:
							return "en"
					}
				},
				tn = () => {
					const j = (0, Te.p4)(U.r);
					(0, fe.useEffect)(() => {
						const H = en(j);
						H !== Ht().locale() && Ht().locale(H), document.documentElement.lang = j
					}, [j])
				},
				nn = () => {
					(0, fe.useEffect)(() => {
						async function j() {
							var H, re, ue, ye;
							let Se;
							if (((H = window) === null || H === void 0 || (re = H.build) === null || re === void 0 ? void 0 : re.isPreviewDeploy) && ((ue = window) === null || ue === void 0 || (ye = ue.build) === null || ye === void 0 ? void 0 : ye.branch) !== "staging" && (Se = "cookie"), !!Se) try {
								const Pe = document.head.querySelector("link[rel=icon]");
								Pe && (Pe.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${Se}.ico`)).default)
							} catch {}
						}
						j()
					}, [])
				};
			var rn = t("../react/common/constants/constants.ts");
			const on = () => {
				var j;
				const H = (0, Ue.useLocation)(),
					[re, ue] = (0, fe.useState)(((j = window) === null || j === void 0 ? void 0 : j.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, fe.useEffect)(() => {
					const ye = pe().parse(H.search);
					if (ye.pt && Z.Z.set(rn.sJ, ye.pt), ye == null ? void 0 : ye.devPanel) {
						var Se, Pe;
						(Se = window) === null || Se === void 0 || (Pe = Se.localStorage) === null || Pe === void 0 || Pe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ue(!0)
					}
				}, [H.search]), {
					devPanelEnabled: re
				}
			};
			var an = t("../react/common/hooks/useGate.ts");
			const sn = ({
				isDev: j,
				adobeFeatureFlag: H
			}) => {
				(0, fe.useEffect)(() => {
					(() => {
						if (!H) return null;
						let ue;
						j ? ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ue = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const ye = document.createElement("script");
						ye.async = !0, ye.src = ue, document.head.insertBefore(ye, document.head.childNodes[0])
					})()
				}, [])
			};
			var cn = t("../react/utils/useDomainConnectRedirect.ts");
			const ln = we().lazy(() => Promise.all([t.e(16691), t.e(92646), t.e(12174), t.e(58816), t.e(87395), t.e(51436), t.e(34744), t.e(54844), t.e(18580), t.e(8924), t.e(77216), t.e(23657), t.e(40517), t.e(39760), t.e(15892), t.e(39278), t.e(10989), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				un = we().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(58816), t.e(33310), t.e(23657), t.e(88145), t.e(10989), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var dn = ({
					userIsAuthed: j
				}) => {
					tn(), nn(), (0, cn.y)();
					const {
						devPanelEnabled: H
					} = on();
					return sn({
						isDev: !1,
						adobeFeatureFlag: !!(0, an.Z)("dx-enable-adobe-launch")
					}), we().createElement(fe.Suspense, {
						fallback: we().createElement(tt, null)
					}, we().createElement(Ue.Switch, null, !j && !0 && we().createElement(Ue.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, we().createElement(un, null)), we().createElement(Ue.Route, {
						render: () => we().createElement(qe.ZC, {
							minHeight: "100vh"
						}, we().createElement(ln, null))
					})), H && we().createElement(pt, null))
				},
				Kt = t("../../../../node_modules/yup/es/index.js"),
				pn = t("../../../common/util/types/src/utils/index.ts");
			const Yt = {
				cfEmail: () => Kt.Z_().email((0, rt.ZP)("common.validation.email")).required((0, rt.ZP)("common.validation.email")),
				cfPassword: () => Kt.Z_().required((0, rt.ZP)("common.validation.required"))
			};
			(0, pn.Yd)(Yt).forEach(j => {
				Kt.kM(Kt.Z_, j, Yt[j])
			});
			var gn = t("../react/common/utils/startViewTransition.ts");
			const Qt = we().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function mn() {
				const [j, H] = (0, fe.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, fe.useEffect)(() => {
					const re = window.matchMedia("(prefers-color-scheme: dark)"),
						ue = ye => {
							H(ye.matches ? "dark" : "light")
						};
					return re.addEventListener("change", ue), () => {
						re.removeEventListener("change", ue)
					}
				}, []), j
			}
			const fn = () => {
					const j = (0, Xe.$8)(),
						[H, re] = (0, fe.useState)(j ? Qt : we().Fragment),
						ue = mn(),
						[ye, Se] = (0, fe.useState)((0, m.Yc)());
					(0, fe.useEffect)(() => {
						(0, m.fF)(() => Se((0, m.Yc)()))
					}, []);
					const Pe = Fe => {
						Se(Fe), (0, gn.o)(() => {
							(0, m.C8)(Fe)
						}), document.cookie = `dark-mode=${Fe};Path=/;Max-Age=31536000`, Fe === "dark" || Fe === "on" || Fe === "system" && ue === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, fe.useEffect)(() => {
						re(j ? Qt : we().Fragment)
					}, [j]), (0, fe.useEffect)(() => {
						const Fe = () => Pe(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Fe), () => {
							window.removeEventListener("storage", Fe)
						}
					}, []), we().createElement(fe.Suspense, {
						fallback: null
					}, we().createElement(Ge.Provider, {
						store: (0, _.bh)()
					}, we().createElement(Ue.Router, {
						history: q
					}, we().createElement(H, null, we().createElement(Ot.Z, {
						renderer: jt()
					}, we().createElement(Bt, null, we().createElement(kt.S, {
						sentryTag: "Root"
					}, we().createElement(yt.J$, {
						value: {
							fetcher: Fe => fetch(Fe).then(ut => ut.json())
						}
					}, we().createElement(Ye, null), we().createElement(me, null), we().createElement(st.Z_, {
						onDarkModeChangeCb: Pe
					}, we().createElement(He.ZP, null, we().createElement(dn, {
						userIsAuthed: j
					}))), we().createElement(Tt.ZP, null), we().createElement(ht.F0, null)))))))))
				},
				vn = () => {
					(0, Ve.render)(we().createElement(fn, null), document.getElementById("react-app"))
				};
			var It = t("../utils/initSparrow.ts"),
				Ft = t("../utils/zaraz.ts");
			const _n = () => {
					const j = (0, Ie.PR)((0, _.bh)().getState());
					En(), (0, It.Ug)(), (0, Ft.bM)(), (j == null ? void 0 : j.id) && Ee().setUserId(j == null ? void 0 : j.id), (0, It.yV)(), !(0, It.Wi)() && (0, It.IM)(), j ? (0, Ft.yn)(j) : (0, Ft.Ro)()
				},
				En = () => {
					var j, H;
					(j = window) === null || j === void 0 || (H = j.OneTrust) === null || H === void 0 || H.OnConsentChanged(() => {
						const re = (0, Ie.PR)((0, _.bh)().getState());
						(0, It.Wi)() ? (Ee().setEnabled(!0), (re == null ? void 0 : re.id) ? (Ee().setUserId(re.id), (0, Ft.yn)(re)) : (0, Ft.Ro)(), (0, It.yV)()) : (Ee().setEnabled(!1), (0, It.IM)())
					})
				};

			function yn(j) {
				for (var H = 1; H < arguments.length; H++) {
					var re = arguments[H] != null ? Object(arguments[H]) : {},
						ue = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(re).filter(function(ye) {
						return Object.getOwnPropertyDescriptor(re, ye).enumerable
					})), ue.forEach(function(ye) {
						hn(j, ye, re[ye])
					})
				}
				return j
			}

			function hn(j, H, re) {
				return H = bn(H), H in j ? Object.defineProperty(j, H, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[H] = re, j
			}

			function bn(j) {
				var H = Cn(j, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function Cn(j, H) {
				if (typeof j != "object" || j === null) return j;
				var re = j[Symbol.toPrimitive];
				if (re !== void 0) {
					var ue = re.call(j, H || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(j)
			}
			const On = "init",
				Xt = (j, H) => {
					o.$e(function(re) {
						re.setTag(On, H), o.Tb(j)
					}), P(j)
				},
				Vt = async (j, H) => {
					try {
						return await j(), !0
					} catch (re) {
						return Xt(re, H), !1
					}
				};
			(async () => {
				try {
					var j, H, re;
					t.g.build = yn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "d2837d54c03bbcd2974d110fb2e26eda63f2c369",
						dashVersion: "34698933",
						env: "production",
						builtAt: 1752873202747,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, G.p)()
					}), nt();
					const ue = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => T(q),
						tag: "hashScroll"
					}, {
						fn: B.Z,
						tag: "styles"
					}, {
						fn: Be,
						tag: "mfePreviewData"
					}];
					for (const ut of ue)
						if (!await Vt(ut.fn, ut.tag)) return;
					let ye;
					if (!await Vt(async () => {
							ye = await se()
						}, "bootstrap")) return;
					const Se = (0, _.bh)(),
						Pe = ((j = ye) === null || j === void 0 ? void 0 : j.data) || {};
					Se.dispatch((0, a.mW)("user", Pe == null ? void 0 : Pe.user));
					const Fe = (H = ye) === null || H === void 0 || (re = H.data) === null || re === void 0 ? void 0 : re.user;
					return t.g.bootstrap = ye, Fe && Fe.id && We(Fe.id), !await Vt(Ae, "gates") || !await Vt(_n, "tracking") ? void 0 : vn()
				} catch (ue) {
					Xt(ue, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(z, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				f = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = t.n(l);

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
						T = (0, l.useHistory)(),
						v = (0, l.useLocation)(),
						m = (0, l.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						O = (0, i.p4)(u.PR) || null,
						E = (0, i.p4)(s.nA) || null,
						w = (0, i.p4)(f.uF),
						D = w ? w.account : null;
					if (!m) return null;
					const {
						accountId: A,
						app: P,
						tab: B
					} = m.params, C = m.params.zoneName && ((0, c.v5)(m.params.zoneName) || m.params.zoneName.indexOf(".") > 0) ? m.params.zoneName : void 0;
					return r().createElement(_, n({
						dispatch: h,
						history: T,
						location: v,
						match: m,
						user: O,
						membership: A ? w : null,
						account: A ? D : null,
						accountId: A || null,
						zone: C ? E : null,
						zoneName: C || null,
						app: C ? P : null,
						tab: C ? B : null
					}, p))
				}
				return d.displayName = `withEntities(${a(_)})`, d
			};

			function a(_) {
				return _.displayName || _.name || "Component"
			}
			y.Z = o
		},
		"../react/app/components/AccountHome/tracking.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return E
				},
				CK: function() {
					return P
				},
				KV: function() {
					return D
				},
				OX: function() {
					return A
				},
				QV: function() {
					return O
				},
				Yt: function() {
					return v
				},
				bA: function() {
					return m
				},
				fu: function() {
					return C
				},
				gX: function() {
					return p
				},
				hh: function() {
					return B
				},
				o1: function() {
					return w
				},
				tw: function() {
					return h
				},
				xD: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../react/utils/url.ts");
			const u = "projects table click",
				s = "click create application",
				f = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				l = "account home dev plat - view all projects click",
				g = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				o = "account home zero trust - analytics link click",
				a = "account home zero trust - product card click",
				_ = "account home zero trust - plan pill click",
				d = "account home zero trust - plan fallback link click",
				p = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: s,
					SPARROW_PRODUCT_CARD_CLICK: f,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: l,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: g,
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
				T = S => {
					r().sendEvent(u, {
						component: "menu",
						subcomponent: S
					})
				},
				v = () => {
					r().sendEvent(s, {
						category: "Projects Table"
					})
				},
				m = ({
					category: S,
					product: U
				}) => {
					r().sendEvent(f, {
						category: S,
						product: U
					})
				},
				O = () => {
					r().sendEvent(c)
				},
				E = () => {
					r().sendEvent(l)
				},
				w = S => {
					r().sendEvent(n, {
						category: S
					})
				},
				D = ({
					category: S,
					href: U
				}) => {
					r().sendEvent(g, {
						category: S,
						href: (0, i.cm)(U)
					})
				},
				A = ({
					category: S,
					href: U
				}) => {
					r().sendEvent(o, {
						category: S,
						href: (0, i.cm)(U)
					})
				},
				P = ({
					category: S,
					product: U,
					href: $
				}) => {
					r().sendEvent(a, {
						category: S,
						product: U,
						href: (0, i.cm)($)
					})
				},
				B = ({
					plan: S
				}) => {
					r().sendEvent(_, {
						plan: S
					})
				},
				C = () => {
					r().sendEvent(d)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return l
				},
				Bh: function() {
					return f
				},
				CM: function() {
					return g
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
				f = (0, e.R)(r.SELECT_ZONE, _ => ({
					payload: _
				})),
				c = (0, e.R)(r.SELECT_ACCOUNT, _ => ({
					payload: _
				})),
				l = (0, e.R)(r.SELECT_PAGES_PROJECT, _ => ({
					payload: _
				})),
				g = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, _ => ({
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
		"../react/app/components/DeepLink/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return g
				},
				Fj: function() {
					return u
				},
				Kt: function() {
					return f
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
				f = "add",
				c = "multiSkuProducts",
				l = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return B
				},
				U: function() {
					return P.U
				},
				dd: function() {
					return P.dd
				},
				bk: function() {
					return f.bk
				},
				Bh: function() {
					return f.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t("../react/app/redux/index.ts"),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				s = t("../react/utils/bootstrap.ts"),
				f = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c);

			function g(C) {
				for (var S = 1; S < arguments.length; S++) {
					var U = arguments[S] != null ? Object(arguments[S]) : {},
						$ = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(U).filter(function(G) {
						return Object.getOwnPropertyDescriptor(U, G).enumerable
					})), $.forEach(function(G) {
						n(C, G, U[G])
					})
				}
				return C
			}

			function n(C, S, U) {
				return S = o(S), S in C ? Object.defineProperty(C, S, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[S] = U, C
			}

			function o(C) {
				var S = a(C, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function a(C, S) {
				if (typeof C != "object" || C === null) return C;
				var U = C[Symbol.toPrimitive];
				if (U !== void 0) {
					var $ = U.call(C, S || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(C)
			}
			class _ {
				constructor(S, U) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", $ => {
						this.resolvers.set($, {
							name: $,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", $ => {
						const G = this.resolvers.get($);
						G && (G.endTime = Date.now(), this.resolvers.set($, G))
					}), n(this, "resolverCancel", $ => {
						this.resolverDone($), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", $ => {
						const G = "NO_ACTION",
							ne = {
								actionType: G,
								startTime: 0
							};
						return {
							start: (ee = G) => {
								const oe = this.resolvers.get($);
								ne.actionType = ee, ne.startTime = Date.now(), oe && oe.userActions.push(ne)
							},
							finish: (ee = G) => {
								ne.actionType = ee, ne.endTime = Date.now()
							},
							cancel: (ee = G) => {
								ne.actionType = ee, ne.endTime = Date.now(), this.resolverCancel($)
							}
						}
					}), this.deepLink = S, this.legacyDeepLink = U, this.resolvers = new Map
				}
				track(S) {
					try {
						if (this._done) return;
						this._done = !0;
						const U = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: d(this.startTime, this.endTime),
								totalCpuTime: d(this.startTime, this.endTime)
							},
							$ = this.resolvers.size === 0 ? U : Array.from(this.resolvers.values()).reduce((G, ne) => {
								const ee = d(ne.startTime, ne.endTime),
									oe = ne.userActions.reduce((K, F) => {
										const x = d(F.startTime, F.endTime);
										return {
											totalTime: K.totalTime + x,
											actions: K.actions.set(F.actionType, x)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									W = ee - oe.totalTime;
								return g({}, G, {
									totalTime: G.totalTime + ee,
									totalUserActionsTime: G.totalUserActionsTime + oe.totalTime,
									totalCpuTime: G.totalCpuTime + W,
									[`${ne.name}ResolverTotalTime`]: ee,
									[`${ne.name}ResolverTotalCpuTime`]: W,
									[`${ne.name}ResolverTotalUserActionsTime`]: oe.totalTime
								}, Array.from(oe.actions.keys()).reduce((K, F) => g({}, K, {
									[`${ne.name}Resolver/${F}`]: oe.actions.get(F)
								}), {}))
							}, g({}, U, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						l().sendEvent(S, $)
					} catch (U) {
						console.error(U)
					}
				}
			}

			function d(C = Date.now(), S = Date.now()) {
				return (S - C) / 1e3
			}
			var p = t("../react/app/components/DeepLink/constants.ts"),
				h = t("../react/common/hooks/useCachedState.ts"),
				T = t("../react/common/hooks/usePrevious.ts");

			function v(C) {
				for (var S = 1; S < arguments.length; S++) {
					var U = arguments[S] != null ? Object(arguments[S]) : {},
						$ = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(U).filter(function(G) {
						return Object.getOwnPropertyDescriptor(U, G).enumerable
					})), $.forEach(function(G) {
						m(C, G, U[G])
					})
				}
				return C
			}

			function m(C, S, U) {
				return S = O(S), S in C ? Object.defineProperty(C, S, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[S] = U, C
			}

			function O(C) {
				var S = E(C, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function E(C, S) {
				if (typeof C != "object" || C === null) return C;
				var U = C[Symbol.toPrimitive];
				if (U !== void 0) {
					var $ = U.call(C, S || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(C)
			}
			var D = ({
					children: C
				}) => {
					const S = (0, r.TZ)(),
						U = (0, i.useHistory)(),
						$ = (0, T.Z)(U.location.pathname),
						[G, ne] = (0, e.useState)(!0),
						[ee, oe] = (0, h.j)(void 0, {
							key: p.Fj
						}),
						[W, K] = (0, h.j)(void 0, {
							key: p.O5
						}),
						[F, x] = (0, h.j)(void 0, {
							key: p.s$
						}),
						I = (0, s.$8)();
					let L = new URLSearchParams(U.location.search);
					const R = (0, u.mL)(U.location.pathname, L);
					let X = null,
						q = null;
					if (L.has(p.Tc) && L.delete(p.Tc), L.get(p.BV)) X = L.get(p.BV), U.location.hash && (q = U.location.hash);
					else if (ee) {
						const N = new URLSearchParams(ee);
						N.get(p.BV) && (X = N.get(p.BV), L = N)
					} else R && (L.set(p.BV, R), X = R);
					if (X && p._h.test(X)) {
						const N = L.getAll(p.Kt),
							V = JSON.stringify(N);
						N.length && V !== F && x(V), L.has(p.Tc) && L.delete(p.Tc), L.delete(p.Kt)
					}!I && ee === void 0 && X && oe(L.toString());
					const ae = async () => {
						try {
							if ((0, u.I3)(X) && I) {
								ee && oe(void 0), S.dispatch((0, f.r4)()), ne(!0), X && X !== W && K(X);
								const N = await (0, u.py)(X, ne, S, U, $, new _(X, R ? `${U.location.pathname}${U.location.search}` : void 0));
								L.delete(p.BV);
								const V = L.toString();
								U.replace(v({}, U.location, {
									pathname: N,
									search: V
								}, q ? {
									hash: q
								} : {})), S.dispatch((0, f.WF)())
							}
						} catch (N) {
							S.dispatch((0, f.WF)()), console.error(N)
						} finally {
							ne(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ae()
					}, [U.location.pathname, U.location.search]), (G || (0, u.I3)(X)) && I ? null : C
				},
				A = t("../react/app/components/DeepLink/reducer.ts"),
				P = t("../react/app/components/DeepLink/selectors.ts"),
				B = D
		},
		"../react/app/components/DeepLink/reducer.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return u
				},
				r: function() {
					return f
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

			function f(c = s, l) {
				if (l.type === i.MF.RESOLVING_COMPLETE) return s;
				if (l.type === i.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (l.type === i.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (l.type === i.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", l.accountIds);
					if (l.type === i.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
					{
						let g = c;
						try {
							g = c.set("lastAction", l)
						} catch {
							g = c.set("lastAction", {
								type: l.type
							})
						}
						return g
					}
				} else return c
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(z, y, t) {
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
		"../react/app/components/DeepLink/utils.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				I3: function() {
					return g
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
				f = t("../react/common/utils/isGuards.ts");
			const c = p => (0, s.Lb)(p) && (p.split(".").length > 1 || (0, f.v5)(p)),
				l = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				g = p => typeof p == "string" && p.startsWith("/"),
				n = (p, h) => T => new Promise((v, m) => {
					h.start();
					const O = p.subscribe(() => {
						const E = (0, i.yI)(p.getState());
						E === r.E ? (h.cancel(), O(), m("DeepLink: waitForAction out of context.")) : T(E) && (h.finish(E.type), O(), v(E))
					})
				}),
				o = (p, h, T) => (v, m) => new Promise((O, E) => {
					T.start();
					const w = h.location.pathname;
					v = new URL(v, window.location.href).pathname, w !== v && (T.cancel(), E(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${v}", but on "${w}". You need to redirect to "${v}", and unblockRouter in your Resolver, before you use this function.`));
					const D = p.subscribe(() => {
						const A = (0, i.yI)(p.getState()),
							P = h.location.pathname,
							C = new URLSearchParams(h.location.search).get(u.BV);
						(P !== v || !!C) && (T.cancel(), D(), E(`DeepLink: waitForPageAction user navigated away from "${v}" to "${P}${C?h.location.search:""}"`)), A === r.E ? (T.cancel(), D(), E("DeepLink: waitForPageAction out of context.")) : m(A) && (T.finish(A.type), D(), O(A))
					})
				});

			function a(p) {
				const h = [],
					T = p.split("?")[0].split("/");
				for (let v of T) v.length !== 0 && (v.startsWith(":") ? h.push({
					value: v.substring(1),
					type: "dynamic"
				}) : h.push({
					value: v,
					type: "static"
				}));
				return h
			}
			async function _(p, h, T, v, m, O) {
				O.start();
				const E = a(p),
					D = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					A = {};
				let P = "";
				for (const [B, C] of E.entries())
					if (C.type === "static") P = [P, C.value].join("/");
					else if (C.type === "dynamic" && l.is(C.value) && C.value in D) {
					O.resolverStart(C.value);
					const S = await D[C.value]({
						deepLink: p,
						blockRouter: () => h(!0),
						unblockRouter: () => h(!1),
						routerHistory: v,
						resolvedValues: A,
						store: T,
						referringRoute: m,
						uri: {
							currentPartIdx: B,
							parts: E
						},
						waitForAction: n(T, O.createUserActionTracker(C.value)),
						waitForPageAction: o(T, v, O.createUserActionTracker(C.value))
					});
					O.resolverDone(C.value), P = [P, S].join("/"), A[C.value] = S
				} else throw O.cancel(), new Error(`DeepLink: Resolver with name '${C.value}' is not supported.`);
				return O.done(), P
			}

			function d(p, h) {
				const T = ":account",
					v = ":zone",
					m = h.get("zone");
				if (m) return h.delete("zone"), `/${T}/${v}/${m}`;
				const O = h.get("account");
				if (O) return h.delete("account"), `/${T}/${O}`;
				if (p === "/overview") return `/${T}/${v}`;
				const E = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const w of E) {
					const D = w.length;
					if (p.startsWith(w) && (p.length === D || p[D] === "/")) return `/${T}/${v}${p}`
				}
				switch (p) {
					case "/account/billing":
						return `/${T}/billing`;
					case "/account/subscriptions":
						return `/${T}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${T}/dns-firewall`;
					case "/account/audit-log":
						return `/${T}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(z, y, t) {
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
				f = t("../react/utils/zaraz.ts"),
				c = t("../react/utils/url.ts"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				g = t("../node_modules/@cloudflare/component-button/es/index.js"),
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
				})), r().createElement(g.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, r().createElement(n.Trans, {
					id: "common.refresh"
				}))))
			}
			const h = ({
				sentryTag: T,
				children: v,
				fallbackComponent: m
			}) => r().createElement(i.SV, {
				beforeCapture: O => {
					f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, c.Fl)(window.location.pathname)
					})
				},
				onError: O => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(O)
				},
				fallback: ({
					error: O,
					eventId: E
				}) => {
					var w;
					if (m) return m;
					const D = s.e.getEventId() || E;
					return (O == null || (w = O.message) === null || w === void 0 ? void 0 : w.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(p, null)) : r().createElement(u.Z, {
						type: "page",
						error: O,
						eventId: D,
						sentryTag: T
					})
				}
			}, v)
		},
		"../react/app/components/Footer.tsx": function(z, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return x
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c),
				g = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				o = t("../react/utils/translator.tsx"),
				a = t("../../../../node_modules/moment/moment.js"),
				_ = t.n(a);
			const d = () => {
					const I = _()().format("YYYY"),
						L = R => {
							l().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: R
							})
						};
					return r().createElement(p, {
						marginTop: "auto"
					}, r().createElement(h, null, r().createElement(T, null, r().createElement(v, null, "\xA9 ", I, " Cloudflare, Inc."), r().createElement(v, null, r().createElement(m, null, r().createElement(O, {
						showOnDeskTop: !1
					}, r().createElement(E, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => L("Support")
					}, r().createElement(o.cC, {
						id: "common.support"
					}))), r().createElement(O, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => L("Privacy Policy")
					}, r().createElement(o.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(O, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => L("Terms of Use")
					}, r().createElement(o.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(O, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => L("Cookie Preferences")
					}, r().createElement(o.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(O, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => L("Trademark")
					}, r().createElement(o.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(m, null, r().createElement(O, null, r().createElement(E, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => L("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(o.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				p = (0, s.LM)(({
					theme: I,
					marginTop: L
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: L
				})),
				h = (0, s.LM)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				T = (0, s.LM)(({
					theme: I
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${I.space[3]}px`
					}
				})),
				v = (0, s.LM)(({
					theme: I
				}) => ({
					width: "100%",
					color: I.colors.white,
					fontSize: I.fontSizes[1],
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
				m = (0, s.LM)(({
					theme: I
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: I.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				O = (0, s.LM)(({
					showOnDeskTop: I = !0,
					theme: L
				}) => ({
					color: L.colors.white,
					fontSize: L.fontSizes[1],
					height: "20px",
					display: I ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: L.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: L.space[3],
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
				E = (0, s.SU)(({
					theme: I
				}) => ({
					textDecoration: "none",
					color: I.colors.white,
					"&:hover": {
						color: I.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var w = d,
				D = t("../react/pages/welcome/routes.ts"),
				A = t("../react/utils/cookiePreferences.ts"),
				P = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				C = () => {
					const [I, L] = (0, e.useState)(!1), R = (0, A.wV)(), X = () => {
						L(!0)
					}, q = () => {
						L(!1)
					}, ae = R && R === "US" ? (0, o.ZP)("footer.cpra_cta.privacy_choices") : (0, o.ZP)("footer.cpra_cta.cookie_preferences"), N = {
						background: "transparent",
						borderRadius: "none",
						color: I ? (0, f.Yc)() ? "#ee730a" : "#003681" : (0, f.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: I ? "underline" : "none",
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
						style: N,
						onMouseEnter: X,
						onMouseLeave: q
					}, r().createElement(u.Ei, {
						height: 15,
						src: P,
						mr: 2,
						alt: ae
					}), ae)
				};

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(I) {
					for (var L = 1; L < arguments.length; L++) {
						var R = arguments[L];
						for (var X in R) Object.prototype.hasOwnProperty.call(R, X) && (I[X] = R[X])
					}
					return I
				}, S.apply(this, arguments)
			}

			function U(I, L) {
				if (I == null) return {};
				var R = $(I, L),
					X, q;
				if (Object.getOwnPropertySymbols) {
					var ae = Object.getOwnPropertySymbols(I);
					for (q = 0; q < ae.length; q++) X = ae[q], !(L.indexOf(X) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, X) || (R[X] = I[X]))
				}
				return R
			}

			function $(I, L) {
				if (I == null) return {};
				var R = {},
					X = Object.keys(I),
					q, ae;
				for (ae = 0; ae < X.length; ae++) q = X[ae], !(L.indexOf(q) >= 0) && (R[q] = I[q]);
				return R
			}
			const G = (0, s.SU)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,f.Yc)()?f.rS.colors.orange[6]:f.rS.colors.blue[4]}`
					}
				}), u.A),
				ne = (0, s.SU)(({
					theme: I
				}) => ({
					color: I.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, g.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: I.colors.gray[4]
					}
				}), u.A),
				ee = I => {
					let {
						onClick: L
					} = I, R = U(I, ["onClick"]);
					return React.createElement(G, S({
						onClick: X => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: R.href
							}), L && L(X)
						}
					}, R))
				},
				oe = I => {
					let {
						children: L,
						target: R,
						rel: X
					} = I, q = U(I, ["children", "target", "rel"]);
					return r().createElement(ne, S({
						target: R || "_blank",
						rel: X || "noopener noreferrer"
					}, q), L)
				},
				W = (0, s.SU)(({
					theme: I
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, g.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: I.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: I.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), u.Ul),
				K = (0, s.SU)(() => ({
					display: "flex",
					flexDirection: (0, g.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var x = () => {
				const I = [D.d.root.pattern].some(R => (0, i.matchPath)(location.pathname, {
					path: R
				}));
				if ((0, n.PP)()) return r().createElement(w, null);
				if (I) return null;
				const L = new Date().getFullYear();
				return r().createElement(u.$_, {
					height: (0, g.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, r().createElement(K, null, r().createElement(W, null, r().createElement(u.Li, null, r().createElement(oe, {
					href: "https://support.cloudflare.com"
				}, (0, o.ZP)("common.support"))), r().createElement(u.Li, null, r().createElement(oe, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, o.ZP)("footer.system_status")))), r().createElement(u.Li, null, r().createElement(oe, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, o.ZP)("footer.careers"))), r().createElement(u.Li, null, r().createElement(oe, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, o.ZP)("footer.tos_reduced"))), r().createElement(u.Li, null, r().createElement(oe, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, o.ZP)("footer.security_issues"))), r().createElement(u.Li, null, r().createElement(oe, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, o.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(C, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", L, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(z, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const s = f => r().createElement(i.Z, f, (0, u.ZP)("error.forbidden"));
			y.Z = s
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(z, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return h
				},
				Z: function() {
					return ae
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = t.n(l),
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
				T = () => {
					const N = (0, p.Z)("super-add-button-copy-change"),
						V = [{
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
					switch (N) {
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
							}, ...V];
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
							}, ...V];
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
							}, ...V];
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
							}, ...V];
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
							}, ...V];
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
				v = [{
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
			var m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function O(N) {
				for (var V = 1; V < arguments.length; V++) {
					var M = arguments[V] != null ? Object(arguments[V]) : {},
						Y = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(M).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(M, ie).enumerable
					})), Y.forEach(function(ie) {
						E(N, ie, M[ie])
					})
				}
				return N
			}

			function E(N, V, M) {
				return V = w(V), V in N ? Object.defineProperty(N, V, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[V] = M, N
			}

			function w(N) {
				var V = D(N, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function D(N, V) {
				if (typeof N != "object" || N === null) return N;
				var M = N[Symbol.toPrimitive];
				if (M !== void 0) {
					var Y = M.call(N, V || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(N)
			}

			function A() {
				return A = Object.assign ? Object.assign.bind() : function(N) {
					for (var V = 1; V < arguments.length; V++) {
						var M = arguments[V];
						for (var Y in M) Object.prototype.hasOwnProperty.call(M, Y) && (N[Y] = M[Y])
					}
					return N
				}, A.apply(this, arguments)
			}

			function P(N, V) {
				if (N == null) return {};
				var M = B(N, V),
					Y, ie;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(N);
					for (ie = 0; ie < de.length; ie++) Y = de[ie], !(V.indexOf(Y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, Y) || (M[Y] = N[Y]))
				}
				return M
			}

			function B(N, V) {
				if (N == null) return {};
				var M = {},
					Y = Object.keys(N),
					ie, de;
				for (de = 0; de < Y.length; de++) ie = Y[de], !(V.indexOf(ie) >= 0) && (M[ie] = N[ie]);
				return M
			}
			const C = N => {
					let {
						title: V,
						trackingEvent: M,
						icon: Y,
						url: ie,
						description: de,
						disabled: Ee
					} = N, ge = P(N, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(S, A({
						to: !Ee && ie || "#",
						"aria-disabled": Ee,
						onClick: () => {
							g().sendEvent(M, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ge), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(i.J, {
						type: Y,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(u.ZC, {
						fontSize: 3
					}, r().createElement(d.cC, V)), r().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(d.cC, de)))))
				},
				S = (0, n.SU)(({
					theme: N
				}) => {
					const V = {
						cursor: "pointer",
						backgroundColor: (0, f.Yc)() ? N.colors.gray[8] : N.colors.gray[9],
						color: N.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: N.colors.background,
						color: N.colors.gray[2],
						fontSize: N.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': V,
						':focus-within:not([aria-disabled="true"])': O({}, V, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: N.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, m.Link);
			var U = C;

			function $() {
				return $ = Object.assign ? Object.assign.bind() : function(N) {
					for (var V = 1; V < arguments.length; V++) {
						var M = arguments[V];
						for (var Y in M) Object.prototype.hasOwnProperty.call(M, Y) && (N[Y] = M[Y])
					}
					return N
				}, $.apply(this, arguments)
			}

			function G(N) {
				for (var V = 1; V < arguments.length; V++) {
					var M = arguments[V] != null ? Object(arguments[V]) : {},
						Y = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(M).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(M, ie).enumerable
					})), Y.forEach(function(ie) {
						ne(N, ie, M[ie])
					})
				}
				return N
			}

			function ne(N, V, M) {
				return V = ee(V), V in N ? Object.defineProperty(N, V, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[V] = M, N
			}

			function ee(N) {
				var V = oe(N, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function oe(N, V) {
				if (typeof N != "object" || N === null) return N;
				var M = N[Symbol.toPrimitive];
				if (M !== void 0) {
					var Y = M.call(N, V || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(N)
			}

			function W(N, V) {
				if (N == null) return {};
				var M = K(N, V),
					Y, ie;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(N);
					for (ie = 0; ie < de.length; ie++) Y = de[ie], !(V.indexOf(Y) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, Y) || (M[Y] = N[Y]))
				}
				return M
			}

			function K(N, V) {
				if (N == null) return {};
				var M = {},
					Y = Object.keys(N),
					ie, de;
				for (de = 0; de < Y.length; de++) ie = Y[de], !(V.indexOf(ie) >= 0) && (M[ie] = N[ie]);
				return M
			}
			const F = "GLOBAL_ADD_DROPDOWN",
				x = (0, n.SU)(({
					theme: N
				}) => ({
					"background-color": N.colors.blue[5]
				}), s.zx),
				I = ({
					disableProducts: N
				}) => {
					const V = T();
					return (0, e.useEffect)(() => (g().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						g().sendEvent("close add product dropdown", {
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
					}, V.map(M => {
						const Y = M || {},
							{
								disableOn: ie,
								permissionCheck: de
							} = Y,
							Ee = W(Y, ["disableOn", "permissionCheck"]),
							ge = ie && N[ie],
							te = G({}, Ee, {
								disabled: ge
							});
						return de ? r().createElement(o.Z, {
							key: M.title.id,
							edit: de
						}, ({
							isEditable: be
						}) => be && r().createElement(U, te)) : r().createElement(U, $({
							key: M.url
						}, te))
					}))
				},
				L = ({
					disableProducts: N,
					topNavType: V
				}) => {
					const M = () => (0, c.tq)() || V === "icon-only" ? r().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(x, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : V === "text-icon" || V === "icon-only-with-add-button" ? r().createElement(s.zx, {
						type: "primary",
						mr: V === "text-icon" ? 2 : 3
					}, r().createElement(r().Fragment, null, r().createElement(i.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(d.cC, {
						id: "common.add"
					}))) : r().createElement(s.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(d.cC, {
						id: "common.add"
					}), " ", r().createElement(i.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(R, {
						role: "group",
						"data-testid": F
					}, r().createElement(_.Lt, {
						trigger: V === "baseline" ? r().createElement(X, null, r().createElement(i.J, {
							label: "plus",
							type: "plus"
						}), !(0, c.tq)() && r().createElement(r().Fragment, null, r().createElement(d.cC, {
							id: "common.add"
						}), " ", r().createElement(i.J, {
							label: "arrow",
							type: "caret-down"
						}))) : M(),
						menu: r().createElement(I, {
							disableProducts: N
						})
					}))
				},
				R = (0, n.SU)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				X = (0, n.SU)(({
					theme: N
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: N.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, f.Yc)() ? N.colors.gray[1] : N.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, f.Yc)() ? N.colors.gray[8] : N.colors.gray[9]
					}
				}), u.zx);
			var q = L,
				ae = q
		},
		"../react/app/components/LoadingSuspense.tsx": function(z, y, t) {
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
				f = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/common/components/EmptyPage.jsx"),
				l = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const g = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(g))
				}, [])
			}

			function o(T) {
				useEventListener(g, () => {
					window.setTimeout(T, 0)
				}, {
					target: window
				})
			}

			function a(...T) {
				const [v, m] = T;
				React.useLayoutEffect(v, m), o(v)
			}

			function _(T) {
				const [v, m] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const O = window.setTimeout(() => m(!0), T);
					return () => window.clearTimeout(O)
				}, []), v
			}
			const d = ({
				loadingTimeout: T = 1e3,
				stillLoadingTimeout: v = 9e3
			}) => {
				const m = _(T),
					O = _(v);
				if (n(), !m && !O) return r().createElement(c.Z, null);
				const E = O ? r().createElement(s.cC, {
					id: "common.still_loading"
				}) : m ? r().createElement(s.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(f.Z, {
					size: 5
				}, r().createElement(u.ZC, {
					mr: 3
				}, r().createElement(i.g, {
					size: "2x"
				})), E)
			};
			var h = ({
				children: T
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(d, null)
			}, T)
		},
		"../react/app/components/Persistence/api.ts": function(z, y, t) {
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
					return f
				},
				m6: function() {
					return o
				},
				n: function() {
					return g
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
				}, f = async (d, p) => {
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
				}, g = async d => {
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
		"../react/app/components/Persistence/hooks.ts": function(z, y, t) {
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
		"../react/app/components/Persistence/index.tsx": function(z, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return g
				},
				F3: function() {
					return n
				},
				lp: function() {
					return v
				},
				Z_: function() {
					return O
				},
				r7: function() {
					return U
				},
				Tv: function() {
					return F
				},
				yZ: function() {
					return E.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(u),
				f = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/app/components/Persistence/api.ts");
			const g = 10,
				n = 6;
			var o = t("../react/common/hooks/useActiveState.ts");

			function a(x) {
				for (var I = 1; I < arguments.length; I++) {
					var L = arguments[I] != null ? Object(arguments[I]) : {},
						R = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(L).filter(function(X) {
						return Object.getOwnPropertyDescriptor(L, X).enumerable
					})), R.forEach(function(X) {
						_(x, X, L[X])
					})
				}
				return x
			}

			function _(x, I, L) {
				return I = d(I), I in x ? Object.defineProperty(x, I, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[I] = L, x
			}

			function d(x) {
				var I = p(x, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function p(x, I) {
				if (typeof x != "object" || x === null) return x;
				var L = x[Symbol.toPrimitive];
				if (L !== void 0) {
					var R = L.call(x, I || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(x)
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
						hasEnabledSidebarNavGroupings: !0
					}
				},
				T = a({}, h, {
					isLoading: !0,
					remainingStarSlots: 10,
					isUpdatingFlags: !1,
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
						dismissTask: () => null
					}
				}),
				v = (0, e.createContext)(T),
				m = v.Consumer,
				O = ({
					children: x,
					onDarkModeChangeCb: I
				}) => {
					const [L, R] = (0, e.useState)(h), [X, q] = (0, e.useState)(T.isLoading), [ae, N] = (0, e.useState)(!1), V = (0, f.$8)(), M = (0, i.p4)(ge => (0, c.wH)(ge)), [, Y] = (0, o.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						V ? (0, l.yl)().then(ge => {
							if (ge) {
								var te;
								R(ge), Y(ge == null || (te = ge.flags) === null || te === void 0 ? void 0 : te.hasEnabledSecurityNavigation), s().identify({
									hasEnabledSecurityNavigation: ge.flags.hasEnabledSecurityNavigation
								}), I(ge.darkMode)
							}
						}).finally(() => q(!1)) : q(!1)
					}, [V]);
					const ie = (ge, te) => !!L.favorites.find(be => be.type === "zone" && be.name === ge && be.accountId === te),
						de = g - L.favorites.length,
						Ee = ge => L.favorites.filter(be => be.type === "zone" && be.accountId === ge).length < g;
					return r().createElement(v.Provider, {
						value: a({}, L, {
							isLoading: X,
							remainingStarSlots: de,
							isUpdatingFlags: ae,
							actions: {
								canAccountStarZone: Ee,
								isZoneStarred: ie,
								starZone: async (ge, te) => {
									var be;
									const De = !ie(ge, te),
										Le = Ee(te);
									if (De && !Le) {
										console.log("can not star zone - account is at limit");
										return
									}
									const xe = await (0, l.lt)(ge, te);
									s().sendEvent("click star zone", {
										isStarring: De,
										totalStarredZones: xe.filter(ke => ke.accountId === te && ke.type === "zone").length,
										totalZones: M == null || (be = M.paginationData) === null || be === void 0 ? void 0 : be.info.total_count
									}), R(a({}, L, {
										favorites: xe
									}))
								},
								toggleSidebarNavGroupings: async ge => {
									await (0, l.Sp)({
										hasEnabledSidebarNavGroupings: ge
									}), R(a({}, L, {
										flags: a({}, L.flags, {
											hasEnabledSidebarNavGroupings: ge
										})
									}))
								},
								toggleSecurityNavigation: async ge => {
									N(!0), await (0, l.Sp)({
										hasEnabledSecurityNavigation: ge
									}), s().identify({
										hasEnabledSecurityNavigation: ge
									}), N(!1), Y(ge), R(a({}, L, {
										flags: a({}, L.flags, {
											hasEnabledSecurityNavigation: ge
										})
									}))
								},
								setDarkMode: async ge => {
									const te = await (0, l.C8)(ge);
									R(te), I(te.darkMode)
								},
								logRouteVisited: async ge => {
									var te;
									const be = await (0, l.n)(ge);
									R((te = be) !== null && te !== void 0 ? te : a({}, L))
								},
								pinRecentRoute: async ge => {
									var te, be;
									const De = ge.accountId,
										Le = (te = L == null || (be = L.pinnedItems) === null || be === void 0 ? void 0 : be[De]) !== null && te !== void 0 ? te : [],
										ke = Le.some(Qe => Qe.url === ge.url) ? Le.filter(Qe => Qe.url !== ge.url) : [...Le, ge];
									R(a({}, L, {
										pinnedItems: a({}, L.pinnedItems, {
											[De]: ke
										})
									})), (0, l.LC)(ge)
								},
								viewChange: async ge => {
									N(!0);
									const te = await (0, l.m6)(ge);
									R(a({}, L, {
										viewedChanges: te
									})), N(!1)
								},
								dismissTask: async (ge, te) => {
									const be = await (0, l.Mn)(ge, te);
									R(a({}, L, {
										dismissedTasks: be
									}))
								}
							}
						})
					}, x)
				};
			var E = t("../react/app/components/Persistence/hooks.ts"),
				w = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				D = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function A() {
				return A = Object.assign ? Object.assign.bind() : function(x) {
					for (var I = 1; I < arguments.length; I++) {
						var L = arguments[I];
						for (var R in L) Object.prototype.hasOwnProperty.call(L, R) && (x[R] = L[R])
					}
					return x
				}, A.apply(this, arguments)
			}

			function P(x, I) {
				if (x == null) return {};
				var L = B(x, I),
					R, X;
				if (Object.getOwnPropertySymbols) {
					var q = Object.getOwnPropertySymbols(x);
					for (X = 0; X < q.length; X++) R = q[X], !(I.indexOf(R) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, R) || (L[R] = x[R]))
				}
				return L
			}

			function B(x, I) {
				if (x == null) return {};
				var L = {},
					R = Object.keys(x),
					X, q;
				for (q = 0; q < R.length; q++) X = R[q], !(I.indexOf(X) >= 0) && (L[X] = x[X]);
				return L
			}
			const C = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var U = x => {
					let {
						isStarred: I,
						size: L = 16
					} = x, R = P(x, ["isStarred", "size"]);
					const X = C[(0, w.Yc)() ? "dark" : "light"];
					return r().createElement(D.J, A({
						type: I ? "star" : "star-outline",
						color: I ? X.gold : X.gray,
						size: L
					}, R))
				},
				$ = t("../node_modules/@cloudflare/elements/es/index.js");

			function G(x) {
				for (var I = 1; I < arguments.length; I++) {
					var L = arguments[I] != null ? Object(arguments[I]) : {},
						R = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(L).filter(function(X) {
						return Object.getOwnPropertyDescriptor(L, X).enumerable
					})), R.forEach(function(X) {
						ne(x, X, L[X])
					})
				}
				return x
			}

			function ne(x, I, L) {
				return I = ee(I), I in x ? Object.defineProperty(x, I, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[I] = L, x
			}

			function ee(x) {
				var I = oe(x, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function oe(x, I) {
				if (typeof x != "object" || x === null) return x;
				var L = x[Symbol.toPrimitive];
				if (L !== void 0) {
					var R = L.call(x, I || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(x)
			}
			const W = {
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
			var F = (0, e.forwardRef)(({
				featurePreview: x = !1,
				isStarred: I,
				onClickFn: L,
				isDisabled: R,
				testId: X,
				buttonText: q,
				size: ae = "large",
				variant: N = "pill"
			}, V) => {
				const [M, Y] = (0, e.useState)(!1), ie = W[(0, w.Yc)() ? "dark" : "light"][I && !x ? "active" : "default"], de = G({}, ae === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ae === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ae === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), Ee = {
					pill: "50vh",
					button: 4
				};
				return r().createElement($.zx, {
					onMouseEnter: () => Y(!0),
					onMouseLeave: () => Y(!1),
					innerRef: V,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: de.paddingRight,
					gap: 1,
					pl: de.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: Ee[N],
					border: "1px solid",
					cursor: x || R ? "default" : "pointer",
					backgroundColor: M ? ie.bgHover : ie.bg,
					color: ie.text,
					borderColor: ie.border,
					onClick: L,
					opacity: R ? .5 : 1,
					disabled: R,
					fontSize: de.fontSize,
					height: de.height,
					"data-testid": X
				}, r().createElement(U, {
					isStarred: x ? !1 : I,
					size: de.starIconSize
				}), q)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				iY: function() {
					return O
				},
				us: function() {
					return $
				},
				wB: function() {
					return E
				},
				gw: function() {
					return oe
				},
				dL: function() {
					return P
				},
				IU: function() {
					return A
				},
				Wq: function() {
					return ne
				},
				fO: function() {
					return G
				},
				zJ: function() {
					return U
				},
				o_: function() {
					return S
				},
				Id: function() {
					return K
				},
				jq: function() {
					return W
				},
				hv: function() {
					return D
				},
				$n: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				r = t("../react/common/components/AccessCheck/index.ts"),
				i = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/common/selectors/entitlementsSelectors.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				f = t("../react/utils/zoneLevelAccess.ts"),
				c = t("../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx"),
				l = t("../react/pages/home/domain-registration/selectors.ts"),
				g = t("../react/pages/images/selectors.ts");
			const n = "r2_migrator_waitlist",
				o = "r2migrator",
				a = "r2",
				_ = "r2_storage_migrator",
				d = "r2_storage_migrator",
				p = F => getAccountEntitlement(F, "r2.enabled"),
				h = F => Boolean((0, s.Le)(F, _, n)),
				T = F => Boolean(getAccountFlipperFlagsChanges(F, d, o));
			var v = t("../react/pages/stream/selectors.ts");
			const m = F => !!(0, f.b)(F),
				O = F => m(F) ? (0, r.hT)(F) : !0,
				E = (F, x, I, L = "read") => {
					const R = (0, s.nA)(F);
					return m(F) ? (0, r.WL)(F, (0, r.W9)(I, r.ZZ[L]), (0, r.j)(R == null ? void 0 : R.id)) : (0, i.Yj)(F)(x)[L]
				},
				w = (F, x, I, L = "read") => {
					const R = (0, s.nA)(F),
						X = r.zs.includes(I);
					return m(F) ? (0, r.WL)(F, X ? I : (0, r.my)(I, r.ZZ[L === "edit" ? "update" : L]), (0, r.j)(R == null ? void 0 : R.id)) : (0, i.Yj)(F)(x)[L === "update" ? "edit" : L]
				},
				D = F => !!(0, v._Q)(F),
				A = F => (0, g.pT)(F),
				P = F => (0, g.pT)(F) && (0, g.GH)(F),
				B = F => sourcingKitEnabledSelector(F),
				C = F => !!r2EnabledSelector(F),
				S = F => h(F),
				U = F => (0, u.$f)(F, "rulesets.magic_transit_allowed"),
				$ = F => (0, u.$f)(F, "flowtrackd.magic_custom_config_allowed"),
				G = F => (0, u.$f)(F, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				ne = F => (0, i.Le)(F, "ddos_protection", "l4_rulesets"),
				ee = F => hasAccountEntitlements(F, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				oe = F => (0, l.HO)(F),
				W = F => !(0, u.yD)(F) && !!w(F, "ssl", "ssl.cert"),
				K = F => {
					const x = (0, s.nA)(F),
						I = (0, i.D0)(F),
						L = !!(0, e.z1)("zone-level-rum")(F);
					return !!I && (0, r.WL)(F, (0, r.jX)("rum.analytics", r.ZZ.read), (0, r.L8)(I.id)) && (x == null ? void 0 : x.status) === "active" && L && !(0, c.s)(F)
				}
		},
		"../react/app/components/SomethingWrong.jsx": function(z, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(i),
				s = t("../../../../node_modules/prop-types/index.js"),
				f = t.n(s),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t.n(c),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(g),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				_ = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				d = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				h = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				T = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = t.n(T),
				m = t("../react/common/actions/membershipActions.ts"),
				O = t("../react/utils/url.ts"),
				E = t("../react/app/components/Footer.tsx");

			function w(W) {
				for (var K = 1; K < arguments.length; K++) {
					var F = arguments[K] != null ? Object(arguments[K]) : {},
						x = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(F).filter(function(I) {
						return Object.getOwnPropertyDescriptor(F, I).enumerable
					})), x.forEach(function(I) {
						D(W, I, F[I])
					})
				}
				return W
			}

			function D(W, K, F) {
				return K = A(K), K in W ? Object.defineProperty(W, K, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[K] = F, W
			}

			function A(W) {
				var K = P(W, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function P(W, K) {
				if (typeof W != "object" || W === null) return W;
				var F = W[Symbol.toPrimitive];
				if (F !== void 0) {
					var x = F.call(W, K || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(W)
			}
			const B = (0, o.LM)(({
					type: W
				}) => ({
					height: W !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				C = (0, o.LM)(({
					theme: W,
					margin: K,
					size: F = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: W.colors.gray[3],
					height: K ? "auto" : "100%",
					padding: K ? 0 : W.space[F > 1 ? F - 2 : 0],
					margin: K,
					justifyContent: "center",
					alignItems: "center"
				})),
				S = (0, o.LM)(() => ({
					textAlign: "left"
				})),
				U = (0, o.LM)(() => ({
					textAlign: "right"
				})),
				$ = (0, o.LM)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[6]
				})),
				G = (0, o.LM)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[4]
				})),
				ne = (0, o.LM)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[3]
				})),
				ee = (0, o.LM)(({
					theme: W
				}) => ({
					width: "100%",
					height: 125,
					marginTop: W.space[4],
					padding: W.space[2]
				}), "textarea");
			class oe extends r().Component {
				constructor(...K) {
					super(...K);
					D(this, "state", {
						value: "",
						submitted: !1
					}), D(this, "handleTextareaChange", F => {
						this.setState({
							value: F.target.value
						})
					}), D(this, "sendErrToSentry10", async () => {
						try {
							var F, x, I, L;
							const R = ((F = window) === null || F === void 0 || (x = F.bootstrap) === null || x === void 0 || (I = x.data) === null || I === void 0 || (L = I.user) === null || L === void 0 ? void 0 : L.id) || "Unknown",
								X = this.props.eventId || _.eW(),
								q = {
									name: R,
									email: `${R}@userid.com`,
									comments: this.state.value,
									eventId: X,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: w({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(q)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (R) {
							console.error(R)
						}
					}), D(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), D(this, "renderContent", F => r().createElement(g.I18n, null, x => r().createElement(B, {
						type: F
					}, r().createElement(C, null, r().createElement(S, null, r().createElement($, null, x.t("error.internal_issues")), r().createElement(G, null, x.t("error.help_us")), r().createElement(ee, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: I => this.handleTextareaChange(I),
						disabled: this.state.submitted,
						placeholder: x.t("error.give_feedback")
					}), r().createElement(U, null, !this.state.submitted && r().createElement(a.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, x.t("common.submit")), this.state.submitted && r().createElement(ne, null, x.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: K,
						sentryTag: F,
						membershipsList: x
					} = this.props;
					console.error(`SomethingWrong: ${K}`);
					let I = "";
					const L = (0, O.e1)();
					if (L) {
						var R;
						const q = await x({
								parameters: {
									status: "accepted"
								}
							}),
							ae = q == null || (R = q.find(N => N.id === L)) === null || R === void 0 ? void 0 : R.roles;
						ae && ae.length && (I = ae.join(", "))
					}
					const X = `ErrorBoundary - ${K}`;
					d.Tb(X, {
						tags: {
							errorBoundary: F,
							normalizedPath: (0, O.Fl)(window.location.pathname),
							roles: I.length ? I : void 0
						}
					}), v().sendEvent("something wrong", {
						error: K,
						roles: I.length ? I : void 0
					})
				}
				render() {
					const {
						type: K
					} = this.props;
					return K === "fullscreen" ? r().createElement("div", null, r().createElement(p.h4, null, r().createElement(i.Link, {
						to: "/"
					}, r().createElement(h.TR, null))), this.renderContent(K), r().createElement(E.Z, null)) : this.renderContent(K)
				}
			}
			oe.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string,
				sentryTag: f().string,
				membershipsList: f().func
			}, y.Z = (0, c.connect)(() => ({}), {
				membershipsList: m.YT
			})(oe)
		},
		"../react/app/providers/storeContainer.js": function(z, y, t) {
			"use strict";
			t.d(y, {
				bh: function() {
					return U
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				i = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				s = t("../../../../node_modules/redux-persist/es/index.js"),
				f = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				l = t("../react/app/redux/normalizer.js"),
				g = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				o = t("../react/app/reducerRegistry.js"),
				a = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				_ = t("../react/common/sagas/index.js"),
				d = t("../react/app/redux/processActionMiddleware.js"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				h = t("../../../../node_modules/is-promise/index.js"),
				T = t.n(h);

			function v($) {
				for (var G = 1; G < arguments.length; G++) {
					var ne = arguments[G] != null ? Object(arguments[G]) : {},
						ee = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(ne).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(ne, oe).enumerable
					})), ee.forEach(function(oe) {
						m($, oe, ne[oe])
					})
				}
				return $
			}

			function m($, G, ne) {
				return G = O(G), G in $ ? Object.defineProperty($, G, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[G] = ne, $
			}

			function O($) {
				var G = E($, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function E($, G) {
				if (typeof $ != "object" || $ === null) return $;
				var ne = $[Symbol.toPrimitive];
				if (ne !== void 0) {
					var ee = ne.call($, G || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)($)
			}
			const w = {
					key: "cf-redux-store",
					storage: f.Z,
					whitelist: ["accountAccess", "invite"]
				},
				D = (0, a.ZP)(),
				P = [({
					dispatch: $
				}) => G => ne => T()(ne) ? ne.then(ee => $(ee)) : G(ne), D, u.Z, d.Z, l.qR],
				B = $ => (0, s.Wq)(w, v({}, c.Z, $));

			function C() {
				const $ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ne = e.compose((0, e.applyMiddleware)(...P), g.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					ee = {},
					oe = (0, e.createStore)(B(o.Z.getReducers()), ee, ne);
				D.run(_.Z), (0, s.p5)(oe);
				const K = (t.g.bootstrap || {}).data || {};
				return oe.dispatch((0, p.mW)("user", K.user)), oe
			}
			let S;
			o.Z.setChangeListener($ => {
				var G;
				S && ((G = S) === null || G === void 0 ? void 0 : G.replaceReducer) && (S.replaceReducer(B($)), (0, s.p5)(S))
			});

			function U() {
				return S || (S = C()), S
			}
		},
		"../react/app/redux/index.ts": function(z, y, t) {
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
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const i = () => (0, e.useStore)(),
				u = () => i().getState(),
				s = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(z, y, t) {
			"use strict";
			t.d(y, {
				$J: function() {
					return a
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return g
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
						T = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(h).filter(function(v) {
						return Object.getOwnPropertyDescriptor(h, v).enumerable
					})), T.forEach(function(v) {
						s(d, v, h[v])
					})
				}
				return d
			}

			function s(d, p, h) {
				return p = f(p), p in d ? Object.defineProperty(d, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = h, d
			}

			function f(d) {
				var p = c(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var T = h.call(d, p || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const l = u({}, r),
				g = (d, p, h, T = {}) => {
					const v = d === "delete" ? "del" : d.toLowerCase();
					return h && v !== "del" && (T.body = h), l[v](p, T)
				},
				n = (d, p) => (d.meta.params = p, d),
				o = (d, p, h, T, {
					body: v = {}
				}) => {
					const {
						result: m,
						messages: O,
						result_info: E
					} = v, w = Object.values(p);
					if (d.meta.method === "delete") {
						const D = w[w.length - 1];
						d.meta.id = typeof D == "object" ? D.id : D
					}
					return d.payload = m, O && (d.meta.messages = O), w.length && (d.meta.params = p), E && (d.meta.paginationData = {
						info: E,
						actionParameters: w,
						options: h[0],
						insertionOffset: 0
					}), d
				},
				a = (d, p, h, T, v) => (d.payload = v && v.body && v.body.errors, d.meta.messages = v && v.body && v.body.messages, d.meta.params = p, d.apiError = v, d);

			function _(d, p, h, T) {
				const v = (0, e.RM)(d, p, h, T).apiFetch(g).on("start", n).on("success", o).on("error", a),
					m = v.mock;
				return v.mock = O => (m((...E) => {
					const w = O(...E);
					return w && typeof w == "object" && "result" in w ? w : {
						result: w
					}
				}), v), v
			}
		},
		"../react/app/redux/normalizer.js": function(z, y, t) {
			"use strict";
			t.d(y, {
				P1: function() {
					return g
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
				f = t.n(s);
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
				g = (...o) => (0, u.P1)(c, l, ...o),
				n = (0, u.QB)(c)
		},
		"../react/app/redux/utils.ts": function(z, y, t) {
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
			const r = u => (s, f, c) => (0, e.SC)(s, f, c, {
					hideErrorAlert: !0
				}).catch(u),
				i = u => s => {
					if (s.status === u) return s;
					throw s
				}
		},
		"../react/common/actionTypes.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return c
				},
				Li: function() {
					return g
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
				f = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				l = "CLEAR_ACTIVE",
				g = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(a) {
				return a.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", a.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", a.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", a.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", a.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", a.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", a.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", a.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", a.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", a
			}({})
		},
		"../react/common/actions/activeActions.ts": function(z, y, t) {
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
		"../react/common/actions/membershipActions.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return a
				},
				YT: function() {
					return g
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
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(p).filter(function(T) {
						return Object.getOwnPropertyDescriptor(p, T).enumerable
					})), h.forEach(function(T) {
						u(_, T, p[T])
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
				var d = f(_, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function f(_, d) {
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
				g = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (..._) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: _
				}),
				a = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", l)
		},
		"../react/common/actions/modalActions.ts": function(z, y, t) {
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

			function i(s, f, c = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: s,
						props: f
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
		"../react/common/actions/notificationsActions.ts": function(z, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				add: function() {
					return s
				},
				error: function() {
					return g
				},
				info: function() {
					return c
				},
				success: function() {
					return f
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

			function f(n, o) {
				return s("success", n, o)
			}

			function c(n, o) {
				return s("info", n, o)
			}

			function l(n, o) {
				return s("warning", n, o)
			}

			function g(n, o) {
				return s("error", n, o)
			}
		},
		"../react/common/actions/userActions.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				BT: function() {
					return c
				},
				Ut: function() {
					return T
				},
				V_: function() {
					return v
				},
				Y9: function() {
					return p
				},
				Z0: function() {
					return O
				},
				mp: function() {
					return h
				},
				r3: function() {
					return m
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/app/redux/utils.ts");

			function i(E) {
				for (var w = 1; w < arguments.length; w++) {
					var D = arguments[w] != null ? Object(arguments[w]) : {},
						A = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(D).filter(function(P) {
						return Object.getOwnPropertyDescriptor(D, P).enumerable
					})), A.forEach(function(P) {
						u(E, P, D[P])
					})
				}
				return E
			}

			function u(E, w, D) {
				return w = s(w), w in E ? Object.defineProperty(E, w, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[w] = D, E
			}

			function s(E) {
				var w = f(E, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function f(E, w) {
				if (typeof E != "object" || E === null) return E;
				var D = E[Symbol.toPrimitive];
				if (D !== void 0) {
					var A = D.call(E, w || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(E)
			}
			const c = (0, e.C)("user").get`/user`,
				l = (0, e.C)("user").patch`/user`,
				g = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/two_factor_authentication`,
				_ = (0, e.C)("user").delete`/user/two_factor_authentication`,
				d = (0, e.C)("user").put`/user/email`;

			function p(...E) {
				return d(...E)
			}
			const h = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(E => i({}, E, {
					body: i({}, E.body, {
						result: {}
					})
				}))),
				v = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				m = (0, e.C)("userDetails").get`/user/details`,
				O = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(z, y, t) {
			"use strict";
			t.d(y, {
				we: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t("webpack/sharing/consume/default/react/react"),
				i = t.n(r),
				u = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				s = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t("../react/utils/url.ts"),
				c = t("../../../../node_modules/swr/core/dist/index.mjs");
			const l = async () => {
				var A;
				const P = await fetch("/api/v4/user/iam/dash-authz-eval-roles");
				if (!P.ok) throw new Error(`Failed to fetch authz eval roles: ${P.status}`);
				const B = await P.json();
				if (((A = B.result) === null || A === void 0 ? void 0 : A.roles) === void 0 || !(0, e.isArray)(B.result.roles)) throw new Error(`Unexpected authz eval roles API response shape: ${JSON.stringify(B.result)}`);
				return B.result.roles
			};

			function g() {
				const {
					data: A,
					error: P,
					isLoading: B
				} = (0, c.ZP)("user/iam/dash-authz-eval-roles", l, {
					dedupingInterval: 24 * 60 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 24 * 60 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					roles: A || null,
					isLoading: B,
					error: (P == null ? void 0 : P.message) || null
				}
			}
			var n = t("../react/common/components/AccessCheck/useAccountParentOrgs.ts"),
				o = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");

			function a(A) {
				for (var P = 1; P < arguments.length; P++) {
					var B = arguments[P] != null ? Object(arguments[P]) : {},
						C = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(B).filter(function(S) {
						return Object.getOwnPropertyDescriptor(B, S).enumerable
					})), C.forEach(function(S) {
						_(A, S, B[S])
					})
				}
				return A
			}

			function _(A, P, B) {
				return P = d(P), P in A ? Object.defineProperty(A, P, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[P] = B, A
			}

			function d(A) {
				var P = p(A, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function p(A, P) {
				if (typeof A != "object" || A === null) return A;
				var B = A[Symbol.toPrimitive];
				if (B !== void 0) {
					var C = B.call(A, P || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(A)
			}
			const h = new Set,
				T = i().createContext(void 0),
				v = 60 * 1e3,
				m = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]);

			function O({
				children: A,
				userID: P,
				isUserInDSR: B
			}) {
				const [C, S] = (0, r.useState)({
					policies: null,
					isLoading: !0,
					isLoadingSkippedByUserID: !1,
					error: null,
					lastFetchedAt: null
				}), U = (0, r.useCallback)(async (K = !1) => {
					var F;
					const x = !!P,
						I = m.has((F = P) !== null && F !== void 0 ? F : "");
					if (!(x && !I && (K || !C.lastFetchedAt || Date.now() - C.lastFetchedAt > v))) {
						S(q => a({}, q, {
							isLoadingSkippedByUserID: I
						}));
						return
					}
					S(q => a({}, q, {
						isLoading: !0
					}));
					try {
						var R, X;
						const q = await fetch("/api/v4/user/iam/policies");
						if (!q.ok) throw new Error(`Failed to fetch authz policies: ${q.status}`);
						const ae = (R = await q.json()) === null || R === void 0 || (X = R.result) === null || X === void 0 ? void 0 : X.policies;
						if (!ae || !(0, e.isArray)(ae) || ae.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(ae)}`);
						S({
							policies: ae,
							isLoading: !1,
							isLoadingSkippedByUserID: !1,
							error: null,
							lastFetchedAt: Date.now()
						})
					} catch (q) {
						const ae = q instanceof Error ? q.message : JSON.stringify(q);
						S(N => a({}, N, {
							isLoading: !1,
							error: ae
						}))
					}
				}, [P, C.lastFetchedAt]);
				(0, r.useEffect)(() => {
					U()
				}, [U]);
				const $ = (0, s.useHistory)(),
					G = (0, f.uW)($.location.pathname),
					ne = (0, n.I)(G),
					ee = g();
				(0, o.k)(G);
				const oe = {
						roles: ee.roles,
						isLoading: ee.isLoading,
						error: ee.error
					},
					W = {
						isUserInDSR: B,
						contextAccountTag: G,
						contextAccountOrgsState: ne,
						allRolesState: oe,
						policiesState: C,
						refreshPolicies: () => U(!0),
						reportSentryException: w
					};
				return i().createElement(T.Provider, {
					value: W
				}, A)
			}
			const E = () => {
					const A = useContext(T);
					if (!A) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
					return A.refreshPolicies
				},
				w = (A, P, B) => {
					const {
						parentComponent: C,
						stackSummary: S
					} = D(A), U = `${P.component}->${S}->${P.issue}`;
					h.has(U) || (h.add(U), u.Tb(A, {
						tags: a({
							parentComponent: C
						}, P),
						extra: a({
							stackSummary: S
						}, B),
						level: "error"
					}))
				},
				D = A => {
					var P;
					const C = (A.stack || "").split(`
`),
						S = [];
					for (const $ of C) {
						const G = [/at (\w+)\s+\(/, /at Object\.(\w+)/, /(\w+)@/, /\/(\w+)\.tsx?:/, /\/(\w+)\.jsx?:/];
						for (const ne of G) {
							const ee = $.match(ne);
							if (ee && ee[1] && !["Object", "eval", "anonymous"].includes(ee[1])) {
								S.push(ee[1]);
								break
							}
						}
					}
					const U = [...new Set(S)].filter($ => !["useIsAuthorized", "renderWithHooks", "updateFunctionComponent"].includes($)).slice(0, 5);
					return {
						parentComponent: (P = U[0]) !== null && P !== void 0 ? P : "undefined",
						stackSummary: U.join(" \u2192 ")
					}
				}
		},
		"../react/common/components/AccessCheck/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				E1: function() {
					return r
				},
				L8: function() {
					return n
				},
				W9: function() {
					return g
				},
				ZZ: function() {
					return f
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
			let f = function(a) {
				return a.read = "read", a.list = "list", a.create = "create", a.update = "update", a.delete = "delete", a.sign = "sign", a.refresh = "refresh", a
			}({});
			const c = (a, _) => `${r}${a?a+".":""}${_}`,
				l = (a, _) => `${u}${a?a+".":""}${_}`,
				g = (a, _) => `${i}${a}.${_}`,
				n = (a = "") => `${r}${a}`,
				o = (a = "") => `${u}${a}`
		},
		"../react/common/components/AccessCheck/index.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				zs: function() {
					return c.zs
				},
				hT: function() {
					return s.hT
				},
				WL: function() {
					return s.WL
				},
				kd: function() {
					return s.kd
				},
				ZP: function() {
					return u
				},
				jX: function() {
					return c.jX
				},
				L8: function() {
					return c.L8
				},
				W9: function() {
					return c.W9
				},
				my: function() {
					return c.my
				},
				j: function() {
					return c.j
				},
				ZZ: function() {
					return c.ZZ
				},
				xk: function() {
					return e.Z
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts"),
				u = ({
					legacyPermission: l,
					canAccess: g,
					children: n,
					render: o
				}) => {
					const a = !!(0, r.P)();
					let _;
					typeof g == "boolean" && g !== void 0 && a ? _ = {
						read: g,
						list: g,
						create: g,
						update: g,
						delete: g,
						sign: g
					} : _ = (0, e.Z)(l);
					const d = o || n;
					return d ? d(_) : null
				},
				s = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				f = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				c = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(z, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/pages/zone-versioning/selectors.ts");

			function f(c) {
				const {
					read: l,
					edit: g
				} = (0, i.p4)(u.Yj)(c);
				let n = g;
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
			y.Z = f
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				WL: function() {
					return _
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
				f = t("../react/common/selectors/accountSelectors.ts");
			const c = {
					allow: "allow",
					deny: "deny"
				},
				l = 0,
				g = 1,
				n = 2,
				o = 3;

			function a(A, P, B, C) {
				let S = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					U;
				for (U in S) S[U] = _(A, `${P}.${U}`, B, C);
				return S
			}

			function _(A, P, B, C) {
				var S;
				if (d(P) && !p(P)) {
					const ee = (0, s.G)(A);
					if (ee == null ? void 0 : ee.isLocked) return !1
				}
				const U = (S = (0, f.D0)(A)) === null || S === void 0 ? void 0 : S.id,
					$ = U ? [`com.cloudflare.api.account.${U}`] : void 0,
					G = (0, i.vq)(U);
				return !!T(A, G, P, B, C || $)
			}

			function d(A) {
				return ![u.ZZ.read, u.ZZ.list].some(P => A.endsWith(P))
			}

			function p(A) {
				return A.includes("zone.versioning")
			}

			function h(A) {
				const P = (0, f.Ko)(A);
				let B = !1;
				return P == null || P.forEach(C => {
					C.access === c.allow && C.permission_groups.forEach(S => {
						var U;
						(S == null || (U = S.meta) === null || U === void 0 ? void 0 : U.scopes) === u.u1 && (B = !0)
					})
				}), B
			}

			function T(A, P, B, C, S) {
				const U = (0, f.Ko)(A),
					$ = {};
				U == null || U.forEach(oe => {
					var W;
					const K = oe.access;
					let F = l;
					if (B && oe.permission_groups.forEach(x => {
							var I, L;
							P == null || (I = P.find(R => R.id === x.id)) === null || I === void 0 || (L = I.permissions) === null || L === void 0 || L.forEach(R => {
								F = Math.max(F, m(R, B))
							})
						}), F !== l && !!C) {
						let x = l;
						oe.resource_groups.forEach(I => {
							x = Math.max(x, E(I.scope, C, S))
						}), F = x === l ? x : F + x
					}($ == null || (W = $[K]) === null || W === void 0 ? void 0 : W[F]) || (0, e.Z)($, [K, F], []), $[K][F].push(oe)
				});
				const G = $[c.allow] && Object.keys($[c.allow]).map(oe => parseInt(oe)),
					ne = $[c.deny] && Object.keys($[c.deny]).map(oe => parseInt(oe)),
					ee = Math.max.apply(Math, G);
				return ee === l || Math.max.apply(Math, ne) >= ee ? null : $[c.allow][ee]
			}

			function v(A, P, B, C, S) {
				const U = {};
				A == null || A.forEach(ee => {
					var oe;
					const W = ee.access;
					let K = l;
					if (B && ee.roles.forEach(F => {
							var x;
							const I = P == null ? void 0 : P.find(L => L.id === F.id);
							I == null || (x = I.permissions) === null || x === void 0 || x.forEach(L => {
								K = Math.max(K, m({
									key: L,
									id: "irrelevant"
								}, B))
							})
						}), K !== l && !!C) {
						let F = l;
						ee.scopes.forEach(x => {
							F = Math.max(F, E(x, C, S))
						}), K = F === l ? F : K + F
					}(U == null || (oe = U[W]) === null || oe === void 0 ? void 0 : oe[K]) || set(U, [W, K], []), U[W][K].push(ee)
				});
				const $ = U[c.allow] && Object.keys(U[c.allow]).map(ee => parseInt(ee)),
					G = U[c.deny] && Object.keys(U[c.deny]).map(ee => parseInt(ee)),
					ne = Math.max.apply(Math, $);
				return ne === l || Math.max.apply(Math, G) >= ne ? null : U[c.allow][ne]
			}

			function m(A, P) {
				if (A.key === P || O(A.key, P)) return o;
				for (const B of (A == null ? void 0 : A.implies) || []) {
					let C = m(B, P);
					if (C > l) return C
				}
				return l
			}

			function O(A, P) {
				const B = P == null ? void 0 : P.lastIndexOf(".");
				return B === -1 ? !1 : (P == null ? void 0 : P.substring(0, B)) + ".*" === A
			}

			function E(A, P, B) {
				var C;
				let S = l;
				if (A == null || (C = A.objects) === null || C === void 0 || C.forEach(U => {
						S = Math.max(S, D(U, P))
					}), S === l) return S;
				if (A.key !== "*") switch (!0) {
					case w(A.key, B) > l:
					case (!(B == null ? void 0 : B.length) && S === o):
						break;
					case (S === g && w(A.key, [P]) > l):
						S = w(A.key, [P]);
						break;
					default:
						return l
				}
				for (const U of A.subset_of || [])
					if (w(U.key, B) === l) return l;
				return S
			}

			function w(A, P = []) {
				for (const B of P || []) {
					if (A === B) return o;
					if (O(A, B)) return n
				}
				return l
			}

			function D(A, P) {
				const B = (0, r.Z)(A) ? A : A.key;
				return B === P ? o : B === "*" || A === "*" ? g : O(B, P) ? n : l
			}
		},
		"../react/common/components/AccessCheck/useAccountParentOrgs.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				I: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/swr/core/dist/index.mjs");
			const u = async f => {
				var c;
				const l = await fetch(`/api/v4/accounts/${f}/organizations`);
				if (!l.ok) throw new Error(`Failed to fetch account parent Orgs: ${l.status}`);
				const g = (c = await l.json()) === null || c === void 0 ? void 0 : c.result;
				if (g === void 0 || !(0, e.isArray)(g)) throw new Error(`Unexpected parent Orgs API response shape: ${JSON.stringify(g)}`);
				const n = g.map(a => {
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

			function s(f) {
				const {
					data: c,
					error: l,
					isLoading: g
				} = (0, i.ZP)(f ? `account-organizations-${f}` : null, () => u(f), {
					dedupingInterval: 5 * 60 * 1e3,
					revalidateOnFocus: !0,
					focusThrottleInterval: 5 * 60 * 1e3,
					revalidateOnReconnect: !1
				});
				return {
					orgScopes: c || null,
					isLoading: g,
					error: (l == null ? void 0 : l.message) || null
				}
			}
		},
		"../react/common/components/AccessCheck/useAccountPermissionGroups.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				k: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../react/pages/home/members/utils.ts"),
				u = t("../../../../node_modules/lodash/lodash.js"),
				s = t.n(u),
				f = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(f),
				l = t("../react/utils/url.ts");

			function g(d) {
				for (var p = 1; p < arguments.length; p++) {
					var h = arguments[p] != null ? Object(arguments[p]) : {},
						T = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(h).filter(function(v) {
						return Object.getOwnPropertyDescriptor(h, v).enumerable
					})), T.forEach(function(v) {
						n(d, v, h[v])
					})
				}
				return d
			}

			function n(d, p, h) {
				return p = o(p), p in d ? Object.defineProperty(d, p, {
					value: h,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = h, d
			}

			function o(d) {
				var p = a(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function a(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var T = h.call(d, p || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}

			function _(d) {
				const [p, h] = (0, e.useState)({
					permissionGroups: null,
					isLoading: !1,
					error: null
				}), T = (0, f.useHistory)(), v = (0, l.uW)(T.location.pathname);
				d || (d = v);
				const m = (0, e.useCallback)(async () => {
					if (!d) return;
					const O = (0, i.Hf)(d);
					if (O.length > 0) {
						h({
							permissionGroups: O,
							isLoading: !1,
							error: null
						});
						return
					}
					h({
						permissionGroups: null,
						isLoading: !0,
						error: null
					});
					try {
						const E = await fetch(`/api/v4/accounts/${d}/iam/permission_groups?depth=2&permissions=true`);
						if (!E.ok) throw new Error(`Failed to fetch permission groups: ${E.status}`);
						const w = await E.json(),
							D = w == null ? void 0 : w.result;
						if (D === void 0 || !(0, u.isArray)(D)) throw new Error(`Unexpected permission groups API response shape: ${JSON.stringify(D)}`);
						(0, i.LX)(d, D), (0, i.rC)(d, D), h({
							permissionGroups: D,
							isLoading: !1,
							error: null
						})
					} catch (E) {
						const w = E instanceof Error ? E.message : JSON.stringify(E);
						h(D => g({}, D, {
							isLoading: !1,
							error: w
						}))
					}
				}, [d]);
				return (0, e.useEffect)(() => {
					m()
				}, [m]), [p.permissionGroups, p.isLoading, p.error]
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(z, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				i = t("../react/common/selectors/accountSelectors.ts");
			const u = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const c = f.slice(1).split(":");
					if (c.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: c[0],
						value: c[1]
					}
				},
				s = (f, c) => {
					const {
						resourceId: l,
						accountId: g,
						legacyPermission: n
					} = c;
					let {
						read: o,
						edit: a
					} = c;
					const _ = {};
					n && (a = `#${n}:edit`, o = `#${n}:read`);
					const d = l || g;
					if (o) {
						const p = Array.isArray(o) ? o : [o];
						_.isReadable = p.some(h => {
							const T = u(h);
							return (0, i.DT)(f, d, v => !!(v[T.key] && v[T.key][T.value]))
						})
					}
					if (a) {
						const p = Array.isArray(a) ? a : [a];
						_.isEditable = p.some(h => {
							const T = u(h);
							return (0, i.DT)(f, d, v => !!(v[T.key] && v[T.key][T.value]))
						})
					}
					return _
				};
			y.Z = (0, e.connect)(s)
		},
		"../react/common/components/AccessControl/index.js": function(z, y, t) {
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
						f(o, p, _[p])
					})
				}
				return o
			}

			function f(o, a, _) {
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

			function g(o) {
				const _ = ["isReadable", "isEditable"].reduce((d, p) => o.hasOwnProperty(p) ? s({}, d, {
					[p]: o[p]
				}) : d, {});
				return o.children(_)
			}
			g.propTypes = {
				resourceType: r().string,
				resourceId: r().string,
				read: r().oneOfType([r().string, r().array]),
				edit: r().oneOfType([r().string, r().array]),
				accountId: r().string,
				isReadable: r().bool,
				isEditable: r().bool,
				children: r().func
			};
			const n = (0, i.Z)((0, u.Z)(g));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(z, y, t) {
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
				f = t("../react/common/utils/oidc.ts");
			const c = () => g.test(window.location.pathname) || i.E.has(u.Qq),
				l = () => i.E.get(u.Qq),
				g = /^\/login\/apple(\/)?/,
				o = [g, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
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
					}), window.location.href = (0, f.e)(f.c.Apple, d)
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(z, y, t) {
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
				f = t.n(s),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = t("../react/common/components/Dropdown/index.tsx"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(p) {
					for (var h = 1; h < arguments.length; h++) {
						var T = arguments[h];
						for (var v in T) Object.prototype.hasOwnProperty.call(T, v) && (p[v] = T[v])
					}
					return p
				}, n.apply(this, arguments)
			}

			function o(p, h) {
				if (p == null) return {};
				var T = a(p, h),
					v, m;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(p);
					for (m = 0; m < O.length; m++) v = O[m], !(h.indexOf(v) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, v) || (T[v] = p[v]))
				}
				return T
			}

			function a(p, h) {
				if (p == null) return {};
				var T = {},
					v = Object.keys(p),
					m, O;
				for (O = 0; O < v.length; O++) m = v[O], !(h.indexOf(m) >= 0) && (T[m] = p[m]);
				return T
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
					color: (0, g.Yc)() ? p.colors.text : void 0
				},
				"& button:hover": {
					color: (0, g.Yc)() ? p.colors.text : void 0
				}
			}));

			function d(p) {
				let {
					menu: h,
					containerProps: T,
					disabled: v,
					disabledDropdown: m = v
				} = p, O = o(p, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: E
				} = (0, s.useI18n)();
				return r().createElement(_, n({}, T, {
					role: "group"
				}), r().createElement(i.zx, n({}, O, {
					disabled: v
				})), r().createElement(l.Lt, {
					trigger: r().createElement(i.zx, {
						type: O.type,
						"aria-haspopup": "menu",
						disabled: m
					}, r().createElement(u.J, {
						type: "caret-down",
						label: E("common.more"),
						size: 12
					})),
					menu: h
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(z, y, t) {
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

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(l) {
					for (var g = 1; g < arguments.length; g++) {
						var n = arguments[g];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (l[o] = n[o])
					}
					return l
				}, f.apply(this, arguments)
			}

			function c(l) {
				const g = (0, e.useRef)(null),
					[n, o] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const _ = g.current;
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
					const _ = g.current;
					if (_ && a) return a.observe(_), () => {
						a.unobserve(_)
					}
				}, [a]), r().createElement(i.ZC, f({
					role: "menu",
					innerRef: g,
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
		"../react/common/components/Dropdown/MenuItem.tsx": function(z, y, t) {
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

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(T) {
					for (var v = 1; v < arguments.length; v++) {
						var m = arguments[v];
						for (var O in m) Object.prototype.hasOwnProperty.call(m, O) && (T[O] = m[O])
					}
					return T
				}, f.apply(this, arguments)
			}

			function c(T, v) {
				if (T == null) return {};
				var m = l(T, v),
					O, E;
				if (Object.getOwnPropertySymbols) {
					var w = Object.getOwnPropertySymbols(T);
					for (E = 0; E < w.length; E++) O = w[E], !(v.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(T, O) || (m[O] = T[O]))
				}
				return m
			}

			function l(T, v) {
				if (T == null) return {};
				var m = {},
					O = Object.keys(T),
					E, w;
				for (w = 0; w < O.length; w++) E = O[w], !(v.indexOf(E) >= 0) && (m[E] = T[E]);
				return m
			}

			function g(T) {
				for (var v = 1; v < arguments.length; v++) {
					var m = arguments[v] != null ? Object(arguments[v]) : {},
						O = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(m).filter(function(E) {
						return Object.getOwnPropertyDescriptor(m, E).enumerable
					})), O.forEach(function(E) {
						n(T, E, m[E])
					})
				}
				return T
			}

			function n(T, v, m) {
				return v = o(v), v in T ? Object.defineProperty(T, v, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[v] = m, T
			}

			function o(T) {
				var v = a(T, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function a(T, v) {
				if (typeof T != "object" || T === null) return T;
				var m = T[Symbol.toPrimitive];
				if (m !== void 0) {
					var O = m.call(T, v || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(T)
			}
			const _ = ({
					theme: T
				}) => {
					const v = {
						cursor: "pointer",
						background: T.colors.gray[9],
						color: T.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: T.space[2],
						background: T.colors.background,
						color: T.colors.gray[3],
						fontSize: T.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': v,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': g({}, v, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: T.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				d = (0, i.LM)(_, "a"),
				p = (0, i.LM)(_, "button");

			function h(T) {
				let {
					disabled: v = !1
				} = T, m = c(T, ["disabled"]);
				const O = (0, u.useHistory)(),
					E = {
						role: "menuitem"
					};
				if ("href" in m && typeof m.href == "string") return r().createElement(d, f({
					"aria-disabled": v
				}, E, m, {
					href: v ? void 0 : m.href,
					onClick: D => {
						var A;
						if (v) return D.stopPropagation();
						D.preventDefault(), (A = m.onClick) === null || A === void 0 || A.call(m, D), O.push(m.href)
					}
				}));
				var w;
				return r().createElement(p, f({
					type: (w = m.type) !== null && w !== void 0 ? w : "button"
				}, E, m, {
					disabled: v
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(z, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: c
			}) => r().createElement(s.xu, {
				height: 411
			}, c);
			f.propTypes = {
				children: u().node
			}, y.Z = f
		},
		"../react/common/components/ModalManager.tsx": function(z, y, t) {
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
				f = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(p) {
					for (var h = 1; h < arguments.length; h++) {
						var T = arguments[h];
						for (var v in T) Object.prototype.hasOwnProperty.call(T, v) && (p[v] = T[v])
					}
					return p
				}, l.apply(this, arguments)
			}
			const g = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: h,
						closeModal: T
					} = this.props;
					return r().createElement(r().Fragment, null, h.map(({
						ModalComponent: v,
						props: m = {},
						id: O
					}) => {
						const E = () => {
							typeof m.onClose == "function" && m.onClose(), T(v)
						};
						return r().createElement(g.Provider, {
							key: O,
							value: {
								closeModal: E
							}
						}, r().createElement(f.J$, {
							value: c.ZP
						}, r().createElement(v, l({}, m, {
							isOpen: !0,
							closeModal: E
						}))))
					}))
				}
			}

			function o() {
				const p = r().useContext(g);
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
		"../react/common/components/Page.tsx": function(z, y, t) {
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
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return l
				},
				JR: function() {
					return g
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return f
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
				f = "to",
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
			let g = function(o) {
					return o.ADD_FILTER = "Add filter", o.EDIT_FILTER = "Edit filter", o.REMOVE_FILTER = "Remove filter", o.REMOVE_ALL_FILTERS = "Remove all filters", o.CHANGE_TIME = "Change time window", o.FEED_PAGE_FORWARD = "Activity feed next page", o.FEED_PAGE_BACKWARD = "Activity feed previous page", o.FEED_EXPAND_EVENT = "Activity feed expand event", o.FEED_CLOSE_EVENT = "Activity feed close event", o.FEED_EXPAND_MATCHES = "Activity feed expand matches", o.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", o.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", o.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", o.DOWNLOAD_FEED = "Activity feed download", o
				}({}),
				n = function(o) {
					return o.TIMESERIES = "Timeseries Chart", o.DISTRIBUTION = "Source Distribution Chart", o.TOP_N = "Top N", o.FILTER_BAR = "Filter Bar", o.SCORES_DISTRIBUTIONS = "Scores Distributions", o.INSIGHTS = "Insights", o.RL_HISTOGRAM = "Rate Limit Histogram", o
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Cf: function() {
					return g
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
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
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
				g = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(z, y, t) {
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
		"../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx": function(z, y, t) {
			"use strict";
			t.d(y, {
				Aq: function() {
					return l
				},
				Xc: function() {
					return c
				},
				rg: function() {
					return g
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
				f = t("../react/utils/translator.tsx");
			const c = "sequence builder modal opened",
				l = "sequence builder modal submitted",
				g = 10,
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
						title: r().createElement(f.cC, {
							id: "common.table.empty.search.title"
						}),
						description: r().createElement(s.ZC, {
							mt: 1
						}, r().createElement(f.cC, {
							id: "common.table.empty.search.description"
						}))
					} : {
						title: r().createElement(s.ZC, {
							textAlign: "center"
						}, r().createElement(f.cC, {
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
						}, r().createElement(f.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.description"
						}), r().createElement(u.QV, {
							to: _
						}, r().createElement(f.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_endpoints.cta"
						}))),
						image: () => null
					} : {
						title: null,
						description: r().createElement(s.ZC, {
							textAlign: "center"
						}, r().createElement(f.cC, {
							id: "api_rules.sequences_rules.main.form.table.empty.no_hostname_selected"
						})),
						image: () => null
					}
				}
		},
		"../react/common/constants/billing/index.ts": function(z, y, t) {
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
					return g
				},
				Hw: function() {
					return f
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
				f = {
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
				g = {
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
		"../react/common/constants/billing/tracking.ts": function(z, y, t) {
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
		"../react/common/constants/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Dk: function() {
					return _
				},
				Dy: function() {
					return d
				},
				E_: function() {
					return f
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
					return g
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
				f = "critical",
				c = "unknown",
				l = "not-monitored",
				g = r().from({
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
					f: g.FREE,
					p: g.PRO,
					b: g.BIZ
				},
				a = "marketing-pt",
				_ = () => {
					const v = i.Z.get(a);
					if (!!v) return o[v]
				},
				d = ["gov"],
				p = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				h = "banner-notification-interactions",
				T = null
		},
		"../react/common/constants/index.ts": function(z, y, t) {
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
		"../react/common/constants/roles.ts": function(z, y, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(z, y, t) {
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
				i = (s, f, c = !1) => {
					var l;
					return `${f} ${(l=r[s])!==null&&l!==void 0?l:s} ${c?"ruleset":"rule"}${f===e.GET?"s":""}`
				},
				u = () => {
					var s;
					return (s = Object.keys(r).reduce((f, c) => {
						const l = Object.values(e).reduce((g, n) => (g.push(i(c, n)), g.push(i(c, n, !0)), g), []);
						return f.concat(l)
					}, [])) === null || s === void 0 ? void 0 : s.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return f
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
				} = (0, i.useParams)(), g = (0, e.p4)(r.D0);
				if (l === void 0 && !g) throw new Error("Account ID not found in URL params");
				return (c = l) !== null && c !== void 0 ? c : g == null ? void 0 : g.id
			}

			function f() {
				const c = s();
				return (0, e.p4)(l => (0, r.Py)(l, c))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(z, y, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				i = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const s = f => {
				const c = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(f)), n => {
					c((0, e.I)(f, n))
				}]
			};
			y.Z = s
		},
		"../react/common/hooks/useCachedState.ts": function(z, y, t) {
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
				key: f,
				cache: c = i.E,
				ttl: l
			} = {}) {
				var g;
				const n = f !== void 0 && c.get(f),
					[o, a] = (0, e.useState)((g = n) !== null && g !== void 0 ? g : s);
				return [o, d => {
					a(p => (d instanceof Function && (d = d(p)), f !== void 0 && c.set(f, d, l), d))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(z, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(i) {
				return (0, e.qf)(i)
			}
			y.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(z, y, t) {
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
				rootMargin: f,
				threshold: c
			} = {}) {
				const l = (0, e.useRef)(null);

				function g() {
					return l.current === null && (l.current = new IntersectionObserver(u, {
						root: s,
						rootMargin: f,
						threshold: c
					})), l.current
				}
				return (0, e.useEffect)(() => (l.current = new IntersectionObserver(u, {
					root: s,
					rootMargin: f,
					threshold: c
				}), () => {
					var n;
					(n = l.current) === null || n === void 0 || n.disconnect()
				}), [u, s, f, c]), g()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(z, y, t) {
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
		"../react/common/hooks/useScope.tsx": function(z, y, t) {
			"use strict";
			t.d(y, {
				Lm: function() {
					return g
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
				f = t("../react/common/hooks/useAccountId.ts");
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
				g = () => {
					const n = (0, r.p4)(i.Cu),
						o = (0, f.F)(),
						a = l();
					return {
						scope: a ? c.ZONE : c.ACCOUNT,
						scopeId: a ? n : o,
						isZoneScope: a
					}
				}
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(z, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function i(u) {
				return (0, e.p4)(s => (0, r.rV)(s, u))
			}
			y.Z = i
		},
		"../react/common/middleware/sparrow/errors.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Uh: function() {
					return s
				},
				ez: function() {
					return u
				},
				oV: function() {
					return f
				}
			});

			function e(c, l, g) {
				return l = r(l), l in c ? Object.defineProperty(c, l, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = g, c
			}

			function r(c) {
				var l = i(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function i(c, l) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			class u extends Error {
				constructor(l, g) {
					super(g);
					e(this, "eventName", void 0), this.eventName = l, this.name = "SparrowValidationError"
				}
			}
			class s extends u {
				constructor(l) {
					super(l, `Event not allowed: "${l}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends u {
				constructor(l, g) {
					super(l, `Found invalid properties on event: "${l}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = g
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Au: function() {
					return Ae
				},
				B: function() {
					return xe
				},
				B3: function() {
					return nt
				},
				BG: function() {
					return A
				},
				Bp: function() {
					return _t
				},
				CV: function() {
					return ft
				},
				D0: function() {
					return O
				},
				DT: function() {
					return N
				},
				EL: function() {
					return R
				},
				EU: function() {
					return M
				},
				GE: function() {
					return ht
				},
				Ko: function() {
					return ae
				},
				Kx: function() {
					return C
				},
				Le: function() {
					return S
				},
				O4: function() {
					return We
				},
				Ou: function() {
					return F
				},
				Py: function() {
					return Be
				},
				QI: function() {
					return Ge
				},
				Qf: function() {
					return w
				},
				RO: function() {
					return De
				},
				T3: function() {
					return dt
				},
				T8: function() {
					return D
				},
				UX: function() {
					return L
				},
				VP: function() {
					return Ue
				},
				Xo: function() {
					return ot
				},
				Xu: function() {
					return oe
				},
				Yi: function() {
					return ct
				},
				Yj: function() {
					return q
				},
				Zu: function() {
					return X
				},
				bC: function() {
					return Y
				},
				f8: function() {
					return G
				},
				hI: function() {
					return rt
				},
				hN: function() {
					return B
				},
				hX: function() {
					return Le
				},
				iq: function() {
					return ze
				},
				nE: function() {
					return P
				},
				oD: function() {
					return I
				},
				oI: function() {
					return $
				},
				oJ: function() {
					return gt
				},
				tM: function() {
					return x
				},
				uF: function() {
					return W
				},
				ut: function() {
					return Re
				},
				vU: function() {
					return mt
				},
				wQ: function() {
					return Ee
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				i = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				s = t.n(u),
				f = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				l = t.n(c),
				g = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				o = t("../react/common/selectors/userSelectors.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				_ = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/common/constants/roles.ts"),
				p = t("../react/common/utils/hasRole.ts");

			function h(Q) {
				for (var pe = 1; pe < arguments.length; pe++) {
					var he = arguments[pe] != null ? Object(arguments[pe]) : {},
						Ie = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(he).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(he, Ne).enumerable
					})), Ie.forEach(function(Ne) {
						T(Q, Ne, he[Ne])
					})
				}
				return Q
			}

			function T(Q, pe, he) {
				return pe = v(pe), pe in Q ? Object.defineProperty(Q, pe, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[pe] = he, Q
			}

			function v(Q) {
				var pe = m(Q, "string");
				return typeof pe == "symbol" ? pe : String(pe)
			}

			function m(Q, pe) {
				if (typeof Q != "object" || Q === null) return Q;
				var he = Q[Symbol.toPrimitive];
				if (he !== void 0) {
					var Ie = he.call(Q, pe || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (pe === "string" ? String : Number)(Q)
			}
			const O = Q => {
					const pe = W(Q);
					return pe == null ? void 0 : pe.account
				},
				E = Q => {
					const pe = (0, o.PR)(Q);
					if (pe) {
						const he = pe.id;
						return Q.accountAccess[he] || {}
					}
					return {}
				},
				w = Q => Q.accountsDetailed,
				D = (0, n.P1)("accountsDetailed", w),
				A = Q => Q.memberships,
				P = (0, f.P1)((0, n.P1)("memberships", A), _.U, (Q, pe) => !!pe && !!Q ? Q.filter(he => pe.includes(he.id)) : Q),
				B = Q => Q.accountFlags && Q.accountFlags.data,
				C = Q => Q.accountFlags,
				S = (Q, pe, he) => {
					const Ie = B(Q);
					return !Ie || !Ie[pe] ? null : Ie[pe][he]
				},
				U = Q => Q.accountFlags.isRequesting,
				$ = (Q, ...pe) => i()(Q, ["accountFlagsChanges", "data", ...pe]),
				G = Q => Q.accountFlagsChanges.isRequesting,
				ne = (0, f.P1)(B, C, (Q, pe) => ({
					data: Q,
					meta: pe
				})),
				ee = (Q, pe, he) => !!(isEnterpriseSSEnabledSelector(Q) && S(Q, pe, he)),
				oe = Q => Q.membership,
				W = (0, n.P1)("membership", oe),
				K = (0, f.P1)(W, oe, (Q, pe) => ({
					data: Q,
					meta: pe
				})),
				F = Q => {
					const {
						roles: pe = []
					} = W(Q) || {};
					return Boolean(pe.find(he => he === "Super Administrator - All Privileges" || he === "Billing"))
				},
				x = Q => {
					const pe = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, p.n)(Q, pe)
				},
				I = Q => {
					const pe = E(Q),
						he = He.getMemberships(Q) ? s().asMutable(He.getMemberships(Q)) : [];
					if (!!he) return s().from(he.map(Ie => h({}, Ie, {
						lastSeen: pe[Ie.account.id] ? pe[Ie.account.id].lastSeen : null
					})).sort((Ie, Ne) => Ie.lastSeen && Ne.lastSeen ? Ne.lastSeen - Ie.lastSeen : 0))
				},
				L = Q => Q.filteredMemberships,
				R = (0, n.P1)("filteredMemberships", L),
				X = (0, f.P1)(W, Q => Q == null ? void 0 : Q.permissions),
				q = (0, f.P1)(X, Q => (0, e.Z)(pe => {
					var he;
					return (he = Q == null ? void 0 : Q[pe]) !== null && he !== void 0 ? he : {
						read: !1,
						edit: !1
					}
				})),
				ae = (0, f.P1)(W, Q => Q == null ? void 0 : Q.policies),
				N = (Q, pe, he) => {
					let Ie = He.getMembership(Q);
					if (!Ie) {
						const Ne = He.getMemberships(Q);
						if (!Ne || !pe) return !1;
						Ie = Ne.find(Xe => Xe.account.id === pe)
					}
					if (!Ie || !he) return !1;
					try {
						return he(Ie.permissions)
					} catch {
						return !1
					}
				},
				V = Q => {
					var pe, he;
					return (pe = (he = O(Q)) === null || he === void 0 ? void 0 : he.meta.has_pro_zones) !== null && pe !== void 0 ? pe : !1
				},
				M = Q => {
					var pe, he;
					return (pe = (he = O(Q)) === null || he === void 0 ? void 0 : he.meta.has_business_zones) !== null && pe !== void 0 ? pe : !1
				},
				Y = Q => M(Q) || V(Q),
				ie = (Q, pe) => {
					const he = de(Q, pe);
					return !!he && !!he.enabled
				},
				de = (Q, pe) => {
					const he = He.getMembership(Q),
						Ie = he && he.account;
					return Ie && Ie.legacy_flags && Ie.legacy_flags[pe]
				},
				Ee = Q => ie(Q, "custom_pages"),
				ge = Q => !!Q && Q["webhooks.webhooks.enabled"],
				te = Q => S(Q, "bots", "enabled"),
				be = Q => S(Q, "billing", "annual_subscriptions_enable"),
				De = Q => Q ? Boolean(S(Q, "ConstellationAI", "v2_ui")) : !1,
				Le = Q => Q ? Boolean(S(Q, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				xe = Q => Q ? Boolean(S(Q, "AIgateway", "enabled")) : !1,
				ke = Q => de(Q, "enterprise_zone_quota"),
				Qe = Q => {
					const pe = ke(Q);
					return !pe || !pe.available ? -1 : pe.available
				},
				ze = Q => Q.accountMembers,
				nt = (0, n.P1)("accountMembers", ze),
				We = Q => Q.accountMember && Q.accountMember.isRequesting,
				Z = Q => Q.accountRoles,
				Ce = (0, n.P1)("accountRoles", Z),
				Be = (Q, pe) => {
					const he = He.getMemberships(Q),
						Ie = he && he.find(it => it.account.id === pe);
					if (Ie) return Ie.account.name.replace(" Account", " account");
					const Ne = He.getMembership(Q),
						Xe = Ne && Ne.account;
					return Xe && Xe.id === pe ? Xe.name : null
				},
				Re = (Q, pe) => {
					const he = He.getMemberships(Q),
						Ie = he && he.find(it => it.account.id === pe);
					if (Ie) return Ie.account.settings.access_approval_expiry;
					const Ne = He.getMembership(Q),
						Xe = Ne && Ne.account;
					return Xe && Xe.id === pe ? Xe.settings.access_approval_expiry : null
				},
				ot = (Q, pe) => {
					const he = Re(Q, pe);
					return he ? l().utc(he).isAfter() : !1
				},
				dt = (Q, pe, he) => {
					const Ie = Re(Q, pe);
					let Ne = Ie ? l().utc(Ie) : null;
					return !Ne || !Ne.isAfter() ? "" : Ne && Ne.year() === 3e3 ? he("account.access_approval.card_expiration_forever") : he("account.access_approval.card_expiration_text", {
						expiryTimestamp: Ne.local().format(g.U.DateTime)
					})
				},
				gt = Q => Q && Q.member && Q.member.edit,
				Ae = (Q, pe) => {
					const he = He.getMembership(Q),
						Ie = he && he.account;
					return Ie ? Ie.id !== pe : !1
				},
				at = Q => Q.dpa,
				J = (0, n.P1)("dpa", at),
				se = Q => Q.webhook,
				fe = Q => Q.webhooks,
				we = (0, n.P1)("webhook", fe),
				Ue = Q => Q.accountLegoContract,
				Ve = (0, n.P1)("accountLegoContract", Ue),
				Ge = Q => {
					const pe = Ve(Q);
					return (pe == null ? void 0 : pe.lego_state) ? pe.lego_state : ""
				},
				yt = Q => Ge(Q) === "signed",
				ht = Q => Ue(Q).isRequesting,
				mt = Q => {
					const pe = Ve(Q);
					return pe && pe.subscription_type ? pe.subscription_type : ""
				},
				Rt = Q => mt(Q) !== "",
				He = {
					getMembership: W,
					getMemberships: P,
					getFilteredMemberships: R,
					getAccountMembers: nt,
					getAccountRoles: Ce
				},
				_t = Q => Q.accountSingle,
				ct = (0, n.P1)("accountSingle", _t),
				rt = Q => {
					const pe = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, d.V.ADMINISTRATOR];
					return (0, p.n)(Q, pe)
				},
				ft = Q => (0, p.n)(Q, [d.V.BRAND_PROTECTION]),
				Me = Q => hasRole(Q, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ])
		},
		"../react/common/selectors/commonSelectors.ts": function(z, y, t) {
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
				const f = `__ACTIVE__${s}`;
				return c => {
					const l = c.application;
					return l && l.active[f]
				}
			}

			function r(s) {
				const f = `__TOGGLE__${s}`;
				return c => {
					const l = c.application;
					return l && l.toggles[f]
				}
			}

			function i(s) {
				return s && s.paginationData && s.paginationData.info && s.paginationData.info.total_count ? s.paginationData.info.total_count : 0
			}
			const u = s => s.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$f: function() {
					return p
				},
				AD: function() {
					return f
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return E
				},
				Ci: function() {
					return q
				},
				DA: function() {
					return ze
				},
				E6: function() {
					return _
				},
				Gy: function() {
					return xe
				},
				Hq: function() {
					return Le
				},
				Ms: function() {
					return A
				},
				Mx: function() {
					return ie
				},
				Nb: function() {
					return De
				},
				Pj: function() {
					return Qe
				},
				Q2: function() {
					return c
				},
				Qq: function() {
					return de
				},
				Td: function() {
					return m
				},
				Z: function() {
					return V
				},
				a: function() {
					return O
				},
				a5: function() {
					return Y
				},
				c7: function() {
					return Ee
				},
				du: function() {
					return g
				},
				ec: function() {
					return ne
				},
				f: function() {
					return be
				},
				fo: function() {
					return te
				},
				hL: function() {
					return M
				},
				ji: function() {
					return ae
				},
				jo: function() {
					return P
				},
				l9: function() {
					return We
				},
				lI: function() {
					return s
				},
				p1: function() {
					return T
				},
				pK: function() {
					return ke
				},
				pf: function() {
					return o
				},
				qR: function() {
					return v
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
					return N
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function i(Z, Ce) {
				return Z && Z[Ce]
			}
			const u = Z => !s(Z).isRequesting;

			function s(Z) {
				return Z.entitlements.zone
			}

			function f(Z) {
				return s(Z).data
			}
			const c = Z => {
				var Ce, Be;
				return ((Ce = s(Z).paginationData) === null || Ce === void 0 || (Be = Ce.options) === null || Be === void 0 ? void 0 : Be.editedDate) || {}
			};

			function l(Z, Ce) {
				const Be = f(Z);
				return Be ? i(Be, Ce) : void 0
			}
			const g = (Z, Ce) => l(Z, Ce) === !0;

			function n(Z) {
				return Z.entitlements.account
			}

			function o(Z) {
				return n(Z).data
			}
			const a = Z => {
				var Ce, Be;
				return ((Ce = n(Z).paginationData) === null || Ce === void 0 || (Be = Ce.options) === null || Be === void 0 ? void 0 : Be.editedDate) || {}
			};

			function _(Z) {
				return !n(Z).isRequesting
			}

			function d(Z, Ce) {
				const Be = o(Z);
				return Be ? i(Be, Ce) : void 0
			}

			function p(Z, Ce) {
				return d(Z, Ce) === !0
			}

			function h(Z, Ce) {
				return Ce.every(Be => p(Z, Be))
			}

			function T(Z) {
				return p(Z, "contract.customer_enabled")
			}

			function v(Z) {
				return p(Z, "contract.self_service_allowed")
			}

			function m(Z) {
				return p(Z, "billing.partners_managed")
			}
			const O = Z => T(Z) && v(Z),
				E = Z => p(Z, "enterprise.ecp_allowed");

			function w(Z) {
				return D(Z) || p(Z, "argo.allow_smart_routing") || p(Z, "argo.allow_tiered_caching") || p(Z, "rate_limiting.enabled") || p(Z, "ctm.enabled") || p(Z, "workers.enabled") || p(Z, "workers.kv_store.enabled") || p(Z, "stream.enabled")
			}
			const D = Z => g(Z, "argo.allow_smart_routing") || g(Z, "argo.allow_tiered_caching"),
				A = Z => p(Z, "zone.partial_setup_allowed") || g(Z, "zone.partial_setup_allowed"),
				P = Z => p(Z, "argo.allow_smart_routing") || g(Z, "argo.allow_smart_routing"),
				B = Z => p(Z, "argo.allow_tiered_caching") || g(Z, "argo.allow_tiered_caching"),
				C = Z => P(Z) || B(Z),
				S = Z => p(Z, "ctm.enabled"),
				U = Z => {
					const Ce = d(Z, "ctm.load_balancers");
					return typeof Ce == "number" ? Ce : 0
				},
				$ = Z => {
					const Ce = d(Z, "ctm.pools");
					return typeof Ce == "number" ? Ce : 0
				},
				G = Z => {
					const Ce = d(Z, "ctm.origins");
					return typeof Ce == "number" ? Ce : 0
				},
				ne = Z => p(Z, "workers.enabled"),
				ee = Z => p(Z, "stream.enabled"),
				oe = Z => {
					const Ce = d(Z, "access.users_allowed");
					return typeof Ce == "number" ? Ce : 0
				},
				W = Z => oe(Z) > 0,
				K = Z => {
					const Ce = l(Z, "dedicated_certificates");
					return typeof Ce == "number" ? Ce : 0
				},
				F = Z => K(Z) > 0,
				x = Z => {
					const Ce = l(Z, "rate_limiting.max_rules");
					return typeof Ce == "number" ? Ce : 0
				},
				I = Z => p(Z, "rate_limiting.enabled"),
				L = Z => {
					const Ce = l(Z, "page_rules");
					return typeof Ce == "number" ? Ce : 0
				},
				R = Z => L(Z) > 0,
				X = Z => {
					const Ce = d(Z, "dns_firewall.max_clusters_allowed");
					return typeof Ce == "number" ? Ce : 0
				},
				q = Z => X(Z) > 0,
				ae = Z => g(Z, "zone.advanced_certificate_manager") || p(Z, "zone.advanced_certificate_manager"),
				N = Z => l(Z, "authoritative_dns.proxy_record_allowed") === !1 || d(Z, "authoritative_dns.proxy_record_allowed") === !1,
				V = Z => p(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				M = Z => l(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				Y = Z => {
					const Ce = l(Z, "authoritative_dns.min_record_ttl_allowed");
					return typeof Ce == "number" && Ce > 1 ? Ce : 60
				},
				ie = Z => {
					const Ce = d(Z, r.yt);
					return typeof Ce == "number" ? Ce : 0
				},
				de = Z => p(Z, "foundation_dns.advanced_nameservers_allowed") || g(Z, "foundation_dns.advanced_nameservers_allowed"),
				Ee = Z => p(Z, "authoritative_dns.account_custom_nameservers_allowed"),
				ge = Z => g(Z, "authoritative_dns.zone_custom_nameservers_allowed"),
				te = Z => ge(Z) || Ee(Z),
				be = (Z, Ce) => ((0, e.el)(window.location.pathname) ? l : d)(Z, Ce),
				De = Z => ((0, e.el)(window.location.pathname) ? f : o)(Z),
				Le = Z => p(Z, "authoritative_dns.multi_provider_allowed") || g(Z, "authoritative_dns.multi_provider_allowed"),
				xe = Z => g(Z, "authoritative_dns.cname_flattening_allowed"),
				ke = Z => p(Z, "secondary_dns.secondary_overrides") || g(Z, "secondary_dns.secondary_overrides"),
				Qe = Z => p(Z, "authoritative_dns.custom_soa_allowed") || g(Z, "authoritative_dns.custom_soa_allowed"),
				ze = Z => p(Z, "authoritative_dns.custom_ns_ttl_allowed") || g(Z, "authoritative_dns.custom_ns_ttl_allowed"),
				nt = Z => p(Z, "secondary.create_zone"),
				We = Z => de(Z) || Ee(Z) || Le(Z) || nt(Z) || ke(Z) || Qe(Z) || ze(Z)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return s
				},
				v: function() {
					return f
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
					const g = (0, e.Kd)();
					return f(g) ? g : e.ZW
				}
			};

			function f(c) {
				const l = Object.keys(r.Q).find(g => r.Q[g] === c);
				return !!c && typeof c == "string" && l != null && (0, e.S8)(l)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return s
				},
				BG: function() {
					return g
				},
				BY: function() {
					return m
				},
				GP: function() {
					return d
				},
				GU: function() {
					return O
				},
				PR: function() {
					return i
				},
				h$: function() {
					return T
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
					return f
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = E => E.user,
				i = (0, e.P1)("user", r),
				u = E => {
					var w;
					return (w = i(E)) === null || w === void 0 ? void 0 : w.email.endsWith("@cloudflare.com")
				},
				s = E => {
					var w;
					return !!((w = i(E)) === null || w === void 0 ? void 0 : w.id)
				},
				f = E => {
					const w = i(E);
					if (!!w) return w.first_name && w.last_name ? `${w.first_name} ${w.last_name}` : w.email
				},
				c = E => {
					const w = i(E);
					return w && w.has_enterprise_zones
				},
				l = E => E.userCommPreferences,
				g = (0, e.P1)("userCommPreferences", l),
				n = E => {
					const w = i(E);
					return w && w.email_verified
				},
				o = E => {
					const w = g(E);
					return w && w.preferences.marketing_communication
				},
				a = E => E.userDetails,
				_ = (0, e.P1)("userDetails", a),
				d = E => {
					const w = _(E);
					return w && w["2FA-RECOVERY"] === "scheduled"
				},
				p = E => {
					const w = _(E);
					return w && w["2FA-RECOVERY"] === "interrupted"
				},
				h = E => {
					const w = _(E);
					return w == null ? void 0 : w["NEW-USER-EMAIL"]
				},
				T = E => E.gates.assignments,
				v = (E, w) => E && E[w];

			function m(E, w) {
				const D = T(E);
				return D ? v(D, w) : void 0
			}
			const O = (E, w) => m(E, w) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return A
				},
				$t: function() {
					return ot
				},
				A4: function() {
					return T
				},
				Cu: function() {
					return v
				},
				DQ: function() {
					return Ee
				},
				Ej: function() {
					return C
				},
				FH: function() {
					return O
				},
				ID: function() {
					return L
				},
				Iu: function() {
					return h
				},
				Ko: function() {
					return ke
				},
				Le: function() {
					return be
				},
				Ly: function() {
					return N
				},
				M3: function() {
					return Z
				},
				N8: function() {
					return We
				},
				NY: function() {
					return ie
				},
				Ns: function() {
					return q
				},
				Ox: function() {
					return Ae
				},
				P4: function() {
					return S
				},
				RO: function() {
					return x
				},
				Tr: function() {
					return xe
				},
				U: function() {
					return m
				},
				Ug: function() {
					return w
				},
				V6: function() {
					return Ce
				},
				WR: function() {
					return at
				},
				Xg: function() {
					return p
				},
				ZB: function() {
					return te
				},
				_y: function() {
					return R
				},
				bR: function() {
					return B
				},
				cU: function() {
					return Qe
				},
				cg: function() {
					return de
				},
				d2: function() {
					return oe
				},
				il: function() {
					return ae
				},
				jN: function() {
					return $
				},
				jg: function() {
					return M
				},
				kC: function() {
					return P
				},
				kf: function() {
					return Be
				},
				ko: function() {
					return F
				},
				mK: function() {
					return dt
				},
				nA: function() {
					return d
				},
				oY: function() {
					return U
				},
				qM: function() {
					return De
				},
				rq: function() {
					return Y
				},
				tS: function() {
					return D
				},
				tU: function() {
					return ne
				},
				vB: function() {
					return gt
				},
				vM: function() {
					return G
				},
				wH: function() {
					return E
				},
				wn: function() {
					return ge
				},
				xU: function() {
					return ee
				},
				xw: function() {
					return Le
				},
				z5: function() {
					return I
				},
				zO: function() {
					return ze
				},
				zW: function() {
					return Re
				},
				zh: function() {
					return W
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				i = t("../../../../node_modules/lodash/get.js"),
				u = t.n(i),
				s = t("../../../../node_modules/moment/moment.js"),
				f = t.n(s),
				c = t("../react/common/constants/billing/index.ts");

			function l(J) {
				for (var se = 1; se < arguments.length; se++) {
					var fe = arguments[se] != null ? Object(arguments[se]) : {},
						we = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && we.push.apply(we, Object.getOwnPropertySymbols(fe).filter(function(Ue) {
						return Object.getOwnPropertyDescriptor(fe, Ue).enumerable
					})), we.forEach(function(Ue) {
						g(J, Ue, fe[Ue])
					})
				}
				return J
			}

			function g(J, se, fe) {
				return se = n(se), se in J ? Object.defineProperty(J, se, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : J[se] = fe, J
			}

			function n(J) {
				var se = o(J, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function o(J, se) {
				if (typeof J != "object" || J === null) return J;
				var fe = J[Symbol.toPrimitive];
				if (fe !== void 0) {
					var we = fe.call(J, se || "default");
					if (typeof we != "object") return we;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(J)
			}
			const a = (0, r.P1)("zone", J => J.zone),
				_ = J => {
					var se;
					return (se = J.zoneVersioning) === null || se === void 0 ? void 0 : se.zoneVersionSelector
				},
				d = (0, e.P1)(a, _, (J, se) => {
					var fe, we, Ue;
					let Ve;
					if (Array.isArray(J) && J.length === 1 ? Ve = J[0] : J && !Array.isArray(J) && (Ve = J), !Ve) return;
					const Ge = !!(se == null ? void 0 : se.enabled);
					return l({}, Ve, Ve.name && {
						name: Ge ? se.rootZoneName : Ve.name
					}, {
						versioning: {
							enabled: Ge,
							isRoot: !((fe = Ve.name) === null || fe === void 0 ? void 0 : fe.endsWith(".config.cfdata.org")),
							version: Ge ? se.selectedVersion : 0,
							rootZoneId: Ge ? se.rootZoneId : (we = (Ue = Ve) === null || Ue === void 0 ? void 0 : Ue.id) !== null && we !== void 0 ? we : ""
						}
					})
				}),
				p = J => J.zone,
				h = J => J.zone.isRequesting,
				T = (0, e.P1)(d, p, (J, se) => ({
					data: J,
					meta: se
				})),
				v = J => {
					var se, fe;
					return (se = (fe = d(J)) === null || fe === void 0 ? void 0 : fe.id) !== null && se !== void 0 ? se : ""
				},
				m = J => J.zones,
				O = J => J.zonesRoot,
				E = J => J.zonesAccount,
				w = (0, r.P1)("zones", m),
				D = (0, r.P1)("zonesRoot", O),
				A = (0, r.P1)("zonesAccount", E);

			function P(J) {
				const se = d(J);
				return se ? se.created_on : null
			}
			const B = J => {
				var se;
				const fe = d(J);
				return l({}, fe, {
					id: (fe == null || (se = fe.versioning) === null || se === void 0 ? void 0 : se.enabled) ? fe == null ? void 0 : fe.versioning.rootZoneId : fe == null ? void 0 : fe.id
				})
			};

			function C(J, se, fe) {
				const we = P(J);
				if (!we) return;
				const Ue = f().duration(se, fe),
					Ve = new Date(we),
					Ge = new Date(new Date().getTime() - Ue.asMilliseconds());
				return Ve.getTime() > Ge.getTime()
			}

			function S(J) {
				const se = d(J);
				return se ? se.status : null
			}

			function U(J) {
				const se = d(J);
				return se ? se.type : null
			}

			function $(J) {
				return (J == null ? void 0 : J.plan_pending) ? J == null ? void 0 : J.plan_pending : J == null ? void 0 : J.plan
			}

			function G(J) {
				const se = d(J);
				if (!se) return;
				const fe = $(se);
				return fe && fe.legacy_id
			}

			function ne(J, se) {
				const fe = $(J);
				return !!fe && c.Gs.indexOf(fe.legacy_id) >= c.Gs.indexOf(se)
			}

			function ee(J) {
				return !!J && J.status === "initializing"
			}

			function oe(J) {
				return !!J && J.status === "pending"
			}

			function W(J) {
				return !!J && J.status === "active"
			}

			function K(J, se) {
				if (!J) return !1;
				const fe = $(J);
				return !!fe && fe.legacy_id === se
			}

			function F(J) {
				return K(J, "enterprise")
			}
			const x = J => F(d(J));

			function I(J) {
				return K(J, "business")
			}
			const L = J => I(d(J));

			function R(J) {
				return K(J, "pro")
			}
			const X = J => R(d(J));

			function q(J) {
				return K(J, "free")
			}
			const ae = J => q(d(J));

			function N(J) {
				return !F(J)
			}

			function V(J) {
				return J && J.owner
			}

			function M(J, se) {
				const fe = V(se);
				return !!fe && fe.type === "user" && fe.id === J.id
			}

			function Y(J) {
				const se = d(J);
				return !!se && se.type === "partial"
			}

			function ie(J) {
				const se = d(J);
				return !!se && se.type === "secondary"
			}
			const de = J => {
					var se;
					const fe = d(J);
					return !!(fe == null ? void 0 : fe.host) && !!((se = fe.plan) === null || se === void 0 ? void 0 : se.externally_managed)
				},
				Ee = J => {
					const se = w(J);
					return se && se.some(F)
				},
				ge = (J, se) => {
					const fe = d(J);
					return fe && fe.betas ? fe.betas.includes(se) : !1
				},
				te = (J, ...se) => u()(J, ["zoneFlags", "data", ...se]),
				be = (J, ...se) => u()(J, ["accountFlags", "data", ...se]),
				De = J => J.accountFlags.isRequesting,
				Le = J => J.zoneFlags.isRequesting,
				xe = (J, ...se) => u()(J, ["zoneFlagsChanges", "data", ...se]),
				ke = J => J.zoneFlagsChanges.isRequesting,
				Qe = J => J.zoneFlags && J.zoneFlags.data,
				ze = J => J.zoneFlags,
				nt = (0, e.P1)(Qe, ze, (J, se) => ({
					data: J,
					meta: se
				})),
				We = (0, r.P1)("abuseUrls", J => J.overview.abuseUrls),
				Z = J => {
					const se = d(J);
					return se ? `/${se.account.id}/${se.name}` : null
				},
				Ce = J => J.zoneMarketingCampaigns,
				Be = J => J.overview.zoneBlocks.data,
				Re = J => J.overview.zoneBlocks.isRequesting,
				ot = J => J.overview.zoneBlocks.hasData,
				dt = J => {
					var se, fe;
					return (J == null || (se = J.overview.zoneBlocks) === null || se === void 0 || (fe = se.paginationData) === null || fe === void 0 ? void 0 : fe.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				gt = J => J.overview.zoneBlocksReview.isRequesting,
				Ae = J => J.overview.zoneHold,
				at = (0, r.P1)("zoneHold", Ae)
		},
		"../react/common/utils/formatDate.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (r, i, u = !1) => (0, e.p6)(r, i, u)
		},
		"../react/common/utils/getEnvironment.ts": function(z, y, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				i = t("../functions/utils/constants.ts");
			const u = () => {
				var s, f, c;
				const g = e.parse(document.cookie)[i.b1];
				let n = null;
				g && (n = (0, r.E9)(g));
				let o = "production";
				switch (!0) {
					case ((s = n) === null || s === void 0 ? void 0 : s.projectType) === "canary":
						o = "canary";
						break;
					case ((f = window) === null || f === void 0 || (c = f.build) === null || c === void 0 ? void 0 : c.isPreviewDeploy):
						o = "preview";
						break
				}
				return o
			};
			y.Z = u
		},
		"../react/common/utils/hasRole.ts": function(z, y, t) {
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
				return u.some(f => s.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$K: function() {
					return c
				},
				Q$: function() {
					return i
				},
				t: function() {
					return f
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
				f = l => (0, r.Z)(l),
				c = l => l != null
		},
		"../react/common/utils/oidc.ts": function(z, y, t) {
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
					f = `oidc${s==="staging"?"-staging":""}.iam.cfapi.net`,
					l = new URLSearchParams(window.location.search).get("login_challenge");
				let g = `https://${f}/api/v1/sso/init?client=${i}&env=${s}`;
				return u && (g = g + `&jwt=${u}`), l && (g += `&login_challenge=${encodeURIComponent(l)}`), g
			}
		},
		"../react/common/utils/startViewTransition.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return e
				}
			});
			const e = r => {
				if (!document.startViewTransition) {
					r();
					return
				}
				document.startViewTransition(() => r())
			}
		},
		"../react/common/utils/useQueryCache.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(c) {
				for (var l = 1; l < arguments.length; l++) {
					var g = arguments[l] != null ? Object(arguments[l]) : {},
						n = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(g).filter(function(o) {
						return Object.getOwnPropertyDescriptor(g, o).enumerable
					})), n.forEach(function(o) {
						i(c, o, g[o])
					})
				}
				return c
			}

			function i(c, l, g) {
				return l = u(l), l in c ? Object.defineProperty(c, l, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = g, c
			}

			function u(c) {
				var l = s(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function s(c, l) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			const f = c => {
				const l = (0, e.useQueryClient)(),
					g = m => {
						var O;
						return l.getQueriesData((O = m) !== null && O !== void 0 ? O : c)
					},
					n = m => {
						var O;
						return l.getQueryData((O = m) !== null && O !== void 0 ? O : c)
					},
					o = m => {
						var O;
						return l.getQueriesData({
							queryKey: (O = m) !== null && O !== void 0 ? O : c,
							stale: !0
						})
					},
					a = (m, O) => {
						var E;
						l.setQueryData((E = O) !== null && E !== void 0 ? E : c, m)
					},
					_ = async m => {
						var O;
						await l.refetchQueries((O = m) !== null && O !== void 0 ? O : c)
					}, d = async (m, O) => {
						var E, w;
						await l.invalidateQueries((E = m) !== null && E !== void 0 ? E : c, r({
							refetchActive: !1
						}, (w = O) !== null && w !== void 0 ? w : {}))
					}, p = async (m, O) => {
						const E = m || (w => {
							var D;
							return (w == null || (D = w.queryKey) === null || D === void 0 ? void 0 : D[0]) === c
						});
						await l.invalidateQueries(r({
							predicate: E,
							refetchActive: !1,
							refetchInactive: !1
						}, O))
					};
				return {
					refetch: _,
					cancelData: async () => {
						await l.cancelQueries(c)
					},
					invalidate: d,
					setData: a,
					getDataStale: o,
					getData: g,
					prefetchQuery: (m, O) => {
						var E;
						return l.prefetchQuery((E = O) !== null && E !== void 0 ? E : c, m)
					},
					getQueryData: n,
					predicateInvalidate: p,
					batchInvalidate: async ({
						queryKeysToInvalidate: m = [],
						queryKeysToPredicateInvalidate: O = [],
						refetchActive: E = !1,
						refetchInactive: w = !1
					}) => {
						const D = m.map(P => d(P)),
							A = O.map(P => p(B => {
								var C;
								return (B == null || (C = B.queryKey) === null || C === void 0 ? void 0 : C[0]) === P
							}, {
								refetchActive: E,
								refetchInactive: w
							}));
						await Promise.all([...D, ...A])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(z, y, t) {
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
			const r = g => /^https?:\/\/(.*)/.test(g),
				i = g => e.default.hostname.test(g),
				u = g => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(g),
				s = g => /^[!-~]+$/.test(g),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = g => f.test(g),
				l = g => !!g && !!g.length && /^[ -~]+$/.test(g)
		},
		"../react/pages/abuse/constants.ts": function(z, y, t) {
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
					return f
				},
				Vq: function() {
					return m
				},
				Y0: function() {
					return v
				},
				bL: function() {
					return E
				},
				bx: function() {
					return T
				},
				dM: function() {
					return D
				},
				dV: function() {
					return w
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
					return O
				},
				xR: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				i = t("../react/pages/abuse/abuse.translations.ts"),
				u = t("../react/pages/abuse/types.ts");
			const s = "customer-abuse-reports-table-filter-bar",
				f = "abuse-reports-table-tooltip",
				c = "abuse-reports-cache-rate-limits-table-tooltip",
				l = "abuse-reports-blocks-tables-tooltip",
				g = "customer-abuse-reports-table-filter-bar",
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
				T = ["active", "cancelled", "in_review", "pending", "removed"],
				v = ["accepted", "in_review"];
			let m = function(A) {
				return A.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", A.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", A.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", A.CLICK_ABUSE_REPORT_ID = "click abuse report id", A.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", A.ADD_FILTER = "Add filter", A.REMOVE_FILTER = "Remove filter", A.REMOVE_ALL_FILTERS = "Remove all filters", A.NEXT_PAGE = "go to next page", A.PREV_PAGE = "go to prev page", A.GO_TO_PAGE = "go to page", A.SET_PAGE_SIZE = "set page size", A.COPY_TABLE_CELL = "copy table cell", A
			}({});
			const O = {
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
				E = {
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
				w = {
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
				D = {
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
		"../react/pages/abuse/types.ts": function(z, y, t) {
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
				f = function(o) {
					return o.ID = "id", o.DOMAIN = "domain", o.CREATED_BEFORE = "created_before", o.CREATED_AFTER = "created_after", o.STATUS = "status", o.TYPE = "type", o.MITIGATION_STATUS = "mitigation_status", o
				}({}),
				c = function(o) {
					return o.Domain = "domain", o.Status = "status", o.Type = "type", o
				}({}),
				l = function(o) {
					return o.DMCA = "DMCA", o.TRADEMARK = "TM", o.PHISHING = "PHISH", o.GENERAL = "GEN", o.REGISTRAR_WHOIS = "REG_WHO", o.EMERGENCY = "EMER", o.NCSEI = "NCSEI", o.THREAT = "THREAT", o
				}({});
			const g = [l.DMCA, l.TRADEMARK, l.PHISHING, l.GENERAL, l.REGISTRAR_WHOIS, l.EMERGENCY, l.NCSEI, l.THREAT];
			let n = function(o) {
				return o.Id = "id", o.CDate = "cdate", o.Domain = "domain", o.Type = "type", o.Status = "status", o.AcceptedUrls = "accepted_urls", o
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(z, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return u
				},
				GA: function() {
					return g
				},
				hT: function() {
					return f
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
				f = a => new Date(a),
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
				g = (a, _ = d => d.avg && d.avg.sampleInterval ? d.avg.sampleInterval : 1) => a.length === 0 ? 1 : a.reduce((d, p) => d + _(p), 0) / a.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				o = a => n[a]
		},
		"../react/pages/analytics/eos/resources/tracking.ts": function(z, y, t) {
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
		"../react/pages/blocked-content/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				BW: function() {
					return g
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
				for (var T = 1; T < arguments.length; T++) {
					var v = arguments[T] != null ? Object(arguments[T]) : {},
						m = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(v).filter(function(O) {
						return Object.getOwnPropertyDescriptor(v, O).enumerable
					})), m.forEach(function(O) {
						s(h, O, v[O])
					})
				}
				return h
			}

			function s(h, T, v) {
				return T = f(T), T in h ? Object.defineProperty(h, T, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[T] = v, h
			}

			function f(h) {
				var T = c(h, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function c(h, T) {
				if (typeof h != "object" || h === null) return h;
				var v = h[Symbol.toPrimitive];
				if (v !== void 0) {
					var m = v.call(h, T || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(h)
			}
			const l = "blocked-content-table-tooltip",
				g = {
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
					filters: Object.values(i.GH).reduce((h, T) => u({}, h, {
						[T]: T
					}), {})
				};
			let p = function(h) {
				return h.COPY_URL = "copy blocked content url", h.REQUEST_REVIEW = "request blocked content review", h.ADD_FILTER = "Add filter", h.REMOVE_FILTER = "Remove filter", h
			}({})
		},
		"../react/pages/blocked-content/types.ts": function(z, y, t) {
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
					return f
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
				f = function(l) {
					return l.CreatedDate = "created", l.EnforcementDate = "enforcementDate", l.BlockType = "blockType", l.Hostname = "hostname", l.Status = "status", l
				}({}),
				c = function(l) {
					return l.Removed = "removed", l.Misclassified = "misclassified", l
				}({})
		},
		"../react/pages/caching/tracking.tsx": function(z, y, t) {
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
		"../react/pages/d1/routes.ts": function(z, y, t) {
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
		"../react/pages/dns/api.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				BI: function() {
					return T
				},
				Q8: function() {
					return a
				},
				YJ: function() {
					return _
				},
				hs: function() {
					return g
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

			function u(v) {
				for (var m = 1; m < arguments.length; m++) {
					var O = arguments[m] != null ? Object(arguments[m]) : {},
						E = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(O).filter(function(w) {
						return Object.getOwnPropertyDescriptor(O, w).enumerable
					})), E.forEach(function(w) {
						s(v, w, O[w])
					})
				}
				return v
			}

			function s(v, m, O) {
				return m = f(m), m in v ? Object.defineProperty(v, m, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[m] = O, v
			}

			function f(v) {
				var m = c(v, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function c(v, m) {
				if (typeof v != "object" || v === null) return v;
				var O = v[Symbol.toPrimitive];
				if (O !== void 0) {
					var E = O.call(v, m || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(v)
			}
			const l = {
					settings: (0, i.BC)`/zones/${"zoneId"}/dns_settings`
				},
				g = {
					fetchZoneDnsSettings: async v => {
						try {
							return (await (0, e.get)(l.settings.toUrl({
								zoneId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (m) {
							throw m
						}
					},
					patchZoneDnsSettings: async (v, m) => await (0, e.patch)(l.settings.toUrl({
						zoneId: v
					}), {
						body: m
					})
				},
				n = {
					settings: (0, i.BC)`/accounts/${"accountId"}/dns_settings`
				},
				o = {
					fetchAccountDnsSettings: async v => {
						try {
							return (await (0, e.get)(n.settings.toUrl({
								accountId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (m) {
							throw m
						}
					},
					patchAccountDnsSettings: async (v, m) => await (0, e.patch)(n.settings.toUrl({
						accountId: v
					}), {
						body: m
					})
				},
				a = {
					dns_records: (0, i.BC)`/zones/${"zoneId"}/dns_records`,
					batch: (0, i.BC)`/zones/${"zoneId"}/dns_records/batch`
				},
				_ = {
					getMaxRecords: async (v, m, O, E, w) => {
						var D;
						return (D = (await (0, e.get)(a.dns_records.toUrl({
							zoneId: v
						}), {
							parameters: u({
								per_page: m
							}, E ? {
								search: E
							} : {}, w || {}, O)
						})).body) === null || D === void 0 ? void 0 : D.result
					},
					deleteRecords: async (v, m) => await (0, e.post)(a.batch.toUrl({
						zoneId: v
					}), {
						body: {
							deletes: m
						}
					}),
					patchRecords: async (v, m) => await (0, e.post)(a.batch.toUrl({
						zoneId: v
					}), {
						body: {
							patches: m
						}
					})
				},
				d = {
					custom_ns: (0, i.BC)`/zones/${"zoneId"}/custom_ns`,
					zone: (0, i.BC)`/zones/${"zoneId"}`
				},
				p = {
					fetchZoneCustomNs: async v => {
						try {
							return (await (0, e.get)(d.custom_ns.toUrl({
								zoneId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (m) {
							throw m
						}
					},
					fetchZoneVanityNameservers: async v => {
						try {
							return (await (0, e.get)(d.zone.toUrl({
								zoneId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (m) {
							throw m
						}
					},
					createZoneCustomNameserver: async (v, m) => await (0, e.patch)(d.zone.toUrl({
						zoneId: v
					}), {
						body: {
							vanity_name_servers: m
						}
					}),
					assignZoneCustomNsSet: async (v, m) => await (0, e.put)(d.custom_ns.toUrl({
						zoneId: v
					}), {
						body: {
							enabled: !0,
							ns_set: m
						}
					}),
					disableZoneCustomNs: async v => await (0, e.put)(d.custom_ns.toUrl({
						zoneId: v
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
				T = {
					fetchAccounCustomNs: async v => {
						try {
							return (await (0, e.get)(h.custom_ns.toUrl({
								accountId: v
							}), {
								hideErrorAlert: !0
							})).body.result
						} catch (m) {
							throw m
						}
					},
					createAccountCustomNs: async (v, m) => await (0, e.post)(h.custom_ns.toUrl({
						accountId: v
					}), {
						body: m
					}),
					deleteAccountCustomNs: async (v, m) => await (0, e.del)(h.delete.toUrl({
						accountId: v,
						nsName: m
					}))
				}
		},
		"../react/pages/dns/dns-records/tracking.ts": function(z, y, t) {
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
		"../react/pages/dns/hooks/useZoneDnsSettings.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				c: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/app/redux/index.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/pages/dns/api.ts");
			const s = "dns-zone-settings-query-key",
				f = () => {
					var c;
					const l = (0, e.useQueryClient)(),
						g = (0, r.p4)(i.nA),
						n = (c = g == null ? void 0 : g.id) !== null && c !== void 0 ? c : "",
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
							isSuccess: T,
							isError: v
						} = (0, e.useMutation)({
							mutationFn: m => u.hs.patchZoneDnsSettings(n, m),
							onSuccess: async () => await l.refetchQueries({
								queryKey: [n, s]
							})
						});
					return {
						zoneDnsData: o,
						isError: a,
						isLoading: _,
						isSuccess: T,
						refetch: d,
						mutateZoneDnsSettings: p,
						isUpdating: h,
						isUpdateError: v
					}
				}
		},
		"../react/pages/dns/types.ts": function(z, y, t) {
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
			let e = function(f) {
				return f.STANDARD = "cloudflare.standard", f.RANDOM = "cloudflare.standard.random", f.FOUNDATION = "cloudflare.foundation_dns", f.CUSTOM_ACCOUNT = "custom.account", f.CUSTOM_ZONE = "custom.zone", f
			}({});
			const r = {
				[e.STANDARD]: "account.dns_settings.zone_defaults.table.standard",
				[e.RANDOM]: "account.dns_settings.zone_defaults.table.random",
				[e.FOUNDATION]: "account.dns_settings.zone_defaults.table.foundation",
				[e.CUSTOM_ACCOUNT]: "account.dns_settings.zone_defaults.table.custom"
			};
			let i = function(f) {
					return f.NAME = "queryName", f.RESPONSE_CODE = "responseCode", f.TYPE = "queryType", f.SOURCE_IP = "sourceIP", f.DESTINATION_IP = "destinationIP", f.PROTOCOL = "protocol", f.IP_VERSION = "ipVersion", f.NAME_AND_TYPE = "nameAndType", f.QUERY_TOTALS = "queryTotals", f.COLO = "coloName", f
				}({}),
				u = function(f) {
					return f.TOTAL = "total", f.PER_SECOND = "queries_per_second", f.RESPONSE_AVG = "response_average", f
				}({}),
				s = function(f) {
					return f.MNAME = "soa.mname", f.RNAME = "soa.rname", f.REFRESH = "soa.refresh", f.RETRY = "soa.retry", f.EXPIRE = "soa.expire", f.RECORD_TTL = "soa.ttl", f.MIN_TTL = "soa.min_ttl", f
				}({})
		},
		"../react/pages/email/types.ts": function(z, y, t) {
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
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const i = r._.createAlertWithSelection,
				u = r._.editAlert,
				s = (0, e.BC)`${i}/subtype`,
				f = (0, e.BC)`${i}/stepper`,
				c = (0, e.BC)`${f}/${"stepName"}`,
				l = (0, e.BC)`${f}/details`,
				g = (0, e.BC)`${f}/data-centers`,
				n = (0, e.BC)`${f}/ramps`,
				o = (0, e.BC)`${f}/threshold`,
				a = (0, e.BC)`${f}/review`,
				_ = (0, e.BC)`${f}/confirm`,
				d = (0, e.BC)`${u}/stepper`,
				p = (0, e.BC)`${d}/${"stepName"}`,
				h = (0, e.BC)`${d}/details`,
				T = (0, e.BC)`${d}/data-centers`,
				v = (0, e.BC)`${d}/ramps`,
				m = (0, e.BC)`${d}/threshold`,
				O = (0, e.BC)`${d}/review`,
				E = (0, e.BC)`${d}/confirm`,
				w = {
					magicTunnelHealthChooseSubType: s,
					magicTunnelHealthCreateStepperBase: f,
					magicTunnelHealthCreateStepper: c,
					magicTunnelHealthCreateDetails: l,
					magicTunnelHealthCreateSelectDataCenter: g,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: o,
					magicTunnelHealthCreateReview: a,
					magicTunnelHealthCreateConfirm: _,
					magicTunnelHealthEditStepperBase: d,
					magicTunnelHealthEditStepper: p,
					magicTunnelHealthEditDetails: h,
					magicTunnelHealthEditSelectDataCenter: T,
					magicTunnelHealthEditSelectRamps: v,
					magicTunnelHealthEditSetThreshold: m,
					magicTunnelHealthEditReview: O,
					magicTunnelHealthEditConfirm: E
				};
			y.Z = w
		},
		"../react/pages/home/alerts/config.tsx": function(z, y, t) {
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

			function f(d) {
				for (var p = 1; p < arguments.length; p++) {
					var h = arguments[p] != null ? Object(arguments[p]) : {},
						T = Object.keys(h);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(h).filter(function(v) {
						return Object.getOwnPropertyDescriptor(h, v).enumerable
					})), T.forEach(function(v) {
						c(d, v, h[v])
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
				var p = g(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function g(d, p) {
				if (typeof d != "object" || d === null) return d;
				var h = d[Symbol.toPrimitive];
				if (h !== void 0) {
					var T = h.call(d, p || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const n = "Notifications",
				o = "notification",
				a = f({}, e._, r._j, i._j, u._),
				_ = f({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, s.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				_j: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				i = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				s = (0, e.BC)`${r}/pagerduty`,
				f = {
					pagerDutyConnect: i,
					pagerDutyRegister: u,
					pagerDutyList: s
				};
			var c = null
		},
		"../react/pages/home/alerts/routes.ts": function(z, y, t) {
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
				f = (0, e.BC)`${s}/${"alertType"}`,
				c = (0, e.BC)`${i}/edit/${"alertId"}`,
				l = {
					account: r,
					alerts: i,
					destinations: u,
					createAlert: s,
					createAlertWithSelection: f,
					editAlert: c
				};
			y.Z = l
		},
		"../react/pages/home/alerts/tracking.ts": function(z, y, t) {
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
		"../react/pages/home/audit-log/tracking.ts": function(z, y, t) {
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
		"../react/pages/home/configurations/dns-settings/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Aj: function() {
					return f
				},
				Am: function() {
					return g
				},
				Jy: function() {
					return v
				},
				Mv: function() {
					return _
				},
				WI: function() {
					return T
				},
				Wu: function() {
					return c
				},
				b8: function() {
					return l
				},
				cC: function() {
					return m
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

			function r(D) {
				for (var A = 1; A < arguments.length; A++) {
					var P = arguments[A] != null ? Object(arguments[A]) : {},
						B = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(P).filter(function(C) {
						return Object.getOwnPropertyDescriptor(P, C).enumerable
					})), B.forEach(function(C) {
						i(D, C, P[C])
					})
				}
				return D
			}

			function i(D, A, P) {
				return A = u(A), A in D ? Object.defineProperty(D, A, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[A] = P, D
			}

			function u(D) {
				var A = s(D, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function s(D, A) {
				if (typeof D != "object" || D === null) return D;
				var P = D[Symbol.toPrimitive];
				if (P !== void 0) {
					var B = P.call(D, A || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(D)
			}
			const f = ["hmac-sha512.", "hmac-sha256.", "hmac-sha1."],
				c = ["198.41.144.240/28", "198.41.150.240/28", "2a06:98c0:3601::/48", "2a06:98c0:1401::/48"],
				l = ["172.65.30.82", "172.65.50.145", "2606:4700:60:0:317:26ee:3bdf:5774", "2606:4700:60:0:35a:4be3:4144:c5ee"],
				g = "172.65.64.6",
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
			let h = function(D) {
				return D.STANDARD = "standard", D.DNS_ONLY = "dns_only", D.CDN_ONLY = "cdn_only", D
			}({});
			const T = {
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
				v = {
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
				m = {
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
				O = {
					NS_SET: "ns_set",
					NS_NAME: "ns_name",
					IPV4: "ipv4",
					IPV6: "ipv6",
					ACTION: "action",
					NAMESERVER: "nameserver",
					NAMESERVER_NAME: "Nameserver name",
					SET: "set"
				},
				E = {
					ACNS_CARD: "account-custom-nameserver-card",
					ACNS_DELETE: "account-custom-nameserver-card-delete",
					ACNS_CONFIGURE: "account-custom-nameserver-card-configure",
					ACNS_MODAL_INPUT: "account-custom-nameserver-modal-input",
					ACNS_MODAL_RADIO: "account-custom-nameserver-modal-input"
				},
				w = {
					FORM: "account-custom-ns-form",
					NS_SET: "ns_set",
					NS_NAME: "ns_name"
				}
		},
		"../react/pages/home/configurations/dns-settings/isZoneDNSOnly.tsx": function(z, y, t) {
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
				f = t("../react/app/redux/index.ts");
			const c = g => {
					const n = (0, e.yD)(g),
						o = (0, r.Hb)(g);
					return n || o
				},
				l = () => {
					const g = useSelector(zoneIsDNSOnly),
						{
							isZoneScope: n
						} = useScope(),
						{
							zoneDnsData: o
						} = useZoneDnsSettings(),
						a = (o == null ? void 0 : o.zone_mode) === ZONE_MODES.DNS_ONLY;
					return {
						isZoneDNSEntitlementDNSOnly: g,
						isZoneSettingsModeDNSOnly: a,
						isZoneDNSOnly: n ? g || a : !1
					}
				}
		},
		"../react/pages/home/configurations/dns-settings/selectors.ts": function(z, y, t) {
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
					return g
				},
				Pw: function() {
					return u
				},
				fF: function() {
					return f
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
				f = (0, e.P1)("dnsTsig", s),
				c = p => p.dns.secondaryDNS.masters,
				l = (0, e.P1)("dnsMaster", c),
				g = p => p.dns.secondaryDNS.zoneMasters,
				n = (0, e.P1)("zoneMasters", g),
				o = p => p.dns.secondaryDNS.outgoingZoneTransfers,
				a = (0, e.P1)("dnsOutgoingZoneTransfers", o),
				_ = p => {
					var h;
					return (h = p.dns.zoneDnsSettings) === null || h === void 0 ? void 0 : h.data
				},
				d = p => {
					var h, T;
					return ((h = p.dns.zoneDnsSettings) === null || h === void 0 || (T = h.data) === null || T === void 0 ? void 0 : T.zone_mode) === r.uC.DNS_ONLY
				}
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(z, y, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(z, y, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				AA: function() {
					return V
				},
				AN: function() {
					return rt
				},
				AY: function() {
					return pe
				},
				Ac: function() {
					return Et
				},
				Am: function() {
					return T
				},
				B2: function() {
					return x
				},
				BB: function() {
					return P
				},
				BF: function() {
					return fe
				},
				BQ: function() {
					return He
				},
				E8: function() {
					return Me
				},
				Fl: function() {
					return Ie
				},
				Fu: function() {
					return S
				},
				Gc: function() {
					return Ge
				},
				Hc: function() {
					return Bt
				},
				IO: function() {
					return _t
				},
				JK: function() {
					return Qe
				},
				K: function() {
					return w
				},
				LI: function() {
					return Rt
				},
				LX: function() {
					return J
				},
				L_: function() {
					return Z
				},
				Ly: function() {
					return Je
				},
				MR: function() {
					return L
				},
				Mj: function() {
					return X
				},
				NB: function() {
					return Pt
				},
				Oe: function() {
					return Wt
				},
				Or: function() {
					return ae
				},
				P5: function() {
					return bt
				},
				PE: function() {
					return be
				},
				Pd: function() {
					return Ct
				},
				Pk: function() {
					return Le
				},
				Pp: function() {
					return Re
				},
				Q1: function() {
					return C
				},
				Qr: function() {
					return se
				},
				Qv: function() {
					return De
				},
				Rp: function() {
					return Dt
				},
				S7: function() {
					return Ot
				},
				Sh: function() {
					return Ne
				},
				Sl: function() {
					return jt
				},
				TZ: function() {
					return N
				},
				Tg: function() {
					return ze
				},
				Tp: function() {
					return Ve
				},
				Uy: function() {
					return St
				},
				Vw: function() {
					return $
				},
				W3: function() {
					return gt
				},
				WR: function() {
					return ct
				},
				WX: function() {
					return de
				},
				XF: function() {
					return ft
				},
				Xb: function() {
					return M
				},
				Zs: function() {
					return We
				},
				_f: function() {
					return we
				},
				b4: function() {
					return ie
				},
				bc: function() {
					return Mt
				},
				c2: function() {
					return I
				},
				cE: function() {
					return xt
				},
				dh: function() {
					return Be
				},
				fE: function() {
					return Ce
				},
				g7: function() {
					return te
				},
				hO: function() {
					return dt
				},
				hV: function() {
					return Lt
				},
				hk: function() {
					return v
				},
				hr: function() {
					return Y
				},
				it: function() {
					return ot
				},
				j3: function() {
					return Ut
				},
				jN: function() {
					return ke
				},
				jo: function() {
					return kt
				},
				k3: function() {
					return wt
				},
				m8: function() {
					return W
				},
				nm: function() {
					return Xe
				},
				oW: function() {
					return Q
				},
				pH: function() {
					return K
				},
				pi: function() {
					return oe
				},
				r4: function() {
					return zt
				},
				rI: function() {
					return R
				},
				s7: function() {
					return yt
				},
				sg: function() {
					return it
				},
				tB: function() {
					return p
				},
				tN: function() {
					return ge
				},
				u_: function() {
					return $t
				},
				vV: function() {
					return Ue
				},
				vc: function() {
					return xe
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				i = t("../../../../node_modules/moment/moment.js"),
				u = t.n(i),
				s = t("../../../common/util/types/src/api/domain.ts"),
				f = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				l = t("../react/pages/home/domain-registration/config.ts"),
				g = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function o(b) {
				for (var k = 1; k < arguments.length; k++) {
					var me = arguments[k] != null ? Object(arguments[k]) : {},
						Te = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(me).filter(function($e) {
						return Object.getOwnPropertyDescriptor(me, $e).enumerable
					})), Te.forEach(function($e) {
						a(b, $e, me[$e])
					})
				}
				return b
			}

			function a(b, k, me) {
				return k = _(k), k in b ? Object.defineProperty(b, k, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[k] = me, b
			}

			function _(b) {
				var k = d(b, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function d(b, k) {
				if (typeof b != "object" || b === null) return b;
				var me = b[Symbol.toPrimitive];
				if (me !== void 0) {
					var Te = me.call(b, k || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(b)
			}

			function p(b) {
				return b.filter(k => k.isSelected).reduce((k, {
					name: me,
					fees: Te,
					isZoneEntitlementPresent: $e
				}) => $e || !(0, e.isNumber)(Te == null ? void 0 : Te.transfer_fee) ? k : Et(me) ? k + (Te == null ? void 0 : Te.transfer_fee) * 2 : k + (Te == null ? void 0 : Te.transfer_fee), 0)
			}

			function h(b) {
				return b.filter(k => k.registrar.toLowerCase() === "godaddy")
			}
			const T = "MMM D, YYYY";

			function v(b, k, me, Te) {
				var $e, ce, le, ve, _e, Oe, je, Ye, st, qe, et, lt;
				const Ze = b[k.name],
					pt = () => Et(k.name) ? u()(k.expires_at).add(2, "years").format(T) : u()(k.expires_at).add(1, "year").format(T);
				return o({
					name: k == null ? void 0 : k.name,
					zone: Ze,
					entitlements: me,
					registryCheck: Te,
					nameservers: k.name_servers,
					isAvailable: k.available,
					lastKnownStatus: k.last_known_status,
					authCode: k.auth_code,
					isEnterpriseZone: (Ze == null || ($e = Ze.plan) === null || $e === void 0 ? void 0 : $e.legacy_id) === "enterprise",
					isActiveZone: (Ze == null ? void 0 : Ze.status) === "active",
					corResponsesPending: k.cor_responses_pending,
					isCorLocked: k.cor_locked,
					corLockedUntil: k.cor_locked_until ? u()(k.cor_locked_until).format(T) : null,
					isFullZone: (Ze == null ? void 0 : Ze.type) == n.xd.Full,
					isLocked: k.locked,
					registrar: k.current_registrar || l.JM,
					zoneId: Ze == null ? void 0 : Ze.id,
					currentExpiration: u()(k.expires_at).format(T),
					newExpiration: pt(),
					lastEntitledAt: k.last_entitled_at ? new Date(k.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(tt => tt.id === l.g5 && tt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: k.transfer_in && E(k.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: k.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: k.transfer_in,
					transferOut: k.transfer_out,
					autoRenew: k.auto_renew === !0,
					lastTransferredAt: k.last_transferred_at,
					createdAt: k.created_at,
					paymentExpiresAt: u()(k.payment_expires_at).isValid() ? u()(k.payment_expires_at) : u()(k.expires_at).isValid() ? u()(k.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (ce = k.contacts) === null || ce === void 0 || (le = ce.administrator) === null || le === void 0 ? void 0 : le.id,
						[n.l2.Billing]: (ve = k.contacts) === null || ve === void 0 || (_e = ve.billing) === null || _e === void 0 ? void 0 : _e.id,
						[n.l2.Registrant]: (Oe = k.contacts) === null || Oe === void 0 || (je = Oe.registrant) === null || je === void 0 ? void 0 : je.id,
						[n.l2.Technical]: (Ye = k.contacts) === null || Ye === void 0 || (st = Ye.technical) === null || st === void 0 ? void 0 : st.id
					},
					landing: k.landing,
					privacy: k.privacy,
					whois: k.whois,
					emailVerified: k.email_verified,
					materialChanges: D(k.material_changes),
					corChanges: k.cor_changes ? P(Object.assign(o({}, O), k.cor_changes)) : {},
					registryStatuses: k.registry_statuses ? k.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (qe = k.domain_protection_services) === null || qe === void 0 ? void 0 : qe.status
					},
					deletion: {
						isDeletable: k == null || (et = k.deletion) === null || et === void 0 ? void 0 : et.is_deletable
					},
					premiumType: k == null ? void 0 : k.premium_type,
					fees: k == null ? void 0 : k.fees
				}, k.domain_move && {
					domainMove: {
						ineligibilityReasons: (lt = k.domain_move) === null || lt === void 0 ? void 0 : lt.ineligibility_reasons
					}
				}, k.actionable_metadata && {
					actionableMetadata: m(k.actionable_metadata)
				}, k.policies && {
					policies: o({}, k.policies.suspension && {
						suspension: {
							parked: k.policies.suspension.parked,
							parkingReason: k.policies.suspension.parking_reason,
							paymentExpired: k.policies.suspension.payment_expired
						}
					})
				})
			}

			function m(b) {
				return b.map(k => ({
					accountContext: k.account_context,
					createdAt: k.created_at,
					expiresAt: k.expires_at,
					sentAt: k.sent_at,
					status: k.status,
					type: k.type
				}))
			}
			const O = {
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

			function E(b) {
				switch (b.enter_auth_code) {
					case n.lW.OK:
						return n.BJ.Valid;
					case n.lW.NEEDED:
						return n.BJ.Pending;
					case n.lW.UNKNOWN:
						return n.BJ.Pending;
					case n.lW.REJECTED:
						return n.BJ.Error;
					case n.lW.TRYING:
						return n.BJ.Pending
				}
				return n.BJ.Pending
			}

			function w(b) {
				let k = b.extensions;
				((k == null ? void 0 : k.application_purpose) && (k == null ? void 0 : k.nexus_category) || (k == null ? void 0 : k.ca_legal_type)) && (b.extensions = o({}, (k == null ? void 0 : k.nexus_category) && {
					nexusCategory: k.nexus_category
				}, (k == null ? void 0 : k.application_purpose) && {
					applicationPurpose: k.application_purpose
				}, (k == null ? void 0 : k.ca_legal_type) && {
					ca_legal_type: k.ca_legal_type
				}));
				let me = o({}, typeof b.id == "string" ? {
					id: b.id
				} : {}, {
					first_name: b.firstName,
					organization: b.organization,
					address: b.address1,
					city: b.city,
					state: b.state || "N/A",
					zip: b.zip,
					country: b.country,
					phone: b.phone,
					email: b.email,
					fax: "",
					last_name: b.lastName,
					address2: b.address2,
					email_verified: b.emailVerified
				}, b.extensions ? {
					extensions: o({}, b.extensions.nexusCategory && {
						nexus_category: b.extensions.nexusCategory
					}, b.extensions.applicationPurpose && {
						application_purpose: b.extensions.applicationPurpose
					}, b.extensions.ca_legal_type && {
						ca_legal_type: b.extensions.ca_legal_type
					})
				} : {});
				return nt(me)
			}

			function D(b) {
				let k = [];
				const me = {
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
				for (const Te in b) {
					const $e = b[Te],
						ce = me[$e];
					k.push(ce)
				}
				return k
			}
			const A = b => {
				if (!b) return null;
				let k = b;
				return b.includes("C31") && (k = "C31"), b.includes("C32") && (k = "C32"), k
			};

			function P(b) {
				return o({}, typeof b.id == "string" ? {
					id: b.id
				} : {}, {
					firstName: b.first_name,
					organization: b.organization,
					address1: b.address,
					city: b.city,
					state: b.state,
					zip: b.zip,
					country: b.country,
					phone: b.phone.trim(),
					email: b.email.trim(),
					lastName: b.last_name,
					address2: b.address2,
					emailVerified: b.email_verified
				}, b.extensions ? {
					extensions: o({}, b.extensions.nexus_category && {
						nexusCategory: A(b.extensions.nexus_category)
					}, b.extensions.application_purpose && {
						applicationPurpose: b.extensions.application_purpose
					}, b.extensions.ca_legal_type && {
						ca_legal_type: b.extensions.ca_legal_type
					})
				} : {})
			}

			function B(b = {}) {
				const k = {
					name: "",
					zoneId: "",
					zone: o({
						id: "",
						name: "",
						status: "pending",
						plan: o({
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
						}, b.zone && b.zone.plan || {}),
						type: EZoneType.Full
					}, b.zone || {}),
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
					transferConditions: o({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, b.transferConditions || {}),
					transferIn: o({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, b.transferIn || {}),
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
				return Object.assign(k, b)
			}

			function C(b = {}) {
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
				}, b)
			}

			function S(b) {
				const k = l.Py.concat(l.ui).reduce((me, Te) => o({}, me, {
					[Te]: []
				}), {});
				return b.forEach(me => {
					let Te = U(me.registrar);
					Te in k || (Te = l.ui), it(me.name) && (Te = "uk"), k[Te].push(me)
				}), Object.keys(k).sort((me, Te) => me.localeCompare(Te)).map(me => ({
					registrar: me,
					domains: k[me]
				})).filter(me => me.domains.length > 0)
			}

			function U(b) {
				return b == null ? void 0 : b.toLowerCase().replace(/\s|,|\./g, "")
			}

			function $(b) {
				if (!b || !b.registrar) return "unknown";
				if (it(b.name)) return "uk";
				const k = U(b.registrar);
				return k in l.gM ? k : "unknown"
			}
			const G = [];

			function ne(b) {
				return G.some(k => b.endsWith("." + k))
			}

			function ee(b) {
				return !b.isEnterpriseZone || !Array.isArray(b.entitlements) ? !1 : !!b.entitlements.find(({
					id: k,
					allocation: me
				}) => k === l.g5 && me.value === !0)
			}

			function oe(b) {
				var k;
				const me = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let Te = !1,
					$e = null;
				return (k = b.registryStatuses) === null || k === void 0 || k.some(ce => {
					me.includes(ce) && ($e = ce, Te = !0)
				}), [Te, $e]
			}

			function W(b, k = !1) {
				if (!b) return [!1, g.keys.cannot_transfer_default];
				if (b.zone.status !== "active") return [!1, g.keys.cannot_transfer_zone_not_active];
				if (!b.isFullZone && !ee(b)) return [!1, g.keys.cannot_transfer_zone_not_eligible];
				if (b.registrar === "Cloudflare") return [!1, g.keys.cannot_transfer_domain_on_cf];
				if (b.isAvailable) return [!1, g.keys.cannot_transfer_domain_available];
				if (!b.transferConditions) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (!k && St(b == null ? void 0 : b.premiumType)) return [!1, g.keys.cannot_transfer_domain_premium];
				if (K(b)) return [!1, g.keys.cannot_transfer_domain_transfer_in_progress];
				let me;
				for (me in b.transferConditions)
					if (me !== "not_premium" && !b.transferConditions[me]) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (ne(b.name)) return [!1, g.keys.cannot_transfer_domain_tld_not_supported];
				const [Te, $e] = oe(b);
				return Te && $e ? [!1, g.keys.cannot_transfer_domain_registry_status[$e]] : [!0, ""]
			}

			function K(b) {
				var k, me;
				return !!b.transferIn && !((k = b.transferConditions) === null || k === void 0 ? void 0 : k.not_started) && !!(it(b.name) || ((me = b.registryStatuses) === null || me === void 0 ? void 0 : me.includes(n.rj.PENDING_TRANSFER)))
			}

			function F(b) {
				return !!b.registrar && !!b.currentExpiration
			}

			function x(b, k = !1) {
				const [me] = W(b, k);
				return F(b) ? Ee(b) ? n.M5.InProgressOrOnCF : me ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function I(b) {
				return b.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(b.transferIn.enter_auth_code) || !1
			}

			function L(b) {
				return b.registrar === "Cloudflare"
			}

			function R(b) {
				return !!(b == null ? void 0 : b.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function X(b) {
				return !!(b == null ? void 0 : b.includes(n.rj.PENDING_TRANSFER))
			}
			const q = "Invalid date";

			function ae(b) {
				return b.newExpiration === q ? !1 : b.newExpiration
			}

			function N(b) {
				return b.currentExpiration === q ? !1 : b.currentExpiration
			}

			function V(b) {
				return b.substring(b.indexOf("."))
			}

			function M(b = "") {
				return b.indexOf(".") !== -1 ? b.substring(0, b.indexOf(".")) : b
			}

			function Y(b) {
				return b.map(k => k.name).map(k => V(k)).filter((k, me, Te) => !Te.includes(k, me + 1))
			}

			function ie(b) {
				if (l.no) return [!0, ""];
				if (!L(b)) return [!1, n.ok.NotOnCF];
				if (b.isCorLocked) return [!1, b.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (b.lastTransferredAt) {
					const k = u()(b.lastTransferredAt),
						me = u().duration(u()().diff(k)).as("days"),
						Te = it(b.name);
					if (me < (Te ? 1 : 60)) return [!1, Te ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (b.createdAt) {
					const k = u()(b.createdAt);
					if (u().duration(u()().diff(k)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function de(b) {
				return !!(l.Bc || b.transferOut)
			}

			function Ee(b) {
				return te(b) || L(b)
			}

			function ge(b) {
				return !te(b) && L(b)
			}

			function te(b) {
				return !b || b.lastKnownStatus === n.kd.PENDING_TRANSFER || b.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !L(b) && b.transferConditions && !b.transferConditions.not_started || !1
			}

			function be(b) {
				return !(ne(b.name) || b.transferConditions && !b.transferConditions.supported_tld)
			}

			function De(b) {
				return (b == null ? void 0 : b.includes("/")) ? !0 : b.split("").some(k => k.charCodeAt(0) > 123)
			}

			function Le(b) {
				switch (b) {
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

			function xe(b) {
				return u()(b.paymentExpiresAt).isBefore(u()())
			}

			function ke(b) {
				return b.transferIn && b.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Qe(b) {
				const k = ["CU", "KP", "IR", "SY"];
				return b.filter(me => !k.includes(me.code))
			}

			function ze(b) {
				if (!!b) return `${b.charAt(0).toUpperCase()}${b.slice(1)}${b.charAt(b.length-1)==="."?"":"."}`
			}

			function nt(b) {
				const k = {};
				for (const [me, Te] of Object.entries(b)) {
					if (Te && typeof Te == "string") {
						Object.assign(k, {
							[me]: Te.trim()
						});
						continue
					}
					Object.assign(k, {
						[me]: Te
					})
				}
				return k
			}

			function We(b) {
				return u()(b).add(40, "days")
			}

			function Z(b) {
				const k = b.paymentExpiresAt || b.payment_expires_at,
					me = We(k);
				return u()().isBetween(k, me)
			}

			function Ce(b) {
				var k;
				return !(b == null ? void 0 : b.registryStatuses) || !Array.isArray(b == null ? void 0 : b.registryStatuses) && !(0, e.isString)(b == null ? void 0 : b.registryStatuses) ? !1 : (k = b.registryStatuses) === null || k === void 0 ? void 0 : k.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Be(b) {
				var k;
				return !(b == null ? void 0 : b.registryStatuses) || !Array.isArray(b == null ? void 0 : b.registryStatuses) && !(0, e.isString)(b == null ? void 0 : b.registryStatuses) ? !1 : (k = b.registryStatuses) === null || k === void 0 ? void 0 : k.includes(n.rj.PENDING_DELETE)
			}

			function Re(b) {
				return [".us"].includes(b)
			}

			function ot(b) {
				return [".us"].includes(b)
			}

			function dt(b) {
				switch (b) {
					case ".us":
						return at();
					default:
						return []
				}
			}

			function gt(b) {
				switch (b) {
					case ".us":
						return Ae;
					default:
						return {}
				}
			}
			const Ae = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function at() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([b, k]) => ({
						value: b,
						label: k
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([b, k]) => ({
						value: b,
						label: k
					}))
				}]
			}

			function J(b, k, me) {
				return k[k.length - 1][me] === b[me]
			}

			function se(b) {
				return Boolean(Object.keys(b).length === 0)
			}

			function fe(b) {
				return u()().add(b, "year").format(T)
			}

			function we({
				accountName: b
			}) {
				var k;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((k = b.toLowerCase().match(me)) === null || k === void 0 ? void 0 : k[0]) || ""
			}

			function Ue(b) {
				return !!b.match(f.default.email)
			}

			function Ve(b) {
				return b === s.W7.PENDING_UPDATE
			}

			function Ge(b) {
				return b ? Object.values(s.wR).filter(k => k !== s.wR.OFFBOARDED).includes(b) : !1
			}

			function yt(b) {
				return b ? [s.wR.LOCKED, s.wR.ONBOARDED, s.wR.ONBOARDING_INITIATED, s.wR.PENDING_REGISTRY_LOCK, s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(b) : !1
			}

			function ht(b) {
				return b ? s.wR.UNLOCKED === b : !1
			}

			function mt(b) {
				return b ? s.wR.LOCKED === b : !1
			}

			function Rt(b) {
				return b ? s.wR.PENDING_REGISTRY_LOCK === b : !1
			}

			function He(b) {
				return b ? [s.wR.PENDING_REGISTRY_UNLOCK, s.wR.PENDING_UNLOCK_APPROVAL].includes(b) : !1
			}

			function _t(b) {
				var k;
				return !1
			}

			function ct(b) {
				var k;
				return !1
			}

			function rt(b) {
				var k;
				return !1
			}

			function ft(b) {
				var k;
				return !1
			}

			function Me(b) {
				var k;
				return !1
			}

			function Q(b) {
				return Object.keys(s.wR).find(k => s.wR[k].toLowerCase() === b.toLowerCase())
			}

			function pe(b) {
				var k;
				const me = (k = Q(b)) === null || k === void 0 ? void 0 : k.toLowerCase();
				return me ? g.keys.protection_status[me] : g.keys.protection_status.unknown
			}

			function he(b) {
				return ["com", "net"].includes(b)
			}

			function Ie(b) {
				const k = (0, c.pu)(b);
				return he(k) ? s.wR.PENDING_REGISTRY_LOCK : s.wR.LOCKED
			}

			function Ne(b) {
				return (0, c.pu)(b) === "co" ? 5 : 10
			}

			function Xe(b, k) {
				return k ? 1 : (0, c.pu)(b) === "co" ? 5 : (0, c.pu)(b) === "org" ? 1 : 10
			}

			function it(b) {
				return (0, c.pu)(b) === "uk"
			}

			function xt(b) {
				return (0, c.pu)(b) === "us"
			}

			function Et(b) {
				return (0, c.pu)(b) === "ai"
			}

			function Dt(b) {
				return u()(b).isValid()
			}

			function Je(b) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(b)
			}

			function bt(b) {
				return !!(b == null ? void 0 : b.id)
			}

			function Pt(b) {
				return b ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(b) : !1
			}

			function Ct(b) {
				return b ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(b) : !1
			}

			function Lt(b) {
				var k;
				return (b == null ? void 0 : b.lastKnownStatus) ? (k = b.lastKnownStatus) === null || k === void 0 ? void 0 : k.includes("deletionIrredeemable") : !1
			}

			function St(b) {
				switch (b) {
					case n.Vs.NonStandard_NonStandard:
					case n.Vs.NonStandard_Standard:
					case n.Vs.Standard_Standard:
					case n.Vs.Standard_NonStandard:
						return !0;
					case n.Vs.Not_Premium:
					default:
						return !1
				}
			}

			function Bt(b) {
				if (!b || !b.message) return n.OJ.DEFAULT;
				const {
					message: k
				} = b;
				switch (!0) {
					case k.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case k.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case k.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function Ot(b) {
				var k, me;
				return !!(((k = b.policies) === null || k === void 0 || (me = k.suspension) === null || me === void 0 ? void 0 : me.parked) && b.policies.suspension.parkingReason)
			}

			function Ut(b) {
				var k, me;
				return Ot(b) && ((k = b.policies) === null || k === void 0 || (me = k.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function wt(b) {
				var k, me;
				return Ot(b) && ((k = b.policies) === null || k === void 0 || (me = k.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function jt(b) {
				var k;
				return !((k = b.domainMove) === null || k === void 0 ? void 0 : k.ineligibilityReasons.length)
			}

			function Wt(b) {
				var k, me;
				return !!((k = b.domainMove) === null || k === void 0 || (me = k.ineligibilityReasons) === null || me === void 0 ? void 0 : me.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Tt(b) {
				var k;
				return (k = b.actionableMetadata) === null || k === void 0 ? void 0 : k.find(me => me.type === n.wg.DOMAIN_MOVE)
			}

			function kt(b) {
				const k = Tt(b);
				return (k == null ? void 0 : k.status) === "pending" && k.accountContext === n._5.GAINING
			}

			function $t(b) {
				const k = Tt(b);
				return (k == null ? void 0 : k.status) === "pending" && k.accountContext === n._5.LOSING
			}

			function zt(b) {
				const k = V(b.name);
				return !l.Pf.includes(k)
			}

			function Mt(b) {
				return l.QZ.includes(b)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Bc: function() {
					return l
				},
				HG: function() {
					return be
				},
				Hv: function() {
					return De
				},
				JM: function() {
					return i
				},
				Pf: function() {
					return _
				},
				Py: function() {
					return f
				},
				QZ: function() {
					return d
				},
				WK: function() {
					return n
				},
				g5: function() {
					return o
				},
				gM: function() {
					return s
				},
				jk: function() {
					return te
				},
				kO: function() {
					return p
				},
				no: function() {
					return g
				},
				uY: function() {
					return c
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
				f = Object.keys(s),
				c = !0,
				l = (0, r.J8)("registrar_mock_transfer_out") || !1,
				g = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				o = "cf_registrar.enabled",
				a = "@abcABC1234567890123456",
				_ = [".us"],
				d = [".travel", ".us", ".ong", ".ngo"],
				p = ["BR", "CA", "MX", "US"],
				h = (0, e.BC)`/${"accountId"}`,
				T = (0, e.BC)`${h}/add-site`,
				v = (0, e.BC)`${h}/registrar`,
				m = (0, e.BC)`${v}/domains`,
				O = (0, e.BC)`${v}/action-center`,
				E = (0, e.BC)`${v}/domain/${"zoneName"}`,
				w = (0, e.BC)`${E}/configuration`,
				D = (0, e.BC)`${E}/contacts`,
				A = (0, e.BC)`${v}/pricing`,
				P = (0, e.BC)`${v}/protection`,
				B = (0, e.BC)`${v}/register`,
				C = (0, e.BC)`${B}/checkout`,
				S = (0, e.BC)`${B}/checkout/${"token"}`,
				U = (0, e.BC)`${B}/success`,
				$ = (0, e.BC)`${v}/tlds`,
				G = (0, e.BC)`${v}/transfer`,
				ne = (0, e.BC)`${v}/transfer/${"zoneName"}`,
				ee = (0, e.BC)`/registrar/accounts/verify_email`,
				oe = (0, e.BC)`/registrar/domains/verify_email`,
				W = (0, e.BC)`/sign-up/registrar`,
				K = (0, e.BC)`${v}/verify-email`,
				F = (0, e.BC)`${h}/${"zoneName"}`,
				x = (0, e.BC)`${h}/domains`,
				I = (0, e.BC)`${x}/action-center`,
				L = (0, e.BC)`${x}/${"zoneName"}`,
				R = (0, e.BC)`${L}/configuration`,
				X = (0, e.BC)`${L}/contacts`,
				q = (0, e.BC)`${x}/pricing`,
				ae = (0, e.BC)`${x}/protection`,
				N = (0, e.BC)`${x}/register`,
				V = (0, e.BC)`${N}/checkout`,
				M = (0, e.BC)`${N}/checkout/${"token"}`,
				Y = (0, e.BC)`${N}/success`,
				ie = (0, e.BC)`${x}/tlds`,
				de = (0, e.BC)`${x}/transfer`,
				Ee = (0, e.BC)`${x}/transfer/${"zoneName"}`,
				ge = (0, e.BC)`${x}/verify-email`,
				te = {
					addSite: T,
					domains: m,
					domainsActionCenter: O,
					domainsDomain: E,
					domainsDomainConfiguration: w,
					domainsDomainContacts: D,
					domainsPricing: A,
					domainsProtection: P,
					domainsRegister: B,
					domainsRegisterCheckout: C,
					domainsRegisterCheckoutToken: S,
					domainsRegisterSuccess: U,
					domainsTlds: $,
					domainsTransfer: G,
					domainsTransferZone: ne,
					registrar: v,
					registrarAccountsVerifyEmail: ee,
					registrarDomainsVerifyEmail: oe,
					signup: W,
					verifyEmail: K,
					zone: F
				},
				be = {
					LEGACY_domains: x,
					LEGACY_domainsActionCenter: I,
					LEGACY_domainsDomain: L,
					LEGACY_domainsDomainConfiguration: R,
					LEGACY_domainsDomainContacts: X,
					LEGACY_domainsPricing: q,
					LEGACY_domainsProtection: ae,
					LEGACY_domainsRegister: N,
					LEGACY_domainsRegisterCheckout: V,
					LEGACY_domainsRegisterCheckoutToken: M,
					LEGACY_domainsRegisterSuccess: Y,
					LEGACY_domainsTlds: ie,
					LEGACY_domainsTransfer: de,
					LEGACY_domainsTransferZone: Ee,
					LEGACY_verifyEmail: ge
				},
				De = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(z, y, t) {
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
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");
			const i = g => {
					const n = g && g.accountFlags && g.accountFlags.data && g.accountFlags.data.registrar && g.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(o => o.trim()) : []
				},
				u = g => {
					var n, o, a;
					return ((n = g.accountFlags) === null || n === void 0 || (o = n.data) === null || o === void 0 || (a = o.registrar) === null || a === void 0 ? void 0 : a["registrar-managed"]) || !1
				},
				s = g => g.account ? g.account.email : "",
				f = g => !1,
				c = g => f(g) && (0, e.oJ)((0, e.Zu)(g)),
				l = g => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: o
					} = g.registrar.registrations;
					return n && !(o.accepted_date || o.id || o.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(z, y, t) {
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

			function f(a) {
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
				var _ = g(a, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function g(a, _) {
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
				return a.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", a.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", a.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", a.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", a.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", a.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", a.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", a.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", a.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", a.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE = "change canada registrant legal type", a.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", a.RENEW_DOMAIN_COMPLETED = "domain renewal completed", a.RESTORE_DOMAIN_INIT = "click to open domain restore modal", a.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", a.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", a.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", a.RESTORE_DOMAIN_FAILURE = "domain restore failed", a.RESTORE_DOMAIN_COMPLETED = "domain restore completed", a.DOMAIN_DELETE_INIT = "click to begin domain delete", a.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", a.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", a.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", a.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", a.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", a.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", a.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", a.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", a.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", a.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", a.DOMAIN_MOVE_START_FLOW = "Start domain move flow", a.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", a.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", a.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", a.DOMAIN_MOVE_SUBMIT = "Submit domain move", a.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", a.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", a.DOMAIN_MOVE_CANCEL = "Domain move cancel", a.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", a.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", a.ACTION_CENTER_NAVIGATE = "Navigate to actions center", a.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", a.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", a.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS = "domain update canada registrant type completed successfully", a.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR = "domain update canada registrant type failed", a
			}({});

			function o(a, _, d) {
				if (!(_ == null ? void 0 : _.name)) return null;
				u().sendEvent(a, f({
					domain: f({
						name: _.name,
						premium: (0, s.Uy)(_ == null ? void 0 : _.premiumType)
					}, (_ == null ? void 0 : _.paymentExpiresAt) && {
						paymentExpiresAt: r()(_ == null ? void 0 : _.paymentExpiresAt).format()
					}),
					category: "registrar"
				}, d))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				HX: function() {
					return c
				},
				Re: function() {
					return v
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
				f = t("../react/common/components/AccessCheck/useAccountPermissionGroups.ts");
			let c = function(m) {
				return m.UNKNOWN = "unknown", m.WORKERS = "workers", m.ACCESS_APPS = "access_apps", m.ACCESS_IDP = "access_ipd", m
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

			function g(m) {
				return {
					key: "com.cloudflare.edge.worker.script." + m.id,
					name: m.name + (m.environment ? ` (${m.environment})` : ""),
					type: c.WORKERS
				}
			}

			function n(m) {
				const O = m;
				return {
					key: "com.cloudflare.edge.access.app." + O.id,
					name: O.name,
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

			function a(m) {
				const O = m,
					E = o[O.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + O.id,
					name: `${E||"Unknown Type"}${O.name?" - "+O.name:""}`,
					type: c.ACCESS_IDP
				}
			}
			const _ = async (m, O, E) => O == c.WORKERS ? (await d(`/accounts/${m}/workers/scripts-search?name=${E}&perPage=10`)).body.result.map(w => ({
				id: w.id,
				name: w.service_name || w.script_name,
				environment: w.environment_name
			})).map(g) : O == c.ACCESS_APPS ? (await d(`/accounts/${m}/access/apps?name=${E}`)).body.result.map(n) : O == c.ACCESS_IDP ? (await d(`/accounts/${m}/access/identity_providers`)).body.result.map(a) : [];
			async function d(m) {
				try {
					return await (0, e.get)(m, {
						hideErrorAlert: !0
					})
				} catch (w) {
					var O, E;
					throw ((O = w.body) === null || O === void 0 ? void 0 : O.errors) ? w.body.errors[0].message : w.text ? w.text : ((E = w.response) === null || E === void 0 ? void 0 : E.statusText) ? w.response.statusText : "Unexpected error response"
				}
			}
			const p = async (m, O) => {
				const E = O.split("."),
					w = E.pop(),
					D = E.join(".");
				let A;
				switch (D) {
					case "com.cloudflare.edge.worker.script":
						const P = (await d(`/accounts/${m}/workers/scripts-search/${w}`)).body.result;
						return g({
							id: P.id,
							name: P.service_name || P.script_name,
							environment: P.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return A = await d(`/accounts/${m}/access/identity_providers/${w}`), a(A.body.result);
					case "com.cloudflare.edge.access.app":
						return A = await d(`/accounts/${m}/access/apps/${w}`), n(A.body.result)
				}
			}, h = {
				loading: !0,
				isDisabled: !0
			}, T = () => "production";

			function v(m) {
				const [O] = (0, f.k)(m), [E, w] = (0, i.useState)(!0), [D, A] = (0, i.useState)([]);
				return (0, i.useEffect)(() => {
					if (!O) return;
					const P = l.filter(B => O.find(C => C.meta.scopes === B.scopeKeyPrefix)).map(B => {
						const C = B.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							S = O.filter(U => U.meta.scopes === B.scopeKeyPrefix).find(U => !U.meta.visibility || U.meta.visibility !== "beta");
						return {
							value: B.value,
							label: (0, s.ZP)(B.label_i18n),
							state: C ? h : {
								loading: !1,
								isDisabled: !1
							},
							beta: !S
						}
					});
					A(P)
				}, [O]), (0, i.useEffect)(() => {
					(async () => {
						try {
							await _(m, c.ACCESS_APPS, ""), h.isDisabled = !1
						} catch (P) {
							P.startsWith("access.api.error.not_enabled") ? h.disableInfo = (0, s.ZP)("policy.granular_resources.type.access.not_enabled") : h.error = P
						}
						h.loading = !1, A(P => [...P])
					})()
				}, [m]), (0, i.useEffect)(() => {
					const P = D.find(B => B.state.loading);
					w(!!P)
				}, [D]), {
					types: D,
					isLoading: E
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return g
				},
				F4: function() {
					return h
				},
				Go: function() {
					return _
				},
				Lc: function() {
					return w
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
					return E
				},
				Sz: function() {
					return O
				},
				Ti: function() {
					return D
				},
				Uw: function() {
					return v
				},
				Zl: function() {
					return T
				},
				jk: function() {
					return m
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
				f = (0, e.BC)`${i}/add-policy/${"memberId"}`,
				c = (0, e.BC)`${i}/user-groups`,
				l = (0, e.BC)`${i}/user-groups/${"userGroupId"}`,
				g = "com.cloudflare.api.account",
				o = g + "." + "zone",
				a = o + ".",
				_ = 100,
				d = 200,
				p = 5,
				h = 300,
				T = "INVITE_TOAST",
				v = "00000000000000000000000000000000",
				m = {
					account: r,
					members: i,
					groups: c,
					group: l,
					inviteMembers: u,
					editMember: s,
					addPolicy: f
				},
				O = {
					allow: "allow",
					deny: "deny"
				},
				E = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				w = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				D = {
					accountId: "",
					effect: O.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Bz: function() {
					return l
				},
				SH: function() {
					return g
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
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
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
				g = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return m
				},
				Co: function() {
					return T
				},
				Hf: function() {
					return P
				},
				JP: function() {
					return v
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
					return g
				},
				rC: function() {
					return C
				},
				vq: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				i = t("../react/pages/home/members/constants.ts");

			function u($) {
				for (var G = 1; G < arguments.length; G++) {
					var ne = arguments[G] != null ? Object(arguments[G]) : {},
						ee = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(ne).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(ne, oe).enumerable
					})), ee.forEach(function(oe) {
						s($, oe, ne[oe])
					})
				}
				return $
			}

			function s($, G, ne) {
				return G = f(G), G in $ ? Object.defineProperty($, G, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : $[G] = ne, $
			}

			function f($) {
				var G = c($, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function c($, G) {
				if (typeof $ != "object" || $ === null) return $;
				var ne = $[Symbol.toPrimitive];
				if (ne !== void 0) {
					var ee = ne.call($, G || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)($)
			}
			const l = () => u({}, i.Ti),
				g = () => u({}, i.Lc, {
					scopes: [l()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = $ => $.map(G => ({
					scope: {
						key: G,
						objects: [{
							key: "*"
						}]
					}
				})),
				o = ($, G, ne) => {
					var ee;
					let oe = [],
						W = [];
					const K = [],
						F = [];
					$.scopes.forEach(L => {
						if (L.mode === i.Sw.all) ne ? oe.push({
							id: ne
						}) : oe.push({
							scope: {
								key: `com.cloudflare.api.account.${G}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (L.mode === i.Sw.domain_group) {
							const X = {
								id: L.resourceGroupId
							};
							L.effect === i.Sz.allow ? oe.push(X) : W.push(X)
						} else if (L.mode === i.Sw.zone) {
							const X = `${i.Rl}${L.zoneId}`;
							L.effect === i.Sz.allow ? K.push(X) : F.push(X)
						} else if (L.mode === i.Sw.granular && L.granularResourceKey) {
							var R;
							const X = L.granularProduct,
								ae = `${(R=r.s_.find(N=>N.value===X))===null||R===void 0?void 0:R.scopeSubsetOfPrefix}.${G}`;
							oe.push({
								scope: {
									key: `${L.granularResourceKey}`,
									subset_of: [{
										key: `${ae}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), K.length && (oe = oe.concat(n(K))), F.length && (W = W.concat(n(F)));
					const x = (ee = $.permission_groups) === null || ee === void 0 ? void 0 : ee.map(L => ({
							id: L
						})),
						I = [];
					return I.push({
						access: i.Sz.allow,
						permission_groups: x,
						resource_groups: oe
					}), W.length && I.push({
						access: i.Sz.deny,
						permission_groups: x,
						resource_groups: W
					}), I
				},
				a = $ => $.map(G => {
					var ne;
					return {
						access: G.access,
						permission_groups: G.permission_groups.map(ee => ({
							id: ee.id
						})),
						resource_groups: (ne = G.resource_groups) === null || ne === void 0 ? void 0 : ne.map(ee => ({
							scope: {
								key: ee.scope.key,
								objects: ee.scope.objects
							},
							id: ee.id
						}))
					}
				}),
				_ = ($, G, ne, ee) => {
					const oe = $.auto_accept;
					let W = [];
					return W = W.concat(o($, G, ne)), ee && (W = W.concat(a(ee))), {
						auto_accept: oe,
						status: oe ? "accepted" : "pending",
						policies: W
					}
				},
				d = $ => {
					const G = $.split(".");
					return G[G.length - 1]
				},
				p = $ => {
					var G, ne;
					const ee = $ == null ? void 0 : $.access;
					let oe = [],
						W = $ == null || (G = $.resource_groups) === null || G === void 0 ? void 0 : G.map(K => {
							var F;
							const x = h(K);
							if ((K == null || (F = K.meta) === null || F === void 0 ? void 0 : F.editable) === "false") return {
								effect: ee,
								mode: i.Sw.all,
								accountId: d(K.id)
							};
							if (x) {
								var I;
								return {
									effect: ee,
									mode: i.Sw.granular,
									granularProduct: x.value,
									granularResourceKey: K == null || (I = K.scope) === null || I === void 0 ? void 0 : I.key
								}
							} else if (!K.name) K.scope.key.startsWith(i.Rl) ? oe.push({
								key: K.scope.key
							}) : oe = oe.concat(K.scope.objects);
							else return {
								effect: ee,
								mode: i.Sw.domain_group,
								resourceGroupId: d(K.id)
							}
						}).filter(K => K);
					if ((ne = oe) === null || ne === void 0 ? void 0 : ne.length) {
						let K = oe.map(F => {
							const x = d(F.key);
							return {
								effect: ee,
								mode: i.Sw.zone,
								zoneId: x
							}
						});
						W = W.length ? K.concat(W) : K
					}
					return W
				},
				h = $ => {
					var G, ne, ee, oe;
					const W = $ == null || (G = $.scope) === null || G === void 0 ? void 0 : G.key.split(".").slice(0, -1).join("."),
						K = $ == null || (ne = $.scope) === null || ne === void 0 || (ee = ne.subset_of) === null || ee === void 0 || (oe = ee[0]) === null || oe === void 0 ? void 0 : oe.key.split(".").slice(0, -1).join(".");
					return r.s_.find(F => F.scopeKeyPrefix === W && F.scopeSubsetOfPrefix === K)
				},
				T = $ => {
					if (!($ == null ? void 0 : $.length)) return [];
					const G = [];
					return $.forEach(ne => {
						var ee;
						(ee = ne.resource_groups) === null || ee === void 0 || ee.forEach(oe => {
							var W, K;
							((W = oe.scope) === null || W === void 0 || (K = W.key) === null || K === void 0 ? void 0 : K.startsWith(i.Rl)) && G.push(d(oe.scope.key))
						})
					}), G
				},
				v = $ => {
					if (!($ == null ? void 0 : $.length)) return [];
					const G = [];
					return $.forEach(ne => {
						var ee;
						(ee = ne.resource_groups) === null || ee === void 0 || ee.forEach(oe => {
							var W, K;
							if (!((W = oe.scope) === null || W === void 0 || (K = W.key) === null || K === void 0 ? void 0 : K.startsWith(i.Rl))) {
								var F;
								const I = (F = oe.scope) === null || F === void 0 ? void 0 : F.objects;
								for (let L = 0; L < (I == null ? void 0 : I.length) && L < i.r6; L++) {
									var x;
									((x = I[L].key) === null || x === void 0 ? void 0 : x.startsWith(i.Rl)) && G.push(d(I[L].key))
								}
							}
						})
					}), G
				},
				m = $ => {
					var G;
					if (!($ == null ? void 0 : $.length)) return null;
					const ne = (G = $[0]) === null || G === void 0 ? void 0 : G.permission_groups.map(K => K.id);
					let ee, oe;
					$ == null || $.forEach(K => {
						K.access === i.Sz.allow && (ee = K), K.access === i.Sz.deny && (oe = K)
					});
					let W = [];
					return ee && (W = p(ee)), oe && (W = W.concat(p(oe))), {
						permission_groups: ne,
						scopes: W
					}
				},
				O = "permission-groups-",
				E = "permission-groups-expiring-",
				w = 1 * 24 * 60 * 60,
				D = new Map,
				A = $ => B(O, $),
				P = $ => B(E, $),
				B = ($, G) => {
					if (!G) return [];
					const ne = D.get(G);
					if (ne) return ne;
					const ee = e.E.get(`${$}${G}`);
					return ee ? (D.set(G, ee), ee) : []
				},
				C = ($, G) => U(O, $, G),
				S = ($, G) => U(E, $, G),
				U = ($, G, ne) => {
					const ee = [];
					for (let W = 0; W < sessionStorage.length; W++) {
						const K = sessionStorage.key(W);
						(K == null ? void 0 : K.startsWith($)) && ee.push(K)
					}
					ee.length >= 5 && e.E.remove(ee[0]);
					let oe;
					return $ === E && (oe = w), e.E.set(`${$}${G}`, ne, oe)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(z, y, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(z, y, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return c
				},
				L9: function() {
					return n
				},
				N3: function() {
					return g
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
				var a = f(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(o, a) {
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
				g = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const n = (o, a = {}) => {
				r().sendEvent(o, i({}, a, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				KJ: function() {
					return D
				},
				_m: function() {
					return T
				},
				imagesEndpoints: function() {
					return te
				},
				vQ: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(be) {
				for (var De = 1; De < arguments.length; De++) {
					var Le = arguments[De] != null ? Object(arguments[De]) : {},
						xe = Object.keys(Le);
					typeof Object.getOwnPropertySymbols == "function" && xe.push.apply(xe, Object.getOwnPropertySymbols(Le).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(Le, ke).enumerable
					})), xe.forEach(function(ke) {
						i(be, ke, Le[ke])
					})
				}
				return be
			}

			function i(be, De, Le) {
				return De = u(De), De in be ? Object.defineProperty(be, De, {
					value: Le,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : be[De] = Le, be
			}

			function u(be) {
				var De = s(be, "string");
				return typeof De == "symbol" ? De : String(De)
			}

			function s(be, De) {
				if (typeof be != "object" || be === null) return be;
				var Le = be[Symbol.toPrimitive];
				if (Le !== void 0) {
					var xe = Le.call(be, De || "default");
					if (typeof xe != "object") return xe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (De === "string" ? String : Number)(be)
			}
			const f = (0, e.BC)`/${"accountId"}/images`,
				c = (0, e.BC)`${f}/images`,
				l = (0, e.BC)`${f}/variants`,
				g = (0, e.BC)`${f}/keys`,
				n = (0, e.BC)`${f}/bundle-checkout-success`,
				o = (0, e.BC)`${c}/${"imageId"}`,
				a = (0, e.BC)`${c}/detail`,
				_ = (0, e.BC)`${c}/edit`,
				d = (0, e.BC)`${l}/create`,
				p = (0, e.BC)`${l}/edit/${"variantId"}`,
				h = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				T = (0, e.BC)`${f}/sourcing-kit`,
				v = (0, e.BC)`${f}/delivery-zones`,
				m = (0, e.BC)`${v}/${"zoneId"}/settings`,
				O = (0, e.BC)`${f}/plans`,
				E = (0, e.BC)`${f}/manage-plan`,
				w = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				D = {
					root: f,
					images: c,
					variants: l,
					keys: g,
					legacyImageDetailPage: o,
					imageDetailPage: a,
					imageEditPage: _,
					bundleCheckoutSuccess: n,
					variantCreatePage: d,
					variantEditPage: p,
					sourcingKit: T,
					subscriptions: h,
					deliveryZones: v,
					deliveryZoneSettings: m,
					plansPage: O,
					managePlan: E
				},
				A = r({}, D, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: w
				}),
				P = (0, e.BC)`/accounts/${"accountId"}`,
				B = (0, e.BC)`${P}/images/v2`,
				C = (0, e.BC)`/zones/${"zoneId"}`,
				S = (0, e.BC)`${B}/sourcingkit`,
				U = (0, e.BC)`${S}/migrations`,
				$ = (0, e.BC)`${S}/migrations/${"migrationId"}`,
				G = (0, e.BC)`${S}/migrations/${"migrationId"}/logs`,
				ne = (0, e.BC)`${S}/migrations/${"migrationId"}/lifecycle/start`,
				ee = (0, e.BC)`${S}/migrations/${"migrationId"}/lifecycle/abort`,
				oe = (0, e.BC)`${S}/migrations/${"migrationId"}/lifecycle`,
				W = (0, e.BC)`${S}/sources`,
				K = (0, e.BC)`${S}/sources/${"sourceId"}`,
				F = (0, e.BC)`${S}/sources/${"sourceId"}/connectivity`,
				x = (0, e.BC)`${S}/sources/connectivity_precheck`,
				I = (0, e.BC)`/zones?account.id=${"accountId"}`,
				L = {
					migrationList: U,
					migration: $,
					migrationLogs: G,
					sourceList: W,
					migrationStart: ne,
					migrationAbort: ee,
					migrationProgress: oe,
					source: K,
					sourceConnectivityCheck: F,
					sourceConnectivityPreCheck: x
				},
				R = (0, e.BC)`/billing/upgrade-subscription`,
				X = (0, e.BC)`${P}/settings/transformations`,
				q = (0, e.BC)`${C}/settings/transformations`,
				ae = (0, e.BC)`${C}/settings/transformations_allowed_origins`,
				N = (0, e.BC)`${C}/settings/transformations_c2pa`,
				V = (0, e.BC)`${P}/settings/ut-billing`,
				M = (0, e.BC)`${C}`,
				Y = (0, e.BC)`${C}/entitlements`,
				ie = (0, e.BC)`${C}/settings`,
				de = (0, e.BC)`${C}/flags`,
				Ee = (0, e.BC)`${C}/subscription`,
				te = {
					sourcingKitEndpoints: L,
					deliveryZonesEndpoints: {
						transformationsConfigList: X,
						transformationsZoneConfig: q,
						allowedOriginsZoneConfig: ae,
						preserveContentCredentialsZoneConfig: N,
						upgradeSubscription: R,
						utBillingConfig: V
					},
					zones: {
						zones: I,
						zoneDetail: M,
						zoneSettings: ie,
						zoneEntitlements: Y,
						zoneFlags: de,
						zoneSubscription: Ee
					}
				}
		},
		"../react/pages/images/selectors.ts": function(z, y, t) {
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
					return f
				},
				ib: function() {
					return p
				},
				lW: function() {
					return T
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
				f = "images",
				c = "unified_images_enabled",
				l = "c2pa_polish",
				g = "CloudflareImages",
				n = v => !!(0, r.BF)(v, "images.transformations_enabled"),
				o = v => Boolean((0, r.BF)(v, "images.enabled")),
				a = v => {
					const m = (0, r.BF)(v, "images.storage");
					return typeof m == "number" && m > 0
				},
				_ = v => Boolean((0, r.BF)(v, "contract.customer_enabled")),
				d = v => Boolean((0, e.oI)(v, f, u)),
				p = v => Boolean((0, i.Le)(v, g, u)),
				h = v => Boolean(getAccountFlipperFlag(v, g, c)),
				T = v => Boolean((0, i.Le)(v, g, l))
		},
		"../react/pages/internal-dns/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				jx: function() {
					return e
				},
				xk: function() {
					return s
				},
				xo: function() {
					return f
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
				f = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/internal-dns/tracking.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return g
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
				var a = f(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(o, a) {
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
			let g = function(o) {
				return o.CLICK_GIVE_FEEDBACK = "click give feedback", o.CLICK_NAVIGATION_TAB = "click navigation tab", o.CLICK_CREATE_AN_INTERNAL_ZONE = "click create an internal zone", o.CLICK_SEARCH_BY_ZONE_NAME = "search by zone name", o.CLICK_CREATE_A_VIEW = "click create a view", o.CLICK_SEARCH_BY_RECORD_NAME = "search by record name", o.CLICK_SEARCH_BY_VIEW_NAME = "search by view name", o.CLICK_SAVE_VIEW = "click save view", o.CLICK_SAVE_ZONE = "click save zone", o.CLICK_ZONE_NAME = "click zone name", o.CLICK_ADD_A_RECORD = "click add a record", o.CLICK_ADD_RECORD_SAVE = "click add record save", o.CLICK_RECORD_EDIT = "click record edit", o.CLICK_EDIT_RECORD_SAVE = "click edit record save", o.CLICK_IMPORT_RECORDS = "click import records", o.CLICK_MANAGE_LINKED_VIEWS = "click manage linked views", o.CLICK_SAVE_MANAGE_LINKED_VIEWS = "click save manage linked views", o.CLICK_VIEW_RECORD = "click view record", o
			}({});
			const n = (o, a = {}) => {
				r().sendEvent(o, i({
					category: c,
					product: l
				}, a))
			}
		},
		"../react/pages/magic/constants.ts": function(z, y, t) {
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
					return T
				},
				Up: function() {
					return u
				},
				W8: function() {
					return g
				},
				Ws: function() {
					return v
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
					return f
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
				s = m => [{
					value: "low",
					label: m("setting.low")
				}, {
					value: "mid",
					label: m("setting.medium")
				}, {
					value: "high",
					label: m("setting.high")
				}],
				f = m => [{
					value: "request",
					label: m("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: m("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				c = m => [{
					value: "unidirectional",
					label: m("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: m("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				l = "magic-transit",
				g = "magic-wan",
				n = "gre_tunnel",
				o = "ipsec_tunnel",
				a = "interconnect",
				_ = 64,
				d = 1476,
				p = "mid",
				h = "reply",
				T = m => [{
					value: void 0,
					label: m("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: m("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: m("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				v = m => [{
					value: "all",
					label: m("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: m("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: m("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(z, y, t) {
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
		"../react/pages/magic/overview/tracking.ts": function(z, y, t) {
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
		"../react/pages/magic/packet-captures/constants.ts": function(z, y, t) {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(z, y, t) {
			"use strict";
			t.d(y, {
				gb: function() {
					return n
				},
				iP: function() {
					return A
				},
				xL: function() {
					return v
				},
				rD: function() {
					return B
				},
				oT: function() {
					return d
				},
				i2: function() {
					return C
				},
				x1: function() {
					return f
				},
				lW: function() {
					return l
				},
				UA: function() {
					return w
				},
				K5: function() {
					return a
				},
				Ii: function() {
					return O
				},
				PJ: function() {
					return P
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
			const f = () => r().createElement(c, null, r().createElement("svg", {
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
				l = () => r().createElement(g, null, r().createElement("svg", {
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
				g = (0, i.LM)(({
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
				h = () => r().createElement(T, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				T = (0, i.LM)(({
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
				v = () => r().createElement(m, null, r().createElement("svg", {
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
				m = (0, i.LM)(({
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
				O = () => r().createElement(E, null, r().createElement("svg", {
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
				E = (0, i.LM)(({
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
				w = () => r().createElement(D, null, r().createElement("svg", {
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
				D = (0, i.LM)(({
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
				P = () => r().createElement("svg", {
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
				B = () => r().createElement("svg", {
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
				C = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				A2: function() {
					return c
				},
				He: function() {
					return s
				},
				N$: function() {
					return f
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
				f = l => [{
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
		"../react/pages/page-rules/tracking.ts": function(z, y, t) {
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
			const u = (s, f) => r().sendEvent(s, {
				template_name: f
			})
		},
		"../react/pages/pages/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return h
				},
				C1: function() {
					return g
				},
				GF: function() {
					return B
				},
				HD: function() {
					return m
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
					return D
				},
				OG: function() {
					return W
				},
				QF: function() {
					return ee
				},
				QV: function() {
					return w
				},
				Sx: function() {
					return O
				},
				Ub: function() {
					return ne
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
					return T
				},
				fR: function() {
					return e
				},
				ff: function() {
					return C
				},
				iS: function() {
					return v
				},
				nY: function() {
					return E
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
					return P
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
				f = {
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
				g = 100,
				n = 350,
				o = 1e7,
				a = ["Success:", "Error:", "Failed:"],
				_ = 10,
				d = "_headers",
				p = "_redirects",
				h = "_routes.json",
				T = "_worker.js",
				v = "do-a-barrel-roll",
				m = [d, p, h, T],
				O = 1024 * 1024 * 25,
				E = 1e3,
				w = {
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
				D = 1e5,
				A = 75e3,
				P = 2e5,
				B = 15e4,
				C = 3e3,
				S = 2250,
				U = "workers",
				$ = "cloudflare_pages_build_caching",
				G = 2;
			let ne = function(K) {
				return K[K.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", K[K.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", K[K.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", K[K.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", K[K.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", K[K.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", K
			}({});
			const ee = 1,
				oe = 2,
				W = 2
		},
		"../react/pages/pages/routes.ts": function(z, y, t) {
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
				u = f => `${f.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return c
				},
				L9: function() {
					return g
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
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
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
			const g = (n, o = {}) => {
				r().sendEvent(n, i({}, o, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(z, y, t) {
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
		"../react/pages/r2/routes.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return i
				},
				Jg: function() {
					return f
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
					const g = u(l);
					return `https://${c}.${g}`
				},
				f = (c, l, g) => `${s(c,l)}/${g}`
		},
		"../react/pages/secrets-store/resources/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return D
				},
				JJ: function() {
					return f
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
					return T
				},
				Q2: function() {
					return P
				},
				QF: function() {
					return h
				},
				RR: function() {
					return m
				},
				T_: function() {
					return A
				},
				Xm: function() {
					return c
				},
				Zl: function() {
					return B
				},
				dv: function() {
					return s
				},
				fp: function() {
					return o
				},
				jx: function() {
					return w
				},
				nQ: function() {
					return _
				},
				px: function() {
					return v
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
					return C
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
				f = 1,
				c = 10,
				l = 100;
			let g = function(U) {
					return U.NAME = "name", U
				}({}),
				n = function(U) {
					return U.NAME = "name", U
				}({});
			const o = {
				initialPaginationState: {
					page: f,
					perPage: c
				},
				initialSortState: {
					name: g.NAME,
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
			let a = function(U) {
					return U.NAME = "name", U.COMMENT = "comment", U.TAGS = "tags", U.SERVICES = "services", U.STATUS = "status", U
				}({}),
				_ = function(U) {
					return U.PENDING = "pending", U.ACTIVE = "active", U.DELETED = "deleted", U
				}({}),
				d = function(U) {
					return U.LIST_SECRETS_STORES = "listSecretsStores", U.LIST_SECRETS = "listSecrets", U.GET_SECRET = "getSecret", U.SECRETS_QUOTA = "secretsQuota", U
				}({}),
				p = function(U) {
					return U.CREATE = "create", U.EDIT = "edit", U.DUPLICATE = "duplicate", U
				}({}),
				h = function(U) {
					return U.WORKERS = "workers", U
				}({});
			const T = "default_secrets_store";
			let v = function(U) {
				return U.CREATE = "create", U.EDIT = "edit", U.DUPLICATE = "duplicate", U.VIEW = "view", U
			}({});
			const m = "delete_operation",
				O = /^[a-zA-Z0-9_-]+$/,
				E = (U, $, G, ne, ee) => r.Ry().shape({
					name: r.Z_().required(U("secrets_store.form.create.errors.name.required")).matches(O, U("secrets_store.form.create.errors.name.invalid_characters")).max(255, U("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", U("secrets_store.form.create.errors.value.required"), oe => $ || ee ? !!oe : !0).max(1024, U("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, U("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(h), U("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				w = (U, $, G, ne, ee) => r.Ry().shape({
					secrets: r.IX().of(E(U, $, G, ne, ee))
				}),
				D = {
					name: "",
					value: "",
					scopes: h.WORKERS,
					comment: ""
				},
				A = "secrets-store.store.secret";
			let P = function(U) {
				return U.DUPLICATE = "duplicate", U.DEPLOY = "deploy", U
			}({});
			const B = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let C = function(U) {
					return U.CREATE_SECRET = "create secrets store secret", U.EDIT_SECRET = "edit secrets store secret", U.DUPLICATE_SECRET = "duplicate secrets store secret", U.DELETE_SECRET = "delete secrets store secret", U.BIND_SECRET = "open secrets store binding drawer", U
				}({}),
				S = function(U) {
					return U.SECRETS_STORE = "secrets store main", U.WORKERS_BINDING = "workers binding drawer", U
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(z, y, t) {
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
		"../react/pages/security/analytics/resources/labels.ts": function(z, y, t) {
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
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(z, y, t) {
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
					return g
				},
				Ss: function() {
					return o
				},
				dR: function() {
					return s
				},
				gW: function() {
					return f
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
				f = {
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
			const g = {
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
		"../react/pages/security/api-shield/tracking.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Fj: function() {
					return l
				},
				kq: function() {
					return c
				},
				xr: function() {
					return g
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
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
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
				g = ({
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
		"../react/pages/security/bots/tracking.ts": function(z, y, t) {
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
		"../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				AL: function() {
					return c
				},
				NC: function() {
					return u
				},
				WZ: function() {
					return f
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
					[e.MQ.Detections]: "settings.filters.detections"
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
			const f = {
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
		"../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(z, y, t) {
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
					return s.WebApplicationExploits = "web-application-exploits", s.DdosAttacks = "ddos-attacks", s.BotTraffic = "bot-traffic", s.ApiAbuse = "api-abuse", s.ClientSideAbuse = "client-side-abuse", s.DomainSettings = "domain-settings", s.WebAssetsAndEndpoints = "web-assets-and-endpoints", s.RuleTemplates = "rule-templates", s.Detections = "detections", s
				}({}),
				r = function(s) {
					return s.DomainSettings = "domain-settings", s.WebAssetsAndEndpoints = "web-assets-and-endpoints", s.RuleTemplates = "rule-templates", s.Detections = "detections", s
				}({}),
				i = function(s) {
					return s.Tab = "tabs", s.Filters = "filters", s.Search = "search", s
				}({}),
				u = function(s) {
					return s.AILabyrinth = "ai-labyrinth", s.BlockAIBots = "block-ai-bots", s.BrowserIntegrity = "browser-integrity", s.ChallengePassage = "challenge-passage", s.ClientCertificates = "client-certificates", s.CloudflareManagedRuleset = "cloudflare-managed-ruleset", s.CreateDeveloperPortal = "create-developer-portal", s.CustomFallthrough = "custom-fallthrough", s.EndpointDiscovery = "endpoint-discovery", s.FirewallAi = "firewall-ai", s.HttpDdos = "http-ddos", s.IpAccessRules = "ip-access-rules", s.IpLists = "ip-lists", s.JwtValidation = "jwt-validation", s.Labels = "labels", s.LeakedCredentialCheck = "leaked-credential-check", s.MaliciousUploadDetection = "malicious-upload-detection", s.ManagedRuleset = "managed-ruleset", s.Mtls = "mtls", s.NetworkDdos = "network-ddos", s.OwaspCore = "owasp-core", s.RateLimitAuthentication = "rate-limit-authentication", s.ReplaceInsecureJavascript = "replace-insecure-javascript", s.RobotsTxt = "robots-txt", s.SequenceDetection = "sequence-detection", s.SchemaDiscovery = "schema-discovery", s.SchemaValidation = "schema-validation", s.SecurityLevel = "security-level", s.SecurityTxt = "security-txt", s.SensitiveDataDetection = "sensitive-data-detection", s.SessionIdentifiers = "session-identifiers", s.SslDdos = "ssl-ddos", s.TokenConfigurations = "token-configurations", s.UserAgentBlocking = "user-agent-blocking", s.VolumetricAbuse = "volumetric-abuse", s.ZoneLockdown = "zone-lockdown", s.ContinuousScriptMonitoring = "continuous-script-monitoring", s.BotManagement = "bot-management", s.SuperBotFightMode = "super-bot-fight-mode", s.BotFightMode = "bot-fight-mode", s
				}({})
		},
		"../react/pages/security/overview/resources/constants.ts": function(z, y, t) {
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
					return f
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
				f = [{
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
		"../react/pages/security/page-shield/resources/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return B
				},
				FV: function() {
					return oe
				},
				KH: function() {
					return A
				},
				Ks: function() {
					return x
				},
				Lj: function() {
					return F
				},
				MC: function() {
					return o
				},
				Mq: function() {
					return D
				},
				OV: function() {
					return ee
				},
				Oq: function() {
					return P
				},
				QM: function() {
					return E
				},
				SI: function() {
					return K
				},
				SJ: function() {
					return T
				},
				Sk: function() {
					return U
				},
				Ti: function() {
					return I
				},
				Uc: function() {
					return w
				},
				Uq: function() {
					return l
				},
				Uv: function() {
					return ne
				},
				V0: function() {
					return g
				},
				VT: function() {
					return d
				},
				YC: function() {
					return $
				},
				j$: function() {
					return v
				},
				qc: function() {
					return h
				},
				sV: function() {
					return C
				},
				sW: function() {
					return W
				},
				u8: function() {
					return _
				},
				v5: function() {
					return n
				},
				xg: function() {
					return G
				},
				yd: function() {
					return O
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				i = t("../react/pages/security/page-shield/resources/types.ts");

			function u(L) {
				for (var R = 1; R < arguments.length; R++) {
					var X = arguments[R] != null ? Object(arguments[R]) : {},
						q = Object.keys(X);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(X).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(X, ae).enumerable
					})), q.forEach(function(ae) {
						s(L, ae, X[ae])
					})
				}
				return L
			}

			function s(L, R, X) {
				return R = f(R), R in L ? Object.defineProperty(L, R, {
					value: X,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[R] = X, L
			}

			function f(L) {
				var R = c(L, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function c(L, R) {
				if (typeof L != "object" || L === null) return L;
				var X = L[Symbol.toPrimitive];
				if (X !== void 0) {
					var q = X.call(L, R || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(L)
			}
			const l = 50,
				g = 9,
				n = "copy script url page shield",
				o = "disable page shield",
				a = "click documentation link",
				_ = "enable page shield",
				d = "filter search page shield",
				p = "filter search view all page shield",
				h = "hover score tooltip page shield",
				T = "open alert modal page shield",
				v = "change pagination page shield",
				m = "close script modal page shield",
				O = "open script modal page shield",
				E = "select alert type page shield",
				w = "sort column page shield",
				D = {
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
				P = {
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
				B = u({}, P, {
					urls: u({}, P.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				C = {
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
			let S = function(L) {
				return L.SECURITY_THREATS = "Security Threats", L.C2_BOTNET = "C2 & Botnet", L.CRYPTOMINING = "Cryptomining", L.MALWARE = "Malware", L.PHISHING = "Phishing", L.SPYWARE = "Spyware", L.DGA_DOMAINS = "DGA Domains", L.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", L
			}({});
			const U = "https://www.cloudflare.com/plans/enterprise/contact/",
				$ = {
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
				G = {
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
				ne = {
					[i.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[i.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[i.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[i.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[i.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				ee = {
					[i.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[i.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				oe = {
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
				W = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				K = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				F = {
					[i.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[i.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[i.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				x = {
					[i.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[i.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[i.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				I = {
					[i.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[i.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[i.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(z, y, t) {
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
					return E.Xe
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
					return E.k2
				},
				$g: function() {
					return E.$g
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
					return E.I1
				},
				Wq: function() {
					return E.Wq
				},
				jf: function() {
					return E.jf
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
					return E.R$
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return v
				},
				SE: function() {
					return g
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
					return m
				},
				xq: function() {
					return ae
				},
				SQ: function() {
					return x
				},
				C0: function() {
					return I
				},
				av: function() {
					return A
				},
				W3: function() {
					return w
				},
				WO: function() {
					return S
				},
				Dk: function() {
					return G
				},
				we: function() {
					return ee
				},
				Yt: function() {
					return K
				},
				ex: function() {
					return W
				},
				E1: function() {
					return oe
				},
				dm: function() {
					return B
				},
				oK: function() {
					return U
				},
				qZ: function() {
					return F
				},
				_4: function() {
					return L
				},
				qo: function() {
					return R
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");

			function s(N) {
				for (var V = 1; V < arguments.length; V++) {
					var M = arguments[V] != null ? Object(arguments[V]) : {},
						Y = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && Y.push.apply(Y, Object.getOwnPropertySymbols(M).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(M, ie).enumerable
					})), Y.forEach(function(ie) {
						f(N, ie, M[ie])
					})
				}
				return N
			}

			function f(N, V, M) {
				return V = c(V), V in N ? Object.defineProperty(N, V, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[V] = M, N
			}

			function c(N) {
				var V = l(N, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function l(N, V) {
				if (typeof N != "object" || N === null) return N;
				var M = N[Symbol.toPrimitive];
				if (M !== void 0) {
					var Y = M.call(N, V || "default");
					if (typeof Y != "object") return Y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(N)
			}
			const g = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", N => (i().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", N => (i().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				o = (N, V) => {
					var M;
					return JSON.stringify(s({}, V == null || (M = V[0]) === null || M === void 0 ? void 0 : M.parameters, N))
				};
			let a = "";
			const _ = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (N, V, M) => (a = o(V, M), N)).on("success", N => (i().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), N)).on("error", (N, V, M) => o(V, M) === a ? N : {
					type: "noop"
				}),
				d = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				p = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", N => (i().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				h = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				T = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", N => (i().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				v = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				m = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var O = t("../react/app/redux/normalizer.js"),
				E = t("../react/pages/security/page-shield/resources/types.ts");
			const w = N => N.pageShield.configuration,
				D = N => {
					var V;
					return (V = N.pageShield.configuration.data) === null || V === void 0 ? void 0 : V.enabled
				},
				A = N => {
					var V;
					return (V = w(N)) === null || V === void 0 ? void 0 : V.data
				},
				P = N => N.pageShield.scripts,
				B = N => N.pageShield.script,
				C = N => N.pageShield.connections,
				S = N => N.pageShield.connection,
				U = (0, O.P1)("pageShieldScripts", P),
				$ = (0, O.P1)("pageShieldScript", B),
				G = (0, O.P1)("pageShieldConnections", C),
				ne = (0, O.P1)("pageShieldConnection", S),
				ee = (N, V) => N === E.Wq.SCRIPT_MONITOR ? U(V) || [] : G(V) || [],
				oe = (N, V) => N === E.Wq.SCRIPT_MONITOR ? P(V) || [] : C(V) || [],
				W = (N, V) => N === E.Wq.SCRIPT_MONITOR ? $(V) : ne(V),
				K = N => N.pageShield.domainIntel,
				F = N => N.pageShield.whoIsRecord,
				x = (N, V, M) => {
					var Y;
					const ie = Object.values(M).map(de => ({
						key: de,
						label: u.Uv[de],
						score: N[de]
					})).filter(de => de.score !== void 0 && de.score <= V);
					return V === u.V0 && ie.length === 0 && ((Y = N.js_integrity_score) !== null && Y !== void 0 ? Y : 100) <= V && ie.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ie
				},
				I = (N, V) => Object.values(V).filter(M => N[M] === !0).map(M => u.OV[M]),
				L = N => N === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				R = (N, V) => N[E.$g.MagecartScore] !== void 0 && N[E.$g.MagecartScore] <= V || N[E.$g.MalwareScore] !== void 0 && N[E.$g.MalwareScore] <= V || N[E.$g.CryptominingScore] !== void 0 && N[E.$g.CryptominingScore] <= V || N.js_integrity_score !== void 0 && N.js_integrity_score <= V,
				X = ["cdn.jsdelivr.net", "unpkg.com"],
				q = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ae = N => {
					if (N.includes("@latest")) {
						const M = N.split("@latest");
						if (M.length != 2) return;
						const Y = M[0].length,
							ie = Y + "@latest".length;
						return [Y, ie]
					}
					if (!!X.some(M => N.includes(M)))
						for (const M of q) {
							const Y = N.match(M);
							if (!Y) continue;
							const ie = Y.index;
							if (ie === 0) return null;
							const de = ie + Y[0].length;
							return [ie, de]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$g: function() {
					return g
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
					return f
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
			const f = e({}, s, {
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
				g = function(a) {
					return a.CryptominingScore = "cryptomining_score", a.MalwareScore = "malware_score", a.MagecartScore = "magecart_score", a
				}({}),
				n = function(a) {
					return a.DataflowScore = "dataflow_score", a.ObfuscationScore = "obfuscation_score", a
				}({}),
				o = function(a) {
					return a.DomainMalicious = "domain_reported_malicious", a.UrlMalicious = "url_reported_malicious", a
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(z, y, t) {
			"use strict";
			t.d(y, {
				_C: function() {
					return d
				},
				_R: function() {
					return p
				},
				dY: function() {
					return T
				},
				fy: function() {
					return O
				},
				ji: function() {
					return _
				},
				pR: function() {
					return h
				},
				pV: function() {
					return E
				},
				rj: function() {
					return m
				},
				yR: function() {
					return w
				},
				zf: function() {
					return v
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				s = t("../react/utils/translator.tsx"),
				f = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				l = t("../node_modules/@cloudflare/elements/es/index.js");

			function g(D) {
				for (var A = 1; A < arguments.length; A++) {
					var P = arguments[A] != null ? Object(arguments[A]) : {},
						B = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(P).filter(function(C) {
						return Object.getOwnPropertyDescriptor(P, C).enumerable
					})), B.forEach(function(C) {
						n(D, C, P[C])
					})
				}
				return D
			}

			function n(D, A, P) {
				return A = o(A), A in D ? Object.defineProperty(D, A, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[A] = P, D
			}

			function o(D) {
				var A = a(D, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function a(D, A) {
				if (typeof D != "object" || D === null) return D;
				var P = D[Symbol.toPrimitive];
				if (P !== void 0) {
					var B = P.call(D, A || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(D)
			}
			const _ = 10;
			let d = function(D) {
					return D.MTLS_ACCESS = "mTLS-enforced authentication", D.ZONE_LOCKDOWN = "Zone lockdown", D.USER_AGENT = "User agent blocking", D.EMAIL_VALIDITY = "Disposable email checks", D.IP_BASED = "IP-based rule", D.GEOGRAPHY_BASE = "Geography-based rule", D
				}({}),
				p = function(D) {
					return D.LEAKED_CREDENTIALS = "Leaked Credentials Checks", D
				}({});
			const h = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				T = [{
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
				v = {
					[f.X.UI_SECTION]: D => ({
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
									to: `/${D.account.id}/${D.name}/ssl-tls/client-certificates`
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
									to: `/${D.account.id}/configurations/lists`
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
									to: `/${D.account.id}/configurations/lists`
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
									to: `/${D.account.id}/configurations/lists`
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
					[f.X.WAF_RULES]: {
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
				m = {
					[f.X.WAF_RULES]: {
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
					[f.X.UI_SECTION]: {
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
			let O = function(D) {
				return D.DISCOVERY = "discovery", D.SEQUENCES = "sequences", D.SCHEMA_VALIDATION = "schema-validation", D.SETTINGS = "settings", D.API_RULES = "api-rules", D.UPGRADE = "upgrade", D
			}({});
			const E = g({}, c.g, {
				[r.df.HttpRequestFirewallManaged]: g({}, c.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: g({}, c.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: g({}, c.g[r.df.HttpRateLimit], {
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
			let w = function(D) {
				return D.APP_SEC_MVP = "app-security-navigation-mvp", D.APP_SEC_DEFAULT_FOR_ALL = "app-security-default-for-all", D
			}({})
		},
		"../react/pages/security/resources/types.ts": function(z, y, t) {
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
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return l
				},
				y: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function i(g) {
				for (var n = 1; n < arguments.length; n++) {
					var o = arguments[n] != null ? Object(arguments[n]) : {},
						a = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(o).filter(function(_) {
						return Object.getOwnPropertyDescriptor(o, _).enumerable
					})), a.forEach(function(_) {
						u(g, _, o[_])
					})
				}
				return g
			}

			function u(g, n, o) {
				return n = s(n), n in g ? Object.defineProperty(g, n, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[n] = o, g
			}

			function s(g) {
				var n = f(g, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function f(g, n) {
				if (typeof g != "object" || g === null) return g;
				var o = g[Symbol.toPrimitive];
				if (o !== void 0) {
					var a = o.call(g, n || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(g)
			}
			let c = function(g) {
				return g.CLICK_OPT_IN = "click opt in security navigation", g.CLICK_OPT_IN_BUTTON = "click opt in button", g.CLICK_OPT_OUT_BUTTON = "click opt out button", g.CLICK_NEXT_STEP = "click opt in next step", g.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", g.DISPLAY_MODAL = "display opt in modal", g.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", g.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", g.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", g
			}({});
			const l = (g, n = {}) => {
				r().sendEvent(g, i({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$y: function() {
					return d
				},
				Ai: function() {
					return n
				},
				B: function() {
					return g
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
					return T
				},
				je: function() {
					return _
				},
				ll: function() {
					return f
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
			const i = async v => {
				var m, O;
				const E = await (0, e.get)(`/zones/${v}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((m = E == null ? void 0 : E.body) === null || m === void 0 || (O = m.result) === null || O === void 0 ? void 0 : O.value) === "enabled"
			}, u = async (v, m) => (await (0, e.post)(`/zones/${v}/content-upload-scan/${m?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), m), s = async v => {
				var m;
				const O = await (0, e.get)(`/zones/${v}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((m = O == null ? void 0 : O.body) === null || m === void 0 ? void 0 : m.result) || []
			}, f = async (v, m) => {
				var O;
				const E = await (0, e.post)(`/zones/${v}/content-upload-scan/payloads`, {
					body: [m]
				});
				return (O = E == null ? void 0 : E.body) === null || O === void 0 ? void 0 : O.result
			}, c = async (v, m) => (await (0, e.del)(`/zones/${v}/content-upload-scan/payloads/${m}`, {
				hideErrorAlert: !0
			}), m), l = async v => {
				var m;
				const O = await (0, e.get)(`/zones/${v}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((m = O == null ? void 0 : O.body) === null || m === void 0 ? void 0 : m.pii_detection_enabled)
			}, g = async (v, m) => (await (0, e.put)(`/zones/${v}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: m
				}
			}), m), n = async v => {
				var m, O;
				const E = await (0, e.get)(`/zones/${v}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((m = E == null ? void 0 : E.body) === null || m === void 0 || (O = m.result) === null || O === void 0 ? void 0 : O.enabled)
			}, o = async (v, m) => {
				var O, E;
				const w = await (0, e.post)(`/zones/${v}/leaked-credential-checks`, {
					body: {
						enabled: m
					}
				});
				return !!((O = w == null ? void 0 : w.body) === null || O === void 0 || (E = O.result) === null || E === void 0 ? void 0 : E.enabled)
			}, a = async v => {
				var m;
				const O = await (0, e.get)(`/zones/${v}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (m = O == null ? void 0 : O.body) === null || m === void 0 ? void 0 : m.result
			}, _ = async (v, m) => {
				var O;
				const E = await (0, e.post)(`/zones/${v}/leaked-credential-checks/detections`, {
					body: m
				});
				return (O = E == null ? void 0 : E.body) === null || O === void 0 ? void 0 : O.result
			}, d = async (v, m) => (await (0, e.del)(`/zones/${v}/leaked-credential-checks/detections/${m}`, {
				hideErrorAlert: !0
			}), m), p = async (v, m) => {
				await (0, e.put)(`/zones/${v}/security-center/securitytxt`, {
					body: m
				})
			}, h = async v => {
				await (0, e.del)(`/zones/${v}/security-center/securitytxt`)
			}, T = async v => (await (0, e.get)(`/zones/${v}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Xu: function() {
					return d
				},
				Io: function() {
					return E
				},
				FQ: function() {
					return oe
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
					return O
				},
				Np: function() {
					return $
				},
				WR: function() {
					return g
				},
				bE: function() {
					return G
				},
				u_: function() {
					return a
				},
				pf: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				s = t("../react/pages/security/settings/resources/index.ts"),
				f = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				l = t("../react/utils/translator.tsx");
			const g = () => (0, u.useSelector)(s.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				o = () => !!useZoneEntitlement(n),
				a = () => {
					const {
						t: W
					} = (0, l.QT)(), K = c.Z_().required(W("common.field_is_required")).max(24, W("labels.apply.form.name.error.max_characters")).matches(s.DG, W("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", W("labels.apply.form.name.error.cf_forbidden"), I => !s.aW.test(I)), F = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: I => c.Ry().shape({
							[s.n5.NAME]: I ? c.Z_() : K,
							[s.n5.DESCRIPTION]: I ? c.Z_().optional() : c.Z_().max(150, W("labels.apply.form.description.error.max_characters"))
						})
					}, x = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[s.N2.NAME]: "",
							[s.N2.SOURCE]: s.W3,
							[s.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[s.N2.NEW_LABEL_NAME]: K
						})
					};
					return {
						LABELS_APPLY_FORM: F,
						EDIT_LABELS_MODAL_FORM: x
					}
				},
				_ = ({
					modalHeaderFixedHeight: W = 62,
					modalDefaultPaddings: K = 16
				} = {}) => {
					const F = (0, i.useRef)(null),
						x = (0, i.useRef)(null),
						[I, L] = (0, i.useState)(0),
						[R, X] = (0, i.useState)(0),
						q = `calc(100vh - ${I}px - ${R}px - ${K}px)`,
						[ae, N] = (0, i.useState)("");
					return (0, i.useEffect)(() => {
						const V = () => {
							var M, Y, ie, de;
							const Ee = F == null || (M = F.current) === null || M === void 0 ? void 0 : M.offsetHeight,
								ge = x == null || (Y = x.current) === null || Y === void 0 ? void 0 : Y.offsetHeight,
								te = ((ie = Ee) !== null && ie !== void 0 ? ie : 0) + W,
								be = (de = ge) !== null && de !== void 0 ? de : 0;
							L(te), X(be)
						};
						return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V)
					}, []), {
						searchTerm: ae,
						setSearchTerm: N,
						scrollableSectionMaxHeight: q,
						topMenuRef: F,
						bottomMenuRef: x
					}
				},
				d = W => {
					const K = g(),
						F = (0, e.useQueryClient)(),
						x = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${W}`,
							queryFn: () => (0, r.JP)(W),
							enabled: K
						}),
						I = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${W}`,
							queryFn: () => (0, r.BT)(W),
							enabled: K && !!(x == null ? void 0 : x.data)
						}),
						L = (0, e.useMutation)({
							mutationFn: async ({
								enabled: q
							}) => await (0, r.X2)(W, q),
							onSuccess: q => {
								F.setQueryData([`content-scanning-enabled-${W}`], q)
							}
						}),
						R = (0, e.useMutation)({
							mutationFn: q => (0, r.ll)(W, q),
							onSuccess: q => {
								F.setQueryData([`content-scanning-detections-${W}`], q)
							}
						}),
						X = (0, e.useMutation)({
							mutationFn: q => (0, r.qD)(W, q),
							onSuccess: q => {
								var ae;
								const N = (ae = F.getQueryData(`content-scanning-detections-${W}`)) !== null && ae !== void 0 ? ae : [];
								F.setQueryData([`content-scanning-detections-${W}`], N.filter(({
									id: V
								}) => V !== q))
							}
						});
					return {
						entitled: K,
						loading: x.isLoading || I.isLoading,
						error: x.isError || I.isError,
						enabled: {
							data: x.data,
							isToggling: L.isLoading,
							toggleEnabled: async q => L.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: I.data,
							add: R.mutateAsync,
							delete: X.mutateAsync,
							loading: R.isLoading || X.isLoading
						}
					}
				},
				p = () => {
					const W = (0, u.useSelector)(s.cN),
						K = (0, u.useSelector)(s.bH),
						F = (0, u.useSelector)(s.P3),
						x = (0, u.useSelector)(s.Ri);
					return {
						hasEditPermission: W,
						isEnabled: F && (K.hasSimilarLeaked || K.hasUsernameAndPasswordLeaked || x)
					}
				},
				h = W => {
					const K = p(),
						F = (0, e.useQueryClient)(),
						x = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${W}`,
							queryFn: () => (0, r.Ai)(W),
							enabled: !!K.isEnabled,
							retry: 1
						}),
						I = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${W}`,
							queryFn: () => (0, r.tw)(W),
							enabled: !!K.isEnabled && !!(x == null ? void 0 : x.data)
						}),
						L = (0, e.useMutation)({
							mutationFn: ({
								enabled: q
							}) => (0, r.O_)(W, q),
							onSuccess: q => {
								F.setQueryData([`leaked-credentials-enabled-${W}`], q)
							}
						}),
						R = (0, e.useMutation)({
							mutationFn: async q => await (0, r.je)(W, q),
							onSuccess: q => {
								var ae;
								const N = (ae = F.getQueryData(`leaked-credentials-detections-${W}`)) !== null && ae !== void 0 ? ae : [];
								F.setQueryData([`leaked-credentials-detections-${W}`], [...N, q])
							}
						}),
						X = (0, e.useMutation)({
							mutationFn: q => (0, r.$y)(W, q),
							onSuccess: q => {
								var ae;
								const N = (ae = F.getQueryData(`leaked-credentials-detections-${W}`)) !== null && ae !== void 0 ? ae : [];
								F.setQueryData([`leaked-credentials-detections-${W}`], N.filter(({
									id: V
								}) => V !== q))
							}
						});
					return {
						entitled: K.isEnabled,
						hasEditPermissions: K.hasEditPermission,
						loading: x.isLoading || I.isLoading,
						error: x.isError || x.isError,
						enabled: {
							data: x.data,
							isToggling: L.isLoading,
							toggleEnabled: async q => L.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: I.data,
							add: R.mutateAsync,
							delete: X.mutateAsync,
							loading: R.isLoading || X.isLoading
						}
					}
				};
			var T = t("../react/common/utils/useQueryCache.ts");
			const v = "security-txt",
				m = {
					securityTxt: ({
						zoneId: W
					}) => [v, W]
				},
				O = W => (0, e.useQuery)({
					queryKey: m.securityTxt({
						zoneId: W
					}),
					queryFn: () => (0, r._c)(W),
					select: K => K.result
				}),
				E = W => {
					const {
						invalidate: K
					} = (0, T.o)(m.securityTxt({
						zoneId: W
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(W),
						onSuccess: async () => {
							await K(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				w = W => {
					const {
						invalidate: K
					} = (0, T.o)(m.securityTxt({
						zoneId: W
					}));
					return (0, e.useMutation)({
						mutationFn: F => (0, r.F3)(W, F),
						onSuccess: async () => {
							await K(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var D = t("../../../../node_modules/lodash/isEqual.js"),
				A = t.n(D),
				P = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function B(W) {
				for (var K = 1; K < arguments.length; K++) {
					var F = arguments[K] != null ? Object(arguments[K]) : {},
						x = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(F).filter(function(I) {
						return Object.getOwnPropertyDescriptor(F, I).enumerable
					})), x.forEach(function(I) {
						C(W, I, F[I])
					})
				}
				return W
			}

			function C(W, K, F) {
				return K = S(K), K in W ? Object.defineProperty(W, K, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[K] = F, W
			}

			function S(W) {
				var K = U(W, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function U(W, K) {
				if (typeof W != "object" || W === null) return W;
				var F = W[Symbol.toPrimitive];
				if (F !== void 0) {
					var x = F.call(W, K || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(W)
			}
			const $ = W => {
					const {
						queryKey: K,
						zoneId: F
					} = (0, P.hL)(W), {
						isLoading: x,
						isError: I,
						isSuccess: L,
						data: R,
						refetch: X,
						isRefetching: q
					} = (0, e.useQuery)({
						queryKey: K,
						queryFn: () => P.Mi.getLabels(B({
							zoneId: F
						}, W)),
						onSuccess: () => {
							var ae;
							const N = W == null || (ae = W.filters) === null || ae === void 0 ? void 0 : ae.source;
							(N === s.LABEL_SOURCES.MANAGED || N === s.LABEL_SOURCES.USER) && (0, s.Tf)({
								name: s.QJ.FILTER_USER_MANAGED_LABELS,
								product: s.Iv.SECURITY_SETTINGS,
								pageName: s.R.LABELS_LIST,
								type: N
							})
						}
					});
					return {
						data: R == null ? void 0 : R.result,
						errors: R == null ? void 0 : R.errors,
						paginationData: R == null ? void 0 : R.result_info,
						isLoading: x,
						isError: I,
						isSuccess: L,
						refetch: X,
						isRefetching: q
					}
				},
				G = ({
					labels: W,
					preselectedLabels: K
				}) => {
					const {
						USER: F,
						MANAGED: x
					} = s.LABEL_SOURCES, [I, L] = (0, i.useState)({
						[F]: [],
						[x]: []
					}), [R, X] = (0, i.useState)(new Set), q = R.size > 0, [ae, N] = (0, i.useState)(!1), V = de => {
						X(Ee => {
							const ge = new Set(Ee);
							return ge.has(de.name) ? ge.delete(de.name) : ge.add(de.name), ge
						})
					}, M = de => R.has(de.name), Y = (de, Ee) => {
						const ge = M(de) ? 1 : 0;
						return (M(Ee) ? 1 : 0) - ge
					}, ie = de => {
						L(Ee => ({
							[F]: [...de ? de[F] : Ee[F]].sort(Y),
							[x]: [...de ? de[x] : Ee[x]].sort(Y)
						}))
					};
					return (0, i.useEffect)(() => {
						if (W && !ae) {
							if (K) {
								const de = new Set;
								W.forEach(Ee => {
									K.some(ge => A()(ge, Ee)) && de.add(Ee.name)
								}), X(de)
							}
							N(!0)
						}
					}, [W, K, ae]), (0, i.useEffect)(() => {
						if (W && ae) {
							const de = W.reduce((ge, te) => (te.source === F ? ge[F].push(te) : te.source === x && ge[x].push(te), ge), {
									[F]: [],
									[x]: []
								}),
								Ee = {
									[F]: de[F].sort(Y),
									[x]: de[x].sort(Y)
								};
							L(Ee)
						}
					}, [F, x, W, ae]), {
						userAndManagedLabels: I,
						setUserAndManagedLabels: L,
						toggleSelectedLabel: V,
						isLabelSelected: M,
						sortLabelsBySelectedStatus: ie,
						hasLabelsSelected: q
					}
				};
			var ne = t("../react/app/redux/index.ts"),
				ee = t("../react/pages/security/settings/resources/selectors.ts");
			const oe = (W = "") => {
				const K = (0, ne.p4)(ee.Xs),
					F = K && (W == null ? void 0 : W.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: K,
					hasDeprecatedParameter: F
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(z, y, t) {
			"use strict";
			t.d(y, {
				FQ: function() {
					return l.FQ
				},
				Iv: function() {
					return g.Iv
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
					return g.Q4
				},
				QJ: function() {
					return g.QJ
				},
				R: function() {
					return g.R
				},
				TG: function() {
					return g.TG
				},
				Tf: function() {
					return g.Tf
				},
				WR: function() {
					return l.WR
				},
				Xs: function() {
					return g.Xs
				},
				Xu: function() {
					return l.Xu
				},
				ZF: function() {
					return g.ZF
				},
				bE: function() {
					return l.bE
				},
				bH: function() {
					return g.bH
				},
				dC: function() {
					return g.dC
				},
				eC: function() {
					return g.eC
				},
				m8: function() {
					return g.m8
				},
				pf: function() {
					return l.pf
				},
				ui: function() {
					return g.ui
				},
				vc: function() {
					return g.vc
				},
				w: function() {
					return g.w
				},
				zF: function() {
					return g.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/app/components/Forbidden.jsx"),
				i = t("webpack/sharing/consume/default/react/react"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(f),
				l = t("../react/pages/security/settings/hooks/index.ts"),
				g = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(16691), t.e(92646), t.e(12174), t.e(58816), t.e(87395), t.e(51436), t.e(68204), t.e(2515), t.e(22038), t.e(8924), t.e(77216), t.e(23657), t.e(40517), t.e(39760), t.e(15892), t.e(30906), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				o = () => {
					const {
						t: a
					} = (0, f.useI18n)(), _ = (0, e.xk)("waf");
					return u().createElement(s.T3, {
						parentPageLabel: a("navigation.zone.security"),
						title: a("navigation.zone.security.settings"),
						type: "narrow"
					}, _.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			y.ZP = o
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Mi: function() {
					return m
				},
				hL: function() {
					return v
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				i = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../react/common/hooks/useAccountId.ts"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
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
			var g = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(E, w) {
				if (E == null) return {};
				var D = _(E, w),
					A, P;
				if (Object.getOwnPropertySymbols) {
					var B = Object.getOwnPropertySymbols(E);
					for (P = 0; P < B.length; P++) A = B[P], !(w.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, A) || (D[A] = E[A]))
				}
				return D
			}

			function _(E, w) {
				if (E == null) return {};
				var D = {},
					A = Object.keys(E),
					P, B;
				for (B = 0; B < A.length; B++) P = A[B], !(w.indexOf(P) >= 0) && (D[P] = E[P]);
				return D
			}

			function d(E) {
				for (var w = 1; w < arguments.length; w++) {
					var D = arguments[w] != null ? Object(arguments[w]) : {},
						A = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(D).filter(function(P) {
						return Object.getOwnPropertyDescriptor(D, P).enumerable
					})), A.forEach(function(P) {
						p(E, P, D[P])
					})
				}
				return E
			}

			function p(E, w, D) {
				return w = h(w), w in E ? Object.defineProperty(E, w, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[w] = D, E
			}

			function h(E) {
				var w = T(E, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function T(E, w) {
				if (typeof E != "object" || E === null) return E;
				var D = E[Symbol.toPrimitive];
				if (D !== void 0) {
					var A = D.call(E, w || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(E)
			}
			const v = E => {
					const w = (0, e.p4)(r.Cu),
						D = (0, s.F)(),
						A = O.labels(d({
							accountId: D,
							zoneId: w
						}, E ? d({}, E) : {})),
						P = (0, i.o)(A);
					return d({
						zoneId: w,
						queryKey: A,
						batchInvalidateLabels: async () => {
							await P.batchInvalidate({
								queryKeysToPredicateInvalidate: [u.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, P)
				},
				m = {
					getLabels: async E => {
						var w, D, A, P;
						let {
							zoneId: B,
							hideErrorAlert: C = !0
						} = E, S = a(E, ["zoneId", "hideErrorAlert"]);
						return (await f.get(l.labels.toUrl({
							zoneId: B
						}), {
							parameters: {
								page: S == null ? void 0 : S.page,
								per_page: S == null ? void 0 : S.per_page,
								with_mapped_resource_counts: S == null ? void 0 : S.with_mapped_resource_counts,
								filter: S == null || (w = S.filters) === null || w === void 0 ? void 0 : w.search,
								source: (0, n.sQ)(S == null || (D = S.filters) === null || D === void 0 ? void 0 : D.source),
								order: S == null || (A = S.sort) === null || A === void 0 ? void 0 : A.id,
								direction: (S == null ? void 0 : S.sort) ? (S == null || (P = S.sort) === null || P === void 0 ? void 0 : P.desc) ? o.Sr.desc : o.Sr.asc : void 0
							},
							hideErrorAlert: C
						})).body
					},
					getLabel: async E => {
						let {
							zoneId: w,
							labelName: D,
							hideErrorAlert: A = !0
						} = E, P = a(E, ["zoneId", "labelName", "hideErrorAlert"]);
						const B = (0, n.mm)(D) ? l.managedLabel.toUrl({
							zoneId: w,
							labelName: D
						}) : l.userLabel.toUrl({
							zoneId: w,
							labelName: D
						});
						return (await f.get(B, {
							parameters: {
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts
							},
							hideErrorAlert: A
						})).body
					},
					editLabel: async ({
						zoneId: E,
						label: w,
						replace: D
					}) => {
						const {
							name: A
						} = w, P = a(w, ["name"]);
						return (await (D ? f.put : f.patch)(l.userLabel.toUrl({
							zoneId: E,
							labelName: w.name
						}), {
							body: P
						})).body
					},
					deleteLabel: async ({
						zoneId: E,
						labelName: w
					}) => (await f.del(l.userLabel.toUrl({
						zoneId: E,
						labelName: w
					}))).body,
					createLabel: async E => {
						let {
							zoneId: w
						} = E, D = a(E, ["zoneId"]);
						const {
							product: A
						} = D, P = a(D, ["product"]);
						return (await f.post(l.userLabels.toUrl({
							zoneId: w
						}), {
							body: [P]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: E,
						user: w,
						managed: D,
						operationIds: A,
						replace: P
					}) => (await (P ? f.put : f.post)(l.operationsLinkedToLabels.toUrl({
						zoneId: E
					}), {
						body: d({}, w ? {
							user: {
								labels: w
							}
						} : {}, D ? {
							managed: {
								labels: D
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
						zoneId: E,
						labelName: w,
						operationIds: D
					}) => {
						const A = (0, n.mm)(w) ? l.managedLabelOperations.toUrl({
							zoneId: E,
							labelName: w
						}) : l.userLabelOperations.toUrl({
							zoneId: E,
							labelName: w
						});
						return (await f.put(A, {
							body: {
								selector: {
									include: {
										operation_ids: D
									}
								}
							}
						})).body
					}
				},
				O = {
					labels: E => {
						let {
							accountId: w,
							zoneId: D
						} = E, A = a(E, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, w, D, ...(0, g.isEmpty)(A) ? [] : [A]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return h
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return c
				},
				GE: function() {
					return D
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return f
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
					return O
				},
				W3: function() {
					return i
				},
				Yn: function() {
					return B
				},
				_8: function() {
					return a
				},
				_c: function() {
					return E
				},
				aW: function() {
					return T
				},
				dC: function() {
					return P
				},
				gY: function() {
					return w
				},
				j8: function() {
					return l
				},
				jz: function() {
					return p
				},
				n5: function() {
					return v
				},
				om: function() {
					return g
				},
				w: function() {
					return r
				},
				zF: function() {
					return A
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(C) {
				return C.EXPOSED_CREDENTIALS = "exposed_credentials", C.CONTENT_SCANNING = "content_scanning", C.FIREWALL_AI = "firewall_ai", C
			}({});
			const i = "all";
			let u = function(C) {
					return C.LABELS = "labels", C
				}({}),
				s = function(C) {
					return C.USER = "user", C.MANAGED = "managed", C
				}({}),
				f = function(C) {
					return C.SOURCE = "source", C
				}({}),
				c = function(C) {
					return C.NAME = "name", C.SOURCE = "source", C.NEW_LABEL_NAME = "newLabelName", C
				}({}),
				l = function(C) {
					return C.ENDPOINT = "endpoint", C.METHOD = "method", C.OPERATION_ID = "operationId", C
				}({}),
				g = function(C) {
					return C.NAME = "name", C.MAPPED_RESOURCES = "mapped_resources.operations", C.SOURCE = "source", C.APPLY = "apply", C
				}({});
			const a = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: g.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[f.SOURCE]: i
					}
				},
				filters: f,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let _ = function(C) {
				return C.CREATED_LABEL = "createdLabel", C.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", C.DELETED_LABEL = "deletedLabel", C.APPLIED_LABEL = "appliedLabel", C.EDITED_LABEL = "editedLabel", C.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", C
			}({});
			const d = "650px",
				p = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				h = /^[A-Za-z0-9-]+$/,
				T = /^cf-/;
			let v = function(C) {
				return C.NAME = "name", C.DESCRIPTION = "description", C
			}({});
			const m = "all";
			let O = function(C) {
				return C.METHOD = "method", C.HOSTNAME = "hostname", C
			}({});
			const E = {
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
						[O.METHOD]: m,
						[O.HOSTNAME]: m
					}
				},
				filters: O
			};
			let w = function(C) {
				return C.TITLE = "title", C.DESCRIPTION = "description", C.SUBMIT = "submit", C
			}({});
			const D = 1e3,
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
				P = "exposed-credentials-module",
				B = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(z, y, t) {
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
					return v.Xs
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
					return v.bH
				},
				Mb: function() {
					return i.Mb
				},
				ui: function() {
					return v.ui
				},
				P3: function() {
					return v.P3
				},
				Ri: function() {
					return v.Ri
				},
				cN: function() {
					return v.cN
				},
				m8: function() {
					return T
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

			function f(m) {
				for (var O = 1; O < arguments.length; O++) {
					var E = arguments[O] != null ? Object(arguments[O]) : {},
						w = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(E).filter(function(D) {
						return Object.getOwnPropertyDescriptor(E, D).enumerable
					})), w.forEach(function(D) {
						c(m, D, E[D])
					})
				}
				return m
			}

			function c(m, O, E) {
				return O = l(O), O in m ? Object.defineProperty(m, O, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[O] = E, m
			}

			function l(m) {
				var O = g(m, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function g(m, O) {
				if (typeof m != "object" || m === null) return m;
				var E = m[Symbol.toPrimitive];
				if (E !== void 0) {
					var w = E.call(m, O || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(m)
			}
			let n = function(m) {
					return m.LABELS_LIST = "Labels List page", m.LABELS_APPLY = "Labels Apply page", m.LABELS_SIDE_MODAL = "Labels Side Modal", m.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", m.LABELS_OPERATION_DETAILS = "Operation Details page", m
				}({}),
				o = function(m) {
					return m.API_SHIELD = "API Shield", m.SECURITY_SETTINGS = "Security Settings", m
				}({}),
				a = function(m) {
					return m.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", m.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", m.OPERATIONS_TABLE_ROW = "Operations table row", m.OPERATION_DETAILS_PAGE = "Operation details page", m
				}({}),
				_ = function(m) {
					return m.UPSERT = "upsert", m.OVERWRITE = "overwrite", m
				}({}),
				d = function(m) {
					return m.SINGLE = "single", m.MULTIPLE = "multiple", m
				}({}),
				p = function(m) {
					return m.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", m.DELETE_LABEL = "delete a user label in the settings page", m.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", m.CREATE_LABEL_CLICKED = "click create label button in the settings page", m.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", m.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", m.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", m.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", m.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", m.OPEN_LABELS_SIDE_MODAL = "open labels side modal", m.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", m.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", m.CREATE_NEW_LABEL = "create a new label", m
				}({});
			const h = ({
					name: m,
					product: O,
					category: E = "user journey",
					pageName: w,
					from: D,
					write_strategy: A,
					type: P,
					target: B,
					selected: C
				}) => {
					s().sendEvent(m, f({
						category: E,
						pageName: w,
						product: O
					}, D ? {
						from: D
					} : {}, A ? {
						write_strategy: A
					} : {}, P ? {
						type: P
					} : {}, B ? {
						target: B
					} : {}, C ? {
						selected: C
					} : {}))
				},
				T = () => {
					var m;
					return (m = Object.values(p)) === null || m === void 0 ? void 0 : m.flat()
				};
			var v = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				P3: function() {
					return l
				},
				Ri: function() {
					return g
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
					return f
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				s = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const f = a => {
					const _ = (0, e.RO)(a),
						d = !!(0, i.rV)(a, "rulesets.file_upload_scan_allowed"),
						p = !!(0, i.BF)(a, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? _ && (d || p) : p
				},
				c = a => Number((0, i.rV)(a, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				l = a => (0, i.rV)(a, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				g = a => (0, i.rV)(a, "rulesets.leaked_credential_checks_allowed"),
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
		"../react/pages/security/settings/resources/types.ts": function(z, y, t) {
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
		"../react/pages/security/settings/resources/utils.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return a
				},
				Mb: function() {
					return _
				},
				N2: function() {
					return O
				},
				Q4: function() {
					return p
				},
				QF: function() {
					return o
				},
				Vy: function() {
					return T
				},
				Wv: function() {
					return d
				},
				mm: function() {
					return m
				},
				sQ: function() {
					return v
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
				f = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(E) {
				for (var w = 1; w < arguments.length; w++) {
					var D = arguments[w] != null ? Object(arguments[w]) : {},
						A = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(D).filter(function(P) {
						return Object.getOwnPropertyDescriptor(D, P).enumerable
					})), A.forEach(function(P) {
						l(E, P, D[P])
					})
				}
				return E
			}

			function l(E, w, D) {
				return w = g(w), w in E ? Object.defineProperty(E, w, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[w] = D, E
			}

			function g(E) {
				var w = n(E, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function n(E, w) {
				if (typeof E != "object" || E === null) return E;
				var D = E[Symbol.toPrimitive];
				if (D !== void 0) {
					var A = D.call(E, w || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(E)
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
				_ = E => e.Ry({
					[s.T.CONTACT]: e.IX().of(e.Z_().required(E("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, E("security_txt.fields.contact.format_error"))),
					[s.T.EXPIRES]: e.hT().required(E("common.required")).min(new Date, E("security_txt.fields.expires.min_error"))
				}),
				d = E => {
					const w = {};
					for (const D in E) w[D] = Array.isArray(E[D]) ? E[D].filter(A => !!A) : E[D];
					return c({}, w, {
						expires: (0, f.DZ)(E.expires)
					})
				},
				p = (E, w, D) => {
					const A = [...new Set([s.T.CONTACT, s.T.EXPIRES, ...Object.values(s.T)])],
						P = Object.entries(E).sort(([B], [C]) => A.indexOf(B) - A.indexOf(C)).filter(([B, C]) => !!a[B] && !!C && (!Array.isArray(C) || !!C.length)).map(([B, C]) => Array.isArray(C) ? C.map(S => `${D(a[B].label)}: ${S}`).join(`
`) : `${D(a[B].label)}: ${C}`).join(`
`);
					(0, r.yH)(`Cloudflare_${w}_security.txt`, P, "text/plain;charset=utf-8")
				};
			let h = function(E) {
				return E.CREATED = "created security.txt", E.ENABLED = "enabled security.txt", E.DISABLED = "disabled security.txt", E.DOWNLOADED = "downloaded security.txt", E.UPDATED = "updated security.txt", E.DELETED = "deleted security.txt", E
			}({});
			const T = E => (E == null ? void 0 : E.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (E == null ? void 0 : E.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				v = E => E === u.W3 ? void 0 : E,
				m = E => u.aW.test(E),
				O = E => {
					switch (E) {
						case u.w.CONTENT_SCANNING:
							return i.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return i.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(z, y, t) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Sb: function() {
					return g
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
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
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
				g = ({
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
		"../react/pages/shared-config/sparrowEvents.tsx": function(z, y, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(z, y, t) {
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
		"../react/pages/stream/actionTypes.ts": function(z, y, t) {
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
		"../react/pages/stream/reducer.ts": function(z, y, t) {
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
				return a = f(a), a in o ? Object.defineProperty(o, a, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[a] = _, o
			}

			function f(o) {
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
				g = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(o = g, a) {
				switch (a.type) {
					case r.U.ResetState:
						return g;
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
		"../react/pages/stream/routes.ts": function(z, y, t) {
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
				f = (0, e.BC)`${u}/${"videoId"}`,
				c = (0, e.BC)`${r}/video-transformations`,
				l = {
					root: r,
					inputs: i,
					configureInputs: (0, e.BC)`${i}/custom-hostnames`,
					videos: u,
					analytics: s,
					videoPage: f,
					videoTransformationsConfigList: c,
					videoTransformationsZoneConfig: (0, e.BC)`${c}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${i}/${"inputId"}`,
					createOutput: (0, e.BC)`${i}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${i}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${r}/bundle-checkout-success`,
					plans: (0, e.BC)`${r}/plans`,
					managePlan: (0, e.BC)`${r}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(z, y, t) {
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
					return f
				},
				xW: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				i = t("../react/pages/stream/reducer.ts");
			const u = T => T[i.nY],
				s = T => u(T).videos,
				f = T => u(T).videoUpdateStatuses,
				c = T => u(T).loading,
				l = T => u(T).requestTimestamp,
				g = T => u(T).storageLoading,
				n = T => u(T).storage,
				o = T => (0, r.BF)(T, "stream.enabled") || (0, e.bC)(T),
				a = T => (0, e.Le)(T, "stream", "connect"),
				_ = T => (0, e.Le)(T, "stream", "stream-4371"),
				d = T => (0, e.Le)(T, "stream", "public-details-enabled"),
				p = T => !!(0, e.Le)(T, "stream", "llhls"),
				h = T => {
					const v = n(T);
					return v !== void 0 && v.limitMins > v.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(z, y, t) {
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

			function r(u, s, f) {
				const c = {
					search: f,
					limit: e.toString()
				};
				return s !== void 0 && (c.end = s), c
			}

			function i(u, s, f) {
				return {
					limit: e.toString(),
					search: f,
					asc: "true",
					start_comp: "gt",
					start: s
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(z, y, t) {
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
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return l
				},
				WM: function() {
					return d
				},
				Zk: function() {
					return g
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
					var T = arguments[h] != null ? Object(arguments[h]) : {},
						v = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(T).filter(function(m) {
						return Object.getOwnPropertyDescriptor(T, m).enumerable
					})), v.forEach(function(m) {
						u(p, m, T[m])
					})
				}
				return p
			}

			function u(p, h, T) {
				return h = s(h), h in p ? Object.defineProperty(p, h, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[h] = T, p
			}

			function s(p) {
				var h = f(p, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function f(p, h) {
				if (typeof p != "object" || p === null) return p;
				var T = p[Symbol.toPrimitive];
				if (T !== void 0) {
					var v = T.call(p, h || "default");
					if (typeof v != "object") return v;
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
				g = function(p) {
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
					REVIEW: g,
					WIZARD: n,
					USAGE: o
				}).flatMap(Object.values),
				d = (p, h) => r().sendEvent(p, i({
					category: "user journey",
					product: "load balancing"
				}, h))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(z, y, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(z, y, t) {
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
		"../react/pages/turnstile/tracking.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return l
				},
				P: function() {
					return n
				},
				Xh: function() {
					return g
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
				var a = f(o, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function f(o, a) {
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
			const g = ({
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
		"../react/pages/user-groups/sparrowEvents.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return l
				},
				Ky: function() {
					return g
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
				var o = f(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(n, o) {
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
				g = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(z, y, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$e: function() {
					return D
				},
				$h: function() {
					return m
				},
				G: function() {
					return w
				},
				M3: function() {
					return P
				},
				Tr: function() {
					return T
				},
				UY: function() {
					return p
				},
				bH: function() {
					return o
				},
				fv: function() {
					return B
				},
				hF: function() {
					return O
				},
				iw: function() {
					return _
				},
				m7: function() {
					return n
				},
				re: function() {
					return E
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

			function f(C) {
				for (var S = 1; S < arguments.length; S++) {
					var U = arguments[S] != null ? Object(arguments[S]) : {},
						$ = Object.keys(U);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(U).filter(function(G) {
						return Object.getOwnPropertyDescriptor(U, G).enumerable
					})), $.forEach(function(G) {
						c(C, G, U[G])
					})
				}
				return C
			}

			function c(C, S, U) {
				return S = l(S), S in C ? Object.defineProperty(C, S, {
					value: U,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[S] = U, C
			}

			function l(C) {
				var S = g(C, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function g(C, S) {
				if (typeof C != "object" || C === null) return C;
				var U = C[Symbol.toPrimitive];
				if (U !== void 0) {
					var $ = U.call(C, S || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(C)
			}
			const n = C => (0, i.nA)(C) ? (0, s.p1)(C) && (0, u.$n)(C, "zone_versioning", "versioning") : !1,
				o = C => C.zoneVersioning.zoneApplications,
				a = (0, e.P1)("zoneApplications", o),
				_ = C => C.zoneVersioning.zoneVersions,
				d = (0, e.P1)("zoneVersions", _),
				p = (0, r.P1)(d, C => {
					if (C) return C.filter(S => S.status == "V")
				}),
				h = C => C.zoneVersioning.environments,
				T = C => C.zoneVersioning.environments.isRequesting,
				v = (0, e.P1)("environments", h),
				m = (0, r.P1)(a, C => {
					if (C) {
						if (C.length === 1) return C[0];
						C.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${C.length}`))
					}
					return null
				}),
				O = (0, r.P1)(v, C => C ? C.environments : []),
				E = C => {
					var S;
					return (S = C.zoneVersioning) === null || S === void 0 ? void 0 : S.zoneVersionSelector
				},
				w = (0, r.P1)(E, d, (C, S) => {
					if (!(C == null ? void 0 : C.isVersion) || !S) return null;
					const U = S.find($ => {
						if ($.version === C.selectedVersion && $.locked) return !0
					});
					return U ? f({}, U, {
						isLocked: !0
					}) : null
				}),
				D = (0, r.P1)(d, O, (C, S) => !S || !C ? [] : C.map(U => {
					const $ = [];
					for (const G in S) S[G].version === U.version && $.push(S[G]);
					return f({}, U, {
						environments: $
					})
				})),
				A = C => C.zoneVersioning.WAFMigrationStatus,
				P = (0, e.P1)("WAFMigrationStatus", A),
				B = C => C.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return A
				},
				CI: function() {
					return w
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
					return P
				},
				X$: function() {
					return O
				},
				X6: function() {
					return g
				},
				d4: function() {
					return _
				},
				fE: function() {
					return l
				},
				im: function() {
					return v
				},
				lv: function() {
					return h
				},
				rL: function() {
					return n
				},
				wW: function() {
					return f
				}
			});

			function e(B) {
				for (var C = 1; C < arguments.length; C++) {
					var S = arguments[C] != null ? Object(arguments[C]) : {},
						U = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(S).filter(function($) {
						return Object.getOwnPropertyDescriptor(S, $).enumerable
					})), U.forEach(function($) {
						r(B, $, S[$])
					})
				}
				return B
			}

			function r(B, C, S) {
				return C = i(C), C in B ? Object.defineProperty(B, C, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[C] = S, B
			}

			function i(B) {
				var C = u(B, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function u(B, C) {
				if (typeof B != "object" || B === null) return B;
				var S = B[Symbol.toPrimitive];
				if (S !== void 0) {
					var U = S.call(B, C || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(B)
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
						gradualRollouts: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
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
				f = 800,
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
				g = {
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
				T = "workers.dev",
				v = "YYYY-MM-DD HH:mm:SS ZZ",
				m = "active",
				O = ["bundled", "unbound", "standard"],
				E = null,
				w = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let D = function(B) {
				return B[B.NONE = 0] = "NONE", B[B.MISS = 1] = "MISS", B[B.EXPIRED = 2] = "EXPIRED", B[B.UPDATING = 3] = "UPDATING", B[B.STALE = 4] = "STALE", B[B.HIT = 5] = "HIT", B[B.IGNORED = 6] = "IGNORED", B[B.BYPASS = 7] = "BYPASS", B[B.REVALIDATED = 8] = "REVALIDATED", B[B.DYNAMIC = 9] = "DYNAMIC", B[B.STREAM_HIT = 10] = "STREAM_HIT", B[B.DEFERRED = 11] = "DEFERRED", B
			}({});
			const A = [D.HIT, D.STREAM_HIT];
			let P = function(B) {
				return B.SECRETS_STORE_ID = "store_id", B.SECRET_NAME = "secret_name", B
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(z, y, t) {
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
				i = (l, g, n) => `${n?`${n}.`:""}${l}.${r(g)}`,
				u = (l, g, n) => `https://${i(l,g,n)}`,
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
				f = "https://cron-triggers.cloudflareworkers.com",
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
					describeCron: `${f}/describe`,
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
					nextCron: `${f}/next`,
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
					validateCron: `${f}/validate`,
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
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					workflows: (0, e.BC)`/accounts/${"accountId"}/workflows`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(z, y, t) {
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
					return f
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
			})).body, u = async (...c) => (await e.get(...c)).body, s = c => async (l, g) => {
				const n = await fetch(l, g).then(o => o.json());
				return c.assertDecode(n)
			}, f = async (...c) => (await u(...c)).result;
			y.ZP = {
				fetcher: c => Array.isArray(c) ? f(...c) : f(c)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(z, y) {
				y()
			})(this, function() {
				"use strict";

				function z() {
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
						var T = h.type,
							v = h.tagName;
						return !!(v == "INPUT" && i[T] && !h.readOnly || v == "TEXTAREA" && !h.readOnly || h.isContentEditable)
					}

					function f(h) {
						h.getAttribute("is-focus-visible") !== "" && h.setAttribute("is-focus-visible", "")
					}

					function c(h) {
						h.getAttribute("is-focus-visible") === "" && h.removeAttribute("is-focus-visible")
					}

					function l(h) {
						u(document.activeElement) && f(document.activeElement), t = !0
					}

					function g(h) {
						t = !1
					}

					function n(h) {
						!u(h.target) || (t || s(h.target)) && f(h.target)
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
					document.addEventListener("keydown", l, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", a, !0), _(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && y(z)
			})
		},
		"../react/utils/bootstrap.ts": function(z, y, t) {
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
					var s, f, c;
					return (s = window) === null || s === void 0 || (f = s.bootstrap) === null || f === void 0 || (c = f.data) === null || c === void 0 ? void 0 : c.security_token
				},
				r = () => {
					var s, f, c;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (f = s.data) === null || f === void 0 || (c = f.user) === null || c === void 0 ? void 0 : c.id)
				},
				i = () => {
					var s, f;
					return !!((s = t.g.bootstrap) === null || s === void 0 || (f = s.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				u = () => {
					var s, f, c, l;
					return (s = window) === null || s === void 0 || (f = s.bootstrap) === null || f === void 0 || (c = f.data) === null || c === void 0 || (l = c.user) === null || l === void 0 ? void 0 : l.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(z, y, t) {
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
				f = () => (r() || "").indexOf("C0005") !== -1,
				c = n => {
					const o = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				l = () => {
					var n;
					const o = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				g = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return O
				},
				Kd: function() {
					return o
				},
				S8: function() {
					return m
				},
				ZW: function() {
					return l
				},
				ay: function() {
					return E
				},
				fh: function() {
					return w
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
				f = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				l = i.Q.en_US,
				g = "en_US",
				n = "cf-locale";

			function o() {
				const P = (0, f.parse)(document.cookie);
				return s.Z.get(n) || P[n] || null
			}

			function a(P) {
				document.cookie = (0, f.serialize)(n, P, {
					path: "/",
					maxAge: 31536e3,
					secure: !0
				}), s.Z.set(n, P)
			}

			function _() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0,
					secure: !0
				}), cache.remove(n)
			}
			const d = P => (0, u.Yd)(i.Q).find(B => i.Q[B] === P) || g,
				p = [],
				h = [],
				T = [i.Q.de_DE, i.Q.en_US, i.Q.es_ES, i.Q.fr_FR, i.Q.it_IT, i.Q.pt_BR, i.Q.ko_KR, i.Q.ja_JP, i.Q.zh_CN, i.Q.zh_TW],
				v = {
					test: [...T, ...h, ...p],
					development: [...T, ...h, ...p],
					staging: [...T, ...h, ...p],
					production: [...T, ...h]
				},
				m = P => {
					const B = i.Q[P];
					return v.production.includes(B)
				},
				O = () => Object.keys(i.Q).filter(P => m(P)),
				E = P => {
					const B = i.Q[P];
					return h.includes(B)
				},
				w = P => D[P],
				D = {
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
		"../react/utils/translator.tsx": function(z, y, t) {
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
			const f = new r.Z({
				pseudoLoc: (0, s.J8)("is_pseudo_loc")
			});

			function c(p, ...h) {
				return f.t(p, ...h)
			}
			const l = f;

			function g(p, ...h) {
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
		"../react/utils/url.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Ct: function() {
					return P
				},
				Fl: function() {
					return ae
				},
				KT: function() {
					return V
				},
				NF: function() {
					return O
				},
				Nw: function() {
					return D
				},
				Pd: function() {
					return w
				},
				Uh: function() {
					return R
				},
				cm: function() {
					return T
				},
				e1: function() {
					return A
				},
				el: function() {
					return ee
				},
				hW: function() {
					return W
				},
				pu: function() {
					return N
				},
				qR: function() {
					return ne
				},
				td: function() {
					return E
				},
				uW: function() {
					return F
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				r = t("../react/pages/abuse/constants.ts"),
				i = t("../react/pages/d1/routes.ts"),
				u = t("../react/pages/images/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				f = t("../react/pages/r2/routes.ts"),
				c = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/zoneless-workers/routes.ts"),
				g = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(g);

			function o(M) {
				for (var Y = 1; Y < arguments.length; Y++) {
					var ie = arguments[Y] != null ? Object(arguments[Y]) : {},
						de = Object.keys(ie);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(ie).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(ie, Ee).enumerable
					})), de.forEach(function(Ee) {
						a(M, Ee, ie[Ee])
					})
				}
				return M
			}

			function a(M, Y, ie) {
				return Y = _(Y), Y in M ? Object.defineProperty(M, Y, {
					value: ie,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[Y] = ie, M
			}

			function _(M) {
				var Y = d(M, "string");
				return typeof Y == "symbol" ? Y : String(Y)
			}

			function d(M, Y) {
				if (typeof M != "object" || M === null) return M;
				var ie = M[Symbol.toPrimitive];
				if (ie !== void 0) {
					var de = ie.call(M, Y || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Y === "string" ? String : Number)(M)
			}
			const {
				endsWithSlash: p
			} = e.default, h = new RegExp(/([0-9a-z]{32})/g), T = M => M == null ? void 0 : M.replace(h, ":id"), v = (M, Y) => {
				const ie = M.replace(p, "").split("/");
				return ie.slice(0, 2).concat([Y]).concat(ie.slice(3)).join("/")
			}, m = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), O = M => `/${M.replace(p,"").replace(/^\//,"")}`, E = M => D("add-site", M), w = M => D("billing", M), D = (M, Y) => Y ? `/${Y}${M?`/${M}`:""}` : `/?to=/:account/${M}`, A = () => {
				const M = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return M ? M[1] : null
			}, P = (M, Y) => n().stringify(o({}, n().parse(M), Y)), B = (M = "") => M.toString().replace(/([\/]{1,})$/, ""), C = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], S = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, U = /^\/(\w{32,})(\/[^.]*)?/, $ = M => C.includes(M), G = M => !$(M), ne = M => !$(M) && U.test(M), ee = M => !$(M) && S.test(M), oe = M => S.exec(M), W = M => {
				if (ee(M)) return M.split("/").filter(Y => Y.length > 0)[1]
			}, K = M => U.exec(M), F = M => {
				if (ne(M)) {
					const Y = K(M);
					if (Y) return Y[1]
				}
			}, x = M => ne(M) && M.split("/")[2] === "register-domain", I = M => x(M) ? M.split("/") : null, L = M => {
				if (ee(M)) {
					const [, , , Y, ie, de, Ee, ge] = M.split("/");
					return Y === "traffic" && ie === "load-balancing" && de === "pools" && Ee === "edit" && ge
				}
			}, R = M => {
				const Y = I(M);
				if (Y) return Y[3]
			}, X = (M, Y) => {
				var ie, de;
				return ((ie = M.pattern.match(/\:/g)) !== null && ie !== void 0 ? ie : []).length - ((de = Y.pattern.match(/\:/g)) !== null && de !== void 0 ? de : []).length
			}, q = [...Object.values(c.C), ...Object.values(u.KJ), ...Object.values(f._j), ...Object.values(l._j), ...Object.values(s._j), ...Object.values(i._)].sort(X);

			function ae(M) {
				if (!G(M)) return M;
				for (const ge of q)
					if (ge.expression.test(M)) return ge.pattern;
				if (r.eM.abuseReportTab.expression.test(M)) {
					const ge = M.split("/"),
						te = ge[ge.length - 1];
					return r.eM.abuseReportTab.pattern.replace(":tab", te)
				}
				if (r.eM.abuseReport.expression.test(M)) return r.eM.abuseReport.pattern;
				const Y = I(M);
				if (Y) {
					const [, , ge, , ...te] = Y;
					return `/:accountId/${ge}/:domainName/${te.join("/")}`
				}
				if (L(M)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const de = oe(M);
				if (de) {
					const [, , , , ge] = de;
					return `/:accountId/:zoneName${ge||""}`
				}
				const Ee = K(M);
				if (Ee) {
					const [, , ge] = Ee;
					return `/:accountId${ge||""}`
				}
				return M
			}

			function N(M) {
				if (!!M) try {
					const ie = M.split(".").pop();
					if (ie && ie.length > 0) return ie
				} catch {}
			}

			function V(M, Y = document.location.href) {
				try {
					const ie = new URL(M),
						de = new URL(Y);
					if (ie.origin === de.origin) return `${ie.pathname}${ie.search}${ie.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(z, y, t) {
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
			const f = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				l = () => {
					const g = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						f.test(g.pathname) && i.Z.set(c, g, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(z, y, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(z, y, t) {
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
				var f, c, l, g, n, o;
				return (f = window) === null || f === void 0 || (c = f.bootstrap) === null || c === void 0 || (l = c.data) === null || l === void 0 || (g = l.user) === null || g === void 0 || (n = g.betas) === null || n === void 0 || (o = n.some) === null || o === void 0 ? void 0 : o.call(n, a => a === "zone_level_access_beta")
			}

			function u() {
				const f = !!(0, e.Z)("zone-level-access");
				return i() || f
			}

			function s(f) {
				const c = !!(0, r.z1)("zone-level-access")(f);
				return i() || c
			}
		},
		"../utils/getDashVersion.ts": function(z, y, t) {
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
		"../utils/initSparrow.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return $e
				},
				IM: function() {
					return Te
				},
				yV: function() {
					return k
				},
				Ug: function() {
					return b
				},
				v_: function() {
					return me
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				i = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				s = t("../react/common/selectors/languagePreferenceSelector.ts"),
				f = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				l = t("../react/utils/url.ts"),
				g = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../../../../node_modules/lodash-es/memoize.js"),
				a = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				_ = t("../utils/getDashVersion.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				p = t("../react/common/selectors/entitlementsSelectors.ts"),
				h = t("../react/common/utils/getEnvironment.ts");

			function T(ce) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(ve, Oe).enumerable
					})), _e.forEach(function(Oe) {
						v(ce, Oe, ve[Oe])
					})
				}
				return ce
			}

			function v(ce, le, ve) {
				return le = m(le), le in ce ? Object.defineProperty(ce, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[le] = ve, ce
			}

			function m(ce) {
				var le = O(ce, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function O(ce, le) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ce, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ce)
			}
			const E = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				w = (0, o.Z)(ce => {
					try {
						return E.assertDecode((0, c.parse)(ce))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				D = ce => (le, ve, _e) => {
					try {
						const qe = window.location.pathname,
							et = (0, u.bh)().getState(),
							lt = w(document.cookie),
							Ze = T({
								page: (0, l.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, _.t)(),
								environment: (0, h.Z)()
							}, lt);
						if (le === "identify") {
							var Oe, je;
							const pt = {
								gates: (0, a.T2)(et) || {},
								country: (Oe = t.g) === null || Oe === void 0 || (je = Oe.bootstrap) === null || je === void 0 ? void 0 : je.ip_country
							};
							return ce(le, ve, T({}, Ze, pt, _e))
						} else {
							const pt = {
								accountId: (0, l.uW)(qe),
								zoneName: (0, l.hW)(qe),
								domainName: (0, l.Uh)(qe)
							};
							if ((0, l.qR)(qe)) {
								var Ye;
								const tt = (0, d.D0)(et);
								pt.isEntAccount = !!(tt == null || (Ye = tt.meta) === null || Ye === void 0 ? void 0 : Ye.has_enterprise_zones) || (0, p.p1)(et)
							}
							if ((0, l.el)(qe)) {
								var st;
								const tt = (0, g.nA)(et);
								pt.zoneId = tt == null ? void 0 : tt.id, pt.plan = tt == null || (st = tt.plan) === null || st === void 0 ? void 0 : st.legacy_id
							}
							return ce(le, ve, T({}, Ze, pt, _e))
						}
					} catch (qe) {
						return console.error(qe), ce(le, ve, _e)
					}
				},
				A = ce => async (le, ve, _e) => {
					try {
						return await ce(le, ve, _e)
					} catch (Oe) {
						if (console.error(Oe), !me()) throw Oe;
						return {
							status: "rejected",
							reason: Oe
						}
					}
				};
			var P = t("../react/app/components/AccountHome/tracking.ts"),
				B = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				C = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				S = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				U = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				$ = t("../react/common/middleware/sparrow/errors.ts"),
				G = t("../react/pages/abuse/constants.ts"),
				ne = t("../react/pages/blocked-content/constants.ts"),
				ee = t("../react/pages/caching/tracking.tsx"),
				oe = t("../react/pages/dns/dns-records/tracking.ts"),
				W = t("../react/pages/home/alerts/tracking.ts"),
				K = t("../react/pages/home/audit-log/tracking.ts"),
				F = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				x = t("../react/pages/home/configurations/lists/tracking.ts"),
				I = t("../react/pages/home/domain-registration/tracking.ts"),
				L = t("../react/pages/home/members/sparrowEvents.ts"),
				R = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				X = t("../react/pages/hyperdrive/tracking.ts"),
				q = t("../react/pages/magic/network-monitoring/constants.ts"),
				ae = t("../react/pages/magic/overview/tracking.ts"),
				N = t("../react/pages/magic/packet-captures/constants.ts"),
				V = t("../react/pages/page-rules/tracking.ts"),
				M = t("../react/pages/pages/constants.ts"),
				Y = t("../react/pages/pipelines/tracking.ts"),
				ie = t("../react/pages/profile/tracking.ts"),
				de = t("../react/pages/secrets-store/resources/constants.ts"),
				Ee = t("../react/pages/security-center/tracking.ts"),
				ge = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				te = t("../react/pages/security/api-shield/tracking.ts"),
				be = t("../react/pages/security/bots/tracking.ts"),
				De = t("../react/pages/security/overview/resources/constants.ts"),
				Le = t("../react/pages/security/page-shield/resources/index.ts"),
				xe = t("../react/pages/security/resources/constants.tsx"),
				ke = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Qe = t("../react/common/components/filter-editor/triplet-fields/SequencesField/constants.tsx"),
				ze = t("../react/pages/security/settings/index.tsx"),
				nt = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				We = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Z = t("../react/pages/spectrum/tracking.tsx"),
				Ce = t("../react/pages/traffic/argo/tracking.ts"),
				Be = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				Re = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				ot = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				dt = t("../react/pages/turnstile/tracking.ts"),
				gt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ae = t("../react/pages/zoneless-workers/constants.ts"),
				at = t("../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts"),
				J = t("../react/pages/analytics/eos/resources/tracking.ts"),
				se = t("../react/pages/internal-dns/tracking.ts");
			const we = ((ce, le, ...ve) => n.eg.union([n.eg.literal(ce), n.eg.literal(le), ...ve.map(_e => n.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", ...Object.values(J.f), "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "route to custom error rules", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", P.gX.SPARROW_PROJECTS_TABLE_CLICK, P.gX.SPARROW_EMPTY_STATE_CTA_CLICK, P.gX.SPARROW_PRODUCT_CARD_CLICK, P.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, P.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, P.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ae.QV.clickedDownloadAnalytics, Ae.QV.clickedPrintAnalytics, Ae.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ae.QV.addWCITriggerToExistingWorker, Ae.QV.updateWCITrigger, Ae.QV.deleteWCITrigger, Ae.QV.addWCITriggerToNewWorker, Ae.QV.createWCIBuildForNewWorker, Ae.QV.completedWCIBuildForNewWorker, Ae.QV.changedDefaultConfigurations, Ae.QV.clickElement, M.QV.toggledPagesSmartPlacement, M.QV.downloadDemoProject, Ae.QV.clickCreateWorkerFromRepoNextStep, Ae.QV.clickCreateWorkerFromRepoPreviousStep, Ae.QV.clickCreateNewSCMConnection, Ae.QV.redirectFromSCMOAuth, Ae.QV.clickSubmitError, Ae.QV.selectTemplate, Ae.QV.clickedListTemplates, Ae.QV.clickedImportRepository, Ae.QV.clickedClonePublicRepositoryFromUrl, Ae.QV.templateStubWorkerCreated, Ae.QV.templateStubWorkerCreationFailed, Ae.QV.templateRepositoryCreated, Ae.QV.templateRepositoryCreationFailed, Ae.QV.copyTemplateC3Command, Ae.QV.templateDeployClick, Ae.QV.reauthenticateGithubModalShown, Ae.QV.updateGithubPermissionsClicked, Ae.QV.D2W_importRepository, Ae.QV.D2W_stubWorkerCreated, Ae.QV.D2W_stubWorkerCreationFailed, Ae.QV.D2W_repositoryCreated, Ae.QV.D2W_repositoryCreationFailed, Ae.QV.D2W_resourcesProvisioned, Ae.QV.D2W_resourceProvisioningFailed, Ae.QV.D2W_githubAPIRateLimitReached, Ae.QV.createResource, Ae.QV.deleteResource, Ae.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", be.N3.INITIAL_FETCH_SCORES, be.N3.FETCH_CONFIGURATION, be.N3.INITIAL_FETCH_TIME_SERIES, be.N3.INITIAL_FETCH_ATTRIBUTES, be.N3.UPDATE_SETTINGS, be.N3.DELETE_RULE, be.N3.UPDATE_RULE, be.N3.FETCH_RULES, be.N3.CONFIGURE_BOT_MANAGEMENT, be.N3.WAF_RULES_REDIRECT, R.F.TOGGLE_TCP_PROTECTION, R.F.GET_TCP_PROTECTION_PREFIXES, R.F.CREATE_TCP_PROTECTION_PREFIXES, R.F.CREATE_TCP_PROTECTION_PREFIX, R.F.UPDATE_TCP_PROTECTION_PREFIX, R.F.DELETE_TCP_PROTECTION_PREFIX, R.F.DELETE_TCP_PROTECTION_PREFIXES, R.F.GET_TCP_PROTECTION_ALLOWLIST, R.F.CREATE_TCP_PROTECTION_ALLOWLIST, R.F.UPDATE_TCP_PROTECTION_ALLOWLIST, R.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, R.F.DELETE_TCP_PROTECTION_ALLOWLIST, R.F.GET_SYN_PROTECTION_RULES, R.F.GET_SYN_PROTECTION_RULE, R.F.CREATE_SYN_PROTECTION_RULE, R.F.UPDATE_SYN_PROTECTION_RULE, R.F.DELETE_SYN_PROTECTION_RULE, R.F.GET_TCP_FLOW_PROTECTION_RULES, R.F.GET_TCP_FLOW_PROTECTION_RULE, R.F.CREATE_TCP_FLOW_PROTECTION_RULE, R.F.UPDATE_TCP_FLOW_PROTECTION_RULE, R.F.DELETE_TCP_FLOW_PROTECTION_RULE, R.F.GET_SYN_PROTECTION_FILTERS, R.F.GET_SYN_PROTECTION_FILTER, R.F.CREATE_SYN_PROTECTION_FILTER, R.F.UPDATE_SYN_PROTECTION_FILTER, R.F.DELETE_SYN_PROTECTION_FILTER, R.F.GET_TCP_FLOW_PROTECTION_FILTERS, R.F.GET_TCP_FLOW_PROTECTION_FILTER, R.F.CREATE_TCP_FLOW_PROTECTION_FILTER, R.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, R.F.DELETE_TCP_FLOW_PROTECTION_FILTER, R.F.GET_DNS_PROTECTION_RULES, R.F.GET_DNS_PROTECTION_RULE, R.F.CREATE_DNS_PROTECTION_RULE, R.F.UPDATE_DNS_PROTECTION_RULE, R.F.DELETE_DNS_PROTECTION_RULE, Le.FV.MANAGE_PAGE_SHIELD_POLICY, Le.FV.CONFIGURE_PAGE_SHIELD, Le.FV.VIEW_DETECTED_CONNECTIONS, Le.FV.VIEW_DETECTED_SCRIPTS, Le.FV.VIEW_PAGE_SHIELD_POLICIES, Le.FV.VIEW_PAGE_SHIELD_SETTINGS, Le.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Le.FV.SHOW_MUTABLE_VERSION_TOOLTIP, x.y.CREATE_LIST, x.y.DELETE_LIST, x.y.ADD_LIST_ITEM, x.y.DELETE_LIST_ITEM, X.KO.PURCHASE_WORKERS_PAID, X.KO.LIST_CONFIGS, X.KO.SEARCH_CONFIGS, X.KO.CREATE_HYPERDRIVE_CONFIG, X.KO.VIEW_CONFIG_DETAILS, X.KO.UPDATE_CACHING_SETTINGS, X.KO.UPDATE_ORIGIN_CONN_LIM_SETTINGS, X.KO.DELETE_HYPERDRIVE_CONFIG, X.KO.CLICK_HYPERDRIVE_DOCUMENTATION, X.KO.CLICK_GET_STARTED_GUIDE, X.KO.CLICK_CONNECTIVITY_GUIDES, X.KO.CLICK_QUICK_LINK, X.KO.CLICK_DISCORD, X.KO.CLICK_COMMUNITY, Z.N.CNAME, Z.N.IP_ADDRESS, Z.N.LB, Z.N.UPDATE_CNAME, Z.N.UPDATE_IP_ADDRESS, Z.N.UPDATE_LB, Z.N.DISABLE, ee.N.TIERED_CACHE, ee.N.CACHE_PURGE, ee.N.CACHE_ANALYTICS, ...(0, dt.P)(), ...(0, U.x4)(), ...(0, ze.m8)(), ...(0, L.SH)(), ...(0, gt.Ky)(), ...(0, C.Cf)(), ot.N.CREATE, ot.N.EVENTS, ot.N.ANALYTICS, ot.N.UPDATE, ot.N.GENERATE_PREVIEW, Ee.RY.INITIATE_URL_SCAN, Ee.RY.LOAD_SCAN_INFO, Ee.Ev.LOAD_THREAT_EVENTS, Ee.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, Ee.Ev.THREAT_EVENTS_FILTERS, Ee.Ev.ABUSE_REPORT_BUTTON_CLICK, Ee.Ev.ABUSE_REPORT_SUBMIT_CLICK, Ee.Ev.ABUSE_REPORT_SUBMIT_FAILED, Ee.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, Ee.v9.EXPAND_INSIGHT_ROW, Ee.v9.ONE_CLICK_RESOLVE_BUTTON, Ee.v9.FOLLOW_RESOLVE_URL, Ee.v9.MANAGE_INSIGHT, Ee.v9.CLICK_SCAN_NOW, Ee.v9.CLICK_EXPORT_INSIGHTS, Ee.v9.BULK_ARCHIVE, Ee.v9.CLICK_DETAILS_BUTTON, te.Fj[te.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, te.Fj[te.kq.ENDPOINT_MANAGEMENT].detailedMetrics, te.Fj[te.kq.ENDPOINT_MANAGEMENT].createEndpoint, te.Fj[te.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, te.Fj[te.kq.ENDPOINT_MANAGEMENT].deployRouting, te.Fj[te.kq.ENDPOINT_MANAGEMENT].deleteRouting, te.Fj[te.kq.API_DISCOVERY].viewDiscoveredEndpoints, te.Fj[te.kq.API_DISCOVERY].saveDiscoveredEndpoint, te.Fj[te.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, te.Fj[te.kq.SCHEMA_VALIDATION].viewSchemasList, te.Fj[te.kq.SCHEMA_VALIDATION].uploadSchema, te.Fj[te.kq.SCHEMA_VALIDATION].viewSchemaAdoption, te.Fj[te.kq.SCHEMA_VALIDATION].downloadSchema, te.Fj[te.kq.SCHEMA_VALIDATION].deleteSchema, te.Fj[te.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, te.Fj[te.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, te.Fj[te.kq.SEQUENCE_ANALYTICS].viewSequencesPage, te.Fj[te.kq.JWT_VALIDATION].viewJWTRules, te.Fj[te.kq.JWT_VALIDATION].addJWTRule, te.Fj[te.kq.JWT_VALIDATION].editJWTRule, te.Fj[te.kq.JWT_VALIDATION].deleteJWTRule, te.Fj[te.kq.JWT_VALIDATION].reprioritizeJWTRule, te.Fj[te.kq.JWT_VALIDATION].viewJWTConfigs, te.Fj[te.kq.JWT_VALIDATION].addJWTConfig, te.Fj[te.kq.JWT_VALIDATION].editJWTConfig, te.Fj[te.kq.JWT_VALIDATION].deleteJWTConfig, te.Fj[te.kq.SETTINGS].redirectToFirewallRulesTemplate, te.Fj[te.kq.SETTINGS].redirectToPages, te.Fj[te.kq.SETTINGS].listSessionIdentifiers, te.Fj[te.kq.SETTINGS].listRequestsContainingSessionIdentifiers, te.Fj[te.kq.SETTINGS].addOrRemoveSessionIdentifiers, te.Fj[te.kq.SETTINGS].redirectToCustomRules, te.Fj[te.kq.SETTINGS].listAllFallthroughSchemas, te.Fj[te.kq.SEQUENCE_RULES].listSequenceRules, te.Fj[te.kq.SEQUENCE_RULES].deleteSequenceRule, te.Fj[te.kq.SEQUENCE_RULES].reorderSequenceRule, te.Fj[te.kq.SEQUENCE_RULES].createSequenceRule, te.Fj[te.kq.SEQUENCE_RULES].editSequenceRule, K.Q.TOGGLE_V2, K.Q.FILTER, K.Q.FILTER_COUNTS, K.Q.FEEDBACK, K.Q.API_LATENCY, Re.Z.ANALYTICS, Re.Z.CREATE_AND_DEPLOY, Re.Z.CREATE_MONITOR_LINK, Re.Z.CREATE_MONITOR, Re.Z.CREATE_POOL_LINK, Re.Z.CREATE_POOL, Re.Z.EDIT_MONITOR, Re.Z.EDIT_POOL, Re.Z.LOAD_BALANCING_TABLE, Re.Z.POOL_TABLE, Re.Z.EDIT_MONITOR_LINK, Re.Z.EDIT_POOL_LINK, ...Be.eT, W.y.SECONDARY_DNS_NOTIFICATION_CREATE, W.y.SECONDARY_DNS_NOTIFICATION_UPDATE, W.y.SECONDARY_DNS_NOTIFICATION_DELETE, oe.U.ZONE_TRANSFER_SUCCESS, oe.U.DNS_RECORD_CREATE, oe.U.DNS_RECORD_UPDATE, oe.U.DNS_RECORD_DELETE, F.Y.PEER_DNS_CREATE, F.Y.PEER_DNS_UPDATE, F.Y.PEER_DNS_DELETE, F.Y.ZONE_TRANSFER_ENABLE, F.Y.ZONE_TRANSFER_DISABLE, Ce.V.ARGO_ENABLEMENT, Ce.V.ARGO_GEO_ANALYTICS_FETCH, Ce.V.ARGO_GLOBAL_ANALYTICS_FETCH, N.X.VIEW_BUCKETS_LIST, N.X.CREATE_BUCKET, N.X.VALIDATE_BUCKET, N.X.DELETE_BUCKET, N.X.VIEW_CAPTURES_LIST, N.X.CREATE_SIMPLE_CAPTURE, N.X.CREATE_FULL_CAPTURE, N.X.VIEW_FULL_CAPTURE, N.X.DOWNLOAD_SIMPLE_CAPTURE, q.bK.VIEW_RULES, q.bK.CREATE_RULE, q.bK.UPDATE_RULE, q.bK.DELETE_RULE, q.bK.VIEW_CONFIGURATION, q.bK.CREATE_CONFIGURATION, q.bK.UPDATE_CONFIGURATION, q.bK.DELETE_CONFIGURATION, ae.r8.VIEW_ALERTS, ae.r8.VIEW_ALERTS_HISTORY, ae.r8.MAGIC_OVERVIEW_ANALYTICS, ae.VZ.CREATE_SITE, ae.VZ.CREATE_TUNNEL, ae.VZ.CREATE_STATIC_ROUTE, ge.DC.CLICK_ADAPTIVE_SAMPLING, ge.DC.CLICK_TO_LOG_EXPLORER_BANNER, ge.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ge.DC.CLICK_SWITCH_TO_RAW_LOGS, ge.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", I.U.REGISTER_DOMAIN_SEARCH_SUBMIT, I.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, I.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, I.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, I.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, I.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, I.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, I.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, I.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, I.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, I.U.REGISTER_DOMAIN_CHECKOUT_ERROR, I.U.TRANSFER_DOMAIN_CHANGE_STEP, I.U.RENEW_DOMAIN_COMPLETED, I.U.RESTORE_DOMAIN_INIT, I.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, I.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, I.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, I.U.RESTORE_DOMAIN_FAILURE, I.U.RESTORE_DOMAIN_COMPLETED, I.U.DOMAIN_DELETE_INIT, I.U.DOMAIN_DELETE_COMPLETED, I.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, I.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, I.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, I.U.DOMAIN_DELETE_CONFIRM_DELETE, I.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, I.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, I.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, I.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, I.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, I.U.DOMAIN_MOVE_START_FLOW, I.U.DOMAIN_MOVE_OPEN_DOCS, I.U.DOMAIN_MOVE_CLOSE_FLOW, I.U.DOMAIN_MOVE_PROGRESS_FLOW, I.U.DOMAIN_MOVE_SUBMIT, I.U.DOMAIN_MOVE_INITIATE_SUCCESS, I.U.DOMAIN_MOVE_INITIATE_ERROR, I.U.DOMAIN_MOVE_CANCEL, I.U.DOMAIN_MOVE_CANCEL_SUCCESS, I.U.DOMAIN_MOVE_CANCEL_ERROR, I.U.ACTION_CENTER_NAVIGATE, I.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, I.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, I.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, I.U.REGISTER_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE, I.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_SUCCESS, I.U.MANAGE_DOMAIN_UPDATE_CANADA_REGISTRANT_LEGAL_TYPE_ERROR, de.z3.CREATE_SECRET, de.z3.DELETE_SECRET, de.z3.BIND_SECRET, de.z3.DUPLICATE_SECRET, de.z3.EDIT_SECRET, Y.KO.CLICK_GET_STARTED_GUIDE, Y.KO.CLICK_PIPELINE_DOCUMENTATION, Y.KO.CLICK_QUICK_LINK, Y.KO.CREATE_PIPELINE, Y.KO.DELETE_PIPELINE, Y.KO.LIST_PIPELINES, Y.KO.VIEW_PIPELINE, B.S.EXISTING_DOMAIN, B.S.NEW_DOMAIN, B.S.WAF_RULESET, B.S.WORKERS, B.S.PAGES, B.S.R2, B.S.ACCOUNT_MEMBERS, V._.TEMPLATE_PRODUCT_SELECTED, V._.TEMPLATE_SELECTED, V._.TEMPLATE_SAVE_DRAFT, V._.TEMPLATE_CANCEL, V._.TEMPLATE_DEPLOY, We.D.CLICK_GO_BACK_SHARE_MODAL, We.D.CLICK_MENU_ITEM_SHARE, We.D.CLICK_ON_CANCEL_SHARE_MODAL, We.D.CLICK_ON_CLOSE_SHARE_MODAL, We.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, We.D.CLICK_ON_DELETE_RULESET, We.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, We.D.CLICK_ON_EDIT_SHARE_PERMISSION, We.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, We.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, We.D.CLICK_ON_SHARE_TABLE_ROW, xe.pR.CLICK_GEOGRAPHICAL_TEMPLATE, xe.pR.CLICK_IP_TEMPLATE, xe.pR.CLICK_USER_AGENT_TEMPLATE, xe.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ze.vc.CREATED, ze.vc.ENABLED, ze.vc.DISABLED, ze.vc.DELETED, ze.vc.UPDATED, ze.vc.DOWNLOADED, ne.Gk.REQUEST_REVIEW, ne.Gk.COPY_URL, S.v.FIELD, S.v.OPERATOR, nt.Vj.SHOW_LCC_MIGRATION_BANNER, nt.Vj.CLICK_LCC_DOCUMENTATION, nt.Vj.CLICK_LCC_UPGRADE_GUIDE, nt.Vj.SHOW_LCC_MIGRATION_WARNING, ke.y.CLICK_DISMISS_INELIGIBILITY, ke.y.CLICK_NEXT_STEP, ke.y.CLICK_OPT_IN, ke.y.CLICK_OPT_IN_BUTTON, ke.y.CLICK_OPT_OUT_BUTTON, ke.y.DISPLAY_MODAL, ke.y.DISPLAY_OPT_OUT_MODAL, ke.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, ke.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, De.AZ.LOAD_INSIGHTS, De.AZ.OPEN_SIDE_MODAL_INSIGHT, De.AZ.CLOSE_SIDE_MODAL_INSIGHT, De.AZ.CLICK_ACTION_INSIGHT, at.YC.CHANGE_SETTING, at.YC.LOAD_SETTINGS, at.YC.OPEN_SIDE_MODAL_SETTING, at.YC.CLOSE_SIDE_MODAL_SETTING, at.YC.FILTER_SETTING, ge.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, ge.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, ge.DC.OPEN_SIDE_DRAWER, ge.DC.CLOSE_SIDE_DRAWER, Qe.Xc, Qe.Aq, ie.QV[ie.Xn].clickLoginFromMobileApp2fa, ie.QV[ie.Xn].clickTryOther2FAMethodOrBackupCode, ie.QV[ie.Xn].clickTryRecovery, ie.QV[ie.xq].clickRegenerateBackupCodes, G.Vq.APPEAL_MITIGATION_SUBMIT, G.Vq.APPEAL_MITIGATION_SUCCESS, G.Vq.APPEAL_MITIGATION_FAILURE, G.Vq.CLICK_ABUSE_REPORT_ID, G.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK, se.N3.CLICK_GIVE_FEEDBACK, se.N3.CLICK_NAVIGATION_TAB, se.N3.CLICK_SEARCH_BY_ZONE_NAME, se.N3.CLICK_SEARCH_BY_VIEW_NAME, se.N3.CLICK_CREATE_AN_INTERNAL_ZONE, se.N3.CLICK_CREATE_A_VIEW, se.N3.CLICK_SAVE_ZONE, se.N3.CLICK_SAVE_VIEW, se.N3.CLICK_SEARCH_BY_RECORD_NAME, se.N3.CLICK_ZONE_NAME, se.N3.CLICK_ADD_A_RECORD, se.N3.CLICK_ADD_RECORD_SAVE, se.N3.CLICK_RECORD_EDIT, se.N3.CLICK_EDIT_RECORD_SAVE, se.N3.CLICK_IMPORT_RECORDS, se.N3.CLICK_MANAGE_LINKED_VIEWS, se.N3.CLICK_SAVE_MANAGE_LINKED_VIEWS, se.N3.CLICK_VIEW_RECORD),
				Ue = n.eg.exactStrict(n.eg.object({
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
					exclude_cdn_cgi: n.eg.any.optional,
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
				Ve = (ce, le) => {
					const [ve, _e] = Ge(le);
					let Oe, je;
					return (0, n.nM)(we.decode(ce)) && (Oe = new $.Uh(ce)), _e && _e.length > 0 && (je = new $.oV(ce, _e)), [ve, Oe, je]
				},
				Ge = ce => {
					const le = Ue.decode(ce);
					if ((0, n.nM)(le)) {
						const ve = le.left.map(({
							context: _e
						}) => _e.map(({
							key: Oe
						}) => Oe)).reduce((_e, Oe) => _e.concat(Oe), []).filter(_e => _e in ce);
						return [yt(ve, ce), ve]
					}
					return [ce, []]
				},
				yt = (ce, le) => Object.entries(le).reduce((ve, [_e, Oe]) => (ce.includes(_e) || (ve[_e] = Oe), ve), {}),
				ht = ce => (le, ve, _e) => {
					const [Oe, je, Ye] = Ve(ve, _e);
					if (je) throw je;
					return Ye && console.error(Ye), ce(le, ve, Oe)
				};
			var mt = t("../react/utils/zaraz.ts");
			const Rt = {
					identify: !0
				},
				He = ce => (le, ve, _e) => (Rt[ve] || mt.tg === null || mt.tg === void 0 || mt.tg.track(ve, _e), ce(le, ve, _e));
			var _t = t("../react/common/selectors/userSelectors.ts"),
				ct = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function rt(ce) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(ve, Oe).enumerable
					})), _e.forEach(function(Oe) {
						ft(ce, Oe, ve[Oe])
					})
				}
				return ce
			}

			function ft(ce, le, ve) {
				return le = Me(le), le in ce ? Object.defineProperty(ce, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[le] = ve, ce
			}

			function Me(ce) {
				var le = Q(ce, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Q(ce, le) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ce, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ce)
			}
			const pe = new Set(["cf_argo", "load_balancing_basic_plus"]),
				he = new Set(["pro", "business"]),
				Ie = ({
					price: ce,
					ratePlanId: le,
					ratePlanName: ve,
					frequency: _e,
					isNewSubscription: Oe
				}) => ({
					event: "purchase",
					new_subscription: Oe,
					ecommerce: {
						transaction_id: (0, ct.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: ce
					},
					items: [{
						item_id: le,
						item_name: ve || le,
						frequency: _e,
						price: ce
					}]
				}),
				Ne = ce => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: Oe,
						ratePlanName: je
					} = ce;
					return he.has(_e) ? rt({}, Ie({
						price: le,
						ratePlanId: Oe,
						ratePlanName: je,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				Xe = ce => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: Oe
					} = ce;
					return pe.has(_e) ? rt({}, Ie({
						price: le,
						ratePlanId: _e,
						ratePlanName: Oe,
						frequency: ve,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				it = ce => {
					const {
						price: le,
						frequency: ve,
						plan: _e,
						ratePlanId: Oe,
						ratePlanName: je,
						label: Ye
					} = ce;
					return he.has(_e) ? rt({}, Ie({
						price: le,
						frequency: ve,
						ratePlanId: Oe,
						ratePlanName: je,
						isNewSubscription: !1
					}), {
						label: Ye || _e
					}) : void 0
				},
				xt = ce => {
					const {
						price: le,
						frequency: ve,
						ratePlan: _e,
						ratePlanName: Oe,
						oldRatePlan: je
					} = ce;
					return pe.has(_e) ? rt({}, Ie({
						price: le,
						frequency: ve,
						ratePlanId: _e,
						ratePlanName: Oe,
						isNewSubscription: !1
					}), {
						label: `${je}->${_e}`
					}) : void 0
				},
				Et = "pageview",
				Dt = "create zone",
				Je = "create user",
				bt = "Plan Purchase Success",
				Pt = "Product Purchase Success",
				Ct = "Plan Update Success",
				Lt = "Product Update Success",
				St = {
					[Et]: !0,
					[Dt]: !0,
					[Je]: !0,
					[bt]: !0,
					[Pt]: !0,
					[Ct]: !0,
					[Lt]: !0
				},
				Bt = ce => {
					const le = /\|MCMID\|([0-9]+)\|/,
						ve = ce.match(le);
					return ve ? ve[1] : void 0
				},
				Ot = ce => {
					var le;
					const {
						deviceViewport: ve,
						page: _e,
						previousPage: Oe,
						pageName: je,
						utm_campaign: Ye,
						_ga: st,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": qe
					} = ce, {
						origin: et
					} = window.location, lt = (0, _t.PR)((0, u.bh)().getState());
					return {
						event: Oe !== void 0 && _e !== Oe ? "virtual_page_view" : "page_load",
						device_type: ve,
						hostname: et,
						language: navigator.language,
						locale: (0, s.r)((0, u.bh)().getState()),
						page_location: _e ? `${et}${_e}` : "[redacted]",
						page_path: _e ? `${_e}` : "[redacted]",
						page_referrer: Oe ? `${et}/${Oe}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: je || "[redacted]",
						page_url: _e ? `${et}${_e}` : "[redacted]",
						query: Ye ? `?utm_campaign=${Ye}` : "[redacted]",
						user_properties: {
							ga_client_id: (le = st) !== null && le !== void 0 ? le : void 0,
							ga_client_id_s: st ? `s${st}` : void 0,
							user_id: $e() ? lt == null ? void 0 : lt.id : void 0,
							ecid: qe ? Bt(qe) : void 0
						}
					}
				},
				Ut = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				wt = ce => {
					const {
						status: le
					} = ce;
					return le === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				jt = (ce, le) => {
					switch (ce) {
						case Et:
							return Ot(le);
						case Dt:
							return Ut();
						case Je:
							return wt(le);
						case bt:
							return Ne(le);
						case Pt:
							return Xe(le);
						case Ct:
							return it(le);
						case Lt:
							return xt(le);
						default:
							return
					}
				},
				Wt = ce => (le, ve, _e) => {
					if (St[ve]) {
						var Oe;
						const je = jt(ve, _e);
						window.dataLayer = window.dataLayer || [], je && ((Oe = window.dataLayer) === null || Oe === void 0 || Oe.push(je))
					}
					return ce(le, ve, _e)
				};
			var Tt = t("../react/utils/cookiePreferences.ts");

			function kt(ce) {
				for (var le = 1; le < arguments.length; le++) {
					var ve = arguments[le] != null ? Object(arguments[le]) : {},
						_e = Object.keys(ve);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(ve).filter(function(Oe) {
						return Object.getOwnPropertyDescriptor(ve, Oe).enumerable
					})), _e.forEach(function(Oe) {
						$t(ce, Oe, ve[Oe])
					})
				}
				return ce
			}

			function $t(ce, le, ve) {
				return le = zt(le), le in ce ? Object.defineProperty(ce, le, {
					value: ve,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ce[le] = ve, ce
			}

			function zt(ce) {
				var le = Mt(ce, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function Mt(ce, le) {
				if (typeof ce != "object" || ce === null) return ce;
				var ve = ce[Symbol.toPrimitive];
				if (ve !== void 0) {
					var _e = ve.call(ce, le || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ce)
			}
			const b = ce => {
					r().init(kt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: me() && !(0, i.gm)() && $e(),
						middlewares: [A, ht, D, He, Wt]
					}, ce))
				},
				k = () => {
					r().identify(kt({}, (0, e.getAttribution)(), {
						locale: (0, s.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, f.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				me = () => !0,
				Te = () => {
					(0, Tt.kT)("sparrow_id")
				},
				$e = () => (0, Tt.Xm)()
		},
		"../utils/initStyles.ts": function(z, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const i = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				s = c => {
					const l = [];
					for (let g in c.colors) {
						const n = c.colors[g];
						if (Array.isArray(n) && g !== "categorical")
							for (let o = 0; o < n.length; ++o) l.push(`--cf-${g}-${o}:${n[o]};`)
					}
					return l.join(`
`)
				},
				f = () => {
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
					let g = document.getElementById(i);
					g ? g.innerText = "" : (g = document.createElement("style"), g.id = i, u.appendChild(g)), g.appendChild(document.createTextNode(l)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), y.Z = f
		},
		"../utils/sentry/lastSentEventId.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let i = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (i = f), i),
					getEventId: () => i
				}
			})()
		},
		"../utils/zaraz.ts": function(z, y, t) {
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
				f = {
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
					window.zaraz, c = f
				},
				g = ["email", "first_name", "last_name"],
				n = a => {
					g.forEach(_ => {
						var d;
						(d = c) === null || d === void 0 || d.set(_, a[_])
					})
				},
				o = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(z, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				i = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(i),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(f),
				l = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				g = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				o = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				a = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				p = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				h = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				T = t("../../../common/component/component-filter-bar/src/constants.js"),
				v = t("../../../common/component/component-filter-bar/src/utils.js");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(x) {
					for (var I = 1; I < arguments.length; I++) {
						var L = arguments[I];
						for (var R in L) Object.prototype.hasOwnProperty.call(L, R) && (x[R] = L[R])
					}
					return x
				}, m.apply(this, arguments)
			}

			function O(x) {
				for (var I = 1; I < arguments.length; I++) {
					var L = arguments[I] != null ? Object(arguments[I]) : {},
						R = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(L).filter(function(X) {
						return Object.getOwnPropertyDescriptor(L, X).enumerable
					})), R.forEach(function(X) {
						E(x, X, L[X])
					})
				}
				return x
			}

			function E(x, I, L) {
				return I = w(I), I in x ? Object.defineProperty(x, I, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[I] = L, x
			}

			function w(x) {
				var I = D(x, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function D(x, I) {
				if (typeof x != "object" || x === null) return x;
				var L = x[Symbol.toPrimitive];
				if (L !== void 0) {
					var R = L.call(x, I || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(x)
			}
			const A = 70,
				P = (0, s.SU)(({
					showOverflow: x
				}) => O({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, x ? {} : {
					maxHeight: A,
					overflow: "hidden"
				})),
				B = (0, s.SU)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				C = (0, s.SU)(({
					theme: x
				}) => ({
					backgroundColor: x.colors.background,
					py: 1,
					px: 2,
					borderRadius: x.radii[2],
					border: `1px solid ${x.colors.gray[7]}`,
					fontSize: x.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: x.colors.gray[4]
					}
				}), "div"),
				S = (0, s.SU)(() => ({
					mr: 1
				}), "span"),
				U = (0, s.SU)(({
					theme: x
				}) => ({
					color: x.colors.gray[4],
					mr: 1
				}), "span"),
				$ = (0, s.SU)(() => ({
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
				G = (0, s.SU)(({
					buttonStyle: x
				}) => O({
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
				}, x), g.zx),
				ne = (0, s.SU)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				ee = (0, s.SU)(({
					theme: x
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: x.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: x.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				oe = (0, s.SU)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				W = x => x.current ? [...x.current.children].reduce((I, L) => (L.offsetTop >= A && I++, I), 0) : 0;
			let K = 0;
			class F extends e.Component {
				constructor() {
					super();
					E(this, "overflowWrapper", (0, e.createRef)()), E(this, "hasOverflowed", I => {
						const L = W(this.overflowWrapper);
						I.scrollHeight > A && L >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (I.scrollHeight < A || L === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), E(this, "addNewFilter", () => {
						const {
							filterDefinitions: I
						} = this.props, L = (0, v.TE)(I), R = Object.keys(L)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: R,
								operator: (0, v.uv)(R, L),
								value: (0, v.TT)(R, L)
							}
						})
					}), E(this, "handleOpenFilterEdit", I => {
						this.setState({
							openFilter: I,
							filterChanges: O({}, this.props.filters[I])
						})
					}), E(this, "handleRemoveFilterClick", (I, L) => {
						I.stopPropagation(), this.removeFilter(L)
					}), E(this, "removeFilter", I => {
						const {
							handleFiltersChange: L
						} = this.props, R = [...this.props.filters], X = R[I];
						R.splice(I, 1), L(R), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: X.key,
							operator: X.operator,
							value: X.value
						})
					}), E(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), E(this, "handleFilterSubmit", I => {
						const {
							filterDefinitions: L
						} = this.props;
						I.preventDefault();
						const {
							filterChanges: R
						} = this.state, X = typeof L[R.key].parse == "function" ? Array.isArray(R.value) ? R.value.map(L[R.key].parse) : L[R.key].parse(R.value) : R.value;
						if (L[R.key].validate && (Array.isArray(X) ? !X.every(L[R.key].validate) : !L[R.key].validate(X))) return this.setState({
							invalid: !0
						});
						const q = [...this.props.filters],
							ae = O({}, R, {
								value: X
							}),
							N = !q[this.state.openFilter];
						N ? q.push(ae) : q[this.state.openFilter] = O({}, ae), this.props.handleFiltersChange(q, ae), (N ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ae.key,
							operator: ae.operator,
							value: ae.value
						}), this.closeOpenFilterChanges()
					}), E(this, "handlePendingKeyChange", ({
						value: I
					}) => {
						const {
							filterDefinitions: L
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: I,
								operator: (0, v.uv)(I, L),
								value: (0, v.TT)(I, L)
							}
						})
					}), E(this, "handlePendingOperatorChange", ({
						value: I
					}) => {
						let L = O({}, this.state.filterChanges, {
							operator: I
						});
						if ((0, v.dr)(I)) {
							var R, X;
							((R = this.state.filterChanges) === null || R === void 0 ? void 0 : R.value) && !Array.isArray((X = this.state.filterChanges) === null || X === void 0 ? void 0 : X.value) && (L.value = [this.state.filterChanges.value])
						} else {
							var q, ae, N;
							((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && Array.isArray((ae = this.state.filterChanges) === null || ae === void 0 ? void 0 : ae.value) && ((N = this.state.filterChanges) === null || N === void 0 ? void 0 : N.value.length) > 0 && (L.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: L
						})
					}), E(this, "handlePendingValueChange", I => {
						this.setState({
							invalid: !1,
							filterChanges: O({}, this.state.filterChanges, {
								value: I
							})
						})
					}), E(this, "handleShowOverflow", () => {
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
						id: ++K
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(I) {
					I.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(I) {
					const {
						formatLabel: L,
						filterDefinitions: R
					} = this.props, {
						operator: X
					} = this.state.filterChanges, q = R[this.state.filterChanges.key], ae = this.state.filterChanges.value, N = M => Array.isArray(M) ? M.map(Y => Y.value) : (M == null ? void 0 : M.value) || null;
					if (q.renderValueComponent) return q.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (q.type) {
						case T.k.custom: {
							var V;
							return r().createElement(q.CustomComponent, m({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (V = q == null ? void 0 : q.customProps) !== null && V !== void 0 ? V : {}))
						}
						case T.k.select:
							return (0, v.dr)(X) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !q.options,
								value: typeof ae.split == "function" ? ae == null ? void 0 : ae.split(",") : Array.isArray(ae) ? ae : [],
								options: q.options ? q.options.map(M => ({
									value: M.value || M,
									label: M.label || L(this.state.filterChanges.key, M, I)
								})) : ae ? (Array.isArray(ae) ? ae : ae.split(",")).map(M => ({
									label: M,
									value: M
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(f.Trans, {
									id: q.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: q.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: M => {
									this.handlePendingValueChange(N(M))
								},
								isValidNewOption: M => {
									const Y = q.validate;
									return !Y && M || M && Y([M])
								},
								getNewOptionData: (M, Y) => ({
									value: M,
									label: Y
								})
							}) : r().createElement(a.hQ, {
								hideLabel: !0,
								value: ae,
								options: q.options.map(M => ({
									value: M,
									label: L(this.state.filterChanges.key, M, I)
								})),
								onChange: ({
									value: M
								}) => this.handlePendingValueChange(M)
							});
						case T.k.string:
						default:
							return (0, v.dr)(X) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ae.split == "function" ? ae == null ? void 0 : ae.split(",") : Array.isArray(ae) ? ae : [],
								options: ae ? (Array.isArray(ae) ? ae : ae.split(",")).map(M => ({
									label: M,
									value: M
								})) : [],
								noOptionsMessage: () => null,
								placeholder: I.t("analytics.report.filters.labels.placeholder", {
									example: R[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: M => {
									this.handlePendingValueChange(N(M))
								},
								isValidNewOption: M => {
									const Y = q.validate;
									return !Y && M || M && Y([M])
								},
								getNewOptionData: (M, Y) => ({
									value: M,
									label: Y
								}),
								formatCreateLabel: M => I.t("filter_editor.value_create_label", {
									value: M
								})
							}) : r().createElement(f.I18n, null, M => r().createElement(l.I, {
								value: this.state.filterChanges.value,
								onChange: Y => this.handlePendingValueChange(Y.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: M.t("analytics.report.filters.labels.placeholder", {
									example: R[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: I,
						filterDefinitions: L,
						modalStyles: R,
						filterIconType: X,
						buttonStyle: q,
						secondaryActionComponent: ae
					} = this.props, N = W(this.overflowWrapper), V = `filterPanel${this.state.id}`, M = this.state.openFilter !== null;
					return r().createElement(f.I18n, null, Y => r().createElement(_.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(oe, null, r().createElement(_.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(G, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": M,
						"aria-controls": V,
						inverted: !0,
						buttonStyle: q
					}, r().createElement(n.J, {
						type: X || "add",
						mr: 1,
						label: Y.t("common.add", {
							_: "Add"
						})
					}), r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!ae && r().createElement(_.ZC, null, ae)), this.props.filters.length > 0 && r().createElement(ne, null, r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(P, {
						innerRef: this.overflowWrapper,
						overflowLimit: A,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ie, de) => {
						const {
							key: Ee,
							operator: ge,
							value: te
						} = ie, be = L[Ee].ignoreLabelTranslation ? L[Ee].label : Y.t(L[Ee].label), De = Y.t(`analytics.report.filters.operators.${ge}`), Le = Array.isArray(te) ? te.map(ke => I(Ee, ke, Y)).join(", ") : I(Ee, te, Y), xe = `${be} ${De} ${Le}`;
						return r().createElement(B, {
							key: `${Ee}-${ge}-${te}`,
							title: xe
						}, r().createElement(C, {
							onClick: () => this.handleOpenFilterEdit(de)
						}, r().createElement(_.ZC, {
							display: "flex"
						}, r().createElement(S, null, be), r().createElement(U, null, De), r().createElement($, null, Le), (0, v.oN)(ie, L) ? r().createElement(o.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(ee, {
							onClick: ke => this.handleRemoveFilterClick(ke, de),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), M && r().createElement(h.Z, {
						id: V,
						filterDefinitions: L,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, v.oN)(this.state.filterChanges, L),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: I,
						modalStyles: R
					}), this.state.hasOverflowed && r().createElement(p.Z, {
						count: N,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			E(F, "propTypes", {
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
			}), y.Z = F
		},
		"../../../common/component/component-filter-bar/src/index.js": function(z, y, t) {
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
		"../../../common/intl/intl-core/src/errors.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return s
				},
				YB: function() {
					return u
				}
			});

			function e(c, l, g) {
				return l = r(l), l in c ? Object.defineProperty(c, l, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = g, c
			}

			function r(c) {
				var l = i(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function i(c, l) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var n = g.call(c, l || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(c)
			}
			class u extends Error {
				constructor(l, g) {
					super(g);
					e(this, "translationKey", void 0), this.translationKey = l, this.name = "TranslatorError"
				}
			}
			class s extends u {
				constructor(l, g) {
					super(l, `Translation key not found: ${l}, locale: ${g}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/util/types/src/api/domain.ts": function(z, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return D
				},
				Ib: function() {
					return E
				},
				Ks: function() {
					return A
				},
				MS: function() {
					return w
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
					return v
				},
				dN: function() {
					return P
				},
				eF: function() {
					return O
				},
				ex: function() {
					return B
				},
				qp: function() {
					return n
				},
				wR: function() {
					return g
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
				f = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				c = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				l = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let g = function(C) {
				return C.ONBOARDING_INITIATED = "Onboarding Initiated", C.ONBOARDED = "Onboarded", C.PENDING_REGISTRY_LOCK = "Pending Registry Lock", C.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", C.REGISTRY_UNLOCKED = "Registry Unlocked", C.LOCKED = "Locked", C.FAILED_TO_LOCK = "Failed To Lock", C.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", C.UNLOCKED = "Unlocked", C.OFFBOARDED = "Offboarded", C
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
						status: e.eg.enum(g).optional
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
			let p = function(C) {
				return C.PENDING = "pending", C.VERIFIED = "verified", C.REJECTED = "rejected", C.PENDING_DELETE = "pending_delete", C.DELETED = "deleted", C
			}({});
			const h = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(p),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				T = e.eg.object({
					designated_approvers: e.eg.array(h)
				});
			let v = function(C) {
				return C.PENDING = "pending", C.PENDING_UPDATE = "pending_update", C.ENABLED = "enabled", C.DISABLED = "disabled", C
			}({});
			const m = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(v)
				}),
				O = e.eg.intersection([m, T]),
				E = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let w = function(C) {
				return C.UNLOCK_APPROVAL = "UnlockApprovalRequest", C.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", C.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", C.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", C
			}({});
			const D = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				A = e.eg.object({
					message: e.eg.string
				}),
				P = e.eg.object({
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
				B = e.eg.object({
					result: f
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function(z, y, t) {
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
					return f
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
				f = function(c) {
					return c.DEFAULT = "", c.XML = "text/xml", c.JSON = "application/json", c.TEXT = "text/plain", c.HTML = "text/html", c
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(z, y, t) {
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
		"../react/common/out.css": function(z, y, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[z.id, e, ""]
			]);
			var r, i, u = {
				hmr: !0
			};
			u.transform = r, u.insertInto = void 0;
			var s = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
			e.locals && (z.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(z, y, t) {
			y = z.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), y.push([z.id, `/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
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
    --color-indigo-500: oklch(58.5% 0.233 277.117);
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
  .-inset-0 {
    inset: calc(var(--spacing) * -0);
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
  .top-2 {
    top: calc(var(--spacing) * 2);
  }
  .top-4 {
    top: calc(var(--spacing) * 4);
  }
  .top-8 {
    top: calc(var(--spacing) * 8);
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
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1 {
    left: calc(var(--spacing) * 1);
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
  .m-0 {
    margin: calc(var(--spacing) * 0);
  }
  .m-0\\! {
    margin: calc(var(--spacing) * 0) !important;
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
  .\\!mt-4 {
    margin-top: calc(var(--spacing) * 4) !important;
  }
  .\\!mt-5 {
    margin-top: calc(var(--spacing) * 5) !important;
  }
  .\\!mt-6 {
    margin-top: calc(var(--spacing) * 6) !important;
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
  .-mr-2 {
    margin-right: calc(var(--spacing) * -2);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
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
  .ml-0 {
    margin-left: calc(var(--spacing) * 0);
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
  .size-6 {
    width: calc(var(--spacing) * 6);
    height: calc(var(--spacing) * 6);
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
  .h-7 {
    height: calc(var(--spacing) * 7);
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
  .h-20 {
    height: calc(var(--spacing) * 20);
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
  .max-h-8 {
    max-height: calc(var(--spacing) * 8);
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
  .max-w-8 {
    max-width: calc(var(--spacing) * 8);
  }
  .max-w-8\\/10 {
    max-width: calc(8/10 * 100%);
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
  .max-w-\\[200ch\\] {
    max-width: 200ch;
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
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
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
  .min-w-\\[250px\\] {
    min-width: 250px;
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
  .-translate-x-1 {
    --tw-translate-x: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1/2 * 100%) * -1);
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
  .translate-x-full {
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-2 {
    --tw-translate-y: calc(var(--spacing) * -2);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0 {
    --tw-translate-y: calc(var(--spacing) * 0);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-0\\.5 {
    --tw-translate-y: calc(var(--spacing) * 0.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * 1);
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
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-col-resize {
    cursor: col-resize;
  }
  .cursor-default {
    cursor: default;
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
  .grid-cols-\\[200px_1fr\\] {
    grid-template-columns: 200px 1fr;
  }
  .grid-cols-\\[320px_1fr\\] {
    grid-template-columns: 320px 1fr;
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
  .gap-10 {
    gap: calc(var(--spacing) * 10);
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-\\[var\\(--gap\\)\\] {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(var(--gap) * var(--tw-space-y-reverse));
      margin-block-end: calc(var(--gap) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-x-2 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 2) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-x-reverse)));
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
  .self-start {
    align-self: flex-start;
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-auto {
    overflow: auto;
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
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
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
  .border-blue-300 {
    border-color: var(--color-blue-300);
  }
  .border-blue-400 {
    border-color: var(--color-blue-400);
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
  .border-gray-100 {
    border-color: var(--color-gray-100);
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
  .border-neutral-100 {
    border-color: var(--color-neutral-100);
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
  .border-b-transparent {
    border-bottom-color: transparent;
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
  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-transparent {
    --tw-gradient-from: transparent;
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
  .px-7 {
    padding-inline: calc(var(--spacing) * 7);
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
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .pt-3 {
    padding-top: calc(var(--spacing) * 3);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-8 {
    padding-top: calc(var(--spacing) * 8);
  }
  .pt-10 {
    padding-top: calc(var(--spacing) * 10);
  }
  .pt-\\[1px\\] {
    padding-top: 1px;
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
  .pb-0 {
    padding-bottom: calc(var(--spacing) * 0);
  }
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pb-10 {
    padding-bottom: calc(var(--spacing) * 10);
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
  .\\!text-inherit {
    color: inherit !important;
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
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-green-600 {
    color: var(--color-green-600);
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
  .text-neutral-400 {
    color: var(--color-neutral-400);
  }
  .text-neutral-500 {
    color: var(--color-neutral-500);
  }
  .text-neutral-600 {
    color: var(--color-neutral-600);
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
  .ring-neutral-950 {
    --tw-ring-color: var(--color-neutral-950);
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
  .outline-color {
    outline-color: var(--color-color);
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
  .backdrop-filter {
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
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
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
  .last\\:border-b-0 {
    &:last-child {
      border-bottom-style: var(--tw-border-style);
      border-bottom-width: 0px;
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
  .focus-within\\:outline-blue-700 {
    &:focus-within {
      outline-color: var(--color-blue-700);
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
  .sm\\:inline {
    @media (width >= 40rem) {
      display: inline;
    }
  }
  .sm\\:grid-cols-4 {
    @media (width >= 40rem) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
  .sm\\:py-1\\.5 {
    @media (width >= 40rem) {
      padding-block: calc(var(--spacing) * 1.5);
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
  .lg\\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
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
    &:where(.dark, .dark *) {
      :where(& > :not(:last-child)) {
        border-color: var(--color-border);
      }
    }
  }
  .dark\\:\\!border-neutral-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-blue-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-blue-500);
    }
  }
  .dark\\:border-gray-600 {
    &:where(.dark, .dark *) {
      border-color: var(--color-gray-600);
    }
  }
  .dark\\:border-green-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-green-500);
    }
  }
  .dark\\:border-neutral-100 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-neutral-400 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-400);
    }
  }
  .dark\\:border-neutral-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-500);
    }
  }
  .dark\\:border-neutral-700 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-700);
    }
  }
  .dark\\:border-neutral-800 {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-800);
    }
  }
  .dark\\:border-neutral-800\\! {
    &:where(.dark, .dark *) {
      border-color: var(--color-neutral-800) !important;
    }
  }
  .dark\\:border-neutral-800\\/60 {
    &:where(.dark, .dark *) {
      border-color: color-mix(in srgb, oklch(0.269 0 0) 60%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-neutral-800) 60%, transparent);
      }
    }
  }
  .dark\\:border-red-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-red-500);
    }
  }
  .dark\\:border-red-700 {
    &:where(.dark, .dark *) {
      border-color: var(--color-red-700);
    }
  }
  .dark\\:border-yellow-500 {
    &:where(.dark, .dark *) {
      border-color: var(--color-yellow-500);
    }
  }
  .dark\\:border-r-neutral-100 {
    &:where(.dark, .dark *) {
      border-right-color: var(--color-neutral-100);
    }
  }
  .dark\\:border-b-neutral-100 {
    &:where(.dark, .dark *) {
      border-bottom-color: var(--color-neutral-100);
    }
  }
  .dark\\:\\!bg-neutral-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:\\!bg-neutral-950 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-950) !important;
    }
  }
  .dark\\:bg-\\[\\#916b20\\] {
    &:where(.dark, .dark *) {
      background-color: #916b20;
    }
  }
  .dark\\:bg-black {
    &:where(.dark, .dark *) {
      background-color: var(--color-black);
    }
  }
  .dark\\:bg-blue-700 {
    &:where(.dark, .dark *) {
      background-color: var(--color-blue-700);
    }
  }
  .dark\\:bg-blue-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-blue-800);
    }
  }
  .dark\\:bg-blue-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-blue-900);
    }
  }
  .dark\\:bg-gray-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-gray-800);
    }
  }
  .dark\\:bg-green-700 {
    &:where(.dark, .dark *) {
      background-color: var(--color-green-700);
    }
  }
  .dark\\:bg-green-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-green-800);
    }
  }
  .dark\\:bg-green-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-green-900);
    }
  }
  .dark\\:bg-neutral-100 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-100);
    }
  }
  .dark\\:bg-neutral-500 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-500);
    }
  }
  .dark\\:bg-neutral-700 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-700);
    }
  }
  .dark\\:bg-neutral-750 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-750);
    }
  }
  .dark\\:bg-neutral-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-800);
    }
  }
  .dark\\:bg-neutral-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-900);
    }
  }
  .dark\\:bg-neutral-900\\! {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-900) !important;
    }
  }
  .dark\\:bg-neutral-950 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-950);
    }
  }
  .dark\\:bg-red-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-red-800);
    }
  }
  .dark\\:bg-red-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-red-900);
    }
  }
  .dark\\:bg-red-900\\/10\\! {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, oklch(39.6% 0.141 25.723) 10%, transparent) !important;
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-red-900) 10%, transparent) !important;
      }
    }
  }
  .dark\\:bg-surface {
    &:where(.dark, .dark *) {
      background-color: var(--color-surface);
    }
  }
  .dark\\:bg-surface-secondary {
    &:where(.dark, .dark *) {
      background-color: var(--color-surface-secondary);
    }
  }
  .dark\\:bg-white\\/30 {
    &:where(.dark, .dark *) {
      background-color: color-mix(in srgb, #fff 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-white) 30%, transparent);
      }
    }
  }
  .dark\\:bg-yellow-600 {
    &:where(.dark, .dark *) {
      background-color: var(--color-yellow-600);
    }
  }
  .dark\\:bg-yellow-900 {
    &:where(.dark, .dark *) {
      background-color: var(--color-yellow-900);
    }
  }
  .dark\\:to-neutral-900 {
    &:where(.dark, .dark *) {
      --tw-gradient-to: var(--color-neutral-900);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:to-neutral-950 {
    &:where(.dark, .dark *) {
      --tw-gradient-to: var(--color-neutral-950);
      --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
    }
  }
  .dark\\:\\!text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white) !important;
    }
  }
  .dark\\:text-\\[var\\(--dark\\)\\] {
    &:where(.dark, .dark *) {
      color: var(--dark);
    }
  }
  .dark\\:text-blue-200 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-200);
    }
  }
  .dark\\:text-blue-300 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-300);
    }
  }
  .dark\\:text-neutral-50 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-50);
    }
  }
  .dark\\:text-neutral-50\\! {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-50) !important;
    }
  }
  .dark\\:text-neutral-400 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-400);
    }
  }
  .dark\\:text-neutral-600 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-600);
    }
  }
  .dark\\:text-neutral-900 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-900);
    }
  }
  .dark\\:text-orange-400 {
    &:where(.dark, .dark *) {
      color: var(--color-orange-400);
    }
  }
  .dark\\:text-red-200 {
    &:where(.dark, .dark *) {
      color: var(--color-red-200);
    }
  }
  .dark\\:text-red-400 {
    &:where(.dark, .dark *) {
      color: var(--color-red-400);
    }
  }
  .dark\\:text-white {
    &:where(.dark, .dark *) {
      color: var(--color-white);
    }
  }
  .dark\\:shadow-\\[0_0_0_1px_rgba\\(255\\,255\\,255\\,0\\.5\\)_inset\\] {
    &:where(.dark, .dark *) {
      --tw-shadow: 0 0 0 1px var(--tw-shadow-color, rgba(255,255,255,0.5)) inset;
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }
  .dark\\:ring-neutral-800 {
    &:where(.dark, .dark *) {
      --tw-ring-color: var(--color-neutral-800);
    }
  }
  .dark\\:hover\\:border-neutral-700\\/80 {
    &:where(.dark, .dark *) {
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
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-blue-600);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-450 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-450);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-700 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-700);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-800 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .dark\\:hover\\:bg-neutral-900 {
    &:where(.dark, .dark *) {
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
        &:where(.dark, .dark *) {
          background-color: var(--color-neutral-800);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-900 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark, .dark *) {
          background-color: var(--color-neutral-900);
        }
      }
    }
  }
  .hover\\:dark\\:bg-neutral-950 {
    &:hover {
      @media (hover: hover) {
        &:where(.dark, .dark *) {
          background-color: var(--color-neutral-950);
        }
      }
    }
  }
  .dark\\:hover\\:text-white {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          color: var(--color-white);
        }
      }
    }
  }
  .dark\\:focus\\:ring-blue-500 {
    &:where(.dark, .dark *) {
      &:focus {
        --tw-ring-color: var(--color-blue-500);
      }
    }
  }
  .dark\\:focus\\:ring-neutral-500 {
    &:where(.dark, .dark *) {
      &:focus {
        --tw-ring-color: var(--color-neutral-500);
      }
    }
  }
  .dark\\:disabled\\:bg-neutral-800 {
    &:where(.dark, .dark *) {
      &:disabled {
        background-color: var(--color-neutral-800);
      }
    }
  }
  .dark\\:disabled\\:\\!text-neutral-500 {
    &:where(.dark, .dark *) {
      &:disabled {
        color: var(--color-neutral-500) !important;
      }
    }
  }
  .dark\\:disabled\\:hover\\:bg-neutral-800 {
    &:where(.dark, .dark *) {
      &:disabled {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-neutral-800);
          }
        }
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
  .dark {
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
}
.z-modal {
  z-index: 9999;
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
.dark .skeleton-line {
  background-color: rgba(255, 255, 255, 0.06);
}
.dark .skeleton-line::after {
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
html.dark {
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(z, y, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(i) {
				if (!t.o(e, i)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + i + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var u = e[i],
					s = u[0];
				return t.e(u[1]).then(function() {
					return t.t(s, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", z.exports = r
		}
	}
]);

//# debugId=4b68fd5b-daa1-5250-a652-5102171a5f24