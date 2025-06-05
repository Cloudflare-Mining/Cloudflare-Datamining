! function() {
	try {
		var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
			n = (new Error).stack;
		n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fef718bf-a0f6-5603-8c03-678115ff9edf")
	} catch (e) {}
}();
(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254, 78770], {
		"../flags.ts": function($, E, t) {
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
					return D
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/utils/url.ts"),
				o = t("../../../../node_modules/query-string/query-string.js"),
				c = t.n(o),
				l = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				m;
			const s = () => Object.keys(l.Z).reduce((h, v) => (v.indexOf("cf_beta.") === 0 && l.Z.get(v) === "true" && h.push(v.split(".").slice(1).join(".")), h), []),
				p = () => {
					var h, v, w;
					return ((h = window) === null || h === void 0 || (v = h.bootstrap) === null || v === void 0 || (w = v.data) === null || w === void 0 ? void 0 : w.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((m = window) === null || m === void 0 ? void 0 : m.location) && l.Z) {
				const h = c().parse(window.location.search);
				h.beta_on && l.Z.set(`cf_beta.${h.beta_on}`, !0), h.beta_off && l.Z.set(`cf_beta.${h.beta_off}`, !1)
			}
			const f = {},
				n = h => {
					var v, w, _;
					return Object.prototype.hasOwnProperty.call(f, h) ? f[h] : ((v = window) === null || v === void 0 || (w = v.bootstrap) === null || w === void 0 || (_ = w.data) === null || _ === void 0 ? void 0 : _.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(T => T === h) ? (f[h] = !0, !0) : (f[h] = !1, !1)
				},
				a = h => l.Z ? l.Z.get(`cf_beta.${h}`) === !0 : !1,
				i = h => a(h) || n(h),
				g = () => !0,
				u = () => {
					var h, v, w;
					return ((h = window) === null || h === void 0 || (v = h.bootstrap) === null || v === void 0 || (w = v.data) === null || w === void 0 ? void 0 : w.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				d = h => {
					const v = (0, e.uF)(h),
						w = (v == null ? void 0 : v.roles) || [];
					return (0, r.qR)(location.pathname) && w.length === 1 && w.some(_ => _ === "Administrator Read Only")
				},
				I = () => {
					var h, v, w;
					return ((h = window) === null || h === void 0 || (v = h.location) === null || v === void 0 || (w = v.origin) === null || w === void 0 ? void 0 : w.includes("fed.cloudflare.com")) ? "fed" : "global"
				},
				D = () => I() === "fed"
		},
		"../functions/utils/constants.ts": function($, E, t) {
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
				m = "deploymentPreview",
				s = "fragmentPreview",
				p = a => a === c ? f() : n(),
				f = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				n = (a = 72) => {
					const i = 36e5;
					return new Date(Date.now() + a * i)
				}
		},
		"../functions/utils/preview-deploy-helpers.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				E9: function() {
					return d
				}
			});
			var e = t("../../../../node_modules/zod/lib/index.mjs");

			function r(h) {
				for (var v = 1; v < arguments.length; v++) {
					var w = arguments[v] != null ? Object(arguments[v]) : {},
						_ = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(w).filter(function(T) {
						return Object.getOwnPropertyDescriptor(w, T).enumerable
					})), _.forEach(function(T) {
						o(h, T, w[T])
					})
				}
				return h
			}

			function o(h, v, w) {
				return v = c(v), v in h ? Object.defineProperty(h, v, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : h[v] = w, h
			}

			function c(h) {
				var v = l(h, "string");
				return typeof v == "symbol" ? v : String(v)
			}

			function l(h, v) {
				if (typeof h != "object" || h === null) return h;
				var w = h[Symbol.toPrimitive];
				if (w !== void 0) {
					var _ = w.call(h, v || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (v === "string" ? String : Number)(h)
			}
			const m = e.z.string().regex(/^(((live|previews|assets|assets_previews)-([a-zA-Z0-9\-]{8}|staging))|canary)$/g),
				s = e.z.string().regex(/^[a-zA-Z0-9]{8}$/),
				p = e.z.string(),
				f = e.z.union([e.z.string().regex(/^[a-zA-Z0-9]{8}$/), e.z.literal("current")]),
				n = e.z.record(p, f),
				a = e.z.enum(["live", "previews"]),
				i = (h, v) => {
					const w = h.data.cookies[v],
						_ = {
							[PREVIEW_VERSIONING_COOKIE]: m,
							[DEPLOYMENT_VERSION_COOKIE]: s
						};
					try {
						return _[v].parse(w)
					} catch {
						return null
					}
				},
				g = h => {
					try {
						return decodeURIComponent(h).split(",").reduce((v, w) => {
							const _ = w.split(":"),
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
						w = g(v);
					try {
						return n.parse(w)
					} catch {
						return null
					}
				},
				d = h => {
					const v = m.parse(h),
						[w, ..._] = v.split("-"),
						T = _.join("-");
					return {
						projectType: w,
						deploymentId: T
					}
				},
				I = (h, v) => {
					if (!v) return "";
					try {
						var w;
						const {
							projectType: _,
							deploymentId: T
						} = d(v), k = {
							live: h.env.PAGES_WORKERS_LIVE_HOST,
							previews: h.env.PAGES_WORKERS_PREVIEW_HOST
						}, {
							hostname: A,
							pathname: P,
							search: S
						} = new URL(h.request.url), b = A == null || (w = A.split(".")) === null || w === void 0 ? void 0 : w[0];
						if (T && T !== b && a.safeParse(_).success) {
							const L = k[_];
							return `https://${T}.${L}${P}${S}`
						}
					} catch (_) {
						console.log(_)
					}
					return ""
				},
				D = (h, v) => {
					if (!v) return "";
					try {
						var w;
						const _ = h.env.PAGES_WORKERS_LIVE_HOST,
							{
								hostname: T,
								pathname: k,
								search: A
							} = new URL(h.request.url),
							P = T == null || (w = T.split(".")) === null || w === void 0 ? void 0 : w[0],
							{
								deploymentSHA: S
							} = parsePagesDevUrl(h.env.CF_PAGES_URL),
							b = h.request.headers.get("sec-fetch-dest") === "document";
						if (v && v !== P && v !== S && !b) return `https://${v}.${_}${k}${A}`
					} catch (_) {
						console.log(_)
					}
					return ""
				}
		},
		"../init.ts": function($, E, t) {
			"use strict";
			t.r(E);
			var e = t("../../../../node_modules/regenerator-runtime/runtime.js"),
				r = t("../../../../node_modules/url-search-params-polyfill/index.js"),
				o = t("../libs/init/initGlobal.ts"),
				c = t("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				l = t("../../../../node_modules/fetch-intercept/lib/browser.js");

			function m(x) {
				for (var K = 1; K < arguments.length; K++) {
					var q = arguments[K] != null ? Object(arguments[K]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(q, fe).enumerable
					})), ie.forEach(function(fe) {
						s(x, fe, q[fe])
					})
				}
				return x
			}

			function s(x, K, q) {
				return K = p(K), K in x ? Object.defineProperty(x, K, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[K] = q, x
			}

			function p(x) {
				var K = f(x, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function f(x, K) {
				if (typeof x != "object" || x === null) return x;
				var q = x[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(x, K || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(x)
			}
			const n = x => {
				const K = x && x.headers || {},
					q = new Headers(K);
				return q.append("X-Cross-Site-Security", "dash"), m({}, x, {
					headers: q
				})
			};
			(0, l.register)({
				request: (x, K) => {
					try {
						return new URL(x), x === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", K] : [x, K]
					} catch {
						var q, ie;
						return typeof x == "object" && ((q = x) === null || q === void 0 || (ie = q.url) === null || ie === void 0 ? void 0 : ie.startsWith("https://platform.dash.cloudflare.com/map-tiles/")) ? [x, K] : [x, n(K)]
					}
				}
			});
			var a = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				i = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				g = t("../react/app/providers/storeContainer.js");
			let u = "";
			const d = 61;

			function I(x) {
				const K = x.substr(1);
				if (K && u !== K) {
					const q = document.getElementById(K);
					if (q) {
						const ie = q.getBoundingClientRect().top;
						if (ie > 0) {
							const fe = ie - d;
							document.documentElement.scrollTop = fe
						}
					}
				}
				u = K
			}

			function D(x) {
				x.listen(K => I(K.hash))
			}
			var h = t("../../../../node_modules/cookie/index.js"),
				v = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				w = t("../functions/utils/constants.ts");
			const _ = x => {
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
				T = (x, K = !1) => {
					var q;
					const ie = _(x),
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
						we = K ? `
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
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(q=window.build)===null||q===void 0?void 0:q.branch}</span>.</p>
      <a href="${window.location.href}?deploymentPreview=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return fe + we
				},
				k = x => {
					var K;
					const q = document.getElementById(x);
					!q || (K = q.parentNode) === null || K === void 0 || K.removeChild(q)
				};

			function A() {
				const x = document.getElementById("loading-state");
				x == null || x.classList.add("hide"), x == null || x.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(k)
				})
			}

			function P(x) {
				var K;
				const q = document.getElementById("loading-state"),
					ie = !!((K = h.parse(document.cookie)) === null || K === void 0 ? void 0 : K[w.b1]);
				!q || (q.innerHTML = T(x == null ? void 0 : x.code, ie))
			}
			var S = t("../utils/initStyles.ts"),
				b = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				L = t("../../../../node_modules/@sentry/react/esm/sdk.js"),
				R = t("../react/common/selectors/languagePreferenceSelector.ts"),
				H = t("../flags.ts"),
				ae = t("../utils/getDashVersion.ts");
			const se = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				ce = !0,
				Y = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				z = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", /Cannot read properties of undefined \(reading '(setCurrentPosition|setDefaultPosition|setMaxSize|setScreenSize|fireEvent|fireReadyEvent|audioVolumeChange|fireChangeEvent)'\)/, "NetworkError when attempting to fetch resource", "Failed to fetch", "Load failed", "The user aborted a request"];
			var G = t("../utils/sentry/lastSentEventId.ts"),
				N = t("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				B = t("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const O = x => {
				const K = async q => {
					var ie, fe;
					const we = {
						envelope: q.body,
						url: x.url,
						isPreviewDeploy: (ie = window) === null || ie === void 0 || (fe = ie.build) === null || fe === void 0 ? void 0 : fe.isPreviewDeploy,
						release: (0, ae.t)()
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
						return console.log(Ae), (0, B.$2)(Ae)
					}
				};
				return N.q(x, K)
			};
			var M = t("../../../../node_modules/@sentry/tracing/esm/index.js"),
				F = t("../../../../node_modules/history/esm/history.js"),
				J = (0, F.lX)(),
				re = t("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Q = t("../react/utils/url.ts");
			const U = (0, re.Rf)();
			let V;

			function ne(x) {
				return ge(x, "react-router-v5")
			}

			function ge(x, K) {
				return (q, ie = !0, fe = !0) => {
					ie && U && U.location && (V = q({
						name: (0, Q.Fl)(U.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": K
						}
					})), fe && x.listen && x.listen((we, Ae) => {
						if (Ae && (Ae === "PUSH" || Ae === "POP")) {
							V && V.finish();
							const xe = {
								"routing.instrumentation": K
							};
							V = q({
								name: (0, Q.Fl)(we.pathname),
								op: "navigation",
								tags: xe
							})
						}
					})
				}
			}
			var de = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				ue = t.n(de),
				te = t("../../../common/intl/intl-core/src/errors.ts"),
				ye = t("../../../../node_modules/@sentry/utils/esm/object.js"),
				Oe = t("../react/common/middleware/sparrow/errors.ts");

			function Ie(x, K, q) {
				return K = Le(K), K in x ? Object.defineProperty(x, K, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[K] = q, x
			}

			function Le(x) {
				var K = Se(x, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function Se(x, K) {
				if (typeof x != "object" || x === null) return x;
				var q = x[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(x, K || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(x)
			}
			class ke {
				constructor() {
					Ie(this, "name", ke.id)
				}
				setupOnce() {
					t.g.console && (0, ye.hl)(t.g.console, "error", K => (...q) => {
						const ie = q.find(fe => fe instanceof Error);
						if (se && ie) {
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
							} else if (ie instanceof de.SparrowIdCookieError) fe = {
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
						typeof K == "function" && K.apply(t.g.console, q)
					})
				}
			}
			Ie(ke, "id", "ConsoleErrorIntegration");
			var qe = null,
				Be = t("../react/common/utils/getEnvironment.ts");
			const $e = () => {
					if (se && ce) {
						var x, K, q, ie, fe, we, Ae, xe, it, Ke;
						const Vt = (0, Be.Z)();
						let bt = "production";
						((x = window) === null || x === void 0 || (K = x.build) === null || K === void 0 ? void 0 : K.isPreviewDeploy) && (bt += "-preview"), Vt === "canary" && (bt = "canary"), L.S({
							dsn: se,
							release: (0, ae.t)(),
							environment: bt,
							ignoreErrors: z,
							allowUrls: Y,
							autoSessionTracking: !1,
							integrations: dt => [...dt.filter(qt => qt.name !== "GlobalHandlers" && qt.name !== "TryCatch"), new ke, new M.jK.BrowserTracing({
								routingInstrumentation: ne(J)
							})],
							tracesSampleRate: 0,
							transport: O,
							beforeSend: dt => (G.e.setEventId(dt.event_id), dt)
						});
						const St = (0, g.bh)().getState();
						a.rJ({
							LOCAL_STORAGE_FLAGS: (0, H.Qw)(),
							USER_BETA_FLAGS: (0, H.ki)(),
							meta: {
								connection: {
									type: (q = window) === null || q === void 0 || (ie = q.navigator) === null || ie === void 0 || (fe = ie.connection) === null || fe === void 0 ? void 0 : fe.effectiveType,
									bandwidth: (we = window) === null || we === void 0 || (Ae = we.navigator) === null || Ae === void 0 || (xe = Ae.connection) === null || xe === void 0 ? void 0 : xe.downlink
								},
								languagePreference: (0, R.r)(St),
								isPreviewDeploy: (it = window) === null || it === void 0 || (Ke = it.build) === null || Ke === void 0 ? void 0 : Ke.isPreviewDeploy
							},
							utilGates: (0, b.T2)(St)
						}), window.addEventListener("unhandledrejection", function(dt) {})
					}
				},
				Ye = x => {
					x ? a.av({
						id: x
					}) : a.av(null)
				};
			var Z = t("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				Me = () => {
					let x;
					try {
						x = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), x = window.location.search
					}
					if (!x.includes("remote[")) return;
					const K = new URLSearchParams(x),
						q = {};
					for (let [ie, fe] of K) ie.includes("remote") && (q[ie.replace(/remote\[|\]/g, "")] = fe);
					Z.Z.set("mfe-remotes", JSON.stringify(q))
				},
				Fe = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				lt = t("../node_modules/uuid/dist/esm-browser/v4.js");
			const Ce = "ANON_USER_ID";

			function pt() {
				var x, K, q, ie;
				let fe = (x = t.g) === null || x === void 0 || (K = x.bootstrap) === null || K === void 0 || (q = K.data) === null || q === void 0 || (ie = q.user) === null || ie === void 0 ? void 0 : ie.id;
				if (!fe) {
					let we = Z.Z.get(Ce);
					if (!we) {
						let Ae = (0, lt.Z)();
						Z.Z.set(Ce, Ae), we = Ae
					}
					return we
				}
				return fe
			}
			async function X() {
				const x = (0, g.bh)();
				x.dispatch((0, Fe.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await x.dispatch((0, b.UL)({
					userId: pt()
				}))
			}
			class me extends Error {
				constructor(K, q) {
					super(q);
					this.name = `${K} ${q}`
				}
			}
			const he = () => {
					document.cookie.split(";").forEach(K => {
						const [q] = K.trim().split("=");
						document.cookie = `${q}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				je = async () => {
					let x = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!x.ok) throw x.headers.get("content-type") === "text/html" && (await x.text()).toLowerCase().includes("cookie too large") && (a.$e(function(fe) {
						fe.setTag("init", "cookieTooLarge"), a.Tb("Request Header Or Cookie Too Large in Bootstrap request")
					}), he(), window.location.reload()), new me("Bootstrap API Failure", x == null ? void 0 : x.status);
					return (await x.json()).result.data
				};
			var Pe = t("webpack/sharing/consume/default/react/react"),
				be = t.n(Pe),
				Ne = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				mt = t("webpack/sharing/consume/default/react-dom/react-dom"),
				rt = t("webpack/sharing/consume/default/react-redux/react-redux"),
				_t = t("../../../../node_modules/swr/core/dist/index.mjs"),
				Et = t("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				st = t("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				kt = t("../react/shims/focus-visible.js"),
				We = t("../react/app/components/DeepLink/index.ts"),
				gt = t("../../../../node_modules/prop-types/index.js"),
				Xe = t.n(gt),
				et = t("../react/utils/translator.tsx"),
				tt = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				W = t("../../../dash/intl/intl-translations/src/index.ts"),
				le = t("../../../../node_modules/query-string/query-string.js"),
				_e = t.n(le),
				Te = t("../react/common/actions/userActions.ts"),
				De = t("../react/common/selectors/userSelectors.ts"),
				Ue = t("../react/utils/i18n.ts"),
				ot = t("../react/utils/bootstrap.ts");

			function ct(x) {
				for (var K = 1; K < arguments.length; K++) {
					var q = arguments[K] != null ? Object(arguments[K]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(q, fe).enumerable
					})), ie.forEach(function(fe) {
						Ct(x, fe, q[fe])
					})
				}
				return x
			}

			function Ct(x, K, q) {
				return K = ft(K), K in x ? Object.defineProperty(x, K, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[K] = q, x
			}

			function ft(x) {
				var K = Tt(x, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function Tt(x, K) {
				if (typeof x != "object" || x === null) return x;
				var q = x[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(x, K || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(x)
			}
			let He = _e().parse(location.search);
			const Ot = x => {
					const K = (0, ot.$8)() ? [(0, W.Fy)(W.if.changes), (0, W.Fy)(W.if.common), (0, W.Fy)(W.if.navigation), (0, W.Fy)(W.if.overview), (0, W.Fy)(W.if.onboarding), (0, W.Fy)(W.if.invite), (0, W.Fy)(W.if.login), (0, W.Fy)(W.if.dns), (0, W.Fy)(W.n4.ssl_tls), (0, W.Fy)(W.if.message_inbox), (0, W.Fy)(W.if.welcome)] : [(0, W.Fy)(W.if.common), (0, W.Fy)(W.if.invite), (0, W.Fy)(W.if.login), (0, W.Fy)(W.if.onboarding)];
					He.lang ? Mt(x) : Z.Z.get(Ue.th) && It(x, (0, Ue.Kd)());
					const q = async ie => (await Promise.all(K.map(we => we(ie)))).reduce((we, Ae) => ct({}, we, Ae), {});
					return be().createElement(tt.LocaleContext.Provider, {
						value: x.languagePreference
					}, be().createElement(tt.I18nProvider, {
						translator: et.Vb,
						locale: x.languagePreference
					}, be().createElement(tt.I18nLoader, {
						loadPhrases: q
					}, x.children)))
				},
				Mt = async x => {
					let K = He.lang.substring(0, He.lang.length - 2) + He.lang.substring(He.lang.length - 2, He.lang.length).toUpperCase();
					if (!(0, R.v)(K)) {
						console.warn(`${K} is not a supported locale.`), delete He.lang, x.history.replace({
							search: _e().stringify(He)
						});
						return
					}(0, Ue.i_)(K), delete He.lang, It(x, K), x.isAuthenticated || x.history.replace({
						search: _e().stringify(He)
					})
				}, It = async (x, K) => {
					if (x.isAuthenticated) try {
						await x.setUserCommPreferences({
							"language-locale": K
						}, {
							hideErrorAlert: !0
						}), Z.Z.remove(Ue.th), x.history.replace({
							search: _e().stringify(He)
						})
					} catch (q) {
						Z.Z.set(Ue.th, !0), console.error(q)
					} else Z.Z.set(Ue.th, !0)
				}, Rt = x => {
					const K = (0, De.PR)(x);
					return {
						isAuthenticated: !!(K && K.id),
						languagePreference: (0, Ue.Kd)() || (0, R.r)(x)
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
				selectorPrefix: x = "c_"
			} = {}) => (vt || (vt = (0, At.Z)({
				dev: !1,
				selectorPrefix: x
			})), vt);
			var Ft = t("../react/common/out.css"),
				Pt = t("../react/common/components/ModalManager.tsx"),
				Bt = t("../react/app/components/ErrorBoundary.tsx"),
				Ut = t("../react/common/actions/notificationsActions.ts");
			const Lt = (t.g.bootstrap || {}).data || {};
			class y extends be().Component {
				componentDidMount() {
					Lt.messages && this.dispatchNotificationActions(Lt.messages)
				}
				dispatchNotificationActions(K) {
					K.forEach(q => {
						const {
							type: ie,
							message: fe,
							persist: we
						} = q;
						["success", "info", "warn", "error"].includes(ie) && this.props.notifyAdd(ie, (0, et.ZP)(fe), {
							persist: !!we
						})
					})
				}
				render() {
					return null
				}
			}
			var j = (0, Ne.withRouter)((0, rt.connect)(null, {
				notifyAdd: Ut.add
			})(y));
			y.propTypes = {
				notifyAdd: Xe().func.isRequired
			};
			var oe = t("../react/app/redux/index.ts");

			function pe() {
				var x;
				const K = (0, oe.p4)(De.PR),
					q = (K == null || (x = K.email) === null || x === void 0 ? void 0 : x.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ie = (0, Fe.Yc)();
				(0, Pe.useEffect)(() => {
					ie({
						userType: q
					})
				}, [q, ie])
			}
			var Ee = t("../react/common/selectors/entitlementsSelectors.ts"),
				Re = t("../react/common/selectors/accountSelectors.ts");
			const ze = ["accountId", "is_ent"];

			function Je() {
				const x = (0, Fe.f7)(),
					K = (0, Ne.useHistory)(),
					q = (0, Q.uW)(K.location.pathname),
					ie = (0, Fe.Yc)(),
					fe = (0, Fe.O$)(),
					we = (0, oe.p4)(Ee.u1),
					Ae = !we.isRequesting && !!we.data,
					xe = (0, oe.p4)(Ee.p1),
					it = (0, oe.p4)(Re.Xu),
					Ke = (0, oe.p4)(Re.uF),
					Vt = !it.isRequesting && !!it.data;
				(0, Pe.useEffect)(() => {
					if (q && Vt && Ke && Ae && q === Ke.account.id) {
						var bt, St, dt;
						ie({
							accountId: Ke.account.id,
							is_ent: xe,
							is_free_account: !xe && !(Ke == null || (bt = Ke.account.meta) === null || bt === void 0 ? void 0 : bt.has_business_zones) && !(Ke == null || (St = Ke.account.meta) === null || St === void 0 ? void 0 : St.has_pro_zones) && !(Ke == null || (dt = Ke.account.meta) === null || dt === void 0 ? void 0 : dt.has_enterprise_zones)
						})
					} else(!q || q in x && x.accountId !== q) && fe(ze)
				}, [Vt, Ke, ie, fe, Ae, xe, q, x])
			}
			var Ve = t("../react/common/selectors/zoneSelectors.ts");

			function Ze() {
				const x = (0, oe.p4)(Ve.nA),
					K = (0, Fe.Yc)();
				(0, Pe.useEffect)(() => {
					var q;
					K({
						zone_id: x == null ? void 0 : x.id,
						zone_plan: x == null || (q = x.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [x, K])
			}
			const at = () => (pe(), Je(), Ze(), null);
			var ut = t("../react/app/components/Persistence/index.tsx"),
				nt = t("../node_modules/@cloudflare/elements/es/index.js"),
				Ge = t("../react/app/components/LoadingSuspense.tsx");
			const jt = be().lazy(() => Promise.all([t.e(16691), t.e(34684), t.e(12174), t.e(1091), t.e(27751), t.e(5668), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(40453)]).then(t.bind(t, "../react/common/components/DevPanel/Main.tsx")));
			var Gt = () => be().createElement(Ge.Z, null, be().createElement(jt, null));
			const Wt = () => (Pe.useEffect(() => A, []), null);
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
					const x = (0, oe.p4)(R.r);
					(0, Pe.useEffect)(() => {
						const K = tn(x);
						K !== Ht().locale() && Ht().locale(K), document.documentElement.lang = x
					}, [x])
				},
				rn = () => {
					(0, Pe.useEffect)(() => {
						async function x() {
							var K, q, ie, fe;
							let we;
							if (((K = window) === null || K === void 0 || (q = K.build) === null || q === void 0 ? void 0 : q.isPreviewDeploy) && ((ie = window) === null || ie === void 0 || (fe = ie.build) === null || fe === void 0 ? void 0 : fe.branch) !== "staging" && (we = "cookie"), !!we) try {
								const Ae = document.head.querySelector("link[rel=icon]");
								Ae && (Ae.href = (await t("../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${we}.ico`)).default)
							} catch {}
						}
						x()
					}, [])
				};
			var on = t("../react/common/constants/constants.ts");
			const an = () => {
					var x;
					const K = (0, Ne.useLocation)(),
						[q, ie] = (0, Pe.useState)(((x = window) === null || x === void 0 ? void 0 : x.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
					return (0, Pe.useEffect)(() => {
						const fe = _e().parse(K.search);
						if (fe.pt && Z.Z.set(on.sJ, fe.pt), fe == null ? void 0 : fe.devPanel) {
							var we, Ae;
							(we = window) === null || we === void 0 || (Ae = we.localStorage) === null || Ae === void 0 || Ae.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ie(!0)
						}
					}, [K.search]), {
						devPanelEnabled: q
					}
				},
				sn = ({
					id: x,
					customDataLayer: K = [],
					dataLayerName: q = "dataLayer"
				}) => {
					const ie = `<iframe src="https://www.googletagmanager.com/ns.html?id=${x}>m_auth=Bw0h3fTQa4XI3NcjmogT9g>m_preview=env-463>m_cookies_win=x"height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
						fe = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window, document, 'script', '${q}', '${x}')`,
						we = `
    window.${q} = window.${q} || [];
    window.${q}.push(${JSON.stringify(K)})
  `;
					return {
						iframe: ie,
						script: fe,
						dataLayerHTML: we
					}
				},
				cn = x => {
					const K = document.createElement("script");
					return K.innerHTML = x, K.async = !0, K
				},
				ln = x => {
					const K = document.createElement("noscript");
					return K.innerHTML = x, K
				},
				Zt = x => {
					const K = document.createElement("script");
					return K.innerHTML = x, K
				},
				Dn = ({
					dataLayer: x,
					dataLayerName: K
				}) => {
					if (window[K]) return window[K].push(x);
					const q = `
      window.${K} = window.${K} || [];
      window.${K}.push(${JSON.stringify(x)})`,
						ie = Zt(q);
					document.head.insertBefore(ie, document.head.childNodes[0])
				},
				un = ({
					containerId: x,
					customDataLayer: K,
					gtmFeatureFlag: q = !0
				}) => {
					(0, Pe.useEffect)(() => {
						(() => {
							if (!q) return null;
							const {
								iframe: fe,
								script: we,
								dataLayerHTML: Ae
							} = sn({
								id: x,
								customDataLayer: K
							});
							document.head.insertBefore(Zt(Ae), document.head.childNodes[0]), document.head.insertBefore(cn(we), document.head.childNodes[0]), document.body.insertBefore(ln(fe), document.body.childNodes[0])
						})()
					}, [])
				};
			var Yt = t("../react/common/hooks/useGate.ts");
			const dn = ({
				isDev: x,
				gtmFeatureFlag: K
			}) => {
				(0, Pe.useEffect)(() => {
					(() => {
						if (!K) return null;
						let ie;
						x ? ie = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-c9d8b2cd06a5-development.min.js" : ie = "https://assets.adobedtm.com/f597f8065f97/fa05fa784ee2/launch-9b52828fbb9f.min.js";
						const fe = document.createElement("script");
						fe.async = !0, fe.src = ie, document.head.insertBefore(fe, document.head.childNodes[0])
					})()
				}, [])
			};
			var pn = t("../react/utils/useDomainConnectRedirect.ts");
			const mn = "GTM-NDGPDFZ",
				gn = be().lazy(() => Promise.all([t.e(16691), t.e(34684), t.e(12174), t.e(1091), t.e(27751), t.e(51436), t.e(47386), t.e(7580), t.e(70618), t.e(78119), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(83276), t.e(91262), t.e(52215), t.e(42864)]).then(t.bind(t, "../react/AuthenticatedApp.jsx"))),
				fn = be().lazy(() => Promise.all([t.e(83741), t.e(65447), t.e(1091), t.e(7580), t.e(91018), t.e(69088), t.e(91262), t.e(76472)]).then(t.bind(t, "../react/UnauthenticatedApp.tsx")));
			var vn = ({
					userIsAuthed: x
				}) => {
					nn(), rn(), (0, pn.y)();
					const {
						devPanelEnabled: K
					} = an();
					return un({
						containerId: mn,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), dn({
						isDev: !1,
						gtmFeatureFlag: !!(0, Yt.Z)("dx-enable-google-tag-manager")
					}), be().createElement(Pe.Suspense, {
						fallback: be().createElement(Wt, null)
					}, be().createElement(Ne.Switch, null, !x && !0 && be().createElement(Ne.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, be().createElement(fn, null)), be().createElement(Ne.Route, {
						render: () => be().createElement(nt.ZC, {
							minHeight: "100vh"
						}, be().createElement(gn, null))
					})), K && be().createElement(Gt, null))
				},
				zt = t("../../../../node_modules/yup/es/index.js"),
				_n = t("../../../common/util/types/src/utils/index.ts");
			const Qt = {
				cfEmail: () => zt.Z_().email((0, et.ZP)("common.validation.email")).required((0, et.ZP)("common.validation.email")),
				cfPassword: () => zt.Z_().required((0, et.ZP)("common.validation.required"))
			};
			(0, _n.Yd)(Qt).forEach(x => {
				zt.kM(zt.Z_, x, Qt[x])
			});
			var En = t("../react/common/utils/startViewTransition.ts");
			const Xt = be().lazy(() => Promise.all([t.e(16691), t.e(12174), t.e(6368), t.e(51436), t.e(44264), t.e(33970)]).then(t.bind(t, "../react/AuthOnlyProviders.tsx")));

			function yn() {
				const [x, K] = (0, Pe.useState)(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
				return (0, Pe.useEffect)(() => {
					const q = window.matchMedia("(prefers-color-scheme: dark)"),
						ie = fe => {
							K(fe.matches ? "dark" : "light")
						};
					return q.addEventListener("change", ie), () => {
						q.removeEventListener("change", ie)
					}
				}, []), x
			}
			const hn = () => {
					const x = (0, ot.$8)(),
						[K, q] = (0, Pe.useState)(x ? Xt : be().Fragment),
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
						q(x ? Xt : be().Fragment)
					}, [x]), (0, Pe.useEffect)(() => {
						const xe = () => Ae(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", xe), () => {
							window.removeEventListener("storage", xe)
						}
					}, []), be().createElement(Pe.Suspense, {
						fallback: null
					}, be().createElement(rt.Provider, {
						store: (0, g.bh)()
					}, be().createElement(Ne.Router, {
						history: J
					}, be().createElement(K, null, be().createElement(yt.Z, {
						renderer: xt()
					}, be().createElement(Nt, null, be().createElement(Bt.S, {
						sentryTag: "Root"
					}, be().createElement(_t.J$, {
						value: {
							fetcher: xe => fetch(xe).then(it => it.json())
						}
					}, be().createElement(at, null), be().createElement(j, null), be().createElement(ut.Z_, {
						onDarkModeChangeCb: Ae
					}, be().createElement(We.ZP, null, be().createElement(vn, {
						userIsAuthed: x
					}))), be().createElement(Pt.ZP, null), be().createElement(Et.F0, null)))))))))
				},
				bn = () => {
					(0, mt.render)(be().createElement(hn, null), document.getElementById("react-app"))
				};
			var ht = t("../utils/initSparrow.ts"),
				$t = t("../utils/zaraz.ts");
			const Cn = () => {
					const x = (0, De.PR)((0, g.bh)().getState());
					Tn(), (0, ht.Ug)(), (0, $t.bM)(), (x == null ? void 0 : x.id) && ue().setUserId(x == null ? void 0 : x.id), (0, ht.yV)(), !(0, ht.Wi)() && (0, ht.IM)(), x ? (0, $t.yn)(x) : (0, $t.Ro)()
				},
				Tn = () => {
					var x, K;
					(x = window) === null || x === void 0 || (K = x.OneTrust) === null || K === void 0 || K.OnConsentChanged(() => {
						const q = (0, De.PR)((0, g.bh)().getState());
						(0, ht.Wi)() ? (ue().setEnabled(!0), (q == null ? void 0 : q.id) ? (ue().setUserId(q.id), (0, $t.yn)(q)) : (0, $t.Ro)(), (0, ht.yV)()) : (ue().setEnabled(!1), (0, ht.IM)())
					})
				};

			function On(x) {
				for (var K = 1; K < arguments.length; K++) {
					var q = arguments[K] != null ? Object(arguments[K]) : {},
						ie = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ie.push.apply(ie, Object.getOwnPropertySymbols(q).filter(function(fe) {
						return Object.getOwnPropertyDescriptor(q, fe).enumerable
					})), ie.forEach(function(fe) {
						In(x, fe, q[fe])
					})
				}
				return x
			}

			function In(x, K, q) {
				return K = wn(K), K in x ? Object.defineProperty(x, K, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : x[K] = q, x
			}

			function wn(x) {
				var K = An(x, "string");
				return typeof K == "symbol" ? K : String(K)
			}

			function An(x, K) {
				if (typeof x != "object" || x === null) return x;
				var q = x[Symbol.toPrimitive];
				if (q !== void 0) {
					var ie = q.call(x, K || "default");
					if (typeof ie != "object") return ie;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (K === "string" ? String : Number)(x)
			}
			const Pn = "init",
				Jt = (x, K) => {
					a.$e(function(q) {
						q.setTag(Pn, K), a.Tb(x)
					}), P(x)
				},
				Kt = async (x, K) => {
					try {
						return await x(), !0
					} catch (q) {
						return Jt(q, K), !1
					}
				};
			(async () => {
				try {
					var x, K, q;
					t.g.build = On({}, {
						branch: "master",
						isReleaseCandidate: "true",
						commit: "7c3d21a922a45f6aba6f4b55bb19ec50dd304a82",
						dashVersion: "33740998",
						env: "production",
						builtAt: 1749127936974,
						versions: {
							"@cloudflare/app-dash": "25.161.22",
							node: "20.10.0",
							yarn: "3.2.2",
							webpack: "5.88.2"
						}
					}, {
						isPreviewDeploy: (0, ae.p)()
					}), $e();
					const ie = [{
						fn: () => t.e(58215).then(t.bind(t, "../react/utils/api.ts")),
						tag: "utils/api"
					}, {
						fn: () => D(J),
						tag: "hashScroll"
					}, {
						fn: S.Z,
						tag: "styles"
					}, {
						fn: Me,
						tag: "mfePreviewData"
					}];
					for (const it of ie)
						if (!await Kt(it.fn, it.tag)) return;
					let fe;
					if (!await Kt(async () => {
							fe = await je()
						}, "bootstrap")) return;
					const we = (0, g.bh)(),
						Ae = ((x = fe) === null || x === void 0 ? void 0 : x.data) || {};
					we.dispatch((0, i.mW)("user", Ae == null ? void 0 : Ae.user));
					const xe = (K = fe) === null || K === void 0 || (q = K.data) === null || q === void 0 ? void 0 : q.user;
					return t.g.bootstrap = fe, xe && xe.id && Ye(xe.id), !await Kt(X, "gates") || !await Kt(Cn, "tracking") ? void 0 : bn()
				} catch (ie) {
					Jt(ie, "global")
				}
			})()
		},
		"../libs/init/initGlobal.ts": function() {
			window.global || (window.global = window)
		},
		"../react/app/HoCs/withEntities.tsx": function($, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/redux/index.ts"),
				c = t("../react/common/selectors/userSelectors.ts"),
				l = t("../react/common/selectors/zoneSelectors.ts"),
				m = t("../react/common/selectors/accountSelectors.ts"),
				s = t("../react/common/utils/isGuards.ts"),
				p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t.n(p);

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(g) {
					for (var u = 1; u < arguments.length; u++) {
						var d = arguments[u];
						for (var I in d) Object.prototype.hasOwnProperty.call(d, I) && (g[I] = d[I])
					}
					return g
				}, n.apply(this, arguments)
			}
			const a = g => {
				function u(d) {
					const I = (0, o.UM)(),
						D = (0, p.useHistory)(),
						h = (0, p.useLocation)(),
						v = (0, p.useRouteMatch)("/:accountId([0-9a-f]{32})?/:zoneName?/:app?/:tab?"),
						w = (0, o.p4)(c.PR) || null,
						_ = (0, o.p4)(l.nA) || null,
						T = (0, o.p4)(m.uF),
						k = T ? T.account : null;
					if (!v) return null;
					const {
						accountId: A,
						app: P,
						tab: S
					} = v.params, b = v.params.zoneName && ((0, s.v5)(v.params.zoneName) || v.params.zoneName.indexOf(".") > 0) ? v.params.zoneName : void 0;
					return r().createElement(g, n({
						dispatch: I,
						history: D,
						location: h,
						match: v,
						user: w,
						membership: A ? T : null,
						account: A ? k : null,
						accountId: A || null,
						zone: b ? _ : null,
						zoneName: b || null,
						app: b ? P : null,
						tab: b ? S : null
					}, d))
				}
				return u.displayName = `withEntities(${i(g)})`, u
			};

			function i(g) {
				return g.displayName || g.name || "Component"
			}
			E.Z = a
		},
		"../react/app/components/AccountHome/tracking.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				$$: function() {
					return _
				},
				CK: function() {
					return P
				},
				KV: function() {
					return k
				},
				OX: function() {
					return A
				},
				QV: function() {
					return w
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
					return S
				},
				o1: function() {
					return T
				},
				tw: function() {
					return I
				},
				xD: function() {
					return D
				}
			});
			var e = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = t.n(e),
				o = t("../react/utils/url.ts");
			const c = "projects table click",
				l = "click create application",
				m = "account home dev plat - product card click",
				s = "account home dev plat - empty state CTA click",
				p = "account home dev plat - view all projects click",
				f = "account home zero trust - link card click",
				n = "account home zero trust - onboarding card click",
				a = "account home zero trust - analytics link click",
				i = "account home zero trust - product card click",
				g = "account home zero trust - plan pill click",
				u = "account home zero trust - plan fallback link click",
				d = {
					SPARROW_PROJECTS_TABLE_CLICK: c,
					SPARROW_CREATE_PROJECT_CLICK: l,
					SPARROW_PRODUCT_CARD_CLICK: m,
					SPARROW_EMPTY_STATE_CTA_CLICK: s,
					SPARROW_VIEW_ALL_PROJECTS_CLICK: p,
					SPARROW_ZERO_TRUST_LINK_CARD_CLICK: f,
					SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK: n,
					SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK: a,
					SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK: i,
					SPARROW_ZERO_TRUST_PLAN_PILL_CLICK: g,
					SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK: u
				},
				I = L => {
					r().sendEvent(c, {
						component: L
					})
				},
				D = L => {
					r().sendEvent(c, {
						component: "menu",
						subcomponent: L
					})
				},
				h = () => {
					r().sendEvent(l, {
						category: "Projects Table"
					})
				},
				v = ({
					category: L,
					product: R
				}) => {
					r().sendEvent(m, {
						category: L,
						product: R
					})
				},
				w = () => {
					r().sendEvent(s)
				},
				_ = () => {
					r().sendEvent(p)
				},
				T = L => {
					r().sendEvent(n, {
						category: L
					})
				},
				k = ({
					category: L,
					href: R
				}) => {
					r().sendEvent(f, {
						category: L,
						href: (0, o.cm)(R)
					})
				},
				A = ({
					category: L,
					href: R
				}) => {
					r().sendEvent(a, {
						category: L,
						href: (0, o.cm)(R)
					})
				},
				P = ({
					category: L,
					product: R,
					href: H
				}) => {
					r().sendEvent(i, {
						category: L,
						product: R,
						href: (0, o.cm)(H)
					})
				},
				S = ({
					plan: L
				}) => {
					r().sendEvent(g, {
						plan: L
					})
				},
				b = () => {
					r().sendEvent(u)
				}
		},
		"../react/app/components/DeepLink/actions.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				BQ: function() {
					return p
				},
				Bh: function() {
					return m
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
				o = (0, e.R)(r.ADD_SITE, g => ({
					payload: g
				})),
				c = (0, e.R)(r.RESOLVING_START),
				l = (0, e.R)(r.RESOLVING_COMPLETE),
				m = (0, e.R)(r.SELECT_ZONE, g => ({
					payload: g
				})),
				s = (0, e.R)(r.SELECT_ACCOUNT, g => ({
					payload: g
				})),
				p = (0, e.R)(r.SELECT_PAGES_PROJECT, g => ({
					payload: g
				})),
				f = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, g => ({
					payload: g
				})),
				n = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, g => ({
					accountIds: g
				})),
				a = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				i = (0, e.R)(r.SELECT_WORKER, g => ({
					payload: g
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function($, E, t) {
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
					return m
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
				m = "add",
				s = "multiSkuProducts",
				p = "/:account/billing/checkout",
				f = "/:account/:zone/billing/checkout",
				n = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				ZP: function() {
					return S
				},
				U: function() {
					return P.U
				},
				dd: function() {
					return P.dd
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
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t("../react/app/components/DeepLink/utils.ts"),
				l = t("../react/utils/bootstrap.ts"),
				m = t("../react/app/components/DeepLink/actions.ts"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(s);

			function f(b) {
				for (var L = 1; L < arguments.length; L++) {
					var R = arguments[L] != null ? Object(arguments[L]) : {},
						H = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(R).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(R, ae).enumerable
					})), H.forEach(function(ae) {
						n(b, ae, R[ae])
					})
				}
				return b
			}

			function n(b, L, R) {
				return L = a(L), L in b ? Object.defineProperty(b, L, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[L] = R, b
			}

			function a(b) {
				var L = i(b, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function i(b, L) {
				if (typeof b != "object" || b === null) return b;
				var R = b[Symbol.toPrimitive];
				if (R !== void 0) {
					var H = R.call(b, L || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(b)
			}
			class g {
				constructor(L, R) {
					n(this, "deepLink", void 0), n(this, "legacyDeepLink", void 0), n(this, "resolvers", void 0), n(this, "startTime", Date.now()), n(this, "endTime", Date.now()), n(this, "_done", !1), n(this, "resolverStart", H => {
						this.resolvers.set(H, {
							name: H,
							startTime: Date.now(),
							userActions: []
						})
					}), n(this, "resolverDone", H => {
						const ae = this.resolvers.get(H);
						ae && (ae.endTime = Date.now(), this.resolvers.set(H, ae))
					}), n(this, "resolverCancel", H => {
						this.resolverDone(H), this.cancel()
					}), n(this, "start", () => {
						this.startTime = Date.now()
					}), n(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), n(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), n(this, "createUserActionTracker", H => {
						const ae = "NO_ACTION",
							se = {
								actionType: ae,
								startTime: 0
							};
						return {
							start: (ce = ae) => {
								const Y = this.resolvers.get(H);
								se.actionType = ce, se.startTime = Date.now(), Y && Y.userActions.push(se)
							},
							finish: (ce = ae) => {
								se.actionType = ce, se.endTime = Date.now()
							},
							cancel: (ce = ae) => {
								se.actionType = ce, se.endTime = Date.now(), this.resolverCancel(H)
							}
						}
					}), this.deepLink = L, this.legacyDeepLink = R, this.resolvers = new Map
				}
				track(L) {
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
							H = this.resolvers.size === 0 ? R : Array.from(this.resolvers.values()).reduce((ae, se) => {
								const ce = u(se.startTime, se.endTime),
									Y = se.userActions.reduce((G, N) => {
										const B = u(N.startTime, N.endTime);
										return {
											totalTime: G.totalTime + B,
											actions: G.actions.set(N.actionType, B)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									z = ce - Y.totalTime;
								return f({}, ae, {
									totalTime: ae.totalTime + ce,
									totalUserActionsTime: ae.totalUserActionsTime + Y.totalTime,
									totalCpuTime: ae.totalCpuTime + z,
									[`${se.name}ResolverTotalTime`]: ce,
									[`${se.name}ResolverTotalCpuTime`]: z,
									[`${se.name}ResolverTotalUserActionsTime`]: Y.totalTime
								}, Array.from(Y.actions.keys()).reduce((G, N) => f({}, G, {
									[`${se.name}Resolver/${N}`]: Y.actions.get(N)
								}), {}))
							}, f({}, R, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						p().sendEvent(L, H)
					} catch (R) {
						console.error(R)
					}
				}
			}

			function u(b = Date.now(), L = Date.now()) {
				return (L - b) / 1e3
			}
			var d = t("../react/app/components/DeepLink/constants.ts"),
				I = t("../react/common/hooks/useCachedState.ts"),
				D = t("../react/common/hooks/usePrevious.ts");

			function h(b) {
				for (var L = 1; L < arguments.length; L++) {
					var R = arguments[L] != null ? Object(arguments[L]) : {},
						H = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(R).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(R, ae).enumerable
					})), H.forEach(function(ae) {
						v(b, ae, R[ae])
					})
				}
				return b
			}

			function v(b, L, R) {
				return L = w(L), L in b ? Object.defineProperty(b, L, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[L] = R, b
			}

			function w(b) {
				var L = _(b, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function _(b, L) {
				if (typeof b != "object" || b === null) return b;
				var R = b[Symbol.toPrimitive];
				if (R !== void 0) {
					var H = R.call(b, L || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(b)
			}
			var k = ({
					children: b
				}) => {
					const L = (0, r.TZ)(),
						R = (0, o.useHistory)(),
						H = (0, D.Z)(R.location.pathname),
						[ae, se] = (0, e.useState)(!0),
						[ce, Y] = (0, I.j)(void 0, {
							key: d.Fj
						}),
						[z, G] = (0, I.j)(void 0, {
							key: d.O5
						}),
						[N, B] = (0, I.j)(void 0, {
							key: d.s$
						}),
						O = (0, l.$8)();
					let M = new URLSearchParams(R.location.search);
					const F = (0, c.mL)(R.location.pathname, M);
					let ee = null,
						J = null;
					if (M.has(d.Tc) && M.delete(d.Tc), M.get(d.BV)) ee = M.get(d.BV), R.location.hash && (J = R.location.hash);
					else if (ce) {
						const Q = new URLSearchParams(ce);
						Q.get(d.BV) && (ee = Q.get(d.BV), M = Q)
					} else F && (M.set(d.BV, F), ee = F);
					if (ee && d._h.test(ee)) {
						const Q = M.getAll(d.Kt),
							U = JSON.stringify(Q);
						Q.length && U !== N && B(U), M.has(d.Tc) && M.delete(d.Tc), M.delete(d.Kt)
					}!O && ce === void 0 && ee && Y(M.toString());
					const re = async () => {
						try {
							if ((0, c.I3)(ee) && O) {
								ce && Y(void 0), L.dispatch((0, m.r4)()), se(!0), ee && ee !== z && G(ee);
								const Q = await (0, c.py)(ee, se, L, R, H, new g(ee, F ? `${R.location.pathname}${R.location.search}` : void 0));
								M.delete(d.BV);
								const U = M.toString();
								R.replace(h({}, R.location, {
									pathname: Q,
									search: U
								}, J ? {
									hash: J
								} : {})), L.dispatch((0, m.WF)())
							}
						} catch (Q) {
							L.dispatch((0, m.WF)()), console.error(Q)
						} finally {
							se(!1)
						}
					};
					return (0, e.useEffect)(() => {
						re()
					}, [R.location.pathname, R.location.search]), (ae || (0, c.I3)(ee)) && O ? null : b
				},
				A = t("../react/app/components/DeepLink/reducer.ts"),
				P = t("../react/app/components/DeepLink/selectors.ts"),
				S = k
		},
		"../react/app/components/DeepLink/reducer.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				E: function() {
					return c
				},
				r: function() {
					return m
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

			function m(s = l, p) {
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
		"../react/app/components/DeepLink/selectors.ts": function($, E, t) {
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
		"../react/app/components/DeepLink/utils.ts": function($, E, t) {
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
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = t("../react/app/components/DeepLink/reducer.ts"),
				o = t("../react/app/components/DeepLink/selectors.ts"),
				c = t("../react/app/components/DeepLink/constants.ts"),
				l = t("../react/common/validators/index.js"),
				m = t("../react/common/utils/isGuards.ts");
			const s = d => (0, l.Lb)(d) && (d.split(".").length > 1 || (0, m.v5)(d)),
				p = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				f = d => typeof d == "string" && d.startsWith("/"),
				n = (d, I) => D => new Promise((h, v) => {
					I.start();
					const w = d.subscribe(() => {
						const _ = (0, o.yI)(d.getState());
						_ === r.E ? (I.cancel(), w(), v("DeepLink: waitForAction out of context.")) : D(_) && (I.finish(_.type), w(), h(_))
					})
				}),
				a = (d, I, D) => (h, v) => new Promise((w, _) => {
					D.start();
					const T = I.location.pathname;
					h = new URL(h, window.location.href).pathname, T !== h && (D.cancel(), _(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${h}", but on "${T}". You need to redirect to "${h}", and unblockRouter in your Resolver, before you use this function.`));
					const k = d.subscribe(() => {
						const A = (0, o.yI)(d.getState()),
							P = I.location.pathname,
							b = new URLSearchParams(I.location.search).get(c.BV);
						(P !== h || !!b) && (D.cancel(), k(), _(`DeepLink: waitForPageAction user navigated away from "${h}" to "${P}${b?I.location.search:""}"`)), A === r.E ? (D.cancel(), k(), _("DeepLink: waitForPageAction out of context.")) : v(A) && (D.finish(A.type), k(), w(A))
					})
				});

			function i(d) {
				const I = [],
					D = d.split("?")[0].split("/");
				for (let h of D) h.length !== 0 && (h.startsWith(":") ? I.push({
					value: h.substring(1),
					type: "dynamic"
				}) : I.push({
					value: h,
					type: "static"
				}));
				return I
			}
			async function g(d, I, D, h, v, w) {
				w.start();
				const _ = i(d),
					k = await (await Promise.all([t.e(32375), t.e(78839), t.e(40517), t.e(8756)]).then(t.bind(t, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					A = {};
				let P = "";
				for (const [S, b] of _.entries())
					if (b.type === "static") P = [P, b.value].join("/");
					else if (b.type === "dynamic" && p.is(b.value) && b.value in k) {
					w.resolverStart(b.value);
					const L = await k[b.value]({
						deepLink: d,
						blockRouter: () => I(!0),
						unblockRouter: () => I(!1),
						routerHistory: h,
						resolvedValues: A,
						store: D,
						referringRoute: v,
						uri: {
							currentPartIdx: S,
							parts: _
						},
						waitForAction: n(D, w.createUserActionTracker(b.value)),
						waitForPageAction: a(D, h, w.createUserActionTracker(b.value))
					});
					w.resolverDone(b.value), P = [P, L].join("/"), A[b.value] = L
				} else throw w.cancel(), new Error(`DeepLink: Resolver with name '${b.value}' is not supported.`);
				return w.done(), P
			}

			function u(d, I) {
				const D = ":account",
					h = ":zone",
					v = I.get("zone");
				if (v) return I.delete("zone"), `/${D}/${h}/${v}`;
				const w = I.get("account");
				if (w) return I.delete("account"), `/${D}/${w}`;
				if (d === "/overview") return `/${D}/${h}`;
				const _ = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const T of _) {
					const k = T.length;
					if (d.startsWith(T) && (d.length === k || d[k] === "/")) return `/${D}/${h}${d}`
				}
				switch (d) {
					case "/account/billing":
						return `/${D}/billing`;
					case "/account/subscriptions":
						return `/${D}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${D}/dns-firewall`;
					case "/account/audit-log":
						return `/${D}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function($, E, t) {
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
				m = t("../react/utils/zaraz.ts"),
				s = t("../react/utils/url.ts"),
				p = t("../node_modules/@cloudflare/elements/es/index.js"),
				f = t("../node_modules/@cloudflare/component-button/es/index.js"),
				n = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				a = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				i = t.n(a),
				g = t("../react/common/components/Page.tsx"),
				u = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWxhYmVsbGVkYnk9InJlbG9hZC1wYWdlLWJ3cC1zdmctZGVzYyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVzYyBpZD0icmVsb2FkLXBhZ2UtYndwLXN2Zy1kZXNjIj5SZWZyZXNoIG1hc2NvdCAtIFNoZWV0IG9mIHBhcGVyIHdpdGggYSBoYXBweSBmYWNlPC9kZXNjPgogICAgPHBhdGgKICAgICAgICBkPSJNMTkwLjQ2OSAxMDcuMTM0SDkuNDc4di44OTFoMTgwLjk5MXYtLjg5MVpNNjMuMDQgOTguNDI3SDM3LjY4M3YuODlINjMuMDR2LS44OVpNMjguMjM1IDk4LjQyN0gtLjAyN3YuODloMjguMjYydi0uODlaTTE1Ni4wMjIgOTguNDI3aC0xNi42NTZ2Ljg5aDE2LjY1NnYtLjg5Wk0yMDAuMDI3IDk4LjQyN2gtMzcuMDQ0di44OWgzNy4wNDR2LS44OVoiCiAgICAgICAgZmlsbD0iIzAwNTFDMyIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDEwNy41OEg2MC41OFY3LjAwNmg2Mi41MjNsMTYuMjYzIDE2LjI2MnY4NC4zMTJaIiBmaWxsPSIjQUNFMkYwIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTM5LjgxMiAxMDguMDI1SDYwLjEzNFY2LjU2MWg2My4xNTRsMTYuNTI0IDE2LjUyM3Y4NC45NDFabS03OC43ODctLjg5MWg3Ny44OTZWMjMuNDUzTDEyMi45MTkgNy40NUg2MS4wMjV2OTkuNjgzWiIKICAgICAgICBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGggZD0iTTY1LjIyMyAxMDIuOTM2VjExLjY0OWg2Mi41MjRsNi45NzYgNi45NzZ2ODQuMzExaC02OS41WiIgZmlsbD0iI2ZmZiIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTg2Ljg1NSA0MS40MzhhNC4wMTQgNC4wMTQgMCAwIDEgNC4wMSA0LjAwOWgtLjg5MmEzLjEyMSAzLjEyMSAwIDAgMC0zLjExOC0zLjExOCAzLjEyMSAzLjEyMSAwIDAgMC0zLjExOCAzLjExOGgtLjg5YTQuMDE0IDQuMDE0IDAgMCAxIDQuMDA4LTQuMDA5Wk0xMTMuMDkxIDQxLjQzOGE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOSA0LjAwOWgtLjg5MWEzLjEyMiAzLjEyMiAwIDAgMC0zLjExOC0zLjExOCAzLjEyMiAzLjEyMiAwIDAgMC0zLjExOCAzLjExOGgtLjg5MWE0LjAxMyA0LjAxMyAwIDAgMSA0LjAwOS00LjAwOVpNMTEyLjg0MSA1My4zNTJsLjQ4NC43NDhjLTguMjI0IDUuMzI1LTE4LjY0IDUuMzU3LTI3LjE4Ni4wODNsLjQ2OS0uNzU4YzguMjQ5IDUuMDkxIDE4LjMgNS4wNjQgMjYuMjMzLS4wNzNaIgogICAgICAgIGZpbGw9IiMwMDUxQzMiIC8+CiAgICA8cGF0aCBkPSJNMTM5LjM2NiAyMy4yNjhoLTE2LjI2MlY3LjAwNiIgZmlsbD0iIzAwMzY4MiIgLz4KICAgIDxwYXRoIGQ9Ik0xMzkuMzY2IDIzLjcxNGgtMTYuNzA4VjcuMDA2aC44OTF2MTUuODE3aDE1LjgxN3YuODlaIiBmaWxsPSIjMDA1MUMzIiAvPgogICAgPHBhdGggZD0ibTEyMy40MTggNi42OTItLjYzLjYzIDE2LjI2MiAxNi4yNjMuNjMtLjYzLTE2LjI2Mi0xNi4yNjNaIiBmaWxsPSIjMDA1MEU0IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJtODYuNjMzIDMyLjUzLTYuNjYgMy43My40MzYuNzc3IDYuNjU5LTMuNzMtLjQzNS0uNzc3Wk0xMTMuMDE5IDMyLjUzNmwtLjQzNS43NzcgNi42NiAzLjcyOS40MzUtLjc3Ny02LjY2LTMuNzNaTTM1Ljk5OCA0M2MxLjUzMSAwIDMuMDA1LjU4NiA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MSA0Ljk4MSAwIDEgMCAxLjQ2IDIuNTI4bC45NzUtLjIyNUE2IDYgMCAxIDEgMzUuOTk4IDQzWk0xNjMuOTk4IDQzYTUuOTkgNS45OSAwIDAgMSA0LjExNyAxLjYzOGwtLjMxNy0yLjA4OC45ODktLjE1LjU1NyAzLjY2NC0zLjY2NS41NTctLjE1LS45ODkgMS44ODItLjI4NWE0Ljk4MyA0Ljk4MyAwIDAgMC03LjcwOSA2LjEzNyA0Ljk4MiA0Ljk4MiAwIDAgMCA5LjE2OS0zLjYwOWwuOTc1LS4yMjVhNS45OTggNS45OTggMCAwIDEtNi4xNzIgNy4zNDEgNS45OTggNS45OTggMCAwIDEtNS4zMzktNy45NjhBNS45OTcgNS45OTcgMCAwIDEgMTYzLjk5OCA0M1pNMTYuOTk4IDU4YzEuNTMxIDAgMy4wMDUuNTg2IDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgxIDQuOTgxIDAgMSAwIDEuNDYgMi41MjhsLjk3NS0uMjI1QTYgNiAwIDEgMSAxNi45OTggNThaTTE4MS45OTggNThhNS45OSA1Ljk5IDAgMCAxIDQuMTE3IDEuNjM4bC0uMzE3LTIuMDg4Ljk4OS0uMTUuNTU3IDMuNjY0LTMuNjY1LjU1Ny0uMTUtLjk4OSAxLjg4Mi0uMjg1YTQuOTgzIDQuOTgzIDAgMCAwLTcuNzA5IDYuMTM3IDQuOTgyIDQuOTgyIDAgMCAwIDkuMTY5LTMuNjA5bC45NzUtLjIyNWE1Ljk5OCA1Ljk5OCAwIDAgMS02LjE3MiA3LjM0MSA1Ljk5OCA1Ljk5OCAwIDAgMS01LjMzOS03Ljk2OEE1Ljk5NyA1Ljk5NyAwIDAgMSAxODEuOTk4IDU4Wk00OC45OTggNjdjMS41MzEgMCAzLjAwNS41ODYgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODEgNC45ODEgMCAxIDAgMS40NiAyLjUyOGwuOTc1LS4yMjVBNiA2IDAgMSAxIDQ4Ljk5OCA2N1pNMTUxLjk5OCA2N2E1Ljk5IDUuOTkgMCAwIDEgNC4xMTcgMS42MzhsLS4zMTctMi4wODguOTg5LS4xNS41NTcgMy42NjQtMy42NjUuNTU3LS4xNS0uOTg5IDEuODgyLS4yODVhNC45ODMgNC45ODMgMCAwIDAtNy43MDkgNi4xMzcgNC45ODIgNC45ODIgMCAwIDAgOS4xNjktMy42MDlsLjk3NS0uMjI1YTUuOTk4IDUuOTk4IDAgMCAxLTYuMTcyIDcuMzQxIDUuOTk4IDUuOTk4IDAgMCAxLTUuMzM5LTcuOTY4QTUuOTk3IDUuOTk3IDAgMCAxIDE1MS45OTggNjdaIgogICAgICAgIGZpbGw9IiNBQ0UyRjAiIC8+Cjwvc3ZnPg==";

			function d() {
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
				sentryTag: D,
				children: h,
				fallbackComponent: v
			}) => r().createElement(o.SV, {
				beforeCapture: w => {
					m.tg === null || m.tg === void 0 || m.tg.track("page-error", {
						page: (0, s.Fl)(window.location.pathname)
					})
				},
				onError: w => {
					({
						REDUX_LOGGER: void 0,
						E2E: void 0
					}).TESTING && t.g.logAppError(w)
				},
				fallback: ({
					error: w,
					eventId: _
				}) => {
					var T;
					if (v) return v;
					const k = l.e.getEventId() || _;
					return (w == null || (T = w.message) === null || T === void 0 ? void 0 : T.includes("Loading chunk")) ? (console.warn("New release is available, refresh to update the app"), r().createElement(d, null)) : r().createElement(c.Z, {
						type: "page",
						error: w,
						eventId: k,
						sentryTag: D
					})
				}
			}, h)
		},
		"../react/app/components/Footer.tsx": function($, E, t) {
			"use strict";
			t.d(E, {
				Z: function() {
					return B
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				p = t.n(s),
				f = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				n = t("../react/common/components/Apple/utils.tsx"),
				a = t("../react/utils/translator.tsx"),
				i = t("../../../../node_modules/moment/moment.js"),
				g = t.n(i);
			const u = () => {
					const O = g()().format("YYYY"),
						M = F => {
							p().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: F
							})
						};
					return r().createElement(d, {
						marginTop: "auto"
					}, r().createElement(I, null, r().createElement(D, null, r().createElement(h, null, "\xA9 ", O, " Cloudflare, Inc."), r().createElement(h, null, r().createElement(v, null, r().createElement(w, {
						showOnDeskTop: !1
					}, r().createElement(_, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => M("Support")
					}, r().createElement(a.cC, {
						id: "common.support"
					}))), r().createElement(w, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => M("Privacy Policy")
					}, r().createElement(a.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(w, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => M("Terms of Use")
					}, r().createElement(a.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(w, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => M("Cookie Preferences")
					}, r().createElement(a.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(w, null, r().createElement(_, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => M("Trademark")
					}, r().createElement(a.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(v, null, r().createElement(w, null, r().createElement(_, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => M("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(a.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				d = (0, l.createComponent)(({
					theme: O,
					marginTop: M
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: M
				})),
				I = (0, l.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				D = (0, l.createComponent)(({
					theme: O
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${O.space[3]}px`
					}
				})),
				h = (0, l.createComponent)(({
					theme: O
				}) => ({
					width: "100%",
					color: O.colors.white,
					fontSize: O.fontSizes[1],
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
					theme: O
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: O.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				w = (0, l.createComponent)(({
					showOnDeskTop: O = !0,
					theme: M
				}) => ({
					color: M.colors.white,
					fontSize: M.fontSizes[1],
					height: "20px",
					display: O ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: M.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: M.space[3],
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
					theme: O
				}) => ({
					textDecoration: "none",
					color: O.colors.white,
					"&:hover": {
						color: O.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var T = u,
				k = t("../react/pages/welcome/routes.ts"),
				A = t("../react/utils/cookiePreferences.ts"),
				P = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				b = () => {
					const [O, M] = (0, e.useState)(!1), F = (0, A.wV)(), ee = () => {
						M(!0)
					}, J = () => {
						M(!1)
					}, re = F && F === "US" ? (0, a.ZP)("footer.cpra_cta.privacy_choices") : (0, a.ZP)("footer.cpra_cta.cookie_preferences"), Q = {
						background: "transparent",
						borderRadius: "none",
						color: O ? (0, m.Yc)() ? "#ee730a" : "#003681" : (0, m.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: O ? "underline" : "none",
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
						style: Q,
						onMouseEnter: ee,
						onMouseLeave: J
					}, r().createElement(c.Ei, {
						height: 15,
						src: P,
						mr: 2,
						alt: re
					}), re)
				};

			function L() {
				return L = Object.assign ? Object.assign.bind() : function(O) {
					for (var M = 1; M < arguments.length; M++) {
						var F = arguments[M];
						for (var ee in F) Object.prototype.hasOwnProperty.call(F, ee) && (O[ee] = F[ee])
					}
					return O
				}, L.apply(this, arguments)
			}

			function R(O, M) {
				if (O == null) return {};
				var F = H(O, M),
					ee, J;
				if (Object.getOwnPropertySymbols) {
					var re = Object.getOwnPropertySymbols(O);
					for (J = 0; J < re.length; J++) ee = re[J], !(M.indexOf(ee) >= 0) && (!Object.prototype.propertyIsEnumerable.call(O, ee) || (F[ee] = O[ee]))
				}
				return F
			}

			function H(O, M) {
				if (O == null) return {};
				var F = {},
					ee = Object.keys(O),
					J, re;
				for (re = 0; re < ee.length; re++) J = ee[re], !(M.indexOf(J) >= 0) && (F[J] = O[J]);
				return F
			}
			const ae = (0, l.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,m.Yc)()?m.rS.colors.orange[6]:m.rS.colors.blue[4]}`
					}
				}), c.A),
				se = (0, l.createStyledComponent)(({
					theme: O
				}) => ({
					color: O.colors.gray[4],
					textDecoration: "none",
					marginTop: (0, f.tq)() ? "8px" : 0,
					":hover, :focus": {
						color: O.colors.gray[4]
					}
				}), c.A),
				ce = O => {
					let {
						onClick: M
					} = O, F = R(O, ["onClick"]);
					return React.createElement(ae, L({
						onClick: ee => {
							sparrow.sendEvent("navigate footer nav", {
								destinationPage: F.href
							}), M && M(ee)
						}
					}, F))
				},
				Y = O => {
					let {
						children: M,
						target: F,
						rel: ee
					} = O, J = R(O, ["children", "target", "rel"]);
					return r().createElement(se, L({
						target: F || "_blank",
						rel: ee || "noopener noreferrer"
					}, J), M)
				},
				z = (0, l.createStyledComponent)(({
					theme: O
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
							fontSize: O.fontSizes[2],
							borderLeft: "1px solid",
							borderLeftColor: O.colors.gray[4],
							paddingLeft: "16px"
						},
						"&:first-child > a": {
							borderLeft: "none"
						}
					}
				}), c.Ul),
				G = (0, l.createStyledComponent)(() => ({
					display: "flex",
					flexDirection: (0, f.tq)() ? "column" : "row",
					justifyContent: "center",
					paddingBottom: "16px"
				}), c.ZC);
			var B = () => {
				const O = [k.d.root.pattern].some(F => (0, o.matchPath)(location.pathname, {
					path: F
				}));
				if ((0, n.PP)()) return r().createElement(T, null);
				if (O) return null;
				const M = new Date().getFullYear();
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
				}, r().createElement(G, null, r().createElement(z, null, r().createElement(c.Li, null, r().createElement(Y, {
					href: "https://support.cloudflare.com"
				}, (0, a.ZP)("common.support"))), r().createElement(c.Li, null, r().createElement(Y, {
					href: "https://www.cloudflarestatus.com"
				}, r().createElement(c.Dr, {
					textTransform: "capitalize"
				}, (0, a.ZP)("footer.system_status")))), r().createElement(c.Li, null, r().createElement(Y, {
					href: "https://www.cloudflare.com/careers/"
				}, (0, a.ZP)("footer.careers"))), r().createElement(c.Li, null, r().createElement(Y, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, a.ZP)("footer.tos_reduced"))), r().createElement(c.Li, null, r().createElement(Y, {
					href: "https://www.cloudflare.com/disclosure/"
				}, (0, a.ZP)("footer.security_issues"))), r().createElement(c.Li, null, r().createElement(Y, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, a.ZP)("footer.privacy_policy"))), r().createElement(c.Li, null, r().createElement(b, null)), r().createElement(c.Li, null, r().createElement(c.Dr, {
					fontSize: 2,
					color: "gray.4"
				}, "\xA9 ", M, " Cloudflare, Inc.")))))
			}
		},
		"../react/app/components/Forbidden.jsx": function($, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/components/ErrorStatus.tsx"),
				c = t("../react/utils/translator.tsx");
			const l = m => r().createElement(o.Z, m, (0, c.ZP)("error.forbidden"));
			E.Z = l
		},
		"../react/app/components/GlobalHeader/AddProductDropdown/index.tsx": function($, E, t) {
			"use strict";
			t.d(E, {
				S: function() {
					return I
				},
				Z: function() {
					return re
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				c = t("../node_modules/@cloudflare/elements/es/index.js"),
				l = t("../node_modules/@cloudflare/component-button/es/index.js"),
				m = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				s = t("../../../../node_modules/@cloudflare/util-responsive/es/index.js"),
				p = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				f = t.n(p),
				n = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				a = t("../react/common/components/AccessControl/index.js"),
				i = t("../react/common/components/ButtonWithDropdown.tsx"),
				g = t("../react/common/components/Dropdown/index.tsx"),
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
				D = () => {
					const Q = (0, d.Z)("super-add-button-copy-change"),
						U = [{
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
					switch (Q) {
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
							}, ...U];
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
							}, ...U];
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
							}, ...U];
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
							}, ...U];
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
							}, ...U];
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

			function w(Q) {
				for (var U = 1; U < arguments.length; U++) {
					var V = arguments[U] != null ? Object(arguments[U]) : {},
						ne = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(V).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(V, ge).enumerable
					})), ne.forEach(function(ge) {
						_(Q, ge, V[ge])
					})
				}
				return Q
			}

			function _(Q, U, V) {
				return U = T(U), U in Q ? Object.defineProperty(Q, U, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[U] = V, Q
			}

			function T(Q) {
				var U = k(Q, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function k(Q, U) {
				if (typeof Q != "object" || Q === null) return Q;
				var V = Q[Symbol.toPrimitive];
				if (V !== void 0) {
					var ne = V.call(Q, U || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(Q)
			}

			function A() {
				return A = Object.assign ? Object.assign.bind() : function(Q) {
					for (var U = 1; U < arguments.length; U++) {
						var V = arguments[U];
						for (var ne in V) Object.prototype.hasOwnProperty.call(V, ne) && (Q[ne] = V[ne])
					}
					return Q
				}, A.apply(this, arguments)
			}

			function P(Q, U) {
				if (Q == null) return {};
				var V = S(Q, U),
					ne, ge;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(Q);
					for (ge = 0; ge < de.length; ge++) ne = de[ge], !(U.indexOf(ne) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Q, ne) || (V[ne] = Q[ne]))
				}
				return V
			}

			function S(Q, U) {
				if (Q == null) return {};
				var V = {},
					ne = Object.keys(Q),
					ge, de;
				for (de = 0; de < ne.length; de++) ge = ne[de], !(U.indexOf(ge) >= 0) && (V[ge] = Q[ge]);
				return V
			}
			const b = Q => {
					let {
						title: U,
						trackingEvent: V,
						icon: ne,
						url: ge,
						description: de,
						disabled: ue
					} = Q, te = P(Q, ["title", "trackingEvent", "icon", "url", "description", "disabled"]);
					return r().createElement(L, A({
						to: !ue && ge || "#",
						"aria-disabled": ue,
						onClick: () => {
							f().sendEvent(V, {
								category: "Onboarding",
								component: "Global add dropdown"
							})
						}
					}, te), r().createElement(c.ZC, {
						display: "flex"
					}, r().createElement(o.J, {
						type: ne,
						size: 24,
						mr: 2,
						mt: 1
					}), r().createElement(c.ZC, {
						display: "flex",
						flexDirection: "column",
						flex: "1"
					}, r().createElement(c.ZC, {
						fontSize: 3
					}, r().createElement(u.cC, U)), r().createElement(c.ZC, {
						fontSize: 2,
						color: "gray.4"
					}, r().createElement(u.cC, de)))))
				},
				L = (0, n.createStyledComponent)(({
					theme: Q
				}) => {
					const U = {
						cursor: "pointer",
						backgroundColor: (0, m.Yc)() ? Q.colors.gray[8] : Q.colors.gray[9],
						color: Q.colors.gray[2]
					};
					return {
						display: "block",
						width: "100%",
						px: [10, 14, 18],
						py: 8,
						background: Q.colors.background,
						color: Q.colors.gray[2],
						fontSize: Q.fontSizes[2],
						userSelect: "none",
						textDecoration: "none",
						textAlign: "left",
						borderRadius: "1px",
						':hover, :focus, :focus-within, :hover:not([aria-disabled="true"])': U,
						':focus-within:not([aria-disabled="true"])': w({}, U, {
							boxShadow: "none",
							borderRadius: 0
						}),
						':is([aria-disabled="true"])': {
							color: Q.colors.gray[6],
							cursor: "not-allowed",
							pointerEvents: "none",
							opacity: .5
						}
					}
				}, v.Link);
			var R = b;

			function H() {
				return H = Object.assign ? Object.assign.bind() : function(Q) {
					for (var U = 1; U < arguments.length; U++) {
						var V = arguments[U];
						for (var ne in V) Object.prototype.hasOwnProperty.call(V, ne) && (Q[ne] = V[ne])
					}
					return Q
				}, H.apply(this, arguments)
			}

			function ae(Q) {
				for (var U = 1; U < arguments.length; U++) {
					var V = arguments[U] != null ? Object(arguments[U]) : {},
						ne = Object.keys(V);
					typeof Object.getOwnPropertySymbols == "function" && ne.push.apply(ne, Object.getOwnPropertySymbols(V).filter(function(ge) {
						return Object.getOwnPropertyDescriptor(V, ge).enumerable
					})), ne.forEach(function(ge) {
						se(Q, ge, V[ge])
					})
				}
				return Q
			}

			function se(Q, U, V) {
				return U = ce(U), U in Q ? Object.defineProperty(Q, U, {
					value: V,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : Q[U] = V, Q
			}

			function ce(Q) {
				var U = Y(Q, "string");
				return typeof U == "symbol" ? U : String(U)
			}

			function Y(Q, U) {
				if (typeof Q != "object" || Q === null) return Q;
				var V = Q[Symbol.toPrimitive];
				if (V !== void 0) {
					var ne = V.call(Q, U || "default");
					if (typeof ne != "object") return ne;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (U === "string" ? String : Number)(Q)
			}

			function z(Q, U) {
				if (Q == null) return {};
				var V = G(Q, U),
					ne, ge;
				if (Object.getOwnPropertySymbols) {
					var de = Object.getOwnPropertySymbols(Q);
					for (ge = 0; ge < de.length; ge++) ne = de[ge], !(U.indexOf(ne) >= 0) && (!Object.prototype.propertyIsEnumerable.call(Q, ne) || (V[ne] = Q[ne]))
				}
				return V
			}

			function G(Q, U) {
				if (Q == null) return {};
				var V = {},
					ne = Object.keys(Q),
					ge, de;
				for (de = 0; de < ne.length; de++) ge = ne[de], !(U.indexOf(ge) >= 0) && (V[ge] = Q[ge]);
				return V
			}
			const N = "GLOBAL_ADD_DROPDOWN",
				B = (0, n.createStyledComponent)(({
					theme: Q
				}) => ({
					"background-color": Q.colors.blue[5]
				}), l.zx),
				O = ({
					disableProducts: Q
				}) => {
					const U = D();
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
					}, U.map(V => {
						const ne = V || {},
							{
								disableOn: ge,
								permissionCheck: de
							} = ne,
							ue = z(ne, ["disableOn", "permissionCheck"]),
							te = ge && Q[ge],
							ye = ae({}, ue, {
								disabled: te
							});
						return de ? r().createElement(a.Z, {
							key: V.title.id,
							edit: de
						}, ({
							isEditable: Oe
						}) => Oe && r().createElement(R, ye)) : r().createElement(R, H({
							key: V.url
						}, ye))
					}))
				},
				M = ({
					disableProducts: Q,
					topNavType: U
				}) => {
					const V = () => (0, s.tq)() || U === "icon-only" ? r().createElement(c.ZC, {
						display: "flex",
						alignItems: "center",
						mr: 3
					}, r().createElement(B, {
						type: "plain",
						iconType: "plus",
						iconSize: 24,
						padding: 1,
						color: "white"
					})) : U === "text-icon" || U === "icon-only-with-add-button" ? r().createElement(l.zx, {
						type: "primary",
						mr: U === "text-icon" ? 2 : 3
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
					return r().createElement(F, {
						role: "group",
						"data-testid": N
					}, r().createElement(g.Lt, {
						trigger: U === "baseline" ? r().createElement(ee, null, r().createElement(o.J, {
							label: "plus",
							type: "plus"
						}), !(0, s.tq)() && r().createElement(r().Fragment, null, r().createElement(u.cC, {
							id: "common.add"
						}), " ", r().createElement(o.J, {
							label: "arrow",
							type: "caret-down"
						}))) : V(),
						menu: r().createElement(O, {
							disableProducts: Q
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
					theme: Q
				}) => ({
					lineHeight: 1,
					pr: 2,
					pl: 2,
					width: "fit-content",
					display: "flex",
					alignItems: "center",
					gap: 1,
					borderRadius: 4,
					borderColor: Q.colors.gray[6],
					borderWidth: 1,
					borderStyle: "solid",
					color: (0, m.Yc)() ? Q.colors.gray[1] : Q.colors.gray[4],
					cursor: "pointer",
					whiteSpace: "nowrap",
					backgroundColor: "transparent",
					mr: 1,
					padding: 2,
					"&:hover": {
						backgroundColor: (0, m.Yc)() ? Q.colors.gray[8] : Q.colors.gray[9]
					}
				}), c.zx);
			var J = M,
				re = J
		},
		"../react/app/components/LoadingSuspense.tsx": function($, E, t) {
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
				m = t("../react/app/components/ErrorStatus.tsx"),
				s = t("../react/common/components/EmptyPage.jsx"),
				p = t("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const f = "suspenseComplete";

			function n() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(f))
				}, [])
			}

			function a(D) {
				useEventListener(f, () => {
					window.setTimeout(D, 0)
				}, {
					target: window
				})
			}

			function i(...D) {
				const [h, v] = D;
				React.useLayoutEffect(h, v), a(h)
			}

			function g(D) {
				const [h, v] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const w = window.setTimeout(() => v(!0), D);
					return () => window.clearTimeout(w)
				}, []), h
			}
			const u = ({
				loadingTimeout: D = 1e3,
				stillLoadingTimeout: h = 9e3
			}) => {
				const v = g(D),
					w = g(h);
				if (n(), !v && !w) return r().createElement(s.Z, null);
				const _ = w ? r().createElement(l.cC, {
					id: "common.still_loading"
				}) : v ? r().createElement(l.cC, {
					id: "common.loading"
				}) : null;
				return r().createElement(m.Z, {
					size: 5
				}, r().createElement(c.ZC, {
					mr: 3
				}, r().createElement(o.g, {
					size: "2x"
				})), _)
			};
			var I = ({
				children: D
			}) => r().createElement(e.Suspense, {
				fallback: r().createElement(u, null)
			}, D)
		},
		"../react/app/components/Persistence/api.ts": function($, E, t) {
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
					return m
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
					} catch (g) {
						console.error(g)
					}
				}, l = async g => {
					try {
						return await (await e.get(`/accounts/${g}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (u) {
						console.error(u)
					}
				}, m = async (g, u) => {
					try {
						return await (await e.post(`${o}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: g,
								accountId: u
							}),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						return console.error(d), []
					}
				}, s = async (g, u) => {
					try {
						return await http.post(`/accounts/${g}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: u
							}),
							hideErrorAlert: !0
						}), !0
					} catch (d) {
						return console.error(d), !1
					}
				}, p = async g => {
					try {
						return await (await e.post(o, {
							body: JSON.stringify({
								darkMode: g
							})
						})).body
					} catch (u) {
						console.error(u)
					}
				}, f = async g => {
					try {
						return await (await e.post(`${o}/recents`, {
							body: JSON.stringify(g),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						console.error(u)
					}
				}, n = async g => {
					try {
						return await (await e.post(`${o}/viewed-changes`, {
							body: JSON.stringify(g),
							hideErrorAlert: !0
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}, a = async g => {
					try {
						return await (await e.post(o + "/flags", {
							body: JSON.stringify(g)
						})).body
					} catch (u) {
						throw console.error(u), u
					}
				}, i = async (g, u) => {
					try {
						return await (await e.post(`${o}/dismissed-tasks`, {
							body: JSON.stringify({
								name: g,
								accountId: u
							}),
							hideErrorAlert: !0
						})).body
					} catch (d) {
						throw console.error(d), d
					}
				}
		},
		"../react/app/components/Persistence/hooks.ts": function($, E, t) {
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
		"../react/app/components/Persistence/index.tsx": function($, E, t) {
			"use strict";
			t.d(E, {
				Wl: function() {
					return f
				},
				lp: function() {
					return D
				},
				Z_: function() {
					return v
				},
				r7: function() {
					return L
				},
				Tv: function() {
					return G
				},
				yZ: function() {
					return w.y
				}
			});
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/redux/index.ts"),
				c = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = t.n(c),
				m = t("../react/utils/bootstrap.ts"),
				s = t("../react/common/selectors/zoneSelectors.ts"),
				p = t("../react/app/components/Persistence/api.ts");
			const f = 10;
			var n = t("../react/common/hooks/useActiveState.ts");

			function a(N) {
				for (var B = 1; B < arguments.length; B++) {
					var O = arguments[B] != null ? Object(arguments[B]) : {},
						M = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(O).filter(function(F) {
						return Object.getOwnPropertyDescriptor(O, F).enumerable
					})), M.forEach(function(F) {
						i(N, F, O[F])
					})
				}
				return N
			}

			function i(N, B, O) {
				return B = g(B), B in N ? Object.defineProperty(N, B, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[B] = O, N
			}

			function g(N) {
				var B = u(N, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function u(N, B) {
				if (typeof N != "object" || N === null) return N;
				var O = N[Symbol.toPrimitive];
				if (O !== void 0) {
					var M = O.call(N, B || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(N)
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
				D = (0, e.createContext)(I),
				h = D.Consumer,
				v = ({
					children: N,
					onDarkModeChangeCb: B
				}) => {
					const [O, M] = (0, e.useState)(d), [F, ee] = (0, e.useState)(I.isLoading), [J, re] = (0, e.useState)(!1), Q = (0, m.$8)(), U = (0, o.p4)(ue => (0, s.wH)(ue)), [, V] = (0, n.Z)("securityNavStatus");
					(0, e.useEffect)(() => {
						Q ? (0, p.yl)().then(ue => {
							if (ue) {
								var te;
								M(ue), V(ue == null || (te = ue.flags) === null || te === void 0 ? void 0 : te.hasEnabledSecurityNavigation), l().identify({
									hasEnabledSecurityNavigation: ue.flags.hasEnabledSecurityNavigation
								}), B(ue.darkMode)
							}
						}).finally(() => ee(!1)) : ee(!1)
					}, [Q]);
					const ne = (ue, te) => !!O.favorites.find(ye => ye.type === "zone" && ye.name === ue && ye.accountId === te),
						ge = f - O.favorites.length,
						de = ue => O.favorites.filter(ye => ye.type === "zone" && ye.accountId === ue).length < f;
					return r().createElement(D.Provider, {
						value: a({}, O, {
							isLoading: F,
							remainingStarSlots: ge,
							isUpdatingFlags: J,
							actions: {
								canAccountStarZone: de,
								isZoneStarred: ne,
								starZone: async (ue, te) => {
									var ye;
									const Oe = !ne(ue, te),
										Ie = de(te);
									if (Oe && !Ie) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Le = await (0, p.lt)(ue, te);
									l().sendEvent("click star zone", {
										isStarring: Oe,
										totalStarredZones: Le.filter(Se => Se.accountId === te && Se.type === "zone").length,
										totalZones: U == null || (ye = U.paginationData) === null || ye === void 0 ? void 0 : ye.info.total_count
									}), M(a({}, O, {
										favorites: Le
									}))
								},
								toggleSecurityNavigation: async ue => {
									re(!0), await (0, p.Sp)({
										hasEnabledSecurityNavigation: ue
									}), l().identify({
										hasEnabledSecurityNavigation: ue
									}), re(!1), V(ue), M(a({}, O, {
										flags: {
											hasEnabledSecurityNavigation: ue
										}
									}))
								},
								setDarkMode: async ue => {
									const te = await (0, p.C8)(ue);
									M(te), B(te.darkMode)
								},
								logRouteVisited: async ue => {
									var te;
									const ye = await (0, p.n)(ue);
									M((te = ye) !== null && te !== void 0 ? te : a({}, O))
								},
								viewChange: async ue => {
									const te = await (0, p.m6)(ue);
									M(a({}, O, {
										viewedChanges: te
									}))
								},
								dismissTask: async (ue, te) => {
									const ye = await (0, p.Mn)(ue, te);
									M(a({}, O, {
										dismissedTasks: ye
									}))
								}
							}
						})
					}, N)
				};
			var w = t("../react/app/components/Persistence/hooks.ts"),
				_ = t("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				T = t("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function k() {
				return k = Object.assign ? Object.assign.bind() : function(N) {
					for (var B = 1; B < arguments.length; B++) {
						var O = arguments[B];
						for (var M in O) Object.prototype.hasOwnProperty.call(O, M) && (N[M] = O[M])
					}
					return N
				}, k.apply(this, arguments)
			}

			function A(N, B) {
				if (N == null) return {};
				var O = P(N, B),
					M, F;
				if (Object.getOwnPropertySymbols) {
					var ee = Object.getOwnPropertySymbols(N);
					for (F = 0; F < ee.length; F++) M = ee[F], !(B.indexOf(M) >= 0) && (!Object.prototype.propertyIsEnumerable.call(N, M) || (O[M] = N[M]))
				}
				return O
			}

			function P(N, B) {
				if (N == null) return {};
				var O = {},
					M = Object.keys(N),
					F, ee;
				for (ee = 0; ee < M.length; ee++) F = M[ee], !(B.indexOf(F) >= 0) && (O[F] = N[F]);
				return O
			}
			const S = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var L = N => {
					let {
						isStarred: B,
						size: O = 16
					} = N, M = A(N, ["isStarred", "size"]);
					const F = S[(0, _.Yc)() ? "dark" : "light"];
					return r().createElement(T.J, k({
						type: B ? "star" : "star-outline",
						color: B ? F.gold : F.gray,
						size: O
					}, M))
				},
				R = t("../node_modules/@cloudflare/elements/es/index.js");

			function H(N) {
				for (var B = 1; B < arguments.length; B++) {
					var O = arguments[B] != null ? Object(arguments[B]) : {},
						M = Object.keys(O);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(O).filter(function(F) {
						return Object.getOwnPropertyDescriptor(O, F).enumerable
					})), M.forEach(function(F) {
						ae(N, F, O[F])
					})
				}
				return N
			}

			function ae(N, B, O) {
				return B = se(B), B in N ? Object.defineProperty(N, B, {
					value: O,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : N[B] = O, N
			}

			function se(N) {
				var B = ce(N, "string");
				return typeof B == "symbol" ? B : String(B)
			}

			function ce(N, B) {
				if (typeof N != "object" || N === null) return N;
				var O = N[Symbol.toPrimitive];
				if (O !== void 0) {
					var M = O.call(N, B || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (B === "string" ? String : Number)(N)
			}
			const Y = {
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
			var G = (0, e.forwardRef)(({
				featurePreview: N = !1,
				isStarred: B,
				onClickFn: O,
				isDisabled: M,
				testId: F,
				buttonText: ee,
				size: J = "large",
				variant: re = "pill"
			}, Q) => {
				const [U, V] = (0, e.useState)(!1), ne = Y[(0, _.Yc)() ? "dark" : "light"][B && !N ? "active" : "default"], ge = H({}, J === "large" && {
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
				}), de = {
					pill: "50vh",
					button: 4
				};
				return r().createElement(R.zx, {
					onMouseEnter: () => V(!0),
					onMouseLeave: () => V(!1),
					innerRef: Q,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: ge.paddingRight,
					gap: 1,
					pl: ge.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: de[re],
					border: "1px solid",
					cursor: N || M ? "default" : "pointer",
					backgroundColor: U ? ne.bgHover : ne.bg,
					color: ne.text,
					borderColor: ne.border,
					onClick: O,
					opacity: M ? .5 : 1,
					disabled: M,
					fontSize: ge.fontSize,
					height: ge.height,
					"data-testid": F
				}, r().createElement(L, {
					isStarred: N ? !1 : B,
					size: ge.starIconSize
				}), ee)
			})
		},
		"../react/app/components/SidebarNav/permissions.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				iY: function() {
					return h
				},
				us: function() {
					return L
				},
				wB: function() {
					return v
				},
				gw: function() {
					return se
				},
				dL: function() {
					return k
				},
				IU: function() {
					return T
				},
				Wq: function() {
					return H
				},
				fO: function() {
					return R
				},
				zJ: function() {
					return b
				},
				o_: function() {
					return S
				},
				jq: function() {
					return ce
				},
				hv: function() {
					return _
				},
				$n: function() {
					return w
				}
			});
			var e = t("../react/common/components/AccessCheck/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/utils/zoneLevelAccess.ts"),
				m = t("../react/pages/stream/selectors.ts"),
				s = t("../react/pages/home/domain-registration/selectors.ts"),
				p = t("../react/pages/images/selectors.ts");
			const f = "r2_migrator_waitlist",
				n = "r2migrator",
				a = "r2",
				i = "r2_storage_migrator",
				g = "r2_storage_migrator",
				u = Y => getAccountEntitlement(Y, "r2.enabled"),
				d = Y => Boolean((0, o.Le)(Y, i, f)),
				I = Y => Boolean(getAccountFlipperFlagsChanges(Y, g, n)),
				D = Y => !!(0, l.b)(Y),
				h = Y => D(Y) ? (0, e.hT)(Y) : !0,
				v = (Y, z, G, N = "read") => {
					const B = (0, o.nA)(Y);
					return D(Y) ? (0, e.WL)(Y, (0, e.W9)(G, e.ZZ[N]), (0, e.j)(B == null ? void 0 : B.id)) : (0, c.Yj)(Y)(z)[N]
				},
				w = (Y, z, G, N = "read") => {
					const B = (0, o.nA)(Y),
						O = e.zs.includes(G);
					return D(Y) ? (0, e.WL)(Y, O ? G : (0, e.my)(G, e.ZZ[N === "edit" ? "update" : N]), (0, e.j)(B == null ? void 0 : B.id)) : (0, c.Yj)(Y)(z)[N === "update" ? "edit" : N]
				},
				_ = Y => !!(0, m._Q)(Y),
				T = Y => (0, p.pT)(Y),
				k = Y => (0, p.pT)(Y) && (0, p.GH)(Y),
				A = Y => sourcingKitEnabledSelector(Y),
				P = Y => !!r2EnabledSelector(Y),
				S = Y => d(Y),
				b = Y => (0, r.$f)(Y, "rulesets.magic_transit_allowed"),
				L = Y => (0, r.$f)(Y, "flowtrackd.magic_custom_config_allowed"),
				R = Y => (0, r.$f)(Y, "rulesets.fw_global_rulesets_execute_ddos_l4_allowed"),
				H = Y => (0, c.Le)(Y, "ddos_protection", "l4_rulesets"),
				ae = Y => hasAccountEntitlements(Y, ["rulesets.owning_root_rulesets_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cmr_allowed", "rulesets.fw_global_rulesets_execute_firewall_managed_cor_allowed"]),
				se = Y => (0, s.HO)(Y),
				ce = Y => !(0, r.yD)(Y) && !!w(Y, "ssl", "ssl.cert")
		},
		"../react/app/components/SomethingWrong.jsx": function($, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				c = t.n(o),
				l = t("../../../../node_modules/prop-types/index.js"),
				m = t.n(l),
				s = t("webpack/sharing/consume/default/react-redux/react-redux"),
				p = t.n(s),
				f = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				n = t.n(f),
				a = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				i = t("../node_modules/@cloudflare/component-button/es/index.js"),
				g = t("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				u = t("../../../../node_modules/@sentry/core/esm/exports.js"),
				d = t("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				I = t("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				D = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				h = t.n(D),
				v = t("../react/common/actions/membershipActions.ts"),
				w = t("../react/utils/url.ts"),
				_ = t("../react/app/components/Footer.tsx");

			function T(z) {
				for (var G = 1; G < arguments.length; G++) {
					var N = arguments[G] != null ? Object(arguments[G]) : {},
						B = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(N).filter(function(O) {
						return Object.getOwnPropertyDescriptor(N, O).enumerable
					})), B.forEach(function(O) {
						k(z, O, N[O])
					})
				}
				return z
			}

			function k(z, G, N) {
				return G = A(G), G in z ? Object.defineProperty(z, G, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[G] = N, z
			}

			function A(z) {
				var G = P(z, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function P(z, G) {
				if (typeof z != "object" || z === null) return z;
				var N = z[Symbol.toPrimitive];
				if (N !== void 0) {
					var B = N.call(z, G || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(z)
			}
			const S = (0, a.createComponent)(({
					type: z
				}) => ({
					height: z !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				b = (0, a.createComponent)(({
					theme: z,
					margin: G,
					size: N = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: z.colors.gray[3],
					height: G ? "auto" : "100%",
					padding: G ? 0 : z.space[N > 1 ? N - 2 : 0],
					margin: G,
					justifyContent: "center",
					alignItems: "center"
				})),
				L = (0, a.createComponent)(() => ({
					textAlign: "left"
				})),
				R = (0, a.createComponent)(() => ({
					textAlign: "right"
				})),
				H = (0, a.createComponent)(({
					theme: z
				}) => ({
					fontSize: z.fontSizes[6]
				})),
				ae = (0, a.createComponent)(({
					theme: z
				}) => ({
					fontSize: z.fontSizes[4]
				})),
				se = (0, a.createComponent)(({
					theme: z
				}) => ({
					fontSize: z.fontSizes[3]
				})),
				ce = (0, a.createComponent)(({
					theme: z
				}) => ({
					width: "100%",
					height: 125,
					marginTop: z.space[4],
					padding: z.space[2]
				}), "textarea");
			class Y extends r().Component {
				constructor(...G) {
					super(...G);
					k(this, "state", {
						value: "",
						submitted: !1
					}), k(this, "handleTextareaChange", N => {
						this.setState({
							value: N.target.value
						})
					}), k(this, "sendErrToSentry10", async () => {
						try {
							var N, B, O, M;
							const F = ((N = window) === null || N === void 0 || (B = N.bootstrap) === null || B === void 0 || (O = B.data) === null || O === void 0 || (M = O.user) === null || M === void 0 ? void 0 : M.id) || "Unknown",
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
									build: T({}, window.build)
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
					}), k(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), k(this, "renderContent", N => r().createElement(f.I18n, null, B => r().createElement(S, {
						type: N
					}, r().createElement(b, null, r().createElement(L, null, r().createElement(H, null, B.t("error.internal_issues")), r().createElement(ae, null, B.t("error.help_us")), r().createElement(ce, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: O => this.handleTextareaChange(O),
						disabled: this.state.submitted,
						placeholder: B.t("error.give_feedback")
					}), r().createElement(R, null, !this.state.submitted && r().createElement(i.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, B.t("common.submit")), this.state.submitted && r().createElement(se, null, B.t("error.feedback_sent"))))))))
				}
				async componentDidMount() {
					const {
						error: G,
						sentryTag: N,
						membershipsList: B
					} = this.props;
					console.error(`SomethingWrong: ${G}`);
					let O = "";
					const M = (0, w.e1)();
					if (M) {
						var F;
						const J = await B({
								parameters: {
									status: "accepted"
								}
							}),
							re = J == null || (F = J.find(Q => Q.id === M)) === null || F === void 0 ? void 0 : F.roles;
						re && re.length && (O = re.join(", "))
					}
					const ee = `ErrorBoundary - ${G}`;
					u.Tb(ee, {
						tags: {
							errorBoundary: N,
							normalizedPath: (0, w.Fl)(window.location.pathname),
							roles: O.length ? O : void 0
						}
					}), h().sendEvent("something wrong", {
						error: G,
						roles: O.length ? O : void 0
					})
				}
				render() {
					const {
						type: G
					} = this.props;
					return G === "fullscreen" ? r().createElement("div", null, r().createElement(d.h4, null, r().createElement(o.Link, {
						to: "/"
					}, r().createElement(I.TR, null))), this.renderContent(G), r().createElement(_.Z, null)) : this.renderContent(G)
				}
			}
			Y.propTypes = {
				type: m().oneOf(["fullscreen", "page"]),
				error: m().oneOfType([m().string, m().object]),
				eventId: m().string,
				sentryTag: m().string,
				membershipsList: m().func
			}, E.Z = (0, s.connect)(() => ({}), {
				membershipsList: v.YT
			})(Y)
		},
		"../react/app/providers/storeContainer.js": function($, E, t) {
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
				m = t("../../../../node_modules/redux-persist/lib/storage/index.js"),
				s = t("../react/app/rootReducer.js"),
				p = t("../react/app/redux/normalizer.js"),
				f = t("../../../../node_modules/@sentry/react/esm/redux.js"),
				n = t("../react/app/providers/sentryTransformer.js"),
				a = t("../react/app/reducerRegistry.js"),
				i = t("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				g = t("../react/common/sagas/index.js"),
				u = t("../react/app/redux/processActionMiddleware.js"),
				d = t("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				I = t("../../../../node_modules/is-promise/index.js"),
				D = t.n(I);

			function h(H) {
				for (var ae = 1; ae < arguments.length; ae++) {
					var se = arguments[ae] != null ? Object(arguments[ae]) : {},
						ce = Object.keys(se);
					typeof Object.getOwnPropertySymbols == "function" && ce.push.apply(ce, Object.getOwnPropertySymbols(se).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(se, Y).enumerable
					})), ce.forEach(function(Y) {
						v(H, Y, se[Y])
					})
				}
				return H
			}

			function v(H, ae, se) {
				return ae = w(ae), ae in H ? Object.defineProperty(H, ae, {
					value: se,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : H[ae] = se, H
			}

			function w(H) {
				var ae = _(H, "string");
				return typeof ae == "symbol" ? ae : String(ae)
			}

			function _(H, ae) {
				if (typeof H != "object" || H === null) return H;
				var se = H[Symbol.toPrimitive];
				if (se !== void 0) {
					var ce = se.call(H, ae || "default");
					if (typeof ce != "object") return ce;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ae === "string" ? String : Number)(H)
			}
			const T = {
					key: "cf-redux-store",
					storage: m.Z,
					whitelist: ["accountAccess", "invite"]
				},
				k = (0, i.ZP)(),
				P = [({
					dispatch: H
				}) => ae => se => D()(se) ? se.then(ce => H(ce)) : ae(se), k, c.Z, u.Z, p.qR],
				S = H => (0, l.Wq)(T, h({}, s.Z, H));

			function b() {
				const H = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					se = e.compose((0, e.applyMiddleware)(...P), f.w({
						actionTransformer: n.b,
						stateTransformer: n.O
					})),
					ce = {},
					Y = (0, e.createStore)(S(a.Z.getReducers()), ce, se);
				k.run(g.Z), (0, l.p5)(Y);
				const G = (t.g.bootstrap || {}).data || {};
				return Y.dispatch((0, d.mW)("user", G.user)), Y
			}
			let L;
			a.Z.setChangeListener(H => {
				var ae;
				L && ((ae = L) === null || ae === void 0 ? void 0 : ae.replaceReducer) && (L.replaceReducer(S(H)), (0, l.p5)(L))
			});

			function R() {
				return L || (L = b()), L
			}
		},
		"../react/app/redux/index.ts": function($, E, t) {
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
					return m
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e);
			const o = () => (0, e.useStore)(),
				c = () => o().getState(),
				l = () => (0, e.useDispatch)(),
				m = e.useSelector
		},
		"../react/app/redux/makeAction.js": function($, E, t) {
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
					return g
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
						D = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(I).filter(function(h) {
						return Object.getOwnPropertyDescriptor(I, h).enumerable
					})), D.forEach(function(h) {
						l(u, h, I[h])
					})
				}
				return u
			}

			function l(u, d, I) {
				return d = m(d), d in u ? Object.defineProperty(u, d, {
					value: I,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[d] = I, u
			}

			function m(u) {
				var d = s(u, "string");
				return typeof d == "symbol" ? d : String(d)
			}

			function s(u, d) {
				if (typeof u != "object" || u === null) return u;
				var I = u[Symbol.toPrimitive];
				if (I !== void 0) {
					var D = I.call(u, d || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(u)
			}
			const p = c({}, r),
				f = (u, d, I, D = {}) => {
					const h = u === "delete" ? "del" : u.toLowerCase();
					return I && h !== "del" && (D.body = I), p[h](d, D)
				},
				n = (u, d) => (u.meta.params = d, u),
				a = (u, d, I, D, {
					body: h = {}
				}) => {
					const {
						result: v,
						messages: w,
						result_info: _
					} = h, T = Object.values(d);
					if (u.meta.method === "delete") {
						const k = T[T.length - 1];
						u.meta.id = typeof k == "object" ? k.id : k
					}
					return u.payload = v, w && (u.meta.messages = w), T.length && (u.meta.params = d), _ && (u.meta.paginationData = {
						info: _,
						actionParameters: T,
						options: I[0],
						insertionOffset: 0
					}), u
				},
				i = (u, d, I, D, h) => (u.payload = h && h.body && h.body.errors, u.meta.messages = h && h.body && h.body.messages, u.meta.params = d, u.apiError = h, u);

			function g(u, d, I, D) {
				const h = (0, e.RM)(u, d, I, D).apiFetch(f).on("start", n).on("success", a).on("error", i),
					v = h.mock;
				return h.mock = w => (v((..._) => {
					const T = w(..._);
					return T && typeof T == "object" && "result" in T ? T : {
						result: T
					}
				}), h), h
			}
		},
		"../react/app/redux/normalizer.js": function($, E, t) {
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
				m = t.n(l);
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
		"../react/app/redux/utils.ts": function($, E, t) {
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
			const r = c => (l, m, s) => (0, e.SC)(l, m, s, {
					hideErrorAlert: !0
				}).catch(c),
				o = c => l => {
					if (l.status === c) return l;
					throw l
				}
		},
		"../react/common/actionTypes.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Cm: function() {
					return m
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
				m = "TOGGLE_OFF",
				s = "SET_ACTIVE",
				p = "CLEAR_ACTIVE",
				f = "UPDATE_ACCOUNT_ACCESS",
				n = "UPDATE_LANGUAGE_PREFERENCE";
			let a = function(i) {
				return i.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", i.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", i.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", i.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", i.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", i.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", i.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", i.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", i.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", i
			}({})
		},
		"../react/common/actions/activeActions.ts": function($, E, t) {
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
		"../react/common/actions/membershipActions.ts": function($, E, t) {
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

			function o(g) {
				for (var u = 1; u < arguments.length; u++) {
					var d = arguments[u] != null ? Object(arguments[u]) : {},
						I = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(d).filter(function(D) {
						return Object.getOwnPropertyDescriptor(d, D).enumerable
					})), I.forEach(function(D) {
						c(g, D, d[D])
					})
				}
				return g
			}

			function c(g, u, d) {
				return u = l(u), u in g ? Object.defineProperty(g, u, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[u] = d, g
			}

			function l(g) {
				var u = m(g, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function m(g, u) {
				if (typeof g != "object" || g === null) return g;
				var d = g[Symbol.toPrimitive];
				if (d !== void 0) {
					var I = d.call(g, u || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(g)
			}
			const s = g => {
					const u = g.payload.map(d => o({}, d, {
						membershipId: d.id,
						id: d.account.id
					}));
					return o({}, g, {
						payload: u
					})
				},
				p = g => {
					const u = s(g);
					return Array.isArray(u.payload) ? o({}, g, {
						payload: u.payload[0]
					}) : o({}, g, {
						payload: null
					})
				},
				f = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", s),
				n = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				a = (...g) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: g
				}),
				i = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", p)
		},
		"../react/common/actions/modalActions.ts": function($, E, t) {
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

			function o(l, m, s = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: l,
						props: m
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
		"../react/common/actions/notificationsActions.ts": function($, E, t) {
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
					return m
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
					function(g) {
						let u = c++,
							d = {
								id: u,
								type: n,
								message: a,
								delay: i.delay,
								persist: i.persist === void 0 ? !1 : i.persist,
								closable: i.closable === void 0 ? !0 : i.closable,
								onClose() {
									g(o(u)), i.onClose && i.onClose.apply(null, arguments)
								}
							};
						g(r(d))
					}
			}

			function m(n, a) {
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
		"../react/common/actions/userActions.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				BT: function() {
					return s
				},
				Ut: function() {
					return D
				},
				V_: function() {
					return h
				},
				Y9: function() {
					return d
				},
				Z0: function() {
					return w
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
						A = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(k).filter(function(P) {
						return Object.getOwnPropertyDescriptor(k, P).enumerable
					})), A.forEach(function(P) {
						c(_, P, k[P])
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
				var T = m(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function m(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var k = _[Symbol.toPrimitive];
				if (k !== void 0) {
					var A = k.call(_, T || "default");
					if (typeof A != "object") return A;
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
				g = (0, e.C)("user").delete`/user/two_factor_authentication`,
				u = (0, e.C)("user").put`/user/email`;

			function d(..._) {
				return u(..._)
			}
			const I = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				D = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(_ => o({}, _, {
					body: o({}, _.body, {
						result: {}
					})
				}))),
				h = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				v = (0, e.C)("userDetails").get`/user/details`,
				w = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/AccessCheck/AuthzContext.tsx": function($, E, t) {
			"use strict";
			t.d(E, {
				we: function() {
					return w
				}
			});
			var e = t("../../../../node_modules/lodash/lodash.js"),
				r = t.n(e),
				o = t("webpack/sharing/consume/default/react/react"),
				c = t.n(o);

			function l(T, k) {
				return m(T) < k
			}

			function m(T) {
				return s(T) % 1e6 / 1e6
			}

			function s(T) {
				const k = r().deburr(T);
				let A = 0;
				return k.length === 0 ? A : (r().each(k, (P, S) => {
					const b = P.charCodeAt(0);
					A = (A << 5) - A + b, A = A & A
				}), Math.abs(A))
			}
			var p = t("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				f = t("../react/utils/url.ts"),
				n = t("../react/pages/home/members/utils.ts");

			function a(T) {
				for (var k = 1; k < arguments.length; k++) {
					var A = arguments[k] != null ? Object(arguments[k]) : {},
						P = Object.keys(A);
					typeof Object.getOwnPropertySymbols == "function" && P.push.apply(P, Object.getOwnPropertySymbols(A).filter(function(S) {
						return Object.getOwnPropertyDescriptor(A, S).enumerable
					})), P.forEach(function(S) {
						i(T, S, A[S])
					})
				}
				return T
			}

			function i(T, k, A) {
				return k = g(k), k in T ? Object.defineProperty(T, k, {
					value: A,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[k] = A, T
			}

			function g(T) {
				var k = u(T, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function u(T, k) {
				if (typeof T != "object" || T === null) return T;
				var A = T[Symbol.toPrimitive];
				if (A !== void 0) {
					var P = A.call(T, k || "default");
					if (typeof P != "object") return P;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(T)
			}
			const d = c().createContext(void 0),
				I = 60 * 1e3,
				D = .01,
				h = new Set(["f65fb9c0ef5c7bd96bf22fd1e89092f8", "34f5c5fbdb0031e08410750dd4617396"]),
				v = new Set(["b7db8a5d0e51afce2d33ea16d8219fc6", "3576b716b54efb9e7851fe9e7a22e440", "ca11caa2415c966f6fb75f025ed1f354", "56517c9d595ec8e23d789fd2c6d18990", "340188bc4fd1e745704cedf68408ff05", "3f96cb3e7cb3fa852b055b63baf69624"]);

			function w({
				children: T,
				userID: k,
				isUserInDSR: A
			}) {
				const [P, S] = (0, o.useState)({
					policies: null,
					isLoading: !0,
					isLoadingSkippedByUserID: !1,
					error: null,
					lastFetchedAt: null
				}), b = (0, o.useCallback)(async (ce = !1) => {
					var Y, z, G;
					const N = !!k,
						B = l((Y = k) !== null && Y !== void 0 ? Y : "", D) || h.has((z = k) !== null && z !== void 0 ? z : ""),
						O = v.has((G = k) !== null && G !== void 0 ? G : "");
					if (!(N && B && !O && (ce || !P.lastFetchedAt || Date.now() - P.lastFetchedAt > I))) {
						S(J => a({}, J, {
							isLoadingSkippedByUserID: !B || O
						}));
						return
					}
					S(J => a({}, J, {
						isLoading: !0
					}));
					try {
						var F, ee;
						const J = await fetch("/api/v4/user/iam/policies");
						if (!J.ok) throw new Error(`Failed to fetch authz policies: ${J.status}`);
						const re = (F = await J.json()) === null || F === void 0 || (ee = F.result) === null || ee === void 0 ? void 0 : ee.policies;
						if (!re || !(0, e.isArray)(re) || re.length === 0) throw new Error(`Unexpected authz policies API response shape: ${JSON.stringify(re)}`);
						S({
							policies: re,
							isLoading: !1,
							isLoadingSkippedByUserID: !1,
							error: null,
							lastFetchedAt: Date.now()
						})
					} catch (J) {
						const re = J instanceof Error ? J.message : JSON.stringify(J);
						S(Q => a({}, Q, {
							isLoading: !1,
							error: re
						}))
					}
				}, [k, P.lastFetchedAt]);
				(0, o.useEffect)(() => {
					b()
				}, [b]);
				const L = (0, p.useHistory)(),
					R = (0, f.uW)(L.location.pathname),
					[H, ae] = (0, o.useState)(void 0);
				(0, o.useEffect)(() => {
					(async () => {
						const Y = 10,
							z = 100;
						for (let G = 0; G <= Y; G++) {
							const N = (0, n.vq)(R);
							if (!N || N.length === 0) {
								if (G === Y) throw new Error("failed loading authz policy permission groups");
								const B = z * Math.pow(2, G);
								await new Promise(O => {
									setTimeout(O, B)
								})
							} else {
								N.sort((B, O) => B.id.localeCompare(O.id)), ae(N);
								break
							}
						}
					})()
				}, [R]);
				const se = {
					isUserInDSR: A,
					contextAccountTag: R,
					allPermissionGroups: H,
					policiesState: P,
					refreshPolicies: () => b(!0)
				};
				return c().createElement(d.Provider, {
					value: se
				}, T)
			}
			const _ = () => {
				const T = useContext(d);
				if (!T) throw new Error("useRefreshPolicies must be used within a PoliciesProvider");
				return T.refreshPolicies
			}
		},
		"../react/common/components/AccessCheck/constants.ts": function($, E, t) {
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
					return m
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
			let m = function(i) {
				return i.read = "read", i.list = "list", i.create = "create", i.update = "update", i.delete = "delete", i.sign = "sign", i.refresh = "refresh", i
			}({});
			const s = (i, g) => `${r}${i?i+".":""}${g}`,
				p = (i, g) => `${c}${i?i+".":""}${g}`,
				f = (i, g) => `${o}${i}.${g}`,
				n = (i = "") => `${r}${i}`,
				a = (i = "") => `${c}${i}`
		},
		"../react/common/components/AccessCheck/index.ts": function($, E, t) {
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
					let g;
					typeof f == "boolean" && f !== void 0 && i ? g = {
						read: f,
						list: f,
						create: f,
						update: f,
						delete: f,
						sign: f
					} : g = (0, e.Z)(p);
					const u = a || n;
					return u ? u(g) : null
				},
				l = t("../react/common/components/AccessCheck/useAccessResolver.ts"),
				m = t("../react/common/components/AccessCheck/useIsAuthorized.ts"),
				s = t("../react/common/components/AccessCheck/constants.ts")
		},
		"../react/common/components/AccessCheck/useAccessCheck.ts": function($, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../react/app/redux/index.ts"),
				c = t("../react/common/selectors/accountSelectors.ts"),
				l = t("../react/pages/zone-versioning/selectors.ts");

			function m(s) {
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
			E.Z = m
		},
		"../react/common/components/AccessCheck/useAccessResolver.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				WL: function() {
					return g
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
				m = t("../react/common/selectors/accountSelectors.ts");
			const s = {
					allow: "allow",
					deny: "deny"
				},
				p = 0,
				f = 1,
				n = 2,
				a = 3;

			function i(A, P, S, b) {
				let L = {
						read: !1,
						update: !1,
						create: !1,
						delete: !1,
						list: !1,
						sign: !1,
						refresh: !1
					},
					R;
				for (R in L) L[R] = g(A, `${P}.${R}`, S, b);
				return L
			}

			function g(A, P, S, b) {
				var L;
				if (u(P) && !d(P)) {
					const ce = (0, l.G)(A);
					if (ce == null ? void 0 : ce.isLocked) return !1
				}
				const R = (L = (0, m.D0)(A)) === null || L === void 0 ? void 0 : L.id,
					H = R ? [`com.cloudflare.api.account.${R}`] : void 0,
					ae = (0, o.vq)(R);
				return !!D(A, ae, P, S, b || H)
			}

			function u(A) {
				return ![c.ZZ.read, c.ZZ.list].some(P => A.endsWith(P))
			}

			function d(A) {
				return A.includes("zone.versioning")
			}

			function I(A) {
				const P = (0, m.Ko)(A);
				let S = !1;
				return P == null || P.forEach(b => {
					b.access === s.allow && b.permission_groups.forEach(L => {
						var R;
						(L == null || (R = L.meta) === null || R === void 0 ? void 0 : R.scopes) === c.u1 && (S = !0)
					})
				}), S
			}

			function D(A, P, S, b, L) {
				const R = (0, m.Ko)(A),
					H = {};
				R == null || R.forEach(Y => {
					var z;
					const G = Y.access;
					let N = p;
					if (S && Y.permission_groups.forEach(B => {
							var O, M;
							P == null || (O = P.find(F => F.id === B.id)) === null || O === void 0 || (M = O.permissions) === null || M === void 0 || M.forEach(F => {
								N = Math.max(N, v(F, S))
							})
						}), N !== p && !!b) {
						let B = p;
						Y.resource_groups.forEach(O => {
							B = Math.max(B, _(O.scope, b, L))
						}), N = B === p ? B : N + B
					}(H == null || (z = H[G]) === null || z === void 0 ? void 0 : z[N]) || (0, e.Z)(H, [G, N], []), H[G][N].push(Y)
				});
				const ae = H[s.allow] && Object.keys(H[s.allow]).map(Y => parseInt(Y)),
					se = H[s.deny] && Object.keys(H[s.deny]).map(Y => parseInt(Y)),
					ce = Math.max.apply(Math, ae);
				return ce === p || Math.max.apply(Math, se) >= ce ? null : H[s.allow][ce]
			}

			function h(A, P, S, b, L) {
				const R = {};
				A == null || A.forEach(ce => {
					var Y;
					const z = ce.access;
					let G = p;
					if (S && ce.roles.forEach(N => {
							var B, O;
							P == null || (B = P.find(M => M.id === N.id)) === null || B === void 0 || (O = B.permissions) === null || O === void 0 || O.forEach(M => {
								G = Math.max(G, v(M, S))
							})
						}), G !== p && !!b) {
						let N = p;
						ce.scopes.forEach(B => {
							N = Math.max(N, _(B, b, L))
						}), G = N === p ? N : G + N
					}(R == null || (Y = R[z]) === null || Y === void 0 ? void 0 : Y[G]) || set(R, [z, G], []), R[z][G].push(ce)
				});
				const H = R[s.allow] && Object.keys(R[s.allow]).map(ce => parseInt(ce)),
					ae = R[s.deny] && Object.keys(R[s.deny]).map(ce => parseInt(ce)),
					se = Math.max.apply(Math, H);
				return se === p || Math.max.apply(Math, ae) >= se ? null : R[s.allow][se]
			}

			function v(A, P) {
				if (A.key === P || w(A.key, P)) return a;
				for (const S of (A == null ? void 0 : A.implies) || []) {
					let b = v(S, P);
					if (b > p) return b
				}
				return p
			}

			function w(A, P) {
				const S = P == null ? void 0 : P.lastIndexOf(".");
				return S === -1 ? !1 : (P == null ? void 0 : P.substring(0, S)) + ".*" === A
			}

			function _(A, P, S) {
				var b;
				let L = p;
				if (A == null || (b = A.objects) === null || b === void 0 || b.forEach(R => {
						L = Math.max(L, k(R, P))
					}), L === p) return L;
				if (A.key !== "*") switch (!0) {
					case T(A.key, S) > p:
					case (!(S == null ? void 0 : S.length) && L === a):
						break;
					case (L === f && T(A.key, [P]) > p):
						L = T(A.key, [P]);
						break;
					default:
						return p
				}
				for (const R of A.subset_of || [])
					if (T(R.key, S) === p) return p;
				return L
			}

			function T(A, P = []) {
				for (const S of P || []) {
					if (A === S) return a;
					if (w(A, S)) return n
				}
				return p
			}

			function k(A, P) {
				const S = (0, r.Z)(A) ? A : A.key;
				return S === P ? a : S === "*" || A === "*" ? f : w(S, P) ? n : p
			}
		},
		"../react/common/components/AccessControl/SAAConnect.js": function($, E, t) {
			"use strict";
			t.d(E, {
				a: function() {
					return c
				}
			});
			var e = t("webpack/sharing/consume/default/react-redux/react-redux"),
				r = t.n(e),
				o = t("../react/common/selectors/accountSelectors.ts");
			const c = m => {
					if (typeof m != "string") throw new Error("invalid Param Type provided");
					const s = m.slice(1).split(":");
					if (s.length !== 2) throw new Error("invalid Param Type provided");
					return {
						key: s[0],
						value: s[1]
					}
				},
				l = (m, s) => {
					const {
						resourceId: p,
						accountId: f,
						legacyPermission: n
					} = s;
					let {
						read: a,
						edit: i
					} = s;
					const g = {};
					n && (i = `#${n}:edit`, a = `#${n}:read`);
					const u = p || f;
					if (a) {
						const d = Array.isArray(a) ? a : [a];
						g.isReadable = d.some(I => {
							const D = c(I);
							return (0, o.DT)(m, u, h => !!(h[D.key] && h[D.key][D.value]))
						})
					}
					if (i) {
						const d = Array.isArray(i) ? i : [i];
						g.isEditable = d.some(I => {
							const D = c(I);
							return (0, o.DT)(m, u, h => !!(h[D.key] && h[D.key][D.value]))
						})
					}
					return g
				};
			E.Z = (0, e.connect)(l)
		},
		"../react/common/components/AccessControl/index.js": function($, E, t) {
			"use strict";
			var e = t("../../../../node_modules/prop-types/index.js"),
				r = t.n(e),
				o = t("../react/app/HoCs/withEntities.tsx"),
				c = t("../react/common/components/AccessControl/SAAConnect.js");

			function l(a) {
				for (var i = 1; i < arguments.length; i++) {
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						u = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), u.forEach(function(d) {
						m(a, d, g[d])
					})
				}
				return a
			}

			function m(a, i, g) {
				return i = s(i), i in a ? Object.defineProperty(a, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[i] = g, a
			}

			function s(a) {
				var i = p(a, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function p(a, i) {
				if (typeof a != "object" || a === null) return a;
				var g = a[Symbol.toPrimitive];
				if (g !== void 0) {
					var u = g.call(a, i || "default");
					if (typeof u != "object") return u;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (i === "string" ? String : Number)(a)
			}

			function f(a) {
				const g = ["isReadable", "isEditable"].reduce((u, d) => a.hasOwnProperty(d) ? l({}, u, {
					[d]: a[d]
				}) : u, {});
				return a.children(g)
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
		"../react/common/components/Apple/utils.tsx": function($, E, t) {
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
			const m = () => p.test(window.location.pathname) || o.E.has(c.Qq),
				s = () => o.E.get(c.Qq),
				p = /^\/login\/apple(\/)?/,
				n = [p, /^\/[a-zA-Z0-9]+\/registrar\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				a = () => {
					let g = !1;
					n.forEach(d => {
						if (d.test(window.location.pathname)) {
							g = !0;
							return
						}
					});
					const u = m() && g;
					return u && (0, l.C8)(l.LF.OFF), u
				},
				i = g => {
					g && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let u = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					g && (u = u + `&jwt=${g}`), window.location.href = u
				}
		},
		"../react/common/components/ButtonWithDropdown.tsx": function($, E, t) {
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
				m = t.n(l),
				s = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				p = t("../react/common/components/Dropdown/index.tsx"),
				f = t("../../../../node_modules/@cloudflare/style-const/es/index.js");

			function n() {
				return n = Object.assign ? Object.assign.bind() : function(d) {
					for (var I = 1; I < arguments.length; I++) {
						var D = arguments[I];
						for (var h in D) Object.prototype.hasOwnProperty.call(D, h) && (d[h] = D[h])
					}
					return d
				}, n.apply(this, arguments)
			}

			function a(d, I) {
				if (d == null) return {};
				var D = i(d, I),
					h, v;
				if (Object.getOwnPropertySymbols) {
					var w = Object.getOwnPropertySymbols(d);
					for (v = 0; v < w.length; v++) h = w[v], !(I.indexOf(h) >= 0) && (!Object.prototype.propertyIsEnumerable.call(d, h) || (D[h] = d[h]))
				}
				return D
			}

			function i(d, I) {
				if (d == null) return {};
				var D = {},
					h = Object.keys(d),
					v, w;
				for (w = 0; w < h.length; w++) v = h[w], !(I.indexOf(v) >= 0) && (D[v] = d[v]);
				return D
			}
			const g = (0, s.createStyledComponent)(({
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
					containerProps: D,
					disabled: h,
					disabledDropdown: v = h
				} = d, w = a(d, ["menu", "containerProps", "disabled", "disabledDropdown"]);
				const {
					t: _
				} = (0, l.useI18n)();
				return r().createElement(g, n({}, D, {
					role: "group"
				}), r().createElement(o.zx, n({}, w, {
					disabled: h
				})), r().createElement(p.Lt, {
					trigger: r().createElement(o.zx, {
						type: w.type,
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
		"../react/common/components/Dropdown/Menu.tsx": function($, E, t) {
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

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(p) {
					for (var f = 1; f < arguments.length; f++) {
						var n = arguments[f];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (p[a] = n[a])
					}
					return p
				}, m.apply(this, arguments)
			}

			function s(p) {
				const f = (0, e.useRef)(null),
					[n, a] = (0, e.useState)(!1);
				(0, e.useLayoutEffect)(() => {
					const g = f.current;
					if (g) {
						const {
							bottom: u
						} = g.getBoundingClientRect();
						u > window.innerHeight && a(!0)
					}
				}, []);
				const i = (0, l.S)(g => {
					for (const u of g) u.intersectionRatio < 1 && a(!0)
				}, {
					threshold: [0, 1]
				});
				return (0, e.useEffect)(() => {
					const g = f.current;
					if (g && i) return i.observe(g), () => {
						i.unobserve(g)
					}
				}, [i]), r().createElement(o.ZC, m({
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
		"../react/common/components/Dropdown/MenuItem.tsx": function($, E, t) {
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

			function m() {
				return m = Object.assign ? Object.assign.bind() : function(D) {
					for (var h = 1; h < arguments.length; h++) {
						var v = arguments[h];
						for (var w in v) Object.prototype.hasOwnProperty.call(v, w) && (D[w] = v[w])
					}
					return D
				}, m.apply(this, arguments)
			}

			function s(D, h) {
				if (D == null) return {};
				var v = p(D, h),
					w, _;
				if (Object.getOwnPropertySymbols) {
					var T = Object.getOwnPropertySymbols(D);
					for (_ = 0; _ < T.length; _++) w = T[_], !(h.indexOf(w) >= 0) && (!Object.prototype.propertyIsEnumerable.call(D, w) || (v[w] = D[w]))
				}
				return v
			}

			function p(D, h) {
				if (D == null) return {};
				var v = {},
					w = Object.keys(D),
					_, T;
				for (T = 0; T < w.length; T++) _ = w[T], !(h.indexOf(_) >= 0) && (v[_] = D[_]);
				return v
			}

			function f(D) {
				for (var h = 1; h < arguments.length; h++) {
					var v = arguments[h] != null ? Object(arguments[h]) : {},
						w = Object.keys(v);
					typeof Object.getOwnPropertySymbols == "function" && w.push.apply(w, Object.getOwnPropertySymbols(v).filter(function(_) {
						return Object.getOwnPropertyDescriptor(v, _).enumerable
					})), w.forEach(function(_) {
						n(D, _, v[_])
					})
				}
				return D
			}

			function n(D, h, v) {
				return h = a(h), h in D ? Object.defineProperty(D, h, {
					value: v,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[h] = v, D
			}

			function a(D) {
				var h = i(D, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function i(D, h) {
				if (typeof D != "object" || D === null) return D;
				var v = D[Symbol.toPrimitive];
				if (v !== void 0) {
					var w = v.call(D, h || "default");
					if (typeof w != "object") return w;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(D)
			}
			const g = ({
					theme: D
				}) => {
					const h = {
						cursor: "pointer",
						background: D.colors.gray[9],
						color: D.colors.gray[0]
					};
					return {
						display: "block",
						width: "100%",
						padding: D.space[2],
						background: D.colors.background,
						color: D.colors.gray[3],
						fontSize: D.fontSizes[2],
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
							color: D.colors.gray[6],
							cursor: "not-allowed",
							opacity: .5
						}
					}
				},
				u = (0, o.createComponent)(g, "a"),
				d = (0, o.createComponent)(g, "button");

			function I(D) {
				let {
					disabled: h = !1
				} = D, v = s(D, ["disabled"]);
				const w = (0, c.useHistory)(),
					_ = {
						role: "menuitem"
					};
				if ("href" in v && typeof v.href == "string") return r().createElement(u, m({
					"aria-disabled": h
				}, _, v, {
					href: h ? void 0 : v.href,
					onClick: k => {
						var A;
						if (h) return k.stopPropagation();
						k.preventDefault(), (A = v.onClick) === null || A === void 0 || A.call(v, k), w.push(v.href)
					}
				}));
				var T;
				return r().createElement(d, m({
					type: (T = v.type) !== null && T !== void 0 ? T : "button"
				}, _, v, {
					disabled: h
				}))
			}
		},
		"../react/common/components/EmptyPage.jsx": function($, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../../node_modules/prop-types/index.js"),
				c = t.n(o),
				l = t("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const m = ({
				children: s
			}) => r().createElement(l.xu, {
				height: 411
			}, s);
			m.propTypes = {
				children: c().node
			}, E.Z = m
		},
		"../react/common/components/ModalManager.tsx": function($, E, t) {
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
				m = t("../../../../node_modules/swr/core/dist/index.mjs"),
				s = t("../react/pages/zoneless-workers/utils/swrConfig.ts");

			function p() {
				return p = Object.assign ? Object.assign.bind() : function(d) {
					for (var I = 1; I < arguments.length; I++) {
						var D = arguments[I];
						for (var h in D) Object.prototype.hasOwnProperty.call(D, h) && (d[h] = D[h])
					}
					return d
				}, p.apply(this, arguments)
			}
			const f = r().createContext(null);
			class n extends r().Component {
				render() {
					const {
						modals: I,
						closeModal: D
					} = this.props;
					return r().createElement(r().Fragment, null, I.map(({
						ModalComponent: h,
						props: v = {},
						id: w
					}) => {
						const _ = () => {
							typeof v.onClose == "function" && v.onClose(), D(h)
						};
						return r().createElement(f.Provider, {
							key: w,
							value: {
								closeModal: _
							}
						}, r().createElement(m.J$, {
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
		"../react/common/components/Page.tsx": function($, E, t) {
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
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function($, E, t) {
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
					return m
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
				m = "to",
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
		"../react/common/components/api-tokens/sparrowEvents.ts": function($, E, t) {
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
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), g.forEach(function(u) {
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
				var a = m(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, a || "default");
					if (typeof g != "object") return g;
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
		"../react/common/components/filter-editor/constants/userJourney.ts": function($, E, t) {
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
		"../react/common/constants/billing/index.ts": function($, E, t) {
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
					return m
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
				m = {
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
			const g = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function($, E, t) {
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
		"../react/common/constants/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Dk: function() {
					return g
				},
				Dy: function() {
					return u
				},
				E_: function() {
					return m
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
				m = "critical",
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
				g = () => {
					const h = o.Z.get(i);
					if (!!h) return a[h]
				},
				u = ["gov"],
				d = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"],
				I = "banner-notification-interactions",
				D = null
		},
		"../react/common/constants/index.ts": function($, E, t) {
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
		"../react/common/constants/roles.ts": function($, E, t) {
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
		"../react/common/hooks/rulesets/resources/tracking.tsx": function($, E, t) {
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
				o = (l, m, s = !1) => {
					var p;
					return `${m} ${(p=r[l])!==null&&p!==void 0?p:l} ${s?"ruleset":"rule"}${m===e.GET?"s":""}`
				},
				c = () => {
					var l;
					return (l = Object.keys(r).reduce((m, s) => {
						const p = Object.values(e).reduce((f, n) => (f.push(o(s, n)), f.push(o(s, n, !0)), f), []);
						return m.concat(p)
					}, [])) === null || l === void 0 ? void 0 : l.flat()
				}
		},
		"../react/common/hooks/useAccountId.ts": function($, E, t) {
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
				var m;
				const {
					accountId: s
				} = (0, o.useParams)(), p = (0, e.p4)(r.D0);
				if (s === void 0 && !p) throw new Error("Account ID not found in URL params");
				return (m = s) !== null && m !== void 0 ? m : p == null ? void 0 : p.id
			}
		},
		"../react/common/hooks/useActiveState.ts": function($, E, t) {
			"use strict";
			var e = t("../react/common/actions/activeActions.ts"),
				r = t("webpack/sharing/consume/default/react-redux/react-redux"),
				o = t.n(r),
				c = t("../react/common/selectors/commonSelectors.ts");
			const l = m => {
				const s = (0, r.useDispatch)();
				return [(0, r.useSelector)((0, c.cZ)(m)), n => {
					s((0, e.I)(m, n))
				}]
			};
			E.Z = l
		},
		"../react/common/hooks/useCachedState.ts": function($, E, t) {
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
				key: m,
				cache: s = o.E,
				ttl: p
			} = {}) {
				var f;
				const n = m !== void 0 && s.get(m),
					[a, i] = (0, e.useState)((f = n) !== null && f !== void 0 ? f : l);
				return [a, u => {
					i(d => (u instanceof Function && (u = u(d)), m !== void 0 && s.set(m, u, p), u))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function($, E, t) {
			"use strict";
			var e = t("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(o) {
				return (0, e.qf)(o)
			}
			E.Z = r
		},
		"../react/common/hooks/useIntersectionObserver.ts": function($, E, t) {
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
				rootMargin: m,
				threshold: s
			} = {}) {
				const p = (0, e.useRef)(null);

				function f() {
					return p.current === null && (p.current = new IntersectionObserver(c, {
						root: l,
						rootMargin: m,
						threshold: s
					})), p.current
				}
				return (0, e.useEffect)(() => (p.current = new IntersectionObserver(c, {
					root: l,
					rootMargin: m,
					threshold: s
				}), () => {
					var n;
					(n = p.current) === null || n === void 0 || n.disconnect()
				}), [c, l, m, s]), f()
			}
		},
		"../react/common/hooks/usePrevious.ts": function($, E, t) {
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
		"../react/common/hooks/useZoneEntitlement.ts": function($, E, t) {
			"use strict";
			var e = t("../react/app/redux/index.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts");

			function o(c) {
				return (0, e.p4)(l => (0, r.rV)(l, c))
			}
			E.Z = o
		},
		"../react/common/middleware/sparrow/errors.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Uh: function() {
					return l
				},
				ez: function() {
					return c
				},
				oV: function() {
					return m
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
			class m extends c {
				constructor(p, f) {
					super(p, `Found invalid properties on event: "${p}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = f
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function($, E, t) {
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
					return A
				},
				Bp: function() {
					return gt
				},
				CV: function() {
					return tt
				},
				D0: function() {
					return w
				},
				DT: function() {
					return Q
				},
				EL: function() {
					return F
				},
				EU: function() {
					return V
				},
				GE: function() {
					return Et
				},
				Ko: function() {
					return re
				},
				Kx: function() {
					return b
				},
				Le: function() {
					return L
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
					return M
				},
				VP: function() {
					return Ne
				},
				Xo: function() {
					return lt
				},
				Xu: function() {
					return Y
				},
				Yi: function() {
					return Xe
				},
				Yj: function() {
					return J
				},
				Zu: function() {
					return ee
				},
				bC: function() {
					return ne
				},
				f8: function() {
					return ae
				},
				hI: function() {
					return et
				},
				hN: function() {
					return S
				},
				hX: function() {
					return Le
				},
				iq: function() {
					return Be
				},
				nE: function() {
					return P
				},
				oD: function() {
					return O
				},
				oI: function() {
					return H
				},
				oJ: function() {
					return pt
				},
				tM: function() {
					return B
				},
				uF: function() {
					return z
				},
				ut: function() {
					return Fe
				},
				vU: function() {
					return st
				},
				wQ: function() {
					return ue
				}
			});
			var e = t("../../../../node_modules/lodash-es/memoize.js"),
				r = t("../../../../node_modules/lodash/get.js"),
				o = t.n(r),
				c = t("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = t.n(c),
				m = t("../../../../node_modules/reselect/lib/index.js"),
				s = t("../../../../node_modules/moment/moment.js"),
				p = t.n(s),
				f = t("../react/common/utils/formatDate.ts"),
				n = t("../react/app/redux/normalizer.js"),
				a = t("../react/common/selectors/userSelectors.ts"),
				i = t("../react/common/selectors/entitlementsSelectors.ts"),
				g = t("../react/app/components/DeepLink/selectors.ts"),
				u = t("../react/common/constants/roles.ts"),
				d = t("../react/common/utils/hasRole.ts");

			function I(W) {
				for (var le = 1; le < arguments.length; le++) {
					var _e = arguments[le] != null ? Object(arguments[le]) : {},
						Te = Object.keys(_e);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(_e).filter(function(De) {
						return Object.getOwnPropertyDescriptor(_e, De).enumerable
					})), Te.forEach(function(De) {
						D(W, De, _e[De])
					})
				}
				return W
			}

			function D(W, le, _e) {
				return le = h(le), le in W ? Object.defineProperty(W, le, {
					value: _e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : W[le] = _e, W
			}

			function h(W) {
				var le = v(W, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function v(W, le) {
				if (typeof W != "object" || W === null) return W;
				var _e = W[Symbol.toPrimitive];
				if (_e !== void 0) {
					var Te = _e.call(W, le || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(W)
			}
			const w = W => {
					const le = z(W);
					return le == null ? void 0 : le.account
				},
				_ = W => {
					const le = (0, a.PR)(W);
					if (le) {
						const _e = le.id;
						return W.accountAccess[_e] || {}
					}
					return {}
				},
				T = W => W.accountsDetailed,
				k = (0, n.P1)("accountsDetailed", T),
				A = W => W.memberships,
				P = (0, m.P1)((0, n.P1)("memberships", A), g.U, (W, le) => !!le && !!W ? W.filter(_e => le.includes(_e.id)) : W),
				S = W => W.accountFlags && W.accountFlags.data,
				b = W => W.accountFlags,
				L = (W, le, _e) => {
					const Te = S(W);
					return !Te || !Te[le] ? null : Te[le][_e]
				},
				R = W => W.accountFlags.isRequesting,
				H = (W, ...le) => o()(W, ["accountFlagsChanges", "data", ...le]),
				ae = W => W.accountFlagsChanges.isRequesting,
				se = (0, m.P1)(S, b, (W, le) => ({
					data: W,
					meta: le
				})),
				ce = (W, le, _e) => !!(isEnterpriseSSEnabledSelector(W) && L(W, le, _e)),
				Y = W => W.membership,
				z = (0, n.P1)("membership", Y),
				G = (0, m.P1)(z, Y, (W, le) => ({
					data: W,
					meta: le
				})),
				N = W => {
					const {
						roles: le = []
					} = z(W) || {};
					return Boolean(le.find(_e => _e === "Super Administrator - All Privileges" || _e === "Billing"))
				},
				B = W => {
					const le = [u.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES];
					return (0, d.n)(W, le)
				},
				O = W => {
					const le = _(W),
						_e = We.getMemberships(W) ? l().asMutable(We.getMemberships(W)) : [];
					if (!!_e) return l().from(_e.map(Te => I({}, Te, {
						lastSeen: le[Te.account.id] ? le[Te.account.id].lastSeen : null
					})).sort((Te, De) => Te.lastSeen && De.lastSeen ? De.lastSeen - Te.lastSeen : 0))
				},
				M = W => W.filteredMemberships,
				F = (0, n.P1)("filteredMemberships", M),
				ee = (0, m.P1)(z, W => W == null ? void 0 : W.permissions),
				J = (0, m.P1)(ee, W => (0, e.Z)(le => {
					var _e;
					return (_e = W == null ? void 0 : W[le]) !== null && _e !== void 0 ? _e : {
						read: !1,
						edit: !1
					}
				})),
				re = (0, m.P1)(z, W => W == null ? void 0 : W.policies),
				Q = (W, le, _e) => {
					let Te = We.getMembership(W);
					if (!Te) {
						const De = We.getMemberships(W);
						if (!De || !le) return !1;
						Te = De.find(Ue => Ue.account.id === le)
					}
					if (!Te || !_e) return !1;
					try {
						return _e(Te.permissions)
					} catch {
						return !1
					}
				},
				U = W => {
					var le, _e;
					return (le = (_e = w(W)) === null || _e === void 0 ? void 0 : _e.meta.has_pro_zones) !== null && le !== void 0 ? le : !1
				},
				V = W => {
					var le, _e;
					return (le = (_e = w(W)) === null || _e === void 0 ? void 0 : _e.meta.has_business_zones) !== null && le !== void 0 ? le : !1
				},
				ne = W => V(W) || U(W),
				ge = (W, le) => {
					const _e = de(W, le);
					return !!_e && !!_e.enabled
				},
				de = (W, le) => {
					const _e = We.getMembership(W),
						Te = _e && _e.account;
					return Te && Te.legacy_flags && Te.legacy_flags[le]
				},
				ue = W => ge(W, "custom_pages"),
				te = W => !!W && W["webhooks.webhooks.enabled"],
				ye = W => L(W, "bots", "enabled"),
				Oe = W => L(W, "billing", "annual_subscriptions_enable"),
				Ie = W => W ? Boolean(L(W, "ConstellationAI", "v2_ui")) : !1,
				Le = W => W ? Boolean(L(W, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Se = W => W ? Boolean(L(W, "AIgateway", "enabled")) : !1,
				ke = W => de(W, "enterprise_zone_quota"),
				qe = W => {
					const le = ke(W);
					return !le || !le.available ? -1 : le.available
				},
				Be = W => W.accountMembers,
				$e = (0, n.P1)("accountMembers", Be),
				Ye = W => W.accountMember && W.accountMember.isRequesting,
				Z = W => W.accountRoles,
				ve = (0, n.P1)("accountRoles", Z),
				Me = (W, le) => {
					const _e = We.getMemberships(W),
						Te = _e && _e.find(ot => ot.account.id === le);
					if (Te) return Te.account.name.replace(" Account", " account");
					const De = We.getMembership(W),
						Ue = De && De.account;
					return Ue && Ue.id === le ? Ue.name : null
				},
				Fe = (W, le) => {
					const _e = We.getMemberships(W),
						Te = _e && _e.find(ot => ot.account.id === le);
					if (Te) return Te.account.settings.access_approval_expiry;
					const De = We.getMembership(W),
						Ue = De && De.account;
					return Ue && Ue.id === le ? Ue.settings.access_approval_expiry : null
				},
				lt = (W, le) => {
					const _e = Fe(W, le);
					return _e ? p().utc(_e).isAfter() : !1
				},
				Ce = (W, le, _e) => {
					const Te = Fe(W, le);
					let De = Te ? p().utc(Te) : null;
					return !De || !De.isAfter() ? "" : De && De.year() === 3e3 ? _e("account.access_approval.card_expiration_forever") : _e("account.access_approval.card_expiration_text", {
						expiryTimestamp: De.local().format(f.U.DateTime)
					})
				},
				pt = W => W && W.member && W.member.edit,
				X = (W, le) => {
					const _e = We.getMembership(W),
						Te = _e && _e.account;
					return Te ? Te.id !== le : !1
				},
				me = W => W.dpa,
				he = (0, n.P1)("dpa", me),
				je = W => W.webhook,
				Pe = W => W.webhooks,
				be = (0, n.P1)("webhook", Pe),
				Ne = W => W.accountLegoContract,
				mt = (0, n.P1)("accountLegoContract", Ne),
				rt = W => {
					const le = mt(W);
					return (le == null ? void 0 : le.lego_state) ? le.lego_state : ""
				},
				_t = W => rt(W) === "signed",
				Et = W => Ne(W).isRequesting,
				st = W => {
					const le = mt(W);
					return le && le.subscription_type ? le.subscription_type : ""
				},
				kt = W => st(W) !== "",
				We = {
					getMembership: z,
					getMemberships: P,
					getFilteredMemberships: F,
					getAccountMembers: $e,
					getAccountRoles: ve
				},
				gt = W => W.accountSingle,
				Xe = (0, n.P1)("accountSingle", gt),
				et = W => {
					const le = [u.V.SUPER_ADMINISTRATOR_ALL_PRIVILEGES, u.V.ADMINISTRATOR];
					return (0, d.n)(W, le)
				},
				tt = W => (0, d.n)(W, [u.V.BRAND_PROTECTION])
		},
		"../react/common/selectors/commonSelectors.ts": function($, E, t) {
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
				const m = `__ACTIVE__${l}`;
				return s => {
					const p = s.application;
					return p && p.active[m]
				}
			}

			function r(l) {
				const m = `__TOGGLE__${l}`;
				return s => {
					const p = s.application;
					return p && p.toggles[m]
				}
			}

			function o(l) {
				return l && l.paginationData && l.paginationData.info && l.paginationData.info.total_count ? l.paginationData.info.total_count : 0
			}
			const c = l => l.notifications.notifications
		},
		"../react/common/selectors/entitlementsSelectors.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				$f: function() {
					return d
				},
				AD: function() {
					return m
				},
				BF: function() {
					return u
				},
				Bs: function() {
					return _
				},
				Ci: function() {
					return J
				},
				DA: function() {
					return Be
				},
				E6: function() {
					return g
				},
				Gy: function() {
					return Se
				},
				Hq: function() {
					return Le
				},
				Ms: function() {
					return A
				},
				Mx: function() {
					return ge
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
					return de
				},
				Td: function() {
					return v
				},
				Z: function() {
					return U
				},
				a: function() {
					return w
				},
				a5: function() {
					return ne
				},
				c7: function() {
					return ue
				},
				du: function() {
					return f
				},
				ec: function() {
					return se
				},
				f: function() {
					return Oe
				},
				fo: function() {
					return ye
				},
				hL: function() {
					return V
				},
				ji: function() {
					return re
				},
				jo: function() {
					return P
				},
				l9: function() {
					return Ye
				},
				lI: function() {
					return l
				},
				p1: function() {
					return D
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
					return Q
				}
			});
			var e = t("../react/utils/url.ts"),
				r = t("../react/pages/internal-dns/constants.ts");

			function o(Z, ve) {
				return Z && Z[ve]
			}
			const c = Z => !l(Z).isRequesting;

			function l(Z) {
				return Z.entitlements.zone
			}

			function m(Z) {
				return l(Z).data
			}
			const s = Z => {
				var ve, Me;
				return ((ve = l(Z).paginationData) === null || ve === void 0 || (Me = ve.options) === null || Me === void 0 ? void 0 : Me.editedDate) || {}
			};

			function p(Z, ve) {
				const Me = m(Z);
				return Me ? o(Me, ve) : void 0
			}
			const f = (Z, ve) => p(Z, ve) === !0;

			function n(Z) {
				return Z.entitlements.account
			}

			function a(Z) {
				return n(Z).data
			}
			const i = Z => {
				var ve, Me;
				return ((ve = n(Z).paginationData) === null || ve === void 0 || (Me = ve.options) === null || Me === void 0 ? void 0 : Me.editedDate) || {}
			};

			function g(Z) {
				return !n(Z).isRequesting
			}

			function u(Z, ve) {
				const Me = a(Z);
				return Me ? o(Me, ve) : void 0
			}

			function d(Z, ve) {
				return u(Z, ve) === !0
			}

			function I(Z, ve) {
				return ve.every(Me => d(Z, Me))
			}

			function D(Z) {
				return d(Z, "contract.customer_enabled")
			}

			function h(Z) {
				return d(Z, "contract.self_service_allowed")
			}

			function v(Z) {
				return d(Z, "billing.partners_managed")
			}
			const w = Z => D(Z) && h(Z),
				_ = Z => d(Z, "enterprise.ecp_allowed");

			function T(Z) {
				return k(Z) || d(Z, "argo.allow_smart_routing") || d(Z, "argo.allow_tiered_caching") || d(Z, "rate_limiting.enabled") || d(Z, "ctm.enabled") || d(Z, "workers.enabled") || d(Z, "workers.kv_store.enabled") || d(Z, "stream.enabled")
			}
			const k = Z => f(Z, "argo.allow_smart_routing") || f(Z, "argo.allow_tiered_caching"),
				A = Z => d(Z, "zone.cname_setup_allowed") || d(Z, "zone.partial_setup_allowed") || f(Z, "zone.partial_setup_allowed"),
				P = Z => d(Z, "argo.allow_smart_routing") || f(Z, "argo.allow_smart_routing"),
				S = Z => d(Z, "argo.allow_tiered_caching") || f(Z, "argo.allow_tiered_caching"),
				b = Z => P(Z) || S(Z),
				L = Z => d(Z, "ctm.enabled"),
				R = Z => {
					const ve = u(Z, "ctm.load_balancers");
					return typeof ve == "number" ? ve : 0
				},
				H = Z => {
					const ve = u(Z, "ctm.pools");
					return typeof ve == "number" ? ve : 0
				},
				ae = Z => {
					const ve = u(Z, "ctm.origins");
					return typeof ve == "number" ? ve : 0
				},
				se = Z => d(Z, "workers.enabled"),
				ce = Z => d(Z, "stream.enabled"),
				Y = Z => {
					const ve = u(Z, "access.users_allowed");
					return typeof ve == "number" ? ve : 0
				},
				z = Z => Y(Z) > 0,
				G = Z => {
					const ve = p(Z, "dedicated_certificates");
					return typeof ve == "number" ? ve : 0
				},
				N = Z => G(Z) > 0,
				B = Z => {
					const ve = p(Z, "rate_limiting.max_rules");
					return typeof ve == "number" ? ve : 0
				},
				O = Z => d(Z, "rate_limiting.enabled"),
				M = Z => {
					const ve = p(Z, "page_rules");
					return typeof ve == "number" ? ve : 0
				},
				F = Z => M(Z) > 0,
				ee = Z => {
					const ve = u(Z, "dns_firewall.max_clusters_allowed");
					return typeof ve == "number" ? ve : 0
				},
				J = Z => ee(Z) > 0,
				re = Z => f(Z, "zone.advanced_certificate_manager") || d(Z, "zone.advanced_certificate_manager"),
				Q = Z => p(Z, "authoritative_dns.proxy_record_allowed") === !1 || u(Z, "authoritative_dns.proxy_record_allowed") === !1,
				U = Z => d(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				V = Z => p(Z, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				ne = Z => {
					const ve = p(Z, "authoritative_dns.min_record_ttl_allowed");
					return typeof ve == "number" && ve > 1 ? ve : 60
				},
				ge = Z => {
					const ve = u(Z, r.yt);
					return typeof ve == "number" ? ve : 0
				},
				de = Z => d(Z, "foundation_dns.advanced_nameservers_allowed") || f(Z, "foundation_dns.advanced_nameservers_allowed"),
				ue = Z => d(Z, "authoritative_dns.account_custom_nameservers_allowed"),
				te = Z => f(Z, "authoritative_dns.zone_custom_nameservers_allowed"),
				ye = Z => te(Z) || ue(Z),
				Oe = (Z, ve) => ((0, e.el)(window.location.pathname) ? p : u)(Z, ve),
				Ie = Z => ((0, e.el)(window.location.pathname) ? m : a)(Z),
				Le = Z => d(Z, "authoritative_dns.multi_provider_allowed") || f(Z, "authoritative_dns.multi_provider_allowed"),
				Se = Z => f(Z, "authoritative_dns.cname_flattening_allowed"),
				ke = Z => d(Z, "secondary_dns.secondary_overrides") || f(Z, "secondary_dns.secondary_overrides"),
				qe = Z => d(Z, "authoritative_dns.custom_soa_allowed") || f(Z, "authoritative_dns.custom_soa_allowed"),
				Be = Z => d(Z, "authoritative_dns.custom_ns_ttl_allowed") || f(Z, "authoritative_dns.custom_ns_ttl_allowed"),
				$e = Z => d(Z, "secondary.create_zone"),
				Ye = Z => de(Z) || ue(Z) || Le(Z) || $e(Z) || ke(Z) || qe(Z) || Be(Z)
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				r: function() {
					return l
				},
				v: function() {
					return m
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
					return m(f) ? f : e.ZW
				}
			};

			function m(s) {
				const p = Object.keys(r.Q).find(f => r.Q[f] === s);
				return !!s && typeof s == "string" && p != null && (0, e.S8)(p)
			}
		},
		"../react/common/selectors/userSelectors.ts": function($, E, t) {
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
					return w
				},
				PR: function() {
					return o
				},
				h$: function() {
					return D
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
					return m
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
				m = _ => {
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
				g = (0, e.P1)("userDetails", i),
				u = _ => {
					const T = g(_);
					return T && T["2FA-RECOVERY"] === "scheduled"
				},
				d = _ => {
					const T = g(_);
					return T && T["2FA-RECOVERY"] === "interrupted"
				},
				I = _ => {
					const T = g(_);
					return T == null ? void 0 : T["NEW-USER-EMAIL"]
				},
				D = _ => _.gates.assignments,
				h = (_, T) => _ && _[T];

			function v(_, T) {
				const k = D(_);
				return k ? h(k, T) : void 0
			}
			const w = (_, T) => v(_, T) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				$4: function() {
					return A
				},
				$t: function() {
					return Me
				},
				A4: function() {
					return D
				},
				Cu: function() {
					return h
				},
				DQ: function() {
					return ge
				},
				Ej: function() {
					return S
				},
				FH: function() {
					return w
				},
				ID: function() {
					return O
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
					return J
				},
				M3: function() {
					return $e
				},
				N8: function() {
					return Be
				},
				NY: function() {
					return V
				},
				Ns: function() {
					return F
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
					return ue
				},
				_y: function() {
					return M
				},
				cU: function() {
					return Se
				},
				cg: function() {
					return ne
				},
				d2: function() {
					return ce
				},
				il: function() {
					return ee
				},
				jN: function() {
					return R
				},
				jg: function() {
					return Q
				},
				kC: function() {
					return P
				},
				kf: function() {
					return Z
				},
				ko: function() {
					return G
				},
				mK: function() {
					return Fe
				},
				nA: function() {
					return u
				},
				oY: function() {
					return L
				},
				qM: function() {
					return ye
				},
				rq: function() {
					return U
				},
				tS: function() {
					return k
				},
				tU: function() {
					return ae
				},
				vB: function() {
					return lt
				},
				vM: function() {
					return H
				},
				wH: function() {
					return _
				},
				wn: function() {
					return de
				},
				xU: function() {
					return se
				},
				xw: function() {
					return Oe
				},
				z5: function() {
					return B
				},
				zO: function() {
					return ke
				},
				zW: function() {
					return ve
				},
				zh: function() {
					return Y
				}
			});
			var e = t("../../../../node_modules/reselect/lib/index.js"),
				r = t("../react/app/redux/normalizer.js"),
				o = t("../../../../node_modules/lodash/get.js"),
				c = t.n(o),
				l = t("../../../../node_modules/moment/moment.js"),
				m = t.n(l),
				s = t("../react/common/constants/billing/index.ts");

			function p(X) {
				for (var me = 1; me < arguments.length; me++) {
					var he = arguments[me] != null ? Object(arguments[me]) : {},
						je = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && je.push.apply(je, Object.getOwnPropertySymbols(he).filter(function(Pe) {
						return Object.getOwnPropertyDescriptor(he, Pe).enumerable
					})), je.forEach(function(Pe) {
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
					var je = he.call(X, me || "default");
					if (typeof je != "object") return je;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (me === "string" ? String : Number)(X)
			}
			const i = (0, r.P1)("zone", X => X.zone),
				g = X => {
					var me;
					return (me = X.zoneVersioning) === null || me === void 0 ? void 0 : me.zoneVersionSelector
				},
				u = (0, e.P1)(i, g, (X, me) => {
					var he, je, Pe;
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
							rootZoneId: Ne ? me.rootZoneId : (je = (Pe = be) === null || Pe === void 0 ? void 0 : Pe.id) !== null && je !== void 0 ? je : ""
						}
					})
				}),
				d = X => X.zone,
				I = X => X.zone.isRequesting,
				D = (0, e.P1)(u, d, (X, me) => ({
					data: X,
					meta: me
				})),
				h = X => {
					var me, he;
					return (me = (he = u(X)) === null || he === void 0 ? void 0 : he.id) !== null && me !== void 0 ? me : ""
				},
				v = X => X.zones,
				w = X => X.zonesRoot,
				_ = X => X.zonesAccount,
				T = (0, r.P1)("zones", v),
				k = (0, r.P1)("zonesRoot", w),
				A = (0, r.P1)("zonesAccount", _);

			function P(X) {
				const me = u(X);
				return me ? me.created_on : null
			}

			function S(X, me, he) {
				const je = P(X);
				if (!je) return;
				const Pe = m().duration(me, he),
					be = new Date(je),
					Ne = new Date(new Date().getTime() - Pe.asMilliseconds());
				return be.getTime() > Ne.getTime()
			}

			function b(X) {
				const me = u(X);
				return me ? me.status : null
			}

			function L(X) {
				const me = u(X);
				return me ? me.type : null
			}

			function R(X) {
				return (X == null ? void 0 : X.plan_pending) ? X == null ? void 0 : X.plan_pending : X == null ? void 0 : X.plan
			}

			function H(X) {
				const me = u(X);
				if (!me) return;
				const he = R(me);
				return he && he.legacy_id
			}

			function ae(X, me) {
				const he = R(X);
				return !!he && s.Gs.indexOf(he.legacy_id) >= s.Gs.indexOf(me)
			}

			function se(X) {
				return !!X && X.status === "initializing"
			}

			function ce(X) {
				return !!X && X.status === "pending"
			}

			function Y(X) {
				return !!X && X.status === "active"
			}

			function z(X, me) {
				if (!X) return !1;
				const he = R(X);
				return !!he && he.legacy_id === me
			}

			function G(X) {
				return z(X, "enterprise")
			}
			const N = X => G(u(X));

			function B(X) {
				return z(X, "business")
			}
			const O = X => B(u(X));

			function M(X) {
				return z(X, "pro")
			}

			function F(X) {
				return z(X, "free")
			}
			const ee = X => F(u(X));

			function J(X) {
				return !G(X)
			}

			function re(X) {
				return X && X.owner
			}

			function Q(X, me) {
				const he = re(me);
				return !!he && he.type === "user" && he.id === X.id
			}

			function U(X) {
				const me = u(X);
				return !!me && me.type === "partial"
			}

			function V(X) {
				const me = u(X);
				return !!me && me.type === "secondary"
			}
			const ne = X => {
					var me;
					const he = u(X);
					return !!(he == null ? void 0 : he.host) && !!((me = he.plan) === null || me === void 0 ? void 0 : me.externally_managed)
				},
				ge = X => {
					const me = T(X);
					return me && me.some(G)
				},
				de = (X, me) => {
					const he = u(X);
					return he && he.betas ? he.betas.includes(me) : !1
				},
				ue = (X, ...me) => c()(X, ["zoneFlags", "data", ...me]),
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
				Z = X => X.overview.zoneBlocks.data,
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
		"../react/common/utils/formatDate.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				U: function() {
					return e.pN
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			E.Z = (r, o, c = !1) => (0, e.p6)(r, o, c)
		},
		"../react/common/utils/getEnvironment.ts": function($, E, t) {
			"use strict";
			var e = t("../../../../node_modules/cookie/index.js"),
				r = t("../functions/utils/preview-deploy-helpers.ts"),
				o = t("../functions/utils/constants.ts");
			const c = () => {
				var l, m, s, p;
				const n = e.parse(document.cookie)[o.b1];
				let a = null;
				n && (a = (0, r.E9)(n));
				let i = "production";
				switch (!0) {
					case (((l = a) === null || l === void 0 ? void 0 : l.projectType) === "previews" && ((m = a) === null || m === void 0 ? void 0 : m.deploymentId) === "staging"):
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
		"../react/common/utils/hasRole.ts": function($, E, t) {
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
				return c.some(m => l.includes(m))
			}
		},
		"../react/common/utils/isGuards.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Q$: function() {
					return o
				},
				t: function() {
					return m
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
				m = s => (0, r.Z)(s)
		},
		"../react/common/utils/startViewTransition.ts": function($, E, t) {
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
		"../react/common/utils/useQueryCache.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				o: function() {
					return m
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
			const m = s => {
				const p = (0, e.useQueryClient)(),
					f = v => {
						var w;
						return p.getQueriesData((w = v) !== null && w !== void 0 ? w : s)
					},
					n = v => {
						var w;
						return p.getQueryData((w = v) !== null && w !== void 0 ? w : s)
					},
					a = v => {
						var w;
						return p.getQueriesData({
							queryKey: (w = v) !== null && w !== void 0 ? w : s,
							stale: !0
						})
					},
					i = (v, w) => {
						var _;
						p.setQueryData((_ = w) !== null && _ !== void 0 ? _ : s, v)
					},
					g = async v => {
						var w;
						await p.refetchQueries((w = v) !== null && w !== void 0 ? w : s)
					}, u = async (v, w) => {
						var _, T;
						await p.invalidateQueries((_ = v) !== null && _ !== void 0 ? _ : s, r({
							refetchActive: !1
						}, (T = w) !== null && T !== void 0 ? T : {}))
					}, d = async (v, w) => {
						const _ = v || (T => {
							var k;
							return (T == null || (k = T.queryKey) === null || k === void 0 ? void 0 : k[0]) === s
						});
						await p.invalidateQueries(r({
							predicate: _,
							refetchActive: !1,
							refetchInactive: !1
						}, w))
					};
				return {
					refetch: g,
					cancelData: async () => {
						await p.cancelQueries(s)
					},
					invalidate: u,
					setData: i,
					getDataStale: a,
					getData: f,
					prefetchQuery: (v, w) => {
						var _;
						return p.prefetchQuery((_ = w) !== null && _ !== void 0 ? _ : s, v)
					},
					getQueryData: n,
					predicateInvalidate: d,
					batchInvalidate: async ({
						queryKeysToInvalidate: v = [],
						queryKeysToPredicateInvalidate: w = [],
						refetchActive: _ = !1,
						refetchInactive: T = !1
					}) => {
						const k = v.map(P => u(P)),
							A = w.map(P => d(S => {
								var b;
								return (S == null || (b = S.queryKey) === null || b === void 0 ? void 0 : b[0]) === P
							}, {
								refetchActive: _,
								refetchInactive: T
							}));
						await Promise.all([...k, ...A])
					}
				}
			}
		},
		"../react/common/validators/index.js": function($, E, t) {
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
				m = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				s = f => m.test(f),
				p = f => !!f && !!f.length && /^[ -~]+$/.test(f)
		},
		"../react/pages/abuse/abuse.translations.ts": function($, E, t) {
			"use strict";
			t.r(E), t.d(E, {
				keys: function() {
					return l
				},
				namespace: function() {
					return c
				},
				translations: function() {
					return m
				}
			});
			var e = t("../../../common/intl/intl-core/src/prepare.ts"),
				r = t("../../../common/intl/intl-core/src/Interpolation.ts"),
				o = t("../react/pages/abuse/types.ts");
			const {
				namespace: c,
				keys: l,
				translations: m
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
		"../react/pages/abuse/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Cg: function() {
					return f
				},
				RV: function() {
					return p
				},
				R_: function() {
					return m
				},
				Vq: function() {
					return g
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
				m = "abuse-reports-table-tooltip",
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
			let g = function(I) {
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
		"../react/pages/abuse/types.ts": function($, E, t) {
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
			let e = function(m) {
					return m.Type = "type", m.EffectiveDate = "effective_date", m.Status = "status", m.EntityType = "entity_type", m.EntityId = "entity_id", m
				}({}),
				r = function(m) {
					return m.ID = "id", m.DOMAIN = "domain", m.CREATED_BEFORE = "created_before", m.CREATED_AFTER = "created_after", m.STATUS = "status", m.TYPE = "type", m.MITIGATION_STATUS = "mitigation_status", m
				}({}),
				o = function(m) {
					return m.DMCA = "DMCA", m.TRADEMARK = "TM", m.PHISHING = "PHISH", m.GENERAL = "GEN", m.REGISTRAR_WHOIS = "REG_WHO", m.EMERGENCY = "EMER", m.NCSEI = "NCSEI", m.THREAT = "THREAT", m
				}({});
			const c = [o.DMCA, o.TRADEMARK, o.PHISHING, o.GENERAL, o.REGISTRAR_WHOIS, o.EMERGENCY, o.NCSEI, o.THREAT];
			let l = function(m) {
				return m.Id = "id", m.CDate = "cdate", m.Domain = "domain", m.Type = "type", m.Status = "status", m.AcceptedUrls = "accepted_urls", m
			}({})
		},
		"../react/pages/analytics/common/utils/gqlUtils.js": function($, E, t) {
			"use strict";
			t.d(E, {
				DZ: function() {
					return c
				},
				GA: function() {
					return f
				},
				hT: function() {
					return m
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
				m = i => new Date(i),
				s = {
					0: "datetimeMinute",
					3: "datetimeFiveMinutes",
					12: "datetimeFifteenMinutes",
					48: "datetimeHour",
					240: "date"
				},
				p = i => {
					const g = i / 60 / 60 / 1e3;
					return s[Object.keys(s).sort((u, d) => d - u).find(u => g >= u)]
				},
				f = (i, g = u => u.avg && u.avg.sampleInterval ? u.avg.sampleInterval : 1) => i.length === 0 ? 1 : i.reduce((u, d) => u + g(d), 0) / i.length,
				n = {
					datetimeMinute: 60 * 1e3,
					datetimeFiveMinutes: 5 * 60 * 1e3,
					datetimeFifteenMinutes: 15 * 60 * 1e3,
					datetimeHour: 60 * 60 * 1e3,
					date: 240 * 60 * 1e3
				},
				a = i => n[i]
		},
		"../react/pages/caching/tracking.tsx": function($, E, t) {
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
		"../react/pages/d1/routes.ts": function($, E, t) {
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
		"../react/pages/dns/dns-records/tracking.ts": function($, E, t) {
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
		"../react/pages/email/types.ts": function($, E, t) {
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
		"../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts": function($, E, t) {
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
				m = (0, e.BC)`${o}/stepper`,
				s = (0, e.BC)`${m}/${"stepName"}`,
				p = (0, e.BC)`${m}/details`,
				f = (0, e.BC)`${m}/data-centers`,
				n = (0, e.BC)`${m}/ramps`,
				a = (0, e.BC)`${m}/threshold`,
				i = (0, e.BC)`${m}/review`,
				g = (0, e.BC)`${m}/confirm`,
				u = (0, e.BC)`${c}/stepper`,
				d = (0, e.BC)`${u}/${"stepName"}`,
				I = (0, e.BC)`${u}/details`,
				D = (0, e.BC)`${u}/data-centers`,
				h = (0, e.BC)`${u}/ramps`,
				v = (0, e.BC)`${u}/threshold`,
				w = (0, e.BC)`${u}/review`,
				_ = (0, e.BC)`${u}/confirm`,
				T = {
					magicTunnelHealthChooseSubType: l,
					magicTunnelHealthCreateStepperBase: m,
					magicTunnelHealthCreateStepper: s,
					magicTunnelHealthCreateDetails: p,
					magicTunnelHealthCreateSelectDataCenter: f,
					magicTunnelHealthCreateSelectRamps: n,
					magicTunnelHealthCreateSetThreshold: a,
					magicTunnelHealthCreateReview: i,
					magicTunnelHealthCreateConfirm: g,
					magicTunnelHealthEditStepperBase: u,
					magicTunnelHealthEditStepper: d,
					magicTunnelHealthEditDetails: I,
					magicTunnelHealthEditSelectDataCenter: D,
					magicTunnelHealthEditSelectRamps: h,
					magicTunnelHealthEditSetThreshold: v,
					magicTunnelHealthEditReview: w,
					magicTunnelHealthEditConfirm: _
				};
			E.Z = T
		},
		"../react/pages/home/alerts/config.tsx": function($, E, t) {
			"use strict";
			t.d(E, {
				jk: function() {
					return i
				},
				w8: function() {
					return g
				}
			});
			var e = t("../react/pages/home/alerts/routes.ts"),
				r = t("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				o = t("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				c = t("../react/pages/home/alerts/components/form/producers/MagicTunnelHealthCheck/routes.ts"),
				l = t("../react/pages/home/alerts/integrations/redux/entities.ts");

			function m(u) {
				for (var d = 1; d < arguments.length; d++) {
					var I = arguments[d] != null ? Object(arguments[d]) : {},
						D = Object.keys(I);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(I).filter(function(h) {
						return Object.getOwnPropertyDescriptor(I, h).enumerable
					})), D.forEach(function(h) {
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
					var D = I.call(u, d || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (d === "string" ? String : Number)(u)
			}
			const n = "Notifications",
				a = "notification",
				i = m({}, e._, r._j, o._j, c._),
				g = m({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, l.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				_j: function() {
					return m
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				o = (0, e.BC)`${r}/pagerduty/connect`,
				c = (0, e.BC)`${r}/pagerduty/register`,
				l = (0, e.BC)`${r}/pagerduty`,
				m = {
					pagerDutyConnect: o,
					pagerDutyRegister: c,
					pagerDutyList: l
				};
			var s = null
		},
		"../react/pages/home/alerts/routes.ts": function($, E, t) {
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
				m = (0, e.BC)`${l}/${"alertType"}`,
				s = (0, e.BC)`${o}/edit/${"alertId"}`,
				p = {
					account: r,
					alerts: o,
					destinations: c,
					createAlert: l,
					createAlertWithSelection: m,
					editAlert: s
				};
			E.Z = p
		},
		"../react/pages/home/alerts/tracking.ts": function($, E, t) {
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
		"../react/pages/home/configurations/dns-settings/tracking.ts": function($, E, t) {
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
		"../react/pages/home/configurations/lists/tracking.ts": function($, E, t) {
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
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				AA: function() {
					return U
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
					return D
				},
				B2: function() {
					return B
				},
				BB: function() {
					return P
				},
				BF: function() {
					return Pe
				},
				BQ: function() {
					return We
				},
				E8: function() {
					return W
				},
				Fl: function() {
					return De
				},
				Fu: function() {
					return L
				},
				Gc: function() {
					return rt
				},
				Hc: function() {
					return Nt
				},
				IO: function() {
					return gt
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
					return Z
				},
				Ly: function() {
					return He
				},
				MR: function() {
					return M
				},
				Mj: function() {
					return ee
				},
				NB: function() {
					return Mt
				},
				Oe: function() {
					return Ft
				},
				Or: function() {
					return re
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
					return je
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
					return Ue
				},
				Sl: function() {
					return xt
				},
				TZ: function() {
					return Q
				},
				Tg: function() {
					return Be
				},
				Tp: function() {
					return mt
				},
				Uy: function() {
					return wt
				},
				Vw: function() {
					return H
				},
				W3: function() {
					return pt
				},
				WR: function() {
					return Xe
				},
				WX: function() {
					return de
				},
				XF: function() {
					return tt
				},
				Xb: function() {
					return V
				},
				Zs: function() {
					return Ye
				},
				_f: function() {
					return be
				},
				b4: function() {
					return ge
				},
				bc: function() {
					return Lt
				},
				c2: function() {
					return O
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
					return ne
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
					return z
				},
				nm: function() {
					return ot
				},
				oW: function() {
					return le
				},
				pH: function() {
					return G
				},
				pi: function() {
					return Y
				},
				r4: function() {
					return Dt
				},
				rI: function() {
					return F
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
					return Ut
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
				m = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				s = t("../react/utils/url.ts"),
				p = t("../react/pages/home/domain-registration/config.ts"),
				f = t("../react/pages/home/domain-registration/registrar.translations.ts"),
				n = t("../react/pages/home/domain-registration/types.ts");

			function a(y) {
				for (var C = 1; C < arguments.length; C++) {
					var j = arguments[C] != null ? Object(arguments[C]) : {},
						oe = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(j).filter(function(pe) {
						return Object.getOwnPropertyDescriptor(j, pe).enumerable
					})), oe.forEach(function(pe) {
						i(y, pe, j[pe])
					})
				}
				return y
			}

			function i(y, C, j) {
				return C = g(C), C in y ? Object.defineProperty(y, C, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : y[C] = j, y
			}

			function g(y) {
				var C = u(y, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function u(y, C) {
				if (typeof y != "object" || y === null) return y;
				var j = y[Symbol.toPrimitive];
				if (j !== void 0) {
					var oe = j.call(y, C || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(y)
			}

			function d(y) {
				return y.filter(C => C.isSelected).reduce((C, {
					name: j,
					fees: oe,
					isZoneEntitlementPresent: pe
				}) => pe || !(0, e.isNumber)(oe == null ? void 0 : oe.transfer_fee) ? C : ft(j) ? C + (oe == null ? void 0 : oe.transfer_fee) * 2 : C + (oe == null ? void 0 : oe.transfer_fee), 0)
			}

			function I(y) {
				return y.filter(C => C.registrar.toLowerCase() === "godaddy")
			}
			const D = "MMM D, YYYY";

			function h(y, C, j, oe) {
				var pe, Ee, Re, ze, Je, Ve, Ze, at, ut, nt, Ge, jt;
				const Qe = y[C.name],
					Gt = () => ft(C.name) ? c()(C.expires_at).add(2, "years").format(D) : c()(C.expires_at).add(1, "year").format(D);
				return a({
					name: C == null ? void 0 : C.name,
					zone: Qe,
					entitlements: j,
					registryCheck: oe,
					nameservers: C.name_servers,
					isAvailable: C.available,
					lastKnownStatus: C.last_known_status,
					authCode: C.auth_code,
					isEnterpriseZone: (Qe == null || (pe = Qe.plan) === null || pe === void 0 ? void 0 : pe.legacy_id) === "enterprise",
					isActiveZone: (Qe == null ? void 0 : Qe.status) === "active",
					corResponsesPending: C.cor_responses_pending,
					isCorLocked: C.cor_locked,
					corLockedUntil: C.cor_locked_until ? c()(C.cor_locked_until).format(D) : null,
					isFullZone: (Qe == null ? void 0 : Qe.type) == n.xd.Full,
					isLocked: C.locked,
					registrar: C.current_registrar || p.JM,
					zoneId: Qe == null ? void 0 : Qe.id,
					currentExpiration: c()(C.expires_at).format(D),
					newExpiration: Gt(),
					lastEntitledAt: C.last_entitled_at ? new Date(C.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(j) && !!j.find(Wt => Wt.id === p.g5 && Wt.allocation.value === !0),
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
					corChanges: C.cor_changes ? P(Object.assign(a({}, w), C.cor_changes)) : {},
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
						ineligibilityReasons: (jt = C.domain_move) === null || jt === void 0 ? void 0 : jt.ineligibility_reasons
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
			const w = {
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
				let j = a({}, typeof y.id == "string" ? {
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
				return $e(j)
			}

			function k(y) {
				let C = [];
				const j = {
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
				for (const oe in y) {
					const pe = y[oe],
						Ee = j[pe];
					C.push(Ee)
				}
				return C
			}
			const A = y => {
				if (!y) return null;
				let C = y;
				return y.includes("C31") && (C = "C31"), y.includes("C32") && (C = "C32"), C
			};

			function P(y) {
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
						nexusCategory: A(y.extensions.nexus_category),
						applicationPurpose: y.extensions.application_purpose
					}
				} : {})
			}

			function S(y = {}) {
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

			function L(y) {
				const C = p.Py.concat(p.ui).reduce((j, oe) => a({}, j, {
					[oe]: []
				}), {});
				return y.forEach(j => {
					let oe = R(j.registrar);
					oe in C || (oe = p.ui), ct(j.name) && (oe = "uk"), C[oe].push(j)
				}), Object.keys(C).sort((j, oe) => j.localeCompare(oe)).map(j => ({
					registrar: j,
					domains: C[j]
				})).filter(j => j.domains.length > 0)
			}

			function R(y) {
				return y == null ? void 0 : y.toLowerCase().replace(/\s|,|\./g, "")
			}

			function H(y) {
				if (!y || !y.registrar) return "unknown";
				if (ct(y.name)) return "uk";
				const C = R(y.registrar);
				return C in p.gM ? C : "unknown"
			}
			const ae = [];

			function se(y) {
				return ae.some(C => y.endsWith("." + C))
			}

			function ce(y) {
				return !y.isEnterpriseZone || !Array.isArray(y.entitlements) ? !1 : !!y.entitlements.find(({
					id: C,
					allocation: j
				}) => C === p.g5 && j.value === !0)
			}

			function Y(y) {
				var C;
				const j = [n.rj.CLIENT_HOLD, n.rj.SERVER_HOLD, n.rj.SERVER_TRANSFER_PROHIBITED, n.rj.PENDING_DELETE, n.rj.PENDING_TRANSFER, n.rj.CLIENT_TRANSFER_PROHIBITED];
				let oe = !1,
					pe = null;
				return (C = y.registryStatuses) === null || C === void 0 || C.some(Ee => {
					j.includes(Ee) && (pe = Ee, oe = !0)
				}), [oe, pe]
			}

			function z(y, C = !1) {
				if (!y) return [!1, f.keys.cannot_transfer_default];
				if (y.zone.status !== "active") return [!1, f.keys.cannot_transfer_zone_not_active];
				if (!y.isFullZone && !ce(y)) return [!1, f.keys.cannot_transfer_zone_not_eligible];
				if (y.registrar === "Cloudflare") return [!1, f.keys.cannot_transfer_domain_on_cf];
				if (y.isAvailable) return [!1, f.keys.cannot_transfer_domain_available];
				if (!y.transferConditions) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (!C && wt(y == null ? void 0 : y.premiumType)) return [!1, f.keys.cannot_transfer_domain_premium];
				if (G(y)) return [!1, f.keys.cannot_transfer_domain_transfer_in_progress];
				let j;
				for (j in y.transferConditions)
					if (j !== "not_premium" && !y.transferConditions[j]) return [!1, f.keys.cannot_transfer_domain_transfer_conditions];
				if (se(y.name)) return [!1, f.keys.cannot_transfer_domain_tld_not_supported];
				const [oe, pe] = Y(y);
				return oe && pe ? [!1, f.keys.cannot_transfer_domain_registry_status[pe]] : [!0, ""]
			}

			function G(y) {
				var C, j;
				return !!y.transferIn && !((C = y.transferConditions) === null || C === void 0 ? void 0 : C.not_started) && !!(ct(y.name) || ((j = y.registryStatuses) === null || j === void 0 ? void 0 : j.includes(n.rj.PENDING_TRANSFER)))
			}

			function N(y) {
				return !!y.registrar && !!y.currentExpiration
			}

			function B(y, C = !1) {
				const [j] = z(y, C);
				return N(y) ? ue(y) ? n.M5.InProgressOrOnCF : j ? n.M5.Supported : n.M5.Unsupported : n.M5.Unknown
			}

			function O(y) {
				return y.transferIn && [n.lW.REJECTED, n.lW.NEEDED].includes(y.transferIn.enter_auth_code) || !1
			}

			function M(y) {
				return y.registrar === "Cloudflare"
			}

			function F(y) {
				return !!(y == null ? void 0 : y.includes(n.rj.AUTO_RENEW_PERIOD))
			}

			function ee(y) {
				return !!(y == null ? void 0 : y.includes(n.rj.PENDING_TRANSFER))
			}
			const J = "Invalid date";

			function re(y) {
				return y.newExpiration === J ? "Unavailable" : y.newExpiration
			}

			function Q(y) {
				return y.currentExpiration === J ? "Unavailable" : y.currentExpiration
			}

			function U(y) {
				return y.substring(y.indexOf("."))
			}

			function V(y = "") {
				return y.indexOf(".") !== -1 ? y.substring(0, y.indexOf(".")) : y
			}

			function ne(y) {
				return y.map(C => C.name).map(C => U(C)).filter((C, j, oe) => !oe.includes(C, j + 1))
			}

			function ge(y) {
				if (p.no) return [!0, ""];
				if (!M(y)) return [!1, n.ok.NotOnCF];
				if (y.isCorLocked) return [!1, y.corLockedUntil ? n.ok.CorLockedUntil : n.ok.CorLock];
				if (y.lastTransferredAt) {
					const C = c()(y.lastTransferredAt),
						j = c().duration(c()().diff(C)).as("days"),
						oe = ct(y.name);
					if (j < (oe ? 1 : 60)) return [!1, oe ? n.ok.RecentTransferUK : n.ok.RecentTransfer]
				}
				if (y.createdAt) {
					const C = c()(y.createdAt);
					if (c().duration(c()().diff(C)).as("days") < 60) return [!1, n.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function de(y) {
				return !!(p.Bc || y.transferOut)
			}

			function ue(y) {
				return ye(y) || M(y)
			}

			function te(y) {
				return !ye(y) && M(y)
			}

			function ye(y) {
				return !y || y.lastKnownStatus === n.kd.PENDING_TRANSFER || y.lastKnownStatus === n.kd.TRANSFER_FOA_PENDING || !M(y) && y.transferConditions && !y.transferConditions.not_started || !1
			}

			function Oe(y) {
				return !(se(y.name) || y.transferConditions && !y.transferConditions.supported_tld)
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
				return y.filter(j => !C.includes(j.code))
			}

			function Be(y) {
				if (!!y) return `${y.charAt(0).toUpperCase()}${y.slice(1)}${y.charAt(y.length-1)==="."?"":"."}`
			}

			function $e(y) {
				const C = {};
				for (const [j, oe] of Object.entries(y)) {
					if (oe && typeof oe == "string") {
						Object.assign(C, {
							[j]: oe.trim()
						});
						continue
					}
					Object.assign(C, {
						[j]: oe
					})
				}
				return C
			}

			function Ye(y) {
				return c()(y).add(40, "days")
			}

			function Z(y) {
				const C = y.paymentExpiresAt || y.payment_expires_at,
					j = Ye(C);
				return c()().isBetween(C, j)
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

			function he(y, C, j) {
				return C[C.length - 1][j] === y[j]
			}

			function je(y) {
				return Boolean(Object.keys(y).length === 0)
			}

			function Pe(y) {
				return c()().add(y, "year").format(D)
			}

			function be({
				accountName: y
			}) {
				var C;
				const j = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((C = y.toLowerCase().match(j)) === null || C === void 0 ? void 0 : C[0]) || ""
			}

			function Ne(y) {
				return !!y.match(m.default.email)
			}

			function mt(y) {
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

			function gt(y) {
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

			function W(y) {
				var C;
				return !1
			}

			function le(y) {
				return Object.keys(l.wR).find(C => l.wR[C].toLowerCase() === y.toLowerCase())
			}

			function _e(y) {
				var C;
				const j = (C = le(y)) === null || C === void 0 ? void 0 : C.toLowerCase();
				return j ? f.keys.protection_status[j] : f.keys.protection_status.unknown
			}

			function Te(y) {
				return ["com", "net"].includes(y)
			}

			function De(y) {
				const C = (0, s.pu)(y);
				return Te(C) ? l.wR.PENDING_REGISTRY_LOCK : l.wR.LOCKED
			}

			function Ue(y) {
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
				var C, j;
				return !!(((C = y.policies) === null || C === void 0 || (j = C.suspension) === null || j === void 0 ? void 0 : j.parked) && y.policies.suspension.parkingReason)
			}

			function At(y) {
				var C, j;
				return yt(y) && ((C = y.policies) === null || C === void 0 || (j = C.suspension) === null || j === void 0 ? void 0 : j.parkingReason) === n.qK.EMAIL_VERIFICATION
			}

			function vt(y) {
				var C, j;
				return yt(y) && ((C = y.policies) === null || C === void 0 || (j = C.suspension) === null || j === void 0 ? void 0 : j.parkingReason) === n.qK.TRUST_AND_SAFETY
			}

			function xt(y) {
				var C;
				return !((C = y.domainMove) === null || C === void 0 ? void 0 : C.ineligibilityReasons.length)
			}

			function Ft(y) {
				var C, j;
				return !!((C = y.domainMove) === null || C === void 0 || (j = C.ineligibilityReasons) === null || j === void 0 ? void 0 : j.includes(n.Ah.DOMAIN_EXISTING_PENDING_REQUEST))
			}

			function Pt(y) {
				var C;
				return (C = y.actionableMetadata) === null || C === void 0 ? void 0 : C.find(j => j.type === n.wg.DOMAIN_MOVE)
			}

			function Bt(y) {
				const C = Pt(y);
				return (C == null ? void 0 : C.status) === "pending" && C.accountContext === n._5.GAINING
			}

			function Ut(y) {
				const C = Pt(y);
				return (C == null ? void 0 : C.status) === "pending" && C.accountContext === n._5.LOSING
			}

			function Dt(y) {
				const C = U(y.name);
				return !p.Pf.includes(C)
			}

			function Lt(y) {
				return p.QZ.includes(y)
			}
		},
		"../react/pages/home/domain-registration/config.ts": function($, E, t) {
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
					return g
				},
				Py: function() {
					return m
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
				m = Object.keys(l),
				s = !0,
				p = (0, r.J8)("registrar_mock_transfer_out") || !1,
				f = (0, r.J8)("registrar_show_unlock_ui") || !1,
				n = 250,
				a = "cf_registrar.enabled",
				i = "@abcABC1234567890123456",
				g = [".us"],
				u = [".travel", ".us", ".ong", ".ngo"],
				d = (0, e.BC)`/${"accountId"}`,
				I = (0, e.BC)`${d}/add-site`,
				D = (0, e.BC)`${d}/registrar`,
				h = (0, e.BC)`${D}/domains`,
				v = (0, e.BC)`${D}/action-center`,
				w = (0, e.BC)`${D}/domain/${"zoneName"}`,
				_ = (0, e.BC)`${w}/configuration`,
				T = (0, e.BC)`${w}/contacts`,
				k = (0, e.BC)`${D}/pricing`,
				A = (0, e.BC)`${D}/protection`,
				P = (0, e.BC)`${D}/register`,
				S = (0, e.BC)`${P}/checkout`,
				b = (0, e.BC)`${P}/checkout/${"token"}`,
				L = (0, e.BC)`${P}/success`,
				R = (0, e.BC)`${D}/tlds`,
				H = (0, e.BC)`${D}/transfer`,
				ae = (0, e.BC)`${D}/transfer/${"zoneName"}`,
				se = (0, e.BC)`/registrar/accounts/verify_email`,
				ce = (0, e.BC)`/registrar/domains/verify_email`,
				Y = (0, e.BC)`/sign-up/registrar`,
				z = (0, e.BC)`${D}/verify-email`,
				G = (0, e.BC)`${d}/${"zoneName"}`,
				N = (0, e.BC)`${d}/domains`,
				B = (0, e.BC)`${N}/action-center`,
				O = (0, e.BC)`${N}/${"zoneName"}`,
				M = (0, e.BC)`${O}/configuration`,
				F = (0, e.BC)`${O}/contacts`,
				ee = (0, e.BC)`${N}/pricing`,
				J = (0, e.BC)`${N}/protection`,
				re = (0, e.BC)`${N}/register`,
				Q = (0, e.BC)`${re}/checkout`,
				U = (0, e.BC)`${re}/checkout/${"token"}`,
				V = (0, e.BC)`${re}/success`,
				ne = (0, e.BC)`${N}/tlds`,
				ge = (0, e.BC)`${N}/transfer`,
				de = (0, e.BC)`${N}/transfer/${"zoneName"}`,
				ue = (0, e.BC)`${N}/verify-email`,
				te = {
					addSite: I,
					domains: h,
					domainsActionCenter: v,
					domainsDomain: w,
					domainsDomainConfiguration: _,
					domainsDomainContacts: T,
					domainsPricing: k,
					domainsProtection: A,
					domainsRegister: P,
					domainsRegisterCheckout: S,
					domainsRegisterCheckoutToken: b,
					domainsRegisterSuccess: L,
					domainsTlds: R,
					domainsTransfer: H,
					domainsTransferZone: ae,
					registrar: D,
					registrarAccountsVerifyEmail: se,
					registrarDomainsVerifyEmail: ce,
					signup: Y,
					verifyEmail: z,
					zone: G
				},
				ye = {
					LEGACY_domains: N,
					LEGACY_domainsActionCenter: B,
					LEGACY_domainsDomain: O,
					LEGACY_domainsDomainConfiguration: M,
					LEGACY_domainsDomainContacts: F,
					LEGACY_domainsPricing: ee,
					LEGACY_domainsProtection: J,
					LEGACY_domainsRegister: re,
					LEGACY_domainsRegisterCheckout: Q,
					LEGACY_domainsRegisterCheckoutToken: U,
					LEGACY_domainsRegisterSuccess: V,
					LEGACY_domainsTlds: ne,
					LEGACY_domainsTransfer: ge,
					LEGACY_domainsTransferZone: de,
					LEGACY_verifyEmail: ue
				},
				Oe = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/selectors.ts": function($, E, t) {
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
					return m
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
				m = f => !1,
				s = f => m(f) && (0, e.oJ)((0, e.Zu)(f)),
				p = f => {
					const {
						hasTrademarkClaim: n,
						trademarkNoticeAgreement: a
					} = f.registrar.registrations;
					return n && !(a.accepted_date || a.id || a.not_after)
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function($, E, t) {
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

			function m(i) {
				for (var g = 1; g < arguments.length; g++) {
					var u = arguments[g] != null ? Object(arguments[g]) : {},
						d = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(u).filter(function(I) {
						return Object.getOwnPropertyDescriptor(u, I).enumerable
					})), d.forEach(function(I) {
						s(i, I, u[I])
					})
				}
				return i
			}

			function s(i, g, u) {
				return g = p(g), g in i ? Object.defineProperty(i, g, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = u, i
			}

			function p(i) {
				var g = f(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function f(i, g) {
				if (typeof i != "object" || i === null) return i;
				var u = i[Symbol.toPrimitive];
				if (u !== void 0) {
					var d = u.call(i, g || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}
			let n = function(i) {
				return i.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", i.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", i.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", i.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", i.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", i.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", i.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", i.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", i.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", i.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", i.RENEW_DOMAIN_COMPLETED = "domain renewal completed", i.RESTORE_DOMAIN_INIT = "click to open domain restore modal", i.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", i.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", i.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", i.RESTORE_DOMAIN_FAILURE = "domain restore failed", i.RESTORE_DOMAIN_COMPLETED = "domain restore completed", i.DOMAIN_DELETE_INIT = "click to begin domain delete", i.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", i.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", i.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", i.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", i.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", i.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", i.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", i.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", i.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", i.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", i.DOMAIN_MOVE_START_FLOW = "Start domain move flow", i.DOMAIN_MOVE_OPEN_DOCS = "Open domain move docs", i.DOMAIN_MOVE_CLOSE_FLOW = "Close domain move flow", i.DOMAIN_MOVE_PROGRESS_FLOW = "Progress domain move flow", i.DOMAIN_MOVE_SUBMIT = "Submit domain move", i.DOMAIN_MOVE_INITIATE_SUCCESS = "Domain move initiate success", i.DOMAIN_MOVE_INITIATE_ERROR = "Domain move initiate error", i.DOMAIN_MOVE_CANCEL = "Domain move cancel", i.DOMAIN_MOVE_CANCEL_SUCCESS = "Domain move cancel success", i.DOMAIN_MOVE_CANCEL_ERROR = "Domain move cancel error", i.ACTION_CENTER_NAVIGATE = "Navigate to actions center", i.ACTION_CENTER_DOMAIN_MOVE_DECISION = "Domain move decision applied", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS = "Domain move decision success", i.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR = "Domain move decision error", i
			}({});

			function a(i, g, u) {
				if (!(g == null ? void 0 : g.name)) return null;
				c().sendEvent(i, m({
					domain: {
						name: g.name,
						premium: (0, l.Uy)(g == null ? void 0 : g.premiumType),
						paymentExpiresAt: r()(g == null ? void 0 : g.paymentExpiresAt).format()
					},
					category: "registrar"
				}, u))
			}
		},
		"../react/pages/home/members/actions/advancedAuthzActions.ts": function($, E, t) {
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
					return g
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
				m = t("../react/utils/translator.tsx");
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
				const w = v;
				return {
					key: "com.cloudflare.edge.access.app." + w.id,
					name: w.name,
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
				const w = v,
					_ = a[w.type];
				return {
					key: "com.cloudflare.edge.access.identity-provider." + w.id,
					name: `${_||"Unknown Type"}${w.name?" - "+w.name:""}`,
					type: s.ACCESS_IDP
				}
			}
			const g = async (v, w, _) => w == s.WORKERS ? (await u(`/accounts/${v}/workers/scripts-search?name=${_}&perPage=10`)).body.result.map(T => ({
				id: T.id,
				name: T.service_name || T.script_name,
				environment: T.environment_name
			})).map(f) : w == s.ACCESS_APPS ? (await u(`/accounts/${v}/access/apps?name=${_}`)).body.result.map(n) : w == s.ACCESS_IDP ? (await u(`/accounts/${v}/access/identity_providers`)).body.result.map(i) : [];
			async function u(v) {
				try {
					return await (0, e.get)(v, {
						hideErrorAlert: !0
					})
				} catch (T) {
					var w, _;
					throw ((w = T.body) === null || w === void 0 ? void 0 : w.errors) ? T.body.errors[0].message : T.text ? T.text : ((_ = T.response) === null || _ === void 0 ? void 0 : _.statusText) ? T.response.statusText : "Unexpected error response"
				}
			}
			const d = async (v, w) => {
				const _ = w.split("."),
					T = _.pop(),
					k = _.join(".");
				let A;
				switch (k) {
					case "com.cloudflare.edge.worker.script":
						const P = (await u(`/accounts/${v}/workers/scripts-search/${T}`)).body.result;
						return f({
							id: P.id,
							name: P.service_name || P.script_name,
							environment: P.environment_name
						});
					case "com.cloudflare.edge.access.identity-provider":
						return A = await u(`/accounts/${v}/access/identity_providers/${T}`), i(A.body.result);
					case "com.cloudflare.edge.access.app":
						return A = await u(`/accounts/${v}/access/apps/${T}`), n(A.body.result)
				}
			}, I = {
				loading: !0,
				isDisabled: !0
			}, D = () => "production";

			function h(v) {
				const w = (0, l.vq)(v),
					[_, T] = (0, o.useState)(!0),
					[k, A] = (0, o.useState)(p.filter(P => w.find(S => S.meta.scopes === P.scopeKeyPrefix)).map(P => {
						const S = P.scopeKeyPrefix.startsWith("com.cloudflare.edge.access."),
							b = w.filter(L => L.meta.scopes === P.scopeKeyPrefix).find(L => !L.meta.visibility || L.meta.visibility !== "beta");
						return {
							value: P.value,
							label: (0, m.ZP)(P.label_i18n),
							state: S ? I : {
								loading: !1,
								isDisabled: !1
							},
							beta: !b
						}
					}));
				return (0, o.useEffect)(() => {
					(async () => {
						try {
							await g(v, s.ACCESS_APPS, ""), I.isDisabled = !1
						} catch (P) {
							P.startsWith("access.api.error.not_enabled") ? I.disableInfo = (0, m.ZP)("policy.granular_resources.type.access.not_enabled") : I.error = P
						}
						I.loading = !1, A([...k])
					})()
				}, []), (0, o.useEffect)(() => {
					const P = k.find(S => S.state.loading);
					T(!!P)
				}, [k]), {
					types: k,
					isLoading: _
				}
			}
		},
		"../react/pages/home/members/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Ey: function() {
					return f
				},
				F4: function() {
					return I
				},
				Go: function() {
					return g
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
					return w
				},
				Ti: function() {
					return k
				},
				Uw: function() {
					return h
				},
				Zl: function() {
					return D
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
				m = (0, e.BC)`${o}/add-policy/${"memberId"}`,
				s = (0, e.BC)`${o}/user-groups`,
				p = (0, e.BC)`${o}/user-groups/${"userGroupId"}`,
				f = "com.cloudflare.api.account",
				a = f + "." + "zone",
				i = a + ".",
				g = 100,
				u = 200,
				d = 5,
				I = 300,
				D = "INVITE_TOAST",
				h = "00000000000000000000000000000000",
				v = {
					account: r,
					members: o,
					groups: s,
					group: p,
					inviteMembers: c,
					editMember: l,
					addPolicy: m
				},
				w = {
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
					effect: w.allow,
					mode: "",
					zoneId: "",
					resourceGroupId: "",
					granularProduct: ""
				}
		},
		"../react/pages/home/members/sparrowEvents.ts": function($, E, t) {
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
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), g.forEach(function(u) {
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
				var a = m(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, a || "default");
					if (typeof g != "object") return g;
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
		"../react/pages/home/members/utils.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				AX: function() {
					return v
				},
				Co: function() {
					return D
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
					return g
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

			function c(A) {
				for (var P = 1; P < arguments.length; P++) {
					var S = arguments[P] != null ? Object(arguments[P]) : {},
						b = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && b.push.apply(b, Object.getOwnPropertySymbols(S).filter(function(L) {
						return Object.getOwnPropertyDescriptor(S, L).enumerable
					})), b.forEach(function(L) {
						l(A, L, S[L])
					})
				}
				return A
			}

			function l(A, P, S) {
				return P = m(P), P in A ? Object.defineProperty(A, P, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[P] = S, A
			}

			function m(A) {
				var P = s(A, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function s(A, P) {
				if (typeof A != "object" || A === null) return A;
				var S = A[Symbol.toPrimitive];
				if (S !== void 0) {
					var b = S.call(A, P || "default");
					if (typeof b != "object") return b;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(A)
			}
			const p = () => c({}, o.Ti),
				f = () => c({}, o.Lc, {
					scopes: [p()],
					emails: [],
					auto_accept: !1,
					permission_groups: []
				}),
				n = A => A.map(P => ({
					scope: {
						key: P,
						objects: [{
							key: "*"
						}]
					}
				})),
				a = (A, P, S) => {
					var b;
					let L = [],
						R = [];
					const H = [],
						ae = [];
					A.scopes.forEach(Y => {
						if (Y.mode === o.Sw.all) S ? L.push({
							id: S
						}) : L.push({
							scope: {
								key: `com.cloudflare.api.account.${P}`,
								objects: [{
									key: "*"
								}]
							}
						});
						else if (Y.mode === o.Sw.domain_group) {
							const G = {
								id: Y.resourceGroupId
							};
							Y.effect === o.Sz.allow ? L.push(G) : R.push(G)
						} else if (Y.mode === o.Sw.zone) {
							const G = `${o.Rl}${Y.zoneId}`;
							Y.effect === o.Sz.allow ? H.push(G) : ae.push(G)
						} else if (Y.mode === o.Sw.granular && Y.granularResourceKey) {
							var z;
							const G = Y.granularProduct,
								B = `${(z=r.s_.find(O=>O.value===G))===null||z===void 0?void 0:z.scopeSubsetOfPrefix}.${P}`;
							L.push({
								scope: {
									key: `${Y.granularResourceKey}`,
									subset_of: [{
										key: `${B}`
									}],
									objects: [{
										key: "*"
									}]
								}
							})
						}
					}), H.length && (L = L.concat(n(H))), ae.length && (R = R.concat(n(ae)));
					const se = (b = A.permission_groups) === null || b === void 0 ? void 0 : b.map(Y => ({
							id: Y
						})),
						ce = [];
					return ce.push({
						access: o.Sz.allow,
						permission_groups: se,
						resource_groups: L
					}), R.length && ce.push({
						access: o.Sz.deny,
						permission_groups: se,
						resource_groups: R
					}), ce
				},
				i = A => A.map(P => {
					var S;
					return {
						access: P.access,
						permission_groups: P.permission_groups.map(b => ({
							id: b.id
						})),
						resource_groups: (S = P.resource_groups) === null || S === void 0 ? void 0 : S.map(b => ({
							scope: {
								key: b.scope.key,
								objects: b.scope.objects
							},
							id: b.id
						}))
					}
				}),
				g = (A, P, S, b) => {
					const L = A.auto_accept;
					let R = [];
					return R = R.concat(a(A, P, S)), b && (R = R.concat(i(b))), {
						auto_accept: L,
						status: L ? "accepted" : "pending",
						policies: R
					}
				},
				u = A => {
					const P = A.split(".");
					return P[P.length - 1]
				},
				d = A => {
					var P, S;
					const b = A == null ? void 0 : A.access;
					let L = [],
						R = A == null || (P = A.resource_groups) === null || P === void 0 ? void 0 : P.map(H => {
							var ae;
							const se = I(H);
							if ((H == null || (ae = H.meta) === null || ae === void 0 ? void 0 : ae.editable) === "false") return {
								effect: b,
								mode: o.Sw.all,
								accountId: u(H.id)
							};
							if (se) {
								var ce;
								return {
									effect: b,
									mode: o.Sw.granular,
									granularProduct: se.value,
									granularResourceKey: H == null || (ce = H.scope) === null || ce === void 0 ? void 0 : ce.key
								}
							} else if (!H.name) H.scope.key.startsWith(o.Rl) ? L.push({
								key: H.scope.key
							}) : L = L.concat(H.scope.objects);
							else return {
								effect: b,
								mode: o.Sw.domain_group,
								resourceGroupId: u(H.id)
							}
						}).filter(H => H);
					if ((S = L) === null || S === void 0 ? void 0 : S.length) {
						let H = L.map(ae => {
							const se = u(ae.key);
							return {
								effect: b,
								mode: o.Sw.zone,
								zoneId: se
							}
						});
						R = R.length ? H.concat(R) : H
					}
					return R
				},
				I = A => {
					var P, S, b, L;
					const R = A == null || (P = A.scope) === null || P === void 0 ? void 0 : P.key.split(".").slice(0, -1).join("."),
						H = A == null || (S = A.scope) === null || S === void 0 || (b = S.subset_of) === null || b === void 0 || (L = b[0]) === null || L === void 0 ? void 0 : L.key.split(".").slice(0, -1).join(".");
					return r.s_.find(ae => ae.scopeKeyPrefix === R && ae.scopeSubsetOfPrefix === H)
				},
				D = A => {
					if (!(A == null ? void 0 : A.length)) return [];
					const P = [];
					return A.forEach(S => {
						var b;
						(b = S.resource_groups) === null || b === void 0 || b.forEach(L => {
							var R, H;
							((R = L.scope) === null || R === void 0 || (H = R.key) === null || H === void 0 ? void 0 : H.startsWith(o.Rl)) && P.push(u(L.scope.key))
						})
					}), P
				},
				h = A => {
					if (!(A == null ? void 0 : A.length)) return [];
					const P = [];
					return A.forEach(S => {
						var b;
						(b = S.resource_groups) === null || b === void 0 || b.forEach(L => {
							var R, H;
							if (!((R = L.scope) === null || R === void 0 || (H = R.key) === null || H === void 0 ? void 0 : H.startsWith(o.Rl))) {
								var ae;
								const ce = (ae = L.scope) === null || ae === void 0 ? void 0 : ae.objects;
								for (let Y = 0; Y < (ce == null ? void 0 : ce.length) && Y < o.r6; Y++) {
									var se;
									((se = ce[Y].key) === null || se === void 0 ? void 0 : se.startsWith(o.Rl)) && P.push(u(ce[Y].key))
								}
							}
						})
					}), P
				},
				v = A => {
					var P;
					if (!(A == null ? void 0 : A.length)) return null;
					const S = (P = A[0]) === null || P === void 0 ? void 0 : P.permission_groups.map(H => H.id);
					let b, L;
					A == null || A.forEach(H => {
						H.access === o.Sz.allow && (b = H), H.access === o.Sz.deny && (L = H)
					});
					let R = [];
					return b && (R = d(b)), L && (R = R.concat(d(L))), {
						permission_groups: S,
						scopes: R
					}
				},
				w = "permission-groups-",
				_ = new Map,
				T = A => {
					if (!A) return [];
					const P = _.get(A);
					if (P) return P;
					const S = e.E.get(`${w}${A}`);
					return _.set(A, S), S
				},
				k = (A, P) => {
					const S = [];
					for (let b = 0; b < sessionStorage.length; b++) {
						const L = sessionStorage.key(b);
						(L == null ? void 0 : L.startsWith(w)) && S.push(L)
					}
					return S.length >= 5 && e.E.remove(S[0]), e.E.set(`${w}${A}`, P)
				}
		},
		"../react/pages/home/rulesets/account-ruleset-builder/labels.tsx": function($, E, t) {
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
		"../react/pages/home/rulesets/ddos/tracking.ts": function($, E, t) {
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
		"../react/pages/hyperdrive/tracking.ts": function($, E, t) {
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
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						u = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), u.forEach(function(d) {
						c(a, d, g[d])
					})
				}
				return a
			}

			function c(a, i, g) {
				return i = l(i), i in a ? Object.defineProperty(a, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[i] = g, a
			}

			function l(a) {
				var i = m(a, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(a, i) {
				if (typeof a != "object" || a === null) return a;
				var g = a[Symbol.toPrimitive];
				if (g !== void 0) {
					var u = g.call(a, i || "default");
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
		"../react/pages/images/routes.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				KJ: function() {
					return k
				},
				_m: function() {
					return D
				},
				imagesEndpoints: function() {
					return ye
				},
				vQ: function() {
					return A
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
			const m = (0, e.BC)`/${"accountId"}/images`,
				s = (0, e.BC)`${m}/images`,
				p = (0, e.BC)`${m}/variants`,
				f = (0, e.BC)`${m}/keys`,
				n = (0, e.BC)`${m}/bundle-checkout-success`,
				a = (0, e.BC)`${s}/${"imageId"}`,
				i = (0, e.BC)`${s}/detail`,
				g = (0, e.BC)`${s}/edit`,
				u = (0, e.BC)`${p}/create`,
				d = (0, e.BC)`${p}/edit/${"variantId"}`,
				I = (0, e.BC)`/${"accountId"}/billing/subscriptions`,
				D = (0, e.BC)`${m}/sourcing-kit`,
				h = (0, e.BC)`${m}/delivery-zones`,
				v = (0, e.BC)`${h}/${"zoneId"}/settings`,
				w = (0, e.BC)`${m}/plans`,
				_ = (0, e.BC)`${m}/manage-plan`,
				T = {
					addSite: (0, e.BC)`/${"accountId"}/add-site`,
					imageResizingSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/image_resizing`,
					transformationsSettings: (0, e.BC)`https://api.cloudflare.com/client/v4/zones/${"zoneId"}/settings/transformations`
				},
				k = {
					root: m,
					images: s,
					variants: p,
					keys: f,
					legacyImageDetailPage: a,
					imageDetailPage: i,
					imageEditPage: g,
					bundleCheckoutSuccess: n,
					variantCreatePage: u,
					variantEditPage: d,
					sourcingKit: D,
					subscriptions: I,
					deliveryZones: h,
					deliveryZoneSettings: v,
					plansPage: w,
					managePlan: _
				},
				A = r({}, k, {
					signUp: (0, e.BC)`/sign-up/images`,
					externalRoutes: T
				}),
				P = (0, e.BC)`/accounts/${"accountId"}`,
				S = (0, e.BC)`${P}/images/v2`,
				b = (0, e.BC)`/zones/${"zoneId"}`,
				L = (0, e.BC)`${S}/sourcingkit`,
				R = (0, e.BC)`${L}/migrations`,
				H = (0, e.BC)`${L}/migrations/${"migrationId"}`,
				ae = (0, e.BC)`${L}/migrations/${"migrationId"}/logs`,
				se = (0, e.BC)`${L}/migrations/${"migrationId"}/lifecycle/start`,
				ce = (0, e.BC)`${L}/migrations/${"migrationId"}/lifecycle/abort`,
				Y = (0, e.BC)`${L}/migrations/${"migrationId"}/lifecycle`,
				z = (0, e.BC)`${L}/sources`,
				G = (0, e.BC)`${L}/sources/${"sourceId"}`,
				N = (0, e.BC)`${L}/sources/${"sourceId"}/connectivity`,
				B = (0, e.BC)`${L}/sources/connectivity_precheck`,
				O = (0, e.BC)`/zones?account.id=${"accountId"}`,
				M = {
					migrationList: R,
					migration: H,
					migrationLogs: ae,
					sourceList: z,
					migrationStart: se,
					migrationAbort: ce,
					migrationProgress: Y,
					source: G,
					sourceConnectivityCheck: N,
					sourceConnectivityPreCheck: B
				},
				F = (0, e.BC)`/billing/upgrade-subscription`,
				ee = (0, e.BC)`${P}/settings/transformations`,
				J = (0, e.BC)`${b}/settings/transformations`,
				re = (0, e.BC)`${b}/settings/transformations_allowed_origins`,
				Q = (0, e.BC)`${b}/settings/transformations_c2pa`,
				U = (0, e.BC)`${P}/settings/ut-billing`,
				V = (0, e.BC)`${b}`,
				ne = (0, e.BC)`${b}/entitlements`,
				ge = (0, e.BC)`${b}/settings`,
				de = (0, e.BC)`${b}/flags`,
				ue = (0, e.BC)`${b}/subscription`,
				ye = {
					sourcingKitEndpoints: M,
					deliveryZonesEndpoints: {
						transformationsConfigList: ee,
						transformationsZoneConfig: J,
						allowedOriginsZoneConfig: re,
						preserveContentCredentialsZoneConfig: Q,
						upgradeSubscription: F,
						utBillingConfig: U
					},
					zones: {
						zones: O,
						zoneDetail: V,
						zoneSettings: ge,
						zoneEntitlements: ne,
						zoneFlags: de,
						zoneSubscription: ue
					}
				}
		},
		"../react/pages/images/selectors.ts": function($, E, t) {
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
					return m
				},
				ib: function() {
					return d
				},
				lW: function() {
					return D
				},
				pT: function() {
					return a
				},
				po: function() {
					return g
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/common/selectors/zoneSelectors.ts");
			const c = "sourcing_kit_enabled",
				l = "sourcing_kit_waitlist",
				m = "images",
				s = "unified_images_enabled",
				p = "c2pa_polish",
				f = "CloudflareImages",
				n = h => !!(0, r.BF)(h, "images.transformations_enabled"),
				a = h => Boolean((0, r.BF)(h, "images.enabled")),
				i = h => {
					const v = (0, r.BF)(h, "images.storage");
					return typeof v == "number" && v > 0
				},
				g = h => Boolean((0, r.BF)(h, "contract.customer_enabled")),
				u = h => Boolean((0, e.oI)(h, m, c)),
				d = h => Boolean((0, o.Le)(h, f, c)),
				I = h => Boolean(getAccountFlipperFlag(h, f, s)),
				D = h => Boolean((0, o.Le)(h, f, p))
		},
		"../react/pages/internal-dns/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				jx: function() {
					return e
				},
				xk: function() {
					return l
				},
				xo: function() {
					return m
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
				m = "https://cloudflare.sjc1.qualtrics.com/jfe/form/SV_3V6auNfVdQDWthk"
		},
		"../react/pages/magic/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
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
					return d
				},
				Nz: function() {
					return p
				},
				UQ: function() {
					return D
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
					return m
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
				m = v => [{
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
				g = 64,
				u = 1476,
				d = "mid",
				I = "reply",
				D = v => [{
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
		"../react/pages/magic/network-monitoring/constants.ts": function($, E, t) {
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
		"../react/pages/magic/overview/tracking.ts": function($, E, t) {
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
		"../react/pages/magic/packet-captures/constants.ts": function($, E, t) {
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
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function($, E, t) {
			"use strict";
			t.d(E, {
				gb: function() {
					return n
				},
				iP: function() {
					return A
				},
				xL: function() {
					return h
				},
				rD: function() {
					return S
				},
				oT: function() {
					return u
				},
				i2: function() {
					return b
				},
				x1: function() {
					return m
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
					return w
				},
				PJ: function() {
					return P
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
			const m = () => r().createElement(s, null, r().createElement("svg", {
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
					theme: L
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
					theme: L
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
					theme: L
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
				g = (0, o.createComponent)(({
					theme: L
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
					theme: L
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
				I = () => r().createElement(D, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				D = (0, o.createComponent)(({
					theme: L
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
					theme: L
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
				w = () => r().createElement(_, null, r().createElement("svg", {
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
					theme: L
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
					theme: L
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
				S = () => r().createElement("svg", {
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
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				A2: function() {
					return s
				},
				He: function() {
					return l
				},
				N$: function() {
					return m
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
				m = p => [{
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
		"../react/pages/page-rules/tracking.ts": function($, E, t) {
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
			const c = (l, m) => r().sendEvent(l, {
				template_name: m
			})
		},
		"../react/pages/pages/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				A: function() {
					return I
				},
				C1: function() {
					return f
				},
				GF: function() {
					return S
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
					return z
				},
				QF: function() {
					return ce
				},
				QV: function() {
					return T
				},
				Sx: function() {
					return w
				},
				Ub: function() {
					return se
				},
				X3: function() {
					return a
				},
				bA: function() {
					return L
				},
				eO: function() {
					return i
				},
				fH: function() {
					return u
				},
				fQ: function() {
					return D
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
					return g
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
				s = "production",
				p = 2e3,
				f = 100,
				n = 350,
				a = 1e7,
				i = ["Success:", "Error:", "Failed:"],
				g = 10,
				u = "_headers",
				d = "_redirects",
				I = "_routes.json",
				D = "_worker.js",
				h = "do-a-barrel-roll",
				v = [u, d, I, D],
				w = 1024 * 1024 * 25,
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
				A = 75e3,
				P = 2e5,
				S = 15e4,
				b = 3e3,
				L = 2250,
				R = "workers",
				H = "cloudflare_pages_build_caching",
				ae = 2;
			let se = function(G) {
				return G[G.REPO_NOT_AUTHORIZED_FOR_INSTALLATION = 8000004] = "REPO_NOT_AUTHORIZED_FOR_INSTALLATION", G[G.INSTALLATION_NOT_FOUND = 8000008] = "INSTALLATION_NOT_FOUND", G[G.INSTALLATION_UNAUTHORIZED = 8000010] = "INSTALLATION_UNAUTHORIZED", G[G.INSTALLATION_LINK_NOT_FOUND = 8000011] = "INSTALLATION_LINK_NOT_FOUND", G[G.REPO_NOT_FOUND = 8000012] = "REPO_NOT_FOUND", G[G.INSTALLATION_SUSPENDED = 8000084] = "INSTALLATION_SUSPENDED", G
			}({});
			const ce = 1,
				Y = 2,
				z = 2
		},
		"../react/pages/pages/routes.ts": function($, E, t) {
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
				c = m => `${m.subdomain}.pages.dev`,
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
		"../react/pages/pipelines/tracking.ts": function($, E, t) {
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
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), g.forEach(function(u) {
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
				var a = m(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, a || "default");
					if (typeof g != "object") return g;
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
		"../react/pages/profile/tracking.ts": function($, E, t) {
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
		"../react/pages/r2/routes.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Hv: function() {
					return o
				},
				Jg: function() {
					return m
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
				m = (s, p, f) => `${l(s,p)}/${f}`
		},
		"../react/pages/secrets-store/resources/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Hf: function() {
					return k
				},
				JJ: function() {
					return m
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
					return D
				},
				Q2: function() {
					return P
				},
				QF: function() {
					return I
				},
				RR: function() {
					return v
				},
				T_: function() {
					return A
				},
				Xm: function() {
					return s
				},
				Zl: function() {
					return S
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
					return g
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
					return L
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
				m = 1,
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
					page: m,
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
				g = function(R) {
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
			const D = "default_secrets_store";
			let h = function(R) {
				return R.CREATE = "create", R.EDIT = "edit", R.DUPLICATE = "duplicate", R.VIEW = "view", R
			}({});
			const v = "delete_operation",
				w = /^[a-zA-Z0-9_-]+$/,
				_ = (R, H, ae, se, ce) => r.Ry().shape({
					name: r.Z_().required(R("secrets_store.form.create.errors.name.required")).matches(w, R("secrets_store.form.create.errors.name.invalid_characters")).max(255, R("secrets_store.form.create.errors.name.max")),
					value: r.Z_().test("required-if-creating", R("secrets_store.form.create.errors.value.required"), Y => H || ce ? !!Y : !0).max(1024, R("secrets_store.form.create.errors.value.max")),
					comment: r.Z_().max(1024, R("secrets_store.form.create.errors.comment.max")),
					scopes: r.Z_().required().oneOf(Object.values(I), R("secrets_store.form.create.errors.scopes.invalid")),
					labels: r.IX().of(r.Z_())
				}),
				T = (R, H, ae, se, ce) => r.Ry().shape({
					secrets: r.IX().of(_(R, H, ae, se, ce))
				}),
				k = {
					name: "",
					value: "",
					scopes: I.WORKERS,
					comment: ""
				},
				A = "secrets-store.store.secret";
			let P = function(R) {
				return R.DUPLICATE = "duplicate", R.DEPLOY = "deploy", R
			}({});
			const S = {
				code: 1002,
				message: "secret_store_not_enabled"
			};
			let b = function(R) {
					return R.CREATE_SECRET = "create secrets store secret", R.EDIT_SECRET = "edit secrets store secret", R.DUPLICATE_SECRET = "duplicate secrets store secret", R.DELETE_SECRET = "delete secrets store secret", R.BIND_SECRET = "open secrets store binding drawer", R
				}({}),
				L = function(R) {
					return R.SECRETS_STORE = "secrets store main", R.WORKERS_BINDING = "workers binding drawer", R
				}({})
		},
		"../react/pages/security-center/BlockedContent/constants.ts": function($, E, t) {
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

			function o(g) {
				for (var u = 1; u < arguments.length; u++) {
					var d = arguments[u] != null ? Object(arguments[u]) : {},
						I = Object.keys(d);
					typeof Object.getOwnPropertySymbols == "function" && I.push.apply(I, Object.getOwnPropertySymbols(d).filter(function(D) {
						return Object.getOwnPropertyDescriptor(d, D).enumerable
					})), I.forEach(function(D) {
						c(g, D, d[D])
					})
				}
				return g
			}

			function c(g, u, d) {
				return u = l(u), u in g ? Object.defineProperty(g, u, {
					value: d,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[u] = d, g
			}

			function l(g) {
				var u = m(g, "string");
				return typeof u == "symbol" ? u : String(u)
			}

			function m(g, u) {
				if (typeof g != "object" || g === null) return g;
				var d = g[Symbol.toPrimitive];
				if (d !== void 0) {
					var I = d.call(g, u || "default");
					if (typeof I != "object") return I;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (u === "string" ? String : Number)(g)
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
					filters: Object.values(e.GH).reduce((g, u) => o({}, g, {
						[u]: u
					}), {})
				};
			let i = function(g) {
				return g.COPY_URL = "copy blocked content url", g.REQUEST_REVIEW = "request blocked content review", g.ADD_FILTER = "Add filter", g.REMOVE_FILTER = "Remove filter", g
			}({})
		},
		"../react/pages/security-center/BlockedContent/types.ts": function($, E, t) {
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
			let e = function(m) {
					return m.Pending = "pending", m.Active = "active", m
				}({}),
				r = function(m) {
					return m.Active = "active", m.InReview = "in_review", m.Pending = "pending", m.Canceled = "canceled", m
				}({}),
				o = function(m) {
					return m.Domain = "domain", m.Status = "status", m.BlockType = "blockType", m
				}({}),
				c = function(m) {
					return m.EnforcementDate = "enforcementDate", m.BlockType = "blockType", m.Hostname = "hostname", m.Status = "status", m
				}({}),
				l = function(m) {
					return m.Removed = "removed", m.Misclassified = "misclassified", m
				}({})
		},
		"../react/pages/security-center/tracking.ts": function($, E, t) {
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
		"../react/pages/security/analytics/resources/labels.ts": function($, E, t) {
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
		"../react/pages/security/analytics/security-analytics/resources/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
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
					return f
				},
				Ss: function() {
					return a
				},
				dR: function() {
					return l
				},
				gW: function() {
					return m
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
				m = {
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
			let g = function(u) {
				return u.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', u.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', u.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', u.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', u.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', u.ADD_SUSPICIOUS_ACTIVITY_FILTER = "add analytics suspicious activities filter", u.REMOVE_SUSPICIOUS_ACTIVITY_FILTER = "remove analytics suspicious activities filter", u.OPEN_SIDE_DRAWER = "open security analytics side drawer", u.CLOSE_SIDE_DRAWER = "close security analytics side drawer", u
			}({})
		},
		"../react/pages/security/api-shield/tracking.ts": function($, E, t) {
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
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), g.forEach(function(u) {
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
				var a = m(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, a || "default");
					if (typeof g != "object") return g;
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
					productName: g,
					additionalData: u
				}) => {
					r().sendEvent(n, o({
						category: a,
						product: i,
						productName: g
					}, u || {}))
				}
		},
		"../react/pages/security/bots/tracking.ts": function($, E, t) {
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
		"../react/pages/security/overview/resources/constants.ts": function($, E, t) {
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
					return m
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
				m = [{
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
		"../react/pages/security/page-shield/resources/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				CP: function() {
					return S
				},
				FV: function() {
					return Y
				},
				KH: function() {
					return A
				},
				Ks: function() {
					return B
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
					return ce
				},
				Oq: function() {
					return P
				},
				QM: function() {
					return _
				},
				SI: function() {
					return G
				},
				SJ: function() {
					return D
				},
				Sk: function() {
					return R
				},
				Ti: function() {
					return O
				},
				Uc: function() {
					return T
				},
				Uq: function() {
					return p
				},
				Uv: function() {
					return se
				},
				V0: function() {
					return f
				},
				VT: function() {
					return u
				},
				YC: function() {
					return H
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
					return z
				},
				u8: function() {
					return g
				},
				v5: function() {
					return n
				},
				xg: function() {
					return ae
				},
				yd: function() {
					return w
				}
			});
			var e = t("../../../common/component/component-filter-bar/src/index.js"),
				r = t("../react/common/components/analytics/AnalyticsReport/constants.ts"),
				o = t("../react/pages/security/page-shield/resources/types.ts");

			function c(M) {
				for (var F = 1; F < arguments.length; F++) {
					var ee = arguments[F] != null ? Object(arguments[F]) : {},
						J = Object.keys(ee);
					typeof Object.getOwnPropertySymbols == "function" && J.push.apply(J, Object.getOwnPropertySymbols(ee).filter(function(re) {
						return Object.getOwnPropertyDescriptor(ee, re).enumerable
					})), J.forEach(function(re) {
						l(M, re, ee[re])
					})
				}
				return M
			}

			function l(M, F, ee) {
				return F = m(F), F in M ? Object.defineProperty(M, F, {
					value: ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[F] = ee, M
			}

			function m(M) {
				var F = s(M, "string");
				return typeof F == "symbol" ? F : String(F)
			}

			function s(M, F) {
				if (typeof M != "object" || M === null) return M;
				var ee = M[Symbol.toPrimitive];
				if (ee !== void 0) {
					var J = ee.call(M, F || "default");
					if (typeof J != "object") return J;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (F === "string" ? String : Number)(M)
			}
			const p = 50,
				f = 9,
				n = "copy script url page shield",
				a = "disable page shield",
				i = "click documentation link",
				g = "enable page shield",
				u = "filter search page shield",
				d = "filter search view all page shield",
				I = "hover score tooltip page shield",
				D = "open alert modal page shield",
				h = "change pagination page shield",
				v = "close script modal page shield",
				w = "open script modal page shield",
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
				S = c({}, P, {
					urls: c({}, P.urls, {
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
			let L = function(M) {
				return M.SECURITY_THREATS = "Security Threats", M.C2_BOTNET = "C2 & Botnet", M.CRYPTOMINING = "Cryptomining", M.MALWARE = "Malware", M.PHISHING = "Phishing", M.SPYWARE = "Spyware", M.DGA_DOMAINS = "DGA Domains", M.TYPOSQUATTING_IMPERSONATION = "Typosquatting & Impersonation", M
			}({});
			const R = "https://www.cloudflare.com/plans/enterprise/contact/",
				H = {
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
				ae = {
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
				se = {
					[o.$g.CryptominingScore]: "firewall.page_shield.malicious.cryptomining.label",
					[o.$g.MalwareScore]: "firewall.page_shield.malicious.malware.label",
					[o.$g.MagecartScore]: "firewall.page_shield.malicious.magecart.label",
					[o.R$.ObfuscationScore]: "firewall.page_shield.malicious.obfuscation_score.label",
					[o.R$.DataflowScore]: "firewall.page_shield.malicious.dataflow_score.label"
				},
				ce = {
					[o.k2.DomainMalicious]: "firewall.page_shield.malicious.domain_reported_malicious.label",
					[o.k2.UrlMalicious]: "firewall.page_shield.malicious.url_reported_malicious.label"
				},
				Y = {
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
				z = {
					lax: "firewall.page_shield.same_site.lax",
					strict: "firewall.page_shield.same_site.strict",
					none: "firewall.page_shield.same_site.none"
				},
				G = {
					first_party: "firewall.page_shield.cookie.type.first_party",
					unknown: "firewall.page_shield.cookie.type.unknown"
				},
				N = {
					[o.Wq.SCRIPT_MONITOR]: "firewall.page_shield.script_details",
					[o.Wq.CONNECTION_MONITOR]: "firewall.page_shield.connection_details",
					[o.Wq.COOKIE_MONITOR]: "firewall.page_shield.cookie_details"
				},
				B = {
					[o.Wq.SCRIPT_MONITOR]: "script_monitor.description",
					[o.Wq.CONNECTION_MONITOR]: "connection_monitor.description",
					[o.Wq.COOKIE_MONITOR]: "cookie_monitor.description"
				},
				O = {
					[o.Wq.SCRIPT_MONITOR]: "page_shield.policies.form.script",
					[o.Wq.CONNECTION_MONITOR]: "page_shield.policies.form.connections",
					[o.Wq.COOKIE_MONITOR]: "page_shield.policies.form.cookie"
				}
		},
		"../react/pages/security/page-shield/resources/index.ts": function($, E, t) {
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
					return d.Xe
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
					return d.k2
				},
				$g: function() {
					return d.$g
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
					return d.I1
				},
				Wq: function() {
					return d.Wq
				},
				jf: function() {
					return d.jf
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
					return d.R$
				},
				Sk: function() {
					return c.Sk
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
					return f
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
					return B
				},
				SQ: function() {
					return se
				},
				C0: function() {
					return ce
				},
				av: function() {
					return h
				},
				W3: function() {
					return I
				},
				WO: function() {
					return T
				},
				Dk: function() {
					return P
				},
				we: function() {
					return b
				},
				Yt: function() {
					return H
				},
				ex: function() {
					return R
				},
				E1: function() {
					return L
				},
				dm: function() {
					return w
				},
				oK: function() {
					return k
				},
				qZ: function() {
					return ae
				},
				_4: function() {
					return Y
				},
				qo: function() {
					return z
				},
				CB: function() {
					return m
				}
			});
			var e = t("../react/app/redux/makeAction.js"),
				r = t("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				o = t.n(r),
				c = t("../react/pages/security/page-shield/resources/constants.ts");
			const l = (0, e.ZP)("pageShieldConfig", "get", "/zones/(zoneId)/page_shield").on("success", O => (o().sendEvent(c.FV.VIEW_PAGE_SHIELD_SETTINGS, {
					category: "user journey",
					product: "Page shield"
				}), O)),
				m = (0, e.ZP)("pageShieldConfig", "put", "/zones/(zoneId)/page_shield").on("success", O => (o().sendEvent(c.FV.CONFIGURE_PAGE_SHIELD, {
					category: "user journey",
					product: "Page shield"
				}), O)),
				s = (0, e.ZP)("pageShieldScripts", "get", "/zones/(zoneId)/page_shield/scripts").on("success", O => (o().sendEvent(c.FV.VIEW_DETECTED_SCRIPTS, {
					category: "user journey",
					product: "Page shield"
				}), O)),
				p = (0, e.ZP)("pageShieldScript", "get", "/zones/(zoneId)/page_shield/scripts/(scriptId)"),
				f = (0, e.ZP)("pageShieldConnections", "get", "/zones/(zoneId)/page_shield/connections").on("success", O => (o().sendEvent(c.FV.VIEW_DETECTED_CONNECTIONS, {
					category: "user journey",
					product: "Page shield"
				}), O)),
				n = (0, e.ZP)("pageShieldConnection", "get", "/zones/(zoneId)/page_shield/connections/(connectionId)"),
				a = (0, e.ZP)("pageShieldCookies", "get", "/zones/(zoneId)/page_shield/cookies").on("success", O => (o().sendEvent(c.FV.VIEW_DETECTED_COOKIES, {
					category: "user journey",
					product: "Page shield"
				}), O)),
				i = (0, e.ZP)("pageShieldMonitorDomainDetails", "get", "/accounts/(accountId)/intel/domain?domain=(urlID)"),
				g = (0, e.ZP)("pageShieldMonitorWhoIsRecord", "get", "/accounts/(accountId)/intel/whois?domain=(urlID)");
			var u = t("../react/app/redux/normalizer.js"),
				d = t("../react/pages/security/page-shield/resources/types.ts");
			const I = O => O.pageShield.configuration,
				D = O => {
					var M;
					return (M = O.pageShield.configuration.data) === null || M === void 0 ? void 0 : M.enabled
				},
				h = O => {
					var M;
					return (M = I(O)) === null || M === void 0 ? void 0 : M.data
				},
				v = O => O.pageShield.scripts,
				w = O => O.pageShield.script,
				_ = O => O.pageShield.connections,
				T = O => O.pageShield.connection,
				k = (0, u.P1)("pageShieldScripts", v),
				A = (0, u.P1)("pageShieldScript", w),
				P = (0, u.P1)("pageShieldConnections", _),
				S = (0, u.P1)("pageShieldConnection", T),
				b = (O, M) => O === d.Wq.SCRIPT_MONITOR ? k(M) || [] : P(M) || [],
				L = (O, M) => O === d.Wq.SCRIPT_MONITOR ? v(M) || [] : _(M) || [],
				R = (O, M) => O === d.Wq.SCRIPT_MONITOR ? A(M) : S(M),
				H = O => O.pageShield.domainIntel,
				ae = O => O.pageShield.whoIsRecord,
				se = (O, M, F) => {
					var ee;
					const J = Object.values(F).map(re => ({
						key: re,
						label: c.Uv[re],
						score: O[re]
					})).filter(re => re.score !== void 0 && re.score <= M);
					return M === c.V0 && J.length === 0 && ((ee = O.js_integrity_score) !== null && ee !== void 0 ? ee : 100) <= M && J.push({
						key: null,
						label: "script_monitor.malicious",
						score: 0
					}), J
				},
				ce = (O, M) => Object.values(M).filter(F => O[F] === !0).map(F => c.OV[F]),
				Y = O => O === !1 ? "firewall.page_shield.malicious_content.not_present" : "firewall.page_shield.malicious_content.not_available",
				z = (O, M) => O[d.$g.MagecartScore] !== void 0 && O[d.$g.MagecartScore] <= M || O[d.$g.MalwareScore] !== void 0 && O[d.$g.MalwareScore] <= M || O[d.$g.CryptominingScore] !== void 0 && O[d.$g.CryptominingScore] <= M || O.js_integrity_score !== void 0 && O.js_integrity_score <= M,
				G = ["cdn.jsdelivr.net", "unpkg.com"],
				N = [/^((?!(@)).)*$/, /(?<!(\/))@[a-zA-Z]+(?=\/|$)/, /@\^[0-9]+(\.[0-9]+){0,2}(?=\/|$)/, /@[0-9]+(\.[0-9]+)?(?=\/|$)/],
				B = O => {
					if (O.includes("@latest")) {
						const F = O.split("@latest");
						if (F.length != 2) return;
						const ee = F[0].length,
							J = ee + "@latest".length;
						return [ee, J]
					}
					if (!!G.some(F => O.includes(F)))
						for (const F of N) {
							const ee = O.match(F);
							if (!ee) continue;
							const J = ee.index;
							if (J === 0) return null;
							const re = J + ee[0].length;
							return [J, re]
						}
				}
		},
		"../react/pages/security/page-shield/resources/types.ts": function($, E, t) {
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
					return m
				},
				jf: function() {
					return s
				},
				k2: function() {
					return a
				}
			});

			function e(i) {
				for (var g = 1; g < arguments.length; g++) {
					var u = arguments[g] != null ? Object(arguments[g]) : {},
						d = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(u).filter(function(I) {
						return Object.getOwnPropertyDescriptor(u, I).enumerable
					})), d.forEach(function(I) {
						r(i, I, u[I])
					})
				}
				return i
			}

			function r(i, g, u) {
				return g = o(g), g in i ? Object.defineProperty(i, g, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = u, i
			}

			function o(i) {
				var g = c(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function c(i, g) {
				if (typeof i != "object" || i === null) return i;
				var u = i[Symbol.toPrimitive];
				if (u !== void 0) {
					var d = u.call(i, g || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}
			let l = function(i) {
				return i.BASE_URI = "base-uri", i.CHILD = "child-src", i.CONNECT = "connect-src", i.DEFAULT = "default-src", i.FONT = "font-src", i.FORM_ACTION = "form-action", i.FRAME = "frame-src", i.FRAME_ANCESTORS = "frame-ancestors", i.IMAGE = "img-src", i.MANIFEST = "manifest-src", i.MEDIA = "media-src", i.OBJECT = "object-src", i.SCRIPT = "script-src", i.SCRIPT_ELEM = "script-src-elem", i.STYLE = "style-src", i.STYLE_ELEM = "style-src-elem", i.WORKER = "worker-src", i.UPGRADE_INSECURE_REQUESTS = "upgrade-insecure-requests", i
			}({});
			const m = e({}, l, {
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
		"../react/pages/security/resources/constants.tsx": function($, E, t) {
			"use strict";
			t.d(E, {
				_C: function() {
					return u
				},
				_R: function() {
					return d
				},
				dY: function() {
					return D
				},
				fy: function() {
					return w
				},
				ji: function() {
					return g
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
				m = t("../react/pages/security/resources/types.ts"),
				s = t("../react/pages/home/rulesets/account-ruleset-builder/labels.tsx"),
				p = t("../node_modules/@cloudflare/elements/es/index.js");

			function f(k) {
				for (var A = 1; A < arguments.length; A++) {
					var P = arguments[A] != null ? Object(arguments[A]) : {},
						S = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && S.push.apply(S, Object.getOwnPropertySymbols(P).filter(function(b) {
						return Object.getOwnPropertyDescriptor(P, b).enumerable
					})), S.forEach(function(b) {
						n(k, b, P[b])
					})
				}
				return k
			}

			function n(k, A, P) {
				return A = a(A), A in k ? Object.defineProperty(k, A, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[A] = P, k
			}

			function a(k) {
				var A = i(k, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function i(k, A) {
				if (typeof k != "object" || k === null) return k;
				var P = k[Symbol.toPrimitive];
				if (P !== void 0) {
					var S = P.call(k, A || "default");
					if (typeof S != "object") return S;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(k)
			}
			const g = 10;
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
				D = [{
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
					[m.X.UI_SECTION]: k => ({
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
					[m.X.WAF_RULES]: {
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
					[m.X.WAF_RULES]: {
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
					[m.X.UI_SECTION]: {
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
			let w = function(k) {
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
		"../react/pages/security/resources/types.ts": function($, E, t) {
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
		"../react/pages/security/security-rules/resources/sparrowEvents.ts": function($, E, t) {
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
					typeof Object.getOwnPropertySymbols == "function" && i.push.apply(i, Object.getOwnPropertySymbols(a).filter(function(g) {
						return Object.getOwnPropertyDescriptor(a, g).enumerable
					})), i.forEach(function(g) {
						c(f, g, a[g])
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
				var n = m(f, "string");
				return typeof n == "symbol" ? n : String(n)
			}

			function m(f, n) {
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
		"../react/pages/security/settings/hooks/api.ts": function($, E, t) {
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
					return D
				},
				je: function() {
					return g
				},
				ll: function() {
					return m
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
				var v, w;
				const _ = await (0, e.get)(`/zones/${h}/content-upload-scan/settings`, {
					hideErrorAlert: !0
				});
				return ((v = _ == null ? void 0 : _.body) === null || v === void 0 || (w = v.result) === null || w === void 0 ? void 0 : w.value) === "enabled"
			}, c = async (h, v) => (await (0, e.post)(`/zones/${h}/content-upload-scan/${v?"enable":"disable"}`, {
				hideErrorAlert: !0
			}), v), l = async h => {
				var v;
				const w = await (0, e.get)(`/zones/${h}/content-upload-scan/payloads`, {
					hideErrorAlert: !0
				});
				return ((v = w == null ? void 0 : w.body) === null || v === void 0 ? void 0 : v.result) || []
			}, m = async (h, v) => {
				var w;
				const _ = await (0, e.post)(`/zones/${h}/content-upload-scan/payloads`, {
					body: [v]
				});
				return (w = _ == null ? void 0 : _.body) === null || w === void 0 ? void 0 : w.result
			}, s = async (h, v) => (await (0, e.del)(`/zones/${h}/content-upload-scan/payloads/${v}`, {
				hideErrorAlert: !0
			}), v), p = async h => {
				var v;
				const w = await (0, e.get)(`/zones/${h}/firewall-for-ai/settings`, {
					hideErrorAlert: !0
				});
				return !!((v = w == null ? void 0 : w.body) === null || v === void 0 ? void 0 : v.pii_detection_enabled)
			}, f = async (h, v) => (await (0, e.put)(`/zones/${h}/firewall-for-ai/settings`, {
				body: {
					pii_detection_enabled: v
				}
			}), v), n = async h => {
				var v, w;
				const _ = await (0, e.get)(`/zones/${h}/leaked-credential-checks`, {
					hideErrorAlert: !0
				});
				return !!((v = _ == null ? void 0 : _.body) === null || v === void 0 || (w = v.result) === null || w === void 0 ? void 0 : w.enabled)
			}, a = async (h, v) => {
				var w, _;
				const T = await (0, e.post)(`/zones/${h}/leaked-credential-checks`, {
					body: {
						enabled: v
					}
				});
				return !!((w = T == null ? void 0 : T.body) === null || w === void 0 || (_ = w.result) === null || _ === void 0 ? void 0 : _.enabled)
			}, i = async h => {
				var v;
				const w = await (0, e.get)(`/zones/${h}/leaked-credential-checks/detections`, {
					hideErrorAlert: !0
				});
				return (v = w == null ? void 0 : w.body) === null || v === void 0 ? void 0 : v.result
			}, g = async (h, v) => {
				var w;
				const _ = await (0, e.post)(`/zones/${h}/leaked-credential-checks/detections`, {
					body: v
				});
				return (w = _ == null ? void 0 : _.body) === null || w === void 0 ? void 0 : w.result
			}, u = async (h, v) => (await (0, e.del)(`/zones/${h}/leaked-credential-checks/detections/${v}`, {
				hideErrorAlert: !0
			}), v), d = async (h, v) => {
				await (0, e.put)(`/zones/${h}/security-center/securitytxt`, {
					body: v
				})
			}, I = async h => {
				await (0, e.del)(`/zones/${h}/security-center/securitytxt`)
			}, D = async h => (await (0, e.get)(`/zones/${h}/security-center/securitytxt`)).body
		},
		"../react/pages/security/settings/hooks/index.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Xu: function() {
					return u
				},
				Io: function() {
					return _
				},
				FQ: function() {
					return Y
				},
				vU: function() {
					return g
				},
				M: function() {
					return I
				},
				d7: function() {
					return d
				},
				Oz: function() {
					return w
				},
				Np: function() {
					return H
				},
				WR: function() {
					return f
				},
				bE: function() {
					return ae
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
				m = t("../react/common/hooks/useZoneEntitlement.ts"),
				s = t("../../../../node_modules/yup/es/index.js"),
				p = t("../react/utils/translator.tsx");
			const f = () => (0, c.useSelector)(l.ui),
				n = "central_endpoint_list.endpoint_labels_allowed",
				a = () => !!useZoneEntitlement(n),
				i = () => {
					const {
						t: z
					} = (0, p.QT)(), G = s.Z_().required(z("common.field_is_required")).max(24, z("labels.apply.form.name.error.max_characters")).matches(l.DG, z("labels.apply.form.name.error.special_characters")).test("no-cf-prefix", z("labels.apply.form.name.error.cf_forbidden"), O => !l.aW.test(O)), N = {
						NAMES: {
							CREATE: "labels-create-form",
							EDIT: "labels-edit-form",
							APPLY: "labels-apply-form"
						},
						INITIAL_VALUES: {
							name: "",
							description: ""
						},
						VALIDATION_SCHEMA: O => s.Ry().shape({
							[l.n5.NAME]: O ? s.Z_() : G,
							[l.n5.DESCRIPTION]: O ? s.Z_().optional() : s.Z_().max(150, z("labels.apply.form.description.error.max_characters"))
						})
					}, B = {
						NAME: "edit-labels-modal-form",
						INITIAL_VALUES: {
							[l.N2.NAME]: "",
							[l.N2.SOURCE]: l.W3,
							[l.N2.NEW_LABEL_NAME]: ""
						},
						VALIDATION_SCHEMA: () => s.Ry().shape({
							[l.N2.NEW_LABEL_NAME]: G
						})
					};
					return {
						LABELS_APPLY_FORM: N,
						EDIT_LABELS_MODAL_FORM: B
					}
				},
				g = ({
					modalHeaderFixedHeight: z = 62,
					modalDefaultPaddings: G = 16
				} = {}) => {
					const N = (0, o.useRef)(null),
						B = (0, o.useRef)(null),
						[O, M] = (0, o.useState)(0),
						[F, ee] = (0, o.useState)(0),
						J = `calc(100vh - ${O}px - ${F}px - ${G}px)`,
						[re, Q] = (0, o.useState)("");
					return (0, o.useEffect)(() => {
						const U = () => {
							var V, ne, ge, de;
							const ue = N == null || (V = N.current) === null || V === void 0 ? void 0 : V.offsetHeight,
								te = B == null || (ne = B.current) === null || ne === void 0 ? void 0 : ne.offsetHeight,
								ye = ((ge = ue) !== null && ge !== void 0 ? ge : 0) + z,
								Oe = (de = te) !== null && de !== void 0 ? de : 0;
							M(ye), ee(Oe)
						};
						return U(), window.addEventListener("resize", U), () => window.removeEventListener("resize", U)
					}, []), {
						searchTerm: re,
						setSearchTerm: Q,
						scrollableSectionMaxHeight: J,
						topMenuRef: N,
						bottomMenuRef: B
					}
				},
				u = z => {
					const G = f(),
						N = (0, e.useQueryClient)(),
						B = (0, e.useQuery)({
							queryKey: `content-scanning-enabled-${z}`,
							queryFn: () => (0, r.JP)(z),
							enabled: G
						}),
						O = (0, e.useQuery)({
							queryKey: `content-scanning-detections-${z}`,
							queryFn: () => (0, r.BT)(z),
							enabled: G && !!(B == null ? void 0 : B.data)
						}),
						M = (0, e.useMutation)({
							mutationFn: async ({
								enabled: J
							}) => await (0, r.X2)(z, J),
							onSuccess: J => {
								N.setQueryData([`content-scanning-enabled-${z}`], J)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: J => (0, r.ll)(z, J),
							onSuccess: J => {
								N.setQueryData([`content-scanning-detections-${z}`], J)
							}
						}),
						ee = (0, e.useMutation)({
							mutationFn: J => (0, r.qD)(z, J),
							onSuccess: J => {
								var re;
								const Q = (re = N.getQueryData(`content-scanning-detections-${z}`)) !== null && re !== void 0 ? re : [];
								N.setQueryData([`content-scanning-detections-${z}`], Q.filter(({
									id: U
								}) => U !== J))
							}
						});
					return {
						entitled: G,
						loading: B.isLoading || O.isLoading,
						error: B.isError || O.isError,
						enabled: {
							data: B.data,
							isToggling: M.isLoading,
							toggleEnabled: async J => M.mutateAsync({
								enabled: J
							})
						},
						detections: {
							data: O.data,
							add: F.mutateAsync,
							delete: ee.mutateAsync,
							loading: F.isLoading || ee.isLoading
						}
					}
				},
				d = () => {
					const z = (0, c.useSelector)(l.cN),
						G = (0, c.useSelector)(l.bH),
						N = (0, c.useSelector)(l.P3),
						B = (0, c.useSelector)(l.Ri);
					return {
						hasEditPermission: z,
						isEnabled: N && (G.hasSimilarLeaked || G.hasUsernameAndPasswordLeaked || B)
					}
				},
				I = z => {
					const G = d(),
						N = (0, e.useQueryClient)(),
						B = (0, e.useQuery)({
							queryKey: `leaked-credentials-enabled-${z}`,
							queryFn: () => (0, r.Ai)(z),
							enabled: !!G.isEnabled,
							retry: 1
						}),
						O = (0, e.useQuery)({
							queryKey: `leaked-credentials-detections-${z}`,
							queryFn: () => (0, r.tw)(z),
							enabled: !!G.isEnabled && !!(B == null ? void 0 : B.data)
						}),
						M = (0, e.useMutation)({
							mutationFn: ({
								enabled: J
							}) => (0, r.O_)(z, J),
							onSuccess: J => {
								N.setQueryData([`leaked-credentials-enabled-${z}`], J)
							}
						}),
						F = (0, e.useMutation)({
							mutationFn: async J => await (0, r.je)(z, J),
							onSuccess: J => {
								var re;
								const Q = (re = N.getQueryData(`leaked-credentials-detections-${z}`)) !== null && re !== void 0 ? re : [];
								N.setQueryData([`leaked-credentials-detections-${z}`], [...Q, J])
							}
						}),
						ee = (0, e.useMutation)({
							mutationFn: J => (0, r.$y)(z, J),
							onSuccess: J => {
								var re;
								const Q = (re = N.getQueryData(`leaked-credentials-detections-${z}`)) !== null && re !== void 0 ? re : [];
								N.setQueryData([`leaked-credentials-detections-${z}`], Q.filter(({
									id: U
								}) => U !== J))
							}
						});
					return {
						entitled: G.isEnabled,
						hasEditPermissions: G.hasEditPermission,
						loading: B.isLoading || O.isLoading,
						error: B.isError || B.isError,
						enabled: {
							data: B.data,
							isToggling: M.isLoading,
							toggleEnabled: async J => M.mutateAsync({
								enabled: J
							})
						},
						detections: {
							data: O.data,
							add: F.mutateAsync,
							delete: ee.mutateAsync,
							loading: F.isLoading || ee.isLoading
						}
					}
				};
			var D = t("../react/common/utils/useQueryCache.ts");
			const h = "security-txt",
				v = {
					securityTxt: ({
						zoneId: z
					}) => [h, z]
				},
				w = z => (0, e.useQuery)({
					queryKey: v.securityTxt({
						zoneId: z
					}),
					queryFn: () => (0, r._c)(z),
					select: G => G.result
				}),
				_ = z => {
					const {
						invalidate: G
					} = (0, D.o)(v.securityTxt({
						zoneId: z
					}));
					return (0, e.useMutation)({
						mutationFn: () => (0, r.YO)(z),
						onSuccess: async () => {
							await G(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				},
				T = z => {
					const {
						invalidate: G
					} = (0, D.o)(v.securityTxt({
						zoneId: z
					}));
					return (0, e.useMutation)({
						mutationFn: N => (0, r.F3)(z, N),
						onSuccess: async () => {
							await G(void 0, {
								exact: !1,
								refetchInactive: !0
							})
						}
					})
				};
			var k = t("../../../../node_modules/lodash/isEqual.js"),
				A = t.n(k),
				P = t("../react/pages/security/settings/pages/labels/api/helpers.ts");

			function S(z) {
				for (var G = 1; G < arguments.length; G++) {
					var N = arguments[G] != null ? Object(arguments[G]) : {},
						B = Object.keys(N);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(N).filter(function(O) {
						return Object.getOwnPropertyDescriptor(N, O).enumerable
					})), B.forEach(function(O) {
						b(z, O, N[O])
					})
				}
				return z
			}

			function b(z, G, N) {
				return G = L(G), G in z ? Object.defineProperty(z, G, {
					value: N,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : z[G] = N, z
			}

			function L(z) {
				var G = R(z, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function R(z, G) {
				if (typeof z != "object" || z === null) return z;
				var N = z[Symbol.toPrimitive];
				if (N !== void 0) {
					var B = N.call(z, G || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(z)
			}
			const H = z => {
					const {
						queryKey: G,
						zoneId: N
					} = (0, P.hL)(z), {
						isLoading: B,
						isError: O,
						isSuccess: M,
						data: F,
						refetch: ee,
						isRefetching: J
					} = (0, e.useQuery)({
						queryKey: G,
						queryFn: () => P.Mi.getLabels(S({
							zoneId: N
						}, z)),
						onSuccess: () => {
							var re;
							const Q = z == null || (re = z.filters) === null || re === void 0 ? void 0 : re.source;
							(Q === l.LABEL_SOURCES.MANAGED || Q === l.LABEL_SOURCES.USER) && (0, l.Tf)({
								name: l.QJ.FILTER_USER_MANAGED_LABELS,
								product: l.Iv.SECURITY_SETTINGS,
								pageName: l.R.LABELS_LIST,
								type: Q
							})
						}
					});
					return {
						data: F == null ? void 0 : F.result,
						errors: F == null ? void 0 : F.errors,
						paginationData: F == null ? void 0 : F.result_info,
						isLoading: B,
						isError: O,
						isSuccess: M,
						refetch: ee,
						isRefetching: J
					}
				},
				ae = ({
					labels: z,
					preselectedLabels: G
				}) => {
					const {
						USER: N,
						MANAGED: B
					} = l.LABEL_SOURCES, [O, M] = (0, o.useState)({
						[N]: [],
						[B]: []
					}), [F, ee] = (0, o.useState)(new Set), J = F.size > 0, [re, Q] = (0, o.useState)(!1), U = de => {
						ee(ue => {
							const te = new Set(ue);
							return te.has(de.name) ? te.delete(de.name) : te.add(de.name), te
						})
					}, V = de => F.has(de.name), ne = (de, ue) => {
						const te = V(de) ? 1 : 0;
						return (V(ue) ? 1 : 0) - te
					}, ge = de => {
						M(ue => ({
							[N]: [...de ? de[N] : ue[N]].sort(ne),
							[B]: [...de ? de[B] : ue[B]].sort(ne)
						}))
					};
					return (0, o.useEffect)(() => {
						if (z && !re) {
							if (G) {
								const de = new Set;
								z.forEach(ue => {
									G.some(te => A()(te, ue)) && de.add(ue.name)
								}), ee(de)
							}
							Q(!0)
						}
					}, [z, G, re]), (0, o.useEffect)(() => {
						if (z && re) {
							const de = z.reduce((te, ye) => (ye.source === N ? te[N].push(ye) : ye.source === B && te[B].push(ye), te), {
									[N]: [],
									[B]: []
								}),
								ue = {
									[N]: de[N].sort(ne),
									[B]: de[B].sort(ne)
								};
							M(ue)
						}
					}, [N, B, z, re]), {
						userAndManagedLabels: O,
						setUserAndManagedLabels: M,
						toggleSelectedLabel: U,
						isLabelSelected: V,
						sortLabelsBySelectedStatus: ge,
						hasLabelsSelected: J
					}
				};
			var se = t("../react/app/redux/index.ts"),
				ce = t("../react/pages/security/settings/resources/selectors.ts");
			const Y = (z = "") => {
				const G = (0, se.p4)(ce.Xs),
					N = G && (z == null ? void 0 : z.includes("cf.threat_score"));
				return {
					isSecurityLevelDeprecated: G,
					hasDeprecatedParameter: N
				}
			}
		},
		"../react/pages/security/settings/index.tsx": function($, E, t) {
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
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(m),
				p = t("../react/pages/security/settings/hooks/index.ts"),
				f = t("../react/pages/security/settings/resources/index.ts");
			const n = c().lazy(() => Promise.all([t.e(16691), t.e(34684), t.e(12174), t.e(1091), t.e(27751), t.e(51436), t.e(70618), t.e(68204), t.e(2515), t.e(65022), t.e(45275), t.e(8924), t.e(77216), t.e(40517), t.e(39760), t.e(91018), t.e(5756), t.e(83276), t.e(28861), t.e(52215), t.e(42185)]).then(t.bind(t, "../react/pages/security/settings/SettingsRoute.tsx"))),
				a = () => {
					const {
						t: i
					} = (0, m.useI18n)(), g = (0, e.xk)("waf");
					return c().createElement(l.T3, {
						parentPageLabel: i("navigation.zone.security"),
						title: i("navigation.zone.security.settings"),
						type: "narrow"
					}, g.read ? c().createElement(n, null) : c().createElement(r.Z, null))
				};
			E.ZP = a
		},
		"../react/pages/security/settings/pages/labels/api/helpers.ts": function($, E, t) {
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
				m = t("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
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
				var k = g(_, T),
					A, P;
				if (Object.getOwnPropertySymbols) {
					var S = Object.getOwnPropertySymbols(_);
					for (P = 0; P < S.length; P++) A = S[P], !(T.indexOf(A) >= 0) && (!Object.prototype.propertyIsEnumerable.call(_, A) || (k[A] = _[A]))
				}
				return k
			}

			function g(_, T) {
				if (_ == null) return {};
				var k = {},
					A = Object.keys(_),
					P, S;
				for (S = 0; S < A.length; S++) P = A[S], !(T.indexOf(P) >= 0) && (k[P] = _[P]);
				return k
			}

			function u(_) {
				for (var T = 1; T < arguments.length; T++) {
					var k = arguments[T] != null ? Object(arguments[T]) : {},
						A = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(k).filter(function(P) {
						return Object.getOwnPropertyDescriptor(k, P).enumerable
					})), A.forEach(function(P) {
						d(_, P, k[P])
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
				var T = D(_, "string");
				return typeof T == "symbol" ? T : String(T)
			}

			function D(_, T) {
				if (typeof _ != "object" || _ === null) return _;
				var k = _[Symbol.toPrimitive];
				if (k !== void 0) {
					var A = k.call(_, T || "default");
					if (typeof A != "object") return A;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (T === "string" ? String : Number)(_)
			}
			const h = _ => {
					const T = (0, e.p4)(r.Cu),
						k = (0, l.F)(),
						A = w.labels(u({
							accountId: k,
							zoneId: T
						}, _ ? u({}, _) : {})),
						P = (0, o.o)(A);
					return u({
						zoneId: T,
						queryKey: A,
						batchInvalidateLabels: async () => {
							await P.batchInvalidate({
								queryKeysToPredicateInvalidate: [c.IQ.LABELS],
								refetchActive: !0,
								refetchInactive: !0
							})
						}
					}, P)
				},
				v = {
					getLabels: async _ => {
						var T, k, A, P;
						let {
							zoneId: S,
							hideErrorAlert: b = !0
						} = _, L = i(_, ["zoneId", "hideErrorAlert"]);
						return (await m.get(p.labels.toUrl({
							zoneId: S
						}), {
							parameters: {
								page: L == null ? void 0 : L.page,
								per_page: L == null ? void 0 : L.per_page,
								with_mapped_resource_counts: L == null ? void 0 : L.with_mapped_resource_counts,
								filter: L == null || (T = L.filters) === null || T === void 0 ? void 0 : T.search,
								source: (0, n.sQ)(L == null || (k = L.filters) === null || k === void 0 ? void 0 : k.source),
								order: L == null || (A = L.sort) === null || A === void 0 ? void 0 : A.id,
								direction: (L == null ? void 0 : L.sort) ? (L == null || (P = L.sort) === null || P === void 0 ? void 0 : P.desc) ? a.Sr.desc : a.Sr.asc : void 0
							},
							hideErrorAlert: b
						})).body
					},
					getLabel: async _ => {
						let {
							zoneId: T,
							labelName: k,
							hideErrorAlert: A = !0
						} = _, P = i(_, ["zoneId", "labelName", "hideErrorAlert"]);
						const S = (0, n.mm)(k) ? p.managedLabel.toUrl({
							zoneId: T,
							labelName: k
						}) : p.userLabel.toUrl({
							zoneId: T,
							labelName: k
						});
						return (await m.get(S, {
							parameters: {
								with_mapped_resource_counts: P == null ? void 0 : P.with_mapped_resource_counts
							},
							hideErrorAlert: A
						})).body
					},
					editLabel: async ({
						zoneId: _,
						label: T,
						replace: k
					}) => {
						const {
							name: A
						} = T, P = i(T, ["name"]);
						return (await (k ? m.put : m.patch)(p.userLabel.toUrl({
							zoneId: _,
							labelName: T.name
						}), {
							body: P
						})).body
					},
					deleteLabel: async ({
						zoneId: _,
						labelName: T
					}) => (await m.del(p.userLabel.toUrl({
						zoneId: _,
						labelName: T
					}))).body,
					createLabel: async _ => {
						let {
							zoneId: T
						} = _, k = i(_, ["zoneId"]);
						const {
							product: A
						} = k, P = i(k, ["product"]);
						return (await m.post(p.userLabels.toUrl({
							zoneId: T
						}), {
							body: [P]
						})).body
					},
					bulkApplyLabelsToOperation: async ({
						zoneId: _,
						user: T,
						managed: k,
						operationIds: A,
						replace: P
					}) => (await (P ? m.put : m.post)(p.operationsLinkedToLabels.toUrl({
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
									operation_ids: A
								}
							}
						})
					})).body,
					bulkApplyOperationsToLabel: async ({
						zoneId: _,
						labelName: T,
						operationIds: k
					}) => {
						const A = (0, n.mm)(T) ? p.managedLabelOperations.toUrl({
							zoneId: _,
							labelName: T
						}) : p.userLabelOperations.toUrl({
							zoneId: _,
							labelName: T
						});
						return (await m.put(A, {
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
				w = {
					labels: _ => {
						let {
							accountId: T,
							zoneId: k
						} = _, A = i(_, ["accountId", "zoneId"]);
						return [c.IQ.LABELS, T, k, ...(0, f.isEmpty)(A) ? [] : [A]]
					}
				}
		},
		"../react/pages/security/settings/resources/constants.ts": function($, E, t) {
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
					return m
				},
				LABELS_LIST_TOASTS: function() {
					return g
				},
				LABEL_SOURCES: function() {
					return l
				},
				QH: function() {
					return u
				},
				V: function() {
					return w
				},
				W3: function() {
					return o
				},
				Yn: function() {
					return S
				},
				_8: function() {
					return i
				},
				_c: function() {
					return _
				},
				aW: function() {
					return D
				},
				dC: function() {
					return P
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
					return A
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
				m = function(b) {
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
						[m.SOURCE]: o
					}
				},
				filters: m,
				options: {
					autoFillInitialValues: !0,
					autoFillFilterValues: !0,
					queryParamStrategy: "auto-clear"
				}
			};
			let g = function(b) {
				return b.CREATED_LABEL = "createdLabel", b.CREATED_AND_APPLIED_LABEL = "createdAndAppliedLabel", b.DELETED_LABEL = "deletedLabel", b.APPLIED_LABEL = "appliedLabel", b.EDITED_LABEL = "editedLabel", b.EDITED_AND_APPLIED_LABEL = "editedAndAppliedLabel", b
			}({});
			const u = "650px",
				d = {
					SECURITY_LABEL: "https://developers.cloudflare.com/api-shield/management-and-monitoring/endpoint-labels/"
				},
				I = /^[A-Za-z0-9-]+$/,
				D = /^cf-/;
			let h = function(b) {
				return b.NAME = "name", b.DESCRIPTION = "description", b
			}({});
			const v = "all";
			let w = function(b) {
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
						[w.METHOD]: v,
						[w.HOSTNAME]: v
					}
				},
				filters: w
			};
			let T = function(b) {
				return b.TITLE = "title", b.DESCRIPTION = "description", b.SUBMIT = "submit", b
			}({});
			const k = 1e3,
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
				S = "cf-risk"
		},
		"../react/pages/security/settings/resources/index.ts": function($, E, t) {
			"use strict";
			t.d(E, {
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
					return D
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

			function m(v) {
				for (var w = 1; w < arguments.length; w++) {
					var _ = arguments[w] != null ? Object(arguments[w]) : {},
						T = Object.keys(_);
					typeof Object.getOwnPropertySymbols == "function" && T.push.apply(T, Object.getOwnPropertySymbols(_).filter(function(k) {
						return Object.getOwnPropertyDescriptor(_, k).enumerable
					})), T.forEach(function(k) {
						s(v, k, _[k])
					})
				}
				return v
			}

			function s(v, w, _) {
				return w = p(w), w in v ? Object.defineProperty(v, w, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : v[w] = _, v
			}

			function p(v) {
				var w = f(v, "string");
				return typeof w == "symbol" ? w : String(w)
			}

			function f(v, w) {
				if (typeof v != "object" || v === null) return v;
				var _ = v[Symbol.toPrimitive];
				if (_ !== void 0) {
					var T = _.call(v, w || "default");
					if (typeof T != "object") return T;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (w === "string" ? String : Number)(v)
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
				g = function(v) {
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
					product: w,
					category: _ = "user journey",
					pageName: T,
					from: k,
					write_strategy: A,
					type: P,
					target: S,
					selected: b
				}) => {
					l().sendEvent(v, m({
						category: _,
						pageName: T,
						product: w
					}, k ? {
						from: k
					} : {}, A ? {
						write_strategy: A
					} : {}, P ? {
						type: P
					} : {}, S ? {
						target: S
					} : {}, b ? {
						selected: b
					} : {}))
				},
				D = () => {
					var v;
					return (v = Object.values(d)) === null || v === void 0 ? void 0 : v.flat()
				};
			var h = t("../react/pages/security/settings/resources/selectors.ts")
		},
		"../react/pages/security/settings/resources/selectors.ts": function($, E, t) {
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
					return m
				}
			});
			var e = t("../react/common/selectors/zoneSelectors.ts"),
				r = t("../react/utils/url.ts"),
				o = t("../react/common/selectors/entitlementsSelectors.ts"),
				c = t("../react/pages/security/settings/resources/constants.ts"),
				l = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const m = i => {
					const g = (0, e.RO)(i),
						u = !!(0, o.rV)(i, "rulesets.file_upload_scan_allowed"),
						d = !!(0, o.BF)(i, "rulesets.file_upload_scan_allowed");
					return (0, r.el)(window.location.pathname) ? g && (u || d) : d
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
		"../react/pages/security/settings/resources/types.ts": function($, E, t) {
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
		"../react/pages/security/settings/resources/utils.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				$E: function() {
					return i
				},
				Mb: function() {
					return g
				},
				N2: function() {
					return w
				},
				Q4: function() {
					return d
				},
				QF: function() {
					return a
				},
				Vy: function() {
					return D
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
				m = t("../react/pages/analytics/common/utils/gqlUtils.js");

			function s(_) {
				for (var T = 1; T < arguments.length; T++) {
					var k = arguments[T] != null ? Object(arguments[T]) : {},
						A = Object.keys(k);
					typeof Object.getOwnPropertySymbols == "function" && A.push.apply(A, Object.getOwnPropertySymbols(k).filter(function(P) {
						return Object.getOwnPropertyDescriptor(k, P).enumerable
					})), A.forEach(function(P) {
						p(_, P, k[P])
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
					var A = k.call(_, T || "default");
					if (typeof A != "object") return A;
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
				g = _ => e.Ry({
					[l.T.CONTACT]: e.IX().of(e.Z_().required(_("common.required")).matches(/^((https:\/\/)|(tel:)|(mailto:))/, _("security_txt.fields.contact.format_error"))),
					[l.T.EXPIRES]: e.hT().required(_("common.required")).min(new Date, _("security_txt.fields.expires.min_error"))
				}),
				u = _ => {
					const T = {};
					for (const k in _) T[k] = Array.isArray(_[k]) ? _[k].filter(A => !!A) : _[k];
					return s({}, T, {
						expires: (0, m.DZ)(_.expires)
					})
				},
				d = (_, T, k) => {
					const A = [...new Set([l.T.CONTACT, l.T.EXPIRES, ...Object.values(l.T)])],
						P = Object.entries(_).sort(([S], [b]) => A.indexOf(S) - A.indexOf(b)).filter(([S, b]) => !!i[S] && !!b && (!Array.isArray(b) || !!b.length)).map(([S, b]) => Array.isArray(b) ? b.map(L => `${k(i[S].label)}: ${L}`).join(`
`) : `${k(i[S].label)}: ${b}`).join(`
`);
					(0, r.yH)(`Cloudflare_${T}_security.txt`, P, "text/plain;charset=utf-8")
				};
			let I = function(_) {
				return _.CREATED = "created security.txt", _.ENABLED = "enabled security.txt", _.DISABLED = "disabled security.txt", _.DOWNLOADED = "downloaded security.txt", _.UPDATED = "updated security.txt", _.DELETED = "deleted security.txt", _
			}({});
			const D = _ => (_ == null ? void 0 : _.source) === c.LABEL_SOURCES.USER ? "labels.list.table.columns.type.user" : (_ == null ? void 0 : _.source) === c.LABEL_SOURCES.MANAGED ? "labels.list.table.columns.type.managed" : "common.unknown",
				h = _ => _ === c.W3 ? void 0 : _,
				v = _ => c.aW.test(_),
				w = _ => {
					switch (_) {
						case c.w.CONTENT_SCANNING:
							return o.ROUTES.CONTENT_SCANNING;
						case c.w.EXPOSED_CREDENTIALS:
							return o.ROUTES.EXPOSED_CREDENTIALS
					}
				}
		},
		"../react/pages/security/settings/routes.tsx": function($, E, t) {
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
		"../react/pages/security/waf/managed-rules/resources/tracking.ts": function($, E, t) {
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
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), g.forEach(function(u) {
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
				var a = m(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, a || "default");
					if (typeof g != "object") return g;
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
					productName: g = "Managed Rules",
					additionalData: u
				}) => {
					r().sendEvent(n, o({
						category: a,
						product: i,
						productName: g
					}, u || {}))
				}
		},
		"../react/pages/shared-config/sparrowEvents.tsx": function($, E, t) {
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
		"../react/pages/spectrum/tracking.tsx": function($, E, t) {
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
		"../react/pages/stream/actionTypes.ts": function($, E, t) {
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
		"../react/pages/stream/reducer.ts": function($, E, t) {
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
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						u = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), u.forEach(function(d) {
						l(a, d, g[d])
					})
				}
				return a
			}

			function l(a, i, g) {
				return i = m(i), i in a ? Object.defineProperty(a, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[i] = g, a
			}

			function m(a) {
				var i = s(a, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function s(a, i) {
				if (typeof a != "object" || a === null) return a;
				var g = a[Symbol.toPrimitive];
				if (g !== void 0) {
					var u = g.call(a, i || "default");
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
							storageLoading: g
						} = i;
						return c({}, a, {
							storageLoading: g
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
		"../react/pages/stream/routes.ts": function($, E, t) {
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
				m = (0, e.BC)`${c}/${"videoId"}`,
				s = (0, e.BC)`${r}/video-transformations`,
				p = {
					root: r,
					inputs: o,
					configureInputs: (0, e.BC)`${o}/custom-hostnames`,
					videos: c,
					analytics: l,
					videoPage: m,
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
		"../react/pages/stream/selectors.ts": function($, E, t) {
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
					return g
				},
				mX: function() {
					return I
				},
				pW: function() {
					return m
				},
				xW: function() {
					return f
				}
			});
			var e = t("../react/common/selectors/accountSelectors.ts"),
				r = t("../react/common/selectors/entitlementsSelectors.ts"),
				o = t("../react/pages/stream/reducer.ts");
			const c = D => D[o.nY],
				l = D => c(D).videos,
				m = D => c(D).videoUpdateStatuses,
				s = D => c(D).loading,
				p = D => c(D).requestTimestamp,
				f = D => c(D).storageLoading,
				n = D => c(D).storage,
				a = D => (0, r.BF)(D, "stream.enabled") || (0, e.bC)(D),
				i = D => (0, e.Le)(D, "stream", "connect"),
				g = D => (0, e.Le)(D, "stream", "stream-4371"),
				u = D => (0, e.Le)(D, "stream", "public-details-enabled"),
				d = D => !!(0, e.Le)(D, "stream", "llhls"),
				I = D => {
					const h = n(D);
					return h !== void 0 && h.limitMins > h.currentMins
				}
		},
		"../react/pages/stream/util/pager.ts": function($, E, t) {
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

			function r(c, l, m) {
				const s = {
					search: m,
					limit: e.toString()
				};
				return l !== void 0 && (s.end = l), s
			}

			function o(c, l, m) {
				return {
					limit: e.toString(),
					search: m,
					asc: "true",
					start_comp: "gt",
					start: l
				}
			}
		},
		"../react/pages/traffic/argo/tracking.ts": function($, E, t) {
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
		"../react/pages/traffic/load-balancing/account/resources/tracking.ts": function($, E, t) {
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
					return g
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
					var D = arguments[I] != null ? Object(arguments[I]) : {},
						h = Object.keys(D);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(D).filter(function(v) {
						return Object.getOwnPropertyDescriptor(D, v).enumerable
					})), h.forEach(function(v) {
						c(d, v, D[v])
					})
				}
				return d
			}

			function c(d, I, D) {
				return I = l(I), I in d ? Object.defineProperty(d, I, {
					value: D,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : d[I] = D, d
			}

			function l(d) {
				var I = m(d, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function m(d, I) {
				if (typeof d != "object" || d === null) return d;
				var D = d[Symbol.toPrimitive];
				if (D !== void 0) {
					var h = D.call(d, I || "default");
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
			const g = Object.values({
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
		"../react/pages/traffic/load-balancing/resources/tracking.ts": function($, E, t) {
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
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function($, E, t) {
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
		"../react/pages/turnstile/tracking.ts": function($, E, t) {
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
					var g = arguments[i] != null ? Object(arguments[i]) : {},
						u = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && u.push.apply(u, Object.getOwnPropertySymbols(g).filter(function(d) {
						return Object.getOwnPropertyDescriptor(g, d).enumerable
					})), u.forEach(function(d) {
						c(a, d, g[d])
					})
				}
				return a
			}

			function c(a, i, g) {
				return i = l(i), i in a ? Object.defineProperty(a, i, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[i] = g, a
			}

			function l(a) {
				var i = m(a, "string");
				return typeof i == "symbol" ? i : String(i)
			}

			function m(a, i) {
				if (typeof a != "object" || a === null) return a;
				var g = a[Symbol.toPrimitive];
				if (g !== void 0) {
					var u = g.call(a, i || "default");
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
					category: g = "user journey",
					page: u,
					additionalData: d = {}
				}) => {
					r().sendEvent(a, o({
						category: g,
						page: u,
						product: i
					}, d || {}))
				},
				n = () => {
					var a;
					return (a = Object.values(p)) === null || a === void 0 ? void 0 : a.flat()
				}
		},
		"../react/pages/user-groups/sparrowEvents.ts": function($, E, t) {
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
						g = Object.keys(i);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(i).filter(function(u) {
						return Object.getOwnPropertyDescriptor(i, u).enumerable
					})), g.forEach(function(u) {
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
				var a = m(n, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function m(n, a) {
				if (typeof n != "object" || n === null) return n;
				var i = n[Symbol.toPrimitive];
				if (i !== void 0) {
					var g = i.call(n, a || "default");
					if (typeof g != "object") return g;
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
		"../react/pages/welcome/routes.ts": function($, E, t) {
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
		"../react/pages/zone-versioning/selectors.ts": function($, E, t) {
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
					return P
				},
				Tr: function() {
					return D
				},
				UY: function() {
					return d
				},
				bH: function() {
					return a
				},
				fv: function() {
					return S
				},
				hF: function() {
					return w
				},
				iw: function() {
					return g
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

			function m(b) {
				for (var L = 1; L < arguments.length; L++) {
					var R = arguments[L] != null ? Object(arguments[L]) : {},
						H = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && H.push.apply(H, Object.getOwnPropertySymbols(R).filter(function(ae) {
						return Object.getOwnPropertyDescriptor(R, ae).enumerable
					})), H.forEach(function(ae) {
						s(b, ae, R[ae])
					})
				}
				return b
			}

			function s(b, L, R) {
				return L = p(L), L in b ? Object.defineProperty(b, L, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[L] = R, b
			}

			function p(b) {
				var L = f(b, "string");
				return typeof L == "symbol" ? L : String(L)
			}

			function f(b, L) {
				if (typeof b != "object" || b === null) return b;
				var R = b[Symbol.toPrimitive];
				if (R !== void 0) {
					var H = R.call(b, L || "default");
					if (typeof H != "object") return H;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (L === "string" ? String : Number)(b)
			}
			const n = b => (0, o.nA)(b) ? (0, l.p1)(b) && (0, c.$n)(b, "zone_versioning", "versioning") : !1,
				a = b => b.zoneVersioning.zoneApplications,
				i = (0, e.P1)("zoneApplications", a),
				g = b => b.zoneVersioning.zoneVersions,
				u = (0, e.P1)("zoneVersions", g),
				d = (0, r.P1)(u, b => {
					if (b) return b.filter(L => L.status == "V")
				}),
				I = b => b.zoneVersioning.environments,
				D = b => b.zoneVersioning.environments.isRequesting,
				h = (0, e.P1)("environments", I),
				v = (0, r.P1)(i, b => {
					if (b) {
						if (b.length === 1) return b[0];
						b.length > 1 && console.error(new Error(`Zone Versioning - Zone Versioning Migration Error: Unexpected number of Zone Applications. Expected: 1, actual: ${b.length}`))
					}
					return null
				}),
				w = (0, r.P1)(h, b => b ? b.environments : []),
				_ = b => {
					var L;
					return (L = b.zoneVersioning) === null || L === void 0 ? void 0 : L.zoneVersionSelector
				},
				T = (0, r.P1)(_, u, (b, L) => {
					if (!(b == null ? void 0 : b.isVersion) || !L) return null;
					const R = L.find(H => {
						if (H.version === b.selectedVersion && H.locked) return !0
					});
					return R ? m({}, R, {
						isLocked: !0
					}) : null
				}),
				k = (0, r.P1)(u, w, (b, L) => !L || !b ? [] : b.map(R => {
					const H = [];
					for (const ae in L) L[ae].version === R.version && H.push(L[ae]);
					return m({}, R, {
						environments: H
					})
				})),
				A = b => b.zoneVersioning.WAFMigrationStatus,
				P = (0, e.P1)("WAFMigrationStatus", A),
				S = b => b.zoneVersioning.enableVersioning
		},
		"../react/pages/zoneless-workers/constants.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				$2: function() {
					return A
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
					return P
				},
				X$: function() {
					return w
				},
				X6: function() {
					return f
				},
				d4: function() {
					return g
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
					return m
				}
			});

			function e(S) {
				for (var b = 1; b < arguments.length; b++) {
					var L = arguments[b] != null ? Object(arguments[b]) : {},
						R = Object.keys(L);
					typeof Object.getOwnPropertySymbols == "function" && R.push.apply(R, Object.getOwnPropertySymbols(L).filter(function(H) {
						return Object.getOwnPropertyDescriptor(L, H).enumerable
					})), R.forEach(function(H) {
						r(S, H, L[H])
					})
				}
				return S
			}

			function r(S, b, L) {
				return b = o(b), b in S ? Object.defineProperty(S, b, {
					value: L,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[b] = L, S
			}

			function o(S) {
				var b = c(S, "string");
				return typeof b == "symbol" ? b : String(b)
			}

			function c(S, b) {
				if (typeof S != "object" || S === null) return S;
				var L = S[Symbol.toPrimitive];
				if (L !== void 0) {
					var R = L.call(S, b || "default");
					if (typeof R != "object") return R;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (b === "string" ? String : Number)(S)
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
				m = 800,
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
				D = "workers.dev",
				h = "YYYY-MM-DD HH:mm:SS ZZ",
				v = "active",
				w = ["bundled", "unbound", "standard"],
				_ = null,
				T = {
					observability: "workers-observability",
					workersBuildsSCMStatusGitHub: "workers-builds-scm-status-github",
					workersBuildsSCMStatusGitLab: "workers-builds-scm-status-gitlab"
				};
			let k = function(S) {
				return S[S.NONE = 0] = "NONE", S[S.MISS = 1] = "MISS", S[S.EXPIRED = 2] = "EXPIRED", S[S.UPDATING = 3] = "UPDATING", S[S.STALE = 4] = "STALE", S[S.HIT = 5] = "HIT", S[S.IGNORED = 6] = "IGNORED", S[S.BYPASS = 7] = "BYPASS", S[S.REVALIDATED = 8] = "REVALIDATED", S[S.DYNAMIC = 9] = "DYNAMIC", S[S.STREAM_HIT = 10] = "STREAM_HIT", S[S.DEFERRED = 11] = "DEFERRED", S
			}({});
			const A = [k.HIT, k.STREAM_HIT];
			let P = function(S) {
				return S.SECRETS_STORE_ID = "store_id", S.SECRET_NAME = "secret_name", S
			}({})
		},
		"../react/pages/zoneless-workers/routes.ts": function($, E, t) {
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
				m = "https://cron-triggers.cloudflareworkers.com",
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
		"../react/pages/zoneless-workers/utils/swrConfig.ts": function($, E, t) {
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
					return m
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
			}, m = async (...s) => (await c(...s)).result;
			E.ZP = {
				fetcher: s => Array.isArray(s) ? m(...s) : m(s)
			}
		},
		"../react/shims/focus-visible.js": function() {
			(function($, E) {
				E()
			})(this, function() {
				"use strict";

				function $() {
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
						var D = I.type,
							h = I.tagName;
						return !!(h == "INPUT" && o[D] && !I.readOnly || h == "TEXTAREA" && !I.readOnly || I.isContentEditable)
					}

					function m(I) {
						I.getAttribute("is-focus-visible") !== "" && I.setAttribute("is-focus-visible", "")
					}

					function s(I) {
						I.getAttribute("is-focus-visible") === "" && I.removeAttribute("is-focus-visible")
					}

					function p(I) {
						c(document.activeElement) && m(document.activeElement), t = !0
					}

					function f(I) {
						t = !1
					}

					function n(I) {
						!c(I.target) || (t || l(I.target)) && m(I.target)
					}

					function a(I) {
						!c(I.target) || I.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), s(I.target))
					}

					function i(I) {
						document.visibilityState == "hidden" && (e && (t = !0), g())
					}

					function g() {
						document.addEventListener("mousemove", d), document.addEventListener("mousedown", d), document.addEventListener("mouseup", d), document.addEventListener("pointermove", d), document.addEventListener("pointerdown", d), document.addEventListener("pointerup", d), document.addEventListener("touchmove", d), document.addEventListener("touchstart", d), document.addEventListener("touchend", d)
					}

					function u() {
						document.removeEventListener("mousemove", d), document.removeEventListener("mousedown", d), document.removeEventListener("mouseup", d), document.removeEventListener("pointermove", d), document.removeEventListener("pointerdown", d), document.removeEventListener("pointerup", d), document.removeEventListener("touchmove", d), document.removeEventListener("touchstart", d), document.removeEventListener("touchend", d)
					}

					function d(I) {
						I.target.nodeName.toLowerCase() !== "html" && (t = !1, u())
					}
					document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", f, !0), document.addEventListener("pointerdown", f, !0), document.addEventListener("touchstart", f, !0), document.addEventListener("focus", n, !0), document.addEventListener("blur", a, !0), document.addEventListener("visibilitychange", i, !0), g(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function E(t) {
					var e;

					function r() {
						e || (e = !0, t())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && E($)
			})
		},
		"../react/utils/bootstrap.ts": function($, E, t) {
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
					var l, m, s;
					return (l = window) === null || l === void 0 || (m = l.bootstrap) === null || m === void 0 || (s = m.data) === null || s === void 0 ? void 0 : s.security_token
				},
				r = () => {
					var l, m, s;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (m = l.data) === null || m === void 0 || (s = m.user) === null || s === void 0 ? void 0 : s.id)
				},
				o = () => {
					var l, m;
					return !!((l = t.g.bootstrap) === null || l === void 0 || (m = l.data) === null || m === void 0 ? void 0 : m.is_kendo)
				},
				c = () => {
					var l, m, s, p;
					return (l = window) === null || l === void 0 || (m = l.bootstrap) === null || m === void 0 || (s = m.data) === null || s === void 0 || (p = s.user) === null || p === void 0 ? void 0 : p.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function($, E, t) {
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
				m = () => (r() || "").indexOf("C0005") !== -1,
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
		"../react/utils/i18n.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				AI: function() {
					return w
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
				m = t("../../../../node_modules/cookie/index.js");
			const s = "cf-sync-locale-with-cps",
				p = o.Q.en_US,
				f = "en_US",
				n = "cf-locale";

			function a() {
				const P = (0, m.parse)(document.cookie);
				return l.Z.get(n) || P[n] || null
			}

			function i(P) {
				document.cookie = (0, m.serialize)(n, P, {
					path: "/",
					maxAge: 31536e3
				}), l.Z.set(n, P)
			}

			function g() {
				document.cookie = serializeCookie(n, "", {
					path: "/",
					maxAge: 0
				}), cache.remove(n)
			}
			const u = P => (0, c.Yd)(o.Q).find(S => o.Q[S] === P) || f,
				d = [],
				I = [],
				D = [o.Q.de_DE, o.Q.en_US, o.Q.es_ES, o.Q.fr_FR, o.Q.it_IT, o.Q.pt_BR, o.Q.ko_KR, o.Q.ja_JP, o.Q.zh_CN, o.Q.zh_TW],
				h = {
					test: [...D, ...I, ...d],
					development: [...D, ...I, ...d],
					staging: [...D, ...I, ...d],
					production: [...D, ...I]
				},
				v = P => {
					const S = o.Q[P];
					return h.production.includes(S)
				},
				w = () => Object.keys(o.Q).filter(P => v(P)),
				_ = P => {
					const S = o.Q[P];
					return I.includes(S)
				},
				T = P => k[P],
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
		"../react/utils/translator.tsx": function($, E, t) {
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
					return g
				}
			});
			var e = t("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = t("../../../common/intl/intl-core/src/Translator.ts"),
				o = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				c = t.n(o),
				l = t("../flags.ts");
			const m = new r.Z({
				pseudoLoc: (0, l.J8)("is_pseudo_loc")
			});

			function s(d, ...I) {
				return m.t(d, ...I)
			}
			const p = m;

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
				g = o.I18n,
				u = o.useI18n
		},
		"../react/utils/url.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Ct: function() {
					return A
				},
				Fl: function() {
					return J
				},
				KT: function() {
					return Q
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
					return M
				},
				cm: function() {
					return I
				},
				e1: function() {
					return k
				},
				el: function() {
					return se
				},
				hW: function() {
					return Y
				},
				pu: function() {
					return re
				},
				qR: function() {
					return ae
				},
				td: function() {
					return w
				},
				uW: function() {
					return G
				}
			});
			var e = t("../../../../node_modules/query-string/query-string.js"),
				r = t.n(e),
				o = t("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				c = t("../react/pages/stream/routes.ts"),
				l = t("../react/pages/r2/routes.ts"),
				m = t("../react/pages/zoneless-workers/routes.ts"),
				s = t("../react/pages/pages/routes.ts"),
				p = t("../react/pages/d1/routes.ts"),
				f = t("../react/pages/images/routes.ts");

			function n(U) {
				for (var V = 1; V < arguments.length; V++) {
					var ne = arguments[V] != null ? Object(arguments[V]) : {},
						ge = Object.keys(ne);
					typeof Object.getOwnPropertySymbols == "function" && ge.push.apply(ge, Object.getOwnPropertySymbols(ne).filter(function(de) {
						return Object.getOwnPropertyDescriptor(ne, de).enumerable
					})), ge.forEach(function(de) {
						a(U, de, ne[de])
					})
				}
				return U
			}

			function a(U, V, ne) {
				return V = i(V), V in U ? Object.defineProperty(U, V, {
					value: ne,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[V] = ne, U
			}

			function i(U) {
				var V = g(U, "string");
				return typeof V == "symbol" ? V : String(V)
			}

			function g(U, V) {
				if (typeof U != "object" || U === null) return U;
				var ne = U[Symbol.toPrimitive];
				if (ne !== void 0) {
					var ge = ne.call(U, V || "default");
					if (typeof ge != "object") return ge;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (V === "string" ? String : Number)(U)
			}
			const {
				endsWithSlash: u
			} = o.default, d = new RegExp(/([0-9a-z]{32})/g), I = U => U == null ? void 0 : U.replace(d, ":id"), D = (U, V) => {
				const ne = U.replace(u, "").split("/");
				return ne.slice(0, 2).concat([V]).concat(ne.slice(3)).join("/")
			}, h = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), v = U => `/${U.replace(u,"").replace(/^\//,"")}`, w = U => T("add-site", U), _ = U => T("billing", U), T = (U, V) => V ? `/${V}${U?`/${U}`:""}` : `/?to=/:account/${U}`, k = () => {
				const U = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return U ? U[1] : null
			}, A = (U, V) => r().stringify(n({}, r().parse(U), V)), P = (U = "") => U.toString().replace(/([\/]{1,})$/, ""), S = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/password-reset", "/forgot-email", "/login-help", "/profile", "/zones", "/organizations"], b = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, L = /^\/(\w{32,})(\/[^.]*)?/, R = U => S.includes(U), H = U => !R(U), ae = U => !R(U) && L.test(U), se = U => !R(U) && b.test(U), ce = U => b.exec(U), Y = U => {
				if (se(U)) return U.split("/").filter(V => V.length > 0)[1]
			}, z = U => L.exec(U), G = U => {
				if (ae(U)) {
					const V = z(U);
					if (V) return V[1]
				}
			}, N = U => ae(U) && U.split("/")[2] === "register-domain", B = U => N(U) ? U.split("/") : null, O = U => {
				if (se(U)) {
					const [, , , V, ne, ge, de, ue] = U.split("/");
					return V === "traffic" && ne === "load-balancing" && ge === "pools" && de === "edit" && ue
				}
			}, M = U => {
				const V = B(U);
				if (V) return V[3]
			}, F = (U, V) => {
				var ne, ge;
				return ((ne = U.pattern.match(/\:/g)) !== null && ne !== void 0 ? ne : []).length - ((ge = V.pattern.match(/\:/g)) !== null && ge !== void 0 ? ge : []).length
			}, ee = [...Object.values(c.C), ...Object.values(f.KJ), ...Object.values(l._j), ...Object.values(m._j), ...Object.values(s._j), ...Object.values(p._)].sort(F);

			function J(U) {
				if (!H(U)) return U;
				for (const ue of ee)
					if (ue.expression.test(U)) return ue.pattern;
				const V = B(U);
				if (V) {
					const [, , ue, , ...te] = V;
					return `/:accountId/${ue}/:domainName/${te.join("/")}`
				}
				if (O(U)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const ge = ce(U);
				if (ge) {
					const [, , , , ue] = ge;
					return `/:accountId/:zoneName${ue||""}`
				}
				const de = z(U);
				if (de) {
					const [, , ue] = de;
					return `/:accountId${ue||""}`
				}
				return U
			}

			function re(U) {
				if (!!U) try {
					const ne = U.split(".").pop();
					if (ne && ne.length > 0) return ne
				} catch {}
			}

			function Q(U, V = document.location.href) {
				try {
					const ne = new URL(U),
						ge = new URL(V);
					if (ne.origin === ge.origin) return `${ne.pathname}${ne.search}${ne.hash}`
				} catch {}
			}
		},
		"../react/utils/useDomainConnectRedirect.ts": function($, E, t) {
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
			const m = /^\/domainconnect\/v2\/domaintemplates\//i,
				s = "domain-connect-redirect",
				p = () => {
					const f = (0, c.useLocation)();
					(0, e.useEffect)(() => {
						m.test(f.pathname) && o.Z.set(s, f, 60 * 1e3)
					}, [])
				}
		},
		"../react/utils/zaraz.ts": function($, E, t) {
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
		"../react/utils/zoneLevelAccess.ts": function($, E, t) {
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
				var m, s, p, f, n, a;
				return (m = window) === null || m === void 0 || (s = m.bootstrap) === null || s === void 0 || (p = s.data) === null || p === void 0 || (f = p.user) === null || f === void 0 || (n = f.betas) === null || n === void 0 || (a = n.some) === null || a === void 0 ? void 0 : a.call(n, i => i === "zone_level_access_beta")
			}

			function c() {
				const m = !!(0, e.Z)("zone-level-access");
				return o() || m
			}

			function l(m) {
				const s = !!(0, r.z1)("zone-level-access")(m);
				return o() || s
			}
		},
		"../utils/getDashVersion.ts": function($, E, t) {
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
		"../utils/initSparrow.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Wi: function() {
					return y
				},
				IM: function() {
					return Lt
				},
				yV: function() {
					return Ut
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
				m = t("../flags.ts"),
				s = t("../../../../node_modules/cookie/index.js"),
				p = t("../react/utils/url.ts"),
				f = t("../react/common/selectors/zoneSelectors.ts"),
				n = t("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				a = t("../../../../node_modules/lodash-es/memoize.js"),
				i = t("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				g = t("../utils/getDashVersion.ts"),
				u = t("../react/common/selectors/accountSelectors.ts"),
				d = t("../react/common/selectors/entitlementsSelectors.ts"),
				I = t("../react/common/utils/getEnvironment.ts");

			function D(C) {
				for (var j = 1; j < arguments.length; j++) {
					var oe = arguments[j] != null ? Object(arguments[j]) : {},
						pe = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(oe).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(oe, Ee).enumerable
					})), pe.forEach(function(Ee) {
						h(C, Ee, oe[Ee])
					})
				}
				return C
			}

			function h(C, j, oe) {
				return j = v(j), j in C ? Object.defineProperty(C, j, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[j] = oe, C
			}

			function v(C) {
				var j = w(C, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function w(C, j) {
				if (typeof C != "object" || C === null) return C;
				var oe = C[Symbol.toPrimitive];
				if (oe !== void 0) {
					var pe = oe.call(C, j || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(C)
			}
			const _ = n.eg.exact(n.eg.object({
					_ga: n.eg.string.optional,
					"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": n.eg.string.optional
				})),
				T = (0, a.Z)(C => {
					try {
						return _.assertDecode((0, s.parse)(C))
					} catch (j) {
						return console.error(j), {}
					}
				}),
				k = C => (j, oe, pe) => {
					try {
						const Ve = window.location.pathname,
							Ze = (0, c.bh)().getState(),
							at = T(document.cookie),
							ut = D({
								page: (0, p.Fl)(pe.page || window.location.pathname),
								dashVersion: (0, g.t)(),
								environment: (0, I.Z)()
							}, at);
						if (j === "identify") {
							var Ee, Re;
							const nt = {
								gates: (0, i.T2)(Ze) || {},
								country: (Ee = t.g) === null || Ee === void 0 || (Re = Ee.bootstrap) === null || Re === void 0 ? void 0 : Re.ip_country
							};
							return C(j, oe, D({}, ut, nt, pe))
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
							return C(j, oe, D({}, ut, nt, pe))
						}
					} catch (Ve) {
						return console.error(Ve), C(j, oe, pe)
					}
				},
				A = C => async (j, oe, pe) => {
					try {
						return await C(j, oe, pe)
					} catch (Ee) {
						if (console.error(Ee), !Dt()) throw Ee;
						return {
							status: "rejected",
							reason: Ee
						}
					}
				};
			var P = t("../react/app/components/AccountHome/tracking.ts"),
				S = t("../react/app/components/GlobalHeader/AddProductDropdown/index.tsx"),
				b = t("../react/common/components/api-tokens/sparrowEvents.ts"),
				L = t("../react/common/components/filter-editor/constants/userJourney.ts"),
				R = t("../react/common/hooks/rulesets/resources/tracking.tsx"),
				H = t("../react/common/middleware/sparrow/errors.ts"),
				ae = t("../react/pages/abuse/constants.ts"),
				se = t("../react/pages/caching/tracking.tsx"),
				ce = t("../react/pages/dns/dns-records/tracking.ts"),
				Y = t("../react/pages/home/alerts/tracking.ts"),
				z = t("../react/pages/home/configurations/dns-settings/tracking.ts"),
				G = t("../react/pages/home/configurations/lists/tracking.ts"),
				N = t("../react/pages/home/domain-registration/tracking.ts"),
				B = t("../react/pages/home/members/sparrowEvents.ts"),
				O = t("../react/pages/home/rulesets/ddos/tracking.ts"),
				M = t("../react/pages/hyperdrive/tracking.ts"),
				F = t("../react/pages/magic/network-monitoring/constants.ts"),
				ee = t("../react/pages/magic/overview/tracking.ts"),
				J = t("../react/pages/magic/packet-captures/constants.ts"),
				re = t("../react/pages/page-rules/tracking.ts"),
				Q = t("../react/pages/pages/constants.ts"),
				U = t("../react/pages/pipelines/tracking.ts"),
				V = t("../react/pages/profile/tracking.ts"),
				ne = t("../react/pages/secrets-store/resources/constants.ts"),
				ge = t("../react/pages/security-center/BlockedContent/constants.ts"),
				de = t("../react/pages/security-center/tracking.ts"),
				ue = t("../react/pages/security/analytics/security-analytics/resources/constants.ts"),
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
				Z = t("../react/pages/traffic/load-balancing/account/resources/tracking.ts"),
				ve = t("../react/pages/traffic/load-balancing/resources/tracking.ts"),
				Me = t("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				Fe = t("../react/pages/turnstile/tracking.ts"),
				lt = t("../react/pages/user-groups/sparrowEvents.ts"),
				Ce = t("../react/pages/zoneless-workers/constants.ts");
			const X = ((C, j, ...oe) => n.eg.union([n.eg.literal(C), n.eg.literal(j), ...oe.map(pe => n.eg.literal(pe))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "account name menu clicked", "account quick action click", "accounts table click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel create database", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel switch ca totalTLS", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "Continue adding domain", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click bot settings", "click cancel downgrade", "click cancel free trial", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click create table button", "click database detail tab", "click deflect community TSF (3.0)", "click delete database button", "click delete table button", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click help drawer", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on apply rule ai assistant", "click on close rule ai assistant", "click on edit snippet", "click on content_scanning", "click on exposed_credentials", "click on firewall_ai", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on rule ai assistant", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click restore database button", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click table insert data button", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click intent submenu back link", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click update table data row button", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click wrangler cli guide link", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "click plan upgrade from rules setting", "click on snippets promo page", "click on error pages promo page", "Click", "close chat window", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close add product dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "close profile dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create database", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create table", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "clicked header navigation", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete database", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete multiple selected table data rows", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete table", "delete table data row", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "enable cache reserve storage sync", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "live training button clicked", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "execute console tab query", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Follow Trial Offer Link", "Free Long Wait", "get current bookmark id", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "insert table data row", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "navigate to share feedback", "new page available refresh cta", "Next onboarding guide section", "next page", "next tooltip step", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open add product dropdown", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open cancel free trial modal", "open configuration switcher sidemodal", "open create bucket page", "open create database page", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open hostname confirmation modal", "Open Trial Offer Modal", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open profile dropdown", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "previous tooltip step", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase from plan change modal", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove all filters", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "resend verification email", "restore database", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search d1 databases", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select d1 database", "select file", "Select hostname success", "select intent capture card", "select language", "select mp4 download checkbox", "select automatic deletion checkbox", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select source", "select storage plan", "select table", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show cache reserve potential savings", "show cache reserve disabled", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "Sign in to Area 1 button click", "Go to Zero Trust Email Security button click", "site configured", "skip onboarding guide section", "something wrong", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream navigate away from videos page", "Stream Video Upload with link", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "sign up option clicked", "login option clicked", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle counting expression", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "transformations disabled for zone", "transformations enabled for zone", "Trial Offer Displayed", "Trial Started", "Trial Cancelled", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "Under attack mode enabled", "undo restore database", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "update table data row", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "web analytics option changed to enabled", "web analytics option changed to enabled with lite", "web analytics option changed to manual", "web analytics option changed to disabled", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "zones table click", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click welcome card call to action", "click welcome card view products", "skip to dash", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click element", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "disable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "enable rum lite from speed", "enable rum from zone", "enable rum lite from zone", "enable rum from observatory", "enable rum lite from observatory", "enable rum from account", "enable rum lite from account", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click registrar link", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "toggle templates sidepanel", P.gX.SPARROW_PROJECTS_TABLE_CLICK, P.gX.SPARROW_EMPTY_STATE_CTA_CLICK, P.gX.SPARROW_PRODUCT_CARD_CLICK, P.gX.SPARROW_VIEW_ALL_PROJECTS_CLICK, P.gX.SPARROW_ZERO_TRUST_LINK_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ONBOARDING_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_ANALYTICS_LINK_CLICK, P.gX.SPARROW_ZERO_TRUST_PRODUCT_CARD_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_PILL_CLICK, P.gX.SPARROW_ZERO_TRUST_PLAN_FALLBACK_CLICK, "clicked sidebar Discord link", "clicked sidebar Community Forum link", Ce.QV.clickedDownloadAnalytics, Ce.QV.clickedPrintAnalytics, Ce.QV.toggledSmartPlacement, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", Ce.QV.addWCITriggerToExistingWorker, Ce.QV.updateWCITrigger, Ce.QV.deleteWCITrigger, Ce.QV.addWCITriggerToNewWorker, Ce.QV.createWCIBuildForNewWorker, Ce.QV.completedWCIBuildForNewWorker, Ce.QV.changedDefaultConfigurations, Ce.QV.clickElement, Q.QV.toggledPagesSmartPlacement, Q.QV.downloadDemoProject, Ce.QV.clickCreateWorkerFromRepoNextStep, Ce.QV.clickCreateWorkerFromRepoPreviousStep, Ce.QV.clickCreateNewSCMConnection, Ce.QV.redirectFromSCMOAuth, Ce.QV.clickSubmitError, Ce.QV.selectTemplate, Ce.QV.clickedListTemplates, Ce.QV.clickedImportRepository, Ce.QV.clickedClonePublicRepositoryFromUrl, Ce.QV.templateStubWorkerCreated, Ce.QV.templateStubWorkerCreationFailed, Ce.QV.templateRepositoryCreated, Ce.QV.templateRepositoryCreationFailed, Ce.QV.copyTemplateC3Command, Ce.QV.templateDeployClick, Ce.QV.reauthenticateGithubModalShown, Ce.QV.updateGithubPermissionsClicked, Ce.QV.D2W_importRepository, Ce.QV.D2W_stubWorkerCreated, Ce.QV.D2W_stubWorkerCreationFailed, Ce.QV.D2W_repositoryCreated, Ce.QV.D2W_repositoryCreationFailed, Ce.QV.D2W_resourcesProvisioned, Ce.QV.D2W_resourceProvisioningFailed, Ce.QV.D2W_githubAPIRateLimitReached, Ce.QV.createResource, Ce.QV.deleteResource, Ce.QV.updateResource, "clicked R2 feedback link", "clicked R2 CLI guide", "clicked R2 footer link", "clicked Constellation feedback link", ye.N3.INITIAL_FETCH_SCORES, ye.N3.FETCH_CONFIGURATION, ye.N3.INITIAL_FETCH_TIME_SERIES, ye.N3.INITIAL_FETCH_ATTRIBUTES, ye.N3.UPDATE_SETTINGS, ye.N3.DELETE_RULE, ye.N3.UPDATE_RULE, ye.N3.FETCH_RULES, ye.N3.CONFIGURE_BOT_MANAGEMENT, ye.N3.WAF_RULES_REDIRECT, O.F.TOGGLE_TCP_PROTECTION, O.F.GET_TCP_PROTECTION_PREFIXES, O.F.CREATE_TCP_PROTECTION_PREFIXES, O.F.CREATE_TCP_PROTECTION_PREFIX, O.F.UPDATE_TCP_PROTECTION_PREFIX, O.F.DELETE_TCP_PROTECTION_PREFIX, O.F.DELETE_TCP_PROTECTION_PREFIXES, O.F.GET_TCP_PROTECTION_ALLOWLIST, O.F.CREATE_TCP_PROTECTION_ALLOWLIST, O.F.UPDATE_TCP_PROTECTION_ALLOWLIST, O.F.DELETE_PREFIX_TCP_PROTECTION_ALLOWLIST, O.F.DELETE_TCP_PROTECTION_ALLOWLIST, O.F.GET_SYN_PROTECTION_RULES, O.F.GET_SYN_PROTECTION_RULE, O.F.CREATE_SYN_PROTECTION_RULE, O.F.UPDATE_SYN_PROTECTION_RULE, O.F.DELETE_SYN_PROTECTION_RULE, O.F.GET_TCP_FLOW_PROTECTION_RULES, O.F.GET_TCP_FLOW_PROTECTION_RULE, O.F.CREATE_TCP_FLOW_PROTECTION_RULE, O.F.UPDATE_TCP_FLOW_PROTECTION_RULE, O.F.DELETE_TCP_FLOW_PROTECTION_RULE, O.F.GET_SYN_PROTECTION_FILTERS, O.F.GET_SYN_PROTECTION_FILTER, O.F.CREATE_SYN_PROTECTION_FILTER, O.F.UPDATE_SYN_PROTECTION_FILTER, O.F.DELETE_SYN_PROTECTION_FILTER, O.F.GET_TCP_FLOW_PROTECTION_FILTERS, O.F.GET_TCP_FLOW_PROTECTION_FILTER, O.F.CREATE_TCP_FLOW_PROTECTION_FILTER, O.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, O.F.DELETE_TCP_FLOW_PROTECTION_FILTER, O.F.GET_DNS_PROTECTION_RULES, O.F.GET_DNS_PROTECTION_RULE, O.F.CREATE_DNS_PROTECTION_RULE, O.F.UPDATE_DNS_PROTECTION_RULE, O.F.DELETE_DNS_PROTECTION_RULE, Ie.FV.MANAGE_PAGE_SHIELD_POLICY, Ie.FV.CONFIGURE_PAGE_SHIELD, Ie.FV.VIEW_DETECTED_CONNECTIONS, Ie.FV.VIEW_DETECTED_SCRIPTS, Ie.FV.VIEW_PAGE_SHIELD_POLICIES, Ie.FV.VIEW_PAGE_SHIELD_SETTINGS, Ie.FV.OPEN_MUTABLE_VERSION_TOOLTIP, Ie.FV.SHOW_MUTABLE_VERSION_TOOLTIP, G.y.CREATE_LIST, G.y.DELETE_LIST, G.y.ADD_LIST_ITEM, G.y.DELETE_LIST_ITEM, M.KO.PURCHASE_WORKERS_PAID, M.KO.LIST_CONFIGS, M.KO.SEARCH_CONFIGS, M.KO.CREATE_HYPERDRIVE_CONFIG, M.KO.VIEW_CONFIG_DETAILS, M.KO.UPDATE_CACHING_SETTINGS, M.KO.DELETE_HYPERDRIVE_CONFIG, M.KO.CLICK_HYPERDRIVE_DOCUMENTATION, M.KO.CLICK_GET_STARTED_GUIDE, M.KO.CLICK_CONNECTIVITY_GUIDES, M.KO.CLICK_QUICK_LINK, M.KO.CLICK_DISCORD, M.KO.CLICK_COMMUNITY, $e.N.CNAME, $e.N.IP_ADDRESS, $e.N.LB, $e.N.UPDATE_CNAME, $e.N.UPDATE_IP_ADDRESS, $e.N.UPDATE_LB, $e.N.DISABLE, se.N.TIERED_CACHE, se.N.CACHE_PURGE, se.N.CACHE_ANALYTICS, ...(0, Fe.P)(), ...(0, R.x4)(), ...(0, ke.m8)(), ...(0, B.SH)(), ...(0, lt.Ky)(), ...(0, b.Cf)(), Me.N.CREATE, Me.N.EVENTS, Me.N.ANALYTICS, Me.N.UPDATE, Me.N.GENERATE_PREVIEW, de.RY.INITIATE_URL_SCAN, de.RY.LOAD_SCAN_INFO, de.Ev.LOAD_THREAT_EVENTS, de.Ev.THREAT_EVENT_MORE_DETAILS_CLICK, de.Ev.THREAT_EVENTS_FILTERS, de.Ev.ABUSE_REPORT_BUTTON_CLICK, de.Ev.ABUSE_REPORT_SUBMIT_CLICK, de.Ev.ABUSE_REPORT_SUBMIT_FAILED, de.Ev.ABUSE_REPORT_SUBMIT_SUCCESS, de.v9.EXPAND_INSIGHT_ROW, de.v9.ONE_CLICK_RESOLVE_BUTTON, de.v9.FOLLOW_RESOLVE_URL, de.v9.MANAGE_INSIGHT, de.v9.CLICK_SCAN_NOW, de.v9.CLICK_EXPORT_INSIGHTS, de.v9.BULK_ARCHIVE, de.v9.CLICK_DETAILS_BUTTON, te.Fj[te.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, te.Fj[te.kq.ENDPOINT_MANAGEMENT].detailedMetrics, te.Fj[te.kq.ENDPOINT_MANAGEMENT].createEndpoint, te.Fj[te.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, te.Fj[te.kq.ENDPOINT_MANAGEMENT].deployRouting, te.Fj[te.kq.ENDPOINT_MANAGEMENT].deleteRouting, te.Fj[te.kq.API_DISCOVERY].viewDiscoveredEndpoints, te.Fj[te.kq.API_DISCOVERY].saveDiscoveredEndpoint, te.Fj[te.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, te.Fj[te.kq.SCHEMA_VALIDATION].viewSchemasList, te.Fj[te.kq.SCHEMA_VALIDATION].uploadSchema, te.Fj[te.kq.SCHEMA_VALIDATION].viewSchemaAdoption, te.Fj[te.kq.SCHEMA_VALIDATION].downloadSchema, te.Fj[te.kq.SCHEMA_VALIDATION].deleteSchema, te.Fj[te.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, te.Fj[te.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, te.Fj[te.kq.SEQUENCE_ANALYTICS].viewSequencesPage, te.Fj[te.kq.JWT_VALIDATION].viewJWTRules, te.Fj[te.kq.JWT_VALIDATION].addJWTRule, te.Fj[te.kq.JWT_VALIDATION].editJWTRule, te.Fj[te.kq.JWT_VALIDATION].deleteJWTRule, te.Fj[te.kq.JWT_VALIDATION].reprioritizeJWTRule, te.Fj[te.kq.JWT_VALIDATION].viewJWTConfigs, te.Fj[te.kq.JWT_VALIDATION].addJWTConfig, te.Fj[te.kq.JWT_VALIDATION].editJWTConfig, te.Fj[te.kq.JWT_VALIDATION].deleteJWTConfig, te.Fj[te.kq.SETTINGS].redirectToFirewallRulesTemplate, te.Fj[te.kq.SETTINGS].redirectToPages, te.Fj[te.kq.SETTINGS].listSessionIdentifiers, te.Fj[te.kq.SETTINGS].listRequestsContainingSessionIdentifiers, te.Fj[te.kq.SETTINGS].addOrRemoveSessionIdentifiers, te.Fj[te.kq.SETTINGS].redirectToCustomRules, te.Fj[te.kq.SETTINGS].listAllFallthroughSchemas, te.Fj[te.kq.SEQUENCE_RULES].listSequenceRules, te.Fj[te.kq.SEQUENCE_RULES].deleteSequenceRule, te.Fj[te.kq.SEQUENCE_RULES].reorderSequenceRule, te.Fj[te.kq.SEQUENCE_RULES].createSequenceRule, te.Fj[te.kq.SEQUENCE_RULES].editSequenceRule, ve.Z.ANALYTICS, ve.Z.CREATE_AND_DEPLOY, ve.Z.CREATE_MONITOR_LINK, ve.Z.CREATE_MONITOR, ve.Z.CREATE_POOL_LINK, ve.Z.CREATE_POOL, ve.Z.EDIT_MONITOR, ve.Z.EDIT_POOL, ve.Z.LOAD_BALANCING_TABLE, ve.Z.POOL_TABLE, ve.Z.EDIT_MONITOR_LINK, ve.Z.EDIT_POOL_LINK, ...Z.eT, Y.y.SECONDARY_DNS_NOTIFICATION_CREATE, Y.y.SECONDARY_DNS_NOTIFICATION_UPDATE, Y.y.SECONDARY_DNS_NOTIFICATION_DELETE, ce.U.ZONE_TRANSFER_SUCCESS, ce.U.DNS_RECORD_CREATE, ce.U.DNS_RECORD_UPDATE, ce.U.DNS_RECORD_DELETE, z.Y.PEER_DNS_CREATE, z.Y.PEER_DNS_UPDATE, z.Y.PEER_DNS_DELETE, z.Y.ZONE_TRANSFER_ENABLE, z.Y.ZONE_TRANSFER_DISABLE, Ye.V.ARGO_ENABLEMENT, Ye.V.ARGO_GEO_ANALYTICS_FETCH, Ye.V.ARGO_GLOBAL_ANALYTICS_FETCH, J.X.VIEW_BUCKETS_LIST, J.X.CREATE_BUCKET, J.X.VALIDATE_BUCKET, J.X.DELETE_BUCKET, J.X.VIEW_CAPTURES_LIST, J.X.CREATE_SIMPLE_CAPTURE, J.X.CREATE_FULL_CAPTURE, J.X.VIEW_FULL_CAPTURE, J.X.DOWNLOAD_SIMPLE_CAPTURE, F.bK.VIEW_RULES, F.bK.CREATE_RULE, F.bK.UPDATE_RULE, F.bK.DELETE_RULE, F.bK.VIEW_CONFIGURATION, F.bK.CREATE_CONFIGURATION, F.bK.UPDATE_CONFIGURATION, F.bK.DELETE_CONFIGURATION, ee.r8.VIEW_ALERTS, ee.r8.VIEW_ALERTS_HISTORY, ee.r8.MAGIC_OVERVIEW_ANALYTICS, ee.VZ.CREATE_SITE, ee.VZ.CREATE_TUNNEL, ee.VZ.CREATE_STATIC_ROUTE, ue.DC.CLICK_ADAPTIVE_SAMPLING, ue.DC.CLICK_TO_LOG_EXPLORER_BANNER, ue.DC.CLICK_TO_LOG_EXPLORER_DESCRIPTION, ue.DC.CLICK_SWITCH_TO_RAW_LOGS, ue.DC.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", N.U.REGISTER_DOMAIN_SEARCH_SUBMIT, N.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, N.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, N.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, N.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, N.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, N.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, N.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, N.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, N.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, N.U.REGISTER_DOMAIN_CHECKOUT_ERROR, N.U.TRANSFER_DOMAIN_CHANGE_STEP, N.U.RENEW_DOMAIN_COMPLETED, N.U.RESTORE_DOMAIN_INIT, N.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, N.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, N.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, N.U.RESTORE_DOMAIN_FAILURE, N.U.RESTORE_DOMAIN_COMPLETED, N.U.DOMAIN_DELETE_INIT, N.U.DOMAIN_DELETE_COMPLETED, N.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, N.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, N.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, N.U.DOMAIN_DELETE_CONFIRM_DELETE, N.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, N.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, N.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, N.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, N.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL, N.U.DOMAIN_MOVE_START_FLOW, N.U.DOMAIN_MOVE_OPEN_DOCS, N.U.DOMAIN_MOVE_CLOSE_FLOW, N.U.DOMAIN_MOVE_PROGRESS_FLOW, N.U.DOMAIN_MOVE_SUBMIT, N.U.DOMAIN_MOVE_INITIATE_SUCCESS, N.U.DOMAIN_MOVE_INITIATE_ERROR, N.U.DOMAIN_MOVE_CANCEL, N.U.DOMAIN_MOVE_CANCEL_SUCCESS, N.U.DOMAIN_MOVE_CANCEL_ERROR, N.U.ACTION_CENTER_NAVIGATE, N.U.ACTION_CENTER_DOMAIN_MOVE_DECISION, N.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_SUCCESS, N.U.ACTION_CENTER_DOMAIN_MOVE_DECISION_ERROR, ne.z3.CREATE_SECRET, ne.z3.DELETE_SECRET, ne.z3.BIND_SECRET, ne.z3.DUPLICATE_SECRET, ne.z3.EDIT_SECRET, U.KO.CLICK_GET_STARTED_GUIDE, U.KO.CLICK_PIPELINE_DOCUMENTATION, U.KO.CLICK_QUICK_LINK, U.KO.CREATE_PIPELINE, U.KO.DELETE_PIPELINE, U.KO.LIST_PIPELINES, U.KO.VIEW_PIPELINE, S.S.EXISTING_DOMAIN, S.S.NEW_DOMAIN, S.S.WAF_RULESET, S.S.WORKERS, S.S.PAGES, S.S.R2, S.S.ACCOUNT_MEMBERS, re._.TEMPLATE_PRODUCT_SELECTED, re._.TEMPLATE_SELECTED, re._.TEMPLATE_SAVE_DRAFT, re._.TEMPLATE_CANCEL, re._.TEMPLATE_DEPLOY, Be.D.CLICK_GO_BACK_SHARE_MODAL, Be.D.CLICK_MENU_ITEM_SHARE, Be.D.CLICK_ON_CANCEL_SHARE_MODAL, Be.D.CLICK_ON_CLOSE_SHARE_MODAL, Be.D.CLICK_ON_CONFIGURE_SHARE_BUTTON, Be.D.CLICK_ON_DELETE_RULESET, Be.D.CLICK_ON_DEPLOY_BUTTON_SHARE_MODAL, Be.D.CLICK_ON_EDIT_SHARE_PERMISSION, Be.D.CLICK_ON_GO_TO_SOURCE_ACCOUNT, Be.D.CLICK_ON_SHARE_BUTTON_SHARE_MODAL, Be.D.CLICK_ON_SHARE_TABLE_ROW, Le.pR.CLICK_GEOGRAPHICAL_TEMPLATE, Le.pR.CLICK_IP_TEMPLATE, Le.pR.CLICK_USER_AGENT_TEMPLATE, Le.pR.CLICK_ZONE_LOCKDOWN_TEMPLATE, ke.vc.CREATED, ke.vc.ENABLED, ke.vc.DISABLED, ke.vc.DELETED, ke.vc.UPDATED, ke.vc.DOWNLOADED, ge.Gk.REQUEST_REVIEW, ge.Gk.COPY_URL, L.v.FIELD, L.v.OPERATOR, qe.Vj.SHOW_LCC_MIGRATION_BANNER, qe.Vj.CLICK_LCC_DOCUMENTATION, qe.Vj.CLICK_LCC_UPGRADE_GUIDE, qe.Vj.SHOW_LCC_MIGRATION_WARNING, Se.y.CLICK_DISMISS_INELIGIBILITY, Se.y.CLICK_NEXT_STEP, Se.y.CLICK_OPT_IN, Se.y.CLICK_OPT_IN_BUTTON, Se.y.CLICK_OPT_OUT_BUTTON, Se.y.DISPLAY_MODAL, Se.y.DISPLAY_OPT_OUT_MODAL, Se.y.DISPLAY_TOOLTIP_NOT_AVAILABLE, Se.y.CLICK_EXTERNAL_LINK_TOOLTIP_NOT_AVAILABLE, Oe.AZ.LOAD_INSIGHTS, Oe.AZ.OPEN_SIDE_MODAL_INSIGHT, Oe.AZ.CLOSE_SIDE_MODAL_INSIGHT, Oe.AZ.CLICK_ACTION_INSIGHT, ue.DC.ADD_SUSPICIOUS_ACTIVITY_FILTER, ue.DC.REMOVE_SUSPICIOUS_ACTIVITY_FILTER, ue.DC.OPEN_SIDE_DRAWER, ue.DC.CLOSE_SIDE_DRAWER, V.QV[V.Xn].clickLoginFromMobileApp2fa, V.QV[V.Xn].clickTryOther2FAMethodOrBackupCode, V.QV[V.Xn].clickTryRecovery, V.QV[V.xq].clickRegenerateBackupCodes, ae.Vq.APPEAL_MITIGATION),
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
				he = (C, j) => {
					const [oe, pe] = je(j);
					let Ee, Re;
					return (0, n.nM)(X.decode(C)) && (Ee = new H.Uh(C)), pe && pe.length > 0 && (Re = new H.oV(C, pe)), [oe, Ee, Re]
				},
				je = C => {
					const j = me.decode(C);
					if ((0, n.nM)(j)) {
						const oe = j.left.map(({
							context: pe
						}) => pe.map(({
							key: Ee
						}) => Ee)).reduce((pe, Ee) => pe.concat(Ee), []).filter(pe => pe in C);
						return [Pe(oe, C), oe]
					}
					return [C, []]
				},
				Pe = (C, j) => Object.entries(j).reduce((oe, [pe, Ee]) => (C.includes(pe) || (oe[pe] = Ee), oe), {}),
				be = C => (j, oe, pe) => {
					const [Ee, Re, ze] = he(oe, pe);
					if (Re) throw Re;
					return ze && console.error(ze), C(j, oe, Ee)
				};
			var Ne = t("../react/utils/zaraz.ts");
			const mt = {
					identify: !0
				},
				rt = C => (j, oe, pe) => (mt[oe] || Ne.tg === null || Ne.tg === void 0 || Ne.tg.track(oe, pe), C(j, oe, pe));
			var _t = t("../react/common/selectors/userSelectors.ts"),
				Et = t("../node_modules/uuid/dist/esm-browser/v4.js");

			function st(C) {
				for (var j = 1; j < arguments.length; j++) {
					var oe = arguments[j] != null ? Object(arguments[j]) : {},
						pe = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(oe).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(oe, Ee).enumerable
					})), pe.forEach(function(Ee) {
						kt(C, Ee, oe[Ee])
					})
				}
				return C
			}

			function kt(C, j, oe) {
				return j = We(j), j in C ? Object.defineProperty(C, j, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[j] = oe, C
			}

			function We(C) {
				var j = gt(C, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function gt(C, j) {
				if (typeof C != "object" || C === null) return C;
				var oe = C[Symbol.toPrimitive];
				if (oe !== void 0) {
					var pe = oe.call(C, j || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(C)
			}
			const Xe = new Set(["cf_argo", "load_balancing_basic_plus"]),
				et = new Set(["pro", "business"]),
				tt = ({
					price: C,
					ratePlanId: j,
					ratePlanName: oe,
					frequency: pe,
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
						item_id: j,
						item_name: oe || j,
						frequency: pe,
						price: C
					}]
				}),
				W = C => {
					const {
						price: j,
						frequency: oe,
						plan: pe,
						ratePlanId: Ee,
						ratePlanName: Re
					} = C;
					return et.has(pe) ? st({}, tt({
						price: j,
						ratePlanId: Ee,
						ratePlanName: Re,
						frequency: oe,
						isNewSubscription: !0
					}), {
						label: pe
					}) : void 0
				},
				le = C => {
					const {
						price: j,
						frequency: oe,
						ratePlan: pe,
						ratePlanName: Ee
					} = C;
					return Xe.has(pe) ? st({}, tt({
						price: j,
						ratePlanId: pe,
						ratePlanName: Ee,
						frequency: oe,
						isNewSubscription: !0
					}), {
						label: pe
					}) : void 0
				},
				_e = C => {
					const {
						price: j,
						frequency: oe,
						plan: pe,
						ratePlanId: Ee,
						ratePlanName: Re,
						label: ze
					} = C;
					return et.has(pe) ? st({}, tt({
						price: j,
						frequency: oe,
						ratePlanId: Ee,
						ratePlanName: Re,
						isNewSubscription: !1
					}), {
						label: ze || pe
					}) : void 0
				},
				Te = C => {
					const {
						price: j,
						frequency: oe,
						ratePlan: pe,
						ratePlanName: Ee,
						oldRatePlan: Re
					} = C;
					return Xe.has(pe) ? st({}, tt({
						price: j,
						frequency: oe,
						ratePlanId: pe,
						ratePlanName: Ee,
						isNewSubscription: !1
					}), {
						label: `${Re}->${pe}`
					}) : void 0
				},
				De = "pageview",
				Ue = "create zone",
				ot = "create user",
				ct = "Plan Purchase Success",
				Ct = "Product Purchase Success",
				ft = "Plan Update Success",
				Tt = "Product Update Success",
				He = {
					[De]: !0,
					[Ue]: !0,
					[ot]: !0,
					[ct]: !0,
					[Ct]: !0,
					[ft]: !0,
					[Tt]: !0
				},
				Ot = C => {
					var j;
					return !!((j = C.gates.assignments) === null || j === void 0 ? void 0 : j["dx-enable-google-tag-manager"])
				},
				Mt = C => {
					const j = /\|MCMID\|([0-9]+)\|/,
						oe = C.match(j);
					return oe ? oe[1] : void 0
				},
				It = C => {
					var j;
					const {
						deviceViewport: oe,
						page: pe,
						previousPage: Ee,
						pageName: Re,
						utm_campaign: ze,
						_ga: Je,
						"AMCV_8AD56F28618A50850A495FB6%40AdobeOrg": Ve
					} = C, {
						origin: Ze
					} = window.location, at = (0, _t.PR)((0, c.bh)().getState());
					return {
						event: Ee !== void 0 && pe !== Ee ? "virtual_page_view" : "page_load",
						device_type: oe,
						hostname: Ze,
						language: navigator.language,
						locale: (0, l.r)((0, c.bh)().getState()),
						page_location: pe ? `${Ze}${pe}` : "[redacted]",
						page_path: pe ? `${pe}` : "[redacted]",
						page_referrer: Ee ? `${Ze}/${Ee}` : "[redacted]",
						page_timestamp: new Date().toISOString(),
						page_title: Re || "[redacted]",
						page_url: pe ? `${Ze}${pe}` : "[redacted]",
						query: ze ? `?utm_campaign=${ze}` : "[redacted]",
						user_properties: {
							ga_client_id: (j = Je) !== null && j !== void 0 ? j : void 0,
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
						status: j
					} = C;
					return j === "success" ? {
						event: "new_user_create",
						page_timestamp: new Date().toISOString(),
						currency: "USD",
						value: 0
					} : void 0
				},
				Nt = (C, j) => {
					switch (C) {
						case De:
							return It(j);
						case Ue:
							return Rt();
						case ot:
							return wt(j);
						case ct:
							return W(j);
						case Ct:
							return le(j);
						case ft:
							return _e(j);
						case Tt:
							return Te(j);
						default:
							return
					}
				},
				yt = C => (j, oe, pe) => {
					if (He[oe]) {
						var Ee;
						const Re = Nt(oe, pe);
						Re && ((Ee = window.dataLayer) === null || Ee === void 0 || Ee.push(Re))
					}
					return C(j, oe, pe)
				};
			var At = t("../react/utils/cookiePreferences.ts");

			function vt(C) {
				for (var j = 1; j < arguments.length; j++) {
					var oe = arguments[j] != null ? Object(arguments[j]) : {},
						pe = Object.keys(oe);
					typeof Object.getOwnPropertySymbols == "function" && pe.push.apply(pe, Object.getOwnPropertySymbols(oe).filter(function(Ee) {
						return Object.getOwnPropertyDescriptor(oe, Ee).enumerable
					})), pe.forEach(function(Ee) {
						xt(C, Ee, oe[Ee])
					})
				}
				return C
			}

			function xt(C, j, oe) {
				return j = Ft(j), j in C ? Object.defineProperty(C, j, {
					value: oe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : C[j] = oe, C
			}

			function Ft(C) {
				var j = Pt(C, "string");
				return typeof j == "symbol" ? j : String(j)
			}

			function Pt(C, j) {
				if (typeof C != "object" || C === null) return C;
				var oe = C[Symbol.toPrimitive];
				if (oe !== void 0) {
					var pe = oe.call(C, j || "default");
					if (typeof pe != "object") return pe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (j === "string" ? String : Number)(C)
			}
			const Bt = C => {
					const j = Ot((0, c.bh)().getState());
					r().init(vt({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Dt() && !(0, o.gm)() && y(),
						middlewares: [A, be, k, rt, ...j ? [yt] : []]
					}, C))
				},
				Ut = () => {
					r().identify(vt({}, (0, e.getAttribution)(), {
						locale: (0, l.r)((0, c.bh)().getState()),
						isCloudflare: !!(0, m.Jd)(),
						isE2e: Boolean(void 0)
					}))
				},
				Dt = () => !0,
				Lt = () => {
					(0, At.kT)("sparrow_id")
				},
				y = () => (0, At.Xm)()
		},
		"../utils/initStyles.ts": function($, E, t) {
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
				m = () => {
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
			(0, e.fF)(m), E.Z = m
		},
		"../utils/sentry/lastSentEventId.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let o = "";
				return {
					setEventId: m => (!m || typeof m != "string" || (o = m), o),
					getEventId: () => o
				}
			})()
		},
		"../utils/zaraz.ts": function($, E, t) {
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
				for (var g = 1; g < arguments.length; g++) {
					var u = arguments[g] != null ? Object(arguments[g]) : {},
						d = Object.keys(u);
					typeof Object.getOwnPropertySymbols == "function" && d.push.apply(d, Object.getOwnPropertySymbols(u).filter(function(I) {
						return Object.getOwnPropertyDescriptor(u, I).enumerable
					})), d.forEach(function(I) {
						r(i, I, u[I])
					})
				}
				return i
			}

			function r(i, g, u) {
				return g = o(g), g in i ? Object.defineProperty(i, g, {
					value: u,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : i[g] = u, i
			}

			function o(i) {
				var g = c(i, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function c(i, g) {
				if (typeof i != "object" || i === null) return i;
				var u = i[Symbol.toPrimitive];
				if (u !== void 0) {
					var d = u.call(i, g || "default");
					if (typeof d != "object") return d;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(i)
			}
			const l = {
					track: (i, g) => null,
					set: (i, g) => console.log(`zaraz.set(${i}, ${g})`)
				},
				m = {
					track: (i, g) => {
						var u;
						(u = window.zaraz) === null || u === void 0 || u.track(i, e({}, g, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (i, g) => {
						var u;
						return (u = window.zaraz) === null || u === void 0 ? void 0 : u.set(i, g)
					}
				};
			let s;
			const p = () => {
					window.zaraz, s = m
				},
				f = ["email", "first_name", "last_name"],
				n = i => {
					f.forEach(g => {
						var u;
						(u = s) === null || u === void 0 || u.set(g, i[g])
					})
				},
				a = () => {
					n({})
				}
		},
		"../../../common/component/component-filter-bar/src/FilterBuilder.jsx": function($, E, t) {
			"use strict";
			var e = t("webpack/sharing/consume/default/react/react"),
				r = t.n(e),
				o = t("../../../common/component/component-filter-bar/node_modules/prop-types/index.js"),
				c = t.n(o),
				l = t("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				m = t("webpack/sharing/consume/default/@cloudflare/intl-react/@cloudflare/intl-react"),
				s = t.n(m),
				p = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-input/es/index.js"),
				f = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-button/es/index.js"),
				n = t("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				a = t("../../../common/component/component-filter-bar/node_modules/@cloudflare/component-arrow-swivel/es/index.js"),
				i = t("../../../../node_modules/@cloudflare/component-forms/es/index.js"),
				g = t("../../../../node_modules/@cloudflare/elements/es/index.js"),
				u = t("../../../common/component/component-filter-bar/src/MultiSelect.js"),
				d = t("../../../common/component/component-filter-bar/src/ViewMoreLink.jsx"),
				I = t("../../../common/component/component-filter-bar/src/EditFilterDropdown.jsx"),
				D = t("../../../common/component/component-filter-bar/src/constants.js"),
				h = t("../../../common/component/component-filter-bar/src/utils.js");

			function v() {
				return v = Object.assign ? Object.assign.bind() : function(B) {
					for (var O = 1; O < arguments.length; O++) {
						var M = arguments[O];
						for (var F in M) Object.prototype.hasOwnProperty.call(M, F) && (B[F] = M[F])
					}
					return B
				}, v.apply(this, arguments)
			}

			function w(B) {
				for (var O = 1; O < arguments.length; O++) {
					var M = arguments[O] != null ? Object(arguments[O]) : {},
						F = Object.keys(M);
					typeof Object.getOwnPropertySymbols == "function" && F.push.apply(F, Object.getOwnPropertySymbols(M).filter(function(ee) {
						return Object.getOwnPropertyDescriptor(M, ee).enumerable
					})), F.forEach(function(ee) {
						_(B, ee, M[ee])
					})
				}
				return B
			}

			function _(B, O, M) {
				return O = T(O), O in B ? Object.defineProperty(B, O, {
					value: M,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : B[O] = M, B
			}

			function T(B) {
				var O = k(B, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function k(B, O) {
				if (typeof B != "object" || B === null) return B;
				var M = B[Symbol.toPrimitive];
				if (M !== void 0) {
					var F = M.call(B, O || "default");
					if (typeof F != "object") return F;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(B)
			}
			const A = 70,
				P = (0, l.createStyledComponent)(({
					showOverflow: B
				}) => w({
					position: "relative",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					width: "100%"
				}, B ? {} : {
					maxHeight: A,
					overflow: "hidden"
				})),
				S = (0, l.createStyledComponent)(() => ({
					marginBottom: ".25rem",
					"&:not(:last-child)": {
						marginRight: ".25rem"
					}
				})),
				b = (0, l.createStyledComponent)(({
					theme: B
				}) => ({
					backgroundColor: B.colors.background,
					py: 1,
					px: 2,
					borderRadius: B.radii[2],
					border: `1px solid ${B.colors.gray[7]}`,
					fontSize: B.fontSizes[2],
					position: "relative",
					cursor: "pointer",
					transition: "border-color 120ms ease-out",
					":hover": {
						borderColor: B.colors.gray[4]
					}
				}), "div"),
				L = (0, l.createStyledComponent)(() => ({
					mr: 1
				}), "span"),
				R = (0, l.createStyledComponent)(({
					theme: B
				}) => ({
					color: B.colors.gray[4],
					mr: 1
				}), "span"),
				H = (0, l.createStyledComponent)(() => ({
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
				ae = (0, l.createStyledComponent)(({
					buttonStyle: B
				}) => w({
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
				}, B), f.zx),
				se = (0, l.createStyledComponent)(() => ({
					mr: 2,
					fontSize: 2,
					display: "none",
					"@media print": {
						display: "initial"
					}
				}), "h4"),
				ce = (0, l.createStyledComponent)(({
					theme: B
				}) => ({
					backgroundColor: "transparent",
					borderColor: "transparent",
					p: 0,
					lineHeight: 1,
					display: "inline-block",
					color: B.colors.gray[4],
					transition: "color 120ms ease-out",
					cursor: "pointer",
					":hover": {
						color: B.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":active": {
						color: B.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					":focus": {
						color: B.colors.gray[1],
						backgroundColor: "transparent",
						borderColor: "transparent"
					},
					"@media print": {
						display: "none"
					}
				}), "button"),
				Y = (0, l.createStyledComponent)(() => ({
					display: "flex",
					justifyContent: "space-between",
					alignItems: "start",
					width: "100%",
					flexWrap: "wrap"
				})),
				z = B => B.current ? [...B.current.children].reduce((O, M) => (M.offsetTop >= A && O++, O), 0) : 0;
			let G = 0;
			class N extends e.Component {
				constructor() {
					super();
					_(this, "overflowWrapper", (0, e.createRef)()), _(this, "hasOverflowed", O => {
						const M = z(this.overflowWrapper);
						O.scrollHeight > A && M >= 1 && !this.state.hasOverflowed ? this.setState({
							hasOverflowed: !0
						}) : (O.scrollHeight < A || M === 0) && this.state.hasOverflowed === !0 && this.setState({
							hasOverflowed: !1
						})
					}), _(this, "addNewFilter", () => {
						const {
							filterDefinitions: O
						} = this.props, M = (0, h.TE)(O), F = Object.keys(M)[0];
						this.setState({
							openFilter: this.props.filters.length + 1,
							filterChanges: {
								key: F,
								operator: (0, h.uv)(F, M),
								value: (0, h.TT)(F, M)
							}
						})
					}), _(this, "handleOpenFilterEdit", O => {
						this.setState({
							openFilter: O,
							filterChanges: w({}, this.props.filters[O])
						})
					}), _(this, "handleRemoveFilterClick", (O, M) => {
						O.stopPropagation(), this.removeFilter(M)
					}), _(this, "removeFilter", O => {
						const {
							handleFiltersChange: M
						} = this.props, F = [...this.props.filters], ee = F[O];
						F.splice(O, 1), M(F), this.closeOpenFilterChanges(), this.props.onRemoveFilter({
							field: ee.key,
							operator: ee.operator,
							value: ee.value
						})
					}), _(this, "closeOpenFilterChanges", () => {
						this.setState({
							invalid: !1,
							openFilter: null,
							filterChanges: null
						})
					}), _(this, "handleFilterSubmit", O => {
						const {
							filterDefinitions: M
						} = this.props;
						O.preventDefault();
						const {
							filterChanges: F
						} = this.state, ee = typeof M[F.key].parse == "function" ? Array.isArray(F.value) ? F.value.map(M[F.key].parse) : M[F.key].parse(F.value) : F.value;
						if (M[F.key].validate && (Array.isArray(ee) ? !ee.every(M[F.key].validate) : !M[F.key].validate(ee))) return this.setState({
							invalid: !0
						});
						const J = [...this.props.filters],
							re = w({}, F, {
								value: ee
							}),
							Q = !J[this.state.openFilter];
						Q ? J.push(re) : J[this.state.openFilter] = w({}, re), this.props.handleFiltersChange(J, re), (Q ? this.props.onAddFilter : this.props.onEditFilter)({
							field: re.key,
							operator: re.operator,
							value: re.value
						}), this.closeOpenFilterChanges()
					}), _(this, "handlePendingKeyChange", ({
						value: O
					}) => {
						const {
							filterDefinitions: M
						} = this.props;
						this.setState({
							invalid: !1,
							filterChanges: {
								key: O,
								operator: (0, h.uv)(O, M),
								value: (0, h.TT)(O, M)
							}
						})
					}), _(this, "handlePendingOperatorChange", ({
						value: O
					}) => {
						let M = w({}, this.state.filterChanges, {
							operator: O
						});
						if ((0, h.dr)(O)) {
							var F, ee;
							((F = this.state.filterChanges) === null || F === void 0 ? void 0 : F.value) && !Array.isArray((ee = this.state.filterChanges) === null || ee === void 0 ? void 0 : ee.value) && (M.value = [this.state.filterChanges.value])
						} else {
							var J, re, Q;
							((J = this.state.filterChanges) === null || J === void 0 ? void 0 : J.value) && Array.isArray((re = this.state.filterChanges) === null || re === void 0 ? void 0 : re.value) && ((Q = this.state.filterChanges) === null || Q === void 0 ? void 0 : Q.value.length) > 0 && (M.value = this.state.filterChanges.value[0])
						}
						this.setState({
							invalid: !1,
							filterChanges: M
						})
					}), _(this, "handlePendingValueChange", O => {
						this.setState({
							invalid: !1,
							filterChanges: w({}, this.state.filterChanges, {
								value: O
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
						id: ++G
					}, this.renderPendingChangeValue = this.renderPendingChangeValue.bind(this), this.handleFilterSubmit = this.handleFilterSubmit.bind(this), this.handlePendingKeyChange = this.handlePendingKeyChange.bind(this), this.handlePendingOperatorChange = this.handlePendingOperatorChange.bind(this)
				}
				componentDidMount() {
					this.hasOverflowed(this.overflowWrapper.current)
				}
				componentDidUpdate(O) {
					O.filters !== this.props.filters && this.closeOpenFilterChanges(), this.hasOverflowed(this.overflowWrapper.current)
				}
				renderPendingChangeValue(O) {
					const {
						formatLabel: M,
						filterDefinitions: F
					} = this.props, {
						operator: ee
					} = this.state.filterChanges, J = F[this.state.filterChanges.key], re = this.state.filterChanges.value, Q = V => Array.isArray(V) ? V.map(ne => ne.value) : (V == null ? void 0 : V.value) || null;
					if (J.renderValueComponent) return J.renderValueComponent({
						value: this.state.filterChanges.value,
						onChange: this.handlePendingValueChange
					});
					switch (J.type) {
						case D.k.custom: {
							var U;
							return r().createElement(J.CustomComponent, v({
								value: this.state.filterChanges.value,
								onChange: this.handlePendingValueChange
							}, (U = J == null ? void 0 : J.customProps) !== null && U !== void 0 ? U : {}))
						}
						case D.k.select:
							return (0, h.dr)(ee) ? r().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !J.options,
								value: typeof re.split == "function" ? re == null ? void 0 : re.split(",") : Array.isArray(re) ? re : [],
								options: J.options ? J.options.map(V => ({
									value: V.value || V,
									label: V.label || M(this.state.filterChanges.key, V, O)
								})) : re ? (Array.isArray(re) ? re : re.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: r().createElement(m.Trans, {
									id: J.options ? "filter_editor.value_in_select_placeholder" : "filter_editor.value_in_creatable_placeholder",
									_: J.options ? "Select multiple values" : "Enter multiple values"
								}),
								onChange: V => {
									this.handlePendingValueChange(Q(V))
								},
								isValidNewOption: V => {
									const ne = J.validate;
									return !ne && V || V && ne([V])
								},
								getNewOptionData: (V, ne) => ({
									value: V,
									label: ne
								})
							}) : r().createElement(i.hQ, {
								hideLabel: !0,
								value: re,
								options: J.options.map(V => ({
									value: V,
									label: M(this.state.filterChanges.key, V, O)
								})),
								onChange: ({
									value: V
								}) => this.handlePendingValueChange(V)
							});
						case D.k.string:
						default:
							return (0, h.dr)(ee) ? r().createElement(u.Z, {
								searchable: !0,
								multi: !0,
								creatable: !0,
								value: typeof re.split == "function" ? re == null ? void 0 : re.split(",") : Array.isArray(re) ? re : [],
								options: re ? (Array.isArray(re) ? re : re.split(",")).map(V => ({
									label: V,
									value: V
								})) : [],
								noOptionsMessage: () => null,
								placeholder: O.t("analytics.report.filters.labels.placeholder", {
									example: F[this.state.filterChanges.key].example,
									_: ""
								}),
								onChange: V => {
									this.handlePendingValueChange(Q(V))
								},
								isValidNewOption: V => {
									const ne = J.validate;
									return !ne && V || V && ne([V])
								},
								getNewOptionData: (V, ne) => ({
									value: V,
									label: ne
								}),
								formatCreateLabel: V => O.t("filter_editor.value_create_label", {
									value: V
								})
							}) : r().createElement(m.I18n, null, V => r().createElement(p.I, {
								value: this.state.filterChanges.value,
								onChange: ne => this.handlePendingValueChange(ne.target.value),
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
						formatLabel: O,
						filterDefinitions: M,
						modalStyles: F,
						filterIconType: ee,
						buttonStyle: J,
						secondaryActionComponent: re
					} = this.props, Q = z(this.overflowWrapper), U = `filterPanel${this.state.id}`, V = this.state.openFilter !== null;
					return r().createElement(m.I18n, null, ne => r().createElement(g.ZC, {
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						mr: "auto",
						width: "100%"
					}, r().createElement(Y, null, r().createElement(g.ZC, {
						display: "flex",
						flexDirection: "row"
					}, r().createElement(ae, {
						type: "primary",
						onClick: this.addNewFilter,
						"aria-expanded": V,
						"aria-controls": U,
						inverted: !0,
						buttonStyle: J
					}, r().createElement(n.J, {
						type: ee || "add",
						mr: 1,
						label: ne.t("common.add", {
							_: "Add"
						})
					}), r().createElement(m.Trans, {
						id: "analytics.report.filters.labels.add_filter",
						_: "Add filter"
					})), !!re && r().createElement(g.ZC, null, re)), this.props.filters.length > 0 && r().createElement(se, null, r().createElement(m.Trans, {
						id: "analytics.report.filters.labels.filters",
						_: "Filters:"
					})), this.props.children), r().createElement(P, {
						innerRef: this.overflowWrapper,
						overflowLimit: A,
						showOverflow: this.state.showOverflow
					}, this.props.filters.map((ge, de) => {
						const {
							key: ue,
							operator: te,
							value: ye
						} = ge, Oe = M[ue].ignoreLabelTranslation ? M[ue].label : ne.t(M[ue].label), Ie = ne.t(`analytics.report.filters.operators.${te}`), Le = Array.isArray(ye) ? ye.map(ke => O(ue, ke, ne)).join(", ") : O(ue, ye, ne), Se = `${Oe} ${Ie} ${Le}`;
						return r().createElement(S, {
							key: `${ue}-${te}-${ye}`,
							title: Se
						}, r().createElement(b, {
							onClick: () => this.handleOpenFilterEdit(de)
						}, r().createElement(g.ZC, {
							display: "flex"
						}, r().createElement(L, null, Oe), r().createElement(R, null, Ie), r().createElement(H, null, Le), (0, h.oN)(ge, M) ? r().createElement(a.OE, {
							startAngle: 90,
							color: "gray.4"
						}) : r().createElement(ce, {
							onClick: ke => this.handleRemoveFilterClick(ke, de),
							"aria-label": "remove"
						}, r().createElement(n.J, {
							type: "remove"
						})))))
					})), V && r().createElement(I.Z, {
						id: U,
						filterDefinitions: M,
						closeOpenFilterChanges: this.closeOpenFilterChanges,
						handleFilterSubmit: this.handleFilterSubmit,
						handlePendingKeyChange: this.handlePendingKeyChange,
						handlePendingOperatorChange: this.handlePendingOperatorChange,
						renderPendingChangeValue: this.renderPendingChangeValue,
						isNew: this.state.openFilter > this.props.filters.length,
						isPersistent: (0, h.oN)(this.state.filterChanges, M),
						filterChanges: this.state.filterChanges,
						invalid: this.state.invalid,
						formatLabel: O,
						modalStyles: F
					}), this.state.hasOverflowed && r().createElement(d.Z, {
						count: Q,
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
		"../../../common/component/component-filter-bar/src/index.js": function($, E, t) {
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
		"../../../common/intl/intl-core/src/errors.ts": function($, E, t) {
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
			var m = null
		},
		"../../../common/util/types/src/api/domain.ts": function($, E, t) {
			"use strict";
			t.d(E, {
				Aw: function() {
					return k
				},
				Ib: function() {
					return _
				},
				Ks: function() {
					return A
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
					return g
				},
				TS: function() {
					return u
				},
				W7: function() {
					return h
				},
				dN: function() {
					return P
				},
				eF: function() {
					return w
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
				m = e.eg.object({
					registrant: c.optional,
					technical: c.optional,
					administrator: c.optional,
					billing: c.optional
				}),
				s = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: m.optional,
					years: e.eg.number
				}),
				p = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let f = function(S) {
				return S.ONBOARDING_INITIATED = "Onboarding Initiated", S.ONBOARDED = "Onboarded", S.PENDING_REGISTRY_LOCK = "Pending Registry Lock", S.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", S.REGISTRY_UNLOCKED = "Registry Unlocked", S.LOCKED = "Locked", S.FAILED_TO_LOCK = "Failed To Lock", S.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", S.UNLOCKED = "Unlocked", S.OFFBOARDED = "Offboarded", S
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
				u = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let d = function(S) {
				return S.PENDING = "pending", S.VERIFIED = "verified", S.REJECTED = "rejected", S.PENDING_DELETE = "pending_delete", S.DELETED = "deleted", S
			}({});
			const I = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(d),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				D = e.eg.object({
					designated_approvers: e.eg.array(I)
				});
			let h = function(S) {
				return S.PENDING = "pending", S.PENDING_UPDATE = "pending_update", S.ENABLED = "enabled", S.DISABLED = "disabled", S
			}({});
			const v = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(h)
				}),
				w = e.eg.intersection([v, D]),
				_ = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let T = function(S) {
				return S.UNLOCK_APPROVAL = "UnlockApprovalRequest", S.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", S.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", S.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", S
			}({});
			const k = e.eg.object({
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
				})
		},
		"../../../common/util/types/src/api/phases/fields.tsx": function($, E, t) {
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
					return m
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
				m = function(s) {
					return s.DEFAULT = "", s.XML = "text/xml", s.JSON = "application/json", s.TEXT = "text/plain", s.HTML = "text/html", s
				}({})
		},
		"../../../common/util/types/src/utils/index.ts": function($, E, t) {
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
		"../../../dash/intl/intl-translations/src/index.ts": function($, E, t) {
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
		"../react/common/out.css": function($, E, t) {
			var e = t("../node_modules/css-loader/index.js!../react/common/out.css");
			typeof e == "string" && (e = [
				[$.id, e, ""]
			]);
			var r, o, c = {
				hmr: !0
			};
			c.transform = r, c.insertInto = void 0;
			var l = t("../../../../node_modules/style-loader/lib/addStyles.js")(e, c);
			e.locals && ($.exports = e.locals)
		},
		"../node_modules/css-loader/index.js!../react/common/out.css": function($, E, t) {
			E = $.exports = t("../node_modules/css-loader/lib/css-base.js")(!1), E.push([$.id, `/*! tailwindcss v4.1.8 | MIT License | https://tailwindcss.com */
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
  .bg-secondary {
    background-color: var(--color-secondary);
  }
  .bg-surface {
    background-color: var(--color-surface);
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
		"../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$": function($, E, t) {
			var e = {
				"./favicon-cookie.ico": ["../react/app/assets/favicon-cookie.ico", 48837],
				"./favicon-dev.ico": ["../react/app/assets/favicon-dev.ico", 81377],
				"./favicon-staging.ico": ["../react/app/assets/favicon-staging.ico", 97266],
				"./favicon-zeit.ico": ["../react/app/assets/favicon-zeit.ico", 15850]
			};

			function r(o) {
				if (!t.o(e, o)) return Promise.resolve().then(function() {
					var m = new Error("Cannot find module '" + o + "'");
					throw m.code = "MODULE_NOT_FOUND", m
				});
				var c = e[o],
					l = c[0];
				return t.e(c[1]).then(function() {
					return t.t(l, 1 | 16)
				})
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.id = "../react/app/assets lazy recursive ^\\.\\/favicon\\-.*\\.ico$", $.exports = r
		}
	}
]);

//# debugId=fef718bf-a0f6-5603-8c03-678115ff9edf