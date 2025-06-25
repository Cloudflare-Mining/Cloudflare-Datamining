! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6e603906-616b-5d0b-864a-7e7c426680c7")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				J8: function() {
					return i
				},
				Jd: function() {
					return d
				},
				QY: function() {
					return p
				},
				Qw: function() {
					return s
				},
				ki: function() {
					return c
				},
				wz: function() {
					return I
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				l = t.n(a),
				u = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				_;
			const s = () => Object.keys(u.Z).reduce((E, g) => (g.indexOf("cf_beta.") === 0 && u.Z.get(g) === "true" && E.push(g.split(".").slice(1).join(".")), E), []),
				c = () => {
					var E, g, b;
					return ((E = window) === null || E === void 0 || (g = E.bootstrap) === null || g === void 0 || (b = g.data) === null || b === void 0 ? void 0 : b.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((_ = window) === null || _ === void 0 ? void 0 : _.location) && u.Z) {
				const E = l().parse(window.location.search);
				E.beta_on && u.Z.set(`cf_beta.${E.beta_on}`, !0), E.beta_off && u.Z.set(`cf_beta.${E.beta_off}`, !1)
			}
			const m = {},
				n = E => {
					var g, b, v;
					return Object.prototype.hasOwnProperty.call(m, E) ? m[E] : ((g = window) === null || g === void 0 || (b = g.bootstrap) === null || b === void 0 || (v = b.data) === null || v === void 0 ? void 0 : v.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(w => w === E) ? (m[E] = !0, !0) : (m[E] = !1, !1)
				},
				o = E => u.Z ? u.Z.get(`cf_beta.${E}`) === !0 : !1,
				i = E => o(E) || n(E),
				f = () => !0,
				d = () => {
					var E, g, b;
					return ((E = window) === null || E === void 0 || (g = E.bootstrap) === null || g === void 0 || (b = g.data) === null || b === void 0 ? void 0 : b.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				p = E => {
					const g = (0, e.uF)(E),
						b = (g == null ? void 0 : g.roles) || [];
					return (0, r.qR)(location.pathname) && b.length === 1 && b.some(v => v === "Administrator Read Only")
				},
				T = () => {
					var E, g, b;
					return ((E = window) === null || E === void 0 || (g = E.location) === null || g === void 0 || (b = g.origin) === null || b === void 0 ? void 0 : b.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				I = () => T() === "fed"
		},
		"../functions/utils/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				r = "cf_fv_preview",
				a = "cf_pv",
				l = "current",
				u = "hash",
				_ = "deploymentPreview",
				s = "fragmentPreview",
				c = o => o === l ? m() : n(),
				m = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (o = 72) => {
					const i = 36e5;
					return new Date(Date.now() + o * i)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				E9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(E) {
				for (var g = 1; g < arguments.length; g++) {
					var b = arguments[g] != null ? Object(arguments[g]) : {},
						v = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(b).filter(function(w) {
						return Object.getOwnPropertyDescriptor(b, w).enumerable
					})), v.forEach(function(w) {
						a(E, w, b[w])
					})
				}
				return E
			}

			function a(E, g, b) {
				return g = l(g), g in E ? Object.defineProperty(E, g, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[g] = b, E
			}

			function l(E) {
				var g = u(E, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function u(E, g) {
				if (typeof E != "object" || E === null) return E;
				var b = E[Symbol.toPrimitive];
				if (b !== void 0) {
					var v = b.call(E, g || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(E)
			}
			const _ = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				s = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				c = e.z.string(),
				m = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(c, m),
				o = e.z.enum(["live", "previews", "canary"]),
				i = (E, g) => {
					const b = E.data.cookies[g],
						v = {
							[PREVIEW_VERSIONING_COOKIE]: _,
							[DEPLOYMENT_VERSION_COOKIE]: s
						};
					try {
						return v[g].parse(b)
					} catch {
						return null
					}
				},
				f = E => {
					try {
						return decodeURIComponent(E).split(",").reduce((g, b) => {
							const v = b.split(":"),
								w = c.parse(v[0]),
								M = m.parse(v[1]);
							return r({}, g, {
								[w]: M
							})
						}, {})
					} catch {
						return {}
					}
				},
				d = E => {
					const g = E.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						b = f(g);
					try {
						return n.parse(b)
					} catch {
						return null
					}
				},
				p = E => {
					const g = _.parse(E),
						[b, ...v] = g.split("-"),
						w = v.join("-");
					return {
						projectType: b,
						deploymentId: w
					}
				},
				T = (E, g) => {
					if (!g) return "";
					try {
						var b;
						const {
							projectType: v,
							deploymentId: w
						} = p(g), M = {
							live: E.env.PAGES_WORKERS_LIVE_HOST,
							previews: E.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: O,
							pathname: P,
							search: L
						} = new URL(E.request.url), C = O == null || (b = O.split(".")) === null || b === void 0 ? void 0 : b[0];
						if (w && w !== C && o.safeParse(v).success) {
							const A = M[v];
							return `https://${w}.${A}${P}${L}`
						}
					} catch (v) {
						console.log(v)
					}
					return ""
				},
				I = (E, g) => {
					if (!g) return "";
					try {
						var b;
						const v = E.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: w,
								pathname: M,
								search: O
							} = new URL(E.request.url),
							P = w == null || (b = w.split(".")) === null || b === void 0 ? void 0 : b[0],
							{
								deploymentSHA: L
							} = parsePagesDevUrl(E.env.CF_PAGES_URL),
							C = E.request.headers.get("sec-fetch-dest") === "document";
						if (g && g !== P && g !== L && !C) return `https://${g}.${v}${M}${O}`
					} catch (v) {
						console.log(v)
					}
					return ""
				}
		},
		"../init.ts": function(F, y, t) {
			"use strict";
			t.r(y);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				l = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				u = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function _(x) {
				for (var z = 1; z < arguments.length; z++) {
					var q = arguments[z] != null ? Object(arguments[z]) : {},
						se = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(q).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(q, Ee).enumerable
					})), se.forEach(function(Ee) {
						s(x, Ee, q[Ee])
					})
				}
				return x
			}

			function s(x, z, q) {
				return z = c(z), z in x ? Object.defineProperty(x, z, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[z] = q, x
			}

			function c(x) {
				var z = m(x, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function m(x, z) {
				if (typeof x != "object" || x === null) return x;
				var q = x[Symbol.toPrimitive];
				if (q !== void 0) {
					var se = q.call(x, z || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(x)
			}
			const n = x => {
				const z = x && x.headers || {},
					q = new Headers(z);
				return q.append("X-Cross-Site-Security", "dash"), _({}, x, {
					headers: q
				})
			};
			(0, u.register)({
				request: (x, z) => {
					try {
						return new URL(x), x === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", z] : [x, z]
					} catch {
						var q, se;
						return typeof x == "object" && ((q = x) === null || q === void 0 || (se = q.url) === null || se === void 0 ? void 0 : se.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [x, z] : [x, n(z)]
					}
				}
			});
			var o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				f = t("../react/app/providers/storeContainer.js");
			let d = "";
			const p = 61;

			function T(x) {
				const z = x.substr(1);
				if (z && d !== z) {
					const q = document.getElementById(z);
					if (q) {
						const se = q.getBoundingClientRect().top;
						if (se > 0) {
							const Ee = se - p;
							document.documentElement.scrollTop = Ee
						}
					}
				}
				d = z
			}

			function I(x) {
				x.listen(z => T(z.hash))
			}
			var E = t("../../../../node_modules/cookie/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				b = t("../functions/utils/constants.ts");
			const v = x => {
					switch (x) {
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
				w = (x, z = !1) => {
					var q;
					const se = v(x),
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
						Ae = z ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(q=window.build)===null||q===void 0?void 0:q.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return Ee + Ae
				},
				M = x => {
					var z;
					const q = document.getElementById(x);
					!q || (z = q.parentNode) === null || z === void 0 || z.removeChild(q)
				};

			function O() {
				const x = document.getElementById("loading-state");
				x == null || x.classList.add("hide"), x == null || x.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(M)
				})
			}

			function P(x) {
				var z;
				const q = document.getElementById("loading-state"),
					se = !!((z = E.parse(document.cookie)) === null || z === void 0 ? void 0 : z[b.b1]);
				!q || (q.innerHTML = w(x == null ? void 0 : x.code, se))
			}
			var L = t("../utils/initStyles.ts"),
				C = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				A = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				S = t("../react/common/selectors/languagePreferenceSelector.ts"),
				G = t("../flags.ts"),
				ne = t("../utils/getDashVersion.ts");
			const ce = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				le = !0,
				Q = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				W = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var K = t("../utils/sentry/lastSentEventId.ts"),
				j = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				U = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const D = x => {
				const z = async q => {
					var se, Ee;
					const Ae = {
						envelope: q.body,
						url: x.url,
						isPreviewDeploy: (se = window) === null || se === void 0 || (Ee = se.build) === null || Ee === void 0 ? void 0 : Ee.isPreviewDeploy,
						release: (0, ne.t)()
					};
					try {
						const Pe = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Ae)
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
				return j.q(x, z)
			};
			var B = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				$ = t("../../../../node_modules/history/esm/history.js"),
				re = (0, $.lX)(),
				ie = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				N = t("../react/utils/url.ts");
			const V = (0, ie.Rf)();
			let k;

			function H(x) {
				return ae(x, "react-router-v5")
			}

			function ae(x, z) {
				return (q, se = !0, Ee = !0) => {
					se && V && V.location && (k = q({
						name: (0, N.Fl)(V.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": z
						}
					})), Ee && x.listen && x.listen((Ae, Pe) => {
						if (Pe && (Pe === "PUSH" || Pe === "POP")) {
							k && k.finish();
							const je = {
								"routing.instrumentation": z
							};
							k = q({
								name: (0, N.Fl)(Ae.pathname),
								op: "navigation",
								tags: je
							})
						}
					})
				}
			}
			var pe = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ue = t.n(pe),
				_e = t("../../../common/intl/intl-core/src/errors.ts"),
				oe = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				we = t("../react/common/middleware/sparrow/errors.ts");

			function De(x, z, q) {
				return z = Me(z), z in x ? Object.defineProperty(x, z, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[z] = q, x
			}

			function Me(x) {
				var z = xe(x, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function xe(x, z) {
				if (typeof x != "object" || x === null) return x;
				var q = x[Symbol.toPrimitive];
				if (q !== void 0) {
					var se = q.call(x, z || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(x)
			}
			class Ne {
				constructor() {
					De(this, "name", Ne.id)
				}
				setupOnce() {
					t.g.console && (0, oe.hl)(t.g.console, "error", z => (...q) => {
						const se = q.find(Ee => Ee instanceof Error);
						if (ce && se) {
							let Ee, Ae = !0;
							if (se instanceof we.ez) {
								const Pe = se instanceof we.oV ? se.invalidProperties : void 0;
								Ee = {
									tags: {
										"sparrow.eventName": se.eventName
									},
									extra: {
										sparrow: {
											eventName: se.eventName,
											invalidProperties: Pe
										}
									},
									fingerprint: [se.name ? se.name : "SparrowValidationError"]
								}, Ae = !1
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
							} else se instanceof _e.YB && (Ee = {
								fingerprint: ["TranslatorError", se.translationKey]
							});
							Ae && o.Tb(se, Ee)
						}
						typeof z == "function" && z.apply(t.g.console, q)
					})
				}
			}
			De(Ne, "id", "ConsoleErrorIntegration");
			var Je = null,
				Ye = t("../react/common/utils/getEnvironment.ts");
			const Fe = () => {
					if (ce && le) {
						var x, z, q, se, Ee, Ae, Pe, je, ct, Ze;
						const Vt = (0, Ye.Z)();
						let Tt = "production";
						((x = window) === null || x === void 0 || (z = x.build) === null || z === void 0 ? void 0 : z.isPreviewDeploy) && (Tt += "-preview"), Vt === "canary" && (Tt = "canary"), A.S({
							dsn: ce,
							release: (0, ne.t)(),
							environment: Tt,
							ignoreErrors: W,
							allowUrls: Q,
							autoSessionTracking: !1,
							integrations: gt => [...gt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new Ne, new B.jK.BrowserTracing({
								routingInstrumentation: H(re)
							})],
							tracesSampleRate: 0,
							transport: D,
							beforeSend: gt => (K.e.setEventId(gt.event_id), gt)
						});
						const kt = (0, f.bh)().getState();
						o.rJ({
							LOCAL_STORAGE_FLAGS: (0, G.Qw)(),
							USER_BETA_FLAGS: (0, G.ki)(),
							meta: {
								connection: {
									type: (q = window) === null || q === void 0 || (se = q.navigator) === null || se === void 0 || (Ee = se.connection) === null || Ee === void 0 ? void 0 : Ee.effectiveType,
									bandwidth: (Ae = window) === null || Ae === void 0 || (Pe = Ae.navigator) === null || Pe === void 0 || (je = Pe.connection) === null || je === void 0 ? void 0 : je.downlink
								},
								languagePreference: (0, S.r)(kt),
								isPreviewDeploy: (ct = window) === null || ct === void 0 || (Ze = ct.build) === null || Ze === void 0 ? void 0 : Ze.isPreviewDeploy
							},
							utilGates: (0, C.T2)(kt)
						}), window.addEventListener("unhandledrejection", function(gt) {})
					}
				},
				Ke = x => {
					x ? o.av({
						id: x
					}) : o.av(null)
				};
			var Z = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Le = () => {
					let x;
					try {
						x = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), x = window.location.search
					}
					if (!x.includes("remote[")) return;
					const z = new URLSearchParams(x),
						q = {};
					for (let [se, Ee] of z) se.includes("remote") && (q[se.replace(/remote\[|\]/g, "")] = Ee);
					Z.Z.set("mfe-remotes", JSON.stringify(q))
				},
				We = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				dt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const at = "ANON_USER_ID";

			function Oe() {
				var x, z, q, se;
				let Ee = (x = t.g) === null || x === void 0 || (z = x.bootstrap) === null || z === void 0 || (q = z.data) === null || q === void 0 || (se = q.user) === null || se === void 0 ? void 0 : se.id;
				if (!Ee) {
					let Ae = Z.Z.get(at);
					if (!Ae) {
						let Pe = (0, dt.Z)();
						Z.Z.set(at, Pe), Ae = Pe
					}
					return Ae
				}
				return Ee
			}
			async function J() {
				const x = (0, f.bh)();
				x.dispatch((0, We.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await x.dispatch((0, C.UL)({
					userId: Oe()
				}))
			}
			class ge extends Error {
				constructor(z, q) {
					super(q);
					this.name = `${z} ${q}`
				}
			}
			const Ce = () => {
					document.cookie.split(";").forEach(z => {
						const [q] = z.trim().split("=");
						document.cookie = `${q}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				ze = async () => {
					let x = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!x.ok) throw x.headers.get("content-type") === "text/html" && (await x.text()).toLowerCase().includes("cookie too large") && (o.$e(function(Ee) {
						Ee.setTag("init", "cookieTooLarge"), o.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), Ce(), window.location.reload()), new ge("Bootstrap API Failure", x == null ? void 0 : x.status);
					return (await x.json()).result.data
				};
			var ke = t("webpack/sharing/consume/default/react/react"),
				Te = t.n(ke),
				$e = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				lt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				it = t("webpack/sharing/consume/default/react-redux/react-redux"),
				_t = t("../../../../node_modules/swr/core/dist/index.mjs"),
				Et = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				yt = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				mt = t("../react/shims/focus-visible.js"),
				Ve = t("../react/app/components/DeepLink/index.ts"),
				ft = t("../../../../node_modules/prop-types/index.js"),
				nt = t.n(ft),
				rt = t("../react/utils/translator.tsx"),
				ut = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				Se = t("../../../dash/intl/intl-translations/src/index.ts"),
				Y = t("../../../../node_modules/query-string/query-string.js"),
				de = t.n(Y),
				ye = t("../react/common/actions/userActions.ts"),
				Ie = t("../react/common/selectors/userSelectors.ts"),
				Re = t("../react/utils/i18n.ts"),
				Ge = t("../react/utils/bootstrap.ts");

			function et(x) {
				for (var z = 1; z < arguments.length; z++) {
					var q = arguments[z] != null ? Object(arguments[z]) : {},
						se = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(q).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(q, Ee).enumerable
					})), se.forEach(function(Ee) {
						wt(x, Ee, q[Ee])
					})
				}
				return x
			}

			function wt(x, z, q) {
				return z = vt(z), z in x ? Object.defineProperty(x, z, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[z] = q, x
			}

			function vt(x) {
				var z = It(x, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function It(x, z) {
				if (typeof x != "object" || x === null) return x;
				var q = x[Symbol.toPrimitive];
				if (q !== void 0) {
					var se = q.call(x, z || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(x)
			}
			let Qe = de().parse(location.search);
			const Ot = x => {
					const z = (0, Ge.$8)() ? [(0, Se.Fy)(Se.if.changes), (0, Se.Fy)(Se.if.common), (0, Se.Fy)(Se.if.navigation), (0, Se.Fy)(Se.if.overview), (0, Se.Fy)(Se.if.onboarding), (0, Se.Fy)(Se.if.invite), (0, Se.Fy)(Se.if.login), (0, Se.Fy)(Se.if.dns), (0, Se.Fy)(Se.n4.ssl_tls), (0, Se.Fy)(Se.if.message_inbox), (0, Se.Fy)(Se.if.welcome)] : [(0, Se.Fy)(Se.if.common), (0, Se.Fy)(Se.if.invite), (0, Se.Fy)(Se.if.login), (0, Se.Fy)(Se.if.onboarding)];
					Qe.lang ? Mt(x) : Z.Z.get(Re.th) && At(x, (0, Re.Kd)());
					const q = async se => (await Promise.all(z.map(Ae => Ae(se)))).reduce((Ae, Pe) => et({}, Ae, Pe), {});
					return Te().createElement(ut.LocaleContext.Provider, {
						value: x.languagePreference
					}, Te().createElement(ut.I18nProvider, {
						translator: rt.Vb,
						locale: x.languagePreference
					}, Te().createElement(ut.I18nLoader, {
						loadPhrases: q
					}, x.children)))
				},
				Mt = async x => {
					let z = Qe.lang.substring(0, Qe.lang.length - 2) + Qe.lang.substring(Qe.lang.length - 2, Qe.lang.length).toUpperCase();
					if (!(0, S.v)(z)) {
						console.warn(`${z} is not a supported locale.`), delete Qe.lang, x.history.replace({
							search: de().stringify(Qe)
						});
						return
					}(0, Re.i_)(z), delete Qe.lang, At(x, z), x.isAuthenticated || x.history.replace({
						search: de().stringify(Qe)
					})
				}, At = async (x, z) => {
					if (x.isAuthenticated) try {
						await x.setUserCommPreferences({
							"language-locale": z
						}, {
							hideErrorAlert: !0
						}), Z.Z.remove(Re.th), x.history.replace({
							search: de().stringify(Qe)
						})
					} catch (q) {
						Z.Z.set(Re.th, !0), console.error(q)
					} else Z.Z.set(Re.th, !0)
				}, Rt = x => {
					const z = (0, Ie.PR)(x);
					return {
						isAuthenticated: !!(z && z.id),
						languagePreference: (0, Re.Kd)() || (0, S.r)(x)
					}
				}, Pt = {
					setUserCommPreferences: ye.V_
				};
			var Nt = (0, $e.withRouter)((0, it.connect)(Rt, Pt)(Ot));
			Ot.propTypes = {
				history: nt().object,
				languagePreference: nt().string.isRequired,
				children: nt().node.isRequired,
				isAuthenticated: nt().bool,
				setUserCommPreferences: nt().func.isRequired
			};
			var ht = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				xt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let bt;
			const Dt = ({
				selectorPrefix: x = "c_"
			} = {}) => (bt || (bt = (0, xt.Z)({
				dev: !1,
				selectorPrefix: x
			})), bt);
			var Bt = t("../react/common/out.css"),
				Lt = t("../react/common/components/ModalManager.tsx"),
				Ut = t("../react/app/components/ErrorBoundary.tsx"),
				jt = t("../react/common/actions/notificationsActions.ts");
			const St = (t.g.bootstrap || {}).data || {};
			class h extends Te().Component {
				componentDidMount() {
					St.messages && this.dispatchNotificationActions(St.messages)
				}
				dispatchNotificationActions(z) {
					z.forEach(q => {
						const {
							type: se,
							message: Ee,
							persist: Ae
						} = q;
						["success", "info", "warn", "error"].includes(se) && this.props.notifyAdd(se, (0, rt.ZP)(Ee), {
							persist: !!Ae
						})
					})
				}
				render() {
					return null
				}
			}
			var me = (0, $e.withRouter)((0, it.connect)(null, {
				notifyAdd: jt.add
			})(h));
			h.propTypes = {
				notifyAdd: nt().func.isRequired
			};
			var X = t("../react/app/redux/index.ts");

			function ee() {
				var x;
				const z = (0, X.p4)(Ie.PR),
					q = (z == null || (x = z.email) === null || x === void 0 ? void 0 : x.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					se = (0, We.Yc)();
				(0, ke.useEffect)(() => {
					se({
						userType: q
					})
				}, [q, se])
			}
			var fe = t("../react/common/selectors/entitlementsSelectors.ts"),
				ve = t("../react/common/selectors/accountSelectors.ts");
			const be = ["accountId", "is_ent"];

			function Be() {
				const x = (0, We.f7)(),
					z = (0, $e.useHistory)(),
					q = (0, N.uW)(z.location.pathname),
					se = (0, We.Yc)(),
					Ee = (0, We.O$)(),
					Ae = (0, X.p4)(fe.u1),
					Pe = !Ae.isRequesting && !!Ae.data,
					je = (0, X.p4)(fe.p1),
					ct = (0, X.p4)(ve.Xu),
					Ze = (0, X.p4)(ve.uF),
					Vt = !ct.isRequesting && !!ct.data;
				(0, ke.useEffect)(() => {
					if (q && Vt && Ze && Pe && q === Ze.account.id) {
						var Tt, kt, gt;
						se({
							accountId: Ze.account.id,
							is_ent: je,
							is_free_account: !je && !(Ze == null || (Tt = Ze.account.meta) === null || Tt === void 0 ? void 0 : Tt.has_business_zones) && !(Ze == null || (kt = Ze.account.meta) === null || kt === void 0 ? void 0 : kt.has_pro_zones) && !(Ze == null || (gt = Ze.account.meta) === null || gt === void 0 ? void 0 : gt.has_enterprise_zones)
						})
					} else(!q || q in x && x.accountId !== q) && Ee(be)
				}, [Vt, Ze, se, Ee, Pe, je, q, x])
			}
			var He = t("../react/common/selectors/zoneSelectors.ts");

			function tt() {
				const x = (0, X.p4)(He.nA),
					z = (0, We.Yc)();
				(0, ke.useEffect)(() => {
					var q;
					z({
						zone_id: x == null ? void 0 : x.id,
						zone_plan: x == null || (q = x.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [x, z])
			}
			const Xe = () => (ee(), Be(), tt(), null);
			var qe = t("../react/app/components/Persistence/index.tsx"),
				st = t("../node_modules/@cloudflare/elements/es/index.js"),
				pt = t("../react/app/components/LoadingSuspense.tsx");
			const ot = Te().lazy(() => Promise.all([t.e(16691), t.e(9616), t.e(12174), t.e(1091), t.e(42290), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var Gt = () => Te().createElement(pt.Z, null, Te().createElement(ot, null));
			const Wt = () => (ke.useEffect(() => O, []), null);
			var en = t("../../../../node_modules/moment/moment.js"),
				Ht = t.n(en);
			const tn = x => {
					switch (x) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return x.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return x.toLowerCase();
						default:
							return "en"
					}
				},
				nn = () => {
					const x = (0, X.p4)(S.r);
					(0, ke.useEffect)(() => {
						const z = tn(x);
						z !== Ht().locale() && Ht().locale(z), document.documentElement.lang = x
					}, [x])
				},
				rn = () => {
					(0, ke.useEffect)(() => {
						async function x() {
							var z, q, se, Ee;
							let Ae;
							if (((z = window) === null || z === void 0 || (q = z.build) === null || q === void 0 ? void 0 : q.isPreviewDeploy) && ((se = window) === null || se === void 0 || (Ee = se.build) === null || Ee === void 0 ? void 0 : Ee.branch) !== "staging" && (Ae = "cookie"), !!Ae) try {
								const Pe = document.head.querySelector("link[rel=icon]");
								Pe && (Pe.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${Ae}.ico`)).default)
							} catch {}
						}
						x()
					}, [])
				};
			var on = t("../react/common/constants/constants.ts");
			const an = () => {
					var x;
					const z = (0, $e.useLocation)(),
						[q, se] = (0, ke.useState)(((x = window) === null || x === void 0 ? void 0 : x.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, ke.useEffect)(() => {
						const Ee = de().parse(z.search);
						if (Ee.pt && Z.Z.set(on.sJ, Ee.pt), Ee == null ? void 0 : Ee.devPanel) {
							var Ae, Pe;
							(Ae = window) === null || Ae === void 0 || (Pe = Ae.localStorage) === null || Pe === void 0 || Pe.setItem("gates_devtools_ui_gates_controller_enabled", "true"), se(!0)
						}
					}, [z.search]), {
						devPanelEnabled: q
					}
				},
				sn = ({
					id: x,
					customDataLayer: z = [],
					dataLayerName: q = "dataLayer"
				}) => {
					const se = `<iframe src="https://www.googletagmanager.com/ns.html?id=${x}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						Ee = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${q}', '${x}')`,
						Ae = `
    window.${q} = window.${q} || [];
    window.${q}.push(${JSON.stringify(z)})
  `;
					return {
						iframe: se,
						script: Ee,
						dataLayerHTML: Ae
					}
				},
				cn = x => {
					const z = document.createElement("script");
					return z.innerHTML = x, z.async = !0, z
				},
				ln = x => {
					const z = document.createElement("noscript");
					return z.innerHTML = x, z
				},
				Zt = x => {
					const z = document.createElement("script");
					return z.innerHTML = x, z
				},
				Dn = ({
					dataLayer: x,
					dataLayerName: z
				}) => {
					if (window[z]) return window[z].push(x);
					const q = `
      window.${z} = window.${z} || [];
      window.${z}.push(${JSON.stringify(x)})`,
						se = Zt(q);
					document.head.insertBefore(se, document.head.childNodes[0])
				},
				un = ({
					containerId: x,
					customDataLayer: z,
					gtmFeatureFlag: q = !0
				}) => {
					(0, ke.useEffect)(() => {
						(() => {
							if (!q) return null;
							const {
								iframe: Ee,
								script: Ae,
								dataLayerHTML: Pe
							} = sn({
								id: x,
								customDataLayer: z
							});
							document.head.insertBefore(Zt(Pe), document.head.childNodes[0]), document.head.insertBefore(cn(Ae), document.head.childNodes[0]), document.body.insertBefore(ln(Ee), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const dn = ({
				isDev: x,
				gtmFeatureFlag: z
			}) => {
				(0, ke.useEffect)(() => {
					(() => {
						if (!z) return null;
						let se;
						x ? se = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : se = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const Ee = document.createElement("script");
						Ee.async = !0, Ee.src = se, document.head.insertBefore(Ee, document.head.childNodes[0])
					})()
				}, [])
			};
			var pn = t("../react/utils/useDomainConnectRedirect.ts");
			const gn = "GTM-NDGPDFZ",
				mn = Te().lazy(() => Promise.all([t.e(16691), t.e(9616), t.e(12174), t.e(1091), t.e(42290), t.e(51436), t.e(34744), t.e(54844), t.e(80778), t.e(70618), t.e(88723), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(83276), t.e(39278), t.e(91262), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				fn = Te().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(80778), t.e(17387), t.e(2868), t.e(88145), t.e(91262), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var vn = ({
					userIsAuthed: x
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
					}), Te().createElement(ke.Suspense, {
						fallback: Te().createElement(Wt, null)
					}, Te().createElement($e.Switch, null, !x && !0 && Te().createElement($e.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, Te().createElement(fn, null)), Te().createElement($e.Route, {
						render: () => Te().createElement(st.ZC, {
							minHeight: "100vh"
						}, Te().createElement(mn, null))
					})), z && Te().createElement(Gt, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				_n = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, rt.ZP)("common.validation.email")).required((0, rt.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, rt.ZP)("common.validation.required"))
			};
			(0, _n.Yd)(Qt).forEach(x => {
				zt.kM(zt.Z_, x, Qt[x])
			});
			var En = t("../react/common/utils/startViewTransition.ts");
			const Xt = Te().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function yn() {
				const [x, z] = (0, ke.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, ke.useEffect)(() => {
					const q = window.matchMedia("(prefers-color-scheme: dark)"),
						se = Ee => {
							z(Ee.matches ? "dark" : "light")
						};
					return q.addEventListener("change", se), () => {
						q.removeEventListener("change", se)
					}
				}, []), x
			}
			const hn = () => {
					const x = (0, Ge.$8)(),
						[z, q] = (0, ke.useState)(x ? Xt : Te().Fragment),
						se = yn(),
						[Ee, Ae] = (0, ke.useState)((0, g.Yc)());
					(0, ke.useEffect)(() => {
						(0, g.fF)(() => Ae((0, g.Yc)()))
					}, []);
					const Pe = je => {
						Ae(je), (0, En.o)(() => {
							(0, g.C8)(je)
						}), document.cookie = `dark-mode=${je};Path=/;Max-Age=31536000`, je === "dark" || je === "on" || je === "system" && se === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, ke.useEffect)(() => {
						q(x ? Xt : Te().Fragment)
					}, [x]), (0, ke.useEffect)(() => {
						const je = () => Pe(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", je), () => {
							window.removeEventListener("storage", je)
						}
					}, []), Te().createElement(ke.Suspense, {
						fallback: null
					}, Te().createElement(it.Provider, {
						store: (0, f.bh)()
					}, Te().createElement($e.Router, {
						history: re
					}, Te().createElement(z, null, Te().createElement(ht.Z, {
						renderer: Dt()
					}, Te().createElement(Nt, null, Te().createElement(Ut.S, {
						sentryTag: "Root"
					}, Te().createElement(_t.J$, {
						value: {
							fetcher: je => fetch(je).then(ct => ct.json())
						}
					}, Te().createElement(Xe, null), Te().createElement(me, null), Te().createElement(qe.Z_, {
						onDarkModeChangeCb: Pe
					}, Te().createElement(Ve.ZP, null, Te().createElement(vn, {
						userIsAuthed: x
					}))), Te().createElement(Lt.ZP, null), Te().createElement(Et.F0, null)))))))))
				},
				bn = () => {
					(0, lt.render)(Te().createElement(hn, null), document.getElementById("react-app"))
				};
			var Ct = t("../utils/initSparrow.ts"),
				$t = t("../utils/zaraz.ts");
			const Cn = () => {
					const x = (0, Ie.PR)((0, f.bh)().getState());
					Tn(), (0, Ct.Ug)(), (0, $t.bM)(), (x == null ? void 0 : x.id) && ue().setUserId(x == null ? void 0 : x.id), (0, Ct.yV)(), !(0, Ct.Wi)() && (0, Ct.IM)(), x ? (0, $t.yn)(x) : (0, $t.Ro)()
				},
				Tn = () => {
					var x, z;
					(x = window) === null || x === void 0 || (z = x.OneTrust) === null || z === void 0 || z.OnConsentChanged(() => {
						const q = (0, Ie.PR)((0, f.bh)().getState());
						(0, Ct.Wi)() ? (ue().setEnabled(!0), (q == null ? void 0 : q.id) ? (ue().setUserId(q.id), (0, $t.yn)(q)) : (0, $t.Ro)(), (0, Ct.yV)()) : (ue().setEnabled(!1), (0, Ct.IM)())
					})
				};

			function wn(x) {
				for (var z = 1; z < arguments.length; z++) {
					var q = arguments[z] != null ? Object(arguments[z]) : {},
						se = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(q).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(q, Ee).enumerable
					})), se.forEach(function(Ee) {
						In(x, Ee, q[Ee])
					})
				}
				return x
			}

			function In(x, z, q) {
				return z = On(z), z in x ? Object.defineProperty(x, z, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[z] = q, x
			}

			function On(x) {
				var z = An(x, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function An(x, z) {
				if (typeof x != "object" || x === null) return x;
				var q = x[Symbol.toPrimitive];
				if (q !== void 0) {
					var se = q.call(x, z || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(x)
			}
			const Pn = "init",
				Jt = (x, z) => {
					o.$e(function(q) {
						q.setTag(Pn, z), o.Tb(x)
					}), P(x)
				},
				Kt = async (x, z) => {
					try {
						return await x(), !0
					} catch (q) {
						return Jt(q, z), !1
					}
				};
			(async () => {
				try {
					var x, z, q;
					t.g.build = wn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "142e8adf8668baf4eabdf66ba8deed32ee9f1ee1",
						dashVersion: "34181666",
						env: "production",
						builtAt: 1750865982395,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, ne.p)()
					}), Fe();
					const se = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => I(re),
						tag: "hashScroll"
					}, {
						fn: L.Z,
						tag: "styles"
					}, {
						fn: Le,
						tag: "mfePreviewData"
					}];
					for (const ct of se)
						if (!await Kt(ct.fn, ct.tag)) return;
					let Ee;
					if (!await Kt(async () => {
							Ee = await ze()
						}, "bootstrap")) return;
					const Ae = (0, f.bh)(),
						Pe = ((x = Ee) === null || x === void 0 ? void 0 : x.data) || {};
					Ae.dispatch((0, i.mW)("user", Pe == null ? void 0 : Pe.user));
					const je = (z = Ee) === null || z === void 0 || (q = z.data) === null || q === void 0 ? void 0 : q.user;
					return t.g.bootstrap = Ee, je && je.id && Ke(je.id), !await Kt(J, "gates") || !await Kt(Cn, "tracking") ? void 0 : bn()
				} catch (se) {
					Jt(se, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				l = t("../react/common/selectors/userSelectors.ts"),
				u = t("../react/common/selectors/zoneSelectors.ts"),
				_ = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/common/utils/isGuards.ts"),
				c = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				m = t.n(c);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(f) {
					for (var d = 1; d < arguments.length; d++) {
						var p = arguments[d];
						for (var T in p) Object.prototype.hasOwnProperty.call(p, T) && (f[T] = p[T])
					}
					return f
				}, n.apply(this, arguments)
			}
			const o = f => {
				function d(p) {
					const T = (0, a.UM)(),
						I = (0, c.useHistory)(),
						E = (0, c.useLocation)(),
						g = (0, c.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						b = (0, a.p4)(l.PR) || null,
						v = (0, a.p4)(u.nA) || null,
						w = (0, a.p4)(_.uF),
						M = w ? w.account : null;
					if (!g) return null;
					const {
						accountId: O,
						app: P,
						tab: L
					} = g.params, C = g.params.zoneName && ((0, s.v5)(g.params.zoneName) || g.params.zoneName.indexOf(".") > 0) ? g.params.zoneName : void 0;
					return r().createElement(f, n({
						dispatch: T,
						history: I,
						location: E,
						match: g,
						user: b,
						membership: O ? w : null,
						account: O ? M : null,
						accountId: O || null,
						zone: C ? v : null,
						zoneName: C || null,
						app: C ? P : null,
						tab: C ? L : null
					}, p))
				}
				return d.displayName = `withEntities(${i(f)})`, d
			};

			function i(f) {
				return f.displayName || f.name || "Component"
			}
			y.Z = o
		},
		"../react/app/components/AccountHome/tracking.ts": function(F, y, t) {
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
					return O
				},
				QV: function() {
					return b
				},
				Yt: function() {
					return E
				},
				bA: function() {
					return g
				},
				fu: function() {
					return C
				},
				gX: function() {
					return p
				},
				hh: function() {
					return L
				},
				o1: function() {
					return w
				},
				tw: function() {
					return T
				},
				xD: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/url.ts");
			const l = "projects table click",
				u = "click create application",
				_ = "account home dev plat - product card click",
				s = "account home dev plat - empty state CTA click",
				c = "account home dev plat - view all projects click",
				m = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				o = "account home zero trust - analytics link click",
				i = "account home zero trust - product card click",
				f = "account home zero trust - plan pill click",
				d = "account home zero trust - plan fallback link click",
				p = {
					SPARROW_PROJECTS_TABLE_CLICK: l,
					SPARROW_CREATE_PROJECT_CLICK: u,
					SPARROW_PRODUCT_CARD_CLICK: _,
					SPARROW_EMPTY_STATE_CTA_CLICK: s,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: c,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: m,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: o,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: i,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: f,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: d
				},
				T = A => {
					r().sendEvent(l, {
						component: A
					})
				},
				I = A => {
					r().sendEvent(l, {
						component: "menu",
						subcomponent: A
					})
				},
				E = () => {
					r().sendEvent(u, {
						category: "Projects Table"
					})
				},
				g = ({
					category: A,
					product: S
				}) => {
					r().sendEvent(_, {
						category: A,
						product: S
					})
				},
				b = () => {
					r().sendEvent(s)
				},
				v = () => {
					r().sendEvent(c)
				},
				w = A => {
					r().sendEvent(n, {
						category: A
					})
				},
				M = ({
					category: A,
					href: S
				}) => {
					r().sendEvent(m, {
						category: A,
						href: (0, a.cm)(S)
					})
				},
				O = ({
					category: A,
					href: S
				}) => {
					r().sendEvent(o, {
						category: A,
						href: (0, a.cm)(S)
					})
				},
				P = ({
					category: A,
					product: S,
					href: G
				}) => {
					r().sendEvent(i, {
						category: A,
						product: S,
						href: (0, a.cm)(G)
					})
				},
				L = ({
					plan: A
				}) => {
					r().sendEvent(f, {
						plan: A
					})
				},
				C = () => {
					r().sendEvent(d)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return c
				},
				Bh: function() {
					return _
				},
				CM: function() {
					return m
				},
				MF: function() {
					return r
				},
				TS: function() {
					return i
				},
				WF: function() {
					return u
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return s
				},
				fj: function() {
					return o
				},
				r4: function() {
					return l
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
				l = (0, e.R)(r.RESOLVING_START),
				u = (0, e.R)(r.RESOLVING_COMPLETE),
				_ = (0, e.R)(r.SELECT_ZONE, f => ({
					payload: f
				})),
				s = (0, e.R)(r.SELECT_ACCOUNT, f => ({
					payload: f
				})),
				c = (0, e.R)(r.SELECT_PAGES_PROJECT, f => ({
					payload: f
				})),
				m = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, f => ({
					payload: f
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, f => ({
					accountIds: f
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(r.SELECT_WORKER, f => ({
					payload: f
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BV: function() {
					return e
				},
				Dz: function() {
					return m
				},
				Fj: function() {
					return l
				},
				Kt: function() {
					return _
				},
				O5: function() {
					return u
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
					return s
				}
			});
			const e = "to",
				r = "_gl",
				a = "freeTrial",
				l = "deepLinkQueryParams",
				u = "resolvedDeepLinkQueryParams",
				_ = "add",
				s = "multiSkuProducts",
				c = "/:account/billing/checkout",
				m = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(F, y, t) {
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
				l = t("../react/app/components/DeepLink/utils.ts"),
				u = t("../react/utils/bootstrap.ts"),
				_ = t("../react/app/components/DeepLink/actions.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(s);

			function m(C) {
				for (var A = 1; A < arguments.length; A++) {
					var S = arguments[A] != null ? Object(arguments[A]) : {},
						G = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(S).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(S, ne).enumerable
					})), G.forEach(function(ne) {
						n(C, ne, S[ne])
					})
				}
				return C
			}

			function n(C, A, S) {
				return A = o(A), A in C ? Object.defineProperty(C, A, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[A] = S, C
			}

			function o(C) {
				var A = i(C, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function i(C, A) {
				if (typeof C != "object" || C === null) return C;
				var S = C[Symbol.toPrimitive];
				if (S !== void 0) {
					var G = S.call(C, A || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(C)
			}
			class f {
				constructor(A, S) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", G => {
						this.resolvers.set(G, {
							name: G,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", G => {
						const ne = this.resolvers.get(G);
						ne && (ne.endTime = Date.now(), this.resolvers.set(G, ne))
					}), n(this, "resolverCancel", G => {
						this.resolverDone(G), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", G => {
						const ne = "NO_ACTION",
							ce = {
								actionType: ne,
								startTime: 0
							};
						return {
							start: (le = ne) => {
								const Q = this.resolvers.get(G);
								ce.actionType = le, ce.startTime = Date.now(), Q && Q.userActions.push(ce)
							},
							finish: (le = ne) => {
								ce.actionType = le, ce.endTime = Date.now()
							},
							cancel: (le = ne) => {
								ce.actionType = le, ce.endTime = Date.now(), this.resolverCancel(G)
							}
						}
					}), this.deepLink = A, this.legacyDeepLink = S, this.resolvers = new Map
				}
				track(A) {
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
							G = this.resolvers.size === 0 ? S : Array.from(this.resolvers.values()).reduce((ne, ce) => {
								const le = d(ce.startTime, ce.endTime),
									Q = ce.userActions.reduce((K, j) => {
										const U = d(j.startTime, j.endTime);
										return {
											totalTime: K.totalTime + U,
											actions: K.actions.set(j.actionType, U)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									W = le - Q.totalTime;
								return m({}, ne, {
									totalTime: ne.totalTime + le,
									totalUserActionsTime: ne.totalUserActionsTime + Q.totalTime,
									totalCpuTime: ne.totalCpuTime + W,
									[`${ce.name}ResolverTotalTime`]: le,
									[`${ce.name}ResolverTotalCpuTime`]: W,
									[`${ce.name}ResolverTotalUserActionsTime`]: Q.totalTime
								}, Array.from(Q.actions.keys()).reduce((K, j) => m({}, K, {
									[`${ce.name}Resolver/${j}`]: Q.actions.get(j)
								}), {}))
							}, m({}, S, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						c().sendEvent(A, G)
					} catch (S) {
						console.error(S)
					}
				}
			}

			function d(C = Date.now(), A = Date.now()) {
				return (A - C) / 1e3
			}
			var p = t("../react/app/components/DeepLink/constants.ts"),
				T = t("../react/common/hooks/useCachedState.ts"),
				I = t("../react/common/hooks/usePrevious.ts");

			function E(C) {
				for (var A = 1; A < arguments.length; A++) {
					var S = arguments[A] != null ? Object(arguments[A]) : {},
						G = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(S).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(S, ne).enumerable
					})), G.forEach(function(ne) {
						g(C, ne, S[ne])
					})
				}
				return C
			}

			function g(C, A, S) {
				return A = b(A), A in C ? Object.defineProperty(C, A, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[A] = S, C
			}

			function b(C) {
				var A = v(C, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function v(C, A) {
				if (typeof C != "object" || C === null) return C;
				var S = C[Symbol.toPrimitive];
				if (S !== void 0) {
					var G = S.call(C, A || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(C)
			}
			var M = ({
					children: C
				}) => {
					const A = (0, r.TZ)(),
						S = (0, a.useHistory)(),
						G = (0, I.Z)(S.location.pathname),
						[ne, ce] = (0, e.useState)(!0),
						[le, Q] = (0, T.j)(void 0, {
							key: p.Fj
						}),
						[W, K] = (0, T.j)(void 0, {
							key: p.O5
						}),
						[j, U] = (0, T.j)(void 0, {
							key: p.s$
						}),
						D = (0, u.$8)();
					let B = new URLSearchParams(S.location.search);
					const $ = (0, l.mL)(S.location.pathname, B);
					let te = null,
						re = null;
					if (B.has(p.Tc) && B.delete(p.Tc), B.get(p.BV)) te = B.get(p.BV), S.location.hash && (re = S.location.hash);
					else if (le) {
						const N = new URLSearchParams(le);
						N.get(p.BV) && (te = N.get(p.BV), B = N)
					} else $ && (B.set(p.BV, $), te = $);
					if (te && p._h.test(te)) {
						const N = B.getAll(p.Kt),
							V = JSON.stringify(N);
						N.length && V !== j && U(V), B.has(p.Tc) && B.delete(p.Tc), B.delete(p.Kt)
					}!D && le === void 0 && te && Q(B.toString());
					const ie = async () => {
						try {
							if ((0, l.I3)(te) && D) {
								le && Q(void 0), A.dispatch((0, _.r4)()), ce(!0), te && te !== W && K(te);
								const N = await (0, l.py)(te, ce, A, S, G, new f(te, $ ? `${S.location.pathname}${S.location.search}` : void 0));
								B.delete(p.BV);
								const V = B.toString();
								S.replace(E({}, S.location, {
									pathname: N,
									search: V
								}, re ? {
									hash: re
								} : {})), A.dispatch((0, _.WF)())
							}
						} catch (N) {
							A.dispatch((0, _.WF)()), console.error(N)
						} finally {
							ce(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ie()
					}, [S.location.pathname, S.location.search]), (ne || (0, l.I3)(te)) && D ? null : C
				},
				O = t("../react/app/components/DeepLink/reducer.ts"),
				P = t("../react/app/components/DeepLink/selectors.ts"),
				L = M
		},
		"../react/app/components/DeepLink/reducer.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return l
				},
				r: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const l = null,
				u = r().from({
					lastAction: l,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function _(s = u, c) {
				if (c.type === a.MF.RESOLVING_COMPLETE) return u;
				if (c.type === a.MF.RESOLVING_START) return s.set("isResolving", !0);
				if (s.isResolving) {
					if (c.type === a.MF.RESOLVING_COMPLETE) return s.set("isResolving", !1);
					if (c.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", c.accountIds);
					if (c.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", void 0);
					{
						let m = s;
						try {
							m = s.set("lastAction", c)
						} catch {
							m = s.set("lastAction", {
								type: c.type
							})
						}
						return m
					}
				} else return s
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(F, y, t) {
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
			const e = l => l.deepLink.lastAction,
				r = l => l.deepLink.isResolving,
				a = l => l.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				I3: function() {
					return m
				},
				X1: function() {
					return s
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
				l = t("../react/app/components/DeepLink/constants.ts"),
				u = t("../react/common/validators/index.js"),
				_ = t("../react/common/utils/isGuards.ts");
			const s = p => (0, u.Lb)(p) && (p.split(".").length > 1 || (0, _.v5)(p)),
				c = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				m = p => typeof p == "string" && p.startsWith("/"),
				n = (p, T) => I => new Promise((E, g) => {
					T.start();
					const b = p.subscribe(() => {
						const v = (0, a.yI)(p.getState());
						v === r.E ? (T.cancel(), b(), g("DeepLink: waitForAction out of context.")) : I(v) && (T.finish(v.type), b(), E(v))
					})
				}),
				o = (p, T, I) => (E, g) => new Promise((b, v) => {
					I.start();
					const w = T.location.pathname;
					E = new URL(E, window.location.href).pathname, w !== E && (I.cancel(), v(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${E}", but on "${w}". You need to redirect to "${E}", and unblockRouter in your Resolver, before you use this function.`));
					const M = p.subscribe(() => {
						const O = (0, a.yI)(p.getState()),
							P = T.location.pathname,
							C = new URLSearchParams(T.location.search).get(l.BV);
						(P !== E || !!C) && (I.cancel(), M(), v(`DeepLink: waitForPageAction user navigated away from "${E}" to "${P}${C?T.location.search:""}"`)), O === r.E ? (I.cancel(), M(), v("DeepLink: waitForPageAction out of context.")) : g(O) && (I.finish(O.type), M(), b(O))
					})
				});

			function i(p) {
				const T = [],
					I = p.split("?")[0].split("/");
				for (let E of I) E.length !== 0 && (E.startsWith(":") ? T.push({
					value: E.substring(1),
					type: "dynamic"
				}) : T.push({
					value: E,
					type: "static"
				}));
				return T
			}
			async function f(p, T, I, E, g, b) {
				b.start();
				const v = i(p),
					M = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					O = {};
				let P = "";
				for (const [L, C] of v.entries())
					if (C.type === "static") P = [P, C.value].join("/");
					else if (C.type === "dynamic" && c.is(C.value) && C.value in M) {
					b.resolverStart(C.value);
					const A = await M[C.value]({
						deepLink: p,
						blockRouter: () => T(!0),
						unblockRouter: () => T(!1),
						routerHistory: E,
						resolvedValues: O,
						store: I,
						referringRoute: g,
						uri: {
							currentPartIdx: L,
							parts: v
						},
						waitForAction: n(I, b.createUserActionTracker(C.value)),
						waitForPageAction: o(I, E, b.createUserActionTracker(C.value))
					});
					b.resolverDone(C.value), P = [P, A].join("/"), O[C.value] = A
				} else throw b.cancel(), new Error(`DeepLink: Resolver with name '${C.value}' is not supported.`);
				return b.done(), P
			}

			function d(p, T) {
				const I = ":account",
					E = ":zone",
					g = T.get("zone");
				if (g) return T.delete("zone"), `/${I}/${E}/${g}`;
				const b = T.get("account");
				if (b) return T.delete("account"), `/${I}/${b}`;
				if (p === "/overview") return `/${I}/${E}`;
				const v = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const w of v) {
					const M = w.length;
					if (p.startsWith(w) && (p.length === M || p[M] === "/")) return `/${I}/${E}${p}`
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
		"../react/app/components/ErrorBoundary.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				l = t("../react/app/components/SomethingWrong.jsx"),
				u = t("../utils/sentry/lastSentEventId.ts"),
				_ = t("../react/utils/zaraz.ts"),
				s = t("../react/utils/url.ts"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				m = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(o),
				f = t("../react/common/components/Page.tsx"),
				d = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function p() {
				return (0, e.useEffect)(() => {
					i().sendEvent("new page available refresh cta")
				}, []), r().createElement(f.Z, {
					type: "narrow"
				}, r().createElement(c.ZC, {
					textAlign: "center"
				}, r().createElement(c.H1, {
					fontSize: 5,
					fontWeight: 400
				}, r().createElement(n.Trans, {
					id: "error.new_page_version_available.title"
				})), r().createElement(n.Trans, {
					id: "error.new_page_version_available.description"
				}), r().createElement(c.ZC, null, r().createElement(c.Ei, {
					height: 116,
					src: d,
					"aria-hidden": !0
				})), r().createElement(m.zx, {
					mt: 3,
					type: "primary",
					iconType: "refresh",
					onClick: () => window.location.reload()
				}, r().createElement(n.Trans, {
					id: "common.refresh"
				}))))
			}
			const T = ({
				sentryTag: I,
				children: E,
				fallbackComponent: g
			}) => r().createElement(a.SV, {
				beforeCapture: b => {
					_.tg === null || _.tg === void 0 || _.tg.track("page-error", {
						page: (0, s.Fl)(window.location.pathname)
					})
				},
				onError: b => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(b)
				},
				fallback: ({
					error: b,
					eventId: v
				}) => {
					var w;
					if (g) return g;
					const M = u.e.getEventId() || v;
					return (b == null || (w = b.message) === null || w === void 0 ? void 0 : w.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(p, null)) : r().createElement(l.Z, {
						type: "page",
						error: b,
						eventId: M,
						sentryTag: I
					})
				}
			}, E)
		},
		"../react/app/components/Footer.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return U
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(s),
				m = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				o = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/moment/moment.js"),
				f = t.n(i);
			const d = () => {
					const D = f()().format("YYYY"),
						B = $ => {
							c().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: $
							})
						};
					return r().createElement(p, {
						marginTop: "auto"
					}, r().createElement(T, null, r().createElement(I, null, r().createElement(E, null, "\xA9 ", D, " Cloudflare, Inc."), r().createElement(E, null, r().createElement(g, null, r().createElement(b, {
						showOnDeskTop: !1
					}, r().createElement(v, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => B("Support")
					}, r().createElement(o.cC, {
						id: "common.support"
					}))), r().createElement(b, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => B("Privacy Policy")
					}, r().createElement(o.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(b, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => B("Terms of Use")
					}, r().createElement(o.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(b, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => B("Cookie Preferences")
					}, r().createElement(o.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(b, null, r().createElement(v, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => B("Trademark")
					}, r().createElement(o.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(g, null, r().createElement(b, null, r().createElement(v, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => B("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(o.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				p = (0, u.createComponent)(({
					theme: D,
					marginTop: B
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: B
				})),
				T = (0, u.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				I = (0, u.createComponent)(({
					theme: D
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${D.space[3]}px`
					}
				})),
				E = (0, u.createComponent)(({
					theme: D
				}) => ({
					width: "100%",
					color: D.colors.white,
					fontSize: D.fontSizes[1],
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
				g = (0, u.createComponent)(({
					theme: D
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: D.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				b = (0, u.createComponent)(({
					showOnDeskTop: D = !0,
					theme: B
				}) => ({
					color: B.colors.white,
					fontSize: B.fontSizes[1],
					height: "20px",
					display: D ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: B.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: B.space[3],
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
				v = (0, u.createStyledComponent)(({
					theme: D
				}) => ({
					textDecoration: "none",
					color: D.colors.white,
					"&:hover": {
						color: D.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var w = d,
				M = t("../react/pages/welcome/routes.ts"),
				O = t("../react/utils/cookiePreferences.ts"),
				P = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				C = () => {
					const [D, B] = (0, e.useState)(!1), $ = (0, O.wV)(), te = () => {
						B(!0)
					}, re = () => {
						B(!1)
					}, ie = $ && $ === "US" ? (0, o.ZP)("footer.cpra_cta.privacy_choices") : (0, o.ZP)("footer.cpra_cta.cookie_preferences"), N = {
						background: "transparent",
						borderRadius: "none",
						color: D ? (0, _.Yc)() ? "#ee730a" : "#003681" : (0, _.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: D ? "underline" : "none",
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
					return r().createElement(l.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: N,
						onMouseEnter: te,
						onMouseLeave: re
					}, r().createElement(l.Ei, {
						height: 15,
						src: P,
						mr: 2,
						alt: ie
					}), ie)
				};

			function A() {
				return A = Object.assign ? Object.assign.bind() : function(D) {
					for (var B = 1; B < arguments.length; B++) {
						var $ = arguments[B];
						for (var te in $) Object.prototype.hasOwnProperty.call($, te) && (D[te] = $[te])
					}
					return D
				}, A.apply(this, arguments)
			}

			function S(D, B) {
				if (D == null) return {};
				var $ = G(D, B),
					te, re;
				if (Object.getOwnPropertySymbols) {
					var ie = Object.getOwnPropertySymbols(D);
					for (re = 0; re < ie.length; re++) te = ie[re], !(B.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(D, te) || ($[te] = D[te]))
				}
				return $
			}

			function G(D, B) {
				if (D == null) return {};
				var $ = {},
					te = Object.keys(D),
					re, ie;
				for (ie = 0; ie < te.length; ie++) re = te[ie], !(B.indexOf(re) >= 0) && ($[re] = D[re]);
				return $
			}
			const ne = (0, u.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,_.Yc)()?_.rS.colors.orange[6]:_.rS.colors.blue[4]}`
					}
				}), l.A),
				ce = (0, u.createStyledComponent)(({
					theme: D
				}) => ({
					color: D.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, m.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: D.colors.gray[4]
					}
				}), l.A),
				le = D => {
					let {
						onClick: B
					} = D, $ = S(D, ["onClick"]);
					return React.createElement(ne, A({
						onClick: te => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: $.href
							}), B && B(te)
						}
					}, $))
				},
				Q = D => {
					let {
						children: B,
						target: $,
						rel: te
					} = D, re = S(D, ["children", "target", "rel"]);
					return r().createElement(ce, A({
						target: $ || "_blank",
						rel: te || "noopener noreferrer"
					}, re), B)
				},
				W = (0, u.createStyledComponent)(({
					theme: D
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, m.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: D.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: D.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), l.Ul),
				K = (0, u.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, m.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), l.ZC);
			var U = () => {
				const D = [M.d.root.pattern].some($ => (0, a.matchPath)(location.pathname, {
					path: $
				}));
				if ((0, n.PP)()) return r().createElement(w, null);
				if (D) return null;
				const B = new Date().getFullYear();
				return r().createElement(l.$_, {
					height: (0, m.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, r().createElement(K, null, r().createElement(W, null, r().createElement(l.Li, null, r().createElement(Q, {
					href: "https://support.cloudflare.com"
				}, (0, o.ZP)("common.support"))), r().createElement(l.Li, null, r().createElement(Q, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(l.Dr, {
					textTransform: "capitalize"
				}, (0, o.ZP)("footer.system_status")))), r().createElement(l.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, o.ZP)("footer.careers"))), r().createElement(l.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, o.ZP)("footer.tos_reduced"))), r().createElement(l.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, o.ZP)("footer.security_issues"))), r().createElement(l.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, o.ZP)("footer.privacy_policy"))), r().createElement(l.Li, null, r().createElement(C, null)), r().createElement(l.Li, null, r().createElement(l.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", B, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				l = t("../react/utils/translator.tsx");
			const u = _ => r().createElement(a.Z, _, (0, l.ZP)("error.forbidden"));
			y.Z = u
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return T
				},
				Z: function() {
					return ie
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../node_modules/@cloudflare/component-button/es/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				m = t.n(c),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				o = t("../react/common/components/AccessControl/index.js"),
				i = t("../react/common/components/ButtonWithDropdown.tsx"),
				f = t("../react/common/components/Dropdown/index.tsx"),
				d = t("../react/utils/translator.tsx"),
				p = t("../react/common/hooks/useGate.ts");
			const T = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				I = () => {
					const N = (0, p.Z)("super-add-button-copy-change"),
						V = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: T.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: T.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: T.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: T.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: T.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: T.ACCOUNT_MEMBERS,
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
								trackingEvent: T.EXISTING_DOMAIN,
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
								trackingEvent: T.EXISTING_DOMAIN,
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
								trackingEvent: T.EXISTING_DOMAIN,
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
								trackingEvent: T.EXISTING_DOMAIN,
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
								trackingEvent: T.EXISTING_DOMAIN,
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
								trackingEvent: T.EXISTING_DOMAIN,
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
								trackingEvent: T.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: T.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: T.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: T.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: T.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: T.ACCOUNT_MEMBERS,
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
					trackingEvent: T.EXISTING_DOMAIN,
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
					trackingEvent: T.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: T.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: T.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: T.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: T.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: T.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var g = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function b(N) {
				for (var V = 1; V < arguments.length; V++) {
					var k = arguments[V] != null ? Object(arguments[V]) : {},
						H = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(k).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(k, ae).enumerable
					})), H.forEach(function(ae) {
						v(N, ae, k[ae])
					})
				}
				return N
			}

			function v(N, V, k) {
				return V = w(V), V in N ? Object.defineProperty(N, V, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[V] = k, N
			}

			function w(N) {
				var V = M(N, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function M(N, V) {
				if (typeof N != "object" || N === null) return N;
				var k = N[Symbol.toPrimitive];
				if (k !== void 0) {
					var H = k.call(N, V || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(N)
			}

			function O() {
				return O = Object.assign ? Object.assign.bind() : function(N) {
					for (var V = 1; V < arguments.length; V++) {
						var k = arguments[V];
						for (var H in k) Object.prototype.hasOwnProperty.call(k, H) && (N[H] = k[H])
					}
					return N
				}, O.apply(this, arguments)
			}

			function P(N, V) {
				if (N == null) return {};
				var k = L(N, V),
					H, ae;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(N);
					for (ae = 0; ae < pe.length; ae++) H = pe[ae], !(V.indexOf(H) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, H) || (k[H] = N[H]))
				}
				return k
			}

			function L(N, V) {
				if (N == null) return {};
				var k = {},
					H = Object.keys(N),
					ae, pe;
				for (pe = 0; pe < H.length; pe++) ae = H[pe], !(V.indexOf(ae) >= 0) && (k[ae] = N[ae]);
				return k
			}
			const C = N => {
					let {
						title: V,
						trackingEvent: k,
						icon: H,
						url: ae,
						description: pe,
						disabled: ue
					} = N, _e = P(N, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(A, O({
						to: !ue && ae || "#",
						"aria-disabled": ue,
						onClick: () => {
							m().sendEvent(k, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, _e), r().createElement(l.ZC, {
						display: "flex"
					}, r().createElement(a.J, {
						type: H,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(l.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(l.ZC, {
						fontSize: 3
					}, r().createElement(d.cC, V)), r().createElement(l.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(d.cC, pe)))))
				},
				A = (0, n.createStyledComponent)(({
					theme: N
				}) => {
					const V = {
						cursor: "pointer",
						backgroundColor: (0, _.Yc)() ? N.colors.gray[8] : N.colors.gray[9],
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
						':focus-within:not([aria-disabled="true"])': b({}, V, {
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
				}, g.Link);
			var S = C;

			function G() {
				return G = Object.assign ? Object.assign.bind() : function(N) {
					for (var V = 1; V < arguments.length; V++) {
						var k = arguments[V];
						for (var H in k) Object.prototype.hasOwnProperty.call(k, H) && (N[H] = k[H])
					}
					return N
				}, G.apply(this, arguments)
			}

			function ne(N) {
				for (var V = 1; V < arguments.length; V++) {
					var k = arguments[V] != null ? Object(arguments[V]) : {},
						H = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(k).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(k, ae).enumerable
					})), H.forEach(function(ae) {
						ce(N, ae, k[ae])
					})
				}
				return N
			}

			function ce(N, V, k) {
				return V = le(V), V in N ? Object.defineProperty(N, V, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[V] = k, N
			}

			function le(N) {
				var V = Q(N, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function Q(N, V) {
				if (typeof N != "object" || N === null) return N;
				var k = N[Symbol.toPrimitive];
				if (k !== void 0) {
					var H = k.call(N, V || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(N)
			}

			function W(N, V) {
				if (N == null) return {};
				var k = K(N, V),
					H, ae;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(N);
					for (ae = 0; ae < pe.length; ae++) H = pe[ae], !(V.indexOf(H) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, H) || (k[H] = N[H]))
				}
				return k
			}

			function K(N, V) {
				if (N == null) return {};
				var k = {},
					H = Object.keys(N),
					ae, pe;
				for (pe = 0; pe < H.length; pe++) ae = H[pe], !(V.indexOf(ae) >= 0) && (k[ae] = N[ae]);
				return k
			}
			const j = "GLOBAL_ADD_DROPDOWN",
				U = (0, n.createStyledComponent)(({
					theme: N
				}) => ({
					"background-color": N.colors.blue[5]
				}), u.zx),
				D = ({
					disableProducts: N
				}) => {
					const V = I();
					return (0, e.useEffect)(() => (m().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						m().sendEvent("close add product dropdown", {
							category: "add product dropdown"
						})
					}), []), r().createElement(i.v2, {
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
						const H = k || {},
							{
								disableOn: ae,
								permissionCheck: pe
							} = H,
							ue = W(H, ["disableOn", "permissionCheck"]),
							_e = ae && N[ae],
							oe = ne({}, ue, {
								disabled: _e
							});
						return pe ? r().createElement(o.Z, {
							key: k.title.id,
							edit: pe
						}, ({
							isEditable: we
						}) => we && r().createElement(S, oe)) : r().createElement(S, G({
							key: k.url
						}, oe))
					}))
				},
				B = ({
					disableProducts: N,
					topNavType: V
				}) => {
					const k = () => (0, s.tq)() || V === "icon-only" ? r().createElement(l.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(U, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : V === "text-icon" || V === "icon-only-with-add-button" ? r().createElement(u.zx, {
						type: "primary",
						mr: V === "text-icon" ? 2 : 3
					}, r().createElement(r().Fragment, null, r().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(d.cC, {
						id: "common.add"
					}))) : r().createElement(u.zx, {
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
						trigger: V === "baseline" ? r().createElement(te, null, r().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, s.tq)() && r().createElement(r().Fragment, null, r().createElement(d.cC, {
							id: "common.add"
						}), " ", r().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : k(),
						menu: r().createElement(D, {
							disableProducts: N
						})
					}))
				},
				$ = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				te = (0, n.createStyledComponent)(({
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
					color: (0, _.Yc)() ? N.colors.gray[1] : N.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, _.Yc)() ? N.colors.gray[8] : N.colors.gray[9]
					}
				}), l.zx);
			var re = B,
				ie = re
		},
		"../react/app/components/LoadingSuspense.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				l = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../react/utils/translator.tsx"),
				_ = t("../react/app/components/ErrorStatus.tsx"),
				s = t("../react/common/components/EmptyPage.jsx"),
				c = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const m = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(m))
				}, [])
			}

			function o(I) {
				useEventListener(m, () => {
					window.setTimeout(I, 0)
				}, {
					target: window
				})
			}

			function i(...I) {
				const [E, g] = I;
				React.useLayoutEffect(E, g), o(E)
			}

			function f(I) {
				const [E, g] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const b = window.setTimeout(() => g(!0), I);
					return () => window.clearTimeout(b)
				}, []), E
			}
			const d = ({
				loadingTimeout: I = 1e3,
				stillLoadingTimeout: E = 9e3
			}) => {
				const g = f(I),
					b = f(E);
				if (n(), !g && !b) return r().createElement(s.Z, null);
				const v = b ? r().createElement(u.cC, {
					id: "common.still_loading"
				}) : g ? r().createElement(u.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(_.Z, {
					size: 5
				}, r().createElement(l.ZC, {
					mr: 3
				}, r().createElement(a.g, {
					size: "2x"
				})), v)
			};
			var T = ({
				children: I
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(d, null)
			}, I)
		},
		"../react/app/components/Persistence/api.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				C8: function() {
					return c
				},
				Mn: function() {
					return i
				},
				Sp: function() {
					return o
				},
				dr: function() {
					return u
				},
				lt: function() {
					return _
				},
				m6: function() {
					return n
				},
				n: function() {
					return m
				},
				yl: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = "/persistence/user",
				l = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (f) {
						console.error(f)
					}
				}, u = async f => {
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
				}, s = async (f, d) => {
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
				}, c = async f => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: f
							})
						})).body
					} catch (d) {
						console.error(d)
					}
				}, m = async f => {
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
				}, i = async (f, d) => {
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
		"../react/app/components/Persistence/hooks.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				y: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/Persistence/index.tsx");
			const l = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Wl: function() {
					return m
				},
				lp: function() {
					return I
				},
				Z_: function() {
					return g
				},
				r7: function() {
					return A
				},
				Tv: function() {
					return K
				},
				yZ: function() {
					return b.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(l),
				_ = t("../react/utils/bootstrap.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				c = t("../react/app/components/Persistence/api.ts");
			const m = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function o(j) {
				for (var U = 1; U < arguments.length; U++) {
					var D = arguments[U] != null ? Object(arguments[U]) : {},
						B = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(D).filter(function($) {
						return Object.getOwnPropertyDescriptor(D, $).enumerable
					})), B.forEach(function($) {
						i(j, $, D[$])
					})
				}
				return j
			}

			function i(j, U, D) {
				return U = f(U), U in j ? Object.defineProperty(j, U, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[U] = D, j
			}

			function f(j) {
				var U = d(j, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function d(j, U) {
				if (typeof j != "object" || j === null) return j;
				var D = j[Symbol.toPrimitive];
				if (D !== void 0) {
					var B = D.call(j, U || "default");
					if (typeof B != "object") return B;
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
				T = o({}, p, {
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
				I = (0, e.createContext)(T),
				E = I.Consumer,
				g = ({
					children: j,
					onDarkModeChangeCb: U
				}) => {
					const [D, B] = (0, e.useState)(p), [$, te] = (0, e.useState)(T.isLoading), [re, ie] = (0, e.useState)(!1), N = (0, _.$8)(), V = (0, a.p4)(ue => (0, s.wH)(ue)), [, k] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						N ? (0, c.yl)().then(ue => {
							if (ue) {
								var _e;
								B(ue), k(ue == null || (_e = ue.flags) === null || _e === void 0 ? void 0 : _e.hasEnabledSecurityNavigation), u().identify({
									hasEnabledSecurityNavigation: ue.flags.hasEnabledSecurityNavigation
								}), U(ue.darkMode)
							}
						}).finally(() => te(!1)) : te(!1)
					}, [N]);
					const H = (ue, _e) => !!D.favorites.find(oe => oe.type === "zone" && oe.name === ue && oe.accountId === _e),
						ae = m - D.favorites.length,
						pe = ue => D.favorites.filter(oe => oe.type === "zone" && oe.accountId === ue).length < m;
					return r().createElement(I.Provider, {
						value: o({}, D, {
							isLoading: $,
							remainingStarSlots: ae,
							isUpdatingFlags: re,
							actions: {
								canAccountStarZone: pe,
								isZoneStarred: H,
								starZone: async (ue, _e) => {
									var oe;
									const we = !H(ue, _e),
										De = pe(_e);
									if (we && !De) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Me = await (0, c.lt)(ue, _e);
									u().sendEvent("click star zone", {
										isStarring: we,
										totalStarredZones: Me.filter(xe => xe.accountId === _e && xe.type === "zone").length,
										totalZones: V == null || (oe = V.paginationData) === null || oe === void 0 ? void 0 : oe.info.total_count
									}), B(o({}, D, {
										favorites: Me
									}))
								},
								toggleSecurityNavigation: async ue => {
									ie(!0), await (0, c.Sp)({
										hasEnabledSecurityNavigation: ue
									}), u().identify({
										hasEnabledSecurityNavigation: ue
									}), ie(!1), k(ue), B(o({}, D, {
										flags: {
											hasEnabledSecurityNavigation: ue
										}
									}))
								},
								setDarkMode: async ue => {
									const _e = await (0, c.C8)(ue);
									B(_e), U(_e.darkMode)
								},
								logRouteVisited: async ue => {
									var _e;
									const oe = await (0, c.n)(ue);
									B((_e = oe) !== null && _e !== void 0 ? _e : o({}, D))
								},
								viewChange: async ue => {
									const _e = await (0, c.m6)(ue);
									B(o({}, D, {
										viewedChanges: _e
									}))
								},
								dismissTask: async (ue, _e) => {
									const oe = await (0, c.Mn)(ue, _e);
									B(o({}, D, {
										dismissedTasks: oe
									}))
								}
							}
						})
					}, j)
				};
			var b = t("../react/app/components/Persistence/hooks.ts"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				w = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function M() {
				return M = Object.assign ? Object.assign.bind() : function(j) {
					for (var U = 1; U < arguments.length; U++) {
						var D = arguments[U];
						for (var B in D) Object.prototype.hasOwnProperty.call(D, B) && (j[B] = D[B])
					}
					return j
				}, M.apply(this, arguments)
			}

			function O(j, U) {
				if (j == null) return {};
				var D = P(j, U),
					B, $;
				if (Object.getOwnPropertySymbols) {
					var te = Object.getOwnPropertySymbols(j);
					for ($ = 0; $ < te.length; $++) B = te[$], !(U.indexOf(B) >= 0) && (!Object.prototype.propertyIsEnumerable.call(j, B) || (D[B] = j[B]))
				}
				return D
			}

			function P(j, U) {
				if (j == null) return {};
				var D = {},
					B = Object.keys(j),
					$, te;
				for (te = 0; te < B.length; te++) $ = B[te], !(U.indexOf($) >= 0) && (D[$] = j[$]);
				return D
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
			var A = j => {
					let {
						isStarred: U,
						size: D = 16
					} = j, B = O(j, ["isStarred", "size"]);
					const $ = L[(0, v.Yc)() ? "dark" : "light"];
					return r().createElement(w.J, M({
						type: U ? "star" : "star-outline",
						color: U ? $.gold : $.gray,
						size: D
					}, B))
				},
				S = t("../node_modules/@cloudflare/elements/es/index.js");

			function G(j) {
				for (var U = 1; U < arguments.length; U++) {
					var D = arguments[U] != null ? Object(arguments[U]) : {},
						B = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(D).filter(function($) {
						return Object.getOwnPropertyDescriptor(D, $).enumerable
					})), B.forEach(function($) {
						ne(j, $, D[$])
					})
				}
				return j
			}

			function ne(j, U, D) {
				return U = ce(U), U in j ? Object.defineProperty(j, U, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[U] = D, j
			}

			function ce(j) {
				var U = le(j, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function le(j, U) {
				if (typeof j != "object" || j === null) return j;
				var D = j[Symbol.toPrimitive];
				if (D !== void 0) {
					var B = D.call(j, U || "default");
					if (typeof B != "object") return B;
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
				onClickFn: D,
				isDisabled: B,
				testId: $,
				buttonText: te,
				size: re = "large",
				variant: ie = "pill"
			}, N) => {
				const [V, k] = (0, e.useState)(!1), H = Q[(0, v.Yc)() ? "dark" : "light"][U && !j ? "active" : "default"], ae = G({}, re === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, re === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, re === "small" && {
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
					innerRef: N,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ae.paddingRight,
					gap: 1,
					pl: ae.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: pe[ie],
					border: "1px solid",
					cursor: j || B ? "default" : "pointer",
					backgroundColor: V ? H.bgHover : H.bg,
					color: H.text,
					borderColor: H.border,
					onClick: D,
					opacity: B ? .5 : 1,
					disabled: B,
					fontSize: ae.fontSize,
					height: ae.height,
					"data-testid": $
				}, r().createElement(A, {
					isStarred: j ? !1 : U,
					size: ae.starIconSize
				}), te)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				iY: function() {
					return E
				},
				us: function() {
					return A
				},
				wB: function() {
					return g
				},
				gw: function() {
					return ce
				},
				dL: function() {
					return M
				},
				IU: function() {
					return w
				},
				Wq: function() {
					return G
				},
				fO: function() {
					return S
				},
				zJ: function() {
					return C
				},
				o_: function() {
					return L
				},
				jq: function() {
					return le
				},
				hv: function() {
					return v
				},
				$n: function() {
					return b
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				l = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/utils/zoneLevelAccess.ts"),
				_ = t("../react/pages/stream/selectors.ts"),
				s = t("../react/pages/home/domain-registration/selectors.ts"),
				c = t("../react/pages/images/selectors.ts");
			const m = "r2_migrator_waitlist",
				n = "r2migrator",
				o = "r2",
				i = "r2_storage_migrator",
				f = "r2_storage_migrator",
				d = Q => getAccountEntitlement(Q, "r2.enabled"),
				p = Q => Boolean((0, a.Le)(Q, i, m)),
				T = Q => Boolean(getAccountFlipperFlagsChanges(Q, f, n)),
				I = Q => !!(0, u.b)(Q),
				E = Q => I(Q) ? (0, e.hT)(Q) : !0,
				g = (Q, W, K, j = "read") => {
					const U = (0, a.nA)(Q);
					return I(Q) ? (0, e.WL)(Q, (0, e.W9)(K, e.ZZ[j]), (0, e.j)(U == null ? void 0 : U.id)) : (0, l.Yj)(Q)(W)[j]
				},
				b = (Q, W, K, j = "read") => {
					const U = (0, a.nA)(Q),
						D = e.zs.includes(K);
					return I(Q) ? (0, e.WL)(Q, D ? K : (0, e.my)(K, e.ZZ[j === "edit" ? "update" : j]), (0, e.j)(U == null ? void 0 : U.id)) : (0, l.Yj)(Q)(W)[j === "update" ? "edit" : j]
				},
				v = Q => !!(0, _._Q)(Q),
				w = Q => (0, c.pT)(Q),
				M = Q => (0, c.pT)(Q) && (0, c.GH)(Q),
				O = Q => sourcingKitEnabledSelector(Q),
				P = Q => !!r2EnabledSelector(Q),
				L = Q => p(Q),
				C = Q => (0, r.$f)(Q, "rulesets.magic_transit_allowed"),
				A = Q => (0, r.$f)(Q, "flowtrackd.magic_custom_config_allowed"),
				S = Q => (0, r.$f)(Q, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				G = Q => (0, l.Le)(Q, "ddos_protection", "l4_rulesets"),
				ne = Q => hasAccountEntitlements(Q, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				ce = Q => (0, s.HO)(Q),
				le = Q => !(0, r.yD)(Q) && !!b(Q, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(a),
				u = t("../../../../node_modules/prop-types/index.js"),
				_ = t.n(u),
				s = t("webpack/sharing/consume/default/react-redux/react-redux"),
				c = t.n(s),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(m),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				d = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				p = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				T = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				I = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = t.n(I),
				g = t("../react/common/actions/membershipActions.ts"),
				b = t("../react/utils/url.ts"),
				v = t("../react/app/components/Footer.tsx");

			function w(W) {
				for (var K = 1; K < arguments.length; K++) {
					var j = arguments[K] != null ? Object(arguments[K]) : {},
						U = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(j).filter(function(D) {
						return Object.getOwnPropertyDescriptor(j, D).enumerable
					})), U.forEach(function(D) {
						M(W, D, j[D])
					})
				}
				return W
			}

			function M(W, K, j) {
				return K = O(K), K in W ? Object.defineProperty(W, K, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[K] = j, W
			}

			function O(W) {
				var K = P(W, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function P(W, K) {
				if (typeof W != "object" || W === null) return W;
				var j = W[Symbol.toPrimitive];
				if (j !== void 0) {
					var U = j.call(W, K || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(W)
			}
			const L = (0, o.createComponent)(({
					type: W
				}) => ({
					height: W !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				C = (0, o.createComponent)(({
					theme: W,
					margin: K,
					size: j = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: W.colors.gray[3],
					height: K ? "auto" : "100%",
					padding: K ? 0 : W.space[j > 1 ? j - 2 : 0],
					margin: K,
					justifyContent: "center",
					alignItems: "center"
				})),
				A = (0, o.createComponent)(() => ({
					textAlign: "left"
				})),
				S = (0, o.createComponent)(() => ({
					textAlign: "right"
				})),
				G = (0, o.createComponent)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[6]
				})),
				ne = (0, o.createComponent)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[4]
				})),
				ce = (0, o.createComponent)(({
					theme: W
				}) => ({
					fontSize: W.fontSizes[3]
				})),
				le = (0, o.createComponent)(({
					theme: W
				}) => ({
					width: "100%",
					height: 125,
					marginTop: W.space[4],
					padding: W.space[2]
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
							var j, U, D, B;
							const $ = ((j = window) === null || j === void 0 || (U = j.bootstrap) === null || U === void 0 || (D = U.data) === null || D === void 0 || (B = D.user) === null || B === void 0 ? void 0 : B.id) || "Unknown",
								te = this.props.eventId || f.eW(),
								re = {
									name: $,
									email: `${$}@userid.com`,
									comments: this.state.value,
									eventId: te,
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
								body: JSON.stringify(re)
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
					}), M(this, "renderContent", j => r().createElement(m.I18n, null, U => r().createElement(L, {
						type: j
					}, r().createElement(C, null, r().createElement(A, null, r().createElement(G, null, U.t("error.internal_issues")), r().createElement(ne, null, U.t("error.help_us")), r().createElement(le, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: D => this.handleTextareaChange(D),
						disabled: this.state.submitted,
						placeholder: U.t("error.give_feedback")
					}), r().createElement(S, null, !this.state.submitted && r().createElement(i.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, U.t("common.submit")), this.state.submitted && r().createElement(ce, null, U.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: K,
						sentryTag: j,
						membershipsList: U
					} = this.props;
					console.error(`SomethingWrong: ${K}`);
					let D = "";
					const B = (0, b.e1)();
					if (B) {
						var $;
						const re = await U({
								parameters: {
									status: "accepted"
								}
							}),
							ie = re == null || ($ = re.find(N => N.id === B)) === null || $ === void 0 ? void 0 : $.roles;
						ie && ie.length && (D = ie.join(", "))
					}
					const te = `ErrorBoundary - ${K}`;
					d.Tb(te, {
						tags: {
							errorBoundary: j,
							normalizedPath: (0, b.Fl)(window.location.pathname),
							roles: D.length ? D : void 0
						}
					}), E().sendEvent("something wrong", {
						error: K,
						roles: D.length ? D : void 0
					})
				}
				render() {
					const {
						type: K
					} = this.props;
					return K === "fullscreen" ? r().createElement("div", null, r().createElement(p.h4, null, r().createElement(a.Link, {
						to: "/"
					}, r().createElement(T.TR, null))), this.renderContent(K), r().createElement(v.Z, null)) : this.renderContent(K)
				}
			}
			Q.propTypes = {
				type: _().oneOf(["fullscreen", "page"]),
				error: _().oneOfType([_().string, _().object]),
				eventId: _().string,
				sentryTag: _().string,
				membershipsList: _().func
			}, y.Z = (0, s.connect)(() => ({}), {
				membershipsList: g.YT
			})(Q)
		},
		"../react/app/providers/storeContainer.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				bh: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(r),
				l = t("../../../../node_modules/redux-thunk/es/index.js"),
				u = t("../../../../node_modules/redux-persist/es/index.js"),
				_ = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				s = t("../react/app/rootReducer.js"),
				c = t("../react/app/redux/normalizer.js"),
				m = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				o = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				f = t("../react/common/sagas/index.js"),
				d = t("../react/app/redux/processActionMiddleware.js"),
				p = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				T = t("../../../../node_modules/is-promise/index.js"),
				I = t.n(T);

			function E(G) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var ce = arguments[ne] != null ? Object(arguments[ne]) : {},
						le = Object.keys(ce);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(ce).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(ce, Q).enumerable
					})), le.forEach(function(Q) {
						g(G, Q, ce[Q])
					})
				}
				return G
			}

			function g(G, ne, ce) {
				return ne = b(ne), ne in G ? Object.defineProperty(G, ne, {
					value: ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[ne] = ce, G
			}

			function b(G) {
				var ne = v(G, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function v(G, ne) {
				if (typeof G != "object" || G === null) return G;
				var ce = G[Symbol.toPrimitive];
				if (ce !== void 0) {
					var le = ce.call(G, ne || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(G)
			}
			const w = {
					key: "cf-redux-store",
					storage: _.Z,
					whitelist: ["accountAccess", "invite"]
				},
				M = (0, i.ZP)(),
				P = [({
					dispatch: G
				}) => ne => ce => I()(ce) ? ce.then(le => G(le)) : ne(ce), M, l.Z, d.Z, c.qR],
				L = G => (0, u.Wq)(w, E({}, s.Z, G));

			function C() {
				const G = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ce = e.compose((0, e.applyMiddleware)(...P), m.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					le = {},
					Q = (0, e.createStore)(L(o.Z.getReducers()), le, ce);
				M.run(f.Z), (0, u.p5)(Q);
				const K = (t.g.bootstrap || {}).data || {};
				return Q.dispatch((0, p.mW)("user", K.user)), Q
			}
			let A;
			o.Z.setChangeListener(G => {
				var ne;
				A && ((ne = A) === null || ne === void 0 ? void 0 : ne.replaceReducer) && (A.replaceReducer(L(G)), (0, u.p5)(A))
			});

			function S() {
				return A || (A = C()), A
			}
		},
		"../react/app/redux/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				TZ: function() {
					return a
				},
				UM: function() {
					return u
				},
				ZS: function() {
					return l
				},
				p4: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const a = () => (0, e.useStore)(),
				l = () => a().getState(),
				u = () => (0, e.useDispatch)(),
				_ = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				$J: function() {
					return i
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return m
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

			function l(d) {
				for (var p = 1; p < arguments.length; p++) {
					var T = arguments[p] != null ? Object(arguments[p]) : {},
						I = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(T).filter(function(E) {
						return Object.getOwnPropertyDescriptor(T, E).enumerable
					})), I.forEach(function(E) {
						u(d, E, T[E])
					})
				}
				return d
			}

			function u(d, p, T) {
				return p = _(p), p in d ? Object.defineProperty(d, p, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = T, d
			}

			function _(d) {
				var p = s(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function s(d, p) {
				if (typeof d != "object" || d === null) return d;
				var T = d[Symbol.toPrimitive];
				if (T !== void 0) {
					var I = T.call(d, p || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const c = l({}, r),
				m = (d, p, T, I = {}) => {
					const E = d === "delete" ? "del" : d.toLowerCase();
					return T && E !== "del" && (I.body = T), c[E](p, I)
				},
				n = (d, p) => (d.meta.params = p, d),
				o = (d, p, T, I, {
					body: E = {}
				}) => {
					const {
						result: g,
						messages: b,
						result_info: v
					} = E, w = Object.values(p);
					if (d.meta.method === "delete") {
						const M = w[w.length - 1];
						d.meta.id = typeof M == "object" ? M.id : M
					}
					return d.payload = g, b && (d.meta.messages = b), w.length && (d.meta.params = p), v && (d.meta.paginationData = {
						info: v,
						actionParameters: w,
						options: T[0],
						insertionOffset: 0
					}), d
				},
				i = (d, p, T, I, E) => (d.payload = E && E.body && E.body.errors, d.meta.messages = E && E.body && E.body.messages, d.meta.params = p, d.apiError = E, d);

			function f(d, p, T, I) {
				const E = (0, e.RM)(d, p, T, I).apiFetch(m).on("start", n).on("success", o).on("error", i),
					g = E.mock;
				return E.mock = b => (g((...v) => {
					const w = b(...v);
					return w && typeof w == "object" && "result" in w ? w : {
						result: w
					}
				}), E), E
			}
		},
		"../react/app/redux/normalizer.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				P1: function() {
					return m
				},
				jQ: function() {
					return s
				},
				qR: function() {
					return n
				},
				uc: function() {
					return c
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				r = t("../react/pages/workers/entityTypes.ts"),
				a = t("../react/pages/email/types.ts"),
				l = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				_ = t.n(u);
			const s = u.static.from([{
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
				c = o => o.entities,
				m = (...o) => (0, l.P1)(s, c, ...o),
				n = (0, l.QB)(s)
		},
		"../react/app/redux/utils.ts": function(F, y, t) {
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
			const r = l => (u, _, s) => (0, e.SC)(u, _, s, {
					hideErrorAlert: !0
				}).catch(l),
				a = l => u => {
					if (u.status === l) return u;
					throw u
				}
		},
		"../react/common/actionTypes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Cm: function() {
					return _
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return s
				},
				Li: function() {
					return m
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
					return l
				},
				lV: function() {
					return u
				},
				s1: function() {
					return c
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				l = "MODAL_CLOSE",
				u = "TOGGLE_ON",
				_ = "TOGGLE_OFF",
				s = "SET_ACTIVE",
				c = "CLEAR_ACTIVE",
				m = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/activeActions.ts": function(F, y, t) {
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
			const r = (l, u) => ({
					type: e.HI,
					activeKey: l,
					activeValue: u
				}),
				a = l => ({
					type: e.s1,
					activeKey: l
				})
		},
		"../react/common/actions/membershipActions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return i
				},
				YT: function() {
					return m
				},
				ct: function() {
					return s
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
						T = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(p).filter(function(I) {
						return Object.getOwnPropertyDescriptor(p, I).enumerable
					})), T.forEach(function(I) {
						l(f, I, p[I])
					})
				}
				return f
			}

			function l(f, d, p) {
				return d = u(d), d in f ? Object.defineProperty(f, d, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[d] = p, f
			}

			function u(f) {
				var d = _(f, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function _(f, d) {
				if (typeof f != "object" || f === null) return f;
				var p = f[Symbol.toPrimitive];
				if (p !== void 0) {
					var T = p.call(f, d || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(f)
			}
			const s = f => {
					const d = f.payload.map(p => a({}, p, {
						membershipId: p.id,
						id: p.account.id
					}));
					return a({}, f, {
						payload: d
					})
				},
				c = f => {
					const d = s(f);
					return Array.isArray(d.payload) ? a({}, f, {
						payload: d.payload[0]
					}) : a({}, f, {
						payload: null
					})
				},
				m = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", s),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (...f) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: f
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", c)
		},
		"../react/common/actions/modalActions.ts": function(F, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				closeModal: function() {
					return l
				},
				openModal: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function a(u, _, s = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: u,
						props: _
					},
					options: s
				}
			}

			function l(u) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: u
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(F, y, t) {
			"use strict";
			t.r(y), t.d(y, {
				add: function() {
					return u
				},
				error: function() {
					return m
				},
				info: function() {
					return s
				},
				success: function() {
					return _
				},
				warn: function() {
					return c
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
			let l = 0;

			function u(n, o, i = {}) {
				return i = i || {},
					function(f) {
						let d = l++,
							p = {
								id: d,
								type: n,
								message: o,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									f(a(d)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						f(r(p))
					}
			}

			function _(n, o) {
				return u("success", n, o)
			}

			function s(n, o) {
				return u("info", n, o)
			}

			function c(n, o) {
				return u("warning", n, o)
			}

			function m(n, o) {
				return u("error", n, o)
			}
		},
		"../react/common/actions/userActions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BT: function() {
					return s
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
					return b
				},
				mp: function() {
					return T
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

			function a(v) {
				for (var w = 1; w < arguments.length; w++) {
					var M = arguments[w] != null ? Object(arguments[w]) : {},
						O = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), O.forEach(function(P) {
						l(v, P, M[P])
					})
				}
				return v
			}

			function l(v, w, M) {
				return w = u(w), w in v ? Object.defineProperty(v, w, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[w] = M, v
			}

			function u(v) {
				var w = _(v, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function _(v, w) {
				if (typeof v != "object" || v === null) return v;
				var M = v[Symbol.toPrimitive];
				if (M !== void 0) {
					var O = M.call(v, w || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(v)
			}
			const s = (0, e.C)("user").get`/user`,
				c = (0, e.C)("user").patch`/user`,
				m = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				f = (0, e.C)("user").delete`/user/two_factor_authentication`,
				d = (0, e.C)("user").put`/user/email`;

			function p(...v) {
				return d(...v)
			}
			const T = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(v => a({}, v, {
					body: a({}, v.body, {
						result: {}
					})
				}))),
				E = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				g = (0, e.C)("userDetails").get`/user/details`,
				b = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				we: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				_ = t.n(u),
				s = t("../react/utils/url.ts"),
				c = t("../react/pages/home/members/utils.ts");

			function m(E) {
				for (var g = 1; g < arguments.length; g++) {
					var b = arguments[g] != null ? Object(arguments[g]) : {},
						v = Object.keys(b);
					typeof Object.getOwnPropertySymbols == "function" && v.push.apply(v, Object.getOwnPropertySymbols(b).filter(function(w) {
						return Object.getOwnPropertyDescriptor(b, w).enumerable
					})), v.forEach(function(w) {
						n(E, w, b[w])
					})
				}
				return E
			}

			function n(E, g, b) {
				return g = o(g), g in E ? Object.defineProperty(E, g, {
					value: b,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[g] = b, E
			}

			function o(E) {
				var g = i(E, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function i(E, g) {
				if (typeof E != "object" || E === null) return E;
				var b = E[Symbol.toPrimitive];
				if (b !== void 0) {
					var v = b.call(E, g || "default");
					if (typeof v != "object") return v;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(E)
			}
			const f = l().createContext(void 0),
				d = 60 * 1e3,
				p = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]);

			function T({
				children: E,
				userID: g,
				isUserInDSR: b
			}) {
				const [v, w] = (0, a.useState)({
					policies: null,
					isLoading: !0,
					isLoadingSkippedByUserID: !1,
					error: null,
					lastFetchedAt: null
				}), M = (0, a.useCallback)(async (S = !1) => {
					var G;
					const ne = !!g,
						ce = p.has((G = g) !== null && G !== void 0 ? G : "");
					if (!(ne && !ce && (S || !v.lastFetchedAt || Date.now() - v.lastFetchedAt > d))) {
						w(K => m({}, K, {
							isLoadingSkippedByUserID: ce
						}));
						return
					}
					w(K => m({}, K, {
						isLoading: !0
					}));
					try {
						var Q, W;
						const K = await fetch("/api/v4/user/iam/policies");
						if (!K.ok) throw new Error(`Failed to fetch authz policies: ${K.status}`);
						const j = (Q = await K.json()) === null || Q === void 0 || (W = Q.result) === null || W === void 0 ? void 0 : W.policies;
						if (!j || !(0, e.isArray)(j) || j.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(j)}`);
						w({
							policies: j,
							isLoading: !1,
							isLoadingSkippedByUserID: !1,
							error: null,
							lastFetchedAt: Date.now()
						})
					} catch (K) {
						const j = K instanceof Error ? K.message : JSON.stringify(K);
						w(U => m({}, U, {
							isLoading: !1,
							error: j
						}))
					}
				}, [g, v.lastFetchedAt]);
				(0, a.useEffect)(() => {
					M()
				}, [M]);
				const O = (0, u.useHistory)(),
					P = (0, s.uW)(O.location.pathname),
					[L, C] = (0, a.useState)(void 0);
				(0, a.useEffect)(() => {
					(async () => {
						const G = 10,
							ne = 100;
						for (let ce = 0; ce <= G; ce++) {
							const le = (0, c.vq)(P);
							if (!le || le.length === 0) {
								if (ce === G) throw new Error("failed loading authz policy permission groups");
								const Q = ne * Math.pow(2, ce);
								await new Promise(W => {
									setTimeout(W, Q)
								})
							} else {
								le.sort((Q, W) => Q.id.localeCompare(W.id)), C(le);
								break
							}
						}
					})()
				}, [P]);
				const A = {
					isUserInDSR: b,
					contextAccountTag: P,
					allPermissionGroups: L,
					policiesState: v,
					refreshPolicies: () => M(!0)
				};
				return l().createElement(f.Provider, {
					value: A
				}, E)
			}
			const I = () => {
				const E = useContext(f);
				if (!E) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
				return E.refreshPolicies
			}
		},
		"../react/common/components/AccessCheck/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				E1: function() {
					return r
				},
				L8: function() {
					return n
				},
				W9: function() {
					return m
				},
				ZZ: function() {
					return _
				},
				j: function() {
					return o
				},
				jX: function() {
					return s
				},
				my: function() {
					return c
				},
				u1: function() {
					return e
				},
				zs: function() {
					return u
				}
			});
			const e = "com.cloudflare.api.account",
				r = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				l = "com.cloudflare.api.account.zone.",
				u = ["com.cloudflare.api.app.manage"];
			let _ = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const s = (i, f) => `${r}${i?i+".":""}${f}`,
				c = (i, f) => `${l}${i?i+".":""}${f}`,
				m = (i, f) => `${a}${i}.${f}`,
				n = (i = "") => `${r}${i}`,
				o = (i = "") => `${l}${i}`
		},
		"../react/common/components/AccessCheck/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				zs: function() {
					return s.zs
				},
				hT: function() {
					return u.hT
				},
				WL: function() {
					return u.WL
				},
				kd: function() {
					return u.kd
				},
				ZP: function() {
					return l
				},
				jX: function() {
					return s.jX
				},
				L8: function() {
					return s.L8
				},
				W9: function() {
					return s.W9
				},
				my: function() {
					return s.my
				},
				j: function() {
					return s.j
				},
				ZZ: function() {
					return s.ZZ
				},
				xk: function() {
					return e.Z
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts"),
				l = ({
					legacyPermission: c,
					canAccess: m,
					children: n,
					render: o
				}) => {
					const i = !!(0, r.P)();
					let f;
					typeof m == "boolean" && m !== void 0 && i ? f = {
						read: m,
						list: m,
						create: m,
						update: m,
						delete: m,
						sign: m
					} : f = (0, e.Z)(c);
					const d = o || n;
					return d ? d(f) : null
				},
				u = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				_ = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				s = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				l = t("../react/common/selectors/accountSelectors.ts"),
				u = t("../react/pages/zone-versioning/selectors.ts");

			function _(s) {
				const {
					read: c,
					edit: m
				} = (0, a.p4)(l.Yj)(s);
				let n = m;
				if (s != "zone_versioning") {
					const i = (0, a.p4)(u.G);
					(i == null ? void 0 : i.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: c,
					list: c,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [c, n])
			}
			y.Z = _
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				WL: function() {
					return f
				},
				hT: function() {
					return T
				},
				kd: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../../../../node_modules/lodash-es/isString.js"),
				a = t("../react/pages/home/members/utils.ts"),
				l = t("../react/common/components/AccessCheck/constants.ts"),
				u = t("../react/pages/zone-versioning/selectors.ts"),
				_ = t("../react/common/selectors/accountSelectors.ts");
			const s = {
					allow: "allow",
					deny: "deny"
				},
				c = 0,
				m = 1,
				n = 2,
				o = 3;

			function i(O, P, L, C) {
				let A = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					S;
				for (S in A) A[S] = f(O, `${P}.${S}`, L, C);
				return A
			}

			function f(O, P, L, C) {
				var A;
				if (d(P) && !p(P)) {
					const le = (0, u.G)(O);
					if (le == null ? void 0 : le.isLocked) return !1
				}
				const S = (A = (0, _.D0)(O)) === null || A === void 0 ? void 0 : A.id,
					G = S ? [`com.cloudflare.api.account.${S}`] : void 0,
					ne = (0, a.vq)(S);
				return !!I(O, ne, P, L, C || G)
			}

			function d(O) {
				return ![l.ZZ.read, l.ZZ.list].some(P => O.endsWith(P))
			}

			function p(O) {
				return O.includes("zone.versioning")
			}

			function T(O) {
				const P = (0, _.Ko)(O);
				let L = !1;
				return P == null || P.forEach(C => {
					C.access === s.allow && C.permission_groups.forEach(A => {
						var S;
						(A == null || (S = A.meta) === null || S === void 0 ? void 0 : S.scopes) === l.u1 && (L = !0)
					})
				}), L
			}

			function I(O, P, L, C, A) {
				const S = (0, _.Ko)(O),
					G = {};
				S == null || S.forEach(Q => {
					var W;
					const K = Q.access;
					let j = c;
					if (L && Q.permission_groups.forEach(U => {
							var D, B;
							P == null || (D = P.find($ => $.id === U.id)) === null || D === void 0 || (B = D.permissions) === null || B === void 0 || B.forEach($ => {
								j = Math.max(j, g($, L))
							})
						}), j !== c && !!C) {
						let U = c;
						Q.resource_groups.forEach(D => {
							U = Math.max(U, v(D.scope, C, A))
						}), j = U === c ? U : j + U
					}(G == null || (W = G[K]) === null || W === void 0 ? void 0 : W[j]) || (0, e.Z)(G, [K, j], []), G[K][j].push(Q)
				});
				const ne = G[s.allow] && Object.keys(G[s.allow]).map(Q => parseInt(Q)),
					ce = G[s.deny] && Object.keys(G[s.deny]).map(Q => parseInt(Q)),
					le = Math.max.apply(Math, ne);
				return le === c || Math.max.apply(Math, ce) >= le ? null : G[s.allow][le]
			}

			function E(O, P, L, C, A) {
				const S = {};
				O == null || O.forEach(le => {
					var Q;
					const W = le.access;
					let K = c;
					if (L && le.roles.forEach(j => {
							var U, D;
							P == null || (U = P.find(B => B.id === j.id)) === null || U === void 0 || (D = U.permissions) === null || D === void 0 || D.forEach(B => {
								K = Math.max(K, g(B, L))
							})
						}), K !== c && !!C) {
						let j = c;
						le.scopes.forEach(U => {
							j = Math.max(j, v(U, C, A))
						}), K = j === c ? j : K + j
					}(S == null || (Q = S[W]) === null || Q === void 0 ? void 0 : Q[K]) || set(S, [W, K], []), S[W][K].push(le)
				});
				const G = S[s.allow] && Object.keys(S[s.allow]).map(le => parseInt(le)),
					ne = S[s.deny] && Object.keys(S[s.deny]).map(le => parseInt(le)),
					ce = Math.max.apply(Math, G);
				return ce === c || Math.max.apply(Math, ne) >= ce ? null : S[s.allow][ce]
			}

			function g(O, P) {
				if (O.key === P || b(O.key, P)) return o;
				for (const L of (O == null ? void 0 : O.implies) || []) {
					let C = g(L, P);
					if (C > c) return C
				}
				return c
			}

			function b(O, P) {
				const L = P == null ? void 0 : P.lastIndexOf(".");
				return L === -1 ? !1 : (P == null ? void 0 : P.substring(0, L)) + ".*" === O
			}

			function v(O, P, L) {
				var C;
				let A = c;
				if (O == null || (C = O.objects) === null || C === void 0 || C.forEach(S => {
						A = Math.max(A, M(S, P))
					}), A === c) return A;
				if (O.key !== "*") switch (!0) {
					case w(O.key, L) > c:
					case (!(L == null ? void 0 : L.length) && A === o):
						break;
					case (A === m && w(O.key, [P]) > c):
						A = w(O.key, [P]);
						break;
					default:
						return c
				}
				for (const S of O.subset_of || [])
					if (w(S.key, L) === c) return c;
				return A
			}

			function w(O, P = []) {
				for (const L of P || []) {
					if (O === L) return o;
					if (b(O, L)) return n
				}
				return c
			}

			function M(O, P) {
				const L = (0, r.Z)(O) ? O : O.key;
				return L === P ? o : L === "*" || O === "*" ? m : b(L, P) ? n : c
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				a: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const l = _ => {
					if (typeof _ != "string") throw new Error("invalid Param Type provided");
					const s = _.slice(1).split(":");
					if (s.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: s[0],
						value: s[1]
					}
				},
				u = (_, s) => {
					const {
						resourceId: c,
						accountId: m,
						legacyPermission: n
					} = s;
					let {
						read: o,
						edit: i
					} = s;
					const f = {};
					n && (i = `#${n}:edit`, o = `#${n}:read`);
					const d = c || m;
					if (o) {
						const p = Array.isArray(o) ? o : [o];
						f.isReadable = p.some(T => {
							const I = l(T);
							return (0, a.DT)(_, d, E => !!(E[I.key] && E[I.key][I.value]))
						})
					}
					if (i) {
						const p = Array.isArray(i) ? i : [i];
						f.isEditable = p.some(T => {
							const I = l(T);
							return (0, a.DT)(_, d, E => !!(E[I.key] && E[I.key][I.value]))
						})
					}
					return f
				};
			y.Z = (0, e.connect)(u)
		},
		"../react/common/components/AccessControl/index.js": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				l = t("../react/common/components/AccessControl/SAAConnect.js");

			function u(o) {
				for (var i = 1; i < arguments.length; i++) {
					var f = arguments[i] != null ? Object(arguments[i]) : {},
						d = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(f).filter(function(p) {
						return Object.getOwnPropertyDescriptor(f, p).enumerable
					})), d.forEach(function(p) {
						_(o, p, f[p])
					})
				}
				return o
			}

			function _(o, i, f) {
				return i = s(i), i in o ? Object.defineProperty(o, i, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[i] = f, o
			}

			function s(o) {
				var i = c(o, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function c(o, i) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var d = f.call(o, i || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(o)
			}

			function m(o) {
				const f = ["isReadable", "isEditable"].reduce((d, p) => o.hasOwnProperty(p) ? u({}, d, {
					[p]: o[p]
				}) : d, {});
				return o.children(f)
			}
			m.propTypes = {
				resourceType: r().string,
				resourceId: r().string,
				read: r().oneOfType([r().string, r().array]),
				edit: r().oneOfType([r().string, r().array]),
				accountId: r().string,
				isReadable: r().bool,
				isEditable: r().bool,
				children: r().func
			};
			const n = (0, a.Z)((0, l.Z)(m));
			n.displayName = "AccessControl", y.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				PP: function() {
					return o
				},
				RJ: function() {
					return s
				},
				tz: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const _ = () => c.test(window.location.pathname) || a.E.has(l.Qq),
				s = () => a.E.get(l.Qq),
				c = /^\/login\/apple(\/)?/,
				n = [c, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				o = () => {
					let f = !1;
					n.forEach(p => {
						if (p.test(window.location.pathname)) {
							f = !0;
							return
						}
					});
					const d = _() && f;
					return d && (0, u.C8)(u.LF.OFF), d
				},
				i = f => {
					f && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let d = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					f && (d = d + `&jwt=${f}`), window.location.href = d
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				oG: function() {
					return d
				},
				sN: function() {
					return c.sN
				},
				v2: function() {
					return c.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				_ = t.n(u),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				c = t("../react/common/components/Dropdown/index.tsx"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(p) {
					for (var T = 1; T < arguments.length; T++) {
						var I = arguments[T];
						for (var E in I) Object.prototype.hasOwnProperty.call(I, E) && (p[E] = I[E])
					}
					return p
				}, n.apply(this, arguments)
			}

			function o(p, T) {
				if (p == null) return {};
				var I = i(p, T),
					E, g;
				if (Object.getOwnPropertySymbols) {
					var b = Object.getOwnPropertySymbols(p);
					for (g = 0; g < b.length; g++) E = b[g], !(T.indexOf(E) >= 0) && (!Object.prototype.propertyIsEnumerable.call(p, E) || (I[E] = p[E]))
				}
				return I
			}

			function i(p, T) {
				if (p == null) return {};
				var I = {},
					E = Object.keys(p),
					g, b;
				for (b = 0; b < E.length; b++) g = E[b], !(T.indexOf(g) >= 0) && (I[g] = p[g]);
				return I
			}
			const f = (0, s.createStyledComponent)(({
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
					color: (0, m.Yc)() ? p.colors.text : void 0
				},
				"& button:hover": {
					color: (0, m.Yc)() ? p.colors.text : void 0
				}
			}));

			function d(p) {
				let {
					menu: T,
					containerProps: I,
					disabled: E,
					disabledDropdown: g = E
				} = p, b = o(p, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: v
				} = (0, u.useI18n)();
				return r().createElement(f, n({}, I, {
					role: "group"
				}), r().createElement(a.zx, n({}, b, {
					disabled: E
				})), r().createElement(c.Lt, {
					trigger: r().createElement(a.zx, {
						type: b.type,
						"aria-haspopup": "menu",
						disabled: g
					}, r().createElement(l.J, {
						type: "caret-down",
						label: v("common.more"),
						size: 12
					})),
					menu: T
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				v: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				u = t("../react/common/hooks/useIntersectionObserver.ts");

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(c) {
					for (var m = 1; m < arguments.length; m++) {
						var n = arguments[m];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (c[o] = n[o])
					}
					return c
				}, _.apply(this, arguments)
			}

			function s(c) {
				const m = (0, e.useRef)(null),
					[n, o] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const f = m.current;
					if (f) {
						const {
							bottom: d
						} = f.getBoundingClientRect();
						d > window.innerHeight && o(!0)
					}
				}, []);
				const i = (0, u.S)(f => {
					for (const d of f) d.intersectionRatio < 1 && o(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const f = m.current;
					if (f && i) return i.observe(f), () => {
						i.unobserve(f)
					}
				}, [i]), r().createElement(a.ZC, _({
					role: "menu",
					innerRef: m,
					position: "absolute",
					right: "0",
					backgroundColor: l.rS.colors.background,
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
				}, c))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				s: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(l);

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(I) {
					for (var E = 1; E < arguments.length; E++) {
						var g = arguments[E];
						for (var b in g) Object.prototype.hasOwnProperty.call(g, b) && (I[b] = g[b])
					}
					return I
				}, _.apply(this, arguments)
			}

			function s(I, E) {
				if (I == null) return {};
				var g = c(I, E),
					b, v;
				if (Object.getOwnPropertySymbols) {
					var w = Object.getOwnPropertySymbols(I);
					for (v = 0; v < w.length; v++) b = w[v], !(E.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(I, b) || (g[b] = I[b]))
				}
				return g
			}

			function c(I, E) {
				if (I == null) return {};
				var g = {},
					b = Object.keys(I),
					v, w;
				for (w = 0; w < b.length; w++) v = b[w], !(E.indexOf(v) >= 0) && (g[v] = I[v]);
				return g
			}

			function m(I) {
				for (var E = 1; E < arguments.length; E++) {
					var g = arguments[E] != null ? Object(arguments[E]) : {},
						b = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(g).filter(function(v) {
						return Object.getOwnPropertyDescriptor(g, v).enumerable
					})), b.forEach(function(v) {
						n(I, v, g[v])
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
				var E = i(I, "string");
				return typeof E == "symbol" ? E : String(E)
			}

			function i(I, E) {
				if (typeof I != "object" || I === null) return I;
				var g = I[Symbol.toPrimitive];
				if (g !== void 0) {
					var b = g.call(I, E || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (E === "string" ? String : Number)(I)
			}
			const f = ({
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
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': m({}, E, {
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
				d = (0, a.createComponent)(f, "a"),
				p = (0, a.createComponent)(f, "button");

			function T(I) {
				let {
					disabled: E = !1
				} = I, g = s(I, ["disabled"]);
				const b = (0, l.useHistory)(),
					v = {
						role: "menuitem"
					};
				if ("href" in g && typeof g.href == "string") return r().createElement(d, _({
					"aria-disabled": E
				}, v, g, {
					href: E ? void 0 : g.href,
					onClick: M => {
						var O;
						if (E) return M.stopPropagation();
						M.preventDefault(), (O = g.onClick) === null || O === void 0 || O.call(g, M), b.push(g.href)
					}
				}));
				var w;
				return r().createElement(p, _({
					type: (w = g.type) !== null && w !== void 0 ? w : "button"
				}, v, g, {
					disabled: E
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				l = t.n(a),
				u = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const _ = ({
				children: s
			}) => r().createElement(u.xu, {
				height: 411
			}, s);
			_.propTypes = {
				children: l().node
			}, y.Z = _
		},
		"../react/common/components/ModalManager.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return d
				},
				dd: function() {
					return i
				},
				vR: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const l = p => p.application.modals;
			var u = t("../react/common/actions/modalActions.ts"),
				_ = t("../../../../node_modules/swr/core/dist/index.mjs"),
				s = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function c() {
				return c = Object.assign ? Object.assign.bind() : function(p) {
					for (var T = 1; T < arguments.length; T++) {
						var I = arguments[T];
						for (var E in I) Object.prototype.hasOwnProperty.call(I, E) && (p[E] = I[E])
					}
					return p
				}, c.apply(this, arguments)
			}
			const m = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: T,
						closeModal: I
					} = this.props;
					return r().createElement(r().Fragment, null, T.map(({
						ModalComponent: E,
						props: g = {},
						id: b
					}) => {
						const v = () => {
							typeof g.onClose == "function" && g.onClose(), I(E)
						};
						return r().createElement(m.Provider, {
							key: b,
							value: {
								closeModal: v
							}
						}, r().createElement(_.J$, {
							value: s.ZP
						}, r().createElement(E, c({}, g, {
							isOpen: !0,
							closeModal: v
						}))))
					}))
				}
			}

			function o() {
				const p = r().useContext(m);
				if (!p) throw new Error("useModalContext must be used within a ModalContext");
				return p
			}

			function i() {
				const p = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...T) {
						return p(u.openModal(...T))
					}, [p]),
					closeModal: (0, e.useCallback)(function(...T) {
						return p(u.closeModal(...T))
					}, [p])
				}
			}
			var d = (0, a.connect)(p => ({
				modals: l(p)
			}), u)(n)
		},
		"../react/common/components/Page.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				Z: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function l(u) {
				return r().createElement(a.T3, u)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return c
				},
				JR: function() {
					return m
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return _
				},
				ZI: function() {
					return u
				},
				if: function() {
					return r
				},
				q6: function() {
					return a
				},
				w_: function() {
					return l
				},
				zl: function() {
					return s
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				a = "date-from",
				l = "date-to",
				u = "from",
				_ = "to",
				s = "all",
				c = {
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
			let m = function(o) {
					return o.ADD_FILTER = "Add filter", o.EDIT_FILTER = "Edit filter", o.REMOVE_FILTER = "Remove filter", o.REMOVE_ALL_FILTERS = "Remove all filters", o.CHANGE_TIME = "Change time window", o.FEED_PAGE_FORWARD = "Activity feed next page", o.FEED_PAGE_BACKWARD = "Activity feed previous page", o.FEED_EXPAND_EVENT = "Activity feed expand event", o.FEED_CLOSE_EVENT = "Activity feed close event", o.FEED_EXPAND_MATCHES = "Activity feed expand matches", o.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", o.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", o.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", o.DOWNLOAD_FEED = "Activity feed download", o
				}({}),
				n = function(o) {
					return o.TIMESERIES = "Timeseries Chart", o.DISTRIBUTION = "Source Distribution Chart", o.TOP_N = "Top N", o.FILTER_BAR = "Filter Bar", o.SCORES_DISTRIBUTIONS = "Scores Distributions", o.INSIGHTS = "Insights", o.RL_HISTOGRAM = "Rate Limit Histogram", o
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Cf: function() {
					return m
				},
				hJ: function() {
					return c
				},
				ys: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), f.forEach(function(d) {
						l(n, d, i[d])
					})
				}
				return n
			}

			function l(n, o, i) {
				return o = u(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function u(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(n, o || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const c = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, a({}, o || {}))
				},
				m = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(F, y, t) {
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
		"../react/common/constants/billing/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Gq: function() {
					return l
				},
				g$: function() {
					return a
				},
				WX: function() {
					return e
				},
				E0: function() {
					return m
				},
				Hw: function() {
					return _
				},
				Ed: function() {
					return u
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return f
				},
				hQ: function() {
					return s
				},
				SP: function() {
					return c
				}
			});
			let e = function(d) {
				return d.page_rules = "page_rules", d.automatic_platform_optimization = "automatic_platform_optimization", d
			}({});
			const r = "page_rules",
				a = "automatic_platform_optimization",
				l = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				u = {
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
				s = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				c = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				m = {
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
				i = t("../react/common/constants/billing/workers.ts");
			const f = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				FP: function() {
					return e
				},
				Nl: function() {
					return u
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
				l = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				u = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(F, y, t) {
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
					return u
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return m
				},
				Y1: function() {
					return s
				},
				p6: function() {
					return c
				},
				q0: function() {
					return l
				},
				rg: function() {
					return T
				},
				sJ: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const l = "healthy",
				u = "degraded",
				_ = "critical",
				s = "unknown",
				c = "not-monitored",
				m = r().from({
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
					f: m.FREE,
					p: m.PRO,
					b: m.BIZ
				},
				i = "marketing-pt",
				f = () => {
					const E = a.Z.get(i);
					if (!!E) return o[E]
				},
				d = ["gov"],
				p = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				T = "banner-notification-interactions",
				I = null
		},
		"../react/common/constants/index.ts": function(F, y, t) {
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
		"../react/common/constants/roles.ts": function(F, y, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(F, y, t) {
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
					return l
				}
			});
			let e = function(u) {
				return u.DELETE = "delete", u.CREATE = "create", u.GET = "get", u.UPDATE = "update", u
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
				a = (u, _, s = !1) => {
					var c;
					return `${_} ${(c=r[u])!==null&&c!==void 0?c:u} ${s?"ruleset":"rule"}${_===e.GET?"s":""}`
				},
				l = () => {
					var u;
					return (u = Object.keys(r).reduce((_, s) => {
						const c = Object.values(e).reduce((m, n) => (m.push(a(s, n)), m.push(a(s, n, !0)), m), []);
						return _.concat(c)
					}, [])) === null || u === void 0 ? void 0 : u.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return _
				},
				F: function() {
					return u
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(a);

			function u() {
				var s;
				const {
					accountId: c
				} = (0, a.useParams)(), m = (0, e.p4)(r.D0);
				if (c === void 0 && !m) throw new Error("Account ID not found in URL params");
				return (s = c) !== null && s !== void 0 ? s : m == null ? void 0 : m.id
			}

			function _() {
				const s = u();
				return (0, e.p4)(c => (0, r.Py)(c, s))
			}
		},
		"../react/common/hooks/useActiveState.ts": function(F, y, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t.n(r),
				l = t("../react/common/selectors/commonSelectors.ts");
			const u = _ => {
				const s = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, l.cZ)(_)), n => {
					s((0, e.I)(_, n))
				}]
			};
			y.Z = u
		},
		"../react/common/hooks/useCachedState.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function l(u, {
				key: _,
				cache: s = a.E,
				ttl: c
			} = {}) {
				var m;
				const n = _ !== void 0 && s.get(_),
					[o, i] = (0, e.useState)((m = n) !== null && m !== void 0 ? m : u);
				return [o, d => {
					i(p => (d instanceof Function && (d = d(p)), _ !== void 0 && s.set(_, d, c), d))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(a) {
				return (0, e.qf)(a)
			}
			y.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				S: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(l, {
				root: u,
				rootMargin: _,
				threshold: s
			} = {}) {
				const c = (0, e.useRef)(null);

				function m() {
					return c.current === null && (c.current = new IntersectionObserver(l, {
						root: u,
						rootMargin: _,
						threshold: s
					})), c.current
				}
				return (0, e.useEffect)(() => (c.current = new IntersectionObserver(l, {
					root: u,
					rootMargin: _,
					threshold: s
				}), () => {
					var n;
					(n = c.current) === null || n === void 0 || n.disconnect()
				}), [l, u, _, s]), m()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(l) {
				const u = (0, e.useRef)(l);
				return (0, e.useEffect)(() => {
					u.current = l
				}, [l]), u.current
			}
			y.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(F, y, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(l) {
				return (0, e.p4)(u => (0, r.rV)(u, l))
			}
			y.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Uh: function() {
					return u
				},
				ez: function() {
					return l
				},
				oV: function() {
					return _
				}
			});

			function e(s, c, m) {
				return c = r(c), c in s ? Object.defineProperty(s, c, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[c] = m, s
			}

			function r(s) {
				var c = a(s, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function a(s, c) {
				if (typeof s != "object" || s === null) return s;
				var m = s[Symbol.toPrimitive];
				if (m !== void 0) {
					var n = m.call(s, c || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(s)
			}
			class l extends Error {
				constructor(c, m) {
					super(m);
					e(this, "eventName", void 0), this.eventName = c, this.name = "SparrowValidationError"
				}
			}
			class u extends l {
				constructor(c) {
					super(c, `Event not allowed: "${c}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class _ extends l {
				constructor(c, m) {
					super(c, `Found invalid properties on event: "${c}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = m
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Au: function() {
					return J
				},
				B: function() {
					return xe
				},
				B3: function() {
					return Fe
				},
				BG: function() {
					return O
				},
				Bp: function() {
					return ft
				},
				CV: function() {
					return ut
				},
				D0: function() {
					return b
				},
				DT: function() {
					return N
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
					return C
				},
				Le: function() {
					return A
				},
				O4: function() {
					return Ke
				},
				Ou: function() {
					return j
				},
				Py: function() {
					return Le
				},
				QI: function() {
					return it
				},
				Qf: function() {
					return w
				},
				RO: function() {
					return De
				},
				T3: function() {
					return at
				},
				T8: function() {
					return M
				},
				UX: function() {
					return B
				},
				VP: function() {
					return $e
				},
				Xo: function() {
					return dt
				},
				Xu: function() {
					return Q
				},
				Yi: function() {
					return nt
				},
				Yj: function() {
					return re
				},
				Zu: function() {
					return te
				},
				bC: function() {
					return H
				},
				f8: function() {
					return ne
				},
				hI: function() {
					return rt
				},
				hN: function() {
					return L
				},
				hX: function() {
					return Me
				},
				iq: function() {
					return Ye
				},
				nE: function() {
					return P
				},
				oD: function() {
					return D
				},
				oI: function() {
					return G
				},
				oJ: function() {
					return Oe
				},
				tM: function() {
					return U
				},
				uF: function() {
					return W
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
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				u = t.n(l),
				_ = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../../../../node_modules/moment/moment.js"),
				c = t.n(s),
				m = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				o = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				f = t("../react/app/components/DeepLink/selectors.ts"),
				d = t("../react/common/constants/roles.ts"),
				p = t("../react/common/utils/hasRole.ts");

			function T(Y) {
				for (var de = 1; de < arguments.length; de++) {
					var ye = arguments[de] != null ? Object(arguments[de]) : {},
						Ie = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && Ie.push.apply(Ie, Object.getOwnPropertySymbols(ye).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(ye, Re).enumerable
					})), Ie.forEach(function(Re) {
						I(Y, Re, ye[Re])
					})
				}
				return Y
			}

			function I(Y, de, ye) {
				return de = E(de), de in Y ? Object.defineProperty(Y, de, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Y[de] = ye, Y
			}

			function E(Y) {
				var de = g(Y, "string");
				return typeof de == "symbol" ? de : String(de)
			}

			function g(Y, de) {
				if (typeof Y != "object" || Y === null) return Y;
				var ye = Y[Symbol.toPrimitive];
				if (ye !== void 0) {
					var Ie = ye.call(Y, de || "default");
					if (typeof Ie != "object") return Ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (de === "string" ? String : Number)(Y)
			}
			const b = Y => {
					const de = W(Y);
					return de == null ? void 0 : de.account
				},
				v = Y => {
					const de = (0, o.PR)(Y);
					if (de) {
						const ye = de.id;
						return Y.accountAccess[ye] || {}
					}
					return {}
				},
				w = Y => Y.accountsDetailed,
				M = (0, n.P1)("accountsDetailed", w),
				O = Y => Y.memberships,
				P = (0, _.P1)((0, n.P1)("memberships", O), f.U, (Y, de) => !!de && !!Y ? Y.filter(ye => de.includes(ye.id)) : Y),
				L = Y => Y.accountFlags && Y.accountFlags.data,
				C = Y => Y.accountFlags,
				A = (Y, de, ye) => {
					const Ie = L(Y);
					return !Ie || !Ie[de] ? null : Ie[de][ye]
				},
				S = Y => Y.accountFlags.isRequesting,
				G = (Y, ...de) => a()(Y, ["accountFlagsChanges", "data", ...de]),
				ne = Y => Y.accountFlagsChanges.isRequesting,
				ce = (0, _.P1)(L, C, (Y, de) => ({
					data: Y,
					meta: de
				})),
				le = (Y, de, ye) => !!(isEnterpriseSSEnabledSelector(Y) && A(Y, de, ye)),
				Q = Y => Y.membership,
				W = (0, n.P1)("membership", Q),
				K = (0, _.P1)(W, Q, (Y, de) => ({
					data: Y,
					meta: de
				})),
				j = Y => {
					const {
						roles: de = []
					} = W(Y) || {};
					return Boolean(de.find(ye => ye === "Super Administrator - All Privileges" || ye === "Billing"))
				},
				U = Y => {
					const de = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, p.n)(Y, de)
				},
				D = Y => {
					const de = v(Y),
						ye = Ve.getMemberships(Y) ? u().asMutable(Ve.getMemberships(Y)) : [];
					if (!!ye) return u().from(ye.map(Ie => T({}, Ie, {
						lastSeen: de[Ie.account.id] ? de[Ie.account.id].lastSeen : null
					})).sort((Ie, Re) => Ie.lastSeen && Re.lastSeen ? Re.lastSeen - Ie.lastSeen : 0))
				},
				B = Y => Y.filteredMemberships,
				$ = (0, n.P1)("filteredMemberships", B),
				te = (0, _.P1)(W, Y => Y == null ? void 0 : Y.permissions),
				re = (0, _.P1)(te, Y => (0, e.Z)(de => {
					var ye;
					return (ye = Y == null ? void 0 : Y[de]) !== null && ye !== void 0 ? ye : {
						read: !1,
						edit: !1
					}
				})),
				ie = (0, _.P1)(W, Y => Y == null ? void 0 : Y.policies),
				N = (Y, de, ye) => {
					let Ie = Ve.getMembership(Y);
					if (!Ie) {
						const Re = Ve.getMemberships(Y);
						if (!Re || !de) return !1;
						Ie = Re.find(Ge => Ge.account.id === de)
					}
					if (!Ie || !ye) return !1;
					try {
						return ye(Ie.permissions)
					} catch {
						return !1
					}
				},
				V = Y => {
					var de, ye;
					return (de = (ye = b(Y)) === null || ye === void 0 ? void 0 : ye.meta.has_pro_zones) !== null && de !== void 0 ? de : !1
				},
				k = Y => {
					var de, ye;
					return (de = (ye = b(Y)) === null || ye === void 0 ? void 0 : ye.meta.has_business_zones) !== null && de !== void 0 ? de : !1
				},
				H = Y => k(Y) || V(Y),
				ae = (Y, de) => {
					const ye = pe(Y, de);
					return !!ye && !!ye.enabled
				},
				pe = (Y, de) => {
					const ye = Ve.getMembership(Y),
						Ie = ye && ye.account;
					return Ie && Ie.legacy_flags && Ie.legacy_flags[de]
				},
				ue = Y => ae(Y, "custom_pages"),
				_e = Y => !!Y && Y["webhooks.webhooks.enabled"],
				oe = Y => A(Y, "bots", "enabled"),
				we = Y => A(Y, "billing", "annual_subscriptions_enable"),
				De = Y => Y ? Boolean(A(Y, "ConstellationAI", "v2_ui")) : !1,
				Me = Y => Y ? Boolean(A(Y, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				xe = Y => Y ? Boolean(A(Y, "AIgateway", "enabled")) : !1,
				Ne = Y => pe(Y, "enterprise_zone_quota"),
				Je = Y => {
					const de = Ne(Y);
					return !de || !de.available ? -1 : de.available
				},
				Ye = Y => Y.accountMembers,
				Fe = (0, n.P1)("accountMembers", Ye),
				Ke = Y => Y.accountMember && Y.accountMember.isRequesting,
				Z = Y => Y.accountRoles,
				he = (0, n.P1)("accountRoles", Z),
				Le = (Y, de) => {
					const ye = Ve.getMemberships(Y),
						Ie = ye && ye.find(et => et.account.id === de);
					if (Ie) return Ie.account.name.replace(" Account", " account");
					const Re = Ve.getMembership(Y),
						Ge = Re && Re.account;
					return Ge && Ge.id === de ? Ge.name : null
				},
				We = (Y, de) => {
					const ye = Ve.getMemberships(Y),
						Ie = ye && ye.find(et => et.account.id === de);
					if (Ie) return Ie.account.settings.access_approval_expiry;
					const Re = Ve.getMembership(Y),
						Ge = Re && Re.account;
					return Ge && Ge.id === de ? Ge.settings.access_approval_expiry : null
				},
				dt = (Y, de) => {
					const ye = We(Y, de);
					return ye ? c().utc(ye).isAfter() : !1
				},
				at = (Y, de, ye) => {
					const Ie = We(Y, de);
					let Re = Ie ? c().utc(Ie) : null;
					return !Re || !Re.isAfter() ? "" : Re && Re.year() === 3e3 ? ye("account.access_approval.card_expiration_forever") : ye("account.access_approval.card_expiration_text", {
						expiryTimestamp: Re.local().format(m.U.DateTime)
					})
				},
				Oe = Y => Y && Y.member && Y.member.edit,
				J = (Y, de) => {
					const ye = Ve.getMembership(Y),
						Ie = ye && ye.account;
					return Ie ? Ie.id !== de : !1
				},
				ge = Y => Y.dpa,
				Ce = (0, n.P1)("dpa", ge),
				ze = Y => Y.webhook,
				ke = Y => Y.webhooks,
				Te = (0, n.P1)("webhook", ke),
				$e = Y => Y.accountLegoContract,
				lt = (0, n.P1)("accountLegoContract", $e),
				it = Y => {
					const de = lt(Y);
					return (de == null ? void 0 : de.lego_state) ? de.lego_state : ""
				},
				_t = Y => it(Y) === "signed",
				Et = Y => $e(Y).isRequesting,
				yt = Y => {
					const de = lt(Y);
					return de && de.subscription_type ? de.subscription_type : ""
				},
				mt = Y => yt(Y) !== "",
				Ve = {
					getMembership: W,
					getMemberships: P,
					getFilteredMemberships: $,
					getAccountMembers: Fe,
					getAccountRoles: he
				},
				ft = Y => Y.accountSingle,
				nt = (0, n.P1)("accountSingle", ft),
				rt = Y => {
					const de = [d.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, d.V.ADMINISTRATOR];
					return (0, p.n)(Y, de)
				},
				ut = Y => (0, p.n)(Y, [d.V.BRAND_PROTECTION]),
				Se = Y => hasRole(Y, [MEMBERSHIP_ROLES.CLOUDFORCE_ONE_ADMIN, MEMBERSHIP_ROLES.CLOUDFORCE_ONE_READ])
		},
		"../react/common/selectors/commonSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				FX: function() {
					return a
				},
				QG: function() {
					return r
				},
				TH: function() {
					return l
				},
				cZ: function() {
					return e
				}
			});

			function e(u) {
				const _ = `__ACTIVE__${u}`;
				return s => {
					const c = s.application;
					return c && c.active[_]
				}
			}

			function r(u) {
				const _ = `__TOGGLE__${u}`;
				return s => {
					const c = s.application;
					return c && c.toggles[_]
				}
			}

			function a(u) {
				return u && u.paginationData && u.paginationData.info && u.paginationData.info.total_count ? u.paginationData.info.total_count : 0
			}
			const l = u => u.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(F, y, t) {
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
					return re
				},
				DA: function() {
					return Ye
				},
				E6: function() {
					return f
				},
				Gy: function() {
					return xe
				},
				Hq: function() {
					return Me
				},
				Ms: function() {
					return O
				},
				Mx: function() {
					return ae
				},
				Nb: function() {
					return De
				},
				Pj: function() {
					return Je
				},
				Q2: function() {
					return s
				},
				Qq: function() {
					return pe
				},
				Td: function() {
					return g
				},
				Z: function() {
					return V
				},
				a: function() {
					return b
				},
				a5: function() {
					return H
				},
				c7: function() {
					return ue
				},
				du: function() {
					return m
				},
				ec: function() {
					return ce
				},
				f: function() {
					return we
				},
				fo: function() {
					return oe
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
					return Ke
				},
				lI: function() {
					return u
				},
				p1: function() {
					return I
				},
				pK: function() {
					return Ne
				},
				pf: function() {
					return o
				},
				qR: function() {
					return E
				},
				rV: function() {
					return c
				},
				u1: function() {
					return n
				},
				w4: function() {
					return i
				},
				yD: function() {
					return N
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function a(Z, he) {
				return Z && Z[he]
			}
			const l = Z => !u(Z).isRequesting;

			function u(Z) {
				return Z.entitlements.zone
			}

			function _(Z) {
				return u(Z).data
			}
			const s = Z => {
				var he, Le;
				return ((he = u(Z).paginationData) === null || he === void 0 || (Le = he.options) === null || Le === void 0 ? void 0 : Le.editedDate) || {}
			};

			function c(Z, he) {
				const Le = _(Z);
				return Le ? a(Le, he) : void 0
			}
			const m = (Z, he) => c(Z, he) === !0;

			function n(Z) {
				return Z.entitlements.account
			}

			function o(Z) {
				return n(Z).data
			}
			const i = Z => {
				var he, Le;
				return ((he = n(Z).paginationData) === null || he === void 0 || (Le = he.options) === null || Le === void 0 ? void 0 : Le.editedDate) || {}
			};

			function f(Z) {
				return !n(Z).isRequesting
			}

			function d(Z, he) {
				const Le = o(Z);
				return Le ? a(Le, he) : void 0
			}

			function p(Z, he) {
				return d(Z, he) === !0
			}

			function T(Z, he) {
				return he.every(Le => p(Z, Le))
			}

			function I(Z) {
				return p(Z, "contract.customer_enabled")
			}

			function E(Z) {
				return p(Z, "contract.self_service_allowed")
			}

			function g(Z) {
				return p(Z, "billing.partners_managed")
			}
			const b = Z => I(Z) && E(Z),
				v = Z => p(Z, "enterprise.ecp_allowed");

			function w(Z) {
				return M(Z) || p(Z, "argo.allow_smart_routing") || p(Z, "argo.allow_tiered_caching") || p(Z, "rate_limiting.enabled") || p(Z, "ctm.enabled") || p(Z, "workers.enabled") || p(Z, "workers.kv_store.enabled") || p(Z, "stream.enabled")
			}
			const M = Z => m(Z, "argo.allow_smart_routing") || m(Z, "argo.allow_tiered_caching"),
				O = Z => p(Z, "zone.cname_setup_allowed") || p(Z, "zone.partial_setup_allowed") || m(Z, "zone.partial_setup_allowed"),
				P = Z => p(Z, "argo.allow_smart_routing") || m(Z, "argo.allow_smart_routing"),
				L = Z => p(Z, "argo.allow_tiered_caching") || m(Z, "argo.allow_tiered_caching"),
				C = Z => P(Z) || L(Z),
				A = Z => p(Z, "ctm.enabled"),
				S = Z => {
					const he = d(Z, "ctm.load_balancers");
					return typeof he == "number" ? he : 0
				},
				G = Z => {
					const he = d(Z, "ctm.pools");
					return typeof he == "number" ? he : 0
				},
				ne = Z => {
					const he = d(Z, "ctm.origins");
					return typeof he == "number" ? he : 0
				},
				ce = Z => p(Z, "workers.enabled"),
				le = Z => p(Z, "stream.enabled"),
				Q = Z => {
					const he = d(Z, "access.users_allowed");
					return typeof he == "number" ? he : 0
				},
				W = Z => Q(Z) > 0,
				K = Z => {
					const he = c(Z, "dedicated_certificates");
					return typeof he == "number" ? he : 0
				},
				j = Z => K(Z) > 0,
				U = Z => {
					const he = c(Z, "rate_limiting.max_rules");
					return typeof he == "number" ? he : 0
				},
				D = Z => p(Z, "rate_limiting.enabled"),
				B = Z => {
					const he = c(Z, "page_rules");
					return typeof he == "number" ? he : 0
				},
				$ = Z => B(Z) > 0,
				te = Z => {
					const he = d(Z, "dns_firewall.max_clusters_allowed");
					return typeof he == "number" ? he : 0
				},
				re = Z => te(Z) > 0,
				ie = Z => m(Z, "zone.advanced_certificate_manager") || p(Z, "zone.advanced_certificate_manager"),
				N = Z => c(Z, "authoritative_dns.proxy_record_allowed") === !1 || d(Z, "authoritative_dns.proxy_record_allowed") === !1,
				V = Z => p(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				k = Z => c(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				H = Z => {
					const he = c(Z, "authoritative_dns.min_record_ttl_allowed");
					return typeof he == "number" && he > 1 ? he : 60
				},
				ae = Z => {
					const he = d(Z, r.yt);
					return typeof he == "number" ? he : 0
				},
				pe = Z => p(Z, "foundation_dns.advanced_nameservers_allowed") || m(Z, "foundation_dns.advanced_nameservers_allowed"),
				ue = Z => p(Z, "authoritative_dns.account_custom_nameservers_allowed"),
				_e = Z => m(Z, "authoritative_dns.zone_custom_nameservers_allowed"),
				oe = Z => _e(Z) || ue(Z),
				we = (Z, he) => ((0, e.el)(window.location.pathname) ? c : d)(Z, he),
				De = Z => ((0, e.el)(window.location.pathname) ? _ : o)(Z),
				Me = Z => p(Z, "authoritative_dns.multi_provider_allowed") || m(Z, "authoritative_dns.multi_provider_allowed"),
				xe = Z => m(Z, "authoritative_dns.cname_flattening_allowed"),
				Ne = Z => p(Z, "secondary_dns.secondary_overrides") || m(Z, "secondary_dns.secondary_overrides"),
				Je = Z => p(Z, "authoritative_dns.custom_soa_allowed") || m(Z, "authoritative_dns.custom_soa_allowed"),
				Ye = Z => p(Z, "authoritative_dns.custom_ns_ttl_allowed") || m(Z, "authoritative_dns.custom_ns_ttl_allowed"),
				Fe = Z => p(Z, "secondary.create_zone"),
				Ke = Z => pe(Z) || ue(Z) || Me(Z) || Fe(Z) || Ne(Z) || Je(Z) || Ye(Z)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return u
				},
				v: function() {
					return _
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("../react/utils/bootstrap.ts");
			const u = s => {
				if ((0, l.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const c = s.userCommPreferences.data;
				if (c == null ? void 0 : c["language-locale"]) return (0, e.i_)(c["language-locale"]), c["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const m = (0, e.Kd)();
					return _(m) ? m : e.ZW
				}
			};

			function _(s) {
				const c = Object.keys(r.Q).find(m => r.Q[m] === s);
				return !!s && typeof s == "string" && c != null && (0, e.S8)(c)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return u
				},
				BG: function() {
					return m
				},
				BY: function() {
					return g
				},
				GP: function() {
					return d
				},
				GU: function() {
					return b
				},
				PR: function() {
					return a
				},
				h$: function() {
					return I
				},
				h8: function() {
					return n
				},
				kk: function() {
					return T
				},
				l8: function() {
					return s
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
				l = v => {
					var w;
					return (w = a(v)) === null || w === void 0 ? void 0 : w.email.endsWith("@cloudflare.com")
				},
				u = v => {
					var w;
					return !!((w = a(v)) === null || w === void 0 ? void 0 : w.id)
				},
				_ = v => {
					const w = a(v);
					if (!!w) return w.first_name && w.last_name ? `${w.first_name} ${w.last_name}` : w.email
				},
				s = v => {
					const w = a(v);
					return w && w.has_enterprise_zones
				},
				c = v => v.userCommPreferences,
				m = (0, e.P1)("userCommPreferences", c),
				n = v => {
					const w = a(v);
					return w && w.email_verified
				},
				o = v => {
					const w = m(v);
					return w && w.preferences.marketing_communication
				},
				i = v => v.userDetails,
				f = (0, e.P1)("userDetails", i),
				d = v => {
					const w = f(v);
					return w && w["2FA-RECOVERY"] === "scheduled"
				},
				p = v => {
					const w = f(v);
					return w && w["2FA-RECOVERY"] === "interrupted"
				},
				T = v => {
					const w = f(v);
					return w == null ? void 0 : w["NEW-USER-EMAIL"]
				},
				I = v => v.gates.assignments,
				E = (v, w) => v && v[w];

			function g(v, w) {
				const M = I(v);
				return M ? E(M, w) : void 0
			}
			const b = (v, w) => g(v, w) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return O
				},
				$t: function() {
					return Le
				},
				A4: function() {
					return I
				},
				Cu: function() {
					return E
				},
				DQ: function() {
					return ae
				},
				Ej: function() {
					return L
				},
				FH: function() {
					return b
				},
				ID: function() {
					return D
				},
				Iu: function() {
					return T
				},
				Ko: function() {
					return Me
				},
				Le: function() {
					return _e
				},
				Ly: function() {
					return re
				},
				M3: function() {
					return Fe
				},
				N8: function() {
					return Ye
				},
				NY: function() {
					return k
				},
				Ns: function() {
					return $
				},
				Ox: function() {
					return at
				},
				P4: function() {
					return C
				},
				RO: function() {
					return j
				},
				Tr: function() {
					return De
				},
				U: function() {
					return g
				},
				Ug: function() {
					return w
				},
				V6: function() {
					return Ke
				},
				WR: function() {
					return Oe
				},
				Xg: function() {
					return p
				},
				ZB: function() {
					return ue
				},
				_y: function() {
					return B
				},
				cU: function() {
					return xe
				},
				cg: function() {
					return H
				},
				d2: function() {
					return le
				},
				il: function() {
					return te
				},
				jN: function() {
					return S
				},
				jg: function() {
					return N
				},
				kC: function() {
					return P
				},
				kf: function() {
					return Z
				},
				ko: function() {
					return K
				},
				mK: function() {
					return We
				},
				nA: function() {
					return d
				},
				oY: function() {
					return A
				},
				qM: function() {
					return oe
				},
				rq: function() {
					return V
				},
				tS: function() {
					return M
				},
				tU: function() {
					return ne
				},
				vB: function() {
					return dt
				},
				vM: function() {
					return G
				},
				wH: function() {
					return v
				},
				wn: function() {
					return pe
				},
				xU: function() {
					return ce
				},
				xw: function() {
					return we
				},
				z5: function() {
					return U
				},
				zO: function() {
					return Ne
				},
				zW: function() {
					return he
				},
				zh: function() {
					return Q
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				l = t.n(a),
				u = t("../../../../node_modules/moment/moment.js"),
				_ = t.n(u),
				s = t("../react/common/constants/billing/index.ts");

			function c(J) {
				for (var ge = 1; ge < arguments.length; ge++) {
					var Ce = arguments[ge] != null ? Object(arguments[ge]) : {},
						ze = Object.keys(Ce);
					typeof Object.getOwnPropertySymbols == "function" && ze.push.apply(ze, Object.getOwnPropertySymbols(Ce).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(Ce, ke).enumerable
					})), ze.forEach(function(ke) {
						m(J, ke, Ce[ke])
					})
				}
				return J
			}

			function m(J, ge, Ce) {
				return ge = n(ge), ge in J ? Object.defineProperty(J, ge, {
					value: Ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : J[ge] = Ce, J
			}

			function n(J) {
				var ge = o(J, "string");
				return typeof ge == "symbol" ? ge : String(ge)
			}

			function o(J, ge) {
				if (typeof J != "object" || J === null) return J;
				var Ce = J[Symbol.toPrimitive];
				if (Ce !== void 0) {
					var ze = Ce.call(J, ge || "default");
					if (typeof ze != "object") return ze;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ge === "string" ? String : Number)(J)
			}
			const i = (0, r.P1)("zone", J => J.zone),
				f = J => {
					var ge;
					return (ge = J.zoneVersioning) === null || ge === void 0 ? void 0 : ge.zoneVersionSelector
				},
				d = (0, e.P1)(i, f, (J, ge) => {
					var Ce, ze, ke;
					let Te;
					if (Array.isArray(J) && J.length === 1 ? Te = J[0] : J && !Array.isArray(J) && (Te = J), !Te) return;
					const $e = !!(ge == null ? void 0 : ge.enabled);
					return c({}, Te, Te.name && {
						name: $e ? ge.rootZoneName : Te.name
					}, {
						versioning: {
							enabled: $e,
							isRoot: !((Ce = Te.name) === null || Ce === void 0 ? void 0 : Ce.endsWith(".config.cfdata.org")),
							version: $e ? ge.selectedVersion : 0,
							rootZoneId: $e ? ge.rootZoneId : (ze = (ke = Te) === null || ke === void 0 ? void 0 : ke.id) !== null && ze !== void 0 ? ze : ""
						}
					})
				}),
				p = J => J.zone,
				T = J => J.zone.isRequesting,
				I = (0, e.P1)(d, p, (J, ge) => ({
					data: J,
					meta: ge
				})),
				E = J => {
					var ge, Ce;
					return (ge = (Ce = d(J)) === null || Ce === void 0 ? void 0 : Ce.id) !== null && ge !== void 0 ? ge : ""
				},
				g = J => J.zones,
				b = J => J.zonesRoot,
				v = J => J.zonesAccount,
				w = (0, r.P1)("zones", g),
				M = (0, r.P1)("zonesRoot", b),
				O = (0, r.P1)("zonesAccount", v);

			function P(J) {
				const ge = d(J);
				return ge ? ge.created_on : null
			}

			function L(J, ge, Ce) {
				const ze = P(J);
				if (!ze) return;
				const ke = _().duration(ge, Ce),
					Te = new Date(ze),
					$e = new Date(new Date().getTime() - ke.asMilliseconds());
				return Te.getTime() > $e.getTime()
			}

			function C(J) {
				const ge = d(J);
				return ge ? ge.status : null
			}

			function A(J) {
				const ge = d(J);
				return ge ? ge.type : null
			}

			function S(J) {
				return (J == null ? void 0 : J.plan_pending) ? J == null ? void 0 : J.plan_pending : J == null ? void 0 : J.plan
			}

			function G(J) {
				const ge = d(J);
				if (!ge) return;
				const Ce = S(ge);
				return Ce && Ce.legacy_id
			}

			function ne(J, ge) {
				const Ce = S(J);
				return !!Ce && s.Gs.indexOf(Ce.legacy_id) >= s.Gs.indexOf(ge)
			}

			function ce(J) {
				return !!J && J.status === "initializing"
			}

			function le(J) {
				return !!J && J.status === "pending"
			}

			function Q(J) {
				return !!J && J.status === "active"
			}

			function W(J, ge) {
				if (!J) return !1;
				const Ce = S(J);
				return !!Ce && Ce.legacy_id === ge
			}

			function K(J) {
				return W(J, "enterprise")
			}
			const j = J => K(d(J));

			function U(J) {
				return W(J, "business")
			}
			const D = J => U(d(J));

			function B(J) {
				return W(J, "pro")
			}

			function $(J) {
				return W(J, "free")
			}
			const te = J => $(d(J));

			function re(J) {
				return !K(J)
			}

			function ie(J) {
				return J && J.owner
			}

			function N(J, ge) {
				const Ce = ie(ge);
				return !!Ce && Ce.type === "user" && Ce.id === J.id
			}

			function V(J) {
				const ge = d(J);
				return !!ge && ge.type === "partial"
			}

			function k(J) {
				const ge = d(J);
				return !!ge && ge.type === "secondary"
			}
			const H = J => {
					var ge;
					const Ce = d(J);
					return !!(Ce == null ? void 0 : Ce.host) && !!((ge = Ce.plan) === null || ge === void 0 ? void 0 : ge.externally_managed)
				},
				ae = J => {
					const ge = w(J);
					return ge && ge.some(K)
				},
				pe = (J, ge) => {
					const Ce = d(J);
					return Ce && Ce.betas ? Ce.betas.includes(ge) : !1
				},
				ue = (J, ...ge) => l()(J, ["zoneFlags", "data", ...ge]),
				_e = (J, ...ge) => l()(J, ["accountFlags", "data", ...ge]),
				oe = J => J.accountFlags.isRequesting,
				we = J => J.zoneFlags.isRequesting,
				De = (J, ...ge) => l()(J, ["zoneFlagsChanges", "data", ...ge]),
				Me = J => J.zoneFlagsChanges.isRequesting,
				xe = J => J.zoneFlags && J.zoneFlags.data,
				Ne = J => J.zoneFlags,
				Je = (0, e.P1)(xe, Ne, (J, ge) => ({
					data: J,
					meta: ge
				})),
				Ye = (0, r.P1)("abuseUrls", J => J.overview.abuseUrls),
				Fe = J => {
					const ge = d(J);
					return ge ? `/${ge.account.id}/${ge.name}` : null
				},
				Ke = J => J.zoneMarketingCampaigns,
				Z = J => J.overview.zoneBlocks.data,
				he = J => J.overview.zoneBlocks.isRequesting,
				Le = J => J.overview.zoneBlocks.hasData,
				We = J => {
					var ge, Ce;
					return (J == null || (ge = J.overview.zoneBlocks) === null || ge === void 0 || (Ce = ge.paginationData) === null || Ce === void 0 ? void 0 : Ce.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				dt = J => J.overview.zoneBlocksReview.isRequesting,
				at = J => J.overview.zoneHold,
				Oe = (0, r.P1)("zoneHold", at)
		},
		"../react/common/utils/formatDate.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			y.Z = (r, a, l = !1) => (0, e.p6)(r, a, l)
		},
		"../react/common/utils/getEnvironment.ts": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				a = t("../functions/utils/constants.ts");
			const l = () => {
				var u, _, s;
				const m = e.parse(document.cookie)[a.b1];
				let n = null;
				m && (n = (0, r.E9)(m));
				let o = "production";
				switch (!0) {
					case ((u = n) === null || u === void 0 ? void 0 : u.projectType) === "canary":
						o = "canary";
						break;
					case ((_ = window) === null || _ === void 0 || (s = _.build) === null || s === void 0 ? void 0 : s.isPreviewDeploy):
						o = "preview";
						break
				}
				return o
			};
			y.Z = l
		},
		"../react/common/utils/hasRole.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (a, l) => {
				const {
					roles: u = []
				} = (0, e.uF)(a) || {};
				return l.some(_ => u.includes(_))
			}
		},
		"../react/common/utils/isGuards.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$K: function() {
					return s
				},
				Q$: function() {
					return a
				},
				t: function() {
					return _
				},
				v5: function() {
					return l
				},
				zE: function() {
					return u
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = c => c ? ["page", "per_page", "count", "total_count"].every(n => n in c && c[n]) : !1,
				l = (c = "") => e.Dy.includes(c.toLowerCase()),
				u = c => c !== null && typeof c == "object" && "name" in c && "size" in c && "type" in c && typeof c.slice == "function",
				_ = c => (0, r.Z)(c),
				s = c => c != null
		},
		"../react/common/utils/startViewTransition.ts": function(F, y, t) {
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
		"../react/common/utils/useQueryCache.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				o: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(s) {
				for (var c = 1; c < arguments.length; c++) {
					var m = arguments[c] != null ? Object(arguments[c]) : {},
						n = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(m).filter(function(o) {
						return Object.getOwnPropertyDescriptor(m, o).enumerable
					})), n.forEach(function(o) {
						a(s, o, m[o])
					})
				}
				return s
			}

			function a(s, c, m) {
				return c = l(c), c in s ? Object.defineProperty(s, c, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[c] = m, s
			}

			function l(s) {
				var c = u(s, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function u(s, c) {
				if (typeof s != "object" || s === null) return s;
				var m = s[Symbol.toPrimitive];
				if (m !== void 0) {
					var n = m.call(s, c || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(s)
			}
			const _ = s => {
				const c = (0, e.useQueryClient)(),
					m = g => {
						var b;
						return c.getQueriesData((b = g) !== null && b !== void 0 ? b : s)
					},
					n = g => {
						var b;
						return c.getQueryData((b = g) !== null && b !== void 0 ? b : s)
					},
					o = g => {
						var b;
						return c.getQueriesData({
							queryKey: (b = g) !== null && b !== void 0 ? b : s,
							stale: !0
						})
					},
					i = (g, b) => {
						var v;
						c.setQueryData((v = b) !== null && v !== void 0 ? v : s, g)
					},
					f = async g => {
						var b;
						await c.refetchQueries((b = g) !== null && b !== void 0 ? b : s)
					}, d = async (g, b) => {
						var v, w;
						await c.invalidateQueries((v = g) !== null && v !== void 0 ? v : s, r({
							refetchActive: !1
						}, (w = b) !== null && w !== void 0 ? w : {}))
					}, p = async (g, b) => {
						const v = g || (w => {
							var M;
							return (w == null || (M = w.queryKey) === null || M === void 0 ? void 0 : M[0]) === s
						});
						await c.invalidateQueries(r({
							predicate: v,
							refetchActive: !1,
							refetchInactive: !1
						}, b))
					};
				return {
					refetch: f,
					cancelData: async () => {
						await c.cancelQueries(s)
					},
					invalidate: d,
					setData: i,
					getDataStale: o,
					getData: m,
					prefetchQuery: (g, b) => {
						var v;
						return c.prefetchQuery((v = b) !== null && v !== void 0 ? v : s, g)
					},
					getQueryData: n,
					predicateInvalidate: p,
					batchInvalidate: async ({
						queryKeysToInvalidate: g = [],
						queryKeysToPredicateInvalidate: b = [],
						refetchActive: v = !1,
						refetchInactive: w = !1
					}) => {
						const M = g.map(P => d(P)),
							O = b.map(P => p(L => {
								var C;
								return (L == null || (C = L.queryKey) === null || C === void 0 ? void 0 : C[0]) === P
							}, {
								refetchActive: v,
								refetchInactive: w
							}));
						await Promise.all([...M, ...O])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				K2: function() {
					return r
				},
				Lb: function() {
					return a
				},
				XI: function() {
					return l
				},
				bK: function() {
					return c
				},
				jk: function() {
					return s
				},
				wb: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = m => /^https?:\/\/(.*)/.test(m),
				a = m => e.default.hostname.test(m),
				l = m => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(m),
				u = m => /^[!-~]+$/.test(m),
				_ = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				s = m => _.test(m),
				c = m => !!m && !!m.length && /^[ -~]+$/.test(m)
		},
		"../react/pages/abuse/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Cg: function() {
					return f
				},
				EO: function() {
					return c
				},
				Iy: function() {
					return s
				},
				RV: function() {
					return i
				},
				R_: function() {
					return _
				},
				Vq: function() {
					return g
				},
				Y0: function() {
					return E
				},
				bL: function() {
					return v
				},
				bx: function() {
					return I
				},
				dM: function() {
					return M
				},
				dV: function() {
					return w
				},
				eM: function() {
					return o
				},
				i9: function() {
					return u
				},
				nq: function() {
					return p
				},
				pj: function() {
					return n
				},
				to: function() {
					return b
				},
				xR: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				a = t("../react/pages/abuse/abuse.translations.ts"),
				l = t("../react/pages/abuse/types.ts");
			const u = "customer-abuse-reports-table-filter-bar",
				_ = "abuse-reports-table-tooltip",
				s = "abuse-reports-cache-rate-limits-table-tooltip",
				c = "abuse-reports-blocks-tables-tooltip",
				m = "customer-abuse-reports-table-filter-bar",
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
			let i = function(O) {
				return O.BLOCKED_CONTENT = "blocked-content", O.CACHE_RATE_LIMITS = "cache-rate-limits", O
			}({});
			const f = [{
					title: a.keys.tab_titles.blocked_content,
					url: `/${i.BLOCKED_CONTENT}`
				}, {
					title: a.keys.tab_titles.cache_rate_limits,
					url: `/${i.CACHE_RATE_LIMITS}`
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
				T = null,
				I = ["active", "cancelled", "in_review", "pending", "removed"],
				E = ["accepted", "in_review"];
			let g = function(O) {
				return O.APPEAL_MITIGATION_SUBMIT = "appeal abuse report mitigation submit", O.APPEAL_MITIGATION_SUCCESS = "appeal abuse report mitigation success", O.APPEAL_MITIGATION_FAILURE = "appeal abuse report mitigation failure", O.CLICK_ABUSE_REPORT_ID = "click abuse report id", O.CLICK_ABUSE_REPORT_MITIGATIONS_LINK = "click abuse report mitigations link", O.ADD_FILTER = "Add filter", O.REMOVE_FILTER = "Remove filter", O.REMOVE_ALL_FILTERS = "Remove all filters", O.NEXT_PAGE = "go to next page", O.PREV_PAGE = "go to prev page", O.GO_TO_PAGE = "go to page", O.SET_PAGE_SIZE = "set page size", O.COPY_TABLE_CELL = "copy table cell", O
			}({});
			const b = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: l.mu.CDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [l.mu.Domain, l.mu.Status, l.mu.Type],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: l.mu.Domain,
						f2: l.mu.Status,
						f3: l.mu.Type,
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
						name: l.XO.EffectiveDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [l.XO.Status],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: l.XO.Status,
						f2: "startDate",
						f3: "endDate",
						f4: "timeWindow"
					}
				},
				w = {
					initialPaginationState: {
						page: 1,
						perPage: 6
					},
					initialToolbarState: {},
					initialSortState: {
						name: l.DT.EnforcementDate,
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
						name: l.DT.CreatedDate,
						direction: e.Sr.desc
					}
				}
		},
		"../react/pages/abuse/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				DT: function() {
					return l
				},
				MY: function() {
					return a
				},
				XO: function() {
					return e
				},
				Zy: function() {
					return c
				},
				mu: function() {
					return n
				},
				ut: function() {
					return u
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
			let l = function(o) {
					return o.BlockType = "blockType", o.CreatedDate = "created", o.EnforcementDate = "enforcement_date", o.Status = "status", o.EntityType = "entity_type", o.EntityId = "entity_id", o
				}({}),
				u = function(o) {
					return o.JIRA = "jira", o.ZENDESK = "zendesk", o.ABUSE_REPORT = "abuse_report", o.CSAM_MATCH = "csam_match", o
				}({}),
				_ = function(o) {
					return o.ID = "id", o.DOMAIN = "domain", o.CREATED_BEFORE = "created_before", o.CREATED_AFTER = "created_after", o.STATUS = "status", o.TYPE = "type", o.MITIGATION_STATUS = "mitigation_status", o
				}({}),
				s = function(o) {
					return o.Domain = "domain", o.Status = "status", o.Type = "type", o
				}({}),
				c = function(o) {
					return o.DMCA = "DMCA", o.TRADEMARK = "TM", o.PHISHING = "PHISH", o.GENERAL = "GEN", o.REGISTRAR_WHOIS = "REG_WHO", o.EMERGENCY = "EMER", o.NCSEI = "NCSEI", o.THREAT = "THREAT", o
				}({});
			const m = [c.DMCA, c.TRADEMARK, c.PHISHING, c.GENERAL, c.REGISTRAR_WHOIS, c.EMERGENCY, c.NCSEI, c.THREAT];
			let n = function(o) {
				return o.Id = "id", o.CDate = "cdate", o.Domain = "domain", o.Type = "type", o.Status = "status", o.AcceptedUrls = "accepted_urls", o
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(F, y, t) {
			"use strict";
			t.d(y, {
				DZ: function() {
					return l
				},
				GA: function() {
					return m
				},
				hT: function() {
					return _
				},
				p6: function() {
					return a
				},
				qc: function() {
					return u
				},
				w9: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e);
			const a = i => r().utc(i).format("YYYY-MM-DD"),
				l = i => r().utc(i).format(),
				u = i => r().utc(i).startOf("minute").format(),
				_ = i => new Date(i),
				s = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				c = i => {
					const f = i / 60 / 60 / 1e3;
					return s[Object.keys(s).sort((d, p) => p - d).find(d => f >= d)]
				},
				m = (i, f = d => d.avg && d.avg.sampleInterval ? d.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((d, p) => d + f(p), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				o = i => n[i]
		},
		"../react/pages/blocked-content/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				BW: function() {
					return m
				},
				Gk: function() {
					return p
				},
				Jr: function() {
					return n
				},
				LA: function() {
					return i
				},
				Wk: function() {
					return d
				},
				_V: function() {
					return c
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

			function l(T) {
				for (var I = 1; I < arguments.length; I++) {
					var E = arguments[I] != null ? Object(arguments[I]) : {},
						g = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(E).filter(function(b) {
						return Object.getOwnPropertyDescriptor(E, b).enumerable
					})), g.forEach(function(b) {
						u(T, b, E[b])
					})
				}
				return T
			}

			function u(T, I, E) {
				return I = _(I), I in T ? Object.defineProperty(T, I, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = E, T
			}

			function _(T) {
				var I = s(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function s(T, I) {
				if (typeof T != "object" || T === null) return T;
				var E = T[Symbol.toPrimitive];
				if (E !== void 0) {
					var g = E.call(T, I || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const c = "blocked-content-table-tooltip",
				m = {
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
				i = ["phishing_interstitial", "malware_interstitial", "legal_block"],
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
					filters: Object.values(a.GH).reduce((T, I) => l({}, T, {
						[I]: I
					}), {})
				};
			let p = function(T) {
				return T.COPY_URL = "copy blocked content url", T.REQUEST_REVIEW = "request blocked content review", T.ADD_FILTER = "Add filter", T.REMOVE_FILTER = "Remove filter", T
			}({})
		},
		"../react/pages/blocked-content/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return e
				},
				GH: function() {
					return u
				},
				Ib: function() {
					return a
				},
				M3: function() {
					return r
				},
				Qy: function() {
					return l
				},
				fL: function() {
					return _
				}
			});
			let e = function(c) {
					return c.Pending = "pending", c.Active = "active", c
				}({}),
				r = function(c) {
					return c.Active = "active", c.InReview = "in_review", c.Pending = "pending", c.Cancelled = "cancelled", c
				}({});
			const a = [r.Pending, r.Cancelled],
				l = [r.Active, r.InReview];
			let u = function(c) {
					return c.Domain = "domain", c.Status = "status", c.BlockType = "blockType", c
				}({}),
				_ = function(c) {
					return c.CreatedDate = "created", c.EnforcementDate = "enforcementDate", c.BlockType = "blockType", c.Hostname = "hostname", c.Status = "status", c
				}({}),
				s = function(c) {
					return c.Removed = "removed", c.Misclassified = "misclassified", c
				}({})
		},
		"../react/pages/caching/tracking.tsx": function(F, y, t) {
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
		"../react/pages/d1/routes.ts": function(F, y, t) {
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
		"../react/pages/dns/dns-records/tracking.ts": function(F, y, t) {
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
		"../react/pages/email/types.ts": function(F, y, t) {
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
			let e = function(u) {
				return u.ROOT = "root", u.DSTADDRS_CARD = "dstaddrs_card", u.RULES_CARD = "rules_card", u.CATCHALL_CARD = "catchall_card", u.SETTINGS_PAGE = "settings_page", u.WORKERS_PAGE = "workers_page", u
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
			let a = function(u) {
				return u[u.Verified = 0] = "Verified", u[u.Pending = 1] = "Pending", u[u.Missing = 2] = "Missing", u[u.WorkerNotFound = 3] = "WorkerNotFound", u[u.Unknown = 4] = "Unknown", u[u.Loading = 5] = "Loading", u
			}({});
			const l = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const a = r._.createAlertWithSelection,
				l = r._.editAlert,
				u = (0, e.BC)`${a}/subtype`,
				_ = (0, e.BC)`${a}/stepper`,
				s = (0, e.BC)`${_}/${"stepName"}`,
				c = (0, e.BC)`${_}/details`,
				m = (0, e.BC)`${_}/data-centers`,
				n = (0, e.BC)`${_}/ramps`,
				o = (0, e.BC)`${_}/threshold`,
				i = (0, e.BC)`${_}/review`,
				f = (0, e.BC)`${_}/confirm`,
				d = (0, e.BC)`${l}/stepper`,
				p = (0, e.BC)`${d}/${"stepName"}`,
				T = (0, e.BC)`${d}/details`,
				I = (0, e.BC)`${d}/data-centers`,
				E = (0, e.BC)`${d}/ramps`,
				g = (0, e.BC)`${d}/threshold`,
				b = (0, e.BC)`${d}/review`,
				v = (0, e.BC)`${d}/confirm`,
				w = {
					magicTunnelHealthChooseSubType: u,
					magicTunnelHealthCreateStepperBase: _,
					magicTunnelHealthCreateStepper: s,
					magicTunnelHealthCreateDetails: c,
					magicTunnelHealthCreateSelectDataCenter: m,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: o,
					magicTunnelHealthCreateReview: i,
					magicTunnelHealthCreateConfirm: f,
					magicTunnelHealthEditStepperBase: d,
					magicTunnelHealthEditStepper: p,
					magicTunnelHealthEditDetails: T,
					magicTunnelHealthEditSelectDataCenter: I,
					magicTunnelHealthEditSelectRamps: E,
					magicTunnelHealthEditSetThreshold: g,
					magicTunnelHealthEditReview: b,
					magicTunnelHealthEditConfirm: v
				};
			y.Z = w
		},
		"../react/pages/home/alerts/config.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				jk: function() {
					return i
				},
				w8: function() {
					return f
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				l = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				u = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function _(d) {
				for (var p = 1; p < arguments.length; p++) {
					var T = arguments[p] != null ? Object(arguments[p]) : {},
						I = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(T).filter(function(E) {
						return Object.getOwnPropertyDescriptor(T, E).enumerable
					})), I.forEach(function(E) {
						s(d, E, T[E])
					})
				}
				return d
			}

			function s(d, p, T) {
				return p = c(p), p in d ? Object.defineProperty(d, p, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[p] = T, d
			}

			function c(d) {
				var p = m(d, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function m(d, p) {
				if (typeof d != "object" || d === null) return d;
				var T = d[Symbol.toPrimitive];
				if (T !== void 0) {
					var I = T.call(d, p || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(d)
			}
			const n = "Notifications",
				o = "notification",
				i = _({}, e._, r._j, a._j, l._),
				f = _({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, u.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_j: function() {
					return _
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${r}/pagerduty/connect`,
				l = (0, e.BC)`${r}/pagerduty/register`,
				u = (0, e.BC)`${r}/pagerduty`,
				_ = {
					pagerDutyConnect: a,
					pagerDutyRegister: l,
					pagerDutyList: u
				};
			var s = null
		},
		"../react/pages/home/alerts/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				l = (0, e.BC)`${a}/destinations`,
				u = (0, e.BC)`${a}/create`,
				_ = (0, e.BC)`${u}/${"alertType"}`,
				s = (0, e.BC)`${a}/edit/${"alertId"}`,
				c = {
					account: r,
					alerts: a,
					destinations: l,
					createAlert: u,
					createAlertWithSelection: _,
					editAlert: s
				};
			y.Z = c
		},
		"../react/pages/home/alerts/tracking.ts": function(F, y, t) {
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
		"../react/pages/home/audit-log/tracking.ts": function(F, y, t) {
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
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(F, y, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function(F, y, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AA: function() {
					return V
				},
				AN: function() {
					return rt
				},
				AY: function() {
					return de
				},
				Ac: function() {
					return vt
				},
				Am: function() {
					return I
				},
				B2: function() {
					return U
				},
				BB: function() {
					return P
				},
				BF: function() {
					return ke
				},
				BQ: function() {
					return Ve
				},
				E8: function() {
					return Se
				},
				Fl: function() {
					return Ie
				},
				Fu: function() {
					return A
				},
				Gc: function() {
					return it
				},
				Hc: function() {
					return Nt
				},
				IO: function() {
					return ft
				},
				JK: function() {
					return Je
				},
				K: function() {
					return w
				},
				LI: function() {
					return mt
				},
				LX: function() {
					return Ce
				},
				L_: function() {
					return Z
				},
				Ly: function() {
					return Qe
				},
				MR: function() {
					return B
				},
				Mj: function() {
					return te
				},
				NB: function() {
					return Mt
				},
				Oe: function() {
					return Bt
				},
				Or: function() {
					return ie
				},
				P5: function() {
					return Ot
				},
				PE: function() {
					return we
				},
				Pd: function() {
					return At
				},
				Pk: function() {
					return Me
				},
				Pp: function() {
					return We
				},
				Q1: function() {
					return C
				},
				Qr: function() {
					return ze
				},
				Qv: function() {
					return De
				},
				Rp: function() {
					return It
				},
				S7: function() {
					return ht
				},
				Sh: function() {
					return Re
				},
				Sl: function() {
					return Dt
				},
				TZ: function() {
					return N
				},
				Tg: function() {
					return Ye
				},
				Tp: function() {
					return lt
				},
				Uy: function() {
					return Pt
				},
				Vw: function() {
					return G
				},
				W3: function() {
					return Oe
				},
				WR: function() {
					return nt
				},
				WX: function() {
					return pe
				},
				XF: function() {
					return ut
				},
				Xb: function() {
					return k
				},
				Zs: function() {
					return Ke
				},
				_f: function() {
					return Te
				},
				b4: function() {
					return ae
				},
				bc: function() {
					return St
				},
				c2: function() {
					return D
				},
				cE: function() {
					return wt
				},
				dh: function() {
					return Le
				},
				fE: function() {
					return he
				},
				g7: function() {
					return oe
				},
				hO: function() {
					return at
				},
				hV: function() {
					return Rt
				},
				hk: function() {
					return E
				},
				hr: function() {
					return H
				},
				it: function() {
					return dt
				},
				j3: function() {
					return xt
				},
				jN: function() {
					return Ne
				},
				jo: function() {
					return Ut
				},
				k3: function() {
					return bt
				},
				m8: function() {
					return W
				},
				nm: function() {
					return Ge
				},
				oW: function() {
					return Y
				},
				pH: function() {
					return K
				},
				pi: function() {
					return Q
				},
				r4: function() {
					return Ft
				},
				rI: function() {
					return $
				},
				s7: function() {
					return _t
				},
				sg: function() {
					return et
				},
				tB: function() {
					return p
				},
				tN: function() {
					return _e
				},
				u_: function() {
					return jt
				},
				vV: function() {
					return $e
				},
				vc: function() {
					return xe
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				l = t.n(a),
				u = t("../../../common/util/types/src/api/domain.ts"),
				_ = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				s = t("../react/utils/url.ts"),
				c = t("../react/pages/home/domain-registration/config.ts"),
				m = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function o(h) {
				for (var R = 1; R < arguments.length; R++) {
					var me = arguments[R] != null ? Object(arguments[R]) : {},
						X = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && X.push.apply(X, Object.getOwnPropertySymbols(me).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(me, ee).enumerable
					})), X.forEach(function(ee) {
						i(h, ee, me[ee])
					})
				}
				return h
			}

			function i(h, R, me) {
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
					var X = me.call(h, R || "default");
					if (typeof X != "object") return X;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(h)
			}

			function p(h) {
				return h.filter(R => R.isSelected).reduce((R, {
					name: me,
					fees: X,
					isZoneEntitlementPresent: ee
				}) => ee || !(0, e.isNumber)(X == null ? void 0 : X.transfer_fee) ? R : vt(me) ? R + (X == null ? void 0 : X.transfer_fee) * 2 : R + (X == null ? void 0 : X.transfer_fee), 0)
			}

			function T(h) {
				return h.filter(R => R.registrar.toLowerCase() === "godaddy")
			}
			const I = "MMM D, YYYY";

			function E(h, R, me, X) {
				var ee, fe, ve, be, Be, He, tt, Xe, qe, st, pt, ot;
				const Ue = h[R.name],
					Gt = () => vt(R.name) ? l()(R.expires_at).add(2, "years").format(I) : l()(R.expires_at).add(1, "year").format(I);
				return o({
					name: R == null ? void 0 : R.name,
					zone: Ue,
					entitlements: me,
					registryCheck: X,
					nameservers: R.name_servers,
					isAvailable: R.available,
					lastKnownStatus: R.last_known_status,
					authCode: R.auth_code,
					isEnterpriseZone: (Ue == null || (ee = Ue.plan) === null || ee === void 0 ? void 0 : ee.legacy_id) === "enterprise",
					isActiveZone: (Ue == null ? void 0 : Ue.status) === "active",
					corResponsesPending: R.cor_responses_pending,
					isCorLocked: R.cor_locked,
					corLockedUntil: R.cor_locked_until ? l()(R.cor_locked_until).format(I) : null,
					isFullZone: (Ue == null ? void 0 : Ue.type) == n.xd.Full,
					isLocked: R.locked,
					registrar: R.current_registrar || c.JM,
					zoneId: Ue == null ? void 0 : Ue.id,
					currentExpiration: l()(R.expires_at).format(I),
					newExpiration: Gt(),
					lastEntitledAt: R.last_entitled_at ? new Date(R.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(me) && !!me.find(Wt => Wt.id === c.g5 && Wt.allocation.value === !0),
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
					paymentExpiresAt: l()(R.payment_expires_at).isValid() ? l()(R.payment_expires_at) : l()(R.expires_at).isValid() ? l()(R.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (fe = R.contacts) === null || fe === void 0 || (ve = fe.administrator) === null || ve === void 0 ? void 0 : ve.id,
						[n.l2.Billing]: (be = R.contacts) === null || be === void 0 || (Be = be.billing) === null || Be === void 0 ? void 0 : Be.id,
						[n.l2.Registrant]: (He = R.contacts) === null || He === void 0 || (tt = He.registrant) === null || tt === void 0 ? void 0 : tt.id,
						[n.l2.Technical]: (Xe = R.contacts) === null || Xe === void 0 || (qe = Xe.technical) === null || qe === void 0 ? void 0 : qe.id
					},
					landing: R.landing,
					privacy: R.privacy,
					whois: R.whois,
					emailVerified: R.email_verified,
					materialChanges: M(R.material_changes),
					corChanges: R.cor_changes ? P(Object.assign(o({}, b), R.cor_changes)) : {},
					registryStatuses: R.registry_statuses ? R.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (st = R.domain_protection_services) === null || st === void 0 ? void 0 : st.status
					},
					deletion: {
						isDeletable: R == null || (pt = R.deletion) === null || pt === void 0 ? void 0 : pt.is_deletable
					},
					premiumType: R == null ? void 0 : R.premium_type,
					fees: R == null ? void 0 : R.fees
				}, R.domain_move && {
					domainMove: {
						ineligibilityReasons: (ot = R.domain_move) === null || ot === void 0 ? void 0 : ot.ineligibility_reasons
					}
				}, R.actionable_metadata && {
					actionableMetadata: g(R.actionable_metadata)
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

			function g(h) {
				return h.map(R => ({
					accountContext: R.account_context,
					createdAt: R.created_at,
					expiresAt: R.expires_at,
					sentAt: R.sent_at,
					status: R.status,
					type: R.type
				}))
			}
			const b = {
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

			function w(h) {
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
				for (const X in h) {
					const ee = h[X],
						fe = me[ee];
					R.push(fe)
				}
				return R
			}
			const O = h => {
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
						nexusCategory: O(h.extensions.nexus_category),
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

			function C(h = {}) {
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

			function A(h) {
				const R = c.Py.concat(c.ui).reduce((me, X) => o({}, me, {
					[X]: []
				}), {});
				return h.forEach(me => {
					let X = S(me.registrar);
					X in R || (X = c.ui), et(me.name) && (X = "uk"), R[X].push(me)
				}), Object.keys(R).sort((me, X) => me.localeCompare(X)).map(me => ({
					registrar: me,
					domains: R[me]
				})).filter(me => me.domains.length > 0)
			}

			function S(h) {
				return h == null ? void 0 : h.toLowerCase().replace(/\s|,|\./g, "")
			}

			function G(h) {
				if (!h || !h.registrar) return "unknown";
				if (et(h.name)) return "uk";
				const R = S(h.registrar);
				return R in c.gM ? R : "unknown"
			}
			const ne = [];

			function ce(h) {
				return ne.some(R => h.endsWith("." + R))
			}

			function le(h) {
				return !h.isEnterpriseZone || !Array.isArray(h.entitlements) ? !1 : !!h.entitlements.find(({
					id: R,
					allocation: me
				}) => R === c.g5 && me.value === !0)
			}

			function Q(h) {
				var R;
				const me = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let X = !1,
					ee = null;
				return (R = h.registryStatuses) === null || R === void 0 || R.some(fe => {
					me.includes(fe) && (ee = fe, X = !0)
				}), [X, ee]
			}

			function W(h, R = !1) {
				if (!h) return [!1, m.keys.cannot_transfer_default];
				if (h.zone.status !== "active") return [!1, m.keys.cannot_transfer_zone_not_active];
				if (!h.isFullZone && !le(h)) return [!1, m.keys.cannot_transfer_zone_not_eligible];
				if (h.registrar === "Cloudflare") return [!1, m.keys.cannot_transfer_domain_on_cf];
				if (h.isAvailable) return [!1, m.keys.cannot_transfer_domain_available];
				if (!h.transferConditions) return [!1, m.keys.cannot_transfer_domain_transfer_conditions];
				if (!R && Pt(h == null ? void 0 : h.premiumType)) return [!1, m.keys.cannot_transfer_domain_premium];
				if (K(h)) return [!1, m.keys.cannot_transfer_domain_transfer_in_progress];
				let me;
				for (me in h.transferConditions)
					if (me !== "not_premium" && !h.transferConditions[me]) return [!1, m.keys.cannot_transfer_domain_transfer_conditions];
				if (ce(h.name)) return [!1, m.keys.cannot_transfer_domain_tld_not_supported];
				const [X, ee] = Q(h);
				return X && ee ? [!1, m.keys.cannot_transfer_domain_registry_status[ee]] : [!0, ""]
			}

			function K(h) {
				var R, me;
				return !!h.transferIn && !((R = h.transferConditions) === null || R === void 0 ? void 0 : R.not_started) && !!(et(h.name) || ((me = h.registryStatuses) === null || me === void 0 ? void 0 : me.includes(n.rj.PENDING_TRANSFER)))
			}

			function j(h) {
				return !!h.registrar && !!h.currentExpiration
			}

			function U(h, R = !1) {
				const [me] = W(h, R);
				return j(h) ? ue(h) ? n.M5.InProgressOrOnCF : me ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function D(h) {
				return h.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(h.transferIn.enter_auth_code) || !1
			}

			function B(h) {
				return h.registrar === "Cloudflare"
			}

			function $(h) {
				return !!(h == null ? void 0 : h.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function te(h) {
				return !!(h == null ? void 0 : h.includes(n.rj.PENDING_TRANSFER))
			}
			const re = "Invalid date";

			function ie(h) {
				return h.newExpiration === re ? "Unavailable" : h.newExpiration
			}

			function N(h) {
				return h.currentExpiration === re ? "Unavailable" : h.currentExpiration
			}

			function V(h) {
				return h.substring(h.indexOf("."))
			}

			function k(h = "") {
				return h.indexOf(".") !== -1 ? h.substring(0, h.indexOf(".")) : h
			}

			function H(h) {
				return h.map(R => R.name).map(R => V(R)).filter((R, me, X) => !X.includes(R, me + 1))
			}

			function ae(h) {
				if (c.no) return [!0, ""];
				if (!B(h)) return [!1, n.ok.NotOnCF];
				if (h.isCorLocked) return [!1, h.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (h.lastTransferredAt) {
					const R = l()(h.lastTransferredAt),
						me = l().duration(l()().diff(R)).as("days"),
						X = et(h.name);
					if (me < (X ? 1 : 60)) return [!1, X ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (h.createdAt) {
					const R = l()(h.createdAt);
					if (l().duration(l()().diff(R)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function pe(h) {
				return !!(c.Bc || h.transferOut)
			}

			function ue(h) {
				return oe(h) || B(h)
			}

			function _e(h) {
				return !oe(h) && B(h)
			}

			function oe(h) {
				return !h || h.lastKnownStatus === n.kd.PENDING_TRANSFER || h.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !B(h) && h.transferConditions && !h.transferConditions.not_started || !1
			}

			function we(h) {
				return !(ce(h.name) || h.transferConditions && !h.transferConditions.supported_tld)
			}

			function De(h) {
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

			function xe(h) {
				return l()(h.paymentExpiresAt).isBefore(l()())
			}

			function Ne(h) {
				return h.transferIn && h.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Je(h) {
				const R = ["CU", "KP", "IR", "SY"];
				return h.filter(me => !R.includes(me.code))
			}

			function Ye(h) {
				if (!!h) return `${h.charAt(0).toUpperCase()}${h.slice(1)}${h.charAt(h.length-1)==="."?"":"."}`
			}

			function Fe(h) {
				const R = {};
				for (const [me, X] of Object.entries(h)) {
					if (X && typeof X == "string") {
						Object.assign(R, {
							[me]: X.trim()
						});
						continue
					}
					Object.assign(R, {
						[me]: X
					})
				}
				return R
			}

			function Ke(h) {
				return l()(h).add(40, "days")
			}

			function Z(h) {
				const R = h.paymentExpiresAt || h.payment_expires_at,
					me = Ke(R);
				return l()().isBetween(R, me)
			}

			function he(h) {
				var R;
				return !(h == null ? void 0 : h.registryStatuses) || !Array.isArray(h == null ? void 0 : h.registryStatuses) && !(0, e.isString)(h == null ? void 0 : h.registryStatuses) ? !1 : (R = h.registryStatuses) === null || R === void 0 ? void 0 : R.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Le(h) {
				var R;
				return !(h == null ? void 0 : h.registryStatuses) || !Array.isArray(h == null ? void 0 : h.registryStatuses) && !(0, e.isString)(h == null ? void 0 : h.registryStatuses) ? !1 : (R = h.registryStatuses) === null || R === void 0 ? void 0 : R.includes(n.rj.PENDING_DELETE)
			}

			function We(h) {
				return [".us"].includes(h)
			}

			function dt(h) {
				return [".us"].includes(h)
			}

			function at(h) {
				switch (h) {
					case ".us":
						return ge();
					default:
						return []
				}
			}

			function Oe(h) {
				switch (h) {
					case ".us":
						return J;
					default:
						return {}
				}
			}
			const J = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function ge() {
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

			function Ce(h, R, me) {
				return R[R.length - 1][me] === h[me]
			}

			function ze(h) {
				return Boolean(Object.keys(h).length === 0)
			}

			function ke(h) {
				return l()().add(h, "year").format(I)
			}

			function Te({
				accountName: h
			}) {
				var R;
				const me = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((R = h.toLowerCase().match(me)) === null || R === void 0 ? void 0 : R[0]) || ""
			}

			function $e(h) {
				return !!h.match(_.default.email)
			}

			function lt(h) {
				return h === u.W7.PENDING_UPDATE
			}

			function it(h) {
				return h ? Object.values(u.wR).filter(R => R !== u.wR.OFFBOARDED).includes(h) : !1
			}

			function _t(h) {
				return h ? [u.wR.LOCKED, u.wR.ONBOARDED, u.wR.ONBOARDING_INITIATED, u.wR.PENDING_REGISTRY_LOCK, u.wR.PENDING_REGISTRY_UNLOCK, u.wR.PENDING_UNLOCK_APPROVAL].includes(h) : !1
			}

			function Et(h) {
				return h ? u.wR.UNLOCKED === h : !1
			}

			function yt(h) {
				return h ? u.wR.LOCKED === h : !1
			}

			function mt(h) {
				return h ? u.wR.PENDING_REGISTRY_LOCK === h : !1
			}

			function Ve(h) {
				return h ? [u.wR.PENDING_REGISTRY_UNLOCK, u.wR.PENDING_UNLOCK_APPROVAL].includes(h) : !1
			}

			function ft(h) {
				var R;
				return !1
			}

			function nt(h) {
				var R;
				return !1
			}

			function rt(h) {
				var R;
				return !1
			}

			function ut(h) {
				var R;
				return !1
			}

			function Se(h) {
				var R;
				return !1
			}

			function Y(h) {
				return Object.keys(u.wR).find(R => u.wR[R].toLowerCase() === h.toLowerCase())
			}

			function de(h) {
				var R;
				const me = (R = Y(h)) === null || R === void 0 ? void 0 : R.toLowerCase();
				return me ? m.keys.protection_status[me] : m.keys.protection_status.unknown
			}

			function ye(h) {
				return ["com", "net"].includes(h)
			}

			function Ie(h) {
				const R = (0, s.pu)(h);
				return ye(R) ? u.wR.PENDING_REGISTRY_LOCK : u.wR.LOCKED
			}

			function Re(h) {
				return (0, s.pu)(h) === "co" ? 5 : 10
			}

			function Ge(h, R) {
				return R ? 1 : (0, s.pu)(h) === "co" ? 5 : (0, s.pu)(h) === "org" ? 1 : 10
			}

			function et(h) {
				return (0, s.pu)(h) === "uk"
			}

			function wt(h) {
				return (0, s.pu)(h) === "us"
			}

			function vt(h) {
				return (0, s.pu)(h) === "ai"
			}

			function It(h) {
				return l()(h).isValid()
			}

			function Qe(h) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(h)
			}

			function Ot(h) {
				return !!(h == null ? void 0 : h.id)
			}

			function Mt(h) {
				return h ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(h) : !1
			}

			function At(h) {
				return h ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(h) : !1
			}

			function Rt(h) {
				var R;
				return (h == null ? void 0 : h.lastKnownStatus) ? (R = h.lastKnownStatus) === null || R === void 0 ? void 0 : R.includes("deletionIrredeemable") : !1
			}

			function Pt(h) {
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

			function ht(h) {
				var R, me;
				return !!(((R = h.policies) === null || R === void 0 || (me = R.suspension) === null || me === void 0 ? void 0 : me.parked) && h.policies.suspension.parkingReason)
			}

			function xt(h) {
				var R, me;
				return ht(h) && ((R = h.policies) === null || R === void 0 || (me = R.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function bt(h) {
				var R, me;
				return ht(h) && ((R = h.policies) === null || R === void 0 || (me = R.suspension) === null || me === void 0 ? void 0 : me.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function Dt(h) {
				var R;
				return !((R = h.domainMove) === null || R === void 0 ? void 0 : R.ineligibilityReasons.length)
			}

			function Bt(h) {
				var R, me;
				return !!((R = h.domainMove) === null || R === void 0 || (me = R.ineligibilityReasons) === null || me === void 0 ? void 0 : me.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Lt(h) {
				var R;
				return (R = h.actionableMetadata) === null || R === void 0 ? void 0 : R.find(me => me.type === n.wg.DOMAIN_MOVE)
			}

			function Ut(h) {
				const R = Lt(h);
				return (R == null ? void 0 : R.status) === "pending" && R.accountContext === n._5.GAINING
			}

			function jt(h) {
				const R = Lt(h);
				return (R == null ? void 0 : R.status) === "pending" && R.accountContext === n._5.LOSING
			}

			function Ft(h) {
				const R = V(h.name);
				return !c.Pf.includes(R)
			}

			function St(h) {
				return c.QZ.includes(h)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Bc: function() {
					return c
				},
				HG: function() {
					return oe
				},
				Hv: function() {
					return we
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
					return u
				},
				jk: function() {
					return _e
				},
				no: function() {
					return m
				},
				uY: function() {
					return s
				},
				ui: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
			const a = "Unknown",
				l = "unknown",
				u = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				_ = Object.keys(u),
				s = !0,
				c = (0, r.J8)("registrar_mock_transfer_out") || !1,
				m = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				o = "cf_registrar.enabled",
				i = "@abcABC1234567890123456",
				f = [".us"],
				d = [".travel", ".us", ".ong", ".ngo"],
				p = (0, e.BC)`/${"accountId"}`,
				T = (0, e.BC)`${p}/add-site`,
				I = (0, e.BC)`${p}/registrar`,
				E = (0, e.BC)`${I}/domains`,
				g = (0, e.BC)`${I}/action-center`,
				b = (0, e.BC)`${I}/domain/${"zoneName"}`,
				v = (0, e.BC)`${b}/configuration`,
				w = (0, e.BC)`${b}/contacts`,
				M = (0, e.BC)`${I}/pricing`,
				O = (0, e.BC)`${I}/protection`,
				P = (0, e.BC)`${I}/register`,
				L = (0, e.BC)`${P}/checkout`,
				C = (0, e.BC)`${P}/checkout/${"token"}`,
				A = (0, e.BC)`${P}/success`,
				S = (0, e.BC)`${I}/tlds`,
				G = (0, e.BC)`${I}/transfer`,
				ne = (0, e.BC)`${I}/transfer/${"zoneName"}`,
				ce = (0, e.BC)`/registrar/accounts/verify_email`,
				le = (0, e.BC)`/registrar/domains/verify_email`,
				Q = (0, e.BC)`/sign-up/registrar`,
				W = (0, e.BC)`${I}/verify-email`,
				K = (0, e.BC)`${p}/${"zoneName"}`,
				j = (0, e.BC)`${p}/domains`,
				U = (0, e.BC)`${j}/action-center`,
				D = (0, e.BC)`${j}/${"zoneName"}`,
				B = (0, e.BC)`${D}/configuration`,
				$ = (0, e.BC)`${D}/contacts`,
				te = (0, e.BC)`${j}/pricing`,
				re = (0, e.BC)`${j}/protection`,
				ie = (0, e.BC)`${j}/register`,
				N = (0, e.BC)`${ie}/checkout`,
				V = (0, e.BC)`${ie}/checkout/${"token"}`,
				k = (0, e.BC)`${ie}/success`,
				H = (0, e.BC)`${j}/tlds`,
				ae = (0, e.BC)`${j}/transfer`,
				pe = (0, e.BC)`${j}/transfer/${"zoneName"}`,
				ue = (0, e.BC)`${j}/verify-email`,
				_e = {
					addSite: T,
					domains: E,
					domainsActionCenter: g,
					domainsDomain: b,
					domainsDomainConfiguration: v,
					domainsDomainContacts: w,
					domainsPricing: M,
					domainsProtection: O,
					domainsRegister: P,
					domainsRegisterCheckout: L,
					domainsRegisterCheckoutToken: C,
					domainsRegisterSuccess: A,
					domainsTlds: S,
					domainsTransfer: G,
					domainsTransferZone: ne,
					registrar: I,
					registrarAccountsVerifyEmail: ce,
					registrarDomainsVerifyEmail: le,
					signup: Q,
					verifyEmail: W,
					zone: K
				},
				oe = {
					LEGACY_domains: j,
					LEGACY_domainsActionCenter: U,
					LEGACY_domainsDomain: D,
					LEGACY_domainsDomainConfiguration: B,
					LEGACY_domainsDomainContacts: $,
					LEGACY_domainsPricing: te,
					LEGACY_domainsProtection: re,
					LEGACY_domainsRegister: ie,
					LEGACY_domainsRegisterCheckout: N,
					LEGACY_domainsRegisterCheckoutToken: V,
					LEGACY_domainsRegisterSuccess: k,
					LEGACY_domainsTlds: H,
					LEGACY_domainsTransfer: ae,
					LEGACY_domainsTransferZone: pe,
					LEGACY_verifyEmail: ue
				},
				we = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				HO: function() {
					return s
				},
				NW: function() {
					return c
				},
				ZQ: function() {
					return l
				},
				b_: function() {
					return _
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");
			const a = m => {
					const n = m && m.accountFlags && m.accountFlags.data && m.accountFlags.data.registrar && m.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(o => o.trim()) : []
				},
				l = m => {
					var n, o, i;
					return ((n = m.accountFlags) === null || n === void 0 || (o = n.data) === null || o === void 0 || (i = o.registrar) === null || i === void 0 ? void 0 : i["registrar-managed"]) || !1
				},
				u = m => m.account ? m.account.email : "",
				_ = m => !1,
				s = m => _(m) && (0, e.oJ)((0, e.Zu)(m)),
				c = m => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: o
					} = m.registrar.registrations;
					return n && !(o.accepted_date || o.id || o.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(F, y, t) {
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
				l = t.n(a),
				u = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function _(i) {
				for (var f = 1; f < arguments.length; f++) {
					var d = arguments[f] != null ? Object(arguments[f]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(T) {
						return Object.getOwnPropertyDescriptor(d, T).enumerable
					})), p.forEach(function(T) {
						s(i, T, d[T])
					})
				}
				return i
			}

			function s(i, f, d) {
				return f = c(f), f in i ? Object.defineProperty(i, f, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[f] = d, i
			}

			function c(i) {
				var f = m(i, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function m(i, f) {
				if (typeof i != "object" || i === null) return i;
				var d = i[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(i, f || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i
			}({});

			function o(i, f, d) {
				if (!(f == null ? void 0 : f.name)) return null;
				l().sendEvent(i, _({
					domain: {
						name: f.name,
						premium: (0, u.Uy)(f == null ? void 0 : f.premiumType),
						paymentExpiresAt: r()(f == null ? void 0 : f.paymentExpiresAt).format()
					},
					category: "registrar"
				}, d))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				HX: function() {
					return s
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
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				u = t("../react/pages/home/members/utils.ts"),
				_ = t("../react/utils/translator.tsx");
			let s = function(g) {
				return g.UNKNOWN = "unknown", g.WORKERS = "workers", g.ACCESS_APPS = "access_apps", g.ACCESS_IDP = "access_ipd", g
			}({});
			const c = [{
				value: s.WORKERS,
				label_i18n: "policy.granular_resources.type.workers",
				scopeKeyPrefix: "com.cloudflare.edge.worker.script",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: s.ACCESS_APPS,
				label_i18n: "policy.granular_resources.type.access_apps",
				scopeKeyPrefix: "com.cloudflare.edge.access.app",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}, {
				value: s.ACCESS_IDP,
				label_i18n: "policy.granular_resources.type.access_idp",
				scopeKeyPrefix: "com.cloudflare.edge.access.identity-provider",
				scopeSubsetOfPrefix: "com.cloudflare.api.account"
			}];

			function m(g) {
				return {
					key: "com.cloudflare.edge.worker.script." + g.id,
					name: g.name + (g.environment ? ` (${g.environment})` : ""),
					type: s.WORKERS
				}
			}

			function n(g) {
				const b = g;
				return {
					key: "com.cloudflare.edge.access.app." + b.id,
					name: b.name,
					type: s.ACCESS_APPS
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

			function i(g) {
				const b = g,
					v = o[b.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + b.id,
					name: `${v||"Unknown Type"}${b.name?" - "+b.name:""}`,
					type: s.ACCESS_IDP
				}
			}
			const f = async (g, b, v) => b == s.WORKERS ? (await d(`/accounts/${g}/workers/scripts-search?name=${v}&perPage=10`)).body.result.map(w => ({
				id: w.id,
				name: w.service_name || w.script_name,
				environment: w.environment_name
			})).map(m) : b == s.ACCESS_APPS ? (await d(`/accounts/${g}/access/apps?name=${v}`)).body.result.map(n) : b == s.ACCESS_IDP ? (await d(`/accounts/${g}/access/identity_providers`)).body.result.map(i) : [];
			async function d(g) {
				try {
					return await (0, e.get)(g, {
						hideErrorAlert: !0
					})
				} catch (w) {
					var b, v;
					throw ((b = w.body) === null || b === void 0 ? void 0 : b.errors) ? w.body.errors[0].message : w.text ? w.text : ((v = w.response) === null || v === void 0 ? void 0 : v.statusText) ? w.response.statusText : "Unexpected error response"
				}
			}
			const p = async (g, b) => {
				const v = b.split("."),
					w = v.pop(),
					M = v.join(".");
				let O;
				switch (M) {
					case "com.cloudflare.edge.worker.script":
						const P = (await d(`/accounts/${g}/workers/scripts-search/${w}`)).body.result;
						return m({
							id: P.id,
							name: P.service_name || P.script_name,
							environment: P.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return O = await d(`/accounts/${g}/access/identity_providers/${w}`), i(O.body.result);
					case "com.cloudflare.edge.access.app":
						return O = await d(`/accounts/${g}/access/apps/${w}`), n(O.body.result)
				}
			}, T = {
				loading: !0,
				isDisabled: !0
			}, I = () => "production";

			function E(g) {
				const b = (0, u.vq)(g),
					[v, w] = (0, a.useState)(!0),
					[M, O] = (0, a.useState)(c.filter(P => b.find(L => L.meta.scopes === P.scopeKeyPrefix)).map(P => {
						const L = P.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							C = b.filter(A => A.meta.scopes === P.scopeKeyPrefix).find(A => !A.meta.visibility || A.meta.visibility !== "beta");
						return {
							value: P.value,
							label: (0, _.ZP)(P.label_i18n),
							state: L ? T : {
								loading: !1,
								isDisabled: !1
							},
							beta: !C
						}
					}));
				return (0, a.useEffect)(() => {
					(async () => {
						try {
							await f(g, s.ACCESS_APPS, ""), T.isDisabled = !1
						} catch (P) {
							P.startsWith("access.api.error.not_enabled") ? T.disableInfo = (0, _.ZP)("policy.granular_resources.type.access.not_enabled") : T.error = P
						}
						T.loading = !1, O([...M])
					})()
				}, []), (0, a.useEffect)(() => {
					const P = M.find(L => L.state.loading);
					w(!!P)
				}, [M]), {
					types: M,
					isLoading: v
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Ey: function() {
					return m
				},
				F4: function() {
					return T
				},
				Go: function() {
					return f
				},
				Lc: function() {
					return w
				},
				Np: function() {
					return o
				},
				Rl: function() {
					return i
				},
				Sb: function() {
					return d
				},
				Sw: function() {
					return v
				},
				Sz: function() {
					return b
				},
				Ti: function() {
					return M
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
				a = (0, e.BC)`${r}/members`,
				l = (0, e.BC)`${a}/invite`,
				u = (0, e.BC)`${a}/invite/${"memberId"}`,
				_ = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				s = (0, e.BC)`${a}/user-groups`,
				c = (0, e.BC)`${a}/user-groups/${"userGroupId"}`,
				m = "com.cloudflare.api.account",
				o = m + "." + "zone",
				i = o + ".",
				f = 100,
				d = 200,
				p = 5,
				T = 300,
				I = "INVITE_TOAST",
				E = "00000000000000000000000000000000",
				g = {
					account: r,
					members: a,
					groups: s,
					group: c,
					inviteMembers: l,
					editMember: u,
					addPolicy: _
				},
				b = {
					allow: "allow",
					deny: "deny"
				},
				v = {
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
				M = {
					accountId: "",
					effect: b.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Bz: function() {
					return c
				},
				SH: function() {
					return m
				},
				g5: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), f.forEach(function(d) {
						l(n, d, i[d])
					})
				}
				return n
			}

			function l(n, o, i) {
				return o = u(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function u(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(n, o || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.CLICK_USERGROUP_BETA_BUTTON = "click usergroup beta button", n.MEMBERS_TAB_NAVIGATE = "nagivate members tab", n
			}({});
			const c = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, a({}, o || {}))
				},
				m = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AX: function() {
					return g
				},
				Co: function() {
					return I
				},
				JP: function() {
					return E
				},
				Ld: function() {
					return i
				},
				YW: function() {
					return c
				},
				_k: function() {
					return f
				},
				c$: function() {
					return m
				},
				rC: function() {
					return M
				},
				vq: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function l(O) {
				for (var P = 1; P < arguments.length; P++) {
					var L = arguments[P] != null ? Object(arguments[P]) : {},
						C = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(L).filter(function(A) {
						return Object.getOwnPropertyDescriptor(L, A).enumerable
					})), C.forEach(function(A) {
						u(O, A, L[A])
					})
				}
				return O
			}

			function u(O, P, L) {
				return P = _(P), P in O ? Object.defineProperty(O, P, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[P] = L, O
			}

			function _(O) {
				var P = s(O, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function s(O, P) {
				if (typeof O != "object" || O === null) return O;
				var L = O[Symbol.toPrimitive];
				if (L !== void 0) {
					var C = L.call(O, P || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(O)
			}
			const c = () => l({}, a.Ti),
				m = () => l({}, a.Lc, {
					scopes: [c()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = O => O.map(P => ({
					scope: {
						key: P,
						objects: [{
							key: "*"
						}]
					}
				})),
				o = (O, P, L) => {
					var C;
					let A = [],
						S = [];
					const G = [],
						ne = [];
					O.scopes.forEach(Q => {
						if (Q.mode === a.Sw.all) L ? A.push({
							id: L
						}) : A.push({
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
							Q.effect === a.Sz.allow ? A.push(K) : S.push(K)
						} else if (Q.mode === a.Sw.zone) {
							const K = `${a.Rl}${Q.zoneId}`;
							Q.effect === a.Sz.allow ? G.push(K) : ne.push(K)
						} else if (Q.mode === a.Sw.granular && Q.granularResourceKey) {
							var W;
							const K = Q.granularProduct,
								U = `${(W=r.s_.find(D=>D.value===K))===null||W===void 0?void 0:W.scopeSubsetOfPrefix}.${P}`;
							A.push({
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
					}), G.length && (A = A.concat(n(G))), ne.length && (S = S.concat(n(ne)));
					const ce = (C = O.permission_groups) === null || C === void 0 ? void 0 : C.map(Q => ({
							id: Q
						})),
						le = [];
					return le.push({
						access: a.Sz.allow,
						permission_groups: ce,
						resource_groups: A
					}), S.length && le.push({
						access: a.Sz.deny,
						permission_groups: ce,
						resource_groups: S
					}), le
				},
				i = O => O.map(P => {
					var L;
					return {
						access: P.access,
						permission_groups: P.permission_groups.map(C => ({
							id: C.id
						})),
						resource_groups: (L = P.resource_groups) === null || L === void 0 ? void 0 : L.map(C => ({
							scope: {
								key: C.scope.key,
								objects: C.scope.objects
							},
							id: C.id
						}))
					}
				}),
				f = (O, P, L, C) => {
					const A = O.auto_accept;
					let S = [];
					return S = S.concat(o(O, P, L)), C && (S = S.concat(i(C))), {
						auto_accept: A,
						status: A ? "accepted" : "pending",
						policies: S
					}
				},
				d = O => {
					const P = O.split(".");
					return P[P.length - 1]
				},
				p = O => {
					var P, L;
					const C = O == null ? void 0 : O.access;
					let A = [],
						S = O == null || (P = O.resource_groups) === null || P === void 0 ? void 0 : P.map(G => {
							var ne;
							const ce = T(G);
							if ((G == null || (ne = G.meta) === null || ne === void 0 ? void 0 : ne.editable) === "false") return {
								effect: C,
								mode: a.Sw.all,
								accountId: d(G.id)
							};
							if (ce) {
								var le;
								return {
									effect: C,
									mode: a.Sw.granular,
									granularProduct: ce.value,
									granularResourceKey: G == null || (le = G.scope) === null || le === void 0 ? void 0 : le.key
								}
							} else if (!G.name) G.scope.key.startsWith(a.Rl) ? A.push({
								key: G.scope.key
							}) : A = A.concat(G.scope.objects);
							else return {
								effect: C,
								mode: a.Sw.domain_group,
								resourceGroupId: d(G.id)
							}
						}).filter(G => G);
					if ((L = A) === null || L === void 0 ? void 0 : L.length) {
						let G = A.map(ne => {
							const ce = d(ne.key);
							return {
								effect: C,
								mode: a.Sw.zone,
								zoneId: ce
							}
						});
						S = S.length ? G.concat(S) : G
					}
					return S
				},
				T = O => {
					var P, L, C, A;
					const S = O == null || (P = O.scope) === null || P === void 0 ? void 0 : P.key.split(".").slice(0, -1).join("."),
						G = O == null || (L = O.scope) === null || L === void 0 || (C = L.subset_of) === null || C === void 0 || (A = C[0]) === null || A === void 0 ? void 0 : A.key.split(".").slice(0, -1).join(".");
					return r.s_.find(ne => ne.scopeKeyPrefix === S && ne.scopeSubsetOfPrefix === G)
				},
				I = O => {
					if (!(O == null ? void 0 : O.length)) return [];
					const P = [];
					return O.forEach(L => {
						var C;
						(C = L.resource_groups) === null || C === void 0 || C.forEach(A => {
							var S, G;
							((S = A.scope) === null || S === void 0 || (G = S.key) === null || G === void 0 ? void 0 : G.startsWith(a.Rl)) && P.push(d(A.scope.key))
						})
					}), P
				},
				E = O => {
					if (!(O == null ? void 0 : O.length)) return [];
					const P = [];
					return O.forEach(L => {
						var C;
						(C = L.resource_groups) === null || C === void 0 || C.forEach(A => {
							var S, G;
							if (!((S = A.scope) === null || S === void 0 || (G = S.key) === null || G === void 0 ? void 0 : G.startsWith(a.Rl))) {
								var ne;
								const le = (ne = A.scope) === null || ne === void 0 ? void 0 : ne.objects;
								for (let Q = 0; Q < (le == null ? void 0 : le.length) && Q < a.r6; Q++) {
									var ce;
									((ce = le[Q].key) === null || ce === void 0 ? void 0 : ce.startsWith(a.Rl)) && P.push(d(le[Q].key))
								}
							}
						})
					}), P
				},
				g = O => {
					var P;
					if (!(O == null ? void 0 : O.length)) return null;
					const L = (P = O[0]) === null || P === void 0 ? void 0 : P.permission_groups.map(G => G.id);
					let C, A;
					O == null || O.forEach(G => {
						G.access === a.Sz.allow && (C = G), G.access === a.Sz.deny && (A = G)
					});
					let S = [];
					return C && (S = p(C)), A && (S = S.concat(p(A))), {
						permission_groups: L,
						scopes: S
					}
				},
				b = "permission-groups-",
				v = new Map,
				w = O => {
					if (!O) return [];
					const P = v.get(O);
					if (P) return P;
					const L = e.E.get(`${b}${O}`);
					return v.set(O, L), L
				},
				M = (O, P) => {
					const L = [];
					for (let C = 0; C < sessionStorage.length; C++) {
						const A = sessionStorage.key(C);
						(A == null ? void 0 : A.startsWith(b)) && L.push(A)
					}
					return L.length >= 5 && e.E.remove(L[0]), e.E.set(`${b}${O}`, P)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(F, y, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(F, y, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return s
				},
				L9: function() {
					return n
				},
				N3: function() {
					return m
				},
				zE: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var i = 1; i < arguments.length; i++) {
					var f = arguments[i] != null ? Object(arguments[i]) : {},
						d = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(f).filter(function(p) {
						return Object.getOwnPropertyDescriptor(f, p).enumerable
					})), d.forEach(function(p) {
						l(o, p, f[p])
					})
				}
				return o
			}

			function l(o, i, f) {
				return i = u(i), i in o ? Object.defineProperty(o, i, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[i] = f, o
			}

			function u(o) {
				var i = _(o, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function _(o, i) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var d = f.call(o, i || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(o)
			}
			let s = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.SEARCH_CONFIGS = "search hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o.CLICK_DISCORD = "click hyperdrive discord", o.CLICK_COMMUNITY = "click hyperdrive community", o
				}({}),
				c = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				m = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const n = (o, i = {}) => {
				r().sendEvent(o, a({}, i, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				KJ: function() {
					return M
				},
				_m: function() {
					return I
				},
				imagesEndpoints: function() {
					return oe
				},
				vQ: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(we) {
				for (var De = 1; De < arguments.length; De++) {
					var Me = arguments[De] != null ? Object(arguments[De]) : {},
						xe = Object.keys(Me);
					typeof Object.getOwnPropertySymbols == "function" && xe.push.apply(xe, Object.getOwnPropertySymbols(Me).filter(function(Ne) {
						return Object.getOwnPropertyDescriptor(Me, Ne).enumerable
					})), xe.forEach(function(Ne) {
						a(we, Ne, Me[Ne])
					})
				}
				return we
			}

			function a(we, De, Me) {
				return De = l(De), De in we ? Object.defineProperty(we, De, {
					value: Me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : we[De] = Me, we
			}

			function l(we) {
				var De = u(we, "string");
				return typeof De == "symbol" ? De : String(De)
			}

			function u(we, De) {
				if (typeof we != "object" || we === null) return we;
				var Me = we[Symbol.toPrimitive];
				if (Me !== void 0) {
					var xe = Me.call(we, De || "default");
					if (typeof xe != "object") return xe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (De === "string" ? String : Number)(we)
			}
			const _ = (0, e.BC)`/${"accountId"}/images`,
				s = (0, e.BC)`${_}/images`,
				c = (0, e.BC)`${_}/variants`,
				m = (0, e.BC)`${_}/keys`,
				n = (0, e.BC)`${_}/bundle-checkout-success`,
				o = (0, e.BC)`${s}/${"imageId"}`,
				i = (0, e.BC)`${s}/detail`,
				f = (0, e.BC)`${s}/edit`,
				d = (0, e.BC)`${c}/create`,
				p = (0, e.BC)`${c}/edit/${"variantId"}`,
				T = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				I = (0, e.BC)`${_}/sourcing-kit`,
				E = (0, e.BC)`${_}/delivery-zones`,
				g = (0, e.BC)`${E}/${"zoneId"}/settings`,
				b = (0, e.BC)`${_}/plans`,
				v = (0, e.BC)`${_}/manage-plan`,
				w = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				M = {
					root: _,
					images: s,
					variants: c,
					keys: m,
					legacyImageDetailPage: o,
					imageDetailPage: i,
					imageEditPage: f,
					bundleCheckoutSuccess: n,
					variantCreatePage: d,
					variantEditPage: p,
					sourcingKit: I,
					subscriptions: T,
					deliveryZones: E,
					deliveryZoneSettings: g,
					plansPage: b,
					managePlan: v
				},
				O = r({}, M, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: w
				}),
				P = (0, e.BC)`/accounts/${"accountId"}`,
				L = (0, e.BC)`${P}/images/v2`,
				C = (0, e.BC)`/zones/${"zoneId"}`,
				A = (0, e.BC)`${L}/sourcingkit`,
				S = (0, e.BC)`${A}/migrations`,
				G = (0, e.BC)`${A}/migrations/${"migrationId"}`,
				ne = (0, e.BC)`${A}/migrations/${"migrationId"}/logs`,
				ce = (0, e.BC)`${A}/migrations/${"migrationId"}/lifecycle/start`,
				le = (0, e.BC)`${A}/migrations/${"migrationId"}/lifecycle/abort`,
				Q = (0, e.BC)`${A}/migrations/${"migrationId"}/lifecycle`,
				W = (0, e.BC)`${A}/sources`,
				K = (0, e.BC)`${A}/sources/${"sourceId"}`,
				j = (0, e.BC)`${A}/sources/${"sourceId"}/connectivity`,
				U = (0, e.BC)`${A}/sources/connectivity_precheck`,
				D = (0, e.BC)`/zones?account.id=${"accountId"}`,
				B = {
					migrationList: S,
					migration: G,
					migrationLogs: ne,
					sourceList: W,
					migrationStart: ce,
					migrationAbort: le,
					migrationProgress: Q,
					source: K,
					sourceConnectivityCheck: j,
					sourceConnectivityPreCheck: U
				},
				$ = (0, e.BC)`/billing/upgrade-subscription`,
				te = (0, e.BC)`${P}/settings/transformations`,
				re = (0, e.BC)`${C}/settings/transformations`,
				ie = (0, e.BC)`${C}/settings/transformations_allowed_origins`,
				N = (0, e.BC)`${C}/settings/transformations_c2pa`,
				V = (0, e.BC)`${P}/settings/ut-billing`,
				k = (0, e.BC)`${C}`,
				H = (0, e.BC)`${C}/entitlements`,
				ae = (0, e.BC)`${C}/settings`,
				pe = (0, e.BC)`${C}/flags`,
				ue = (0, e.BC)`${C}/subscription`,
				oe = {
					sourcingKitEndpoints: B,
					deliveryZonesEndpoints: {
						transformationsConfigList: te,
						transformationsZoneConfig: re,
						allowedOriginsZoneConfig: ie,
						preserveContentCredentialsZoneConfig: N,
						upgradeSubscription: $,
						utBillingConfig: V
					},
					zones: {
						zones: D,
						zoneDetail: k,
						zoneSettings: ae,
						zoneEntitlements: H,
						zoneFlags: pe,
						zoneSubscription: ue
					}
				}
		},
		"../react/pages/images/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$4: function() {
					return l
				},
				GH: function() {
					return i
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
					return I
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
			const l = "sourcing_kit_enabled",
				u = "sourcing_kit_waitlist",
				_ = "images",
				s = "unified_images_enabled",
				c = "c2pa_polish",
				m = "CloudflareImages",
				n = E => !!(0, r.BF)(E, "images.transformations_enabled"),
				o = E => Boolean((0, r.BF)(E, "images.enabled")),
				i = E => {
					const g = (0, r.BF)(E, "images.storage");
					return typeof g == "number" && g > 0
				},
				f = E => Boolean((0, r.BF)(E, "contract.customer_enabled")),
				d = E => Boolean((0, e.oI)(E, _, l)),
				p = E => Boolean((0, a.Le)(E, m, l)),
				T = E => Boolean(getAccountFlipperFlag(E, m, s)),
				I = E => Boolean((0, a.Le)(E, m, c))
		},
		"../react/pages/internal-dns/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				jx: function() {
					return e
				},
				xk: function() {
					return u
				},
				xo: function() {
					return _
				},
				yt: function() {
					return l
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
				l = "bulk_internal_zones",
				u = "internal-dns",
				_ = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/magic/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				GF: function() {
					return f
				},
				H3: function() {
					return s
				},
				H8: function() {
					return u
				},
				J: function() {
					return p
				},
				Nz: function() {
					return c
				},
				UQ: function() {
					return I
				},
				Up: function() {
					return l
				},
				W8: function() {
					return m
				},
				Ws: function() {
					return E
				},
				Xg: function() {
					return o
				},
				Y_: function() {
					return i
				},
				_j: function() {
					return a
				},
				a4: function() {
					return d
				},
				jS: function() {
					return T
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
					registrationConnector: (0, e.BC)`/${"accountId"}/magic-wan/configuration/connectors/magic-networking/mconn/registration`,
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
				l = () => [{
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
				u = g => [{
					value: "low",
					label: g("setting.low")
				}, {
					value: "mid",
					label: g("setting.medium")
				}, {
					value: "high",
					label: g("setting.high")
				}],
				_ = g => [{
					value: "request",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				s = g => [{
					value: "unidirectional",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: g("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				c = "magic-transit",
				m = "magic-wan",
				n = "gre_tunnel",
				o = "ipsec_tunnel",
				i = "interconnect",
				f = 64,
				d = 1476,
				p = "mid",
				T = "reply",
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
		"../react/pages/magic/network-monitoring/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Yt: function() {
					return l
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
				l = 60
		},
		"../react/pages/magic/overview/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				VZ: function() {
					return l
				},
				lC: function() {
					return a
				},
				r8: function() {
					return r
				},
				uB: function() {
					return u
				}
			});
			var e = t("../react/pages/magic/constants.ts");
			const r = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				a = "user journey",
				l = {
					CREATE_SITE: "create new magic-wan site",
					CREATE_STATIC_ROUTE: "create new route",
					CREATE_TUNNEL: "create new tunnel"
				},
				u = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function(F, y, t) {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				gb: function() {
					return n
				},
				iP: function() {
					return O
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
					return C
				},
				x1: function() {
					return _
				},
				lW: function() {
					return c
				},
				UA: function() {
					return w
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return b
				},
				PJ: function() {
					return P
				},
				bK: function() {
					return T
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				l = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				u = t("../node_modules/@cloudflare/elements/es/index.js");
			const _ = () => r().createElement(s, null, r().createElement("svg", {
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
				s = (0, a.createComponent)(({
					theme: A
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
				c = () => r().createElement(m, null, r().createElement("svg", {
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
				m = (0, a.createComponent)(({
					theme: A
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
				n = () => r().createElement(o, null, r().createElement(u.Ei, {
					alt: "airplane",
					src: l,
					width: "85%"
				})),
				o = (0, a.createComponent)(({
					theme: A
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
				i = () => r().createElement(f, null, r().createElement("svg", {
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
					theme: A
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
					theme: A
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
				T = () => r().createElement(I, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				I = (0, a.createComponent)(({
					theme: A
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
				g = (0, a.createComponent)(({
					theme: A
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
				b = () => r().createElement(v, null, r().createElement("svg", {
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
					theme: A
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
				w = () => r().createElement(M, null, r().createElement("svg", {
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
					theme: A
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
				O = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				A2: function() {
					return s
				},
				He: function() {
					return u
				},
				N$: function() {
					return _
				},
				Qq: function() {
					return a
				},
				ST: function() {
					return l
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
				l = "cf-test",
				u = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				_ = c => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: c ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: c ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: c ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				s = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/page-rules/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				_: function() {
					return a
				},
				c: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(u) {
				return u.TEMPLATE_SELECTED = "template selected", u.TEMPLATE_PRODUCT_SELECTED = "template product selected", u.TEMPLATE_SAVE_DRAFT = "template save draft", u.TEMPLATE_CANCEL = "template cancel", u.TEMPLATE_DEPLOY = "template deploy", u
			}({});
			const l = (u, _) => r().sendEvent(u, {
				template_name: _
			})
		},
		"../react/pages/pages/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				A: function() {
					return T
				},
				C1: function() {
					return m
				},
				GF: function() {
					return L
				},
				HD: function() {
					return g
				},
				IK: function() {
					return u
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
					return W
				},
				QF: function() {
					return le
				},
				QV: function() {
					return w
				},
				Sx: function() {
					return b
				},
				Ub: function() {
					return ce
				},
				X3: function() {
					return o
				},
				bA: function() {
					return A
				},
				eO: function() {
					return i
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
					return C
				},
				iS: function() {
					return E
				},
				nY: function() {
					return v
				},
				w3: function() {
					return l
				},
				wJ: function() {
					return c
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
					return O
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
				l = "Allow Members - Cloudflare Pages",
				u = 58,
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
				s = "production",
				c = 2e3,
				m = 100,
				n = 350,
				o = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				f = 10,
				d = "_headers",
				p = "_redirects",
				T = "_routes.json",
				I = "_worker.js",
				E = "do-a-barrel-roll",
				g = [d, p, T, I],
				b = 1024 * 1024 * 25,
				v = 1e3,
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
				M = 1e5,
				O = 75e3,
				P = 2e5,
				L = 15e4,
				C = 3e3,
				A = 2250,
				S = "workers",
				G = "cloudflare_pages_build_caching",
				ne = 2;
			let ce = function(K) {
				return K[K.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", K[K.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", K[K.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", K[K.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", K[K.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", K[K.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", K
			}({});
			const le = 1,
				Q = 2,
				W = 2
		},
		"../react/pages/pages/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return a
				},
				_j: function() {
					return r
				},
				zE: function() {
					return u
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
				l = _ => `${_.subdomain}.pages.dev`,
				u = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				KO: function() {
					return s
				},
				L9: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), f.forEach(function(d) {
						l(n, d, i[d])
					})
				}
				return n
			}

			function l(n, o, i) {
				return o = u(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function u(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(n, o || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let s = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				c = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const m = (n, o = {}) => {
				r().sendEvent(n, a({}, o, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				QV: function() {
					return l
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
				l = {
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
		"../react/pages/r2/routes.ts": function(F, y, t) {
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
					return u
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
				l = s => {
					const c = "r2.cloudflarestorage.com";
					switch (s) {
						case "default":
							return c;
						case "eu":
							return `eu.${c}`;
						case "fedramp":
							return `fedramp.${c}`
					}
				},
				u = (s, c) => {
					const m = l(c);
					return `https://${s}.${m}`
				},
				_ = (s, c, m) => `${u(s,c)}/${m}`
		},
		"../react/pages/secrets-store/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hf: function() {
					return M
				},
				JJ: function() {
					return _
				},
				Js: function() {
					return l
				},
				LN: function() {
					return p
				},
				Nm: function() {
					return i
				},
				Oh: function() {
					return I
				},
				Q2: function() {
					return P
				},
				QF: function() {
					return T
				},
				RR: function() {
					return g
				},
				T_: function() {
					return O
				},
				Xm: function() {
					return s
				},
				Zl: function() {
					return L
				},
				dv: function() {
					return u
				},
				fp: function() {
					return o
				},
				jx: function() {
					return w
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
					return A
				},
				z3: function() {
					return C
				},
				zt: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const a = "secrets-store-account-level",
				l = "https://developers.cloudflare.com/secrets-store/",
				u = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				_ = 1,
				s = 10,
				c = 100;
			let m = function(S) {
					return S.NAME = "name", S
				}({}),
				n = function(S) {
					return S.NAME = "name", S
				}({});
			const o = {
				initialPaginationState: {
					page: _,
					perPage: s
				},
				initialSortState: {
					name: m.NAME,
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
			let i = function(S) {
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
				T = function(S) {
					return S.WORKERS = "workers", S
				}({});
			const I = "default_secrets_store";
			let E = function(S) {
				return S.CREATE = "create", S.EDIT = "edit", S.DUPLICATE = "duplicate", S.VIEW = "view", S
			}({});
			const g = "delete_operation",
				b = /^[a-zA-Z0-9_-]+$/,
				v = (S, G, ne, ce, le) => r.Ry().shape({
					name: r.Z_().required(S("secrets_store.form.create.errors.name.required")).matches(b, S("secrets_store.form.create.errors.name.invalid_characters")).max(255, S("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", S("secrets_store.form.create.errors.value.required"), Q => G || le ? !!Q : !0).max(1024, S("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, S("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(T), S("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				w = (S, G, ne, ce, le) => r.Ry().shape({
					secrets: r.IX().of(v(S, G, ne, ce, le))
				}),
				M = {
					name: "",
					value: "",
					scopes: T.WORKERS,
					comment: ""
				},
				O = "secrets-store.store.secret";
			let P = function(S) {
				return S.DUPLICATE = "duplicate", S.DEPLOY = "deploy", S
			}({});
			const L = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let C = function(S) {
					return S.CREATE_SECRET = "create secrets store secret", S.EDIT_SECRET = "edit secrets store secret", S.DUPLICATE_SECRET = "duplicate secrets store secret", S.DELETE_SECRET = "delete secrets store secret", S.BIND_SECRET = "open secrets store binding drawer", S
				}({}),
				A = function(S) {
					return S.SECRETS_STORE = "secrets store main", S.WORKERS_BINDING = "workers binding drawer", S
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(F, y, t) {
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
			let e = function(l) {
				return l.LOAD_SCAN_INFO = "load url scan information", l.INITIATE_URL_SCAN = "initiate url scan", l
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
			let a = function(l) {
				return l.LOAD_THREAT_EVENTS = "load threat events", l.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", l.THREAT_EVENTS_FILTERS = "threat events filters applied", l.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", l.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", l.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", l.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", l
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(F, y, t) {
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
					return l
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
				l = {
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
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				DC: function() {
					return f
				},
				Ff: function() {
					return s
				},
				Lz: function() {
					return i
				},
				RM: function() {
					return m
				},
				Ss: function() {
					return o
				},
				dR: function() {
					return u
				},
				gW: function() {
					return _
				},
				r5: function() {
					return c
				},
				y$: function() {
					return n
				},
				zs: function() {
					return l
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/analytics/resources/labels.ts");
			const l = ["block", "challenge", "jschallenge", "managed_challenge"],
				u = {
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
				s = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(a.e_).filter(d => d !== "unknown"),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securitySources"
				};
			let c = function(d) {
				return d.MITIGATED_BY_WAF = "mitigatedByWAF", d.SERVED_BY_CLOUDFLARE = "servedByCloudflare", d.SERVED_BY_ORIGIN = "servedByOrigin", d
			}({});
			const m = {
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
				i = "security-analytics-log-explorer";
			let f = function(d) {
				return d.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', d.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', d.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', d.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', d.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', d.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", d.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", d.OPEN_SIDE_DRAWER = "open security analytics side drawer", d.CLOSE_SIDE_DRAWER = "close security analytics side drawer", d
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Fj: function() {
					return c
				},
				kq: function() {
					return s
				},
				xr: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), f.forEach(function(d) {
						l(n, d, i[d])
					})
				}
				return n
			}

			function l(n, o, i) {
				return o = u(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function u(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(n, o || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const c = {
					[s.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[s.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[s.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[s.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[s.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[s.JWT_VALIDATION]: {
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
					[s.SETTINGS]: {
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
				m = ({
					name: n,
					category: o = "user journey",
					product: i = s.MAIN,
					productName: f,
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: i,
						productName: f
					}, d || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Fm: function() {
					return l
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
			let e = function(u) {
					return u.INITIAL_FETCH_SCORES = "view bots scores distribution", u.FETCH_CONFIGURATION = "view bots configuration page", u.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", u.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", u.UPDATE_SETTINGS = "update bots settings", u.DELETE_RULE = "delete bots ruleset", u.UPDATE_RULE = "update bots ruleset", u.FETCH_RULES = "view bots ruleset", u.CONFIGURE_BOT_MANAGEMENT = "view bots management", u.WAF_RULES_REDIRECT = "redirect waf rules", u.CHANGED_ZONE_SETTINGS = "change zone setting", u
				}({}),
				r = function(u) {
					return u.PROVIDED_TEMPLATE = "provided template link in detection card", u.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", u.USE_TEMPLATE = "use template", u.CREATE_FIREWALL_RULE = "create firewall rule", u.WAF_RULES = "waf rules", u
				}({});
			const a = "user journey",
				l = "Bots"
		},
		"../react/pages/security/overview/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AZ: function() {
					return l
				},
				BQ: function() {
					return u
				},
				Ht: function() {
					return a
				},
				Kx: function() {
					return e
				},
				NJ: function() {
					return s
				},
				S: function() {
					return r
				},
				oD: function() {
					return _
				}
			});
			let e = function(c) {
				return c.NAME = "description", c.SOURCE = "source", c.LAST_UPDATE = "lastUpdatedAt", c.ACTIVITY = "activity", c
			}({});
			const r = 5;
			let a = function(c) {
					return c.EXTERNAL_DOCUMENTATION = "external_documentation", c.LINK_TO_MANAGED = "link_to_managed_rules", c.LINK_TO_EVENTS = "link_to_security_events", c.LINK_TO_DDOS = "link_to_ddos", c.LINK_BOT_MGMT = "link_to_bot_mgmt", c.LINK_TO_AI_AUDIT = "link_to_ai_audit", c.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", c.LINK_TO_PAGE_SHIELD = "link_to_page_shield", c.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", c.LINK_TO_SECURITY_EVENTS = "link_to_security_events", c.LINK_TO_IP_RULE = "link_to_ip_rule", c.LINK_TO_CONFIGURATION = "link_to_configuration", c.LINK_TO_UPLOAD_SCHEMAS = "link_to_upload_schemas", c.LINK_TO_WEB_ASSETS = "link_to_web_assets", c.LINK_TO_DOMAINS = "link_to_domains", c
				}({}),
				l = function(c) {
					return c.LOAD_INSIGHTS = "load overview action items", c.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", c.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", c.CLICK_ACTION_INSIGHT = "click overview action item suggestion", c
				}({});
			const u = "security-overview-all-suggestions",
				_ = [{
					title: "overview.modules.tab",
					url: "/"
				}, {
					title: "overview.all_suggestions.tab",
					url: "/all"
				}];
			let s = function(c) {
				return c.ARCHIVED = "archived", c.FRAUD_AND_ACCOUNT_ABUSE = "fraud_account_abuse", c
			}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return L
				},
				FV: function() {
					return Q
				},
				KH: function() {
					return O
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
					return le
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
					return I
				},
				Sk: function() {
					return S
				},
				Ti: function() {
					return D
				},
				Uc: function() {
					return w
				},
				Uq: function() {
					return c
				},
				Uv: function() {
					return ce
				},
				V0: function() {
					return m
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
					return T
				},
				sV: function() {
					return C
				},
				sW: function() {
					return W
				},
				u8: function() {
					return f
				},
				v5: function() {
					return n
				},
				xg: function() {
					return ne
				},
				yd: function() {
					return b
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/page-shield/resources/types.ts");

			function l(B) {
				for (var $ = 1; $ < arguments.length; $++) {
					var te = arguments[$] != null ? Object(arguments[$]) : {},
						re = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(te).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(te, ie).enumerable
					})), re.forEach(function(ie) {
						u(B, ie, te[ie])
					})
				}
				return B
			}

			function u(B, $, te) {
				return $ = _($), $ in B ? Object.defineProperty(B, $, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[$] = te, B
			}

			function _(B) {
				var $ = s(B, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function s(B, $) {
				if (typeof B != "object" || B === null) return B;
				var te = B[Symbol.toPrimitive];
				if (te !== void 0) {
					var re = te.call(B, $ || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(B)
			}
			const c = 50,
				m = 9,
				n = "copy script url page shield",
				o = "disable page shield",
				i = "click documentation link",
				f = "enable page shield",
				d = "filter search page shield",
				p = "filter search view all page shield",
				T = "hover score tooltip page shield",
				I = "open alert modal page shield",
				E = "change pagination page shield",
				g = "close script modal page shield",
				b = "open script modal page shield",
				v = "select alert type page shield",
				w = "sort column page shield",
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
				O = {
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
						operators: [O.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [O.CONTAINS, O.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [O.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [O.INCLUDES, O.ENDS_WITH, O.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				L = l({}, P, {
					urls: l({}, P.urls, {
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
			let A = function(B) {
				return B.SECURITY_THREATS = "Security Threats", B.C2_BOTNET = "C2 & Botnet", B.CRYPTOMINING = "Cryptomining", B.MALWARE = "Malware", B.PHISHING = "Phishing", B.SPYWARE = "Spyware", B.DGA_DOMAINS = "DGA Domains", B.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", B
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
				ne = {
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
				ce = {
					[a.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[a.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[a.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[a.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[a.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				le = {
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
				W = {
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
				D = {
					[a.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[a.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[a.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				CP: function() {
					return l.CP
				},
				Ks: function() {
					return l.Ks
				},
				sV: function() {
					return l.sV
				},
				SI: function() {
					return l.SI
				},
				v5: function() {
					return l.v5
				},
				xg: function() {
					return l.xg
				},
				YC: function() {
					return l.YC
				},
				MC: function() {
					return l.MC
				},
				Xe: function() {
					return v.Xe
				},
				u8: function() {
					return l.u8
				},
				Oq: function() {
					return l.Oq
				},
				VT: function() {
					return l.VT
				},
				qc: function() {
					return l.qc
				},
				V0: function() {
					return l.V0
				},
				Lj: function() {
					return l.Lj
				},
				k2: function() {
					return v.k2
				},
				$g: function() {
					return v.$g
				},
				SJ: function() {
					return l.SJ
				},
				KH: function() {
					return l.KH
				},
				Mq: function() {
					return l.Mq
				},
				FV: function() {
					return l.FV
				},
				j$: function() {
					return l.j$
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
					return l.sW
				},
				Uq: function() {
					return l.Uq
				},
				yd: function() {
					return l.yd
				},
				QM: function() {
					return l.QM
				},
				Uc: function() {
					return l.Uc
				},
				R$: function() {
					return v.R$
				},
				Sk: function() {
					return l.Sk
				},
				gY: function() {
					return E
				},
				m: function() {
					return T
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
					return g
				},
				xq: function() {
					return ie
				},
				SQ: function() {
					return U
				},
				C0: function() {
					return D
				},
				av: function() {
					return O
				},
				W3: function() {
					return w
				},
				WO: function() {
					return A
				},
				Dk: function() {
					return ne
				},
				we: function() {
					return le
				},
				Yt: function() {
					return K
				},
				ex: function() {
					return W
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
					return B
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
				l = t("../react/pages/security/page-shield/resources/constants.ts");

			function u(N) {
				for (var V = 1; V < arguments.length; V++) {
					var k = arguments[V] != null ? Object(arguments[V]) : {},
						H = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(k).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(k, ae).enumerable
					})), H.forEach(function(ae) {
						_(N, ae, k[ae])
					})
				}
				return N
			}

			function _(N, V, k) {
				return V = s(V), V in N ? Object.defineProperty(N, V, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[V] = k, N
			}

			function s(N) {
				var V = c(N, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function c(N, V) {
				if (typeof N != "object" || N === null) return N;
				var k = N[Symbol.toPrimitive];
				if (k !== void 0) {
					var H = k.call(N, V || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(N)
			}
			const m = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", N => (a().sendEvent(l.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", N => (a().sendEvent(l.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				o = (N, V) => {
					var k;
					return JSON.stringify(u({}, V == null || (k = V[0]) === null || k === void 0 ? void 0 : k.parameters, N))
				};
			let i = "";
			const f = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (N, V, k) => (i = o(V, k), N)).on("success", N => (a().sendEvent(l.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), N)).on("error", (N, V, k) => o(V, k) === i ? N : {
					type: "noop"
				}),
				d = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				p = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", N => (a().sendEvent(l.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				T = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				I = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", N => (a().sendEvent(l.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), N)),
				E = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				g = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var b = t("../react/app/redux/normalizer.js"),
				v = t("../react/pages/security/page-shield/resources/types.ts");
			const w = N => N.pageShield.configuration,
				M = N => {
					var V;
					return (V = N.pageShield.configuration.data) === null || V === void 0 ? void 0 : V.enabled
				},
				O = N => {
					var V;
					return (V = w(N)) === null || V === void 0 ? void 0 : V.data
				},
				P = N => N.pageShield.scripts,
				L = N => N.pageShield.script,
				C = N => N.pageShield.connections,
				A = N => N.pageShield.connection,
				S = (0, b.P1)("pageShieldScripts", P),
				G = (0, b.P1)("pageShieldScript", L),
				ne = (0, b.P1)("pageShieldConnections", C),
				ce = (0, b.P1)("pageShieldConnection", A),
				le = (N, V) => N === v.Wq.SCRIPT_MONITOR ? S(V) || [] : ne(V) || [],
				Q = (N, V) => N === v.Wq.SCRIPT_MONITOR ? P(V) || [] : C(V) || [],
				W = (N, V) => N === v.Wq.SCRIPT_MONITOR ? G(V) : ce(V),
				K = N => N.pageShield.domainIntel,
				j = N => N.pageShield.whoIsRecord,
				U = (N, V, k) => {
					var H;
					const ae = Object.values(k).map(pe => ({
						key: pe,
						label: l.Uv[pe],
						score: N[pe]
					})).filter(pe => pe.score !== void 0 && pe.score <= V);
					return V === l.V0 && ae.length === 0 && ((H = N.js_integrity_score) !== null && H !== void 0 ? H : 100) <= V && ae.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ae
				},
				D = (N, V) => Object.values(V).filter(k => N[k] === !0).map(k => l.OV[k]),
				B = N => N === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				$ = (N, V) => N[v.$g.MagecartScore] !== void 0 && N[v.$g.MagecartScore] <= V || N[v.$g.MalwareScore] !== void 0 && N[v.$g.MalwareScore] <= V || N[v.$g.CryptominingScore] !== void 0 && N[v.$g.CryptominingScore] <= V || N.js_integrity_score !== void 0 && N.js_integrity_score <= V,
				te = ["cdn.jsdelivr.net", "unpkg.com"],
				re = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ie = N => {
					if (N.includes("@latest")) {
						const k = N.split("@latest");
						if (k.length != 2) return;
						const H = k[0].length,
							ae = H + "@latest".length;
						return [H, ae]
					}
					if (!!te.some(k => N.includes(k)))
						for (const k of re) {
							const H = N.match(k);
							if (!H) continue;
							const ae = H.index;
							if (ae === 0) return null;
							const pe = ae + H[0].length;
							return [ae, pe]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$g: function() {
					return m
				},
				I1: function() {
					return u
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return c
				},
				Xe: function() {
					return _
				},
				jf: function() {
					return s
				},
				k2: function() {
					return o
				}
			});

			function e(i) {
				for (var f = 1; f < arguments.length; f++) {
					var d = arguments[f] != null ? Object(arguments[f]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(T) {
						return Object.getOwnPropertyDescriptor(d, T).enumerable
					})), p.forEach(function(T) {
						r(i, T, d[T])
					})
				}
				return i
			}

			function r(i, f, d) {
				return f = a(f), f in i ? Object.defineProperty(i, f, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[f] = d, i
			}

			function a(i) {
				var f = l(i, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function l(i, f) {
				if (typeof i != "object" || i === null) return i;
				var d = i[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(i, f || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(i)
			}
			let u = function(i) {
				return i.BASE_URI = "base-uri", i.CHILD = "child-src", i.CONNECT = "connect-src", i.DEFAULT = "default-src", i.FONT = "font-src", i.FORM_ACTION = "form-action", i.FRAME = "frame-src", i.FRAME_ANCESTORS = "frame-ancestors", i.IMAGE = "img-src", i.MANIFEST = "manifest-src", i.MEDIA = "media-src", i.OBJECT = "object-src", i.SCRIPT = "script-src", i.SCRIPT_ELEM = "script-src-elem", i.STYLE = "style-src", i.STYLE_ELEM = "style-src-elem", i.WORKER = "worker-src", i.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", i
			}({});
			const _ = e({}, u, {
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
			let s = function(i) {
					return i.MONITOR = "monitor", i.POLICIES = "policies", i.SETTINGS = "settings", i
				}({}),
				c = function(i) {
					return i.SCRIPT_MONITOR = "script", i.CONNECTION_MONITOR = "connection", i.COOKIE_MONITOR = "cookie", i
				}({}),
				m = function(i) {
					return i.CryptominingScore = "cryptomining_score", i.MalwareScore = "malware_score", i.MagecartScore = "magecart_score", i
				}({}),
				n = function(i) {
					return i.DataflowScore = "dataflow_score", i.ObfuscationScore = "obfuscation_score", i
				}({}),
				o = function(i) {
					return i.DomainMalicious = "domain_reported_malicious", i.UrlMalicious = "url_reported_malicious", i
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(F, y, t) {
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
					return b
				},
				ji: function() {
					return f
				},
				pR: function() {
					return T
				},
				pV: function() {
					return v
				},
				rj: function() {
					return g
				},
				yR: function() {
					return w
				},
				zf: function() {
					return E
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				u = t("../react/utils/translator.tsx"),
				_ = t("../react/pages/security/resources/types.ts"),
				s = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				c = t("../node_modules/@cloudflare/elements/es/index.js");

			function m(M) {
				for (var O = 1; O < arguments.length; O++) {
					var P = arguments[O] != null ? Object(arguments[O]) : {},
						L = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(P).filter(function(C) {
						return Object.getOwnPropertyDescriptor(P, C).enumerable
					})), L.forEach(function(C) {
						n(M, C, P[C])
					})
				}
				return M
			}

			function n(M, O, P) {
				return O = o(O), O in M ? Object.defineProperty(M, O, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[O] = P, M
			}

			function o(M) {
				var O = i(M, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function i(M, O) {
				if (typeof M != "object" || M === null) return M;
				var P = M[Symbol.toPrimitive];
				if (P !== void 0) {
					var L = P.call(M, O || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(M)
			}
			const f = 10;
			let d = function(M) {
					return M.MTLS_ACCESS = "mTLS-enforced authentication", M.ZONE_LOCKDOWN = "Zone lockdown", M.USER_AGENT = "User agent blocking", M.EMAIL_VALIDITY = "Disposable email checks", M.IP_BASED = "IP-based rule", M.GEOGRAPHY_BASE = "Geography-based rule", M
				}({}),
				p = function(M) {
					return M.LEAKED_CREDENTIALS = "Leaked Credentials Checks", M
				}({});
			const T = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				I = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: d.GEOGRAPHY_BASE,
					trackedEvent: T.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: d.IP_BASED,
					trackedEvent: T.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: d.USER_AGENT,
					trackedEvent: T.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: d.ZONE_LOCKDOWN,
					trackedEvent: T.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				E = {
					[_.X.UI_SECTION]: M => ({
						[d.MTLS_ACCESS]: {
							ruleName: d.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${M.account.id}/${M.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[d.ZONE_LOCKDOWN]: {
							ruleName: d.ZONE_LOCKDOWN,
							displayName: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [c.ZC, e.QV],
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
							displayName: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[d.IP_BASED]: {
							ruleName: d.IP_BASED,
							displayName: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [c.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${M.account.id}/configurations/lists`
								}]
							})
						},
						[d.USER_AGENT]: {
							ruleName: d.USER_AGENT,
							displayName: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: l().createElement(u.cC, {
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
							displayName: l().createElement(u.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: l().createElement(u.cC, {
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
				g = {
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
							displayName: l().createElement(u.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: l().createElement(u.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let b = function(M) {
				return M.DISCOVERY = "discovery", M.SEQUENCES = "sequences", M.SCHEMA_VALIDATION = "schema-validation", M.SETTINGS = "settings", M.API_RULES = "api-rules", M.UPGRADE = "upgrade", M
			}({});
			const v = m({}, s.g, {
				[r.df.HttpRequestFirewallManaged]: m({}, s.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: m({}, s.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: m({}, s.g[r.df.HttpRateLimit], {
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
			let w = function(M) {
				return M.APP_SEC_MVP = "app-security-navigation-mvp", M.APP_SEC_SETTINGS_UI = "new-security-settings-ui", M
			}({})
		},
		"../react/pages/security/resources/types.ts": function(F, y, t) {
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
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				j: function() {
					return c
				},
				y: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(m) {
				for (var n = 1; n < arguments.length; n++) {
					var o = arguments[n] != null ? Object(arguments[n]) : {},
						i = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(o).filter(function(f) {
						return Object.getOwnPropertyDescriptor(o, f).enumerable
					})), i.forEach(function(f) {
						l(m, f, o[f])
					})
				}
				return m
			}

			function l(m, n, o) {
				return n = u(n), n in m ? Object.defineProperty(m, n, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[n] = o, m
			}

			function u(m) {
				var n = _(m, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function _(m, n) {
				if (typeof m != "object" || m === null) return m;
				var o = m[Symbol.toPrimitive];
				if (o !== void 0) {
					var i = o.call(m, n || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(m)
			}
			let s = function(m) {
				return m.CLICK_OPT_IN = "click opt in security navigation", m.CLICK_OPT_IN_BUTTON = "click opt in button", m.CLICK_OPT_OUT_BUTTON = "click opt out button", m.CLICK_NEXT_STEP = "click opt in next step", m.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", m.DISPLAY_MODAL = "display opt in modal", m.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", m.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", m.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", m
			}({});
			const c = (m, n = {}) => {
				r().sendEvent(m, a({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$y: function() {
					return d
				},
				Ai: function() {
					return n
				},
				B: function() {
					return m
				},
				BT: function() {
					return u
				},
				CK: function() {
					return c
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
					return l
				},
				YO: function() {
					return T
				},
				_c: function() {
					return I
				},
				je: function() {
					return f
				},
				ll: function() {
					return _
				},
				qD: function() {
					return s
				},
				tw: function() {
					return i
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async E => {
				var g, b;
				const v = await (0, e.get)(`/zones/${E}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((g = v == null ? void 0 : v.body) === null || g === void 0 || (b = g.result) === null || b === void 0 ? void 0 : b.value) === "enabled"
			}, l = async (E, g) => (await (0, e.post)(`/zones/${E}/content-upload-scan/${g?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), g), u = async E => {
				var g;
				const b = await (0, e.get)(`/zones/${E}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((g = b == null ? void 0 : b.body) === null || g === void 0 ? void 0 : g.result) || []
			}, _ = async (E, g) => {
				var b;
				const v = await (0, e.post)(`/zones/${E}/content-upload-scan/payloads`, {
					body: [g]
				});
				return (b = v == null ? void 0 : v.body) === null || b === void 0 ? void 0 : b.result
			}, s = async (E, g) => (await (0, e.del)(`/zones/${E}/content-upload-scan/payloads/${g}`, {
				hideErrorAlert: !0
			}), g), c = async E => {
				var g;
				const b = await (0, e.get)(`/zones/${E}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((g = b == null ? void 0 : b.body) === null || g === void 0 ? void 0 : g.pii_detection_enabled)
			}, m = async (E, g) => (await (0, e.put)(`/zones/${E}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: g
				}
			}), g), n = async E => {
				var g, b;
				const v = await (0, e.get)(`/zones/${E}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((g = v == null ? void 0 : v.body) === null || g === void 0 || (b = g.result) === null || b === void 0 ? void 0 : b.enabled)
			}, o = async (E, g) => {
				var b, v;
				const w = await (0, e.post)(`/zones/${E}/leaked-credential-checks`, {
					body: {
						enabled: g
					}
				});
				return !!((b = w == null ? void 0 : w.body) === null || b === void 0 || (v = b.result) === null || v === void 0 ? void 0 : v.enabled)
			}, i = async E => {
				var g;
				const b = await (0, e.get)(`/zones/${E}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (g = b == null ? void 0 : b.body) === null || g === void 0 ? void 0 : g.result
			}, f = async (E, g) => {
				var b;
				const v = await (0, e.post)(`/zones/${E}/leaked-credential-checks/detections`, {
					body: g
				});
				return (b = v == null ? void 0 : v.body) === null || b === void 0 ? void 0 : b.result
			}, d = async (E, g) => (await (0, e.del)(`/zones/${E}/leaked-credential-checks/detections/${g}`, {
				hideErrorAlert: !0
			}), g), p = async (E, g) => {
				await (0, e.put)(`/zones/${E}/security-center/securitytxt`, {
					body: g
				})
			}, T = async E => {
				await (0, e.del)(`/zones/${E}/security-center/securitytxt`)
			}, I = async E => (await (0, e.get)(`/zones/${E}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(F, y, t) {
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
					return T
				},
				d7: function() {
					return p
				},
				Oz: function() {
					return b
				},
				Np: function() {
					return G
				},
				WR: function() {
					return m
				},
				bE: function() {
					return ne
				},
				u_: function() {
					return i
				},
				pf: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t("webpack/sharing/consume/default/react-redux/react-redux"),
				u = t("../react/pages/security/settings/resources/index.ts"),
				_ = t("../react/common/hooks/useZoneEntitlement.ts"),
				s = t("../../../../node_modules/yup/es/index.js"),
				c = t("../react/utils/translator.tsx");
			const m = () => (0, l.useSelector)(u.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				o = () => !!useZoneEntitlement(n),
				i = () => {
					const {
						t: W
					} = (0, c.QT)(), K = s.Z_().required(W("common.field_is_required")).max(24, W("labels.apply.form.name.error.max_characters")).matches(u.DG, W("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", W("labels.apply.form.name.error.cf_forbidden"), D => !u.aW.test(D)), j = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: D => s.Ry().shape({
							[u.n5.NAME]: D ? s.Z_() : K,
							[u.n5.DESCRIPTION]: D ? s.Z_().optional() : s.Z_().max(150, W("labels.apply.form.description.error.max_characters"))
						})
					}, U = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[u.N2.NAME]: "",
							[u.N2.SOURCE]: u.W3,
							[u.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => s.Ry().shape({
							[u.N2.NEW_LABEL_NAME]: K
						})
					};
					return {
						LABELS_APPLY_FORM: j,
						EDIT_LABELS_MODAL_FORM: U
					}
				},
				f = ({
					modalHeaderFixedHeight: W = 62,
					modalDefaultPaddings: K = 16
				} = {}) => {
					const j = (0, a.useRef)(null),
						U = (0, a.useRef)(null),
						[D, B] = (0, a.useState)(0),
						[$, te] = (0, a.useState)(0),
						re = `calc(100vh - ${D}px - ${$}px - ${K}px)`,
						[ie, N] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const V = () => {
							var k, H, ae, pe;
							const ue = j == null || (k = j.current) === null || k === void 0 ? void 0 : k.offsetHeight,
								_e = U == null || (H = U.current) === null || H === void 0 ? void 0 : H.offsetHeight,
								oe = ((ae = ue) !== null && ae !== void 0 ? ae : 0) + W,
								we = (pe = _e) !== null && pe !== void 0 ? pe : 0;
							B(oe), te(we)
						};
						return V(), window.addEventListener("resize", V), () => window.removeEventListener("resize", V)
					}, []), {
						searchTerm: ie,
						setSearchTerm: N,
						scrollableSectionMaxHeight: re,
						topMenuRef: j,
						bottomMenuRef: U
					}
				},
				d = W => {
					const K = m(),
						j = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${W}`,
							queryFn: () => (0, r.JP)(W),
							enabled: K
						}),
						D = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${W}`,
							queryFn: () => (0, r.BT)(W),
							enabled: K && !!(U == null ? void 0 : U.data)
						}),
						B = (0, e.useMutation)({
							mutationFn: async ({
								enabled: re
							}) => await (0, r.X2)(W, re),
							onSuccess: re => {
								j.setQueryData([`content-scanning-enabled-${W}`], re)
							}
						}),
						$ = (0, e.useMutation)({
							mutationFn: re => (0, r.ll)(W, re),
							onSuccess: re => {
								j.setQueryData([`content-scanning-detections-${W}`], re)
							}
						}),
						te = (0, e.useMutation)({
							mutationFn: re => (0, r.qD)(W, re),
							onSuccess: re => {
								var ie;
								const N = (ie = j.getQueryData(`content-scanning-detections-${W}`)) !== null && ie !== void 0 ? ie : [];
								j.setQueryData([`content-scanning-detections-${W}`], N.filter(({
									id: V
								}) => V !== re))
							}
						});
					return {
						entitled: K,
						loading: U.isLoading || D.isLoading,
						error: U.isError || D.isError,
						enabled: {
							data: U.data,
							isToggling: B.isLoading,
							toggleEnabled: async re => B.mutateAsync({
								enabled: re
							})
						},
						detections: {
							data: D.data,
							add: $.mutateAsync,
							delete: te.mutateAsync,
							loading: $.isLoading || te.isLoading
						}
					}
				},
				p = () => {
					const W = (0, l.useSelector)(u.cN),
						K = (0, l.useSelector)(u.bH),
						j = (0, l.useSelector)(u.P3),
						U = (0, l.useSelector)(u.Ri);
					return {
						hasEditPermission: W,
						isEnabled: j && (K.hasSimilarLeaked || K.hasUsernameAndPasswordLeaked || U)
					}
				},
				T = W => {
					const K = p(),
						j = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${W}`,
							queryFn: () => (0, r.Ai)(W),
							enabled: !!K.isEnabled,
							retry: 1
						}),
						D = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${W}`,
							queryFn: () => (0, r.tw)(W),
							enabled: !!K.isEnabled && !!(U == null ? void 0 : U.data)
						}),
						B = (0, e.useMutation)({
							mutationFn: ({
								enabled: re
							}) => (0, r.O_)(W, re),
							onSuccess: re => {
								j.setQueryData([`leaked-credentials-enabled-${W}`], re)
							}
						}),
						$ = (0, e.useMutation)({
							mutationFn: async re => await (0, r.je)(W, re),
							onSuccess: re => {
								var ie;
								const N = (ie = j.getQueryData(`leaked-credentials-detections-${W}`)) !== null && ie !== void 0 ? ie : [];
								j.setQueryData([`leaked-credentials-detections-${W}`], [...N, re])
							}
						}),
						te = (0, e.useMutation)({
							mutationFn: re => (0, r.$y)(W, re),
							onSuccess: re => {
								var ie;
								const N = (ie = j.getQueryData(`leaked-credentials-detections-${W}`)) !== null && ie !== void 0 ? ie : [];
								j.setQueryData([`leaked-credentials-detections-${W}`], N.filter(({
									id: V
								}) => V !== re))
							}
						});
					return {
						entitled: K.isEnabled,
						hasEditPermissions: K.hasEditPermission,
						loading: U.isLoading || D.isLoading,
						error: U.isError || U.isError,
						enabled: {
							data: U.data,
							isToggling: B.isLoading,
							toggleEnabled: async re => B.mutateAsync({
								enabled: re
							})
						},
						detections: {
							data: D.data,
							add: $.mutateAsync,
							delete: te.mutateAsync,
							loading: $.isLoading || te.isLoading
						}
					}
				};
			var I = t("../react/common/utils/useQueryCache.ts");
			const E = "security-txt",
				g = {
					securityTxt: ({
						zoneId: W
					}) => [E, W]
				},
				b = W => (0, e.useQuery)({
					queryKey: g.securityTxt({
						zoneId: W
					}),
					queryFn: () => (0, r._c)(W),
					select: K => K.result
				}),
				v = W => {
					const {
						invalidate: K
					} = (0, I.o)(g.securityTxt({
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
					} = (0, I.o)(g.securityTxt({
						zoneId: W
					}));
					return (0, e.useMutation)({
						mutationFn: j => (0, r.F3)(W, j),
						onSuccess: async () => {
							await K(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var M = t("../../../../node_modules/lodash/isEqual.js"),
				O = t.n(M),
				P = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function L(W) {
				for (var K = 1; K < arguments.length; K++) {
					var j = arguments[K] != null ? Object(arguments[K]) : {},
						U = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(j).filter(function(D) {
						return Object.getOwnPropertyDescriptor(j, D).enumerable
					})), U.forEach(function(D) {
						C(W, D, j[D])
					})
				}
				return W
			}

			function C(W, K, j) {
				return K = A(K), K in W ? Object.defineProperty(W, K, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[K] = j, W
			}

			function A(W) {
				var K = S(W, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function S(W, K) {
				if (typeof W != "object" || W === null) return W;
				var j = W[Symbol.toPrimitive];
				if (j !== void 0) {
					var U = j.call(W, K || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(W)
			}
			const G = W => {
					const {
						queryKey: K,
						zoneId: j
					} = (0, P.hL)(W), {
						isLoading: U,
						isError: D,
						isSuccess: B,
						data: $,
						refetch: te,
						isRefetching: re
					} = (0, e.useQuery)({
						queryKey: K,
						queryFn: () => P.Mi.getLabels(L({
							zoneId: j
						}, W)),
						onSuccess: () => {
							var ie;
							const N = W == null || (ie = W.filters) === null || ie === void 0 ? void 0 : ie.source;
							(N === u.LABEL_SOURCES.MANAGED || N === u.LABEL_SOURCES.USER) && (0, u.Tf)({
								name: u.QJ.FILTER_USER_MANAGED_LABELS,
								product: u.Iv.SECURITY_SETTINGS,
								pageName: u.R.LABELS_LIST,
								type: N
							})
						}
					});
					return {
						data: $ == null ? void 0 : $.result,
						errors: $ == null ? void 0 : $.errors,
						paginationData: $ == null ? void 0 : $.result_info,
						isLoading: U,
						isError: D,
						isSuccess: B,
						refetch: te,
						isRefetching: re
					}
				},
				ne = ({
					labels: W,
					preselectedLabels: K
				}) => {
					const {
						USER: j,
						MANAGED: U
					} = u.LABEL_SOURCES, [D, B] = (0, a.useState)({
						[j]: [],
						[U]: []
					}), [$, te] = (0, a.useState)(new Set), re = $.size > 0, [ie, N] = (0, a.useState)(!1), V = pe => {
						te(ue => {
							const _e = new Set(ue);
							return _e.has(pe.name) ? _e.delete(pe.name) : _e.add(pe.name), _e
						})
					}, k = pe => $.has(pe.name), H = (pe, ue) => {
						const _e = k(pe) ? 1 : 0;
						return (k(ue) ? 1 : 0) - _e
					}, ae = pe => {
						B(ue => ({
							[j]: [...pe ? pe[j] : ue[j]].sort(H),
							[U]: [...pe ? pe[U] : ue[U]].sort(H)
						}))
					};
					return (0, a.useEffect)(() => {
						if (W && !ie) {
							if (K) {
								const pe = new Set;
								W.forEach(ue => {
									K.some(_e => O()(_e, ue)) && pe.add(ue.name)
								}), te(pe)
							}
							N(!0)
						}
					}, [W, K, ie]), (0, a.useEffect)(() => {
						if (W && ie) {
							const pe = W.reduce((_e, oe) => (oe.source === j ? _e[j].push(oe) : oe.source === U && _e[U].push(oe), _e), {
									[j]: [],
									[U]: []
								}),
								ue = {
									[j]: pe[j].sort(H),
									[U]: pe[U].sort(H)
								};
							B(ue)
						}
					}, [j, U, W, ie]), {
						userAndManagedLabels: D,
						setUserAndManagedLabels: B,
						toggleSelectedLabel: V,
						isLabelSelected: k,
						sortLabelsBySelectedStatus: ae,
						hasLabelsSelected: re
					}
				};
			var ce = t("../react/app/redux/index.ts"),
				le = t("../react/pages/security/settings/resources/selectors.ts");
			const Q = (W = "") => {
				const K = (0, ce.p4)(le.Xs),
					j = K && (W == null ? void 0 : W.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: K,
					hasDeprecatedParameter: j
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				FQ: function() {
					return c.FQ
				},
				Iv: function() {
					return m.Iv
				},
				M: function() {
					return c.M
				},
				Np: function() {
					return c.Np
				},
				Oz: function() {
					return c.Oz
				},
				QJ: function() {
					return m.QJ
				},
				R: function() {
					return m.R
				},
				Tf: function() {
					return m.Tf
				},
				WR: function() {
					return c.WR
				},
				Xs: function() {
					return m.Xs
				},
				Xu: function() {
					return c.Xu
				},
				ZF: function() {
					return m.ZF
				},
				bE: function() {
					return c.bE
				},
				bH: function() {
					return m.bH
				},
				dC: function() {
					return m.dC
				},
				eC: function() {
					return m.eC
				},
				m8: function() {
					return m.m8
				},
				pf: function() {
					return c.pf
				},
				ui: function() {
					return m.ui
				},
				vc: function() {
					return m.vc
				},
				w: function() {
					return m.w
				},
				zF: function() {
					return m.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/app/components/Forbidden.jsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				l = t.n(a),
				u = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				_ = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(_),
				c = t("../react/pages/security/settings/hooks/index.ts"),
				m = t("../react/pages/security/settings/resources/index.ts");
			const n = l().lazy(() => Promise.all([t.e(16691), t.e(9616), t.e(12174), t.e(1091), t.e(42290), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(2868), t.e(5756), t.e(83276), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				o = () => {
					const {
						t: i
					} = (0, _.useI18n)(), f = (0, e.xk)("waf");
					return l().createElement(u.T3, {
						parentPageLabel: i("navigation.zone.security"),
						title: i("navigation.zone.security.settings"),
						type: "narrow"
					}, f.read ? l().createElement(n, null) : l().createElement(r.Z, null))
				};
			y.ZP = o
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(F, y, t) {
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
				a = t("../react/common/utils/useQueryCache.ts"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				u = t("../react/common/hooks/useAccountId.ts"),
				_ = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const c = {
				labels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var m = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				o = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(v, w) {
				if (v == null) return {};
				var M = f(v, w),
					O, P;
				if (Object.getOwnPropertySymbols) {
					var L = Object.getOwnPropertySymbols(v);
					for (P = 0; P < L.length; P++) O = L[P], !(w.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(v, O) || (M[O] = v[O]))
				}
				return M
			}

			function f(v, w) {
				if (v == null) return {};
				var M = {},
					O = Object.keys(v),
					P, L;
				for (L = 0; L < O.length; L++) P = O[L], !(w.indexOf(P) >= 0) && (M[P] = v[P]);
				return M
			}

			function d(v) {
				for (var w = 1; w < arguments.length; w++) {
					var M = arguments[w] != null ? Object(arguments[w]) : {},
						O = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), O.forEach(function(P) {
						p(v, P, M[P])
					})
				}
				return v
			}

			function p(v, w, M) {
				return w = T(w), w in v ? Object.defineProperty(v, w, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[w] = M, v
			}

			function T(v) {
				var w = I(v, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function I(v, w) {
				if (typeof v != "object" || v === null) return v;
				var M = v[Symbol.toPrimitive];
				if (M !== void 0) {
					var O = M.call(v, w || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(v)
			}
			const E = v => {
					const w = (0, e.p4)(r.Cu),
						M = (0, u.F)(),
						O = b.labels(d({
							accountId: M,
							zoneId: w
						}, v ? d({}, v) : {})),
						P = (0, a.o)(O);
					return d({
						zoneId: w,
						queryKey: O,
						batchInvalidateLabels: async () => {
							await P.batchInvalidate({
								queryKeysToPredicateInvalidate: [l.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, P)
				},
				g = {
					getLabels: async v => {
						var w, M, O, P;
						let {
							zoneId: L,
							hideErrorAlert: C = !0
						} = v, A = i(v, ["zoneId", "hideErrorAlert"]);
						return (await _.get(c.labels.toUrl({
							zoneId: L
						}), {
							parameters: {
								page: A == null ? void 0 : A.page,
								per_page: A == null ? void 0 : A.per_page,
								with_mapped_resource_counts: A == null ? void 0 : A.with_mapped_resource_counts,
								filter: A == null || (w = A.filters) === null || w === void 0 ? void 0 : w.search,
								source: (0, n.sQ)(A == null || (M = A.filters) === null || M === void 0 ? void 0 : M.source),
								order: A == null || (O = A.sort) === null || O === void 0 ? void 0 : O.id,
								direction: (A == null ? void 0 : A.sort) ? (A == null || (P = A.sort) === null || P === void 0 ? void 0 : P.desc) ? o.Sr.desc : o.Sr.asc : void 0
							},
							hideErrorAlert: C
						})).body
					},
					getLabel: async v => {
						let {
							zoneId: w,
							labelName: M,
							hideErrorAlert: O = !0
						} = v, P = i(v, ["zoneId", "labelName", "hideErrorAlert"]);
						const L = (0, n.mm)(M) ? c.managedLabel.toUrl({
							zoneId: w,
							labelName: M
						}) : c.userLabel.toUrl({
							zoneId: w,
							labelName: M
						});
						return (await _.get(L, {
							parameters: {
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts
							},
							hideErrorAlert: O
						})).body
					},
					editLabel: async ({
						zoneId: v,
						label: w,
						replace: M
					}) => {
						const {
							name: O
						} = w, P = i(w, ["name"]);
						return (await (M ? _.put : _.patch)(c.userLabel.toUrl({
							zoneId: v,
							labelName: w.name
						}), {
							body: P
						})).body
					},
					deleteLabel: async ({
						zoneId: v,
						labelName: w
					}) => (await _.del(c.userLabel.toUrl({
						zoneId: v,
						labelName: w
					}))).body,
					createLabel: async v => {
						let {
							zoneId: w
						} = v, M = i(v, ["zoneId"]);
						const {
							product: O
						} = M, P = i(M, ["product"]);
						return (await _.post(c.userLabels.toUrl({
							zoneId: w
						}), {
							body: [P]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: v,
						user: w,
						managed: M,
						operationIds: O,
						replace: P
					}) => (await (P ? _.put : _.post)(c.operationsLinkedToLabels.toUrl({
						zoneId: v
					}), {
						body: d({}, w ? {
							user: {
								labels: w
							}
						} : {}, M ? {
							managed: {
								labels: M
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: O
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: v,
						labelName: w,
						operationIds: M
					}) => {
						const O = (0, n.mm)(w) ? c.managedLabelOperations.toUrl({
							zoneId: v,
							labelName: w
						}) : c.userLabelOperations.toUrl({
							zoneId: v,
							labelName: w
						});
						return (await _.put(O, {
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
				b = {
					labels: v => {
						let {
							accountId: w,
							zoneId: M
						} = v, O = i(v, ["accountId", "zoneId"]);
						return [l.IQ.LABELS, w, M, ...(0, m.isEmpty)(O) ? [] : [O]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				DG: function() {
					return T
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return s
				},
				GE: function() {
					return M
				},
				IQ: function() {
					return l
				},
				KV: function() {
					return _
				},
				LABELS_LIST_TOASTS: function() {
					return f
				},
				LABEL_SOURCES: function() {
					return u
				},
				QH: function() {
					return d
				},
				V: function() {
					return b
				},
				W3: function() {
					return a
				},
				Yn: function() {
					return L
				},
				_8: function() {
					return i
				},
				_c: function() {
					return v
				},
				aW: function() {
					return I
				},
				dC: function() {
					return P
				},
				gY: function() {
					return w
				},
				j8: function() {
					return c
				},
				jz: function() {
					return p
				},
				n5: function() {
					return E
				},
				om: function() {
					return m
				},
				w: function() {
					return r
				},
				zF: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(C) {
				return C.EXPOSED_CREDENTIALS = "exposed_credentials", C.CONTENT_SCANNING = "content_scanning", C.FIREWALL_AI = "firewall_ai", C
			}({});
			const a = "all";
			let l = function(C) {
					return C.LABELS = "labels", C
				}({}),
				u = function(C) {
					return C.USER = "user", C.MANAGED = "managed", C
				}({}),
				_ = function(C) {
					return C.SOURCE = "source", C
				}({}),
				s = function(C) {
					return C.NAME = "name", C.SOURCE = "source", C.NEW_LABEL_NAME = "newLabelName", C
				}({}),
				c = function(C) {
					return C.ENDPOINT = "endpoint", C.METHOD = "method", C.OPERATION_ID = "operationId", C
				}({}),
				m = function(C) {
					return C.NAME = "name", C.MAPPED_RESOURCES = "mapped_resources.operations", C.SOURCE = "source", C.APPLY = "apply", C
				}({});
			const i = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: m.NAME,
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
			let f = function(C) {
				return C.CREATED_LABEL = "createdLabel", C.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", C.DELETED_LABEL = "deletedLabel", C.APPLIED_LABEL = "appliedLabel", C.EDITED_LABEL = "editedLabel", C.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", C
			}({});
			const d = "650px",
				p = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				T = /^[A-Za-z0-9-]+$/,
				I = /^cf-/;
			let E = function(C) {
				return C.NAME = "name", C.DESCRIPTION = "description", C
			}({});
			const g = "all";
			let b = function(C) {
				return C.METHOD = "method", C.HOSTNAME = "hostname", C
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
						[b.METHOD]: g,
						[b.HOSTNAME]: g
					}
				},
				filters: b
			};
			let w = function(C) {
				return C.TITLE = "title", C.DESCRIPTION = "description", C.SUBMIT = "submit", C
			}({});
			const M = 1e3,
				O = {
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
		"../react/pages/security/settings/resources/index.ts": function(F, y, t) {
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
					return i
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
					return I
				},
				Tf: function() {
					return T
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				l = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(l);

			function _(g) {
				for (var b = 1; b < arguments.length; b++) {
					var v = arguments[b] != null ? Object(arguments[b]) : {},
						w = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(v).filter(function(M) {
						return Object.getOwnPropertyDescriptor(v, M).enumerable
					})), w.forEach(function(M) {
						s(g, M, v[M])
					})
				}
				return g
			}

			function s(g, b, v) {
				return b = c(b), b in g ? Object.defineProperty(g, b, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[b] = v, g
			}

			function c(g) {
				var b = m(g, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function m(g, b) {
				if (typeof g != "object" || g === null) return g;
				var v = g[Symbol.toPrimitive];
				if (v !== void 0) {
					var w = v.call(g, b || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(g)
			}
			let n = function(g) {
					return g.LABELS_LIST = "Labels List page", g.LABELS_APPLY = "Labels Apply page", g.LABELS_SIDE_MODAL = "Labels Side Modal", g.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", g.LABELS_OPERATION_DETAILS = "Operation Details page", g
				}({}),
				o = function(g) {
					return g.API_SHIELD = "API Shield", g.SECURITY_SETTINGS = "Security Settings", g
				}({}),
				i = function(g) {
					return g.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", g.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", g.OPERATIONS_TABLE_ROW = "Operations table row", g.OPERATION_DETAILS_PAGE = "Operation details page", g
				}({}),
				f = function(g) {
					return g.UPSERT = "upsert", g.OVERWRITE = "overwrite", g
				}({}),
				d = function(g) {
					return g.SINGLE = "single", g.MULTIPLE = "multiple", g
				}({}),
				p = function(g) {
					return g.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", g.DELETE_LABEL = "delete a user label in the settings page", g.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", g.CREATE_LABEL_CLICKED = "click create label button in the settings page", g.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", g.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", g.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", g.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", g.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", g.OPEN_LABELS_SIDE_MODAL = "open labels side modal", g.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", g.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", g.CREATE_NEW_LABEL = "create a new label", g
				}({});
			const T = ({
					name: g,
					product: b,
					category: v = "user journey",
					pageName: w,
					from: M,
					write_strategy: O,
					type: P,
					target: L,
					selected: C
				}) => {
					u().sendEvent(g, _({
						category: v,
						pageName: w,
						product: b
					}, M ? {
						from: M
					} : {}, O ? {
						write_strategy: O
					} : {}, P ? {
						type: P
					} : {}, L ? {
						target: L
					} : {}, C ? {
						selected: C
					} : {}))
				},
				I = () => {
					var g;
					return (g = Object.values(p)) === null || g === void 0 ? void 0 : g.flat()
				};
			var E = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				P3: function() {
					return c
				},
				Ri: function() {
					return m
				},
				Xs: function() {
					return o
				},
				bH: function() {
					return n
				},
				cN: function() {
					return s
				},
				ui: function() {
					return _
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				u = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const _ = i => {
					const f = (0, e.RO)(i),
						d = !!(0, a.rV)(i, "rulesets.file_upload_scan_allowed"),
						p = !!(0, a.BF)(i, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? f && (d || p) : p
				},
				s = i => Number((0, a.rV)(i, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				c = i => (0, a.rV)(i, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				m = i => (0, a.rV)(i, "rulesets.leaked_credential_checks_allowed"),
				n = i => (0, u.z1)(l.dC)(i) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				o = i => !!(0, u.z1)("deprecate-security-level")(i)
		},
		"../react/pages/security/settings/resources/types.ts": function(F, y, t) {
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
		"../react/pages/security/settings/resources/utils.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$E: function() {
					return i
				},
				Mb: function() {
					return f
				},
				N2: function() {
					return b
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
					return T
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				l = t("../react/pages/security/settings/resources/constants.ts"),
				u = t("../react/pages/security/settings/resources/types.ts"),
				_ = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(v) {
				for (var w = 1; w < arguments.length; w++) {
					var M = arguments[w] != null ? Object(arguments[w]) : {},
						O = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(M).filter(function(P) {
						return Object.getOwnPropertyDescriptor(M, P).enumerable
					})), O.forEach(function(P) {
						c(v, P, M[P])
					})
				}
				return v
			}

			function c(v, w, M) {
				return w = m(w), w in v ? Object.defineProperty(v, w, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[w] = M, v
			}

			function m(v) {
				var w = n(v, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function n(v, w) {
				if (typeof v != "object" || v === null) return v;
				var M = v[Symbol.toPrimitive];
				if (M !== void 0) {
					var O = M.call(v, w || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(v)
			}
			const o = {
					[u.T.ENABLED]: !1,
					[u.T.CONTACT]: [""],
					[u.T.EXPIRES]: ""
				},
				i = {
					[u.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[u.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[u.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[u.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[u.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[u.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[u.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[u.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				f = v => e.Ry({
					[u.T.CONTACT]: e.IX().of(e.Z_().required(v("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, v("security_txt.fields.contact.format_error"))),
					[u.T.EXPIRES]: e.hT().required(v("common.required")).min(new Date, v("security_txt.fields.expires.min_error"))
				}),
				d = v => {
					const w = {};
					for (const M in v) w[M] = Array.isArray(v[M]) ? v[M].filter(O => !!O) : v[M];
					return s({}, w, {
						expires: (0, _.DZ)(v.expires)
					})
				},
				p = (v, w, M) => {
					const O = [...new Set([u.T.CONTACT, u.T.EXPIRES, ...Object.values(u.T)])],
						P = Object.entries(v).sort(([L], [C]) => O.indexOf(L) - O.indexOf(C)).filter(([L, C]) => !!i[L] && !!C && (!Array.isArray(C) || !!C.length)).map(([L, C]) => Array.isArray(C) ? C.map(A => `${M(i[L].label)}: ${A}`).join(`
`) : `${M(i[L].label)}: ${C}`).join(`
`);
					(0, r.yH)(`Cloudflare_${w}_security.txt`, P, "text/plain;charset=utf-8")
				};
			let T = function(v) {
				return v.CREATED = "created security.txt", v.ENABLED = "enabled security.txt", v.DISABLED = "disabled security.txt", v.DOWNLOADED = "downloaded security.txt", v.UPDATED = "updated security.txt", v.DELETED = "deleted security.txt", v
			}({});
			const I = v => (v == null ? void 0 : v.source) === l.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (v == null ? void 0 : v.source) === l.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				E = v => v === l.W3 ? void 0 : v,
				g = v => l.aW.test(v),
				b = v => {
					switch (v) {
						case l.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case l.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(F, y, t) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Sb: function() {
					return m
				},
				Vj: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), f.forEach(function(d) {
						l(n, d, i[d])
					})
				}
				return n
			}

			function l(n, o, i) {
				return o = u(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function u(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(n, o || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			const s = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				c = {
					product: "WAF Managed Rules"
				},
				m = ({
					event: n,
					category: o = "user journey",
					product: i = "waf",
					productName: f = "Managed Rules",
					additionalData: d
				}) => {
					r().sendEvent(n, a({
						category: o,
						product: i,
						productName: f
					}, d || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(F, y, t) {
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
		"../react/pages/spectrum/tracking.tsx": function(F, y, t) {
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
		"../react/pages/stream/actionTypes.ts": function(F, y, t) {
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
		"../react/pages/stream/reducer.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				ZP: function() {
					return n
				},
				nY: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function l(o) {
				for (var i = 1; i < arguments.length; i++) {
					var f = arguments[i] != null ? Object(arguments[i]) : {},
						d = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(f).filter(function(p) {
						return Object.getOwnPropertyDescriptor(f, p).enumerable
					})), d.forEach(function(p) {
						u(o, p, f[p])
					})
				}
				return o
			}

			function u(o, i, f) {
				return i = _(i), i in o ? Object.defineProperty(o, i, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[i] = f, o
			}

			function _(o) {
				var i = s(o, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function s(o, i) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var d = f.call(o, i || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(o)
			}
			const c = "stream",
				m = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(o = m, i) {
				switch (i.type) {
					case r.U.ResetState:
						return m;
					case r.U.SetStorageLoading:
						const {
							storageLoading: f
						} = i;
						return l({}, o, {
							storageLoading: f
						});
					case r.U.SetStorage:
						return l({}, o, {
							storage: i.payload ? l({}, o.storage, i.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return l({}, o, {
							videos: i.videos
						});
					case r.U.PrependVideo:
						return l({}, o, {
							videos: [i.video, ...o.videos].filter((d, p) => p < a.FJ)
						});
					case r.U.UpdateVideo:
						return l({}, o, {
							videos: o.videos.map(d => d.uid === i.video.uid ? i.video : d)
						});
					case r.U.UpdateVideoPending:
						return l({}, o, {
							videoUpdateStatuses: l({}, o.videoUpdateStatuses, {
								[i.uid]: i.status
							})
						});
					case r.U.RemoveVideos:
						return l({}, o, {
							videos: o.videos.filter(d => !i.ids.includes(d.uid))
						});
					case r.U.SetLoading:
						return l({}, o, {
							loading: i.loading
						});
					case r.U.SetRequestTimestamp:
						return l({}, o, {
							requestTimestamp: i.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return o;
					default:
						return (0, e.h)(i, o)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				C: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				a = (0, e.BC)`${r}/inputs`,
				l = (0, e.BC)`${r}/videos`,
				u = (0, e.BC)`${r}/analytics`,
				_ = (0, e.BC)`${l}/${"videoId"}`,
				s = (0, e.BC)`${r}/video-transformations`,
				c = {
					root: r,
					inputs: a,
					configureInputs: (0, e.BC)`${a}/custom-hostnames`,
					videos: l,
					analytics: u,
					videoPage: _,
					videoTransformationsConfigList: s,
					videoTransformationsZoneConfig: (0, e.BC)`${s}/${"zoneId"}/settings`,
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
		"../react/pages/stream/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Id: function() {
					return l
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return u
				},
				QL: function() {
					return c
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
					return s
				},
				bO: function() {
					return i
				},
				bm: function() {
					return f
				},
				mX: function() {
					return T
				},
				pW: function() {
					return _
				},
				xW: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const l = I => I[a.nY],
				u = I => l(I).videos,
				_ = I => l(I).videoUpdateStatuses,
				s = I => l(I).loading,
				c = I => l(I).requestTimestamp,
				m = I => l(I).storageLoading,
				n = I => l(I).storage,
				o = I => (0, r.BF)(I, "stream.enabled") || (0, e.bC)(I),
				i = I => (0, e.Le)(I, "stream", "connect"),
				f = I => (0, e.Le)(I, "stream", "stream-4371"),
				d = I => (0, e.Le)(I, "stream", "public-details-enabled"),
				p = I => !!(0, e.Le)(I, "stream", "llhls"),
				T = I => {
					const E = n(I);
					return E !== void 0 && E.limitMins > E.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(F, y, t) {
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

			function r(l, u, _) {
				const s = {
					search: _,
					limit: e.toString()
				};
				return u !== void 0 && (s.end = u), s
			}

			function a(l, u, _) {
				return {
					limit: e.toString(),
					search: _,
					asc: "true",
					start_comp: "gt",
					start: u
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(F, y, t) {
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
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				QK: function() {
					return c
				},
				WM: function() {
					return d
				},
				Zk: function() {
					return m
				},
				aB: function() {
					return n
				},
				eT: function() {
					return f
				},
				i3: function() {
					return s
				},
				mm: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(p) {
				for (var T = 1; T < arguments.length; T++) {
					var I = arguments[T] != null ? Object(arguments[T]) : {},
						E = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(I).filter(function(g) {
						return Object.getOwnPropertyDescriptor(I, g).enumerable
					})), E.forEach(function(g) {
						l(p, g, I[g])
					})
				}
				return p
			}

			function l(p, T, I) {
				return T = u(T), T in p ? Object.defineProperty(p, T, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[T] = I, p
			}

			function u(p) {
				var T = _(p, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function _(p, T) {
				if (typeof p != "object" || p === null) return p;
				var I = p[Symbol.toPrimitive];
				if (I !== void 0) {
					var E = I.call(p, T || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(p)
			}
			let s = function(p) {
					return p.TRY_NEW_DASHBOARD_CTA = "click try new dashboard", p
				}({}),
				c = function(p) {
					return p.CREATE_BUTTON_CLICK = "click create load balancer", p.TOGGLE_STATUS = "load balancer toggle status", p.REVIEW_PAGE_CLICK = "click load balancer table review link", p.EDIT_CLICK = "click load balancer table edit button", p.DELETE_CLICK = "click load balancer table delete button", p
				}({}),
				m = function(p) {
					return p.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", p.EDIT_IP_CLICK = "click edit load balancer IP", p.EDIT_POOLS_CLICK = "click edit load balancer pools", p.EDIT_MONITORS_CLICK = "click edit load balancer monitors", p.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", p.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", p
				}({}),
				n = function(p) {
					return p.GO_TO_STEP = "click load balancer step", p.BACK_TO_STEP = "click load balancer back to step", p.SAVE = "save load balancer", p.SAVE_AS_DRAFT = "save load balancer as draft", p.SAVE_AND_DEPLOY = "save and deploy load balancer", p.NAVIGATION_CHANGE = "click load balancer wizard navigation link", p.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", p
				}({}),
				o = function(p) {
					return p.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", p
				}({});
			const f = Object.values({
					MIGRATION: s,
					LOAD_BALANCERS_TABLE: c,
					REVIEW: m,
					WIZARD: n,
					USAGE: o
				}).flatMap(Object.values),
				d = (p, T) => r().sendEvent(p, a({
					category: "user journey",
					product: "load balancing"
				}, T))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(F, y, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				N: function() {
					return a
				},
				X: function() {
					return l
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(u) {
				return u.CREATE = "create waiting room", u.UPDATE = "update waiting room", u.EVENTS = "view waiting rooms events", u.ANALYTICS = "view waiting room analytics", u.GENERATE_PREVIEW = "generate waiting room preview link", u
			}({});
			const l = async u => {
				await r().sendEvent(u, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				N3: function() {
					return c
				},
				P: function() {
					return n
				},
				Xh: function() {
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var i = 1; i < arguments.length; i++) {
					var f = arguments[i] != null ? Object(arguments[i]) : {},
						d = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(f).filter(function(p) {
						return Object.getOwnPropertyDescriptor(f, p).enumerable
					})), d.forEach(function(p) {
						l(o, p, f[p])
					})
				}
				return o
			}

			function l(o, i, f) {
				return i = u(i), i in o ? Object.defineProperty(o, i, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[i] = f, o
			}

			function u(o) {
				var i = _(o, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function _(o, i) {
				if (typeof o != "object" || o === null) return o;
				var f = o[Symbol.toPrimitive];
				if (f !== void 0) {
					var d = f.call(o, i || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(o)
			}
			const s = "TURNSTILE";
			let c = function(o) {
				return o.OVERVIEW_PAGE = "view the overview page", o.LIST_OF_WIDGETS = "list of widgets", o.SOLVE_EVENTS = "list solve events", o.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", o.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", o.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", o.OPEN_DELETE_MODAL = "view the delete modal for one widget", o.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", o.DELETE_WIDGET = "delete successfully widgets", o.LIST_OF_HOSTNAMES = "list hostnames", o.OPEN_ADD_WIDGET_PAGE = "view page to add widget", o.FEEDBACK_ADD = "view Feedback Add", o.SAVE_WIDGET = "save widget", o.ROTATE_KEYS = "rotate keys", o.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", o.GET_WIDGETS = "get widget details", o.OPEN_ANALYTICS_PAGE = "view analytics page", o.ANALYTICS_DATA = "list the analytics data", o
			}({});
			const m = ({
					name: o,
					product: i = s,
					category: f = "user journey",
					page: d,
					additionalData: p = {}
				}) => {
					r().sendEvent(o, a({
						category: f,
						page: d,
						product: i
					}, p || {}))
				},
				n = () => {
					var o;
					return (o = Object.values(c)) === null || o === void 0 ? void 0 : o.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				E: function() {
					return c
				},
				Ky: function() {
					return m
				},
				RJ: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var o = 1; o < arguments.length; o++) {
					var i = arguments[o] != null ? Object(arguments[o]) : {},
						f = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && f.push.apply(f, Object.getOwnPropertySymbols(i).filter(function(d) {
						return Object.getOwnPropertyDescriptor(i, d).enumerable
					})), f.forEach(function(d) {
						l(n, d, i[d])
					})
				}
				return n
			}

			function l(n, o, i) {
				return o = u(o), o in n ? Object.defineProperty(n, o, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[o] = i, n
			}

			function u(n) {
				var o = _(n, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function _(n, o) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var f = i.call(n, o || "default");
					if (typeof f != "object") return f;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.GROUP_TABLE_ROW_CLICK = "user group table row click", n.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", n.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", n.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", n.BACK_BUTTON = "clicked back from user group detail", n.MEMBER_ADD = "add user group member", n.MEMBER_DELETE = "delete user group member", n.POLICY_SAVE = "user group policies save", n.POLICY_DELETE = "user group policies delete", n
			}({});
			const c = ({
					name: n,
					additionalData: o = {}
				}) => {
					r().sendEvent(n, a({}, o || {}))
				},
				m = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(F, y, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$e: function() {
					return M
				},
				$h: function() {
					return g
				},
				G: function() {
					return w
				},
				M3: function() {
					return P
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
					return L
				},
				hF: function() {
					return b
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
				l = t("../react/app/components/SidebarNav/permissions.ts"),
				u = t("../react/common/selectors/entitlementsSelectors.ts");

			function _(C) {
				for (var A = 1; A < arguments.length; A++) {
					var S = arguments[A] != null ? Object(arguments[A]) : {},
						G = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(S).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(S, ne).enumerable
					})), G.forEach(function(ne) {
						s(C, ne, S[ne])
					})
				}
				return C
			}

			function s(C, A, S) {
				return A = c(A), A in C ? Object.defineProperty(C, A, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[A] = S, C
			}

			function c(C) {
				var A = m(C, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function m(C, A) {
				if (typeof C != "object" || C === null) return C;
				var S = C[Symbol.toPrimitive];
				if (S !== void 0) {
					var G = S.call(C, A || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(C)
			}
			const n = C => (0, a.nA)(C) ? (0, u.p1)(C) && (0, l.$n)(C, "zone_versioning", "versioning") : !1,
				o = C => C.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", o),
				f = C => C.zoneVersioning.zoneVersions,
				d = (0, e.P1)("zoneVersions", f),
				p = (0, r.P1)(d, C => {
					if (C) return C.filter(A => A.status == "V")
				}),
				T = C => C.zoneVersioning.environments,
				I = C => C.zoneVersioning.environments.isRequesting,
				E = (0, e.P1)("environments", T),
				g = (0, r.P1)(i, C => {
					if (C) {
						if (C.length === 1) return C[0];
						C.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${C.length}`))
					}
					return null
				}),
				b = (0, r.P1)(E, C => C ? C.environments : []),
				v = C => {
					var A;
					return (A = C.zoneVersioning) === null || A === void 0 ? void 0 : A.zoneVersionSelector
				},
				w = (0, r.P1)(v, d, (C, A) => {
					if (!(C == null ? void 0 : C.isVersion) || !A) return null;
					const S = A.find(G => {
						if (G.version === C.selectedVersion && G.locked) return !0
					});
					return S ? _({}, S, {
						isLocked: !0
					}) : null
				}),
				M = (0, r.P1)(d, b, (C, A) => !A || !C ? [] : C.map(S => {
					const G = [];
					for (const ne in A) A[ne].version === S.version && G.push(A[ne]);
					return _({}, S, {
						environments: G
					})
				})),
				O = C => C.zoneVersioning.WAFMigrationStatus,
				P = (0, e.P1)("WAFMigrationStatus", O),
				L = C => C.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$2: function() {
					return O
				},
				CI: function() {
					return w
				},
				IS: function() {
					return s
				},
				L7: function() {
					return u
				},
				Lt: function() {
					return d
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return p
				},
				S6: function() {
					return P
				},
				X$: function() {
					return b
				},
				X6: function() {
					return m
				},
				d4: function() {
					return f
				},
				fE: function() {
					return c
				},
				im: function() {
					return E
				},
				lv: function() {
					return T
				},
				rL: function() {
					return n
				},
				wW: function() {
					return _
				}
			});

			function e(L) {
				for (var C = 1; C < arguments.length; C++) {
					var A = arguments[C] != null ? Object(arguments[C]) : {},
						S = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(A).filter(function(G) {
						return Object.getOwnPropertyDescriptor(A, G).enumerable
					})), S.forEach(function(G) {
						r(L, G, A[G])
					})
				}
				return L
			}

			function r(L, C, A) {
				return C = a(C), C in L ? Object.defineProperty(L, C, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[C] = A, L
			}

			function a(L) {
				var C = l(L, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function l(L, C) {
				if (typeof L != "object" || L === null) return L;
				var A = L[Symbol.toPrimitive];
				if (A !== void 0) {
					var S = A.call(L, C || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(L)
			}
			const u = {
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
				s = "40rem",
				c = {
					pricing: {
						requests: .15,
						duration: 12.5,
						bytes_stored: .2,
						rows_read: .001,
						rows_written: 1
					}
				},
				m = {
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
				i = {
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
				T = {
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
				b = ["bundled", "unbound", "standard"],
				v = null,
				w = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let M = function(L) {
				return L[L.NONE = 0] = "NONE", L[L.MISS = 1] = "MISS", L[L.EXPIRED = 2] = "EXPIRED", L[L.UPDATING = 3] = "UPDATING", L[L.STALE = 4] = "STALE", L[L.HIT = 5] = "HIT", L[L.IGNORED = 6] = "IGNORED", L[L.BYPASS = 7] = "BYPASS", L[L.REVALIDATED = 8] = "REVALIDATED", L[L.DYNAMIC = 9] = "DYNAMIC", L[L.STREAM_HIT = 10] = "STREAM_HIT", L[L.DEFERRED = 11] = "DEFERRED", L
			}({});
			const O = [M.HIT, M.STREAM_HIT];
			let P = function(L) {
				return L.SECRETS_STORE_ID = "store_id", L.SECRET_NAME = "secret_name", L
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Hv: function() {
					return s
				},
				L: function() {
					return a
				},
				Q9: function() {
					return l
				},
				_j: function() {
					return u
				},
				ky: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = c => `${c}.workers.dev`,
				a = (c, m, n) => `${n?`${n}.`:""}${c}.${r(m)}`,
				l = (c, m, n) => `https://${a(c,m,n)}`,
				u = {
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
				s = {
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				MN: function() {
					return a
				},
				Yg: function() {
					return u
				},
				i$: function() {
					return l
				},
				l3: function() {
					return _
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const a = async ([s, c]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: s,
					variables: c
				})
			})).body, l = async (...s) => (await e.get(...s)).body, u = s => async (c, m) => {
				const n = await fetch(c, m).then(o => o.json());
				return s.assertDecode(n)
			}, _ = async (...s) => (await l(...s)).result;
			y.ZP = {
				fetcher: s => Array.isArray(s) ? _(...s) : _(s)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(F, y) {
				y()
			})(this, function() {
				"use strict";

				function F() {
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

					function l(T) {
						return !!(T && T !== document && T.nodeName !== "HTML" && T.nodeName !== "BODY" && "classList" in T && "contains" in T.classList)
					}

					function u(T) {
						var I = T.type,
							E = T.tagName;
						return !!(E == "INPUT" && a[I] && !T.readOnly || E == "TEXTAREA" && !T.readOnly || T.isContentEditable)
					}

					function _(T) {
						T.getAttribute("is-focus-visible") !== "" && T.setAttribute("is-focus-visible", "")
					}

					function s(T) {
						T.getAttribute("is-focus-visible") === "" && T.removeAttribute("is-focus-visible")
					}

					function c(T) {
						l(document.activeElement) && _(document.activeElement), t = !0
					}

					function m(T) {
						t = !1
					}

					function n(T) {
						!l(T.target) || (t || u(T.target)) && _(T.target)
					}

					function o(T) {
						!l(T.target) || T.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), s(T.target))
					}

					function i(T) {
						document.visibilityState == "hidden" && (e && (t = !0), f())
					}

					function f() {
						document.addEventListener("mousemove", p), document.addEventListener("mousedown", p), document.addEventListener("mouseup", p), document.addEventListener("pointermove", p), document.addEventListener("pointerdown", p), document.addEventListener("pointerup", p), document.addEventListener("touchmove", p), document.addEventListener("touchstart", p), document.addEventListener("touchend", p)
					}

					function d() {
						document.removeEventListener("mousemove", p), document.removeEventListener("mousedown", p), document.removeEventListener("mouseup", p), document.removeEventListener("pointermove", p), document.removeEventListener("pointerdown", p), document.removeEventListener("pointerup", p), document.removeEventListener("touchmove", p), document.removeEventListener("touchstart", p), document.removeEventListener("touchend", p)
					}

					function p(T) {
						T.target.nodeName.toLowerCase() !== "html" && (t = !1, d())
					}
					document.addEventListener("keydown", c, !0), document.addEventListener("mousedown", m, !0), document.addEventListener("pointerdown", m, !0), document.addEventListener("touchstart", m, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", i, !0), f(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function y(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && y(F)
			})
		},
		"../react/utils/bootstrap.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				$8: function() {
					return r
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return l
				},
				gm: function() {
					return a
				}
			});
			const e = () => {
					var u, _, s;
					return (u = window) === null || u === void 0 || (_ = u.bootstrap) === null || _ === void 0 || (s = _.data) === null || s === void 0 ? void 0 : s.security_token
				},
				r = () => {
					var u, _, s;
					return !!((u = t.g.bootstrap) === null || u === void 0 || (_ = u.data) === null || _ === void 0 || (s = _.user) === null || s === void 0 ? void 0 : s.id)
				},
				a = () => {
					var u, _;
					return !!((u = t.g.bootstrap) === null || u === void 0 || (_ = u.data) === null || _ === void 0 ? void 0 : _.is_kendo)
				},
				l = () => {
					var u, _, s, c;
					return (u = window) === null || u === void 0 || (_ = u.bootstrap) === null || _ === void 0 || (s = _.data) === null || s === void 0 || (c = s.user) === null || c === void 0 ? void 0 : c.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				O5: function() {
					return l
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return s
				},
				wV: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => (r() || "").indexOf("C0002") !== -1,
				l = () => (r() || "").indexOf("C0003") !== -1,
				u = () => (r() || "").indexOf("C0004") !== -1,
				_ = () => (r() || "").indexOf("C0005") !== -1,
				s = n => {
					const o = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				c = () => {
					var n;
					const o = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				m = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				AI: function() {
					return b
				},
				Kd: function() {
					return o
				},
				S8: function() {
					return g
				},
				ZW: function() {
					return c
				},
				ay: function() {
					return v
				},
				fh: function() {
					return w
				},
				i_: function() {
					return i
				},
				ly: function() {
					return n
				},
				th: function() {
					return s
				},
				ti: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				a = t("../../../common/intl/intl-types/src/index.ts"),
				l = t("../../../common/util/types/src/utils/index.ts"),
				u = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				_ = t("../../../../node_modules/cookie/index.js");
			const s = "cf-sync-locale-with-cps",
				c = a.Q.en_US,
				m = "en_US",
				n = "cf-locale";

			function o() {
				const P = (0, _.parse)(document.cookie);
				return u.Z.get(n) || P[n] || null
			}

			function i(P) {
				document.cookie = (0, _.serialize)(n, P, {
					path: "/",
					maxAge: 31536e3
				}), u.Z.set(n, P)
			}

			function f() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const d = P => (0, l.Yd)(a.Q).find(L => a.Q[L] === P) || m,
				p = [],
				T = [],
				I = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				E = {
					test: [...I, ...T, ...p],
					development: [...I, ...T, ...p],
					staging: [...I, ...T, ...p],
					production: [...I, ...T]
				},
				g = P => {
					const L = a.Q[P];
					return E.production.includes(L)
				},
				b = () => Object.keys(a.Q).filter(P => g(P)),
				v = P => {
					const L = a.Q[P];
					return T.includes(L)
				},
				w = P => M[P],
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
				O = r().locale();
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
			}), r().locale(O)
		},
		"../react/utils/translator.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				QT: function() {
					return d
				},
				Vb: function() {
					return c
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return s
				},
				_m: function() {
					return o
				},
				cC: function() {
					return i
				},
				oc: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				l = t.n(a),
				u = t("../flags.ts");
			const _ = new r.Z({
				pseudoLoc: (0, u.J8)("is_pseudo_loc")
			});

			function s(p, ...T) {
				return _.t(p, ...T)
			}
			const c = _;

			function m(p, ...T) {
				return markdown(s(p, T))
			}

			function n(p) {
				if (Number(p) !== 0) {
					if (p % 86400 == 0) return s("time.num_days", {
						smart_count: p / 86400
					});
					if (p % 3600 == 0) return s("time.num_hours", {
						smart_count: p / 3600
					});
					if (p % 60 == 0) return s("time.num_minutes", {
						smart_count: p / 60
					})
				}
				return s("time.num_seconds", {
					smart_count: p
				})
			}

			function o(p, T) {
				return p in T ? T[p] : void 0
			}
			const i = a.Trans,
				f = a.I18n,
				d = a.useI18n
		},
		"../react/utils/url.ts": function(F, y, t) {
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
					return b
				},
				Nw: function() {
					return M
				},
				Pd: function() {
					return w
				},
				Uh: function() {
					return $
				},
				cm: function() {
					return I
				},
				e1: function() {
					return O
				},
				el: function() {
					return le
				},
				hW: function() {
					return W
				},
				pu: function() {
					return N
				},
				qR: function() {
					return ce
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
				l = t("../react/pages/images/routes.ts"),
				u = t("../react/pages/pages/routes.ts"),
				_ = t("../react/pages/r2/routes.ts"),
				s = t("../react/pages/stream/routes.ts"),
				c = t("../react/pages/zoneless-workers/routes.ts"),
				m = t("../../../../node_modules/query-string/query-string.js"),
				n = t.n(m);

			function o(k) {
				for (var H = 1; H < arguments.length; H++) {
					var ae = arguments[H] != null ? Object(arguments[H]) : {},
						pe = Object.keys(ae);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(ae).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(ae, ue).enumerable
					})), pe.forEach(function(ue) {
						i(k, ue, ae[ue])
					})
				}
				return k
			}

			function i(k, H, ae) {
				return H = f(H), H in k ? Object.defineProperty(k, H, {
					value: ae,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[H] = ae, k
			}

			function f(k) {
				var H = d(k, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function d(k, H) {
				if (typeof k != "object" || k === null) return k;
				var ae = k[Symbol.toPrimitive];
				if (ae !== void 0) {
					var pe = ae.call(k, H || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(k)
			}
			const {
				endsWithSlash: p
			} = e.default, T = new RegExp(/([0-9a-z]{32})/g), I = k => k == null ? void 0 : k.replace(T, ":id"), E = (k, H) => {
				const ae = k.replace(p, "").split("/");
				return ae.slice(0, 2).concat([H]).concat(ae.slice(3)).join("/")
			}, g = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), b = k => `/${k.replace(p,"").replace(/^\//,"")}`, v = k => M("add-site", k), w = k => M("billing", k), M = (k, H) => H ? `/${H}${k?`/${k}`:""}` : `/?to=/:account/${k}`, O = () => {
				const k = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return k ? k[1] : null
			}, P = (k, H) => n().stringify(o({}, n().parse(k), H)), L = (k = "") => k.toString().replace(/([\/]{1,})$/, ""), C = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], A = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, S = /^\/(\w{32,})(\/[^.]*)?/, G = k => C.includes(k), ne = k => !G(k), ce = k => !G(k) && S.test(k), le = k => !G(k) && A.test(k), Q = k => A.exec(k), W = k => {
				if (le(k)) return k.split("/").filter(H => H.length > 0)[1]
			}, K = k => S.exec(k), j = k => {
				if (ce(k)) {
					const H = K(k);
					if (H) return H[1]
				}
			}, U = k => ce(k) && k.split("/")[2] === "register-domain", D = k => U(k) ? k.split("/") : null, B = k => {
				if (le(k)) {
					const [, , , H, ae, pe, ue, _e] = k.split("/");
					return H === "traffic" && ae === "load-balancing" && pe === "pools" && ue === "edit" && _e
				}
			}, $ = k => {
				const H = D(k);
				if (H) return H[3]
			}, te = (k, H) => {
				var ae, pe;
				return ((ae = k.pattern.match(/\:/g)) !== null && ae !== void 0 ? ae : []).length - ((pe = H.pattern.match(/\:/g)) !== null && pe !== void 0 ? pe : []).length
			}, re = [...Object.values(s.C), ...Object.values(l.KJ), ...Object.values(_._j), ...Object.values(c._j), ...Object.values(u._j), ...Object.values(a._)].sort(te);

			function ie(k) {
				if (!ne(k)) return k;
				for (const _e of re)
					if (_e.expression.test(k)) return _e.pattern;
				if (r.eM.abuseReportTab.expression.test(k)) {
					const _e = k.split("/"),
						oe = _e[_e.length - 1];
					return r.eM.abuseReportTab.pattern.replace(":tab", oe)
				}
				if (r.eM.abuseReport.expression.test(k)) return r.eM.abuseReport.pattern;
				const H = D(k);
				if (H) {
					const [, , _e, , ...oe] = H;
					return `/:accountId/${_e}/:domainName/${oe.join("/")}`
				}
				if (B(k)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const pe = Q(k);
				if (pe) {
					const [, , , , _e] = pe;
					return `/:accountId/:zoneName${_e||""}`
				}
				const ue = K(k);
				if (ue) {
					const [, , _e] = ue;
					return `/:accountId${_e||""}`
				}
				return k
			}

			function N(k) {
				if (!!k) try {
					const ae = k.split(".").pop();
					if (ae && ae.length > 0) return ae
				} catch {}
			}

			function V(k, H = document.location.href) {
				try {
					const ae = new URL(k),
						pe = new URL(H);
					if (ae.origin === pe.origin) return `${ae.pathname}${ae.search}${ae.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				r: function() {
					return s
				},
				y: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				l = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(l);
			const _ = /^\/domainconnect\/v2\/domaintemplates\//i,
				s = "domain-connect-redirect",
				c = () => {
					const m = (0, l.useLocation)();
					(0, e.useEffect)(() => {
						_.test(m.pathname) && a.Z.set(s, m, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(F, y, t) {
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
		"../react/utils/zoneLevelAccess.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				P: function() {
					return l
				},
				b: function() {
					return u
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var _, s, c, m, n, o;
				return (_ = window) === null || _ === void 0 || (s = _.bootstrap) === null || s === void 0 || (c = s.data) === null || c === void 0 || (m = c.user) === null || m === void 0 || (n = m.betas) === null || n === void 0 || (o = n.some) === null || o === void 0 ? void 0 : o.call(n, i => i === "zone_level_access_beta")
			}

			function l() {
				const _ = !!(0, e.Z)("zone-level-access");
				return a() || _
			}

			function u(_) {
				const s = !!(0, r.z1)("zone-level-access")(_);
				return a() || s
			}
		},
		"../utils/getDashVersion.ts": function(F, y, t) {
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
					var l, u;
					return (l = window) === null || l === void 0 || (u = l.build) === null || u === void 0 ? void 0 : u.dashVersion
				},
				a = () => {
					var l;
					return ((0, e.parse)((l = document) === null || l === void 0 ? void 0 : l.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Wi: function() {
					return me
				},
				IM: function() {
					return R
				},
				yV: function() {
					return St
				},
				Ug: function() {
					return Ft
				},
				v_: function() {
					return h
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				l = t("../react/app/providers/storeContainer.js"),
				u = t("../react/common/selectors/languagePreferenceSelector.ts"),
				_ = t("../flags.ts"),
				s = t("../../../../node_modules/cookie/index.js"),
				c = t("../react/utils/url.ts"),
				m = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				f = t("../utils/getDashVersion.ts"),
				d = t("../react/common/selectors/accountSelectors.ts"),
				p = t("../react/common/selectors/entitlementsSelectors.ts"),
				T = t("../react/common/utils/getEnvironment.ts");

			function I(X) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var fe = arguments[ee] != null ? Object(arguments[ee]) : {},
						ve = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && ve.push.apply(ve, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), ve.forEach(function(be) {
						E(X, be, fe[be])
					})
				}
				return X
			}

			function E(X, ee, fe) {
				return ee = g(ee), ee in X ? Object.defineProperty(X, ee, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[ee] = fe, X
			}

			function g(X) {
				var ee = b(X, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function b(X, ee) {
				if (typeof X != "object" || X === null) return X;
				var fe = X[Symbol.toPrimitive];
				if (fe !== void 0) {
					var ve = fe.call(X, ee || "default");
					if (typeof ve != "object") return ve;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(X)
			}
			const v = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				w = (0, o.Z)(X => {
					try {
						return v.assertDecode((0, s.parse)(X))
					} catch (ee) {
						return console.error(ee), {}
					}
				}),
				M = X => (ee, fe, ve) => {
					try {
						const Xe = window.location.pathname,
							qe = (0, l.bh)().getState(),
							st = w(document.cookie),
							pt = I({
								page: (0, c.Fl)(ve.page || window.location.pathname),
								dashVersion: (0, f.t)(),
								environment: (0, T.Z)()
							}, st);
						if (ee === "identify") {
							var be, Be;
							const ot = {
								gates: (0, i.T2)(qe) || {},
								country: (be = t.g) === null || be === void 0 || (Be = be.bootstrap) === null || Be === void 0 ? void 0 : Be.ip_country
							};
							return X(ee, fe, I({}, pt, ot, ve))
						} else {
							const ot = {
								accountId: (0, c.uW)(Xe),
								zoneName: (0, c.hW)(Xe),
								domainName: (0, c.Uh)(Xe)
							};
							if ((0, c.qR)(Xe)) {
								var He;
								const Ue = (0, d.D0)(qe);
								ot.isEntAccount = !!(Ue == null || (He = Ue.meta) === null || He === void 0 ? void 0 : He.has_enterprise_zones) || (0, p.p1)(qe)
							}
							if ((0, c.el)(Xe)) {
								var tt;
								const Ue = (0, m.nA)(qe);
								ot.zoneId = Ue == null ? void 0 : Ue.id, ot.plan = Ue == null || (tt = Ue.plan) === null || tt === void 0 ? void 0 : tt.legacy_id
							}
							return X(ee, fe, I({}, pt, ot, ve))
						}
					} catch (Xe) {
						return console.error(Xe), X(ee, fe, ve)
					}
				},
				O = X => async (ee, fe, ve) => {
					try {
						return await X(ee, fe, ve)
					} catch (be) {
						if (console.error(be), !h()) throw be;
						return {
							status: "rejected",
							reason: be
						}
					}
				};
			var P = t("../react/app/components/AccountHome/tracking.ts"),
				L = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				C = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				A = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				S = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				G = t("../react/common/middleware/sparrow/errors.ts"),
				ne = t("../react/pages/abuse/constants.ts"),
				ce = t("../react/pages/blocked-content/constants.ts"),
				le = t("../react/pages/caching/tracking.tsx"),
				Q = t("../react/pages/dns/dns-records/tracking.ts"),
				W = t("../react/pages/home/alerts/tracking.ts"),
				K = t("../react/pages/home/audit-log/tracking.ts"),
				j = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				U = t("../react/pages/home/configurations/lists/tracking.ts"),
				D = t("../react/pages/home/domain-registration/tracking.ts"),
				B = t("../react/pages/home/members/sparrowEvents.ts"),
				$ = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				te = t("../react/pages/hyperdrive/tracking.ts"),
				re = t("../react/pages/magic/network-monitoring/constants.ts"),
				ie = t("../react/pages/magic/overview/tracking.ts"),
				N = t("../react/pages/magic/packet-captures/constants.ts"),
				V = t("../react/pages/page-rules/tracking.ts"),
				k = t("../react/pages/pages/constants.ts"),
				H = t("../react/pages/pipelines/tracking.ts"),
				ae = t("../react/pages/profile/tracking.ts"),
				pe = t("../react/pages/secrets-store/resources/constants.ts"),
				ue = t("../react/pages/security-center/tracking.ts"),
				_e = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				oe = t("../react/pages/security/api-shield/tracking.ts"),
				we = t("../react/pages/security/bots/tracking.ts"),
				De = t("../react/pages/security/overview/resources/constants.ts"),
				Me = t("../react/pages/security/page-shield/resources/index.ts"),
				xe = t("../react/pages/security/resources/constants.tsx"),
				Ne = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Je = t("../react/pages/security/settings/index.tsx"),
				Ye = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Fe = t("../react/pages/shared-config/sparrowEvents.tsx"),
				Ke = t("../react/pages/spectrum/tracking.tsx"),
				Z = t("../react/pages/traffic/argo/tracking.ts"),
				he = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				Le = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				We = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				dt = t("../react/pages/turnstile/tracking.ts"),
				at = t("../react/pages/user-groups/sparrowEvents.ts"),
				Oe = t("../react/pages/zoneless-workers/constants.ts");
			const ge = ((X, ee, ...fe) => n.eg.union([n.eg.literal(X), n.eg.literal(ee), ...fe.map(ve => n.eg.literal(ve))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "copy table cell", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Click on DNS Firewall feedback link", "Click on DNS Firewall add Cluster", "Hover on DNS Firewall feedback toast", "Click create DNS firewall cluster", "Click edit DNS firewall cluster", "Click on DNS Firewall edit Cluster button", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", P.gX.SPARROW_PROJECTS_TABLE_CLICK, P.gX.SPARROW_EMPTY_STATE_CTA_CLICK, P.gX.SPARROW_PRODUCT_CARD_CLICK, P.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, P.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, P.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Oe.QV.clickedDownloadAnalytics, Oe.QV.clickedPrintAnalytics, Oe.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Oe.QV.addWCITriggerToExistingWorker, Oe.QV.updateWCITrigger, Oe.QV.deleteWCITrigger, Oe.QV.addWCITriggerToNewWorker, Oe.QV.createWCIBuildForNewWorker, Oe.QV.completedWCIBuildForNewWorker, Oe.QV.changedDefaultConfigurations, Oe.QV.clickElement, k.QV.toggledPagesSmartPlacement, k.QV.downloadDemoProject, Oe.QV.clickCreateWorkerFromRepoNextStep, Oe.QV.clickCreateWorkerFromRepoPreviousStep, Oe.QV.clickCreateNewSCMConnection, Oe.QV.redirectFromSCMOAuth, Oe.QV.clickSubmitError, Oe.QV.selectTemplate, Oe.QV.clickedListTemplates, Oe.QV.clickedImportRepository, Oe.QV.clickedClonePublicRepositoryFromUrl, Oe.QV.templateStubWorkerCreated, Oe.QV.templateStubWorkerCreationFailed, Oe.QV.templateRepositoryCreated, Oe.QV.templateRepositoryCreationFailed, Oe.QV.copyTemplateC3Command, Oe.QV.templateDeployClick, Oe.QV.reauthenticateGithubModalShown, Oe.QV.updateGithubPermissionsClicked, Oe.QV.D2W_importRepository, Oe.QV.D2W_stubWorkerCreated, Oe.QV.D2W_stubWorkerCreationFailed, Oe.QV.D2W_repositoryCreated, Oe.QV.D2W_repositoryCreationFailed, Oe.QV.D2W_resourcesProvisioned, Oe.QV.D2W_resourceProvisioningFailed, Oe.QV.D2W_githubAPIRateLimitReached, Oe.QV.createResource, Oe.QV.deleteResource, Oe.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", we.N3.INITIAL_FETCH_SCORES, we.N3.FETCH_CONFIGURATION, we.N3.INITIAL_FETCH_TIME_SERIES, we.N3.INITIAL_FETCH_ATTRIBUTES, we.N3.UPDATE_SETTINGS, we.N3.DELETE_RULE, we.N3.UPDATE_RULE, we.N3.FETCH_RULES, we.N3.CONFIGURE_BOT_MANAGEMENT, we.N3.WAF_RULES_REDIRECT, $.F.TOGGLE_TCP_PROTECTION, $.F.GET_TCP_PROTECTION_PREFIXES, $.F.CREATE_TCP_PROTECTION_PREFIXES, $.F.CREATE_TCP_PROTECTION_PREFIX, $.F.UPDATE_TCP_PROTECTION_PREFIX, $.F.DELETE_TCP_PROTECTION_PREFIX, $.F.DELETE_TCP_PROTECTION_PREFIXES, $.F.GET_TCP_PROTECTION_ALLOWLIST, $.F.CREATE_TCP_PROTECTION_ALLOWLIST, $.F.UPDATE_TCP_PROTECTION_ALLOWLIST, $.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, $.F.DELETE_TCP_PROTECTION_ALLOWLIST, $.F.GET_SYN_PROTECTION_RULES, $.F.GET_SYN_PROTECTION_RULE, $.F.CREATE_SYN_PROTECTION_RULE, $.F.UPDATE_SYN_PROTECTION_RULE, $.F.DELETE_SYN_PROTECTION_RULE, $.F.GET_TCP_FLOW_PROTECTION_RULES, $.F.GET_TCP_FLOW_PROTECTION_RULE, $.F.CREATE_TCP_FLOW_PROTECTION_RULE, $.F.UPDATE_TCP_FLOW_PROTECTION_RULE, $.F.DELETE_TCP_FLOW_PROTECTION_RULE, $.F.GET_SYN_PROTECTION_FILTERS, $.F.GET_SYN_PROTECTION_FILTER, $.F.CREATE_SYN_PROTECTION_FILTER, $.F.UPDATE_SYN_PROTECTION_FILTER, $.F.DELETE_SYN_PROTECTION_FILTER, $.F.GET_TCP_FLOW_PROTECTION_FILTERS, $.F.GET_TCP_FLOW_PROTECTION_FILTER, $.F.CREATE_TCP_FLOW_PROTECTION_FILTER, $.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, $.F.DELETE_TCP_FLOW_PROTECTION_FILTER, $.F.GET_DNS_PROTECTION_RULES, $.F.GET_DNS_PROTECTION_RULE, $.F.CREATE_DNS_PROTECTION_RULE, $.F.UPDATE_DNS_PROTECTION_RULE, $.F.DELETE_DNS_PROTECTION_RULE, Me.FV.MANAGE_PAGE_SHIELD_POLICY, Me.FV.CONFIGURE_PAGE_SHIELD, Me.FV.VIEW_DETECTED_CONNECTIONS, Me.FV.VIEW_DETECTED_SCRIPTS, Me.FV.VIEW_PAGE_SHIELD_POLICIES, Me.FV.VIEW_PAGE_SHIELD_SETTINGS, Me.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Me.FV.SHOW_MUTABLE_VERSION_TOOLTIP, U.y.CREATE_LIST, U.y.DELETE_LIST, U.y.ADD_LIST_ITEM, U.y.DELETE_LIST_ITEM, te.KO.PURCHASE_WORKERS_PAID, te.KO.LIST_CONFIGS, te.KO.SEARCH_CONFIGS, te.KO.CREATE_HYPERDRIVE_CONFIG, te.KO.VIEW_CONFIG_DETAILS, te.KO.UPDATE_CACHING_SETTINGS, te.KO.DELETE_HYPERDRIVE_CONFIG, te.KO.CLICK_HYPERDRIVE_DOCUMENTATION, te.KO.CLICK_GET_STARTED_GUIDE, te.KO.CLICK_CONNECTIVITY_GUIDES, te.KO.CLICK_QUICK_LINK, te.KO.CLICK_DISCORD, te.KO.CLICK_COMMUNITY, Ke.N.CNAME, Ke.N.IP_ADDRESS, Ke.N.LB, Ke.N.UPDATE_CNAME, Ke.N.UPDATE_IP_ADDRESS, Ke.N.UPDATE_LB, Ke.N.DISABLE, le.N.TIERED_CACHE, le.N.CACHE_PURGE, le.N.CACHE_ANALYTICS, ...(0, dt.P)(), ...(0, S.x4)(), ...(0, Je.m8)(), ...(0, B.SH)(), ...(0, at.Ky)(), ...(0, C.Cf)(), We.N.CREATE, We.N.EVENTS, We.N.ANALYTICS, We.N.UPDATE, We.N.GENERATE_PREVIEW, ue.RY.INITIATE_URL_SCAN, ue.RY.LOAD_SCAN_INFO, ue.Ev.LOAD_THREAT_EVENTS, ue.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, ue.Ev.THREAT_EVENTS_FILTERS, ue.Ev.ABUSE_REPORT_BUTTON_CLICK, ue.Ev.ABUSE_REPORT_SUBMIT_CLICK, ue.Ev.ABUSE_REPORT_SUBMIT_FAILED, ue.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, ue.v9.EXPAND_INSIGHT_ROW, ue.v9.ONE_CLICK_RESOLVE_BUTTON, ue.v9.FOLLOW_RESOLVE_URL, ue.v9.MANAGE_INSIGHT, ue.v9.CLICK_SCAN_NOW, ue.v9.CLICK_EXPORT_INSIGHTS, ue.v9.BULK_ARCHIVE, ue.v9.CLICK_DETAILS_BUTTON, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].detailedMetrics, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].createEndpoint, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].deployRouting, oe.Fj[oe.kq.ENDPOINT_MANAGEMENT].deleteRouting, oe.Fj[oe.kq.API_DISCOVERY].viewDiscoveredEndpoints, oe.Fj[oe.kq.API_DISCOVERY].saveDiscoveredEndpoint, oe.Fj[oe.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, oe.Fj[oe.kq.SCHEMA_VALIDATION].viewSchemasList, oe.Fj[oe.kq.SCHEMA_VALIDATION].uploadSchema, oe.Fj[oe.kq.SCHEMA_VALIDATION].viewSchemaAdoption, oe.Fj[oe.kq.SCHEMA_VALIDATION].downloadSchema, oe.Fj[oe.kq.SCHEMA_VALIDATION].deleteSchema, oe.Fj[oe.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, oe.Fj[oe.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, oe.Fj[oe.kq.SEQUENCE_ANALYTICS].viewSequencesPage, oe.Fj[oe.kq.JWT_VALIDATION].viewJWTRules, oe.Fj[oe.kq.JWT_VALIDATION].addJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].editJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].deleteJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].reprioritizeJWTRule, oe.Fj[oe.kq.JWT_VALIDATION].viewJWTConfigs, oe.Fj[oe.kq.JWT_VALIDATION].addJWTConfig, oe.Fj[oe.kq.JWT_VALIDATION].editJWTConfig, oe.Fj[oe.kq.JWT_VALIDATION].deleteJWTConfig, oe.Fj[oe.kq.SETTINGS].redirectToFirewallRulesTemplate, oe.Fj[oe.kq.SETTINGS].redirectToPages, oe.Fj[oe.kq.SETTINGS].listSessionIdentifiers, oe.Fj[oe.kq.SETTINGS].listRequestsContainingSessionIdentifiers, oe.Fj[oe.kq.SETTINGS].addOrRemoveSessionIdentifiers, oe.Fj[oe.kq.SETTINGS].redirectToCustomRules, oe.Fj[oe.kq.SETTINGS].listAllFallthroughSchemas, oe.Fj[oe.kq.SEQUENCE_RULES].listSequenceRules, oe.Fj[oe.kq.SEQUENCE_RULES].deleteSequenceRule, oe.Fj[oe.kq.SEQUENCE_RULES].reorderSequenceRule, oe.Fj[oe.kq.SEQUENCE_RULES].createSequenceRule, oe.Fj[oe.kq.SEQUENCE_RULES].editSequenceRule, K.Q.TOGGLE_V2, K.Q.FILTER, K.Q.FILTER_COUNTS, K.Q.FEEDBACK, K.Q.API_LATENCY, Le.Z.ANALYTICS, Le.Z.CREATE_AND_DEPLOY, Le.Z.CREATE_MONITOR_LINK, Le.Z.CREATE_MONITOR, Le.Z.CREATE_POOL_LINK, Le.Z.CREATE_POOL, Le.Z.EDIT_MONITOR, Le.Z.EDIT_POOL, Le.Z.LOAD_BALANCING_TABLE, Le.Z.POOL_TABLE, Le.Z.EDIT_MONITOR_LINK, Le.Z.EDIT_POOL_LINK, ...he.eT, W.y.SECONDARY_DNS_NOTIFICATION_CREATE, W.y.SECONDARY_DNS_NOTIFICATION_UPDATE, W.y.SECONDARY_DNS_NOTIFICATION_DELETE, Q.U.ZONE_TRANSFER_SUCCESS, Q.U.DNS_RECORD_CREATE, Q.U.DNS_RECORD_UPDATE, Q.U.DNS_RECORD_DELETE, j.Y.PEER_DNS_CREATE, j.Y.PEER_DNS_UPDATE, j.Y.PEER_DNS_DELETE, j.Y.ZONE_TRANSFER_ENABLE, j.Y.ZONE_TRANSFER_DISABLE, Z.V.ARGO_ENABLEMENT, Z.V.ARGO_GEO_ANALYTICS_FETCH, Z.V.ARGO_GLOBAL_ANALYTICS_FETCH, N.X.VIEW_BUCKETS_LIST, N.X.CREATE_BUCKET, N.X.VALIDATE_BUCKET, N.X.DELETE_BUCKET, N.X.VIEW_CAPTURES_LIST, N.X.CREATE_SIMPLE_CAPTURE, N.X.CREATE_FULL_CAPTURE, N.X.VIEW_FULL_CAPTURE, N.X.DOWNLOAD_SIMPLE_CAPTURE, re.bK.VIEW_RULES, re.bK.CREATE_RULE, re.bK.UPDATE_RULE, re.bK.DELETE_RULE, re.bK.VIEW_CONFIGURATION, re.bK.CREATE_CONFIGURATION, re.bK.UPDATE_CONFIGURATION, re.bK.DELETE_CONFIGURATION, ie.r8.VIEW_ALERTS, ie.r8.VIEW_ALERTS_HISTORY, ie.r8.MAGIC_OVERVIEW_ANALYTICS, ie.VZ.CREATE_SITE, ie.VZ.CREATE_TUNNEL, ie.VZ.CREATE_STATIC_ROUTE, _e.DC.CLICK_ADAPTIVE_SAMPLING, _e.DC.CLICK_TO_LOG_EXPLORER_BANNER, _e.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, _e.DC.CLICK_SWITCH_TO_RAW_LOGS, _e.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", D.U.REGISTER_DOMAIN_SEARCH_SUBMIT, D.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, D.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, D.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, D.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, D.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, D.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, D.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, D.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, D.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, D.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, D.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, D.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, D.U.REGISTER_DOMAIN_CHECKOUT_ERROR, D.U.TRANSFER_DOMAIN_CHANGE_STEP, D.U.RENEW_DOMAIN_COMPLETED, D.U.RESTORE_DOMAIN_INIT, D.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, D.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, D.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, D.U.RESTORE_DOMAIN_FAILURE, D.U.RESTORE_DOMAIN_COMPLETED, D.U.DOMAIN_DELETE_INIT, D.U.DOMAIN_DELETE_COMPLETED, D.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, D.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, D.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, D.U.DOMAIN_DELETE_CONFIRM_DELETE, D.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, D.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, D.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, D.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, D.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, D.U.DOMAIN_MOVE_START_FLOW, D.U.DOMAIN_MOVE_OPEN_DOCS, D.U.DOMAIN_MOVE_CLOSE_FLOW, D.U.DOMAIN_MOVE_PROGRESS_FLOW, D.U.DOMAIN_MOVE_SUBMIT, D.U.DOMAIN_MOVE_INITIATE_SUCCESS, D.U.DOMAIN_MOVE_INITIATE_ERROR, D.U.DOMAIN_MOVE_CANCEL, D.U.DOMAIN_MOVE_CANCEL_SUCCESS, D.U.DOMAIN_MOVE_CANCEL_ERROR, D.U.ACTION_CENTER_NAVIGATE, D.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, D.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, D.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, pe.z3.CREATE_SECRET, pe.z3.DELETE_SECRET, pe.z3.BIND_SECRET, pe.z3.DUPLICATE_SECRET, pe.z3.EDIT_SECRET, H.KO.CLICK_GET_STARTED_GUIDE, H.KO.CLICK_PIPELINE_DOCUMENTATION, H.KO.CLICK_QUICK_LINK, H.KO.CREATE_PIPELINE, H.KO.DELETE_PIPELINE, H.KO.LIST_PIPELINES, H.KO.VIEW_PIPELINE, L.S.EXISTING_DOMAIN, L.S.NEW_DOMAIN, L.S.WAF_RULESET, L.S.WORKERS, L.S.PAGES, L.S.R2, L.S.ACCOUNT_MEMBERS, V._.TEMPLATE_PRODUCT_SELECTED, V._.TEMPLATE_SELECTED, V._.TEMPLATE_SAVE_DRAFT, V._.TEMPLATE_CANCEL, V._.TEMPLATE_DEPLOY, Fe.D.CLICK_GO_BACK_SHARE_MODAL, Fe.D.CLICK_MENU_ITEM_SHARE, Fe.D.CLICK_ON_CANCEL_SHARE_MODAL, Fe.D.CLICK_ON_CLOSE_SHARE_MODAL, Fe.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Fe.D.CLICK_ON_DELETE_RULESET, Fe.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Fe.D.CLICK_ON_EDIT_SHARE_PERMISSION, Fe.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Fe.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Fe.D.CLICK_ON_SHARE_TABLE_ROW, xe.pR.CLICK_GEOGRAPHICAL_TEMPLATE, xe.pR.CLICK_IP_TEMPLATE, xe.pR.CLICK_USER_AGENT_TEMPLATE, xe.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, Je.vc.CREATED, Je.vc.ENABLED, Je.vc.DISABLED, Je.vc.DELETED, Je.vc.UPDATED, Je.vc.DOWNLOADED, ce.Gk.REQUEST_REVIEW, ce.Gk.COPY_URL, A.v.FIELD, A.v.OPERATOR, Ye.Vj.SHOW_LCC_MIGRATION_BANNER, Ye.Vj.CLICK_LCC_DOCUMENTATION, Ye.Vj.CLICK_LCC_UPGRADE_GUIDE, Ye.Vj.SHOW_LCC_MIGRATION_WARNING, Ne.y.CLICK_DISMISS_INELIGIBILITY, Ne.y.CLICK_NEXT_STEP, Ne.y.CLICK_OPT_IN, Ne.y.CLICK_OPT_IN_BUTTON, Ne.y.CLICK_OPT_OUT_BUTTON, Ne.y.DISPLAY_MODAL, Ne.y.DISPLAY_OPT_OUT_MODAL, Ne.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, Ne.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, De.AZ.LOAD_INSIGHTS, De.AZ.OPEN_SIDE_MODAL_INSIGHT, De.AZ.CLOSE_SIDE_MODAL_INSIGHT, De.AZ.CLICK_ACTION_INSIGHT, _e.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, _e.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, _e.DC.OPEN_SIDE_DRAWER, _e.DC.CLOSE_SIDE_DRAWER, ae.QV[ae.Xn].clickLoginFromMobileApp2fa, ae.QV[ae.Xn].clickTryOther2FAMethodOrBackupCode, ae.QV[ae.Xn].clickTryRecovery, ae.QV[ae.xq].clickRegenerateBackupCodes, ne.Vq.APPEAL_MITIGATION_SUBMIT, ne.Vq.APPEAL_MITIGATION_SUCCESS, ne.Vq.APPEAL_MITIGATION_FAILURE, ne.Vq.CLICK_ABUSE_REPORT_ID, ne.Vq.CLICK_ABUSE_REPORT_MITIGATIONS_LINK),
				Ce = n.eg.exactStrict(n.eg.object({
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
				ze = (X, ee) => {
					const [fe, ve] = ke(ee);
					let be, Be;
					return (0, n.nM)(ge.decode(X)) && (be = new G.Uh(X)), ve && ve.length > 0 && (Be = new G.oV(X, ve)), [fe, be, Be]
				},
				ke = X => {
					const ee = Ce.decode(X);
					if ((0, n.nM)(ee)) {
						const fe = ee.left.map(({
							context: ve
						}) => ve.map(({
							key: be
						}) => be)).reduce((ve, be) => ve.concat(be), []).filter(ve => ve in X);
						return [Te(fe, X), fe]
					}
					return [X, []]
				},
				Te = (X, ee) => Object.entries(ee).reduce((fe, [ve, be]) => (X.includes(ve) || (fe[ve] = be), fe), {}),
				$e = X => (ee, fe, ve) => {
					const [be, Be, He] = ze(fe, ve);
					if (Be) throw Be;
					return He && console.error(He), X(ee, fe, be)
				};
			var lt = t("../react/utils/zaraz.ts");
			const it = {
					identify: !0
				},
				_t = X => (ee, fe, ve) => (it[fe] || lt.tg === null || lt.tg === void 0 || lt.tg.track(fe, ve), X(ee, fe, ve));
			var Et = t("../react/common/selectors/userSelectors.ts"),
				yt = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function mt(X) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var fe = arguments[ee] != null ? Object(arguments[ee]) : {},
						ve = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && ve.push.apply(ve, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), ve.forEach(function(be) {
						Ve(X, be, fe[be])
					})
				}
				return X
			}

			function Ve(X, ee, fe) {
				return ee = ft(ee), ee in X ? Object.defineProperty(X, ee, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[ee] = fe, X
			}

			function ft(X) {
				var ee = nt(X, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function nt(X, ee) {
				if (typeof X != "object" || X === null) return X;
				var fe = X[Symbol.toPrimitive];
				if (fe !== void 0) {
					var ve = fe.call(X, ee || "default");
					if (typeof ve != "object") return ve;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(X)
			}
			const rt = new Set(["cf_argo", "load_balancing_basic_plus"]),
				ut = new Set(["pro", "business"]),
				Se = ({
					price: X,
					ratePlanId: ee,
					ratePlanName: fe,
					frequency: ve,
					isNewSubscription: be
				}) => ({
					event: "purchase",
					new_subscription: be,
					ecommerce: {
						transaction_id: (0, yt.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: X
					},
					items: [{
						item_id: ee,
						item_name: fe || ee,
						frequency: ve,
						price: X
					}]
				}),
				Y = X => {
					const {
						price: ee,
						frequency: fe,
						plan: ve,
						ratePlanId: be,
						ratePlanName: Be
					} = X;
					return ut.has(ve) ? mt({}, Se({
						price: ee,
						ratePlanId: be,
						ratePlanName: Be,
						frequency: fe,
						isNewSubscription: !0
					}), {
						label: ve
					}) : void 0
				},
				de = X => {
					const {
						price: ee,
						frequency: fe,
						ratePlan: ve,
						ratePlanName: be
					} = X;
					return rt.has(ve) ? mt({}, Se({
						price: ee,
						ratePlanId: ve,
						ratePlanName: be,
						frequency: fe,
						isNewSubscription: !0
					}), {
						label: ve
					}) : void 0
				},
				ye = X => {
					const {
						price: ee,
						frequency: fe,
						plan: ve,
						ratePlanId: be,
						ratePlanName: Be,
						label: He
					} = X;
					return ut.has(ve) ? mt({}, Se({
						price: ee,
						frequency: fe,
						ratePlanId: be,
						ratePlanName: Be,
						isNewSubscription: !1
					}), {
						label: He || ve
					}) : void 0
				},
				Ie = X => {
					const {
						price: ee,
						frequency: fe,
						ratePlan: ve,
						ratePlanName: be,
						oldRatePlan: Be
					} = X;
					return rt.has(ve) ? mt({}, Se({
						price: ee,
						frequency: fe,
						ratePlanId: ve,
						ratePlanName: be,
						isNewSubscription: !1
					}), {
						label: `${Be}->${ve}`
					}) : void 0
				},
				Re = "pageview",
				Ge = "create zone",
				et = "create user",
				wt = "Plan Purchase Success",
				vt = "Product Purchase Success",
				It = "Plan Update Success",
				Qe = "Product Update Success",
				Ot = {
					[Re]: !0,
					[Ge]: !0,
					[et]: !0,
					[wt]: !0,
					[vt]: !0,
					[It]: !0,
					[Qe]: !0
				},
				Mt = X => {
					var ee;
					return !!((ee = X.gates.assignments) === null || ee === void 0 ? void 0 : ee["dx-enable-google-tag-manager"])
				},
				At = X => {
					var ee;
					return !!((ee = X.gates.assignments) === null || ee === void 0 ? void 0 : ee["dx-enable-adobe-launch"])
				},
				Rt = X => {
					const ee = /\|MCMID\|([0-9]+)\|/,
						fe = X.match(ee);
					return fe ? fe[1] : void 0
				},
				Pt = X => {
					var ee;
					const {
						deviceViewport: fe,
						page: ve,
						previousPage: be,
						pageName: Be,
						utm_campaign: He,
						_ga: tt,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Xe
					} = X, {
						origin: qe
					} = window.location, st = (0, Et.PR)((0, l.bh)().getState());
					return {
						event: be !== void 0 && ve !== be ? "virtual_page_view" : "page_load",
						device_type: fe,
						hostname: qe,
						language: navigator.language,
						locale: (0, u.r)((0, l.bh)().getState()),
						page_location: ve ? `${qe}${ve}` : "[redacted]",
						page_path: ve ? `${ve}` : "[redacted]",
						page_referrer: be ? `${qe}/${be}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Be || "[redacted]",
						page_url: ve ? `${qe}${ve}` : "[redacted]",
						query: He ? `?utm_campaign=${He}` : "[redacted]",
						user_properties: {
							ga_client_id: (ee = tt) !== null && ee !== void 0 ? ee : void 0,
							ga_client_id_s: tt ? `s${tt}` : void 0,
							user_id: me() ? st == null ? void 0 : st.id : void 0,
							ecid: Xe ? Rt(Xe) : void 0
						}
					}
				},
				Nt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				ht = X => {
					const {
						status: ee
					} = X;
					return ee === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				xt = (X, ee) => {
					switch (X) {
						case Re:
							return Pt(ee);
						case Ge:
							return Nt();
						case et:
							return ht(ee);
						case wt:
							return Y(ee);
						case vt:
							return de(ee);
						case It:
							return ye(ee);
						case Qe:
							return Ie(ee);
						default:
							return
					}
				},
				bt = X => (ee, fe, ve) => {
					if (Ot[fe]) {
						var be;
						const Be = xt(fe, ve);
						Be && ((be = window.dataLayer) === null || be === void 0 || be.push(Be))
					}
					return X(ee, fe, ve)
				};
			var Dt = t("../react/utils/cookiePreferences.ts");

			function Bt(X) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var fe = arguments[ee] != null ? Object(arguments[ee]) : {},
						ve = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && ve.push.apply(ve, Object.getOwnPropertySymbols(fe).filter(function(be) {
						return Object.getOwnPropertyDescriptor(fe, be).enumerable
					})), ve.forEach(function(be) {
						Lt(X, be, fe[be])
					})
				}
				return X
			}

			function Lt(X, ee, fe) {
				return ee = Ut(ee), ee in X ? Object.defineProperty(X, ee, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[ee] = fe, X
			}

			function Ut(X) {
				var ee = jt(X, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function jt(X, ee) {
				if (typeof X != "object" || X === null) return X;
				var fe = X[Symbol.toPrimitive];
				if (fe !== void 0) {
					var ve = fe.call(X, ee || "default");
					if (typeof ve != "object") return ve;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(X)
			}
			const Ft = X => {
					const ee = Mt((0, l.bh)().getState()),
						fe = At((0, l.bh)().getState()),
						ve = ee || fe;
					r().init(Bt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: h() && !(0, a.gm)() && me(),
						middlewares: [O, $e, M, _t, ...ve ? [bt] : []]
					}, X))
				},
				St = () => {
					r().identify(Bt({}, (0, e.getAttribution)(), {
						locale: (0, u.r)((0, l.bh)().getState()),
						isCloudflare: !!(0, _.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				h = () => !0,
				R = () => {
					(0, Dt.kT)("sparrow_id")
				},
				me = () => (0, Dt.Xm)()
		},
		"../utils/initStyles.ts": function(F, y, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				l = document.head || document.getElementsByTagName("head")[0],
				u = s => {
					const c = [];
					for (let m in s.colors) {
						const n = s.colors[m];
						if (Array.isArray(n) && m !== "categorical")
							for (let o = 0; o < n.length; ++o) c.push(`--cf-${m}-${o}:${n[o]};`)
					}
					return c.join(`
`)
				},
				_ = () => {
					const s = (0, e.Yc)(),
						c = `
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
      background-color: ${s?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${s?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${s?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${s?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${s?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${s?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
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
      ${u(e.Rl)}
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
					let m = document.getElementById(a);
					m ? m.innerText = "" : (m = document.createElement("style"), m.id = a, l.appendChild(m)), m.appendChild(document.createTextNode(c)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(_), y.Z = _
		},
		"../utils/sentry/lastSentEventId.ts": function(F, y, t) {
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
		"../utils/zaraz.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Ro: function() {
					return o
				},
				bM: function() {
					return c
				},
				tg: function() {
					return s
				},
				yn: function() {
					return n
				}
			});

			function e(i) {
				for (var f = 1; f < arguments.length; f++) {
					var d = arguments[f] != null ? Object(arguments[f]) : {},
						p = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(d).filter(function(T) {
						return Object.getOwnPropertyDescriptor(d, T).enumerable
					})), p.forEach(function(T) {
						r(i, T, d[T])
					})
				}
				return i
			}

			function r(i, f, d) {
				return f = a(f), f in i ? Object.defineProperty(i, f, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[f] = d, i
			}

			function a(i) {
				var f = l(i, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function l(i, f) {
				if (typeof i != "object" || i === null) return i;
				var d = i[Symbol.toPrimitive];
				if (d !== void 0) {
					var p = d.call(i, f || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(i)
			}
			const u = {
					track: (i, f) => null,
					set: (i, f) => console.log(`zaraz.set(${i}, ${f})`)
				},
				_ = {
					track: (i, f) => {
						var d;
						(d = window.zaraz) === null || d === void 0 || d.track(i, e({}, f, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, f) => {
						var d;
						return (d = window.zaraz) === null || d === void 0 ? void 0 : d.set(i, f)
					}
				};
			let s;
			const c = () => {
					window.zaraz, s = _
				},
				m = ["email", "first_name", "last_name"],
				n = i => {
					m.forEach(f => {
						var d;
						(d = s) === null || d === void 0 || d.set(f, i[f])
					})
				},
				o = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(F, y, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				l = t.n(a),
				u = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				_ = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(_),
				c = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				m = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-icon/es/index.js"),
				o = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-forms/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				d = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				p = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				T = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				I = t("../../../common/component/component-filter-bar/src/constants.js"),
				E = t("../../../common/component/component-filter-bar/src/utils.js");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(U) {
					for (var D = 1; D < arguments.length; D++) {
						var B = arguments[D];
						for (var $ in B) Object.prototype.hasOwnProperty.call(B, $) && (U[$] = B[$])
					}
					return U
				}, g.apply(this, arguments)
			}

			function b(U) {
				for (var D = 1; D < arguments.length; D++) {
					var B = arguments[D] != null ? Object(arguments[D]) : {},
						$ = Object.keys(B);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(B).filter(function(te) {
						return Object.getOwnPropertyDescriptor(B, te).enumerable
					})), $.forEach(function(te) {
						v(U, te, B[te])
					})
				}
				return U
			}

			function v(U, D, B) {
				return D = w(D), D in U ? Object.defineProperty(U, D, {
					value: B,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[D] = B, U
			}

			function w(U) {
				var D = M(U, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function M(U, D) {
				if (typeof U != "object" || U === null) return U;
				var B = U[Symbol.toPrimitive];
				if (B !== void 0) {
					var $ = B.call(U, D || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(U)
			}
			const O = 70,
				P = (0, u.createStyledComponent)(({
					showOverflow: U
				}) => b({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, U ? {} : {
					maxHeight: O,
					overflow: "hidden"
				})),
				L = (0, u.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				C = (0, u.createStyledComponent)(({
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
				A = (0, u.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				S = (0, u.createStyledComponent)(({
					theme: U
				}) => ({
					color: U.colors.gray[4],
					mr: 1
				}), "span"),
				G = (0, u.createStyledComponent)(() => ({
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
				ne = (0, u.createStyledComponent)(({
					buttonStyle: U
				}) => b({
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
				}, U), m.zx),
				ce = (0, u.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				le = (0, u.createStyledComponent)(({
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
				Q = (0, u.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				W = U => U.current ? [...U.current.children].reduce((D, B) => (B.offsetTop >= O && D++, D), 0) : 0;
			let K = 0;
			class j extends e.Component {
				constructor() {
					super();
					v(this, "overflowWrapper", (0, e.createRef)()), v(this, "hasOverflowed", D => {
						const B = W(this.overflowWrapper);
						D.scrollHeight > O && B >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (D.scrollHeight < O || B === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), v(this, "addNewFilter", () => {
						const {
							filterDefinitions: D
						} = this.props, B = (0, E.TE)(D), $ = Object.keys(B)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: $,
								operator: (0, E.uv)($, B),
								value: (0, E.TT)($, B)
							}
						})
					}), v(this, "handleOpenFilterEdit", D => {
						this.setState({
							openFilter: D,
							filterChanges: b({}, this.props.filters[D])
						})
					}), v(this, "handleRemoveFilterClick", (D, B) => {
						D.stopPropagation(), this.removeFilter(B)
					}), v(this, "removeFilter", D => {
						const {
							handleFiltersChange: B
						} = this.props, $ = [...this.props.filters], te = $[D];
						$.splice(D, 1), B($), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: te.key,
							operator: te.operator,
							value: te.value
						})
					}), v(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), v(this, "handleFilterSubmit", D => {
						const {
							filterDefinitions: B
						} = this.props;
						D.preventDefault();
						const {
							filterChanges: $
						} = this.state, te = typeof B[$.key].parse == "function" ? Array.isArray($.value) ? $.value.map(B[$.key].parse) : B[$.key].parse($.value) : $.value;
						if (B[$.key].validate && (Array.isArray(te) ? !te.every(B[$.key].validate) : !B[$.key].validate(te))) return this.setState({
							invalid: !0
						});
						const re = [...this.props.filters],
							ie = b({}, $, {
								value: te
							}),
							N = !re[this.state.openFilter];
						N ? re.push(ie) : re[this.state.openFilter] = b({}, ie), this.props.handleFiltersChange(re, ie), (N ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ie.key,
							operator: ie.operator,
							value: ie.value
						}), this.closeOpenFilterChanges()
					}), v(this, "handlePendingKeyChange", ({
						value: D
					}) => {
						const {
							filterDefinitions: B
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: D,
								operator: (0, E.uv)(D, B),
								value: (0, E.TT)(D, B)
							}
						})
					}), v(this, "handlePendingOperatorChange", ({
						value: D
					}) => {
						let B = b({}, this.state.filterChanges, {
							operator: D
						});
						if ((0, E.dr)(D)) {
							var $, te;
							(($ = this.state.filterChanges) === null || $ === void 0 ? void 0 : $.value) && !Array.isArray((te = this.state.filterChanges) === null || te === void 0 ? void 0 : te.value) && (B.value = [this.state.filterChanges.value])
						} else {
							var re, ie, N;
							((re = this.state.filterChanges) === null || re === void 0 ? void 0 : re.value) && Array.isArray((ie = this.state.filterChanges) === null || ie === void 0 ? void 0 : ie.value) && ((N = this.state.filterChanges) === null || N === void 0 ? void 0 : N.value.length) > 0 && (B.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: B
						})
					}), v(this, "handlePendingValueChange", D => {
						this.setState({
							invalid: !1,
							filterChanges: b({}, this.state.filterChanges, {
								value: D
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
				componentDidUpdate(D) {
					D.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(D) {
					const {
						formatLabel: B,
						filterDefinitions: $
					} = this.props, {
						operator: te
					} = this.state.filterChanges, re = $[this.state.filterChanges.key], ie = this.state.filterChanges.value, N = k => Array.isArray(k) ? k.map(H => H.value) : (k == null ? void 0 : k.value) || null;
					if (re.renderValueComponent) return re.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (re.type) {
						case I.k.custom: {
							var V;
							return r().createElement(re.CustomComponent, g({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (V = re == null ? void 0 : re.customProps) !== null && V !== void 0 ? V : {}))
						}
						case I.k.select:
							return (0, E.dr)(te) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !re.options,
								value: typeof ie.split == "function" ? ie == null ? void 0 : ie.split(",") : Array.isArray(ie) ? ie : [],
								options: re.options ? re.options.map(k => ({
									value: k.value || k,
									label: k.label || B(this.state.filterChanges.key, k, D)
								})) : ie ? (Array.isArray(ie) ? ie : ie.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(_.Trans, {
									id: re.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: re.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: k => {
									this.handlePendingValueChange(N(k))
								},
								isValidNewOption: k => {
									const H = re.validate;
									return !H && k || k && H([k])
								},
								getNewOptionData: (k, H) => ({
									value: k,
									label: H
								})
							}) : r().createElement(i.hQ, {
								hideLabel: !0,
								value: ie,
								options: re.options.map(k => ({
									value: k,
									label: B(this.state.filterChanges.key, k, D)
								})),
								onChange: ({
									value: k
								}) => this.handlePendingValueChange(k)
							});
						case I.k.string:
						default:
							return (0, E.dr)(te) ? r().createElement(d.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ie.split == "function" ? ie == null ? void 0 : ie.split(",") : Array.isArray(ie) ? ie : [],
								options: ie ? (Array.isArray(ie) ? ie : ie.split(",")).map(k => ({
									label: k,
									value: k
								})) : [],
								noOptionsMessage: () => null,
								placeholder: D.t("analytics.report.filters.labels.placeholder", {
									example: $[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: k => {
									this.handlePendingValueChange(N(k))
								},
								isValidNewOption: k => {
									const H = re.validate;
									return !H && k || k && H([k])
								},
								getNewOptionData: (k, H) => ({
									value: k,
									label: H
								}),
								formatCreateLabel: k => D.t("filter_editor.value_create_label", {
									value: k
								})
							}) : r().createElement(_.I18n, null, k => r().createElement(c.I, {
								value: this.state.filterChanges.value,
								onChange: H => this.handlePendingValueChange(H.target.value),
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
						formatLabel: D,
						filterDefinitions: B,
						modalStyles: $,
						filterIconType: te,
						buttonStyle: re,
						secondaryActionComponent: ie
					} = this.props, N = W(this.overflowWrapper), V = `filterPanel${this.state.id}`, k = this.state.openFilter !== null;
					return r().createElement(_.I18n, null, H => r().createElement(f.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(Q, null, r().createElement(f.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(ne, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": k,
						"aria-controls": V,
						inverted: !0,
						buttonStyle: re
					}, r().createElement(n.J, {
						type: te || "add",
						mr: 1,
						label: H.t("common.add", {
							_: "Add"
						})
					}), r().createElement(_.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!ie && r().createElement(f.ZC, null, ie)), this.props.filters.length > 0 && r().createElement(ce, null, r().createElement(_.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(P, {
						innerRef: this.overflowWrapper,
						overflowLimit: O,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ae, pe) => {
						const {
							key: ue,
							operator: _e,
							value: oe
						} = ae, we = B[ue].ignoreLabelTranslation ? B[ue].label : H.t(B[ue].label), De = H.t(`analytics.report.filters.operators.${_e}`), Me = Array.isArray(oe) ? oe.map(Ne => D(ue, Ne, H)).join(", ") : D(ue, oe, H), xe = `${we} ${De} ${Me}`;
						return r().createElement(L, {
							key: `${ue}-${_e}-${oe}`,
							title: xe
						}, r().createElement(C, {
							onClick: () => this.handleOpenFilterEdit(pe)
						}, r().createElement(f.ZC, {
							display: "flex"
						}, r().createElement(A, null, we), r().createElement(S, null, De), r().createElement(G, null, Me), (0, E.oN)(ae, B) ? r().createElement(o.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(le, {
							onClick: Ne => this.handleRemoveFilterClick(Ne, pe),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), k && r().createElement(T.Z, {
						id: V,
						filterDefinitions: B,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, E.oN)(this.state.filterChanges, B),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: D,
						modalStyles: $
					}), this.state.hasOverflowed && r().createElement(p.Z, {
						count: N,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			v(j, "propTypes", {
				filterDefinitions: l().shape({}),
				filters: l().arrayOf(l().shape({
					key: l().string,
					operator: l().string,
					value: l().string
				})),
				handleFiltersChange: l().func.isRequired,
				formatLabel: l().func.isRequired,
				onAddFilter: l().func,
				onEditFilter: l().func,
				onRemoveFilter: l().func,
				children: l().node,
				modalStyles: l().object,
				filterIconType: l().string,
				buttonStyle: l().object,
				secondaryActionComponent: l().node
			}), y.Z = j
		},
		"../../../common/component/component-filter-bar/src/index.js": function(F, y, t) {
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
					return l.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				a = t("../../../common/component/component-filter-bar/src/constants.js"),
				l = t("../../../common/component/component-filter-bar/src/utils.js"),
				u = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				OZ: function() {
					return u
				},
				YB: function() {
					return l
				}
			});

			function e(s, c, m) {
				return c = r(c), c in s ? Object.defineProperty(s, c, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[c] = m, s
			}

			function r(s) {
				var c = a(s, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function a(s, c) {
				if (typeof s != "object" || s === null) return s;
				var m = s[Symbol.toPrimitive];
				if (m !== void 0) {
					var n = m.call(s, c || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(s)
			}
			class l extends Error {
				constructor(c, m) {
					super(m);
					e(this, "translationKey", void 0), this.translationKey = c, this.name = "TranslatorError"
				}
			}
			class u extends l {
				constructor(c, m) {
					super(c, `Translation key not found: ${c}, locale: ${m}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var _ = null
		},
		"../../../common/util/types/src/api/domain.ts": function(F, y, t) {
			"use strict";
			t.d(y, {
				Aw: function() {
					return M
				},
				Ib: function() {
					return v
				},
				Ks: function() {
					return O
				},
				MS: function() {
					return w
				},
				PN: function() {
					return p
				},
				Pp: function() {
					return l
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
					return b
				},
				qp: function() {
					return n
				},
				wR: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const r = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				a = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				l = e.eg.object({
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
				u = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				_ = e.eg.object({
					registrant: l.optional,
					technical: l.optional,
					administrator: l.optional,
					billing: l.optional
				}),
				s = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: _.optional,
					years: e.eg.number
				}),
				c = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let m = function(L) {
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
						status: e.eg.enum(m).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: c.optional,
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
					transfer_conditions: u.optional,
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
				i = e.eg.object({
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
			const T = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(p),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				I = e.eg.object({
					designated_approvers: e.eg.array(T)
				});
			let E = function(L) {
				return L.PENDING = "pending", L.PENDING_UPDATE = "pending_update", L.ENABLED = "enabled", L.DISABLED = "disabled", L
			}({});
			const g = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(E)
				}),
				b = e.eg.intersection([g, I]),
				v = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let w = function(L) {
				return L.UNLOCK_APPROVAL = "UnlockApprovalRequest", L.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", L.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", L.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", L
			}({});
			const M = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				O = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(F, y, t) {
			"use strict";
			t.d(y, {
				df: function() {
					return r
				},
				eX: function() {
					return a
				},
				fG: function() {
					return u
				},
				jI: function() {
					return l
				},
				qu: function() {
					return e
				},
				zc: function() {
					return _
				}
			});
			let e = function(s) {
					return s.Custom = "custom", s.Root = "root", s.Managed = "managed", s.Zone = "zone", s.RateLimit = "ratelimit", s
				}({}),
				r = function(s) {
					return s.Cache = "http_request_cache_settings", s.HttpCustomErrors = "http_custom_errors", s.HttpConfigSettings = "http_config_settings", s.HttpLogCustomFields = "http_log_custom_fields", s.HttpRateLimit = "http_ratelimit", s.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", s.HttpRequestFirewallCustom = "http_request_firewall_custom", s.HttpRequestFirewallManaged = "http_request_firewall_managed", s.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", s.HttpRequestLateTransform = "http_request_late_transform", s.HttpRequestMain = "http_request_main", s.HttpRequestOrigin = "http_request_origin", s.HttpRequestRedirect = "http_request_redirect", s.HttpRequestSanitize = "http_request_sanitize", s.HttpRequestSBFM = "http_request_sbfm", s.HttpRequestsSnippets = "http_request_snippets", s.HttpRequestTransform = "http_request_transform", s.HttpResponseCompression = "http_response_compression", s.HttpResponseFirewallManaged = "http_response_firewall_managed", s.HttpResponseTransform = "http_response_headers_transform", s.L4DDoS = "ddos_l4", s.L7DDoS = "ddos_l7", s.MagicIDS = "magic_transit_ids_managed", s.MagicManaged = "magic_transit_managed", s.MagicTransit = "magic_transit", s.MagicTransitRateLimit = "magic_transit_ratelimit", s
				}({}),
				a = function(s) {
					return s.Execute = "execute", s.All = "all", s.Block = "block", s.JSChallenge = "js_challenge", s.Challenge = "challenge", s.Allow = "allow", s.Bypass = "bypass", s.Log = "log", s.Rewrite = "rewrite", s.Score = "score", s.Skip = "skip", s.Managed_Challenge = "managed_challenge", s.DDoS_Dynamic = "ddos_dynamic", s.Select_Config = "select_config", s.Set_Config = "set_config", s.Reset = "reset", s.Redirect = "redirect", s.Cache = "set_cache_settings", s.WhiteList = "whitelist", s.Error = "serve_error", s
				}({}),
				l = function(s) {
					return s.ZONE_LOCKDOWN = "zoneLockdown", s.UA_BLOCK = "uaBlock", s.BIC = "bic", s.HOT = "hot", s.SECURITY_LEVEL = "securityLevel", s.RATE_LIMIT = "rateLimit", s.WAF = "waf", s
				}({}),
				u = function(s) {
					return s.DEFAULT = "default", s.MEDIUM = "medium", s.LOW = "low", s.EOFF = "eoff", s.HIGH = "high", s.VERY_HIGH = "very_high", s
				}({}),
				_ = function(s) {
					return s.DEFAULT = "", s.XML = "text/xml", s.JSON = "application/json", s.TEXT = "text/plain", s.HTML = "text/html", s
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(F, y, t) {
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
			const r = (a, l) => {
				if (l !== void 0) throw new Error("Unexpected object: " + a);
				return l
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(F, y, t) {
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
		"../react/common/out.css": function(F, y, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[F.id, e, ""]
			]);
			var r, a, l = {
				hmr: !0
			};
			l.transform = r, l.insertInto = void 0;
			var u = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, l);
			e.locals && (F.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(F, y, t) {
			y = F.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), y.push([F.id, `/*! tailwindcss v4.1.10 | MIT License | https://tailwindcss.com */
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
  .bg-accent {
    background-color: var(--color-accent);
  }
  .bg-bg-primary {
    background-color: var(--color-bg-primary);
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(F, y, t) {
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
				var l = e[a],
					u = l[0];
				return t.e(l[1]).then(function() {
					return t.t(u, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", F.exports = r
		}
	}
]);

//# debugId=6e603906-616b-5d0b-864a-7e7c426680c7