! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "53a22f81-a86f-5305-90e3-2e3840fe31ce")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				J8: function() {
					return i
				},
				Jd: function() {
					return o
				},
				QY: function() {
					return m
				},
				Qw: function() {
					return s
				},
				ki: function() {
					return p
				},
				wz: function() {
					return P
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../../../../node_modules/query-string/query-string.js"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f;
			const s = () => Object.keys(l.Z).reduce((b, _) => (_.indexOf("cf_beta.") === 0 && l.Z.get(_) === "true" && b.push(_.split(".").slice(1).join(".")), b), []),
				p = () => {
					var b, _, T;
					return ((b = window) === null || b === void 0 || (_ = b.bootstrap) === null || _ === void 0 || (T = _.data) === null || T === void 0 ? void 0 : T.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((f = window) === null || f === void 0 ? void 0 : f.location) && l.Z) {
				const b = u().parse(window.location.search);
				b.beta_on && l.Z.set(`cf_beta.${b.beta_on}`, !0), b.beta_off && l.Z.set(`cf_beta.${b.beta_off}`, !1)
			}
			const v = {},
				n = b => {
					var _, T, E;
					return Object.prototype.hasOwnProperty.call(v, b) ? v[b] : ((_ = window) === null || _ === void 0 || (T = _.bootstrap) === null || T === void 0 || (E = T.data) === null || E === void 0 ? void 0 : E.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(C => C === b) ? (v[b] = !0, !0) : (v[b] = !1, !1)
				},
				c = b => l.Z ? l.Z.get(`cf_beta.${b}`) === !0 : !1,
				i = b => c(b) || n(b),
				g = () => !0,
				o = () => {
					var b, _, T;
					return ((b = window) === null || b === void 0 || (_ = b.bootstrap) === null || _ === void 0 || (T = _.data) === null || T === void 0 ? void 0 : T.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				m = b => {
					const _ = (0, e.uF)(b),
						T = (_ == null ? void 0 : _.roles) || [];
					return (0, r.qR)(location.pathname) && T.length === 1 && T.some(E => E === "Administrator Read Only")
				},
				I = () => {
					var b, _, T;
					return ((b = window) === null || b === void 0 || (_ = b.location) === null || _ === void 0 || (T = _.origin) === null || T === void 0 ? void 0 : T.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				P = () => I() === "fed"
		},
		"../functions/utils/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				r = "cf_fv_preview",
				a = "cf_pv",
				u = "current",
				l = "hash",
				f = "deploymentPreview",
				s = "fragmentPreview",
				p = c => c === u ? v() : n(),
				v = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (c = 72) => {
					const i = 36e5;
					return new Date(Date.now() + c * i)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				E9: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(b) {
				for (var _ = 1; _ < arguments.length; _++) {
					var T = arguments[_] != null ? Object(arguments[_]) : {},
						E = Object.keys(T);
					typeof Object.getOwnPropertySymbols == "function" && E.push.apply(E, Object.getOwnPropertySymbols(T).filter(function(C) {
						return Object.getOwnPropertyDescriptor(T, C).enumerable
					})), E.forEach(function(C) {
						a(b, C, T[C])
					})
				}
				return b
			}

			function a(b, _, T) {
				return _ = u(_), _ in b ? Object.defineProperty(b, _, {
					value: T,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[_] = T, b
			}

			function u(b) {
				var _ = l(b, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function l(b, _) {
				if (typeof b != "object" || b === null) return b;
				var T = b[Symbol.toPrimitive];
				if (T !== void 0) {
					var E = T.call(b, _ || "default");
					if (typeof E != "object") return E;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(b)
			}
			const f = e.z.string().regex(/^((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))$/g),
				s = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				p = e.z.string(),
				v = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(p, v),
				c = e.z.enum(["live", "previews"]),
				i = (b, _) => {
					const T = b.data.cookies[_],
						E = {
							[PREVIEW_VERSIONING_COOKIE]: f,
							[DEPLOYMENT_VERSION_COOKIE]: s
						};
					try {
						return E[_].parse(T)
					} catch {
						return null
					}
				},
				g = b => {
					try {
						return decodeURIComponent(b).split(",").reduce((_, T) => {
							const E = T.split(":"),
								C = p.parse(E[0]),
								L = v.parse(E[1]);
							return r({}, _, {
								[C]: L
							})
						}, {})
					} catch {
						return {}
					}
				},
				o = b => {
					const _ = b.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						T = g(_);
					try {
						return n.parse(T)
					} catch {
						return null
					}
				},
				m = b => {
					const _ = f.parse(b),
						[T, ...E] = _.split("-"),
						C = E.join("-");
					return {
						projectType: T,
						deploymentId: C
					}
				},
				I = (b, _) => {
					if (!_) return "";
					try {
						var T;
						const {
							projectType: E,
							deploymentId: C
						} = m(_), L = {
							live: b.env.PAGES_WORKERS_LIVE_HOST,
							previews: b.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: S,
							pathname: k,
							search: M
						} = new URL(b.request.url), y = S == null || (T = S.split(".")) === null || T === void 0 ? void 0 : T[0];
						if (C && C !== y && c.safeParse(E).success) {
							const D = L[E];
							return `https://${C}.${D}${k}${M}`
						}
					} catch (E) {
						console.log(E)
					}
					return ""
				},
				P = (b, _) => {
					if (!_) return "";
					try {
						var T;
						const E = b.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: C,
								pathname: L,
								search: S
							} = new URL(b.request.url),
							k = C == null || (T = C.split(".")) === null || T === void 0 ? void 0 : T[0],
							{
								deploymentSHA: M
							} = parsePagesDevUrl(b.env.CF_PAGES_URL),
							y = b.request.headers.get("sec-fetch-dest") === "document";
						if (_ && _ !== k && _ !== M && !y) return `https://${_}.${E}${L}${S}`
					} catch (E) {
						console.log(E)
					}
					return ""
				}
		},
		"../init.ts": function($, h, t) {
			"use strict";
			t.r(h);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				a = t("../libs/init/initGlobal.ts"),
				u = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function f(R) {
				for (var z = 1; z < arguments.length; z++) {
					var q = arguments[z] != null ? Object(arguments[z]) : {},
						oe = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(q).filter(function(me) {
						return Object.getOwnPropertyDescriptor(q, me).enumerable
					})), oe.forEach(function(me) {
						s(R, me, q[me])
					})
				}
				return R
			}

			function s(R, z, q) {
				return z = p(z), z in R ? Object.defineProperty(R, z, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[z] = q, R
			}

			function p(R) {
				var z = v(R, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function v(R, z) {
				if (typeof R != "object" || R === null) return R;
				var q = R[Symbol.toPrimitive];
				if (q !== void 0) {
					var oe = q.call(R, z || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(R)
			}
			const n = R => {
				const z = R && R.headers || {},
					q = new Headers(z);
				return q.append("X-Cross-Site-Security", "dash"), f({}, R, {
					headers: q
				})
			};
			(0, l.register)({
				request: (R, z) => {
					try {
						return new URL(R), R === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", z] : [R, z]
					} catch {
						return [R, n(z)]
					}
				}
			});
			var c = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				g = t("../react/app/providers/storeContainer.js");
			let o = "";
			const m = 61;

			function I(R) {
				const z = R.substr(1);
				if (z && o !== z) {
					const q = document.getElementById(z);
					if (q) {
						const oe = q.getBoundingClientRect().top;
						if (oe > 0) {
							const me = oe - m;
							document.documentElement.scrollTop = me
						}
					}
				}
				o = z
			}

			function P(R) {
				R.listen(z => I(z.hash))
			}
			var b = t("../../../../node_modules/cookie/index.js"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = t("../functions/utils/constants.ts");
			const E = R => {
					switch (R) {
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
				C = (R, z = !1) => {
					var q;
					const oe = E(R),
						me = `
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
    <h1 id="error-title">${oe.title}</h1>
    <p id="error-description">${oe.description}</p>
  </div>
  `,
						Oe = z ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${_.fk.orange[9]};
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
					return me + Oe
				},
				L = R => {
					var z;
					const q = document.getElementById(R);
					!q || (z = q.parentNode) === null || z === void 0 || z.removeChild(q)
				};

			function S() {
				const R = document.getElementById("loading-state");
				R == null || R.classList.add("hide"), R == null || R.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(L)
				})
			}

			function k(R) {
				var z;
				const q = document.getElementById("loading-state"),
					oe = !!((z = b.parse(document.cookie)) === null || z === void 0 ? void 0 : z[T.b1]);
				!q || (q.innerHTML = C(R == null ? void 0 : R.code, oe))
			}
			var M = t("../utils/initStyles.ts"),
				y = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				D = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				N = t("../react/common/selectors/languagePreferenceSelector.ts"),
				x = t("../flags.ts"),
				Z = t("../utils/getDashVersion.ts");
			const re = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ge = !0,
				ce = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				K = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var Q = t("../utils/sentry/lastSentEventId.ts"),
				W = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				j = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const A = R => {
				const z = async q => {
					var oe, me;
					const Oe = {
						envelope: q.body,
						url: R.url,
						isPreviewDeploy: (oe = window) === null || oe === void 0 || (me = oe.build) === null || me === void 0 ? void 0 : me.isPreviewDeploy,
						release: (0, Z.t)()
					};
					try {
						const Ie = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(Oe)
						});
						return {
							statusCode: Ie.status,
							headers: {
								"x-sentry-rate-limits": Ie.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Ie.headers.get("Retry-After")
							}
						}
					} catch (Ie) {
						return console.log(Ie), (0, j.$2)(Ie)
					}
				};
				return W.q(R, z)
			};
			var O = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				F = t("../../../../node_modules/history/esm/history.js"),
				J = (0, F.lX)(),
				ne = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				G = t("../react/utils/url.ts");
			const B = (0, ne.Rf)();
			let V;

			function te(R) {
				return le(R, "react-router-v5")
			}

			function le(R, z) {
				return (q, oe = !0, me = !0) => {
					oe && B && B.location && (V = q({
						name: (0, G.Fl)(B.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": z
						}
					})), me && R.listen && R.listen((Oe, Ie) => {
						if (Ie && (Ie === "PUSH" || Ie === "POP")) {
							V && V.finish();
							const ke = {
								"routing.instrumentation": z
							};
							V = q({
								name: (0, G.Fl)(Oe.pathname),
								op: "navigation",
								tags: ke
							})
						}
					})
				}
			}
			var pe = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ue = t.n(pe),
				_e = t("../../../common/intl/intl-core/src/errors.ts"),
				be = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Te = t("../react/common/middleware/sparrow/errors.ts");

			function Le(R, z, q) {
				return z = Ee(z), z in R ? Object.defineProperty(R, z, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[z] = q, R
			}

			function Ee(R) {
				var z = De(R, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function De(R, z) {
				if (typeof R != "object" || R === null) return R;
				var q = R[Symbol.toPrimitive];
				if (q !== void 0) {
					var oe = q.call(R, z || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(R)
			}
			class Me {
				constructor() {
					Le(this, "name", Me.id)
				}
				setupOnce() {
					t.g.console && (0, be.hl)(t.g.console, "error", z => (...q) => {
						const oe = q.find(me => me instanceof Error);
						if (re && oe) {
							let me, Oe = !0;
							if (oe instanceof Te.ez) {
								const Ie = oe instanceof Te.oV ? oe.invalidProperties : void 0;
								me = {
									tags: {
										"sparrow.eventName": oe.eventName
									},
									extra: {
										sparrow: {
											eventName: oe.eventName,
											invalidProperties: Ie
										}
									},
									fingerprint: [oe.name ? oe.name : "SparrowValidationError"]
								}, Oe = !1
							} else if (oe instanceof pe.SparrowIdCookieError) me = {
								extra: {
									sparrowIdCookie: oe.cookie
								},
								fingerprint: [oe.name ? oe.name : "SparrowIdCookieError"]
							};
							else if (oe.name === "ChunkLoadError") {
								me = {
									fingerprint: [oe.name]
								};
								try {
									me.tags = {
										chunkId: oe.message.split(" ")[2],
										chunkUrl: oe.request
									}
								} catch {}
							} else oe instanceof _e.YB && (me = {
								fingerprint: ["TranslatorError", oe.translationKey]
							});
							Oe && c.Tb(oe, me)
						}
						typeof z == "function" && z.apply(t.g.console, q)
					})
				}
			}
			Le(Me, "id", "ConsoleErrorIntegration");
			var Qe = null,
				Xe = t("../react/common/utils/getEnvironment.ts");
			const Y = () => {
					if (re && ge) {
						var R, z, q, oe, me, Oe, Ie, ke, ot, Fe;
						const Vt = (0, Xe.Z)();
						let bt = "production";
						((R = window) === null || R === void 0 || (z = R.build) === null || z === void 0 ? void 0 : z.isPreviewDeploy) && (bt += "-preview"), Vt === "canary" && (bt = "canary"), D.S({
							dsn: re,
							release: (0, Z.t)(),
							environment: bt,
							ignoreErrors: K,
							allowUrls: ce,
							autoSessionTracking: !1,
							integrations: dt => [...dt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new Me, new O.jK.BrowserTracing({
								routingInstrumentation: te(J)
							})],
							tracesSampleRate: 0,
							transport: A,
							beforeSend: dt => (Q.e.setEventId(dt.event_id), dt)
						});
						const Dt = (0, g.bh)().getState();
						c.rJ({
							LOCAL_STORAGE_FLAGS: (0, x.Qw)(),
							USER_BETA_FLAGS: (0, x.ki)(),
							meta: {
								connection: {
									type: (q = window) === null || q === void 0 || (oe = q.navigator) === null || oe === void 0 || (me = oe.connection) === null || me === void 0 ? void 0 : me.effectiveType,
									bandwidth: (Oe = window) === null || Oe === void 0 || (Ie = Oe.navigator) === null || Ie === void 0 || (ke = Ie.connection) === null || ke === void 0 ? void 0 : ke.downlink
								},
								languagePreference: (0, N.r)(Dt),
								isPreviewDeploy: (ot = window) === null || ot === void 0 || (Fe = ot.build) === null || Fe === void 0 ? void 0 : Fe.isPreviewDeploy
							},
							utilGates: (0, y.T2)(Dt)
						}), window.addEventListener("unhandledrejection", function(dt) {})
					}
				},
				ve = R => {
					R ? c.av({
						id: R
					}) : c.av(null)
				};
			var Pe = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Ye = () => {
					let R;
					try {
						R = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), R = window.location.search
					}
					if (!R.includes("remote[")) return;
					const z = new URLSearchParams(R),
						q = {};
					for (let [oe, me] of z) oe.includes("remote") && (q[oe.replace(/remote\[|\]/g, "")] = me);
					Pe.Z.set("mfe-remotes", JSON.stringify(q))
				},
				Re = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				pt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const qe = "ANON_USER_ID";

			function st() {
				var R, z, q, oe;
				let me = (R = t.g) === null || R === void 0 || (z = R.bootstrap) === null || z === void 0 || (q = z.data) === null || q === void 0 || (oe = q.user) === null || oe === void 0 ? void 0 : oe.id;
				if (!me) {
					let Oe = Pe.Z.get(qe);
					if (!Oe) {
						let Ie = (0, pt.Z)();
						Pe.Z.set(qe, Ie), Oe = Ie
					}
					return Oe
				}
				return me
			}
			async function X() {
				const R = (0, g.bh)();
				R.dispatch((0, Re.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await R.dispatch((0, y.UL)({
					userId: st()
				}))
			}
			class de extends Error {
				constructor(z, q) {
					super(q);
					this.name = `${z} ${q}`
				}
			}
			const ye = () => {
					document.cookie.split(";").forEach(z => {
						const [q] = z.trim().split("=");
						document.cookie = `${q}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				je = async () => {
					let R = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!R.ok) throw R.headers.get("content-type") === "text/html" && (await R.text()).toLowerCase().includes("cookie too large") && (c.$e(function(me) {
						me.setTag("init", "cookieTooLarge"), c.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), ye(), window.location.reload()), new de("Bootstrap API Failure", R == null ? void 0 : R.status);
					return (await R.json()).result.data
				};
			var Ae = t("webpack/sharing/consume/default/react/react"),
				he = t.n(Ae),
				Ne = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				gt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				et = t("webpack/sharing/consume/default/react-redux/react-redux"),
				at = t("../../../../node_modules/swr/core/dist/index.mjs"),
				ft = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				vt = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				Lt = t("../react/shims/focus-visible.js"),
				Ue = t("../react/app/components/DeepLink/index.ts"),
				ct = t("../../../../node_modules/prop-types/index.js"),
				Ke = t.n(ct),
				tt = t("../react/utils/translator.tsx"),
				lt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				U = t("../../../dash/intl/intl-translations/src/index.ts"),
				se = t("../../../../node_modules/query-string/query-string.js"),
				fe = t.n(se),
				Ce = t("../react/common/actions/userActions.ts"),
				Se = t("../react/common/selectors/userSelectors.ts"),
				Be = t("../react/utils/i18n.ts"),
				nt = t("../react/utils/bootstrap.ts");

			function it(R) {
				for (var z = 1; z < arguments.length; z++) {
					var q = arguments[z] != null ? Object(arguments[z]) : {},
						oe = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(q).filter(function(me) {
						return Object.getOwnPropertyDescriptor(q, me).enumerable
					})), oe.forEach(function(me) {
						Ct(R, me, q[me])
					})
				}
				return R
			}

			function Ct(R, z, q) {
				return z = _t(z), z in R ? Object.defineProperty(R, z, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[z] = q, R
			}

			function _t(R) {
				var z = St(R, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function St(R, z) {
				if (typeof R != "object" || R === null) return R;
				var q = R[Symbol.toPrimitive];
				if (q !== void 0) {
					var oe = q.call(R, z || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(R)
			}
			let Ve = fe().parse(location.search);
			const Tt = R => {
					const z = (0, nt.$8)() ? [(0, U.Fy)(U.if.changes), (0, U.Fy)(U.if.common), (0, U.Fy)(U.if.navigation), (0, U.Fy)(U.if.overview), (0, U.Fy)(U.if.onboarding), (0, U.Fy)(U.if.invite), (0, U.Fy)(U.if.login), (0, U.Fy)(U.if.dns), (0, U.Fy)(U.n4.ssl_tls), (0, U.Fy)(U.if.message_inbox), (0, U.Fy)(U.if.welcome)] : [(0, U.Fy)(U.if.common), (0, U.Fy)(U.if.invite), (0, U.Fy)(U.if.login), (0, U.Fy)(U.if.onboarding)];
					Ve.lang ? kt(R) : Pe.Z.get(Be.th) && wt(R, (0, Be.Kd)());
					const q = async oe => (await Promise.all(z.map(Oe => Oe(oe)))).reduce((Oe, Ie) => it({}, Oe, Ie), {});
					return he().createElement(lt.LocaleContext.Provider, {
						value: R.languagePreference
					}, he().createElement(lt.I18nProvider, {
						translator: tt.Vb,
						locale: R.languagePreference
					}, he().createElement(lt.I18nLoader, {
						loadPhrases: q
					}, R.children)))
				},
				kt = async R => {
					let z = Ve.lang.substring(0, Ve.lang.length - 2) + Ve.lang.substring(Ve.lang.length - 2, Ve.lang.length).toUpperCase();
					if (!(0, N.v)(z)) {
						console.warn(`${z} is not a supported locale.`), delete Ve.lang, R.history.replace({
							search: fe().stringify(Ve)
						});
						return
					}(0, Be.i_)(z), delete Ve.lang, wt(R, z), R.isAuthenticated || R.history.replace({
						search: fe().stringify(Ve)
					})
				}, wt = async (R, z) => {
					if (R.isAuthenticated) try {
						await R.setUserCommPreferences({
							"language-locale": z
						}, {
							hideErrorAlert: !0
						}), Pe.Z.remove(Be.th), R.history.replace({
							search: fe().stringify(Ve)
						})
					} catch (q) {
						Pe.Z.set(Be.th, !0), console.error(q)
					} else Pe.Z.set(Be.th, !0)
				}, Mt = R => {
					const z = (0, Se.PR)(R);
					return {
						isAuthenticated: !!(z && z.id),
						languagePreference: (0, Be.Kd)() || (0, N.r)(R)
					}
				}, Ot = {
					setUserCommPreferences: Ce.V_
				};
			var It = (0, Ne.withRouter)((0, et.connect)(Mt, Ot)(Tt));
			Tt.propTypes = {
				history: Ke().object,
				languagePreference: Ke().string.isRequired,
				children: Ke().node.isRequired,
				isAuthenticated: Ke().bool,
				setUserCommPreferences: Ke().func.isRequired
			};
			var mt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Rt = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let Et;
			const Nt = ({
				selectorPrefix: R = "c_"
			} = {}) => (Et || (Et = (0, Rt.Z)({
				dev: !1,
				selectorPrefix: R
			})), Et);
			var Ft = t("../react/common/out.css"),
				At = t("../react/common/components/ModalManager.tsx"),
				yt = t("../react/app/components/ErrorBoundary.tsx"),
				xt = t("../react/common/actions/notificationsActions.ts");
			const ae = (t.g.bootstrap || {}).data || {};
			class d extends he().Component {
				componentDidMount() {
					ae.messages && this.dispatchNotificationActions(ae.messages)
				}
				dispatchNotificationActions(z) {
					z.forEach(q => {
						const {
							type: oe,
							message: me,
							persist: Oe
						} = q;
						["success", "info", "warn", "error"].includes(oe) && this.props.notifyAdd(oe, (0, tt.ZP)(me), {
							persist: !!Oe
						})
					})
				}
				render() {
					return null
				}
			}
			var H = (0, Ne.withRouter)((0, et.connect)(null, {
				notifyAdd: xt.add
			})(d));
			d.propTypes = {
				notifyAdd: Ke().func.isRequired
			};
			var ie = t("../react/app/redux/index.ts");

			function we() {
				var R;
				const z = (0, ie.p4)(Se.PR),
					q = (z == null || (R = z.email) === null || R === void 0 ? void 0 : R.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					oe = (0, Re.Yc)();
				(0, Ae.useEffect)(() => {
					oe({
						userType: q
					})
				}, [q, oe])
			}
			var xe = t("../react/common/selectors/entitlementsSelectors.ts"),
				Ge = t("../react/common/selectors/accountSelectors.ts");
			const We = ["accountId", "is_ent"];

			function Ze() {
				const R = (0, Re.f7)(),
					z = (0, Ne.useHistory)(),
					q = (0, G.uW)(z.location.pathname),
					oe = (0, Re.Yc)(),
					me = (0, Re.O$)(),
					Oe = (0, ie.p4)(xe.u1),
					Ie = !Oe.isRequesting && !!Oe.data,
					ke = (0, ie.p4)(xe.p1),
					ot = (0, ie.p4)(Ge.Xu),
					Fe = (0, ie.p4)(Ge.uF),
					Vt = !ot.isRequesting && !!ot.data;
				(0, Ae.useEffect)(() => {
					if (q && Vt && Fe && Ie && q === Fe.account.id) {
						var bt, Dt, dt;
						oe({
							accountId: Fe.account.id,
							is_ent: ke,
							is_free_account: !ke && !(Fe == null || (bt = Fe.account.meta) === null || bt === void 0 ? void 0 : bt.has_business_zones) && !(Fe == null || (Dt = Fe.account.meta) === null || Dt === void 0 ? void 0 : Dt.has_pro_zones) && !(Fe == null || (dt = Fe.account.meta) === null || dt === void 0 ? void 0 : dt.has_enterprise_zones)
						})
					} else(!q || q in R && R.accountId !== q) && me(We)
				}, [Vt, Fe, oe, me, Ie, ke, q, R])
			}
			var rt = t("../react/common/selectors/zoneSelectors.ts");

			function ut() {
				const R = (0, ie.p4)(rt.nA),
					z = (0, Re.Yc)();
				(0, Ae.useEffect)(() => {
					var q;
					z({
						zone_id: R == null ? void 0 : R.id,
						zone_plan: R == null || (q = R.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [R, z])
			}
			const Je = () => (we(), Ze(), ut(), null);
			var ze = t("../react/app/components/Persistence/index.tsx"),
				Bt = t("../node_modules/@cloudflare/elements/es/index.js"),
				jt = t("../react/app/components/LoadingSuspense.tsx");
			const Ut = he().lazy(() => Promise.all([t.e(16691), t.e(46812), t.e(12174), t.e(1091), t.e(55554), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var Zt = () => he().createElement(jt.Z, null, he().createElement(Ut, null));
			const Wt = () => (Ae.useEffect(() => S, []), null);
			var en = t("../../../../node_modules/moment/moment.js"),
				Gt = t.n(en);
			const tn = R => {
					switch (R) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return R.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return R.toLowerCase();
						default:
							return "en"
					}
				},
				nn = () => {
					const R = (0, ie.p4)(N.r);
					(0, Ae.useEffect)(() => {
						const z = tn(R);
						z !== Gt().locale() && Gt().locale(z), document.documentElement.lang = R
					}, [R])
				},
				rn = () => {
					(0, Ae.useEffect)(() => {
						async function R() {
							var z, q, oe, me;
							let Oe;
							if (((z = window) === null || z === void 0 || (q = z.build) === null || q === void 0 ? void 0 : q.isPreviewDeploy) && ((oe = window) === null || oe === void 0 || (me = oe.build) === null || me === void 0 ? void 0 : me.branch) !== "staging" && (Oe = "cookie"), !!Oe) try {
								const Ie = document.head.querySelector("link[rel=icon]");
								Ie && (Ie.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${Oe}.ico`)).default)
							} catch {}
						}
						R()
					}, [])
				};
			var on = t("../react/common/constants/constants.ts");
			const an = () => {
					var R;
					const z = (0, Ne.useLocation)(),
						[q, oe] = (0, Ae.useState)(((R = window) === null || R === void 0 ? void 0 : R.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Ae.useEffect)(() => {
						const me = fe().parse(z.search);
						if (me.pt && Pe.Z.set(on.sJ, me.pt), me == null ? void 0 : me.devPanel) {
							var Oe, Ie;
							(Oe = window) === null || Oe === void 0 || (Ie = Oe.localStorage) === null || Ie === void 0 || Ie.setItem("gates_devtools_ui_gates_controller_enabled", "true"), oe(!0)
						}
					}, [z.search]), {
						devPanelEnabled: q
					}
				},
				sn = ({
					id: R,
					customDataLayer: z = [],
					dataLayerName: q = "dataLayer"
				}) => {
					const oe = `<iframe src="https://www.googletagmanager.com/ns.html?id=${R}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						me = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${q}', '${R}')`,
						Oe = `
    window.${q} = window.${q} || [];
    window.${q}.push(${JSON.stringify(z)})
  `;
					return {
						iframe: oe,
						script: me,
						dataLayerHTML: Oe
					}
				},
				cn = R => {
					const z = document.createElement("script");
					return z.innerHTML = R, z.async = !0, z
				},
				ln = R => {
					const z = document.createElement("noscript");
					return z.innerHTML = R, z
				},
				Ht = R => {
					const z = document.createElement("script");
					return z.innerHTML = R, z
				},
				Dn = ({
					dataLayer: R,
					dataLayerName: z
				}) => {
					if (window[z]) return window[z].push(R);
					const q = `
      window.${z} = window.${z} || [];
      window.${z}.push(${JSON.stringify(R)})`,
						oe = Ht(q);
					document.head.insertBefore(oe, document.head.childNodes[0])
				},
				un = ({
					containerId: R,
					customDataLayer: z,
					gtmFeatureFlag: q = !0
				}) => {
					(0, Ae.useEffect)(() => {
						(() => {
							if (!q) return null;
							const {
								iframe: me,
								script: Oe,
								dataLayerHTML: Ie
							} = sn({
								id: R,
								customDataLayer: z
							});
							document.head.insertBefore(Ht(Ie), document.head.childNodes[0]), document.head.insertBefore(cn(Oe), document.head.childNodes[0]), document.body.insertBefore(ln(me), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const dn = ({
				isDev: R,
				gtmFeatureFlag: z
			}) => {
				(0, Ae.useEffect)(() => {
					(() => {
						if (!z) return null;
						let oe;
						R ? oe = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : oe = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const me = document.createElement("script");
						me.async = !0, me.src = oe, document.head.insertBefore(me, document.head.childNodes[0])
					})()
				}, [])
			};
			var pn = t("../react/utils/useDomainConnectRedirect.ts");
			const gn = "GTM-NDGPDFZ",
				mn = he().lazy(() => Promise.all([t.e(16691), t.e(46812), t.e(12174), t.e(1091), t.e(55554), t.e(51436), t.e(47386), t.e(7580), t.e(70618), t.e(26122), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(91262), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				fn = he().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(7580), t.e(91018), t.e(69088), t.e(91262), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var vn = ({
					userIsAuthed: R
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
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), he().createElement(Ae.Suspense, {
						fallback: he().createElement(Wt, null)
					}, he().createElement(Ne.Switch, null, !R && !0 && he().createElement(Ne.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, he().createElement(fn, null)), he().createElement(Ne.Route, {
						render: () => he().createElement(Bt.ZC, {
							minHeight: "100vh"
						}, he().createElement(mn, null))
					})), z && he().createElement(Zt, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				_n = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, tt.ZP)("common.validation.email")).required((0, tt.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, tt.ZP)("common.validation.required"))
			};
			(0, _n.Yd)(Qt).forEach(R => {
				zt.kM(zt.Z_, R, Qt[R])
			});
			var En = t("../react/common/utils/startViewTransition.ts");
			const Xt = he().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function yn() {
				const [R, z] = (0, Ae.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, Ae.useEffect)(() => {
					const q = window.matchMedia("(prefers-color-scheme: dark)"),
						oe = me => {
							z(me.matches ? "dark" : "light")
						};
					return q.addEventListener("change", oe), () => {
						q.removeEventListener("change", oe)
					}
				}, []), R
			}
			const hn = () => {
					const R = (0, nt.$8)(),
						[z, q] = (0, Ae.useState)(R ? Xt : he().Fragment),
						oe = yn(),
						[me, Oe] = (0, Ae.useState)((0, _.Yc)());
					(0, Ae.useEffect)(() => {
						(0, _.fF)(() => Oe((0, _.Yc)()))
					}, []);
					const Ie = ke => {
						Oe(ke), (0, En.o)(() => {
							(0, _.C8)(ke)
						}), document.cookie = `dark-mode=${ke};Path=/;Max-Age=31536000`, ke === "dark" || ke === "on" || ke === "system" && oe === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, Ae.useEffect)(() => {
						q(R ? Xt : he().Fragment)
					}, [R]), (0, Ae.useEffect)(() => {
						const ke = () => Ie(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", ke), () => {
							window.removeEventListener("storage", ke)
						}
					}, []), he().createElement(Ae.Suspense, {
						fallback: null
					}, he().createElement(et.Provider, {
						store: (0, g.bh)()
					}, he().createElement(Ne.Router, {
						history: J
					}, he().createElement(z, null, he().createElement(mt.Z, {
						renderer: Nt()
					}, he().createElement(It, null, he().createElement(yt.S, {
						sentryTag: "Root"
					}, he().createElement(at.J$, {
						value: {
							fetcher: ke => fetch(ke).then(ot => ot.json())
						}
					}, he().createElement(Je, null), he().createElement(H, null), he().createElement(ze.Z_, {
						onDarkModeChangeCb: Ie
					}, he().createElement(Ue.ZP, null, he().createElement(vn, {
						userIsAuthed: R
					}))), he().createElement(At.ZP, null), he().createElement(ft.F0, null)))))))))
				},
				bn = () => {
					(0, gt.render)(he().createElement(hn, null), document.getElementById("react-app"))
				};
			var ht = t("../utils/initSparrow.ts"),
				$t = t("../utils/zaraz.ts");
			const Cn = () => {
					const R = (0, Se.PR)((0, g.bh)().getState());
					Tn(), (0, ht.Ug)(), (0, $t.bM)(), (R == null ? void 0 : R.id) && ue().setUserId(R == null ? void 0 : R.id), (0, ht.yV)(), !(0, ht.Wi)() && (0, ht.IM)(), R ? (0, $t.yn)(R) : (0, $t.Ro)()
				},
				Tn = () => {
					var R, z;
					(R = window) === null || R === void 0 || (z = R.OneTrust) === null || z === void 0 || z.OnConsentChanged(() => {
						const q = (0, Se.PR)((0, g.bh)().getState());
						(0, ht.Wi)() ? (ue().setEnabled(!0), (q == null ? void 0 : q.id) ? (ue().setUserId(q.id), (0, $t.yn)(q)) : (0, $t.Ro)(), (0, ht.yV)()) : (ue().setEnabled(!1), (0, ht.IM)())
					})
				};

			function wn(R) {
				for (var z = 1; z < arguments.length; z++) {
					var q = arguments[z] != null ? Object(arguments[z]) : {},
						oe = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(q).filter(function(me) {
						return Object.getOwnPropertyDescriptor(q, me).enumerable
					})), oe.forEach(function(me) {
						On(R, me, q[me])
					})
				}
				return R
			}

			function On(R, z, q) {
				return z = In(z), z in R ? Object.defineProperty(R, z, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : R[z] = q, R
			}

			function In(R) {
				var z = An(R, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function An(R, z) {
				if (typeof R != "object" || R === null) return R;
				var q = R[Symbol.toPrimitive];
				if (q !== void 0) {
					var oe = q.call(R, z || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(R)
			}
			const Pn = "init",
				Jt = (R, z) => {
					c.$e(function(q) {
						q.setTag(Pn, z), c.Tb(R)
					}), k(R)
				},
				Kt = async (R, z) => {
					try {
						return await R(), !0
					} catch (q) {
						return Jt(q, z), !1
					}
				};
			(async () => {
				try {
					var R, z, q;
					t.g.build = wn({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "aee15fc42a79f111b99ba2236389fd4a81ab040f",
						dashVersion: "33559137",
						env: "production",
						builtAt: 1748457505861,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, Z.p)()
					}), Y();
					const oe = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => P(J),
						tag: "hashScroll"
					}, {
						fn: M.Z,
						tag: "styles"
					}, {
						fn: Ye,
						tag: "mfePreviewData"
					}];
					for (const ot of oe)
						if (!await Kt(ot.fn, ot.tag)) return;
					let me;
					if (!await Kt(async () => {
							me = await je()
						}, "bootstrap")) return;
					const Oe = (0, g.bh)(),
						Ie = ((R = me) === null || R === void 0 ? void 0 : R.data) || {};
					Oe.dispatch((0, i.mW)("user", Ie == null ? void 0 : Ie.user));
					const ke = (z = me) === null || z === void 0 || (q = z.data) === null || q === void 0 ? void 0 : q.user;
					return t.g.bootstrap = me, ke && ke.id && ve(ke.id), !await Kt(X, "gates") || !await Kt(Cn, "tracking") ? void 0 : bn()
				} catch (oe) {
					Jt(oe, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				f = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/common/utils/isGuards.ts"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				v = t.n(p);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(g) {
					for (var o = 1; o < arguments.length; o++) {
						var m = arguments[o];
						for (var I in m) Object.prototype.hasOwnProperty.call(m, I) && (g[I] = m[I])
					}
					return g
				}, n.apply(this, arguments)
			}
			const c = g => {
				function o(m) {
					const I = (0, a.UM)(),
						P = (0, p.useHistory)(),
						b = (0, p.useLocation)(),
						_ = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						T = (0, a.p4)(u.PR) || null,
						E = (0, a.p4)(l.nA) || null,
						C = (0, a.p4)(f.uF),
						L = C ? C.account : null;
					if (!_) return null;
					const {
						accountId: S,
						app: k,
						tab: M
					} = _.params, y = _.params.zoneName && ((0, s.v5)(_.params.zoneName) || _.params.zoneName.indexOf(".") > 0) ? _.params.zoneName : void 0;
					return r().createElement(g, n({
						dispatch: I,
						history: P,
						location: b,
						match: _,
						user: T,
						membership: S ? C : null,
						account: S ? L : null,
						accountId: S || null,
						zone: y ? E : null,
						zoneName: y || null,
						app: y ? k : null,
						tab: y ? M : null
					}, m))
				}
				return o.displayName = `withEntities(${i(g)})`, o
			};

			function i(g) {
				return g.displayName || g.name || "Component"
			}
			h.Z = c
		},
		"../react/app/components/AccountHome/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$$: function() {
					return E
				},
				CK: function() {
					return k
				},
				KV: function() {
					return L
				},
				OX: function() {
					return S
				},
				QV: function() {
					return T
				},
				Yt: function() {
					return b
				},
				bA: function() {
					return _
				},
				fu: function() {
					return y
				},
				gX: function() {
					return m
				},
				hh: function() {
					return M
				},
				o1: function() {
					return C
				},
				tw: function() {
					return I
				},
				xD: function() {
					return P
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/url.ts");
			const u = "projects table click",
				l = "click create application",
				f = "account home dev plat - product card click",
				s = "account home dev plat - empty state CTA click",
				p = "account home dev plat - view all projects click",
				v = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				c = "account home zero trust - analytics link click",
				i = "account home zero trust - product card click",
				g = "account home zero trust - plan pill click",
				o = "account home zero trust - plan fallback link click",
				m = {
					SPARROW_PROJECTS_TABLE_CLICK: u,
					SPARROW_CREATE_PROJECT_CLICK: l,
					SPARROW_PRODUCT_CARD_CLICK: f,
					SPARROW_EMPTY_STATE_CTA_CLICK: s,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: p,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: v,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: c,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: i,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: g,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: o
				},
				I = D => {
					r().sendEvent(u, {
						component: D
					})
				},
				P = D => {
					r().sendEvent(u, {
						component: "menu",
						subcomponent: D
					})
				},
				b = () => {
					r().sendEvent(l, {
						category: "Projects Table"
					})
				},
				_ = ({
					category: D,
					product: N
				}) => {
					r().sendEvent(f, {
						category: D,
						product: N
					})
				},
				T = () => {
					r().sendEvent(s)
				},
				E = () => {
					r().sendEvent(p)
				},
				C = D => {
					r().sendEvent(n, {
						category: D
					})
				},
				L = ({
					category: D,
					href: N
				}) => {
					r().sendEvent(v, {
						category: D,
						href: (0, a.cm)(N)
					})
				},
				S = ({
					category: D,
					href: N
				}) => {
					r().sendEvent(c, {
						category: D,
						href: (0, a.cm)(N)
					})
				},
				k = ({
					category: D,
					product: N,
					href: x
				}) => {
					r().sendEvent(i, {
						category: D,
						product: N,
						href: (0, a.cm)(x)
					})
				},
				M = ({
					plan: D
				}) => {
					r().sendEvent(g, {
						plan: D
					})
				},
				y = () => {
					r().sendEvent(o)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return f
				},
				CM: function() {
					return v
				},
				MF: function() {
					return r
				},
				TS: function() {
					return i
				},
				WF: function() {
					return l
				},
				Wz: function() {
					return n
				},
				bk: function() {
					return s
				},
				fj: function() {
					return c
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
				a = (0, e.R)(r.ADD_SITE, g => ({
					payload: g
				})),
				u = (0, e.R)(r.RESOLVING_START),
				l = (0, e.R)(r.RESOLVING_COMPLETE),
				f = (0, e.R)(r.SELECT_ZONE, g => ({
					payload: g
				})),
				s = (0, e.R)(r.SELECT_ACCOUNT, g => ({
					payload: g
				})),
				p = (0, e.R)(r.SELECT_PAGES_PROJECT, g => ({
					payload: g
				})),
				v = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, g => ({
					payload: g
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, g => ({
					accountIds: g
				})),
				c = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(r.SELECT_WORKER, g => ({
					payload: g
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return f
				},
				O5: function() {
					return l
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
				u = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				f = "add",
				s = "multiSkuProducts",
				p = "/:account/billing/checkout",
				v = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				ZP: function() {
					return M
				},
				U: function() {
					return k.U
				},
				dd: function() {
					return k.dd
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
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				f = t("../react/app/components/DeepLink/actions.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(s);

			function v(y) {
				for (var D = 1; D < arguments.length; D++) {
					var N = arguments[D] != null ? Object(arguments[D]) : {},
						x = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(N).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(N, Z).enumerable
					})), x.forEach(function(Z) {
						n(y, Z, N[Z])
					})
				}
				return y
			}

			function n(y, D, N) {
				return D = c(D), D in y ? Object.defineProperty(y, D, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[D] = N, y
			}

			function c(y) {
				var D = i(y, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function i(y, D) {
				if (typeof y != "object" || y === null) return y;
				var N = y[Symbol.toPrimitive];
				if (N !== void 0) {
					var x = N.call(y, D || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(y)
			}
			class g {
				constructor(D, N) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", x => {
						this.resolvers.set(x, {
							name: x,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", x => {
						const Z = this.resolvers.get(x);
						Z && (Z.endTime = Date.now(), this.resolvers.set(x, Z))
					}), n(this, "resolverCancel", x => {
						this.resolverDone(x), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", x => {
						const Z = "NO_ACTION",
							re = {
								actionType: Z,
								startTime: 0
							};
						return {
							start: (ge = Z) => {
								const ce = this.resolvers.get(x);
								re.actionType = ge, re.startTime = Date.now(), ce && ce.userActions.push(re)
							},
							finish: (ge = Z) => {
								re.actionType = ge, re.endTime = Date.now()
							},
							cancel: (ge = Z) => {
								re.actionType = ge, re.endTime = Date.now(), this.resolverCancel(x)
							}
						}
					}), this.deepLink = D, this.legacyDeepLink = N, this.resolvers = new Map
				}
				track(D) {
					try {
						if (this._done) return;
						this._done = !0;
						const N = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: o(this.startTime, this.endTime),
								totalCpuTime: o(this.startTime, this.endTime)
							},
							x = this.resolvers.size === 0 ? N : Array.from(this.resolvers.values()).reduce((Z, re) => {
								const ge = o(re.startTime, re.endTime),
									ce = re.userActions.reduce((Q, W) => {
										const j = o(W.startTime, W.endTime);
										return {
											totalTime: Q.totalTime + j,
											actions: Q.actions.set(W.actionType, j)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									K = ge - ce.totalTime;
								return v({}, Z, {
									totalTime: Z.totalTime + ge,
									totalUserActionsTime: Z.totalUserActionsTime + ce.totalTime,
									totalCpuTime: Z.totalCpuTime + K,
									[`${re.name}ResolverTotalTime`]: ge,
									[`${re.name}ResolverTotalCpuTime`]: K,
									[`${re.name}ResolverTotalUserActionsTime`]: ce.totalTime
								}, Array.from(ce.actions.keys()).reduce((Q, W) => v({}, Q, {
									[`${re.name}Resolver/${W}`]: ce.actions.get(W)
								}), {}))
							}, v({}, N, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						p().sendEvent(D, x)
					} catch (N) {
						console.error(N)
					}
				}
			}

			function o(y = Date.now(), D = Date.now()) {
				return (D - y) / 1e3
			}
			var m = t("../react/app/components/DeepLink/constants.ts"),
				I = t("../react/common/hooks/useCachedState.ts"),
				P = t("../react/common/hooks/usePrevious.ts");

			function b(y) {
				for (var D = 1; D < arguments.length; D++) {
					var N = arguments[D] != null ? Object(arguments[D]) : {},
						x = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(N).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(N, Z).enumerable
					})), x.forEach(function(Z) {
						_(y, Z, N[Z])
					})
				}
				return y
			}

			function _(y, D, N) {
				return D = T(D), D in y ? Object.defineProperty(y, D, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[D] = N, y
			}

			function T(y) {
				var D = E(y, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function E(y, D) {
				if (typeof y != "object" || y === null) return y;
				var N = y[Symbol.toPrimitive];
				if (N !== void 0) {
					var x = N.call(y, D || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(y)
			}
			var L = ({
					children: y
				}) => {
					const D = (0, r.TZ)(),
						N = (0, a.useHistory)(),
						x = (0, P.Z)(N.location.pathname),
						[Z, re] = (0, e.useState)(!0),
						[ge, ce] = (0, I.j)(void 0, {
							key: m.Fj
						}),
						[K, Q] = (0, I.j)(void 0, {
							key: m.O5
						}),
						[W, j] = (0, I.j)(void 0, {
							key: m.s$
						}),
						A = (0, l.$8)();
					let O = new URLSearchParams(N.location.search);
					const F = (0, u.mL)(N.location.pathname, O);
					let ee = null,
						J = null;
					if (O.has(m.Tc) && O.delete(m.Tc), O.get(m.BV)) ee = O.get(m.BV), N.location.hash && (J = N.location.hash);
					else if (ge) {
						const G = new URLSearchParams(ge);
						G.get(m.BV) && (ee = G.get(m.BV), O = G)
					} else F && (O.set(m.BV, F), ee = F);
					if (ee && m._h.test(ee)) {
						const G = O.getAll(m.Kt),
							B = JSON.stringify(G);
						G.length && B !== W && j(B), O.has(m.Tc) && O.delete(m.Tc), O.delete(m.Kt)
					}!A && ge === void 0 && ee && ce(O.toString());
					const ne = async () => {
						try {
							if ((0, u.I3)(ee) && A) {
								ge && ce(void 0), D.dispatch((0, f.r4)()), re(!0), ee && ee !== K && Q(ee);
								const G = await (0, u.py)(ee, re, D, N, x, new g(ee, F ? `${N.location.pathname}${N.location.search}` : void 0));
								O.delete(m.BV);
								const B = O.toString();
								N.replace(b({}, N.location, {
									pathname: G,
									search: B
								}, J ? {
									hash: J
								} : {})), D.dispatch((0, f.WF)())
							}
						} catch (G) {
							D.dispatch((0, f.WF)()), console.error(G)
						} finally {
							re(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ne()
					}, [N.location.pathname, N.location.search]), (Z || (0, u.I3)(ee)) && A ? null : y
				},
				S = t("../react/app/components/DeepLink/reducer.ts"),
				k = t("../react/app/components/DeepLink/selectors.ts"),
				M = L
		},
		"../react/app/components/DeepLink/reducer.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				E: function() {
					return u
				},
				r: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../react/app/components/DeepLink/actions.ts");
			const u = null,
				l = r().from({
					lastAction: u,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function f(s = l, p) {
				if (p.type === a.MF.RESOLVING_COMPLETE) return l;
				if (p.type === a.MF.RESOLVING_START) return s.set("isResolving", !0);
				if (s.isResolving) {
					if (p.type === a.MF.RESOLVING_COMPLETE) return s.set("isResolving", !1);
					if (p.type === a.MF.SET_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", p.accountIds);
					if (p.type === a.MF.DELETE_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", void 0);
					{
						let v = s;
						try {
							v = s.set("lastAction", p)
						} catch {
							v = s.set("lastAction", {
								type: p.type
							})
						}
						return v
					}
				} else return s
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/app/components/DeepLink/utils.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				I3: function() {
					return v
				},
				X1: function() {
					return s
				},
				mL: function() {
					return o
				},
				py: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				a = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/app/components/DeepLink/constants.ts"),
				l = t("../react/common/validators/index.js"),
				f = t("../react/common/utils/isGuards.ts");
			const s = m => (0, l.Lb)(m) && (m.split(".").length > 1 || (0, f.v5)(m)),
				p = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				v = m => typeof m == "string" && m.startsWith("/"),
				n = (m, I) => P => new Promise((b, _) => {
					I.start();
					const T = m.subscribe(() => {
						const E = (0, a.yI)(m.getState());
						E === r.E ? (I.cancel(), T(), _("DeepLink: waitForAction out of context.")) : P(E) && (I.finish(E.type), T(), b(E))
					})
				}),
				c = (m, I, P) => (b, _) => new Promise((T, E) => {
					P.start();
					const C = I.location.pathname;
					b = new URL(b, window.location.href).pathname, C !== b && (P.cancel(), E(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${b}", but on "${C}". You need to redirect to "${b}", and unblockRouter in your Resolver, before you use this function.`));
					const L = m.subscribe(() => {
						const S = (0, a.yI)(m.getState()),
							k = I.location.pathname,
							y = new URLSearchParams(I.location.search).get(u.BV);
						(k !== b || !!y) && (P.cancel(), L(), E(`DeepLink: waitForPageAction user navigated away from "${b}" to "${k}${y?I.location.search:""}"`)), S === r.E ? (P.cancel(), L(), E("DeepLink: waitForPageAction out of context.")) : _(S) && (P.finish(S.type), L(), T(S))
					})
				});

			function i(m) {
				const I = [],
					P = m.split("?")[0].split("/");
				for (let b of P) b.length !== 0 && (b.startsWith(":") ? I.push({
					value: b.substring(1),
					type: "dynamic"
				}) : I.push({
					value: b,
					type: "static"
				}));
				return I
			}
			async function g(m, I, P, b, _, T) {
				T.start();
				const E = i(m),
					L = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					S = {};
				let k = "";
				for (const [M, y] of E.entries())
					if (y.type === "static") k = [k, y.value].join("/");
					else if (y.type === "dynamic" && p.is(y.value) && y.value in L) {
					T.resolverStart(y.value);
					const D = await L[y.value]({
						deepLink: m,
						blockRouter: () => I(!0),
						unblockRouter: () => I(!1),
						routerHistory: b,
						resolvedValues: S,
						store: P,
						referringRoute: _,
						uri: {
							currentPartIdx: M,
							parts: E
						},
						waitForAction: n(P, T.createUserActionTracker(y.value)),
						waitForPageAction: c(P, b, T.createUserActionTracker(y.value))
					});
					T.resolverDone(y.value), k = [k, D].join("/"), S[y.value] = D
				} else throw T.cancel(), new Error(`DeepLink: Resolver with name '${y.value}' is not supported.`);
				return T.done(), k
			}

			function o(m, I) {
				const P = ":account",
					b = ":zone",
					_ = I.get("zone");
				if (_) return I.delete("zone"), `/${P}/${b}/${_}`;
				const T = I.get("account");
				if (T) return I.delete("account"), `/${P}/${T}`;
				if (m === "/overview") return `/${P}/${b}`;
				const E = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const C of E) {
					const L = C.length;
					if (m.startsWith(C) && (m.length === L || m[L] === "/")) return `/${P}/${b}${m}`
				}
				switch (m) {
					case "/account/billing":
						return `/${P}/billing`;
					case "/account/subscriptions":
						return `/${P}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${P}/dns-firewall`;
					case "/account/audit-log":
						return `/${P}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				S: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				u = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				f = t("../react/utils/zaraz.ts"),
				s = t("../react/utils/url.ts"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				v = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(c),
				g = t("../react/common/components/Page.tsx"),
				o = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function m() {
				return (0, e.useEffect)(() => {
					i().sendEvent("new page available refresh cta")
				}, []), r().createElement(g.Z, {
					type: "narrow"
				}, r().createElement(p.ZC, {
					textAlign: "center"
				}, r().createElement(p.H1, {
					fontSize: 5,
					fontWeight: 400
				}, r().createElement(n.Trans, {
					id: "error.new_page_version_available.title"
				})), r().createElement(n.Trans, {
					id: "error.new_page_version_available.description"
				}), r().createElement(p.ZC, null, r().createElement(p.Ei, {
					height: 116,
					src: o,
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
			const I = ({
				sentryTag: P,
				children: b,
				fallbackComponent: _
			}) => r().createElement(a.SV, {
				beforeCapture: T => {
					f.tg === null || f.tg === void 0 || f.tg.track("page-error", {
						page: (0, s.Fl)(window.location.pathname)
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
					eventId: E
				}) => {
					var C;
					if (_) return _;
					const L = l.e.getEventId() || E;
					return (T == null || (C = T.message) === null || C === void 0 ? void 0 : C.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(m, null)) : r().createElement(u.Z, {
						type: "page",
						error: T,
						eventId: L,
						sentryTag: P
					})
				}
			}, b)
		},
		"../react/app/components/Footer.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				Z: function() {
					return j
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(s),
				v = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				c = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/moment/moment.js"),
				g = t.n(i);
			const o = () => {
					const A = g()().format("YYYY"),
						O = F => {
							p().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: F
							})
						};
					return r().createElement(m, {
						marginTop: "auto"
					}, r().createElement(I, null, r().createElement(P, null, r().createElement(b, null, "\xA9 ", A, " Cloudflare, Inc."), r().createElement(b, null, r().createElement(_, null, r().createElement(T, {
						showOnDeskTop: !1
					}, r().createElement(E, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => O("Support")
					}, r().createElement(c.cC, {
						id: "common.support"
					}))), r().createElement(T, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => O("Privacy Policy")
					}, r().createElement(c.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(T, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => O("Terms of Use")
					}, r().createElement(c.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(T, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => O("Cookie Preferences")
					}, r().createElement(c.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(T, null, r().createElement(E, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => O("Trademark")
					}, r().createElement(c.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(_, null, r().createElement(T, null, r().createElement(E, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => O("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(c.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				m = (0, l.createComponent)(({
					theme: A,
					marginTop: O
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: O
				})),
				I = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				P = (0, l.createComponent)(({
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
				b = (0, l.createComponent)(({
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
				_ = (0, l.createComponent)(({
					theme: A
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: A.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				T = (0, l.createComponent)(({
					showOnDeskTop: A = !0,
					theme: O
				}) => ({
					color: O.colors.white,
					fontSize: O.fontSizes[1],
					height: "20px",
					display: A ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: O.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: O.space[3],
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
				E = (0, l.createStyledComponent)(({
					theme: A
				}) => ({
					textDecoration: "none",
					color: A.colors.white,
					"&:hover": {
						color: A.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var C = o,
				L = t("../react/pages/welcome/routes.ts"),
				S = t("../react/utils/cookiePreferences.ts"),
				k = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				y = () => {
					const [A, O] = (0, e.useState)(!1), F = (0, S.wV)(), ee = () => {
						O(!0)
					}, J = () => {
						O(!1)
					}, ne = F && F === "US" ? (0, c.ZP)("footer.cpra_cta.privacy_choices") : (0, c.ZP)("footer.cpra_cta.cookie_preferences"), G = {
						background: "transparent",
						borderRadius: "none",
						color: A ? (0, f.Yc)() ? "#ee730a" : "#003681" : (0, f.Yc)() ? "#4693ff" : "#0051c3",
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
						style: G,
						onMouseEnter: ee,
						onMouseLeave: J
					}, r().createElement(u.Ei, {
						height: 15,
						src: k,
						mr: 2,
						alt: ne
					}), ne)
				};

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(A) {
					for (var O = 1; O < arguments.length; O++) {
						var F = arguments[O];
						for (var ee in F) Object.prototype.hasOwnProperty.call(F, ee) && (A[ee] = F[ee])
					}
					return A
				}, D.apply(this, arguments)
			}

			function N(A, O) {
				if (A == null) return {};
				var F = x(A, O),
					ee, J;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(A);
					for (J = 0; J < ne.length; J++) ee = ne[J], !(O.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(A, ee) || (F[ee] = A[ee]))
				}
				return F
			}

			function x(A, O) {
				if (A == null) return {};
				var F = {},
					ee = Object.keys(A),
					J, ne;
				for (ne = 0; ne < ee.length; ne++) J = ee[ne], !(O.indexOf(J) >= 0) && (F[J] = A[J]);
				return F
			}
			const Z = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,f.Yc)()?f.rS.colors.orange[6]:f.rS.colors.blue[4]}`
					}
				}), u.A),
				re = (0, l.createStyledComponent)(({
					theme: A
				}) => ({
					color: A.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, v.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: A.colors.gray[4]
					}
				}), u.A),
				ge = A => {
					let {
						onClick: O
					} = A, F = N(A, ["onClick"]);
					return React.createElement(Z, D({
						onClick: ee => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: F.href
							}), O && O(ee)
						}
					}, F))
				},
				ce = A => {
					let {
						children: O,
						target: F,
						rel: ee
					} = A, J = N(A, ["children", "target", "rel"]);
					return r().createElement(re, D({
						target: F || "_blank",
						rel: ee || "noopener noreferrer"
					}, J), O)
				},
				K = (0, l.createStyledComponent)(({
					theme: A
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
				Q = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, v.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), u.ZC);
			var j = () => {
				const A = [L.d.root.pattern].some(F => (0, a.matchPath)(location.pathname, {
					path: F
				}));
				if ((0, n.PP)()) return r().createElement(C, null);
				if (A) return null;
				const O = new Date().getFullYear();
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
				}, r().createElement(Q, null, r().createElement(K, null, r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://support.cloudflare.com"
				}, (0, c.ZP)("common.support"))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(u.Dr, {
					textTransform: "capitalize"
				}, (0, c.ZP)("footer.system_status")))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, c.ZP)("footer.careers"))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, c.ZP)("footer.tos_reduced"))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, c.ZP)("footer.security_issues"))), r().createElement(u.Li, null, r().createElement(ce, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, c.ZP)("footer.privacy_policy"))), r().createElement(u.Li, null, r().createElement(y, null)), r().createElement(u.Li, null, r().createElement(u.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", O, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/ErrorStatus.tsx"),
				u = t("../react/utils/translator.tsx");
			const l = f => r().createElement(a.Z, f, (0, u.ZP)("error.forbidden"));
			h.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				S: function() {
					return I
				},
				Z: function() {
					return ne
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				v = t.n(p),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				c = t("../react/common/components/AccessControl/index.js"),
				i = t("../react/common/components/ButtonWithDropdown.tsx"),
				g = t("../react/common/components/Dropdown/index.tsx"),
				o = t("../react/utils/translator.tsx"),
				m = t("../react/common/hooks/useGate.ts");
			const I = {
					ACCOUNT_MEMBERS: "add account members",
					EXISTING_DOMAIN: "add domain",
					NEW_DOMAIN: "register domain",
					PAGES: "add pages",
					R2: "add r2 storage",
					WAF_RULESET: "add waf ruleset",
					WORKERS: "add workers"
				},
				P = () => {
					const G = (0, m.Z)("super-add-button-copy-change"),
						B = [{
							title: {
								id: "onboarding.add_product.new_domain.title"
							},
							trackingEvent: I.NEW_DOMAIN,
							icon: "globe",
							url: "?to=/:account/registrar/register",
							description: {
								id: "onboarding.add_product.new_domain.description"
							}
						}, {
							title: {
								id: "apps.workers"
							},
							trackingEvent: I.WORKERS,
							icon: "edgeworker",
							url: "?to=/:account/workers-and-pages/create",
							description: {
								id: "onboarding.add_product.workers.description"
							}
						}, {
							title: {
								id: "apps.pages"
							},
							trackingEvent: I.PAGES,
							icon: "workers-pages",
							url: "?to=/:account/workers-and-pages/create/pages",
							description: {
								id: "onboarding.add_product.pages.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.r2.title"
							},
							trackingEvent: I.R2,
							icon: "r2",
							url: "?to=/:account/r2/new",
							description: {
								id: "onboarding.add_product.r2.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.waf_ruleset.title"
							},
							trackingEvent: I.WAF_RULESET,
							icon: "cloudflare-security-application",
							url: "?to=/:account/application-security/waf/custom/create",
							description: {
								id: "onboarding.add_product.waf_ruleset.description"
							}
						}, {
							title: {
								id: "onboarding.add_product.account_member.title"
							},
							trackingEvent: I.ACCOUNT_MEMBERS,
							icon: "user-outline",
							url: "?to=/:account/members/invite",
							description: {
								id: "onboarding.add_product.account_member.description"
							},
							permissionCheck: "#member:edit"
						}];
					switch (G) {
						case "existing-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_website_app"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						case "existing-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site_app"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						case "existing-site":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.existing_site"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						case "your-website-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_website_app"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						case "your-site-app":
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title.gated.your_site_app"
								},
								trackingEvent: I.EXISTING_DOMAIN,
								icon: "internet-browser",
								url: "?to=/:account/add-site",
								description: {
									id: "onboarding.add_product.existing_domain.description.fast_and_secure"
								},
								disableOn: "isZoneVersionLocked"
							}, ...B];
						default:
							return [{
								title: {
									id: "onboarding.add_product.existing_domain.title"
								},
								trackingEvent: I.EXISTING_DOMAIN,
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
								trackingEvent: I.NEW_DOMAIN,
								icon: "globe",
								url: "?to=/:account/registrar/register",
								description: {
									id: "onboarding.add_product.new_domain.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.waf_ruleset.title"
								},
								trackingEvent: I.WAF_RULESET,
								icon: "cloudflare-security-application",
								url: "?to=/:account/application-security/waf/custom/create",
								description: {
									id: "onboarding.add_product.waf_ruleset.description"
								}
							}, {
								title: {
									id: "apps.workers"
								},
								trackingEvent: I.WORKERS,
								icon: "edgeworker",
								url: "?to=/:account/workers-and-pages/create",
								description: {
									id: "onboarding.add_product.workers.description"
								}
							}, {
								title: {
									id: "apps.pages"
								},
								trackingEvent: I.PAGES,
								icon: "workers-pages",
								url: "?to=/:account/workers-and-pages/create/pages",
								description: {
									id: "onboarding.add_product.pages.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.r2.title"
								},
								trackingEvent: I.R2,
								icon: "r2",
								url: "?to=/:account/r2/new",
								description: {
									id: "onboarding.add_product.r2.description"
								}
							}, {
								title: {
									id: "onboarding.add_product.account_member.title"
								},
								trackingEvent: I.ACCOUNT_MEMBERS,
								icon: "user-outline",
								url: "?to=/:account/members/invite",
								description: {
									id: "onboarding.add_product.account_member.description"
								},
								permissionCheck: "#member:edit"
							}]
					}
				},
				b = [{
					title: {
						id: "onboarding.add_product.existing_domain.title"
					},
					trackingEvent: I.EXISTING_DOMAIN,
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
					trackingEvent: I.NEW_DOMAIN,
					icon: "globe",
					url: "?to=/:account/registrar/register",
					description: {
						id: "onboarding.add_product.new_domain.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.waf_ruleset.title"
					},
					trackingEvent: I.WAF_RULESET,
					icon: "cloudflare-security-application",
					url: "?to=/:account/application-security/waf/custom/create",
					description: {
						id: "onboarding.add_product.waf_ruleset.description"
					}
				}, {
					title: {
						id: "apps.workers"
					},
					trackingEvent: I.WORKERS,
					icon: "edgeworker",
					url: "?to=/:account/workers-and-pages/create",
					description: {
						id: "onboarding.add_product.workers.description"
					}
				}, {
					title: {
						id: "apps.pages"
					},
					trackingEvent: I.PAGES,
					icon: "workers-pages",
					url: "?to=/:account/workers-and-pages/create/pages",
					description: {
						id: "onboarding.add_product.pages.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.r2.title"
					},
					trackingEvent: I.R2,
					icon: "r2",
					url: "?to=/:account/r2/new",
					description: {
						id: "onboarding.add_product.r2.description"
					}
				}, {
					title: {
						id: "onboarding.add_product.account_member.title"
					},
					trackingEvent: I.ACCOUNT_MEMBERS,
					icon: "user-outline",
					url: "?to=/:account/members/invite",
					description: {
						id: "onboarding.add_product.account_member.description"
					},
					permissionCheck: "#member:edit"
				}];
			var _ = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function T(G) {
				for (var B = 1; B < arguments.length; B++) {
					var V = arguments[B] != null ? Object(arguments[B]) : {},
						te = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(V).filter(function(le) {
						return Object.getOwnPropertyDescriptor(V, le).enumerable
					})), te.forEach(function(le) {
						E(G, le, V[le])
					})
				}
				return G
			}

			function E(G, B, V) {
				return B = C(B), B in G ? Object.defineProperty(G, B, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[B] = V, G
			}

			function C(G) {
				var B = L(G, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function L(G, B) {
				if (typeof G != "object" || G === null) return G;
				var V = G[Symbol.toPrimitive];
				if (V !== void 0) {
					var te = V.call(G, B || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(G)
			}

			function S() {
				return S = Object.assign ? Object.assign.bind() : function(G) {
					for (var B = 1; B < arguments.length; B++) {
						var V = arguments[B];
						for (var te in V) Object.prototype.hasOwnProperty.call(V, te) && (G[te] = V[te])
					}
					return G
				}, S.apply(this, arguments)
			}

			function k(G, B) {
				if (G == null) return {};
				var V = M(G, B),
					te, le;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(G);
					for (le = 0; le < pe.length; le++) te = pe[le], !(B.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(G, te) || (V[te] = G[te]))
				}
				return V
			}

			function M(G, B) {
				if (G == null) return {};
				var V = {},
					te = Object.keys(G),
					le, pe;
				for (pe = 0; pe < te.length; pe++) le = te[pe], !(B.indexOf(le) >= 0) && (V[le] = G[le]);
				return V
			}
			const y = G => {
					let {
						title: B,
						trackingEvent: V,
						icon: te,
						url: le,
						description: pe,
						disabled: ue
					} = G, _e = k(G, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(D, S({
						to: !ue && le || "#",
						"aria-disabled": ue,
						onClick: () => {
							v().sendEvent(V, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, _e), r().createElement(u.ZC, {
						display: "flex"
					}, r().createElement(a.J, {
						type: te,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(u.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(u.ZC, {
						fontSize: 3
					}, r().createElement(o.cC, B)), r().createElement(u.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(o.cC, pe)))))
				},
				D = (0, n.createStyledComponent)(({
					theme: G
				}) => {
					const B = {
						cursor: "pointer",
						backgroundColor: (0, f.Yc)() ? G.colors.gray[8] : G.colors.gray[9],
						color: G.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: G.colors.background,
						color: G.colors.gray[2],
						fontSize: G.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': B,
						':focus-within:not([aria-disabled="true"])': T({}, B, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: G.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, _.Link);
			var N = y;

			function x() {
				return x = Object.assign ? Object.assign.bind() : function(G) {
					for (var B = 1; B < arguments.length; B++) {
						var V = arguments[B];
						for (var te in V) Object.prototype.hasOwnProperty.call(V, te) && (G[te] = V[te])
					}
					return G
				}, x.apply(this, arguments)
			}

			function Z(G) {
				for (var B = 1; B < arguments.length; B++) {
					var V = arguments[B] != null ? Object(arguments[B]) : {},
						te = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && te.push.apply(te, Object.getOwnPropertySymbols(V).filter(function(le) {
						return Object.getOwnPropertyDescriptor(V, le).enumerable
					})), te.forEach(function(le) {
						re(G, le, V[le])
					})
				}
				return G
			}

			function re(G, B, V) {
				return B = ge(B), B in G ? Object.defineProperty(G, B, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[B] = V, G
			}

			function ge(G) {
				var B = ce(G, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function ce(G, B) {
				if (typeof G != "object" || G === null) return G;
				var V = G[Symbol.toPrimitive];
				if (V !== void 0) {
					var te = V.call(G, B || "default");
					if (typeof te != "object") return te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(G)
			}

			function K(G, B) {
				if (G == null) return {};
				var V = Q(G, B),
					te, le;
				if (Object.getOwnPropertySymbols) {
					var pe = Object.getOwnPropertySymbols(G);
					for (le = 0; le < pe.length; le++) te = pe[le], !(B.indexOf(te) >= 0) && (!Object.prototype.propertyIsEnumerable.call(G, te) || (V[te] = G[te]))
				}
				return V
			}

			function Q(G, B) {
				if (G == null) return {};
				var V = {},
					te = Object.keys(G),
					le, pe;
				for (pe = 0; pe < te.length; pe++) le = te[pe], !(B.indexOf(le) >= 0) && (V[le] = G[le]);
				return V
			}
			const W = "GLOBAL_ADD_DROPDOWN",
				j = (0, n.createStyledComponent)(({
					theme: G
				}) => ({
					"background-color": G.colors.blue[5]
				}), l.zx),
				A = ({
					disableProducts: G
				}) => {
					const B = P();
					return (0, e.useEffect)(() => (v().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						v().sendEvent("close add product dropdown", {
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
					}, B.map(V => {
						const te = V || {},
							{
								disableOn: le,
								permissionCheck: pe
							} = te,
							ue = K(te, ["disableOn", "permissionCheck"]),
							_e = le && G[le],
							be = Z({}, ue, {
								disabled: _e
							});
						return pe ? r().createElement(c.Z, {
							key: V.title.id,
							edit: pe
						}, ({
							isEditable: Te
						}) => Te && r().createElement(N, be)) : r().createElement(N, x({
							key: V.url
						}, be))
					}))
				},
				O = ({
					disableProducts: G,
					topNavType: B
				}) => {
					const V = () => (0, s.tq)() || B === "icon-only" ? r().createElement(u.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(j, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : B === "text-icon" || B === "icon-only-with-add-button" ? r().createElement(l.zx, {
						type: "primary",
						mr: B === "text-icon" ? 2 : 3
					}, r().createElement(r().Fragment, null, r().createElement(a.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(o.cC, {
						id: "common.add"
					}))) : r().createElement(l.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(o.cC, {
						id: "common.add"
					}), " ", r().createElement(a.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(F, {
						role: "group",
						"data-testid": W
					}, r().createElement(g.Lt, {
						trigger: B === "baseline" ? r().createElement(ee, null, r().createElement(a.J, {
							label: "plus",
							type: "plus"
						}), !(0, s.tq)() && r().createElement(r().Fragment, null, r().createElement(o.cC, {
							id: "common.add"
						}), " ", r().createElement(a.J, {
							label: "arrow",
							type: "caret-down"
						}))) : V(),
						menu: r().createElement(A, {
							disableProducts: G
						})
					}))
				},
				F = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				ee = (0, n.createStyledComponent)(({
					theme: G
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: G.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, f.Yc)() ? G.colors.gray[1] : G.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, f.Yc)() ? G.colors.gray[8] : G.colors.gray[9]
					}
				}), u.zx);
			var J = O,
				ne = J
		},
		"../react/app/components/LoadingSuspense.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				Z: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				u = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				f = t("../react/app/components/ErrorStatus.tsx"),
				s = t("../react/common/components/EmptyPage.jsx"),
				p = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const v = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(v))
				}, [])
			}

			function c(P) {
				useEventListener(v, () => {
					window.setTimeout(P, 0)
				}, {
					target: window
				})
			}

			function i(...P) {
				const [b, _] = P;
				React.useLayoutEffect(b, _), c(b)
			}

			function g(P) {
				const [b, _] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const T = window.setTimeout(() => _(!0), P);
					return () => window.clearTimeout(T)
				}, []), b
			}
			const o = ({
				loadingTimeout: P = 1e3,
				stillLoadingTimeout: b = 9e3
			}) => {
				const _ = g(P),
					T = g(b);
				if (n(), !_ && !T) return r().createElement(s.Z, null);
				const E = T ? r().createElement(l.cC, {
					id: "common.still_loading"
				}) : _ ? r().createElement(l.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(f.Z, {
					size: 5
				}, r().createElement(u.ZC, {
					mr: 3
				}, r().createElement(a.g, {
					size: "2x"
				})), E)
			};
			var I = ({
				children: P
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(o, null)
			}, P)
		},
		"../react/app/components/Persistence/api.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				C8: function() {
					return p
				},
				Mn: function() {
					return i
				},
				Sp: function() {
					return c
				},
				dr: function() {
					return l
				},
				lt: function() {
					return f
				},
				m6: function() {
					return n
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
			const a = "/persistence/user",
				u = async () => {
					try {
						return await (await e.get(a, {
							hideErrorAlert: !0
						})).body
					} catch (g) {
						console.error(g)
					}
				}, l = async g => {
					try {
						return await (await e.get(`/accounts/${g}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (o) {
						console.error(o)
					}
				}, f = async (g, o) => {
					try {
						return await (await e.post(`${a}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: g,
								accountId: o
							}),
							hideErrorAlert: !0
						})).body
					} catch (m) {
						return console.error(m), []
					}
				}, s = async (g, o) => {
					try {
						return await http.post(`/accounts/${g}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: o
							}),
							hideErrorAlert: !0
						}), !0
					} catch (m) {
						return console.error(m), !1
					}
				}, p = async g => {
					try {
						return await (await e.post(a, {
							body: JSON.stringify({
								darkMode: g
							})
						})).body
					} catch (o) {
						console.error(o)
					}
				}, v = async g => {
					try {
						return await (await e.post(`${a}/recents`, {
							body: JSON.stringify(g),
							hideErrorAlert: !0
						})).body
					} catch (o) {
						console.error(o)
					}
				}, n = async g => {
					try {
						return await (await e.post(`${a}/viewed-changes`, {
							body: JSON.stringify(g),
							hideErrorAlert: !0
						})).body
					} catch (o) {
						throw console.error(o), o
					}
				}, c = async g => {
					try {
						return await (await e.post(a + "/flags", {
							body: JSON.stringify(g)
						})).body
					} catch (o) {
						throw console.error(o), o
					}
				}, i = async (g, o) => {
					try {
						return await (await e.post(`${a}/dismissed-tasks`, {
							body: JSON.stringify({
								name: g,
								accountId: o
							}),
							hideErrorAlert: !0
						})).body
					} catch (m) {
						throw console.error(m), m
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				y: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/components/Persistence/index.tsx");
			const u = () => (0, e.useContext)(a.lp)
		},
		"../react/app/components/Persistence/index.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				Wl: function() {
					return v
				},
				lp: function() {
					return P
				},
				Z_: function() {
					return _
				},
				r7: function() {
					return D
				},
				Tv: function() {
					return Q
				},
				yZ: function() {
					return T.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u),
				f = t("../react/utils/bootstrap.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/Persistence/api.ts");
			const v = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function c(W) {
				for (var j = 1; j < arguments.length; j++) {
					var A = arguments[j] != null ? Object(arguments[j]) : {},
						O = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(A).filter(function(F) {
						return Object.getOwnPropertyDescriptor(A, F).enumerable
					})), O.forEach(function(F) {
						i(W, F, A[F])
					})
				}
				return W
			}

			function i(W, j, A) {
				return j = g(j), j in W ? Object.defineProperty(W, j, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[j] = A, W
			}

			function g(W) {
				var j = o(W, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function o(W, j) {
				if (typeof W != "object" || W === null) return W;
				var A = W[Symbol.toPrimitive];
				if (A !== void 0) {
					var O = A.call(W, j || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(W)
			}
			const m = {
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
				I = c({}, m, {
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
				P = (0, e.createContext)(I),
				b = P.Consumer,
				_ = ({
					children: W,
					onDarkModeChangeCb: j
				}) => {
					const [A, O] = (0, e.useState)(m), [F, ee] = (0, e.useState)(I.isLoading), [J, ne] = (0, e.useState)(!1), G = (0, f.$8)(), B = (0, a.p4)(ue => (0, s.wH)(ue)), [, V] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						G ? (0, p.yl)().then(ue => {
							if (ue) {
								var _e;
								O(ue), V(ue == null || (_e = ue.flags) === null || _e === void 0 ? void 0 : _e.hasEnabledSecurityNavigation), l().identify({
									hasEnabledSecurityNavigation: ue.flags.hasEnabledSecurityNavigation
								}), j(ue.darkMode)
							}
						}).finally(() => ee(!1)) : ee(!1)
					}, [G]);
					const te = (ue, _e) => !!A.favorites.find(be => be.type === "zone" && be.name === ue && be.accountId === _e),
						le = v - A.favorites.length,
						pe = ue => A.favorites.filter(be => be.type === "zone" && be.accountId === ue).length < v;
					return r().createElement(P.Provider, {
						value: c({}, A, {
							isLoading: F,
							remainingStarSlots: le,
							isUpdatingFlags: J,
							actions: {
								canAccountStarZone: pe,
								isZoneStarred: te,
								starZone: async (ue, _e) => {
									var be;
									const Te = !te(ue, _e),
										Le = pe(_e);
									if (Te && !Le) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Ee = await (0, p.lt)(ue, _e);
									l().sendEvent("click star zone", {
										isStarring: Te,
										totalStarredZones: Ee.filter(De => De.accountId === _e && De.type === "zone").length,
										totalZones: B == null || (be = B.paginationData) === null || be === void 0 ? void 0 : be.info.total_count
									}), O(c({}, A, {
										favorites: Ee
									}))
								},
								toggleSecurityNavigation: async ue => {
									ne(!0), await (0, p.Sp)({
										hasEnabledSecurityNavigation: ue
									}), l().identify({
										hasEnabledSecurityNavigation: ue
									}), ne(!1), V(ue), O(c({}, A, {
										flags: {
											hasEnabledSecurityNavigation: ue
										}
									}))
								},
								setDarkMode: async ue => {
									const _e = await (0, p.C8)(ue);
									O(_e), j(_e.darkMode)
								},
								logRouteVisited: async ue => {
									var _e;
									const be = await (0, p.n)(ue);
									O((_e = be) !== null && _e !== void 0 ? _e : c({}, A))
								},
								viewChange: async ue => {
									const _e = await (0, p.m6)(ue);
									O(c({}, A, {
										viewedChanges: _e
									}))
								},
								dismissTask: async (ue, _e) => {
									const be = await (0, p.Mn)(ue, _e);
									O(c({}, A, {
										dismissedTasks: be
									}))
								}
							}
						})
					}, W)
				};
			var T = t("../react/app/components/Persistence/hooks.ts"),
				E = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				C = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(W) {
					for (var j = 1; j < arguments.length; j++) {
						var A = arguments[j];
						for (var O in A) Object.prototype.hasOwnProperty.call(A, O) && (W[O] = A[O])
					}
					return W
				}, L.apply(this, arguments)
			}

			function S(W, j) {
				if (W == null) return {};
				var A = k(W, j),
					O, F;
				if (Object.getOwnPropertySymbols) {
					var ee = Object.getOwnPropertySymbols(W);
					for (F = 0; F < ee.length; F++) O = ee[F], !(j.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(W, O) || (A[O] = W[O]))
				}
				return A
			}

			function k(W, j) {
				if (W == null) return {};
				var A = {},
					O = Object.keys(W),
					F, ee;
				for (ee = 0; ee < O.length; ee++) F = O[ee], !(j.indexOf(F) >= 0) && (A[F] = W[F]);
				return A
			}
			const M = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var D = W => {
					let {
						isStarred: j,
						size: A = 16
					} = W, O = S(W, ["isStarred", "size"]);
					const F = M[(0, E.Yc)() ? "dark" : "light"];
					return r().createElement(C.J, L({
						type: j ? "star" : "star-outline",
						color: j ? F.gold : F.gray,
						size: A
					}, O))
				},
				N = t("../node_modules/@cloudflare/elements/es/index.js");

			function x(W) {
				for (var j = 1; j < arguments.length; j++) {
					var A = arguments[j] != null ? Object(arguments[j]) : {},
						O = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(A).filter(function(F) {
						return Object.getOwnPropertyDescriptor(A, F).enumerable
					})), O.forEach(function(F) {
						Z(W, F, A[F])
					})
				}
				return W
			}

			function Z(W, j, A) {
				return j = re(j), j in W ? Object.defineProperty(W, j, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[j] = A, W
			}

			function re(W) {
				var j = ge(W, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function ge(W, j) {
				if (typeof W != "object" || W === null) return W;
				var A = W[Symbol.toPrimitive];
				if (A !== void 0) {
					var O = A.call(W, j || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(W)
			}
			const ce = {
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
			var Q = (0, e.forwardRef)(({
				featurePreview: W = !1,
				isStarred: j,
				onClickFn: A,
				isDisabled: O,
				testId: F,
				buttonText: ee,
				size: J = "large",
				variant: ne = "pill"
			}, G) => {
				const [B, V] = (0, e.useState)(!1), te = ce[(0, E.Yc)() ? "dark" : "light"][j && !W ? "active" : "default"], le = x({}, J === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, J === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, J === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), pe = {
					pill: "50vh",
					button: 4
				};
				return r().createElement(N.zx, {
					onMouseEnter: () => V(!0),
					onMouseLeave: () => V(!1),
					innerRef: G,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: le.paddingRight,
					gap: 1,
					pl: le.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: pe[ne],
					border: "1px solid",
					cursor: W || O ? "default" : "pointer",
					backgroundColor: B ? te.bgHover : te.bg,
					color: te.text,
					borderColor: te.border,
					onClick: A,
					opacity: O ? .5 : 1,
					disabled: O,
					fontSize: le.fontSize,
					height: le.height,
					"data-testid": F
				}, r().createElement(D, {
					isStarred: W ? !1 : j,
					size: le.starIconSize
				}), ee)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$n: function() {
					return g
				},
				IU: function() {
					return m
				},
				Wq: function() {
					return L
				},
				dL: function() {
					return I
				},
				fO: function() {
					return C
				},
				gw: function() {
					return k
				},
				hv: function() {
					return o
				},
				iY: function() {
					return c
				},
				jq: function() {
					return M
				},
				o_: function() {
					return _
				},
				us: function() {
					return E
				},
				wB: function() {
					return i
				},
				zJ: function() {
					return T
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				f = t("../react/pages/stream/selectors.ts"),
				s = t("../react/pages/home/domain-registration/selectors.ts"),
				p = t("../react/pages/images/selectors.ts"),
				v = t("../react/pages/r2/selectors.ts");
			const n = y => !!(0, l.b)(y),
				c = y => n(y) ? (0, e.hT)(y) : !0,
				i = (y, D, N, x = "read") => {
					const Z = (0, a.nA)(y);
					return n(y) ? (0, e.WL)(y, (0, e.W9)(N, e.ZZ[x]), (0, e.j)(Z == null ? void 0 : Z.id)) : (0, u.Yj)(y)(D)[x]
				},
				g = (y, D, N, x = "read") => {
					const Z = (0, a.nA)(y),
						re = e.zs.includes(N);
					return n(y) ? (0, e.WL)(y, re ? N : (0, e.my)(N, e.ZZ[x === "edit" ? "update" : x]), (0, e.j)(Z == null ? void 0 : Z.id)) : (0, u.Yj)(y)(D)[x === "update" ? "edit" : x]
				},
				o = y => !!(0, f._Q)(y),
				m = y => (0, p.pT)(y),
				I = y => (0, p.pT)(y) && (0, p.GH)(y),
				P = y => sourcingKitEnabledSelector(y),
				b = y => !!r2EnabledSelector(y),
				_ = y => (0, v.Mv)(y),
				T = y => (0, r.$f)(y, "rulesets.magic_transit_allowed"),
				E = y => (0, r.$f)(y, "flowtrackd.magic_custom_config_allowed"),
				C = y => (0, r.$f)(y, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				L = y => (0, u.Le)(y, "ddos_protection", "l4_rulesets"),
				S = y => hasAccountEntitlements(y, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				k = y => (0, s.HO)(y),
				M = y => !(0, r.yD)(y) && !!g(y, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a),
				l = t("../../../../node_modules/prop-types/index.js"),
				f = t.n(l),
				s = t("webpack/sharing/consume/default/react-redux/react-redux"),
				p = t.n(s),
				v = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(v),
				c = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				g = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				o = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				m = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				I = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				P = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				b = t.n(P),
				_ = t("../react/common/actions/membershipActions.ts"),
				T = t("../react/utils/url.ts"),
				E = t("../react/app/components/Footer.tsx");

			function C(K) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var W = arguments[Q] != null ? Object(arguments[Q]) : {},
						j = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(W).filter(function(A) {
						return Object.getOwnPropertyDescriptor(W, A).enumerable
					})), j.forEach(function(A) {
						L(K, A, W[A])
					})
				}
				return K
			}

			function L(K, Q, W) {
				return Q = S(Q), Q in K ? Object.defineProperty(K, Q, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[Q] = W, K
			}

			function S(K) {
				var Q = k(K, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function k(K, Q) {
				if (typeof K != "object" || K === null) return K;
				var W = K[Symbol.toPrimitive];
				if (W !== void 0) {
					var j = W.call(K, Q || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(K)
			}
			const M = (0, c.createComponent)(({
					type: K
				}) => ({
					height: K !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				y = (0, c.createComponent)(({
					theme: K,
					margin: Q,
					size: W = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: K.colors.gray[3],
					height: Q ? "auto" : "100%",
					padding: Q ? 0 : K.space[W > 1 ? W - 2 : 0],
					margin: Q,
					justifyContent: "center",
					alignItems: "center"
				})),
				D = (0, c.createComponent)(() => ({
					textAlign: "left"
				})),
				N = (0, c.createComponent)(() => ({
					textAlign: "right"
				})),
				x = (0, c.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[6]
				})),
				Z = (0, c.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[4]
				})),
				re = (0, c.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[3]
				})),
				ge = (0, c.createComponent)(({
					theme: K
				}) => ({
					width: "100%",
					height: 125,
					marginTop: K.space[4],
					padding: K.space[2]
				}), "textarea");
			class ce extends r().Component {
				constructor(...Q) {
					super(...Q);
					L(this, "state", {
						value: "",
						submitted: !1
					}), L(this, "handleTextareaChange", W => {
						this.setState({
							value: W.target.value
						})
					}), L(this, "sendErrToSentry10", async () => {
						try {
							var W, j, A, O;
							const F = ((W = window) === null || W === void 0 || (j = W.bootstrap) === null || j === void 0 || (A = j.data) === null || A === void 0 || (O = A.user) === null || O === void 0 ? void 0 : O.id) || "Unknown",
								ee = this.props.eventId || g.eW(),
								J = {
									name: F,
									email: `${F}@userid.com`,
									comments: this.state.value,
									eventId: ee,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: C({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(J)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (F) {
							console.error(F)
						}
					}), L(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), L(this, "renderContent", W => r().createElement(v.I18n, null, j => r().createElement(M, {
						type: W
					}, r().createElement(y, null, r().createElement(D, null, r().createElement(x, null, j.t("error.internal_issues")), r().createElement(Z, null, j.t("error.help_us")), r().createElement(ge, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: A => this.handleTextareaChange(A),
						disabled: this.state.submitted,
						placeholder: j.t("error.give_feedback")
					}), r().createElement(N, null, !this.state.submitted && r().createElement(i.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, j.t("common.submit")), this.state.submitted && r().createElement(re, null, j.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: Q,
						sentryTag: W,
						membershipsList: j
					} = this.props;
					console.error(`SomethingWrong: ${Q}`);
					let A = "";
					const O = (0, T.e1)();
					if (O) {
						var F;
						const J = await j({
								parameters: {
									status: "accepted"
								}
							}),
							ne = J == null || (F = J.find(G => G.id === O)) === null || F === void 0 ? void 0 : F.roles;
						ne && ne.length && (A = ne.join(", "))
					}
					const ee = `ErrorBoundary - ${Q}`;
					o.Tb(ee, {
						tags: {
							errorBoundary: W,
							normalizedPath: (0, T.Fl)(window.location.pathname),
							roles: A.length ? A : void 0
						}
					}), b().sendEvent("something wrong", {
						error: Q,
						roles: A.length ? A : void 0
					})
				}
				render() {
					const {
						type: Q
					} = this.props;
					return Q === "fullscreen" ? r().createElement("div", null, r().createElement(m.h4, null, r().createElement(a.Link, {
						to: "/"
					}, r().createElement(I.TR, null))), this.renderContent(Q), r().createElement(E.Z, null)) : this.renderContent(Q)
				}
			}
			ce.propTypes = {
				type: f().oneOf(["fullscreen", "page"]),
				error: f().oneOfType([f().string, f().object]),
				eventId: f().string,
				sentryTag: f().string,
				membershipsList: f().func
			}, h.Z = (0, s.connect)(() => ({}), {
				membershipsList: _.YT
			})(ce)
		},
		"../react/app/providers/storeContainer.js": function($, h, t) {
			"use strict";
			t.d(h, {
				bh: function() {
					return N
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				a = t.n(r),
				u = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				f = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				s = t("../react/app/rootReducer.js"),
				p = t("../react/app/redux/normalizer.js"),
				v = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				c = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				g = t("../react/common/sagas/index.js"),
				o = t("../react/app/redux/processActionMiddleware.js"),
				m = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				I = t("../../../../node_modules/is-promise/index.js"),
				P = t.n(I);

			function b(x) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var re = arguments[Z] != null ? Object(arguments[Z]) : {},
						ge = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(re).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(re, ce).enumerable
					})), ge.forEach(function(ce) {
						_(x, ce, re[ce])
					})
				}
				return x
			}

			function _(x, Z, re) {
				return Z = T(Z), Z in x ? Object.defineProperty(x, Z, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[Z] = re, x
			}

			function T(x) {
				var Z = E(x, "string");
				return typeof Z == "symbol" ? Z : String(Z)
			}

			function E(x, Z) {
				if (typeof x != "object" || x === null) return x;
				var re = x[Symbol.toPrimitive];
				if (re !== void 0) {
					var ge = re.call(x, Z || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Z === "string" ? String : Number)(x)
			}
			const C = {
					key: "cf-redux-store",
					storage: f.Z,
					whitelist: ["accountAccess", "invite"]
				},
				L = (0, i.ZP)(),
				k = [({
					dispatch: x
				}) => Z => re => P()(re) ? re.then(ge => x(ge)) : Z(re), L, u.Z, o.Z, p.qR],
				M = x => (0, l.Wq)(C, b({}, s.Z, x));

			function y() {
				const x = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					re = e.compose((0, e.applyMiddleware)(...k), v.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					ge = {},
					ce = (0, e.createStore)(M(c.Z.getReducers()), ge, re);
				L.run(g.Z), (0, l.p5)(ce);
				const Q = (t.g.bootstrap || {}).data || {};
				return ce.dispatch((0, m.mW)("user", Q.user)), ce
			}
			let D;
			c.Z.setChangeListener(x => {
				var Z;
				D && ((Z = D) === null || Z === void 0 ? void 0 : Z.replaceReducer) && (D.replaceReducer(M(x)), (0, l.p5)(D))
			});

			function N() {
				return D || (D = y()), D
			}
		},
		"../react/app/redux/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				TZ: function() {
					return a
				},
				UM: function() {
					return l
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
			const a = () => (0, e.useStore)(),
				u = () => a().getState(),
				l = () => (0, e.useDispatch)(),
				f = e.useSelector
		},
		"../react/app/redux/makeAction.js": function($, h, t) {
			"use strict";
			t.d(h, {
				$J: function() {
					return i
				},
				Oy: function() {
					return c
				},
				SC: function() {
					return v
				},
				ZP: function() {
					return g
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				a = t.n(r);

			function u(o) {
				for (var m = 1; m < arguments.length; m++) {
					var I = arguments[m] != null ? Object(arguments[m]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(b) {
						return Object.getOwnPropertyDescriptor(I, b).enumerable
					})), P.forEach(function(b) {
						l(o, b, I[b])
					})
				}
				return o
			}

			function l(o, m, I) {
				return m = f(m), m in o ? Object.defineProperty(o, m, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[m] = I, o
			}

			function f(o) {
				var m = s(o, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function s(o, m) {
				if (typeof o != "object" || o === null) return o;
				var I = o[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(o, m || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(o)
			}
			const p = u({}, r),
				v = (o, m, I, P = {}) => {
					const b = o === "delete" ? "del" : o.toLowerCase();
					return I && b !== "del" && (P.body = I), p[b](m, P)
				},
				n = (o, m) => (o.meta.params = m, o),
				c = (o, m, I, P, {
					body: b = {}
				}) => {
					const {
						result: _,
						messages: T,
						result_info: E
					} = b, C = Object.values(m);
					if (o.meta.method === "delete") {
						const L = C[C.length - 1];
						o.meta.id = typeof L == "object" ? L.id : L
					}
					return o.payload = _, T && (o.meta.messages = T), C.length && (o.meta.params = m), E && (o.meta.paginationData = {
						info: E,
						actionParameters: C,
						options: I[0],
						insertionOffset: 0
					}), o
				},
				i = (o, m, I, P, b) => (o.payload = b && b.body && b.body.errors, o.meta.messages = b && b.body && b.body.messages, o.meta.params = m, o.apiError = b, o);

			function g(o, m, I, P) {
				const b = (0, e.RM)(o, m, I, P).apiFetch(v).on("start", n).on("success", c).on("error", i),
					_ = b.mock;
				return b.mock = T => (_((...E) => {
					const C = T(...E);
					return C && typeof C == "object" && "result" in C ? C : {
						result: C
					}
				}), b), b
			}
		},
		"../react/app/redux/normalizer.js": function($, h, t) {
			"use strict";
			t.d(h, {
				P1: function() {
					return v
				},
				jQ: function() {
					return s
				},
				qR: function() {
					return n
				},
				uc: function() {
					return p
				}
			});
			var e = t("../react/pages/home/alerts/config.tsx"),
				r = t("../react/pages/workers/entityTypes.ts"),
				a = t("../react/pages/email/types.ts"),
				u = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				f = t.n(l);
			const s = l.static.from([{
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
				p = c => c.entities,
				v = (...c) => (0, u.P1)(s, p, ...c),
				n = (0, u.QB)(s)
		},
		"../react/app/redux/utils.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				F: function() {
					return a
				},
				_: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const r = u => (l, f, s) => (0, e.SC)(l, f, s, {
					hideErrorAlert: !0
				}).catch(u),
				a = u => l => {
					if (l.status === u) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Cm: function() {
					return f
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return s
				},
				Li: function() {
					return v
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return a
				},
				Yc: function() {
					return c
				},
				gM: function() {
					return u
				},
				lV: function() {
					return l
				},
				s1: function() {
					return p
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				a = "MODAL_OPEN",
				u = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				f = "TOGGLE_OFF",
				s = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				v = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let c = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/activeActions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				I: function() {
					return r
				},
				n: function() {
					return a
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = (u, l) => ({
					type: e.HI,
					activeKey: u,
					activeValue: l
				}),
				a = u => ({
					type: e.s1,
					activeKey: u
				})
		},
		"../react/common/actions/membershipActions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				AX: function() {
					return i
				},
				YT: function() {
					return v
				},
				ct: function() {
					return s
				},
				d6: function() {
					return n
				},
				kt: function() {
					return c
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/common/constants/index.ts");

			function a(g) {
				for (var o = 1; o < arguments.length; o++) {
					var m = arguments[o] != null ? Object(arguments[o]) : {},
						I = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(m).filter(function(P) {
						return Object.getOwnPropertyDescriptor(m, P).enumerable
					})), I.forEach(function(P) {
						u(g, P, m[P])
					})
				}
				return g
			}

			function u(g, o, m) {
				return o = l(o), o in g ? Object.defineProperty(g, o, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[o] = m, g
			}

			function l(g) {
				var o = f(g, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(g, o) {
				if (typeof g != "object" || g === null) return g;
				var m = g[Symbol.toPrimitive];
				if (m !== void 0) {
					var I = m.call(g, o || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(g)
			}
			const s = g => {
					const o = g.payload.map(m => a({}, m, {
						membershipId: m.id,
						id: m.account.id
					}));
					return a({}, g, {
						payload: o
					})
				},
				p = g => {
					const o = s(g);
					return Array.isArray(o.payload) ? a({}, g, {
						payload: o.payload[0]
					}) : a({}, g, {
						payload: null
					})
				},
				v = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", s),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				c = (...g) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: g
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function($, h, t) {
			"use strict";
			t.r(h), t.d(h, {
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

			function a(l, f, s = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: f
					},
					options: s
				}
			}

			function u(l) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: l
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function($, h, t) {
			"use strict";
			t.r(h), t.d(h, {
				add: function() {
					return l
				},
				error: function() {
					return v
				},
				info: function() {
					return s
				},
				success: function() {
					return f
				},
				warn: function() {
					return p
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

			function l(n, c, i = {}) {
				return i = i || {},
					function(g) {
						let o = u++,
							m = {
								id: o,
								type: n,
								message: c,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									g(a(o)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						g(r(m))
					}
			}

			function f(n, c) {
				return l("success", n, c)
			}

			function s(n, c) {
				return l("info", n, c)
			}

			function p(n, c) {
				return l("warning", n, c)
			}

			function v(n, c) {
				return l("error", n, c)
			}
		},
		"../react/common/actions/userActions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				BT: function() {
					return s
				},
				Ut: function() {
					return P
				},
				V_: function() {
					return b
				},
				Y9: function() {
					return m
				},
				Z0: function() {
					return T
				},
				mp: function() {
					return I
				},
				r3: function() {
					return _
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/app/redux/utils.ts");

			function a(E) {
				for (var C = 1; C < arguments.length; C++) {
					var L = arguments[C] != null ? Object(arguments[C]) : {},
						S = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(L).filter(function(k) {
						return Object.getOwnPropertyDescriptor(L, k).enumerable
					})), S.forEach(function(k) {
						u(E, k, L[k])
					})
				}
				return E
			}

			function u(E, C, L) {
				return C = l(C), C in E ? Object.defineProperty(E, C, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[C] = L, E
			}

			function l(E) {
				var C = f(E, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function f(E, C) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var S = L.call(E, C || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(E)
			}
			const s = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				v = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				c = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				g = (0, e.C)("user").delete`/user/two_factor_authentication`,
				o = (0, e.C)("user").put`/user/email`;

			function m(...E) {
				return o(...E)
			}
			const I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				P = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(E => a({}, E, {
					body: a({}, E.body, {
						result: {}
					})
				}))),
				b = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				_ = (0, e.C)("userDetails").get`/user/details`,
				T = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AccessCheck.tsx": function($, h, t) {
			"use strict";
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/utils/zoneLevelAccess.ts");
			const a = ({
				legacyPermission: u,
				canAccess: l,
				children: f,
				render: s
			}) => {
				const p = !!(0, r.P)();
				let v;
				typeof l == "boolean" && l !== void 0 && p ? v = {
					read: l,
					list: l,
					create: l,
					update: l,
					delete: l,
					sign: l
				} : v = (0, e.Z)(u);
				const n = s || f;
				return n ? n(v) : null
			};
			h.Z = a
		},
		"../react/common/components/AccessCheck/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return f
				},
				j: function() {
					return c
				},
				jX: function() {
					return s
				},
				my: function() {
					return p
				},
				u1: function() {
					return e
				},
				zs: function() {
					return l
				}
			});
			const e = "com.cloudflare.api.account",
				r = "com.cloudflare.api.account.",
				a = "com.cloudflare.edge.",
				u = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let f = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const s = (i, g) => `${r}${i?i+".":""}${g}`,
				p = (i, g) => `${u}${i?i+".":""}${g}`,
				v = (i, g) => `${a}${i}.${g}`,
				n = (i = "") => `${r}${i}`,
				c = (i = "") => `${u}${i}`
		},
		"../react/common/components/AccessCheck/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				L8: function() {
					return u.L8
				},
				W9: function() {
					return u.W9
				},
				WL: function() {
					return a.WL
				},
				ZP: function() {
					return r.Z
				},
				ZZ: function() {
					return u.ZZ
				},
				hT: function() {
					return a.hT
				},
				j: function() {
					return u.j
				},
				jX: function() {
					return u.jX
				},
				my: function() {
					return u.my
				},
				xk: function() {
					return e.Z
				},
				zs: function() {
					return u.zs
				}
			});
			var e = t("../react/common/components/AccessCheck/useAccessCheck.ts"),
				r = t("../react/common/components/AccessCheck/AccessCheck.tsx"),
				a = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../react/app/redux/index.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function f(s) {
				const {
					read: p,
					edit: v
				} = (0, a.p4)(u.Yj)(s);
				let n = v;
				if (s != "zone_versioning") {
					const i = (0, a.p4)(l.G);
					(i == null ? void 0 : i.isLocked) && (n = !1)
				}
				return (0, e.useMemo)(() => ({
					read: p,
					list: p,
					create: n,
					update: n,
					delete: n,
					sign: n
				}), [p, n])
			}
			h.Z = f
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				WL: function() {
					return i
				},
				hT: function() {
					return m
				},
				kd: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				a = t("../react/pages/home/members/utils.ts"),
				u = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");
			const f = {
					allow: "allow",
					deny: "deny"
				},
				s = 0,
				p = 1,
				v = 2,
				n = 3;

			function c(C, L, S, k) {
				let M = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					y;
				for (y in M) M[y] = i(C, `${L}.${y}`, S, k);
				return M
			}

			function i(C, L, S, k) {
				var M;
				if (g(L) && !o(L)) {
					const Z = (0, l.G)(C);
					if (Z == null ? void 0 : Z.isLocked) return !1
				}
				const y = (M = (0, r.D0)(C)) === null || M === void 0 ? void 0 : M.id,
					D = y ? [`com.cloudflare.api.account.${y}`] : void 0,
					N = (0, a.vq)(y);
				return !!I(C, N, L, S, k || D)
			}

			function g(C) {
				return ![u.ZZ.read, u.ZZ.list].some(L => C.endsWith(L))
			}

			function o(C) {
				return C.includes("zone.versioning")
			}

			function m(C) {
				const L = (0, r.Ko)(C);
				let S = !1;
				return L == null || L.forEach(k => {
					k.access === f.allow && k.permission_groups.forEach(M => {
						var y;
						(M == null || (y = M.meta) === null || y === void 0 ? void 0 : y.scopes) === u.u1 && (S = !0)
					})
				}), S
			}

			function I(C, L, S, k, M) {
				const y = (0, r.Ko)(C),
					D = {};
				y == null || y.forEach(re => {
					var ge;
					const ce = re.access;
					let K = s;
					if (S && re.permission_groups.forEach(Q => {
							var W, j;
							L == null || (W = L.find(A => A.id === Q.id)) === null || W === void 0 || (j = W.permissions) === null || j === void 0 || j.forEach(A => {
								K = Math.max(K, P(A, S))
							})
						}), K !== s && !!k) {
						let Q = s;
						re.resource_groups.forEach(W => {
							Q = Math.max(Q, _(W.scope, k, M))
						}), K = Q === s ? Q : K + Q
					}(D == null || (ge = D[ce]) === null || ge === void 0 ? void 0 : ge[K]) || (0, e.Z)(D, [ce, K], []), D[ce][K].push(re)
				});
				const N = D[f.allow] && Object.keys(D[f.allow]).map(re => parseInt(re)),
					x = D[f.deny] && Object.keys(D[f.deny]).map(re => parseInt(re)),
					Z = Math.max.apply(Math, N);
				return Z === s || Math.max.apply(Math, x) >= Z ? null : D[f.allow][Z]
			}

			function P(C, L) {
				if (C.key === L || b(C.key, L)) return n;
				for (const S of (C == null ? void 0 : C.implies) || []) {
					let k = P(S, L);
					if (k > s) return k
				}
				return s
			}

			function b(C, L) {
				const S = L == null ? void 0 : L.lastIndexOf(".");
				return S === -1 ? !1 : (L == null ? void 0 : L.substring(0, S)) + ".*" === C
			}

			function _(C, L, S) {
				var k;
				let M = s;
				if (C == null || (k = C.objects) === null || k === void 0 || k.forEach(y => {
						M = Math.max(M, E(y, L))
					}), M === s) return M;
				if (C.key !== "*") switch (!0) {
					case T(C.key, S) > s:
					case (!(S == null ? void 0 : S.length) && M === n):
						break;
					case (M === p && T(C.key, [L]) > s):
						M = T(C.key, [L]);
						break;
					default:
						return s
				}
				for (const y of C.subset_of || [])
					if (T(y.key, S) === s) return s;
				return M
			}

			function T(C, L = []) {
				for (const S of L || []) {
					if (C === S) return n;
					if (b(C, S)) return v
				}
				return s
			}

			function E(C, L) {
				return C.key === L ? n : C.key === "*" ? p : b(C.key, L) ? v : s
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function($, h, t) {
			"use strict";
			t.d(h, {
				a: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				a = t("../react/common/selectors/accountSelectors.ts");
			const u = f => {
					if (typeof f != "string") throw new Error("invalid Param Type provided");
					const s = f.slice(1).split(":");
					if (s.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: s[0],
						value: s[1]
					}
				},
				l = (f, s) => {
					const {
						resourceId: p,
						accountId: v,
						legacyPermission: n
					} = s;
					let {
						read: c,
						edit: i
					} = s;
					const g = {};
					n && (i = `#${n}:edit`, c = `#${n}:read`);
					const o = p || v;
					if (c) {
						const m = Array.isArray(c) ? c : [c];
						g.isReadable = m.some(I => {
							const P = u(I);
							return (0, a.DT)(f, o, b => !!(b[P.key] && b[P.key][P.value]))
						})
					}
					if (i) {
						const m = Array.isArray(i) ? i : [i];
						g.isEditable = m.some(I => {
							const P = u(I);
							return (0, a.DT)(f, o, b => !!(b[P.key] && b[P.key][P.value]))
						})
					}
					return g
				};
			h.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function($, h, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				a = t("../react/app/HoCs/withEntities.tsx"),
				u = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(c) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						o = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && o.push.apply(o, Object.getOwnPropertySymbols(g).filter(function(m) {
						return Object.getOwnPropertyDescriptor(g, m).enumerable
					})), o.forEach(function(m) {
						f(c, m, g[m])
					})
				}
				return c
			}

			function f(c, i, g) {
				return i = s(i), i in c ? Object.defineProperty(c, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = g, c
			}

			function s(c) {
				var i = p(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function p(c, i) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var o = g.call(c, i || "default");
					if (typeof o != "object") return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}

			function v(c) {
				const g = ["isReadable", "isEditable"].reduce((o, m) => c.hasOwnProperty(m) ? l({}, o, {
					[m]: c[m]
				}) : o, {});
				return c.children(g)
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
			const n = (0, a.Z)((0, u.Z)(v));
			n.displayName = "AccessControl", h.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				PP: function() {
					return c
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
				u = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const f = () => p.test(window.location.pathname) || a.E.has(u.Qq),
				s = () => a.E.get(u.Qq),
				p = /^\/login\/apple(\/)?/,
				n = [p, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				c = () => {
					let g = !1;
					n.forEach(m => {
						if (m.test(window.location.pathname)) {
							g = !0;
							return
						}
					});
					const o = f() && g;
					return o && (0, l.C8)(l.LF.OFF), o
				},
				i = g => {
					g && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let o = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					g && (o = o + `&jwt=${g}`), window.location.href = o
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				oG: function() {
					return o
				},
				sN: function() {
					return p.sN
				},
				v2: function() {
					return p.v2
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/component-button/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				f = t.n(l),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../react/common/components/Dropdown/index.tsx"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(m) {
					for (var I = 1; I < arguments.length; I++) {
						var P = arguments[I];
						for (var b in P) Object.prototype.hasOwnProperty.call(P, b) && (m[b] = P[b])
					}
					return m
				}, n.apply(this, arguments)
			}

			function c(m, I) {
				if (m == null) return {};
				var P = i(m, I),
					b, _;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(m);
					for (_ = 0; _ < T.length; _++) b = T[_], !(I.indexOf(b) >= 0) && (!Object.prototype.propertyIsEnumerable.call(m, b) || (P[b] = m[b]))
				}
				return P
			}

			function i(m, I) {
				if (m == null) return {};
				var P = {},
					b = Object.keys(m),
					_, T;
				for (T = 0; T < b.length; T++) _ = b[T], !(I.indexOf(_) >= 0) && (P[_] = m[_]);
				return P
			}
			const g = (0, s.createStyledComponent)(({
				theme: m
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${m.radii[2]}px 0 0 ${m.radii[2]}px`,
					borderRight: `1px solid ${m.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${m.radii[2]}px ${m.radii[2]}px 0`,
					paddingRight: m.space[2],
					paddingLeft: m.space[2]
				},
				"& button": {
					color: (0, v.Yc)() ? m.colors.text : void 0
				},
				"& button:hover": {
					color: (0, v.Yc)() ? m.colors.text : void 0
				}
			}));

			function o(m) {
				let {
					menu: I,
					containerProps: P,
					disabled: b,
					disabledDropdown: _ = b
				} = m, T = c(m, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: E
				} = (0, l.useI18n)();
				return r().createElement(g, n({}, P, {
					role: "group"
				}), r().createElement(a.zx, n({}, T, {
					disabled: b
				})), r().createElement(p.Lt, {
					trigger: r().createElement(a.zx, {
						type: T.type,
						"aria-haspopup": "menu",
						disabled: _
					}, r().createElement(u.J, {
						type: "caret-down",
						label: E("common.more"),
						size: 12
					})),
					menu: I
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				v: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(p) {
					for (var v = 1; v < arguments.length; v++) {
						var n = arguments[v];
						for (var c in n) Object.prototype.hasOwnProperty.call(n, c) && (p[c] = n[c])
					}
					return p
				}, f.apply(this, arguments)
			}

			function s(p) {
				const v = (0, e.useRef)(null),
					[n, c] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const g = v.current;
					if (g) {
						const {
							bottom: o
						} = g.getBoundingClientRect();
						o > window.innerHeight && c(!0)
					}
				}, []);
				const i = (0, l.S)(g => {
					for (const o of g) o.intersectionRatio < 1 && c(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const g = v.current;
					if (g && i) return i.observe(g), () => {
						i.unobserve(g)
					}
				}, [i]), r().createElement(a.ZC, f({
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
				}, p))
			}
		},
		"../react/common/components/Dropdown/MenuItem.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				s: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);

			function f() {
				return f = Object.assign ? Object.assign.bind() : function(P) {
					for (var b = 1; b < arguments.length; b++) {
						var _ = arguments[b];
						for (var T in _) Object.prototype.hasOwnProperty.call(_, T) && (P[T] = _[T])
					}
					return P
				}, f.apply(this, arguments)
			}

			function s(P, b) {
				if (P == null) return {};
				var _ = p(P, b),
					T, E;
				if (Object.getOwnPropertySymbols) {
					var C = Object.getOwnPropertySymbols(P);
					for (E = 0; E < C.length; E++) T = C[E], !(b.indexOf(T) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, T) || (_[T] = P[T]))
				}
				return _
			}

			function p(P, b) {
				if (P == null) return {};
				var _ = {},
					T = Object.keys(P),
					E, C;
				for (C = 0; C < T.length; C++) E = T[C], !(b.indexOf(E) >= 0) && (_[E] = P[E]);
				return _
			}

			function v(P) {
				for (var b = 1; b < arguments.length; b++) {
					var _ = arguments[b] != null ? Object(arguments[b]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(E) {
						return Object.getOwnPropertyDescriptor(_, E).enumerable
					})), T.forEach(function(E) {
						n(P, E, _[E])
					})
				}
				return P
			}

			function n(P, b, _) {
				return b = c(b), b in P ? Object.defineProperty(P, b, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[b] = _, P
			}

			function c(P) {
				var b = i(P, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function i(P, b) {
				if (typeof P != "object" || P === null) return P;
				var _ = P[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(P, b || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(P)
			}
			const g = ({
					theme: P
				}) => {
					const b = {
						cursor: "pointer",
						background: P.colors.gray[9],
						color: P.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: P.space[2],
						background: P.colors.background,
						color: P.colors.gray[3],
						fontSize: P.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						'&:hover:not(:disabled):not([aria-disabled="true"])': b,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': v({}, b, {
							boxShadow: "none",
							borderRadius: 0
						}),
						'&:is(:disabled, [aria-disabled="true"])': {
							color: P.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				o = (0, a.createComponent)(g, "a"),
				m = (0, a.createComponent)(g, "button");

			function I(P) {
				let {
					disabled: b = !1
				} = P, _ = s(P, ["disabled"]);
				const T = (0, u.useHistory)(),
					E = {
						role: "menuitem"
					};
				if ("href" in _ && typeof _.href == "string") return r().createElement(o, f({
					"aria-disabled": b
				}, E, _, {
					href: b ? void 0 : _.href,
					onClick: L => {
						var S;
						if (b) return L.stopPropagation();
						L.preventDefault(), (S = _.onClick) === null || S === void 0 || S.call(_, L), T.push(_.href)
					}
				}));
				var C;
				return r().createElement(m, f({
					type: (C = _.type) !== null && C !== void 0 ? C : "button"
				}, E, _, {
					disabled: b
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/prop-types/index.js"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const f = ({
				children: s
			}) => r().createElement(l.xu, {
				height: 411
			}, s);
			f.propTypes = {
				children: u().node
			}, h.Z = f
		},
		"../react/common/components/ModalManager.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				ZP: function() {
					return o
				},
				dd: function() {
					return i
				},
				vR: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react-redux/react-redux");
			const u = m => m.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				f = t("../../../../node_modules/swr/core/dist/index.mjs"),
				s = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(m) {
					for (var I = 1; I < arguments.length; I++) {
						var P = arguments[I];
						for (var b in P) Object.prototype.hasOwnProperty.call(P, b) && (m[b] = P[b])
					}
					return m
				}, p.apply(this, arguments)
			}
			const v = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: I,
						closeModal: P
					} = this.props;
					return r().createElement(r().Fragment, null, I.map(({
						ModalComponent: b,
						props: _ = {},
						id: T
					}) => {
						const E = () => {
							typeof _.onClose == "function" && _.onClose(), P(b)
						};
						return r().createElement(v.Provider, {
							key: T,
							value: {
								closeModal: E
							}
						}, r().createElement(f.J$, {
							value: s.ZP
						}, r().createElement(b, p({}, _, {
							isOpen: !0,
							closeModal: E
						}))))
					}))
				}
			}

			function c() {
				const m = r().useContext(v);
				if (!m) throw new Error("useModalContext must be used within a ModalContext");
				return m
			}

			function i() {
				const m = (0, a.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...I) {
						return m(l.openModal(...I))
					}, [m]),
					closeModal: (0, e.useCallback)(function(...I) {
						return m(l.closeModal(...I))
					}, [m])
				}
			}
			var o = (0, a.connect)(m => ({
				modals: u(m)
			}), l)(n)
		},
		"../react/common/components/Page.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				Z: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../node_modules/@cloudflare/component-page/es/index.js");

			function u(l) {
				return r().createElement(a.T3, l)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return p
				},
				JR: function() {
					return v
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return f
				},
				ZI: function() {
					return l
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
					return s
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				a = "date-from",
				u = "date-to",
				l = "from",
				f = "to",
				s = "all",
				p = {
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
			let v = function(c) {
					return c.ADD_FILTER = "Add filter", c.EDIT_FILTER = "Edit filter", c.REMOVE_FILTER = "Remove filter", c.CHANGE_TIME = "Change time window", c.FEED_PAGE_FORWARD = "Activity feed next page", c.FEED_PAGE_BACKWARD = "Activity feed previous page", c.FEED_EXPAND_EVENT = "Activity feed expand event", c.FEED_CLOSE_EVENT = "Activity feed close event", c.FEED_EXPAND_MATCHES = "Activity feed expand matches", c.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", c.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", c.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", c.DOWNLOAD_FEED = "Activity feed download", c
				}({}),
				n = function(c) {
					return c.TIMESERIES = "Timeseries Chart", c.DISTRIBUTION = "Source Distribution Chart", c.TOP_N = "Top N", c.FILTER_BAR = "Filter Bar", c.SCORES_DISTRIBUTIONS = "Scores Distributions", c.INSIGHTS = "Insights", c.RL_HISTOGRAM = "Rate Limit Histogram", c
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Cf: function() {
					return v
				},
				hJ: function() {
					return p
				},
				ys: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), g.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, c || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const p = ({
					name: n,
					additionalData: c = {}
				}) => {
					r().sendEvent(n, a({}, c || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				v: function() {
					return e
				}
			});
			let e = function(r) {
				return r.FIELD = "change field", r.OPERATOR = "change operator", r
			}({})
		},
		"../react/common/constants/billing/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return v
				},
				Hw: function() {
					return f
				},
				Ed: function() {
					return l
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return g
				},
				hQ: function() {
					return s
				},
				SP: function() {
					return p
				}
			});
			let e = function(o) {
				return o.page_rules = "page_rules", o.automatic_platform_optimization = "automatic_platform_optimization", o
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
				l = {
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
				s = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				p = {
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
				c = t("../react/common/constants/billing/tracking.ts"),
				i = t("../react/common/constants/billing/workers.ts");
			const g = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				FP: function() {
					return e
				},
				Nl: function() {
					return l
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
				l = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Dk: function() {
					return g
				},
				Dy: function() {
					return o
				},
				E_: function() {
					return f
				},
				Lv: function() {
					return m
				},
				S4: function() {
					return l
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return v
				},
				Y1: function() {
					return s
				},
				p6: function() {
					return p
				},
				q0: function() {
					return u
				},
				rg: function() {
					return I
				},
				sJ: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const u = "healthy",
				l = "degraded",
				f = "critical",
				s = "unknown",
				p = "not-monitored",
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
				c = {
					f: v.FREE,
					p: v.PRO,
					b: v.BIZ
				},
				i = "marketing-pt",
				g = () => {
					const b = a.Z.get(i);
					if (!!b) return c[b]
				},
				o = ["gov"],
				m = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				I = "banner-notification-interactions",
				P = null
		},
		"../react/common/constants/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/common/constants/roles.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", r.CLOUDFLARE_ACCESS = "Cloudflare Access", r.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", r.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", r.ADMINISTRATOR = "Administrator", r.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", r.ANALYTICS = "Analytics", r.API_GATEWAY = "API Gateway", r.API_GATEWAY_READ = "API Gateway Read", r.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", r.BILLING = "Billing", r.BOT_MANAGEMENT = "Bot Management", r.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", r.CACHE_DOMAIN_PURGE = "Cache Domain Purge", r.CACHE_PURGE = "Cache Purge", r.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", r.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", r.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", r.EMAIL_SECURITY_ANALYST = "Email Security Analyst", r.EMAIL_SECURITY_READONLY = "Email Security Readonly", r.EMAIL_SECURITY_REPORTING = "Email Security Reporting", r.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", r.CLOUDFORCE_ONE_READ = "Cloudforce One Read", r.DNS = "DNS", r.DOMAIN_ADMINISTRATOR = "Domain Administrator", r.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", r.DOMAIN_API_GATEWAY = "Domain API Gateway", r.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", r.DOMAIN_DNS = "Domain DNS", r.DOMAIN_PAGE_SHIELD = "Domain Page Shield", r.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", r.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", r.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", r.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", r.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", r.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", r.HTTP_APPLICATIONS = "HTTP Applications", r.HTTP_APPLICATIONS_READ = "HTTP Applications Read", r.CLOUDFLARE_IMAGES = "Cloudflare Images", r.LOAD_BALANCER = "Load Balancer", r.LOG_SHARE = "Log Share", r.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", r.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", r.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", r.PAGE_SHIELD = "Page Shield", r.PAGE_SHIELD_READ = "Page Shield Read", r.HYPERDRIVE_ADMIN = "Hyperdrive Admin", r.HYPERDRIVE_READONLY = "Hyperdrive Readonly", r.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", r.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", r.LOG_SHARE_READER = "Log Share Reader", r.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", r.CLOUDFLARE_STREAM = "Cloudflare Stream", r.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", r.CLOUDFLARE_DEX = "Cloudflare DEX", r.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", r.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", r.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", r.TRANSFORM_RULES = "Transform Rules", r.TRUST_AND_SAFETY = "Trust and Safety", r.TURNSTILE = "Turnstile", r.TURNSTILE_READ = "Turnstile Read", r.VECTORIZE_ADMIN = "Vectorize Admin", r.VECTORIZE_READONLY = "Vectorize Readonly", r.FIREWALL = "Firewall", r.WAITING_ROOM_ADMIN = "Waiting Room Admin", r.WAITING_ROOM_READ = "Waiting Room Read", r.WORKERS_ADMIN = "Workers Admin", r.ZARAZ_ADMIN = "Zaraz Admin", r.ZARAZ_EDIT = "Zaraz Edit", r.ZARAZ_READONLY = "Zaraz Readonly", r.ZONE_VERSIONING = "Zone Versioning", r.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", r.ZONE_VERSIONING_READ = "Zone Versioning Read", r.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", r.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", r.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", r.BRAND_PROTECTION = "Brand Protection", r
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
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
			let e = function(l) {
				return l.DELETE = "delete", l.CREATE = "create", l.GET = "get", l.UPDATE = "update", l
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
				a = (l, f, s = !1) => {
					var p;
					return `${f} ${(p=r[l])!==null&&p!==void 0?p:l} ${s?"ruleset":"rule"}${f===e.GET?"s":""}`
				},
				u = () => {
					var l;
					return (l = Object.keys(r).reduce((f, s) => {
						const p = Object.values(e).reduce((v, n) => (v.push(a(s, n)), v.push(a(s, n, !0)), v), []);
						return f.concat(p)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				a = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				u = t.n(a);

			function l() {
				var f;
				const {
					accountId: s
				} = (0, a.useParams)(), p = (0, e.p4)(r.D0);
				if (s === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (f = s) !== null && f !== void 0 ? f : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function($, h, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				a = t.n(r),
				u = t("../react/common/selectors/commonSelectors.ts");
			const l = f => {
				const s = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, u.cZ)(f)), n => {
					s((0, e.I)(f, n))
				}]
			};
			h.Z = l
		},
		"../react/common/hooks/useCachedState.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				j: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function u(l, {
				key: f,
				cache: s = a.E,
				ttl: p
			} = {}) {
				var v;
				const n = f !== void 0 && s.get(f),
					[c, i] = (0, e.useState)((v = n) !== null && v !== void 0 ? v : l);
				return [c, o => {
					i(m => (o instanceof Function && (o = o(m)), f !== void 0 && s.set(f, o, p), o))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function($, h, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(a) {
				return (0, e.qf)(a)
			}
			h.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				S: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(u, {
				root: l,
				rootMargin: f,
				threshold: s
			} = {}) {
				const p = (0, e.useRef)(null);

				function v() {
					return p.current === null && (p.current = new IntersectionObserver(u, {
						root: l,
						rootMargin: f,
						threshold: s
					})), p.current
				}
				return (0, e.useEffect)(() => (p.current = new IntersectionObserver(u, {
					root: l,
					rootMargin: f,
					threshold: s
				}), () => {
					var n;
					(n = p.current) === null || n === void 0 || n.disconnect()
				}), [u, l, f, s]), v()
			}
		},
		"../react/common/hooks/usePrevious.ts": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function a(u) {
				const l = (0, e.useRef)(u);
				return (0, e.useEffect)(() => {
					l.current = u
				}, [u]), l.current
			}
			h.Z = a
		},
		"../react/common/hooks/useZoneEntitlement.ts": function($, h, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function a(u) {
				return (0, e.p4)(l => (0, r.rV)(l, u))
			}
			h.Z = a
		},
		"../react/common/middleware/sparrow/errors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Uh: function() {
					return l
				},
				ez: function() {
					return u
				},
				oV: function() {
					return f
				}
			});

			function e(s, p, v) {
				return p = r(p), p in s ? Object.defineProperty(s, p, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[p] = v, s
			}

			function r(s) {
				var p = a(s, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function a(s, p) {
				if (typeof s != "object" || s === null) return s;
				var v = s[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(s, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(s)
			}
			class u extends Error {
				constructor(p, v) {
					super(v);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class l extends u {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class f extends u {
				constructor(p, v) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = v
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Au: function() {
					return X
				},
				B: function() {
					return De
				},
				B3: function() {
					return Y
				},
				BG: function() {
					return S
				},
				Bp: function() {
					return ct
				},
				CV: function() {
					return lt
				},
				D0: function() {
					return T
				},
				DT: function() {
					return G
				},
				EL: function() {
					return F
				},
				EU: function() {
					return V
				},
				GE: function() {
					return ft
				},
				Ko: function() {
					return ne
				},
				Kx: function() {
					return y
				},
				Le: function() {
					return D
				},
				O4: function() {
					return ve
				},
				Ou: function() {
					return W
				},
				Py: function() {
					return Ye
				},
				QI: function() {
					return et
				},
				Qf: function() {
					return C
				},
				RO: function() {
					return Le
				},
				T3: function() {
					return qe
				},
				T8: function() {
					return L
				},
				UX: function() {
					return O
				},
				VP: function() {
					return Ne
				},
				Xo: function() {
					return pt
				},
				Xu: function() {
					return ce
				},
				Yi: function() {
					return Ke
				},
				Yj: function() {
					return J
				},
				Zu: function() {
					return ee
				},
				bC: function() {
					return te
				},
				f8: function() {
					return Z
				},
				hI: function() {
					return tt
				},
				hN: function() {
					return M
				},
				hX: function() {
					return Ee
				},
				iq: function() {
					return Xe
				},
				nE: function() {
					return k
				},
				oD: function() {
					return A
				},
				oI: function() {
					return x
				},
				oJ: function() {
					return st
				},
				tM: function() {
					return j
				},
				uF: function() {
					return K
				},
				ut: function() {
					return Re
				},
				vU: function() {
					return vt
				},
				wQ: function() {
					return ue
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				a = t.n(r),
				u = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(u),
				f = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../../../../node_modules/moment/moment.js"),
				p = t.n(s),
				v = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				c = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				g = t("../react/app/components/DeepLink/selectors.ts"),
				o = t("../react/common/constants/roles.ts"),
				m = t("../react/common/utils/hasRole.ts");

			function I(U) {
				for (var se = 1; se < arguments.length; se++) {
					var fe = arguments[se] != null ? Object(arguments[se]) : {},
						Ce = Object.keys(fe);
					typeof Object.getOwnPropertySymbols == "function" && Ce.push.apply(Ce, Object.getOwnPropertySymbols(fe).filter(function(Se) {
						return Object.getOwnPropertyDescriptor(fe, Se).enumerable
					})), Ce.forEach(function(Se) {
						P(U, Se, fe[Se])
					})
				}
				return U
			}

			function P(U, se, fe) {
				return se = b(se), se in U ? Object.defineProperty(U, se, {
					value: fe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[se] = fe, U
			}

			function b(U) {
				var se = _(U, "string");
				return typeof se == "symbol" ? se : String(se)
			}

			function _(U, se) {
				if (typeof U != "object" || U === null) return U;
				var fe = U[Symbol.toPrimitive];
				if (fe !== void 0) {
					var Ce = fe.call(U, se || "default");
					if (typeof Ce != "object") return Ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (se === "string" ? String : Number)(U)
			}
			const T = U => {
					const se = K(U);
					return se == null ? void 0 : se.account
				},
				E = U => {
					const se = (0, c.PR)(U);
					if (se) {
						const fe = se.id;
						return U.accountAccess[fe] || {}
					}
					return {}
				},
				C = U => U.accountsDetailed,
				L = (0, n.P1)("accountsDetailed", C),
				S = U => U.memberships,
				k = (0, f.P1)((0, n.P1)("memberships", S), g.U, (U, se) => !!se && !!U ? U.filter(fe => se.includes(fe.id)) : U),
				M = U => U.accountFlags && U.accountFlags.data,
				y = U => U.accountFlags,
				D = (U, se, fe) => {
					const Ce = M(U);
					return !Ce || !Ce[se] ? null : Ce[se][fe]
				},
				N = U => U.accountFlags.isRequesting,
				x = (U, ...se) => a()(U, ["accountFlagsChanges", "data", ...se]),
				Z = U => U.accountFlagsChanges.isRequesting,
				re = (0, f.P1)(M, y, (U, se) => ({
					data: U,
					meta: se
				})),
				ge = (U, se, fe) => !!(isEnterpriseSSEnabledSelector(U) && D(U, se, fe)),
				ce = U => U.membership,
				K = (0, n.P1)("membership", ce),
				Q = (0, f.P1)(K, ce, (U, se) => ({
					data: U,
					meta: se
				})),
				W = U => {
					const {
						roles: se = []
					} = K(U) || {};
					return Boolean(se.find(fe => fe === "Super Administrator - All Privileges" || fe === "Billing"))
				},
				j = U => {
					const se = [o.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, m.n)(U, se)
				},
				A = U => {
					const se = E(U),
						fe = Ue.getMemberships(U) ? l().asMutable(Ue.getMemberships(U)) : [];
					if (!!fe) return l().from(fe.map(Ce => I({}, Ce, {
						lastSeen: se[Ce.account.id] ? se[Ce.account.id].lastSeen : null
					})).sort((Ce, Se) => Ce.lastSeen && Se.lastSeen ? Se.lastSeen - Ce.lastSeen : 0))
				},
				O = U => U.filteredMemberships,
				F = (0, n.P1)("filteredMemberships", O),
				ee = (0, f.P1)(K, U => U == null ? void 0 : U.permissions),
				J = (0, f.P1)(ee, U => (0, e.Z)(se => {
					var fe;
					return (fe = U == null ? void 0 : U[se]) !== null && fe !== void 0 ? fe : {
						read: !1,
						edit: !1
					}
				})),
				ne = (0, f.P1)(K, U => U == null ? void 0 : U.policies),
				G = (U, se, fe) => {
					let Ce = Ue.getMembership(U);
					if (!Ce) {
						const Se = Ue.getMemberships(U);
						if (!Se || !se) return !1;
						Ce = Se.find(Be => Be.account.id === se)
					}
					if (!Ce || !fe) return !1;
					try {
						return fe(Ce.permissions)
					} catch {
						return !1
					}
				},
				B = U => {
					var se, fe;
					return (se = (fe = T(U)) === null || fe === void 0 ? void 0 : fe.meta.has_pro_zones) !== null && se !== void 0 ? se : !1
				},
				V = U => {
					var se, fe;
					return (se = (fe = T(U)) === null || fe === void 0 ? void 0 : fe.meta.has_business_zones) !== null && se !== void 0 ? se : !1
				},
				te = U => V(U) || B(U),
				le = (U, se) => {
					const fe = pe(U, se);
					return !!fe && !!fe.enabled
				},
				pe = (U, se) => {
					const fe = Ue.getMembership(U),
						Ce = fe && fe.account;
					return Ce && Ce.legacy_flags && Ce.legacy_flags[se]
				},
				ue = U => le(U, "custom_pages"),
				_e = U => !!U && U["webhooks.webhooks.enabled"],
				be = U => D(U, "bots", "enabled"),
				Te = U => D(U, "billing", "annual_subscriptions_enable"),
				Le = U => U ? Boolean(D(U, "ConstellationAI", "v2_ui")) : !1,
				Ee = U => U ? Boolean(D(U, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				De = U => U ? Boolean(D(U, "AIgateway", "enabled")) : !1,
				Me = U => pe(U, "enterprise_zone_quota"),
				Qe = U => {
					const se = Me(U);
					return !se || !se.available ? -1 : se.available
				},
				Xe = U => U.accountMembers,
				Y = (0, n.P1)("accountMembers", Xe),
				ve = U => U.accountMember && U.accountMember.isRequesting,
				Pe = U => U.accountRoles,
				$e = (0, n.P1)("accountRoles", Pe),
				Ye = (U, se) => {
					const fe = Ue.getMemberships(U),
						Ce = fe && fe.find(nt => nt.account.id === se);
					if (Ce) return Ce.account.name.replace(" Account", " account");
					const Se = Ue.getMembership(U),
						Be = Se && Se.account;
					return Be && Be.id === se ? Be.name : null
				},
				Re = (U, se) => {
					const fe = Ue.getMemberships(U),
						Ce = fe && fe.find(nt => nt.account.id === se);
					if (Ce) return Ce.account.settings.access_approval_expiry;
					const Se = Ue.getMembership(U),
						Be = Se && Se.account;
					return Be && Be.id === se ? Be.settings.access_approval_expiry : null
				},
				pt = (U, se) => {
					const fe = Re(U, se);
					return fe ? p().utc(fe).isAfter() : !1
				},
				qe = (U, se, fe) => {
					const Ce = Re(U, se);
					let Se = Ce ? p().utc(Ce) : null;
					return !Se || !Se.isAfter() ? "" : Se && Se.year() === 3e3 ? fe("account.access_approval.card_expiration_forever") : fe("account.access_approval.card_expiration_text", {
						expiryTimestamp: Se.local().format(v.U.DateTime)
					})
				},
				st = U => U && U.member && U.member.edit,
				X = (U, se) => {
					const fe = Ue.getMembership(U),
						Ce = fe && fe.account;
					return Ce ? Ce.id !== se : !1
				},
				de = U => U.dpa,
				ye = (0, n.P1)("dpa", de),
				je = U => U.webhook,
				Ae = U => U.webhooks,
				he = (0, n.P1)("webhook", Ae),
				Ne = U => U.accountLegoContract,
				gt = (0, n.P1)("accountLegoContract", Ne),
				et = U => {
					const se = gt(U);
					return (se == null ? void 0 : se.lego_state) ? se.lego_state : ""
				},
				at = U => et(U) === "signed",
				ft = U => Ne(U).isRequesting,
				vt = U => {
					const se = gt(U);
					return se && se.subscription_type ? se.subscription_type : ""
				},
				Lt = U => vt(U) !== "",
				Ue = {
					getMembership: K,
					getMemberships: k,
					getFilteredMemberships: F,
					getAccountMembers: Y,
					getAccountRoles: $e
				},
				ct = U => U.accountSingle,
				Ke = (0, n.P1)("accountSingle", ct),
				tt = U => {
					const se = [o.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, o.V.ADMINISTRATOR];
					return (0, m.n)(U, se)
				},
				lt = U => (0, m.n)(U, [o.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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

			function e(l) {
				const f = `__ACTIVE__${l}`;
				return s => {
					const p = s.application;
					return p && p.active[f]
				}
			}

			function r(l) {
				const f = `__TOGGLE__${l}`;
				return s => {
					const p = s.application;
					return p && p.toggles[f]
				}
			}

			function a(l) {
				return l && l.paginationData && l.paginationData.info && l.paginationData.info.total_count ? l.paginationData.info.total_count : 0
			}
			const u = l => l.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$f: function() {
					return o
				},
				AD: function() {
					return l
				},
				BF: function() {
					return g
				},
				Bs: function() {
					return T
				},
				Ci: function() {
					return ee
				},
				DA: function() {
					return Me
				},
				E6: function() {
					return i
				},
				Gy: function() {
					return Le
				},
				Hq: function() {
					return Te
				},
				Ms: function() {
					return L
				},
				Nb: function() {
					return be
				},
				Pj: function() {
					return De
				},
				Q2: function() {
					return f
				},
				Qq: function() {
					return te
				},
				Td: function() {
					return b
				},
				Z: function() {
					return G
				},
				a: function() {
					return _
				},
				a5: function() {
					return V
				},
				c7: function() {
					return le
				},
				du: function() {
					return p
				},
				ec: function() {
					return Z
				},
				f: function() {
					return _e
				},
				fo: function() {
					return ue
				},
				hL: function() {
					return B
				},
				ji: function() {
					return J
				},
				jo: function() {
					return S
				},
				l9: function() {
					return Xe
				},
				lI: function() {
					return u
				},
				p1: function() {
					return I
				},
				pK: function() {
					return Ee
				},
				pf: function() {
					return n
				},
				qR: function() {
					return P
				},
				rV: function() {
					return s
				},
				u1: function() {
					return v
				},
				w4: function() {
					return c
				},
				yD: function() {
					return ne
				}
			});
			var e = t("../react/utils/url.ts");

			function r(Y, ve) {
				return Y && Y[ve]
			}
			const a = Y => !u(Y).isRequesting;

			function u(Y) {
				return Y.entitlements.zone
			}

			function l(Y) {
				return u(Y).data
			}
			const f = Y => {
				var ve, Pe;
				return ((ve = u(Y).paginationData) === null || ve === void 0 || (Pe = ve.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function s(Y, ve) {
				const Pe = l(Y);
				return Pe ? r(Pe, ve) : void 0
			}
			const p = (Y, ve) => s(Y, ve) === !0;

			function v(Y) {
				return Y.entitlements.account
			}

			function n(Y) {
				return v(Y).data
			}
			const c = Y => {
				var ve, Pe;
				return ((ve = v(Y).paginationData) === null || ve === void 0 || (Pe = ve.options) === null || Pe === void 0 ? void 0 : Pe.editedDate) || {}
			};

			function i(Y) {
				return !v(Y).isRequesting
			}

			function g(Y, ve) {
				const Pe = n(Y);
				return Pe ? r(Pe, ve) : void 0
			}

			function o(Y, ve) {
				return g(Y, ve) === !0
			}

			function m(Y, ve) {
				return ve.every(Pe => o(Y, Pe))
			}

			function I(Y) {
				return o(Y, "contract.customer_enabled")
			}

			function P(Y) {
				return o(Y, "contract.self_service_allowed")
			}

			function b(Y) {
				return o(Y, "billing.partners_managed")
			}
			const _ = Y => I(Y) && P(Y),
				T = Y => o(Y, "enterprise.ecp_allowed");

			function E(Y) {
				return C(Y) || o(Y, "argo.allow_smart_routing") || o(Y, "argo.allow_tiered_caching") || o(Y, "rate_limiting.enabled") || o(Y, "ctm.enabled") || o(Y, "workers.enabled") || o(Y, "workers.kv_store.enabled") || o(Y, "stream.enabled")
			}
			const C = Y => p(Y, "argo.allow_smart_routing") || p(Y, "argo.allow_tiered_caching"),
				L = Y => o(Y, "zone.cname_setup_allowed") || o(Y, "zone.partial_setup_allowed") || p(Y, "zone.partial_setup_allowed"),
				S = Y => o(Y, "argo.allow_smart_routing") || p(Y, "argo.allow_smart_routing"),
				k = Y => o(Y, "argo.allow_tiered_caching") || p(Y, "argo.allow_tiered_caching"),
				M = Y => S(Y) || k(Y),
				y = Y => o(Y, "ctm.enabled"),
				D = Y => {
					const ve = g(Y, "ctm.load_balancers");
					return typeof ve == "number" ? ve : 0
				},
				N = Y => {
					const ve = g(Y, "ctm.pools");
					return typeof ve == "number" ? ve : 0
				},
				x = Y => {
					const ve = g(Y, "ctm.origins");
					return typeof ve == "number" ? ve : 0
				},
				Z = Y => o(Y, "workers.enabled"),
				re = Y => o(Y, "stream.enabled"),
				ge = Y => {
					const ve = g(Y, "access.users_allowed");
					return typeof ve == "number" ? ve : 0
				},
				ce = Y => ge(Y) > 0,
				K = Y => {
					const ve = s(Y, "dedicated_certificates");
					return typeof ve == "number" ? ve : 0
				},
				Q = Y => K(Y) > 0,
				W = Y => {
					const ve = s(Y, "rate_limiting.max_rules");
					return typeof ve == "number" ? ve : 0
				},
				j = Y => o(Y, "rate_limiting.enabled"),
				A = Y => {
					const ve = s(Y, "page_rules");
					return typeof ve == "number" ? ve : 0
				},
				O = Y => A(Y) > 0,
				F = Y => {
					const ve = g(Y, "dns_firewall.max_clusters_allowed");
					return typeof ve == "number" ? ve : 0
				},
				ee = Y => F(Y) > 0,
				J = Y => p(Y, "zone.advanced_certificate_manager") || o(Y, "zone.advanced_certificate_manager"),
				ne = Y => s(Y, "authoritative_dns.proxy_record_allowed") === !1 || g(Y, "authoritative_dns.proxy_record_allowed") === !1,
				G = Y => o(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				B = Y => s(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				V = Y => {
					const ve = s(Y, "authoritative_dns.min_record_ttl_allowed");
					return typeof ve == "number" && ve > 1 ? ve : 60
				},
				te = Y => o(Y, "foundation_dns.advanced_nameservers_allowed") || p(Y, "foundation_dns.advanced_nameservers_allowed"),
				le = Y => o(Y, "authoritative_dns.account_custom_nameservers_allowed"),
				pe = Y => p(Y, "authoritative_dns.zone_custom_nameservers_allowed"),
				ue = Y => pe(Y) || le(Y),
				_e = (Y, ve) => ((0, e.el)(window.location.pathname) ? s : g)(Y, ve),
				be = Y => ((0, e.el)(window.location.pathname) ? l : n)(Y),
				Te = Y => o(Y, "authoritative_dns.multi_provider_allowed") || p(Y, "authoritative_dns.multi_provider_allowed"),
				Le = Y => p(Y, "authoritative_dns.cname_flattening_allowed"),
				Ee = Y => o(Y, "secondary_dns.secondary_overrides") || p(Y, "secondary_dns.secondary_overrides"),
				De = Y => o(Y, "authoritative_dns.custom_soa_allowed") || p(Y, "authoritative_dns.custom_soa_allowed"),
				Me = Y => o(Y, "authoritative_dns.custom_ns_ttl_allowed") || p(Y, "authoritative_dns.custom_ns_ttl_allowed"),
				Qe = Y => o(Y, "secondary.create_zone"),
				Xe = Y => te(Y) || le(Y) || Te(Y) || Qe(Y) || Ee(Y) || De(Y) || Me(Y)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				r: function() {
					return l
				},
				v: function() {
					return f
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("../react/utils/bootstrap.ts");
			const l = s => {
				if ((0, u.gm)()) return a.Z.set(e.ly, e.ZW), e.ZW;
				const p = s.userCommPreferences.data;
				if (p == null ? void 0 : p["language-locale"]) return (0, e.i_)(p["language-locale"]), p["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const v = (0, e.Kd)();
					return f(v) ? v : e.ZW
				}
			};

			function f(s) {
				const p = Object.keys(r.Q).find(v => r.Q[v] === s);
				return !!s && typeof s == "string" && p != null && (0, e.S8)(p)
			}
		},
		"../react/common/selectors/userSelectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$8: function() {
					return l
				},
				BG: function() {
					return v
				},
				BY: function() {
					return _
				},
				GP: function() {
					return o
				},
				GU: function() {
					return T
				},
				PR: function() {
					return a
				},
				h$: function() {
					return P
				},
				h8: function() {
					return n
				},
				kk: function() {
					return I
				},
				l8: function() {
					return s
				},
				mV: function() {
					return m
				},
				vW: function() {
					return f
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = E => E.user,
				a = (0, e.P1)("user", r),
				u = E => {
					var C;
					return (C = a(E)) === null || C === void 0 ? void 0 : C.email.endsWith("@cloudflare.com")
				},
				l = E => {
					var C;
					return !!((C = a(E)) === null || C === void 0 ? void 0 : C.id)
				},
				f = E => {
					const C = a(E);
					if (!!C) return C.first_name && C.last_name ? `${C.first_name} ${C.last_name}` : C.email
				},
				s = E => {
					const C = a(E);
					return C && C.has_enterprise_zones
				},
				p = E => E.userCommPreferences,
				v = (0, e.P1)("userCommPreferences", p),
				n = E => {
					const C = a(E);
					return C && C.email_verified
				},
				c = E => {
					const C = v(E);
					return C && C.preferences.marketing_communication
				},
				i = E => E.userDetails,
				g = (0, e.P1)("userDetails", i),
				o = E => {
					const C = g(E);
					return C && C["2FA-RECOVERY"] === "scheduled"
				},
				m = E => {
					const C = g(E);
					return C && C["2FA-RECOVERY"] === "interrupted"
				},
				I = E => {
					const C = g(E);
					return C == null ? void 0 : C["NEW-USER-EMAIL"]
				},
				P = E => E.gates.assignments,
				b = (E, C) => E && E[C];

			function _(E, C) {
				const L = P(E);
				return L ? b(L, C) : void 0
			}
			const T = (E, C) => _(E, C) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$4: function() {
					return S
				},
				$t: function() {
					return Ye
				},
				A4: function() {
					return P
				},
				Cu: function() {
					return b
				},
				DQ: function() {
					return le
				},
				Ej: function() {
					return M
				},
				FH: function() {
					return T
				},
				ID: function() {
					return A
				},
				Iu: function() {
					return I
				},
				Ko: function() {
					return Ee
				},
				Le: function() {
					return _e
				},
				Ly: function() {
					return J
				},
				M3: function() {
					return Y
				},
				N8: function() {
					return Xe
				},
				NY: function() {
					return V
				},
				Ns: function() {
					return F
				},
				Ox: function() {
					return qe
				},
				P4: function() {
					return y
				},
				RO: function() {
					return W
				},
				Tr: function() {
					return Le
				},
				U: function() {
					return _
				},
				Ug: function() {
					return C
				},
				V6: function() {
					return ve
				},
				WR: function() {
					return st
				},
				Xg: function() {
					return m
				},
				ZB: function() {
					return ue
				},
				_y: function() {
					return O
				},
				cU: function() {
					return De
				},
				cg: function() {
					return te
				},
				d2: function() {
					return ge
				},
				il: function() {
					return ee
				},
				jN: function() {
					return N
				},
				jg: function() {
					return G
				},
				kC: function() {
					return k
				},
				kf: function() {
					return Pe
				},
				ko: function() {
					return Q
				},
				mK: function() {
					return Re
				},
				nA: function() {
					return o
				},
				oY: function() {
					return D
				},
				qM: function() {
					return be
				},
				rq: function() {
					return B
				},
				tS: function() {
					return L
				},
				tU: function() {
					return Z
				},
				vB: function() {
					return pt
				},
				vM: function() {
					return x
				},
				wH: function() {
					return E
				},
				wn: function() {
					return pe
				},
				xU: function() {
					return re
				},
				xw: function() {
					return Te
				},
				z5: function() {
					return j
				},
				zO: function() {
					return Me
				},
				zW: function() {
					return $e
				},
				zh: function() {
					return ce
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				a = t("../../../../node_modules/lodash/get.js"),
				u = t.n(a),
				l = t("../../../../node_modules/moment/moment.js"),
				f = t.n(l),
				s = t("../react/common/constants/billing/index.ts");

			function p(X) {
				for (var de = 1; de < arguments.length; de++) {
					var ye = arguments[de] != null ? Object(arguments[de]) : {},
						je = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && je.push.apply(je, Object.getOwnPropertySymbols(ye).filter(function(Ae) {
						return Object.getOwnPropertyDescriptor(ye, Ae).enumerable
					})), je.forEach(function(Ae) {
						v(X, Ae, ye[Ae])
					})
				}
				return X
			}

			function v(X, de, ye) {
				return de = n(de), de in X ? Object.defineProperty(X, de, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[de] = ye, X
			}

			function n(X) {
				var de = c(X, "string");
				return typeof de == "symbol" ? de : String(de)
			}

			function c(X, de) {
				if (typeof X != "object" || X === null) return X;
				var ye = X[Symbol.toPrimitive];
				if (ye !== void 0) {
					var je = ye.call(X, de || "default");
					if (typeof je != "object") return je;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (de === "string" ? String : Number)(X)
			}
			const i = (0, r.P1)("zone", X => X.zone),
				g = X => {
					var de;
					return (de = X.zoneVersioning) === null || de === void 0 ? void 0 : de.zoneVersionSelector
				},
				o = (0, e.P1)(i, g, (X, de) => {
					var ye, je, Ae;
					let he;
					if (Array.isArray(X) && X.length === 1 ? he = X[0] : X && !Array.isArray(X) && (he = X), !he) return;
					const Ne = !!(de == null ? void 0 : de.enabled);
					return p({}, he, he.name && {
						name: Ne ? de.rootZoneName : he.name
					}, {
						versioning: {
							enabled: Ne,
							isRoot: !((ye = he.name) === null || ye === void 0 ? void 0 : ye.endsWith(".config.cfdata.org")),
							version: Ne ? de.selectedVersion : 0,
							rootZoneId: Ne ? de.rootZoneId : (je = (Ae = he) === null || Ae === void 0 ? void 0 : Ae.id) !== null && je !== void 0 ? je : ""
						}
					})
				}),
				m = X => X.zone,
				I = X => X.zone.isRequesting,
				P = (0, e.P1)(o, m, (X, de) => ({
					data: X,
					meta: de
				})),
				b = X => {
					var de, ye;
					return (de = (ye = o(X)) === null || ye === void 0 ? void 0 : ye.id) !== null && de !== void 0 ? de : ""
				},
				_ = X => X.zones,
				T = X => X.zonesRoot,
				E = X => X.zonesAccount,
				C = (0, r.P1)("zones", _),
				L = (0, r.P1)("zonesRoot", T),
				S = (0, r.P1)("zonesAccount", E);

			function k(X) {
				const de = o(X);
				return de ? de.created_on : null
			}

			function M(X, de, ye) {
				const je = k(X);
				if (!je) return;
				const Ae = f().duration(de, ye),
					he = new Date(je),
					Ne = new Date(new Date().getTime() - Ae.asMilliseconds());
				return he.getTime() > Ne.getTime()
			}

			function y(X) {
				const de = o(X);
				return de ? de.status : null
			}

			function D(X) {
				const de = o(X);
				return de ? de.type : null
			}

			function N(X) {
				return (X == null ? void 0 : X.plan_pending) ? X == null ? void 0 : X.plan_pending : X == null ? void 0 : X.plan
			}

			function x(X) {
				const de = o(X);
				if (!de) return;
				const ye = N(de);
				return ye && ye.legacy_id
			}

			function Z(X, de) {
				const ye = N(X);
				return !!ye && s.Gs.indexOf(ye.legacy_id) >= s.Gs.indexOf(de)
			}

			function re(X) {
				return !!X && X.status === "initializing"
			}

			function ge(X) {
				return !!X && X.status === "pending"
			}

			function ce(X) {
				return !!X && X.status === "active"
			}

			function K(X, de) {
				if (!X) return !1;
				const ye = N(X);
				return !!ye && ye.legacy_id === de
			}

			function Q(X) {
				return K(X, "enterprise")
			}
			const W = X => Q(o(X));

			function j(X) {
				return K(X, "business")
			}
			const A = X => j(o(X));

			function O(X) {
				return K(X, "pro")
			}

			function F(X) {
				return K(X, "free")
			}
			const ee = X => F(o(X));

			function J(X) {
				return !Q(X)
			}

			function ne(X) {
				return X && X.owner
			}

			function G(X, de) {
				const ye = ne(de);
				return !!ye && ye.type === "user" && ye.id === X.id
			}

			function B(X) {
				const de = o(X);
				return !!de && de.type === "partial"
			}

			function V(X) {
				const de = o(X);
				return !!de && de.type === "secondary"
			}
			const te = X => {
					var de;
					const ye = o(X);
					return !!(ye == null ? void 0 : ye.host) && !!((de = ye.plan) === null || de === void 0 ? void 0 : de.externally_managed)
				},
				le = X => {
					const de = C(X);
					return de && de.some(Q)
				},
				pe = (X, de) => {
					const ye = o(X);
					return ye && ye.betas ? ye.betas.includes(de) : !1
				},
				ue = (X, ...de) => u()(X, ["zoneFlags", "data", ...de]),
				_e = (X, ...de) => u()(X, ["accountFlags", "data", ...de]),
				be = X => X.accountFlags.isRequesting,
				Te = X => X.zoneFlags.isRequesting,
				Le = (X, ...de) => u()(X, ["zoneFlagsChanges", "data", ...de]),
				Ee = X => X.zoneFlagsChanges.isRequesting,
				De = X => X.zoneFlags && X.zoneFlags.data,
				Me = X => X.zoneFlags,
				Qe = (0, e.P1)(De, Me, (X, de) => ({
					data: X,
					meta: de
				})),
				Xe = (0, r.P1)("abuseUrls", X => X.overview.abuseUrls),
				Y = X => {
					const de = o(X);
					return de ? `/${de.account.id}/${de.name}` : null
				},
				ve = X => X.zoneMarketingCampaigns,
				Pe = X => X.overview.zoneBlocks.data,
				$e = X => X.overview.zoneBlocks.isRequesting,
				Ye = X => X.overview.zoneBlocks.hasData,
				Re = X => {
					var de, ye;
					return (X == null || (de = X.overview.zoneBlocks) === null || de === void 0 || (ye = de.paginationData) === null || ye === void 0 ? void 0 : ye.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				pt = X => X.overview.zoneBlocksReview.isRequesting,
				qe = X => X.overview.zoneHold,
				st = (0, r.P1)("zoneHold", qe)
		},
		"../react/common/utils/formatDate.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			h.Z = (r, a, u = !1) => (0, e.p6)(r, a, u)
		},
		"../react/common/utils/getEnvironment.ts": function($, h, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				a = t("../functions/utils/constants.ts");
			const u = () => {
				var l, f, s, p;
				const n = e.parse(document.cookie)[a.b1];
				let c = null;
				n && (c = (0, r.E9)(n));
				let i = "production";
				switch (!0) {
					case (((l = c) === null || l === void 0 ? void 0 : l.projectType) === "previews" && ((f = c) === null || f === void 0 ? void 0 : f.deploymentId) === "staging"):
						i = "canary";
						break;
					case ((s = window) === null || s === void 0 || (p = s.build) === null || p === void 0 ? void 0 : p.isPreviewDeploy):
						i = "preview";
						break
				}
				return i
			};
			h.Z = u
		},
		"../react/common/utils/hasRole.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (a, u) => {
				const {
					roles: l = []
				} = (0, e.uF)(a) || {};
				return u.some(f => l.includes(f))
			}
		},
		"../react/common/utils/isGuards.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Q$: function() {
					return a
				},
				t: function() {
					return f
				},
				v5: function() {
					return u
				},
				zE: function() {
					return l
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const a = s => s ? ["page", "per_page", "count", "total_count"].every(v => v in s && s[v]) : !1,
				u = (s = "") => e.Dy.includes(s.toLowerCase()),
				l = s => s !== null && typeof s == "object" && "name" in s && "size" in s && "type" in s && typeof s.slice == "function",
				f = s => (0, r.Z)(s)
		},
		"../react/common/utils/startViewTransition.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/common/utils/useQueryCache.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				o: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(s) {
				for (var p = 1; p < arguments.length; p++) {
					var v = arguments[p] != null ? Object(arguments[p]) : {},
						n = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(v).filter(function(c) {
						return Object.getOwnPropertyDescriptor(v, c).enumerable
					})), n.forEach(function(c) {
						a(s, c, v[c])
					})
				}
				return s
			}

			function a(s, p, v) {
				return p = u(p), p in s ? Object.defineProperty(s, p, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[p] = v, s
			}

			function u(s) {
				var p = l(s, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(s, p) {
				if (typeof s != "object" || s === null) return s;
				var v = s[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(s, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(s)
			}
			const f = s => {
				const p = (0, e.useQueryClient)(),
					v = _ => {
						var T;
						return p.getQueriesData((T = _) !== null && T !== void 0 ? T : s)
					},
					n = _ => {
						var T;
						return p.getQueryData((T = _) !== null && T !== void 0 ? T : s)
					},
					c = _ => {
						var T;
						return p.getQueriesData({
							queryKey: (T = _) !== null && T !== void 0 ? T : s,
							stale: !0
						})
					},
					i = (_, T) => {
						var E;
						p.setQueryData((E = T) !== null && E !== void 0 ? E : s, _)
					},
					g = async _ => {
						var T;
						await p.refetchQueries((T = _) !== null && T !== void 0 ? T : s)
					}, o = async (_, T) => {
						var E, C;
						await p.invalidateQueries((E = _) !== null && E !== void 0 ? E : s, r({
							refetchActive: !1
						}, (C = T) !== null && C !== void 0 ? C : {}))
					}, m = async (_, T) => {
						const E = _ || (C => {
							var L;
							return (C == null || (L = C.queryKey) === null || L === void 0 ? void 0 : L[0]) === s
						});
						await p.invalidateQueries(r({
							predicate: E,
							refetchActive: !1,
							refetchInactive: !1
						}, T))
					};
				return {
					refetch: g,
					cancelData: async () => {
						await p.cancelQueries(s)
					},
					invalidate: o,
					setData: i,
					getDataStale: c,
					getData: v,
					prefetchQuery: (_, T) => {
						var E;
						return p.prefetchQuery((E = T) !== null && E !== void 0 ? E : s, _)
					},
					getQueryData: n,
					predicateInvalidate: m,
					batchInvalidate: async ({
						queryKeysToInvalidate: _ = [],
						queryKeysToPredicateInvalidate: T = [],
						refetchActive: E = !1,
						refetchInactive: C = !1
					}) => {
						const L = _.map(k => o(k)),
							S = T.map(k => m(M => {
								var y;
								return (M == null || (y = M.queryKey) === null || y === void 0 ? void 0 : y[0]) === k
							}, {
								refetchActive: E,
								refetchInactive: C
							}));
						await Promise.all([...L, ...S])
					}
				}
			}
		},
		"../react/common/validators/index.js": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return p
				},
				jk: function() {
					return s
				},
				wb: function() {
					return l
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = v => /^https?:\/\/(.*)/.test(v),
				a = v => e.default.hostname.test(v),
				u = v => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(v),
				l = v => /^[!-~]+$/.test(v),
				f = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				s = v => f.test(v),
				p = v => !!v && !!v.length && /^[ -~]+$/.test(v)
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function($, h, t) {
			"use strict";
			t.d(h, {
				DZ: function() {
					return u
				},
				GA: function() {
					return v
				},
				hT: function() {
					return f
				},
				p6: function() {
					return a
				},
				qc: function() {
					return l
				},
				w9: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e);
			const a = i => r().utc(i).format("YYYY-MM-DD"),
				u = i => r().utc(i).format(),
				l = i => r().utc(i).startOf("minute").format(),
				f = i => new Date(i),
				s = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = i => {
					const g = i / 60 / 60 / 1e3;
					return s[Object.keys(s).sort((o, m) => m - o).find(o => g >= o)]
				},
				v = (i, g = o => o.avg && o.avg.sampleInterval ? o.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((o, m) => o + g(m), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				c = i => n[i]
		},
		"../react/pages/caching/tracking.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CACHE_PURGE = "submit custom purge", r.TIERED_CACHE = "select tiered cache topology", r.CACHE_ANALYTICS = "load cache analytics data", r.CHANGED_ZONE_SETTINGS = "change zone setting", r
			}({})
		},
		"../react/pages/d1/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/dns/dns-records/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/email/types.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
			let e = function(l) {
				return l.ROOT = "root", l.DSTADDRS_CARD = "dstaddrs_card", l.RULES_CARD = "rules_card", l.CATCHALL_CARD = "catchall_card", l.SETTINGS_PAGE = "settings_page", l.WORKERS_PAGE = "workers_page", l
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
			let a = function(l) {
				return l[l.Verified = 0] = "Verified", l[l.Pending = 1] = "Pending", l[l.Missing = 2] = "Missing", l[l.WorkerNotFound = 3] = "WorkerNotFound", l[l.Unknown = 4] = "Unknown", l[l.Loading = 5] = "Loading", l
			}({});
			const u = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				_: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const a = r._.createAlertWithSelection,
				u = r._.editAlert,
				l = (0, e.BC)`${a}/subtype`,
				f = (0, e.BC)`${a}/stepper`,
				s = (0, e.BC)`${f}/${"stepName"}`,
				p = (0, e.BC)`${f}/details`,
				v = (0, e.BC)`${f}/data-centers`,
				n = (0, e.BC)`${f}/ramps`,
				c = (0, e.BC)`${f}/threshold`,
				i = (0, e.BC)`${f}/review`,
				g = (0, e.BC)`${f}/confirm`,
				o = (0, e.BC)`${u}/stepper`,
				m = (0, e.BC)`${o}/${"stepName"}`,
				I = (0, e.BC)`${o}/details`,
				P = (0, e.BC)`${o}/data-centers`,
				b = (0, e.BC)`${o}/ramps`,
				_ = (0, e.BC)`${o}/threshold`,
				T = (0, e.BC)`${o}/review`,
				E = (0, e.BC)`${o}/confirm`,
				C = {
					magicTunnelHealthChooseSubType: l,
					magicTunnelHealthCreateStepperBase: f,
					magicTunnelHealthCreateStepper: s,
					magicTunnelHealthCreateDetails: p,
					magicTunnelHealthCreateSelectDataCenter: v,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: c,
					magicTunnelHealthCreateReview: i,
					magicTunnelHealthCreateConfirm: g,
					magicTunnelHealthEditStepperBase: o,
					magicTunnelHealthEditStepper: m,
					magicTunnelHealthEditDetails: I,
					magicTunnelHealthEditSelectDataCenter: P,
					magicTunnelHealthEditSelectRamps: b,
					magicTunnelHealthEditSetThreshold: _,
					magicTunnelHealthEditReview: T,
					magicTunnelHealthEditConfirm: E
				};
			h.Z = C
		},
		"../react/pages/home/alerts/config.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				jk: function() {
					return i
				},
				w8: function() {
					return g
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				a = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				u = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				l = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function f(o) {
				for (var m = 1; m < arguments.length; m++) {
					var I = arguments[m] != null ? Object(arguments[m]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(b) {
						return Object.getOwnPropertyDescriptor(I, b).enumerable
					})), P.forEach(function(b) {
						s(o, b, I[b])
					})
				}
				return o
			}

			function s(o, m, I) {
				return m = p(m), m in o ? Object.defineProperty(o, m, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[m] = I, o
			}

			function p(o) {
				var m = v(o, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function v(o, m) {
				if (typeof o != "object" || o === null) return o;
				var I = o[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(o, m || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(o)
			}
			const n = "Notifications",
				c = "notification",
				i = f({}, e._, r._j, a._j, u._),
				g = f({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, l.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				_j: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				a = (0, e.BC)`${r}/pagerduty/connect`,
				u = (0, e.BC)`${r}/pagerduty/register`,
				l = (0, e.BC)`${r}/pagerduty`,
				f = {
					pagerDutyConnect: a,
					pagerDutyRegister: u,
					pagerDutyList: l
				};
			var s = null
		},
		"../react/pages/home/alerts/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				_: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/notifications`,
				u = (0, e.BC)`${a}/destinations`,
				l = (0, e.BC)`${a}/create`,
				f = (0, e.BC)`${l}/${"alertType"}`,
				s = (0, e.BC)`${a}/edit/${"alertId"}`,
				p = {
					account: r,
					alerts: a,
					destinations: u,
					createAlert: l,
					createAlertWithSelection: f,
					editAlert: s
				};
			h.Z = p
		},
		"../react/pages/home/alerts/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", r
			}({})
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.PEER_DNS_CREATE = "create peer server", r.PEER_DNS_UPDATE = "update peer server", r.PEER_DNS_DELETE = "delete peer server", r.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", r.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", r.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", r
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_LIST = "create list", r.DELETE_LIST = "delete list", r.ADD_LIST_ITEM = "add list item", r.DELETE_LIST_ITEM = "delete list item", r
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				AA: function() {
					return B
				},
				AN: function() {
					return tt
				},
				AY: function() {
					return fe
				},
				Ac: function() {
					return _t
				},
				Am: function() {
					return P
				},
				B2: function() {
					return j
				},
				BB: function() {
					return k
				},
				BF: function() {
					return Ae
				},
				BQ: function() {
					return Ue
				},
				E8: function() {
					return U
				},
				Fl: function() {
					return Se
				},
				Fu: function() {
					return D
				},
				Gc: function() {
					return et
				},
				Hc: function() {
					return It
				},
				IO: function() {
					return ct
				},
				JK: function() {
					return Qe
				},
				K: function() {
					return C
				},
				LI: function() {
					return Lt
				},
				LX: function() {
					return ye
				},
				L_: function() {
					return Pe
				},
				Ly: function() {
					return Ve
				},
				MR: function() {
					return O
				},
				Mj: function() {
					return ee
				},
				NB: function() {
					return kt
				},
				Oe: function() {
					return Ft
				},
				Or: function() {
					return ne
				},
				P5: function() {
					return Tt
				},
				PE: function() {
					return Te
				},
				Pd: function() {
					return wt
				},
				Pk: function() {
					return Ee
				},
				Pp: function() {
					return Re
				},
				Q1: function() {
					return y
				},
				Qr: function() {
					return je
				},
				Qv: function() {
					return Le
				},
				Rp: function() {
					return St
				},
				S7: function() {
					return mt
				},
				Sh: function() {
					return Be
				},
				Sl: function() {
					return Nt
				},
				TZ: function() {
					return G
				},
				Tg: function() {
					return Xe
				},
				Tp: function() {
					return gt
				},
				Uy: function() {
					return Ot
				},
				Vw: function() {
					return x
				},
				W3: function() {
					return st
				},
				WR: function() {
					return Ke
				},
				WX: function() {
					return pe
				},
				XF: function() {
					return lt
				},
				Xb: function() {
					return V
				},
				Zs: function() {
					return ve
				},
				_f: function() {
					return he
				},
				b4: function() {
					return le
				},
				bc: function() {
					return ae
				},
				c2: function() {
					return A
				},
				cE: function() {
					return Ct
				},
				dh: function() {
					return Ye
				},
				fE: function() {
					return $e
				},
				g7: function() {
					return be
				},
				hO: function() {
					return qe
				},
				hV: function() {
					return Mt
				},
				hk: function() {
					return b
				},
				hr: function() {
					return te
				},
				it: function() {
					return pt
				},
				j3: function() {
					return Rt
				},
				jN: function() {
					return Me
				},
				jo: function() {
					return yt
				},
				k3: function() {
					return Et
				},
				m8: function() {
					return K
				},
				nm: function() {
					return nt
				},
				oW: function() {
					return se
				},
				pH: function() {
					return Q
				},
				pi: function() {
					return ce
				},
				r4: function() {
					return Pt
				},
				rI: function() {
					return F
				},
				s7: function() {
					return at
				},
				sg: function() {
					return it
				},
				tB: function() {
					return m
				},
				tN: function() {
					return _e
				},
				u_: function() {
					return xt
				},
				vV: function() {
					return Ne
				},
				vc: function() {
					return De
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				a = t("../../../../node_modules/moment/moment.js"),
				u = t.n(a),
				l = t("../../../common/util/types/src/api/domain.ts"),
				f = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				s = t("../react/utils/url.ts"),
				p = t("../react/pages/home/domain-registration/config.ts"),
				v = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function c(d) {
				for (var w = 1; w < arguments.length; w++) {
					var H = arguments[w] != null ? Object(arguments[w]) : {},
						ie = Object.keys(H);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(H).filter(function(we) {
						return Object.getOwnPropertyDescriptor(H, we).enumerable
					})), ie.forEach(function(we) {
						i(d, we, H[we])
					})
				}
				return d
			}

			function i(d, w, H) {
				return w = g(w), w in d ? Object.defineProperty(d, w, {
					value: H,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[w] = H, d
			}

			function g(d) {
				var w = o(d, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function o(d, w) {
				if (typeof d != "object" || d === null) return d;
				var H = d[Symbol.toPrimitive];
				if (H !== void 0) {
					var ie = H.call(d, w || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(d)
			}

			function m(d) {
				return d.filter(w => w.isSelected).reduce((w, {
					name: H,
					fees: ie,
					isZoneEntitlementPresent: we
				}) => we || !(0, e.isNumber)(ie == null ? void 0 : ie.transfer_fee) ? w : _t(H) ? w + (ie == null ? void 0 : ie.transfer_fee) * 2 : w + (ie == null ? void 0 : ie.transfer_fee), 0)
			}

			function I(d) {
				return d.filter(w => w.registrar.toLowerCase() === "godaddy")
			}
			const P = "MMM D, YYYY";

			function b(d, w, H, ie) {
				var we, xe, Ge, We, Ze, rt, ut, Je, ze, Bt, jt, Ut;
				const He = d[w.name],
					Zt = () => _t(w.name) ? u()(w.expires_at).add(2, "years").format(P) : u()(w.expires_at).add(1, "year").format(P);
				return c({
					name: w == null ? void 0 : w.name,
					zone: He,
					entitlements: H,
					registryCheck: ie,
					nameservers: w.name_servers,
					isAvailable: w.available,
					lastKnownStatus: w.last_known_status,
					authCode: w.auth_code,
					isEnterpriseZone: (He == null || (we = He.plan) === null || we === void 0 ? void 0 : we.legacy_id) === "enterprise",
					isActiveZone: (He == null ? void 0 : He.status) === "active",
					corResponsesPending: w.cor_responses_pending,
					isCorLocked: w.cor_locked,
					corLockedUntil: w.cor_locked_until ? u()(w.cor_locked_until).format(P) : null,
					isFullZone: (He == null ? void 0 : He.type) == n.xd.Full,
					isLocked: w.locked,
					registrar: w.current_registrar || p.JM,
					zoneId: He == null ? void 0 : He.id,
					currentExpiration: u()(w.expires_at).format(P),
					newExpiration: Zt(),
					lastEntitledAt: w.last_entitled_at ? new Date(w.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(H) && !!H.find(Wt => Wt.id === p.g5 && Wt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: w.transfer_in && E(w.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: w.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: w.transfer_in,
					transferOut: w.transfer_out,
					autoRenew: w.auto_renew === !0,
					lastTransferredAt: w.last_transferred_at,
					createdAt: w.created_at,
					paymentExpiresAt: u()(w.payment_expires_at).isValid() ? u()(w.payment_expires_at) : u()(w.expires_at).isValid() ? u()(w.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (xe = w.contacts) === null || xe === void 0 || (Ge = xe.administrator) === null || Ge === void 0 ? void 0 : Ge.id,
						[n.l2.Billing]: (We = w.contacts) === null || We === void 0 || (Ze = We.billing) === null || Ze === void 0 ? void 0 : Ze.id,
						[n.l2.Registrant]: (rt = w.contacts) === null || rt === void 0 || (ut = rt.registrant) === null || ut === void 0 ? void 0 : ut.id,
						[n.l2.Technical]: (Je = w.contacts) === null || Je === void 0 || (ze = Je.technical) === null || ze === void 0 ? void 0 : ze.id
					},
					landing: w.landing,
					privacy: w.privacy,
					whois: w.whois,
					emailVerified: w.email_verified,
					materialChanges: L(w.material_changes),
					corChanges: w.cor_changes ? k(Object.assign(c({}, T), w.cor_changes)) : {},
					registryStatuses: w.registry_statuses ? w.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Bt = w.domain_protection_services) === null || Bt === void 0 ? void 0 : Bt.status
					},
					deletion: {
						isDeletable: w == null || (jt = w.deletion) === null || jt === void 0 ? void 0 : jt.is_deletable
					},
					premiumType: w == null ? void 0 : w.premium_type,
					fees: w == null ? void 0 : w.fees
				}, w.domain_move && {
					domainMove: {
						ineligibilityReasons: (Ut = w.domain_move) === null || Ut === void 0 ? void 0 : Ut.ineligibility_reasons
					}
				}, w.actionable_metadata && {
					actionableMetadata: _(w.actionable_metadata)
				}, w.policies && {
					policies: c({}, w.policies.suspension && {
						suspension: {
							parked: w.policies.suspension.parked,
							parkingReason: w.policies.suspension.parking_reason,
							paymentExpired: w.policies.suspension.payment_expired
						}
					})
				})
			}

			function _(d) {
				return d.map(w => ({
					accountContext: w.account_context,
					createdAt: w.created_at,
					expiresAt: w.expires_at,
					sentAt: w.sent_at,
					status: w.status,
					type: w.type
				}))
			}
			const T = {
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

			function E(d) {
				switch (d.enter_auth_code) {
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

			function C(d) {
				let w = d.extensions;
				(w == null ? void 0 : w.application_purpose) && (w == null ? void 0 : w.nexus_category) && (d.extensions = {
					nexusCategory: w.nexus_category,
					applicationPurpose: w.application_purpose
				});
				let H = c({}, typeof d.id == "string" ? {
					id: d.id
				} : {}, {
					first_name: d.firstName,
					organization: d.organization,
					address: d.address1,
					city: d.city,
					state: d.state || "N/A",
					zip: d.zip,
					country: d.country,
					phone: d.phone,
					email: d.email,
					fax: "",
					last_name: d.lastName,
					address2: d.address2,
					email_verified: d.emailVerified
				}, d.extensions ? {
					extensions: {
						nexus_category: d.extensions.nexusCategory,
						application_purpose: d.extensions.applicationPurpose
					}
				} : {});
				return Y(H)
			}

			function L(d) {
				let w = [];
				const H = {
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
				for (const ie in d) {
					const we = d[ie],
						xe = H[we];
					w.push(xe)
				}
				return w
			}
			const S = d => {
				if (!d) return null;
				let w = d;
				return d.includes("C31") && (w = "C31"), d.includes("C32") && (w = "C32"), w
			};

			function k(d) {
				return c({}, typeof d.id == "string" ? {
					id: d.id
				} : {}, {
					firstName: d.first_name,
					organization: d.organization,
					address1: d.address,
					city: d.city,
					state: d.state,
					zip: d.zip,
					country: d.country,
					phone: d.phone.trim(),
					email: d.email.trim(),
					lastName: d.last_name,
					address2: d.address2,
					emailVerified: d.email_verified
				}, d.extensions ? {
					extensions: {
						nexusCategory: S(d.extensions.nexus_category),
						applicationPurpose: d.extensions.application_purpose
					}
				} : {})
			}

			function M(d = {}) {
				const w = {
					name: "",
					zoneId: "",
					zone: c({
						id: "",
						name: "",
						status: "pending",
						plan: c({
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
						}, d.zone && d.zone.plan || {}),
						type: EZoneType.Full
					}, d.zone || {}),
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
					transferConditions: c({
						eligible: !0,
						exists: !0,
						not_premium: !0,
						not_secure: !0,
						not_started: !0,
						not_waiting: !0,
						supported_tld: !0
					}, d.transferConditions || {}),
					transferIn: c({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, d.transferIn || {}),
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
				return Object.assign(w, d)
			}

			function y(d = {}) {
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
				}, d)
			}

			function D(d) {
				const w = p.Py.concat(p.ui).reduce((H, ie) => c({}, H, {
					[ie]: []
				}), {});
				return d.forEach(H => {
					let ie = N(H.registrar);
					ie in w || (ie = p.ui), it(H.name) && (ie = "uk"), w[ie].push(H)
				}), Object.keys(w).sort((H, ie) => H.localeCompare(ie)).map(H => ({
					registrar: H,
					domains: w[H]
				})).filter(H => H.domains.length > 0)
			}

			function N(d) {
				return d == null ? void 0 : d.toLowerCase().replace(/\s|,|\./g, "")
			}

			function x(d) {
				if (!d || !d.registrar) return "unknown";
				if (it(d.name)) return "uk";
				const w = N(d.registrar);
				return w in p.gM ? w : "unknown"
			}
			const Z = [];

			function re(d) {
				return Z.some(w => d.endsWith("." + w))
			}

			function ge(d) {
				return !d.isEnterpriseZone || !Array.isArray(d.entitlements) ? !1 : !!d.entitlements.find(({
					id: w,
					allocation: H
				}) => w === p.g5 && H.value === !0)
			}

			function ce(d) {
				var w;
				const H = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let ie = !1,
					we = null;
				return (w = d.registryStatuses) === null || w === void 0 || w.some(xe => {
					H.includes(xe) && (we = xe, ie = !0)
				}), [ie, we]
			}

			function K(d, w = !1) {
				if (!d) return [!1, v.keys.cannot_transfer_default];
				if (d.zone.status !== "active") return [!1, v.keys.cannot_transfer_zone_not_active];
				if (!d.isFullZone && !ge(d)) return [!1, v.keys.cannot_transfer_zone_not_eligible];
				if (d.registrar === "Cloudflare") return [!1, v.keys.cannot_transfer_domain_on_cf];
				if (d.isAvailable) return [!1, v.keys.cannot_transfer_domain_available];
				if (!d.transferConditions) return [!1, v.keys.cannot_transfer_domain_transfer_conditions];
				if (!w && Ot(d == null ? void 0 : d.premiumType)) return [!1, v.keys.cannot_transfer_domain_premium];
				if (Q(d)) return [!1, v.keys.cannot_transfer_domain_transfer_in_progress];
				let H;
				for (H in d.transferConditions)
					if (H !== "not_premium" && !d.transferConditions[H]) return [!1, v.keys.cannot_transfer_domain_transfer_conditions];
				if (re(d.name)) return [!1, v.keys.cannot_transfer_domain_tld_not_supported];
				const [ie, we] = ce(d);
				return ie && we ? [!1, v.keys.cannot_transfer_domain_registry_status[we]] : [!0, ""]
			}

			function Q(d) {
				var w, H;
				return !!d.transferIn && !((w = d.transferConditions) === null || w === void 0 ? void 0 : w.not_started) && !!(it(d.name) || ((H = d.registryStatuses) === null || H === void 0 ? void 0 : H.includes(n.rj.PENDING_TRANSFER)))
			}

			function W(d) {
				return !!d.registrar && !!d.currentExpiration
			}

			function j(d, w = !1) {
				const [H] = K(d, w);
				return W(d) ? ue(d) ? n.M5.InProgressOrOnCF : H ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function A(d) {
				return d.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(d.transferIn.enter_auth_code) || !1
			}

			function O(d) {
				return d.registrar === "Cloudflare"
			}

			function F(d) {
				return !!(d == null ? void 0 : d.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function ee(d) {
				return !!(d == null ? void 0 : d.includes(n.rj.PENDING_TRANSFER))
			}
			const J = "Invalid date";

			function ne(d) {
				return d.newExpiration === J ? "Unavailable" : d.newExpiration
			}

			function G(d) {
				return d.currentExpiration === J ? "Unavailable" : d.currentExpiration
			}

			function B(d) {
				return d.substring(d.indexOf("."))
			}

			function V(d = "") {
				return d.indexOf(".") !== -1 ? d.substring(0, d.indexOf(".")) : d
			}

			function te(d) {
				return d.map(w => w.name).map(w => B(w)).filter((w, H, ie) => !ie.includes(w, H + 1))
			}

			function le(d) {
				if (p.no) return [!0, ""];
				if (!O(d)) return [!1, n.ok.NotOnCF];
				if (d.isCorLocked) return [!1, d.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (d.lastTransferredAt) {
					const w = u()(d.lastTransferredAt),
						H = u().duration(u()().diff(w)).as("days"),
						ie = it(d.name);
					if (H < (ie ? 1 : 60)) return [!1, ie ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (d.createdAt) {
					const w = u()(d.createdAt);
					if (u().duration(u()().diff(w)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function pe(d) {
				return !!(p.Bc || d.transferOut)
			}

			function ue(d) {
				return be(d) || O(d)
			}

			function _e(d) {
				return !be(d) && O(d)
			}

			function be(d) {
				return !d || d.lastKnownStatus === n.kd.PENDING_TRANSFER || d.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !O(d) && d.transferConditions && !d.transferConditions.not_started || !1
			}

			function Te(d) {
				return !(re(d.name) || d.transferConditions && !d.transferConditions.supported_tld)
			}

			function Le(d) {
				return (d == null ? void 0 : d.includes("/")) ? !0 : d.split("").some(w => w.charCodeAt(0) > 123)
			}

			function Ee(d) {
				switch (d) {
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

			function De(d) {
				return u()(d.paymentExpiresAt).isBefore(u()())
			}

			function Me(d) {
				return d.transferIn && d.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function Qe(d) {
				const w = ["CU", "KP", "IR", "SY"];
				return d.filter(H => !w.includes(H.code))
			}

			function Xe(d) {
				if (!!d) return `${d.charAt(0).toUpperCase()}${d.slice(1)}${d.charAt(d.length-1)==="."?"":"."}`
			}

			function Y(d) {
				const w = {};
				for (const [H, ie] of Object.entries(d)) {
					if (ie && typeof ie == "string") {
						Object.assign(w, {
							[H]: ie.trim()
						});
						continue
					}
					Object.assign(w, {
						[H]: ie
					})
				}
				return w
			}

			function ve(d) {
				return u()(d).add(40, "days")
			}

			function Pe(d) {
				const w = d.paymentExpiresAt || d.payment_expires_at,
					H = ve(w);
				return u()().isBetween(w, H)
			}

			function $e(d) {
				var w;
				return !(d == null ? void 0 : d.registryStatuses) || !Array.isArray(d == null ? void 0 : d.registryStatuses) && !(0, e.isString)(d == null ? void 0 : d.registryStatuses) ? !1 : (w = d.registryStatuses) === null || w === void 0 ? void 0 : w.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Ye(d) {
				var w;
				return !(d == null ? void 0 : d.registryStatuses) || !Array.isArray(d == null ? void 0 : d.registryStatuses) && !(0, e.isString)(d == null ? void 0 : d.registryStatuses) ? !1 : (w = d.registryStatuses) === null || w === void 0 ? void 0 : w.includes(n.rj.PENDING_DELETE)
			}

			function Re(d) {
				return [".us"].includes(d)
			}

			function pt(d) {
				return [".us"].includes(d)
			}

			function qe(d) {
				switch (d) {
					case ".us":
						return de();
					default:
						return []
				}
			}

			function st(d) {
				switch (d) {
					case ".us":
						return X;
					default:
						return {}
				}
			}
			const X = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function de() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([d, w]) => ({
						value: d,
						label: w
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([d, w]) => ({
						value: d,
						label: w
					}))
				}]
			}

			function ye(d, w, H) {
				return w[w.length - 1][H] === d[H]
			}

			function je(d) {
				return Boolean(Object.keys(d).length === 0)
			}

			function Ae(d) {
				return u()().add(d, "year").format(P)
			}

			function he({
				accountName: d
			}) {
				var w;
				const H = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((w = d.toLowerCase().match(H)) === null || w === void 0 ? void 0 : w[0]) || ""
			}

			function Ne(d) {
				return !!d.match(f.default.email)
			}

			function gt(d) {
				return d === l.W7.PENDING_UPDATE
			}

			function et(d) {
				return d ? Object.values(l.wR).filter(w => w !== l.wR.OFFBOARDED).includes(d) : !1
			}

			function at(d) {
				return d ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(d) : !1
			}

			function ft(d) {
				return d ? l.wR.UNLOCKED === d : !1
			}

			function vt(d) {
				return d ? l.wR.LOCKED === d : !1
			}

			function Lt(d) {
				return d ? l.wR.PENDING_REGISTRY_LOCK === d : !1
			}

			function Ue(d) {
				return d ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(d) : !1
			}

			function ct(d) {
				var w;
				return !1
			}

			function Ke(d) {
				var w;
				return !1
			}

			function tt(d) {
				var w;
				return !1
			}

			function lt(d) {
				var w;
				return !1
			}

			function U(d) {
				var w;
				return !1
			}

			function se(d) {
				return Object.keys(l.wR).find(w => l.wR[w].toLowerCase() === d.toLowerCase())
			}

			function fe(d) {
				var w;
				const H = (w = se(d)) === null || w === void 0 ? void 0 : w.toLowerCase();
				return H ? v.keys.protection_status[H] : v.keys.protection_status.unknown
			}

			function Ce(d) {
				return ["com", "net"].includes(d)
			}

			function Se(d) {
				const w = (0, s.pu)(d);
				return Ce(w) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function Be(d) {
				return (0, s.pu)(d) === "co" ? 5 : 10
			}

			function nt(d, w) {
				return w ? 1 : (0, s.pu)(d) === "co" ? 5 : (0, s.pu)(d) === "org" ? 1 : 10
			}

			function it(d) {
				return (0, s.pu)(d) === "uk"
			}

			function Ct(d) {
				return (0, s.pu)(d) === "us"
			}

			function _t(d) {
				return (0, s.pu)(d) === "ai"
			}

			function St(d) {
				return u()(d).isValid()
			}

			function Ve(d) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(d)
			}

			function Tt(d) {
				return !!(d == null ? void 0 : d.id)
			}

			function kt(d) {
				return d ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(d) : !1
			}

			function wt(d) {
				return d ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(d) : !1
			}

			function Mt(d) {
				var w;
				return (d == null ? void 0 : d.lastKnownStatus) ? (w = d.lastKnownStatus) === null || w === void 0 ? void 0 : w.includes("deletionIrredeemable") : !1
			}

			function Ot(d) {
				switch (d) {
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

			function It(d) {
				if (!d || !d.message) return n.OJ.DEFAULT;
				const {
					message: w
				} = d;
				switch (!0) {
					case w.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case w.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case w.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function mt(d) {
				var w, H;
				return !!(((w = d.policies) === null || w === void 0 || (H = w.suspension) === null || H === void 0 ? void 0 : H.parked) && d.policies.suspension.parkingReason)
			}

			function Rt(d) {
				var w, H;
				return mt(d) && ((w = d.policies) === null || w === void 0 || (H = w.suspension) === null || H === void 0 ? void 0 : H.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function Et(d) {
				var w, H;
				return mt(d) && ((w = d.policies) === null || w === void 0 || (H = w.suspension) === null || H === void 0 ? void 0 : H.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function Nt(d) {
				var w;
				return !((w = d.domainMove) === null || w === void 0 ? void 0 : w.ineligibilityReasons.length)
			}

			function Ft(d) {
				var w, H;
				return !!((w = d.domainMove) === null || w === void 0 || (H = w.ineligibilityReasons) === null || H === void 0 ? void 0 : H.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function At(d) {
				var w;
				return (w = d.actionableMetadata) === null || w === void 0 ? void 0 : w.find(H => H.type === n.wg.DOMAIN_MOVE)
			}

			function yt(d) {
				const w = At(d);
				return (w == null ? void 0 : w.status) === "pending" && w.accountContext === n._5.GAINING
			}

			function xt(d) {
				const w = At(d);
				return (w == null ? void 0 : w.status) === "pending" && w.accountContext === n._5.LOSING
			}

			function Pt(d) {
				const w = B(d.name);
				return !p.Pf.includes(w)
			}

			function ae(d) {
				return p.QZ.includes(d)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Bc: function() {
					return p
				},
				HG: function() {
					return be
				},
				Hv: function() {
					return Te
				},
				JM: function() {
					return a
				},
				Pf: function() {
					return g
				},
				Py: function() {
					return f
				},
				QZ: function() {
					return o
				},
				WK: function() {
					return n
				},
				g5: function() {
					return c
				},
				gM: function() {
					return l
				},
				jk: function() {
					return _e
				},
				no: function() {
					return v
				},
				uY: function() {
					return s
				},
				ui: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
			const a = "Unknown",
				u = "unknown",
				l = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				f = Object.keys(l),
				s = !0,
				p = (0, r.J8)("registrar_mock_transfer_out") || !1,
				v = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				c = "cf_registrar.enabled",
				i = "@abcABC1234567890123456",
				g = [".us"],
				o = [".travel", ".us", ".ong", ".ngo"],
				m = (0, e.BC)`/${"accountId"}`,
				I = (0, e.BC)`${m}/add-site`,
				P = (0, e.BC)`${m}/registrar`,
				b = (0, e.BC)`${P}/domains`,
				_ = (0, e.BC)`${P}/action-center`,
				T = (0, e.BC)`${P}/domain/${"zoneName"}`,
				E = (0, e.BC)`${T}/configuration`,
				C = (0, e.BC)`${T}/contacts`,
				L = (0, e.BC)`${P}/pricing`,
				S = (0, e.BC)`${P}/protection`,
				k = (0, e.BC)`${P}/register`,
				M = (0, e.BC)`${k}/checkout`,
				y = (0, e.BC)`${k}/checkout/${"token"}`,
				D = (0, e.BC)`${k}/success`,
				N = (0, e.BC)`${P}/tlds`,
				x = (0, e.BC)`${P}/transfer`,
				Z = (0, e.BC)`${P}/transfer/${"zoneName"}`,
				re = (0, e.BC)`/registrar/accounts/verify_email`,
				ge = (0, e.BC)`/registrar/domains/verify_email`,
				ce = (0, e.BC)`/sign-up/registrar`,
				K = (0, e.BC)`${P}/verify-email`,
				Q = (0, e.BC)`${m}/${"zoneName"}`,
				W = (0, e.BC)`${m}/domains`,
				j = (0, e.BC)`${W}/action-center`,
				A = (0, e.BC)`${W}/${"zoneName"}`,
				O = (0, e.BC)`${A}/configuration`,
				F = (0, e.BC)`${A}/contacts`,
				ee = (0, e.BC)`${W}/pricing`,
				J = (0, e.BC)`${W}/protection`,
				ne = (0, e.BC)`${W}/register`,
				G = (0, e.BC)`${ne}/checkout`,
				B = (0, e.BC)`${ne}/checkout/${"token"}`,
				V = (0, e.BC)`${ne}/success`,
				te = (0, e.BC)`${W}/tlds`,
				le = (0, e.BC)`${W}/transfer`,
				pe = (0, e.BC)`${W}/transfer/${"zoneName"}`,
				ue = (0, e.BC)`${W}/verify-email`,
				_e = {
					addSite: I,
					domains: b,
					domainsActionCenter: _,
					domainsDomain: T,
					domainsDomainConfiguration: E,
					domainsDomainContacts: C,
					domainsPricing: L,
					domainsProtection: S,
					domainsRegister: k,
					domainsRegisterCheckout: M,
					domainsRegisterCheckoutToken: y,
					domainsRegisterSuccess: D,
					domainsTlds: N,
					domainsTransfer: x,
					domainsTransferZone: Z,
					registrar: P,
					registrarAccountsVerifyEmail: re,
					registrarDomainsVerifyEmail: ge,
					signup: ce,
					verifyEmail: K,
					zone: Q
				},
				be = {
					LEGACY_domains: W,
					LEGACY_domainsActionCenter: j,
					LEGACY_domainsDomain: A,
					LEGACY_domainsDomainConfiguration: O,
					LEGACY_domainsDomainContacts: F,
					LEGACY_domainsPricing: ee,
					LEGACY_domainsProtection: J,
					LEGACY_domainsRegister: ne,
					LEGACY_domainsRegisterCheckout: G,
					LEGACY_domainsRegisterCheckoutToken: B,
					LEGACY_domainsRegisterSuccess: V,
					LEGACY_domainsTlds: te,
					LEGACY_domainsTransfer: le,
					LEGACY_domainsTransferZone: pe,
					LEGACY_verifyEmail: ue
				},
				Te = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				HO: function() {
					return s
				},
				NW: function() {
					return p
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
			const a = v => {
					const n = v && v.accountFlags && v.accountFlags.data && v.accountFlags.data.registrar && v.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(c => c.trim()) : []
				},
				u = v => {
					var n, c, i;
					return ((n = v.accountFlags) === null || n === void 0 || (c = n.data) === null || c === void 0 || (i = c.registrar) === null || i === void 0 ? void 0 : i["registrar-managed"]) || !1
				},
				l = v => v.account ? v.account.email : "",
				f = v => !1,
				s = v => f(v) && (0, e.oJ)((0, e.Zu)(v)),
				p = v => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: c
					} = v.registrar.registrations;
					return n && !(c.accepted_date || c.id || c.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				J: function() {
					return c
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				u = t.n(a),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function f(i) {
				for (var g = 1; g < arguments.length; g++) {
					var o = arguments[g] != null ? Object(arguments[g]) : {},
						m = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(o).filter(function(I) {
						return Object.getOwnPropertyDescriptor(o, I).enumerable
					})), m.forEach(function(I) {
						s(i, I, o[I])
					})
				}
				return i
			}

			function s(i, g, o) {
				return g = p(g), g in i ? Object.defineProperty(i, g, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = o, i
			}

			function p(i) {
				var g = v(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function v(i, g) {
				if (typeof i != "object" || i === null) return i;
				var o = i[Symbol.toPrimitive];
				if (o !== void 0) {
					var m = o.call(i, g || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i
			}({});

			function c(i, g, o) {
				if (!(g == null ? void 0 : g.name)) return null;
				u().sendEvent(i, f({
					domain: {
						name: g.name,
						premium: (0, l.Uy)(g == null ? void 0 : g.premiumType),
						paymentExpiresAt: r()(g == null ? void 0 : g.paymentExpiresAt).format()
					},
					category: "registrar"
				}, o))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				HX: function() {
					return s
				},
				Re: function() {
					return b
				},
				Rh: function() {
					return m
				},
				hX: function() {
					return g
				},
				s_: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				l = t("../react/pages/home/members/utils.ts"),
				f = t("../react/utils/translator.tsx");
			let s = function(_) {
				return _.UNKNOWN = "unknown", _.WORKERS = "workers", _.ACCESS_APPS = "access_apps", _.ACCESS_IDP = "access_ipd", _
			}({});
			const p = [{
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

			function v(_) {
				return {
					key: "com.cloudflare.edge.worker.script." + _.id,
					name: _.name + (_.environment ? ` (${_.environment})` : ""),
					type: s.WORKERS
				}
			}

			function n(_) {
				const T = _;
				return {
					key: "com.cloudflare.edge.access.app." + T.id,
					name: T.name,
					type: s.ACCESS_APPS
				}
			}
			const c = {
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

			function i(_) {
				const T = _,
					E = c[T.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + T.id,
					name: `${E||"Unknown Type"}${T.name?" - "+T.name:""}`,
					type: s.ACCESS_IDP
				}
			}
			const g = async (_, T, E) => T == s.WORKERS ? (await o(`/accounts/${_}/workers/scripts-search?name=${E}&perPage=10`)).body.result.map(C => ({
				id: C.id,
				name: C.service_name || C.script_name,
				environment: C.environment_name
			})).map(v) : T == s.ACCESS_APPS ? (await o(`/accounts/${_}/access/apps?name=${E}`)).body.result.map(n) : T == s.ACCESS_IDP ? (await o(`/accounts/${_}/access/identity_providers`)).body.result.map(i) : [];
			async function o(_) {
				try {
					return await (0, e.get)(_, {
						hideErrorAlert: !0
					})
				} catch (C) {
					var T, E;
					throw ((T = C.body) === null || T === void 0 ? void 0 : T.errors) ? C.body.errors[0].message : C.text ? C.text : ((E = C.response) === null || E === void 0 ? void 0 : E.statusText) ? C.response.statusText : "Unexpected error response"
				}
			}
			const m = async (_, T) => {
				const E = T.split("."),
					C = E.pop(),
					L = E.join(".");
				let S;
				switch (L) {
					case "com.cloudflare.edge.worker.script":
						const k = (await o(`/accounts/${_}/workers/scripts-search/${C}`)).body.result;
						return v({
							id: k.id,
							name: k.service_name || k.script_name,
							environment: k.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return S = await o(`/accounts/${_}/access/identity_providers/${C}`), i(S.body.result);
					case "com.cloudflare.edge.access.app":
						return S = await o(`/accounts/${_}/access/apps/${C}`), n(S.body.result)
				}
			}, I = {
				loading: !0,
				isDisabled: !0
			}, P = () => "production";

			function b(_) {
				const T = (0, l.vq)(_),
					[E, C] = (0, a.useState)(!0),
					[L, S] = (0, a.useState)(p.filter(k => T.find(M => M.meta.scopes === k.scopeKeyPrefix)).map(k => {
						const M = k.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							y = T.filter(D => D.meta.scopes === k.scopeKeyPrefix).find(D => !D.meta.visibility || D.meta.visibility !== "beta");
						return {
							value: k.value,
							label: (0, f.ZP)(k.label_i18n),
							state: M ? I : {
								loading: !1,
								isDisabled: !1
							},
							beta: !y
						}
					}));
				return (0, a.useEffect)(() => {
					(async () => {
						try {
							await g(_, s.ACCESS_APPS, ""), I.isDisabled = !1
						} catch (k) {
							k.startsWith("access.api.error.not_enabled") ? I.disableInfo = (0, f.ZP)("policy.granular_resources.type.access.not_enabled") : I.error = k
						}
						I.loading = !1, S([...L])
					})()
				}, []), (0, a.useEffect)(() => {
					const k = L.find(M => M.state.loading);
					C(!!k)
				}, [L]), {
					types: L,
					isLoading: E
				}
			}
		},
		"../react/pages/home/members/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Ey: function() {
					return v
				},
				F4: function() {
					return I
				},
				Go: function() {
					return g
				},
				Lc: function() {
					return C
				},
				Np: function() {
					return c
				},
				Rl: function() {
					return i
				},
				Sb: function() {
					return o
				},
				Sw: function() {
					return E
				},
				Sz: function() {
					return T
				},
				Ti: function() {
					return L
				},
				Uw: function() {
					return b
				},
				Zl: function() {
					return P
				},
				jk: function() {
					return _
				},
				r6: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				a = (0, e.BC)`${r}/members`,
				u = (0, e.BC)`${a}/invite`,
				l = (0, e.BC)`${a}/invite/${"memberId"}`,
				f = (0, e.BC)`${a}/add-policy/${"memberId"}`,
				s = (0, e.BC)`${a}/user-groups`,
				p = (0, e.BC)`${a}/user-groups/${"userGroupId"}`,
				v = "com.cloudflare.api.account",
				c = v + "." + "zone",
				i = c + ".",
				g = 100,
				o = 200,
				m = 5,
				I = 300,
				P = "INVITE_TOAST",
				b = "00000000000000000000000000000000",
				_ = {
					account: r,
					members: a,
					groups: s,
					group: p,
					inviteMembers: u,
					editMember: l,
					addPolicy: f
				},
				T = {
					allow: "allow",
					deny: "deny"
				},
				E = {
					all: "all",
					domain_group: "domain_group",
					zone: "zone",
					granular: "granular"
				},
				C = {
					id: "",
					access: !1,
					owner: "",
					permission_groups: [],
					resource_groups: [],
					scopes: []
				},
				L = {
					accountId: "",
					effect: T.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/utils.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				AX: function() {
					return _
				},
				Co: function() {
					return P
				},
				JP: function() {
					return b
				},
				Ld: function() {
					return i
				},
				YW: function() {
					return p
				},
				_k: function() {
					return g
				},
				c$: function() {
					return v
				},
				rC: function() {
					return L
				},
				vq: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				a = t("../react/pages/home/members/constants.ts");

			function u(S) {
				for (var k = 1; k < arguments.length; k++) {
					var M = arguments[k] != null ? Object(arguments[k]) : {},
						y = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && y.push.apply(y, Object.getOwnPropertySymbols(M).filter(function(D) {
						return Object.getOwnPropertyDescriptor(M, D).enumerable
					})), y.forEach(function(D) {
						l(S, D, M[D])
					})
				}
				return S
			}

			function l(S, k, M) {
				return k = f(k), k in S ? Object.defineProperty(S, k, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[k] = M, S
			}

			function f(S) {
				var k = s(S, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function s(S, k) {
				if (typeof S != "object" || S === null) return S;
				var M = S[Symbol.toPrimitive];
				if (M !== void 0) {
					var y = M.call(S, k || "default");
					if (typeof y != "object") return y;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(S)
			}
			const p = () => u({}, a.Ti),
				v = () => u({}, a.Lc, {
					scopes: [p()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = S => S.map(k => ({
					scope: {
						key: k,
						objects: [{
							key: "*"
						}]
					}
				})),
				c = (S, k, M) => {
					var y;
					let D = [],
						N = [];
					const x = [],
						Z = [];
					S.scopes.forEach(ce => {
						if (ce.mode === a.Sw.all) M ? D.push({
							id: M
						}) : D.push({
							scope: {
								key: `com.cloudflare.api.account.${k}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (ce.mode === a.Sw.domain_group) {
							const Q = {
								id: ce.resourceGroupId
							};
							ce.effect === a.Sz.allow ? D.push(Q) : N.push(Q)
						} else if (ce.mode === a.Sw.zone) {
							const Q = `${a.Rl}${ce.zoneId}`;
							ce.effect === a.Sz.allow ? x.push(Q) : Z.push(Q)
						} else if (ce.mode === a.Sw.granular && ce.granularResourceKey) {
							var K;
							const Q = ce.granularProduct,
								j = `${(K=r.s_.find(A=>A.value===Q))===null||K===void 0?void 0:K.scopeSubsetOfPrefix}.${k}`;
							D.push({
								scope: {
									key: `${ce.granularResourceKey}`,
									subset_of: [{
										key: `${j}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), x.length && (D = D.concat(n(x))), Z.length && (N = N.concat(n(Z)));
					const re = (y = S.permission_groups) === null || y === void 0 ? void 0 : y.map(ce => ({
							id: ce
						})),
						ge = [];
					return ge.push({
						access: a.Sz.allow,
						permission_groups: re,
						resource_groups: D
					}), N.length && ge.push({
						access: a.Sz.deny,
						permission_groups: re,
						resource_groups: N
					}), ge
				},
				i = S => S.map(k => {
					var M;
					return {
						access: k.access,
						permission_groups: k.permission_groups.map(y => ({
							id: y.id
						})),
						resource_groups: (M = k.resource_groups) === null || M === void 0 ? void 0 : M.map(y => ({
							scope: {
								key: y.scope.key,
								objects: y.scope.objects
							},
							id: y.id
						}))
					}
				}),
				g = (S, k, M, y) => {
					const D = S.auto_accept;
					let N = [];
					return N = N.concat(c(S, k, M)), y && (N = N.concat(i(y))), {
						auto_accept: D,
						status: D ? "accepted" : "pending",
						policies: N
					}
				},
				o = S => {
					const k = S.split(".");
					return k[k.length - 1]
				},
				m = S => {
					var k, M;
					const y = S == null ? void 0 : S.access;
					let D = [],
						N = S == null || (k = S.resource_groups) === null || k === void 0 ? void 0 : k.map(x => {
							var Z;
							const re = I(x);
							if ((x == null || (Z = x.meta) === null || Z === void 0 ? void 0 : Z.editable) === "false") return {
								effect: y,
								mode: a.Sw.all,
								accountId: o(x.id)
							};
							if (re) {
								var ge;
								return {
									effect: y,
									mode: a.Sw.granular,
									granularProduct: re.value,
									granularResourceKey: x == null || (ge = x.scope) === null || ge === void 0 ? void 0 : ge.key
								}
							} else if (!x.name) x.scope.key.startsWith(a.Rl) ? D.push({
								key: x.scope.key
							}) : D = D.concat(x.scope.objects);
							else return {
								effect: y,
								mode: a.Sw.domain_group,
								resourceGroupId: o(x.id)
							}
						}).filter(x => x);
					if ((M = D) === null || M === void 0 ? void 0 : M.length) {
						let x = D.map(Z => {
							const re = o(Z.key);
							return {
								effect: y,
								mode: a.Sw.zone,
								zoneId: re
							}
						});
						N = N.length ? x.concat(N) : x
					}
					return N
				},
				I = S => {
					var k, M, y, D;
					const N = S == null || (k = S.scope) === null || k === void 0 ? void 0 : k.key.split(".").slice(0, -1).join("."),
						x = S == null || (M = S.scope) === null || M === void 0 || (y = M.subset_of) === null || y === void 0 || (D = y[0]) === null || D === void 0 ? void 0 : D.key.split(".").slice(0, -1).join(".");
					return r.s_.find(Z => Z.scopeKeyPrefix === N && Z.scopeSubsetOfPrefix === x)
				},
				P = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const k = [];
					return S.forEach(M => {
						var y;
						(y = M.resource_groups) === null || y === void 0 || y.forEach(D => {
							var N, x;
							((N = D.scope) === null || N === void 0 || (x = N.key) === null || x === void 0 ? void 0 : x.startsWith(a.Rl)) && k.push(o(D.scope.key))
						})
					}), k
				},
				b = S => {
					if (!(S == null ? void 0 : S.length)) return [];
					const k = [];
					return S.forEach(M => {
						var y;
						(y = M.resource_groups) === null || y === void 0 || y.forEach(D => {
							var N, x;
							if (!((N = D.scope) === null || N === void 0 || (x = N.key) === null || x === void 0 ? void 0 : x.startsWith(a.Rl))) {
								var Z;
								const ge = (Z = D.scope) === null || Z === void 0 ? void 0 : Z.objects;
								for (let ce = 0; ce < (ge == null ? void 0 : ge.length) && ce < a.r6; ce++) {
									var re;
									((re = ge[ce].key) === null || re === void 0 ? void 0 : re.startsWith(a.Rl)) && k.push(o(ge[ce].key))
								}
							}
						})
					}), k
				},
				_ = S => {
					var k;
					if (!(S == null ? void 0 : S.length)) return null;
					const M = (k = S[0]) === null || k === void 0 ? void 0 : k.permission_groups.map(x => x.id);
					let y, D;
					S == null || S.forEach(x => {
						x.access === a.Sz.allow && (y = x), x.access === a.Sz.deny && (D = x)
					});
					let N = [];
					return y && (N = m(y)), D && (N = N.concat(m(D))), {
						permission_groups: M,
						scopes: N
					}
				},
				T = "permission-groups-",
				E = new Map,
				C = S => {
					if (!S) return [];
					const k = E.get(S);
					if (k) return k;
					const M = e.E.get(`${T}${S}`);
					return E.set(S, M), M
				},
				L = (S, k) => {
					const M = [];
					for (let y = 0; y < sessionStorage.length; y++) {
						const D = sessionStorage.key(y);
						(D == null ? void 0 : D.startsWith(T)) && M.push(D)
					}
					return M.length >= 5 && e.E.remove(M[0]), e.E.set(`${T}${S}`, k)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				F: function() {
					return e
				}
			});
			let e = function(r) {
				return r.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", r.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", r.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", r.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", r.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", r.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", r.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", r.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", r.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", r.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", r.GET_SYN_PROTECTION_RULE = "view syn protection rules list", r.GET_SYN_PROTECTION_RULES = "view syn protection rule", r.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", r.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", r.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", r.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", r.GET_SYN_PROTECTION_FILTER = "view syn protection filter", r.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", r.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", r.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", r.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", r.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", r.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", r.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", r.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", r.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", r.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", r.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", r.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", r.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", r.GET_DNS_PROTECTION_RULES = "view dns protection rules list", r.GET_DNS_PROTECTION_RULE = "view dns protection rule", r.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", r.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", r.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", r
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				KO: function() {
					return s
				},
				L9: function() {
					return n
				},
				N3: function() {
					return v
				},
				zE: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(c) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						o = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && o.push.apply(o, Object.getOwnPropertySymbols(g).filter(function(m) {
						return Object.getOwnPropertyDescriptor(g, m).enumerable
					})), o.forEach(function(m) {
						u(c, m, g[m])
					})
				}
				return c
			}

			function u(c, i, g) {
				return i = l(i), i in c ? Object.defineProperty(c, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = g, c
			}

			function l(c) {
				var i = f(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(c, i) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var o = g.call(c, i || "default");
					if (typeof o != "object") return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			let s = function(c) {
					return c.PURCHASE_WORKERS_PAID = "navigate to workers plan page", c.LIST_CONFIGS = "list hyperdrive configs", c.SEARCH_CONFIGS = "search hyperdrive configs", c.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", c.VIEW_CONFIG_DETAILS = "view hyperdrive config details", c.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", c.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", c.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", c.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", c.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", c.CLICK_QUICK_LINK = "click hyperdrive quick link", c.CLICK_DISCORD = "click hyperdrive discord", c.CLICK_COMMUNITY = "click hyperdrive community", c
				}({}),
				p = function(c) {
					return c[c["connection string"] = 0] = "connection string", c[c.manual = 1] = "manual", c
				}({}),
				v = function(c) {
					return c[c.success = 0] = "success", c[c.failure = 1] = "failure", c
				}({});
			const n = (c, i = {}) => {
				r().sendEvent(c, a({}, i, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				KJ: function() {
					return L
				},
				_m: function() {
					return P
				},
				imagesEndpoints: function() {
					return be
				},
				vQ: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(Te) {
				for (var Le = 1; Le < arguments.length; Le++) {
					var Ee = arguments[Le] != null ? Object(arguments[Le]) : {},
						De = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && De.push.apply(De, Object.getOwnPropertySymbols(Ee).filter(function(Me) {
						return Object.getOwnPropertyDescriptor(Ee, Me).enumerable
					})), De.forEach(function(Me) {
						a(Te, Me, Ee[Me])
					})
				}
				return Te
			}

			function a(Te, Le, Ee) {
				return Le = u(Le), Le in Te ? Object.defineProperty(Te, Le, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Te[Le] = Ee, Te
			}

			function u(Te) {
				var Le = l(Te, "string");
				return typeof Le == "symbol" ? Le : String(Le)
			}

			function l(Te, Le) {
				if (typeof Te != "object" || Te === null) return Te;
				var Ee = Te[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var De = Ee.call(Te, Le || "default");
					if (typeof De != "object") return De;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Le === "string" ? String : Number)(Te)
			}
			const f = (0, e.BC)`/${"accountId"}/images`,
				s = (0, e.BC)`${f}/images`,
				p = (0, e.BC)`${f}/variants`,
				v = (0, e.BC)`${f}/keys`,
				n = (0, e.BC)`${f}/bundle-checkout-success`,
				c = (0, e.BC)`${s}/${"imageId"}`,
				i = (0, e.BC)`${s}/detail`,
				g = (0, e.BC)`${s}/edit`,
				o = (0, e.BC)`${p}/create`,
				m = (0, e.BC)`${p}/edit/${"variantId"}`,
				I = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				P = (0, e.BC)`${f}/sourcing-kit`,
				b = (0, e.BC)`${f}/delivery-zones`,
				_ = (0, e.BC)`${b}/${"zoneId"}/settings`,
				T = (0, e.BC)`${f}/plans`,
				E = (0, e.BC)`${f}/manage-plan`,
				C = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				L = {
					root: f,
					images: s,
					variants: p,
					keys: v,
					legacyImageDetailPage: c,
					imageDetailPage: i,
					imageEditPage: g,
					bundleCheckoutSuccess: n,
					variantCreatePage: o,
					variantEditPage: m,
					sourcingKit: P,
					subscriptions: I,
					deliveryZones: b,
					deliveryZoneSettings: _,
					plansPage: T,
					managePlan: E
				},
				S = r({}, L, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: C
				}),
				k = (0, e.BC)`/accounts/${"accountId"}`,
				M = (0, e.BC)`${k}/images/v2`,
				y = (0, e.BC)`/zones/${"zoneId"}`,
				D = (0, e.BC)`${M}/sourcingkit`,
				N = (0, e.BC)`${D}/migrations`,
				x = (0, e.BC)`${D}/migrations/${"migrationId"}`,
				Z = (0, e.BC)`${D}/migrations/${"migrationId"}/logs`,
				re = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/start`,
				ge = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/abort`,
				ce = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle`,
				K = (0, e.BC)`${D}/sources`,
				Q = (0, e.BC)`${D}/sources/${"sourceId"}`,
				W = (0, e.BC)`${D}/sources/${"sourceId"}/connectivity`,
				j = (0, e.BC)`${D}/sources/connectivity_precheck`,
				A = (0, e.BC)`/zones?account.id=${"accountId"}`,
				O = {
					migrationList: N,
					migration: x,
					migrationLogs: Z,
					sourceList: K,
					migrationStart: re,
					migrationAbort: ge,
					migrationProgress: ce,
					source: Q,
					sourceConnectivityCheck: W,
					sourceConnectivityPreCheck: j
				},
				F = (0, e.BC)`/billing/upgrade-subscription`,
				ee = (0, e.BC)`${k}/settings/transformations`,
				J = (0, e.BC)`${y}/settings/transformations`,
				ne = (0, e.BC)`${y}/settings/transformations_allowed_origins`,
				G = (0, e.BC)`${y}/settings/transformations_c2pa`,
				B = (0, e.BC)`${k}/settings/ut-billing`,
				V = (0, e.BC)`${y}`,
				te = (0, e.BC)`${y}/entitlements`,
				le = (0, e.BC)`${y}/settings`,
				pe = (0, e.BC)`${y}/flags`,
				ue = (0, e.BC)`${y}/subscription`,
				be = {
					sourcingKitEndpoints: O,
					deliveryZonesEndpoints: {
						transformationsConfigList: ee,
						transformationsZoneConfig: J,
						allowedOriginsZoneConfig: ne,
						preserveContentCredentialsZoneConfig: G,
						upgradeSubscription: F,
						utBillingConfig: B
					},
					zones: {
						zones: A,
						zoneDetail: V,
						zoneSettings: le,
						zoneEntitlements: te,
						zoneFlags: pe,
						zoneSubscription: ue
					}
				}
		},
		"../react/pages/images/selectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$4: function() {
					return u
				},
				GH: function() {
					return i
				},
				JZ: function() {
					return o
				},
				aR: function() {
					return n
				},
				db: function() {
					return f
				},
				ib: function() {
					return m
				},
				lW: function() {
					return P
				},
				pT: function() {
					return c
				},
				po: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				f = "images",
				s = "unified_images_enabled",
				p = "c2pa_polish",
				v = "CloudflareImages",
				n = b => !!(0, r.BF)(b, "images.transformations_enabled"),
				c = b => Boolean((0, r.BF)(b, "images.enabled")),
				i = b => {
					const _ = (0, r.BF)(b, "images.storage");
					return typeof _ == "number" && _ > 0
				},
				g = b => Boolean((0, r.BF)(b, "contract.customer_enabled")),
				o = b => Boolean((0, e.oI)(b, f, u)),
				m = b => Boolean((0, a.Le)(b, v, u)),
				I = b => Boolean(getAccountFlipperFlag(b, v, s)),
				P = b => Boolean((0, a.Le)(b, v, p))
		},
		"../react/pages/magic/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				GF: function() {
					return g
				},
				H3: function() {
					return s
				},
				H8: function() {
					return l
				},
				J: function() {
					return m
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return P
				},
				Up: function() {
					return u
				},
				W8: function() {
					return v
				},
				Ws: function() {
					return b
				},
				Xg: function() {
					return c
				},
				Y_: function() {
					return i
				},
				_j: function() {
					return a
				},
				a4: function() {
					return o
				},
				jS: function() {
					return I
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
				l = _ => [{
					value: "low",
					label: _("setting.low")
				}, {
					value: "mid",
					label: _("setting.medium")
				}, {
					value: "high",
					label: _("setting.high")
				}],
				f = _ => [{
					value: "request",
					label: _("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: _("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				s = _ => [{
					value: "unidirectional",
					label: _("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: _("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				v = "magic-wan",
				n = "gre_tunnel",
				c = "ipsec_tunnel",
				i = "interconnect",
				g = 64,
				o = 1476,
				m = "mid",
				I = "reply",
				P = _ => [{
					value: void 0,
					label: _("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: _("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: _("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				b = _ => [{
					value: "all",
					label: _("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: _("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: _("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
				a = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return l
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
				l = {
					MAGIC_WAN: e.W8,
					MAGIC_TRANSIT: e.Nz,
					MAGIC_OVERVIEW: "Magic overview"
				}
		},
		"../react/pages/magic/packet-captures/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				gb: function() {
					return n
				},
				iP: function() {
					return S
				},
				xL: function() {
					return b
				},
				rD: function() {
					return M
				},
				oT: function() {
					return o
				},
				i2: function() {
					return y
				},
				x1: function() {
					return f
				},
				lW: function() {
					return p
				},
				UA: function() {
					return C
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return T
				},
				PJ: function() {
					return k
				},
				bK: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
			const f = () => r().createElement(s, null, r().createElement("svg", {
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
				p = () => r().createElement(v, null, r().createElement("svg", {
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
				v = (0, a.createComponent)(({
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
				n = () => r().createElement(c, null, r().createElement(l.Ei, {
					alt: "airplane",
					src: u,
					width: "85%"
				})),
				c = (0, a.createComponent)(({
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
				i = () => r().createElement(g, null, r().createElement("svg", {
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
				g = (0, a.createComponent)(({
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
				o = () => r().createElement(m, null, r().createElement("svg", {
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
				m = (0, a.createComponent)(({
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
				I = () => r().createElement(P, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				P = (0, a.createComponent)(({
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
				b = () => r().createElement(_, null, r().createElement("svg", {
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
				_ = (0, a.createComponent)(({
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
				T = () => r().createElement(E, null, r().createElement("svg", {
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
				E = (0, a.createComponent)(({
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
				C = () => r().createElement(L, null, r().createElement("svg", {
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
				L = (0, a.createComponent)(({
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
				S = () => r().createElement("svg", {
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
				k = () => r().createElement("svg", {
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
				y = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				A2: function() {
					return s
				},
				He: function() {
					return l
				},
				N$: function() {
					return f
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
				l = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				f = p => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: p ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: p ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: p ? e.rD : e.PJ
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
		"../react/pages/page-rules/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				_: function() {
					return a
				},
				c: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const u = (l, f) => r().sendEvent(l, {
				template_name: f
			})
		},
		"../react/pages/pages/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				A: function() {
					return I
				},
				C1: function() {
					return v
				},
				GF: function() {
					return M
				},
				HD: function() {
					return _
				},
				IK: function() {
					return l
				},
				L7: function() {
					return a
				},
				Li: function() {
					return m
				},
				Ni: function() {
					return L
				},
				OG: function() {
					return K
				},
				QF: function() {
					return ge
				},
				QV: function() {
					return C
				},
				Sx: function() {
					return T
				},
				Ub: function() {
					return re
				},
				X3: function() {
					return c
				},
				bA: function() {
					return D
				},
				eO: function() {
					return i
				},
				fH: function() {
					return o
				},
				fQ: function() {
					return P
				},
				fR: function() {
					return e
				},
				ff: function() {
					return y
				},
				iS: function() {
					return b
				},
				nY: function() {
					return E
				},
				w3: function() {
					return u
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return g
				},
				yu: function() {
					return n
				},
				zF: function() {
					return k
				},
				zG: function() {
					return S
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
						workersCompatibilityMatrix: "https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/#compatibility-matrix"
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
				l = 58,
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
				s = "production",
				p = 2e3,
				v = 100,
				n = 350,
				c = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				g = 10,
				o = "_headers",
				m = "_redirects",
				I = "_routes.json",
				P = "_worker.js",
				b = "do-a-barrel-roll",
				_ = [o, m, I, P],
				T = 1024 * 1024 * 25,
				E = 1e3,
				C = {
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
				L = 1e5,
				S = 75e3,
				k = 2e5,
				M = 15e4,
				y = 3e3,
				D = 2250,
				N = "workers",
				x = "cloudflare_pages_build_caching",
				Z = 2;
			let re = function(Q) {
				return Q[Q.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", Q[Q.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", Q[Q.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", Q[Q.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", Q[Q.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", Q[Q.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", Q
			}({});
			const ge = 1,
				ce = 2,
				K = 2
		},
		"../react/pages/pages/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Hv: function() {
					return a
				},
				_j: function() {
					return r
				},
				zE: function() {
					return l
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
					projectIntegrationsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations`,
					projectIntegrations: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)`,
					projectIntegrationsSetupFlow: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)/${"integrationId"}/integrations-setup`,
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
				u = f => `${f.subdomain}.pages.dev`,
				l = {
					installation: {
						github: {
							user: (0, e.BC)`https://github.com/settings/installations/${"installation_id"}`,
							organization: (0, e.BC)`https://github.com/organizations/${"organization_name"}/settings/installations/${"installation_id"}`
						},
						gitlab: (0, e.BC)`https://gitlab.com/${"username"}/${"repo"}/-/hooks/`
					}
				}
		},
		"../react/pages/pipelines/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				KO: function() {
					return s
				},
				L9: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), g.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, c || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				p = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const v = (n, c = {}) => {
				r().sendEvent(n, a({}, c, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/r2/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Hv: function() {
					return a
				},
				Jg: function() {
					return f
				},
				_j: function() {
					return r
				},
				vF: function() {
					return l
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
				u = s => {
					const p = "r2.cloudflarestorage.com";
					switch (s) {
						case "default":
							return p;
						case "eu":
							return `eu.${p}`;
						case "fedramp":
							return `fedramp.${p}`
					}
				},
				l = (s, p) => {
					const v = u(p);
					return `https://${s}.${v}`
				},
				f = (s, p, v) => `${l(s,p)}/${v}`
		},
		"../react/pages/r2/selectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Mv: function() {
					return n
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/common/selectors/zoneSelectors.ts");
			const u = "r2_migrator_waitlist",
				l = "r2migrator",
				f = "r2",
				s = "r2_storage_migrator",
				p = "r2_storage_migrator",
				v = i => getAccountEntitlement(i, "r2.enabled"),
				n = i => Boolean((0, a.Le)(i, s, u)),
				c = i => Boolean(getAccountFlipperFlagsChanges(i, p, l))
		},
		"../react/pages/secrets-store/resources/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Hf: function() {
					return L
				},
				JJ: function() {
					return f
				},
				Js: function() {
					return u
				},
				LN: function() {
					return m
				},
				Nm: function() {
					return i
				},
				Oh: function() {
					return P
				},
				Q2: function() {
					return k
				},
				QF: function() {
					return I
				},
				RR: function() {
					return _
				},
				T_: function() {
					return S
				},
				Xm: function() {
					return s
				},
				Zl: function() {
					return M
				},
				dv: function() {
					return l
				},
				fp: function() {
					return c
				},
				jx: function() {
					return C
				},
				nQ: function() {
					return g
				},
				px: function() {
					return b
				},
				tP: function() {
					return a
				},
				vh: function() {
					return o
				},
				wB: function() {
					return D
				},
				z3: function() {
					return y
				},
				zt: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const a = "secrets-store-account-level",
				u = "https://developers.cloudflare.com/secrets-store/",
				l = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				f = 1,
				s = 10,
				p = 100;
			let v = function(N) {
					return N.NAME = "name", N
				}({}),
				n = function(N) {
					return N.NAME = "name", N
				}({});
			const c = {
				initialPaginationState: {
					page: f,
					perPage: s
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
					autoClearQs: !0
				}
			};
			let i = function(N) {
					return N.NAME = "name", N.COMMENT = "comment", N.TAGS = "tags", N.SERVICES = "services", N.STATUS = "status", N
				}({}),
				g = function(N) {
					return N.PENDING = "pending", N.ACTIVE = "active", N.DELETED = "deleted", N
				}({}),
				o = function(N) {
					return N.LIST_SECRETS_STORES = "listSecretsStores", N.LIST_SECRETS = "listSecrets", N.GET_SECRET = "getSecret", N.SECRETS_QUOTA = "secretsQuota", N
				}({}),
				m = function(N) {
					return N.CREATE = "create", N.EDIT = "edit", N.DUPLICATE = "duplicate", N
				}({}),
				I = function(N) {
					return N.WORKERS = "workers", N
				}({});
			const P = "default_secrets_store";
			let b = function(N) {
				return N.CREATE = "create", N.EDIT = "edit", N.DUPLICATE = "duplicate", N.VIEW = "view", N
			}({});
			const _ = "delete_operation",
				T = /^[a-zA-Z0-9_-]+$/,
				E = (N, x, Z, re, ge) => r.Ry().shape({
					name: r.Z_().required(N("secrets_store.form.create.errors.name.required")).matches(T, N("secrets_store.form.create.errors.name.invalid_characters")).max(255, N("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", N("secrets_store.form.create.errors.value.required"), ce => x || ge ? !!ce : !0).max(1024, N("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, N("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(I), N("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				C = (N, x, Z, re, ge) => r.Ry().shape({
					secrets: r.IX().of(E(N, x, Z, re, ge))
				}),
				L = {
					name: "",
					value: "",
					scopes: I.WORKERS,
					comment: ""
				},
				S = "secrets-store.store.secret";
			let k = function(N) {
				return N.DUPLICATE = "duplicate", N.DEPLOY = "deploy", N
			}({});
			const M = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let y = function(N) {
					return N.CREATE_SECRET = "create secrets store secret", N.EDIT_SECRET = "edit secrets store secret", N.DUPLICATE_SECRET = "duplicate secrets store secret", N.DELETE_SECRET = "delete secrets store secret", N.BIND_SECRET = "open secrets store binding drawer", N
				}({}),
				D = function(N) {
					return N.SECRETS_STORE = "secrets store main", N.WORKERS_BINDING = "workers binding drawer", N
				}({})
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Gk: function() {
					return i
				},
				LA: function() {
					return v
				},
				Wk: function() {
					return c
				},
				_V: function() {
					return s
				},
				c5: function() {
					return n
				},
				om: function() {
					return p
				}
			});
			var e = t("../react/pages/security-center/BlockedContent/types.ts"),
				r = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function a(g) {
				for (var o = 1; o < arguments.length; o++) {
					var m = arguments[o] != null ? Object(arguments[o]) : {},
						I = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(m).filter(function(P) {
						return Object.getOwnPropertyDescriptor(m, P).enumerable
					})), I.forEach(function(P) {
						u(g, P, m[P])
					})
				}
				return g
			}

			function u(g, o, m) {
				return o = l(o), o in g ? Object.defineProperty(g, o, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[o] = m, g
			}

			function l(g) {
				var o = f(g, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function f(g, o) {
				if (typeof g != "object" || g === null) return g;
				var m = g[Symbol.toPrimitive];
				if (m !== void 0) {
					var I = m.call(g, o || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(g)
			}
			const s = "blocked-content-table-tooltip",
				p = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				v = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				n = {
					[e.$E.Active]: [e.M3.Active, e.M3.InReview],
					[e.$E.Pending]: [e.M3.Pending, e.M3.Canceled]
				},
				c = {
					initialPaginationState: {
						page: 1,
						perPage: 10
					},
					initialToolbarState: {},
					initialSortState: {
						name: e.fL.EnforcementDate,
						direction: r.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: Object.values(e.GH)
					},
					filters: Object.values(e.GH).reduce((g, o) => a({}, g, {
						[o]: o
					}), {})
				};
			let i = function(g) {
				return g.COPY_URL = "copy blocked content url", g.REQUEST_REVIEW = "request blocked content review", g.ADD_FILTER = "Add filter", g.REMOVE_FILTER = "Remove filter", g
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$E: function() {
					return e
				},
				GH: function() {
					return a
				},
				M3: function() {
					return r
				},
				fL: function() {
					return u
				}
			});
			let e = function(f) {
					return f.Pending = "pending", f.Active = "active", f
				}({}),
				r = function(f) {
					return f.Active = "active", f.InReview = "in_review", f.Pending = "pending", f.Canceled = "canceled", f
				}({}),
				a = function(f) {
					return f.Domain = "domain", f.Status = "status", f.BlockType = "blockType", f
				}({}),
				u = function(f) {
					return f.EnforcementDate = "enforcementDate", f.BlockType = "blockType", f.Hostname = "hostname", f.Status = "status", f
				}({}),
				l = function(f) {
					return f.Removed = "removed", f.Misclassified = "misclassified", f
				}({})
		},
		"../react/pages/security-center/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/security/analytics/resources/labels.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				DC: function() {
					return g
				},
				Ff: function() {
					return s
				},
				Lz: function() {
					return i
				},
				RM: function() {
					return v
				},
				Ss: function() {
					return c
				},
				dR: function() {
					return l
				},
				gW: function() {
					return f
				},
				r5: function() {
					return p
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
				l = {
					label: "security_analytics.filters.mitigated",
					parse: o => o === "true" || o === !0,
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
					options: Object.keys(a.Bt),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securityAction"
				},
				s = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(a.e_).filter(o => o !== "unknown"),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securitySources"
				};
			let p = function(o) {
				return o.MITIGATED_BY_WAF = "mitigatedByWAF", o.SERVED_BY_CLOUDFLARE = "servedByCloudflare", o.SERVED_BY_ORIGIN = "servedByOrigin", o
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
				c = {
					suspicious_login_failure: 201326592,
					suspicious_login_attempt: 201326593
				},
				i = "security-analytics-log-explorer";
			let g = function(o) {
				return o.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', o.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', o.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', o.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', o.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', o.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", o.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", o.OPEN_SIDE_DRAWER = "open security analytics side drawer", o.CLOSE_SIDE_DRAWER = "close security analytics side drawer", o
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Fj: function() {
					return p
				},
				kq: function() {
					return s
				},
				xr: function() {
					return v
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), g.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, c || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.MAIN = "API Shield", n.SCHEMA_VALIDATION = "Schema Validation", n.JWT_VALIDATION = "JWT Validation", n.SEQUENCE_ANALYTICS = "Sequence Analytics", n.SEQUENCE_RULES = "Sequence Rules", n.ENDPOINT_MANAGEMENT = "Endpoint Management", n.API_DISCOVERY = "API Discovery", n.SETTINGS = "Settings", n
			}({});
			const p = {
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
				v = ({
					name: n,
					category: c = "user journey",
					product: i = s.MAIN,
					productName: g,
					additionalData: o
				}) => {
					r().sendEvent(n, a({
						category: c,
						product: i,
						productName: g
					}, o || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
			let e = function(l) {
					return l.INITIAL_FETCH_SCORES = "view bots scores distribution", l.FETCH_CONFIGURATION = "view bots configuration page", l.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", l.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", l.UPDATE_SETTINGS = "update bots settings", l.DELETE_RULE = "delete bots ruleset", l.UPDATE_RULE = "update bots ruleset", l.FETCH_RULES = "view bots ruleset", l.CONFIGURE_BOT_MANAGEMENT = "view bots management", l.WAF_RULES_REDIRECT = "redirect waf rules", l.CHANGED_ZONE_SETTINGS = "change zone setting", l
				}({}),
				r = function(l) {
					return l.PROVIDED_TEMPLATE = "provided template link in detection card", l.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", l.USE_TEMPLATE = "use template", l.CREATE_FIREWALL_RULE = "create firewall rule", l.WAF_RULES = "waf rules", l
				}({});
			const a = "user journey",
				u = "Bots"
		},
		"../react/pages/security/overview/resources/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				AZ: function() {
					return u
				},
				BQ: function() {
					return l
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
					return f
				}
			});
			let e = function(p) {
				return p.NAME = "description", p.SOURCE = "source", p.LAST_UPDATE = "lastUpdatedAt", p.ACTIVITY = "activity", p
			}({});
			const r = 5;
			let a = function(p) {
					return p.EXTERNAL_DOCUMENTATION = "external_documentation", p.LINK_TO_MANAGED = "link_to_managed_rules", p.LINK_TO_EVENTS = "link_to_security_events", p.LINK_TO_DDOS = "link_to_ddos", p.LINK_BOT_MGMT = "link_to_bot_mgmt", p.LINK_TO_AI_AUDIT = "link_to_ai_audit", p.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", p.LINK_TO_PAGE_SHIELD = "link_to_page_shield", p.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", p.LINK_TO_SECURITY_EVENTS = "link_to_security_events", p.LINK_TO_IP_RULE = "link_to_ip_rule", p.LINK_TO_CONFIGURATION = "link_to_configuration", p
				}({}),
				u = function(p) {
					return p.LOAD_INSIGHTS = "load overview action items", p.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", p.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", p.CLICK_ACTION_INSIGHT = "click overview action item suggestion", p
				}({});
			const l = "security-overview-all-suggestions",
				f = [{
					title: "overview.modules.tab",
					url: "/"
				}, {
					title: "overview.all_suggestions.tab",
					url: "/all"
				}];
			let s = function(p) {
				return p.ARCHIVED = "archived", p.FRAUD_AND_ACCOUNT_ABUSE = "fraud_account_abuse", p
			}({})
		},
		"../react/pages/security/page-shield/resources/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				CP: function() {
					return M
				},
				FV: function() {
					return ce
				},
				KH: function() {
					return S
				},
				Ks: function() {
					return j
				},
				Lj: function() {
					return W
				},
				MC: function() {
					return c
				},
				Mq: function() {
					return L
				},
				OV: function() {
					return ge
				},
				Oq: function() {
					return k
				},
				QM: function() {
					return E
				},
				SI: function() {
					return Q
				},
				SJ: function() {
					return P
				},
				Sk: function() {
					return N
				},
				Ti: function() {
					return A
				},
				Uc: function() {
					return C
				},
				Uq: function() {
					return p
				},
				Uv: function() {
					return re
				},
				V0: function() {
					return v
				},
				VT: function() {
					return o
				},
				YC: function() {
					return x
				},
				j$: function() {
					return b
				},
				qc: function() {
					return I
				},
				sV: function() {
					return y
				},
				sW: function() {
					return K
				},
				u8: function() {
					return g
				},
				v5: function() {
					return n
				},
				xg: function() {
					return Z
				},
				yd: function() {
					return T
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				a = t("../react/pages/security/page-shield/resources/types.ts");

			function u(O) {
				for (var F = 1; F < arguments.length; F++) {
					var ee = arguments[F] != null ? Object(arguments[F]) : {},
						J = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(ee).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(ee, ne).enumerable
					})), J.forEach(function(ne) {
						l(O, ne, ee[ne])
					})
				}
				return O
			}

			function l(O, F, ee) {
				return F = f(F), F in O ? Object.defineProperty(O, F, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : O[F] = ee, O
			}

			function f(O) {
				var F = s(O, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function s(O, F) {
				if (typeof O != "object" || O === null) return O;
				var ee = O[Symbol.toPrimitive];
				if (ee !== void 0) {
					var J = ee.call(O, F || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(O)
			}
			const p = 50,
				v = 9,
				n = "copy script url page shield",
				c = "disable page shield",
				i = "click documentation link",
				g = "enable page shield",
				o = "filter search page shield",
				m = "filter search view all page shield",
				I = "hover score tooltip page shield",
				P = "open alert modal page shield",
				b = "change pagination page shield",
				_ = "close script modal page shield",
				T = "open script modal page shield",
				E = "select alert type page shield",
				C = "sort column page shield",
				L = {
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
				S = {
					STARTS_WITH: r.Gn.startsWith,
					ENDS_WITH: r.Gn.endsWith,
					EQUALS: r.Gn.equals,
					CONTAINS: r.Gn.contains,
					DOES_NOT_CONTAIN: r.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: r.Gn.in
				},
				k = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [S.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [S.CONTAINS, S.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [S.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [S.INCLUDES, S.ENDS_WITH, S.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				M = u({}, k, {
					urls: u({}, k.urls, {
						label: "firewall.page_shield.connection"
					})
				}),
				y = {
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
			let D = function(O) {
				return O.SECURITY_THREATS = "Security Threats", O.C2_BOTNET = "C2 & Botnet", O.CRYPTOMINING = "Cryptomining", O.MALWARE = "Malware", O.PHISHING = "Phishing", O.SPYWARE = "Spyware", O.DGA_DOMAINS = "DGA Domains", O.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", O
			}({});
			const N = "https://www.cloudflare.com/plans/enterprise/contact/",
				x = {
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
				Z = {
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
				re = {
					[a.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[a.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[a.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[a.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[a.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				ge = {
					[a.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[a.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				ce = {
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
				K = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				Q = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				W = {
					[a.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[a.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[a.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				j = {
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
		"../react/pages/security/page-shield/resources/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					return m.Xe
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
					return m.k2
				},
				$g: function() {
					return m.$g
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
					return m.I1
				},
				Wq: function() {
					return m.Wq
				},
				jf: function() {
					return m.jf
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
					return m.R$
				},
				Sk: function() {
					return u.Sk
				},
				gY: function() {
					return i
				},
				SE: function() {
					return l
				},
				m: function() {
					return n
				},
				xP: function() {
					return v
				},
				xl: function() {
					return p
				},
				Tb: function() {
					return s
				},
				h3: function() {
					return g
				},
				xq: function() {
					return j
				},
				SQ: function() {
					return re
				},
				C0: function() {
					return ge
				},
				av: function() {
					return b
				},
				W3: function() {
					return I
				},
				WO: function() {
					return C
				},
				Dk: function() {
					return k
				},
				we: function() {
					return y
				},
				Yt: function() {
					return x
				},
				ex: function() {
					return N
				},
				E1: function() {
					return D
				},
				dm: function() {
					return T
				},
				oK: function() {
					return L
				},
				qZ: function() {
					return Z
				},
				_4: function() {
					return ce
				},
				qo: function() {
					return K
				},
				CB: function() {
					return f
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				a = t.n(r),
				u = t("../react/pages/security/page-shield/resources/constants.ts");
			const l = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", A => (a().sendEvent(u.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				f = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", A => (a().sendEvent(u.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				s = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", A => (a().sendEvent(u.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				p = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				v = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", A => (a().sendEvent(u.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				n = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				c = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", A => (a().sendEvent(u.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), A)),
				i = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				g = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var o = t("../react/app/redux/normalizer.js"),
				m = t("../react/pages/security/page-shield/resources/types.ts");
			const I = A => A.pageShield.configuration,
				P = A => {
					var O;
					return (O = A.pageShield.configuration.data) === null || O === void 0 ? void 0 : O.enabled
				},
				b = A => {
					var O;
					return (O = I(A)) === null || O === void 0 ? void 0 : O.data
				},
				_ = A => A.pageShield.scripts,
				T = A => A.pageShield.script,
				E = A => A.pageShield.connections,
				C = A => A.pageShield.connection,
				L = (0, o.P1)("pageShieldScripts", _),
				S = (0, o.P1)("pageShieldScript", T),
				k = (0, o.P1)("pageShieldConnections", E),
				M = (0, o.P1)("pageShieldConnection", C),
				y = (A, O) => A === m.Wq.SCRIPT_MONITOR ? L(O) || [] : k(O) || [],
				D = (A, O) => A === m.Wq.SCRIPT_MONITOR ? _(O) || [] : E(O) || [],
				N = (A, O) => A === m.Wq.SCRIPT_MONITOR ? S(O) : M(O),
				x = A => A.pageShield.domainIntel,
				Z = A => A.pageShield.whoIsRecord,
				re = (A, O, F) => {
					var ee;
					const J = Object.values(F).map(ne => ({
						key: ne,
						label: u.Uv[ne],
						score: A[ne]
					})).filter(ne => ne.score !== void 0 && ne.score <= O);
					return O === u.V0 && J.length === 0 && ((ee = A.js_integrity_score) !== null && ee !== void 0 ? ee : 100) <= O && J.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), J
				},
				ge = (A, O) => Object.values(O).filter(F => A[F] === !0).map(F => u.OV[F]),
				ce = A => A === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				K = (A, O) => A[m.$g.MagecartScore] !== void 0 && A[m.$g.MagecartScore] <= O || A[m.$g.MalwareScore] !== void 0 && A[m.$g.MalwareScore] <= O || A[m.$g.CryptominingScore] !== void 0 && A[m.$g.CryptominingScore] <= O || A.js_integrity_score !== void 0 && A.js_integrity_score <= O,
				Q = ["cdn.jsdelivr.net", "unpkg.com"],
				W = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				j = A => {
					if (A.includes("@latest")) {
						const F = A.split("@latest");
						if (F.length != 2) return;
						const ee = F[0].length,
							J = ee + "@latest".length;
						return [ee, J]
					}
					if (!!Q.some(F => A.includes(F)))
						for (const F of W) {
							const ee = A.match(F);
							if (!ee) continue;
							const J = ee.index;
							if (J === 0) return null;
							const ne = J + ee[0].length;
							return [J, ne]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$g: function() {
					return v
				},
				I1: function() {
					return l
				},
				R$: function() {
					return n
				},
				Wq: function() {
					return p
				},
				Xe: function() {
					return f
				},
				jf: function() {
					return s
				},
				k2: function() {
					return c
				}
			});

			function e(i) {
				for (var g = 1; g < arguments.length; g++) {
					var o = arguments[g] != null ? Object(arguments[g]) : {},
						m = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(o).filter(function(I) {
						return Object.getOwnPropertyDescriptor(o, I).enumerable
					})), m.forEach(function(I) {
						r(i, I, o[I])
					})
				}
				return i
			}

			function r(i, g, o) {
				return g = a(g), g in i ? Object.defineProperty(i, g, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = o, i
			}

			function a(i) {
				var g = u(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function u(i, g) {
				if (typeof i != "object" || i === null) return i;
				var o = i[Symbol.toPrimitive];
				if (o !== void 0) {
					var m = o.call(i, g || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}
			let l = function(i) {
				return i.BASE_URI = "base-uri", i.CHILD = "child-src", i.CONNECT = "connect-src", i.DEFAULT = "default-src", i.FONT = "font-src", i.FORM_ACTION = "form-action", i.FRAME = "frame-src", i.FRAME_ANCESTORS = "frame-ancestors", i.IMAGE = "img-src", i.MANIFEST = "manifest-src", i.MEDIA = "media-src", i.OBJECT = "object-src", i.SCRIPT = "script-src", i.SCRIPT_ELEM = "script-src-elem", i.STYLE = "style-src", i.STYLE_ELEM = "style-src-elem", i.WORKER = "worker-src", i.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", i
			}({});
			const f = e({}, l, {
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
				p = function(i) {
					return i.SCRIPT_MONITOR = "script", i.CONNECTION_MONITOR = "connection", i.COOKIE_MONITOR = "cookie", i
				}({}),
				v = function(i) {
					return i.CryptominingScore = "cryptomining_score", i.MalwareScore = "malware_score", i.MagecartScore = "magecart_score", i
				}({}),
				n = function(i) {
					return i.DataflowScore = "dataflow_score", i.ObfuscationScore = "obfuscation_score", i
				}({}),
				c = function(i) {
					return i.DomainMalicious = "domain_reported_malicious", i.UrlMalicious = "url_reported_malicious", i
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				_C: function() {
					return o
				},
				_R: function() {
					return m
				},
				dY: function() {
					return P
				},
				fy: function() {
					return T
				},
				ji: function() {
					return g
				},
				pR: function() {
					return I
				},
				pV: function() {
					return E
				},
				rj: function() {
					return _
				},
				yR: function() {
					return C
				},
				zf: function() {
					return b
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				l = t("../react/utils/translator.tsx"),
				f = t("../react/pages/security/resources/types.ts"),
				s = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				p = t("../node_modules/@cloudflare/elements/es/index.js");

			function v(L) {
				for (var S = 1; S < arguments.length; S++) {
					var k = arguments[S] != null ? Object(arguments[S]) : {},
						M = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(k).filter(function(y) {
						return Object.getOwnPropertyDescriptor(k, y).enumerable
					})), M.forEach(function(y) {
						n(L, y, k[y])
					})
				}
				return L
			}

			function n(L, S, k) {
				return S = c(S), S in L ? Object.defineProperty(L, S, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[S] = k, L
			}

			function c(L) {
				var S = i(L, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function i(L, S) {
				if (typeof L != "object" || L === null) return L;
				var k = L[Symbol.toPrimitive];
				if (k !== void 0) {
					var M = k.call(L, S || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(L)
			}
			const g = 10;
			let o = function(L) {
					return L.MTLS_ACCESS = "mTLS-enforced authentication", L.ZONE_LOCKDOWN = "Zone lockdown", L.USER_AGENT = "User agent blocking", L.EMAIL_VALIDITY = "Disposable email checks", L.IP_BASED = "IP-based rule", L.GEOGRAPHY_BASE = "Geography-based rule", L
				}({}),
				m = function(L) {
					return L.LEAKED_CREDENTIALS = "Leaked Credentials Checks", L
				}({});
			const I = {
					CLICK_GEOGRAPHICAL_TEMPLATE: "click geographical rule template from tools",
					CLICK_IP_TEMPLATE: "click IP rule template from tools",
					CLICK_USER_AGENT_TEMPLATE: "click user agent rule template from tools",
					CLICK_ZONE_LOCKDOWN_TEMPLATE: "click zone lockdown rule template from tools"
				},
				P = [{
					title: "firewall.tools.toast.geography",
					type: "ip",
					template: o.GEOGRAPHY_BASE,
					trackedEvent: I.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: o.IP_BASED,
					trackedEvent: I.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: o.USER_AGENT,
					trackedEvent: I.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: o.ZONE_LOCKDOWN,
					trackedEvent: I.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				b = {
					[f.X.UI_SECTION]: L => ({
						[o.MTLS_ACCESS]: {
							ruleName: o.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${L.account.id}/${L.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[o.ZONE_LOCKDOWN]: {
							ruleName: o.ZONE_LOCKDOWN,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [p.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${L.account.id}/configurations/lists`
								}]
							})
						},
						[o.GEOGRAPHY_BASE]: {
							ruleName: o.GEOGRAPHY_BASE,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[o.IP_BASED]: {
							ruleName: o.IP_BASED,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [p.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${L.account.id}/configurations/lists`
								}]
							})
						},
						[o.USER_AGENT]: {
							ruleName: o.USER_AGENT,
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${L.account.id}/configurations/lists`
								}]
							})
						},
						[o.EMAIL_VALIDITY]: {
							ruleName: o.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[f.X.WAF_RULES]: {
						[o.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot)")',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[o.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				_ = {
					[f.X.WAF_RULES]: {
						[m.LEAKED_CREDENTIALS]: {
							ruleName: m.LEAKED_CREDENTIALS,
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
						[m.LEAKED_CREDENTIALS]: {
							ruleName: m.LEAKED_CREDENTIALS,
							displayName: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: u().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let T = function(L) {
				return L.DISCOVERY = "discovery", L.SEQUENCES = "sequences", L.SCHEMA_VALIDATION = "schema-validation", L.SETTINGS = "settings", L.API_RULES = "api-rules", L.UPGRADE = "upgrade", L
			}({});
			const E = v({}, s.g, {
				[r.df.HttpRequestFirewallManaged]: v({}, s.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: v({}, s.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: v({}, s.g[r.df.HttpRateLimit], {
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
			let C = function(L) {
				return L.APP_SEC_MVP = "app-security-navigation-mvp", L
			}({})
		},
		"../react/pages/security/resources/types.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				j: function() {
					return p
				},
				y: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(v) {
				for (var n = 1; n < arguments.length; n++) {
					var c = arguments[n] != null ? Object(arguments[n]) : {},
						i = Object.keys(c);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(c).filter(function(g) {
						return Object.getOwnPropertyDescriptor(c, g).enumerable
					})), i.forEach(function(g) {
						u(v, g, c[g])
					})
				}
				return v
			}

			function u(v, n, c) {
				return n = l(n), n in v ? Object.defineProperty(v, n, {
					value: c,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[n] = c, v
			}

			function l(v) {
				var n = f(v, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function f(v, n) {
				if (typeof v != "object" || v === null) return v;
				var c = v[Symbol.toPrimitive];
				if (c !== void 0) {
					var i = c.call(v, n || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(v)
			}
			let s = function(v) {
				return v.CLICK_OPT_IN = "click opt in security navigation", v.CLICK_OPT_IN_BUTTON = "click opt in button", v.CLICK_OPT_OUT_BUTTON = "click opt out button", v.CLICK_NEXT_STEP = "click opt in next step", v.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", v.DISPLAY_MODAL = "display opt in modal", v.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", v.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", v.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", v
			}({});
			const p = (v, n = {}) => {
				r().sendEvent(v, a({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$y: function() {
					return o
				},
				Ai: function() {
					return n
				},
				B: function() {
					return v
				},
				BT: function() {
					return l
				},
				CK: function() {
					return p
				},
				F3: function() {
					return m
				},
				JP: function() {
					return a
				},
				O_: function() {
					return c
				},
				X2: function() {
					return u
				},
				YO: function() {
					return I
				},
				_c: function() {
					return P
				},
				je: function() {
					return g
				},
				ll: function() {
					return f
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
			const a = async b => {
				var _, T;
				const E = await (0, e.get)(`/zones/${b}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((_ = E == null ? void 0 : E.body) === null || _ === void 0 || (T = _.result) === null || T === void 0 ? void 0 : T.value) === "enabled"
			}, u = async (b, _) => (await (0, e.post)(`/zones/${b}/content-upload-scan/${_?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), _), l = async b => {
				var _;
				const T = await (0, e.get)(`/zones/${b}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((_ = T == null ? void 0 : T.body) === null || _ === void 0 ? void 0 : _.result) || []
			}, f = async (b, _) => {
				var T;
				const E = await (0, e.post)(`/zones/${b}/content-upload-scan/payloads`, {
					body: [_]
				});
				return (T = E == null ? void 0 : E.body) === null || T === void 0 ? void 0 : T.result
			}, s = async (b, _) => (await (0, e.del)(`/zones/${b}/content-upload-scan/payloads/${_}`, {
				hideErrorAlert: !0
			}), _), p = async b => {
				var _;
				const T = await (0, e.get)(`/zones/${b}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((_ = T == null ? void 0 : T.body) === null || _ === void 0 ? void 0 : _.pii_detection_enabled)
			}, v = async (b, _) => (await (0, e.put)(`/zones/${b}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: _
				}
			}), _), n = async b => {
				var _, T;
				const E = await (0, e.get)(`/zones/${b}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((_ = E == null ? void 0 : E.body) === null || _ === void 0 || (T = _.result) === null || T === void 0 ? void 0 : T.enabled)
			}, c = async (b, _) => {
				var T, E;
				const C = await (0, e.post)(`/zones/${b}/leaked-credential-checks`, {
					body: {
						enabled: _
					}
				});
				return !!((T = C == null ? void 0 : C.body) === null || T === void 0 || (E = T.result) === null || E === void 0 ? void 0 : E.enabled)
			}, i = async b => {
				var _;
				const T = await (0, e.get)(`/zones/${b}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (_ = T == null ? void 0 : T.body) === null || _ === void 0 ? void 0 : _.result
			}, g = async (b, _) => {
				var T;
				const E = await (0, e.post)(`/zones/${b}/leaked-credential-checks/detections`, {
					body: _
				});
				return (T = E == null ? void 0 : E.body) === null || T === void 0 ? void 0 : T.result
			}, o = async (b, _) => (await (0, e.del)(`/zones/${b}/leaked-credential-checks/detections/${_}`, {
				hideErrorAlert: !0
			}), _), m = async (b, _) => {
				await (0, e.put)(`/zones/${b}/security-center/securitytxt`, {
					body: _
				})
			}, I = async b => {
				await (0, e.del)(`/zones/${b}/security-center/securitytxt`)
			}, P = async b => (await (0, e.get)(`/zones/${b}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Xu: function() {
					return o
				},
				Io: function() {
					return E
				},
				FQ: function() {
					return ce
				},
				vU: function() {
					return g
				},
				M: function() {
					return I
				},
				d7: function() {
					return m
				},
				Oz: function() {
					return T
				},
				Np: function() {
					return x
				},
				WR: function() {
					return v
				},
				bE: function() {
					return Z
				},
				u_: function() {
					return i
				},
				pf: function() {
					return C
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				a = t("webpack/sharing/consume/default/react/react"),
				u = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t("../react/pages/security/settings/resources/index.ts"),
				f = t("../react/common/hooks/useZoneEntitlement.ts"),
				s = t("../../../../node_modules/yup/es/index.js"),
				p = t("../react/utils/translator.tsx");
			const v = () => (0, u.useSelector)(l.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				c = () => !!useZoneEntitlement(n),
				i = () => {
					const {
						t: K
					} = (0, p.QT)(), Q = s.Z_().required(K("common.field_is_required")).max(24, K("labels.apply.form.name.error.max_characters")).matches(l.DG, K("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", K("labels.apply.form.name.error.cf_forbidden"), A => !l.aW.test(A)), W = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: A => s.Ry().shape({
							[l.n5.NAME]: A ? s.Z_() : Q,
							[l.n5.DESCRIPTION]: A ? s.Z_().optional() : s.Z_().max(150, K("labels.apply.form.description.error.max_characters"))
						})
					}, j = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => s.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: Q
						})
					};
					return {
						LABELS_APPLY_FORM: W,
						EDIT_LABELS_MODAL_FORM: j
					}
				},
				g = ({
					modalHeaderFixedHeight: K = 62,
					modalDefaultPaddings: Q = 16
				} = {}) => {
					const W = (0, a.useRef)(null),
						j = (0, a.useRef)(null),
						[A, O] = (0, a.useState)(0),
						[F, ee] = (0, a.useState)(0),
						J = `calc(100vh - ${A}px - ${F}px - ${Q}px)`,
						[ne, G] = (0, a.useState)("");
					return (0, a.useEffect)(() => {
						const B = () => {
							var V, te, le, pe;
							const ue = W == null || (V = W.current) === null || V === void 0 ? void 0 : V.offsetHeight,
								_e = j == null || (te = j.current) === null || te === void 0 ? void 0 : te.offsetHeight,
								be = ((le = ue) !== null && le !== void 0 ? le : 0) + K,
								Te = (pe = _e) !== null && pe !== void 0 ? pe : 0;
							O(be), ee(Te)
						};
						return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B)
					}, []), {
						searchTerm: ne,
						setSearchTerm: G,
						scrollableSectionMaxHeight: J,
						topMenuRef: W,
						bottomMenuRef: j
					}
				},
				o = K => {
					const Q = v(),
						W = (0, e.useQueryClient)(),
						j = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${K}`,
							queryFn: () => (0, r.JP)(K),
							enabled: Q
						}),
						A = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${K}`,
							queryFn: () => (0, r.BT)(K),
							enabled: Q && !!(j == null ? void 0 : j.data)
						}),
						O = (0, e.useMutation)({
							mutationFn: async ({
								enabled: J
							}) => await (0, r.X2)(K, J),
							onSuccess: J => {
								W.setQueryData([`content-scanning-enabled-${K}`], J)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: J => (0, r.ll)(K, J),
							onSuccess: J => {
								W.setQueryData([`content-scanning-detections-${K}`], J)
							}
						}),
						ee = (0, e.useMutation)({
							mutationFn: J => (0, r.qD)(K, J),
							onSuccess: J => {
								var ne;
								const G = (ne = W.getQueryData(`content-scanning-detections-${K}`)) !== null && ne !== void 0 ? ne : [];
								W.setQueryData([`content-scanning-detections-${K}`], G.filter(({
									id: B
								}) => B !== J))
							}
						});
					return {
						entitled: Q,
						loading: j.isLoading || A.isLoading,
						error: j.isError || A.isError,
						enabled: {
							data: j.data,
							isToggling: O.isLoading,
							toggleEnabled: async J => O.mutateAsync({
								enabled: J
							})
						},
						detections: {
							data: A.data,
							add: F.mutateAsync,
							delete: ee.mutateAsync,
							loading: F.isLoading || ee.isLoading
						}
					}
				},
				m = () => {
					const K = (0, u.useSelector)(l.cN),
						Q = (0, u.useSelector)(l.bH),
						W = (0, u.useSelector)(l.P3),
						j = (0, u.useSelector)(l.Ri);
					return {
						hasEditPermission: K,
						isEnabled: W && (Q.hasSimilarLeaked || Q.hasUsernameAndPasswordLeaked || j)
					}
				},
				I = K => {
					const Q = m(),
						W = (0, e.useQueryClient)(),
						j = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${K}`,
							queryFn: () => (0, r.Ai)(K),
							enabled: !!Q.isEnabled,
							retry: 1
						}),
						A = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${K}`,
							queryFn: () => (0, r.tw)(K),
							enabled: !!Q.isEnabled && !!(j == null ? void 0 : j.data)
						}),
						O = (0, e.useMutation)({
							mutationFn: ({
								enabled: J
							}) => (0, r.O_)(K, J),
							onSuccess: J => {
								W.setQueryData([`leaked-credentials-enabled-${K}`], J)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: async J => await (0, r.je)(K, J),
							onSuccess: J => {
								var ne;
								const G = (ne = W.getQueryData(`leaked-credentials-detections-${K}`)) !== null && ne !== void 0 ? ne : [];
								W.setQueryData([`leaked-credentials-detections-${K}`], [...G, J])
							}
						}),
						ee = (0, e.useMutation)({
							mutationFn: J => (0, r.$y)(K, J),
							onSuccess: J => {
								var ne;
								const G = (ne = W.getQueryData(`leaked-credentials-detections-${K}`)) !== null && ne !== void 0 ? ne : [];
								W.setQueryData([`leaked-credentials-detections-${K}`], G.filter(({
									id: B
								}) => B !== J))
							}
						});
					return {
						entitled: Q.isEnabled,
						hasEditPermissions: Q.hasEditPermission,
						loading: j.isLoading || A.isLoading,
						error: j.isError || j.isError,
						enabled: {
							data: j.data,
							isToggling: O.isLoading,
							toggleEnabled: async J => O.mutateAsync({
								enabled: J
							})
						},
						detections: {
							data: A.data,
							add: F.mutateAsync,
							delete: ee.mutateAsync,
							loading: F.isLoading || ee.isLoading
						}
					}
				};
			var P = t("../react/common/utils/useQueryCache.ts");
			const b = "security-txt",
				_ = {
					securityTxt: ({
						zoneId: K
					}) => [b, K]
				},
				T = K => (0, e.useQuery)({
					queryKey: _.securityTxt({
						zoneId: K
					}),
					queryFn: () => (0, r._c)(K),
					select: Q => Q.result
				}),
				E = K => {
					const {
						invalidate: Q
					} = (0, P.o)(_.securityTxt({
						zoneId: K
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(K),
						onSuccess: async () => {
							await Q(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				C = K => {
					const {
						invalidate: Q
					} = (0, P.o)(_.securityTxt({
						zoneId: K
					}));
					return (0, e.useMutation)({
						mutationFn: W => (0, r.F3)(K, W),
						onSuccess: async () => {
							await Q(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var L = t("../../../../node_modules/lodash/isEqual.js"),
				S = t.n(L),
				k = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function M(K) {
				for (var Q = 1; Q < arguments.length; Q++) {
					var W = arguments[Q] != null ? Object(arguments[Q]) : {},
						j = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && j.push.apply(j, Object.getOwnPropertySymbols(W).filter(function(A) {
						return Object.getOwnPropertyDescriptor(W, A).enumerable
					})), j.forEach(function(A) {
						y(K, A, W[A])
					})
				}
				return K
			}

			function y(K, Q, W) {
				return Q = D(Q), Q in K ? Object.defineProperty(K, Q, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[Q] = W, K
			}

			function D(K) {
				var Q = N(K, "string");
				return typeof Q == "symbol" ? Q : String(Q)
			}

			function N(K, Q) {
				if (typeof K != "object" || K === null) return K;
				var W = K[Symbol.toPrimitive];
				if (W !== void 0) {
					var j = W.call(K, Q || "default");
					if (typeof j != "object") return j;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Q === "string" ? String : Number)(K)
			}
			const x = K => {
					const {
						queryKey: Q,
						zoneId: W
					} = (0, k.hL)(K), {
						isLoading: j,
						isError: A,
						isSuccess: O,
						data: F,
						refetch: ee,
						isRefetching: J
					} = (0, e.useQuery)({
						queryKey: Q,
						queryFn: () => k.Mi.getLabels(M({
							zoneId: W
						}, K)),
						onSuccess: () => {
							var ne;
							const G = K == null || (ne = K.filters) === null || ne === void 0 ? void 0 : ne.source;
							(G === l.LABEL_SOURCES.MANAGED || G === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: G
							})
						}
					});
					return {
						data: F == null ? void 0 : F.result,
						errors: F == null ? void 0 : F.errors,
						paginationData: F == null ? void 0 : F.result_info,
						isLoading: j,
						isError: A,
						isSuccess: O,
						refetch: ee,
						isRefetching: J
					}
				},
				Z = ({
					labels: K,
					preselectedLabels: Q
				}) => {
					const {
						USER: W,
						MANAGED: j
					} = l.LABEL_SOURCES, [A, O] = (0, a.useState)({
						[W]: [],
						[j]: []
					}), [F, ee] = (0, a.useState)(new Set), J = F.size > 0, [ne, G] = (0, a.useState)(!1), B = pe => {
						ee(ue => {
							const _e = new Set(ue);
							return _e.has(pe.name) ? _e.delete(pe.name) : _e.add(pe.name), _e
						})
					}, V = pe => F.has(pe.name), te = (pe, ue) => {
						const _e = V(pe) ? 1 : 0;
						return (V(ue) ? 1 : 0) - _e
					}, le = pe => {
						O(ue => ({
							[W]: [...pe ? pe[W] : ue[W]].sort(te),
							[j]: [...pe ? pe[j] : ue[j]].sort(te)
						}))
					};
					return (0, a.useEffect)(() => {
						if (K && !ne) {
							if (Q) {
								const pe = new Set;
								K.forEach(ue => {
									Q.some(_e => S()(_e, ue)) && pe.add(ue.name)
								}), ee(pe)
							}
							G(!0)
						}
					}, [K, Q, ne]), (0, a.useEffect)(() => {
						if (K && ne) {
							const pe = K.reduce((_e, be) => (be.source === W ? _e[W].push(be) : be.source === j && _e[j].push(be), _e), {
									[W]: [],
									[j]: []
								}),
								ue = {
									[W]: pe[W].sort(te),
									[j]: pe[j].sort(te)
								};
							O(ue)
						}
					}, [W, j, K, ne]), {
						userAndManagedLabels: A,
						setUserAndManagedLabels: O,
						toggleSelectedLabel: B,
						isLabelSelected: V,
						sortLabelsBySelectedStatus: le,
						hasLabelsSelected: J
					}
				};
			var re = t("../react/app/redux/index.ts"),
				ge = t("../react/pages/security/settings/resources/selectors.ts");
			const ce = (K = "") => {
				const Q = (0, re.p4)(ge.Xs),
					W = Q && (K == null ? void 0 : K.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: Q,
					hasDeprecatedParameter: W
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				FQ: function() {
					return p.FQ
				},
				Iv: function() {
					return v.Iv
				},
				M: function() {
					return p.M
				},
				Np: function() {
					return p.Np
				},
				Oz: function() {
					return p.Oz
				},
				QJ: function() {
					return v.QJ
				},
				R: function() {
					return v.R
				},
				Tf: function() {
					return v.Tf
				},
				WR: function() {
					return p.WR
				},
				Xs: function() {
					return v.Xs
				},
				Xu: function() {
					return p.Xu
				},
				ZF: function() {
					return v.ZF
				},
				bE: function() {
					return p.bE
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
					return p.pf
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
				a = t("webpack/sharing/consume/default/react/react"),
				u = t.n(a),
				l = t("../node_modules/@cloudflare/component-page/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(f),
				p = t("../react/pages/security/settings/hooks/index.ts"),
				v = t("../react/pages/security/settings/resources/index.ts");
			const n = u().lazy(() => Promise.all([t.e(16691), t.e(46812), t.e(12174), t.e(1091), t.e(55554), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(5756), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				c = () => {
					const {
						t: i
					} = (0, f.useI18n)(), g = (0, e.xk)("waf");
					return u().createElement(l.T3, {
						parentPageLabel: i("navigation.zone.security"),
						title: i("navigation.zone.security.settings"),
						type: "narrow"
					}, g.read ? u().createElement(n, null) : u().createElement(r.Z, null))
				};
			h.ZP = c
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Mi: function() {
					return _
				},
				hL: function() {
					return b
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				a = t("../react/common/utils/useQueryCache.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				f = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				s = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const p = {
				labels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels`,
				userLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}`,
				userLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user`,
				managedLabel: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}`,
				managedLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed`,
				operationsLinkedToLabels: (0, s.BC)`/zones/${"zoneId"}/api_gateway/operations/labels`,
				userLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/user/${"labelName"}/resources/operation`,
				managedLabelOperations: (0, s.BC)`/zones/${"zoneId"}/api_gateway/labels/managed/${"labelName"}/resources/operation`
			};
			var v = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				c = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(E, C) {
				if (E == null) return {};
				var L = g(E, C),
					S, k;
				if (Object.getOwnPropertySymbols) {
					var M = Object.getOwnPropertySymbols(E);
					for (k = 0; k < M.length; k++) S = M[k], !(C.indexOf(S) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, S) || (L[S] = E[S]))
				}
				return L
			}

			function g(E, C) {
				if (E == null) return {};
				var L = {},
					S = Object.keys(E),
					k, M;
				for (M = 0; M < S.length; M++) k = S[M], !(C.indexOf(k) >= 0) && (L[k] = E[k]);
				return L
			}

			function o(E) {
				for (var C = 1; C < arguments.length; C++) {
					var L = arguments[C] != null ? Object(arguments[C]) : {},
						S = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(L).filter(function(k) {
						return Object.getOwnPropertyDescriptor(L, k).enumerable
					})), S.forEach(function(k) {
						m(E, k, L[k])
					})
				}
				return E
			}

			function m(E, C, L) {
				return C = I(C), C in E ? Object.defineProperty(E, C, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[C] = L, E
			}

			function I(E) {
				var C = P(E, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function P(E, C) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var S = L.call(E, C || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(E)
			}
			const b = E => {
					const C = (0, e.p4)(r.Cu),
						L = (0, l.F)(),
						S = T.labels(o({
							accountId: L,
							zoneId: C
						}, E ? o({}, E) : {})),
						k = (0, a.o)(S);
					return o({
						zoneId: C,
						queryKey: S,
						batchInvalidateLabels: async () => {
							await k.batchInvalidate({
								queryKeysToPredicateInvalidate: [u.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, k)
				},
				_ = {
					getLabels: async E => {
						var C, L, S, k;
						let {
							zoneId: M,
							hideErrorAlert: y = !0
						} = E, D = i(E, ["zoneId", "hideErrorAlert"]);
						return (await f.get(p.labels.toUrl({
							zoneId: M
						}), {
							parameters: {
								page: D == null ? void 0 : D.page,
								per_page: D == null ? void 0 : D.per_page,
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts,
								filter: D == null || (C = D.filters) === null || C === void 0 ? void 0 : C.search,
								source: (0, n.sQ)(D == null || (L = D.filters) === null || L === void 0 ? void 0 : L.source),
								order: D == null || (S = D.sort) === null || S === void 0 ? void 0 : S.id,
								direction: (D == null ? void 0 : D.sort) ? (D == null || (k = D.sort) === null || k === void 0 ? void 0 : k.desc) ? c.Sr.desc : c.Sr.asc : void 0
							},
							hideErrorAlert: y
						})).body
					},
					getLabel: async E => {
						let {
							zoneId: C,
							labelName: L,
							hideErrorAlert: S = !0
						} = E, k = i(E, ["zoneId", "labelName", "hideErrorAlert"]);
						const M = (0, n.mm)(L) ? p.managedLabel.toUrl({
							zoneId: C,
							labelName: L
						}) : p.userLabel.toUrl({
							zoneId: C,
							labelName: L
						});
						return (await f.get(M, {
							parameters: {
								with_mapped_resource_counts: k == null ? void 0 : k.with_mapped_resource_counts
							},
							hideErrorAlert: S
						})).body
					},
					editLabel: async ({
						zoneId: E,
						label: C,
						replace: L
					}) => {
						const {
							name: S
						} = C, k = i(C, ["name"]);
						return (await (L ? f.put : f.patch)(p.userLabel.toUrl({
							zoneId: E,
							labelName: C.name
						}), {
							body: k
						})).body
					},
					deleteLabel: async ({
						zoneId: E,
						labelName: C
					}) => (await f.del(p.userLabel.toUrl({
						zoneId: E,
						labelName: C
					}))).body,
					createLabel: async E => {
						let {
							zoneId: C
						} = E, L = i(E, ["zoneId"]);
						const {
							product: S
						} = L, k = i(L, ["product"]);
						return (await f.post(p.userLabels.toUrl({
							zoneId: C
						}), {
							body: [k]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: E,
						user: C,
						managed: L,
						operationIds: S,
						replace: k
					}) => (await (k ? f.put : f.post)(p.operationsLinkedToLabels.toUrl({
						zoneId: E
					}), {
						body: o({}, C ? {
							user: {
								labels: C
							}
						} : {}, L ? {
							managed: {
								labels: L
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: S
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: E,
						labelName: C,
						operationIds: L
					}) => {
						const S = (0, n.mm)(C) ? p.managedLabelOperations.toUrl({
							zoneId: E,
							labelName: C
						}) : p.userLabelOperations.toUrl({
							zoneId: E,
							labelName: C
						});
						return (await f.put(S, {
							body: {
								selector: {
									include: {
										operation_ids: L
									}
								}
							}
						})).body
					}
				},
				T = {
					labels: E => {
						let {
							accountId: C,
							zoneId: L
						} = E, S = i(E, ["accountId", "zoneId"]);
						return [u.IQ.LABELS, C, L, ...(0, v.isEmpty)(S) ? [] : [S]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				DG: function() {
					return I
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return s
				},
				GE: function() {
					return L
				},
				IQ: function() {
					return u
				},
				KV: function() {
					return f
				},
				LABELS_LIST_TOASTS: function() {
					return g
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return o
				},
				V: function() {
					return T
				},
				W3: function() {
					return a
				},
				Yn: function() {
					return M
				},
				_8: function() {
					return i
				},
				_c: function() {
					return E
				},
				aW: function() {
					return P
				},
				dC: function() {
					return k
				},
				gY: function() {
					return C
				},
				j8: function() {
					return p
				},
				jz: function() {
					return m
				},
				n5: function() {
					return b
				},
				om: function() {
					return v
				},
				w: function() {
					return r
				},
				zF: function() {
					return S
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(y) {
				return y.EXPOSED_CREDENTIALS = "exposed_credentials", y.CONTENT_SCANNING = "content_scanning", y.FIREWALL_AI = "firewall_ai", y
			}({});
			const a = "all";
			let u = function(y) {
					return y.LABELS = "labels", y
				}({}),
				l = function(y) {
					return y.USER = "user", y.MANAGED = "managed", y
				}({}),
				f = function(y) {
					return y.SOURCE = "source", y
				}({}),
				s = function(y) {
					return y.NAME = "name", y.SOURCE = "source", y.NEW_LABEL_NAME = "newLabelName", y
				}({}),
				p = function(y) {
					return y.ENDPOINT = "endpoint", y.METHOD = "method", y.OPERATION_ID = "operationId", y
				}({}),
				v = function(y) {
					return y.NAME = "name", y.MAPPED_RESOURCES = "mapped_resources.operations", y.SOURCE = "source", y.APPLY = "apply", y
				}({});
			const i = {
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
						[f.SOURCE]: a
					}
				},
				filters: f,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					autoClearQs: !0
				}
			};
			let g = function(y) {
				return y.CREATED_LABEL = "createdLabel", y.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", y.DELETED_LABEL = "deletedLabel", y.APPLIED_LABEL = "appliedLabel", y.EDITED_LABEL = "editedLabel", y.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", y
			}({});
			const o = "650px",
				m = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				I = /^[A-Za-z0-9-]+$/,
				P = /^cf-/;
			let b = function(y) {
				return y.NAME = "name", y.DESCRIPTION = "description", y
			}({});
			const _ = "all";
			let T = function(y) {
				return y.METHOD = "method", y.HOSTNAME = "hostname", y
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
						[T.METHOD]: _,
						[T.HOSTNAME]: _
					}
				},
				filters: T
			};
			let C = function(y) {
				return y.TITLE = "title", y.DESCRIPTION = "description", y.SUBMIT = "submit", y
			}({});
			const L = 1e3,
				S = {
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
				k = "exposed-credentials-module",
				M = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return g
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
					return c
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return m
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return o
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
					return b.Xs
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
					return b.bH
				},
				Mb: function() {
					return a.Mb
				},
				ui: function() {
					return b.ui
				},
				P3: function() {
					return b.P3
				},
				Ri: function() {
					return b.Ri
				},
				cN: function() {
					return b.cN
				},
				m8: function() {
					return P
				},
				Tf: function() {
					return I
				},
				$E: function() {
					return a.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				a = t("../react/pages/security/settings/resources/utils.ts"),
				u = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(u);

			function f(_) {
				for (var T = 1; T < arguments.length; T++) {
					var E = arguments[T] != null ? Object(arguments[T]) : {},
						C = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(E).filter(function(L) {
						return Object.getOwnPropertyDescriptor(E, L).enumerable
					})), C.forEach(function(L) {
						s(_, L, E[L])
					})
				}
				return _
			}

			function s(_, T, E) {
				return T = p(T), T in _ ? Object.defineProperty(_, T, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = E, _
			}

			function p(_) {
				var T = v(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function v(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var E = _[Symbol.toPrimitive];
				if (E !== void 0) {
					var C = E.call(_, T || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			let n = function(_) {
					return _.LABELS_LIST = "Labels List page", _.LABELS_APPLY = "Labels Apply page", _.LABELS_SIDE_MODAL = "Labels Side Modal", _.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", _.LABELS_OPERATION_DETAILS = "Operation Details page", _
				}({}),
				c = function(_) {
					return _.API_SHIELD = "API Shield", _.SECURITY_SETTINGS = "Security Settings", _
				}({}),
				i = function(_) {
					return _.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", _.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", _.OPERATIONS_TABLE_ROW = "Operations table row", _.OPERATION_DETAILS_PAGE = "Operation details page", _
				}({}),
				g = function(_) {
					return _.UPSERT = "upsert", _.OVERWRITE = "overwrite", _
				}({}),
				o = function(_) {
					return _.SINGLE = "single", _.MULTIPLE = "multiple", _
				}({}),
				m = function(_) {
					return _.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", _.DELETE_LABEL = "delete a user label in the settings page", _.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", _.CREATE_LABEL_CLICKED = "click create label button in the settings page", _.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", _.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", _.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", _.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", _.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", _.OPEN_LABELS_SIDE_MODAL = "open labels side modal", _.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", _.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", _.CREATE_NEW_LABEL = "create a new label", _
				}({});
			const I = ({
					name: _,
					product: T,
					category: E = "user journey",
					pageName: C,
					from: L,
					write_strategy: S,
					type: k,
					target: M,
					selected: y
				}) => {
					l().sendEvent(_, f({
						category: E,
						pageName: C,
						product: T
					}, L ? {
						from: L
					} : {}, S ? {
						write_strategy: S
					} : {}, k ? {
						type: k
					} : {}, M ? {
						target: M
					} : {}, y ? {
						selected: y
					} : {}))
				},
				P = () => {
					var _;
					return (_ = Object.values(m)) === null || _ === void 0 ? void 0 : _.flat()
				};
			var b = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				P3: function() {
					return p
				},
				Ri: function() {
					return v
				},
				Xs: function() {
					return c
				},
				bH: function() {
					return n
				},
				cN: function() {
					return s
				},
				ui: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				a = t("../react/common/selectors/entitlementsSelectors.ts"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const f = i => {
					const g = (0, e.RO)(i),
						o = !!(0, a.rV)(i, "rulesets.file_upload_scan_allowed"),
						m = !!(0, a.BF)(i, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? g && (o || m) : m
				},
				s = i => Number((0, a.rV)(i, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				p = i => (0, a.rV)(i, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				v = i => (0, a.rV)(i, "rulesets.leaked_credential_checks_allowed"),
				n = i => (0, l.z1)(u.dC)(i) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, a.rV)(i, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				c = i => !!(0, l.z1)("deprecate-security-level")(i)
		},
		"../react/pages/security/settings/resources/types.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				T: function() {
					return r
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let r = function(a) {
				return a.ENABLED = "enabled", a.CONTACT = "contact", a.EXPIRES = "expires", a.ENCRYPTION = "encryption", a.ACKNOWLEDGMENTS = "acknowledgments", a.CANONICAL = "canonical", a.HIRING = "hiring", a.POLICY = "policy", a.PREFERRED_LANGUAGES = "preferred_languages", a.MODIFIED_ON = "modified_on", a
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$E: function() {
					return i
				},
				Mb: function() {
					return g
				},
				N2: function() {
					return T
				},
				Q4: function() {
					return m
				},
				QF: function() {
					return c
				},
				Vy: function() {
					return P
				},
				Wv: function() {
					return o
				},
				mm: function() {
					return _
				},
				sQ: function() {
					return b
				},
				vc: function() {
					return I
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				a = t("../react/pages/security/settings/routes.tsx"),
				u = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/pages/security/settings/resources/types.ts"),
				f = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(E) {
				for (var C = 1; C < arguments.length; C++) {
					var L = arguments[C] != null ? Object(arguments[C]) : {},
						S = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(L).filter(function(k) {
						return Object.getOwnPropertyDescriptor(L, k).enumerable
					})), S.forEach(function(k) {
						p(E, k, L[k])
					})
				}
				return E
			}

			function p(E, C, L) {
				return C = v(C), C in E ? Object.defineProperty(E, C, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : E[C] = L, E
			}

			function v(E) {
				var C = n(E, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function n(E, C) {
				if (typeof E != "object" || E === null) return E;
				var L = E[Symbol.toPrimitive];
				if (L !== void 0) {
					var S = L.call(E, C || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(E)
			}
			const c = {
					[l.T.ENABLED]: !0,
					[l.T.CONTACT]: [""],
					[l.T.EXPIRES]: ""
				},
				i = {
					[l.T.CONTACT]: {
						label: "security_txt.fields.contact",
						tooltip: "security_txt.fields.contact.description",
						placeholder: "security_txt.fields.contact.placeholder"
					},
					[l.T.EXPIRES]: {
						label: "security_txt.fields.expires",
						tooltip: "security_txt.fields.expires.description",
						placeholder: "security_txt.fields.expires.placeholder"
					},
					[l.T.ENCRYPTION]: {
						label: "security_txt.fields.encryption",
						tooltip: "security_txt.fields.encryption.description",
						placeholder: "security_txt.fields.encryption.placeholder"
					},
					[l.T.ACKNOWLEDGMENTS]: {
						label: "security_txt.fields.acknowledgements",
						tooltip: "security_txt.fields.acknowledgements.description",
						placeholder: "security_txt.fields.acknowledgements.placeholder"
					},
					[l.T.CANONICAL]: {
						label: "security_txt.fields.canonical",
						tooltip: "security_txt.fields.canonical.description",
						placeholder: "security_txt.fields.canonical.placeholder"
					},
					[l.T.POLICY]: {
						label: "security_txt.fields.policy",
						tooltip: "security_txt.fields.policy.description",
						placeholder: "security_txt.fields.policy.placeholder"
					},
					[l.T.HIRING]: {
						label: "security_txt.fields.hiring",
						tooltip: "security_txt.fields.hiring.description",
						placeholder: "security_txt.fields.hiring.placeholder"
					},
					[l.T.PREFERRED_LANGUAGES]: {
						label: "security_txt.fields.preferred_languages",
						tooltip: "security_txt.fields.preferred_languages.description",
						placeholder: "security_txt.fields.preferred_languages.placeholder"
					}
				},
				g = E => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(E("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, E("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(E("common.required")).min(new Date, E("security_txt.fields.expires.min_error"))
				}),
				o = E => {
					const C = {};
					for (const L in E) C[L] = Array.isArray(E[L]) ? E[L].filter(S => !!S) : E[L];
					return s({}, C, {
						expires: (0, f.DZ)(E.expires)
					})
				},
				m = (E, C, L) => {
					const S = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						k = Object.entries(E).sort(([M], [y]) => S.indexOf(M) - S.indexOf(y)).filter(([M, y]) => !!i[M] && !!y && (!Array.isArray(y) || !!y.length)).map(([M, y]) => Array.isArray(y) ? y.map(D => `${L(i[M].label)}: ${D}`).join(`
`) : `${L(i[M].label)}: ${y}`).join(`
`);
					(0, r.yH)(`Cloudflare_${C}_security.txt`, k, "text/plain;charset=utf-8")
				};
			let I = function(E) {
				return E.CREATED = "created security.txt", E.ENABLED = "enabled security.txt", E.DISABLED = "disabled security.txt", E.DOWNLOADED = "downloaded security.txt", E.UPDATED = "updated security.txt", E.DELETED = "deleted security.txt", E
			}({});
			const P = E => (E == null ? void 0 : E.source) === u.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (E == null ? void 0 : E.source) === u.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				b = E => E === u.W3 ? void 0 : E,
				_ = E => u.aW.test(E),
				T = E => {
					switch (E) {
						case u.w.CONTENT_SCANNING:
							return a.ROUTES.CONTENT_SCANNING;
						case u.w.EXPOSED_CREDENTIALS:
							return a.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Sb: function() {
					return v
				},
				Vj: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), g.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, c || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			const s = {
					SHOW_LCC_MIGRATION_BANNER: "show LCC migration banner",
					SHOW_LCC_MIGRATION_WARNING: "show LCC migration warning",
					CLICK_LCC_DOCUMENTATION: "click link to Leaked credentials detection documentation",
					CLICK_LCC_UPGRADE_GUIDE: "click link to Leaked credentials detection upgrade guide"
				},
				p = {
					product: "WAF Managed Rules"
				},
				v = ({
					event: n,
					category: c = "user journey",
					product: i = "waf",
					productName: g = "Managed Rules",
					additionalData: o
				}) => {
					r().sendEvent(n, a({
						category: c,
						product: i,
						productName: g
					}, o || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				D: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CLICK_MENU_ITEM_SHARE = "click on share item", r.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", r.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", r.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", r.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", r.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", r.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", r.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", r.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", r.CLICK_ON_DELETE_RULESET = "click on delete ruleset", r.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", r
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.IP_ADDRESS = "create spectrum app using IP address", r.CNAME = "create spectrum app using cname record", r.LB = "create spectrum app using load balancer", r.UPDATE_IP_ADDRESS = "update spectrum app using IP address", r.UPDATE_CNAME = "update spectrum app using cname record", r.UPDATE_LB = "update spectrum app using load balancer", r.DISABLE = "disable spectrum app", r
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				U: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ReplaceVideos = "stream.replace_videos", r.PrependVideo = "stream.prepend_video", r.UpdateVideo = "stream.update_video", r.UpdateVideoPending = "steam.update_video_pending", r.RemoveVideos = "stream.remove_videos", r.StoreUploader = "stream.store_uploader", r.UpsertUploads = "stream.upsert_uploads", r.RemoveUploads = "stream.remove_uploads", r.UpdateUploadProgress = "stream.update_upload_progress", r.UploadViaUrl = "stream.upload_via_url", r.SetLoading = "stream.set_loading", r.SetStorageLoading = "stream.set_storage_loading", r.SetStorage = "stream.set_storage", r.SetPage = "stream.set_page", r.SetPausedUploads = "stream.set_paused_uploads", r.RemovePausedUpload = "stream.remove_paused_upload", r.SetRequestTimestamp = "stream.set_request_timestamp", r.ResetState = "stream.reset_state", r
			}({})
		},
		"../react/pages/stream/reducer.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				ZP: function() {
					return n
				},
				nY: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				a = t("../react/pages/stream/util/pager.ts");

			function u(c) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						o = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && o.push.apply(o, Object.getOwnPropertySymbols(g).filter(function(m) {
						return Object.getOwnPropertyDescriptor(g, m).enumerable
					})), o.forEach(function(m) {
						l(c, m, g[m])
					})
				}
				return c
			}

			function l(c, i, g) {
				return i = f(i), i in c ? Object.defineProperty(c, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = g, c
			}

			function f(c) {
				var i = s(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function s(c, i) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var o = g.call(c, i || "default");
					if (typeof o != "object") return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			const p = "stream",
				v = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(c = v, i) {
				switch (i.type) {
					case r.U.ResetState:
						return v;
					case r.U.SetStorageLoading:
						const {
							storageLoading: g
						} = i;
						return u({}, c, {
							storageLoading: g
						});
					case r.U.SetStorage:
						return u({}, c, {
							storage: i.payload ? u({}, c.storage, i.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return u({}, c, {
							videos: i.videos
						});
					case r.U.PrependVideo:
						return u({}, c, {
							videos: [i.video, ...c.videos].filter((o, m) => m < a.FJ)
						});
					case r.U.UpdateVideo:
						return u({}, c, {
							videos: c.videos.map(o => o.uid === i.video.uid ? i.video : o)
						});
					case r.U.UpdateVideoPending:
						return u({}, c, {
							videoUpdateStatuses: u({}, c.videoUpdateStatuses, {
								[i.uid]: i.status
							})
						});
					case r.U.RemoveVideos:
						return u({}, c, {
							videos: c.videos.filter(o => !i.ids.includes(o.uid))
						});
					case r.U.SetLoading:
						return u({}, c, {
							loading: i.loading
						});
					case r.U.SetRequestTimestamp:
						return u({}, c, {
							requestTimestamp: i.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return c;
					default:
						return (0, e.h)(i, c)
				}
			}
		},
		"../react/pages/stream/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				C: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				a = (0, e.BC)`${r}/inputs`,
				u = (0, e.BC)`${r}/videos`,
				l = (0, e.BC)`${r}/analytics`,
				f = (0, e.BC)`${u}/${"videoId"}`,
				s = (0, e.BC)`${r}/video-transformations`,
				p = {
					root: r,
					inputs: a,
					configureInputs: (0, e.BC)`${a}/custom-hostnames`,
					videos: u,
					analytics: l,
					videoPage: f,
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
		"../react/pages/stream/selectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Id: function() {
					return u
				},
				OU: function() {
					return n
				},
				Pf: function() {
					return l
				},
				QL: function() {
					return p
				},
				_A: function() {
					return m
				},
				_Q: function() {
					return c
				},
				aM: function() {
					return o
				},
				bM: function() {
					return s
				},
				bO: function() {
					return i
				},
				bm: function() {
					return g
				},
				mX: function() {
					return I
				},
				pW: function() {
					return f
				},
				xW: function() {
					return v
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				a = t("../react/pages/stream/reducer.ts");
			const u = P => P[a.nY],
				l = P => u(P).videos,
				f = P => u(P).videoUpdateStatuses,
				s = P => u(P).loading,
				p = P => u(P).requestTimestamp,
				v = P => u(P).storageLoading,
				n = P => u(P).storage,
				c = P => (0, r.BF)(P, "stream.enabled") || (0, e.bC)(P),
				i = P => (0, e.Le)(P, "stream", "connect"),
				g = P => (0, e.Le)(P, "stream", "stream-4371"),
				o = P => (0, e.Le)(P, "stream", "public-details-enabled"),
				m = P => !!(0, e.Le)(P, "stream", "llhls"),
				I = P => {
					const b = n(P);
					return b !== void 0 && b.limitMins > b.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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

			function r(u, l, f) {
				const s = {
					search: f,
					limit: e.toString()
				};
				return l !== void 0 && (s.end = l), s
			}

			function a(u, l, f) {
				return {
					limit: e.toString(),
					search: f,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ARGO_ENABLEMENT = "change argo enablement", r.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", r.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", r
			}({})
		},
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				QK: function() {
					return s
				},
				WM: function() {
					return g
				},
				Zk: function() {
					return p
				},
				aB: function() {
					return v
				},
				eT: function() {
					return i
				},
				mm: function() {
					return n
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(o) {
				for (var m = 1; m < arguments.length; m++) {
					var I = arguments[m] != null ? Object(arguments[m]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(b) {
						return Object.getOwnPropertyDescriptor(I, b).enumerable
					})), P.forEach(function(b) {
						u(o, b, I[b])
					})
				}
				return o
			}

			function u(o, m, I) {
				return m = l(m), m in o ? Object.defineProperty(o, m, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[m] = I, o
			}

			function l(o) {
				var m = f(o, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function f(o, m) {
				if (typeof o != "object" || o === null) return o;
				var I = o[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(o, m || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(o)
			}
			let s = function(o) {
					return o.CREATE_BUTTON_CLICK = "click create load balancer", o.TOGGLE_STATUS = "load balancer toggle status", o.REVIEW_PAGE_CLICK = "click load balancer table review link", o.EDIT_CLICK = "click load balancer table edit button", o.DELETE_CLICK = "click load balancer table delete button", o
				}({}),
				p = function(o) {
					return o.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", o.EDIT_IP_CLICK = "click edit load balancer IP", o.EDIT_POOLS_CLICK = "click edit load balancer pools", o.EDIT_MONITORS_CLICK = "click edit load balancer monitors", o.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", o.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", o
				}({}),
				v = function(o) {
					return o.GO_TO_STEP = "click load balancer step", o.BACK_TO_STEP = "click load balancer back to step", o.SAVE = "save load balancer", o.SAVE_AS_DRAFT = "save load balancer as draft", o.SAVE_AND_DEPLOY = "save and deploy load balancer", o.NAVIGATION_CHANGE = "click load balancer wizard navigation link", o.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", o
				}({}),
				n = function(o) {
					return o.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", o
				}({});
			const i = Object.values({
					LOAD_BALANCERS_TABLE: s,
					REVIEW: p,
					WIZARD: v,
					USAGE: n
				}).flatMap(Object.values),
				g = (o, m) => r().sendEvent(o, a({
					category: "user journey",
					product: "load balancing"
				}, m))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Z: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_AND_DEPLOY = "create load balancer", r.ANALYTICS = "read analytics", r.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", r.POOL_TABLE = "click on expandable row on pool", r.CREATE_MONITOR_LINK = "click on create a monitor", r.EDIT_MONITOR_LINK = "click on edit a monitor", r.EDIT_MONITOR = "edit monitor", r.CREATE_MONITOR = "create monitor", r.CREATE_POOL_LINK = "click on create a pool", r.EDIT_POOL_LINK = "click on edit a pool", r.EDIT_POOL = "edit pool", r.CREATE_POOL = "create pool", r
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				N: function() {
					return a
				},
				X: function() {
					return u
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let a = function(l) {
				return l.CREATE = "create waiting room", l.UPDATE = "update waiting room", l.EVENTS = "view waiting rooms events", l.ANALYTICS = "view waiting room analytics", l.GENERATE_PREVIEW = "generate waiting room preview link", l
			}({});
			const u = async l => {
				await r().sendEvent(l, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				N3: function() {
					return p
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

			function a(c) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						o = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && o.push.apply(o, Object.getOwnPropertySymbols(g).filter(function(m) {
						return Object.getOwnPropertyDescriptor(g, m).enumerable
					})), o.forEach(function(m) {
						u(c, m, g[m])
					})
				}
				return c
			}

			function u(c, i, g) {
				return i = l(i), i in c ? Object.defineProperty(c, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : c[i] = g, c
			}

			function l(c) {
				var i = f(c, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function f(c, i) {
				if (typeof c != "object" || c === null) return c;
				var g = c[Symbol.toPrimitive];
				if (g !== void 0) {
					var o = g.call(c, i || "default");
					if (typeof o != "object") return o;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(c)
			}
			const s = "TURNSTILE";
			let p = function(c) {
				return c.OVERVIEW_PAGE = "view the overview page", c.LIST_OF_WIDGETS = "list of widgets", c.SOLVE_EVENTS = "list solve events", c.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", c.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", c.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", c.OPEN_DELETE_MODAL = "view the delete modal for one widget", c.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", c.DELETE_WIDGET = "delete successfully widgets", c.LIST_OF_HOSTNAMES = "list hostnames", c.OPEN_ADD_WIDGET_PAGE = "view page to add widget", c.FEEDBACK_ADD = "view Feedback Add", c.SAVE_WIDGET = "save widget", c.ROTATE_KEYS = "rotate keys", c.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", c.GET_WIDGETS = "get widget details", c.OPEN_ANALYTICS_PAGE = "view analytics page", c.ANALYTICS_DATA = "list the analytics data", c
			}({});
			const v = ({
					name: c,
					product: i = s,
					category: g = "user journey",
					page: o,
					additionalData: m = {}
				}) => {
					r().sendEvent(c, a({
						category: g,
						page: o,
						product: i
					}, m || {}))
				},
				n = () => {
					var c;
					return (c = Object.values(p)) === null || c === void 0 ? void 0 : c.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				E: function() {
					return p
				},
				Ky: function() {
					return v
				},
				RJ: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function a(n) {
				for (var c = 1; c < arguments.length; c++) {
					var i = arguments[c] != null ? Object(arguments[c]) : {},
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(o) {
						return Object.getOwnPropertyDescriptor(i, o).enumerable
					})), g.forEach(function(o) {
						u(n, o, i[o])
					})
				}
				return n
			}

			function u(n, c, i) {
				return c = l(c), c in n ? Object.defineProperty(n, c, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[c] = i, n
			}

			function l(n) {
				var c = f(n, "string");
				return typeof c == "symbol" ? c : String(c)
			}

			function f(n, c) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, c || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (c === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.BACK_BUTTON = "clicked back from user group detail", n.ADD_MEMBER_BUTTON = "click add member button", n.MEMBER_ADD = "add user group member", n.MEMBER_DETAIL_MENU = "click user group member detail menu", n.MEMBER_DETAIL_VIEW = "click view in user group member detail menu", n.MEMBER_DETAIL_EDIT = "click edit in user group member detail menu", n.MEMBER_DETAIL_DELETE = "click delete in user group member detail menu", n.MEMBER_DELETE = "delete user group member", n.MEMBER_DETAIL_DELETE_CANCEL = "click cancel delete user group member", n.ADD_POLICY_BUTTON = "click add user group policy button", n
			}({});
			const p = ({
					name: n,
					additionalData: c = {}
				}) => {
					r().sendEvent(n, a({}, c || {}))
				},
				v = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/pages/zone-versioning/selectors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$e: function() {
					return L
				},
				$h: function() {
					return _
				},
				G: function() {
					return C
				},
				M3: function() {
					return k
				},
				Tr: function() {
					return P
				},
				UY: function() {
					return m
				},
				bH: function() {
					return c
				},
				fv: function() {
					return M
				},
				hF: function() {
					return T
				},
				iw: function() {
					return g
				},
				m7: function() {
					return n
				},
				re: function() {
					return E
				},
				tp: function() {
					return o
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				a = t("../react/common/selectors/zoneSelectors.ts"),
				u = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function f(y) {
				for (var D = 1; D < arguments.length; D++) {
					var N = arguments[D] != null ? Object(arguments[D]) : {},
						x = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(N).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(N, Z).enumerable
					})), x.forEach(function(Z) {
						s(y, Z, N[Z])
					})
				}
				return y
			}

			function s(y, D, N) {
				return D = p(D), D in y ? Object.defineProperty(y, D, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[D] = N, y
			}

			function p(y) {
				var D = v(y, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function v(y, D) {
				if (typeof y != "object" || y === null) return y;
				var N = y[Symbol.toPrimitive];
				if (N !== void 0) {
					var x = N.call(y, D || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(y)
			}
			const n = y => (0, a.nA)(y) ? (0, l.p1)(y) && (0, u.$n)(y, "zone_versioning", "versioning") : !1,
				c = y => y.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", c),
				g = y => y.zoneVersioning.zoneVersions,
				o = (0, e.P1)("zoneVersions", g),
				m = (0, r.P1)(o, y => {
					if (y) return y.filter(D => D.status == "V")
				}),
				I = y => y.zoneVersioning.environments,
				P = y => y.zoneVersioning.environments.isRequesting,
				b = (0, e.P1)("environments", I),
				_ = (0, r.P1)(i, y => {
					if (y) {
						if (y.length === 1) return y[0];
						y.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${y.length}`))
					}
					return null
				}),
				T = (0, r.P1)(b, y => y ? y.environments : []),
				E = y => {
					var D;
					return (D = y.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				C = (0, r.P1)(E, o, (y, D) => {
					if (!(y == null ? void 0 : y.isVersion) || !D) return null;
					const N = D.find(x => {
						if (x.version === y.selectedVersion && x.locked) return !0
					});
					return N ? f({}, N, {
						isLocked: !0
					}) : null
				}),
				L = (0, r.P1)(o, T, (y, D) => !D || !y ? [] : y.map(N => {
					const x = [];
					for (const Z in D) D[Z].version === N.version && x.push(D[Z]);
					return f({}, N, {
						environments: x
					})
				})),
				S = y => y.zoneVersioning.WAFMigrationStatus,
				k = (0, e.P1)("WAFMigrationStatus", S),
				M = y => y.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				$2: function() {
					return S
				},
				CI: function() {
					return C
				},
				IS: function() {
					return s
				},
				L7: function() {
					return l
				},
				Lt: function() {
					return o
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return m
				},
				S6: function() {
					return k
				},
				X$: function() {
					return T
				},
				X6: function() {
					return v
				},
				d4: function() {
					return g
				},
				fE: function() {
					return p
				},
				im: function() {
					return b
				},
				lv: function() {
					return I
				},
				rL: function() {
					return n
				},
				wW: function() {
					return f
				}
			});

			function e(M) {
				for (var y = 1; y < arguments.length; y++) {
					var D = arguments[y] != null ? Object(arguments[y]) : {},
						N = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && N.push.apply(N, Object.getOwnPropertySymbols(D).filter(function(x) {
						return Object.getOwnPropertyDescriptor(D, x).enumerable
					})), N.forEach(function(x) {
						r(M, x, D[x])
					})
				}
				return M
			}

			function r(M, y, D) {
				return y = a(y), y in M ? Object.defineProperty(M, y, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[y] = D, M
			}

			function a(M) {
				var y = u(M, "string");
				return typeof y == "symbol" ? y : String(y)
			}

			function u(M, y) {
				if (typeof M != "object" || M === null) return M;
				var D = M[Symbol.toPrimitive];
				if (D !== void 0) {
					var N = D.call(M, y || "default");
					if (typeof N != "object") return N;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (y === "string" ? String : Number)(M)
			}
			const l = {
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
				s = "40rem",
				p = {
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
				c = {
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
					}, c),
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
				g = {
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
				o = {
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				m = {
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
				I = {
					insufficientData: "insufficient data to create/update trigger",
					createRepoConnectionError: "error creating repo connection",
					createTokenError: "error creating token",
					createUpdateTriggerError: "error creating/updating trigger",
					updateEnvironmentVariablesError: "error updating trigger environment variables",
					createWorkerError: "error creating worker",
					buildWorkerError: "error building worker",
					refreshWebhookError: "error refreshing gitlab webhook"
				},
				P = "workers.dev",
				b = "YYYY-MM-DD HH:mm:SS ZZ",
				_ = "active",
				T = ["bundled", "unbound", "standard"],
				E = null,
				C = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let L = function(M) {
				return M[M.NONE = 0] = "NONE", M[M.MISS = 1] = "MISS", M[M.EXPIRED = 2] = "EXPIRED", M[M.UPDATING = 3] = "UPDATING", M[M.STALE = 4] = "STALE", M[M.HIT = 5] = "HIT", M[M.IGNORED = 6] = "IGNORED", M[M.BYPASS = 7] = "BYPASS", M[M.REVALIDATED = 8] = "REVALIDATED", M[M.DYNAMIC = 9] = "DYNAMIC", M[M.STREAM_HIT = 10] = "STREAM_HIT", M[M.DEFERRED = 11] = "DEFERRED", M
			}({});
			const S = [L.HIT, L.STREAM_HIT];
			let k = function(M) {
				return M.SECRETS_STORE_ID = "store_id", M.SECRET_NAME = "secret_name", M
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Hv: function() {
					return s
				},
				L: function() {
					return a
				},
				Q9: function() {
					return u
				},
				_j: function() {
					return l
				},
				ky: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = p => `${p}.workers.dev`,
				a = (p, v, n) => `${n?`${n}.`:""}${p}.${r(v)}`,
				u = (p, v, n) => `https://${a(p,v,n)}`,
				l = {
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
					serviceDetailsIntegrationsFlow: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/${"integrationId"}/integrations-setup`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsTriggersV2: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings#domains`,
					serviceDetailsIntegrations: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/integrations`,
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
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`,
							getParameters: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/parameters/${"generationId"}`,
							generateParameters: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/parameters`
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				MN: function() {
					return a
				},
				Yg: function() {
					return l
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
			const a = async ([s, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: s,
					variables: p
				})
			})).body, u = async (...s) => (await e.get(...s)).body, l = s => async (p, v) => {
				const n = await fetch(p, v).then(c => c.json());
				return s.assertDecode(n)
			}, f = async (...s) => (await u(...s)).result;
			h.ZP = {
				fetcher: s => Array.isArray(s) ? f(...s) : f(s)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function($, h) {
				h()
			})(this, function() {
				"use strict";

				function $() {
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

					function u(I) {
						return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList" in I && "contains" in I.classList)
					}

					function l(I) {
						var P = I.type,
							b = I.tagName;
						return !!(b == "INPUT" && a[P] && !I.readOnly || b == "TEXTAREA" && !I.readOnly || I.isContentEditable)
					}

					function f(I) {
						I.getAttribute("is-focus-visible") !== "" && I.setAttribute("is-focus-visible", "")
					}

					function s(I) {
						I.getAttribute("is-focus-visible") === "" && I.removeAttribute("is-focus-visible")
					}

					function p(I) {
						u(document.activeElement) && f(document.activeElement), t = !0
					}

					function v(I) {
						t = !1
					}

					function n(I) {
						!u(I.target) || (t || l(I.target)) && f(I.target)
					}

					function c(I) {
						!u(I.target) || I.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), s(I.target))
					}

					function i(I) {
						document.visibilityState == "hidden" && (e && (t = !0), g())
					}

					function g() {
						document.addEventListener("mousemove", m), document.addEventListener("mousedown", m), document.addEventListener("mouseup", m), document.addEventListener("pointermove", m), document.addEventListener("pointerdown", m), document.addEventListener("pointerup", m), document.addEventListener("touchmove", m), document.addEventListener("touchstart", m), document.addEventListener("touchend", m)
					}

					function o() {
						document.removeEventListener("mousemove", m), document.removeEventListener("mousedown", m), document.removeEventListener("mouseup", m), document.removeEventListener("pointermove", m), document.removeEventListener("pointerdown", m), document.removeEventListener("pointerup", m), document.removeEventListener("touchmove", m), document.removeEventListener("touchstart", m), document.removeEventListener("touchend", m)
					}

					function m(I) {
						I.target.nodeName.toLowerCase() !== "html" && (t = !1, o())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", c, !0), document.addEventListener("visibilitychange", i, !0), g(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function h(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && h($)
			})
		},
		"../react/utils/bootstrap.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
					var l, f, s;
					return (l = window) === null || l === void 0 || (f = l.bootstrap) === null || f === void 0 || (s = f.data) === null || s === void 0 ? void 0 : s.security_token
				},
				r = () => {
					var l, f, s;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (f = l.data) === null || f === void 0 || (s = f.user) === null || s === void 0 ? void 0 : s.id)
				},
				a = () => {
					var l, f;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (f = l.data) === null || f === void 0 ? void 0 : f.is_kendo)
				},
				u = () => {
					var l, f, s, p;
					return (l = window) === null || l === void 0 || (f = l.bootstrap) === null || f === void 0 || (s = f.data) === null || s === void 0 || (p = s.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				O5: function() {
					return u
				},
				Xm: function() {
					return a
				},
				kT: function() {
					return s
				},
				wV: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var n;
					return ((n = window) === null || n === void 0 ? void 0 : n.OnetrustActiveGroups) || ""
				},
				a = () => (r() || "").indexOf("C0002") !== -1,
				u = () => (r() || "").indexOf("C0003") !== -1,
				l = () => (r() || "").indexOf("C0004") !== -1,
				f = () => (r() || "").indexOf("C0005") !== -1,
				s = n => {
					const c = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${c}`
				},
				p = () => {
					var n;
					const c = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (c == null ? void 0 : c.country) || ""
				},
				v = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				AI: function() {
					return T
				},
				Kd: function() {
					return c
				},
				S8: function() {
					return _
				},
				ZW: function() {
					return p
				},
				ay: function() {
					return E
				},
				fh: function() {
					return C
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
					return o
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				a = t("../../../common/intl/intl-types/src/index.ts"),
				u = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				f = t("../../../../node_modules/cookie/index.js");
			const s = "cf-sync-locale-with-cps",
				p = a.Q.en_US,
				v = "en_US",
				n = "cf-locale";

			function c() {
				const k = (0, f.parse)(document.cookie);
				return l.Z.get(n) || k[n] || null
			}

			function i(k) {
				document.cookie = (0, f.serialize)(n, k, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(n, k)
			}

			function g() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const o = k => (0, u.Yd)(a.Q).find(M => a.Q[M] === k) || v,
				m = [],
				I = [],
				P = [a.Q.de_DE, a.Q.en_US, a.Q.es_ES, a.Q.fr_FR, a.Q.it_IT, a.Q.pt_BR, a.Q.ko_KR, a.Q.ja_JP, a.Q.zh_CN, a.Q.zh_TW],
				b = {
					test: [...P, ...I, ...m],
					development: [...P, ...I, ...m],
					staging: [...P, ...I, ...m],
					production: [...P, ...I]
				},
				_ = k => {
					const M = a.Q[k];
					return b.production.includes(M)
				},
				T = () => Object.keys(a.Q).filter(k => _(k)),
				E = k => {
					const M = a.Q[k];
					return I.includes(M)
				},
				C = k => L[k],
				L = {
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
				S = r().locale();
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
			}), r().locale(S)
		},
		"../react/utils/translator.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				QT: function() {
					return o
				},
				Vb: function() {
					return p
				},
				Yi: function() {
					return n
				},
				ZP: function() {
					return s
				},
				_m: function() {
					return c
				},
				cC: function() {
					return i
				},
				oc: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				a = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				u = t.n(a),
				l = t("../flags.ts");
			const f = new r.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function s(m, ...I) {
				return f.t(m, ...I)
			}
			const p = f;

			function v(m, ...I) {
				return markdown(s(m, I))
			}

			function n(m) {
				if (Number(m) !== 0) {
					if (m % 86400 == 0) return s("time.num_days", {
						smart_count: m / 86400
					});
					if (m % 3600 == 0) return s("time.num_hours", {
						smart_count: m / 3600
					});
					if (m % 60 == 0) return s("time.num_minutes", {
						smart_count: m / 60
					})
				}
				return s("time.num_seconds", {
					smart_count: m
				})
			}

			function c(m, I) {
				return m in I ? I[m] : void 0
			}
			const i = a.Trans,
				g = a.I18n,
				o = a.useI18n
		},
		"../react/utils/url.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Ct: function() {
					return S
				},
				Fl: function() {
					return J
				},
				KT: function() {
					return G
				},
				NF: function() {
					return _
				},
				Nw: function() {
					return C
				},
				Pd: function() {
					return E
				},
				Uh: function() {
					return O
				},
				cm: function() {
					return I
				},
				e1: function() {
					return L
				},
				el: function() {
					return re
				},
				hW: function() {
					return ce
				},
				pu: function() {
					return ne
				},
				qR: function() {
					return Z
				},
				td: function() {
					return T
				},
				uW: function() {
					return Q
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				f = t("../react/pages/zoneless-workers/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				p = t("../react/pages/d1/routes.ts"),
				v = t("../react/pages/images/routes.ts");

			function n(B) {
				for (var V = 1; V < arguments.length; V++) {
					var te = arguments[V] != null ? Object(arguments[V]) : {},
						le = Object.keys(te);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(te).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(te, pe).enumerable
					})), le.forEach(function(pe) {
						c(B, pe, te[pe])
					})
				}
				return B
			}

			function c(B, V, te) {
				return V = i(V), V in B ? Object.defineProperty(B, V, {
					value: te,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = te, B
			}

			function i(B) {
				var V = g(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function g(B, V) {
				if (typeof B != "object" || B === null) return B;
				var te = B[Symbol.toPrimitive];
				if (te !== void 0) {
					var le = te.call(B, V || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			const {
				endsWithSlash: o
			} = a.default, m = new RegExp(/([0-9a-z]{32})/g), I = B => B == null ? void 0 : B.replace(m, ":id"), P = (B, V) => {
				const te = B.replace(o, "").split("/");
				return te.slice(0, 2).concat([V]).concat(te.slice(3)).join("/")
			}, b = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), _ = B => `/${B.replace(o,"").replace(/^\//,"")}`, T = B => C("add-site", B), E = B => C("billing", B), C = (B, V) => V ? `/${V}${B?`/${B}`:""}` : `/?to=/:account/${B}`, L = () => {
				const B = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return B ? B[1] : null
			}, S = (B, V) => r().stringify(n({}, r().parse(B), V)), k = (B = "") => B.toString().replace(/([\/]{1,})$/, ""), M = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], y = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, D = /^\/(\w{32,})(\/[^.]*)?/, N = B => M.includes(B), x = B => !N(B), Z = B => !N(B) && D.test(B), re = B => !N(B) && y.test(B), ge = B => y.exec(B), ce = B => {
				if (re(B)) return B.split("/").filter(V => V.length > 0)[1]
			}, K = B => D.exec(B), Q = B => {
				if (Z(B)) {
					const V = K(B);
					if (V) return V[1]
				}
			}, W = B => Z(B) && B.split("/")[2] === "register-domain", j = B => W(B) ? B.split("/") : null, A = B => {
				if (re(B)) {
					const [, , , V, te, le, pe, ue] = B.split("/");
					return V === "traffic" && te === "load-balancing" && le === "pools" && pe === "edit" && ue
				}
			}, O = B => {
				const V = j(B);
				if (V) return V[3]
			}, F = (B, V) => {
				var te, le;
				return ((te = B.pattern.match(/\:/g)) !== null && te !== void 0 ? te : []).length - ((le = V.pattern.match(/\:/g)) !== null && le !== void 0 ? le : []).length
			}, ee = [...Object.values(u.C), ...Object.values(v.KJ), ...Object.values(l._j), ...Object.values(f._j), ...Object.values(s._j), ...Object.values(p._)].sort(F);

			function J(B) {
				if (!x(B)) return B;
				for (const ue of ee)
					if (ue.expression.test(B)) return ue.pattern;
				const V = j(B);
				if (V) {
					const [, , ue, , ..._e] = V;
					return `/:accountId/${ue}/:domainName/${_e.join("/")}`
				}
				if (A(B)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const le = ge(B);
				if (le) {
					const [, , , , ue] = le;
					return `/:accountId/:zoneName${ue||""}`
				}
				const pe = K(B);
				if (pe) {
					const [, , ue] = pe;
					return `/:accountId${ue||""}`
				}
				return B
			}

			function ne(B) {
				if (!!B) try {
					const te = B.split(".").pop();
					if (te && te.length > 0) return te
				} catch {}
			}

			function G(B, V = document.location.href) {
				try {
					const te = new URL(B),
						le = new URL(V);
					if (te.origin === le.origin) return `${te.pathname}${te.search}${te.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				r: function() {
					return s
				},
				y: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(u);
			const f = /^\/domainconnect\/v2\/domaintemplates\//i,
				s = "domain-connect-redirect",
				p = () => {
					const v = (0, u.useLocation)();
					(0, e.useEffect)(() => {
						f.test(v.pathname) && a.Z.set(s, v, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = t("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				P: function() {
					return u
				},
				b: function() {
					return l
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function a() {
				var f, s, p, v, n, c;
				return (f = window) === null || f === void 0 || (s = f.bootstrap) === null || s === void 0 || (p = s.data) === null || p === void 0 || (v = p.user) === null || v === void 0 || (n = v.betas) === null || n === void 0 || (c = n.some) === null || c === void 0 ? void 0 : c.call(n, i => i === "zone_level_access_beta")
			}

			function u() {
				const f = !!(0, e.Z)("zone-level-access");
				return a() || f
			}

			function l(f) {
				const s = !!(0, r.z1)("zone-level-access")(f);
				return a() || s
			}
		},
		"../utils/getDashVersion.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				p: function() {
					return a
				},
				t: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var u, l;
					return (u = window) === null || u === void 0 || (l = u.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				a = () => {
					var u;
					return ((0, e.parse)((u = document) === null || u === void 0 ? void 0 : u.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Wi: function() {
					return Pt
				},
				IM: function() {
					return xt
				},
				yV: function() {
					return At
				},
				Ug: function() {
					return Ft
				},
				v_: function() {
					return yt
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				a = t("../react/utils/bootstrap.ts"),
				u = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				f = t("../flags.ts"),
				s = t("../../../../node_modules/cookie/index.js"),
				p = t("../react/utils/url.ts"),
				v = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				c = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				g = t("../utils/getDashVersion.ts"),
				o = t("../react/common/selectors/accountSelectors.ts"),
				m = t("../react/common/selectors/entitlementsSelectors.ts"),
				I = t("../react/common/utils/getEnvironment.ts");

			function P(ae) {
				for (var d = 1; d < arguments.length; d++) {
					var w = arguments[d] != null ? Object(arguments[d]) : {},
						H = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(w).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(w, ie).enumerable
					})), H.forEach(function(ie) {
						b(ae, ie, w[ie])
					})
				}
				return ae
			}

			function b(ae, d, w) {
				return d = _(d), d in ae ? Object.defineProperty(ae, d, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ae[d] = w, ae
			}

			function _(ae) {
				var d = T(ae, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function T(ae, d) {
				if (typeof ae != "object" || ae === null) return ae;
				var w = ae[Symbol.toPrimitive];
				if (w !== void 0) {
					var H = w.call(ae, d || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(ae)
			}
			const E = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				C = (0, c.Z)(ae => {
					try {
						return E.assertDecode((0, s.parse)(ae))
					} catch (d) {
						return console.error(d), {}
					}
				}),
				L = ae => (d, w, H) => {
					try {
						const We = window.location.pathname,
							Ze = (0, u.bh)().getState(),
							rt = C(document.cookie),
							ut = P({
								page: (0, p.Fl)(H.page || window.location.pathname),
								dashVersion: (0, g.t)(),
								environment: (0, I.Z)()
							}, rt);
						if (d === "identify") {
							var ie, we;
							const Je = {
								gates: (0, i.T2)(Ze) || {},
								country: (ie = t.g) === null || ie === void 0 || (we = ie.bootstrap) === null || we === void 0 ? void 0 : we.ip_country
							};
							return ae(d, w, P({}, ut, Je, H))
						} else {
							const Je = {
								accountId: (0, p.uW)(We),
								zoneName: (0, p.hW)(We),
								domainName: (0, p.Uh)(We)
							};
							if ((0, p.qR)(We)) {
								var xe;
								const ze = (0, o.D0)(Ze);
								Je.isEntAccount = !!(ze == null || (xe = ze.meta) === null || xe === void 0 ? void 0 : xe.has_enterprise_zones) || (0, m.p1)(Ze)
							}
							if ((0, p.el)(We)) {
								var Ge;
								const ze = (0, v.nA)(Ze);
								Je.zoneId = ze == null ? void 0 : ze.id, Je.plan = ze == null || (Ge = ze.plan) === null || Ge === void 0 ? void 0 : Ge.legacy_id
							}
							return ae(d, w, P({}, ut, Je, H))
						}
					} catch (We) {
						return console.error(We), ae(d, w, H)
					}
				},
				S = ae => async (d, w, H) => {
					try {
						return await ae(d, w, H)
					} catch (ie) {
						if (console.error(ie), !yt()) throw ie;
						return {
							status: "rejected",
							reason: ie
						}
					}
				};
			var k = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				M = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				y = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				D = t("../react/common/middleware/sparrow/errors.ts"),
				N = t("../react/pages/caching/tracking.tsx"),
				x = t("../react/pages/home/domain-registration/tracking.ts"),
				Z = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				re = t("../react/pages/hyperdrive/tracking.ts"),
				ge = t("../react/pages/magic/overview/tracking.ts"),
				ce = t("../react/pages/magic/packet-captures/constants.ts"),
				K = t("../react/pages/page-rules/tracking.ts"),
				Q = t("../react/pages/pages/constants.ts"),
				W = t("../react/pages/pipelines/tracking.ts"),
				j = t("../react/pages/security-center/BlockedContent/constants.ts"),
				A = t("../react/pages/security-center/tracking.ts"),
				O = t("../react/pages/security/api-shield/tracking.ts"),
				F = t("../react/pages/security/bots/tracking.ts"),
				ee = t("../react/pages/security/resources/constants.tsx"),
				J = t("../react/pages/security/page-shield/resources/index.ts"),
				ne = t("../react/pages/home/configurations/lists/tracking.ts"),
				G = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				B = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				V = t("../react/pages/home/alerts/tracking.ts"),
				te = t("../react/pages/dns/dns-records/tracking.ts"),
				le = t("../react/pages/magic/network-monitoring/constants.ts"),
				pe = t("../react/pages/security/settings/index.tsx"),
				ue = t("../react/pages/shared-config/sparrowEvents.tsx"),
				_e = t("../react/pages/spectrum/tracking.tsx"),
				be = t("../react/pages/traffic/argo/tracking.ts"),
				Te = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Le = t("../react/pages/turnstile/tracking.ts"),
				Ee = t("../react/pages/zoneless-workers/constants.ts"),
				De = t("../react/app/components/AccountHome/tracking.ts"),
				Me = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Qe = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				Xe = t("../react/pages/user-groups/sparrowEvents.ts"),
				Y = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				ve = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				Pe = t("../react/pages/security/overview/resources/constants.ts"),
				$e = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				Ye = t("../react/pages/secrets-store/resources/constants.ts"),
				Re = t("../react/pages/profile/tracking.ts");
			const qe = ((ae, d, ...w) => n.eg.union([n.eg.literal(ae), n.eg.literal(d), ...w.map(H => n.eg.literal(H))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", De.gX.SPARROW_PROJECTS_TABLE_CLICK, De.gX.SPARROW_EMPTY_STATE_CTA_CLICK, De.gX.SPARROW_PRODUCT_CARD_CLICK, De.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, De.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, De.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, De.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, De.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, De.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, De.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ee.QV.clickedDownloadAnalytics, Ee.QV.clickedPrintAnalytics, Ee.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ee.QV.addWCITriggerToExistingWorker, Ee.QV.updateWCITrigger, Ee.QV.deleteWCITrigger, Ee.QV.addWCITriggerToNewWorker, Ee.QV.createWCIBuildForNewWorker, Ee.QV.completedWCIBuildForNewWorker, Ee.QV.changedDefaultConfigurations, Ee.QV.clickElement, Q.QV.toggledPagesSmartPlacement, Q.QV.downloadDemoProject, Ee.QV.clickCreateWorkerFromRepoNextStep, Ee.QV.clickCreateWorkerFromRepoPreviousStep, Ee.QV.clickCreateNewSCMConnection, Ee.QV.redirectFromSCMOAuth, Ee.QV.clickSubmitError, Ee.QV.selectTemplate, Ee.QV.clickedListTemplates, Ee.QV.clickedImportRepository, Ee.QV.clickedClonePublicRepositoryFromUrl, Ee.QV.templateStubWorkerCreated, Ee.QV.templateStubWorkerCreationFailed, Ee.QV.templateRepositoryCreated, Ee.QV.templateRepositoryCreationFailed, Ee.QV.copyTemplateC3Command, Ee.QV.templateDeployClick, Ee.QV.reauthenticateGithubModalShown, Ee.QV.updateGithubPermissionsClicked, Ee.QV.D2W_importRepository, Ee.QV.D2W_stubWorkerCreated, Ee.QV.D2W_stubWorkerCreationFailed, Ee.QV.D2W_repositoryCreated, Ee.QV.D2W_repositoryCreationFailed, Ee.QV.D2W_resourcesProvisioned, Ee.QV.D2W_resourceProvisioningFailed, Ee.QV.D2W_githubAPIRateLimitReached, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", F.N3.INITIAL_FETCH_SCORES, F.N3.FETCH_CONFIGURATION, F.N3.INITIAL_FETCH_TIME_SERIES, F.N3.INITIAL_FETCH_ATTRIBUTES, F.N3.UPDATE_SETTINGS, F.N3.DELETE_RULE, F.N3.UPDATE_RULE, F.N3.FETCH_RULES, F.N3.CONFIGURE_BOT_MANAGEMENT, F.N3.WAF_RULES_REDIRECT, Z.F.TOGGLE_TCP_PROTECTION, Z.F.GET_TCP_PROTECTION_PREFIXES, Z.F.CREATE_TCP_PROTECTION_PREFIXES, Z.F.CREATE_TCP_PROTECTION_PREFIX, Z.F.UPDATE_TCP_PROTECTION_PREFIX, Z.F.DELETE_TCP_PROTECTION_PREFIX, Z.F.DELETE_TCP_PROTECTION_PREFIXES, Z.F.GET_TCP_PROTECTION_ALLOWLIST, Z.F.CREATE_TCP_PROTECTION_ALLOWLIST, Z.F.UPDATE_TCP_PROTECTION_ALLOWLIST, Z.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, Z.F.DELETE_TCP_PROTECTION_ALLOWLIST, Z.F.GET_SYN_PROTECTION_RULES, Z.F.GET_SYN_PROTECTION_RULE, Z.F.CREATE_SYN_PROTECTION_RULE, Z.F.UPDATE_SYN_PROTECTION_RULE, Z.F.DELETE_SYN_PROTECTION_RULE, Z.F.GET_TCP_FLOW_PROTECTION_RULES, Z.F.GET_TCP_FLOW_PROTECTION_RULE, Z.F.CREATE_TCP_FLOW_PROTECTION_RULE, Z.F.UPDATE_TCP_FLOW_PROTECTION_RULE, Z.F.DELETE_TCP_FLOW_PROTECTION_RULE, Z.F.GET_SYN_PROTECTION_FILTERS, Z.F.GET_SYN_PROTECTION_FILTER, Z.F.CREATE_SYN_PROTECTION_FILTER, Z.F.UPDATE_SYN_PROTECTION_FILTER, Z.F.DELETE_SYN_PROTECTION_FILTER, Z.F.GET_TCP_FLOW_PROTECTION_FILTERS, Z.F.GET_TCP_FLOW_PROTECTION_FILTER, Z.F.CREATE_TCP_FLOW_PROTECTION_FILTER, Z.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, Z.F.DELETE_TCP_FLOW_PROTECTION_FILTER, Z.F.GET_DNS_PROTECTION_RULES, Z.F.GET_DNS_PROTECTION_RULE, Z.F.CREATE_DNS_PROTECTION_RULE, Z.F.UPDATE_DNS_PROTECTION_RULE, Z.F.DELETE_DNS_PROTECTION_RULE, J.FV.MANAGE_PAGE_SHIELD_POLICY, J.FV.CONFIGURE_PAGE_SHIELD, J.FV.VIEW_DETECTED_CONNECTIONS, J.FV.VIEW_DETECTED_SCRIPTS, J.FV.VIEW_PAGE_SHIELD_POLICIES, J.FV.VIEW_PAGE_SHIELD_SETTINGS, J.FV.OPEN_MUTABLE_VERSION_TOOLTIP, J.FV.SHOW_MUTABLE_VERSION_TOOLTIP, ne.y.CREATE_LIST, ne.y.DELETE_LIST, ne.y.ADD_LIST_ITEM, ne.y.DELETE_LIST_ITEM, re.KO.PURCHASE_WORKERS_PAID, re.KO.LIST_CONFIGS, re.KO.SEARCH_CONFIGS, re.KO.CREATE_HYPERDRIVE_CONFIG, re.KO.VIEW_CONFIG_DETAILS, re.KO.UPDATE_CACHING_SETTINGS, re.KO.DELETE_HYPERDRIVE_CONFIG, re.KO.CLICK_HYPERDRIVE_DOCUMENTATION, re.KO.CLICK_GET_STARTED_GUIDE, re.KO.CLICK_CONNECTIVITY_GUIDES, re.KO.CLICK_QUICK_LINK, re.KO.CLICK_DISCORD, re.KO.CLICK_COMMUNITY, _e.N.CNAME, _e.N.IP_ADDRESS, _e.N.LB, _e.N.UPDATE_CNAME, _e.N.UPDATE_IP_ADDRESS, _e.N.UPDATE_LB, _e.N.DISABLE, N.N.TIERED_CACHE, N.N.CACHE_PURGE, N.N.CACHE_ANALYTICS, ...(0, Le.P)(), ...(0, y.x4)(), ...(0, pe.m8)(), ...(0, Xe.Ky)(), ...(0, Y.Cf)(), Te.N.CREATE, Te.N.EVENTS, Te.N.ANALYTICS, Te.N.UPDATE, Te.N.GENERATE_PREVIEW, A.RY.INITIATE_URL_SCAN, A.RY.LOAD_SCAN_INFO, A.Ev.LOAD_THREAT_EVENTS, A.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, A.Ev.THREAT_EVENTS_FILTERS, A.Ev.ABUSE_REPORT_BUTTON_CLICK, A.Ev.ABUSE_REPORT_SUBMIT_CLICK, A.Ev.ABUSE_REPORT_SUBMIT_FAILED, A.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, A.v9.EXPAND_INSIGHT_ROW, A.v9.ONE_CLICK_RESOLVE_BUTTON, A.v9.FOLLOW_RESOLVE_URL, A.v9.MANAGE_INSIGHT, A.v9.CLICK_SCAN_NOW, A.v9.CLICK_EXPORT_INSIGHTS, A.v9.BULK_ARCHIVE, A.v9.CLICK_DETAILS_BUTTON, O.Fj[O.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, O.Fj[O.kq.ENDPOINT_MANAGEMENT].detailedMetrics, O.Fj[O.kq.ENDPOINT_MANAGEMENT].createEndpoint, O.Fj[O.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, O.Fj[O.kq.ENDPOINT_MANAGEMENT].deployRouting, O.Fj[O.kq.ENDPOINT_MANAGEMENT].deleteRouting, O.Fj[O.kq.API_DISCOVERY].viewDiscoveredEndpoints, O.Fj[O.kq.API_DISCOVERY].saveDiscoveredEndpoint, O.Fj[O.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, O.Fj[O.kq.SCHEMA_VALIDATION].viewSchemasList, O.Fj[O.kq.SCHEMA_VALIDATION].uploadSchema, O.Fj[O.kq.SCHEMA_VALIDATION].viewSchemaAdoption, O.Fj[O.kq.SCHEMA_VALIDATION].downloadSchema, O.Fj[O.kq.SCHEMA_VALIDATION].deleteSchema, O.Fj[O.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, O.Fj[O.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, O.Fj[O.kq.SEQUENCE_ANALYTICS].viewSequencesPage, O.Fj[O.kq.JWT_VALIDATION].viewJWTRules, O.Fj[O.kq.JWT_VALIDATION].addJWTRule, O.Fj[O.kq.JWT_VALIDATION].editJWTRule, O.Fj[O.kq.JWT_VALIDATION].deleteJWTRule, O.Fj[O.kq.JWT_VALIDATION].reprioritizeJWTRule, O.Fj[O.kq.JWT_VALIDATION].viewJWTConfigs, O.Fj[O.kq.JWT_VALIDATION].addJWTConfig, O.Fj[O.kq.JWT_VALIDATION].editJWTConfig, O.Fj[O.kq.JWT_VALIDATION].deleteJWTConfig, O.Fj[O.kq.SETTINGS].redirectToFirewallRulesTemplate, O.Fj[O.kq.SETTINGS].redirectToPages, O.Fj[O.kq.SETTINGS].listSessionIdentifiers, O.Fj[O.kq.SETTINGS].listRequestsContainingSessionIdentifiers, O.Fj[O.kq.SETTINGS].addOrRemoveSessionIdentifiers, O.Fj[O.kq.SETTINGS].redirectToCustomRules, O.Fj[O.kq.SETTINGS].listAllFallthroughSchemas, O.Fj[O.kq.SEQUENCE_RULES].listSequenceRules, O.Fj[O.kq.SEQUENCE_RULES].deleteSequenceRule, O.Fj[O.kq.SEQUENCE_RULES].reorderSequenceRule, O.Fj[O.kq.SEQUENCE_RULES].createSequenceRule, O.Fj[O.kq.SEQUENCE_RULES].editSequenceRule, G.Z.ANALYTICS, G.Z.CREATE_AND_DEPLOY, G.Z.CREATE_MONITOR_LINK, G.Z.CREATE_MONITOR, G.Z.CREATE_POOL_LINK, G.Z.CREATE_POOL, G.Z.EDIT_MONITOR, G.Z.EDIT_POOL, G.Z.LOAD_BALANCING_TABLE, G.Z.POOL_TABLE, G.Z.EDIT_MONITOR_LINK, G.Z.EDIT_POOL_LINK, ...B.eT, V.y.SECONDARY_DNS_NOTIFICATION_CREATE, V.y.SECONDARY_DNS_NOTIFICATION_UPDATE, V.y.SECONDARY_DNS_NOTIFICATION_DELETE, te.U.ZONE_TRANSFER_SUCCESS, te.U.DNS_RECORD_CREATE, te.U.DNS_RECORD_UPDATE, te.U.DNS_RECORD_DELETE, Qe.Y.PEER_DNS_CREATE, Qe.Y.PEER_DNS_UPDATE, Qe.Y.PEER_DNS_DELETE, Qe.Y.ZONE_TRANSFER_ENABLE, Qe.Y.ZONE_TRANSFER_DISABLE, be.V.ARGO_ENABLEMENT, be.V.ARGO_GEO_ANALYTICS_FETCH, be.V.ARGO_GLOBAL_ANALYTICS_FETCH, ce.X.VIEW_BUCKETS_LIST, ce.X.CREATE_BUCKET, ce.X.VALIDATE_BUCKET, ce.X.DELETE_BUCKET, ce.X.VIEW_CAPTURES_LIST, ce.X.CREATE_SIMPLE_CAPTURE, ce.X.CREATE_FULL_CAPTURE, ce.X.VIEW_FULL_CAPTURE, ce.X.DOWNLOAD_SIMPLE_CAPTURE, le.bK.VIEW_RULES, le.bK.CREATE_RULE, le.bK.UPDATE_RULE, le.bK.DELETE_RULE, le.bK.VIEW_CONFIGURATION, le.bK.CREATE_CONFIGURATION, le.bK.UPDATE_CONFIGURATION, le.bK.DELETE_CONFIGURATION, ge.r8.VIEW_ALERTS, ge.r8.VIEW_ALERTS_HISTORY, ge.r8.MAGIC_OVERVIEW_ANALYTICS, ge.VZ.CREATE_SITE, ge.VZ.CREATE_TUNNEL, ge.VZ.CREATE_STATIC_ROUTE, $e.DC.CLICK_ADAPTIVE_SAMPLING, $e.DC.CLICK_TO_LOG_EXPLORER_BANNER, $e.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, $e.DC.CLICK_SWITCH_TO_RAW_LOGS, $e.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", x.U.REGISTER_DOMAIN_SEARCH_SUBMIT, x.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, x.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, x.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, x.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, x.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, x.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, x.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, x.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, x.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, x.U.REGISTER_DOMAIN_CHECKOUT_ERROR, x.U.TRANSFER_DOMAIN_CHANGE_STEP, x.U.RENEW_DOMAIN_COMPLETED, x.U.RESTORE_DOMAIN_INIT, x.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, x.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, x.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, x.U.RESTORE_DOMAIN_FAILURE, x.U.RESTORE_DOMAIN_COMPLETED, x.U.DOMAIN_DELETE_INIT, x.U.DOMAIN_DELETE_COMPLETED, x.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, x.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, x.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, x.U.DOMAIN_DELETE_CONFIRM_DELETE, x.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, x.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, x.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, x.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, x.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, x.U.DOMAIN_MOVE_START_FLOW, x.U.DOMAIN_MOVE_OPEN_DOCS, x.U.DOMAIN_MOVE_CLOSE_FLOW, x.U.DOMAIN_MOVE_PROGRESS_FLOW, x.U.DOMAIN_MOVE_SUBMIT, x.U.DOMAIN_MOVE_INITIATE_SUCCESS, x.U.DOMAIN_MOVE_INITIATE_ERROR, x.U.DOMAIN_MOVE_CANCEL, x.U.DOMAIN_MOVE_CANCEL_SUCCESS, x.U.DOMAIN_MOVE_CANCEL_ERROR, x.U.ACTION_CENTER_NAVIGATE, x.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, x.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, x.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, Ye.z3.CREATE_SECRET, Ye.z3.DELETE_SECRET, Ye.z3.BIND_SECRET, Ye.z3.DUPLICATE_SECRET, Ye.z3.EDIT_SECRET, W.KO.CLICK_GET_STARTED_GUIDE, W.KO.CLICK_PIPELINE_DOCUMENTATION, W.KO.CLICK_QUICK_LINK, W.KO.CREATE_PIPELINE, W.KO.DELETE_PIPELINE, W.KO.LIST_PIPELINES, W.KO.VIEW_PIPELINE, k.S.EXISTING_DOMAIN, k.S.NEW_DOMAIN, k.S.WAF_RULESET, k.S.WORKERS, k.S.PAGES, k.S.R2, k.S.ACCOUNT_MEMBERS, K._.TEMPLATE_PRODUCT_SELECTED, K._.TEMPLATE_SELECTED, K._.TEMPLATE_SAVE_DRAFT, K._.TEMPLATE_CANCEL, K._.TEMPLATE_DEPLOY, ue.D.CLICK_GO_BACK_SHARE_MODAL, ue.D.CLICK_MENU_ITEM_SHARE, ue.D.CLICK_ON_CANCEL_SHARE_MODAL, ue.D.CLICK_ON_CLOSE_SHARE_MODAL, ue.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, ue.D.CLICK_ON_DELETE_RULESET, ue.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, ue.D.CLICK_ON_EDIT_SHARE_PERMISSION, ue.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, ue.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, ue.D.CLICK_ON_SHARE_TABLE_ROW, ee.pR.CLICK_GEOGRAPHICAL_TEMPLATE, ee.pR.CLICK_IP_TEMPLATE, ee.pR.CLICK_USER_AGENT_TEMPLATE, ee.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, pe.vc.CREATED, pe.vc.ENABLED, pe.vc.DISABLED, pe.vc.DELETED, pe.vc.UPDATED, pe.vc.DOWNLOADED, j.Gk.REQUEST_REVIEW, j.Gk.COPY_URL, M.v.FIELD, M.v.OPERATOR, Me.Vj.SHOW_LCC_MIGRATION_BANNER, Me.Vj.CLICK_LCC_DOCUMENTATION, Me.Vj.CLICK_LCC_UPGRADE_GUIDE, Me.Vj.SHOW_LCC_MIGRATION_WARNING, ve.y.CLICK_DISMISS_INELIGIBILITY, ve.y.CLICK_NEXT_STEP, ve.y.CLICK_OPT_IN, ve.y.CLICK_OPT_IN_BUTTON, ve.y.CLICK_OPT_OUT_BUTTON, ve.y.DISPLAY_MODAL, ve.y.DISPLAY_OPT_OUT_MODAL, ve.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, ve.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Pe.AZ.LOAD_INSIGHTS, Pe.AZ.OPEN_SIDE_MODAL_INSIGHT, Pe.AZ.CLOSE_SIDE_MODAL_INSIGHT, Pe.AZ.CLICK_ACTION_INSIGHT, $e.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, $e.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, $e.DC.OPEN_SIDE_DRAWER, $e.DC.CLOSE_SIDE_DRAWER, Re.QV[Re.Xn].clickLoginFromMobileApp2fa, Re.QV[Re.Xn].clickTryOther2FAMethodOrBackupCode, Re.QV[Re.Xn].clickTryRecovery, Re.QV[Re.xq].clickRegenerateBackupCodes),
				st = n.eg.exactStrict(n.eg.object({
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
				X = (ae, d) => {
					const [w, H] = de(d);
					let ie, we;
					return (0, n.nM)(qe.decode(ae)) && (ie = new D.Uh(ae)), H && H.length > 0 && (we = new D.oV(ae, H)), [w, ie, we]
				},
				de = ae => {
					const d = st.decode(ae);
					if ((0, n.nM)(d)) {
						const w = d.left.map(({
							context: H
						}) => H.map(({
							key: ie
						}) => ie)).reduce((H, ie) => H.concat(ie), []).filter(H => H in ae);
						return [ye(w, ae), w]
					}
					return [ae, []]
				},
				ye = (ae, d) => Object.entries(d).reduce((w, [H, ie]) => (ae.includes(H) || (w[H] = ie), w), {}),
				je = ae => (d, w, H) => {
					const [ie, we, xe] = X(w, H);
					if (we) throw we;
					return xe && console.error(xe), ae(d, w, ie)
				};
			var Ae = t("../react/utils/zaraz.ts");
			const he = {
					identify: !0
				},
				Ne = ae => (d, w, H) => (he[w] || Ae.tg === null || Ae.tg === void 0 || Ae.tg.track(w, H), ae(d, w, H));
			var gt = t("../react/common/selectors/userSelectors.ts"),
				et = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function at(ae) {
				for (var d = 1; d < arguments.length; d++) {
					var w = arguments[d] != null ? Object(arguments[d]) : {},
						H = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(w).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(w, ie).enumerable
					})), H.forEach(function(ie) {
						ft(ae, ie, w[ie])
					})
				}
				return ae
			}

			function ft(ae, d, w) {
				return d = vt(d), d in ae ? Object.defineProperty(ae, d, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ae[d] = w, ae
			}

			function vt(ae) {
				var d = Lt(ae, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function Lt(ae, d) {
				if (typeof ae != "object" || ae === null) return ae;
				var w = ae[Symbol.toPrimitive];
				if (w !== void 0) {
					var H = w.call(ae, d || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(ae)
			}
			const Ue = new Set(["cf_argo", "load_balancing_basic_plus"]),
				ct = new Set(["pro", "business"]),
				Ke = ({
					price: ae,
					ratePlanId: d,
					ratePlanName: w,
					frequency: H,
					isNewSubscription: ie
				}) => ({
					event: "purchase",
					new_subscription: ie,
					ecommerce: {
						transaction_id: (0, et.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: ae
					},
					items: [{
						item_id: d,
						item_name: w || d,
						frequency: H,
						price: ae
					}]
				}),
				tt = ae => {
					const {
						price: d,
						frequency: w,
						plan: H,
						ratePlanId: ie,
						ratePlanName: we
					} = ae;
					return ct.has(H) ? at({}, Ke({
						price: d,
						ratePlanId: ie,
						ratePlanName: we,
						frequency: w,
						isNewSubscription: !0
					}), {
						label: H
					}) : void 0
				},
				lt = ae => {
					const {
						price: d,
						frequency: w,
						ratePlan: H,
						ratePlanName: ie
					} = ae;
					return Ue.has(H) ? at({}, Ke({
						price: d,
						ratePlanId: H,
						ratePlanName: ie,
						frequency: w,
						isNewSubscription: !0
					}), {
						label: H
					}) : void 0
				},
				U = ae => {
					const {
						price: d,
						frequency: w,
						plan: H,
						ratePlanId: ie,
						ratePlanName: we,
						label: xe
					} = ae;
					return ct.has(H) ? at({}, Ke({
						price: d,
						frequency: w,
						ratePlanId: ie,
						ratePlanName: we,
						isNewSubscription: !1
					}), {
						label: xe || H
					}) : void 0
				},
				se = ae => {
					const {
						price: d,
						frequency: w,
						ratePlan: H,
						ratePlanName: ie,
						oldRatePlan: we
					} = ae;
					return Ue.has(H) ? at({}, Ke({
						price: d,
						frequency: w,
						ratePlanId: H,
						ratePlanName: ie,
						isNewSubscription: !1
					}), {
						label: `${we}->${H}`
					}) : void 0
				},
				fe = "pageview",
				Ce = "create zone",
				Se = "create user",
				Be = "Plan Purchase Success",
				nt = "Product Purchase Success",
				it = "Plan Update Success",
				Ct = "Product Update Success",
				_t = {
					[fe]: !0,
					[Ce]: !0,
					[Se]: !0,
					[Be]: !0,
					[nt]: !0,
					[it]: !0,
					[Ct]: !0
				},
				St = ae => {
					var d;
					return !!((d = ae.gates.assignments) === null || d === void 0 ? void 0 : d["dx-enable-google-tag-manager"])
				},
				Ve = ae => {
					const d = /\|MCMID\|([0-9]+)\|/,
						w = ae.match(d);
					return w ? w[1] : void 0
				},
				Tt = ae => {
					var d;
					const {
						deviceViewport: w,
						page: H,
						previousPage: ie,
						pageName: we,
						utm_campaign: xe,
						_ga: Ge,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": We
					} = ae, {
						origin: Ze
					} = window.location, rt = (0, gt.PR)((0, u.bh)().getState());
					return {
						event: ie !== void 0 && H !== ie ? "virtual_page_view" : "page_load",
						device_type: w,
						hostname: Ze,
						language: navigator.language,
						locale: (0, l.r)((0, u.bh)().getState()),
						page_location: H ? `${Ze}${H}` : "[redacted]",
						page_path: H ? `${H}` : "[redacted]",
						page_referrer: ie ? `${Ze}/${ie}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: we || "[redacted]",
						page_url: H ? `${Ze}${H}` : "[redacted]",
						query: xe ? `?utm_campaign=${xe}` : "[redacted]",
						user_properties: {
							ga_client_id: (d = Ge) !== null && d !== void 0 ? d : void 0,
							ga_client_id_s: Ge ? `s${Ge}` : void 0,
							user_id: Pt() ? rt == null ? void 0 : rt.id : void 0,
							ecid: We ? Ve(We) : void 0
						}
					}
				},
				kt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				wt = ae => {
					const {
						status: d
					} = ae;
					return d === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Mt = (ae, d) => {
					switch (ae) {
						case fe:
							return Tt(d);
						case Ce:
							return kt();
						case Se:
							return wt(d);
						case Be:
							return tt(d);
						case nt:
							return lt(d);
						case it:
							return U(d);
						case Ct:
							return se(d);
						default:
							return
					}
				},
				Ot = ae => (d, w, H) => {
					if (_t[w]) {
						var ie;
						const we = Mt(w, H);
						we && ((ie = window.dataLayer) === null || ie === void 0 || ie.push(we))
					}
					return ae(d, w, H)
				};
			var It = t("../react/utils/cookiePreferences.ts");

			function mt(ae) {
				for (var d = 1; d < arguments.length; d++) {
					var w = arguments[d] != null ? Object(arguments[d]) : {},
						H = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(w).filter(function(ie) {
						return Object.getOwnPropertyDescriptor(w, ie).enumerable
					})), H.forEach(function(ie) {
						Rt(ae, ie, w[ie])
					})
				}
				return ae
			}

			function Rt(ae, d, w) {
				return d = Et(d), d in ae ? Object.defineProperty(ae, d, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ae[d] = w, ae
			}

			function Et(ae) {
				var d = Nt(ae, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function Nt(ae, d) {
				if (typeof ae != "object" || ae === null) return ae;
				var w = ae[Symbol.toPrimitive];
				if (w !== void 0) {
					var H = w.call(ae, d || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(ae)
			}
			const Ft = ae => {
					const d = St((0, u.bh)().getState());
					r().init(mt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: yt() && !(0, a.gm)() && Pt(),
						middlewares: [S, je, L, Ne, ...d ? [Ot] : []]
					}, ae))
				},
				At = () => {
					r().identify(mt({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, u.bh)().getState()),
						isCloudflare: !!(0, f.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				yt = () => !0,
				xt = () => {
					(0, It.kT)("sparrow_id")
				},
				Pt = () => (0, It.Xm)()
		},
		"../utils/initStyles.ts": function($, h, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const a = "cfBaseStyles",
				u = document.head || document.getElementsByTagName("head")[0],
				l = s => {
					const p = [];
					for (let v in s.colors) {
						const n = s.colors[v];
						if (Array.isArray(n) && v !== "categorical")
							for (let c = 0; c < n.length; ++c) p.push(`--cf-${v}-${c}:${n[c]};`)
					}
					return p.join(`
`)
				},
				f = () => {
					const s = (0, e.Yc)(),
						p = `
    * {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${e.Rl.colors.gray[5]}
    }

    html, body, button {
      font-size: 16px;
    }

    html {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
    }

    body {
      line-height: 1.5;
      color: ${e.Rl.colors.gray[1]};
      background-color: ${e.Rl.colors.background};
      font-family: ${e.Rl.fontFamily};
    }

    text {
      fill: ${e.Rl.colors.gray[1]};
    }

    body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
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
      ${l(e.Rl)}
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
					let v = document.getElementById(a);
					v ? v.innerText = "" : (v = document.createElement("style"), v.id = a, u.appendChild(v)), v.appendChild(document.createTextNode(p)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(f), h.Z = f
		},
		"../utils/sentry/lastSentEventId.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let a = "";
				return {
					setEventId: f => (!f || typeof f != "string" || (a = f), a),
					getEventId: () => a
				}
			})()
		},
		"../utils/zaraz.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Ro: function() {
					return c
				},
				bM: function() {
					return p
				},
				tg: function() {
					return s
				},
				yn: function() {
					return n
				}
			});

			function e(i) {
				for (var g = 1; g < arguments.length; g++) {
					var o = arguments[g] != null ? Object(arguments[g]) : {},
						m = Object.keys(o);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(o).filter(function(I) {
						return Object.getOwnPropertyDescriptor(o, I).enumerable
					})), m.forEach(function(I) {
						r(i, I, o[I])
					})
				}
				return i
			}

			function r(i, g, o) {
				return g = a(g), g in i ? Object.defineProperty(i, g, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = o, i
			}

			function a(i) {
				var g = u(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function u(i, g) {
				if (typeof i != "object" || i === null) return i;
				var o = i[Symbol.toPrimitive];
				if (o !== void 0) {
					var m = o.call(i, g || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}
			const l = {
					track: (i, g) => null,
					set: (i, g) => console.log(`zaraz.set(${i}, ${g})`)
				},
				f = {
					track: (i, g) => {
						var o;
						(o = window.zaraz) === null || o === void 0 || o.track(i, e({}, g, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, g) => {
						var o;
						return (o = window.zaraz) === null || o === void 0 ? void 0 : o.set(i, g)
					}
				};
			let s;
			const p = () => {
					window.zaraz, s = f
				},
				v = ["email", "first_name", "last_name"],
				n = i => {
					v.forEach(g => {
						var o;
						(o = s) === null || o === void 0 || o.set(g, i[g])
					})
				},
				c = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function($, h, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				a = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				u = t.n(a),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(f),
				p = t("../../../../node_modules/@cloudflare/component-input/es/index.js"),
				v = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				o = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				m = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				I = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				P = t("../../../common/component/component-filter-bar/src/constants.js"),
				b = t("../../../common/component/component-filter-bar/src/utils.js");

			function _() {
				return _ = Object.assign ? Object.assign.bind() : function(j) {
					for (var A = 1; A < arguments.length; A++) {
						var O = arguments[A];
						for (var F in O) Object.prototype.hasOwnProperty.call(O, F) && (j[F] = O[F])
					}
					return j
				}, _.apply(this, arguments)
			}

			function T(j) {
				for (var A = 1; A < arguments.length; A++) {
					var O = arguments[A] != null ? Object(arguments[A]) : {},
						F = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(O).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(O, ee).enumerable
					})), F.forEach(function(ee) {
						E(j, ee, O[ee])
					})
				}
				return j
			}

			function E(j, A, O) {
				return A = C(A), A in j ? Object.defineProperty(j, A, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[A] = O, j
			}

			function C(j) {
				var A = L(j, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function L(j, A) {
				if (typeof j != "object" || j === null) return j;
				var O = j[Symbol.toPrimitive];
				if (O !== void 0) {
					var F = O.call(j, A || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(j)
			}
			const S = 70,
				k = (0, l.createStyledComponent)(({
					showOverflow: j
				}) => T({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, j ? {} : {
					maxHeight: S,
					overflow: "hidden"
				})),
				M = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				y = (0, l.createStyledComponent)(({
					theme: j
				}) => ({
					backgroundColor: j.colors.background,
					py: 1,
					px: 2,
					borderRadius: j.radii[2],
					border: `1px solid ${j.colors.gray[7]}`,
					fontSize: j.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: j.colors.gray[4]
					}
				}), "div"),
				D = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				N = (0, l.createStyledComponent)(({
					theme: j
				}) => ({
					color: j.colors.gray[4],
					mr: 1
				}), "span"),
				x = (0, l.createStyledComponent)(() => ({
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
				Z = (0, l.createStyledComponent)(({
					buttonStyle: j
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
				}, j), v.zx),
				re = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				ge = (0, l.createStyledComponent)(({
					theme: j
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: j.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: j.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: j.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: j.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				ce = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				K = j => j.current ? [...j.current.children].reduce((A, O) => (O.offsetTop >= S && A++, A), 0) : 0;
			let Q = 0;
			class W extends e.Component {
				constructor() {
					super();
					E(this, "overflowWrapper", (0, e.createRef)()), E(this, "hasOverflowed", A => {
						const O = K(this.overflowWrapper);
						A.scrollHeight > S && O >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (A.scrollHeight < S || O === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), E(this, "addNewFilter", () => {
						const {
							filterDefinitions: A
						} = this.props, O = (0, b.TE)(A), F = Object.keys(O)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: F,
								operator: (0, b.uv)(F, O),
								value: (0, b.TT)(F, O)
							}
						})
					}), E(this, "handleOpenFilterEdit", A => {
						this.setState({
							openFilter: A,
							filterChanges: T({}, this.props.filters[A])
						})
					}), E(this, "handleRemoveFilterClick", (A, O) => {
						A.stopPropagation(), this.removeFilter(O)
					}), E(this, "removeFilter", A => {
						const {
							handleFiltersChange: O
						} = this.props, F = [...this.props.filters], ee = F[A];
						F.splice(A, 1), O(F), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ee.key,
							operator: ee.operator,
							value: ee.value
						})
					}), E(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), E(this, "handleFilterSubmit", A => {
						const {
							filterDefinitions: O
						} = this.props;
						A.preventDefault();
						const {
							filterChanges: F
						} = this.state, ee = typeof O[F.key].parse == "function" ? Array.isArray(F.value) ? F.value.map(O[F.key].parse) : O[F.key].parse(F.value) : F.value;
						if (O[F.key].validate && (Array.isArray(ee) ? !ee.every(O[F.key].validate) : !O[F.key].validate(ee))) return this.setState({
							invalid: !0
						});
						const J = [...this.props.filters],
							ne = T({}, F, {
								value: ee
							}),
							G = !J[this.state.openFilter];
						G ? J.push(ne) : J[this.state.openFilter] = T({}, ne), this.props.handleFiltersChange(J, ne), (G ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ne.key,
							operator: ne.operator,
							value: ne.value
						}), this.closeOpenFilterChanges()
					}), E(this, "handlePendingKeyChange", ({
						value: A
					}) => {
						const {
							filterDefinitions: O
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: A,
								operator: (0, b.uv)(A, O),
								value: (0, b.TT)(A, O)
							}
						})
					}), E(this, "handlePendingOperatorChange", ({
						value: A
					}) => {
						let O = T({}, this.state.filterChanges, {
							operator: A
						});
						if ((0, b.dr)(A)) {
							var F, ee;
							((F = this.state.filterChanges) === null || F === void 0 ? void 0 : F.value) && !Array.isArray((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && (O.value = [this.state.filterChanges.value])
						} else {
							var J, ne, G;
							((J = this.state.filterChanges) === null || J === void 0 ? void 0 : J.value) && Array.isArray((ne = this.state.filterChanges) === null || ne === void 0 ? void 0 : ne.value) && ((G = this.state.filterChanges) === null || G === void 0 ? void 0 : G.value.length) > 0 && (O.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: O
						})
					}), E(this, "handlePendingValueChange", A => {
						this.setState({
							invalid: !1,
							filterChanges: T({}, this.state.filterChanges, {
								value: A
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
						id: ++Q
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
						formatLabel: O,
						filterDefinitions: F
					} = this.props, {
						operator: ee
					} = this.state.filterChanges, J = F[this.state.filterChanges.key], ne = this.state.filterChanges.value, G = V => Array.isArray(V) ? V.map(te => te.value) : (V == null ? void 0 : V.value) || null;
					if (J.renderValueComponent) return J.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (J.type) {
						case P.k.custom: {
							var B;
							return r().createElement(J.CustomComponent, _({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (B = J == null ? void 0 : J.customProps) !== null && B !== void 0 ? B : {}))
						}
						case P.k.select:
							return (0, b.dr)(ee) ? r().createElement(o.Z, {
								searchable: !0,
								multi: !0,
								creatable: !J.options,
								value: typeof ne.split == "function" ? ne == null ? void 0 : ne.split(",") : Array.isArray(ne) ? ne : [],
								options: J.options ? J.options.map(V => ({
									value: V.value || V,
									label: V.label || O(this.state.filterChanges.key, V, A)
								})) : ne ? (Array.isArray(ne) ? ne : ne.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(f.Trans, {
									id: J.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: J.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: V => {
									this.handlePendingValueChange(G(V))
								},
								isValidNewOption: V => {
									const te = J.validate;
									return !te && V || V && te([V])
								},
								getNewOptionData: (V, te) => ({
									value: V,
									label: te
								})
							}) : r().createElement(i.hQ, {
								hideLabel: !0,
								value: ne,
								options: J.options.map(V => ({
									value: V,
									label: O(this.state.filterChanges.key, V, A)
								})),
								onChange: ({
									value: V
								}) => this.handlePendingValueChange(V)
							});
						case P.k.string:
						default:
							return (0, b.dr)(ee) ? r().createElement(o.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ne.split == "function" ? ne == null ? void 0 : ne.split(",") : Array.isArray(ne) ? ne : [],
								options: ne ? (Array.isArray(ne) ? ne : ne.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: A.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: V => {
									this.handlePendingValueChange(G(V))
								},
								isValidNewOption: V => {
									const te = J.validate;
									return !te && V || V && te([V])
								},
								getNewOptionData: (V, te) => ({
									value: V,
									label: te
								}),
								formatCreateLabel: V => A.t("filter_editor.value_create_label", {
									value: V
								})
							}) : r().createElement(f.I18n, null, V => r().createElement(p.I, {
								value: this.state.filterChanges.value,
								onChange: te => this.handlePendingValueChange(te.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: V.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: A,
						filterDefinitions: O,
						modalStyles: F,
						filterIconType: ee,
						buttonStyle: J
					} = this.props, ne = K(this.overflowWrapper), G = `filterPanel${this.state.id}`, B = this.state.openFilter !== null;
					return r().createElement(f.I18n, null, V => r().createElement(g.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(ce, null, r().createElement(Z, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": B,
						"aria-controls": G,
						inverted: !0,
						buttonStyle: J
					}, r().createElement(n.J, {
						type: ee || "add",
						mr: 1,
						label: V.t("common.add", {
							_: "Add"
						})
					}), r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), this.props.filters.length > 0 && r().createElement(re, null, r().createElement(f.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(k, {
						innerRef: this.overflowWrapper,
						overflowLimit: S,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((te, le) => {
						const {
							key: pe,
							operator: ue,
							value: _e
						} = te, be = O[pe].ignoreLabelTranslation ? O[pe].label : V.t(O[pe].label), Te = V.t(`analytics.report.filters.operators.${ue}`), Le = Array.isArray(_e) ? _e.map(De => A(pe, De, V)).join(", ") : A(pe, _e, V), Ee = `${be} ${Te} ${Le}`;
						return r().createElement(M, {
							key: `${pe}-${ue}-${_e}`,
							title: Ee
						}, r().createElement(y, {
							onClick: () => this.handleOpenFilterEdit(le)
						}, r().createElement(g.ZC, {
							display: "flex"
						}, r().createElement(D, null, be), r().createElement(N, null, Te), r().createElement(x, null, Le), (0, b.oN)(te, O) ? r().createElement(c.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(ge, {
							onClick: De => this.handleRemoveFilterClick(De, le),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), B && r().createElement(I.Z, {
						id: G,
						filterDefinitions: O,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, b.oN)(this.state.filterChanges, O),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: A,
						modalStyles: F
					}), this.state.hasOverflowed && r().createElement(m.Z, {
						count: ne,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			E(W, "propTypes", {
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
				buttonStyle: u().object
			}), h.Z = W
		},
		"../../../common/component/component-filter-bar/src/index.js": function($, h, t) {
			"use strict";
			t.d(h, {
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
				l = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				OZ: function() {
					return l
				},
				YB: function() {
					return u
				}
			});

			function e(s, p, v) {
				return p = r(p), p in s ? Object.defineProperty(s, p, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[p] = v, s
			}

			function r(s) {
				var p = a(s, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function a(s, p) {
				if (typeof s != "object" || s === null) return s;
				var v = s[Symbol.toPrimitive];
				if (v !== void 0) {
					var n = v.call(s, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(s)
			}
			class u extends Error {
				constructor(p, v) {
					super(v);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class l extends u {
				constructor(p) {
					super(p, `Translation key not found: ${p}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var f = null
		},
		"../../../common/util/types/src/api/domain.ts": function($, h, t) {
			"use strict";
			t.d(h, {
				Aw: function() {
					return L
				},
				Ib: function() {
					return E
				},
				Ks: function() {
					return S
				},
				MS: function() {
					return C
				},
				PN: function() {
					return m
				},
				Pp: function() {
					return u
				},
				Q3: function() {
					return g
				},
				TS: function() {
					return o
				},
				W7: function() {
					return b
				},
				dN: function() {
					return k
				},
				eF: function() {
					return T
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
				l = e.eg.object({
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
				s = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: f.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let v = function(M) {
				return M.ONBOARDING_INITIATED = "Onboarding Initiated", M.ONBOARDED = "Onboarded", M.PENDING_REGISTRY_LOCK = "Pending Registry Lock", M.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", M.REGISTRY_UNLOCKED = "Registry Unlocked", M.LOCKED = "Locked", M.FAILED_TO_LOCK = "Failed To Lock", M.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", M.UNLOCKED = "Unlocked", M.OFFBOARDED = "Offboarded", M
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
					fees: p.optional,
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
					transfer_conditions: l.optional,
					updated_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					updated_registrar: e.eg.string.optional,
					using_created_registrar_nameservers: e.eg.boolean.optional,
					using_current_registrar_nameservers: e.eg.boolean.optional,
					using_previous_registrar_nameservers: e.eg.boolean.optional,
					using_updated_registrar_nameservers: e.eg.boolean.optional,
					whois: e.eg.unknown.optional
				}),
				c = e.eg.object({
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
				g = e.eg.object({
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
				o = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let m = function(M) {
				return M.PENDING = "pending", M.VERIFIED = "verified", M.REJECTED = "rejected", M.PENDING_DELETE = "pending_delete", M.DELETED = "deleted", M
			}({});
			const I = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(m),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				P = e.eg.object({
					designated_approvers: e.eg.array(I)
				});
			let b = function(M) {
				return M.PENDING = "pending", M.PENDING_UPDATE = "pending_update", M.ENABLED = "enabled", M.DISABLED = "disabled", M
			}({});
			const _ = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(b)
				}),
				T = e.eg.intersection([_, P]),
				E = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let C = function(M) {
				return M.UNLOCK_APPROVAL = "UnlockApprovalRequest", M.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", M.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", M.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", M
			}({});
			const L = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				S = e.eg.object({
					message: e.eg.string
				}),
				k = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function($, h, t) {
			"use strict";
			t.d(h, {
				df: function() {
					return r
				},
				eX: function() {
					return a
				},
				fG: function() {
					return l
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
			let e = function(s) {
					return s.Custom = "custom", s.Root = "root", s.Managed = "managed", s.Zone = "zone", s.RateLimit = "ratelimit", s
				}({}),
				r = function(s) {
					return s.Cache = "http_request_cache_settings", s.HttpCustomErrors = "http_custom_errors", s.HttpConfigSettings = "http_config_settings", s.HttpLogCustomFields = "http_log_custom_fields", s.HttpRateLimit = "http_ratelimit", s.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", s.HttpRequestFirewallCustom = "http_request_firewall_custom", s.HttpRequestFirewallManaged = "http_request_firewall_managed", s.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", s.HttpRequestLateTransform = "http_request_late_transform", s.HttpRequestMain = "http_request_main", s.HttpRequestOrigin = "http_request_origin", s.HttpRequestRedirect = "http_request_redirect", s.HttpRequestSanitize = "http_request_sanitize", s.HttpRequestSBFM = "http_request_sbfm", s.HttpRequestsSnippets = "http_request_snippets", s.HttpRequestTransform = "http_request_transform", s.HttpResponseCompression = "http_response_compression", s.HttpResponseFirewallManaged = "http_response_firewall_managed", s.HttpResponseTransform = "http_response_headers_transform", s.L4DDoS = "ddos_l4", s.L7DDoS = "ddos_l7", s.MagicIDS = "magic_transit_ids_managed", s.MagicManaged = "magic_transit_managed", s.MagicTransit = "magic_transit", s.MagicTransitRateLimit = "magic_transit_ratelimit", s
				}({}),
				a = function(s) {
					return s.Execute = "execute", s.All = "all", s.Block = "block", s.JSChallenge = "js_challenge", s.Challenge = "challenge", s.Allow = "allow", s.Bypass = "bypass", s.Log = "log", s.Rewrite = "rewrite", s.Score = "score", s.Skip = "skip", s.Managed_Challenge = "managed_challenge", s.DDoS_Dynamic = "ddos_dynamic", s.Select_Config = "select_config", s.Set_Config = "set_config", s.Reset = "reset", s.Redirect = "redirect", s.Cache = "set_cache_settings", s.WhiteList = "whitelist", s.Error = "serve_error", s
				}({}),
				u = function(s) {
					return s.ZONE_LOCKDOWN = "zoneLockdown", s.UA_BLOCK = "uaBlock", s.BIC = "bic", s.HOT = "hot", s.SECURITY_LEVEL = "securityLevel", s.RATE_LIMIT = "rateLimit", s.WAF = "waf", s
				}({}),
				l = function(s) {
					return s.DEFAULT = "default", s.MEDIUM = "medium", s.LOW = "low", s.EOFF = "eoff", s.HIGH = "high", s.VERY_HIGH = "very_high", s
				}({}),
				f = function(s) {
					return s.DEFAULT = "", s.XML = "text/xml", s.JSON = "application/json", s.TEXT = "text/plain", s.HTML = "text/html", s
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../../../dash/intl/intl-translations/src/index.ts": function($, h, t) {
			"use strict";
			t.d(h, {
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
		"../react/common/out.css": function($, h, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[$.id, e, ""]
			]);
			var r, a, u = {
				hmr: !0
			};
			u.transform = r, u.insertInto = void 0;
			var l = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, u);
			e.locals && ($.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function($, h, t) {
			h = $.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), h.push([$.id, `/*! tailwindcss v4.1.7 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, components, utilities;
@layer theme {
  :root, :host {
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
    --color-green-700: oklch(52.7% 0.154 150.069);
    --color-green-900: oklch(39.3% 0.095 152.535);
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
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-300: oklch(87.2% 0.01 258.338);
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
    --text-sm: 12px;
    --text-sm--line-height: calc(1 / 0.75);
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
    --ease-bounce: cubic-bezier(0.2, 0, 0, 1.5);
    --animate-refresh: refresh 0.5s ease-in-out infinite;
    --color-neutral-150: oklch(0.96 0 0) /*new */;
    --color-neutral-250: oklch(0.9 0 0) /* new */;
    --color-neutral-450: oklch(0.62 0 0) /* new */;
    --color-neutral-750: oklch(0.31 0 0) /* new */;
    --color-neutral-850: oklch(0.23 0 0) /* new */;
    --color-border: var(--cf-gray-8);
    --color-bg-primary: var(--color-white);
    --color-bg-secondary: var(--color-neutral-50);
    --color-red-650: oklch(0.55 0.238 27.4);
    --color-red-750: oklch(0.46 0.195 27.2);
    --color-ob-base-100: var(--color-white);
    --color-ob-base-1000: var(--color-neutral-900);
    --color-ob-border: var(--color-neutral-200);
    --color-ob-border-active: var(--color-neutral-400);
    --text-color-ob-base-100: var(--color-neutral-500);
    --text-color-ob-base-200: var(--color-neutral-600);
    --text-color-ob-base-300: var(--color-neutral-900);
    --text-color-ob-destructive: var(--color-red-600);
    --text-color-ob-inverted: var(--color-white);
    --color-ob-btn-primary-bg: var(--color-neutral-750);
    --color-ob-btn-primary-bg-hover: var(--color-neutral-850);
    --color-ob-btn-primary-border: var(--color-neutral-500);
    --color-ob-btn-primary-border-hover: var(--color-neutral-600);
    --color-ob-btn-secondary-bg: var(--color-white);
    --color-ob-btn-secondary-bg-hover: var(--color-neutral-50);
    --color-ob-btn-secondary-border: var(--color-neutral-200);
    --color-ob-btn-secondary-border-hover: var(--color-neutral-300);
    --color-ob-btn-ghost-bg-hover: var(--color-neutral-150);
    --color-ob-btn-destructive-bg: var(--color-red-600);
    --color-ob-btn-destructive-bg-hover: var(--color-red-650);
    --color-ob-btn-destructive-border: var(--color-red-400);
    --color-ob-btn-destructive-border-hover: var(--color-red-500);
    --color-cl1-white: var(--cf-white);
    --color-cl1-blue-2: var(--cf-blue-2);
    --color-cl1-blue-8: var(--cf-blue-8);
    --color-cl1-gray-0: var(--cf-gray-0);
    --color-cl1-new-gray-7: var(--cf-newGray-7);
    --color-ob-focus: var(--color-blue-400);
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
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-2 {
    top: calc(var(--spacing) * 2);
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
  .isolate {
    isolation: isolate;
  }
  .z-10 {
    z-index: 10;
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
  .mx-auto {
    margin-inline: auto;
  }
  .my-1 {
    margin-block: calc(var(--spacing) * 1);
  }
  .my-4 {
    margin-block: calc(var(--spacing) * 4);
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
  .mr-0\\.5 {
    margin-right: calc(var(--spacing) * 0.5);
  }
  .mr-1 {
    margin-right: calc(var(--spacing) * 1);
  }
  .mr-2 {
    margin-right: calc(var(--spacing) * 2);
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
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-1\\.5 {
    margin-bottom: calc(var(--spacing) * 1.5);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
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
  .ml-7 {
    margin-left: calc(var(--spacing) * 7);
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
  .size-9 {
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
  }
  .size-15 {
    width: calc(var(--spacing) * 15);
    height: calc(var(--spacing) * 15);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
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
  .min-h-\\[350px\\] {
    min-height: 350px;
  }
  .min-h-\\[calc\\(100vh-160px\\)\\] {
    min-height: calc(100vh - 160px);
  }
  .min-h-screen {
    min-height: 100vh;
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
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-\\[10px\\] {
    width: 10px;
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
  .max-w-50 {
    max-width: calc(var(--spacing) * 50);
  }
  .max-w-140 {
    max-width: calc(var(--spacing) * 140);
  }
  .max-w-\\[60ch\\] {
    max-width: 60ch;
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
  .min-w-0 {
    min-width: calc(var(--spacing) * 0);
  }
  .min-w-30 {
    min-width: calc(var(--spacing) * 30);
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
  .flex-1 {
    flex: 1;
  }
  .flex-shrink {
    flex-shrink: 1;
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
  .border-collapse {
    border-collapse: collapse;
  }
  .origin-bottom-left {
    transform-origin: bottom left;
  }
  .origin-bottom-right {
    transform-origin: bottom right;
  }
  .origin-top-left {
    transform-origin: top left;
  }
  .origin-top-right {
    transform-origin: top right;
  }
  .translate-x-full {
    --tw-translate-x: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1 {
    --tw-translate-y: calc(var(--spacing) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .translate-y-1\\.5 {
    --tw-translate-y: calc(var(--spacing) * 1.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
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
  .cursor-text {
    cursor: text;
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
  .appearance-none {
    appearance: none;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-\\[1fr_1fr_2fr\\] {
    grid-template-columns: 1fr 1fr 2fr;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
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
  .divide-y {
    :where(& > :not(:last-child)) {
      --tw-divide-y-reverse: 0;
      border-bottom-style: var(--tw-border-style);
      border-top-style: var(--tw-border-style);
      border-top-width: calc(1px * var(--tw-divide-y-reverse));
      border-bottom-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
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
  .border-cl1-new-gray-7 {
    border-color: var(--color-cl1-new-gray-7);
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
  .border-ob-border {
    border-color: var(--color-ob-border);
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
  .bg-bg-primary {
    background-color: var(--color-bg-primary);
  }
  .bg-bg-secondary {
    background-color: var(--color-bg-secondary);
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
  .bg-cl1-white {
    background-color: var(--color-cl1-white);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
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
  .bg-inherit {
    background-color: inherit;
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
  .bg-ob-base-100 {
    background-color: var(--color-ob-base-100);
  }
  .bg-ob-base-1000 {
    background-color: var(--color-ob-base-1000);
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
  .bg-no-repeat {
    background-repeat: no-repeat;
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
  .px-1 {
    padding-inline: calc(var(--spacing) * 1);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
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
  .pt-10 {
    padding-top: calc(var(--spacing) * 10);
  }
  .\\!pr-6\\.5 {
    padding-right: calc(var(--spacing) * 6.5) !important;
  }
  .\\!pr-8 {
    padding-right: calc(var(--spacing) * 8) !important;
  }
  .\\!pr-9 {
    padding-right: calc(var(--spacing) * 9) !important;
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
  .pr-\\[14px\\] {
    padding-right: 14px;
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
  .font-mono {
    font-family: var(--font-mono);
  }
  .font-mono\\! {
    font-family: var(--font-mono) !important;
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
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-\\[12px\\] {
    font-size: 12px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
  }
  .leading-\\[35px\\] {
    --tw-leading: 35px;
    line-height: 35px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
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
  .text-black {
    color: var(--color-black);
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
  .text-gray-700 {
    color: var(--color-gray-700);
  }
  .text-green-500 {
    color: var(--color-green-500);
  }
  .text-inherit {
    color: inherit;
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
  .text-ob-base-100 {
    color: var(--text-color-ob-base-100);
  }
  .text-ob-base-200 {
    color: var(--text-color-ob-base-200);
  }
  .text-ob-base-300 {
    color: var(--text-color-ob-base-300);
  }
  .text-ob-destructive {
    color: var(--text-color-ob-destructive);
  }
  .text-ob-inverted {
    color: var(--text-color-ob-inverted);
  }
  .text-orange-600 {
    color: var(--color-orange-600);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-red-700 {
    color: var(--color-red-700);
  }
  .text-white {
    color: var(--color-white);
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
  .underline-offset-3 {
    text-underline-offset: 3px;
  }
  .antialiased {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .opacity-75 {
    opacity: 75%;
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
  .shadow-black\\/5 {
    --tw-shadow-color: color-mix(in srgb, #000 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-shadow-color: color-mix(in oklab, color-mix(in oklab, var(--color-black) 5%, transparent) var(--tw-shadow-alpha), transparent);
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
  .transition-\\[width\\] {
    transition-property: width;
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
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .ease-bounce {
    --tw-ease: var(--ease-bounce);
    transition-timing-function: var(--ease-bounce);
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
  .select-all {
    -webkit-user-select: all;
    user-select: all;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .\\*\\:w-full {
    :is(& > *) {
      width: 100%;
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
  .placeholder\\:text-ob-base-100 {
    &::placeholder {
      color: var(--text-color-ob-base-100);
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
  .first-of-type\\:\\*\\:first\\:rounded-l-\\[7px\\] {
    &:first-of-type {
      :is(& > *) {
        &:first-child {
          border-top-left-radius: 7px;
          border-bottom-left-radius: 7px;
        }
      }
    }
  }
  .last-of-type\\:\\*\\:first\\:rounded-r-\\[7px\\] {
    &:last-of-type {
      :is(& > *) {
        &:first-child {
          border-top-right-radius: 7px;
          border-bottom-right-radius: 7px;
        }
      }
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
  .hover\\:bg-neutral-150 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-neutral-150);
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
  .hover\\:bg-red-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-red-100);
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
  .hover\\:text-\\[\\#f6821f\\] {
    &:hover {
      @media (hover: hover) {
        color: #f6821f;
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
  .hover\\:text-ob-base-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--text-color-ob-base-300);
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
  .hover\\:shadow-md {
    &:hover {
      @media (hover: hover) {
        --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
        box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
      }
    }
  }
  .focus\\:z-10 {
    &:focus {
      z-index: 10;
    }
  }
  .focus\\:border-ob-border-active {
    &:focus {
      border-color: var(--color-ob-border-active);
    }
  }
  .focus\\:bg-red-100 {
    &:focus {
      background-color: var(--color-red-100);
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
  .focus-visible\\:border-ob-focus {
    &:focus-visible {
      border-color: var(--color-ob-focus);
    }
  }
  .focus-visible\\:opacity-100 {
    &:focus-visible {
      opacity: 100%;
    }
  }
  .focus-visible\\:inset-ring-\\[0\\.5\\] {
    &:focus-visible {
      --tw-inset-ring-color: 0.5;
    }
  }
  .has-\\[\\:enabled\\]\\:active\\:border-ob-border-active {
    &:has(*:is(:enabled)) {
      &:active {
        border-color: var(--color-ob-border-active);
      }
    }
  }
  .has-\\[\\:focus\\]\\:border-ob-border-active {
    &:has(*:is(:focus)) {
      border-color: var(--color-ob-border-active);
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
  .dark\\:\\!bg-neutral-800 {
    &:where(.dark, .dark *) {
      background-color: var(--color-neutral-800) !important;
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
  .dark\\:bg-bg-primary {
    &:where(.dark, .dark *) {
      background-color: var(--color-bg-primary);
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
  .dark\\:text-blue-400 {
    &:where(.dark, .dark *) {
      color: var(--color-blue-400);
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
  .dark\\:text-red-300 {
    &:where(.dark, .dark *) {
      color: var(--color-red-300);
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
  .dark\\:hover\\:bg-neutral-850 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-neutral-850);
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
  .dark\\:hover\\:bg-red-800 {
    &:where(.dark, .dark *) {
      &:hover {
        @media (hover: hover) {
          background-color: var(--color-red-800);
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
  .dark\\:focus\\:bg-red-800 {
    &:where(.dark, .dark *) {
      &:focus {
        background-color: var(--color-red-800);
      }
    }
  }
  .starting\\:w-0 {
    @starting-style {
      width: calc(var(--spacing) * 0);
    }
  }
}
.dark {
  --color-ob-base-100: var(--color-neutral-950);
  --color-ob-base-200: var(--color-neutral-900);
  --color-ob-base-300: var(--color-neutral-850);
  --color-ob-base-400: var(--color-neutral-800);
  --color-ob-base-500: var(--color-neutral-750);
  --color-ob-base-1000: var(--color-neutral-50);
  --color-ob-border: var(--color-neutral-800);
  --color-ob-border-active: var(--color-neutral-700);
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: var(--color-neutral-950);
  --text-color-ob-base-100: var(--color-neutral-500);
  --text-color-ob-base-200: var(--color-neutral-400);
  --text-color-ob-base-300: var(--color-neutral-50);
  --text-color-ob-destructive: var(--color-red-400);
  --text-color-ob-inverted: var(--color-neutral-900);
  --color-ob-btn-primary-bg: var(--color-neutral-300);
  --color-ob-btn-primary-bg-hover: var(--color-neutral-250);
  --color-ob-btn-primary-border: var(--color-neutral-100);
  --color-ob-btn-primary-border-hover: var(--color-white);
  --color-ob-btn-secondary-bg: var(--color-neutral-900);
  --color-ob-btn-secondary-bg-hover: var(--color-neutral-850);
  --color-ob-btn-secondary-border: var(--color-neutral-800);
  --color-ob-btn-secondary-border-hover: var(--color-neutral-750);
  --color-ob-btn-ghost-bg-hover: var(--color-neutral-850);
  --color-ob-btn-destructive-bg: var(--color-red-800);
  --color-ob-btn-destructive-bg-hover: var(--color-red-750);
  --color-ob-btn-destructive-border: var(--color-red-700);
  --color-ob-btn-destructive-border-hover: var(--color-red-600);
  --color-ob-focus: var(--color-blue-800);
}
.z-modal {
  z-index: 9999;
}
.border-color {
  border-color: var(--color-ob-border);
}
.btn {
  &.btn-primary {
    border-color: var(--color-ob-btn-primary-border);
    background-color: var(--color-ob-btn-primary-bg);
    color: var(--text-color-ob-inverted);
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    &:where(.interactive, .interactive *) {
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            border-color: var(--color-ob-btn-primary-border-hover);
          }
        }
      }
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-ob-btn-primary-bg-hover);
          }
        }
      }
      &:where(.toggle, .toggle *) {
        &:not(*:disabled) {
          border-color: var(--color-ob-btn-primary-border-hover);
        }
        &:not(*:disabled) {
          background-color: var(--color-ob-btn-primary-bg-hover);
        }
      }
    }
  }
  &.btn-secondary {
    border-color: var(--color-ob-btn-secondary-border);
    background-color: var(--color-ob-btn-secondary-bg);
    color: var(--text-color-ob-base-300);
    --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    &:where(.interactive, .interactive *) {
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            border-color: var(--color-ob-btn-secondary-border-hover);
          }
        }
      }
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-ob-btn-secondary-bg-hover);
          }
        }
      }
      &:where(.toggle, .toggle *) {
        &:not(*:disabled) {
          border-color: var(--color-ob-btn-secondary-border-hover);
        }
        &:not(*:disabled) {
          background-color: var(--color-ob-btn-secondary-bg-hover);
        }
      }
    }
  }
  &.btn-ghost {
    border-color: transparent;
    background-color: transparent;
    color: var(--text-color-ob-base-300);
    &:where(.interactive, .interactive *) {
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-ob-btn-ghost-bg-hover);
          }
        }
      }
      &:where(.toggle, .toggle *) {
        &:not(*:disabled) {
          background-color: var(--color-ob-btn-ghost-bg-hover);
        }
      }
    }
  }
  &.btn-destructive {
    border-color: var(--color-ob-btn-destructive-border);
    background-color: var(--color-ob-btn-destructive-bg);
    color: var(--color-white);
    &:where(.interactive, .interactive *) {
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            border-color: var(--color-ob-btn-destructive-border-hover);
          }
        }
      }
      &:not(*:disabled) {
        &:hover {
          @media (hover: hover) {
            background-color: var(--color-ob-btn-destructive-bg-hover);
          }
        }
      }
      &:where(.toggle, .toggle *) {
        &:not(*:disabled) {
          border-color: var(--color-ob-btn-destructive-border-hover);
        }
        &:not(*:disabled) {
          background-color: var(--color-ob-btn-destructive-bg-hover);
        }
      }
    }
  }
  border-style: var(--tw-border-style);
  border-width: 1px;
  &:where(.interactive, .interactive *) {
    cursor: pointer;
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
}
.add-focus {
  --tw-outline-style: none;
  outline-style: none;
  &:focus {
    opacity: 100%;
  }
  &:focus-visible {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  &:focus-visible {
    --tw-ring-color: var(--color-ob-focus);
  }
  :is(& > *) {
    :where(*:focus) & {
      opacity: 100%;
    }
  }
}
.add-disable {
  &:disabled {
    cursor: not-allowed;
  }
  &:disabled {
    color: var(--text-color-ob-base-100);
  }
}
.add-size-sm {
  height: calc(var(--spacing) * 6.5);
  border-radius: var(--radius-lg);
  padding-inline: calc(var(--spacing) * 2);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  &:where(.square, .square *) {
    display: flex;
    width: calc(var(--spacing) * 6.5);
    height: calc(var(--spacing) * 6.5);
    align-items: center;
    justify-content: center;
    padding-inline: calc(var(--spacing) * 0);
  }
  &:where(.circular, .circular *) {
    display: flex;
    width: calc(var(--spacing) * 6.5);
    height: calc(var(--spacing) * 6.5);
    align-items: center;
    justify-content: center;
    border-radius: calc(infinity * 1px);
    padding-inline: calc(var(--spacing) * 0);
  }
}
.add-size-md {
  height: calc(var(--spacing) * 8);
  border-radius: var(--radius-lg);
  padding-inline: calc(var(--spacing) * 2.5);
  font-size: var(--text-base);
  line-height: var(--tw-leading, var(--text-base--line-height));
  &:where(.square, .square *) {
    display: flex;
    width: calc(var(--spacing) * 8);
    height: calc(var(--spacing) * 8);
    align-items: center;
    justify-content: center;
    padding-inline: calc(var(--spacing) * 0);
  }
  &:where(.circular, .circular *) {
    display: flex;
    width: calc(var(--spacing) * 8);
    height: calc(var(--spacing) * 8);
    align-items: center;
    justify-content: center;
    border-radius: calc(infinity * 1px);
    padding-inline: calc(var(--spacing) * 0);
  }
}
.add-size-base {
  height: calc(var(--spacing) * 9);
  border-radius: var(--radius-lg);
  padding-inline: calc(var(--spacing) * 3);
  font-size: var(--text-base);
  line-height: var(--tw-leading, var(--text-base--line-height));
  &:where(.square, .square *) {
    display: flex;
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
    align-items: center;
    justify-content: center;
    padding-inline: calc(var(--spacing) * 0);
  }
  &:where(.circular, .circular *) {
    display: flex;
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
    align-items: center;
    justify-content: center;
    border-radius: calc(infinity * 1px);
    padding-inline: calc(var(--spacing) * 0);
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
@property --tw-divide-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
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
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-space-y-reverse: 0;
      --tw-divide-y-reverse: 0;
      --tw-border-style: solid;
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function($, h, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(a) {
				if (!t.o(e, a)) return Promise.resolve().then(function() {
					var f = new Error("Cannot find module '" + a + "'");
					throw f.code = "MODULE_NOT_FOUND", f
				});
				var u = e[a],
					l = u[0];
				return t.e(u[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", $.exports = r
		}
	}
]);

//# debugId=53a22f81-a86f-5305-90e3-2e3840fe31ce