! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e6e72d1a-5e59-5970-a4f4-052b3f40b76b")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				J8: function() {
					return i
				},
				Jd: function() {
					return u
				},
				QY: function() {
					return d
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
				o = t("../../../../node_modules/query-string/query-string.js"),
				c = t.n(o),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g;
			const s = () => Object.keys(l.Z).reduce((h, v) => (v.indexOf("cf_beta.") === 0 && l.Z.get(v) === "true" && h.push(v.split(".").slice(1).join(".")), h), []),
				p = () => {
					var h, v, O;
					return ((h = window) === null || h === void 0 || (v = h.bootstrap) === null || v === void 0 || (O = v.data) === null || O === void 0 ? void 0 : O.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((g = window) === null || g === void 0 ? void 0 : g.location) && l.Z) {
				const h = c().parse(window.location.search);
				h.beta_on && l.Z.set(`cf_beta.${h.beta_on}`, !0), h.beta_off && l.Z.set(`cf_beta.${h.beta_off}`, !1)
			}
			const f = {},
				n = h => {
					var v, O, _;
					return Object.prototype.hasOwnProperty.call(f, h) ? f[h] : ((v = window) === null || v === void 0 || (O = v.bootstrap) === null || O === void 0 || (_ = O.data) === null || _ === void 0 ? void 0 : _.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(T => T === h) ? (f[h] = !0, !0) : (f[h] = !1, !1)
				},
				a = h => l.Z ? l.Z.get(`cf_beta.${h}`) === !0 : !1,
				i = h => a(h) || n(h),
				m = () => !0,
				u = () => {
					var h, v, O;
					return ((h = window) === null || h === void 0 || (v = h.bootstrap) === null || v === void 0 || (O = v.data) === null || O === void 0 ? void 0 : O.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				d = h => {
					const v = (0, e.uF)(h),
						O = (v == null ? void 0 : v.roles) || [];
					return (0, r.qR)(location.pathname) && O.length === 1 && O.some(_ => _ === "Administrator Read Only")
				},
				I = () => {
					var h, v, O;
					return ((h = window) === null || h === void 0 || (v = h.location) === null || v === void 0 || (O = v.origin) === null || O === void 0 ? void 0 : O.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				P = () => I() === "fed"
		},
		"../functions/utils/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				b1: function() {
					return e
				}
			});
			const e = "CF_dash_version",
				r = "cf_fv_preview",
				o = "cf_pv",
				c = "current",
				l = "hash",
				g = "deploymentPreview",
				s = "fragmentPreview",
				p = a => a === c ? f() : n(),
				f = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (a = 72) => {
					const i = 36e5;
					return new Date(Date.now() + a * i)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				E9: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(h) {
				for (var v = 1; v < arguments.length; v++) {
					var O = arguments[v] != null ? Object(arguments[v]) : {},
						_ = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(O).filter(function(T) {
						return Object.getOwnPropertyDescriptor(O, T).enumerable
					})), _.forEach(function(T) {
						o(h, T, O[T])
					})
				}
				return h
			}

			function o(h, v, O) {
				return v = c(v), v in h ? Object.defineProperty(h, v, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[v] = O, h
			}

			function c(h) {
				var v = l(h, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function l(h, v) {
				if (typeof h != "object" || h === null) return h;
				var O = h[Symbol.toPrimitive];
				if (O !== void 0) {
					var _ = O.call(h, v || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(h)
			}
			const g = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				s = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				p = e.z.string(),
				f = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(p, f),
				a = e.z.enum(["live", "previews"]),
				i = (h, v) => {
					const O = h.data.cookies[v],
						_ = {
							[PREVIEW_VERSIONING_COOKIE]: g,
							[DEPLOYMENT_VERSION_COOKIE]: s
						};
					try {
						return _[v].parse(O)
					} catch {
						return null
					}
				},
				m = h => {
					try {
						return decodeURIComponent(h).split(",").reduce((v, O) => {
							const _ = O.split(":"),
								T = p.parse(_[0]),
								k = f.parse(_[1]);
							return r({}, v, {
								[T]: k
							})
						}, {})
					} catch {
						return {}
					}
				},
				u = h => {
					const v = h.data.cookies[FRAGMENT_VERSIONING_PREVIEW_COOKIE],
						O = m(v);
					try {
						return n.parse(O)
					} catch {
						return null
					}
				},
				d = h => {
					const v = g.parse(h),
						[O, ..._] = v.split("-"),
						T = _.join("-");
					return {
						projectType: O,
						deploymentId: T
					}
				},
				I = (h, v) => {
					if (!v) return "";
					try {
						var O;
						const {
							projectType: _,
							deploymentId: T
						} = d(v), k = {
							live: h.env.PAGES_WORKERS_LIVE_HOST,
							previews: h.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: w,
							pathname: A,
							search: L
						} = new URL(h.request.url), b = w == null || (O = w.split(".")) === null || O === void 0 ? void 0 : O[0];
						if (T && T !== b && a.safeParse(_).success) {
							const D = k[_];
							return `https://${T}.${D}${A}${L}`
						}
					} catch (_) {
						console.log(_)
					}
					return ""
				},
				P = (h, v) => {
					if (!v) return "";
					try {
						var O;
						const _ = h.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: T,
								pathname: k,
								search: w
							} = new URL(h.request.url),
							A = T == null || (O = T.split(".")) === null || O === void 0 ? void 0 : O[0],
							{
								deploymentSHA: L
							} = parsePagesDevUrl(h.env.CF_PAGES_URL),
							b = h.request.headers.get("sec-fetch-dest") === "document";
						if (v && v !== A && v !== L && !b) return `https://${v}.${_}${k}${w}`
					} catch (_) {
						console.log(_)
					}
					return ""
				}
		},
		"../init.ts": function(W, E, t) {
			"use strict";
			t.r(E);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				o = t("../libs/init/initGlobal.ts"),
				c = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function g(B) {
				for (var V = 1; V < arguments.length; V++) {
					var ee = arguments[V] != null ? Object(arguments[V]) : {},
						ie = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(ee).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(ee, fe).enumerable
					})), ie.forEach(function(fe) {
						s(B, fe, ee[fe])
					})
				}
				return B
			}

			function s(B, V, ee) {
				return V = p(V), V in B ? Object.defineProperty(B, V, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = ee, B
			}

			function p(B) {
				var V = f(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function f(B, V) {
				if (typeof B != "object" || B === null) return B;
				var ee = B[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ie = ee.call(B, V || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			const n = B => {
				const V = B && B.headers || {},
					ee = new Headers(V);
				return ee.append("X-Cross-Site-Security", "dash"), g({}, B, {
					headers: ee
				})
			};
			(0, l.register)({
				request: (B, V) => {
					try {
						return new URL(B), B === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", V] : [B, V]
					} catch {
						var ee, ie;
						return typeof B == "object" && ((ee = B) === null || ee === void 0 || (ie = ee.url) === null || ie === void 0 ? void 0 : ie.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [B, V] : [B, n(V)]
					}
				}
			});
			var a = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				m = t("../react/app/providers/storeContainer.js");
			let u = "";
			const d = 61;

			function I(B) {
				const V = B.substr(1);
				if (V && u !== V) {
					const ee = document.getElementById(V);
					if (ee) {
						const ie = ee.getBoundingClientRect().top;
						if (ie > 0) {
							const fe = ie - d;
							document.documentElement.scrollTop = fe
						}
					}
				}
				u = V
			}

			function P(B) {
				B.listen(V => I(V.hash))
			}
			var h = t("../../../../node_modules/cookie/index.js"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				O = t("../functions/utils/constants.ts");
			const _ = B => {
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
				T = (B, V = !1) => {
					var ee;
					const ie = _(B),
						fe = `
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
    <h1 id="error-title">${ie.title}</h1>
    <p id="error-description">${ie.description}</p>
  </div>
  `,
						we = V ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${v.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(ee=window.build)===null||ee===void 0?void 0:ee.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return fe + we
				},
				k = B => {
					var V;
					const ee = document.getElementById(B);
					!ee || (V = ee.parentNode) === null || V === void 0 || V.removeChild(ee)
				};

			function w() {
				const B = document.getElementById("loading-state");
				B == null || B.classList.add("hide"), B == null || B.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(k)
				})
			}

			function A(B) {
				var V;
				const ee = document.getElementById("loading-state"),
					ie = !!((V = h.parse(document.cookie)) === null || V === void 0 ? void 0 : V[O.b1]);
				!ee || (ee.innerHTML = T(B == null ? void 0 : B.code, ie))
			}
			var L = t("../utils/initStyles.ts"),
				b = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				D = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				R = t("../react/common/selectors/languagePreferenceSelector.ts"),
				Z = t("../flags.ts"),
				oe = t("../utils/getDashVersion.ts");
			const ce = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				le = !0,
				Q = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				K = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var H = t("../utils/sentry/lastSentEventId.ts"),
				N = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				U = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const S = B => {
				const V = async ee => {
					var ie, fe;
					const we = {
						envelope: ee.body,
						url: B.url,
						isPreviewDeploy: (ie = window) === null || ie === void 0 || (fe = ie.build) === null || fe === void 0 ? void 0 : fe.isPreviewDeploy,
						release: (0, oe.t)()
					};
					try {
						const Ae = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
							method: "POST",
							headers: {
								Accept: "*/*",
								"Content-Type": "application/json"
							},
							body: JSON.stringify(we)
						});
						return {
							statusCode: Ae.status,
							headers: {
								"x-sentry-rate-limits": Ae.headers.get("X-Sentry-Rate-Limits"),
								"retry-after": Ae.headers.get("Retry-After")
							}
						}
					} catch (Ae) {
						return console.log(Ae), (0, U.$2)(Ae)
					}
				};
				return N.q(B, V)
			};
			var x = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				G = t("../../../../node_modules/history/esm/history.js"),
				q = (0, G.lX)(),
				ae = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				j = t("../react/utils/url.ts");
			const M = (0, ae.Rf)();
			let $;

			function J(B) {
				return ue(B, "react-router-v5")
			}

			function ue(B, V) {
				return (ee, ie = !0, fe = !0) => {
					ie && M && M.location && ($ = ee({
						name: (0, j.Fl)(M.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": V
						}
					})), fe && B.listen && B.listen((we, Ae) => {
						if (Ae && (Ae === "PUSH" || Ae === "POP")) {
							$ && $.finish();
							const xe = {
								"routing.instrumentation": V
							};
							$ = ee({
								name: (0, j.Fl)(we.pathname),
								op: "navigation",
								tags: xe
							})
						}
					})
				}
			}
			var se = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				pe = t.n(se),
				te = t("../../../common/intl/intl-core/src/errors.ts"),
				ye = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Oe = t("../react/common/middleware/sparrow/errors.ts");

			function Ie(B, V, ee) {
				return V = Le(V), V in B ? Object.defineProperty(B, V, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = ee, B
			}

			function Le(B) {
				var V = Se(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function Se(B, V) {
				if (typeof B != "object" || B === null) return B;
				var ee = B[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ie = ee.call(B, V || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			class ke {
				constructor() {
					Ie(this, "name", ke.id)
				}
				setupOnce() {
					t.g.console && (0, ye.hl)(t.g.console, "error", V => (...ee) => {
						const ie = ee.find(fe => fe instanceof Error);
						if (ce && ie) {
							let fe, we = !0;
							if (ie instanceof Oe.ez) {
								const Ae = ie instanceof Oe.oV ? ie.invalidProperties : void 0;
								fe = {
									tags: {
										"sparrow.eventName": ie.eventName
									},
									extra: {
										sparrow: {
											eventName: ie.eventName,
											invalidProperties: Ae
										}
									},
									fingerprint: [ie.name ? ie.name : "SparrowValidationError"]
								}, we = !1
							} else if (ie instanceof se.SparrowIdCookieError) fe = {
								extra: {
									sparrowIdCookie: ie.cookie
								},
								fingerprint: [ie.name ? ie.name : "SparrowIdCookieError"]
							};
							else if (ie.name === "ChunkLoadError") {
								fe = {
									fingerprint: [ie.name]
								};
								try {
									fe.tags = {
										chunkId: ie.message.split(" ")[2],
										chunkUrl: ie.request
									}
								} catch {}
							} else ie instanceof te.YB && (fe = {
								fingerprint: ["TranslatorError", ie.translationKey]
							});
							we && a.Tb(ie, fe)
						}
						typeof V == "function" && V.apply(t.g.console, ee)
					})
				}
			}
			Ie(ke, "id", "ConsoleErrorIntegration");
			var qe = null,
				Be = t("../react/common/utils/getEnvironment.ts");
			const $e = () => {
					if (ce && le) {
						var B, V, ee, ie, fe, we, Ae, xe, it, Ke;
						const Vt = (0, Be.Z)();
						let bt = "production";
						((B = window) === null || B === void 0 || (V = B.build) === null || V === void 0 ? void 0 : V.isPreviewDeploy) && (bt += "-preview"), Vt === "canary" && (bt = "canary"), D.S({
							dsn: ce,
							release: (0, oe.t)(),
							environment: bt,
							ignoreErrors: K,
							allowUrls: Q,
							autoSessionTracking: !1,
							integrations: dt => [...dt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new ke, new x.jK.BrowserTracing({
								routingInstrumentation: J(q)
							})],
							tracesSampleRate: 0,
							transport: S,
							beforeSend: dt => (H.e.setEventId(dt.event_id), dt)
						});
						const St = (0, m.bh)().getState();
						a.rJ({
							LOCAL_STORAGE_FLAGS: (0, Z.Qw)(),
							USER_BETA_FLAGS: (0, Z.ki)(),
							meta: {
								connection: {
									type: (ee = window) === null || ee === void 0 || (ie = ee.navigator) === null || ie === void 0 || (fe = ie.connection) === null || fe === void 0 ? void 0 : fe.effectiveType,
									bandwidth: (we = window) === null || we === void 0 || (Ae = we.navigator) === null || Ae === void 0 || (xe = Ae.connection) === null || xe === void 0 ? void 0 : xe.downlink
								},
								languagePreference: (0, R.r)(St),
								isPreviewDeploy: (it = window) === null || it === void 0 || (Ke = it.build) === null || Ke === void 0 ? void 0 : Ke.isPreviewDeploy
							},
							utilGates: (0, b.T2)(St)
						}), window.addEventListener("unhandledrejection", function(dt) {})
					}
				},
				Ye = B => {
					B ? a.av({
						id: B
					}) : a.av(null)
				};
			var Y = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Me = () => {
					let B;
					try {
						B = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), B = window.location.search
					}
					if (!B.includes("remote[")) return;
					const V = new URLSearchParams(B),
						ee = {};
					for (let [ie, fe] of V) ie.includes("remote") && (ee[ie.replace(/remote\[|\]/g, "")] = fe);
					Y.Z.set("mfe-remotes", JSON.stringify(ee))
				},
				Fe = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				lt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const Ce = "ANON_USER_ID";

			function pt() {
				var B, V, ee, ie;
				let fe = (B = t.g) === null || B === void 0 || (V = B.bootstrap) === null || V === void 0 || (ee = V.data) === null || ee === void 0 || (ie = ee.user) === null || ie === void 0 ? void 0 : ie.id;
				if (!fe) {
					let we = Y.Z.get(Ce);
					if (!we) {
						let Ae = (0, lt.Z)();
						Y.Z.set(Ce, Ae), we = Ae
					}
					return we
				}
				return fe
			}
			async function X() {
				const B = (0, m.bh)();
				B.dispatch((0, Fe.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await B.dispatch((0, b.UL)({
					userId: pt()
				}))
			}
			class me extends Error {
				constructor(V, ee) {
					super(ee);
					this.name = `${V} ${ee}`
				}
			}
			const he = () => {
					document.cookie.split(";").forEach(V => {
						const [ee] = V.trim().split("=");
						document.cookie = `${ee}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				Ue = async () => {
					let B = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!B.ok) throw B.headers.get("content-type") === "text/html" && (await B.text()).toLowerCase().includes("cookie too large") && (a.$e(function(fe) {
						fe.setTag("init", "cookieTooLarge"), a.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), he(), window.location.reload()), new me("Bootstrap API Failure", B == null ? void 0 : B.status);
					return (await B.json()).result.data
				};
			var Pe = t("webpack/sharing/consume/default/react/react"),
				be = t.n(Pe),
				Ne = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				gt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				rt = t("webpack/sharing/consume/default/react-redux/react-redux"),
				_t = t("../../../../node_modules/swr/core/dist/index.mjs"),
				Et = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				st = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				kt = t("../react/shims/focus-visible.js"),
				We = t("../react/app/components/DeepLink/index.ts"),
				mt = t("../../../../node_modules/prop-types/index.js"),
				Xe = t.n(mt),
				et = t("../react/utils/translator.tsx"),
				tt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				z = t("../../../dash/intl/intl-translations/src/index.ts"),
				de = t("../../../../node_modules/query-string/query-string.js"),
				_e = t.n(de),
				Te = t("../react/common/actions/userActions.ts"),
				De = t("../react/common/selectors/userSelectors.ts"),
				je = t("../react/utils/i18n.ts"),
				ot = t("../react/utils/bootstrap.ts");

			function ct(B) {
				for (var V = 1; V < arguments.length; V++) {
					var ee = arguments[V] != null ? Object(arguments[V]) : {},
						ie = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(ee).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(ee, fe).enumerable
					})), ie.forEach(function(fe) {
						Ct(B, fe, ee[fe])
					})
				}
				return B
			}

			function Ct(B, V, ee) {
				return V = ft(V), V in B ? Object.defineProperty(B, V, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = ee, B
			}

			function ft(B) {
				var V = Tt(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function Tt(B, V) {
				if (typeof B != "object" || B === null) return B;
				var ee = B[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ie = ee.call(B, V || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			let He = _e().parse(location.search);
			const Ot = B => {
					const V = (0, ot.$8)() ? [(0, z.Fy)(z.if.changes), (0, z.Fy)(z.if.common), (0, z.Fy)(z.if.navigation), (0, z.Fy)(z.if.overview), (0, z.Fy)(z.if.onboarding), (0, z.Fy)(z.if.invite), (0, z.Fy)(z.if.login), (0, z.Fy)(z.if.dns), (0, z.Fy)(z.n4.ssl_tls), (0, z.Fy)(z.if.message_inbox), (0, z.Fy)(z.if.welcome)] : [(0, z.Fy)(z.if.common), (0, z.Fy)(z.if.invite), (0, z.Fy)(z.if.login), (0, z.Fy)(z.if.onboarding)];
					He.lang ? Mt(B) : Y.Z.get(je.th) && It(B, (0, je.Kd)());
					const ee = async ie => (await Promise.all(V.map(we => we(ie)))).reduce((we, Ae) => ct({}, we, Ae), {});
					return be().createElement(tt.LocaleContext.Provider, {
						value: B.languagePreference
					}, be().createElement(tt.I18nProvider, {
						translator: et.Vb,
						locale: B.languagePreference
					}, be().createElement(tt.I18nLoader, {
						loadPhrases: ee
					}, B.children)))
				},
				Mt = async B => {
					let V = He.lang.substring(0, He.lang.length - 2) + He.lang.substring(He.lang.length - 2, He.lang.length).toUpperCase();
					if (!(0, R.v)(V)) {
						console.warn(`${V} is not a supported locale.`), delete He.lang, B.history.replace({
							search: _e().stringify(He)
						});
						return
					}(0, je.i_)(V), delete He.lang, It(B, V), B.isAuthenticated || B.history.replace({
						search: _e().stringify(He)
					})
				}, It = async (B, V) => {
					if (B.isAuthenticated) try {
						await B.setUserCommPreferences({
							"language-locale": V
						}, {
							hideErrorAlert: !0
						}), Y.Z.remove(je.th), B.history.replace({
							search: _e().stringify(He)
						})
					} catch (ee) {
						Y.Z.set(je.th, !0), console.error(ee)
					} else Y.Z.set(je.th, !0)
				}, Rt = B => {
					const V = (0, De.PR)(B);
					return {
						isAuthenticated: !!(V && V.id),
						languagePreference: (0, je.Kd)() || (0, R.r)(B)
					}
				}, wt = {
					setUserCommPreferences: Te.V_
				};
			var Nt = (0, Ne.withRouter)((0, rt.connect)(Rt, wt)(Ot));
			Ot.propTypes = {
				history: Xe().object,
				languagePreference: Xe().string.isRequired,
				children: Xe().node.isRequired,
				isAuthenticated: Xe().bool,
				setUserCommPreferences: Xe().func.isRequired
			};
			var yt = t("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				At = t("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let vt;
			const xt = ({
				selectorPrefix: B = "c_"
			} = {}) => (vt || (vt = (0, At.Z)({
				dev: !1,
				selectorPrefix: B
			})), vt);
			var Ft = t("../react/common/out.css"),
				Pt = t("../react/common/components/ModalManager.tsx"),
				Bt = t("../react/app/components/ErrorBoundary.tsx"),
				jt = t("../react/common/actions/notificationsActions.ts");
			const Lt = (t.g.bootstrap || {}).data || {};
			class y extends be().Component {
				componentDidMount() {
					Lt.messages && this.dispatchNotificationActions(Lt.messages)
				}
				dispatchNotificationActions(V) {
					V.forEach(ee => {
						const {
							type: ie,
							message: fe,
							persist: we
						} = ee;
						["success", "info", "warn", "error"].includes(ie) && this.props.notifyAdd(ie, (0, et.ZP)(fe), {
							persist: !!we
						})
					})
				}
				render() {
					return null
				}
			}
			var F = (0, Ne.withRouter)((0, rt.connect)(null, {
				notifyAdd: jt.add
			})(y));
			y.propTypes = {
				notifyAdd: Xe().func.isRequired
			};
			var re = t("../react/app/redux/index.ts");

			function ge() {
				var B;
				const V = (0, re.p4)(De.PR),
					ee = (V == null || (B = V.email) === null || B === void 0 ? void 0 : B.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ie = (0, Fe.Yc)();
				(0, Pe.useEffect)(() => {
					ie({
						userType: ee
					})
				}, [ee, ie])
			}
			var Ee = t("../react/common/selectors/entitlementsSelectors.ts"),
				Re = t("../react/common/selectors/accountSelectors.ts");
			const ze = ["accountId", "is_ent"];

			function Je() {
				const B = (0, Fe.f7)(),
					V = (0, Ne.useHistory)(),
					ee = (0, j.uW)(V.location.pathname),
					ie = (0, Fe.Yc)(),
					fe = (0, Fe.O$)(),
					we = (0, re.p4)(Ee.u1),
					Ae = !we.isRequesting && !!we.data,
					xe = (0, re.p4)(Ee.p1),
					it = (0, re.p4)(Re.Xu),
					Ke = (0, re.p4)(Re.uF),
					Vt = !it.isRequesting && !!it.data;
				(0, Pe.useEffect)(() => {
					if (ee && Vt && Ke && Ae && ee === Ke.account.id) {
						var bt, St, dt;
						ie({
							accountId: Ke.account.id,
							is_ent: xe,
							is_free_account: !xe && !(Ke == null || (bt = Ke.account.meta) === null || bt === void 0 ? void 0 : bt.has_business_zones) && !(Ke == null || (St = Ke.account.meta) === null || St === void 0 ? void 0 : St.has_pro_zones) && !(Ke == null || (dt = Ke.account.meta) === null || dt === void 0 ? void 0 : dt.has_enterprise_zones)
						})
					} else(!ee || ee in B && B.accountId !== ee) && fe(ze)
				}, [Vt, Ke, ie, fe, Ae, xe, ee, B])
			}
			var Ve = t("../react/common/selectors/zoneSelectors.ts");

			function Ze() {
				const B = (0, re.p4)(Ve.nA),
					V = (0, Fe.Yc)();
				(0, Pe.useEffect)(() => {
					var ee;
					V({
						zone_id: B == null ? void 0 : B.id,
						zone_plan: B == null || (ee = B.plan) === null || ee === void 0 ? void 0 : ee.legacy_id
					})
				}, [B, V])
			}
			const at = () => (ge(), Je(), Ze(), null);
			var ut = t("../react/app/components/Persistence/index.tsx"),
				nt = t("../node_modules/@cloudflare/elements/es/index.js"),
				Ge = t("../react/app/components/LoadingSuspense.tsx");
			const Ut = be().lazy(() => Promise.all([t.e(16691), t.e(34684), t.e(12174), t.e(1091), t.e(27751), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var Gt = () => be().createElement(Ge.Z, null, be().createElement(Ut, null));
			const Wt = () => (Pe.useEffect(() => w, []), null);
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
					const B = (0, re.p4)(R.r);
					(0, Pe.useEffect)(() => {
						const V = tn(B);
						V !== Ht().locale() && Ht().locale(V), document.documentElement.lang = B
					}, [B])
				},
				rn = () => {
					(0, Pe.useEffect)(() => {
						async function B() {
							var V, ee, ie, fe;
							let we;
							if (((V = window) === null || V === void 0 || (ee = V.build) === null || ee === void 0 ? void 0 : ee.isPreviewDeploy) && ((ie = window) === null || ie === void 0 || (fe = ie.build) === null || fe === void 0 ? void 0 : fe.branch) !== "staging" && (we = "cookie"), !!we) try {
								const Ae = document.head.querySelector("link[rel=icon]");
								Ae && (Ae.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${we}.ico`)).default)
							} catch {}
						}
						B()
					}, [])
				};
			var on = t("../react/common/constants/constants.ts");
			const an = () => {
					var B;
					const V = (0, Ne.useLocation)(),
						[ee, ie] = (0, Pe.useState)(((B = window) === null || B === void 0 ? void 0 : B.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Pe.useEffect)(() => {
						const fe = _e().parse(V.search);
						if (fe.pt && Y.Z.set(on.sJ, fe.pt), fe == null ? void 0 : fe.devPanel) {
							var we, Ae;
							(we = window) === null || we === void 0 || (Ae = we.localStorage) === null || Ae === void 0 || Ae.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ie(!0)
						}
					}, [V.search]), {
						devPanelEnabled: ee
					}
				},
				sn = ({
					id: B,
					customDataLayer: V = [],
					dataLayerName: ee = "dataLayer"
				}) => {
					const ie = `<iframe src="https://www.googletagmanager.com/ns.html?id=${B}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						fe = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${ee}', '${B}')`,
						we = `
    window.${ee} = window.${ee} || [];
    window.${ee}.push(${JSON.stringify(V)})
  `;
					return {
						iframe: ie,
						script: fe,
						dataLayerHTML: we
					}
				},
				cn = B => {
					const V = document.createElement("script");
					return V.innerHTML = B, V.async = !0, V
				},
				ln = B => {
					const V = document.createElement("noscript");
					return V.innerHTML = B, V
				},
				Zt = B => {
					const V = document.createElement("script");
					return V.innerHTML = B, V
				},
				Dn = ({
					dataLayer: B,
					dataLayerName: V
				}) => {
					if (window[V]) return window[V].push(B);
					const ee = `
      window.${V} = window.${V} || [];
      window.${V}.push(${JSON.stringify(B)})`,
						ie = Zt(ee);
					document.head.insertBefore(ie, document.head.childNodes[0])
				},
				un = ({
					containerId: B,
					customDataLayer: V,
					gtmFeatureFlag: ee = !0
				}) => {
					(0, Pe.useEffect)(() => {
						(() => {
							if (!ee) return null;
							const {
								iframe: fe,
								script: we,
								dataLayerHTML: Ae
							} = sn({
								id: B,
								customDataLayer: V
							});
							document.head.insertBefore(Zt(Ae), document.head.childNodes[0]), document.head.insertBefore(cn(we), document.head.childNodes[0]), document.body.insertBefore(ln(fe), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const dn = ({
				isDev: B,
				gtmFeatureFlag: V
			}) => {
				(0, Pe.useEffect)(() => {
					(() => {
						if (!V) return null;
						let ie;
						B ? ie = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ie = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const fe = document.createElement("script");
						fe.async = !0, fe.src = ie, document.head.insertBefore(fe, document.head.childNodes[0])
					})()
				}, [])
			};
			var pn = t("../react/utils/useDomainConnectRedirect.ts");
			const gn = "GTM-NDGPDFZ",
				mn = be().lazy(() => Promise.all([t.e(16691), t.e(34684), t.e(12174), t.e(1091), t.e(27751), t.e(51436), t.e(47386), t.e(7580), t.e(70618), t.e(78119), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(91262), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				fn = be().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(7580), t.e(91018), t.e(69088), t.e(91262), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var vn = ({
					userIsAuthed: B
				}) => {
					nn(), rn(), (0, pn.y)();
					const {
						devPanelEnabled: V
					} = an();
					return un({
						containerId: gn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), dn({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), be().createElement(Pe.Suspense, {
						fallback: be().createElement(Wt, null)
					}, be().createElement(Ne.Switch, null, !B && !0 && be().createElement(Ne.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, be().createElement(fn, null)), be().createElement(Ne.Route, {
						render: () => be().createElement(nt.ZC, {
							minHeight: "100vh"
						}, be().createElement(mn, null))
					})), V && be().createElement(Gt, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				_n = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, et.ZP)("common.validation.email")).required((0, et.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, et.ZP)("common.validation.required"))
			};
			(0, _n.Yd)(Qt).forEach(B => {
				zt.kM(zt.Z_, B, Qt[B])
			});
			var En = t("../react/common/utils/startViewTransition.ts");
			const Xt = be().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function yn() {
				const [B, V] = (0, Pe.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, Pe.useEffect)(() => {
					const ee = window.matchMedia("(prefers-color-scheme: dark)"),
						ie = fe => {
							V(fe.matches ? "dark" : "light")
						};
					return ee.addEventListener("change", ie), () => {
						ee.removeEventListener("change", ie)
					}
				}, []), B
			}
			const hn = () => {
					const B = (0, ot.$8)(),
						[V, ee] = (0, Pe.useState)(B ? Xt : be().Fragment),
						ie = yn(),
						[fe, we] = (0, Pe.useState)((0, v.Yc)());
					(0, Pe.useEffect)(() => {
						(0, v.fF)(() => we((0, v.Yc)()))
					}, []);
					const Ae = xe => {
						we(xe), (0, En.o)(() => {
							(0, v.C8)(xe)
						}), document.cookie = `dark-mode=${xe};Path=/;Max-Age=31536000`, xe === "dark" || xe === "on" || xe === "system" && ie === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark")
					};
					return (0, Pe.useEffect)(() => {
						ee(B ? Xt : be().Fragment)
					}, [B]), (0, Pe.useEffect)(() => {
						const xe = () => Ae(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", xe), () => {
							window.removeEventListener("storage", xe)
						}
					}, []), be().createElement(Pe.Suspense, {
						fallback: null
					}, be().createElement(rt.Provider, {
						store: (0, m.bh)()
					}, be().createElement(Ne.Router, {
						history: q
					}, be().createElement(V, null, be().createElement(yt.Z, {
						renderer: xt()
					}, be().createElement(Nt, null, be().createElement(Bt.S, {
						sentryTag: "Root"
					}, be().createElement(_t.J$, {
						value: {
							fetcher: xe => fetch(xe).then(it => it.json())
						}
					}, be().createElement(at, null), be().createElement(F, null), be().createElement(ut.Z_, {
						onDarkModeChangeCb: Ae
					}, be().createElement(We.ZP, null, be().createElement(vn, {
						userIsAuthed: B
					}))), be().createElement(Pt.ZP, null), be().createElement(Et.F0, null)))))))))
				},
				bn = () => {
					(0, gt.render)(be().createElement(hn, null), document.getElementById("react-app"))
				};
			var ht = t("../utils/initSparrow.ts"),
				$t = t("../utils/zaraz.ts");
			const Cn = () => {
					const B = (0, De.PR)((0, m.bh)().getState());
					Tn(), (0, ht.Ug)(), (0, $t.bM)(), (B == null ? void 0 : B.id) && pe().setUserId(B == null ? void 0 : B.id), (0, ht.yV)(), !(0, ht.Wi)() && (0, ht.IM)(), B ? (0, $t.yn)(B) : (0, $t.Ro)()
				},
				Tn = () => {
					var B, V;
					(B = window) === null || B === void 0 || (V = B.OneTrust) === null || V === void 0 || V.OnConsentChanged(() => {
						const ee = (0, De.PR)((0, m.bh)().getState());
						(0, ht.Wi)() ? (pe().setEnabled(!0), (ee == null ? void 0 : ee.id) ? (pe().setUserId(ee.id), (0, $t.yn)(ee)) : (0, $t.Ro)(), (0, ht.yV)()) : (pe().setEnabled(!1), (0, ht.IM)())
					})
				};

			function On(B) {
				for (var V = 1; V < arguments.length; V++) {
					var ee = arguments[V] != null ? Object(arguments[V]) : {},
						ie = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(ee).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(ee, fe).enumerable
					})), ie.forEach(function(fe) {
						In(B, fe, ee[fe])
					})
				}
				return B
			}

			function In(B, V, ee) {
				return V = wn(V), V in B ? Object.defineProperty(B, V, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[V] = ee, B
			}

			function wn(B) {
				var V = An(B, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function An(B, V) {
				if (typeof B != "object" || B === null) return B;
				var ee = B[Symbol.toPrimitive];
				if (ee !== void 0) {
					var ie = ee.call(B, V || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(B)
			}
			const Pn = "init",
				Jt = (B, V) => {
					a.$e(function(ee) {
						ee.setTag(Pn, V), a.Tb(B)
					}), A(B)
				},
				Kt = async (B, V) => {
					try {
						return await B(), !0
					} catch (ee) {
						return Jt(ee, V), !1
					}
				};
			(async () => {
				try {
					var B, V, ee;
					t.g.build = On({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "b2ae71d353e1027bb0e0e0605ed84e7acfaccbb2",
						dashVersion: "33772710",
						env: "production",
						builtAt: 1749213865542,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, oe.p)()
					}), $e();
					const ie = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => P(q),
						tag: "hashScroll"
					}, {
						fn: L.Z,
						tag: "styles"
					}, {
						fn: Me,
						tag: "mfePreviewData"
					}];
					for (const it of ie)
						if (!await Kt(it.fn, it.tag)) return;
					let fe;
					if (!await Kt(async () => {
							fe = await Ue()
						}, "bootstrap")) return;
					const we = (0, m.bh)(),
						Ae = ((B = fe) === null || B === void 0 ? void 0 : B.data) || {};
					we.dispatch((0, i.mW)("user", Ae == null ? void 0 : Ae.user));
					const xe = (V = fe) === null || V === void 0 || (ee = V.data) === null || ee === void 0 ? void 0 : ee.user;
					return t.g.bootstrap = fe, xe && xe.id && Ye(xe.id), !await Kt(X, "gates") || !await Kt(Cn, "tracking") ? void 0 : bn()
				} catch (ie) {
					Jt(ie, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/redux/index.ts"),
				c = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				g = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/common/utils/isGuards.ts"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t.n(p);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(m) {
					for (var u = 1; u < arguments.length; u++) {
						var d = arguments[u];
						for (var I in d) Object.prototype.hasOwnProperty.call(d, I) && (m[I] = d[I])
					}
					return m
				}, n.apply(this, arguments)
			}
			const a = m => {
				function u(d) {
					const I = (0, o.UM)(),
						P = (0, p.useHistory)(),
						h = (0, p.useLocation)(),
						v = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						O = (0, o.p4)(c.PR) || null,
						_ = (0, o.p4)(l.nA) || null,
						T = (0, o.p4)(g.uF),
						k = T ? T.account : null;
					if (!v) return null;
					const {
						accountId: w,
						app: A,
						tab: L
					} = v.params, b = v.params.zoneName && ((0, s.v5)(v.params.zoneName) || v.params.zoneName.indexOf(".") > 0) ? v.params.zoneName : void 0;
					return r().createElement(m, n({
						dispatch: I,
						history: P,
						location: h,
						match: v,
						user: O,
						membership: w ? T : null,
						account: w ? k : null,
						accountId: w || null,
						zone: b ? _ : null,
						zoneName: b || null,
						app: b ? A : null,
						tab: b ? L : null
					}, d))
				}
				return u.displayName = `withEntities(${i(m)})`, u
			};

			function i(m) {
				return m.displayName || m.name || "Component"
			}
			E.Z = a
		},
		"../react/app/components/AccountHome/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$$: function() {
					return _
				},
				CK: function() {
					return A
				},
				KV: function() {
					return k
				},
				OX: function() {
					return w
				},
				QV: function() {
					return O
				},
				Yt: function() {
					return h
				},
				bA: function() {
					return v
				},
				fu: function() {
					return b
				},
				gX: function() {
					return d
				},
				hh: function() {
					return L
				},
				o1: function() {
					return T
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
				o = t("../react/utils/url.ts");
			const c = "projects table click",
				l = "click create application",
				g = "account home dev plat - product card click",
				s = "account home dev plat - empty state CTA click",
				p = "account home dev plat - view all projects click",
				f = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				a = "account home zero trust - analytics link click",
				i = "account home zero trust - product card click",
				m = "account home zero trust - plan pill click",
				u = "account home zero trust - plan fallback link click",
				d = {
					SPARROW_PROJECTS_TABLE_CLICK: c,
					SPARROW_CREATE_PROJECT_CLICK: l,
					SPARROW_PRODUCT_CARD_CLICK: g,
					SPARROW_EMPTY_STATE_CTA_CLICK: s,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: p,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: f,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: a,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: i,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: m,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: u
				},
				I = D => {
					r().sendEvent(c, {
						component: D
					})
				},
				P = D => {
					r().sendEvent(c, {
						component: "menu",
						subcomponent: D
					})
				},
				h = () => {
					r().sendEvent(l, {
						category: "Projects Table"
					})
				},
				v = ({
					category: D,
					product: R
				}) => {
					r().sendEvent(g, {
						category: D,
						product: R
					})
				},
				O = () => {
					r().sendEvent(s)
				},
				_ = () => {
					r().sendEvent(p)
				},
				T = D => {
					r().sendEvent(n, {
						category: D
					})
				},
				k = ({
					category: D,
					href: R
				}) => {
					r().sendEvent(f, {
						category: D,
						href: (0, o.cm)(R)
					})
				},
				w = ({
					category: D,
					href: R
				}) => {
					r().sendEvent(a, {
						category: D,
						href: (0, o.cm)(R)
					})
				},
				A = ({
					category: D,
					product: R,
					href: Z
				}) => {
					r().sendEvent(i, {
						category: D,
						product: R,
						href: (0, o.cm)(Z)
					})
				},
				L = ({
					plan: D
				}) => {
					r().sendEvent(m, {
						plan: D
					})
				},
				b = () => {
					r().sendEvent(u)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return g
				},
				CM: function() {
					return f
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
					return a
				},
				r4: function() {
					return c
				},
				zq: function() {
					return o
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
				o = (0, e.R)(r.ADD_SITE, m => ({
					payload: m
				})),
				c = (0, e.R)(r.RESOLVING_START),
				l = (0, e.R)(r.RESOLVING_COMPLETE),
				g = (0, e.R)(r.SELECT_ZONE, m => ({
					payload: m
				})),
				s = (0, e.R)(r.SELECT_ACCOUNT, m => ({
					payload: m
				})),
				p = (0, e.R)(r.SELECT_PAGES_PROJECT, m => ({
					payload: m
				})),
				f = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, m => ({
					payload: m
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, m => ({
					accountIds: m
				})),
				a = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(r.SELECT_WORKER, m => ({
					payload: m
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				BV: function() {
					return e
				},
				Dz: function() {
					return f
				},
				Fj: function() {
					return c
				},
				Kt: function() {
					return g
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
					return o
				},
				s$: function() {
					return s
				}
			});
			const e = "to",
				r = "_gl",
				o = "freeTrial",
				c = "deepLinkQueryParams",
				l = "resolvedDeepLinkQueryParams",
				g = "add",
				s = "multiSkuProducts",
				p = "/:account/billing/checkout",
				f = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return L
				},
				U: function() {
					return A.U
				},
				dd: function() {
					return A.dd
				},
				bk: function() {
					return g.bk
				},
				Bh: function() {
					return g.Bh
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t("../react/app/redux/index.ts"),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				g = t("../react/app/components/DeepLink/actions.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(s);

			function f(b) {
				for (var D = 1; D < arguments.length; D++) {
					var R = arguments[D] != null ? Object(arguments[D]) : {},
						Z = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(R).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(R, oe).enumerable
					})), Z.forEach(function(oe) {
						n(b, oe, R[oe])
					})
				}
				return b
			}

			function n(b, D, R) {
				return D = a(D), D in b ? Object.defineProperty(b, D, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = R, b
			}

			function a(b) {
				var D = i(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function i(b, D) {
				if (typeof b != "object" || b === null) return b;
				var R = b[Symbol.toPrimitive];
				if (R !== void 0) {
					var Z = R.call(b, D || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			class m {
				constructor(D, R) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", Z => {
						this.resolvers.set(Z, {
							name: Z,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", Z => {
						const oe = this.resolvers.get(Z);
						oe && (oe.endTime = Date.now(), this.resolvers.set(Z, oe))
					}), n(this, "resolverCancel", Z => {
						this.resolverDone(Z), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", Z => {
						const oe = "NO_ACTION",
							ce = {
								actionType: oe,
								startTime: 0
							};
						return {
							start: (le = oe) => {
								const Q = this.resolvers.get(Z);
								ce.actionType = le, ce.startTime = Date.now(), Q && Q.userActions.push(ce)
							},
							finish: (le = oe) => {
								ce.actionType = le, ce.endTime = Date.now()
							},
							cancel: (le = oe) => {
								ce.actionType = le, ce.endTime = Date.now(), this.resolverCancel(Z)
							}
						}
					}), this.deepLink = D, this.legacyDeepLink = R, this.resolvers = new Map
				}
				track(D) {
					try {
						if (this._done) return;
						this._done = !0;
						const R = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: u(this.startTime, this.endTime),
								totalCpuTime: u(this.startTime, this.endTime)
							},
							Z = this.resolvers.size === 0 ? R : Array.from(this.resolvers.values()).reduce((oe, ce) => {
								const le = u(ce.startTime, ce.endTime),
									Q = ce.userActions.reduce((H, N) => {
										const U = u(N.startTime, N.endTime);
										return {
											totalTime: H.totalTime + U,
											actions: H.actions.set(N.actionType, U)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									K = le - Q.totalTime;
								return f({}, oe, {
									totalTime: oe.totalTime + le,
									totalUserActionsTime: oe.totalUserActionsTime + Q.totalTime,
									totalCpuTime: oe.totalCpuTime + K,
									[`${ce.name}ResolverTotalTime`]: le,
									[`${ce.name}ResolverTotalCpuTime`]: K,
									[`${ce.name}ResolverTotalUserActionsTime`]: Q.totalTime
								}, Array.from(Q.actions.keys()).reduce((H, N) => f({}, H, {
									[`${ce.name}Resolver/${N}`]: Q.actions.get(N)
								}), {}))
							}, f({}, R, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						p().sendEvent(D, Z)
					} catch (R) {
						console.error(R)
					}
				}
			}

			function u(b = Date.now(), D = Date.now()) {
				return (D - b) / 1e3
			}
			var d = t("../react/app/components/DeepLink/constants.ts"),
				I = t("../react/common/hooks/useCachedState.ts"),
				P = t("../react/common/hooks/usePrevious.ts");

			function h(b) {
				for (var D = 1; D < arguments.length; D++) {
					var R = arguments[D] != null ? Object(arguments[D]) : {},
						Z = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(R).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(R, oe).enumerable
					})), Z.forEach(function(oe) {
						v(b, oe, R[oe])
					})
				}
				return b
			}

			function v(b, D, R) {
				return D = O(D), D in b ? Object.defineProperty(b, D, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = R, b
			}

			function O(b) {
				var D = _(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function _(b, D) {
				if (typeof b != "object" || b === null) return b;
				var R = b[Symbol.toPrimitive];
				if (R !== void 0) {
					var Z = R.call(b, D || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			var k = ({
					children: b
				}) => {
					const D = (0, r.TZ)(),
						R = (0, o.useHistory)(),
						Z = (0, P.Z)(R.location.pathname),
						[oe, ce] = (0, e.useState)(!0),
						[le, Q] = (0, I.j)(void 0, {
							key: d.Fj
						}),
						[K, H] = (0, I.j)(void 0, {
							key: d.O5
						}),
						[N, U] = (0, I.j)(void 0, {
							key: d.s$
						}),
						S = (0, l.$8)();
					let x = new URLSearchParams(R.location.search);
					const G = (0, c.mL)(R.location.pathname, x);
					let ne = null,
						q = null;
					if (x.has(d.Tc) && x.delete(d.Tc), x.get(d.BV)) ne = x.get(d.BV), R.location.hash && (q = R.location.hash);
					else if (le) {
						const j = new URLSearchParams(le);
						j.get(d.BV) && (ne = j.get(d.BV), x = j)
					} else G && (x.set(d.BV, G), ne = G);
					if (ne && d._h.test(ne)) {
						const j = x.getAll(d.Kt),
							M = JSON.stringify(j);
						j.length && M !== N && U(M), x.has(d.Tc) && x.delete(d.Tc), x.delete(d.Kt)
					}!S && le === void 0 && ne && Q(x.toString());
					const ae = async () => {
						try {
							if ((0, c.I3)(ne) && S) {
								le && Q(void 0), D.dispatch((0, g.r4)()), ce(!0), ne && ne !== K && H(ne);
								const j = await (0, c.py)(ne, ce, D, R, Z, new m(ne, G ? `${R.location.pathname}${R.location.search}` : void 0));
								x.delete(d.BV);
								const M = x.toString();
								R.replace(h({}, R.location, {
									pathname: j,
									search: M
								}, q ? {
									hash: q
								} : {})), D.dispatch((0, g.WF)())
							}
						} catch (j) {
							D.dispatch((0, g.WF)()), console.error(j)
						} finally {
							ce(!1)
						}
					};
					return (0, e.useEffect)(() => {
						ae()
					}, [R.location.pathname, R.location.search]), (oe || (0, c.I3)(ne)) && S ? null : b
				},
				w = t("../react/app/components/DeepLink/reducer.ts"),
				A = t("../react/app/components/DeepLink/selectors.ts"),
				L = k
		},
		"../react/app/components/DeepLink/reducer.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return c
				},
				r: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = t.n(e),
				o = t("../react/app/components/DeepLink/actions.ts");
			const c = null,
				l = r().from({
					lastAction: c,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function g(s = l, p) {
				if (p.type === o.MF.RESOLVING_COMPLETE) return l;
				if (p.type === o.MF.RESOLVING_START) return s.set("isResolving", !0);
				if (s.isResolving) {
					if (p.type === o.MF.RESOLVING_COMPLETE) return s.set("isResolving", !1);
					if (p.type === o.MF.SET_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", p.accountIds);
					if (p.type === o.MF.DELETE_FILTERED_ACCOUNT_IDS) return s.set("filteredAccountIds", void 0);
					{
						let f = s;
						try {
							f = s.set("lastAction", p)
						} catch {
							f = s.set("lastAction", {
								type: p.type
							})
						}
						return f
					}
				} else return s
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return o
				},
				dd: function() {
					return r
				},
				yI: function() {
					return e
				}
			});
			const e = c => c.deepLink.lastAction,
				r = c => c.deepLink.isResolving,
				o = c => c.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				I3: function() {
					return f
				},
				X1: function() {
					return s
				},
				mL: function() {
					return u
				},
				py: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				o = t("../react/app/components/DeepLink/selectors.ts"),
				c = t("../react/app/components/DeepLink/constants.ts"),
				l = t("../react/common/validators/index.js"),
				g = t("../react/common/utils/isGuards.ts");
			const s = d => (0, l.Lb)(d) && (d.split(".").length > 1 || (0, g.v5)(d)),
				p = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				f = d => typeof d == "string" && d.startsWith("/"),
				n = (d, I) => P => new Promise((h, v) => {
					I.start();
					const O = d.subscribe(() => {
						const _ = (0, o.yI)(d.getState());
						_ === r.E ? (I.cancel(), O(), v("DeepLink: waitForAction out of context.")) : P(_) && (I.finish(_.type), O(), h(_))
					})
				}),
				a = (d, I, P) => (h, v) => new Promise((O, _) => {
					P.start();
					const T = I.location.pathname;
					h = new URL(h, window.location.href).pathname, T !== h && (P.cancel(), _(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${h}", but on "${T}". You need to redirect to "${h}", and unblockRouter in your Resolver, before you use this function.`));
					const k = d.subscribe(() => {
						const w = (0, o.yI)(d.getState()),
							A = I.location.pathname,
							b = new URLSearchParams(I.location.search).get(c.BV);
						(A !== h || !!b) && (P.cancel(), k(), _(`DeepLink: waitForPageAction user navigated away from "${h}" to "${A}${b?I.location.search:""}"`)), w === r.E ? (P.cancel(), k(), _("DeepLink: waitForPageAction out of context.")) : v(w) && (P.finish(w.type), k(), O(w))
					})
				});

			function i(d) {
				const I = [],
					P = d.split("?")[0].split("/");
				for (let h of P) h.length !== 0 && (h.startsWith(":") ? I.push({
					value: h.substring(1),
					type: "dynamic"
				}) : I.push({
					value: h,
					type: "static"
				}));
				return I
			}
			async function m(d, I, P, h, v, O) {
				O.start();
				const _ = i(d),
					k = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					w = {};
				let A = "";
				for (const [L, b] of _.entries())
					if (b.type === "static") A = [A, b.value].join("/");
					else if (b.type === "dynamic" && p.is(b.value) && b.value in k) {
					O.resolverStart(b.value);
					const D = await k[b.value]({
						deepLink: d,
						blockRouter: () => I(!0),
						unblockRouter: () => I(!1),
						routerHistory: h,
						resolvedValues: w,
						store: P,
						referringRoute: v,
						uri: {
							currentPartIdx: L,
							parts: _
						},
						waitForAction: n(P, O.createUserActionTracker(b.value)),
						waitForPageAction: a(P, h, O.createUserActionTracker(b.value))
					});
					O.resolverDone(b.value), A = [A, D].join("/"), w[b.value] = D
				} else throw O.cancel(), new Error(`DeepLink: Resolver with name '${b.value}' is not supported.`);
				return O.done(), A
			}

			function u(d, I) {
				const P = ":account",
					h = ":zone",
					v = I.get("zone");
				if (v) return I.delete("zone"), `/${P}/${h}/${v}`;
				const O = I.get("account");
				if (O) return I.delete("account"), `/${P}/${O}`;
				if (d === "/overview") return `/${P}/${h}`;
				const _ = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const T of _) {
					const k = T.length;
					if (d.startsWith(T) && (d.length === k || d[k] === "/")) return `/${P}/${h}${d}`
				}
				switch (d) {
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
		"../react/app/components/ErrorBoundary.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				c = t("../react/app/components/SomethingWrong.jsx"),
				l = t("../utils/sentry/lastSentEventId.ts"),
				g = t("../react/utils/zaraz.ts"),
				s = t("../react/utils/url.ts"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				f = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(a),
				m = t("../react/common/components/Page.tsx"),
				u = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function d() {
				return (0, e.useEffect)(() => {
					i().sendEvent("new page available refresh cta")
				}, []), r().createElement(m.Z, {
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
					src: u,
					"aria-hidden": !0
				})), r().createElement(f.zx, {
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
				children: h,
				fallbackComponent: v
			}) => r().createElement(o.SV, {
				beforeCapture: O => {
					g.tg === null || g.tg === void 0 || g.tg.track("page-error", {
						page: (0, s.Fl)(window.location.pathname)
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
					eventId: _
				}) => {
					var T;
					if (v) return v;
					const k = l.e.getEventId() || _;
					return (O == null || (T = O.message) === null || T === void 0 ? void 0 : T.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(d, null)) : r().createElement(c.Z, {
						type: "page",
						error: O,
						eventId: k,
						sentryTag: P
					})
				}
			}, h)
		},
		"../react/app/components/Footer.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return U
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(s),
				f = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				a = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/moment/moment.js"),
				m = t.n(i);
			const u = () => {
					const S = m()().format("YYYY"),
						x = G => {
							p().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: G
							})
						};
					return r().createElement(d, {
						marginTop: "auto"
					}, r().createElement(I, null, r().createElement(P, null, r().createElement(h, null, "\xA9 ", S, " Cloudflare, Inc."), r().createElement(h, null, r().createElement(v, null, r().createElement(O, {
						showOnDeskTop: !1
					}, r().createElement(_, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => x("Support")
					}, r().createElement(a.cC, {
						id: "common.support"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => x("Privacy Policy")
					}, r().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => x("Terms of Use")
					}, r().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => x("Cookie Preferences")
					}, r().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(O, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => x("Trademark")
					}, r().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(v, null, r().createElement(O, null, r().createElement(_, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => x("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				d = (0, l.createComponent)(({
					theme: S,
					marginTop: x
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: x
				})),
				I = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				P = (0, l.createComponent)(({
					theme: S
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${S.space[3]}px`
					}
				})),
				h = (0, l.createComponent)(({
					theme: S
				}) => ({
					width: "100%",
					color: S.colors.white,
					fontSize: S.fontSizes[1],
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
				v = (0, l.createComponent)(({
					theme: S
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: S.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				O = (0, l.createComponent)(({
					showOnDeskTop: S = !0,
					theme: x
				}) => ({
					color: x.colors.white,
					fontSize: x.fontSizes[1],
					height: "20px",
					display: S ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: x.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: x.space[3],
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
				_ = (0, l.createStyledComponent)(({
					theme: S
				}) => ({
					textDecoration: "none",
					color: S.colors.white,
					"&:hover": {
						color: S.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var T = u,
				k = t("../react/pages/welcome/routes.ts"),
				w = t("../react/utils/cookiePreferences.ts"),
				A = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				b = () => {
					const [S, x] = (0, e.useState)(!1), G = (0, w.wV)(), ne = () => {
						x(!0)
					}, q = () => {
						x(!1)
					}, ae = G && G === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), j = {
						background: "transparent",
						borderRadius: "none",
						color: S ? (0, g.Yc)() ? "#ee730a" : "#003681" : (0, g.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: S ? "underline" : "none",
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
					return r().createElement(c.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: j,
						onMouseEnter: ne,
						onMouseLeave: q
					}, r().createElement(c.Ei, {
						height: 15,
						src: A,
						mr: 2,
						alt: ae
					}), ae)
				};

			function D() {
				return D = Object.assign ? Object.assign.bind() : function(S) {
					for (var x = 1; x < arguments.length; x++) {
						var G = arguments[x];
						for (var ne in G) Object.prototype.hasOwnProperty.call(G, ne) && (S[ne] = G[ne])
					}
					return S
				}, D.apply(this, arguments)
			}

			function R(S, x) {
				if (S == null) return {};
				var G = Z(S, x),
					ne, q;
				if (Object.getOwnPropertySymbols) {
					var ae = Object.getOwnPropertySymbols(S);
					for (q = 0; q < ae.length; q++) ne = ae[q], !(x.indexOf(ne) >= 0) && (!Object.prototype.propertyIsEnumerable.call(S, ne) || (G[ne] = S[ne]))
				}
				return G
			}

			function Z(S, x) {
				if (S == null) return {};
				var G = {},
					ne = Object.keys(S),
					q, ae;
				for (ae = 0; ae < ne.length; ae++) q = ne[ae], !(x.indexOf(q) >= 0) && (G[q] = S[q]);
				return G
			}
			const oe = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,g.Yc)()?g.rS.colors.orange[6]:g.rS.colors.blue[4]}`
					}
				}), c.A),
				ce = (0, l.createStyledComponent)(({
					theme: S
				}) => ({
					color: S.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, f.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: S.colors.gray[4]
					}
				}), c.A),
				le = S => {
					let {
						onClick: x
					} = S, G = R(S, ["onClick"]);
					return React.createElement(oe, D({
						onClick: ne => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: G.href
							}), x && x(ne)
						}
					}, G))
				},
				Q = S => {
					let {
						children: x,
						target: G,
						rel: ne
					} = S, q = R(S, ["children", "target", "rel"]);
					return r().createElement(ce, D({
						target: G || "_blank",
						rel: ne || "noopener noreferrer"
					}, q), x)
				},
				K = (0, l.createStyledComponent)(({
					theme: S
				}) => ({
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: (0, f.tq)() ? "8px" : "16px",
					"& > li": {
						listStyleType: "none",
						"& > a": {
							fontSize: S.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: S.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), c.Ul),
				H = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, f.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), c.ZC);
			var U = () => {
				const S = [k.d.root.pattern].some(G => (0, o.matchPath)(location.pathname, {
					path: G
				}));
				if ((0, n.PP)()) return r().createElement(T, null);
				if (S) return null;
				const x = new Date().getFullYear();
				return r().createElement(c.$_, {
					height: (0, f.tq)() ? "auto" : 60,
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: "19px",
					pb: 0,
					px: [4, 3, 3],
					mt: "auto",
					id: "site-footer"
				}, r().createElement(H, null, r().createElement(K, null, r().createElement(c.Li, null, r().createElement(Q, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), r().createElement(c.Li, null, r().createElement(Q, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(c.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), r().createElement(c.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), r().createElement(c.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), r().createElement(c.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), r().createElement(c.Li, null, r().createElement(Q, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), r().createElement(c.Li, null, r().createElement(b, null)), r().createElement(c.Li, null, r().createElement(c.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", x, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/utils/translator.tsx");
			const l = g => r().createElement(o.Z, g, (0, c.ZP)("error.forbidden"));
			E.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return I
				},
				Z: function() {
					return ae
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				f = t.n(p),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../react/common/components/AccessControl/index.js"),
				i = t("../react/common/components/ButtonWithDropdown.tsx"),
				m = t("../react/common/components/Dropdown/index.tsx"),
				u = t("../react/utils/translator.tsx"),
				d = t("../react/common/hooks/useGate.ts");
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
					const j = (0, d.Z)("super-add-button-copy-change"),
						M = [{
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
					switch (j) {
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
							}, ...M];
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
							}, ...M];
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
							}, ...M];
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
							}, ...M];
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
							}, ...M];
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
				h = [{
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
			var v = t("webpack/sharing/consume/default/react-router-dom/react-router-dom");

			function O(j) {
				for (var M = 1; M < arguments.length; M++) {
					var $ = arguments[M] != null ? Object(arguments[M]) : {},
						J = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols($).filter(function(ue) {
						return Object.getOwnPropertyDescriptor($, ue).enumerable
					})), J.forEach(function(ue) {
						_(j, ue, $[ue])
					})
				}
				return j
			}

			function _(j, M, $) {
				return M = T(M), M in j ? Object.defineProperty(j, M, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[M] = $, j
			}

			function T(j) {
				var M = k(j, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function k(j, M) {
				if (typeof j != "object" || j === null) return j;
				var $ = j[Symbol.toPrimitive];
				if ($ !== void 0) {
					var J = $.call(j, M || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(j)
			}

			function w() {
				return w = Object.assign ? Object.assign.bind() : function(j) {
					for (var M = 1; M < arguments.length; M++) {
						var $ = arguments[M];
						for (var J in $) Object.prototype.hasOwnProperty.call($, J) && (j[J] = $[J])
					}
					return j
				}, w.apply(this, arguments)
			}

			function A(j, M) {
				if (j == null) return {};
				var $ = L(j, M),
					J, ue;
				if (Object.getOwnPropertySymbols) {
					var se = Object.getOwnPropertySymbols(j);
					for (ue = 0; ue < se.length; ue++) J = se[ue], !(M.indexOf(J) >= 0) && (!Object.prototype.propertyIsEnumerable.call(j, J) || ($[J] = j[J]))
				}
				return $
			}

			function L(j, M) {
				if (j == null) return {};
				var $ = {},
					J = Object.keys(j),
					ue, se;
				for (se = 0; se < J.length; se++) ue = J[se], !(M.indexOf(ue) >= 0) && ($[ue] = j[ue]);
				return $
			}
			const b = j => {
					let {
						title: M,
						trackingEvent: $,
						icon: J,
						url: ue,
						description: se,
						disabled: pe
					} = j, te = A(j, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(D, w({
						to: !pe && ue || "#",
						"aria-disabled": pe,
						onClick: () => {
							f().sendEvent($, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, te), r().createElement(c.ZC, {
						display: "flex"
					}, r().createElement(o.J, {
						type: J,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(c.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(c.ZC, {
						fontSize: 3
					}, r().createElement(u.cC, M)), r().createElement(c.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(u.cC, se)))))
				},
				D = (0, n.createStyledComponent)(({
					theme: j
				}) => {
					const M = {
						cursor: "pointer",
						backgroundColor: (0, g.Yc)() ? j.colors.gray[8] : j.colors.gray[9],
						color: j.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: j.colors.background,
						color: j.colors.gray[2],
						fontSize: j.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': M,
						':focus-within:not([aria-disabled="true"])': O({}, M, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: j.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, v.Link);
			var R = b;

			function Z() {
				return Z = Object.assign ? Object.assign.bind() : function(j) {
					for (var M = 1; M < arguments.length; M++) {
						var $ = arguments[M];
						for (var J in $) Object.prototype.hasOwnProperty.call($, J) && (j[J] = $[J])
					}
					return j
				}, Z.apply(this, arguments)
			}

			function oe(j) {
				for (var M = 1; M < arguments.length; M++) {
					var $ = arguments[M] != null ? Object(arguments[M]) : {},
						J = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols($).filter(function(ue) {
						return Object.getOwnPropertyDescriptor($, ue).enumerable
					})), J.forEach(function(ue) {
						ce(j, ue, $[ue])
					})
				}
				return j
			}

			function ce(j, M, $) {
				return M = le(M), M in j ? Object.defineProperty(j, M, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[M] = $, j
			}

			function le(j) {
				var M = Q(j, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function Q(j, M) {
				if (typeof j != "object" || j === null) return j;
				var $ = j[Symbol.toPrimitive];
				if ($ !== void 0) {
					var J = $.call(j, M || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(j)
			}

			function K(j, M) {
				if (j == null) return {};
				var $ = H(j, M),
					J, ue;
				if (Object.getOwnPropertySymbols) {
					var se = Object.getOwnPropertySymbols(j);
					for (ue = 0; ue < se.length; ue++) J = se[ue], !(M.indexOf(J) >= 0) && (!Object.prototype.propertyIsEnumerable.call(j, J) || ($[J] = j[J]))
				}
				return $
			}

			function H(j, M) {
				if (j == null) return {};
				var $ = {},
					J = Object.keys(j),
					ue, se;
				for (se = 0; se < J.length; se++) ue = J[se], !(M.indexOf(ue) >= 0) && ($[ue] = j[ue]);
				return $
			}
			const N = "GLOBAL_ADD_DROPDOWN",
				U = (0, n.createStyledComponent)(({
					theme: j
				}) => ({
					"background-color": j.colors.blue[5]
				}), l.zx),
				S = ({
					disableProducts: j
				}) => {
					const M = P();
					return (0, e.useEffect)(() => (f().sendEvent("open add product dropdown", {
						category: "add product dropdown"
					}), () => {
						f().sendEvent("close add product dropdown", {
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
					}, M.map($ => {
						const J = $ || {},
							{
								disableOn: ue,
								permissionCheck: se
							} = J,
							pe = K(J, ["disableOn", "permissionCheck"]),
							te = ue && j[ue],
							ye = oe({}, pe, {
								disabled: te
							});
						return se ? r().createElement(a.Z, {
							key: $.title.id,
							edit: se
						}, ({
							isEditable: Oe
						}) => Oe && r().createElement(R, ye)) : r().createElement(R, Z({
							key: $.url
						}, ye))
					}))
				},
				x = ({
					disableProducts: j,
					topNavType: M
				}) => {
					const $ = () => (0, s.tq)() || M === "icon-only" ? r().createElement(c.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(U, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : M === "text-icon" || M === "icon-only-with-add-button" ? r().createElement(l.zx, {
						type: "primary",
						mr: M === "text-icon" ? 2 : 3
					}, r().createElement(r().Fragment, null, r().createElement(o.J, {
						label: "plus",
						type: "plus"
					}), " ", r().createElement(u.cC, {
						id: "common.add"
					}))) : r().createElement(l.zx, {
						type: "primary",
						mr: 2
					}, r().createElement(u.cC, {
						id: "common.add"
					}), " ", r().createElement(o.J, {
						label: "arrow",
						type: "caret-down"
					}));
					return r().createElement(G, {
						role: "group",
						"data-testid": N
					}, r().createElement(m.Lt, {
						trigger: M === "baseline" ? r().createElement(ne, null, r().createElement(o.J, {
							label: "plus",
							type: "plus"
						}), !(0, s.tq)() && r().createElement(r().Fragment, null, r().createElement(u.cC, {
							id: "common.add"
						}), " ", r().createElement(o.J, {
							label: "arrow",
							type: "caret-down"
						}))) : $(),
						menu: r().createElement(S, {
							disableProducts: j
						})
					}))
				},
				G = (0, n.createStyledComponent)(() => ({
					height: "100%",
					position: "relative",
					display: "flex",
					alignItems: "center"
				})),
				ne = (0, n.createStyledComponent)(({
					theme: j
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: j.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, g.Yc)() ? j.colors.gray[1] : j.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, g.Yc)() ? j.colors.gray[8] : j.colors.gray[9]
					}
				}), c.zx);
			var q = x,
				ae = q
		},
		"../react/app/components/LoadingSuspense.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../react/utils/translator.tsx"),
				g = t("../react/app/components/ErrorStatus.tsx"),
				s = t("../react/common/components/EmptyPage.jsx"),
				p = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const f = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(f))
				}, [])
			}

			function a(P) {
				useEventListener(f, () => {
					window.setTimeout(P, 0)
				}, {
					target: window
				})
			}

			function i(...P) {
				const [h, v] = P;
				React.useLayoutEffect(h, v), a(h)
			}

			function m(P) {
				const [h, v] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const O = window.setTimeout(() => v(!0), P);
					return () => window.clearTimeout(O)
				}, []), h
			}
			const u = ({
				loadingTimeout: P = 1e3,
				stillLoadingTimeout: h = 9e3
			}) => {
				const v = m(P),
					O = m(h);
				if (n(), !v && !O) return r().createElement(s.Z, null);
				const _ = O ? r().createElement(l.cC, {
					id: "common.still_loading"
				}) : v ? r().createElement(l.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(g.Z, {
					size: 5
				}, r().createElement(c.ZC, {
					mr: 3
				}, r().createElement(o.g, {
					size: "2x"
				})), _)
			};
			var I = ({
				children: P
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(u, null)
			}, P)
		},
		"../react/app/components/Persistence/api.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				C8: function() {
					return p
				},
				Mn: function() {
					return i
				},
				Sp: function() {
					return a
				},
				dr: function() {
					return l
				},
				lt: function() {
					return g
				},
				m6: function() {
					return n
				},
				n: function() {
					return f
				},
				yl: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const o = "/persistence/user",
				c = async () => {
					try {
						return await (await e.get(o, {
							hideErrorAlert: !0
						})).body
					} catch (m) {
						console.error(m)
					}
				}, l = async m => {
					try {
						return await (await e.get(`/accounts/${m}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (u) {
						console.error(u)
					}
				}, g = async (m, u) => {
					try {
						return await (await e.post(`${o}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: m,
								accountId: u
							}),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						return console.error(d), []
					}
				}, s = async (m, u) => {
					try {
						return await http.post(`/accounts/${m}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: u
							}),
							hideErrorAlert: !0
						}), !0
					} catch (d) {
						return console.error(d), !1
					}
				}, p = async m => {
					try {
						return await (await e.post(o, {
							body: JSON.stringify({
								darkMode: m
							})
						})).body
					} catch (u) {
						console.error(u)
					}
				}, f = async m => {
					try {
						return await (await e.post(`${o}/recents`, {
							body: JSON.stringify(m),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						console.error(u)
					}
				}, n = async m => {
					try {
						return await (await e.post(`${o}/viewed-changes`, {
							body: JSON.stringify(m),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}, a = async m => {
					try {
						return await (await e.post(o + "/flags", {
							body: JSON.stringify(m)
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}, i = async (m, u) => {
					try {
						return await (await e.post(`${o}/dismissed-tasks`, {
							body: JSON.stringify({
								name: m,
								accountId: u
							}),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/components/Persistence/index.tsx");
			const c = () => (0, e.useContext)(o.lp)
		},
		"../react/app/components/Persistence/index.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				Wl: function() {
					return f
				},
				lp: function() {
					return P
				},
				Z_: function() {
					return v
				},
				r7: function() {
					return D
				},
				Tv: function() {
					return H
				},
				yZ: function() {
					return O.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/redux/index.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c),
				g = t("../react/utils/bootstrap.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/Persistence/api.ts");
			const f = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function a(N) {
				for (var U = 1; U < arguments.length; U++) {
					var S = arguments[U] != null ? Object(arguments[U]) : {},
						x = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(S).filter(function(G) {
						return Object.getOwnPropertyDescriptor(S, G).enumerable
					})), x.forEach(function(G) {
						i(N, G, S[G])
					})
				}
				return N
			}

			function i(N, U, S) {
				return U = m(U), U in N ? Object.defineProperty(N, U, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[U] = S, N
			}

			function m(N) {
				var U = u(N, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function u(N, U) {
				if (typeof N != "object" || N === null) return N;
				var S = N[Symbol.toPrimitive];
				if (S !== void 0) {
					var x = S.call(N, U || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(N)
			}
			const d = {
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
				I = a({}, d, {
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
				h = P.Consumer,
				v = ({
					children: N,
					onDarkModeChangeCb: U
				}) => {
					const [S, x] = (0, e.useState)(d), [G, ne] = (0, e.useState)(I.isLoading), [q, ae] = (0, e.useState)(!1), j = (0, g.$8)(), M = (0, o.p4)(pe => (0, s.wH)(pe)), [, $] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						j ? (0, p.yl)().then(pe => {
							if (pe) {
								var te;
								x(pe), $(pe == null || (te = pe.flags) === null || te === void 0 ? void 0 : te.hasEnabledSecurityNavigation), l().identify({
									hasEnabledSecurityNavigation: pe.flags.hasEnabledSecurityNavigation
								}), U(pe.darkMode)
							}
						}).finally(() => ne(!1)) : ne(!1)
					}, [j]);
					const J = (pe, te) => !!S.favorites.find(ye => ye.type === "zone" && ye.name === pe && ye.accountId === te),
						ue = f - S.favorites.length,
						se = pe => S.favorites.filter(ye => ye.type === "zone" && ye.accountId === pe).length < f;
					return r().createElement(P.Provider, {
						value: a({}, S, {
							isLoading: G,
							remainingStarSlots: ue,
							isUpdatingFlags: q,
							actions: {
								canAccountStarZone: se,
								isZoneStarred: J,
								starZone: async (pe, te) => {
									var ye;
									const Oe = !J(pe, te),
										Ie = se(te);
									if (Oe && !Ie) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Le = await (0, p.lt)(pe, te);
									l().sendEvent("click star zone", {
										isStarring: Oe,
										totalStarredZones: Le.filter(Se => Se.accountId === te && Se.type === "zone").length,
										totalZones: M == null || (ye = M.paginationData) === null || ye === void 0 ? void 0 : ye.info.total_count
									}), x(a({}, S, {
										favorites: Le
									}))
								},
								toggleSecurityNavigation: async pe => {
									ae(!0), await (0, p.Sp)({
										hasEnabledSecurityNavigation: pe
									}), l().identify({
										hasEnabledSecurityNavigation: pe
									}), ae(!1), $(pe), x(a({}, S, {
										flags: {
											hasEnabledSecurityNavigation: pe
										}
									}))
								},
								setDarkMode: async pe => {
									const te = await (0, p.C8)(pe);
									x(te), U(te.darkMode)
								},
								logRouteVisited: async pe => {
									var te;
									const ye = await (0, p.n)(pe);
									x((te = ye) !== null && te !== void 0 ? te : a({}, S))
								},
								viewChange: async pe => {
									const te = await (0, p.m6)(pe);
									x(a({}, S, {
										viewedChanges: te
									}))
								},
								dismissTask: async (pe, te) => {
									const ye = await (0, p.Mn)(pe, te);
									x(a({}, S, {
										dismissedTasks: ye
									}))
								}
							}
						})
					}, N)
				};
			var O = t("../react/app/components/Persistence/hooks.ts"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function k() {
				return k = Object.assign ? Object.assign.bind() : function(N) {
					for (var U = 1; U < arguments.length; U++) {
						var S = arguments[U];
						for (var x in S) Object.prototype.hasOwnProperty.call(S, x) && (N[x] = S[x])
					}
					return N
				}, k.apply(this, arguments)
			}

			function w(N, U) {
				if (N == null) return {};
				var S = A(N, U),
					x, G;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(N);
					for (G = 0; G < ne.length; G++) x = ne[G], !(U.indexOf(x) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, x) || (S[x] = N[x]))
				}
				return S
			}

			function A(N, U) {
				if (N == null) return {};
				var S = {},
					x = Object.keys(N),
					G, ne;
				for (ne = 0; ne < x.length; ne++) G = x[ne], !(U.indexOf(G) >= 0) && (S[G] = N[G]);
				return S
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
			var D = N => {
					let {
						isStarred: U,
						size: S = 16
					} = N, x = w(N, ["isStarred", "size"]);
					const G = L[(0, _.Yc)() ? "dark" : "light"];
					return r().createElement(T.J, k({
						type: U ? "star" : "star-outline",
						color: U ? G.gold : G.gray,
						size: S
					}, x))
				},
				R = t("../node_modules/@cloudflare/elements/es/index.js");

			function Z(N) {
				for (var U = 1; U < arguments.length; U++) {
					var S = arguments[U] != null ? Object(arguments[U]) : {},
						x = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && x.push.apply(x, Object.getOwnPropertySymbols(S).filter(function(G) {
						return Object.getOwnPropertyDescriptor(S, G).enumerable
					})), x.forEach(function(G) {
						oe(N, G, S[G])
					})
				}
				return N
			}

			function oe(N, U, S) {
				return U = ce(U), U in N ? Object.defineProperty(N, U, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[U] = S, N
			}

			function ce(N) {
				var U = le(N, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function le(N, U) {
				if (typeof N != "object" || N === null) return N;
				var S = N[Symbol.toPrimitive];
				if (S !== void 0) {
					var x = S.call(N, U || "default");
					if (typeof x != "object") return x;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(N)
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
			var H = (0, e.forwardRef)(({
				featurePreview: N = !1,
				isStarred: U,
				onClickFn: S,
				isDisabled: x,
				testId: G,
				buttonText: ne,
				size: q = "large",
				variant: ae = "pill"
			}, j) => {
				const [M, $] = (0, e.useState)(!1), J = Q[(0, _.Yc)() ? "dark" : "light"][U && !N ? "active" : "default"], ue = Z({}, q === "large" && {
					starIconSize: 16,
					fontSize: 3,
					height: "auto",
					paddingLeft: "12px",
					paddingRight: 3
				}, q === "medium" && {
					starIconSize: 16,
					fontSize: 2,
					height: "2rem",
					paddingRight: 2,
					paddingLeft: 2
				}, q === "small" && {
					starIconSize: 14,
					fontSize: 1,
					height: "1.5rem",
					paddingLeft: "6px",
					paddingRight: 2
				}), se = {
					pill: "50vh",
					button: 4
				};
				return r().createElement(R.zx, {
					onMouseEnter: () => $(!0),
					onMouseLeave: () => $(!1),
					innerRef: j,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ue.paddingRight,
					gap: 1,
					pl: ue.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: se[ae],
					border: "1px solid",
					cursor: N || x ? "default" : "pointer",
					backgroundColor: M ? J.bgHover : J.bg,
					color: J.text,
					borderColor: J.border,
					onClick: S,
					opacity: x ? .5 : 1,
					disabled: x,
					fontSize: ue.fontSize,
					height: ue.height,
					"data-testid": G
				}, r().createElement(D, {
					isStarred: N ? !1 : U,
					size: ue.starIconSize
				}), ne)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				iY: function() {
					return h
				},
				us: function() {
					return D
				},
				wB: function() {
					return v
				},
				gw: function() {
					return ce
				},
				dL: function() {
					return k
				},
				IU: function() {
					return T
				},
				Wq: function() {
					return Z
				},
				fO: function() {
					return R
				},
				zJ: function() {
					return b
				},
				o_: function() {
					return L
				},
				jq: function() {
					return le
				},
				hv: function() {
					return _
				},
				$n: function() {
					return O
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				g = t("../react/pages/stream/selectors.ts"),
				s = t("../react/pages/home/domain-registration/selectors.ts"),
				p = t("../react/pages/images/selectors.ts");
			const f = "r2_migrator_waitlist",
				n = "r2migrator",
				a = "r2",
				i = "r2_storage_migrator",
				m = "r2_storage_migrator",
				u = Q => getAccountEntitlement(Q, "r2.enabled"),
				d = Q => Boolean((0, o.Le)(Q, i, f)),
				I = Q => Boolean(getAccountFlipperFlagsChanges(Q, m, n)),
				P = Q => !!(0, l.b)(Q),
				h = Q => P(Q) ? (0, e.hT)(Q) : !0,
				v = (Q, K, H, N = "read") => {
					const U = (0, o.nA)(Q);
					return P(Q) ? (0, e.WL)(Q, (0, e.W9)(H, e.ZZ[N]), (0, e.j)(U == null ? void 0 : U.id)) : (0, c.Yj)(Q)(K)[N]
				},
				O = (Q, K, H, N = "read") => {
					const U = (0, o.nA)(Q),
						S = e.zs.includes(H);
					return P(Q) ? (0, e.WL)(Q, S ? H : (0, e.my)(H, e.ZZ[N === "edit" ? "update" : N]), (0, e.j)(U == null ? void 0 : U.id)) : (0, c.Yj)(Q)(K)[N === "update" ? "edit" : N]
				},
				_ = Q => !!(0, g._Q)(Q),
				T = Q => (0, p.pT)(Q),
				k = Q => (0, p.pT)(Q) && (0, p.GH)(Q),
				w = Q => sourcingKitEnabledSelector(Q),
				A = Q => !!r2EnabledSelector(Q),
				L = Q => d(Q),
				b = Q => (0, r.$f)(Q, "rulesets.magic_transit_allowed"),
				D = Q => (0, r.$f)(Q, "flowtrackd.magic_custom_config_allowed"),
				R = Q => (0, r.$f)(Q, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				Z = Q => (0, c.Le)(Q, "ddos_protection", "l4_rulesets"),
				oe = Q => hasAccountEntitlements(Q, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				ce = Q => (0, s.HO)(Q),
				le = Q => !(0, r.yD)(Q) && !!O(Q, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(o),
				l = t("../../../../node_modules/prop-types/index.js"),
				g = t.n(l),
				s = t("webpack/sharing/consume/default/react-redux/react-redux"),
				p = t.n(s),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(f),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				m = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				u = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				d = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				I = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				P = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = t.n(P),
				v = t("../react/common/actions/membershipActions.ts"),
				O = t("../react/utils/url.ts"),
				_ = t("../react/app/components/Footer.tsx");

			function T(K) {
				for (var H = 1; H < arguments.length; H++) {
					var N = arguments[H] != null ? Object(arguments[H]) : {},
						U = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(N).filter(function(S) {
						return Object.getOwnPropertyDescriptor(N, S).enumerable
					})), U.forEach(function(S) {
						k(K, S, N[S])
					})
				}
				return K
			}

			function k(K, H, N) {
				return H = w(H), H in K ? Object.defineProperty(K, H, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[H] = N, K
			}

			function w(K) {
				var H = A(K, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function A(K, H) {
				if (typeof K != "object" || K === null) return K;
				var N = K[Symbol.toPrimitive];
				if (N !== void 0) {
					var U = N.call(K, H || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(K)
			}
			const L = (0, a.createComponent)(({
					type: K
				}) => ({
					height: K !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, a.createComponent)(({
					theme: K,
					margin: H,
					size: N = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: K.colors.gray[3],
					height: H ? "auto" : "100%",
					padding: H ? 0 : K.space[N > 1 ? N - 2 : 0],
					margin: H,
					justifyContent: "center",
					alignItems: "center"
				})),
				D = (0, a.createComponent)(() => ({
					textAlign: "left"
				})),
				R = (0, a.createComponent)(() => ({
					textAlign: "right"
				})),
				Z = (0, a.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[6]
				})),
				oe = (0, a.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[4]
				})),
				ce = (0, a.createComponent)(({
					theme: K
				}) => ({
					fontSize: K.fontSizes[3]
				})),
				le = (0, a.createComponent)(({
					theme: K
				}) => ({
					width: "100%",
					height: 125,
					marginTop: K.space[4],
					padding: K.space[2]
				}), "textarea");
			class Q extends r().Component {
				constructor(...H) {
					super(...H);
					k(this, "state", {
						value: "",
						submitted: !1
					}), k(this, "handleTextareaChange", N => {
						this.setState({
							value: N.target.value
						})
					}), k(this, "sendErrToSentry10", async () => {
						try {
							var N, U, S, x;
							const G = ((N = window) === null || N === void 0 || (U = N.bootstrap) === null || U === void 0 || (S = U.data) === null || S === void 0 || (x = S.user) === null || x === void 0 ? void 0 : x.id) || "Unknown",
								ne = this.props.eventId || m.eW(),
								q = {
									name: G,
									email: `${G}@userid.com`,
									comments: this.state.value,
									eventId: ne,
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
								body: JSON.stringify(q)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (G) {
							console.error(G)
						}
					}), k(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), k(this, "renderContent", N => r().createElement(f.I18n, null, U => r().createElement(L, {
						type: N
					}, r().createElement(b, null, r().createElement(D, null, r().createElement(Z, null, U.t("error.internal_issues")), r().createElement(oe, null, U.t("error.help_us")), r().createElement(le, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: S => this.handleTextareaChange(S),
						disabled: this.state.submitted,
						placeholder: U.t("error.give_feedback")
					}), r().createElement(R, null, !this.state.submitted && r().createElement(i.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, U.t("common.submit")), this.state.submitted && r().createElement(ce, null, U.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: H,
						sentryTag: N,
						membershipsList: U
					} = this.props;
					console.error(`SomethingWrong: ${H}`);
					let S = "";
					const x = (0, O.e1)();
					if (x) {
						var G;
						const q = await U({
								parameters: {
									status: "accepted"
								}
							}),
							ae = q == null || (G = q.find(j => j.id === x)) === null || G === void 0 ? void 0 : G.roles;
						ae && ae.length && (S = ae.join(", "))
					}
					const ne = `ErrorBoundary - ${H}`;
					u.Tb(ne, {
						tags: {
							errorBoundary: N,
							normalizedPath: (0, O.Fl)(window.location.pathname),
							roles: S.length ? S : void 0
						}
					}), h().sendEvent("something wrong", {
						error: H,
						roles: S.length ? S : void 0
					})
				}
				render() {
					const {
						type: H
					} = this.props;
					return H === "fullscreen" ? r().createElement("div", null, r().createElement(d.h4, null, r().createElement(o.Link, {
						to: "/"
					}, r().createElement(I.TR, null))), this.renderContent(H), r().createElement(_.Z, null)) : this.renderContent(H)
				}
			}
			Q.propTypes = {
				type: g().oneOf(["fullscreen", "page"]),
				error: g().oneOfType([g().string, g().object]),
				eventId: g().string,
				sentryTag: g().string,
				membershipsList: g().func
			}, E.Z = (0, s.connect)(() => ({}), {
				membershipsList: v.YT
			})(Q)
		},
		"../react/app/providers/storeContainer.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				bh: function() {
					return R
				}
			});
			var e = t("../../../../node_modules/redux/es/redux.js"),
				r = t("../../../../node_modules/redux-logger/dist/redux-logger.js"),
				o = t.n(r),
				c = t("../../../../node_modules/redux-thunk/es/index.js"),
				l = t("../../../../node_modules/redux-persist/es/index.js"),
				g = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				s = t("../react/app/rootReducer.js"),
				p = t("../react/app/redux/normalizer.js"),
				f = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				a = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				m = t("../react/common/sagas/index.js"),
				u = t("../react/app/redux/processActionMiddleware.js"),
				d = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				I = t("../../../../node_modules/is-promise/index.js"),
				P = t.n(I);

			function h(Z) {
				for (var oe = 1; oe < arguments.length; oe++) {
					var ce = arguments[oe] != null ? Object(arguments[oe]) : {},
						le = Object.keys(ce);
					typeof Object.getOwnPropertySymbols == "function" && le.push.apply(le, Object.getOwnPropertySymbols(ce).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(ce, Q).enumerable
					})), le.forEach(function(Q) {
						v(Z, Q, ce[Q])
					})
				}
				return Z
			}

			function v(Z, oe, ce) {
				return oe = O(oe), oe in Z ? Object.defineProperty(Z, oe, {
					value: ce,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Z[oe] = ce, Z
			}

			function O(Z) {
				var oe = _(Z, "string");
				return typeof oe == "symbol" ? oe : String(oe)
			}

			function _(Z, oe) {
				if (typeof Z != "object" || Z === null) return Z;
				var ce = Z[Symbol.toPrimitive];
				if (ce !== void 0) {
					var le = ce.call(Z, oe || "default");
					if (typeof le != "object") return le;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (oe === "string" ? String : Number)(Z)
			}
			const T = {
					key: "cf-redux-store",
					storage: g.Z,
					whitelist: ["accountAccess", "invite"]
				},
				k = (0, i.ZP)(),
				A = [({
					dispatch: Z
				}) => oe => ce => P()(ce) ? ce.then(le => Z(le)) : oe(ce), k, c.Z, u.Z, p.qR],
				L = Z => (0, l.Wq)(T, h({}, s.Z, Z));

			function b() {
				const Z = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					ce = e.compose((0, e.applyMiddleware)(...A), f.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					le = {},
					Q = (0, e.createStore)(L(a.Z.getReducers()), le, ce);
				k.run(m.Z), (0, l.p5)(Q);
				const H = (t.g.bootstrap || {}).data || {};
				return Q.dispatch((0, d.mW)("user", H.user)), Q
			}
			let D;
			a.Z.setChangeListener(Z => {
				var oe;
				D && ((oe = D) === null || oe === void 0 ? void 0 : oe.replaceReducer) && (D.replaceReducer(L(Z)), (0, l.p5)(D))
			});

			function R() {
				return D || (D = b()), D
			}
		},
		"../react/app/redux/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				TZ: function() {
					return o
				},
				UM: function() {
					return l
				},
				ZS: function() {
					return c
				},
				p4: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const o = () => (0, e.useStore)(),
				c = () => o().getState(),
				l = () => (0, e.useDispatch)(),
				g = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				$J: function() {
					return i
				},
				Oy: function() {
					return a
				},
				SC: function() {
					return f
				},
				ZP: function() {
					return m
				},
				dJ: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				o = t.n(r);

			function c(u) {
				for (var d = 1; d < arguments.length; d++) {
					var I = arguments[d] != null ? Object(arguments[d]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(h) {
						return Object.getOwnPropertyDescriptor(I, h).enumerable
					})), P.forEach(function(h) {
						l(u, h, I[h])
					})
				}
				return u
			}

			function l(u, d, I) {
				return d = g(d), d in u ? Object.defineProperty(u, d, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[d] = I, u
			}

			function g(u) {
				var d = s(u, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function s(u, d) {
				if (typeof u != "object" || u === null) return u;
				var I = u[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(u, d || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(u)
			}
			const p = c({}, r),
				f = (u, d, I, P = {}) => {
					const h = u === "delete" ? "del" : u.toLowerCase();
					return I && h !== "del" && (P.body = I), p[h](d, P)
				},
				n = (u, d) => (u.meta.params = d, u),
				a = (u, d, I, P, {
					body: h = {}
				}) => {
					const {
						result: v,
						messages: O,
						result_info: _
					} = h, T = Object.values(d);
					if (u.meta.method === "delete") {
						const k = T[T.length - 1];
						u.meta.id = typeof k == "object" ? k.id : k
					}
					return u.payload = v, O && (u.meta.messages = O), T.length && (u.meta.params = d), _ && (u.meta.paginationData = {
						info: _,
						actionParameters: T,
						options: I[0],
						insertionOffset: 0
					}), u
				},
				i = (u, d, I, P, h) => (u.payload = h && h.body && h.body.errors, u.meta.messages = h && h.body && h.body.messages, u.meta.params = d, u.apiError = h, u);

			function m(u, d, I, P) {
				const h = (0, e.RM)(u, d, I, P).apiFetch(f).on("start", n).on("success", a).on("error", i),
					v = h.mock;
				return h.mock = O => (v((..._) => {
					const T = O(..._);
					return T && typeof T == "object" && "result" in T ? T : {
						result: T
					}
				}), h), h
			}
		},
		"../react/app/redux/normalizer.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				P1: function() {
					return f
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
				o = t("../react/pages/email/types.ts"),
				c = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				l = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				g = t.n(l);
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
					entityType: o.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: o.BB.rule,
					idProp: "tag"
				}, {
					entityType: o.BB.rules,
					to: o.BB.rule
				}, {
					entityType: o.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: o.BB.dstAddresses,
					to: o.BB.dstAddress
				}, {
					entityType: o.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: o.BB.dnsRecords,
					to: o.BB.dnsRecord
				}, {
					entityType: o.BB.zone,
					idProp: "tag"
				}]),
				p = a => a.entities,
				f = (...a) => (0, c.P1)(s, p, ...a),
				n = (0, c.QB)(s)
		},
		"../react/app/redux/utils.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return o
				},
				_: function() {
					return r
				}
			});
			var e = t("../react/app/redux/makeAction.js");
			const r = c => (l, g, s) => (0, e.SC)(l, g, s, {
					hideErrorAlert: !0
				}).catch(c),
				o = c => l => {
					if (l.status === c) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Cm: function() {
					return g
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return s
				},
				Li: function() {
					return f
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return o
				},
				Yc: function() {
					return a
				},
				gM: function() {
					return c
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
				o = "MODAL_OPEN",
				c = "MODAL_CLOSE",
				l = "TOGGLE_ON",
				g = "TOGGLE_OFF",
				s = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				f = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let a = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/activeActions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				I: function() {
					return r
				},
				n: function() {
					return o
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = (c, l) => ({
					type: e.HI,
					activeKey: c,
					activeValue: l
				}),
				o = c => ({
					type: e.s1,
					activeKey: c
				})
		},
		"../react/common/actions/membershipActions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return i
				},
				YT: function() {
					return f
				},
				ct: function() {
					return s
				},
				d6: function() {
					return n
				},
				kt: function() {
					return a
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/common/constants/index.ts");

			function o(m) {
				for (var u = 1; u < arguments.length; u++) {
					var d = arguments[u] != null ? Object(arguments[u]) : {},
						I = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(d).filter(function(P) {
						return Object.getOwnPropertyDescriptor(d, P).enumerable
					})), I.forEach(function(P) {
						c(m, P, d[P])
					})
				}
				return m
			}

			function c(m, u, d) {
				return u = l(u), u in m ? Object.defineProperty(m, u, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[u] = d, m
			}

			function l(m) {
				var u = g(m, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function g(m, u) {
				if (typeof m != "object" || m === null) return m;
				var d = m[Symbol.toPrimitive];
				if (d !== void 0) {
					var I = d.call(m, u || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(m)
			}
			const s = m => {
					const u = m.payload.map(d => o({}, d, {
						membershipId: d.id,
						id: d.account.id
					}));
					return o({}, m, {
						payload: u
					})
				},
				p = m => {
					const u = s(m);
					return Array.isArray(u.payload) ? o({}, m, {
						payload: u.payload[0]
					}) : o({}, m, {
						payload: null
					})
				},
				f = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", s),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				a = (...m) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: m
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function(W, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				closeModal: function() {
					return c
				},
				openModal: function() {
					return o
				}
			});
			var e = t("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function o(l, g, s = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: g
					},
					options: s
				}
			}

			function c(l) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: l
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(W, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				add: function() {
					return l
				},
				error: function() {
					return f
				},
				info: function() {
					return s
				},
				success: function() {
					return g
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

			function o(n) {
				return {
					type: e.Cz,
					notificationId: n
				}
			}
			let c = 0;

			function l(n, a, i = {}) {
				return i = i || {},
					function(m) {
						let u = c++,
							d = {
								id: u,
								type: n,
								message: a,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									m(o(u)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						m(r(d))
					}
			}

			function g(n, a) {
				return l("success", n, a)
			}

			function s(n, a) {
				return l("info", n, a)
			}

			function p(n, a) {
				return l("warning", n, a)
			}

			function f(n, a) {
				return l("error", n, a)
			}
		},
		"../react/common/actions/userActions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				BT: function() {
					return s
				},
				Ut: function() {
					return P
				},
				V_: function() {
					return h
				},
				Y9: function() {
					return d
				},
				Z0: function() {
					return O
				},
				mp: function() {
					return I
				},
				r3: function() {
					return v
				},
				x0: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeActionCreator.ts"),
				r = t("../react/app/redux/utils.ts");

			function o(_) {
				for (var T = 1; T < arguments.length; T++) {
					var k = arguments[T] != null ? Object(arguments[T]) : {},
						w = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(k).filter(function(A) {
						return Object.getOwnPropertyDescriptor(k, A).enumerable
					})), w.forEach(function(A) {
						c(_, A, k[A])
					})
				}
				return _
			}

			function c(_, T, k) {
				return T = l(T), T in _ ? Object.defineProperty(_, T, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = k, _
			}

			function l(_) {
				var T = g(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function g(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var k = _[Symbol.toPrimitive];
				if (k !== void 0) {
					var w = k.call(_, T || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const s = (0, e.C)("user").get`/user`,
				p = (0, e.C)("user").patch`/user`,
				f = (0, e.C)("user").post`/user/create`,
				n = (0, e.C)("user").put`/user/password`,
				a = (0, e.C)("user").post`/user/two_factor_authentication`,
				i = (0, e.C)("user").put`/user/two_factor_authentication`,
				m = (0, e.C)("user").delete`/user/two_factor_authentication`,
				u = (0, e.C)("user").put`/user/email`;

			function d(..._) {
				return u(..._)
			}
			const I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				P = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(_ => o({}, _, {
					body: o({}, _.body, {
						result: {}
					})
				}))),
				h = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				v = (0, e.C)("userDetails").get`/user/details`,
				O = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				we: function() {
					return O
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react/react"),
				c = t.n(o);

			function l(T, k) {
				return g(T) < k
			}

			function g(T) {
				return s(T) % 1e6 / 1e6
			}

			function s(T) {
				const k = r().deburr(T);
				let w = 0;
				return k.length === 0 ? w : (r().each(k, (A, L) => {
					const b = A.charCodeAt(0);
					w = (w << 5) - w + b, w = w & w
				}), Math.abs(w))
			}
			var p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t("../react/utils/url.ts"),
				n = t("../react/pages/home/members/utils.ts");

			function a(T) {
				for (var k = 1; k < arguments.length; k++) {
					var w = arguments[k] != null ? Object(arguments[k]) : {},
						A = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(w).filter(function(L) {
						return Object.getOwnPropertyDescriptor(w, L).enumerable
					})), A.forEach(function(L) {
						i(T, L, w[L])
					})
				}
				return T
			}

			function i(T, k, w) {
				return k = m(k), k in T ? Object.defineProperty(T, k, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[k] = w, T
			}

			function m(T) {
				var k = u(T, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function u(T, k) {
				if (typeof T != "object" || T === null) return T;
				var w = T[Symbol.toPrimitive];
				if (w !== void 0) {
					var A = w.call(T, k || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(T)
			}
			const d = c().createContext(void 0),
				I = 60 * 1e3,
				P = .01,
				h = new Set(["f65fb9c0ef5c7bd96bf22fd1e89092f8", "34f5c5fbdb0031e08410750dd4617396"]),
				v = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]);

			function O({
				children: T,
				userID: k,
				isUserInDSR: w
			}) {
				const [A, L] = (0, o.useState)({
					policies: null,
					isLoading: !0,
					isLoadingSkippedByUserID: !1,
					error: null,
					lastFetchedAt: null
				}), b = (0, o.useCallback)(async (le = !1) => {
					var Q, K, H;
					const N = !!k,
						U = l((Q = k) !== null && Q !== void 0 ? Q : "", P) || h.has((K = k) !== null && K !== void 0 ? K : ""),
						S = v.has((H = k) !== null && H !== void 0 ? H : "");
					if (!(N && U && !S && (le || !A.lastFetchedAt || Date.now() - A.lastFetchedAt > I))) {
						L(q => a({}, q, {
							isLoadingSkippedByUserID: !U || S
						}));
						return
					}
					L(q => a({}, q, {
						isLoading: !0
					}));
					try {
						var G, ne;
						const q = await fetch("/api/v4/user/iam/policies");
						if (!q.ok) throw new Error(`Failed to fetch authz policies: ${q.status}`);
						const ae = (G = await q.json()) === null || G === void 0 || (ne = G.result) === null || ne === void 0 ? void 0 : ne.policies;
						if (!ae || !(0, e.isArray)(ae) || ae.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(ae)}`);
						L({
							policies: ae,
							isLoading: !1,
							isLoadingSkippedByUserID: !1,
							error: null,
							lastFetchedAt: Date.now()
						})
					} catch (q) {
						const ae = q instanceof Error ? q.message : JSON.stringify(q);
						L(j => a({}, j, {
							isLoading: !1,
							error: ae
						}))
					}
				}, [k, A.lastFetchedAt]);
				(0, o.useEffect)(() => {
					b()
				}, [b]);
				const D = (0, p.useHistory)(),
					R = (0, f.uW)(D.location.pathname),
					[Z, oe] = (0, o.useState)(void 0);
				(0, o.useEffect)(() => {
					(async () => {
						const Q = 10,
							K = 100;
						for (let H = 0; H <= Q; H++) {
							const N = (0, n.vq)(R);
							if (!N || N.length === 0) {
								if (H === Q) throw new Error("failed loading authz policy permission groups");
								const U = K * Math.pow(2, H);
								await new Promise(S => {
									setTimeout(S, U)
								})
							} else {
								N.sort((U, S) => U.id.localeCompare(S.id)), oe(N);
								break
							}
						}
					})()
				}, [R]);
				const ce = {
					isUserInDSR: w,
					contextAccountTag: R,
					allPermissionGroups: Z,
					policiesState: A,
					refreshPolicies: () => b(!0)
				};
				return c().createElement(d.Provider, {
					value: ce
				}, T)
			}
			const _ = () => {
				const T = useContext(d);
				if (!T) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
				return T.refreshPolicies
			}
		},
		"../react/common/components/AccessCheck/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				E1: function() {
					return r
				},
				L8: function() {
					return n
				},
				W9: function() {
					return f
				},
				ZZ: function() {
					return g
				},
				j: function() {
					return a
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
				o = "com.cloudflare.edge.",
				c = "com.cloudflare.api.account.zone.",
				l = ["com.cloudflare.api.app.manage"];
			let g = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const s = (i, m) => `${r}${i?i+".":""}${m}`,
				p = (i, m) => `${c}${i?i+".":""}${m}`,
				f = (i, m) => `${o}${i}.${m}`,
				n = (i = "") => `${r}${i}`,
				a = (i = "") => `${c}${i}`
		},
		"../react/common/components/AccessCheck/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				zs: function() {
					return s.zs
				},
				hT: function() {
					return l.hT
				},
				WL: function() {
					return l.WL
				},
				ZP: function() {
					return c
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
				c = ({
					legacyPermission: p,
					canAccess: f,
					children: n,
					render: a
				}) => {
					const i = !!(0, r.P)();
					let m;
					typeof f == "boolean" && f !== void 0 && i ? m = {
						read: f,
						list: f,
						create: f,
						update: f,
						delete: f,
						sign: f
					} : m = (0, e.Z)(p);
					const u = a || n;
					return u ? u(m) : null
				},
				l = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				g = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				s = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/redux/index.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function g(s) {
				const {
					read: p,
					edit: f
				} = (0, o.p4)(c.Yj)(s);
				let n = f;
				if (s != "zone_versioning") {
					const i = (0, o.p4)(l.G);
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
			E.Z = g
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				WL: function() {
					return m
				},
				hT: function() {
					return I
				},
				kd: function() {
					return i
				}
			});
			var e = t("../../../../node_modules/lodash-es/set.js"),
				r = t("../../../../node_modules/lodash-es/isString.js"),
				o = t("../react/pages/home/members/utils.ts"),
				c = t("../react/common/components/AccessCheck/constants.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts"),
				g = t("../react/common/selectors/accountSelectors.ts");
			const s = {
					allow: "allow",
					deny: "deny"
				},
				p = 0,
				f = 1,
				n = 2,
				a = 3;

			function i(w, A, L, b) {
				let D = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					R;
				for (R in D) D[R] = m(w, `${A}.${R}`, L, b);
				return D
			}

			function m(w, A, L, b) {
				var D;
				if (u(A) && !d(A)) {
					const le = (0, l.G)(w);
					if (le == null ? void 0 : le.isLocked) return !1
				}
				const R = (D = (0, g.D0)(w)) === null || D === void 0 ? void 0 : D.id,
					Z = R ? [`com.cloudflare.api.account.${R}`] : void 0,
					oe = (0, o.vq)(R);
				return !!P(w, oe, A, L, b || Z)
			}

			function u(w) {
				return ![c.ZZ.read, c.ZZ.list].some(A => w.endsWith(A))
			}

			function d(w) {
				return w.includes("zone.versioning")
			}

			function I(w) {
				const A = (0, g.Ko)(w);
				let L = !1;
				return A == null || A.forEach(b => {
					b.access === s.allow && b.permission_groups.forEach(D => {
						var R;
						(D == null || (R = D.meta) === null || R === void 0 ? void 0 : R.scopes) === c.u1 && (L = !0)
					})
				}), L
			}

			function P(w, A, L, b, D) {
				const R = (0, g.Ko)(w),
					Z = {};
				R == null || R.forEach(Q => {
					var K;
					const H = Q.access;
					let N = p;
					if (L && Q.permission_groups.forEach(U => {
							var S, x;
							A == null || (S = A.find(G => G.id === U.id)) === null || S === void 0 || (x = S.permissions) === null || x === void 0 || x.forEach(G => {
								N = Math.max(N, v(G, L))
							})
						}), N !== p && !!b) {
						let U = p;
						Q.resource_groups.forEach(S => {
							U = Math.max(U, _(S.scope, b, D))
						}), N = U === p ? U : N + U
					}(Z == null || (K = Z[H]) === null || K === void 0 ? void 0 : K[N]) || (0, e.Z)(Z, [H, N], []), Z[H][N].push(Q)
				});
				const oe = Z[s.allow] && Object.keys(Z[s.allow]).map(Q => parseInt(Q)),
					ce = Z[s.deny] && Object.keys(Z[s.deny]).map(Q => parseInt(Q)),
					le = Math.max.apply(Math, oe);
				return le === p || Math.max.apply(Math, ce) >= le ? null : Z[s.allow][le]
			}

			function h(w, A, L, b, D) {
				const R = {};
				w == null || w.forEach(le => {
					var Q;
					const K = le.access;
					let H = p;
					if (L && le.roles.forEach(N => {
							var U, S;
							A == null || (U = A.find(x => x.id === N.id)) === null || U === void 0 || (S = U.permissions) === null || S === void 0 || S.forEach(x => {
								H = Math.max(H, v(x, L))
							})
						}), H !== p && !!b) {
						let N = p;
						le.scopes.forEach(U => {
							N = Math.max(N, _(U, b, D))
						}), H = N === p ? N : H + N
					}(R == null || (Q = R[K]) === null || Q === void 0 ? void 0 : Q[H]) || set(R, [K, H], []), R[K][H].push(le)
				});
				const Z = R[s.allow] && Object.keys(R[s.allow]).map(le => parseInt(le)),
					oe = R[s.deny] && Object.keys(R[s.deny]).map(le => parseInt(le)),
					ce = Math.max.apply(Math, Z);
				return ce === p || Math.max.apply(Math, oe) >= ce ? null : R[s.allow][ce]
			}

			function v(w, A) {
				if (w.key === A || O(w.key, A)) return a;
				for (const L of (w == null ? void 0 : w.implies) || []) {
					let b = v(L, A);
					if (b > p) return b
				}
				return p
			}

			function O(w, A) {
				const L = A == null ? void 0 : A.lastIndexOf(".");
				return L === -1 ? !1 : (A == null ? void 0 : A.substring(0, L)) + ".*" === w
			}

			function _(w, A, L) {
				var b;
				let D = p;
				if (w == null || (b = w.objects) === null || b === void 0 || b.forEach(R => {
						D = Math.max(D, k(R, A))
					}), D === p) return D;
				if (w.key !== "*") switch (!0) {
					case T(w.key, L) > p:
					case (!(L == null ? void 0 : L.length) && D === a):
						break;
					case (D === f && T(w.key, [A]) > p):
						D = T(w.key, [A]);
						break;
					default:
						return p
				}
				for (const R of w.subset_of || [])
					if (T(R.key, L) === p) return p;
				return D
			}

			function T(w, A = []) {
				for (const L of A || []) {
					if (w === L) return a;
					if (O(w, L)) return n
				}
				return p
			}

			function k(w, A) {
				const L = (0, r.Z)(w) ? w : w.key;
				return L === A ? a : L === "*" || w === "*" ? f : O(L, A) ? n : p
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				a: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				o = t("../react/common/selectors/accountSelectors.ts");
			const c = g => {
					if (typeof g != "string") throw new Error("invalid Param Type provided");
					const s = g.slice(1).split(":");
					if (s.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: s[0],
						value: s[1]
					}
				},
				l = (g, s) => {
					const {
						resourceId: p,
						accountId: f,
						legacyPermission: n
					} = s;
					let {
						read: a,
						edit: i
					} = s;
					const m = {};
					n && (i = `#${n}:edit`, a = `#${n}:read`);
					const u = p || f;
					if (a) {
						const d = Array.isArray(a) ? a : [a];
						m.isReadable = d.some(I => {
							const P = c(I);
							return (0, o.DT)(g, u, h => !!(h[P.key] && h[P.key][P.value]))
						})
					}
					if (i) {
						const d = Array.isArray(i) ? i : [i];
						m.isEditable = d.some(I => {
							const P = c(I);
							return (0, o.DT)(g, u, h => !!(h[P.key] && h[P.key][P.value]))
						})
					}
					return m
				};
			E.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function(W, E, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				o = t("../react/app/HoCs/withEntities.tsx"),
				c = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(a) {
				for (var i = 1; i < arguments.length; i++) {
					var m = arguments[i] != null ? Object(arguments[i]) : {},
						u = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(m).filter(function(d) {
						return Object.getOwnPropertyDescriptor(m, d).enumerable
					})), u.forEach(function(d) {
						g(a, d, m[d])
					})
				}
				return a
			}

			function g(a, i, m) {
				return i = s(i), i in a ? Object.defineProperty(a, i, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[i] = m, a
			}

			function s(a) {
				var i = p(a, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function p(a, i) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var u = m.call(a, i || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(a)
			}

			function f(a) {
				const m = ["isReadable", "isEditable"].reduce((u, d) => a.hasOwnProperty(d) ? l({}, u, {
					[d]: a[d]
				}) : u, {});
				return a.children(m)
			}
			f.propTypes = {
				resourceType: r().string,
				resourceId: r().string,
				read: r().oneOfType([r().string, r().array]),
				edit: r().oneOfType([r().string, r().array]),
				accountId: r().string,
				isReadable: r().bool,
				isEditable: r().bool,
				children: r().func
			};
			const n = (0, o.Z)((0, c.Z)(f));
			n.displayName = "AccessControl", E.Z = n
		},
		"../react/common/components/Apple/utils.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				PP: function() {
					return a
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
				o = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				c = t("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const g = () => p.test(window.location.pathname) || o.E.has(c.Qq),
				s = () => o.E.get(c.Qq),
				p = /^\/login\/apple(\/)?/,
				n = [p, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				a = () => {
					let m = !1;
					n.forEach(d => {
						if (d.test(window.location.pathname)) {
							m = !0;
							return
						}
					});
					const u = g() && m;
					return u && (0, l.C8)(l.LF.OFF), u
				},
				i = m => {
					m && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let u = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					m && (u = u + `&jwt=${m}`), window.location.href = u
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				oG: function() {
					return u
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
				o = t("../node_modules/@cloudflare/component-button/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				l = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				g = t.n(l),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../react/common/components/Dropdown/index.tsx"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var I = 1; I < arguments.length; I++) {
						var P = arguments[I];
						for (var h in P) Object.prototype.hasOwnProperty.call(P, h) && (d[h] = P[h])
					}
					return d
				}, n.apply(this, arguments)
			}

			function a(d, I) {
				if (d == null) return {};
				var P = i(d, I),
					h, v;
				if (Object.getOwnPropertySymbols) {
					var O = Object.getOwnPropertySymbols(d);
					for (v = 0; v < O.length; v++) h = O[v], !(I.indexOf(h) >= 0) && (!Object.prototype.propertyIsEnumerable.call(d, h) || (P[h] = d[h]))
				}
				return P
			}

			function i(d, I) {
				if (d == null) return {};
				var P = {},
					h = Object.keys(d),
					v, O;
				for (O = 0; O < h.length; O++) v = h[O], !(I.indexOf(v) >= 0) && (P[v] = d[v]);
				return P
			}
			const m = (0, s.createStyledComponent)(({
				theme: d
			}) => ({
				display: "inline-flex",
				"& > button:first-child": {
					borderRadius: `${d.radii[2]}px 0 0 ${d.radii[2]}px`,
					borderRight: `1px solid ${d.colors.gray[8]}`
				},
				"& > :last-child": {
					display: "flex"
				},
				"& > :last-child > button": {
					borderRadius: `0 ${d.radii[2]}px ${d.radii[2]}px 0`,
					paddingRight: d.space[2],
					paddingLeft: d.space[2]
				},
				"& button": {
					color: (0, f.Yc)() ? d.colors.text : void 0
				},
				"& button:hover": {
					color: (0, f.Yc)() ? d.colors.text : void 0
				}
			}));

			function u(d) {
				let {
					menu: I,
					containerProps: P,
					disabled: h,
					disabledDropdown: v = h
				} = d, O = a(d, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: _
				} = (0, l.useI18n)();
				return r().createElement(m, n({}, P, {
					role: "group"
				}), r().createElement(o.zx, n({}, O, {
					disabled: h
				})), r().createElement(p.Lt, {
					trigger: r().createElement(o.zx, {
						type: O.type,
						"aria-haspopup": "menu",
						disabled: v
					}, r().createElement(c.J, {
						type: "caret-down",
						label: _("common.more"),
						size: 12
					})),
					menu: I
				}))
			}
		},
		"../react/common/components/Dropdown/Menu.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				v: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../node_modules/@cloudflare/elements/es/index.js"),
				c = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				l = t("../react/common/hooks/useIntersectionObserver.ts");

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(p) {
					for (var f = 1; f < arguments.length; f++) {
						var n = arguments[f];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (p[a] = n[a])
					}
					return p
				}, g.apply(this, arguments)
			}

			function s(p) {
				const f = (0, e.useRef)(null),
					[n, a] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const m = f.current;
					if (m) {
						const {
							bottom: u
						} = m.getBoundingClientRect();
						u > window.innerHeight && a(!0)
					}
				}, []);
				const i = (0, l.S)(m => {
					for (const u of m) u.intersectionRatio < 1 && a(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const m = f.current;
					if (m && i) return i.observe(m), () => {
						i.unobserve(m)
					}
				}, [i]), r().createElement(o.ZC, g({
					role: "menu",
					innerRef: f,
					position: "absolute",
					right: "0",
					backgroundColor: c.rS.colors.background,
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
		"../react/common/components/Dropdown/MenuItem.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				s: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				c = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(c);

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(P) {
					for (var h = 1; h < arguments.length; h++) {
						var v = arguments[h];
						for (var O in v) Object.prototype.hasOwnProperty.call(v, O) && (P[O] = v[O])
					}
					return P
				}, g.apply(this, arguments)
			}

			function s(P, h) {
				if (P == null) return {};
				var v = p(P, h),
					O, _;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(P);
					for (_ = 0; _ < T.length; _++) O = T[_], !(h.indexOf(O) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, O) || (v[O] = P[O]))
				}
				return v
			}

			function p(P, h) {
				if (P == null) return {};
				var v = {},
					O = Object.keys(P),
					_, T;
				for (T = 0; T < O.length; T++) _ = O[T], !(h.indexOf(_) >= 0) && (v[_] = P[_]);
				return v
			}

			function f(P) {
				for (var h = 1; h < arguments.length; h++) {
					var v = arguments[h] != null ? Object(arguments[h]) : {},
						O = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && O.push.apply(O, Object.getOwnPropertySymbols(v).filter(function(_) {
						return Object.getOwnPropertyDescriptor(v, _).enumerable
					})), O.forEach(function(_) {
						n(P, _, v[_])
					})
				}
				return P
			}

			function n(P, h, v) {
				return h = a(h), h in P ? Object.defineProperty(P, h, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : P[h] = v, P
			}

			function a(P) {
				var h = i(P, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function i(P, h) {
				if (typeof P != "object" || P === null) return P;
				var v = P[Symbol.toPrimitive];
				if (v !== void 0) {
					var O = v.call(P, h || "default");
					if (typeof O != "object") return O;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(P)
			}
			const m = ({
					theme: P
				}) => {
					const h = {
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
						'&:hover:not(:disabled):not([aria-disabled="true"])': h,
						'&:focus-within:not(:disabled):not([aria-disabled="true"])': f({}, h, {
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
				u = (0, o.createComponent)(m, "a"),
				d = (0, o.createComponent)(m, "button");

			function I(P) {
				let {
					disabled: h = !1
				} = P, v = s(P, ["disabled"]);
				const O = (0, c.useHistory)(),
					_ = {
						role: "menuitem"
					};
				if ("href" in v && typeof v.href == "string") return r().createElement(u, g({
					"aria-disabled": h
				}, _, v, {
					href: h ? void 0 : v.href,
					onClick: k => {
						var w;
						if (h) return k.stopPropagation();
						k.preventDefault(), (w = v.onClick) === null || w === void 0 || w.call(v, k), O.push(v.href)
					}
				}));
				var T;
				return r().createElement(d, g({
					type: (T = v.type) !== null && T !== void 0 ? T : "button"
				}, _, v, {
					disabled: h
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/prop-types/index.js"),
				c = t.n(o),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const g = ({
				children: s
			}) => r().createElement(l.xu, {
				height: 411
			}, s);
			g.propTypes = {
				children: c().node
			}, E.Z = g
		},
		"../react/common/components/ModalManager.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return u
				},
				dd: function() {
					return i
				},
				vR: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react-redux/react-redux");
			const c = d => d.application.modals;
			var l = t("../react/common/actions/modalActions.ts"),
				g = t("../../../../node_modules/swr/core/dist/index.mjs"),
				s = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(d) {
					for (var I = 1; I < arguments.length; I++) {
						var P = arguments[I];
						for (var h in P) Object.prototype.hasOwnProperty.call(P, h) && (d[h] = P[h])
					}
					return d
				}, p.apply(this, arguments)
			}
			const f = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: I,
						closeModal: P
					} = this.props;
					return r().createElement(r().Fragment, null, I.map(({
						ModalComponent: h,
						props: v = {},
						id: O
					}) => {
						const _ = () => {
							typeof v.onClose == "function" && v.onClose(), P(h)
						};
						return r().createElement(f.Provider, {
							key: O,
							value: {
								closeModal: _
							}
						}, r().createElement(g.J$, {
							value: s.ZP
						}, r().createElement(h, p({}, v, {
							isOpen: !0,
							closeModal: _
						}))))
					}))
				}
			}

			function a() {
				const d = r().useContext(f);
				if (!d) throw new Error("useModalContext must be used within a ModalContext");
				return d
			}

			function i() {
				const d = (0, o.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...I) {
						return d(l.openModal(...I))
					}, [d]),
					closeModal: (0, e.useCallback)(function(...I) {
						return d(l.closeModal(...I))
					}, [d])
				}
			}
			var u = (0, o.connect)(d => ({
				modals: c(d)
			}), l)(n)
		},
		"../react/common/components/Page.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/component-page/es/index.js");

			function c(l) {
				return r().createElement(o.T3, l)
			}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return n
				},
				Gn: function() {
					return p
				},
				JR: function() {
					return f
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return g
				},
				ZI: function() {
					return l
				},
				if: function() {
					return r
				},
				q6: function() {
					return o
				},
				w_: function() {
					return c
				},
				zl: function() {
					return s
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				o = "date-from",
				c = "date-to",
				l = "from",
				g = "to",
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
			let f = function(a) {
					return a.ADD_FILTER = "Add filter", a.EDIT_FILTER = "Edit filter", a.REMOVE_FILTER = "Remove filter", a.REMOVE_ALL_FILTERS = "Remove all filters", a.CHANGE_TIME = "Change time window", a.FEED_PAGE_FORWARD = "Activity feed next page", a.FEED_PAGE_BACKWARD = "Activity feed previous page", a.FEED_EXPAND_EVENT = "Activity feed expand event", a.FEED_CLOSE_EVENT = "Activity feed close event", a.FEED_EXPAND_MATCHES = "Activity feed expand matches", a.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", a.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", a.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", a.DOWNLOAD_FEED = "Activity feed download", a
				}({}),
				n = function(a) {
					return a.TIMESERIES = "Timeseries Chart", a.DISTRIBUTION = "Source Distribution Chart", a.TOP_N = "Top N", a.FILTER_BAR = "Filter Bar", a.SCORES_DISTRIBUTIONS = "Scores Distributions", a.INSIGHTS = "Insights", a.RL_HISTOGRAM = "Rate Limit Histogram", a
				}({})
		},
		"../react/common/components/api-tokens/sparrowEvents.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Cf: function() {
					return f
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

			function o(n) {
				for (var a = 1; a < arguments.length; a++) {
					var i = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), m.forEach(function(u) {
						c(n, u, i[u])
					})
				}
				return n
			}

			function c(n, a, i) {
				return a = l(a), a in n ? Object.defineProperty(n, a, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = i, n
			}

			function l(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var m = i.call(n, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.USER_CREATE_TOKEN = "click user api token create button", n.USER_TEMPLATE_USED = "click user api token template", n.USER_CUSTOM_TEMPLATE_USED = "click user api token custom template", n.USER_API_TOKEN_CREATE_CANCEL = "click cancel create user api token", n.USER_API_TOKEN_CREATE_SUMMARY = "click continue to summary user api tokens", n.USER_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit user api token", n.USER_TOKEN_CREATED = "create user api token", n.ACCOUNT_CREATE_TOKEN = "click account api token create button", n.ACCOUNT_TEMPLATE_USED = "click account api token template", n.ACCOUNT_API_TOKEN_CREATE_CANCEL = "click cancel account api token create", n.ACCOUNT_API_TOKEN_CREATE_SUMMARY = "click continue to summary account api tokens", n.ACCOUNT_API_TOKEN_CREATE_BACK_TO_EDIT = "click back to edit account api token", n.ACCOUNT_CUSTOM_TEMPLATE_USED = "click account api token custom template", n.ACCOUNT_TOKEN_CREATED = "create account api token", n
			}({});
			const p = ({
					name: n,
					additionalData: a = {}
				}) => {
					r().sendEvent(n, o({}, a || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/common/components/filter-editor/constants/userJourney.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				v: function() {
					return e
				}
			});
			let e = function(r) {
				return r.FIELD = "change field", r.OPERATOR = "change operator", r
			}({})
		},
		"../react/common/constants/billing/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Gq: function() {
					return c
				},
				g$: function() {
					return o
				},
				WX: function() {
					return e
				},
				E0: function() {
					return f
				},
				Hw: function() {
					return g
				},
				Ed: function() {
					return l
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return m
				},
				hQ: function() {
					return s
				},
				SP: function() {
					return p
				}
			});
			let e = function(u) {
				return u.page_rules = "page_rules", u.automatic_platform_optimization = "automatic_platform_optimization", u
			}({});
			const r = "page_rules",
				o = "automatic_platform_optimization",
				c = {
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
				g = {
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
				f = {
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
				a = t("../react/common/constants/billing/tracking.ts"),
				i = t("../react/common/constants/billing/workers.ts");
			const m = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				FP: function() {
					return e
				},
				Nl: function() {
					return l
				},
				SO: function() {
					return o
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
				o = {
					BILLING: "billing"
				},
				c = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				l = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Dk: function() {
					return m
				},
				Dy: function() {
					return u
				},
				E_: function() {
					return g
				},
				Lv: function() {
					return d
				},
				S4: function() {
					return l
				},
				UM: function() {
					return n
				},
				Xf: function() {
					return f
				},
				Y1: function() {
					return s
				},
				p6: function() {
					return p
				},
				q0: function() {
					return c
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
				o = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const c = "healthy",
				l = "degraded",
				g = "critical",
				s = "unknown",
				p = "not-monitored",
				f = r().from({
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
				a = {
					f: f.FREE,
					p: f.PRO,
					b: f.BIZ
				},
				i = "marketing-pt",
				m = () => {
					const h = o.Z.get(i);
					if (!!h) return a[h]
				},
				u = ["gov"],
				d = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				I = "banner-notification-interactions",
				P = null
		},
		"../react/common/constants/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/common/constants/roles.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SUPER_ADMINISTRATOR_ALL_PRIVILEGES = "Super Administrator - All Privileges", r.CLOUDFLARE_ACCESS = "Cloudflare Access", r.CLOUDFLARE_ACCESS_APP_ADMIN = "Cloudflare Access App Admin", r.CLOUDFLARE_ACCESS_IDENTITY_PROVIDER_ADMIN = "Cloudflare Access Identity Provider Admin", r.ADMINISTRATOR = "Administrator", r.ADMINISTRATOR_READ_ONLY = "Administrator Read Only", r.ANALYTICS = "Analytics", r.API_GATEWAY = "API Gateway", r.API_GATEWAY_READ = "API Gateway Read", r.AUDIT_LOGS_VIEWER = "Audit Logs Viewer", r.BILLING = "Billing", r.BOT_MANAGEMENT = "Bot Management", r.BOT_MANAGEMENT_ACCOUNT_WIDE = "Bot Management (Account-Wide)", r.CACHE_DOMAIN_PURGE = "Cache Domain Purge", r.CACHE_PURGE = "Cache Purge", r.SSL_TLS_CACHING_PERFORMANCE_PAGE_RULES_AND_CUSTOMIZATION = "SSL/TLS, Caching, Performance, Page Rules, and Customization", r.EMAIL_CONFIGURATION_ADMIN = "Email Configuration Admin", r.EMAIL_INTEGRATION_ADMIN = "Email Integration Admin", r.EMAIL_SECURITY_ANALYST = "Email Security Analyst", r.EMAIL_SECURITY_READONLY = "Email Security Readonly", r.EMAIL_SECURITY_REPORTING = "Email Security Reporting", r.CLOUDFORCE_ONE_ADMIN = "Cloudforce One Admin", r.CLOUDFORCE_ONE_READ = "Cloudforce One Read", r.DNS = "DNS", r.DOMAIN_ADMINISTRATOR = "Domain Administrator", r.DOMAIN_ADMINISTRATOR_READ_ONLY = "Domain Administrator Read Only", r.DOMAIN_API_GATEWAY = "Domain API Gateway", r.DOMAIN_API_GATEWAY_READ = "Domain API Gateway Read", r.DOMAIN_DNS = "Domain DNS", r.DOMAIN_PAGE_SHIELD = "Domain Page Shield", r.DOMAIN_PAGE_SHIELD_READ = "Domain Page Shield Read", r.MAGIC_NETWORK_MONITORING_ADMIN = "Magic Network Monitoring Admin", r.MAGIC_NETWORK_MONITORING = "Magic Network Monitoring", r.MAGIC_NETWORK_MONITORING_READ_ONLY = "Magic Network Monitoring Read-Only", r.CLOUDFLARE_GATEWAY = "Cloudflare Gateway", r.CLOUDFLARE_WORKER_ADMIN = "Cloudflare Worker Admin", r.HTTP_APPLICATIONS = "HTTP Applications", r.HTTP_APPLICATIONS_READ = "HTTP Applications Read", r.CLOUDFLARE_IMAGES = "Cloudflare Images", r.LOAD_BALANCER = "Load Balancer", r.LOG_SHARE = "Log Share", r.NETWORK_SERVICES_WRITE_MAGIC = "Network Services Write (Magic)", r.NETWORK_SERVICES_READ_MAGIC = "Network Services Read (Magic)", r.MINIMAL_ACCOUNT_ACCESS = "Minimal Account Access", r.PAGE_SHIELD = "Page Shield", r.PAGE_SHIELD_READ = "Page Shield Read", r.HYPERDRIVE_ADMIN = "Hyperdrive Admin", r.HYPERDRIVE_READONLY = "Hyperdrive Readonly", r.CLOUDFLARE_R2_ADMIN = "Cloudflare R2 Admin", r.CLOUDFLARE_R2_READ = "Cloudflare R2 Read", r.LOG_SHARE_READER = "Log Share Reader", r.CLOUDFLARE_SNIPPETS_ADMIN = "Cloudflare Snippets Admin", r.CLOUDFLARE_STREAM = "Cloudflare Stream", r.CLOUDFLARE_ZERO_TRUST = "Cloudflare Zero Trust", r.CLOUDFLARE_DEX = "Cloudflare DEX", r.CLOUDFLARE_ZERO_TRUST_PII = "Cloudflare Zero Trust PII", r.CLOUDFLARE_ZERO_TRUST_READ_ONLY = "Cloudflare Zero Trust Read Only", r.CLOUDFLARE_ZERO_TRUST_REPORTING = "Cloudflare Zero Trust Reporting", r.TRANSFORM_RULES = "Transform Rules", r.TRUST_AND_SAFETY = "Trust and Safety", r.TURNSTILE = "Turnstile", r.TURNSTILE_READ = "Turnstile Read", r.VECTORIZE_ADMIN = "Vectorize Admin", r.VECTORIZE_READONLY = "Vectorize Readonly", r.FIREWALL = "Firewall", r.WAITING_ROOM_ADMIN = "Waiting Room Admin", r.WAITING_ROOM_READ = "Waiting Room Read", r.WORKERS_ADMIN = "Workers Admin", r.ZARAZ_ADMIN = "Zaraz Admin", r.ZARAZ_EDIT = "Zaraz Edit", r.ZARAZ_READONLY = "Zaraz Readonly", r.ZONE_VERSIONING = "Zone Versioning", r.ZONE_VERSIONING_ACCOUNT_WIDE = "Zone Versioning (Account-Wide)", r.ZONE_VERSIONING_READ = "Zone Versioning Read", r.ZONE_VERSIONING_READ_ACCOUNT_WIDE = "Zone Versioning Read (Account-Wide)", r.DOMAIN_WAITING_ROOM_ADMIN = "Domain Waiting Room Admin", r.DOMAIN_WAITING_ROOM_READ = "Domain Waiting Room Read", r.BRAND_PROTECTION = "Brand Protection", r
			}({})
		},
		"../react/common/hooks/rulesets/resources/tracking.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				QK: function() {
					return e
				},
				dy: function() {
					return r
				},
				sO: function() {
					return o
				},
				x4: function() {
					return c
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
				o = (l, g, s = !1) => {
					var p;
					return `${g} ${(p=r[l])!==null&&p!==void 0?p:l} ${s?"ruleset":"rule"}${g===e.GET?"s":""}`
				},
				c = () => {
					var l;
					return (l = Object.keys(r).reduce((g, s) => {
						const p = Object.values(e).reduce((f, n) => (f.push(o(s, n)), f.push(o(s, n, !0)), f), []);
						return g.concat(p)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return l
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/accountSelectors.ts"),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(o);

			function l() {
				var g;
				const {
					accountId: s
				} = (0, o.useParams)(), p = (0, e.p4)(r.D0);
				if (s === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (g = s) !== null && g !== void 0 ? g : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function(W, E, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(r),
				c = t("../react/common/selectors/commonSelectors.ts");
			const l = g => {
				const s = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, c.cZ)(g)), n => {
					s((0, e.I)(g, n))
				}]
			};
			E.Z = l
		},
		"../react/common/hooks/useCachedState.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function c(l, {
				key: g,
				cache: s = o.E,
				ttl: p
			} = {}) {
				var f;
				const n = g !== void 0 && s.get(g),
					[a, i] = (0, e.useState)((f = n) !== null && f !== void 0 ? f : l);
				return [a, u => {
					i(d => (u instanceof Function && (u = u(d)), g !== void 0 && s.set(g, u, p), u))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(W, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(o) {
				return (0, e.qf)(o)
			}
			E.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return o
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function o(c, {
				root: l,
				rootMargin: g,
				threshold: s
			} = {}) {
				const p = (0, e.useRef)(null);

				function f() {
					return p.current === null && (p.current = new IntersectionObserver(c, {
						root: l,
						rootMargin: g,
						threshold: s
					})), p.current
				}
				return (0, e.useEffect)(() => (p.current = new IntersectionObserver(c, {
					root: l,
					rootMargin: g,
					threshold: s
				}), () => {
					var n;
					(n = p.current) === null || n === void 0 || n.disconnect()
				}), [c, l, g, s]), f()
			}
		},
		"../react/common/hooks/usePrevious.ts": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e);

			function o(c) {
				const l = (0, e.useRef)(c);
				return (0, e.useEffect)(() => {
					l.current = c
				}, [c]), l.current
			}
			E.Z = o
		},
		"../react/common/hooks/useZoneEntitlement.ts": function(W, E, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function o(c) {
				return (0, e.p4)(l => (0, r.rV)(l, c))
			}
			E.Z = o
		},
		"../react/common/middleware/sparrow/errors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Uh: function() {
					return l
				},
				ez: function() {
					return c
				},
				oV: function() {
					return g
				}
			});

			function e(s, p, f) {
				return p = r(p), p in s ? Object.defineProperty(s, p, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[p] = f, s
			}

			function r(s) {
				var p = o(s, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function o(s, p) {
				if (typeof s != "object" || s === null) return s;
				var f = s[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(s, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(s)
			}
			class c extends Error {
				constructor(p, f) {
					super(f);
					e(this, "eventName", void 0), this.eventName = p, this.name = "SparrowValidationError"
				}
			}
			class l extends c {
				constructor(p) {
					super(p, `Event not allowed: "${p}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class g extends c {
				constructor(p, f) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = f
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Au: function() {
					return X
				},
				B: function() {
					return Se
				},
				B3: function() {
					return $e
				},
				BG: function() {
					return w
				},
				Bp: function() {
					return mt
				},
				CV: function() {
					return tt
				},
				D0: function() {
					return O
				},
				DT: function() {
					return j
				},
				EL: function() {
					return G
				},
				EU: function() {
					return $
				},
				GE: function() {
					return Et
				},
				Ko: function() {
					return ae
				},
				Kx: function() {
					return b
				},
				Le: function() {
					return D
				},
				O4: function() {
					return Ye
				},
				Ou: function() {
					return N
				},
				Py: function() {
					return Me
				},
				QI: function() {
					return rt
				},
				Qf: function() {
					return T
				},
				RO: function() {
					return Ie
				},
				T3: function() {
					return Ce
				},
				T8: function() {
					return k
				},
				UX: function() {
					return x
				},
				VP: function() {
					return Ne
				},
				Xo: function() {
					return lt
				},
				Xu: function() {
					return Q
				},
				Yi: function() {
					return Xe
				},
				Yj: function() {
					return q
				},
				Zu: function() {
					return ne
				},
				bC: function() {
					return J
				},
				f8: function() {
					return oe
				},
				hI: function() {
					return et
				},
				hN: function() {
					return L
				},
				hX: function() {
					return Le
				},
				iq: function() {
					return Be
				},
				nE: function() {
					return A
				},
				oD: function() {
					return S
				},
				oI: function() {
					return Z
				},
				oJ: function() {
					return pt
				},
				tM: function() {
					return U
				},
				uF: function() {
					return K
				},
				ut: function() {
					return Fe
				},
				vU: function() {
					return st
				},
				wQ: function() {
					return pe
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				o = t.n(r),
				c = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(c),
				g = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../../../../node_modules/moment/moment.js"),
				p = t.n(s),
				f = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				a = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				m = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/common/constants/roles.ts"),
				d = t("../react/common/utils/hasRole.ts");

			function I(z) {
				for (var de = 1; de < arguments.length; de++) {
					var _e = arguments[de] != null ? Object(arguments[de]) : {},
						Te = Object.keys(_e);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(_e).filter(function(De) {
						return Object.getOwnPropertyDescriptor(_e, De).enumerable
					})), Te.forEach(function(De) {
						P(z, De, _e[De])
					})
				}
				return z
			}

			function P(z, de, _e) {
				return de = h(de), de in z ? Object.defineProperty(z, de, {
					value: _e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[de] = _e, z
			}

			function h(z) {
				var de = v(z, "string");
				return typeof de == "symbol" ? de : String(de)
			}

			function v(z, de) {
				if (typeof z != "object" || z === null) return z;
				var _e = z[Symbol.toPrimitive];
				if (_e !== void 0) {
					var Te = _e.call(z, de || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (de === "string" ? String : Number)(z)
			}
			const O = z => {
					const de = K(z);
					return de == null ? void 0 : de.account
				},
				_ = z => {
					const de = (0, a.PR)(z);
					if (de) {
						const _e = de.id;
						return z.accountAccess[_e] || {}
					}
					return {}
				},
				T = z => z.accountsDetailed,
				k = (0, n.P1)("accountsDetailed", T),
				w = z => z.memberships,
				A = (0, g.P1)((0, n.P1)("memberships", w), m.U, (z, de) => !!de && !!z ? z.filter(_e => de.includes(_e.id)) : z),
				L = z => z.accountFlags && z.accountFlags.data,
				b = z => z.accountFlags,
				D = (z, de, _e) => {
					const Te = L(z);
					return !Te || !Te[de] ? null : Te[de][_e]
				},
				R = z => z.accountFlags.isRequesting,
				Z = (z, ...de) => o()(z, ["accountFlagsChanges", "data", ...de]),
				oe = z => z.accountFlagsChanges.isRequesting,
				ce = (0, g.P1)(L, b, (z, de) => ({
					data: z,
					meta: de
				})),
				le = (z, de, _e) => !!(isEnterpriseSSEnabledSelector(z) && D(z, de, _e)),
				Q = z => z.membership,
				K = (0, n.P1)("membership", Q),
				H = (0, g.P1)(K, Q, (z, de) => ({
					data: z,
					meta: de
				})),
				N = z => {
					const {
						roles: de = []
					} = K(z) || {};
					return Boolean(de.find(_e => _e === "Super Administrator - All Privileges" || _e === "Billing"))
				},
				U = z => {
					const de = [u.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, d.n)(z, de)
				},
				S = z => {
					const de = _(z),
						_e = We.getMemberships(z) ? l().asMutable(We.getMemberships(z)) : [];
					if (!!_e) return l().from(_e.map(Te => I({}, Te, {
						lastSeen: de[Te.account.id] ? de[Te.account.id].lastSeen : null
					})).sort((Te, De) => Te.lastSeen && De.lastSeen ? De.lastSeen - Te.lastSeen : 0))
				},
				x = z => z.filteredMemberships,
				G = (0, n.P1)("filteredMemberships", x),
				ne = (0, g.P1)(K, z => z == null ? void 0 : z.permissions),
				q = (0, g.P1)(ne, z => (0, e.Z)(de => {
					var _e;
					return (_e = z == null ? void 0 : z[de]) !== null && _e !== void 0 ? _e : {
						read: !1,
						edit: !1
					}
				})),
				ae = (0, g.P1)(K, z => z == null ? void 0 : z.policies),
				j = (z, de, _e) => {
					let Te = We.getMembership(z);
					if (!Te) {
						const De = We.getMemberships(z);
						if (!De || !de) return !1;
						Te = De.find(je => je.account.id === de)
					}
					if (!Te || !_e) return !1;
					try {
						return _e(Te.permissions)
					} catch {
						return !1
					}
				},
				M = z => {
					var de, _e;
					return (de = (_e = O(z)) === null || _e === void 0 ? void 0 : _e.meta.has_pro_zones) !== null && de !== void 0 ? de : !1
				},
				$ = z => {
					var de, _e;
					return (de = (_e = O(z)) === null || _e === void 0 ? void 0 : _e.meta.has_business_zones) !== null && de !== void 0 ? de : !1
				},
				J = z => $(z) || M(z),
				ue = (z, de) => {
					const _e = se(z, de);
					return !!_e && !!_e.enabled
				},
				se = (z, de) => {
					const _e = We.getMembership(z),
						Te = _e && _e.account;
					return Te && Te.legacy_flags && Te.legacy_flags[de]
				},
				pe = z => ue(z, "custom_pages"),
				te = z => !!z && z["webhooks.webhooks.enabled"],
				ye = z => D(z, "bots", "enabled"),
				Oe = z => D(z, "billing", "annual_subscriptions_enable"),
				Ie = z => z ? Boolean(D(z, "ConstellationAI", "v2_ui")) : !1,
				Le = z => z ? Boolean(D(z, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Se = z => z ? Boolean(D(z, "AIgateway", "enabled")) : !1,
				ke = z => se(z, "enterprise_zone_quota"),
				qe = z => {
					const de = ke(z);
					return !de || !de.available ? -1 : de.available
				},
				Be = z => z.accountMembers,
				$e = (0, n.P1)("accountMembers", Be),
				Ye = z => z.accountMember && z.accountMember.isRequesting,
				Y = z => z.accountRoles,
				ve = (0, n.P1)("accountRoles", Y),
				Me = (z, de) => {
					const _e = We.getMemberships(z),
						Te = _e && _e.find(ot => ot.account.id === de);
					if (Te) return Te.account.name.replace(" Account", " account");
					const De = We.getMembership(z),
						je = De && De.account;
					return je && je.id === de ? je.name : null
				},
				Fe = (z, de) => {
					const _e = We.getMemberships(z),
						Te = _e && _e.find(ot => ot.account.id === de);
					if (Te) return Te.account.settings.access_approval_expiry;
					const De = We.getMembership(z),
						je = De && De.account;
					return je && je.id === de ? je.settings.access_approval_expiry : null
				},
				lt = (z, de) => {
					const _e = Fe(z, de);
					return _e ? p().utc(_e).isAfter() : !1
				},
				Ce = (z, de, _e) => {
					const Te = Fe(z, de);
					let De = Te ? p().utc(Te) : null;
					return !De || !De.isAfter() ? "" : De && De.year() === 3e3 ? _e("account.access_approval.card_expiration_forever") : _e("account.access_approval.card_expiration_text", {
						expiryTimestamp: De.local().format(f.U.DateTime)
					})
				},
				pt = z => z && z.member && z.member.edit,
				X = (z, de) => {
					const _e = We.getMembership(z),
						Te = _e && _e.account;
					return Te ? Te.id !== de : !1
				},
				me = z => z.dpa,
				he = (0, n.P1)("dpa", me),
				Ue = z => z.webhook,
				Pe = z => z.webhooks,
				be = (0, n.P1)("webhook", Pe),
				Ne = z => z.accountLegoContract,
				gt = (0, n.P1)("accountLegoContract", Ne),
				rt = z => {
					const de = gt(z);
					return (de == null ? void 0 : de.lego_state) ? de.lego_state : ""
				},
				_t = z => rt(z) === "signed",
				Et = z => Ne(z).isRequesting,
				st = z => {
					const de = gt(z);
					return de && de.subscription_type ? de.subscription_type : ""
				},
				kt = z => st(z) !== "",
				We = {
					getMembership: K,
					getMemberships: A,
					getFilteredMemberships: G,
					getAccountMembers: $e,
					getAccountRoles: ve
				},
				mt = z => z.accountSingle,
				Xe = (0, n.P1)("accountSingle", mt),
				et = z => {
					const de = [u.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, u.V.ADMINISTRATOR];
					return (0, d.n)(z, de)
				},
				tt = z => (0, d.n)(z, [u.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				FX: function() {
					return o
				},
				QG: function() {
					return r
				},
				TH: function() {
					return c
				},
				cZ: function() {
					return e
				}
			});

			function e(l) {
				const g = `__ACTIVE__${l}`;
				return s => {
					const p = s.application;
					return p && p.active[g]
				}
			}

			function r(l) {
				const g = `__TOGGLE__${l}`;
				return s => {
					const p = s.application;
					return p && p.toggles[g]
				}
			}

			function o(l) {
				return l && l.paginationData && l.paginationData.info && l.paginationData.info.total_count ? l.paginationData.info.total_count : 0
			}
			const c = l => l.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$f: function() {
					return d
				},
				AD: function() {
					return g
				},
				BF: function() {
					return u
				},
				Bs: function() {
					return _
				},
				Ci: function() {
					return q
				},
				DA: function() {
					return Be
				},
				E6: function() {
					return m
				},
				Gy: function() {
					return Se
				},
				Hq: function() {
					return Le
				},
				Ms: function() {
					return w
				},
				Mx: function() {
					return ue
				},
				Nb: function() {
					return Ie
				},
				Pj: function() {
					return qe
				},
				Q2: function() {
					return s
				},
				Qq: function() {
					return se
				},
				Td: function() {
					return v
				},
				Z: function() {
					return M
				},
				a: function() {
					return O
				},
				a5: function() {
					return J
				},
				c7: function() {
					return pe
				},
				du: function() {
					return f
				},
				ec: function() {
					return ce
				},
				f: function() {
					return Oe
				},
				fo: function() {
					return ye
				},
				hL: function() {
					return $
				},
				ji: function() {
					return ae
				},
				jo: function() {
					return A
				},
				l9: function() {
					return Ye
				},
				lI: function() {
					return l
				},
				p1: function() {
					return P
				},
				pK: function() {
					return ke
				},
				pf: function() {
					return a
				},
				qR: function() {
					return h
				},
				rV: function() {
					return p
				},
				u1: function() {
					return n
				},
				w4: function() {
					return i
				},
				yD: function() {
					return j
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function o(Y, ve) {
				return Y && Y[ve]
			}
			const c = Y => !l(Y).isRequesting;

			function l(Y) {
				return Y.entitlements.zone
			}

			function g(Y) {
				return l(Y).data
			}
			const s = Y => {
				var ve, Me;
				return ((ve = l(Y).paginationData) === null || ve === void 0 || (Me = ve.options) === null || Me === void 0 ? void 0 : Me.editedDate) || {}
			};

			function p(Y, ve) {
				const Me = g(Y);
				return Me ? o(Me, ve) : void 0
			}
			const f = (Y, ve) => p(Y, ve) === !0;

			function n(Y) {
				return Y.entitlements.account
			}

			function a(Y) {
				return n(Y).data
			}
			const i = Y => {
				var ve, Me;
				return ((ve = n(Y).paginationData) === null || ve === void 0 || (Me = ve.options) === null || Me === void 0 ? void 0 : Me.editedDate) || {}
			};

			function m(Y) {
				return !n(Y).isRequesting
			}

			function u(Y, ve) {
				const Me = a(Y);
				return Me ? o(Me, ve) : void 0
			}

			function d(Y, ve) {
				return u(Y, ve) === !0
			}

			function I(Y, ve) {
				return ve.every(Me => d(Y, Me))
			}

			function P(Y) {
				return d(Y, "contract.customer_enabled")
			}

			function h(Y) {
				return d(Y, "contract.self_service_allowed")
			}

			function v(Y) {
				return d(Y, "billing.partners_managed")
			}
			const O = Y => P(Y) && h(Y),
				_ = Y => d(Y, "enterprise.ecp_allowed");

			function T(Y) {
				return k(Y) || d(Y, "argo.allow_smart_routing") || d(Y, "argo.allow_tiered_caching") || d(Y, "rate_limiting.enabled") || d(Y, "ctm.enabled") || d(Y, "workers.enabled") || d(Y, "workers.kv_store.enabled") || d(Y, "stream.enabled")
			}
			const k = Y => f(Y, "argo.allow_smart_routing") || f(Y, "argo.allow_tiered_caching"),
				w = Y => d(Y, "zone.cname_setup_allowed") || d(Y, "zone.partial_setup_allowed") || f(Y, "zone.partial_setup_allowed"),
				A = Y => d(Y, "argo.allow_smart_routing") || f(Y, "argo.allow_smart_routing"),
				L = Y => d(Y, "argo.allow_tiered_caching") || f(Y, "argo.allow_tiered_caching"),
				b = Y => A(Y) || L(Y),
				D = Y => d(Y, "ctm.enabled"),
				R = Y => {
					const ve = u(Y, "ctm.load_balancers");
					return typeof ve == "number" ? ve : 0
				},
				Z = Y => {
					const ve = u(Y, "ctm.pools");
					return typeof ve == "number" ? ve : 0
				},
				oe = Y => {
					const ve = u(Y, "ctm.origins");
					return typeof ve == "number" ? ve : 0
				},
				ce = Y => d(Y, "workers.enabled"),
				le = Y => d(Y, "stream.enabled"),
				Q = Y => {
					const ve = u(Y, "access.users_allowed");
					return typeof ve == "number" ? ve : 0
				},
				K = Y => Q(Y) > 0,
				H = Y => {
					const ve = p(Y, "dedicated_certificates");
					return typeof ve == "number" ? ve : 0
				},
				N = Y => H(Y) > 0,
				U = Y => {
					const ve = p(Y, "rate_limiting.max_rules");
					return typeof ve == "number" ? ve : 0
				},
				S = Y => d(Y, "rate_limiting.enabled"),
				x = Y => {
					const ve = p(Y, "page_rules");
					return typeof ve == "number" ? ve : 0
				},
				G = Y => x(Y) > 0,
				ne = Y => {
					const ve = u(Y, "dns_firewall.max_clusters_allowed");
					return typeof ve == "number" ? ve : 0
				},
				q = Y => ne(Y) > 0,
				ae = Y => f(Y, "zone.advanced_certificate_manager") || d(Y, "zone.advanced_certificate_manager"),
				j = Y => p(Y, "authoritative_dns.proxy_record_allowed") === !1 || u(Y, "authoritative_dns.proxy_record_allowed") === !1,
				M = Y => d(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				$ = Y => p(Y, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				J = Y => {
					const ve = p(Y, "authoritative_dns.min_record_ttl_allowed");
					return typeof ve == "number" && ve > 1 ? ve : 60
				},
				ue = Y => {
					const ve = u(Y, r.yt);
					return typeof ve == "number" ? ve : 0
				},
				se = Y => d(Y, "foundation_dns.advanced_nameservers_allowed") || f(Y, "foundation_dns.advanced_nameservers_allowed"),
				pe = Y => d(Y, "authoritative_dns.account_custom_nameservers_allowed"),
				te = Y => f(Y, "authoritative_dns.zone_custom_nameservers_allowed"),
				ye = Y => te(Y) || pe(Y),
				Oe = (Y, ve) => ((0, e.el)(window.location.pathname) ? p : u)(Y, ve),
				Ie = Y => ((0, e.el)(window.location.pathname) ? g : a)(Y),
				Le = Y => d(Y, "authoritative_dns.multi_provider_allowed") || f(Y, "authoritative_dns.multi_provider_allowed"),
				Se = Y => f(Y, "authoritative_dns.cname_flattening_allowed"),
				ke = Y => d(Y, "secondary_dns.secondary_overrides") || f(Y, "secondary_dns.secondary_overrides"),
				qe = Y => d(Y, "authoritative_dns.custom_soa_allowed") || f(Y, "authoritative_dns.custom_soa_allowed"),
				Be = Y => d(Y, "authoritative_dns.custom_ns_ttl_allowed") || f(Y, "authoritative_dns.custom_ns_ttl_allowed"),
				$e = Y => d(Y, "secondary.create_zone"),
				Ye = Y => se(Y) || pe(Y) || Le(Y) || $e(Y) || ke(Y) || qe(Y) || Be(Y)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return l
				},
				v: function() {
					return g
				}
			});
			var e = t("../react/utils/i18n.ts"),
				r = t("../../../common/intl/intl-types/src/index.ts"),
				o = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				c = t("../react/utils/bootstrap.ts");
			const l = s => {
				if ((0, c.gm)()) return o.Z.set(e.ly, e.ZW), e.ZW;
				const p = s.userCommPreferences.data;
				if (p == null ? void 0 : p["language-locale"]) return (0, e.i_)(p["language-locale"]), p["language-locale"];
				{
					(0, e.Kd)() || (0, e.i_)(e.ZW);
					const f = (0, e.Kd)();
					return g(f) ? f : e.ZW
				}
			};

			function g(s) {
				const p = Object.keys(r.Q).find(f => r.Q[f] === s);
				return !!s && typeof s == "string" && p != null && (0, e.S8)(p)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return l
				},
				BG: function() {
					return f
				},
				BY: function() {
					return v
				},
				GP: function() {
					return u
				},
				GU: function() {
					return O
				},
				PR: function() {
					return o
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
					return d
				},
				vW: function() {
					return g
				}
			});
			var e = t("../react/app/redux/normalizer.js");
			const r = _ => _.user,
				o = (0, e.P1)("user", r),
				c = _ => {
					var T;
					return (T = o(_)) === null || T === void 0 ? void 0 : T.email.endsWith("@cloudflare.com")
				},
				l = _ => {
					var T;
					return !!((T = o(_)) === null || T === void 0 ? void 0 : T.id)
				},
				g = _ => {
					const T = o(_);
					if (!!T) return T.first_name && T.last_name ? `${T.first_name} ${T.last_name}` : T.email
				},
				s = _ => {
					const T = o(_);
					return T && T.has_enterprise_zones
				},
				p = _ => _.userCommPreferences,
				f = (0, e.P1)("userCommPreferences", p),
				n = _ => {
					const T = o(_);
					return T && T.email_verified
				},
				a = _ => {
					const T = f(_);
					return T && T.preferences.marketing_communication
				},
				i = _ => _.userDetails,
				m = (0, e.P1)("userDetails", i),
				u = _ => {
					const T = m(_);
					return T && T["2FA-RECOVERY"] === "scheduled"
				},
				d = _ => {
					const T = m(_);
					return T && T["2FA-RECOVERY"] === "interrupted"
				},
				I = _ => {
					const T = m(_);
					return T == null ? void 0 : T["NEW-USER-EMAIL"]
				},
				P = _ => _.gates.assignments,
				h = (_, T) => _ && _[T];

			function v(_, T) {
				const k = P(_);
				return k ? h(k, T) : void 0
			}
			const O = (_, T) => v(_, T) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return w
				},
				$t: function() {
					return Me
				},
				A4: function() {
					return P
				},
				Cu: function() {
					return h
				},
				DQ: function() {
					return ue
				},
				Ej: function() {
					return L
				},
				FH: function() {
					return O
				},
				ID: function() {
					return S
				},
				Iu: function() {
					return I
				},
				Ko: function() {
					return Le
				},
				Le: function() {
					return te
				},
				Ly: function() {
					return q
				},
				M3: function() {
					return $e
				},
				N8: function() {
					return Be
				},
				NY: function() {
					return $
				},
				Ns: function() {
					return G
				},
				Ox: function() {
					return Ce
				},
				P4: function() {
					return b
				},
				RO: function() {
					return N
				},
				Tr: function() {
					return Ie
				},
				U: function() {
					return v
				},
				Ug: function() {
					return T
				},
				V6: function() {
					return Ye
				},
				WR: function() {
					return pt
				},
				Xg: function() {
					return d
				},
				ZB: function() {
					return pe
				},
				_y: function() {
					return x
				},
				cU: function() {
					return Se
				},
				cg: function() {
					return J
				},
				d2: function() {
					return le
				},
				il: function() {
					return ne
				},
				jN: function() {
					return R
				},
				jg: function() {
					return j
				},
				kC: function() {
					return A
				},
				kf: function() {
					return Y
				},
				ko: function() {
					return H
				},
				mK: function() {
					return Fe
				},
				nA: function() {
					return u
				},
				oY: function() {
					return D
				},
				qM: function() {
					return ye
				},
				rq: function() {
					return M
				},
				tS: function() {
					return k
				},
				tU: function() {
					return oe
				},
				vB: function() {
					return lt
				},
				vM: function() {
					return Z
				},
				wH: function() {
					return _
				},
				wn: function() {
					return se
				},
				xU: function() {
					return ce
				},
				xw: function() {
					return Oe
				},
				z5: function() {
					return U
				},
				zO: function() {
					return ke
				},
				zW: function() {
					return ve
				},
				zh: function() {
					return Q
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				c = t.n(o),
				l = t("../../../../node_modules/moment/moment.js"),
				g = t.n(l),
				s = t("../react/common/constants/billing/index.ts");

			function p(X) {
				for (var me = 1; me < arguments.length; me++) {
					var he = arguments[me] != null ? Object(arguments[me]) : {},
						Ue = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && Ue.push.apply(Ue, Object.getOwnPropertySymbols(he).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(he, Pe).enumerable
					})), Ue.forEach(function(Pe) {
						f(X, Pe, he[Pe])
					})
				}
				return X
			}

			function f(X, me, he) {
				return me = n(me), me in X ? Object.defineProperty(X, me, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[me] = he, X
			}

			function n(X) {
				var me = a(X, "string");
				return typeof me == "symbol" ? me : String(me)
			}

			function a(X, me) {
				if (typeof X != "object" || X === null) return X;
				var he = X[Symbol.toPrimitive];
				if (he !== void 0) {
					var Ue = he.call(X, me || "default");
					if (typeof Ue != "object") return Ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (me === "string" ? String : Number)(X)
			}
			const i = (0, r.P1)("zone", X => X.zone),
				m = X => {
					var me;
					return (me = X.zoneVersioning) === null || me === void 0 ? void 0 : me.zoneVersionSelector
				},
				u = (0, e.P1)(i, m, (X, me) => {
					var he, Ue, Pe;
					let be;
					if (Array.isArray(X) && X.length === 1 ? be = X[0] : X && !Array.isArray(X) && (be = X), !be) return;
					const Ne = !!(me == null ? void 0 : me.enabled);
					return p({}, be, be.name && {
						name: Ne ? me.rootZoneName : be.name
					}, {
						versioning: {
							enabled: Ne,
							isRoot: !((he = be.name) === null || he === void 0 ? void 0 : he.endsWith(".config.cfdata.org")),
							version: Ne ? me.selectedVersion : 0,
							rootZoneId: Ne ? me.rootZoneId : (Ue = (Pe = be) === null || Pe === void 0 ? void 0 : Pe.id) !== null && Ue !== void 0 ? Ue : ""
						}
					})
				}),
				d = X => X.zone,
				I = X => X.zone.isRequesting,
				P = (0, e.P1)(u, d, (X, me) => ({
					data: X,
					meta: me
				})),
				h = X => {
					var me, he;
					return (me = (he = u(X)) === null || he === void 0 ? void 0 : he.id) !== null && me !== void 0 ? me : ""
				},
				v = X => X.zones,
				O = X => X.zonesRoot,
				_ = X => X.zonesAccount,
				T = (0, r.P1)("zones", v),
				k = (0, r.P1)("zonesRoot", O),
				w = (0, r.P1)("zonesAccount", _);

			function A(X) {
				const me = u(X);
				return me ? me.created_on : null
			}

			function L(X, me, he) {
				const Ue = A(X);
				if (!Ue) return;
				const Pe = g().duration(me, he),
					be = new Date(Ue),
					Ne = new Date(new Date().getTime() - Pe.asMilliseconds());
				return be.getTime() > Ne.getTime()
			}

			function b(X) {
				const me = u(X);
				return me ? me.status : null
			}

			function D(X) {
				const me = u(X);
				return me ? me.type : null
			}

			function R(X) {
				return (X == null ? void 0 : X.plan_pending) ? X == null ? void 0 : X.plan_pending : X == null ? void 0 : X.plan
			}

			function Z(X) {
				const me = u(X);
				if (!me) return;
				const he = R(me);
				return he && he.legacy_id
			}

			function oe(X, me) {
				const he = R(X);
				return !!he && s.Gs.indexOf(he.legacy_id) >= s.Gs.indexOf(me)
			}

			function ce(X) {
				return !!X && X.status === "initializing"
			}

			function le(X) {
				return !!X && X.status === "pending"
			}

			function Q(X) {
				return !!X && X.status === "active"
			}

			function K(X, me) {
				if (!X) return !1;
				const he = R(X);
				return !!he && he.legacy_id === me
			}

			function H(X) {
				return K(X, "enterprise")
			}
			const N = X => H(u(X));

			function U(X) {
				return K(X, "business")
			}
			const S = X => U(u(X));

			function x(X) {
				return K(X, "pro")
			}

			function G(X) {
				return K(X, "free")
			}
			const ne = X => G(u(X));

			function q(X) {
				return !H(X)
			}

			function ae(X) {
				return X && X.owner
			}

			function j(X, me) {
				const he = ae(me);
				return !!he && he.type === "user" && he.id === X.id
			}

			function M(X) {
				const me = u(X);
				return !!me && me.type === "partial"
			}

			function $(X) {
				const me = u(X);
				return !!me && me.type === "secondary"
			}
			const J = X => {
					var me;
					const he = u(X);
					return !!(he == null ? void 0 : he.host) && !!((me = he.plan) === null || me === void 0 ? void 0 : me.externally_managed)
				},
				ue = X => {
					const me = T(X);
					return me && me.some(H)
				},
				se = (X, me) => {
					const he = u(X);
					return he && he.betas ? he.betas.includes(me) : !1
				},
				pe = (X, ...me) => c()(X, ["zoneFlags", "data", ...me]),
				te = (X, ...me) => c()(X, ["accountFlags", "data", ...me]),
				ye = X => X.accountFlags.isRequesting,
				Oe = X => X.zoneFlags.isRequesting,
				Ie = (X, ...me) => c()(X, ["zoneFlagsChanges", "data", ...me]),
				Le = X => X.zoneFlagsChanges.isRequesting,
				Se = X => X.zoneFlags && X.zoneFlags.data,
				ke = X => X.zoneFlags,
				qe = (0, e.P1)(Se, ke, (X, me) => ({
					data: X,
					meta: me
				})),
				Be = (0, r.P1)("abuseUrls", X => X.overview.abuseUrls),
				$e = X => {
					const me = u(X);
					return me ? `/${me.account.id}/${me.name}` : null
				},
				Ye = X => X.zoneMarketingCampaigns,
				Y = X => X.overview.zoneBlocks.data,
				ve = X => X.overview.zoneBlocks.isRequesting,
				Me = X => X.overview.zoneBlocks.hasData,
				Fe = X => {
					var me, he;
					return (X == null || (me = X.overview.zoneBlocks) === null || me === void 0 || (he = me.paginationData) === null || he === void 0 ? void 0 : he.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				lt = X => X.overview.zoneBlocksReview.isRequesting,
				Ce = X => X.overview.zoneHold,
				pt = (0, r.P1)("zoneHold", Ce)
		},
		"../react/common/utils/formatDate.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (r, o, c = !1) => (0, e.p6)(r, o, c)
		},
		"../react/common/utils/getEnvironment.ts": function(W, E, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				o = t("../functions/utils/constants.ts");
			const c = () => {
				var l, g, s, p;
				const n = e.parse(document.cookie)[o.b1];
				let a = null;
				n && (a = (0, r.E9)(n));
				let i = "production";
				switch (!0) {
					case (((l = a) === null || l === void 0 ? void 0 : l.projectType) === "previews" && ((g = a) === null || g === void 0 ? void 0 : g.deploymentId) === "staging"):
						i = "canary";
						break;
					case ((s = window) === null || s === void 0 || (p = s.build) === null || p === void 0 ? void 0 : p.isPreviewDeploy):
						i = "preview";
						break
				}
				return i
			};
			E.Z = c
		},
		"../react/common/utils/hasRole.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				n: function() {
					return r
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts");
			const r = (o, c) => {
				const {
					roles: l = []
				} = (0, e.uF)(o) || {};
				return c.some(g => l.includes(g))
			}
		},
		"../react/common/utils/isGuards.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Q$: function() {
					return o
				},
				t: function() {
					return g
				},
				v5: function() {
					return c
				},
				zE: function() {
					return l
				}
			});
			var e = t("../react/common/constants/index.ts"),
				r = t("../node_modules/uuid/dist/esm-browser/validate.js");
			const o = s => s ? ["page", "per_page", "count", "total_count"].every(f => f in s && s[f]) : !1,
				c = (s = "") => e.Dy.includes(s.toLowerCase()),
				l = s => s !== null && typeof s == "object" && "name" in s && "size" in s && "type" in s && typeof s.slice == "function",
				g = s => (0, r.Z)(s)
		},
		"../react/common/utils/startViewTransition.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/common/utils/useQueryCache.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js");

			function r(s) {
				for (var p = 1; p < arguments.length; p++) {
					var f = arguments[p] != null ? Object(arguments[p]) : {},
						n = Object.keys(f);
					typeof Object.getOwnPropertySymbols == "function" && n.push.apply(n, Object.getOwnPropertySymbols(f).filter(function(a) {
						return Object.getOwnPropertyDescriptor(f, a).enumerable
					})), n.forEach(function(a) {
						o(s, a, f[a])
					})
				}
				return s
			}

			function o(s, p, f) {
				return p = c(p), p in s ? Object.defineProperty(s, p, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[p] = f, s
			}

			function c(s) {
				var p = l(s, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function l(s, p) {
				if (typeof s != "object" || s === null) return s;
				var f = s[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(s, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(s)
			}
			const g = s => {
				const p = (0, e.useQueryClient)(),
					f = v => {
						var O;
						return p.getQueriesData((O = v) !== null && O !== void 0 ? O : s)
					},
					n = v => {
						var O;
						return p.getQueryData((O = v) !== null && O !== void 0 ? O : s)
					},
					a = v => {
						var O;
						return p.getQueriesData({
							queryKey: (O = v) !== null && O !== void 0 ? O : s,
							stale: !0
						})
					},
					i = (v, O) => {
						var _;
						p.setQueryData((_ = O) !== null && _ !== void 0 ? _ : s, v)
					},
					m = async v => {
						var O;
						await p.refetchQueries((O = v) !== null && O !== void 0 ? O : s)
					}, u = async (v, O) => {
						var _, T;
						await p.invalidateQueries((_ = v) !== null && _ !== void 0 ? _ : s, r({
							refetchActive: !1
						}, (T = O) !== null && T !== void 0 ? T : {}))
					}, d = async (v, O) => {
						const _ = v || (T => {
							var k;
							return (T == null || (k = T.queryKey) === null || k === void 0 ? void 0 : k[0]) === s
						});
						await p.invalidateQueries(r({
							predicate: _,
							refetchActive: !1,
							refetchInactive: !1
						}, O))
					};
				return {
					refetch: m,
					cancelData: async () => {
						await p.cancelQueries(s)
					},
					invalidate: u,
					setData: i,
					getDataStale: a,
					getData: f,
					prefetchQuery: (v, O) => {
						var _;
						return p.prefetchQuery((_ = O) !== null && _ !== void 0 ? _ : s, v)
					},
					getQueryData: n,
					predicateInvalidate: d,
					batchInvalidate: async ({
						queryKeysToInvalidate: v = [],
						queryKeysToPredicateInvalidate: O = [],
						refetchActive: _ = !1,
						refetchInactive: T = !1
					}) => {
						const k = v.map(A => u(A)),
							w = O.map(A => d(L => {
								var b;
								return (L == null || (b = L.queryKey) === null || b === void 0 ? void 0 : b[0]) === A
							}, {
								refetchActive: _,
								refetchInactive: T
							}));
						await Promise.all([...k, ...w])
					}
				}
			}
		},
		"../react/common/validators/index.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				K2: function() {
					return r
				},
				Lb: function() {
					return o
				},
				XI: function() {
					return c
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
			const r = f => /^https?:\/\/(.*)/.test(f),
				o = f => e.default.hostname.test(f),
				c = f => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(f),
				l = f => /^[!-~]+$/.test(f),
				g = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				s = f => g.test(f),
				p = f => !!f && !!f.length && /^[ -~]+$/.test(f)
		},
		"../react/pages/abuse/abuse.translations.ts": function(W, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				keys: function() {
					return l
				},
				namespace: function() {
					return c
				},
				translations: function() {
					return g
				}
			});
			var e = t("../../../common/intl/intl-core/src/prepare.ts"),
				r = t("../../../common/intl/intl-core/src/Interpolation.ts"),
				o = t("../react/pages/abuse/types.ts");
			const {
				namespace: c,
				keys: l,
				translations: g
			} = (0, e.x)("abuse", {
				page_title: "Abuse",
				page_description: "View abuse reports accepted against this account and any mitigations in place for potential terms of service violations. Once you have addressed a mitigation, or if you believe the mitigation was made in error, you can request review by Cloudflare's Trust & Safety team. Abuse reports with no activity are archived after 30 days.",
				reports_table: {
					empty_state: {
						default: "You have no abuse reports.",
						search: "There are no matching results.",
						error: "Error fetching abuse reports. Please try again."
					},
					column_name: {
						[o.mu.Id]: "Report ID",
						[o.mu.CDate]: "Date",
						[o.mu.Domain]: "Domain",
						[o.mu.Type]: "Report type",
						[o.mu.Status]: "Report status",
						[o.mu.AcceptedUrls]: "Accepted URLs"
					},
					view_mitigations_link: "View mitigations",
					filter: {
						[o.mu.Domain]: "Domain",
						[o.mu.Status]: "Report status",
						[o.mu.Type]: "Report type"
					}
				},
				cache_rate_limits_table: {
					empty_state: {
						default: "This report has no mitigations.",
						search: "There are no matching mitigations.",
						error: "Error fetching mitigations. Please try again."
					},
					column_name: {
						[o.XO.EffectiveDate]: "Date",
						[o.XO.Type]: "Mitigation",
						[o.XO.Status]: "Status",
						[o.XO.EntityType]: "Entity type",
						[o.XO.EntityId]: "Entity name or ID"
					}
				},
				mitigation_status: {
					active: "Active",
					cancelled: "Cancelled",
					in_review: "In Review",
					pending: "Pending",
					removed: "Removed"
				},
				report_status: {
					accepted: "Accepted",
					in_review: "In Review"
				},
				entity_type: {
					account: "Account",
					url_pattern: "URL Pattern",
					zone: "Zone"
				},
				mitigation_type: {
					account_suspend: "Account suspend",
					block_url: "Block URL",
					rate_limit_cache: "Rate limit cache"
				},
				report_type: {
					[o.Zy.EMERGENCY]: "Emergency",
					[o.Zy.DMCA]: "DMCA",
					[o.Zy.GENERAL]: "General",
					[o.Zy.NCSEI]: "NCSEI",
					[o.Zy.PHISHING]: "Phishing",
					[o.Zy.REGISTRAR_WHOIS]: "Registrar",
					[o.Zy.THREAT]: "Threat",
					[o.Zy.TRADEMARK]: "Trademark"
				},
				api_handling: {
					error: "Error",
					summary_error_and_retry: "Summary details failed to load.",
					refresh: "Refresh",
					unavailable: "Unavailable"
				},
				tab_titles: {
					blocked_content: "Blocked content",
					cache_rate_limits: "Cache rate limits"
				},
				tab_descriptions: {
					cache_rate_limits: "View cache rate limits that Cloudflare will take or has taken against your account for potential terms of service violations. Once you have addressed a mitigation, or if you believe the mitigation was made in error, you can request review by Cloudflare's Trust & Safety team."
				},
				report_summary_titles: {
					report_status: "Report status",
					date: "Date",
					report_type: "Report type",
					domain: "Domain",
					accepted_urls: "Accepted URLs",
					cloudflare_mitigations: "Cloudflare mitigations"
				},
				report_summary_values: {
					active: (0, r.d)`${"activeCount"} Active`
				},
				breadcrumb_titles: {
					manage_account: "Manage Account",
					abuse: "Abuse",
					abuse_report: (0, r.d)`Abuse Report ${"reportId"}`
				},
				product_documentation: "Product documentation",
				date_range: "Date range"
			})
		},
		"../react/pages/abuse/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Cg: function() {
					return f
				},
				RV: function() {
					return p
				},
				R_: function() {
					return g
				},
				Vq: function() {
					return m
				},
				Y0: function() {
					return i
				},
				bL: function() {
					return d
				},
				eM: function() {
					return s
				},
				i9: function() {
					return l
				},
				nq: function() {
					return a
				},
				to: function() {
					return u
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				o = t("../react/pages/abuse/abuse.translations.ts"),
				c = t("../react/pages/abuse/types.ts");
			const l = "customer-abuse-reports-table-filter-bar",
				g = "abuse-reports-table-tooltip",
				s = {
					abuse: (0, r.BC)`/${"accountId"}/abuse`,
					abuseReport: (0, r.BC)`/${"accountId"}/abuse/report/${"reportId"}`,
					abuseReportTab: (0, r.BC)`/${"accountId"}/abuse/report/${"reportId"}/${"tab"}`
				};
			let p = function(I) {
				return I.BLOCKED_CONTENT = "blocked-content", I.CACHE_RATE_LIMITS = "cache-rate-limits", I
			}({});
			const f = [{
					title: o.keys.tab_titles.blocked_content,
					url: `/${p.BLOCKED_CONTENT}`
				}, {
					title: o.keys.tab_titles.cache_rate_limits,
					url: `/${p.CACHE_RATE_LIMITS}`
				}],
				n = {
					accepted: "gray",
					in_review: "gray"
				},
				a = {
					active: "red",
					cancelled: "gray",
					in_review: "blue",
					pending: "orange",
					removed: "gray"
				},
				i = ["accepted", "in_review"];
			let m = function(I) {
				return I.APPEAL_MITIGATION = "appeal abuse report mitigation", I.ADD_FILTER = "Add filter", I.REMOVE_FILTER = "Remove filter", I
			}({});
			const u = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: c.mu.CDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [c.mu.Domain, c.mu.Status, c.mu.Type],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: c.mu.Domain,
						f2: c.mu.Status,
						f3: c.mu.Type,
						f4: "startDate",
						f5: "endDate",
						f6: "timeWindow"
					}
				},
				d = {
					initialPaginationState: {
						page: 1,
						perPage: 25
					},
					initialToolbarState: {},
					initialSortState: {
						name: c.XO.EffectiveDate,
						direction: e.Sr.desc
					},
					options: {
						autoFillInitialValues: !0,
						autoFillFilterValues: !0,
						filtersAsArray: [c.XO.Type, c.XO.Status, c.XO.EntityType],
						queryParamStrategy: "sync-with-table-state"
					},
					filters: {
						f1: c.XO.Type,
						f2: c.XO.Status,
						f3: c.XO.EntityType,
						f4: "startDate",
						f5: "endDate",
						f6: "timeWindow"
					}
				}
		},
		"../react/pages/abuse/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				XO: function() {
					return e
				},
				Zy: function() {
					return o
				},
				mu: function() {
					return l
				}
			});
			let e = function(g) {
					return g.Type = "type", g.EffectiveDate = "effective_date", g.Status = "status", g.EntityType = "entity_type", g.EntityId = "entity_id", g
				}({}),
				r = function(g) {
					return g.ID = "id", g.DOMAIN = "domain", g.CREATED_BEFORE = "created_before", g.CREATED_AFTER = "created_after", g.STATUS = "status", g.TYPE = "type", g.MITIGATION_STATUS = "mitigation_status", g
				}({}),
				o = function(g) {
					return g.DMCA = "DMCA", g.TRADEMARK = "TM", g.PHISHING = "PHISH", g.GENERAL = "GEN", g.REGISTRAR_WHOIS = "REG_WHO", g.EMERGENCY = "EMER", g.NCSEI = "NCSEI", g.THREAT = "THREAT", g
				}({});
			const c = [o.DMCA, o.TRADEMARK, o.PHISHING, o.GENERAL, o.REGISTRAR_WHOIS, o.EMERGENCY, o.NCSEI, o.THREAT];
			let l = function(g) {
				return g.Id = "id", g.CDate = "cdate", g.Domain = "domain", g.Type = "type", g.Status = "status", g.AcceptedUrls = "accepted_urls", g
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				DZ: function() {
					return c
				},
				GA: function() {
					return f
				},
				hT: function() {
					return g
				},
				p6: function() {
					return o
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
			const o = i => r().utc(i).format("YYYY-MM-DD"),
				c = i => r().utc(i).format(),
				l = i => r().utc(i).startOf("minute").format(),
				g = i => new Date(i),
				s = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = i => {
					const m = i / 60 / 60 / 1e3;
					return s[Object.keys(s).sort((u, d) => d - u).find(u => m >= u)]
				},
				f = (i, m = u => u.avg && u.avg.sampleInterval ? u.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((u, d) => u + m(d), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				a = i => n[i]
		},
		"../react/pages/caching/tracking.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CACHE_PURGE = "submit custom purge", r.TIERED_CACHE = "select tiered cache topology", r.CACHE_ANALYTICS = "load cache analytics data", r.CHANGED_ZONE_SETTINGS = "change zone setting", r
			}({})
		},
		"../react/pages/d1/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				H: function() {
					return o
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
				o = {
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
		"../react/pages/dns/dns-records/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e
				},
				X: function() {
					return r
				}
			});
			let e = function(o) {
				return o.DNS_RECORD_CREATE = "create DNS records", o.DNS_RECORD_UPDATE = "update DNS records", o.DNS_RECORD_DELETE = "delete DNS records", o.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", o
			}({});
			const r = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				BB: function() {
					return r
				},
				Pm: function() {
					return o
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
			let o = function(l) {
				return l[l.Verified = 0] = "Verified", l[l.Pending = 1] = "Pending", l[l.Missing = 2] = "Missing", l[l.WorkerNotFound = 3] = "WorkerNotFound", l[l.Unknown = 4] = "Unknown", l[l.Loading = 5] = "Loading", l
			}({});
			const c = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/pages/home/alerts/routes.ts");
			const o = r._.createAlertWithSelection,
				c = r._.editAlert,
				l = (0, e.BC)`${o}/subtype`,
				g = (0, e.BC)`${o}/stepper`,
				s = (0, e.BC)`${g}/${"stepName"}`,
				p = (0, e.BC)`${g}/details`,
				f = (0, e.BC)`${g}/data-centers`,
				n = (0, e.BC)`${g}/ramps`,
				a = (0, e.BC)`${g}/threshold`,
				i = (0, e.BC)`${g}/review`,
				m = (0, e.BC)`${g}/confirm`,
				u = (0, e.BC)`${c}/stepper`,
				d = (0, e.BC)`${u}/${"stepName"}`,
				I = (0, e.BC)`${u}/details`,
				P = (0, e.BC)`${u}/data-centers`,
				h = (0, e.BC)`${u}/ramps`,
				v = (0, e.BC)`${u}/threshold`,
				O = (0, e.BC)`${u}/review`,
				_ = (0, e.BC)`${u}/confirm`,
				T = {
					magicTunnelHealthChooseSubType: l,
					magicTunnelHealthCreateStepperBase: g,
					magicTunnelHealthCreateStepper: s,
					magicTunnelHealthCreateDetails: p,
					magicTunnelHealthCreateSelectDataCenter: f,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: a,
					magicTunnelHealthCreateReview: i,
					magicTunnelHealthCreateConfirm: m,
					magicTunnelHealthEditStepperBase: u,
					magicTunnelHealthEditStepper: d,
					magicTunnelHealthEditDetails: I,
					magicTunnelHealthEditSelectDataCenter: P,
					magicTunnelHealthEditSelectRamps: h,
					magicTunnelHealthEditSetThreshold: v,
					magicTunnelHealthEditReview: O,
					magicTunnelHealthEditConfirm: _
				};
			E.Z = T
		},
		"../react/pages/home/alerts/config.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				jk: function() {
					return i
				},
				w8: function() {
					return m
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				o = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				c = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				l = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function g(u) {
				for (var d = 1; d < arguments.length; d++) {
					var I = arguments[d] != null ? Object(arguments[d]) : {},
						P = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(I).filter(function(h) {
						return Object.getOwnPropertyDescriptor(I, h).enumerable
					})), P.forEach(function(h) {
						s(u, h, I[h])
					})
				}
				return u
			}

			function s(u, d, I) {
				return d = p(d), d in u ? Object.defineProperty(u, d, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[d] = I, u
			}

			function p(u) {
				var d = f(u, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function f(u, d) {
				if (typeof u != "object" || u === null) return u;
				var I = u[Symbol.toPrimitive];
				if (I !== void 0) {
					var P = I.call(u, d || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(u)
			}
			const n = "Notifications",
				a = "notification",
				i = g({}, e._, r._j, o._j, c._),
				m = g({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, l.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				_j: function() {
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				o = (0, e.BC)`${r}/pagerduty/connect`,
				c = (0, e.BC)`${r}/pagerduty/register`,
				l = (0, e.BC)`${r}/pagerduty`,
				g = {
					pagerDutyConnect: o,
					pagerDutyRegister: c,
					pagerDutyList: l
				};
			var s = null
		},
		"../react/pages/home/alerts/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				o = (0, e.BC)`${r}/notifications`,
				c = (0, e.BC)`${o}/destinations`,
				l = (0, e.BC)`${o}/create`,
				g = (0, e.BC)`${l}/${"alertType"}`,
				s = (0, e.BC)`${o}/edit/${"alertId"}`,
				p = {
					account: r,
					alerts: o,
					destinations: c,
					createAlert: l,
					createAlertWithSelection: g,
					editAlert: s
				};
			E.Z = p
		},
		"../react/pages/home/alerts/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", r
			}({})
		},
		"../react/pages/home/configurations/dns-settings/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.PEER_DNS_CREATE = "create peer server", r.PEER_DNS_UPDATE = "update peer server", r.PEER_DNS_DELETE = "delete peer server", r.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", r.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", r.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", r
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_LIST = "create list", r.DELETE_LIST = "delete list", r.ADD_LIST_ITEM = "add list item", r.DELETE_LIST_ITEM = "delete list item", r
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AA: function() {
					return M
				},
				AN: function() {
					return et
				},
				AY: function() {
					return _e
				},
				Ac: function() {
					return ft
				},
				Am: function() {
					return P
				},
				B2: function() {
					return U
				},
				BB: function() {
					return A
				},
				BF: function() {
					return Pe
				},
				BQ: function() {
					return We
				},
				E8: function() {
					return z
				},
				Fl: function() {
					return De
				},
				Fu: function() {
					return D
				},
				Gc: function() {
					return rt
				},
				Hc: function() {
					return Nt
				},
				IO: function() {
					return mt
				},
				JK: function() {
					return qe
				},
				K: function() {
					return T
				},
				LI: function() {
					return kt
				},
				LX: function() {
					return he
				},
				L_: function() {
					return Y
				},
				Ly: function() {
					return He
				},
				MR: function() {
					return x
				},
				Mj: function() {
					return ne
				},
				NB: function() {
					return Mt
				},
				Oe: function() {
					return Ft
				},
				Or: function() {
					return ae
				},
				P5: function() {
					return Ot
				},
				PE: function() {
					return Oe
				},
				Pd: function() {
					return It
				},
				Pk: function() {
					return Le
				},
				Pp: function() {
					return Fe
				},
				Q1: function() {
					return b
				},
				Qr: function() {
					return Ue
				},
				Qv: function() {
					return Ie
				},
				Rp: function() {
					return Tt
				},
				S7: function() {
					return yt
				},
				Sh: function() {
					return je
				},
				Sl: function() {
					return xt
				},
				TZ: function() {
					return j
				},
				Tg: function() {
					return Be
				},
				Tp: function() {
					return gt
				},
				Uy: function() {
					return wt
				},
				Vw: function() {
					return Z
				},
				W3: function() {
					return pt
				},
				WR: function() {
					return Xe
				},
				WX: function() {
					return se
				},
				XF: function() {
					return tt
				},
				Xb: function() {
					return $
				},
				Zs: function() {
					return Ye
				},
				_f: function() {
					return be
				},
				b4: function() {
					return ue
				},
				bc: function() {
					return Lt
				},
				c2: function() {
					return S
				},
				cE: function() {
					return Ct
				},
				dh: function() {
					return Me
				},
				fE: function() {
					return ve
				},
				g7: function() {
					return ye
				},
				hO: function() {
					return Ce
				},
				hV: function() {
					return Rt
				},
				hk: function() {
					return h
				},
				hr: function() {
					return J
				},
				it: function() {
					return lt
				},
				j3: function() {
					return At
				},
				jN: function() {
					return ke
				},
				jo: function() {
					return Bt
				},
				k3: function() {
					return vt
				},
				m8: function() {
					return K
				},
				nm: function() {
					return ot
				},
				oW: function() {
					return de
				},
				pH: function() {
					return H
				},
				pi: function() {
					return Q
				},
				r4: function() {
					return Dt
				},
				rI: function() {
					return G
				},
				s7: function() {
					return _t
				},
				sg: function() {
					return ct
				},
				tB: function() {
					return d
				},
				tN: function() {
					return te
				},
				u_: function() {
					return jt
				},
				vV: function() {
					return Ne
				},
				vc: function() {
					return Se
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				o = t("../../../../node_modules/moment/moment.js"),
				c = t.n(o),
				l = t("../../../common/util/types/src/api/domain.ts"),
				g = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				s = t("../react/utils/url.ts"),
				p = t("../react/pages/home/domain-registration/config.ts"),
				f = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function a(y) {
				for (var C = 1; C < arguments.length; C++) {
					var F = arguments[C] != null ? Object(arguments[C]) : {},
						re = Object.keys(F);
					typeof Object.getOwnPropertySymbols == "function" && re.push.apply(re, Object.getOwnPropertySymbols(F).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(F, ge).enumerable
					})), re.forEach(function(ge) {
						i(y, ge, F[ge])
					})
				}
				return y
			}

			function i(y, C, F) {
				return C = m(C), C in y ? Object.defineProperty(y, C, {
					value: F,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[C] = F, y
			}

			function m(y) {
				var C = u(y, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function u(y, C) {
				if (typeof y != "object" || y === null) return y;
				var F = y[Symbol.toPrimitive];
				if (F !== void 0) {
					var re = F.call(y, C || "default");
					if (typeof re != "object") return re;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(y)
			}

			function d(y) {
				return y.filter(C => C.isSelected).reduce((C, {
					name: F,
					fees: re,
					isZoneEntitlementPresent: ge
				}) => ge || !(0, e.isNumber)(re == null ? void 0 : re.transfer_fee) ? C : ft(F) ? C + (re == null ? void 0 : re.transfer_fee) * 2 : C + (re == null ? void 0 : re.transfer_fee), 0)
			}

			function I(y) {
				return y.filter(C => C.registrar.toLowerCase() === "godaddy")
			}
			const P = "MMM D, YYYY";

			function h(y, C, F, re) {
				var ge, Ee, Re, ze, Je, Ve, Ze, at, ut, nt, Ge, Ut;
				const Qe = y[C.name],
					Gt = () => ft(C.name) ? c()(C.expires_at).add(2, "years").format(P) : c()(C.expires_at).add(1, "year").format(P);
				return a({
					name: C == null ? void 0 : C.name,
					zone: Qe,
					entitlements: F,
					registryCheck: re,
					nameservers: C.name_servers,
					isAvailable: C.available,
					lastKnownStatus: C.last_known_status,
					authCode: C.auth_code,
					isEnterpriseZone: (Qe == null || (ge = Qe.plan) === null || ge === void 0 ? void 0 : ge.legacy_id) === "enterprise",
					isActiveZone: (Qe == null ? void 0 : Qe.status) === "active",
					corResponsesPending: C.cor_responses_pending,
					isCorLocked: C.cor_locked,
					corLockedUntil: C.cor_locked_until ? c()(C.cor_locked_until).format(P) : null,
					isFullZone: (Qe == null ? void 0 : Qe.type) == n.xd.Full,
					isLocked: C.locked,
					registrar: C.current_registrar || p.JM,
					zoneId: Qe == null ? void 0 : Qe.id,
					currentExpiration: c()(C.expires_at).format(P),
					newExpiration: Gt(),
					lastEntitledAt: C.last_entitled_at ? new Date(C.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(F) && !!F.find(Wt => Wt.id === p.g5 && Wt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: C.transfer_in && _(C.transfer_in) || n.BJ.Pending,
					autoTransferStatus: n._n.Pending,
					transferConditions: C.transfer_conditions,
					transferApiCallStatus: n.Yh.Pending,
					transferIn: C.transfer_in,
					transferOut: C.transfer_out,
					autoRenew: C.auto_renew === !0,
					lastTransferredAt: C.last_transferred_at,
					createdAt: C.created_at,
					paymentExpiresAt: c()(C.payment_expires_at).isValid() ? c()(C.payment_expires_at) : c()(C.expires_at).isValid() ? c()(C.expires_at) : "",
					contactIds: {
						[n.l2.Administrator]: (Ee = C.contacts) === null || Ee === void 0 || (Re = Ee.administrator) === null || Re === void 0 ? void 0 : Re.id,
						[n.l2.Billing]: (ze = C.contacts) === null || ze === void 0 || (Je = ze.billing) === null || Je === void 0 ? void 0 : Je.id,
						[n.l2.Registrant]: (Ve = C.contacts) === null || Ve === void 0 || (Ze = Ve.registrant) === null || Ze === void 0 ? void 0 : Ze.id,
						[n.l2.Technical]: (at = C.contacts) === null || at === void 0 || (ut = at.technical) === null || ut === void 0 ? void 0 : ut.id
					},
					landing: C.landing,
					privacy: C.privacy,
					whois: C.whois,
					emailVerified: C.email_verified,
					materialChanges: k(C.material_changes),
					corChanges: C.cor_changes ? A(Object.assign(a({}, O), C.cor_changes)) : {},
					registryStatuses: C.registry_statuses ? C.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (nt = C.domain_protection_services) === null || nt === void 0 ? void 0 : nt.status
					},
					deletion: {
						isDeletable: C == null || (Ge = C.deletion) === null || Ge === void 0 ? void 0 : Ge.is_deletable
					},
					premiumType: C == null ? void 0 : C.premium_type,
					fees: C == null ? void 0 : C.fees
				}, C.domain_move && {
					domainMove: {
						ineligibilityReasons: (Ut = C.domain_move) === null || Ut === void 0 ? void 0 : Ut.ineligibility_reasons
					}
				}, C.actionable_metadata && {
					actionableMetadata: v(C.actionable_metadata)
				}, C.policies && {
					policies: a({}, C.policies.suspension && {
						suspension: {
							parked: C.policies.suspension.parked,
							parkingReason: C.policies.suspension.parking_reason,
							paymentExpired: C.policies.suspension.payment_expired
						}
					})
				})
			}

			function v(y) {
				return y.map(C => ({
					accountContext: C.account_context,
					createdAt: C.created_at,
					expiresAt: C.expires_at,
					sentAt: C.sent_at,
					status: C.status,
					type: C.type
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

			function _(y) {
				switch (y.enter_auth_code) {
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

			function T(y) {
				let C = y.extensions;
				(C == null ? void 0 : C.application_purpose) && (C == null ? void 0 : C.nexus_category) && (y.extensions = {
					nexusCategory: C.nexus_category,
					applicationPurpose: C.application_purpose
				});
				let F = a({}, typeof y.id == "string" ? {
					id: y.id
				} : {}, {
					first_name: y.firstName,
					organization: y.organization,
					address: y.address1,
					city: y.city,
					state: y.state || "N/A",
					zip: y.zip,
					country: y.country,
					phone: y.phone,
					email: y.email,
					fax: "",
					last_name: y.lastName,
					address2: y.address2,
					email_verified: y.emailVerified
				}, y.extensions ? {
					extensions: {
						nexus_category: y.extensions.nexusCategory,
						application_purpose: y.extensions.applicationPurpose
					}
				} : {});
				return $e(F)
			}

			function k(y) {
				let C = [];
				const F = {
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
				for (const re in y) {
					const ge = y[re],
						Ee = F[ge];
					C.push(Ee)
				}
				return C
			}
			const w = y => {
				if (!y) return null;
				let C = y;
				return y.includes("C31") && (C = "C31"), y.includes("C32") && (C = "C32"), C
			};

			function A(y) {
				return a({}, typeof y.id == "string" ? {
					id: y.id
				} : {}, {
					firstName: y.first_name,
					organization: y.organization,
					address1: y.address,
					city: y.city,
					state: y.state,
					zip: y.zip,
					country: y.country,
					phone: y.phone.trim(),
					email: y.email.trim(),
					lastName: y.last_name,
					address2: y.address2,
					emailVerified: y.email_verified
				}, y.extensions ? {
					extensions: {
						nexusCategory: w(y.extensions.nexus_category),
						applicationPurpose: y.extensions.application_purpose
					}
				} : {})
			}

			function L(y = {}) {
				const C = {
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
						}, y.zone && y.zone.plan || {}),
						type: EZoneType.Full
					}, y.zone || {}),
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
					}, y.transferConditions || {}),
					transferIn: a({
						unlock_domain: EApiTransferStatus.UNKNOWN,
						disable_privacy: EApiTransferStatus.UNKNOWN,
						enter_auth_code: EApiTransferStatus.UNKNOWN,
						approve_transfer: EApiTransferStatus.UNKNOWN,
						accept_foa: EApiTransferStatus.UNKNOWN,
						can_cancel_transfer: !1
					}, y.transferIn || {}),
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
				return Object.assign(C, y)
			}

			function b(y = {}) {
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
				}, y)
			}

			function D(y) {
				const C = p.Py.concat(p.ui).reduce((F, re) => a({}, F, {
					[re]: []
				}), {});
				return y.forEach(F => {
					let re = R(F.registrar);
					re in C || (re = p.ui), ct(F.name) && (re = "uk"), C[re].push(F)
				}), Object.keys(C).sort((F, re) => F.localeCompare(re)).map(F => ({
					registrar: F,
					domains: C[F]
				})).filter(F => F.domains.length > 0)
			}

			function R(y) {
				return y == null ? void 0 : y.toLowerCase().replace(/\s|,|\./g, "")
			}

			function Z(y) {
				if (!y || !y.registrar) return "unknown";
				if (ct(y.name)) return "uk";
				const C = R(y.registrar);
				return C in p.gM ? C : "unknown"
			}
			const oe = [];

			function ce(y) {
				return oe.some(C => y.endsWith("." + C))
			}

			function le(y) {
				return !y.isEnterpriseZone || !Array.isArray(y.entitlements) ? !1 : !!y.entitlements.find(({
					id: C,
					allocation: F
				}) => C === p.g5 && F.value === !0)
			}

			function Q(y) {
				var C;
				const F = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let re = !1,
					ge = null;
				return (C = y.registryStatuses) === null || C === void 0 || C.some(Ee => {
					F.includes(Ee) && (ge = Ee, re = !0)
				}), [re, ge]
			}

			function K(y, C = !1) {
				if (!y) return [!1, f.keys.cannot_transfer_default];
				if (y.zone.status !== "active") return [!1, f.keys.cannot_transfer_zone_not_active];
				if (!y.isFullZone && !le(y)) return [!1, f.keys.cannot_transfer_zone_not_eligible];
				if (y.registrar === "Cloudflare") return [!1, f.keys.cannot_transfer_domain_on_cf];
				if (y.isAvailable) return [!1, f.keys.cannot_transfer_domain_available];
				if (!y.transferConditions) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (!C && wt(y == null ? void 0 : y.premiumType)) return [!1, f.keys.cannot_transfer_domain_premium];
				if (H(y)) return [!1, f.keys.cannot_transfer_domain_transfer_in_progress];
				let F;
				for (F in y.transferConditions)
					if (F !== "not_premium" && !y.transferConditions[F]) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (ce(y.name)) return [!1, f.keys.cannot_transfer_domain_tld_not_supported];
				const [re, ge] = Q(y);
				return re && ge ? [!1, f.keys.cannot_transfer_domain_registry_status[ge]] : [!0, ""]
			}

			function H(y) {
				var C, F;
				return !!y.transferIn && !((C = y.transferConditions) === null || C === void 0 ? void 0 : C.not_started) && !!(ct(y.name) || ((F = y.registryStatuses) === null || F === void 0 ? void 0 : F.includes(n.rj.PENDING_TRANSFER)))
			}

			function N(y) {
				return !!y.registrar && !!y.currentExpiration
			}

			function U(y, C = !1) {
				const [F] = K(y, C);
				return N(y) ? pe(y) ? n.M5.InProgressOrOnCF : F ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function S(y) {
				return y.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(y.transferIn.enter_auth_code) || !1
			}

			function x(y) {
				return y.registrar === "Cloudflare"
			}

			function G(y) {
				return !!(y == null ? void 0 : y.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function ne(y) {
				return !!(y == null ? void 0 : y.includes(n.rj.PENDING_TRANSFER))
			}
			const q = "Invalid date";

			function ae(y) {
				return y.newExpiration === q ? "Unavailable" : y.newExpiration
			}

			function j(y) {
				return y.currentExpiration === q ? "Unavailable" : y.currentExpiration
			}

			function M(y) {
				return y.substring(y.indexOf("."))
			}

			function $(y = "") {
				return y.indexOf(".") !== -1 ? y.substring(0, y.indexOf(".")) : y
			}

			function J(y) {
				return y.map(C => C.name).map(C => M(C)).filter((C, F, re) => !re.includes(C, F + 1))
			}

			function ue(y) {
				if (p.no) return [!0, ""];
				if (!x(y)) return [!1, n.ok.NotOnCF];
				if (y.isCorLocked) return [!1, y.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (y.lastTransferredAt) {
					const C = c()(y.lastTransferredAt),
						F = c().duration(c()().diff(C)).as("days"),
						re = ct(y.name);
					if (F < (re ? 1 : 60)) return [!1, re ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (y.createdAt) {
					const C = c()(y.createdAt);
					if (c().duration(c()().diff(C)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function se(y) {
				return !!(p.Bc || y.transferOut)
			}

			function pe(y) {
				return ye(y) || x(y)
			}

			function te(y) {
				return !ye(y) && x(y)
			}

			function ye(y) {
				return !y || y.lastKnownStatus === n.kd.PENDING_TRANSFER || y.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !x(y) && y.transferConditions && !y.transferConditions.not_started || !1
			}

			function Oe(y) {
				return !(ce(y.name) || y.transferConditions && !y.transferConditions.supported_tld)
			}

			function Ie(y) {
				return (y == null ? void 0 : y.includes("/")) ? !0 : y.split("").some(C => C.charCodeAt(0) > 123)
			}

			function Le(y) {
				switch (y) {
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

			function Se(y) {
				return c()(y.paymentExpiresAt).isBefore(c()())
			}

			function ke(y) {
				return y.transferIn && y.transferIn.enter_auth_code === n.lW.REJECTED || !1
			}

			function qe(y) {
				const C = ["CU", "KP", "IR", "SY"];
				return y.filter(F => !C.includes(F.code))
			}

			function Be(y) {
				if (!!y) return `${y.charAt(0).toUpperCase()}${y.slice(1)}${y.charAt(y.length-1)==="."?"":"."}`
			}

			function $e(y) {
				const C = {};
				for (const [F, re] of Object.entries(y)) {
					if (re && typeof re == "string") {
						Object.assign(C, {
							[F]: re.trim()
						});
						continue
					}
					Object.assign(C, {
						[F]: re
					})
				}
				return C
			}

			function Ye(y) {
				return c()(y).add(40, "days")
			}

			function Y(y) {
				const C = y.paymentExpiresAt || y.payment_expires_at,
					F = Ye(C);
				return c()().isBetween(C, F)
			}

			function ve(y) {
				var C;
				return !(y == null ? void 0 : y.registryStatuses) || !Array.isArray(y == null ? void 0 : y.registryStatuses) && !(0, e.isString)(y == null ? void 0 : y.registryStatuses) ? !1 : (C = y.registryStatuses) === null || C === void 0 ? void 0 : C.includes(n.rj.REDEMPTION_PERIOD)
			}

			function Me(y) {
				var C;
				return !(y == null ? void 0 : y.registryStatuses) || !Array.isArray(y == null ? void 0 : y.registryStatuses) && !(0, e.isString)(y == null ? void 0 : y.registryStatuses) ? !1 : (C = y.registryStatuses) === null || C === void 0 ? void 0 : C.includes(n.rj.PENDING_DELETE)
			}

			function Fe(y) {
				return [".us"].includes(y)
			}

			function lt(y) {
				return [".us"].includes(y)
			}

			function Ce(y) {
				switch (y) {
					case ".us":
						return me();
					default:
						return []
				}
			}

			function pt(y) {
				switch (y) {
					case ".us":
						return X;
					default:
						return {}
				}
			}
			const X = {
				[n.A9.P3]: [n.Fi.C11]
			};

			function me() {
				return [{
					name: n.IP.application_purpose,
					label: n.rb.application_purpose,
					options: Object.entries(n.A9).map(([y, C]) => ({
						value: y,
						label: C
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: n.IP.nexus_category,
					label: n.rb.nexus_category,
					options: Object.entries(n.Fi).map(([y, C]) => ({
						value: y,
						label: C
					}))
				}]
			}

			function he(y, C, F) {
				return C[C.length - 1][F] === y[F]
			}

			function Ue(y) {
				return Boolean(Object.keys(y).length === 0)
			}

			function Pe(y) {
				return c()().add(y, "year").format(P)
			}

			function be({
				accountName: y
			}) {
				var C;
				const F = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((C = y.toLowerCase().match(F)) === null || C === void 0 ? void 0 : C[0]) || ""
			}

			function Ne(y) {
				return !!y.match(g.default.email)
			}

			function gt(y) {
				return y === l.W7.PENDING_UPDATE
			}

			function rt(y) {
				return y ? Object.values(l.wR).filter(C => C !== l.wR.OFFBOARDED).includes(y) : !1
			}

			function _t(y) {
				return y ? [l.wR.LOCKED, l.wR.ONBOARDED, l.wR.ONBOARDING_INITIATED, l.wR.PENDING_REGISTRY_LOCK, l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(y) : !1
			}

			function Et(y) {
				return y ? l.wR.UNLOCKED === y : !1
			}

			function st(y) {
				return y ? l.wR.LOCKED === y : !1
			}

			function kt(y) {
				return y ? l.wR.PENDING_REGISTRY_LOCK === y : !1
			}

			function We(y) {
				return y ? [l.wR.PENDING_REGISTRY_UNLOCK, l.wR.PENDING_UNLOCK_APPROVAL].includes(y) : !1
			}

			function mt(y) {
				var C;
				return !1
			}

			function Xe(y) {
				var C;
				return !1
			}

			function et(y) {
				var C;
				return !1
			}

			function tt(y) {
				var C;
				return !1
			}

			function z(y) {
				var C;
				return !1
			}

			function de(y) {
				return Object.keys(l.wR).find(C => l.wR[C].toLowerCase() === y.toLowerCase())
			}

			function _e(y) {
				var C;
				const F = (C = de(y)) === null || C === void 0 ? void 0 : C.toLowerCase();
				return F ? f.keys.protection_status[F] : f.keys.protection_status.unknown
			}

			function Te(y) {
				return ["com", "net"].includes(y)
			}

			function De(y) {
				const C = (0, s.pu)(y);
				return Te(C) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function je(y) {
				return (0, s.pu)(y) === "co" ? 5 : 10
			}

			function ot(y, C) {
				return C ? 1 : (0, s.pu)(y) === "co" ? 5 : (0, s.pu)(y) === "org" ? 1 : 10
			}

			function ct(y) {
				return (0, s.pu)(y) === "uk"
			}

			function Ct(y) {
				return (0, s.pu)(y) === "us"
			}

			function ft(y) {
				return (0, s.pu)(y) === "ai"
			}

			function Tt(y) {
				return c()(y).isValid()
			}

			function He(y) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(y)
			}

			function Ot(y) {
				return !!(y == null ? void 0 : y.id)
			}

			function Mt(y) {
				return y ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(y) : !1
			}

			function It(y) {
				return y ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(y) : !1
			}

			function Rt(y) {
				var C;
				return (y == null ? void 0 : y.lastKnownStatus) ? (C = y.lastKnownStatus) === null || C === void 0 ? void 0 : C.includes("deletionIrredeemable") : !1
			}

			function wt(y) {
				switch (y) {
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

			function Nt(y) {
				if (!y || !y.message) return n.OJ.DEFAULT;
				const {
					message: C
				} = y;
				switch (!0) {
					case C.includes("feature disabled"):
						return n.OJ.FEATURE_DISABLED;
					case C.includes("email unverified"):
						return n.OJ.EMAIL_UNVERIFIED;
					case C.includes("account blocked"):
						return n.OJ.ACCOUNT_BLOCKED;
					default:
						return n.OJ.DEFAULT
				}
			}

			function yt(y) {
				var C, F;
				return !!(((C = y.policies) === null || C === void 0 || (F = C.suspension) === null || F === void 0 ? void 0 : F.parked) && y.policies.suspension.parkingReason)
			}

			function At(y) {
				var C, F;
				return yt(y) && ((C = y.policies) === null || C === void 0 || (F = C.suspension) === null || F === void 0 ? void 0 : F.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function vt(y) {
				var C, F;
				return yt(y) && ((C = y.policies) === null || C === void 0 || (F = C.suspension) === null || F === void 0 ? void 0 : F.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function xt(y) {
				var C;
				return !((C = y.domainMove) === null || C === void 0 ? void 0 : C.ineligibilityReasons.length)
			}

			function Ft(y) {
				var C, F;
				return !!((C = y.domainMove) === null || C === void 0 || (F = C.ineligibilityReasons) === null || F === void 0 ? void 0 : F.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Pt(y) {
				var C;
				return (C = y.actionableMetadata) === null || C === void 0 ? void 0 : C.find(F => F.type === n.wg.DOMAIN_MOVE)
			}

			function Bt(y) {
				const C = Pt(y);
				return (C == null ? void 0 : C.status) === "pending" && C.accountContext === n._5.GAINING
			}

			function jt(y) {
				const C = Pt(y);
				return (C == null ? void 0 : C.status) === "pending" && C.accountContext === n._5.LOSING
			}

			function Dt(y) {
				const C = M(y.name);
				return !p.Pf.includes(C)
			}

			function Lt(y) {
				return p.QZ.includes(y)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Bc: function() {
					return p
				},
				HG: function() {
					return ye
				},
				Hv: function() {
					return Oe
				},
				JM: function() {
					return o
				},
				Pf: function() {
					return m
				},
				Py: function() {
					return g
				},
				QZ: function() {
					return u
				},
				WK: function() {
					return n
				},
				g5: function() {
					return a
				},
				gM: function() {
					return l
				},
				jk: function() {
					return te
				},
				no: function() {
					return f
				},
				uY: function() {
					return s
				},
				ui: function() {
					return c
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../flags.ts");
			const o = "Unknown",
				c = "unknown",
				l = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				g = Object.keys(l),
				s = !0,
				p = (0, r.J8)("registrar_mock_transfer_out") || !1,
				f = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				a = "cf_registrar.enabled",
				i = "@abcABC1234567890123456",
				m = [".us"],
				u = [".travel", ".us", ".ong", ".ngo"],
				d = (0, e.BC)`/${"accountId"}`,
				I = (0, e.BC)`${d}/add-site`,
				P = (0, e.BC)`${d}/registrar`,
				h = (0, e.BC)`${P}/domains`,
				v = (0, e.BC)`${P}/action-center`,
				O = (0, e.BC)`${P}/domain/${"zoneName"}`,
				_ = (0, e.BC)`${O}/configuration`,
				T = (0, e.BC)`${O}/contacts`,
				k = (0, e.BC)`${P}/pricing`,
				w = (0, e.BC)`${P}/protection`,
				A = (0, e.BC)`${P}/register`,
				L = (0, e.BC)`${A}/checkout`,
				b = (0, e.BC)`${A}/checkout/${"token"}`,
				D = (0, e.BC)`${A}/success`,
				R = (0, e.BC)`${P}/tlds`,
				Z = (0, e.BC)`${P}/transfer`,
				oe = (0, e.BC)`${P}/transfer/${"zoneName"}`,
				ce = (0, e.BC)`/registrar/accounts/verify_email`,
				le = (0, e.BC)`/registrar/domains/verify_email`,
				Q = (0, e.BC)`/sign-up/registrar`,
				K = (0, e.BC)`${P}/verify-email`,
				H = (0, e.BC)`${d}/${"zoneName"}`,
				N = (0, e.BC)`${d}/domains`,
				U = (0, e.BC)`${N}/action-center`,
				S = (0, e.BC)`${N}/${"zoneName"}`,
				x = (0, e.BC)`${S}/configuration`,
				G = (0, e.BC)`${S}/contacts`,
				ne = (0, e.BC)`${N}/pricing`,
				q = (0, e.BC)`${N}/protection`,
				ae = (0, e.BC)`${N}/register`,
				j = (0, e.BC)`${ae}/checkout`,
				M = (0, e.BC)`${ae}/checkout/${"token"}`,
				$ = (0, e.BC)`${ae}/success`,
				J = (0, e.BC)`${N}/tlds`,
				ue = (0, e.BC)`${N}/transfer`,
				se = (0, e.BC)`${N}/transfer/${"zoneName"}`,
				pe = (0, e.BC)`${N}/verify-email`,
				te = {
					addSite: I,
					domains: h,
					domainsActionCenter: v,
					domainsDomain: O,
					domainsDomainConfiguration: _,
					domainsDomainContacts: T,
					domainsPricing: k,
					domainsProtection: w,
					domainsRegister: A,
					domainsRegisterCheckout: L,
					domainsRegisterCheckoutToken: b,
					domainsRegisterSuccess: D,
					domainsTlds: R,
					domainsTransfer: Z,
					domainsTransferZone: oe,
					registrar: P,
					registrarAccountsVerifyEmail: ce,
					registrarDomainsVerifyEmail: le,
					signup: Q,
					verifyEmail: K,
					zone: H
				},
				ye = {
					LEGACY_domains: N,
					LEGACY_domainsActionCenter: U,
					LEGACY_domainsDomain: S,
					LEGACY_domainsDomainConfiguration: x,
					LEGACY_domainsDomainContacts: G,
					LEGACY_domainsPricing: ne,
					LEGACY_domainsProtection: q,
					LEGACY_domainsRegister: ae,
					LEGACY_domainsRegisterCheckout: j,
					LEGACY_domainsRegisterCheckoutToken: M,
					LEGACY_domainsRegisterSuccess: $,
					LEGACY_domainsTlds: J,
					LEGACY_domainsTransfer: ue,
					LEGACY_domainsTransferZone: se,
					LEGACY_verifyEmail: pe
				},
				Oe = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				HO: function() {
					return s
				},
				NW: function() {
					return p
				},
				ZQ: function() {
					return c
				},
				b_: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");
			const o = f => {
					const n = f && f.accountFlags && f.accountFlags.data && f.accountFlags.data.registrar && f.accountFlags.data.registrar.canary_tlds;
					return n ? n.split(",").map(a => a.trim()) : []
				},
				c = f => {
					var n, a, i;
					return ((n = f.accountFlags) === null || n === void 0 || (a = n.data) === null || a === void 0 || (i = a.registrar) === null || i === void 0 ? void 0 : i["registrar-managed"]) || !1
				},
				l = f => f.account ? f.account.email : "",
				g = f => !1,
				s = f => g(f) && (0, e.oJ)((0, e.Zu)(f)),
				p = f => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: a
					} = f.registrar.registrations;
					return n && !(a.accepted_date || a.id || a.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				J: function() {
					return a
				},
				U: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				c = t.n(o),
				l = t("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function g(i) {
				for (var m = 1; m < arguments.length; m++) {
					var u = arguments[m] != null ? Object(arguments[m]) : {},
						d = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(u).filter(function(I) {
						return Object.getOwnPropertyDescriptor(u, I).enumerable
					})), d.forEach(function(I) {
						s(i, I, u[I])
					})
				}
				return i
			}

			function s(i, m, u) {
				return m = p(m), m in i ? Object.defineProperty(i, m, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = u, i
			}

			function p(i) {
				var m = f(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function f(i, m) {
				if (typeof i != "object" || i === null) return i;
				var u = i[Symbol.toPrimitive];
				if (u !== void 0) {
					var d = u.call(i, m || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i
			}({});

			function a(i, m, u) {
				if (!(m == null ? void 0 : m.name)) return null;
				c().sendEvent(i, g({
					domain: {
						name: m.name,
						premium: (0, l.Uy)(m == null ? void 0 : m.premiumType),
						paymentExpiresAt: r()(m == null ? void 0 : m.paymentExpiresAt).format()
					},
					category: "registrar"
				}, u))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				HX: function() {
					return s
				},
				Re: function() {
					return h
				},
				Rh: function() {
					return d
				},
				hX: function() {
					return m
				},
				s_: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react/react"),
				c = t.n(o),
				l = t("../react/pages/home/members/utils.ts"),
				g = t("../react/utils/translator.tsx");
			let s = function(v) {
				return v.UNKNOWN = "unknown", v.WORKERS = "workers", v.ACCESS_APPS = "access_apps", v.ACCESS_IDP = "access_ipd", v
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

			function f(v) {
				return {
					key: "com.cloudflare.edge.worker.script." + v.id,
					name: v.name + (v.environment ? ` (${v.environment})` : ""),
					type: s.WORKERS
				}
			}

			function n(v) {
				const O = v;
				return {
					key: "com.cloudflare.edge.access.app." + O.id,
					name: O.name,
					type: s.ACCESS_APPS
				}
			}
			const a = {
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

			function i(v) {
				const O = v,
					_ = a[O.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + O.id,
					name: `${_||"Unknown Type"}${O.name?" - "+O.name:""}`,
					type: s.ACCESS_IDP
				}
			}
			const m = async (v, O, _) => O == s.WORKERS ? (await u(`/accounts/${v}/workers/scripts-search?name=${_}&perPage=10`)).body.result.map(T => ({
				id: T.id,
				name: T.service_name || T.script_name,
				environment: T.environment_name
			})).map(f) : O == s.ACCESS_APPS ? (await u(`/accounts/${v}/access/apps?name=${_}`)).body.result.map(n) : O == s.ACCESS_IDP ? (await u(`/accounts/${v}/access/identity_providers`)).body.result.map(i) : [];
			async function u(v) {
				try {
					return await (0, e.get)(v, {
						hideErrorAlert: !0
					})
				} catch (T) {
					var O, _;
					throw ((O = T.body) === null || O === void 0 ? void 0 : O.errors) ? T.body.errors[0].message : T.text ? T.text : ((_ = T.response) === null || _ === void 0 ? void 0 : _.statusText) ? T.response.statusText : "Unexpected error response"
				}
			}
			const d = async (v, O) => {
				const _ = O.split("."),
					T = _.pop(),
					k = _.join(".");
				let w;
				switch (k) {
					case "com.cloudflare.edge.worker.script":
						const A = (await u(`/accounts/${v}/workers/scripts-search/${T}`)).body.result;
						return f({
							id: A.id,
							name: A.service_name || A.script_name,
							environment: A.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return w = await u(`/accounts/${v}/access/identity_providers/${T}`), i(w.body.result);
					case "com.cloudflare.edge.access.app":
						return w = await u(`/accounts/${v}/access/apps/${T}`), n(w.body.result)
				}
			}, I = {
				loading: !0,
				isDisabled: !0
			}, P = () => "production";

			function h(v) {
				const O = (0, l.vq)(v),
					[_, T] = (0, o.useState)(!0),
					[k, w] = (0, o.useState)(p.filter(A => O.find(L => L.meta.scopes === A.scopeKeyPrefix)).map(A => {
						const L = A.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							b = O.filter(D => D.meta.scopes === A.scopeKeyPrefix).find(D => !D.meta.visibility || D.meta.visibility !== "beta");
						return {
							value: A.value,
							label: (0, g.ZP)(A.label_i18n),
							state: L ? I : {
								loading: !1,
								isDisabled: !1
							},
							beta: !b
						}
					}));
				return (0, o.useEffect)(() => {
					(async () => {
						try {
							await m(v, s.ACCESS_APPS, ""), I.isDisabled = !1
						} catch (A) {
							A.startsWith("access.api.error.not_enabled") ? I.disableInfo = (0, g.ZP)("policy.granular_resources.type.access.not_enabled") : I.error = A
						}
						I.loading = !1, w([...k])
					})()
				}, []), (0, o.useEffect)(() => {
					const A = k.find(L => L.state.loading);
					T(!!A)
				}, [k]), {
					types: k,
					isLoading: _
				}
			}
		},
		"../react/pages/home/members/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Ey: function() {
					return f
				},
				F4: function() {
					return I
				},
				Go: function() {
					return m
				},
				Lc: function() {
					return T
				},
				Np: function() {
					return a
				},
				Rl: function() {
					return i
				},
				Sb: function() {
					return u
				},
				Sw: function() {
					return _
				},
				Sz: function() {
					return O
				},
				Ti: function() {
					return k
				},
				Uw: function() {
					return h
				},
				Zl: function() {
					return P
				},
				jk: function() {
					return v
				},
				r6: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}`,
				o = (0, e.BC)`${r}/members`,
				c = (0, e.BC)`${o}/invite`,
				l = (0, e.BC)`${o}/invite/${"memberId"}`,
				g = (0, e.BC)`${o}/add-policy/${"memberId"}`,
				s = (0, e.BC)`${o}/user-groups`,
				p = (0, e.BC)`${o}/user-groups/${"userGroupId"}`,
				f = "com.cloudflare.api.account",
				a = f + "." + "zone",
				i = a + ".",
				m = 100,
				u = 200,
				d = 5,
				I = 300,
				P = "INVITE_TOAST",
				h = "00000000000000000000000000000000",
				v = {
					account: r,
					members: o,
					groups: s,
					group: p,
					inviteMembers: c,
					editMember: l,
					addPolicy: g
				},
				O = {
					allow: "allow",
					deny: "deny"
				},
				_ = {
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
				k = {
					accountId: "",
					effect: O.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Bz: function() {
					return p
				},
				SH: function() {
					return f
				},
				g5: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var a = 1; a < arguments.length; a++) {
					var i = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), m.forEach(function(u) {
						c(n, u, i[u])
					})
				}
				return n
			}

			function c(n, a, i) {
				return a = l(a), a in n ? Object.defineProperty(n, a, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = i, n
			}

			function l(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var m = i.call(n, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.CLICK_USERGROUP_BETA_BUTTON = "click usergroup beta button", n.MEMBERS_TAB_NAVIGATE = "nagivate members tab", n
			}({});
			const p = ({
					name: n,
					additionalData: a = {}
				}) => {
					r().sendEvent(n, o({}, a || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/home/members/utils.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return v
				},
				Co: function() {
					return P
				},
				JP: function() {
					return h
				},
				Ld: function() {
					return i
				},
				YW: function() {
					return p
				},
				_k: function() {
					return m
				},
				c$: function() {
					return f
				},
				rC: function() {
					return k
				},
				vq: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				r = t("../react/pages/home/members/actions/advancedAuthzActions.ts"),
				o = t("../react/pages/home/members/constants.ts");

			function c(w) {
				for (var A = 1; A < arguments.length; A++) {
					var L = arguments[A] != null ? Object(arguments[A]) : {},
						b = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(L).filter(function(D) {
						return Object.getOwnPropertyDescriptor(L, D).enumerable
					})), b.forEach(function(D) {
						l(w, D, L[D])
					})
				}
				return w
			}

			function l(w, A, L) {
				return A = g(A), A in w ? Object.defineProperty(w, A, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : w[A] = L, w
			}

			function g(w) {
				var A = s(w, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function s(w, A) {
				if (typeof w != "object" || w === null) return w;
				var L = w[Symbol.toPrimitive];
				if (L !== void 0) {
					var b = L.call(w, A || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(w)
			}
			const p = () => c({}, o.Ti),
				f = () => c({}, o.Lc, {
					scopes: [p()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = w => w.map(A => ({
					scope: {
						key: A,
						objects: [{
							key: "*"
						}]
					}
				})),
				a = (w, A, L) => {
					var b;
					let D = [],
						R = [];
					const Z = [],
						oe = [];
					w.scopes.forEach(Q => {
						if (Q.mode === o.Sw.all) L ? D.push({
							id: L
						}) : D.push({
							scope: {
								key: `com.cloudflare.api.account.${A}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (Q.mode === o.Sw.domain_group) {
							const H = {
								id: Q.resourceGroupId
							};
							Q.effect === o.Sz.allow ? D.push(H) : R.push(H)
						} else if (Q.mode === o.Sw.zone) {
							const H = `${o.Rl}${Q.zoneId}`;
							Q.effect === o.Sz.allow ? Z.push(H) : oe.push(H)
						} else if (Q.mode === o.Sw.granular && Q.granularResourceKey) {
							var K;
							const H = Q.granularProduct,
								U = `${(K=r.s_.find(S=>S.value===H))===null||K===void 0?void 0:K.scopeSubsetOfPrefix}.${A}`;
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
					}), Z.length && (D = D.concat(n(Z))), oe.length && (R = R.concat(n(oe)));
					const ce = (b = w.permission_groups) === null || b === void 0 ? void 0 : b.map(Q => ({
							id: Q
						})),
						le = [];
					return le.push({
						access: o.Sz.allow,
						permission_groups: ce,
						resource_groups: D
					}), R.length && le.push({
						access: o.Sz.deny,
						permission_groups: ce,
						resource_groups: R
					}), le
				},
				i = w => w.map(A => {
					var L;
					return {
						access: A.access,
						permission_groups: A.permission_groups.map(b => ({
							id: b.id
						})),
						resource_groups: (L = A.resource_groups) === null || L === void 0 ? void 0 : L.map(b => ({
							scope: {
								key: b.scope.key,
								objects: b.scope.objects
							},
							id: b.id
						}))
					}
				}),
				m = (w, A, L, b) => {
					const D = w.auto_accept;
					let R = [];
					return R = R.concat(a(w, A, L)), b && (R = R.concat(i(b))), {
						auto_accept: D,
						status: D ? "accepted" : "pending",
						policies: R
					}
				},
				u = w => {
					const A = w.split(".");
					return A[A.length - 1]
				},
				d = w => {
					var A, L;
					const b = w == null ? void 0 : w.access;
					let D = [],
						R = w == null || (A = w.resource_groups) === null || A === void 0 ? void 0 : A.map(Z => {
							var oe;
							const ce = I(Z);
							if ((Z == null || (oe = Z.meta) === null || oe === void 0 ? void 0 : oe.editable) === "false") return {
								effect: b,
								mode: o.Sw.all,
								accountId: u(Z.id)
							};
							if (ce) {
								var le;
								return {
									effect: b,
									mode: o.Sw.granular,
									granularProduct: ce.value,
									granularResourceKey: Z == null || (le = Z.scope) === null || le === void 0 ? void 0 : le.key
								}
							} else if (!Z.name) Z.scope.key.startsWith(o.Rl) ? D.push({
								key: Z.scope.key
							}) : D = D.concat(Z.scope.objects);
							else return {
								effect: b,
								mode: o.Sw.domain_group,
								resourceGroupId: u(Z.id)
							}
						}).filter(Z => Z);
					if ((L = D) === null || L === void 0 ? void 0 : L.length) {
						let Z = D.map(oe => {
							const ce = u(oe.key);
							return {
								effect: b,
								mode: o.Sw.zone,
								zoneId: ce
							}
						});
						R = R.length ? Z.concat(R) : Z
					}
					return R
				},
				I = w => {
					var A, L, b, D;
					const R = w == null || (A = w.scope) === null || A === void 0 ? void 0 : A.key.split(".").slice(0, -1).join("."),
						Z = w == null || (L = w.scope) === null || L === void 0 || (b = L.subset_of) === null || b === void 0 || (D = b[0]) === null || D === void 0 ? void 0 : D.key.split(".").slice(0, -1).join(".");
					return r.s_.find(oe => oe.scopeKeyPrefix === R && oe.scopeSubsetOfPrefix === Z)
				},
				P = w => {
					if (!(w == null ? void 0 : w.length)) return [];
					const A = [];
					return w.forEach(L => {
						var b;
						(b = L.resource_groups) === null || b === void 0 || b.forEach(D => {
							var R, Z;
							((R = D.scope) === null || R === void 0 || (Z = R.key) === null || Z === void 0 ? void 0 : Z.startsWith(o.Rl)) && A.push(u(D.scope.key))
						})
					}), A
				},
				h = w => {
					if (!(w == null ? void 0 : w.length)) return [];
					const A = [];
					return w.forEach(L => {
						var b;
						(b = L.resource_groups) === null || b === void 0 || b.forEach(D => {
							var R, Z;
							if (!((R = D.scope) === null || R === void 0 || (Z = R.key) === null || Z === void 0 ? void 0 : Z.startsWith(o.Rl))) {
								var oe;
								const le = (oe = D.scope) === null || oe === void 0 ? void 0 : oe.objects;
								for (let Q = 0; Q < (le == null ? void 0 : le.length) && Q < o.r6; Q++) {
									var ce;
									((ce = le[Q].key) === null || ce === void 0 ? void 0 : ce.startsWith(o.Rl)) && A.push(u(le[Q].key))
								}
							}
						})
					}), A
				},
				v = w => {
					var A;
					if (!(w == null ? void 0 : w.length)) return null;
					const L = (A = w[0]) === null || A === void 0 ? void 0 : A.permission_groups.map(Z => Z.id);
					let b, D;
					w == null || w.forEach(Z => {
						Z.access === o.Sz.allow && (b = Z), Z.access === o.Sz.deny && (D = Z)
					});
					let R = [];
					return b && (R = d(b)), D && (R = R.concat(d(D))), {
						permission_groups: L,
						scopes: R
					}
				},
				O = "permission-groups-",
				_ = new Map,
				T = w => {
					if (!w) return [];
					const A = _.get(w);
					if (A) return A;
					const L = e.E.get(`${O}${w}`);
					return _.set(w, L), L
				},
				k = (w, A) => {
					const L = [];
					for (let b = 0; b < sessionStorage.length; b++) {
						const D = sessionStorage.key(b);
						(D == null ? void 0 : D.startsWith(O)) && L.push(D)
					}
					return L.length >= 5 && e.E.remove(L[0]), e.E.set(`${O}${w}`, A)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				F: function() {
					return e
				}
			});
			let e = function(r) {
				return r.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", r.GET_TCP_PROTECTION_PREFIXES = "view tcp protection prefixes list", r.CREATE_TCP_PROTECTION_PREFIXES = "bulk create tcp protection prefixes", r.CREATE_TCP_PROTECTION_PREFIX = "create tcp protection prefix", r.UPDATE_TCP_PROTECTION_PREFIX = "update tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIX = "delete tcp protection prefix", r.DELETE_TCP_PROTECTION_PREFIXES = "bulk delete tcp protection prefixes", r.GET_TCP_PROTECTION_ALLOWLIST = "view prefixes in tcp protection allowlist", r.CREATE_TCP_PROTECTION_ALLOWLIST = "add prefix to tcp protection allowlist", r.UPDATE_TCP_PROTECTION_ALLOWLIST = "update tcp protection allowlist", r.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST = "delete prefix from tcp protection allowlist", r.DELETE_TCP_PROTECTION_ALLOWLIST = "delete all prefixes from tcp protection allowlist", r.GET_SYN_PROTECTION_RULE = "view syn protection rules list", r.GET_SYN_PROTECTION_RULES = "view syn protection rule", r.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", r.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", r.DELETE_SYN_PROTECTION_RULE = "delete syn protection rule", r.GET_SYN_PROTECTION_FILTERS = "view syn protection filter list", r.GET_SYN_PROTECTION_FILTER = "view syn protection filter", r.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", r.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", r.DELETE_SYN_PROTECTION_FILTER = "delete syn protection filter", r.GET_TCP_FLOW_PROTECTION_RULES = "view tcp flow protection rules list", r.GET_TCP_FLOW_PROTECTION_RULE = "view tcp flow protection rule", r.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", r.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", r.DELETE_TCP_FLOW_PROTECTION_RULE = "delete tcp flow protection rule", r.GET_TCP_FLOW_PROTECTION_FILTERS = "view tcp flow protection filters list", r.GET_TCP_FLOW_PROTECTION_FILTER = "view tcp flow protection filter", r.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", r.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", r.DELETE_TCP_FLOW_PROTECTION_FILTER = "delete tcp flow protection filter", r.GET_DNS_PROTECTION_RULES = "view dns protection rules list", r.GET_DNS_PROTECTION_RULE = "view dns protection rule", r.CREATE_DNS_PROTECTION_RULE = "create dns protection rule", r.UPDATE_DNS_PROTECTION_RULE = "update dns protection rule", r.DELETE_DNS_PROTECTION_RULE = "delete dns protection rule", r
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return s
				},
				L9: function() {
					return n
				},
				N3: function() {
					return f
				},
				zE: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(a) {
				for (var i = 1; i < arguments.length; i++) {
					var m = arguments[i] != null ? Object(arguments[i]) : {},
						u = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(m).filter(function(d) {
						return Object.getOwnPropertyDescriptor(m, d).enumerable
					})), u.forEach(function(d) {
						c(a, d, m[d])
					})
				}
				return a
			}

			function c(a, i, m) {
				return i = l(i), i in a ? Object.defineProperty(a, i, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[i] = m, a
			}

			function l(a) {
				var i = g(a, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(a, i) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var u = m.call(a, i || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(a)
			}
			let s = function(a) {
					return a.PURCHASE_WORKERS_PAID = "navigate to workers plan page", a.LIST_CONFIGS = "list hyperdrive configs", a.SEARCH_CONFIGS = "search hyperdrive configs", a.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", a.VIEW_CONFIG_DETAILS = "view hyperdrive config details", a.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", a.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", a.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", a.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", a.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", a.CLICK_QUICK_LINK = "click hyperdrive quick link", a.CLICK_DISCORD = "click hyperdrive discord", a.CLICK_COMMUNITY = "click hyperdrive community", a
				}({}),
				p = function(a) {
					return a[a["connection string"] = 0] = "connection string", a[a.manual = 1] = "manual", a
				}({}),
				f = function(a) {
					return a[a.success = 0] = "success", a[a.failure = 1] = "failure", a
				}({});
			const n = (a, i = {}) => {
				r().sendEvent(a, o({}, i, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/images/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				KJ: function() {
					return k
				},
				_m: function() {
					return P
				},
				imagesEndpoints: function() {
					return ye
				},
				vQ: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");

			function r(Oe) {
				for (var Ie = 1; Ie < arguments.length; Ie++) {
					var Le = arguments[Ie] != null ? Object(arguments[Ie]) : {},
						Se = Object.keys(Le);
					typeof Object.getOwnPropertySymbols == "function" && Se.push.apply(Se, Object.getOwnPropertySymbols(Le).filter(function(ke) {
						return Object.getOwnPropertyDescriptor(Le, ke).enumerable
					})), Se.forEach(function(ke) {
						o(Oe, ke, Le[ke])
					})
				}
				return Oe
			}

			function o(Oe, Ie, Le) {
				return Ie = c(Ie), Ie in Oe ? Object.defineProperty(Oe, Ie, {
					value: Le,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Oe[Ie] = Le, Oe
			}

			function c(Oe) {
				var Ie = l(Oe, "string");
				return typeof Ie == "symbol" ? Ie : String(Ie)
			}

			function l(Oe, Ie) {
				if (typeof Oe != "object" || Oe === null) return Oe;
				var Le = Oe[Symbol.toPrimitive];
				if (Le !== void 0) {
					var Se = Le.call(Oe, Ie || "default");
					if (typeof Se != "object") return Se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (Ie === "string" ? String : Number)(Oe)
			}
			const g = (0, e.BC)`/${"accountId"}/images`,
				s = (0, e.BC)`${g}/images`,
				p = (0, e.BC)`${g}/variants`,
				f = (0, e.BC)`${g}/keys`,
				n = (0, e.BC)`${g}/bundle-checkout-success`,
				a = (0, e.BC)`${s}/${"imageId"}`,
				i = (0, e.BC)`${s}/detail`,
				m = (0, e.BC)`${s}/edit`,
				u = (0, e.BC)`${p}/create`,
				d = (0, e.BC)`${p}/edit/${"variantId"}`,
				I = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				P = (0, e.BC)`${g}/sourcing-kit`,
				h = (0, e.BC)`${g}/delivery-zones`,
				v = (0, e.BC)`${h}/${"zoneId"}/settings`,
				O = (0, e.BC)`${g}/plans`,
				_ = (0, e.BC)`${g}/manage-plan`,
				T = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				k = {
					root: g,
					images: s,
					variants: p,
					keys: f,
					legacyImageDetailPage: a,
					imageDetailPage: i,
					imageEditPage: m,
					bundleCheckoutSuccess: n,
					variantCreatePage: u,
					variantEditPage: d,
					sourcingKit: P,
					subscriptions: I,
					deliveryZones: h,
					deliveryZoneSettings: v,
					plansPage: O,
					managePlan: _
				},
				w = r({}, k, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: T
				}),
				A = (0, e.BC)`/accounts/${"accountId"}`,
				L = (0, e.BC)`${A}/images/v2`,
				b = (0, e.BC)`/zones/${"zoneId"}`,
				D = (0, e.BC)`${L}/sourcingkit`,
				R = (0, e.BC)`${D}/migrations`,
				Z = (0, e.BC)`${D}/migrations/${"migrationId"}`,
				oe = (0, e.BC)`${D}/migrations/${"migrationId"}/logs`,
				ce = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/start`,
				le = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle/abort`,
				Q = (0, e.BC)`${D}/migrations/${"migrationId"}/lifecycle`,
				K = (0, e.BC)`${D}/sources`,
				H = (0, e.BC)`${D}/sources/${"sourceId"}`,
				N = (0, e.BC)`${D}/sources/${"sourceId"}/connectivity`,
				U = (0, e.BC)`${D}/sources/connectivity_precheck`,
				S = (0, e.BC)`/zones?account.id=${"accountId"}`,
				x = {
					migrationList: R,
					migration: Z,
					migrationLogs: oe,
					sourceList: K,
					migrationStart: ce,
					migrationAbort: le,
					migrationProgress: Q,
					source: H,
					sourceConnectivityCheck: N,
					sourceConnectivityPreCheck: U
				},
				G = (0, e.BC)`/billing/upgrade-subscription`,
				ne = (0, e.BC)`${A}/settings/transformations`,
				q = (0, e.BC)`${b}/settings/transformations`,
				ae = (0, e.BC)`${b}/settings/transformations_allowed_origins`,
				j = (0, e.BC)`${b}/settings/transformations_c2pa`,
				M = (0, e.BC)`${A}/settings/ut-billing`,
				$ = (0, e.BC)`${b}`,
				J = (0, e.BC)`${b}/entitlements`,
				ue = (0, e.BC)`${b}/settings`,
				se = (0, e.BC)`${b}/flags`,
				pe = (0, e.BC)`${b}/subscription`,
				ye = {
					sourcingKitEndpoints: x,
					deliveryZonesEndpoints: {
						transformationsConfigList: ne,
						transformationsZoneConfig: q,
						allowedOriginsZoneConfig: ae,
						preserveContentCredentialsZoneConfig: j,
						upgradeSubscription: G,
						utBillingConfig: M
					},
					zones: {
						zones: S,
						zoneDetail: $,
						zoneSettings: ue,
						zoneEntitlements: J,
						zoneFlags: se,
						zoneSubscription: pe
					}
				}
		},
		"../react/pages/images/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return c
				},
				GH: function() {
					return i
				},
				JZ: function() {
					return u
				},
				aR: function() {
					return n
				},
				db: function() {
					return g
				},
				ib: function() {
					return d
				},
				lW: function() {
					return P
				},
				pT: function() {
					return a
				},
				po: function() {
					return m
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts");
			const c = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				g = "images",
				s = "unified_images_enabled",
				p = "c2pa_polish",
				f = "CloudflareImages",
				n = h => !!(0, r.BF)(h, "images.transformations_enabled"),
				a = h => Boolean((0, r.BF)(h, "images.enabled")),
				i = h => {
					const v = (0, r.BF)(h, "images.storage");
					return typeof v == "number" && v > 0
				},
				m = h => Boolean((0, r.BF)(h, "contract.customer_enabled")),
				u = h => Boolean((0, e.oI)(h, g, c)),
				d = h => Boolean((0, o.Le)(h, f, c)),
				I = h => Boolean(getAccountFlipperFlag(h, f, s)),
				P = h => Boolean((0, o.Le)(h, f, p))
		},
		"../react/pages/internal-dns/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				jx: function() {
					return e
				},
				xk: function() {
					return l
				},
				xo: function() {
					return g
				},
				yt: function() {
					return c
				},
				z7: function() {
					return o
				}
			});
			const e = "internal",
				r = {
					ADD: "add",
					IMPORT: "import"
				},
				o = {
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
				c = "bulk_internal_zones",
				l = "internal-dns",
				g = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/magic/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				GF: function() {
					return m
				},
				H3: function() {
					return s
				},
				H8: function() {
					return l
				},
				J: function() {
					return d
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return P
				},
				Up: function() {
					return c
				},
				W8: function() {
					return f
				},
				Ws: function() {
					return h
				},
				Xg: function() {
					return a
				},
				Y_: function() {
					return i
				},
				_j: function() {
					return o
				},
				a4: function() {
					return u
				},
				jS: function() {
					return I
				},
				rF: function() {
					return g
				},
				rG: function() {
					return n
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = t("../react/utils/translator.tsx");
			const o = {
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
				c = () => [{
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
				l = v => [{
					value: "low",
					label: v("setting.low")
				}, {
					value: "mid",
					label: v("setting.medium")
				}, {
					value: "high",
					label: v("setting.high")
				}],
				g = v => [{
					value: "request",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.target.request")
				}, {
					value: "reply",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.target.reply")
				}],
				s = v => [{
					value: "unidirectional",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.direction.unidirectional")
				}, {
					value: "bidirectional",
					label: v("account.magic_transit.configuration.tunnels.table.health_check.direction.bidirectional")
				}],
				p = "magic-transit",
				f = "magic-wan",
				n = "gre_tunnel",
				a = "ipsec_tunnel",
				i = "interconnect",
				m = 64,
				u = 1476,
				d = "mid",
				I = "reply",
				P = v => [{
					value: void 0,
					label: v("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre",
					label: v("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "mpls",
					label: v("account.magic_transit.configuration.interconnects.mpls_tunnels")
				}],
				h = v => [{
					value: "all",
					label: v("account.magic_transit.configuration.tunnels.table.filters.all.default")
				}, {
					value: "gre_tunnel",
					label: v("account.magic_transit.configuration.gre_tunnels")
				}, {
					value: "ipsec_tunnel",
					label: v("account.magic_transit.configuration.ipsec_tunnels")
				}]
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				_u: function() {
					return r
				},
				bK: function() {
					return e
				},
				lC: function() {
					return o
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
				o = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				VZ: function() {
					return c
				},
				lC: function() {
					return o
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
				o = "user journey",
				c = {
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
		"../react/pages/magic/packet-captures/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				W_: function() {
					return r
				},
				X: function() {
					return e
				},
				lC: function() {
					return o
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
				o = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				gb: function() {
					return n
				},
				iP: function() {
					return w
				},
				xL: function() {
					return h
				},
				rD: function() {
					return L
				},
				oT: function() {
					return u
				},
				i2: function() {
					return b
				},
				x1: function() {
					return g
				},
				lW: function() {
					return p
				},
				UA: function() {
					return T
				},
				K5: function() {
					return i
				},
				Ii: function() {
					return O
				},
				PJ: function() {
					return A
				},
				bK: function() {
					return I
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				c = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				l = t("../node_modules/@cloudflare/elements/es/index.js");
			const g = () => r().createElement(s, null, r().createElement("svg", {
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
				s = (0, o.createComponent)(({
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
				p = () => r().createElement(f, null, r().createElement("svg", {
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
				f = (0, o.createComponent)(({
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
				n = () => r().createElement(a, null, r().createElement(l.Ei, {
					alt: "airplane",
					src: c,
					width: "85%"
				})),
				a = (0, o.createComponent)(({
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
				i = () => r().createElement(m, null, r().createElement("svg", {
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
				m = (0, o.createComponent)(({
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
				u = () => r().createElement(d, null, r().createElement("svg", {
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
				d = (0, o.createComponent)(({
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
				P = (0, o.createComponent)(({
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
				h = () => r().createElement(v, null, r().createElement("svg", {
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
				v = (0, o.createComponent)(({
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
				O = () => r().createElement(_, null, r().createElement("svg", {
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
				_ = (0, o.createComponent)(({
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
				T = () => r().createElement(k, null, r().createElement("svg", {
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
				k = (0, o.createComponent)(({
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
				w = () => r().createElement("svg", {
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
				A = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				A2: function() {
					return s
				},
				He: function() {
					return l
				},
				N$: function() {
					return g
				},
				Qq: function() {
					return o
				},
				ST: function() {
					return c
				},
				wM: function() {
					return r
				}
			});
			var e = t("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const r = {
					PAGE: "apple-login"
				},
				o = "login-apple-jwt",
				c = "cf-test",
				l = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				g = p => [{
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
		"../react/pages/page-rules/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				_: function() {
					return o
				},
				c: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let o = function(l) {
				return l.TEMPLATE_SELECTED = "template selected", l.TEMPLATE_PRODUCT_SELECTED = "template product selected", l.TEMPLATE_SAVE_DRAFT = "template save draft", l.TEMPLATE_CANCEL = "template cancel", l.TEMPLATE_DEPLOY = "template deploy", l
			}({});
			const c = (l, g) => r().sendEvent(l, {
				template_name: g
			})
		},
		"../react/pages/pages/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				A: function() {
					return I
				},
				C1: function() {
					return f
				},
				GF: function() {
					return L
				},
				HD: function() {
					return v
				},
				IK: function() {
					return l
				},
				L7: function() {
					return o
				},
				Li: function() {
					return d
				},
				Ni: function() {
					return k
				},
				OG: function() {
					return K
				},
				QF: function() {
					return le
				},
				QV: function() {
					return T
				},
				Sx: function() {
					return O
				},
				Ub: function() {
					return ce
				},
				X3: function() {
					return a
				},
				bA: function() {
					return D
				},
				eO: function() {
					return i
				},
				fH: function() {
					return u
				},
				fQ: function() {
					return P
				},
				fR: function() {
					return e
				},
				ff: function() {
					return b
				},
				iS: function() {
					return h
				},
				nY: function() {
					return _
				},
				w3: function() {
					return c
				},
				wJ: function() {
					return p
				},
				wp: function() {
					return m
				},
				yu: function() {
					return n
				},
				zF: function() {
					return A
				},
				zG: function() {
					return w
				}
			});
			const e = "api.pages.cloudflare.com",
				r = "cloudflare-workers-and-pages",
				o = {
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
				c = "Allow Members - Cloudflare Pages",
				l = 58,
				g = {
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
				f = 100,
				n = 350,
				a = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				m = 10,
				u = "_headers",
				d = "_redirects",
				I = "_routes.json",
				P = "_worker.js",
				h = "do-a-barrel-roll",
				v = [u, d, I, P],
				O = 1024 * 1024 * 25,
				_ = 1e3,
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
				k = 1e5,
				w = 75e3,
				A = 2e5,
				L = 15e4,
				b = 3e3,
				D = 2250,
				R = "workers",
				Z = "cloudflare_pages_build_caching",
				oe = 2;
			let ce = function(H) {
				return H[H.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", H[H.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", H[H.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", H[H.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", H[H.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", H[H.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", H
			}({});
			const le = 1,
				Q = 2,
				K = 2
		},
		"../react/pages/pages/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return o
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
				o = {
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
				c = g => `${g.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				KO: function() {
					return s
				},
				L9: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var a = 1; a < arguments.length; a++) {
					var i = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), m.forEach(function(u) {
						c(n, u, i[u])
					})
				}
				return n
			}

			function c(n, a, i) {
				return a = l(a), a in n ? Object.defineProperty(n, a, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = i, n
			}

			function l(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var m = i.call(n, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
			}
			let s = function(n) {
					return n.LIST_PIPELINES = "list pipelines", n.CREATE_PIPELINE = "create pipeline", n.VIEW_PIPELINE = "view pipeline details", n.DELETE_PIPELINE = "delete pipeline", n.CLICK_PIPELINE_DOCUMENTATION = "click pipeline documentation", n.CLICK_GET_STARTED_GUIDE = "click pipeline get started guide", n.CLICK_QUICK_LINK = "click pipeline quick link", n
				}({}),
				p = function(n) {
					return n[n.success = 0] = "success", n[n.failure = 1] = "failure", n
				}({});
			const f = (n, a = {}) => {
				r().sendEvent(n, o({}, a, {
					category: "Pipelines"
				}))
			}
		},
		"../react/pages/profile/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				QV: function() {
					return c
				},
				Xn: function() {
					return r
				},
				iH: function() {
					return e
				},
				xq: function() {
					return o
				}
			});
			const e = "iam-authentication",
				r = "login",
				o = "profile",
				c = {
					[r]: {
						clickTryOther2FAMethodOrBackupCode: "click try another 2fa method or backup code",
						clickTryRecovery: "click try recovery",
						clickLoginFromMobileApp2fa: "click login on mobile-app/backup code 2fa"
					},
					[o]: {
						clickRegenerateBackupCodes: "click regenerate backup codes"
					}
				}
		},
		"../react/pages/r2/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return o
				},
				Jg: function() {
					return g
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
				o = {
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
				c = s => {
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
					const f = c(p);
					return `https://${s}.${f}`
				},
				g = (s, p, f) => `${l(s,p)}/${f}`
		},
		"../react/pages/secrets-store/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Hf: function() {
					return k
				},
				JJ: function() {
					return g
				},
				Js: function() {
					return c
				},
				LN: function() {
					return d
				},
				Nm: function() {
					return i
				},
				Oh: function() {
					return P
				},
				Q2: function() {
					return A
				},
				QF: function() {
					return I
				},
				RR: function() {
					return v
				},
				T_: function() {
					return w
				},
				Xm: function() {
					return s
				},
				Zl: function() {
					return L
				},
				dv: function() {
					return l
				},
				fp: function() {
					return a
				},
				jx: function() {
					return T
				},
				nQ: function() {
					return m
				},
				px: function() {
					return h
				},
				tP: function() {
					return o
				},
				vh: function() {
					return u
				},
				wB: function() {
					return D
				},
				z3: function() {
					return b
				},
				zt: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js"),
				r = t("../../../../node_modules/yup/es/index.js");
			const o = "secrets-store-account-level",
				c = "https://developers.cloudflare.com/secrets-store/",
				l = "https://developers.cloudflare.com/secrets-store/manage-secrets/",
				g = 1,
				s = 10,
				p = 100;
			let f = function(R) {
					return R.NAME = "name", R
				}({}),
				n = function(R) {
					return R.NAME = "name", R
				}({});
			const a = {
				initialPaginationState: {
					page: g,
					perPage: s
				},
				initialSortState: {
					name: f.NAME,
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
			let i = function(R) {
					return R.NAME = "name", R.COMMENT = "comment", R.TAGS = "tags", R.SERVICES = "services", R.STATUS = "status", R
				}({}),
				m = function(R) {
					return R.PENDING = "pending", R.ACTIVE = "active", R.DELETED = "deleted", R
				}({}),
				u = function(R) {
					return R.LIST_SECRETS_STORES = "listSecretsStores", R.LIST_SECRETS = "listSecrets", R.GET_SECRET = "getSecret", R.SECRETS_QUOTA = "secretsQuota", R
				}({}),
				d = function(R) {
					return R.CREATE = "create", R.EDIT = "edit", R.DUPLICATE = "duplicate", R
				}({}),
				I = function(R) {
					return R.WORKERS = "workers", R
				}({});
			const P = "default_secrets_store";
			let h = function(R) {
				return R.CREATE = "create", R.EDIT = "edit", R.DUPLICATE = "duplicate", R.VIEW = "view", R
			}({});
			const v = "delete_operation",
				O = /^[a-zA-Z0-9_-]+$/,
				_ = (R, Z, oe, ce, le) => r.Ry().shape({
					name: r.Z_().required(R("secrets_store.form.create.errors.name.required")).matches(O, R("secrets_store.form.create.errors.name.invalid_characters")).max(255, R("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", R("secrets_store.form.create.errors.value.required"), Q => Z || le ? !!Q : !0).max(1024, R("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, R("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(I), R("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				T = (R, Z, oe, ce, le) => r.Ry().shape({
					secrets: r.IX().of(_(R, Z, oe, ce, le))
				}),
				k = {
					name: "",
					value: "",
					scopes: I.WORKERS,
					comment: ""
				},
				w = "secrets-store.store.secret";
			let A = function(R) {
				return R.DUPLICATE = "duplicate", R.DEPLOY = "deploy", R
			}({});
			const L = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let b = function(R) {
					return R.CREATE_SECRET = "create secrets store secret", R.EDIT_SECRET = "edit secrets store secret", R.DUPLICATE_SECRET = "duplicate secrets store secret", R.DELETE_SECRET = "delete secrets store secret", R.BIND_SECRET = "open secrets store binding drawer", R
				}({}),
				D = function(R) {
					return R.SECRETS_STORE = "secrets store main", R.WORKERS_BINDING = "workers binding drawer", R
				}({})
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Gk: function() {
					return i
				},
				LA: function() {
					return f
				},
				Wk: function() {
					return a
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

			function o(m) {
				for (var u = 1; u < arguments.length; u++) {
					var d = arguments[u] != null ? Object(arguments[u]) : {},
						I = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(d).filter(function(P) {
						return Object.getOwnPropertyDescriptor(d, P).enumerable
					})), I.forEach(function(P) {
						c(m, P, d[P])
					})
				}
				return m
			}

			function c(m, u, d) {
				return u = l(u), u in m ? Object.defineProperty(m, u, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[u] = d, m
			}

			function l(m) {
				var u = g(m, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function g(m, u) {
				if (typeof m != "object" || m === null) return m;
				var d = m[Symbol.toPrimitive];
				if (d !== void 0) {
					var I = d.call(m, u || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(m)
			}
			const s = "blocked-content-table-tooltip",
				p = {
					active: "red",
					in_review: "gray",
					pending: "orange",
					canceled: "gray"
				},
				f = ["phishing_interstitial", "malware_interstitial", "legal_block"],
				n = {
					[e.$E.Active]: [e.M3.Active, e.M3.InReview],
					[e.$E.Pending]: [e.M3.Pending, e.M3.Canceled]
				},
				a = {
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
					filters: Object.values(e.GH).reduce((m, u) => o({}, m, {
						[u]: u
					}), {})
				};
			let i = function(m) {
				return m.COPY_URL = "copy blocked content url", m.REQUEST_REVIEW = "request blocked content review", m.ADD_FILTER = "Add filter", m.REMOVE_FILTER = "Remove filter", m
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return e
				},
				GH: function() {
					return o
				},
				M3: function() {
					return r
				},
				fL: function() {
					return c
				}
			});
			let e = function(g) {
					return g.Pending = "pending", g.Active = "active", g
				}({}),
				r = function(g) {
					return g.Active = "active", g.InReview = "in_review", g.Pending = "pending", g.Canceled = "canceled", g
				}({}),
				o = function(g) {
					return g.Domain = "domain", g.Status = "status", g.BlockType = "blockType", g
				}({}),
				c = function(g) {
					return g.EnforcementDate = "enforcementDate", g.BlockType = "blockType", g.Hostname = "hostname", g.Status = "status", g
				}({}),
				l = function(g) {
					return g.Removed = "removed", g.Misclassified = "misclassified", g
				}({})
		},
		"../react/pages/security-center/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Ev: function() {
					return o
				},
				RY: function() {
					return e
				},
				v9: function() {
					return r
				}
			});
			let e = function(c) {
				return c.LOAD_SCAN_INFO = "load url scan information", c.INITIATE_URL_SCAN = "initiate url scan", c
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
			let o = function(c) {
				return c.LOAD_THREAT_EVENTS = "load threat events", c.THREAT_EVENT_MORE_DETAILS_CLICK = "click on threat event more details", c.THREAT_EVENTS_FILTERS = "threat events filters applied", c.ABUSE_REPORT_BUTTON_CLICK = "clicked abuse report button", c.ABUSE_REPORT_SUBMIT_CLICK = "clicked submit abuse report button", c.ABUSE_REPORT_SUBMIT_FAILED = "abuse report submission failed", c.ABUSE_REPORT_SUBMIT_SUCCESS = "abuse report submitted successfully", c
			}({})
		},
		"../react/pages/security/analytics/resources/labels.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AU: function() {
					return o
				},
				Bc: function() {
					return r
				},
				Bt: function() {
					return e
				},
				e_: function() {
					return c
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
				o = {
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
				c = {
					[o.ASN]: "firewall.analytics.services.labels.asn",
					[o.COUNTRY]: "firewall.analytics.services.labels.country",
					[o.IP]: "firewall.analytics.services.labels.ip",
					[o.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[o.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[o.VALIDATION]: "firewall.analytics.services.labels.validation",
					[o.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[o.WAF]: "firewall.analytics.services.labels.waf",
					[o.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[o.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[o.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[o.BIC]: "firewall.analytics.services.labels.bic",
					[o.HOT]: "firewall.analytics.services.labels.hot",
					[o.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[o.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[o.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[o.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[o.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[o.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[o.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[o.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[o.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[o.DLP]: "firewall.analytics.services.labels.dlp",
					[o.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				}
		},
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				DC: function() {
					return m
				},
				Ff: function() {
					return s
				},
				Lz: function() {
					return i
				},
				RM: function() {
					return f
				},
				Ss: function() {
					return a
				},
				dR: function() {
					return l
				},
				gW: function() {
					return g
				},
				r5: function() {
					return p
				},
				y$: function() {
					return n
				},
				zs: function() {
					return c
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				o = t("../react/pages/security/analytics/resources/labels.ts");
			const c = ["block", "challenge", "jschallenge", "managed_challenge"],
				l = {
					label: "security_analytics.filters.mitigated",
					parse: u => u === "true" || u === !0,
					urlParam: "mitigated",
					type: e.kE.select,
					options: [!0, !1],
					operators: [r.Gn.equals, r.Gn.notEquals],
					rawLogField: "securityAction"
				},
				g = {
					label: "security_analytics.filters.security_action",
					urlParam: "mitigation-action",
					type: e.kE.select,
					options: Object.keys(o.Bt),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securityAction"
				},
				s = {
					label: "security_analytics.filters.security_source",
					urlParam: "mitigation-service",
					type: e.kE.select,
					options: Object.keys(o.e_).filter(u => u !== "unknown"),
					operators: [r.Gn.equals, r.Gn.notEquals, r.Gn.in, r.Gn.notIn],
					rawLogField: "securitySources"
				};
			let p = function(u) {
				return u.MITIGATED_BY_WAF = "mitigatedByWAF", u.SERVED_BY_CLOUDFLARE = "servedByCloudflare", u.SERVED_BY_ORIGIN = "servedByOrigin", u
			}({});
			const f = {
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
				a = {
					suspicious_login_failure: 201326592,
					suspicious_login_attempt: 201326593
				},
				i = "security-analytics-log-explorer";
			let m = function(u) {
				return u.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', u.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', u.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', u.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', u.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', u.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", u.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", u.OPEN_SIDE_DRAWER = "open security analytics side drawer", u.CLOSE_SIDE_DRAWER = "close security analytics side drawer", u
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Fj: function() {
					return p
				},
				kq: function() {
					return s
				},
				xr: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var a = 1; a < arguments.length; a++) {
					var i = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), m.forEach(function(u) {
						c(n, u, i[u])
					})
				}
				return n
			}

			function c(n, a, i) {
				return a = l(a), a in n ? Object.defineProperty(n, a, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = i, n
			}

			function l(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var m = i.call(n, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
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
				f = ({
					name: n,
					category: a = "user journey",
					product: i = s.MAIN,
					productName: m,
					additionalData: u
				}) => {
					r().sendEvent(n, o({
						category: a,
						product: i,
						productName: m
					}, u || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Fm: function() {
					return c
				},
				N3: function() {
					return e
				},
				UN: function() {
					return o
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
			const o = "user journey",
				c = "Bots"
		},
		"../react/pages/security/overview/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AZ: function() {
					return c
				},
				BQ: function() {
					return l
				},
				Ht: function() {
					return o
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
					return g
				}
			});
			let e = function(p) {
				return p.NAME = "description", p.SOURCE = "source", p.LAST_UPDATE = "lastUpdatedAt", p.ACTIVITY = "activity", p
			}({});
			const r = 5;
			let o = function(p) {
					return p.EXTERNAL_DOCUMENTATION = "external_documentation", p.LINK_TO_MANAGED = "link_to_managed_rules", p.LINK_TO_EVENTS = "link_to_security_events", p.LINK_TO_DDOS = "link_to_ddos", p.LINK_BOT_MGMT = "link_to_bot_mgmt", p.LINK_TO_AI_AUDIT = "link_to_ai_audit", p.LINK_TO_SECURITY_ANALYTICS = "link_to_security_analysis", p.LINK_TO_PAGE_SHIELD = "link_to_page_shield", p.LINK_TO_LEARNED_SCHEMA = "link_to_learned_schema", p.LINK_TO_SECURITY_EVENTS = "link_to_security_events", p.LINK_TO_IP_RULE = "link_to_ip_rule", p.LINK_TO_CONFIGURATION = "link_to_configuration", p
				}({}),
				c = function(p) {
					return p.LOAD_INSIGHTS = "load overview action items", p.OPEN_SIDE_MODAL_INSIGHT = "click overview insight item", p.CLOSE_SIDE_MODAL_INSIGHT = "close overview insight item", p.CLICK_ACTION_INSIGHT = "click overview action item suggestion", p
				}({});
			const l = "security-overview-all-suggestions",
				g = [{
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
		"../react/pages/security/page-shield/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				CP: function() {
					return L
				},
				FV: function() {
					return Q
				},
				KH: function() {
					return w
				},
				Ks: function() {
					return U
				},
				Lj: function() {
					return N
				},
				MC: function() {
					return a
				},
				Mq: function() {
					return k
				},
				OV: function() {
					return le
				},
				Oq: function() {
					return A
				},
				QM: function() {
					return _
				},
				SI: function() {
					return H
				},
				SJ: function() {
					return P
				},
				Sk: function() {
					return R
				},
				Ti: function() {
					return S
				},
				Uc: function() {
					return T
				},
				Uq: function() {
					return p
				},
				Uv: function() {
					return ce
				},
				V0: function() {
					return f
				},
				VT: function() {
					return u
				},
				YC: function() {
					return Z
				},
				j$: function() {
					return h
				},
				qc: function() {
					return I
				},
				sV: function() {
					return b
				},
				sW: function() {
					return K
				},
				u8: function() {
					return m
				},
				v5: function() {
					return n
				},
				xg: function() {
					return oe
				},
				yd: function() {
					return O
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				o = t("../react/pages/security/page-shield/resources/types.ts");

			function c(x) {
				for (var G = 1; G < arguments.length; G++) {
					var ne = arguments[G] != null ? Object(arguments[G]) : {},
						q = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && q.push.apply(q, Object.getOwnPropertySymbols(ne).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(ne, ae).enumerable
					})), q.forEach(function(ae) {
						l(x, ae, ne[ae])
					})
				}
				return x
			}

			function l(x, G, ne) {
				return G = g(G), G in x ? Object.defineProperty(x, G, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[G] = ne, x
			}

			function g(x) {
				var G = s(x, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function s(x, G) {
				if (typeof x != "object" || x === null) return x;
				var ne = x[Symbol.toPrimitive];
				if (ne !== void 0) {
					var q = ne.call(x, G || "default");
					if (typeof q != "object") return q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(x)
			}
			const p = 50,
				f = 9,
				n = "copy script url page shield",
				a = "disable page shield",
				i = "click documentation link",
				m = "enable page shield",
				u = "filter search page shield",
				d = "filter search view all page shield",
				I = "hover score tooltip page shield",
				P = "open alert modal page shield",
				h = "change pagination page shield",
				v = "close script modal page shield",
				O = "open script modal page shield",
				_ = "select alert type page shield",
				T = "sort column page shield",
				k = {
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
				w = {
					STARTS_WITH: r.Gn.startsWith,
					ENDS_WITH: r.Gn.endsWith,
					EQUALS: r.Gn.equals,
					CONTAINS: r.Gn.contains,
					DOES_NOT_CONTAIN: r.Gn.notContains,
					INCLUDES: "includes",
					IS_IN: r.Gn.in
				},
				A = {
					status: {
						example: "active",
						type: e.kE.select,
						options: ["active", "inactive", "infrequent"],
						label: "common.status",
						urlParam: "status",
						operators: [w.EQUALS]
					},
					urls: {
						example: "malware.js",
						type: e.kE.string,
						options: ["true", "false"],
						operators: [w.CONTAINS, w.DOES_NOT_CONTAIN],
						label: "firewall.page_shield.script",
						urlParam: "urls"
					},
					hosts: {
						example: "hostname.com",
						operators: [w.EQUALS],
						type: e.kE.string,
						label: "firewall.page_shield.host",
						urlParam: "hosts"
					},
					page_url: {
						type: e.kE.string,
						operators: [w.INCLUDES, w.ENDS_WITH, w.STARTS_WITH],
						example: "/cart",
						label: "firewall.page_shield.page",
						urlParam: "page_url"
					}
				},
				L = c({}, A, {
					urls: c({}, A.urls, {
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
			let D = function(x) {
				return x.SECURITY_THREATS = "Security Threats", x.C2_BOTNET = "C2 & Botnet", x.CRYPTOMINING = "Cryptomining", x.MALWARE = "Malware", x.PHISHING = "Phishing", x.SPYWARE = "Spyware", x.DGA_DOMAINS = "DGA Domains", x.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", x
			}({});
			const R = "https://www.cloudflare.com/plans/enterprise/contact/",
				Z = {
					[o.I1.BASE_URI]: "page_shield.policies.form.base_uri",
					[o.I1.CHILD]: "page_shield.policies.form.child",
					[o.I1.CONNECT]: "page_shield.policies.form.connections",
					[o.I1.DEFAULT]: "page_shield.policies.form.default",
					[o.I1.FONT]: "page_shield.policies.form.font",
					[o.I1.FORM_ACTION]: "page_shield.policies.form.form",
					[o.I1.FRAME]: "page_shield.policies.form.frame",
					[o.I1.FRAME_ANCESTORS]: "page_shield.policies.form.frame_ancestors",
					[o.I1.IMAGE]: "page_shield.policies.form.img",
					[o.I1.MANIFEST]: "page_shield.policies.form.manifest",
					[o.I1.MEDIA]: "page_shield.policies.form.media",
					[o.I1.OBJECT]: "page_shield.policies.form.object",
					[o.I1.SCRIPT]: "page_shield.policies.form.script",
					[o.I1.STYLE]: "page_shield.policies.form.style",
					[o.I1.UPGRADE_INSECURE_REQUESTS]: "page_shield.policies.form.upgrade_insecure_requests",
					[o.I1.WORKER]: "page_shield.policies.form.worker"
				},
				oe = {
					[o.I1.BASE_URI]: "firewall.page_shield.policies.table.base_uri",
					[o.I1.CHILD]: "firewall.page_shield.policies.table.child",
					[o.I1.CONNECT]: "firewall.page_shield.policies.table.connections",
					[o.I1.DEFAULT]: "firewall.page_shield.policies.table.default",
					[o.I1.FONT]: "firewall.page_shield.policies.table.font",
					[o.I1.FORM_ACTION]: "firewall.page_shield.policies.table.form",
					[o.I1.FRAME]: "firewall.page_shield.policies.table.frame",
					[o.I1.FRAME_ANCESTORS]: "firewall.page_shield.policies.table.frame_ancestors",
					[o.I1.IMAGE]: "firewall.page_shield.policies.table.img",
					[o.I1.MANIFEST]: "firewall.page_shield.policies.table.manifest",
					[o.I1.MEDIA]: "firewall.page_shield.policies.table.media",
					[o.I1.OBJECT]: "firewall.page_shield.policies.table.object",
					[o.I1.SCRIPT]: "firewall.page_shield.policies.table.script",
					[o.I1.SCRIPT_ELEM]: "firewall.page_shield.policies.table.script",
					[o.I1.STYLE]: "firewall.page_shield.policies.table.style",
					[o.I1.STYLE_ELEM]: "firewall.page_shield.policies.table.style",
					[o.I1.UPGRADE_INSECURE_REQUESTS]: "firewall.page_shield.policies.table.upgrade_insecure_requests",
					[o.I1.WORKER]: "firewall.page_shield.policies.table.worker"
				},
				ce = {
					[o.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[o.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[o.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[o.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[o.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				le = {
					[o.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[o.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
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
				K = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				H = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				N = {
					[o.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[o.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[o.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				U = {
					[o.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[o.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[o.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				S = {
					[o.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[o.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[o.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				CP: function() {
					return c.CP
				},
				Ks: function() {
					return c.Ks
				},
				sV: function() {
					return c.sV
				},
				SI: function() {
					return c.SI
				},
				v5: function() {
					return c.v5
				},
				xg: function() {
					return c.xg
				},
				YC: function() {
					return c.YC
				},
				MC: function() {
					return c.MC
				},
				Xe: function() {
					return _.Xe
				},
				u8: function() {
					return c.u8
				},
				Oq: function() {
					return c.Oq
				},
				VT: function() {
					return c.VT
				},
				qc: function() {
					return c.qc
				},
				V0: function() {
					return c.V0
				},
				Lj: function() {
					return c.Lj
				},
				k2: function() {
					return _.k2
				},
				$g: function() {
					return _.$g
				},
				SJ: function() {
					return c.SJ
				},
				KH: function() {
					return c.KH
				},
				Mq: function() {
					return c.Mq
				},
				FV: function() {
					return c.FV
				},
				j$: function() {
					return c.j$
				},
				I1: function() {
					return _.I1
				},
				Wq: function() {
					return _.Wq
				},
				jf: function() {
					return _.jf
				},
				sW: function() {
					return c.sW
				},
				Uq: function() {
					return c.Uq
				},
				yd: function() {
					return c.yd
				},
				QM: function() {
					return c.QM
				},
				Uc: function() {
					return c.Uc
				},
				R$: function() {
					return _.R$
				},
				Sk: function() {
					return c.Sk
				},
				gY: function() {
					return h
				},
				SE: function() {
					return f
				},
				m: function() {
					return I
				},
				xP: function() {
					return d
				},
				xl: function() {
					return u
				},
				Tb: function() {
					return m
				},
				h3: function() {
					return v
				},
				xq: function() {
					return ae
				},
				SQ: function() {
					return U
				},
				C0: function() {
					return S
				},
				av: function() {
					return w
				},
				W3: function() {
					return T
				},
				WO: function() {
					return D
				},
				Dk: function() {
					return oe
				},
				we: function() {
					return le
				},
				Yt: function() {
					return H
				},
				ex: function() {
					return K
				},
				E1: function() {
					return Q
				},
				dm: function() {
					return L
				},
				oK: function() {
					return R
				},
				qZ: function() {
					return N
				},
				_4: function() {
					return x
				},
				qo: function() {
					return G
				},
				CB: function() {
					return n
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(r),
				c = t("../react/pages/security/page-shield/resources/constants.ts");

			function l(j) {
				for (var M = 1; M < arguments.length; M++) {
					var $ = arguments[M] != null ? Object(arguments[M]) : {},
						J = Object.keys($);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols($).filter(function(ue) {
						return Object.getOwnPropertyDescriptor($, ue).enumerable
					})), J.forEach(function(ue) {
						g(j, ue, $[ue])
					})
				}
				return j
			}

			function g(j, M, $) {
				return M = s(M), M in j ? Object.defineProperty(j, M, {
					value: $,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : j[M] = $, j
			}

			function s(j) {
				var M = p(j, "string");
				return typeof M == "symbol" ? M : String(M)
			}

			function p(j, M) {
				if (typeof j != "object" || j === null) return j;
				var $ = j[Symbol.toPrimitive];
				if ($ !== void 0) {
					var J = $.call(j, M || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (M === "string" ? String : Number)(j)
			}
			const f = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", j => (o().sendEvent(c.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), j)),
				n = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", j => (o().sendEvent(c.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), j)),
				a = (j, M) => {
					var $;
					return JSON.stringify(l({}, M == null || ($ = M[0]) === null || $ === void 0 ? void 0 : $.parameters, j))
				};
			let i = "";
			const m = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("start", (j, M, $) => (i = a(M, $), j)).on("success", j => (o().sendEvent(c.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), j)).on("error", (j, M, $) => a(M, $) === i ? j : {
					type: "noop"
				}),
				u = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				d = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", j => (o().sendEvent(c.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), j)),
				I = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				P = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", j => (o().sendEvent(c.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), j)),
				h = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				v = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var O = t("../react/app/redux/normalizer.js"),
				_ = t("../react/pages/security/page-shield/resources/types.ts");
			const T = j => j.pageShield.configuration,
				k = j => {
					var M;
					return (M = j.pageShield.configuration.data) === null || M === void 0 ? void 0 : M.enabled
				},
				w = j => {
					var M;
					return (M = T(j)) === null || M === void 0 ? void 0 : M.data
				},
				A = j => j.pageShield.scripts,
				L = j => j.pageShield.script,
				b = j => j.pageShield.connections,
				D = j => j.pageShield.connection,
				R = (0, O.P1)("pageShieldScripts", A),
				Z = (0, O.P1)("pageShieldScript", L),
				oe = (0, O.P1)("pageShieldConnections", b),
				ce = (0, O.P1)("pageShieldConnection", D),
				le = (j, M) => j === _.Wq.SCRIPT_MONITOR ? R(M) || [] : oe(M) || [],
				Q = (j, M) => j === _.Wq.SCRIPT_MONITOR ? A(M) || [] : b(M) || [],
				K = (j, M) => j === _.Wq.SCRIPT_MONITOR ? Z(M) : ce(M),
				H = j => j.pageShield.domainIntel,
				N = j => j.pageShield.whoIsRecord,
				U = (j, M, $) => {
					var J;
					const ue = Object.values($).map(se => ({
						key: se,
						label: c.Uv[se],
						score: j[se]
					})).filter(se => se.score !== void 0 && se.score <= M);
					return M === c.V0 && ue.length === 0 && ((J = j.js_integrity_score) !== null && J !== void 0 ? J : 100) <= M && ue.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), ue
				},
				S = (j, M) => Object.values(M).filter($ => j[$] === !0).map($ => c.OV[$]),
				x = j => j === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				G = (j, M) => j[_.$g.MagecartScore] !== void 0 && j[_.$g.MagecartScore] <= M || j[_.$g.MalwareScore] !== void 0 && j[_.$g.MalwareScore] <= M || j[_.$g.CryptominingScore] !== void 0 && j[_.$g.CryptominingScore] <= M || j.js_integrity_score !== void 0 && j.js_integrity_score <= M,
				ne = ["cdn.jsdelivr.net", "unpkg.com"],
				q = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				ae = j => {
					if (j.includes("@latest")) {
						const $ = j.split("@latest");
						if ($.length != 2) return;
						const J = $[0].length,
							ue = J + "@latest".length;
						return [J, ue]
					}
					if (!!ne.some($ => j.includes($)))
						for (const $ of q) {
							const J = j.match($);
							if (!J) continue;
							const ue = J.index;
							if (ue === 0) return null;
							const se = ue + J[0].length;
							return [ue, se]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$g: function() {
					return f
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
					return g
				},
				jf: function() {
					return s
				},
				k2: function() {
					return a
				}
			});

			function e(i) {
				for (var m = 1; m < arguments.length; m++) {
					var u = arguments[m] != null ? Object(arguments[m]) : {},
						d = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(u).filter(function(I) {
						return Object.getOwnPropertyDescriptor(u, I).enumerable
					})), d.forEach(function(I) {
						r(i, I, u[I])
					})
				}
				return i
			}

			function r(i, m, u) {
				return m = o(m), m in i ? Object.defineProperty(i, m, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = u, i
			}

			function o(i) {
				var m = c(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function c(i, m) {
				if (typeof i != "object" || i === null) return i;
				var u = i[Symbol.toPrimitive];
				if (u !== void 0) {
					var d = u.call(i, m || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			let l = function(i) {
				return i.BASE_URI = "base-uri", i.CHILD = "child-src", i.CONNECT = "connect-src", i.DEFAULT = "default-src", i.FONT = "font-src", i.FORM_ACTION = "form-action", i.FRAME = "frame-src", i.FRAME_ANCESTORS = "frame-ancestors", i.IMAGE = "img-src", i.MANIFEST = "manifest-src", i.MEDIA = "media-src", i.OBJECT = "object-src", i.SCRIPT = "script-src", i.SCRIPT_ELEM = "script-src-elem", i.STYLE = "style-src", i.STYLE_ELEM = "style-src-elem", i.WORKER = "worker-src", i.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", i
			}({});
			const g = e({}, l, {
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
				f = function(i) {
					return i.CryptominingScore = "cryptomining_score", i.MalwareScore = "malware_score", i.MagecartScore = "magecart_score", i
				}({}),
				n = function(i) {
					return i.DataflowScore = "dataflow_score", i.ObfuscationScore = "obfuscation_score", i
				}({}),
				a = function(i) {
					return i.DomainMalicious = "domain_reported_malicious", i.UrlMalicious = "url_reported_malicious", i
				}({})
		},
		"../react/pages/security/resources/constants.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				_C: function() {
					return u
				},
				_R: function() {
					return d
				},
				dY: function() {
					return P
				},
				fy: function() {
					return O
				},
				ji: function() {
					return m
				},
				pR: function() {
					return I
				},
				pV: function() {
					return _
				},
				rj: function() {
					return v
				},
				yR: function() {
					return T
				},
				zf: function() {
					return h
				}
			});
			var e = t("../node_modules/@cloudflare/component-link/es/index.js"),
				r = t("../../../common/util/types/src/api/phases/fields.tsx"),
				o = t("webpack/sharing/consume/default/react/react"),
				c = t.n(o),
				l = t("../react/utils/translator.tsx"),
				g = t("../react/pages/security/resources/types.ts"),
				s = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				p = t("../node_modules/@cloudflare/elements/es/index.js");

			function f(k) {
				for (var w = 1; w < arguments.length; w++) {
					var A = arguments[w] != null ? Object(arguments[w]) : {},
						L = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(A).filter(function(b) {
						return Object.getOwnPropertyDescriptor(A, b).enumerable
					})), L.forEach(function(b) {
						n(k, b, A[b])
					})
				}
				return k
			}

			function n(k, w, A) {
				return w = a(w), w in k ? Object.defineProperty(k, w, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[w] = A, k
			}

			function a(k) {
				var w = i(k, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function i(k, w) {
				if (typeof k != "object" || k === null) return k;
				var A = k[Symbol.toPrimitive];
				if (A !== void 0) {
					var L = A.call(k, w || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(k)
			}
			const m = 10;
			let u = function(k) {
					return k.MTLS_ACCESS = "mTLS-enforced authentication", k.ZONE_LOCKDOWN = "Zone lockdown", k.USER_AGENT = "User agent blocking", k.EMAIL_VALIDITY = "Disposable email checks", k.IP_BASED = "IP-based rule", k.GEOGRAPHY_BASE = "Geography-based rule", k
				}({}),
				d = function(k) {
					return k.LEAKED_CREDENTIALS = "Leaked Credentials Checks", k
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
					template: u.GEOGRAPHY_BASE,
					trackedEvent: I.CLICK_GEOGRAPHICAL_TEMPLATE
				}, {
					title: "firewall.tools.toast.ip",
					type: "ip",
					template: u.IP_BASED,
					trackedEvent: I.CLICK_IP_TEMPLATE
				}, {
					title: "firewall.tools.toast.user_agent",
					type: "ua",
					template: u.USER_AGENT,
					trackedEvent: I.CLICK_USER_AGENT_TEMPLATE
				}, {
					title: "firewall.tools.toast.zone_lockdown",
					type: "zone_lockdown",
					template: u.ZONE_LOCKDOWN,
					trackedEvent: I.CLICK_ZONE_LOCKDOWN_TEMPLATE
				}],
				h = {
					[g.X.UI_SECTION]: k => ({
						[u.MTLS_ACCESS]: {
							ruleName: u.MTLS_ACCESS,
							capability: "security_rules.rules.capability.web_application_exploits",
							displayName: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.name"
							}),
							wafRulesOverview: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.mtls_access.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${k.account.id}/${k.name}/ssl-tls/client-certificates`
								}]
							})
						},
						[u.ZONE_LOCKDOWN]: {
							ruleName: u.ZONE_LOCKDOWN,
							displayName: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.zone_lockdown.wafRulesOverview",
								Components: [p.ZC, e.QV],
								applyMarkdown: !0,
								componentProps: [{
									display: "inline"
								}, {
									to: `/${k.account.id}/configurations/lists`
								}]
							})
						},
						[u.GEOGRAPHY_BASE]: {
							ruleName: u.GEOGRAPHY_BASE,
							displayName: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.geography_based.wafRulesOverview"
							})
						},
						[u.IP_BASED]: {
							ruleName: u.IP_BASED,
							displayName: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.ip_base.name"
							}),
							capability: "security_rules.rules.capability.web_application_exploits",
							wafRulesOverview: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.ip_base.wafRulesOverview",
								applyMarkdown: !0,
								Components: [p.ZC, e.QV],
								componentProps: [{
									display: "inline"
								}, {
									to: `/${k.account.id}/configurations/lists`
								}]
							})
						},
						[u.USER_AGENT]: {
							ruleName: u.USER_AGENT,
							displayName: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.name"
							}),
							capability: "security_rules.rules.capability.client_side_security",
							wafRulesOverview: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.user_agent.wafRulesOverview",
								Components: [e.QV],
								componentProps: [{
									to: `/${k.account.id}/configurations/lists`
								}]
							})
						},
						[u.EMAIL_VALIDITY]: {
							ruleName: u.EMAIL_VALIDITY,
							capability: "security_rules.rules.capability.fraud",
							displayName: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.name"
							}),
							wafRulesOverview: c().createElement(l.cC, {
								id: "custom-rules.templates.rule.disposable_email.wafRulesOverview"
							}),
							hasWafPermission: !0
						}
					}),
					[g.X.WAF_RULES]: {
						[u.MTLS_ACCESS]: {
							description: "custom-rules.templates.rule.mtls_access.name",
							expression: '(not cf.tls_client_auth.cert_verified and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.mtls_access.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[u.ZONE_LOCKDOWN]: {
							description: "custom-rules.templates.rule.zone_lockdown.name",
							expression: '(not ip.src in $0 and http.request.uri.path in {""})',
							helper: {
								text: "custom-rules.templates.rule.zone_lockdown.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[u.USER_AGENT]: {
							description: "custom-rules.templates.rule.user_agent.name",
							expression: '(http.user_agent eq "BadBot/1.0.2 (+http://bad.bot)")',
							helper: {
								text: "custom-rules.templates.rule.user_agent.helper",
								role: "info"
							},
							defaultAction: "block",
							emptySelectValue: !0
						},
						[u.EMAIL_VALIDITY]: {
							description: "custom-rules.templates.rule.disposable_email.name",
							expression: "(cf.fraud_detection.disposable_email)",
							defaultAction: "block",
							emptySelectValue: !0
						},
						[u.GEOGRAPHY_BASE]: {
							description: "custom-rules.templates.rule.geography.name",
							expression: '(ip.src.asnum eq "") or (ip.src.country eq "") or (ip.src.continent eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						},
						[u.IP_BASED]: {
							description: "firewall.tools.toast.ip",
							expression: '(ip.src eq "")',
							defaultAction: "block",
							emptySelectValue: !0
						}
					}
				},
				v = {
					[g.X.WAF_RULES]: {
						[d.LEAKED_CREDENTIALS]: {
							ruleName: d.LEAKED_CREDENTIALS,
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
					[g.X.UI_SECTION]: {
						[d.LEAKED_CREDENTIALS]: {
							ruleName: d.LEAKED_CREDENTIALS,
							displayName: c().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc"
							}),
							wafRulesOverview: c().createElement(l.cC, {
								id: "rules.template.rate-limiting.lcc.description"
							})
						}
					}
				};
			let O = function(k) {
				return k.DISCOVERY = "discovery", k.SEQUENCES = "sequences", k.SCHEMA_VALIDATION = "schema-validation", k.SETTINGS = "settings", k.API_RULES = "api-rules", k.UPGRADE = "upgrade", k
			}({});
			const _ = f({}, s.g, {
				[r.df.HttpRequestFirewallManaged]: f({}, s.g[r.df.HttpRequestFirewallManaged], {
					EXCEPTION_DOC_DESCRIPTION: "rule.exception.doc_description"
				}),
				[r.df.HttpRequestFirewallCustom]: f({}, s.g[r.df.HttpRequestFirewallCustom], {
					DOC_DESCRIPTION: "custom-rules.card.doc_description",
					DOC_LINK_CREATE: "https://developers.cloudflare.com/waf/custom-rules/create-dashboard/"
				}),
				[r.df.HttpRateLimit]: f({}, s.g[r.df.HttpRateLimit], {
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
			let T = function(k) {
				return k.APP_SEC_MVP = "app-security-navigation-mvp", k
			}({})
		},
		"../react/pages/security/resources/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				X: function() {
					return e
				}
			});
			let e = function(o) {
					return o.UI_SECTION = "UI_SECTION", o.WAF_RULES = "WAF_RULES", o
				}({}),
				r = function(o) {
					return o.Low = "low", o.Medium = "medium", o.Critical = "critical", o
				}({})
		},
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				j: function() {
					return p
				},
				y: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(f) {
				for (var n = 1; n < arguments.length; n++) {
					var a = arguments[n] != null ? Object(arguments[n]) : {},
						i = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(a).filter(function(m) {
						return Object.getOwnPropertyDescriptor(a, m).enumerable
					})), i.forEach(function(m) {
						c(f, m, a[m])
					})
				}
				return f
			}

			function c(f, n, a) {
				return n = l(n), n in f ? Object.defineProperty(f, n, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : f[n] = a, f
			}

			function l(f) {
				var n = g(f, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function g(f, n) {
				if (typeof f != "object" || f === null) return f;
				var a = f[Symbol.toPrimitive];
				if (a !== void 0) {
					var i = a.call(f, n || "default");
					if (typeof i != "object") return i;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (n === "string" ? String : Number)(f)
			}
			let s = function(f) {
				return f.CLICK_OPT_IN = "click opt in security navigation", f.CLICK_OPT_IN_BUTTON = "click opt in button", f.CLICK_OPT_OUT_BUTTON = "click opt out button", f.CLICK_NEXT_STEP = "click opt in next step", f.CLICK_DISMISS_INELIGIBILITY = "click dismiss ineligible zone", f.DISPLAY_MODAL = "display opt in modal", f.DISPLAY_OPT_OUT_MODAL = "display opt OUT modal", f.DISPLAY_TOOLTIP_NOT_AVAILABLE = "display tooltip not available dashboard", f.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE = "click in the external link from tooltip not available dashboard", f
			}({});
			const p = (f, n = {}) => {
				r().sendEvent(f, o({}, n || {}))
			}
		},
		"../react/pages/security/settings/hooks/api.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$y: function() {
					return u
				},
				Ai: function() {
					return n
				},
				B: function() {
					return f
				},
				BT: function() {
					return l
				},
				CK: function() {
					return p
				},
				F3: function() {
					return d
				},
				JP: function() {
					return o
				},
				O_: function() {
					return a
				},
				X2: function() {
					return c
				},
				YO: function() {
					return I
				},
				_c: function() {
					return P
				},
				je: function() {
					return m
				},
				ll: function() {
					return g
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
			const o = async h => {
				var v, O;
				const _ = await (0, e.get)(`/zones/${h}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((v = _ == null ? void 0 : _.body) === null || v === void 0 || (O = v.result) === null || O === void 0 ? void 0 : O.value) === "enabled"
			}, c = async (h, v) => (await (0, e.post)(`/zones/${h}/content-upload-scan/${v?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), v), l = async h => {
				var v;
				const O = await (0, e.get)(`/zones/${h}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((v = O == null ? void 0 : O.body) === null || v === void 0 ? void 0 : v.result) || []
			}, g = async (h, v) => {
				var O;
				const _ = await (0, e.post)(`/zones/${h}/content-upload-scan/payloads`, {
					body: [v]
				});
				return (O = _ == null ? void 0 : _.body) === null || O === void 0 ? void 0 : O.result
			}, s = async (h, v) => (await (0, e.del)(`/zones/${h}/content-upload-scan/payloads/${v}`, {
				hideErrorAlert: !0
			}), v), p = async h => {
				var v;
				const O = await (0, e.get)(`/zones/${h}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((v = O == null ? void 0 : O.body) === null || v === void 0 ? void 0 : v.pii_detection_enabled)
			}, f = async (h, v) => (await (0, e.put)(`/zones/${h}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: v
				}
			}), v), n = async h => {
				var v, O;
				const _ = await (0, e.get)(`/zones/${h}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((v = _ == null ? void 0 : _.body) === null || v === void 0 || (O = v.result) === null || O === void 0 ? void 0 : O.enabled)
			}, a = async (h, v) => {
				var O, _;
				const T = await (0, e.post)(`/zones/${h}/leaked-credential-checks`, {
					body: {
						enabled: v
					}
				});
				return !!((O = T == null ? void 0 : T.body) === null || O === void 0 || (_ = O.result) === null || _ === void 0 ? void 0 : _.enabled)
			}, i = async h => {
				var v;
				const O = await (0, e.get)(`/zones/${h}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (v = O == null ? void 0 : O.body) === null || v === void 0 ? void 0 : v.result
			}, m = async (h, v) => {
				var O;
				const _ = await (0, e.post)(`/zones/${h}/leaked-credential-checks/detections`, {
					body: v
				});
				return (O = _ == null ? void 0 : _.body) === null || O === void 0 ? void 0 : O.result
			}, u = async (h, v) => (await (0, e.del)(`/zones/${h}/leaked-credential-checks/detections/${v}`, {
				hideErrorAlert: !0
			}), v), d = async (h, v) => {
				await (0, e.put)(`/zones/${h}/security-center/securitytxt`, {
					body: v
				})
			}, I = async h => {
				await (0, e.del)(`/zones/${h}/security-center/securitytxt`)
			}, P = async h => (await (0, e.get)(`/zones/${h}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Xu: function() {
					return u
				},
				Io: function() {
					return _
				},
				FQ: function() {
					return Q
				},
				vU: function() {
					return m
				},
				M: function() {
					return I
				},
				d7: function() {
					return d
				},
				Oz: function() {
					return O
				},
				Np: function() {
					return Z
				},
				WR: function() {
					return f
				},
				bE: function() {
					return oe
				},
				u_: function() {
					return i
				},
				pf: function() {
					return T
				}
			});
			var e = t("../../../../node_modules/react-query/es/index.js"),
				r = t("../react/pages/security/settings/hooks/api.ts"),
				o = t("webpack/sharing/consume/default/react/react"),
				c = t("webpack/sharing/consume/default/react-redux/react-redux"),
				l = t("../react/pages/security/settings/resources/index.ts"),
				g = t("../react/common/hooks/useZoneEntitlement.ts"),
				s = t("../../../../node_modules/yup/es/index.js"),
				p = t("../react/utils/translator.tsx");
			const f = () => (0, c.useSelector)(l.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				a = () => !!useZoneEntitlement(n),
				i = () => {
					const {
						t: K
					} = (0, p.QT)(), H = s.Z_().required(K("common.field_is_required")).max(24, K("labels.apply.form.name.error.max_characters")).matches(l.DG, K("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", K("labels.apply.form.name.error.cf_forbidden"), S => !l.aW.test(S)), N = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: S => s.Ry().shape({
							[l.n5.NAME]: S ? s.Z_() : H,
							[l.n5.DESCRIPTION]: S ? s.Z_().optional() : s.Z_().max(150, K("labels.apply.form.description.error.max_characters"))
						})
					}, U = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => s.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: H
						})
					};
					return {
						LABELS_APPLY_FORM: N,
						EDIT_LABELS_MODAL_FORM: U
					}
				},
				m = ({
					modalHeaderFixedHeight: K = 62,
					modalDefaultPaddings: H = 16
				} = {}) => {
					const N = (0, o.useRef)(null),
						U = (0, o.useRef)(null),
						[S, x] = (0, o.useState)(0),
						[G, ne] = (0, o.useState)(0),
						q = `calc(100vh - ${S}px - ${G}px - ${H}px)`,
						[ae, j] = (0, o.useState)("");
					return (0, o.useEffect)(() => {
						const M = () => {
							var $, J, ue, se;
							const pe = N == null || ($ = N.current) === null || $ === void 0 ? void 0 : $.offsetHeight,
								te = U == null || (J = U.current) === null || J === void 0 ? void 0 : J.offsetHeight,
								ye = ((ue = pe) !== null && ue !== void 0 ? ue : 0) + K,
								Oe = (se = te) !== null && se !== void 0 ? se : 0;
							x(ye), ne(Oe)
						};
						return M(), window.addEventListener("resize", M), () => window.removeEventListener("resize", M)
					}, []), {
						searchTerm: ae,
						setSearchTerm: j,
						scrollableSectionMaxHeight: q,
						topMenuRef: N,
						bottomMenuRef: U
					}
				},
				u = K => {
					const H = f(),
						N = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${K}`,
							queryFn: () => (0, r.JP)(K),
							enabled: H
						}),
						S = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${K}`,
							queryFn: () => (0, r.BT)(K),
							enabled: H && !!(U == null ? void 0 : U.data)
						}),
						x = (0, e.useMutation)({
							mutationFn: async ({
								enabled: q
							}) => await (0, r.X2)(K, q),
							onSuccess: q => {
								N.setQueryData([`content-scanning-enabled-${K}`], q)
							}
						}),
						G = (0, e.useMutation)({
							mutationFn: q => (0, r.ll)(K, q),
							onSuccess: q => {
								N.setQueryData([`content-scanning-detections-${K}`], q)
							}
						}),
						ne = (0, e.useMutation)({
							mutationFn: q => (0, r.qD)(K, q),
							onSuccess: q => {
								var ae;
								const j = (ae = N.getQueryData(`content-scanning-detections-${K}`)) !== null && ae !== void 0 ? ae : [];
								N.setQueryData([`content-scanning-detections-${K}`], j.filter(({
									id: M
								}) => M !== q))
							}
						});
					return {
						entitled: H,
						loading: U.isLoading || S.isLoading,
						error: U.isError || S.isError,
						enabled: {
							data: U.data,
							isToggling: x.isLoading,
							toggleEnabled: async q => x.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: S.data,
							add: G.mutateAsync,
							delete: ne.mutateAsync,
							loading: G.isLoading || ne.isLoading
						}
					}
				},
				d = () => {
					const K = (0, c.useSelector)(l.cN),
						H = (0, c.useSelector)(l.bH),
						N = (0, c.useSelector)(l.P3),
						U = (0, c.useSelector)(l.Ri);
					return {
						hasEditPermission: K,
						isEnabled: N && (H.hasSimilarLeaked || H.hasUsernameAndPasswordLeaked || U)
					}
				},
				I = K => {
					const H = d(),
						N = (0, e.useQueryClient)(),
						U = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${K}`,
							queryFn: () => (0, r.Ai)(K),
							enabled: !!H.isEnabled,
							retry: 1
						}),
						S = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${K}`,
							queryFn: () => (0, r.tw)(K),
							enabled: !!H.isEnabled && !!(U == null ? void 0 : U.data)
						}),
						x = (0, e.useMutation)({
							mutationFn: ({
								enabled: q
							}) => (0, r.O_)(K, q),
							onSuccess: q => {
								N.setQueryData([`leaked-credentials-enabled-${K}`], q)
							}
						}),
						G = (0, e.useMutation)({
							mutationFn: async q => await (0, r.je)(K, q),
							onSuccess: q => {
								var ae;
								const j = (ae = N.getQueryData(`leaked-credentials-detections-${K}`)) !== null && ae !== void 0 ? ae : [];
								N.setQueryData([`leaked-credentials-detections-${K}`], [...j, q])
							}
						}),
						ne = (0, e.useMutation)({
							mutationFn: q => (0, r.$y)(K, q),
							onSuccess: q => {
								var ae;
								const j = (ae = N.getQueryData(`leaked-credentials-detections-${K}`)) !== null && ae !== void 0 ? ae : [];
								N.setQueryData([`leaked-credentials-detections-${K}`], j.filter(({
									id: M
								}) => M !== q))
							}
						});
					return {
						entitled: H.isEnabled,
						hasEditPermissions: H.hasEditPermission,
						loading: U.isLoading || S.isLoading,
						error: U.isError || U.isError,
						enabled: {
							data: U.data,
							isToggling: x.isLoading,
							toggleEnabled: async q => x.mutateAsync({
								enabled: q
							})
						},
						detections: {
							data: S.data,
							add: G.mutateAsync,
							delete: ne.mutateAsync,
							loading: G.isLoading || ne.isLoading
						}
					}
				};
			var P = t("../react/common/utils/useQueryCache.ts");
			const h = "security-txt",
				v = {
					securityTxt: ({
						zoneId: K
					}) => [h, K]
				},
				O = K => (0, e.useQuery)({
					queryKey: v.securityTxt({
						zoneId: K
					}),
					queryFn: () => (0, r._c)(K),
					select: H => H.result
				}),
				_ = K => {
					const {
						invalidate: H
					} = (0, P.o)(v.securityTxt({
						zoneId: K
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(K),
						onSuccess: async () => {
							await H(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				T = K => {
					const {
						invalidate: H
					} = (0, P.o)(v.securityTxt({
						zoneId: K
					}));
					return (0, e.useMutation)({
						mutationFn: N => (0, r.F3)(K, N),
						onSuccess: async () => {
							await H(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var k = t("../../../../node_modules/lodash/isEqual.js"),
				w = t.n(k),
				A = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function L(K) {
				for (var H = 1; H < arguments.length; H++) {
					var N = arguments[H] != null ? Object(arguments[H]) : {},
						U = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && U.push.apply(U, Object.getOwnPropertySymbols(N).filter(function(S) {
						return Object.getOwnPropertyDescriptor(N, S).enumerable
					})), U.forEach(function(S) {
						b(K, S, N[S])
					})
				}
				return K
			}

			function b(K, H, N) {
				return H = D(H), H in K ? Object.defineProperty(K, H, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : K[H] = N, K
			}

			function D(K) {
				var H = R(K, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function R(K, H) {
				if (typeof K != "object" || K === null) return K;
				var N = K[Symbol.toPrimitive];
				if (N !== void 0) {
					var U = N.call(K, H || "default");
					if (typeof U != "object") return U;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(K)
			}
			const Z = K => {
					const {
						queryKey: H,
						zoneId: N
					} = (0, A.hL)(K), {
						isLoading: U,
						isError: S,
						isSuccess: x,
						data: G,
						refetch: ne,
						isRefetching: q
					} = (0, e.useQuery)({
						queryKey: H,
						queryFn: () => A.Mi.getLabels(L({
							zoneId: N
						}, K)),
						onSuccess: () => {
							var ae;
							const j = K == null || (ae = K.filters) === null || ae === void 0 ? void 0 : ae.source;
							(j === l.LABEL_SOURCES.MANAGED || j === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: j
							})
						}
					});
					return {
						data: G == null ? void 0 : G.result,
						errors: G == null ? void 0 : G.errors,
						paginationData: G == null ? void 0 : G.result_info,
						isLoading: U,
						isError: S,
						isSuccess: x,
						refetch: ne,
						isRefetching: q
					}
				},
				oe = ({
					labels: K,
					preselectedLabels: H
				}) => {
					const {
						USER: N,
						MANAGED: U
					} = l.LABEL_SOURCES, [S, x] = (0, o.useState)({
						[N]: [],
						[U]: []
					}), [G, ne] = (0, o.useState)(new Set), q = G.size > 0, [ae, j] = (0, o.useState)(!1), M = se => {
						ne(pe => {
							const te = new Set(pe);
							return te.has(se.name) ? te.delete(se.name) : te.add(se.name), te
						})
					}, $ = se => G.has(se.name), J = (se, pe) => {
						const te = $(se) ? 1 : 0;
						return ($(pe) ? 1 : 0) - te
					}, ue = se => {
						x(pe => ({
							[N]: [...se ? se[N] : pe[N]].sort(J),
							[U]: [...se ? se[U] : pe[U]].sort(J)
						}))
					};
					return (0, o.useEffect)(() => {
						if (K && !ae) {
							if (H) {
								const se = new Set;
								K.forEach(pe => {
									H.some(te => w()(te, pe)) && se.add(pe.name)
								}), ne(se)
							}
							j(!0)
						}
					}, [K, H, ae]), (0, o.useEffect)(() => {
						if (K && ae) {
							const se = K.reduce((te, ye) => (ye.source === N ? te[N].push(ye) : ye.source === U && te[U].push(ye), te), {
									[N]: [],
									[U]: []
								}),
								pe = {
									[N]: se[N].sort(J),
									[U]: se[U].sort(J)
								};
							x(pe)
						}
					}, [N, U, K, ae]), {
						userAndManagedLabels: S,
						setUserAndManagedLabels: x,
						toggleSelectedLabel: M,
						isLabelSelected: $,
						sortLabelsBySelectedStatus: ue,
						hasLabelsSelected: q
					}
				};
			var ce = t("../react/app/redux/index.ts"),
				le = t("../react/pages/security/settings/resources/selectors.ts");
			const Q = (K = "") => {
				const H = (0, ce.p4)(le.Xs),
					N = H && (K == null ? void 0 : K.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: H,
					hasDeprecatedParameter: N
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				FQ: function() {
					return p.FQ
				},
				Iv: function() {
					return f.Iv
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
					return f.QJ
				},
				R: function() {
					return f.R
				},
				Tf: function() {
					return f.Tf
				},
				WR: function() {
					return p.WR
				},
				Xs: function() {
					return f.Xs
				},
				Xu: function() {
					return p.Xu
				},
				ZF: function() {
					return f.ZF
				},
				bE: function() {
					return p.bE
				},
				bH: function() {
					return f.bH
				},
				dC: function() {
					return f.dC
				},
				eC: function() {
					return f.eC
				},
				m8: function() {
					return f.m8
				},
				pf: function() {
					return p.pf
				},
				ui: function() {
					return f.ui
				},
				vc: function() {
					return f.vc
				},
				zF: function() {
					return f.zF
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/app/components/Forbidden.jsx"),
				o = t("webpack/sharing/consume/default/react/react"),
				c = t.n(o),
				l = t("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(g),
				p = t("../react/pages/security/settings/hooks/index.ts"),
				f = t("../react/pages/security/settings/resources/index.ts");
			const n = c().lazy(() => Promise.all([t.e(16691), t.e(34684), t.e(12174), t.e(1091), t.e(27751), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(5756), t.e(83276), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				a = () => {
					const {
						t: i
					} = (0, g.useI18n)(), m = (0, e.xk)("waf");
					return c().createElement(l.T3, {
						parentPageLabel: i("navigation.zone.security"),
						title: i("navigation.zone.security.settings"),
						type: "narrow"
					}, m.read ? c().createElement(n, null) : c().createElement(r.Z, null))
				};
			E.ZP = a
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Mi: function() {
					return v
				},
				hL: function() {
					return h
				}
			});
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/zoneSelectors.ts"),
				o = t("../react/common/utils/useQueryCache.ts"),
				c = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/common/hooks/useAccountId.ts"),
				g = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
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
			var f = t("../../../../node_modules/lodash/lodash.js"),
				n = t("../react/pages/security/settings/resources/utils.ts"),
				a = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");

			function i(_, T) {
				if (_ == null) return {};
				var k = m(_, T),
					w, A;
				if (Object.getOwnPropertySymbols) {
					var L = Object.getOwnPropertySymbols(_);
					for (A = 0; A < L.length; A++) w = L[A], !(T.indexOf(w) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, w) || (k[w] = _[w]))
				}
				return k
			}

			function m(_, T) {
				if (_ == null) return {};
				var k = {},
					w = Object.keys(_),
					A, L;
				for (L = 0; L < w.length; L++) A = w[L], !(T.indexOf(A) >= 0) && (k[A] = _[A]);
				return k
			}

			function u(_) {
				for (var T = 1; T < arguments.length; T++) {
					var k = arguments[T] != null ? Object(arguments[T]) : {},
						w = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(k).filter(function(A) {
						return Object.getOwnPropertyDescriptor(k, A).enumerable
					})), w.forEach(function(A) {
						d(_, A, k[A])
					})
				}
				return _
			}

			function d(_, T, k) {
				return T = I(T), T in _ ? Object.defineProperty(_, T, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = k, _
			}

			function I(_) {
				var T = P(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function P(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var k = _[Symbol.toPrimitive];
				if (k !== void 0) {
					var w = k.call(_, T || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const h = _ => {
					const T = (0, e.p4)(r.Cu),
						k = (0, l.F)(),
						w = O.labels(u({
							accountId: k,
							zoneId: T
						}, _ ? u({}, _) : {})),
						A = (0, o.o)(w);
					return u({
						zoneId: T,
						queryKey: w,
						batchInvalidateLabels: async () => {
							await A.batchInvalidate({
								queryKeysToPredicateInvalidate: [c.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, A)
				},
				v = {
					getLabels: async _ => {
						var T, k, w, A;
						let {
							zoneId: L,
							hideErrorAlert: b = !0
						} = _, D = i(_, ["zoneId", "hideErrorAlert"]);
						return (await g.get(p.labels.toUrl({
							zoneId: L
						}), {
							parameters: {
								page: D == null ? void 0 : D.page,
								per_page: D == null ? void 0 : D.per_page,
								with_mapped_resource_counts: D == null ? void 0 : D.with_mapped_resource_counts,
								filter: D == null || (T = D.filters) === null || T === void 0 ? void 0 : T.search,
								source: (0, n.sQ)(D == null || (k = D.filters) === null || k === void 0 ? void 0 : k.source),
								order: D == null || (w = D.sort) === null || w === void 0 ? void 0 : w.id,
								direction: (D == null ? void 0 : D.sort) ? (D == null || (A = D.sort) === null || A === void 0 ? void 0 : A.desc) ? a.Sr.desc : a.Sr.asc : void 0
							},
							hideErrorAlert: b
						})).body
					},
					getLabel: async _ => {
						let {
							zoneId: T,
							labelName: k,
							hideErrorAlert: w = !0
						} = _, A = i(_, ["zoneId", "labelName", "hideErrorAlert"]);
						const L = (0, n.mm)(k) ? p.managedLabel.toUrl({
							zoneId: T,
							labelName: k
						}) : p.userLabel.toUrl({
							zoneId: T,
							labelName: k
						});
						return (await g.get(L, {
							parameters: {
								with_mapped_resource_counts: A == null ? void 0 : A.with_mapped_resource_counts
							},
							hideErrorAlert: w
						})).body
					},
					editLabel: async ({
						zoneId: _,
						label: T,
						replace: k
					}) => {
						const {
							name: w
						} = T, A = i(T, ["name"]);
						return (await (k ? g.put : g.patch)(p.userLabel.toUrl({
							zoneId: _,
							labelName: T.name
						}), {
							body: A
						})).body
					},
					deleteLabel: async ({
						zoneId: _,
						labelName: T
					}) => (await g.del(p.userLabel.toUrl({
						zoneId: _,
						labelName: T
					}))).body,
					createLabel: async _ => {
						let {
							zoneId: T
						} = _, k = i(_, ["zoneId"]);
						const {
							product: w
						} = k, A = i(k, ["product"]);
						return (await g.post(p.userLabels.toUrl({
							zoneId: T
						}), {
							body: [A]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: _,
						user: T,
						managed: k,
						operationIds: w,
						replace: A
					}) => (await (A ? g.put : g.post)(p.operationsLinkedToLabels.toUrl({
						zoneId: _
					}), {
						body: u({}, T ? {
							user: {
								labels: T
							}
						} : {}, k ? {
							managed: {
								labels: k
							}
						} : {}, {
							selector: {
								include: {
									operation_ids: w
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: _,
						labelName: T,
						operationIds: k
					}) => {
						const w = (0, n.mm)(T) ? p.managedLabelOperations.toUrl({
							zoneId: _,
							labelName: T
						}) : p.userLabelOperations.toUrl({
							zoneId: _,
							labelName: T
						});
						return (await g.put(w, {
							body: {
								selector: {
									include: {
										operation_ids: k
									}
								}
							}
						})).body
					}
				},
				O = {
					labels: _ => {
						let {
							accountId: T,
							zoneId: k
						} = _, w = i(_, ["accountId", "zoneId"]);
						return [c.IQ.LABELS, T, k, ...(0, f.isEmpty)(w) ? [] : [w]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return I
				},
				EDIT_LABELS_MODAL_FORM_PROPERTIES: function() {
					return s
				},
				GE: function() {
					return k
				},
				IQ: function() {
					return c
				},
				KV: function() {
					return g
				},
				LABELS_LIST_TOASTS: function() {
					return m
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return u
				},
				V: function() {
					return O
				},
				W3: function() {
					return o
				},
				Yn: function() {
					return L
				},
				_8: function() {
					return i
				},
				_c: function() {
					return _
				},
				aW: function() {
					return P
				},
				dC: function() {
					return A
				},
				gY: function() {
					return T
				},
				j8: function() {
					return p
				},
				jz: function() {
					return d
				},
				n5: function() {
					return h
				},
				om: function() {
					return f
				},
				w: function() {
					return r
				},
				zF: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/@cloudflare/component-responsive-table/es/index.js");
			let r = function(b) {
				return b.EXPOSED_CREDENTIALS = "exposed_credentials", b.CONTENT_SCANNING = "content_scanning", b.FIREWALL_AI = "firewall_ai", b
			}({});
			const o = "all";
			let c = function(b) {
					return b.LABELS = "labels", b
				}({}),
				l = function(b) {
					return b.USER = "user", b.MANAGED = "managed", b
				}({}),
				g = function(b) {
					return b.SOURCE = "source", b
				}({}),
				s = function(b) {
					return b.NAME = "name", b.SOURCE = "source", b.NEW_LABEL_NAME = "newLabelName", b
				}({}),
				p = function(b) {
					return b.ENDPOINT = "endpoint", b.METHOD = "method", b.OPERATION_ID = "operationId", b
				}({}),
				f = function(b) {
					return b.NAME = "name", b.MAPPED_RESOURCES = "mapped_resources.operations", b.SOURCE = "source", b.APPLY = "apply", b
				}({});
			const i = {
				initialPaginationState: {
					page: 1,
					perPage: 10
				},
				initialSortState: {
					name: f.NAME,
					direction: e.Sr.asc
				},
				initialToolbarState: {
					search: "",
					filterValues: {
						[g.SOURCE]: o
					}
				},
				filters: g,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let m = function(b) {
				return b.CREATED_LABEL = "createdLabel", b.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", b.DELETED_LABEL = "deletedLabel", b.APPLIED_LABEL = "appliedLabel", b.EDITED_LABEL = "editedLabel", b.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", b
			}({});
			const u = "650px",
				d = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				I = /^[A-Za-z0-9-]+$/,
				P = /^cf-/;
			let h = function(b) {
				return b.NAME = "name", b.DESCRIPTION = "description", b
			}({});
			const v = "all";
			let O = function(b) {
				return b.METHOD = "method", b.HOSTNAME = "hostname", b
			}({});
			const _ = {
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
						[O.METHOD]: v,
						[O.HOSTNAME]: v
					}
				},
				filters: O
			};
			let T = function(b) {
				return b.TITLE = "title", b.DESCRIPTION = "description", b.SUBMIT = "submit", b
			}({});
			const k = 1e3,
				w = {
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
				A = "exposed-credentials-module",
				L = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				DG: function() {
					return e.DG
				},
				tR: function() {
					return m
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
					return a
				},
				zF: function() {
					return e.zF
				},
				QJ: function() {
					return d
				},
				R: function() {
					return n
				},
				LABEL_SOURCES: function() {
					return e.LABEL_SOURCES
				},
				eC: function() {
					return u
				},
				QH: function() {
					return e.QH
				},
				TG: function() {
					return r.T
				},
				QF: function() {
					return o.QF
				},
				vc: function() {
					return o.vc
				},
				ZF: function() {
					return i
				},
				Xs: function() {
					return h.Xs
				},
				wG: function() {
					return o.N2
				},
				Q4: function() {
					return o.Q4
				},
				Wv: function() {
					return o.Wv
				},
				bH: function() {
					return h.bH
				},
				Mb: function() {
					return o.Mb
				},
				ui: function() {
					return h.ui
				},
				P3: function() {
					return h.P3
				},
				Ri: function() {
					return h.Ri
				},
				cN: function() {
					return h.cN
				},
				m8: function() {
					return P
				},
				Tf: function() {
					return I
				},
				$E: function() {
					return o.$E
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts"),
				r = t("../react/pages/security/settings/resources/types.ts"),
				o = t("../react/pages/security/settings/resources/utils.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c);

			function g(v) {
				for (var O = 1; O < arguments.length; O++) {
					var _ = arguments[O] != null ? Object(arguments[O]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(k) {
						return Object.getOwnPropertyDescriptor(_, k).enumerable
					})), T.forEach(function(k) {
						s(v, k, _[k])
					})
				}
				return v
			}

			function s(v, O, _) {
				return O = p(O), O in v ? Object.defineProperty(v, O, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[O] = _, v
			}

			function p(v) {
				var O = f(v, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function f(v, O) {
				if (typeof v != "object" || v === null) return v;
				var _ = v[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(v, O || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(v)
			}
			let n = function(v) {
					return v.LABELS_LIST = "Labels List page", v.LABELS_APPLY = "Labels Apply page", v.LABELS_SIDE_MODAL = "Labels Side Modal", v.LABELS_ENDPOINT_MANAGEMENT = "Endpoint Management page", v.LABELS_OPERATION_DETAILS = "Operation Details page", v
				}({}),
				a = function(v) {
					return v.API_SHIELD = "API Shield", v.SECURITY_SETTINGS = "Security Settings", v
				}({}),
				i = function(v) {
					return v.OPERATIONS_TABLE_TOOLBAR = "Operations table toolbar", v.OPERATIONS_TABLE_OVERFLOW = "Operations table overflow", v.OPERATIONS_TABLE_ROW = "Operations table row", v.OPERATION_DETAILS_PAGE = "Operation details page", v
				}({}),
				m = function(v) {
					return v.UPSERT = "upsert", v.OVERWRITE = "overwrite", v
				}({}),
				u = function(v) {
					return v.SINGLE = "single", v.MULTIPLE = "multiple", v
				}({}),
				d = function(v) {
					return v.DISPLAY_LABELS_LIST_PAGE = "show a list of labels in the settings page", v.DELETE_LABEL = "delete a user label in the settings page", v.FILTER_USER_MANAGED_LABELS = "filter user/managed labels in the settings page", v.CREATE_LABEL_CLICKED = "click create label button in the settings page", v.BULK_APPLY_CLICKED = "click bulk apply button in the settings page", v.CONNECTED_ENDPOINTS_CLICKED = "click connected endpoints link in the settings page", v.DISPLAY_APPLY_LABELS_PAGE = "show the apply labels page", v.CLICK_LABELS_DOCUMENTATION_LINK = "click documentation link in the apply labels page", v.APPLY_OPERATIONS_TO_LABEL = "apply operations to label in the apply labels page", v.OPEN_LABELS_SIDE_MODAL = "open labels side modal", v.APPLY_LABELS_TO_OPERATION = "apply labels to operation(s) in the labels side modal", v.REMOVE_RISK_LABELS_FROM_OPERATION = "remove risk label(s) from operation(s) in the labels side modal", v.CREATE_NEW_LABEL = "create a new label", v
				}({});
			const I = ({
					name: v,
					product: O,
					category: _ = "user journey",
					pageName: T,
					from: k,
					write_strategy: w,
					type: A,
					target: L,
					selected: b
				}) => {
					l().sendEvent(v, g({
						category: _,
						pageName: T,
						product: O
					}, k ? {
						from: k
					} : {}, w ? {
						write_strategy: w
					} : {}, A ? {
						type: A
					} : {}, L ? {
						target: L
					} : {}, b ? {
						selected: b
					} : {}))
				},
				P = () => {
					var v;
					return (v = Object.values(d)) === null || v === void 0 ? void 0 : v.flat()
				};
			var h = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				P3: function() {
					return p
				},
				Ri: function() {
					return f
				},
				Xs: function() {
					return a
				},
				bH: function() {
					return n
				},
				cN: function() {
					return s
				},
				ui: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				c = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const g = i => {
					const m = (0, e.RO)(i),
						u = !!(0, o.rV)(i, "rulesets.file_upload_scan_allowed"),
						d = !!(0, o.BF)(i, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? m && (u || d) : d
				},
				s = i => Number((0, o.rV)(i, "rulesets.max_leaked_credential_checks_custom_detections")) > 0,
				p = i => (0, o.rV)(i, "rulesets.fw_global_rulesets_execute_leaked_credential_checks_allowed"),
				f = i => (0, o.rV)(i, "rulesets.leaked_credential_checks_allowed"),
				n = i => (0, l.z1)(c.dC)(i) ? {
					hasPasswordLeaked: !0,
					hasUsernameAndPasswordLeaked: !!(0, o.rV)(i, "rulesets.leaked_credential_checks_exact_allowed"),
					hasSimilarLeaked: !!(0, o.rV)(i, "rulesets.leaked_credential_checks_similar_allowed")
				} : {
					hasPasswordLeaked: !1,
					hasUsernameAndPasswordLeaked: !1,
					hasSimilarLeaked: !1
				},
				a = i => !!(0, l.z1)("deprecate-security-level")(i)
		},
		"../react/pages/security/settings/resources/types.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				T: function() {
					return r
				}
			});
			var e = t("../react/pages/security/settings/resources/constants.ts");
			let r = function(o) {
				return o.ENABLED = "enabled", o.CONTACT = "contact", o.EXPIRES = "expires", o.ENCRYPTION = "encryption", o.ACKNOWLEDGMENTS = "acknowledgments", o.CANONICAL = "canonical", o.HIRING = "hiring", o.POLICY = "policy", o.PREFERRED_LANGUAGES = "preferred_languages", o.MODIFIED_ON = "modified_on", o
			}({})
		},
		"../react/pages/security/settings/resources/utils.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return i
				},
				Mb: function() {
					return m
				},
				N2: function() {
					return O
				},
				Q4: function() {
					return d
				},
				QF: function() {
					return a
				},
				Vy: function() {
					return P
				},
				Wv: function() {
					return u
				},
				mm: function() {
					return v
				},
				sQ: function() {
					return h
				},
				vc: function() {
					return I
				}
			});
			var e = t("../../../../node_modules/yup/es/index.js"),
				r = t("../../../../node_modules/@cloudflare/util-http-file/es/index.js"),
				o = t("../react/pages/security/settings/routes.tsx"),
				c = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../react/pages/security/settings/resources/types.ts"),
				g = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(_) {
				for (var T = 1; T < arguments.length; T++) {
					var k = arguments[T] != null ? Object(arguments[T]) : {},
						w = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(k).filter(function(A) {
						return Object.getOwnPropertyDescriptor(k, A).enumerable
					})), w.forEach(function(A) {
						p(_, A, k[A])
					})
				}
				return _
			}

			function p(_, T, k) {
				return T = f(T), T in _ ? Object.defineProperty(_, T, {
					value: k,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : _[T] = k, _
			}

			function f(_) {
				var T = n(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function n(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var k = _[Symbol.toPrimitive];
				if (k !== void 0) {
					var w = k.call(_, T || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const a = {
					[l.T.ENABLED]: !1,
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
				m = _ => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(_("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, _("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(_("common.required")).min(new Date, _("security_txt.fields.expires.min_error"))
				}),
				u = _ => {
					const T = {};
					for (const k in _) T[k] = Array.isArray(_[k]) ? _[k].filter(w => !!w) : _[k];
					return s({}, T, {
						expires: (0, g.DZ)(_.expires)
					})
				},
				d = (_, T, k) => {
					const w = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						A = Object.entries(_).sort(([L], [b]) => w.indexOf(L) - w.indexOf(b)).filter(([L, b]) => !!i[L] && !!b && (!Array.isArray(b) || !!b.length)).map(([L, b]) => Array.isArray(b) ? b.map(D => `${k(i[L].label)}: ${D}`).join(`
`) : `${k(i[L].label)}: ${b}`).join(`
`);
					(0, r.yH)(`Cloudflare_${T}_security.txt`, A, "text/plain;charset=utf-8")
				};
			let I = function(_) {
				return _.CREATED = "created security.txt", _.ENABLED = "enabled security.txt", _.DISABLED = "disabled security.txt", _.DOWNLOADED = "downloaded security.txt", _.UPDATED = "updated security.txt", _.DELETED = "deleted security.txt", _
			}({});
			const P = _ => (_ == null ? void 0 : _.source) === c.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (_ == null ? void 0 : _.source) === c.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				h = _ => _ === c.W3 ? void 0 : _,
				v = _ => c.aW.test(_),
				O = _ => {
					switch (_) {
						case c.w.CONTENT_SCANNING:
							return o.ROUTES.CONTENT_SCANNING;
						case c.w.EXPOSED_CREDENTIALS:
							return o.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Sb: function() {
					return f
				},
				Vj: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var a = 1; a < arguments.length; a++) {
					var i = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), m.forEach(function(u) {
						c(n, u, i[u])
					})
				}
				return n
			}

			function c(n, a, i) {
				return a = l(a), a in n ? Object.defineProperty(n, a, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = i, n
			}

			function l(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var m = i.call(n, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
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
				f = ({
					event: n,
					category: a = "user journey",
					product: i = "waf",
					productName: m = "Managed Rules",
					additionalData: u
				}) => {
					r().sendEvent(n, o({
						category: a,
						product: i,
						productName: m
					}, u || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				D: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CLICK_MENU_ITEM_SHARE = "click on share item", r.CLICK_ON_CONFIGURE_SHARE_BUTTON = "click on configure share button", r.CLICK_ON_GO_TO_SOURCE_ACCOUNT = "click on go to source account", r.CLICK_ON_EDIT_SHARE_PERMISSION = "click on edit share permission", r.CLICK_ON_CLOSE_SHARE_MODAL = "click on close share modal", r.CLICK_ON_CANCEL_SHARE_MODAL = "click on cancel share modal", r.CLICK_ON_SHARE_BUTTON_SHARE_MODAL = "click on share button share modal", r.CLICK_GO_BACK_SHARE_MODAL = "click go back share modal", r.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL = "click on deploy button share modal", r.CLICK_ON_DELETE_RULESET = "click on delete ruleset", r.CLICK_ON_SHARE_TABLE_ROW = "click on share table row", r
			}({})
		},
		"../react/pages/spectrum/tracking.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.IP_ADDRESS = "create spectrum app using IP address", r.CNAME = "create spectrum app using cname record", r.LB = "create spectrum app using load balancer", r.UPDATE_IP_ADDRESS = "update spectrum app using IP address", r.UPDATE_CNAME = "update spectrum app using cname record", r.UPDATE_LB = "update spectrum app using load balancer", r.DISABLE = "disable spectrum app", r
			}({})
		},
		"../react/pages/stream/actionTypes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ReplaceVideos = "stream.replace_videos", r.PrependVideo = "stream.prepend_video", r.UpdateVideo = "stream.update_video", r.UpdateVideoPending = "steam.update_video_pending", r.RemoveVideos = "stream.remove_videos", r.StoreUploader = "stream.store_uploader", r.UpsertUploads = "stream.upsert_uploads", r.RemoveUploads = "stream.remove_uploads", r.UpdateUploadProgress = "stream.update_upload_progress", r.UploadViaUrl = "stream.upload_via_url", r.SetLoading = "stream.set_loading", r.SetStorageLoading = "stream.set_storage_loading", r.SetStorage = "stream.set_storage", r.SetPage = "stream.set_page", r.SetPausedUploads = "stream.set_paused_uploads", r.RemovePausedUpload = "stream.remove_paused_upload", r.SetRequestTimestamp = "stream.set_request_timestamp", r.ResetState = "stream.reset_state", r
			}({})
		},
		"../react/pages/stream/reducer.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return n
				},
				nY: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				r = t("../react/pages/stream/actionTypes.ts"),
				o = t("../react/pages/stream/util/pager.ts");

			function c(a) {
				for (var i = 1; i < arguments.length; i++) {
					var m = arguments[i] != null ? Object(arguments[i]) : {},
						u = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(m).filter(function(d) {
						return Object.getOwnPropertyDescriptor(m, d).enumerable
					})), u.forEach(function(d) {
						l(a, d, m[d])
					})
				}
				return a
			}

			function l(a, i, m) {
				return i = g(i), i in a ? Object.defineProperty(a, i, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[i] = m, a
			}

			function g(a) {
				var i = s(a, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function s(a, i) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var u = m.call(a, i || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(a)
			}
			const p = "stream",
				f = {
					loading: !0,
					storageLoading: !1,
					videos: [],
					requestTimestamp: null,
					videoUpdateStatuses: {}
				};

			function n(a = f, i) {
				switch (i.type) {
					case r.U.ResetState:
						return f;
					case r.U.SetStorageLoading:
						const {
							storageLoading: m
						} = i;
						return c({}, a, {
							storageLoading: m
						});
					case r.U.SetStorage:
						return c({}, a, {
							storage: i.payload ? c({}, a.storage, i.payload) : void 0
						});
					case r.U.ReplaceVideos:
						return c({}, a, {
							videos: i.videos
						});
					case r.U.PrependVideo:
						return c({}, a, {
							videos: [i.video, ...a.videos].filter((u, d) => d < o.FJ)
						});
					case r.U.UpdateVideo:
						return c({}, a, {
							videos: a.videos.map(u => u.uid === i.video.uid ? i.video : u)
						});
					case r.U.UpdateVideoPending:
						return c({}, a, {
							videoUpdateStatuses: c({}, a.videoUpdateStatuses, {
								[i.uid]: i.status
							})
						});
					case r.U.RemoveVideos:
						return c({}, a, {
							videos: a.videos.filter(u => !i.ids.includes(u.uid))
						});
					case r.U.SetLoading:
						return c({}, a, {
							loading: i.loading
						});
					case r.U.SetRequestTimestamp:
						return c({}, a, {
							requestTimestamp: i.requestTimestamp
						});
					case r.U.UploadViaUrl:
						return a;
					default:
						return (0, e.h)(i, a)
				}
			}
		},
		"../react/pages/stream/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				C: function() {
					return p
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/stream`,
				o = (0, e.BC)`${r}/inputs`,
				c = (0, e.BC)`${r}/videos`,
				l = (0, e.BC)`${r}/analytics`,
				g = (0, e.BC)`${c}/${"videoId"}`,
				s = (0, e.BC)`${r}/video-transformations`,
				p = {
					root: r,
					inputs: o,
					configureInputs: (0, e.BC)`${o}/custom-hostnames`,
					videos: c,
					analytics: l,
					videoPage: g,
					videoTransformationsConfigList: s,
					videoTransformationsZoneConfig: (0, e.BC)`${s}/${"zoneId"}/settings`,
					inputPage: (0, e.BC)`${o}/${"inputId"}`,
					createOutput: (0, e.BC)`${o}/${"inputId"}/createOutput`,
					createInput: (0, e.BC)`${o}/create`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/stream`,
					signUp: (0, e.BC)`/sign-up/stream`,
					checkoutSuccess: (0, e.BC)`${r}/bundle-checkout-success`,
					plans: (0, e.BC)`${r}/plans`,
					managePlan: (0, e.BC)`${r}/manage-plan`
				}
		},
		"../react/pages/stream/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Id: function() {
					return c
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
					return d
				},
				_Q: function() {
					return a
				},
				aM: function() {
					return u
				},
				bM: function() {
					return s
				},
				bO: function() {
					return i
				},
				bm: function() {
					return m
				},
				mX: function() {
					return I
				},
				pW: function() {
					return g
				},
				xW: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/pages/stream/reducer.ts");
			const c = P => P[o.nY],
				l = P => c(P).videos,
				g = P => c(P).videoUpdateStatuses,
				s = P => c(P).loading,
				p = P => c(P).requestTimestamp,
				f = P => c(P).storageLoading,
				n = P => c(P).storage,
				a = P => (0, r.BF)(P, "stream.enabled") || (0, e.bC)(P),
				i = P => (0, e.Le)(P, "stream", "connect"),
				m = P => (0, e.Le)(P, "stream", "stream-4371"),
				u = P => (0, e.Le)(P, "stream", "public-details-enabled"),
				d = P => !!(0, e.Le)(P, "stream", "llhls"),
				I = P => {
					const h = n(P);
					return h !== void 0 && h.limitMins > h.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				FJ: function() {
					return e
				},
				d6: function() {
					return o
				},
				wL: function() {
					return r
				}
			});
			const e = 30;

			function r(c, l, g) {
				const s = {
					search: g,
					limit: e.toString()
				};
				return l !== void 0 && (s.end = l), s
			}

			function o(c, l, g) {
				return {
					limit: e.toString(),
					search: g,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ARGO_ENABLEMENT = "change argo enablement", r.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", r.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", r
			}({})
		},
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				QK: function() {
					return p
				},
				WM: function() {
					return u
				},
				Zk: function() {
					return f
				},
				aB: function() {
					return n
				},
				eT: function() {
					return m
				},
				i3: function() {
					return s
				},
				mm: function() {
					return a
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(d) {
				for (var I = 1; I < arguments.length; I++) {
					var P = arguments[I] != null ? Object(arguments[I]) : {},
						h = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(P).filter(function(v) {
						return Object.getOwnPropertyDescriptor(P, v).enumerable
					})), h.forEach(function(v) {
						c(d, v, P[v])
					})
				}
				return d
			}

			function c(d, I, P) {
				return I = l(I), I in d ? Object.defineProperty(d, I, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[I] = P, d
			}

			function l(d) {
				var I = g(d, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function g(d, I) {
				if (typeof d != "object" || d === null) return d;
				var P = d[Symbol.toPrimitive];
				if (P !== void 0) {
					var h = P.call(d, I || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(d)
			}
			let s = function(d) {
					return d.TRY_NEW_DASHBOARD_CTA = "click try new dashboard", d
				}({}),
				p = function(d) {
					return d.CREATE_BUTTON_CLICK = "click create load balancer", d.TOGGLE_STATUS = "load balancer toggle status", d.REVIEW_PAGE_CLICK = "click load balancer table review link", d.EDIT_CLICK = "click load balancer table edit button", d.DELETE_CLICK = "click load balancer table delete button", d
				}({}),
				f = function(d) {
					return d.EDIT_HOSTNAME_CLICK = "click edit load balancer hostname", d.EDIT_IP_CLICK = "click edit load balancer IP", d.EDIT_POOLS_CLICK = "click edit load balancer pools", d.EDIT_MONITORS_CLICK = "click edit load balancer monitors", d.EDIT_CUSTOM_RULES_CLICK = "click edit load balancer custom rules", d.EDIT_TRAFFIC_STEERING_CLICK = "click edit load balancer traffic steering", d
				}({}),
				n = function(d) {
					return d.GO_TO_STEP = "click load balancer step", d.BACK_TO_STEP = "click load balancer back to step", d.SAVE = "save load balancer", d.SAVE_AS_DRAFT = "save load balancer as draft", d.SAVE_AND_DEPLOY = "save and deploy load balancer", d.NAVIGATION_CHANGE = "click load balancer wizard navigation link", d.CLICK_PRIVATE_LB_DOCUMENTATION = "click link to private load balancing documentation", d
				}({}),
				a = function(d) {
					return d.OPEN_SUBSCRIPTION_MODAL = "open load balancing subscription modal", d
				}({});
			const m = Object.values({
					MIGRATION: s,
					LOAD_BALANCERS_TABLE: p,
					REVIEW: f,
					WIZARD: n,
					USAGE: a
				}).flatMap(Object.values),
				u = (d, I) => r().sendEvent(d, o({
					category: "user journey",
					product: "load balancing"
				}, I))
		},
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_AND_DEPLOY = "create load balancer", r.ANALYTICS = "read analytics", r.LOAD_BALANCING_TABLE = "click on expandable row on load balancing", r.POOL_TABLE = "click on expandable row on pool", r.CREATE_MONITOR_LINK = "click on create a monitor", r.EDIT_MONITOR_LINK = "click on edit a monitor", r.EDIT_MONITOR = "edit monitor", r.CREATE_MONITOR = "create monitor", r.CREATE_POOL_LINK = "click on create a pool", r.EDIT_POOL_LINK = "click on edit a pool", r.EDIT_POOL = "edit pool", r.CREATE_POOL = "create pool", r
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				N: function() {
					return o
				},
				X: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);
			let o = function(l) {
				return l.CREATE = "create waiting room", l.UPDATE = "update waiting room", l.EVENTS = "view waiting rooms events", l.ANALYTICS = "view waiting room analytics", l.GENERATE_PREVIEW = "generate waiting room preview link", l
			}({});
			const c = async l => {
				await r().sendEvent(l, {
					category: "user journey",
					product: "waiting room"
				})
			}
		},
		"../react/pages/turnstile/tracking.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				N3: function() {
					return p
				},
				P: function() {
					return n
				},
				Xh: function() {
					return f
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(a) {
				for (var i = 1; i < arguments.length; i++) {
					var m = arguments[i] != null ? Object(arguments[i]) : {},
						u = Object.keys(m);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(m).filter(function(d) {
						return Object.getOwnPropertyDescriptor(m, d).enumerable
					})), u.forEach(function(d) {
						c(a, d, m[d])
					})
				}
				return a
			}

			function c(a, i, m) {
				return i = l(i), i in a ? Object.defineProperty(a, i, {
					value: m,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[i] = m, a
			}

			function l(a) {
				var i = g(a, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function g(a, i) {
				if (typeof a != "object" || a === null) return a;
				var m = a[Symbol.toPrimitive];
				if (m !== void 0) {
					var u = m.call(a, i || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(a)
			}
			const s = "TURNSTILE";
			let p = function(a) {
				return a.OVERVIEW_PAGE = "view the overview page", a.LIST_OF_WIDGETS = "list of widgets", a.SOLVE_EVENTS = "list solve events", a.REDIRECT_TO_ADD_WIDGET = "redirect to Add Widget page", a.REDIRECT_TO_ANALYTICS = "redirect to Analytics page", a.REDIRECT_TO_EDIT_PAGE = "redirect to Edit page", a.OPEN_DELETE_MODAL = "view the delete modal for one widget", a.OPEN_DELETE_MODAL_MULTIPLE = "view the delete modal for multiple widgets", a.DELETE_WIDGET = "delete successfully widgets", a.LIST_OF_HOSTNAMES = "list hostnames", a.OPEN_ADD_WIDGET_PAGE = "view page to add widget", a.FEEDBACK_ADD = "view Feedback Add", a.SAVE_WIDGET = "save widget", a.ROTATE_KEYS = "rotate keys", a.OPEN_ROTATE_KEYS_MODAL = "view the rotate keys modal", a.GET_WIDGETS = "get widget details", a.OPEN_ANALYTICS_PAGE = "view analytics page", a.ANALYTICS_DATA = "list the analytics data", a
			}({});
			const f = ({
					name: a,
					product: i = s,
					category: m = "user journey",
					page: u,
					additionalData: d = {}
				}) => {
					r().sendEvent(a, o({
						category: m,
						page: u,
						product: i
					}, d || {}))
				},
				n = () => {
					var a;
					return (a = Object.values(p)) === null || a === void 0 ? void 0 : a.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return p
				},
				Ky: function() {
					return f
				},
				RJ: function() {
					return s
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e);

			function o(n) {
				for (var a = 1; a < arguments.length; a++) {
					var i = arguments[a] != null ? Object(arguments[a]) : {},
						m = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && m.push.apply(m, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), m.forEach(function(u) {
						c(n, u, i[u])
					})
				}
				return n
			}

			function c(n, a, i) {
				return a = l(a), a in n ? Object.defineProperty(n, a, {
					value: i,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : n[a] = i, n
			}

			function l(n) {
				var a = g(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function g(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var m = i.call(n, a || "default");
					if (typeof m != "object") return m;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(n)
			}
			let s = function(n) {
				return n.CREATE_GROUP_BUTTON = "click create user group button", n.GROUP_CREATE = "create user group", n.GROUP_UPDATE = "group name updated", n.CREATE_GROUP_CANCEL = "click cancel create group", n.GROUP_DETAIL = "click view user group details", n.GROUP_EDIT_BUTTON = "click edit user group name button", n.GROUP_EDIT_CANCEL = "click cancel edit user group name", n.GROUP_DELETE_BUTTON = "click group delete button", n.GROUP_DELETE = "delete user group", n.GROUP_DELETE_CANCEL = "click cancel delete group", n.GROUP_SEARCH = "search for user group", n.GROUP_TAB_NAVIGATE = "nagivate group tab", n.GROUP_TABLE_ROW_CLICK = "user group table row click", n.GROUP_TABLE_ROW_MEMBERS_CLICK = "user group table row members click", n.GROUP_TABLE_ROW_POLICIES_CLICK = "user group table row policies click", n.GROUP_TABLE_ROW_SETTINGS_CLICK = "user group table row settings click", n.BACK_BUTTON = "clicked back from user group detail", n.MEMBER_ADD = "add user group member", n.MEMBER_DELETE = "delete user group member", n.POLICY_SAVE = "user group policies save", n.POLICY_DELETE = "user group policies delete", n
			}({});
			const p = ({
					name: n,
					additionalData: a = {}
				}) => {
					r().sendEvent(n, o({}, a || {}))
				},
				f = () => {
					var n;
					return (n = Object.values(s)) === null || n === void 0 ? void 0 : n.flat()
				}
		},
		"../react/pages/welcome/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
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
		"../react/pages/zone-versioning/selectors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$e: function() {
					return k
				},
				$h: function() {
					return v
				},
				G: function() {
					return T
				},
				M3: function() {
					return A
				},
				Tr: function() {
					return P
				},
				UY: function() {
					return d
				},
				bH: function() {
					return a
				},
				fv: function() {
					return L
				},
				hF: function() {
					return O
				},
				iw: function() {
					return m
				},
				m7: function() {
					return n
				},
				re: function() {
					return _
				},
				tp: function() {
					return u
				}
			});
			var e = t("../react/app/redux/normalizer.js"),
				r = t("../../../../node_modules/reselect/lib/index.js"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				c = t("../react/app/components/SidebarNav/permissions.ts"),
				l = t("../react/common/selectors/entitlementsSelectors.ts");

			function g(b) {
				for (var D = 1; D < arguments.length; D++) {
					var R = arguments[D] != null ? Object(arguments[D]) : {},
						Z = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(R).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(R, oe).enumerable
					})), Z.forEach(function(oe) {
						s(b, oe, R[oe])
					})
				}
				return b
			}

			function s(b, D, R) {
				return D = p(D), D in b ? Object.defineProperty(b, D, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[D] = R, b
			}

			function p(b) {
				var D = f(b, "string");
				return typeof D == "symbol" ? D : String(D)
			}

			function f(b, D) {
				if (typeof b != "object" || b === null) return b;
				var R = b[Symbol.toPrimitive];
				if (R !== void 0) {
					var Z = R.call(b, D || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (D === "string" ? String : Number)(b)
			}
			const n = b => (0, o.nA)(b) ? (0, l.p1)(b) && (0, c.$n)(b, "zone_versioning", "versioning") : !1,
				a = b => b.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", a),
				m = b => b.zoneVersioning.zoneVersions,
				u = (0, e.P1)("zoneVersions", m),
				d = (0, r.P1)(u, b => {
					if (b) return b.filter(D => D.status == "V")
				}),
				I = b => b.zoneVersioning.environments,
				P = b => b.zoneVersioning.environments.isRequesting,
				h = (0, e.P1)("environments", I),
				v = (0, r.P1)(i, b => {
					if (b) {
						if (b.length === 1) return b[0];
						b.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${b.length}`))
					}
					return null
				}),
				O = (0, r.P1)(h, b => b ? b.environments : []),
				_ = b => {
					var D;
					return (D = b.zoneVersioning) === null || D === void 0 ? void 0 : D.zoneVersionSelector
				},
				T = (0, r.P1)(_, u, (b, D) => {
					if (!(b == null ? void 0 : b.isVersion) || !D) return null;
					const R = D.find(Z => {
						if (Z.version === b.selectedVersion && Z.locked) return !0
					});
					return R ? g({}, R, {
						isLocked: !0
					}) : null
				}),
				k = (0, r.P1)(u, O, (b, D) => !D || !b ? [] : b.map(R => {
					const Z = [];
					for (const oe in D) D[oe].version === R.version && Z.push(D[oe]);
					return g({}, R, {
						environments: Z
					})
				})),
				w = b => b.zoneVersioning.WAFMigrationStatus,
				A = (0, e.P1)("WAFMigrationStatus", w),
				L = b => b.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$2: function() {
					return w
				},
				CI: function() {
					return T
				},
				IS: function() {
					return s
				},
				L7: function() {
					return l
				},
				Lt: function() {
					return u
				},
				Oj: function() {
					return i
				},
				QV: function() {
					return d
				},
				S6: function() {
					return A
				},
				X$: function() {
					return O
				},
				X6: function() {
					return f
				},
				d4: function() {
					return m
				},
				fE: function() {
					return p
				},
				im: function() {
					return h
				},
				lv: function() {
					return I
				},
				rL: function() {
					return n
				},
				wW: function() {
					return g
				}
			});

			function e(L) {
				for (var b = 1; b < arguments.length; b++) {
					var D = arguments[b] != null ? Object(arguments[b]) : {},
						R = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(D).filter(function(Z) {
						return Object.getOwnPropertyDescriptor(D, Z).enumerable
					})), R.forEach(function(Z) {
						r(L, Z, D[Z])
					})
				}
				return L
			}

			function r(L, b, D) {
				return b = o(b), b in L ? Object.defineProperty(L, b, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[b] = D, L
			}

			function o(L) {
				var b = c(L, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function c(L, b) {
				if (typeof L != "object" || L === null) return L;
				var D = L[Symbol.toPrimitive];
				if (D !== void 0) {
					var R = D.call(L, b || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(L)
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
				g = 800,
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
				f = {
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
				a = {
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
					}, a),
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
				m = {
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
				u = {
					free: {
						minutes: 3e3
					},
					paid: {
						minutes: 6e3
					}
				},
				d = {
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
				h = "YYYY-MM-DD HH:mm:SS ZZ",
				v = "active",
				O = ["bundled", "unbound", "standard"],
				_ = null,
				T = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let k = function(L) {
				return L[L.NONE = 0] = "NONE", L[L.MISS = 1] = "MISS", L[L.EXPIRED = 2] = "EXPIRED", L[L.UPDATING = 3] = "UPDATING", L[L.STALE = 4] = "STALE", L[L.HIT = 5] = "HIT", L[L.IGNORED = 6] = "IGNORED", L[L.BYPASS = 7] = "BYPASS", L[L.REVALIDATED = 8] = "REVALIDATED", L[L.DYNAMIC = 9] = "DYNAMIC", L[L.STREAM_HIT = 10] = "STREAM_HIT", L[L.DEFERRED = 11] = "DEFERRED", L
			}({});
			const w = [k.HIT, k.STREAM_HIT];
			let A = function(L) {
				return L.SECRETS_STORE_ID = "store_id", L.SECRET_NAME = "secret_name", L
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return s
				},
				L: function() {
					return o
				},
				Q9: function() {
					return c
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
				o = (p, f, n) => `${n?`${n}.`:""}${p}.${r(f)}`,
				c = (p, f, n) => `https://${o(p,f,n)}`,
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
				g = "https://cron-triggers.cloudflareworkers.com",
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
					describeCron: `${g}/describe`,
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
					nextCron: `${g}/next`,
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
					validateCron: `${g}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersObservability: {
						telemetry: {
							query: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/query`,
							keys: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/keys`,
							values: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/values`,
							getParameters: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/parameters/${"generationId"}`,
							generateParameters: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/parameters`,
							parameterGenerationFeedback: (0, e.BC)`/accounts/${"accountId"}/workers/observability/telemetry/parameters/${"generationId"}/feedback`
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				MN: function() {
					return o
				},
				Yg: function() {
					return l
				},
				i$: function() {
					return c
				},
				l3: function() {
					return g
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = t.n(e);
			const o = async ([s, p]) => (await e.post("/graphql", {
				headers: {
					"content-type": "application/json"
				},
				body: JSON.stringify({
					query: s,
					variables: p
				})
			})).body, c = async (...s) => (await e.get(...s)).body, l = s => async (p, f) => {
				const n = await fetch(p, f).then(a => a.json());
				return s.assertDecode(n)
			}, g = async (...s) => (await c(...s)).result;
			E.ZP = {
				fetcher: s => Array.isArray(s) ? g(...s) : g(s)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function(W, E) {
				E()
			})(this, function() {
				"use strict";

				function W() {
					var t = !0,
						e = !1,
						r = null,
						o = {
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

					function c(I) {
						return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList" in I && "contains" in I.classList)
					}

					function l(I) {
						var P = I.type,
							h = I.tagName;
						return !!(h == "INPUT" && o[P] && !I.readOnly || h == "TEXTAREA" && !I.readOnly || I.isContentEditable)
					}

					function g(I) {
						I.getAttribute("is-focus-visible") !== "" && I.setAttribute("is-focus-visible", "")
					}

					function s(I) {
						I.getAttribute("is-focus-visible") === "" && I.removeAttribute("is-focus-visible")
					}

					function p(I) {
						c(document.activeElement) && g(document.activeElement), t = !0
					}

					function f(I) {
						t = !1
					}

					function n(I) {
						!c(I.target) || (t || l(I.target)) && g(I.target)
					}

					function a(I) {
						!c(I.target) || I.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), s(I.target))
					}

					function i(I) {
						document.visibilityState == "hidden" && (e && (t = !0), m())
					}

					function m() {
						document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
					}

					function u() {
						document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d)
					}

					function d(I) {
						I.target.nodeName.toLowerCase() !== "html" && (t = !1, u())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", f, !0), document.addEventListener("pointerdown", f, !0), document.addEventListener("touchstart", f, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", a, !0), document.addEventListener("visibilitychange", i, !0), m(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && E(W)
			})
		},
		"../react/utils/bootstrap.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				$8: function() {
					return r
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return c
				},
				gm: function() {
					return o
				}
			});
			const e = () => {
					var l, g, s;
					return (l = window) === null || l === void 0 || (g = l.bootstrap) === null || g === void 0 || (s = g.data) === null || s === void 0 ? void 0 : s.security_token
				},
				r = () => {
					var l, g, s;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (g = l.data) === null || g === void 0 || (s = g.user) === null || s === void 0 ? void 0 : s.id)
				},
				o = () => {
					var l, g;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (g = l.data) === null || g === void 0 ? void 0 : g.is_kendo)
				},
				c = () => {
					var l, g, s, p;
					return (l = window) === null || l === void 0 || (g = l.bootstrap) === null || g === void 0 || (s = g.data) === null || s === void 0 || (p = s.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				O5: function() {
					return c
				},
				Xm: function() {
					return o
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
				o = () => (r() || "").indexOf("C0002") !== -1,
				c = () => (r() || "").indexOf("C0003") !== -1,
				l = () => (r() || "").indexOf("C0004") !== -1,
				g = () => (r() || "").indexOf("C0005") !== -1,
				s = n => {
					const a = ".cloudflare.com";
					document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${a}`
				},
				p = () => {
					var n;
					const a = (n = window.OneTrust) === null || n === void 0 ? void 0 : n.getGeolocationData();
					return (a == null ? void 0 : a.country) || ""
				},
				f = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				AI: function() {
					return O
				},
				Kd: function() {
					return a
				},
				S8: function() {
					return v
				},
				ZW: function() {
					return p
				},
				ay: function() {
					return _
				},
				fh: function() {
					return T
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
					return u
				}
			});
			var e = t("../../../../node_modules/moment/moment.js"),
				r = t.n(e),
				o = t("../../../common/intl/intl-types/src/index.ts"),
				c = t("../../../common/util/types/src/utils/index.ts"),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				g = t("../../../../node_modules/cookie/index.js");
			const s = "cf-sync-locale-with-cps",
				p = o.Q.en_US,
				f = "en_US",
				n = "cf-locale";

			function a() {
				const A = (0, g.parse)(document.cookie);
				return l.Z.get(n) || A[n] || null
			}

			function i(A) {
				document.cookie = (0, g.serialize)(n, A, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(n, A)
			}

			function m() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const u = A => (0, c.Yd)(o.Q).find(L => o.Q[L] === A) || f,
				d = [],
				I = [],
				P = [o.Q.de_DE, o.Q.en_US, o.Q.es_ES, o.Q.fr_FR, o.Q.it_IT, o.Q.pt_BR, o.Q.ko_KR, o.Q.ja_JP, o.Q.zh_CN, o.Q.zh_TW],
				h = {
					test: [...P, ...I, ...d],
					development: [...P, ...I, ...d],
					staging: [...P, ...I, ...d],
					production: [...P, ...I]
				},
				v = A => {
					const L = o.Q[A];
					return h.production.includes(L)
				},
				O = () => Object.keys(o.Q).filter(A => v(A)),
				_ = A => {
					const L = o.Q[A];
					return I.includes(L)
				},
				T = A => k[A],
				k = {
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
				w = r().locale();
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
			}), r().locale(w)
		},
		"../react/utils/translator.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				QT: function() {
					return u
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
					return a
				},
				cC: function() {
					return i
				},
				oc: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				o = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(o),
				l = t("../flags.ts");
			const g = new r.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function s(d, ...I) {
				return g.t(d, ...I)
			}
			const p = g;

			function f(d, ...I) {
				return markdown(s(d, I))
			}

			function n(d) {
				if (Number(d) !== 0) {
					if (d % 86400 == 0) return s("time.num_days", {
						smart_count: d / 86400
					});
					if (d % 3600 == 0) return s("time.num_hours", {
						smart_count: d / 3600
					});
					if (d % 60 == 0) return s("time.num_minutes", {
						smart_count: d / 60
					})
				}
				return s("time.num_seconds", {
					smart_count: d
				})
			}

			function a(d, I) {
				return d in I ? I[d] : void 0
			}
			const i = o.Trans,
				m = o.I18n,
				u = o.useI18n
		},
		"../react/utils/url.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Ct: function() {
					return w
				},
				Fl: function() {
					return q
				},
				KT: function() {
					return j
				},
				NF: function() {
					return v
				},
				Nw: function() {
					return T
				},
				Pd: function() {
					return _
				},
				Uh: function() {
					return x
				},
				cm: function() {
					return I
				},
				e1: function() {
					return k
				},
				el: function() {
					return ce
				},
				hW: function() {
					return Q
				},
				pu: function() {
					return ae
				},
				qR: function() {
					return oe
				},
				td: function() {
					return O
				},
				uW: function() {
					return H
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				g = t("../react/pages/zoneless-workers/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				p = t("../react/pages/d1/routes.ts"),
				f = t("../react/pages/images/routes.ts");

			function n(M) {
				for (var $ = 1; $ < arguments.length; $++) {
					var J = arguments[$] != null ? Object(arguments[$]) : {},
						ue = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && ue.push.apply(ue, Object.getOwnPropertySymbols(J).filter(function(se) {
						return Object.getOwnPropertyDescriptor(J, se).enumerable
					})), ue.forEach(function(se) {
						a(M, se, J[se])
					})
				}
				return M
			}

			function a(M, $, J) {
				return $ = i($), $ in M ? Object.defineProperty(M, $, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[$] = J, M
			}

			function i(M) {
				var $ = m(M, "string");
				return typeof $ == "symbol" ? $ : String($)
			}

			function m(M, $) {
				if (typeof M != "object" || M === null) return M;
				var J = M[Symbol.toPrimitive];
				if (J !== void 0) {
					var ue = J.call(M, $ || "default");
					if (typeof ue != "object") return ue;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return ($ === "string" ? String : Number)(M)
			}
			const {
				endsWithSlash: u
			} = o.default, d = new RegExp(/([0-9a-z]{32})/g), I = M => M == null ? void 0 : M.replace(d, ":id"), P = (M, $) => {
				const J = M.replace(u, "").split("/");
				return J.slice(0, 2).concat([$]).concat(J.slice(3)).join("/")
			}, h = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), v = M => `/${M.replace(u,"").replace(/^\//,"")}`, O = M => T("add-site", M), _ = M => T("billing", M), T = (M, $) => $ ? `/${$}${M?`/${M}`:""}` : `/?to=/:account/${M}`, k = () => {
				const M = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return M ? M[1] : null
			}, w = (M, $) => r().stringify(n({}, r().parse(M), $)), A = (M = "") => M.toString().replace(/([\/]{1,})$/, ""), L = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], b = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, D = /^\/(\w{32,})(\/[^.]*)?/, R = M => L.includes(M), Z = M => !R(M), oe = M => !R(M) && D.test(M), ce = M => !R(M) && b.test(M), le = M => b.exec(M), Q = M => {
				if (ce(M)) return M.split("/").filter($ => $.length > 0)[1]
			}, K = M => D.exec(M), H = M => {
				if (oe(M)) {
					const $ = K(M);
					if ($) return $[1]
				}
			}, N = M => oe(M) && M.split("/")[2] === "register-domain", U = M => N(M) ? M.split("/") : null, S = M => {
				if (ce(M)) {
					const [, , , $, J, ue, se, pe] = M.split("/");
					return $ === "traffic" && J === "load-balancing" && ue === "pools" && se === "edit" && pe
				}
			}, x = M => {
				const $ = U(M);
				if ($) return $[3]
			}, G = (M, $) => {
				var J, ue;
				return ((J = M.pattern.match(/\:/g)) !== null && J !== void 0 ? J : []).length - ((ue = $.pattern.match(/\:/g)) !== null && ue !== void 0 ? ue : []).length
			}, ne = [...Object.values(c.C), ...Object.values(f.KJ), ...Object.values(l._j), ...Object.values(g._j), ...Object.values(s._j), ...Object.values(p._)].sort(G);

			function q(M) {
				if (!Z(M)) return M;
				for (const pe of ne)
					if (pe.expression.test(M)) return pe.pattern;
				const $ = U(M);
				if ($) {
					const [, , pe, , ...te] = $;
					return `/:accountId/${pe}/:domainName/${te.join("/")}`
				}
				if (S(M)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const ue = le(M);
				if (ue) {
					const [, , , , pe] = ue;
					return `/:accountId/:zoneName${pe||""}`
				}
				const se = K(M);
				if (se) {
					const [, , pe] = se;
					return `/:accountId${pe||""}`
				}
				return M
			}

			function ae(M) {
				if (!!M) try {
					const J = M.split(".").pop();
					if (J && J.length > 0) return J
				} catch {}
			}

			function j(M, $ = document.location.href) {
				try {
					const J = new URL(M),
						ue = new URL($);
					if (J.origin === ue.origin) return `${J.pathname}${J.search}${J.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return s
				},
				y: function() {
					return p
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				c = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				l = t.n(c);
			const g = /^\/domainconnect\/v2\/domaintemplates\//i,
				s = "domain-connect-redirect",
				p = () => {
					const f = (0, c.useLocation)();
					(0, e.useEffect)(() => {
						g.test(f.pathname) && o.Z.set(s, f, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = t("../utils/zaraz.ts")
		},
		"../react/utils/zoneLevelAccess.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				P: function() {
					return c
				},
				b: function() {
					return l
				}
			});
			var e = t("../react/common/hooks/useGate.ts"),
				r = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");

			function o() {
				var g, s, p, f, n, a;
				return (g = window) === null || g === void 0 || (s = g.bootstrap) === null || s === void 0 || (p = s.data) === null || p === void 0 || (f = p.user) === null || f === void 0 || (n = f.betas) === null || n === void 0 || (a = n.some) === null || a === void 0 ? void 0 : a.call(n, i => i === "zone_level_access_beta")
			}

			function c() {
				const g = !!(0, e.Z)("zone-level-access");
				return o() || g
			}

			function l(g) {
				const s = !!(0, r.z1)("zone-level-access")(g);
				return o() || s
			}
		},
		"../utils/getDashVersion.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				p: function() {
					return o
				},
				t: function() {
					return r
				}
			});
			var e = t("../../../../node_modules/cookie/index.js");
			const r = () => {
					var c, l;
					return (c = window) === null || c === void 0 || (l = c.build) === null || l === void 0 ? void 0 : l.dashVersion
				},
				o = () => {
					var c;
					return ((0, e.parse)((c = document) === null || c === void 0 ? void 0 : c.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Wi: function() {
					return y
				},
				IM: function() {
					return Lt
				},
				yV: function() {
					return jt
				},
				Ug: function() {
					return Bt
				},
				v_: function() {
					return Dt
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				o = t("../react/utils/bootstrap.ts"),
				c = t("../react/app/providers/storeContainer.js"),
				l = t("../react/common/selectors/languagePreferenceSelector.ts"),
				g = t("../flags.ts"),
				s = t("../../../../node_modules/cookie/index.js"),
				p = t("../react/utils/url.ts"),
				f = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				a = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				m = t("../utils/getDashVersion.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				d = t("../react/common/selectors/entitlementsSelectors.ts"),
				I = t("../react/common/utils/getEnvironment.ts");

			function P(C) {
				for (var F = 1; F < arguments.length; F++) {
					var re = arguments[F] != null ? Object(arguments[F]) : {},
						ge = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(re).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(re, Ee).enumerable
					})), ge.forEach(function(Ee) {
						h(C, Ee, re[Ee])
					})
				}
				return C
			}

			function h(C, F, re) {
				return F = v(F), F in C ? Object.defineProperty(C, F, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[F] = re, C
			}

			function v(C) {
				var F = O(C, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function O(C, F) {
				if (typeof C != "object" || C === null) return C;
				var re = C[Symbol.toPrimitive];
				if (re !== void 0) {
					var ge = re.call(C, F || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(C)
			}
			const _ = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				T = (0, a.Z)(C => {
					try {
						return _.assertDecode((0, s.parse)(C))
					} catch (F) {
						return console.error(F), {}
					}
				}),
				k = C => (F, re, ge) => {
					try {
						const Ve = window.location.pathname,
							Ze = (0, c.bh)().getState(),
							at = T(document.cookie),
							ut = P({
								page: (0, p.Fl)(ge.page || window.location.pathname),
								dashVersion: (0, m.t)(),
								environment: (0, I.Z)()
							}, at);
						if (F === "identify") {
							var Ee, Re;
							const nt = {
								gates: (0, i.T2)(Ze) || {},
								country: (Ee = t.g) === null || Ee === void 0 || (Re = Ee.bootstrap) === null || Re === void 0 ? void 0 : Re.ip_country
							};
							return C(F, re, P({}, ut, nt, ge))
						} else {
							const nt = {
								accountId: (0, p.uW)(Ve),
								zoneName: (0, p.hW)(Ve),
								domainName: (0, p.Uh)(Ve)
							};
							if ((0, p.qR)(Ve)) {
								var ze;
								const Ge = (0, u.D0)(Ze);
								nt.isEntAccount = !!(Ge == null || (ze = Ge.meta) === null || ze === void 0 ? void 0 : ze.has_enterprise_zones) || (0, d.p1)(Ze)
							}
							if ((0, p.el)(Ve)) {
								var Je;
								const Ge = (0, f.nA)(Ze);
								nt.zoneId = Ge == null ? void 0 : Ge.id, nt.plan = Ge == null || (Je = Ge.plan) === null || Je === void 0 ? void 0 : Je.legacy_id
							}
							return C(F, re, P({}, ut, nt, ge))
						}
					} catch (Ve) {
						return console.error(Ve), C(F, re, ge)
					}
				},
				w = C => async (F, re, ge) => {
					try {
						return await C(F, re, ge)
					} catch (Ee) {
						if (console.error(Ee), !Dt()) throw Ee;
						return {
							status: "rejected",
							reason: Ee
						}
					}
				};
			var A = t("../react/app/components/AccountHome/tracking.ts"),
				L = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				b = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				D = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				R = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				Z = t("../react/common/middleware/sparrow/errors.ts"),
				oe = t("../react/pages/abuse/constants.ts"),
				ce = t("../react/pages/caching/tracking.tsx"),
				le = t("../react/pages/dns/dns-records/tracking.ts"),
				Q = t("../react/pages/home/alerts/tracking.ts"),
				K = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				H = t("../react/pages/home/configurations/lists/tracking.ts"),
				N = t("../react/pages/home/domain-registration/tracking.ts"),
				U = t("../react/pages/home/members/sparrowEvents.ts"),
				S = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				x = t("../react/pages/hyperdrive/tracking.ts"),
				G = t("../react/pages/magic/network-monitoring/constants.ts"),
				ne = t("../react/pages/magic/overview/tracking.ts"),
				q = t("../react/pages/magic/packet-captures/constants.ts"),
				ae = t("../react/pages/page-rules/tracking.ts"),
				j = t("../react/pages/pages/constants.ts"),
				M = t("../react/pages/pipelines/tracking.ts"),
				$ = t("../react/pages/profile/tracking.ts"),
				J = t("../react/pages/secrets-store/resources/constants.ts"),
				ue = t("../react/pages/security-center/BlockedContent/constants.ts"),
				se = t("../react/pages/security-center/tracking.ts"),
				pe = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
				te = t("../react/pages/security/api-shield/tracking.ts"),
				ye = t("../react/pages/security/bots/tracking.ts"),
				Oe = t("../react/pages/security/overview/resources/constants.ts"),
				Ie = t("../react/pages/security/page-shield/resources/index.ts"),
				Le = t("../react/pages/security/resources/constants.tsx"),
				Se = t("../react/pages/security/security-rules/resources/sparrowEvents.ts"),
				ke = t("../react/pages/security/settings/index.tsx"),
				qe = t("../react/pages/security/waf/managed-rules/resources/tracking.ts"),
				Be = t("../react/pages/shared-config/sparrowEvents.tsx"),
				$e = t("../react/pages/spectrum/tracking.tsx"),
				Ye = t("../react/pages/traffic/argo/tracking.ts"),
				Y = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				ve = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				Me = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Fe = t("../react/pages/turnstile/tracking.ts"),
				lt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ce = t("../react/pages/zoneless-workers/constants.ts");
			const X = ((C, F, ...re) => n.eg.union([n.eg.literal(C), n.eg.literal(F), ...re.map(ge => n.eg.literal(ge))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", A.gX.SPARROW_PROJECTS_TABLE_CLICK, A.gX.SPARROW_EMPTY_STATE_CTA_CLICK, A.gX.SPARROW_PRODUCT_CARD_CLICK, A.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, A.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, A.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, A.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, A.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, A.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, A.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ce.QV.clickedDownloadAnalytics, Ce.QV.clickedPrintAnalytics, Ce.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ce.QV.addWCITriggerToExistingWorker, Ce.QV.updateWCITrigger, Ce.QV.deleteWCITrigger, Ce.QV.addWCITriggerToNewWorker, Ce.QV.createWCIBuildForNewWorker, Ce.QV.completedWCIBuildForNewWorker, Ce.QV.changedDefaultConfigurations, Ce.QV.clickElement, j.QV.toggledPagesSmartPlacement, j.QV.downloadDemoProject, Ce.QV.clickCreateWorkerFromRepoNextStep, Ce.QV.clickCreateWorkerFromRepoPreviousStep, Ce.QV.clickCreateNewSCMConnection, Ce.QV.redirectFromSCMOAuth, Ce.QV.clickSubmitError, Ce.QV.selectTemplate, Ce.QV.clickedListTemplates, Ce.QV.clickedImportRepository, Ce.QV.clickedClonePublicRepositoryFromUrl, Ce.QV.templateStubWorkerCreated, Ce.QV.templateStubWorkerCreationFailed, Ce.QV.templateRepositoryCreated, Ce.QV.templateRepositoryCreationFailed, Ce.QV.copyTemplateC3Command, Ce.QV.templateDeployClick, Ce.QV.reauthenticateGithubModalShown, Ce.QV.updateGithubPermissionsClicked, Ce.QV.D2W_importRepository, Ce.QV.D2W_stubWorkerCreated, Ce.QV.D2W_stubWorkerCreationFailed, Ce.QV.D2W_repositoryCreated, Ce.QV.D2W_repositoryCreationFailed, Ce.QV.D2W_resourcesProvisioned, Ce.QV.D2W_resourceProvisioningFailed, Ce.QV.D2W_githubAPIRateLimitReached, Ce.QV.createResource, Ce.QV.deleteResource, Ce.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", ye.N3.INITIAL_FETCH_SCORES, ye.N3.FETCH_CONFIGURATION, ye.N3.INITIAL_FETCH_TIME_SERIES, ye.N3.INITIAL_FETCH_ATTRIBUTES, ye.N3.UPDATE_SETTINGS, ye.N3.DELETE_RULE, ye.N3.UPDATE_RULE, ye.N3.FETCH_RULES, ye.N3.CONFIGURE_BOT_MANAGEMENT, ye.N3.WAF_RULES_REDIRECT, S.F.TOGGLE_TCP_PROTECTION, S.F.GET_TCP_PROTECTION_PREFIXES, S.F.CREATE_TCP_PROTECTION_PREFIXES, S.F.CREATE_TCP_PROTECTION_PREFIX, S.F.UPDATE_TCP_PROTECTION_PREFIX, S.F.DELETE_TCP_PROTECTION_PREFIX, S.F.DELETE_TCP_PROTECTION_PREFIXES, S.F.GET_TCP_PROTECTION_ALLOWLIST, S.F.CREATE_TCP_PROTECTION_ALLOWLIST, S.F.UPDATE_TCP_PROTECTION_ALLOWLIST, S.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, S.F.DELETE_TCP_PROTECTION_ALLOWLIST, S.F.GET_SYN_PROTECTION_RULES, S.F.GET_SYN_PROTECTION_RULE, S.F.CREATE_SYN_PROTECTION_RULE, S.F.UPDATE_SYN_PROTECTION_RULE, S.F.DELETE_SYN_PROTECTION_RULE, S.F.GET_TCP_FLOW_PROTECTION_RULES, S.F.GET_TCP_FLOW_PROTECTION_RULE, S.F.CREATE_TCP_FLOW_PROTECTION_RULE, S.F.UPDATE_TCP_FLOW_PROTECTION_RULE, S.F.DELETE_TCP_FLOW_PROTECTION_RULE, S.F.GET_SYN_PROTECTION_FILTERS, S.F.GET_SYN_PROTECTION_FILTER, S.F.CREATE_SYN_PROTECTION_FILTER, S.F.UPDATE_SYN_PROTECTION_FILTER, S.F.DELETE_SYN_PROTECTION_FILTER, S.F.GET_TCP_FLOW_PROTECTION_FILTERS, S.F.GET_TCP_FLOW_PROTECTION_FILTER, S.F.CREATE_TCP_FLOW_PROTECTION_FILTER, S.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, S.F.DELETE_TCP_FLOW_PROTECTION_FILTER, S.F.GET_DNS_PROTECTION_RULES, S.F.GET_DNS_PROTECTION_RULE, S.F.CREATE_DNS_PROTECTION_RULE, S.F.UPDATE_DNS_PROTECTION_RULE, S.F.DELETE_DNS_PROTECTION_RULE, Ie.FV.MANAGE_PAGE_SHIELD_POLICY, Ie.FV.CONFIGURE_PAGE_SHIELD, Ie.FV.VIEW_DETECTED_CONNECTIONS, Ie.FV.VIEW_DETECTED_SCRIPTS, Ie.FV.VIEW_PAGE_SHIELD_POLICIES, Ie.FV.VIEW_PAGE_SHIELD_SETTINGS, Ie.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Ie.FV.SHOW_MUTABLE_VERSION_TOOLTIP, H.y.CREATE_LIST, H.y.DELETE_LIST, H.y.ADD_LIST_ITEM, H.y.DELETE_LIST_ITEM, x.KO.PURCHASE_WORKERS_PAID, x.KO.LIST_CONFIGS, x.KO.SEARCH_CONFIGS, x.KO.CREATE_HYPERDRIVE_CONFIG, x.KO.VIEW_CONFIG_DETAILS, x.KO.UPDATE_CACHING_SETTINGS, x.KO.DELETE_HYPERDRIVE_CONFIG, x.KO.CLICK_HYPERDRIVE_DOCUMENTATION, x.KO.CLICK_GET_STARTED_GUIDE, x.KO.CLICK_CONNECTIVITY_GUIDES, x.KO.CLICK_QUICK_LINK, x.KO.CLICK_DISCORD, x.KO.CLICK_COMMUNITY, $e.N.CNAME, $e.N.IP_ADDRESS, $e.N.LB, $e.N.UPDATE_CNAME, $e.N.UPDATE_IP_ADDRESS, $e.N.UPDATE_LB, $e.N.DISABLE, ce.N.TIERED_CACHE, ce.N.CACHE_PURGE, ce.N.CACHE_ANALYTICS, ...(0, Fe.P)(), ...(0, R.x4)(), ...(0, ke.m8)(), ...(0, U.SH)(), ...(0, lt.Ky)(), ...(0, b.Cf)(), Me.N.CREATE, Me.N.EVENTS, Me.N.ANALYTICS, Me.N.UPDATE, Me.N.GENERATE_PREVIEW, se.RY.INITIATE_URL_SCAN, se.RY.LOAD_SCAN_INFO, se.Ev.LOAD_THREAT_EVENTS, se.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, se.Ev.THREAT_EVENTS_FILTERS, se.Ev.ABUSE_REPORT_BUTTON_CLICK, se.Ev.ABUSE_REPORT_SUBMIT_CLICK, se.Ev.ABUSE_REPORT_SUBMIT_FAILED, se.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, se.v9.EXPAND_INSIGHT_ROW, se.v9.ONE_CLICK_RESOLVE_BUTTON, se.v9.FOLLOW_RESOLVE_URL, se.v9.MANAGE_INSIGHT, se.v9.CLICK_SCAN_NOW, se.v9.CLICK_EXPORT_INSIGHTS, se.v9.BULK_ARCHIVE, se.v9.CLICK_DETAILS_BUTTON, te.Fj[te.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, te.Fj[te.kq.ENDPOINT_MANAGEMENT].detailedMetrics, te.Fj[te.kq.ENDPOINT_MANAGEMENT].createEndpoint, te.Fj[te.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, te.Fj[te.kq.ENDPOINT_MANAGEMENT].deployRouting, te.Fj[te.kq.ENDPOINT_MANAGEMENT].deleteRouting, te.Fj[te.kq.API_DISCOVERY].viewDiscoveredEndpoints, te.Fj[te.kq.API_DISCOVERY].saveDiscoveredEndpoint, te.Fj[te.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, te.Fj[te.kq.SCHEMA_VALIDATION].viewSchemasList, te.Fj[te.kq.SCHEMA_VALIDATION].uploadSchema, te.Fj[te.kq.SCHEMA_VALIDATION].viewSchemaAdoption, te.Fj[te.kq.SCHEMA_VALIDATION].downloadSchema, te.Fj[te.kq.SCHEMA_VALIDATION].deleteSchema, te.Fj[te.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, te.Fj[te.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, te.Fj[te.kq.SEQUENCE_ANALYTICS].viewSequencesPage, te.Fj[te.kq.JWT_VALIDATION].viewJWTRules, te.Fj[te.kq.JWT_VALIDATION].addJWTRule, te.Fj[te.kq.JWT_VALIDATION].editJWTRule, te.Fj[te.kq.JWT_VALIDATION].deleteJWTRule, te.Fj[te.kq.JWT_VALIDATION].reprioritizeJWTRule, te.Fj[te.kq.JWT_VALIDATION].viewJWTConfigs, te.Fj[te.kq.JWT_VALIDATION].addJWTConfig, te.Fj[te.kq.JWT_VALIDATION].editJWTConfig, te.Fj[te.kq.JWT_VALIDATION].deleteJWTConfig, te.Fj[te.kq.SETTINGS].redirectToFirewallRulesTemplate, te.Fj[te.kq.SETTINGS].redirectToPages, te.Fj[te.kq.SETTINGS].listSessionIdentifiers, te.Fj[te.kq.SETTINGS].listRequestsContainingSessionIdentifiers, te.Fj[te.kq.SETTINGS].addOrRemoveSessionIdentifiers, te.Fj[te.kq.SETTINGS].redirectToCustomRules, te.Fj[te.kq.SETTINGS].listAllFallthroughSchemas, te.Fj[te.kq.SEQUENCE_RULES].listSequenceRules, te.Fj[te.kq.SEQUENCE_RULES].deleteSequenceRule, te.Fj[te.kq.SEQUENCE_RULES].reorderSequenceRule, te.Fj[te.kq.SEQUENCE_RULES].createSequenceRule, te.Fj[te.kq.SEQUENCE_RULES].editSequenceRule, ve.Z.ANALYTICS, ve.Z.CREATE_AND_DEPLOY, ve.Z.CREATE_MONITOR_LINK, ve.Z.CREATE_MONITOR, ve.Z.CREATE_POOL_LINK, ve.Z.CREATE_POOL, ve.Z.EDIT_MONITOR, ve.Z.EDIT_POOL, ve.Z.LOAD_BALANCING_TABLE, ve.Z.POOL_TABLE, ve.Z.EDIT_MONITOR_LINK, ve.Z.EDIT_POOL_LINK, ...Y.eT, Q.y.SECONDARY_DNS_NOTIFICATION_CREATE, Q.y.SECONDARY_DNS_NOTIFICATION_UPDATE, Q.y.SECONDARY_DNS_NOTIFICATION_DELETE, le.U.ZONE_TRANSFER_SUCCESS, le.U.DNS_RECORD_CREATE, le.U.DNS_RECORD_UPDATE, le.U.DNS_RECORD_DELETE, K.Y.PEER_DNS_CREATE, K.Y.PEER_DNS_UPDATE, K.Y.PEER_DNS_DELETE, K.Y.ZONE_TRANSFER_ENABLE, K.Y.ZONE_TRANSFER_DISABLE, Ye.V.ARGO_ENABLEMENT, Ye.V.ARGO_GEO_ANALYTICS_FETCH, Ye.V.ARGO_GLOBAL_ANALYTICS_FETCH, q.X.VIEW_BUCKETS_LIST, q.X.CREATE_BUCKET, q.X.VALIDATE_BUCKET, q.X.DELETE_BUCKET, q.X.VIEW_CAPTURES_LIST, q.X.CREATE_SIMPLE_CAPTURE, q.X.CREATE_FULL_CAPTURE, q.X.VIEW_FULL_CAPTURE, q.X.DOWNLOAD_SIMPLE_CAPTURE, G.bK.VIEW_RULES, G.bK.CREATE_RULE, G.bK.UPDATE_RULE, G.bK.DELETE_RULE, G.bK.VIEW_CONFIGURATION, G.bK.CREATE_CONFIGURATION, G.bK.UPDATE_CONFIGURATION, G.bK.DELETE_CONFIGURATION, ne.r8.VIEW_ALERTS, ne.r8.VIEW_ALERTS_HISTORY, ne.r8.MAGIC_OVERVIEW_ANALYTICS, ne.VZ.CREATE_SITE, ne.VZ.CREATE_TUNNEL, ne.VZ.CREATE_STATIC_ROUTE, pe.DC.CLICK_ADAPTIVE_SAMPLING, pe.DC.CLICK_TO_LOG_EXPLORER_BANNER, pe.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, pe.DC.CLICK_SWITCH_TO_RAW_LOGS, pe.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", N.U.REGISTER_DOMAIN_SEARCH_SUBMIT, N.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, N.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, N.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, N.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, N.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, N.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, N.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, N.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, N.U.REGISTER_DOMAIN_CHECKOUT_ERROR, N.U.TRANSFER_DOMAIN_CHANGE_STEP, N.U.RENEW_DOMAIN_COMPLETED, N.U.RESTORE_DOMAIN_INIT, N.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, N.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, N.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, N.U.RESTORE_DOMAIN_FAILURE, N.U.RESTORE_DOMAIN_COMPLETED, N.U.DOMAIN_DELETE_INIT, N.U.DOMAIN_DELETE_COMPLETED, N.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, N.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, N.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, N.U.DOMAIN_DELETE_CONFIRM_DELETE, N.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, N.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, N.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, N.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, N.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, N.U.DOMAIN_MOVE_START_FLOW, N.U.DOMAIN_MOVE_OPEN_DOCS, N.U.DOMAIN_MOVE_CLOSE_FLOW, N.U.DOMAIN_MOVE_PROGRESS_FLOW, N.U.DOMAIN_MOVE_SUBMIT, N.U.DOMAIN_MOVE_INITIATE_SUCCESS, N.U.DOMAIN_MOVE_INITIATE_ERROR, N.U.DOMAIN_MOVE_CANCEL, N.U.DOMAIN_MOVE_CANCEL_SUCCESS, N.U.DOMAIN_MOVE_CANCEL_ERROR, N.U.ACTION_CENTER_NAVIGATE, N.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, N.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, N.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, J.z3.CREATE_SECRET, J.z3.DELETE_SECRET, J.z3.BIND_SECRET, J.z3.DUPLICATE_SECRET, J.z3.EDIT_SECRET, M.KO.CLICK_GET_STARTED_GUIDE, M.KO.CLICK_PIPELINE_DOCUMENTATION, M.KO.CLICK_QUICK_LINK, M.KO.CREATE_PIPELINE, M.KO.DELETE_PIPELINE, M.KO.LIST_PIPELINES, M.KO.VIEW_PIPELINE, L.S.EXISTING_DOMAIN, L.S.NEW_DOMAIN, L.S.WAF_RULESET, L.S.WORKERS, L.S.PAGES, L.S.R2, L.S.ACCOUNT_MEMBERS, ae._.TEMPLATE_PRODUCT_SELECTED, ae._.TEMPLATE_SELECTED, ae._.TEMPLATE_SAVE_DRAFT, ae._.TEMPLATE_CANCEL, ae._.TEMPLATE_DEPLOY, Be.D.CLICK_GO_BACK_SHARE_MODAL, Be.D.CLICK_MENU_ITEM_SHARE, Be.D.CLICK_ON_CANCEL_SHARE_MODAL, Be.D.CLICK_ON_CLOSE_SHARE_MODAL, Be.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Be.D.CLICK_ON_DELETE_RULESET, Be.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Be.D.CLICK_ON_EDIT_SHARE_PERMISSION, Be.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Be.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Be.D.CLICK_ON_SHARE_TABLE_ROW, Le.pR.CLICK_GEOGRAPHICAL_TEMPLATE, Le.pR.CLICK_IP_TEMPLATE, Le.pR.CLICK_USER_AGENT_TEMPLATE, Le.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ke.vc.CREATED, ke.vc.ENABLED, ke.vc.DISABLED, ke.vc.DELETED, ke.vc.UPDATED, ke.vc.DOWNLOADED, ue.Gk.REQUEST_REVIEW, ue.Gk.COPY_URL, D.v.FIELD, D.v.OPERATOR, qe.Vj.SHOW_LCC_MIGRATION_BANNER, qe.Vj.CLICK_LCC_DOCUMENTATION, qe.Vj.CLICK_LCC_UPGRADE_GUIDE, qe.Vj.SHOW_LCC_MIGRATION_WARNING, Se.y.CLICK_DISMISS_INELIGIBILITY, Se.y.CLICK_NEXT_STEP, Se.y.CLICK_OPT_IN, Se.y.CLICK_OPT_IN_BUTTON, Se.y.CLICK_OPT_OUT_BUTTON, Se.y.DISPLAY_MODAL, Se.y.DISPLAY_OPT_OUT_MODAL, Se.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, Se.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Oe.AZ.LOAD_INSIGHTS, Oe.AZ.OPEN_SIDE_MODAL_INSIGHT, Oe.AZ.CLOSE_SIDE_MODAL_INSIGHT, Oe.AZ.CLICK_ACTION_INSIGHT, pe.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, pe.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, pe.DC.OPEN_SIDE_DRAWER, pe.DC.CLOSE_SIDE_DRAWER, $.QV[$.Xn].clickLoginFromMobileApp2fa, $.QV[$.Xn].clickTryOther2FAMethodOrBackupCode, $.QV[$.Xn].clickTryRecovery, $.QV[$.xq].clickRegenerateBackupCodes, oe.Vq.APPEAL_MITIGATION),
				me = n.eg.exactStrict(n.eg.object({
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
					resourceType: n.eg.string.optional,
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
				he = (C, F) => {
					const [re, ge] = Ue(F);
					let Ee, Re;
					return (0, n.nM)(X.decode(C)) && (Ee = new Z.Uh(C)), ge && ge.length > 0 && (Re = new Z.oV(C, ge)), [re, Ee, Re]
				},
				Ue = C => {
					const F = me.decode(C);
					if ((0, n.nM)(F)) {
						const re = F.left.map(({
							context: ge
						}) => ge.map(({
							key: Ee
						}) => Ee)).reduce((ge, Ee) => ge.concat(Ee), []).filter(ge => ge in C);
						return [Pe(re, C), re]
					}
					return [C, []]
				},
				Pe = (C, F) => Object.entries(F).reduce((re, [ge, Ee]) => (C.includes(ge) || (re[ge] = Ee), re), {}),
				be = C => (F, re, ge) => {
					const [Ee, Re, ze] = he(re, ge);
					if (Re) throw Re;
					return ze && console.error(ze), C(F, re, Ee)
				};
			var Ne = t("../react/utils/zaraz.ts");
			const gt = {
					identify: !0
				},
				rt = C => (F, re, ge) => (gt[re] || Ne.tg === null || Ne.tg === void 0 || Ne.tg.track(re, ge), C(F, re, ge));
			var _t = t("../react/common/selectors/userSelectors.ts"),
				Et = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function st(C) {
				for (var F = 1; F < arguments.length; F++) {
					var re = arguments[F] != null ? Object(arguments[F]) : {},
						ge = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(re).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(re, Ee).enumerable
					})), ge.forEach(function(Ee) {
						kt(C, Ee, re[Ee])
					})
				}
				return C
			}

			function kt(C, F, re) {
				return F = We(F), F in C ? Object.defineProperty(C, F, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[F] = re, C
			}

			function We(C) {
				var F = mt(C, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function mt(C, F) {
				if (typeof C != "object" || C === null) return C;
				var re = C[Symbol.toPrimitive];
				if (re !== void 0) {
					var ge = re.call(C, F || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(C)
			}
			const Xe = new Set(["cf_argo", "load_balancing_basic_plus"]),
				et = new Set(["pro", "business"]),
				tt = ({
					price: C,
					ratePlanId: F,
					ratePlanName: re,
					frequency: ge,
					isNewSubscription: Ee
				}) => ({
					event: "purchase",
					new_subscription: Ee,
					ecommerce: {
						transaction_id: (0, Et.Z)(),
						currency: "USD",
						page_timestamp: new Date().toISOString(),
						value: C
					},
					items: [{
						item_id: F,
						item_name: re || F,
						frequency: ge,
						price: C
					}]
				}),
				z = C => {
					const {
						price: F,
						frequency: re,
						plan: ge,
						ratePlanId: Ee,
						ratePlanName: Re
					} = C;
					return et.has(ge) ? st({}, tt({
						price: F,
						ratePlanId: Ee,
						ratePlanName: Re,
						frequency: re,
						isNewSubscription: !0
					}), {
						label: ge
					}) : void 0
				},
				de = C => {
					const {
						price: F,
						frequency: re,
						ratePlan: ge,
						ratePlanName: Ee
					} = C;
					return Xe.has(ge) ? st({}, tt({
						price: F,
						ratePlanId: ge,
						ratePlanName: Ee,
						frequency: re,
						isNewSubscription: !0
					}), {
						label: ge
					}) : void 0
				},
				_e = C => {
					const {
						price: F,
						frequency: re,
						plan: ge,
						ratePlanId: Ee,
						ratePlanName: Re,
						label: ze
					} = C;
					return et.has(ge) ? st({}, tt({
						price: F,
						frequency: re,
						ratePlanId: Ee,
						ratePlanName: Re,
						isNewSubscription: !1
					}), {
						label: ze || ge
					}) : void 0
				},
				Te = C => {
					const {
						price: F,
						frequency: re,
						ratePlan: ge,
						ratePlanName: Ee,
						oldRatePlan: Re
					} = C;
					return Xe.has(ge) ? st({}, tt({
						price: F,
						frequency: re,
						ratePlanId: ge,
						ratePlanName: Ee,
						isNewSubscription: !1
					}), {
						label: `${Re}->${ge}`
					}) : void 0
				},
				De = "pageview",
				je = "create zone",
				ot = "create user",
				ct = "Plan Purchase Success",
				Ct = "Product Purchase Success",
				ft = "Plan Update Success",
				Tt = "Product Update Success",
				He = {
					[De]: !0,
					[je]: !0,
					[ot]: !0,
					[ct]: !0,
					[Ct]: !0,
					[ft]: !0,
					[Tt]: !0
				},
				Ot = C => {
					var F;
					return !!((F = C.gates.assignments) === null || F === void 0 ? void 0 : F["dx-enable-google-tag-manager"])
				},
				Mt = C => {
					const F = /\|MCMID\|([0-9]+)\|/,
						re = C.match(F);
					return re ? re[1] : void 0
				},
				It = C => {
					var F;
					const {
						deviceViewport: re,
						page: ge,
						previousPage: Ee,
						pageName: Re,
						utm_campaign: ze,
						_ga: Je,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ve
					} = C, {
						origin: Ze
					} = window.location, at = (0, _t.PR)((0, c.bh)().getState());
					return {
						event: Ee !== void 0 && ge !== Ee ? "virtual_page_view" : "page_load",
						device_type: re,
						hostname: Ze,
						language: navigator.language,
						locale: (0, l.r)((0, c.bh)().getState()),
						page_location: ge ? `${Ze}${ge}` : "[redacted]",
						page_path: ge ? `${ge}` : "[redacted]",
						page_referrer: Ee ? `${Ze}/${Ee}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Re || "[redacted]",
						page_url: ge ? `${Ze}${ge}` : "[redacted]",
						query: ze ? `?utm_campaign=${ze}` : "[redacted]",
						user_properties: {
							ga_client_id: (F = Je) !== null && F !== void 0 ? F : void 0,
							ga_client_id_s: Je ? `s${Je}` : void 0,
							user_id: y() ? at == null ? void 0 : at.id : void 0,
							ecid: Ve ? Mt(Ve) : void 0
						}
					}
				},
				Rt = () => ({
					event: "zone_create",
					page_timestamp: new Date().toISOString(),
					currency: "USD",
					value: 0
				}),
				wt = C => {
					const {
						status: F
					} = C;
					return F === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Nt = (C, F) => {
					switch (C) {
						case De:
							return It(F);
						case je:
							return Rt();
						case ot:
							return wt(F);
						case ct:
							return z(F);
						case Ct:
							return de(F);
						case ft:
							return _e(F);
						case Tt:
							return Te(F);
						default:
							return
					}
				},
				yt = C => (F, re, ge) => {
					if (He[re]) {
						var Ee;
						const Re = Nt(re, ge);
						Re && ((Ee = window.dataLayer) === null || Ee === void 0 || Ee.push(Re))
					}
					return C(F, re, ge)
				};
			var At = t("../react/utils/cookiePreferences.ts");

			function vt(C) {
				for (var F = 1; F < arguments.length; F++) {
					var re = arguments[F] != null ? Object(arguments[F]) : {},
						ge = Object.keys(re);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(re).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(re, Ee).enumerable
					})), ge.forEach(function(Ee) {
						xt(C, Ee, re[Ee])
					})
				}
				return C
			}

			function xt(C, F, re) {
				return F = Ft(F), F in C ? Object.defineProperty(C, F, {
					value: re,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[F] = re, C
			}

			function Ft(C) {
				var F = Pt(C, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function Pt(C, F) {
				if (typeof C != "object" || C === null) return C;
				var re = C[Symbol.toPrimitive];
				if (re !== void 0) {
					var ge = re.call(C, F || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(C)
			}
			const Bt = C => {
					const F = Ot((0, c.bh)().getState());
					r().init(vt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Dt() && !(0, o.gm)() && y(),
						middlewares: [w, be, k, rt, ...F ? [yt] : []]
					}, C))
				},
				jt = () => {
					r().identify(vt({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, c.bh)().getState()),
						isCloudflare: !!(0, g.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				Dt = () => !0,
				Lt = () => {
					(0, At.kT)("sparrow_id")
				},
				y = () => (0, At.Xm)()
		},
		"../utils/initStyles.ts": function(W, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = t("../react/app/providers/storeContainer.js");
			const o = "cfBaseStyles",
				c = document.head || document.getElementsByTagName("head")[0],
				l = s => {
					const p = [];
					for (let f in s.colors) {
						const n = s.colors[f];
						if (Array.isArray(n) && f !== "categorical")
							for (let a = 0; a < n.length; ++a) p.push(`--cf-${f}-${a}:${n[a]};`)
					}
					return p.join(`
`)
				},
				g = () => {
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
					let f = document.getElementById(o);
					f ? f.innerText = "" : (f = document.createElement("style"), f.id = o, c.appendChild(f)), f.appendChild(document.createTextNode(p)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(g), E.Z = g
		},
		"../utils/sentry/lastSentEventId.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let o = "";
				return {
					setEventId: g => (!g || typeof g != "string" || (o = g), o),
					getEventId: () => o
				}
			})()
		},
		"../utils/zaraz.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Ro: function() {
					return a
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
				for (var m = 1; m < arguments.length; m++) {
					var u = arguments[m] != null ? Object(arguments[m]) : {},
						d = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(u).filter(function(I) {
						return Object.getOwnPropertyDescriptor(u, I).enumerable
					})), d.forEach(function(I) {
						r(i, I, u[I])
					})
				}
				return i
			}

			function r(i, m, u) {
				return m = o(m), m in i ? Object.defineProperty(i, m, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[m] = u, i
			}

			function o(i) {
				var m = c(i, "string");
				return typeof m == "symbol" ? m : String(m)
			}

			function c(i, m) {
				if (typeof i != "object" || i === null) return i;
				var u = i[Symbol.toPrimitive];
				if (u !== void 0) {
					var d = u.call(i, m || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (m === "string" ? String : Number)(i)
			}
			const l = {
					track: (i, m) => null,
					set: (i, m) => console.log(`zaraz.set(${i}, ${m})`)
				},
				g = {
					track: (i, m) => {
						var u;
						(u = window.zaraz) === null || u === void 0 || u.track(i, e({}, m, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, m) => {
						var u;
						return (u = window.zaraz) === null || u === void 0 ? void 0 : u.set(i, m)
					}
				};
			let s;
			const p = () => {
					window.zaraz, s = g
				},
				f = ["email", "first_name", "last_name"],
				n = i => {
					f.forEach(m => {
						var u;
						(u = s) === null || u === void 0 || u.set(m, i[m])
					})
				},
				a = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function(W, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				c = t.n(o),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				g = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(g),
				p = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				f = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				a = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				d = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				I = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				P = t("../../../common/component/component-filter-bar/src/constants.js"),
				h = t("../../../common/component/component-filter-bar/src/utils.js");

			function v() {
				return v = Object.assign ? Object.assign.bind() : function(U) {
					for (var S = 1; S < arguments.length; S++) {
						var x = arguments[S];
						for (var G in x) Object.prototype.hasOwnProperty.call(x, G) && (U[G] = x[G])
					}
					return U
				}, v.apply(this, arguments)
			}

			function O(U) {
				for (var S = 1; S < arguments.length; S++) {
					var x = arguments[S] != null ? Object(arguments[S]) : {},
						G = Object.keys(x);
					typeof Object.getOwnPropertySymbols == "function" && G.push.apply(G, Object.getOwnPropertySymbols(x).filter(function(ne) {
						return Object.getOwnPropertyDescriptor(x, ne).enumerable
					})), G.forEach(function(ne) {
						_(U, ne, x[ne])
					})
				}
				return U
			}

			function _(U, S, x) {
				return S = T(S), S in U ? Object.defineProperty(U, S, {
					value: x,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[S] = x, U
			}

			function T(U) {
				var S = k(U, "string");
				return typeof S == "symbol" ? S : String(S)
			}

			function k(U, S) {
				if (typeof U != "object" || U === null) return U;
				var x = U[Symbol.toPrimitive];
				if (x !== void 0) {
					var G = x.call(U, S || "default");
					if (typeof G != "object") return G;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (S === "string" ? String : Number)(U)
			}
			const w = 70,
				A = (0, l.createStyledComponent)(({
					showOverflow: U
				}) => O({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, U ? {} : {
					maxHeight: w,
					overflow: "hidden"
				})),
				L = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				b = (0, l.createStyledComponent)(({
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
				D = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				R = (0, l.createStyledComponent)(({
					theme: U
				}) => ({
					color: U.colors.gray[4],
					mr: 1
				}), "span"),
				Z = (0, l.createStyledComponent)(() => ({
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
				oe = (0, l.createStyledComponent)(({
					buttonStyle: U
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
				}, U), f.zx),
				ce = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				le = (0, l.createStyledComponent)(({
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
				Q = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				K = U => U.current ? [...U.current.children].reduce((S, x) => (x.offsetTop >= w && S++, S), 0) : 0;
			let H = 0;
			class N extends e.Component {
				constructor() {
					super();
					_(this, "overflowWrapper", (0, e.createRef)()), _(this, "hasOverflowed", S => {
						const x = K(this.overflowWrapper);
						S.scrollHeight > w && x >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (S.scrollHeight < w || x === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), _(this, "addNewFilter", () => {
						const {
							filterDefinitions: S
						} = this.props, x = (0, h.TE)(S), G = Object.keys(x)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: G,
								operator: (0, h.uv)(G, x),
								value: (0, h.TT)(G, x)
							}
						})
					}), _(this, "handleOpenFilterEdit", S => {
						this.setState({
							openFilter: S,
							filterChanges: O({}, this.props.filters[S])
						})
					}), _(this, "handleRemoveFilterClick", (S, x) => {
						S.stopPropagation(), this.removeFilter(x)
					}), _(this, "removeFilter", S => {
						const {
							handleFiltersChange: x
						} = this.props, G = [...this.props.filters], ne = G[S];
						G.splice(S, 1), x(G), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ne.key,
							operator: ne.operator,
							value: ne.value
						})
					}), _(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), _(this, "handleFilterSubmit", S => {
						const {
							filterDefinitions: x
						} = this.props;
						S.preventDefault();
						const {
							filterChanges: G
						} = this.state, ne = typeof x[G.key].parse == "function" ? Array.isArray(G.value) ? G.value.map(x[G.key].parse) : x[G.key].parse(G.value) : G.value;
						if (x[G.key].validate && (Array.isArray(ne) ? !ne.every(x[G.key].validate) : !x[G.key].validate(ne))) return this.setState({
							invalid: !0
						});
						const q = [...this.props.filters],
							ae = O({}, G, {
								value: ne
							}),
							j = !q[this.state.openFilter];
						j ? q.push(ae) : q[this.state.openFilter] = O({}, ae), this.props.handleFiltersChange(q, ae), (j ? this.props.onAddFilter : this.props.onEditFilter)({
							field: ae.key,
							operator: ae.operator,
							value: ae.value
						}), this.closeOpenFilterChanges()
					}), _(this, "handlePendingKeyChange", ({
						value: S
					}) => {
						const {
							filterDefinitions: x
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: S,
								operator: (0, h.uv)(S, x),
								value: (0, h.TT)(S, x)
							}
						})
					}), _(this, "handlePendingOperatorChange", ({
						value: S
					}) => {
						let x = O({}, this.state.filterChanges, {
							operator: S
						});
						if ((0, h.dr)(S)) {
							var G, ne;
							((G = this.state.filterChanges) === null || G === void 0 ? void 0 : G.value) && !Array.isArray((ne = this.state.filterChanges) === null || ne === void 0 ? void 0 : ne.value) && (x.value = [this.state.filterChanges.value])
						} else {
							var q, ae, j;
							((q = this.state.filterChanges) === null || q === void 0 ? void 0 : q.value) && Array.isArray((ae = this.state.filterChanges) === null || ae === void 0 ? void 0 : ae.value) && ((j = this.state.filterChanges) === null || j === void 0 ? void 0 : j.value.length) > 0 && (x.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: x
						})
					}), _(this, "handlePendingValueChange", S => {
						this.setState({
							invalid: !1,
							filterChanges: O({}, this.state.filterChanges, {
								value: S
							})
						})
					}), _(this, "handleShowOverflow", () => {
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
						id: ++H
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(S) {
					S.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(S) {
					const {
						formatLabel: x,
						filterDefinitions: G
					} = this.props, {
						operator: ne
					} = this.state.filterChanges, q = G[this.state.filterChanges.key], ae = this.state.filterChanges.value, j = $ => Array.isArray($) ? $.map(J => J.value) : ($ == null ? void 0 : $.value) || null;
					if (q.renderValueComponent) return q.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (q.type) {
						case P.k.custom: {
							var M;
							return r().createElement(q.CustomComponent, v({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (M = q == null ? void 0 : q.customProps) !== null && M !== void 0 ? M : {}))
						}
						case P.k.select:
							return (0, h.dr)(ne) ? r().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !q.options,
								value: typeof ae.split == "function" ? ae == null ? void 0 : ae.split(",") : Array.isArray(ae) ? ae : [],
								options: q.options ? q.options.map($ => ({
									value: $.value || $,
									label: $.label || x(this.state.filterChanges.key, $, S)
								})) : ae ? (Array.isArray(ae) ? ae : ae.split(",")).map($ => ({
									label: $,
									value: $
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(g.Trans, {
									id: q.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: q.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: $ => {
									this.handlePendingValueChange(j($))
								},
								isValidNewOption: $ => {
									const J = q.validate;
									return !J && $ || $ && J([$])
								},
								getNewOptionData: ($, J) => ({
									value: $,
									label: J
								})
							}) : r().createElement(i.hQ, {
								hideLabel: !0,
								value: ae,
								options: q.options.map($ => ({
									value: $,
									label: x(this.state.filterChanges.key, $, S)
								})),
								onChange: ({
									value: $
								}) => this.handlePendingValueChange($)
							});
						case P.k.string:
						default:
							return (0, h.dr)(ne) ? r().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof ae.split == "function" ? ae == null ? void 0 : ae.split(",") : Array.isArray(ae) ? ae : [],
								options: ae ? (Array.isArray(ae) ? ae : ae.split(",")).map($ => ({
									label: $,
									value: $
								})) : [],
								noOptionsMessage: () => null,
								placeholder: S.t("analytics.report.filters.labels.placeholder", {
									example: G[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: $ => {
									this.handlePendingValueChange(j($))
								},
								isValidNewOption: $ => {
									const J = q.validate;
									return !J && $ || $ && J([$])
								},
								getNewOptionData: ($, J) => ({
									value: $,
									label: J
								}),
								formatCreateLabel: $ => S.t("filter_editor.value_create_label", {
									value: $
								})
							}) : r().createElement(g.I18n, null, $ => r().createElement(p.I, {
								value: this.state.filterChanges.value,
								onChange: J => this.handlePendingValueChange(J.target.value),
								mb: 0,
								name: "custom-value",
								placeholder: $.t("analytics.report.filters.labels.placeholder", {
									example: G[this.state.filterChanges.key].example,
									_: ""
								})
							}))
					}
				}
				render() {
					const {
						formatLabel: S,
						filterDefinitions: x,
						modalStyles: G,
						filterIconType: ne,
						buttonStyle: q,
						secondaryActionComponent: ae
					} = this.props, j = K(this.overflowWrapper), M = `filterPanel${this.state.id}`, $ = this.state.openFilter !== null;
					return r().createElement(g.I18n, null, J => r().createElement(m.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(Q, null, r().createElement(m.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(oe, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": $,
						"aria-controls": M,
						inverted: !0,
						buttonStyle: q
					}, r().createElement(n.J, {
						type: ne || "add",
						mr: 1,
						label: J.t("common.add", {
							_: "Add"
						})
					}), r().createElement(g.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!ae && r().createElement(m.ZC, null, ae)), this.props.filters.length > 0 && r().createElement(ce, null, r().createElement(g.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(A, {
						innerRef: this.overflowWrapper,
						overflowLimit: w,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ue, se) => {
						const {
							key: pe,
							operator: te,
							value: ye
						} = ue, Oe = x[pe].ignoreLabelTranslation ? x[pe].label : J.t(x[pe].label), Ie = J.t(`analytics.report.filters.operators.${te}`), Le = Array.isArray(ye) ? ye.map(ke => S(pe, ke, J)).join(", ") : S(pe, ye, J), Se = `${Oe} ${Ie} ${Le}`;
						return r().createElement(L, {
							key: `${pe}-${te}-${ye}`,
							title: Se
						}, r().createElement(b, {
							onClick: () => this.handleOpenFilterEdit(se)
						}, r().createElement(m.ZC, {
							display: "flex"
						}, r().createElement(D, null, Oe), r().createElement(R, null, Ie), r().createElement(Z, null, Le), (0, h.oN)(ue, x) ? r().createElement(a.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(le, {
							onClick: ke => this.handleRemoveFilterClick(ke, se),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), $ && r().createElement(I.Z, {
						id: M,
						filterDefinitions: x,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, h.oN)(this.state.filterChanges, x),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: S,
						modalStyles: G
					}), this.state.hasOverflowed && r().createElement(d.Z, {
						count: j,
						showOverflow: this.state.showOverflow,
						onClick: this.handleShowOverflow
					})))
				}
			}
			_(N, "propTypes", {
				filterDefinitions: c().shape({}),
				filters: c().arrayOf(c().shape({
					key: c().string,
					operator: c().string,
					value: c().string
				})),
				handleFiltersChange: c().func.isRequired,
				formatLabel: c().func.isRequired,
				onAddFilter: c().func,
				onEditFilter: c().func,
				onRemoveFilter: c().func,
				children: c().node,
				modalStyles: c().object,
				filterIconType: c().string,
				buttonStyle: c().object,
				secondaryActionComponent: c().node
			}), E.Z = N
		},
		"../../../common/component/component-filter-bar/src/index.js": function(W, E, t) {
			"use strict";
			t.d(E, {
				ME: function() {
					return r.Z
				},
				f8: function() {
					return e.Z
				},
				kE: function() {
					return o.k
				},
				oN: function() {
					return c.oN
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/FilterBar.jsx"),
				r = t("../../../common/component/component-filter-bar/src/FilterBuilder.jsx"),
				o = t("../../../common/component/component-filter-bar/src/constants.js"),
				c = t("../../../common/component/component-filter-bar/src/utils.js"),
				l = t("../../../common/component/component-filter-bar/src/TimerangeSelect.jsx")
		},
		"../../../common/intl/intl-core/src/errors.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				OZ: function() {
					return l
				},
				YB: function() {
					return c
				}
			});

			function e(s, p, f) {
				return p = r(p), p in s ? Object.defineProperty(s, p, {
					value: f,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[p] = f, s
			}

			function r(s) {
				var p = o(s, "string");
				return typeof p == "symbol" ? p : String(p)
			}

			function o(s, p) {
				if (typeof s != "object" || s === null) return s;
				var f = s[Symbol.toPrimitive];
				if (f !== void 0) {
					var n = f.call(s, p || "default");
					if (typeof n != "object") return n;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (p === "string" ? String : Number)(s)
			}
			class c extends Error {
				constructor(p, f) {
					super(f);
					e(this, "translationKey", void 0), this.translationKey = p, this.name = "TranslatorError"
				}
			}
			class l extends c {
				constructor(p, f) {
					super(p, `Translation key not found: ${p}, locale: ${f}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var g = null
		},
		"../../../common/util/types/src/api/domain.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Aw: function() {
					return k
				},
				Ib: function() {
					return _
				},
				Ks: function() {
					return w
				},
				MS: function() {
					return T
				},
				PN: function() {
					return d
				},
				Pp: function() {
					return c
				},
				Q3: function() {
					return m
				},
				TS: function() {
					return u
				},
				W7: function() {
					return h
				},
				dN: function() {
					return A
				},
				eF: function() {
					return O
				},
				qp: function() {
					return n
				},
				wR: function() {
					return f
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const r = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				o = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				c = e.eg.object({
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
				g = e.eg.object({
					registrant: c.optional,
					technical: c.optional,
					administrator: c.optional,
					billing: c.optional
				}),
				s = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: g.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let f = function(L) {
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
						status: e.eg.enum(f).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: p.optional,
					landing: e.eg.union([o, e.eg.boolean]).optional,
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
				a = e.eg.object({
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
				m = e.eg.object({
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
				u = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let d = function(L) {
				return L.PENDING = "pending", L.VERIFIED = "verified", L.REJECTED = "rejected", L.PENDING_DELETE = "pending_delete", L.DELETED = "deleted", L
			}({});
			const I = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(d),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				P = e.eg.object({
					designated_approvers: e.eg.array(I)
				});
			let h = function(L) {
				return L.PENDING = "pending", L.PENDING_UPDATE = "pending_update", L.ENABLED = "enabled", L.DISABLED = "disabled", L
			}({});
			const v = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(h)
				}),
				O = e.eg.intersection([v, P]),
				_ = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let T = function(L) {
				return L.UNLOCK_APPROVAL = "UnlockApprovalRequest", L.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", L.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", L.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", L
			}({});
			const k = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				w = e.eg.object({
					message: e.eg.string
				}),
				A = e.eg.object({
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
		"../../../common/util/types/src/api/phases/fields.tsx": function(W, E, t) {
			"use strict";
			t.d(E, {
				df: function() {
					return r
				},
				eX: function() {
					return o
				},
				fG: function() {
					return l
				},
				jI: function() {
					return c
				},
				qu: function() {
					return e
				},
				zc: function() {
					return g
				}
			});
			let e = function(s) {
					return s.Custom = "custom", s.Root = "root", s.Managed = "managed", s.Zone = "zone", s.RateLimit = "ratelimit", s
				}({}),
				r = function(s) {
					return s.Cache = "http_request_cache_settings", s.HttpCustomErrors = "http_custom_errors", s.HttpConfigSettings = "http_config_settings", s.HttpLogCustomFields = "http_log_custom_fields", s.HttpRateLimit = "http_ratelimit", s.HttpRequestDynamicRedirect = "http_request_dynamic_redirect", s.HttpRequestFirewallCustom = "http_request_firewall_custom", s.HttpRequestFirewallManaged = "http_request_firewall_managed", s.HttpRequestFirewallRateLimit = "http_request_firewall_ratelimit", s.HttpRequestLateTransform = "http_request_late_transform", s.HttpRequestMain = "http_request_main", s.HttpRequestOrigin = "http_request_origin", s.HttpRequestRedirect = "http_request_redirect", s.HttpRequestSanitize = "http_request_sanitize", s.HttpRequestSBFM = "http_request_sbfm", s.HttpRequestsSnippets = "http_request_snippets", s.HttpRequestTransform = "http_request_transform", s.HttpResponseCompression = "http_response_compression", s.HttpResponseFirewallManaged = "http_response_firewall_managed", s.HttpResponseTransform = "http_response_headers_transform", s.L4DDoS = "ddos_l4", s.L7DDoS = "ddos_l7", s.MagicIDS = "magic_transit_ids_managed", s.MagicManaged = "magic_transit_managed", s.MagicTransit = "magic_transit", s.MagicTransitRateLimit = "magic_transit_ratelimit", s
				}({}),
				o = function(s) {
					return s.Execute = "execute", s.All = "all", s.Block = "block", s.JSChallenge = "js_challenge", s.Challenge = "challenge", s.Allow = "allow", s.Bypass = "bypass", s.Log = "log", s.Rewrite = "rewrite", s.Score = "score", s.Skip = "skip", s.Managed_Challenge = "managed_challenge", s.DDoS_Dynamic = "ddos_dynamic", s.Select_Config = "select_config", s.Set_Config = "set_config", s.Reset = "reset", s.Redirect = "redirect", s.Cache = "set_cache_settings", s.WhiteList = "whitelist", s.Error = "serve_error", s
				}({}),
				c = function(s) {
					return s.ZONE_LOCKDOWN = "zoneLockdown", s.UA_BLOCK = "uaBlock", s.BIC = "bic", s.HOT = "hot", s.SECURITY_LEVEL = "securityLevel", s.RATE_LIMIT = "rateLimit", s.WAF = "waf", s
				}({}),
				l = function(s) {
					return s.DEFAULT = "default", s.MEDIUM = "medium", s.LOW = "low", s.EOFF = "eoff", s.HIGH = "high", s.VERY_HIGH = "very_high", s
				}({}),
				g = function(s) {
					return s.DEFAULT = "", s.XML = "text/xml", s.JSON = "application/json", s.TEXT = "text/plain", s.HTML = "text/html", s
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Yd: function() {
					return e
				},
				vE: function() {
					return r
				}
			});

			function e(o) {
				return Object.keys(o)
			}
			const r = (o, c) => {
				if (c !== void 0) throw new Error("Unexpected object: " + o);
				return c
			}
		},
		"../../../dash/intl/intl-translations/src/index.ts": function(W, E, t) {
			"use strict";
			t.d(E, {
				Fy: function() {
					return e.Z
				},
				if: function() {
					return o.Z
				},
				n4: function() {
					return r.n
				}
			});
			var e = t("../../../dash/intl/intl-translations/src/makeLoadPhrases.ts"),
				r = t("../../../dash/intl/intl-translations/src/catalogMap.ts"),
				o = t("../../../dash/intl/intl-translations/src/supportedCatalogs.ts")
		},
		"../react/common/out.css": function(W, E, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[W.id, e, ""]
			]);
			var r, o, c = {
				hmr: !0
			};
			c.transform = r, c.insertInto = void 0;
			var l = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, c);
			e.locals && (W.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function(W, E, t) {
			E = W.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), E.push([W.id, `/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */
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
    --tracking-widest: 0.1em;
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
    --color-cl1-blue-2: var(--cf-blue-2);
    --color-cl1-blue-8: var(--cf-blue-8);
    --color-cl1-gray-0: var(--cf-gray-0);
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
  .m-auto {
    margin: auto;
  }
  .-mx-1 {
    margin-inline: calc(var(--spacing) * -1);
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
  .w-\\[800px\\] {
    width: 800px;
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
  .max-w-8\\/10 {
    max-width: calc(8/10 * 100%);
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
  .grow-1 {
    flex-grow: 1;
  }
  .border-collapse {
    border-collapse: collapse;
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
  .grid-cols-\\[1fr_1fr_2fr\\] {
    grid-template-columns: 1fr 1fr 2fr;
  }
  .grid-cols-\\[200px_1fr\\] {
    grid-template-columns: 200px 1fr;
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
  .items-baseline {
    align-items: baseline;
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
  .\\!rounded-md {
    border-radius: var(--radius-md) !important;
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
  .border-cl1-new-gray-7 {
    border-color: var(--color-cl1-new-gray-7);
  }
  .border-color {
    border-color: var(--color-color);
  }
  .border-destructive {
    border-color: var(--color-destructive);
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
  .\\!bg-bg-primary {
    background-color: var(--color-bg-primary) !important;
  }
  .\\!bg-blue-600 {
    background-color: var(--color-blue-600) !important;
  }
  .\\!bg-neutral-50 {
    background-color: var(--color-neutral-50) !important;
  }
  .\\!bg-surface {
    background-color: var(--color-surface) !important;
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
  .bg-destructive {
    background-color: var(--color-destructive);
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
  .\\!p-2\\.5 {
    padding: calc(var(--spacing) * 2.5) !important;
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
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-10 {
    padding-top: calc(var(--spacing) * 10);
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
  .\\!text-\\[13px\\] {
    font-size: 13px !important;
  }
  .text-\\[12px\\] {
    font-size: 12px;
  }
  .text-\\[14px\\] {
    font-size: 14px;
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
  .tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
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
  .text-destructive {
    color: var(--text-color-destructive);
  }
  .text-error {
    color: var(--text-color-error);
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
  .text-red-700 {
    color: var(--color-red-700);
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
  .disabled\\:cursor-not-allowed {
    &:disabled {
      cursor: not-allowed;
    }
  }
  .disabled\\:text-muted {
    &:disabled {
      color: var(--text-color-muted);
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
  .dark\\:bg-bg-primary {
    &:where(.dark, .dark *) {
      background-color: var(--color-bg-primary);
    }
  }
  .dark\\:bg-bg-secondary {
    &:where(.dark, .dark *) {
      background-color: var(--color-bg-secondary);
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
  .dark\\:text-neutral-500 {
    &:where(.dark, .dark *) {
      color: var(--color-neutral-500);
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
}
@layer base {
  :root {
    --kumo-surface: #fff;
    --kumo-surface-foreground: #000;
    --kumo-surface-secondary: var(--color-neutral-50);
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
    --kumo-primary: #056dff;
    --kumo-primary-foreground: var(--color-white);
    --kumo-secondary: var(--color-neutral-900);
    --kumo-secondary-foreground: var(--color-neutral-50);
    --kumo-secondary-hover: var(--color-neutral-850);
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
button.text-sm {
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
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
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
    }
  }
}
`, ""])
		},
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function(W, E, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(o) {
				if (!t.o(e, o)) return Promise.resolve().then(function() {
					var g = new Error("Cannot find module '" + o + "'");
					throw g.code = "MODULE_NOT_FOUND", g
				});
				var c = e[o],
					l = c[0];
				return t.e(c[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", W.exports = r
		}
	}
]);

//# debugId=e6e72d1a-5e59-5970-a4f4-052b3f40b76b