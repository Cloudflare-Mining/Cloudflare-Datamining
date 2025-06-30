! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1b21a846-37f5-5f35-b0cf-ffef02dd5e57")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				J8: function() {
					return s
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
					return O
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(a),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				_;
			const c = () => Object.keys(i.Z).reduce((E, m) => (m.indexOf("cf_beta.") === 0 && i.Z.get(m) === "true" && E.push(m.split(".").slice(1).join(".")), E), []),
				l = () => {
					var E, m, C;
					return ((E = window) === null || E === void 0 || (m = E.bootstrap) === null || m === void 0 || (C = m.data) === null || C === void 0 ? void 0 : C.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((_ = window) === null || _ === void 0 ? void 0 : _.location) && i.Z) {
				const E = u().parse(window.location.search);
				E.beta_on && i.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && i.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const g = {},
				n = E => {
					var m, C, v;
					return Object.prototype.hasOwnProperty.call(g, E) ? g[E] : ((m = window) === null || m === void 0 || (C = m.bootstrap) === null || C === void 0 || (v = C.data) === null || v === void 0 ? void 0 : v.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(T => T === E) ? (g[E] = !0, !0) : (g[E] = !1, !1)
				},
				o = E => i.Z ? i.Z.get(`cf_beta.${E}`) === !0 : !1,
				s = E => o(E) || n(E),
				f = () => !0,
				d = () => {
					var E, m, C;
					return ((E = window) === null || E === void 0 || (m = E.bootstrap) === null || m === void 0 || (C = m.data) === null || C === void 0 ? void 0 : C.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				p = E => {
					const m = (0, e.uF)(E),
						C = (m == null ? void 0 : m.roles) || [];
					return (0, r.qR)(location.pathname) && C.length === 1 && C.some(v => v === "Administrator Read Only")
				},
				w = () => {
					var E, m, C;
					return ((E = window) === null || E === void 0 || (m = E.location) === null || m === void 0 || (C = m.origin) === null || C === void 0 ? void 0 : C.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				O = () => w() === "fed"
		},
		"../functions/utils/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				r = "cf_fv_preview",
				a = "cf_pv",
				u = "current",
				i = "hash",
				_ = "deploymentPreview",
				c = "fragmentPreview",
				l = o => o === u ? g() : n(),
				g = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (o = 72) => {
					const s = 36e5;
					return new Date(Date.now() + o * s)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				E9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(E) {
				for (var m = 1; m < arguments.length; m++) {
					var C = arguments[m] != null ? Object(arguments[m]) : {},
						v = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(C).filter(function(T) {
						return Object.getOwnPropertyDescriptor(C, T).enumerable
					})), v.forEach(function(T) {
						a(E, T, C[T])
					})
				}
				return E
			}

			function a(E, m, C) {
				return m = u(m), m in E ? Object.defineProperty(E, m, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[m] = C, E
			}

			function u(E) {
				var m = i(E, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function i(E, m) {
				if (typeof E != "object" || E === null) return E;
				var C = E[Symbol.toPrimitive];
				if (C !== void 0) {
					var v = C.call(E, m || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(E)
			}
			const _ = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				c = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				l = e.z.string(),
				g = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(l, g),
				o = e.z.enum(["live", "previews", "canary"]),
				s = (E, m) => {
					const C = E.data.cookies[m],
						v = {
							[PREVIEW_VERSIONING_COOKIE]: _,
							[DEPLOYMENT_VERSION_COOKIE]: c
						};
					try {
						return v[m].parse(C)
					} catch {
						return null
					}
				},
				f = E => {
					try {
						return decodeURIComponent(E).split(",").reduce((m, C) => {
							const v = C.split(":"),
								T = l.parse(v[0]),
								M = g.parse(v[1]);
							return r({}, m, {
								[T]: M
							})
						}, {})
					} catch {
						return {}
					}
				},
				d = E => {
					const m = E.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						C = f(m);
					try {
						return n.parse(C)
					} catch {
						return null
					}
				},
				p = E => {
					const m = _.parse(E),
						[C, ...v] = m.split("-"),
						T = v.join("-");
					return {
						projectType: C,
						deploymentId: T
					}
				},
				w = (E, m) => {
					if (!m) return "";
					try {
						var C;
						const {
							projectType: v,
							deploymentId: T
						} = p(m), M = {
							live: E.env.PAGES_WORKERS_LIVE_HOST,
							previews: E.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: I,
							pathname: P,
							search: L
						} = new URL(E.request.url), b = I == null || (C = I.split(".")) === null || C === void 0 ? void 0 : C[0];
						if (T && T !== b && o.safeParse(v).success) {
							const D = M[v];
							return `https://${T}.${D}${P}${L}`
						}
					} catch (v) {
						console.log(v)
					}
					return ""
				},
				O = (E, m) => {
					if (!m) return "";
					try {
						var C;
						const v = E.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: T,
								pathname: M,
								search: I
							} = new URL(E.request.url),
							P = T == null || (C = T.split(".")) === null || C === void 0 ? void 0 : C[0],
							{
								deploymentSHA: L
							} = parsePagesDevUrl(E.env.CF_PAGES_URL),
							b = E.request.headers.get("sec-fetch-dest") === "document";
						if (m && m !== P && m !== L && !b) return `https://${m}.${v}${M}${I}`
					} catch (v) {
						console.log(v)
					}
					return ""
				}
		},
		"../init.ts": function(W, y, t) {
			"use strict";
			t.r(y);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				i = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function _(B) {
				for (var z = 1; z < arguments.length; z++) {
					var J = arguments[z] != null ? Object(arguments[z]) : {},
						se = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(J).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(J, Ee).enumerable
					})), se.forEach(function(Ee) {
						c(B, Ee, J[Ee])
					})
				}
				return B
			}

			function c(B, z, J) {
				return z = l(z), z in B ? Object.defineProperty(B, z, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[z] = J, B
			}

			function l(B) {
				var z = g(B, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function g(B, z) {
				if (typeof B != "object" || B === null) return B;
				var J = B[Symbol.toPrimitive];
				if (J !== void 0) {
					var se = J.call(B, z || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(B)
			}
			const n = B => {
				const z = B && B.headers || {},
					J = new Headers(z);
				return J.append("X-Cross-Site-Security", "dash"), _({}, B, {
					headers: J
				})
			};
			(0, i.register)({
				request: (B, z) => {
					try {
						return new URL(B), B === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", z] : [B, z]
					} catch {
						var J, se;
						return typeof B == "object" && ((J = B) === null || J === void 0 || (se = J.url) === null || se === void 0 ? void 0 : se.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [B, z] : [B, n(z)]
					}
				}
			});
			var o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				s = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				f = t("../react/app/providers/storeContainer.js");
			let d = "";
			const p = 61;

			function w(B) {
				const z = B.substr(1);
				if (z && d !== z) {
					const J = document.getElementById(z);
					if (J) {
						const se = J.getBoundingClientRect().top;
						if (se > 0) {
							const Ee = se - p;
							document.documentElement.scrollTop = Ee
						}
					}
				}
				d = z
			}

			function O(B) {
				B.listen(z => w(z.hash))
			}
			var E = t("../../../../node_modules/cookie/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				C = t("../functions/utils/constants.ts");
			const v = B => {
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
				T = (B, z = !1) => {
					var J;
					const se = v(B),
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
    <h1 id="error-title">${se.title}</h1>
    <p id="error-description">${se.description}</p>
  </div>
  `,
						Pe = z ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(J=window.build)===null||J===void 0?void 0:J.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Ee + Pe
				},
				M = B => {
					var z;
					const J = document.getElementById(B);
					!J || (z = J.parentNode) === null || z === void 0 || z.removeChild(J)
				};

			function I() {
				const B = document.getElementById("loading-state");
				B == null || B.classList.add("hide"), B == null || B.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(M)
				})
			}

			function P(B) {
				var z;
				const J = document.getElementById("loading-state"),
					se = !!((z = E.parse(document.cookie)) === null || z === void 0 ? void 0 : z[C.b1]);
				!J || (J.innerHTML = T(B == null ? void 0 : B.code, se))
			}
			var L = t("../utils/initStyles.ts"),
				b = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				D = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				S = t("../react/common/selectors/languagePreferenceSelector.ts"),
				G = t("../flags.ts"),
				te = t("../utils/getDashVersion.ts");
			const le = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ce = !0,
				Q = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				F = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var K = t("../utils/sentry/lastSentEventId.ts"),
				j = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				U = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const A = B => {
				const z = async J => {
					var se, Ee;
					const Pe = {
						envelope: J.body,
						url: B.url,
						isPreviewDeploy: (se = window) === null || se === void 0 || (Ee = se.build) === null || Ee === void 0 ? void 0 : Ee.isPreviewDeploy,
						release: (0, te.t)()
					};
					try {
						const De = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Pe)
						});
						return {
							statusCode: De.status,
							headers: {
								"x-sentry-rate-limits": De.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": De.headers.get("Retry-After")
							}
						}
					} catch (De) {
						return console.log(De), (0, U.$2)(De)
					}
				};
				return j.q(B, z)
			};
			var N = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				$ = t("../../../../node_modules/history/esm/history.js"),
				ee = (0, $.lX)(),
				ie = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				x = t("../react/utils/url.ts");
			const V = (0, ie.Rf)();
			let k;

			function Z(B) {
				return ae(B, "react-router-v5")
			}

			function ae(B, z) {
				return (J, se = !0, Ee = !0) => {
					se && V && V.location && (k = J({
						name: (0, x.Fl)(V.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": z
						}
					})), Ee && B.listen && B.listen((Pe, De) => {
						if (De && (De === "PUSH" || De === "POP")) {
							k && k.finish();
							const $e = {
								"routing.instrumentation": z
							};
							k = J({
								name: (0, x.Fl)(Pe.pathname),
								op: "navigation",
								tags: $e
							})
						}
					})
				}
			}
			var pe = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ue = t.n(pe),
				ve = t("../../../common/intl/intl-core/src/errors.ts"),
				ne = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Oe = t("../react/common/middleware/sparrow/errors.ts");

			function Se(B, z, J) {
				return z = Me(z), z in B ? Object.defineProperty(B, z, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[z] = J, B
			}

			function Me(B) {
				var z = je(B, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function je(B, z) {
				if (typeof B != "object" || B === null) return B;
				var J = B[Symbol.toPrimitive];
				if (J !== void 0) {
					var se = J.call(B, z || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(B)
			}
			class xe {
				constructor() {
					Se(this, "name", xe.id)
				}
				setupOnce() {
					t.g.console && (0, ne.hl)(t.g.console, "error", z => (...J) => {
						const se = J.find(Ee => Ee instanceof Error);
						if (le && se) {
							let Ee, Pe = !0;
							if (se instanceof Oe.ez) {
								const De = se instanceof Oe.oV ? se.invalidProperties : void 0;
								Ee = {
									tags: {
										"sparrow.eventName": se.eventName
									},
									extra: {
										sparrow: {
											eventName: se.eventName,
											invalidProperties: De
										}
									},
									fingerprint: [se.name ? se.name : "SparrowValidationError"]
								}, Pe = !1
							} else if (se instanceof pe.SparrowIdCookieError) Ee = {
								extra: {
									sparrowIdCookie: se.cookie
								},
								fingerprint: [se.name ? se.name : "SparrowIdCookieError"]
							};
							else if (se.name === "ChunkLoadError") {
								Ee = {
									fingerprint: [se.name]
								};
								try {
									Ee.tags = {
										chunkId: se.message.split(" ")[2],
										chunkUrl: se.request
									}
								} catch {}
							} else se instanceof ve.YB && (Ee = {
								fingerprint: ["TranslatorError", se.translationKey]
							});
							Pe && o.Tb(se, Ee)
						}
						typeof z == "function" && z.apply(t.g.console, J)
					})
				}
			}
			Se(xe, "id", "ConsoleErrorIntegration");
			var Ge = null,
				Je = t("../react/common/utils/getEnvironment.ts");
			const Fe = () => {
					if (le && ce) {
						var B, z, J, se, Ee, Pe, De, $e, lt, Ye;
						const Gt = (0, Je.Z)();
						let Ot = "production";
						((B = window) === null || B === void 0 || (z = B.build) === null || z === void 0 ? void 0 : z.isPreviewDeploy) && (Ot += "-preview"), Gt === "canary" && (Ot = "canary"), D.S({
							dsn: le,
							release: (0, te.t)(),
							environment: Ot,
							ignoreErrors: F,
							allowUrls: Q,
							autoSessionTracking: !1,
							integrations: mt => [...mt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new xe, new N.jK.BrowserTracing({
								routingInstrumentation: Z(ee)
							})],
							tracesSampleRate: 0,
							transport: A,
							beforeSend: mt => (K.e.setEventId(mt.event_id), mt)
						});
						const St = (0, f.bh)().getState();
						o.rJ({
							LOCAL_STORAGE_FLAGS: (0, G.Qw)(),
							USER_BETA_FLAGS: (0, G.ki)(),
							meta: {
								connection: {
									type: (J = window) === null || J === void 0 || (se = J.navigator) === null || se === void 0 || (Ee = se.connection) === null || Ee === void 0 ? void 0 : Ee.effectiveType,
									bandwidth: (Pe = window) === null || Pe === void 0 || (De = Pe.navigator) === null || De === void 0 || ($e = De.connection) === null || $e === void 0 ? void 0 : $e.downlink
								},
								languagePreference: (0, S.r)(St),
								isPreviewDeploy: (lt = window) === null || lt === void 0 || (Ye = lt.build) === null || Ye === void 0 ? void 0 : Ye.isPreviewDeploy
							},
							utilGates: (0, b.T2)(St)
						}), window.addEventListener("unhandledrejection", function(mt) {})
					}
				},
				Ve = B => {
					B ? o.av({
						id: B
					}) : o.av(null)
				};
			var Y = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				ke = () => {
					let B;
					try {
						B = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), B = window.location.search
					}
					if (!B.includes("remote[")) return;
					const z = new URLSearchParams(B),
						J = {};
					for (let [se, Ee] of z) se.includes("remote") && (J[se.replace(/remote\[|\]/g, "")] = Ee);
					Y.Z.set("mfe-remotes", JSON.stringify(J))
				},
				We = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				pt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const ut = "ANON_USER_ID";

			function Ae() {
				var B, z, J, se;
				let Ee = (B = t.g) === null || B === void 0 || (z = B.bootstrap) === null || z === void 0 || (J = z.data) === null || J === void 0 || (se = J.user) === null || se === void 0 ? void 0 : se.id;
				if (!Ee) {
					let Pe = Y.Z.get(ut);
					if (!Pe) {
						let De = (0, pt.Z)();
						Y.Z.set(ut, De), Pe = De
					}
					return Pe
				}
				return Ee
			}
			async function rt() {
				const B = (0, f.bh)();
				B.dispatch((0, We.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await B.dispatch((0, b.UL)({
					userId: Ae()
				}))
			}
			class X extends Error {
				constructor(z, J) {
					super(J);
					this.name = `${z} ${J}`
				}
			}
			const ge = () => {
					document.cookie.split(";").forEach(z => {
						const [J] = z.trim().split("=");
						document.cookie = `${J}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				we = async () => {
					let B = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!B.ok) throw B.headers.get("content-type") === "text/html" && (await B.text()).toLowerCase().includes("cookie too large") && (o.$e(function(Ee) {
						Ee.setTag("init", "cookieTooLarge"), o.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), ge(), window.location.reload()), new X("Bootstrap API Failure", B == null ? void 0 : B.status);
					return (await B.json()).result.data
				};
			var Le = t("webpack/sharing/consume/default/react/react"),
				Te = t.n(Le),
				Be = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				qe = t("webpack/sharing/consume/default/react-dom/react-dom"),
				ot = t("webpack/sharing/consume/default/react-redux/react-redux"),
				_t = t("../../../../node_modules/swr/core/dist/index.mjs"),
				Et = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				yt = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				kt = t("../react/shims/focus-visible.js"),
				Ke = t("../react/app/components/DeepLink/index.ts"),
				ft = t("../../../../node_modules/prop-types/index.js"),
				it = t.n(ft),
				st = t("../react/utils/translator.tsx"),
				dt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Re = t("../../../dash/intl/intl-translations/src/index.ts"),
				H = t("../../../../node_modules/query-string/query-string.js"),
				de = t.n(H),
				ye = t("../react/common/actions/userActions.ts"),
				Ie = t("../react/common/selectors/userSelectors.ts"),
				Ne = t("../react/utils/i18n.ts"),
				He = t("../react/utils/bootstrap.ts");

			function tt(B) {
				for (var z = 1; z < arguments.length; z++) {
					var J = arguments[z] != null ? Object(arguments[z]) : {},
						se = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(J).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(J, Ee).enumerable
					})), se.forEach(function(Ee) {
						It(B, Ee, J[Ee])
					})
				}
				return B
			}

			function It(B, z, J) {
				return z = vt(z), z in B ? Object.defineProperty(B, z, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[z] = J, B
			}

			function vt(B) {
				var z = At(B, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function At(B, z) {
				if (typeof B != "object" || B === null) return B;
				var J = B[Symbol.toPrimitive];
				if (J !== void 0) {
					var se = J.call(B, z || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(B)
			}
			let Qe = de().parse(location.search);
			const ht = B => {
					const z = (0, He.$8)() ? [(0, Re.Fy)(Re.if.changes), (0, Re.Fy)(Re.if.common), (0, Re.Fy)(Re.if.navigation), (0, Re.Fy)(Re.if.overview), (0, Re.Fy)(Re.if.onboarding), (0, Re.Fy)(Re.if.invite), (0, Re.Fy)(Re.if.login), (0, Re.Fy)(Re.if.dns), (0, Re.Fy)(Re.n4.ssl_tls), (0, Re.Fy)(Re.if.message_inbox), (0, Re.Fy)(Re.if.welcome)] : [(0, Re.Fy)(Re.if.common), (0, Re.Fy)(Re.if.invite), (0, Re.Fy)(Re.if.login), (0, Re.Fy)(Re.if.onboarding)];
					Qe.lang ? Mt(B) : Y.Z.get(Ne.th) && Pt(B, (0, Ne.Kd)());
					const J = async se => (await Promise.all(z.map(Pe => Pe(se)))).reduce((Pe, De) => tt({}, Pe, De), {});
					return Te().createElement(dt.LocaleContext.Provider, {
						value: B.languagePreference
					}, Te().createElement(dt.I18nProvider, {
						translator: st.Vb,
						locale: B.languagePreference
					}, Te().createElement(dt.I18nLoader, {
						loadPhrases: J
					}, B.children)))
				},
				Mt = async B => {
					let z = Qe.lang.substring(0, Qe.lang.length - 2) + Qe.lang.substring(Qe.lang.length - 2, Qe.lang.length).toUpperCase();
					if (!(0, S.v)(z)) {
						console.warn(`${z} is not a supported locale.`), delete Qe.lang, B.history.replace({
							search: de().stringify(Qe)
						});
						return
					}(0, Ne.i_)(z), delete Qe.lang, Pt(B, z), B.isAuthenticated || B.history.replace({
						search: de().stringify(Qe)
					})
				}, Pt = async (B, z) => {
					if (B.isAuthenticated) try {
						await B.setUserCommPreferences({
							"language-locale": z
						}, {
							hideErrorAlert: !0
						}), Y.Z.remove(Ne.th), B.history.replace({
							search: de().stringify(Qe)
						})
					} catch (J) {
						Y.Z.set(Ne.th, !0), console.error(J)
					} else Y.Z.set(Ne.th, !0)
				}, Rt = B => {
					const z = (0, Ie.PR)(B);
					return {
						isAuthenticated: !!(z && z.id),
						languagePreference: (0, Ne.Kd)() || (0, S.r)(B)
					}
				}, Dt = {
					setUserCommPreferences: ye.V_
				};
			var Nt = (0, Be.withRouter)((0, ot.connect)(Rt, Dt)(ht));
			ht.propTypes = {
				history: it().object,
				languagePreference: it().string.isRequired,
				children: it().node.isRequired,
				isAuthenticated: it().bool,
				setUserCommPreferences: it().func.isRequired
			};
			var bt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				xt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Ct;
			const Bt = ({
				selectorPrefix: B = "c_"
			} = {}) => (Ct || (Ct = (0, xt.Z)({
				dev: !1,
				selectorPrefix: B
			})), Ct);
			var Ut = t("../react/common/out.css"),
				wt = t("../react/common/components/ModalManager.tsx"),
				jt = t("../react/app/components/ErrorBoundary.tsx"),
				$t = t("../react/common/actions/notificationsActions.ts");
			const Lt = (t.g.bootstrap || {}).data || {};
			class h extends Te().Component {
				componentDidMount() {
					Lt.messages && this.dispatchNotificationActions(Lt.messages)
				}
				dispatchNotificationActions(z) {
					z.forEach(J => {
						const {
							type: se,
							message: Ee,
							persist: Pe
						} = J;
						["success", "info", "warn", "error"].includes(se) && this.props.notifyAdd(se, (0, st.ZP)(Ee), {
							persist: !!Pe
						})
					})
				}
				render() {
					return null
				}
			}
			var me = (0, Be.withRouter)((0, ot.connect)(null, {
				notifyAdd: $t.add
			})(h));
			h.propTypes = {
				notifyAdd: it().func.isRequired
			};
			var Ce = t("../react/app/redux/index.ts");

			function oe() {
				var B;
				const z = (0, Ce.p4)(Ie.PR),
					J = (z == null || (B = z.email) === null || B === void 0 ? void 0 : B.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					se = (0, We.Yc)();
				(0, Le.useEffect)(() => {
					se({
						userType: J
					})
				}, [J, se])
			}
			var re = t("../react/common/selectors/entitlementsSelectors.ts"),
				fe = t("../react/common/selectors/accountSelectors.ts");
			const _e = ["accountId", "is_ent"];

			function be() {
				const B = (0, We.f7)(),
					z = (0, Be.useHistory)(),
					J = (0, x.uW)(z.location.pathname),
					se = (0, We.Yc)(),
					Ee = (0, We.O$)(),
					Pe = (0, Ce.p4)(re.u1),
					De = !Pe.isRequesting && !!Pe.data,
					$e = (0, Ce.p4)(re.p1),
					lt = (0, Ce.p4)(fe.Xu),
					Ye = (0, Ce.p4)(fe.uF),
					Gt = !lt.isRequesting && !!lt.data;
				(0, Le.useEffect)(() => {
					if (J && Gt && Ye && De && J === Ye.account.id) {
						var Ot, St, mt;
						se({
							accountId: Ye.account.id,
							is_ent: $e,
							is_free_account: !$e && !(Ye == null || (Ot = Ye.account.meta) === null || Ot === void 0 ? void 0 : Ot.has_business_zones) && !(Ye == null || (St = Ye.account.meta) === null || St === void 0 ? void 0 : St.has_pro_zones) && !(Ye == null || (mt = Ye.account.meta) === null || mt === void 0 ? void 0 : mt.has_enterprise_zones)
						})
					} else(!J || J in B && B.accountId !== J) && Ee(_e)
				}, [Gt, Ye, se, Ee, De, $e, J, B])
			}
			var Ue = t("../react/common/selectors/zoneSelectors.ts");

			function Ze() {
				const B = (0, Ce.p4)(Ue.nA),
					z = (0, We.Yc)();
				(0, Le.useEffect)(() => {
					var J;
					z({
						zone_id: B == null ? void 0 : B.id,
						zone_plan: B == null || (J = B.plan) === null || J === void 0 ? void 0 : J.legacy_id
					})
				}, [B, z])
			}
			const at = () => (oe(), be(), Ze(), null);
			var Xe = t("../react/app/components/Persistence/index.tsx"),
				et = t("../node_modules/@cloudflare/elements/es/index.js"),
				ct = t("../react/app/components/LoadingSuspense.tsx");
			const gt = Te().lazy(() => Promise.all([t.e(16691), t.e(14917), t.e(12174), t.e(1091), t.e(31358), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var nt = () => Te().createElement(ct.Z, null, Te().createElement(gt, null));
			const zt = () => (Le.useEffect(() => I, []), null);
			var en = t("../../../../node_modules/moment/moment.js"),
				Ht = t.n(en);
			const tn = B => {
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
				nn = () => {
					const B = (0, Ce.p4)(S.r);
					(0, Le.useEffect)(() => {
						const z = tn(B);
						z !== Ht().locale() && Ht().locale(z), document.documentElement.lang = B
					}, [B])
				},
				rn = () => {
					(0, Le.useEffect)(() => {
						async function B() {
							var z, J, se, Ee;
							let Pe;
							if (((z = window) === null || z === void 0 || (J = z.build) === null || J === void 0 ? void 0 : J.isPreviewDeploy) && ((se = window) === null || se === void 0 || (Ee = se.build) === null || Ee === void 0 ? void 0 : Ee.branch) !== "staging" && (Pe = "cookie"), !!Pe) try {
								const De = document.head.querySelector("link[rel=icon]");
								De && (De.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${Pe}.ico`)).default)
							} catch {}
						}
						B()
					}, [])
				};
			var on = t("../react/common/constants/constants.ts");
			const an = () => {
					var B;
					const z = (0, Be.useLocation)(),
						[J, se] = (0, Le.useState)(((B = window) === null || B === void 0 ? void 0 : B.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Le.useEffect)(() => {
						const Ee = de().parse(z.search);
						if (Ee.pt && Y.Z.set(on.sJ, Ee.pt), Ee == null ? void 0 : Ee.devPanel) {
							var Pe, De;
							(Pe = window) === null || Pe === void 0 || (De = Pe.localStorage) === null || De === void 0 || De.setItem("gates_devtools_ui_gates_controller_enabled", "true"), se(!0)
						}
					}, [z.search]), {
						devPanelEnabled: J
					}
				},
				sn = ({
					id: B,
					customDataLayer: z = [],
					dataLayerName: J = "dataLayer"
				}) => {
					const se = `<iframe src="https://www.googletagmanager.com/ns.html?id=${B}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						Ee = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${J}', '${B}')`,
						Pe = `
    window.${J} = window.${J} || [];
    window.${J}.push(${JSON.stringify(z)})
  `;
					return {
						iframe: se,
						script: Ee,
						dataLayerHTML: Pe
					}
				},
				cn = B => {
					const z = document.createElement("script");
					return z.innerHTML = B, z.async = !0, z
				},
				ln = B => {
					const z = document.createElement("noscript");
					return z.innerHTML = B, z
				},
				Zt = B => {
					const z = document.createElement("script");
					return z.innerHTML = B, z
				},
				Dn = ({
					dataLayer: B,
					dataLayerName: z
				}) => {
					if (window[z]) return window[z].push(B);
					const J = `
      window.${z} = window.${z} || [];
      window.${z}.push(${JSON.stringify(B)})`,
						se = Zt(J);
					document.head.insertBefore(se, document.head.childNodes[0])
				},
				un = ({
					containerId: B,
					customDataLayer: z,
					gtmFeatureFlag: J = !0
				}) => {
					(0, Le.useEffect)(() => {
						(() => {
							if (!J) return null;
							const {
								iframe: Ee,
								script: Pe,
								dataLayerHTML: De
							} = sn({
								id: B,
								customDataLayer: z
							});
							document.head.insertBefore(Zt(De), document.head.childNodes[0]), document.head.insertBefore(cn(Pe), document.head.childNodes[0]), document.body.insertBefore(ln(Ee), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const dn = ({
				isDev: B,
				gtmFeatureFlag: z
			}) => {
				(0, Le.useEffect)(() => {
					(() => {
						if (!z) return null;
						let se;
						B ? se = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : se = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const Ee = document.createElement("script");
						Ee.async = !0, Ee.src = se, document.head.insertBefore(Ee, document.head.childNodes[0])
					})()
				}, [])
			};
			var pn = t("../react/utils/useDomainConnectRedirect.ts");
			const gn = "GTM-NDGPDFZ",
				mn = Te().lazy(() => Promise.all([t.e(16691), t.e(14917), t.e(12174), t.e(1091), t.e(31358), t.e(51436), t.e(34744), t.e(54844), t.e(80778), t.e(70618), t.e(88723), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(83276), t.e(39278), t.e(91262), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				fn = Te().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(80778), t.e(17387), t.e(2868), t.e(88145), t.e(91262), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var vn = ({
					userIsAuthed: B
				}) => {
					nn(), rn(), (0, pn.y)();
					const {
						devPanelEnabled: z
					} = an();
					return un({
						containerId: gn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), dn({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-adobe-launch")
					}), Te().createElement(Le.Suspense, {
						fallback: Te().createElement(zt, null)
					}, Te().createElement(Be.Switch, null, !B && !0 && Te().createElement(Be.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Te().createElement(fn, null)), Te().createElement(Be.Route, {
						render: () => Te().createElement(et.ZC, {
							minHeight: "100vh"
						}, Te().createElement(mn, null))
					})), z && Te().createElement(nt, null))
				},
				Kt = t("../../../../node_modules/yup/es/index.js"),
				_n = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => Kt.Z_().email((0, st.ZP)("common.validation.email")).required((0, st.ZP)("common.validation.email")),
				cfPassword: () => Kt.Z_().required((0, st.ZP)("common.validation.required"))
			};
			(0, _n.Yd)(Qt).forEach(B => {
				Kt.kM(Kt.Z_, B, Qt[B])
			});
			var En = t("../react/common/utils/startViewTransition.ts");
			const Xt = Te().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function yn() {
				const [B, z] = (0, Le.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, Le.useEffect)(() => {
					const J = window.matchMedia("(prefers-color-scheme: dark)"),
						se = Ee => {
							z(Ee.matches ? "dark" : "light")
						};
					return J.addEventListener("change", se), () => {
						J.removeEventListener("change", se)
					}
				}, []), B
			}
			const hn = () => {
					const B = (0, He.$8)(),
						[z, J] = (0, Le.useState)(B ? Xt : Te().Fragment),
						se = yn(),
						[Ee, Pe] = (0, Le.useState)((0, m.Yc)());
					(0, Le.useEffect)(() => {
						(0, m.fF)(() => Pe((0, m.Yc)()))
					}, []);
					const De = $e => {
						Pe($e), (0, En.o)(() => {
							(0, m.C8)($e)
						}), document.cookie = `dark-mode=${$e};Path=/;Max-Age=31536000`, $e === "dark" || $e === "on" || $e === "system" && se === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, Le.useEffect)(() => {
						J(B ? Xt : Te().Fragment)
					}, [B]), (0, Le.useEffect)(() => {
						const $e = () => De(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", $e), () => {
							window.removeEventListener("storage", $e)
						}
					}, []), Te().createElement(Le.Suspense, {
						fallback: null
					}, Te().createElement(ot.Provider, {
						store: (0, f.bh)()
					}, Te().createElement(Be.Router, {
						history: ee
					}, Te().createElement(z, null, Te().createElement(bt.Z, {
						renderer: Bt()
					}, Te().createElement(Nt, null, Te().createElement(jt.S, {
						sentryTag: "Root"
					}, Te().createElement(_t.J$, {
						value: {
							fetcher: $e => fetch($e).then(lt => lt.json())
						}
					}, Te().createElement(at, null), Te().createElement(me, null), Te().createElement(Xe.Z_, {
						onDarkModeChangeCb: De
					}, Te().createElement(Ke.ZP, null, Te().createElement(vn, {
						userIsAuthed: B
					}))), Te().createElement(wt.ZP, null), Te().createElement(Et.F0, null)))))))))
				},
				bn = () => {
					(0, qe.render)(Te().createElement(hn, null), document.getElementById("react-app"))
				};
			var Tt = t("../utils/initSparrow.ts"),
				Ft = t("../utils/zaraz.ts");
			const Cn = () => {
					const B = (0, Ie.PR)((0, f.bh)().getState());
					wn(), (0, Tt.Ug)(), (0, Ft.bM)(), (B == null ? void 0 : B.id) && ue().setUserId(B == null ? void 0 : B.id), (0, Tt.yV)(), !(0, Tt.Wi)() && (0, Tt.IM)(), B ? (0, Ft.yn)(B) : (0, Ft.Ro)()
				},
				wn = () => {
					var B, z;
					(B = window) === null || B === void 0 || (z = B.OneTrust) === null || z === void 0 || z.OnConsentChanged(() => {
						const J = (0, Ie.PR)((0, f.bh)().getState());
						(0, Tt.Wi)() ? (ue().setEnabled(!0), (J == null ? void 0 : J.id) ? (ue().setUserId(J.id), (0, Ft.yn)(J)) : (0, Ft.Ro)(), (0, Tt.yV)()) : (ue().setEnabled(!1), (0, Tt.IM)())
					})
				};

			function Tn(B) {
				for (var z = 1; z < arguments.length; z++) {
					var J = arguments[z] != null ? Object(arguments[z]) : {},
						se = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(J).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(J, Ee).enumerable
					})), se.forEach(function(Ee) {
						On(B, Ee, J[Ee])
					})
				}
				return B
			}

			function On(B, z, J) {
				return z = In(z), z in B ? Object.defineProperty(B, z, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[z] = J, B
			}

			function In(B) {
				var z = An(B, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function An(B, z) {
				if (typeof B != "object" || B === null) return B;
				var J = B[Symbol.toPrimitive];
				if (J !== void 0) {
					var se = J.call(B, z || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(B)
			}
			const Pn = "init",
				Jt = (B, z) => {
					o.$e(function(J) {
						J.setTag(Pn, z), o.Tb(B)
					}), P(B)
				},
				Vt = async (B, z) => {
					try {
						return await B(), !0
					} catch (J) {
						return Jt(J, z), !1
					}
				};
			(async () => {
				try {
					var B, z, J;
					t.g.build = Tn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "1dc8be69d7fc9270c41a45fdd7e3d9e2c0481840",
						dashVersion: "34268173",
						env: "production",
						builtAt: 1751295522757,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, te.p)()
					}), Fe();
					const se = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => O(ee),
						tag: "hashScroll"
					}, {
						fn: L.Z,
						tag: "styles"
					}, {
						fn: ke,
						tag: "mfePreviewData"
					}];
					for (const lt of se)
						if (!await Vt(lt.fn, lt.tag)) return;
					let Ee;
					if (!await Vt(async () => {
							Ee = await we()
						}, "bootstrap")) return;
					const Pe = (0, f.bh)(),
						De = ((B = Ee) === null || B === void 0 ? void 0 : B.data) || {};
					Pe.dispatch((0, s.mW)("user", De == null ? void 0 : De.user));
					const $e = (z = Ee) === null || z === void 0 || (J = z.data) === null || J === void 0 ? void 0 : J.user;
					return t.g.bootstrap = Ee, $e && $e.id && Ve($e.id), !await Vt(rt, "gates") || !await Vt(Cn, "tracking") ? void 0 : bn()
				} catch (se) {
					Jt(se, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(W, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/zoneSelectors.ts"),
				_ = t("../react/common/selectors/accountSelectors.ts"),
				c = t("../react/common/utils/isGuards.ts"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				g = t.n(l);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(f) {
					for (var d = 1; d < arguments.length; d++) {
						var p = arguments[d];
						for (var w in p) Object.prototype.hasOwnProperty.call(p, w) && (f[w] = p[w])
					}
					return f
				}, n.apply(this, arguments)
			}
			const o = f => {
				function d(p) {
					const w = (0, a.UM)(),
						O = (0, l.useHistory)(),
						E = (0, l.useLocation)(),
						m = (0, l.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						C = (0, a.p4)(u.PR) || null,
						v = (0, a.p4)(i.nA) || null,
						T = (0, a.p4)(_.uF),
						M = T ? T.account : null;
					if (!m) return null;
					const {
						accountId: I,
						app: P,
						tab: L
					} = m.params, b = m.params.zoneName && ((0, c.v5)(m.params.zoneName) || m.params.zoneName.indexOf(".") > 0) ? m.params.zoneName : void 0;
					return r().createElement(f, n({
						dispatch: w,
						history: O,
						location: E,
						match: m,
						user: C,
						membership: I ? T : null,
						account: I ? M : null,
						accountId: I || null,
						zone: b ? v : null,
						zoneName: b || null,
						app: b ? P : null,
						tab: b ? L : null
					}, p))
				}
				return d.displayName = `withEntities(${s(f)})`, d
			};

			function s(f) {
				return f.displayName || f.name || "Component"
			}
			y.Z = o
		},
		"../react/app/components/AccountHome/tracking.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$$: function() {
					return v
				},
				CK: function() {
					return P
				},
				KV: function() {
					return M
				},
				OX: function() {
					return I
				},
				QV: function() {
					return C
				},
				Yt: function() {
					return E
				},
				bA: function() {
					return m
				},
				fu: function() {
					return b
				},
				gX: function() {
					return p
				},
				hh: function() {
					return L
				},
				o1: function() {
					return T
				},
				tw: function() {
					return w
				},
				xD: function() {
					return O
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/url.ts");
			const u = "projects table click",
				i = "click create application",
				_ = "account home dev plat - product card click",
				c = "account home dev plat - empty state CTA click",
				l = "account home dev plat - view all projects click",
				g = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				o = "account home zero trust - analytics link click",
				s = "account home zero trust - product card click",
				f = "account home zero trust - plan pill click",
				d = "account home zero trust - plan fallback link click",
				p = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: i,
					SPARROW_PRODUCT_CARD_CLICK: _,
					SPARROW_EMPTY_STATE_CTA_CLICK: c,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: l,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: g,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: o,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: s,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: f,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: d
				},
				w = D => {
					r().sendEvent(u, {
						component: D
					})
				},
				O = D => {
					r().sendEvent(u, {
						component: "menu",
						subcomponent: D
					})
				},
				E = () => {
					r().sendEvent(i, {
						category: "Projects Table"
					})
				},
				m = ({
					category: D,
					product: S
				}) => {
					r().sendEvent(_, {
						category: D,
						product: S
					})
				},
				C = () => {
					r().sendEvent(c)
				},
				v = () => {
					r().sendEvent(l)
				},
				T = D => {
					r().sendEvent(n, {
						category: D
					})
				},
				M = ({
					category: D,
					href: S
				}) => {
					r().sendEvent(g, {
						category: D,
						href: (0, a.cm)(S)
					})
				},
				I = ({
					category: D,
					href: S
				}) => {
					r().sendEvent(o, {
						category: D,
						href: (0, a.cm)(S)
					})
				},
				P = ({
					category: D,
					product: S,
					href: G
				}) => {
					r().sendEvent(s, {
						category: D,
						product: S,
						href: (0, a.cm)(G)
					})
				},
				L = ({
					plan: D
				}) => {
					r().sendEvent(f, {
						plan: D
					})
				},
				b = () => {
					r().sendEvent(d)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return l
				},
				Bh: function() {
					return _
				},
				CM: function() {
					return g
				},
				MF: function() {
					return r
				},
				TS: function() {
					return s
				},
				WF: function() {
					return i
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
					return a
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
				a = (0, e.R)(r.ADD_SITE, f => ({
					payload: f
				})),
				u = (0, e.R)(r.RESOLVING_START),
				i = (0, e.R)(r.RESOLVING_COMPLETE),
				_ = (0, e.R)(r.SELECT_ZONE, f => ({
					payload: f
				})),
				c = (0, e.R)(r.SELECT_ACCOUNT, f => ({
					payload: f
				})),
				l = (0, e.R)(r.SELECT_PAGES_PROJECT, f => ({
					payload: f
				})),
				g = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, f => ({
					payload: f
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, f => ({
					accountIds: f
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(r.SELECT_WORKER, f => ({
					payload: f
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(W, y, t) {
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
					return _
				},
				O5: function() {
					return i
				},
				Tc: function() {
					return r
				},
				_h: function() {
					return n
				},
				dB: function() {
					return a
				},
				s$: function() {
					return c
				}
			});
			const e = "to",
				r = "_gl",
				a = "freeTrial",
				u = "deepLinkQueryParams",
				i = "resolvedDeepLinkQueryParams",
				_ = "add",
				c = "multiSkuProducts",
				l = "/:account/billing/checkout",
				g = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return L
				},
				U: function() {
					return P.U
				},
				dd: function() {
					return P.dd
				},
				bk: function() {
					return _.bk
				},
				Bh: function() {
					return _.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t("../react/app/redux/index.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				i = t("../react/utils/bootstrap.ts"),
				_ = t("../react/app/components/DeepLink/actions.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c);

			function g(b) {
				for (var D = 1; D < arguments.length; D++) {
					var S = arguments[D] != null ? Object(arguments[D]) : {},
						G = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(S).filter(function(te) {
						return Object.getOwnPropertyDescriptor(S, te).enumerable
					})), G.forEach(function(te) {
						n(b, te, S[te])
					})
				}
				return b
			}

			function n(b, D, S) {
				return D = o(D), D in b ? Object.defineProperty(b, D, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = S, b
			}

			function o(b) {
				var D = s(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function s(b, D) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var G = S.call(b, D || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			class f {
				constructor(D, S) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", G => {
						this.resolvers.set(G, {
							name: G,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", G => {
						const te = this.resolvers.get(G);
						te && (te.endTime = Date.now(), this.resolvers.set(G, te))
					}), n(this, "resolverCancel", G => {
						this.resolverDone(G), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", G => {
						const te = "NO_ACTION",
							le = {
								actionType: te,
								startTime: 0
							};
						return {
							start: (ce = te) => {
								const Q = this.resolvers.get(G);
								le.actionType = ce, le.startTime = Date.now(), Q && Q.userActions.push(le)
							},
							finish: (ce = te) => {
								le.actionType = ce, le.endTime = Date.now()
							},
							cancel: (ce = te) => {
								le.actionType = ce, le.endTime = Date.now(), this.resolverCancel(G)
							}
						}
					}), this.deepLink = D, this.legacyDeepLink = S, this.resolvers = new Map
				}
				track(D) {
					try {
						if (this._done) return;
						this._done = !0;
						const S = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: d(this.startTime, this.endTime),
								totalCpuTime: d(this.startTime, this.endTime)
							},
							G = this.resolvers.size === 0 ? S : Array.from(this.resolvers.values()).reduce((te, le) => {
								const ce = d(le.startTime, le.endTime),
									Q = le.userActions.reduce((K, j) => {
										const U = d(j.startTime, j.endTime);
										return {
											totalTime: K.totalTime + U,
											actions: K.actions.set(j.actionType, U)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									F = ce - Q.totalTime;
								return g({}, te, {
									totalTime: te.totalTime + ce,
									totalUserActionsTime: te.totalUserActionsTime + Q.totalTime,
									totalCpuTime: te.totalCpuTime + F,
									[`${le.name}ResolverTotalTime`]: ce,
									[`${le.name}ResolverTotalCpuTime`]: F,
									[`${le.name}ResolverTotalUserActionsTime`]: Q.totalTime
								}, Array.from(Q.actions.keys()).reduce((K, j) => g({}, K, {
									[`${le.name}Resolver/${j}`]: Q.actions.get(j)
								}), {}))
							}, g({}, S, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						l().sendEvent(D, G)
					} catch (S) {
						console.error(S)
					}
				}
			}

			function d(b = Date.now(), D = Date.now()) {
				return (D - b) / 1e3
			}
			var p = t("../react/app/components/DeepLink/constants.ts"),
				w = t("../react/common/hooks/useCachedState.ts"),
				O = t("../react/common/hooks/usePrevious.ts");

			function E(b) {
				for (var D = 1; D < arguments.length; D++) {
					var S = arguments[D] != null ? Object(arguments[D]) : {},
						G = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(S).filter(function(te) {
						return Object.getOwnPropertyDescriptor(S, te).enumerable
					})), G.forEach(function(te) {
						m(b, te, S[te])
					})
				}
				return b
			}

			function m(b, D, S) {
				return D = C(D), D in b ? Object.defineProperty(b, D, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = S, b
			}

			function C(b) {
				var D = v(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function v(b, D) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var G = S.call(b, D || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			var M = ({
					children: b
				}) => {
					const D = (0, r.TZ)(),
						S = (0, a.useHistory)(),
						G = (0, O.Z)(S.location.pathname),
						[te, le] = (0, e.useState)(!0),
						[ce, Q] = (0, w.j)(void 0, {
							key: p.Fj
						}),
						[F, K] = (0, w.j)(void 0, {
							key: p.O5
						}),
						[j, U] = (0, w.j)(void 0, {
							key: p.s$
						}),
						A = (0, i.$8)();
					let N = new URLSearchParams(S.location.search);
					const $ = (0, u.mL)(S.location.pathname, N);
					let q = null,
						ee = null;
					if (N.has(p.Tc) && N.delete(p.Tc), N.get(p.BV)) q = N.get(p.BV), S.location.hash && (ee = S.location.hash);
					else if (ce) {
						const x = new URLSearchParams(ce);
						x.get(p.BV) && (q = x.get(p.BV), N = x)
					} else $ && (N.set(p.BV, $), q = $);
					if (q && p._h.test(q)) {
						const x = N.getAll(p.Kt),
							V = JSON.stringify(x);
						x.length && V !== j && U(V), N.has(p.Tc) && N.delete(p.Tc), N.delete(p.Kt)
					}!A && ce === void 0 && q && Q(N.toString());
					const ie = async () => {
						try {
							if ((0, u.I3)(q) && A) {
								ce && Q(void 0), D.dispatch((0, _.r4)()), le(!0), q && q !== F && K(q);
								const x = await (0, u.py)(q, le, D, S, G, new f(q, $ ? `${S.location.pathname}${S.location.search}` : void 0));
								N.delete(p.BV);
								const V = N.toString();
								S.replace(E({}, S.location, {
									pathname: x,
									search: V
								}, ee ? {
									hash: ee
								} : {})), D.dispatch((0, _.WF)())
							}
						} catch (x) {
							D.dispatch((0, _.WF)()), console.error(x)
						} finally {
							le(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ie()
					}, [S.location.pathname, S.location.search]), (te || (0, u.I3)(q)) && A ? null : b
				},
				I = t("../react/app/components/DeepLink/reducer.ts"),
				P = t("../react/app/components/DeepLink/selectors.ts"),
				L = M
		},
		"../react/app/components/DeepLink/reducer.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return u
				},
				r: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				i = r().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function _(c = i, l) {
				if (l.type === a.MF.RESOLVING_COMPLETE) return i;
				if (l.type === a.MF.RESOLVING_START) return c.set("isResolving", !0);
				if (c.isResolving) {
					if (l.type === a.MF.RESOLVING_COMPLETE) return c.set("isResolving", !1);
					if (l.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", l.accountIds);
					if (l.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return c.set("filteredAccountIds", void 0);
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
		"../react/app/components/DeepLink/selectors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return a
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
				a = u => u.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(W, y, t) {
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
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				i = t("../react/common/validators/index.js"),
				_ = t("../react/common/utils/isGuards.ts");
			const c = p => (0, i.Lb)(p) && (p.split(".").length > 1 || (0, _.v5)(p)),
				l = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				g = p => typeof p == "string" && p.startsWith("/"),
				n = (p, w) => O => new Promise((E, m) => {
					w.start();
					const C = p.subscribe(() => {
						const v = (0, a.yI)(p.getState());
						v === r.E ? (w.cancel(), C(), m("DeepLink: waitForAction out of context.")) : O(v) && (w.finish(v.type), C(), E(v))
					})
				}),
				o = (p, w, O) => (E, m) => new Promise((C, v) => {
					O.start();
					const T = w.location.pathname;
					E = new URL(E, window.location.href).pathname, T !== E && (O.cancel(), v(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${E}", but on "${T}". You need to redirect to "${E}", and unblockRouter in your Resolver, before you use this function.`));
					const M = p.subscribe(() => {
						const I = (0, a.yI)(p.getState()),
							P = w.location.pathname,
							b = new URLSearchParams(w.location.search).get(u.BV);
						(P !== E || !!b) && (O.cancel(), M(), v(`DeepLink: waitForPageAction user navigated away from "${E}" to "${P}${b?w.location.search:""}"`)), I === r.E ? (O.cancel(), M(), v("DeepLink: waitForPageAction out of context.")) : m(I) && (O.finish(I.type), M(), C(I))
					})
				});

			function s(p) {
				const w = [],
					O = p.split("?")[0].split("/");
				for (let E of O) E.length !== 0 && (E.startsWith(":") ? w.push({
					value: E.substring(1),
					type: "dynamic"
				}) : w.push({
					value: E,
					type: "static"
				}));
				return w
			}
			async function f(p, w, O, E, m, C) {
				C.start();
				const v = s(p),
					M = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					I = {};
				let P = "";
				for (const [L, b] of v.entries())
					if (b.type === "static") P = [P, b.value].join("/");
					else if (b.type === "dynamic" && l.is(b.value) && b.value in M) {
					C.resolverStart(b.value);
					const D = await M[b.value]({
						deepLink: p,
						blockRouter: () => w(!0),
						unblockRouter: () => w(!1),
						routerHistory: E,
						resolvedValues: I,
						store: O,
						referringRoute: m,
						uri: {
							currentPartIdx: L,
							parts: v
						},
						waitForAction: n(O, C.createUserActionTracker(b.value)),
						waitForPageAction: o(O, E, C.createUserActionTracker(b.value))
					});
					C.resolverDone(b.value), P = [P, D].join("/"), I[b.value] = D
				} else throw C.cancel(), new Error(`DeepLink: Resolver with name '${b.value}' is not supported.`);
				return C.done(), P
			}

			function d(p, w) {
				const O = ":account",
					E = ":zone",
					m = w.get("zone");
				if (m) return w.delete("zone"), `/${O}/${E}/${m}`;
				const C = w.get("account");
				if (C) return w.delete("account"), `/${O}/${C}`;
				if (p === "/overview") return `/${O}/${E}`;
				const v = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const T of v) {
					const M = T.length;
					if (p.startsWith(T) && (p.length === M || p[M] === "/")) return `/${O}/${E}${p}`
				}
				switch (p) {
					case "/account/billing":
						return `/${O}/billing`;
					case "/account/subscriptions":
						return `/${O}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${O}/dns-firewall`;
					case "/account/audit-log":
						return `/${O}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return w
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				i = t("../utils/sentry/lastSentEventId.ts"),
				_ = t("../react/utils/zaraz.ts"),
				c = t("../react/utils/url.ts"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				g = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				s = t.n(o),
				f = t("../react/common/components/Page.tsx"),
				d = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function p() {
				return (0, e.useEffect)(() => {
					s().sendEvent("new page available refresh cta")
				}, []), r().createElement(f.Z, {
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
			const w = ({
				sentryTag: O,
				children: E,
				fallbackComponent: m
			}) => r().createElement(a.SV, {
				beforeCapture: C => {
					_.tg === null || _.tg === void 0 || _.tg.track("page-error", {
						page: (0, c.Fl)(window.location.pathname)
					})
				},
				onError: C => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(C)
				},
				fallback: ({
					error: C,
					eventId: v
				}) => {
					var T;
					if (m) return m;
					const M = i.e.getEventId() || v;
					return (C == null || (T = C.message) === null || T === void 0 ? void 0 : T.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(p, null)) : r().createElement(u.Z, {
						type: "page",
						error: C,
						eventId: M,
						sentryTag: O
					})
				}
			}, E)
		},
		"../react/app/components/Footer.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return U
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c),
				g = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				o = t("../react/utils/translator.tsx"),
				s = t("../../../../node_modules/moment/moment.js"),
				f = t.n(s);
			const d = () => {
					const A = f()().format("YYYY"),
						N = $ => {
							l().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: $
							})
						};
					return r().createElement(p, {
						marginTop: "auto"
					}, r().createElement(w, null, r().createElement(O, null, r().createElement(E, null, "\xA9 ", A, " Cloudflare, Inc."), r().createElement(E, null, r().createElement(m, null, r().createElement(C, {
						showOnDeskTop: !1
					}, r().createElement(v, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => N("Support")
					}, r().createElement(o.cC, {
						id: "common.support"
					}))), r().createElement(C, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => N("Privacy Policy")
					}, r().createElement(o.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(C, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => N("Terms of Use")
					}, r().createElement(o.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(C, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => N("Cookie Preferences")
					}, r().createElement(o.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(C, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => N("Trademark")
					}, r().createElement(o.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(m, null, r().createElement(C, null, r().createElement(v, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => N("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(o.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				p = (0, i.createComponent)(({
					theme: A,
					marginTop: N
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: N
				})),
				w = (0, i.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				O = (0, i.createComponent)(({
					theme: A
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${A.space[3]}px`
					}
				})),
				E = (0, i.createComponent)(({
					theme: A
				}) => ({
					width: "100%",
					color: A.colors.white,
					fontSize: A.fontSizes[1],
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
				m = (0, i.createComponent)(({
					theme: A
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: A.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				C = (0, i.createComponent)(({
					showOnDeskTop: A = !0,
					theme: N
				}) => ({
					color: N.colors.white,
					fontSize: N.fontSizes[1],
					height: "20px",
					display: A ? "flex" : "none",
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
				v = (0, i.createStyledComponent)(({
					theme: A
				}) => ({
					textDecoration: "none",
					color: A.colors.white,
					"&:hover": {
						color: A.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var T = d,
				M = t("../react/pages/welcome/routes.ts"),
				I = t("../react/utils/cookiePreferences.ts"),
				P = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				b = () => {
					const [A, N] = (0, e.useState)(!1), $ = (0, I.wV)(), q = () => {
						N(!0)
					}, ee = () => {
						N(!1)
					}, ie = $ && $ === "US" ? (0, o.ZP)("footer.cpra_cta.privacy_choices") : (0, o.ZP)("footer.cpra_cta.cookie_preferences"), x = {
						background: "transparent",
						borderRadius: "none",
						color: A ? (0, _.Yc)() ? "#ee730a" : "#003681" : (0, _.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: A ? "underline" : "none",
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
						style: x,
						onMouseEnter: q,
						onMouseLeave: ee
					}, r().createElement(u.Ei, {
						height: 15,
						src: P,
						mr: 2,
						alt: ie
					}), ie)
				};

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(A) {
					for (var N = 1; N < arguments.length; N++) {
						var $ = arguments[N];
						for (var q in $) Object.prototype.hasOwnProperty.call($, q) && (A[q] = $[q])
					}
					return A
				}, D.apply(this, arguments)
			}

			function S(A, N) {
				if (A == null) return {};
				var $ = G(A, N),
					q, ee;
				if (Object.getOwnPropertySymbols) {
					var ie = Object.getOwnPropertySymbols(A);
					for (ee = 0; ee < ie.length; ee++) q = ie[ee], !(N.indexOf(q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(A, q) || ($[q] = A[q]))
				}
				return $
			}

			function G(A, N) {
				if (A == null) return {};
				var $ = {},
					q = Object.keys(A),
					ee, ie;
				for (ie = 0; ie < q.length; ie++) ee = q[ie], !(N.indexOf(ee) >= 0) && ($[ee] = A[ee]);
				return $
			}
			const te = (0, i.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,_.Yc)()?_.rS.colors.orange[6]:_.rS.colors.blue[4]}`
					}
				}), u.A),
				le = (0, i.createStyledComponent)(({
					theme: A
				}) => ({
					color: A.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, g.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: A.colors.gray[4]
					}
				}), u.A),
				ce = A => {
					let {
						onClick: N
					} = A, $ = S(A, ["onClick"]);
					return React.createElement(te, D({
						onClick: q => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: $.href
							}), N && N(q)
						}
					}, $))
				},
				Q = A => {
					let {
						children: N,
						target: $,
						rel: q
					} = A, ee = S(A, ["children", "target", "rel"]);
					return r().createElement(le, D({
						target: $ || "_blank",
						rel: q || "noopener noreferrer"
					}, ee), N)
				},
				F = (0, i.createStyledComponent)(({
					theme: A
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
							fontSize: A.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: A.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), u.Ul),
				K = (0, i.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, g.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var U = () => {
				const A = [M.d.root.pattern].some($ => (0, a.matchPath)(location.pathname, {
					path: $
				}));
				if ((0, n.PP)()) return r().createElement(T, null);
				if (A) return null;
				const N = new Date().getFullYear();
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
				}, r().createElement(K, null, r().createElement(F, null, r().createElement(u.Li, null, r().createElement(Q, {
					href: "https://support.cloudflare.com"
				}, (0, o.ZP)("common.support"))), r().createElement(u.Li, null, r().createElement(Q, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, o.ZP)("footer.system_status")))), r().createElement(u.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, o.ZP)("footer.careers"))), r().createElement(u.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, o.ZP)("footer.tos_reduced"))), r().createElement(u.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, o.ZP)("footer.security_issues"))), r().createElement(u.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, o.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(b, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", N, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(W, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const i = _ => r().createElement(a.Z, _, (0, u.ZP)("error.forbidden"));
			y.Z = i
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return w
				},
				Z: function() {
					return ie
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				g = t.n(l),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				o = t("../react/common/components/AccessControl/index.js"),
				s = t("../react/common/components/ButtonWithDropdown.tsx"),
				f = t("../react/common/components/Dropdown/index.tsx"),
				d = t("../react/utils/translator.tsx"),
				p = t("../react/common/hooks/useGate.ts");
			const w = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				O = () => {
					const x = (0, p.Z)("super-add-button-copy-change"),
						V = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: w.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: w.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: w.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: w.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: w.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: w.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (x) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: w.EXISTING_DOMAIN,
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
								trackingEvent: w.EXISTING_DOMAIN,
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
								trackingEvent: w.EXISTING_DOMAIN,
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
								trackingEvent: w.EXISTING_DOMAIN,
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
								trackingEvent: w.EXISTING_DOMAIN,
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
								trackingEvent: w.EXISTING_DOMAIN,
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
								trackingEvent: w.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: w.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: w.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: w.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: w.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: w.ACCOUNT_MEMBERS,
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
					trackingEvent: w.EXISTING_DOMAIN,
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
					trackingEvent: w.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: w.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: w.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: w.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: w.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: w.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var m = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function C(x) {
				for (var V = 1; V < arguments.length; V++) {
					var k = arguments[V] != null ? Object(arguments[V]) : {},
						Z = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(k).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(k, ae).enumerable
					})), Z.forEach(function(ae) {
						v(x, ae, k[ae])
					})
				}
				return x
			}

			function v(x, V, k) {
				return V = T(V), V in x ? Object.defineProperty(x, V, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[V] = k, x
			}

			function T(x) {
				var V = M(x, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function M(x, V) {
				if (typeof x != "object" || x === null) return x;
				var k = x[Symbol.toPrimitive];
				if (k !== void 0) {
					var Z = k.call(x, V || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(x)
			}

			function I() {
				return I = Object.assign ? Object.assign.bind() : function(x) {
					for (var V = 1; V < arguments.length; V++) {
						var k = arguments[V];
						for (var Z in k) Object.prototype.hasOwnProperty.call(k, Z) && (x[Z] = k[Z])
					}
					return x
				}, I.apply(this, arguments)
			}

			function P(x, V) {
				if (x == null) return {};
				var k = L(x, V),
					Z, ae;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(x);
					for (ae = 0; ae < pe.length; ae++) Z = pe[ae], !(V.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, Z) || (k[Z] = x[Z]))
				}
				return k
			}

			function L(x, V) {
				if (x == null) return {};
				var k = {},
					Z = Object.keys(x),
					ae, pe;
				for (pe = 0; pe < Z.length; pe++) ae = Z[pe], !(V.indexOf(ae) >= 0) && (k[ae] = x[ae]);
				return k
			}
			const b = x => {
					let {
						title: V,
						trackingEvent: k,
						icon: Z,
						url: ae,
						description: pe,
						disabled: ue
					} = x, ve = P(x, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(D, I({
						to: !ue && ae || "#",
						"aria-disabled": ue,
						onClick: () => {
							g().sendEvent(k, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, ve), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(a.J, {
						type: Z,
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
					}, r().createElement(d.cC, pe)))))
				},
				D = (0, n.createStyledComponent)(({
					theme: x
				}) => {
					const V = {
						cursor: "pointer",
						backgroundColor: (0, _.Yc)() ? x.colors.gray[8] : x.colors.gray[9],
						color: x.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: x.colors.background,
						color: x.colors.gray[2],
						fontSize: x.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': V,
						':focus-within:not([aria-disabled="true"])': C({}, V, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: x.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, m.Link);
			var S = b;

			function G() {
				return G = Object.assign ? Object.assign.bind() : function(x) {
					for (var V = 1; V < arguments.length; V++) {
						var k = arguments[V];
						for (var Z in k) Object.prototype.hasOwnProperty.call(k, Z) && (x[Z] = k[Z])
					}
					return x
				}, G.apply(this, arguments)
			}

			function te(x) {
				for (var V = 1; V < arguments.length; V++) {
					var k = arguments[V] != null ? Object(arguments[V]) : {},
						Z = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(k).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(k, ae).enumerable
					})), Z.forEach(function(ae) {
						le(x, ae, k[ae])
					})
				}
				return x
			}

			function le(x, V, k) {
				return V = ce(V), V in x ? Object.defineProperty(x, V, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[V] = k, x
			}

			function ce(x) {
				var V = Q(x, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function Q(x, V) {
				if (typeof x != "object" || x === null) return x;
				var k = x[Symbol.toPrimitive];
				if (k !== void 0) {
					var Z = k.call(x, V || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(x)
			}

			function F(x, V) {
				if (x == null) return {};
				var k = K(x, V),
					Z, ae;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(x);
					for (ae = 0; ae < pe.length; ae++) Z = pe[ae], !(V.indexOf(Z) >= 0) && (!Object.prototype.propertyIsEnumerable.call(x, Z) || (k[Z] = x[Z]))
				}
				return k
			}

			function K(x, V) {
				if (x == null) return {};
				var k = {},
					Z = Object.keys(x),
					ae, pe;
				for (pe = 0; pe < Z.length; pe++) ae = Z[pe], !(V.indexOf(ae) >= 0) && (k[ae] = x[ae]);
				return k
			}
			const j = "GLOBAL_ADD_DROPDOWN",
				U = (0, n.createStyledComponent)(({
					theme: x
				}) => ({
					"background-color": x.colors.blue[5]
				}), i.zx),
				A = ({
					disableProducts: x
				}) => {
					const V = O();
					return (0, e.useEffect)(() => (g().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						g().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), r().createElement(s.v2, {
						overflow: "auto",
						maxHeight: "80vh",
						width: "min(50vw, 340px)",
						whiteSpace: "normal",
						mr: 1,
						p: "8px 0",
						bottom: "auto",
						zIndex: 1200,
						minWidth: 240
					}, V.map(k => {
						const Z = k || {},
							{
								disableOn: ae,
								permissionCheck: pe
							} = Z,
							ue = F(Z, ["disableOn", "permissionCheck"]),
							ve = ae && x[ae],
							ne = te({}, ue, {
								disabled: ve
							});
						return pe ? r().createElement(o.Z, {
							key: k.title.id,
							edit: pe
						}, ({
							isEditable: Oe
						}) => Oe && r().createElement(S, ne)) : r().createElement(S, G({
							key: k.url
						}, ne))
					}))
				},
				N = ({
					disableProducts: x,
					topNavType: V
				}) => {
					const k = () => (0, c.tq)() || V === "icon-only" ? r().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(U, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : V === "text-icon" || V === "icon-only-with-add-button" ? r().createElement(i.zx, {
						type: "primary",
						mr: V === "text-icon" ? 2 : 3
					}, r().createElement(r().Fragment, null, r().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(d.cC, {
						id: "common.add"
					}))) : r().createElement(i.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(d.cC, {
						id: "common.add"
					}), " ", r().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement($, {
						role: "group",
						"data-testid": j
					}, r().createElement(f.Lt, {
						trigger: V === "baseline" ? r().createElement(q, null, r().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, c.tq)() && r().createElement(r().Fragment, null, r().createElement(d.cC, {
							id: "common.add"
						}), " ", r().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : k(),
						menu: r().createElement(A, {
							disableProducts: x
						})
					}))
				},
				$ = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				q = (0, n.createStyledComponent)(({
					theme: x
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: x.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, _.Yc)() ? x.colors.gray[1] : x.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, _.Yc)() ? x.colors.gray[8] : x.colors.gray[9]
					}
				}), u.zx);
			var ee = N,
				ie = ee
		},
		"../react/app/components/LoadingSuspense.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return w
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				i = t("../react/utils/translator.tsx"),
				_ = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/common/components/EmptyPage.jsx"),
				l = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const g = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(g))
				}, [])
			}

			function o(O) {
				useEventListener(g, () => {
					window.setTimeout(O, 0)
				}, {
					target: window
				})
			}

			function s(...O) {
				const [E, m] = O;
				React.useLayoutEffect(E, m), o(E)
			}

			function f(O) {
				const [E, m] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const C = window.setTimeout(() => m(!0), O);
					return () => window.clearTimeout(C)
				}, []), E
			}
			const d = ({
				loadingTimeout: O = 1e3,
				stillLoadingTimeout: E = 9e3
			}) => {
				const m = f(O),
					C = f(E);
				if (n(), !m && !C) return r().createElement(c.Z, null);
				const v = C ? r().createElement(i.cC, {
					id: "common.still_loading"
				}) : m ? r().createElement(i.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(_.Z, {
					size: 5
				}, r().createElement(u.ZC, {
					mr: 3
				}, r().createElement(a.g, {
					size: "2x"
				})), v)
			};
			var w = ({
				children: O
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(d, null)
			}, O)
		},
		"../react/app/components/Persistence/api.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				C8: function() {
					return l
				},
				Mn: function() {
					return s
				},
				Sp: function() {
					return o
				},
				dr: function() {
					return i
				},
				lt: function() {
					return _
				},
				m6: function() {
					return n
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
			const a = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (f) {
						console.error(f)
					}
				}, i = async f => {
					try {
						return await (await e.get(`/accounts/${f}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, _ = async (f, d) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: f,
								accountId: d
							}),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						return console.error(p), []
					}
				}, c = async (f, d) => {
					try {
						return await http.post(`/accounts/${f}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: d
							}),
							hideErrorAlert: !0
						}), !0
					} catch (p) {
						return console.error(p), !1
					}
				}, l = async f => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: f
							})
						})).body
					} catch (d) {
						console.error(d)
					}
				}, g = async f => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(f),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						console.error(d)
					}
				}, n = async f => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(f),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}, o = async f => {
					try {
						return await (await e.post(a + "/flags", {
							body: JSON.stringify(f)
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}, s = async (f, d) => {
					try {
						return await (await e.post(`${a}/dismissed-tasks`, {
							body: JSON.stringify({
								name: f,
								accountId: d
							}),
							hideErrorAlert: !0
						})).body
					} catch (p) {
						throw console.error(p), p
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return g
				},
				lp: function() {
					return O
				},
				Z_: function() {
					return m
				},
				r7: function() {
					return D
				},
				Tv: function() {
					return K
				},
				yZ: function() {
					return C.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(u),
				_ = t("../react/utils/bootstrap.ts"),
				c = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/app/components/Persistence/api.ts");
			const g = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function o(j) {
				for (var U = 1; U < arguments.length; U++) {
					var A = arguments[U] != null ? Object(arguments[U]) : {},
						N = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && N.push.apply(N, Object.getOwnPropertySymbols(A).filter(function($) {
						return Object.getOwnPropertyDescriptor(A, $).enumerable
					})), N.forEach(function($) {
						s(j, $, A[$])
					})
				}
				return j
			}

			function s(j, U, A) {
				return U = f(U), U in j ? Object.defineProperty(j, U, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[U] = A, j
			}

			function f(j) {
				var U = d(j, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function d(j, U) {
				if (typeof j != "object" || j === null) return j;
				var A = j[Symbol.toPrimitive];
				if (A !== void 0) {
					var N = A.call(j, U || "default");
					if (typeof N != "object") return N;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(j)
			}
			const p = {
					darkMode: "off",
					dismissedTasks: [],
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: [],
					flags: {
						hasEnabledSecurityNavigation: !1
					}
				},
				w = o({}, p, {
					isLoading: !0,
					remainingStarSlots: 10,
					isUpdatingFlags: !1,
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null,
						toggleSecurityNavigation: () => null,
						dismissTask: () => null
					}
				}),
				O = (0, e.createContext)(w),
				E = O.Consumer,
				m = ({
					children: j,
					onDarkModeChangeCb: U
				}) => {
					const [A, N] = (0, e.useState)(p), [$, q] = (0, e.useState)(w.isLoading), [ee, ie] = (0, e.useState)(!1), x = (0, _.$8)(), V = (0, a.p4)(ue => (0, c.wH)(ue)), [, k] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						x ? (0, l.yl)().then(ue => {
							if (ue) {
								var ve;
								N(ue), k(ue == null || (ve = ue.flags) === null || ve === void 0 ? void 0 : ve.hasEnabledSecurityNavigation), i().identify({
									hasEnabledSecurityNavigation: ue.flags.hasEnabledSecurityNavigation
								}), U(ue.darkMode)
							}
						}).finally(() => q(!1)) : q(!1)
					}, [x]);
					const Z = (ue, ve) => !!A.favorites.find(ne => ne.type === "zone" && ne.name === ue && ne.accountId === ve),
						ae = g - A.favorites.length,
						pe = ue => A.favorites.filter(ne => ne.type === "zone" && ne.accountId === ue).length < g;
					return r().createElement(O.Provider, {
						value: o({}, A, {
							isLoading: $,
							remainingStarSlots: ae,
							isUpdatingFlags: ee,
							actions: {
								canAccountStarZone: pe,
								isZoneStarred: Z,
								starZone: async (ue, ve) => {
									var ne;
									const Oe = !Z(ue, ve),
										Se = pe(ve);
									if (Oe && !Se) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Me = await (0, l.lt)(ue, ve);
									i().sendEvent("click star zone", {
										isStarring: Oe,
										totalStarredZones: Me.filter(je => je.accountId === ve && je.type === "zone").length,
										totalZones: V == null || (ne = V.paginationData) === null || ne === void 0 ? void 0 : ne.info.total_count
									}), N(o({}, A, {
										favorites: Me
									}))
								},
								toggleSecurityNavigation: async ue => {
									ie(!0), await (0, l.Sp)({
										hasEnabledSecurityNavigation: ue
									}), i().identify({
										hasEnabledSecurityNavigation: ue
									}), ie(!1), k(ue), N(o({}, A, {
										flags: {
											hasEnabledSecurityNavigation: ue
										}
									}))
								},
								setDarkMode: async ue => {
									const ve = await (0, l.C8)(ue);
									N(ve), U(ve.darkMode)
								},
								logRouteVisited: async ue => {
									var ve;
									const ne = await (0, l.n)(ue);
									N((ve = ne) !== null && ve !== void 0 ? ve : o({}, A))
								},
								viewChange: async ue => {
									const ve = await (0, l.m6)(ue);
									N(o({}, A, {
										viewedChanges: ve
									}))
								},
								dismissTask: async (ue, ve) => {
									const ne = await (0, l.Mn)(ue, ve);
									N(o({}, A, {
										dismissedTasks: ne
									}))
								}
							}
						})
					}, j)
				};
			var C = t("../react/app/components/Persistence/hooks.ts"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function M() {
				return M = Object.assign ? Object.assign.bind() : function(j) {
					for (var U = 1; U < arguments.length; U++) {
						var A = arguments[U];
						for (var N in A) Object.prototype.hasOwnProperty.call(A, N) && (j[N] = A[N])
					}
					return j
				}, M.apply(this, arguments)
			}

			function I(j, U) {
				if (j == null) return {};
				var A = P(j, U),
					N, $;
				if (Object.getOwnPropertySymbols) {
					var q = Object.getOwnPropertySymbols(j);
					for ($ = 0; $ < q.length; $++) N = q[$], !(U.indexOf(N) >= 0) && (!Object.prototype.propertyIsEnumerable.call(j, N) || (A[N] = j[N]))
				}
				return A
			}

			function P(j, U) {
				if (j == null) return {};
				var A = {},
					N = Object.keys(j),
					$, q;
				for (q = 0; q < N.length; q++) $ = N[q], !(U.indexOf($) >= 0) && (A[$] = j[$]);
				return A
			}
			const L = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var D = j => {
					let {
						isStarred: U,
						size: A = 16
					} = j, N = I(j, ["isStarred", "size"]);
					const $ = L[(0, v.Yc)() ? "dark" : "light"];
					return r().createElement(T.J, M({
						type: U ? "star" : "star-outline",
						color: U ? $.gold : $.gray,
						size: A
					}, N))
				},
				S = t("../node_modules/@cloudflare/elements/es/index.js");

			function G(j) {
				for (var U = 1; U < arguments.length; U++) {
					var A = arguments[U] != null ? Object(arguments[U]) : {},
						N = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && N.push.apply(N, Object.getOwnPropertySymbols(A).filter(function($) {
						return Object.getOwnPropertyDescriptor(A, $).enumerable
					})), N.forEach(function($) {
						te(j, $, A[$])
					})
				}
				return j
			}

			function te(j, U, A) {
				return U = le(U), U in j ? Object.defineProperty(j, U, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[U] = A, j
			}

			function le(j) {
				var U = ce(j, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function ce(j, U) {
				if (typeof j != "object" || j === null) return j;
				var A = j[Symbol.toPrimitive];
				if (A !== void 0) {
					var N = A.call(j, U || "default");
					if (typeof N != "object") return N;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(j)
			}
			const Q = {
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
			var K = (0, e.forwardRef)(({
				featurePreview: j = !1,
				isStarred: U,
				onClickFn: A,
				isDisabled: N,
				testId: $,
				buttonText: q,
				size: ee = "large",
				variant: ie = "pill"
			}, x) => {
				const [V, k] = (0, e.useState)(!1), Z = Q[(0, v.Yc)() ? "dark" : "light"][U && !j ? "active" : "default"], ae = G({}, ee === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, ee === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, ee === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), pe = {
					pill: "50vh",
					button: 4
				};
				return r().createElement(S.zx, {
					onMouseEnter: () => k(!0),
					onMouseLeave: () => k(!1),
					innerRef: x,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ae.paddingRight,
					gap: 1,
					pl: ae.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: pe[ie],
					border: "1px solid",
					cursor: j || N ? "default" : "pointer",
					backgroundColor: V ? Z.bgHover : Z.bg,
					color: Z.text,
					borderColor: Z.border,
					onClick: A,
					opacity: N ? .5 : 1,
					disabled: N,
					fontSize: ae.fontSize,
					height: ae.height,
					"data-testid": $
				}, r().createElement(D, {
					isStarred: j ? !1 : U,
					size: ae.starIconSize
				}), q)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				iY: function() {
					return E
				},
				us: function() {
					return D
				},
				wB: function() {
					return m
				},
				gw: function() {
					return le
				},
				dL: function() {
					return M
				},
				IU: function() {
					return T
				},
				Wq: function() {
					return G
				},
				fO: function() {
					return S
				},
				zJ: function() {
					return b
				},
				o_: function() {
					return L
				},
				jq: function() {
					return ce
				},
				hv: function() {
					return v
				},
				$n: function() {
					return C
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/utils/zoneLevelAccess.ts"),
				_ = t("../react/pages/stream/selectors.ts"),
				c = t("../react/pages/home/domain-registration/selectors.ts"),
				l = t("../react/pages/images/selectors.ts");
			const g = "r2_migrator_waitlist",
				n = "r2migrator",
				o = "r2",
				s = "r2_storage_migrator",
				f = "r2_storage_migrator",
				d = Q => getAccountEntitlement(Q, "r2.enabled"),
				p = Q => Boolean((0, a.Le)(Q, s, g)),
				w = Q => Boolean(getAccountFlipperFlagsChanges(Q, f, n)),
				O = Q => !!(0, i.b)(Q),
				E = Q => O(Q) ? (0, e.hT)(Q) : !0,
				m = (Q, F, K, j = "read") => {
					const U = (0, a.nA)(Q);
					return O(Q) ? (0, e.WL)(Q, (0, e.W9)(K, e.ZZ[j]), (0, e.j)(U == null ? void 0 : U.id)) : (0, u.Yj)(Q)(F)[j]
				},
				C = (Q, F, K, j = "read") => {
					const U = (0, a.nA)(Q),
						A = e.zs.includes(K);
					return O(Q) ? (0, e.WL)(Q, A ? K : (0, e.my)(K, e.ZZ[j === "edit" ? "update" : j]), (0, e.j)(U == null ? void 0 : U.id)) : (0, u.Yj)(Q)(F)[j === "update" ? "edit" : j]
				},
				v = Q => !!(0, _._Q)(Q),
				T = Q => (0, l.pT)(Q),
				M = Q => (0, l.pT)(Q) && (0, l.GH)(Q),
				I = Q => sourcingKitEnabledSelector(Q),
				P = Q => !!r2EnabledSelector(Q),
				L = Q => p(Q),
				b = Q => (0, r.$f)(Q, "rulesets.magic_transit_allowed"),
				D = Q => (0, r.$f)(Q, "flowtrackd.magic_custom_config_allowed"),
				S = Q => (0, r.$f)(Q, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				G = Q => (0, u.Le)(Q, "ddos_protection", "l4_rulesets"),
				te = Q => hasAccountEntitlements(Q, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				le = Q => (0, c.HO)(Q),
				ce = Q => !(0, r.yD)(Q) && !!C(Q, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(W, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a),
				i = t("../../../../node_modules/prop-types/index.js"),
				_ = t.n(i),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t.n(c),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(g),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				s = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				d = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				w = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				O = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = t.n(O),
				m = t("../react/common/actions/membershipActions.ts"),
				C = t("../react/utils/url.ts"),
				v = t("../react/app/components/Footer.tsx");

			function T(F) {
				for (var K = 1; K < arguments.length; K++) {
					var j = arguments[K] != null ? Object(arguments[K]) : {},
						U = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(j).filter(function(A) {
						return Object.getOwnPropertyDescriptor(j, A).enumerable
					})), U.forEach(function(A) {
						M(F, A, j[A])
					})
				}
				return F
			}

			function M(F, K, j) {
				return K = I(K), K in F ? Object.defineProperty(F, K, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[K] = j, F
			}

			function I(F) {
				var K = P(F, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function P(F, K) {
				if (typeof F != "object" || F === null) return F;
				var j = F[Symbol.toPrimitive];
				if (j !== void 0) {
					var U = j.call(F, K || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(F)
			}
			const L = (0, o.createComponent)(({
					type: F
				}) => ({
					height: F !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, o.createComponent)(({
					theme: F,
					margin: K,
					size: j = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: F.colors.gray[3],
					height: K ? "auto" : "100%",
					padding: K ? 0 : F.space[j > 1 ? j - 2 : 0],
					margin: K,
					justifyContent: "center",
					alignItems: "center"
				})),
				D = (0, o.createComponent)(() => ({
					textAlign: "left"
				})),
				S = (0, o.createComponent)(() => ({
					textAlign: "right"
				})),
				G = (0, o.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[6]
				})),
				te = (0, o.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[4]
				})),
				le = (0, o.createComponent)(({
					theme: F
				}) => ({
					fontSize: F.fontSizes[3]
				})),
				ce = (0, o.createComponent)(({
					theme: F
				}) => ({
					width: "100%",
					height: 125,
					marginTop: F.space[4],
					padding: F.space[2]
				}), "textarea");
			class Q extends r().Component {
				constructor(...K) {
					super(...K);
					M(this, "state", {
						value: "",
						submitted: !1
					}), M(this, "handleTextareaChange", j => {
						this.setState({
							value: j.target.value
						})
					}), M(this, "sendErrToSentry10", async () => {
						try {
							var j, U, A, N;
							const $ = ((j = window) === null || j === void 0 || (U = j.bootstrap) === null || U === void 0 || (A = U.data) === null || A === void 0 || (N = A.user) === null || N === void 0 ? void 0 : N.id) || "Unknown",
								q = this.props.eventId || f.eW(),
								ee = {
									name: $,
									email: `${$}@userid.com`,
									comments: this.state.value,
									eventId: q,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: T({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(ee)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch ($) {
							console.error($)
						}
					}), M(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), M(this, "renderContent", j => r().createElement(g.I18n, null, U => r().createElement(L, {
						type: j
					}, r().createElement(b, null, r().createElement(D, null, r().createElement(G, null, U.t("error.internal_issues")), r().createElement(te, null, U.t("error.help_us")), r().createElement(ce, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: A => this.handleTextareaChange(A),
						disabled: this.state.submitted,
						placeholder: U.t("error.give_feedback")
					}), r().createElement(S, null, !this.state.submitted && r().createElement(s.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, U.t("common.submit")), this.state.submitted && r().createElement(le, null, U.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: K,
						sentryTag: j,
						membershipsList: U
					} = this.props;
					console.error(`SomethingWrong: ${K}`);
					let A = "";
					const N = (0, C.e1)();
					if (N) {
						var $;
						const ee = await U({
								parameters: {
									status: "accepted"
								}
							}),
							ie = ee == null || ($ = ee.find(x => x.id === N)) === null || $ === void 0 ? void 0 : $.roles;
						ie && ie.length && (A = ie.join(", "))
					}
					const q = `ErrorBoundary - ${K}`;
					d.Tb(q, {
						tags: {
							errorBoundary: j,
							normalizedPath: (0, C.Fl)(window.location.pathname),
							roles: A.length ? A : void 0
						}
					}), E().sendEvent("something wrong", {
						error: K,
						roles: A.length ? A : void 0
					})
				}
				render() {
					const {
						type: K
					} = this.props;
					return K === "fullscreen" ? r().createElement("div", null, r().createElement(p.h4, null, r().createElement(a.Link, {
						to: "/"
					}, r().createElement(w.TR, null))), this.renderContent(K), r().createElement(v.Z, null)) : this.renderContent(K)
				}
			}
			Q.propTypes = {
				type: _().oneOf(["fullscreen", "page"]),
				error: _().oneOfType([_().string, _().object]),
				eventId: _().string,
				sentryTag: _().string,
				membershipsList: _().func
			}, y.Z = (0, c.connect)(() => ({}), {
				membershipsList: m.YT
			})(Q)
		},
		"../react/app/providers/storeContainer.js": function(W, y, t) {
			"use strict";
			t.d(y, {
				bh: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				i = t("../../../../node_modules/redux-persist/es/index.js"),
				_ = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				c = t("../react/app/rootReducer.js"),
				l = t("../react/app/redux/normalizer.js"),
				g = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				o = t("../react/app/reducerRegistry.js"),
				s = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				f = t("../react/common/sagas/index.js"),
				d = t("../react/app/redux/processActionMiddleware.js"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				w = t("../../../../node_modules/is-promise/index.js"),
				O = t.n(w);

			function E(G) {
				for (var te = 1; te < arguments.length; te++) {
					var le = arguments[te] != null ? Object(arguments[te]) : {},
						ce = Object.keys(le);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(le).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(le, Q).enumerable
					})), ce.forEach(function(Q) {
						m(G, Q, le[Q])
					})
				}
				return G
			}

			function m(G, te, le) {
				return te = C(te), te in G ? Object.defineProperty(G, te, {
					value: le,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[te] = le, G
			}

			function C(G) {
				var te = v(G, "string");
				return typeof te == "symbol" ? te : String(te)
			}

			function v(G, te) {
				if (typeof G != "object" || G === null) return G;
				var le = G[Symbol.toPrimitive];
				if (le !== void 0) {
					var ce = le.call(G, te || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (te === "string" ? String : Number)(G)
			}
			const T = {
					key: "cf-redux-store",
					storage: _.Z,
					whitelist: ["accountAccess", "invite"]
				},
				M = (0, s.ZP)(),
				P = [({
					dispatch: G
				}) => te => le => O()(le) ? le.then(ce => G(ce)) : te(le), M, u.Z, d.Z, l.qR],
				L = G => (0, i.Wq)(T, E({}, c.Z, G));

			function b() {
				const G = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					le = e.compose((0, e.applyMiddleware)(...P), g.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					ce = {},
					Q = (0, e.createStore)(L(o.Z.getReducers()), ce, le);
				M.run(f.Z), (0, i.p5)(Q);
				const K = (t.g.bootstrap || {}).data || {};
				return Q.dispatch((0, p.mW)("user", K.user)), Q
			}
			let D;
			o.Z.setChangeListener(G => {
				var te;
				D && ((te = D) === null || te === void 0 ? void 0 : te.replaceReducer) && (D.replaceReducer(L(G)), (0, i.p5)(D))
			});

			function S() {
				return D || (D = b()), D
			}
		},
		"../react/app/redux/index.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				TZ: function() {
					return a
				},
				UM: function() {
					return i
				},
				ZS: function() {
					return u
				},
				p4: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const a = () => (0, e.useStore)(),
				u = () => a().getState(),
				i = () => (0, e.useDispatch)(),
				_ = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(W, y, t) {
			"use strict";
			t.d(y, {
				$J: function() {
					return s
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return g
				},
				ZP: function() {
					return f
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = t.n(r);

			function u(d) {
				for (var p = 1; p < arguments.length; p++) {
					var w = arguments[p] != null ? Object(arguments[p]) : {},
						O = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(w).filter(function(E) {
						return Object.getOwnPropertyDescriptor(w, E).enumerable
					})), O.forEach(function(E) {
						i(d, E, w[E])
					})
				}
				return d
			}

			function i(d, p, w) {
				return p = _(p), p in d ? Object.defineProperty(d, p, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = w, d
			}

			function _(d) {
				var p = c(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function c(d, p) {
				if (typeof d != "object" || d === null) return d;
				var w = d[Symbol.toPrimitive];
				if (w !== void 0) {
					var O = w.call(d, p || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const l = u({}, r),
				g = (d, p, w, O = {}) => {
					const E = d === "delete" ? "del" : d.toLowerCase();
					return w && E !== "del" && (O.body = w), l[E](p, O)
				},
				n = (d, p) => (d.meta.params = p, d),
				o = (d, p, w, O, {
					body: E = {}
				}) => {
					const {
						result: m,
						messages: C,
						result_info: v
					} = E, T = Object.values(p);
					if (d.meta.method === "delete") {
						const M = T[T.length - 1];
						d.meta.id = typeof M == "object" ? M.id : M
					}
					return d.payload = m, C && (d.meta.messages = C), T.length && (d.meta.params = p), v && (d.meta.paginationData = {
						info: v,
						actionParameters: T,
						options: w[0],
						insertionOffset: 0
					}), d
				},
				s = (d, p, w, O, E) => (d.payload = E && E.body && E.body.errors, d.meta.messages = E && E.body && E.body.messages, d.meta.params = p, d.apiError = E, d);

			function f(d, p, w, O) {
				const E = (0, e.RM)(d, p, w, O).apiFetch(g).on("start", n).on("success", o).on("error", s),
					m = E.mock;
				return E.mock = C => (m((...v) => {
					const T = C(...v);
					return T && typeof T == "object" && "result" in T ? T : {
						result: T
					}
				}), E), E
			}
		},
		"../react/app/redux/normalizer.js": function(W, y, t) {
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
				a = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				i = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				_ = t.n(i);
			const c = i.static.from([{
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
					entityType: a.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: a.BB.rule,
					idProp: "tag"
				}, {
					entityType: a.BB.rules,
					to: a.BB.rule
				}, {
					entityType: a.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: a.BB.dstAddresses,
					to: a.BB.dstAddress
				}, {
					entityType: a.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: a.BB.dnsRecords,
					to: a.BB.dnsRecord
				}, {
					entityType: a.BB.zone,
					idProp: "tag"
				}]),
				l = o => o.entities,
				g = (...o) => (0, u.P1)(c, l, ...o),
				n = (0, u.QB)(c)
		},
		"../react/app/redux/utils.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				F: function() {
					return a
				},
				_: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const r = u => (i, _, c) => (0, e.SC)(i, _, c, {
					hideErrorAlert: !0
				}).catch(u),
				a = u => i => {
					if (i.status === u) return i;
					throw i
				}
		},
		"../react/common/actionTypes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return _
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
					return a
				},
				Yc: function() {
					return o
				},
				gM: function() {
					return u
				},
				lV: function() {
					return i
				},
				s1: function() {
					return l
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				i = "TOGGLE_ON",
				_ = "TOGGLE_OFF",
				c = "SET_ACTIVE",
				l = "CLEAR_ACTIVE",
				g = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/activeActions.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				I: function() {
					return r
				},
				n: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = (u, i) => ({
					type: e.HI,
					activeKey: u,
					activeValue: i
				}),
				a = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return s
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

			function a(f) {
				for (var d = 1; d < arguments.length; d++) {
					var p = arguments[d] != null ? Object(arguments[d]) : {},
						w = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(p).filter(function(O) {
						return Object.getOwnPropertyDescriptor(p, O).enumerable
					})), w.forEach(function(O) {
						u(f, O, p[O])
					})
				}
				return f
			}

			function u(f, d, p) {
				return d = i(d), d in f ? Object.defineProperty(f, d, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[d] = p, f
			}

			function i(f) {
				var d = _(f, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function _(f, d) {
				if (typeof f != "object" || f === null) return f;
				var p = f[Symbol.toPrimitive];
				if (p !== void 0) {
					var w = p.call(f, d || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(f)
			}
			const c = f => {
					const d = f.payload.map(p => a({}, p, {
						membershipId: p.id,
						id: p.account.id
					}));
					return a({}, f, {
						payload: d
					})
				},
				l = f => {
					const d = c(f);
					return Array.isArray(d.payload) ? a({}, f, {
						payload: d.payload[0]
					}) : a({}, f, {
						payload: null
					})
				},
				g = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", c),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (...f) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: f
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", l)
		},
		"../react/common/actions/modalActions.ts": function(W, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				closeModal: function() {
					return u
				},
				openModal: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function a(i, _, c = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: i,
						props: _
					},
					options: c
				}
			}

			function u(i) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: i
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(W, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				add: function() {
					return i
				},
				error: function() {
					return g
				},
				info: function() {
					return c
				},
				success: function() {
					return _
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

			function a(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let u = 0;

			function i(n, o, s = {}) {
				return s = s || {},
					function(f) {
						let d = u++,
							p = {
								id: d,
								type: n,
								message: o,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									f(a(d)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						f(r(p))
					}
			}

			function _(n, o) {
				return i("success", n, o)
			}

			function c(n, o) {
				return i("info", n, o)
			}

			function l(n, o) {
				return i("warning", n, o)
			}

			function g(n, o) {
				return i("error", n, o)
			}
		},
		"../react/common/actions/userActions.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				BT: function() {
					return c
				},
				Ut: function() {
					return O
				},
				V_: function() {
					return E
				},
				Y9: function() {
					return p
				},
				Z0: function() {
					return C
				},
				mp: function() {
					return w
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

			function a(v) {
				for (var T = 1; T < arguments.length; T++) {
					var M = arguments[T] != null ? Object(arguments[T]) : {},
						I = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), I.forEach(function(P) {
						u(v, P, M[P])
					})
				}
				return v
			}

			function u(v, T, M) {
				return T = i(T), T in v ? Object.defineProperty(v, T, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[T] = M, v
			}

			function i(v) {
				var T = _(v, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function _(v, T) {
				if (typeof v != "object" || v === null) return v;
				var M = v[Symbol.toPrimitive];
				if (M !== void 0) {
					var I = M.call(v, T || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(v)
			}
			const c = (0, e.C)("user").get`/user`,
				l = (0, e.C)("user").patch`/user`,
				g = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				f = (0, e.C)("user").delete`/user/two_factor_authentication`,
				d = (0, e.C)("user").put`/user/email`;

			function p(...v) {
				return d(...v)
			}
			const w = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				O = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(v => a({}, v, {
					body: a({}, v.body, {
						result: {}
					})
				}))),
				E = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				m = (0, e.C)("userDetails").get`/user/details`,
				C = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				we: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				i = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = t.n(i),
				c = t("../react/utils/url.ts"),
				l = t("../react/pages/home/members/utils.ts");

			function g(E) {
				for (var m = 1; m < arguments.length; m++) {
					var C = arguments[m] != null ? Object(arguments[m]) : {},
						v = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(C).filter(function(T) {
						return Object.getOwnPropertyDescriptor(C, T).enumerable
					})), v.forEach(function(T) {
						n(E, T, C[T])
					})
				}
				return E
			}

			function n(E, m, C) {
				return m = o(m), m in E ? Object.defineProperty(E, m, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[m] = C, E
			}

			function o(E) {
				var m = s(E, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function s(E, m) {
				if (typeof E != "object" || E === null) return E;
				var C = E[Symbol.toPrimitive];
				if (C !== void 0) {
					var v = C.call(E, m || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(E)
			}
			const f = u().createContext(void 0),
				d = 60 * 1e3,
				p = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]);

			function w({
				children: E,
				userID: m,
				isUserInDSR: C
			}) {
				const [v, T] = (0, a.useState)({
					policies: null,
					isLoading: !0,
					isLoadingSkippedByUserID: !1,
					error: null,
					lastFetchedAt: null
				}), M = (0, a.useCallback)(async (le = !1) => {
					var ce;
					const Q = !!m,
						F = p.has((ce = m) !== null && ce !== void 0 ? ce : "");
					if (!(Q && !F && (le || !v.lastFetchedAt || Date.now() - v.lastFetchedAt > d))) {
						T(A => g({}, A, {
							isLoadingSkippedByUserID: F
						}));
						return
					}
					T(A => g({}, A, {
						isLoading: !0
					}));
					try {
						var j, U;
						const A = await fetch("/api/v4/user/iam/policies");
						if (!A.ok) throw new Error(`Failed to fetch authz policies: ${A.status}`);
						const N = (j = await A.json()) === null || j === void 0 || (U = j.result) === null || U === void 0 ? void 0 : U.policies;
						if (!N || !(0, e.isArray)(N) || N.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(N)}`);
						T({
							policies: N,
							isLoading: !1,
							isLoadingSkippedByUserID: !1,
							error: null,
							lastFetchedAt: Date.now()
						})
					} catch (A) {
						const N = A instanceof Error ? A.message : JSON.stringify(A);
						T($ => g({}, $, {
							isLoading: !1,
							error: N
						}))
					}
				}, [m, v.lastFetchedAt]);
				(0, a.useEffect)(() => {
					M()
				}, [M]);
				const I = (0, i.useHistory)(),
					P = (0, c.uW)(I.location.pathname),
					[L, b] = (0, a.useState)({
						orgScopes: null,
						isLoading: !1,
						error: null
					}),
					D = (0, a.useCallback)(async () => {
						if (!!m && !!P) {
							b(F => g({}, F, {
								isLoading: !0
							}));
							try {
								var Q;
								const F = await fetch(`/api/v4/accounts/${P}/organizations`);
								if (!F.ok) throw new Error(`Failed to fetch account parent Orgs: ${F.status}`);
								const K = (Q = await F.json()) === null || Q === void 0 ? void 0 : Q.result;
								if (K === void 0 || !(0, e.isArray)(K)) throw new Error(`Unexpected parent Orgs API response shape: ${JSON.stringify(K)}`);
								const j = K.map(A => {
										var N;
										return {
											tag: A.id,
											parentTag: (N = A.parent) === null || N === void 0 ? void 0 : N.id
										}
									}),
									U = [];
								j.forEach(A => {
									A.parentTag || U.push(`com.cloudflare.api.tenant.${A.tag}`), U.push(`com.cloudflare.api.tenant.unit.${A.tag}`)
								}), b({
									orgScopes: U,
									isLoading: !1,
									error: null
								})
							} catch (F) {
								const K = F instanceof Error ? F.message : JSON.stringify(F);
								b(j => g({}, j, {
									isLoading: !1,
									error: K
								}))
							}
						}
					}, [m, P]);
				(0, a.useEffect)(() => {
					D()
				}, [D]);
				const [S, G] = (0, a.useState)({
					permissionGroups: null,
					isLoading: !1,
					error: null
				});
				(0, a.useEffect)(() => {
					(async () => {
						const ce = 10,
							Q = 100;
						if (!P) {
							G({
								permissionGroups: null,
								isLoading: !1,
								error: null
							});
							return
						}
						G(F => g({}, F, {
							isLoading: !0
						}));
						for (let F = 0; F <= ce; F++) {
							const K = (0, l.vq)(P);
							if (!K || K.length === 0) {
								F === ce && G(U => g({}, U, {
									isLoading: !1,
									error: "failed loading authz policy permission groups"
								}));
								const j = Q * Math.pow(2, F);
								await new Promise(U => {
									setTimeout(U, j)
								})
							} else {
								K.sort((j, U) => j.id.localeCompare(U.id)), G({
									permissionGroups: K,
									isLoading: !1,
									error: null
								});
								break
							}
						}
					})()
				}, [P]);
				const te = {
					isUserInDSR: C,
					contextAccountTag: P,
					contextAccountOrgsState: L,
					allPermissionGroupsState: S,
					policiesState: v,
					refreshPolicies: () => M(!0)
				};
				return u().createElement(f.Provider, {
					value: te
				}, E)
			}
			const O = () => {
				const E = useContext(f);
				if (!E) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
				return E.refreshPolicies
			}
		},
		"../react/common/components/AccessCheck/constants.ts": function(W, y, t) {
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
					return _
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
					return i
				}
			});
			const e = "com.cloudflare.api.account",
				r = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				i = ["com.cloudflare.api.app.manage"];
			let _ = function(s) {
				return s.read = "read", s.list = "list", s.create = "create", s.update = "update", s.delete = "delete", s.sign = "sign", s.refresh = "refresh", s
			}({});
			const c = (s, f) => `${r}${s?s+".":""}${f}`,
				l = (s, f) => `${u}${s?s+".":""}${f}`,
				g = (s, f) => `${a}${s}.${f}`,
				n = (s = "") => `${r}${s}`,
				o = (s = "") => `${u}${s}`
		},
		"../react/common/components/AccessCheck/index.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				zs: function() {
					return c.zs
				},
				hT: function() {
					return i.hT
				},
				WL: function() {
					return i.WL
				},
				kd: function() {
					return i.kd
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
					const s = !!(0, r.P)();
					let f;
					typeof g == "boolean" && g !== void 0 && s ? f = {
						read: g,
						list: g,
						create: g,
						update: g,
						delete: g,
						sign: g
					} : f = (0, e.Z)(l);
					const d = o || n;
					return d ? d(f) : null
				},
				i = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				_ = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				c = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(W, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				i = t("../react/pages/zone-versioning/selectors.ts");

			function _(c) {
				const {
					read: l,
					edit: g
				} = (0, a.p4)(u.Yj)(c);
				let n = g;
				if (c != "zone_versioning") {
					const s = (0, a.p4)(i.G);
					(s == null ? void 0 : s.isLocked) && (n = !1)
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
			y.Z = _
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				WL: function() {
					return f
				},
				hT: function() {
					return w
				},
				kd: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../../../../node_modules/lodash-es/isString.js"),
				a = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				i = t("../react/pages/zone-versioning/selectors.ts"),
				_ = t("../react/common/selectors/accountSelectors.ts");
			const c = {
					allow: "allow",
					deny: "deny"
				},
				l = 0,
				g = 1,
				n = 2,
				o = 3;

			function s(I, P, L, b) {
				let D = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					S;
				for (S in D) D[S] = f(I, `${P}.${S}`, L, b);
				return D
			}

			function f(I, P, L, b) {
				var D;
				if (d(P) && !p(P)) {
					const ce = (0, i.G)(I);
					if (ce == null ? void 0 : ce.isLocked) return !1
				}
				const S = (D = (0, _.D0)(I)) === null || D === void 0 ? void 0 : D.id,
					G = S ? [`com.cloudflare.api.account.${S}`] : void 0,
					te = (0, a.vq)(S);
				return !!O(I, te, P, L, b || G)
			}

			function d(I) {
				return ![u.ZZ.read, u.ZZ.list].some(P => I.endsWith(P))
			}

			function p(I) {
				return I.includes("zone.versioning")
			}

			function w(I) {
				const P = (0, _.Ko)(I);
				let L = !1;
				return P == null || P.forEach(b => {
					b.access === c.allow && b.permission_groups.forEach(D => {
						var S;
						(D == null || (S = D.meta) === null || S === void 0 ? void 0 : S.scopes) === u.u1 && (L = !0)
					})
				}), L
			}

			function O(I, P, L, b, D) {
				const S = (0, _.Ko)(I),
					G = {};
				S == null || S.forEach(Q => {
					var F;
					const K = Q.access;
					let j = l;
					if (L && Q.permission_groups.forEach(U => {
							var A, N;
							P == null || (A = P.find($ => $.id === U.id)) === null || A === void 0 || (N = A.permissions) === null || N === void 0 || N.forEach($ => {
								j = Math.max(j, m($, L))
							})
						}), j !== l && !!b) {
						let U = l;
						Q.resource_groups.forEach(A => {
							U = Math.max(U, v(A.scope, b, D))
						}), j = U === l ? U : j + U
					}(G == null || (F = G[K]) === null || F === void 0 ? void 0 : F[j]) || (0, e.Z)(G, [K, j], []), G[K][j].push(Q)
				});
				const te = G[c.allow] && Object.keys(G[c.allow]).map(Q => parseInt(Q)),
					le = G[c.deny] && Object.keys(G[c.deny]).map(Q => parseInt(Q)),
					ce = Math.max.apply(Math, te);
				return ce === l || Math.max.apply(Math, le) >= ce ? null : G[c.allow][ce]
			}

			function E(I, P, L, b, D) {
				const S = {};
				I == null || I.forEach(ce => {
					var Q;
					const F = ce.access;
					let K = l;
					if (L && ce.roles.forEach(j => {
							var U, A;
							P == null || (U = P.find(N => N.id === j.id)) === null || U === void 0 || (A = U.permissions) === null || A === void 0 || A.forEach(N => {
								K = Math.max(K, m(N, L))
							})
						}), K !== l && !!b) {
						let j = l;
						ce.scopes.forEach(U => {
							j = Math.max(j, v(U, b, D))
						}), K = j === l ? j : K + j
					}(S == null || (Q = S[F]) === null || Q === void 0 ? void 0 : Q[K]) || set(S, [F, K], []), S[F][K].push(ce)
				});
				const G = S[c.allow] && Object.keys(S[c.allow]).map(ce => parseInt(ce)),
					te = S[c.deny] && Object.keys(S[c.deny]).map(ce => parseInt(ce)),
					le = Math.max.apply(Math, G);
				return le === l || Math.max.apply(Math, te) >= le ? null : S[c.allow][le]
			}

			function m(I, P) {
				if (I.key === P || C(I.key, P)) return o;
				for (const L of (I == null ? void 0 : I.implies) || []) {
					let b = m(L, P);
					if (b > l) return b
				}
				return l
			}

			function C(I, P) {
				const L = P == null ? void 0 : P.lastIndexOf(".");
				return L === -1 ? !1 : (P == null ? void 0 : P.substring(0, L)) + ".*" === I
			}

			function v(I, P, L) {
				var b;
				let D = l;
				if (I == null || (b = I.objects) === null || b === void 0 || b.forEach(S => {
						D = Math.max(D, M(S, P))
					}), D === l) return D;
				if (I.key !== "*") switch (!0) {
					case T(I.key, L) > l:
					case (!(L == null ? void 0 : L.length) && D === o):
						break;
					case (D === g && T(I.key, [P]) > l):
						D = T(I.key, [P]);
						break;
					default:
						return l
				}
				for (const S of I.subset_of || [])
					if (T(S.key, L) === l) return l;
				return D
			}

			function T(I, P = []) {
				for (const L of P || []) {
					if (I === L) return o;
					if (C(I, L)) return n
				}
				return l
			}

			function M(I, P) {
				const L = (0, r.Z)(I) ? I : I.key;
				return L === P ? o : L === "*" || I === "*" ? g : C(L, P) ? n : l
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(W, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const u = _ => {
					if (typeof _ != "string") throw new Error("invalid Param Type provided");
					const c = _.slice(1).split(":");
					if (c.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: c[0],
						value: c[1]
					}
				},
				i = (_, c) => {
					const {
						resourceId: l,
						accountId: g,
						legacyPermission: n
					} = c;
					let {
						read: o,
						edit: s
					} = c;
					const f = {};
					n && (s = `#${n}:edit`, o = `#${n}:read`);
					const d = l || g;
					if (o) {
						const p = Array.isArray(o) ? o : [o];
						f.isReadable = p.some(w => {
							const O = u(w);
							return (0, a.DT)(_, d, E => !!(E[O.key] && E[O.key][O.value]))
						})
					}
					if (s) {
						const p = Array.isArray(s) ? s : [s];
						f.isEditable = p.some(w => {
							const O = u(w);
							return (0, a.DT)(_, d, E => !!(E[O.key] && E[O.key][O.value]))
						})
					}
					return f
				};
			y.Z = (0, e.connect)(i)
		},
		"../react/common/components/AccessControl/index.js": function(W, y, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function i(o) {
				for (var s = 1; s < arguments.length; s++) {
					var f = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(f).filter(function(p) {
						return Object.getOwnPropertyDescriptor(f, p).enumerable
					})), d.forEach(function(p) {
						_(o, p, f[p])
					})
				}
				return o
			}

			function _(o, s, f) {
				return s = c(s), s in o ? Object.defineProperty(o, s, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = f, o
			}

			function c(o) {
				var s = l(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function l(o, s) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var d = f.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}

			function g(o) {
				const f = ["isReadable", "isEditable"].reduce((d, p) => o.hasOwnProperty(p) ? i({}, d, {
					[p]: o[p]
				}) : d, {});
				return o.children(f)
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
			const n = (0, a.Z)((0, u.Z)(g));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				PP: function() {
					return o
				},
				RJ: function() {
					return c
				},
				tz: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				i = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const _ = () => l.test(window.location.pathname) || a.E.has(u.Qq),
				c = () => a.E.get(u.Qq),
				l = /^\/login\/apple(\/)?/,
				n = [l, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				o = () => {
					let f = !1;
					n.forEach(p => {
						if (p.test(window.location.pathname)) {
							f = !0;
							return
						}
					});
					const d = _() && f;
					return d && (0, i.C8)(i.LF.OFF), d
				},
				s = f => {
					f && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let d = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					f && (d = d + `&jwt=${f}`), window.location.href = d
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(W, y, t) {
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
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				_ = t.n(i),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = t("../react/common/components/Dropdown/index.tsx"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(p) {
					for (var w = 1; w < arguments.length; w++) {
						var O = arguments[w];
						for (var E in O) Object.prototype.hasOwnProperty.call(O, E) && (p[E] = O[E])
					}
					return p
				}, n.apply(this, arguments)
			}

			function o(p, w) {
				if (p == null) return {};
				var O = s(p, w),
					E, m;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(p);
					for (m = 0; m < C.length; m++) E = C[m], !(w.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, E) || (O[E] = p[E]))
				}
				return O
			}

			function s(p, w) {
				if (p == null) return {};
				var O = {},
					E = Object.keys(p),
					m, C;
				for (C = 0; C < E.length; C++) m = E[C], !(w.indexOf(m) >= 0) && (O[m] = p[m]);
				return O
			}
			const f = (0, c.createStyledComponent)(({
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
					menu: w,
					containerProps: O,
					disabled: E,
					disabledDropdown: m = E
				} = p, C = o(p, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: v
				} = (0, i.useI18n)();
				return r().createElement(f, n({}, O, {
					role: "group"
				}), r().createElement(a.zx, n({}, C, {
					disabled: E
				})), r().createElement(l.Lt, {
					trigger: r().createElement(a.zx, {
						type: C.type,
						"aria-haspopup": "menu",
						disabled: m
					}, r().createElement(u.J, {
						type: "caret-down",
						label: v("common.more"),
						size: 12
					})),
					menu: w
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				i = t("../react/common/hooks/useIntersectionObserver.ts");

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(l) {
					for (var g = 1; g < arguments.length; g++) {
						var n = arguments[g];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (l[o] = n[o])
					}
					return l
				}, _.apply(this, arguments)
			}

			function c(l) {
				const g = (0, e.useRef)(null),
					[n, o] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const f = g.current;
					if (f) {
						const {
							bottom: d
						} = f.getBoundingClientRect();
						d > window.innerHeight && o(!0)
					}
				}, []);
				const s = (0, i.S)(f => {
					for (const d of f) d.intersectionRatio < 1 && o(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const f = g.current;
					if (f && s) return s.observe(f), () => {
						s.unobserve(f)
					}
				}, [s]), r().createElement(a.ZC, _({
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
		"../react/common/components/Dropdown/MenuItem.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return w
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t.n(u);

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(O) {
					for (var E = 1; E < arguments.length; E++) {
						var m = arguments[E];
						for (var C in m) Object.prototype.hasOwnProperty.call(m, C) && (O[C] = m[C])
					}
					return O
				}, _.apply(this, arguments)
			}

			function c(O, E) {
				if (O == null) return {};
				var m = l(O, E),
					C, v;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(O);
					for (v = 0; v < T.length; v++) C = T[v], !(E.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, C) || (m[C] = O[C]))
				}
				return m
			}

			function l(O, E) {
				if (O == null) return {};
				var m = {},
					C = Object.keys(O),
					v, T;
				for (T = 0; T < C.length; T++) v = C[T], !(E.indexOf(v) >= 0) && (m[v] = O[v]);
				return m
			}

			function g(O) {
				for (var E = 1; E < arguments.length; E++) {
					var m = arguments[E] != null ? Object(arguments[E]) : {},
						C = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(m).filter(function(v) {
						return Object.getOwnPropertyDescriptor(m, v).enumerable
					})), C.forEach(function(v) {
						n(O, v, m[v])
					})
				}
				return O
			}

			function n(O, E, m) {
				return E = o(E), E in O ? Object.defineProperty(O, E, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[E] = m, O
			}

			function o(O) {
				var E = s(O, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function s(O, E) {
				if (typeof O != "object" || O === null) return O;
				var m = O[Symbol.toPrimitive];
				if (m !== void 0) {
					var C = m.call(O, E || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(O)
			}
			const f = ({
					theme: O
				}) => {
					const E = {
						cursor: "pointer",
						background: O.colors.gray[9],
						color: O.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: O.space[2],
						background: O.colors.background,
						color: O.colors.gray[3],
						fontSize: O.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': E,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': g({}, E, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: O.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				d = (0, a.createComponent)(f, "a"),
				p = (0, a.createComponent)(f, "button");

			function w(O) {
				let {
					disabled: E = !1
				} = O, m = c(O, ["disabled"]);
				const C = (0, u.useHistory)(),
					v = {
						role: "menuitem"
					};
				if ("href" in m && typeof m.href == "string") return r().createElement(d, _({
					"aria-disabled": E
				}, v, m, {
					href: E ? void 0 : m.href,
					onClick: M => {
						var I;
						if (E) return M.stopPropagation();
						M.preventDefault(), (I = m.onClick) === null || I === void 0 || I.call(m, M), C.push(m.href)
					}
				}));
				var T;
				return r().createElement(p, _({
					type: (T = m.type) !== null && T !== void 0 ? T : "button"
				}, v, m, {
					disabled: E
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(W, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(a),
				i = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const _ = ({
				children: c
			}) => r().createElement(i.xu, {
				height: 411
			}, c);
			_.propTypes = {
				children: u().node
			}, y.Z = _
		},
		"../react/common/components/ModalManager.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return d
				},
				dd: function() {
					return s
				},
				vR: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = p => p.application.modals;
			var i = t("../react/common/actions/modalActions.ts"),
				_ = t("../../../../node_modules/swr/core/dist/index.mjs"),
				c = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function l() {
				return l = Object.assign ? Object.assign.bind() : function(p) {
					for (var w = 1; w < arguments.length; w++) {
						var O = arguments[w];
						for (var E in O) Object.prototype.hasOwnProperty.call(O, E) && (p[E] = O[E])
					}
					return p
				}, l.apply(this, arguments)
			}
			const g = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: w,
						closeModal: O
					} = this.props;
					return r().createElement(r().Fragment, null, w.map(({
						ModalComponent: E,
						props: m = {},
						id: C
					}) => {
						const v = () => {
							typeof m.onClose == "function" && m.onClose(), O(E)
						};
						return r().createElement(g.Provider, {
							key: C,
							value: {
								closeModal: v
							}
						}, r().createElement(_.J$, {
							value: c.ZP
						}, r().createElement(E, l({}, m, {
							isOpen: !0,
							closeModal: v
						}))))
					}))
				}
			}

			function o() {
				const p = r().useContext(g);
				if (!p) throw new Error("useModalContext must be used within a ModalContext");
				return p
			}

			function s() {
				const p = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...w) {
						return p(i.openModal(...w))
					}, [p]),
					closeModal: (0, e.useCallback)(function(...w) {
						return p(i.closeModal(...w))
					}, [p])
				}
			}
			var d = (0, a.connect)(p => ({
				modals: u(p)
			}), i)(n)
		},
		"../react/common/components/Page.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function u(i) {
				return r().createElement(a.T3, i)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(W, y, t) {
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
					return _
				},
				ZI: function() {
					return i
				},
				if: function() {
					return r
				},
				q6: function() {
					return a
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
				a = "date-from",
				u = "date-to",
				i = "from",
				_ = "to",
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
		"../react/common/components/api-tokens/sparrowEvents.ts": function(W, y, t) {
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

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), f.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var f = s.call(n, o || "default");
					if (typeof f != "object") return f;
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
					r().sendEvent(n, a({}, o || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(W, y, t) {
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
		"../react/common/constants/billing/index.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Gq: function() {
					return u
				},
				g$: function() {
					return a
				},
				WX: function() {
					return e
				},
				E0: function() {
					return g
				},
				Hw: function() {
					return _
				},
				Ed: function() {
					return i
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return f
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
				a = "automatic_platform_optimization",
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
				i = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				_ = {
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
				s = t("../react/common/constants/billing/workers.ts");
			const f = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return i
				},
				SO: function() {
					return a
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
				a = {
					BILLING: "billing"
				},
				u = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				i = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Dk: function() {
					return f
				},
				Dy: function() {
					return d
				},
				E_: function() {
					return _
				},
				Lv: function() {
					return p
				},
				S4: function() {
					return i
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
					return w
				},
				sJ: function() {
					return s
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				i = "degraded",
				_ = "critical",
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
				s = "marketing-pt",
				f = () => {
					const E = a.Z.get(s);
					if (!!E) return o[E]
				},
				d = ["gov"],
				p = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				w = "banner-notification-interactions",
				O = null
		},
		"../react/common/constants/index.ts": function(W, y, t) {
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
		"../react/common/constants/roles.ts": function(W, y, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return e
				},
				dy: function() {
					return r
				},
				sO: function() {
					return a
				},
				x4: function() {
					return u
				}
			});
			let e = function(i) {
				return i.DELETE = "delete", i.CREATE = "create", i.GET = "get", i.UPDATE = "update", i
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
				a = (i, _, c = !1) => {
					var l;
					return `${_} ${(l=r[i])!==null&&l!==void 0?l:i} ${c?"ruleset":"rule"}${_===e.GET?"s":""}`
				},
				u = () => {
					var i;
					return (i = Object.keys(r).reduce((_, c) => {
						const l = Object.values(e).reduce((g, n) => (g.push(a(c, n)), g.push(a(c, n, !0)), g), []);
						return _.concat(l)
					}, [])) === null || i === void 0 ? void 0 : i.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return _
				},
				F: function() {
					return i
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a);

			function i() {
				var c;
				const {
					accountId: l
				} = (0, a.useParams)(), g = (0, e.p4)(r.D0);
				if (l === void 0 && !g) throw new Error("Account ID not found in URL params");
				return (c = l) !== null && c !== void 0 ? c : g == null ? void 0 : g.id
			}

			function _() {
				const c = i();
				return (0, e.p4)(l => (0, r.Py)(l, c))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(W, y, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const i = _ => {
				const c = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(_)), n => {
					c((0, e.I)(_, n))
				}]
			};
			y.Z = i
		},
		"../react/common/hooks/useCachedState.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(i, {
				key: _,
				cache: c = a.E,
				ttl: l
			} = {}) {
				var g;
				const n = _ !== void 0 && c.get(_),
					[o, s] = (0, e.useState)((g = n) !== null && g !== void 0 ? g : i);
				return [o, d => {
					s(p => (d instanceof Function && (d = d(p)), _ !== void 0 && c.set(_, d, l), d))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(W, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(a) {
				return (0, e.qf)(a)
			}
			y.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(u, {
				root: i,
				rootMargin: _,
				threshold: c
			} = {}) {
				const l = (0, e.useRef)(null);

				function g() {
					return l.current === null && (l.current = new IntersectionObserver(u, {
						root: i,
						rootMargin: _,
						threshold: c
					})), l.current
				}
				return (0, e.useEffect)(() => (l.current = new IntersectionObserver(u, {
					root: i,
					rootMargin: _,
					threshold: c
				}), () => {
					var n;
					(n = l.current) === null || n === void 0 || n.disconnect()
				}), [u, i, _, c]), g()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(W, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(u) {
				const i = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					i.current = u
				}, [u]), i.current
			}
			y.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(W, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(u) {
				return (0, e.p4)(i => (0, r.rV)(i, u))
			}
			y.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Uh: function() {
					return i
				},
				ez: function() {
					return u
				},
				oV: function() {
					return _
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
				var l = a(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function a(c, l) {
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
			class i extends u {
				constructor(l) {
					super(l, `Event not allowed: "${l}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class _ extends u {
				constructor(l, g) {
					super(l, `Found invalid properties on event: "${l}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = g
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Au: function() {
					return rt
				},
				B: function() {
					return je
				},
				B3: function() {
					return Fe
				},
				BG: function() {
					return I
				},
				Bp: function() {
					return ft
				},
				CV: function() {
					return dt
				},
				D0: function() {
					return C
				},
				DT: function() {
					return x
				},
				EL: function() {
					return $
				},
				EU: function() {
					return k
				},
				GE: function() {
					return Et
				},
				Ko: function() {
					return ie
				},
				Kx: function() {
					return b
				},
				Le: function() {
					return D
				},
				O4: function() {
					return Ve
				},
				Ou: function() {
					return j
				},
				Py: function() {
					return ke
				},
				QI: function() {
					return ot
				},
				Qf: function() {
					return T
				},
				RO: function() {
					return Se
				},
				T3: function() {
					return ut
				},
				T8: function() {
					return M
				},
				UX: function() {
					return N
				},
				VP: function() {
					return Be
				},
				Xo: function() {
					return pt
				},
				Xu: function() {
					return Q
				},
				Yi: function() {
					return it
				},
				Yj: function() {
					return ee
				},
				Zu: function() {
					return q
				},
				bC: function() {
					return Z
				},
				f8: function() {
					return te
				},
				hI: function() {
					return st
				},
				hN: function() {
					return L
				},
				hX: function() {
					return Me
				},
				iq: function() {
					return Je
				},
				nE: function() {
					return P
				},
				oD: function() {
					return A
				},
				oI: function() {
					return G
				},
				oJ: function() {
					return Ae
				},
				tM: function() {
					return U
				},
				uF: function() {
					return F
				},
				ut: function() {
					return We
				},
				vU: function() {
					return yt
				},
				wQ: function() {
					return ue
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				a = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				i = t.n(u),
				_ = t("../../../../node_modules/reselect/lib/index.js"),
				c = t("../../../../node_modules/moment/moment.js"),
				l = t.n(c),
				g = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				o = t("../react/common/selectors/userSelectors.ts"),
				s = t("../react/common/selectors/entitlementsSelectors.ts"),
				f = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/common/constants/roles.ts"),
				p = t("../react/common/utils/hasRole.ts");

			function w(H) {
				for (var de = 1; de < arguments.length; de++) {
					var ye = arguments[de] != null ? Object(arguments[de]) : {},
						Ie = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(ye).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(ye, Ne).enumerable
					})), Ie.forEach(function(Ne) {
						O(H, Ne, ye[Ne])
					})
				}
				return H
			}

			function O(H, de, ye) {
				return de = E(de), de in H ? Object.defineProperty(H, de, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[de] = ye, H
			}

			function E(H) {
				var de = m(H, "string");
				return typeof de == "symbol" ? de : String(de)
			}

			function m(H, de) {
				if (typeof H != "object" || H === null) return H;
				var ye = H[Symbol.toPrimitive];
				if (ye !== void 0) {
					var Ie = ye.call(H, de || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (de === "string" ? String : Number)(H)
			}
			const C = H => {
					const de = F(H);
					return de == null ? void 0 : de.account
				},
				v = H => {
					const de = (0, o.PR)(H);
					if (de) {
						const ye = de.id;
						return H.accountAccess[ye] || {}
					}
					return {}
				},
				T = H => H.accountsDetailed,
				M = (0, n.P1)("accountsDetailed", T),
				I = H => H.memberships,
				P = (0, _.P1)((0, n.P1)("memberships", I), f.U, (H, de) => !!de && !!H ? H.filter(ye => de.includes(ye.id)) : H),
				L = H => H.accountFlags && H.accountFlags.data,
				b = H => H.accountFlags,
				D = (H, de, ye) => {
					const Ie = L(H);
					return !Ie || !Ie[de] ? null : Ie[de][ye]
				},
				S = H => H.accountFlags.isRequesting,
				G = (H, ...de) => a()(H, ["accountFlagsChanges", "data", ...de]),
				te = H => H.accountFlagsChanges.isRequesting,
				le = (0, _.P1)(L, b, (H, de) => ({
					data: H,
					meta: de
				})),
				ce = (H, de, ye) => !!(isEnterpriseSSEnabledSelector(H) && D(H, de, ye)),
				Q = H => H.membership,
				F = (0, n.P1)("membership", Q),
				K = (0, _.P1)(F, Q, (H, de) => ({
					data: H,
					meta: de
				})),
				j = H => {
					const {
						roles: de = []
					} = F(H) || {};
					return Boolean(de.find(ye => ye === "Super Administrator - All Privileges" || ye === "Billing"))
				},
				U = H => {
					const de = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, p.n)(H, de)
				},
				A = H => {
					const de = v(H),
						ye = Ke.getMemberships(H) ? i().asMutable(Ke.getMemberships(H)) : [];
					if (!!ye) return i().from(ye.map(Ie => w({}, Ie, {
						lastSeen: de[Ie.account.id] ? de[Ie.account.id].lastSeen : null
					})).sort((Ie, Ne) => Ie.lastSeen && Ne.lastSeen ? Ne.lastSeen - Ie.lastSeen : 0))
				},
				N = H => H.filteredMemberships,
				$ = (0, n.P1)("filteredMemberships", N),
				q = (0, _.P1)(F, H => H == null ? void 0 : H.permissions),
				ee = (0, _.P1)(q, H => (0, e.Z)(de => {
					var ye;
					return (ye = H == null ? void 0 : H[de]) !== null && ye !== void 0 ? ye : {
						read: !1,
						edit: !1
					}
				})),
				ie = (0, _.P1)(F, H => H == null ? void 0 : H.policies),
				x = (H, de, ye) => {
					let Ie = Ke.getMembership(H);
					if (!Ie) {
						const Ne = Ke.getMemberships(H);
						if (!Ne || !de) return !1;
						Ie = Ne.find(He => He.account.id === de)
					}
					if (!Ie || !ye) return !1;
					try {
						return ye(Ie.permissions)
					} catch {
						return !1
					}
				},
				V = H => {
					var de, ye;
					return (de = (ye = C(H)) === null || ye === void 0 ? void 0 : ye.meta.has_pro_zones) !== null && de !== void 0 ? de : !1
				},
				k = H => {
					var de, ye;
					return (de = (ye = C(H)) === null || ye === void 0 ? void 0 : ye.meta.has_business_zones) !== null && de !== void 0 ? de : !1
				},
				Z = H => k(H) || V(H),
				ae = (H, de) => {
					const ye = pe(H, de);
					return !!ye && !!ye.enabled
				},
				pe = (H, de) => {
					const ye = Ke.getMembership(H),
						Ie = ye && ye.account;
					return Ie && Ie.legacy_flags && Ie.legacy_flags[de]
				},
				ue = H => ae(H, "custom_pages"),
				ve = H => !!H && H["webhooks.webhooks.enabled"],
				ne = H => D(H, "bots", "enabled"),
				Oe = H => D(H, "billing", "annual_subscriptions_enable"),
				Se = H => H ? Boolean(D(H, "ConstellationAI", "v2_ui")) : !1,
				Me = H => H ? Boolean(D(H, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				je = H => H ? Boolean(D(H, "AIgateway", "enabled")) : !1,
				xe = H => pe(H, "enterprise_zone_quota"),
				Ge = H => {
					const de = xe(H);
					return !de || !de.available ? -1 : de.available
				},
				Je = H => H.accountMembers,
				Fe = (0, n.P1)("accountMembers", Je),
				Ve = H => H.accountMember && H.accountMember.isRequesting,
				Y = H => H.accountRoles,
				he = (0, n.P1)("accountRoles", Y),
				ke = (H, de) => {
					const ye = Ke.getMemberships(H),
						Ie = ye && ye.find(tt => tt.account.id === de);
					if (Ie) return Ie.account.name.replace(" Account", " account");
					const Ne = Ke.getMembership(H),
						He = Ne && Ne.account;
					return He && He.id === de ? He.name : null
				},
				We = (H, de) => {
					const ye = Ke.getMemberships(H),
						Ie = ye && ye.find(tt => tt.account.id === de);
					if (Ie) return Ie.account.settings.access_approval_expiry;
					const Ne = Ke.getMembership(H),
						He = Ne && Ne.account;
					return He && He.id === de ? He.settings.access_approval_expiry : null
				},
				pt = (H, de) => {
					const ye = We(H, de);
					return ye ? l().utc(ye).isAfter() : !1
				},
				ut = (H, de, ye) => {
					const Ie = We(H, de);
					let Ne = Ie ? l().utc(Ie) : null;
					return !Ne || !Ne.isAfter() ? "" : Ne && Ne.year() === 3e3 ? ye("account.access_approval.card_expiration_forever") : ye("account.access_approval.card_expiration_text", {
						expiryTimestamp: Ne.local().format(g.U.DateTime)
					})
				},
				Ae = H => H && H.member && H.member.edit,
				rt = (H, de) => {
					const ye = Ke.getMembership(H),
						Ie = ye && ye.account;
					return Ie ? Ie.id !== de : !1
				},
				X = H => H.dpa,
				ge = (0, n.P1)("dpa", X),
				we = H => H.webhook,
				Le = H => H.webhooks,
				Te = (0, n.P1)("webhook", Le),
				Be = H => H.accountLegoContract,
				qe = (0, n.P1)("accountLegoContract", Be),
				ot = H => {
					const de = qe(H);
					return (de == null ? void 0 : de.lego_state) ? de.lego_state : ""
				},
				_t = H => ot(H) === "signed",
				Et = H => Be(H).isRequesting,
				yt = H => {
					const de = qe(H);
					return de && de.subscription_type ? de.subscription_type : ""
				},
				kt = H => yt(H) !== "",
				Ke = {
					getMembership: F,
					getMemberships: P,
					getFilteredMemberships: $,
					getAccountMembers: Fe,
					getAccountRoles: he
				},
				ft = H => H.accountSingle,
				it = (0, n.P1)("accountSingle", ft),
				st = H => {
					const de = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, d.V.ADMINISTRATOR];
					return (0, p.n)(H, de)
				},
				dt = H => (0, p.n)(H, [d.V.BRAND_PROTECTION]),
				Re = H => hasRole(H, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ])
		},
		"../react/common/selectors/commonSelectors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				FX: function() {
					return a
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

			function e(i) {
				const _ = `__ACTIVE__${i}`;
				return c => {
					const l = c.application;
					return l && l.active[_]
				}
			}

			function r(i) {
				const _ = `__TOGGLE__${i}`;
				return c => {
					const l = c.application;
					return l && l.toggles[_]
				}
			}

			function a(i) {
				return i && i.paginationData && i.paginationData.info && i.paginationData.info.total_count ? i.paginationData.info.total_count : 0
			}
			const u = i => i.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$f: function() {
					return p
				},
				AD: function() {
					return _
				},
				BF: function() {
					return d
				},
				Bs: function() {
					return v
				},
				Ci: function() {
					return ee
				},
				DA: function() {
					return Je
				},
				E6: function() {
					return f
				},
				Gy: function() {
					return je
				},
				Hq: function() {
					return Me
				},
				Ms: function() {
					return I
				},
				Mx: function() {
					return ae
				},
				Nb: function() {
					return Se
				},
				Pj: function() {
					return Ge
				},
				Q2: function() {
					return c
				},
				Qq: function() {
					return pe
				},
				Td: function() {
					return m
				},
				Z: function() {
					return V
				},
				a: function() {
					return C
				},
				a5: function() {
					return Z
				},
				c7: function() {
					return ue
				},
				du: function() {
					return g
				},
				ec: function() {
					return le
				},
				f: function() {
					return Oe
				},
				fo: function() {
					return ne
				},
				hL: function() {
					return k
				},
				ji: function() {
					return ie
				},
				jo: function() {
					return P
				},
				l9: function() {
					return Ve
				},
				lI: function() {
					return i
				},
				p1: function() {
					return O
				},
				pK: function() {
					return xe
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
					return s
				},
				yD: function() {
					return x
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function a(Y, he) {
				return Y && Y[he]
			}
			const u = Y => !i(Y).isRequesting;

			function i(Y) {
				return Y.entitlements.zone
			}

			function _(Y) {
				return i(Y).data
			}
			const c = Y => {
				var he, ke;
				return ((he = i(Y).paginationData) === null || he === void 0 || (ke = he.options) === null || ke === void 0 ? void 0 : ke.editedDate) || {}
			};

			function l(Y, he) {
				const ke = _(Y);
				return ke ? a(ke, he) : void 0
			}
			const g = (Y, he) => l(Y, he) === !0;

			function n(Y) {
				return Y.entitlements.account
			}

			function o(Y) {
				return n(Y).data
			}
			const s = Y => {
				var he, ke;
				return ((he = n(Y).paginationData) === null || he === void 0 || (ke = he.options) === null || ke === void 0 ? void 0 : ke.editedDate) || {}
			};

			function f(Y) {
				return !n(Y).isRequesting
			}

			function d(Y, he) {
				const ke = o(Y);
				return ke ? a(ke, he) : void 0
			}

			function p(Y, he) {
				return d(Y, he) === !0
			}

			function w(Y, he) {
				return he.every(ke => p(Y, ke))
			}

			function O(Y) {
				return p(Y, "contract.customer_enabled")
			}

			function E(Y) {
				return p(Y, "contract.self_service_allowed")
			}

			function m(Y) {
				return p(Y, "billing.partners_managed")
			}
			const C = Y => O(Y) && E(Y),
				v = Y => p(Y, "enterprise.ecp_allowed");

			function T(Y) {
				return M(Y) || p(Y, "argo.allow_smart_routing") || p(Y, "argo.allow_tiered_caching") || p(Y, "rate_limiting.enabled") || p(Y, "ctm.enabled") || p(Y, "workers.enabled") || p(Y, "workers.kv_store.enabled") || p(Y, "stream.enabled")
			}
			const M = Y => g(Y, "argo.allow_smart_routing") || g(Y, "argo.allow_tiered_caching"),
				I = Y => p(Y, "zone.cname_setup_allowed") || p(Y, "zone.partial_setup_allowed") || g(Y, "zone.partial_setup_allowed"),
				P = Y => p(Y, "argo.allow_smart_routing") || g(Y, "argo.allow_smart_routing"),
				L = Y => p(Y, "argo.allow_tiered_caching") || g(Y, "argo.allow_tiered_caching"),
				b = Y => P(Y) || L(Y),
				D = Y => p(Y, "ctm.enabled"),
				S = Y => {
					const he = d(Y, "ctm.load_balancers");
					return typeof he == "number" ? he : 0
				},
				G = Y => {
					const he = d(Y, "ctm.pools");
					return typeof he == "number" ? he : 0
				},
				te = Y => {
					const he = d(Y, "ctm.origins");
					return typeof he == "number" ? he : 0
				},
				le = Y => p(Y, "workers.enabled"),
				ce = Y => p(Y, "stream.enabled"),
				Q = Y => {
					const he = d(Y, "access.users_allowed");
					return typeof he == "number" ? he : 0
				},
				F = Y => Q(Y) > 0,
				K = Y => {
					const he = l(Y, "dedicated_certificates");
					return typeof he == "number" ? he : 0
				},
				j = Y => K(Y) > 0,
				U = Y => {
					const he = l(Y, "rate_limiting.max_rules");
					return typeof he == "number" ? he : 0
				},
				A = Y => p(Y, "rate_limiting.enabled"),
				N = Y => {
					const he = l(Y, "page_rules");
					return typeof he == "number" ? he : 0
				},
				$ = Y => N(Y) > 0,
				q = Y => {
					const he = d(Y, "dns_firewall.max_clusters_allowed");
					return typeof he == "number" ? he : 0
				},
				ee = Y => q(Y) > 0,
				ie = Y => g(Y, "zone.advanced_certificate_manager") || p(Y, "zone.advanced_certificate_manager"),
				x = Y => l(Y, "authoritative_dns.proxy_record_allowed") === !1 || d(Y, "authoritative_dns.proxy_record_allowed") === !1,
				V = Y => p(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				k = Y => l(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				Z = Y => {
					const he = l(Y, "authoritative_dns.min_record_ttl_allowed");
					return typeof he == "number" && he > 1 ? he : 60
				},
				ae = Y => {
					const he = d(Y, r.yt);
					return typeof he == "number" ? he : 0
				},
				pe = Y => p(Y, "foundation_dns.advanced_nameservers_allowed") || g(Y, "foundation_dns.advanced_nameservers_allowed"),
				ue = Y => p(Y, "authoritative_dns.account_custom_nameservers_allowed"),
				ve = Y => g(Y, "authoritative_dns.zone_custom_nameservers_allowed"),
				ne = Y => ve(Y) || ue(Y),
				Oe = (Y, he) => ((0, e.el)(window.location.pathname) ? l : d)(Y, he),
				Se = Y => ((0, e.el)(window.location.pathname) ? _ : o)(Y),
				Me = Y => p(Y, "authoritative_dns.multi_provider_allowed") || g(Y, "authoritative_dns.multi_provider_allowed"),
				je = Y => g(Y, "authoritative_dns.cname_flattening_allowed"),
				xe = Y => p(Y, "secondary_dns.secondary_overrides") || g(Y, "secondary_dns.secondary_overrides"),
				Ge = Y => p(Y, "authoritative_dns.custom_soa_allowed") || g(Y, "authoritative_dns.custom_soa_allowed"),
				Je = Y => p(Y, "authoritative_dns.custom_ns_ttl_allowed") || g(Y, "authoritative_dns.custom_ns_ttl_allowed"),
				Fe = Y => p(Y, "secondary.create_zone"),
				Ve = Y => pe(Y) || ue(Y) || Me(Y) || Fe(Y) || xe(Y) || Ge(Y) || Je(Y)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return i
				},
				v: function() {
					return _
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const i = c => {
				if ((0, u.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const l = c.userCommPreferences.data;
				if (l == null ? void 0 : l["language-locale"]) return (0, e.i_)(l["language-locale"]), l["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const g = (0, e.Kd)();
					return _(g) ? g : e.ZW
				}
			};

			function _(c) {
				const l = Object.keys(r.Q).find(g => r.Q[g] === c);
				return !!c && typeof c == "string" && l != null && (0, e.S8)(l)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return i
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
					return C
				},
				PR: function() {
					return a
				},
				h$: function() {
					return O
				},
				h8: function() {
					return n
				},
				kk: function() {
					return w
				},
				l8: function() {
					return c
				},
				mV: function() {
					return p
				},
				vW: function() {
					return _
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = v => v.user,
				a = (0, e.P1)("user", r),
				u = v => {
					var T;
					return (T = a(v)) === null || T === void 0 ? void 0 : T.email.endsWith("@cloudflare.com")
				},
				i = v => {
					var T;
					return !!((T = a(v)) === null || T === void 0 ? void 0 : T.id)
				},
				_ = v => {
					const T = a(v);
					if (!!T) return T.first_name && T.last_name ? `${T.first_name} ${T.last_name}` : T.email
				},
				c = v => {
					const T = a(v);
					return T && T.has_enterprise_zones
				},
				l = v => v.userCommPreferences,
				g = (0, e.P1)("userCommPreferences", l),
				n = v => {
					const T = a(v);
					return T && T.email_verified
				},
				o = v => {
					const T = g(v);
					return T && T.preferences.marketing_communication
				},
				s = v => v.userDetails,
				f = (0, e.P1)("userDetails", s),
				d = v => {
					const T = f(v);
					return T && T["2FA-RECOVERY"] === "scheduled"
				},
				p = v => {
					const T = f(v);
					return T && T["2FA-RECOVERY"] === "interrupted"
				},
				w = v => {
					const T = f(v);
					return T == null ? void 0 : T["NEW-USER-EMAIL"]
				},
				O = v => v.gates.assignments,
				E = (v, T) => v && v[T];

			function m(v, T) {
				const M = O(v);
				return M ? E(M, T) : void 0
			}
			const C = (v, T) => m(v, T) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return I
				},
				$t: function() {
					return We
				},
				A4: function() {
					return O
				},
				Cu: function() {
					return E
				},
				DQ: function() {
					return pe
				},
				Ej: function() {
					return L
				},
				FH: function() {
					return C
				},
				ID: function() {
					return A
				},
				Iu: function() {
					return w
				},
				Ko: function() {
					return je
				},
				Le: function() {
					return ne
				},
				Ly: function() {
					return ie
				},
				M3: function() {
					return Ve
				},
				N8: function() {
					return Fe
				},
				NY: function() {
					return Z
				},
				Ns: function() {
					return q
				},
				Ox: function() {
					return Ae
				},
				P4: function() {
					return b
				},
				RO: function() {
					return j
				},
				Tr: function() {
					return Me
				},
				U: function() {
					return m
				},
				Ug: function() {
					return T
				},
				V6: function() {
					return Y
				},
				WR: function() {
					return rt
				},
				Xg: function() {
					return p
				},
				ZB: function() {
					return ve
				},
				_y: function() {
					return N
				},
				cU: function() {
					return xe
				},
				cg: function() {
					return ae
				},
				d2: function() {
					return ce
				},
				e3: function() {
					return $
				},
				il: function() {
					return ee
				},
				jN: function() {
					return S
				},
				jg: function() {
					return V
				},
				kC: function() {
					return P
				},
				kf: function() {
					return he
				},
				ko: function() {
					return K
				},
				mK: function() {
					return pt
				},
				nA: function() {
					return d
				},
				oY: function() {
					return D
				},
				qM: function() {
					return Oe
				},
				rq: function() {
					return k
				},
				tS: function() {
					return M
				},
				tU: function() {
					return te
				},
				vB: function() {
					return ut
				},
				vM: function() {
					return G
				},
				wH: function() {
					return v
				},
				wn: function() {
					return ue
				},
				xU: function() {
					return le
				},
				xw: function() {
					return Se
				},
				z5: function() {
					return U
				},
				zO: function() {
					return Ge
				},
				zW: function() {
					return ke
				},
				zh: function() {
					return Q
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				u = t.n(a),
				i = t("../../../../node_modules/moment/moment.js"),
				_ = t.n(i),
				c = t("../react/common/constants/billing/index.ts");

			function l(X) {
				for (var ge = 1; ge < arguments.length; ge++) {
					var we = arguments[ge] != null ? Object(arguments[ge]) : {},
						Le = Object.keys(we);
					typeof Object.getOwnPropertySymbols == "function" && Le.push.apply(Le, Object.getOwnPropertySymbols(we).filter(function(Te) {
						return Object.getOwnPropertyDescriptor(we, Te).enumerable
					})), Le.forEach(function(Te) {
						g(X, Te, we[Te])
					})
				}
				return X
			}

			function g(X, ge, we) {
				return ge = n(ge), ge in X ? Object.defineProperty(X, ge, {
					value: we,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[ge] = we, X
			}

			function n(X) {
				var ge = o(X, "string");
				return typeof ge == "symbol" ? ge : String(ge)
			}

			function o(X, ge) {
				if (typeof X != "object" || X === null) return X;
				var we = X[Symbol.toPrimitive];
				if (we !== void 0) {
					var Le = we.call(X, ge || "default");
					if (typeof Le != "object") return Le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ge === "string" ? String : Number)(X)
			}
			const s = (0, r.P1)("zone", X => X.zone),
				f = X => {
					var ge;
					return (ge = X.zoneVersioning) === null || ge === void 0 ? void 0 : ge.zoneVersionSelector
				},
				d = (0, e.P1)(s, f, (X, ge) => {
					var we, Le, Te;
					let Be;
					if (Array.isArray(X) && X.length === 1 ? Be = X[0] : X && !Array.isArray(X) && (Be = X), !Be) return;
					const qe = !!(ge == null ? void 0 : ge.enabled);
					return l({}, Be, Be.name && {
						name: qe ? ge.rootZoneName : Be.name
					}, {
						versioning: {
							enabled: qe,
							isRoot: !((we = Be.name) === null || we === void 0 ? void 0 : we.endsWith(".config.cfdata.org")),
							version: qe ? ge.selectedVersion : 0,
							rootZoneId: qe ? ge.rootZoneId : (Le = (Te = Be) === null || Te === void 0 ? void 0 : Te.id) !== null && Le !== void 0 ? Le : ""
						}
					})
				}),
				p = X => X.zone,
				w = X => X.zone.isRequesting,
				O = (0, e.P1)(d, p, (X, ge) => ({
					data: X,
					meta: ge
				})),
				E = X => {
					var ge, we;
					return (ge = (we = d(X)) === null || we === void 0 ? void 0 : we.id) !== null && ge !== void 0 ? ge : ""
				},
				m = X => X.zones,
				C = X => X.zonesRoot,
				v = X => X.zonesAccount,
				T = (0, r.P1)("zones", m),
				M = (0, r.P1)("zonesRoot", C),
				I = (0, r.P1)("zonesAccount", v);

			function P(X) {
				const ge = d(X);
				return ge ? ge.created_on : null
			}

			function L(X, ge, we) {
				const Le = P(X);
				if (!Le) return;
				const Te = _().duration(ge, we),
					Be = new Date(Le),
					qe = new Date(new Date().getTime() - Te.asMilliseconds());
				return Be.getTime() > qe.getTime()
			}

			function b(X) {
				const ge = d(X);
				return ge ? ge.status : null
			}

			function D(X) {
				const ge = d(X);
				return ge ? ge.type : null
			}

			function S(X) {
				return (X == null ? void 0 : X.plan_pending) ? X == null ? void 0 : X.plan_pending : X == null ? void 0 : X.plan
			}

			function G(X) {
				const ge = d(X);
				if (!ge) return;
				const we = S(ge);
				return we && we.legacy_id
			}

			function te(X, ge) {
				const we = S(X);
				return !!we && c.Gs.indexOf(we.legacy_id) >= c.Gs.indexOf(ge)
			}

			function le(X) {
				return !!X && X.status === "initializing"
			}

			function ce(X) {
				return !!X && X.status === "pending"
			}

			function Q(X) {
				return !!X && X.status === "active"
			}

			function F(X, ge) {
				if (!X) return !1;
				const we = S(X);
				return !!we && we.legacy_id === ge
			}

			function K(X) {
				return F(X, "enterprise")
			}
			const j = X => K(d(X));

			function U(X) {
				return F(X, "business")
			}
			const A = X => U(d(X));

			function N(X) {
				return F(X, "pro")
			}
			const $ = X => N(d(X));

			function q(X) {
				return F(X, "free")
			}
			const ee = X => q(d(X));

			function ie(X) {
				return !K(X)
			}

			function x(X) {
				return X && X.owner
			}

			function V(X, ge) {
				const we = x(ge);
				return !!we && we.type === "user" && we.id === X.id
			}

			function k(X) {
				const ge = d(X);
				return !!ge && ge.type === "partial"
			}

			function Z(X) {
				const ge = d(X);
				return !!ge && ge.type === "secondary"
			}
			const ae = X => {
					var ge;
					const we = d(X);
					return !!(we == null ? void 0 : we.host) && !!((ge = we.plan) === null || ge === void 0 ? void 0 : ge.externally_managed)
				},
				pe = X => {
					const ge = T(X);
					return ge && ge.some(K)
				},
				ue = (X, ge) => {
					const we = d(X);
					return we && we.betas ? we.betas.includes(ge) : !1
				},
				ve = (X, ...ge) => u()(X, ["zoneFlags", "data", ...ge]),
				ne = (X, ...ge) => u()(X, ["accountFlags", "data", ...ge]),
				Oe = X => X.accountFlags.isRequesting,
				Se = X => X.zoneFlags.isRequesting,
				Me = (X, ...ge) => u()(X, ["zoneFlagsChanges", "data", ...ge]),
				je = X => X.zoneFlagsChanges.isRequesting,
				xe = X => X.zoneFlags && X.zoneFlags.data,
				Ge = X => X.zoneFlags,
				Je = (0, e.P1)(xe, Ge, (X, ge) => ({
					data: X,
					meta: ge
				})),
				Fe = (0, r.P1)("abuseUrls", X => X.overview.abuseUrls),
				Ve = X => {
					const ge = d(X);
					return ge ? `/${ge.account.id}/${ge.name}` : null
				},
				Y = X => X.zoneMarketingCampaigns,
				he = X => X.overview.zoneBlocks.data,
				ke = X => X.overview.zoneBlocks.isRequesting,
				We = X => X.overview.zoneBlocks.hasData,
				pt = X => {
					var ge, we;
					return (X == null || (ge = X.overview.zoneBlocks) === null || ge === void 0 || (we = ge.paginationData) === null || we === void 0 ? void 0 : we.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				ut = X => X.overview.zoneBlocksReview.isRequesting,
				Ae = X => X.overview.zoneHold,
				rt = (0, r.P1)("zoneHold", Ae)
		},
		"../react/common/utils/formatDate.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (r, a, u = !1) => (0, e.p6)(r, a, u)
		},
		"../react/common/utils/getEnvironment.ts": function(W, y, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				a = t("../functions/utils/constants.ts");
			const u = () => {
				var i, _, c;
				const g = e.parse(document.cookie)[a.b1];
				let n = null;
				g && (n = (0, r.E9)(g));
				let o = "production";
				switch (!0) {
					case ((i = n) === null || i === void 0 ? void 0 : i.projectType) === "canary":
						o = "canary";
						break;
					case ((_ = window) === null || _ === void 0 || (c = _.build) === null || c === void 0 ? void 0 : c.isPreviewDeploy):
						o = "preview";
						break
				}
				return o
			};
			y.Z = u
		},
		"../react/common/utils/hasRole.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (a, u) => {
				const {
					roles: i = []
				} = (0, e.uF)(a) || {};
				return u.some(_ => i.includes(_))
			}
		},
		"../react/common/utils/isGuards.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$K: function() {
					return c
				},
				Q$: function() {
					return a
				},
				t: function() {
					return _
				},
				v5: function() {
					return u
				},
				zE: function() {
					return i
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = l => l ? ["page", "per_page", "count", "total_count"].every(n => n in l && l[n]) : !1,
				u = (l = "") => e.Dy.includes(l.toLowerCase()),
				i = l => l !== null && typeof l == "object" && "name" in l && "size" in l && "type" in l && typeof l.slice == "function",
				_ = l => (0, r.Z)(l),
				c = l => l != null
		},
		"../react/common/utils/startViewTransition.ts": function(W, y, t) {
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
		"../react/common/utils/useQueryCache.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return _
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
						a(c, o, g[o])
					})
				}
				return c
			}

			function a(c, l, g) {
				return l = u(l), l in c ? Object.defineProperty(c, l, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[l] = g, c
			}

			function u(c) {
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
			const _ = c => {
				const l = (0, e.useQueryClient)(),
					g = m => {
						var C;
						return l.getQueriesData((C = m) !== null && C !== void 0 ? C : c)
					},
					n = m => {
						var C;
						return l.getQueryData((C = m) !== null && C !== void 0 ? C : c)
					},
					o = m => {
						var C;
						return l.getQueriesData({
							queryKey: (C = m) !== null && C !== void 0 ? C : c,
							stale: !0
						})
					},
					s = (m, C) => {
						var v;
						l.setQueryData((v = C) !== null && v !== void 0 ? v : c, m)
					},
					f = async m => {
						var C;
						await l.refetchQueries((C = m) !== null && C !== void 0 ? C : c)
					}, d = async (m, C) => {
						var v, T;
						await l.invalidateQueries((v = m) !== null && v !== void 0 ? v : c, r({
							refetchActive: !1
						}, (T = C) !== null && T !== void 0 ? T : {}))
					}, p = async (m, C) => {
						const v = m || (T => {
							var M;
							return (T == null || (M = T.queryKey) === null || M === void 0 ? void 0 : M[0]) === c
						});
						await l.invalidateQueries(r({
							predicate: v,
							refetchActive: !1,
							refetchInactive: !1
						}, C))
					};
				return {
					refetch: f,
					cancelData: async () => {
						await l.cancelQueries(c)
					},
					invalidate: d,
					setData: s,
					getDataStale: o,
					getData: g,
					prefetchQuery: (m, C) => {
						var v;
						return l.prefetchQuery((v = C) !== null && v !== void 0 ? v : c, m)
					},
					getQueryData: n,
					predicateInvalidate: p,
					batchInvalidate: async ({
						queryKeysToInvalidate: m = [],
						queryKeysToPredicateInvalidate: C = [],
						refetchActive: v = !1,
						refetchInactive: T = !1
					}) => {
						const M = m.map(P => d(P)),
							I = C.map(P => p(L => {
								var b;
								return (L == null || (b = L.queryKey) === null || b === void 0 ? void 0 : b[0]) === P
							}, {
								refetchActive: v,
								refetchInactive: T
							}));
						await Promise.all([...M, ...I])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(W, y, t) {
			"use strict";
			t.d(y, {
				K2: function() {
					return r
				},
				Lb: function() {
					return a
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
					return i
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = g => /^https?:\/\/(.*)/.test(g),
				a = g => e.default.hostname.test(g),
				u = g => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(g),
				i = g => /^[!-~]+$/.test(g),
				_ = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				c = g => _.test(g),
				l = g => !!g && !!g.length && /^[ -~]+$/.test(g)
		},
		"../react/pages/abuse/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Cg: function() {
					return f
				},
				EO: function() {
					return l
				},
				Iy: function() {
					return c
				},
				RV: function() {
					return s
				},
				R_: function() {
					return _
				},
				Vq: function() {
					return m
				},
				Y0: function() {
					return E
				},
				bL: function() {
					return v
				},
				bx: function() {
					return O
				},
				dM: function() {
					return M
				},
				dV: function() {
					return T
				},
				eM: function() {
					return o
				},
				i9: function() {
					return i
				},
				nq: function() {
					return p
				},
				pj: function() {
					return n
				},
				to: function() {
					return C
				},
				xR: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				a = t("../react/pages/abuse/abuse.translations.ts"),
				u = t("../react/pages/abuse/types.ts");
			const i = "customer-abuse-reports-table-filter-bar",
				_ = "abuse-reports-table-tooltip",
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
			let s = function(I) {
				return I.BLOCKED_CONTENT = "blocked-content", I.CACHE_RATE_LIMITS = "cache-rate-limits", I
			}({});
			const f = [{
					title: a.keys.tab_titles.blocked_content,
					url: `/${s.BLOCKED_CONTENT}`
				}, {
					title: a.keys.tab_titles.cache_rate_limits,
					url: `/${s.CACHE_RATE_LIMITS}`
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
				w = null,
				O = ["active", "cancelled", "in_review", "pending", "removed"],
				E = ["accepted", "in_review"];
			let m = function(I) {
				return I.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", I.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", I.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", I.CLICK_ABUSE_REPORT_ID = "click abuse report id", I.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", I.ADD_FILTER = "Add filter", I.REMOVE_FILTER = "Remove filter", I.REMOVE_ALL_FILTERS = "Remove all filters", I.NEXT_PAGE = "go to next page", I.PREV_PAGE = "go to prev page", I.GO_TO_PAGE = "go to page", I.SET_PAGE_SIZE = "set page size", I.COPY_TABLE_CELL = "copy table cell", I
			}({});
			const C = {
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
				v = {
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
				T = {
					initialPaginationState: {
						page: 1,
						perPage: 6
					},
					initialToolbarState: {},
					initialSortState: {
						name: u.DT.EnforcementDate,
						direction: e.Sr.desc
					}
				},
				M = {
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
		"../react/pages/abuse/types.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				DT: function() {
					return u
				},
				MY: function() {
					return a
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
					return i
				}
			});
			let e = function(o) {
				return o.Type = "type", o.EffectiveDate = "effective_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
			}({});
			const r = null,
				a = {
					BLOCK_URL: "block_url",
					RATE_LIMIT_CACHE: "rate_limit_cache",
					ACCOUNT_SUSPEND: "account_suspend"
				};
			let u = function(o) {
					return o.BlockType = "blockType", o.CreatedDate = "created", o.EnforcementDate = "enforcement_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
				}({}),
				i = function(o) {
					return o.JIRA = "jira", o.ZENDESK = "zendesk", o.ABUSE_REPORT = "abuse_report", o.CSAM_MATCH = "csam_match", o
				}({}),
				_ = function(o) {
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
		"../react/pages/analytics/common/utils/gqlUtils.js": function(W, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return u
				},
				GA: function() {
					return g
				},
				hT: function() {
					return _
				},
				p6: function() {
					return a
				},
				qc: function() {
					return i
				},
				w9: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e);
			const a = s => r().utc(s).format("YYYY-MM-DD"),
				u = s => r().utc(s).format(),
				i = s => r().utc(s).startOf("minute").format(),
				_ = s => new Date(s),
				c = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				l = s => {
					const f = s / 60 / 60 / 1e3;
					return c[Object.keys(c).sort((d, p) => p - d).find(d => f >= d)]
				},
				g = (s, f = d => d.avg && d.avg.sampleInterval ? d.avg.sampleInterval : 1) => s.length === 0 ? 1 : s.reduce((d, p) => d + f(p), 0) / s.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				o = s => n[s]
		},
		"../react/pages/blocked-content/constants.ts": function(W, y, t) {
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
					return s
				},
				Wk: function() {
					return d
				},
				_V: function() {
					return l
				},
				c5: function() {
					return f
				},
				om: function() {
					return o
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				a = t("../react/pages/blocked-content/types.ts");

			function u(w) {
				for (var O = 1; O < arguments.length; O++) {
					var E = arguments[O] != null ? Object(arguments[O]) : {},
						m = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(E).filter(function(C) {
						return Object.getOwnPropertyDescriptor(E, C).enumerable
					})), m.forEach(function(C) {
						i(w, C, E[C])
					})
				}
				return w
			}

			function i(w, O, E) {
				return O = _(O), O in w ? Object.defineProperty(w, O, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[O] = E, w
			}

			function _(w) {
				var O = c(w, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function c(w, O) {
				if (typeof w != "object" || w === null) return w;
				var E = w[Symbol.toPrimitive];
				if (E !== void 0) {
					var m = E.call(w, O || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(w)
			}
			const l = "blocked-content-table-tooltip",
				g = {
					account: {
						basePage: (0, r.BC)`/${"accountId"}/blocked-content`,
						[a.$E.Active]: (0, r.BC)`/${"accountId"}/blocked-content/active`,
						[a.$E.Pending]: (0, r.BC)`/${"accountId"}/blocked-content/pending`
					},
					securityCenter: {
						basePage: (0, r.BC)`/${"accountId"}/security-center/blocked-content`,
						[a.$E.Active]: (0, r.BC)`/${"accountId"}/security-center/blocked-content/active`,
						[a.$E.Pending]: (0, r.BC)`/${"accountId"}/security-center/blocked-content/pending`
					}
				},
				n = [{
					category: a.$E.Pending,
					title: "security_center.blocked_content.pending_tab",
					url: "/pending"
				}, {
					category: a.$E.Active,
					title: "security_center.blocked_content.active_tab",
					url: "/active"
				}],
				o = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					cancelled: "gray"
				},
				s = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				f = {
					[a.$E.Active]: [a.M3.Active, a.M3.InReview],
					[a.$E.Pending]: [a.M3.Pending, a.M3.Cancelled]
				},
				d = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: a.fL.EnforcementDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(a.GH)
					},
					filters: Object.values(a.GH).reduce((w, O) => u({}, w, {
						[O]: O
					}), {})
				};
			let p = function(w) {
				return w.COPY_URL = "copy blocked content url", w.REQUEST_REVIEW = "request blocked content review", w.ADD_FILTER = "Add filter", w.REMOVE_FILTER = "Remove filter", w
			}({})
		},
		"../react/pages/blocked-content/types.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return e
				},
				GH: function() {
					return i
				},
				Ib: function() {
					return a
				},
				M3: function() {
					return r
				},
				Qy: function() {
					return u
				},
				fL: function() {
					return _
				}
			});
			let e = function(l) {
					return l.Pending = "pending", l.Active = "active", l
				}({}),
				r = function(l) {
					return l.Active = "active", l.InReview = "in_review", l.Pending = "pending", l.Cancelled = "cancelled", l
				}({});
			const a = [r.Pending, r.Cancelled],
				u = [r.Active, r.InReview];
			let i = function(l) {
					return l.Domain = "domain", l.Status = "status", l.BlockType = "blockType", l
				}({}),
				_ = function(l) {
					return l.CreatedDate = "created", l.EnforcementDate = "enforcementDate", l.BlockType = "blockType", l.Hostname = "hostname", l.Status = "status", l
				}({}),
				c = function(l) {
					return l.Removed = "removed", l.Misclassified = "misclassified", l
				}({})
		},
		"../react/pages/caching/tracking.tsx": function(W, y, t) {
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
		"../react/pages/d1/routes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				H: function() {
					return a
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
				a = {
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
		"../react/pages/dns/dns-records/tracking.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e
				},
				X: function() {
					return r
				}
			});
			let e = function(a) {
				return a.DNS_RECORD_CREATE = "create DNS records", a.DNS_RECORD_UPDATE = "update DNS records", a.DNS_RECORD_DELETE = "delete DNS records", a.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", a
			}({});
			const r = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				BB: function() {
					return r
				},
				Pm: function() {
					return a
				},
				UZ: function() {
					return e
				}
			});
			let e = function(i) {
				return i.ROOT = "root", i.DSTADDRS_CARD = "dstaddrs_card", i.RULES_CARD = "rules_card", i.CATCHALL_CARD = "catchall_card", i.SETTINGS_PAGE = "settings_page", i.WORKERS_PAGE = "workers_page", i
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
			let a = function(i) {
				return i[i.Verified = 0] = "Verified", i[i.Pending = 1] = "Pending", i[i.Missing = 2] = "Missing", i[i.WorkerNotFound = 3] = "WorkerNotFound", i[i.Unknown = 4] = "Unknown", i[i.Loading = 5] = "Loading", i
			}({});
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const a = r._.createAlertWithSelection,
				u = r._.editAlert,
				i = (0, e.BC)`${a}/subtype`,
				_ = (0, e.BC)`${a}/stepper`,
				c = (0, e.BC)`${_}/${"stepName"}`,
				l = (0, e.BC)`${_}/details`,
				g = (0, e.BC)`${_}/data-centers`,
				n = (0, e.BC)`${_}/ramps`,
				o = (0, e.BC)`${_}/threshold`,
				s = (0, e.BC)`${_}/review`,
				f = (0, e.BC)`${_}/confirm`,
				d = (0, e.BC)`${u}/stepper`,
				p = (0, e.BC)`${d}/${"stepName"}`,
				w = (0, e.BC)`${d}/details`,
				O = (0, e.BC)`${d}/data-centers`,
				E = (0, e.BC)`${d}/ramps`,
				m = (0, e.BC)`${d}/threshold`,
				C = (0, e.BC)`${d}/review`,
				v = (0, e.BC)`${d}/confirm`,
				T = {
					magicTunnelHealthChooseSubType: i,
					magicTunnelHealthCreateStepperBase: _,
					magicTunnelHealthCreateStepper: c,
					magicTunnelHealthCreateDetails: l,
					magicTunnelHealthCreateSelectDataCenter: g,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: o,
					magicTunnelHealthCreateReview: s,
					magicTunnelHealthCreateConfirm: f,
					magicTunnelHealthEditStepperBase: d,
					magicTunnelHealthEditStepper: p,
					magicTunnelHealthEditDetails: w,
					magicTunnelHealthEditSelectDataCenter: O,
					magicTunnelHealthEditSelectRamps: E,
					magicTunnelHealthEditSetThreshold: m,
					magicTunnelHealthEditReview: C,
					magicTunnelHealthEditConfirm: v
				};
			y.Z = T
		},
		"../react/pages/home/alerts/config.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				jk: function() {
					return s
				},
				w8: function() {
					return f
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				i = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function _(d) {
				for (var p = 1; p < arguments.length; p++) {
					var w = arguments[p] != null ? Object(arguments[p]) : {},
						O = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(w).filter(function(E) {
						return Object.getOwnPropertyDescriptor(w, E).enumerable
					})), O.forEach(function(E) {
						c(d, E, w[E])
					})
				}
				return d
			}

			function c(d, p, w) {
				return p = l(p), p in d ? Object.defineProperty(d, p, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = w, d
			}

			function l(d) {
				var p = g(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function g(d, p) {
				if (typeof d != "object" || d === null) return d;
				var w = d[Symbol.toPrimitive];
				if (w !== void 0) {
					var O = w.call(d, p || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const n = "Notifications",
				o = "notification",
				s = _({}, e._, r._j, a._j, u._),
				f = _({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, i.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				_j: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				i = (0, e.BC)`${r}/pagerduty`,
				_ = {
					pagerDutyConnect: a,
					pagerDutyRegister: u,
					pagerDutyList: i
				};
			var c = null
		},
		"../react/pages/home/alerts/routes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${a}/destinations`,
				i = (0, e.BC)`${a}/create`,
				_ = (0, e.BC)`${i}/${"alertType"}`,
				c = (0, e.BC)`${a}/edit/${"alertId"}`,
				l = {
					account: r,
					alerts: a,
					destinations: u,
					createAlert: i,
					createAlertWithSelection: _,
					editAlert: c
				};
			y.Z = l
		},
		"../react/pages/home/alerts/tracking.ts": function(W, y, t) {
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
		"../react/pages/home/audit-log/tracking.ts": function(W, y, t) {
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
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(W, y, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(W, y, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				AA: function() {
					return V
				},
				AN: function() {
					return st
				},
				AY: function() {
					return de
				},
				Ac: function() {
					return vt
				},
				Am: function() {
					return O
				},
				B2: function() {
					return U
				},
				BB: function() {
					return P
				},
				BF: function() {
					return Le
				},
				BQ: function() {
					return Ke
				},
				E8: function() {
					return Re
				},
				Fl: function() {
					return Ie
				},
				Fu: function() {
					return D
				},
				Gc: function() {
					return ot
				},
				Hc: function() {
					return Nt
				},
				IO: function() {
					return ft
				},
				JK: function() {
					return Ge
				},
				K: function() {
					return T
				},
				LI: function() {
					return kt
				},
				LX: function() {
					return ge
				},
				L_: function() {
					return Y
				},
				Ly: function() {
					return Qe
				},
				MR: function() {
					return N
				},
				Mj: function() {
					return q
				},
				NB: function() {
					return Mt
				},
				Oe: function() {
					return Ut
				},
				Or: function() {
					return ie
				},
				P5: function() {
					return ht
				},
				PE: function() {
					return Oe
				},
				Pd: function() {
					return Pt
				},
				Pk: function() {
					return Me
				},
				Pp: function() {
					return We
				},
				Q1: function() {
					return b
				},
				Qr: function() {
					return we
				},
				Qv: function() {
					return Se
				},
				Rp: function() {
					return At
				},
				S7: function() {
					return bt
				},
				Sh: function() {
					return Ne
				},
				Sl: function() {
					return Bt
				},
				TZ: function() {
					return x
				},
				Tg: function() {
					return Je
				},
				Tp: function() {
					return qe
				},
				Uy: function() {
					return Dt
				},
				Vw: function() {
					return G
				},
				W3: function() {
					return Ae
				},
				WR: function() {
					return it
				},
				WX: function() {
					return pe
				},
				XF: function() {
					return dt
				},
				Xb: function() {
					return k
				},
				Zs: function() {
					return Ve
				},
				_f: function() {
					return Te
				},
				b4: function() {
					return ae
				},
				bc: function() {
					return Lt
				},
				c2: function() {
					return A
				},
				cE: function() {
					return It
				},
				dh: function() {
					return ke
				},
				fE: function() {
					return he
				},
				g7: function() {
					return ne
				},
				hO: function() {
					return ut
				},
				hV: function() {
					return Rt
				},
				hk: function() {
					return E
				},
				hr: function() {
					return Z
				},
				it: function() {
					return pt
				},
				j3: function() {
					return xt
				},
				jN: function() {
					return xe
				},
				jo: function() {
					return jt
				},
				k3: function() {
					return Ct
				},
				m8: function() {
					return F
				},
				nm: function() {
					return He
				},
				oW: function() {
					return H
				},
				pH: function() {
					return K
				},
				pi: function() {
					return Q
				},
				r4: function() {
					return Wt
				},
				rI: function() {
					return $
				},
				s7: function() {
					return _t
				},
				sg: function() {
					return tt
				},
				tB: function() {
					return p
				},
				tN: function() {
					return ve
				},
				u_: function() {
					return $t
				},
				vV: function() {
					return Be
				},
				vc: function() {
					return je
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				u = t.n(a),
				i = t("../../../common/util/types/src/api/domain.ts"),
				_ = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/utils/url.ts"),
				l = t("../react/pages/home/domain-registration/config.ts"),
				g = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function o(h) {
				for (var R = 1; R < arguments.length; R++) {
					var me = arguments[R] != null ? Object(arguments[R]) : {},
						Ce = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(me).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(me, oe).enumerable
					})), Ce.forEach(function(oe) {
						s(h, oe, me[oe])
					})
				}
				return h
			}

			function s(h, R, me) {
				return R = f(R), R in h ? Object.defineProperty(h, R, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[R] = me, h
			}

			function f(h) {
				var R = d(h, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function d(h, R) {
				if (typeof h != "object" || h === null) return h;
				var me = h[Symbol.toPrimitive];
				if (me !== void 0) {
					var Ce = me.call(h, R || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(h)
			}

			function p(h) {
				return h.filter(R => R.isSelected).reduce((R, {
					name: me,
					fees: Ce,
					isZoneEntitlementPresent: oe
				}) => oe || !(0, e.isNumber)(Ce == null ? void 0 : Ce.transfer_fee) ? R : vt(me) ? R + (Ce == null ? void 0 : Ce.transfer_fee) * 2 : R + (Ce == null ? void 0 : Ce.transfer_fee), 0)
			}

			function w(h) {
				return h.filter(R => R.registrar.toLowerCase() === "godaddy")
			}
			const O = "MMM D, YYYY";

			function E(h, R, me, Ce) {
				var oe, re, fe, _e, be, Ue, Ze, at, Xe, et, ct, gt;
				const ze = h[R.name],
					nt = () => vt(R.name) ? u()(R.expires_at).add(2, "years").format(O) : u()(R.expires_at).add(1, "year").format(O);
				return o({
					name: R == null ? void 0 : R.name,
					zone: ze,
					entitlements: me,
					registryCheck: Ce,
					nameservers: R.name_servers,
					isAvailable: R.available,
					lastKnownStatus: R.last_known_status,
					authCode: R.auth_code,
					isEnterpriseZone: (ze == null || (oe = ze.plan) === null || oe === void 0 ? void 0 : oe.legacy_id) === "enterprise",
					isActiveZone: (ze == null ? void 0 : ze.status) === "active",
					corResponsesPending: R.cor_responses_pending,
					isCorLocked: R.cor_locked,
					corLockedUntil: R.cor_locked_until ? u()(R.cor_locked_until).format(O) : null,
					isFullZone: (ze == null ? void 0 : ze.type) == n.xd.Full,
					isLocked: R.locked,
					registrar: R.current_registrar || l.JM,
					zoneId: ze == null ? void 0 : ze.id,
					currentExpiration: u()(R.expires_at).format(O),
					newExpiration: nt(),
					lastEntitledAt: R.last_entitled_at ? new Date(R.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(zt => zt.id === l.g5 && zt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: R.transfer_in && v(R.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: R.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: R.transfer_in,
					transferOut: R.transfer_out,
					autoRenew: R.auto_renew === !0,
					lastTransferredAt: R.last_transferred_at,
					createdAt: R.created_at,
					paymentExpiresAt: u()(R.payment_expires_at).isValid() ? u()(R.payment_expires_at) : u()(R.expires_at).isValid() ? u()(R.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (re = R.contacts) === null || re === void 0 || (fe = re.administrator) === null || fe === void 0 ? void 0 : fe.id,
						[n.l2.Billing]: (_e = R.contacts) === null || _e === void 0 || (be = _e.billing) === null || be === void 0 ? void 0 : be.id,
						[n.l2.Registrant]: (Ue = R.contacts) === null || Ue === void 0 || (Ze = Ue.registrant) === null || Ze === void 0 ? void 0 : Ze.id,
						[n.l2.Technical]: (at = R.contacts) === null || at === void 0 || (Xe = at.technical) === null || Xe === void 0 ? void 0 : Xe.id
					},
					landing: R.landing,
					privacy: R.privacy,
					whois: R.whois,
					emailVerified: R.email_verified,
					materialChanges: M(R.material_changes),
					corChanges: R.cor_changes ? P(Object.assign(o({}, C), R.cor_changes)) : {},
					registryStatuses: R.registry_statuses ? R.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (et = R.domain_protection_services) === null || et === void 0 ? void 0 : et.status
					},
					deletion: {
						isDeletable: R == null || (ct = R.deletion) === null || ct === void 0 ? void 0 : ct.is_deletable
					},
					premiumType: R == null ? void 0 : R.premium_type,
					fees: R == null ? void 0 : R.fees
				}, R.domain_move && {
					domainMove: {
						ineligibilityReasons: (gt = R.domain_move) === null || gt === void 0 ? void 0 : gt.ineligibility_reasons
					}
				}, R.actionable_metadata && {
					actionableMetadata: m(R.actionable_metadata)
				}, R.policies && {
					policies: o({}, R.policies.suspension && {
						suspension: {
							parked: R.policies.suspension.parked,
							parkingReason: R.policies.suspension.parking_reason,
							paymentExpired: R.policies.suspension.payment_expired
						}
					})
				})
			}

			function m(h) {
				return h.map(R => ({
					accountContext: R.account_context,
					createdAt: R.created_at,
					expiresAt: R.expires_at,
					sentAt: R.sent_at,
					status: R.status,
					type: R.type
				}))
			}
			const C = {
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

			function v(h) {
				switch (h.enter_auth_code) {
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

			function T(h) {
				let R = h.extensions;
				(R == null ? void 0 : R.application_purpose) && (R == null ? void 0 : R.nexus_category) && (h.extensions = {
					nexusCategory: R.nexus_category,
					applicationPurpose: R.application_purpose
				});
				let me = o({}, typeof h.id == "string" ? {
					id: h.id
				} : {}, {
					first_name: h.firstName,
					organization: h.organization,
					address: h.address1,
					city: h.city,
					state: h.state || "N/A",
					zip: h.zip,
					country: h.country,
					phone: h.phone,
					email: h.email,
					fax: "",
					last_name: h.lastName,
					address2: h.address2,
					email_verified: h.emailVerified
				}, h.extensions ? {
					extensions: {
						nexus_category: h.extensions.nexusCategory,
						application_purpose: h.extensions.applicationPurpose
					}
				} : {});
				return Fe(me)
			}

			function M(h) {
				let R = [];
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
				for (const Ce in h) {
					const oe = h[Ce],
						re = me[oe];
					R.push(re)
				}
				return R
			}
			const I = h => {
				if (!h) return null;
				let R = h;
				return h.includes("C31") && (R = "C31"), h.includes("C32") && (R = "C32"), R
			};

			function P(h) {
				return o({}, typeof h.id == "string" ? {
					id: h.id
				} : {}, {
					firstName: h.first_name,
					organization: h.organization,
					address1: h.address,
					city: h.city,
					state: h.state,
					zip: h.zip,
					country: h.country,
					phone: h.phone.trim(),
					email: h.email.trim(),
					lastName: h.last_name,
					address2: h.address2,
					emailVerified: h.email_verified
				}, h.extensions ? {
					extensions: {
						nexusCategory: I(h.extensions.nexus_category),
						applicationPurpose: h.extensions.application_purpose
					}
				} : {})
			}

			function L(h = {}) {
				const R = {
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
						}, h.zone && h.zone.plan || {}),
						type: EZoneType.Full
					}, h.zone || {}),
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
					}, h.transferConditions || {}),
					transferIn: o({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, h.transferIn || {}),
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
				return Object.assign(R, h)
			}

			function b(h = {}) {
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
				}, h)
			}

			function D(h) {
				const R = l.Py.concat(l.ui).reduce((me, Ce) => o({}, me, {
					[Ce]: []
				}), {});
				return h.forEach(me => {
					let Ce = S(me.registrar);
					Ce in R || (Ce = l.ui), tt(me.name) && (Ce = "uk"), R[Ce].push(me)
				}), Object.keys(R).sort((me, Ce) => me.localeCompare(Ce)).map(me => ({
					registrar: me,
					domains: R[me]
				})).filter(me => me.domains.length > 0)
			}

			function S(h) {
				return h == null ? void 0 : h.toLowerCase().replace(/\s|,|\./g, "")
			}

			function G(h) {
				if (!h || !h.registrar) return "unknown";
				if (tt(h.name)) return "uk";
				const R = S(h.registrar);
				return R in l.gM ? R : "unknown"
			}
			const te = [];

			function le(h) {
				return te.some(R => h.endsWith("." + R))
			}

			function ce(h) {
				return !h.isEnterpriseZone || !Array.isArray(h.entitlements) ? !1 : !!h.entitlements.find(({
					id: R,
					allocation: me
				}) => R === l.g5 && me.value === !0)
			}

			function Q(h) {
				var R;
				const me = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let Ce = !1,
					oe = null;
				return (R = h.registryStatuses) === null || R === void 0 || R.some(re => {
					me.includes(re) && (oe = re, Ce = !0)
				}), [Ce, oe]
			}

			function F(h, R = !1) {
				if (!h) return [!1, g.keys.cannot_transfer_default];
				if (h.zone.status !== "active") return [!1, g.keys.cannot_transfer_zone_not_active];
				if (!h.isFullZone && !ce(h)) return [!1, g.keys.cannot_transfer_zone_not_eligible];
				if (h.registrar === "Cloudflare") return [!1, g.keys.cannot_transfer_domain_on_cf];
				if (h.isAvailable) return [!1, g.keys.cannot_transfer_domain_available];
				if (!h.transferConditions) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (!R && Dt(h == null ? void 0 : h.premiumType)) return [!1, g.keys.cannot_transfer_domain_premium];
				if (K(h)) return [!1, g.keys.cannot_transfer_domain_transfer_in_progress];
				let me;
				for (me in h.transferConditions)
					if (me !== "not_premium" && !h.transferConditions[me]) return [!1, g.keys.cannot_transfer_domain_transfer_conditions];
				if (le(h.name)) return [!1, g.keys.cannot_transfer_domain_tld_not_supported];
				const [Ce, oe] = Q(h);
				return Ce && oe ? [!1, g.keys.cannot_transfer_domain_registry_status[oe]] : [!0, ""]
			}

			function K(h) {
				var R, me;
				return !!h.transferIn && !((R = h.transferConditions) === null || R === void 0 ? void 0 : R.not_started) && !!(tt(h.name) || ((me = h.registryStatuses) === null || me === void 0 ? void 0 : me.includes(n.rj.PENDING_TRANSFER)))
			}

			function j(h) {
				return !!h.registrar && !!h.currentExpiration
			}

			function U(h, R = !1) {
				const [me] = F(h, R);
				return j(h) ? ue(h) ? n.M5.InProgressOrOnCF : me ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function A(h) {
				return h.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(h.transferIn.enter_auth_code) || !1
			}

			function N(h) {
				return h.registrar === "Cloudflare"
			}

			function $(h) {
				return !!(h == null ? void 0 : h.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function q(h) {
				return !!(h == null ? void 0 : h.includes(n.rj.PENDING_TRANSFER))
			}
			const ee = "Invalid date";

			function ie(h) {
				return h.newExpiration === ee ? "Unavailable" : h.newExpiration
			}

			function x(h) {
				return h.currentExpiration === ee ? "Unavailable" : h.currentExpiration
			}

			function V(h) {
				return h.substring(h.indexOf("."))
			}

			function k(h = "") {
				return h.indexOf(".") !== -1 ? h.substring(0, h.indexOf(".")) : h
			}

			function Z(h) {
				return h.map(R => R.name).map(R => V(R)).filter((R, me, Ce) => !Ce.includes(R, me + 1))
			}

			function ae(h) {
				if (l.no) return [!0, ""];
				if (!N(h)) return [!1, n.ok.NotOnCF];
				if (h.isCorLocked) return [!1, h.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (h.lastTransferredAt) {
					const R = u()(h.lastTransferredAt),
						me = u().duration(u()().diff(R)).as("days"),
						Ce = tt(h.name);
					if (me < (Ce ? 1 : 60)) return [!1, Ce ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (h.createdAt) {
					const R = u()(h.createdAt);
					if (u().duration(u()().diff(R)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function pe(h) {
				return !!(l.Bc || h.transferOut)
			}

			function ue(h) {
				return ne(h) || N(h)
			}

			function ve(h) {
				return !ne(h) && N(h)
			}

			function ne(h) {
				return !h || h.lastKnownStatus === n.kd.PENDING_TRANSFER || h.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !N(h) && h.transferConditions && !h.transferConditions.not_started || !1
			}

			function Oe(h) {
				return !(le(h.name) || h.transferConditions && !h.transferConditions.supported_tld)
			}

			function Se(h) {
				return (h == null ? void 0 : h.includes("/")) ? !0 : h.split("").some(R => R.charCodeAt(0) > 123)
			}

			function Me(h) {
				switch (h) {
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

			function je(h) {
				return u()(h.paymentExpiresAt).isBefore(u()())
			}

			function xe(h) {
				return h.transferIn && h.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Ge(h) {
				const R = ["CU", "KP", "IR", "SY"];
				return h.filter(me => !R.includes(me.code))
			}

			function Je(h) {
				if (!!h) return `${h.charAt(0).toUpperCase()}${h.slice(1)}${h.charAt(h.length-1)==="."?"":"."}`
			}

			function Fe(h) {
				const R = {};
				for (const [me, Ce] of Object.entries(h)) {
					if (Ce && typeof Ce == "string") {
						Object.assign(R, {
							[me]: Ce.trim()
						});
						continue
					}
					Object.assign(R, {
						[me]: Ce
					})
				}
				return R
			}

			function Ve(h) {
				return u()(h).add(40, "days")
			}

			function Y(h) {
				const R = h.paymentExpiresAt || h.payment_expires_at,
					me = Ve(R);
				return u()().isBetween(R, me)
			}

			function he(h) {
				var R;
				return !(h == null ? void 0 : h.registryStatuses) || !Array.isArray(h == null ? void 0 : h.registryStatuses) && !(0, e.isString)(h == null ? void 0 : h.registryStatuses) ? !1 : (R = h.registryStatuses) === null || R === void 0 ? void 0 : R.includes(n.rj.REDEMPTION_PERIOD)
			}

			function ke(h) {
				var R;
				return !(h == null ? void 0 : h.registryStatuses) || !Array.isArray(h == null ? void 0 : h.registryStatuses) && !(0, e.isString)(h == null ? void 0 : h.registryStatuses) ? !1 : (R = h.registryStatuses) === null || R === void 0 ? void 0 : R.includes(n.rj.PENDING_DELETE)
			}

			function We(h) {
				return [".us"].includes(h)
			}

			function pt(h) {
				return [".us"].includes(h)
			}

			function ut(h) {
				switch (h) {
					case ".us":
						return X();
					default:
						return []
				}
			}

			function Ae(h) {
				switch (h) {
					case ".us":
						return rt;
					default:
						return {}
				}
			}
			const rt = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function X() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([h, R]) => ({
						value: h,
						label: R
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([h, R]) => ({
						value: h,
						label: R
					}))
				}]
			}

			function ge(h, R, me) {
				return R[R.length - 1][me] === h[me]
			}

			function we(h) {
				return Boolean(Object.keys(h).length === 0)
			}

			function Le(h) {
				return u()().add(h, "year").format(O)
			}

			function Te({
				accountName: h
			}) {
				var R;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((R = h.toLowerCase().match(me)) === null || R === void 0 ? void 0 : R[0]) || ""
			}

			function Be(h) {
				return !!h.match(_.default.email)
			}

			function qe(h) {
				return h === i.W7.PENDING_UPDATE
			}

			function ot(h) {
				return h ? Object.values(i.wR).filter(R => R !== i.wR.OFFBOARDED).includes(h) : !1
			}

			function _t(h) {
				return h ? [i.wR.LOCKED, i.wR.ONBOARDED, i.wR.ONBOARDING_INITIATED, i.wR.PENDING_REGISTRY_LOCK, i.wR.PENDING_REGISTRY_UNLOCK, i.wR.PENDING_UNLOCK_APPROVAL].includes(h) : !1
			}

			function Et(h) {
				return h ? i.wR.UNLOCKED === h : !1
			}

			function yt(h) {
				return h ? i.wR.LOCKED === h : !1
			}

			function kt(h) {
				return h ? i.wR.PENDING_REGISTRY_LOCK === h : !1
			}

			function Ke(h) {
				return h ? [i.wR.PENDING_REGISTRY_UNLOCK, i.wR.PENDING_UNLOCK_APPROVAL].includes(h) : !1
			}

			function ft(h) {
				var R;
				return !1
			}

			function it(h) {
				var R;
				return !1
			}

			function st(h) {
				var R;
				return !1
			}

			function dt(h) {
				var R;
				return !1
			}

			function Re(h) {
				var R;
				return !1
			}

			function H(h) {
				return Object.keys(i.wR).find(R => i.wR[R].toLowerCase() === h.toLowerCase())
			}

			function de(h) {
				var R;
				const me = (R = H(h)) === null || R === void 0 ? void 0 : R.toLowerCase();
				return me ? g.keys.protection_status[me] : g.keys.protection_status.unknown
			}

			function ye(h) {
				return ["com", "net"].includes(h)
			}

			function Ie(h) {
				const R = (0, c.pu)(h);
				return ye(R) ? i.wR.PENDING_REGISTRY_LOCK : i.wR.LOCKED
			}

			function Ne(h) {
				return (0, c.pu)(h) === "co" ? 5 : 10
			}

			function He(h, R) {
				return R ? 1 : (0, c.pu)(h) === "co" ? 5 : (0, c.pu)(h) === "org" ? 1 : 10
			}

			function tt(h) {
				return (0, c.pu)(h) === "uk"
			}

			function It(h) {
				return (0, c.pu)(h) === "us"
			}

			function vt(h) {
				return (0, c.pu)(h) === "ai"
			}

			function At(h) {
				return u()(h).isValid()
			}

			function Qe(h) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(h)
			}

			function ht(h) {
				return !!(h == null ? void 0 : h.id)
			}

			function Mt(h) {
				return h ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(h) : !1
			}

			function Pt(h) {
				return h ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(h) : !1
			}

			function Rt(h) {
				var R;
				return (h == null ? void 0 : h.lastKnownStatus) ? (R = h.lastKnownStatus) === null || R === void 0 ? void 0 : R.includes("deletionIrredeemable") : !1
			}

			function Dt(h) {
				switch (h) {
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

			function Nt(h) {
				if (!h || !h.message) return n.OJ.DEFAULT;
				const {
					message: R
				} = h;
				switch (!0) {
					case R.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case R.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case R.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function bt(h) {
				var R, me;
				return !!(((R = h.policies) === null || R === void 0 || (me = R.suspension) === null || me === void 0 ? void 0 : me.parked) && h.policies.suspension.parkingReason)
			}

			function xt(h) {
				var R, me;
				return bt(h) && ((R = h.policies) === null || R === void 0 || (me = R.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function Ct(h) {
				var R, me;
				return bt(h) && ((R = h.policies) === null || R === void 0 || (me = R.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function Bt(h) {
				var R;
				return !((R = h.domainMove) === null || R === void 0 ? void 0 : R.ineligibilityReasons.length)
			}

			function Ut(h) {
				var R, me;
				return !!((R = h.domainMove) === null || R === void 0 || (me = R.ineligibilityReasons) === null || me === void 0 ? void 0 : me.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function wt(h) {
				var R;
				return (R = h.actionableMetadata) === null || R === void 0 ? void 0 : R.find(me => me.type === n.wg.DOMAIN_MOVE)
			}

			function jt(h) {
				const R = wt(h);
				return (R == null ? void 0 : R.status) === "pending" && R.accountContext === n._5.GAINING
			}

			function $t(h) {
				const R = wt(h);
				return (R == null ? void 0 : R.status) === "pending" && R.accountContext === n._5.LOSING
			}

			function Wt(h) {
				const R = V(h.name);
				return !l.Pf.includes(R)
			}

			function Lt(h) {
				return l.QZ.includes(h)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Bc: function() {
					return l
				},
				HG: function() {
					return ne
				},
				Hv: function() {
					return Oe
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return f
				},
				Py: function() {
					return _
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
					return i
				},
				jk: function() {
					return ve
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
			const a = "Unknown",
				u = "unknown",
				i = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				_ = Object.keys(i),
				c = !0,
				l = (0, r.J8)("registrar_mock_transfer_out") || !1,
				g = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				o = "cf_registrar.enabled",
				s = "@abcABC1234567890123456",
				f = [".us"],
				d = [".travel", ".us", ".ong", ".ngo"],
				p = (0, e.BC)`/${"accountId"}`,
				w = (0, e.BC)`${p}/add-site`,
				O = (0, e.BC)`${p}/registrar`,
				E = (0, e.BC)`${O}/domains`,
				m = (0, e.BC)`${O}/action-center`,
				C = (0, e.BC)`${O}/domain/${"zoneName"}`,
				v = (0, e.BC)`${C}/configuration`,
				T = (0, e.BC)`${C}/contacts`,
				M = (0, e.BC)`${O}/pricing`,
				I = (0, e.BC)`${O}/protection`,
				P = (0, e.BC)`${O}/register`,
				L = (0, e.BC)`${P}/checkout`,
				b = (0, e.BC)`${P}/checkout/${"token"}`,
				D = (0, e.BC)`${P}/success`,
				S = (0, e.BC)`${O}/tlds`,
				G = (0, e.BC)`${O}/transfer`,
				te = (0, e.BC)`${O}/transfer/${"zoneName"}`,
				le = (0, e.BC)`/registrar/accounts/verify_email`,
				ce = (0, e.BC)`/registrar/domains/verify_email`,
				Q = (0, e.BC)`/sign-up/registrar`,
				F = (0, e.BC)`${O}/verify-email`,
				K = (0, e.BC)`${p}/${"zoneName"}`,
				j = (0, e.BC)`${p}/domains`,
				U = (0, e.BC)`${j}/action-center`,
				A = (0, e.BC)`${j}/${"zoneName"}`,
				N = (0, e.BC)`${A}/configuration`,
				$ = (0, e.BC)`${A}/contacts`,
				q = (0, e.BC)`${j}/pricing`,
				ee = (0, e.BC)`${j}/protection`,
				ie = (0, e.BC)`${j}/register`,
				x = (0, e.BC)`${ie}/checkout`,
				V = (0, e.BC)`${ie}/checkout/${"token"}`,
				k = (0, e.BC)`${ie}/success`,
				Z = (0, e.BC)`${j}/tlds`,
				ae = (0, e.BC)`${j}/transfer`,
				pe = (0, e.BC)`${j}/transfer/${"zoneName"}`,
				ue = (0, e.BC)`${j}/verify-email`,
				ve = {
					addSite: w,
					domains: E,
					domainsActionCenter: m,
					domainsDomain: C,
					domainsDomainConfiguration: v,
					domainsDomainContacts: T,
					domainsPricing: M,
					domainsProtection: I,
					domainsRegister: P,
					domainsRegisterCheckout: L,
					domainsRegisterCheckoutToken: b,
					domainsRegisterSuccess: D,
					domainsTlds: S,
					domainsTransfer: G,
					domainsTransferZone: te,
					registrar: O,
					registrarAccountsVerifyEmail: le,
					registrarDomainsVerifyEmail: ce,
					signup: Q,
					verifyEmail: F,
					zone: K
				},
				ne = {
					LEGACY_domains: j,
					LEGACY_domainsActionCenter: U,
					LEGACY_domainsDomain: A,
					LEGACY_domainsDomainConfiguration: N,
					LEGACY_domainsDomainContacts: $,
					LEGACY_domainsPricing: q,
					LEGACY_domainsProtection: ee,
					LEGACY_domainsRegister: ie,
					LEGACY_domainsRegisterCheckout: x,
					LEGACY_domainsRegisterCheckoutToken: V,
					LEGACY_domainsRegisterSuccess: k,
					LEGACY_domainsTlds: Z,
					LEGACY_domainsTransfer: ae,
					LEGACY_domainsTransferZone: pe,
					LEGACY_verifyEmail: ue
				},
				Oe = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(W, y, t) {
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
					return _
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");
			const a = g => {
					const n = g && g.accountFlags && g.accountFlags.data && g.accountFlags.data.registrar && g.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(o => o.trim()) : []
				},
				u = g => {
					var n, o, s;
					return ((n = g.accountFlags) === null || n === void 0 || (o = n.data) === null || o === void 0 || (s = o.registrar) === null || s === void 0 ? void 0 : s["registrar-managed"]) || !1
				},
				i = g => g.account ? g.account.email : "",
				_ = g => !1,
				c = g => _(g) && (0, e.oJ)((0, e.Zu)(g)),
				l = g => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: o
					} = g.registrar.registrations;
					return n && !(o.accepted_date || o.id || o.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(W, y, t) {
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
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(a),
				i = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function _(s) {
				for (var f = 1; f < arguments.length; f++) {
					var d = arguments[f] != null ? Object(arguments[f]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(w) {
						return Object.getOwnPropertyDescriptor(d, w).enumerable
					})), p.forEach(function(w) {
						c(s, w, d[w])
					})
				}
				return s
			}

			function c(s, f, d) {
				return f = l(f), f in s ? Object.defineProperty(s, f, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[f] = d, s
			}

			function l(s) {
				var f = g(s, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function g(s, f) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(s, f || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(s)
			}
			let n = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s.DOMAIN_MOVE_START_FLOW = "Start domain move flow", s.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", s.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", s.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", s.DOMAIN_MOVE_SUBMIT = "Submit domain move", s.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", s.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", s.DOMAIN_MOVE_CANCEL = "Domain move cancel", s.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", s.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", s.ACTION_CENTER_NAVIGATE = "Navigate to actions center", s.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", s.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", s
			}({});

			function o(s, f, d) {
				if (!(f == null ? void 0 : f.name)) return null;
				u().sendEvent(s, _({
					domain: {
						name: f.name,
						premium: (0, i.Uy)(f == null ? void 0 : f.premiumType),
						paymentExpiresAt: r()(f == null ? void 0 : f.paymentExpiresAt).format()
					},
					category: "registrar"
				}, d))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(W, y, t) {
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
					return f
				},
				s_: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				i = t("../react/pages/home/members/utils.ts"),
				_ = t("../react/utils/translator.tsx");
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
				const C = m;
				return {
					key: "com.cloudflare.edge.access.app." + C.id,
					name: C.name,
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

			function s(m) {
				const C = m,
					v = o[C.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + C.id,
					name: `${v||"Unknown Type"}${C.name?" - "+C.name:""}`,
					type: c.ACCESS_IDP
				}
			}
			const f = async (m, C, v) => C == c.WORKERS ? (await d(`/accounts/${m}/workers/scripts-search?name=${v}&perPage=10`)).body.result.map(T => ({
				id: T.id,
				name: T.service_name || T.script_name,
				environment: T.environment_name
			})).map(g) : C == c.ACCESS_APPS ? (await d(`/accounts/${m}/access/apps?name=${v}`)).body.result.map(n) : C == c.ACCESS_IDP ? (await d(`/accounts/${m}/access/identity_providers`)).body.result.map(s) : [];
			async function d(m) {
				try {
					return await (0, e.get)(m, {
						hideErrorAlert: !0
					})
				} catch (T) {
					var C, v;
					throw ((C = T.body) === null || C === void 0 ? void 0 : C.errors) ? T.body.errors[0].message : T.text ? T.text : ((v = T.response) === null || v === void 0 ? void 0 : v.statusText) ? T.response.statusText : "Unexpected error response"
				}
			}
			const p = async (m, C) => {
				const v = C.split("."),
					T = v.pop(),
					M = v.join(".");
				let I;
				switch (M) {
					case "com.cloudflare.edge.worker.script":
						const P = (await d(`/accounts/${m}/workers/scripts-search/${T}`)).body.result;
						return g({
							id: P.id,
							name: P.service_name || P.script_name,
							environment: P.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return I = await d(`/accounts/${m}/access/identity_providers/${T}`), s(I.body.result);
					case "com.cloudflare.edge.access.app":
						return I = await d(`/accounts/${m}/access/apps/${T}`), n(I.body.result)
				}
			}, w = {
				loading: !0,
				isDisabled: !0
			}, O = () => "production";

			function E(m) {
				const C = (0, i.vq)(m),
					[v, T] = (0, a.useState)(!0),
					[M, I] = (0, a.useState)(l.filter(P => C.find(L => L.meta.scopes === P.scopeKeyPrefix)).map(P => {
						const L = P.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							b = C.filter(D => D.meta.scopes === P.scopeKeyPrefix).find(D => !D.meta.visibility || D.meta.visibility !== "beta");
						return {
							value: P.value,
							label: (0, _.ZP)(P.label_i18n),
							state: L ? w : {
								loading: !1,
								isDisabled: !1
							},
							beta: !b
						}
					}));
				return (0, a.useEffect)(() => {
					(async () => {
						try {
							await f(m, c.ACCESS_APPS, ""), w.isDisabled = !1
						} catch (P) {
							P.startsWith("access.api.error.not_enabled") ? w.disableInfo = (0, _.ZP)("policy.granular_resources.type.access.not_enabled") : w.error = P
						}
						w.loading = !1, I([...M])
					})()
				}, []), (0, a.useEffect)(() => {
					const P = M.find(L => L.state.loading);
					T(!!P)
				}, [M]), {
					types: M,
					isLoading: v
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return g
				},
				F4: function() {
					return w
				},
				Go: function() {
					return f
				},
				Lc: function() {
					return T
				},
				Np: function() {
					return o
				},
				Rl: function() {
					return s
				},
				Sb: function() {
					return d
				},
				Sw: function() {
					return v
				},
				Sz: function() {
					return C
				},
				Ti: function() {
					return M
				},
				Uw: function() {
					return E
				},
				Zl: function() {
					return O
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
				a = (0, e.BC)`${r}/members`,
				u = (0, e.BC)`${a}/invite`,
				i = (0, e.BC)`${a}/invite/${"memberId"}`,
				_ = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				c = (0, e.BC)`${a}/user-groups`,
				l = (0, e.BC)`${a}/user-groups/${"userGroupId"}`,
				g = "com.cloudflare.api.account",
				o = g + "." + "zone",
				s = o + ".",
				f = 100,
				d = 200,
				p = 5,
				w = 300,
				O = "INVITE_TOAST",
				E = "00000000000000000000000000000000",
				m = {
					account: r,
					members: a,
					groups: c,
					group: l,
					inviteMembers: u,
					editMember: i,
					addPolicy: _
				},
				C = {
					allow: "allow",
					deny: "deny"
				},
				v = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				T = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				M = {
					accountId: "",
					effect: C.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(W, y, t) {
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

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), f.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var f = s.call(n, o || "default");
					if (typeof f != "object") return f;
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
					r().sendEvent(n, a({}, o || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return m
				},
				Co: function() {
					return O
				},
				JP: function() {
					return E
				},
				Ld: function() {
					return s
				},
				YW: function() {
					return l
				},
				_k: function() {
					return f
				},
				c$: function() {
					return g
				},
				rC: function() {
					return M
				},
				vq: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function u(I) {
				for (var P = 1; P < arguments.length; P++) {
					var L = arguments[P] != null ? Object(arguments[P]) : {},
						b = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(L).filter(function(D) {
						return Object.getOwnPropertyDescriptor(L, D).enumerable
					})), b.forEach(function(D) {
						i(I, D, L[D])
					})
				}
				return I
			}

			function i(I, P, L) {
				return P = _(P), P in I ? Object.defineProperty(I, P, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : I[P] = L, I
			}

			function _(I) {
				var P = c(I, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function c(I, P) {
				if (typeof I != "object" || I === null) return I;
				var L = I[Symbol.toPrimitive];
				if (L !== void 0) {
					var b = L.call(I, P || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(I)
			}
			const l = () => u({}, a.Ti),
				g = () => u({}, a.Lc, {
					scopes: [l()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = I => I.map(P => ({
					scope: {
						key: P,
						objects: [{
							key: "*"
						}]
					}
				})),
				o = (I, P, L) => {
					var b;
					let D = [],
						S = [];
					const G = [],
						te = [];
					I.scopes.forEach(Q => {
						if (Q.mode === a.Sw.all) L ? D.push({
							id: L
						}) : D.push({
							scope: {
								key: `com.cloudflare.api.account.${P}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (Q.mode === a.Sw.domain_group) {
							const K = {
								id: Q.resourceGroupId
							};
							Q.effect === a.Sz.allow ? D.push(K) : S.push(K)
						} else if (Q.mode === a.Sw.zone) {
							const K = `${a.Rl}${Q.zoneId}`;
							Q.effect === a.Sz.allow ? G.push(K) : te.push(K)
						} else if (Q.mode === a.Sw.granular && Q.granularResourceKey) {
							var F;
							const K = Q.granularProduct,
								U = `${(F=r.s_.find(A=>A.value===K))===null||F===void 0?void 0:F.scopeSubsetOfPrefix}.${P}`;
							D.push({
								scope: {
									key: `${Q.granularResourceKey}`,
									subset_of: [{
										key: `${U}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), G.length && (D = D.concat(n(G))), te.length && (S = S.concat(n(te)));
					const le = (b = I.permission_groups) === null || b === void 0 ? void 0 : b.map(Q => ({
							id: Q
						})),
						ce = [];
					return ce.push({
						access: a.Sz.allow,
						permission_groups: le,
						resource_groups: D
					}), S.length && ce.push({
						access: a.Sz.deny,
						permission_groups: le,
						resource_groups: S
					}), ce
				},
				s = I => I.map(P => {
					var L;
					return {
						access: P.access,
						permission_groups: P.permission_groups.map(b => ({
							id: b.id
						})),
						resource_groups: (L = P.resource_groups) === null || L === void 0 ? void 0 : L.map(b => ({
							scope: {
								key: b.scope.key,
								objects: b.scope.objects
							},
							id: b.id
						}))
					}
				}),
				f = (I, P, L, b) => {
					const D = I.auto_accept;
					let S = [];
					return S = S.concat(o(I, P, L)), b && (S = S.concat(s(b))), {
						auto_accept: D,
						status: D ? "accepted" : "pending",
						policies: S
					}
				},
				d = I => {
					const P = I.split(".");
					return P[P.length - 1]
				},
				p = I => {
					var P, L;
					const b = I == null ? void 0 : I.access;
					let D = [],
						S = I == null || (P = I.resource_groups) === null || P === void 0 ? void 0 : P.map(G => {
							var te;
							const le = w(G);
							if ((G == null || (te = G.meta) === null || te === void 0 ? void 0 : te.editable) === "false") return {
								effect: b,
								mode: a.Sw.all,
								accountId: d(G.id)
							};
							if (le) {
								var ce;
								return {
									effect: b,
									mode: a.Sw.granular,
									granularProduct: le.value,
									granularResourceKey: G == null || (ce = G.scope) === null || ce === void 0 ? void 0 : ce.key
								}
							} else if (!G.name) G.scope.key.startsWith(a.Rl) ? D.push({
								key: G.scope.key
							}) : D = D.concat(G.scope.objects);
							else return {
								effect: b,
								mode: a.Sw.domain_group,
								resourceGroupId: d(G.id)
							}
						}).filter(G => G);
					if ((L = D) === null || L === void 0 ? void 0 : L.length) {
						let G = D.map(te => {
							const le = d(te.key);
							return {
								effect: b,
								mode: a.Sw.zone,
								zoneId: le
							}
						});
						S = S.length ? G.concat(S) : G
					}
					return S
				},
				w = I => {
					var P, L, b, D;
					const S = I == null || (P = I.scope) === null || P === void 0 ? void 0 : P.key.split(".").slice(0, -1).join("."),
						G = I == null || (L = I.scope) === null || L === void 0 || (b = L.subset_of) === null || b === void 0 || (D = b[0]) === null || D === void 0 ? void 0 : D.key.split(".").slice(0, -1).join(".");
					return r.s_.find(te => te.scopeKeyPrefix === S && te.scopeSubsetOfPrefix === G)
				},
				O = I => {
					if (!(I == null ? void 0 : I.length)) return [];
					const P = [];
					return I.forEach(L => {
						var b;
						(b = L.resource_groups) === null || b === void 0 || b.forEach(D => {
							var S, G;
							((S = D.scope) === null || S === void 0 || (G = S.key) === null || G === void 0 ? void 0 : G.startsWith(a.Rl)) && P.push(d(D.scope.key))
						})
					}), P
				},
				E = I => {
					if (!(I == null ? void 0 : I.length)) return [];
					const P = [];
					return I.forEach(L => {
						var b;
						(b = L.resource_groups) === null || b === void 0 || b.forEach(D => {
							var S, G;
							if (!((S = D.scope) === null || S === void 0 || (G = S.key) === null || G === void 0 ? void 0 : G.startsWith(a.Rl))) {
								var te;
								const ce = (te = D.scope) === null || te === void 0 ? void 0 : te.objects;
								for (let Q = 0; Q < (ce == null ? void 0 : ce.length) && Q < a.r6; Q++) {
									var le;
									((le = ce[Q].key) === null || le === void 0 ? void 0 : le.startsWith(a.Rl)) && P.push(d(ce[Q].key))
								}
							}
						})
					}), P
				},
				m = I => {
					var P;
					if (!(I == null ? void 0 : I.length)) return null;
					const L = (P = I[0]) === null || P === void 0 ? void 0 : P.permission_groups.map(G => G.id);
					let b, D;
					I == null || I.forEach(G => {
						G.access === a.Sz.allow && (b = G), G.access === a.Sz.deny && (D = G)
					});
					let S = [];
					return b && (S = p(b)), D && (S = S.concat(p(D))), {
						permission_groups: L,
						scopes: S
					}
				},
				C = "permission-groups-",
				v = new Map,
				T = I => {
					if (!I) return [];
					const P = v.get(I);
					if (P) return P;
					const L = e.E.get(`${C}${I}`);
					return v.set(I, L), L
				},
				M = (I, P) => {
					const L = [];
					for (let b = 0; b < sessionStorage.length; b++) {
						const D = sessionStorage.key(b);
						(D == null ? void 0 : D.startsWith(C)) && L.push(D)
					}
					return L.length >= 5 && e.E.remove(L[0]), e.E.set(`${C}${I}`, P)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(W, y, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(W, y, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(W, y, t) {
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

			function a(o) {
				for (var s = 1; s < arguments.length; s++) {
					var f = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(f).filter(function(p) {
						return Object.getOwnPropertyDescriptor(f, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, f[p])
					})
				}
				return o
			}

			function u(o, s, f) {
				return s = i(s), s in o ? Object.defineProperty(o, s, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = f, o
			}

			function i(o) {
				var s = _(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function _(o, s) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var d = f.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			let c = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.SEARCH_CONFIGS = "search hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o.CLICK_DISCORD = "click hyperdrive discord", o.CLICK_COMMUNITY = "click hyperdrive community", o
				}({}),
				l = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				g = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const n = (o, s = {}) => {
				r().sendEvent(o, a({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				KJ: function() {
					return M
				},
				_m: function() {
					return O
				},
				imagesEndpoints: function() {
					return ne
				},
				vQ: function() {
					return I
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(Oe) {
				for (var Se = 1; Se < arguments.length; Se++) {
					var Me = arguments[Se] != null ? Object(arguments[Se]) : {},
						je = Object.keys(Me);
					typeof Object.getOwnPropertySymbols == "function" && je.push.apply(je, Object.getOwnPropertySymbols(Me).filter(function(xe) {
						return Object.getOwnPropertyDescriptor(Me, xe).enumerable
					})), je.forEach(function(xe) {
						a(Oe, xe, Me[xe])
					})
				}
				return Oe
			}

			function a(Oe, Se, Me) {
				return Se = u(Se), Se in Oe ? Object.defineProperty(Oe, Se, {
					value: Me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Oe[Se] = Me, Oe
			}

			function u(Oe) {
				var Se = i(Oe, "string");
				return typeof Se == "symbol" ? Se : String(Se)
			}

			function i(Oe, Se) {
				if (typeof Oe != "object" || Oe === null) return Oe;
				var Me = Oe[Symbol.toPrimitive];
				if (Me !== void 0) {
					var je = Me.call(Oe, Se || "default");
					if (typeof je != "object") return je;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Se === "string" ? String : Number)(Oe)
			}
			const _ = (0, e.BC)`/${"accountId"}/images`,
				c = (0, e.BC)`${_}/images`,
				l = (0, e.BC)`${_}/variants`,
				g = (0, e.BC)`${_}/keys`,
				n = (0, e.BC)`${_}/bundle-checkout-success`,
				o = (0, e.BC)`${c}/${"imageId"}`,
				s = (0, e.BC)`${c}/detail`,
				f = (0, e.BC)`${c}/edit`,
				d = (0, e.BC)`${l}/create`,
				p = (0, e.BC)`${l}/edit/${"variantId"}`,
				w = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				O = (0, e.BC)`${_}/sourcing-kit`,
				E = (0, e.BC)`${_}/delivery-zones`,
				m = (0, e.BC)`${E}/${"zoneId"}/settings`,
				C = (0, e.BC)`${_}/plans`,
				v = (0, e.BC)`${_}/manage-plan`,
				T = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				M = {
					root: _,
					images: c,
					variants: l,
					keys: g,
					legacyImageDetailPage: o,
					imageDetailPage: s,
					imageEditPage: f,
					bundleCheckoutSuccess: n,
					variantCreatePage: d,
					variantEditPage: p,
					sourcingKit: O,
					subscriptions: w,
					deliveryZones: E,
					deliveryZoneSettings: m,
					plansPage: C,
					managePlan: v
				},
				I = r({}, M, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: T
				}),
				P = (0, e.BC)`/accounts/${"accountId"}`,
				L = (0, e.BC)`${P}/images/v2`,
				b = (0, e.BC)`/zones/${"zoneId"}`,
				D = (0, e.BC)`${L}/sourcingkit`,
				S = (0, e.BC)`${D}/migrations`,
				G = (0, e.BC)`${D}/migrations/${"migrationId"}`,
				te = (0, e.BC)`${D}/migrations/${"migrationId"}/logs`,
				le = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/start`,
				ce = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/abort`,
				Q = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle`,
				F = (0, e.BC)`${D}/sources`,
				K = (0, e.BC)`${D}/sources/${"sourceId"}`,
				j = (0, e.BC)`${D}/sources/${"sourceId"}/connectivity`,
				U = (0, e.BC)`${D}/sources/connectivity_precheck`,
				A = (0, e.BC)`/zones?account.id=${"accountId"}`,
				N = {
					migrationList: S,
					migration: G,
					migrationLogs: te,
					sourceList: F,
					migrationStart: le,
					migrationAbort: ce,
					migrationProgress: Q,
					source: K,
					sourceConnectivityCheck: j,
					sourceConnectivityPreCheck: U
				},
				$ = (0, e.BC)`/billing/upgrade-subscription`,
				q = (0, e.BC)`${P}/settings/transformations`,
				ee = (0, e.BC)`${b}/settings/transformations`,
				ie = (0, e.BC)`${b}/settings/transformations_allowed_origins`,
				x = (0, e.BC)`${b}/settings/transformations_c2pa`,
				V = (0, e.BC)`${P}/settings/ut-billing`,
				k = (0, e.BC)`${b}`,
				Z = (0, e.BC)`${b}/entitlements`,
				ae = (0, e.BC)`${b}/settings`,
				pe = (0, e.BC)`${b}/flags`,
				ue = (0, e.BC)`${b}/subscription`,
				ne = {
					sourcingKitEndpoints: N,
					deliveryZonesEndpoints: {
						transformationsConfigList: q,
						transformationsZoneConfig: ee,
						allowedOriginsZoneConfig: ie,
						preserveContentCredentialsZoneConfig: x,
						upgradeSubscription: $,
						utBillingConfig: V
					},
					zones: {
						zones: A,
						zoneDetail: k,
						zoneSettings: ae,
						zoneEntitlements: Z,
						zoneFlags: pe,
						zoneSubscription: ue
					}
				}
		},
		"../react/pages/images/selectors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return u
				},
				GH: function() {
					return s
				},
				JZ: function() {
					return d
				},
				aR: function() {
					return n
				},
				db: function() {
					return _
				},
				ib: function() {
					return p
				},
				lW: function() {
					return O
				},
				pT: function() {
					return o
				},
				po: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				i = "sourcing_kit_waitlist",
				_ = "images",
				c = "unified_images_enabled",
				l = "c2pa_polish",
				g = "CloudflareImages",
				n = E => !!(0, r.BF)(E, "images.transformations_enabled"),
				o = E => Boolean((0, r.BF)(E, "images.enabled")),
				s = E => {
					const m = (0, r.BF)(E, "images.storage");
					return typeof m == "number" && m > 0
				},
				f = E => Boolean((0, r.BF)(E, "contract.customer_enabled")),
				d = E => Boolean((0, e.oI)(E, _, u)),
				p = E => Boolean((0, a.Le)(E, g, u)),
				w = E => Boolean(getAccountFlipperFlag(E, g, c)),
				O = E => Boolean((0, a.Le)(E, g, l))
		},
		"../react/pages/internal-dns/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				jx: function() {
					return e
				},
				xk: function() {
					return i
				},
				xo: function() {
					return _
				},
				yt: function() {
					return u
				},
				z7: function() {
					return a
				}
			});
			const e = "internal",
				r = {
					ADD: "add",
					IMPORT: "import"
				},
				a = {
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
				i = "internal-dns",
				_ = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/magic/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				GF: function() {
					return f
				},
				H3: function() {
					return c
				},
				H8: function() {
					return i
				},
				J: function() {
					return p
				},
				Nz: function() {
					return l
				},
				UQ: function() {
					return O
				},
				Up: function() {
					return u
				},
				W8: function() {
					return g
				},
				Ws: function() {
					return E
				},
				Xg: function() {
					return o
				},
				Y_: function() {
					return s
				},
				_j: function() {
					return a
				},
				a4: function() {
					return d
				},
				jS: function() {
					return w
				},
				rF: function() {
					return _
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/utils/translator.tsx");
			const a = {
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
				i = m => [{
					value: "low",
					label: m("setting.low")
				}, {
					value: "mid",
					label: m("setting.medium")
				}, {
					value: "high",
					label: m("setting.high")
				}],
				_ = m => [{
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
				s = "interconnect",
				f = 64,
				d = 1476,
				p = "mid",
				w = "reply",
				O = m => [{
					value: void 0,
					label: m("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: m("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: m("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				E = m => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function(W, y, t) {
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
					return a
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
				a = "user journey",
				u = 60
		},
		"../react/pages/magic/overview/tracking.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				VZ: function() {
					return u
				},
				lC: function() {
					return a
				},
				r8: function() {
					return r
				},
				uB: function() {
					return i
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const r = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				a = "user journey",
				u = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				i = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				W_: function() {
					return r
				},
				X: function() {
					return e
				},
				lC: function() {
					return a
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
				a = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				gb: function() {
					return n
				},
				iP: function() {
					return I
				},
				xL: function() {
					return E
				},
				rD: function() {
					return L
				},
				oT: function() {
					return d
				},
				i2: function() {
					return b
				},
				x1: function() {
					return _
				},
				lW: function() {
					return l
				},
				UA: function() {
					return T
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return C
				},
				PJ: function() {
					return P
				},
				bK: function() {
					return w
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				i = t("../node_modules/@cloudflare/elements/es/index.js");
			const _ = () => r().createElement(c, null, r().createElement("svg", {
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
				c = (0, a.createComponent)(({
					theme: D
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
				g = (0, a.createComponent)(({
					theme: D
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
				n = () => r().createElement(o, null, r().createElement(i.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				o = (0, a.createComponent)(({
					theme: D
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
				s = () => r().createElement(f, null, r().createElement("svg", {
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
				f = (0, a.createComponent)(({
					theme: D
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
				p = (0, a.createComponent)(({
					theme: D
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
				w = () => r().createElement(O, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				O = (0, a.createComponent)(({
					theme: D
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
				E = () => r().createElement(m, null, r().createElement("svg", {
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
				m = (0, a.createComponent)(({
					theme: D
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
				C = () => r().createElement(v, null, r().createElement("svg", {
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
				v = (0, a.createComponent)(({
					theme: D
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
				T = () => r().createElement(M, null, r().createElement("svg", {
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
				M = (0, a.createComponent)(({
					theme: D
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
				I = () => r().createElement("svg", {
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
				L = () => r().createElement("svg", {
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
				b = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				A2: function() {
					return c
				},
				He: function() {
					return i
				},
				N$: function() {
					return _
				},
				Qq: function() {
					return a
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
				a = "login-apple-jwt",
				u = "cf-test",
				i = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				_ = l => [{
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
		"../react/pages/page-rules/tracking.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return a
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(i) {
				return i.TEMPLATE_SELECTED = "template selected", i.TEMPLATE_PRODUCT_SELECTED = "template product selected", i.TEMPLATE_SAVE_DRAFT = "template save draft", i.TEMPLATE_CANCEL = "template cancel", i.TEMPLATE_DEPLOY = "template deploy", i
			}({});
			const u = (i, _) => r().sendEvent(i, {
				template_name: _
			})
		},
		"../react/pages/pages/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return w
				},
				C1: function() {
					return g
				},
				GF: function() {
					return L
				},
				HD: function() {
					return m
				},
				IK: function() {
					return i
				},
				L7: function() {
					return a
				},
				Li: function() {
					return p
				},
				Ni: function() {
					return M
				},
				OG: function() {
					return F
				},
				QF: function() {
					return ce
				},
				QV: function() {
					return T
				},
				Sx: function() {
					return C
				},
				Ub: function() {
					return le
				},
				X3: function() {
					return o
				},
				bA: function() {
					return D
				},
				eO: function() {
					return s
				},
				fH: function() {
					return d
				},
				fQ: function() {
					return O
				},
				fR: function() {
					return e
				},
				ff: function() {
					return b
				},
				iS: function() {
					return E
				},
				nY: function() {
					return v
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return l
				},
				wp: function() {
					return f
				},
				yu: function() {
					return n
				},
				zF: function() {
					return P
				},
				zG: function() {
					return I
				}
			});
			const e = "api.pages.cloudflare.com",
				r = "cloudflare-workers-and-pages",
				a = {
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
				i = 58,
				_ = {
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
				s = ["Success:", "Error:", "Failed:"],
				f = 10,
				d = "_headers",
				p = "_redirects",
				w = "_routes.json",
				O = "_worker.js",
				E = "do-a-barrel-roll",
				m = [d, p, w, O],
				C = 1024 * 1024 * 25,
				v = 1e3,
				T = {
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
				M = 1e5,
				I = 75e3,
				P = 2e5,
				L = 15e4,
				b = 3e3,
				D = 2250,
				S = "workers",
				G = "cloudflare_pages_build_caching",
				te = 2;
			let le = function(K) {
				return K[K.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", K[K.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", K[K.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", K[K.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", K[K.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", K[K.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", K
			}({});
			const ce = 1,
				Q = 2,
				F = 2
		},
		"../react/pages/pages/routes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				_j: function() {
					return r
				},
				zE: function() {
					return i
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
				a = {
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
				u = _ => `${_.subdomain}.pages.dev`,
				i = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(W, y, t) {
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

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), f.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var f = s.call(n, o || "default");
					if (typeof f != "object") return f;
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
				r().sendEvent(n, a({}, o, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(W, y, t) {
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
					return a
				}
			});
			const e = "iam-authentication",
				r = "login",
				a = "profile",
				u = {
					[r]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa"
					},
					[a]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"../react/pages/r2/routes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return _
				},
				_j: function() {
					return r
				},
				vF: function() {
					return i
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
				a = {
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
				i = (c, l) => {
					const g = u(l);
					return `https://${c}.${g}`
				},
				_ = (c, l, g) => `${i(c,l)}/${g}`
		},
		"../react/pages/secrets-store/resources/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return M
				},
				JJ: function() {
					return _
				},
				Js: function() {
					return u
				},
				LN: function() {
					return p
				},
				Nm: function() {
					return s
				},
				Oh: function() {
					return O
				},
				Q2: function() {
					return P
				},
				QF: function() {
					return w
				},
				RR: function() {
					return m
				},
				T_: function() {
					return I
				},
				Xm: function() {
					return c
				},
				Zl: function() {
					return L
				},
				dv: function() {
					return i
				},
				fp: function() {
					return o
				},
				jx: function() {
					return T
				},
				nQ: function() {
					return f
				},
				px: function() {
					return E
				},
				tP: function() {
					return a
				},
				vh: function() {
					return d
				},
				wB: function() {
					return D
				},
				z3: function() {
					return b
				},
				zt: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const a = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				i = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				_ = 1,
				c = 10,
				l = 100;
			let g = function(S) {
					return S.NAME = "name", S
				}({}),
				n = function(S) {
					return S.NAME = "name", S
				}({});
			const o = {
				initialPaginationState: {
					page: _,
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
			let s = function(S) {
					return S.NAME = "name", S.COMMENT = "comment", S.TAGS = "tags", S.SERVICES = "services", S.STATUS = "status", S
				}({}),
				f = function(S) {
					return S.PENDING = "pending", S.ACTIVE = "active", S.DELETED = "deleted", S
				}({}),
				d = function(S) {
					return S.LIST_SECRETS_STORES = "listSecretsStores", S.LIST_SECRETS = "listSecrets", S.GET_SECRET = "getSecret", S.SECRETS_QUOTA = "secretsQuota", S
				}({}),
				p = function(S) {
					return S.CREATE = "create", S.EDIT = "edit", S.DUPLICATE = "duplicate", S
				}({}),
				w = function(S) {
					return S.WORKERS = "workers", S
				}({});
			const O = "default_secrets_store";
			let E = function(S) {
				return S.CREATE = "create", S.EDIT = "edit", S.DUPLICATE = "duplicate", S.VIEW = "view", S
			}({});
			const m = "delete_operation",
				C = /^[a-zA-Z0-9_-]+$/,
				v = (S, G, te, le, ce) => r.Ry().shape({
					name: r.Z_().required(S("secrets_store.form.create.errors.name.required")).matches(C, S("secrets_store.form.create.errors.name.invalid_characters")).max(255, S("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", S("secrets_store.form.create.errors.value.required"), Q => G || ce ? !!Q : !0).max(1024, S("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, S("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(w), S("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				T = (S, G, te, le, ce) => r.Ry().shape({
					secrets: r.IX().of(v(S, G, te, le, ce))
				}),
				M = {
					name: "",
					value: "",
					scopes: w.WORKERS,
					comment: ""
				},
				I = "secrets-store.store.secret";
			let P = function(S) {
				return S.DUPLICATE = "duplicate", S.DEPLOY = "deploy", S
			}({});
			const L = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let b = function(S) {
					return S.CREATE_SECRET = "create secrets store secret", S.EDIT_SECRET = "edit secrets store secret", S.DUPLICATE_SECRET = "duplicate secrets store secret", S.DELETE_SECRET = "delete secrets store secret", S.BIND_SECRET = "open secrets store binding drawer", S
				}({}),
				D = function(S) {
					return S.SECRETS_STORE = "secrets store main", S.WORKERS_BINDING = "workers binding drawer", S
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Ev: function() {
					return a
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
			let a = function(u) {
				return u.LOAD_THREAT_EVENTS = "load threat events", u.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", u.THREAT_EVENTS_FILTERS = "threat events filters applied", u.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", u.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", u.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", u.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", u
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				AU: function() {
					return a
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
				a = {
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
					[a.ASN]: "firewall.analytics.services.labels.asn",
					[a.COUNTRY]: "firewall.analytics.services.labels.country",
					[a.IP]: "firewall.analytics.services.labels.ip",
					[a.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[a.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[a.VALIDATION]: "firewall.analytics.services.labels.validation",
					[a.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[a.WAF]: "firewall.analytics.services.labels.waf",
					[a.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[a.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[a.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[a.BIC]: "firewall.analytics.services.labels.bic",
					[a.HOT]: "firewall.analytics.services.labels.hot",
					[a.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[a.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[a.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[a.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[a.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[a.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[a.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[a.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[a.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[a.DLP]: "firewall.analytics.services.labels.dlp",
					[a.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				DC: function() {
					return f
				},
				Ff: function() {
					return c
				},
				Lz: function() {
					return s
				},
				RM: function() {
					return g
				},
				Ss: function() {
					return o
				},
				dR: function() {
					return i
				},
				gW: function() {
					return _
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
				a = t("../react/pages/security/analytics/resources/labels.ts");
			const u = ["block", "challenge", "jschallenge", "managed_challenge"],
				i = {
					label: "security_analytics.filters.mitigated",
					parse: d => d === "true" || d === !0,
					urlParam: "mitigated",
					type: e.kE.select,
					options: [!0, !1],
					operators: [r.Gn.equals, r.Gn.notEquals],
					rawLogField: "securityAction"
				},
				_ = {
					label: "security_analytics.filters.security_action",
					urlParam: "mitigation-action",
					type: e.kE.select,
					options: Object.keys(a.Bt).filter(d => !["challenge_failed", "jschallenge_failed"].includes(d)),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securityAction"
				},
				c = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(a.e_).filter(d => d !== "unknown"),
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
				s = "security-analytics-log-explorer";
			let f = function(d) {
				return d.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', d.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', d.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', d.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', d.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', d.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", d.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", d.OPEN_SIDE_DRAWER = "open security analytics side drawer", d.CLOSE_SIDE_DRAWER = "close security analytics side drawer", d
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(W, y, t) {
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

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), f.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var f = s.call(n, o || "default");
					if (typeof f != "object") return f;
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
					product: s = c.MAIN,
					productName: f,
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: s,
						productName: f
					}, d || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Fm: function() {
					return u
				},
				N3: function() {
					return e
				},
				UN: function() {
					return a
				},
				h1: function() {
					return r
				}
			});
			let e = function(i) {
					return i.INITIAL_FETCH_SCORES = "view bots scores distribution", i.FETCH_CONFIGURATION = "view bots configuration page", i.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", i.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", i.UPDATE_SETTINGS = "update bots settings", i.DELETE_RULE = "delete bots ruleset", i.UPDATE_RULE = "update bots ruleset", i.FETCH_RULES = "view bots ruleset", i.CONFIGURE_BOT_MANAGEMENT = "view bots management", i.WAF_RULES_REDIRECT = "redirect waf rules", i.CHANGED_ZONE_SETTINGS = "change zone setting", i
				}({}),
				r = function(i) {
					return i.PROVIDED_TEMPLATE = "provided template link in detection card", i.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", i.USE_TEMPLATE = "use template", i.CREATE_FIREWALL_RULE = "create firewall rule", i.WAF_RULES = "waf rules", i
				}({});
			const a = "user journey",
				u = "Bots"
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				NC: function() {
					return u
				},
				YC: function() {
					return _
				},
				aC: function() {
					return i
				},
				aR: function() {
					return a
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
				a = {
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
				},
				i = {
					[e.At.AILabyrinth]: 220,
					[e.At.BlockAIBots]: 337,
					[e.At.BrowserIntegrity]: 228,
					[e.At.ChallengePassage]: 385,
					[e.At.ClientCertificates]: 204,
					[e.At.CloudflareManagedRuleset]: 240,
					[e.At.CreateDeveloperPortal]: 228,
					[e.At.CustomFallthrough]: 252,
					[e.At.EndpointDiscovery]: 348,
					[e.At.FirewallAi]: 204,
					[e.At.HttpDdos]: 263,
					[e.At.IpAccessRules]: 228,
					[e.At.IpLists]: 204,
					[e.At.JwtValidation]: 356,
					[e.At.Labels]: 204,
					[e.At.LeakedCredentialCheck]: 204,
					[e.At.MaliciousUploadDetection]: 204,
					[e.At.ManagedRuleset]: 252,
					[e.At.Mtls]: 228,
					[e.At.NetworkDdos]: 231,
					[e.At.OwaspCore]: 252,
					[e.At.RateLimitAuthentication]: 228,
					[e.At.ReplaceInsecureJavascript]: 220,
					[e.At.RobotsTxt]: 220,
					[e.At.SequenceDetection]: 320,
					[e.At.SchemaDiscovery]: 348,
					[e.At.SchemaValidation]: 429,
					[e.At.SecurityLevel]: 337,
					[e.At.SecurityTxt]: 204,
					[e.At.SensitiveDataDetection]: 204,
					[e.At.SessionIdentifiers]: 228,
					[e.At.SslDdos]: 207,
					[e.At.TokenConfigurations]: 228,
					[e.At.UserAgentBlocking]: 204,
					[e.At.VolumetricAbuse]: 180,
					[e.At.ZoneLockdown]: 228,
					[e.At.ContinuousScriptMonitoring]: 361,
					[e.At.BotManagement]: 380,
					[e.At.SuperBotFightMode]: 204,
					[e.At.BotFightMode]: 204
				};
			let _ = function(c) {
				return c.LOAD_SETTINGS = "load setting", c.OPEN_SIDE_MODAL_SETTING = "open side modal setting", c.CLOSE_SIDE_MODAL_SETTING = "close side modal setting", c.CHANGE_SETTING = "change setting", c.FILTER_SETTING = "filter setting", c
			}({})
		},
		"../react/pages/security/detections/pages/root/components/new-settings/resources/types.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				At: function() {
					return u
				},
				MQ: function() {
					return e
				},
				fo: function() {
					return a
				}
			});
			let e = function(i) {
					return i.WebApplicationExploits = "web-application-exploits", i.DdosAttacks = "ddos-attacks", i.BotTraffic = "bot-traffic", i.ApiAbuse = "api-abuse", i.ClientSideAbuse = "client-side-abuse", i.DomainSettings = "domain-settings", i.WebAssetsAndEndpoints = "web-assets-and-endpoints", i.RuleTemplates = "rule-templates", i.Detections = "detections", i
				}({}),
				r = function(i) {
					return i.DomainSettings = "domain-settings", i.WebAssetsAndEndpoints = "web-assets-and-endpoints", i.RuleTemplates = "rule-templates", i.Detections = "detections", i
				}({}),
				a = function(i) {
					return i.Tab = "tabs", i.Filters = "filters", i
				}({}),
				u = function(i) {
					return i.AILabyrinth = "ai-labyrinth", i.BlockAIBots = "block-ai-bots", i.BrowserIntegrity = "browser-integrity", i.ChallengePassage = "challenge-passage", i.ClientCertificates = "client-certificates", i.CloudflareManagedRuleset = "cloudflare-managed-ruleset", i.CreateDeveloperPortal = "create-developer-portal", i.CustomFallthrough = "custom-fallthrough", i.EndpointDiscovery = "endpoint-discovery", i.FirewallAi = "firewall-ai", i.HttpDdos = "http-ddos", i.IpAccessRules = "ip-access-rules", i.IpLists = "ip-lists", i.JwtValidation = "jwt-validation", i.Labels = "labels", i.LeakedCredentialCheck = "leaked-credential-check", i.MaliciousUploadDetection = "malicious-upload-detection", i.ManagedRuleset = "managed-ruleset", i.Mtls = "mtls", i.NetworkDdos = "network-ddos", i.OwaspCore = "owasp-core", i.RateLimitAuthentication = "rate-limit-authentication", i.ReplaceInsecureJavascript = "replace-insecure-javascript", i.RobotsTxt = "robots-txt", i.SequenceDetection = "sequence-detection", i.SchemaDiscovery = "schema-discovery", i.SchemaValidation = "schema-validation", i.SecurityLevel = "security-level", i.SecurityTxt = "security-txt", i.SensitiveDataDetection = "sensitive-data-detection", i.SessionIdentifiers = "session-identifiers", i.SslDdos = "ssl-ddos", i.TokenConfigurations = "token-configurations", i.UserAgentBlocking = "user-agent-blocking", i.VolumetricAbuse = "volumetric-abuse", i.ZoneLockdown = "zone-lockdown", i.ContinuousScriptMonitoring = "continuous-script-monitoring", i.BotManagement = "bot-management", i.SuperBotFightMode = "super-bot-fight-mode", i.BotFightMode = "bot-fight-mode", i
				}({})
		},
		"../react/pages/security/overview/resources/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				AZ: function() {
					return u
				},
				BQ: function() {
					return i
				},
				Ht: function() {
					return a
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
					return _
				}
			});
			let e = function(l) {
				return l.NAME = "description", l.SOURCE = "source", l.LAST_UPDATE = "lastUpdatedAt", l.ACTIVITY = "activity", l
			}({});
			const r = 5;
			let a = function(l) {
					return l.EXTERNAL_DOCUMENTATION = "external_documentation", l.LINK_TO_MANAGED = "link_to_managed_rules", l.LINK_TO_EVENTS = "link_to_security_events", l.LINK_TO_DDOS = "link_to_ddos", l.LINK_BOT_MGMT = "link_to_bot_mgmt", l.LINK_TO_AI_AUDIT = "link_to_ai_audit", l.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", l.LINK_TO_PAGE_SHIELD = "link_to_page_shield", l.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", l.LINK_TO_SECURITY_EVENTS = "link_to_security_events", l.LINK_TO_IP_RULE = "link_to_ip_rule", l.LINK_TO_CONFIGURATION = "link_to_configuration", l.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", l.LINK_TO_WEB_ASSETS = "link_to_web_assets", l.LINK_TO_DOMAINS = "link_to_domains", l
				}({}),
				u = function(l) {
					return l.LOAD_INSIGHTS = "load overview action items", l.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", l.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", l.CLICK_ACTION_INSIGHT = "click overview action item suggestion", l
				}({});
			const i = "security-overview-all-suggestions",
				_ = [{
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
		"../react/pages/security/page-shield/resources/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return L
				},
				FV: function() {
					return Q
				},
				KH: function() {
					return I
				},
				Ks: function() {
					return U
				},
				Lj: function() {
					return j
				},
				MC: function() {
					return o
				},
				Mq: function() {
					return M
				},
				OV: function() {
					return ce
				},
				Oq: function() {
					return P
				},
				QM: function() {
					return v
				},
				SI: function() {
					return K
				},
				SJ: function() {
					return O
				},
				Sk: function() {
					return S
				},
				Ti: function() {
					return A
				},
				Uc: function() {
					return T
				},
				Uq: function() {
					return l
				},
				Uv: function() {
					return le
				},
				V0: function() {
					return g
				},
				VT: function() {
					return d
				},
				YC: function() {
					return G
				},
				j$: function() {
					return E
				},
				qc: function() {
					return w
				},
				sV: function() {
					return b
				},
				sW: function() {
					return F
				},
				u8: function() {
					return f
				},
				v5: function() {
					return n
				},
				xg: function() {
					return te
				},
				yd: function() {
					return C
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/page-shield/resources/types.ts");

			function u(N) {
				for (var $ = 1; $ < arguments.length; $++) {
					var q = arguments[$] != null ? Object(arguments[$]) : {},
						ee = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ee.push.apply(ee, Object.getOwnPropertySymbols(q).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(q, ie).enumerable
					})), ee.forEach(function(ie) {
						i(N, ie, q[ie])
					})
				}
				return N
			}

			function i(N, $, q) {
				return $ = _($), $ in N ? Object.defineProperty(N, $, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[$] = q, N
			}

			function _(N) {
				var $ = c(N, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function c(N, $) {
				if (typeof N != "object" || N === null) return N;
				var q = N[Symbol.toPrimitive];
				if (q !== void 0) {
					var ee = q.call(N, $ || "default");
					if (typeof ee != "object") return ee;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(N)
			}
			const l = 50,
				g = 9,
				n = "copy script url page shield",
				o = "disable page shield",
				s = "click documentation link",
				f = "enable page shield",
				d = "filter search page shield",
				p = "filter search view all page shield",
				w = "hover score tooltip page shield",
				O = "open alert modal page shield",
				E = "change pagination page shield",
				m = "close script modal page shield",
				C = "open script modal page shield",
				v = "select alert type page shield",
				T = "sort column page shield",
				M = {
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
				I = {
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
						operators: [I.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [I.CONTAINS, I.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [I.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [I.INCLUDES, I.ENDS_WITH, I.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				L = u({}, P, {
					urls: u({}, P.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				b = {
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
			let D = function(N) {
				return N.SECURITY_THREATS = "Security Threats", N.C2_BOTNET = "C2 & Botnet", N.CRYPTOMINING = "Cryptomining", N.MALWARE = "Malware", N.PHISHING = "Phishing", N.SPYWARE = "Spyware", N.DGA_DOMAINS = "DGA Domains", N.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", N
			}({});
			const S = "https://www.cloudflare.com/plans/enterprise/contact/",
				G = {
					[a.I1.BASE_URI]: "page_shield.policies.form.base_uri",
					[a.I1.CHILD]: "page_shield.policies.form.child",
					[a.I1.CONNECT]: "page_shield.policies.form.connections",
					[a.I1.DEFAULT]: "page_shield.policies.form.default",
					[a.I1.FONT]: "page_shield.policies.form.font",
					[a.I1.FORM_ACTION]: "page_shield.policies.form.form",
					[a.I1.FRAME]: "page_shield.policies.form.frame",
					[a.I1.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[a.I1.IMAGE]: "page_shield.policies.form.img",
					[a.I1.MANIFEST]: "page_shield.policies.form.manifest",
					[a.I1.MEDIA]: "page_shield.policies.form.media",
					[a.I1.OBJECT]: "page_shield.policies.form.object",
					[a.I1.SCRIPT]: "page_shield.policies.form.script",
					[a.I1.STYLE]: "page_shield.policies.form.style",
					[a.I1.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[a.I1.WORKER]: "page_shield.policies.form.worker"
				},
				te = {
					[a.I1.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[a.I1.CHILD]: "firewall.page_shield.policies.table.child",
					[a.I1.CONNECT]: "firewall.page_shield.policies.table.connections",
					[a.I1.DEFAULT]: "firewall.page_shield.policies.table.default",
					[a.I1.FONT]: "firewall.page_shield.policies.table.font",
					[a.I1.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[a.I1.FRAME]: "firewall.page_shield.policies.table.frame",
					[a.I1.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[a.I1.IMAGE]: "firewall.page_shield.policies.table.img",
					[a.I1.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[a.I1.MEDIA]: "firewall.page_shield.policies.table.media",
					[a.I1.OBJECT]: "firewall.page_shield.policies.table.object",
					[a.I1.SCRIPT]: "firewall.page_shield.policies.table.script",
					[a.I1.SCRIPT_ELEM]: "firewall.page_shield.policies.table.script",
					[a.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[a.I1.STYLE_ELEM]: "firewall.page_shield.policies.table.style",
					[a.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[a.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				le = {
					[a.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[a.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[a.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[a.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[a.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				ce = {
					[a.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[a.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				Q = {
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
				F = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				K = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				j = {
					[a.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[a.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[a.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				U = {
					[a.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[a.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[a.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				A = {
					[a.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[a.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[a.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(W, y, t) {
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
					return v.Xe
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
					return v.k2
				},
				$g: function() {
					return v.$g
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
					return v.I1
				},
				Wq: function() {
					return v.Wq
				},
				jf: function() {
					return v.jf
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
					return v.R$
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return E
				},
				m: function() {
					return w
				},
				xP: function() {
					return p
				},
				xl: function() {
					return d
				},
				Tb: function() {
					return f
				},
				h3: function() {
					return m
				},
				xq: function() {
					return ie
				},
				SQ: function() {
					return U
				},
				C0: function() {
					return A
				},
				av: function() {
					return I
				},
				W3: function() {
					return T
				},
				WO: function() {
					return D
				},
				Dk: function() {
					return te
				},
				we: function() {
					return ce
				},
				Yt: function() {
					return K
				},
				ex: function() {
					return F
				},
				E1: function() {
					return Q
				},
				dm: function() {
					return L
				},
				oK: function() {
					return S
				},
				qZ: function() {
					return j
				},
				_4: function() {
					return N
				},
				qo: function() {
					return $
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");

			function i(x) {
				for (var V = 1; V < arguments.length; V++) {
					var k = arguments[V] != null ? Object(arguments[V]) : {},
						Z = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(k).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(k, ae).enumerable
					})), Z.forEach(function(ae) {
						_(x, ae, k[ae])
					})
				}
				return x
			}

			function _(x, V, k) {
				return V = c(V), V in x ? Object.defineProperty(x, V, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[V] = k, x
			}

			function c(x) {
				var V = l(x, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function l(x, V) {
				if (typeof x != "object" || x === null) return x;
				var k = x[Symbol.toPrimitive];
				if (k !== void 0) {
					var Z = k.call(x, V || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(x)
			}
			const g = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", x => (a().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", x => (a().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				o = (x, V) => {
					var k;
					return JSON.stringify(i({}, V == null || (k = V[0]) === null || k === void 0 ? void 0 : k.parameters, x))
				};
			let s = "";
			const f = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (x, V, k) => (s = o(V, k), x)).on("success", x => (a().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), x)).on("error", (x, V, k) => o(V, k) === s ? x : {
					type: "noop"
				}),
				d = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				p = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", x => (a().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				w = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				O = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", x => (a().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), x)),
				E = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				m = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var C = t("../react/app/redux/normalizer.js"),
				v = t("../react/pages/security/page-shield/resources/types.ts");
			const T = x => x.pageShield.configuration,
				M = x => {
					var V;
					return (V = x.pageShield.configuration.data) === null || V === void 0 ? void 0 : V.enabled
				},
				I = x => {
					var V;
					return (V = T(x)) === null || V === void 0 ? void 0 : V.data
				},
				P = x => x.pageShield.scripts,
				L = x => x.pageShield.script,
				b = x => x.pageShield.connections,
				D = x => x.pageShield.connection,
				S = (0, C.P1)("pageShieldScripts", P),
				G = (0, C.P1)("pageShieldScript", L),
				te = (0, C.P1)("pageShieldConnections", b),
				le = (0, C.P1)("pageShieldConnection", D),
				ce = (x, V) => x === v.Wq.SCRIPT_MONITOR ? S(V) || [] : te(V) || [],
				Q = (x, V) => x === v.Wq.SCRIPT_MONITOR ? P(V) || [] : b(V) || [],
				F = (x, V) => x === v.Wq.SCRIPT_MONITOR ? G(V) : le(V),
				K = x => x.pageShield.domainIntel,
				j = x => x.pageShield.whoIsRecord,
				U = (x, V, k) => {
					var Z;
					const ae = Object.values(k).map(pe => ({
						key: pe,
						label: u.Uv[pe],
						score: x[pe]
					})).filter(pe => pe.score !== void 0 && pe.score <= V);
					return V === u.V0 && ae.length === 0 && ((Z = x.js_integrity_score) !== null && Z !== void 0 ? Z : 100) <= V && ae.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ae
				},
				A = (x, V) => Object.values(V).filter(k => x[k] === !0).map(k => u.OV[k]),
				N = x => x === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				$ = (x, V) => x[v.$g.MagecartScore] !== void 0 && x[v.$g.MagecartScore] <= V || x[v.$g.MalwareScore] !== void 0 && x[v.$g.MalwareScore] <= V || x[v.$g.CryptominingScore] !== void 0 && x[v.$g.CryptominingScore] <= V || x.js_integrity_score !== void 0 && x.js_integrity_score <= V,
				q = ["cdn.jsdelivr.net", "unpkg.com"],
				ee = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ie = x => {
					if (x.includes("@latest")) {
						const k = x.split("@latest");
						if (k.length != 2) return;
						const Z = k[0].length,
							ae = Z + "@latest".length;
						return [Z, ae]
					}
					if (!!q.some(k => x.includes(k)))
						for (const k of ee) {
							const Z = x.match(k);
							if (!Z) continue;
							const ae = Z.index;
							if (ae === 0) return null;
							const pe = ae + Z[0].length;
							return [ae, pe]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$g: function() {
					return g
				},
				I1: function() {
					return i
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return l
				},
				Xe: function() {
					return _
				},
				jf: function() {
					return c
				},
				k2: function() {
					return o
				}
			});

			function e(s) {
				for (var f = 1; f < arguments.length; f++) {
					var d = arguments[f] != null ? Object(arguments[f]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(w) {
						return Object.getOwnPropertyDescriptor(d, w).enumerable
					})), p.forEach(function(w) {
						r(s, w, d[w])
					})
				}
				return s
			}

			function r(s, f, d) {
				return f = a(f), f in s ? Object.defineProperty(s, f, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[f] = d, s
			}

			function a(s) {
				var f = u(s, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function u(s, f) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(s, f || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(s)
			}
			let i = function(s) {
				return s.BASE_URI = "base-uri", s.CHILD = "child-src", s.CONNECT = "connect-src", s.DEFAULT = "default-src", s.FONT = "font-src", s.FORM_ACTION = "form-action", s.FRAME = "frame-src", s.FRAME_ANCESTORS = "frame-ancestors", s.IMAGE = "img-src", s.MANIFEST = "manifest-src", s.MEDIA = "media-src", s.OBJECT = "object-src", s.SCRIPT = "script-src", s.SCRIPT_ELEM = "script-src-elem", s.STYLE = "style-src", s.STYLE_ELEM = "style-src-elem", s.WORKER = "worker-src", s.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", s
			}({});
			const _ = e({}, i, {
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
			let c = function(s) {
					return s.MONITOR = "monitor", s.POLICIES = "policies", s.SETTINGS = "settings", s
				}({}),
				l = function(s) {
					return s.SCRIPT_MONITOR = "script", s.CONNECTION_MONITOR = "connection", s.COOKIE_MONITOR = "cookie", s
				}({}),
				g = function(s) {
					return s.CryptominingScore = "cryptomining_score", s.MalwareScore = "malware_score", s.MagecartScore = "magecart_score", s
				}({}),
				n = function(s) {
					return s.DataflowScore = "dataflow_score", s.ObfuscationScore = "obfuscation_score", s
				}({}),
				o = function(s) {
					return s.DomainMalicious = "domain_reported_malicious", s.UrlMalicious = "url_reported_malicious", s
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				_C: function() {
					return d
				},
				_R: function() {
					return p
				},
				dY: function() {
					return O
				},
				fy: function() {
					return C
				},
				ji: function() {
					return f
				},
				pR: function() {
					return w
				},
				pV: function() {
					return v
				},
				rj: function() {
					return m
				},
				yR: function() {
					return T
				},
				zf: function() {
					return E
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				i = t("../react/utils/translator.tsx"),
				_ = t("../react/pages/security/resources/types.ts"),
				c = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				l = t("../node_modules/@cloudflare/elements/es/index.js");

			function g(M) {
				for (var I = 1; I < arguments.length; I++) {
					var P = arguments[I] != null ? Object(arguments[I]) : {},
						L = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(P).filter(function(b) {
						return Object.getOwnPropertyDescriptor(P, b).enumerable
					})), L.forEach(function(b) {
						n(M, b, P[b])
					})
				}
				return M
			}

			function n(M, I, P) {
				return I = o(I), I in M ? Object.defineProperty(M, I, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[I] = P, M
			}

			function o(M) {
				var I = s(M, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function s(M, I) {
				if (typeof M != "object" || M === null) return M;
				var P = M[Symbol.toPrimitive];
				if (P !== void 0) {
					var L = P.call(M, I || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(M)
			}
			const f = 10;
			let d = function(M) {
					return M.MTLS_ACCESS = "mTLS-enforced authentication", M.ZONE_LOCKDOWN = "Zone lockdown", M.USER_AGENT = "User agent blocking", M.EMAIL_VALIDITY = "Disposable email checks", M.IP_BASED = "IP-based rule", M.GEOGRAPHY_BASE = "Geography-based rule", M
				}({}),
				p = function(M) {
					return M.LEAKED_CREDENTIALS = "Leaked Credentials Checks", M
				}({});
			const w = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				O = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: d.GEOGRAPHY_BASE,
					trackedEvent: w.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: d.IP_BASED,
					trackedEvent: w.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: d.USER_AGENT,
					trackedEvent: w.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: d.ZONE_LOCKDOWN,
					trackedEvent: w.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				E = {
					[_.X.UI_SECTION]: M => ({
						[d.MTLS_ACCESS]: {
							ruleName: d.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${M.account.id}/${M.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[d.ZONE_LOCKDOWN]: {
							ruleName: d.ZONE_LOCKDOWN,
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [l.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${M.account.id}/configurations/lists`
								}]
							})
						},
						[d.GEOGRAPHY_BASE]: {
							ruleName: d.GEOGRAPHY_BASE,
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[d.IP_BASED]: {
							ruleName: d.IP_BASED,
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [l.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${M.account.id}/configurations/lists`
								}]
							})
						},
						[d.USER_AGENT]: {
							ruleName: d.USER_AGENT,
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${M.account.id}/configurations/lists`
								}]
							})
						},
						[d.EMAIL_VALIDITY]: {
							ruleName: d.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: u().createElement(i.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[_.X.WAF_RULES]: {
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
					[_.X.WAF_RULES]: {
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
					[_.X.UI_SECTION]: {
						[p.LEAKED_CREDENTIALS]: {
							ruleName: p.LEAKED_CREDENTIALS,
							displayName: u().createElement(i.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(i.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let C = function(M) {
				return M.DISCOVERY = "discovery", M.SEQUENCES = "sequences", M.SCHEMA_VALIDATION = "schema-validation", M.SETTINGS = "settings", M.API_RULES = "api-rules", M.UPGRADE = "upgrade", M
			}({});
			const v = g({}, c.g, {
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
			let T = function(M) {
				return M.APP_SEC_MVP = "app-security-navigation-mvp", M.APP_SEC_SETTINGS_UI = "new-security-settings-ui", M
			}({})
		},
		"../react/pages/security/resources/types.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				X: function() {
					return e
				}
			});
			let e = function(a) {
					return a.UI_SECTION = "UI_SECTION", a.WAF_RULES = "WAF_RULES", a
				}({}),
				r = function(a) {
					return a.Low = "low", a.Medium = "medium", a.Critical = "critical", a
				}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(W, y, t) {
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

			function a(g) {
				for (var n = 1; n < arguments.length; n++) {
					var o = arguments[n] != null ? Object(arguments[n]) : {},
						s = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && s.push.apply(s, Object.getOwnPropertySymbols(o).filter(function(f) {
						return Object.getOwnPropertyDescriptor(o, f).enumerable
					})), s.forEach(function(f) {
						u(g, f, o[f])
					})
				}
				return g
			}

			function u(g, n, o) {
				return n = i(n), n in g ? Object.defineProperty(g, n, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[n] = o, g
			}

			function i(g) {
				var n = _(g, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function _(g, n) {
				if (typeof g != "object" || g === null) return g;
				var o = g[Symbol.toPrimitive];
				if (o !== void 0) {
					var s = o.call(g, n || "default");
					if (typeof s != "object") return s;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(g)
			}
			let c = function(g) {
				return g.CLICK_OPT_IN = "click opt in security navigation", g.CLICK_OPT_IN_BUTTON = "click opt in button", g.CLICK_OPT_OUT_BUTTON = "click opt out button", g.CLICK_NEXT_STEP = "click opt in next step", g.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", g.DISPLAY_MODAL = "display opt in modal", g.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", g.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", g.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", g
			}({});
			const l = (g, n = {}) => {
				r().sendEvent(g, a({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(W, y, t) {
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
					return i
				},
				CK: function() {
					return l
				},
				F3: function() {
					return p
				},
				JP: function() {
					return a
				},
				O_: function() {
					return o
				},
				X2: function() {
					return u
				},
				YO: function() {
					return w
				},
				_c: function() {
					return O
				},
				je: function() {
					return f
				},
				ll: function() {
					return _
				},
				qD: function() {
					return c
				},
				tw: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async E => {
				var m, C;
				const v = await (0, e.get)(`/zones/${E}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((m = v == null ? void 0 : v.body) === null || m === void 0 || (C = m.result) === null || C === void 0 ? void 0 : C.value) === "enabled"
			}, u = async (E, m) => (await (0, e.post)(`/zones/${E}/content-upload-scan/${m?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), m), i = async E => {
				var m;
				const C = await (0, e.get)(`/zones/${E}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((m = C == null ? void 0 : C.body) === null || m === void 0 ? void 0 : m.result) || []
			}, _ = async (E, m) => {
				var C;
				const v = await (0, e.post)(`/zones/${E}/content-upload-scan/payloads`, {
					body: [m]
				});
				return (C = v == null ? void 0 : v.body) === null || C === void 0 ? void 0 : C.result
			}, c = async (E, m) => (await (0, e.del)(`/zones/${E}/content-upload-scan/payloads/${m}`, {
				hideErrorAlert: !0
			}), m), l = async E => {
				var m;
				const C = await (0, e.get)(`/zones/${E}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((m = C == null ? void 0 : C.body) === null || m === void 0 ? void 0 : m.pii_detection_enabled)
			}, g = async (E, m) => (await (0, e.put)(`/zones/${E}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: m
				}
			}), m), n = async E => {
				var m, C;
				const v = await (0, e.get)(`/zones/${E}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((m = v == null ? void 0 : v.body) === null || m === void 0 || (C = m.result) === null || C === void 0 ? void 0 : C.enabled)
			}, o = async (E, m) => {
				var C, v;
				const T = await (0, e.post)(`/zones/${E}/leaked-credential-checks`, {
					body: {
						enabled: m
					}
				});
				return !!((C = T == null ? void 0 : T.body) === null || C === void 0 || (v = C.result) === null || v === void 0 ? void 0 : v.enabled)
			}, s = async E => {
				var m;
				const C = await (0, e.get)(`/zones/${E}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (m = C == null ? void 0 : C.body) === null || m === void 0 ? void 0 : m.result
			}, f = async (E, m) => {
				var C;
				const v = await (0, e.post)(`/zones/${E}/leaked-credential-checks/detections`, {
					body: m
				});
				return (C = v == null ? void 0 : v.body) === null || C === void 0 ? void 0 : C.result
			}, d = async (E, m) => (await (0, e.del)(`/zones/${E}/leaked-credential-checks/detections/${m}`, {
				hideErrorAlert: !0
			}), m), p = async (E, m) => {
				await (0, e.put)(`/zones/${E}/security-center/securitytxt`, {
					body: m
				})
			}, w = async E => {
				await (0, e.del)(`/zones/${E}/security-center/securitytxt`)
			}, O = async E => (await (0, e.get)(`/zones/${E}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Xu: function() {
					return d
				},
				Io: function() {
					return v
				},
				FQ: function() {
					return Q
				},
				vU: function() {
					return f
				},
				M: function() {
					return w
				},
				d7: function() {
					return p
				},
				Oz: function() {
					return C
				},
				Np: function() {
					return G
				},
				WR: function() {
					return g
				},
				bE: function() {
					return te
				},
				u_: function() {
					return s
				},
				pf: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				i = t("../react/pages/security/settings/resources/index.ts"),
				_ = t("../react/common/hooks/useZoneEntitlement.ts"),
				c = t("../../../../node_modules/yup/es/index.js"),
				l = t("../react/utils/translator.tsx");
			const g = () => (0, u.useSelector)(i.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				o = () => !!useZoneEntitlement(n),
				s = () => {
					const {
						t: F
					} = (0, l.QT)(), K = c.Z_().required(F("common.field_is_required")).max(24, F("labels.apply.form.name.error.max_characters")).matches(i.DG, F("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", F("labels.apply.form.name.error.cf_forbidden"), A => !i.aW.test(A)), j = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: A => c.Ry().shape({
							[i.n5.NAME]: A ? c.Z_() : K,
							[i.n5.DESCRIPTION]: A ? c.Z_().optional() : c.Z_().max(150, F("labels.apply.form.description.error.max_characters"))
						})
					}, U = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[i.N2.NAME]: "",
							[i.N2.SOURCE]: i.W3,
							[i.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => c.Ry().shape({
							[i.N2.NEW_LABEL_NAME]: K
						})
					};
					return {
						LABELS_APPLY_FORM: j,
						EDIT_LABELS_MODAL_FORM: U
					}
				},
				f = ({
					modalHeaderFixedHeight: F = 62,
					modalDefaultPaddings: K = 16
				} = {}) => {
					const j = (0, a.useRef)(null),
						U = (0, a.useRef)(null),
						[A, N] = (0, a.useState)(0),
						[$, q] = (0, a.useState)(0),
						ee = `calc(100vh - ${A}px - ${$}px - ${K}px)`,
						[ie, x] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const V = () => {
							var k, Z, ae, pe;
							const ue = j == null || (k = j.current) === null || k === void 0 ? void 0 : k.offsetHeight,
								ve = U == null || (Z = U.current) === null || Z === void 0 ? void 0 : Z.offsetHeight,
								ne = ((ae = ue) !== null && ae !== void 0 ? ae : 0) + F,
								Oe = (pe = ve) !== null && pe !== void 0 ? pe : 0;
							N(ne), q(Oe)
						};
						return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V)
					}, []), {
						searchTerm: ie,
						setSearchTerm: x,
						scrollableSectionMaxHeight: ee,
						topMenuRef: j,
						bottomMenuRef: U
					}
				},
				d = F => {
					const K = g(),
						j = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${F}`,
							queryFn: () => (0, r.JP)(F),
							enabled: K
						}),
						A = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${F}`,
							queryFn: () => (0, r.BT)(F),
							enabled: K && !!(U == null ? void 0 : U.data)
						}),
						N = (0, e.useMutation)({
							mutationFn: async ({
								enabled: ee
							}) => await (0, r.X2)(F, ee),
							onSuccess: ee => {
								j.setQueryData([`content-scanning-enabled-${F}`], ee)
							}
						}),
						$ = (0, e.useMutation)({
							mutationFn: ee => (0, r.ll)(F, ee),
							onSuccess: ee => {
								j.setQueryData([`content-scanning-detections-${F}`], ee)
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: ee => (0, r.qD)(F, ee),
							onSuccess: ee => {
								var ie;
								const x = (ie = j.getQueryData(`content-scanning-detections-${F}`)) !== null && ie !== void 0 ? ie : [];
								j.setQueryData([`content-scanning-detections-${F}`], x.filter(({
									id: V
								}) => V !== ee))
							}
						});
					return {
						entitled: K,
						loading: U.isLoading || A.isLoading,
						error: U.isError || A.isError,
						enabled: {
							data: U.data,
							isToggling: N.isLoading,
							toggleEnabled: async ee => N.mutateAsync({
								enabled: ee
							})
						},
						detections: {
							data: A.data,
							add: $.mutateAsync,
							delete: q.mutateAsync,
							loading: $.isLoading || q.isLoading
						}
					}
				},
				p = () => {
					const F = (0, u.useSelector)(i.cN),
						K = (0, u.useSelector)(i.bH),
						j = (0, u.useSelector)(i.P3),
						U = (0, u.useSelector)(i.Ri);
					return {
						hasEditPermission: F,
						isEnabled: j && (K.hasSimilarLeaked || K.hasUsernameAndPasswordLeaked || U)
					}
				},
				w = F => {
					const K = p(),
						j = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${F}`,
							queryFn: () => (0, r.Ai)(F),
							enabled: !!K.isEnabled,
							retry: 1
						}),
						A = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${F}`,
							queryFn: () => (0, r.tw)(F),
							enabled: !!K.isEnabled && !!(U == null ? void 0 : U.data)
						}),
						N = (0, e.useMutation)({
							mutationFn: ({
								enabled: ee
							}) => (0, r.O_)(F, ee),
							onSuccess: ee => {
								j.setQueryData([`leaked-credentials-enabled-${F}`], ee)
							}
						}),
						$ = (0, e.useMutation)({
							mutationFn: async ee => await (0, r.je)(F, ee),
							onSuccess: ee => {
								var ie;
								const x = (ie = j.getQueryData(`leaked-credentials-detections-${F}`)) !== null && ie !== void 0 ? ie : [];
								j.setQueryData([`leaked-credentials-detections-${F}`], [...x, ee])
							}
						}),
						q = (0, e.useMutation)({
							mutationFn: ee => (0, r.$y)(F, ee),
							onSuccess: ee => {
								var ie;
								const x = (ie = j.getQueryData(`leaked-credentials-detections-${F}`)) !== null && ie !== void 0 ? ie : [];
								j.setQueryData([`leaked-credentials-detections-${F}`], x.filter(({
									id: V
								}) => V !== ee))
							}
						});
					return {
						entitled: K.isEnabled,
						hasEditPermissions: K.hasEditPermission,
						loading: U.isLoading || A.isLoading,
						error: U.isError || U.isError,
						enabled: {
							data: U.data,
							isToggling: N.isLoading,
							toggleEnabled: async ee => N.mutateAsync({
								enabled: ee
							})
						},
						detections: {
							data: A.data,
							add: $.mutateAsync,
							delete: q.mutateAsync,
							loading: $.isLoading || q.isLoading
						}
					}
				};
			var O = t("../react/common/utils/useQueryCache.ts");
			const E = "security-txt",
				m = {
					securityTxt: ({
						zoneId: F
					}) => [E, F]
				},
				C = F => (0, e.useQuery)({
					queryKey: m.securityTxt({
						zoneId: F
					}),
					queryFn: () => (0, r._c)(F),
					select: K => K.result
				}),
				v = F => {
					const {
						invalidate: K
					} = (0, O.o)(m.securityTxt({
						zoneId: F
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(F),
						onSuccess: async () => {
							await K(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				T = F => {
					const {
						invalidate: K
					} = (0, O.o)(m.securityTxt({
						zoneId: F
					}));
					return (0, e.useMutation)({
						mutationFn: j => (0, r.F3)(F, j),
						onSuccess: async () => {
							await K(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var M = t("../../../../node_modules/lodash/isEqual.js"),
				I = t.n(M),
				P = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function L(F) {
				for (var K = 1; K < arguments.length; K++) {
					var j = arguments[K] != null ? Object(arguments[K]) : {},
						U = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(j).filter(function(A) {
						return Object.getOwnPropertyDescriptor(j, A).enumerable
					})), U.forEach(function(A) {
						b(F, A, j[A])
					})
				}
				return F
			}

			function b(F, K, j) {
				return K = D(K), K in F ? Object.defineProperty(F, K, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[K] = j, F
			}

			function D(F) {
				var K = S(F, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function S(F, K) {
				if (typeof F != "object" || F === null) return F;
				var j = F[Symbol.toPrimitive];
				if (j !== void 0) {
					var U = j.call(F, K || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(F)
			}
			const G = F => {
					const {
						queryKey: K,
						zoneId: j
					} = (0, P.hL)(F), {
						isLoading: U,
						isError: A,
						isSuccess: N,
						data: $,
						refetch: q,
						isRefetching: ee
					} = (0, e.useQuery)({
						queryKey: K,
						queryFn: () => P.Mi.getLabels(L({
							zoneId: j
						}, F)),
						onSuccess: () => {
							var ie;
							const x = F == null || (ie = F.filters) === null || ie === void 0 ? void 0 : ie.source;
							(x === i.LABEL_SOURCES.MANAGED || x === i.LABEL_SOURCES.USER) && (0, i.Tf)({
								name: i.QJ.FILTER_USER_MANAGED_LABELS,
								product: i.Iv.SECURITY_SETTINGS,
								pageName: i.R.LABELS_LIST,
								type: x
							})
						}
					});
					return {
						data: $ == null ? void 0 : $.result,
						errors: $ == null ? void 0 : $.errors,
						paginationData: $ == null ? void 0 : $.result_info,
						isLoading: U,
						isError: A,
						isSuccess: N,
						refetch: q,
						isRefetching: ee
					}
				},
				te = ({
					labels: F,
					preselectedLabels: K
				}) => {
					const {
						USER: j,
						MANAGED: U
					} = i.LABEL_SOURCES, [A, N] = (0, a.useState)({
						[j]: [],
						[U]: []
					}), [$, q] = (0, a.useState)(new Set), ee = $.size > 0, [ie, x] = (0, a.useState)(!1), V = pe => {
						q(ue => {
							const ve = new Set(ue);
							return ve.has(pe.name) ? ve.delete(pe.name) : ve.add(pe.name), ve
						})
					}, k = pe => $.has(pe.name), Z = (pe, ue) => {
						const ve = k(pe) ? 1 : 0;
						return (k(ue) ? 1 : 0) - ve
					}, ae = pe => {
						N(ue => ({
							[j]: [...pe ? pe[j] : ue[j]].sort(Z),
							[U]: [...pe ? pe[U] : ue[U]].sort(Z)
						}))
					};
					return (0, a.useEffect)(() => {
						if (F && !ie) {
							if (K) {
								const pe = new Set;
								F.forEach(ue => {
									K.some(ve => I()(ve, ue)) && pe.add(ue.name)
								}), q(pe)
							}
							x(!0)
						}
					}, [F, K, ie]), (0, a.useEffect)(() => {
						if (F && ie) {
							const pe = F.reduce((ve, ne) => (ne.source === j ? ve[j].push(ne) : ne.source === U && ve[U].push(ne), ve), {
									[j]: [],
									[U]: []
								}),
								ue = {
									[j]: pe[j].sort(Z),
									[U]: pe[U].sort(Z)
								};
							N(ue)
						}
					}, [j, U, F, ie]), {
						userAndManagedLabels: A,
						setUserAndManagedLabels: N,
						toggleSelectedLabel: V,
						isLabelSelected: k,
						sortLabelsBySelectedStatus: ae,
						hasLabelsSelected: ee
					}
				};
			var le = t("../react/app/redux/index.ts"),
				ce = t("../react/pages/security/settings/resources/selectors.ts");
			const Q = (F = "") => {
				const K = (0, le.p4)(ce.Xs),
					j = K && (F == null ? void 0 : F.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: K,
					hasDeprecatedParameter: j
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(W, y, t) {
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
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				i = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				_ = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(_),
				l = t("../react/pages/security/settings/hooks/index.ts"),
				g = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(16691), t.e(14917), t.e(12174), t.e(1091), t.e(31358), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(5756), t.e(83276), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				o = () => {
					const {
						t: s
					} = (0, _.useI18n)(), f = (0, e.xk)("waf");
					return u().createElement(i.T3, {
						parentPageLabel: s("navigation.zone.security"),
						title: s("navigation.zone.security.settings"),
						type: "narrow"
					}, f.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			y.ZP = o
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Mi: function() {
					return m
				},
				hL: function() {
					return E
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../react/common/hooks/useAccountId.ts"),
				_ = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
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

			function s(v, T) {
				if (v == null) return {};
				var M = f(v, T),
					I, P;
				if (Object.getOwnPropertySymbols) {
					var L = Object.getOwnPropertySymbols(v);
					for (P = 0; P < L.length; P++) I = L[P], !(T.indexOf(I) >= 0) && (!Object.prototype.propertyIsEnumerable.call(v, I) || (M[I] = v[I]))
				}
				return M
			}

			function f(v, T) {
				if (v == null) return {};
				var M = {},
					I = Object.keys(v),
					P, L;
				for (L = 0; L < I.length; L++) P = I[L], !(T.indexOf(P) >= 0) && (M[P] = v[P]);
				return M
			}

			function d(v) {
				for (var T = 1; T < arguments.length; T++) {
					var M = arguments[T] != null ? Object(arguments[T]) : {},
						I = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), I.forEach(function(P) {
						p(v, P, M[P])
					})
				}
				return v
			}

			function p(v, T, M) {
				return T = w(T), T in v ? Object.defineProperty(v, T, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[T] = M, v
			}

			function w(v) {
				var T = O(v, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function O(v, T) {
				if (typeof v != "object" || v === null) return v;
				var M = v[Symbol.toPrimitive];
				if (M !== void 0) {
					var I = M.call(v, T || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(v)
			}
			const E = v => {
					const T = (0, e.p4)(r.Cu),
						M = (0, i.F)(),
						I = C.labels(d({
							accountId: M,
							zoneId: T
						}, v ? d({}, v) : {})),
						P = (0, a.o)(I);
					return d({
						zoneId: T,
						queryKey: I,
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
					getLabels: async v => {
						var T, M, I, P;
						let {
							zoneId: L,
							hideErrorAlert: b = !0
						} = v, D = s(v, ["zoneId", "hideErrorAlert"]);
						return (await _.get(l.labels.toUrl({
							zoneId: L
						}), {
							parameters: {
								page: D == null ? void 0 : D.page,
								per_page: D == null ? void 0 : D.per_page,
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts,
								filter: D == null || (T = D.filters) === null || T === void 0 ? void 0 : T.search,
								source: (0, n.sQ)(D == null || (M = D.filters) === null || M === void 0 ? void 0 : M.source),
								order: D == null || (I = D.sort) === null || I === void 0 ? void 0 : I.id,
								direction: (D == null ? void 0 : D.sort) ? (D == null || (P = D.sort) === null || P === void 0 ? void 0 : P.desc) ? o.Sr.desc : o.Sr.asc : void 0
							},
							hideErrorAlert: b
						})).body
					},
					getLabel: async v => {
						let {
							zoneId: T,
							labelName: M,
							hideErrorAlert: I = !0
						} = v, P = s(v, ["zoneId", "labelName", "hideErrorAlert"]);
						const L = (0, n.mm)(M) ? l.managedLabel.toUrl({
							zoneId: T,
							labelName: M
						}) : l.userLabel.toUrl({
							zoneId: T,
							labelName: M
						});
						return (await _.get(L, {
							parameters: {
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts
							},
							hideErrorAlert: I
						})).body
					},
					editLabel: async ({
						zoneId: v,
						label: T,
						replace: M
					}) => {
						const {
							name: I
						} = T, P = s(T, ["name"]);
						return (await (M ? _.put : _.patch)(l.userLabel.toUrl({
							zoneId: v,
							labelName: T.name
						}), {
							body: P
						})).body
					},
					deleteLabel: async ({
						zoneId: v,
						labelName: T
					}) => (await _.del(l.userLabel.toUrl({
						zoneId: v,
						labelName: T
					}))).body,
					createLabel: async v => {
						let {
							zoneId: T
						} = v, M = s(v, ["zoneId"]);
						const {
							product: I
						} = M, P = s(M, ["product"]);
						return (await _.post(l.userLabels.toUrl({
							zoneId: T
						}), {
							body: [P]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: v,
						user: T,
						managed: M,
						operationIds: I,
						replace: P
					}) => (await (P ? _.put : _.post)(l.operationsLinkedToLabels.toUrl({
						zoneId: v
					}), {
						body: d({}, T ? {
							user: {
								labels: T
							}
						} : {}, M ? {
							managed: {
								labels: M
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: I
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: v,
						labelName: T,
						operationIds: M
					}) => {
						const I = (0, n.mm)(T) ? l.managedLabelOperations.toUrl({
							zoneId: v,
							labelName: T
						}) : l.userLabelOperations.toUrl({
							zoneId: v,
							labelName: T
						});
						return (await _.put(I, {
							body: {
								selector: {
									include: {
										operation_ids: M
									}
								}
							}
						})).body
					}
				},
				C = {
					labels: v => {
						let {
							accountId: T,
							zoneId: M
						} = v, I = s(v, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, T, M, ...(0, g.isEmpty)(I) ? [] : [I]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return w
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return c
				},
				GE: function() {
					return M
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return _
				},
				LABELS_LIST_TOASTS: function() {
					return f
				},
				LABEL_SOURCES: function() {
					return i
				},
				QH: function() {
					return d
				},
				V: function() {
					return C
				},
				W3: function() {
					return a
				},
				Yn: function() {
					return L
				},
				_8: function() {
					return s
				},
				_c: function() {
					return v
				},
				aW: function() {
					return O
				},
				dC: function() {
					return P
				},
				gY: function() {
					return T
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
					return g
				},
				w: function() {
					return r
				},
				zF: function() {
					return I
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(b) {
				return b.EXPOSED_CREDENTIALS = "exposed_credentials", b.CONTENT_SCANNING = "content_scanning", b.FIREWALL_AI = "firewall_ai", b
			}({});
			const a = "all";
			let u = function(b) {
					return b.LABELS = "labels", b
				}({}),
				i = function(b) {
					return b.USER = "user", b.MANAGED = "managed", b
				}({}),
				_ = function(b) {
					return b.SOURCE = "source", b
				}({}),
				c = function(b) {
					return b.NAME = "name", b.SOURCE = "source", b.NEW_LABEL_NAME = "newLabelName", b
				}({}),
				l = function(b) {
					return b.ENDPOINT = "endpoint", b.METHOD = "method", b.OPERATION_ID = "operationId", b
				}({}),
				g = function(b) {
					return b.NAME = "name", b.MAPPED_RESOURCES = "mapped_resources.operations", b.SOURCE = "source", b.APPLY = "apply", b
				}({});
			const s = {
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
						[_.SOURCE]: a
					}
				},
				filters: _,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let f = function(b) {
				return b.CREATED_LABEL = "createdLabel", b.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", b.DELETED_LABEL = "deletedLabel", b.APPLIED_LABEL = "appliedLabel", b.EDITED_LABEL = "editedLabel", b.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", b
			}({});
			const d = "650px",
				p = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				w = /^[A-Za-z0-9-]+$/,
				O = /^cf-/;
			let E = function(b) {
				return b.NAME = "name", b.DESCRIPTION = "description", b
			}({});
			const m = "all";
			let C = function(b) {
				return b.METHOD = "method", b.HOSTNAME = "hostname", b
			}({});
			const v = {
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
						[C.METHOD]: m,
						[C.HOSTNAME]: m
					}
				},
				filters: C
			};
			let T = function(b) {
				return b.TITLE = "title", b.DESCRIPTION = "description", b.SUBMIT = "submit", b
			}({});
			const M = 1e3,
				I = {
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
				L = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return f
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
					return a.QF
				},
				vc: function() {
					return a.vc
				},
				ZF: function() {
					return s
				},
				Xs: function() {
					return E.Xs
				},
				wG: function() {
					return a.N2
				},
				Q4: function() {
					return a.Q4
				},
				Wv: function() {
					return a.Wv
				},
				bH: function() {
					return E.bH
				},
				Mb: function() {
					return a.Mb
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
					return O
				},
				Tf: function() {
					return w
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(u);

			function _(m) {
				for (var C = 1; C < arguments.length; C++) {
					var v = arguments[C] != null ? Object(arguments[C]) : {},
						T = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(v).filter(function(M) {
						return Object.getOwnPropertyDescriptor(v, M).enumerable
					})), T.forEach(function(M) {
						c(m, M, v[M])
					})
				}
				return m
			}

			function c(m, C, v) {
				return C = l(C), C in m ? Object.defineProperty(m, C, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[C] = v, m
			}

			function l(m) {
				var C = g(m, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function g(m, C) {
				if (typeof m != "object" || m === null) return m;
				var v = m[Symbol.toPrimitive];
				if (v !== void 0) {
					var T = v.call(m, C || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(m)
			}
			let n = function(m) {
					return m.LABELS_LIST = "Labels List page", m.LABELS_APPLY = "Labels Apply page", m.LABELS_SIDE_MODAL = "Labels Side Modal", m.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", m.LABELS_OPERATION_DETAILS = "Operation Details page", m
				}({}),
				o = function(m) {
					return m.API_SHIELD = "API Shield", m.SECURITY_SETTINGS = "Security Settings", m
				}({}),
				s = function(m) {
					return m.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", m.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", m.OPERATIONS_TABLE_ROW = "Operations table row", m.OPERATION_DETAILS_PAGE = "Operation details page", m
				}({}),
				f = function(m) {
					return m.UPSERT = "upsert", m.OVERWRITE = "overwrite", m
				}({}),
				d = function(m) {
					return m.SINGLE = "single", m.MULTIPLE = "multiple", m
				}({}),
				p = function(m) {
					return m.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", m.DELETE_LABEL = "delete a user label in the settings page", m.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", m.CREATE_LABEL_CLICKED = "click create label button in the settings page", m.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", m.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", m.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", m.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", m.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", m.OPEN_LABELS_SIDE_MODAL = "open labels side modal", m.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", m.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", m.CREATE_NEW_LABEL = "create a new label", m
				}({});
			const w = ({
					name: m,
					product: C,
					category: v = "user journey",
					pageName: T,
					from: M,
					write_strategy: I,
					type: P,
					target: L,
					selected: b
				}) => {
					i().sendEvent(m, _({
						category: v,
						pageName: T,
						product: C
					}, M ? {
						from: M
					} : {}, I ? {
						write_strategy: I
					} : {}, P ? {
						type: P
					} : {}, L ? {
						target: L
					} : {}, b ? {
						selected: b
					} : {}))
				},
				O = () => {
					var m;
					return (m = Object.values(p)) === null || m === void 0 ? void 0 : m.flat()
				};
			var E = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(W, y, t) {
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
					return _
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const _ = s => {
					const f = (0, e.RO)(s),
						d = !!(0, a.rV)(s, "rulesets.file_upload_scan_allowed"),
						p = !!(0, a.BF)(s, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? f && (d || p) : p
				},
				c = s => Number((0, a.rV)(s, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				l = s => (0, a.rV)(s, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				g = s => (0, a.rV)(s, "rulesets.leaked_credential_checks_allowed"),
				n = s => (0, i.z1)(u.dC)(s) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(s, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(s, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				o = s => !!(0, i.z1)("deprecate-security-level")(s)
		},
		"../react/pages/security/settings/resources/types.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				T: function() {
					return r
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let r = function(a) {
				return a.ENABLED = "enabled", a.CONTACT = "contact", a.EXPIRES = "expires", a.ENCRYPTION = "encryption", a.ACKNOWLEDGMENTS = "acknowledgments", a.CANONICAL = "canonical", a.HIRING = "hiring", a.POLICY = "policy", a.PREFERRED_LANGUAGES = "preferred_languages", a.MODIFIED_ON = "modified_on", a
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return s
				},
				Mb: function() {
					return f
				},
				N2: function() {
					return C
				},
				Q4: function() {
					return p
				},
				QF: function() {
					return o
				},
				Vy: function() {
					return O
				},
				Wv: function() {
					return d
				},
				mm: function() {
					return m
				},
				sQ: function() {
					return E
				},
				vc: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				i = t("../react/pages/security/settings/resources/types.ts"),
				_ = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function c(v) {
				for (var T = 1; T < arguments.length; T++) {
					var M = arguments[T] != null ? Object(arguments[T]) : {},
						I = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), I.forEach(function(P) {
						l(v, P, M[P])
					})
				}
				return v
			}

			function l(v, T, M) {
				return T = g(T), T in v ? Object.defineProperty(v, T, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[T] = M, v
			}

			function g(v) {
				var T = n(v, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function n(v, T) {
				if (typeof v != "object" || v === null) return v;
				var M = v[Symbol.toPrimitive];
				if (M !== void 0) {
					var I = M.call(v, T || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(v)
			}
			const o = {
					[i.T.ENABLED]: !1,
					[i.T.CONTACT]: [""],
					[i.T.EXPIRES]: ""
				},
				s = {
					[i.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[i.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[i.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[i.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[i.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[i.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[i.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[i.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				f = v => e.Ry({
					[i.T.CONTACT]: e.IX().of(e.Z_().required(v("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, v("security_txt.fields.contact.format_error"))),
					[i.T.EXPIRES]: e.hT().required(v("common.required")).min(new Date, v("security_txt.fields.expires.min_error"))
				}),
				d = v => {
					const T = {};
					for (const M in v) T[M] = Array.isArray(v[M]) ? v[M].filter(I => !!I) : v[M];
					return c({}, T, {
						expires: (0, _.DZ)(v.expires)
					})
				},
				p = (v, T, M) => {
					const I = [...new Set([i.T.CONTACT, i.T.EXPIRES, ...Object.values(i.T)])],
						P = Object.entries(v).sort(([L], [b]) => I.indexOf(L) - I.indexOf(b)).filter(([L, b]) => !!s[L] && !!b && (!Array.isArray(b) || !!b.length)).map(([L, b]) => Array.isArray(b) ? b.map(D => `${M(s[L].label)}: ${D}`).join(`
`) : `${M(s[L].label)}: ${b}`).join(`
`);
					(0, r.yH)(`Cloudflare_${T}_security.txt`, P, "text/plain;charset=utf-8")
				};
			let w = function(v) {
				return v.CREATED = "created security.txt", v.ENABLED = "enabled security.txt", v.DISABLED = "disabled security.txt", v.DOWNLOADED = "downloaded security.txt", v.UPDATED = "updated security.txt", v.DELETED = "deleted security.txt", v
			}({});
			const O = v => (v == null ? void 0 : v.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (v == null ? void 0 : v.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				E = v => v === u.W3 ? void 0 : v,
				m = v => u.aW.test(v),
				C = v => {
					switch (v) {
						case u.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(W, y, t) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(W, y, t) {
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

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), f.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var f = s.call(n, o || "default");
					if (typeof f != "object") return f;
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
					product: s = "waf",
					productName: f = "Managed Rules",
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: s,
						productName: f
					}, d || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(W, y, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(W, y, t) {
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
		"../react/pages/stream/actionTypes.ts": function(W, y, t) {
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
		"../react/pages/stream/reducer.ts": function(W, y, t) {
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
				a = t("../react/pages/stream/util/pager.ts");

			function u(o) {
				for (var s = 1; s < arguments.length; s++) {
					var f = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(f).filter(function(p) {
						return Object.getOwnPropertyDescriptor(f, p).enumerable
					})), d.forEach(function(p) {
						i(o, p, f[p])
					})
				}
				return o
			}

			function i(o, s, f) {
				return s = _(s), s in o ? Object.defineProperty(o, s, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = f, o
			}

			function _(o) {
				var s = c(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function c(o, s) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var d = f.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			const l = "stream",
				g = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(o = g, s) {
				switch (s.type) {
					case r.U.ResetState:
						return g;
					case r.U.SetStorageLoading:
						const {
							storageLoading: f
						} = s;
						return u({}, o, {
							storageLoading: f
						});
					case r.U.SetStorage:
						return u({}, o, {
							storage: s.payload ? u({}, o.storage, s.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return u({}, o, {
							videos: s.videos
						});
					case r.U.PrependVideo:
						return u({}, o, {
							videos: [s.video, ...o.videos].filter((d, p) => p < a.FJ)
						});
					case r.U.UpdateVideo:
						return u({}, o, {
							videos: o.videos.map(d => d.uid === s.video.uid ? s.video : d)
						});
					case r.U.UpdateVideoPending:
						return u({}, o, {
							videoUpdateStatuses: u({}, o.videoUpdateStatuses, {
								[s.uid]: s.status
							})
						});
					case r.U.RemoveVideos:
						return u({}, o, {
							videos: o.videos.filter(d => !s.ids.includes(d.uid))
						});
					case r.U.SetLoading:
						return u({}, o, {
							loading: s.loading
						});
					case r.U.SetRequestTimestamp:
						return u({}, o, {
							requestTimestamp: s.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return o;
					default:
						return (0, e.h)(s, o)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				a = (0, e.BC)`${r}/inputs`,
				u = (0, e.BC)`${r}/videos`,
				i = (0, e.BC)`${r}/analytics`,
				_ = (0, e.BC)`${u}/${"videoId"}`,
				c = (0, e.BC)`${r}/video-transformations`,
				l = {
					root: r,
					inputs: a,
					configureInputs: (0, e.BC)`${a}/custom-hostnames`,
					videos: u,
					analytics: i,
					videoPage: _,
					videoTransformationsConfigList: c,
					videoTransformationsZoneConfig: (0, e.BC)`${c}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${a}/${"inputId"}`,
					createOutput: (0, e.BC)`${a}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${a}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${r}/bundle-checkout-success`,
					plans: (0, e.BC)`${r}/plans`,
					managePlan: (0, e.BC)`${r}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Id: function() {
					return u
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return i
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
					return s
				},
				bm: function() {
					return f
				},
				mX: function() {
					return w
				},
				pW: function() {
					return _
				},
				xW: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const u = O => O[a.nY],
				i = O => u(O).videos,
				_ = O => u(O).videoUpdateStatuses,
				c = O => u(O).loading,
				l = O => u(O).requestTimestamp,
				g = O => u(O).storageLoading,
				n = O => u(O).storage,
				o = O => (0, r.BF)(O, "stream.enabled") || (0, e.bC)(O),
				s = O => (0, e.Le)(O, "stream", "connect"),
				f = O => (0, e.Le)(O, "stream", "stream-4371"),
				d = O => (0, e.Le)(O, "stream", "public-details-enabled"),
				p = O => !!(0, e.Le)(O, "stream", "llhls"),
				w = O => {
					const E = n(O);
					return E !== void 0 && E.limitMins > E.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				FJ: function() {
					return e
				},
				d6: function() {
					return a
				},
				wL: function() {
					return r
				}
			});
			const e = 30;

			function r(u, i, _) {
				const c = {
					search: _,
					limit: e.toString()
				};
				return i !== void 0 && (c.end = i), c
			}

			function a(u, i, _) {
				return {
					limit: e.toString(),
					search: _,
					asc: "true",
					start_comp: "gt",
					start: i
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(W, y, t) {
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
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(W, y, t) {
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
					return f
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

			function a(p) {
				for (var w = 1; w < arguments.length; w++) {
					var O = arguments[w] != null ? Object(arguments[w]) : {},
						E = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(O).filter(function(m) {
						return Object.getOwnPropertyDescriptor(O, m).enumerable
					})), E.forEach(function(m) {
						u(p, m, O[m])
					})
				}
				return p
			}

			function u(p, w, O) {
				return w = i(w), w in p ? Object.defineProperty(p, w, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[w] = O, p
			}

			function i(p) {
				var w = _(p, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function _(p, w) {
				if (typeof p != "object" || p === null) return p;
				var O = p[Symbol.toPrimitive];
				if (O !== void 0) {
					var E = O.call(p, w || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(p)
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
			const f = Object.values({
					MIGRATION: c,
					LOAD_BALANCERS_TABLE: l,
					REVIEW: g,
					WIZARD: n,
					USAGE: o
				}).flatMap(Object.values),
				d = (p, w) => r().sendEvent(p, a({
					category: "user journey",
					product: "load balancing"
				}, w))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(W, y, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return a
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(i) {
				return i.CREATE = "create waiting room", i.UPDATE = "update waiting room", i.EVENTS = "view waiting rooms events", i.ANALYTICS = "view waiting room analytics", i.GENERATE_PREVIEW = "generate waiting room preview link", i
			}({});
			const u = async i => {
				await r().sendEvent(i, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(W, y, t) {
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

			function a(o) {
				for (var s = 1; s < arguments.length; s++) {
					var f = arguments[s] != null ? Object(arguments[s]) : {},
						d = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(f).filter(function(p) {
						return Object.getOwnPropertyDescriptor(f, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, f[p])
					})
				}
				return o
			}

			function u(o, s, f) {
				return s = i(s), s in o ? Object.defineProperty(o, s, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = f, o
			}

			function i(o) {
				var s = _(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function _(o, s) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var d = f.call(o, s || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			const c = "TURNSTILE";
			let l = function(o) {
				return o.OVERVIEW_PAGE = "view the overview page", o.LIST_OF_WIDGETS = "list of widgets", o.SOLVE_EVENTS = "list solve events", o.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", o.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", o.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", o.OPEN_DELETE_MODAL = "view the delete modal for one widget", o.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", o.DELETE_WIDGET = "delete successfully widgets", o.LIST_OF_HOSTNAMES = "list hostnames", o.OPEN_ADD_WIDGET_PAGE = "view page to add widget", o.FEEDBACK_ADD = "view Feedback Add", o.SAVE_WIDGET = "save widget", o.ROTATE_KEYS = "rotate keys", o.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", o.GET_WIDGETS = "get widget details", o.OPEN_ANALYTICS_PAGE = "view analytics page", o.ANALYTICS_DATA = "list the analytics data", o
			}({});
			const g = ({
					name: o,
					product: s = c,
					category: f = "user journey",
					page: d,
					additionalData: p = {}
				}) => {
					r().sendEvent(o, a({
						category: f,
						page: d,
						product: s
					}, p || {}))
				},
				n = () => {
					var o;
					return (o = Object.values(l)) === null || o === void 0 ? void 0 : o.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(W, y, t) {
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

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(s).filter(function(d) {
						return Object.getOwnPropertyDescriptor(s, d).enumerable
					})), f.forEach(function(d) {
						u(n, d, s[d])
					})
				}
				return n
			}

			function u(n, o, s) {
				return o = i(o), o in n ? Object.defineProperty(n, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = s, n
			}

			function i(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var s = n[Symbol.toPrimitive];
				if (s !== void 0) {
					var f = s.call(n, o || "default");
					if (typeof f != "object") return f;
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
					r().sendEvent(n, a({}, o || {}))
				},
				g = () => {
					var n;
					return (n = Object.values(c)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(W, y, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$e: function() {
					return M
				},
				$h: function() {
					return m
				},
				G: function() {
					return T
				},
				M3: function() {
					return P
				},
				Tr: function() {
					return O
				},
				UY: function() {
					return p
				},
				bH: function() {
					return o
				},
				fv: function() {
					return L
				},
				hF: function() {
					return C
				},
				iw: function() {
					return f
				},
				m7: function() {
					return n
				},
				re: function() {
					return v
				},
				tp: function() {
					return d
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts");

			function _(b) {
				for (var D = 1; D < arguments.length; D++) {
					var S = arguments[D] != null ? Object(arguments[D]) : {},
						G = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(S).filter(function(te) {
						return Object.getOwnPropertyDescriptor(S, te).enumerable
					})), G.forEach(function(te) {
						c(b, te, S[te])
					})
				}
				return b
			}

			function c(b, D, S) {
				return D = l(D), D in b ? Object.defineProperty(b, D, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = S, b
			}

			function l(b) {
				var D = g(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function g(b, D) {
				if (typeof b != "object" || b === null) return b;
				var S = b[Symbol.toPrimitive];
				if (S !== void 0) {
					var G = S.call(b, D || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			const n = b => (0, a.nA)(b) ? (0, i.p1)(b) && (0, u.$n)(b, "zone_versioning", "versioning") : !1,
				o = b => b.zoneVersioning.zoneApplications,
				s = (0, e.P1)("zoneApplications", o),
				f = b => b.zoneVersioning.zoneVersions,
				d = (0, e.P1)("zoneVersions", f),
				p = (0, r.P1)(d, b => {
					if (b) return b.filter(D => D.status == "V")
				}),
				w = b => b.zoneVersioning.environments,
				O = b => b.zoneVersioning.environments.isRequesting,
				E = (0, e.P1)("environments", w),
				m = (0, r.P1)(s, b => {
					if (b) {
						if (b.length === 1) return b[0];
						b.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${b.length}`))
					}
					return null
				}),
				C = (0, r.P1)(E, b => b ? b.environments : []),
				v = b => {
					var D;
					return (D = b.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				T = (0, r.P1)(v, d, (b, D) => {
					if (!(b == null ? void 0 : b.isVersion) || !D) return null;
					const S = D.find(G => {
						if (G.version === b.selectedVersion && G.locked) return !0
					});
					return S ? _({}, S, {
						isLocked: !0
					}) : null
				}),
				M = (0, r.P1)(d, C, (b, D) => !D || !b ? [] : b.map(S => {
					const G = [];
					for (const te in D) D[te].version === S.version && G.push(D[te]);
					return _({}, S, {
						environments: G
					})
				})),
				I = b => b.zoneVersioning.WAFMigrationStatus,
				P = (0, e.P1)("WAFMigrationStatus", I),
				L = b => b.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return I
				},
				CI: function() {
					return T
				},
				IS: function() {
					return c
				},
				L7: function() {
					return i
				},
				Lt: function() {
					return d
				},
				Oj: function() {
					return s
				},
				QV: function() {
					return p
				},
				S6: function() {
					return P
				},
				X$: function() {
					return C
				},
				X6: function() {
					return g
				},
				d4: function() {
					return f
				},
				fE: function() {
					return l
				},
				im: function() {
					return E
				},
				lv: function() {
					return w
				},
				rL: function() {
					return n
				},
				wW: function() {
					return _
				}
			});

			function e(L) {
				for (var b = 1; b < arguments.length; b++) {
					var D = arguments[b] != null ? Object(arguments[b]) : {},
						S = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(D).filter(function(G) {
						return Object.getOwnPropertyDescriptor(D, G).enumerable
					})), S.forEach(function(G) {
						r(L, G, D[G])
					})
				}
				return L
			}

			function r(L, b, D) {
				return b = a(b), b in L ? Object.defineProperty(L, b, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[b] = D, L
			}

			function a(L) {
				var b = u(L, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function u(L, b) {
				if (typeof L != "object" || L === null) return L;
				var D = L[Symbol.toPrimitive];
				if (D !== void 0) {
					var S = D.call(L, b || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(L)
			}
			const i = {
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
				_ = 800,
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
				s = {
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
				f = {
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
				w = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker",
					refreshWebhookError: "error refreshing gitlab webhook"
				},
				O = "workers.dev",
				E = "YYYY-MM-DD HH:mm:SS ZZ",
				m = "active",
				C = ["bundled", "unbound", "standard"],
				v = null,
				T = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let M = function(L) {
				return L[L.NONE = 0] = "NONE", L[L.MISS = 1] = "MISS", L[L.EXPIRED = 2] = "EXPIRED", L[L.UPDATING = 3] = "UPDATING", L[L.STALE = 4] = "STALE", L[L.HIT = 5] = "HIT", L[L.IGNORED = 6] = "IGNORED", L[L.BYPASS = 7] = "BYPASS", L[L.REVALIDATED = 8] = "REVALIDATED", L[L.DYNAMIC = 9] = "DYNAMIC", L[L.STREAM_HIT = 10] = "STREAM_HIT", L[L.DEFERRED = 11] = "DEFERRED", L
			}({});
			const I = [M.HIT, M.STREAM_HIT];
			let P = function(L) {
				return L.SECRETS_STORE_ID = "store_id", L.SECRET_NAME = "secret_name", L
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return c
				},
				L: function() {
					return a
				},
				Q9: function() {
					return u
				},
				_j: function() {
					return i
				},
				ky: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = l => `${l}.workers.dev`,
				a = (l, g, n) => `${n?`${n}.`:""}${l}.${r(g)}`,
				u = (l, g, n) => `https://${a(l,g,n)}`,
				i = {
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
				_ = "https://cron-triggers.cloudflareworkers.com",
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
					describeCron: `${_}/describe`,
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
					nextCron: `${_}/next`,
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
					validateCron: `${_}/validate`,
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
						liveTail: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/live-tail`
					},
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					workflows: (0, e.BC)`/accounts/${"accountId"}/workflows`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				MN: function() {
					return a
				},
				Yg: function() {
					return i
				},
				i$: function() {
					return u
				},
				l3: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async ([c, l]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: c,
					variables: l
				})
			})).body, u = async (...c) => (await e.get(...c)).body, i = c => async (l, g) => {
				const n = await fetch(l, g).then(o => o.json());
				return c.assertDecode(n)
			}, _ = async (...c) => (await u(...c)).result;
			y.ZP = {
				fetcher: c => Array.isArray(c) ? _(...c) : _(c)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(W, y) {
				y()
			})(this, function() {
				"use strict";

				function W() {
					var t = !0,
						e = !1,
						r = null,
						a = {
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

					function u(w) {
						return !!(w && w !== document && w.nodeName !== "HTML" && w.nodeName !== "BODY" && "classList" in w && "contains" in w.classList)
					}

					function i(w) {
						var O = w.type,
							E = w.tagName;
						return !!(E == "INPUT" && a[O] && !w.readOnly || E == "TEXTAREA" && !w.readOnly || w.isContentEditable)
					}

					function _(w) {
						w.getAttribute("is-focus-visible") !== "" && w.setAttribute("is-focus-visible", "")
					}

					function c(w) {
						w.getAttribute("is-focus-visible") === "" && w.removeAttribute("is-focus-visible")
					}

					function l(w) {
						u(document.activeElement) && _(document.activeElement), t = !0
					}

					function g(w) {
						t = !1
					}

					function n(w) {
						!u(w.target) || (t || i(w.target)) && _(w.target)
					}

					function o(w) {
						!u(w.target) || w.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), c(w.target))
					}

					function s(w) {
						document.visibilityState == "hidden" && (e && (t = !0), f())
					}

					function f() {
						document.addEventListener("mousemove", p), document.addEventListener("mousedown", p), document.addEventListener("mouseup", p), document.addEventListener("pointermove", p), document.addEventListener("pointerdown", p), document.addEventListener("pointerup", p), document.addEventListener("touchmove", p), document.addEventListener("touchstart", p), document.addEventListener("touchend", p)
					}

					function d() {
						document.removeEventListener("mousemove", p), document.removeEventListener("mousedown", p), document.removeEventListener("mouseup", p), document.removeEventListener("pointermove", p), document.removeEventListener("pointerdown", p), document.removeEventListener("pointerup", p), document.removeEventListener("touchmove", p), document.removeEventListener("touchstart", p), document.removeEventListener("touchend", p)
					}

					function p(w) {
						w.target.nodeName.toLowerCase() !== "html" && (t = !1, d())
					}
					document.addEventListener("keydown", l, !0), document.addEventListener("mousedown", g, !0), document.addEventListener("pointerdown", g, !0), document.addEventListener("touchstart", g, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", s, !0), f(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && y(W)
			})
		},
		"../react/utils/bootstrap.ts": function(W, y, t) {
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
					return a
				}
			});
			const e = () => {
					var i, _, c;
					return (i = window) === null || i === void 0 || (_ = i.bootstrap) === null || _ === void 0 || (c = _.data) === null || c === void 0 ? void 0 : c.security_token
				},
				r = () => {
					var i, _, c;
					return !!((i = t.g.bootstrap) === null || i === void 0 || (_ = i.data) === null || _ === void 0 || (c = _.user) === null || c === void 0 ? void 0 : c.id)
				},
				a = () => {
					var i, _;
					return !!((i = t.g.bootstrap) === null || i === void 0 || (_ = i.data) === null || _ === void 0 ? void 0 : _.is_kendo)
				},
				u = () => {
					var i, _, c, l;
					return (i = window) === null || i === void 0 || (_ = i.bootstrap) === null || _ === void 0 || (c = _.data) === null || c === void 0 || (l = c.user) === null || l === void 0 ? void 0 : l.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				O5: function() {
					return u
				},
				Xm: function() {
					return a
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
				a = () => (r() || "").indexOf("C0002") !== -1,
				u = () => (r() || "").indexOf("C0003") !== -1,
				i = () => (r() || "").indexOf("C0004") !== -1,
				_ = () => (r() || "").indexOf("C0005") !== -1,
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
		"../react/utils/i18n.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return C
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
					return v
				},
				fh: function() {
					return T
				},
				i_: function() {
					return s
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
				a = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				i = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				_ = t("../../../../node_modules/cookie/index.js");
			const c = "cf-sync-locale-with-cps",
				l = a.Q.en_US,
				g = "en_US",
				n = "cf-locale";

			function o() {
				const P = (0, _.parse)(document.cookie);
				return i.Z.get(n) || P[n] || null
			}

			function s(P) {
				document.cookie = (0, _.serialize)(n, P, {
					path: "/",
					maxAge: 31536e3
				}), i.Z.set(n, P)
			}

			function f() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const d = P => (0, u.Yd)(a.Q).find(L => a.Q[L] === P) || g,
				p = [],
				w = [],
				O = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				E = {
					test: [...O, ...w, ...p],
					development: [...O, ...w, ...p],
					staging: [...O, ...w, ...p],
					production: [...O, ...w]
				},
				m = P => {
					const L = a.Q[P];
					return E.production.includes(L)
				},
				C = () => Object.keys(a.Q).filter(P => m(P)),
				v = P => {
					const L = a.Q[P];
					return w.includes(L)
				},
				T = P => M[P],
				M = {
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
				I = r().locale();
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
			}), r().locale(I)
		},
		"../react/utils/translator.tsx": function(W, y, t) {
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
					return s
				},
				oc: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(a),
				i = t("../flags.ts");
			const _ = new r.Z({
				pseudoLoc: (0, i.J8)("is_pseudo_loc")
			});

			function c(p, ...w) {
				return _.t(p, ...w)
			}
			const l = _;

			function g(p, ...w) {
				return markdown(c(p, w))
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

			function o(p, w) {
				return p in w ? w[p] : void 0
			}
			const s = a.Trans,
				f = a.I18n,
				d = a.useI18n
		},
		"../react/utils/url.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Ct: function() {
					return P
				},
				Fl: function() {
					return ie
				},
				KT: function() {
					return V
				},
				NF: function() {
					return C
				},
				Nw: function() {
					return M
				},
				Pd: function() {
					return T
				},
				Uh: function() {
					return $
				},
				cm: function() {
					return O
				},
				e1: function() {
					return I
				},
				el: function() {
					return ce
				},
				hW: function() {
					return F
				},
				pu: function() {
					return x
				},
				qR: function() {
					return le
				},
				td: function() {
					return v
				},
				uW: function() {
					return j
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				r = t("../react/pages/abuse/constants.ts"),
				a = t("../react/pages/d1/routes.ts"),
				u = t("../react/pages/images/routes.ts"),
				i = t("../react/pages/pages/routes.ts"),
				_ = t("../react/pages/r2/routes.ts"),
				c = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/zoneless-workers/routes.ts"),
				g = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(g);

			function o(k) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var ae = arguments[Z] != null ? Object(arguments[Z]) : {},
						pe = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ae).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(ae, ue).enumerable
					})), pe.forEach(function(ue) {
						s(k, ue, ae[ue])
					})
				}
				return k
			}

			function s(k, Z, ae) {
				return Z = f(Z), Z in k ? Object.defineProperty(k, Z, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[Z] = ae, k
			}

			function f(k) {
				var Z = d(k, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function d(k, Z) {
				if (typeof k != "object" || k === null) return k;
				var ae = k[Symbol.toPrimitive];
				if (ae !== void 0) {
					var pe = ae.call(k, Z || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(k)
			}
			const {
				endsWithSlash: p
			} = e.default, w = new RegExp(/([0-9a-z]{32})/g), O = k => k == null ? void 0 : k.replace(w, ":id"), E = (k, Z) => {
				const ae = k.replace(p, "").split("/");
				return ae.slice(0, 2).concat([Z]).concat(ae.slice(3)).join("/")
			}, m = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), C = k => `/${k.replace(p,"").replace(/^\//,"")}`, v = k => M("add-site", k), T = k => M("billing", k), M = (k, Z) => Z ? `/${Z}${k?`/${k}`:""}` : `/?to=/:account/${k}`, I = () => {
				const k = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return k ? k[1] : null
			}, P = (k, Z) => n().stringify(o({}, n().parse(k), Z)), L = (k = "") => k.toString().replace(/([\/]{1,})$/, ""), b = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], D = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, S = /^\/(\w{32,})(\/[^.]*)?/, G = k => b.includes(k), te = k => !G(k), le = k => !G(k) && S.test(k), ce = k => !G(k) && D.test(k), Q = k => D.exec(k), F = k => {
				if (ce(k)) return k.split("/").filter(Z => Z.length > 0)[1]
			}, K = k => S.exec(k), j = k => {
				if (le(k)) {
					const Z = K(k);
					if (Z) return Z[1]
				}
			}, U = k => le(k) && k.split("/")[2] === "register-domain", A = k => U(k) ? k.split("/") : null, N = k => {
				if (ce(k)) {
					const [, , , Z, ae, pe, ue, ve] = k.split("/");
					return Z === "traffic" && ae === "load-balancing" && pe === "pools" && ue === "edit" && ve
				}
			}, $ = k => {
				const Z = A(k);
				if (Z) return Z[3]
			}, q = (k, Z) => {
				var ae, pe;
				return ((ae = k.pattern.match(/\:/g)) !== null && ae !== void 0 ? ae : []).length - ((pe = Z.pattern.match(/\:/g)) !== null && pe !== void 0 ? pe : []).length
			}, ee = [...Object.values(c.C), ...Object.values(u.KJ), ...Object.values(_._j), ...Object.values(l._j), ...Object.values(i._j), ...Object.values(a._)].sort(q);

			function ie(k) {
				if (!te(k)) return k;
				for (const ve of ee)
					if (ve.expression.test(k)) return ve.pattern;
				if (r.eM.abuseReportTab.expression.test(k)) {
					const ve = k.split("/"),
						ne = ve[ve.length - 1];
					return r.eM.abuseReportTab.pattern.replace(":tab", ne)
				}
				if (r.eM.abuseReport.expression.test(k)) return r.eM.abuseReport.pattern;
				const Z = A(k);
				if (Z) {
					const [, , ve, , ...ne] = Z;
					return `/:accountId/${ve}/:domainName/${ne.join("/")}`
				}
				if (N(k)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const pe = Q(k);
				if (pe) {
					const [, , , , ve] = pe;
					return `/:accountId/:zoneName${ve||""}`
				}
				const ue = K(k);
				if (ue) {
					const [, , ve] = ue;
					return `/:accountId${ve||""}`
				}
				return k
			}

			function x(k) {
				if (!!k) try {
					const ae = k.split(".").pop();
					if (ae && ae.length > 0) return ae
				} catch {}
			}

			function V(k, Z = document.location.href) {
				try {
					const ae = new URL(k),
						pe = new URL(Z);
					if (ae.origin === pe.origin) return `${ae.pathname}${ae.search}${ae.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(W, y, t) {
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
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				i = t.n(u);
			const _ = /^\/domainconnect\/v2\/domaintemplates\//i,
				c = "domain-connect-redirect",
				l = () => {
					const g = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						_.test(g.pathname) && a.Z.set(c, g, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(W, y, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				P: function() {
					return u
				},
				b: function() {
					return i
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var _, c, l, g, n, o;
				return (_ = window) === null || _ === void 0 || (c = _.bootstrap) === null || c === void 0 || (l = c.data) === null || l === void 0 || (g = l.user) === null || g === void 0 || (n = g.betas) === null || n === void 0 || (o = n.some) === null || o === void 0 ? void 0 : o.call(n, s => s === "zone_level_access_beta")
			}

			function u() {
				const _ = !!(0, e.Z)("zone-level-access");
				return a() || _
			}

			function i(_) {
				const c = !!(0, r.z1)("zone-level-access")(_);
				return a() || c
			}
		},
		"../utils/getDashVersion.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				p: function() {
					return a
				},
				t: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var u, i;
					return (u = window) === null || u === void 0 || (i = u.build) === null || i === void 0 ? void 0 : i.dashVersion
				},
				a = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return Ce
				},
				IM: function() {
					return me
				},
				yV: function() {
					return h
				},
				Ug: function() {
					return Lt
				},
				v_: function() {
					return R
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				i = t("../react/common/selectors/languagePreferenceSelector.ts"),
				_ = t("../flags.ts"),
				c = t("../../../../node_modules/cookie/index.js"),
				l = t("../react/utils/url.ts"),
				g = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../../../../node_modules/lodash-es/memoize.js"),
				s = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				f = t("../utils/getDashVersion.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				p = t("../react/common/selectors/entitlementsSelectors.ts"),
				w = t("../react/common/utils/getEnvironment.ts");

			function O(oe) {
				for (var re = 1; re < arguments.length; re++) {
					var fe = arguments[re] != null ? Object(arguments[re]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), _e.forEach(function(be) {
						E(oe, be, fe[be])
					})
				}
				return oe
			}

			function E(oe, re, fe) {
				return re = m(re), re in oe ? Object.defineProperty(oe, re, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : oe[re] = fe, oe
			}

			function m(oe) {
				var re = C(oe, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function C(oe, re) {
				if (typeof oe != "object" || oe === null) return oe;
				var fe = oe[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(oe, re || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(oe)
			}
			const v = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				T = (0, o.Z)(oe => {
					try {
						return v.assertDecode((0, c.parse)(oe))
					} catch (re) {
						return console.error(re), {}
					}
				}),
				M = oe => (re, fe, _e) => {
					try {
						const Xe = window.location.pathname,
							et = (0, u.bh)().getState(),
							ct = T(document.cookie),
							gt = O({
								page: (0, l.Fl)(_e.page || window.location.pathname),
								dashVersion: (0, f.t)(),
								environment: (0, w.Z)()
							}, ct);
						if (re === "identify") {
							var be, Ue;
							const ze = {
								gates: (0, s.T2)(et) || {},
								country: (be = t.g) === null || be === void 0 || (Ue = be.bootstrap) === null || Ue === void 0 ? void 0 : Ue.ip_country
							};
							return oe(re, fe, O({}, gt, ze, _e))
						} else {
							const ze = {
								accountId: (0, l.uW)(Xe),
								zoneName: (0, l.hW)(Xe),
								domainName: (0, l.Uh)(Xe)
							};
							if ((0, l.qR)(Xe)) {
								var Ze;
								const nt = (0, d.D0)(et);
								ze.isEntAccount = !!(nt == null || (Ze = nt.meta) === null || Ze === void 0 ? void 0 : Ze.has_enterprise_zones) || (0, p.p1)(et)
							}
							if ((0, l.el)(Xe)) {
								var at;
								const nt = (0, g.nA)(et);
								ze.zoneId = nt == null ? void 0 : nt.id, ze.plan = nt == null || (at = nt.plan) === null || at === void 0 ? void 0 : at.legacy_id
							}
							return oe(re, fe, O({}, gt, ze, _e))
						}
					} catch (Xe) {
						return console.error(Xe), oe(re, fe, _e)
					}
				},
				I = oe => async (re, fe, _e) => {
					try {
						return await oe(re, fe, _e)
					} catch (be) {
						if (console.error(be), !R()) throw be;
						return {
							status: "rejected",
							reason: be
						}
					}
				};
			var P = t("../react/app/components/AccountHome/tracking.ts"),
				L = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				b = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				D = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				S = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				G = t("../react/common/middleware/sparrow/errors.ts"),
				te = t("../react/pages/abuse/constants.ts"),
				le = t("../react/pages/blocked-content/constants.ts"),
				ce = t("../react/pages/caching/tracking.tsx"),
				Q = t("../react/pages/dns/dns-records/tracking.ts"),
				F = t("../react/pages/home/alerts/tracking.ts"),
				K = t("../react/pages/home/audit-log/tracking.ts"),
				j = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				U = t("../react/pages/home/configurations/lists/tracking.ts"),
				A = t("../react/pages/home/domain-registration/tracking.ts"),
				N = t("../react/pages/home/members/sparrowEvents.ts"),
				$ = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				q = t("../react/pages/hyperdrive/tracking.ts"),
				ee = t("../react/pages/magic/network-monitoring/constants.ts"),
				ie = t("../react/pages/magic/overview/tracking.ts"),
				x = t("../react/pages/magic/packet-captures/constants.ts"),
				V = t("../react/pages/page-rules/tracking.ts"),
				k = t("../react/pages/pages/constants.ts"),
				Z = t("../react/pages/pipelines/tracking.ts"),
				ae = t("../react/pages/profile/tracking.ts"),
				pe = t("../react/pages/secrets-store/resources/constants.ts"),
				ue = t("../react/pages/security-center/tracking.ts"),
				ve = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				ne = t("../react/pages/security/api-shield/tracking.ts"),
				Oe = t("../react/pages/security/bots/tracking.ts"),
				Se = t("../react/pages/security/overview/resources/constants.ts"),
				Me = t("../react/pages/security/page-shield/resources/index.ts"),
				je = t("../react/pages/security/resources/constants.tsx"),
				xe = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Ge = t("../react/pages/security/settings/index.tsx"),
				Je = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Fe = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Ve = t("../react/pages/spectrum/tracking.tsx"),
				Y = t("../react/pages/traffic/argo/tracking.ts"),
				he = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				ke = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				We = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				pt = t("../react/pages/turnstile/tracking.ts"),
				ut = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ae = t("../react/pages/zoneless-workers/constants.ts"),
				rt = t("../react/pages/security/detections/pages/root/components/new-settings/resources/constants.ts");
			const ge = ((oe, re, ...fe) => n.eg.union([n.eg.literal(oe), n.eg.literal(re), ...fe.map(_e => n.eg.literal(_e))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", P.gX.SPARROW_PROJECTS_TABLE_CLICK, P.gX.SPARROW_EMPTY_STATE_CTA_CLICK, P.gX.SPARROW_PRODUCT_CARD_CLICK, P.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, P.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, P.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ae.QV.clickedDownloadAnalytics, Ae.QV.clickedPrintAnalytics, Ae.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ae.QV.addWCITriggerToExistingWorker, Ae.QV.updateWCITrigger, Ae.QV.deleteWCITrigger, Ae.QV.addWCITriggerToNewWorker, Ae.QV.createWCIBuildForNewWorker, Ae.QV.completedWCIBuildForNewWorker, Ae.QV.changedDefaultConfigurations, Ae.QV.clickElement, k.QV.toggledPagesSmartPlacement, k.QV.downloadDemoProject, Ae.QV.clickCreateWorkerFromRepoNextStep, Ae.QV.clickCreateWorkerFromRepoPreviousStep, Ae.QV.clickCreateNewSCMConnection, Ae.QV.redirectFromSCMOAuth, Ae.QV.clickSubmitError, Ae.QV.selectTemplate, Ae.QV.clickedListTemplates, Ae.QV.clickedImportRepository, Ae.QV.clickedClonePublicRepositoryFromUrl, Ae.QV.templateStubWorkerCreated, Ae.QV.templateStubWorkerCreationFailed, Ae.QV.templateRepositoryCreated, Ae.QV.templateRepositoryCreationFailed, Ae.QV.copyTemplateC3Command, Ae.QV.templateDeployClick, Ae.QV.reauthenticateGithubModalShown, Ae.QV.updateGithubPermissionsClicked, Ae.QV.D2W_importRepository, Ae.QV.D2W_stubWorkerCreated, Ae.QV.D2W_stubWorkerCreationFailed, Ae.QV.D2W_repositoryCreated, Ae.QV.D2W_repositoryCreationFailed, Ae.QV.D2W_resourcesProvisioned, Ae.QV.D2W_resourceProvisioningFailed, Ae.QV.D2W_githubAPIRateLimitReached, Ae.QV.createResource, Ae.QV.deleteResource, Ae.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", Oe.N3.INITIAL_FETCH_SCORES, Oe.N3.FETCH_CONFIGURATION, Oe.N3.INITIAL_FETCH_TIME_SERIES, Oe.N3.INITIAL_FETCH_ATTRIBUTES, Oe.N3.UPDATE_SETTINGS, Oe.N3.DELETE_RULE, Oe.N3.UPDATE_RULE, Oe.N3.FETCH_RULES, Oe.N3.CONFIGURE_BOT_MANAGEMENT, Oe.N3.WAF_RULES_REDIRECT, $.F.TOGGLE_TCP_PROTECTION, $.F.GET_TCP_PROTECTION_PREFIXES, $.F.CREATE_TCP_PROTECTION_PREFIXES, $.F.CREATE_TCP_PROTECTION_PREFIX, $.F.UPDATE_TCP_PROTECTION_PREFIX, $.F.DELETE_TCP_PROTECTION_PREFIX, $.F.DELETE_TCP_PROTECTION_PREFIXES, $.F.GET_TCP_PROTECTION_ALLOWLIST, $.F.CREATE_TCP_PROTECTION_ALLOWLIST, $.F.UPDATE_TCP_PROTECTION_ALLOWLIST, $.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, $.F.DELETE_TCP_PROTECTION_ALLOWLIST, $.F.GET_SYN_PROTECTION_RULES, $.F.GET_SYN_PROTECTION_RULE, $.F.CREATE_SYN_PROTECTION_RULE, $.F.UPDATE_SYN_PROTECTION_RULE, $.F.DELETE_SYN_PROTECTION_RULE, $.F.GET_TCP_FLOW_PROTECTION_RULES, $.F.GET_TCP_FLOW_PROTECTION_RULE, $.F.CREATE_TCP_FLOW_PROTECTION_RULE, $.F.UPDATE_TCP_FLOW_PROTECTION_RULE, $.F.DELETE_TCP_FLOW_PROTECTION_RULE, $.F.GET_SYN_PROTECTION_FILTERS, $.F.GET_SYN_PROTECTION_FILTER, $.F.CREATE_SYN_PROTECTION_FILTER, $.F.UPDATE_SYN_PROTECTION_FILTER, $.F.DELETE_SYN_PROTECTION_FILTER, $.F.GET_TCP_FLOW_PROTECTION_FILTERS, $.F.GET_TCP_FLOW_PROTECTION_FILTER, $.F.CREATE_TCP_FLOW_PROTECTION_FILTER, $.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, $.F.DELETE_TCP_FLOW_PROTECTION_FILTER, $.F.GET_DNS_PROTECTION_RULES, $.F.GET_DNS_PROTECTION_RULE, $.F.CREATE_DNS_PROTECTION_RULE, $.F.UPDATE_DNS_PROTECTION_RULE, $.F.DELETE_DNS_PROTECTION_RULE, Me.FV.MANAGE_PAGE_SHIELD_POLICY, Me.FV.CONFIGURE_PAGE_SHIELD, Me.FV.VIEW_DETECTED_CONNECTIONS, Me.FV.VIEW_DETECTED_SCRIPTS, Me.FV.VIEW_PAGE_SHIELD_POLICIES, Me.FV.VIEW_PAGE_SHIELD_SETTINGS, Me.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Me.FV.SHOW_MUTABLE_VERSION_TOOLTIP, U.y.CREATE_LIST, U.y.DELETE_LIST, U.y.ADD_LIST_ITEM, U.y.DELETE_LIST_ITEM, q.KO.PURCHASE_WORKERS_PAID, q.KO.LIST_CONFIGS, q.KO.SEARCH_CONFIGS, q.KO.CREATE_HYPERDRIVE_CONFIG, q.KO.VIEW_CONFIG_DETAILS, q.KO.UPDATE_CACHING_SETTINGS, q.KO.DELETE_HYPERDRIVE_CONFIG, q.KO.CLICK_HYPERDRIVE_DOCUMENTATION, q.KO.CLICK_GET_STARTED_GUIDE, q.KO.CLICK_CONNECTIVITY_GUIDES, q.KO.CLICK_QUICK_LINK, q.KO.CLICK_DISCORD, q.KO.CLICK_COMMUNITY, Ve.N.CNAME, Ve.N.IP_ADDRESS, Ve.N.LB, Ve.N.UPDATE_CNAME, Ve.N.UPDATE_IP_ADDRESS, Ve.N.UPDATE_LB, Ve.N.DISABLE, ce.N.TIERED_CACHE, ce.N.CACHE_PURGE, ce.N.CACHE_ANALYTICS, ...(0, pt.P)(), ...(0, S.x4)(), ...(0, Ge.m8)(), ...(0, N.SH)(), ...(0, ut.Ky)(), ...(0, b.Cf)(), We.N.CREATE, We.N.EVENTS, We.N.ANALYTICS, We.N.UPDATE, We.N.GENERATE_PREVIEW, ue.RY.INITIATE_URL_SCAN, ue.RY.LOAD_SCAN_INFO, ue.Ev.LOAD_THREAT_EVENTS, ue.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, ue.Ev.THREAT_EVENTS_FILTERS, ue.Ev.ABUSE_REPORT_BUTTON_CLICK, ue.Ev.ABUSE_REPORT_SUBMIT_CLICK, ue.Ev.ABUSE_REPORT_SUBMIT_FAILED, ue.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, ue.v9.EXPAND_INSIGHT_ROW, ue.v9.ONE_CLICK_RESOLVE_BUTTON, ue.v9.FOLLOW_RESOLVE_URL, ue.v9.MANAGE_INSIGHT, ue.v9.CLICK_SCAN_NOW, ue.v9.CLICK_EXPORT_INSIGHTS, ue.v9.BULK_ARCHIVE, ue.v9.CLICK_DETAILS_BUTTON, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].detailedMetrics, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].createEndpoint, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].deployRouting, ne.Fj[ne.kq.ENDPOINT_MANAGEMENT].deleteRouting, ne.Fj[ne.kq.API_DISCOVERY].viewDiscoveredEndpoints, ne.Fj[ne.kq.API_DISCOVERY].saveDiscoveredEndpoint, ne.Fj[ne.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, ne.Fj[ne.kq.SCHEMA_VALIDATION].viewSchemasList, ne.Fj[ne.kq.SCHEMA_VALIDATION].uploadSchema, ne.Fj[ne.kq.SCHEMA_VALIDATION].viewSchemaAdoption, ne.Fj[ne.kq.SCHEMA_VALIDATION].downloadSchema, ne.Fj[ne.kq.SCHEMA_VALIDATION].deleteSchema, ne.Fj[ne.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, ne.Fj[ne.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, ne.Fj[ne.kq.SEQUENCE_ANALYTICS].viewSequencesPage, ne.Fj[ne.kq.JWT_VALIDATION].viewJWTRules, ne.Fj[ne.kq.JWT_VALIDATION].addJWTRule, ne.Fj[ne.kq.JWT_VALIDATION].editJWTRule, ne.Fj[ne.kq.JWT_VALIDATION].deleteJWTRule, ne.Fj[ne.kq.JWT_VALIDATION].reprioritizeJWTRule, ne.Fj[ne.kq.JWT_VALIDATION].viewJWTConfigs, ne.Fj[ne.kq.JWT_VALIDATION].addJWTConfig, ne.Fj[ne.kq.JWT_VALIDATION].editJWTConfig, ne.Fj[ne.kq.JWT_VALIDATION].deleteJWTConfig, ne.Fj[ne.kq.SETTINGS].redirectToFirewallRulesTemplate, ne.Fj[ne.kq.SETTINGS].redirectToPages, ne.Fj[ne.kq.SETTINGS].listSessionIdentifiers, ne.Fj[ne.kq.SETTINGS].listRequestsContainingSessionIdentifiers, ne.Fj[ne.kq.SETTINGS].addOrRemoveSessionIdentifiers, ne.Fj[ne.kq.SETTINGS].redirectToCustomRules, ne.Fj[ne.kq.SETTINGS].listAllFallthroughSchemas, ne.Fj[ne.kq.SEQUENCE_RULES].listSequenceRules, ne.Fj[ne.kq.SEQUENCE_RULES].deleteSequenceRule, ne.Fj[ne.kq.SEQUENCE_RULES].reorderSequenceRule, ne.Fj[ne.kq.SEQUENCE_RULES].createSequenceRule, ne.Fj[ne.kq.SEQUENCE_RULES].editSequenceRule, K.Q.TOGGLE_V2, K.Q.FILTER, K.Q.FILTER_COUNTS, K.Q.FEEDBACK, K.Q.API_LATENCY, ke.Z.ANALYTICS, ke.Z.CREATE_AND_DEPLOY, ke.Z.CREATE_MONITOR_LINK, ke.Z.CREATE_MONITOR, ke.Z.CREATE_POOL_LINK, ke.Z.CREATE_POOL, ke.Z.EDIT_MONITOR, ke.Z.EDIT_POOL, ke.Z.LOAD_BALANCING_TABLE, ke.Z.POOL_TABLE, ke.Z.EDIT_MONITOR_LINK, ke.Z.EDIT_POOL_LINK, ...he.eT, F.y.SECONDARY_DNS_NOTIFICATION_CREATE, F.y.SECONDARY_DNS_NOTIFICATION_UPDATE, F.y.SECONDARY_DNS_NOTIFICATION_DELETE, Q.U.ZONE_TRANSFER_SUCCESS, Q.U.DNS_RECORD_CREATE, Q.U.DNS_RECORD_UPDATE, Q.U.DNS_RECORD_DELETE, j.Y.PEER_DNS_CREATE, j.Y.PEER_DNS_UPDATE, j.Y.PEER_DNS_DELETE, j.Y.ZONE_TRANSFER_ENABLE, j.Y.ZONE_TRANSFER_DISABLE, Y.V.ARGO_ENABLEMENT, Y.V.ARGO_GEO_ANALYTICS_FETCH, Y.V.ARGO_GLOBAL_ANALYTICS_FETCH, x.X.VIEW_BUCKETS_LIST, x.X.CREATE_BUCKET, x.X.VALIDATE_BUCKET, x.X.DELETE_BUCKET, x.X.VIEW_CAPTURES_LIST, x.X.CREATE_SIMPLE_CAPTURE, x.X.CREATE_FULL_CAPTURE, x.X.VIEW_FULL_CAPTURE, x.X.DOWNLOAD_SIMPLE_CAPTURE, ee.bK.VIEW_RULES, ee.bK.CREATE_RULE, ee.bK.UPDATE_RULE, ee.bK.DELETE_RULE, ee.bK.VIEW_CONFIGURATION, ee.bK.CREATE_CONFIGURATION, ee.bK.UPDATE_CONFIGURATION, ee.bK.DELETE_CONFIGURATION, ie.r8.VIEW_ALERTS, ie.r8.VIEW_ALERTS_HISTORY, ie.r8.MAGIC_OVERVIEW_ANALYTICS, ie.VZ.CREATE_SITE, ie.VZ.CREATE_TUNNEL, ie.VZ.CREATE_STATIC_ROUTE, ve.DC.CLICK_ADAPTIVE_SAMPLING, ve.DC.CLICK_TO_LOG_EXPLORER_BANNER, ve.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ve.DC.CLICK_SWITCH_TO_RAW_LOGS, ve.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", A.U.REGISTER_DOMAIN_SEARCH_SUBMIT, A.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, A.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, A.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, A.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, A.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, A.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, A.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, A.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, A.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, A.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, A.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, A.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, A.U.REGISTER_DOMAIN_CHECKOUT_ERROR, A.U.TRANSFER_DOMAIN_CHANGE_STEP, A.U.RENEW_DOMAIN_COMPLETED, A.U.RESTORE_DOMAIN_INIT, A.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, A.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, A.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, A.U.RESTORE_DOMAIN_FAILURE, A.U.RESTORE_DOMAIN_COMPLETED, A.U.DOMAIN_DELETE_INIT, A.U.DOMAIN_DELETE_COMPLETED, A.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, A.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, A.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, A.U.DOMAIN_DELETE_CONFIRM_DELETE, A.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, A.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, A.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, A.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, A.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, A.U.DOMAIN_MOVE_START_FLOW, A.U.DOMAIN_MOVE_OPEN_DOCS, A.U.DOMAIN_MOVE_CLOSE_FLOW, A.U.DOMAIN_MOVE_PROGRESS_FLOW, A.U.DOMAIN_MOVE_SUBMIT, A.U.DOMAIN_MOVE_INITIATE_SUCCESS, A.U.DOMAIN_MOVE_INITIATE_ERROR, A.U.DOMAIN_MOVE_CANCEL, A.U.DOMAIN_MOVE_CANCEL_SUCCESS, A.U.DOMAIN_MOVE_CANCEL_ERROR, A.U.ACTION_CENTER_NAVIGATE, A.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, A.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, A.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, pe.z3.CREATE_SECRET, pe.z3.DELETE_SECRET, pe.z3.BIND_SECRET, pe.z3.DUPLICATE_SECRET, pe.z3.EDIT_SECRET, Z.KO.CLICK_GET_STARTED_GUIDE, Z.KO.CLICK_PIPELINE_DOCUMENTATION, Z.KO.CLICK_QUICK_LINK, Z.KO.CREATE_PIPELINE, Z.KO.DELETE_PIPELINE, Z.KO.LIST_PIPELINES, Z.KO.VIEW_PIPELINE, L.S.EXISTING_DOMAIN, L.S.NEW_DOMAIN, L.S.WAF_RULESET, L.S.WORKERS, L.S.PAGES, L.S.R2, L.S.ACCOUNT_MEMBERS, V._.TEMPLATE_PRODUCT_SELECTED, V._.TEMPLATE_SELECTED, V._.TEMPLATE_SAVE_DRAFT, V._.TEMPLATE_CANCEL, V._.TEMPLATE_DEPLOY, Fe.D.CLICK_GO_BACK_SHARE_MODAL, Fe.D.CLICK_MENU_ITEM_SHARE, Fe.D.CLICK_ON_CANCEL_SHARE_MODAL, Fe.D.CLICK_ON_CLOSE_SHARE_MODAL, Fe.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Fe.D.CLICK_ON_DELETE_RULESET, Fe.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Fe.D.CLICK_ON_EDIT_SHARE_PERMISSION, Fe.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Fe.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Fe.D.CLICK_ON_SHARE_TABLE_ROW, je.pR.CLICK_GEOGRAPHICAL_TEMPLATE, je.pR.CLICK_IP_TEMPLATE, je.pR.CLICK_USER_AGENT_TEMPLATE, je.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Ge.vc.CREATED, Ge.vc.ENABLED, Ge.vc.DISABLED, Ge.vc.DELETED, Ge.vc.UPDATED, Ge.vc.DOWNLOADED, le.Gk.REQUEST_REVIEW, le.Gk.COPY_URL, D.v.FIELD, D.v.OPERATOR, Je.Vj.SHOW_LCC_MIGRATION_BANNER, Je.Vj.CLICK_LCC_DOCUMENTATION, Je.Vj.CLICK_LCC_UPGRADE_GUIDE, Je.Vj.SHOW_LCC_MIGRATION_WARNING, xe.y.CLICK_DISMISS_INELIGIBILITY, xe.y.CLICK_NEXT_STEP, xe.y.CLICK_OPT_IN, xe.y.CLICK_OPT_IN_BUTTON, xe.y.CLICK_OPT_OUT_BUTTON, xe.y.DISPLAY_MODAL, xe.y.DISPLAY_OPT_OUT_MODAL, xe.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, xe.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Se.AZ.LOAD_INSIGHTS, Se.AZ.OPEN_SIDE_MODAL_INSIGHT, Se.AZ.CLOSE_SIDE_MODAL_INSIGHT, Se.AZ.CLICK_ACTION_INSIGHT, rt.YC.CHANGE_SETTING, rt.YC.LOAD_SETTINGS, rt.YC.OPEN_SIDE_MODAL_SETTING, rt.YC.CLOSE_SIDE_MODAL_SETTING, rt.YC.FILTER_SETTING, ve.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, ve.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, ve.DC.OPEN_SIDE_DRAWER, ve.DC.CLOSE_SIDE_DRAWER, ae.QV[ae.Xn].clickLoginFromMobileApp2fa, ae.QV[ae.Xn].clickTryOther2FAMethodOrBackupCode, ae.QV[ae.Xn].clickTryRecovery, ae.QV[ae.xq].clickRegenerateBackupCodes, te.Vq.APPEAL_MITIGATION_SUBMIT, te.Vq.APPEAL_MITIGATION_SUCCESS, te.Vq.APPEAL_MITIGATION_FAILURE, te.Vq.CLICK_ABUSE_REPORT_ID, te.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK),
				we = n.eg.exactStrict(n.eg.object({
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
					branch: n.eg.string.optional
				})),
				Le = (oe, re) => {
					const [fe, _e] = Te(re);
					let be, Ue;
					return (0, n.nM)(ge.decode(oe)) && (be = new G.Uh(oe)), _e && _e.length > 0 && (Ue = new G.oV(oe, _e)), [fe, be, Ue]
				},
				Te = oe => {
					const re = we.decode(oe);
					if ((0, n.nM)(re)) {
						const fe = re.left.map(({
							context: _e
						}) => _e.map(({
							key: be
						}) => be)).reduce((_e, be) => _e.concat(be), []).filter(_e => _e in oe);
						return [Be(fe, oe), fe]
					}
					return [oe, []]
				},
				Be = (oe, re) => Object.entries(re).reduce((fe, [_e, be]) => (oe.includes(_e) || (fe[_e] = be), fe), {}),
				qe = oe => (re, fe, _e) => {
					const [be, Ue, Ze] = Le(fe, _e);
					if (Ue) throw Ue;
					return Ze && console.error(Ze), oe(re, fe, be)
				};
			var ot = t("../react/utils/zaraz.ts");
			const _t = {
					identify: !0
				},
				Et = oe => (re, fe, _e) => (_t[fe] || ot.tg === null || ot.tg === void 0 || ot.tg.track(fe, _e), oe(re, fe, _e));
			var yt = t("../react/common/selectors/userSelectors.ts"),
				kt = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function Ke(oe) {
				for (var re = 1; re < arguments.length; re++) {
					var fe = arguments[re] != null ? Object(arguments[re]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), _e.forEach(function(be) {
						ft(oe, be, fe[be])
					})
				}
				return oe
			}

			function ft(oe, re, fe) {
				return re = it(re), re in oe ? Object.defineProperty(oe, re, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : oe[re] = fe, oe
			}

			function it(oe) {
				var re = st(oe, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function st(oe, re) {
				if (typeof oe != "object" || oe === null) return oe;
				var fe = oe[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(oe, re || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(oe)
			}
			const dt = new Set(["cf_argo", "load_balancing_basic_plus"]),
				Re = new Set(["pro", "business"]),
				H = ({
					price: oe,
					ratePlanId: re,
					ratePlanName: fe,
					frequency: _e,
					isNewSubscription: be
				}) => ({
					event: "purchase",
					new_subscription: be,
					ecommerce: {
						transaction_id: (0, kt.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: oe
					},
					items: [{
						item_id: re,
						item_name: fe || re,
						frequency: _e,
						price: oe
					}]
				}),
				de = oe => {
					const {
						price: re,
						frequency: fe,
						plan: _e,
						ratePlanId: be,
						ratePlanName: Ue
					} = oe;
					return Re.has(_e) ? Ke({}, H({
						price: re,
						ratePlanId: be,
						ratePlanName: Ue,
						frequency: fe,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				ye = oe => {
					const {
						price: re,
						frequency: fe,
						ratePlan: _e,
						ratePlanName: be
					} = oe;
					return dt.has(_e) ? Ke({}, H({
						price: re,
						ratePlanId: _e,
						ratePlanName: be,
						frequency: fe,
						isNewSubscription: !0
					}), {
						label: _e
					}) : void 0
				},
				Ie = oe => {
					const {
						price: re,
						frequency: fe,
						plan: _e,
						ratePlanId: be,
						ratePlanName: Ue,
						label: Ze
					} = oe;
					return Re.has(_e) ? Ke({}, H({
						price: re,
						frequency: fe,
						ratePlanId: be,
						ratePlanName: Ue,
						isNewSubscription: !1
					}), {
						label: Ze || _e
					}) : void 0
				},
				Ne = oe => {
					const {
						price: re,
						frequency: fe,
						ratePlan: _e,
						ratePlanName: be,
						oldRatePlan: Ue
					} = oe;
					return dt.has(_e) ? Ke({}, H({
						price: re,
						frequency: fe,
						ratePlanId: _e,
						ratePlanName: be,
						isNewSubscription: !1
					}), {
						label: `${Ue}->${_e}`
					}) : void 0
				},
				He = "pageview",
				tt = "create zone",
				It = "create user",
				vt = "Plan Purchase Success",
				At = "Product Purchase Success",
				Qe = "Plan Update Success",
				ht = "Product Update Success",
				Mt = {
					[He]: !0,
					[tt]: !0,
					[It]: !0,
					[vt]: !0,
					[At]: !0,
					[Qe]: !0,
					[ht]: !0
				},
				Pt = oe => {
					var re;
					return !!((re = oe.gates.assignments) === null || re === void 0 ? void 0 : re["dx-enable-google-tag-manager"])
				},
				Rt = oe => {
					var re;
					return !!((re = oe.gates.assignments) === null || re === void 0 ? void 0 : re["dx-enable-adobe-launch"])
				},
				Dt = oe => {
					const re = /\|MCMID\|([0-9]+)\|/,
						fe = oe.match(re);
					return fe ? fe[1] : void 0
				},
				Nt = oe => {
					var re;
					const {
						deviceViewport: fe,
						page: _e,
						previousPage: be,
						pageName: Ue,
						utm_campaign: Ze,
						_ga: at,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Xe
					} = oe, {
						origin: et
					} = window.location, ct = (0, yt.PR)((0, u.bh)().getState());
					return {
						event: be !== void 0 && _e !== be ? "virtual_page_view" : "page_load",
						device_type: fe,
						hostname: et,
						language: navigator.language,
						locale: (0, i.r)((0, u.bh)().getState()),
						page_location: _e ? `${et}${_e}` : "[redacted]",
						page_path: _e ? `${_e}` : "[redacted]",
						page_referrer: be ? `${et}/${be}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Ue || "[redacted]",
						page_url: _e ? `${et}${_e}` : "[redacted]",
						query: Ze ? `?utm_campaign=${Ze}` : "[redacted]",
						user_properties: {
							ga_client_id: (re = at) !== null && re !== void 0 ? re : void 0,
							ga_client_id_s: at ? `s${at}` : void 0,
							user_id: Ce() ? ct == null ? void 0 : ct.id : void 0,
							ecid: Xe ? Dt(Xe) : void 0
						}
					}
				},
				bt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				xt = oe => {
					const {
						status: re
					} = oe;
					return re === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Ct = (oe, re) => {
					switch (oe) {
						case He:
							return Nt(re);
						case tt:
							return bt();
						case It:
							return xt(re);
						case vt:
							return de(re);
						case At:
							return ye(re);
						case Qe:
							return Ie(re);
						case ht:
							return Ne(re);
						default:
							return
					}
				},
				Bt = oe => (re, fe, _e) => {
					if (Mt[fe]) {
						var be;
						const Ue = Ct(fe, _e);
						Ue && ((be = window.dataLayer) === null || be === void 0 || be.push(Ue))
					}
					return oe(re, fe, _e)
				};
			var Ut = t("../react/utils/cookiePreferences.ts");

			function wt(oe) {
				for (var re = 1; re < arguments.length; re++) {
					var fe = arguments[re] != null ? Object(arguments[re]) : {},
						_e = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && _e.push.apply(_e, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), _e.forEach(function(be) {
						jt(oe, be, fe[be])
					})
				}
				return oe
			}

			function jt(oe, re, fe) {
				return re = $t(re), re in oe ? Object.defineProperty(oe, re, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : oe[re] = fe, oe
			}

			function $t(oe) {
				var re = Wt(oe, "string");
				return typeof re == "symbol" ? re : String(re)
			}

			function Wt(oe, re) {
				if (typeof oe != "object" || oe === null) return oe;
				var fe = oe[Symbol.toPrimitive];
				if (fe !== void 0) {
					var _e = fe.call(oe, re || "default");
					if (typeof _e != "object") return _e;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (re === "string" ? String : Number)(oe)
			}
			const Lt = oe => {
					const re = Pt((0, u.bh)().getState()),
						fe = Rt((0, u.bh)().getState()),
						_e = re || fe;
					r().init(wt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: R() && !(0, a.gm)() && Ce(),
						middlewares: [I, qe, M, Et, ..._e ? [Bt] : []]
					}, oe))
				},
				h = () => {
					r().identify(wt({}, (0, e.getAttribution)(), {
						locale: (0, i.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, _.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				R = () => !0,
				me = () => {
					(0, Ut.kT)("sparrow_id")
				},
				Ce = () => (0, Ut.Xm)()
		},
		"../utils/initStyles.ts": function(W, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				i = c => {
					const l = [];
					for (let g in c.colors) {
						const n = c.colors[g];
						if (Array.isArray(n) && g !== "categorical")
							for (let o = 0; o < n.length; ++o) l.push(`--cf-${g}-${o}:${n[o]};`)
					}
					return l.join(`
`)
				},
				_ = () => {
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
      ${i(e.Rl)}
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
					let g = document.getElementById(a);
					g ? g.innerText = "" : (g = document.createElement("style"), g.id = a, u.appendChild(g)), g.appendChild(document.createTextNode(l)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(_), y.Z = _
		},
		"../utils/sentry/lastSentEventId.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let a = "";
				return {
					setEventId: _ => (!_ || typeof _ != "string" || (a = _), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/zaraz.ts": function(W, y, t) {
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

			function e(s) {
				for (var f = 1; f < arguments.length; f++) {
					var d = arguments[f] != null ? Object(arguments[f]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(w) {
						return Object.getOwnPropertyDescriptor(d, w).enumerable
					})), p.forEach(function(w) {
						r(s, w, d[w])
					})
				}
				return s
			}

			function r(s, f, d) {
				return f = a(f), f in s ? Object.defineProperty(s, f, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[f] = d, s
			}

			function a(s) {
				var f = u(s, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function u(s, f) {
				if (typeof s != "object" || s === null) return s;
				var d = s[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(s, f || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(s)
			}
			const i = {
					track: (s, f) => null,
					set: (s, f) => console.log(`zaraz.set(${s}, ${f})`)
				},
				_ = {
					track: (s, f) => {
						var d;
						(d = window.zaraz) === null || d === void 0 || d.track(s, e({}, f, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, f) => {
						var d;
						return (d = window.zaraz) === null || d === void 0 ? void 0 : d.set(s, f)
					}
				};
			let c;
			const l = () => {
					window.zaraz, c = _
				},
				g = ["email", "first_name", "last_name"],
				n = s => {
					g.forEach(f => {
						var d;
						(d = c) === null || d === void 0 || d.set(f, s[f])
					})
				},
				o = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(W, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(a),
				i = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				_ = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(_),
				l = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				g = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				o = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				s = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				p = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				w = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				O = t("../../../common/component/component-filter-bar/src/constants.js"),
				E = t("../../../common/component/component-filter-bar/src/utils.js");

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(U) {
					for (var A = 1; A < arguments.length; A++) {
						var N = arguments[A];
						for (var $ in N) Object.prototype.hasOwnProperty.call(N, $) && (U[$] = N[$])
					}
					return U
				}, m.apply(this, arguments)
			}

			function C(U) {
				for (var A = 1; A < arguments.length; A++) {
					var N = arguments[A] != null ? Object(arguments[A]) : {},
						$ = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(N).filter(function(q) {
						return Object.getOwnPropertyDescriptor(N, q).enumerable
					})), $.forEach(function(q) {
						v(U, q, N[q])
					})
				}
				return U
			}

			function v(U, A, N) {
				return A = T(A), A in U ? Object.defineProperty(U, A, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[A] = N, U
			}

			function T(U) {
				var A = M(U, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function M(U, A) {
				if (typeof U != "object" || U === null) return U;
				var N = U[Symbol.toPrimitive];
				if (N !== void 0) {
					var $ = N.call(U, A || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(U)
			}
			const I = 70,
				P = (0, i.createStyledComponent)(({
					showOverflow: U
				}) => C({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, U ? {} : {
					maxHeight: I,
					overflow: "hidden"
				})),
				L = (0, i.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				b = (0, i.createStyledComponent)(({
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
				D = (0, i.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				S = (0, i.createStyledComponent)(({
					theme: U
				}) => ({
					color: U.colors.gray[4],
					mr: 1
				}), "span"),
				G = (0, i.createStyledComponent)(() => ({
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
				te = (0, i.createStyledComponent)(({
					buttonStyle: U
				}) => C({
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
				}, U), g.zx),
				le = (0, i.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				ce = (0, i.createStyledComponent)(({
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
				Q = (0, i.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				F = U => U.current ? [...U.current.children].reduce((A, N) => (N.offsetTop >= I && A++, A), 0) : 0;
			let K = 0;
			class j extends e.Component {
				constructor() {
					super();
					v(this, "overflowWrapper", (0, e.createRef)()), v(this, "hasOverflowed", A => {
						const N = F(this.overflowWrapper);
						A.scrollHeight > I && N >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (A.scrollHeight < I || N === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), v(this, "addNewFilter", () => {
						const {
							filterDefinitions: A
						} = this.props, N = (0, E.TE)(A), $ = Object.keys(N)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: $,
								operator: (0, E.uv)($, N),
								value: (0, E.TT)($, N)
							}
						})
					}), v(this, "handleOpenFilterEdit", A => {
						this.setState({
							openFilter: A,
							filterChanges: C({}, this.props.filters[A])
						})
					}), v(this, "handleRemoveFilterClick", (A, N) => {
						A.stopPropagation(), this.removeFilter(N)
					}), v(this, "removeFilter", A => {
						const {
							handleFiltersChange: N
						} = this.props, $ = [...this.props.filters], q = $[A];
						$.splice(A, 1), N($), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: q.key,
							operator: q.operator,
							value: q.value
						})
					}), v(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), v(this, "handleFilterSubmit", A => {
						const {
							filterDefinitions: N
						} = this.props;
						A.preventDefault();
						const {
							filterChanges: $
						} = this.state, q = typeof N[$.key].parse == "function" ? Array.isArray($.value) ? $.value.map(N[$.key].parse) : N[$.key].parse($.value) : $.value;
						if (N[$.key].validate && (Array.isArray(q) ? !q.every(N[$.key].validate) : !N[$.key].validate(q))) return this.setState({
							invalid: !0
						});
						const ee = [...this.props.filters],
							ie = C({}, $, {
								value: q
							}),
							x = !ee[this.state.openFilter];
						x ? ee.push(ie) : ee[this.state.openFilter] = C({}, ie), this.props.handleFiltersChange(ee, ie), (x ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ie.key,
							operator: ie.operator,
							value: ie.value
						}), this.closeOpenFilterChanges()
					}), v(this, "handlePendingKeyChange", ({
						value: A
					}) => {
						const {
							filterDefinitions: N
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: A,
								operator: (0, E.uv)(A, N),
								value: (0, E.TT)(A, N)
							}
						})
					}), v(this, "handlePendingOperatorChange", ({
						value: A
					}) => {
						let N = C({}, this.state.filterChanges, {
							operator: A
						});
						if ((0, E.dr)(A)) {
							var $, q;
							(($ = this.state.filterChanges) === null || $ === void 0 ? void 0 : $.value) && !Array.isArray((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && (N.value = [this.state.filterChanges.value])
						} else {
							var ee, ie, x;
							((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && Array.isArray((ie = this.state.filterChanges) === null || ie === void 0 ? void 0 : ie.value) && ((x = this.state.filterChanges) === null || x === void 0 ? void 0 : x.value.length) > 0 && (N.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: N
						})
					}), v(this, "handlePendingValueChange", A => {
						this.setState({
							invalid: !1,
							filterChanges: C({}, this.state.filterChanges, {
								value: A
							})
						})
					}), v(this, "handleShowOverflow", () => {
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
				componentDidUpdate(A) {
					A.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(A) {
					const {
						formatLabel: N,
						filterDefinitions: $
					} = this.props, {
						operator: q
					} = this.state.filterChanges, ee = $[this.state.filterChanges.key], ie = this.state.filterChanges.value, x = k => Array.isArray(k) ? k.map(Z => Z.value) : (k == null ? void 0 : k.value) || null;
					if (ee.renderValueComponent) return ee.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (ee.type) {
						case O.k.custom: {
							var V;
							return r().createElement(ee.CustomComponent, m({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (V = ee == null ? void 0 : ee.customProps) !== null && V !== void 0 ? V : {}))
						}
						case O.k.select:
							return (0, E.dr)(q) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !ee.options,
								value: typeof ie.split == "function" ? ie == null ? void 0 : ie.split(",") : Array.isArray(ie) ? ie : [],
								options: ee.options ? ee.options.map(k => ({
									value: k.value || k,
									label: k.label || N(this.state.filterChanges.key, k, A)
								})) : ie ? (Array.isArray(ie) ? ie : ie.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(_.Trans, {
									id: ee.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: ee.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: k => {
									this.handlePendingValueChange(x(k))
								},
								isValidNewOption: k => {
									const Z = ee.validate;
									return !Z && k || k && Z([k])
								},
								getNewOptionData: (k, Z) => ({
									value: k,
									label: Z
								})
							}) : r().createElement(s.hQ, {
								hideLabel: !0,
								value: ie,
								options: ee.options.map(k => ({
									value: k,
									label: N(this.state.filterChanges.key, k, A)
								})),
								onChange: ({
									value: k
								}) => this.handlePendingValueChange(k)
							});
						case O.k.string:
						default:
							return (0, E.dr)(q) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ie.split == "function" ? ie == null ? void 0 : ie.split(",") : Array.isArray(ie) ? ie : [],
								options: ie ? (Array.isArray(ie) ? ie : ie.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: A.t("analytics.report.filters.labels.placeholder", {
									example: $[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: k => {
									this.handlePendingValueChange(x(k))
								},
								isValidNewOption: k => {
									const Z = ee.validate;
									return !Z && k || k && Z([k])
								},
								getNewOptionData: (k, Z) => ({
									value: k,
									label: Z
								}),
								formatCreateLabel: k => A.t("filter_editor.value_create_label", {
									value: k
								})
							}) : r().createElement(_.I18n, null, k => r().createElement(l.I, {
								value: this.state.filterChanges.value,
								onChange: Z => this.handlePendingValueChange(Z.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: k.t("analytics.report.filters.labels.placeholder", {
									example: $[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: A,
						filterDefinitions: N,
						modalStyles: $,
						filterIconType: q,
						buttonStyle: ee,
						secondaryActionComponent: ie
					} = this.props, x = F(this.overflowWrapper), V = `filterPanel${this.state.id}`, k = this.state.openFilter !== null;
					return r().createElement(_.I18n, null, Z => r().createElement(f.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(Q, null, r().createElement(f.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(te, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": k,
						"aria-controls": V,
						inverted: !0,
						buttonStyle: ee
					}, r().createElement(n.J, {
						type: q || "add",
						mr: 1,
						label: Z.t("common.add", {
							_: "Add"
						})
					}), r().createElement(_.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!ie && r().createElement(f.ZC, null, ie)), this.props.filters.length > 0 && r().createElement(le, null, r().createElement(_.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(P, {
						innerRef: this.overflowWrapper,
						overflowLimit: I,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ae, pe) => {
						const {
							key: ue,
							operator: ve,
							value: ne
						} = ae, Oe = N[ue].ignoreLabelTranslation ? N[ue].label : Z.t(N[ue].label), Se = Z.t(`analytics.report.filters.operators.${ve}`), Me = Array.isArray(ne) ? ne.map(xe => A(ue, xe, Z)).join(", ") : A(ue, ne, Z), je = `${Oe} ${Se} ${Me}`;
						return r().createElement(L, {
							key: `${ue}-${ve}-${ne}`,
							title: je
						}, r().createElement(b, {
							onClick: () => this.handleOpenFilterEdit(pe)
						}, r().createElement(f.ZC, {
							display: "flex"
						}, r().createElement(D, null, Oe), r().createElement(S, null, Se), r().createElement(G, null, Me), (0, E.oN)(ae, N) ? r().createElement(o.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(ce, {
							onClick: xe => this.handleRemoveFilterClick(xe, pe),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), k && r().createElement(w.Z, {
						id: V,
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
						formatLabel: A,
						modalStyles: $
					}), this.state.hasOverflowed && r().createElement(p.Z, {
						count: x,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			v(j, "propTypes", {
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
			}), y.Z = j
		},
		"../../../common/component/component-filter-bar/src/index.js": function(W, y, t) {
			"use strict";
			t.d(y, {
				ME: function() {
					return r.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return a.k
				},
				oN: function() {
					return u.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				u = t("../../../common/component/component-filter-bar/src/utils.js"),
				i = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return i
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
				var l = a(c, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function a(c, l) {
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
			class i extends u {
				constructor(l, g) {
					super(l, `Translation key not found: ${l}, locale: ${g}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var _ = null
		},
		"../../../common/util/types/src/api/domain.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return M
				},
				Ib: function() {
					return v
				},
				Ks: function() {
					return I
				},
				MS: function() {
					return T
				},
				PN: function() {
					return p
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return f
				},
				TS: function() {
					return d
				},
				W7: function() {
					return E
				},
				dN: function() {
					return P
				},
				eF: function() {
					return C
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
				a = e.eg.object({
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
					zip: e.eg.string
				}),
				i = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				_ = e.eg.object({
					registrant: u.optional,
					technical: u.optional,
					administrator: u.optional,
					billing: u.optional
				}),
				c = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: _.optional,
					years: e.eg.number
				}),
				l = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let g = function(L) {
				return L.ONBOARDING_INITIATED = "Onboarding Initiated", L.ONBOARDED = "Onboarded", L.PENDING_REGISTRY_LOCK = "Pending Registry Lock", L.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", L.REGISTRY_UNLOCKED = "Registry Unlocked", L.LOCKED = "Locked", L.FAILED_TO_LOCK = "Failed To Lock", L.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", L.UNLOCKED = "Unlocked", L.OFFBOARDED = "Offboarded", L
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
					landing: e.eg.union([a, e.eg.boolean]).optional,
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
					transfer_conditions: i.optional,
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
				s = e.eg.object({
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
				f = e.eg.object({
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
			let p = function(L) {
				return L.PENDING = "pending", L.VERIFIED = "verified", L.REJECTED = "rejected", L.PENDING_DELETE = "pending_delete", L.DELETED = "deleted", L
			}({});
			const w = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(p),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				O = e.eg.object({
					designated_approvers: e.eg.array(w)
				});
			let E = function(L) {
				return L.PENDING = "pending", L.PENDING_UPDATE = "pending_update", L.ENABLED = "enabled", L.DISABLED = "disabled", L
			}({});
			const m = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(E)
				}),
				C = e.eg.intersection([m, O]),
				v = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let T = function(L) {
				return L.UNLOCK_APPROVAL = "UnlockApprovalRequest", L.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", L.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", L.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", L
			}({});
			const M = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				I = e.eg.object({
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
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function(W, y, t) {
			"use strict";
			t.d(y, {
				df: function() {
					return r
				},
				eX: function() {
					return a
				},
				fG: function() {
					return i
				},
				jI: function() {
					return u
				},
				qu: function() {
					return e
				},
				zc: function() {
					return _
				}
			});
			let e = function(c) {
					return c.Custom = "custom", c.Root = "root", c.Managed = "managed", c.Zone = "zone", c.RateLimit = "ratelimit", c
				}({}),
				r = function(c) {
					return c.Cache = "http_request_cache_settings", c.HttpCustomErrors = "http_custom_errors", c.HttpConfigSettings = "http_config_settings", c.HttpLogCustomFields = "http_log_custom_fields", c.HttpRateLimit = "http_ratelimit", c.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", c.HttpRequestFirewallCustom = "http_request_firewall_custom", c.HttpRequestFirewallManaged = "http_request_firewall_managed", c.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", c.HttpRequestLateTransform = "http_request_late_transform", c.HttpRequestMain = "http_request_main", c.HttpRequestOrigin = "http_request_origin", c.HttpRequestRedirect = "http_request_redirect", c.HttpRequestSanitize = "http_request_sanitize", c.HttpRequestSBFM = "http_request_sbfm", c.HttpRequestsSnippets = "http_request_snippets", c.HttpRequestTransform = "http_request_transform", c.HttpResponseCompression = "http_response_compression", c.HttpResponseFirewallManaged = "http_response_firewall_managed", c.HttpResponseTransform = "http_response_headers_transform", c.L4DDoS = "ddos_l4", c.L7DDoS = "ddos_l7", c.MagicIDS = "magic_transit_ids_managed", c.MagicManaged = "magic_transit_managed", c.MagicTransit = "magic_transit", c.MagicTransitRateLimit = "magic_transit_ratelimit", c
				}({}),
				a = function(c) {
					return c.Execute = "execute", c.All = "all", c.Block = "block", c.JSChallenge = "js_challenge", c.Challenge = "challenge", c.Allow = "allow", c.Bypass = "bypass", c.Log = "log", c.Rewrite = "rewrite", c.Score = "score", c.Skip = "skip", c.Managed_Challenge = "managed_challenge", c.DDoS_Dynamic = "ddos_dynamic", c.Select_Config = "select_config", c.Set_Config = "set_config", c.Reset = "reset", c.Redirect = "redirect", c.Cache = "set_cache_settings", c.WhiteList = "whitelist", c.Error = "serve_error", c
				}({}),
				u = function(c) {
					return c.ZONE_LOCKDOWN = "zoneLockdown", c.UA_BLOCK = "uaBlock", c.BIC = "bic", c.HOT = "hot", c.SECURITY_LEVEL = "securityLevel", c.RATE_LIMIT = "rateLimit", c.WAF = "waf", c
				}({}),
				i = function(c) {
					return c.DEFAULT = "default", c.MEDIUM = "medium", c.LOW = "low", c.EOFF = "eoff", c.HIGH = "high", c.VERY_HIGH = "very_high", c
				}({}),
				_ = function(c) {
					return c.DEFAULT = "", c.XML = "text/xml", c.JSON = "application/json", c.TEXT = "text/plain", c.HTML = "text/html", c
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Yd: function() {
					return e
				},
				vE: function() {
					return r
				}
			});

			function e(a) {
				return Object.keys(a)
			}
			const r = (a, u) => {
				if (u !== void 0) throw new Error("Unexpected object: " + a);
				return u
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(W, y, t) {
			"use strict";
			t.d(y, {
				Fy: function() {
					return e.Z
				},
				if: function() {
					return a.Z
				},
				n4: function() {
					return r.n
				}
			});
			var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				r = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				a = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/common/out.css": function(W, y, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[W.id, e, ""]
			]);
			var r, a, u = {
				hmr: !0
			};
			u.transform = r, u.insertInto = void 0;
			var i = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
			e.locals && (W.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(W, y, t) {
			y = W.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), y.push([W.id, `/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */
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
    --color-orange-400: oklch(75% 0.183 55.934);
    --color-orange-600: oklch(64.6% 0.222 41.116);
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
    --color-blue-50: oklch(97% 0.014 254.604);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-blue-800: oklch(0.424 0.199 265.638);
    --color-blue-900: oklch(37.9% 0.146 265.522);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
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
    --container-lg: 32rem;
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
    --radius-xs: 0.125rem;
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --ease-in: cubic-bezier(0.4, 0, 1, 1);
    --ease-out: cubic-bezier(0, 0, 0.2, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-spin: spin 1s linear infinite;
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
    --color-ob-base-1000: var(--color-neutral-900);
    --text-color-ob-inverted: var(--color-white);
    --color-cl1-white: var(--cf-white);
    --color-cl1-gold-7: var(--cf-gold-7);
    --color-cl1-gold-9: var(--cf-gold-9);
    --color-cl1-blue-2: var(--cf-blue-2);
    --color-cl1-blue-8: var(--cf-blue-8);
    --color-cl1-gray-0: var(--cf-gray-0);
    --color-cl1-gray-2: var(--cf-gray-2);
    --color-cl1-gray-4: var(--cf-gray-4);
    --color-cl1-gray-5: var(--cf-gray-5);
    --color-cl1-new-gray-7: var(--cf-newGray-7);
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
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
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
  .m-auto {
    margin: auto;
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
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
  .max-h-\\[400px\\] {
    max-height: 400px;
  }
  .max-h-\\[600px\\] {
    max-height: 600px;
  }
  .max-h-\\[calc\\(100vh-64px\\)\\] {
    max-height: calc(100vh - 64px);
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
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-3\\.5 {
    width: calc(var(--spacing) * 3.5);
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
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-80 {
    width: calc(var(--spacing) * 80);
  }
  .w-\\[10px\\] {
    width: 10px;
  }
  .w-\\[15\\%\\] {
    width: 15%;
  }
  .w-\\[30\\%\\] {
    width: 30%;
  }
  .w-\\[380px\\] {
    width: 380px;
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
  .w-sm {
    width: var(--container-sm);
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
  .scale-x-0 {
    --tw-scale-x: 0%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .scale-x-100 {
    --tw-scale-x: 100%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
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
  .rounded-t-lg {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
  }
  .\\!rounded-l-xl {
    border-top-left-radius: var(--radius-xl) !important;
    border-bottom-left-radius: var(--radius-xl) !important;
  }
  .\\!rounded-r-xl {
    border-top-right-radius: var(--radius-xl) !important;
    border-bottom-right-radius: var(--radius-xl) !important;
  }
  .rounded-b-lg {
    border-bottom-right-radius: var(--radius-lg);
    border-bottom-left-radius: var(--radius-lg);
  }
  .rounded-b-xs {
    border-bottom-right-radius: var(--radius-xs);
    border-bottom-left-radius: var(--radius-xs);
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
  .border-1 {
    border-style: var(--tw-border-style);
    border-width: 1px;
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
  .border-solid {
    --tw-border-style: solid;
    border-style: solid;
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
  .border-blue-600 {
    border-color: var(--color-blue-600);
  }
  .border-border {
    border-color: var(--color-border);
  }
  .border-cl1-gold-7 {
    border-color: var(--color-cl1-gold-7);
  }
  .border-cl1-new-gray-7 {
    border-color: var(--color-cl1-new-gray-7);
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
  .border-neutral-200 {
    border-color: var(--color-neutral-200);
  }
  .border-neutral-200\\/60 {
    border-color: color-mix(in srgb, oklch(0.922 0 0) 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-neutral-200) 60%, transparent);
    }
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
  .bg-bg-primary {
    background-color: var(--color-bg-primary);
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
  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }
  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }
  .bg-cl1-blue-8 {
    background-color: var(--color-cl1-blue-8);
  }
  .bg-cl1-gold-9 {
    background-color: var(--color-cl1-gold-9);
  }
  .bg-cl1-white {
    background-color: var(--color-cl1-white);
  }
  .bg-destructive {
    background-color: var(--color-destructive);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
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
  .bg-primary {
    background-color: var(--color-primary);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
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
  .p-0\\.5 {
    padding: calc(var(--spacing) * 0.5);
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
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
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
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
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
  .py-\\[3px\\] {
    padding-block: 3px;
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
  .pb-4 {
    padding-bottom: calc(var(--spacing) * 4);
  }
  .pb-10 {
    padding-bottom: calc(var(--spacing) * 10);
  }
  .pl-2 {
    padding-left: calc(var(--spacing) * 2);
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
  .text-border {
    color: var(--color-border);
  }
  .text-cl1-blue-2 {
    color: var(--color-cl1-blue-2);
  }
  .text-cl1-gray-0 {
    color: var(--color-cl1-gray-0);
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
  .text-destructive {
    color: var(--text-color-destructive);
  }
  .text-error {
    color: var(--text-color-error);
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
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-green-600 {
    color: var(--color-green-600);
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
  .text-neutral-950 {
    color: var(--color-neutral-950);
  }
  .text-ob-inverted {
    color: var(--text-color-ob-inverted);
  }
  .text-orange-600 {
    color: var(--color-orange-600);
  }
  .text-primary {
    color: var(--text-color-primary);
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
  .text-secondary {
    color: var(--text-color-secondary);
  }
  .text-surface {
    color: var(--text-color-surface);
  }
  .text-white {
    color: var(--color-white);
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
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
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
  .first\\:pl-2 {
    &:first-child {
      padding-left: calc(var(--spacing) * 2);
    }
  }
  .last\\:pr-2 {
    &:last-child {
      padding-right: calc(var(--spacing) * 2);
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
  .disabled\\:bg-primary\\/70 {
    &:disabled {
      background-color: var(--color-primary);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-primary) 70%, transparent);
      }
    }
  }
  .disabled\\:text-muted {
    &:disabled {
      color: var(--text-color-muted);
    }
  }
  .disabled\\:text-primary\\/80 {
    &:disabled {
      color: var(--text-color-primary);
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, var(--text-color-primary) 80%, transparent);
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(W, y, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(a) {
				if (!t.o(e, a)) return Promise.resolve().then(function() {
					var _ = new Error("Cannot find module '" + a + "'");
					throw _.code = "MODULE_NOT_FOUND", _
				});
				var u = e[a],
					i = u[0];
				return t.e(u[1]).then(function() {
					return t.t(i, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", W.exports = r
		}
	}
]);

//# debugId=1b21a846-37f5-5f35-b0cf-ffef02dd5e57